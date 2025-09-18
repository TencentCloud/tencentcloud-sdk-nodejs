import { describe, it, expect, vi, beforeEach } from "vitest"
import { Credential } from "common/interface"
import fetch from "common/http/fetch"
import CvmRoleCredential from "common/cvm_role_credential"

vi.mock("common/http/fetch", () => ({
  default: vi.fn(),
}))

describe("CvmRoleCredential", () => {
  let mockFetch: ReturnType<typeof vi.fn>
  const mockRoleName = "test-role"
  const mockCredential = {
    TmpSecretId: "test-id",
    TmpSecretKey: "test-key",
    ExpiredTime: 1671330188,
    Expiration: "2022-12-18T00:00:00Z",
    Token: "test-token",
    Code: "Success",
  }

  beforeEach(() => {
    mockFetch = vi.mocked(fetch)
    vi.clearAllMocks()
  })

  it("should get role name successfully", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve(mockRoleName),
    })

    const credential = new CvmRoleCredential()
    const roleName = await credential["getRoleName"]()
    expect(roleName).toBe(mockRoleName)
    expect(fetch).toHaveBeenCalledWith(
      "http://metadata.tencentyun.com/latest/meta-data/cam/security-credentials/",
      {}
    )
  })

  it("should throw error when fetching role name fails", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
    })

    const credential = new CvmRoleCredential()
    await expect(credential["getRoleName"]()).rejects.toThrow(
      "Get cvm role name failed, Please confirm whether the role is bound"
    )
  })

  it("should get role credential successfully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockCredential),
    })

    const credential = new CvmRoleCredential()
    const result = await credential["getRoleCredential"]("test-role")
    expect(result).toEqual(mockCredential)
    expect(fetch).toHaveBeenCalledWith(
      "http://metadata.tencentyun.com/latest/meta-data/cam/security-credentials/test-role",
      {}
    )
  })

  it("should throw error when fetching role credential fails", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
    })

    const credential = new CvmRoleCredential()
    await expect(credential["getRoleCredential"]("test-role")).rejects.toThrow(
      "Get credential from metadata server by role name test-role failed, http code: undefined"
    )
  })

  it("should handle credential expiration", async () => {
    const expirationCredential = {
      ...mockCredential,
      ExpiredTime: Date.now() / 1000 - 60, // Expired
    }
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockRoleName),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(expirationCredential),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            ...mockCredential,
            ExpiredTime: Date.now() / 1000 + 60,
          }),
      })

    const credential = new CvmRoleCredential()
    const result = await credential.getCredential()
    await expect(result).toEqual({
      secretId: mockCredential.TmpSecretId,
      secretKey: mockCredential.TmpSecretKey,
      token: mockCredential.Token,
    })
    expect(mockFetch).toHaveBeenCalledTimes(3)
  })
})

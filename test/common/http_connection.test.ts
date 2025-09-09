import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { HttpConnection } from "common/http/http_connection"
import fetch from "common/http/fetch"
import FormData from "form-data"

vi.mock("common/http/fetch", () => ({
  default: vi.fn(),
}))

describe("HttpConnection", () => {
  let mockFetch: ReturnType<typeof vi.fn>
  const mockResponse = {
    Response: {
      RequestId: "test-request-id",
    },
  }
  const mockResolvedValue = {
    status: 200,
    json: vi.fn().mockResolvedValue(mockResponse),
    headers: new Map(),
  }
  const params = {
    Action: "CreateInstance",
    InstanceName: "test-instance",
    InstanceType: "S1.SMALL1",
  }
  const defaultArgs = {
    method: "POST",
    url: "https://cvm.tencentcloudapi.com",
    data: params,
    service: "cvm",
    action: "CreateInstance",
    region: "ap-guangzhou",
    version: "2017-03-12",
    secretId: "test-secret-id",
    secretKey: "test-secret-key",
    token: "test-token",
    requestClient: "SDK_NODEJS",
    language: "zh-CN",
    timeout: 60000,
  }

  beforeEach(() => {
    mockFetch = vi.mocked(fetch)
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("doRequest", () => {
    it("should make POST request with JSON body correctly", async () => {
      mockFetch.mockResolvedValue(mockResolvedValue)

      const result = await HttpConnection.doRequestWithSign3(defaultArgs)

      expect(mockFetch).toHaveBeenCalledWith(
        defaultArgs.url,
        expect.objectContaining({
          headers: expect.objectContaining({
            Host: expect.stringContaining("cvm.tencentcloudapi.com"),
            "Content-Type": "application/json",
            "X-TC-Action": params.Action,
            "X-TC-Region": defaultArgs.region,
            "X-TC-Version": defaultArgs.version,
            "X-TC-Token": defaultArgs.token,
            "X-TC-RequestClient": defaultArgs.requestClient,
            "X-TC-Language": defaultArgs.language,
            Authorization: expect.stringContaining("TC3-HMAC-SHA256"),
          }),
          body: expect.stringContaining('"Action":"CreateInstance"'),
        })
      )
      expect(result).toBe(mockResolvedValue)
    })

    it("should make POST multipart request correctly", async () => {
      mockFetch.mockResolvedValue(mockResolvedValue)

      const result = await HttpConnection.doRequestWithSign3({
        ...defaultArgs,
        multipart: true,
      })

      const mockCalls = mockFetch.mock.calls[0][1]
      expect(mockCalls.headers["content-type"]).toContain("multipart/form-data; boundary=")
      expect(mockCalls.body).toBeInstanceOf(FormData)
      expect(result).toBe(mockResolvedValue)
    })

    it("shouold serialize payload correctly", async () => {
      mockFetch.mockResolvedValue(mockResolvedValue)

      const result = await HttpConnection.doRequestWithSign3({
        ...defaultArgs,
        data: {
          Number: BigInt("123456789012345678901234567890"),
        },
      })

      const mockCalls = mockFetch.mock.calls[0][1]
      expect(mockCalls.body).toBe('{"Number":123456789012345678901234567890}')
      expect(result).toBe(mockResolvedValue)
    })
  })
})

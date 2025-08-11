import { describe, it, expect } from "vitest"
import Sign from "common/sign"
import TencentCloudSDKException from "common/exception/tencent_cloud_sdk_exception"

describe("Sign", () => {
  const secretId = "test-secret-id"
  const secretKey = "test-secret-key"
  const signStr = "test-sign-string"
  const commonParams = {
    url: "https://cvm.tencentcloudapi.com",
    payload: { Action: "DescribeInstances", Version: "2017-03-12" },
    timestamp: 1640995200,
    service: "cvm",
    secretId: secretId,
    secretKey: secretKey,
    multipart: false,
    boundary: "",
    headers: {
      "X-TC-TraceId": "test-trace-id",
    },
  }

  describe("sign", () => {
    it("should generate HmacSHA1 signature correctly", () => {
      const result = Sign.sign(secretKey, signStr, "HmacSHA1")

      expect(result).toBe("XjwGF9U5zdo93uMrX2b1ZDwoFOo=")
    })

    it("should generate HmacSHA256 signature correctly", () => {
      const result = Sign.sign(secretKey, signStr, "HmacSHA256")

      expect(result).toBe("6c+oFbRDL8wKcVPPwa4KtGMOzMuJTQDwV+8tMMPf7oM=")
    })

    it("should throw error for invalid sign method", () => {
      expect(() => {
        Sign.sign("secret", "string", "InvalidMethod" as any)
      }).toThrow(TencentCloudSDKException)
    })
  })

  describe("sign3", () => {
    it("should generate sign3 signature correctly", () => {
      const result = Sign.sign3({
        ...commonParams,
        method: "POST",
        headers: {
          ...commonParams.headers,
          "Content-Type": "application/json",
        },
      })

      expect(result).toBe(
        "TC3-HMAC-SHA256 Credential=test-secret-id/2022-01-01/cvm/tc3_request, SignedHeaders=content-type;host, Signature=96473b50fe407833672a5d6d067238d88bb44c8abcc39ef83baa3132afbfadd3"
      )
    })

    it("should handle GET requests correctly", () => {
      const result = Sign.sign3({
        ...commonParams,
        method: "GET",
        headers: {
          ...commonParams.headers,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      expect(result).toBe(
        "TC3-HMAC-SHA256 Credential=test-secret-id/2022-01-01/cvm/tc3_request, SignedHeaders=content-type;host, Signature=39ce411ac32014b7d814118b33f82d3445be566f67e1f4b369ccdc3791ce9a13"
      )
    })

    it("should handle multipart requests", () => {
      const result = Sign.sign3({
        ...commonParams,
        method: "POST",
        payload: {
          ...commonParams.payload,
          File: Buffer.from("test file content"),
        },
        multipart: true,
        boundary: "--------------------------613711929803404244049248",
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=--------------------------613711929803404244049248",
        },
      })

      expect(result).toBe(
        "TC3-HMAC-SHA256 Credential=test-secret-id/2022-01-01/cvm/tc3_request, SignedHeaders=content-type;host, Signature=35ca4cc5b23393f8072e9f355fa26fe9504e38fa8d1b2dfc867383e0fa32c16b"
      )
    })
  })
})

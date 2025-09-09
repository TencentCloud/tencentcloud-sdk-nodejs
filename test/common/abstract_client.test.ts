import { describe, it, expect, vi, beforeEach } from "vitest"
import { AbstractClient, ClientConfig, ClientProfile } from "common"
import { Credential } from "common"
import { HttpConnection } from "common/http/http_connection"
import TencentCloudSDKHttpException from "common/exception/tencent_cloud_sdk_exception"
import { SSEResponseModel } from "common/sse_response_model"

vi.mock("common/http/http_connection", () => ({
  HttpConnection: {
    doRequest: vi.fn(),
    doRequestWithSign3: vi.fn(),
  },
}))

vi.mock("common/sign", () => ({
  default: {
    sign: vi.fn(() => "mock-signature"),
    sign3: vi.fn(() => "mock-signature-3"),
  },
}))

vi.mock("common/sse_response_model", () => ({
  SSEResponseModel: vi.fn().mockImplementation(() => ({
    on: vi.fn(),
    off: vi.fn(),
  })),
}))

vi.mock("uuid", () => ({
  v4: vi.fn(() => "mock-uuid"),
}))

describe("AbstractClient", () => {
  let client: AbstractClient
  let mockCredential: Credential
  let endpoint: string
  let version: string
  let region: string
  let profile: ClientProfile
  let clientConfig: ClientConfig
  const mockResponse = {
    Response: {
      RequestId: "test-request-id",
    },
  }
  const mockResolvedValue = {
    status: 200,
    json: vi.fn().mockResolvedValue(mockResponse),
    headers: new Map(),
  } as any

  beforeEach(() => {
    mockCredential = {
      secretId: "test-secret-id",
      secretKey: "test-secret-key",
      token: "test-token",
    }
    endpoint = "cvm.tencentcloudapi.com"
    version = "2017-03-12"
    region = "ap-guangzhou"
    profile = {
      signMethod: "HmacSHA256",
      httpProfile: {
        reqMethod: "POST",
        protocol: "http://",
        reqTimeout: 30,
      },
    }
    clientConfig = {
      credential: mockCredential,
      region,
      profile,
    }

    client = new AbstractClient(endpoint, version, { credential: mockCredential })

    vi.clearAllMocks()
  })

  describe("constructor", () => {
    it("should initialize with provided config", () => {
      expect(client.endpoint).toBe(endpoint)
      expect(client.apiVersion).toBe(version)
      const credential = client.credential as Credential
      expect(credential.secretId).toBe(mockCredential.secretId)
      expect(credential.secretKey).toBe(mockCredential.secretKey)
      expect(credential.token).toBe(mockCredential.token)
    })

    it("should use custom parameter from profile", () => {
      const customEndpoint = "custom.tencentcloudapi.com"
      const customClient = new AbstractClient(endpoint, version, {
        ...clientConfig,
        profile: {
          ...profile,
          httpProfile: {
            ...profile.httpProfile,
            endpoint: customEndpoint,
          },
        },
      })
      expect(customClient.endpoint).toBe(customEndpoint)
      expect(customClient.region).toBe(region)
      expect(customClient.profile.signMethod).toEqual(profile.signMethod)
      expect(customClient.profile.httpProfile.reqMethod).toEqual(profile.httpProfile.reqMethod)
      expect(customClient.profile.httpProfile.protocol).toEqual(profile.httpProfile.protocol)
      expect(customClient.profile.httpProfile.reqTimeout).toEqual(profile.httpProfile.reqTimeout)
    })

    it("should throw error for invalid language", () => {
      expect(() => {
        new AbstractClient(endpoint, version, {
          ...clientConfig,
          profile: {
            language: "invalid-lang" as any,
          },
        })
      }).toThrow(TencentCloudSDKHttpException)
    })

    it("should handle DynamicCredential", () => {
      const dynamicCredential = {
        getCredential: vi.fn().mockResolvedValue(mockCredential),
      }

      const dynamicClient = new AbstractClient(endpoint, version, {
        credential: dynamicCredential,
        region,
      })

      expect(dynamicClient.credential).toBe(dynamicCredential)
    })
  })

  describe("getCredential", () => {
    it("should return static credential", async () => {
      const credential = await client.getCredential()
      expect(credential).toEqual(mockCredential)
    })

    it("should return dynamic credential", async () => {
      const dynamicCredential = {
        getCredential: vi.fn().mockResolvedValue(mockCredential),
      }
      const dynamicClient = new AbstractClient(endpoint, version, {
        credential: dynamicCredential,
        region,
      })

      const credential = await dynamicClient.getCredential()
      expect(credential).toEqual(mockCredential)
      expect(dynamicCredential.getCredential).toHaveBeenCalled()
    })
  })

  describe("request", () => {
    let doRequestClient: AbstractClient
    beforeEach(() => {
      doRequestClient = new AbstractClient(endpoint, version, clientConfig)
    })

    it("should make successful request", async () => {
      vi.mocked(HttpConnection.doRequest).mockResolvedValue(mockResolvedValue)
      vi.mocked(HttpConnection.doRequestWithSign3).mockResolvedValue(mockResolvedValue)

      let doRequestResult = await doRequestClient.request("DescribeInstances", { Limit: 10 })
      expect(doRequestResult).toEqual(mockResponse.Response)

      const result = await client.request("DescribeInstances", { Limit: 10 })
      expect(result).toEqual(mockResponse.Response)
    })

    it("should handle API error response", async () => {
      const mockErrorResponse = {
        Response: {
          Error: {
            Code: "InvalidParameter",
            Message: "Invalid parameter value",
          },
          RequestId: "error-request-id",
        },
      }

      vi.mocked(HttpConnection.doRequest).mockResolvedValue({
        status: 200,
        json: vi.fn().mockResolvedValue(mockErrorResponse),
        headers: new Map(),
      } as any)
      vi.mocked(HttpConnection.doRequestWithSign3).mockResolvedValue({
        status: 200,
        json: vi.fn().mockResolvedValue(mockErrorResponse),
        headers: new Map(),
      } as any)

      await expect(doRequestClient.request("DescribeInstances", {})).rejects.toThrow(
        TencentCloudSDKHttpException
      )
      await expect(client.request("DescribeInstances", {})).rejects.toThrow(
        TencentCloudSDKHttpException
      )
    })

    it("should handle HTTP error", async () => {
      vi.mocked(HttpConnection.doRequest).mockRejectedValue(new Error("Network error"))
      vi.mocked(HttpConnection.doRequestWithSign3).mockRejectedValue(new Error("Network error"))

      await expect(doRequestClient.request("DescribeInstances", {})).rejects.toThrow(
        TencentCloudSDKHttpException
      )
      await expect(client.request("DescribeInstances", {})).rejects.toThrow(
        TencentCloudSDKHttpException
      )
    })

    it("should support callback style", async () => {
      vi.mocked(HttpConnection.doRequest).mockResolvedValue(mockResolvedValue)
      vi.mocked(HttpConnection.doRequestWithSign3).mockResolvedValue(mockResolvedValue)

      const doRequestCallback = vi.fn()
      await doRequestClient.request("TestAction", {}, doRequestCallback)
      expect(doRequestCallback).toHaveBeenCalledWith(null, mockResponse.Response)

      const callback = vi.fn()
      await client.request("TestAction", {}, callback)
      expect(callback).toHaveBeenCalledWith(null, mockResponse.Response)
    })

    it("should support options parameter", async () => {
      const doRequest = vi.mocked(HttpConnection.doRequest).mockResolvedValue(mockResolvedValue)
      const doRequestWithSign3 = vi
        .mocked(HttpConnection.doRequestWithSign3)
        .mockResolvedValue(mockResolvedValue)
      const customHeaders = { "Custom-Header": "custom-header-value" }
      const signal = new AbortController().signal

      const doRequestResult = await doRequestClient.request(
        "TestAction",
        {},
        { headers: customHeaders, signal }
      )
      const doRequestMockCalls = doRequest.mock.calls[0][0]
      expect(doRequestResult).toEqual(mockResponse.Response)
      expect(doRequestMockCalls).toHaveProperty(
        "headers.Custom-Header",
        customHeaders["Custom-Header"]
      )
      expect(doRequestMockCalls).toHaveProperty("signal", signal)
      expect(doRequestMockCalls).toHaveProperty("headers.X-TC-TraceId")

      const result = await client.request(
        "TestAction",
        {},
        { headers: customHeaders, signal, multipart: true }
      )
      const mockCalls = doRequestWithSign3.mock.calls[0][0]
      expect(result).toEqual(mockResponse.Response)
      expect(mockCalls).toHaveProperty("headers.Custom-Header", customHeaders["Custom-Header"])
      expect(mockCalls).toHaveProperty("multipart", true)
      expect(mockCalls).toHaveProperty("signal", signal)
      expect(mockCalls).toHaveProperty("headers.X-TC-TraceId")
    })
  })

  describe("requestOctetStream", () => {
    it("should make request with octet-stream content type", async () => {
      vi.mocked(HttpConnection.doRequest).mockResolvedValue(mockResolvedValue)

      const result = await client.requestOctetStream("UploadData", Buffer.from("test"))
      expect(result).toEqual(mockResponse.Response)
    })
  })

  describe("doRequest", () => {
    it("should use sign method when configured", async () => {
      const signClient = new AbstractClient(endpoint, version, {
        credential: mockCredential,
        profile: {
          signMethod: "HmacSHA256",
        },
      })

      vi.mocked(HttpConnection.doRequest).mockResolvedValue(mockResolvedValue)

      await signClient.request("TestAction", {})
      expect(HttpConnection.doRequest).toHaveBeenCalled()
    })

    it("should handle SSE response", async () => {
      const mockResponse = {
        status: 200,
        headers: new Map([["content-type", "text/event-stream"]]),
        body: new ReadableStream(),
      }

      vi.mocked(HttpConnection.doRequestWithSign3).mockResolvedValue(mockResponse as any)

      await client.request("StreamAction", {})
      expect(SSEResponseModel).toHaveBeenCalledWith(mockResponse.body)
    })
  })

  describe("formatRequestData", () => {
    it("should format request data correctly", async () => {
      const signClient = new AbstractClient(endpoint, version, {
        credential: mockCredential,
        profile: {
          signMethod: "HmacSHA256",
        },
      })
      const formatted = await (signClient as any).formatRequestData("DescribeInstances", {})

      expect(formatted.Action).toBe("DescribeInstances")
      expect(formatted.Version).toBe(version)
      expect(formatted.SecretId).toBe(mockCredential.secretId)
      expect(formatted.Token).toBe(mockCredential.token)
      expect(formatted.SignatureMethod).toBe("HmacSHA256")
      expect(formatted.Signature).toBe("mock-signature")
    })

    it("should handle missing optional fields", async () => {
      const minimalClient = new AbstractClient(endpoint, version, {
        credential: { secretId: "id", secretKey: "key" },
      })

      const formatted = await (minimalClient as any).formatRequestData("TestAction", {})

      expect(formatted).not.toHaveProperty("Region")
      expect(formatted).not.toHaveProperty("Token")
      expect(formatted).not.toHaveProperty("Language")
    })
  })

  describe("mergeData", () => {
    it("should flatten nested objects", () => {
      const data = {
        Filters: [{ Name: "instance-id", Values: ["ins-12345"] }],
        Limit: 10,
      }

      const merged = (client as any).mergeData(data)
      expect(merged).toEqual({
        "Filters.0.Name": "instance-id",
        "Filters.0.Values.0": "ins-12345",
        Limit: 10,
      })
    })

    it("should skip null and undefined values", () => {
      const data = {
        valid: "value",
        // @ts-ignore
        nullValue: null,
        // @ts-ignore
        undefinedValue: undefined,
      }

      const merged = (client as any).mergeData(data)
      expect(merged).toEqual({ valid: "value" })
    })
  })

  describe("formatSignString", () => {
    it("should format sign string correctly", () => {
      const params = {
        Action: "DescribeInstances",
        Version: "2017-03-12",
        SecretId: "test-secret-id",
      }

      const signString = (client as any).formatSignString(params)
      expect(signString).toBe(
        "POSTcvm.tencentcloudapi.com/?Action=DescribeInstances&SecretId=test-secret-id&Version=2017-03-12"
      )
    })

    it("should sort parameters alphabetically", () => {
      const params = {
        ZParam: "z-value",
        AParam: "a-value",
        MParam: "m-value",
      }

      const signString = (client as any).formatSignString(params)
      expect(signString).toContain("AParam=a-value&MParam=m-value&ZParam=z-value")
    })
  })

  describe("parseResponse", () => {
    const mockErrorResponse = {
      status: 500,
      statusText: "Internal Server Error",
      headers: new Map([["x-tc-traceid", "test-trace-id"]]),
    } as any

    it("should parse successful JSON response", async () => {
      const result = await (client as any).parseResponse(mockResolvedValue)
      expect(result).toEqual(mockResponse.Response)
    })

    it("should throw for non-200 status", async () => {
      await expect((client as any).parseResponse(mockErrorResponse)).rejects.toThrow(
        TencentCloudSDKHttpException
      )
    })

    it("should include trace ID in error", async () => {
      try {
        await (client as any).parseResponse(mockErrorResponse)
      } catch (error) {
        expect((error as TencentCloudSDKHttpException).traceId).toBe("test-trace-id")
      }
    })
  })
})

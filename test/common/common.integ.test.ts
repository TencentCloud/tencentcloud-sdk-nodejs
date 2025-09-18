import { describe, it, expect, vi, beforeEach, afterEach, beforeAll, afterAll } from "vitest"
import { AbstractClient } from "common/abstract_client"
import { SSEResponseModel } from "common/sse_response_model"
import TencentCloudSDKHttpException from "common/exception/tencent_cloud_sdk_exception"
import fetch from "common/http/fetch"
import { ClientConfig } from "common"
import FormData from "form-data"
import { Readable } from "stream"

interface MockParams {
  Limit: number
  Offset: number
}
interface MockResponse {
  RequestId: string
  TotalCount: number
  InstanceSet: {
    InstanceId: string
  }[]
}

vi.mock("common/http/fetch", () => ({
  default: vi.fn(),
}))

describe("Common Module Integration Tests", () => {
  let mockFetch: any
  const version = "2020-01-01"
  const endpoint = "test.tencentcloudapi.com"
  const action = "DescribeInstances"
  const region = "ap-guangzhou"
  const mockCredential = {
    secretId: "test-secret-id",
    secretKey: "test-secret-key",
  }
  const mockParams = {
    Limit: 10,
    Offset: 0,
  }
  const mockResponse = {
    Response: {
      RequestId: "test-request-id",
      TotalCount: 1,
      InstanceSet: [{ InstanceId: "ins-12345" }],
    },
  }
  const mockResolvedValue = {
    status: 200,
    json: vi.fn().mockResolvedValue(mockResponse),
    headers: new Map(),
  } as any

  beforeEach(() => {
    mockFetch = vi.mocked(fetch)
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("AbstractClient Integration", () => {
    class TestClient extends AbstractClient {
      constructor(clientConfig: ClientConfig) {
        super(endpoint, version, clientConfig)
      }

      async describeInstances(req: MockParams, cb?: (error: string, rep: MockResponse) => void) {
        return this.request(action, req, cb)
      }

      async UploadFile(req: { File: Buffer }, cb?: (error: string, rep: MockResponse) => void) {
        return this.request(action, req, { multipart: true }, cb)
      }
    }

    it("should handle complete API request flow", async () => {
      mockFetch.mockResolvedValue(mockResolvedValue)

      const client = new TestClient({
        credential: mockCredential,
      })

      const result = await client.describeInstances(mockParams)

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(endpoint),
        expect.objectContaining({
          method: "POST",
          headers: expect.objectContaining({
            Host: expect.stringContaining(endpoint),
            Authorization: expect.stringContaining("TC3-HMAC-SHA256"),
            "X-TC-Action": action,
          }),
        })
      )
      expect(result).toEqual(mockResponse.Response)
    })

    it("should handle multipart file upload with FormData", async () => {
      mockFetch.mockResolvedValue({
        ...mockResolvedValue,
        json: vi.fn().mockResolvedValue(mockResponse),
      })

      const client = new TestClient({
        credential: mockCredential,
      })

      const result = await client.UploadFile({ File: Buffer.from("test file content") })

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(endpoint),
        expect.objectContaining({
          method: "POST",
          headers: expect.objectContaining({
            Authorization: expect.stringContaining("TC3-HMAC-SHA256"),
            "content-type": expect.stringContaining("multipart/form-data"),
          }),
        })
      )
      const mockCalls = mockFetch.mock.calls[0][1]
      expect(mockCalls.body).toBeInstanceOf(FormData)
      expect(result).toEqual(mockResponse.Response)
    })

    it("should handle API error responses", async () => {
      const mockErrorResponse = {
        ok: true,
        status: 200,
        json: async () => ({
          Response: {
            Error: {
              Code: "InvalidParameter",
              Message: "Invalid parameter value",
            },
            RequestId: "error-request-id",
          },
        }),
        headers: new Map(),
      }
      mockFetch.mockResolvedValue(mockErrorResponse)

      const client = new TestClient({ credential: mockCredential })

      await expect(client.describeInstances(mockParams)).rejects.toThrow(
        TencentCloudSDKHttpException
      )
    })

    it("should handle SSE response parsing", async () => {
      const sseData = [
        'data: {"type":"progress","percent":25}\n\n',
        'data: {"type":"progress","percent":50}\n\n',
        'data: {"type":"progress","percent":75}\n\n',
        'data: {"type":"complete","result":"success"}\n\n',
      ].join("")

      const mockStreamResponse = {
        status: 200,
        headers: new Map([["content-type", "text/event-stream"]]),
        body: Readable.from(sseData),
        json: vi.fn().mockRejectedValue(new Error("Not JSON")),
      }
      mockFetch.mockResolvedValue(mockStreamResponse)

      const client = new TestClient({
        credential: mockCredential,
      })

      const result = await client.describeInstances(mockParams)

      expect(result).toBeInstanceOf(SSEResponseModel)
      const messages: string[] = []
      for await (let message of result) {
        messages.push(message.data)
        if (messages.length === 4) {
          expect(messages).toEqual([
            '{"type":"progress","percent":25}',
            '{"type":"progress","percent":50}',
            '{"type":"progress","percent":75}',
            '{"type":"complete","result":"success"}',
          ])
          break
        }
      }
    })

    it("should handle network timeouts", async () => {
      mockFetch.mockRejectedValue(new Error("Network timeout"))

      const client = new TestClient({ credential: mockCredential })

      await expect(client.describeInstances(mockParams)).rejects.toThrow("Network timeout")
    })
  })
})

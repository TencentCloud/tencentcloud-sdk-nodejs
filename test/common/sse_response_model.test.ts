import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { SSEResponseModel } from "common/sse_response_model"
import { Readable } from "stream"

describe("SSEResponseModel", () => {
  let mockStream: Readable
  let sseModel: SSEResponseModel

  beforeEach(() => {
    mockStream = new Readable({
      read() {},
    })
    sseModel = new SSEResponseModel(mockStream)
  })

  afterEach(() => {
    mockStream.destroy()
    ;(sseModel as any).eventSource.removeAllListeners()
  })

  describe("message parsing", () => {
    it("should parse simple data message", () =>
      new Promise<void>((done) => {
        const testData = `data: Hello World\n\n`

        sseModel.on("message", (message) => {
          expect(message.data).toBe("Hello World")
          expect(message.event).toBe("")
          expect(message.id).toBe("")
          expect(message.retry).toBeUndefined()
          done()
        })

        mockStream.push(testData)
      }))

    it("should parse multi-line data", () =>
      new Promise<void>((done) => {
        const testData = `data: Line 1
data: Line 2
data: Line 3

`

        sseModel.on("message", (message) => {
          expect(message.data).toBe("Line 1\nLine 2\nLine 3")
          done()
        })

        mockStream.push(testData)
      }))

    it("should parse complete message with all fields", () =>
      new Promise<void>((done) => {
        const testData = `id: msg-456
event: update
retry: 3000
data: {"status": "processing", "progress": 50}

`

        sseModel.on("message", (message) => {
          expect(message.id).toBe("msg-456")
          expect(message.event).toBe("update")
          expect(message.retry).toBe(3000)
          expect(message.data).toBe('{"status": "processing", "progress": 50}')
          done()
        })

        mockStream.push(testData)
      }))
  })

  describe("edge cases", () => {
    it("should handle empty data", async () => {
      const testData = `data:\n\n`

      setTimeout(() => {
        mockStream.push(testData)
      })
      for await (const message of sseModel) {
        expect(message.data).toBe("")
        break
      }
    })

    it("should handle comments", async () => {
      const testData = `: This is a comment
data: actual data

`

      setTimeout(() => {
        mockStream.push(testData)
      })
      for await (const message of sseModel) {
        expect(message.data).toBe("actual data")
        break
      }
    })

    it("should handle multiple messages", async () => {
      const testData = `data: message 1

data: message 2

data: message 3

`

      setTimeout(() => {
        mockStream.push(testData)
      })
      const messages: string[] = []
      for await (const message of sseModel) {
        messages.push(message.data)
        if (messages.length === 3) {
          expect(messages).toEqual(["message 1", "message 2", "message 3"])
          break
        }
      }
    })

    it("should handle partial messages", async () => {
      const part1 = `data: partial`
      const part2 = ` message\n\n`

      setTimeout(() => {
        mockStream.push(part1)
        setTimeout(() => mockStream.push(part2), 10)
      })
      for await (const message of sseModel) {
        expect(message.data).toBe("partial message")
        break
      }
    })
  })
})

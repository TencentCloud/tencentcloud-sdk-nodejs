import { EventEmitter } from "events"
import { createInterface, ReadLine } from "readline"

interface EventSourceMessage {
  /** The event ID to set the EventSource object's last event ID value. */
  id: string
  /** A string identifying the type of event described. */
  event: string
  /** The event data */
  data: string
  /** The reconnection interval (in milliseconds) to wait before retrying the connection */
  retry?: number
}

class SSEEventEmitter extends EventEmitter {}

export class SSEResponseModel {
  private stream: NodeJS.ReadableStream
  private readline: ReadLine
  private eventSource: SSEEventEmitter

  constructor(stream: NodeJS.ReadableStream) {
    this.stream = stream
    this.readline = createInterface({
      input: stream,
      crlfDelay: Infinity,
    })
    this.eventSource = new SSEEventEmitter()
    this.init()
  }

  /**
   * @inner
   */
  private init() {
    const { stream, readline, eventSource } = this

    let lines: string[] = []
    readline.on("line", (line) => {
      if (line) {
        lines.push(line)
        return
      }

      eventSource.emit("message", this.parseSSEMessage(lines.splice(0)))
    })
    readline.on("close", () => {
      if (lines.length > 0) {
        eventSource.emit("message", this.parseSSEMessage(lines.splice(0)))
      }
    })

    stream.on("close", () => {
      eventSource.emit("close")
    })
    stream.on("error", (err) => {
      eventSource.emit("error", err)
    })
  }

  /**
   * @inner
   */
  private parseSSEMessage(lines: string[]) {
    const message: EventSourceMessage = {
      data: "",
      event: "",
      id: "",
      retry: undefined,
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      // line is of format "<field>:<value>" or "<field>: <value>"
      const colonIndex = line.indexOf(":")
      if (colonIndex <= 0) continue // exclude comments and lines with no values
      const field = line.slice(0, colonIndex)
      const value = line.slice(colonIndex + (line[colonIndex + 1] === " " ? 2 : 1))

      switch (field) {
        case "data":
          message.data = message.data ? message.data + "\n" + value : value
          break
        case "event":
          message.event = value
          break
        case "id":
          message.id = value
          break
        case "retry":
          const retry = parseInt(value, 10)
          if (!isNaN(retry)) {
            // per spec, ignore non-integers
            message.retry = retry
          }
          break
      }
    }

    return message
  }

  on(event: "message", listener: (message: EventSourceMessage) => void): this
  on(event: "close", listener: () => void): this
  on(event: "error", listener: (err: Error) => void): this
  on(event: string, listener: any) {
    this.eventSource.on(event, listener)
    return this
  }

  removeListener(event: "message", listener: (message: EventSourceMessage) => void): this
  removeListener(event: "close", listener: () => void): this
  removeListener(event: "error", listener: (err: Error) => void): this
  removeListener(event: string, listener: any) {
    this.eventSource.removeListener(event, listener)
    return this
  }

  async *[Symbol.asyncIterator](): AsyncIterableIterator<EventSourceMessage> {
    let lines: string[] = []
    for await (const line of this.readline) {
      if (line) {
        lines.push(line)
        continue
      }

      yield this.parseSSEMessage(lines.splice(0))
    }

    if (lines.length > 0) {
      yield this.parseSSEMessage(lines.splice(0))
    }
  }
}

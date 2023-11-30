"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSEResponseModel = void 0;
const events_1 = require("events");
class SSEEventEmitter extends events_1.EventEmitter {
}
class SSEResponseModel {
    constructor(stream) {
        this.stream = stream;
        this.eventSource = new SSEEventEmitter();
        this.init();
    }
    /**
     * @inner
     */
    init() {
        const { stream, eventSource } = this;
        stream.on("data", (chunk) => {
            if (chunk !== null) {
                const messages = chunk.toString().split("\n\n");
                for (let i = 0; i < messages.length; i++) {
                    if (messages[i].length > 0) {
                        eventSource.emit("message", this.parseSSEMessage(messages[i]));
                    }
                }
            }
        });
        stream.on("close", () => {
            eventSource.emit("close");
        });
        stream.on("error", (err) => {
            eventSource.emit("error", err);
        });
    }
    /**
     * @inner
     */
    parseSSEMessage(chunk) {
        const message = {
            data: "",
            event: "",
            id: "",
            retry: undefined,
        };
        const lines = chunk.split("\n");
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            // line is of format "<field>:<value>" or "<field>: <value>"
            const colonIndex = line.indexOf(":");
            if (colonIndex <= 0)
                continue; // exclude comments and lines with no values
            const field = line.slice(0, colonIndex);
            const value = line.slice(colonIndex + (line[colonIndex + 1] === " " ? 2 : 1));
            switch (field) {
                case "data":
                    message.data = message.data ? message.data + "\n" + value : value;
                    break;
                case "event":
                    message.event = value;
                    break;
                case "id":
                    message.id = value;
                    break;
                case "retry":
                    const retry = parseInt(value, 10);
                    if (!isNaN(retry)) {
                        // per spec, ignore non-integers
                        message.retry = retry;
                    }
                    break;
            }
        }
        return message;
    }
    on(event, listener) {
        this.eventSource.on(event, listener);
        return this;
    }
    removeListener(event, listener) {
        this.eventSource.removeListener(event, listener);
        return this;
    }
    async *[Symbol.asyncIterator]() {
        for await (const chunk of this.stream) {
            if (chunk !== null) {
                const messages = chunk.toString().split("\n\n");
                for (let i = 0; i < messages.length; i++) {
                    if (messages[i].length > 0) {
                        yield this.parseSSEMessage(messages[i]);
                    }
                }
            }
        }
    }
}
exports.SSEResponseModel = SSEResponseModel;

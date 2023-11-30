/// <reference types="node" />
interface EventSourceMessage {
    /** The event ID to set the EventSource object's last event ID value. */
    id: string;
    /** A string identifying the type of event described. */
    event: string;
    /** The event data */
    data: string;
    /** The reconnection interval (in milliseconds) to wait before retrying the connection */
    retry?: number;
}
export declare class SSEResponseModel {
    private stream;
    private eventSource;
    constructor(stream: NodeJS.ReadableStream);
    /**
     * @inner
     */
    private init;
    /**
     * @inner
     */
    private parseSSEMessage;
    on(event: "message", listener: (message: EventSourceMessage) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    removeListener(event: "message", listener: (message: EventSourceMessage) => void): this;
    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    [Symbol.asyncIterator](): AsyncIterableIterator<EventSourceMessage>;
}
export {};

/**
 * @inner
 */
export default class TencentCloudSDKHttpException extends Error {
    /**
     * 请求id
     */
    requestId: string;
    /**
     * 请求traceId
     */
    traceId: string;
    /**
     * http状态码
     */
    httpCode?: number;
    /**
     * 接口返回状态码
     */
    code?: string;
    constructor(error: string, requestId?: string, traceId?: string);
    getMessage(): string;
    getRequestId(): string;
    getTraceId(): string;
    toString(): string;
    toLocaleString(): string;
}

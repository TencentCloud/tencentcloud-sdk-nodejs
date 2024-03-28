"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @inner
 */
class TencentCloudSDKHttpException extends Error {
    constructor(error, requestId = "", traceId = "") {
        super(error);
        this.requestId = requestId || "";
        this.traceId = traceId || "";
    }
    getMessage() {
        return this.message;
    }
    getRequestId() {
        return this.requestId;
    }
    getTraceId() {
        return this.traceId;
    }
    toString() {
        return ("[TencentCloudSDKException]" +
            "message:" +
            this.getMessage() +
            "  requestId:" +
            this.getRequestId() +
            "  traceId:" +
            this.getTraceId());
    }
    toLocaleString() {
        return ("[TencentCloudSDKException]" +
            "message:" +
            this.getMessage() +
            "  requestId:" +
            this.getRequestId() +
            "  traceId:" +
            this.getTraceId());
    }
}
exports.default = TencentCloudSDKHttpException;

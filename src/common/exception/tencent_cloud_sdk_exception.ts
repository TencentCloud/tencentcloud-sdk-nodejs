/**
 * @inner
 */
export default class TencentCloudSDKHttpException extends Error {
  /**
   * 请求id
   */
  requestId: string

  /**
   * 请求traceId
   */
  traceId: string

  /**
   * http状态码
   */
  httpCode?: number

  /**
   * 接口返回状态码
   */
  code?: string

  constructor(error: string, requestId = "", traceId = "") {
    super(error)
    this.requestId = requestId || ""
    this.traceId = traceId || ""
  }

  getMessage(): string {
    return this.message
  }

  getRequestId(): string {
    return this.requestId
  }

  getTraceId(): string {
    return this.traceId
  }

  toString(): string {
    return (
      "[TencentCloudSDKException]" +
      "message:" +
      this.getMessage() +
      "  requestId:" +
      this.getRequestId() +
      "  traceId:" +
      this.getTraceId()
    )
  }

  toLocaleString(): string {
    return (
      "[TencentCloudSDKException]" +
      "message:" +
      this.getMessage() +
      "  requestId:" +
      this.getRequestId() +
      "  traceId:" +
      this.getTraceId()
    )
  }
}

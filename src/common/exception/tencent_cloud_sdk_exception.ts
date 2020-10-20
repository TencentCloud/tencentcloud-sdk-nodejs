/**
 * @inner
 */
export default class TencentCloudSDKHttpException extends Error {
  /**
   * 请求id
   */
  requestId: string

  /**
   * http状态码
   */
  httpCode?: number

  /**
   * 接口返回状态码
   */
  code?: string

  constructor(error: string, requestId = "") {
    super(error)
    this.requestId = requestId || ""
  }

  getMessage(): string {
    return this.message
  }

  getRequestId(): string {
    return this.requestId
  }

  toString(): string {
    return (
      "[TencentCloudSDKException]" +
      "message:" +
      this.getMessage() +
      "  requestId:" +
      this.getRequestId()
    )
  }

  toLocaleString(): string {
    return (
      "[TencentCloudSDKException]" +
      "message:" +
      this.getMessage() +
      "  requestId:" +
      this.getRequestId()
    )
  }
}

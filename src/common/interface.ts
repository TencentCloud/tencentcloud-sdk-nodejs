/**
 * 初始化client对象参数类型
 */
export interface ClientConfig {
  /**
   * @param {Credential} credential 认证信息
   * 必选
   */
  credential: Credential
  /**
   * @param {string} region 产品地域
   * 对于要求区分地域的产品，此参数必选（如 cvm）；对于不区分地域的产品（如 sms），无需传入。
   */
  region?: string
  /**
   * @param {ClientProfile} profile 可选配置实例
   * 可选，没有特殊需求可以跳过。
   */
  profile?: ClientProfile
}

/**
 * 可选配置实例
 */
export interface ClientProfile {
  /**
   * 签名方法 (TC3-HMAC-SHA256 HmacSHA1 HmacSHA256)
   * @type {string}
   * 非必选
   */
  signMethod?: "TC3-HMAC-SHA256" | "HmacSHA256" | "HmacSHA1"
  /**
   * http相关选项实例
   * @type {httpProfile}
   * 非必选
   */
  httpProfile?: {
    /**
     * 请求方法
     * @type {"POST" | "GET"}
     * 非必选
     */
    reqMethod?: "POST" | "GET"
    /**
     * 接入点域名，形如（cvm.ap-shanghai.tencentcloud.com）
     * @type {string}
     * 非必选
     */
    endpoint?: string
    /**
     * 协议，目前支持（https://）
     * @type {string}
     * 非必选
     */
    protocol?: string
    /**
     *  请求超时时间，默认60s
     * @type {number}
     * 非必选
     */
    reqTimeout?: number
    /**
     * 自定义请求头，例如 { "X-TC-TraceId": "ffe0c072-8a5d-4e17-8887-a8a60252abca" }
     * @type {Record<string, string>}
     * 非必选
     */
    headers?: Record<string, string>
  }
  /**
   * api请求时附带的 language 字段
   * @type {"zh-CN" | "en-US"}
   * 非必选
   */
  language?: "zh-CN" | "en-US"
}

/**
 * ClientProfile.language 属性支持的取值列表
 */
export const SUPPORT_LANGUAGE_LIST = ["zh-CN", "en-US"]

/**
 * 认证信息类
 */
export interface Credential {
  /**
   * 腾讯云账户secretId，secretKey
   * 非必选，和 token 二选一
   */
  secretId?: string
  /**
   * 腾讯云账户secretKey
   * 非必选，和 token 二选一
   */
  secretKey?: string
  /**
   * 腾讯云账户token
   * 非必选，和 secretId 二选一
   */
  token?: string
}

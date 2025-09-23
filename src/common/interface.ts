import { Agent } from "http"
/**
 * Configuration type for initializing client object
 */
export interface ClientConfig {
  /**
   * @param {Credential} credential Authentication information
   */
  credential: Credential | DynamicCredential
  /**
   * @param {string} region Product region
   * Required for region-specific products (e.g. CVM), optional for non-region products (e.g. SMS)
   */
  region?: string
  /**
   * @param {ClientProfile} profile Optional configuration instance
   * Optional, can be skipped if no special requirements
   */
  profile?: ClientProfile
}

/**
 * Optional configuration instance
 */
export interface ClientProfile {
  /**
   * Signature method (TC3-HMAC-SHA256 HmacSHA1 HmacSHA256)
   * @type {string}
   * Optional
   */
  signMethod?: "TC3-HMAC-SHA256" | "HmacSHA256" | "HmacSHA1"
  /**
   * HTTP related options instance
   * @type {HttpProfile}
   * Optional
   */
  httpProfile?: HttpProfile
  /**
   * Language field attached to API requests
   * @type {"zh-CN" | "en-US"}
   * Optional
   */
  language?: "zh-CN" | "en-US"
}

export interface HttpProfile {
  /**
   * Request method
   * @type {"POST" | "GET"}
   * Optional
   */
  reqMethod?: "POST" | "GET"
  /**
   * The service endpoint URL (e.g. "cvm.tencentcloudapi.com")
   * @type {string}
   * Optional
   */
  endpoint?: string
  /**
   * Protocol, currently supports "https://"
   * @type {string}
   * Optional
   */
  protocol?: string
  /**
   * Request timeout in seconds, default 60s
   * @type {number}
   * Optional
   */
  reqTimeout?: number
  /**
   * Custom headers, e.g. { "X-TC-TraceId": "ffe0c072-8a5d-4e17-8887-a8a60252abca" }
   * @type {Record<string, string>}
   * Optional
   */
  headers?: Record<string, string>
  /**
   * Advanced request agent, e.g. new HttpsProxyAgent("http://127.0.0.1:8899")
   *
   * Higher priority than proxy configuration
   */
  agent?: Agent
  /**
   * HTTP request proxy, e.g. "http://127.0.0.1:8899"
   */
  proxy?: string
}

/**
 * Supported values for ClientProfile.language property
 */
export const SUPPORT_LANGUAGE_LIST = ["zh-CN", "en-US"]

/**
 * Credential information class
 */
export interface Credential {
  /**
   * Tencent Cloud account secretId and secretKey
   * Optional, mutually exclusive with token
   */
  secretId?: string
  /**
   * Tencent Cloud account secretKey
   * Optional, mutually exclusive with token
   */
  secretKey?: string
  /**
   * Tencent Cloud account token
   * Optional, mutually exclusive with secretId
   */
  token?: string
}

/**
 * Dynamic credential information
 */
export interface DynamicCredential {
  getCredential(): Promise<Credential>
}

export interface CredentialResult {
  TmpSecretId: string
  TmpSecretKey: string
  ExpiredTime: number
  Expiration: string
  Token: string
}

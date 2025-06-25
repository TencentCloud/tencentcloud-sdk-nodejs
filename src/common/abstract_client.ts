import { sdkVersion } from "./sdk_version"
import {
  ClientProfile,
  Credential,
  ClientConfig,
  SUPPORT_LANGUAGE_LIST,
  HttpProfile,
  DynamicCredential,
} from "./interface"
import Sign from "./sign"
import { HttpConnection } from "./http/http_connection"
import TencentCloudSDKHttpException from "./exception/tencent_cloud_sdk_exception"
import { Response } from "node-fetch"
import { SSEResponseModel } from "./sse_response_model"
import { v4 as uuidv4 } from "uuid"

/**
 * Callback function type for API responses
 * @template TReuslt Type of the response data
 */
export type ResponseCallback<TReuslt = any> = (error: string, rep: TReuslt) => void

/**
 * Options for HTTP requests
 */
export interface RequestOptions extends Partial<Pick<HttpProfile, "headers">> {
  /**
   * Whether the request is multipart
   */
  multipart?: boolean
  /**
   * Abort request signal
   */
  signal?: AbortSignal
}

interface RequestData {
  Action: string
  RequestClient: string
  Nonce: number
  Timestamp: number
  Version: string
  Signature: string
  SecretId?: string
  region?: string
  Token?: string
  SinatureMethod?: string
  [key: string]: any
}
type ResponseData = any

/**
 * Abstract base client for Tencent Cloud SDK
 * 
 * This class provides common functionality for making API requests to Tencent Cloud services,
 * including request signing, error handling, and response parsing.
 */
export class AbstractClient {
  /**
   * SDK version string
   */
  sdkVersion: string
  /**
   * API request path (usually "/")
   */
  path: string
  /**
   * User's security credentials (SecretId, SecretKey, Token)
   */
  credential: Credential | DynamicCredential
  /**
   * The region of the service (e.g. "ap-shanghai")
   */
  region: string
  /**
   * The API version of the service (e.g. "2017-03-12")
   */
  apiVersion: string
  /**
   * The service endpoint URL (e.g. "cvm.tencentcloudapi.com")
   */
  endpoint: string
  /**
   * Optional configuration instance
   */
  profile: ClientProfile

  /**
   * Constructs a new AbstractClient instance
   * 
   * @param {string} endpoint - The service endpoint URL (e.g. "cvm.tencentcloudapi.com")
   * @param {string} version - The API version of the service (e.g. "2017-03-12")
   * @param {ClientConfig} config - Configuration object containing:
   * @param {Credential|DynamicCredential} config.credential - Credentials for authentication
   * @param {string} [config.region] - The region of the service (e.g. "ap-shanghai")
   * @param {ClientProfile} [config.profile={}] - Optional client configuration profile
   * 
   * @throws {TencentCloudSDKHttpException} If invalid language is specified in profile
   * 
   * @example
   * const client = new AbstractClient(
   *   "cvm.tencentcloudapi.com",
   *   "2017-03-12",
   *   {
   *     credential: {
   *       secretId: process.env.secretId,
   *       secretKey: process.env.secretKey,
   *     },
   *     region: "ap-shanghai",
   *     profile: {}
   *   }
   * );
   */
  constructor(
    endpoint: string,
    version: string,
    { credential, region, profile = {} }: ClientConfig
  ) {
    this.path = "/"

    /**
     * Credential instance
     */
    if (credential && "getCredential" in credential) {
      this.credential = credential
    } else {
      this.credential = Object.assign(
        {
          secretId: null,
          secretKey: null,
          token: null,
        },
        credential
      )
    }

    /**
     * The region of the service
     */
    this.region = region || null
    this.sdkVersion = "SDK_NODEJS_" + sdkVersion
    this.apiVersion = version
    this.endpoint = (profile && profile.httpProfile && profile.httpProfile.endpoint) || endpoint

    /**
     * Optional configuration instance
     * @type {ClientProfile}
     */
    this.profile = {
      signMethod: (profile && profile.signMethod) || "TC3-HMAC-SHA256",
      httpProfile: Object.assign(
        {
          reqMethod: "POST",
          endpoint: null,
          protocol: "https://",
          reqTimeout: 60,
        },
        profile && profile.httpProfile
      ),
      language: profile.language,
    }

    if (this.profile.language && !SUPPORT_LANGUAGE_LIST.includes(this.profile.language)) {
      throw new TencentCloudSDKHttpException(
        `Language invalid, choices: ${SUPPORT_LANGUAGE_LIST.join("|")}`
      )
    }
  }

  /**
   * Get credential information
   * @returns {Promise<Credential>} Promise that resolves with credential information
   */
  async getCredential(): Promise<Credential> {
    if ("getCredential" in this.credential) {
      return await this.credential.getCredential()
    }
    return this.credential
  }

  /**
   * Make an API request to Tencent Cloud service
   * 
   * @param {string} action - The API action name to call
   * @param {any} req - The request payload/parameters
   * @param {ResponseCallback|RequestOptions} [options] - Either request options or callback function
   * @param {ResponseCallback} [cb] - Optional callback function for async operation
   * @returns {Promise<ResponseData>} Promise that resolves with the API response data
   * 
   * @example
   * // Using promise
   * client.request('DescribeInstances', {Limit: 10})
   *   .then(data => console.log(data))
   *   .catch(err => console.error(err));
   * 
   * // Using callback
   * client.request('DescribeInstances', {Limit: 10}, (err, data) => {
   *   if (err) console.error(err);
   *   else console.log(data);
   * });
   * 
   * // With options
   * client.request('DescribeInstances', {Limit: 10}, {signal: abortController.signal})
   *   .then(data => console.log(data))
   *   .catch(err => console.error(err));
   */
  async request(
    action: string,
    req: any,
    options?: ResponseCallback | RequestOptions,
    cb?: ResponseCallback
  ): Promise<ResponseData> {
    if (typeof options === "function") {
      cb = options
      options = {} as RequestOptions
    }
    try {
      const result = await this.doRequest(action, req ?? {}, options as RequestOptions)
      cb && cb(null, result)
      return result
    } catch (e) {
      cb && cb(e as any, null)
      throw e
    }
  }

  /**
   * Make a request with octet-stream content type
   * @param {string} action API action name
   * @param {any} req Request data
   * @param {ResponseCallback|RequestOptions} [options] Request options or callback
   * @param {ResponseCallback} [cb] Callback function
   * @returns {Promise<any>} Promise that resolves with response data
   */
  async requestOctetStream(
    action: string,
    req: any,
    options?: ResponseCallback | RequestOptions,
    cb?: ResponseCallback
  ) {
    if (typeof options === "function") {
      cb = options
      options = {} as RequestOptions
    }

    try {
      const result = await this.doRequest(
        action,
        req ?? {},
        Object.assign({}, options, {
          headers: {
            "Content-Type": "application/octet-stream; charset=utf-8",
          },
        })
      )
      cb && cb(null, result)
      return result
    } catch (e) {
      cb && cb(e as any, null)
      throw e
    }
  }

  /**
   * @inner
   */
  private async doRequest(
    action: string,
    req: any,
    options: RequestOptions = {}
  ): Promise<ResponseData> {
    if (this.profile.signMethod === "TC3-HMAC-SHA256") {
      return this.doRequestWithSign3(action, req, options)
    }
    let params = this.mergeData(req)
    params = await this.formatRequestData(action, params)

    const headers = Object.assign({}, this.profile.httpProfile.headers, options.headers)
    let traceId = ""
    for (let key in headers) {
      if (key.toLowerCase() === "x-tc-traceid") {
        traceId = headers[key]
        break
      }
    }
    if (!traceId) {
      traceId = uuidv4()
      headers["X-TC-TraceId"] = traceId
    }

    let res
    try {
      res = await HttpConnection.doRequest({
        method: this.profile.httpProfile.reqMethod,
        url: this.profile.httpProfile.protocol + this.endpoint + this.path,
        data: params,
        timeout: this.profile.httpProfile.reqTimeout * 1000,
        headers,
        agent: this.profile.httpProfile.agent,
        proxy: this.profile.httpProfile.proxy,
        signal: options.signal,
      })
    } catch (error) {
      throw new TencentCloudSDKHttpException((error as any).message, "", traceId)
    }
    return this.parseResponse(res)
  }

  /**
   * @inner
   */
  private async doRequestWithSign3(
    action: string,
    params: any,
    options: RequestOptions = {}
  ): Promise<ResponseData> {
    const headers = Object.assign({}, this.profile.httpProfile.headers, options.headers)
    let traceId = ""
    for (let key in headers) {
      if (key.toLowerCase() === "x-tc-traceid") {
        traceId = headers[key]
        break
      }
    }
    if (!traceId) {
      traceId = uuidv4()
      headers["X-TC-TraceId"] = traceId
    }

    let res
    try {
      const credential = await this.getCredential()
      res = await HttpConnection.doRequestWithSign3({
        method: this.profile.httpProfile.reqMethod,
        url: this.profile.httpProfile.protocol + this.endpoint + this.path,
        secretId: credential.secretId,
        secretKey: credential.secretKey,
        region: this.region,
        data: params || "",
        service: this.endpoint.split(".")[0],
        action: action,
        version: this.apiVersion,
        multipart: options && options.multipart,
        timeout: this.profile.httpProfile.reqTimeout * 1000,
        token: credential.token,
        requestClient: this.sdkVersion,
        language: this.profile.language,
        headers,
        agent: this.profile.httpProfile.agent,
        proxy: this.profile.httpProfile.proxy,
        signal: options.signal,
      })
    } catch (e) {
      throw new TencentCloudSDKHttpException((e as any).message, "", traceId)
    }
    return this.parseResponse(res)
  }

  /**
   * Parse HTTP response
   * @param {Response} res HTTP response object
   * @returns {Promise<ResponseData>} Promise that resolves with parsed response data
   * @throws {TencentCloudSDKHttpException} If response contains error
   */
  private async parseResponse(res: Response): Promise<ResponseData> {
    const traceId = res.headers.get("x-tc-traceid")
    if (res.status !== 200) {
      const tcError = new TencentCloudSDKHttpException(res.statusText, "", traceId)
      tcError.httpCode = res.status
      throw tcError
    } else {
      if (res.headers.get("content-type") === "text/event-stream") {
        return new SSEResponseModel(res.body)
      } else {
        const data = await res.json()
        if (data.Response.Error) {
          const tcError = new TencentCloudSDKHttpException(
            data.Response.Error.Message,
            data.Response.RequestId,
            traceId
          )
          tcError.code = data.Response.Error.Code
          throw tcError
        } else {
          return data.Response
        }
      }
    }
  }

  /**
   * Merge nested data into flat structure
   * @param {any} data Input data
   * @param {string} [prefix=""] Key prefix
   * @returns {any} Flattened data object
   */
  private mergeData(data: any, prefix = "") {
    const ret: any = {}
    for (const k in data) {
      if (data[k] === null || data[k] === undefined) {
        continue
      }
      if (data[k] instanceof Array || data[k] instanceof Object) {
        Object.assign(ret, this.mergeData(data[k], prefix + k + "."))
      } else {
        ret[prefix + k] = data[k]
      }
    }
    return ret
  }

  /**
   * Format request data with required fields and signature
   * @param {string} action API action name
   * @param {RequestData} params Request parameters
   * @returns {Promise<RequestData>} Promise that resolves with formatted request data
   */
  private async formatRequestData(action: string, params: RequestData): Promise<RequestData> {
    params.Action = action
    params.RequestClient = this.sdkVersion
    params.Nonce = Math.round(Math.random() * 65535)
    params.Timestamp = Math.round(Date.now() / 1000)
    params.Version = this.apiVersion

    const credential = await this.getCredential()

    if (credential.secretId) {
      params.SecretId = credential.secretId
    }

    if (this.region) {
      params.Region = this.region
    }

    if (credential.token) {
      params.Token = credential.token
    }

    if (this.profile.language) {
      params.Language = this.profile.language
    }

    if (this.profile.signMethod) {
      params.SignatureMethod = this.profile.signMethod
    }
    const signStr = this.formatSignString(params)

    params.Signature = Sign.sign(credential.secretKey, signStr, this.profile.signMethod)
    return params
  }

  /**
   * Format string for signature calculation
   * @param {RequestData} params Request parameters
   * @returns {string} String to be signed
   */
  private formatSignString(params: RequestData): string {
    let strParam = ""
    const keys = Object.keys(params)
    keys.sort()
    for (const k in keys) {
      if (!keys.hasOwnProperty(k)) {
        continue
      }
      //k = k.replace(/_/g, '.');
      strParam += "&" + keys[k] + "=" + params[keys[k]]
    }
    const strSign =
      this.profile.httpProfile.reqMethod.toLocaleUpperCase() +
      this.endpoint +
      this.path +
      "?" +
      strParam.slice(1)
    return strSign
  }
}

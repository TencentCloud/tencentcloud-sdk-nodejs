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

export type ResponseCallback<TReuslt = any> = (error: string, rep: TReuslt) => void
export interface RequestOptions extends Partial<Pick<HttpProfile, "headers">> {
  multipart?: boolean
  /**
   * 中止请求信号
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
 * @inner
 */
export class AbstractClient {
  sdkVersion: string
  path: string
  credential: Credential | DynamicCredential
  region: string
  apiVersion: string
  endpoint: string
  profile: ClientProfile
  /**
   * 实例化client对象
   * @param {string} endpoint 接入点域名
   * @param {string} version 产品版本
   * @param {Credential} credential 认证信息实例
   * @param {string} region 产品地域
   * @param {ClientProfile} profile 可选配置实例
   */
  constructor(
    endpoint: string,
    version: string,
    { credential, region, profile = {} }: ClientConfig
  ) {
    this.path = "/"

    /**
     * 认证信息实例
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
     * 产品地域
     */
    this.region = region || null
    this.sdkVersion = "SDK_NODEJS_" + sdkVersion
    this.apiVersion = version
    this.endpoint = (profile && profile.httpProfile && profile.httpProfile.endpoint) || endpoint

    /**
     * 可选配置实例
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

  async getCredential(): Promise<Credential> {
    if ("getCredential" in this.credential) {
      return await this.credential.getCredential()
    }
    return this.credential
  }

  /**
   * @inner
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
   * @inner
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
   * @inner
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
   * @inner
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
   * @inner
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

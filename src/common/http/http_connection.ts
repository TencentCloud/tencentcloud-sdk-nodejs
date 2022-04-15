import * as QueryString from "querystring"
import { URL } from "url"
import * as isStream from "is-stream"
import * as getStream from "get-stream"
import * as FormData from "form-data"
import Sign from "../sign"
import fetch from "./fetch"
import { Response } from "node-fetch"

/**
 * @inner
 */
export class HttpConnection {
  static async doRequest({
    method,
    url,
    data,
    timeout,
    headers = {},
  }: {
    method: string
    url: string
    data: any
    timeout: number
    headers?: Record<string, string>
  }): Promise<Response> {
    const config: {
      method: string
      timeout: number
      headers: {
        [key: string]: string
      }
      body?: string
    } = {
      method: method,
      headers: Object.assign({}, headers),
      timeout,
    }
    if (method === "GET") {
      url += "?" + QueryString.stringify(data)
    } else {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded"
      config.body = QueryString.stringify(data)
    }
    return await fetch(url, config)
  }

  static async doRequestWithSign3({
    method,
    url,
    data,
    service,
    action,
    region,
    version,
    secretId,
    secretKey,
    multipart = false,
    timeout = 60000,
    token,
    requestClient,
    language,
    headers = {},
  }: {
    method: string
    url: string
    data: any
    service: string
    action: string
    region: string
    version: string
    secretId: string
    secretKey: string
    multipart?: boolean
    timeout?: number
    token: string
    requestClient: string
    language: string
    headers?: Record<string, string>
  }): Promise<Response> {
    // data 中可能带有 readStream，由于需要计算整个 body 的 hash，
    // 所以这里把 readStream 转为 Buffer
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    await convertReadStreamToBuffer(data)

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    data = deepRemoveNull(data)

    const timestamp = parseInt(String(new Date().getTime() / 1000))
    method = method.toUpperCase()

    let payload = ""
    if (method === "GET") {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      data = mergeData(data)
      url += "?" + QueryString.stringify(data)
    }
    if (method === "POST") {
      payload = data
    }
    const config: {
      method: string
      timeout: number
      headers: {
        [key: string]: any
      }
      body?: any
    } = {
      method,
      timeout,
      headers: Object.assign({}, headers, {
        Host: new URL(url).host,
        "X-TC-Action": action,
        "X-TC-Region": region,
        "X-TC-Timestamp": timestamp,
        "X-TC-Version": version,
        "X-TC-Token": token,
        "X-TC-RequestClient": requestClient,
      }),
    }

    if (token === null) {
      delete config.headers["X-TC-Token"]
    }
    if (region === null) {
      delete config.headers["X-TC-Region"]
    }

    if (language) {
      config.headers["X-TC-Language"] = language
    }

    let form
    if (method === "GET") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded"
    }
    if (method === "POST" && !multipart) {
      config.body = JSON.stringify(data)
      config.headers["Content-Type"] = "application/json"
    }
    if (method === "POST" && multipart) {
      form = new FormData()
      for (const key in data) {
        form.append(key, data[key])
      }
      config.body = form
      config.headers = Object.assign({}, config.headers, form.getHeaders())
    }

    const signature = Sign.sign3({
      method,
      url,
      payload,
      timestamp,
      service,
      secretId,
      secretKey,
      multipart,
      boundary: form ? form.getBoundary() : undefined,
    })

    config.headers["Authorization"] = signature

    return await fetch(url, config)
  }
}

async function convertReadStreamToBuffer(data: any): Promise<void> {
  for (const key in data) {
    if (isStream(data[key])) {
      data[key] = await getStream.buffer(data[key])
    }
  }
}

function mergeData(data: any, prefix = "") {
  const ret: any = {}
  for (const k in data) {
    if (data[k] === null) {
      continue
    }
    if (data[k] instanceof Array || data[k] instanceof Object) {
      Object.assign(ret, mergeData(data[k], prefix + k + "."))
    } else {
      ret[prefix + k] = data[k]
    }
  }
  return ret
}

function deepRemoveNull(obj: any) {
  if (isArray(obj)) {
    return obj.map(deepRemoveNull)
  } else if (isObject(obj)) {
    const result: any = {}
    for (const key in obj) {
      const value = obj[key]
      if (!isNull(value)) {
        result[key] = deepRemoveNull(value)
      }
    }
    return result
  } else {
    return obj
  }
}

function isBuffer(x: any): boolean {
  return Buffer.isBuffer(x)
}

function isArray(x: any): boolean {
  return Array.isArray(x)
}

function isObject(x: any): boolean {
  return typeof x === "object" && !isArray(x) && !isStream(x) && !isBuffer(x) && x !== null
}

function isNull(x: any): boolean {
  return x === null
}

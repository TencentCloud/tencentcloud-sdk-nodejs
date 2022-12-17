import fetch, { RequestInit, Response } from "node-fetch"
import HttpsProxyAgent = require("https-proxy-agent")

export interface FetchOptions extends Omit<RequestInit, "signal"> {
  proxy?: string
  headers?: Record<string, string>
  // node-fetch中的signal声明与ts自带的有点冲突，以ts的为准
  signal?: AbortSignal
}
export default function (url: string, options: FetchOptions): Promise<Response> {
  const instanceOptions = options || ({} as FetchOptions)

  const proxy = options.proxy || process.env.http_proxy
  if (!options.agent && proxy) {
    instanceOptions.agent = new (HttpsProxyAgent as any)(proxy)
  }

  return fetch(url, instanceOptions as any)
}

import fetch, { RequestInit, Response } from "node-fetch"
import HttpsProxyAgent from "https-proxy-agent"

export interface FetchOptions extends Omit<RequestInit, "signal"> {
  proxy?: string
  headers?: Record<string, string>
  // The signal declaration in node-fetch conflicts with TypeScript's built-in type; use TypeScript's definition as the standard.
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

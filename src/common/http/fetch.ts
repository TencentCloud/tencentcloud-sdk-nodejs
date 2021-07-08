import fetch, { RequestInit, Response } from "node-fetch"
import HttpsProxyAgent = require("https-proxy-agent")

export default function (url: string, options: RequestInit): Promise<Response> {
  const instanceOptions = options || {}

  if (!options.agent && process.env.http_proxy) {
    instanceOptions.agent = new (HttpsProxyAgent as any)(process.env.http_proxy)
  }

  return fetch(url, instanceOptions)
}

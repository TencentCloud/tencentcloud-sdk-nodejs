/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import { SearchProRequest, SearchProResponse } from "./wsa_models"

/**
 * wsa client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("wsa.tencentcloudapi.com", "2025-05-08", clientConfig)
  }

  /**
   * 联网搜索API，以json形式向客户提供搜索结果数据，包含标题、摘要、内容来源url等信息
   */
  async SearchPro(
    req: SearchProRequest,
    cb?: (error: string, rep: SearchProResponse) => void
  ): Promise<SearchProResponse> {
    return this.request("SearchPro", req, cb)
  }
}

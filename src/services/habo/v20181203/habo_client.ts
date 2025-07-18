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
import {
  DescribeStatusRequest,
  StartAnalyseResponse,
  StartAnalyseRequest,
  DescribeStatusResponse,
} from "./habo_models"

/**
 * habo client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("habo.tencentcloudapi.com", "2018-12-03", clientConfig)
  }

  /**
   * 上传样本到哈勃进行分析，异步生成分析日志。
   */
  async StartAnalyse(
    req: StartAnalyseRequest,
    cb?: (error: string, rep: StartAnalyseResponse) => void
  ): Promise<StartAnalyseResponse> {
    return this.request("StartAnalyse", req, cb)
  }

  /**
   * 查询指定md5样本是否分析完成，并获取分析日志下载地址。
   */
  async DescribeStatus(
    req: DescribeStatusRequest,
    cb?: (error: string, rep: DescribeStatusResponse) => void
  ): Promise<DescribeStatusResponse> {
    return this.request("DescribeStatus", req, cb)
  }
}

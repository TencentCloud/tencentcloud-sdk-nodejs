/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
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
  GetUsagePlanUsageAmountResponse,
  GetCateTreeResponse,
  GetUsagePlanUsageAmountRequest,
  GetCateTreeRequest,
} from "./market_models"

/**
 * market client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("market.tencentcloudapi.com", "2019-10-10", clientConfig)
  }

  /**
   * 获取分类名称
   */
  async GetCateTree(
    req: GetCateTreeRequest,
    cb?: (error: string, rep: GetCateTreeResponse) => void
  ): Promise<GetCateTreeResponse> {
    return this.request("GetCateTree", req, cb)
  }

  /**
     * 该接口可以根据InstanceId查询实例的api的使用情况。

默认接口请求频率限制：20次/秒。
     */
  async GetUsagePlanUsageAmount(
    req: GetUsagePlanUsageAmountRequest,
    cb?: (error: string, rep: GetUsagePlanUsageAmountResponse) => void
  ): Promise<GetUsagePlanUsageAmountResponse> {
    return this.request("GetUsagePlanUsageAmount", req, cb)
  }
}

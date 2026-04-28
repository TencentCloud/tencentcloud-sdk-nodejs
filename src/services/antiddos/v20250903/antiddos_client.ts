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
  DDoSUnblockQuota,
  Filter,
  UnblockResourcesResponse,
  DDoSBlockRecord,
  DescribeDDoSBlockRecordsResponse,
  UnblockResourcesRequest,
  DescribeDDoSBlockRecordsRequest,
} from "./antiddos_models"

/**
 * antiddos client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("antiddos.tencentcloudapi.com", "2025-09-03", clientConfig)
  }

  /**
   * 查询封堵解封记录和解封配额信息。
   */
  async DescribeDDoSBlockRecords(
    req: DescribeDDoSBlockRecordsRequest,
    cb?: (error: string, rep: DescribeDDoSBlockRecordsResponse) => void
  ): Promise<DescribeDDoSBlockRecordsResponse> {
    return this.request("DescribeDDoSBlockRecords", req, cb)
  }

  /**
   * 申请解封资源，可通过 DescribeDDoSBlockRecords 接口获取资源的封堵解封状态。
   */
  async UnblockResources(
    req: UnblockResourcesRequest,
    cb?: (error: string, rep: UnblockResourcesResponse) => void
  ): Promise<UnblockResourcesResponse> {
    return this.request("UnblockResources", req, cb)
  }
}

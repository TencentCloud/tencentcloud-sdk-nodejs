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
  CheckAppidExistRequest,
  QueryResourceInfoResponse,
  CheckAppidExistResponse,
  GoodsDetail,
  QueryResourceInfoRequest,
  QueryResourceResponse,
  QueryResourceRequest,
  Resource,
} from "./anicloud_models"

/**
 * anicloud client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("anicloud.tencentcloudapi.com", "2022-09-23", clientConfig)
  }

  /**
   * 查看appid是否存在
   */
  async CheckAppidExist(
    req: CheckAppidExistRequest,
    cb?: (error: string, rep: CheckAppidExistResponse) => void
  ): Promise<CheckAppidExistResponse> {
    return this.request("CheckAppidExist", req, cb)
  }

  /**
   * 查询购买资源
   */
  async QueryResource(
    req: QueryResourceRequest,
    cb?: (error: string, rep: QueryResourceResponse) => void
  ): Promise<QueryResourceResponse> {
    return this.request("QueryResource", req, cb)
  }

  /**
   * 查询资源信息
   */
  async QueryResourceInfo(
    req: QueryResourceInfoRequest,
    cb?: (error: string, rep: QueryResourceInfoResponse) => void
  ): Promise<QueryResourceInfoResponse> {
    return this.request("QueryResourceInfo", req, cb)
  }
}

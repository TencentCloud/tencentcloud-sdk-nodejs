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
  Describe5GAPNsResponse,
  Modify5GInstanceAttributeRequest,
  Delete5GInstanceResponse,
  Modify5GInstanceAttributeResponse,
  Describe5GInstancesResponse,
  Describe5GAPNsRequest,
  Create5GInstanceResponse,
  Delete5GInstanceRequest,
  Describe5GInstancesRequest,
  Create5GInstanceRequest,
} from "./csxg_models"

/**
 * csxg client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("csxg.tencentcloudapi.com", "2023-03-03", clientConfig)
  }

  /**
   * 修改5G入云服务
   */
  async Modify5GInstanceAttribute(
    req?: Modify5GInstanceAttributeRequest,
    cb?: (error: string, rep: Modify5GInstanceAttributeResponse) => void
  ): Promise<Modify5GInstanceAttributeResponse> {
    return this.request("Modify5GInstanceAttribute", req, cb)
  }

  /**
   * 删除5G入云服务
   */
  async Delete5GInstance(
    req?: Delete5GInstanceRequest,
    cb?: (error: string, rep: Delete5GInstanceResponse) => void
  ): Promise<Delete5GInstanceResponse> {
    return this.request("Delete5GInstance", req, cb)
  }

  /**
   * 创建5G入云服务接口
   */
  async Create5GInstance(
    req?: Create5GInstanceRequest,
    cb?: (error: string, rep: Create5GInstanceResponse) => void
  ): Promise<Create5GInstanceResponse> {
    return this.request("Create5GInstance", req, cb)
  }

  /**
   * 查询5G入云服务
   */
  async Describe5GInstances(
    req?: Describe5GInstancesRequest,
    cb?: (error: string, rep: Describe5GInstancesResponse) => void
  ): Promise<Describe5GInstancesResponse> {
    return this.request("Describe5GInstances", req, cb)
  }

  /**
   * 查询APN信息
   */
  async Describe5GAPNs(
    req?: Describe5GAPNsRequest,
    cb?: (error: string, rep: Describe5GAPNsResponse) => void
  ): Promise<Describe5GAPNsResponse> {
    return this.request("Describe5GAPNs", req, cb)
  }
}

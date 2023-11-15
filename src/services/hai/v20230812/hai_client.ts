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
  TerminateInstancesResponse,
  SystemDisk,
  TerminateInstancesRequest,
  RunInstancesResponse,
  RunInstancesRequest,
} from "./hai_models"

/**
 * hai client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("hai.tencentcloudapi.com", "2023-08-12", clientConfig)
  }

  /**
   * 本接口 (RunInstances) 用于创建一个或多个指定配置的实例。
   */
  async RunInstances(
    req: RunInstancesRequest,
    cb?: (error: string, rep: RunInstancesResponse) => void
  ): Promise<RunInstancesResponse> {
    return this.request("RunInstances", req, cb)
  }

  /**
   * 本接口 (TerminateInstances) 用于主动退还实例。
   */
  async TerminateInstances(
    req: TerminateInstancesRequest,
    cb?: (error: string, rep: TerminateInstancesResponse) => void
  ): Promise<TerminateInstancesResponse> {
    return this.request("TerminateInstances", req, cb)
  }
}

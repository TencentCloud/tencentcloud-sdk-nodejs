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
  CreateSessionResponse,
  DestroySessionResponse,
  ApplyConcurrentResponse,
  ApplyConcurrentRequest,
  DestroySessionRequest,
  CreateSessionRequest,
} from "./car_models"

/**
 * car client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("car.tencentcloudapi.com", "2022-01-10", clientConfig)
  }

  /**
   * 申请并发
   */
  async ApplyConcurrent(
    req: ApplyConcurrentRequest,
    cb?: (error: string, rep: ApplyConcurrentResponse) => void
  ): Promise<ApplyConcurrentResponse> {
    return this.request("ApplyConcurrent", req, cb)
  }

  /**
   * 销毁会话
   */
  async DestroySession(
    req: DestroySessionRequest,
    cb?: (error: string, rep: DestroySessionResponse) => void
  ): Promise<DestroySessionResponse> {
    return this.request("DestroySession", req, cb)
  }

  /**
   * 创建会话
   */
  async CreateSession(
    req: CreateSessionRequest,
    cb?: (error: string, rep: CreateSessionResponse) => void
  ): Promise<CreateSessionResponse> {
    return this.request("CreateSession", req, cb)
  }
}

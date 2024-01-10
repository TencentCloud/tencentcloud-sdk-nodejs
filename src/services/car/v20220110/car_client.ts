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
  StopPublishStreamRequest,
  StartPublishStreamWithURLResponse,
  StopPublishStreamResponse,
  StartPublishStreamWithURLRequest,
  DestroySessionResponse,
  StartPublishStreamResponse,
  ApplyConcurrentResponse,
  ApplyConcurrentRequest,
  DestroySessionRequest,
  StartPublishStreamRequest,
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
   * 本接口用于申请并发。接口超时时间：20秒。
   */
  async ApplyConcurrent(
    req: ApplyConcurrentRequest,
    cb?: (error: string, rep: ApplyConcurrentResponse) => void
  ): Promise<ApplyConcurrentResponse> {
    return this.request("ApplyConcurrent", req, cb)
  }

  /**
   * 销毁会话。如果该会话开启了云端推流，那么销毁会话时会结束云端推流。
   */
  async DestroySession(
    req: DestroySessionRequest,
    cb?: (error: string, rep: DestroySessionResponse) => void
  ): Promise<DestroySessionResponse> {
    return this.request("DestroySession", req, cb)
  }

  /**
   * 开始云端推流。云端推流 codec 根据客户端（SDK）能力来自动选择，默认优先顺序为 H265、H264、VP8、VP9。
   */
  async StartPublishStream(
    req: StartPublishStreamRequest,
    cb?: (error: string, rep: StartPublishStreamResponse) => void
  ): Promise<StartPublishStreamResponse> {
    return this.request("StartPublishStream", req, cb)
  }

  /**
   * 停止云端推流
   */
  async StopPublishStream(
    req: StopPublishStreamRequest,
    cb?: (error: string, rep: StopPublishStreamResponse) => void
  ): Promise<StopPublishStreamResponse> {
    return this.request("StopPublishStream", req, cb)
  }

  /**
   * 开始云端推流到指定URL。云端推流 codec 根据客户端（SDK）能力来自动选择，默认优先顺序为 H265、H264、VP8、VP9。该推流方式需要单独计费，详细计费方式请查看[指定地址推流费用说明](https://cloud.tencent.com/document/product/1547/72168#98ac188a-d122-4caf-88be-05268ecefdf6)
   */
  async StartPublishStreamWithURL(
    req: StartPublishStreamWithURLRequest,
    cb?: (error: string, rep: StartPublishStreamWithURLResponse) => void
  ): Promise<StartPublishStreamWithURLResponse> {
    return this.request("StartPublishStreamWithURL", req, cb)
  }

  /**
   * 本接口用于创建会话。接口超时时间：5秒。
   */
  async CreateSession(
    req: CreateSessionRequest,
    cb?: (error: string, rep: CreateSessionResponse) => void
  ): Promise<CreateSessionResponse> {
    return this.request("CreateSession", req, cb)
  }
}

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
  StartPublishStreamToCSSResponse,
  StopGameRequest,
  SaveGameArchiveResponse,
  StopPublishStreamRequest,
  StopPublishStreamResponse,
  TrylockWorkerResponse,
  SwitchGameArchiveRequest,
  StartPublishStreamToCSSRequest,
  DescribeInstancesCountResponse,
  StartPublishStreamResponse,
  CreateSessionRequest,
  CreateSessionResponse,
  DescribeInstancesCountRequest,
  SaveGameArchiveRequest,
  TrylockWorkerRequest,
  SwitchGameArchiveResponse,
  StartPublishStreamRequest,
  StopGameResponse,
} from "./gs_models"

/**
 * gs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("gs.tencentcloudapi.com", "2019-11-18", clientConfig)
  }

  /**
   * 获取并发总数和运行数
   */
  async DescribeInstancesCount(
    req: DescribeInstancesCountRequest,
    cb?: (error: string, rep: DescribeInstancesCountResponse) => void
  ): Promise<DescribeInstancesCountResponse> {
    return this.request("DescribeInstancesCount", req, cb)
  }

  /**
   * 尝试锁定机器
   */
  async TrylockWorker(
    req: TrylockWorkerRequest,
    cb?: (error: string, rep: TrylockWorkerResponse) => void
  ): Promise<TrylockWorkerResponse> {
    return this.request("TrylockWorker", req, cb)
  }

  /**
   * 强制退出游戏
   */
  async StopGame(
    req: StopGameRequest,
    cb?: (error: string, rep: StopGameResponse) => void
  ): Promise<StopGameResponse> {
    return this.request("StopGame", req, cb)
  }

  /**
   * 保存游戏存档
   */
  async SaveGameArchive(
    req: SaveGameArchiveRequest,
    cb?: (error: string, rep: SaveGameArchiveResponse) => void
  ): Promise<SaveGameArchiveResponse> {
    return this.request("SaveGameArchive", req, cb)
  }

  /**
   * 开始云端推流
   */
  async StartPublishStreamToCSS(
    req: StartPublishStreamToCSSRequest,
    cb?: (error: string, rep: StartPublishStreamToCSSResponse) => void
  ): Promise<StartPublishStreamToCSSResponse> {
    return this.request("StartPublishStreamToCSS", req, cb)
  }

  /**
   * 切换游戏存档
   */
  async SwitchGameArchive(
    req: SwitchGameArchiveRequest,
    cb?: (error: string, rep: SwitchGameArchiveResponse) => void
  ): Promise<SwitchGameArchiveResponse> {
    return this.request("SwitchGameArchive", req, cb)
  }

  /**
   * 开始云端推流
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
   * 创建会话
   */
  async CreateSession(
    req: CreateSessionRequest,
    cb?: (error: string, rep: CreateSessionResponse) => void
  ): Promise<CreateSessionResponse> {
    return this.request("CreateSession", req, cb)
  }
}

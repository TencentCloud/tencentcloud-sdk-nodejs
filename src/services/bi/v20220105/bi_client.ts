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
  CreateEmbedTokenResponse,
  ApplyEmbedIntervalRequest,
  ApplyEmbedTokenInfo,
  ApplyEmbedIntervalResponse,
  CreateEmbedTokenRequest,
  EmbedTokenInfo,
} from "./bi_models"

/**
 * bi client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bi.tencentcloudapi.com", "2022-01-05", clientConfig)
  }

  /**
   * 创建嵌出报表-强鉴权
   */
  async CreateEmbedToken(
    req: CreateEmbedTokenRequest,
    cb?: (error: string, rep: CreateEmbedTokenResponse) => void
  ): Promise<CreateEmbedTokenResponse> {
    return this.request("CreateEmbedToken", req, cb)
  }

  /**
   * 申请延长Token可用时间接口-强鉴权
   */
  async ApplyEmbedInterval(
    req: ApplyEmbedIntervalRequest,
    cb?: (error: string, rep: ApplyEmbedIntervalResponse) => void
  ): Promise<ApplyEmbedIntervalResponse> {
    return this.request("ApplyEmbedInterval", req, cb)
  }
}

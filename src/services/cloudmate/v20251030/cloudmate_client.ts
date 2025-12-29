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
  CloudMateAgentRequest,
  CloudMateAgentResponse,
  ChatEventContentPart,
  ChatContent,
} from "./cloudmate_models"

/**
 * cloudmate client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cloudmate.tencentcloudapi.com", "2025-10-30", clientConfig)
  }

  /**
     * 发起智能诊断对话
注意：使用该API时，请务必设置请求域名（Endpoint）为 cloudmate.ai.tencentcloudapi.com
     */
  async CloudMateAgent(
    req: CloudMateAgentRequest,
    cb?: (error: string, rep: CloudMateAgentResponse) => void
  ): Promise<CloudMateAgentResponse> {
    return this.request("CloudMateAgent", req, cb)
  }
}

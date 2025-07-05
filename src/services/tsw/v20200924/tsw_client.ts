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
import { DescribeAgentShellResponse, AgentShell, DescribeAgentShellRequest } from "./tsw_models"

/**
 * tsw client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tsw.tencentcloudapi.com", "2020-09-24", clientConfig)
  }

  /**
   * 获取服务接入信息
   */
  async DescribeAgentShell(
    req?: DescribeAgentShellRequest,
    cb?: (error: string, rep: DescribeAgentShellResponse) => void
  ): Promise<DescribeAgentShellResponse> {
    return this.request("DescribeAgentShell", req, cb)
  }
}

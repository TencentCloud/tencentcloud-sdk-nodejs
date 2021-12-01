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
  ApmInstanceDetail,
  DescribeApmAgentResponse,
  ApmTag,
  DescribeApmInstancesResponse,
  DescribeApmInstancesRequest,
  DescribeApmAgentRequest,
  ApmAgentInfo,
} from "./apm_models"

/**
 * apm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("apm.tencentcloudapi.com", "2021-06-22", clientConfig)
  }

  /**
   * APM实例列表拉取
   */
  async DescribeApmInstances(
    req: DescribeApmInstancesRequest,
    cb?: (error: string, rep: DescribeApmInstancesResponse) => void
  ): Promise<DescribeApmInstancesResponse> {
    return this.request("DescribeApmInstances", req, cb)
  }

  /**
   * 获取Apm Agent信息
   */
  async DescribeApmAgent(
    req: DescribeApmAgentRequest,
    cb?: (error: string, rep: DescribeApmAgentResponse) => void
  ): Promise<DescribeApmAgentResponse> {
    return this.request("DescribeApmAgent", req, cb)
  }
}

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
  DescribeStrategiesResponse,
  DescribeTaskStrategyRisksRequest,
  CreateAdvisorAuthorizationResponse,
  RiskFieldsDesc,
  DescribeTaskStrategyRisksResponse,
  KeyValue,
  CreateAdvisorAuthorizationRequest,
  Strategies,
  Conditions,
  DescribeStrategiesRequest,
} from "./advisor_models"

/**
 * advisor client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("advisor.tencentcloudapi.com", "2020-07-21", clientConfig)
  }

  /**
   * 查询评估项风险实例列表
   */
  async DescribeTaskStrategyRisks(
    req: DescribeTaskStrategyRisksRequest,
    cb?: (error: string, rep: DescribeTaskStrategyRisksResponse) => void
  ): Promise<DescribeTaskStrategyRisksResponse> {
    return this.request("DescribeTaskStrategyRisks", req, cb)
  }

  /**
   * 开启智能顾问授权。会同步开启报告解读和云架构协作权限
   */
  async CreateAdvisorAuthorization(
    req?: CreateAdvisorAuthorizationRequest,
    cb?: (error: string, rep: CreateAdvisorAuthorizationResponse) => void
  ): Promise<CreateAdvisorAuthorizationResponse> {
    return this.request("CreateAdvisorAuthorization", req, cb)
  }

  /**
   * 用于查询评估项的信息
   */
  async DescribeStrategies(
    req?: DescribeStrategiesRequest,
    cb?: (error: string, rep: DescribeStrategiesResponse) => void
  ): Promise<DescribeStrategiesResponse> {
    return this.request("DescribeStrategies", req, cb)
  }
}

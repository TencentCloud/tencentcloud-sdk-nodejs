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
  CreateSavingPlanOrderRequest,
  CreateSavingPlanOrderResponse,
  DescribeSavingPlanDeductRequest,
  SavingPlanOverviewDetail,
  DescribeSavingPlanUsageRequest,
  SavingPlanDeductDetail,
  DescribeSavingPlanOverviewResponse,
  DescribeSavingPlanUsageResponse,
  DescribeSavingPlanDeductResponse,
  DescribeSavingPlanOverviewRequest,
  SavingPlanUsageDetail,
} from "./svp_models"

/**
 * svp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("svp.tencentcloudapi.com", "2024-01-25", clientConfig)
  }

  /**
   * 查用当前用户明细节省计划查询时段内的使用情况
   */
  async DescribeSavingPlanUsage(
    req: DescribeSavingPlanUsageRequest,
    cb?: (error: string, rep: DescribeSavingPlanUsageResponse) => void
  ): Promise<DescribeSavingPlanUsageResponse> {
    return this.request("DescribeSavingPlanUsage", req, cb)
  }

  /**
   * 查用当前用户明细节省计划总览查询时段内的使用情况
   */
  async DescribeSavingPlanOverview(
    req: DescribeSavingPlanOverviewRequest,
    cb?: (error: string, rep: DescribeSavingPlanOverviewResponse) => void
  ): Promise<DescribeSavingPlanOverviewResponse> {
    return this.request("DescribeSavingPlanOverview", req, cb)
  }

  /**
   * 创建节省计划订单
   */
  async CreateSavingPlanOrder(
    req: CreateSavingPlanOrderRequest,
    cb?: (error: string, rep: CreateSavingPlanOrderResponse) => void
  ): Promise<CreateSavingPlanOrderResponse> {
    return this.request("CreateSavingPlanOrder", req, cb)
  }

  /**
   * 查询节省计划抵扣明细
   */
  async DescribeSavingPlanDeduct(
    req: DescribeSavingPlanDeductRequest,
    cb?: (error: string, rep: DescribeSavingPlanDeductResponse) => void
  ): Promise<DescribeSavingPlanDeductResponse> {
    return this.request("DescribeSavingPlanDeduct", req, cb)
  }
}

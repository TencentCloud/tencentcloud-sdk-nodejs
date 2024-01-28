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

/**
 * CreateSavingPlanOrder请求参数结构体
 */
export interface CreateSavingPlanOrderRequest {
  /**
   * 地域编码
   */
  RegionId: number
  /**
   * 区域编码
   */
  ZoneId: number
  /**
   * 预付费类型
   */
  PrePayType: string
  /**
   * 时长
   */
  TimeSpan: number
  /**
   * 时长单位
   */
  TimeUnit: string
  /**
   * 商品唯一标识
   */
  CommodityCode: string
  /**
   * 承诺时长内的小额金额（单位：元）
   */
  PromiseUseAmount: number
  /**
   * 节省计划的指定生效时间，若不传则为当前下单时间。传参数格式:"2023-10-01 00:00:00"，仅支持指定日期的0点时刻
   */
  SpecifyEffectTime?: string
  /**
   * 可重入ID
   */
  ClientToken?: string
}

/**
 * CreateSavingPlanOrder返回参数结构体
 */
export interface CreateSavingPlanOrderResponse {
  /**
   * 订单号
   */
  BigDealId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

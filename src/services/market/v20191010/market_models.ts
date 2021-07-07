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
 * GetUsagePlanUsageAmount返回参数结构体
 */
export interface GetUsagePlanUsageAmountResponse {
  /**
   * 最大调用量
   */
  MaxRequestNum: number

  /**
   * 已经调用量
   */
  InUseRequestNum: number

  /**
   * 剩余调用量
   */
  RemainingRequestNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetUsagePlanUsageAmount请求参数结构体
 */
export interface GetUsagePlanUsageAmountRequest {
  /**
   * 用于查询实例的Id
   */
  InstanceId: string
}

/**
 * FlowProductRemind请求参数结构体
 */
export interface FlowProductRemindRequest {
  /**
   * 服务商uin
   */
  ProviderUin: string

  /**
   * 服务商实例ID
   */
  SignId: string

  /**
   * 云市场实例ID
   */
  ResourceId: string

  /**
   * 实例总流量
   */
  TotalFlow: string

  /**
   * 剩余流量
   */
  LeftFlow: string

  /**
   * 流量单位
   */
  FlowUnit: string
}

/**
 * FlowProductRemind返回参数结构体
 */
export interface FlowProductRemindResponse {
  /**
   * 是否成功
   */
  Success: string

  /**
   * 流水号
   */
  FlowId: string

  /**
      * 消息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Info: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * DescribeDrawResourceList返回参数结构体
 */
export interface DescribeDrawResourceListResponse {
  /**
   * 返回数据条数
   */
  TotalCount?: number
  /**
   * 返回数据数组
   */
  ResourceDrawList?: Array<ResourceDrawListType>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 输出用户的资源数据
 */
export interface ResourceDrawListType {
  /**
   * 记录id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 资源记录id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 本订单资源序列号
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexId?: string
  /**
   * 客户的uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BigDealId?: string
  /**
   * 小订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SmallOrderId?: string
  /**
   * 资源创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceNewStartTime?: string
  /**
   * 资源到期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceNewEndTime?: string
  /**
   * 资源状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceStatus?: number
  /**
   * 本记录状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 项目类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType?: number
}

/**
 * DescribeDrawResourceList请求参数结构体
 */
export interface DescribeDrawResourceListRequest {
  /**
   * PageNumber
   */
  PageNumber: number
  /**
   * PageSize
   */
  PageSize: number
}

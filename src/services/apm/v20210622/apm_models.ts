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
 * CreateApmInstance返回参数结构体
 */
export interface CreateApmInstanceResponse {
  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * apm实例信息
 */
export interface ApmInstanceDetail {
  /**
      * 存储使用量(MB)
注意：此字段可能返回 null，表示取不到有效值。
      */
  AmountOfUsedStorage: number

  /**
      * 实例名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 实例所属tag列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<ApmTag>

  /**
   * 实例ID
   */
  InstanceId: string

  /**
      * 创建人Uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateUin: string

  /**
      * 该实例已上报的服务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceCount: number

  /**
      * 日均上报Span数
注意：此字段可能返回 null，表示取不到有效值。
      */
  CountOfReportSpanPerDay: number

  /**
   * AppId信息
   */
  AppId: number

  /**
      * Trace数据保存时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  TraceDuration: number

  /**
      * 实例描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 实例所属地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * 实例上报额度
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpanDailyCounters: number

  /**
      * 实例是否开通计费
注意：此字段可能返回 null，表示取不到有效值。
      */
  BillingInstance: number

  /**
      * 错误率阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrRateThreshold: number

  /**
      * 采样率阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
  SampleRate: number

  /**
      * 是否开启错误采样 0  关 1 开
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorSample: number

  /**
      * 慢调用保存阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
  SlowRequestSavedThreshold: number
}

/**
 * CreateApmInstance请求参数结构体
 */
export interface CreateApmInstanceRequest {
  /**
   * 实例名
   */
  Name: string

  /**
   * 实例描述信息
   */
  Description?: string

  /**
   * Trace数据保存时长
   */
  TraceDuration?: number

  /**
   * 标签列表
   */
  Tags?: Array<ApmTag>

  /**
   * 实例上报额度值
   */
  SpanDailyCounters?: number
}

/**
 * DescribeApmAgent返回参数结构体
 */
export interface DescribeApmAgentResponse {
  /**
      * Agent信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApmAgent: ApmAgentInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 维度（标签）对象
 */
export interface ApmTag {
  /**
   * 维度Key(列名，标签Key)
   */
  Key: string

  /**
   * 维度值（标签值）
   */
  Value: string
}

/**
 * DescribeApmInstances返回参数结构体
 */
export interface DescribeApmInstancesResponse {
  /**
      * apm实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Instances: Array<ApmInstanceDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApmInstances请求参数结构体
 */
export interface DescribeApmInstancesRequest {
  /**
   * Tag列表
   */
  Tags?: Array<ApmTag>

  /**
   * 搜索实例名
   */
  InstanceName?: string

  /**
   * 过滤实例ID
   */
  InstanceIds?: Array<string>
}

/**
 * DescribeApmAgent请求参数结构体
 */
export interface DescribeApmAgentRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 接入方式
   */
  AgentType?: string

  /**
   * 环境
   */
  NetworkMode?: string

  /**
   * 语言
   */
  LanguageEnvironment?: string
}

/**
 * apm Agent信息
 */
export interface ApmAgentInfo {
  /**
      * Agent下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  AgentDownloadURL: string

  /**
      * Collector上报地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  CollectorURL: string

  /**
      * Token信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Token: string

  /**
      * 外网上报地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicCollectorURL: string

  /**
      * 自研VPC上报地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  InnerCollectorURL: string

  /**
      * 内网上报地址(Private Link上报地址)
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateLinkCollectorURL: string
}

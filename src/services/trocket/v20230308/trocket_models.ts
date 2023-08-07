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
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 实例列表
   */
  Data?: Array<InstanceItem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicList返回参数结构体
 */
export interface DescribeTopicListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 主题列表
   */
  Data?: Array<TopicItem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签过滤器
 */
export interface TagFilter {
  /**
   * 标签键名称
   */
  TagKey: string
  /**
   * 标签值列表
   */
  TagValues: Array<string>
}

/**
 * 查询过滤器
 */
export interface Filter {
  /**
   * 过滤条件名
   */
  Name: string
  /**
   * 过滤条件的值
   */
  Values: Array<string>
}

/**
 * 列表上的主题信息
 */
export interface TopicItem {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 主题名称
   */
  Topic?: string
  /**
   * 主题类型
   */
  TopicType?: string
  /**
   * 队列数量
   */
  QueueNum?: number
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * 标签数据
 */
export interface Tag {
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue: string
}

/**
 * 实例列表页中的实例信息
 */
export interface InstanceItem {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例版本
   */
  Version?: string
  /**
   * 实例类型，
EXPERIMENT，体验版
BASIC，基础版
PRO，专业版
PLATINUM，铂金版
   */
  InstanceType?: string
  /**
   * 实例状态，
RUNNING, 运行中
MAINTAINING，维护中
ABNORMAL，异常
OVERDUE，欠费
DESTROYED，已删除
CREATING，创建中
MODIFYING，变配中
CREATE_FAILURE，创建失败
MODIFY_FAILURE，变配失败
DELETING，删除中
   */
  InstanceStatus?: string
  /**
   * 实例主题数上限
   */
  TopicNumLimit?: number
  /**
   * 实例消费组数量上限
   */
  GroupNumLimit?: number
  /**
   * 计费模式，
POSTPAID，按量计费
PREPAID，包年包月
   */
  PayMode?: string
  /**
   * 到期时间，秒为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiryTime?: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 主题数量
   */
  TopicNum?: number
  /**
   * 消费组数量
   */
  GroupNum?: number
  /**
   * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<Tag>
  /**
   * 商品规格
   */
  SkuCode?: string
  /**
   * TPS限流值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TpsLimit?: number
  /**
   * 弹性TPS限流值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaledTpsLimit?: number
  /**
   * 消息保留时间，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageRetention?: number
  /**
   * 延迟消息最大时长，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxMessageDelay?: number
}

/**
 * DescribeTopicList请求参数结构体
 */
export interface DescribeTopicListRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 查询起始位置
   */
  Offset: number
  /**
   * 查询结果限制数量
   */
  Limit: number
  /**
   * 查询条件列表
   */
  Filters?: Array<Filter>
}

/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
  /**
   * 查询起始位置
   */
  Offset: number
  /**
   * 查询结果限制数量
   */
  Limit: number
  /**
   * 查询条件列表
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤器
   */
  TagFilters?: Array<TagFilter>
}

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
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 主题
   */
  Topic?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportSourceClusterTopics返回参数结构体
 */
export interface ImportSourceClusterTopicsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConsumerGroup请求参数结构体
 */
export interface CreateConsumerGroupRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 消费组名称
   */
  ConsumerGroup: string
  /**
   * 最大重试次数
   */
  MaxRetryTimes: number
  /**
   * 是否开启消费
   */
  ConsumeEnable: boolean
  /**
   * 顺序投递：true
并发投递：false
   */
  ConsumeMessageOrderly: boolean
  /**
   * 备注
   */
  Remark?: string
}

/**
 * CreateRole返回参数结构体
 */
export interface CreateRoleResponse {
  /**
   * 角色名
   */
  Role?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMQTTInstance返回参数结构体
 */
export interface CreateMQTTInstanceResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportSourceClusterConsumerGroups请求参数结构体
 */
export interface ImportSourceClusterConsumerGroupsRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 待导入的消费组列表
   */
  GroupList: Array<SourceClusterGroupConfig>
}

/**
 * DescribeRoleList返回参数结构体
 */
export interface DescribeRoleListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 角色信息列表
   */
  Data?: Array<RoleItem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例名称
   */
  Name?: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 消息发送和接收的比例
   */
  SendReceiveRatio?: number
  /**
   * 调整实例规格的商品代号
   */
  SkuCode?: string
  /**
   * 消息保留时长，小时为单位
   */
  MessageRetention?: number
  /**
   * 是否开启弹性TPS
   */
  ScaledTpsEnabled?: boolean
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

/**
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMQTTInstance请求参数结构体
 */
export interface CreateMQTTInstanceRequest {
  /**
   * 实例类型，
EXPERIMENT 体验版
BASIC 基础版
PRO  专业版
PLATINUM 铂金版
   */
  InstanceType: string
  /**
   * 实例名称
   */
  Name: string
  /**
   * 商品规格，可用规格如下：
experiment_500,
basic_1k,
basic_2k,
basic_4k,
basic_6k,
pro_4k,
pro_6k,
pro_1w,
pro_2w,
pro_3w,
pro_4w,
pro_5w,
platinum_6k,
platinum_1w,
platinum_2w,
platinum_4w,
platinum_10w,
platinum_15w,
platinum_20w,
platinum_40w,
platinum_60w,
platinum_100w
   */
  SkuCode: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 标签列表
   */
  TagList?: Array<Tag>
  /**
   * 实例绑定的VPC信息
   */
  VpcList?: Array<VpcInfo>
  /**
   * 是否开启公网
   */
  EnablePublic?: boolean
  /**
   * 公网带宽（单位：兆）
   */
  Bandwidth?: number
  /**
   * 公网访问白名单
   */
  IpRules?: Array<IpRule>
  /**
   * 是否自动续费（0: 不自动续费；1: 自动续费）
   */
  RenewFlag?: number
  /**
   * 购买时长（单位：月）
   */
  TimeSpan?: number
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
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消费组信息
 */
export interface ConsumeGroupItem {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 消费组名称
   */
  ConsumerGroup?: string
  /**
   * 是否开启消费
   */
  ConsumeEnable?: boolean
  /**
   * 顺序投递：true
并发投递：false
   */
  ConsumeMessageOrderly?: boolean
  /**
   * 最大重试次数
   */
  MaxRetryTimes?: number
  /**
   * 备注
   */
  Remark?: string
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
 * ModifyConsumerGroup请求参数结构体
 */
export interface ModifyConsumerGroupRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 消费组名称
   */
  ConsumerGroup?: string
  /**
   * 是否开启消费
   */
  ConsumeEnable?: boolean
  /**
   * 顺序投递：true
并发投递：false
   */
  ConsumeMessageOrderly?: boolean
  /**
   * 最大重试次数
   */
  MaxRetryTimes?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeConsumerGroup请求参数结构体
 */
export interface DescribeConsumerGroupRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 消费组名称
   */
  ConsumerGroup?: string
}

/**
 * DescribeConsumerGroupList请求参数结构体
 */
export interface DescribeConsumerGroupListRequest {
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
  /**
   * 查询指定主题下的消费组
   */
  FromTopic?: string
}

/**
 * ModifyRole返回参数结构体
 */
export interface ModifyRoleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主题与消费组的订阅关系数据
 */
export interface SubscriptionData {
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 主题名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Topic?: string
  /**
   * 主题类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicType?: string
  /**
   * 单个节点上主题队列数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicQueueNum?: number
  /**
   * 消费组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerGroup?: string
  /**
   * 是否在线
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsOnline?: boolean
  /**
   * 消费类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumeType?: string
  /**
   * 订阅规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubString?: string
  /**
   * 过滤类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpressionType?: string
  /**
   * 订阅一致性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Consistency?: number
  /**
   * 消费堆积
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerLag?: number
  /**
   * 最后消费进度更新时间，秒为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: number
  /**
   * 最大重试次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxRetryTimes?: number
  /**
   * 是否顺序消费
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumeMessageOrderly?: boolean
}

/**
 * DescribeConsumerGroup返回参数结构体
 */
export interface DescribeConsumerGroupResponse {
  /**
   * 在线消费者数量
   */
  ConsumerNum?: number
  /**
   * TPS
   */
  Tps?: number
  /**
   * 消息堆积数量
   */
  ConsumerLag?: number
  /**
   * 消费者类型
   */
  ConsumeType?: string
  /**
   * 创建时间，秒为单位
   */
  CreatedTime?: number
  /**
   * 顺序投递：true
并发投递：false
   */
  ConsumeMessageOrderly?: boolean
  /**
   * 是否开启消费
   */
  ConsumeEnable?: boolean
  /**
   * 最大重试次数
   */
  MaxRetryTimes?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
  /**
   * 实例类型，
EXPERIMENT 体验版
BASIC 基础版
PRO  专业版
PLATINUM 铂金版
   */
  InstanceType: string
  /**
   * 实例名称
   */
  Name: string
  /**
   * 商品规格，可用规格如下：
experiment_500,
basic_1k,
basic_2k,
basic_4k,
basic_6k
   */
  SkuCode: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 标签列表
   */
  TagList?: Array<Tag>
  /**
   * 实例绑定的VPC信息
   */
  VpcList?: Array<VpcInfo>
  /**
   * 是否开启公网
   */
  EnablePublic?: boolean
  /**
   * 公网带宽
   */
  Bandwidth?: number
  /**
   * 公网访问白名单
   */
  IpRules?: Array<IpRule>
  /**
   * 消息保留时长，小时为单位
   */
  MessageRetention?: number
}

/**
 * CreateRole请求参数结构体
 */
export interface CreateRoleRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 角色名称
   */
  Role: string
  /**
   * 备注
   */
  Remark: string
  /**
   * 是否开启生产权限
   */
  PermWrite: boolean
  /**
   * 是否开启消费权限
   */
  PermRead: boolean
}

/**
 * VPC信息
 */
export interface VpcInfo {
  /**
   * VPC ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
}

/**
 * 消费组配置信息
 */
export interface SourceClusterGroupConfig {
  /**
   * 消费组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName: string
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 是否已导入，作为入参时无效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Imported?: boolean
  /**
   * 命名空间，仅4.x集群有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * 导入状态
Unknown 未知
Success 成功
Failure 失败
AlreadyExists 已存在
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImportStatus?: string
}

/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 主题
   */
  Topic: string
}

/**
 * DeleteConsumerGroup返回参数结构体
 */
export interface DeleteConsumerGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportSourceClusterTopics请求参数结构体
 */
export interface ImportSourceClusterTopicsRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 待导入的主题列表
   */
  TopicList: Array<SourceClusterTopicConfig>
}

/**
 * DescribeTopic返回参数结构体
 */
export interface DescribeTopicResponse {
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
UNSPECIFIED:未指定,
NORMAL:普通消息,
FIFO:顺序消息,
DELAY:延时消息,
TRANSACTION:事务消息
   */
  TopicType?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 创建时间，秒为单位
   */
  CreatedTime?: number
  /**
   * 最后写入时间，秒为单位
   */
  LastUpdateTime?: number
  /**
   * 订阅数量
   */
  SubscriptionCount?: number
  /**
   * 订阅关系列表
   */
  SubscriptionData?: Array<SubscriptionData>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTT ProductSkuItem
 */
export interface MQTTProductSkuItem {
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * cide
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkuCode?: string
  /**
   * sale
注意：此字段可能返回 null，表示取不到有效值。
   */
  OnSale?: boolean
  /**
   * topic num限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNumLimit?: number
  /**
   * tps
注意：此字段可能返回 null，表示取不到有效值。
   */
  TpsLimit?: number
  /**
   * 客户端连接数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientNumLimit?: number
  /**
   * 订阅数限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscriptionNumLimit?: number
  /**
   * 代理核
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxySpecCore?: number
  /**
   * 代理内存
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxySpecMemory?: number
  /**
   * 代理总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxySpecCount?: number
}

/**
 * 接入点信息
 */
export interface Endpoint {
  /**
   * 接入点类型，
VPC，
PUBLIC 公网
   */
  Type?: string
  /**
   * 状态，
OPEN 开启，
CLOSE 关闭，
PROCESSING 操作中，
   */
  Status?: string
  /**
   * 付费类型，仅公网
PREPAID 包年包月
POSTPAID 按量付费
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: string
  /**
   * 接入点地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndpointUrl?: string
  /**
   * VPC ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 公网带宽，Mbps为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bandwidth?: number
  /**
   * 公网放通规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpRules?: Array<IpRule>
}

/**
 * ImportSourceClusterConsumerGroups返回参数结构体
 */
export interface ImportSourceClusterConsumerGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRole返回参数结构体
 */
export interface DeleteRoleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRole请求参数结构体
 */
export interface ModifyRoleRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 角色名称
   */
  Role: string
  /**
   * 是否开启消费
   */
  PermRead: boolean
  /**
   * 是否开启生产
   */
  PermWrite: boolean
  /**
   * 备注
   */
  Remark?: string
}

/**
 * IP规则
 */
export interface IpRule {
  /**
   * IP地址
   */
  Ip: string
  /**
   * 是否允许放行
   */
  Allow: boolean
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
}

/**
 * 源集群主题配置
 */
export interface SourceClusterTopicConfig {
  /**
   * 主题名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName: string
  /**
   * 主题类型，
5.x版本
UNSPECIFIED 未指定
NORMAL 普通消息
FIFO 顺序消息
DELAY 延迟消息
TRANSACTION 事务消息

4.x版本
Normal 普通消息
PartitionedOrder 分区顺序消息
Transaction 事务消息
DelayScheduled 延时消息

注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicType: string
  /**
   * 队列数
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueNum: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 是否已导入，作为入参时无效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Imported?: boolean
  /**
   * 命名空间，仅4.x集群有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * 导入状态，
Unknown 未知，
AlreadyExists 已存在，
Success 成功，
Failure 失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImportStatus?: string
}

/**
 * DescribeTopicStatsOp请求参数结构体
 */
export interface DescribeTopicStatsOpRequest {
  /**
   * 主题
   */
  Topic: string
}

/**
 * 角色信息
 */
export interface RoleItem {
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * Access Key
   */
  AccessKey?: string
  /**
   * Secret Key
   */
  SecretKey?: string
  /**
   * 是否开启消费
   */
  PermRead?: boolean
  /**
   * 是否开启生产
   */
  PermWrite?: boolean
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 创建时间，秒为单位
   */
  CreatedTime?: number
  /**
   * 修改时间，秒为单位
   */
  ModifiedTime?: number
}

/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 主题
   */
  Topic: string
  /**
   * 主题类型
UNSPECIFIED:未指定,
NORMAL:普通消息,
FIFO:顺序消息,
DELAY:延时消息,
TRANSACTION:事务消息
   */
  TopicType: string
  /**
   * 队列数量
   */
  QueueNum: number
  /**
   * 备注
   */
  Remark?: string
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
 * DescribeConsumerGroupList返回参数结构体
 */
export interface DescribeConsumerGroupListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 消费组列表
   */
  Data?: Array<ConsumeGroupItem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRole请求参数结构体
 */
export interface DeleteRoleRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 角色名称
   */
  Role: string
}

/**
 * DescribeMQTTProductSKUList返回参数结构体
 */
export interface DescribeMQTTProductSKUListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * mqtt商品配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MQTTProductSkuList?: Array<MQTTProductSkuItem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoleList请求参数结构体
 */
export interface DescribeRoleListRequest {
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
 * ModifyTopic返回参数结构体
 */
export interface ModifyTopicResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyConsumerGroup返回参数结构体
 */
export interface ModifyConsumerGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTopic请求参数结构体
 */
export interface ModifyTopicRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 主题
   */
  Topic: string
  /**
   * 队列数量
   */
  QueueNum?: number
  /**
   * 备注信息
   */
  Remark?: string
}

/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
  /**
   * 实例类型，
EXPERIMENT 体验版
BASIC 基础版
PRO  专业版
PLATINUM 铂金版
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 主题数量
   */
  TopicNum?: number
  /**
   * 实例最大主题数量
   */
  TopicNumLimit?: number
  /**
   * 消费组数量
   */
  GroupNum?: number
  /**
   * 实例最大消费组数量
   */
  GroupNumLimit?: number
  /**
   * 消息保留时间，小时为单位
   */
  MessageRetention?: number
  /**
   * 最大可调整消息保留时间，小时为单位
   */
  RetentionUpperLimit?: number
  /**
   * 最小可调整消息保留时间，小时为单位
   */
  RetentionLowerLimit?: number
  /**
   * TPS限流值
   */
  TpsLimit?: number
  /**
   * 弹性TPS限流值
   */
  ScaledTpsLimit?: number
  /**
   * 延迟消息最长时间，小时为单位
   */
  MaxMessageDelay?: number
  /**
   * 创建时间，秒为单位
   */
  CreatedTime?: number
  /**
   * 消息发送接收比例
   */
  SendReceiveRatio?: number
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<Tag>
  /**
   * 接入点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndpointList?: Array<Endpoint>
  /**
   * 主题队列数上限
   */
  TopicQueueNumUpperLimit?: number
  /**
   * 主题队列数下限
   */
  TopicQueueNumLowerLimit?: number
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 实例状态
   */
  InstanceStatus?: string
  /**
   * 实例规格
   */
  SkuCode?: string
  /**
   * 计费模式
   */
  PayMode?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicStatsOp返回参数结构体
 */
export interface DescribeTopicStatsOpResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteConsumerGroup请求参数结构体
 */
export interface DeleteConsumerGroupRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 消费组名称
   */
  ConsumerGroup: string
}

/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateConsumerGroup返回参数结构体
 */
export interface CreateConsumerGroupResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 消费组
   */
  ConsumerGroup?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTProductSKUList请求参数结构体
 */
export type DescribeMQTTProductSKUListRequest = null

/**
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
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
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
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
 * DescribeMQTTInstanceList请求参数结构体
 */
export interface DescribeMQTTInstanceListRequest {
  /**
   * 查询条件列表
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置
   */
  Offset?: number
  /**
   * 查询结果限制数量
   */
  Limit?: number
}

/**
 * DescribeMQTTInstanceList返回参数结构体
 */
export interface DescribeMQTTInstanceListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 实例列表
   */
  Data?: Array<MQTTInstanceItem>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTT 实例信息
 */
export interface MQTTInstanceItem {
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
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 主题数量
   */
  TopicNum?: number
  /**
   * 商品规格
   */
  SkuCode?: string
  /**
   * 弹性TPS限流值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TpsLimit?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 订阅关系上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscriptionNumLimit?: number
  /**
   * 客户端连接数上线
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientNumLimit?: number
}

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
 * DescribeTopic请求参数结构体
 */
export interface DescribeTopicRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 主题
   */
  Topic: string
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

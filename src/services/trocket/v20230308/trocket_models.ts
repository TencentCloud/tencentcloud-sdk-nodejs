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

/**
 * Topic&Group维度的权限配置
 */
export interface DetailedRolePerm {
  /**
   * 权限对应的资源
可以是主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
可以是消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  Resource: string
  /**
   * 是否开启生产权限
   */
  PermWrite: boolean
  /**
   * 是否开启消费权限
   */
  PermRead: boolean
  /**
   * 授权资源类型（Topic:主题; Group:消费组）
   */
  ResourceType: string
  /**
   * 资源备注
   */
  Remark?: string
}

/**
 * DescribeProductSKUs请求参数结构体
 */
export type DescribeProductSKUsRequest = null

/**
 * ResetConsumerGroupOffset返回参数结构体
 */
export interface ResetConsumerGroupOffsetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmoothMigrationTaskList请求参数结构体
 */
export interface DescribeSmoothMigrationTaskListRequest {
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
}

/**
 * 商品售卖信息
 */
export interface ProductSKU {
  /**
   * 产品类型，
EXPERIMENT，体验版
BASIC，基础版
PRO，专业版
PLATINUM，铂金版
   */
  InstanceType?: string
  /**
   * 规格代码
   */
  SkuCode?: string
  /**
   * TPS上限
   */
  TpsLimit?: number
  /**
   * 弹性TPS上限
   */
  ScaledTpsLimit?: number
  /**
   * 主题数量上限默认值
   */
  TopicNumLimit?: number
  /**
   * 消费组数量上限
   */
  GroupNumLimit?: number
  /**
   * 默认消息保留时间，小时为单位
   */
  DefaultRetention?: number
  /**
   * 可调整消息保留时间上限，小时为单位
   */
  RetentionUpperLimit?: number
  /**
   * 可调整消息保留时间下限，小时为单位
   */
  RetentionLowerLimit?: number
  /**
   * 延时消息最大时长，小时为单位
   */
  MaxMessageDelay?: number
  /**
   * 是否可购买
   */
  OnSale?: boolean
  /**
   * 计费项信息
   */
  PriceTags?: Array<PriceTag>
  /**
   * 主题数量上限默认最大值
   */
  TopicNumUpperLimit?: number
}

/**
 * DescribeRoleList返回参数结构体
 */
export interface DescribeRoleListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 角色信息列表
   */
  Data?: Array<RoleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMQTTTopic请求参数结构体
 */
export interface DeleteMQTTTopicRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 主题名称
   */
  Topic: string
}

/**
 * 平滑迁移任务
 */
export interface SmoothMigrationTaskItem {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 源集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceClusterName?: string
  /**
   * 目标集群实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 网络连接类型， 
PUBLIC 公网 
VPC 私有网络 
OTHER 其他
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectionType?: string
  /**
   * 源集群NameServer地址	
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceNameServer?: string
  /**
   * 任务状态:
Configuration 迁移配置,
SourceConnecting 连接源集群中,
 MetaDataImport 元数据导入,
EndpointSetup 切换接入点,
ServiceMigration 切流中,
Completed 已完成,
Cancelled 已取消
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskStatus?: string
  /**
   * 目标集群实例版本，
4 表示4.x版本
5 表示5.x版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceVersion?: string
}

/**
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 源集群主题配置
 */
export interface SourceClusterTopicConfig {
  /**
   * 主题名称，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。
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

   */
  TopicType: string
  /**
   * 队列数
   */
  QueueNum: number
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 是否已导入，作为入参时无效
   */
  Imported?: boolean
  /**
   * 命名空间，仅4.x集群有效
   */
  Namespace?: string
  /**
   * 导入状态，
Unknown 未知，
AlreadyExists 已存在，
Success 成功，
Failure 失败

仅作为出参可用
   */
  ImportStatus?: string
  /**
   * 4.x的命名空间，出参使用
   */
  NamespaceV4?: string
  /**
   * 4.x的主题名，出参使用
   */
  TopicNameV4?: string
  /**
   * 4.x的完整命名空间，出参使用
   */
  FullNamespaceV4?: string
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
  /**
   * 4.x的集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIdV4?: string
  /**
   * 4.x的命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceV4?: string
  /**
   * 4.x的消费组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerGroupV4?: string
  /**
   * 4.x的完整命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FullNamespaceV4?: string
  /**
   * 订阅的主题个数
   */
  SubscribeTopicNum?: number
  /**
   * 1753153590
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
}

/**
 * ModifyRole返回参数结构体
 */
export interface ModifyRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMessageList请求参数结构体
 */
export interface DescribeMessageListRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
   */
  Topic: string
  /**
   * 要查询消息的开始时间，**Unix时间戳（毫秒）**
   */
  StartTime: number
  /**
   * 要查询消息的结束时间，**Unix时间戳（毫秒）**
   */
  EndTime: number
  /**
   * 一次查询标识。第一次查询可传空字符串，当查询结果涉及分页，请求下一页数据时该入参的值取上一次请求响应中的出参TaskRequestId 值即可。
   */
  TaskRequestId: string
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
  /**
   * 消息 ID，从 [DescribeMessageList](https://cloud.tencent.com/document/api/1493/114593) 接口返回的 [MessageItem](https://cloud.tencent.com/document/api/1493/96031#MessageItem) 或业务日志中获得。
   */
  MsgId?: string
  /**
   * 消息 Key，从 [DescribeMessageList](https://cloud.tencent.com/document/api/1493/114593) 接口返回的 [MessageItem](https://cloud.tencent.com/document/api/1493/96031#MessageItem) 或业务日志中获得。
   */
  MsgKey?: string
  /**
   * 查询最近N条消息 最大不超过1024，默认-1为其他查询条件
   */
  RecentMessageNum?: number
  /**
   * 是否查询死信消息，默认为false
   */
  QueryDeadLetterMessage?: boolean
  /**
   * 消息 Tag，从 [DescribeMessageList](https://cloud.tencent.com/document/api/1493/114593) 接口返回的 [MessageItem](https://cloud.tencent.com/document/api/1493/96031#MessageItem) 或业务日志中获得。
   */
  Tag?: string
}

/**
 * DeleteMQTTInsPublicEndpoint请求参数结构体
 */
export interface DeleteMQTTInsPublicEndpointRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 实例名称，不能为空, 3-64个字符，只能包含数字、字母、“-”和“_”
   */
  Name?: string
  /**
   * 备注信息，最多 128 个字符
   */
  Remark?: string
  /**
   * 消息发送和接收的比例
   */
  SendReceiveRatio?: number
  /**
   * 商品规格，从 [DescribeProductSKUs](https://cloud.tencent.com/document/api/1493/107676) 接口中的 [ProductSKU](https://cloud.tencent.com/document/api/1493/96031#ProductSKU) 出参获得。
   */
  SkuCode?: string
  /**
   * 消息保留时长（单位：小时），取值范围参考 [DescribeProductSKUs](https://cloud.tencent.com/document/api/1493/107676) 接口中的 [ProductSKU](https://cloud.tencent.com/document/api/1493/96031#ProductSKU) 出参：

- 默认值：DefaultRetention 参数
- 最小值：RetentionLowerLimit 参数
- 最大值：RetentionUpperLimit 参数
   */
  MessageRetention?: number
  /**
   * 是否开启弹性TPS
   */
  ScaledTpsEnabled?: boolean
  /**
   * 是否开启ACL
   */
  AclEnabled?: boolean
  /**
   * 最大可创建主题数，取值范围参考 [DescribeProductSKUs](https://cloud.tencent.com/document/api/1493/107676) 接口中的 [ProductSKU](https://cloud.tencent.com/document/api/1493/96031#ProductSKU) 出参：

- 最小值和默认值：TopicNumLimit 参数
- 最大值：TopicNumUpperLimit 参数
   */
  MaxTopicNum?: number
  /**
   * 免费额度之外的主题个数，免费额度参考 [DescribeProductSKUs](https://cloud.tencent.com/document/api/1493/107676) 接口中的 [ProductSKU](https://cloud.tencent.com/document/api/1493/96031#ProductSKU) 出参中的 TopicNumLimit 参数。
   */
  ExtraTopicNum?: string
  /**
   * 是否开启删除保护
   */
  EnableDeletionProtection?: boolean
}

/**
 * 迁移任务信息
 */
export interface MigrationTaskItem {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 0 - 未指定（存量）
1 - 元数据导入
   */
  Type?: number
  /**
   * 主题总数
   */
  TopicNum?: number
  /**
   * 消费组总数
   */
  GroupNum?: number
  /**
   * 任务状态： 0，迁移中 1，迁移成功 2，迁移完成，只有部分数据完成迁移
   */
  Status?: number
  /**
   * 创建时间
   */
  CreateTime?: number
}

/**
 * 实例列表页中的实例信息
 */
export interface FusionInstanceItem {
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
   * 计费模式，枚举值如下：

- POSTPAID：按量计费

- PREPAID：包年包月
   */
  PayMode?: string
  /**
   * 到期时间，**Unix时间戳（毫秒）**
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
   */
  ScaledTpsLimit?: number
  /**
   * 消息保留时间，小时为单位
   */
  MessageRetention?: number
  /**
   * 延迟消息最大时长，小时为单位
   */
  MaxMessageDelay?: number
  /**
   * 预付费集群是否自动续费，枚举值如下：

- 0: 不自动续费
- 1: 自动续费
   */
  RenewFlag?: number
  /**
   * 4.x独有数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceItemExtraInfo?: InstanceItemExtraInfo
  /**
   * 预销毁时间，**Unix时间戳（毫秒）**
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestroyTime?: number
  /**
   * 所属可用区列表，参考 [DescribeZones](https://cloud.tencent.com/document/product/1596/77929) 接口返回中的 [ZoneInfo](https://cloud.tencent.com/document/api/1596/77932#ZoneInfo) 数据结构。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneIds?: Array<number | bigint>
  /**
   * 是否开启删除保护
   */
  EnableDeletionProtection?: boolean
}

/**
 * 4.x集群和5.0集群列表统一显示 4.x特殊数据承载接口
 */
export interface InstanceItemExtraInfo {
  /**
   * 是否vip
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVip?: boolean
  /**
   * 4.x专享集群状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  VipInstanceStatus?: number
  /**
   * 专享集群峰值带宽
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxBandWidth?: number
  /**
   * 专享集群规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecName?: string
  /**
   * 专享集群节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeCount?: number
  /**
   * 专享集群最大存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxStorage?: number
  /**
   * 专享集群最大保留时间，单位：小时
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxRetention?: number
  /**
   * 专项集群最大保留时间，单位：小时
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinRetention?: number
  /**
   * 4.0共享集群状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStatus?: number
  /**
   * 是否已冻结
   */
  IsFrozen?: boolean
}

/**
 * CreateMQTTInsPublicEndpoint返回参数结构体
 */
export interface CreateMQTTInsPublicEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportSourceClusterConsumerGroups返回参数结构体
 */
export interface ImportSourceClusterConsumerGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 迁移主题修改状态后的结果
 */
export interface TopicStageChangeResult {
  /**
   * 主题名称
   */
  TopicName?: string
  /**
   * 是否成功
   */
  Success?: boolean
  /**
   * 命名空间，仅4.x有效
   */
  Namespace?: string
}

/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
   */
  Topic: string
}

/**
 * 迁移中的主题
 */
export interface MigratingTopic {
  /**
   * 主题名称
   */
  TopicName?: string
  /**
   * 迁移状态 
S_RW_D_NA 源集群读写，
S_RW_D_R 源集群读写目标集群读，
S_RW_D_RW 源集群读写目标集群读写，
S_R_D_RW 源集群读目标集群读写，
S_NA_D_RW 目标集群读写
   */
  MigrationStatus?: string
  /**
   * 是否完成健康检查
   */
  HealthCheckPassed?: boolean
  /**
   * 上次健康检查返回的错误信息，仅在HealthCheckPassed为false时有效。 NotChecked 未执行检查， Unknown 未知错误, TopicNotImported 主题未导入, TopicNotExistsInSourceCluster 主题在源集群中不存在, TopicNotExistsInTargetCluster 主题在目标集群中不存在, ConsumerConnectedOnTarget 目标集群上存在消费者连接, SourceTopicHasNewMessagesIn5Minutes 源集群主题前5分钟内有新消息写入, TargetTopicHasNewMessagesIn5Minutes 目标集群主题前5分钟内有新消息写入, SourceTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入, TargetTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入, ConsumerGroupCountNotMatch 订阅组数量不一致, SourceTopicHasUnconsumedMessages 源集群主题存在未消费消息,
   */
  HealthCheckError?: string
  /**
   * 命名空间，仅4.x集群有效
   */
  Namespace?: string
  /**
   * 4.x的命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceV4?: string
  /**
   * 4.x的主题名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNameV4?: string
  /**
   * 4.x的完整命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FullNamespaceV4?: string
  /**
   * 上次健康检查返回的错误列表
   */
  HealthCheckErrorList?: Array<string>
}

/**
 * DescribeSmoothMigrationTaskList返回参数结构体
 */
export interface DescribeSmoothMigrationTaskListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 任务列表	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<SmoothMigrationTaskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMigrationTaskList返回参数结构体
 */
export interface DescribeMigrationTaskListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 迁移任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<MigrationTaskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 公网访问安全规则
 */
export interface PublicAccessRule {
  /**
   * ip网段信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  IpRule: string
  /**
   * 允许或者拒绝
注意：此字段可能返回 null，表示取不到有效值。
   */
  Allow: boolean
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoleList请求参数结构体
 */
export interface DescribeRoleListRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
}

/**
 * DescribeMQTTClient返回参数结构体
 */
export interface DescribeMQTTClientResponse {
  /**
   * 客户端唯一标识
   */
  ClientId?: string
  /**
   * 客户端网络地址
   */
  ClientAddress?: string
  /**
   * MQTT 协议版本，4 表示 MQTT 3.1.1
   */
  ProtocolVersion?: number
  /**
   * 保持连接时间，单位：秒
   */
  Keepalive?: number
  /**
   * 连接状态，CONNECTED 已连接，DISCONNECTED 未连接
   */
  ConnectionStatus?: string
  /**
   * 客户端创建时间
   */
  CreateTime?: number
  /**
   * 上次建立连接时间
   */
  ConnectTime?: number
  /**
   * 上次断开连接时间，仅对持久会话（cleanSession=false）并且客户端当前未连接时有意义
   */
  DisconnectTime?: number
  /**
   * 客户端的订阅列表
   */
  MQTTClientSubscriptions?: Array<MQTTClientSubscription>
  /**
   * 服务端到客户端的流量统计
   */
  Inbound?: StatisticsReport
  /**
   * 客户端到服务端的流量统计
   */
  OutBound?: StatisticsReport
  /**
   * cleansession标志
   */
  CleanSession?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTMessageList返回参数结构体
 */
export interface DescribeMQTTMessageListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 消息记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<MQTTMessageItem>
  /**
   * 请求任务id
   */
  TaskRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMigratingTopicStats返回参数结构体
 */
export interface DescribeMigratingTopicStatsResponse {
  /**
   * 源集群的消费者数量
   */
  SourceClusterConsumerCount?: number
  /**
   * 目标集群的消费者数量
   */
  TargetClusterConsumerCount?: number
  /**
   * 源集群消费组列表
   */
  SourceClusterConsumerGroups?: Array<string>
  /**
   * 目标集群消费组列表
   */
  TargetClusterConsumerGroups?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTProductSKUList请求参数结构体
 */
export type DescribeMQTTProductSKUListRequest = null

/**
 * DescribeConsumerLag请求参数结构体
 */
export interface DescribeConsumerLagRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
  /**
   * 命名空间，4.x集群必填，从 [DescribeRocketMQNamespaces](https://cloud.tencent.com/document/api/1179/63419) 接口返回的 [RocketMQNamespace](https://cloud.tencent.com/document/api/1179/46089#RocketMQNamespace) 或控制台获得。
   */
  Namespace?: string
  /**
   * 订阅主题，不为空则查询订阅了该主题的消费组的堆积，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
   */
  SubscribeTopic?: string
}

/**
 * DescribeMigratingGroupStats请求参数结构体
 */
export interface DescribeMigratingGroupStatsRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。
   */
  TaskId: string
  /**
   * 消费组名称，可在[DescribeSourceClusterGroupList](https://cloud.tencent.com/document/api/1493/118006)接口返回的[SourceClusterGroupConfig](https://cloud.tencent.com/document/api/1493/96031#SourceClusterGroupConfig)或控制台中获取。

   */
  GroupName: string
  /**
   * 命名空间，仅迁移至4.x集群有效，可在[DescribeSourceClusterGroupList](https://cloud.tencent.com/document/api/1493/118006)接口返回的[SourceClusterGroupConfig](https://cloud.tencent.com/document/api/1493/96031#SourceClusterGroupConfig)或控制台中获取。
   */
  Namespace?: string
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
 * DescribeSourceClusterGroupList返回参数结构体
 */
export interface DescribeSourceClusterGroupListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 消费组配置列表
   */
  Groups?: Array<SourceClusterGroupConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMessageList返回参数结构体
 */
export interface DescribeMessageListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 消息记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<MessageItem>
  /**
   * 一次查询ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTMessage返回参数结构体
 */
export interface DescribeMQTTMessageResponse {
  /**
   * 消息体
   */
  Body?: string
  /**
   * 详情参数
   */
  Properties?: Array<CustomMapEntry>
  /**
   * 生产时间
   */
  ProduceTime?: string
  /**
   * 消息ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageId?: string
  /**
   * 生产者地址
   */
  ProducerAddr?: string
  /**
   * Topic
   */
  ShowTopicName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSmoothMigrationTask请求参数结构体
 */
export interface DeleteSmoothMigrationTaskRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。

   */
  TaskId: string
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
BASIC，基础版
PRO，专业版
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
   */
  TotalCount?: number
  /**
   * 实例列表
   */
  Data?: Array<InstanceItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConsumerClientList返回参数结构体
 */
export interface DescribeConsumerClientListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 消费客户端
   */
  Data?: Array<ConsumerClient>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConsumerGroup请求参数结构体
 */
export interface CreateConsumerGroupRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 最大重试次数，取值范围0～1000
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
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
  /**
   * 备注信息，最多 128 个字符
   */
  Remark?: string
  /**
   * 标签列表
   */
  TagList?: Array<Tag>
}

/**
 * 客户端订阅详情，可用于辅助判断哪些客户端订阅关系不一致
 */
export interface ClientSubscriptionInfo {
  /**
   * 客户端ID
   */
  ClientId?: string
  /**
   * 客户端地址
   */
  ClientAddr?: string
  /**
   * 订阅主题
   */
  Topic?: string
  /**
   * 订阅表达式
   */
  SubString?: string
  /**
   * 订阅方式
   */
  ExpressionType?: string
}

/**
 * ChangeMigratingTopicToNextStage返回参数结构体
 */
export interface ChangeMigratingTopicToNextStageResponse {
  /**
   * 迁移主题状态修改的结果列表
   */
  Results?: Array<TopicStageChangeResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTClient请求参数结构体
 */
export interface DescribeMQTTClientRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 客户端详情
   */
  ClientId: string
}

/**
 * DescribeSourceClusterGroupList请求参数结构体
 */
export interface DescribeSourceClusterGroupListRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台上获得。

   */
  TaskId: string
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
}

/**
 * DescribeMQTTInsVPCEndpoints返回参数结构体
 */
export interface DescribeMQTTInsVPCEndpointsResponse {
  /**
   * 接入点
   */
  Endpoints?: Array<MQTTEndpointItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTInsPublicEndpoints返回参数结构体
 */
export interface DescribeMQTTInsPublicEndpointsResponse {
  /**
   * 接入点
   */
  Endpoints?: Array<MQTTEndpointItem>
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 带宽
   */
  Bandwidth?: number
  /**
   * 公网访问规则
   */
  Rules?: Array<PublicAccessRule>
  /**
   * 公网状态：
    NORMAL-正常
    CLOSING-关闭中
    MODIFYING-修改中
    CREATING-开启中
    CLOSE-关闭
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤器
   */
  TagFilters?: Array<TagFilter>
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
}

/**
 * ResendDeadLetterMessage返回参数结构体
 */
export interface ResendDeadLetterMessageResponse {
  /**
   * 重发消息结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResendResult?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消息记录
 */
export interface MQTTMessageItem {
  /**
   * 消息ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgId?: string
  /**
   * 消息tag
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: string
  /**
   * 消息key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys?: string
  /**
   * 客户端地址	
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProducerAddr?: string
  /**
   * 消息发送时间	
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProduceTime?: string
  /**
   * 死信重发次数	
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterResendTimes?: number
  /**
   * 死信重发成功次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterResendSuccessTimes?: number
  /**
   * 子topic
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubTopic?: string
  /**
   * 消息质量等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qos?: string
}

/**
 * DescribeMigrationTaskList请求参数结构体
 */
export interface DescribeMigrationTaskListRequest {
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
 * DeleteMQTTUser请求参数结构体
 */
export interface DeleteMQTTUserRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 用户名
   */
  Username: string
}

/**
 * ModifyMQTTInstanceCertBinding请求参数结构体
 */
export interface ModifyMQTTInstanceCertBindingRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 服务端证书id
   */
  SSLServerCertId: string
  /**
   * CA证书id
   */
  SSLCaCertId: string
}

/**
 * CreateMQTTTopic返回参数结构体
 */
export interface CreateMQTTTopicResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 主题
   */
  Topic?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTInstance请求参数结构体
 */
export interface DescribeMQTTInstanceRequest {
  /**
   * 集群ID
   */
  InstanceId: string
}

/**
 * ImportSourceClusterTopics请求参数结构体
 */
export interface ImportSourceClusterTopicsRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。

   */
  TaskId: string
  /**
   * 待导入的主题列表
   */
  TopicList: Array<SourceClusterTopicConfig>
}

/**
 * CreateMQTTUser返回参数结构体
 */
export interface CreateMQTTUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消费组配置信息
 */
export interface SourceClusterGroupConfig {
  /**
   * 消费组名称，可在[DescribeSourceClusterGroupList](https://cloud.tencent.com/document/api/1493/118006)接口返回的[SourceClusterGroupConfig](https://cloud.tencent.com/document/api/1493/96031#SourceClusterGroupConfig)数据中获取。
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

仅作为出参时使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImportStatus?: string
  /**
   * 4.x的命名空间，出参使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceV4?: string
  /**
   * 4.x的消费组名，出参使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupNameV4?: string
  /**
   * 4.x的完整命名空间，出参使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  FullNamespaceV4?: string
  /**
   * 是否为顺序投递，5.0有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumeMessageOrderly?: boolean
}

/**
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 创建时间，**Unix时间戳（毫秒）**
   */
  CreatedTime?: number
  /**
   * 最后写入时间，**Unix时间戳（毫秒）**
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
   * 消息保留时长，单位：小时
   */
  MsgTTL?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMQTTInsPublicEndpoint返回参数结构体
 */
export interface DeleteMQTTInsPublicEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
}

/**
 * ModifyRole请求参数结构体
 */
export interface ModifyRoleRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 角色名称，从 [DescribeRoleList](https://cloud.tencent.com/document/api/1493/98862) 接口中返回的 [RoleItem](https://cloud.tencent.com/document/api/1493/96031#RoleItem) 或控制台获得。
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
   * 权限类型，默认按集群授权（Cluster：集群维度；TopicAndGroup：主题和消费组维度）
   */
  PermType?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * Topic&Group维度权限配置，权限类型为 TopicAndGroup 时必填
   */
  DetailedPerms?: Array<DetailedRolePerm>
}

/**
 * DescribeMQTTInsVPCEndpoints请求参数结构体
 */
export interface DescribeMQTTInsVPCEndpointsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * DescribeFusionInstanceList返回参数结构体
 */
export interface DescribeFusionInstanceListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 实例列表
   */
  Data?: Array<FusionInstanceItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
   */
  Topic: string
  /**
   * 主题类型，枚举值如下：

- NORMAL: 普通消息
- FIFO: 顺序消息
- DELAY: 延时消息
- TRANSACTION: 事务消息
   */
  TopicType: string
  /**
   * 队列数量，取值范围3～16
   */
  QueueNum: number
  /**
   * 备注信息，最多 128 个字符
   */
  Remark?: string
  /**
   * 消息保留时长（单位：小时）
   */
  MsgTTL?: number
  /**
   * 标签列表
   */
  TagList?: Array<Tag>
}

/**
 * DescribeMessage请求参数结构体
 */
export interface DescribeMessageRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
   */
  Topic: string
  /**
   * 消息 ID，从 [DescribeMessageList](https://cloud.tencent.com/document/api/1493/114593) 接口或业务日志中获得。
   */
  MsgId: string
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 是否是死信消息，默认为false
   */
  QueryDeadLetterMessage?: boolean
  /**
   * 是否是延时消息，默认为false
   */
  QueryDelayMessage?: boolean
}

/**
 * DeleteRole请求参数结构体
 */
export interface DeleteRoleRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 角色名称，从 [DescribeRoleList](https://cloud.tencent.com/document/api/1493/98862) 接口响应中的 [RoleItem](https://cloud.tencent.com/document/api/1493/96031#RoleItem) 或控制台获得。
   */
  Role: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMigratingTopicStats请求参数结构体
 */
export interface DescribeMigratingTopicStatsRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。

   */
  TaskId: string
  /**
   * 主题名称，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。

   */
  TopicName: string
  /**
   * 命名空间，仅迁移至4.x集群有效，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。
   */
  Namespace?: string
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
 * DeleteConsumerGroup请求参数结构体
 */
export interface DeleteConsumerGroupRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
}

/**
 * CreateConsumerGroup返回参数结构体
 */
export interface CreateConsumerGroupResponse {
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 消费组名称
   */
  ConsumerGroup?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RollbackMigratingTopicStage请求参数结构体
 */
export interface RollbackMigratingTopicStageRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。

   */
  TaskId: string
  /**
   * 主题名称，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。

   */
  TopicName: string
  /**
   * 命名空间，仅迁移至4.x集群有效，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。
   */
  Namespace?: string
}

/**
 * DescribeMQTTUserList返回参数结构体
 */
export interface DescribeMQTTUserListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 角色信息列表
   */
  Data?: Array<MQTTUserItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMQTTUser返回参数结构体
 */
export interface ModifyMQTTUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 价格标签信息，一个完整的价格标签包含计价类别和计费项标签。
 */
export interface PriceTag {
  /**
   * 计价名称（枚举值：tps：TPS基础价；stepTps：TPS步长）
   */
  Name?: string
  /**
   * 计费项对应的步长数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Step?: number
}

/**
 * DescribeTopicListByGroup返回参数结构体
 */
export interface DescribeTopicListByGroupResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 主题列表
   */
  Data?: Array<SubscriptionData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMessageTrace返回参数结构体
 */
export interface DescribeMessageTraceResponse {
  /**
   * 主题名称
   */
  ShowTopicName?: string
  /**
   * 轨迹详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<MessageTraceItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DoHealthCheckOnMigratingTopic请求参数结构体
 */
export interface DoHealthCheckOnMigratingTopicRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。

   */
  TaskId: string
  /**
   * 主题名称，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。

   */
  TopicName: string
  /**
   * 必填，是否忽略当前检查
   */
  IgnoreCheck?: boolean
  /**
   * 命名空间，仅迁移至4.x集群有效，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。
   */
  Namespace?: string
}

/**
 * DescribeMigratingTopicList返回参数结构体
 */
export interface DescribeMigratingTopicListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 主题列表
   */
  MigrateTopics?: Array<MigratingTopic>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMQTTInsPublicEndpoint请求参数结构体
 */
export interface ModifyMQTTInsPublicEndpointRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 带宽
   */
  Bandwidth: number
  /**
   * 公网访问规则
   */
  Rules: Array<PublicAccessRule>
}

/**
 * ModifyMQTTInstanceCertBinding返回参数结构体
 */
export interface ModifyMQTTInstanceCertBindingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 计费模式，枚举值如下：

- POSTPAID：按量计费

- PREPAID：包年包月
   */
  PayMode?: string
  /**
   * 到期时间戳，**Unix时间戳（毫秒）**
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
   */
  TpsLimit?: number
  /**
   * 弹性TPS限流值
   */
  ScaledTpsLimit?: number
  /**
   * 消息保留时间，小时为单位
   */
  MessageRetention?: number
  /**
   * 延迟消息最大时长，小时为单位
   */
  MaxMessageDelay?: number
  /**
   * 是否自动续费，仅针对预付费集群（0: 不自动续费；1:自动续费）
   */
  RenewFlag?: number
}

/**
 * DeleteMQTTInstance返回参数结构体
 */
export interface DeleteMQTTInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopic请求参数结构体
 */
export interface DescribeTopicRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
   */
  Topic: string
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
}

/**
 * DeleteMQTTInstance请求参数结构体
 */
export interface DeleteMQTTInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * DescribeMessageTrace请求参数结构体
 */
export interface DescribeMessageTraceRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
   */
  Topic: string
  /**
   * 消息 ID，从 [DescribeMessageList](https://cloud.tencent.com/document/api/1493/114593) 接口返回的 [MessageItem](https://cloud.tencent.com/document/api/1493/96031#MessageItem) 或业务日志中获得。
   */
  MsgId: string
  /**
   * 是否是死信消息，默认为false
   */
  QueryDeadLetterMessage?: boolean
  /**
   * 是否是延时消息，默认为false
   */
  QueryDelayMessage?: boolean
}

/**
 * DeleteSmoothMigrationTask返回参数结构体
 */
export interface DeleteSmoothMigrationTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
  /**
   * 集群ID
   */
  InstanceId?: string
  /**
   * 主题名
   */
  Topic?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMigratingGroupStats返回参数结构体
 */
export interface DescribeMigratingGroupStatsResponse {
  /**
   * 源集群消费组堆积
   */
  SourceConsumeLag?: number
  /**
   * 目标集群消费组堆积
   */
  TargetConsumeLag?: number
  /**
   * 源集群连接客户端列表
   */
  SourceConsumerClients?: Array<ConsumerClient>
  /**
   * 目标集群连接客户端列表
   */
  TargetConsumerClients?: Array<ConsumerClient>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  /**
   * 是否包含新控制台集群：默认为包含
   */
  IncludeNew?: boolean
}

/**
 * ModifyConsumerGroup返回参数结构体
 */
export interface ModifyConsumerGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTInstance返回参数结构体
 */
export interface DescribeMQTTInstanceResponse {
  /**
   * 实例类型，
EXPERIMENT 体验版
BASIC 基础版
PRO  专业版
PLATINUM 铂金版
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
   * TPS限流值
   */
  TpsLimit?: number
  /**
   * 创建时间，秒为单位
   */
  CreatedTime?: number
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
   * 订阅数上限
   */
  SubscriptionNumLimit?: number
  /**
   * 客户端数量上限
   */
  ClientNumLimit?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportSourceClusterConsumerGroups请求参数结构体
 */
export interface ImportSourceClusterConsumerGroupsRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。

   */
  TaskId: string
  /**
   * 待导入的消费组列表
   */
  GroupList: Array<SourceClusterGroupConfig>
}

/**
 * MQTTEndpoint
 */
export interface MQTTEndpointItem {
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 接入点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 主机
注意：此字段可能返回 null，表示取不到有效值。
   */
  Host?: string
  /**
   * 端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 接入点ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
}

/**
 * RemoveMigratingTopic请求参数结构体
 */
export interface RemoveMigratingTopicRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。
   */
  TaskId: string
  /**
   * 主题名称，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。

   */
  TopicName: string
  /**
   * 命名空间，仅迁移至4.x集群有效，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。
   */
  Namespace?: string
}

/**
 * DescribeMessage返回参数结构体
 */
export interface DescribeMessageResponse {
  /**
   * 消息体
   */
  Body?: string
  /**
   * 详情参数
   */
  Properties?: string
  /**
   * 生产时间
   */
  ProduceTime?: string
  /**
   * 消息ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageId?: string
  /**
   * 生产者地址
   */
  ProducerAddr?: string
  /**
   * 消息消费情况列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageTracks?: Array<MessageTrackItem>
  /**
   * 主题名称
   */
  ShowTopicName?: string
  /**
   * 消息消费情况列表总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageTracksCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DoHealthCheckOnMigratingTopic返回参数结构体
 */
export interface DoHealthCheckOnMigratingTopicResponse {
  /**
   * 是否通过
   */
  Passed?: boolean
  /**
   * 健康检查返回的错误信息
NotChecked 未执行检查， 
Unknown 未知错误, 
TopicNotImported 主题未导入,
TopicNotExistsInSourceCluster 主题在源集群中不存在, 
TopicNotExistsInTargetCluster 主题在目标集群中不存在, 
ConsumerConnectedOnTarget 目标集群上存在消费者连接, 
SourceTopicHasNewMessagesIn5Minutes 源集群主题前5分钟内有新消息写入, 
TargetTopicHasNewMessagesIn5Minutes 目标集群主题前5分钟内有新消息写入, 
SourceTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入, 
TargetTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入, 
ConsumerGroupCountNotMatch 订阅组数量不一致, 
SourceTopicHasUnconsumedMessages 源集群主题存在未消费消息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 健康检查返回的错误信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReasonList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMQTTUser返回参数结构体
 */
export interface DeleteMQTTUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportSourceClusterTopics返回参数结构体
 */
export interface ImportSourceClusterTopicsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicList请求参数结构体
 */
export interface DescribeTopicListRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
}

/**
 * ModifyConsumerGroup请求参数结构体
 */
export interface ModifyConsumerGroupRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
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
   * 最大重试次数，取值范围0～1000
   */
  MaxRetryTimes?: number
  /**
   * 备注信息，最多 128 个字符
   */
  Remark?: string
}

/**
 * DescribeConsumerGroup请求参数结构体
 */
export interface DescribeConsumerGroupRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
}

/**
 * DescribeConsumerGroupList请求参数结构体
 */
export interface DescribeConsumerGroupListRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 查询指定主题下的消费组
   */
  FromTopic?: string
  /**
   * 按照指定字段排序，枚举值如下：
- subscribeNum：订阅 Topic 个数
   */
  SortedBy?: string
  /**
   * 按升序或降序排列，枚举值如下：

- asc：升序
- desc：降序
   */
  SortOrder?: string
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
NORMAL:普通消息,
FIFO:顺序消息,
DELAY:延时消息,
TRANSACTION:事务消息
   */
  TopicType?: string
  /**
   * 队列数量
   */
  QueueNum?: number
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 4.x的集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIdV4?: string
  /**
   * 4.x的命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceV4?: string
  /**
   * 4.x的主题名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicV4?: string
  /**
   * 4.x的完整命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FullNamespaceV4?: string
  /**
   * 消息保留时长
   */
  MsgTTL?: number
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
   * 消费类型，枚举值如下：

- PULL：PULL 消费类型
- PUSH：PUSH 消费类型
- POP：POP 消费类型
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
   * 订阅一致性，枚举如下：

- 0: 订阅一致
- 1: 订阅不一致
注意：此字段可能返回 null，表示取不到有效值。
   */
  Consistency?: number
  /**
   * 消费堆积
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerLag?: number
  /**
   * 最后消费进度更新时间，**Unix时间戳（毫秒）**
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
  /**
   * 消费模式: 
BROADCASTING 广播模式;
CLUSTERING 集群模式;
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageModel?: string
  /**
   * 订阅不一致的客户端列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientSubscriptionInfos?: Array<ClientSubscriptionInfo>
}

/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
  /**
   * 实例类型，枚举值如下：

- EXPERIMENT：体验版

- BASIC：基础版

- PRO：专业版

- PLATINUM：铂金版
   */
  InstanceType: string
  /**
   * 集群名称，不能为空， 3-64个字符，只能包含数字、字母、“-”和“_”
   */
  Name: string
  /**
   * 商品规格，从 [DescribeProductSKUs](https://cloud.tencent.com/document/api/1493/107676) 接口中的 [ProductSKU](https://cloud.tencent.com/document/api/1493/96031#ProductSKU) 出参获得。
   */
  SkuCode: string
  /**
   * 集群绑定的VPC信息
   */
  VpcList: Array<VpcInfo>
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 标签列表
   */
  TagList?: Array<Tag>
  /**
   * 是否开启公网，默认值为false表示不开启
   */
  EnablePublic?: boolean
  /**
   * 公网是否按流量计费，默认值为false表示不按流量计费
   */
  BillingFlow?: boolean
  /**
   * 公网带宽（单位：兆），默认值为0。如果开启公网，该字段必须为大于0的正整数
   */
  Bandwidth?: number
  /**
   * 公网访问白名单，不填表示拒绝所有 IP 访问
   */
  IpRules?: Array<IpRule>
  /**
   * 消息保留时长（单位：小时），取值范围参考 [DescribeProductSKUs](https://cloud.tencent.com/document/api/1493/107676) 接口中的 [ProductSKU](https://cloud.tencent.com/document/api/1493/96031#ProductSKU) 出参：

- 默认值：DefaultRetention 参数
- 最小值：RetentionLowerLimit 参数
- 最大值：RetentionUpperLimit 参数
   */
  MessageRetention?: number
  /**
   * 付费模式（0: 后付费；1: 预付费），默认值为0
   */
  PayMode?: number
  /**
   * 预付费集群是否自动续费（0: 不自动续费；1: 自动续费），默认值为0
   */
  RenewFlag?: number
  /**
   * 预付费集群的购买时长（单位：月），取值范围为1～60，默认值为1
   */
  TimeSpan?: number
  /**
   * 最大可创建主题数，从 [DescribeProductSKUs](https://cloud.tencent.com/document/api/1493/107676) 接口中的 [ProductSKU](https://cloud.tencent.com/document/api/1493/96031#ProductSKU) 出参：

- 默认值和最小值：TopicNumLimit 参数
- 最大值：TopicNumUpperLimit 参数
   */
  MaxTopicNum?: number
  /**
   * 部署可用区列表，从 [DescribeZones](https://cloud.tencent.com/document/product/1596/77929) 接口返回中的 [ZoneInfo](https://cloud.tencent.com/document/api/1596/77932#ZoneInfo) 数据结构中获得。
   */
  ZoneIds?: Array<number | bigint>
}

/**
 * 消费者客户端
 */
export interface ConsumerClient {
  /**
   * 客户端ID
   */
  ClientId?: string
  /**
   * 客户端地址
   */
  ClientAddr?: string
  /**
   * 客户端SDK语言
   */
  Language?: string
  /**
   * 客户端SDK版本
   */
  Version?: string
  /**
   * 客户端消费堆积
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerLag?: number
  /**
   * 消费者客户端类型，枚举值如下：

- grpc：GRPC协议
- remoting：Remoting协议
- http：HTTP协议
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelProtocol?: string
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
   * 消费类型，枚举值如下：

- PULL：PULL 消费类型
- PUSH：PUSH 消费类型
- POP：POP 消费类型
   */
  ConsumeType?: string
  /**
   * 创建时间，**Unix时间戳（毫秒）**
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
   * 消费模式：
BROADCASTING 广播模式
CLUSTERING 集群模式
   */
  MessageModel?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConsumerClient请求参数结构体
 */
export interface DescribeConsumerClientRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 客户端ID，从 [DescribeConsumerClientList](https://cloud.tencent.com/document/api/1493/120140) 接口中的 [ConsumerClient](https://cloud.tencent.com/document/api/1493/96031#ConsumerClient) 出参中获得。
   */
  ClientId: string
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
}

/**
 * ModifyTopic返回参数结构体
 */
export interface ModifyTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConsumerLag返回参数结构体
 */
export interface DescribeConsumerLagResponse {
  /**
   * 堆积数
   */
  ConsumerLag?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTInsPublicEndpoints请求参数结构体
 */
export interface DescribeMQTTInsPublicEndpointsRequest {
  /**
   * 集群ID
   */
  InstanceId: string
}

/**
 * DeleteRole返回参数结构体
 */
export interface DeleteRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicListByGroup请求参数结构体
 */
export interface DescribeTopicListByGroupRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
}

/**
 * DescribeMigratingTopicList请求参数结构体
 */
export interface DescribeMigratingTopicListRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。

   */
  TaskId: string
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
}

/**
 * 查询过滤器
 */
export interface Filter {
  /**
   * 过滤条件参数名
   */
  Name: string
  /**
   * 过滤条件的值
   */
  Values: Array<string>
}

/**
 * ModifyMQTTTopic返回参数结构体
 */
export interface ModifyMQTTTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTTopicList请求参数结构体
 */
export interface DescribeMQTTTopicListRequest {
  /**
   * 集群ID
   */
  InstanceId: string
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
 * MQTT 订阅关系
 */
export interface MQTTClientSubscription {
  /**
   * topic 订阅
   */
  TopicFilter?: string
  /**
   * 服务质量等级
   */
  Qos?: number
}

/**
 * 消息轨迹
 */
export interface MessageTraceItem {
  /**
   * 消息处理阶段，枚举值如下：

- produce：消息生产

- persist：消息存储

- consume：消息消费
注意：此字段可能返回 null，表示取不到有效值。
   */
  Stage?: string
  /**
   * 轨迹详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
}

/**
 * ModifyTopic请求参数结构体
 */
export interface ModifyTopicRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
   */
  Topic: string
  /**
   * 队列数量，取值范围3～16
   */
  QueueNum?: number
  /**
   * 备注信息，最多 128 个字符
   */
  Remark?: string
  /**
   * 消息保留时长（单位：小时）
   */
  MsgTTL?: number
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
   * 创建时间，**Unix时间戳（毫秒）**
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
   * 实例状态，枚举值如下：

- RUNNING：运行中
- ABNORMAL：异常
- OVERDUE：隔离中
- DESTROYED：已销毁
- CREATING：创建中
- MODIFYING：变配中
- CREATE_FAILURE：创建失败
- MODIFY_FAILURE：变配失败
- DELETING：删除中
   */
  InstanceStatus?: string
  /**
   * 实例规格
   */
  SkuCode?: string
  /**
   * 计费模式，枚举值如下：

- POSTPAID：后付费按量计费
- PREPAID：预付费包年包月
   */
  PayMode?: string
  /**
   * 是否开启弹性TPS
   */
  ScaledTpsEnabled?: boolean
  /**
   * 预付费集群是否自动续费，枚举值如下：

- 0: 不自动续费
- 1: 自动续费
   */
  RenewFlag?: number
  /**
   * 到期时间，**Unix时间戳（毫秒）**
   */
  ExpiryTime?: number
  /**
   * 角色数量限制
   */
  RoleNumLimit?: number
  /**
   * 是否开启 ACL
注意：此字段可能返回 null，表示取不到有效值。
   */
  AclEnabled?: boolean
  /**
   * topic个数免费额度
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNumLowerLimit?: number
  /**
   * 最大可设置的topic个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNumUpperLimit?: number
  /**
   * 所属可用区列表，参考 [DescribeZones](https://cloud.tencent.com/document/product/1596/77929) 接口返回中的 [ZoneInfo](https://cloud.tencent.com/document/api/1596/77932#ZoneInfo) 数据结构。
   */
  ZoneIds?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTT客户端监控
 */
export interface PacketStatistics {
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageType?: string
  /**
   * 服务质量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qos?: number
  /**
   * 指标值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
}

/**
 * DeleteMQTTTopic返回参数结构体
 */
export interface DeleteMQTTTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConsumerClient返回参数结构体
 */
export interface DescribeConsumerClientResponse {
  /**
   * 客户端详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Client?: ConsumerClient
  /**
   * 主题消费信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicList?: Array<TopicConsumeStats>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTInstanceCert请求参数结构体
 */
export interface DescribeMQTTInstanceCertRequest {
  /**
   * 集群ID
   */
  InstanceId: string
}

/**
 * MessageTrack
 */
export interface MessageTrackItem {
  /**
   * 消费组名称
   */
  ConsumerGroup?: string
  /**
   * 消费状态, CONSUMED: 已消费 CONSUMED_BUT_FILTERED: 已过滤 NOT_CONSUME: 未消费 ENTER_RETRY: 进入重试队列 ENTER_DLQ: 进入死信队列 UNKNOWN: 查询不到消费状态
   */
  ConsumeStatus?: string
  /**
   * track类型
   */
  TrackType?: string
  /**
   * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceptionDesc?: string
}

/**
 * ModifyMQTTInsPublicEndpoint返回参数结构体
 */
export interface ModifyMQTTInsPublicEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResendDeadLetterMessage请求参数结构体
 */
export interface ResendDeadLetterMessageRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 死信消息ID列表
   */
  MessageIds: Array<string>
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
}

/**
 * CreateMQTTUser请求参数结构体
 */
export interface CreateMQTTUserRequest {
  /**
   * 集群ID
   */
  InstanceId: string
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
  /**
   * 用户名
   */
  Username: string
  /**
   * 密码，该字段为空时候则后端会默认生成
   */
  Password?: string
}

/**
 * RollbackMigratingTopicStage返回参数结构体
 */
export interface RollbackMigratingTopicStageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFusionInstanceList请求参数结构体
 */
export interface DescribeFusionInstanceListRequest {
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤器
   */
  TagFilters?: Array<TagFilter>
}

/**
 * DescribeMQTTMessage请求参数结构体
 */
export interface DescribeMQTTMessageRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 主题名称
   */
  Topic: string
  /**
   * 消息ID
   */
  MsgId: string
}

/**
 * map结构返回
 */
export interface CustomMapEntry {
  /**
   * key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * value
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTTopicList返回参数结构体
 */
export interface DescribeMQTTTopicListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 主题列表
   */
  Data?: Array<MQTTTopicItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MQTT集群用户信息
 */
export interface MQTTUserItem {
  /**
   * 用户名
   */
  Username?: string
  /**
   * 密码
   */
  Password?: string
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
 * ModifyInstanceEndpoint请求参数结构体
 */
export interface ModifyInstanceEndpointRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 接入点类型，
PUBLIC 公网
   */
  Type: string
  /**
   * 公网带宽，Mbps为单位
   */
  Bandwidth?: number
  /**
   * 公网安全组信息
   */
  IpRules?: Array<IpRule>
  /**
   * 公网是否按流量计费
   */
  BillingFlow?: boolean
}

/**
 * ChangeMigratingTopicToNextStage请求参数结构体
 */
export interface ChangeMigratingTopicToNextStageRequest {
  /**
   * 任务ID，可在[DescribeSmoothMigrationTaskList](https://cloud.tencent.com/document/api/1493/119997)接口返回的[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)或控制台中获得。

   */
  TaskId: string
  /**
   * 主题名称列表，主题名称可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。

   */
  TopicNameList: Array<string>
  /**
   * 命名空间列表，仅4.x集群有效，与TopicNameList一一对应，可在[DescribeMigratingTopicList](https://cloud.tencent.com/document/api/1493/118007)接口返回的[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构中获得。
   */
  NamespaceList?: Array<string>
}

/**
 * DescribeMQTTUserList请求参数结构体
 */
export interface DescribeMQTTUserListRequest {
  /**
   * 实例ID
   */
  InstanceId: string
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
 * ModifyMQTTInstance请求参数结构体
 */
export interface ModifyMQTTInstanceRequest {
  /**
   * 集群ID
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
}

/**
 * ModifyMQTTInstance返回参数结构体
 */
export interface ModifyMQTTInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
basic_1k,
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
   */
  TotalCount?: number
  /**
   * 主题列表
   */
  Data?: Array<TopicItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConsumerClientList请求参数结构体
 */
export interface DescribeConsumerClientListRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
  /**
   * 过滤查询条件列表，请在引用此参数的API说明中了解使用方法。
   */
  Filters?: Array<Filter>
  /**
   * 查询起始位置，默认为0。
   */
  Offset?: number
  /**
   * 查询结果限制数量，默认20。
   */
  Limit?: number
}

/**
 * 主题消费进度
 */
export interface TopicConsumeStats {
  /**
   * 主题名称
   */
  Topic?: string
  /**
   * 主题类型，枚举值如下：

- UNSPECIFIED：未指定
- NORMAL：普通消息
- FIFO：顺序消息
- DELAY：延时消息
- TRANSACTION：事务消息
   */
  TopicType?: string
  /**
   * 单节点主题队列数量
   */
  QueueNum?: number
  /**
   * 消费堆积
   */
  ConsumerLag?: number
  /**
   * 订阅规则，`*`表示订阅全部TAG
   */
  SubString?: string
  /**
   * 最后消费进度更新时间，**Unix时间戳（毫秒）**
   */
  LastUpdateTime?: number
}

/**
 * DescribeMQTTTopic请求参数结构体
 */
export interface DescribeMQTTTopicRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 主题名称
   */
  Topic: string
}

/**
 * CreateRole请求参数结构体
 */
export interface CreateRoleRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 角色名称，不能为空，只支持数字 大小写字母 分隔符("_","-")，不能超过 32 个字符
   */
  Role: string
  /**
   * 是否开启生产权限
   */
  PermWrite: boolean
  /**
   * 是否开启消费权限
   */
  PermRead: boolean
  /**
   * 备注
   */
  Remark: string
  /**
   * 权限类型，默认按集群授权（Cluster：集群级别；TopicAndGroup：主题&消费组级别）
   */
  PermType?: string
  /**
   * Topic&Group维度权限配置，权限类型为 TopicAndGroup 时必填
   */
  DetailedPerms?: Array<DetailedRolePerm>
}

/**
 * DeleteConsumerGroup返回参数结构体
 */
export interface DeleteConsumerGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 接入点信息
 */
export interface Endpoint {
  /**
   * 接入点类型，枚举值如下：

- VPC：VPC 网络

- PUBLIC：公网

- INTERNAL：支撑网
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
  /**
   * 公网是否按流量计费
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingFlow?: boolean
}

/**
 * ModifyMQTTTopic请求参数结构体
 */
export interface ModifyMQTTTopicRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 主题名称
   */
  Topic: string
  /**
   * 备注信息
   */
  Remark?: string
}

/**
 * MQTT客户端数据流量统计
 */
export interface StatisticsReport {
  /**
   * 字节数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bytes?: number
  /**
   * 监控指标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<PacketStatistics>
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
   * 是否允许放行，默认为false表示拒绝
   */
  Allow: boolean
  /**
   * 备注信息
   */
  Remark: string
}

/**
 * 消息记录
 */
export interface MessageItem {
  /**
   * 消息ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgId?: string
  /**
   * 消息tag
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: string
  /**
   * 消息key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys?: string
  /**
   * 客户端地址	
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProducerAddr?: string
  /**
   * 消息发送时间	
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProduceTime?: string
  /**
   * 死信重发次数	
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterResendTimes?: number
  /**
   * 死信重发成功次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterResendSuccessTimes?: number
}

/**
 * 角色信息
 */
export interface RoleItem {
  /**
   * 角色名称
   */
  RoleName: string
  /**
   * 是否开启消费
   */
  PermRead: boolean
  /**
   * 是否开启生产
   */
  PermWrite: boolean
  /**
   * Access Key
   */
  AccessKey?: string
  /**
   * Secret Key
   */
  SecretKey?: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 角色的创建时间，**Unix时间戳（毫秒）**
   */
  CreatedTime?: number
  /**
   * 角色的更新时间，**Unix时间戳（毫秒）**
   */
  ModifiedTime?: number
  /**
   * 权限类型，默认按集群授权（Cluster：集群级别；TopicAndGroup：主题&消费组级别）
   */
  PermType?: string
  /**
   * Topic和Group维度权限配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetailedRolePerms?: Array<DetailedRolePerm>
}

/**
 * MQTT 主题详情
 */
export interface MQTTTopicItem {
  /**
   * 实例 ID
   */
  InstanceId?: string
  /**
   * 主题名称
   */
  Topic?: string
  /**
   * 主题描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * DescribeConsumerGroupList返回参数结构体
 */
export interface DescribeConsumerGroupListResponse {
  /**
   * 查询总数
   */
  TotalCount?: number
  /**
   * 消费组列表
   */
  Data?: Array<ConsumeGroupItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMQTTUser请求参数结构体
 */
export interface ModifyMQTTUserRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 用户名
   */
  Username: string
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
 * CreateMQTTInsPublicEndpoint请求参数结构体
 */
export interface CreateMQTTInsPublicEndpointRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 带宽
   */
  Bandwidth: number
  /**
   * 公网访问规则
   */
  Rules?: Array<PublicAccessRule>
}

/**
 * CreateMQTTTopic请求参数结构体
 */
export interface CreateMQTTTopicRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 主题名称
   */
  Topic: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTInstanceCert返回参数结构体
 */
export interface DescribeMQTTInstanceCertResponse {
  /**
   * 集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 服务端证书id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSLServerCertId?: string
  /**
   * CA证书id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSLCaCertId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTTopic返回参数结构体
 */
export interface DescribeMQTTTopicResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 主题名称
   */
  Topic?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 创建时间，秒为单位
   */
  CreatedTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceEndpoint返回参数结构体
 */
export interface ModifyInstanceEndpointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
}

/**
 * DescribeProductSKUs返回参数结构体
 */
export interface DescribeProductSKUsResponse {
  /**
   * 商品配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ProductSKU>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveMigratingTopic返回参数结构体
 */
export interface RemoveMigratingTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMQTTMessageList请求参数结构体
 */
export interface DescribeMQTTMessageListRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 主题名称
   */
  Topic: string
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 请求任务id
   */
  TaskRequestId: string
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
 * ResetConsumerGroupOffset请求参数结构体
 */
export interface ResetConsumerGroupOffsetRequest {
  /**
   * 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得。
   */
  InstanceId: string
  /**
   * 主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。
   */
  Topic: string
  /**
   * 重置位点的时间戳（单位：毫秒），指定为 -1 时表示重置到最新位点
   */
  ResetTimestamp: number
  /**
   * 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
   */
  ConsumerGroup?: string
}

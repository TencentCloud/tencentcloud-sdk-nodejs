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
 * Topic&Group维度的权限配置
 */
export interface DetailedRolePerm {
  /**
   * 权限对应的资源
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  TpsLimit?: number
  /**
   * 弹性TPS上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScaledTpsLimit?: number
  /**
   * 主题数量上限默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNumLimit?: number
  /**
   * 消费组数量上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupNumLimit?: number
  /**
   * 默认消息保留时间，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultRetention?: number
  /**
   * 可调整消息保留时间上限，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionUpperLimit?: number
  /**
   * 可调整消息保留时间下限，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionLowerLimit?: number
  /**
   * 延时消息最大时长，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNumUpperLimit?: number
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
  /**
   * 4.x的命名空间，出参使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceV4?: string
  /**
   * 4.x的主题名，出参使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNameV4?: string
  /**
   * 4.x的完整命名空间，出参使用
注意：此字段可能返回 null，表示取不到有效值。
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
   * 一次查询标识
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
  /**
   * 消费组名称
   */
  ConsumerGroup?: string
  /**
   * 消息 ID
   */
  MsgId?: string
  /**
   * 消息 Key
   */
  MsgKey?: string
  /**
   * 查询最近N条消息 最大不超过1024，默认-1为其他查询条件
   */
  RecentMessageNum?: number
  /**
   * 是否查询死信消息
   */
  QueryDeadLetterMessage?: boolean
  /**
   * 消息 Tag
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
  /**
   * 是否开启ACL
   */
  AclEnabled?: boolean
  /**
   * 最大可创建主题数
   */
  MaxTopicNum?: number
  /**
   * 免费额度之外的主题个数
   */
  ExtraTopicNum?: string
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
  /**
   * 是否自动续费
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: number
  /**
   * 4.x独有数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceItemExtraInfo?: InstanceItemExtraInfo
  /**
   * 预销毁时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestroyTime?: number
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
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 查询起始位置
   */
  Offset?: number
  /**
   * 查询结果限制数量
   */
  Limit?: number
  /**
   * 查询条件列表
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
 * DescribeMQTTProductSKUList请求参数结构体
 */
export type DescribeMQTTProductSKUListRequest = null

/**
 * DescribeConsumerLag请求参数结构体
 */
export interface DescribeConsumerLagRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 消费组名称
   */
  ConsumerGroup?: string
  /**
   * 命名空间，4.x集群必填
   */
  Namespace?: string
  /**
   * 订阅主题，不为空则查询订阅了该主题的消费组的堆积
   */
  SubscribeTopic?: string
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
 * DescribeMessageList返回参数结构体
 */
export interface DescribeMessageListResponse {
  /**
   * 查询总数
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
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
   * 集群ID
   */
  InstanceId: string
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
   * 消费组名称
   */
  ConsumerGroup?: string
  /**
   * 备注
   */
  Remark?: string
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
   * 查询条件列表
   */
  Filters?: Array<Filter>
  /**
   * 标签过滤器
   */
  TagFilters?: Array<TagFilter>
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
   * 任务ID
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
   * 消息保留时长
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
   * 集群ID
   */
  InstanceId: string
}

/**
 * ModifyRole请求参数结构体
 */
export interface ModifyRoleRequest {
  /**
   * 集群ID
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
   * 权限类型，默认按集群授权（Cluster：集群维度；TopicAndGroup：主题和消费组维度）
   */
  PermType?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * Topic&Group维度权限配置
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
注意：此字段可能返回 null，表示取不到有效值。
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 主题名称
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
  /**
   * 消息保留时长
   */
  MsgTTL?: number
}

/**
 * DescribeMessage请求参数结构体
 */
export interface DescribeMessageRequest {
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
  /**
   * 查询起始位置
   */
  Offset?: number
  /**
   * 查询结果限制数量
   */
  Limit?: number
  /**
   * 是否是死信消息
   */
  QueryDeadLetterMessage?: boolean
  /**
   * 是否是延时消息
   */
  QueryDelayMessage?: boolean
}

/**
 * DeleteRole请求参数结构体
 */
export interface DeleteRoleRequest {
  /**
   * 集群ID
   */
  InstanceId: string
  /**
   * 角色名称
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 消费组名称
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
 * 价格标签信息
 */
export interface PriceTag {
  /**
   * 计价名称
   */
  Name?: string
  /**
   * 步长
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
注意：此字段可能返回 null，表示取不到有效值。
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
   * 展示Topic名
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
  /**
   * 是否自动续费
注意：此字段可能返回 null，表示取不到有效值。
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 主题名称
   */
  Topic: string
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
  /**
   * 是否是死信消息
   */
  QueryDeadLetterMessage?: boolean
  /**
   * 是否是延时消息
   */
  QueryDelayMessage?: boolean
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
   * Topic
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
 * ModifyConsumerGroup请求参数结构体
 */
export interface ModifyConsumerGroupRequest {
  /**
   * 集群ID
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
   * 集群ID
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
  /**
   * 查询指定主题下的消费组
   */
  FromTopic?: string
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
   * 描述
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
注意：此字段可能返回 null，表示取不到有效值。
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
  /**
   * 消费模式: 
BROADCASTING 广播模式;
CLUSTERING 集群模式;
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageModel?: string
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
   * 集群名称
   */
  Name: string
  /**
   * 商品规格，可用规格如下：experiment_500, basic_1k, basic_2k, basic_3k, basic_4k, basic_5k, basic_6k, basic_7k, basic_8k, basic_9k, basic_10k, pro_4k, pro_6k, pro_8k, pro_1w, pro_15k, pro_2w, pro_25k, pro_3w, pro_35k, pro_4w, pro_45k, pro_5w, pro_55k, pro_60k, pro_65k, pro_70k, pro_75k, pro_80k, pro_85k, pro_90k, pro_95k, pro_100k, platinum_1w, platinum_2w, platinum_3w, platinum_4w, platinum_5w, platinum_6w, platinum_7w, platinum_8w, platinum_9w, platinum_10w, platinum_12w, platinum_14w, platinum_16w, platinum_18w, platinum_20w, platinum_25w, platinum_30w, platinum_35w, platinum_40w, platinum_45w, platinum_50w, platinum_60w, platinum_70w, platinum_80w, platinum_90w, platinum_100w
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
   * 集群绑定的VPC信息，必填
   */
  VpcList?: Array<VpcInfo>
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
   * 公网访问白名单
   */
  IpRules?: Array<IpRule>
  /**
   * 消息保留时长（单位：小时）
   */
  MessageRetention?: number
  /**
   * 付费模式（0: 后付费；1: 预付费），默认值为0
   */
  PayMode?: number
  /**
   * 是否自动续费（0: 不自动续费；1: 自动续费），默认值为0
   */
  RenewFlag?: number
  /**
   * 购买时长（单位：月），默认值为1
   */
  TimeSpan?: number
  /**
   * 最大可创建主题数
   */
  MaxTopicNum?: number
  /**
   * 部署可用区列表
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 客户端ID
   */
  ClientId: string
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
   * 消费组名称
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 查询起始位置
   */
  Offset?: number
  /**
   * 查询结果限制数量
   */
  Limit?: number
  /**
   * 消费组名称
   */
  ConsumerGroup?: string
  /**
   * 查询条件列表
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
   * 步骤
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 主题名称
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
  /**
   * 消息保留时长
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
   * 是否开启弹性TPS
   */
  ScaledTpsEnabled?: boolean
  /**
   * 是否自动续费
   */
  RenewFlag?: number
  /**
   * 到期时间
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
   * 可用区列表
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 死信消息ID列表
   */
  MessageIds: Array<string>
  /**
   * 消费组名称
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
 * DescribeFusionInstanceList请求参数结构体
 */
export interface DescribeFusionInstanceListRequest {
  /**
   * 查询起始位置
   */
  Offset?: number
  /**
   * 查询结果限制数量
   */
  Limit?: number
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
 * ModifyInstanceEndpoint请求参数结构体
 */
export interface ModifyInstanceEndpointRequest {
  /**
   * 集群ID
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
注意：此字段可能返回 null，表示取不到有效值。
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
 * 主题消费进度
 */
export interface TopicConsumeStats {
  /**
   * 主题名称
   */
  Topic?: string
  /**
   * 主题类型
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
   * 订阅规则
   */
  SubString?: string
  /**
   * 最后消费进度更新时间
注意：此字段可能返回 null，表示取不到有效值。
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
   * 集群ID
   */
  InstanceId: string
  /**
   * 角色名称
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
   * Topic&Group维度权限配置
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
   * 接入点类型，枚举值如下
VPC: VPC;
PUBLIC: 公网;
INTERNAL: 支撑网;
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
   * 创建时间，秒为单位
   */
  CreatedTime?: number
  /**
   * 修改时间，秒为单位
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
注意：此字段可能返回 null，表示取不到有效值。
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
   * 集群ID
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

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
 * RocketMQ命名空间信息
 */
export interface RocketMQNamespace {
  /**
   * 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_”
   */
  NamespaceId?: string
  /**
   * 已废弃，未消费消息的保留时间，以毫秒单位，范围60秒到15天
   */
  Ttl?: number
  /**
   * 消息持久化后保留的时间，以毫秒单位
   */
  RetentionTime?: number
  /**
   * 说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 公网接入点地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicEndpoint?: string
  /**
   * VPC接入点地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcEndpoint?: string
  /**
   * 内部接入点地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternalEndpoint?: string
}

/**
 * CreateRabbitMQBinding返回参数结构体
 */
export interface CreateRabbitMQBindingResponse {
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * vhost名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualHost?: string
  /**
   * 路由关系Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindingId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRocketMQInstanceSpec请求参数结构体
 */
export interface ModifyRocketMQInstanceSpecRequest {
  /**
   * 专享实例ID
   */
  InstanceId: string
  /**
   * 实例规格，
rocket-vip-basic-1 基础型
rocket-vip-basic-2 标准型
rocket-vip-basic-3 高阶Ⅰ型
rocket-vip-basic-4 高阶Ⅱ型
   */
  Specification?: string
  /**
   * 节点数量
   */
  NodeCount?: number
  /**
   * 存储空间，GB为单位
   */
  StorageSize?: number
}

/**
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
  /**
   * 集群的ID
   */
  ClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCmqTopic请求参数结构体
 */
export interface CreateCmqTopicRequest {
  /**
   * 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
   */
  TopicName: string
  /**
   * 消息最大长度。取值范围 1024-65536 Byte（即1-64K），默认值 65536。
   */
  MaxMsgSize?: number
  /**
   * 用于指定主题的消息匹配策略。1：表示标签匹配策略；2：表示路由匹配策略，默认值为标签匹配策略。
   */
  FilterType?: number
  /**
   * 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。
   */
  MsgRetentionSeconds?: number
  /**
   * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
   */
  Trace?: boolean
  /**
   * 标签数组
   */
  Tags?: Array<Tag>
}

/**
 * ModifyRabbitMQVipInstance请求参数结构体
 */
export interface ModifyRabbitMQVipInstanceRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 备注
   */
  Remark?: string
}

/**
 * RocketMQ专享实例信息
 */
export interface RocketMQVipInstance {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceVersion?: string
  /**
   * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败，6 - 变配中，7 - 变配失败
   */
  Status?: number
  /**
   * 节点数量
   */
  NodeCount?: number
  /**
   * 实例配置规格名称
   */
  ConfigDisplay?: string
  /**
   * 峰值TPS
   */
  MaxTps?: number
  /**
   * 峰值带宽，Mbps为单位
   */
  MaxBandWidth?: number
  /**
   * 存储容量，GB为单位
   */
  MaxStorage?: number
  /**
   * 实例到期时间，毫秒为单位
   */
  ExpireTime?: number
  /**
   * 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)
   */
  AutoRenewFlag?: number
  /**
   * 0-后付费，1-预付费
   */
  PayMode?: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 实例配置ID
   */
  SpecName?: string
  /**
   * 最大可设置消息保留时间，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxRetention?: number
  /**
   * 最小可设置消息保留时间，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinRetention?: number
  /**
   * 实例消息保留时间，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  Retention?: number
  /**
   * 是否开启ACL鉴权
注意：此字段可能返回 null，表示取不到有效值。
   */
  AclEnabled?: boolean
  /**
   * 销毁时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestroyTime?: number
}

/**
 * DescribeCmqQueues返回参数结构体
 */
export interface DescribeCmqQueuesResponse {
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 队列列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueList?: Array<CmqQueue>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQVirtualHostList请求参数结构体
 */
export interface DescribeRabbitMQVirtualHostListRequest {
  /**
   * 不适用，默认参数
   */
  InstanceId: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 一页限制
   */
  Limit?: number
}

/**
 * DescribeAllTenants返回参数结构体
 */
export interface DescribeAllTenantsResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 虚拟集群列表
   */
  Tenants?: Array<InternalTenant>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消费者详情中的主题信息
 */
export interface RocketMQConsumerTopic {
  /**
   * 主题名称
   */
  Topic?: string
  /**
   * 主题类型，Normal表示普通，GlobalOrder表示全局顺序，PartitionedOrder表示局部顺序，Transaction表示事务，Retry表示重试，DeadLetter表示死信
   */
  Type?: string
  /**
   * 分区数
   */
  PartitionNum?: number
  /**
   * 消息堆积数
   */
  Accumulative?: number
  /**
   * 最后消费时间，以毫秒为单位
   */
  LastConsumptionTime?: number
  /**
   * 订阅规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubRule?: string
}

/**
 * DescribeRabbitMQNodeList请求参数结构体
 */
export interface DescribeRabbitMQNodeListRequest {
  /**
   * rabbitmq集群ID
   */
  InstanceId: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 一页限制
   */
  Limit?: number
  /**
   * 模糊搜索节点名字
   */
  NodeName?: string
  /**
   * 过滤参数的名字和数值
现在只有一个nodeStatus
running/down
数组类型，兼容后续添加过滤参数

   */
  Filters?: Array<Filter>
  /**
   * 按指定元素排序，现在只有2个
cpuUsage/diskUsage
   */
  SortElement?: string
  /**
   * 升序/降序
ascend/descend
   */
  SortOrder?: string
}

/**
 * DeleteCmqQueue返回参数结构体
 */
export interface DeleteCmqQueueResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消费详情
 */
export interface ConsumerStats {
  /**
   * 主题名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 所属Broker
注意：此字段可能返回 null，表示取不到有效值。
   */
  BrokerName?: string
  /**
   * 队列编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueId?: number
  /**
   * 消费者ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerClientId?: string
  /**
   * 消费位点
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerOffset?: number
  /**
   * 服务端位点
注意：此字段可能返回 null，表示取不到有效值。
   */
  BrokerOffset?: number
  /**
   * 消息堆积条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiffTotal?: number
  /**
   * 最近消费时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTimestamp?: number
}

/**
 * DescribeRocketMQEnvironmentRoles请求参数结构体
 */
export interface DescribeRocketMQEnvironmentRolesRequest {
  /**
   * 必填字段，RocketMQ集群的ID
   */
  ClusterId: string
  /**
   * 命名空间
   */
  EnvironmentId?: string
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * RoleName按照角色名进行过滤，精确查询。类型：String必选：否
   */
  Filters?: Array<Filter>
}

/**
 * DeleteRocketMQGroup请求参数结构体
 */
export interface DeleteRocketMQGroupRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  NamespaceId: string
  /**
   * 消费组名称
   */
  GroupId: string
}

/**
 * RocketMQ消费组信息
 */
export interface RocketMQGroup {
  /**
   * 消费组名称
   */
  Name?: string
  /**
   * 在线消费者数量
   */
  ConsumerNum?: number
  /**
   * 消费TPS
   */
  TPS?: number
  /**
   * 总堆积数量
   */
  TotalAccumulative?: number
  /**
   * 0表示集群消费模式，1表示广播消费模式，-1表示未知
   */
  ConsumptionMode?: number
  /**
   * 是否允许消费
   */
  ReadEnabled?: boolean
  /**
   * 重试队列分区数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryPartitionNum?: number
  /**
   * 创建时间，以毫秒为单位
   */
  CreateTime?: number
  /**
   * 修改时间，以毫秒为单位
   */
  UpdateTime?: number
  /**
   * 客户端协议
   */
  ClientProtocol?: string
  /**
   * 说明信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 消费者类型，枚举值ACTIVELY, PASSIVELY
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerType?: string
  /**
   * 是否开启广播消费
   */
  BroadcastEnabled?: boolean
  /**
   * Group类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupType?: string
  /**
   * 重试次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryMaxTimes?: number
}

/**
 * ModifyRabbitMQUser请求参数结构体
 */
export interface ModifyRabbitMQUserRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * 用户名，登录时使用
   */
  User: string
  /**
   * 密码，登录时使用
   */
  Password: string
  /**
   * 描述，不传则不修改
   */
  Description?: string
  /**
   * 用户标签，用于决定改用户访问RabbitMQ Management的权限范围，不传则不修改
   */
  Tags?: Array<string>
  /**
   * 该用户的最大连接数，不传则不修改
   */
  MaxConnections?: number
  /**
   * 该用户的最大channel数，不传则不修改
   */
  MaxChannels?: number
}

/**
 * CreateSubscription请求参数结构体
 */
export interface CreateSubscriptionRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 主题名称。
   */
  TopicName: string
  /**
   * 订阅者名称，不超过128个字符。
   */
  SubscriptionName: string
  /**
   * 是否幂等创建，若否不允许创建同名的订阅关系。
   */
  IsIdempotent: boolean
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
  /**
   * 备注，128个字符以内。
   */
  Remark?: string
  /**
   * 是否自动创建死信和重试主题，True 表示创建，False表示不创建，默认自动创建死信和重试主题。
   */
  AutoCreatePolicyTopic?: boolean
  /**
   * 指定死信和重试主题名称规范，LEGACY表示历史命名规则，COMMUNITY表示Pulsar社区命名规范
   */
  PostFixPattern?: string
}

/**
 * RabbitMQ专享实例信息
 */
export interface RabbitMQVipInstance {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceVersion?: string
  /**
   * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败
   */
  Status?: number
  /**
   * 节点数量
   */
  NodeCount?: number
  /**
   * 实例配置规格名称
   */
  ConfigDisplay?: string
  /**
   * 峰值TPS
   */
  MaxTps?: number
  /**
   * 峰值带宽，Mbps为单位
   */
  MaxBandWidth?: number
  /**
   * 存储容量，GB为单位
   */
  MaxStorage?: number
  /**
   * 实例到期时间，毫秒为单位
   */
  ExpireTime?: number
  /**
   * 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)
   */
  AutoRenewFlag?: number
  /**
   * 0-后付费，1-预付费
   */
  PayMode?: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 实例配置ID
   */
  SpecName?: string
  /**
   * 集群异常。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceptionInformation?: string
  /**
   * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败
为了和计费区分开，额外开启一个状态位，用于显示。
   */
  ClusterStatus?: number
  /**
   * 公网接入点
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAccessEndpoint?: string
  /**
   * VPC 接入点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vpcs?: Array<VpcEndpointInfo>
  /**
   * 创建时间，毫秒为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 实例类型，0 专享版、1 Serverless 版
   */
  InstanceType?: number
}

/**
 * RabbiteMQ集群基本信息
 */
export interface RabbitMQClusterInfo {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 地域信息
   */
  Region?: string
  /**
   * 创建时间，毫秒为单位
   */
  CreateTime?: number
  /**
   * 集群说明信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * VPC及网络信息
   */
  Vpcs?: Array<VpcEndpointInfo>
  /**
   * 可用区信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneIds?: Array<number | bigint>
  /**
   * 虚拟主机数量
   */
  VirtualHostNumber?: number
  /**
   * 队列数量
   */
  QueueNumber?: number
  /**
   * 每秒生产消息数 单位：条/秒
   */
  MessagePublishRate?: number
  /**
   * 堆积消息数 单位：条
   */
  MessageStackNumber?: number
  /**
   * 过期时间
   */
  ExpireTime?: number
  /**
   * Channel数量
   */
  ChannelNumber?: number
  /**
   * Connection数量
   */
  ConnectionNumber?: number
  /**
   * Consumer数量
   */
  ConsumerNumber?: number
  /**
   * Exchang数量
   */
  ExchangeNumber?: number
  /**
   * 集群异常信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceptionInformation?: string
  /**
   * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败
   */
  ClusterStatus?: number
  /**
   * 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
  /**
   * 是否开启镜像队列策略。1表示开启，0表示没开启。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MirrorQueuePolicyFlag?: number
  /**
   * 每秒消费消息数 单位：条/秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageConsumeRate?: number
  /**
   * 集群版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterVersion?: string
  /**
   * 计费模式，0-后付费，1-预付费
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: number
  /**
   * 实例类型，0 专享版、1 Serverless 版
   */
  InstanceType?: number
}

/**
 * vhost概览统计信息
 */
export interface RabbitMQVirtualHostStatistics {
  /**
   * 当前vhost的queue数量
   */
  CurrentQueues?: number
  /**
   * 当前vhost的exchange数量
   */
  CurrentExchanges?: number
  /**
   * 当前vhost的连接数量
   */
  CurrentConnections?: number
  /**
   * 当前vhost的channel数量
   */
  CurrentChannels?: number
  /**
   * 当前vhost的用户数量
   */
  CurrentUsers?: number
}

/**
 * DescribeRabbitMQQueues返回参数结构体
 */
export interface DescribeRabbitMQQueuesResponse {
  /**
   * 列表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueInfoList?: Array<RabbitMQQueueListInfo>
  /**
   * 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvironments请求参数结构体
 */
export interface DescribeEnvironmentsRequest {
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
  /**
   * 命名空间名称，模糊搜索。
   */
  EnvironmentId?: string
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * * EnvironmentId
按照名称空间进行过滤，精确查询。
类型：String
必选：否
   */
  Filters?: Array<Filter>
}

/**
 * DescribeRocketMQNamespaces请求参数结构体
 */
export interface DescribeRocketMQNamespacesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 限制数目
   */
  Limit: number
  /**
   * 按名称搜索
   */
  NameKeyword?: string
}

/**
 * ModifyRocketMQCluster返回参数结构体
 */
export interface ModifyRocketMQClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQTopicStats返回参数结构体
 */
export interface DescribeRocketMQTopicStatsResponse {
  /**
   * 生产详情列表
   */
  TopicStatsList?: Array<TopicStats>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEnvironment请求参数结构体
 */
export interface CreateEnvironmentRequest {
  /**
   * 环境（命名空间）名称，不支持中字以及除了短线和下划线外的特殊字符且不超过16个字符。
   */
  EnvironmentId: string
  /**
   * 未消费消息过期时间，单位：秒，取值范围：60秒~15天。
   */
  MsgTTL: number
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
  /**
   * 说明，128个字符以内。
   */
  Remark?: string
  /**
   * 消息保留策略
   */
  RetentionPolicy?: RetentionPolicy
  /**
   * 是否开启自动创建订阅
   */
  AutoSubscriptionCreation?: boolean
}

/**
 * CreateCmqSubscribe返回参数结构体
 */
export interface CreateCmqSubscribeResponse {
  /**
   * 订阅id
   */
  SubscriptionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * 集群ID列表过滤
   */
  ClusterIdList?: Array<string>
  /**
   * 是否标签过滤
   */
  IsTagFilter?: boolean
  /**
   * 过滤器。目前支持按标签过滤。
   */
  Filters?: Array<Filter>
}

/**
 * ModifyEnvironmentAttributes请求参数结构体
 */
export interface ModifyEnvironmentAttributesRequest {
  /**
   * 命名空间名称。
   */
  EnvironmentId: string
  /**
   * 未消费消息过期时间，单位：秒，范围60秒~15天。
   */
  MsgTTL: number
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 备注，字符串最长不超过128。
   */
  Remark?: string
  /**
   * 消息保留策略
   */
  RetentionPolicy?: RetentionPolicy
  /**
   * 是否开启自动创建订阅
   */
  AutoSubscriptionCreation?: boolean
}

/**
 * 监控数据点
 */
export interface RocketMQDataPoint {
  /**
   * 监控值数组，该数组和Timestamps一一对应
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamps?: Array<number | bigint>
  /**
   * 监控数据点位置，比如一天按分钟划分有1440个点，每个点的序号是0 - 1439之间的一个数，当某个序号不在该数组中，说明掉点了
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values?: Array<number>
}

/**
 * DescribeSubscriptions返回参数结构体
 */
export interface DescribeSubscriptionsResponse {
  /**
   * 订阅者集合数组。
   */
  SubscriptionSets?: Array<Subscription>
  /**
   * 数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRocketMQCluster请求参数结构体
 */
export interface ModifyRocketMQClusterRequest {
  /**
   * RocketMQ集群ID
   */
  ClusterId: string
  /**
   * 3-64个字符，只能包含字母、数字、“-”及“_”
   */
  ClusterName?: string
  /**
   * 说明信息，不超过128个字符
   */
  Remark?: string
  /**
   * 是否开启HTTP公网访问
   */
  PublicAccessEnabled?: boolean
}

/**
 * SendBatchMessages返回参数结构体
 */
export interface SendBatchMessagesResponse {
  /**
   * 消息的唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageId?: string
  /**
   * 错误消息，返回为 ""，代表没有错误
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQVipInstanceDetail返回参数结构体
 */
export interface DescribeRocketMQVipInstanceDetailResponse {
  /**
   * 集群信息
   */
  ClusterInfo?: RocketMQClusterInfo
  /**
   * 集群配置
   */
  InstanceConfig?: RocketMQInstanceConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQVirtualHost返回参数结构体
 */
export interface DescribeRabbitMQVirtualHostResponse {
  /**
   * 返回vhost数量
   */
  TotalCount?: number
  /**
   * vhost详情列表
   */
  VirtualHostList?: Array<RabbitMQVirtualHostInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RabbitMQ权限详情
 */
export interface RabbitMQPermission {
  /**
   * 集群实例Id
   */
  InstanceId?: string
  /**
   * 用户名，权限关联的用户
   */
  User?: string
  /**
   * vhost名
   */
  VirtualHost?: string
  /**
   * 权限类型，declare相关操作，该用户可操作该vhost下的资源名称正则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigRegexp?: string
  /**
   * 权限类型，消息写入相关操作，该用户可操作该vhost下的资源名称正则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  WriteRegexp?: string
  /**
   * 权限类型，消息读取相关操作，该用户可操作该vhost下的资源名称正则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadRegexp?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
}

/**
 * CreateRocketMQCluster请求参数结构体
 */
export interface CreateRocketMQClusterRequest {
  /**
   * 集群名称，3-64个字符，只能包含字母、数字、“-”及“_”
   */
  Name: string
  /**
   * 集群描述，128个字符以内
   */
  Remark?: string
}

/**
 * ModifyCmqSubscriptionAttribute返回参数结构体
 */
export interface ModifyCmqSubscriptionAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRocketMQRoles返回参数结构体
 */
export interface DeleteRocketMQRolesResponse {
  /**
   * 成功删除的角色名称数组。
   */
  RoleNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRocketMQTopic返回参数结构体
 */
export interface DeleteRocketMQTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 生产者信息
 */
export interface Publisher {
  /**
   * 生产者id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProducerId?: number
  /**
   * 生产者名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProducerName?: string
  /**
   * 生产者地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address?: string
  /**
   * 客户端版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientVersion?: string
  /**
   * 消息生产速率（条/秒）
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRateIn?: number
  /**
   * 消息生产吞吐速率（字节/秒）
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgThroughputIn?: number
  /**
   * 平均消息大小（字节）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageMsgSize?: number
  /**
   * 连接时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectedSince?: string
  /**
   * 生产者连接的主题分区号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partition?: number
}

/**
 * ModifyRole请求参数结构体
 */
export interface ModifyRoleRequest {
  /**
   * 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。
   */
  RoleName: string
  /**
   * 必填字段，集群Id
   */
  ClusterId: string
  /**
   * 备注说明，长度必须大等于0且小等于128。
   */
  Remark?: string
  /**
   * 批量绑定名字空间信息
   */
  EnvironmentRoleSets?: Array<EnvironmentRoleSet>
  /**
   * 全部解绑名字空间，设置为 true
   */
  UnbindAllEnvironment?: boolean
}

/**
 * DescribeRocketMQMsg请求参数结构体
 */
export interface DescribeRocketMQMsgRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 命名空间
   */
  EnvironmentId: string
  /**
   * 主题，查询死信时传groupId
   */
  TopicName: string
  /**
   * 消息id
   */
  MsgId: string
  /**
   * pulsar消息id
   */
  PulsarMsgId: string
  /**
   * 查询死信时该值为true，只对Rocketmq有效
   * @deprecated
   */
  QueryDlqMsg?: boolean
  /**
   * 查询死信时该值为true，只对Rocketmq有效
   */
  QueryDeadLetterMessage?: boolean
  /**
   * 分页Offset
   */
  Offset?: number
  /**
   * 分页Limit
   */
  Limit?: number
  /**
   * 根据消费组名称过滤消费详情
   */
  FilterTrackGroup?: string
}

/**
 * RocketMQ消费组配置信息
 */
export interface RocketMQGroupConfigOutput {
  /**
   * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * 消费组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 是否已导入
注意：此字段可能返回 null，表示取不到有效值。
   */
  Imported?: boolean
  /**
   * remark
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 主题名，不支持中字以及除了短线和下划线外的特殊字符且不超过64个字符。
   */
  TopicName: string
  /**
   * 入参为1，即是创建非分区topic，无分区；入参大于1，表示分区topic的分区数，最大不允许超过32。
   */
  Partitions: number
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
  /**
   * 备注，128字符以内。
   */
  Remark?: string
  /**
   * 该入参将逐步弃用，可切换至PulsarTopicType参数
0： 普通消息；
1 ：全局顺序消息；
2 ：局部顺序消息；
3 ：重试队列；
4 ：死信队列。
   */
  TopicType?: number
  /**
   * Pulsar 主题类型
0: 非持久非分区
1: 非持久分区
2: 持久非分区
3: 持久分区
   */
  PulsarTopicType?: number
  /**
   * 未消费消息过期时间，单位：秒，取值范围：60秒~15天。
   */
  MsgTTL?: number
  /**
   * 不传默认是原生策略，DefaultPolicy表示当订阅下达到最大未确认消息数 5000 时，服务端将不再向当前订阅下的所有消费者推送消息，DynamicPolicy表示动态调整订阅下的最大未确认消息数，具体配额是在 5000 和消费者数量*20之间取最大值。每个消费者默认最大 unack 消息数为 20，超过该限制时仅影响该消费者，不影响其他消费者。
   */
  UnackPolicy?: string
}

/**
 * DescribeCmqTopics返回参数结构体
 */
export interface DescribeCmqTopicsResponse {
  /**
   * 主题列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicList?: Array<CmqTopic>
  /**
   * 全量主题数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQMsgTrace请求参数结构体
 */
export interface DescribeRocketMQMsgTraceRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 命名空间
   */
  EnvironmentId: string
  /**
   * 主题，rocketmq查询死信时值为groupId
   */
  TopicName: string
  /**
   * 消息id
   */
  MsgId: string
  /**
   * 消费组、订阅
   */
  GroupName?: string
  /**
   * 查询死信时该值为true
   * @deprecated
   */
  QueryDLQMsg?: boolean
  /**
   * 查询死信时该值为true
   */
  QueryDeadLetterMessage?: string
}

/**
 * ModifyRocketMQGroup请求参数结构体
 */
export interface ModifyRocketMQGroupRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间
   */
  NamespaceId: string
  /**
   * 消费组名称
   */
  GroupId: string
  /**
   * 说明信息，最长128个字符
   */
  Remark?: string
  /**
   * 是否开启消费
   */
  ReadEnable?: boolean
  /**
   * 是否开启广播消费
   */
  BroadcastEnable?: boolean
  /**
   * 最大重试次数
   */
  RetryMaxTimes?: number
}

/**
 * DescribeCmqTopicDetail请求参数结构体
 */
export interface DescribeCmqTopicDetailRequest {
  /**
   * 精确匹配TopicName。
   */
  TopicName?: string
}

/**
 * UnbindCmqDeadLetter返回参数结构体
 */
export interface UnbindCmqDeadLetterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRocketMQEnvironmentRole请求参数结构体
 */
export interface ModifyRocketMQEnvironmentRoleRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 角色名称。
   */
  RoleName: string
  /**
   * 授权项，最多只能包含produce、consume两项的非空字符串数组。
   */
  Permissions: Array<string>
  /**
   * 必填字段，集群的ID
   */
  ClusterId: string
  /**
   * Topic&Group维度权限配置
   */
  DetailedPerms?: Array<DetailedRolePerm>
}

/**
 * ModifyRocketMQNamespace返回参数结构体
 */
export interface ModifyRocketMQNamespaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 面向运营端的虚拟集群信息
 */
export interface InternalTenant {
  /**
   * 虚拟集群ID
   */
  TenantId?: string
  /**
   * 虚拟集群名称
   */
  TenantName?: string
  /**
   * 客户UIN
   */
  CustomerUin?: string
  /**
   * 客户的APPID
   */
  CustomerAppId?: string
  /**
   * 物理集群名称
   */
  ClusterName?: string
  /**
   * 集群协议类型，支持的值为TDMQ，ROCKETMQ，AMQP，CMQ
   */
  Type?: string
  /**
   * 命名空间配额
   */
  MaxNamespaces?: number
  /**
   * 已使用命名空间配额
   */
  UsedNamespaces?: number
  /**
   * Topic配额
   */
  MaxTopics?: number
  /**
   * 已使用Topic配额
   */
  UsedTopics?: number
  /**
   * Topic分区数配额
   */
  MaxPartitions?: number
  /**
   * 已使用Topic分区数配额
   */
  UsedPartitions?: number
  /**
   * 存储配额, byte为单位
   */
  MaxMsgBacklogSize?: number
  /**
   * 命名空间最大生产TPS
   */
  MaxPublishTps?: number
  /**
   * 消息最大保留时间，秒为单位
   */
  MaxRetention?: number
  /**
   * 创建时间，毫秒为单位
   */
  CreateTime?: number
  /**
   * 修改时间，毫秒为单位
   */
  UpdateTime?: number
  /**
   * 命名空间最大消费TPS
   */
  MaxDispatchTps?: number
  /**
   * 命名空间最大消费带宽，byte为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxDispatchRateInBytes?: number
  /**
   * 命名空间最大生产带宽，byte为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxPublishRateInBytes?: number
  /**
   * 消息最大保留空间，MB为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxRetentionSizeInMB?: number
  /**
   * public Access Enabled
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAccessEnabled?: boolean
}

/**
 * DeleteEnvironments请求参数结构体
 */
export interface DeleteEnvironmentsRequest {
  /**
   * 环境（命名空间）数组，每次最多删除20个。
   */
  EnvironmentIds: Array<string>
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
}

/**
 * DescribeRocketMQClusters请求参数结构体
 */
export interface DescribeRocketMQClustersRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 限制数目
   */
  Limit: number
  /**
   * 按照集群ID关键字搜索
   */
  IdKeyword?: string
  /**
   * 按照集群名称关键字搜索
   */
  NameKeyword?: string
  /**
   * 集群ID列表过滤
   */
  ClusterIdList?: Array<string>
  /**
   * 标签过滤查找时，需要设置为true
   */
  IsTagFilter?: boolean
  /**
   * 过滤器。目前支持标签过滤。
   */
  Filters?: Array<Filter>
}

/**
 * SendRocketMQMessage请求参数结构体
 */
export interface SendRocketMQMessageRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 命名空间
   */
  NamespaceId: string
  /**
   * topic名称
   */
  TopicName: string
  /**
   * 信息内容
   */
  MsgBody: string
  /**
   * 消息key信息
   */
  MsgKey?: string
  /**
   * 消息tag信息
   */
  MsgTag?: string
}

/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRocketMQNamespace请求参数结构体
 */
export interface DeleteRocketMQNamespaceRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  NamespaceId: string
}

/**
 * DescribeRocketMQSmoothMigrationTaskList返回参数结构体
 */
export interface DescribeRocketMQSmoothMigrationTaskListResponse {
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 任务列表
   */
  Data?: Array<RocketMQSmoothMigrationTaskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQSourceClusterTopicList返回参数结构体
 */
export interface DescribeRocketMQSourceClusterTopicListResponse {
  /**
   * topic层列表
   */
  Topics?: Array<RocketMQTopicConfigOutput>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRabbitMQPermission请求参数结构体
 */
export interface DeleteRabbitMQPermissionRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * 用户名，登录时使用
   */
  User: string
  /**
   * vhost名称
   */
  VirtualHost: string
}

/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId?: string
  /**
   * 主题名。
   */
  TopicName?: string
  /**
   * 0或1：非分区topic，无分区；大于1：具体分区topic的分区数。（存量非分区主题返回0，增量非分区主题返回1）
   */
  Partitions?: number
  /**
   * 备注，128字符以内。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 0： 普通消息；
1 ：全局顺序消息；
2 ：局部顺序消息；
3 ：重试队列；
4 ：死信队列；
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicType?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReceiveMessage返回参数结构体
 */
export interface ReceiveMessageResponse {
  /**
   * 用作标识消息的唯一主键
   */
  MessageID?: string
  /**
   * 接收消息的内容
   */
  MessagePayload?: string
  /**
   * 提供给 Ack 接口，用来Ack哪一个topic中的消息
   */
  AckTopic?: string
  /**
   * 返回的错误信息，如果为空，说明没有错误
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 返回订阅者的名字，用来创建 ack consumer时使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubName?: string
  /**
   * BatchReceivePolicy 一次性返回的多条消息的 MessageID，用 ‘###’ 来区分不同的 MessageID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageIDList?: string
  /**
   * BatchReceivePolicy 一次性返回的多条消息的消息内容，用 ‘###’ 来区分不同的消息内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessagesPayload?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRocketMQVipInstance请求参数结构体
 */
export interface CreateRocketMQVipInstanceRequest {
  /**
   * 实例名称
   */
  Name: string
  /**
   * 集群规格，支持规格有 1.通用型:rocket-vip-basic-0; 2.基础型:rocket-vip-basic-1; 3.标准型:rocket-vip-basic-2; 4.高阶Ⅰ型:rocket-vip-basic-3; 5.高阶Ⅱ型:rocket-vip-basic-4
   */
  Spec: string
  /**
   * 节点数量，最小2，最大20
   */
  NodeCount: number
  /**
   * 单节点存储空间，GB为单位，最低200GB
   */
  StorageSize: number
  /**
   * 节点部署的区域ID列表，如广州一区，则是100001，具体可查询腾讯云官网
   */
  ZoneIds: Array<string>
  /**
   * VPC信息
   */
  VpcInfo: VpcInfo
  /**
   * 购买时长，月为单位
   */
  TimeSpan: number
  /**
   * 是否用于迁移上云，默认为false
   */
  SupportsMigrateToCloud?: boolean
  /**
   * 是否开启公网
   */
  EnablePublic?: boolean
  /**
   * 公网带宽，在开启公网情况下为必传字段
   */
  Bandwidth?: number
  /**
   * 公网白名单
   */
  IpRules?: Array<PublicAccessRule>
  /**
   * 标签
   */
  Tags?: Array<Tag>
}

/**
 * Pulsar 网络接入点信息
 */
export interface PulsarNetworkAccessPointInfo {
  /**
   * vpc的id，支撑网和公网接入点，该字段为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网id，支撑网和公网接入点，该字段为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 接入地址
   */
  Endpoint?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 接入点类型：
0：支撑网接入点 
1：VPC接入点 
2：公网接入点
   */
  RouteType?: number
  /**
   * 0：本地域访问，由于并没有配置跨地域容灾，所该类型的接入点，无法进行异地切换、异地访问切回；
1：本地域访问，由于配置了跨地域容灾，随时可以进行异地切换，该状态用于主集群的接入点
2：跨地域访问，已经完成了异地切换，该状态用于源集群的接入点，该状态下的接入点不可删除
3：跨地域访问，随时可以进行异地访问切回，该状态用于目标集群的接入点，该状态下的接入点不可删除
4:跨地域访问，目标集群已经完成异地切回，等待删除状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperationType?: number
  /**
   * 接入点类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessPointsType?: string
  /**
   * 带宽，目前只有公网会有这个值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bandwidth?: number
  /**
   * 类
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityPolicy?: Array<SecurityPolicy>
  /**
   * 是否是标准的接入点 true是标准的 false不是标准的
注意：此字段可能返回 null，表示取不到有效值。
   */
  StandardAccessPoint?: boolean
  /**
   * 可用区信息
   */
  ZoneName?: string
}

/**
 * DescribeRabbitMQVipInstance请求参数结构体
 */
export interface DescribeRabbitMQVipInstanceRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeRabbitMQExchanges请求参数结构体
 */
export interface DescribeRabbitMQExchangesRequest {
  /**
   * 实例 id
   */
  InstanceId: string
  /**
   * vhost 参数
   */
  VirtualHost: string
  /**
   * 分页 offset
   */
  Offset?: number
  /**
   * 分页 limit
   */
  Limit?: number
  /**
   * 搜索关键词, 支持模糊匹配
   */
  SearchWord?: string
  /**
   * 筛选 exchange 类型, 数组中每个元素为选中的过滤类型
   */
  ExchangeTypeFilters?: Array<string>
  /**
   * 筛选 exchange 创建来源,  "system":"系统创建", "user":"用户创建"
   */
  ExchangeCreatorFilters?: Array<string>
  /**
   * exchange 名称，用于精确匹配
   */
  ExchangeName?: string
  /**
   * 排序依据的字段：
MessageRateInOut - 生产消费速率之和；
MessageRateIn - 生产速率；
MessageRateOut - 消费速率；
   */
  SortElement?: string
  /**
   * 排序顺序，ascend 或 descend
   */
  SortOrder?: string
}

/**
 * DeleteTopics请求参数结构体
 */
export interface DeleteTopicsRequest {
  /**
   * 主题集合，每次最多删除20个。
   */
  TopicSets: Array<TopicRecord>
  /**
   * pulsar集群Id。
   */
  ClusterId: string
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId?: string
  /**
   * 是否强制删除，默认为false
   */
  Force?: boolean
}

/**
 * DescribeNamespaceBundlesOpt请求参数结构体
 */
export interface DescribeNamespaceBundlesOptRequest {
  /**
   * 物理集群名
   */
  ClusterName: string
  /**
   * 虚拟集群（租户）ID
   */
  TenantId: string
  /**
   * 命名空间名
   */
  NamespaceName: string
  /**
   * 是否需要监控指标，若传false，则不需要传Limit和Offset分页参数
   */
  NeedMetrics: boolean
  /**
   * 查询限制条数
   */
  Limit?: number
  /**
   * 查询偏移量
   */
  Offset?: number
  /**
   * 过滤的 bundle
   */
  Bundle?: string
  /**
   * bundle 所属的 broker IP 地址，支持模糊查询
   */
  OwnerBroker?: string
}

/**
 * DeleteRocketMQEnvironmentRoles返回参数结构体
 */
export interface DeleteRocketMQEnvironmentRolesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCmqSubscribe请求参数结构体
 */
export interface DeleteCmqSubscribeRequest {
  /**
   * 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  TopicName: string
  /**
   * 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  SubscriptionName: string
}

/**
 * RocketMQ集群配置
 */
export interface RocketMQClusterConfig {
  /**
   * 单命名空间TPS上限
   * @deprecated
   */
  MaxTpsPerNamespace?: number
  /**
   * 最大命名空间数量
   */
  MaxNamespaceNum?: number
  /**
   * 已使用命名空间数量
   */
  UsedNamespaceNum?: number
  /**
   * 最大Topic数量
   */
  MaxTopicNum?: number
  /**
   * 已使用Topic数量
   */
  UsedTopicNum?: number
  /**
   * 最大Group数量
   */
  MaxGroupNum?: number
  /**
   * 已使用Group数量
   */
  UsedGroupNum?: number
  /**
   * 消息最大保留时间，以毫秒为单位
   */
  MaxRetentionTime?: number
  /**
   * 消息最长延时，以毫秒为单位
   */
  MaxLatencyTime?: number
  /**
   * 单个主题最大队列数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxQueuesPerTopic?: number
  /**
   * topic分布
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicDistribution?: Array<RocketMQTopicDistribution>
}

/**
 * SendMsg返回参数结构体
 */
export interface SendMsgResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMsg请求参数结构体
 */
export interface DescribeMsgRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 消息ID。
   */
  MsgId: string
  /**
   * 主题名。
   */
  TopicName: string
  /**
   * Pulsar 集群的ID
   */
  ClusterId?: string
}

/**
 * DeleteRabbitMQPermission返回参数结构体
 */
export interface DeleteRabbitMQPermissionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRabbitMQBinding返回参数结构体
 */
export interface DeleteRabbitMQBindingResponse {
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * vhost参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualHost?: string
  /**
   * 路由关系Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindingId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRabbitMQVipInstance返回参数结构体
 */
export interface ModifyRabbitMQVipInstanceResponse {
  /**
   * 实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQSourceClusterGroupList请求参数结构体
 */
export interface DescribeRocketMQSourceClusterGroupListRequest {
  /**
   * 页大小
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 迁移任务名称
   */
  TaskId: string
  /**
   * 查询过滤器，支持字段groupName，imported
   */
  Filters?: Array<Filter>
}

/**
 * DescribePulsarProInstances请求参数结构体
 */
export interface DescribePulsarProInstancesRequest {
  /**
   * 查询条件过滤器
   */
  Filters?: Array<Filter>
  /**
   * 查询数目上限，默认20
   */
  Limit?: number
  /**
   * 查询起始位置
   */
  Offset?: number
}

/**
 * RocketMQ消费组配置信息
 */
export interface RocketMQGroupConfig {
  /**
   * 命名空间
   */
  Namespace: string
  /**
   * 消费组名称
   */
  GroupName: string
  /**
   * 是否开启广播消费
   */
  ConsumeBroadcastEnable: boolean
  /**
   * 是否开启消费
   */
  ConsumeEnable: boolean
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 协议类型，支持以下枚举值
TCP;
HTTP;
   */
  ConsumerGroupType?: string
}

/**
 * VPC接入点信息
 */
export interface VpcEndpointInfo {
  /**
   * vpc的id
   */
  VpcId: string
  /**
   * 子网id
   */
  SubnetId: string
  /**
   * vpc接入点信息
   */
  VpcEndpoint: string
  /**
   * vpc接入点状态
OFF/ON/CREATING/DELETING
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcDataStreamEndpointStatus?: string
}

/**
 * ClearCmqQueue返回参数结构体
 */
export interface ClearCmqQueueResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicMsgs请求参数结构体
 */
export interface DescribeTopicMsgsRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 主题名。
   */
  TopicName: string
  /**
   * 开始时间。
   */
  StartTime: string
  /**
   * 结束时间。
   */
  EndTime: string
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * 消息ID。
   */
  MsgId?: string
  /**
   * Pulsar 集群的ID
   */
  ClusterId?: string
}

/**
 * DeleteCmqQueue请求参数结构体
 */
export interface DeleteCmqQueueRequest {
  /**
   * 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  QueueName: string
}

/**
 * DeleteRabbitMQUser返回参数结构体
 */
export interface DeleteRabbitMQUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQVirtualHostList返回参数结构体
 */
export interface DescribeRabbitMQVirtualHostListResponse {
  /**
   * 集群列表数量
   */
  TotalCount?: number
  /**
   * 集群列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualHostList?: Array<RabbitMQPrivateVirtualHost>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetRocketMQPublicAccessPoint返回参数结构体
 */
export interface SetRocketMQPublicAccessPointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQTopicMsgs请求参数结构体
 */
export interface DescribeRocketMQTopicMsgsRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 命名空间
   */
  EnvironmentId: string
  /**
   * 主题名称，查询死信时为groupId
   */
  TopicName: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 消息 ID
   */
  MsgId?: string
  /**
   * 消息 key
   */
  MsgKey?: string
  /**
   * 查询偏移
   */
  Offset?: number
  /**
   * 查询限额
   */
  Limit?: number
  /**
   * 标志一次分页事务
   */
  TaskRequestId?: string
  /**
   * 死信查询时该值为true，只对Rocketmq有效
   * @deprecated
   */
  QueryDlqMsg?: boolean
  /**
   * 查询最近N条消息 最大不超过1024，默认-1为其他查询条件
   */
  NumOfLatestMsg?: number
  /**
   * TAG表达式
   */
  Tag?: string
  /**
   * 死信查询时该值为true，只对Rocketmq有效
   */
  QueryDeadLetterMessage?: boolean
}

/**
 * ModifyEnvironmentRole请求参数结构体
 */
export interface ModifyEnvironmentRoleRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 角色名称。
   */
  RoleName: string
  /**
   * 授权项，最多只能包含produce、consume两项的非空字符串数组。
   */
  Permissions: Array<string>
  /**
   * 必填字段，集群的ID
   */
  ClusterId: string
}

/**
 * DescribeRocketMQRoles返回参数结构体
 */
export interface DescribeRocketMQRolesResponse {
  /**
   * 记录数。
   */
  TotalCount?: number
  /**
   * 角色数组。
   */
  RoleSets?: Array<Role>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 订阅关系
 */
export interface SubscriptionTopic {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 主题名称。
   */
  TopicName: string
  /**
   * 订阅名称。
   */
  SubscriptionName: string
}

/**
 * ModifyRocketMQRole请求参数结构体
 */
export interface ModifyRocketMQRoleRequest {
  /**
   * 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。
   */
  RoleName: string
  /**
   * 必填字段，集群Id
   */
  ClusterId: string
  /**
   * 备注说明，长度必须大等于0且小等于128。
   */
  Remark?: string
  /**
   * 权限类型，默认按集群授权（Cluster：集群级别；TopicAndGroup：主题&消费组级别）
   */
  PermType?: string
}

/**
 * DescribeMqMsgTrace请求参数结构体
 */
export interface DescribeMqMsgTraceRequest {
  /**
   * pulsar、rocketmq、rabbitmq、cmq
   */
  Protocol: string
  /**
   * 消息id
   */
  MsgId: string
  /**
   * 集群id，cmq为空
   */
  ClusterId?: string
  /**
   * 命名空间，cmq为空
   */
  EnvironmentId?: string
  /**
   * 主题，cmq为空，rocketmq查询死信时值为groupId
   */
  TopicName?: string
  /**
   * cmq必填，其他协议填空
   */
  QueueName?: string
  /**
   * 消费组、订阅
   */
  GroupName?: string
  /**
   * 查询死信时该值为true，只对Rocketmq有效
   */
  QueryDlqMsg?: boolean
}

/**
 * SendBatchMessages请求参数结构体
 */
export interface SendBatchMessagesRequest {
  /**
   * 消息要发送的topic的名字, 这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default
   */
  Topic: string
  /**
   * 需要发送消息的内容
   */
  Payload: string
  /**
   * String 类型的 token，可以不填，系统会自动获取
   */
  StringToken?: string
  /**
   * producer 的名字，要求全局是唯一的，如果不设置，系统会自动生成
   */
  ProducerName?: string
  /**
   * 单位：s。消息发送的超时时间。默认值为：30s
   */
  SendTimeout?: number
  /**
   * 内存中允许缓存的生产消息的最大数量，默认值：1000条
   */
  MaxPendingMessages?: number
  /**
   * 每一个batch中消息的最大数量，默认值：1000条/batch
   */
  BatchingMaxMessages?: number
  /**
   * 每一个batch最大等待的时间，超过这个时间，不管是否达到指定的batch中消息的数量和大小，都会将该batch发送出去，默认：10ms
   */
  BatchingMaxPublishDelay?: number
  /**
   * 每一个batch中最大允许的消息的大小，默认：128KB
   */
  BatchingMaxBytes?: number
}

/**
 * DescribeRabbitMQNodeList返回参数结构体
 */
export interface DescribeRabbitMQNodeListResponse {
  /**
   * 集群列表数量
   */
  TotalCount?: number
  /**
   * 集群列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeList?: Array<RabbitMQPrivateNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RocketMQ主题配置信息
 */
export interface RocketMQTopicConfig {
  /**
   * 命名空间
   */
  Namespace: string
  /**
   * 主题名称
   */
  TopicName: string
  /**
   * 主题类型：
Normal，普通
PartitionedOrder, 分区顺序
Transaction，事务消息
DelayScheduled，延迟/定时消息
   */
  Type: string
  /**
   * 分区个数
   */
  Partitions: number
  /**
   * 备注信息
   */
  Remark?: string
}

/**
 * 消息生产信息
 */
export interface ProducerLog {
  /**
   * 消息ID。
   */
  MsgId?: string
  /**
   * 生产者名称。
   */
  ProducerName?: string
  /**
   * 消息生产时间。
   */
  ProduceTime?: string
  /**
   * 生产者客户端。
   */
  ProducerAddr?: string
  /**
   * 生产耗时（秒）。
   */
  ProduceUseTime?: number
  /**
   * 状态。
   */
  Status?: string
}

/**
 * DescribePublisherSummary请求参数结构体
 */
export interface DescribePublisherSummaryRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  Namespace: string
  /**
   * 主题名称
   */
  Topic: string
}

/**
 * Pulsar专业版集群信息
 */
export interface PulsarProClusterInfo {
  /**
   * 集群Id。
   */
  ClusterId?: string
  /**
   * 集群名称。
   */
  ClusterName?: string
  /**
   * 说明信息。
   */
  Remark?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 集群状态，0:创建中，1:正常，2:隔离
   */
  Status?: number
  /**
   * 集群版本
   */
  Version?: string
  /**
   * 节点分布情况
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeDistribution?: Array<InstanceNodeDistribution>
  /**
   * 最大储存容量，单位：MB
   */
  MaxStorage?: number
  /**
   * 是否可以修改路由
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanEditRoute?: boolean
  /**
   * 代表是专业版和小规格专业版的不同计费规格PULSAR.P1固定存储PULSAR.P2弹性存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingLabelVersion?: string
  /**
   * 实例到期时间戳，毫秒级精度。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: number
  /**
   * 是否开启自动创建主题
true就是开启了，false是关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoCreateTopicStatus?: boolean
  /**
   * 自动创建主题的默认分区数，如果没开启就是0
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultPartitionNumber?: number
}

/**
 * ModifyRocketMQGroup返回参数结构体
 */
export interface ModifyRocketMQGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 环境角色集合
 */
export interface EnvironmentRole {
  /**
   * 环境（命名空间）。
   */
  EnvironmentId?: string
  /**
   * 角色名称。
   */
  RoleName?: string
  /**
   * 授权项，最多只能包含produce、consume两项的非空字符串数组。
   */
  Permissions?: Array<string>
  /**
   * 角色描述。
   */
  RoleDescribe?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
}

/**
 * ImportRocketMQTopics请求参数结构体
 */
export interface ImportRocketMQTopicsRequest {
  /**
   * 导入topic
   */
  Topics: Array<RocketMQTopicConfig>
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * DeleteRabbitMQVipInstance返回参数结构体
 */
export interface DeleteRabbitMQVipInstanceResponse {
  /**
   * 订单号Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 实例Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * RabbitMQ集群访问信息
 */
export interface RabbitMQClusterAccessInfo {
  /**
   * 集群公网接入地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAccessEndpoint?: string
  /**
   * 集群控制台访问地址
   */
  WebConsoleEndpoint?: string
  /**
   * 集群控制台登录用户名
   */
  WebConsoleUsername?: string
  /**
   * 集群控制台登录密码
   */
  WebConsolePassword?: string
  /**
   * 已废弃
   */
  PublicAccessEndpointStatus?: boolean
  /**
   * 已废弃
   */
  PublicControlConsoleSwitchStatus?: boolean
  /**
   * 已废弃
   */
  VpcControlConsoleSwitchStatus?: boolean
  /**
   * Vpc管控台访问地址，示例值，http://1.1.1.1:15672
   */
  VpcWebConsoleEndpoint?: string
  /**
   * 公网管控台开关状态，示例值，OFF/ON/CREATING/DELETING
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicWebConsoleSwitchStatus?: string
  /**
   * Vpc管控台开关状态，示例值，
OFF/ON/CREATING/DELETING
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcWebConsoleSwitchStatus?: string
  /**
   * 公网管控台开关状态，示例值，OFF/ON/CREATING/DELETING
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicDataStreamStatus?: string
  /**
   * Prometheus信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrometheusEndpointInfo?: PrometheusEndpointInfo
  /**
   * 公网域名接入点
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebConsoleDomainEndpoint?: string
}

/**
 * DescribeBindClusters返回参数结构体
 */
export interface DescribeBindClustersResponse {
  /**
   * 专享集群的数量
   */
  TotalCount?: number
  /**
   * 专享集群的列表
   */
  ClusterSet?: Array<BindCluster>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRabbitMQVirtualHost请求参数结构体
 */
export interface ModifyRabbitMQVirtualHostRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * vhost名
   */
  VirtualHost: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 消息轨迹开关,true打开,false关闭
   */
  TraceFlag?: boolean
}

/**
 * ReceiveMessage请求参数结构体
 */
export interface ReceiveMessageRequest {
  /**
   * 接收消息的topic的名字, 这里尽量需要使用topic的全路径，如果不指定，即：tenant/namespace/topic。默认使用的是：public/default
   */
  Topic: string
  /**
   * 订阅者的名字
   */
  SubscriptionName: string
  /**
   * 默认值为1000，consumer接收的消息会首先存储到receiverQueueSize这个队列中，用作调优接收消息的速率
   */
  ReceiverQueueSize?: number
  /**
   * 默认值为：Earliest。用作判定consumer初始接收消息的位置，可选参数为：Earliest, Latest
   */
  SubInitialPosition?: string
  /**
   * 用于设置BatchReceivePolicy，指在一次batch中最多接收多少条消息，默认是 0。即不开启BatchReceivePolicy
   */
  MaxNumMessages?: number
  /**
   * 用于设置BatchReceivePolicy，指在一次batch中最多接收的消息体有多大，单位是 bytes。默认是 0，即不开启BatchReceivePolicy
   */
  MaxNumBytes?: number
  /**
   * 用于设置BatchReceivePolicy，指在一次batch消息的接收z中最多等待的超时时间，单位是毫秒。默认是 0，即不开启BatchReceivePolicy
   */
  Timeout?: number
}

/**
 * 在线消费者情况
 */
export interface RocketMQConsumerConnection {
  /**
   * 消费者实例ID
   */
  ClientId?: string
  /**
   * 消费者实例的地址和端口
   */
  ClientAddr?: string
  /**
   * 消费者应用的语言版本
   */
  Language?: string
  /**
   * 消息堆积量
   */
  Accumulative?: number
  /**
   * 消费端版本
   */
  Version?: string
}

/**
 * CreateRabbitMQVipInstance请求参数结构体
 */
export interface CreateRabbitMQVipInstanceRequest {
  /**
   * 可用区
   */
  ZoneIds: Array<number | bigint>
  /**
   * 私有网络VpcId
   */
  VpcId: string
  /**
   * 私有网络SubnetId
   */
  SubnetId: string
  /**
   * 集群名称
   */
  ClusterName: string
  /**
   * 节点规格,基础型rabbit-vip-basic-1,标准型rabbit-vip-basic-2,高阶1型rabbit-vip-basic-3,高阶2型rabbit-vip-basic-4。不传默认为基础型
   */
  NodeSpec?: string
  /**
   * 节点数量,多可用区最少为3节点。不传默认单可用区为1,多可用区为3
   */
  NodeNum?: number
  /**
   * 单节点存储规格,不传默认为200G
   */
  StorageSize?: number
  /**
   * 镜像队列,不传默认为false
   */
  EnableCreateDefaultHaMirrorQueue?: boolean
  /**
   * 预付费使用。自动续费,不传默认为true
   */
  AutoRenewFlag?: boolean
  /**
   * 购买时长,不传默认为1(月)
   */
  TimeSpan?: number
  /**
   * 付费方式，0 为后付费，即按量计费；1 为预付费，即包年包月。默认包年包月
   */
  PayMode?: number
  /**
   * 集群版本，不传默认为 3.8.30，可选值为 3.8.30 和 3.11.8
   */
  ClusterVersion?: string
  /**
   * 是否国际站请求，默认 false
   */
  IsIntl?: boolean
  /**
   * 资源标签列表
   */
  ResourceTags?: Array<Tag>
  /**
   * 公网带宽大小，单位 M
   */
  Bandwidth?: number
  /**
   * 是否打开公网接入，不传默认为false
   */
  EnablePublicAccess?: boolean
}

/**
 * DescribeRabbitMQPermission返回参数结构体
 */
export interface DescribeRabbitMQPermissionResponse {
  /**
   * 返回权限数量
   */
  TotalCount?: number
  /**
   * 权限详情列表
   */
  RabbitMQPermissionList?: Array<RabbitMQPermission>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQSmoothMigrationTask请求参数结构体
 */
export interface DescribeRocketMQSmoothMigrationTaskRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
  /**
   * 集群Id，传入需要删除的集群Id。
   */
  ClusterId: string
}

/**
 * cmq订阅返回参数
 */
export interface CmqSubscription {
  /**
   * 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscriptionName?: string
  /**
   * 订阅 ID。订阅 ID 在拉取监控数据时会用到。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscriptionId?: string
  /**
   * 订阅拥有者的 APPID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicOwner?: number
  /**
   * 该订阅待投递的消息数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgCount?: number
  /**
   * 最后一次修改订阅属性的时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastModifyTime?: number
  /**
   * 订阅的创建时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 表示订阅接收消息的过滤策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindingKey?: Array<string>
  /**
   * 接收通知的 endpoint，根据协议 protocol 区分：对于 HTTP，endpoint 必须以http://开头，host 可以是域名或 IP；对于 queue，则填 queueName。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Endpoint?: string
  /**
   * 描述用户创建订阅时选择的过滤策略：
filterType = 1表示用户使用 filterTag 标签过滤
filterType = 2表示用户使用 bindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterTags?: Array<string>
  /**
   * 订阅的协议，目前支持两种协议：HTTP、queue。使用 HTTP 协议，用户需自己搭建接受消息的 Web Server。使用 queue，消息会自动推送到 CMQ queue，用户可以并发地拉取消息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
  /**
   * 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值有：
（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；
（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始 1s，后面是 2s，4s，8s...由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyStrategy?: string
  /**
   * 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 protocol 是 queue，则取值必须为 SIMPLIFIED。如果 protocol 是 HTTP，两个值均可以，默认值是 JSON。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyContentFormat?: string
  /**
   * 订阅所属的主题名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
}

/**
 * RocketMQ主题配置信息
 */
export interface RocketMQTopicConfigOutput {
  /**
   * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * 主题名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 主题类型：
Normal，普通
GlobalOrder， 全局顺序
PartitionedOrder, 分区顺序
Transaction，事务消息
DelayScheduled，延迟/定时消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 分区个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 是否导入
注意：此字段可能返回 null，表示取不到有效值。
   */
  Imported?: boolean
}

/**
 * RocketMQ平滑迁移任务
 */
export interface RocketMQSmoothMigrationTaskItem {
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
   * 目标集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
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
   * 任务状态
Configuration 迁移配置
SourceConnecting 连接源集群中
MetaDataImport 元数据导入
EndpointSetup 切换接入点
ServiceMigration 切流中
Completed 已完成
Cancelled 已取消
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskStatus?: string
}

/**
 * vpc信息（由UniqVpcId和UniqSubnetId组成）
 */
export interface VpcInfo {
  /**
   * vpc信息
   */
  VpcId: string
  /**
   * 子网信息
   */
  SubnetId: string
}

/**
 * DeleteCmqTopic返回参数结构体
 */
export interface DeleteCmqTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRocketMQNamespace请求参数结构体
 */
export interface CreateRocketMQNamespaceRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_”
   */
  NamespaceId: string
  /**
   * 已废弃
   */
  Ttl?: number
  /**
   * 已废弃
   */
  RetentionTime?: number
  /**
   * 说明，最大128个字符
   */
  Remark?: string
}

/**
 * RocketMQ消费组订阅信息
 */
export interface RocketMQSubscription {
  /**
   * 主题名称
   */
  Topic?: string
  /**
   * 主题类型：
Normal 普通,
GlobalOrder 全局顺序,
PartitionedOrder 局部顺序,
Transaction 事务消息,
DelayScheduled 延时消息,
Retry 重试,
DeadLetter 死信
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 分区数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionNum?: number
  /**
   * 过滤模式，TAG，SQL
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpressionType?: string
  /**
   * 过滤表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubString?: string
  /**
   * 订阅状态：
0，订阅关系一致
1，订阅关系不一致
2，未知
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 消费堆积数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerLag?: number
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
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
0: 广播消费
1: 集群消费
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumeType?: number
  /**
   * 订阅一致性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Consistency?: number
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
   * 协议类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientProtocol?: string
  /**
   * 客户端订阅详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientSubscriptionInfos?: Array<ClientSubscriptionInfo>
}

/**
 * exchange使用配额信息
 */
export interface ExchangeQuota {
  /**
   * 可创建最大exchange数
   */
  MaxExchange?: number
  /**
   * 已创建exchange数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedExchange?: number
}

/**
 * ModifyRabbitMQVirtualHost返回参数结构体
 */
export interface ModifyRabbitMQVirtualHostResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RabbitMQ队列列表消费者信息
 */
export interface RabbitMQQueueListConsumerDetailInfo {
  /**
   * 消费者数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumersNumber: number
}

/**
 * ExportRocketMQMessageDetail返回参数结构体
 */
export interface ExportRocketMQMessageDetailResponse {
  /**
   * 消息id
   */
  MsgId?: string
  /**
   * 消息生成时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  BornTimestamp?: number
  /**
   * 消息存储时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoreTimestamp?: number
  /**
   * 消息生产客户端地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  BornHost?: string
  /**
   * 消息Tag
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgTag?: string
  /**
   * 消息Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgKey?: string
  /**
   * 消息属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: string
  /**
   * 消息重试次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReConsumeTimes?: number
  /**
   * Base64编码格式字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgBody?: string
  /**
   * 消息内容的CRC32 Code
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgBodyCRC?: number
  /**
   * 消息体大小（单位K）
当大于2048时不返回消息
   */
  MsgBodySize?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSubscription返回参数结构体
 */
export interface CreateSubscriptionResponse {
  /**
   * 创建结果。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportRocketMQConsumerGroups返回参数结构体
 */
export interface ImportRocketMQConsumerGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQConsumerConnections返回参数结构体
 */
export interface DescribeRocketMQConsumerConnectionsResponse {
  /**
   * 总数目
   */
  TotalCount?: number
  /**
   * 在线消费者信息
   */
  Connections?: Array<RocketMQConsumerConnection>
  /**
   * 订阅组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupDetail?: RocketMQGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCmqSubscriptionDetail请求参数结构体
 */
export interface DescribeCmqSubscriptionDetailRequest {
  /**
   * 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
   */
  TopicName?: string
  /**
   * 分页时本页获取主题列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
   */
  Offset?: number
  /**
   * 分页时本页获取主题的个数，如果不传递该参数，则该参数默认为20，最大值为50。
   */
  Limit?: number
  /**
   * 根据SubscriptionName进行模糊搜索
   */
  SubscriptionName?: string
  /**
   * 队列名称，订阅绑定的endpoint
   */
  QueueName?: string
  /**
   * 查询类型。取值：（1）topic；（2）queue。
默认值是topic。如果 queryType 是 topic，则查询主题下的订阅列表；如果 queryType 是 queue，则查询队列绑定的订阅列表。
   */
  QueryType?: string
}

/**
 * DescribeRocketMQCluster返回参数结构体
 */
export interface DescribeRocketMQClusterResponse {
  /**
   * 集群信息
   */
  ClusterInfo?: RocketMQClusterInfo
  /**
   * 集群配置
   */
  ClusterConfig?: RocketMQClusterConfig
  /**
   * 集群最近使用量，即将废弃，请使用腾讯云可观测平台获取相关数据。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterStats?: RocketMQClusterRecentStats
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AMQP集群配置
 */
export interface AMQPClusterConfig {
  /**
   * 单Vhost TPS上限
   */
  MaxTpsPerVHost: number
  /**
   * 单Vhost客户端连接数上限
   */
  MaxConnNumPerVHost: number
  /**
   * 最大Vhost数量
   */
  MaxVHostNum: number
  /**
   * 最大exchange数量
   */
  MaxExchangeNum: number
  /**
   * 最大Queue数量
   */
  MaxQueueNum: number
  /**
   * 消息最大保留时间，以毫秒为单位
   */
  MaxRetentionTime: number
  /**
   * 已使用Vhost数量
   */
  UsedVHostNum: number
  /**
   * 已使用exchange数量
   */
  UsedExchangeNum: number
  /**
   * 已使用queue数量
   */
  UsedQueueNum: number
}

/**
 * 服务方信息
 */
export interface ServerLog {
  /**
   * 存储时间。
   */
  SaveTime?: string
  /**
   * 状态。
   */
  Status?: string
}

/**
 * DescribeMsgTrace返回参数结构体
 */
export interface DescribeMsgTraceResponse {
  /**
   * 生产信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProducerLog?: ProducerLog
  /**
   * 服务方信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerLog?: ServerLog
  /**
   * 消费信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerLogs?: ConsumerLogs
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCluster请求参数结构体
 */
export interface ModifyClusterRequest {
  /**
   * Pulsar 集群的ID，需要更新的集群Id。
   */
  ClusterId: string
  /**
   * 更新后的集群名称。
   */
  ClusterName?: string
  /**
   * 说明信息。长度限制为 128 字节
   */
  Remark?: string
  /**
   * 开启公网访问，只能为true
   */
  PublicAccessEnabled?: boolean
}

/**
 * CreateRocketMQVipInstance返回参数结构体
 */
export interface CreateRocketMQVipInstanceResponse {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcknowledgeMessage请求参数结构体
 */
export interface AcknowledgeMessageRequest {
  /**
   * 用作标识消息的唯一的ID（可从 receiveMessage 的返回值中获得）
   */
  MessageId: string
  /**
   * Topic 名字（可从 receiveMessage 的返回值中获得）这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default
   */
  AckTopic: string
  /**
   * 订阅者的名字，可以从receiveMessage的返回值中获取到。这里尽量与receiveMessage中的订阅者保持一致，否则没办法正确ack 接收回来的消息。
   */
  SubName: string
}

/**
 * RabbitMQ队列列表成员信息
 */
export interface RabbitMQQueueListInfo {
  /**
   * 队列名
   */
  QueueName?: string
  /**
   * 备注说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 消费者信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerDetail?: RabbitMQQueueListConsumerDetailInfo
  /**
   * 队列类型，取值 "classic"，"quorum"
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueType?: string
  /**
   * 消息堆积数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageHeapCount?: number
  /**
   * 消息生产速率，每秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageRateIn?: number
  /**
   * 消息消费速率，每秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageRateOut?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 队列是否持久化，true 为持久化，false 为非持久化
注意：此字段可能返回 null，表示取不到有效值。
   */
  Durable?: boolean
  /**
   * 队列是否为自动删除队列，true 为自动删除，false 为非自动删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoDelete?: boolean
  /**
   * 队列所属实例 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 队列所属虚拟主机名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualHost?: string
  /**
   * 队列所在主节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Node?: string
  /**
   * 生效的策略名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Policy?: string
  /**
   * 扩展参数 key-value 对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Arguments?: string
  /**
   * 是否独占队列
注意：此字段可能返回 null，表示取不到有效值。
   */
  Exclusive?: boolean
}

/**
 * DescribeMsg返回参数结构体
 */
export interface DescribeMsgResponse {
  /**
   * 消息属性。
   */
  Properties?: string
  /**
   * 消息体。
   */
  Body?: string
  /**
   * 批次ID。
   */
  BatchId?: string
  /**
   * 生产时间。
   */
  ProduceTime?: string
  /**
   * 消息ID。
   */
  MsgId?: string
  /**
   * 生产者名称。
   */
  ProducerName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProCluster返回参数结构体
 */
export interface CreateProClusterResponse {
  /**
   * 子订单号
   */
  DealName?: string
  /**
   * 订单号
   */
  BigDealId?: string
  /**
   * 集群Id
   */
  ClusterId?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRocketMQInstance请求参数结构体
 */
export interface ModifyRocketMQInstanceRequest {
  /**
   * 专享实例ID
   */
  InstanceId: string
  /**
   * 实例名称
   */
  Name?: string
  /**
   * 实例备注信息
   */
  Remark?: string
  /**
   * 实例消息保留时间，小时为单位
   */
  MessageRetention?: number
}

/**
 * 标签的key/value的类型
 */
export interface Tag {
  /**
   * 标签的key的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey: string
  /**
   * 标签的Value的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue: string
}

/**
 * CreateProCluster请求参数结构体
 */
export interface CreateProClusterRequest {
  /**
   * 多可用区部署选择三个可用区，示例[200002,200003,200004]

单可用区部署选择一个可用区，示例[200002]
   */
  ZoneIds: Array<number | bigint>
  /**
   * 集群规格代号
参考 [专业集群规格](https://cloud.tencent.com/document/product/1179/83705)
   */
  ProductName: string
  /**
   * 存储规格
参考 [专业集群规格](https://cloud.tencent.com/document/product/1179/83705)
   */
  StorageSize: number
  /**
   * 1: true，开启自动按月续费

0: false，关闭自动按月续费
   */
  AutoRenewFlag: number
  /**
   * 购买时长，取值范围：1～50
   */
  TimeSpan: number
  /**
   * 集群名称，不支持中字以及除了短线和下划线外的特殊字符且不超过64个字符。
   */
  ClusterName: string
  /**
   * 是否自动选择代金券 1是 0否 默认为0
   */
  AutoVoucher: number
  /**
   * vpc网络标签
   */
  Vpc?: VpcInfo
  /**
   * 集群的标签列表(已废弃)
   */
  Tags?: Array<Tag>
}

/**
 * DescribeRabbitMQVipInstances返回参数结构体
 */
export interface DescribeRabbitMQVipInstancesResponse {
  /**
   * 未分页的总数目
   */
  TotalCount?: number
  /**
   * 实例信息列表
   */
  Instances?: Array<RabbitMQVipInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRoles请求参数结构体
 */
export interface DeleteRolesRequest {
  /**
   * 角色名称数组。
   */
  RoleNames: Array<string>
  /**
   * 必填字段，集群Id
   */
  ClusterId: string
}

/**
 * ClearCmqQueue请求参数结构体
 */
export interface ClearCmqQueueRequest {
  /**
   * 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  QueueName: string
}

/**
 * CreateRocketMQEnvironmentRole请求参数结构体
 */
export interface CreateRocketMQEnvironmentRoleRequest {
  /**
   * 命名空间
   */
  EnvironmentId: string
  /**
   * 角色名称。
   */
  RoleName: string
  /**
   * 授权项，最多只能包含produce、consume两项的非空字符串数组。
   */
  Permissions: Array<string>
  /**
   * 必填字段，集群的ID
   */
  ClusterId: string
  /**
   * Topic&Group维度权限配置
   */
  DetailedPerms?: Array<DetailedRolePerm>
}

/**
 * SetRocketMQPublicAccessPoint请求参数结构体
 */
export interface SetRocketMQPublicAccessPointRequest {
  /**
   * 集群ID，当前只支持专享集群
   */
  InstanceId: string
  /**
   * 开启或关闭访问
   */
  Enabled: boolean
  /**
   * 带宽大小，开启或者调整公网时必须指定，Mbps为单位
   */
  Bandwidth?: number
  /**
   * 付费模式，开启公网时必须指定，0为按小时计费，1为包年包月，当前只支持按小时计费
   */
  PayMode?: number
  /**
   * 公网访问安全规则列表，Enabled为true时必须传入
   */
  Rules?: Array<PublicAccessRule>
  /**
   * 公网是否按流量计费
   */
  BillingFlow?: boolean
}

/**
 * DeleteEnvironments返回参数结构体
 */
export interface DeleteEnvironmentsResponse {
  /**
   * 成功删除的环境（命名空间）数组。
   */
  EnvironmentIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAMQPCluster请求参数结构体
 */
export interface ModifyAMQPClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 3-64个字符，只能包含字母、数字、“-”及“_”
   */
  ClusterName: string
  /**
   * 说明信息，不超过128个字符
   */
  Remark?: string
}

/**
 * DescribeRabbitMQBindings返回参数结构体
 */
export interface DescribeRabbitMQBindingsResponse {
  /**
   * 路由关系列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindingInfoList?: Array<RabbitMQBindingListInfo>
  /**
   * 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤订阅列表
 */
export interface FilterSubscription {
  /**
   * 是否仅展示包含真实消费者的订阅。
   */
  ConsumerHasCount?: boolean
  /**
   * 是否仅展示消息堆积的订阅。
   */
  ConsumerHasBacklog?: boolean
  /**
   * 是否仅展示存在消息超期丢弃的订阅。
   */
  ConsumerHasExpired?: boolean
  /**
   * 按照订阅名过滤，精确查询。
   */
  SubscriptionNames?: Array<string>
}

/**
 * Topic状态
 */
export interface TopicStats {
  /**
   * 所属Broker节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  BrokerName?: string
  /**
   * 队列编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueId?: number
  /**
   * 最小位点
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinOffset?: number
  /**
   * 最大位点
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxOffset?: number
  /**
   * 消息条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageCount?: number
  /**
   * 消息最后写入时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTimestamp?: number
}

/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
  /**
   * 集群列表数量
   */
  TotalCount?: number
  /**
   * 集群信息列表
   */
  ClusterSet?: Array<Cluster>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClearCmqSubscriptionFilterTags请求参数结构体
 */
export interface ClearCmqSubscriptionFilterTagsRequest {
  /**
   * 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
   */
  TopicName: string
  /**
   * 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  SubscriptionName: string
}

/**
 * CreateRocketMQGroup返回参数结构体
 */
export interface CreateRocketMQGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRocketMQNamespace请求参数结构体
 */
export interface ModifyRocketMQNamespaceRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称，3-64个字符，只能包含字母、数字、“-”及“_”
   */
  NamespaceId: string
  /**
   * 已废弃
   */
  Ttl?: number
  /**
   * 已废弃
   */
  RetentionTime?: number
  /**
   * 说明，最大128个字符
   */
  Remark?: string
  /**
   * 是否开启公网访问
   */
  PublicAccessEnabled?: boolean
}

/**
 * ModifyRocketMQTopic返回参数结构体
 */
export interface ModifyRocketMQTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRocketMQRole返回参数结构体
 */
export interface CreateRocketMQRoleResponse {
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * 角色token
   */
  Token?: string
  /**
   * 备注说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRocketMQGroup返回参数结构体
 */
export interface DeleteRocketMQGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Pulsar专业版实例信息
 */
export interface PulsarProInstance {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例版本
   */
  InstanceVersion?: string
  /**
   * 实例状态，0-创建中，1-正常，2-隔离中，3-已销毁，4 - 异常, 5 - 发货失败，6-变配中，7-变配失败
   */
  Status?: number
  /**
   * 实例配置规格名称
   */
  ConfigDisplay?: string
  /**
   * 峰值TPS
   */
  MaxTps?: number
  /**
   * 存储容量，GB为单位
   */
  MaxStorage?: number
  /**
   * 实例到期时间，毫秒为单位
   */
  ExpireTime?: number
  /**
   * 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)
   */
  AutoRenewFlag?: number
  /**
   * 0-后付费，1-预付费
   */
  PayMode?: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 实例配置ID
   */
  SpecName?: string
  /**
   * 规格外弹性TPS
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScalableTps?: number
  /**
   * VPC的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 峰值带宽。单位：mbps
   */
  MaxBandWidth?: number
  /**
   * 集群的标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 集群创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 代表是专业版和小规格专业版的不同计费规格PULSAR.P1固定存储PULSAR.P2弹性存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingLabelVersion?: string
}

/**
 * 迁移主题的阶段分布
 */
export interface RocketMQMigrationTopicDistribution {
  /**
   * 迁移主题阶段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Stage?: string
  /**
   * 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
}

/**
 * DescribeRocketMQCluster请求参数结构体
 */
export interface DescribeRocketMQClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeAMQPClusters请求参数结构体
 */
export interface DescribeAMQPClustersRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 限制数目
   */
  Limit: number
  /**
   * 按照集群ID关键字搜索
   */
  IdKeyword?: string
  /**
   * 按照集群名称关键字搜索
   */
  NameKeyword?: string
  /**
   * 集群ID列表过滤
   */
  ClusterIdList?: Array<string>
  /**
   * 标签过滤查找时，需要设置为true
   */
  IsTagFilter?: boolean
  /**
   * 过滤器。目前支持按标签过滤。
   */
  Filters?: Array<Filter>
}

/**
 * 批量绑定名字空间和角色权限关系
 */
export interface EnvironmentRoleSet {
  /**
   * 需要绑定的命名空间Id，不重复且存在资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentId: string
  /**
   * 名字空间需要绑定的权限，枚举为 "consume" "produce" 组合，但是不为空

注意：此字段可能返回 null，表示取不到有效值。
   */
  Permissions: Array<string>
}

/**
 * DescribeEnvironments返回参数结构体
 */
export interface DescribeEnvironmentsResponse {
  /**
   * 命名空间记录数。
   */
  TotalCount?: number
  /**
   * 命名空间集合数组。
   */
  EnvironmentSet?: Array<Environment>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AMQP集群基本信息
 */
export interface AMQPClusterInfo {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 集群名称
   */
  ClusterName: string
  /**
   * 地域信息
   */
  Region: string
  /**
   * 创建时间，毫秒为单位
   */
  CreateTime: number
  /**
   * 集群说明信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
  /**
   * 公网接入地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicEndPoint: string
  /**
   * VPC接入地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcEndPoint: string
}

/**
 * ModifyRocketMQInstanceSpec返回参数结构体
 */
export interface ModifyRocketMQInstanceSpecResponse {
  /**
   * 订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrderId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTopicList返回参数结构体
 */
export interface GetTopicListResponse {
  /**
   * 主题数量。
   */
  TotalCount?: number
  /**
   * 主题列表
   */
  TopicList?: Array<Topic_Simplification>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMsgTrace请求参数结构体
 */
export interface DescribeMsgTraceRequest {
  /**
   * 环境（命名空间）。
   */
  EnvironmentId: string
  /**
   * 消息ID。
   */
  MsgId: string
  /**
   * 消息生产时间。
   */
  ProduceTime: string
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * 消费组名称模糊匹配。
   */
  SubscriptionName?: string
  /**
   * Pulsar 集群的ID
   */
  ClusterId?: string
}

/**
 * DescribeCmqTopics请求参数结构体
 */
export interface DescribeCmqTopicsRequest {
  /**
   * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
   */
  Offset?: number
  /**
   * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
   */
  Limit?: number
  /**
   * 根据TopicName进行模糊搜索
   */
  TopicName?: string
  /**
   * CMQ 主题名称列表过滤
   */
  TopicNameList?: Array<string>
  /**
   * 标签过滤查找时，需要设置为 true
   */
  IsTagFilter?: boolean
  /**
   * 过滤器。目前支持按标签过滤，标签的Name需要加前缀“tag:”，例如：tag:负责人、tag:环境、tag:业务
   */
  Filters?: Array<Filter>
}

/**
 * 消费日志
 */
export interface ConsumerLog {
  /**
   * 消息ID。
   */
  MsgId: string
  /**
   * 消费组。
   */
  ConsumerGroup: string
  /**
   * 消费者名称。
   */
  ConsumerName: string
  /**
   * 消费时间。
   */
  ConsumeTime: string
  /**
   * 消费者客户端地址。
   */
  ConsumerAddr: string
  /**
   * 消费耗时（毫秒）。
   */
  ConsumeUseTime: number
  /**
   * 消费状态。
   */
  Status: string
}

/**
 * CreateEnvironmentRole返回参数结构体
 */
export interface CreateEnvironmentRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * rabbitmq Prometheus信息
 */
export interface PrometheusEndpointInfo {
  /**
   * Prometheus开关的状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrometheusEndpointStatus?: string
  /**
   * prometheus信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcPrometheusEndpoint?: Array<string>
  /**
   * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePrometheusAddress?: Array<string>
  /**
   * vpc信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcEndpointInfo?: VpcEndpointInfo
}

/**
 * 集群信息集合
 */
export interface Cluster {
  /**
   * 集群Id。
   */
  ClusterId?: string
  /**
   * 集群名称。
   */
  ClusterName?: string
  /**
   * 说明信息。
   */
  Remark?: string
  /**
   * 接入点数量
   */
  EndPointNum?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 集群是否健康，1表示健康，0表示异常
   */
  Healthy?: number
  /**
   * 集群健康信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  HealthyInfo?: string
  /**
   * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
   */
  Status?: number
  /**
   * 最大命名空间数量
   */
  MaxNamespaceNum?: number
  /**
   * 最大Topic数量
   */
  MaxTopicNum?: number
  /**
   * 最大QPS
   */
  MaxQps?: number
  /**
   * 最大消息保留时间，秒为单位
   */
  MessageRetentionTime?: number
  /**
   * 最大存储容量
   */
  MaxStorageCapacity?: number
  /**
   * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 公网访问接入点
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicEndPoint?: string
  /**
   * VPC访问接入点
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcEndPoint?: string
  /**
   * 命名空间数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceNum?: number
  /**
   * 已使用存储限制，MB为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedStorageBudget?: number
  /**
   * 最大生产消息速率，以条数为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxPublishRateInMessages?: number
  /**
   * 最大推送消息速率，以条数为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxDispatchRateInMessages?: number
  /**
   * 最大生产消息速率，以字节为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxPublishRateInBytes?: number
  /**
   * 最大推送消息速率，以字节为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxDispatchRateInBytes?: number
  /**
   * 已创建主题数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNum?: number
  /**
   * 最长消息延时，以秒为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxMessageDelayInSeconds?: number
  /**
   * 是否开启公网访问，不填时默认开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicAccessEnabled?: boolean
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 计费模式：
0: 按量计费
1: 包年包月
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: number
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: number
  /**
   * 项目名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
}

/**
 * rocketmq消息日志
 */
export interface RocketMQMsgLog {
  /**
   * 消息id
   */
  MsgId?: string
  /**
   * 消息tag
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgTag?: string
  /**
   * 消息key
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgKey?: string
  /**
   * 客户端地址
   */
  ProducerAddr?: string
  /**
   * 消息发送时间
   */
  ProduceTime?: string
  /**
   * pulsar消息id
   */
  PulsarMsgId?: string
  /**
   * 死信重发次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterResendTimes?: number
  /**
   * 死信重发成功次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResendSuccessCount?: number
}

/**
 * CreateRocketMQCluster返回参数结构体
 */
export interface CreateRocketMQClusterResponse {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRocketMQNamespace返回参数结构体
 */
export interface DeleteRocketMQNamespaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRocketMQTopic请求参数结构体
 */
export interface CreateRocketMQTopicRequest {
  /**
   * 主题名称，3-64个字符，只能包含字母、数字、“-”及“_”
   */
  Topic: string
  /**
   * 主题所在的命名空间，目前支持在单个命名空间下创建主题
   */
  Namespaces: Array<string>
  /**
   * 主题类型，可选值为Normal, GlobalOrder, PartitionedOrder, Transaction, DelayScheduled。Transaction仅在专享版支持。
   */
  Type: string
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 主题说明，最大128个字符
   */
  Remark?: string
  /**
   * 分区数，全局顺序无效
   */
  PartitionNum?: number
}

/**
 * DescribeRocketMQVipInstances返回参数结构体
 */
export interface DescribeRocketMQVipInstancesResponse {
  /**
   * 未分页的总数目
   */
  TotalCount?: number
  /**
   * 实例信息列表
   */
  Instances?: Array<RocketMQVipInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRocketMQCluster请求参数结构体
 */
export interface DeleteRocketMQClusterRequest {
  /**
   * 待删除的集群Id。
   */
  ClusterId: string
}

/**
 * DescribePulsarProInstances返回参数结构体
 */
export interface DescribePulsarProInstancesResponse {
  /**
   * 未分页的总数目
   */
  TotalCount?: number
  /**
   * 实例信息列表
   */
  Instances?: Array<PulsarProInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RocketMQ专享集群实例配置
 */
export interface RocketMQInstanceConfig {
  /**
   * 单命名空间TPS上线
   */
  MaxTpsPerNamespace?: number
  /**
   * 最大命名空间数量
   */
  MaxNamespaceNum?: number
  /**
   * 已使用命名空间数量
   */
  UsedNamespaceNum?: number
  /**
   * 最大Topic数量
   */
  MaxTopicNum?: number
  /**
   * 已使用Topic数量
   */
  UsedTopicNum?: number
  /**
   * 最大Group数量
   */
  MaxGroupNum?: number
  /**
   * 已使用Group数量
   */
  UsedGroupNum?: number
  /**
   * 集群类型
   */
  ConfigDisplay?: string
  /**
   * 集群节点数
   */
  NodeCount?: number
  /**
   * 节点分布情况
   */
  NodeDistribution?: Array<InstanceNodeDistribution>
  /**
   * topic分布情况
   */
  TopicDistribution?: Array<RocketMQTopicDistribution>
  /**
   * 每个主题最大队列数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxQueuesPerTopic?: number
  /**
   * 最大可设置消息保留时间，小时为单位	
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxRetention?: number
  /**
   * 最小可设置消息保留时间，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinRetention?: number
  /**
   * 实例消息保留时间，小时为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  Retention?: number
  /**
   * Topic个数最小配额，即免费额度，默认为集群规格单节点最小配额*节点个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNumLowerLimit?: number
  /**
   * Topic个数最大配额，默认为集群规格单节点最大配额*节点个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNumUpperLimit?: number
}

/**
 * 迁移topic列表数据
 */
export interface MigrateTopic {
  /**
   * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * topic名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 迁移状态
S_RW_D_NA 源集群读写
S_RW_D_R 源集群读写目标集群读
S_RW_D_RW 源集群读写目标集群读写
S_R_D_RW 源集群读目标集群读写
S_NA_D_RW 目标集群读写
注意：此字段可能返回 null，表示取不到有效值。
   */
  MigrationStatus?: string
  /**
   * 是否完成健康检查
注意：此字段可能返回 null，表示取不到有效值。
   */
  HealthCheckPassed?: boolean
  /**
   * 上次健康检查返回的错误信息，仅在HealthCheckPassed为false时有效。
NotChecked 未执行检查，
Unknown 未知错误,
TopicNotImported 主题未导入,
 TopicNotExistsInSourceCluster  主题在源集群中不存在,
    TopicNotExistsInTargetCluster 主题在目标集群中不存在,
    ConsumerConnectedOnTarget 目标集群上存在消费者连接,
    SourceTopicHasNewMessagesIn5Minutes 源集群主题前5分钟内有新消息写入,
TargetTopicHasNewMessagesIn5Minutes 目标集群主题前5分钟内有新消息写入,
    SourceTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入,
TargetTopicHasNoMessagesIn5Minutes 源集群前5分钟内没有新消息写入,
    ConsumerGroupCountNotMatch 订阅组数量不一致,
    SourceTopicHasUnconsumedMessages 源集群主题存在未消费消息,
注意：此字段可能返回 null，表示取不到有效值。
   */
  HealthCheckError?: string
}

/**
 * DeleteRabbitMQBinding请求参数结构体
 */
export interface DeleteRabbitMQBindingRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * Vhost参数
   */
  VirtualHost: string
  /**
   * 路由关系Id
   */
  BindingId: number
}

/**
 * DescribeRocketMQSmoothMigrationTask返回参数结构体
 */
export interface DescribeRocketMQSmoothMigrationTaskResponse {
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 目标集群ID
   */
  ClusterId?: string
  /**
   * 源集群名称
   */
  SourceClusterName?: string
  /**
   * 网络连接类型，
PUBLIC 公网
VPC 私有网络
OTHER 其它
   */
  ConnectionType?: string
  /**
   * 源集群NameServer地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceClusterNameServer?: string
  /**
   * 源集群所在私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 源集群所在子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 是否开启ACL
   */
  EnableACL?: boolean
  /**
   * 源集群AccessKey
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessKey?: string
  /**
   * 元集群SecretKey
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretKey?: string
  /**
   * 配置源集群时发生的错误
TIMEOUT 连接超时，
SERVER_ERROR 服务错误，
INTERNAL_ERROR 内部错误，
CONNECT_NAMESERVER_ERROR 连接nameserver错误
CONNECT_BROKER_ERROR 连接broker错误
ACL_WRONG ACL信息不正确

注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskError?: string
  /**
   * 任务状态
Configuration 迁移配置
SourceConnecting 连接源集群中
SourceConnectionFailure 连接源集群失败
MetaDataImport 元数据导入
EndpointSetup 切换接入点
ServiceMigration 切流中
Completed 已完成
Cancelled 已取消
   */
  TaskStatus?: string
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 主题类型分布情况
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicTypeDistribution?: Array<RocketMQTopicDistribution>
  /**
   * 主题迁移进度分布情况
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicStageDistribution?: Array<RocketMQMigrationTopicDistribution>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBindClusters请求参数结构体
 */
export type DescribeBindClustersRequest = null

/**
 * CreateRabbitMQVirtualHost请求参数结构体
 */
export interface CreateRabbitMQVirtualHostRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * vhost名
   */
  VirtualHost: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 消息轨迹开关,true打开,false关闭,默认关闭
   */
  TraceFlag?: boolean
  /**
   * 是否创建镜像队列策略，默认值 true
   */
  MirrorQueuePolicyFlag?: boolean
}

/**
 * VerifyRocketMQConsume请求参数结构体
 */
export interface VerifyRocketMQConsumeRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 命名空间
   */
  NamespaceId: string
  /**
   * 消费组ID
   */
  GroupId: string
  /**
   * 消息id
   */
  MsgId: string
  /**
   * 客户端ID
   */
  ClientId: string
  /**
   * 主题名称
   */
  TopicName: string
}

/**
 * DescribeRabbitMQQueueDetail请求参数结构体
 */
export interface DescribeRabbitMQQueueDetailRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * Vhost参数
   */
  VirtualHost: string
  /**
   * 队列名称
   */
  QueueName: string
}

/**
 * DescribePulsarProInstanceDetail请求参数结构体
 */
export interface DescribePulsarProInstanceDetailRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DescribeRocketMQConsumerConnections请求参数结构体
 */
export interface DescribeRocketMQConsumerConnectionsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  NamespaceId: string
  /**
   * 消费组ID
   */
  GroupId: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 限制数目
   */
  Limit: number
  /**
   * 对查询结果排序，此为排序字段，目前支持Accumulative（消息堆积量）
   */
  SortedBy?: string
  /**
   * 查询结果排序规则，ASC为升序，DESC为降序
   */
  SortOrder?: string
}

/**
 * CreateRole请求参数结构体
 */
export interface CreateRoleRequest {
  /**
   * 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。
   */
  RoleName: string
  /**
   * 备注说明，长度必须大等于0且小等于128。
   */
  Remark: string
  /**
   * 必填字段，集群Id
   */
  ClusterId: string
}

/**
 * DescribeEnvironmentAttributes返回参数结构体
 */
export interface DescribeEnvironmentAttributesResponse {
  /**
   * 未消费消息过期时间，单位：秒，最大1296000（15天）。
   */
  MsgTTL?: number
  /**
   * 消费速率限制，单位：byte/秒，0：不限速。
   */
  RateInByte?: number
  /**
   * 消费速率限制，单位：个数/秒，0：不限速。
   */
  RateInSize?: number
  /**
   * 已消费消息保存策略，单位：小时，0：消费完马上删除。
   */
  RetentionHours?: number
  /**
   * 已消费消息保存策略，单位：G，0：消费完马上删除。
   */
  RetentionSize?: number
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId?: string
  /**
   * 副本数。
   */
  Replicas?: number
  /**
   * 备注。
   */
  Remark?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQRoles请求参数结构体
 */
export interface DescribeRocketMQRolesRequest {
  /**
   * 起始下标，不填默认为0。
   */
  Offset: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit: number
  /**
   * 必填字段，集群Id
   */
  ClusterId: string
  /**
   * 角色名称，模糊查询
   */
  RoleName?: string
  /**
   * RoleName按照角色名进行过滤，精确查询。类型：String必选：否
   */
  Filters?: Array<Filter>
}

/**
 * CreateRocketMQNamespace返回参数结构体
 */
export interface CreateRocketMQNamespaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主题实例
 */
export interface Topic_Simplification {
  /**
   * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 0: 非持久非分区
1: 非持久分区
2: 持久非分区
3: 持久分区
注意：此字段可能返回 null，表示取不到有效值。
   */
  PulsarTopicType?: number
}

/**
 * ModifyRocketMQEnvironmentRole返回参数结构体
 */
export interface ModifyRocketMQEnvironmentRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCmqQueue返回参数结构体
 */
export interface CreateCmqQueueResponse {
  /**
   * 创建成功的queueId
   */
  QueueId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRabbitMQVipInstance请求参数结构体
 */
export interface DeleteRabbitMQVipInstanceRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 是否国际站请求，默认 false
   */
  IsIntl?: boolean
}

/**
 * 过滤参数
 */
export interface Filter {
  /**
   * 过滤参数的名字
   */
  Name?: string
  /**
   * 数值
   */
  Values?: Array<string>
}

/**
 * DescribeRocketMQPublicAccessMonitorData请求参数结构体
 */
export interface DescribeRocketMQPublicAccessMonitorDataRequest {
  /**
   * 专享集群ID
   */
  InstanceId: string
  /**
   * 指标名称，仅支持单指标拉取。目前仅支持：ClientIntraffic; ClientOuttraffic
   */
  MetricName: string
  /**
   * 起始时间
   */
  StartTime?: string
  /**
   * 结束时间，默认为当前时间
   */
  EndTime?: string
  /**
   * 监控统计周期，如60。默认为取值为300，单位为s。
   */
  Period?: number
}

/**
 * DescribeRoles返回参数结构体
 */
export interface DescribeRolesResponse {
  /**
   * 记录数。
   */
  TotalCount?: number
  /**
   * 角色数组。
   */
  RoleSets?: Array<Role>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQPermission请求参数结构体
 */
export interface DescribeRabbitMQPermissionRequest {
  /**
   * 集群实例id
   */
  InstanceId: string
  /**
   * 用户名，用于查询过滤，不传则查询全部
   */
  User?: string
  /**
   * vhost名，用于查询过滤，不传则查询全部
   */
  VirtualHost?: string
  /**
   * 分页Offset
   */
  Offset?: number
  /**
   * 分页Limit
   */
  Limit?: number
}

/**
 * DeleteRabbitMQUser请求参数结构体
 */
export interface DeleteRabbitMQUserRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * 用户名，登录时使用
   */
  User: string
}

/**
 * DescribeSubscriptions请求参数结构体
 */
export interface DescribeSubscriptionsRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 主题名称。
   */
  TopicName: string
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * 订阅者名称，模糊匹配。
   */
  SubscriptionName?: string
  /**
   * 数据过滤条件。
   */
  Filters?: Array<FilterSubscription>
}

/**
 * 实例节点分布信息
 */
export interface InstanceNodeDistribution {
  /**
   * 可用区
   */
  ZoneName?: string
  /**
   * 可用区id
   */
  ZoneId?: string
  /**
   * 节点数
   */
  NodeCount?: number
  /**
   * 有调度任务且没有切回的可用区，此标识为true
   */
  NodePermWipeFlag?: boolean
  /**
   * 可用区状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneStatus?: string
}

/**
 * CreateRocketMQGroup请求参数结构体
 */
export interface CreateRocketMQGroupRequest {
  /**
   * Group名称，8~64个字符
   */
  GroupId: string
  /**
   * 命名空间，目前只支持单个命名空间
   */
  Namespaces: Array<string>
  /**
   * 是否开启消费
   */
  ReadEnable: boolean
  /**
   * 是否开启广播消费
   */
  BroadcastEnable: boolean
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 说明信息，最长128个字符
   */
  Remark?: string
  /**
   * Group类型（TCP/HTTP）
   */
  GroupType?: string
  /**
   * Group最大重试次数
   */
  RetryMaxTimes?: number
}

/**
 * 角色实例
 */
export interface Role {
  /**
   * 角色名称。
   */
  RoleName?: string
  /**
   * 角色token值。
   */
  Token?: string
  /**
   * 备注说明。
   */
  Remark?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
}

/**
 * DescribeTopicMsgs返回参数结构体
 */
export interface DescribeTopicMsgsResponse {
  /**
   * 总记录数。
   */
  TotalCount?: number
  /**
   * 消息日志列表。
   */
  TopicMsgLogSets?: Array<MsgLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterDetail请求参数结构体
 */
export interface DescribeClusterDetailRequest {
  /**
   * 集群的ID
   */
  ClusterId: string
}

/**
 * SendCmqMsg请求参数结构体
 */
export interface SendCmqMsgRequest {
  /**
   * 队列名
   */
  QueueName: string
  /**
   * 消息内容
   */
  MsgContent: string
  /**
   * 延迟时间。单位为秒，默认值为0秒，最大不能超过队列配置的消息最长未确认时间。
   */
  DelaySeconds: number
}

/**
 * RabbitMQ专享版云服务器
 */
export interface RabbitMQPrivateVirtualHost {
  /**
   * 虚拟主机的名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualHostName?: string
  /**
   * 虚拟主机的描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * CreateRabbitMQVirtualHost返回参数结构体
 */
export interface CreateRabbitMQVirtualHostResponse {
  /**
   * vhost名
   */
  VirtualHost?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNamespaceBundlesOpt返回参数结构体
 */
export interface DescribeNamespaceBundlesOptResponse {
  /**
   * 记录条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTopicList请求参数结构体
 */
export interface GetTopicListRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
}

/**
 * RewindCmqQueue返回参数结构体
 */
export interface RewindCmqQueueResponse {
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
   */
  IpRule: string
  /**
   * 允许或者拒绝
   */
  Allow: boolean
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * RabbiteMQ集群白名单信息
 */
export interface RabbitMQClusterWhiteListInfo {
  /**
   * 废弃
注意：此字段可能返回 null，表示取不到有效值。
   */
  WhiteList: string
  /**
   * 公网管控台白名单
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicControlConsoleWhiteList: string
  /**
   * 公网数据流白名单
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicDataStreamWhiteList: string
  /**
   * 公网管控台白名单状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicControlConsoleWhiteListStatus?: string
  /**
   * 公网数据流白名单状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicDataStreamWhiteListStatus?: string
}

/**
 * DeleteProCluster请求参数结构体
 */
export interface DeleteProClusterRequest {
  /**
   * 集群Id
   */
  ClusterId: string
}

/**
 * DescribeCmqTopicDetail返回参数结构体
 */
export interface DescribeCmqTopicDetailResponse {
  /**
   * 主题详情
   */
  TopicDescribe?: CmqTopic
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQTopics请求参数结构体
 */
export interface DescribeRocketMQTopicsRequest {
  /**
   * 查询偏移量
   */
  Offset: number
  /**
   * 查询限制数
   */
  Limit: number
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间
   */
  NamespaceId: string
  /**
   * 按主题类型过滤查询结果，可选择Normal, GlobalOrder, PartitionedOrder, Transaction
   */
  FilterType?: Array<string>
  /**
   * 按主题名称搜索，支持模糊查询
   */
  FilterName?: string
  /**
   * 按订阅消费组名称过滤
   */
  FilterGroup?: string
}

/**
 * DescribeRocketMQSubscriptions返回参数结构体
 */
export interface DescribeRocketMQSubscriptionsResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 订阅关系列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Subscriptions?: Array<RocketMQSubscription>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 客户端IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientAddr?: string
  /**
   * 订阅主题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Topic?: string
  /**
   * 订阅表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubString?: string
  /**
   * 订阅方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpressionType?: string
}

/**
 * DescribeCmqSubscriptionDetail返回参数结构体
 */
export interface DescribeCmqSubscriptionDetailResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * Subscription属性集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscriptionSet?: Array<CmqSubscription>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * vcp绑定记录
 */
export interface VpcBindRecord {
  /**
   * 租户Vpc Id
   */
  UniqueVpcId?: string
  /**
   * 租户Vpc子网Id
   */
  UniqueSubnetId?: string
  /**
   * 路由Id
   */
  RouterId?: string
  /**
   * Vpc的Id
   */
  Ip?: string
  /**
   * Vpc的Port
   */
  Port?: number
  /**
   * 说明，128个字符以内
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * DescribeRocketMQMsg返回参数结构体
 */
export interface DescribeRocketMQMsgResponse {
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
   * 消息id
   */
  MsgId?: string
  /**
   * 生产者地址
   */
  ProducerAddr?: string
  /**
   * 消费组消费情况列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageTracks?: Array<RocketMQMessageTrack>
  /**
   * 详情页展示的topic名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowTopicName?: string
  /**
   * 消费组消费情况列表总数
   */
  MessageTracksCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvironmentAttributes请求参数结构体
 */
export interface DescribeEnvironmentAttributesRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
}

/**
 * ModifyPublicNetworkSecurityPolicy返回参数结构体
 */
export interface ModifyPublicNetworkSecurityPolicyResponse {
  /**
   * SUCCESS或者FAILURE
   */
  ModifyResult?: string
  /**
   * 集群id
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRabbitMQVirtualHost返回参数结构体
 */
export interface DeleteRabbitMQVirtualHostResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePublishers请求参数结构体
 */
export interface DescribePublishersRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  Namespace: string
  /**
   * 主题名称
   */
  Topic: string
  /**
   * 参数过滤器，支持ProducerName，Address字段
   */
  Filters?: Array<Filter>
  /**
   * 查询偏移量，默认为0
   */
  Offset?: number
  /**
   * 查询条数，默认为20
   */
  Limit?: number
  /**
   * 排序器
   */
  Sort?: Sort
}

/**
 * Rabbitmq路由关系列表成员
 */
export interface RabbitMQBindingListInfo {
  /**
   * 路由关系id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindingId?: number
  /**
   * Vhost参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualHost?: string
  /**
   * 源exchange名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * 目标类型,queue或exchange
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestinationType?: string
  /**
   * 目标资源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Destination?: string
  /**
   * 绑定key
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoutingKey?: string
  /**
   * 源exchange类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceExchangeType?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
}

/**
 * ModifyPublicNetworkSecurityPolicy请求参数结构体
 */
export interface ModifyPublicNetworkSecurityPolicyRequest {
  /**
   * 集群id
   */
  InstanceId: string
  /**
   * 策略列表
   */
  PolicyList: Array<SecurityPolicy>
}

/**
 * ModifyRole返回参数结构体
 */
export interface ModifyRoleResponse {
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * 备注说明
   */
  Remark?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQTopicStats请求参数结构体
 */
export interface DescribeRocketMQTopicStatsRequest {
  /**
   * 实例ID
   */
  ClusterId: string
  /**
   * 命名空间
   */
  NamespaceId: string
  /**
   * 主题名
   */
  TopicName: string
}

/**
 * SendRocketMQMessage返回参数结构体
 */
export interface SendRocketMQMessageResponse {
  /**
   * 发送结果
   */
  Result?: boolean
  /**
   * 消息ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Pulsar专业版集群规格信息
 */
export interface PulsarProClusterSpecInfo {
  /**
   * 集群规格名称
   */
  SpecName?: string
  /**
   * 峰值tps
   */
  MaxTps?: number
  /**
   * 峰值带宽。单位：mbps
   */
  MaxBandWidth?: number
  /**
   * 最大命名空间个数
   */
  MaxNamespaces?: number
  /**
   * 最大主题分区数
   */
  MaxTopics?: number
  /**
   * 规格外弹性TPS
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScalableTps?: number
  /**
   * 32或者128
当前集群topic的最大分区数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxPartitions?: number
}

/**
 * 订阅者
 */
export interface Subscription {
  /**
   * 主题名称。
   */
  TopicName?: string
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId?: string
  /**
   * 消费者开始连接的时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectedSince?: string
  /**
   * 消费者地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerAddr?: string
  /**
   * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerCount?: string
  /**
   * 消费者名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerName?: string
  /**
   * 堆积的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgBacklog?: string
  /**
   * 于TTL，此订阅下没有被发送而是被丢弃的比例。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRateExpired?: string
  /**
   * 消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRateOut?: string
  /**
   * 消费者每秒消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgThroughputOut?: string
  /**
   * 订阅名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscriptionName?: string
  /**
   * 消费者集合。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerSets?: Array<Consumer>
  /**
   * 是否在线。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsOnline?: boolean
  /**
   * 消费进度集合。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumersScheduleSets?: Array<ConsumersSchedule>
  /**
   * 备注。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最近修改时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 订阅类型，Exclusive，Shared，Failover， Key_Shared，空或NULL表示未知，
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubType?: string
  /**
   * 是否由于未 ack 数到达上限而被 block
注意：此字段可能返回 null，表示取不到有效值。
   */
  BlockedSubscriptionOnUnackedMsgs?: boolean
  /**
   * 未 ack 消息数上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxUnackedMsgNum?: number
}

/**
 * SendMessages返回参数结构体
 */
export interface SendMessagesResponse {
  /**
   * 消息的messageID, 是全局唯一的，用来标识消息的元数据信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageId?: string
  /**
   * 返回的错误消息，如果返回为 “”，说明没有错误
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Rocketmq消息消费track信息
 */
export interface RocketMQMessageTrack {
  /**
   * 消费者组
   */
  Group?: string
  /**
   * 消费状态,
CONSUMED: 已消费
CONSUMED_BUT_FILTERED: 已过滤
NOT_CONSUME: 未消费
ENTER_RETRY: 进入重试队列
ENTER_DLQ: 进入死信队列
UNKNOWN: 查询不到消费状态
   */
  ConsumeStatus?: string
  /**
   * 消息track类型
   */
  TrackType?: string
  /**
   * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceptionDesc?: string
}

/**
 * DescribeRocketMQNamespaces返回参数结构体
 */
export interface DescribeRocketMQNamespacesResponse {
  /**
   * 命名空间列表
   */
  Namespaces?: Array<RocketMQNamespace>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopics请求参数结构体
 */
export interface DescribeTopicsRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
  /**
   * 主题名模糊匹配。
   */
  TopicName?: string
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * topic类型描述：
0：非持久非分区主题类型；
1：非持久分区主题类型；
2：持久非分区主题类型；
3：持久分区主题类型；
   */
  TopicType?: number
  /**
   * * TopicName
按照主题名字查询，精确查询。
类型：String
必选：否
   */
  Filters?: Array<Filter>
  /**
   * 创建来源：
1：用户创建
2：系统创建
   */
  TopicCreator?: number
}

/**
 * DescribeRocketMQMigratingTopicList返回参数结构体
 */
export interface DescribeRocketMQMigratingTopicListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 迁移topic列表
   */
  MigrateTopics?: Array<MigrateTopic>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvironmentRoles返回参数结构体
 */
export interface DescribeEnvironmentRolesResponse {
  /**
   * 记录数。
   */
  TotalCount?: number
  /**
   * 命名空间角色集合。
   */
  EnvironmentRoleSets?: Array<EnvironmentRole>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQPublicAccessPoint返回参数结构体
 */
export interface DescribeRocketMQPublicAccessPointResponse {
  /**
   * 公网接入点状态：
0， 已开启
1， 已关闭
2，开启中
3，关闭中
4，修改中
   */
  Status?: number
  /**
   * 支付状态：
0, 未知
1，正常
2，欠费
   */
  PayStatus?: number
  /**
   * 接入点地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessUrl?: string
  /**
   * 安全访问规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rules?: Array<PublicAccessRule>
  /**
   * 带宽
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bandwidth?: number
  /**
   * 付费模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: number
  /**
   * 公网是否按流量计费
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillingFlow?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQExchanges返回参数结构体
 */
export interface DescribeRabbitMQExchangesResponse {
  /**
   * 策略列表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExchangeInfoList?: Array<RabbitMQExchangeListInfo>
  /**
   * 策略结果总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQQueueDetail返回参数结构体
 */
export interface DescribeRabbitMQQueueDetailResponse {
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * Vhost参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualHost?: string
  /**
   * 队列名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueName?: string
  /**
   * 队列类型,取值classic或quorum
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueType?: string
  /**
   * 在线消费者数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Consumers?: number
  /**
   * 持久标记
注意：此字段可能返回 null，表示取不到有效值。
   */
  Durable?: boolean
  /**
   * 自动清除
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoDelete?: boolean
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * MessageTTL参数,classic类型专用
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageTTL?: number
  /**
   * AutoExpire参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoExpire?: number
  /**
   * MaxLength参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxLength?: number
  /**
   * MaxLengthBytes参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxLengthBytes?: number
  /**
   * DeliveryLimit参数,quorum类型专用
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliveryLimit?: number
  /**
   * OverflowBehaviour参数,取值为drop-head, reject-publish或reject-publish-dlx
注意：此字段可能返回 null，表示取不到有效值。
   */
  OverflowBehaviour?: string
  /**
   * DeadLetterExchange参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterExchange?: string
  /**
   * DeadLetterRoutingKey参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterRoutingKey?: string
  /**
   * SingleActiveConsumer参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SingleActiveConsumer?: boolean
  /**
   * MaximumPriority参数,classic类型专用
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaximumPriority?: number
  /**
   * LazyMode参数,classic类型专用
注意：此字段可能返回 null，表示取不到有效值。
   */
  LazyMode?: boolean
  /**
   * MasterLocator参数,classic类型专用
注意：此字段可能返回 null，表示取不到有效值。
   */
  MasterLocator?: string
  /**
   * MaxInMemoryLength参数,quorum类型专用
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxInMemoryLength?: number
  /**
   * MaxInMemoryBytes参数,quorum类型专用
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxInMemoryBytes?: number
  /**
   * 创建时间戳,单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Node?: string
  /**
   * 仲裁队列死信一致性策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterStrategy?: string
  /**
   * 仲裁队列的领导者选举策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueLeaderLocator?: string
  /**
   * 仲裁队列的初始副本组大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuorumInitialGroupSize?: number
  /**
   * 是否为独占队列
注意：此字段可能返回 null，表示取不到有效值。
   */
  Exclusive?: boolean
  /**
   * 生效的策略名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Policy?: string
  /**
   * 扩展参数 key-value
注意：此字段可能返回 null，表示取不到有效值。
   */
  Arguments?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQTopicMsgs返回参数结构体
 */
export interface DescribeRocketMQTopicMsgsResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 消息列表
   */
  TopicMsgLogSets?: Array<RocketMQMsgLog>
  /**
   * 标志一次分页事务
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全策略
 */
export interface SecurityPolicy {
  /**
   * ip或者网段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Route?: string
  /**
   * 策略 true就是允许，白名单或者 false 拒绝 黑名单

注意：此字段可能返回 null，表示取不到有效值。
   */
  Policy?: boolean
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
}

/**
 * VerifyRocketMQConsume返回参数结构体
 */
export interface VerifyRocketMQConsumeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQConsumerConnectionDetail请求参数结构体
 */
export interface DescribeRocketMQConsumerConnectionDetailRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  NamespaceId: string
  /**
   * 消费组名称
   */
  GroupId: string
  /**
   * 消费端实例ID
   */
  ClientId: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 限制数目
   */
  Limit: number
  /**
   * 按主题类型过滤查询结果，可选择Normal, GlobalOrder, PartitionedOrder, Retry, Transaction, DeadLetter
   */
  FilterType?: Array<string>
}

/**
 * DeleteRoles返回参数结构体
 */
export interface DeleteRolesResponse {
  /**
   * 成功删除的角色名称数组。
   */
  RoleNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RetryRocketMQDlqMessage返回参数结构体
 */
export interface RetryRocketMQDlqMessageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQBindings请求参数结构体
 */
export interface DescribeRabbitMQBindingsRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * Vhost名称
   */
  VirtualHost: string
  /**
   * 分页offset
   */
  Offset?: number
  /**
   * 分页limit
   */
  Limit?: number
  /**
   * 搜索关键词，根据源exchange名称/目标资源名称/绑定key进行模糊搜索
   */
  SearchWord?: string
  /**
   * 根据源Exchange精准搜索过滤
   */
  SourceExchange?: string
  /**
   * 根据目标QueueName精准搜索过滤，和DestinationExchange过滤不可同时设置
   */
  QueueName?: string
  /**
   * 根据目标Exchange精准搜索过滤，和QueueName过滤不可同时设置
   */
  DestinationExchange?: string
}

/**
 * ModifyRocketMQTopic请求参数结构体
 */
export interface ModifyRocketMQTopicRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  NamespaceId: string
  /**
   * 主题名称
   */
  Topic: string
  /**
   * 说明信息，最大128个字符
   */
  Remark: string
  /**
   * 分区数，全局类型无效，不可小于当前分区数
   */
  PartitionNum?: number
}

/**
 * RocketMQ集群基本信息
 */
export interface RocketMQClusterInfo {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 地域信息
   */
  Region?: string
  /**
   * 创建时间，毫秒为单位
   */
  CreateTime?: number
  /**
   * 集群说明信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 公网接入地址
   */
  PublicEndPoint?: string
  /**
   * VPC接入地址
   */
  VpcEndPoint?: string
  /**
   * 是否支持命名空间接入点
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportNamespaceEndpoint?: boolean
  /**
   * VPC信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vpcs?: Array<VpcConfig>
  /**
   * 是否为专享实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVip?: boolean
  /**
   * Rocketmq集群标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  RocketMQFlag?: boolean
  /**
   * 计费状态，1表示正常，2表示已停服，3表示已销毁
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 欠费停服时间，毫秒为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolateTime?: number
  /**
   * HTTP协议公网接入地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  HttpPublicEndpoint?: string
  /**
   * HTTP协议VPC接入地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  HttpVpcEndpoint?: string
  /**
   * TCP内部接入地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternalEndpoint?: string
  /**
   * HTTP协议内部接入地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  HttpInternalEndpoint?: string
  /**
   * 是否开启ACL鉴权，专享实例支持关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  AclEnabled?: boolean
  /**
   * 公网CLB实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicClbId?: string
  /**
   * vip
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip?: string
  /**
   * 所属VPC
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 是否支持迁移
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportMigration?: boolean
  /**
   * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败，6 - 变配中，7 - 变配失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStatus?: number
  /**
   * 集群所属可用区，表明集群归属的可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneId?: number
  /**
   * 集群节点所在的可用区，若该集群为跨可用区集群，则包含该集群节点所在的多个可用区。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneIds?: Array<number | bigint>
}

/**
 * ModifyRocketMQInstance返回参数结构体
 */
export interface ModifyRocketMQInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分区topic
 */
export interface PartitionsTopic {
  /**
   * 最后一次间隔内发布消息的平均byte大小。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageMsgSize?: string
  /**
   * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerCount?: string
  /**
   * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastConfirmedEntry?: string
  /**
   * 最后一个ledger创建的时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastLedgerCreatedTimestamp?: string
  /**
   * 本地和复制的发布者每秒发布消息的速率。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRateIn?: string
  /**
   * 本地和复制的消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRateOut?: string
  /**
   * 本地和复制的发布者每秒发布消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgThroughputIn?: string
  /**
   * 本地和复制的消费者每秒分发消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgThroughputOut?: string
  /**
   * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumberOfEntries?: string
  /**
   * 子分区id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: number
  /**
   * 生产者数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProducerCount?: string
  /**
   * 以byte计算的所有消息存储总量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSize?: string
  /**
   * topic类型描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicType?: number
}

/**
 * ResetMsgSubOffsetByTimestamp返回参数结构体
 */
export interface ResetMsgSubOffsetByTimestampResponse {
  /**
   * 结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendMessages请求参数结构体
 */
export interface SendMessagesRequest {
  /**
   * 消息要发送的topic的名字, 这里尽量需要使用topic的全路径，即：tenant/namespace/topic。如果不指定，默认使用的是：public/default
   */
  Topic: string
  /**
   * 要发送的消息的内容
   */
  Payload: string
  /**
   * Token 是用来做鉴权使用的，可以不填，系统会自动获取
   */
  StringToken?: string
  /**
   * 设置 producer 的名字，要求全局唯一。该参数建议用户无需手动配置，此时系统会随机生成，如果手动设置有可能会造成创建 Producer 失败进而导致消息发送失败。
该参数主要用于某些特定场景下，只允许特定的 Producer 生产消息时设置，用户的大部分场景使用不到该特性。
   */
  ProducerName?: string
  /**
   * 设置消息发送的超时时间，默认为30s
   */
  SendTimeout?: number
  /**
   * 内存中缓存的最大的生产消息的数量，默认为1000条
   */
  MaxPendingMessages?: number
}

/**
 * CreateRocketMQRole请求参数结构体
 */
export interface CreateRocketMQRoleRequest {
  /**
   * 角色名称，不支持中字以及除了短线和下划线外的特殊字符且长度必须大于0且小等于32。
   */
  RoleName: string
  /**
   * 必填字段，集群Id
   */
  ClusterId: string
  /**
   * 备注说明，长度必须大等于0且小等于128。
   */
  Remark?: string
  /**
   * 角色授权类型（集群：Cluster; 主题或消费组：TopicAndGroup）
   */
  PermType?: string
}

/**
 * DescribeNodeHealthOpt返回参数结构体
 */
export interface DescribeNodeHealthOptResponse {
  /**
   * 0-异常；1-正常
   */
  NodeState?: number
  /**
   * 最近一次健康检查的时间
   */
  LatestHealthCheckTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQVipInstance返回参数结构体
 */
export interface DescribeRabbitMQVipInstanceResponse {
  /**
   * 集群信息
   */
  ClusterInfo?: RabbitMQClusterInfo
  /**
   * 集群规格信息
   */
  ClusterSpecInfo?: RabbitMQClusterSpecInfo
  /**
   * 集群访问
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterNetInfo?: RabbitMQClusterAccessInfo
  /**
   * 集群白名单
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterWhiteListInfo?: RabbitMQClusterWhiteListInfo
  /**
   * vhost配额信息
   */
  VirtualHostQuota?: VirtualHostQuota
  /**
   * exchange配额信息
   */
  ExchangeQuota?: ExchangeQuota
  /**
   * queue配额信息
   */
  QueueQuota?: QueueQuota
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCmqSubscriptionAttribute请求参数结构体
 */
export interface ModifyCmqSubscriptionAttributeRequest {
  /**
   * 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
   */
  TopicName: string
  /**
   * 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  SubscriptionName: string
  /**
   * 向 Endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。取值如下：
（1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息。
（2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s···由于 Topic 消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是 EXPONENTIAL_DECAY_RETRY。
   */
  NotifyStrategy?: string
  /**
   * 推送内容的格式。取值：（1）JSON；（2）SIMPLIFIED，即 raw 格式。如果 Protocol 是 queue，则取值必须为 SIMPLIFIED。如果 Protocol 是 HTTP，两个值均可以，默认值是 JSON。
   */
  NotifyContentFormat?: string
  /**
   * 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。
   */
  FilterTags?: Array<string>
  /**
   * BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。
   */
  BindingKey?: Array<string>
}

/**
 * ModifyTopic返回参数结构体
 */
export interface ModifyTopicResponse {
  /**
   * 分区数
   */
  Partitions?: number
  /**
   * 备注，128字符以内。
   */
  Remark?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * vhost使用配额信息
 */
export interface VirtualHostQuota {
  /**
   * 允许创建最大vhost数
   */
  MaxVirtualHost?: number
  /**
   * 已创建vhost数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedVirtualHost?: number
}

/**
 * DescribeRocketMQVipInstanceDetail请求参数结构体
 */
export interface DescribeRocketMQVipInstanceDetailRequest {
  /**
   * 集群ID
   */
  ClusterId: string
}

/**
 * DeleteRocketMQCluster返回参数结构体
 */
export interface DeleteRocketMQClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCmqTopic返回参数结构体
 */
export interface CreateCmqTopicResponse {
  /**
   * 主题id
   */
  TopicId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Cmq DeadLetterSource
 */
export interface CmqDeadLetterSource {
  /**
   * 消息队列ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueId?: string
  /**
   * 消息队列名字。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueName?: string
}

/**
 * ClearCmqSubscriptionFilterTags返回参数结构体
 */
export interface ClearCmqSubscriptionFilterTagsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQSubscriptions请求参数结构体
 */
export interface DescribeRocketMQSubscriptionsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  Namespace: string
  /**
   * 消费组名称
   */
  Group: string
  /**
   * 查询起始位置
   */
  Offset: number
  /**
   * 查询限制条数
   */
  Limit: number
}

/**
 * ResetMsgSubOffsetByTimestamp请求参数结构体
 */
export interface ResetMsgSubOffsetByTimestampRequest {
  /**
   * 命名空间名称。
   */
  EnvironmentId: string
  /**
   * 主题名称。
   */
  TopicName: string
  /**
   * 订阅者名称。
   */
  Subscription: string
  /**
   * 时间戳，精确到毫秒。
   */
  ToTimestamp: number
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
}

/**
 * DescribeBindVpcs返回参数结构体
 */
export interface DescribeBindVpcsResponse {
  /**
   * 记录数。
   */
  TotalCount?: number
  /**
   * Vpc集合。
   */
  VpcSets?: Array<VpcBindRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAMQPClusters返回参数结构体
 */
export interface DescribeAMQPClustersResponse {
  /**
   * 集群信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterList: Array<AMQPClusterDetail>
  /**
   * 总条数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRabbitMQPermission请求参数结构体
 */
export interface ModifyRabbitMQPermissionRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * 用户名，权限关联的用户
   */
  User: string
  /**
   * vhost名称
   */
  VirtualHost: string
  /**
   * 权限类型，declare相关操作，该用户可操作该vhost下的资源名称正则表达式
   */
  ConfigRegexp: string
  /**
   * 权限类型，消息写入相关操作，该用户可操作该vhost下的资源名称正则表达式
   */
  WriteRegexp: string
  /**
   * 权限类型，消息读取相关操作，该用户可操作该vhost下的资源名称正则表达式
   */
  ReadRegexp: string
}

/**
 * 消费进度详情
 */
export interface ConsumersSchedule {
  /**
   * 当前分区id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: number
  /**
   * 消息数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumberOfEntries?: number
  /**
   * 消息积压数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgBacklog?: number
  /**
   * 消费者每秒分发消息的数量之和。
   */
  MsgRateOut?: string
  /**
   * 消费者每秒消息的byte。
   */
  MsgThroughputOut?: string
  /**
   * 超时丢弃比例。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRateExpired?: string
}

/**
 * DescribeRocketMQClusters返回参数结构体
 */
export interface DescribeRocketMQClustersResponse {
  /**
   * 集群信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterList?: Array<RocketMQClusterDetail>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消息轨迹结果
 */
export interface TraceResult {
  /**
   * 阶段
   */
  Stage: string
  /**
   * 内容详情
   */
  Data: string
}

/**
 * DescribeRabbitMQQueues请求参数结构体
 */
export interface DescribeRabbitMQQueuesRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * Vhost参数
   */
  VirtualHost?: string
  /**
   * 分页Offset
   */
  Offset?: number
  /**
   * 分页Limit
   */
  Limit?: number
  /**
   * 搜索关键词
   */
  SearchWord?: string
  /**
   * 队列类型筛选，不填或 "all"：classic 和 quorum 队列；"classic"：筛选 classic 队列；"quorum"：筛选 quorum 队列
   */
  QueueType?: string
  /**
   * 排序依据的字段：
ConsumerNumber - 在线消费者数量；
MessageHeapCount - 消息堆积数；
MessageRateInOut - 生产消费速率之和；
MessageRateIn - 生产速率；
MessageRateOut - 消费速率；
   */
  SortElement?: string
  /**
   * 排序顺序，ascend 或 descend
   */
  SortOrder?: string
}

/**
 * SendMsg请求参数结构体
 */
export interface SendMsgRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 主题名称，如果是分区topic需要指定具体分区，如果没有指定则默认发到0分区，例如：my_topic-partition-0。
   */
  TopicName: string
  /**
   * 消息内容，不能为空且大小不得大于5242880个byte。
   */
  MsgContent: string
  /**
   * Pulsar 集群的ID
   */
  ClusterId?: string
}

/**
 * DescribeRocketMQEnvironmentRoles返回参数结构体
 */
export interface DescribeRocketMQEnvironmentRolesResponse {
  /**
   * 记录数。
   */
  TotalCount?: number
  /**
   * 命名空间角色集合。
   */
  EnvironmentRoleSets?: Array<EnvironmentRole>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQMigratingTopicList请求参数结构体
 */
export interface DescribeRocketMQMigratingTopicListRequest {
  /**
   * 迁移任务名称
   */
  TaskId: string
  /**
   * 分页大小
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 查询过滤器，支持topicname、MigrationStatus查询
   */
  Filters?: Array<Filter>
}

/**
 * CreateRole返回参数结构体
 */
export interface CreateRoleResponse {
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * 角色token
   */
  Token?: string
  /**
   * 备注说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 批量绑定名字空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentRoleSets?: Array<EnvironmentRoleSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRabbitMQUser返回参数结构体
 */
export interface ModifyRabbitMQUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNodeHealthOpt请求参数结构体
 */
export interface DescribeNodeHealthOptRequest {
  /**
   * 节点实例ID
   */
  InstanceId: string
}

/**
 * 排序器
 */
export interface Sort {
  /**
   * 排序字段
   */
  Name: string
  /**
   * 升序ASC，降序DESC
   */
  Order: string
}

/**
 * 消费信息
 */
export interface ConsumerLogs {
  /**
   * 记录数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 消费日志。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerLogSets?: Array<ConsumerLog>
}

/**
 * DescribeMqMsgTrace返回参数结构体
 */
export interface DescribeMqMsgTraceResponse {
  /**
   * 消息内容
   */
  Result?: Array<TraceResult>
  /**
   * 消息轨迹页展示的topic名称
   */
  ShowTopicName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRabbitMQUser请求参数结构体
 */
export interface CreateRabbitMQUserRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * 用户名，登录时使用
   */
  User: string
  /**
   * 密码，登录时使用
   */
  Password: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 用户标签，用于决定改用户访问RabbitMQ Management的权限范围
management：普通控制台用户，monitoring：管理型控制台用户，其他值：非控制台用户
   */
  Tags?: Array<string>
  /**
   * 该用户的最大连接数，不填写则不限制
   */
  MaxConnections?: number
  /**
   * 该用户的最大channel数，不填写则不限制
   */
  MaxChannels?: number
}

/**
 * DescribeRocketMQConsumeStats请求参数结构体
 */
export interface DescribeRocketMQConsumeStatsRequest {
  /**
   * 实例ID
   */
  ClusterId: string
  /**
   * 命名空间
   */
  NamespaceId: string
  /**
   * 消费组
   */
  ConsumerGroup: string
}

/**
 * SendCmqMsg返回参数结构体
 */
export interface SendCmqMsgResponse {
  /**
   * true表示发送成功
   */
  Result?: boolean
  /**
   * 消息id
   */
  MsgId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPublicNetworkAccessPoint返回参数结构体
 */
export interface ModifyPublicNetworkAccessPointResponse {
  /**
   * 修改结果
   */
  ModifyResult?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCmqQueueAttribute请求参数结构体
 */
export interface ModifyCmqQueueAttributeRequest {
  /**
   * 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  QueueName: string
  /**
   * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
   */
  MaxMsgHeapNum?: number
  /**
   * 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。
   */
  PollingWaitSeconds?: number
  /**
   * 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。
   */
  VisibilityTimeout?: number
  /**
   * 消息最大长度，新版CMQ新建的队列默认1024KB，不支持修改
   */
  MaxMsgSize?: number
  /**
   * 消息最长未确认时间。取值范围 30-43200 秒（30秒~12小时），默认值 3600 (1 小时)。
   */
  MsgRetentionSeconds?: number
  /**
   * 队列是否开启回溯消息能力，该参数取值范围0-1296000，0表示不开启。
   */
  RewindSeconds?: number
  /**
   * 第一次查询时间
   */
  FirstQueryInterval?: number
  /**
   * 最大查询次数
   */
  MaxQueryCount?: number
  /**
   * 死信队列名称
   */
  DeadLetterQueueName?: string
  /**
   * policy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds
   */
  MaxTimeToLive?: number
  /**
   * 最大接收次数
   */
  MaxReceiveCount?: number
  /**
   * 死信队列策略
   */
  Policy?: number
  /**
   * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
   */
  Trace?: boolean
  /**
   * 是否开启事务，1开启，0不开启
   */
  Transaction?: number
  /**
   * 队列可回溯存储空间：若开启消息回溯，取值范围：10240MB - 512000MB，若不开启消息回溯，取值：0
   */
  RetentionSizeInMB?: number
}

/**
 * RabbitMQ集群规格信息
 */
export interface RabbitMQClusterSpecInfo {
  /**
   * 集群规格名称
   */
  SpecName: string
  /**
   * 节点数量
   */
  NodeCount: number
  /**
   * 峰值tps
   */
  MaxTps: number
  /**
   * 峰值带宽。单位：mbps
   */
  MaxBandWidth: number
  /**
   * 存储容量。单位：GB
   */
  MaxStorage: number
  /**
   * 公网带宽tps。单位：Mbps
   */
  PublicNetworkTps: number
}

/**
 * DeleteCmqSubscribe返回参数结构体
 */
export interface DeleteCmqSubscribeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRocketMQEnvironmentRoles请求参数结构体
 */
export interface DeleteRocketMQEnvironmentRolesRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 角色名称数组。
   */
  RoleNames: Array<string>
  /**
   * 集群的ID
   */
  ClusterId: string
}

/**
 * VPC配置信息
 */
export interface VpcConfig {
  /**
   * vpc的id
   */
  VpcId: string
  /**
   * 子网id
   */
  SubnetId: string
}

/**
 * DescribeRabbitMQVipInstances请求参数结构体
 */
export interface DescribeRabbitMQVipInstancesRequest {
  /**
   * 查询条件过滤器
   */
  Filters?: Array<Filter>
  /**
   * 查询数目上限，默认20
   */
  Limit?: number
  /**
   * 查询起始位置
   */
  Offset?: number
}

/**
 * DescribeClusterDetail返回参数结构体
 */
export interface DescribeClusterDetailResponse {
  /**
   * 集群的详细信息
   */
  ClusterSet?: Cluster
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQVirtualHost请求参数结构体
 */
export interface DescribeRabbitMQVirtualHostRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * vhost名,不传则查询全部
   */
  VirtualHost?: string
  /**
   * 分页Offset
   */
  Offset?: number
  /**
   * 分页Limit
   */
  Limit?: number
  /**
   * search-virtual-host：vhost名称模糊查询，之前前缀和后缀匹配
   */
  Filters?: Filter
  /**
   * 排序依据的字段：
MessageHeapCount - 消息堆积数；
MessageRateInOut - 生产消费速率之和；
MessageRateIn - 生产速率；
MessageRateOut - 消费速率；
   */
  SortElement?: string
  /**
   * 排序顺序，ascend 或 descend
   */
  SortOrder?: string
}

/**
 * DeleteRocketMQRoles请求参数结构体
 */
export interface DeleteRocketMQRolesRequest {
  /**
   * 角色名称数组。
   */
  RoleNames: Array<string>
  /**
   * 必填字段，集群Id
   */
  ClusterId: string
}

/**
 * cmq DeadLetterPolicy
 */
export interface CmqDeadLetterPolicy {
  /**
   * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterQueue?: string
  /**
   * 死信队列策略。0:最大接收次数;1:最大未消费时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Policy?: number
  /**
   * 最大未消费过期时间。Policy为1时必选。范围300-43200，单位秒，需要小于消息最大保留时间MsgRetentionSeconds。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxTimeToLive?: number
  /**
   * 最大接收次数。Policy为0时必选，范围在1到1000。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxReceiveCount?: number
}

/**
 * queue使用配额信息
 */
export interface QueueQuota {
  /**
   * 可创建最大Queue数
   */
  MaxQueue?: number
  /**
   * 已创建Queue数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedQueue?: number
}

/**
 * ExportRocketMQMessageDetail请求参数结构体
 */
export interface ExportRocketMQMessageDetailRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 应用命名空间
   */
  EnvironmentId: string
  /**
   * Topic名称
如果是死信消息 isDlqMsg=true
   */
  TopicName: string
  /**
   * 消息id
   */
  MsgId: string
  /**
   * 是否包含消息体
   */
  IncludeMsgBody: boolean
  /**
   * 是否死信消息
   */
  DeadLetterMsg?: boolean
}

/**
 * CreateRabbitMQUser返回参数结构体
 */
export interface CreateRabbitMQUserResponse {
  /**
   * 用户名，登录时使用
   */
  User?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRocketMQRole返回参数结构体
 */
export interface ModifyRocketMQRoleResponse {
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * 备注说明
   */
  Remark?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRabbitMQBinding请求参数结构体
 */
export interface CreateRabbitMQBindingRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * Vhost名称
   */
  VirtualHost: string
  /**
   * 源exchange
   */
  Source: string
  /**
   * 目标类型,取值queue或exchange
   */
  DestinationType: string
  /**
   * 目标
   */
  Destination: string
  /**
   * 路由键
   */
  RoutingKey?: string
}

/**
 * RocketMQtopic分布情况
 */
export interface RocketMQTopicDistribution {
  /**
   * topic类型
   */
  TopicType: string
  /**
   * topic数量
   */
  Count: number
}

/**
 * 用户专享集群信息
 */
export interface BindCluster {
  /**
   * 物理集群的名称
   */
  ClusterName?: string
}

/**
 * ModifyCluster返回参数结构体
 */
export interface ModifyClusterResponse {
  /**
   * Pulsar 集群的ID
   */
  ClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RocketMQ近期使用量
 */
export interface RocketMQClusterRecentStats {
  /**
   * Topic数量
   */
  TopicNum: number
  /**
   * 消息生产数
   */
  ProducedMsgNum: number
  /**
   * 消息消费数
   */
  ConsumedMsgNum: number
  /**
   * 消息堆积数
   */
  AccumulativeMsgNum: number
}

/**
 * DescribeRocketMQPublicAccessPoint请求参数结构体
 */
export interface DescribeRocketMQPublicAccessPointRequest {
  /**
   * 集群ID，当前只支持专享集群
   */
  InstanceId: string
}

/**
 * RabbitMQ节点信息
 */
export interface RabbitMQPrivateNode {
  /**
   * 节点名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName: string
  /**
   * 节点状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeStatus?: string
  /**
   * CPU使用率
注意：此字段可能返回 null，表示取不到有效值。
   */
  CPUUsage?: string
  /**
   * 内存使用情况，单位MB
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   * 磁盘使用率
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskUsage?: string
  /**
   * Rabbitmq的Erlang进程数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessNumber?: number
}

/**
 * RetryRocketMQDlqMessage请求参数结构体
 */
export interface RetryRocketMQDlqMessageRequest {
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  NamespaceId: string
  /**
   * group名称
   */
  GroupName: string
  /**
   * 死信消息ID
   */
  MessageIds: Array<string>
}

/**
 * ModifyPublicNetworkAccessPoint请求参数结构体
 */
export interface ModifyPublicNetworkAccessPointRequest {
  /**
   * 集群名字
   */
  ClusterId: string
  /**
   * 是否开启
   */
  PublicNetworkAccessPointStatus: boolean
  /**
   * 必填，公网控制台的开关/Vpc控制台的开关，示例值，Public/Vpc
   */
  SwitchOwner?: string
  /**
   * Vpc
   */
  VpcId?: string
  /**
   * 子网
   */
  SubnetId?: string
  /**
   * 子网下面指定ip作为vpc接入点
   */
  SelectIp?: string
}

/**
 * DescribeRocketMQSourceClusterGroupList返回参数结构体
 */
export interface DescribeRocketMQSourceClusterGroupListResponse {
  /**
   * group列表
   */
  Groups?: Array<RocketMQGroupConfigOutput>
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQTopicsByGroup请求参数结构体
 */
export interface DescribeRocketMQTopicsByGroupRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  NamespaceId: string
  /**
   * 消费组名称
   */
  GroupId: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 限制条数
   */
  Limit?: number
}

/**
 * DescribeRocketMQConsumeStats返回参数结构体
 */
export interface DescribeRocketMQConsumeStatsResponse {
  /**
   * 消费详情列表
   */
  ConsumerStatsList?: Array<ConsumerStats>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQPublicAccessMonitorData返回参数结构体
 */
export interface DescribeRocketMQPublicAccessMonitorDataResponse {
  /**
   * 指标名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricName?: string
  /**
   * 监控统计周期，如60。默认为取值为300，单位为s。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Period?: number
  /**
   * 起始时间，如2018-09-22T19:51:23+08:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间，如2018-09-22T20:51:23+08:00，默认为当前时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 数据点数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataPoints?: Array<RocketMQDataPoint>
  /**
   * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RabbitMQ的vhost详情
 */
export interface RabbitMQVirtualHostInfo {
  /**
   * 集群实例Id
   */
  InstanceId?: string
  /**
   * vhost名
   */
  VirtualHost?: string
  /**
   * vhost描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * vhost标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<string>
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * vhost概览统计信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualHostStatistics?: RabbitMQVirtualHostStatistics
  /**
   * 消息轨迹开关,true打开,false关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  TraceFlag?: boolean
  /**
   * vhost状态，与原生控制台对应，有running、partial、stopped、unknown
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 消息堆积数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageHeapCount?: number
  /**
   * 输入消息速率
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageRateIn?: number
  /**
   * 输出消息速率
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageRateOut?: number
  /**
   * 是否存在镜像队列策略，true 为存在，false 为不存
注意：此字段可能返回 null，表示取不到有效值。
   */
  MirrorQueuePolicyFlag?: boolean
}

/**
 * cmq 批量queue属性信息
 */
export interface CmqQueue {
  /**
   * 消息队列ID。
   */
  QueueId?: string
  /**
   * 消息队列名字。
   */
  QueueName?: string
  /**
   * 每秒钟生产消息条数的限制，消费消息的大小是该值的1.1倍。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qps?: number
  /**
   * 带宽限制。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bps?: number
  /**
   * 飞行消息最大保留时间，需要小于消息保留周期。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxDelaySeconds?: number
  /**
   * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
   */
  MaxMsgHeapNum?: number
  /**
   * 消息接收长轮询等待时间。取值范围0 - 30秒，默认值0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PollingWaitSeconds?: number
  /**
   * 消息保留周期。取值范围60-1296000秒（1min-15天），默认值345600秒（4 天）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRetentionSeconds?: number
  /**
   * 消息可见性超时。取值范围1 - 43200秒（即12小时内），默认值30。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VisibilityTimeout?: number
  /**
   * 消息最大长度。取值范围1024 - 1048576 Byte（即1K - 1024K），默认值65536。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxMsgSize?: number
  /**
   * 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RewindSeconds?: number
  /**
   * 队列的创建时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 最后一次修改队列属性的时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastModifyTime?: number
  /**
   * 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveMsgNum?: number
  /**
   * 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InactiveMsgNum?: number
  /**
   * 延迟消息数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayMsgNum?: number
  /**
   * 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RewindMsgNum?: number
  /**
   * 消息最小未消费时间，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinMsgTime?: number
  /**
   * 事务消息队列。true表示是事务消息，false表示不是事务消息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Transaction?: boolean
  /**
   * 死信队列。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterSource?: Array<CmqDeadLetterSource>
  /**
   * 死信队列策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadLetterPolicy?: CmqDeadLetterPolicy
  /**
   * 事务消息策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransactionPolicy?: CmqTransactionPolicy
  /**
   * 创建者Uin。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUin?: number
  /**
   * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trace?: boolean
  /**
   * 租户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: string
  /**
   * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceName?: string
  /**
   * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 最大未确认消息数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxUnackedMsgNum?: number
  /**
   * 最大消息堆积大小（字节）
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxMsgBacklogSize?: number
  /**
   * 队列可回溯存储空间，取值范围1024MB - 10240MB，0表示不开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionSizeInMB?: number
}

/**
 * CreateEnvironment返回参数结构体
 */
export interface CreateEnvironmentResponse {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId?: string
  /**
   * 未消费消息过期时间，单位：秒。
   */
  MsgTTL?: number
  /**
   * 说明，128个字符以内。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 命名空间ID
   */
  NamespaceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主题实例
 */
export interface Topic {
  /**
   * 最后一次间隔内发布消息的平均byte大小。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageMsgSize?: string
  /**
   * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerCount?: string
  /**
   * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastConfirmedEntry?: string
  /**
   * 最后一个ledger创建的时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastLedgerCreatedTimestamp?: string
  /**
   * 本地和复制的发布者每秒发布消息的速率。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRateIn?: string
  /**
   * 本地和复制的消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRateOut?: string
  /**
   * 本地和复制的发布者每秒发布消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgThroughputIn?: string
  /**
   * 本地和复制的消费者每秒分发消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgThroughputOut?: string
  /**
   * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumberOfEntries?: string
  /**
   * 分区数<=0：topic下无子分区。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: number
  /**
   * 生产者数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProducerCount?: string
  /**
   * 以byte计算的所有消息存储总量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSize?: string
  /**
   * 分区topic里面的子分区。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubTopicSets?: Array<PartitionsTopic>
  /**
   * topic类型描述：
0：普通消息；
1：全局顺序消息；
2：局部顺序消息；
3：重试队列；
4：死信队列；
5：事务消息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicType?: number
  /**
   * 环境（命名空间）名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvironmentId?: string
  /**
   * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 说明，128个字符以内。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最近修改时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 生产者上限。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProducerLimit?: string
  /**
   * 消费者上限。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerLimit?: string
  /**
   * 0: 非持久非分区
1: 非持久分区
2: 持久非分区
3: 持久分区
注意：此字段可能返回 null，表示取不到有效值。
   */
  PulsarTopicType?: number
  /**
   * 未消费消息过期时间，单位：秒

注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgTTL?: number
}

/**
 * ModifyRabbitMQPermission返回参数结构体
 */
export interface ModifyRabbitMQPermissionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCmqQueueDetail返回参数结构体
 */
export interface DescribeCmqQueueDetailResponse {
  /**
   * 队列详情列表。
   */
  QueueDescribe?: CmqQueue
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQSourceClusterTopicList请求参数结构体
 */
export interface DescribeRocketMQSourceClusterTopicListRequest {
  /**
   * 分页大小
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 迁移任务名
   */
  TaskId: string
  /**
   * 查询过滤器，支持字段如下
TopicName,
Type，Imported
   */
  Filters?: Array<Filter>
}

/**
 * ModifyCmqTopicAttribute返回参数结构体
 */
export interface ModifyCmqTopicAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RocketMQ主题信息
 */
export interface RocketMQTopic {
  /**
   * 主题名称
   */
  Name?: string
  /**
   * 主题的类别，为枚举类型，Normal，GlobalOrder，PartitionedOrder，Transaction，Retry及DeadLetter
   */
  Type?: string
  /**
   * 订阅组数量
   */
  GroupNum?: number
  /**
   * 说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 读写分区数
   */
  PartitionNum?: number
  /**
   * 创建时间，以毫秒为单位
   */
  CreateTime?: number
  /**
   * 创建时间，以毫秒为单位
   */
  UpdateTime?: number
  /**
   * 最后写入时间，单位为秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: number
  /**
   * 订阅数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscriptionCount?: number
  /**
   * 订阅关系列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscriptionData?: Array<RocketMQSubscription>
}

/**
 * DeleteRocketMQVipInstance返回参数结构体
 */
export interface DeleteRocketMQVipInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQUser返回参数结构体
 */
export interface DescribeRabbitMQUserResponse {
  /**
   * 返回的User数量
   */
  TotalCount?: number
  /**
   * 当前已创建的RabbitMQ用户列表
   */
  RabbitMQUserList?: Array<RabbitMQUser>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportRocketMQConsumerGroups请求参数结构体
 */
export interface ImportRocketMQConsumerGroupsRequest {
  /**
   * 导入topic
   */
  Groups: Array<RocketMQGroupConfig>
  /**
   * 任务id
   */
  TaskId: string
}

/**
 * DescribeTopics返回参数结构体
 */
export interface DescribeTopicsResponse {
  /**
   * 主题集合数组。
   */
  TopicSets?: Array<Topic>
  /**
   * 主题数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishCmqMsg返回参数结构体
 */
export interface PublishCmqMsgResponse {
  /**
   * true表示发送成功
   */
  Result?: boolean
  /**
   * 消息id
   */
  MsgId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcknowledgeMessage返回参数结构体
 */
export interface AcknowledgeMessageResponse {
  /**
   * 如果为""，则说明没有错误返回，否则返回具体的错误信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEnvironmentRoles返回参数结构体
 */
export interface DeleteEnvironmentRolesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishCmqMsg请求参数结构体
 */
export interface PublishCmqMsgRequest {
  /**
   * 主题名
   */
  TopicName: string
  /**
   * 消息内容，消息总大小需不大于1024K
   */
  MsgContent: string
  /**
   * 消息标签，支持传递多标签或单路由，单个标签、路由长度不能超过64个字符。
   */
  MsgTag?: Array<string>
}

/**
 * ModifyCmqTopicAttribute请求参数结构体
 */
export interface ModifyCmqTopicAttributeRequest {
  /**
   * 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  TopicName: string
  /**
   * 消息最大长度。取值范围1024 - 65536 Byte（即1 - 64K），默认值65536。
   */
  MaxMsgSize?: number
  /**
   * 消息保存时间。取值范围60 - 86400 s（即1分钟 - 1天），默认值86400。
   */
  MsgRetentionSeconds?: number
  /**
   * 是否开启消息轨迹标识，true表示开启，false表示不开启，不填表示不开启。
   */
  Trace?: boolean
}

/**
 * DeleteTopics返回参数结构体
 */
export interface DeleteTopicsResponse {
  /**
   * 被删除的主题数组。
   */
  TopicSets?: Array<TopicRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RewindCmqQueue请求参数结构体
 */
export interface RewindCmqQueueRequest {
  /**
   * 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  QueueName: string
  /**
   * 设定该时间，则（Batch）receiveMessage接口，会按照生产消息的先后顺序消费该时间戳以后的消息。
   */
  StartConsumeTime: number
}

/**
 * DeleteRocketMQVipInstance请求参数结构体
 */
export interface DeleteRocketMQVipInstanceRequest {
  /**
   * 实例的集群ID
   */
  ClusterId: string
}

/**
 * 消息日志
 */
export interface MsgLog {
  /**
   * 消息ID。
   */
  MsgId?: string
  /**
   * 生产者名称。
   */
  ProducerName?: string
  /**
   * 生产时间。
   */
  ProduceTime?: string
  /**
   * 生产客户端地址。
   */
  ProducerAddr?: string
}

/**
 * cmq topic返回信息展示字段
 */
export interface CmqTopic {
  /**
   * 主题的 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。固定为一天（86400秒），该属性不能修改。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRetentionSeconds?: number
  /**
   * 消息最大长度。取值范围1024 - 1048576Byte（即1 - 1024K），默认值为1048576。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxMsgSize?: number
  /**
   * 每秒钟发布消息的条数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qps?: number
  /**
   * 描述用户创建订阅时选择的过滤策略：
FilterType = 1表示用户使用 FilterTag 标签过滤;
FilterType = 2表示用户使用 BindingKey 过滤。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterType?: number
  /**
   * 主题的创建时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 最后一次修改主题属性的时间。返回 Unix 时间戳，精确到毫秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastModifyTime?: number
  /**
   * 当前该主题中消息数目（消息堆积数）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgCount?: number
  /**
   * 创建者 Uin，CAM 鉴权 resource 由该字段组合而成。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUin?: number
  /**
   * 关联的标签。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 消息轨迹。true表示开启，false表示不开启。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trace?: boolean
  /**
   * 租户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: string
  /**
   * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceName?: string
  /**
   * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 0表示pulsar，1表示rocketmq
注意：此字段可能返回 null，表示取不到有效值。
   */
  BrokerType?: number
  /**
   * 订阅数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscriptionCount?: number
}

/**
 * RabbitMQ exchange列表成员信息
 */
export interface RabbitMQExchangeListInfo {
  /**
   * exchange 名
   */
  ExchangeName?: string
  /**
   * 备注说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * exchange 类型, 支持 "fanout","direct","topic","headers"
   */
  ExchangeType?: string
  /**
   * VHost参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualHost?: string
  /**
   * exchange 创建者, "system":"系统创建", "user":"用户创建"
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExchangeCreator?: string
  /**
   * exchange 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTimeStamp?: string
  /**
   * exchange 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModTimeStamp?: string
  /**
   * 输入消息速率
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageRateIn?: number
  /**
   * 输出消息速率
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageRateOut?: number
  /**
   * 是否为持久化交换机，true 为持久化，false 为非持久化
注意：此字段可能返回 null，表示取不到有效值。
   */
  Durable?: boolean
  /**
   * 是否为自动删除交换机，true 为自动删除，false 为非自动删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoDelete?: boolean
  /**
   * 是否为内部交换机，true 为内部交换机
注意：此字段可能返回 null，表示取不到有效值。
   */
  Internal?: boolean
  /**
   * 交换机所属实例 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 生效的策略名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Policy?: string
  /**
   * 扩展参数 key-value 对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Arguments?: string
  /**
   * 未调度的延时消息数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessagesDelayed?: number
}

/**
 * DescribeBindVpcs请求参数结构体
 */
export interface DescribeBindVpcsRequest {
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * Pulsar 集群的ID
   */
  ClusterId?: string
}

/**
 * 主题关键信息
 */
export interface TopicRecord {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 主题名称。
   */
  TopicName: string
}

/**
 * DescribeEnvironmentRoles请求参数结构体
 */
export interface DescribeEnvironmentRolesRequest {
  /**
   * 必填字段，环境（命名空间）名称。
   */
  EnvironmentId?: string
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * 必填字段，Pulsar 集群的ID
   */
  ClusterId?: string
  /**
   * 角色名称
   */
  RoleName?: string
  /**
   * * RoleName
按照角色名进行过滤，精确查询。
类型：String
必选：否
   */
  Filters?: Array<Filter>
}

/**
 * DescribeRabbitMQUser请求参数结构体
 */
export interface DescribeRabbitMQUserRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * 用户名检索，支持前缀匹配，后缀匹配
   */
  SearchUser?: string
  /**
   * 分页Offset
   */
  Offset?: number
  /**
   * 分页Limit
   */
  Limit?: number
  /**
   * 用户名，精确查询
   */
  User?: string
  /**
   * 用户标签，根据标签过滤列表
   */
  Tags?: Array<string>
}

/**
 * DescribeRocketMQTopics返回参数结构体
 */
export interface DescribeRocketMQTopicsResponse {
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 主题信息列表
   */
  Topics?: Array<RocketMQTopic>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 命名空间信息
 */
export interface Environment {
  /**
   * 命名空间名称
   */
  EnvironmentId?: string
  /**
   * 说明
   */
  Remark?: string
  /**
   * 未消费消息过期时间，单位：秒，最大1296000（15天）
   */
  MsgTTL?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最近修改时间
   */
  UpdateTime?: string
  /**
   * 命名空间ID
   */
  NamespaceId?: string
  /**
   * 命名空间名称
   */
  NamespaceName?: string
  /**
   * Topic数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicNum?: number
  /**
   * 消息保留策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionPolicy?: RetentionPolicy
  /**
   * 是否自动创建订阅
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoSubscriptionCreation?: boolean
}

/**
 * 租户RocketMQ集群详细信息
 */
export interface RocketMQClusterDetail {
  /**
   * 集群基本信息
   */
  Info: RocketMQClusterInfo
  /**
   * 集群配置信息
   */
  Config: RocketMQClusterConfig
  /**
   * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
}

/**
 * DescribeRocketMQGroups返回参数结构体
 */
export interface DescribeRocketMQGroupsResponse {
  /**
   * 总数量
   */
  TotalCount?: number
  /**
   * 订阅组列表
   */
  Groups?: Array<RocketMQGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQConsumerConnectionDetail返回参数结构体
 */
export interface DescribeRocketMQConsumerConnectionDetailResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 消费端主题信息列表
   */
  Details?: Array<RocketMQConsumerTopic>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQSmoothMigrationTaskList请求参数结构体
 */
export interface DescribeRocketMQSmoothMigrationTaskListRequest {
  /**
   * 查询起始偏移量
   */
  Offset: number
  /**
   * 查询最大数量
   */
  Limit: number
  /**
   * 查询过滤器，
支持的字段如下
TaskStatus, 支持多选
ConnectionType，支持多选
ClusterId，精确搜索
TaskName，支持模糊搜索
   */
  Filters?: Array<Filter>
}

/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
  /**
   * 集群名称，不支持中字以及除了短线和下划线外的特殊字符且不超过64个字符。
   */
  ClusterName: string
  /**
   * 用户专享物理集群ID，如果不传，则默认在公共集群上创建用户集群资源。
   */
  BindClusterId?: number
  /**
   * 说明，128个字符以内。
   */
  Remark?: string
  /**
   * 集群的标签列表(已废弃)
   */
  Tags?: Array<Tag>
  /**
   * 是否开启公网访问，不填时默认开启
   */
  PublicAccessEnabled?: boolean
}

/**
 * DeleteProCluster返回参数结构体
 */
export interface DeleteProClusterResponse {
  /**
   * 退还实例订单号
   */
  DealName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCmqQueueAttribute返回参数结构体
 */
export interface ModifyCmqQueueAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCmqQueues请求参数结构体
 */
export interface DescribeCmqQueuesRequest {
  /**
   * 分页时本页获取队列列表的起始位置。如果填写了该值，必须也要填写 limit 。该值缺省时，后台取默认值 0
   */
  Offset?: number
  /**
   * 分页时本页获取队列的个数，如果不传递该参数，则该参数默认为20，最大值为50。
   */
  Limit?: number
  /**
   * 根据QueueName进行过滤
   */
  QueueName?: string
  /**
   * CMQ 队列名称列表过滤
   */
  QueueNameList?: Array<string>
  /**
   * 标签过滤查找时，需要设置为 true
   */
  IsTagFilter?: boolean
  /**
   * 过滤器。目前支持按标签过滤，标签的Name需要加前缀“tag:”，例如：tag:负责人、tag:环境、tag:业务
   */
  Filters?: Array<Filter>
}

/**
 * ResetRocketMQConsumerOffSet返回参数结构体
 */
export interface ResetRocketMQConsumerOffSetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RabbitMQ用户实体详情
 */
export interface RabbitMQUser {
  /**
   * 集群实例Id
   */
  InstanceId?: string
  /**
   * 用户名，登录时使用
   */
  User?: string
  /**
   * 密码，登录时使用
   */
  Password?: string
  /**
   * 用户描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 用户标签，用于决定改用户访问RabbitMQ Management的权限范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<string>
  /**
   * 用户创建时间
   */
  CreateTime?: string
  /**
   * 用户最后修改时间
   */
  ModifyTime?: string
  /**
   * 用户类型，System：系统创建，User：用户创建
   */
  Type?: string
  /**
   * 单个用户最大可用连接数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxConnections?: number
  /**
   * 单个用户最大可用通道数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxChannels?: number
}

/**
 * DescribeRocketMQVipInstances请求参数结构体
 */
export interface DescribeRocketMQVipInstancesRequest {
  /**
   * 查询条件过滤器，支持的查询条件如下：
instanceIds - 实例ID
instanceName - 实例名称
status - 实例状态
   */
  Filters?: Array<Filter>
  /**
   * 查询数目上限，默认20
   */
  Limit?: number
  /**
   * 查询起始位置
   */
  Offset?: number
}

/**
 * DeleteRabbitMQVirtualHost请求参数结构体
 */
export interface DeleteRabbitMQVirtualHostRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * vhost名
   */
  VirtualHost: string
}

/**
 * CreateRabbitMQVipInstance返回参数结构体
 */
export interface CreateRabbitMQVipInstanceResponse {
  /**
   * 订单号Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranId?: string
  /**
   * 实例Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEnvironmentAttributes返回参数结构体
 */
export interface ModifyEnvironmentAttributesResponse {
  /**
   * 命名空间名称。
   */
  EnvironmentId?: string
  /**
   * 未消费消息过期时间，单位：秒。
   */
  MsgTTL?: number
  /**
   * 备注，字符串最长不超过128。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cmq TransactionPolicy
 */
export interface CmqTransactionPolicy {
  /**
   * 第一次回查时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstQueryInterval: number
  /**
   * 最大查询次数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxQueryCount: number
}

/**
 * ModifyTopic请求参数结构体
 */
export interface ModifyTopicRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 主题名。
   */
  TopicName: string
  /**
   * 分区数，必须大于或者等于原分区数，若想维持原分区数请输入原数目，修改分区数仅对非全局顺序消息起效果，不允许超过32个分区。
   */
  Partitions: number
  /**
   * Pulsar 集群的ID
   */
  ClusterId: string
  /**
   * 备注，128字符以内。
   */
  Remark?: string
  /**
   * 未消费消息过期时间，单位：秒，取值范围：60秒~15天。

   */
  MsgTTL?: number
  /**
   * 不传默认是原生策略，DefaultPolicy表示当订阅下达到最大未确认消息数 5000 时，服务端将不再向当前订阅下的所有消费者推送消息，DynamicPolicy表示动态调整订阅下的最大未确认消息数，具体配额是在 5000 和消费者数量*20之间取最大值。每个消费者默认最大 unack 消息数为 20，超过该限制时仅影响该消费者，不影响其他消费者。
   */
  UnackPolicy?: string
}

/**
 * 消费者
 */
export interface Consumer {
  /**
   * 消费者开始连接的时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectedSince?: string
  /**
   * 消费者地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerAddr?: string
  /**
   * 消费者名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerName?: string
  /**
   * 消费者版本。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientVersion?: string
  /**
   * 消费者连接的主题分区号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partition?: number
}

/**
 * CreateCmqSubscribe请求参数结构体
 */
export interface CreateCmqSubscribeRequest {
  /**
   * 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线（-）。
   */
  TopicName: string
  /**
   * 订阅名字，在单个地域同一账号的同一主题下唯一。订阅名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  SubscriptionName: string
  /**
   * 订阅的协议，目前支持两种协议：http、queue。使用http协议，用户需自己搭建接受消息的web server。使用queue，消息会自动推送到CMQ queue，用户可以并发地拉取消息。
   */
  Protocol: string
  /**
   * 接收通知的Endpoint，根据协议Protocol区分：对于http，Endpoint必须以“`http://`”开头，host可以是域名或IP；对于Queue，则填QueueName。 请注意，目前推送服务不能推送到私有网络中，因此Endpoint填写为私有网络域名或地址将接收不到推送的消息，目前支持推送到公网和基础网络。
   */
  Endpoint: string
  /**
   * 向Endpoint推送消息出现错误时，CMQ推送服务器的重试策略。取值有：1）BACKOFF_RETRY，退避重试。每隔一定时间重试一次，重试够一定次数后，就把该消息丢弃，继续推送下一条消息；2）EXPONENTIAL_DECAY_RETRY，指数衰退重试。每次重试的间隔是指数递增的，例如开始1s，后面是2s，4s，8s...由于Topic消息的周期是一天，所以最多重试一天就把消息丢弃。默认值是EXPONENTIAL_DECAY_RETRY。
   */
  NotifyStrategy?: string
  /**
   * 消息正文。消息标签（用于消息过滤)。标签数量不能超过5个，每个标签不超过16个字符。与(Batch)PublishMessage的MsgTag参数配合使用，规则：1）如果FilterTag没有设置，则无论MsgTag是否有设置，订阅接收所有发布到Topic的消息；2）如果FilterTag数组有值，则只有数组中至少有一个值在MsgTag数组中也存在时（即FilterTag和MsgTag有交集），订阅才接收该发布到Topic的消息；3）如果FilterTag数组有值，但MsgTag没设置，则不接收任何发布到Topic的消息，可以认为是2）的一种特例，此时FilterTag和MsgTag没有交集。规则整体的设计思想是以订阅者的意愿为主。
   */
  FilterTag?: Array<string>
  /**
   * BindingKey数量不超过5个， 每个BindingKey长度不超过64字节，该字段表示订阅接收消息的过滤策略，每个BindingKey最多含有15个“.”， 即最多16个词组。
   */
  BindingKey?: Array<string>
  /**
   * 推送内容的格式。取值：1）JSON；2）SIMPLIFIED，即raw格式。如果Protocol是queue，则取值必须为SIMPLIFIED。如果Protocol是http，两个值均可以，默认值是JSON。
   */
  NotifyContentFormat?: string
}

/**
 * DeleteSubscriptions返回参数结构体
 */
export interface DeleteSubscriptionsResponse {
  /**
   * 成功删除的订阅关系数组。
   */
  SubscriptionTopicSets?: Array<SubscriptionTopic>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRocketMQTopic请求参数结构体
 */
export interface DeleteRocketMQTopicRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  NamespaceId: string
  /**
   * 主题名称
   */
  Topic: string
}

/**
 * 消息保留策略
 */
export interface RetentionPolicy {
  /**
   * 消息保留时长
   */
  TimeInMinutes: number
  /**
   * 消息保留大小
   */
  SizeInMB: number
}

/**
 * DescribePublishers返回参数结构体
 */
export interface DescribePublishersResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 生产者信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Publishers?: Array<Publisher>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCmqQueueDetail请求参数结构体
 */
export interface DescribeCmqQueueDetailRequest {
  /**
   * 精确匹配QueueName
   */
  QueueName: string
}

/**
 * CreateRocketMQEnvironmentRole返回参数结构体
 */
export interface CreateRocketMQEnvironmentRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQTopicsByGroup返回参数结构体
 */
export interface DescribeRocketMQTopicsByGroupResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 主题列表
   */
  Topics?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEnvironmentRoles请求参数结构体
 */
export interface DeleteEnvironmentRolesRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 角色名称数组。
   */
  RoleNames: Array<string>
  /**
   * 必填字段，集群的ID
   */
  ClusterId: string
}

/**
 * CreateRocketMQTopic返回参数结构体
 */
export interface CreateRocketMQTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCmqQueue请求参数结构体
 */
export interface CreateCmqQueueRequest {
  /**
   * 队列名字，在单个地域同一账号下唯一。队列名称是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  QueueName: string
  /**
   * 最大堆积消息数。取值范围在公测期间为 1,000,000 - 10,000,000，正式上线后范围可达到 1000,000-1000,000,000。默认取值在公测期间为 10,000,000，正式上线后为 100,000,000。
   */
  MaxMsgHeapNum?: number
  /**
   * 消息接收长轮询等待时间。取值范围 0-30 秒，默认值 0。
   */
  PollingWaitSeconds?: number
  /**
   * 消息可见性超时。取值范围 1-43200 秒（即12小时内），默认值 30。
   */
  VisibilityTimeout?: number
  /**
   * 消息最大长度。取值范围 1024-1048576 Byte（即1-1024K），默认值 1048576。
   */
  MaxMsgSize?: number
  /**
   * 消息最长未确认时间。取值范围 30-43200 秒（30秒~12小时），默认值 3600 (1 小时)。
   */
  MsgRetentionSeconds?: number
  /**
   * 队列是否开启回溯消息能力，该参数取值范围0-1296000，0表示不开启。
   */
  RewindSeconds?: number
  /**
   * 1 表示事务队列，0 表示普通队列
   */
  Transaction?: number
  /**
   * 第一次回查间隔
   */
  FirstQueryInterval?: number
  /**
   * 最大回查次数
   */
  MaxQueryCount?: number
  /**
   * 死信队列名称
   */
  DeadLetterQueueName?: string
  /**
   * 死信策略。0为消息被多次消费未删除，1为Time-To-Live过期
   */
  Policy?: number
  /**
   * 最大接收次数 1-1000
   */
  MaxReceiveCount?: number
  /**
   * policy为1时必选。最大未消费过期时间。范围300-43200，单位秒，需要小于消息最大保留时间msgRetentionSeconds
   */
  MaxTimeToLive?: number
  /**
   * 是否开启消息轨迹追踪，当不设置字段时，默认为不开启，该字段为true表示开启，为false表示不开启
   */
  Trace?: boolean
  /**
   * 标签数组
   */
  Tags?: Array<Tag>
  /**
   * 队列可回溯存储空间：若开启消息回溯，取值范围：10240MB - 512000MB，若不开启消息回溯，取值：0
   */
  RetentionSizeInMB?: number
}

/**
 * ModifyEnvironmentRole返回参数结构体
 */
export interface ModifyEnvironmentRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRocketMQGroups请求参数结构体
 */
export interface DescribeRocketMQGroupsRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间
   */
  NamespaceId: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 限制条数
   */
  Limit: number
  /**
   * 主题名称，输入此参数可查询该主题下所有的订阅组
   */
  FilterTopic?: string
  /**
   * 按消费组名称查询消费组，支持模糊查询
   */
  FilterGroup?: string
  /**
   * 按照指定字段排序，可选值为tps，accumulative
   */
  SortedBy?: string
  /**
   * 按升序或降序排列，可选值为asc，desc
   */
  SortOrder?: string
  /**
   * 订阅组名称，指定此参数后将只返回该订阅组信息
   */
  FilterOneGroup?: string
  /**
   * group类型
   */
  Types?: Array<string>
}

/**
 * DescribeRocketMQMsgTrace返回参数结构体
 */
export interface DescribeRocketMQMsgTraceResponse {
  /**
   * 轨迹详情列表
   */
  Result?: Array<TraceResult>
  /**
   * 消息轨迹页展示的topic名称
   */
  ShowTopicName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportRocketMQTopics返回参数结构体
 */
export interface ImportRocketMQTopicsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAMQPCluster返回参数结构体
 */
export interface ModifyAMQPClusterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePublisherSummary返回参数结构体
 */
export interface DescribePublisherSummaryResponse {
  /**
   * 生产速率（条/秒）
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgRateIn?: number
  /**
   * 生产速率（字节/秒）
注意：此字段可能返回 null，表示取不到有效值。
   */
  MsgThroughputIn?: number
  /**
   * 生产者数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublisherCount?: number
  /**
   * 消息存储大小，以字节为单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSize?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCmqTopic请求参数结构体
 */
export interface DeleteCmqTopicRequest {
  /**
   * 主题名字，在单个地域同一账号下唯一。主题名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。
   */
  TopicName: string
}

/**
 * DescribePulsarProInstanceDetail返回参数结构体
 */
export interface DescribePulsarProInstanceDetailResponse {
  /**
   * 集群信息
   */
  ClusterInfo?: PulsarProClusterInfo
  /**
   * 集群网络接入点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkAccessPointInfos?: Array<PulsarNetworkAccessPointInfo>
  /**
   * 集群规格信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterSpecInfo?: PulsarProClusterSpecInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindCmqDeadLetter请求参数结构体
 */
export interface UnbindCmqDeadLetterRequest {
  /**
   * 死信策略源队列名称，调用本接口会清空该队列的死信队列策略。
   */
  SourceQueueName: string
}

/**
 * DescribeRoles请求参数结构体
 */
export interface DescribeRolesRequest {
  /**
   * 必填字段，集群Id
   */
  ClusterId: string
  /**
   * 角色名称，模糊查询
   */
  RoleName?: string
  /**
   * 起始下标，不填默认为0。
   */
  Offset?: number
  /**
   * 返回数量，不填则默认为10，最大值为20。
   */
  Limit?: number
  /**
   * * RoleName
按照角色名进行过滤，精确查询。
类型：String
必选：否
   */
  Filters?: Array<Filter>
}

/**
 * DeleteSubscriptions请求参数结构体
 */
export interface DeleteSubscriptionsRequest {
  /**
   * 订阅关系集合，每次最多删除20个。
   */
  SubscriptionTopicSets: Array<SubscriptionTopic>
  /**
   * pulsar集群Id。
   */
  ClusterId?: string
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId?: string
  /**
   * 是否强制删除，默认为false
   */
  Force?: boolean
}

/**
 * DescribeAllTenants请求参数结构体
 */
export interface DescribeAllTenantsRequest {
  /**
   * 查询偏移量
   */
  Offset: number
  /**
   * 查询限制条数
   */
  Limit: number
  /**
   * 物理集群名称
   */
  ClusterName?: string
  /**
   * 虚拟集群ID
   */
  TenantId?: string
  /**
   * 虚拟集群名称
   */
  TenantName?: string
  /**
   * 协议类型数组
   */
  Types?: Array<string>
  /**
   * 排序字段名，支持createTime，updateTime
   */
  SortBy?: string
  /**
   * 升序排列ASC，降序排列DESC
   */
  SortOrder?: string
}

/**
 * ResetRocketMQConsumerOffSet请求参数结构体
 */
export interface ResetRocketMQConsumerOffSetRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 命名空间名称
   */
  NamespaceId: string
  /**
   * 消费组名称
   */
  GroupId: string
  /**
   * 主题名称
   */
  Topic: string
  /**
   * 重置方式，0表示从最新位点开始，1表示从指定时间点开始
   */
  Type: number
  /**
   * 重置指定的时间戳，仅在 Type 为1是生效，以毫秒为单位
   */
  ResetTimestamp?: number
}

/**
 * 租户AMQP集群详细信息
 */
export interface AMQPClusterDetail {
  /**
   * 集群基本信息
   */
  Info: AMQPClusterInfo
  /**
   * 集群配置信息
   */
  Config: AMQPClusterConfig
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags: Array<Tag>
  /**
   * 集群状态，0:创建中，1:正常，2:销毁中，3:已删除，4: 隔离中，5:创建失败，6: 删除失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
}

/**
 * CreateEnvironmentRole请求参数结构体
 */
export interface CreateEnvironmentRoleRequest {
  /**
   * 环境（命名空间）名称。
   */
  EnvironmentId: string
  /**
   * 角色名称。
   */
  RoleName: string
  /**
   * 授权项，最多只能包含produce、consume两项的非空字符串数组。
   */
  Permissions: Array<string>
  /**
   * 必填字段，集群的ID
   */
  ClusterId: string
}

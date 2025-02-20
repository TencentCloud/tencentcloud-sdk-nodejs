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
 * DescribeRabbitMQServerlessConnection返回参数结构体
 */
export interface DescribeRabbitMQServerlessConnectionResponse {
  /**
   * 返回连接数量
   */
  TotalCount?: number
  /**
   * 连接详情列表
   */
  Connections?: Array<RabbitMQConnection>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRabbitMQServerlessPermission返回参数结构体
 */
export interface DeleteRabbitMQServerlessPermissionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Rabbitmq路由关系列表成员
 */
export interface RabbitMQBindingListInfo {
  /**
   * 路由关系id
   */
  BindingId?: number
  /**
   * Vhost参数
   */
  VirtualHost?: string
  /**
   * 源exchange名称
   */
  Source?: string
  /**
   * 目标类型,queue或exchange
   */
  DestinationType?: string
  /**
   * 目标资源名称
   */
  Destination?: string
  /**
   * 绑定key
   */
  RoutingKey?: string
  /**
   * 源exchange类型
   */
  SourceExchangeType?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
}

/**
 * ModifyRabbitMQServerlessUser返回参数结构体
 */
export interface ModifyRabbitMQServerlessUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRabbitMQServerlessVirtualHost请求参数结构体
 */
export interface CreateRabbitMQServerlessVirtualHostRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * vhost名称
   */
  VirtualHost: string
  /**
   * 描述信息
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
 * DescribeRabbitMQServerlessUser返回参数结构体
 */
export interface DescribeRabbitMQServerlessUserResponse {
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
 * ModifyRabbitMQServerlessExchange返回参数结构体
 */
export interface ModifyRabbitMQServerlessExchangeResponse {
  /**
   * exchange 名称
   */
  ExchangeName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQServerlessConsumers返回参数结构体
 */
export interface DescribeRabbitMQServerlessConsumersResponse {
  /**
   * 消费者列表信息
   */
  ConsumerInfoList?: Array<RabbitMQConsumersListInfo>
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQServerlessQueueDetail返回参数结构体
 */
export interface DescribeRabbitMQServerlessQueueDetailResponse {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * Vhost参数
   */
  VirtualHost?: string
  /**
   * 队列名称
   */
  QueueName?: string
  /**
   * 队列类型,取值classic或quorum
   */
  QueueType?: string
  /**
   * 在线消费者数量
   */
  Consumers?: number
  /**
   * 持久标记
   */
  Durable?: boolean
  /**
   * 自动清除
   */
  AutoDelete?: boolean
  /**
   * 备注
   */
  Remark?: string
  /**
   * MessageTTL参数,classic类型专用
   */
  MessageTTL?: number
  /**
   * AutoExpire参数
   */
  AutoExpire?: number
  /**
   * MaxLength参数
   */
  MaxLength?: number
  /**
   * MaxLengthBytes参数
   */
  MaxLengthBytes?: number
  /**
   * DeliveryLimit参数,quorum类型专用
   */
  DeliveryLimit?: number
  /**
   * OverflowBehaviour参数,取值为drop-head, reject-publish或reject-publish-dlx
   */
  OverflowBehaviour?: string
  /**
   * DeadLetterExchange参数
   */
  DeadLetterExchange?: string
  /**
   * DeadLetterRoutingKey参数
   */
  DeadLetterRoutingKey?: string
  /**
   * SingleActiveConsumer参数
   */
  SingleActiveConsumer?: boolean
  /**
   * MaximumPriority参数,classic类型专用
   */
  MaximumPriority?: number
  /**
   * LazyMode参数,classic类型专用
   */
  LazyMode?: boolean
  /**
   * MasterLocator参数,classic类型专用
   */
  MasterLocator?: string
  /**
   * MaxInMemoryLength参数,quorum类型专用
   */
  MaxInMemoryLength?: number
  /**
   * MaxInMemoryBytes参数,quorum类型专用
   */
  MaxInMemoryBytes?: number
  /**
   * 创建时间戳,单位秒
   */
  CreateTime?: number
  /**
   * 节点
   */
  Node?: string
  /**
   * 仲裁队列死信一致性策略
   */
  DeadLetterStrategy?: string
  /**
   * 仲裁队列的领导者选举策略
   */
  QueueLeaderLocator?: string
  /**
   * 仲裁队列的初始副本组大小
   */
  QuorumInitialGroupSize?: number
  /**
   * 是否为独占队列
   */
  Exclusive?: boolean
  /**
   * 生效的策略名
   */
  Policy?: string
  /**
   * 扩展参数 key-value
   */
  Arguments?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQServerlessVirtualHost请求参数结构体
 */
export interface DescribeRabbitMQServerlessVirtualHostRequest {
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
 * ModifyRabbitMQServerlessVirtualHost请求参数结构体
 */
export interface ModifyRabbitMQServerlessVirtualHostRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * vhost名
   */
  VirtualHost: string
  /**
   * vhost描述信息
   */
  Description?: string
  /**
   * 消息轨迹开关,true打开,false关闭
   */
  TraceFlag?: boolean
}

/**
 * CreateRabbitMQServerlessUser返回参数结构体
 */
export interface CreateRabbitMQServerlessUserResponse {
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
 * DeleteRabbitMQServerlessQueue请求参数结构体
 */
export interface DeleteRabbitMQServerlessQueueRequest {
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
 * ListRabbitMQServerlessInstances返回参数结构体
 */
export interface ListRabbitMQServerlessInstancesResponse {
  /**
   * 实例列表
   */
  Instances?: Array<RabbitMQServerlessInstance>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRabbitMQServerlessUser请求参数结构体
 */
export interface CreateRabbitMQServerlessUserRequest {
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
   * serverless 实例该字段无效
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
 * ModifyRabbitMQServerlessUser请求参数结构体
 */
export interface ModifyRabbitMQServerlessUserRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * 用户名
   */
  User: string
  /**
   * 密码
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
 * DeleteRabbitMQServerlessPermission请求参数结构体
 */
export interface DeleteRabbitMQServerlessPermissionRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * 用户名，登录时使用
   */
  User: string
  /**
   * vhost名
   */
  VirtualHost: string
}

/**
 * CreateRabbitMQServerlessVirtualHost返回参数结构体
 */
export interface CreateRabbitMQServerlessVirtualHostResponse {
  /**
   * vhost名称
   */
  VirtualHost?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRabbitMQServerlessInstance请求参数结构体
 */
export interface ModifyRabbitMQServerlessInstanceRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群名
   */
  ClusterName?: string
  /**
   * 备注信息
   */
  Remark?: string
  /**
   * 是否开启trace
   */
  TraceFlag?: boolean
}

/**
 * rabbitmq serverless 实例
 */
export interface RabbitMQServerlessInstance {
  /**
   * 实例Id
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例版本号
   */
  InstanceVersion?: string
  /**
   * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败
   */
  Status?: number
  /**
   * TPS
   */
  MaxTps?: number
  /**
   * 带宽
   */
  MaxBandWidth?: number
  /**
   * 集群过期时间
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
   * 备注
   */
  Remark?: string
  /**
   * 集群规格
   */
  SpecName?: string
  /**
   * 异常信息
   */
  ExceptionInformation?: string
  /**
   * 公网接入点
   */
  PublicAccessEndpoint?: string
  /**
   * 私有网络接入点
   */
  Vpcs?: Array<RabbitMQServerlessEndpoint>
  /**
   * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败

   */
  ClusterStatus?: number
  /**
   * 集群类型：1
   */
  InstanceType?: number
  /**
   * 过期时间
   */
  CreateTime?: number
  /**
   * 为了兼容托管版，固定值 0
   */
  NodeCount?: number
  /**
   * 为了兼容托管版，固定值 0
   */
  MaxStorage?: number
  /**
   * 隔离时间
   */
  IsolatedTime?: number
}

/**
 * DescribeRabbitMQServerlessExchanges返回参数结构体
 */
export interface DescribeRabbitMQServerlessExchangesResponse {
  /**
   * 交换机列表
   */
  ExchangeInfoList?: Array<RabbitMQExchangeListInfo>
  /**
   * 交换机总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRabbitMQServerlessVirtualHost返回参数结构体
 */
export interface DeleteRabbitMQServerlessVirtualHostResponse {
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
   */
  Description?: string
  /**
   * 用户标签，用于决定改用户访问RabbitMQ Management的权限范围
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
   * 该用户所能允许的最大连接数
   */
  MaxConnections?: number
  /**
   * 该用户所能允许的最大通道数
   */
  MaxChannels?: number
}

/**
 * 公网访问信息
 */
export interface RabbitMQServerlessAccessInfo {
  /**
   * 公网域名
   */
  PublicAccessEndpoint?: string
  /**
   * 公网状态
   */
  PublicDataStreamStatus?: string
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
   */
  ConfigRegexp?: string
  /**
   * 权限类型，消息写入相关操作，该用户可操作该vhost下的资源名称正则表达式
   */
  WriteRegexp?: string
  /**
   * 权限类型，消息读取相关操作，该用户可操作该vhost下的资源名称正则表达式
   */
  ReadRegexp?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
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
   */
  UsedQueue?: number
}

/**
 * DescribeRabbitMQServerlessVirtualHost返回参数结构体
 */
export interface DescribeRabbitMQServerlessVirtualHostResponse {
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
 * DescribeRabbitMQServerlessQueues返回参数结构体
 */
export interface DescribeRabbitMQServerlessQueuesResponse {
  /**
   * 队列列表信息
   */
  QueueInfoList?: Array<RabbitMQQueueListInfo>
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRabbitMQServerlessInstance返回参数结构体
 */
export interface ModifyRabbitMQServerlessInstanceResponse {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRabbitMQServerlessVirtualHost返回参数结构体
 */
export interface ModifyRabbitMQServerlessVirtualHostResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRabbitMQServerlessExchange请求参数结构体
 */
export interface CreateRabbitMQServerlessExchangeRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * VHost参数
   */
  VirtualHost: string
  /**
   * exchange 名称
   */
  ExchangeName: string
  /**
   * exchange 类型, 支持 "fanout","direct","topic","headers"
   */
  ExchangeType: string
  /**
   * exchange 备注
   */
  Remark?: string
  /**
   * 是否为持久化 exchange, 当集群重启时,将会清除所有该字段为"false"的 exchange
   */
  Durable?: boolean
  /**
   * 是否自动删除该 exchange, 如果为 "true", 当解绑所有当前 exchange 上的路由关系时, 该 exchange 将会被自动删除
   */
  AutoDelete?: boolean
  /**
   * 是否为内部 exchange, 如果为 "true", 则无法直接投递消息到该 exchange, 需要在路由设置中通过其他 exchange 进行转发
   */
  Internal?: boolean
  /**
   * 替代 exchange, 如果消息无法发送到当前 exchange, 就会发送到该替代 exchange
   */
  AlternateExchange?: string
}

/**
 * DescribeRabbitMQServerlessConnection请求参数结构体
 */
export interface DescribeRabbitMQServerlessConnectionRequest {
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
 * DescribeRabbitMQServerlessUser请求参数结构体
 */
export interface DescribeRabbitMQServerlessUserRequest {
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
 * DeleteRabbitMQServerlessUser返回参数结构体
 */
export interface DeleteRabbitMQServerlessUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   */
  Remark?: string
  /**
   * VPC及网络信息
   */
  Vpcs?: Array<VpcEndpointInfo>
  /**
   * 可用区信息
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
   */
  ExceptionInformation?: string
  /**
   * 实例状态，0表示创建中，1表示正常，2表示隔离中，3表示已销毁，4 - 异常, 5 - 发货失败
   */
  ClusterStatus?: number
  /**
   * 自动续费标记，0表示默认状态(用户未设置，即初始状态即手动续费)， 1表示自动续费，2表示明确不自动续费(用户设置)
   */
  AutoRenewFlag?: number
  /**
   * 是否开启镜像队列策略。1表示开启，0表示没开启。
   */
  MirrorQueuePolicyFlag?: number
  /**
   * 每秒消费消息数 单位：条/秒
   */
  MessageConsumeRate?: number
  /**
   * 集群版本信息
   */
  ClusterVersion?: string
  /**
   * 计费模式，0-后付费，1-预付费
   */
  PayMode?: number
  /**
   * 集群类型
   */
  InstanceType?: number
  /**
   * 消息保留时间，单位小时
   */
  MessageRetainTime?: number
}

/**
 * DescribeRabbitMQServerlessBindings返回参数结构体
 */
export interface DescribeRabbitMQServerlessBindingsResponse {
  /**
   * 路由关系列表
   */
  BindingInfoList?: Array<RabbitMQBindingListInfo>
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRabbitMQServerlessExchange返回参数结构体
 */
export interface CreateRabbitMQServerlessExchangeResponse {
  /**
   * exchange 名称
   */
  ExchangeName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRabbitMQServerlessExchange返回参数结构体
 */
export interface DeleteRabbitMQServerlessExchangeResponse {
  /**
   * exchange 名称
   */
  ExchangeName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRabbitMQServerlessUser请求参数结构体
 */
export interface DeleteRabbitMQServerlessUserRequest {
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
 * DescribeRabbitMQServerlessConsumers请求参数结构体
 */
export interface DescribeRabbitMQServerlessConsumersRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * Vhost参数
   */
  VirtualHost: string
  /**
   * 队列名
   */
  QueueName: string
  /**
   * 分页Limit
   */
  Limit?: number
  /**
   * 分页Offset
   */
  Offset?: number
  /**
   * 搜索关键词
   */
  SearchWord?: string
}

/**
 * 队列消费者列表信息
 */
export interface RabbitMQConsumersListInfo {
  /**
   * 客户端Ip
   */
  ClientIp?: string
  /**
   * 消费者Tag
   */
  ConsumerTag?: string
}

/**
 * CreateRabbitMQServerlessBinding返回参数结构体
 */
export interface CreateRabbitMQServerlessBindingResponse {
  /**
   * 队列名称
   */
  InstanceId?: string
  /**
   * vhost参数
   */
  VirtualHost?: string
  /**
   * 路由关系Id
   */
  BindingId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户数配额
 */
export interface UserQuota {
  /**
   * 最大用户数
   */
  MaxUser?: number
  /**
   * 已用用户数
   */
  UsedUser?: number
}

/**
 * ModifyRabbitMQServerlessPermission请求参数结构体
 */
export interface ModifyRabbitMQServerlessPermissionRequest {
  /**
   * 集群实例Id
   */
  InstanceId: string
  /**
   * 用户名，权限关联的用户
   */
  User: string
  /**
   * vhost名
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
 * CreateRabbitMQServerlessQueue请求参数结构体
 */
export interface CreateRabbitMQServerlessQueueRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * VHost参数
   */
  VirtualHost: string
  /**
   * 队列名称
   */
  QueueName: string
  /**
   * 只支持 classic
   */
  QueueType?: string
  /**
   * 持久标记,classic类型必传,quorum类型无需传入固定为true
   */
  Durable?: boolean
  /**
   * 自动清除,classic类型必传,quorum类型无需传入固定为false
   */
  AutoDelete?: boolean
  /**
   * 备注
   */
  Remark?: string
  /**
   * MessageTTL参数,classic类型专用
   */
  MessageTTL?: number
  /**
   * AutoExpire参数，单位为 ms，队列在指定时间内没有被使用，将会被删除
   */
  AutoExpire?: number
  /**
   * MaxLength参数。队列可以容纳的最大条数。若超出上限，将根据 overview behavior 处理
   */
  MaxLength?: number
  /**
   * MaxLengthBytes参数。若超出上限，将根据 overview behavior 处理。
   */
  MaxLengthBytes?: number
  /**
   * DeliveryLimit参数,quorum类型专用
   */
  DeliveryLimit?: number
  /**
   * OverflowBehaviour参数,取值为drop-head, reject-publish或reject-publish-dlx
   */
  OverflowBehaviour?: string
  /**
   * DeadLetterExchange参数。可将过期或被拒绝的消息投往指定的死信 exchange。
   */
  DeadLetterExchange?: string
  /**
   * DeadLetterRoutingKey参数。只能包含字母、数字、"."、"-"，"@"，"_"
   */
  DeadLetterRoutingKey?: string
  /**
   * SingleActiveConsumer参数。若开启，需确保每次有且只有一个消费者从队列中消费
   */
  SingleActiveConsumer?: boolean
  /**
   * MaximumPriority参数,classic类型专用
   */
  MaximumPriority?: number
  /**
   * LazyMode参数,classic类型专用
   */
  LazyMode?: boolean
  /**
   * MasterLocator参数,classic类型专用,取值为min-masters,client-local或random
   */
  MasterLocator?: string
  /**
   * MaxInMemoryLength参数，quorum类型专用。quorum 队列的内存中最大消息数量
   */
  MaxInMemoryLength?: number
  /**
   * MaxInMemoryBytes参数，quorum类型专用。quorum 队列的内存中最大数总消息大小
   */
  MaxInMemoryBytes?: number
  /**
   * Node参数，非必填，指定创建 queue 所在节点
   */
  Node?: string
  /**
   * 仲裁队列死信一致性策略，at-most-once、at-least-once，默认是at-most-once
   */
  DeadLetterStrategy?: string
  /**
   * 仲裁队列的领导者选举策略，client-local、balanced，默认是client-local
   */
  QueueLeaderLocator?: string
  /**
   * 仲裁队列的初始副本组大小，默认3
   */
  QuorumInitialGroupSize?: number
}

/**
 * DeleteRabbitMQServerlessBinding请求参数结构体
 */
export interface DeleteRabbitMQServerlessBindingRequest {
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
 * DescribeRabbitMQServerlessQueueDetail请求参数结构体
 */
export interface DescribeRabbitMQServerlessQueueDetailRequest {
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
 * RabbitMQ队列列表成员信息
 */
export interface RabbitMQQueueListInfo {
  /**
   * 队列名
   */
  QueueName?: string
  /**
   * 备注说明
   */
  Remark?: string
  /**
   * 消费者信息
   */
  ConsumerDetail?: RabbitMQQueueListConsumerDetailInfo
  /**
   * 队列类型，取值 "classic"，"quorum"
   */
  QueueType?: string
  /**
   * 消息堆积数
   */
  MessageHeapCount?: number
  /**
   * 消息生产速率，每秒
   */
  MessageRateIn?: number
  /**
   * 消息消费速率，每秒
   */
  MessageRateOut?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * 队列是否持久化，true 为持久化，false 为非持久化
   */
  Durable?: boolean
  /**
   * 队列是否为自动删除队列，true 为自动删除，false 为非自动删除
   */
  AutoDelete?: boolean
  /**
   * 队列所属实例 ID
   */
  InstanceId?: string
  /**
   * 队列所属虚拟主机名称
   */
  VirtualHost?: string
  /**
   * 队列所在主节点名称
   */
  Node?: string
  /**
   * 生效的策略名称
   */
  Policy?: string
  /**
   * 扩展参数 key-value 对象
   */
  Arguments?: string
  /**
   * 是否独占队列
   */
  Exclusive?: boolean
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
 * ModifyRabbitMQServerlessPermission返回参数结构体
 */
export interface ModifyRabbitMQServerlessPermissionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRabbitMQServerlessExchange请求参数结构体
 */
export interface DeleteRabbitMQServerlessExchangeRequest {
  /**
   * 实例 id
   */
  InstanceId: string
  /**
   * vhost 参数
   */
  VirtualHost: string
  /**
   * exchange 名称
   */
  ExchangeName: string
}

/**
 * DescribeRabbitMQServerlessExchangeDetail请求参数结构体
 */
export interface DescribeRabbitMQServerlessExchangeDetailRequest {
  /**
   * 实例 id
   */
  InstanceId: string
  /**
   * vhost 参数
   */
  VirtualHost: string
  /**
   * exchange 名称
   */
  ExchangeName: string
}

/**
 * RabbitMQ集群规格信息
 */
export interface RabbitMQClusterSpecInfo {
  /**
   * 集群规格名称
   */
  SpecName?: string
  /**
   * 峰值tps
   */
  MaxTps?: number
  /**
   * 最大队列数
   */
  MaxQueueNum?: number
  /**
   * 最大交换机数
   */
  MaxExchangeNum?: number
  /**
   * 最大vhost数
   */
  MaxVhostNum?: number
  /**
   * 最大连接数
   */
  MaxConnNum?: number
  /**
   * 最大用户数
   */
  MaxUserNum?: number
  /**
   * 峰值带宽，已废弃
   */
  MaxBandWidth?: number
  /**
   * 公网带宽，已废弃
   */
  PublicNetworkTps?: number
}

/**
 * ModifyRabbitMQServerlessQueue返回参数结构体
 */
export interface ModifyRabbitMQServerlessQueueResponse {
  /**
   * 队列名称
   */
  QueueName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRabbitMQServerlessBinding请求参数结构体
 */
export interface CreateRabbitMQServerlessBindingRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * Vhost参数
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
   * 目标队列或者交换机
   */
  Destination: string
  /**
   * 绑定key
   */
  RoutingKey?: string
}

/**
 * 接入点
 */
export interface RabbitMQServerlessEndpoint {
  /**
   * vpc id
   */
  VpcId?: string
  /**
   * subnet id
   */
  SubnetId?: string
  /**
   * 接入地址
   */
  VpcEndpoint?: string
  /**
   * 接入地址状态
   */
  VpcDataStreamEndpointStatus?: string
  /**
   * 是否是公网
   */
  PublicNetwork?: boolean
  /**
   * 访问策略
   */
  AccessStrategy?: string
  /**
   * 带宽
   */
  Bandwidth?: number
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
   */
  Description?: string
  /**
   * vhost标签
   */
  Tags?: Array<string>
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  ModifyTime?: string
  /**
   * vhost概览统计信息
   */
  VirtualHostStatistics?: RabbitMQVirtualHostStatistics
  /**
   * vhost状态，与原生控制台对应，有running、partial、stopped、unknown
   */
  Status?: string
  /**
   * 消息堆积数
   */
  MessageHeapCount?: number
  /**
   * 输入消息速率
   */
  MessageRateIn?: number
  /**
   * 输出消息速率
   */
  MessageRateOut?: number
  /**
   * 是否存在镜像队列策略，true 为存在，false 为不存
   */
  MirrorQueuePolicyFlag?: boolean
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
   */
  UsedExchange?: number
}

/**
 * DescribeRabbitMQServerlessInstance返回参数结构体
 */
export interface DescribeRabbitMQServerlessInstanceResponse {
  /**
   * 集群信息
   */
  ClusterInfo?: RabbitMQClusterInfo
  /**
   * 集群规格信息
   */
  ClusterSpecInfo?: RabbitMQClusterSpecInfo
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
   * 网络信息
   */
  ClusterNetInfo?: RabbitMQServerlessAccessInfo
  /**
   * 公网白名单信息
   */
  ClusterWhiteListInfo?: RabbitMQServerlessWhiteListInfo
  /**
   * user配额信息
   */
  UserQuota?: UserQuota
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRabbitMQServerlessInstances请求参数结构体
 */
export interface ListRabbitMQServerlessInstancesRequest {
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 翻页大小
   */
  Limit?: number
  /**
   * 翻页的起始索引值
   */
  Offset?: number
}

/**
 * RabbitMQ连接详情
 */
export interface RabbitMQConnection {
  /**
   * 连接名称
   */
  ConnectionName?: string
  /**
   * 客户端ip
   */
  PeerHost?: string
  /**
   * 连接状态，包括 starting、tuning、opening、running、flow、blocking、blocked、closing 和 closed
   */
  State?: string
  /**
   * 连接使用用户
   */
  User?: string
  /**
   * 是否开启ssl
   */
  SSL?: boolean
  /**
   * 连接协议
   */
  Protocol?: string
  /**
   * 连接下的channel数
   */
  Channels?: number
}

/**
 * RabbitMQ队列列表消费者信息
 */
export interface RabbitMQQueueListConsumerDetailInfo {
  /**
   * 消费者数量
   */
  ConsumersNumber?: number
}

/**
 * DescribeRabbitMQServerlessInstance请求参数结构体
 */
export interface DescribeRabbitMQServerlessInstanceRequest {
  /**
   * 集群ID
   */
  InstanceId: string
}

/**
 * DescribeRabbitMQServerlessPermission请求参数结构体
 */
export interface DescribeRabbitMQServerlessPermissionRequest {
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
 * DescribeRabbitMQServerlessExchangeDetail返回参数结构体
 */
export interface DescribeRabbitMQServerlessExchangeDetailResponse {
  /**
   * exchange 名
   */
  ExchangeName?: string
  /**
   * 备注说明
   */
  Remark?: string
  /**
   * 是否为持久化 exchange, 当集群重启时, 将会清除所有该字段为 "false" 的 exchange
   */
  Durable?: boolean
  /**
   * 是否自动删除该 exchange, 如果为 "true", 当解绑所有当前 exchange 上的路由关系时, 该 exchange 将会被自动删除
   */
  AutoDelete?: boolean
  /**
   * 是否为内部 exchange, 如果为 "true", 则无法直接投递消息到该 exchange, 需要在路由设置中通过其他 exchange 进行转发
   */
  Internal?: boolean
  /**
   * 替代 exchange, 如果消息没有匹配当前 exchange 绑定的所有 queue 或 exchange, 就会发送到该替代 exchange
   */
  AlternateExchange?: string
  /**
   * exchange 类型, 支持 "fanout","direct","topic","headers"
   */
  ExchangeType?: string
  /**
   * VHost参数
   */
  VirtualHost?: string
  /**
   * exchange 创建者, "system":"系统创建", "user":"用户创建"
   */
  ExchangeCreator?: string
  /**
   * 扩展参数 key-value 字符串
   */
  Arguments?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   */
  VpcDataStreamEndpointStatus?: string
}

/**
 * DescribeRabbitMQServerlessExchanges请求参数结构体
 */
export interface DescribeRabbitMQServerlessExchangesRequest {
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
 * 公网白名单信息
 */
export interface RabbitMQServerlessWhiteListInfo {
  /**
   * 公网数据流白名单
   */
  PublicDataStreamWhiteList?: string
  /**
   * 公网数据流白名单状态
   */
  PublicDataStreamWhiteListStatus?: string
}

/**
 * DeleteRabbitMQServerlessQueue返回参数结构体
 */
export interface DeleteRabbitMQServerlessQueueResponse {
  /**
   * 队列名称
   */
  QueueName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRabbitMQServerlessQueue返回参数结构体
 */
export interface CreateRabbitMQServerlessQueueResponse {
  /**
   * 队列名称
   */
  QueueName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRabbitMQServerlessQueues请求参数结构体
 */
export interface DescribeRabbitMQServerlessQueuesRequest {
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
 * DescribeRabbitMQServerlessBindings请求参数结构体
 */
export interface DescribeRabbitMQServerlessBindingsRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * Vhost参数
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
 * DescribeRabbitMQServerlessPermission返回参数结构体
 */
export interface DescribeRabbitMQServerlessPermissionResponse {
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
 * DeleteRabbitMQServerlessBinding返回参数结构体
 */
export interface DeleteRabbitMQServerlessBindingResponse {
  /**
   * 队列名称
   */
  InstanceId?: string
  /**
   * vhost参数
   */
  VirtualHost?: string
  /**
   * 路由关系Id
   */
  BindingId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 虚拟主机配额
 */
export interface VirtualHostQuota {
  /**
   * 最大虚拟主机数
   */
  MaxVirtualHost?: number
  /**
   * 已经使用的虚拟主机数
   */
  UsedVirtualHost?: number
}

/**
 * DeleteRabbitMQServerlessVirtualHost请求参数结构体
 */
export interface DeleteRabbitMQServerlessVirtualHostRequest {
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
 * ModifyRabbitMQServerlessExchange请求参数结构体
 */
export interface ModifyRabbitMQServerlessExchangeRequest {
  /**
   * 实例 id
   */
  InstanceId: string
  /**
   * vhost 参数
   */
  VirtualHost: string
  /**
   * exchange 名称
   */
  ExchangeName: string
  /**
   * 备注信息
   */
  Remark?: string
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
   */
  Remark?: string
  /**
   * exchange 类型, 支持 "fanout","direct","topic","headers"
   */
  ExchangeType?: string
  /**
   * VHost参数
   */
  VirtualHost?: string
  /**
   * exchange 创建者, "system":"系统创建", "user":"用户创建"
   */
  ExchangeCreator?: string
  /**
   * exchange 创建时间
   */
  CreateTimeStamp?: string
  /**
   * exchange 修改时间
   */
  ModTimeStamp?: string
  /**
   * 输入消息速率
   */
  MessageRateIn?: number
  /**
   * 输出消息速率
   */
  MessageRateOut?: number
  /**
   * 是否为持久化交换机，true 为持久化，false 为非持久化
   */
  Durable?: boolean
  /**
   * 是否为自动删除交换机，true 为自动删除，false 为非自动删除
   */
  AutoDelete?: boolean
  /**
   * 是否为内部交换机，true 为内部交换机
   */
  Internal?: boolean
  /**
   * 交换机所属实例 ID
   */
  InstanceId?: string
  /**
   * 生效的策略名称
   */
  Policy?: string
  /**
   * 扩展参数 key-value 对象
   */
  Arguments?: string
  /**
   * 未调度的延时消息数量
   */
  MessagesDelayed?: number
}

/**
 * ModifyRabbitMQServerlessQueue请求参数结构体
 */
export interface ModifyRabbitMQServerlessQueueRequest {
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
  /**
   * 新修改的备注
   */
  Remark?: string
}

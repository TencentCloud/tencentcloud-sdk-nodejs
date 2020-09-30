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
 * 主题详情
 */
export interface TopicDetail {
  /**
   * 主题名称
   */
  TopicName: string

  /**
   * 主题ID
   */
  TopicId: string

  /**
   * 分区数
   */
  PartitionNum: number

  /**
   * 副本数
   */
  ReplicaNum: number

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Note: string

  /**
   * 创建时间
   */
  CreateTime: number

  /**
   * 是否开启ip鉴权白名单，true表示开启，false表示不开启
   */
  EnableWhiteList: boolean

  /**
   * ip白名单中ip个数
   */
  IpWhiteListCount: number

  /**
      * 数据备份cos bucket: 转存到cos 的bucket地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ForwardCosBucket: string

  /**
   * 数据备份cos 状态： 1 不开启数据备份，0 开启数据备份
   */
  ForwardStatus: number

  /**
   * 数据备份到cos的周期频率
   */
  ForwardInterval: number

  /**
      * 高级配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Config: Config
}

/**
 * DeleteAcl请求参数结构体
 */
export interface DeleteAclRequest {
  /**
   * 实例id信息
   */
  InstanceId: string

  /**
   * Acl资源类型，(0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID)，当前只有TOPIC，其它字段用于后续兼容开源kafka的acl时使用
   */
  ResourceType: number

  /**
   * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
   */
  ResourceName: string

  /**
   * Acl操作方式，(0:UNKNOWN，1:ANY，2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTEN_WRITE)，当前ckafka只支持READ,WRITE，其它用于后续兼容开源kafka的acl时使用
   */
  Operation: number

  /**
   * 权限类型，(0:UNKNOWN，1:ANY，2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
   */
  PermissionType: number

  /**
   * 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持
   */
  Host?: string

  /**
   * 用户列表，默认为*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
   */
  Principal?: string
}

/**
 * consumer信息
 */
export interface GroupInfoMember {
  /**
   * coordinator 为消费分组中的消费者生成的唯一 ID
   */
  MemberId: string

  /**
   * 客户消费者 SDK 自己设置的 client.id 信息
   */
  ClientId: string

  /**
   * 一般存储客户的 IP 地址
   */
  ClientHost: string

  /**
   * 存储着分配给该消费者的 partition 信息
   */
  Assignment: Assignment
}

/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 用户名称
   */
  Name: string
}

/**
 * 分区和位移
 */
export interface PartitionOffset {
  /**
      * Partition,例如"0"或"1"
注意：此字段可能返回 null，表示取不到有效值。
      */
  Partition: string

  /**
      * Offset,例如100
注意：此字段可能返回 null，表示取不到有效值。
      */
  Offset: number
}

/**
 * DescribeACL请求参数结构体
 */
export interface DescribeACLRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * Acl资源类型，(0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID)，当前只有TOPIC，其它字段用于后续兼容开源kafka的acl时使用
   */
  ResourceType: number

  /**
   * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
   */
  ResourceName: string

  /**
   * 偏移位置
   */
  Offset?: number

  /**
   * 个数限制
   */
  Limit?: number

  /**
   * 关键字匹配
   */
  SearchWord?: string
}

/**
 * DescribeTopicAttributes请求参数结构体
 */
export interface DescribeTopicAttributesRequest {
  /**
   * 实例 ID
   */
  InstanceId: string

  /**
   * 主题名称
   */
  TopicName: string
}

/**
 * DescribeInstanceAttributes请求参数结构体
 */
export interface DescribeInstanceAttributesRequest {
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * 用户组实体
 */
export interface ConsumerGroup {
  /**
   * 用户组名称
   */
  ConsumerGroupName: string

  /**
   * 订阅信息实体
   */
  SubscribedInfo: Array<SubscribedInfo>
}

/**
 * 存储着分配给该消费者的 partition 信息
 */
export interface Assignment {
  /**
   * assingment版本信息
   */
  Version: number

  /**
      * topic信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Topics: Array<GroupInfoTopics>
}

/**
 * DescribeConsumerGroup返回参数结构体
 */
export interface DescribeConsumerGroupResponse {
  /**
   * 返回的消费分组信息
   */
  Result?: ConsumerGroupResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
  /**
   * ckafka 实例Id
   */
  InstanceId: string

  /**
   * ckafka 主题名称
   */
  TopicName: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 返回的结果
   */
  Result?: InstanceResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GroupInfo内部topic对象
 */
export interface GroupInfoTopics {
  /**
   * 分配的 topic 名称
   */
  Topic: string

  /**
      * 分配的 partition 信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Partitions: Array<number>
}

/**
 * 统一返回的TopicResponse
 */
export interface TopicResult {
  /**
      * 返回的主题信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicList: Array<Topic>

  /**
      * 符合条件的 topic 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number
}

/**
 * DescribeInstancesDetail返回参数结构体
 */
export interface DescribeInstancesDetailResponse {
  /**
   * 返回的实例详情结果对象
   */
  Result?: InstanceDetailResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建预付费接口返回的Data
 */
export interface CreateInstancePreData {
  /**
      * CreateInstancePre返回固定为0，不能作为CheckTaskStatus的查询条件。只是为了保证和后台数据结构对齐。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowId: number

  /**
      * 订单号列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealNames: Array<string>
}

/**
 * DescribeACL返回参数结构体
 */
export interface DescribeACLResponse {
  /**
   * 返回的ACL结果集对象
   */
  Result?: AclResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 操作型结果返回值
 */
export interface JgwOperateResponse {
  /**
   * 返回的code，0为正常，非0为错误
   */
  ReturnCode: string

  /**
   * 成功消息
   */
  ReturnMessage: string

  /**
      * 操作型返回的Data数据,可能有flowId等
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: OperateResponseData
}

/**
 * 返回的topic对象
 */
export interface Topic {
  /**
   * 主题的ID
   */
  TopicId: string

  /**
   * 主题的名称
   */
  TopicName: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Note: string
}

/**
 * 实例详情中的标签对象
 */
export interface Tag {
  /**
   * 标签的key
   */
  TagKey: string

  /**
   * 标签的值
   */
  TagValue: string
}

/**
 * DescribeGroup的返回
 */
export interface GroupResponse {
  /**
      * 计数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * GroupList
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupList: Array<DescribeGroup>
}

/**
 * DescribeTopicAttributes返回参数结构体
 */
export interface DescribeTopicAttributesResponse {
  /**
   * 返回的结果对象
   */
  Result?: TopicAttributesResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 路由信息返回对象
 */
export interface RouteResponse {
  /**
      * 路由信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Routers: Array<Route>
}

/**
 * DescribeGroup返回参数结构体
 */
export interface DescribeGroupResponse {
  /**
   * 返回结果集列表
   */
  Result?: GroupResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改实例属性的配置对象
 */
export interface ModifyInstanceAttributesConfig {
  /**
   * 自动创建 true 表示开启，false 表示不开启
   */
  AutoCreateTopicEnable?: boolean

  /**
   * 可选，如果auto.create.topic.enable设置为true没有设置该值时，默认设置为3
   */
  DefaultNumPartitions?: number

  /**
   * 如歌auto.create.topic.enable设置为true没有指定该值时默认设置为2
   */
  DefaultReplicationFactor?: number
}

/**
 * 操作类型返回的Data结构
 */
export interface OperateResponseData {
  /**
      * FlowId
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowId: number
}

/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
  /**
   * 返回的结果
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消费分组主题对象
 */
export interface GroupOffsetTopic {
  /**
   * 主题名称
   */
  Topic: string

  /**
      * 该主题分区数组，其中每个元素为一个 json object
注意：此字段可能返回 null，表示取不到有效值。
      */
  Partitions: Array<GroupOffsetPartition>
}

/**
 * CreatePartition返回参数结构体
 */
export interface CreatePartitionResponse {
  /**
   * 返回的结果集
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUser返回参数结构体
 */
export interface DeleteUserResponse {
  /**
   * 返回结果
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAcl请求参数结构体
 */
export interface CreateAclRequest {
  /**
   * 实例id信息
   */
  InstanceId: string

  /**
   * Acl资源类型，(0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID)，当前只有TOPIC，其它字段用于后续兼容开源kafka的acl时使用
   */
  ResourceType: number

  /**
   * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
   */
  ResourceName: string

  /**
   * Acl操作方式，(0:UNKNOWN，1:ANY，2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS)
   */
  Operation: number

  /**
   * 权限类型，(0:UNKNOWN，1:ANY，2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
   */
  PermissionType: number

  /**
   * 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持
   */
  Host?: string

  /**
   * 用户列表，默认为*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
   */
  Principal?: string
}

/**
 * DescribeAppInfo请求参数结构体
 */
export interface DescribeAppInfoRequest {
  /**
   * 偏移位置
   */
  Offset?: number

  /**
   * 本次查询用户数目最大数量限制，最大值为50，默认50
   */
  Limit?: number
}

/**
 * DescribeTopic返回参数结构体
 */
export interface DescribeTopicResponse {
  /**
      * 返回的结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result?: TopicResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消费组返回结果实体
 */
export interface ConsumerGroupResponse {
  /**
   * 符合条件的消费组数量
   */
  TotalCount: number

  /**
      * 主题列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicList: Array<ConsumerGroupTopic>

  /**
      * 消费分组List
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupList: Array<ConsumerGroup>

  /**
      * 所有分区数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalPartition: number

  /**
      * 监控的分区列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PartitionListForMonitor: Array<Partition>

  /**
      * 主题总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalTopic: number

  /**
      * 监控的主题列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicListForMonitor: Array<ConsumerGroupTopic>

  /**
      * 监控的组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupListForMonitor: Array<Group>
}

/**
 * CreateTopicIpWhiteList返回参数结构体
 */
export interface CreateTopicIpWhiteListResponse {
  /**
   * 删除主题IP白名单结果
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceAttributes返回参数结构体
 */
export interface ModifyInstanceAttributesResponse {
  /**
   * 返回结果
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyGroupOffsets返回参数结构体
 */
export interface ModifyGroupOffsetsResponse {
  /**
   * 返回结果
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分区实体
 */
export interface Partition {
  /**
   * 分区ID
   */
  PartitionId: number
}

/**
 * CreateAcl返回参数结构体
 */
export interface CreateAclResponse {
  /**
   * 返回结果
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 主题名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
   */
  TopicName: string

  /**
   * Partition个数，大于0
   */
  PartitionNum: number

  /**
   * 副本个数，不能多于 broker 数，最大为3
   */
  ReplicaNum: number

  /**
   * ip白名单开关, 1:打开  0:关闭，默认不打开
   */
  EnableWhiteList?: number

  /**
   * Ip白名单列表，配额限制，enableWhileList=1时必选
   */
  IpWhiteList?: Array<string>

  /**
   * 清理日志策略，日志清理模式，默认为"delete"。"delete"：日志按保存时间删除，"compact"：日志按 key 压缩，"compact, delete"：日志按 key 压缩且会按保存时间删除。
   */
  CleanUpPolicy?: string

  /**
   * 主题备注，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
   */
  Note?: string

  /**
   * 默认为1
   */
  MinInsyncReplicas?: number

  /**
   * 是否允许未同步的副本选为leader，false:不允许，true:允许，默认不允许
   */
  UncleanLeaderElectionEnable?: number

  /**
   * 可消息选。保留时间，单位ms，当前最小值为60000ms
   */
  RetentionMs?: number

  /**
   * Segment分片滚动的时长，单位ms，当前最小为3600000ms
   */
  SegmentMs?: number
}

/**
 * DeleteAcl返回参数结构体
 */
export interface DeleteAclResponse {
  /**
   * 返回结果
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoute请求参数结构体
 */
export interface DescribeRouteRequest {
  /**
   * 实例唯一id
   */
  InstanceId: string
}

/**
 * 实例配置实体
 */
export interface InstanceConfigDO {
  /**
   * 是否自动创建主题
   */
  AutoCreateTopicsEnable: boolean

  /**
   * 分区数
   */
  DefaultNumPartitions: number

  /**
   * 默认的复制Factor
   */
  DefaultReplicationFactor: number
}

/**
 * 用户返回实体
 */
export interface UserResponse {
  /**
      * 符合条件的用户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Users: Array<User>

  /**
   * 符合条件的总用户数
   */
  TotalCount: number
}

/**
 * DescribeGroupInfo请求参数结构体
 */
export interface DescribeGroupInfoRequest {
  /**
   * （过滤条件）按照实例 ID 过滤。
   */
  InstanceId: string

  /**
   * Kafka 消费分组，Consumer-group，这里是数组形式，格式：GroupList.0=xxx&GroupList.1=yyy。
   */
  GroupList: Array<string>
}

/**
 * DescribeGroupInfo返回参数结构体
 */
export interface DescribeGroupInfoResponse {
  /**
      * 返回的结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result?: Array<GroupInfoResponse>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUser返回参数结构体
 */
export interface DescribeUserResponse {
  /**
   * 返回结果列表
   */
  Result?: UserResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AppId的查询结果
 */
export interface AppIdResponse {
  /**
   * 符合要求的所有AppId数量
   */
  TotalCount: number

  /**
      * 符合要求的App Id列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppIdList: Array<number>
}

/**
 * DescribeTopic请求参数结构体
 */
export interface DescribeTopicRequest {
  /**
   * 实例 ID
   */
  InstanceId: string

  /**
   * 过滤条件，按照 topicName 过滤，支持模糊查询
   */
  SearchWord?: string

  /**
   * 偏移量，不填默认为0
   */
  Offset?: number

  /**
   * 返回数量，不填则默认为10，最大值为50
   */
  Limit?: number
}

/**
 * CreatePartition请求参数结构体
 */
export interface CreatePartitionRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 主题名称
   */
  TopicName: string

  /**
   * 主题分区个数
   */
  PartitionNum: number
}

/**
 * 组实体
 */
export interface Group {
  /**
   * 组名称
   */
  GroupName: string
}

/**
 * DescribeAppInfo返回参数结构体
 */
export interface DescribeAppInfoResponse {
  /**
   * 返回的符合要求的App Id列表
   */
  Result?: AppIdResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ACL返回结果集
 */
export interface AclResponse {
  /**
   * 符合条件的总数据条数
   */
  TotalCount: number

  /**
      * ACL列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AclList: Array<Acl>
}

/**
 * 实例对象
 */
export interface Instance {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 实例的状态。0：创建中，1：运行中，2：删除中 ， 5 隔离中，-1 创建失败
   */
  Status: number

  /**
      * 是否开源实例。开源：true，不开源：false
注意：此字段可能返回 null，表示取不到有效值。
      */
  IfCommunity: boolean
}

/**
 * DescribeInstanceAttributes返回参数结构体
 */
export interface DescribeInstanceAttributesResponse {
  /**
   * 实例属性返回结果对象
   */
  Result?: InstanceAttributesResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主题详情返回实体
 */
export interface TopicDetailResponse {
  /**
      * 返回的主题详情列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicList: Array<TopicDetail>

  /**
   * 符合条件的所有主题详情数量
   */
  TotalCount: number
}

/**
 * 高级配置对象
 */
export interface Config {
  /**
      * 消息保留时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  Retention: number

  /**
      * 最小同步复制数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MinInsyncReplicas: number

  /**
      * 日志清理模式，默认 delete。
delete：日志按保存时间删除；compact：日志按 key 压缩；compact, delete：日志按 key 压缩且会保存时间删除。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CleanUpPolicy: string

  /**
      * Segment 分片滚动的时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  SegmentMs: number

  /**
      * 0表示 false。 1表示 true。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UncleanLeaderElectionEnable: number

  /**
      * Segment 分片滚动的字节数
注意：此字段可能返回 null，表示取不到有效值。
      */
  SegmentBytes: number

  /**
      * 最大消息字节数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxMessageBytes: number
}

/**
 * ModifyPassword请求参数结构体
 */
export interface ModifyPasswordRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 用户名称
   */
  Name: string

  /**
   * 用户当前密码
   */
  Password: string

  /**
   * 用户新密码
   */
  PasswordNew: string
}

/**
 * ModifyInstanceAttributes请求参数结构体
 */
export interface ModifyInstanceAttributesRequest {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * 实例日志的最长保留时间，单位分钟，最大30天，0代表不开启日志保留时间回收策略
   */
  MsgRetentionTime?: number

  /**
   * 实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
   */
  InstanceName?: string

  /**
   * 实例配置
   */
  Config?: ModifyInstanceAttributesConfig
}

/**
 * ModifyTopicAttributes返回参数结构体
 */
export interface ModifyTopicAttributesResponse {
  /**
   * 返回结果集
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConsumerGroup请求参数结构体
 */
export interface DescribeConsumerGroupRequest {
  /**
   * ckafka实例id。
   */
  InstanceId: string

  /**
   * 可选，用户需要查询的group名称。
   */
  GroupName?: string

  /**
   * 可选，用户需要查询的group中的对应的topic名称，如果指定了该参数，而group又未指定则忽略该参数。
   */
  TopicName?: string

  /**
   * 本次返回个数限制
   */
  Limit?: number

  /**
   * 偏移位置
   */
  Offset?: number
}

/**
 * 虚拟IP实体
 */
export interface VipEntity {
  /**
   * 虚拟IP
   */
  Vip: string

  /**
   * 虚拟端口
   */
  Vport: string
}

/**
 * 消费组主题对象
 */
export interface ConsumerGroupTopic {
  /**
   * 主题ID
   */
  TopicId: string

  /**
   * 主题名称
   */
  TopicName: string
}

/**
 * 用户实体
 */
export interface User {
  /**
   * 用户id
   */
  UserId: number

  /**
   * 用户名称
   */
  Name: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 最后更新时间
   */
  UpdateTime: string
}

/**
 * 组偏移量分区对象
 */
export interface GroupOffsetPartition {
  /**
   * topic 的 partitionId
   */
  Partition: number

  /**
   * consumer 提交的 offset 位置
   */
  Offset: number

  /**
      * 支持消费者提交消息时，传入 metadata 作为它用，当前一般为空字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  Metadata: string

  /**
   * 错误码
   */
  ErrorCode: number

  /**
   * 当前 partition 最新的 offset
   */
  LogEndOffset: number

  /**
   * 未消费的消息个数
   */
  Lag: number
}

/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
  /**
   * 返回的结果集
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * （过滤条件）按照实例ID过滤
   */
  InstanceId?: string

  /**
   * （过滤条件）按照实例名称过滤，支持模糊查询
   */
  SearchWord?: string

  /**
   * （过滤条件）实例的状态。0：创建中，1：运行中，2：删除中，不填默认返回全部
   */
  Status?: Array<number>

  /**
   * 偏移量，不填默认为0
   */
  Offset?: number

  /**
   * 返回数量，不填则默认10，最大值100
   */
  Limit?: number

  /**
   * 匹配标签key值。
   */
  TagKey?: string
}

/**
 * 实例属性返回结果对象
 */
export interface InstanceAttributesResponse {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 接入点 VIP 列表信息
   */
  VipList: Array<VipEntity>

  /**
   * 虚拟IP
   */
  Vip: string

  /**
   * 虚拟端口
   */
  Vport: string

  /**
   * 实例的状态。0：创建中，1：运行中，2：删除中
   */
  Status: number

  /**
   * 实例带宽，单位：Mbps
   */
  Bandwidth: number

  /**
   * 实例的存储大小，单位：GB
   */
  DiskSize: number

  /**
   * 可用区
   */
  ZoneId: number

  /**
   * VPC 的 ID，为空表示是基础网络
   */
  VpcId: string

  /**
   * 子网 ID， 为空表示基础网络
   */
  SubnetId: string

  /**
   * 实例健康状态， 1：健康，2：告警，3：异常
   */
  Healthy: number

  /**
   * 实例健康信息，当前会展示磁盘利用率，最大长度为256
   */
  HealthyMessage: string

  /**
   * 创建时间
   */
  CreateTime: number

  /**
   * 消息保存时间,单位为分钟
   */
  MsgRetentionTime: number

  /**
   * 自动创建 Topic 配置， 若该字段为空，则表示未开启自动创建
   */
  Config: InstanceConfigDO

  /**
   * 剩余创建分区数
   */
  RemainderPartitions: number

  /**
   * 剩余创建主题数
   */
  RemainderTopics: number

  /**
   * 当前创建分区数
   */
  CreatedPartitions: number

  /**
   * 当前创建主题数
   */
  CreatedTopics: number

  /**
      * 标签数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>

  /**
      * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime: number

  /**
      * 跨可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneIds: Array<number>

  /**
      * kafka版本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Version: string

  /**
      * 最大分组数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxGroupNum: number

  /**
      * 售卖类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cvm: number

  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: string

  /**
      * 表示该实例支持的特性。FEATURE_SUBNET_ACL:表示acl策略支持设置子网。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Features: Array<string>
}

/**
 * DescribeGroup请求参数结构体
 */
export interface DescribeGroupRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 搜索关键字
   */
  SearchWord?: string

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 最大返回数量
   */
  Limit?: number
}

/**
 * 查询过滤器
>描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>

 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Name: string

  /**
   * 字段的过滤值。
   */
  Values: Array<string>
}

/**
 * 消费组偏移量返回结果
 */
export interface GroupOffsetResponse {
  /**
   * 符合调节的总结果数
   */
  TotalCount: number

  /**
      * 该主题分区数组，其中每个元素为一个 json object
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicList: Array<GroupOffsetTopic>
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 用户名称
   */
  Name: string

  /**
   * 用户密码
   */
  Password: string
}

/**
 * DeleteTopicIpWhiteList返回参数结构体
 */
export interface DeleteTopicIpWhiteListResponse {
  /**
   * 删除主题IP白名单结果
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建预付费实例返回结构
 */
export interface CreateInstancePreResponse {
  /**
   * 返回的code，0为正常，非0为错误
   */
  ReturnCode: string

  /**
   * 成功消息
   */
  ReturnMessage: string

  /**
      * 操作型返回的Data数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: CreateInstancePreData
}

/**
 * DescribeInstancesDetail请求参数结构体
 */
export interface DescribeInstancesDetailRequest {
  /**
   * （过滤条件）按照实例ID过滤
   */
  InstanceId?: string

  /**
   * （过滤条件）按照实例名称过滤，支持模糊查询
   */
  SearchWord?: string

  /**
   * （过滤条件）实例的状态。0：创建中，1：运行中，2：删除中，不填默认返回全部
   */
  Status?: Array<number>

  /**
   * 偏移量，不填默认为0
   */
  Offset?: number

  /**
   * 返回数量，不填则默认10，最大值20
   */
  Limit?: number

  /**
   * 匹配标签key值。
   */
  TagKey?: string

  /**
   * 过滤器
   */
  Filters?: Array<Filter>
}

/**
 * ModifyPassword返回参数结构体
 */
export interface ModifyPasswordResponse {
  /**
   * 返回结果
   */
  Result?: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例详情返回结果
 */
export interface InstanceDetailResponse {
  /**
   * 符合条件的实例总数
   */
  TotalCount: number

  /**
   * 符合条件的实例详情列表
   */
  InstanceList: Array<InstanceDetail>
}

/**
 * GroupInfo返回数据的实体
 */
export interface GroupInfoResponse {
  /**
   * 错误码，正常为0
   */
  ErrorCode: string

  /**
      * group 状态描述（常见的为 Empty、Stable、Dead 三种状态）：
Dead：消费分组不存在
Empty：消费分组，当前没有任何消费者订阅
PreparingRebalance：消费分组处于 rebalance 状态
CompletingRebalance：消费分组处于 rebalance 状态
Stable：消费分组中各个消费者已经加入，处于稳定状态
      */
  State: string

  /**
   * 消费分组选择的协议类型正常的消费者一般为 consumer 但有些系统采用了自己的协议如 kafka-connect 用的就是 connect。只有标准的 consumer 协议，本接口才知道具体的分配方式的格式，才能解析到具体的 partition 的分配情况
   */
  ProtocolType: string

  /**
   * 消费者 partition 分配算法常见的有如下几种(Kafka 消费者 SDK 默认的选择项为 range)：range、 roundrobin、 sticky
   */
  Protocol: string

  /**
   * 仅当 state 为 Stable 且 protocol_type 为 consumer 时， 该数组才包含信息
   */
  Members: Array<GroupInfoMember>

  /**
   * Kafka 消费分组
   */
  Group: string
}

/**
 * 主题属性返回结果实体
 */
export interface TopicAttributesResponse {
  /**
   * 主题 ID
   */
  TopicId: string

  /**
   * 创建时间
   */
  CreateTime: number

  /**
      * 主题备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Note: string

  /**
   * 分区个数
   */
  PartitionNum: number

  /**
   * IP 白名单开关，1：打开； 0：关闭
   */
  EnableWhiteList: number

  /**
   * IP 白名单列表
   */
  IpWhiteList: Array<string>

  /**
   * topic 配置数组
   */
  Config: Config

  /**
   * 分区详情
   */
  Partitions: Array<TopicPartitionDO>
}

/**
 * 聚合的实例状态返回结果
 */
export interface InstanceResponse {
  /**
      * 符合条件的实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceList: Array<Instance>

  /**
      * 符合条件的结果总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number
}

/**
 * DescribeGroup返回实体
 */
export interface DescribeGroup {
  /**
   * groupId
   */
  Group: string

  /**
   * 该 group 使用的协议。
   */
  Protocol: string
}

/**
 * 分区详情
 */
export interface TopicPartitionDO {
  /**
   * Partition ID
   */
  Partition: number

  /**
   * Leader 运行状态
   */
  LeaderStatus: number

  /**
   * ISR 个数
   */
  IsrNum: number

  /**
   * 副本个数
   */
  ReplicaNum: number
}

/**
 * 创建主题返回
 */
export interface CreateTopicResp {
  /**
   * 主题Id
   */
  TopicId: string
}

/**
 * DescribeRoute返回参数结构体
 */
export interface DescribeRouteResponse {
  /**
   * 返回的路由信息结果集
   */
  Result?: RouteResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicDetail请求参数结构体
 */
export interface DescribeTopicDetailRequest {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * （过滤条件）按照topicName过滤，支持模糊查询
   */
  SearchWord?: string

  /**
   * 偏移量，不填默认为0
   */
  Offset?: number

  /**
   * 返回数量，不填则默认 10，最大值20，取值要大于0
   */
  Limit?: number
}

/**
 * DescribeGroupOffsets返回参数结构体
 */
export interface DescribeGroupOffsetsResponse {
  /**
   * 返回的结果对象
   */
  Result?: GroupOffsetResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyGroupOffsets请求参数结构体
 */
export interface ModifyGroupOffsetsRequest {
  /**
   * kafka实例id
   */
  InstanceId: string

  /**
   * kafka 消费分组
   */
  Group: string

  /**
   * 重置offset的策略，入参含义 0. 对齐shift-by参数，代表把offset向前或向后移动shift条 1. 对齐参考(by-duration,to-datetime,to-earliest,to-latest),代表把offset移动到指定timestamp的位置 2. 对齐参考(to-offset)，代表把offset移动到指定的offset位置
   */
  Strategy: number

  /**
   * 表示需要重置的topics， 不填表示全部
   */
  Topics?: Array<string>

  /**
   * 当strategy为0时，必须包含该字段，可以大于零代表会把offset向后移动shift条，小于零则将offset向前回溯shift条数。正确重置后新的offset应该是(old_offset + shift)，需要注意的是如果新的offset小于partition的earliest则会设置为earliest，如果大于partition 的latest则会设置为latest
   */
  Shift?: number

  /**
   * 单位ms。当strategy为1时，必须包含该字段，其中-2表示重置offset到最开始的位置，-1表示重置到最新的位置(相当于清空)，其它值则代表指定的时间，会获取topic中指定时间的offset然后进行重置，需要注意的时，如果指定的时间不存在消息，则获取最末尾的offset。
   */
  ShiftTimestamp?: number

  /**
   * 需要重新设置的offset位置。当strategy为2，必须包含该字段。
   */
  Offset?: number

  /**
   * 需要重新设置的partition的列表，如果没有指定Topics参数。则重置全部topics的对应的Partition列表里的partition。指定Topics时则重置指定的topic列表的对应的Partitions列表的partition。
   */
  Partitions?: Array<number>
}

/**
 * CreateTopicIpWhiteList请求参数结构体
 */
export interface CreateTopicIpWhiteListRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 主题名称
   */
  TopicName: string

  /**
   * ip白名单列表
   */
  IpWhiteList: Array<string>
}

/**
 * 路由实体对象
 */
export interface Route {
  /**
      * 实例接入方式
0：PLAINTEXT (明文方式，没有带用户信息老版本及社区版本都支持)
1：SASL_PLAINTEXT（明文方式，不过在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
2：SSL（SSL加密通信，没有带用户信息，老版本及社区版本都支持）
3：SASL_SSL（SSL加密通信，在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）
      */
  AccessType: number

  /**
   * 路由ID
   */
  RouteId: number

  /**
   * vip网络类型（1:外网TGW  2:基础网络 3:VPC网络 4:腾讯云支持环境(一般用于内部实例) 5:SSL外网访问方式访问 6:黑石环境vpc）
   */
  VipType: number

  /**
   * 虚拟IP列表
   */
  VipList: Array<VipEntity>

  /**
      * 域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Domain: string

  /**
      * 域名port
注意：此字段可能返回 null，表示取不到有效值。
      */
  DomainPort: number
}

/**
 * ACL对象实体
 */
export interface Acl {
  /**
   * Acl资源类型，（0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID）当前只有TOPIC，
   */
  ResourceType: number

  /**
   * 资源名称，和resourceType相关如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
   */
  ResourceName: string

  /**
      * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
注意：此字段可能返回 null，表示取不到有效值。
      */
  Principal: string

  /**
      * 默认为*，表示任何host都可以访问，当前ckafka不支持host为*，但是后面开源kafka的产品化会直接支持
注意：此字段可能返回 null，表示取不到有效值。
      */
  Host: string

  /**
   * Acl操作方式(0:UNKNOWN，1:ANY，2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTEN_WRITE)
   */
  Operation: number

  /**
   * 权限类型(0:UNKNOWN，1:ANY，2:DENY，3:ALLOW)
   */
  PermissionType: number
}

/**
 * ModifyTopicAttributes请求参数结构体
 */
export interface ModifyTopicAttributesRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string

  /**
   * 主题名称。
   */
  TopicName: string

  /**
   * 主题备注，是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线-。
   */
  Note?: string

  /**
   * IP 白名单开关，1：打开；0：关闭。
   */
  EnableWhiteList?: number

  /**
   * 默认为1。
   */
  MinInsyncReplicas?: number

  /**
   * 默认为 0，0：false；1：true。
   */
  UncleanLeaderElectionEnable?: number

  /**
   * 消息保留时间，单位：ms，当前最小值为60000ms。
   */
  RetentionMs?: number

  /**
   * Segment 分片滚动的时长，单位：ms，当前最小为86400000ms。
   */
  SegmentMs?: number

  /**
   * 主题消息最大值，单位为 Byte，最大值为8388608Byte（即8MB）。
   */
  MaxMessageBytes?: number

  /**
   * 消息删除策略，可以选择delete 或者compact
   */
  CleanUpPolicy?: string
}

/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
  /**
   * 返回创建结果
   */
  Result?: CreateTopicResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstancePre请求参数结构体
 */
export interface CreateInstancePreRequest {
  /**
   * 实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
   */
  InstanceName: string

  /**
   * 可用区
   */
  ZoneId: number

  /**
   * 预付费购买时长，例如 "1m",就是一个月
   */
  Period: string

  /**
   * 实例规格，1：入门型 ，2： 标准型，3 ：进阶型，4 ：容量型，5： 高阶型1，6：高阶性2, 7： 高阶型3,8： 高阶型4， 9 ：独占型。
   */
  InstanceType: number

  /**
   * vpcId，不填默认基础网络
   */
  VpcId?: string

  /**
   * 子网id，vpc网络需要传该参数，基础网络可以不传
   */
  SubnetId?: string

  /**
   * 可选。实例日志的最长保留时间，单位分钟，默认为10080（7天），最大30天，不填默认0，代表不开启日志保留时间回收策略
   */
  MsgRetentionTime?: number

  /**
   * 创建实例时可以选择集群Id, 该入参表示集群Id
   */
  ClusterId?: number

  /**
   * 预付费自动续费标记，0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)
   */
  RenewFlag?: number
}

/**
 * DeleteTopicIpWhiteList请求参数结构体
 */
export interface DeleteTopicIpWhiteListRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 主题名称
   */
  TopicName: string

  /**
   * ip白名单列表
   */
  IpWhiteList: Array<string>
}

/**
 * DescribeGroupOffsets请求参数结构体
 */
export interface DescribeGroupOffsetsRequest {
  /**
   * （过滤条件）按照实例 ID 过滤
   */
  InstanceId: string

  /**
   * Kafka 消费分组
   */
  Group: string

  /**
   * group 订阅的主题名称数组，如果没有该数组，则表示指定的 group 下所有 topic 信息
   */
  Topics?: Array<string>

  /**
   * 模糊匹配 topicName
   */
  SearchWord?: string

  /**
   * 本次查询的偏移位置，默认为0
   */
  Offset?: number

  /**
   * 本次返回结果的最大个数，默认为50，最大值为50
   */
  Limit?: number
}

/**
 * DescribeUser请求参数结构体
 */
export interface DescribeUserRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 按照名称过滤
   */
  SearchWord?: string

  /**
   * 偏移
   */
  Offset?: number

  /**
   * 本次返回个数
   */
  Limit?: number
}

/**
 * 实例详情
 */
export interface InstanceDetail {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * 实例名称
   */
  InstanceName: string

  /**
   * 访问实例的vip 信息
   */
  Vip: string

  /**
   * 访问实例的端口信息
   */
  Vport: string

  /**
   * 虚拟IP列表
   */
  VipList: Array<VipEntity>

  /**
   * 实例的状态。0：创建中，1：运行中，2：删除中：5隔离中， -1 创建失败
   */
  Status: number

  /**
   * 实例带宽，单位Mbps
   */
  Bandwidth: number

  /**
   * 实例的存储大小，单位GB
   */
  DiskSize: number

  /**
   * 可用区域ID
   */
  ZoneId: number

  /**
   * vpcId，如果为空，说明是基础网络
   */
  VpcId: string

  /**
   * 子网id
   */
  SubnetId: string

  /**
   * 实例是否续费，int  枚举值：1表示自动续费，2表示明确不自动续费
   */
  RenewFlag: number

  /**
   * 实例状态 int：0表示健康，1表示告警，2 表示实例状态异常
   */
  Healthy: number

  /**
   * 实例状态信息
   */
  HealthyMessage: string

  /**
   * 实例创建时间时间
   */
  CreateTime: number

  /**
   * 实例过期时间
   */
  ExpireTime: number

  /**
   * 是否为内部客户。值为1 表示内部客户
   */
  IsInternal: number

  /**
   * Topic个数
   */
  TopicNum: number

  /**
   * 标识tag
   */
  Tags: Array<Tag>

  /**
      * kafka版本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Version: string

  /**
      * 跨可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneIds: Array<number>

  /**
      * ckafka售卖类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cvm: number
}

/**
 * DescribeTopicDetail返回参数结构体
 */
export interface DescribeTopicDetailResponse {
  /**
   * 返回的主题详情实体
   */
  Result?: TopicDetailResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 订阅信息实体
 */
export interface SubscribedInfo {
  /**
   * 订阅的主题名
   */
  TopicName: string

  /**
      * 订阅的分区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Partition: Array<number>

  /**
      * 分区offset信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  PartitionOffset: Array<PartitionOffset>

  /**
      * 订阅的主题ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicId: string
}

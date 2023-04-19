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

  /**
      * 消息保留时间配置(用于动态配置变更记录)
注意：此字段可能返回 null，表示取不到有效值。
      */
  RetentionTimeConfig: TopicRetentionTimeConfigRsp

  /**
      * 0:正常，1：已删除，2：删除中
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>
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
   * Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER)
   */
  ResourceType: number

  /**
   * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。
   */
  ResourceName: string

  /**
   * Acl操作方式，(2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTENT_WRITE)
   */
  Operation: number

  /**
   * 权限类型，(2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
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
 * CreateInstancePost返回参数结构体
 */
export interface CreateInstancePostResponse {
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
 * dip失败消息写入cls的配置
 */
export interface DropCls {
  /**
      * 是否投递到cls
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropInvalidMessageToCls?: boolean

  /**
      * 投递cls的地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropClsRegion?: string

  /**
      * 投递cls的账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropClsOwneruin?: string

  /**
      * 投递cls的主题
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropClsTopicId?: string

  /**
      * 投递cls的日志集id
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropClsLogSet?: string
}

/**
 * PostgreSQL修改连接源参数
 */
export interface PostgreSQLModifyConnectParam {
  /**
      * PostgreSQL连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * PostgreSQL的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * PostgreSQL连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * PostgreSQL连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * PostgreSQL连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * PostgreSQL连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * 当type为TDSQL_C_POSTGRESQL时，该参数才有值【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean

  /**
      * 是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean
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
 * 数据处理ROW输出格式配置
 */
export interface RowParam {
  /**
   * 行内容，KEY_VALUE，VALUE
   */
  RowContent: string

  /**
      * key和value间的分隔符
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyValueDelimiter?: string

  /**
      * 元素建的分隔符
注意：此字段可能返回 null，表示取不到有效值。
      */
  EntryDelimiter?: string
}

/**
 * Es连接源参数
 */
export interface EsConnectParam {
  /**
      * Es的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * Es连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * Es连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password: string

  /**
      * Es连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * Es连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt: boolean

  /**
      * Es连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * Es连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
}

/**
 * BatchCreateAcl请求参数结构体
 */
export interface BatchCreateAclRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * Acl资源类型，(2:TOPIC）
   */
  ResourceType: number

  /**
   * 资源列表数组
   */
  ResourceNames: Array<string>

  /**
   * 设置的ACL规则列表
   */
  RuleList: Array<AclRuleInfo>
}

/**
 * DescribeDatahubTask返回参数结构体
 */
export interface DescribeDatahubTaskResponse {
  /**
   * 返回结果
   */
  Result: DescribeDatahubTaskRes

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * SQLServer连接源参数
 */
export interface SQLServerConnectParam {
  /**
      * SQLServer的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * SQLServer连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * SQLServer连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password: string

  /**
      * SQLServer连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * SQLServer连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * SQLServer连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * 是否更新到关联的Dip任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
}

/**
 * CreateConnectResource返回参数结构体
 */
export interface CreateConnectResourceResponse {
  /**
   * 连接源的Id
   */
  Result?: ConnectResourceResourceIdResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Topic消息保留时间配置返回信息
 */
export interface TopicRetentionTimeConfigRsp {
  /**
      * 期望值，即用户配置的Topic消息保留时间(单位分钟)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Expect: number

  /**
      * 当前值，即当前生效值(可能存在动态调整，单位分钟)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Current: number

  /**
      * 最近变更时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModTimeStamp: number
}

/**
 * 批量修改topic属性结果
 */
export interface BatchModifyTopicResultDTO {
  /**
      * 实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
      * topic名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicName: string

  /**
      * 状态码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReturnCode: string

  /**
   * 状态消息
   */
  Message: string
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
 * DescribeDatahubGroupOffsets返回参数结构体
 */
export interface DescribeDatahubGroupOffsetsResponse {
  /**
   * 返回的结果对象
   */
  Result: GroupOffsetResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 值支持一拆多，即将一个值拆为一个数组
 */
export interface SplitParam {
  /**
   * 分隔符
   */
  Regex: string
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
 * 查询连接源具体数据的返参
 */
export interface DescribeConnectResourceResp {
  /**
      * 连接源的Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceId: string

  /**
      * 连接源名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceName: string

  /**
      * 连接源描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 连接源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 连接源的状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 连接源的创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 连接源的异常信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
      * 连接源的当前所处步骤
注意：此字段可能返回 null，表示取不到有效值。
      */
  CurrentStep: string

  /**
      * 步骤列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  StepList: Array<string>

  /**
      * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  MySQLConnectParam: MySQLConnectParam

  /**
      * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostgreSQLConnectParam: PostgreSQLConnectParam

  /**
      * Dts配置，Type为DTS时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  DtsConnectParam: DtsConnectParam

  /**
      * MongoDB配置，Type为MONGODB时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  MongoDBConnectParam: MongoDBConnectParam

  /**
      * Es配置，Type为ES时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  EsConnectParam: EsConnectParam

  /**
      * ClickHouse配置，Type为CLICKHOUSE时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClickHouseConnectParam: ClickHouseConnectParam

  /**
      * MariaDB配置，Type为MARIADB时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  MariaDBConnectParam: MariaDBConnectParam

  /**
      * SQLServer配置，Type为SQLSERVER时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  SQLServerConnectParam: SQLServerConnectParam

  /**
      * Ctsdb配置，Type为CTSDB时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  CtsdbConnectParam: CtsdbConnectParam

  /**
      * Doris 配置，Type 为 DORIS 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  DorisConnectParam: DorisConnectParam

  /**
      * Kafka配置，Type 为 KAFKA 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  KafkaConnectParam?: KafkaConnectParam
}

/**
 * AuthorizeToken返回参数结构体
 */
export interface AuthorizeTokenResponse {
  /**
      * 0 成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatahubTask请求参数结构体
 */
export interface DescribeDatahubTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
}

/**
 * Url解析
 */
export interface UrlDecodeParam {
  /**
      * 编码
注意：此字段可能返回 null，表示取不到有效值。
      */
  CharsetName?: string
}

/**
 * FetchLatestDatahubMessageList返回参数结构体
 */
export interface FetchLatestDatahubMessageListResponse {
  /**
   * 返回结果。
   */
  Result: Array<ConsumerRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Es类型入参
 */
export interface EsParam {
  /**
   * 实例资源
   */
  Resource: string

  /**
   * Es的连接port
   */
  Port?: number

  /**
   * Es用户名
   */
  UserName?: string

  /**
   * Es密码
   */
  Password?: string

  /**
   * 是否为自建集群
   */
  SelfBuilt?: boolean

  /**
   * 实例vip
   */
  ServiceVip?: string

  /**
   * 实例的vpcId
   */
  UniqVpcId?: string

  /**
   * Es是否抛弃解析失败的消息
   */
  DropInvalidMessage?: boolean

  /**
   * Es自定义index名称
   */
  Index?: string

  /**
   * Es自定义日期后缀
   */
  DateFormat?: string

  /**
   * 非json格式数据的自定义key
   */
  ContentKey?: string

  /**
   * Es是否抛弃非json格式的消息
   */
  DropInvalidJsonMessage?: boolean

  /**
   * 转储到Es中的文档ID取值字段名
   */
  DocumentIdField?: string

  /**
   * Es自定义index名称的类型，STRING，JSONPATH，默认为STRING
   */
  IndexType?: string

  /**
   * 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效
   */
  DropCls?: DropCls

  /**
   * 转储到ES的消息为Database的binlog时，如果需要同步数据库操作，即增删改的操作到ES时填写数据库表主键
   */
  DatabasePrimaryKey?: string

  /**
   * 死信队列
   */
  DropDlq?: FailureParam
}

/**
 * DescribeAclRule返回参数结构体
 */
export interface DescribeAclRuleResponse {
  /**
   * 返回的AclRule结果集对象
   */
  Result: AclRuleResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dts类型入参
 */
export interface DtsParam {
  /**
   * Dts实例Id
   */
  Resource: string

  /**
   * Dts的连接ip
   */
  Ip?: string

  /**
   * Dts的连接port
   */
  Port?: number

  /**
   * Dts订阅的topic
   */
  Topic?: string

  /**
   * Dts消费分组的Id
   */
  GroupId?: string

  /**
   * Dts消费分组的账号
   */
  GroupUser?: string

  /**
   * Dts消费分组的密码
   */
  GroupPassword?: string

  /**
   * false同步原始数据，true同步解析后的json格式数据,默认true
   */
  TranSql?: boolean
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
 * CancelAuthorizationToken请求参数结构体
 */
export interface CancelAuthorizationTokenRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 用户
   */
  User: string

  /**
   * token串
   */
  Tokens: string
}

/**
 * CancelAuthorizationToken返回参数结构体
 */
export interface CancelAuthorizationTokenResponse {
  /**
      * 0 成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MySQL连接源参数
 */
export interface MySQLConnectParam {
  /**
      * MySQL的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * MySQL连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * MySQL连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password: string

  /**
      * MySQL连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * MySQL连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * MySQL连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean

  /**
      * 当type为TDSQL_C_MYSQL时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId?: string

  /**
      * Mysql 连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean
}

/**
 * InquireCkafkaPrice接口询价返回值
 */
export interface InquireCkafkaPriceResp {
  /**
      * 实例价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstancePrice: InquiryPrice

  /**
      * 公网带宽价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicNetworkBandwidthPrice: InquiryPrice
}

/**
 * CreateRoute请求参数结构体
 */
export interface CreateRouteRequest {
  /**
   * 实例唯一id
   */
  InstanceId: string

  /**
   * 路由网络类型(3:vpc路由;4:标准版支撑路由;7:专业版支撑路由)
   */
  VipType: number

  /**
   * vpc网络Id
   */
  VpcId?: string

  /**
   * vpc子网id
   */
  SubnetId?: string

  /**
   * 访问类型
   */
  AccessType?: number

  /**
   * 是否需要权限管理
   */
  AuthFlag?: number

  /**
   * 调用方appId
   */
  CallerAppid?: number

  /**
   * 公网带宽
   */
  PublicNetwork?: number

  /**
   * vip地址
   */
  Ip?: string
}

/**
 * SQLServer修改连接源参数
 */
export interface SQLServerModifyConnectParam {
  /**
      * SQLServer连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * SQLServer的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * SQLServer连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * SQLServer连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * SQLServer连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * SQLServer连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * 是否更新到关联的Dip任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
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
 * DescribeDatahubTasks请求参数结构体
 */
export interface DescribeDatahubTasksRequest {
  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number

  /**
   * 分页偏移量，默认为0
   */
  Offset?: number

  /**
   * 过滤条件，按照 TaskName 过滤，支持模糊查询
   */
  SearchWord?: string

  /**
   * 转储的目标类型
   */
  TargetType?: string

  /**
   * 任务类型，SOURCE数据接入，SINK数据流出
   */
  TaskType?: string

  /**
   * 转储的源类型
   */
  SourceType?: string

  /**
   * 转储的资源
   */
  Resource?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 返回的结果
   */
  Result: InstanceResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Datahub资源配置
 */
export interface DatahubResource {
  /**
   * 资源类型
   */
  Type: string

  /**
      * ckafka配置，Type为KAFKA时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  KafkaParam?: KafkaParam

  /**
      * EB配置，Type为EB时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventBusParam?: EventBusParam

  /**
      * MongoDB配置，Type为MONGODB时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  MongoDBParam?: MongoDBParam

  /**
      * Es配置，Type为ES时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  EsParam?: EsParam

  /**
      * Tdw配置，Type为TDW时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  TdwParam?: TdwParam

  /**
      * Dts配置，Type为DTS时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  DtsParam?: DtsParam

  /**
      * ClickHouse配置，Type为CLICKHOUSE时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClickHouseParam?: ClickHouseParam

  /**
      * Cls配置，Type为CLS时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClsParam?: ClsParam

  /**
      * Cos配置，Type为COS时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosParam?: CosParam

  /**
      * MySQL配置，Type为MYSQL时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  MySQLParam?: MySQLParam

  /**
      * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostgreSQLParam?: PostgreSQLParam

  /**
      * Topic配置，Type为Topic时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicParam?: TopicParam

  /**
      * MariaDB配置，Type为MARIADB时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  MariaDBParam?: MariaDBParam

  /**
      * SQLServer配置，Type为SQLSERVER时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  SQLServerParam?: SQLServerParam

  /**
      * Ctsdb配置，Type为CTSDB时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  CtsdbParam?: CtsdbParam

  /**
      * Scf配置，Type为SCF时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScfParam?: ScfParam
}

/**
 * BatchModifyTopicAttributes返回参数结构体
 */
export interface BatchModifyTopicAttributesResponse {
  /**
   * 返回结果
   */
  Result: Array<BatchModifyTopicResultDTO>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClickHouse类型入参
 */
export interface ClickHouseParam {
  /**
   * ClickHouse的集群
   */
  Cluster: string

  /**
   * ClickHouse的数据库名
   */
  Database: string

  /**
   * ClickHouse的数据表名
   */
  Table: string

  /**
   * ClickHouse的schema
   */
  Schema: Array<ClickHouseSchema>

  /**
   * 实例资源
   */
  Resource: string

  /**
   * ClickHouse的连接ip
   */
  Ip?: string

  /**
   * ClickHouse的连接port
   */
  Port?: number

  /**
   * ClickHouse的用户名
   */
  UserName?: string

  /**
   * ClickHouse的密码
   */
  Password?: string

  /**
   * 实例vip
   */
  ServiceVip?: string

  /**
   * 实例的vpcId
   */
  UniqVpcId?: string

  /**
   * 是否为自建集群
   */
  SelfBuilt?: boolean

  /**
   * ClickHouse是否抛弃解析失败的消息，默认为true
   */
  DropInvalidMessage?: boolean

  /**
   * ClickHouse 类型，emr-clickhouse : "emr";cdw-clickhouse : "cdwch";自建 : ""
   */
  Type?: string

  /**
   * 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效
   */
  DropCls?: DropCls
}

/**
 * 过滤器参数
 */
export interface FilterMapParam {
  /**
   * Key值
   */
  Key: string

  /**
   * 匹配模式，前缀匹配PREFIX，后缀匹配SUFFIX，包含匹配CONTAINS，EXCEPT除外匹配，数值匹配NUMBER，IP匹配IP
   */
  MatchMode: string

  /**
   * Value值
   */
  Value: string

  /**
   * 固定REGULAR
   */
  Type?: string
}

/**
 * 创建预付费实例返回结构
 */
export interface CreateInstancePreResp {
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

  /**
      * 删除是时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeleteRouteTimestamp: string
}

/**
 * ModifyDatahubTask返回参数结构体
 */
export interface ModifyDatahubTaskResponse {
  /**
      * 任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: DatahubTaskIdRes

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
 * FetchMessageListByOffset请求参数结构体
 */
export interface FetchMessageListByOffsetRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 主题名
   */
  Topic: string

  /**
   * 分区id
   */
  Partition: number

  /**
   * 位点信息
   */
  Offset: number

  /**
   * 最大查询条数，默认20，最大20
   */
  SinglePartitionRecordNumber?: number
}

/**
 * 地域实体对象
 */
export interface Region {
  /**
   * 地域ID
   */
  RegionId: number

  /**
   * 地域名称
   */
  RegionName: string

  /**
   * 区域名称
   */
  AreaName: string

  /**
      * 地域代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionCode: string

  /**
      * 地域代码（V3版本）
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionCodeV3: string

  /**
      * NONE:默认值不支持任何特殊机型\nCVM:支持CVM类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Support: string

  /**
      * 是否支持ipv6, 0：表示不支持，1：表示支持
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ipv6: number

  /**
      * 是否支持跨可用区, 0：表示不支持，1：表示支持
注意：此字段可能返回 null，表示取不到有效值。
      */
  MultiZone: number
}

/**
 * ModifyInstancePre请求参数结构体
 */
export interface ModifyInstancePreRequest {
  /**
   * 实例名称
   */
  InstanceId: string

  /**
   * 预计磁盘，根据磁盘步长，规格向上调整。
   */
  DiskSize: number

  /**
   * 预计带宽，根据带宽步长，规格向上调整。
   */
  BandWidth: number

  /**
   * 预计分区，根据带宽步长，规格向上调整。
   */
  Partition?: number
}

/**
 * CreateAclRule请求参数结构体
 */
export interface CreateAclRuleRequest {
  /**
   * 实例id信息
   */
  InstanceId: string

  /**
   * Acl资源类型,目前只支持Topic,枚举值列表：Topic
   */
  ResourceType: string

  /**
   * 匹配类型，目前支持前缀匹配与预设策略，枚举值列表：PREFIXED/PRESET
   */
  PatternType: string

  /**
   * 规则名称
   */
  RuleName: string

  /**
   * 设置的ACL规则列表
   */
  RuleList: Array<AclRuleInfo>

  /**
   * 表示前缀匹配的前缀的值
   */
  Pattern?: string

  /**
   * 预设ACL规则是否应用到新增的topic中
   */
  IsApplied?: number

  /**
   * ACL规则的备注
   */
  Comment?: string
}

/**
 * 数据处理参数
 */
export interface TransformsParam {
  /**
   * 原始数据
   */
  Content: string

  /**
   * 处理链
   */
  FieldChain: Array<FieldParam>

  /**
      * 过滤器
注意：此字段可能返回 null，表示取不到有效值。
      */
  FilterParam?: Array<FilterMapParam>

  /**
      * 失败处理
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailureParam?: FailureParam

  /**
      * 测试结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result?: string

  /**
      * 数据来源
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceType?: string

  /**
      * 输出格式，JSON，ROW，默认为JSON
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutputFormat?: string

  /**
      * 输出格式为ROW必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  RowParam?: RowParam

  /**
      * 是否保留数据源Topic元数据信息（源Topic、Partition、Offset），默认为false
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeepMetadata?: boolean

  /**
      * 数组解析
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchAnalyse?: BatchAnalyseParam
}

/**
 * ClickHouse修改连接源参数
 */
export interface ClickHouseModifyConnectParam {
  /**
      * ClickHouse连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * ClickHouse的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * ClickHouse连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * ClickHouse连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * ClickHouse连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * ClickHouse连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * ClickHouse连接源是否为自建集群【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean

  /**
      * 是否更新到关联的Datahub任务，默认为true
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
}

/**
 * ModifyAclRule请求参数结构体
 */
export interface ModifyAclRuleRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * ACL策略名
   */
  RuleName: string

  /**
   * 是否应用到新增的Topic
   */
  IsApplied: number
}

/**
 * 查询Datahub任务列表
 */
export interface DescribeDatahubTasksRes {
  /**
   * 任务总数
   */
  TotalCount: number

  /**
      * Datahub任务信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskList: Array<DatahubTaskInfo>
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

  /**
      * 实例Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string
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
 * AclRule列表接口出参
 */
export interface AclRule {
  /**
      * Acl规则名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleName: string

  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
      * 匹配类型，目前只支持前缀匹配，枚举值列表：PREFIXED
注意：此字段可能返回 null，表示取不到有效值。
      */
  PatternType: string

  /**
      * 表示前缀匹配的前缀的值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pattern: string

  /**
      * Acl资源类型,目前只支持Topic,枚举值列表：Topic
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceType: string

  /**
      * 该规则所包含的ACL信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  AclList: string

  /**
      * 规则所创建的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTimeStamp: string

  /**
      * 预设ACL规则是否应用到新增的topic中
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsApplied: number

  /**
      * 规则更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTimeStamp: string

  /**
      * 规则的备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Comment: string

  /**
      * 其中一个显示的对应的TopicName
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicName: string

  /**
      * 应用该ACL规则的Topic数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicCount: number

  /**
      * patternType的中文显示
注意：此字段可能返回 null，表示取不到有效值。
      */
  PatternTypeTitle: string
}

/**
 * 数据处理——数据处理参数
 */
export interface SMTParam {
  /**
   * 数据处理KEY
   */
  Key: string

  /**
   * 操作，DATE系统预设-时间戳，CUSTOMIZE自定义，MAPPING映射，JSONPATH
   */
  Operate: string

  /**
   * 数据类型，ORIGINAL原始，STRING，INT64，FLOAT64，BOOLEAN，MAP，ARRAY
   */
  SchemeType: string

  /**
      * 数据处理VALUE
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value?: string

  /**
      * VALUE处理
注意：此字段可能返回 null，表示取不到有效值。
      */
  ValueOperate?: ValueParam

  /**
      * 原始VALUE
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalValue?: string

  /**
      * VALUE处理链
注意：此字段可能返回 null，表示取不到有效值。
      */
  ValueOperates?: Array<ValueParam>
}

/**
 * CheckCdcCluster返回参数结构体
 */
export interface CheckCdcClusterResponse {
  /**
      * 返回结果状态Success
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Ctsdb连接源参数(更新)
 */
export interface CtsdbModifyConnectParam {
  /**
      * Ctsdb的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * Ctsdb连接源的实例vip
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * Ctsdb连接源的vpcId
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * Ctsdb连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * Ctsdb连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * Ctsdb连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource?: string
}

/**
 * CreateToken返回参数结构体
 */
export interface CreateTokenResponse {
  /**
      * token串
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 动态硬盘扩容配置
 */
export interface DynamicDiskConfig {
  /**
      * 动态硬盘扩容配置开关（0: 关闭，1: 开启）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Enable?: number

  /**
      * 每次磁盘动态扩容大小百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
  StepForwardPercentage?: number

  /**
      * 磁盘配额百分比触发条件，即消息达到此值触发硬盘自动扩容事件
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskQuotaPercentage?: number

  /**
      * 最大扩容硬盘大小，以 GB 为单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxDiskSpace?: number
}

/**
 * Doris 连接源参数
 */
export interface DorisConnectParam {
  /**
      * Doris jdbc 负载均衡连接 port，通常映射到 fe 的 9030 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * Doris 连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * Doris 连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password: string

  /**
      * Doris 连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * Doris 连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * Doris 连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean

  /**
      * Doris 连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean

  /**
      * Doris 的 http 负载均衡连接 port，通常映射到 be 的 8040 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  BePort?: number
}

/**
 * zone信息实体
 */
export interface ZoneInfo {
  /**
   * zone的id
   */
  ZoneId: string

  /**
   * 是否内部APP
   */
  IsInternalApp: number

  /**
   * app id
   */
  AppId: number

  /**
   * 标识
   */
  Flag: boolean

  /**
   * zone名称
   */
  ZoneName: string

  /**
   * zone状态
   */
  ZoneStatus: number

  /**
   * 额外标识
   */
  Exflag: string

  /**
   * json对象，key为机型，value true为售罄，false为未售罄
   */
  SoldOut: string

  /**
      * 标准版售罄信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesInfo: Array<SaleInfo>
}

/**
 * DescribeTopicSubscribeGroup返回参数结构体
 */
export interface DescribeTopicSubscribeGroupResponse {
  /**
   * 返回结果
   */
  Result: TopicSubscribeGroup

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAclRule请求参数结构体
 */
export interface DeleteAclRuleRequest {
  /**
   * 实例id信息
   */
  InstanceId: string

  /**
   * acl规则名称
   */
  RuleName: string
}

/**
 * DescribeConnectResources请求参数结构体
 */
export interface DescribeConnectResourcesRequest {
  /**
   * 连接源类型
   */
  Type?: string

  /**
   * 连接源名称的关键字查询
   */
  SearchWord?: string

  /**
   * 分页偏移量，默认为0
   */
  Offset?: number

  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number

  /**
   * 连接源的关键字查询, 根据地域查询本地域内连接管理列表中的连接(仅支持包含region输入的连接源)
   */
  ResourceRegion?: string
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
 * ModifyAclRule返回参数结构体
 */
export interface ModifyAclRuleResponse {
  /**
   * 规则的唯一表示Key
   */
  Result: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyConnectResource请求参数结构体
 */
export interface ModifyConnectResourceRequest {
  /**
   * 连接源的Id
   */
  ResourceId: string

  /**
   * 连接源名称，为空时不修改
   */
  ResourceName?: string

  /**
   * 连接源描述，为空时不修改
   */
  Description?: string

  /**
   * 连接源类型，修改数据源参数时，需要与原Type相同，否则编辑数据源无效
   */
  Type?: string

  /**
   * Dts配置，Type为DTS时必填
   */
  DtsConnectParam?: DtsModifyConnectParam

  /**
   * MongoDB配置，Type为MONGODB时必填
   */
  MongoDBConnectParam?: MongoDBModifyConnectParam

  /**
   * Es配置，Type为ES时必填
   */
  EsConnectParam?: EsModifyConnectParam

  /**
   * ClickHouse配置，Type为CLICKHOUSE时必填
   */
  ClickHouseConnectParam?: ClickHouseModifyConnectParam

  /**
   * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时必填
   */
  MySQLConnectParam?: MySQLModifyConnectParam

  /**
   * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填
   */
  PostgreSQLConnectParam?: PostgreSQLModifyConnectParam

  /**
   * MariaDB配置，Type为MARIADB时必填
   */
  MariaDBConnectParam?: MariaDBModifyConnectParam

  /**
   * SQLServer配置，Type为SQLSERVER时必填
   */
  SQLServerConnectParam?: SQLServerModifyConnectParam

  /**
   * Ctsdb配置，Type为CTSDB
   */
  CtsdbConnectParam?: CtsdbModifyConnectParam

  /**
   * Doris配置，Type为DORIS
   */
  DorisConnectParam?: DorisModifyConnectParam

  /**
   * Kafka配置，Type为 KAFKA 时必填
   */
  KafkaConnectParam?: KafkaConnectParam
}

/**
 * ModifyInstanceAttributes返回参数结构体
 */
export interface ModifyInstanceAttributesResponse {
  /**
   * 返回结果
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeACL返回参数结构体
 */
export interface DescribeACLResponse {
  /**
   * 返回的ACL结果集对象
   */
  Result: AclResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchModifyGroupOffsets返回参数结构体
 */
export interface BatchModifyGroupOffsetsResponse {
  /**
   * 返回结果
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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

  /**
      * 消费分组配额
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupCountQuota?: number
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
 * CreateDatahubTopic请求参数结构体
 */
export interface CreateDatahubTopicRequest {
  /**
   * 名称，是一个不超过 128 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
   */
  Name: string

  /**
   * Partition个数，大于0
   */
  PartitionNum: number

  /**
   * 消息保留时间，单位ms，当前最小值为60000ms
   */
  RetentionMs: number

  /**
   * 主题备注，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
   */
  Note?: string

  /**
   * 标签列表
   */
  Tags?: Array<Tag>
}

/**
 * DescribeTopic返回参数结构体
 */
export interface DescribeTopicResponse {
  /**
      * 返回的结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: TopicResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MongoDB修改连接源参数
 */
export interface MongoDBModifyConnectParam {
  /**
      * MongoDB连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * MongoDB的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * MongoDB连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * MongoDB连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * MongoDB连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * MongoDB连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * MongoDB连接源是否为自建集群【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
}

/**
 * Tdw类型入参
 */
export interface TdwParam {
  /**
   * Tdw的bid
   */
  Bid: string

  /**
   * Tdw的tid
   */
  Tid: string

  /**
   * 默认true
   */
  IsDomestic?: boolean

  /**
   * TDW地址，默认tl-tdbank-tdmanager.tencent-distribute.com
   */
  TdwHost?: string

  /**
   * TDW端口，默认8099
   */
  TdwPort?: number
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
 * DescribeDatahubTopic返回参数结构体
 */
export interface DescribeDatahubTopicResponse {
  /**
   * 返回的结果对象
   */
  Result: DescribeDatahubTopicResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCkafkaZone请求参数结构体
 */
export interface DescribeCkafkaZoneRequest {
  /**
   * cdc专业集群业务参数
   */
  CdcId?: string
}

/**
 * FetchDatahubMessageByOffset返回参数结构体
 */
export interface FetchDatahubMessageByOffsetResponse {
  /**
   * 返回结果
   */
  Result: ConsumerRecord

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConsumer返回参数结构体
 */
export interface CreateConsumerResponse {
  /**
   * 创建group描述
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCdcCluster返回参数结构体
 */
export interface CreateCdcClusterResponse {
  /**
   * 无
   */
  Result: CdcClusterResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 创建CDC 标准版共享集群出参
 */
export interface CdcClusterResponse {
  /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: number
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
 * FetchDatahubMessageByOffset请求参数结构体
 */
export interface FetchDatahubMessageByOffsetRequest {
  /**
   * 主题名
   */
  Name: string

  /**
   * 分区id
   */
  Partition: number

  /**
   * 位点信息，必填
   */
  Offset?: number
}

/**
 * AuthorizeToken请求参数结构体
 */
export interface AuthorizeTokenRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 用户
   */
  User: string

  /**
   * token串
   */
  Tokens: string
}

/**
 * 操作类型返回的Data结构
 */
export interface OperateResponseData {
  /**
      * FlowId11
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowId: number
}

/**
 * RenewCkafkaInstance接口出参bigDealIds
 */
export interface RenewCkafkaInstanceResponse {
  /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BigDealId?: string

  /**
      * 子订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealName?: string
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
   * Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER)
   */
  ResourceType: number

  /**
   * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。
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
 * 查询Datahub任务信息
 */
export interface DescribeDatahubTaskRes {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务名称
   */
  TaskName: string

  /**
   * 任务类型，SOURCE数据接入，SINK数据流出
   */
  TaskType: string

  /**
   * 状态，-1创建失败，0创建中，1运行中，2删除中，3已删除，4删除失败，5暂停中，6已暂停，7暂停失败，8恢复中，9恢复失败
   */
  Status: number

  /**
      * 数据源
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceResource: DatahubResource

  /**
      * 数据目标
注意：此字段可能返回 null，表示取不到有效值。
      */
  TargetResource: DatahubResource

  /**
      * Connection列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Connections: Array<Connection>

  /**
      * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 消息处理规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransformParam: TransformParam

  /**
      * 数据接入ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatahubId: string

  /**
      * 绑定的SchemaId
注意：此字段可能返回 null，表示取不到有效值。
      */
  SchemaId: string

  /**
      * 绑定的Schema名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SchemaName: string

  /**
      * 数据处理规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransformsParam: TransformsParam

  /**
      * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
      * 任务标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>
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
 * MongoDB连接源参数
 */
export interface MongoDBConnectParam {
  /**
      * MongoDB的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * MongoDB连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * MongoDB连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password: string

  /**
      * MongoDB连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * MongoDB连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt: boolean

  /**
      * MongoDB连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * MongoDB连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
}

/**
 * MySQL类型入参
 */
export interface MySQLParam {
  /**
   * MySQL的数据库名称，"*"为全数据库
   */
  Database: string

  /**
   * MySQL的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写，需要填入正则表达式时，格式为"数据库名\\.数据表名"
   */
  Table: string

  /**
   * 该MySQL在连接管理内的Id
   */
  Resource: string

  /**
   * 复制存量信息(schema_only不复制, initial全量)，默认位initial
   */
  SnapshotMode?: string

  /**
   * 存放MySQL的Ddl信息的Topic，为空则默认不存放
   */
  DdlTopic?: string

  /**
   * "TABLE" 表示读取项为 table，"QUERY" 表示读取项为 query
   */
  DataSourceMonitorMode?: string

  /**
   * 当 "DataMonitorMode"="TABLE" 时，传入需要读取的 Table；当 "DataMonitorMode"="QUERY" 时，传入需要读取的查询 sql 语句
   */
  DataSourceMonitorResource?: string

  /**
   * "TIMESTAMP" 表示增量列为时间戳类型，"INCREMENT" 表示增量列为自增 id 类型
   */
  DataSourceIncrementMode?: string

  /**
   * 传入需要监听的列名称
   */
  DataSourceIncrementColumn?: string

  /**
   * "HEAD" 表示复制存量 + 增量数据，"TAIL" 表示只复制增量数据
   */
  DataSourceStartFrom?: string

  /**
   * "INSERT" 表示使用 Insert 模式插入，"UPSERT" 表示使用 Upsert 模式插入
   */
  DataTargetInsertMode?: string

  /**
   * 当 "DataInsertMode"="UPSERT" 时，传入当前 upsert 时依赖的主键
   */
  DataTargetPrimaryKeyField?: string

  /**
   * 表与消息间的映射关系
   */
  DataTargetRecordMapping?: Array<RecordMapping>

  /**
   * 事件路由到特定主题的正则表达式，默认为(.*)
   */
  TopicRegex?: string

  /**
   * TopicRegex的引用组，指定$1、$2等
   */
  TopicReplacement?: string

  /**
   * 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键
   */
  KeyColumns?: string

  /**
   * Mysql 是否抛弃解析失败的消息，默认为true
   */
  DropInvalidMessage?: boolean

  /**
   * 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效
   */
  DropCls?: DropCls

  /**
   * 输出格式，DEFAULT、CANAL_1、CANAL_2
   */
  OutputFormat?: string

  /**
   * 当Table输入的是前缀时，该项值为true，否则为false
   */
  IsTablePrefix?: boolean

  /**
   * 如果该值为all，则DDL数据以及DML数据也会写入到选中的topic；若该值为dml，则只有DML数据写入到选中的topic
   */
  IncludeContentChanges?: string

  /**
   * 如果该值为true，且MySQL中"binlog_rows_query_log_events"配置项的值为"ON"，则流入到topic的数据包含原SQL语句；若该值为false，流入到topic的数据不包含原SQL语句
   */
  IncludeQuery?: boolean

  /**
   * 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带
   */
  RecordWithSchema?: boolean

  /**
   * 存放信令表的数据库名称
   */
  SignalDatabase?: string

  /**
   * 输入的table是否为正则表达式，如果该选项以及IsTablePrefix同时为true，该选项的判断优先级高于IsTablePrefix
   */
  IsTableRegular?: boolean
}

/**
 * 批量解析
 */
export interface BatchAnalyseParam {
  /**
      * ONE_BY_ONE单条输出，MERGE合并输出
注意：此字段可能返回 null，表示取不到有效值。
      */
  Format: string
}

/**
 * 集群信息实体
 */
export interface ClusterInfo {
  /**
   * 集群Id
   */
  ClusterId: number

  /**
   * 集群名称
   */
  ClusterName: string

  /**
      * 集群最大磁盘 单位GB
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxDiskSize: number

  /**
      * 集群最大带宽 单位MB/s
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxBandWidth: number

  /**
      * 集群当前可用磁盘  单位GB
注意：此字段可能返回 null，表示取不到有效值。
      */
  AvailableDiskSize: number

  /**
      * 集群当前可用带宽 单位MB/s
注意：此字段可能返回 null，表示取不到有效值。
      */
  AvailableBandWidth: number

  /**
      * 集群所属可用区，表明集群归属的可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: number

  /**
      * 集群节点所在的可用区，若该集群为跨可用区集群，则包含该集群节点所在的多个可用区。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneIds: Array<number>
}

/**
 * DeleteGroup请求参数结构体
 */
export interface DeleteGroupRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 消费分组
   */
  Group: string
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
 * DescribeConnectResource请求参数结构体
 */
export interface DescribeConnectResourceRequest {
  /**
   * 连接源的Id
   */
  ResourceId: string
}

/**
 * DescribeTopicProduceConnection请求参数结构体
 */
export interface DescribeTopicProduceConnectionRequest {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * topic名称
   */
  TopicName: string
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
   * Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER)
   */
  ResourceType: number

  /**
   * Acl操作方式，(2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTENT_WRITE)
   */
  Operation: number

  /**
   * 权限类型，(2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
   */
  PermissionType: number

  /**
   * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。
   */
  ResourceName?: string

  /**
   * 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持
   */
  Host?: string

  /**
   * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户。传入时需要加 User: 前缀,如用户A则传入User:A。
   */
  Principal?: string

  /**
   * 资源名称列表,Json字符串格式。ResourceName和resourceNameList只能指定其中一个。
   */
  ResourceNameList?: string
}

/**
 * DescribeTopicSyncReplica返回参数结构体
 */
export interface DescribeTopicSyncReplicaResponse {
  /**
   * 返回topic 副本详情
   */
  Result: TopicInSyncReplicaResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConnectResource请求参数结构体
 */
export interface CreateConnectResourceRequest {
  /**
   * 连接源名称
   */
  ResourceName: string

  /**
   * 连接源类型
   */
  Type: string

  /**
   * 连接源描述
   */
  Description?: string

  /**
   * Dts配置，Type为DTS时必填
   */
  DtsConnectParam?: DtsConnectParam

  /**
   * MongoDB配置，Type为MONGODB时必填
   */
  MongoDBConnectParam?: MongoDBConnectParam

  /**
   * Es配置，Type为ES时必填
   */
  EsConnectParam?: EsConnectParam

  /**
   * ClickHouse配置，Type为CLICKHOUSE时必填
   */
  ClickHouseConnectParam?: ClickHouseConnectParam

  /**
   * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时必填
   */
  MySQLConnectParam?: MySQLConnectParam

  /**
   * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填
   */
  PostgreSQLConnectParam?: PostgreSQLConnectParam

  /**
   * MariaDB配置，Type为MARIADB时必填
   */
  MariaDBConnectParam?: MariaDBConnectParam

  /**
   * SQLServer配置，Type为SQLSERVER时必填
   */
  SQLServerConnectParam?: SQLServerConnectParam

  /**
   * Doris 配置，Type为 DORIS 时必填
   */
  DorisConnectParam?: DorisConnectParam

  /**
   * Kafka配置，Type为 KAFKA 时必填
   */
  KafkaConnectParam?: KafkaConnectParam
}

/**
 * MariaDB类型入参
 */
export interface MariaDBParam {
  /**
   * MariaDB的数据库名称，"*"为全数据库
   */
  Database: string

  /**
   * MariaDB的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写
   */
  Table: string

  /**
   * 该MariaDB在连接管理内的Id
   */
  Resource: string

  /**
   * 复制存量信息(schema_only不复制, initial全量)，默认位initial
   */
  SnapshotMode?: string

  /**
   * 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键
   */
  KeyColumns?: string

  /**
   * 当Table输入的是前缀时，该项值为true，否则为false
   */
  IsTablePrefix?: boolean

  /**
   * 输出格式，DEFAULT、CANAL_1、CANAL_2
   */
  OutputFormat?: string

  /**
   * 如果该值为all，则DDL数据以及DML数据也会写入到选中的topic；若该值为dml，则只有DML数据写入到选中的topic
   */
  IncludeContentChanges?: string

  /**
   * 如果该值为true，且MySQL中"binlog_rows_query_log_events"配置项的值为"ON"，则流入到topic的数据包含原SQL语句；若该值为false，流入到topic的数据不包含原SQL语句
   */
  IncludeQuery?: boolean

  /**
   * 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带
   */
  RecordWithSchema?: boolean
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
   * vip网络类型（1:外网TGW  2:基础网络 3:VPC网络 4:支撑网络(idc 环境) 5:SSL外网访问方式访问 6:黑石环境vpc 7:支撑网络(cvm 环境）
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

  /**
      * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeleteTimestamp: string
}

/**
 * DeleteRoute返回参数结构体
 */
export interface DeleteRouteResponse {
  /**
   * 返回结果
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * partition信息
 */
export interface Partitions {
  /**
   * 分区
   */
  Partition: number

  /**
   * partition 消费位移
   */
  Offset: number
}

/**
 * 创建数据转储返回值
 */
export interface CreateDatahubTaskRes {
  /**
   * 转储任务id
   */
  TaskId: string

  /**
      * 数据转储Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatahubId: string
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
 * topic链接信息
 */
export interface DescribeConnectInfoResultDTO {
  /**
      * ip地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpAddr: string

  /**
      * 连结时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  Time: string

  /**
      * 是否支持的版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUnSupportVersion: boolean
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
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据处理规则失败处理
 */
export interface FailureParam {
  /**
   * 类型，DLQ死信队列，IGNORE_ERROR保留，DROP废弃
   */
  Type: string

  /**
   * Ckafka类型死信队列
   */
  KafkaParam?: KafkaParam

  /**
   * 重试间隔
   */
  RetryInterval?: number

  /**
   * 重试次数
   */
  MaxRetryAttempts?: number

  /**
      * DIP Topic类型死信队列
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicParam?: TopicParam

  /**
      * 死信队列类型，CKAFKA，TOPIC
注意：此字段可能返回 null，表示取不到有效值。
      */
  DlqType?: string
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
   * 主题名称，是一个不超过 128 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
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
   * 可选参数。消息保留时间，单位ms，当前最小值为60000ms
   */
  RetentionMs?: number

  /**
   * Segment分片滚动的时长，单位ms，当前最小为3600000ms
   */
  SegmentMs?: number

  /**
   * 主题消息最大值，单位为 Byte，最小值1024Byte(即1KB)，最大值为8388608Byte（即8MB）。
   */
  MaxMessageBytes?: number

  /**
   * 预设ACL规则, 1:打开  0:关闭，默认不打开
   */
  EnableAclRule?: number

  /**
   * 预设ACL规则的名称
   */
  AclRuleName?: string

  /**
   * 可选, 保留文件大小. 默认为-1,单位bytes, 当前最小值为1048576B
   */
  RetentionBytes?: number

  /**
   * 标签列表
   */
  Tags?: Array<Tag>
}

/**
 * DeleteAcl返回参数结构体
 */
export interface DeleteAclResponse {
  /**
   * 返回结果
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 动态消息保留时间配置
 */
export interface DynamicRetentionTime {
  /**
      * 动态消息保留时间配置开关（0: 关闭，1: 开启）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Enable?: number

  /**
      * 磁盘配额百分比触发条件，即消息达到此值触发消息保留时间变更事件
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskQuotaPercentage?: number

  /**
      * 每次向前调整消息保留时间百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
  StepForwardPercentage?: number

  /**
      * 保底时长，单位分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
  BottomRetention?: number
}

/**
 * 数据处理参数
 */
export interface TransformParam {
  /**
   * 解析格式，JSON，DELIMITER分隔符，REGULAR正则提取
   */
  AnalysisFormat: string

  /**
   * 输出格式
   */
  OutputFormat: string

  /**
   * 是否保留解析失败数据
   */
  FailureParam: FailureParam

  /**
   * 原始数据
   */
  Content: string

  /**
   * 数据来源，TOPIC从源topic拉取，CUSTOMIZE自定义
   */
  SourceType: string

  /**
   * 分隔符、正则表达式
   */
  Regex?: string

  /**
   * Map
   */
  MapParam?: Array<MapParam>

  /**
   * 过滤器
   */
  FilterParam?: Array<FilterMapParam>

  /**
      * 测试结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result?: string

  /**
      * 解析结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  AnalyseResult?: Array<MapParam>

  /**
      * 底层引擎是否使用eb
注意：此字段可能返回 null，表示取不到有效值。
      */
  UseEventBus?: boolean
}

/**
 * DeleteRouteTriggerTime请求参数结构体
 */
export interface DeleteRouteTriggerTimeRequest {
  /**
   * 修改时间
   */
  DelayTime: string
}

/**
 * DescribeTopicSubscribeGroup请求参数结构体
 */
export interface DescribeTopicSubscribeGroupRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 主题名称
   */
  TopicName: string

  /**
   * 分页时的起始位置
   */
  Offset?: number

  /**
   * 分页时的个数
   */
  Limit?: number
}

/**
 * DeleteInstancePre返回参数结构体
 */
export interface DeleteInstancePreResponse {
  /**
   * 返回结果
   */
  Result: CreateInstancePreResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Table、Topic路由
 */
export interface TableMapping {
  /**
   * 库名
   */
  Database: string

  /**
   * 表名，多个表,（逗号）隔开
   */
  Table: string

  /**
   * Topic名称
   */
  Topic: string

  /**
   * Topic ID
   */
  TopicId: string
}

/**
 * Datahub Topic 响应
 */
export interface DatahubTopicResp {
  /**
   * Topic名称
   */
  TopicName: string

  /**
      * TopicId
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicId?: string
}

/**
 * record 与数据库表的映射关系
 */
export interface RecordMapping {
  /**
   * 消息的 key 名称
   */
  JsonKey?: string

  /**
   * 消息类型
   */
  Type?: string

  /**
   * 消息是否允许为空
   */
  AllowNull?: boolean

  /**
   * 对应映射列名称
   */
  ColumnName?: string

  /**
   * 数据库表额外字段
   */
  ExtraInfo?: string

  /**
   * 当前列大小
   */
  ColumnSize?: string

  /**
   * 当前列精度
   */
  DecimalDigits?: string

  /**
   * 是否为自增列
   */
  AutoIncrement?: boolean

  /**
   * 数据库表默认参数
   */
  DefaultValue?: string
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
 * 公网带宽参数
 */
export interface InquiryPublicNetworkParam {
  /**
   * 公网计费模式: BANDWIDTH_PREPAID(包年包月), BANDWIDTH_POSTPAID_BY_HOUR(带宽按小时计费)
   */
  PublicNetworkChargeType?: string

  /**
   * 公网带宽, 单位MB
   */
  PublicNetworkMonthly?: number
}

/**
 * topic副本及详细信息
 */
export interface TopicInSyncReplicaInfo {
  /**
   * 分区名称
   */
  Partition: string

  /**
   * Leader Id
   */
  Leader: number

  /**
   * 副本集
   */
  Replica: string

  /**
   * ISR
   */
  InSyncReplica: string

  /**
      * 起始Offset
注意：此字段可能返回 null，表示取不到有效值。
      */
  BeginOffset: number

  /**
      * 末端Offset
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndOffset: number

  /**
      * 消息数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MessageCount: number

  /**
      * 未同步副本集
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutOfSyncReplica: string
}

/**
 * DeleteConnectResource返回参数结构体
 */
export interface DeleteConnectResourceResponse {
  /**
   * 连接源的Id
   */
  Result: ConnectResourceResourceIdResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegion请求参数结构体
 */
export interface DescribeRegionRequest {
  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 返回最大结果数
   */
  Limit?: number

  /**
   * 业务字段，可忽略
   */
  Business?: string

  /**
   * cdc专有集群业务字段，可忽略
   */
  CdcId?: string
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
 * DeleteAclRule返回参数结构体
 */
export interface DeleteAclRuleResponse {
  /**
   * 返回被删除的规则的ID
   */
  Result: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 查询连接源列表的返参
 */
export interface DescribeConnectResourcesResp {
  /**
   * 连接源个数
   */
  TotalCount: number

  /**
      * 连接源数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConnectResourceList: Array<DescribeConnectResource>
}

/**
 * ModifyTopicAttributes返回参数结构体
 */
export interface ModifyTopicAttributesResponse {
  /**
   * 返回结果集
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量发送消息内容
 */
export interface BatchContent {
  /**
   * 发送的消息体
   */
  Body: string

  /**
   * 发送消息的键名
   */
  Key?: string
}

/**
 * DeleteRouteTriggerTime返回参数结构体
 */
export interface DeleteRouteTriggerTimeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeTopicSubscribeGroup接口出参
 */
export interface TopicSubscribeGroup {
  /**
   * 总数
   */
  TotalCount: number

  /**
   * 消费分组状态数量信息
   */
  StatusCountInfo: string

  /**
      * 消费分组信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupsInfo: Array<GroupInfoResponse>

  /**
      * 此次请求是否异步的状态。实例里分组较少的会直接返回结果,Status为1。当分组较多时,会异步更新缓存，Status为0时不会返回分组信息，直至Status为1更新完毕返回结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number
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
 * Dts连接源参数
 */
export interface DtsConnectParam {
  /**
      * Dts的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * Dts消费分组的Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupId: string

  /**
      * Dts消费分组的账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * Dts消费分组的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password: string

  /**
      * Dts实例Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * Dts订阅的topic
注意：此字段可能返回 null，表示取不到有效值。
      */
  Topic: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
}

/**
 * Doris 连接源修改参数
 */
export interface DorisModifyConnectParam {
  /**
      * Doris 连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * Doris jdbc 负载均衡连接 port，通常映射到 fe 的 9030 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * Doris 连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * Doris 连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * Doris 连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * Doris 连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean

  /**
      * Doris 连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean

  /**
      * Doris 的 http 负载均衡连接 port，通常映射到 be 的 8040 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  BePort?: number
}

/**
 * 数据处理——处理链
 */
export interface FieldParam {
  /**
   * 解析
   */
  Analyse: AnalyseParam

  /**
      * 二次解析
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecondaryAnalyse?: SecondaryAnalyseParam

  /**
      * 数据处理
注意：此字段可能返回 null，表示取不到有效值。
      */
  SMT?: Array<SMTParam>

  /**
      * 测试结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result?: string

  /**
      * 解析结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  AnalyseResult?: Array<SMTParam>

  /**
      * 二次解析结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecondaryAnalyseResult?: Array<SMTParam>

  /**
      * JSON格式解析结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  AnalyseJsonResult?: string

  /**
      * JSON格式二次解析结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecondaryAnalyseJsonResult?: string
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
   * 返回数量，不填则默认为20，最大值为50
   */
  Limit?: number

  /**
   * Acl预设策略名称
   */
  AclRuleName?: string
}

/**
 * CreateToken请求参数结构体
 */
export interface CreateTokenRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 用户名
   */
  User: string
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
 * Cos Datahub 任务接入参数
 */
export interface CosParam {
  /**
   * cos 存储桶名称
   */
  BucketName: string

  /**
   * 地域代码
   */
  Region: string

  /**
   * 对象名称
   */
  ObjectKey?: string

  /**
   * 汇聚消息量的大小（单位：MB)
   */
  AggregateBatchSize?: number

  /**
   * 汇聚的时间间隔（单位：小时）
   */
  AggregateInterval?: number

  /**
   * 消息汇聚后的文件格式（支持csv, json）
   */
  FormatOutputType?: string

  /**
   * 转储的对象目录前缀
   */
  ObjectKeyPrefix?: string

  /**
   * 根据strptime 时间格式化的分区格式
   */
  DirectoryTimeFormat?: string
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
 * 查询kafka的zone信息返回的实体
 */
export interface ZoneResponse {
  /**
   * zone列表
   */
  ZoneList: Array<ZoneInfo>

  /**
   * 最大购买实例个数
   */
  MaxBuyInstanceNum: number

  /**
   * 最大购买带宽 单位Mb/s
   */
  MaxBandwidth: number

  /**
   * 后付费单位价格
   */
  UnitPrice: Price

  /**
   * 后付费消息单价
   */
  MessagePrice: Price

  /**
      * 用户独占集群信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterInfo: Array<ClusterInfo>

  /**
      * 购买标准版配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Standard: string

  /**
      * 购买标准版S2配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  StandardS2: string

  /**
      * 购买专业版配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Profession: string

  /**
      * 购买物理独占版配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Physical: string

  /**
      * 公网带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicNetwork: string

  /**
      * 公网带宽配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicNetworkLimit: string
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
   * 实例属性返回结果对象。
   */
  Result: InstanceAttributesResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Map参数
 */
export interface MapParam {
  /**
   * key值
   */
  Key: string

  /**
   * 类型，DEFAULT默认，DATE系统预设-时间戳，CUSTOMIZE自定义，MAPPING映射
   */
  Type?: string

  /**
   * 值
   */
  Value?: string
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
 * Topic 副本及详情数据集合
 */
export interface TopicInSyncReplicaResult {
  /**
   * Topic详情及副本合集
   */
  TopicInSyncReplicaList: Array<TopicInSyncReplicaInfo>

  /**
   * 总计个数
   */
  TotalCount: number
}

/**
 * DeleteInstancePre请求参数结构体
 */
export interface DeleteInstancePreRequest {
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * DescribeDatahubTopic请求参数结构体
 */
export interface DescribeDatahubTopicRequest {
  /**
   * 名称
   */
  Name: string
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

  /**
      * 消息保留文件大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  RetentionBytes: number
}

/**
 * ClickHouse的Schema
 */
export interface ClickHouseSchema {
  /**
   * 表的列名
   */
  ColumnName: string

  /**
   * 该列对应的jsonKey名
   */
  JsonKey: string

  /**
   * 表列项的类型
   */
  Type: string

  /**
   * 列项是否允许为空
   */
  AllowNull: boolean
}

/**
 * Ctsdb连接源参数
 */
export interface CtsdbConnectParam {
  /**
      * Ctsdb的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * Ctsdb连接源的实例vip
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * Ctsdb连接源的vpcId
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * Ctsdb连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * Ctsdb连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * Ctsdb连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource?: string
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
 * MariaDB连接源参数
 */
export interface MariaDBModifyConnectParam {
  /**
      * MariaDB连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * MariaDB的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * MariaDB连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * MariaDB连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * MariaDB连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * MariaDB连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
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

  /**
   * 动态消息保留策略配置
   */
  DynamicRetentionConfig?: DynamicRetentionTime

  /**
   * 修改升配置rebalance时间
   */
  RebalanceTime?: number

  /**
   * 公网带宽
   */
  PublicNetwork?: number

  /**
   * 动态硬盘扩容策略配置
   */
  DynamicDiskConfig?: DynamicDiskConfig

  /**
   * 实例级别单条消息大小（单位byte)
   */
  MaxMessageByte?: number
}

/**
 * DeleteDatahubTopic请求参数结构体
 */
export interface DeleteDatahubTopicRequest {
  /**
   * Topic名称
   */
  Name: string
}

/**
 * DescribeRegion返回参数结构体
 */
export interface DescribeRegionResponse {
  /**
      * 返回地域枚举结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: Array<Region>

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
   * 返回创建结果
   */
  Result: CreateTopicResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * Kafka连接源参数
 */
export interface KafkaConnectParam {
  /**
      * Kafka连接源的实例资源, 非自建时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource?: string

  /**
      * 是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean

  /**
      * 是否更新到关联的Dip任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean

  /**
      * Kafka连接的broker地址, 自建时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  BrokerAddress?: string

  /**
      * CKafka连接源的实例资源地域, 跨地域时必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region?: string
}

/**
 * DescribeTopicProduceConnection返回参数结构体
 */
export interface DescribeTopicProduceConnectionResponse {
  /**
   * 链接信息返回结果集
   */
  Result: Array<DescribeConnectInfoResultDTO>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FetchLatestDatahubMessageList请求参数结构体
 */
export interface FetchLatestDatahubMessageListRequest {
  /**
   * 主题名
   */
  Name: string

  /**
   * 分区id
   */
  Partition: number

  /**
   * 位点信息
   */
  Offset?: number

  /**
   * 最大查询条数，最小1，最大100
   */
  MessageCount?: number
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
 * Datahub任务信息
 */
export interface DatahubTaskInfo {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务名称
   */
  TaskName: string

  /**
   * 任务类型，SOURCE数据接入，SINK数据流出
   */
  TaskType: string

  /**
   * 状态，-1创建失败，0创建中，1运行中，2删除中，3已删除，4删除失败，5暂停中，6已暂停，7暂停失败，8恢复中，9恢复失败
   */
  Status: number

  /**
      * 数据源
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceResource: DatahubResource

  /**
      * 数据目标
注意：此字段可能返回 null，表示取不到有效值。
      */
  TargetResource: DatahubResource

  /**
      * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
      * 创建进度百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskProgress: number

  /**
      * 任务当前处于的步骤
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskCurrentStep: string

  /**
      * Datahub转储Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatahubId: string

  /**
      * 步骤列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  StepList: Array<string>
}

/**
 * CreateAclRule返回参数结构体
 */
export interface CreateAclRuleResponse {
  /**
   * 规则的唯一表示Key
   */
  Result: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopicAttributes返回参数结构体
 */
export interface DescribeTopicAttributesResponse {
  /**
   * 返回的结果对象
   */
  Result: TopicAttributesResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDatahubTopic返回参数结构体
 */
export interface DeleteDatahubTopicResponse {
  /**
   * 返回的结果集
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * FetchMessageListByOffset返回参数结构体
 */
export interface FetchMessageListByOffsetResponse {
  /**
   * 返回结果。注意，列表中不返回具体的消息内容（key、value），如果需要查询具体消息内容，请使用FetchMessageByOffset接口
   */
  Result?: Array<ConsumerRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 详细类别的价格
 */
export interface InquiryDetailPrice {
  /**
      * 额外内网带宽价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  BandwidthPrice: InquiryBasePrice

  /**
      * 硬盘价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskPrice: InquiryBasePrice

  /**
      * 额外分区价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  PartitionPrice: InquiryBasePrice

  /**
      * 额外Topic价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicPrice: InquiryBasePrice

  /**
      * 实例套餐价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceTypePrice: InquiryBasePrice
}

/**
 * DeleteDatahubTask请求参数结构体
 */
export interface DeleteDatahubTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
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
 * DeleteConnectResource请求参数结构体
 */
export interface DeleteConnectResourceRequest {
  /**
   * 连接源的Id
   */
  ResourceId: string
}

/**
 * DeleteDatahubTask返回参数结构体
 */
export interface DeleteDatahubTaskResponse {
  /**
      * 任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: DatahubTaskIdRes

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
   * 已废弃。匹配标签key值。
   */
  TagKey?: string

  /**
   * 私有网络Id
   */
  VpcId?: string
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
      * 售卖类型,0:标准版,1:专业版
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

  /**
      * 动态消息保留策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  RetentionTimeConfig: DynamicRetentionTime

  /**
      * 最大连接数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxConnection: number

  /**
      * 公网带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicNetwork: number

  /**
      * 时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeleteRouteTimestamp: string

  /**
      * 剩余创建分区数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemainingPartitions: number

  /**
      * 剩余创建主题数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemainingTopics: number

  /**
      * 动态硬盘扩容策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  DynamicDiskConfig: DynamicDiskConfig
}

/**
 * CreateInstancePost请求参数结构体
 */
export interface CreateInstancePostRequest {
  /**
   * 实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
   */
  InstanceName: string

  /**
   * 实例带宽
   */
  BandWidth: number

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
   * 可用区
   */
  ZoneId?: number

  /**
   * 创建实例时可以选择集群Id, 该入参表示集群Id
   */
  ClusterId?: number
}

/**
 * DescribeDatahubTopics返回参数结构体
 */
export interface DescribeDatahubTopicsResponse {
  /**
      * 主题列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: DescribeDatahubTopicsResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConnectResource返回参数结构体
 */
export interface DescribeConnectResourceResponse {
  /**
      * 连接源的Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: DescribeConnectResourceResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * Connection信息
 */
export interface Connection {
  /**
   * Topic名称
   */
  TopicName: string

  /**
   * 消费组ID
   */
  GroupId: string

  /**
   * Topic的Id
   */
  TopicId: string
}

/**
 * BatchCreateAcl返回参数结构体
 */
export interface BatchCreateAclResponse {
  /**
   * 状态码
   */
  Result: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstancePre返回参数结构体
 */
export interface ModifyInstancePreResponse {
  /**
   * 变更预付费实例配置返回结构
   */
  Result: CreateInstancePreResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * Dts修改连接源参数
 */
export interface DtsModifyConnectParam {
  /**
   * Dts实例Id【不支持修改】
   */
  Resource: string

  /**
   * Dts的连接port【不支持修改】
   */
  Port?: number

  /**
   * Dts消费分组的Id
   */
  GroupId?: string

  /**
   * Dts消费分组的账号
   */
  UserName?: string

  /**
   * Dts消费分组的密码
   */
  Password?: string

  /**
   * 是否更新到关联的Datahub任务，默认为true
   */
  IsUpdate?: boolean

  /**
   * Dts订阅的topic【不支持修改】
   */
  Topic?: string
}

/**
 * DeleteRoute请求参数结构体
 */
export interface DeleteRouteRequest {
  /**
   * 实例唯一id
   */
  InstanceId: string

  /**
   * 路由id
   */
  RouteId: number

  /**
   * 调用方appId
   */
  CallerAppid?: number

  /**
   * 删除路由时间
   */
  DeleteRouteTime?: string
}

/**
 * CreateCdcCluster请求参数结构体
 */
export interface CreateCdcClusterRequest {
  /**
   * cdc的id
   */
  CdcId: string

  /**
   * vpcId,一个地域只有唯一一个vpcid用于CDC
   */
  CdcVpcId: string

  /**
   * 每个CDC集群有唯一一个子网ID
   */
  CdcSubnetId: string

  /**
   * 所在可用区ID
   */
  ZoneId: number

  /**
   * cdc集群的总带宽
   */
  Bandwidth: number

  /**
   * cdc集群的总磁盘
   */
  DiskSize: number

  /**
   * 数据盘类型
   */
  DiskType: string

  /**
   * 系统盘类型
   */
  SystemDiskType: string
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
 * CreateInstancePre返回参数结构体
 */
export interface CreateInstancePreResponse {
  /**
   * 返回结果
   */
  Result?: CreateInstancePreResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回连接源的Id
 */
export interface ConnectResourceResourceIdResp {
  /**
      * 连接源的Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceId: string
}

/**
 * CheckCdcCluster请求参数结构体
 */
export interface CheckCdcClusterRequest {
  /**
   * 任务ID
   */
  TaskId: number
}

/**
 * FetchMessageByOffset请求参数结构体
 */
export interface FetchMessageByOffsetRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * 主题名
   */
  Topic: string

  /**
   * 分区id
   */
  Partition: number

  /**
   * 位点信息，必填
   */
  Offset?: number
}

/**
 * Datahub Topic详情
 */
export interface DescribeDatahubTopicResp {
  /**
   * 名称
   */
  Name: string

  /**
   * Topic名称
   */
  TopicName: string

  /**
   * Topic Id
   */
  TopicId: string

  /**
   * 分区数
   */
  PartitionNum: number

  /**
   * 过期时间
   */
  RetentionMs: number

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Note: string

  /**
   * 用户名
   */
  UserName: string

  /**
   * 密码
   */
  Password: string

  /**
   * 状态，1使用中，2删除中
   */
  Status: number

  /**
      * 服务路由地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Address: string
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
   * （过滤条件）按照实例名,实例Id,可用区,私有网络id,子网id 过滤，支持模糊查询
   */
  SearchWord?: string

  /**
   * （过滤条件）实例的状态。0：创建中，1：运行中，2：删除中，不填默认返回全部
   */
  Status?: Array<number>

  /**
   * 偏移量，不填默认为0。
   */
  Offset?: number

  /**
   * 返回数量，不填则默认10，最大值20。
   */
  Limit?: number

  /**
   * 匹配标签key值。
   */
  TagKey?: string

  /**
   * 过滤器。filter.Name 支持('Ip', 'VpcId', 'SubNetId', 'InstanceType','InstanceId') ,filter.Values最多传递10个值.
   */
  Filters?: Array<Filter>

  /**
   * 已经废弃， 使用InstanceIdList
   */
  InstanceIds?: string

  /**
   * 按照实例ID过滤
   */
  InstanceIdList?: Array<string>

  /**
   * 根据标签列表过滤实例（取交集）
   */
  TagList?: Array<Tag>
}

/**
 * 数据处理——Value处理参数——Jsonpath替换参数
 */
export interface JsonPathReplaceParam {
  /**
   * 被替换值，Jsonpath表达式
   */
  OldValue: string

  /**
   * 替换值，Jsonpath表达式或字符串
   */
  NewValue: string
}

/**
 * 数据处理——Value处理参数——截取参数
 */
export interface SubstrParam {
  /**
   * 截取起始位置
   */
  Start: number

  /**
   * 截取截止位置
   */
  End: number
}

/**
 * FetchMessageByOffset返回参数结构体
 */
export interface FetchMessageByOffsetResponse {
  /**
   * 返回结果
   */
  Result: ConsumerRecord

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateConsumer请求参数结构体
 */
export interface CreateConsumerRequest {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * group名称
   */
  GroupName: string

  /**
   * topic名称，TopicName、TopicNameList 需要显示指定一个存在的topic名称
   */
  TopicName?: string

  /**
   * topic名称数组
   */
  TopicNameList?: Array<string>
}

/**
 * InquireCkafkaPrice返回参数结构体
 */
export interface InquireCkafkaPriceResponse {
  /**
   * 出参
   */
  Result: InquireCkafkaPriceResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDatahubTopic返回参数结构体
 */
export interface CreateDatahubTopicResponse {
  /**
   * 返回创建结果
   */
  Result: DatahubTopicResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquireCkafkaPrice请求参数结构体
 */
export interface InquireCkafkaPriceRequest {
  /**
   * 国内站标准版填写standards2, 专业版填写profession
   */
  InstanceType: string

  /**
   * 购买/续费付费类型(购买时不填的话, 默认获取购买包年包月一个月的费用)
   */
  InstanceChargeParam?: InstanceChargeParam

  /**
   * 购买/续费时购买的实例数量(不填时, 默认为1个)
   */
  InstanceNum?: number

  /**
   * 实例内网带宽大小, 单位MB/s (购买时必填)
   */
  Bandwidth?: number

  /**
   * 实例的硬盘购买类型以及大小 (购买时必填)
   */
  InquiryDiskParam?: InquiryDiskParam

  /**
   * 实例消息保留时间大小, 单位小时 (购买时必填)
   */
  MessageRetention?: number

  /**
   * 购买实例topic数, 单位个 (购买时必填)
   */
  Topic?: number

  /**
   * 购买实例分区数, 单位个 (购买时必填)
   */
  Partition?: number

  /**
   * 购买地域, 可通过查看DescribeCkafkaZone这个接口获取ZoneId
   */
  ZoneIds?: Array<number>

  /**
   * 标记操作, 新购填写purchase, 续费填写renew, (不填时, 默认为purchase)
   */
  CategoryAction?: string

  /**
   * 国内站购买的版本, sv_ckafka_instance_s2_1(入门型), sv_ckafka_instance_s2_2(标准版), sv_ckafka_instance_s2_3(进阶型), 如果instanceType为standards2, 但该参数为空, 则默认值为sv_ckafka_instance_s2_1
   */
  BillType?: string

  /**
   * 公网带宽计费模式, 目前只有专业版支持公网带宽 (购买公网带宽时必填)
   */
  PublicNetworkParam?: InquiryPublicNetworkParam

  /**
   * 续费时的实例id, 续费时填写
   */
  InstanceId?: string
}

/**
 * 数据处理——Value处理参数——转换时间格式参数
 */
export interface DateParam {
  /**
   * 时间格式
   */
  Format?: string

  /**
      * 输入类型，string，unix时间戳，默认string
注意：此字段可能返回 null，表示取不到有效值。
      */
  TargetType?: string

  /**
      * 时区，默认GMT+8
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeZone?: string
}

/**
 * 数据处理——Value处理参数
 */
export interface ValueParam {
  /**
   * 处理模式，REPLACE替换，SUBSTR截取，DATE日期转换，TRIM去除前后空格，REGEX_REPLACE正则替换，URL_DECODE，LOWERCASE转换为小写
   */
  Type: string

  /**
      * 替换，TYPE=REPLACE时必传
注意：此字段可能返回 null，表示取不到有效值。
      */
  Replace?: ReplaceParam

  /**
      * 截取，TYPE=SUBSTR时必传
注意：此字段可能返回 null，表示取不到有效值。
      */
  Substr?: SubstrParam

  /**
      * 时间转换，TYPE=DATE时必传
注意：此字段可能返回 null，表示取不到有效值。
      */
  Date?: DateParam

  /**
      * 正则替换，TYPE=REGEX_REPLACE时必传
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegexReplace?: RegexReplaceParam

  /**
      * 值支持一拆多，TYPE=SPLIT时必传
注意：此字段可能返回 null，表示取不到有效值。
      */
  Split?: SplitParam

  /**
      * key-value二次解析，TYPE=KV时必传
注意：此字段可能返回 null，表示取不到有效值。
      */
  KV?: KVParam

  /**
      * 处理结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result?: string

  /**
      * JsonPath替换，TYPE=JSON_PATH_REPLACE时必传
注意：此字段可能返回 null，表示取不到有效值。
      */
  JsonPathReplace?: JsonPathReplaceParam

  /**
      * Url解析
注意：此字段可能返回 null，表示取不到有效值。
      */
  UrlDecode?: UrlDecodeParam

  /**
      * 小写字符解析
注意：此字段可能返回 null，表示取不到有效值。
      */
  Lowercase?: LowercaseParam
}

/**
 * DescribeDatahubTasks返回参数结构体
 */
export interface DescribeDatahubTasksResponse {
  /**
   * 返回任务查询结果
   */
  Result: DescribeDatahubTasksRes

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 购买硬盘参数
 */
export interface InquiryDiskParam {
  /**
   * 购买硬盘类型: SSD(SSD), CLOUD_SSD(SSD云硬盘), CLOUD_PREMIUM(高性能云硬盘), CLOUD_BASIC(云盘)
   */
  DiskType?: string

  /**
   * 购买硬盘大小: 单位GB
   */
  DiskSize?: number
}

/**
 * 小写字符解析
 */
export type LowercaseParam = null

/**
 * SendMessage返回参数结构体
 */
export interface SendMessageResponse {
  /**
   * 消息ID列表
   */
  MessageId: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatahubGroupOffsets请求参数结构体
 */
export interface DescribeDatahubGroupOffsetsRequest {
  /**
   * （过滤条件）按照实例 ID 过滤
   */
  Name: string

  /**
   * Kafka 消费分组
   */
  Group: string

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
 * 询价返回参数
 */
export interface InquiryBasePrice {
  /**
      * 单位原价
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnitPrice: number

  /**
      * 折扣单位价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnitPriceDiscount: number

  /**
      * 合计原价
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalPrice: number

  /**
      * 折扣合计价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiscountPrice: number

  /**
      * 折扣(单位是%)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Discount: number

  /**
      * 商品数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsNum: number

  /**
      * 付费货币
注意：此字段可能返回 null，表示取不到有效值。
      */
  Currency: string

  /**
      * 硬盘专用返回参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskType: string

  /**
      * 购买时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeSpan: number

  /**
      * 购买时长单位("m"按月, "h"按小时)
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeUnit: string

  /**
      * 购买数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: number
}

/**
 * DescribeCkafkaZone返回参数结构体
 */
export interface DescribeCkafkaZoneResponse {
  /**
   * 查询结果复杂对象实体
   */
  Result: ZoneResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchModifyGroupOffsets请求参数结构体
 */
export interface BatchModifyGroupOffsetsRequest {
  /**
   * 消费分组名称
   */
  GroupName: string

  /**
   * 实例名称
   */
  InstanceId: string

  /**
   * partition信息
   */
  Partitions: Array<Partitions>

  /**
   * 指定topic，默认所有topic
   */
  TopicName?: Array<string>
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

  /**
      * ACL预设策略开关，1：打开； 0：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableAclRule: number

  /**
      * 预设策略列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AclRuleList: Array<AclRule>

  /**
      * topic 限流策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  QuotaConfig: InstanceQuotaConfigResp

  /**
      * 副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReplicaNum: number
}

/**
 * Ckafka配置
 */
export interface KafkaParam {
  /**
   * 是否为自建集群
   */
  SelfBuilt: boolean

  /**
   * 实例资源
   */
  Resource: string

  /**
   * Topic名称，多个以“,”分隔
   */
  Topic?: string

  /**
      * Offset类型，最开始位置earliest，最新位置latest，时间点位置timestamp
注意：此字段可能返回 null，表示取不到有效值。
      */
  OffsetType?: string

  /**
      * Offset类型为timestamp时必传，传时间戳，精确到秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime?: number

  /**
      * 实例资源名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceName?: string

  /**
      * Zone ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId?: number

  /**
      * Topic的Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicId?: string

  /**
      * Topic的分区数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PartitionNum?: number

  /**
      * 启用容错实例/开启死信队列
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableToleration?: boolean

  /**
      * Qps 限制
注意：此字段可能返回 null，表示取不到有效值。
      */
  QpsLimit?: number

  /**
      * Table到Topic的路由，「分发到多个topic」开关打开时必传
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableMappings?: Array<TableMapping>

  /**
      * 「分发到多个topic」开关，默认为false
注意：此字段可能返回 null，表示取不到有效值。
      */
  UseTableMapping?: boolean

  /**
      * 使用的Topic是否需要自动创建（目前只支持SOURCE流入任务，如果不使用分发到多个topic，需要在Topic字段填写需要自动创建的topic名）
注意：此字段可能返回 null，表示取不到有效值。
      */
  UseAutoCreateTopic?: boolean

  /**
      * 写入Topic时是否进行压缩，不开启填"none"，开启的话，填写"open"。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CompressionType?: string

  /**
      * 源topic消息1条扩增成msgMultiple条写入目标topic(该参数目前只有ckafka流入ckafka适用)
注意：此字段可能返回 null，表示取不到有效值。
      */
  MsgMultiple?: number

  /**
      * 数据同步专用参数, 正常数据处理可为空, 实例级别同步: 仅同步元数据填写"META_SYNC_INSTANCE_TYPE", 同步元数据及全部topic内消息的填写"META_AND_DATA_SYNC_INSTANCE_TYPE"; topic级别同步: 选中的源和目标topic中的消息(需要目标实例也包含该topic)填写"DATA_SYNC_TYPE"
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConnectorSyncType?: string

  /**
      * 数据同步专用参数, 当通过时,希望下游的消息写入分区与上游的一致,则填true,但下游分区小于上游时,会报错; 不需要一致则为false, 默认为false
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeepPartition?: boolean
}

/**
 * 数据处理——Value处理参数——正则替换参数
 */
export interface RegexReplaceParam {
  /**
   * 正则表达式
   */
  Regex: string

  /**
   * 替换新值
   */
  NewValue: string
}

/**
 * 建立私有连接的参数
 */
export interface PrivateLinkParam {
  /**
   * 客户实例的vip
   */
  ServiceVip: string

  /**
   * 客户实例的vpcId
   */
  UniqVpcId: string
}

/**
 * CreateRoute返回参数结构体
 */
export interface CreateRouteResponse {
  /**
   * 返回结果
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * Datahub主题
 */
export interface DatahubTopicDTO {
  /**
   * 名称
   */
  Name: string

  /**
   * Topic名称
   */
  TopicName: string

  /**
   * Topic Id
   */
  TopicId: string

  /**
   * 分区数
   */
  PartitionNum: number

  /**
   * 过期时间
   */
  RetentionMs: number

  /**
   * 备注
   */
  Note: string

  /**
   * 状态，1使用中，2删除中
   */
  Status: number
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
 * Ctsdb类型入参
 */
export interface CtsdbParam {
  /**
   * 连接管理实例资源
   */
  Resource?: string

  /**
   * Ctsdb的metric
   */
  CtsdbMetric?: string
}

/**
 * EventBus配置
 */
export interface EventBusParam {
  /**
   * 资源类型。EB_COS/EB_ES/EB_CLS
   */
  Type: string

  /**
   * 是否为自建集群
   */
  SelfBuilt: boolean

  /**
   * 实例资源
   */
  Resource: string

  /**
   * SCF云函数命名空间
   */
  Namespace?: string

  /**
   * SCF云函数函数名
   */
  FunctionName?: string

  /**
   * SCF云函数版本及别名
   */
  Qualifier?: string
}

/**
 * Datahub请求的taskid
 */
export interface DatahubTaskIdRes {
  /**
      * 任务id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string
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
 * 数据处理-解析参数
 */
export interface AnalyseParam {
  /**
   * 解析格式，JSON，DELIMITER分隔符，REGULAR正则提取，SOURCE处理上层所有结果
   */
  Format: string

  /**
      * 分隔符、正则表达式
注意：此字段可能返回 null，表示取不到有效值。
      */
  Regex?: string

  /**
      * 需再次处理的KEY——模式
注意：此字段可能返回 null，表示取不到有效值。
      */
  InputValueType?: string

  /**
      * 需再次处理的KEY——KEY表达式
注意：此字段可能返回 null，表示取不到有效值。
      */
  InputValue?: string
}

/**
 * 批量修改topic参数
 */
export interface BatchModifyTopicInfo {
  /**
   * topic名称
   */
  TopicName: string

  /**
   * 分区数
   */
  PartitionNum?: number

  /**
   * 备注
   */
  Note?: string

  /**
   * 副本数
   */
  ReplicaNum?: number

  /**
   * 消息删除策略，可以选择delete 或者compact
   */
  CleanUpPolicy?: string

  /**
   * 当producer设置request.required.acks为-1时，min.insync.replicas指定replicas的最小数目
   */
  MinInsyncReplicas?: number

  /**
   * 是否允许非ISR的副本成为Leader
   */
  UncleanLeaderElectionEnable?: boolean

  /**
   * topic维度的消息保留时间（毫秒）范围1 分钟到90 天
   */
  RetentionMs?: number

  /**
   * topic维度的消息保留大小，范围1 MB到1024 GB
   */
  RetentionBytes?: number

  /**
   * Segment分片滚动的时长（毫秒），范围1 到90 天
   */
  SegmentMs?: number

  /**
   * 批次的消息大小，范围1 KB到12 MB
   */
  MaxMessageBytes?: number
}

/**
 * DescribeRoute返回参数结构体
 */
export interface DescribeRouteResponse {
  /**
   * 返回的路由信息结果集
   */
  Result: RouteResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDatahubTopic返回参数结构体
 */
export interface ModifyDatahubTopicResponse {
  /**
   * 返回结果集
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Es修改连接源参数
 */
export interface EsModifyConnectParam {
  /**
      * Es连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * Es的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * Es连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * Es连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * Es连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * Es连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * Es连接源是否为自建集群【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
}

/**
 * ModifyConnectResource返回参数结构体
 */
export interface ModifyConnectResourceResponse {
  /**
   * 连接源的Id
   */
  Result?: ConnectResourceResourceIdResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例购买付费参数
 */
export interface InstanceChargeParam {
  /**
   * 实例付费类型: PREPAID(包年包月), POSTPAID_BY_HOUR(按量付费)
   */
  InstanceChargeType?: string

  /**
   * 购买时长: 包年包月时需要填写, 按量计费无需填写
   */
  InstanceChargePeriod?: number
}

/**
 * DescribeDatahubTopics请求参数结构体
 */
export interface DescribeDatahubTopicsRequest {
  /**
   * 查询值
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
 * CreateDatahubTask请求参数结构体
 */
export interface CreateDatahubTaskRequest {
  /**
   * 任务名称
   */
  TaskName: string

  /**
   * 任务类型，SOURCE数据接入，SINK数据流出
   */
  TaskType: string

  /**
   * 数据源
   */
  SourceResource?: DatahubResource

  /**
   * 数据目标
   */
  TargetResource?: DatahubResource

  /**
   * 数据处理规则
   */
  TransformParam?: TransformParam

  /**
   * 实例连接参数【已废弃】
   */
  PrivateLinkParam?: PrivateLinkParam

  /**
   * 选择所要绑定的SchemaId
   */
  SchemaId?: string

  /**
   * 数据处理规则
   */
  TransformsParam?: TransformsParam

  /**
   * 任务ID
   */
  TaskId?: string

  /**
   * 标签列表
   */
  Tags?: Array<Tag>
}

/**
 * 询价返回参数
 */
export interface InquiryPrice {
  /**
      * 单位原价
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnitPrice: number

  /**
      * 折扣单位价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnitPriceDiscount: number

  /**
      * 合计原价
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalPrice: number

  /**
      * 折扣合计价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiscountPrice: number

  /**
      * 折扣(单位是%)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Discount: number

  /**
      * 商品数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsNum: number

  /**
      * 付费货币
注意：此字段可能返回 null，表示取不到有效值。
      */
  Currency: string

  /**
      * 硬盘专用返回参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskType: string

  /**
      * 购买时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeSpan: number

  /**
      * 购买时长单位("m"按月, "h"按小时)
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeUnit: string

  /**
      * 购买数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: number

  /**
      * 详细类别的价格
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetailPrices: InquiryDetailPrice
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

  /**
   * Acl预设策略名称
   */
  AclRuleName?: string
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
 * Cls类型入参
 */
export interface ClsParam {
  /**
   * 生产的信息是否为json格式
   */
  DecodeJson: boolean

  /**
   * cls日志主题id
   */
  Resource: string

  /**
   * cls日志集id
   */
  LogSet?: string

  /**
   * 当DecodeJson为false时必填
   */
  ContentKey?: string

  /**
      * 指定消息中的某字段内容作为cls日志的时间。
字段内容格式需要是秒级时间戳
      */
  TimeField?: string
}

/**
 * SendMessage请求参数结构体
 */
export interface SendMessageRequest {
  /**
   * DataHub接入ID
   */
  DataHubId: string

  /**
   * 发送消息内容(单次请求最多500条)
   */
  Message: Array<BatchContent>
}

/**
 * 消息记录
 */
export interface ConsumerRecord {
  /**
   * 主题名
   */
  Topic: string

  /**
   * 分区id
   */
  Partition: number

  /**
   * 位点
   */
  Offset: number

  /**
      * 消息key
注意：此字段可能返回 null，表示取不到有效值。
      */
  Key: string

  /**
      * 消息value
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string

  /**
      * 消息时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  Timestamp: number

  /**
      * 消息headers
注意：此字段可能返回 null，表示取不到有效值。
      */
  Headers: string
}

/**
 * PostgreSQL连接源参数
 */
export interface PostgreSQLConnectParam {
  /**
      * PostgreSQL的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * PostgreSQL连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * PostgreSQL连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password: string

  /**
      * PostgreSQL连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * PostgreSQL连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * PostgreSQL连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * 当type为TDSQL_C_POSTGRESQL时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean

  /**
      * PostgreSQL连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean
}

/**
 * key-value二次解析
 */
export interface KVParam {
  /**
   * 分隔符
   */
  Delimiter: string

  /**
   * key-value二次解析分隔符
   */
  Regex: string

  /**
      * 保留源Key，默认为false不保留
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeepOriginalKey?: string
}

/**
 * BatchModifyTopicAttributes请求参数结构体
 */
export interface BatchModifyTopicAttributesRequest {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * 主题属性列表
   */
  Topic: Array<BatchModifyTopicInfo>
}

/**
 * DeleteGroup返回参数结构体
 */
export interface DeleteGroupResponse {
  /**
   * 返回结果
   */
  Result: JgwOperateResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * PostgreSQL类型入参
 */
export interface PostgreSQLParam {
  /**
   * PostgreSQL的数据库名称
   */
  Database: string

  /**
   * PostgreSQL的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"Schema名.数据表名"的格式进行填写，需要填入正则表达式时，格式为"Schema名\\.数据表名"
   */
  Table: string

  /**
   * 该PostgreSQL在连接管理内的Id
   */
  Resource: string

  /**
   * 插件名(decoderbufs/pgoutput)，默认为decoderbufs
   */
  PluginName: string

  /**
   * 复制存量信息(never增量, initial全量)，默认为initial
   */
  SnapshotMode?: string

  /**
   * 上游数据格式(JSON/Debezium), 当数据库同步模式为默认字段匹配时,必填
   */
  DataFormat?: string

  /**
   * "INSERT" 表示使用 Insert 模式插入，"UPSERT" 表示使用 Upsert 模式插入
   */
  DataTargetInsertMode?: string

  /**
   * 当 "DataInsertMode"="UPSERT" 时，传入当前 upsert 时依赖的主键
   */
  DataTargetPrimaryKeyField?: string

  /**
   * 表与消息间的映射关系
   */
  DataTargetRecordMapping?: Array<RecordMapping>

  /**
   * 是否抛弃解析失败的消息，默认为true
   */
  DropInvalidMessage?: boolean

  /**
   * 输入的table是否为正则表达式
   */
  IsTableRegular?: boolean

  /**
   * 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键
   */
  KeyColumns?: string

  /**
   * 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带
   */
  RecordWithSchema?: boolean
}

/**
 * MariaDB连接源参数
 */
export interface MariaDBConnectParam {
  /**
      * MariaDB的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * MariaDB连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * MariaDB连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password: string

  /**
      * MariaDB连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * MariaDB连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * MariaDB连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
}

/**
 * 表示ACL 规则的四元组信息
 */
export interface AclRuleInfo {
  /**
   * Acl操作方式，枚举值(所有操作: All, 读：Read，写：Write)
   */
  Operation: string

  /**
   * 权限类型，(Deny，Allow)
   */
  PermissionType: string

  /**
   * 默认为*，表示任何host都可以访问，当前ckafka不支持host为*和ip网段
   */
  Host: string

  /**
   * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户。传入格式需要带【User:】前缀。例如用户A，传入为User:A。
   */
  Principal: string
}

/**
 * RenewCkafkaInstance请求参数结构体
 */
export interface RenewCkafkaInstanceRequest {
  /**
   * 实例id
   */
  InstanceId: string

  /**
   * 续费时长, 默认为1, 单位是月
   */
  TimeSpan?: number
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
 * DescribeAclRule请求参数结构体
 */
export interface DescribeAclRuleRequest {
  /**
   * 实例Id
   */
  InstanceId: string

  /**
   * ACL规则名
   */
  RuleName?: string

  /**
   * ACL规则匹配类型
   */
  PatternType?: string

  /**
   * 是否读取简略的ACL规则
   */
  IsSimplified?: boolean
}

/**
 * MongoDB类型入参
 */
export interface MongoDBParam {
  /**
   * MongoDB的数据库名称
   */
  Database: string

  /**
   * MongoDB的集群
   */
  Collection: string

  /**
   * 是否复制存量数据，默认传参true
   */
  CopyExisting: boolean

  /**
   * 实例资源
   */
  Resource: string

  /**
   * MongoDB的连接ip
   */
  Ip?: string

  /**
   * MongoDB的连接port
   */
  Port?: number

  /**
   * MongoDB数据库用户名
   */
  UserName?: string

  /**
   * MongoDB数据库密码
   */
  Password?: string

  /**
   * 监听事件类型，为空时表示全选。取值包括insert,update,replace,delete,invalidate,drop,dropdatabase,rename，多个类型间使用,逗号分隔
   */
  ListeningEvent?: string

  /**
   * 主从优先级，默认主节点
   */
  ReadPreference?: string

  /**
   * 聚合管道
   */
  Pipeline?: string

  /**
   * 是否为自建集群
   */
  SelfBuilt?: boolean
}

/**
 * Topic配置
 */
export interface TopicParam {
  /**
   * 单独售卖Topic的Topic名称
   */
  Resource: string

  /**
      * Offset类型，最开始位置earliest，最新位置latest，时间点位置timestamp
注意：此字段可能返回 null，表示取不到有效值。
      */
  OffsetType?: string

  /**
      * Offset类型为timestamp时必传，传时间戳，精确到秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime?: number

  /**
      * Topic的TopicId【出参】
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicId?: string

  /**
      * 写入Topic时是否进行压缩，不开启填"none"，开启的话，可选择"gzip", "snappy", "lz4"中的一个进行填写。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CompressionType?: string

  /**
      * 使用的Topic是否需要自动创建（目前只支持SOURCE流入任务）
注意：此字段可能返回 null，表示取不到有效值。
      */
  UseAutoCreateTopic?: boolean

  /**
      * 源topic消息1条扩增成msgMultiple条写入目标topic(该参数目前只有ckafka流入ckafka适用)
注意：此字段可能返回 null，表示取不到有效值。
      */
  MsgMultiple?: number
}

/**
 * ModifyDatahubTopic请求参数结构体
 */
export interface ModifyDatahubTopicRequest {
  /**
   * 名称
   */
  Name: string

  /**
   * 消息保留时间，单位：ms，当前最小值为60000ms。
   */
  RetentionMs: number

  /**
   * 主题备注，是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线-。
   */
  Note?: string

  /**
   * 标签列表
   */
  Tags?: Array<Tag>
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
   * 主题消息最大值，单位为 Byte，最大值为12582912Byte（即12MB）。
   */
  MaxMessageBytes?: number

  /**
   * 消息删除策略，可以选择delete 或者compact
   */
  CleanUpPolicy?: string

  /**
   * Ip白名单列表，配额限制，enableWhileList=1时必选
   */
  IpWhiteList?: Array<string>

  /**
   * 预设ACL规则, 1:打开  0:关闭，默认不打开
   */
  EnableAclRule?: number

  /**
   * 预设ACL规则的名称
   */
  AclRuleName?: string

  /**
   * 可选, 保留文件大小. 默认为-1,单位bytes, 当前最小值为1048576B
   */
  RetentionBytes?: number

  /**
   * 标签列表
   */
  Tags?: Array<Tag>

  /**
   * 生产限流，单位 MB/s
   */
  QuotaProducerByteRate?: number

  /**
   * 消费限流，单位 MB/s
   */
  QuotaConsumerByteRate?: number

  /**
   * 调整topic副本数
   */
  ReplicaNum?: number
}

/**
 * 数据处理——二次解析参数
 */
export interface SecondaryAnalyseParam {
  /**
   * 分隔符
   */
  Regex: string
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
   * 可用区，购买多可用区实例时，填写ZoneIds.N字段中的任意一个值
   */
  ZoneId: number

  /**
   * 预付费购买时长，例如 "1m",就是一个月
   */
  Period: string

  /**
      * 实例规格说明 专业版实例[所有规格]填写1.
标准版实例 ([入门型(general)]填写1，[标准型(standard)]填写2，[进阶型(advanced)]填写3，[容量型(capacity)]填写4，[高阶型1(specialized-1)]填写5，[高阶性2(specialized-2)]填写6,[高阶型3(specialized-3)]填写7,[高阶型4(specialized-4)]填写8，[独占型(exclusive)]填写9。
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

  /**
   * CKafka版本号[0.10.2、1.1.1、2.4.1], 默认是1.1.1
   */
  KafkaVersion?: string

  /**
   * 实例类型: [标准版实例]填写 standard(默认), [专业版实例]填写 profession
   */
  SpecificationsType?: string

  /**
   * 磁盘大小,专业版不填写默认最小磁盘,填写后根据磁盘带宽分区数弹性计算
   */
  DiskSize?: number

  /**
   * 带宽,专业版不填写默认最小带宽,填写后根据磁盘带宽分区数弹性计算
   */
  BandWidth?: number

  /**
   * 分区大小,专业版不填写默认最小分区数,填写后根据磁盘带宽分区数弹性计算
   */
  Partition?: number

  /**
   * 标签
   */
  Tags?: Array<Tag>

  /**
   * 磁盘类型（ssd填写CLOUD_SSD，sata填写CLOUD_BASIC）
   */
  DiskType?: string

  /**
   * 跨可用区，zoneIds必填
   */
  MultiZoneFlag?: boolean

  /**
   * 可用区列表，购买多可用区实例时为必填项
   */
  ZoneIds?: Array<number>
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
 * 标准版销售信息
 */
export interface SaleInfo {
  /**
      * 手动设置的flag标志
注意：此字段可能返回 null，表示取不到有效值。
      */
  Flag: boolean

  /**
      * ckakfa版本号(1.1.1/2.4.2/0.10.2)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Version: string

  /**
      * 专业版、标准版标志
注意：此字段可能返回 null，表示取不到有效值。
      */
  Platform: string

  /**
      * 售罄标志：true售罄
注意：此字段可能返回 null，表示取不到有效值。
      */
  SoldOut: boolean
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
 * Scf类型入参
 */
export interface ScfParam {
  /**
   * SCF云函数函数名
   */
  FunctionName: string

  /**
   * SCF云函数命名空间, 默认为default
   */
  Namespace?: string

  /**
   * SCF云函数版本及别名, 默认为$DEFAULT
   */
  Qualifier?: string

  /**
   * 每批最大发送消息数, 默认为1000
   */
  BatchSize?: number

  /**
   * SCF调用失败后重试次数, 默认为5
   */
  MaxRetries?: number
}

/**
 * CreateDatahubTask返回参数结构体
 */
export interface CreateDatahubTaskResponse {
  /**
   * 任务id
   */
  Result: CreateDatahubTaskRes

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClickHouse连接源参数
 */
export interface ClickHouseConnectParam {
  /**
      * ClickHouse的连接port
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * ClickHouse连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * ClickHouse连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password: string

  /**
      * ClickHouse连接源的实例资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * ClickHouse连接源是否为自建集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt: boolean

  /**
      * ClickHouse连接源的实例vip，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * ClickHouse连接源的vpcId，当为腾讯云实例时，必填
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean
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
 * Datahub主题列表
 */
export interface DescribeDatahubTopicsResp {
  /**
   * 总数
   */
  TotalCount: number

  /**
      * Topic列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicList: Array<DatahubTopicDTO>
}

/**
 * DescribeTopicSyncReplica请求参数结构体
 */
export interface DescribeTopicSyncReplicaRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 主题名称
   */
  TopicName: string

  /**
   * 偏移量，不填默认为0
   */
  Offset?: number

  /**
   * 返回数量，不填则默认10，最大值20。
   */
  Limit?: number

  /**
   * 仅筛选未同步副本
   */
  OutOfSyncReplicaOnly?: boolean
}

/**
 * 查询连接源具体数据的返参
 */
export interface DescribeConnectResource {
  /**
      * 连接源的Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceId: string

  /**
      * 连接源名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceName: string

  /**
      * 连接源描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 连接源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 连接源的状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 连接源的创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 连接源的异常信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string

  /**
      * 该连接源关联的Datahub任务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatahubTaskCount: number

  /**
      * 连接源的当前所处步骤
注意：此字段可能返回 null，表示取不到有效值。
      */
  CurrentStep: string

  /**
      * 创建进度百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskProgress?: number

  /**
      * 步骤列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  StepList?: Array<string>

  /**
      * Dts配置，Type为DTS时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  DtsConnectParam: DtsConnectParam

  /**
      * MongoDB配置，Type为MONGODB时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  MongoDBConnectParam: MongoDBConnectParam

  /**
      * Es配置，Type为ES时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  EsConnectParam: EsConnectParam

  /**
      * ClickHouse配置，Type为CLICKHOUSE时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClickHouseConnectParam: ClickHouseConnectParam

  /**
      * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  MySQLConnectParam: MySQLConnectParam

  /**
      * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostgreSQLConnectParam: PostgreSQLConnectParam

  /**
      * MariaDB配置，Type为MARIADB时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  MariaDBConnectParam: MariaDBConnectParam

  /**
      * SQLServer配置，Type为SQLSERVER时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  SQLServerConnectParam: SQLServerConnectParam

  /**
      * Ctsdb配置，Type为CTSDB时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  CtsdbConnectParam: CtsdbConnectParam

  /**
      * Doris 配置，Type 为 DORIS 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  DorisConnectParam: DorisConnectParam

  /**
      * Kafka配置，Type 为 KAFKA 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  KafkaConnectParam?: KafkaConnectParam
}

/**
 * ModifyDatahubTask请求参数结构体
 */
export interface ModifyDatahubTaskRequest {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 任务名称
   */
  TaskName?: string
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
   * 实例状态 int：1表示健康，2表示告警，3 表示实例状态异常
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

  /**
      * ckafka实例类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceType: string

  /**
      * 磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskType: string

  /**
      * 当前规格最大Topic数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxTopicNumber: number

  /**
      * 当前规格最大Partition数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxPartitionNumber: number

  /**
      * 计划升级配置时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  RebalanceTime: string

  /**
      * 实例当前partition数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  PartitionNumber: number

  /**
      * 公网带宽类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicNetworkChargeType: string

  /**
      * 公网带宽值
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicNetwork: number

  /**
      * 实例类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterType: string

  /**
      * 实例功能列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Features: Array<string>
}

/**
 * 实例 / topic 维度限流策略
 */
export interface InstanceQuotaConfigResp {
  /**
      * 生产限流大小，单位 MB/s
注意：此字段可能返回 null，表示取不到有效值。
      */
  QuotaProducerByteRate: number

  /**
      * 消费限流大小，单位 MB/s
注意：此字段可能返回 null，表示取不到有效值。
      */
  QuotaConsumerByteRate: number
}

/**
 * DescribeTopicDetail返回参数结构体
 */
export interface DescribeTopicDetailResponse {
  /**
   * 返回的主题详情实体
   */
  Result: TopicDetailResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MySQL修改连接源参数
 */
export interface MySQLModifyConnectParam {
  /**
      * MySQL连接源的实例资源【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resource: string

  /**
      * MySQL的连接port【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * MySQL连接源的实例vip【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceVip?: string

  /**
      * MySQL连接源的vpcId【不支持修改】
注意：此字段可能返回 null，表示取不到有效值。
      */
  UniqVpcId?: string

  /**
      * MySQL连接源的用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * MySQL连接源的密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string

  /**
      * 是否更新到关联的Datahub任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUpdate?: boolean

  /**
      * 当type为TDSQL_C_MYSQL时
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId?: string

  /**
      * 是否是自建的集群
注意：此字段可能返回 null，表示取不到有效值。
      */
  SelfBuilt?: boolean
}

/**
 * AclRule列表接口返回结果
 */
export interface AclRuleResp {
  /**
   * 总数据条数
   */
  TotalCount: number

  /**
      * AclRule列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AclRuleList: Array<AclRule>
}

/**
 * SQLServer类型入参
 */
export interface SQLServerParam {
  /**
   * SQLServer的数据库名称
   */
  Database: string

  /**
   * SQLServer的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写
   */
  Table: string

  /**
   * 该SQLServer在连接管理内的Id
   */
  Resource: string

  /**
   * 复制存量信息(schema_only增量, initial全量)，默认为initial
   */
  SnapshotMode?: string
}

/**
 * 数据处理——Value处理参数——替换参数
 */
export interface ReplaceParam {
  /**
   * 被替换值
   */
  OldValue: string

  /**
   * 替换值
   */
  NewValue: string
}

/**
 * 消息价格实体
 */
export interface Price {
  /**
   * 折扣价
   */
  RealTotalCost?: number

  /**
   * 原价
   */
  TotalCost?: number
}

/**
 * DescribeConnectResources返回参数结构体
 */
export interface DescribeConnectResourcesResponse {
  /**
   * 连接源列表
   */
  Result?: DescribeConnectResourcesResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

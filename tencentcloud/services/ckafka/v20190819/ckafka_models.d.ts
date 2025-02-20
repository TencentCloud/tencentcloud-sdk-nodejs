/**
 * consumer信息
 */
export interface GroupInfoMember {
    /**
     * coordinator 为消费分组中的消费者生成的唯一 ID
     */
    MemberId?: string;
    /**
     * 客户消费者 SDK 自己设置的 client.id 信息
     */
    ClientId?: string;
    /**
     * 一般存储客户的 IP 地址
     */
    ClientHost?: string;
    /**
     * 存储着分配给该消费者的 partition 信息
     */
    Assignment?: Assignment;
}
/**
 * 分区和位移
 */
export interface PartitionOffset {
    /**
     * 分区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Partition?: string;
    /**
     * 位点偏移量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Offset?: number;
}
/**
 * DescribeACL请求参数结构体
 */
export interface DescribeACLRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER)
     */
    ResourceType: number;
    /**
     * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。
     */
    ResourceName: string;
    /**
     * 偏移位置
     */
    Offset?: number;
    /**
     * 个数限制
     */
    Limit?: number;
    /**
     * 关键字匹配
     */
    SearchWord?: string;
}
/**
 * DescribeTopicSyncReplica返回参数结构体
 */
export interface DescribeTopicSyncReplicaResponse {
    /**
     * 返回topic 副本详情
     */
    Result?: TopicInSyncReplicaResult;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDatahubGroupOffsets返回参数结构体
 */
export interface DescribeDatahubGroupOffsetsResponse {
    /**
     * 返回的结果对象
     */
    Result?: GroupOffsetResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询连接源具体数据的返参
 */
export interface DescribeConnectResourceResp {
    /**
     * 连接源的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 连接源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 连接源描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 连接源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 连接源的状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 连接源的创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 连接源的异常信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 连接源的当前所处步骤
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentStep?: string;
    /**
     * 步骤列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StepList?: Array<string>;
    /**
     * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MySQLConnectParam?: MySQLConnectParam;
    /**
     * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PostgreSQLConnectParam?: PostgreSQLConnectParam;
    /**
     * Dts配置，Type为DTS时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DtsConnectParam?: DtsConnectParam;
    /**
     * MongoDB配置，Type为MONGODB时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MongoDBConnectParam?: MongoDBConnectParam;
    /**
     * Es配置，Type为ES时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EsConnectParam?: EsConnectParam;
    /**
     * ClickHouse配置，Type为CLICKHOUSE时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClickHouseConnectParam?: ClickHouseConnectParam;
    /**
     * MariaDB配置，Type为MARIADB时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MariaDBConnectParam?: MariaDBConnectParam;
    /**
     * SQLServer配置，Type为SQLSERVER时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SQLServerConnectParam?: SQLServerConnectParam;
    /**
     * Ctsdb配置，Type为CTSDB时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CtsdbConnectParam?: CtsdbConnectParam;
    /**
     * Doris 配置，Type 为 DORIS 时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DorisConnectParam?: DorisConnectParam;
    /**
     * Kafka配置，Type 为 KAFKA 时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaConnectParam?: KafkaConnectParam;
    /**
     * MQTT配置，Type 为 MQTT 时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MqttConnectParam?: MqttConnectParam;
}
/**
 * AuthorizeToken返回参数结构体
 */
export interface AuthorizeTokenResponse {
    /**
     * 0 成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Es类型入参
 */
export interface EsParam {
    /**
     * Es实例资源Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * Es的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * Es用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * Es密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * 是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
    /**
     * 实例vip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * 实例的vpcId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * Es是否抛弃解析失败的消息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropInvalidMessage?: boolean;
    /**
     * Es自定义index名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Index?: string;
    /**
     * Es自定义日期后缀
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DateFormat?: string;
    /**
     * 非json格式数据的自定义key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContentKey?: string;
    /**
     * Es是否抛弃非json格式的消息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropInvalidJsonMessage?: boolean;
    /**
     * 转储到Es中的文档ID取值字段名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DocumentIdField?: string;
    /**
     * Es自定义index名称的类型，STRING，JSONPATH，默认为STRING
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IndexType?: string;
    /**
     * 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropCls?: DropCls;
    /**
     * 转储到ES的消息为Database的binlog时，如果需要同步数据库操作，即增删改的操作到ES时填写数据库表主键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabasePrimaryKey?: string;
    /**
     * 死信队列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropDlq?: FailureParam;
    /**
     * 使用数据订阅格式导入 es 时，消息与 es 索引字段映射关系。不填默认为默认字段匹配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordMappingList?: Array<EsRecordMapping>;
    /**
     * 消息要映射为 es 索引中 @timestamp 的字段，如果当前配置为空，则使用消息的时间戳进行映射
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DateField?: string;
    /**
     * 用来区分当前索引映射，属于新建索引还是存量索引。"EXIST_MAPPING"：从存量索引中选择；"NEW_MAPPING"：新建索引
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordMappingMode?: string;
}
/**
 * DescribeAclRule返回参数结构体
 */
export interface DescribeAclRuleResponse {
    /**
     * 返回的AclRule结果集对象
     */
    Result?: AclRuleResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Dts类型入参
 */
export interface DtsParam {
    /**
     * Dts实例Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * Dts的连接ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ip?: string;
    /**
     * Dts的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * Dts订阅的topic
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Topic?: string;
    /**
     * Dts消费分组的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * Dts消费分组的账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupUser?: string;
    /**
     * Dts消费分组的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupPassword?: string;
    /**
     * false同步原始数据，true同步解析后的json格式数据,默认true
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TranSql?: boolean;
}
/**
 * CancelAuthorizationToken请求参数结构体
 */
export interface CancelAuthorizationTokenRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 用户
     */
    User: string;
    /**
     * token串
     */
    Tokens: string;
}
/**
 * MongoDB类型入参
 */
export interface MongoDBParam {
    /**
     * MongoDB的数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Database: string;
    /**
     * MongoDB的集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Collection: string;
    /**
     * 是否复制存量数据，默认传参true
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CopyExisting: boolean;
    /**
     * 实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * MongoDB的连接ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ip?: string;
    /**
     * MongoDB的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * MongoDB数据库用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * MongoDB数据库密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * 监听事件类型，为空时表示全选。取值包括insert,update,replace,delete,invalidate,drop,dropdatabase,rename，多个类型间使用,逗号分隔
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ListeningEvent?: string;
    /**
     * 主从优先级，默认主节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReadPreference?: string;
    /**
     * 聚合管道
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Pipeline?: string;
    /**
     * 是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
}
/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
    /**
     * ckafka 实例Id
     */
    InstanceId: string;
    /**
     * ckafka 主题名称
     */
    TopicName: string;
}
/**
 * FetchMessageListByOffset请求参数结构体
 */
export interface FetchMessageListByOffsetRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名
     */
    Topic: string;
    /**
     * 分区id
     */
    Partition: number;
    /**
     * 位点信息
     */
    Offset: number;
    /**
     * 最大查询条数，默认20，最大20
     */
    SinglePartitionRecordNumber?: number;
}
/**
 * 地域实体对象
 */
export interface Region {
    /**
     * 地域ID
     */
    RegionId?: number;
    /**
     * 地域名称
     */
    RegionName?: string;
    /**
     * 区域名称
     */
    AreaName?: string;
    /**
     * 地域代码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionCode?: string;
    /**
     * 地域代码（V3版本）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionCodeV3?: string;
    /**
     * NONE:默认值不支持任何特殊类型 实例类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Support?: string;
    /**
     * 是否支持ipv6, 0：表示不支持，1：表示支持
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ipv6?: number;
    /**
     * 是否支持跨可用区, 0：表示不支持，1：表示支持
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MultiZone?: number;
}
/**
 * CreateAclRule请求参数结构体
 */
export interface CreateAclRuleRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * Acl资源类型,目前只支持Topic,枚举值列表：Topic
     */
    ResourceType: string;
    /**
     * ACL规则匹配类型，目前支持前缀匹配与预设策略，枚举值列表：PREFIXED/PRESET
     */
    PatternType: string;
    /**
     * 规则名称
     */
    RuleName: string;
    /**
     * 设置的ACL规则列表
     */
    RuleList: Array<AclRuleInfo>;
    /**
     * 表示前缀匹配的前缀的值
     */
    Pattern?: string;
    /**
     * 预设ACL规则是否应用到新增的topic中
     */
    IsApplied?: number;
    /**
     * ACL规则的备注
     */
    Comment?: string;
}
/**
 * DescribeInstancesDetail返回参数结构体
 */
export interface DescribeInstancesDetailResponse {
    /**
     * 返回的实例详情结果对象
     */
    Result?: InstanceDetailResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
    /**
     * 流程Id
     */
    FlowId: number;
}
/**
 * DescribeAclRule请求参数结构体
 */
export interface DescribeAclRuleRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * ACL规则名
     */
    RuleName?: string;
    /**
     * ACL规则匹配类型
     */
    PatternType?: string;
    /**
     * 是否读取简略的ACL规则
     */
    IsSimplified?: boolean;
}
/**
 * 操作型结果返回值
 */
export interface JgwOperateResponse {
    /**
     * 返回的code，0为正常，非0为错误
     */
    ReturnCode?: string;
    /**
     * 成功消息
     */
    ReturnMessage?: string;
    /**
     * 操作型返回的Data数据,可能有flowId等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: OperateResponseData;
}
/**
 * 创建MQTT 为Source的Data Hub Task参数
 */
export interface MqttParam {
    /**
     * 需要同步的MQTT Topic列表, CSV格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Topics: string;
    /**
     * MQTT clean-session
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CleanSession: boolean;
    /**
     * MQTT instance-id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource?: string;
    /**
     * MQTT实例VIP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ip?: string;
    /**
     * MQTT VIP 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * MQTT实例用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * MQTT实例内账户密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * QoS
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Qos?: number;
    /**
     * tasks.max 订阅Topic的并发Task个数, 默认为1; 当设置大于1时, 使用Shared Subscription
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxTasks?: number;
    /**
     * MQTT 实例的Service VIP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * MQTT实例的VPC ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 是否为自建集群, MQTT只支持非自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
}
/**
 * broker维度topic 流量排行指标
 */
export interface BrokerTopicFlowData {
    /**
     * 主题名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName?: string;
    /**
     * 主题Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId?: string;
    /**
     * Topic 流量(MB)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicTraffic?: string;
}
/**
 * 实例详情中的标签对象
 */
export interface Tag {
    /**
     * 标签的key
     */
    TagKey: string;
    /**
     * 标签的值
     */
    TagValue: string;
}
/**
 * ModifyAclRule返回参数结构体
 */
export interface ModifyAclRuleResponse {
    /**
     * 规则的唯一表示Key
     */
    Result?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * record 与数据库表的映射关系
 */
export interface RecordMapping {
    /**
     * 消息的 key 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JsonKey?: string;
    /**
     * 消息类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 消息是否允许为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowNull?: boolean;
    /**
     * 对应映射列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnName?: string;
    /**
     * 数据库表额外字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo?: string;
    /**
     * 当前列大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnSize?: string;
    /**
     * 当前列精度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DecimalDigits?: string;
    /**
     * 是否为自增列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoIncrement?: boolean;
    /**
     * 数据库表默认参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultValue?: string;
}
/**
 * MongoDB修改连接源参数
 */
export interface MongoDBModifyConnectParam {
    /**
     * MongoDB连接源的实例资源【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * MongoDB的连接port【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * MongoDB连接源的实例vip【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * MongoDB连接源的vpcId【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * MongoDB连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * MongoDB连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * MongoDB连接源是否为自建集群【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * FetchMessageListByOffset返回参数结构体
 */
export interface FetchMessageListByOffsetResponse {
    /**
     * 返回结果。注意，列表中不返回具体的消息内容（key、value），如果需要查询具体消息内容，请使用FetchMessageByOffset接口
     */
    Result?: Array<ConsumerRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRouteTriggerTime请求参数结构体
 */
export interface DeleteRouteTriggerTimeRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 修改删除路由的定时时间
     */
    DelayTime: string;
}
/**
 * CreatePostPaidInstance请求参数结构体
 */
export interface CreatePostPaidInstanceRequest {
    /**
     * ckafka集群实例名称，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
     */
    InstanceName?: string;
    /**
     * 私有网络Id  创建的实例默认接入点所在的 vpc 对应 vpcId。目前不支持创建基础网络实例，因此该参数必填
     */
    VpcId?: string;
    /**
     * 子网id。创建实例默认接入点所在的子网对应的子网 id
     */
    SubnetId?: string;
    /**
     * 国际站标准版实例规格。目前只有国际站标准版使用当前字段区分规格，国内站标准版使用峰值带宽区分规格。除了国际站标准版外的所有实例填写 1 即可。国际站标准版实例：入门型(general)]填写1；[标准型(standard)]填写2；[进阶型(advanced)]填写3；[容量型(capacity)]填写4；[高阶型1(specialized-1)]填写5；[高阶型2(specialized-2)]填写6；[高阶型3(specialized-3)]填写7；[高阶型4(specialized-4)]填写8。
     */
    InstanceType?: number;
    /**
     * 实例日志的默认最长保留时间，单位分钟。不传入该参数时默认为 1440 分钟（1天），最大30天。当 topic 显式设置消息保留时间时，以 topic 保留时间为准
     */
    MsgRetentionTime?: number;
    /**
     * 创建实例时可以选择集群Id, 该入参表示集群Id。不指定实例所在集群则不传入该参数
     */
    ClusterId?: number;
    /**
     * 实例版本。目前支持 "0.10.2","1.1.1","2.4.1","2.4.2","2.8.1"。"2.4.1" 与 "2.4.2" 属于同一个版本，传任意一个均可。
     */
    KafkaVersion?: string;
    /**
     * 实例类型。"standard"：标准版，"profession"：专业版。  (标准版仅国际站支持，国内站目前支持专业版)
     */
    SpecificationsType?: string;
    /**
     * 专业版实例磁盘类型，标准版实例不需要填写。"CLOUD_SSD"：SSD云硬盘；"CLOUD_BASIC"：高性能云硬盘。不传默认值为 "CLOUD_BASIC"
     */
    DiskType?: string;
    /**
     * 实例内网峰值带宽。单位 MB/s。标准版需传入当前实例规格所对应的峰值带宽。注意如果创建的实例为专业版实例，峰值带宽，分区数等参数配置需要满足专业版的计费规格。
     */
    BandWidth?: number;
    /**
     * 实例硬盘大小，需要满足当前实例的计费规格
     */
    DiskSize?: number;
    /**
     * 实例最大分区数量，需要满足当前实例的计费规格
     */
    Partition?: number;
    /**
     * 实例最大 topic 数量，需要满足当前实例的计费规格
     */
    TopicNum?: number;
    /**
     * 实例所在的可用区。当创建多可用区实例时，该参数为创建的默认接入点所在子网的可用区 id
     */
    ZoneId?: number;
    /**
     * 当前实例是否为多可用区实例。
     */
    MultiZoneFlag?: boolean;
    /**
     * 当实例为多可用区实例时，多可用区 id 列表。注意参数 ZoneId 对应的多可用区需要包含在该参数数组中
     */
    ZoneIds?: Array<number | bigint>;
    /**
     * 购买实例数量。非必填，默认值为 1。当传入该参数时，会创建多个 instanceName 加后缀区分的实例
     */
    InstanceNum?: number;
    /**
     * 公网带宽大小，单位 Mbps。默认是没有加上免费 3Mbps 带宽。例如总共需要 3Mbps 公网带宽，此处传 0；总共需要 6Mbps 公网带宽，此处传 3。需要保证传入参数为 3 的整数倍
     */
    PublicNetworkMonthly?: number;
    /**
     * 标签
     */
    Tags?: Array<Tag>;
    /**
     * 弹性带宽开关 0不开启  1开启（0默认)
     */
    ElasticBandwidthSwitch?: number;
}
/**
 * 修改实例属性的配置对象
 */
export interface ModifyInstanceAttributesConfig {
    /**
     * 自动创建 true 表示开启，false 表示不开启
     */
    AutoCreateTopicEnable?: boolean;
    /**
     * 可选，如果auto.create.topic.enable设置为true没有设置该值时，默认设置为3
     */
    DefaultNumPartitions?: number;
    /**
     * 如果auto.create.topic.enable设置为true没有指定该值时默认设置为2
     */
    DefaultReplicationFactor?: number;
}
/**
 * AuthorizeToken请求参数结构体
 */
export interface AuthorizeTokenRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 用户
     */
    User: string;
    /**
     * token串
     */
    Tokens: string;
}
/**
 * RenewCkafkaInstance返回参数结构体
 */
export interface RenewCkafkaInstanceResponse {
    /**
     * 返回值
     */
    Result?: RenewCkafkaInstanceResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePartition返回参数结构体
 */
export interface CreatePartitionResponse {
    /**
     * 返回的结果集
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MySQL类型入参
 */
export interface MySQLParam {
    /**
     * MySQL的数据库名称，"*"为全数据库
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Database: string;
    /**
     * MySQL的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写，需要填入正则表达式时，格式为"数据库名\\.数据表名"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Table: string;
    /**
     * 该MySQL在连接管理内的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * 复制存量信息(schema_only不复制, initial全量)，默认值initial
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotMode?: string;
    /**
     * 存放MySQL的Ddl信息的Topic，为空则默认不存放
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DdlTopic?: string;
    /**
     * "TABLE" 表示读取项为 table，"QUERY" 表示读取项为 query
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSourceMonitorMode?: string;
    /**
     * 当 "DataMonitorMode"="TABLE" 时，传入需要读取的 Table；当 "DataMonitorMode"="QUERY" 时，传入需要读取的查询 sql 语句
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSourceMonitorResource?: string;
    /**
     * "TIMESTAMP" 表示增量列为时间戳类型，"INCREMENT" 表示增量列为自增 id 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSourceIncrementMode?: string;
    /**
     * 传入需要监听的列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSourceIncrementColumn?: string;
    /**
     * "HEAD" 表示复制存量 + 增量数据，"TAIL" 表示只复制增量数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSourceStartFrom?: string;
    /**
     * "INSERT" 表示使用 Insert 模式插入，"UPSERT" 表示使用 Upsert 模式插入
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataTargetInsertMode?: string;
    /**
     * 当 "DataInsertMode"="UPSERT" 时，传入当前 upsert 时依赖的主键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataTargetPrimaryKeyField?: string;
    /**
     * 表与消息间的映射关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataTargetRecordMapping?: Array<RecordMapping>;
    /**
     * 事件路由到特定主题的正则表达式，默认为(.*)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicRegex?: string;
    /**
     * TopicRegex的引用组，指定$1、$2等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicReplacement?: string;
    /**
     * 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyColumns?: string;
    /**
     * Mysql 是否抛弃解析失败的消息，默认为true
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropInvalidMessage?: boolean;
    /**
     * 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropCls?: DropCls;
    /**
     * 输出格式，DEFAULT、CANAL_1、CANAL_2
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutputFormat?: string;
    /**
     * 当Table输入的是前缀时，该项值为true，否则为false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsTablePrefix?: boolean;
    /**
     * 如果该值为all，则DDL数据以及DML数据也会写入到选中的topic；若该值为dml，则只有DML数据写入到选中的topic
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncludeContentChanges?: string;
    /**
     * 如果该值为true，且MySQL中"binlog_rows_query_log_events"配置项的值为"ON"，则流入到topic的数据包含原SQL语句；若该值为false，流入到topic的数据不包含原SQL语句
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncludeQuery?: boolean;
    /**
     * 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordWithSchema?: boolean;
    /**
     * 存放信令表的数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SignalDatabase?: string;
    /**
     * 输入的table是否为正则表达式，如果该选项以及IsTablePrefix同时为true，该选项的判断优先级高于IsTablePrefix
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsTableRegular?: boolean;
    /**
     * 信号表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SignalTable?: string;
    /**
     * datetime 类型字段转换为时间戳的时区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DateTimeZone?: string;
    /**
     * 自建
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
}
/**
 * partition信息
 */
export interface Partitions {
    /**
     * 分区
     */
    Partition: number;
    /**
     * partition 消费位移
     */
    Offset: number;
}
/**
 * DescribeTopic返回参数结构体
 */
export interface DescribeTopicResponse {
    /**
     * 返回的结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TopicResult;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消费组返回结果实体
 */
export interface ConsumerGroupResponse {
    /**
     * 符合条件的消费组数量
     */
    TotalCount?: number;
    /**
     * 主题列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicList?: Array<ConsumerGroupTopic>;
    /**
     * 消费分组List
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupList?: Array<ConsumerGroup>;
    /**
     * 所有分区数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalPartition?: number;
    /**
     * 监控的分区列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionListForMonitor?: Array<Partition>;
    /**
     * 主题总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalTopic?: number;
    /**
     * 监控的主题列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicListForMonitor?: Array<ConsumerGroupTopic>;
    /**
     * 监控的组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupListForMonitor?: Array<Group>;
}
/**
 * CreateTopicIpWhiteList返回参数结构体
 */
export interface CreateTopicIpWhiteListResponse {
    /**
     * 删除主题IP白名单结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据处理规则失败处理
 */
export interface FailureParam {
    /**
     * 类型，DLQ死信队列，IGNORE_ERROR保留，DROP废弃
     */
    Type: string;
    /**
     * Ckafka类型死信队列
     */
    KafkaParam?: KafkaParam;
    /**
     * 重试间隔
     */
    RetryInterval?: number;
    /**
     * 重试次数
     */
    MaxRetryAttempts?: number;
    /**
     * DIP Topic类型死信队列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicParam?: TopicParam;
    /**
     * 死信队列类型，CKAFKA，TOPIC
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DlqType?: string;
}
/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 主题名称，是一个不超过 128 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
     */
    TopicName: string;
    /**
     * Partition个数，大于0
     */
    PartitionNum: number;
    /**
     * 副本个数，不能多于 broker 数，最大为3
     */
    ReplicaNum: number;
    /**
     * ip白名单开关, 1:打开  0:关闭，默认不打开
     */
    EnableWhiteList?: number;
    /**
     * Ip白名单列表，配额限制，enableWhileList=1时必选
     */
    IpWhiteList?: Array<string>;
    /**
     * 清理日志策略，日志清理模式，默认为"delete"。"delete"：日志按保存时间删除，"compact"：日志按 key 压缩，"compact, delete"：日志按 key 压缩且会按保存时间删除。
     */
    CleanUpPolicy?: string;
    /**
     * 主题备注，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
     */
    Note?: string;
    /**
     * 默认为1
     */
    MinInsyncReplicas?: number;
    /**
     * 是否允许未同步的副本选为leader，false:不允许，true:允许，默认不允许
     */
    UncleanLeaderElectionEnable?: number;
    /**
     * 可选参数。消息保留时间，单位ms，当前最小值为60000ms
     */
    RetentionMs?: number;
    /**
     * Segment分片滚动的时长，单位ms，当前最小为3600000ms
     */
    SegmentMs?: number;
    /**
     * 主题消息最大值，单位为 Byte，最小值1024Byte(即1KB)，最大值为12582912Byte（即12MB）
     */
    MaxMessageBytes?: number;
    /**
     * 预设ACL规则, 1:打开  0:关闭，默认不打开
     */
    EnableAclRule?: number;
    /**
     * 预设ACL规则的名称
     */
    AclRuleName?: string;
    /**
     * 可选, 保留文件大小. 默认为-1,单位bytes, 当前最小值为1048576B
     */
    RetentionBytes?: number;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
}
/**
 * DeleteAcl返回参数结构体
 */
export interface DeleteAclResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 动态消息保留时间配置
 */
export interface DynamicRetentionTime {
    /**
     * 动态消息保留时间配置开关（0: 关闭，1: 开启）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enable?: number;
    /**
     * 磁盘配额百分比触发条件，即消息达到此值触发消息保留时间变更事件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskQuotaPercentage?: number;
    /**
     * 每次向前调整消息保留时间百分比
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StepForwardPercentage?: number;
    /**
     * 保底时长，单位分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BottomRetention?: number;
}
/**
 * 实例详情返回结果
 */
export interface InstanceDetailResponse {
    /**
     * 符合条件的实例总数
     */
    TotalCount?: number;
    /**
     * 符合条件的实例详情列表
     */
    InstanceList?: Array<InstanceDetail>;
}
/**
 * ModifyInstancePre请求参数结构体
 */
export interface ModifyInstancePreRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 预计磁盘，根据磁盘步长，规格向上调整。
     */
    DiskSize?: number;
    /**
     * 预计带宽，根据带宽步长，规格向上调整。
     */
    BandWidth?: number;
    /**
     * 预计分区，根据带宽步长，规格向上调整。
     */
    Partition?: number;
}
/**
 * 公网带宽参数
 */
export interface InquiryPublicNetworkParam {
    /**
     * 公网计费模式: BANDWIDTH_PREPAID(包年包月), BANDWIDTH_POSTPAID_BY_HOUR(带宽按小时计费)
     */
    PublicNetworkChargeType?: string;
    /**
     * 公网带宽, 单位MB
     */
    PublicNetworkMonthly?: number;
}
/**
 * DeleteConnectResource返回参数结构体
 */
export interface DeleteConnectResourceResponse {
    /**
     * 连接源的Id
     */
    Result?: ConnectResourceResourceIdResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 批量发送消息内容
 */
export interface BatchContent {
    /**
     * 发送的消息体
     */
    Body: string;
    /**
     * 发送消息的键名
     */
    Key?: string;
}
/**
 * Scf类型入参
 */
export interface ScfParam {
    /**
     * SCF云函数函数名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FunctionName: string;
    /**
     * SCF云函数命名空间, 默认为default
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Namespace?: string;
    /**
     * SCF云函数版本及别名, 默认为$DEFAULT
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Qualifier?: string;
    /**
     * 每批最大发送消息数, 默认为1000
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BatchSize?: number;
    /**
     * SCF调用失败后重试次数, 默认为5
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxRetries?: number;
}
/**
 * DescribeTopic请求参数结构体
 */
export interface DescribeTopicRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 过滤条件，按照 topicName 过滤，支持模糊查询
     */
    SearchWord?: string;
    /**
     * 偏移量，不填默认为0
     */
    Offset?: number;
    /**
     * 返回数量，不填则默认为20，最大值为50
     */
    Limit?: number;
    /**
     * Acl预设策略名称
     */
    AclRuleName?: string;
}
/**
 * PostgreSQL修改连接源参数
 */
export interface PostgreSQLModifyConnectParam {
    /**
     * PostgreSQL连接源的实例资源【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * PostgreSQL的连接port【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * PostgreSQL连接源的实例vip【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * PostgreSQL连接源的vpcId【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * PostgreSQL连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * PostgreSQL连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * 当type为TDSQL_C_POSTGRESQL时，该参数才有值【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
    /**
     * 是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
}
/**
 * ModifyAclRule请求参数结构体
 */
export interface ModifyAclRuleRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * ACL规则名
     */
    RuleName: string;
    /**
     * 修改预设规则时传入,是否应用到新增的Topic
     */
    IsApplied?: number;
}
/**
 * 组实体
 */
export interface Group {
    /**
     * 消费分组名称
     */
    GroupName?: string;
}
/**
 * Prometheus 监控返回
 */
export interface PrometheusResult {
    /**
     * 返回的code，0为正常，非0为错误
     */
    ReturnCode?: string;
    /**
     * 成功消息
     */
    ReturnMessage?: string;
    /**
     * 操作型返回的Data数据,可能有flowId等
     */
    Data?: OperateResponseData;
}
/**
 * ModifyRoutineMaintenanceTask请求参数结构体
 */
export interface ModifyRoutineMaintenanceTaskRequest {
    /**
     * 实例id
     */
    InstanceId: string;
    /**
     * 自动化运维类别
     */
    MaintenanceType: string;
    /**
     * INSTANCE_STORAGE_CAPACITY(磁盘自动扩容)/MESSAGE_RETENTION_PERIOD(磁盘动态消息保留策略)
     */
    MaintenanceSubtype: string;
    /**
     * 主题名
     */
    TopicName?: string;
    /**
     * 任务触发阈值
     */
    ConfigureThreshold?: number;
    /**
     * 任务调整步长
     */
    ConfigureStepSize?: number;
    /**
     * 任务调整上限
     */
    ConfigureLimit?: number;
    /**
     * 任务预期触发时间，存储从当日 0AM 开始偏移的秒数
     */
    PlannedTime?: number;
    /**
     * 任务额外信息
     */
    ExtraConfig?: string;
    /**
     * 任务状态
     */
    Status?: number;
    /**
     * 执行week day
     */
    Week?: string;
}
/**
 * 实例对象
 */
export interface Instance {
    /**
     * ckafka集群实例Id
     */
    InstanceId?: string;
    /**
     * ckafka集群实例Name
     */
    InstanceName?: string;
    /**
     * 实例的状态。0: 创建中，1: 运行中，2: 删除中,  3: 已删除,  5: 隔离中,  7: 升级中,  -1: 创建失败
     */
    Status?: number;
    /**
     * 是否开源实例。开源：true，不开源：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IfCommunity?: boolean;
}
/**
 * DescribeInstanceAttributes返回参数结构体
 */
export interface DescribeInstanceAttributesResponse {
    /**
     * 实例属性返回结果对象。
     */
    Result?: InstanceAttributesResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 主题详情返回实体
 */
export interface TopicDetailResponse {
    /**
     * 返回的主题详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicList?: Array<TopicDetail>;
    /**
     * 符合条件的所有主题详情数量
     */
    TotalCount?: number;
}
/**
 * MariaDB连接源参数
 */
export interface MariaDBModifyConnectParam {
    /**
     * MariaDB连接源的实例资源【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * MariaDB的连接port【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * MariaDB连接源的实例vip【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * MariaDB连接源的vpcId【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * MariaDB连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * MariaDB连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * DescribeRegion返回参数结构体
 */
export interface DescribeRegionResponse {
    /**
     * 返回地域枚举结果列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: Array<Region>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
    /**
     * 返回创建结果
     */
    Result?: CreateTopicResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Kafka连接源参数
 */
export interface KafkaConnectParam {
    /**
     * Kafka连接源的实例资源, 非自建时必填，NetworkType=VPC时传clb实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource?: string;
    /**
     * 是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
    /**
     * 是否更新到关联的Dip任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
    /**
     * Kafka连接的broker地址, NetworkType=PUBLIC公网时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerAddress?: string;
    /**
     * CKafka连接源的实例资源地域, 跨地域时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
}
/**
 * Datahub任务信息
 */
export interface DatahubTaskInfo {
    /**
     * 任务Id
     */
    TaskId?: string;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 任务类型，SOURCE数据接入，SINK数据流出
     */
    TaskType?: string;
    /**
     * 状态，-1创建失败，0创建中，1运行中，2删除中，3已删除，4删除失败，5暂停中，6已暂停，7暂停失败，8恢复中，9恢复失败
     */
    Status?: number;
    /**
     * 数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceResource?: DatahubResource;
    /**
     * 数据目标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetResource?: DatahubResource;
    /**
     * 任务创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 异常信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 创建进度百分比
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskProgress?: number;
    /**
     * 任务当前处于的步骤
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskCurrentStep?: string;
    /**
     * Datahub转储Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatahubId?: string;
    /**
     * 步骤列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StepList?: Array<string>;
}
/**
 * DescribeConsumerGroup返回参数结构体
 */
export interface DescribeConsumerGroupResponse {
    /**
     * 返回的消费分组信息
     */
    Result?: ConsumerGroupResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 创建后付费接口返回的 Data 数据结构
 */
export interface CreateInstancePostData {
    /**
     * CreateInstancePre返回固定为0，不能作为CheckTaskStatus的查询条件。只是为了保证和后台数据结构对齐。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowId?: number;
    /**
     * 订单号列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DealNames?: Array<string>;
    /**
     * ckafka集群实例Id，当购买多个实例时，默认返回购买的第一个实例 id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 订单和购买实例对应映射列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DealNameInstanceIdMapping?: Array<DealInstanceDTO>;
}
/**
 * DeleteDatahubTask返回参数结构体
 */
export interface DeleteDatahubTaskResponse {
    /**
     * 操作结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: DatahubTaskIdRes;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例属性返回结果对象
 */
export interface InstanceAttributesResponse {
    /**
     * ckafka集群实例Id
     */
    InstanceId?: string;
    /**
     * ckafka集群实例Name
     */
    InstanceName?: string;
    /**
     * 接入点 VIP 列表信息
     */
    VipList?: Array<VipEntity>;
    /**
     * 虚拟IP
     */
    Vip?: string;
    /**
     * 虚拟端口
     */
    Vport?: string;
    /**
     * 实例的状态。0: 创建中，1: 运行中，2: 删除中,  3: 已删除,  5: 隔离中,  7: 升级中,  -1: 创建失败
     */
    Status?: number;
    /**
     * 实例带宽，单位：Mbps
     */
    Bandwidth?: number;
    /**
     * 实例的存储大小，单位：GB
     */
    DiskSize?: number;
    /**
     * 可用区
     */
    ZoneId?: number;
    /**
     * VPC 的 ID，为空表示是基础网络
     */
    VpcId?: string;
    /**
     * 子网 ID， 为空表示基础网络
     */
    SubnetId?: string;
    /**
     * 实例健康状态， 1：健康，2：告警，3：异常
     */
    Healthy?: number;
    /**
     * 实例健康信息，当前会展示磁盘利用率，最大长度为256
     */
    HealthyMessage?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 消息保存时间,单位为分钟
     */
    MsgRetentionTime?: number;
    /**
     * 自动创建 Topic 配置， 若该字段为空，则表示未开启自动创建
     */
    Config?: InstanceConfigDO;
    /**
     * 剩余创建分区数
     */
    RemainderPartitions?: number;
    /**
     * 剩余创建主题数
     */
    RemainderTopics?: number;
    /**
     * 当前创建分区数
     */
    CreatedPartitions?: number;
    /**
     * 当前创建主题数
     */
    CreatedTopics?: number;
    /**
     * 标签数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: number;
    /**
     * 可用区列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneIds?: Array<number | bigint>;
    /**
     * ckafka集群实例版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: string;
    /**
     * 最大分组数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxGroupNum?: number;
    /**
     * 售卖类型,0:标准版,1:专业版
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cvm?: number;
    /**
     * 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 表示该实例支持的特性。FEATURE_SUBNET_ACL:表示acl策略支持设置子网。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Features?: Array<string>;
    /**
     * 动态消息保留策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetentionTimeConfig?: DynamicRetentionTime;
    /**
     * 最大连接数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxConnection?: number;
    /**
     * 公网带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicNetwork?: number;
    /**
     * 时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteRouteTimestamp?: string;
    /**
     * 剩余创建分区数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemainingPartitions?: number;
    /**
     * 剩余创建主题数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemainingTopics?: number;
    /**
     * 动态硬盘扩容策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DynamicDiskConfig?: DynamicDiskConfig;
    /**
     * 实例计费类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceChargeType?: string;
    /**
     * 集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
    /**
     * 免费分区数量
     */
    FreePartitionNumber?: number;
    /**
     * 弹性带宽上浮值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ElasticFloatBandwidth?: number;
    /**
     * ssl自定义证书id
     */
    CustomCertId?: string;
    /**
     * 集群topic默认 unclean.leader.election.enable配置: 1 开启 0 关闭
     */
    UncleanLeaderElectionEnable?: number;
}
/**
 * DescribeDatahubTopics返回参数结构体
 */
export interface DescribeDatahubTopicsResponse {
    /**
     * 主题列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: DescribeDatahubTopicsResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Topic配置
 */
export interface TopicParam {
    /**
     * 单独售卖Topic的Topic名称
     */
    Resource: string;
    /**
     * Offset类型，最开始位置earliest，最新位置latest，时间点位置timestamp
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffsetType?: string;
    /**
     * Offset类型为timestamp时必传，传时间戳，精确到秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: number;
    /**
     * Topic的TopicId【出参】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId?: string;
    /**
     * 写入Topic时是否进行压缩，不开启填"none"，开启的话，可选择"gzip", "snappy", "lz4"中的一个进行填写。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompressionType?: string;
    /**
     * 使用的Topic是否需要自动创建（目前只支持SOURCE流入任务）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UseAutoCreateTopic?: boolean;
    /**
     * 源topic消息1条扩增成msgMultiple条写入目标topic(该参数目前只有ckafka流入ckafka适用)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MsgMultiple?: number;
}
/**
 * Ckafka配置
 */
export interface KafkaParam {
    /**
     * 是否为自建集群
     */
    SelfBuilt: boolean;
    /**
     * ckafka集群实例Id
     */
    Resource: string;
    /**
     * 主题名，多个以“,”分隔
     */
    Topic?: string;
    /**
     * Offset类型，最开始位置earliest，最新位置latest，时间点位置timestamp
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffsetType?: string;
    /**
     * Offset类型为timestamp时必传，传时间戳，精确到秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: number;
    /**
     * 实例资源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: number;
    /**
     * 主题Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId?: string;
    /**
     * Topic的分区数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionNum?: number;
    /**
     * 启用容错实例/开启死信队列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableToleration?: boolean;
    /**
     * Qps 限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QpsLimit?: number;
    /**
     * Table到Topic的路由，「分发到多个topic」开关打开时必传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableMappings?: Array<TableMapping>;
    /**
     * 「分发到多个topic」开关，默认为false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UseTableMapping?: boolean;
    /**
     * 使用的Topic是否需要自动创建（目前只支持SOURCE流入任务，如果不使用分发到多个topic，需要在Topic字段填写需要自动创建的topic名）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UseAutoCreateTopic?: boolean;
    /**
     * 写入Topic时是否进行压缩，不开启填"none"，开启的话，填写"open"。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompressionType?: string;
    /**
     * 源topic消息1条扩增成msgMultiple条写入目标topic(该参数目前只有ckafka流入ckafka适用)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MsgMultiple?: number;
    /**
     * 数据同步专用参数, 正常数据处理可为空, 实例级别同步: 仅同步元数据填写"META_SYNC_INSTANCE_TYPE", 同步元数据及全部topic内消息的填写"META_AND_DATA_SYNC_INSTANCE_TYPE"; topic级别同步: 选中的源和目标topic中的消息(需要目标实例也包含该topic)填写"DATA_SYNC_TYPE"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConnectorSyncType?: string;
    /**
     * 数据同步专用参数, 当通过时,希望下游的消息写入分区与上游的一致,则填true,但下游分区小于上游时,会报错; 不需要一致则为false, 默认为false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeepPartition?: boolean;
    /**
     * 正则匹配Topic列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicRegularExpression?: string;
}
/**
 * Connection信息
 */
export interface Connection {
    /**
     * 主题名
     */
    TopicName?: string;
    /**
     * 消费组ID
     */
    GroupId?: string;
    /**
     * 主题Id
     */
    TopicId?: string;
}
/**
 * BatchCreateAcl返回参数结构体
 */
export interface BatchCreateAclResponse {
    /**
     * 状态码：0-修改成功，否则修改失败
     */
    Result?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRoute请求参数结构体
 */
export interface DeleteRouteRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 路由id
     */
    RouteId: number;
    /**
     * 调用方appId
     */
    CallerAppid?: number;
    /**
     * 设置定时删除路由时间,若DeleteRouteTime < now ,设置时间小于当前接口提交时间则立即执行;DeleteRouteTime > now,设置时间大于当前接口提交时间,则按照设置的时间,定时执行删除;  该参数设置提交后,无法撤销!!!
     */
    DeleteRouteTime?: string;
}
/**
 * MongoDB连接源参数
 */
export interface MongoDBConnectParam {
    /**
     * MongoDB的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * MongoDB连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * MongoDB连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * MongoDB连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * MongoDB连接源是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt: boolean;
    /**
     * MongoDB连接源的实例vip，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * MongoDB连接源的vpcId，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * BatchModifyTopicAttributes返回参数结构体
 */
export interface BatchModifyTopicAttributesResponse {
    /**
     * 返回结果
     */
    Result?: Array<BatchModifyTopicResultDTO>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据处理——Value处理参数——转换时间格式参数
 */
export interface DateParam {
    /**
     * 时间格式
     */
    Format?: string;
    /**
     * 输入类型，string，unix时间戳，默认string
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetType?: string;
    /**
     * 时区，默认GMT+8
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeZone?: string;
}
/**
 * 实例缩容应答
 */
export interface ScalingDownResp {
    /**
     * 订单号列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DealNames?: Array<string>;
}
/**
 * 建立私有连接的参数
 */
export interface PrivateLinkParam {
    /**
     * 客户实例的vip
     */
    ServiceVip: string;
    /**
     * 客户实例的vpcId
     */
    UniqVpcId: string;
}
/**
 * 创建主题返回
 */
export interface CreateTopicResp {
    /**
     * 主题Id
     */
    TopicId?: string;
}
/**
 * 任务状态返回对象
 */
export interface TaskStatusResponse {
    /**
     * 任务状态:
  0 成功
  1 失败
  2 进行中
     */
    Status?: number;
    /**
     * 输出信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: string;
}
/**
 * 值支持一拆多，即将一个值拆为一个数组
 */
export interface SplitParam {
    /**
     * 分隔符
     */
    Regex: string;
}
/**
 * DescribeTopicDetail请求参数结构体
 */
export interface DescribeTopicDetailRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * （过滤条件）按照topicName过滤，支持模糊查询
     */
    SearchWord?: string;
    /**
     * 偏移量，不填默认为0
     */
    Offset?: number;
    /**
     * 返回数量，不填则默认 10，最大值20，取值要大于0
     */
    Limit?: number;
    /**
     * Acl预设策略名称
     */
    AclRuleName?: string;
    /**
     * 根据特定的属性排序(目前支持PartitionNum/CreateTime)
     */
    OrderBy?: string;
    /**
     * 0-顺序、1-倒序
     */
    OrderType?: number;
    /**
     * 目前支持 ReplicaNum （副本数）筛选
     */
    Filters?: Array<Filter>;
}
/**
 * DescribeGroupOffsets返回参数结构体
 */
export interface DescribeGroupOffsetsResponse {
    /**
     * 返回结果
     */
    Result?: GroupOffsetResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消息记录
 */
export interface ConsumerRecord {
    /**
     * 主题名
     */
    Topic?: string;
    /**
     * 分区id
     */
    Partition?: number;
    /**
     * 位点
     */
    Offset?: number;
    /**
     * 消息key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * 消息value
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * 消息时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Timestamp?: number;
    /**
     * 消息headers
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Headers?: string;
}
/**
 * DeleteGroup返回参数结构体
 */
export interface DeleteGroupResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateToken返回参数结构体
 */
export interface CreateTokenResponse {
    /**
     * token串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupOffsets请求参数结构体
 */
export interface DescribeGroupOffsetsRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * Kafka 消费分组
     */
    Group: string;
    /**
     * group 订阅的主题名称数组，如果没有该数组，则表示指定的 group 下所有 topic 信息
     */
    Topics?: Array<string>;
    /**
     * 模糊匹配 topicName
     */
    SearchWord?: string;
    /**
     * 本次查询的偏移位置，默认为0
     */
    Offset?: number;
    /**
     * 本次返回结果的最大个数，默认为50，最大值为50
     */
    Limit?: number;
}
/**
 * Datahub Topic详情
 */
export interface DescribeDatahubTopicResp {
    /**
     * 名称
     */
    Name?: string;
    /**
     * Topic名称
     */
    TopicName?: string;
    /**
     * Topic Id
     */
    TopicId?: string;
    /**
     * 分区数
     */
    PartitionNum?: number;
    /**
     * 过期时间
     */
    RetentionMs?: number;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Note?: string;
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 密码
     */
    Password?: string;
    /**
     * 状态，1使用中，2删除中
     */
    Status?: number;
    /**
     * 服务路由地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Address?: string;
}
/**
 * 实例详情
 */
export interface InstanceDetail {
    /**
     * ckafka集群实例Id
     */
    InstanceId?: string;
    /**
     * ckafka集群实例名称
     */
    InstanceName?: string;
    /**
     * 访问实例的vip 信息
     */
    Vip?: string;
    /**
     * 访问实例的端口信息
     */
    Vport?: string;
    /**
     * 虚拟IP列表
     */
    VipList?: Array<VipEntity>;
    /**
     * 实例的状态。0: 创建中，1: 运行中，2: 删除中,  3: 已删除,  5: 隔离中,  7: 升级中,  -1: 创建失败
     */
    Status?: number;
    /**
     * 实例带宽，单位Mbps
     */
    Bandwidth?: number;
    /**
     * ckafka集群实例磁盘大小，单位G
     */
    DiskSize?: number;
    /**
     * 可用区域ID
     */
    ZoneId?: number;
    /**
     * vpcId，如果为空，说明是基础网络
     */
    VpcId?: string;
    /**
     * 子网id
     */
    SubnetId?: string;
    /**
     * 实例是否续费，int  枚举值：1表示自动续费，2表示明确不自动续费
     */
    RenewFlag?: number;
    /**
     * 实例状态 int：1表示健康，2表示告警，3 表示实例状态异常
     */
    Healthy?: number;
    /**
     * 实例状态信息
     */
    HealthyMessage?: string;
    /**
     * 实例创建时间
     */
    CreateTime?: number;
    /**
     * 实例过期时间
     */
    ExpireTime?: number;
    /**
     * 是否为内部客户。值为1 表示内部客户
     */
    IsInternal?: number;
    /**
     * Topic个数
     */
    TopicNum?: number;
    /**
     * 标识tag
     */
    Tags?: Array<Tag>;
    /**
     * kafka版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: string;
    /**
     * 跨可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneIds?: Array<number | bigint>;
    /**
     * ckafka售卖类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cvm?: number;
    /**
     * ckafka集群实例类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * ckafka集群实例磁盘类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskType?: string;
    /**
     * 当前规格最大Topic数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxTopicNumber?: number;
    /**
     * 当前规格最大Partition数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxPartitionNumber?: number;
    /**
     * 计划升级配置时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RebalanceTime?: string;
    /**
     * 实例当前partition数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionNumber?: number;
    /**
     * ckafka集群实例公网带宽类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicNetworkChargeType?: string;
    /**
     * 公网带宽 最小3Mbps  最大999Mbps 仅专业版支持填写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicNetwork?: number;
    /**
     * ckafka集群实例底层集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
    /**
     * 实例功能列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Features?: Array<string>;
}
/**
 * 实例 / topic 维度限流策略
 */
export interface InstanceQuotaConfigResp {
    /**
     * 生产限流大小，单位 MB/s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QuotaProducerByteRate: number;
    /**
     * 消费限流大小，单位 MB/s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QuotaConsumerByteRate: number;
}
/**
 * DescribeTopicDetail返回参数结构体
 */
export interface DescribeTopicDetailResponse {
    /**
     * 返回的主题详情实体
     */
    Result?: TopicDetailResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAcl请求参数结构体
 */
export interface DeleteAclRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER)
     */
    ResourceType: number;
    /**
     * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。
     */
    ResourceName: string;
    /**
     * Acl操作方式，(2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTENT_WRITE)
     */
    Operation: number;
    /**
     * 权限类型，(2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
     */
    PermissionType: number;
    /**
     * 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持
     */
    Host?: string;
    /**
     * 用户列表，默认为*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
     */
    Principal?: string;
}
/**
 * CreateInstancePost返回参数结构体
 */
export interface CreateInstancePostResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RouteDTO
 */
export interface RouteDTO {
    /**
     * 路由Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RouteId?: number;
}
/**
 * DescribeDatahubTask返回参数结构体
 */
export interface DescribeDatahubTaskResponse {
    /**
     * 返回结果
     */
    Result?: DescribeDatahubTaskRes;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FetchLatestDatahubMessageList请求参数结构体
 */
export interface FetchLatestDatahubMessageListRequest {
    /**
     * 弹性topic名称
     */
    Name: string;
    /**
     * 分区id
     */
    Partition: number;
    /**
     * 位点信息
     */
    Offset?: number;
    /**
     * 最大查询条数，最小1，最大100
     */
    MessageCount?: number;
}
/**
 * SQLServer连接源参数
 */
export interface SQLServerConnectParam {
    /**
     * SQLServer的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * SQLServer连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * SQLServer连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * SQLServer连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * SQLServer连接源的实例vip，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * SQLServer连接源的vpcId，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 是否更新到关联的Dip任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * CreateConnectResource返回参数结构体
 */
export interface CreateConnectResourceResponse {
    /**
     * 连接源的Id
     */
    Result?: ConnectResourceResourceIdResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消费组偏移量返回结果
 */
export interface GroupOffsetResponse {
    /**
     * 符合调节的总结果数
     */
    TotalCount?: number;
    /**
     * 该主题分区数组，其中每个元素为一个 json object
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicList?: Array<GroupOffsetTopic>;
}
/**
 * 详细类别的价格
 */
export interface InquiryDetailPrice {
    /**
     * 额外内网带宽价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BandwidthPrice?: InquiryBasePrice;
    /**
     * 硬盘价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskPrice?: InquiryBasePrice;
    /**
     * 额外分区价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionPrice?: InquiryBasePrice;
    /**
     * 额外Topic价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicPrice?: InquiryBasePrice;
    /**
     * 实例套餐价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTypePrice?: InquiryBasePrice;
}
/**
 * InquireCkafkaPrice接口询价返回值
 */
export interface InquireCkafkaPriceResp {
    /**
     * 实例价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstancePrice?: InquiryPrice;
    /**
     * 公网带宽价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicNetworkBandwidthPrice?: InquiryPrice;
}
/**
 * DescribeDatahubTasks返回参数结构体
 */
export interface DescribeDatahubTasksResponse {
    /**
     * 返回任务查询结果
     */
    Result?: DescribeDatahubTasksRes;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FetchMessageByOffset返回参数结构体
 */
export interface FetchMessageByOffsetResponse {
    /**
     * 返回结果
     */
    Result?: ConsumerRecord;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据处理——Value处理参数——正则替换参数
 */
export interface RegexReplaceParam {
    /**
     * 正则表达式
     */
    Regex: string;
    /**
     * 替换新值
     */
    NewValue: string;
}
/**
 * AclRule列表接口出参
 */
export interface AclRule {
    /**
     * ACL规则名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
    /**
     * ckafka集群实例Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * ACL规则匹配类型，目前只支持前缀匹配，枚举值列表：PREFIXED
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PatternType?: string;
    /**
     * 表示前缀匹配的前缀的值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Pattern?: string;
    /**
     * Acl资源类型,目前只支持Topic,枚举值列表：Topic
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType?: string;
    /**
     * 该规则所包含的ACL信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AclList?: string;
    /**
     * 规则所创建的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTimeStamp?: string;
    /**
     * 预设ACL规则是否应用到新增的topic中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsApplied?: number;
    /**
     * 规则更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTimeStamp?: string;
    /**
     * 规则的备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Comment?: string;
    /**
     * 其中一个显示的对应的TopicName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName?: string;
    /**
     * 应用该ACL规则的Topic数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicCount?: number;
    /**
     * patternType的中文显示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PatternTypeTitle?: string;
}
/**
 * DescribeACL返回参数结构体
 */
export interface DescribeACLResponse {
    /**
     * 返回的ACL结果集对象
     */
    Result?: AclResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * topic消息堆积、占用磁盘排行
 */
export interface TopicMessageHeapRanking {
    /**
     * 主题ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId?: string;
    /**
     * 主题名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName?: string;
    /**
     * 分区数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionNum?: number;
    /**
     * 副本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReplicaNum?: number;
    /**
     * Topic 流量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicTraffic?: string;
    /**
     * topic消息堆积/占用磁盘
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MessageHeap?: number;
}
/**
 * InquireCkafkaPrice请求参数结构体
 */
export interface InquireCkafkaPriceRequest {
    /**
     * 国内站标准版填写standards2, 国际站标准版填写standard,专业版填写profession,高级版填写premium
     */
    InstanceType: string;
    /**
     * 购买/续费付费类型(购买时不填的话, 默认获取购买包年包月一个月的费用)
     */
    InstanceChargeParam?: InstanceChargeParam;
    /**
     * 购买/续费时购买的实例数量(不填时, 默认为1个)
     */
    InstanceNum?: number;
    /**
     * 实例内网带宽大小, 单位MB/s (购买时必填，专业版/高级版询价时带宽信息必填)
     */
    Bandwidth?: number;
    /**
     * 实例的硬盘购买类型以及大小 (购买时必填，专业版/高级版询价时磁盘信息必填)
     */
    InquiryDiskParam?: InquiryDiskParam;
    /**
     * 实例消息保留时间大小, 单位小时 (购买时必填)
     */
    MessageRetention?: number;
    /**
     * 购买实例topic数, 单位个 (购买时必填)
     */
    Topic?: number;
    /**
     * 购买实例分区数, 单位个 (购买时必填，专业版/高级版询价时带宽信息必填)
     */
    Partition?: number;
    /**
     * 购买地域, 可通过查看DescribeCkafkaZone这个接口获取ZoneId
     */
    ZoneIds?: Array<number | bigint>;
    /**
     * 标记操作, 新购填写purchase, 续费填写renew, (不填时, 默认为purchase)
     */
    CategoryAction?: string;
    /**
     * 国内站购买的版本, sv_ckafka_instance_s2_1(入门型), sv_ckafka_instance_s2_2(标准版), sv_ckafka_instance_s2_3(进阶型), 如果instanceType为standards2, 但该参数为空, 则默认值为sv_ckafka_instance_s2_1
     */
    BillType?: string;
    /**
     * 公网带宽计费模式, 目前只有专业版支持公网带宽 (购买公网带宽时必填)
     */
    PublicNetworkParam?: InquiryPublicNetworkParam;
    /**
     * 续费时的实例id, 续费时填写
     */
    InstanceId?: string;
}
/**
 * DescribeCkafkaZone请求参数结构体
 */
export interface DescribeCkafkaZoneRequest {
    /**
     * cdc集群Id
     */
    CdcId?: string;
}
/**
 * 标准版销售信息
 */
export interface SaleInfo {
    /**
     * 手动设置的flag标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Flag: boolean;
    /**
     * ckakfa版本号(1.1.1/2.4.2/0.10.2)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version: string;
    /**
     * 专业版、标准版标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Platform: string;
    /**
     * 售罄标志：true售罄
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SoldOut: boolean;
}
/**
 * DescribeGroup的返回
 */
export interface GroupResponse {
    /**
     * 计数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * GroupList
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupList?: Array<DescribeGroup>;
    /**
     * 消费分组配额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupCountQuota?: number;
}
/**
 * FetchMessageListByTimestamp请求参数结构体
 */
export interface FetchMessageListByTimestampRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名
     */
    Topic: string;
    /**
     * 分区id
     */
    Partition?: number;
    /**
     * 查询开始时间，13位时间戳
     */
    StartTime?: number;
    /**
     * 最大查询条数，默认20，最大20, 最小1
     */
    SinglePartitionRecordNumber?: number;
}
/**
 * DeleteConnectResource请求参数结构体
 */
export interface DeleteConnectResourceRequest {
    /**
     * 连接源的Id
     */
    ResourceId: string;
}
/**
 * DescribeTopicAttributes返回参数结构体
 */
export interface DescribeTopicAttributesResponse {
    /**
     * 返回的结果对象
     */
    Result?: TopicAttributesResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateConsumer返回参数结构体
 */
export interface CreateConsumerResponse {
    /**
     * 创建消费者组返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 路由信息返回对象
 */
export interface RouteResponse {
    /**
     * 路由信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Routers?: Array<Route>;
}
/**
 * DescribeGroup返回参数结构体
 */
export interface DescribeGroupResponse {
    /**
     * 返回结果
     */
    Result?: GroupResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDatahubTopic请求参数结构体
 */
export interface DescribeDatahubTopicRequest {
    /**
     * 弹性topic名称
     */
    Name: string;
}
/**
 * DeleteUser返回参数结构体
 */
export interface DeleteUserResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAcl请求参数结构体
 */
export interface CreateAclRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * Acl资源类型，(2:TOPIC，3:GROUP，4:CLUSTER)
     */
    ResourceType: number;
    /**
     * Acl操作方式，(2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTENT_WRITE)
     */
    Operation: number;
    /**
     * 权限类型，(2:DENY，3:ALLOW)，当前ckakfa支持ALLOW(相当于白名单)，其它用于后续兼容开源kafka的acl时使用
     */
    PermissionType: number;
    /**
     * 资源名称，和resourceType相关，如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称，当resourceType为CLUSTER时，该字段可为空。
     */
    ResourceName?: string;
    /**
     * 默认为*，表示任何host都可以访问。支持填写IP或网段，支持“;”分隔。
     */
    Host?: string;
    /**
     * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户。传入时需要加 User: 前缀,如用户A则传入User:A。
     */
    Principal?: string;
    /**
     * 资源名称列表,Json字符串格式。ResourceName和resourceNameList只能指定其中一个。
     */
    ResourceNameList?: string;
}
/**
 * CreateConnectResource请求参数结构体
 */
export interface CreateConnectResourceRequest {
    /**
     * 连接源名称
     */
    ResourceName: string;
    /**
     * 连接源类型
     */
    Type: string;
    /**
     * 连接源描述
     */
    Description?: string;
    /**
     * Dts配置，Type为DTS时必填
     */
    DtsConnectParam?: DtsConnectParam;
    /**
     * MongoDB配置，Type为MONGODB时必填
     */
    MongoDBConnectParam?: MongoDBConnectParam;
    /**
     * Es配置，Type为ES时必填
     */
    EsConnectParam?: EsConnectParam;
    /**
     * ClickHouse配置，Type为CLICKHOUSE时必填
     */
    ClickHouseConnectParam?: ClickHouseConnectParam;
    /**
     * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时必填
     */
    MySQLConnectParam?: MySQLConnectParam;
    /**
     * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填
     */
    PostgreSQLConnectParam?: PostgreSQLConnectParam;
    /**
     * MariaDB配置，Type为MARIADB时必填
     */
    MariaDBConnectParam?: MariaDBConnectParam;
    /**
     * SQLServer配置，Type为SQLSERVER时必填
     */
    SQLServerConnectParam?: SQLServerConnectParam;
    /**
     * Doris 配置，Type为 DORIS 时必填
     */
    DorisConnectParam?: DorisConnectParam;
    /**
     * Kafka配置，Type为 KAFKA 时必填
     */
    KafkaConnectParam?: KafkaConnectParam;
    /**
     * MQTT配置，Type为 MQTT 时必填
     */
    MqttConnectParam?: MqttConnectParam;
}
/**
 * 创建数据转储返回值
 */
export interface CreateDatahubTaskRes {
    /**
     * 转储任务id
     */
    TaskId?: string;
    /**
     * 数据转储Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatahubId?: string;
}
/**
 * ModifyInstanceAttributes返回参数结构体
 */
export interface ModifyInstanceAttributesResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * topic链接信息
 */
export interface DescribeConnectInfoResultDTO {
    /**
     * ip地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpAddr: string;
    /**
     * 连结时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time: string;
    /**
     * 是否支持的版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUnSupportVersion: boolean;
}
/**
 * topic副本及详细信息
 */
export interface TopicInSyncReplicaInfo {
    /**
     * 分区名称
     */
    Partition: string;
    /**
     * Leader Id
     */
    Leader: number;
    /**
     * 副本集
     */
    Replica: string;
    /**
     * ISR
     */
    InSyncReplica: string;
    /**
     * 起始Offset
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginOffset: number;
    /**
     * 末端Offset
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndOffset: number;
    /**
     * 消息数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MessageCount: number;
    /**
     * 未同步副本集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutOfSyncReplica: string;
}
/**
 * DescribeRegion请求参数结构体
 */
export interface DescribeRegionRequest {
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 返回最大结果数
     */
    Limit?: number;
    /**
     * 业务字段，可忽略
     */
    Business?: string;
    /**
     * cdc专有集群业务字段，可忽略
     */
    CdcId?: string;
}
/**
 * DescribeGroupInfo返回参数结构体
 */
export interface DescribeGroupInfoResponse {
    /**
     * 返回的结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: Array<GroupInfoResponse>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Dts连接源参数
 */
export interface DtsConnectParam {
    /**
     * Dts的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * Dts消费分组的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId: string;
    /**
     * Dts消费分组的账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * Dts消费分组的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * Dts实例Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * Dts订阅的topic
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Topic: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * DescribeAppInfo返回参数结构体
 */
export interface DescribeAppInfoResponse {
    /**
     * 返回的符合要求的App Id列表
     */
    Result?: AppIdResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ACL返回结果集
 */
export interface AclResponse {
    /**
     * 符合条件的总数据条数
     */
    TotalCount?: number;
    /**
     * ACL列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AclList?: Array<Acl>;
}
/**
 * Map参数
 */
export interface MapParam {
    /**
     * key值
     */
    Key: string;
    /**
     * 类型，DEFAULT默认，DATE系统预设-时间戳，CUSTOMIZE自定义，MAPPING映射
     */
    Type?: string;
    /**
     * 值
     */
    Value?: string;
}
/**
 * Ctsdb连接源参数
 */
export interface CtsdbConnectParam {
    /**
     * Ctsdb的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * Ctsdb连接源的实例vip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * Ctsdb连接源的vpcId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * Ctsdb连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * Ctsdb连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * Ctsdb连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource?: string;
}
/**
 * ModifyInstanceAttributes请求参数结构体
 */
export interface ModifyInstanceAttributesRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 实例日志的最长保留时间，单位分钟，最大90天，0代表不开启日志保留时间回收策略
     */
    MsgRetentionTime?: number;
    /**
     * ckafka集群实例Name
     */
    InstanceName?: string;
    /**
     * 实例配置
     */
    Config?: ModifyInstanceAttributesConfig;
    /**
     * 动态消息保留策略配置
     */
    DynamicRetentionConfig?: DynamicRetentionTime;
    /**
     * 用于修改升级版本或升配定时任务的执行时间，Unix时间戳，精确到秒
     */
    RebalanceTime?: number;
    /**
     * 公网带宽 最小3Mbps  最大999Mbps 仅专业版支持填写
     */
    PublicNetwork?: number;
    /**
     * 动态硬盘扩容策略配置
     * @deprecated
     */
    DynamicDiskConfig?: DynamicDiskConfig;
    /**
     * 实例级别单条消息大小（单位byte)  最大 12582912(不包含)  最小1024(不包含)
     */
    MaxMessageByte?: number;
    /**
     * 集群topic默认 unclean.leader.election.enable配置: 1 开启  0 关闭
     */
    UncleanLeaderElectionEnable?: number;
}
/**
 * 消费者组消费速度排行
 */
export interface ConsumerGroupSpeed {
    /**
     * 消费者组名称
     */
    ConsumerGroupName?: string;
    /**
     * 消费速度 Count/Minute
     */
    Speed?: number;
}
/**
 * CreateAclRule返回参数结构体
 */
export interface CreateAclRuleResponse {
    /**
     * 规则的唯一表示Key
     */
    Result?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FetchDatahubMessageByOffset返回参数结构体
 */
export interface FetchDatahubMessageByOffsetResponse {
    /**
     * 返回结果
     */
    Result?: ConsumerRecord;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDatahubTask请求参数结构体
 */
export interface DeleteDatahubTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
}
/**
 * 数据处理——处理链
 */
export interface FieldParam {
    /**
     * 解析
     */
    Analyse: AnalyseParam;
    /**
     * 二次解析
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecondaryAnalyse?: SecondaryAnalyseParam;
    /**
     * 数据处理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SMT?: Array<SMTParam>;
    /**
     * 测试结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: string;
    /**
     * 解析结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AnalyseResult?: Array<SMTParam>;
    /**
     * 二次解析结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecondaryAnalyseResult?: Array<SMTParam>;
    /**
     * JSON格式解析结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AnalyseJsonResult?: string;
    /**
     * JSON格式二次解析结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecondaryAnalyseJsonResult?: string;
}
/**
 * ModifyConnectResource返回参数结构体
 */
export interface ModifyConnectResourceResponse {
    /**
     * 连接源的Id
     */
    Result?: ConnectResourceResourceIdResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroup请求参数结构体
 */
export interface DescribeGroupRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 搜索关键字
     */
    SearchWord?: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 最大返回数量
     */
    Limit?: number;
    /**
     * 仅支持 GroupState 筛选,   支持的筛选状态有 Empty/Stable  注意：该参数只能在2.8/3.2 版本生效
     */
    Filters?: Array<Filter>;
}
/**
 * InstanceScalingDown请求参数结构体
 */
export interface InstanceScalingDownRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 缩容模式  1:稳定变配
  2.高速变配
     */
    UpgradeStrategy: number;
    /**
     * 磁盘大小 单位 GB
     */
    DiskSize?: number;
    /**
     * 峰值带宽 单位 MB/s
     */
    BandWidth?: number;
    /**
     * 分区上限
     */
    Partition?: number;
}
/**
 * CreateCdcCluster请求参数结构体
 */
export interface CreateCdcClusterRequest {
    /**
     * cdc的id
     */
    CdcId: string;
    /**
     * vpcId,一个地域只有唯一一个vpcid用于CDC
     */
    CdcVpcId: string;
    /**
     * 每个CDC集群有唯一一个子网ID
     */
    CdcSubnetId: string;
    /**
     * 所在可用区ID
     */
    ZoneId: number;
    /**
     * 实例带宽,单位MB/s; 最小值:20MB/s, 高级版最大值:360MB/s,专业版最大值:100000MB/s  标准版固定带宽规格: 40MB/s, 100MB/s, 150MB/s
     */
    Bandwidth: number;
    /**
     * cdc集群的总磁盘
     */
    DiskSize: number;
    /**
     * ckafka集群实例磁盘类型
     */
    DiskType: string;
    /**
     * 系统盘类型
     */
    SystemDiskType: string;
}
/**
 * DeleteTopicIpWhiteList返回参数结构体
 */
export interface DeleteTopicIpWhiteListResponse {
    /**
     * 删除主题IP白名单结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstancesDetail请求参数结构体
 */
export interface DescribeInstancesDetailRequest {
    /**
     * （过滤条件）按照实例ID过滤
     */
    InstanceId?: string;
    /**
     * （过滤条件）按照实例名,实例Id,可用区,私有网络id,子网id 过滤，支持模糊查询
     */
    SearchWord?: string;
    /**
     * （过滤条件）实例的状态。0：创建中，1：运行中，2：删除中，不填默认返回全部
     */
    Status?: Array<number | bigint>;
    /**
     * 偏移量，不填默认为0。
     */
    Offset?: number;
    /**
     * 返回数量，不填则默认10，最大值20。
     */
    Limit?: number;
    /**
     * 匹配标签key值。
     */
    TagKey?: string;
    /**
     * 过滤器。filter.Name 支持('Ip', 'VpcId', 'SubNetId', 'InstanceType','InstanceId') ,filter.Values最多传递10个值.
     */
    Filters?: Array<Filter>;
    /**
     * 已经废弃， 使用InstanceIdList
     */
    InstanceIds?: string;
    /**
     * 按照实例ID过滤
     */
    InstanceIdList?: Array<string>;
    /**
     * 根据标签列表过滤实例（取交集）
     */
    TagList?: Array<Tag>;
}
/**
 * 数据处理——Value处理参数——Jsonpath替换参数
 */
export interface JsonPathReplaceParam {
    /**
     * 被替换值，Jsonpath表达式
     */
    OldValue: string;
    /**
     * 替换值，Jsonpath表达式或字符串
     */
    NewValue: string;
}
/**
 * 普罗米修斯打通的vipVport
 */
export interface PrometheusDTO {
    /**
     * export类型（jmx_export\node_export）
     */
    Type?: string;
    /**
     * vip
     */
    SourceIp?: string;
    /**
     * vport
     */
    SourcePort?: number;
    /**
     * broker地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: string;
    /**
     * VPC ID信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 子网ID信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
}
/**
 * CreateConsumer请求参数结构体
 */
export interface CreateConsumerRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 消费分组名称
     */
    GroupName: string;
    /**
     * 主题名，TopicName、TopicNameList 需要显示指定一个存在的主题名
     */
    TopicName?: string;
    /**
     * 主题名列表
     */
    TopicNameList?: Array<string>;
}
/**
 * CreateDatahubTopic返回参数结构体
 */
export interface CreateDatahubTopicResponse {
    /**
     * 返回创建结果
     */
    Result?: DatahubTopicResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MQTT连接源参数
 */
export interface MqttConnectParam {
    /**
     * MQTT连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * MQTT连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * MQTT连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * MQTT Instance vpc-id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId: string;
    /**
     * 是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
    /**
     * 是否更新到关联的Dip任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
    /**
     * MQTT连接源的实例资源地域, 跨地域时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
}
/**
 * FetchDatahubMessageByOffset请求参数结构体
 */
export interface FetchDatahubMessageByOffsetRequest {
    /**
     * 弹性topic名称
     */
    Name: string;
    /**
     * 分区id
     */
    Partition: number;
    /**
     * 位点信息，必填
     */
    Offset?: number;
}
/**
 * Topic 副本及详情数据集合
 */
export interface TopicInSyncReplicaResult {
    /**
     * Topic详情及副本合集
     */
    TopicInSyncReplicaList?: Array<TopicInSyncReplicaInfo>;
    /**
     * 总计个数
     */
    TotalCount?: number;
}
/**
 * DescribeDatahubGroupOffsets请求参数结构体
 */
export interface DescribeDatahubGroupOffsetsRequest {
    /**
     * （过滤条件）按照实例 ID 过滤
     */
    Name: string;
    /**
     * Kafka 消费分组
     */
    Group: string;
    /**
     * 模糊匹配 topicName
     */
    SearchWord?: string;
    /**
     * 本次查询的偏移位置，默认为0
     */
    Offset?: number;
    /**
     * 本次返回结果的最大个数，默认为50，最大值为50
     */
    Limit?: number;
}
/**
 * 询价返回参数
 */
export interface InquiryBasePrice {
    /**
     * 单位原价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitPrice?: number;
    /**
     * 折扣单位价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitPriceDiscount?: number;
    /**
     * 合计原价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginalPrice?: number;
    /**
     * 折扣合计价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountPrice?: number;
    /**
     * 折扣(单位是%)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Discount?: number;
    /**
     * 商品数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GoodsNum?: number;
    /**
     * 付费货币
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Currency?: string;
    /**
     * 硬盘专用返回参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskType?: string;
    /**
     * 购买时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeSpan?: number;
    /**
     * 购买时长单位("m"按月, "h"按小时)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeUnit?: string;
    /**
     * 购买数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: number;
}
/**
 * GroupInfo返回数据的实体
 */
export interface GroupInfoResponse {
    /**
     * 错误码，正常为0
     */
    ErrorCode?: string;
    /**
     * group 状态描述（常见的为 Empty、Stable、Dead 三种状态）：
  Dead：消费分组不存在
  Empty：消费分组，当前没有任何消费者订阅
  PreparingRebalance：消费分组处于 rebalance 状态
  CompletingRebalance：消费分组处于 rebalance 状态
  Stable：消费分组中各个消费者已经加入，处于稳定状态
     */
    State?: string;
    /**
     * 消费分组选择的协议类型正常的消费者一般为 consumer 但有些系统采用了自己的协议如 kafka-connect 用的就是 connect。只有标准的 consumer 协议，本接口才知道具体的分配方式的格式，才能解析到具体的 partition 的分配情况
     */
    ProtocolType?: string;
    /**
     * 消费者 partition 分配算法常见的有如下几种(Kafka 消费者 SDK 默认的选择项为 range)：range、 roundrobin、 sticky
     */
    Protocol?: string;
    /**
     * 仅当 state 为 Stable 且 protocol_type 为 consumer 时， 该数组才包含信息
     */
    Members?: Array<GroupInfoMember>;
    /**
     * 消费分组名称
     */
    Group?: string;
}
/**
 * BatchModifyGroupOffsets请求参数结构体
 */
export interface BatchModifyGroupOffsetsRequest {
    /**
     * 消费分组名称
     */
    GroupName: string;
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * partition信息
     */
    Partitions: Array<Partitions>;
    /**
     * 指定topic，默认所有topic
     */
    TopicName?: Array<string>;
}
/**
 * 聚合的实例状态返回结果
 */
export interface InstanceResponse {
    /**
     * 符合条件的实例列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceList?: Array<Instance>;
    /**
     * 符合条件的结果总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * Datahub主题
 */
export interface DatahubTopicDTO {
    /**
     * 名称
     */
    Name?: string;
    /**
     * Topic名称
     */
    TopicName?: string;
    /**
     * Topic Id
     */
    TopicId?: string;
    /**
     * 分区数
     */
    PartitionNum?: number;
    /**
     * 过期时间
     */
    RetentionMs?: number;
    /**
     * 备注
     */
    Note?: string;
    /**
     * 状态，1使用中，2删除中
     */
    Status?: number;
}
/**
 * Cls类型入参
 */
export interface ClsParam {
    /**
     * 生产的信息是否为json格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DecodeJson: boolean;
    /**
     * cls日志主题id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * cls日志集id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogSet?: string;
    /**
     * 当DecodeJson为false时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContentKey?: string;
    /**
     * 指定消息中的某字段内容作为cls日志的时间。
  字段内容格式需要是秒级时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeField?: string;
}
/**
 * 分区详情
 */
export interface TopicPartitionDO {
    /**
     * Partition 分区ID
     */
    Partition?: number;
    /**
     * Leader 运行状态
     */
    LeaderStatus?: number;
    /**
     * ISR 个数
     */
    IsrNum?: number;
    /**
     * 副本个数
     */
    ReplicaNum?: number;
}
/**
 * 数据处理-解析参数
 */
export interface AnalyseParam {
    /**
     * 解析格式，JSON，DELIMITER分隔符，REGULAR正则提取，SOURCE处理上层所有结果
     */
    Format: string;
    /**
     * 分隔符、正则表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Regex?: string;
    /**
     * 需再次处理的KEY——模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputValueType?: string;
    /**
     * 需再次处理的KEY——KEY表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputValue?: string;
}
/**
 * 批量修改topic参数
 */
export interface BatchModifyTopicInfo {
    /**
     * 主题名
     */
    TopicName: string;
    /**
     * 分区数
     */
    PartitionNum?: number;
    /**
     * 备注
     */
    Note?: string;
    /**
     * 副本数
     */
    ReplicaNum?: number;
    /**
     * 消息删除策略，可以选择delete 或者compact
     */
    CleanUpPolicy?: string;
    /**
     * 当producer设置request.required.acks为-1时，min.insync.replicas指定replicas的最小数目
     */
    MinInsyncReplicas?: number;
    /**
     * 是否允许非ISR的副本成为Leader
     */
    UncleanLeaderElectionEnable?: boolean;
    /**
     * topic维度的消息保留时间（毫秒）范围1 分钟到90 天
     */
    RetentionMs?: number;
    /**
     * topic维度的消息保留大小，范围1 MB到1024 GB
     */
    RetentionBytes?: number;
    /**
     * Segment分片滚动的时长（毫秒），范围1 到90 天
     */
    SegmentMs?: number;
    /**
     * 批次的消息大小，范围1 KB到12 MB
     */
    MaxMessageBytes?: number;
    /**
     * 消息保存的时间类型：CreateTime/LogAppendTime
     */
    LogMsgTimestampType?: string;
}
/**
 * 消息价格实体
 */
export interface Price {
    /**
     * 折扣价
     */
    RealTotalCost?: number;
    /**
     * 原价
     */
    TotalCost?: number;
}
/**
 * Es修改连接源参数
 */
export interface EsModifyConnectParam {
    /**
     * Es连接源的实例资源【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * Es的连接port【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * Es连接源的实例vip【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * Es连接源的vpcId【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * Es连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * Es连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * Es连接源是否为自建集群【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * SendMessage请求参数结构体
 */
export interface SendMessageRequest {
    /**
     * DataHub接入ID
     */
    DataHubId: string;
    /**
     * 发送消息内容(单次请求最多500条)
     */
    Message: Array<BatchContent>;
}
/**
 * key-value二次解析
 */
export interface KVParam {
    /**
     * 分隔符
     */
    Delimiter: string;
    /**
     * key-value二次解析分隔符
     */
    Regex: string;
    /**
     * 保留源Key，默认为false不保留
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeepOriginalKey?: string;
}
/**
 * BatchModifyTopicAttributes请求参数结构体
 */
export interface BatchModifyTopicAttributesRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题属性列表 (同一个批次最多支持10个)
     */
    Topic: Array<BatchModifyTopicInfo>;
}
/**
 * RenewCkafkaInstance接口出参bigDealIds
 */
export interface RenewCkafkaInstanceResp {
    /**
     * 订单号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BigDealId?: string;
    /**
     * 子订单号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DealName?: string;
}
/**
 * 查询Datahub任务信息
 */
export interface DescribeDatahubTaskRes {
    /**
     * 任务ID
     */
    TaskId?: string;
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 任务类型，SOURCE数据接入，SINK数据流出
     */
    TaskType?: string;
    /**
     * 状态，-1创建失败，0创建中，1运行中，2删除中，3已删除，4删除失败，5暂停中，6已暂停，7暂停失败，8恢复中，9恢复失败
     */
    Status?: number;
    /**
     * 数据源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceResource?: DatahubResource;
    /**
     * 数据目标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetResource?: DatahubResource;
    /**
     * Connection列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Connections?: Array<Connection>;
    /**
     * 任务创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 消息处理规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransformParam?: TransformParam;
    /**
     * 数据接入ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatahubId?: string;
    /**
     * 绑定的SchemaId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaId?: string;
    /**
     * 绑定的Schema名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaName?: string;
    /**
     * 数据处理规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransformsParam?: TransformsParam;
    /**
     * 异常信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 任务标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
}
/**
 * DescribePrometheus请求参数结构体
 */
export interface DescribePrometheusRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
}
/**
 * FetchMessageListByTimestamp返回参数结构体
 */
export interface FetchMessageListByTimestampResponse {
    /**
     * 返回结果。注意，列表中不返回具体的消息内容（key、value），如果需要查询具体消息内容，请使用FetchMessageByOffset接口
     */
    Result?: Array<ConsumerRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteInstancePost返回参数结构体
 */
export interface DeleteInstancePostResponse {
    /**
     * 返回结果
     */
    Result?: InstanceDeleteResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDatahubTopic请求参数结构体
 */
export interface ModifyDatahubTopicRequest {
    /**
     * 弹性topic名称
     */
    Name: string;
    /**
     * 消息保留时间，单位：ms，当前最小值为60000ms。
     */
    RetentionMs: number;
    /**
     * 主题备注，是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线-。
     */
    Note?: string;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
}
/**
 * Datahub主题列表
 */
export interface DescribeDatahubTopicsResp {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * Topic列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicList?: Array<DatahubTopicDTO>;
}
/**
 * ModifyDatahubTask返回参数结构体
 */
export interface ModifyDatahubTaskResponse {
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: DatahubTaskIdRes;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeConnectResources返回参数结构体
 */
export interface DescribeConnectResourcesResponse {
    /**
     * 连接源列表
     */
    Result?: DescribeConnectResourcesResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 主题详情
 */
export interface TopicDetail {
    /**
     * 主题名
     */
    TopicName?: string;
    /**
     * 主题Id
     */
    TopicId?: string;
    /**
     * 分区数
     */
    PartitionNum?: number;
    /**
     * topic副本数  最小值 1,最大值 3
     */
    ReplicaNum?: number;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Note?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 是否开启ip鉴权白名单，true表示开启，false表示不开启
     */
    EnableWhiteList?: boolean;
    /**
     * ip白名单中ip个数
     */
    IpWhiteListCount?: number;
    /**
     * 数据备份cos bucket: 转存到cos 的bucket地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ForwardCosBucket?: string;
    /**
     * 数据备份cos 状态： 1 不开启数据备份，0 开启数据备份
     */
    ForwardStatus?: number;
    /**
     * 数据备份到cos的周期频率
     */
    ForwardInterval?: number;
    /**
     * 高级配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Config?: Config;
    /**
     * 消息保留时间配置(用于动态配置变更记录)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetentionTimeConfig?: TopicRetentionTimeConfigRsp;
    /**
     * 0:正常，1：已删除，2：删除中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
}
/**
 * dip失败消息写入cls的配置
 */
export interface DropCls {
    /**
     * 是否投递到cls
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropInvalidMessageToCls?: boolean;
    /**
     * 投递cls的地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropClsRegion?: string;
    /**
     * 投递cls的账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropClsOwneruin?: string;
    /**
     * 投递cls的主题
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropClsTopicId?: string;
    /**
     * 投递cls的日志集id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropClsLogSet?: string;
}
/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 用户名称
     */
    Name: string;
}
/**
 * 批量修改topic属性结果
 */
export interface BatchModifyTopicResultDTO {
    /**
     * ckafka集群实例Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 主题名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName?: string;
    /**
     * 操作返回码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReturnCode?: string;
    /**
     * 操作返回信息
     */
    Message?: string;
}
/**
 * DescribeTopicAttributes请求参数结构体
 */
export interface DescribeTopicAttributesRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名称
     */
    TopicName: string;
}
/**
 * 用户组实体
 */
export interface ConsumerGroup {
    /**
     * 用户组名称
     */
    ConsumerGroupName?: string;
    /**
     * 订阅信息实体
     */
    SubscribedInfo?: Array<SubscribedInfo>;
}
/**
 * DescribeDatahubTask请求参数结构体
 */
export interface DescribeDatahubTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
}
/**
 * FetchLatestDatahubMessageList返回参数结构体
 */
export interface FetchLatestDatahubMessageListResponse {
    /**
     * 返回结果。
     */
    Result?: Array<ConsumerRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 组偏移量分区对象
 */
export interface GroupOffsetPartition {
    /**
     * topic 的 partitionId
     */
    Partition?: number;
    /**
     * consumer 提交的 offset 位置
     */
    Offset?: number;
    /**
     * 支持消费者提交消息时，传入 metadata 作为它用，当前一般为空字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Metadata?: string;
    /**
     * 错误码
     */
    ErrorCode?: number;
    /**
     * 当前 partition 最新的 offset
     */
    LogEndOffset?: number;
    /**
     * 未消费的消息个数
     */
    Lag?: number;
}
/**
 * 查询Datahub任务列表
 */
export interface DescribeDatahubTasksRes {
    /**
     * 任务总数
     */
    TotalCount?: number;
    /**
     * Datahub任务信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskList?: Array<DatahubTaskInfo>;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 返回的结果
     */
    Result?: InstanceResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据处理ROW输出格式配置
 */
export interface RowParam {
    /**
     * 行内容，KEY_VALUE，VALUE
     */
    RowContent: string;
    /**
     * key和value间的分隔符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyValueDelimiter?: string;
    /**
     * 元素建的分隔符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EntryDelimiter?: string;
}
/**
 * 过滤器参数
 */
export interface FilterMapParam {
    /**
     * Key值
     */
    Key: string;
    /**
     * 匹配模式，前缀匹配PREFIX，后缀匹配SUFFIX，包含匹配CONTAINS，EXCEPT除外匹配，数值匹配NUMBER，IP匹配IP
     */
    MatchMode: string;
    /**
     * Value值
     */
    Value: string;
    /**
     * 固定REGULAR
     */
    Type?: string;
}
/**
 * 消息字段与 es 索引的映射关系
 */
export interface EsRecordMapping {
    /**
     * es 索引成员名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnName?: string;
    /**
     * 消息字段名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JsonKey?: string;
}
/**
 * topic 流量排行
 */
export interface TopicFlowRanking {
    /**
     * 主题Id
     */
    TopicId?: string;
    /**
     * 主题名称
     */
    TopicName?: string;
    /**
     * 分区数
     */
    PartitionNum?: number;
    /**
     * 副本数
     */
    ReplicaNum?: number;
    /**
     * Topic 流量,单位MB(设置date时以sum方式聚合)
     */
    TopicTraffic?: string;
    /**
     * Topic 消息堆积
     */
    MessageHeap?: number;
}
/**
 * GroupInfo内部topic对象
 */
export interface GroupInfoTopics {
    /**
     * 分配的 topic 名称
     */
    Topic?: string;
    /**
     * 分配的 partition 信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Partitions?: Array<number | bigint>;
}
/**
 * 统一返回的TopicResponse
 */
export interface TopicResult {
    /**
     * 返回的主题信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicList?: Array<Topic>;
    /**
     * 符合条件的 topic 数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * 创建预付费接口返回的Data
 */
export interface CreateInstancePreData {
    /**
     * CreateInstancePre返回固定为0，不能作为CheckTaskStatus的查询条件。只是为了保证和后台数据结构对齐。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowId?: number;
    /**
     * 订单号列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DealNames?: Array<string>;
    /**
     * ckafka集群实例Id，当购买多个实例时，默认返回购买的第一个实例 id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 订单和购买实例对应映射列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DealNameInstanceIdMapping?: Array<DealInstanceDTO>;
}
/**
 * Es连接源参数
 */
export interface EsConnectParam {
    /**
     * Es的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * Es连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * Es连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * Es连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * Es连接源是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt: boolean;
    /**
     * Es连接源的实例vip，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * Es连接源的vpcId，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * Ctsdb连接源参数(更新)
 */
export interface CtsdbModifyConnectParam {
    /**
     * Ctsdb的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * Ctsdb连接源的实例vip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * Ctsdb连接源的vpcId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * Ctsdb连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * Ctsdb连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * Ctsdb连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource?: string;
}
/**
 * 动态硬盘扩容配置
 */
export interface DynamicDiskConfig {
    /**
     * 动态硬盘扩容配置开关（0: 关闭，1: 开启）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enable?: number;
    /**
     * 每次磁盘动态扩容大小百分比
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StepForwardPercentage?: number;
    /**
     * 磁盘配额百分比触发条件，即消息达到此值触发硬盘自动扩容事件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskQuotaPercentage?: number;
    /**
     * 最大扩容硬盘大小，以 GB 为单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDiskSpace?: number;
}
/**
 * Doris 连接源修改参数
 */
export interface DorisModifyConnectParam {
    /**
     * Doris 连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * Doris jdbc 负载均衡连接 port，通常映射到 fe 的 9030 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * Doris 连接源的实例vip，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * Doris 连接源的vpcId，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * Doris 连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * Doris 连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
    /**
     * Doris 连接源是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
    /**
     * Doris 的 http 负载均衡连接 port，通常映射到 be 的 8040 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BePort?: number;
}
/**
 * zone信息实体
 */
export interface ZoneInfo {
    /**
     * 可用区
     */
    ZoneId?: string;
    /**
     * 是否内部APP
     */
    IsInternalApp?: number;
    /**
     * 应用标识
     */
    AppId?: number;
    /**
     * 标识
     */
    Flag?: boolean;
    /**
     * 可用区名称
     */
    ZoneName?: string;
    /**
     * 可用区状态
     */
    ZoneStatus?: number;
    /**
     * 额外标识
     * @deprecated
     */
    Exflag?: string;
    /**
     * true为售罄，false为未售罄
     */
    SoldOut?: string;
    /**
     * 标准版售罄信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SalesInfo?: Array<SaleInfo>;
    /**
     * 额外标识
     */
    ExtraFlag?: string;
}
/**
 * DescribeTopicSubscribeGroup返回参数结构体
 */
export interface DescribeTopicSubscribeGroupResponse {
    /**
     * 返回结果
     */
    Result?: TopicSubscribeGroup;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAclRule请求参数结构体
 */
export interface DeleteAclRuleRequest {
    /**
     * 实例id信息
     */
    InstanceId: string;
    /**
     * acl规则名称
     */
    RuleName: string;
}
/**
 * ModifyConnectResource请求参数结构体
 */
export interface ModifyConnectResourceRequest {
    /**
     * 连接源的Id
     */
    ResourceId: string;
    /**
     * 连接源名称，为空时不修改
     */
    ResourceName?: string;
    /**
     * 连接源描述，为空时不修改
     */
    Description?: string;
    /**
     * 连接源类型，修改数据源参数时，需要与原Type相同，否则编辑数据源无效
     */
    Type?: string;
    /**
     * Dts配置，Type为DTS时必填
     */
    DtsConnectParam?: DtsModifyConnectParam;
    /**
     * MongoDB配置，Type为MONGODB时必填
     */
    MongoDBConnectParam?: MongoDBModifyConnectParam;
    /**
     * Es配置，Type为ES时必填
     */
    EsConnectParam?: EsModifyConnectParam;
    /**
     * ClickHouse配置，Type为CLICKHOUSE时必填
     */
    ClickHouseConnectParam?: ClickHouseModifyConnectParam;
    /**
     * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时必填
     */
    MySQLConnectParam?: MySQLModifyConnectParam;
    /**
     * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填
     */
    PostgreSQLConnectParam?: PostgreSQLModifyConnectParam;
    /**
     * MariaDB配置，Type为MARIADB时必填
     */
    MariaDBConnectParam?: MariaDBModifyConnectParam;
    /**
     * SQLServer配置，Type为SQLSERVER时必填
     */
    SQLServerConnectParam?: SQLServerModifyConnectParam;
    /**
     * Ctsdb配置，Type为CTSDB
     */
    CtsdbConnectParam?: CtsdbModifyConnectParam;
    /**
     * Doris配置，Type为DORIS
     */
    DorisConnectParam?: DorisModifyConnectParam;
    /**
     * Kafka配置，Type为 KAFKA 时必填
     */
    KafkaConnectParam?: KafkaConnectParam;
    /**
     * MQTT配置，Type为 MQTT 时必填
     */
    MqttConnectParam?: MqttConnectParam;
}
/**
 * CreateToken请求参数结构体
 */
export interface CreateTokenRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 用户名
     */
    User: string;
}
/**
 * Tdw类型入参
 */
export interface TdwParam {
    /**
     * Tdw的bid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bid: string;
    /**
     * Tdw的tid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tid: string;
    /**
     * 默认true
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsDomestic?: boolean;
    /**
     * TDW地址，默认tl-tdbank-tdmanager.tencent-distribute.com
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TdwHost?: string;
    /**
     * TDW端口，默认8099
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TdwPort?: number;
}
/**
 * 创建CDC 标准版共享集群出参
 */
export interface CdcClusterResponse {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: number;
}
/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
    /**
     * 返回结果
     */
    Result?: TaskStatusResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 主题占用Broker磁盘大小
 */
export interface BrokerTopicData {
    /**
     * 主题名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName?: string;
    /**
     * 主题Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId?: string;
    /**
     * 主题占用Broker 容量大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataSize?: number;
}
/**
 * 批量解析
 */
export interface BatchAnalyseParam {
    /**
     * ONE_BY_ONE单条输出，MERGE合并输出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Format: string;
}
/**
 * DeleteInstancePost请求参数结构体
 */
export interface DeleteInstancePostRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
}
/**
 * DescribeTopicProduceConnection请求参数结构体
 */
export interface DescribeTopicProduceConnectionRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名
     */
    TopicName: string;
}
/**
 * DescribeAppInfo请求参数结构体
 */
export interface DescribeAppInfoRequest {
    /**
     * 偏移位置
     */
    Offset?: number;
    /**
     * 本次查询用户数目最大数量限制，最大值为50，默认50
     */
    Limit?: number;
}
/**
 * MariaDB类型入参
 */
export interface MariaDBParam {
    /**
     * MariaDB的数据库名称，"*"为全数据库
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Database: string;
    /**
     * MariaDB的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Table: string;
    /**
     * 该MariaDB在连接管理内的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * 复制存量信息(schema_only不复制, initial全量)，默认值initial
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotMode?: string;
    /**
     * 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyColumns?: string;
    /**
     * 当Table输入的是前缀时，该项值为true，否则为false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsTablePrefix?: boolean;
    /**
     * 输出格式，DEFAULT、CANAL_1、CANAL_2
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutputFormat?: string;
    /**
     * 如果该值为all，则DDL数据以及DML数据也会写入到选中的topic；若该值为dml，则只有DML数据写入到选中的topic
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncludeContentChanges?: string;
    /**
     * 如果该值为true，且MySQL中"binlog_rows_query_log_events"配置项的值为"ON"，则流入到topic的数据包含原SQL语句；若该值为false，流入到topic的数据不包含原SQL语句
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncludeQuery?: boolean;
    /**
     * 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordWithSchema?: boolean;
}
/**
 * 数据处理——Value处理参数——截取参数
 */
export interface SubstrParam {
    /**
     * 截取起始位置
     */
    Start: number;
    /**
     * 截取截止位置
     */
    End: number;
}
/**
 * DescribeTopicSubscribeGroup请求参数结构体
 */
export interface DescribeTopicSubscribeGroupRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名
     */
    TopicName: string;
    /**
     * 分页时的起始位置
     */
    Offset?: number;
    /**
     * 分页时的个数
     */
    Limit?: number;
}
/**
 * Table、Topic路由
 */
export interface TableMapping {
    /**
     * 库名
     */
    Database: string;
    /**
     * 表名，多个表,（逗号）隔开
     */
    Table: string;
    /**
     * Topic名称
     */
    Topic: string;
    /**
     * Topic ID
     */
    TopicId: string;
}
/**
 * Dts修改连接源参数
 */
export interface DtsModifyConnectParam {
    /**
     * Dts实例Id【不支持修改】
     */
    Resource: string;
    /**
     * Dts的连接port【不支持修改】
     */
    Port?: number;
    /**
     * Dts消费分组的Id
     */
    GroupId?: string;
    /**
     * Dts消费分组的账号
     */
    UserName?: string;
    /**
     * Dts消费分组的密码
     */
    Password?: string;
    /**
     * 是否更新到关联的Datahub任务，默认为true
     */
    IsUpdate?: boolean;
    /**
     * Dts订阅的topic【不支持修改】
     */
    Topic?: string;
}
/**
 * 实例配置实体
 */
export interface InstanceConfigDO {
    /**
     * 是否自动创建主题
     */
    AutoCreateTopicsEnable?: boolean;
    /**
     * 分区数
     */
    DefaultNumPartitions?: number;
    /**
     * 默认的复制Factor
     */
    DefaultReplicationFactor?: number;
}
/**
 * DeleteAclRule返回参数结构体
 */
export interface DeleteAclRuleResponse {
    /**
     * 返回被删除的规则的ID
     */
    Result?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户返回实体
 */
export interface UserResponse {
    /**
     * 符合条件的用户列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Users?: Array<User>;
    /**
     * 符合条件的总用户数
     */
    TotalCount?: number;
}
/**
 * DescribeGroupInfo请求参数结构体
 */
export interface DescribeGroupInfoRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * Kafka 消费分组列表
     */
    GroupList: Array<string>;
}
/**
 * 查询连接源列表的返参
 */
export interface DescribeConnectResourcesResp {
    /**
     * 连接源个数
     */
    TotalCount?: number;
    /**
     * 连接源数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConnectResourceList?: Array<DescribeConnectResource>;
}
/**
 * DescribeDatahubTopics请求参数结构体
 */
export interface DescribeDatahubTopicsRequest {
    /**
     * 搜索词
     */
    SearchWord?: string;
    /**
     * 本次查询的偏移位置，默认为0
     */
    Offset?: number;
    /**
     * 本次返回结果的最大个数，默认为50，最大值为50
     */
    Limit?: number;
    /**
     * 是否从连接查询topic列表
     */
    QueryFromConnectResource?: boolean;
    /**
     * 连接的ID
     */
    ConnectResourceId?: string;
    /**
     * topic资源表达式
     */
    TopicRegularExpression?: string;
}
/**
 * DescribeUser返回参数结构体
 */
export interface DescribeUserResponse {
    /**
     * 返回结果
     */
    Result?: UserResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Cos Datahub 任务接入参数
 */
export interface CosParam {
    /**
     * cos 存储桶名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BucketName: string;
    /**
     * 地域代码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: string;
    /**
     * 对象名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectKey?: string;
    /**
     * 汇聚消息量的大小（单位：MB)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AggregateBatchSize?: number;
    /**
     * 汇聚的时间间隔（单位：小时）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AggregateInterval?: number;
    /**
     * 消息汇聚后的文件格式（支持csv, json）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FormatOutputType?: string;
    /**
     * 转储的对象目录前缀
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectKeyPrefix?: string;
    /**
     * 根据strptime 时间格式化的分区格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DirectoryTimeFormat?: string;
}
/**
 * 查询kafka的zone信息返回的实体
 */
export interface ZoneResponse {
    /**
     * zone列表
     */
    ZoneList?: Array<ZoneInfo>;
    /**
     * 最大购买实例个数
     */
    MaxBuyInstanceNum?: number;
    /**
     * 最大购买带宽 单位Mb/s
     */
    MaxBandwidth?: number;
    /**
     * 后付费单位价格
     */
    UnitPrice?: Price;
    /**
     * 后付费消息单价
     */
    MessagePrice?: Price;
    /**
     * 用户独占集群信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterInfo?: Array<ClusterInfo>;
    /**
     * 购买标准版配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Standard?: string;
    /**
     * 购买标准版S2配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StandardS2?: string;
    /**
     * 购买专业版配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Profession?: string;
    /**
     * 购买物理独占版配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Physical?: string;
    /**
     * 公网带宽 最小3Mbps  最大999Mbps 仅专业版支持填写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicNetwork?: string;
    /**
     * 公网带宽配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicNetworkLimit?: string;
    /**
     * 请求Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestId?: string;
    /**
     * 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: string;
    /**
     * 分页offset
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Offset?: number;
    /**
     * 分页limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Limit?: number;
    /**
     * 是否必须录入tag
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ForceCheckTag?: boolean;
}
/**
 * DeleteInstancePre请求参数结构体
 */
export interface DeleteInstancePreRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
}
/**
 * ClickHouse的Schema
 */
export interface ClickHouseSchema {
    /**
     * 表的列名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColumnName: string;
    /**
     * 该列对应的jsonKey名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JsonKey: string;
    /**
     * 表列项的类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 列项是否允许为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowNull: boolean;
}
/**
 * 消费组主题对象
 */
export interface ConsumerGroupTopic {
    /**
     * 主题ID
     */
    TopicId?: string;
    /**
     * 主题名称
     */
    TopicName?: string;
}
/**
 * 数据处理参数
 */
export interface TransformsParam {
    /**
     * 原始数据
     */
    Content: string;
    /**
     * 处理链
     */
    FieldChain: Array<FieldParam>;
    /**
     * 过滤器
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FilterParam?: Array<FilterMapParam>;
    /**
     * 失败处理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailureParam?: FailureParam;
    /**
     * 测试结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: string;
    /**
     * 数据来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceType?: string;
    /**
     * 输出格式，JSON，ROW，默认为JSON
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OutputFormat?: string;
    /**
     * 输出格式为ROW必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RowParam?: RowParam;
    /**
     * 是否保留数据源Topic元数据信息（源Topic、Partition、Offset），默认为false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeepMetadata?: boolean;
    /**
     * 数组解析
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BatchAnalyse?: BatchAnalyseParam;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * （查询条件）按照ckafka集群实例Id过滤
     */
    InstanceId?: string;
    /**
     * 搜索词   ex:（查询条件）按照实例名称过滤，支持模糊查询
     */
    SearchWord?: string;
    /**
     * （查询条件）实例的状态  0：创建中，1：运行中，2：删除中，5: 隔离中,  7:升级中 不填默认返回全部
     */
    Status?: Array<number | bigint>;
    /**
     * 偏移量，不填默认为0
     */
    Offset?: number;
    /**
     * 返回数量，不填则默认10，最大值100
     */
    Limit?: number;
    /**
     * 已废弃。匹配标签key值。
     */
    TagKey?: string;
    /**
     * （查询条件）私有网络Id
     */
    VpcId?: string;
}
/**
 * CreateInstancePost请求参数结构体
 */
export interface CreateInstancePostRequest {
    /**
     * ckafka集群实例Name，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
     */
    InstanceName: string;
    /**
     * 私有网络Id 创建的实例默认接入点所在的 vpc 对应 vpcId。目前不支持创建基础网络实例，因此该参数必填
     */
    VpcId: string;
    /**
     * 子网id。创建实例默认接入点所在的子网对应的子网 id
     */
    SubnetId: string;
    /**
     * 实例内网峰值带宽。单位 MB/s。标准版需传入当前实例规格所对应的峰值带宽。注意如果创建的实例为专业版实例，峰值带宽，分区数等参数配置需要满足专业版的计费规格。
     */
    BandWidth: number;
    /**
     * 国际站标准版实例规格。目前只有国际站标准版使用当前字段区分规格，国内站标准版使用峰值带宽区分规格。除了国际站标准版外的所有实例填写 1 即可。国际站标准版实例：入门型(general)]填写1；[标准型(standard)]填写2；[进阶型(advanced)]填写3；[容量型(capacity)]填写4；[高阶型1(specialized-1)]填写5；[高阶型2(specialized-2)]填写6；[高阶型3(specialized-3)]填写7；[高阶型4(specialized-4)]填写8。
     */
    InstanceType?: number;
    /**
     * 实例日志的默认最长保留时间，单位分钟。不传入该参数时默认为 1440 分钟（1天），最大30天。当 topic 显式设置消息保留时间时，以 topic 保留时间为准
     */
    MsgRetentionTime?: number;
    /**
     * 创建实例时可以选择集群Id, 该入参表示集群Id。不指定实例所在集群则不传入该参数
     */
    ClusterId?: number;
    /**
     * 实例版本。目前支持 "0.10.2","1.1.1","2.4.1","2.4.2","2.8.1"。"2.4.1" 与 "2.4.2" 属于同一个版本，传任意一个均可。
     */
    KafkaVersion?: string;
    /**
     * 实例类型。"standard"：标准版，"profession"：专业版
     */
    SpecificationsType?: string;
    /**
     * 专业版实例磁盘类型，标准版实例不需要填写。"CLOUD_SSD"：SSD云硬盘；"CLOUD_BASIC"：高性能云硬盘。不传默认值为 "CLOUD_BASIC"
     */
    DiskType?: string;
    /**
     * 实例硬盘大小，需要满足当前实例的计费规格
     */
    DiskSize?: number;
    /**
     * 实例最大分区数量，需要满足当前实例的计费规格
     */
    Partition?: number;
    /**
     * 实例最大 topic 数量，需要满足当前实例的计费规格
     */
    TopicNum?: number;
    /**
     * 实例所在的可用区。当创建多可用区实例时，该参数为创建的默认接入点所在子网的可用区 id
     */
    ZoneId?: number;
    /**
     * 当前实例是否为多可用区实例。
     */
    MultiZoneFlag?: boolean;
    /**
     * 当实例为多可用区实例时，多可用区 id 列表。注意参数 ZoneId 对应的多可用区需要包含在该参数数组中
     */
    ZoneIds?: Array<number | bigint>;
    /**
     * 购买实例数量。非必填，默认值为 1。当传入该参数时，会创建多个 instanceName 加后缀区分的实例
     */
    InstanceNum?: number;
    /**
     * 公网带宽大小，单位 Mbps。默认是没有加上免费 3Mbps 带宽。例如总共需要 3Mbps 公网带宽，此处传 0；总共需要 6Mbps 公网带宽，此处传 3。需要保证传入参数为 3 的整数倍
     */
    PublicNetworkMonthly?: number;
    /**
     * 标签
     */
    Tags?: Array<Tag>;
    /**
     * 弹性带宽开关 0不开启  1开启（0默认）
     */
    ElasticBandwidthSwitch?: number;
}
/**
 * DescribeCkafkaZone返回参数结构体
 */
export interface DescribeCkafkaZoneResponse {
    /**
     * 查询结果复杂对象实体
     */
    Result?: ZoneResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstancePre返回参数结构体
 */
export interface ModifyInstancePreResponse {
    /**
     * 变更预付费实例配置返回结构
     */
    Result?: CreateInstancePreResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 用户名称
     */
    Name: string;
    /**
     * 用户密码
     */
    Password: string;
}
/**
 * 实例购买付费参数
 */
export interface InstanceChargeParam {
    /**
     * 实例付费类型: PREPAID(包年包月), POSTPAID_BY_HOUR(按量付费)
     */
    InstanceChargeType?: string;
    /**
     * 购买时长: 包年包月时需要填写, 按量计费无需填写
     */
    InstanceChargePeriod?: number;
}
/**
 * CreateInstancePre返回参数结构体
 */
export interface CreateInstancePreResponse {
    /**
     * 返回结果
     */
    Result?: CreateInstancePreResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckCdcCluster请求参数结构体
 */
export interface CheckCdcClusterRequest {
    /**
     * 任务ID
     */
    TaskId: number;
}
/**
 * topic 生产消息数据，消费者数据
 */
export interface TopicFlowRankingResult {
    /**
     * Topic 流量数组
     */
    TopicFlow?: Array<TopicFlowRanking>;
    /**
     * 消费者组消费速度排行速度
     */
    ConsumeSpeed?: Array<ConsumerGroupSpeed>;
    /**
     * Topic 消息堆积/占用磁盘排行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicMessageHeap?: Array<TopicMessageHeapRanking>;
    /**
     * Broker Ip 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerIp?: Array<string>;
    /**
     * 单个broker 节点 Topic占用的数据大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerTopicData?: Array<BrokerTopicData>;
    /**
     * 单个Broker 节点Topic 流量的大小(单位MB)
     */
    BrokerTopicFlowData?: Array<BrokerTopicFlowData>;
}
/**
 * InstanceScalingDown返回参数结构体
 */
export interface InstanceScalingDownResponse {
    /**
     * 返回结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: ScalingDownResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRoute请求参数结构体
 */
export interface DescribeRouteRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 路由Id
     */
    RouteId?: number;
}
/**
 * CreatePostPaidInstance返回参数结构体
 */
export interface CreatePostPaidInstanceResponse {
    /**
     * 返回结果
     */
    Result?: CreateInstancePostResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据处理——Value处理参数
 */
export interface ValueParam {
    /**
     * 处理模式，REPLACE替换，SUBSTR截取，DATE日期转换，TRIM去除前后空格，REGEX_REPLACE正则替换，URL_DECODE，LOWERCASE转换为小写
     */
    Type: string;
    /**
     * 替换，TYPE=REPLACE时必传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Replace?: ReplaceParam;
    /**
     * 截取，TYPE=SUBSTR时必传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Substr?: SubstrParam;
    /**
     * 时间转换，TYPE=DATE时必传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Date?: DateParam;
    /**
     * 正则替换，TYPE=REGEX_REPLACE时必传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegexReplace?: RegexReplaceParam;
    /**
     * 值支持一拆多，TYPE=SPLIT时必传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Split?: SplitParam;
    /**
     * key-value二次解析，TYPE=KV时必传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KV?: KVParam;
    /**
     * 处理结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: string;
    /**
     * JsonPath替换，TYPE=JSON_PATH_REPLACE时必传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JsonPathReplace?: JsonPathReplaceParam;
    /**
     * Url解析
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UrlDecode?: UrlDecodeParam;
    /**
     * 小写字符解析
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Lowercase?: LowercaseParam;
}
/**
 * 小写字符解析
 */
export declare type LowercaseParam = null;
/**
 * MySQL修改连接源参数
 */
export interface MySQLModifyConnectParam {
    /**
     * MySQL连接源的实例资源【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * MySQL的连接port【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * MySQL连接源的实例vip【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * MySQL连接源的vpcId【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * MySQL连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * MySQL连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
    /**
     * 当type为TDSQL_C_MYSQL时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 是否是自建的集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
}
/**
 * DescribeGroup返回实体
 */
export interface DescribeGroup {
    /**
     * 消费分组名称
     */
    Group?: string;
    /**
     * 该 group 使用的协议。
     */
    Protocol?: string;
}
/**
 * Datahub请求的taskid
 */
export interface DatahubTaskIdRes {
    /**
     * 任务id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
}
/**
 * DescribeRoute返回参数结构体
 */
export interface DescribeRouteResponse {
    /**
     * 返回的路由信息结果集
     */
    Result?: RouteResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDatahubTopic返回参数结构体
 */
export interface ModifyDatahubTopicResponse {
    /**
     * 返回结果集
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PostgreSQL类型入参
 */
export interface PostgreSQLParam {
    /**
     * PostgreSQL的数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Database: string;
    /**
     * PostgreSQL的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"Schema名.数据表名"的格式进行填写，需要填入正则表达式时，格式为"Schema名\\.数据表名"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Table: string;
    /**
     * 该PostgreSQL在连接管理内的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * 插件名(decoderbufs/pgoutput)，默认为decoderbufs
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PluginName: string;
    /**
     * 复制存量信息(never增量, initial全量)，默认为initial
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotMode?: string;
    /**
     * 上游数据格式(JSON/Debezium), 当数据库同步模式为默认字段匹配时,必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataFormat?: string;
    /**
     * "INSERT" 表示使用 Insert 模式插入，"UPSERT" 表示使用 Upsert 模式插入
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataTargetInsertMode?: string;
    /**
     * 当 "DataInsertMode"="UPSERT" 时，传入当前 upsert 时依赖的主键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataTargetPrimaryKeyField?: string;
    /**
     * 表与消息间的映射关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataTargetRecordMapping?: Array<RecordMapping>;
    /**
     * 是否抛弃解析失败的消息，默认为true
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropInvalidMessage?: boolean;
    /**
     * 输入的table是否为正则表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsTableRegular?: boolean;
    /**
     * 格式：库1.表1:字段1,字段2;库2.表2:字段2，表之间;（分号）隔开，字段之间,（逗号）隔开。不指定的表默认取表的主键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyColumns?: string;
    /**
     * 如果该值为 true，则消息中会携带消息结构体对应的schema，如果该值为false则不会携带
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordWithSchema?: boolean;
}
/**
 * CreateTopicIpWhiteList请求参数结构体
 */
export interface CreateTopicIpWhiteListRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名称
     */
    TopicName: string;
    /**
     * ip白名单列表
     */
    IpWhiteList: Array<string>;
}
/**
 * MariaDB连接源参数
 */
export interface MariaDBConnectParam {
    /**
     * MariaDB的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * MariaDB连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * MariaDB连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * MariaDB连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * MariaDB连接源的实例vip，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * MariaDB连接源的vpcId，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * ModifyTopicAttributes请求参数结构体
 */
export interface ModifyTopicAttributesRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名
     */
    TopicName: string;
    /**
     * 主题备注，是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线-。
     */
    Note?: string;
    /**
     * IP 白名单开关，1：打开；0：关闭。
     */
    EnableWhiteList?: number;
    /**
     * 默认为1。
     */
    MinInsyncReplicas?: number;
    /**
     * 默认为 0，0：false；1：true。
     */
    UncleanLeaderElectionEnable?: number;
    /**
     * 消息保留时间，单位：ms，当前最小值为60000ms。
     */
    RetentionMs?: number;
    /**
     * 主题消息最大值，单位为 Byte，最大值为12582912Byte（即12MB）。
     */
    MaxMessageBytes?: number;
    /**
     * Segment 分片滚动的时长，单位：ms，当前最小为300000ms。
     */
    SegmentMs?: number;
    /**
     * 消息删除策略，可以选择delete 或者compact
     */
    CleanUpPolicy?: string;
    /**
     * Ip白名单列表，配额限制，enableWhileList=1时必选
     */
    IpWhiteList?: Array<string>;
    /**
     * 预设ACL规则, 1:打开  0:关闭，默认不打开
     */
    EnableAclRule?: number;
    /**
     * ACL规则名
     */
    AclRuleName?: string;
    /**
     * 可选, 保留文件大小. 默认为-1,单位bytes, 当前最小值为1048576B
     */
    RetentionBytes?: number;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
    /**
     * 生产限流，单位 MB/s
     */
    QuotaProducerByteRate?: number;
    /**
     * 消费限流，单位 MB/s
     */
    QuotaConsumerByteRate?: number;
    /**
     * topic副本数  最小值 1,最大值 3
     */
    ReplicaNum?: number;
}
/**
 * CreateInstancePre请求参数结构体
 */
export interface CreateInstancePreRequest {
    /**
     * ckafka集群实例Name，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
     */
    InstanceName: string;
    /**
     * 可用区。当购买多可用区实例时，当前参数为主可用区。需要保证传入的参数和 SubnetId 所在子网属于同一个可用区
     */
    ZoneId: number;
    /**
     * 预付费购买时长，例如 "1m",就是一个月
     */
    Period: string;
    /**
     * 国际站标准版实例规格。目前只有国际站标准版使用当前字段区分规格，国内站标准版使用峰值带宽区分规格。除了国际站标准版外的所有实例填写 1 即可。国际站标准版实例：入门型(general)]填写1；[标准型(standard)]填写2；[进阶型(advanced)]填写3；[容量型(capacity)]填写4；[高阶型1(specialized-1)]填写5；[高阶型2(specialized-2)]填写6；[高阶型3(specialized-3)]填写7；[高阶型4(specialized-4)]填写8。
     */
    InstanceType: number;
    /**
     * 私有网络Id，必填
     */
    VpcId?: string;
    /**
     * 子网id，必填
     */
    SubnetId?: string;
    /**
     * 可选。实例日志的最长保留时间，单位分钟，默认为10080（7天），最大30天，不填默认0，代表不开启日志保留时间回收策略
     */
    MsgRetentionTime?: number;
    /**
     * 创建实例时可以选择集群Id, 该入参表示集群Id
     */
    ClusterId?: number;
    /**
     * 预付费自动续费标记，0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)
     */
    RenewFlag?: number;
    /**
     * CKafka版本号[0.10.2、1.1.1、2.4.1、2.4.2、2.8.1、3.2.3], 默认是1.1.1。2.4.1 与 2.4.2 属于同一个版本，传任意一个均可。
     */
    KafkaVersion?: string;
    /**
     * 实例类型: [标准版实例]填写 "standard" (默认), [专业版实例]填写 "profession",[高级版实例]填写"premium"
     */
    SpecificationsType?: string;
    /**
     * 磁盘大小，如果跟控制台规格配比不相符，则无法创建成功
     */
    DiskSize?: number;
    /**
     * 实例带宽,单位MB/s; 最小值:20MB/s, 高级版最大值:360MB/s,专业版最大值:100000MB/s  标准版固定带宽规格: 40MB/s, 100MB/s, 150MB/s
     */
    BandWidth?: number;
    /**
     * 分区大小，如果跟控制台规格配比不相符，则无法创建成功
     */
    Partition?: number;
    /**
     * 标签
     */
    Tags?: Array<Tag>;
    /**
     * 专业版/高级版实例磁盘类型，标准版实例不需要填写。"CLOUD_SSD"：SSD云硬盘；"CLOUD_BASIC"：高性能云硬盘。不传默认为 "CLOUD_BASIC"
     */
    DiskType?: string;
    /**
     * 是否创建跨可用区实例，当前参数为 true 时，zoneIds必填
     */
    MultiZoneFlag?: boolean;
    /**
     * 可用区列表，购买多可用区实例时为必填项
     */
    ZoneIds?: Array<number | bigint>;
    /**
     * 公网带宽大小，单位 Mbps。默认是没有加上免费 3Mbps 带宽。例如总共需要 3Mbps 公网带宽，此处传 0；总共需要 6Mbps 公网带宽，此处传 3。默认值为 0。需要保证传入参数为 3 的整数倍
     */
    PublicNetworkMonthly?: number;
    /**
     * 购买实例数量。非必填，默认值为 1。当传入该参数时，会创建多个 instanceName 加后缀区分的实例
     */
    InstanceNum?: number;
    /**
     * 是否自动选择代金券:1-是;0否。默认为0
     */
    AutoVoucher?: number;
    /**
     * 弹性带宽开关 0不开启  1开启（0默认）
     */
    ElasticBandwidthSwitch?: number;
}
/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
    /**
     * 返回的结果集
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 返回连接源的Id
 */
export interface ConnectResourceResourceIdResp {
    /**
     * 连接源的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
}
/**
 * 购买硬盘参数
 */
export interface InquiryDiskParam {
    /**
     * 购买硬盘类型: SSD(SSD), CLOUD_SSD(SSD云硬盘), CLOUD_PREMIUM(高性能云硬盘), CLOUD_BASIC(云盘)
     */
    DiskType?: string;
    /**
     * 购买硬盘大小: 单位GB
     */
    DiskSize?: number;
}
/**
 * PostgreSQL连接源参数
 */
export interface PostgreSQLConnectParam {
    /**
     * PostgreSQL的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * PostgreSQL连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * PostgreSQL连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * PostgreSQL连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * PostgreSQL连接源的实例vip，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * PostgreSQL连接源的vpcId，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 当type为TDSQL_C_POSTGRESQL时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
    /**
     * PostgreSQL连接源是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
}
/**
 * 订阅信息实体
 */
export interface SubscribedInfo {
    /**
     * 订阅的主题名
     */
    TopicName?: string;
    /**
     * 订阅的分区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Partition?: Array<number | bigint>;
    /**
     * 分区offset信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PartitionOffset?: Array<PartitionOffset>;
    /**
     * 订阅的主题ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId?: string;
}
/**
 * SQLServer类型入参
 */
export interface SQLServerParam {
    /**
     * SQLServer的数据库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Database: string;
    /**
     * SQLServer的数据表名称，"*"为所监听的所有数据库中的非系统表，可以","间隔，监听多个数据表，但数据表需要以"数据库名.数据表名"的格式进行填写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Table: string;
    /**
     * 该SQLServer在连接管理内的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * 复制存量信息(schema_only增量, initial全量)，默认为initial
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotMode?: string;
}
/**
 * 数据处理——Value处理参数——替换参数
 */
export interface ReplaceParam {
    /**
     * 被替换值
     */
    OldValue: string;
    /**
     * 替换值
     */
    NewValue: string;
}
/**
 * BatchCreateAcl请求参数结构体
 */
export interface BatchCreateAclRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * Acl资源类型，(2:TOPIC）
     */
    ResourceType: number;
    /**
     * 资源列表数组
     */
    ResourceNames: Array<string>;
    /**
     * 设置的ACL规则列表
     */
    RuleList: Array<AclRuleInfo>;
}
/**
 * DescribeConnectResources请求参数结构体
 */
export interface DescribeConnectResourcesRequest {
    /**
     * 连接源类型
     */
    Type?: string;
    /**
     * 连接源名称的关键字查询
     */
    SearchWord?: string;
    /**
     * 分页偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100
     */
    Limit?: number;
    /**
     * 连接源的关键字查询, 根据地域查询本地域内连接管理列表中的连接(仅支持包含region输入的连接源)
     */
    ResourceRegion?: string;
}
/**
 * CreatePartition请求参数结构体
 */
export interface CreatePartitionRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名称
     */
    TopicName: string;
    /**
     * 主题分区个数
     */
    PartitionNum: number;
}
/**
 * 删除实例返回任务
 */
export interface InstanceDeleteResponse {
    /**
     * 删除实例返回的任务Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowId?: number;
}
/**
 * DescribeInstanceAttributes请求参数结构体
 */
export interface DescribeInstanceAttributesRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
}
/**
 * 存储着分配给该消费者的 partition 信息
 */
export interface Assignment {
    /**
     * assingment版本信息
     */
    Version?: number;
    /**
     * topic信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Topics?: Array<GroupInfoTopics>;
}
/**
 * Url解析
 */
export interface UrlDecodeParam {
    /**
     * 编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CharsetName?: string;
}
/**
 * CancelAuthorizationToken返回参数结构体
 */
export interface CancelAuthorizationTokenResponse {
    /**
     * 0 成功 非0 失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MySQL连接源参数
 */
export interface MySQLConnectParam {
    /**
     * MySQL的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * MySQL连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * MySQL连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * MySQL连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * MySQL连接源的实例vip，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * MySQL连接源的vpcId，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
    /**
     * 当type为TDSQL_C_MYSQL时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * Mysql 连接源是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
}
/**
 * CreateRoute请求参数结构体
 */
export interface CreateRouteRequest {
    /**
     * 实例唯一id
     */
    InstanceId: string;
    /**
     * 路由网络类型(3:vpc路由;7:内部支撑路由)
     */
    VipType: number;
    /**
     * vpc网络Id
     */
    VpcId?: string;
    /**
     * vpc子网id
     */
    SubnetId?: string;
    /**
     * 访问类型：0-plaintext；1-sasl_plaintext；2-ssl；3-sasl_ssl
     */
    AccessType?: number;
    /**
     * 是否需要权限管理
     */
    AuthFlag?: number;
    /**
     * 调用方appId
     */
    CallerAppid?: number;
    /**
     * 公网带宽
     */
    PublicNetwork?: number;
    /**
     * vip地址
     */
    Ip?: string;
}
/**
 * SQLServer修改连接源参数
 */
export interface SQLServerModifyConnectParam {
    /**
     * SQLServer连接源的实例资源【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * SQLServer的连接port【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * SQLServer连接源的实例vip【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * SQLServer连接源的vpcId【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * SQLServer连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * SQLServer连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * 是否更新到关联的Dip任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * Datahub资源配置
 */
export interface DatahubResource {
    /**
     * 资源类型
     */
    Type: string;
    /**
     * ckafka配置，Type为KAFKA时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaParam?: KafkaParam;
    /**
     * EB配置，Type为EB时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventBusParam?: EventBusParam;
    /**
     * MongoDB配置，Type为MONGODB时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MongoDBParam?: MongoDBParam;
    /**
     * Es配置，Type为ES时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EsParam?: EsParam;
    /**
     * Tdw配置，Type为TDW时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TdwParam?: TdwParam;
    /**
     * Dts配置，Type为DTS时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DtsParam?: DtsParam;
    /**
     * ClickHouse配置，Type为CLICKHOUSE时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClickHouseParam?: ClickHouseParam;
    /**
     * Cls配置，Type为CLS时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClsParam?: ClsParam;
    /**
     * Cos配置，Type为COS时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosParam?: CosParam;
    /**
     * MySQL配置，Type为MYSQL时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MySQLParam?: MySQLParam;
    /**
     * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PostgreSQLParam?: PostgreSQLParam;
    /**
     * Topic配置，Type为Topic时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicParam?: TopicParam;
    /**
     * MariaDB配置，Type为MARIADB时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MariaDBParam?: MariaDBParam;
    /**
     * SQLServer配置，Type为SQLSERVER时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SQLServerParam?: SQLServerParam;
    /**
     * Ctsdb配置，Type为CTSDB时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CtsdbParam?: CtsdbParam;
    /**
     * Scf配置，Type为SCF时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScfParam?: ScfParam;
    /**
     * MQTT配置，Type为 MQTT 时必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MqttParam?: MqttParam;
}
/**
 * ClickHouse类型入参
 */
export interface ClickHouseParam {
    /**
     * ClickHouse的集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cluster: string;
    /**
     * ClickHouse的数据库名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Database: string;
    /**
     * ClickHouse的数据表名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Table: string;
    /**
     * ClickHouse的schema
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Schema: Array<ClickHouseSchema>;
    /**
     * 实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * ClickHouse的连接ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ip?: string;
    /**
     * ClickHouse的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * ClickHouse的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * ClickHouse的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * 实例vip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * 实例的vpcId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
    /**
     * ClickHouse是否抛弃解析失败的消息，默认为true
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropInvalidMessage?: boolean;
    /**
     * ClickHouse 类型，emr-clickhouse : "emr";cdw-clickhouse : "cdwch";自建 : ""
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 当设置成员参数DropInvalidMessageToCls设置为true时,DropInvalidMessage参数失效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DropCls?: DropCls;
    /**
     * 每批次投递到 ClickHouse 表消息数量，默认为 1000 条。
  提高该参数值，有利于减少往  ClickHouse 投递的次数，但在错误消息过多及网络不稳定等极端情况下时，可能导致频繁重试影响效率。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BatchSize?: number;
    /**
     * 每次从 topic 中拉取消息大小，默认为 1MB，即至少要从 topic 中批量拉取 1MB 消息，才进行数据投递到 ClickHouse 操作。
  提高该参数值，有利于减少往  ClickHouse 投递的次数，但在错误消息过多及网络不稳定等极端情况下时，可能导致频繁重试影响效率。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsumerFetchMinBytes?: number;
    /**
     * 每次从 topic 拉取消息最大等待时间，当超过当前最大等待时间时，即使没有拉取到 ConsumerFetchMinBytes 大小，也将进行 ClickHouse 投递操作。
  提高该参数值，有利于减少往  ClickHouse 投递的次数，但在错误消息过多及网络不稳定等极端情况下时，可能导致频繁重试影响效率。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsumerFetchMaxWaitMs?: number;
}
/**
 * 预付费实例相关接口返回结构
 */
export interface CreateInstancePreResp {
    /**
     * 返回的code，0为正常，非0为错误
     */
    ReturnCode?: string;
    /**
     * 成功消息
     */
    ReturnMessage?: string;
    /**
     * 操作型返回的Data数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CreateInstancePreData;
    /**
     * 删除时间。目前该参数字段已废弃，将会在未来被删除
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    DeleteRouteTimestamp?: string;
}
/**
 * ClickHouse修改连接源参数
 */
export interface ClickHouseModifyConnectParam {
    /**
     * ClickHouse连接源的实例资源【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * ClickHouse的连接port【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * ClickHouse连接源的实例vip【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * ClickHouse连接源的vpcId【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * ClickHouse连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * ClickHouse连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * ClickHouse连接源是否为自建集群【不支持修改】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
    /**
     * 是否更新到关联的Datahub任务，默认为true
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * DescribePrometheus返回参数结构体
 */
export interface DescribePrometheusResponse {
    /**
     * Prometheus监控映射列表
     */
    Result?: Array<PrometheusDTO>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据处理——数据处理参数
 */
export interface SMTParam {
    /**
     * 数据处理KEY
     */
    Key: string;
    /**
     * 操作，DATE系统预设-时间戳，CUSTOMIZE自定义，MAPPING映射，JSONPATH
     */
    Operate: string;
    /**
     * 数据类型，ORIGINAL原始，STRING，INT64，FLOAT64，BOOLEAN，MAP，ARRAY
     */
    SchemeType: string;
    /**
     * 数据处理VALUE
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * VALUE处理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueOperate?: ValueParam;
    /**
     * 原始VALUE
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginalValue?: string;
    /**
     * VALUE处理链
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueOperates?: Array<ValueParam>;
}
/**
 * CheckCdcCluster返回参数结构体
 */
export interface CheckCdcClusterResponse {
    /**
     * 返回结果状态Success
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDatahubTasks请求参数结构体
 */
export interface DescribeDatahubTasksRequest {
    /**
     * 返回数量，默认为20，最大值为100
     */
    Limit?: number;
    /**
     * 分页偏移量，默认为0
     */
    Offset?: number;
    /**
     * 过滤条件，按照 TaskName 过滤，支持模糊查询
     */
    SearchWord?: string;
    /**
     * 转储的目标类型
     */
    TargetType?: string;
    /**
     * 任务类型，SOURCE数据接入，SINK数据流出
     */
    TaskType?: string;
    /**
     * 转储的源类型
     */
    SourceType?: string;
    /**
     * 转储的资源
     */
    Resource?: string;
}
/**
 * DescribeTopicFlowRanking请求参数结构体
 */
export interface DescribeTopicFlowRankingRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 排行类别，PRO：Topic生产流量；CON：Topic消费流量
     */
    RankingType: string;
    /**
     * 排行起始日期
     */
    BeginDate?: string;
    /**
     * 排行结束日期
     */
    EndDate?: string;
    /**
     * Broker IP 地址
     */
    BrokerIp?: string;
}
/**
 * Doris 连接源参数
 */
export interface DorisConnectParam {
    /**
     * Doris jdbc 负载均衡连接 port，通常映射到 fe 的 9030 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * Doris 连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * Doris 连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * Doris 连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * Doris 连接源的实例vip，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * Doris 连接源的vpcId，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
    /**
     * Doris 连接源是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt?: boolean;
    /**
     * Doris 的 http 负载均衡连接 port，通常映射到 be 的 8040 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BePort?: number;
}
/**
 * 返回的topic对象
 */
export interface Topic {
    /**
     * 主题的ID
     */
    TopicId?: string;
    /**
     * 主题的名称
     */
    TopicName?: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Note?: string;
}
/**
 * BatchModifyGroupOffsets返回参数结构体
 */
export interface BatchModifyGroupOffsetsResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDatahubTopic请求参数结构体
 */
export interface CreateDatahubTopicRequest {
    /**
     * 名称，是一个不超过 128 个字符的字符串，必须以“AppId-”为首字符，剩余部分可以包含字母、数字和横划线(-)
     */
    Name: string;
    /**
     * Partition个数，大于0
     */
    PartitionNum: number;
    /**
     * 消息保留时间，单位ms，当前最小值为60000ms
     */
    RetentionMs: number;
    /**
     * 主题备注，是一个不超过 64 个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)
     */
    Note?: string;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
}
/**
 * 后付费实例相关接口返回结构
 */
export interface CreateInstancePostResp {
    /**
     * 返回的code，0为正常，非0为错误
     */
    ReturnCode?: string;
    /**
     * 接口返回消息，当接口报错时提示错误信息
     */
    ReturnMessage?: string;
    /**
     * 返回的Data数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CreateInstancePostData;
}
/**
 * DescribeDatahubTopic返回参数结构体
 */
export interface DescribeDatahubTopicResponse {
    /**
     * 返回的结果对象
     */
    Result?: DescribeDatahubTopicResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCdcCluster返回参数结构体
 */
export interface CreateCdcClusterResponse {
    /**
     * 无
     */
    Result?: CdcClusterResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 操作类型返回的Data结构
 */
export interface OperateResponseData {
    /**
     * 流程Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowId?: number;
    /**
     * RouteIdDto
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RouteDTO?: RouteDTO;
}
/**
 * 集群信息实体
 */
export interface ClusterInfo {
    /**
     * 集群Id
     */
    ClusterId?: number;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 集群最大磁盘 单位GB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDiskSize?: number;
    /**
     * 集群最大带宽 单位MB/s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxBandWidth?: number;
    /**
     * 集群当前可用磁盘  单位GB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvailableDiskSize?: number;
    /**
     * 集群当前可用带宽 单位MB/s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvailableBandWidth?: number;
    /**
     * 集群所属可用区，表明集群归属的可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: number;
    /**
     * 集群节点所在的可用区，若该集群为跨可用区集群，则包含该集群节点所在的多个可用区。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneIds?: Array<number | bigint>;
}
/**
 * DeleteGroup请求参数结构体
 */
export interface DeleteGroupRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 消费分组
     */
    Group: string;
}
/**
 * DescribeConnectResource请求参数结构体
 */
export interface DescribeConnectResourceRequest {
    /**
     * 连接源的Id
     */
    ResourceId: string;
}
/**
 * DeleteRoute返回参数结构体
 */
export interface DeleteRouteResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePrometheus返回参数结构体
 */
export interface CreatePrometheusResponse {
    /**
     * 打通普罗米修斯
     */
    Result?: PrometheusResult;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消费分组主题对象
 */
export interface GroupOffsetTopic {
    /**
     * 主题名称
     */
    Topic?: string;
    /**
     * 该主题分区数组，其中每个元素为一个 json object
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Partitions?: Array<GroupOffsetPartition>;
}
/**
 * ModifyGroupOffsets返回参数结构体
 */
export interface ModifyGroupOffsetsResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分区实体
 */
export interface Partition {
    /**
     * 分区ID
     */
    PartitionId?: number;
}
/**
 * CreateAcl返回参数结构体
 */
export interface CreateAclResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数据处理参数
 */
export interface TransformParam {
    /**
     * 解析格式，JSON，DELIMITER分隔符，REGULAR正则提取
     */
    AnalysisFormat: string;
    /**
     * 输出格式
     */
    OutputFormat: string;
    /**
     * 是否保留解析失败数据
     */
    FailureParam: FailureParam;
    /**
     * 原始数据
     */
    Content: string;
    /**
     * 数据来源，TOPIC从源topic拉取，CUSTOMIZE自定义
     */
    SourceType: string;
    /**
     * 分隔符、正则表达式
     */
    Regex?: string;
    /**
     * Map
     */
    MapParam?: Array<MapParam>;
    /**
     * 过滤器
     */
    FilterParam?: Array<FilterMapParam>;
    /**
     * 测试结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: string;
    /**
     * 解析结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AnalyseResult?: Array<MapParam>;
    /**
     * 底层引擎是否使用eb
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UseEventBus?: boolean;
}
/**
 * DeleteInstancePre返回参数结构体
 */
export interface DeleteInstancePreResponse {
    /**
     * 返回结果
     */
    Result?: CreateInstancePreResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Datahub Topic 响应
 */
export interface DatahubTopicResp {
    /**
     * 主题名称
     */
    TopicName?: string;
    /**
     * 主题Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId?: string;
}
/**
 * DeleteRouteTriggerTime返回参数结构体
 */
export interface DeleteRouteTriggerTimeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AppId的查询结果
 */
export interface AppIdResponse {
    /**
     * 符合要求的所有AppId数量
     */
    TotalCount?: number;
    /**
     * 符合要求的App Id列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppIdList?: Array<number | bigint>;
}
/**
 * 预付费/后付费接口中，订单和 CKafka 实例映射数据结构
 */
export interface DealInstanceDTO {
    /**
     * 订单流水
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DealName?: string;
    /**
     * 订单流水对应购买的 CKafka 实例 id 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceIdList?: Array<string>;
}
/**
 * 查询连接源具体数据的返参
 */
export interface DescribeConnectResource {
    /**
     * 连接源的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 连接源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 连接源描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 连接源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 连接源的状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 连接源的创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 连接源的异常信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 该连接源关联的Datahub任务数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatahubTaskCount?: number;
    /**
     * 连接源的当前所处步骤
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentStep?: string;
    /**
     * 创建进度百分比
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskProgress?: number;
    /**
     * 步骤列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StepList?: Array<string>;
    /**
     * Dts配置，Type为DTS时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DtsConnectParam?: DtsConnectParam;
    /**
     * MongoDB配置，Type为MONGODB时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MongoDBConnectParam?: MongoDBConnectParam;
    /**
     * Es配置，Type为ES时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EsConnectParam?: EsConnectParam;
    /**
     * ClickHouse配置，Type为CLICKHOUSE时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClickHouseConnectParam?: ClickHouseConnectParam;
    /**
     * MySQL配置，Type为MYSQL或TDSQL_C_MYSQL时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MySQLConnectParam?: MySQLConnectParam;
    /**
     * PostgreSQL配置，Type为POSTGRESQL或TDSQL_C_POSTGRESQL时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PostgreSQLConnectParam?: PostgreSQLConnectParam;
    /**
     * MariaDB配置，Type为MARIADB时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MariaDBConnectParam?: MariaDBConnectParam;
    /**
     * SQLServer配置，Type为SQLSERVER时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SQLServerConnectParam?: SQLServerConnectParam;
    /**
     * Ctsdb配置，Type为CTSDB时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CtsdbConnectParam?: CtsdbConnectParam;
    /**
     * Doris 配置，Type 为 DORIS 时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DorisConnectParam?: DorisConnectParam;
    /**
     * Kafka配置，Type 为 KAFKA 时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaConnectParam?: KafkaConnectParam;
    /**
     * MQTT配置，Type 为 MQTT 时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MqttConnectParam?: MqttConnectParam;
}
/**
 * DescribeUser请求参数结构体
 */
export interface DescribeUserRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 按照名称过滤
     */
    SearchWord?: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 返回数量
     */
    Limit?: number;
}
/**
 * DescribeTopicSubscribeGroup接口出参
 */
export interface TopicSubscribeGroup {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 消费分组状态数量信息
     */
    StatusCountInfo?: string;
    /**
     * 消费分组信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupsInfo?: Array<GroupInfoResponse>;
    /**
     * 此次请求是否异步的状态。实例里分组较少的会直接返回结果,Status为1。当分组较多时,会异步更新缓存，Status为0时不会返回分组信息，直至Status为1更新完毕返回结果。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
}
/**
 * 高级配置对象
 */
export interface Config {
    /**
     * 消息保留时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retention?: number;
    /**
     * 最小同步复制数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinInsyncReplicas?: number;
    /**
     * 日志清理模式，默认 delete。
  delete：日志按保存时间删除；compact：日志按 key 压缩；compact, delete：日志按 key 压缩且会保存时间删除。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CleanUpPolicy?: string;
    /**
     * Segment 分片滚动的时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentMs?: number;
    /**
     * 0表示 false。 1表示 true。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UncleanLeaderElectionEnable?: number;
    /**
     * Segment 分片滚动的字节数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentBytes?: number;
    /**
     * 最大消息字节数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxMessageBytes?: number;
    /**
     * 消息保留文件大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetentionBytes?: number;
    /**
     * 消息保存的时间类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogMsgTimestampType?: string;
}
/**
 * FetchMessageByOffset请求参数结构体
 */
export interface FetchMessageByOffsetRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名
     */
    Topic: string;
    /**
     * 分区id
     */
    Partition: number;
    /**
     * 位点信息，必填
     */
    Offset?: number;
}
/**
 * ModifyPassword请求参数结构体
 */
export interface ModifyPasswordRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 用户名称
     */
    Name: string;
    /**
     * 用户当前密码
     */
    Password: string;
    /**
     * 用户新密码
     */
    PasswordNew: string;
}
/**
 * DeleteDatahubTopic请求参数结构体
 */
export interface DeleteDatahubTopicRequest {
    /**
     * Topic名称
     */
    Name: string;
}
/**
 * ModifyTopicAttributes返回参数结构体
 */
export interface ModifyTopicAttributesResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeConsumerGroup请求参数结构体
 */
export interface DescribeConsumerGroupRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 可选，用户需要查询的group名称。
     */
    GroupName?: string;
    /**
     * 可选，用户需要查询的group中的对应的topic名称，如果指定了该参数，而group又未指定则忽略该参数。
     */
    TopicName?: string;
    /**
     * 本次返回个数限制，最大支持50
     */
    Limit?: number;
    /**
     * 偏移位置
     */
    Offset?: number;
}
/**
 * 虚拟IP实体
 */
export interface VipEntity {
    /**
     * 虚拟IP
     */
    Vip?: string;
    /**
     * 虚拟端口
     */
    Vport?: string;
}
/**
 * DescribeTopicProduceConnection返回参数结构体
 */
export interface DescribeTopicProduceConnectionResponse {
    /**
     * 链接信息返回结果集
     */
    Result?: Array<DescribeConnectInfoResultDTO>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户实体
 */
export interface User {
    /**
     * 用户id
     */
    UserId?: number;
    /**
     * 用户名称
     */
    Name?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 最后更新时间
     */
    UpdateTime?: string;
}
/**
 * DeleteDatahubTopic返回参数结构体
 */
export interface DeleteDatahubTopicResponse {
    /**
     * 返回的结果集
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SendMessage返回参数结构体
 */
export interface SendMessageResponse {
    /**
     * 消息ID列表
     */
    MessageId?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRoutineMaintenanceTask返回参数结构体
 */
export interface ModifyRoutineMaintenanceTaskResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeConnectResource返回参数结构体
 */
export interface DescribeConnectResourceResponse {
    /**
     * 连接源的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: DescribeConnectResourceResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    Name: string;
    /**
     * 字段的过滤值。
     */
    Values: Array<string>;
}
/**
 * ModifyPassword返回参数结构体
 */
export interface ModifyPasswordResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InquireCkafkaPrice返回参数结构体
 */
export interface InquireCkafkaPriceResponse {
    /**
     * 返回结果
     */
    Result?: InquireCkafkaPriceResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 主题属性返回结果实体
 */
export interface TopicAttributesResponse {
    /**
     * 主题 ID
     */
    TopicId?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 主题备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Note?: string;
    /**
     * 分区个数
     */
    PartitionNum?: number;
    /**
     * IP 白名单开关，1：打开； 0：关闭
     */
    EnableWhiteList?: number;
    /**
     * IP 白名单列表
     */
    IpWhiteList?: Array<string>;
    /**
     * topic 配置数组
     */
    Config?: Config;
    /**
     * 分区详情
     */
    Partitions?: Array<TopicPartitionDO>;
    /**
     * ACL预设策略开关，1：打开； 0：关闭
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableAclRule?: number;
    /**
     * 预设策略列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AclRuleList?: Array<AclRule>;
    /**
     * topic 限流策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QuotaConfig?: InstanceQuotaConfigResp;
    /**
     * 副本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReplicaNum?: number;
}
/**
 * CreateRoute返回参数结构体
 */
export interface CreateRouteResponse {
    /**
     * 返回结果
     */
    Result?: JgwOperateResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Ctsdb类型入参
 */
export interface CtsdbParam {
    /**
     * 连接管理实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource?: string;
    /**
     * Ctsdb的metric
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CtsdbMetric?: string;
}
/**
 * EventBus配置
 */
export interface EventBusParam {
    /**
     * 资源类型。COS/ES/CLS
     */
    Type: string;
    /**
     * 是否为自建集群
     */
    SelfBuilt: boolean;
    /**
     * 实例资源
     */
    Resource: string;
    /**
     * SCF云函数命名空间
     */
    Namespace?: string;
    /**
     * SCF云函数函数名
     */
    FunctionName?: string;
    /**
     * SCF云函数版本及别名
     */
    Qualifier?: string;
}
/**
 * DescribeTopicFlowRanking返回参数结构体
 */
export interface DescribeTopicFlowRankingResponse {
    /**
     * 流量排行返回结果
     */
    Result?: TopicFlowRankingResult;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDatahubTask请求参数结构体
 */
export interface CreateDatahubTaskRequest {
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 任务类型，SOURCE数据接入，SINK数据流出
     */
    TaskType: string;
    /**
     * 数据源
     */
    SourceResource?: DatahubResource;
    /**
     * 数据目标
     */
    TargetResource?: DatahubResource;
    /**
     * 数据处理规则
     */
    TransformParam?: TransformParam;
    /**
     * 实例连接参数【已废弃】
     */
    PrivateLinkParam?: PrivateLinkParam;
    /**
     * 选择所要绑定的SchemaId
     */
    SchemaId?: string;
    /**
     * 数据处理规则
     */
    TransformsParam?: TransformsParam;
    /**
     * 任务Id
     */
    TaskId?: string;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
}
/**
 * 询价返回参数
 */
export interface InquiryPrice {
    /**
     * 单位原价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitPrice?: number;
    /**
     * 折扣单位价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitPriceDiscount?: number;
    /**
     * 合计原价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginalPrice?: number;
    /**
     * 折扣合计价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountPrice?: number;
    /**
     * 折扣(单位是%)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Discount?: number;
    /**
     * 商品数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GoodsNum?: number;
    /**
     * 付费货币
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Currency?: string;
    /**
     * 硬盘专用返回参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskType?: string;
    /**
     * 购买时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeSpan?: number;
    /**
     * 购买时长单位("m"按月, "h"按小时)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeUnit?: string;
    /**
     * 购买数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: number;
    /**
     * 详细类别的价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DetailPrices?: InquiryDetailPrice;
}
/**
 * ModifyGroupOffsets请求参数结构体
 */
export interface ModifyGroupOffsetsRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 消费分组名称
     */
    Group: string;
    /**
     * 重置offset的策略，入参含义 0. 对齐shift-by参数，代表把offset向前或向后移动shift条 1. 对齐参考(by-duration,to-datetime,to-earliest,to-latest),代表把offset移动到指定timestamp的位置 2. 对齐参考(to-offset)，代表把offset移动到指定的offset位置
     */
    Strategy: number;
    /**
     * 需要重置的主题名列表， 不填表示全部
     */
    Topics?: Array<string>;
    /**
     * 当strategy为0时，必须包含该字段，可以大于零代表会把offset向后移动shift条，小于零则将offset向前回溯shift条数。正确重置后新的offset应该是(old_offset + shift)，需要注意的是如果新的offset小于partition的earliest则会设置为earliest，如果大于partition 的latest则会设置为latest
     */
    Shift?: number;
    /**
     * 单位ms。当strategy为1时，必须包含该字段，其中-2表示重置offset到最开始的位置，-1表示重置到最新的位置(相当于清空)，其它值则代表指定的时间，会获取topic中指定时间的offset然后进行重置，需要注意的时，如果指定的时间不存在消息，则获取最末尾的offset。
     */
    ShiftTimestamp?: number;
    /**
     * 需要重新设置的offset位置。当strategy为2，必须包含该字段。
     */
    Offset?: number;
    /**
     * 需要重新设置的partition的列表，如果没有指定Topics参数。则重置全部topics的对应的Partition列表里的partition。指定Topics时则重置指定的topic列表的对应的Partitions列表的partition。
     */
    Partitions?: Array<number | bigint>;
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
    AccessType?: number;
    /**
     * 路由Id
     */
    RouteId?: number;
    /**
     * vip网络类型（1:外网TGW  2:基础网络 3:VPC网络 4:支撑网络(idc 环境) 5:SSL外网访问方式访问 6:黑石环境vpc 7:支撑网络(cvm 环境）
     */
    VipType?: number;
    /**
     * 虚拟IP列表
     */
    VipList?: Array<VipEntity>;
    /**
     * 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 域名port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DomainPort?: number;
    /**
     * 时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteTimestamp?: string;
    /**
     * 子网Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Subnet?: string;
    /**
     * 虚拟IP列表(1对1 broker节点)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrokerVipList?: Array<VipEntity>;
    /**
     * 私有网络Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
}
/**
 * 表示ACL 规则的四元组信息
 */
export interface AclRuleInfo {
    /**
     * Acl操作方式，枚举值(所有操作: All, 读：Read，写：Write)
     */
    Operation: string;
    /**
     * 权限类型，(Deny，Allow)
     */
    PermissionType: string;
    /**
     * 默认为\*，表示任何host都可以访问，当前ckafka不支持host为\* 和 ip网段
     */
    Host: string;
    /**
     * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户。传入格式需要带【User:】前缀。例如用户A，传入为User:A。
     */
    Principal: string;
}
/**
 * RenewCkafkaInstance请求参数结构体
 */
export interface RenewCkafkaInstanceRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 续费时长, 默认为1, 单位是月
     */
    TimeSpan?: number;
}
/**
 * ACL对象实体
 */
export interface Acl {
    /**
     * Acl资源类型，（0:UNKNOWN，1:ANY，2:TOPIC，3:GROUP，4:CLUSTER，5:TRANSACTIONAL_ID）当前只有TOPIC，
     */
    ResourceType?: number;
    /**
     * 资源名称，和resourceType相关如当resourceType为TOPIC时，则该字段表示topic名称，当resourceType为GROUP时，该字段表示group名称
     */
    ResourceName?: string;
    /**
     * 用户列表，默认为User:*，表示任何user都可以访问，当前用户只能是用户列表中包含的用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Principal?: string;
    /**
     * 默认\*,表示任何host都可以访问，当前ckafka不支持host为\*，但是后面开源kafka的产品化会直接支持
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Host?: string;
    /**
     * Acl操作方式(0:UNKNOWN，1:ANY，2:ALL，3:READ，4:WRITE，5:CREATE，6:DELETE，7:ALTER，8:DESCRIBE，9:CLUSTER_ACTION，10:DESCRIBE_CONFIGS，11:ALTER_CONFIGS，12:IDEMPOTEN_WRITE)
     */
    Operation?: number;
    /**
     * 权限类型(0:UNKNOWN，1:ANY，2:DENY，3:ALLOW)
     */
    PermissionType?: number;
}
/**
 * Topic消息保留时间配置返回信息
 */
export interface TopicRetentionTimeConfigRsp {
    /**
     * 期望值，即用户配置的Topic消息保留时间(单位分钟)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Expect?: number;
    /**
     * 当前值，即当前生效值(可能存在动态调整，单位分钟)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Current?: number;
    /**
     * 最近变更时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModTimeStamp?: number;
}
/**
 * 数据处理——二次解析参数
 */
export interface SecondaryAnalyseParam {
    /**
     * 分隔符
     */
    Regex: string;
}
/**
 * DeleteTopicIpWhiteList请求参数结构体
 */
export interface DeleteTopicIpWhiteListRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 主题名
     */
    TopicName: string;
    /**
     * ip白名单列表
     */
    IpWhiteList: Array<string>;
}
/**
 * CreateDatahubTask返回参数结构体
 */
export interface CreateDatahubTaskResponse {
    /**
     * 返回结果
     */
    Result?: CreateDatahubTaskRes;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ClickHouse连接源参数
 */
export interface ClickHouseConnectParam {
    /**
     * ClickHouse的连接port
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * ClickHouse连接源的用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName: string;
    /**
     * ClickHouse连接源的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password: string;
    /**
     * ClickHouse连接源的实例资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * ClickHouse连接源是否为自建集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelfBuilt: boolean;
    /**
     * ClickHouse连接源的实例vip，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceVip?: string;
    /**
     * ClickHouse连接源的vpcId，当为腾讯云实例时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UniqVpcId?: string;
    /**
     * 是否更新到关联的Datahub任务
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUpdate?: boolean;
}
/**
 * DescribeTopicSyncReplica请求参数结构体
 */
export interface DescribeTopicSyncReplicaRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 主题名称
     */
    TopicName: string;
    /**
     * 偏移量，不填默认为0
     */
    Offset?: number;
    /**
     * 返回数量，不填则默认10，最大值20。
     */
    Limit?: number;
    /**
     * 仅筛选未同步副本
     */
    OutOfSyncReplicaOnly?: boolean;
}
/**
 * ModifyDatahubTask请求参数结构体
 */
export interface ModifyDatahubTaskRequest {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 任务名称
     */
    TaskName?: string;
}
/**
 * CreatePrometheus请求参数结构体
 */
export interface CreatePrometheusRequest {
    /**
     * ckafka集群实例Id
     */
    InstanceId: string;
    /**
     * 私有网络Id
     */
    VpcId: string;
    /**
     * 子网Id
     */
    SubnetId: string;
}
/**
 * AclRule列表接口返回结果
 */
export interface AclRuleResp {
    /**
     * 总数据条数
     */
    TotalCount?: number;
    /**
     * AclRule列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AclRuleList?: Array<AclRule>;
}

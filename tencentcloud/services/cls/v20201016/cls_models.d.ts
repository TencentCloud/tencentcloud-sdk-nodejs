/**
 * CreateAlarm返回参数结构体
 */
export interface CreateAlarmResponse {
    /**
      * 告警策略ID。
      */
    AlarmId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 告警策略描述
 */
export interface AlarmInfo {
    /**
      * 告警策略名称。
      */
    Name: string;
    /**
      * 监控对象列表。
      */
    AlarmTargets: Array<AlarmTargetInfo>;
    /**
      * 监控任务运行时间点。
      */
    MonitorTime: MonitorTime;
    /**
      * 触发条件。
      */
    Condition: string;
    /**
      * 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。
      */
    TriggerCount: number;
    /**
      * 告警重复的周期。单位是min。取值范围是0~1440。
      */
    AlarmPeriod: number;
    /**
      * 关联的告警通知模板列表。
      */
    AlarmNoticeIds: Array<string>;
    /**
      * 开启状态。
      */
    Status: boolean;
    /**
      * 告警策略ID。
      */
    AlarmId: string;
    /**
      * 创建时间。
      */
    CreateTime: string;
    /**
      * 最近更新时间。
      */
    UpdateTime: string;
    /**
      * 自定义通知模板
注意：此字段可能返回 null，表示取不到有效值。
      */
    MessageTemplate: string;
    /**
      * 自定义回调模板
注意：此字段可能返回 null，表示取不到有效值。
      */
    CallBack: CallBackInfo;
}
/**
 * DeleteAlarmNotice返回参数结构体
 */
export interface DeleteAlarmNoticeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeLogContext请求参数结构体
 */
export interface DescribeLogContextRequest {
    /**
      * 要查询的日志主题ID
      */
    TopicId: string;
    /**
      * 日志时间,  格式: YYYY-mm-dd HH:MM:SS
      */
    BTime: string;
    /**
      * 日志包序号
      */
    PkgId: string;
    /**
      * 日志包内一条日志的序号
      */
    PkgLogId: number;
    /**
      * 上文日志条数,  默认值10
      */
    PrevLogs?: number;
    /**
      * 下文日志条数,  默认值10
      */
    NextLogs?: number;
}
/**
 * 日志导出信息
 */
export interface ExportInfo {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 日志导出任务ID
      */
    ExportId: string;
    /**
      * 日志导出查询语句
      */
    Query: string;
    /**
      * 日志导出文件名
      */
    FileName: string;
    /**
      * 日志文件大小
      */
    FileSize: number;
    /**
      * 日志导出时间排序
      */
    Order: string;
    /**
      * 日志导出格式
      */
    Format: string;
    /**
      * 日志导出数量
      */
    Count: number;
    /**
      * 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）。
      */
    Status: string;
    /**
      * 日志导出起始时间
      */
    From: number;
    /**
      * 日志导出结束时间
      */
    To: number;
    /**
      * 日志导出路径
      */
    CosPath: string;
    /**
      * 日志导出创建时间
      */
    CreateTime: string;
}
/**
 * CreateMachineGroup返回参数结构体
 */
export interface CreateMachineGroupResponse {
    /**
      * 机器组ID
      */
    GroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签索引配置信息
 */
export interface RuleTagInfo {
    /**
      * 是否大小写敏感
      */
    CaseSensitive: boolean;
    /**
      * 标签索引配置中的字段信息
      */
    KeyValues: Array<KeyValueInfo>;
}
/**
 * SearchLog返回参数结构体
 */
export interface SearchLogResponse {
    /**
      * 加载后续内容的Context
      */
    Context: string;
    /**
      * 日志查询结果是否全部返回
      */
    ListOver: boolean;
    /**
      * 返回的是否为分析结果
      */
    Analysis: boolean;
    /**
      * 如果Analysis为True，则返回分析结果的列名，否则为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    ColNames: Array<string>;
    /**
      * 日志查询结果；当Analysis为True时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<LogInfo>;
    /**
      * 日志分析结果；当Analysis为False时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnalysisResults: Array<LogItems>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
}
/**
 * DescribePartitions请求参数结构体
 */
export interface DescribePartitionsRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
}
/**
 * ModifyAlarm返回参数结构体
 */
export interface ModifyAlarmResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAlarms请求参数结构体
 */
export interface DescribeAlarmsRequest {
    /**
      * <br><li> name

按照【告警策略名称】进行过滤。
类型：String

必选：否

<br><li> alarmId

按照【告警策略ID】进行过滤。
类型：String

必选：否

<br><li> topicId

按照【监控对象的日志主题ID】进行过滤。

类型：String

必选：否

<br><li> enable

按照【启用状态】进行过滤。

类型：String

必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
      */
    Filters?: Array<Filter>;
    /**
      * 分页的偏移量，默认值为0。
      */
    Offset?: number;
    /**
      * 分页单页限制数目，默认值为20，最大值100。
      */
    Limit?: number;
}
/**
 * MergePartition请求参数结构体
 */
export interface MergePartitionRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 合并的PartitionId
      */
    PartitionId: number;
}
/**
 * 回调配置
 */
export interface CallBackInfo {
    /**
      * 回调时的Body
      */
    Body: string;
    /**
      * 回调时的Headers
注意：此字段可能返回 null，表示取不到有效值。
      */
    Headers?: Array<string>;
}
/**
 * 日志告警监控对线
 */
export interface AlarmTargetInfo {
    /**
      * 日志集ID。
      */
    LogsetId: string;
    /**
      * 日志集名称。
      */
    LogsetName: string;
    /**
      * 日志主题ID。
      */
    TopicId: string;
    /**
      * 日志主题名称。
      */
    TopicName: string;
    /**
      * 查询语句。
      */
    Query: string;
    /**
      * 告警对象序号。
      */
    Number: number;
    /**
      * 查询范围起始时间相对当前的历史时间，取值为非正，最大值为0，最小值为-1440。
      */
    StartTimeOffset: number;
    /**
      * 查询范围终止时间相对当前的历史时间，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。
      */
    EndTimeOffset: number;
}
/**
 * DescribeIndex请求参数结构体
 */
export interface DescribeIndexRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
}
/**
 * DeleteMachineGroup返回参数结构体
 */
export interface DeleteMachineGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 创建资源实例时同时绑定的标签对说明
 */
export interface Tag {
    /**
      * 标签键
      */
    Key: string;
    /**
      * 标签值
      */
    Value: string;
}
/**
 * 日志结果信息
 */
export interface LogInfo {
    /**
      * 日志时间，单位ms
      */
    Time: number;
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 日志主题名称
      */
    TopicName: string;
    /**
      * 日志来源IP
      */
    Source: string;
    /**
      * 日志文件名称
      */
    FileName: string;
    /**
      * 日志上报请求包的ID
      */
    PkgId: string;
    /**
      * 请求包内日志的ID
      */
    PkgLogId: string;
    /**
      * 日志内容的Json序列化字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogJson: string;
}
/**
 * 日志主题信息
 */
export interface TopicInfo {
    /**
      * 日志集ID
      */
    LogsetId: string;
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 日志主题名称
      */
    TopicName: string;
    /**
      * 主题分区个数
      */
    PartitionCount: number;
    /**
      * 是否开启索引
      */
    Index: boolean;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 日主主题是否开启采集
      */
    Status: boolean;
    /**
      * 日志主题绑定的标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 该主题是否开启自动分裂
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoSplit: boolean;
    /**
      * 若开启自动分裂的话，该主题能够允许的最大分区数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxSplitPartitions: number;
    /**
      * 日主题的存储类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageType: string;
}
/**
 * CreateIndex返回参数结构体
 */
export interface CreateIndexResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExports请求参数结构体
 */
export interface DescribeExportsRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 分页的偏移量，默认值为0
      */
    Offset?: number;
    /**
      * 分页单页限制数目，默认值为20，最大值100
      */
    Limit?: number;
}
/**
 * ModifyMachineGroup返回参数结构体
 */
export interface ModifyMachineGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 索引规则，FullText、KeyValue、Tag参数必须输入一个有效参数
 */
export interface RuleInfo {
    /**
      * 全文索引配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    FullText?: FullTextInfo;
    /**
      * 键值索引配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyValue?: RuleKeyValueInfo;
    /**
      * 元字段索引配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tag?: RuleTagInfo;
}
/**
 * DeleteMachineGroup请求参数结构体
 */
export interface DeleteMachineGroupRequest {
    /**
      * 机器组ID
      */
    GroupId: string;
}
/**
 * 全文索引配置
 */
export interface FullTextInfo {
    /**
      * 是否大小写敏感
      */
    CaseSensitive: boolean;
    /**
      * 全文索引的分词符，字符串中每个字符代表一个分词符
      */
    Tokenizer: string;
}
/**
 * DescribePartitions返回参数结构体
 */
export interface DescribePartitionsResponse {
    /**
      * 分区列表
      */
    Partitions: Array<PartitionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTopics返回参数结构体
 */
export interface DescribeTopicsResponse {
    /**
      * 日志主题列表
      */
    Topics: Array<TopicInfo>;
    /**
      * 总数目
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * LogItem的数组
 */
export interface LogItems {
    /**
      * 分析结果返回的KV数据对
      */
    Data: Array<LogItem>;
}
/**
 * ModifyAlarmNotice请求参数结构体
 */
export interface ModifyAlarmNoticeRequest {
    /**
      * 告警通知模板ID。
      */
    AlarmNoticeId: string;
    /**
      * 告警模板名称。
      */
    Name?: string;
    /**
      * 告警模板的类型。可选值：
<br><li> Trigger - 告警触发
<br><li> Recovery - 告警恢复
<br><li> All - 告警触发和告警恢复
      */
    Type?: string;
    /**
      * 告警模板接收者信息。
      */
    NoticeReceivers?: Array<NoticeReceiver>;
    /**
      * 告警模板回调信息。
      */
    WebCallbacks?: Array<WebCallback>;
}
/**
 * 键值索引配置
 */
export interface RuleKeyValueInfo {
    /**
      * 是否大小写敏感
      */
    CaseSensitive: boolean;
    /**
      * 需要建立索引的键值对信息；最大只能配置100个键值对
      */
    KeyValues?: Array<KeyValueInfo>;
}
/**
 * CreateAlarm请求参数结构体
 */
export interface CreateAlarmRequest {
    /**
      * 告警策略名称
      */
    Name: string;
    /**
      * 监控对象列表。
      */
    AlarmTargets: Array<AlarmTarget>;
    /**
      * 监控任务运行时间点。
      */
    MonitorTime: MonitorTime;
    /**
      * 触发条件。
      */
    Condition: string;
    /**
      * 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。
      */
    TriggerCount: number;
    /**
      * 告警重复的周期。单位是分钟。取值范围是0~1440。
      */
    AlarmPeriod: number;
    /**
      * 关联的告警通知模板列表。
      */
    AlarmNoticeIds: Array<string>;
    /**
      * 是否开启告警策略。默认值为true
      */
    Status?: boolean;
}
/**
 * DeleteExport返回参数结构体
 */
export interface DeleteExportResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 日志主题分区信息
 */
export interface PartitionInfo {
    /**
      * 分区ID
      */
    PartitionId: number;
    /**
      * 分区的状态（readwrite或者是readonly）
      */
    Status: string;
    /**
      * 分区哈希键起始key
      */
    InclusiveBeginKey: string;
    /**
      * 分区哈希键结束key
      */
    ExclusiveEndKey: string;
    /**
      * 分区创建时间
      */
    CreateTime: string;
    /**
      * 只读分区数据停止写入时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastWriteTime: string;
}
/**
 * 日志中的KV对
 */
export interface LogItem {
    /**
      * 日志Key
      */
    Key: string;
    /**
      * 日志Value
      */
    Value: string;
}
/**
 * ModifyAlarm请求参数结构体
 */
export interface ModifyAlarmRequest {
    /**
      * 告警策略ID。
      */
    AlarmId: string;
    /**
      * 告警策略名称
      */
    Name?: string;
    /**
      * 监控任务运行时间点。
      */
    MonitorTime?: MonitorTime;
    /**
      * 触发条件。
      */
    Condition?: string;
    /**
      * 持续周期。持续满足触发条件TriggerCount个周期后，再进行告警；最小值为1，最大值为10。
      */
    TriggerCount?: number;
    /**
      * 告警重复的周期。单位是分钟。取值范围是0~1440。
      */
    AlarmPeriod?: number;
    /**
      * 关联的告警通知模板列表。
      */
    AlarmNoticeIds?: Array<string>;
    /**
      * 监控对象列表。
      */
    AlarmTargets?: Array<AlarmTarget>;
    /**
      * 是否开启告警策略。
      */
    Status?: boolean;
}
/**
 * SplitPartition请求参数结构体
 */
export interface SplitPartitionRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 待分裂分区ID
      */
    PartitionId: number;
    /**
      * 分区切分的哈希key的位置，只在Number=2时有意义
      */
    SplitKey?: string;
    /**
      * 分区分裂个数(可选)，默认等于2
      */
    Number?: number;
}
/**
 * 机器组信息
 */
export interface MachineGroupInfo {
    /**
      * 机器组ID
      */
    GroupId: string;
    /**
      * 机器组名称
      */
    GroupName: string;
    /**
      * 机器组类型
      */
    MachineGroupType: MachineGroupTypeInfo;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 机器组绑定的标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 是否开启机器组自动更新
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoUpdate: string;
    /**
      * 升级开始时间，建议业务低峰期升级LogListener
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateStartTime: string;
    /**
      * 升级结束时间，建议业务低峰期升级LogListener
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateEndTime: string;
    /**
      * 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceLogging: boolean;
}
/**
 * CreateIndex请求参数结构体
 */
export interface CreateIndexRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 索引规则
      */
    Rule: RuleInfo;
    /**
      * 是否生效，默认为true
      */
    Status?: boolean;
}
/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
    /**
      * 日志集ID
      */
    LogsetId: string;
    /**
      * 日志主题名称
      */
    TopicName: string;
    /**
      * 日志主题分区个数。默认创建1个，最大支持创建10个分区。
      */
    PartitionCount?: number;
    /**
      * 标签描述列表，通过指定该参数可以同时绑定标签到相应的日志主题。最大支持10个标签键值对，同一个资源只能绑定到同一个标签键下。
      */
    Tags?: Array<Tag>;
    /**
      * 是否开启自动分裂，默认值为false
      */
    AutoSplit?: boolean;
    /**
      * 开启自动分裂后，每个主题能够允许的最大分区数，默认值为50
      */
    MaxSplitPartitions?: number;
    /**
      * 日志主题的存储类型，可选值 hot（热存储），cold（冷存储）默认为hot
      */
    StorageType?: string;
}
/**
 * DescribeTopics请求参数结构体
 */
export interface DescribeTopicsRequest {
    /**
      * <br><li> topicName

按照【日志主题名称】进行过滤。
类型：String

必选：否

<br><li> topicId

按照【日志主题ID】进行过滤。
类型：String

必选：否

<br><li> logsetId

按照【日志集ID】进行过滤，可通过调用DescribeLogsets查询已创建的日志集列表或登录控制台进行查看；也可以调用CreateLogset创建新的日志集。

类型：String

必选：否

<br><li> tagKey

按照【标签键】进行过滤。

类型：String

必选：否

<br><li> tag:tagKey

按照【标签键值对】进行过滤。tag-key使用具体的标签键进行替换。使用请参考示例2。

类型：String

必选：否


每次请求的Filters的上限为10，Filter.Values的上限为5。
      */
    Filters?: Array<Filter>;
    /**
      * 分页的偏移量，默认值为0。
      */
    Offset?: number;
    /**
      * 分页单页限制数目，默认值为20，最大值100。
      */
    Limit?: number;
}
/**
 * GetAlarmLog返回参数结构体
 */
export interface GetAlarmLogResponse {
    /**
      * 加载后续内容的Context
      */
    Context: string;
    /**
      * 日志查询结果是否全部返回
      */
    ListOver: boolean;
    /**
      * 返回的是否为分析结果
      */
    Analysis: boolean;
    /**
      * 如果Analysis为True，则返回分析结果的列名，否则为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    ColNames: Array<string>;
    /**
      * 日志查询结果；当Analysis为True时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<LogInfo>;
    /**
      * 日志分析结果；当Analysis为False时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnalysisResults: Array<LogItems>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMachineGroups请求参数结构体
 */
export interface DescribeMachineGroupsRequest {
    /**
      * <br><li> machineGroupName

按照【机器组名称】进行过滤。
类型：String

必选：否

<br><li> machineGroupId

按照【机器组ID】进行过滤。
类型：String

必选：否

<br><li> tagKey

按照【标签键】进行过滤。

类型：String

必选：否

<br><li> tag:tagKey

按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换。
类型：String

必选：否


每次请求的Filters的上限为10，Filter.Values的上限为5。
      */
    Filters?: Array<Filter>;
    /**
      * 分页的偏移量，默认值为0
      */
    Offset?: number;
    /**
      * 分页单页的限制数目，默认值为20，最大值100
      */
    Limit?: number;
}
/**
 * 告警对象
 */
export interface AlarmTarget {
    /**
      * 日志主题ID。
      */
    TopicId: string;
    /**
      * 查询语句。
      */
    Query: string;
    /**
      * 告警对象序号；从1开始递增。
      */
    Number: number;
    /**
      * 查询范围起始时间相对当前的历史时间，单位非分钟，取值为非正，最大值为0，最小值为-1440。
      */
    StartTimeOffset: number;
    /**
      * 查询范围终止时间相对当前的历史时间，单位非分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。
      */
    EndTimeOffset: number;
    /**
      * 日志集ID。
      */
    LogsetId: string;
}
/**
 * ModifyIndex返回参数结构体
 */
export interface ModifyIndexResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteIndex请求参数结构体
 */
export interface DeleteIndexRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
}
/**
 * CreateExport请求参数结构体
 */
export interface CreateExportRequest {
    /**
      * 日志主题
      */
    TopicId: string;
    /**
      * 日志导出检索语句
      */
    Query: string;
    /**
      * 日志导出数量
      */
    Count: number;
    /**
      * 日志导出起始时间，毫秒时间戳
      */
    From: number;
    /**
      * 日志导出结束时间，毫秒时间戳
      */
    To: number;
    /**
      * 日志导出时间排序。desc，asc，默认为desc
      */
    Order?: string;
    /**
      * 日志导出数据格式。json，csv，默认为json
      */
    Format?: string;
}
/**
 * DescribeAlarmNotices返回参数结构体
 */
export interface DescribeAlarmNoticesResponse {
    /**
      * 告警通知模板列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlarmNotices: Array<AlarmNotice>;
    /**
      * 符合条件的告警通知模板总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAlarm返回参数结构体
 */
export interface DeleteAlarmResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 回调地址
 */
export interface WebCallback {
    /**
      * 回调地址。
      */
    Url: string;
    /**
      * 回调的类型。可选值：
<br><li> WeCom
<br><li> Http
      */
    CallbackType: string;
    /**
      * 回调方法。可选值：
<br><li> POST
<br><li> PUT
默认值为POST。CallbackType为Http时为必选。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method?: string;
    /**
      * 请求头。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Headers?: Array<string>;
    /**
      * 请求内容。CallbackType为Http时为必选。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Body?: string;
    /**
      * 序号
      */
    Index?: number;
}
/**
 * DescribeAlarms返回参数结构体
 */
export interface DescribeAlarmsResponse {
    /**
      * 告警策略列表。
      */
    Alarms: Array<AlarmInfo>;
    /**
      * 符合查询条件的告警策略数目。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAlarmNotice返回参数结构体
 */
export interface CreateAlarmNoticeResponse {
    /**
      * 告警模板ID
      */
    AlarmNoticeId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTopic返回参数结构体
 */
export interface ModifyTopicResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteIndex返回参数结构体
 */
export interface DeleteIndexResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyIndex请求参数结构体
 */
export interface ModifyIndexRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 是否生效
      */
    Status?: boolean;
    /**
      * 索引规则，Rule和Effective两个必须有一个参数存在
      */
    Rule?: RuleInfo;
}
/**
 * 需要开启键值索引的字段的索引描述信息
 */
export interface ValueInfo {
    /**
      * 字段类型，目前支持的类型有：long、text、double
      */
    Type: string;
    /**
      * 字段的分词符，只有当字段类型为text时才有意义；输入字符串中的每个字符代表一个分词符
      */
    Tokenizer?: string;
    /**
      * 字段是否开启分析功能
      */
    SqlFlag?: boolean;
}
/**
 * GetAlarmLog请求参数结构体
 */
export interface GetAlarmLogRequest {
    /**
      * 要查询的日志的起始时间，Unix时间戳，单位ms
      */
    From: number;
    /**
      * 要查询的日志的结束时间，Unix时间戳，单位ms
      */
    To: number;
    /**
      * 查询语句，语句长度最大为1024
      */
    Query: string;
    /**
      * 单次查询返回的日志条数，最大值为100
      */
    Limit?: number;
    /**
      * 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容
      */
    Context?: string;
    /**
      * 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
      */
    Sort?: string;
}
/**
 * 过滤器
 */
export interface Filter {
    /**
      * 需要过滤的字段。
      */
    Key: string;
    /**
      * 需要过滤的值。
      */
    Values: Array<string>;
}
/**
 * ModifyTopic请求参数结构体
 */
export interface ModifyTopicRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 日志主题名称
      */
    TopicName?: string;
    /**
      * 标签描述列表，通过指定该参数可以同时绑定标签到相应的日志主题。最大支持10个标签键值对，并且不能有重复的键值对。
      */
    Tags?: Array<Tag>;
    /**
      * 该日志主题是否开始采集
      */
    Status?: boolean;
    /**
      * 是否开启自动分裂
      */
    AutoSplit?: boolean;
    /**
      * 若开启最大分裂，该主题能够能够允许的最大分区数
      */
    MaxSplitPartitions?: number;
}
/**
 * DeleteExport请求参数结构体
 */
export interface DeleteExportRequest {
    /**
      * 日志导出ID
      */
    ExportId: string;
}
/**
 * SplitPartition返回参数结构体
 */
export interface SplitPartitionResponse {
    /**
      * 分裂结果集
      */
    Partitions: Array<PartitionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAlarm请求参数结构体
 */
export interface DeleteAlarmRequest {
    /**
      * 告警策略ID。
      */
    AlarmId: string;
}
/**
 * 告警通知模板类型
 */
export interface AlarmNotice {
    /**
      * 告警通知模板名称。
      */
    Name: string;
    /**
      * 告警模板的类型。可选值：
<br><li> Trigger - 告警触发
<br><li> Recovery - 告警恢复
<br><li> All - 告警触发和告警恢复
      */
    Type: string;
    /**
      * 告警通知模板接收者信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NoticeReceivers: Array<NoticeReceiver>;
    /**
      * 告警通知模板回调信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    WebCallbacks: Array<WebCallback>;
    /**
      * 告警通知模板ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlarmNoticeId: string;
    /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 最近更新时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
}
/**
 * ModifyAlarmNotice返回参数结构体
 */
export interface ModifyAlarmNoticeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMachines返回参数结构体
 */
export interface DescribeMachinesResponse {
    /**
      * 机器状态信息组
      */
    Machines: Array<MachineInfo>;
    /**
      * 机器组是否开启自动升级功能
      */
    AutoUpdate: number;
    /**
      * 机器组自动升级功能预设开始时间
      */
    UpdateStartTime: string;
    /**
      * 机器组自动升级功能预设结束时间
      */
    UpdateEndTime: string;
    /**
      * 当前用户可用最新的Loglistener版本
      */
    LatestAgentVersion: string;
    /**
      * 是否开启服务日志
      */
    ServiceLogging: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 机器状态信息
 */
export interface MachineInfo {
    /**
      * 机器的IP
      */
    Ip: string;
    /**
      * 机器状态，0:异常，1:正常
      */
    Status: number;
    /**
      * 机器离线时间，空为正常，异常返回具体时间
      */
    OfflineTime: string;
    /**
      * 机器是否开启自动升级。0:关闭，1:开启
      */
    AutoUpdate: number;
    /**
      * 机器当前版本号。
      */
    Version: string;
    /**
      * 机器升级功能状态。
      */
    UpdateStatus: number;
    /**
      * 机器升级结果标识。
      */
    ErrCode: number;
    /**
      * 机器升级结果信息。
      */
    ErrMsg: string;
}
/**
 * 日志上下文信息
 */
export interface LogContextInfo {
    /**
      * 日志来源设备
      */
    Source: string;
    /**
      * 采集路径
      */
    Filename: string;
    /**
      * 日志内容
      */
    Content: string;
    /**
      * 日志包序号
      */
    PkgId: string;
    /**
      * 日志包内一条日志的序号
      */
    PkgLogId: number;
    /**
      * 日志时间戳
      */
    BTime: number;
}
/**
 * DescribeLogContext返回参数结构体
 */
export interface DescribeLogContextResponse {
    /**
      * 日志上下文信息集合
      */
    LogContextInfos: Array<LogContextInfo>;
    /**
      * 上文日志是否已经返回
      */
    PrevOver: boolean;
    /**
      * 下文日志是否已经返回
      */
    NextOver: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 机器组类型描述
 */
export interface MachineGroupTypeInfo {
    /**
      * 机器组类型，ip表示该机器组Values中存的是采集机器的IP地址，label表示该机器组Values中存储的是机器的标签
      */
    Type: string;
    /**
      * 机器描述列表
      */
    Values: Array<string>;
}
/**
 * 键值或者元字段索引的字段信息
 */
export interface KeyValueInfo {
    /**
      * 需要配置键值或者元字段索引的字段
      */
    Key: string;
    /**
      * 字段的索引描述信息
      */
    Value: ValueInfo;
}
/**
 * ModifyMachineGroup请求参数结构体
 */
export interface ModifyMachineGroupRequest {
    /**
      * 机器组ID
      */
    GroupId: string;
    /**
      * 机器组名称
      */
    GroupName?: string;
    /**
      * 机器组类型
      */
    MachineGroupType?: MachineGroupTypeInfo;
    /**
      * 标签列表
      */
    Tags?: Array<Tag>;
    /**
      * 是否开启机器组自动更新
      */
    AutoUpdate?: boolean;
    /**
      * 升级开始时间，建议业务低峰期升级LogListener
      */
    UpdateStartTime?: string;
    /**
      * 升级结束时间，建议业务低峰期升级LogListener
      */
    UpdateEndTime?: string;
    /**
      * 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费
      */
    ServiceLogging?: boolean;
}
/**
 * DescribeAlarmNotices请求参数结构体
 */
export interface DescribeAlarmNoticesRequest {
    /**
      * <br><li> name

按照【告警通知模板名称】进行过滤。
类型：String

必选：否

<br><li> alarmNoticeId

按照【告警通知模板ID】进行过滤。
类型：String

必选：否

<br><li> uid

按照【接收用户ID】进行过滤。

类型：String

必选：否

<br><li> groupId

按照【用户组ID】进行过滤。

类型：String

必选：否

每次请求的Filters的上限为10，Filter.Values的上限为5。
      */
    Filters?: Array<Filter>;
    /**
      * 分页的偏移量，默认值为0。
      */
    Offset?: number;
    /**
      * 分页单页限制数目，默认值为20，最大值100。
      */
    Limit?: number;
}
/**
 * 告警通知接收者信息
 */
export interface NoticeReceiver {
    /**
      * 接受者类型。可选值：
<br><li> Uin - 用户ID
<br><li> Group - 用户组ID
暂不支持其余接收者类型。
      */
    ReceiverType: string;
    /**
      * 接收者。
      */
    ReceiverIds: Array<number>;
    /**
      * 通知接收渠道。
<br><li> Email - 邮件
<br><li> Sms - 短信
<br><li> WeChat - 微信
<br><li> Phone - 电话
      */
    ReceiverChannels: Array<string>;
    /**
      * 允许接收信息的开始时间。
      */
    StartTime?: string;
    /**
      * 允许接收信息的结束时间。
      */
    EndTime?: string;
    /**
      * 位序
      */
    Index?: number;
}
/**
 * CreateExport返回参数结构体
 */
export interface CreateExportResponse {
    /**
      * 日志导出ID。
      */
    ExportId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAlarmNotice请求参数结构体
 */
export interface DeleteAlarmNoticeRequest {
    /**
      * 告警通知模板
      */
    AlarmNoticeId: string;
}
/**
 * 告警策略中监控任务的执行时间点
 */
export interface MonitorTime {
    /**
      * 可选值：
<br><li> Period - 周期执行
<br><li> Fixed - 定期执行
      */
    Type: string;
    /**
      * 执行的周期，或者定制执行的时间节点。单位为分钟，取值范围为1~1440。
      */
    Time: number;
}
/**
 * SearchLog请求参数结构体
 */
export interface SearchLogRequest {
    /**
      * 要查询的日志主题ID
      */
    TopicId: string;
    /**
      * 要查询的日志的起始时间，Unix时间戳，单位ms
      */
    From: number;
    /**
      * 要查询的日志的结束时间，Unix时间戳，单位ms
      */
    To: number;
    /**
      * 查询语句，语句长度最大为4096
      */
    Query: string;
    /**
      * 单次查询返回的日志条数，最大值为100
      */
    Limit?: number;
    /**
      * 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容
      */
    Context?: string;
    /**
      * 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
      */
    Sort?: string;
}
/**
 * CreateMachineGroup请求参数结构体
 */
export interface CreateMachineGroupRequest {
    /**
      * 机器组名字，不能重复
      */
    GroupName: string;
    /**
      * 创建机器组类型，Type为ip，Values中为Ip字符串列表创建机器组，Type为label， Values中为标签字符串列表创建机器组
      */
    MachineGroupType: MachineGroupTypeInfo;
    /**
      * 标签描述列表，通过指定该参数可以同时绑定标签到相应的机器组。最大支持10个标签键值对，同一个资源只能绑定到同一个标签键下。
      */
    Tags?: Array<Tag>;
    /**
      * 是否开启机器组自动更新
      */
    AutoUpdate?: boolean;
    /**
      * 升级开始时间，建议业务低峰期升级LogListener
      */
    UpdateStartTime?: string;
    /**
      * 升级结束时间，建议业务低峰期升级LogListener
      */
    UpdateEndTime?: string;
    /**
      * 是否开启服务日志，用于记录因Loglistener 服务自身产生的log，开启后，会创建内部日志集cls_service_logging和日志主题loglistener_status,loglistener_alarm,loglistener_business，不产生计费
      */
    ServiceLogging?: boolean;
}
/**
 * DescribeExports返回参数结构体
 */
export interface DescribeExportsResponse {
    /**
      * 日志导出列表
      */
    Exports: Array<ExportInfo>;
    /**
      * 总数目
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAlarmNotice请求参数结构体
 */
export interface CreateAlarmNoticeRequest {
    /**
      * 告警模板名称。
      */
    Name: string;
    /**
      * 告警模板的类型。可选值：
<br><li> Trigger - 告警触发
<br><li> Recovery - 告警恢复
<br><li> All - 告警触发和告警恢复
      */
    Type: string;
    /**
      * 告警模板接收者信息。
      */
    NoticeReceivers?: Array<NoticeReceiver>;
    /**
      * 告警模板回调信息。
      */
    WebCallbacks?: Array<WebCallback>;
}
/**
 * DescribeIndex返回参数结构体
 */
export interface DescribeIndexResponse {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 是否生效
      */
    Status: boolean;
    /**
      * 索引配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rule: RuleInfo;
    /**
      * 索引修改时间，初始值为索引创建时间。
      */
    ModifyTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMachineGroups返回参数结构体
 */
export interface DescribeMachineGroupsResponse {
    /**
      * 机器组信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    MachineGroups: Array<MachineGroupInfo>;
    /**
      * 分页的总数目
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMachines请求参数结构体
 */
export interface DescribeMachinesRequest {
    /**
      * 查询的机器组ID
      */
    GroupId: string;
}
/**
 * MergePartition返回参数结构体
 */
export interface MergePartitionResponse {
    /**
      * 合并结果集
      */
    Partitions: Array<PartitionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

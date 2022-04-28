/**
 * UploadLog返回参数结构体
 */
export interface UploadLogResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
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
    /**
      * 多维分析设置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Analysis: Array<AnalysisDimensional>;
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
    /**
      * 日志来源主机名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostName: string;
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
 * DescribeLogHistogram请求参数结构体
 */
export interface DescribeLogHistogramRequest {
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
      * 查询语句
      */
    Query: string;
    /**
      * 时间间隔: 单位ms
      */
    Interval?: number;
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
      * 日志时间,  格式: YYYY-mm-dd HH:MM:SS.FFF
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
 * DeleteShipper请求参数结构体
 */
export interface DeleteShipperRequest {
    /**
      * 投递规则ID
      */
    ShipperId: string;
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
    /**
      * 生命周期，单位天，可取值范围1~3600。取值为3640时代表永久保存
      */
    Period?: number;
}
/**
 * DeleteLogset返回参数结构体
 */
export interface DeleteLogsetResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Parquet内容描述
 */
export interface ParquetKeyInfo {
    /**
      * 键值名称
      */
    KeyName: string;
    /**
      * 数据类型，目前支持6种类型：string、boolean、int32、int64、float、double
      */
    KeyType: string;
    /**
      * 解析失败赋值信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyNonExistingField: string;
}
/**
 * DescribeShipperTasks返回参数结构体
 */
export interface DescribeShipperTasksResponse {
    /**
      * 投递任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tasks: Array<ShipperTaskInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DescribeConfigMachineGroups请求参数结构体
 */
export interface DescribeConfigMachineGroupsRequest {
    /**
      * 采集配置ID
      */
    ConfigId: string;
}
/**
 * ModifyConfigExtra返回参数结构体
 */
export interface ModifyConfigExtraResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyLogset请求参数结构体
 */
export interface ModifyLogsetRequest {
    /**
      * 日志集ID
      */
    LogsetId: string;
    /**
      * 日志集名称
      */
    LogsetName?: string;
    /**
      * 日志集的绑定的标签键值对。最大支持10个标签键值对，同一个资源只能同时绑定一个标签键。
      */
    Tags?: Array<Tag>;
}
/**
 * CreateLogset请求参数结构体
 */
export interface CreateLogsetRequest {
    /**
      * 日志集名字，不能重名
      */
    LogsetName: string;
    /**
      * 标签描述列表。最大支持10个标签键值对，并且不能有重复的键值对
      */
    Tags?: Array<Tag>;
}
/**
 * ModifyDataTransform请求参数结构体
 */
export interface ModifyDataTransformRequest {
    /**
      * 加工任务id
      */
    TaskId: string;
    /**
      * 加工任务名称
      */
    Name?: string;
    /**
      * 加工逻辑函数
      */
    EtlContent?: string;
    /**
      * 任务启动状态. 默认为1，正常开启,  2关闭
      */
    EnableFlag?: number;
    /**
      * 加工任务目的topic_id以及别名
      */
    DstResources?: Array<DataTransformResouceInfo>;
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
 * SearchLog返回参数结构体
 */
export interface SearchLogResponse {
    /**
      * 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时
      */
    Context: string;
    /**
      * 符合检索条件的日志是否已全部返回，如未全部返回可使用Context参数获取后续更多日志
注意：仅当检索分析语句(Query)不包含SQL时有效
      */
    ListOver: boolean;
    /**
      * 返回的是否为统计分析（即SQL）结果
      */
    Analysis: boolean;
    /**
      * 匹配检索条件的原始日志
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<LogInfo>;
    /**
      * 日志统计分析结果的列名
当UseNewAnalysis为false时生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    ColNames: Array<string>;
    /**
      * 日志统计分析结果
当UseNewAnalysis为false时生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnalysisResults: Array<LogItems>;
    /**
      * 日志统计分析结果
当UseNewAnalysis为true时生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnalysisRecords: Array<string>;
    /**
      * 日志统计分析结果的列属性
当UseNewAnalysis为true时生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    Columns: Array<Column>;
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
 * 自建k8s-容器标准输出信息
 */
export interface ContainerStdoutInfo {
    /**
      * 是否所有容器
      */
    AllContainers: boolean;
    /**
      * container为空表所有的，不为空采集指定的容器
注意：此字段可能返回 null，表示取不到有效值。
      */
    Container?: string;
    /**
      * namespace可以多个，用分隔号分割,例如A,B；为空或者没有这个字段，表示所有namespace
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace?: string;
    /**
      * pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncludeLabels?: Array<string>;
    /**
      * 工作负载信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkLoads?: Array<ContainerWorkLoadInfo>;
    /**
      * 需要排除的namespace可以多个，用分隔号分割,例如A,B
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExcludeNamespace?: string;
    /**
      * 需要排除的pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExcludeLabels?: Array<string>;
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
 * DescribeShipperTasks请求参数结构体
 */
export interface DescribeShipperTasksRequest {
    /**
      * 投递规则ID
      */
    ShipperId: string;
    /**
      * 查询的开始时间戳，支持最近3天的查询， 毫秒
      */
    StartTime: number;
    /**
      * 查询的结束时间戳， 毫秒
      */
    EndTime: number;
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

备注：enable参数值范围: 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False。 其它值将返回参数错误信息.

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
 * DescribeShippers返回参数结构体
 */
export interface DescribeShippersResponse {
    /**
      * 投递规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Shippers: Array<ShipperInfo>;
    /**
      * 本次查询获取到的总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateConfigExtra返回参数结构体
 */
export interface CreateConfigExtraResponse {
    /**
      * 采集配置扩展信息ID
      */
    ConfigExtraId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyShipper返回参数结构体
 */
export interface ModifyShipperResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RetryShipperTask请求参数结构体
 */
export interface RetryShipperTaskRequest {
    /**
      * 投递规则ID
      */
    ShipperId: string;
    /**
      * 投递任务ID
      */
    TaskId: string;
}
/**
 * 自建k8s-工作负载信息
 */
export interface ContainerWorkLoadInfo {
    /**
      * 工作负载的类型
      */
    Kind: string;
    /**
      * 工作负载的名称
      */
    Name: string;
    /**
      * 容器名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Container?: string;
    /**
      * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace?: string;
}
/**
 * DescribeConfigExtras返回参数结构体
 */
export interface DescribeConfigExtrasResponse {
    /**
      * 采集配置列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Configs: Array<ConfigExtraInfo>;
    /**
      * 过滤到的总数目
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * OpenKafkaConsumer返回参数结构体
 */
export interface OpenKafkaConsumerResponse {
    /**
      * 待消费TopicId
      */
    TopicID: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 告警对象
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
      * 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。
      */
    StartTimeOffset: number;
    /**
      * 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。
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
 * DescribeConfigs返回参数结构体
 */
export interface DescribeConfigsResponse {
    /**
      * 采集配置列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Configs: Array<ConfigInfo>;
    /**
      * 过滤到的总数目
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateLogset返回参数结构体
 */
export interface CreateLogsetResponse {
    /**
      * 日志集ID
      */
    LogsetId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * 日志提取规则
 */
export interface ExtractRuleInfo {
    /**
      * 时间字段的key名字，time_key和time_format必须成对出现
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeKey?: string;
    /**
      * 时间字段的格式，参考c语言的strftime函数对于时间的格式说明输出参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeFormat?: string;
    /**
      * 分隔符类型日志的分隔符，只有log_type为delimiter_log时有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    Delimiter?: string;
    /**
      * 整条日志匹配规则，只有log_type为fullregex_log时有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogRegex?: string;
    /**
      * 行首匹配规则，只有log_type为multiline_log或fullregex_log时有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    BeginRegex?: string;
    /**
      * 取的每个字段的key名字，为空的key代表丢弃这个字段，只有log_type为delimiter_log时有效，json_log的日志使用json本身的key
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keys?: Array<string>;
    /**
      * 需要过滤日志的key，及其对应的regex
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterKeyRegex?: Array<KeyRegexInfo>;
    /**
      * 解析失败日志是否上传，true表示上传，false表示不上传
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnMatchUpLoadSwitch?: boolean;
    /**
      * 失败日志的key
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnMatchLogKey?: string;
    /**
      * 增量采集模式下的回溯数据量，默认-1（全量采集）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Backtracking?: number;
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
    /**
      * 生命周期，单位天，可取值范围1~3600。取值为3640时代表永久保存
注意：此字段可能返回 null，表示取不到有效值。
      */
    Period: number;
}
/**
 * DeleteDataTransform返回参数结构体
 */
export interface DeleteDataTransformResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteConfigExtra返回参数结构体
 */
export interface DeleteConfigExtraResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyConsumer请求参数结构体
 */
export interface ModifyConsumerRequest {
    /**
      * 投递任务绑定的日志主题 ID
      */
    TopicId: string;
    /**
      * 投递任务是否生效，默认不生效
      */
    Effective?: boolean;
    /**
      * 是否投递日志的元数据信息，默认为 false
      */
    NeedContent?: boolean;
    /**
      * 如果需要投递元数据信息，元数据信息的描述
      */
    Content?: ConsumerContent;
    /**
      * CKafka的描述
      */
    Ckafka?: Ckafka;
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
 * DeleteConfigFromMachineGroup返回参数结构体
 */
export interface DeleteConfigFromMachineGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateConsumer返回参数结构体
 */
export interface CreateConsumerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * 数据加工的资源信息
 */
export interface DataTransformResouceInfo {
    /**
      * 目标主题id
      */
    TopicId: string;
    /**
      * 别名
      */
    Alias: string;
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
    /**
      * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainZH?: boolean;
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
 * DescribeConfigMachineGroups返回参数结构体
 */
export interface DescribeConfigMachineGroupsResponse {
    /**
      * 采集规则配置绑定的机器组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    MachineGroups: Array<MachineGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
    /**
      * 用户自定义告警内容
      */
    MessageTemplate?: string;
    /**
      * 用户自定义回调
      */
    CallBack?: CallBackInfo;
    /**
      * 多维分析
      */
    Analysis?: Array<AnalysisDimensional>;
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
      * 通知渠道组ID。
      */
    AlarmNoticeId: string;
    /**
      * 通知渠道组名称。
      */
    Name?: string;
    /**
      * 通知类型。可选值：
<li> Trigger - 告警触发
<li> Recovery - 告警恢复
<li> All - 告警触发和告警恢复
      */
    Type?: string;
    /**
      * 通知接收对象。
      */
    NoticeReceivers?: Array<NoticeReceiver>;
    /**
      * 接口回调信息（包括企业微信）。
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
    /**
      * 用户自定义告警内容
      */
    MessageTemplate?: string;
    /**
      * 用户自定义回调
      */
    CallBack?: CallBackInfo;
    /**
      * 多维分析
      */
    Analysis?: Array<AnalysisDimensional>;
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
 * DescribeShippers请求参数结构体
 */
export interface DescribeShippersRequest {
    /**
      * <br><li> shipperName

按照【投递规则名称】进行过滤。
类型：String

必选：否

<br><li> shipperId

按照【投递规则ID】进行过滤。
类型：String

必选：否

<br><li> topicId

按照【日志主题】进行过滤。

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
 * 黑名单path信息
 */
export interface ExcludePathInfo {
    /**
      * 类型，选填File或Path
      */
    Type: string;
    /**
      * Type对应的具体内容
      */
    Value: string;
}
/**
 * 投递日志的过滤规则
 */
export interface FilterRuleInfo {
    /**
      * 过滤规则Key
      */
    Key: string;
    /**
      * 过滤规则
      */
    Regex: string;
    /**
      * 过滤规则Value
      */
    Value: string;
}
/**
 * 特殊采集规则配置信息
 */
export interface ConfigExtraInfo {
    /**
      * 采集规则扩展配置ID
      */
    ConfigExtraId: string;
    /**
      * 采集规则名称
      */
    Name: string;
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 类型：container_stdout、container_file、host_file
      */
    Type: string;
    /**
      * 节点文件配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostFile: HostFileInfo;
    /**
      * 容器文件路径信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerFile: ContainerFileInfo;
    /**
      * 容器标准输出信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerStdout: ContainerStdoutInfo;
    /**
      * 日志格式化方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogFormat: string;
    /**
      * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogType: string;
    /**
      * 提取规则，如果设置了ExtractRule，则必须设置LogType
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtractRule: ExtractRuleInfo;
    /**
      * 采集黑名单路径列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExcludePaths: Array<ExcludePathInfo>;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 用户自定义解析字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserDefineRule: string;
    /**
      * 机器组ID
      */
    GroupId: string;
    /**
      * 自建采集配置标
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigFlag: string;
    /**
      * 日志集ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogsetId: string;
    /**
      * 日志集name
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogsetName: string;
    /**
      * 日志主题name
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicName: string;
}
/**
 * RetryShipperTask返回参数结构体
 */
export interface RetryShipperTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DescribeMachineGroupConfigs返回参数结构体
 */
export interface DescribeMachineGroupConfigsResponse {
    /**
      * 采集规则配置列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Configs: Array<ConfigInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DescribeLogHistogram返回参数结构体
 */
export interface DescribeLogHistogramResponse {
    /**
      * 统计周期： 单位ms
      */
    Interval: number;
    /**
      * 命中关键字的日志总条数
      */
    TotalCount: number;
    /**
      * 周期内统计结果详情
      */
    HistogramInfos: Array<HistogramInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CloseKafkaConsumer返回参数结构体
 */
export interface CloseKafkaConsumerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 元字段索引配置
 */
export interface RuleTagInfo {
    /**
      * 是否大小写敏感
      */
    CaseSensitive: boolean;
    /**
      * 元字段索引配置中的字段信息
      */
    KeyValues: Array<KeyValueInfo>;
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
    /**
      * 全文索引系统预置字段标记，默认false。  false:不包含系统预置字段， true:包含系统预置字段
      */
    IncludeInternalFields?: boolean;
    /**
      * 元数据相关标志位，默认为0。 0：全文索引包括开启键值索引的元数据字段， 1：全文索引包括所有元数据字段，2：全文索引不包括元数据字段。
      */
    MetadataFlag?: number;
}
/**
 * DeleteConsumer返回参数结构体
 */
export interface DeleteConsumerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTopics请求参数结构体
 */
export interface DescribeTopicsRequest {
    /**
      * <br><li> topicName按照【日志主题名称】进行过滤。类型：String必选：否<br><li> logsetName按照【日志集名称】进行过滤。类型：String必选：否<br><li> topicId按照【日志主题ID】进行过滤。类型：String必选：否<br><li> logsetId按照【日志集ID】进行过滤，可通过调用DescribeLogsets查询已创建的日志集列表或登录控制台进行查看；也可以调用CreateLogset创建新的日志集。类型：String必选：否<br><li> tagKey按照【标签键】进行过滤。类型：String必选：否<br><li> tag:tagKey按照【标签键值对】进行过滤。tagKey使用具体的标签键进行替换，例如tag:exampleKey。类型：String必选：否<br><li> storageType按照【日志主题的存储类型】进行过滤。可选值 hot（标准存储），cold（低频存储）类型：String必选：否每次请求的Filters的上限为10，Filter.Values的上限为100。
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
      * 新的日志分析结果; UseNewAnalysis为true有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnalysisRecords: Array<string>;
    /**
      * 日志分析的列属性; UseNewAnalysis为true有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    Columns: Array<Column>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 是否开启自动分裂，默认值为true
      */
    AutoSplit?: boolean;
    /**
      * 开启自动分裂后，每个主题能够允许的最大分区数，默认值为50
      */
    MaxSplitPartitions?: number;
    /**
      * 日志主题的存储类型，可选值 hot（标准存储），cold（低频存储）；默认为hot。
      */
    StorageType?: string;
    /**
      * 生命周期，单位天，可取值范围1~3600。取值为3640时代表永久保存
      */
    Period?: number;
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
      * 查询范围起始时间相对于告警执行时间的偏移，单位为分钟，取值为非正，最大值为0，最小值为-1440。
      */
    StartTimeOffset: number;
    /**
      * 查询范围终止时间相对于告警执行时间的偏移，单位为分钟，取值为非正，须大于StartTimeOffset，最大值为0，最小值为-1440。
      */
    EndTimeOffset: number;
    /**
      * 日志集ID。
      */
    LogsetId: string;
}
/**
 * OpenKafkaConsumer请求参数结构体
 */
export interface OpenKafkaConsumerRequest {
    /**
      * CLS控制台创建的TopicId
      */
    FromTopicId: string;
}
/**
 * DeleteConfig返回参数结构体
 */
export interface DeleteConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DeleteConsumer请求参数结构体
 */
export interface DeleteConsumerRequest {
    /**
      * 投递任务绑定的日志主题 ID
      */
    TopicId: string;
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
 * DescribeConsumer返回参数结构体
 */
export interface DescribeConsumerResponse {
    /**
      * 投递任务是否生效
      */
    Effective: boolean;
    /**
      * 是否投递日志的元数据信息
      */
    NeedContent: boolean;
    /**
      * 如果需要投递元数据信息，元数据信息的描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: ConsumerContent;
    /**
      * CKafka的描述
      */
    Ckafka: Ckafka;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UploadLog请求参数结构体
 */
export interface UploadLogRequest {
    /**
      * 主题id
      */
    TopicId: string;
    /**
      * 根据 hashkey 写入相应范围的主题分区
      */
    HashKey?: string;
    /**
      * 压缩方法
      */
    CompressType?: string;
}
/**
 * ModifyConsumer返回参数结构体
 */
export interface ModifyConsumerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfigs请求参数结构体
 */
export interface DescribeConfigsRequest {
    /**
      * <br><li> configName

按照【采集配置名称】进行模糊匹配过滤。
类型：String

必选：否

<br><li> configId

按照【采集配置ID】进行过滤。
类型：String

必选：否

<br><li> topicId

按照【日志主题】进行过滤。

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
 * 日志集相关信息
 */
export interface LogsetInfo {
    /**
      * 日志集ID
      */
    LogsetId: string;
    /**
      * 日志集名称
      */
    LogsetName: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 日志集绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 日志集下日志主题的数目
      */
    TopicCount: number;
    /**
      * 若AssumerUin非空，则表示创建该日志集的服务方角色
      */
    RoleName: string;
}
/**
 * DescribeConsumer请求参数结构体
 */
export interface DescribeConsumerRequest {
    /**
      * 投递任务绑定的日志主题 ID
      */
    TopicId: string;
}
/**
 * DeleteConfig请求参数结构体
 */
export interface DeleteConfigRequest {
    /**
      * 采集规则配置ID
      */
    ConfigId: string;
}
/**
 * 多维分析的分析维度
 */
export interface AnalysisDimensional {
    /**
      * 分析名称
      */
    Name: string;
    /**
      * 分析类型：query，field
      */
    Type: string;
    /**
      * 分析内容
      */
    Content: string;
}
/**
 * 投递任务信息
 */
export interface ShipperTaskInfo {
    /**
      * 投递任务ID
      */
    TaskId: string;
    /**
      * 投递信息ID
      */
    ShipperId: string;
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 本批投递的日志的开始时间戳，毫秒
      */
    RangeStart: number;
    /**
      * 本批投递的日志的结束时间戳， 毫秒
      */
    RangeEnd: number;
    /**
      * 本次投递任务的开始时间戳， 毫秒
      */
    StartTime: number;
    /**
      * 本次投递任务的结束时间戳， 毫秒
      */
    EndTime: number;
    /**
      * 本次投递的结果，"success","running","failed"
      */
    Status: string;
    /**
      * 结果的详细信息
      */
    Message: string;
}
/**
 * CloseKafkaConsumer请求参数结构体
 */
export interface CloseKafkaConsumerRequest {
    /**
      * CLS对应的topic标识
      */
    FromTopicId: string;
}
/**
 * CreateExport请求参数结构体
 */
export interface CreateExportRequest {
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 日志导出数量,  最大值5000万
      */
    Count: number;
    /**
      * 日志导出检索语句，不支持<a href="https://cloud.tencent.com/document/product/614/44061" target="_blank">[SQL语句]</a>
      */
    Query: string;
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
 * DeleteDataTransform请求参数结构体
 */
export interface DeleteDataTransformRequest {
    /**
      * 数据加工任务id
      */
    TaskId: string;
}
/**
 * DeleteConfigExtra请求参数结构体
 */
export interface DeleteConfigExtraRequest {
    /**
      * 采集规则扩展配置ID
      */
    ConfigExtraId: string;
}
/**
 * ModifyConfig请求参数结构体
 */
export interface ModifyConfigRequest {
    /**
      * 采集规则配置ID
      */
    ConfigId: string;
    /**
      * 采集规则配置名称
      */
    Name?: string;
    /**
      * 日志采集路径，包含文件名
      */
    Path?: string;
    /**
      * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
      */
    LogType?: string;
    /**
      * 提取规则，如果设置了ExtractRule，则必须设置LogType
      */
    ExtractRule?: ExtractRuleInfo;
    /**
      * 采集黑名单路径列表
      */
    ExcludePaths?: Array<ExcludePathInfo>;
    /**
      * 采集配置关联的日志主题（TopicId）
      */
    Output?: string;
    /**
      * 用户自定义解析字符串，Json格式序列化的字符串
      */
    UserDefineRule?: string;
}
/**
 * DescribeLogsets返回参数结构体
 */
export interface DescribeLogsetsResponse {
    /**
      * 分页的总数目
      */
    TotalCount: number;
    /**
      * 日志集列表
      */
    Logsets: Array<LogsetInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * JSON类型描述
 */
export interface JsonInfo {
    /**
      * 启用标志
      */
    EnableTag: boolean;
    /**
      * 元数据信息列表, 可选值为 __SOURCE__、__FILENAME__、__TIMESTAMP__。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetaFields: Array<string>;
}
/**
 * CreateShipper请求参数结构体
 */
export interface CreateShipperRequest {
    /**
      * 创建的投递规则所属的日志主题ID
      */
    TopicId: string;
    /**
      * 创建的投递规则投递的bucket
      */
    Bucket: string;
    /**
      * 创建的投递规则投递目录的前缀
      */
    Prefix: string;
    /**
      * 投递规则的名字
      */
    ShipperName: string;
    /**
      * 投递的时间间隔，单位 秒，默认300，范围 300-900
      */
    Interval?: number;
    /**
      * 投递的文件的最大值，单位 MB，默认256，范围 100-256
      */
    MaxSize?: number;
    /**
      * 投递日志的过滤规则，匹配的日志进行投递，各rule之间是and关系，最多5个，数组为空则表示不过滤而全部投递
      */
    FilterRules?: Array<FilterRuleInfo>;
    /**
      * 投递日志的分区规则，支持strftime的时间格式表示
      */
    Partition?: string;
    /**
      * 投递日志的压缩配置
      */
    Compress?: CompressInfo;
    /**
      * 投递日志的内容格式配置
      */
    Content?: ContentInfo;
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
<li> WeCom
<li> Http
      */
    CallbackType: string;
    /**
      * 回调方法。可选值：
<li> POST
<li> PUT
默认值为POST。CallbackType为Http时为必选。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method?: string;
    /**
      * 请求头。
注意：该参数已废弃，请在<a href="https://cloud.tencent.com/document/product/614/56466">创建告警策略</a>接口CallBack参数中指定请求头。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Headers?: Array<string>;
    /**
      * 请求内容。
注意：该参数已废弃，请在<a href="https://cloud.tencent.com/document/product/614/56466">创建告警策略</a>接口CallBack参数中指定请求内容。
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
 * CreateConfig请求参数结构体
 */
export interface CreateConfigRequest {
    /**
      * 采集配置名称
      */
    Name: string;
    /**
      * 采集配置所属日志主题ID即TopicId
      */
    Output: string;
    /**
      * 日志采集路径,包含文件名
      */
    Path?: string;
    /**
      * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
      */
    LogType?: string;
    /**
      * 提取规则，如果设置了ExtractRule，则必须设置LogType
      */
    ExtractRule?: ExtractRuleInfo;
    /**
      * 采集黑名单路径列表
      */
    ExcludePaths?: Array<ExcludePathInfo>;
    /**
      * 用户自定义采集规则，Json格式序列化的字符串
      */
    UserDefineRule?: string;
}
/**
 * CreateShipper返回参数结构体
 */
export interface CreateShipperResponse {
    /**
      * 投递规则ID
      */
    ShipperId: string;
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
      * 默认不生效
      */
    Status?: boolean;
    /**
      * 索引规则
      */
    Rule?: RuleInfo;
    /**
      * 全文索引系统预置字段标记，默认false。  false:不包含系统预置字段， true:包含系统预置字段
      */
    IncludeInternalFields?: boolean;
    /**
      * 元数据相关标志位，默认为0。 0：全文索引包括开启键值索引的元数据字段， 1：全文索引包括所有元数据字段，2：全文索引不包括元数据字段。
      */
    MetadataFlag?: number;
}
/**
 * 日志分析的列属性
 */
export interface Column {
    /**
      * 列的名字
      */
    Name?: string;
    /**
      * 列的属性
      */
    Type?: string;
}
/**
 * 投递日志的压缩配置
 */
export interface CompressInfo {
    /**
      * 压缩格式，支持gzip、lzop和none不压缩
      */
    Format: string;
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
    /**
      * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainZH?: boolean;
}
/**
 * DescribeDataTransformInfo请求参数结构体
 */
export interface DescribeDataTransformInfoRequest {
    /**
      * <br><li> taskName

按照【加工任务名称】进行过滤。
类型：String

必选：否

<br><li> taskId

按照【加工任务id】进行过滤。
类型：String

必选：否

每次请求的Filters的上限为10，Filter.Values的上限为100。
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
    /**
      * 默认值为2.   1: 获取单个任务的详细信息 2：获取任务列表
      */
    Type?: number;
    /**
      * Type为1， 此参数必填
      */
    TaskId?: string;
}
/**
 * DeleteShipper返回参数结构体
 */
export interface DeleteShipperResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * 采集规则配置信息
 */
export interface ConfigInfo {
    /**
      * 采集规则配置ID
      */
    ConfigId: string;
    /**
      * 日志格式化方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogFormat: string;
    /**
      * 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogType: string;
    /**
      * 提取规则，如果设置了ExtractRule，则必须设置LogType
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtractRule: ExtractRuleInfo;
    /**
      * 采集黑名单路径列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExcludePaths: Array<ExcludePathInfo>;
    /**
      * 采集配置所属日志主题ID即TopicId
      */
    Output: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 用户自定义解析字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserDefineRule: string;
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
 * CreateDataTransform返回参数结构体
 */
export interface CreateDataTransformResponse {
    /**
      * 任务id
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
    /**
      * 日志来源主机名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostName: string;
}
/**
 * ModifyShipper请求参数结构体
 */
export interface ModifyShipperRequest {
    /**
      * 投递规则ID
      */
    ShipperId: string;
    /**
      * 投递规则投递的新的bucket
      */
    Bucket?: string;
    /**
      * 投递规则投递的新的目录前缀
      */
    Prefix?: string;
    /**
      * 投递规则的开关状态
      */
    Status?: boolean;
    /**
      * 投递规则的名字
      */
    ShipperName?: string;
    /**
      * 投递的时间间隔，单位 秒，默认300，范围 300-900
      */
    Interval?: number;
    /**
      * 投递的文件的最大值，单位 MB，默认256，范围 100-256
      */
    MaxSize?: number;
    /**
      * 投递日志的过滤规则，匹配的日志进行投递，各rule之间是and关系，最多5个，数组为空则表示不过滤而全部投递
      */
    FilterRules?: Array<FilterRuleInfo>;
    /**
      * 投递日志的分区规则，支持strftime的时间格式表示
      */
    Partition?: string;
    /**
      * 投递日志的压缩配置
      */
    Compress?: CompressInfo;
    /**
      * 投递日志的内容格式配置
      */
    Content?: ContentInfo;
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
 * CreateConfigExtra请求参数结构体
 */
export interface CreateConfigExtraRequest {
    /**
      * 采集配置规程名称，最长63个字符，只能包含小写字符、数字及分隔符（“-”），且必须以小写字符开头，数字或小写字符结尾
      */
    Name: string;
    /**
      * 日志主题id
      */
    TopicId: string;
    /**
      * 类型：container_stdout、container_file、host_file
      */
    Type: string;
    /**
      * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
      */
    LogType: string;
    /**
      * 采集配置标
      */
    ConfigFlag: string;
    /**
      * 日志集id
      */
    LogsetId: string;
    /**
      * 日志集name
      */
    LogsetName: string;
    /**
      * 日志主题名称
      */
    TopicName: string;
    /**
      * 节点文件配置信息
      */
    HostFile?: HostFileInfo;
    /**
      * 容器文件路径信息
      */
    ContainerFile?: ContainerFileInfo;
    /**
      * 容器标准输出信息
      */
    ContainerStdout?: ContainerStdoutInfo;
    /**
      * 日志格式化方式
      */
    LogFormat?: string;
    /**
      * 提取规则，如果设置了ExtractRule，则必须设置LogType
      */
    ExtractRule?: ExtractRuleInfo;
    /**
      * 采集黑名单路径列表
      */
    ExcludePaths?: Array<ExcludePathInfo>;
    /**
      * 用户自定义采集规则，Json格式序列化的字符串
      */
    UserDefineRule?: string;
    /**
      * 绑定的机器组id
      */
    GroupId?: string;
    /**
      * 绑定的机器组id列表
      */
    GroupIds?: Array<string>;
}
/**
 * CreateConsumer请求参数结构体
 */
export interface CreateConsumerRequest {
    /**
      * 投递任务绑定的日志主题 ID
      */
    TopicId: string;
    /**
      * 是否投递日志的元数据信息，默认为 true
      */
    NeedContent?: boolean;
    /**
      * 如果需要投递元数据信息，元数据信息的描述
      */
    Content?: ConsumerContent;
    /**
      * CKafka的描述
      */
    Ckafka?: Ckafka;
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
 * ModifyConfig返回参数结构体
 */
export interface ModifyConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * 数据加工任务基本详情
 */
export interface DataTransformTaskInfo {
    /**
      * 数据加工任务名称
      */
    Name: string;
    /**
      * 数据加工任务id
      */
    TaskId: string;
    /**
      * 任务启用状态，默认为1，正常开启,  2关闭
      */
    EnableFlag: number;
    /**
      * 加工任务类型，1： DSL， 2：SQL
      */
    Type: number;
    /**
      * 源日志主题
      */
    SrcTopicId: string;
    /**
      * 当前加工任务状态（1准备中/2运行中/3停止中/4已停止）
      */
    Status: number;
    /**
      * 加工任务创建时间
      */
    CreateTime: string;
    /**
      * 最近修改时间
      */
    UpdateTime: string;
    /**
      * 最后启用时间，如果需要重建集群，修改该时间
      */
    LastEnableTime: string;
    /**
      * 日志主题名称
      */
    SrcTopicName: string;
    /**
      * 日志集id
      */
    LogsetId: string;
    /**
      * 加工任务目的topic_id以及别名
      */
    DstResources: Array<DataTransformResouceInfo>;
    /**
      * 加工逻辑函数
      */
    EtlContent: string;
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
      * 当前用户可用最新的Loglistener版本
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
 * 预览数据详情
 */
export interface PreviewLogStatistic {
    /**
      * 日志内容
      */
    LogContent: string;
    /**
      * 行号
      */
    LineNum: number;
    /**
      * 目标日志主题
      */
    DstTopicId?: string;
    /**
      * 失败错误码， 空字符串""表示正常
      */
    FailReason?: string;
    /**
      * 日志时间戳
      */
    Time?: string;
    /**
      * 目标topic-name
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstTopicName?: string;
}
/**
 * 投递日志的内容格式配置
 */
export interface ContentInfo {
    /**
      * 内容格式，支持json、csv
      */
    Format: string;
    /**
      * csv格式内容描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Csv?: CsvInfo;
    /**
      * json格式内容描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Json?: JsonInfo;
    /**
      * parquet格式内容描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Parquet?: ParquetInfo;
}
/**
 * ApplyConfigToMachineGroup返回参数结构体
 */
export interface ApplyConfigToMachineGroupResponse {
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
 * CreateConfig返回参数结构体
 */
export interface CreateConfigResponse {
    /**
      * 采集配置ID
      */
    ConfigId: string;
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
 * DeleteConfigFromMachineGroup请求参数结构体
 */
export interface DeleteConfigFromMachineGroupRequest {
    /**
      * 机器组ID
      */
    GroupId: string;
    /**
      * 采集配置ID
      */
    ConfigId: string;
}
/**
 * 投递规则
 */
export interface ShipperInfo {
    /**
      * 投递规则ID
      */
    ShipperId: string;
    /**
      * 日志主题ID
      */
    TopicId: string;
    /**
      * 投递的bucket地址
      */
    Bucket: string;
    /**
      * 投递的前缀目录
      */
    Prefix: string;
    /**
      * 投递规则的名字
      */
    ShipperName: string;
    /**
      * 投递的时间间隔，单位 秒
      */
    Interval: number;
    /**
      * 投递的文件的最大值，单位 MB
      */
    MaxSize: number;
    /**
      * 是否生效
      */
    Status: boolean;
    /**
      * 投递日志的过滤规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterRules: Array<FilterRuleInfo>;
    /**
      * 投递日志的分区规则，支持strftime的时间格式表示
      */
    Partition: string;
    /**
      * 投递日志的压缩配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Compress: CompressInfo;
    /**
      * 投递日志的内容格式配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: ContentInfo;
    /**
      * 投递日志的创建时间
      */
    CreateTime: string;
}
/**
 * 键值或者元字段索引的字段信息
 */
export interface KeyValueInfo {
    /**
      * 需要配置键值或者元字段索引的字段，元字段Key无需额外添加`__TAG__.`前缀，与上传日志时对应的字段Key一致即可，腾讯云控制台展示时将自动添加`__TAG__.`前缀
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
      * <li> name
按照【通知渠道组名称】进行过滤。
类型：String
必选：否
<li> alarmNoticeId
按照【通知渠道组ID】进行过滤。
类型：String
必选：否
<li> uid
按照【接收用户ID】进行过滤。
类型：String
必选：否
<li> groupId
按照【接收用户组ID】进行过滤。
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
 * CKafka的描述-需要投递到的kafka信息
 */
export interface Ckafka {
    /**
      * Ckafka 的 Vip
      */
    Vip: string;
    /**
      * Ckafka 的 Vport
      */
    Vport: string;
    /**
      * Ckafka 的 InstanceId
      */
    InstanceId: string;
    /**
      * Ckafka 的 InstanceName
      */
    InstanceName: string;
    /**
      * Ckafka 的 TopicId
      */
    TopicId: string;
    /**
      * Ckafka 的 TopicName
      */
    TopicName: string;
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
 * DeleteAlarmNotice请求参数结构体
 */
export interface DeleteAlarmNoticeRequest {
    /**
      * 通知渠道组ID
      */
    AlarmNoticeId: string;
}
/**
 * DeleteLogset请求参数结构体
 */
export interface DeleteLogsetRequest {
    /**
      * 日志集ID
      */
    LogsetId: string;
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
 * ModifyLogset返回参数结构体
 */
export interface ModifyLogsetResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 要检索分析的日志主题ID
      */
    TopicId: string;
    /**
      * 要检索分析的日志的起始时间，Unix时间戳（毫秒）
      */
    From: number;
    /**
      * 要检索分析的日志的结束时间，Unix时间戳（毫秒）
      */
    To: number;
    /**
      * 检索分析语句，最大长度为12KB
语句由 <a href="https://cloud.tencent.com/document/product/614/47044" target="_blank">[检索条件]</a> | <a href="https://cloud.tencent.com/document/product/614/44061" target="_blank">[SQL语句]</a>构成，无需对日志进行统计分析时，可省略其中的管道符<code> | </code>及SQL语句
      */
    Query: string;
    /**
      * 表示单次查询返回的原始日志条数，最大值为1000，获取后续日志需使用Context参数
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* SQL结果条数指定方式参考<a href="https://cloud.tencent.com/document/product/614/58977" target="_blank">SQL LIMIT语法</a>
      */
    Limit?: number;
    /**
      * 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* SQL获取后续结果参考<a href="https://cloud.tencent.com/document/product/614/58977" target="_blank">SQL LIMIT语法</a>
      */
    Context?: string;
    /**
      * 原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
注意：
* 仅当检索分析语句(Query)不包含SQL时有效
* SQL结果排序方式参考<a href="https://cloud.tencent.com/document/product/614/58978" target="_blank">SQL ORDER BY语法</a>
      */
    Sort?: string;
    /**
      * 为true代表使用新的检索结果返回方式，输出参数AnalysisRecords和Columns有效
为false时代表使用老的检索结果返回方式, 输出AnalysisResults和ColNames有效
两种返回方式在编码格式上有少量区别，建议使用true
      */
    UseNewAnalysis?: boolean;
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
 * ApplyConfigToMachineGroup请求参数结构体
 */
export interface ApplyConfigToMachineGroupRequest {
    /**
      * 采集配置ID
      */
    ConfigId: string;
    /**
      * 机器组ID
      */
    GroupId: string;
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
      * 单次查询返回的日志条数，最大值为1000
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
    /**
      * 为true代表使用新检索,响应参数AnalysisRecords和Columns有效， 为false时代表使用老检索方式, AnalysisResults和ColNames有效
      */
    UseNewAnalysis?: boolean;
}
/**
 * 自建k8s-容器文件路径信息
 */
export interface ContainerFileInfo {
    /**
      * namespace可以多个，用分隔号分割,例如A,B
      */
    Namespace: string;
    /**
      * 容器名称
      */
    Container: string;
    /**
      * 日志文件夹
      */
    LogPath: string;
    /**
      * 日志名称
      */
    FilePattern: string;
    /**
      * pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncludeLabels?: Array<string>;
    /**
      * 工作负载信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkLoad?: ContainerWorkLoadInfo;
    /**
      * 需要排除的namespace可以多个，用分隔号分割,例如A,B
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExcludeNamespace?: string;
    /**
      * 需要排除的pod标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExcludeLabels?: Array<string>;
}
/**
 * csv内容描述
 */
export interface CsvInfo {
    /**
      * csv首行是否打印key
      */
    PrintKey: boolean;
    /**
      * 每列key的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keys: Array<string>;
    /**
      * 各字段间的分隔符
      */
    Delimiter: string;
    /**
      * 若字段内容中包含分隔符，则使用该转义符包裹改字段，只能填写单引号、双引号、空字符串
      */
    EscapeChar: string;
    /**
      * 对于上面指定的不存在字段使用该内容填充
      */
    NonExistingField: string;
}
/**
 * DescribeConfigExtras请求参数结构体
 */
export interface DescribeConfigExtrasRequest {
    /**
      * 支持的key： topicId,name, configExtraId, machineGroupId
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
 * CreateAlarmNotice请求参数结构体
 */
export interface CreateAlarmNoticeRequest {
    /**
      * 通知渠道组名称。
      */
    Name: string;
    /**
      * 通知类型。可选值：
<li> Trigger - 告警触发
<li> Recovery - 告警恢复
<li> All - 告警触发和告警恢复
      */
    Type: string;
    /**
      * 通知接收对象。
      */
    NoticeReceivers?: Array<NoticeReceiver>;
    /**
      * 接口回调信息（包括企业微信）。
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
      * 全文索引系统预置字段标记，默认false。  false:不包含系统预置字段， true:包含系统预置字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncludeInternalFields: boolean;
    /**
      * 元数据相关标志位，默认为0。 0：全文索引包括开启键值索引的元数据字段， 1：全文索引包括所有元数据字段，2：全文索引不包括元数据字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetadataFlag: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 直方图详细信息
 */
export interface HistogramInfo {
    /**
      * 统计周期内的日志条数
      */
    Count: number;
    /**
      * 按 period 取整后的 unix timestamp： 单位毫秒
      */
    BTime: number;
}
/**
 * DescribeMachineGroupConfigs请求参数结构体
 */
export interface DescribeMachineGroupConfigsRequest {
    /**
      * 机器组ID
      */
    GroupId: string;
}
/**
 * ModifyConfigExtra请求参数结构体
 */
export interface ModifyConfigExtraRequest {
    /**
      * 采集配置扩展信息id
      */
    ConfigExtraId: string;
    /**
      * 采集配置规程名称，最长63个字符，只能包含小写字符、数字及分隔符（“-”），且必须以小写字符开头，数字或小写字符结尾
      */
    Name?: string;
    /**
      * 日志主题id
      */
    TopicId?: string;
    /**
      * 节点文件配置信息
      */
    HostFile?: HostFileInfo;
    /**
      * 容器文件路径信息
      */
    ContainerFile?: ContainerFileInfo;
    /**
      * 容器标准输出信息
      */
    ContainerStdout?: ContainerStdoutInfo;
    /**
      * 采集的日志类型，json_log代表json格式日志，delimiter_log代表分隔符格式日志，minimalist_log代表极简日志，multiline_log代表多行日志，fullregex_log代表完整正则，默认为minimalist_log
      */
    LogType?: string;
    /**
      * 日志格式化方式
      */
    LogFormat?: string;
    /**
      * 提取规则，如果设置了ExtractRule，则必须设置LogType
      */
    ExtractRule?: ExtractRuleInfo;
    /**
      * 采集黑名单路径列表
      */
    ExcludePaths?: Array<ExcludePathInfo>;
    /**
      * 用户自定义采集规则，Json格式序列化的字符串
      */
    UserDefineRule?: string;
    /**
      * 类型：container_stdout、container_file、host_file
      */
    Type?: string;
    /**
      * 机器组ID
      */
    GroupId?: string;
    /**
      * 自建采集配置标
      */
    ConfigFlag?: string;
    /**
      * 日志集ID
      */
    LogsetId?: string;
    /**
      * 日志集name
      */
    LogsetName?: string;
    /**
      * 日志主题name
      */
    TopicName?: string;
}
/**
 * CreateDataTransform请求参数结构体
 */
export interface CreateDataTransformRequest {
    /**
      * 函数类型. DSL:1 SQL:2
      */
    FuncType: number;
    /**
      * 源日志主题
      */
    SrcTopicId: string;
    /**
      * 加工任务名称
      */
    Name: string;
    /**
      * 加工逻辑函数
      */
    EtlContent: string;
    /**
      * 加工任务目的topic_id以及别名
      */
    DstResources: Array<DataTransformResouceInfo>;
    /**
      * 任务类型.  以SrcTopicId为数据源建立预览任务:1，以PreviewLogStatistics为数据源建立预览任务:2  真实任务:3
      */
    TaskType: number;
    /**
      * 任务启动状态.   默认为1，正常开启,  2关闭
      */
    EnableFlag?: number;
    /**
      * 测试数据
      */
    PreviewLogStatistics?: Array<PreviewLogStatistic>;
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
 * DescribeLogsets请求参数结构体
 */
export interface DescribeLogsetsRequest {
    /**
      * <br><li> logsetName

按照【日志集名称】进行过滤。
类型：String

必选：否

<br><li> logsetId

按照【日志集ID】进行过滤。
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
 * Parquet内容
 */
export interface ParquetInfo {
    /**
      * ParquetKeyInfo数组
      */
    ParquetKeyInfo: Array<ParquetKeyInfo>;
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
 * ModifyDataTransform返回参数结构体
 */
export interface ModifyDataTransformResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDataTransformInfo返回参数结构体
 */
export interface DescribeDataTransformInfoResponse {
    /**
      * 数据加工任务列表信息
      */
    DataTransformTaskInfos: Array<DataTransformTaskInfo>;
    /**
      * 任务总次数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 投递任务出入参 Content
 */
export interface ConsumerContent {
    /**
      * 是否投递 TAG 信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnableTag: boolean;
    /**
      * 需要投递的元数据列表，目前仅支持：__SOURCE__，__FILENAME__和__TIMESTAMP__
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetaFields: Array<string>;
    /**
      * 当EnableTag为true时，必须填写TagJsonNotTiled字段，TagJsonNotTiled用于标识tag信息是否json平铺，TagJsonNotTiled为true时不平铺，false时平铺
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagJsonNotTiled?: boolean;
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
 * 自建k8s-节点文件配置信息
 */
export interface HostFileInfo {
    /**
      * 日志文件夹
      */
    LogPath: string;
    /**
      * 日志文件名
      */
    FilePattern: string;
    /**
      * metadata信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomLabels?: Array<string>;
}
/**
 * 需要过滤日志的key，及其对应的regex
 */
export interface KeyRegexInfo {
    /**
      * 需要过滤日志的key
      */
    Key: string;
    /**
      * key对应的过滤规则regex
      */
    Regex: string;
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

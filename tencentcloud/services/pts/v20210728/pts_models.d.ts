/**
 * DescribeCronJobs请求参数结构体
 */
export interface DescribeCronJobsRequest {
    /**
     * 项目ID数组
     */
    ProjectIds: Array<string>;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数量
     */
    Limit?: number;
    /**
     * 定时任务ID数组
     */
    CronJobIds?: Array<string>;
    /**
     * 定时任务名字，模糊查询
     */
    CronJobName?: string;
    /**
     * 定时任务状态数组
     */
    CronJobStatus?: Array<number | bigint>;
    /**
     * 排序的列
     */
    OrderBy?: string;
    /**
     * 是否正序
     */
    Ascend?: boolean;
}
/**
 * UpdateJob请求参数结构体
 */
export interface UpdateJobRequest {
    /**
     * 任务ID
     */
    JobId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 任务备注信息
     */
    Note?: string;
}
/**
 * UpdateCronJob返回参数结构体
 */
export interface UpdateCronJobResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSampleMatrixQuery返回参数结构体
 */
export interface DescribeSampleMatrixQueryResponse {
    /**
     * 指标矩阵
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricSampleMatrix?: CustomSampleMatrix;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSampleLogs请求参数结构体
 */
export interface DescribeSampleLogsRequest {
    /**
     * 测试项目ID
     */
    ProjectId: string;
    /**
     * 测试场景ID
     */
    ScenarioId: string;
    /**
     * 测试任务ID
     */
    JobId: string;
    /**
     * 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时
     */
    Context?: string;
    /**
     * 日志开始时间
     */
    From?: string;
    /**
     * 日志结束时间
     */
    To?: string;
    /**
     * 日志级别debug,info,error
     */
    SeverityText?: string;
    /**
     * ap-shanghai, ap-guangzhou
     */
    InstanceRegion?: string;
    /**
     * 施压引擎节点IP
     */
    Instance?: string;
    /**
     * request 代表采样日志,可为不填
     */
    LogType?: string;
    /**
     * 返回日志条数，最大100
     */
    Limit?: number;
    /**
     * 采样日志响应时间范围
     */
    ReactionTimeRange?: ReactionTimeRange;
    /**
     * 采样请求状态码
     */
    Status?: string;
    /**
     * 采样请求结果码
     */
    Result?: string;
    /**
     * 采样请求方法
     */
    Method?: string;
    /**
     * 采样服务API
     */
    Service?: string;
}
/**
 * DeleteJobs请求参数结构体
 */
export interface DeleteJobsRequest {
    /**
     * 待删除的任务的 ID（所有任务的 ID 可以从 DescribeJobs 获取）
     */
    JobIds: Array<string>;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 场景ID数组
     */
    ScenarioIds: Array<string>;
}
/**
 * 告警通知接收组
 */
export interface AlertChannelRecord {
    /**
     * Notice ID
     */
    NoticeId?: string;
    /**
     * Consumer ID
     */
    AMPConsumerId?: string;
    /**
     * 项目 ID
     */
    ProjectId?: string;
    /**
     * 状态
     */
    Status?: number;
    /**
     * 创建时间
     */
    CreatedAt?: string;
    /**
     * 更新时间
     */
    UpdatedAt?: string;
    /**
     * App ID
     */
    AppId?: number;
    /**
     * 主账号
     */
    Uin?: string;
    /**
     * 子账号
     */
    SubAccountUin?: string;
}
/**
 * DescribeAlertRecords请求参数结构体
 */
export interface DescribeAlertRecordsRequest {
    /**
     * 项目 ID 列表
     */
    ProjectIds: Array<string>;
    /**
     * 场景 ID 列表
     */
    ScenarioIds?: Array<string>;
    /**
     * 任务 ID 列表
     */
    JobIds?: Array<string>;
    /**
     * 是否正序
     */
    Ascend?: boolean;
    /**
     * 排序项
     */
    OrderBy?: string;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大为100
     */
    Limit?: number;
    /**
     * 按场景名筛选
     */
    ScenarioNames?: Array<string>;
}
/**
 * DeleteAlertChannel返回参数结构体
 */
export interface DeleteAlertChannelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLabelValues请求参数结构体
 */
export interface DescribeLabelValuesRequest {
    /**
     * 任务ID
     */
    JobId: string;
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 指标名。取值范围参见 DescribeMetricLabelWithValues 接口返回的所有指标名
     */
    Metric: string;
    /**
     * 标签名。取值范围参见 DescribeMetricLabelWithValues 接口返回的指标及其支持的标签名
     */
    LabelName: string;
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * AbortCronJobs返回参数结构体
 */
export interface AbortCronJobsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRequestSummary返回参数结构体
 */
export interface DescribeRequestSummaryResponse {
    /**
     * 请求汇总信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestSummarySet: Array<RequestSummary>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeScenarioWithJobs请求参数结构体
 */
export interface DescribeScenarioWithJobsRequest {
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大为100
     */
    Limit?: number;
    /**
     * 项目ID数组
     */
    ProjectIds?: Array<string>;
    /**
     * 场景ID数组
     */
    ScenarioIds?: Array<string>;
    /**
     * 场景名
     */
    ScenarioName?: string;
    /**
     * 场景状态数组
     */
    ScenarioStatus?: number;
    /**
     * 排序的列
     */
    OrderBy?: string;
    /**
     * 是否正序
     */
    Ascend?: boolean;
    /**
     * job相关参数
     */
    ScenarioRelatedJobsParams?: ScenarioRelatedJobsParams;
    /**
     * 是否需要返回场景的脚本内容
     */
    IgnoreScript?: boolean;
    /**
     * 是否需要返回测试数据文件信息
     */
    IgnoreDataset?: boolean;
    /**
     * 场景类型，如pts-http, pts-js, pts-trpc, pts-jmeter
     */
    ScenarioType?: string;
    /**
     * 创建人员
     */
    Owner?: string;
}
/**
 * CreateCronJob返回参数结构体
 */
export interface CreateCronJobResponse {
    /**
     * 定时任务ID
     */
    CronJobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RestartCronJobs返回参数结构体
 */
export interface RestartCronJobsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SLA 策略
 */
export interface SLAPolicy {
    /**
     * SLA 规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SLARules?: Array<SLARule>;
    /**
     * 告警通知渠道
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlertChannel?: AlertChannel;
}
/**
 * 施压机 DNS 配置
 */
export interface DNSConfig {
    /**
     * DNS IP 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nameservers?: Array<string>;
}
/**
 * 脚本信息
 */
export interface ScriptInfo {
    /**
     * 文件名
     */
    Name?: string;
    /**
     * 文件大小
     */
    Size?: number;
    /**
     * 文件类型
     */
    Type?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedAt?: string;
    /**
     * base64编码后的文件内容
     */
    EncodedContent?: string;
    /**
     * base64编码后的har结构体
     */
    EncodedHttpArchive?: string;
    /**
     * 脚本权重，范围 1-100
     */
    LoadWeight?: number;
    /**
     * 文件 ID
     */
    FileId?: string;
}
/**
 * 通用日志
 */
export interface NormalLog {
    /**
     * 毫秒时间戳
     */
    Timestamp?: string;
    /**
     * 日志级别
     */
    SeverityText?: string;
    /**
     * 日志输出内容
     */
    Body?: string;
}
/**
 * UpdateProject请求参数结构体
 */
export interface UpdateProjectRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 项目名
     */
    Name?: string;
    /**
     * 项目描述
     */
    Description?: string;
    /**
     * 项目状态，默认传递1
     */
    Status?: number;
    /**
     * 标签数组
     */
    Tags?: Array<TagSpec>;
}
/**
 * AbortJob返回参数结构体
 */
export interface AbortJobResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 项目
 */
export interface Project {
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 项目名
     */
    Name?: string;
    /**
     * 项目描述
     */
    Description?: string;
    /**
     * 标签数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<TagSpec>;
    /**
     * 项目状态
     */
    Status?: number;
    /**
     * 创建时间
     */
    CreatedAt?: string;
    /**
     * 修改时间
     */
    UpdatedAt?: string;
    /**
     * App ID
     */
    AppId?: number;
    /**
     * 用户ID
     */
    Uin?: string;
    /**
     * 子用户ID
     */
    SubAccountUin?: string;
}
/**
 * UpdateEnvironment请求参数结构体
 */
export declare type UpdateEnvironmentRequest = null;
/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
    /**
     * 地域数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionSet?: Array<RegionDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 采样日志附带属性
 */
export interface Attributes {
    /**
     * 采用请求返回码
     */
    Status?: string;
    /**
     * 采样请求结果码
     */
    Result?: string;
    /**
     * 采样请求API
     */
    Service?: string;
    /**
     * 采样请求调用方法
     */
    Method?: string;
    /**
     * 采样请求延时时间
     */
    Duration?: string;
}
/**
 * CreateEnvironment返回参数结构体
 */
export interface CreateEnvironmentResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateScenario返回参数结构体
 */
export interface UpdateScenarioResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文件列表
 */
export interface File {
    /**
     * 文件 ID
     */
    FileId?: string;
    /**
     * 文件种类，参数文件-1，协议文件-2，请求文件-3
     */
    Kind?: number;
    /**
     * 文件名
     */
    Name?: string;
    /**
     * 文件字节数
     */
    Size?: number;
    /**
     * 文件类型
     */
    Type?: string;
    /**
     * 更新时间
     */
    UpdatedAt?: string;
    /**
     * 文件行数
     */
    LineCount?: number;
    /**
     * 头部数据行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeadLines?: Array<string>;
    /**
     * 尾部数据行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TailLines?: Array<string>;
    /**
     * 首行是否为参数名
     */
    HeaderInFile?: boolean;
    /**
     * 参数名数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeaderColumns?: Array<string>;
    /**
     * 文件夹中的文件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileInfos?: Array<FileInfo>;
    /**
     * 关联场景
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScenarioSet?: Array<Scenario>;
    /**
     * 文件状态
     */
    Status?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedAt?: string;
    /**
     * 项目 ID
     */
    ProjectId?: string;
    /**
     * 此字段不再使用
     */
    AppID?: number;
    /**
     * 用户主账号
     */
    Uin?: string;
    /**
     * 用户子账号
     */
    SubAccountUin?: string;
    /**
     * 用户账号的 App ID
     */
    AppId?: number;
}
/**
 * DescribeEnvironments请求参数结构体
 */
export declare type DescribeEnvironmentsRequest = null;
/**
 * sample附带原始查询语句中的metric, aggregation
 */
export interface CustomSample {
    /**
     * 指标名
     */
    Metric?: string;
    /**
     * 聚合条件
     */
    Aggregation?: string;
    /**
     * 过滤条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<Label>;
    /**
     * 查询值
     */
    Value?: number;
    /**
     * Time is the number of milliseconds since the epoch
  // (1970-01-01 00:00 UTC) excluding leap seconds.
     */
    Timestamp?: number;
    /**
     * 指标对应的单位，当前单位有：s,bytes,bytes/s,reqs,reqs/s,checks,checks/s,iters,iters/s,VUs, %
     */
    Unit?: string;
    /**
     * 指标序列名字
     */
    Name?: string;
}
/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
    /**
     * 项目名
     */
    Name: string;
    /**
     * 项目描述
     */
    Description?: string;
    /**
     * 标签数组
     */
    Tags?: Array<TagSpec>;
}
/**
 * AdjustJobSpeed请求参数结构体
 */
export interface AdjustJobSpeedRequest {
    /**
     * 任务ID
     */
    JobId: string;
    /**
     * 目标 RPS。其取值应大于起始 RPS，并且小于最大 RPS
     */
    TargetRequestsPerSecond: number;
}
/**
 * DescribeRequestSummary请求参数结构体
 */
export interface DescribeRequestSummaryRequest {
    /**
     * 压测任务ID
     */
    JobId: string;
    /**
     * 压测场景ID
     */
    ScenarioId: string;
    /**
     * 压测项目ID
     */
    ProjectId: string;
}
/**
 * 施压机域名绑定配置
 */
export interface HostAlias {
    /**
     * 需绑定的域名列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostNames?: Array<string>;
    /**
     * 需绑定的 IP 地址
     */
    IP?: string;
}
/**
 * CreateFile返回参数结构体
 */
export interface CreateFileResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProjects返回参数结构体
 */
export interface DeleteProjectsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 压力分布配置
 */
export interface GeoRegionsLoadItem {
    /**
     * 地域ID
     */
    RegionId: number;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 百分比
     */
    Percentage?: number;
}
/**
 * UpdateEnvironment返回参数结构体
 */
export interface UpdateEnvironmentResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签及对应的值
 */
export interface LabelWithValues {
    /**
     * 标签名称
     */
    LabelName: string;
    /**
     * 标签值
     */
    LabelValues: Array<string>;
}
/**
 * 包含labelName 和labelValue
 */
export interface Label {
    /**
     * 标签名
     */
    LabelName: string;
    /**
     * 标签值
     */
    LabelValue: string;
}
/**
 * 协议文件详情
 */
export interface ProtocolInfo {
    /**
     * 协议详情
     */
    Name?: string;
    /**
     * 文件大小
     */
    Size?: number;
    /**
     * 文件类型
     */
    Type?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedAt?: string;
    /**
     * 文件 ID
     */
    FileId?: string;
}
/**
 * 压力来源配置
 */
export interface VpcLoadDistribution {
    /**
     * 地域ID
     */
    RegionId: number;
    /**
     * 地域
     */
    Region?: string;
    /**
     * VPC ID
     */
    VpcId?: string;
    /**
     * 子网ID列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetIds?: Array<string>;
}
/**
 * sample采样值
 */
export interface SamplePair {
    /**
     * is the number of milliseconds since the epoch (1970-01-01 00:00 UTC) excluding leap seconds.
     */
    Timestamp: number;
    /**
     * is a representation of a value for a given sample at a given time.
     */
    Value: number;
}
/**
 * 定时任务
 */
export interface CronJob {
    /**
     * 定时任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CronJobId?: string;
    /**
     * 定时任务名字
     */
    Name?: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 场景ID
     */
    ScenarioId?: string;
    /**
     * 场景名称
     */
    ScenarioName?: string;
    /**
     * cron 表达式
     */
    CronExpression?: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 中止原因
     */
    AbortReason?: number;
    /**
     * 定时任务状态
     */
    Status?: number;
    /**
     * Notice ID
     */
    NoticeId?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedAt?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedAt?: string;
    /**
     * 执行频率类型
     */
    FrequencyType?: number;
    /**
     * 备注
     */
    Note?: string;
    /**
     * tom
     */
    JobOwner?: string;
    /**
     * App ID
     */
    AppId?: number;
    /**
     * 主账号
     */
    Uin?: string;
    /**
     * 子账号
     */
    SubAccountUin?: string;
}
/**
 * DescribeLabelValues返回参数结构体
 */
export interface DescribeLabelValuesResponse {
    /**
     * 标签值数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelValueSet?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询结构封装
 */
export interface InternalMetricQuery {
    /**
     * 指标名
     */
    Metric: string;
    /**
     * 聚合函数。取值范围：Rate,Count,Avg,P90,P95,P99,Gauge
     */
    Aggregation: string;
    /**
     * deprecated, 请使用Filters
     */
    Labels?: Array<Label>;
    /**
     * 用标签过滤规则来过滤指标，规则中包含标签名 LabelName、标签值 LabelValue、操作符 Operator（0代表相等，1代表不等）
     */
    Filters?: Array<Filter>;
    /**
     * 指标分组
     */
    GroupBy?: Array<string>;
}
/**
 * 任务
 */
export interface Job {
    /**
     * 任务的JobID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 任务的场景ID
     */
    ScenarioId?: string;
    /**
     * 任务的施压配置
     */
    Load?: Load;
    /**
     * 此字段不再使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Configs?: Array<string>;
    /**
     * 任务的数据集文件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Datasets?: Array<TestData>;
    /**
     * 此字段不再使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Extensions?: Array<string>;
    /**
     * 任务的运行状态, JobUnknown: 0,JobCreated:1,JobPending:2, JobPreparing:3,JobSelectClustering:4,JobCreateTasking:5,JobSyncTasking:6
  JobRunning:11,JobFinished:12,JobPrepareException:13,JobFinishException:14,JobAborting:15,JobAborted:16,JobAbortException:17,JobDeleted:18,
  JobSelectClusterException:19,JobCreateTaskException:20,JobSyncTaskException:21
     */
    Status?: number;
    /**
     * 任务的开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 任务的结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 任务的最大VU数
     */
    MaxVirtualUserCount?: number;
    /**
     * 任务的备注信息
     */
    Note?: string;
    /**
     * 错误率百分比
     */
    ErrorRate?: number;
    /**
     * 任务发起人
     */
    JobOwner?: string;
    /**
     * 此字段不再使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadSources?: LoadSource;
    /**
     * 任务时长
     */
    Duration?: number;
    /**
     * 最大每秒请求数
     */
    MaxRequestsPerSecond?: number;
    /**
     * 总请求数
     */
    RequestTotal?: number;
    /**
     * 平均每秒请求数
     */
    RequestsPerSecond?: number;
    /**
     * 平均响应时间
     */
    ResponseTimeAverage?: number;
    /**
     * 响应时间第99百分位
     */
    ResponseTimeP99?: number;
    /**
     * 响应时间第95百分位
     */
    ResponseTimeP95?: number;
    /**
     * 响应时间第90百分位
     */
    ResponseTimeP90?: number;
    /**
     * 此字段不再使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Scripts?: Array<string>;
    /**
     * 最大响应时间
     */
    ResponseTimeMax?: number;
    /**
     * 最小响应时间
     */
    ResponseTimeMin?: number;
    /**
     * 发压host信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadSourceInfos?: Array<LoadSource>;
    /**
     * 测试脚本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TestScripts?: Array<ScriptInfo>;
    /**
     * 协议脚本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocols?: Array<ProtocolInfo>;
    /**
     * 请求文件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestFiles?: Array<FileInfo>;
    /**
     * 拓展包文件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Plugins?: Array<FileInfo>;
    /**
     * 定时任务ID
     */
    CronId?: string;
    /**
     * 场景类型
     */
    Type?: string;
    /**
     * 域名绑定配置
     */
    DomainNameConfig?: DomainNameConfig;
    /**
     * false
     */
    Debug?: boolean;
    /**
     * 中断原因
     */
    AbortReason?: number;
    /**
     * 任务的创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedAt?: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 通知事件回调
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NotificationHooks?: Array<NotificationHook>;
    /**
     * 每秒接收字节数
     */
    NetworkReceiveRate?: number;
    /**
     * 每秒发送字节数
     */
    NetworkSendRate?: number;
    /**
     * 任务状态描述
     */
    Message?: string;
    /**
     * test-project
     */
    ProjectName?: string;
    /**
     * test-scenario
     */
    ScenarioName?: string;
    /**
     * 付费类型
     */
    PayMode?: number;
    /**
     * job VUM用量
     */
    Usage?: number;
}
/**
 * DescribeAvailableMetrics请求参数结构体
 */
export declare type DescribeAvailableMetricsRequest = null;
/**
 * CopyScenario返回参数结构体
 */
export interface CopyScenarioResponse {
    /**
     * 复制出的新场景 ID
     */
    ScenarioId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSampleMatrixQuery请求参数结构体
 */
export interface DescribeSampleMatrixQueryRequest {
    /**
     * 任务ID
     */
    JobId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 指标名。取值范围参见 DescribeMetricLabelWithValues 接口返回的所有指标名
     */
    Metric: string;
    /**
     * 聚合函数。取值范围：Rate,Count,Avg,P90,P95,P99,Gauge
     */
    Aggregation: string;
    /**
     * 用标签过滤规则来过滤指标，规则中包含标签名 LabelName、标签值 LabelValue、操作符 Operator（0代表相等，1代表不等）
     */
    Filters?: Array<Filter>;
    /**
     * 分组；取值范围参见 DescribeMetricLabelWithValues 接口返回的指标及其支持的标签名
     */
    GroupBy?: Array<string>;
}
/**
 * GenerateTmpKey返回参数结构体
 */
export interface GenerateTmpKeyResponse {
    /**
     * 临时访问凭证获取时刻的时间戳（单位秒）
     */
    StartTime?: number;
    /**
     * 临时访问凭证超时 时刻的时间戳（单位秒）
     */
    ExpiredTime?: number;
    /**
     * 临时访问凭证
     */
    Credentials?: Credentials;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分阶段施压时，对单个阶段的配置
 */
export interface Stage {
    /**
     * 施压时间
     */
    DurationSeconds?: number;
    /**
     * 虚拟用户数
     */
    TargetVirtualUsers?: number;
}
/**
 * DescribeFiles返回参数结构体
 */
export interface DescribeFilesResponse {
    /**
     * 文件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileSet?: Array<File>;
    /**
     * 文件总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProjects请求参数结构体
 */
export interface DeleteProjectsRequest {
    /**
     * 项目ID数组
     */
    ProjectIds: Array<string>;
    /**
     * 是否删除项目相关的场景。默认为否。
     */
    DeleteScenarios?: boolean;
    /**
     * 是否删除项目相关的任务。默认为否。
     */
    DeleteJobs?: boolean;
}
/**
 * UpdateFileScenarioRelation请求参数结构体
 */
export interface UpdateFileScenarioRelationRequest {
    /**
     * 文件 ID。其值应为前序步骤上传该文件到 cos 桶后，文件在 cos 桶中的相应目录
     */
    FileId: string;
    /**
     * 项目 ID
     */
    ProjectId: string;
    /**
     * 场景 ID 数组
     */
    ScenarioIds?: Array<string>;
}
/**
 * 带已执行任务的scenario
 */
export interface ScenarioWithJobs {
    /**
     * scecario结果
     */
    Scenario?: Scenario;
    /**
     * job结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Jobs?: Array<Job>;
}
/**
 * DeleteJobs返回参数结构体
 */
export interface DeleteJobsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签
 */
export interface TagSpec {
    /**
     * 标签键
     */
    TagKey?: string;
    /**
     * 标签值
     */
    TagValue?: string;
}
/**
 * AdjustJobSpeed返回参数结构体
 */
export interface AdjustJobSpeedResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 错误信息汇总
 */
export interface ErrorSummary {
    /**
     * 状态码
     */
    Status?: string;
    /**
     * 结果码
     */
    Result?: string;
    /**
     * 错误出现次数
     */
    Count?: number;
    /**
     * 错误率
     */
    Rate?: number;
    /**
     * 错误信息
     */
    Message?: string;
    /**
     * 请求协议类型
     */
    Proto?: string;
}
/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSampleQuery请求参数结构体
 */
export interface DescribeSampleQueryRequest {
    /**
     * job id
     */
    JobId: string;
    /**
     * 场景Id
     */
    ScenarioId: string;
    /**
     * 指标名。取值范围参见 DescribeMetricLabelWithValues 接口返回的所有指标名
     */
    Metric: string;
    /**
     * 聚合函数。取值范围：Rate,Count,Avg,P90,P95,P99,Gauge
     */
    Aggregation: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 标签过滤条件。各指标支持的标签参见 DescribeMetricLabelWithValues 接口返回的所有指标及其支持的标签
     */
    Labels?: Array<Label>;
}
/**
 * DescribeSampleMatrixBatchQuery返回参数结构体
 */
export interface DescribeSampleMatrixBatchQueryResponse {
    /**
     * 批量指标矩阵
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricSampleMatrixSet?: Array<CustomSampleMatrix>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteEnvironments返回参数结构体
 */
export interface DeleteEnvironmentsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SLA 标签
 */
export interface SLALabel {
    /**
     * 标签名
     */
    LabelName?: string;
    /**
     * 标签值
     */
    LabelValue?: string;
}
/**
 * 告警历史记录项
 */
export interface AlertRecord {
    /**
     * 告警历史记录项 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlertRecordId?: string;
    /**
     * 项目 ID
     */
    ProjectId?: string;
    /**
     * 场景 ID
     */
    ScenarioId?: string;
    /**
     * 状态
     */
    Status?: AlertRecordStatus;
    /**
     * 创建时间
     */
    CreatedAt?: string;
    /**
     * 修改时间
     */
    UpdatedAt?: string;
    /**
     * 任务 ID
     */
    JobId?: string;
    /**
     * App ID
     */
    AppId?: number;
    /**
     * 主账号
     */
    Uin?: string;
    /**
     * 子账号
     */
    SubAccountUin?: string;
    /**
     * 场景名称
     */
    ScenarioName?: string;
    /**
     * 告警对象
     */
    Target?: string;
    /**
     * 告警规则 ID
     */
    JobSLAId?: string;
    /**
     * 告警规则描述
     */
    JobSLADescription?: string;
}
/**
 * RPS模式的施压配置
 */
export interface RequestsPerSecond {
    /**
     * 最大RPS
     */
    MaxRequestsPerSecond?: number;
    /**
     * 施压时间
     */
    DurationSeconds?: number;
    /**
     * deprecated
     */
    TargetVirtualUsers?: number;
    /**
     * 资源数
     */
    Resources?: number;
    /**
     * 起始RPS
     */
    StartRequestsPerSecond?: number;
    /**
     * 目标RPS，入参无效
     */
    TargetRequestsPerSecond?: number;
    /**
     * 优雅关停的等待时间
     */
    GracefulStopSeconds?: number;
}
/**
 * DescribeRegions请求参数结构体
 */
export interface DescribeRegionsRequest {
    /**
     * 通过该参数指定不同压测网络环境，在不同网络环境下，PTS可用的地域不一样
     */
    LoadType?: number;
}
/**
 * DeleteScenarios返回参数结构体
 */
export interface DeleteScenariosResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEnvironment请求参数结构体
 */
export declare type CreateEnvironmentRequest = null;
/**
 * DescribeErrorSummary请求参数结构体
 */
export interface DescribeErrorSummaryRequest {
    /**
     * 任务ID
     */
    JobId: string;
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 过滤参数
     */
    Filters?: Array<Filter>;
}
/**
 * CopyScenario请求参数结构体
 */
export interface CopyScenarioRequest {
    /**
     * 项目 ID
     */
    ProjectId: string;
    /**
     * 场景 ID
     */
    ScenarioId: string;
}
/**
 * 测试数据集
 */
export interface TestData {
    /**
     * 测试数据集所在的文件名
     */
    Name: string;
    /**
     * 测试数据集是否分片
     */
    Split: boolean;
    /**
     * 首行是否为参数名
     */
    HeaderInFile: boolean;
    /**
     * 参数名数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeaderColumns?: Array<string>;
    /**
     * 文件行数
     */
    LineCount?: number;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedAt?: string;
    /**
     * 文件字节数
     */
    Size?: number;
    /**
     * 头部数据行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeadLines?: Array<string>;
    /**
     * 尾部数据行
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TailLines?: Array<string>;
    /**
     * 文件类型
     */
    Type?: string;
    /**
     * 文件 ID
     */
    FileId?: string;
}
/**
 * 采样日志
 */
export interface SampleLog {
    /**
     * 日志毫秒时间戳
     */
    Timestamp?: string;
    /**
     * 采样日志属性
     */
    Attributes?: Attributes;
    /**
     * har格式的采样请求
     */
    Body?: string;
}
/**
 * 施压机的域名解析相关配置
 */
export interface DomainNameConfig {
    /**
     * 域名绑定配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostAliases?: Array<HostAlias>;
    /**
     * DNS 配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DNSConfig?: DNSConfig;
}
/**
 * DescribeNormalLogs返回参数结构体
 */
export interface DescribeNormalLogsResponse {
    /**
     * 日志上下文，加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时
     */
    Context?: string;
    /**
     * 日志数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalLogs?: Array<NormalLog>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 测试启动前后的消息通知
 */
export interface Notification {
    /**
     * 发生事件
     */
    Events?: Array<string>;
    /**
     * webhook的网址
     */
    URL?: string;
}
/**
 * DescribeSampleBatchQuery请求参数结构体
 */
export interface DescribeSampleBatchQueryRequest {
    /**
     * 压测任务的 ID
     */
    JobId: string;
    /**
     * 场景的 ID
     */
    ScenarioId: string;
    /**
     * 查询指标数组
     */
    Queries: Array<InternalMetricQuery>;
    /**
     * 项目的 ID
     */
    ProjectId: string;
}
/**
 * RestartCronJobs请求参数结构体
 */
export interface RestartCronJobsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 定时任务ID数组
     */
    CronJobIds: Array<string>;
}
/**
 * DeleteScenarios请求参数结构体
 */
export interface DeleteScenariosRequest {
    /**
     * 场景ID数组
     */
    ScenarioIds: Array<string>;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 是否删除场景相关的任务。默认为否。
     */
    DeleteJobs?: boolean;
}
/**
 * CreateAlertChannel返回参数结构体
 */
export interface CreateAlertChannelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 指标结构
 */
export interface MetricInfo {
    /**
     * 后台指标
     */
    Metric?: string;
    /**
     * 前台展示指标名称
     */
    Alias?: string;
    /**
     * 指标描述
     */
    Description?: string;
    /**
     * 指标类型
     */
    MetricType?: string;
    /**
     * 默认指标单位
     */
    Unit?: string;
    /**
     * 指标支持的聚合函数
     */
    Aggregations?: Array<AggregationLegend>;
    /**
     * 是否内部指标，内部指标不可在前台提供用户自由选择
     */
    InnerMetric?: boolean;
}
/**
 * CreateAlertChannel请求参数结构体
 */
export interface CreateAlertChannelRequest {
    /**
     * monitor 服务的告警通知模板的 NoticeId，可从 monitor 服务的云 API 的 DescribeAlarmNotices 接口响应里的 Id 字段获取。（CreateAlertChannel 接口的入参里用于标识一个告警通知模板的 AMPConsumerId 与 NoticeId 二选一即可）
     */
    NoticeId: string;
    /**
     * 项目 ID
     */
    ProjectId: string;
    /**
     * monitor 服务的告警通知模板的 AMPConsumerId，可从 monitor 服务的云 API 的 DescribeAlarmNotices 接口响应里的 AMPConsumerId 字段获取。（CreateAlertChannel 接口的入参里用于标识一个告警通知模板的 AMPConsumerId 与 NoticeId 二选一即可）
     */
    AMPConsumerId?: string;
}
/**
 * 告警历史项的状态
 */
export interface AlertRecordStatus {
    /**
     * 停止压测任务成功与否
     */
    AbortJob?: number;
    /**
     * 发送告警通知成功与否
     */
    SendNotice?: number;
}
/**
 * DescribeAlertChannels请求参数结构体
 */
export interface DescribeAlertChannelsRequest {
    /**
     * 项目 ID 列表
     */
    ProjectIds: Array<string>;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大为100
     */
    Limit?: number;
    /**
     * Notice ID 列表
     */
    NoticeIds?: Array<string>;
    /**
     * 排序项
     */
    OrderBy?: string;
    /**
     * 是否正序
     */
    Ascend?: boolean;
}
/**
 * SLA 规则
 */
export interface SLARule {
    /**
     * 压测指标
     */
    Metric?: string;
    /**
     * 压测指标聚合方法
     */
    Aggregation?: string;
    /**
     * 压测指标条件判断符号
     */
    Condition?: string;
    /**
     * 阈值
     */
    Value?: number;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelFilter?: Array<SLALabel>;
    /**
     * 是否停止压测任务
     */
    AbortFlag?: boolean;
    /**
     * 持续时长
     */
    For?: string;
}
/**
 * DescribeAvailableMetrics返回参数结构体
 */
export interface DescribeAvailableMetricsResponse {
    /**
     * 系统支持的所有指标
     */
    MetricSet?: Array<MetricInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeMetricLabelWithValues返回参数结构体
 */
export interface DescribeMetricLabelWithValuesResponse {
    /**
     * 指标所有的label和values数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricLabelWithValuesSet?: Array<MetricLabelWithValues>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文件基本信息
 */
export interface FileInfo {
    /**
     * 文件名
     */
    Name?: string;
    /**
     * 文件大小
     */
    Size?: number;
    /**
     * 文件类型
     */
    Type?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedAt?: string;
    /**
     * 文件 ID
     */
    FileId?: string;
}
/**
 * 施压配置
 */
export interface LoadSpec {
    /**
     * 并发施压模式的配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Concurrency?: Concurrency;
    /**
     * RPS施压模式的配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestsPerSecond?: RequestsPerSecond;
    /**
     * 脚本内置压力模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScriptOrigin?: ScriptOrigin;
}
/**
 * 告警通知渠道
 */
export interface AlertChannel {
    /**
     * 通知模板ID
     */
    NoticeId?: string;
    /**
     * AMP consumer ID
     */
    AMPConsumerId?: string;
}
/**
 * DescribeEnvironments返回参数结构体
 */
export interface DescribeEnvironmentsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 脚本内置压力模型
 */
export interface ScriptOrigin {
    /**
     * 机器数量
     */
    MachineNumber: number;
    /**
     * 机器规格
     */
    MachineSpecification: string;
    /**
     * 压测时长
     */
    DurationSeconds: number;
}
/**
 * 查询与特定scenario关联的job的参数
 */
export interface ScenarioRelatedJobsParams {
    /**
     * job偏移量
     */
    Offset?: number;
    /**
     * 限制最多查询的job数
     */
    Limit?: number;
    /**
     * 排序字段
     */
    OrderBy?: string;
    /**
     * 是否升序
     */
    Ascend?: boolean;
}
/**
 * COS临时凭证
 */
export interface Credentials {
    /**
     * 临时secret ID
     */
    TmpSecretId?: string;
    /**
     * 临时secret key
     */
    TmpSecretKey?: string;
    /**
     * 临时token
     */
    Token?: string;
}
/**
 * DescribeAlertChannels返回参数结构体
 */
export interface DescribeAlertChannelsResponse {
    /**
     * 告警通知接收组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlertChannelSet?: Array<AlertChannelRecord>;
    /**
     * 告警通知接收组数目
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCronJob请求参数结构体
 */
export interface CreateCronJobRequest {
    /**
     * 定时任务名字
     */
    Name: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 场景名称
     */
    ScenarioName: string;
    /**
     * 执行频率类型，1:只执行一次; 2:日粒度; 3:周粒度; 4:高级
     */
    FrequencyType: number;
    /**
     * cron表达式
     */
    CronExpression: string;
    /**
     * 任务发起人
     */
    JobOwner: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * Notice ID
     */
    NoticeId?: string;
    /**
     * 备注
     */
    Note?: string;
}
/**
 * UpdateJob返回参数结构体
 */
export interface UpdateJobResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCheckSummary请求参数结构体
 */
export interface DescribeCheckSummaryRequest {
    /**
     * 任务ID
     */
    JobId: string;
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
}
/**
 * 指标查询过滤
 */
export interface Filter {
    /**
     * 等于：0，不等于：1
     */
    Operator: number;
    /**
     * 标签名，可选值包括：
  1. method，请求方法名；
  2. proto：协议名；
  3. service：服务名；
  4. status：响应状态码；
  5. result：响应详情；
  6. check：检查名。
     */
    LabelName: string;
    /**
     * 标签值：
  1. method：请求方法名，以 http 协议为例，method 为 GET、POST、PUT 等；
  2. proto：协议名，以 http 协议为例，proto 为 HTTP/1.1、HTTP/2 等；
  3. service：服务名，以 http 协议为例，service 为请求 url，如 http://httpbin.org/get 等；
  4. status：响应状态码，以 http 协议为例，状态码包括 200、404、500 等；
  5. result：响应详情，通过 result 判断请求成功或失败；请求正常，result 标签值为 ok；请求失败，result 标签携带错误码和描述；
  6. check：检查名，标签值为用户设置的检查点名称。
     */
    LabelValue: string;
}
/**
 * DeleteFiles返回参数结构体
 */
export interface DeleteFilesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 聚合函数
 */
export interface AggregationLegend {
    /**
     * 指标支持的聚合函数
     */
    Aggregation: string;
    /**
     * 聚合函数作用于指标后对应的描述
     */
    Legend: string;
    /**
     * 聚合之后的指标单位
     */
    Unit: string;
}
/**
 * 发压host来源
 */
export interface LoadSource {
    /**
     * 发压host的IP
     */
    IP?: string;
    /**
     * 发压host所在的pod
     */
    PodName?: string;
    /**
     * 所属地域
     */
    Region?: string;
}
/**
 * 指标矩阵，可包含多条指标序列
 */
export interface CustomSampleMatrix {
    /**
     * 指标名字
     */
    Metric?: string;
    /**
     * 聚合函数
     */
    Aggregation?: string;
    /**
     * 指标单位
     */
    Unit?: string;
    /**
     * 指标序列数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Streams?: Array<SampleStream>;
}
/**
 * 施压配置
 */
export interface Load {
    /**
     * 施压配置
     */
    LoadSpec?: LoadSpec;
    /**
     * 压力来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcLoadDistribution?: VpcLoadDistribution;
    /**
     * 多地域压力分布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GeoRegionsLoadDistribution?: Array<GeoRegionsLoadItem>;
}
/**
 * CreateFile请求参数结构体
 */
export interface CreateFileRequest {
    /**
     * 文件 ID。其值应为前序步骤上传该文件到 cos 桶后，文件在 cos 桶中的相应目录
     */
    FileId: string;
    /**
     * 项目 ID
     */
    ProjectId: string;
    /**
     * 文件种类，参数文件-1，协议文件-2，请求文件-3
     */
    Kind: number;
    /**
     * 文件名
     */
    Name: string;
    /**
     * 文件大小
     */
    Size: number;
    /**
     * 文件类型，文件夹-folder
     */
    Type: string;
    /**
     * 行数
     */
    LineCount?: number;
    /**
     * 前几行数据
     */
    HeadLines?: Array<string>;
    /**
     * 后几行数据
     */
    TailLines?: Array<string>;
    /**
     * 表头是否在文件内
     */
    HeaderInFile?: boolean;
    /**
     * 表头
     */
    HeaderColumns?: Array<string>;
    /**
     * 文件夹中的文件
     */
    FileInfos?: Array<FileInfo>;
}
/**
 * 压测请求明细
 */
export interface RequestSummary {
    /**
     * 请求URL
     */
    Service?: string;
    /**
     * 请求方法
     */
    Method?: string;
    /**
     * 请求次数
     */
    Count?: number;
    /**
     * 请求响应平均耗时，单位秒
     */
    Average?: number;
    /**
     * 请求p90耗时，单位秒
     */
    P90?: number;
    /**
     * 请求p95耗时，单位秒
     */
    P95?: number;
    /**
     * 请求最小耗时，单位秒
     */
    Min?: number;
    /**
     * 请求最大耗时，单位秒
     */
    Max?: number;
    /**
     * 请求错误率
     */
    ErrorPercentage?: number;
    /**
     * 请求p99耗时，单位秒
     */
    P99?: number;
    /**
     * 响应状态码
     */
    Status?: string;
    /**
     * 响应详情
     */
    Result?: string;
    /**
     * 平均rps, 单位req/s
     */
    RPS?: number;
}
/**
 * DeleteCronJobs请求参数结构体
 */
export interface DeleteCronJobsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 定时任务ID数组
     */
    CronJobIds: Array<string>;
}
/**
 * DescribeSampleLogs返回参数结构体
 */
export interface DescribeSampleLogsResponse {
    /**
     * 日志总数
     */
    Total?: number;
    /**
     * 日志上下文，加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时
     */
    Context?: string;
    /**
     * 采样日志数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SampleLogs?: Array<SampleLog>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCronJobs返回参数结构体
 */
export interface DescribeCronJobsResponse {
    /**
     * 定时任务总数
     */
    Total?: number;
    /**
     * 定时任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CronJobSet?: Array<CronJob>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNormalLogs请求参数结构体
 */
export interface DescribeNormalLogsRequest {
    /**
     * 压测项目ID
     */
    ProjectId: string;
    /**
     * 测试场景ID
     */
    ScenarioId: string;
    /**
     * 压测任务ID
     */
    JobId: string;
    /**
     * 日志上下文，加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容。过期时间1小时
     */
    Context?: string;
    /**
     * 日志开始时间
     */
    From?: string;
    /**
     * 日志结束时间
     */
    To?: string;
    /**
     * 日志级别，可取debug/info/error
     */
    SeverityText?: string;
    /**
     * 施压节点IP
     */
    Instance?: string;
    /**
     * 施压节点所在地域
     */
    InstanceRegion?: string;
    /**
     * 日志类型， console代表用户输出，engine代表引擎输出
     */
    LogType?: string;
    /**
     * 返回日志条数限制，最大100
     */
    Limit?: number;
}
/**
 * DescribeJobs请求参数结构体
 */
export interface DescribeJobsRequest {
    /**
     * 场景ID数组
     */
    ScenarioIds: Array<string>;
    /**
     * 项目ID数组
     */
    ProjectIds: Array<string>;
    /**
     * 分页起始位置
     */
    Offset?: number;
    /**
     * 每页最大数目
     */
    Limit?: number;
    /**
     * 任务ID数组
     */
    JobIds?: Array<string>;
    /**
     * 按字段排序
     */
    OrderBy?: string;
    /**
     * 升序/降序
     */
    Ascend?: boolean;
    /**
     * 任务开始时间
     */
    StartTime?: string;
    /**
     * 任务结束时间
     */
    EndTime?: string;
    /**
     * 调试任务标记
     */
    Debug?: boolean;
    /**
     * 任务的状态
     */
    Status?: Array<number | bigint>;
}
/**
 * DescribeFiles请求参数结构体
 */
export interface DescribeFilesRequest {
    /**
     * 项目 ID 数组
     */
    ProjectIds: Array<string>;
    /**
     * 文件 ID 数组
     */
    FileIds?: Array<string>;
    /**
     * 文件名
     */
    FileName?: string;
    /**
     * 偏移量，默认为 0
     */
    Offset?: number;
    /**
     * 返回数量，默认为 20，最大为 100
     */
    Limit?: number;
    /**
     * 文件种类，参数文件-1，协议文件-2，请求文件-3
     */
    Kind?: number;
}
/**
 * AbortCronJobs请求参数结构体
 */
export interface AbortCronJobsRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 定时任务ID数组
     */
    CronJobIds: Array<string>;
}
/**
 * DescribeSampleMatrixBatchQuery请求参数结构体
 */
export interface DescribeSampleMatrixBatchQueryRequest {
    /**
     * 任务ID
     */
    JobId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 查询语句
     */
    Queries: Array<InternalMetricQuery>;
}
/**
 * DescribeAlertRecords返回参数结构体
 */
export interface DescribeAlertRecordsResponse {
    /**
     * 告警历史
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlertRecordSet?: Array<AlertRecord>;
    /**
     * 告警历史记录的总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProjects请求参数结构体
 */
export interface DescribeProjectsRequest {
    /**
     * 分页offset
     */
    Offset?: number;
    /**
     * 每页limit
     */
    Limit?: number;
    /**
     * 项目ID数组
     */
    ProjectIds?: Array<string>;
    /**
     * 项目名
     */
    ProjectName?: string;
    /**
     * 按字段排序
     */
    OrderBy?: string;
    /**
     * 升序/降序
     */
    Ascend?: boolean;
    /**
     * 标签数组
     */
    TagFilters?: Array<TagSpec>;
}
/**
 * DescribeSampleQuery返回参数结构体
 */
export interface DescribeSampleQueryResponse {
    /**
     * 返回指标内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricSample?: CustomSample;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteEnvironments请求参数结构体
 */
export declare type DeleteEnvironmentsRequest = null;
/**
 * CreateScenario请求参数结构体
 */
export interface CreateScenarioRequest {
    /**
     * 场景名
     */
    Name: string;
    /**
     * 压测引擎类型
     */
    Type: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 场景描述
     */
    Description?: string;
    /**
     * 施压配置
     */
    Load?: Load;
    /**
     * deprecated
     */
    Configs?: Array<string>;
    /**
     * 测试数据集
     */
    Datasets?: Array<TestData>;
    /**
     * deprecated
     */
    Extensions?: Array<string>;
    /**
     * deprecated
     */
    SLAId?: string;
    /**
     * cron job ID
     */
    CronId?: string;
    /**
     * deprecated
     */
    Scripts?: Array<string>;
    /**
     * 测试脚本文件信息
     */
    TestScripts?: Array<ScriptInfo>;
    /**
     * 协议文件路径
     */
    Protocols?: Array<ProtocolInfo>;
    /**
     * 请求文件路径
     */
    RequestFiles?: Array<FileInfo>;
    /**
     * SLA 策略
     */
    SLAPolicy?: SLAPolicy;
    /**
     * 拓展包文件路径
     */
    Plugins?: Array<FileInfo>;
    /**
     * 域名解析配置
     */
    DomainNameConfig?: DomainNameConfig;
    /**
     * 创建人名
     */
    Owner?: string;
}
/**
 * DescribeMetricLabelWithValues请求参数结构体
 */
export interface DescribeMetricLabelWithValuesRequest {
    /**
     * job id
     */
    JobId: string;
    /**
     * project id
     */
    ProjectId: string;
    /**
     * scenario id
     */
    ScenarioId: string;
}
/**
 * 场景列表
 */
export interface Scenario {
    /**
     * 场景ID
     */
    ScenarioId?: string;
    /**
     * 场景名
     */
    Name?: string;
    /**
     * 场景描述
     */
    Description?: string;
    /**
     * 场景类型，如pts-http, pts-js, pts-trpc, pts-jmeter
     */
    Type?: string;
    /**
     * 场景状态
     */
    Status?: number;
    /**
     * 施压配置
     */
    Load?: Load;
    /**
     * deprecated
     */
    EncodedScripts?: string;
    /**
     * deprecated
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Configs?: Array<string>;
    /**
     * deprecated
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Extensions?: Array<string>;
    /**
     * 测试数据集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Datasets?: Array<TestData>;
    /**
     * SLA规则的ID
     */
    SLAId?: string;
    /**
     * Cron Job规则的ID
     */
    CronId?: string;
    /**
     * 场景创建时间
     */
    CreatedAt?: string;
    /**
     * 场景修改时间
     */
    UpdatedAt?: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * App ID
     */
    AppId?: number;
    /**
     * 用户ID
     */
    Uin?: string;
    /**
     * 子用户ID
     */
    SubAccountUin?: string;
    /**
     * 测试脚本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TestScripts?: Array<ScriptInfo>;
    /**
     * 协议文件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocols?: Array<ProtocolInfo>;
    /**
     * 请求文件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestFiles?: Array<FileInfo>;
    /**
     * SLA 策略
     */
    SLAPolicy?: SLAPolicy;
    /**
     * 扩展包信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Plugins?: Array<FileInfo>;
    /**
     * 域名解析配置
     */
    DomainNameConfig?: DomainNameConfig;
    /**
     * 通知事件回调
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NotificationHooks?: Array<NotificationHook>;
    /**
     * 创建人员
     */
    Owner?: string;
    /**
     * 场景所在的项目的名字
     */
    ProjectName?: string;
}
/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
    /**
     * 项目数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectSet?: Array<Project>;
    /**
     * 项目数量
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateCronJob请求参数结构体
 */
export interface UpdateCronJobRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 定时任务ID
     */
    CronJobId: string;
    /**
     * 备注
     */
    Note: string;
    /**
     * cron表达式
     */
    CronExpression: string;
    /**
     * 执行频率类型，1:只执行一次; 2:日粒度; 3:周粒度; 4:高级
     */
    FrequencyType: number;
    /**
     * 定时任务名字
     */
    Name: string;
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 场景名称
     */
    ScenarioName: string;
    /**
     * 任务发起人
     */
    JobOwner: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * Notice ID
     */
    NoticeId?: string;
}
/**
 * 地域
 */
export interface RegionDetail {
    /**
     * 地域代码
     */
    Region: string;
    /**
     * 地域ID
     */
    RegionId: number;
    /**
     * 地域所在的地区
     */
    Area?: string;
    /**
     * 地域名称
     */
    RegionName?: string;
    /**
     * 地域状态
     */
    RegionState?: number;
    /**
     * 地域简称
     */
    RegionShortName?: string;
    /**
     * 创建时间
     */
    CreatedAt?: string;
    /**
     * 更新时间
     */
    UpdatedAt?: string;
}
/**
 * 连续指标采样内容
 */
export interface SampleStream {
    /**
     * labels描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<Label>;
    /**
     * 指标采样数组
     */
    Values?: Array<SamplePair>;
    /**
     * 指标序列名字
     */
    Name?: string;
}
/**
 * DescribeCheckSummary返回参数结构体
 */
export interface DescribeCheckSummaryResponse {
    /**
     * 检查点汇总信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckSummarySet?: Array<CheckSummary>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeScenarios请求参数结构体
 */
export interface DescribeScenariosRequest {
    /**
     * 场景ID数组
     */
    ScenarioIds?: Array<string>;
    /**
     * 场景名
     */
    ScenarioName?: string;
    /**
     * 场景状态数组
     */
    ScenarioStatus?: Array<number | bigint>;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大为100
     */
    Limit?: number;
    /**
     * 排序的列
     */
    OrderBy?: string;
    /**
     * 是否正序
     */
    Ascend?: boolean;
    /**
     * 项目ID数组
     */
    ProjectIds?: Array<string>;
    /**
     * 场景类型
     */
    ScenarioType?: string;
}
/**
 * DescribeScenarios返回参数结构体
 */
export interface DescribeScenariosResponse {
    /**
     * 场景列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScenarioSet?: Array<Scenario>;
    /**
     * 场景总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateScenario返回参数结构体
 */
export interface CreateScenarioResponse {
    /**
     * 场景ID
     */
    ScenarioId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AbortJob请求参数结构体
 */
export interface AbortJobRequest {
    /**
     * 待停止的压测任务的 ID（所有的压测任务 ID 可以从 DescribeJobs 接口获取）
     */
    JobId: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 中断原因
     */
    AbortReason?: number;
}
/**
 * DeleteFiles请求参数结构体
 */
export interface DeleteFilesRequest {
    /**
     * 项目 ID
     */
    ProjectId: string;
    /**
     * 待删除的文件的 ID（所有文件 ID 可从接口 DescribeFiles 获取）
     */
    FileIds: Array<string>;
}
/**
 * 检查点汇总结果
 */
export interface CheckSummary {
    /**
     * 检查点名字
     */
    Name?: string;
    /**
     * 检查点所在步骤名字
     */
    Step?: string;
    /**
     * 检查点成功次数
     */
    SuccessCount?: number;
    /**
     * 检查失败次数
     */
    FailCount?: number;
    /**
     * 错误比例
     */
    ErrorRate?: number;
}
/**
 * 事件通知回调
 */
export interface NotificationHook {
    /**
     * 通知事件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Events?: Array<string>;
    /**
     * 回调 URL
     */
    URL?: string;
}
/**
 * DescribeJobs返回参数结构体
 */
export interface DescribeJobsResponse {
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobSet?: Array<Job>;
    /**
     * 任务数量
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GenerateTmpKey请求参数结构体
 */
export interface GenerateTmpKeyRequest {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 场景ID
     */
    ScenarioId?: string;
}
/**
 * DescribeSampleBatchQuery返回参数结构体
 */
export interface DescribeSampleBatchQueryResponse {
    /**
     * 返回指标内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricSampleSet?: Array<CustomSample>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartJob返回参数结构体
 */
export interface StartJobResponse {
    /**
     * 任务ID
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateScenario请求参数结构体
 */
export interface UpdateScenarioRequest {
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 场景名；调用该接口时，请将 Scenario 中不需要修改的字段保持原样也作为接口的入参，否则场景可能会不可用。
     */
    Name?: string;
    /**
     * 场景描述
     */
    Description?: string;
    /**
     * 压测场景的模式类型。取值范围：pts-http 代表简单模式，pts-js 代表脚本模式，pts-jmeter 代表 JMeter 模式。
     */
    Type?: string;
    /**
     * 施压配置
     */
    Load?: Load;
    /**
     * deprecated
     */
    EncodedScripts?: string;
    /**
     * deprecated
     */
    Configs?: Array<string>;
    /**
     * 测试数据集
     */
    Datasets?: Array<TestData>;
    /**
     * deprecated
     */
    Extensions?: Array<string>;
    /**
     * SLA规则ID
     */
    SLAId?: string;
    /**
     * cron job ID
     */
    CronId?: string;
    /**
     * 场景状态（注：现已无需传递该参数）
     */
    Status?: number;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 测试脚本路径
     */
    TestScripts?: Array<ScriptInfo>;
    /**
     * 协议文件路径
     */
    Protocols?: Array<ProtocolInfo>;
    /**
     * 请求文件路径
     */
    RequestFiles?: Array<FileInfo>;
    /**
     * SLA 策略
     */
    SLAPolicy?: SLAPolicy;
    /**
     * 拓展包文件路径
     */
    Plugins?: Array<FileInfo>;
    /**
     * 域名解析配置
     */
    DomainNameConfig?: DomainNameConfig;
    /**
     * WebHook请求配置
     */
    NotificationHooks?: Array<Notification>;
    /**
     * 创建人名
     */
    Owner?: string;
    /**
     * 环境ID
     */
    EnvId?: string;
}
/**
 * PTS提供的指标名，指标对应的labels及values
 */
export interface MetricLabelWithValues {
    /**
     * metric 名字
     */
    MetricName: string;
    /**
     * label及values 数组
     */
    LabelValuesSet: Array<LabelWithValues>;
}
/**
 * DeleteCronJobs返回参数结构体
 */
export interface DeleteCronJobsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartJob请求参数结构体
 */
export interface StartJobRequest {
    /**
     * 场景ID
     */
    ScenarioId: string;
    /**
     * 任务发起人
     */
    JobOwner: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 是否调试
     */
    Debug?: boolean;
    /**
     * 备注
     */
    Note?: string;
}
/**
 * DescribeScenarioWithJobs返回参数结构体
 */
export interface DescribeScenarioWithJobsResponse {
    /**
     * 场景配置以及附带的job内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScenarioWithJobsSet?: Array<ScenarioWithJobs>;
    /**
     * 场景总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 采用日志响应时间RT范围
 */
export interface ReactionTimeRange {
    /**
     * 最小响应时间，单位ms
     */
    Min?: string;
    /**
     * 最大响应时间，单位ms
     */
    Max?: string;
}
/**
 * 并发模式的施压配置
 */
export interface Concurrency {
    /**
     * 多阶段配置数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Stages?: Array<Stage>;
    /**
     * 运行次数
     */
    IterationCount?: number;
    /**
     * 最大RPS
     */
    MaxRequestsPerSecond?: number;
    /**
     * 优雅终止任务的等待时间
     */
    GracefulStopSeconds?: number;
    /**
     * 资源数
     */
    Resources?: number;
}
/**
 * DeleteAlertChannel请求参数结构体
 */
export interface DeleteAlertChannelRequest {
    /**
     * 项目 ID
     */
    ProjectId: string;
    /**
     * 待删除的通知渠道的 Notice ID（所有通知渠道的 Notice ID 可以从 DescribeAlertChannels 接口获取）
     */
    NoticeId: string;
}
/**
 * DescribeErrorSummary返回参数结构体
 */
export interface DescribeErrorSummaryResponse {
    /**
     * 错误汇总信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorSummarySet?: Array<ErrorSummary>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateProject返回参数结构体
 */
export interface UpdateProjectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateFileScenarioRelation返回参数结构体
 */
export interface UpdateFileScenarioRelationResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}

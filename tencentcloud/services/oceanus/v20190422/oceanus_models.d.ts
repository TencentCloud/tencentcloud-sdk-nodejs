/**
 * 复制作业单条明细结果
 */
export interface CopyJobResult {
    /**
     * 原作业id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId: string;
    /**
     * 原作业名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobName: string;
    /**
     * 新作业名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetJobName: string;
    /**
     * 新作业id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetJobId: string;
    /**
     * 失败时候的信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message: string;
    /**
     * 0 成功  -1 失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: number;
    /**
     * 目标集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName: string;
    /**
     * 目标集群id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId: string;
    /**
     * 作业类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobType: number;
}
/**
 * CreateResource请求参数结构体
 */
export interface CreateResourceRequest {
    /**
     * 资源位置
     */
    ResourceLoc: ResourceLoc;
    /**
     * 资源类型。目前只支持 JAR，取值为 1
     */
    ResourceType: number;
    /**
     * 资源描述
     */
    Remark?: string;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 资源版本描述
     */
    ResourceConfigRemark?: string;
    /**
     * 目录ID
     */
    FolderId?: string;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * ModifyFolder请求参数结构体
 */
export interface ModifyFolderRequest {
    /**
     * 文件夹ID（必填）
     */
    SourceFolderId?: string;
    /**
     * 如需拖拽文件夹，需传入目标文件夹ID
     */
    TargetFolderId?: string;
    /**
     * 如需修改文件夹名，需传入FolderName字段
     */
    FolderName?: string;
    /**
     * 文件夹类型，0是任务文件夹，1是依赖文件夹
     */
    FolderType?: number;
    /**
     * 批量移动的作业serial id 列表
     */
    SourceJobIds?: Array<string>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * DescribeJobSubmissionLog返回参数结构体
 */
export interface DescribeJobSubmissionLogResponse {
    /**
     * 日志搜索的游标，需要搜索更多时透传这个值
     */
    Cursor?: string;
    /**
     * 是否返回了所有的日志记录
     */
    ListOver?: boolean;
    /**
     * 作业启动的requestId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobRequestId?: string;
    /**
     * 该时间段内符合关键字的所有的作业实例列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobInstanceList?: Array<JobInstanceForSubmissionLog>;
    /**
     * 废弃，请使用LogContentList
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogList?: Array<string>;
    /**
     * 日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogContentList?: Array<LogContent>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteJobs请求参数结构体
 */
export interface DeleteJobsRequest {
    /**
     * 作业Id列表
     */
    JobIds: Array<string>;
    /**
     * 工作空间Id
     */
    WorkSpaceId?: string;
    /**
     * 作业名称列表
     */
    JobNames?: Array<string>;
}
/**
 * ModifyWorkSpace请求参数结构体
 */
export interface ModifyWorkSpaceRequest {
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId: string;
    /**
     * 待修改的工作空间名称
     */
    WorkSpaceName?: string;
    /**
     * 待修改的工作空间备注
     */
    Description?: string;
}
/**
 * ModifyJob返回参数结构体
 */
export interface ModifyJobResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateJobConfig返回参数结构体
 */
export interface CreateJobConfigResponse {
    /**
     * 作业配置版本号
     */
    Version?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateResourceConfig返回参数结构体
 */
export interface CreateResourceConfigResponse {
    /**
     * 资源版本ID
     */
    Version?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateJobConfig请求参数结构体
 */
export interface CreateJobConfigRequest {
    /**
     * 作业Id
     */
    JobId: string;
    /**
     * 主类
     */
    EntrypointClass?: string;
    /**
     * 主类入参
     */
    ProgramArgs?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 资源引用数组
     */
    ResourceRefs?: Array<ResourceRef>;
    /**
     * 作业默认并行度
     */
    DefaultParallelism?: number;
    /**
     * 系统参数
     */
    Properties?: Array<Property>;
    /**
     * 1: 作业配置达到上限之后，自动删除可删除的最早版本
     */
    AutoDelete?: number;
    /**
     * 作业使用的 COS 存储桶名
     */
    COSBucket?: string;
    /**
     * 是否采集作业日志
     */
    LogCollect?: boolean;
    /**
     * JobManager规格
     */
    JobManagerSpec?: number;
    /**
     * TaskManager规格
     */
    TaskManagerSpec?: number;
    /**
     * CLS日志集ID
     */
    ClsLogsetId?: string;
    /**
     * CLS日志主题ID
     */
    ClsTopicId?: string;
    /**
     * 日志采集类型 2：CLS；3：COS
     */
    LogCollectType?: number;
    /**
     * pyflink作业运行时使用的python版本
     */
    PythonVersion?: string;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
    /**
     * 日志级别
     */
    LogLevel?: string;
    /**
     * Oceanus 平台恢复作业开关 1:开启 -1: 关闭
     */
    AutoRecover?: number;
    /**
     * 类日志级别
     */
    ClazzLevels?: Array<ClazzLevel>;
    /**
     * 是否打开专家模式
     */
    ExpertModeOn?: boolean;
    /**
     * 专家模式的配置
     */
    ExpertModeConfiguration?: ExpertModeConfiguration;
    /**
     * trace链路
     */
    TraceModeOn?: boolean;
    /**
     * trace链路配置
     */
    TraceModeConfiguration?: TraceModeConfiguration;
    /**
     * checkpoint保留个数
     */
    CheckpointRetainedNum?: number;
    /**
     * 算子拓扑图
     */
    JobGraph?: JobGraph;
    /**
     * es索引名称
     */
    EsServerlessIndex?: string;
    /**
     * es索引空间
     */
    EsServerlessSpace?: string;
    /**
     * flink版本
     */
    FlinkVersion?: string;
    /**
     * JobManager cpu
     */
    JobManagerCpu?: number;
    /**
     * JobManager 内存
     */
    JobManagerMem?: number;
    /**
     * TaskManager cpu
     */
    TaskManagerCpu?: number;
    /**
     * TaskManager 内存
     */
    TaskManagerMem?: number;
}
/**
 * 集群的版本相关信息
 */
export interface ClusterVersion {
    /**
     * 集群的Flink版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Flink: string;
    /**
     * 集群支持的Flink版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SupportedFlink: Array<string>;
}
/**
 * DescribeTreeJobs返回参数结构体
 */
export interface DescribeTreeJobsResponse {
    /**
     * 父节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId?: string;
    /**
     * 当前文件夹ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 当前文件夹名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 当前文件夹下的作业列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobSet?: Array<TreeJobSets>;
    /**
     * 迭代子目录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<DescribeTreeJobsRsp>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CopyJobs请求参数结构体
 */
export interface CopyJobsRequest {
    /**
     * 复制明细列表
     */
    JobItems: Array<CopyJobItem>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
    /**
     * 目标工作空间 SerialId
     */
    TargetWorkspaceId?: string;
}
/**
 * CopyJobs返回参数结构体
 */
export interface CopyJobsResponse {
    /**
     * 成功条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessCount?: number;
    /**
     * 失败条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailCount?: number;
    /**
     * 结果列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CopyJobsResults?: Array<CopyJobResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TriggerJobSavepoint请求参数结构体
 */
export interface TriggerJobSavepointRequest {
    /**
     * 作业 SerialId
     */
    JobId: string;
    /**
     * 描述
     */
    Description?: string;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * 日志查询的每行日志信息
 */
export interface LogContent {
    /**
     * 日志内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Log: string;
    /**
     * 毫秒级时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time: number;
    /**
     * 日志组Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgId: string;
    /**
     * 日志Id，在日志组范围里唯一
     */
    PkgLogId: number;
    /**
     * 日志所属的容器名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerName: string;
}
/**
 * DeleteJobConfigs请求参数结构体
 */
export interface DeleteJobConfigsRequest {
    /**
     * 作业ID
     */
    JobId: string;
    /**
     * 作业配置版本数组
     */
    JobConfigVersions: Array<number | bigint>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * 事件信息
 */
export interface JobEventInfo {
    /**
     * 异常事件总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorEventTotal?: number;
}
/**
 * 资源参数描述
 */
export interface ResourceLocParam {
    /**
     * 资源bucket
     */
    Bucket: string;
    /**
     * 资源路径
     */
    Path: string;
    /**
     * 资源所在地域，如果不填，则使用Resource的Region
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
}
/**
 * 专家模式  计算节点的配置信息
 */
export interface NodeConfig {
    /**
     * Node ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: number;
    /**
     * Node parallelism
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Parallelism?: number;
    /**
     * Slot sharing group
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlotSharingGroup?: string;
    /**
     * Configuration properties
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Configuration?: Array<Property>;
    /**
     * 节点的状态ttl配置, 多个用 ; 分割
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StateTTL?: string;
}
/**
 * 工作空间详情
 */
export interface WorkSpaceSetItem {
    /**
     * 工作空间 SerialId
     */
    SerialId: string;
    /**
     * 用户 APPID
     */
    AppId: number;
    /**
     * 主账号 UIN
     */
    OwnerUin: string;
    /**
     * 创建者 UIN
     */
    CreatorUin: string;
    /**
     * 工作空间名称
     */
    WorkSpaceName: string;
    /**
     * 区域
     */
    Region: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 更新时间
     */
    UpdateTime: string;
    /**
     * 1 未初始化 2 可用  -1 已删除
     */
    Status: number;
    /**
     * 工作空间描述
     */
    Description: string;
    /**
     * 工作空间包含集群信息
     */
    ClusterGroupSetItem: Array<ClusterGroupSetItem>;
    /**
     * 工作空间角色的信息
     */
    RoleAuth: Array<RoleAuth>;
    /**
     * 工作空间成员数量
     */
    RoleAuthCount: number;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobsCount: number;
}
/**
 * DescribeJobSavepoint请求参数结构体
 */
export interface DescribeJobSavepointRequest {
    /**
     * 作业 SerialId
     */
    JobId: string;
    /**
     * 分页参数，单页总数
     */
    Limit: number;
    /**
     * 分页参数，偏移量
     */
    Offset: number;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
    /**
     * 2 是checkpoint
  1 是触发savepoint
  3 停止触发的savepoint
     */
    RecordTypes?: Array<number | bigint>;
}
/**
 * Sql Gateway返回Column类型
 */
export interface ResultColumn {
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 本地类型描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogicalType?: LogicalType;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Comment?: string;
}
/**
 * 自定义树结构出参作业列表
 */
export interface TreeJobSets {
    /**
     * 作业Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 作业名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 作业类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobType?: number;
    /**
     * 作业占用资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningCu?: number;
    /**
     * 作业状态 启动或者停止或者暂停
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 0:代表没开启调优任务，1:开启智能调优，2:代表定时调优
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScalingType?: number;
    /**
     * RunningCpu
     */
    RunningCpu?: number;
    /**
     * RunningMem
     */
    RunningMem?: number;
}
/**
 * 资源详细描述
 */
export interface ResourceItem {
    /**
     * 资源ID
     */
    ResourceId?: string;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 资源类型
     */
    ResourceType?: number;
    /**
     * 资源位置
     */
    ResourceLoc?: ResourceLoc;
    /**
     * 资源地域
     */
    Region?: string;
    /**
     * 应用ID
     */
    AppId?: number;
    /**
     * 主账号Uin
     */
    OwnerUin?: string;
    /**
     * 子账号Uin
     */
    CreatorUin?: string;
    /**
     * 资源创建时间
     */
    CreateTime?: string;
    /**
     * 资源最后更新时间
     */
    UpdateTime?: string;
    /**
     * 资源的资源版本ID
     */
    LatestResourceConfigVersion?: number;
    /**
     * 资源备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 版本个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionCount?: number;
    /**
     * 关联作业数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RefJobCount?: number;
    /**
     * 作业运行状态
     */
    IsJobRun?: number;
    /**
     * 文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName?: string;
    /**
     * 工作空间ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkSpaceId?: number;
    /**
     * 分状态统计关联作业数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RefJobStatusCountSet?: Array<RefJobStatusCountItem>;
    /**
     * 连接器名称
     */
    Connector?: string;
    /**
     * 连接器版本
     */
    ConnectorVersion?: string;
    /**
     * 连接方式
     */
    ConnectionMethod?: string;
    /**
     * connector关联的资源id
     */
    RelatedResourceId?: string;
    /**
     * 图标
     */
    Icon?: string;
    /**
     * 连接器中文名
     */
    ConnectorName?: string;
    /**
     * 连接器官网链接
     */
    ConnectorUrl?: string;
}
/**
 * 依赖作业分状态计数信息
 */
export interface RefJobStatusCountItem {
    /**
     * 作业状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobStatus?: number;
    /**
     * 作业数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count?: number;
}
/**
 * RunSqlGatewayStatement请求参数结构体
 */
export interface RunSqlGatewayStatementRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * 需要执行的sql，该sql会被Sql Gateway执行，当前支持的是paimon修改需求，因此主要是DDL语句
     */
    Sql: string;
    /**
     * Sql Gateway会话ID，可不填，如果不填则会自动创建一个会话ID，每个会话ID都有一个存活时间，测试环境为10分钟，线上默认是30分钟
     */
    SessionId?: string;
}
/**
 * DescribeFolder返回参数结构体
 */
export interface DescribeFolderResponse {
    /**
     * folder id
     */
    FolderId?: string;
    /**
     * folder name
     */
    FolderName?: string;
    /**
     * 父文件夹id
     */
    ParentId?: string;
    /**
     * 文件夹类型
     */
    FolderType?: number;
    /**
     * workspace id
     */
    WorkSpaceId?: string;
    /**
     * 子文件夹信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubFolderInfo?: Array<SubFolderInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资源位置描述
 */
export interface ResourceLoc {
    /**
     * 资源位置的存储类型，目前只支持1:COS
     */
    StorageType: number;
    /**
     * 描述资源位置的json
     */
    Param: ResourceLocParam;
}
/**
 * 云联网描述信息
 */
export interface CCN {
    /**
     * 私有网络 ID
     */
    VpcId: string;
    /**
     * 子网 ID
     */
    SubnetId: string;
    /**
     * 云联网 ID，如 ccn-rahigzjd
     */
    CcnId: string;
}
/**
 * DescribeWorkSpaces请求参数结构体
 */
export interface DescribeWorkSpacesRequest {
    /**
     * 偏移量，默认 0
     */
    Offset?: number;
    /**
     * 1 按照创建时间降序排序(默认) 2.按照创建时间升序排序，3. 按照状态降序排序 4. 按照状态升序排序 默认为0
     */
    OrderType?: number;
    /**
     * 请求的集群数量，默认 20
     */
    Limit?: number;
    /**
     * 过滤规则
     */
    Filters?: Array<Filter>;
}
/**
 * 资源被Job 引用信息
 */
export interface ResourceRefJobInfo {
    /**
     * Job id
     */
    JobId?: string;
    /**
     * Job配置版本
     */
    JobConfigVersion?: number;
    /**
     * 资源版本
     */
    ResourceVersion?: number;
}
/**
 * SqlGateway返回LogicalType类型
 */
export interface LogicalType {
    /**
     * 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 是否允许为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NullAble?: boolean;
    /**
     * 长度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Length?: number;
}
/**
 * DescribeTreeResources请求参数结构体
 */
export interface DescribeTreeResourcesRequest {
    /**
     * 筛选条件字段
     */
    Filters?: Array<Filter>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
    /**
     * 分页游标
     */
    Offset?: number;
    /**
     * 单页显示数
     */
    Limit?: number;
}
/**
 * DescribeResourceConfigs返回参数结构体
 */
export interface DescribeResourceConfigsResponse {
    /**
     * 资源配置描述数组
     */
    ResourceConfigSet?: Array<ResourceConfigItem>;
    /**
     * 资源配置数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
    /**
     * 按照一个或者多个集群 ID 查询，每次请求的集群上限为 100
     */
    ClusterIds?: Array<string>;
    /**
     * 偏移量，默认 0
     */
    Offset?: number;
    /**
     * 请求的集群数量，默认 20，最大值 100
     */
    Limit?: number;
    /**
     * 集群信息结果排序规则，1 按时间降序，2 按照时间升序，3  按照状态排序
     */
    OrderType?: number;
    /**
     * 过滤规则
     */
    Filters?: Array<Filter>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * CreateWorkSpace返回参数结构体
 */
export interface CreateWorkSpaceResponse {
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateJob返回参数结构体
 */
export interface CreateJobResponse {
    /**
     * 作业Id
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SqlGateway配置信息
 */
export interface SqlGatewayItem {
    /**
     * 唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SerialId?: string;
    /**
     * Flink内核版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlinkVersion?: string;
    /**
     * 状态，1.停止 2. 开启中 3. 开启 4. 开启失败 5. 停止中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorUin?: string;
    /**
     * 引用资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceRefs?: Array<GatewayRefItem>;
    /**
     * Cu规格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CuSpec?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 配置参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: Array<Property>;
    /**
     * Cpu
     */
    Cpu?: number;
    /**
     * Mem
     */
    Mem?: number;
}
/**
 * DescribeJobRuntimeInfo返回参数结构体
 */
export interface DescribeJobRuntimeInfoResponse {
    /**
     * 作业运行时信息
     */
    JobRuntimeInfo?: Array<JobRuntimeInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 停止作业的描述信息
 */
export interface StopJobDescription {
    /**
     * 作业Id
     */
    JobId: string;
    /**
     * 停止类型，1 停止 2 暂停
     */
    StopType: number;
}
/**
 * CreateFolder请求参数结构体
 */
export interface CreateFolderRequest {
    /**
     * 新建文件夹名
     */
    FolderName: string;
    /**
     * 新建文件夹的父目录ID（根目录为"root"）
     */
    ParentId: string;
    /**
     * 文件夹类型，0是任务文件夹，1是依赖文件夹
     */
    FolderType?: number;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * DeleteJobConfigs返回参数结构体
 */
export interface DeleteJobConfigsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTableConfig请求参数结构体
 */
export interface DeleteTableConfigRequest {
    /**
     * 作业ID
     */
    JobId: string;
    /**
     * 调试作业ID
     */
    DebugId: number;
    /**
     * 表名
     */
    TableName: string;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * Sql Gateway 返回Result结构类型
 */
export interface StatementResult {
    /**
     * 返回结果列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Columns?: Array<ResultColumn>;
    /**
     * 格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RowFormat?: string;
    /**
     * 结果值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ResultData>;
}
/**
 * 自定义树结构遍历子节点
 */
export interface DescribeTreeJobsRsp {
    /**
     * 父节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId?: string;
    /**
     * 当前文件夹ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 当前文件夹名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 当前文件夹下的作业集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobSet?: Array<TreeJobSets>;
    /**
     * 迭代子目录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<DescribeTreeJobsRsp>;
    /**
     * 请求ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestId?: string;
}
/**
 * DeleteResources返回参数结构体
 */
export interface DeleteResourcesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTableConfig返回参数结构体
 */
export interface DeleteTableConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SlotSharingGroup的规格描述
 */
export interface SlotSharingGroupSpec {
    /**
     * 适用的cpu
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CPU: number;
    /**
     * 默认为b, 支持单位有 b, kb, mb, gb
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeapMemory: string;
    /**
     * 默认为b, 支持单位有 b, kb, mb, gb
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffHeapMemory?: string;
    /**
     * 默认为b, 支持单位有 b, kb, mb, gb
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ManagedMemory?: string;
}
/**
 * 标签
 */
export interface Tag {
    /**
     * 标签键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagKey?: string;
    /**
     * 标签值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagValue?: string;
}
/**
 * GetMetaTable返回参数结构体
 */
export interface GetMetaTableResponse {
    /**
     * 元数据表唯一标识
     */
    SerialId?: string;
    /**
     * 目录名
     */
    Catalog?: string;
    /**
     * 库名
     */
    Database?: string;
    /**
     * 表名
     */
    Table?: string;
    /**
     * 建表语句,使用 Base64 编码。
  例如
  Q1JFQVRFIFRBQkxFIGRhdGFnZW5fc291cmNlX3RhYmxlICggCiAgICBpZCBJTlQsIAogICAgbmFtZSBTVFJJTkcgCikgV0lUSCAoCidjb25uZWN0b3InPSdkYXRhZ2VuJywKJ3Jvd3MtcGVyLXNlY29uZCcgPSAnMScKKTs=
     */
    DDL?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FetchSqlGatewayStatementResult返回参数结构体
 */
export interface FetchSqlGatewayStatementResultResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: Array<string>;
    /**
     * 返回类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultType?: string;
    /**
     * 是否DQL结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsQueryResult?: boolean;
    /**
     * 结果类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultKind?: string;
    /**
     * 结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Results?: StatementResult;
    /**
     * 下一次请求的uri
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextResultUri?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Flink Job 运行图的点信息
 */
export interface JobGraphNode {
    /**
     * 节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: number;
    /**
     * 节点描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 节点名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 节点并行度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Parallelism: number;
}
/**
 * CreateWorkSpace请求参数结构体
 */
export interface CreateWorkSpaceRequest {
    /**
     * 工作空间名称
     */
    WorkSpaceName: string;
    /**
     * 项目空间备注
     */
    Description?: string;
}
/**
 * DeleteResourceConfigs请求参数结构体
 */
export interface DeleteResourceConfigsRequest {
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 资源版本数组
     */
    ResourceConfigVersions: Array<number | bigint>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * DescribeJobSavepoint返回参数结构体
 */
export interface DescribeJobSavepointResponse {
    /**
     * 快照列表总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalNumber?: number;
    /**
     * 快照列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Savepoint?: Array<Savepoint>;
    /**
     * 进行中的快照列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningSavepoint?: Array<Savepoint>;
    /**
     * 进行中的快照列表总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningTotalNumber?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteFolders请求参数结构体
 */
export interface DeleteFoldersRequest {
    /**
     * 需删除的文件夹唯一ID
     */
    FolderIds: Array<string>;
    /**
     * 文件夹类型，0是任务文件夹，1是依赖文件夹
     */
    FolderType?: number;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * DeleteWorkSpace请求参数结构体
 */
export interface DeleteWorkSpaceRequest {
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId: string;
}
/**
 * DescribeJobRuntimeInfo请求参数结构体
 */
export interface DescribeJobRuntimeInfoRequest {
    /**
     * 作业ID
     */
    JobId: string;
    /**
     * 工作空间ID
     */
    WorkSpaceId: string;
    /**
     * 作业运行信息 key
     */
    IncludeInfo: Array<string>;
}
/**
 * DescribeWorkSpaces返回参数结构体
 */
export interface DescribeWorkSpacesResponse {
    /**
     * 空间详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkSpaceSetItem?: Array<WorkSpaceSetItem>;
    /**
     * 空间总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Gateway引用资源信息
 */
export interface GatewayRefItem {
    /**
     * 空间唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkspaceId: string;
    /**
     * 资源唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId: string;
    /**
     * 版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version: number;
    /**
     * 引用类型，0:用户资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: number;
}
/**
 * CreateResource返回参数结构体
 */
export interface CreateResourceResponse {
    /**
     * 资源ID
     */
    ResourceId?: string;
    /**
     * 资源版本
     */
    Version?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSystemResources请求参数结构体
 */
export interface DescribeSystemResourcesRequest {
    /**
     * 需要查询的资源ID数组
     */
    ResourceIds?: Array<string>;
    /**
     * 偏移量，仅当设置 Limit 参数时有效
     */
    Offset?: number;
    /**
     * 条数限制，默认返回 20 条
     */
    Limit?: number;
    /**
     * 查询资源配置列表， 如果不填写，返回该 ResourceIds.N 下所有作业配置列表
     */
    Filters?: Array<Filter>;
    /**
     * 集群ID
     */
    ClusterId?: string;
    /**
     * 查询对应Flink版本的内置connector
     */
    FlinkVersion?: string;
    /**
     * 空间
     */
    WorkSpaceId?: string;
}
/**
 * CreateFolder返回参数结构体
 */
export interface CreateFolderResponse {
    /**
     * 新建文件夹的唯一ID
     */
    FolderId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeResources返回参数结构体
 */
export interface DescribeResourcesResponse {
    /**
     * 资源详细信息集合
     */
    ResourceSet?: Array<ResourceItem>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 作业启动详情
 */
export interface RunJobDescription {
    /**
     * 作业Id
     */
    JobId: string;
    /**
     * 运行类型，1：启动，2：恢复
     */
    RunType: number;
    /**
     * 兼容旧版 SQL 类型作业启动参数：指定数据源消费起始时间点（建议传值）
  保证参数为 LATEST、EARLIEST、T+Timestamp （例:T1557394288000）
     */
    StartMode?: string;
    /**
     * 当前作业的某个版本
  （不传默认为非草稿的作业版本）
     */
    JobConfigVersion?: number;
    /**
     * Savepoint路径
     */
    SavepointPath?: string;
    /**
     * Savepoint的Id
     */
    SavepointId?: string;
    /**
     * 使用历史版本系统依赖
     */
    UseOldSystemConnector?: boolean;
    /**
     * 自定义时间戳
     */
    CustomTimestamp?: number;
    /**
     * timestamp; latest-offset;  earliest-offset; 任选一种
     */
    KafkaScanMode?: string;
}
/**
 * DescribeResourceRelatedJobs返回参数结构体
 */
export interface DescribeResourceRelatedJobsResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 关联作业信息
     */
    RefJobInfos?: Array<ResourceRefJobInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述作业发生的一个事件
 */
export interface JobEvent {
    /**
     * 内部定义的事件类型
     */
    Type: string;
    /**
     * 事件类型的说明文字
     */
    Description: string;
    /**
     * 事件发生的 Unix 时间戳（秒）
     */
    Timestamp: number;
    /**
     * 事件发生时的运行 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningOrderId: number;
    /**
     * 事件的一些可选说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message: string;
    /**
     * 异常事件的排查手册链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SolutionLink: string;
}
/**
 * 资源引用参数
 */
export interface ResourceRef {
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 资源版本ID，-1表示使用最新版本
     */
    Version: number;
    /**
     * 引用资源类型，例如主资源设置为1，代表main class所在的jar包
     */
    Type: number;
}
/**
 * DescribeSystemResources返回参数结构体
 */
export interface DescribeSystemResourcesResponse {
    /**
     * 资源详细信息集合
     */
    ResourceSet?: Array<SystemResourceItem>;
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * {
"Clazz": "c1", // java类全路径
"Level": "WARN" // 日志级别  TRACE，DEBUG、INFO、WARN、ERROR
}
 */
export interface ClazzLevel {
    /**
     * java类全路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Clazz: string;
    /**
     * 日志级别  TRACE，DEBUG、INFO、WARN、ERROR
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Level: string;
}
/**
 * 混合计费
 */
export interface SubEks {
    /**
     * 集群id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SerialId?: string;
    /**
     * cu数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CuNum?: number;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 状态描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusDesc?: string;
    /**
     * 运行cu
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningCu?: number;
    /**
     * 总的CPU
     */
    TotalCpu?: number;
    /**
     * 总的内存
     */
    TotalMem?: number;
    /**
     * 运行的CPU
     */
    RunningCpu?: number;
    /**
     * 运行的内存
     */
    RunningMem?: number;
}
/**
 * 空间和集群绑定关系
 */
export interface WorkSpaceClusterItem {
    /**
     * 集群 ID
     */
    ClusterGroupId: number;
    /**
     * 集群 SerialId
     */
    ClusterGroupSerialId: string;
    /**
     * 集群名称
     */
    ClusterName: string;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId: string;
    /**
     * 工作空间名称
     */
    WorkSpaceName: string;
    /**
     * 绑定状态  2 绑定 1  解除绑定
     */
    Status: number;
    /**
     * 项目ID
     */
    ProjectId: number;
    /**
     * 项目ID string类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectIdStr: string;
}
/**
 * CheckSavepoint请求参数结构体
 */
export interface CheckSavepointRequest {
    /**
     * 作业 id
     */
    JobId: string;
    /**
     * 快照资源 id
     */
    SerialId: string;
    /**
     * 快照类型 1: savepoint；2: checkpoint；3: cancelWithSavepoint
     */
    RecordType: number;
    /**
     * 快照路径，目前只支持 cos 路径
     */
    SavepointPath: string;
    /**
     * 工作空间 id
     */
    WorkSpaceId: string;
}
/**
 * 作业运行时信息
 */
export interface JobRuntimeInfo {
    /**
     * 运行信息的key，目前支持：TaskManagers：taskmanager pod 列表； StreamGraph：作业对应的 StreamGraph；SubTasks：作业的 subtask 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * 运行信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
/**
 * StopJobs请求参数结构体
 */
export interface StopJobsRequest {
    /**
     * 批量停止作业的描述信息
     */
    StopJobDescriptions: Array<StopJobDescription>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * {
  "Rate": "0.01",  ///如1%转换为0.01
  "Operator":  "1:OUT,2:IN_AND_OUT,3:IN"  ///如1%转换为0.01
}
Operator
算子ID顺序配置，可以对每个算子配置IN、OUT、IN_AND_OUT三个值，分别表示采集输入数据、采集输出数据、同时采集输入和输出数据，配置示例:
 */
export interface TraceModeConfiguration {
    /**
     * 如1%转换为0.01
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rate?: string;
    /**
     * 按照算子ID顺序配置，可以对每个算子配置IN、OUT、IN_AND_OUT三个值，分别表示采集输入数据、采集输出数据、同时采集输入和输出数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
}
/**
 * RunJobs请求参数结构体
 */
export interface RunJobsRequest {
    /**
     * 批量启动作业的描述信息
     */
    RunJobDescriptions: Array<RunJobDescription>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * DeleteWorkSpace返回参数结构体
 */
export interface DeleteWorkSpaceResponse {
    /**
     * 是否删除
     */
    Delete?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TriggerJobSavepoint返回参数结构体
 */
export interface TriggerJobSavepointResponse {
    /**
     * 是否成功
     */
    SavepointTrigger?: boolean;
    /**
     * 错误消息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 快照路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FinalSavepointPath?: string;
    /**
     * 快照 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SavepointId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 系统配置属性
 */
export interface Property {
    /**
     * 系统配置的Key
     */
    Key: string;
    /**
     * 系统配置的Value
     */
    Value: string;
}
/**
 * Flink Job 运行图的边信息
 */
export interface JobGraphEdge {
    /**
     * 边的起始节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Source: number;
    /**
     * 边的目标节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Target: number;
}
/**
 * 描述Savepoint信息
 */
export interface Savepoint {
    /**
     * 主键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionId?: number;
    /**
     * 状态 1: Active; 2: Expired; 3: InProgress; 4: Failed; 5: Timeout
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: number;
    /**
     * 路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * 大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * 快照类型 1: savepoint；2: checkpoint；3: cancelWithSavepoint
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordType?: number;
    /**
     * 运行作业实例的顺序 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobRuntimeId?: number;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 固定超时时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Timeout?: number;
    /**
     * 快照 serialId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SerialId?: string;
    /**
     * 耗时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeConsuming?: number;
    /**
     * 快照路径状态 1：可用；2：不可用；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PathStatus?: number;
}
/**
 * 系统资源返回值
 */
export interface SystemResourceItem {
    /**
     * 资源ID
     */
    ResourceId?: string;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 资源类型。1 表示 JAR 包，目前只支持该值。
     */
    ResourceType?: number;
    /**
     * 资源备注
     */
    Remark?: string;
    /**
     * 资源所属地域
     */
    Region?: string;
    /**
     * 资源的最新版本
     */
    LatestResourceConfigVersion?: number;
    /**
     * 1 是系统提供资源 2 用户提供CONNECTOR
     */
    SystemProvide?: number;
}
/**
 * DescribeResourceRelatedJobs请求参数结构体
 */
export interface DescribeResourceRelatedJobsRequest {
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 默认0;   1： 按照作业版本创建时间降序
     */
    DESCByJobConfigCreateTime?: number;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 分页大小，默认为20，最大值为100
     */
    Limit?: number;
    /**
     * 资源版本号
     */
    ResourceConfigVersion?: number;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * 描述资源配置的返回参数
 */
export interface ResourceConfigItem {
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 资源类型
     */
    ResourceType: number;
    /**
     * 资源所属地域
     */
    Region: string;
    /**
     * 资源所属AppId
     */
    AppId: number;
    /**
     * 主账号Uin
     */
    OwnerUin: string;
    /**
     * 子账号Uin
     */
    CreatorUin: string;
    /**
     * 资源位置描述
     */
    ResourceLoc: ResourceLoc;
    /**
     * 资源创建时间
     */
    CreateTime: string;
    /**
     * 资源版本
     */
    Version: number;
    /**
     * 资源描述
     */
    Remark: string;
    /**
     * 资源状态：0: 资源同步中，1:资源已就绪
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * 关联作业个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RefJobCount: number;
    /**
     * 分状态统计关联作业数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RefJobStatusCountSet?: Array<RefJobStatusCountItem>;
}
/**
 * 角色授权信息
 */
export interface RoleAuth {
    /**
     * 用户 AppID
     */
    AppId?: number;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceSerialId?: string;
    /**
     * 主账号 UIN
     */
    OwnerUin?: string;
    /**
     * 创建者 UIN
     */
    CreatorUin?: string;
    /**
     * 绑定授权的 UIN
     */
    AuthSubAccountUin?: string;
    /**
     * 对应 role表的id
     */
    Permission?: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 最后一次操作时间
     */
    UpdateTime?: string;
    /**
     * 2 启用 1 停用
     */
    Status?: number;
    /**
     * id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 工作空间id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkSpaceId?: number;
    /**
     * 权限名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleName?: string;
}
/**
 * 树状结构资源列表对象
 */
export interface DescribeTreeResourcesRsp {
    /**
     * 父节点ID
     */
    ParentId?: string;
    /**
     * 文件夹ID
     */
    Id?: string;
    /**
     * 文件夹名称
     */
    Name?: string;
    /**
     * 文件夹下资源数字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<TreeResourceItem>;
    /**
     * 子节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<DescribeTreeResourcesRsp>;
    /**
     * 资源总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * JobConfig引用资源信息
 */
export interface ResourceRefDetail {
    /**
     * 资源id
     */
    ResourceId?: string;
    /**
     * 资源版本，-1表示使用最新版本
     */
    Version?: number;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 1: 主资源
     */
    Type?: number;
    /**
     * 1: 系统内置资源
     */
    SystemProvide?: number;
    /**
     * Connector
     */
    Connector?: string;
}
/**
 * 树状结构资源对象
 */
export interface TreeResourceItem {
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 资源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 资源类型
     */
    ResourceType: number;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark: string;
    /**
     * 文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName: string;
    /**
     * 目录ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FolderId: string;
    /**
     * 分状态统计关联作业数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RefJobStatusCountSet?: Array<RefJobStatusCountItem>;
}
/**
 * 作业配置 -- 专家模式的详细配置
 */
export interface ExpertModeConfiguration {
    /**
     * Job graph
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobGraph?: JobGraph;
    /**
     * Node configuration
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeConfig?: Array<NodeConfig>;
    /**
     * Slot sharing groups
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlotSharingGroups?: Array<SlotSharingGroup>;
}
/**
 * RunJobs返回参数结构体
 */
export interface RunJobsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询作业列表时的过滤器
 */
export interface Filter {
    /**
     * 要过滤的字段
     */
    Name: string;
    /**
     * 字段的过滤值
     */
    Values: Array<string>;
}
/**
 * DeleteResources请求参数结构体
 */
export interface DeleteResourcesRequest {
    /**
     * 待删除资源ID列表
     */
    ResourceIds: Array<string>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * 工作空间集群组信息
 */
export interface ClusterGroupSetItem {
    /**
     * clusterGroup 的 SerialId
     */
    ClusterId?: string;
    /**
     * 集群名称
     */
    Name?: string;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 区
     */
    Zone?: string;
    /**
     * 账号 APPID
     */
    AppId?: number;
    /**
     * 主账号 UIN
     */
    OwnerUin?: string;
    /**
     * 创建账号 UIN
     */
    CreatorUin?: string;
    /**
     * CU 数量
     */
    CuNum?: number;
    /**
     * CU 内存规格
     */
    CuMem?: number;
    /**
     * 集群状态, 1 未初始化,，3 初始化中，2 运行中
     */
    Status?: number;
    /**
     * 状态描述
     */
    StatusDesc?: string;
    /**
     * 集群创建时间
     */
    CreateTime?: string;
    /**
     * 最后一次操作集群的时间
     */
    UpdateTime?: string;
    /**
     * 描述
     */
    Remark?: string;
    /**
     * 网络
     */
    NetEnvironmentType?: number;
    /**
     * 空闲 CU
     */
    FreeCuNum?: number;
    /**
     * 细粒度资源下的空闲CU
     */
    FreeCu?: number;
    /**
     * 运行中CU
     */
    RunningCu?: number;
    /**
     * 付费模式
     */
    PayMode?: number;
    /**
     * 弹性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubEks?: SubEks;
    /**
     * 默认 "" 包销模式 "exclusiveSale"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillingResourceMode?: string;
    /**
     * TotalCpu
     */
    TotalCpu?: number;
    /**
     * TotalMem
     */
    TotalMem?: number;
    /**
     * RunningCpu
     */
    RunningCpu?: number;
    /**
     * RunningMem
     */
    RunningMem?: number;
}
/**
 * DescribeJobConfigs请求参数结构体
 */
export interface DescribeJobConfigsRequest {
    /**
     * 作业Id
     */
    JobId: string;
    /**
     * 作业配置版本
     */
    JobConfigVersions?: Array<number | bigint>;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 分页大小，默认20，最大100
     */
    Limit?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
    /**
     * true 表示只展示草稿
     */
    OnlyDraft?: boolean;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * ModifyJob请求参数结构体
 */
export interface ModifyJobRequest {
    /**
     * 作业Id
     */
    JobId: string;
    /**
     * 作业名称，支持长度小于50的中文/英文/数字/”-”/”_”/”.”，不能重名
     */
    Name?: string;
    /**
     * 描述
     */
    Remark?: string;
    /**
     * 拖拽文件需传入此参数
     */
    TargetFolderId?: string;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
    /**
     * 作业描述
     */
    Description?: string;
}
/**
 * GetMetaTable请求参数结构体
 */
export interface GetMetaTableRequest {
    /**
     * 目录名
     */
    Catalog: string;
    /**
     * 库名
     */
    Database: string;
    /**
     * 表名
     */
    Table: string;
    /**
     * 空间唯一标识
     */
    WorkSpaceId: string;
}
/**
 * Sql Gateway返回数据
 */
export interface ResultData {
    /**
     * 操作类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Kind?: string;
    /**
     * 结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Fields?: Array<string>;
}
/**
 * DeleteResourceConfigs返回参数结构体
 */
export interface DeleteResourceConfigsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述用户创建的集群信息
 */
export interface Cluster {
    /**
     * 集群 ID
     */
    ClusterId?: string;
    /**
     * 集群名称
     */
    Name?: string;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 用户 AppID
     */
    AppId?: number;
    /**
     * 主账号 UIN
     */
    OwnerUin?: string;
    /**
     * 创建者 UIN
     */
    CreatorUin?: string;
    /**
     * 集群状态, 1 未初始化,，3 初始化中，2 运行中
     */
    Status?: number;
    /**
     * 描述
     */
    Remark?: string;
    /**
     * 集群创建时间
     */
    CreateTime?: string;
    /**
     * 最后一次操作集群的时间
     */
    UpdateTime?: string;
    /**
     * CU 数量
     */
    CuNum?: number;
    /**
     * CU 内存规格
     */
    CuMem?: number;
    /**
     * 可用区
     */
    Zone?: string;
    /**
     * 状态描述
     */
    StatusDesc?: string;
    /**
     * 网络
     */
    CCNs?: Array<CCN>;
    /**
     * 网络
     */
    NetEnvironmentType?: number;
    /**
     * 空闲 CU
     */
    FreeCuNum?: number;
    /**
     * 集群绑定的标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
    /**
     * 集群隔离时间; 没隔离时间，则为 -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolatedTime?: string;
    /**
     * 集群过期时间; 没过期概念，则为 -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
    /**
     * 距离过期还有多少秒; 没过期概念，则为 -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecondsUntilExpiry?: string;
    /**
     * 自动续费标记，0 表示默认状态 (用户未设置，即初始状态，用户开通了预付费不停服特权会进行自动续费)， 1 表示自动续费，2表示明确不自动续费(用户设置)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewFlag?: number;
    /**
     * 集群的默认 COS 存储桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultCOSBucket?: string;
    /**
     * 集群的CLS 日志集 LogSet
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLSLogSet?: string;
    /**
     * 集群的CLS 日志主题 TopicId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLSTopicId?: string;
    /**
     * 集群的CLS 日志集  名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLSLogName?: string;
    /**
     * 集群的CLS 日志主题  名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLSTopicName?: string;
    /**
     * 集群的版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: ClusterVersion;
    /**
     * 细粒度资源下的空闲CU
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FreeCu?: number;
    /**
     * 集群的默认日志采集配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultLogCollectConf?: string;
    /**
     * 取值：0-没有设置，1-已设置，2-不允许设置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomizedDNSEnabled?: number;
    /**
     * 空间信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Correlations?: Array<WorkSpaceClusterItem>;
    /**
     * 运行CU
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningCu?: number;
    /**
     * 0 后付费,1 预付费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: number;
    /**
     * 前端区分 集群是否需要2CU逻辑 因为历史集群 变配不需要, default 1  新集群都需要
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNeedManageNode?: number;
    /**
     * session集群信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterSessions?: Array<ClusterSession>;
    /**
     * V3版本 = 2
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ArchGeneration?: number;
    /**
     * 0:TKE, 1:EKS
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: number;
    /**
     * 订单信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Orders?: Array<Order>;
    /**
     * Gateway信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SqlGateways?: Array<SqlGatewayItem>;
    /**
     * 0 公网访问 // 1 内网访问
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebUIType?: number;
    /**
     * 2 独享集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: number;
    /**
     * 子eks集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubEks?: SubEks;
    /**
     * 上级集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentSerialId?: string;
    /**
     * 资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType?: number;
    /**
     * 集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillingResourceMode?: string;
    /**
     * Cu比例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemRatio?: number;
    /**
     * 是否开启跨租户弹性网卡
     */
    CrossTenantEniMode?: number;
    /**
     * 总的CPU
     */
    TotalCpu?: number;
    /**
     * 总的内存
     */
    TotalMem?: number;
    /**
     * 运行的CPU
     */
    RunningCpu?: number;
    /**
     * 运行的内存
     */
    RunningMem?: number;
}
/**
 * 作业运行图
 */
export interface JobGraph {
    /**
     * 运行图的点集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nodes?: Array<JobGraphNode>;
    /**
     * 运行图的边集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Edges?: Array<JobGraphEdge>;
}
/**
 * DescribeJobSubmissionLog请求参数结构体
 */
export interface DescribeJobSubmissionLogRequest {
    /**
     * 作业ID，例如：cql-6v1jkxrn
     */
    JobId: string;
    /**
     * 起始时间，unix时间戳，毫秒级，例如：1611754219108
     */
    StartTime: number;
    /**
     * 结束时间，unix时间戳，毫秒级，例如：1611754219108
     */
    EndTime: number;
    /**
     * 作业运行的实例ID, 例如：1,2,3。默认为0，表示未选中任何实例，搜索该时间段内最近的一个实例的日志
     */
    RunningOrderId?: number;
    /**
     * 日志搜索的关键词，默认为空
     */
    Keyword?: string;
    /**
     * 日志搜索的游标，可透传上次返回的值，默认为空
     */
    Cursor?: string;
    /**
     * 时间戳排序规则，asc - 升序，desc - 降序。默认为升序
     */
    OrderType?: string;
    /**
     * 搜索的日志条数上限值，最大为100
     */
    Limit?: number;
}
/**
 * DescribeJobs请求参数结构体
 */
export interface DescribeJobsRequest {
    /**
     * 按照一个或者多个作业ID查询。作业ID形如：cql-11112222，每次请求的作业上限为100。参数不支持同时指定JobIds和Filters。
     */
    JobIds?: Array<string>;
    /**
     * 过滤条件，支持的 Filter.Name 为：作业名 Name、作业状态 Status、所属集群 ClusterId、作业id JobId、集群名称 ClusterName。 每次请求的 Filters 个数的上限为 5，Filter.Values 的个数上限为 5。参数不支持同时指定 JobIds 和 Filters。
     */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 分页大小，默认为20，最大值为100
     */
    Limit?: number;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
    /**
     * 查询额外的作业信息,例如 JobEventInfo
     */
    ExtraResult?: Array<string>;
}
/**
 * Job详细信息
 */
export interface JobV1 {
    /**
     * 作业ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 用户AppId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: number;
    /**
     * 用户UIN
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 创建者UIN
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorUin?: string;
    /**
     * 作业名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 作业类型，1：sql作业，2：Jar作业
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobType?: number;
    /**
     * 作业状态，1：未初始化，2：未发布，3：操作中，4：运行中，5：停止，6：暂停，-1：故障
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 作业创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 作业启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 作业停止时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StopTime?: string;
    /**
     * 作业更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 作业累计运行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalRunMillis?: number;
    /**
     * 备注信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 操作错误提示信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastOpResult?: string;
    /**
     * 集群名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 最新配置版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestJobConfigVersion?: number;
    /**
     * 已发布的配置版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublishedJobConfigVersion?: number;
    /**
     * 运行的CU数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningCuNum?: number;
    /**
     * 作业内存规格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CuMem?: number;
    /**
     * 作业状态描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusDesc?: string;
    /**
     * 运行状态时表示单次运行时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentRunMillis?: number;
    /**
     * 作业所在的集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 作业管理WEB UI 入口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebUIUrl?: string;
    /**
     * 作业所在集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchedulerType?: number;
    /**
     * 作业所在集群状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterStatus?: number;
    /**
     * 细粒度下的运行的CU数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningCu?: number;
    /**
     * 作业运行的 Flink 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlinkVersion?: string;
    /**
     * 工作空间 SerialId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkSpaceId?: string;
    /**
     * 工作空间名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkSpaceName?: string;
    /**
     * 作业标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
    /**
     * 作业异常事件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventInfo?: JobEventInfo;
    /**
     * 描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 0:代表没开启调优任务，1:开启智能调优，2:代表定时调优
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScalingType?: number;
    /**
     * 使用CPU数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningCpu?: number;
    /**
     * 使用内存数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningMem?: number;
}
/**
 * 作业配置详情
 */
export interface JobConfig {
    /**
     * 作业Id
     */
    JobId?: string;
    /**
     * 主类
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EntrypointClass?: string;
    /**
     * 主类入参
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgramArgs?: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 作业配置创建时间
     */
    CreateTime?: string;
    /**
     * 作业配置的版本号
     */
    Version?: number;
    /**
     * 作业默认并行度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultParallelism?: number;
    /**
     * 系统参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: Array<Property>;
    /**
     * 引用资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceRefDetails?: Array<ResourceRefDetail>;
    /**
     * 创建者uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorUin?: string;
    /**
     * 作业配置上次启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 作业绑定的存储桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    COSBucket?: string;
    /**
     * 是否启用日志收集，0-未启用，1-已启用，2-历史集群未设置日志集，3-历史集群已开启
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogCollect?: number;
    /**
     * 作业的最大并行度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxParallelism?: number;
    /**
     * JobManager规格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobManagerSpec?: number;
    /**
     * TaskManager规格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskManagerSpec?: number;
    /**
     * CLS日志集ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClsLogsetId?: string;
    /**
     * CLS日志主题ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClsTopicId?: string;
    /**
     * pyflink作业运行的python版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PythonVersion?: string;
    /**
     * Oceanus 平台恢复作业开关 1:开启 -1: 关闭
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRecover?: number;
    /**
     * 日志级别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogLevel?: string;
    /**
     * 类日志级别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClazzLevels?: Array<ClazzLevel>;
    /**
     * 是否开启专家模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpertModeOn?: boolean;
    /**
     * 专家模式的配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpertModeConfiguration?: ExpertModeConfiguration;
    /**
     * trace链路
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TraceModeOn?: boolean;
    /**
     * trace链路配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TraceModeConfiguration?: TraceModeConfiguration;
    /**
     * checkpoint保留个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CheckpointRetainedNum?: number;
    /**
     * 算子拓扑图
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobGraph?: JobGraph;
    /**
     * es索引
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EsServerlessIndex?: string;
    /**
     * es空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EsServerlessSpace?: string;
    /**
     * es索引中文
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IndexName?: string;
    /**
     * es空间中文
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkspaceName?: string;
    /**
     * flink 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlinkVersion?: string;
    /**
     * jm使用cpu数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobManagerCpu?: number;
    /**
     * jm使用内存数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobManagerMem?: number;
    /**
     * tm使用cpu数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskManagerCpu?: number;
    /**
     * tm使用mem数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskManagerMem?: number;
    /**
     * 运行中配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobConfigItem?: JobConfig;
}
/**
 * DescribeResourceConfigs请求参数结构体
 */
export interface DescribeResourceConfigsRequest {
    /**
     * 资源ID
     */
    ResourceId?: string;
    /**
     * 偏移量，仅当设置 Limit 时该参数有效
     */
    Offset?: number;
    /**
     * 返回值大小，不填则返回全量数据
     */
    Limit?: number;
    /**
     * 资源配置Versions集合
     */
    ResourceConfigVersions?: Array<number | bigint>;
    /**
     * 作业配置版本
     */
    JobConfigVersion?: number;
    /**
     * 作业ID
     */
    JobId?: string;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * ModifyFolder返回参数结构体
 */
export interface ModifyFolderResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SlotSharingGroup 描述
 */
export interface SlotSharingGroup {
    /**
     * SlotSharingGroup的名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * SlotSharingGroup的规格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Spec: SlotSharingGroupSpec;
    /**
     * SlotSharingGroup的描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * SlotSharingGroup的配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Configuration?: Array<Property>;
}
/**
 * ModifyWorkSpace返回参数结构体
 */
export interface ModifyWorkSpaceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RunSqlGatewayStatement返回参数结构体
 */
export interface RunSqlGatewayStatementResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: Array<string>;
    /**
     * 会话id，若入参未传，则返回自动创建的会话id，若入参已经传递，则返回值与原传入值一致
     */
    SessionId?: string;
    /**
     * 返回执行id，可以根据该执行id和会话id获取执行结果
     */
    OperationHandleId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateJob请求参数结构体
 */
export interface CreateJobRequest {
    /**
     * 作业名称，允许输入长度小于50个字符的中文、英文、数字、-（横线）、_（下划线）、.（点），且符号必须半角字符。注意作业名不能和现有作业同名
     */
    Name: string;
    /**
     * 作业的类型，1 表示 SQL 作业，2 表示 JAR 作业
     */
    JobType: number;
    /**
     * 集群的类型，1 表示共享集群，2 表示独享集群
     */
    ClusterType: number;
    /**
     * 当 ClusterType=2 时，必选，用来指定该作业提交的独享集群 ID
     */
    ClusterId?: string;
    /**
     * 设置每 CU 的内存规格，单位为 GB，支持 2、4、8、16（需申请开通白名单后使用）。默认为 4，即 1 CU 对应 4 GB 的运行内存
     */
    CuMem?: number;
    /**
     * 作业的备注信息，可以随意设置
     */
    Remark?: string;
    /**
     * 作业名所属文件夹ID，根目录为"root"
     */
    FolderId?: string;
    /**
     * 作业运行的Flink版本
     */
    FlinkVersion?: string;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
    /**
     * 作业标签
     */
    Tags?: Array<Tag>;
    /**
     * 作业描述
     */
    Description?: string;
}
/**
 * 搜索启动日志时返回的作业实例
 */
export interface JobInstanceForSubmissionLog {
    /**
     * 实例的Id, 按照启动的时间顺序，从1开始
     */
    RunningOrderId: number;
    /**
     * 作业实例的启动时间
     */
    JobInstanceStartTime: string;
    /**
     * 作业实例启动的时间（毫秒）
     */
    StartingMillis: number;
}
/**
 * DescribeFolder请求参数结构体
 */
export interface DescribeFolderRequest {
    /**
     * folder id
     */
    FolderId: string;
    /**
     * workspace id
     */
    WorkSpaceId: string;
    /**
     * 1:资源文件夹
  其他:作业文件夹
     */
    FolderType: number;
}
/**
 * DeleteFolders返回参数结构体
 */
export interface DeleteFoldersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 子目录信息
 */
export interface SubFolderInfo {
    /**
     * folder id
     */
    FolderId?: string;
    /**
     * folder name
     */
    FolderName?: string;
}
/**
 * session集群信息
 */
export interface ClusterSession {
    /**
     * 集群SerialId
     */
    ClusterGroupSerialId?: string;
    /**
     * 创建者appId
     */
    AppId?: number;
    /**
     * 创建者主账号
     */
    OwnerUin?: string;
    /**
     * 创建者账号
     */
    CreatorUin?: string;
    /**
     * 区域
     */
    Region?: string;
    /**
     * zone
     */
    Zone?: string;
    /**
     * Session集群状态
     */
    Status?: number;
    /**
     * Session集群消耗的cu数量
     */
    CuNum?: number;
    /**
     * Session集群的Flink版本
     */
    FlinkVersion?: string;
    /**
     * session集群FlinkUi地址
     */
    WebUIUrl?: string;
    /**
     * session集群高级参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Properties?: Array<Property>;
    /**
     * 引用资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceRefs?: Array<SessionClusterRefItem>;
    /**
     * JobManager的规格
     */
    JobManagerCuSpec?: number;
    /**
     * TaskManager的规格
     */
    TaskManagerCuSpec?: number;
    /**
     * TaskManager启动的数量
     */
    TaskManagerNum?: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * JobManagerCpu
     */
    JobManagerCpu?: number;
    /**
     * JobManagerMem
     */
    JobManagerMem?: number;
    /**
     * TaskManagerCpu
     */
    TaskManagerCpu?: number;
    /**
     * TaskManagerMem
     */
    TaskManagerMem?: number;
}
/**
 * CreateResourceConfig请求参数结构体
 */
export interface CreateResourceConfigRequest {
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 位置信息
     */
    ResourceLoc: ResourceLoc;
    /**
     * 资源描述信息
     */
    Remark?: string;
    /**
     * 1： 资源版本达到上限，自动删除最早可删除的版本
     */
    AutoDelete?: number;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * StopJobs返回参数结构体
 */
export interface StopJobsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
    /**
     * 集群总数
     */
    TotalCount?: number;
    /**
     * 集群列表
     */
    ClusterSet?: Array<Cluster>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeResources请求参数结构体
 */
export interface DescribeResourcesRequest {
    /**
     * 需要查询的资源ID数组，数量不超过100个。如果填写了该参数则忽略Filters参数。
     */
    ResourceIds?: Array<string>;
    /**
     * 偏移量，仅当设置 Limit 参数时有效
     */
    Offset?: number;
    /**
     * 条数限制。如果不填，默认返回 20 条
     */
    Limit?: number;
    /**
     * <li><strong>ResourceName</strong></li>
  <p style="padding-left: 30px;">按照资源名字过滤，支持模糊过滤。传入的过滤名字不超过5个</p><p style="padding-left: 30px;">类型: String</p><p style="padding-left: 30px;">必选: 否</p>
     */
    Filters?: Array<Filter>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
    /**
     * 资源类型，0=用户，1系统connector，2=用户自定义connector
     */
    SystemResource?: number;
}
/**
 * DescribeJobEvents请求参数结构体
 */
export interface DescribeJobEventsRequest {
    /**
     * 作业的 ID
     */
    JobId: string;
    /**
     * 筛选条件：起始 Unix 时间戳（秒）
     */
    StartTimestamp: number;
    /**
     * 筛选条件：结束 Unix 时间戳（秒）
     */
    EndTimestamp: number;
    /**
     * 事件类型。如果不传则返回所有类型的数据
     */
    Types?: Array<string>;
    /**
     * 运行实例 ID 数组
     */
    RunningOrderIds?: Array<number | bigint>;
    /**
     * 工作空间 SerialId
     */
    WorkSpaceId?: string;
}
/**
 * CheckSavepoint返回参数结构体
 */
export interface CheckSavepointResponse {
    /**
     * 资源 id
     */
    SerialId?: string;
    /**
     * 1=可用，2=不可用
     */
    SavepointStatus?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeJobs返回参数结构体
 */
export interface DescribeJobsResponse {
    /**
     * 作业总数
     */
    TotalCount?: number;
    /**
     * 作业列表
     */
    JobSet?: Array<JobV1>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTreeResources返回参数结构体
 */
export interface DescribeTreeResourcesResponse {
    /**
     * 父节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId?: string;
    /**
     * 文件夹ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 文件夹名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 文件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<TreeResourceItem>;
    /**
     * 子目录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<DescribeTreeResourcesRsp>;
    /**
     * 资源总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集群购买、扩缩容、续费订单信息
 */
export interface Order {
    /**
     * 创建、续费、扩缩容 1 2 3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: number;
    /**
     * 自动续费 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewFlag?: number;
    /**
     * 操作人的UIN
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUin?: string;
    /**
     * 最终集群的CU数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComputeCu?: number;
    /**
     * 订单的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrderTime?: string;
}
/**
 * 复制作业单条明细
 */
export interface CopyJobItem {
    /**
     * 需要复制的作业serial id
     */
    SourceId: string;
    /**
     * 目标集群的cluster serial id
     */
    TargetClusterId: string;
    /**
     * 需要复制的作业名称
     */
    SourceName?: string;
    /**
     * 新作业的名称
     */
    TargetName?: string;
    /**
     * 新作业的目录id
     */
    TargetFolderId?: string;
    /**
     * 源作业类型
     */
    JobType?: number;
}
/**
 * DescribeTreeJobs请求参数结构体
 */
export interface DescribeTreeJobsRequest {
    /**
     * 筛选条件字段
     */
    Filters?: Array<Filter>;
    /**
     * 工作空间 Serialid
     */
    WorkSpaceId?: string;
}
/**
 * DescribeJobConfigs返回参数结构体
 */
export interface DescribeJobConfigsResponse {
    /**
     * 总的配置版本数量
     */
    TotalCount?: number;
    /**
     * 作业配置列表
     */
    JobConfigSet?: Array<JobConfig>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FetchSqlGatewayStatementResult请求参数结构体
 */
export interface FetchSqlGatewayStatementResultRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * Sql Gateway会话ID
     */
    SessionId?: string;
    /**
     * sql的查询id
     */
    OperationHandleId?: string;
    /**
     * 下一条结果的获取url，首次获取执行结果时可以为空，当获取下一批查询结果时需要传递
     */
    ResultUri?: string;
}
/**
 * session集群引用资源信息
 */
export interface SessionClusterRefItem {
    /**
     * 空间唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkspaceId: string;
    /**
     * 资源唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId: string;
    /**
     * 版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version: number;
    /**
     * 引用类型，0:用户资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: number;
}
/**
 * DescribeJobEvents返回参数结构体
 */
export interface DescribeJobEventsResponse {
    /**
     * 该作业指定范围内的事件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Events: Array<JobEvent>;
    /**
     * 该作业指定范围内运行实例 ID 数组，仅当入参没有传入 RunningOrderIds 参数时才会返回。倒序输出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningOrderIds: Array<number | bigint>;
    /**
     * 事件的总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}

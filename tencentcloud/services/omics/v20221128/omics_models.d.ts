/**
 * RetryRuns返回参数结构体
 */
export interface RetryRunsResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RunApplication返回参数结构体
 */
export interface RunApplicationResponse {
    /**
     * 任务批次ID。
     */
    RunGroupId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 执行时间。
 */
export interface ExecutionTime {
    /**
     * 提交时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitTime?: string;
    /**
     * 开始时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 结束时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
}
/**
 * 任务运行状态。
 */
export interface RunStatusCount {
    /**
     * 状态。
     */
    Status?: string;
    /**
     * 数量。
     */
    Count?: number;
}
/**
 * GetRunStatus请求参数结构体
 */
export interface GetRunStatusRequest {
    /**
     * 任务Uuid。
     */
    RunUuid: string;
    /**
     * 项目ID。
     */
    ProjectId: string;
}
/**
 * DescribeRuns返回参数结构体
 */
export interface DescribeRunsResponse {
    /**
     * 符合条件的数量。
     */
    TotalCount?: number;
    /**
     * 任务列表。
     */
    Runs?: Array<Run>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportTableFile返回参数结构体
 */
export interface ImportTableFileResponse {
    /**
     * 表格ID。
     */
    TableId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteEnvironment返回参数结构体
 */
export interface DeleteEnvironmentResponse {
    /**
     * 工作流UUID。
     */
    WorkflowUuid?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 组学平台环境详情。
 */
export interface Environment {
    /**
     * 环境ID。
     */
    EnvironmentId?: string;
    /**
     * 环境名称。
     */
    Name?: string;
    /**
     * 环境描述信息。
     */
    Description?: string;
    /**
     * 环境地域。
     */
    Region?: string;
    /**
     * 环境类型，取值范围：
  - KUBERNETES：Kubernetes容器集群
  - HPC：HPC高性能计算集群
     */
    Type?: string;
    /**
     * 环境状态，取值范围：
  - INITIALIZING：创建中
  - INITIALIZATION_ERROR：创建失败
  - RUNNING：运行中
  - ERROR：异常
  - DELETING：正在删除
  - DELETE_ERROR：删除失败
     */
    Status?: string;
    /**
     * 环境是否可用。环境需要可用才能投递计算任务。
     */
    Available?: boolean;
    /**
     * 环境信息。
     */
    Message?: string;
    /**
     * 云资源ID。
     */
    ResourceIds?: ResourceIds;
    /**
     * 上个工作流UUID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastWorkflowUuid?: string;
    /**
     * 创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTime?: string;
}
/**
 * GetRunCalls请求参数结构体
 */
export interface GetRunCallsRequest {
    /**
     * 任务Uuid。
     */
    RunUuid: string;
    /**
     * 项目ID。
     */
    ProjectId: string;
    /**
     * 作业路径
     */
    Path: string;
}
/**
 * DescribeRuns请求参数结构体
 */
export interface DescribeRunsRequest {
    /**
     * 项目ID。
     */
    ProjectId: string;
    /**
     * 返回数量，默认为10，最大值为100。
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤器，支持过滤字段：
  - RunGroupId：任务批次ID
  - Status：任务状态
  - RunUuid：任务UUID
  - UserDefinedId：用户定义ID
     */
    Filters?: Array<Filter>;
}
/**
 * 任务。
 */
export interface Run {
    /**
     * 任务UUID。
     */
    RunUuid?: string;
    /**
     * 项目ID。
     */
    ProjectId?: string;
    /**
     * 应用ID。
     */
    ApplicationId?: string;
    /**
     * 任务批次ID。
     */
    RunGroupId?: string;
    /**
     * 环境ID。
     */
    EnvironmentId?: string;
    /**
     * 用户定义ID，单例运行为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserDefinedId?: string;
    /**
     * 表格ID，单例运行为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 表格行UUID，单例运行为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableRowUuid?: string;
    /**
     * 任务状态。
     */
    Status?: string;
    /**
     * 任务输入。
     */
    Input?: string;
    /**
     * 运行选项。
     */
    Option?: RunOption;
    /**
     * 执行时间。
     */
    ExecutionTime?: ExecutionTime;
    /**
     * 错误信息。
     */
    ErrorMessage?: string;
    /**
     * 创建时间。
     */
    CreateTime?: string;
    /**
     * 更新时间。
     */
    UpdateTime?: string;
}
/**
 * 表格列。
 */
export interface TableColumn {
    /**
     * 列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Header?: string;
    /**
     * 列数据类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataType?: string;
}
/**
 * DescribeTablesRows请求参数结构体
 */
export interface DescribeTablesRowsRequest {
    /**
     * 项目ID。
     */
    ProjectId: string;
    /**
     * 表格ID。
     */
    TableId: string;
    /**
     * 返回数量，默认为10，最大值为100。
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤器，支持过滤字段：
  - Tr：表格数据，支持模糊查询
  - TableRowUuid：表格行UUID
     */
    Filters?: Array<Filter>;
}
/**
 * DescribeEnvironments返回参数结构体
 */
export interface DescribeEnvironmentsResponse {
    /**
     * 符合条件的数量。
     */
    TotalCount?: number;
    /**
     * 环境详情列表。
     */
    Environments?: Array<Environment>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTables返回参数结构体
 */
export interface DescribeTablesResponse {
    /**
     * 结果总数。
     */
    TotalCount?: number;
    /**
     * 表格列表。
     */
    Tables?: Array<Table>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 私有网络配置。
 */
export interface VPCOption {
    /**
     * 子网可用区。
     */
    SubnetZone: string;
    /**
     * 私有网络CIDR。
     */
    VPCCIDRBlock: string;
    /**
     * 子网CIDR。
     */
    SubnetCIDRBlock: string;
}
/**
 * RetryRuns请求参数结构体
 */
export interface RetryRunsRequest {
    /**
     * 关联项目ID。
     */
    ProjectId: string;
    /**
     * 任务UUID。
     */
    RunUuids: Array<string>;
}
/**
 * ImportTableFile请求参数结构体
 */
export interface ImportTableFileRequest {
    /**
     * 表格关联的项目ID。
     */
    ProjectId: string;
    /**
     * 表格名称。最多支持200个字符。
     */
    Name: string;
    /**
     * 表格文件Cos对象路径。
     */
    CosUri: string;
    /**
     * 表格文件中每列的数据类型，支持的类型包括：Int、Float、String、File、Boolean、Array[Int]、Array[Float]、Array[String]、Array[File]、Array[Boolean]
     */
    DataType: Array<string>;
    /**
     * 表格描述。最多支持500个字符。
     */
    Description?: string;
}
/**
 * 计算集群配置。
 */
export interface ClusterOption {
    /**
     * 计算集群可用区。
     */
    Zone: string;
    /**
     * 计算集群类型，取值范围：
  - KUBERNETES
     */
    Type: string;
}
/**
 * RunApplication请求参数结构体
 */
export interface RunApplicationRequest {
    /**
     * 应用ID。
     */
    ApplicationId: string;
    /**
     * 项目ID。
     */
    ProjectId: string;
    /**
     * 任务批次名称。
     */
    Name: string;
    /**
     * 投递环境ID。
     */
    EnvironmentId: string;
    /**
     * 任务输入JSON。需要进行base64编码。
     */
    InputBase64: string;
    /**
     * 任务缓存清理时间。不填表示不清理。
     */
    CacheClearDelay: number;
    /**
     * 运行选项。
     */
    Option: RunOption;
    /**
     * 任务批次描述。
     */
    Description?: string;
    /**
     * 批量投递表格ID，不填表示单例投递。
     */
    TableId?: string;
    /**
     * 批量投递表格行UUID。不填表示表格全部行。
     */
    TableRowUuids?: Array<string>;
    /**
     * 应用版本ID。不填表示使用当前最新版本。
     */
    ApplicationVersionId?: string;
}
/**
 * DeleteEnvironment请求参数结构体
 */
export interface DeleteEnvironmentRequest {
    /**
     * 环境ID。
     */
    EnvironmentId: string;
}
/**
 * 任务。
 */
export interface RunGroup {
    /**
     * 任务批次ID。
     */
    RunGroupId?: string;
    /**
     * 项目ID。
     */
    ProjectId?: string;
    /**
     * 项目名称。
     */
    ProjectName?: string;
    /**
     * 应用ID。
     */
    ApplicationId?: string;
    /**
     * 应用名称。
     */
    ApplicationName?: string;
    /**
     * 应用类型。
     */
    ApplicationType?: string;
    /**
     * 环境ID。
     */
    EnvironmentId?: string;
    /**
     * 环境名称。
     */
    EnvironmentName?: string;
    /**
     * 表格ID，单例运行为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 任务名称。
     */
    Name?: string;
    /**
     * 任务描述。
     */
    Description?: string;
    /**
     * 任务状态。
     */
    Status?: string;
    /**
     * 任务输入。
     */
    Input?: string;
    /**
     * 运行选项。
     */
    Option?: RunOption;
    /**
     * 任务总数量。
     */
    TotalRun?: number;
    /**
     * 各状态任务的数量。
     */
    RunStatusCounts?: Array<RunStatusCount>;
    /**
     * 执行时间。
     */
    ExecutionTime?: ExecutionTime;
    /**
     * 错误信息。
     */
    ErrorMessage?: string;
    /**
     * 创建时间。
     */
    CreateTime?: string;
    /**
     * 更新时间。
     */
    UpdateTime?: string;
}
/**
 * 数据库配置。
 */
export interface DatabaseOption {
    /**
     * 数据库可用区。
     */
    Zone: string;
}
/**
 * GetRunCalls返回参数结构体
 */
export interface GetRunCallsResponse {
    /**
     * 作业详情。
     */
    Calls?: Array<RunMetadata>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述键值对过滤器，用于条件过滤查询。

- 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。

- 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
    /**
     * 过滤字段。
     */
    Name: string;
    /**
     * 过滤字段值。
     */
    Values: Array<string>;
}
/**
 * 云资源ID。
 */
export interface ResourceIds {
    /**
     * 私有网络ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VPCId?: string;
    /**
     * 子网ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 安全组ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecurityGroupId?: string;
    /**
     * TDSQL-C Mysql版数据库ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TDSQLCId?: string;
    /**
     * 文件存储ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CFSId?: string;
    /**
     * 文件存储类型：取值范围：
  - SD：通用标准型
  - HP：通用性能型
  - TB：turbo标准型
  - TP：turbo性能型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CFSStorageType?: string;
    /**
     * 云服务器ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVMId?: string;
    /**
     * 弹性容器集群ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EKSId?: string;
}
/**
 * DescribeRunGroups返回参数结构体
 */
export interface DescribeRunGroupsResponse {
    /**
     * 符合条件的数量。
     */
    TotalCount?: number;
    /**
     * 任务批次列表。
     */
    RunGroups?: Array<RunGroup>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 环境配置。
 */
export interface EnvironmentConfig {
    /**
     * 私有网络配置。
     */
    VPCOption: VPCOption;
    /**
     * 计算集群配置。
     */
    ClusterOption: ClusterOption;
    /**
     * 数据库配置。
     */
    DatabaseOption: DatabaseOption;
    /**
     * 存储配置。
     */
    StorageOption: StorageOption;
    /**
     * 云服务器配置。
     */
    CVMOption: CVMOption;
}
/**
 * DescribeTablesRows返回参数结构体
 */
export interface DescribeTablesRowsResponse {
    /**
     * 结果总数。
     */
    TotalCount?: number;
    /**
     * 表格行列表。
     */
    Rows?: Array<TableRow>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEnvironment返回参数结构体
 */
export interface CreateEnvironmentResponse {
    /**
     * 环境ID。
     */
    EnvironmentId?: string;
    /**
     * 工作流UUID。
     */
    WorkflowUuid?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表格行。
 */
export interface TableRow {
    /**
     * 表格行UUID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableRowUuid?: string;
    /**
     * 表格行内容。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<string>;
}
/**
 * DescribeRunGroups请求参数结构体
 */
export interface DescribeRunGroupsRequest {
    /**
     * 项目ID。
     */
    ProjectId: string;
    /**
     * 返回数量，默认为10，最大值为100。
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤器，支持过滤字段：
  - Name：任务批次名称
  - RunGroupId：任务批次ID
  - Status：任务批次状态
     */
    Filters?: Array<Filter>;
}
/**
 * GetRunStatus返回参数结构体
 */
export interface GetRunStatusResponse {
    /**
     * 作业详情。
     */
    Metadata?: RunMetadata;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文件存储配置。
 */
export interface StorageOption {
    /**
     * 文件存储类型，取值范围：
  - SD：通用标准型
  - HP：通用性能型
  - TB：turbo标准型
  - TP：turbo性能型
     */
    StorageType: string;
    /**
     * 文件存储可用区。
     */
    Zone: string;
    /**
     * 文件系统容量，turbo系列必填，单位为GiB。
  - turbo标准型起售40TiB，即40960GiB；扩容步长20TiB，即20480 GiB。
  - turbo性能型起售20TiB，即20480 GiB；扩容步长10TiB，即10240 GiB。
     */
    Capacity?: number;
}
/**
 * DescribeTables请求参数结构体
 */
export interface DescribeTablesRequest {
    /**
     * 项目ID。
     */
    ProjectId: string;
    /**
     * 返回数量，默认为10，最大值为100。
     */
    Limit?: number;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 过滤器，支持过滤字段：
  - Name：表格名称
  - TableId：表格ID
     */
    Filters?: Array<Filter>;
}
/**
 * DescribeEnvironments请求参数结构体
 */
export interface DescribeEnvironmentsRequest {
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。
     */
    Limit?: number;
    /**
     * 过滤器，支持过滤字段：
  - EnvironmentId：环境ID
  - Name：名称
  - Status：环境状态
     */
    Filters?: Array<Filter>;
}
/**
 * 运行应用选项。
 */
export interface RunOption {
    /**
     * 运行失败模式，取值范围：
  - ContinueWhilePossible
  - NoNewCalls
     */
    FailureMode: string;
    /**
     * 是否使用Call-Caching功能。
     */
    UseCallCache: boolean;
    /**
     * 是否使用错误挂起功能。
     */
    UseErrorOnHold: boolean;
    /**
     * 输出归档COS路径。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FinalWorkflowOutputsDir?: string;
    /**
     * 是否使用相对目录归档输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UseRelativeOutputPaths?: boolean;
}
/**
 * 表格。
 */
export interface Table {
    /**
     * 表格ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableId?: string;
    /**
     * 关联项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: string;
    /**
     * 表格名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 表格描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 表格列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Columns?: Array<TableColumn>;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 创建人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
}
/**
 * 云服务器配置。
 */
export interface CVMOption {
    /**
     * 云服务器可用区。
     */
    Zone: string;
    /**
     * 云服务器实例规格。
     */
    InstanceType: string;
}
/**
 * 任务作业详情。
 */
export interface RunMetadata {
    /**
     * 任务类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunType?: string;
    /**
     * 任务ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunId?: string;
    /**
     * 父层ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId?: string;
    /**
     * 作业ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobId?: string;
    /**
     * 作业名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CallName?: string;
    /**
     * Scatter索引。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScatterIndex?: string;
    /**
     * 输入。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input?: string;
    /**
     * 输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 错误信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: string;
    /**
     * 提交时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubmitTime?: string;
    /**
     * 结束时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 命令行。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Command?: string;
    /**
     * 运行时。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Runtime?: string;
    /**
     * 预处理。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Preprocess?: boolean;
    /**
     * 后处理。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PostProcess?: boolean;
    /**
     * Cache命中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CallCached?: boolean;
    /**
     * 标准输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Stdout?: string;
    /**
     * 错误输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Stderr?: string;
}
/**
 * CreateEnvironment请求参数结构体
 */
export interface CreateEnvironmentRequest {
    /**
     * 环境名称。
     */
    Name: string;
    /**
     * 环境配置信息。
     */
    Config: EnvironmentConfig;
    /**
     * 环境描述。
     */
    Description?: string;
}

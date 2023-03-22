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
 * ImportTableFile请求参数结构体
 */
export interface ImportTableFileRequest {
    /**
      * 表格关联的项目ID。
      */
    ProjectId: string;
    /**
      * 表格名称，支持20个字符内的英文字符、数字和下划线。
      */
    Name: string;
    /**
      * 表格文件Cos对象路径。
      */
    CosUri: string;
    /**
      * 表格文件中每列的数据类型，支持的类型包括：Int、String、File、Array[File]
      */
    DataType: Array<string>;
    /**
      * 表格描述。
      */
    Description?: string;
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

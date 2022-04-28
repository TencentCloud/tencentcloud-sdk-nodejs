/**
 * DescribeTaskResult返回参数结构体
 */
export interface DescribeTaskResultResponse {
    /**
      * 查询的任务信息，返回为空表示输入任务ID对应的任务不存在。只有当任务状态为成功（2）的时候，才会返回任务的结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskInfo: TaskResultInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
    /**
      * 返回数量，默认为10，最大值为100。
      */
    Limit?: number;
    /**
      * 数据偏移量，从0开始，默认为0。
      */
    Offset?: number;
    /**
      * 模糊匹配，库名关键字。
      */
    KeyWord?: string;
    /**
      * 数据源唯名称，该名称可以通过DescribeDatasourceConnection接口查询到。默认为DataLakeCatalog
      */
    DatasourceConnectionName?: string;
    /**
      * 排序字段，当前版本仅支持按库名排序
      */
    Sort?: string;
    /**
      * 排序类型：false：降序（默认）、true：升序
      */
    Asc?: boolean;
}
/**
 * 工作组部分信息
 */
export interface WorkGroupMessage {
    /**
      * 工作组唯一Id
      */
    WorkGroupId: number;
    /**
      * 工作组名称
      */
    WorkGroupName: string;
    /**
      * 工作组描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkGroupDescription: string;
    /**
      * 创建者
      */
    Creator: string;
    /**
      * 工作组创建的时间，形如2021-07-28 16:19:32
      */
    CreateTime: string;
}
/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
    /**
      * 需要删除的用户的Id
      */
    UserIds: Array<string>;
}
/**
 * CreateStoreLocation返回参数结构体
 */
export interface CreateStoreLocationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateScript返回参数结构体
 */
export interface CreateScriptResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTasksInOrder返回参数结构体
 */
export interface CreateTasksInOrderResponse {
    /**
      * 本批次提交的任务的批次Id
      */
    BatchId: string;
    /**
      * 任务Id集合，按照执行顺序排列
      */
    TaskIdSet: Array<string>;
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
      * 数据表对象列表。
      */
    TableList: Array<TableResponseInfo>;
    /**
      * 实例总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 工作组信息
 */
export interface WorkGroupInfo {
    /**
      * 查询到的工作组唯一Id
      */
    WorkGroupId: number;
    /**
      * 工作组名称
      */
    WorkGroupName: string;
    /**
      * 工作组描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkGroupDescription: string;
    /**
      * 工作组关联的用户数量
      */
    UserNum: number;
    /**
      * 工作组关联的用户集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserSet: Array<UserMessage>;
    /**
      * 工作组绑定的权限集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicySet: Array<Policy>;
    /**
      * 工作组的创建人
      */
    Creator: string;
    /**
      * 工作组的创建时间，形如2021-07-28 16:19:32
      */
    CreateTime: string;
}
/**
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteScript返回参数结构体
 */
export interface DeleteScriptResponse {
    /**
      * 删除的脚本数量
      */
    ScriptsAffected: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务类型，任务如SQL查询等。
 */
export interface Task {
    /**
      * SQL查询任务
      */
    SQLTask?: SQLTask;
    /**
      * Spark SQL查询任务
      */
    SparkSQLTask?: SQLTask;
}
/**
 * DetachUserPolicy请求参数结构体
 */
export interface DetachUserPolicyRequest {
    /**
      * 用户Id，和CAM侧Uin匹配
      */
    UserId: string;
    /**
      * 解绑的权限集合
      */
    PolicySet?: Array<Policy>;
}
/**
 * 返回数据表的相关信息。
 */
export interface TableInfo {
    /**
      * 数据表配置信息。
      */
    TableBaseInfo: TableBaseInfo;
    /**
      * 数据表格式。每次入参可选如下其一的KV结构，[TextFile，CSV，Json, Parquet, ORC, AVRD]。
      */
    DataFormat: DataFormat;
    /**
      * 数据表列信息。
      */
    Columns: Array<Column>;
    /**
      * 数据表分块信息。
      */
    Partitions: Array<Partition>;
    /**
      * 数据存储路径。当前仅支持cos路径，格式如下：cosn://bucket-name/filepath。
      */
    Location: string;
}
/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
    /**
      * 任务对象列表。
      */
    TaskList: Array<TaskResponseInfo>;
    /**
      * 实例总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTasksInOrder请求参数结构体
 */
export interface CreateTasksInOrderRequest {
    /**
      * 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库。
      */
    DatabaseName: string;
    /**
      * SQL任务信息
      */
    Tasks: TasksInfo;
    /**
      * 数据源名称，默认为COSDataCatalog
      */
    DatasourceConnectionName?: string;
}
/**
 * DetachWorkGroupPolicy返回参数结构体
 */
export interface DetachWorkGroupPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据表数据格式。
 */
export interface DataFormat {
    /**
      * 文本格式，TextFile。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextFile: TextFile;
    /**
      * 文本格式，CSV。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CSV: CSV;
    /**
      * 文本格式，Json。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Json: Other;
    /**
      * Parquet格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Parquet: Other;
    /**
      * ORC格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    ORC: Other;
    /**
      * AVRO格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    AVRO: Other;
}
/**
 * CSV序列化及反序列化数据结构
 */
export interface CSVSerde {
    /**
      * CSV序列化转义符，默认为"\\"，最长8个字符，如 Escape: "/\"
      */
    Escape?: string;
    /**
      * CSV序列化字段域符，默认为"'"，最长8个字符, 如 Quote: "\""
      */
    Quote?: string;
    /**
      * CSV序列化分隔符，默认为"\t"，最长8个字符, 如 Separator: "\t"
      */
    Separator?: string;
}
/**
 * CreateDatabase请求参数结构体
 */
export interface CreateDatabaseRequest {
    /**
      * 数据库基础信息
      */
    DatabaseInfo: DatabaseInfo;
    /**
      * 数据源名称，默认为DataLakeCatalog
      */
    DatasourceConnectionName?: string;
}
/**
 * 绑定到同一个工作组的用户Id的集合
 */
export interface UserIdSetOfWorkGroupId {
    /**
      * 工作组Id
      */
    WorkGroupId: number;
    /**
      * 用户Id集合，和CAM侧Uin匹配
      */
    UserIds: Array<string>;
}
/**
 * 视图基本配置信息
 */
export interface ViewBaseInfo {
    /**
      * 该视图所属数据库名字
      */
    DatabaseName: string;
    /**
      * 视图名称
      */
    ViewName: string;
}
/**
 * CreateDatabase返回参数结构体
 */
export interface CreateDatabaseResponse {
    /**
      * 生成的建库执行语句对象。
      */
    Execution: Execution;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
    /**
      * 返回数量，默认为10，最大值为100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,其中task-id支持最大50个过滤个数，其他过滤参数支持的总数不超过5个。
task-id - String - （任务ID准确过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。
task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。
task-sql-keyword - String - （SQL语句关键字模糊过滤）取值形如：DROP TABLE。
task-operator- string （子uin过滤）
task-kind - string （任务类型过滤）
      */
    Filters?: Array<Filter>;
    /**
      * 排序字段，支持如下字段类型，create-time（创建时间，默认）、update-time（更新时间）
      */
    SortBy?: string;
    /**
      * 排序方式，desc表示正序，asc表示反序， 默认为asc。
      */
    Sorting?: string;
    /**
      * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。默认为45天前的当前时刻
      */
    StartTime?: string;
    /**
      * 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。默认为当前时刻
      */
    EndTime?: string;
    /**
      * 支持计算资源名字筛选
      */
    DataEngineName?: string;
}
/**
 * script实例。
 */
export interface Script {
    /**
      * 脚本Id，长度36字节。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScriptId: string;
    /**
      * 脚本名称，长度0-25。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScriptName: string;
    /**
      * 脚本描述，长度0-50。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScriptDesc: string;
    /**
      * 默认关联数据库。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatabaseName: string;
    /**
      * SQL描述，长度0-10000。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SQLStatement: string;
    /**
      * 更新时间戳， 单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: number;
}
/**
 * DeleteWorkGroup请求参数结构体
 */
export interface DeleteWorkGroupRequest {
    /**
      * 要删除的工作组Id集合
      */
    WorkGroupIds: Array<number>;
}
/**
 * 配置格式
 */
export interface KVPair {
    /**
      * 配置的key值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 配置的value值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 数据表配置信息
 */
export interface TableBaseInfo {
    /**
      * 该数据表所属数据库名字
      */
    DatabaseName: string;
    /**
      * 数据表名字
      */
    TableName: string;
    /**
      * 该数据表所属数据源名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasourceConnectionName?: string;
    /**
      * 该数据表备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableComment?: string;
    /**
      * 具体类型，表or视图
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 数据格式类型，hive，iceberg等
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableFormat?: string;
}
/**
 * 批量顺序执行任务集合
 */
export interface TasksInfo {
    /**
      * 任务类型，SQLTask：SQL查询任务。SparkSQLTask：Spark SQL查询任务
      */
    TaskType: string;
    /**
      * 容错策略。Proceed：前面任务出错/取消后继续执行后面的任务。Terminate：前面的任务出错/取消之后终止后面任务的执行，后面的任务全部标记为已取消。
      */
    FailureTolerance: string;
    /**
      * base64加密后的SQL语句，用";"号分隔每个SQL语句，一次最多提交50个任务。严格按照前后顺序执行
      */
    SQL: string;
    /**
      * 任务的配置信息，当前仅支持SparkSQLTask任务。
      */
    Config?: Array<KVPair>;
    /**
      * 任务的用户自定义参数信息
      */
    Params?: Array<KVPair>;
}
/**
 * AttachWorkGroupPolicy请求参数结构体
 */
export interface AttachWorkGroupPolicyRequest {
    /**
      * 工作组Id
      */
    WorkGroupId: number;
    /**
      * 要绑定的策略集合
      */
    PolicySet?: Array<Policy>;
}
/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteUser返回参数结构体
 */
export interface DeleteUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateStoreLocation请求参数结构体
 */
export interface CreateStoreLocationRequest {
    /**
      * 计算结果存储cos路径，如：cosn://bucketname/
      */
    StoreLocation: string;
}
/**
 * 数据表分块信息。
 */
export interface Partition {
    /**
      * 分区列名。
      */
    Name: string;
    /**
      * 分区类型。
      */
    Type: string;
    /**
      * 对分区的描述。
      */
    Comment: string;
}
/**
 * CreateTask请求参数结构体
 */
export interface CreateTaskRequest {
    /**
      * 计算任务，该参数中包含任务类型及其相关配置信息
      */
    Task: Task;
    /**
      * 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库（注：当提交建库sql时，该字段传空字符串）。
      */
    DatabaseName?: string;
    /**
      * 默认数据源名称。
      */
    DatasourceConnectionName?: string;
    /**
      * 数据引擎名称，不填提交到默认集群
      */
    DataEngineName?: string;
}
/**
 * 数据库和数据表属性信息
 */
export interface Property {
    /**
      * 属性key名称。
      */
    Key: string;
    /**
      * 属性key对应的value。
      */
    Value: string;
}
/**
 * CreateTable请求参数结构体
 */
export interface CreateTableRequest {
    /**
      * 数据表配置信息
      */
    TableInfo: TableInfo;
}
/**
 * DescribeWorkGroups返回参数结构体
 */
export interface DescribeWorkGroupsResponse {
    /**
      * 工作组总数
      */
    TotalCount: number;
    /**
      * 工作组信息集合
      */
    WorkGroupSet: Array<WorkGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUsers请求参数结构体
 */
export interface DescribeUsersRequest {
    /**
      * 指定查询的子用户uin，用户需要通过CreateUser接口创建。
      */
    UserId?: string;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认20，最大值100
      */
    Limit?: number;
    /**
      * 排序字段，支持如下字段类型，create-time
      */
    SortBy?: string;
    /**
      * 排序方式，desc表示正序，asc表示反序， 默认为asc
      */
    Sorting?: string;
    /**
      * 过滤条件，支持如下字段类型，user-type：根据用户类型过滤。user-keyword：根据用户名称过滤
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeScripts请求参数结构体
 */
export interface DescribeScriptsRequest {
    /**
      * 返回数量，默认为10，最大值为100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 按字段排序，支持如下字段类型，update-time
      */
    SortBy?: string;
    /**
      * 排序方式，desc表示正序，asc表示反序
      */
    Sorting?: string;
    /**
      * 过滤条件，如下支持的过滤类型，传参Name应为其一
script-id - String - （过滤条件）script-id取值形如：157de0d1-26b4-4df2-a2d0-b64afc406c25。
script-name-keyword - String - （过滤条件）数据表名称,形如：script-test。
      */
    Filters?: Array<Filter>;
}
/**
 * DeleteUsersFromWorkGroup返回参数结构体
 */
export interface DeleteUsersFromWorkGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddUsersToWorkGroup请求参数结构体
 */
export interface AddUsersToWorkGroupRequest {
    /**
      * 要操作的工作组和用户信息
      */
    AddInfo: UserIdSetOfWorkGroupId;
}
/**
 * DescribeStoreLocation请求参数结构体
 */
export declare type DescribeStoreLocationRequest = null;
/**
 * DescribeViews请求参数结构体
 */
export interface DescribeViewsRequest {
    /**
      * 列出该数据库下所属数据表。
      */
    DatabaseName: string;
    /**
      * 返回数量，默认为10，最大值为100。
      */
    Limit?: number;
    /**
      * 数据偏移量，从0开始，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件，如下支持的过滤类型，传参Name应为其一
view-name - String - （过滤条件）数据表名称,形如：view-001。
view-id - String - （过滤条件）view id形如：12342。
      */
    Filters?: Array<Filter>;
    /**
      * 数据库所属的数据源名称
      */
    DatasourceConnectionName?: string;
    /**
      * 排序字段
      */
    Sort?: string;
    /**
      * 排序规则
      */
    Asc?: boolean;
    /**
      * 开始时间
      */
    StartTime?: string;
    /**
      * 结束时间
      */
    EndTime?: string;
}
/**
 * 授权用户信息
 */
export interface UserInfo {
    /**
      * 用户Id，和子用户uin相同
      */
    UserId: string;
    /**
      * 用户描述信息，方便区分不同用户
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserDescription: string;
    /**
      * 单独给用户绑定的权限集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicySet: Array<Policy>;
    /**
      * 当前用户的创建者
      */
    Creator: string;
    /**
      * 创建时间，格式如2021-07-28 16:19:32
      */
    CreateTime: string;
    /**
      * 关联的工作组集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkGroupSet: Array<WorkGroupMessage>;
    /**
      * 是否是主账号
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsOwner: boolean;
    /**
      * 用户类型。ADMIN：管理员 COMMON：普通用户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserType: string;
    /**
      * 用户别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserAlias: string;
}
/**
 * CreateExportTask请求参数结构体
 */
export interface CreateExportTaskRequest {
    /**
      * 数据来源，lakefsStorage、taskResult
      */
    InputType: string;
    /**
      * 导出任务输入配置
      */
    InputConf: Array<KVPair>;
    /**
      * 导出任务输出配置
      */
    OutputConf: Array<KVPair>;
    /**
      * 目标数据源的类型，目前支持导出到cos
      */
    OutputType?: string;
}
/**
 * AttachWorkGroupPolicy返回参数结构体
 */
export interface AttachWorkGroupPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyWorkGroup返回参数结构体
 */
export interface ModifyWorkGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AttachUserPolicy请求参数结构体
 */
export interface AttachUserPolicyRequest {
    /**
      * 用户Id，和子用户uin相同，需要先使用CreateUser接口创建用户。可以使用DescribeUsers接口查看。
      */
    UserId: string;
    /**
      * 鉴权策略集合
      */
    PolicySet?: Array<Policy>;
}
/**
 * CancelTask请求参数结构体
 */
export interface CancelTaskRequest {
    /**
      * 任务Id，全局唯一
      */
    TaskId: string;
}
/**
 * 任务实例
 */
export interface TaskResponseInfo {
    /**
      * 任务所属Database的名称。
      */
    DatabaseName: string;
    /**
      * 任务数据量。
      */
    DataAmount: number;
    /**
      * 任务Id。
      */
    Id: string;
    /**
      * 计算时长，单位： ms。
      */
    UsedTime: number;
    /**
      * 任务输出路径。
      */
    OutputPath: string;
    /**
      * 任务创建时间。
      */
    CreateTime: string;
    /**
      * 任务状态：0 初始化， 1 执行中， 2 执行成功，-1 执行失败，-3 已取消。
      */
    State: number;
    /**
      * 任务SQL类型，DDL|DML等
      */
    SQLType: string;
    /**
      * 任务SQL语句
      */
    SQL: string;
    /**
      * 结果是否过期。
      */
    ResultExpired: boolean;
    /**
      * 数据影响统计信息。
      */
    RowAffectInfo: string;
    /**
      * 任务结果数据表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataSet: string;
    /**
      * 失败信息, 例如：errorMessage。该字段已废弃。
      */
    Error: string;
    /**
      * 任务执行进度num/100(%)
      */
    Percentage: number;
    /**
      * 任务执行输出信息。
      */
    OutputMessage: string;
    /**
      * 执行SQL的引擎类型
      */
    TaskType: string;
    /**
      * 任务进度明细
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProgressDetail: string;
    /**
      * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 计算资源id
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataEngineId: string;
    /**
      * 执行sql的子uin
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperateUin: string;
    /**
      * 计算资源名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataEngineName: string;
    /**
      * 导入类型是本地导入还是cos
注意：此字段可能返回 null，表示取不到有效值。
      */
    InputType: string;
    /**
      * 导入配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    InputConf: string;
    /**
      * 数据条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataNumber: number;
    /**
      * 查询数据能不能下载
注意：此字段可能返回 null，表示取不到有效值。
      */
    CanDownload: boolean;
    /**
      * 用户别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserAlias: string;
}
/**
 * 文本格式
 */
export interface TextFile {
    /**
      * 文本类型，本参数取值为TextFile。
      */
    Format: string;
    /**
      * 处理文本用的正则表达式。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Regex: string;
}
/**
 * BindWorkGroupsToUser返回参数结构体
 */
export interface BindWorkGroupsToUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStoreLocation返回参数结构体
 */
export interface DescribeStoreLocationResponse {
    /**
      * 返回用户设置的结果存储位置路径，如果未设置则返回空字符串：""
注意：此字段可能返回 null，表示取不到有效值。
      */
    StoreLocation: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteScript请求参数结构体
 */
export interface DeleteScriptRequest {
    /**
      * 脚本id，其可以通过DescribeScripts接口提取
      */
    ScriptIds: Array<string>;
}
/**
 * CreateImportTask返回参数结构体
 */
export interface CreateImportTaskResponse {
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
 * SQL语句对象
 */
export interface Execution {
    /**
      * 自动生成SQL语句。
      */
    SQL: string;
}
/**
 * CreateTable返回参数结构体
 */
export interface CreateTableResponse {
    /**
      * 生成的建表执行语句对象。
      */
    Execution: Execution;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateScript请求参数结构体
 */
export interface CreateScriptRequest {
    /**
      * 脚本名称，最大不能超过255个字符。
      */
    ScriptName: string;
    /**
      * base64编码后的sql语句
      */
    SQLStatement: string;
    /**
      * 脚本描述， 不能超过50个字符
      */
    ScriptDesc?: string;
    /**
      * 数据库名称
      */
    DatabaseName?: string;
}
/**
 * BindWorkGroupsToUser请求参数结构体
 */
export interface BindWorkGroupsToUserRequest {
    /**
      * 绑定的用户和工作组信息
      */
    AddInfo: WorkGroupIdSetOfUserId;
}
/**
 * 数据表列信息。
 */
export interface Column {
    /**
      * 列名称，不区分大小写，最大支持25个字符。
      */
    Name: string;
    /**
      * 列类型，支持如下类型定义:
string|tinyint|smallint|int|bigint|boolean|float|double|decimal|timestamp|date|binary|array<data_type>|map<primitive_type, data_type>|struct<col_name : data_type [COMMENT col_comment], ...>|uniontype<data_type, data_type, ...>。
      */
    Type: string;
    /**
      * 对该类的注释。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Comment?: string;
    /**
      * 表示整个 numeric 的长度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Precision?: number;
    /**
      * 表示小数部分的长度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scale?: number;
    /**
      * 是否为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nullable?: string;
    /**
      * 字段位置，小的在前
注意：此字段可能返回 null，表示取不到有效值。
      */
    Position?: number;
    /**
      * 字段创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 字段修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime?: string;
}
/**
 * DescribeTaskResult请求参数结构体
 */
export interface DescribeTaskResultRequest {
    /**
      * 任务唯一ID
      */
    TaskId: string;
    /**
      * 上一次请求响应返回的分页信息。第一次可以不带，从头开始返回数据，每次返回1000行数据。
      */
    NextToken?: string;
    /**
      * 返回结果的最大行数，范围0~1000，默认为1000.
      */
    MaxResults?: number;
}
/**
 * 查询列表过滤条件参数
 */
export interface Filter {
    /**
      * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑或（OR）关系。
      */
    Name: string;
    /**
      * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
      */
    Values: Array<string>;
}
/**
 * DescribeUsers返回参数结构体
 */
export interface DescribeUsersResponse {
    /**
      * 查询到的用户总数
      */
    TotalCount: number;
    /**
      * 查询到的授权用户信息集合
      */
    UserSet: Array<UserInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScripts返回参数结构体
 */
export interface DescribeScriptsResponse {
    /**
      * Script列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scripts: Array<Script>;
    /**
      * 实例总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询视图信息对象
 */
export interface ViewResponseInfo {
    /**
      * 视图基本信息。
      */
    ViewBaseInfo: ViewBaseInfo;
    /**
      * 视图列信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Columns: Array<Column>;
    /**
      * 视图属性信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Properties: Array<Property>;
    /**
      * 视图创建时间。
      */
    CreateTime: string;
    /**
      * 视图更新时间。
      */
    ModifiedTime: string;
}
/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
    /**
      * 需要授权的子用户uin，可以通过腾讯云控制台右上角 → “账号信息” → “账号ID进行查看”。
      */
    UserId: string;
    /**
      * 用户描述信息，方便区分不同用户
      */
    UserDescription?: string;
    /**
      * 绑定到用户的权限集合
      */
    PolicySet?: Array<Policy>;
    /**
      * 用户类型。ADMIN：管理员 COMMON：一般用户。当用户类型为管理员的时候，不能设置权限集合和绑定的工作组集合，管理员默认拥有所有权限。该参数不填默认为COMMON
      */
    UserType?: string;
    /**
      * 绑定到用户的工作组ID集合。
      */
    WorkGroupIds?: Array<number>;
    /**
      * 用户别名，字符长度小50
      */
    UserAlias?: string;
}
/**
 * ModifyWorkGroup请求参数结构体
 */
export interface ModifyWorkGroupRequest {
    /**
      * 工作组Id
      */
    WorkGroupId: number;
    /**
      * 工作组描述
      */
    WorkGroupDescription: string;
}
/**
 * CancelTask返回参数结构体
 */
export interface CancelTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteWorkGroup返回参数结构体
 */
export interface DeleteWorkGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 同一个用户绑定的工作组集合
 */
export interface WorkGroupIdSetOfUserId {
    /**
      * 用户Id，和CAM侧Uin匹配
      */
    UserId: string;
    /**
      * 工作组Id集合
      */
    WorkGroupIds: Array<number>;
}
/**
 * CreateWorkGroup返回参数结构体
 */
export interface CreateWorkGroupResponse {
    /**
      * 工作组Id，全局唯一
      */
    WorkGroupId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务结果信息
 */
export interface TaskResultInfo {
    /**
      * 任务唯一ID
      */
    TaskId: string;
    /**
      * 数据源名称，当前任务执行时候选中的默认数据源
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatasourceConnectionName: string;
    /**
      * 数据库名称，当前任务执行时候选中的默认数据库
注意：此字段可能返回 null，表示取不到有效值。
      */
    DatabaseName: string;
    /**
      * 当前执行的SQL，一个任务包含一个SQL
      */
    SQL: string;
    /**
      * 执行任务的类型，现在分为DDL、DML、DQL
      */
    SQLType: string;
    /**
      * 任务当前的状态，0：初始化 1：任务运行中 2：任务执行成功 -1：任务执行失败 -3：用户手动终止。只有任务执行成功的情况下，才会返回任务执行的结果
      */
    State: number;
    /**
      * 扫描的数据量，单位byte
      */
    DataAmount: number;
    /**
      * 任务执行耗时，单位秒
      */
    UsedTime: number;
    /**
      * 任务结果输出的COS桶地址
      */
    OutputPath: string;
    /**
      * 任务创建时间，时间戳
      */
    CreateTime: string;
    /**
      * 任务执行信息，成功时返回success，失败时返回失败原因
      */
    OutputMessage: string;
    /**
      * 被影响的行数
      */
    RowAffectInfo: string;
    /**
      * 结果的schema信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResultSchema: Array<Column>;
    /**
      * 结果信息，反转义后，外层数组的每个元素为一行数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResultSet: string;
    /**
      * 分页信息，如果没有更多结果数据，nextToken为空
      */
    NextToken: string;
    /**
      * 任务执行进度num/100(%)
      */
    Percentage: number;
    /**
      * 任务进度明细
      */
    ProgressDetail: string;
    /**
      * 控制台展示格式。table：表格展示 text：文本展示
      */
    DisplayFormat: string;
}
/**
 * DescribeTables请求参数结构体
 */
export interface DescribeTablesRequest {
    /**
      * 列出该数据库下所属数据表。
      */
    DatabaseName: string;
    /**
      * 返回数量，默认为10，最大值为100。
      */
    Limit?: number;
    /**
      * 数据偏移量，从0开始，默认为0。
      */
    Offset?: number;
    /**
      * 过滤条件，如下支持的过滤类型，传参Name应为其一
table-name - String - （过滤条件）数据表名称,形如：table-001。
table-id - String - （过滤条件）table id形如：12342。
      */
    Filters?: Array<Filter>;
    /**
      * 指定查询的数据源名称，默认为DataLakeCatalog
      */
    DatasourceConnectionName?: string;
    /**
      * 起始时间：用于对更新时间的筛选
      */
    StartTime?: string;
    /**
      * 终止时间：用于对更新时间的筛选
      */
    EndTime?: string;
    /**
      * 排序字段，支持：ModifiedTime（默认）；CreateTime
      */
    Sort?: string;
    /**
      * 排序字段，false：降序（默认）；true
      */
    Asc?: boolean;
    /**
      * table type，表类型查询,可用值:EXTERNAL_TABLE,INDEX_TABLE,MANAGED_TABLE,MATERIALIZED_VIEW,TABLE,VIEW,VIRTUAL_VIEW
      */
    TableType?: string;
}
/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
    /**
      * 数据库对象列表。
      */
    DatabaseList: Array<DatabaseResponseInfo>;
    /**
      * 实例总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库对象
 */
export interface DatabaseInfo {
    /**
      * 数据库名称，长度0~128，支持数字、字母下划线，不允许数字大头，统一转换为小写。
      */
    DatabaseName: string;
    /**
      * 数据库描述信息，长度 0~500。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Comment?: string;
    /**
      * 数据库属性列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Properties?: Array<Property>;
    /**
      * 数据库cos路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    Location?: string;
}
/**
 * CreateImportTask请求参数结构体
 */
export interface CreateImportTaskRequest {
    /**
      * 数据来源，cos
      */
    InputType: string;
    /**
      * 输入配置
      */
    InputConf: Array<KVPair>;
    /**
      * 输出配置
      */
    OutputConf: Array<KVPair>;
    /**
      * 目标数据源的类型，目前支持导入到托管存储，即lakefsStorage
      */
    OutputType?: string;
}
/**
 * CreateExportTask返回参数结构体
 */
export interface CreateExportTaskResponse {
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
 * UnbindWorkGroupsFromUser请求参数结构体
 */
export interface UnbindWorkGroupsFromUserRequest {
    /**
      * 解绑的工作组Id和用户Id的关联关系
      */
    AddInfo: WorkGroupIdSetOfUserId;
}
/**
 * DescribeTable请求参数结构体
 */
export interface DescribeTableRequest {
    /**
      * 查询对象表名称
      */
    TableName: string;
    /**
      * 查询表所在的数据库名称。
      */
    DatabaseName: string;
    /**
      * 查询表所在的数据源名称
      */
    DatasourceConnectionName?: string;
}
/**
 * 数据格式其它类型。
 */
export interface Other {
    /**
      * 枚举类型，默认值为Json，可选值为[Json, Parquet, ORC, AVRD]之一。
      */
    Format: string;
}
/**
 * CSV类型数据格式
 */
export interface CSV {
    /**
      * 压缩格式，["Snappy", "Gzip", "None"选一]。
      */
    CodeCompress?: string;
    /**
      * CSV序列化及反序列化数据结构。
      */
    CSVSerde?: CSVSerde;
    /**
      * 标题行，默认为0。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HeadLines?: number;
    /**
      * 格式，默认值为CSV
注意：此字段可能返回 null，表示取不到有效值。
      */
    Format?: string;
}
/**
 * DeleteUsersFromWorkGroup请求参数结构体
 */
export interface DeleteUsersFromWorkGroupRequest {
    /**
      * 要删除的用户信息
      */
    AddInfo: UserIdSetOfWorkGroupId;
}
/**
 * 权限对象
 */
export interface Policy {
    /**
      * 需要授权的数据库名，填*代表当前Catalog下所有数据库。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定数据库。
      */
    Database: string;
    /**
      * 需要授权的数据源名称，管理员级别下只支持填*（代表该级别全部资源）；数据源级别和数据库级别鉴权的情况下，只支持填COSDataCatalog或者*；在数据表级别鉴权下可以填写用户自定义数据源。不填情况下默认为DataLakeCatalog。注意：如果是对用户自定义数据源进行鉴权，DLC能够管理的权限是用户接入数据源的时候提供的账户的子集。
      */
    Catalog: string;
    /**
      * 需要授权的表名，填*代表当前Database下所有表。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定数据表。
      */
    Table: string;
    /**
      * 授权的权限操作，对于不同级别的鉴权提供不同操作。管理员权限：ALL，不填默认为ALL；数据连接级鉴权：CREATE；数据库级别鉴权：ALL、CREATE、ALTER、DROP；数据表权限：ALL、SELECT、INSERT、ALTER、DELETE、DROP、UPDATE。注意：在数据表权限下，指定的数据源不为COSDataCatalog的时候，只支持SELECT操作。
      */
    Operation: string;
    /**
      * 授权类型，现在支持八种授权类型：ADMIN:管理员级别鉴权 DATASOURCE：数据连接级别鉴权 DATABASE：数据库级别鉴权 TABLE：表级别鉴权 VIEW：视图级别鉴权 FUNCTION：函数级别鉴权 COLUMN：列级别鉴权 ENGINE：数据引擎鉴权。不填默认为管理员级别鉴权。
      */
    PolicyType?: string;
    /**
      * 需要授权的函数名，填*代表当前Catalog下所有函数。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别时只允许填空，其他类型下可以任意指定函数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Function?: string;
    /**
      * 需要授权的视图，填*代表当前Database下所有视图。当授权类型为管理员级别时，只允许填“*”，当授权类型为数据连接级别、数据库级别时只允许填空，其他类型下可以任意指定视图。
注意：此字段可能返回 null，表示取不到有效值。
      */
    View?: string;
    /**
      * 需要授权的列，填*代表当前所有列。当授权类型为管理员级别时，只允许填“*”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Column?: string;
    /**
      * 需要授权的数据引擎，填*代表当前所有引擎。当授权类型为管理员级别时，只允许填“*”
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataEngine?: string;
    /**
      * 用户是否可以进行二次授权。当为true的时候，被授权的用户可以将本次获取的权限再次授权给其他子用户。默认为false
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReAuth?: boolean;
    /**
      * 权限来源，入参不填。USER：权限来自用户本身；WORKGROUP：权限来自绑定的工作组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Source?: string;
    /**
      * 授权模式，入参不填。COMMON：普通模式；SENIOR：高级模式。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mode?: string;
    /**
      * 操作者，入参不填。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operator?: string;
    /**
      * 权限创建的时间，入参不填
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
}
/**
 * CreateTasks请求参数结构体
 */
export interface CreateTasksRequest {
    /**
      * 数据库名称。如果SQL语句中有数据库名称，优先使用SQL语句中的数据库，否则使用该参数指定的数据库（注：当提交建库sql时，该字段传空字符串）。
      */
    DatabaseName: string;
    /**
      * SQL任务信息
      */
    Tasks: TasksInfo;
    /**
      * 数据源名称，默认为DataLakeCatalog
      */
    DatasourceConnectionName?: string;
    /**
      * 计算引擎名称，不填任务提交到默认集群
      */
    DataEngineName?: string;
}
/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWorkGroups请求参数结构体
 */
export interface DescribeWorkGroupsRequest {
    /**
      * 查询的工作组Id，不填或填0表示不过滤。
      */
    WorkGroupId?: number;
    /**
      * 过滤条件，当前仅支持按照工作组名称进行模糊搜索。Key为workgroup-name
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认20，最大值100
      */
    Limit?: number;
    /**
      * 排序字段，支持如下字段类型，create-time
      */
    SortBy?: string;
    /**
      * 排序方式，desc表示正序，asc表示反序， 默认为asc
      */
    Sorting?: string;
}
/**
 * DescribeTable返回参数结构体
 */
export interface DescribeTableResponse {
    /**
      * 数据表对象
      */
    Table: TableResponseInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询表信息对象
 */
export interface TableResponseInfo {
    /**
      * 数据表基本信息。
      */
    TableBaseInfo: TableBaseInfo;
    /**
      * 数据表列信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Columns: Array<Column>;
    /**
      * 数据表分块信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Partitions: Array<Partition>;
    /**
      * 数据存储路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Location: string;
    /**
      * 数据表属性信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Properties: Array<Property>;
    /**
      * 数据表更新时间, 单位: ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime: string;
    /**
      * 数据表创建时间,单位: ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 数据格式。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InputFormat: string;
    /**
      * 数据表存储大小（单位：Byte）
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageSize: number;
    /**
      * 数据表行数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordCount: number;
}
/**
 * AddUsersToWorkGroup返回参数结构体
 */
export interface AddUsersToWorkGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DetachUserPolicy返回参数结构体
 */
export interface DetachUserPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTasks返回参数结构体
 */
export interface CreateTasksResponse {
    /**
      * 本批次提交的任务的批次Id
      */
    BatchId: string;
    /**
      * 任务Id集合，按照执行顺序排列
      */
    TaskIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnbindWorkGroupsFromUser返回参数结构体
 */
export interface UnbindWorkGroupsFromUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateWorkGroup请求参数结构体
 */
export interface CreateWorkGroupRequest {
    /**
      * 工作组名称
      */
    WorkGroupName: string;
    /**
      * 工作组描述
      */
    WorkGroupDescription?: string;
    /**
      * 工作组绑定的鉴权策略集合
      */
    PolicySet?: Array<Policy>;
    /**
      * 需要绑定到工作组的用户Id集合
      */
    UserIds?: Array<string>;
}
/**
 *  SQL查询任务
 */
export interface SQLTask {
    /**
      * base64加密后的SQL语句
      */
    SQL: string;
    /**
      * 任务的配置信息
      */
    Config?: Array<KVPair>;
}
/**
 * 用户部分信息
 */
export interface UserMessage {
    /**
      * 用户Id，和CAM侧子用户Uin匹配
      */
    UserId: string;
    /**
      * 用户描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserDescription: string;
    /**
      * 当前用户的创建者
      */
    Creator: string;
    /**
      * 当前用户的创建时间，形如2021-07-28 16:19:32
      */
    CreateTime: string;
    /**
      * 用户别名
      */
    UserAlias: string;
}
/**
 * AttachUserPolicy返回参数结构体
 */
export interface AttachUserPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DetachWorkGroupPolicy请求参数结构体
 */
export interface DetachWorkGroupPolicyRequest {
    /**
      * 工作组Id
      */
    WorkGroupId: number;
    /**
      * 解绑的权限集合
      */
    PolicySet?: Array<Policy>;
}
/**
 * DescribeViews返回参数结构体
 */
export interface DescribeViewsResponse {
    /**
      * 视图对象列表。
      */
    ViewList: Array<ViewResponseInfo>;
    /**
      * 实例总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
    /**
      * 用户Id，和CAM侧Uin匹配
      */
    UserId: string;
    /**
      * 用户描述
      */
    UserDescription: string;
}
/**
 * 数据库对象
 */
export interface DatabaseResponseInfo {
    /**
      * 数据库名称。
      */
    DatabaseName: string;
    /**
      * 数据库描述信息，长度 0~256。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Comment?: string;
    /**
      * 允许针对数据库的属性元数据信息进行指定。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Properties?: Array<Property>;
    /**
      * 数据库创建时间戳，单位：s。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 数据库更新时间戳，单位：s。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime?: string;
}

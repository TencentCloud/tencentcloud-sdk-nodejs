import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeResultDownloadResponse, DescribeTaskResultResponse, DescribeNotebookSessionStatementRequest, CancelNotebookSessionStatementRequest, DescribeDatabasesRequest, DeleteUserRequest, ListTaskJobLogDetailResponse, CreateResultDownloadResponse, ModifyGovernEventRuleResponse, DescribeNotebookSessionsRequest, CreateDMSDatabaseResponse, CreateStoreLocationResponse, DescribeNotebookSessionResponse, DescribeDMSDatabaseResponse, UnbindWorkGroupsFromUserResponse, DropDMSDatabaseRequest, CreateScriptResponse, CreateTasksInOrderResponse, DescribeTablesResponse, SuspendResumeDataEngineResponse, DeleteSparkAppRequest, ModifyUserResponse, DeleteScriptResponse, DetachUserPolicyRequest, AlterDMSTableResponse, DescribeTasksResponse, DescribeDMSTableResponse, DropDMSPartitionsRequest, CreateNotebookSessionStatementSupportBatchSQLRequest, CreateTasksInOrderRequest, AddDMSPartitionsResponse, DetachWorkGroupPolicyResponse, GenerateCreateMangedTableSqlRequest, ModifySparkAppRequest, CreateDatabaseRequest, GenerateCreateMangedTableSqlResponse, DescribeDMSTablesResponse, AlterDMSPartitionRequest, CheckLockMetaDataRequest, DescribeSparkAppJobRequest, CreateDatabaseResponse, DescribeTasksRequest, CreateSparkAppTaskRequest, CancelNotebookSessionStatementBatchResponse, UnlockMetaDataRequest, AttachUserPolicyRequest, CreateInternalTableRequest, ListTaskJobLogDetailRequest, AttachWorkGroupPolicyRequest, CreateUserResponse, DescribeNotebookSessionStatementsRequest, DeleteUserResponse, DescribeDatabasesResponse, DescribeNotebookSessionsResponse, DescribeDMSPartitionsRequest, DescribeSparkAppJobsRequest, DeleteNotebookSessionRequest, CreateDMSTableResponse, CreateNotebookSessionRequest, CreateTaskRequest, DescribeNotebookSessionRequest, CreateTableRequest, CreateNotebookSessionStatementRequest, DescribeWorkGroupsResponse, CreateImportTaskRequest, DescribeScriptsRequest, DescribeSparkAppJobResponse, CreateExportTaskResponse, AddUsersToWorkGroupRequest, DescribeStoreLocationRequest, AddUsersToWorkGroupResponse, DescribeNotebookSessionLogRequest, CreateExportTaskRequest, DescribeNotebookSessionStatementResponse, ReportHeartbeatMetaDataResponse, ReportHeartbeatMetaDataRequest, CreateDMSTableRequest, CancelNotebookSessionStatementResponse, AttachWorkGroupPolicyResponse, ModifyWorkGroupResponse, DescribeDMSTablesRequest, ModifyUserRequest, CreateSparkAppTaskResponse, CancelTaskRequest, BindWorkGroupsToUserResponse, CreateNotebookSessionStatementResponse, DescribeStoreLocationResponse, DeleteScriptRequest, AddDMSPartitionsRequest, DescribeNotebookSessionStatementSqlResultRequest, ModifySparkAppResponse, AlterDMSTableRequest, CreateImportTaskResponse, CreateTableResponse, CreateNotebookSessionStatementSupportBatchSQLResponse, CreateScriptRequest, BindWorkGroupsToUserRequest, DeleteWorkGroupRequest, DescribeTaskResultRequest, DescribeUsersResponse, DescribeNotebookSessionLogResponse, CreateUserRequest, ModifyWorkGroupRequest, CancelTaskResponse, UnlockMetaDataResponse, DeleteWorkGroupResponse, DropDMSTableResponse, CreateWorkGroupResponse, DescribeTablesRequest, DeleteNotebookSessionResponse, CreateStoreLocationRequest, DescribeNotebookSessionStatementsResponse, AttachUserPolicyResponse, DropDMSTableRequest, DescribeNotebookSessionStatementSqlResultResponse, DescribeDMSPartitionsResponse, DeleteUsersFromWorkGroupResponse, UnbindWorkGroupsFromUserRequest, DescribeDMSDatabaseRequest, DescribeTableRequest, DropDMSDatabaseResponse, DescribeUsersRequest, DeleteUsersFromWorkGroupRequest, CreateSparkAppResponse, CreateTaskResponse, DeleteSparkAppResponse, AlterDMSPartitionResponse, CreateTasksRequest, SuspendResumeDataEngineRequest, DescribeTableResponse, DescribeSparkAppJobsResponse, DescribeSparkAppTasksResponse, DescribeViewsRequest, LockMetaDataRequest, DetachUserPolicyResponse, DescribeWorkGroupsRequest, CreateTasksResponse, CreateNotebookSessionResponse, CreateSparkAppRequest, DescribeDataEnginesRequest, DropDMSPartitionsResponse, AlterDMSDatabaseResponse, CreateWorkGroupRequest, CreateInternalTableResponse, DescribeSparkAppTasksRequest, LockMetaDataResponse, CheckLockMetaDataResponse, AlterDMSDatabaseRequest, DescribeViewsResponse, CreateResultDownloadRequest, CreateDMSDatabaseRequest, DetachWorkGroupPolicyRequest, DescribeDMSTableRequest, ModifyGovernEventRuleRequest, CancelNotebookSessionStatementBatchRequest, DescribeDataEnginesResponse, DescribeScriptsResponse, DescribeResultDownloadRequest } from "./dlc_models";
/**
 * dlc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 解绑工作组鉴权策略
     */
    DetachWorkGroupPolicy(req: DetachWorkGroupPolicyRequest, cb?: (error: string, rep: DetachWorkGroupPolicyResponse) => void): Promise<DetachWorkGroupPolicyResponse>;
    /**
     * 本接口（CreateTask）用于创建sql查询任务。（推荐使用CreateTasks接口）
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * 按顺序创建任务（已经废弃，后期不再维护，请使用接口CreateTasks）
     */
    CreateTasksInOrder(req: CreateTasksInOrderRequest, cb?: (error: string, rep: CreateTasksInOrderResponse) => void): Promise<CreateTasksInOrderResponse>;
    /**
     * 元数据锁检查
     */
    CheckLockMetaData(req: CheckLockMetaDataRequest, cb?: (error: string, rep: CheckLockMetaDataResponse) => void): Promise<CheckLockMetaDataResponse>;
    /**
     * 该接口（CreateImportTask）用于创建导入任务
     */
    CreateImportTask(req: CreateImportTaskRequest, cb?: (error: string, rep: CreateImportTaskResponse) => void): Promise<CreateImportTaskResponse>;
    /**
     * DMS元数据更新表
     */
    AlterDMSTable(req: AlterDMSTableRequest, cb?: (error: string, rep: AlterDMSTableResponse) => void): Promise<AlterDMSTableResponse>;
    /**
     * 本接口（DescribeNotebookSession）用于获取notebook livy session详情信息
     */
    DescribeNotebookSession(req: DescribeNotebookSessionRequest, cb?: (error: string, rep: DescribeNotebookSessionResponse) => void): Promise<DescribeNotebookSessionResponse>;
    /**
     * 本接口（CancelNotebookSessionStatement）用于取消session statement
     */
    CancelNotebookSessionStatement(req: CancelNotebookSessionStatementRequest, cb?: (error: string, rep: CancelNotebookSessionStatementResponse) => void): Promise<CancelNotebookSessionStatementResponse>;
    /**
     * DMS元数据新增分区
     */
    AddDMSPartitions(req: AddDMSPartitionsRequest, cb?: (error: string, rep: AddDMSPartitionsResponse) => void): Promise<AddDMSPartitionsResponse>;
    /**
     * 该接口（DeleteScript）用于删除sql脚本。
     */
    DeleteScript(req: DeleteScriptRequest, cb?: (error: string, rep: DeleteScriptResponse) => void): Promise<DeleteScriptResponse>;
    /**
     * 元数据锁
     */
    LockMetaData(req: LockMetaDataRequest, cb?: (error: string, rep: LockMetaDataResponse) => void): Promise<LockMetaDataResponse>;
    /**
     * 本接口（CreateTable）用于生成建表SQL。
     */
    CreateTable(req: CreateTableRequest, cb?: (error: string, rep: CreateTableResponse) => void): Promise<CreateTableResponse>;
    /**
     * 查询任务结果
     */
    DescribeTaskResult(req: DescribeTaskResultRequest, cb?: (error: string, rep: DescribeTaskResultResponse) => void): Promise<DescribeTaskResultResponse>;
    /**
     * 本接口（CancelNotebookSessionStatementBatch）用于按批取消Session statement。
     */
    CancelNotebookSessionStatementBatch(req: CancelNotebookSessionStatementBatchRequest, cb?: (error: string, rep: CancelNotebookSessionStatementBatchResponse) => void): Promise<CancelNotebookSessionStatementBatchResponse>;
    /**
     * 删除spark应用
     */
    DeleteSparkApp(req: DeleteSparkAppRequest, cb?: (error: string, rep: DeleteSparkAppResponse) => void): Promise<DeleteSparkAppResponse>;
    /**
     * 本接口（CreateNotebookSession）用于创建notebook livy session
     */
    CreateNotebookSession(req: CreateNotebookSessionRequest, cb?: (error: string, rep: CreateNotebookSessionResponse) => void): Promise<CreateNotebookSessionResponse>;
    /**
     * 本接口（CreateTasks），用于批量创建任务
     */
    CreateTasks(req: CreateTasksRequest, cb?: (error: string, rep: CreateTasksResponse) => void): Promise<CreateTasksResponse>;
    /**
     * 该接口（DescribeScripts）用于获取所有SQL查询。
     */
    DescribeScripts(req: DescribeScriptsRequest, cb?: (error: string, rep: DescribeScriptsResponse) => void): Promise<DescribeScriptsResponse>;
    /**
     * 查询具体的spark应用
     */
    DescribeSparkAppJob(req: DescribeSparkAppJobRequest, cb?: (error: string, rep: DescribeSparkAppJobResponse) => void): Promise<DescribeSparkAppJobResponse>;
    /**
     * 删除工作组
     */
    DeleteWorkGroup(req: DeleteWorkGroupRequest, cb?: (error: string, rep: DeleteWorkGroupResponse) => void): Promise<DeleteWorkGroupResponse>;
    /**
     * 元数据解锁
     */
    UnlockMetaData(req: UnlockMetaDataRequest, cb?: (error: string, rep: UnlockMetaDataResponse) => void): Promise<UnlockMetaDataResponse>;
    /**
     * 查询结果下载任务
     */
    DescribeResultDownload(req: DescribeResultDownloadRequest, cb?: (error: string, rep: DescribeResultDownloadResponse) => void): Promise<DescribeResultDownloadResponse>;
    /**
     * 本接口（DescribeDataEngines）用于获取DataEngines信息列表
     */
    DescribeDataEngines(req: DescribeDataEnginesRequest, cb?: (error: string, rep: DescribeDataEnginesResponse) => void): Promise<DescribeDataEnginesResponse>;
    /**
     * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
     */
    CreateStoreLocation(req: CreateStoreLocationRequest, cb?: (error: string, rep: CreateStoreLocationResponse) => void): Promise<CreateStoreLocationResponse>;
    /**
     * DMS元数据获取表
     */
    DescribeDMSTable(req: DescribeDMSTableRequest, cb?: (error: string, rep: DescribeDMSTableResponse) => void): Promise<DescribeDMSTableResponse>;
    /**
     * 从工作组中删除用户
     */
    DeleteUsersFromWorkGroup(req: DeleteUsersFromWorkGroupRequest, cb?: (error: string, rep: DeleteUsersFromWorkGroupResponse) => void): Promise<DeleteUsersFromWorkGroupResponse>;
    /**
     * 上报元数据心跳
     */
    ReportHeartbeatMetaData(req: ReportHeartbeatMetaDataRequest, cb?: (error: string, rep: ReportHeartbeatMetaDataResponse) => void): Promise<ReportHeartbeatMetaDataResponse>;
    /**
     * 创建工作组
     */
    CreateWorkGroup(req: CreateWorkGroupRequest, cb?: (error: string, rep: CreateWorkGroupResponse) => void): Promise<CreateWorkGroupResponse>;
    /**
     * 本接口（CreateNotebookSessionStatementSupportBatchSQL）用于创建Statement批量运行SQL任务。
     */
    CreateNotebookSessionStatementSupportBatchSQL(req: CreateNotebookSessionStatementSupportBatchSQLRequest, cb?: (error: string, rep: CreateNotebookSessionStatementSupportBatchSQLResponse) => void): Promise<CreateNotebookSessionStatementSupportBatchSQLResponse>;
    /**
     * 本接口（DescribeNotebookSessionLog）用于获取notebook livy session日志
     */
    DescribeNotebookSessionLog(req: DescribeNotebookSessionLogRequest, cb?: (error: string, rep: DescribeNotebookSessionLogResponse) => void): Promise<DescribeNotebookSessionLogResponse>;
    /**
     * DMS元数据更新库
     */
    AlterDMSDatabase(req: AlterDMSDatabaseRequest, cb?: (error: string, rep: AlterDMSDatabaseResponse) => void): Promise<AlterDMSDatabaseResponse>;
    /**
     * 更新spark应用
     */
    ModifySparkApp(req: ModifySparkAppRequest, cb?: (error: string, rep: ModifySparkAppResponse) => void): Promise<ModifySparkAppResponse>;
    /**
     * 创建托管存储内表（该接口已废弃）
     */
    CreateInternalTable(req: CreateInternalTableRequest, cb?: (error: string, rep: CreateInternalTableResponse) => void): Promise<CreateInternalTableResponse>;
    /**
     * 本接口（DeleteNotebookSession）用于删除notebook livy session
     */
    DeleteNotebookSession(req: DeleteNotebookSessionRequest, cb?: (error: string, rep: DeleteNotebookSessionResponse) => void): Promise<DeleteNotebookSessionResponse>;
    /**
     * 生成创建托管表语句
     */
    GenerateCreateMangedTableSql(req: GenerateCreateMangedTableSqlRequest, cb?: (error: string, rep: GenerateCreateMangedTableSqlResponse) => void): Promise<GenerateCreateMangedTableSqlResponse>;
    /**
     * 绑定鉴权策略到工作组
     */
    AttachWorkGroupPolicy(req: AttachWorkGroupPolicyRequest, cb?: (error: string, rep: AttachWorkGroupPolicyResponse) => void): Promise<AttachWorkGroupPolicyResponse>;
    /**
     * 本接口（DescribeNotebookSessions）用于获取notebook livy session列表
     */
    DescribeNotebookSessions(req: DescribeNotebookSessionsRequest, cb?: (error: string, rep: DescribeNotebookSessionsResponse) => void): Promise<DescribeNotebookSessionsResponse>;
    /**
     * DMS元数据获取分区
     */
    DescribeDMSPartitions(req: DescribeDMSPartitionsRequest, cb?: (error: string, rep: DescribeDMSPartitionsResponse) => void): Promise<DescribeDMSPartitionsResponse>;
    /**
     * 创建spark应用
     */
    CreateSparkApp(req: CreateSparkAppRequest, cb?: (error: string, rep: CreateSparkAppResponse) => void): Promise<CreateSparkAppResponse>;
    /**
     * 本接口（CancelTask），用于取消任务执行
     */
    CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse>;
    /**
     * DMS元数据删除表
     */
    DropDMSTable(req: DropDMSTableRequest, cb?: (error: string, rep: DropDMSTableResponse) => void): Promise<DropDMSTableResponse>;
    /**
     * 该接口（CreateScript）用于创建sql脚本。
     */
    CreateScript(req: CreateScriptRequest, cb?: (error: string, rep: CreateScriptResponse) => void): Promise<CreateScriptResponse>;
    /**
     * DMS元数据获取表列表
     */
    DescribeDMSTables(req: DescribeDMSTablesRequest, cb?: (error: string, rep: DescribeDMSTablesResponse) => void): Promise<DescribeDMSTablesResponse>;
    /**
     * 本接口（CreateDatabase）用于生成建库SQL语句。
     */
    CreateDatabase(req: CreateDatabaseRequest, cb?: (error: string, rep: CreateDatabaseResponse) => void): Promise<CreateDatabaseResponse>;
    /**
     * 本接口（DescribeNotebookSessionStatement）用于获取session statement信息
     */
    DescribeNotebookSessionStatement(req: DescribeNotebookSessionStatementRequest, cb?: (error: string, rep: DescribeNotebookSessionStatementResponse) => void): Promise<DescribeNotebookSessionStatementResponse>;
    /**
     * 解绑用户上的用户组
     */
    UnbindWorkGroupsFromUser(req: UnbindWorkGroupsFromUserRequest, cb?: (error: string, rep: UnbindWorkGroupsFromUserResponse) => void): Promise<UnbindWorkGroupsFromUserResponse>;
    /**
     * 获取spark应用列表
     */
    DescribeSparkAppJobs(req: DescribeSparkAppJobsRequest, cb?: (error: string, rep: DescribeSparkAppJobsResponse) => void): Promise<DescribeSparkAppJobsResponse>;
    /**
     * 获取工作组列表
     */
    DescribeWorkGroups(req: DescribeWorkGroupsRequest, cb?: (error: string, rep: DescribeWorkGroupsResponse) => void): Promise<DescribeWorkGroupsResponse>;
    /**
     * 修改工作组信息
     */
    ModifyWorkGroup(req: ModifyWorkGroupRequest, cb?: (error: string, rep: ModifyWorkGroupResponse) => void): Promise<ModifyWorkGroupResponse>;
    /**
     * 本接口（ListTaskJobLogDetail）用于获取spark-jar日志列表
     */
    ListTaskJobLogDetail(req: ListTaskJobLogDetailRequest, cb?: (error: string, rep: ListTaskJobLogDetailResponse) => void): Promise<ListTaskJobLogDetailResponse>;
    /**
     * 本接口（DescribeViews）用于查询数据视图列表。
     */
    DescribeViews(req: DescribeViewsRequest, cb?: (error: string, rep: DescribeViewsResponse) => void): Promise<DescribeViewsResponse>;
    /**
     * 本接口（DescribeTable），用于查询单个表的详细信息。
     */
    DescribeTable(req: DescribeTableRequest, cb?: (error: string, rep: DescribeTableResponse) => void): Promise<DescribeTableResponse>;
    /**
     * 本接口（DescribeNotebookSessionStatements）用于获取Session Statement列表。
     */
    DescribeNotebookSessionStatements(req: DescribeNotebookSessionStatementsRequest, cb?: (error: string, rep: DescribeNotebookSessionStatementsResponse) => void): Promise<DescribeNotebookSessionStatementsResponse>;
    /**
     * 获取用户列表信息
     */
    DescribeUsers(req: DescribeUsersRequest, cb?: (error: string, rep: DescribeUsersResponse) => void): Promise<DescribeUsersResponse>;
    /**
     * DMS元数据获取库
     */
    DescribeDMSDatabase(req: DescribeDMSDatabaseRequest, cb?: (error: string, rep: DescribeDMSDatabaseResponse) => void): Promise<DescribeDMSDatabaseResponse>;
    /**
     * 该接口（DescribleTasks）用于查询任务列表
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 绑定工作组到用户
     */
    BindWorkGroupsToUser(req: BindWorkGroupsToUserRequest, cb?: (error: string, rep: BindWorkGroupsToUserResponse) => void): Promise<BindWorkGroupsToUserResponse>;
    /**
     * 创建spark任务
     */
    CreateSparkAppTask(req: CreateSparkAppTaskRequest, cb?: (error: string, rep: CreateSparkAppTaskResponse) => void): Promise<CreateSparkAppTaskResponse>;
    /**
     * DMS元数据删除分区
     */
    DropDMSPartitions(req: DropDMSPartitionsRequest, cb?: (error: string, rep: DropDMSPartitionsResponse) => void): Promise<DropDMSPartitionsResponse>;
    /**
     * 修改用户信息
     */
    ModifyUser(req: ModifyUserRequest, cb?: (error: string, rep: ModifyUserResponse) => void): Promise<ModifyUserResponse>;
    /**
     * 删除用户
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 本接口用于控制暂停或恢复数据引擎
     */
    SuspendResumeDataEngine(req: SuspendResumeDataEngineRequest, cb?: (error: string, rep: SuspendResumeDataEngineResponse) => void): Promise<SuspendResumeDataEngineResponse>;
    /**
     * 本接口（DescribeDatabases）用于查询数据库列表。
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 添加用户到工作组
     */
    AddUsersToWorkGroup(req: AddUsersToWorkGroupRequest, cb?: (error: string, rep: AddUsersToWorkGroupResponse) => void): Promise<AddUsersToWorkGroupResponse>;
    /**
     * 查询计算结果存储位置。
     */
    DescribeStoreLocation(req?: DescribeStoreLocationRequest, cb?: (error: string, rep: DescribeStoreLocationResponse) => void): Promise<DescribeStoreLocationResponse>;
    /**
     * DMS元数据创建库
     */
    CreateDMSDatabase(req: CreateDMSDatabaseRequest, cb?: (error: string, rep: CreateDMSDatabaseResponse) => void): Promise<CreateDMSDatabaseResponse>;
    /**
     * DMS元数据更新分区
     */
    AlterDMSPartition(req: AlterDMSPartitionRequest, cb?: (error: string, rep: AlterDMSPartitionResponse) => void): Promise<AlterDMSPartitionResponse>;
    /**
     * 绑定鉴权策略到用户
     */
    AttachUserPolicy(req: AttachUserPolicyRequest, cb?: (error: string, rep: AttachUserPolicyResponse) => void): Promise<AttachUserPolicyResponse>;
    /**
     * DMS元数据创建表
     */
    CreateDMSTable(req: CreateDMSTableRequest, cb?: (error: string, rep: CreateDMSTableResponse) => void): Promise<CreateDMSTableResponse>;
    /**
     * 创建查询结果下载任务
     */
    CreateResultDownload(req: CreateResultDownloadRequest, cb?: (error: string, rep: CreateResultDownloadResponse) => void): Promise<CreateResultDownloadResponse>;
    /**
     * 修改数据治理事件阈值
     */
    ModifyGovernEventRule(req?: ModifyGovernEventRuleRequest, cb?: (error: string, rep: ModifyGovernEventRuleResponse) => void): Promise<ModifyGovernEventRuleResponse>;
    /**
     * 查询spark应用的运行任务实例列表
     */
    DescribeSparkAppTasks(req: DescribeSparkAppTasksRequest, cb?: (error: string, rep: DescribeSparkAppTasksResponse) => void): Promise<DescribeSparkAppTasksResponse>;
    /**
     * 本接口（DescribeNotebookSessionStatementSqlResult）用于获取statement运行结果。
     */
    DescribeNotebookSessionStatementSqlResult(req: DescribeNotebookSessionStatementSqlResultRequest, cb?: (error: string, rep: DescribeNotebookSessionStatementSqlResultResponse) => void): Promise<DescribeNotebookSessionStatementSqlResultResponse>;
    /**
     * DMS元数据删除库
     */
    DropDMSDatabase(req: DropDMSDatabaseRequest, cb?: (error: string, rep: DropDMSDatabaseResponse) => void): Promise<DropDMSDatabaseResponse>;
    /**
     * 创建用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 本接口（CreateNotebookSessionStatement）用于创建session statement
     */
    CreateNotebookSessionStatement(req: CreateNotebookSessionStatementRequest, cb?: (error: string, rep: CreateNotebookSessionStatementResponse) => void): Promise<CreateNotebookSessionStatementResponse>;
    /**
     * 解绑用户鉴权策略
     */
    DetachUserPolicy(req: DetachUserPolicyRequest, cb?: (error: string, rep: DetachUserPolicyResponse) => void): Promise<DetachUserPolicyResponse>;
    /**
     * 本接口（DescribeTables）用于查询数据表列表。
     */
    DescribeTables(req: DescribeTablesRequest, cb?: (error: string, rep: DescribeTablesResponse) => void): Promise<DescribeTablesResponse>;
    /**
     * 该接口（CreateExportTask）用于创建导出任务
     */
    CreateExportTask(req: CreateExportTaskRequest, cb?: (error: string, rep: CreateExportTaskResponse) => void): Promise<CreateExportTaskResponse>;
}

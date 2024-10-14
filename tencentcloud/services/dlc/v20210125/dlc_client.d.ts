import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CheckDataEngineConfigPairsValidityResponse, DescribeResultDownloadResponse, DescribeDatabasesRequest, CreateUserRequest, ModifyGovernEventRuleResponse, DescribeNotebookSessionsRequest, DescribeDMSDatabaseResponse, DropDMSDatabaseRequest, DescribeTablesResponse, DescribeDataEngineEventsResponse, DescribeDMSPartitionsRequest, DescribeDMSTableResponse, CreateTasksInOrderRequest, CreateDatabaseRequest, DescribeDMSTablesResponse, DescribeAdvancedStoreLocationResponse, DescribeTablesNameResponse, DescribeAdvancedStoreLocationRequest, CancelNotebookSessionStatementBatchResponse, CreateNotebookSessionRequest, UpdateDataEngineRequest, DescribeSparkAppJobsRequest, DeleteNotebookSessionRequest, CreateDMSTableResponse, DescribeSparkSessionBatchSQLRequest, DescribeUsersResponse, DescribeUserInfoResponse, ModifyUserTypeRequest, DeleteUsersFromWorkGroupResponse, DescribeDLCCatalogAccessResponse, DeleteTableResponse, DescribeUserRolesResponse, CreateExportTaskRequest, CreateDMSTableRequest, ModifyWorkGroupResponse, DescribeDataEnginesScaleDetailResponse, DescribeNotebookSessionStatementSqlResultRequest, CreateTableResponse, ListTaskJobLogNameRequest, DescribeTaskResultRequest, UpdateUserDataEngineConfigRequest, RollbackDataEngineImageRequest, QueryResultResponse, RevokeDLCCatalogAccessRequest, CreateWorkGroupResponse, DescribeEngineUsageInfoResponse, DescribeWorkGroupInfoResponse, DescribeTablesRequest, CreateStoreLocationRequest, DescribeLakeFsInfoResponse, GetOptimizerPolicyResponse, DescribeTableRequest, DescribeTaskLogRequest, DescribeDataEnginesScaleDetailRequest, CreateTasksRequest, SuspendResumeDataEngineRequest, DescribeSparkAppJobsResponse, UpdateUserDataEngineConfigResponse, ModifyUserTypeResponse, DescribeDataEnginePythonSparkImagesRequest, CancelSparkSessionBatchSQLRequest, CreateDatabaseResponse, DropDMSPartitionsResponse, CreateWorkGroupRequest, DescribeDatasourceConnectionRequest, CheckDataEngineImageCanBeUpgradeRequest, QueryInternalTableWarehouseRequest, CreateResultDownloadRequest, DescribeNotebookSessionStatementSqlResultResponse, ModifyUserRequest, DescribeTasksCostInfoResponse, AddDMSPartitionsResponse, CancelNotebookSessionStatementRequest, CreateDMSDatabaseResponse, CreateStoreLocationResponse, DescribeTablesNameRequest, SwitchDataEngineRequest, ModifyUserResponse, DeleteScriptResponse, CreateNotebookSessionStatementSupportBatchSQLRequest, DetachWorkGroupPolicyResponse, DescribeSparkSessionBatchSqlLogResponse, SwitchDataEngineResponse, DescribeLakeFsInfoRequest, CreateCHDFSBindingProductResponse, DescribeUserInfoRequest, DescribeUserTypeResponse, DeleteThirdPartyAccessUserRequest, DeleteUserResponse, DescribeForbiddenTableProRequest, CreateDataEngineResponse, DescribeDataEngineRequest, CreateDataEngineRequest, DescribeNotebookSessionRequest, UpgradeDataEngineImageRequest, CreateNotebookSessionStatementRequest, DescribeUsersRequest, CreateExportTaskResponse, AddUsersToWorkGroupRequest, ModifyAdvancedStoreLocationRequest, DescribeNotebookSessionLogRequest, GetOptimizerPolicyRequest, SuspendResumeDataEngineResponse, AttachUserPolicyRequest, CancelTaskRequest, CreateNotebookSessionStatementResponse, ListTaskJobLogNameResponse, DescribeLakeFsTaskResultRequest, AlterDMSTableRequest, DescribeDMSPartitionsResponse, CreateScriptRequest, DescribeNotebookSessionLogResponse, DescribeForbiddenTableProResponse, DescribeWorkGroupInfoRequest, DescribeOtherCHDFSBindingListRequest, CancelTaskResponse, DescribeSparkSessionBatchSQLResponse, DescribeSparkSessionBatchSQLCostResponse, DescribeTasksOverviewResponse, DeleteDataEngineRequest, CreateSparkSessionBatchSQLResponse, DescribeDMSDatabaseRequest, DescribeLakeFsDirSummaryRequest, CreateSparkAppResponse, CreateTaskResponse, AlterDMSPartitionResponse, DescribeTableResponse, DetachUserPolicyResponse, UnbindWorkGroupsFromUserResponse, AlterDMSDatabaseResponse, CancelNotebookSessionStatementResponse, LockMetaDataResponse, CheckLockMetaDataResponse, AlterDMSDatabaseRequest, DescribeOtherCHDFSBindingListResponse, UpdateRowFilterResponse, DescribeDataEngineEventsRequest, DescribeDataEnginePythonSparkImagesResponse, DescribeDataEnginesResponse, UpdateRowFilterRequest, AlterDMSTableResponse, DescribeUpdatableDataEnginesResponse, DeleteUserRequest, DeleteDataEngineResponse, DescribeTasksAnalysisResponse, RestartDataEngineResponse, SwitchDataEngineImageResponse, DescribeSparkAppTasksResponse, CreateCHDFSBindingProductRequest, ModifySparkAppRequest, AssignMangedTablePropertiesRequest, AlterDMSPartitionRequest, ReportHeartbeatMetaDataResponse, QueryInternalTableWarehouseResponse, CheckDataEngineImageCanBeUpgradeResponse, CreateInternalTableRequest, AttachWorkGroupPolicyRequest, CreateUserResponse, DescribeNotebookSessionStatementsRequest, UpdateDataEngineResponse, DescribeTasksOverviewRequest, QueryResultRequest, CheckDataEngineImageCanBeRollbackRequest, CreateTaskRequest, CreateTableRequest, DescribeSparkSessionBatchSqlLogRequest, DescribeUpdatableDataEnginesRequest, DeleteTableRequest, DescribeStoreLocationRequest, DescribeViewsRequest, GrantDLCCatalogAccessRequest, ReportHeartbeatMetaDataRequest, AttachWorkGroupPolicyResponse, DescribeDMSTablesRequest, GenerateCreateMangedTableSqlResponse, DescribeDataEngineImageVersionsRequest, BindWorkGroupsToUserResponse, DeleteScriptRequest, AddDMSPartitionsRequest, DescribeUserRolesRequest, CreateImportTaskResponse, RenewDataEngineRequest, DescribeTasksAnalysisRequest, DescribeScriptsResponse, UnbindWorkGroupsFromUserRequest, CreateImportTaskRequest, ModifyWorkGroupRequest, DescribeDatabasesResponse, DescribeThirdPartyAccessUserRequest, AssignMangedTablePropertiesResponse, UpdateDataEngineConfigResponse, GenerateCreateMangedTableSqlRequest, DeleteThirdPartyAccessUserResponse, AddUsersToWorkGroupResponse, DescribeDataEngineImageVersionsResponse, DeleteSparkAppResponse, DescribeUserDataEngineConfigRequest, CreateTasksResponse, GrantDLCCatalogAccessResponse, CreateSparkAppRequest, CreateSparkSessionBatchSQLRequest, ListTaskJobLogDetailResponse, DescribeSubUserAccessPolicyRequest, AttachUserPolicyResponse, CreateDMSDatabaseRequest, DetachWorkGroupPolicyRequest, DeleteCHDFSBindingProductResponse, CancelNotebookSessionStatementBatchRequest, DescribeLakeFsTaskResultResponse, DescribeTasksCostInfoRequest, DescribeTaskResultResponse, DescribeDatasourceConnectionResponse, DescribeNotebookSessionStatementRequest, ModifyDataEngineDescriptionRequest, DropDMSTableResponse, DescribeUserDataEngineConfigResponse, DescribeSparkAppJobRequest, CreateResultDownloadResponse, RestartDataEngineRequest, DescribeNotebookSessionResponse, DescribeSubUserAccessPolicyResponse, CreateScriptResponse, ModifyAdvancedStoreLocationResponse, CreateTasksInOrderResponse, DeleteSparkAppRequest, DescribeDLCCatalogAccessRequest, DetachUserPolicyRequest, DescribeTaskLogResponse, DescribeTasksResponse, DropDMSPartitionsRequest, DescribeUserTypeRequest, CheckDataEngineConfigPairsValidityRequest, CheckLockMetaDataRequest, AddOptimizerEnginesResponse, DescribeTasksRequest, CreateSparkAppTaskRequest, DeleteWorkGroupRequest, UnlockMetaDataRequest, CreateSparkAppTaskResponse, ListTaskJobLogDetailRequest, RevokeDLCCatalogAccessResponse, DeleteCHDFSBindingProductRequest, RenewDataEngineResponse, DescribeNotebookSessionsResponse, DescribeEngineUsageInfoRequest, RollbackDataEngineImageResponse, AddOptimizerEnginesRequest, ModifySparkAppBatchRequest, RegisterThirdPartyAccessUserResponse, ModifySparkAppResponse, DescribeWorkGroupsResponse, DescribeScriptsRequest, DescribeSparkAppJobResponse, DescribeNotebookSessionStatementResponse, UpgradeDataEngineImageResponse, DescribeStoreLocationResponse, QueryTaskCostDetailResponse, CreateNotebookSessionStatementSupportBatchSQLResponse, BindWorkGroupsToUserRequest, DescribeLakeFsDirSummaryResponse, UnlockMetaDataResponse, DeleteWorkGroupResponse, ModifySparkAppBatchResponse, CheckDataEngineImageCanBeRollbackResponse, DeleteNotebookSessionResponse, DescribeThirdPartyAccessUserResponse, DescribeNotebookSessionStatementsResponse, CancelSparkSessionBatchSQLResponse, DescribeDataEnginesRequest, DropDMSDatabaseResponse, DeleteUsersFromWorkGroupRequest, DescribeViewsResponse, DescribeWorkGroupsRequest, LockMetaDataRequest, DescribeSparkSessionBatchSQLCostRequest, CreateNotebookSessionResponse, DescribeDataEngineResponse, QueryTaskCostDetailRequest, ModifyDataEngineDescriptionResponse, UpdateDataEngineConfigRequest, DropDMSTableRequest, CreateInternalTableResponse, DescribeSparkAppTasksRequest, RegisterThirdPartyAccessUserRequest, SwitchDataEngineImageRequest, DescribeDMSTableRequest, ModifyGovernEventRuleRequest, DescribeResultDownloadRequest } from "./dlc_models";
/**
 * dlc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（CreateTask）用于创建并执行SQL任务。（推荐使用CreateTasks接口）
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * 添加用户到工作组
     */
    AddUsersToWorkGroup(req: AddUsersToWorkGroupRequest, cb?: (error: string, rep: AddUsersToWorkGroupResponse) => void): Promise<AddUsersToWorkGroupResponse>;
    /**
     * DMS元数据更新表
     */
    AlterDMSTable(req: AlterDMSTableRequest, cb?: (error: string, rep: AlterDMSTableResponse) => void): Promise<AlterDMSTableResponse>;
    /**
     * 本接口（DescribeForbiddenTablePro）用于查询被禁用的表属性列表（新）
     */
    DescribeForbiddenTablePro(req?: DescribeForbiddenTableProRequest, cb?: (error: string, rep: DescribeForbiddenTableProResponse) => void): Promise<DescribeForbiddenTableProResponse>;
    /**
     * 列举用户角色信息
     */
    DescribeUserRoles(req: DescribeUserRolesRequest, cb?: (error: string, rep: DescribeUserRolesResponse) => void): Promise<DescribeUserRolesResponse>;
    /**
     * 修改用户类型。只有管理员用户能够调用该接口进行操作
     */
    ModifyUserType(req: ModifyUserTypeRequest, cb?: (error: string, rep: ModifyUserTypeResponse) => void): Promise<ModifyUserTypeResponse>;
    /**
     * 获取工作组详细信息
     */
    DescribeWorkGroupInfo(req: DescribeWorkGroupInfoRequest, cb?: (error: string, rep: DescribeWorkGroupInfoResponse) => void): Promise<DescribeWorkGroupInfoResponse>;
    /**
     * 本接口（ListTaskJobLogName）用于获取spark-jar日志名称列表
     */
    ListTaskJobLogName(req: ListTaskJobLogNameRequest, cb?: (error: string, rep: ListTaskJobLogNameResponse) => void): Promise<ListTaskJobLogNameResponse>;
    /**
     * 本接口（DescribeNotebookSession）用于查询交互式 session详情信息
     */
    DescribeNotebookSession(req: DescribeNotebookSessionRequest, cb?: (error: string, rep: DescribeNotebookSessionResponse) => void): Promise<DescribeNotebookSessionResponse>;
    /**
     * 本接口（CreateNotebookSession）用于创建交互式session（notebook）
     */
    CreateNotebookSession(req: CreateNotebookSessionRequest, cb?: (error: string, rep: CreateNotebookSessionResponse) => void): Promise<CreateNotebookSessionResponse>;
    /**
     * 删除工作组
     */
    DeleteWorkGroup(req: DeleteWorkGroupRequest, cb?: (error: string, rep: DeleteWorkGroupResponse) => void): Promise<DeleteWorkGroupResponse>;
    /**
     * 元数据解锁
     */
    UnlockMetaData(req: UnlockMetaDataRequest, cb?: (error: string, rep: UnlockMetaDataResponse) => void): Promise<UnlockMetaDataResponse>;
    /**
     * 本接口根据名称用于获取数据引擎详细信息
     */
    DescribeDataEngine(req: DescribeDataEngineRequest, cb?: (error: string, rep: DescribeDataEngineResponse) => void): Promise<DescribeDataEngineResponse>;
    /**
     * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
     */
    CreateStoreLocation(req: CreateStoreLocationRequest, cb?: (error: string, rep: CreateStoreLocationResponse) => void): Promise<CreateStoreLocationResponse>;
    /**
     * 本接口（CreateNotebookSessionStatementSupportBatchSQL）用于创建交互式session并执行SQL任务
     */
    CreateNotebookSessionStatementSupportBatchSQL(req: CreateNotebookSessionStatementSupportBatchSQLRequest, cb?: (error: string, rep: CreateNotebookSessionStatementSupportBatchSQLResponse) => void): Promise<CreateNotebookSessionStatementSupportBatchSQLResponse>;
    /**
     * 切换主备集群
     */
    SwitchDataEngine(req: SwitchDataEngineRequest, cb?: (error: string, rep: SwitchDataEngineResponse) => void): Promise<SwitchDataEngineResponse>;
    /**
     * 本接口（DescribeDataEngines）用于查询DataEngines信息列表.
     */
    DescribeDataEngines(req: DescribeDataEnginesRequest, cb?: (error: string, rep: DescribeDataEnginesResponse) => void): Promise<DescribeDataEnginesResponse>;
    /**
     * DMS元数据获取分区
     */
    DescribeDMSPartitions(req: DescribeDMSPartitionsRequest, cb?: (error: string, rep: DescribeDMSPartitionsResponse) => void): Promise<DescribeDMSPartitionsResponse>;
    /**
     * 本接口（CancelTask），用于取消任务
     */
    CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse>;
    /**
     * 查询DLC Catalog授权列表
     */
    DescribeDLCCatalogAccess(req: DescribeDLCCatalogAccessRequest, cb?: (error: string, rep: DescribeDLCCatalogAccessResponse) => void): Promise<DescribeDLCCatalogAccessResponse>;
    /**
     * DMS元数据获取表列表
     */
    DescribeDMSTables(req: DescribeDMSTablesRequest, cb?: (error: string, rep: DescribeDMSTablesResponse) => void): Promise<DescribeDMSTablesResponse>;
    /**
     * 获取用户类型
     */
    DescribeUserType(req: DescribeUserTypeRequest, cb?: (error: string, rep: DescribeUserTypeResponse) => void): Promise<DescribeUserTypeResponse>;
    /**
     * 该接口（DescribleTasks）用于查询任务列表
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 该接口（DeleteScript）用于删除sql脚本。
     */
    DeleteScript(req: DeleteScriptRequest, cb?: (error: string, rep: DeleteScriptResponse) => void): Promise<DeleteScriptResponse>;
    /**
     * 切换引擎镜像版本
     */
    SwitchDataEngineImage(req: SwitchDataEngineImageRequest, cb?: (error: string, rep: SwitchDataEngineImageResponse) => void): Promise<SwitchDataEngineImageResponse>;
    /**
     * 启动Spark作业
     */
    CreateSparkAppTask(req: CreateSparkAppTaskRequest, cb?: (error: string, rep: CreateSparkAppTaskResponse) => void): Promise<CreateSparkAppTaskResponse>;
    /**
     * 此接口（DescribeOtherCHDFSBindingList）用于查询其他产品元数据加速桶绑定列表
     */
    DescribeOtherCHDFSBindingList(req: DescribeOtherCHDFSBindingListRequest, cb?: (error: string, rep: DescribeOtherCHDFSBindingListResponse) => void): Promise<DescribeOtherCHDFSBindingListResponse>;
    /**
     * 查询托管存储指定目录的Summary
     */
    DescribeLakeFsDirSummary(req?: DescribeLakeFsDirSummaryRequest, cb?: (error: string, rep: DescribeLakeFsDirSummaryResponse) => void): Promise<DescribeLakeFsDirSummaryResponse>;
    /**
     * 本接口（DescribeDatabases）用于查询数据库列表。
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 本接口（DescribeNotebookSessions）用于查询交互式 session列表
     */
    DescribeNotebookSessions(req: DescribeNotebookSessionsRequest, cb?: (error: string, rep: DescribeNotebookSessionsResponse) => void): Promise<DescribeNotebookSessionsResponse>;
    /**
     * 本接口（RegisterThirdPartyAccessUser）查询开通第三方平台访问的用户信息
     */
    DescribeThirdPartyAccessUser(req?: DescribeThirdPartyAccessUserRequest, cb?: (error: string, rep: DescribeThirdPartyAccessUserResponse) => void): Promise<DescribeThirdPartyAccessUserResponse>;
    /**
     * 撤销DLC Catalog访问权限
     */
    RevokeDLCCatalogAccess(req: RevokeDLCCatalogAccessRequest, cb?: (error: string, rep: RevokeDLCCatalogAccessResponse) => void): Promise<RevokeDLCCatalogAccessResponse>;
    /**
     * 创建用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 本接口（DescribeTables）用于查询数据表列表。
     */
    DescribeTables(req: DescribeTablesRequest, cb?: (error: string, rep: DescribeTablesResponse) => void): Promise<DescribeTablesResponse>;
    /**
     * 本接口（ModifySparkAppBatch）用于批量修改Spark作业参数配置
     */
    ModifySparkAppBatch(req: ModifySparkAppBatchRequest, cb?: (error: string, rep: ModifySparkAppBatchResponse) => void): Promise<ModifySparkAppBatchResponse>;
    /**
     * DMS元数据更新分区
     */
    AlterDMSPartition(req: AlterDMSPartitionRequest, cb?: (error: string, rep: AlterDMSPartitionResponse) => void): Promise<AlterDMSPartitionResponse>;
    /**
     * 获取LakeFs上task执行结果访问信息
     */
    DescribeLakeFsTaskResult(req: DescribeLakeFsTaskResultRequest, cb?: (error: string, rep: DescribeLakeFsTaskResultResponse) => void): Promise<DescribeLakeFsTaskResultResponse>;
    /**
     * 添加数据优化资源
     */
    AddOptimizerEngines(req?: AddOptimizerEnginesRequest, cb?: (error: string, rep: AddOptimizerEnginesResponse) => void): Promise<AddOptimizerEnginesResponse>;
    /**
     * 此接口用于更新行过滤规则。注意只能更新过滤规则，不能更新规格对象catalog，database和table。
     */
    UpdateRowFilter(req: UpdateRowFilterRequest, cb?: (error: string, rep: UpdateRowFilterResponse) => void): Promise<UpdateRowFilterResponse>;
    /**
     * 查询sql查询界面高级设置
     */
    DescribeAdvancedStoreLocation(req?: DescribeAdvancedStoreLocationRequest, cb?: (error: string, rep: DescribeAdvancedStoreLocationResponse) => void): Promise<DescribeAdvancedStoreLocationResponse>;
    /**
     * 元数据锁
     */
    LockMetaData(req: LockMetaDataRequest, cb?: (error: string, rep: LockMetaDataResponse) => void): Promise<LockMetaDataResponse>;
    /**
     * 查询spark作业列表
     */
    DescribeSparkAppJobs(req: DescribeSparkAppJobsRequest, cb?: (error: string, rep: DescribeSparkAppJobsResponse) => void): Promise<DescribeSparkAppJobsResponse>;
    /**
     * 获取用户列表信息
     */
    DescribeUsers(req: DescribeUsersRequest, cb?: (error: string, rep: DescribeUsersResponse) => void): Promise<DescribeUsersResponse>;
    /**
     * 本接口（CreateTasks），用于批量创建并执行SQL任务
     */
    CreateTasks(req: CreateTasksRequest, cb?: (error: string, rep: CreateTasksResponse) => void): Promise<CreateTasksResponse>;
    /**
     * 该接口（DescribeScripts）用于查询SQL脚本列表
     */
    DescribeScripts(req: DescribeScriptsRequest, cb?: (error: string, rep: DescribeScriptsResponse) => void): Promise<DescribeScriptsResponse>;
    /**
     * 修改工作组信息
     */
    ModifyWorkGroup(req: ModifyWorkGroupRequest, cb?: (error: string, rep: ModifyWorkGroupResponse) => void): Promise<ModifyWorkGroupResponse>;
    /**
     * 本接口（DescribeTables）用于查询数据表名称列表
     */
    DescribeTablesName(req: DescribeTablesNameRequest, cb?: (error: string, rep: DescribeTablesNameResponse) => void): Promise<DescribeTablesNameResponse>;
    /**
     * 此接口（DeleteCHDFSBindingProduct）用于删除元数据加速桶和产品绑定关系
     */
    DeleteCHDFSBindingProduct(req: DeleteCHDFSBindingProductRequest, cb?: (error: string, rep: DeleteCHDFSBindingProductResponse) => void): Promise<DeleteCHDFSBindingProductResponse>;
    /**
     * 上报元数据心跳
     */
    ReportHeartbeatMetaData(req: ReportHeartbeatMetaDataRequest, cb?: (error: string, rep: ReportHeartbeatMetaDataResponse) => void): Promise<ReportHeartbeatMetaDataResponse>;
    /**
     * 分配原生表表属性
     */
    AssignMangedTableProperties(req: AssignMangedTablePropertiesRequest, cb?: (error: string, rep: AssignMangedTablePropertiesResponse) => void): Promise<AssignMangedTablePropertiesResponse>;
    /**
     * 查询可更新配置的引擎列表
     */
    DescribeUpdatableDataEngines(req: DescribeUpdatableDataEnginesRequest, cb?: (error: string, rep: DescribeUpdatableDataEnginesResponse) => void): Promise<DescribeUpdatableDataEnginesResponse>;
    /**
     * 创建托管存储内表（该接口已废弃）
     */
    CreateInternalTable(req: CreateInternalTableRequest, cb?: (error: string, rep: CreateInternalTableResponse) => void): Promise<CreateInternalTableResponse>;
    /**
     * 生成创建托管表语句
     */
    GenerateCreateMangedTableSql(req: GenerateCreateMangedTableSqlRequest, cb?: (error: string, rep: GenerateCreateMangedTableSqlResponse) => void): Promise<GenerateCreateMangedTableSqlResponse>;
    /**
     * 绑定鉴权策略到工作组
     */
    AttachWorkGroupPolicy(req: AttachWorkGroupPolicyRequest, cb?: (error: string, rep: AttachWorkGroupPolicyResponse) => void): Promise<AttachWorkGroupPolicyResponse>;
    /**
     * 查询引擎规格详情
     */
    DescribeDataEnginesScaleDetail(req: DescribeDataEnginesScaleDetailRequest, cb?: (error: string, rep: DescribeDataEnginesScaleDetailResponse) => void): Promise<DescribeDataEnginesScaleDetailResponse>;
    /**
     * 创建spark作业
     */
    CreateSparkApp(req: CreateSparkAppRequest, cb?: (error: string, rep: CreateSparkAppResponse) => void): Promise<CreateSparkAppResponse>;
    /**
     * 本接口（CreateDatabase）用于生成建库SQL语句。
     */
    CreateDatabase(req: CreateDatabaseRequest, cb?: (error: string, rep: CreateDatabaseResponse) => void): Promise<CreateDatabaseResponse>;
    /**
     * 回滚引擎镜像版本
     */
    RollbackDataEngineImage(req: RollbackDataEngineImageRequest, cb?: (error: string, rep: RollbackDataEngineImageResponse) => void): Promise<RollbackDataEngineImageResponse>;
    /**
     * 本接口（DescribeSubUserAccessPolicy）用于开通了第三方平台访问的用户，查询其子用户的访问策略
     */
    DescribeSubUserAccessPolicy(req?: DescribeSubUserAccessPolicyRequest, cb?: (error: string, rep: DescribeSubUserAccessPolicyResponse) => void): Promise<DescribeSubUserAccessPolicyResponse>;
    /**
     * 本接口（CreateSparkSessionBatchSQL）用于向Spark作业引擎提交Spark SQL批任务。
     */
    CreateSparkSessionBatchSQL(req: CreateSparkSessionBatchSQLRequest, cb?: (error: string, rep: CreateSparkSessionBatchSQLResponse) => void): Promise<CreateSparkSessionBatchSQLResponse>;
    /**
     * 本接口（DescribeNotebookSessionStatements）用于查询Session中执行的任务列表
     */
    DescribeNotebookSessionStatements(req: DescribeNotebookSessionStatementsRequest, cb?: (error: string, rep: DescribeNotebookSessionStatementsResponse) => void): Promise<DescribeNotebookSessionStatementsResponse>;
    /**
     * 授权访问DLC Catalog
     */
    GrantDLCCatalogAccess(req: GrantDLCCatalogAccessRequest, cb?: (error: string, rep: GrantDLCCatalogAccessResponse) => void): Promise<GrantDLCCatalogAccessResponse>;
    /**
     * 本接口用于控制挂起或启动数据引擎
     */
    SuspendResumeDataEngine(req: SuspendResumeDataEngineRequest, cb?: (error: string, rep: SuspendResumeDataEngineResponse) => void): Promise<SuspendResumeDataEngineResponse>;
    /**
     * DMS元数据创建库
     */
    CreateDMSDatabase(req: CreateDMSDatabaseRequest, cb?: (error: string, rep: CreateDMSDatabaseResponse) => void): Promise<CreateDMSDatabaseResponse>;
    /**
     * 绑定鉴权策略到用户
     */
    AttachUserPolicy(req: AttachUserPolicyRequest, cb?: (error: string, rep: AttachUserPolicyResponse) => void): Promise<AttachUserPolicyResponse>;
    /**
     * 修改数据治理事件阈值
     */
    ModifyGovernEventRule(req?: ModifyGovernEventRuleRequest, cb?: (error: string, rep: ModifyGovernEventRuleResponse) => void): Promise<ModifyGovernEventRuleResponse>;
    /**
     * 创建查询结果下载任务
     */
    CreateResultDownload(req: CreateResultDownloadRequest, cb?: (error: string, rep: CreateResultDownloadResponse) => void): Promise<CreateResultDownloadResponse>;
    /**
     * 修改sql查询界面高级设置。
     */
    ModifyAdvancedStoreLocation(req: ModifyAdvancedStoreLocationRequest, cb?: (error: string, rep: ModifyAdvancedStoreLocationResponse) => void): Promise<ModifyAdvancedStoreLocationResponse>;
    /**
     * 本接口（DescribeNotebookSessionStatementSqlResult）用于获取statement运行结果。
     */
    DescribeNotebookSessionStatementSqlResult(req: DescribeNotebookSessionStatementSqlResultRequest, cb?: (error: string, rep: DescribeNotebookSessionStatementSqlResultResponse) => void): Promise<DescribeNotebookSessionStatementSqlResultResponse>;
    /**
     * 本接口（CreateNotebookSessionStatement）用于在session中执行代码片段
     */
    CreateNotebookSessionStatement(req: CreateNotebookSessionStatementRequest, cb?: (error: string, rep: CreateNotebookSessionStatementResponse) => void): Promise<CreateNotebookSessionStatementResponse>;
    /**
     * DMS元数据更新库
     */
    AlterDMSDatabase(req: AlterDMSDatabaseRequest, cb?: (error: string, rep: AlterDMSDatabaseResponse) => void): Promise<AlterDMSDatabaseResponse>;
    /**
     * 本接口（DescribeSparkSessionBatchSQL）用于查询Spark SQL批任务运行状态
     */
    DescribeSparkSessionBatchSQL(req: DescribeSparkSessionBatchSQLRequest, cb?: (error: string, rep: DescribeSparkSessionBatchSQLResponse) => void): Promise<DescribeSparkSessionBatchSQLResponse>;
    /**
     * DMS元数据删除库
     */
    DropDMSDatabase(req: DropDMSDatabaseRequest, cb?: (error: string, rep: DropDMSDatabaseResponse) => void): Promise<DropDMSDatabaseResponse>;
    /**
     * DMS元数据新增分区
     */
    AddDMSPartitions(req: AddDMSPartitionsRequest, cb?: (error: string, rep: AddDMSPartitionsResponse) => void): Promise<AddDMSPartitionsResponse>;
    /**
     * 修改用户引擎自定义配置
     */
    UpdateUserDataEngineConfig(req: UpdateUserDataEngineConfigRequest, cb?: (error: string, rep: UpdateUserDataEngineConfigResponse) => void): Promise<UpdateUserDataEngineConfigResponse>;
    /**
     * 本接口（CancelNotebookSessionStatementBatch）用于批量取消Session 中执行的任务
     */
    CancelNotebookSessionStatementBatch(req: CancelNotebookSessionStatementBatchRequest, cb?: (error: string, rep: CancelNotebookSessionStatementBatchResponse) => void): Promise<CancelNotebookSessionStatementBatchResponse>;
    /**
     * 本接口（CheckDataEngineImageCanBeUpgrade）用于查看集群镜像是否能够升级。
     */
    CheckDataEngineImageCanBeUpgrade(req: CheckDataEngineImageCanBeUpgradeRequest, cb?: (error: string, rep: CheckDataEngineImageCanBeUpgradeResponse) => void): Promise<CheckDataEngineImageCanBeUpgradeResponse>;
    /**
     * 删除spark作业
     */
    DeleteSparkApp(req: DeleteSparkAppRequest, cb?: (error: string, rep: DeleteSparkAppResponse) => void): Promise<DeleteSparkAppResponse>;
    /**
     * 本接口（DescribeNotebookSessionLog）用于查询交互式 session日志
     */
    DescribeNotebookSessionLog(req: DescribeNotebookSessionLogRequest, cb?: (error: string, rep: DescribeNotebookSessionLogResponse) => void): Promise<DescribeNotebookSessionLogResponse>;
    /**
     * 该接口（DescribeTasksCostInfo）用于查询任务消耗
     */
    DescribeTasksCostInfo(req: DescribeTasksCostInfoRequest, cb?: (error: string, rep: DescribeTasksCostInfoResponse) => void): Promise<DescribeTasksCostInfoResponse>;
    /**
     * 查询结果下载任务
     */
    DescribeResultDownload(req: DescribeResultDownloadRequest, cb?: (error: string, rep: DescribeResultDownloadResponse) => void): Promise<DescribeResultDownloadResponse>;
    /**
     * DMS元数据获取表
     */
    DescribeDMSTable(req: DescribeDMSTableRequest, cb?: (error: string, rep: DescribeDMSTableResponse) => void): Promise<DescribeDMSTableResponse>;
    /**
     * 该接口（QueryTaskCostDetail）用于查询任务消耗明细
     */
    QueryTaskCostDetail(req: QueryTaskCostDetailRequest, cb?: (error: string, rep: QueryTaskCostDetailResponse) => void): Promise<QueryTaskCostDetailResponse>;
    /**
     * DMS元数据删除分区
     */
    DropDMSPartitions(req: DropDMSPartitionsRequest, cb?: (error: string, rep: DropDMSPartitionsResponse) => void): Promise<DropDMSPartitionsResponse>;
    /**
     * 创建工作组
     */
    CreateWorkGroup(req: CreateWorkGroupRequest, cb?: (error: string, rep: CreateWorkGroupResponse) => void): Promise<CreateWorkGroupResponse>;
    /**
     * 此接口（CreateCHDFSBindingProduct）用于创建元数据加速桶和产品绑定关系
     */
    CreateCHDFSBindingProduct(req: CreateCHDFSBindingProductRequest, cb?: (error: string, rep: CreateCHDFSBindingProductResponse) => void): Promise<CreateCHDFSBindingProductResponse>;
    /**
     * 本接口（QueryInternalTableWarehouse）用于获取原生表warehouse路径
     */
    QueryInternalTableWarehouse(req: QueryInternalTableWarehouseRequest, cb?: (error: string, rep: QueryInternalTableWarehouseResponse) => void): Promise<QueryInternalTableWarehouseResponse>;
    /**
     * 本接口（DescribeDatasourceConnection）用于查询数据源信息
     */
    DescribeDatasourceConnection(req: DescribeDatasourceConnectionRequest, cb?: (error: string, rep: DescribeDatasourceConnectionResponse) => void): Promise<DescribeDatasourceConnectionResponse>;
    /**
     * 本接口（CheckDataEngineImageCanBeRollback）用于查看集群是否能回滚。
     */
    CheckDataEngineImageCanBeRollback(req: CheckDataEngineImageCanBeRollbackRequest, cb?: (error: string, rep: CheckDataEngineImageCanBeRollbackResponse) => void): Promise<CheckDataEngineImageCanBeRollbackResponse>;
    /**
     * 本接口（CancelSparkSessionBatchSQL）用于取消Spark SQL批任务。
     */
    CancelSparkSessionBatchSQL(req: CancelSparkSessionBatchSQLRequest, cb?: (error: string, rep: CancelSparkSessionBatchSQLResponse) => void): Promise<CancelSparkSessionBatchSQLResponse>;
    /**
     * 修改用户信息
     */
    ModifyUser(req: ModifyUserRequest, cb?: (error: string, rep: ModifyUserResponse) => void): Promise<ModifyUserResponse>;
    /**
     * 本接口（DescribeSparkSessionBatchSqlLog）用于查询Spark SQL批任务日志
     */
    DescribeSparkSessionBatchSqlLog(req: DescribeSparkSessionBatchSqlLogRequest, cb?: (error: string, rep: DescribeSparkSessionBatchSqlLogResponse) => void): Promise<DescribeSparkSessionBatchSqlLogResponse>;
    /**
     * 本接口（DescribeTable），用于查询单个表的详细信息。
     */
    DescribeTable(req: DescribeTableRequest, cb?: (error: string, rep: DescribeTableResponse) => void): Promise<DescribeTableResponse>;
    /**
     * GetOptimizerPolicy
     */
    GetOptimizerPolicy(req: GetOptimizerPolicyRequest, cb?: (error: string, rep: GetOptimizerPolicyResponse) => void): Promise<GetOptimizerPolicyResponse>;
    /**
     * 获取用户详细信息
     */
    DescribeUserInfo(req: DescribeUserInfoRequest, cb?: (error: string, rep: DescribeUserInfoResponse) => void): Promise<DescribeUserInfoResponse>;
    /**
     * 本接口用于更新数据引擎配置
     */
    UpdateDataEngine(req: UpdateDataEngineRequest, cb?: (error: string, rep: UpdateDataEngineResponse) => void): Promise<UpdateDataEngineResponse>;
    /**
     * 本接口（CheckDataEngineConfigPairsValidity）用于检查引擎用户自定义参数的有效性
     */
    CheckDataEngineConfigPairsValidity(req: CheckDataEngineConfigPairsValidityRequest, cb?: (error: string, rep: CheckDataEngineConfigPairsValidityResponse) => void): Promise<CheckDataEngineConfigPairsValidityResponse>;
    /**
     * 删除数据引擎
     */
    DeleteDataEngine(req: DeleteDataEngineRequest, cb?: (error: string, rep: DeleteDataEngineResponse) => void): Promise<DeleteDataEngineResponse>;
    /**
     * 删除用户
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 删除表
     */
    DeleteTable(req: DeleteTableRequest, cb?: (error: string, rep: DeleteTableResponse) => void): Promise<DeleteTableResponse>;
    /**
     * 本接口根据引擎ID查询数据引擎资源使用情况
     */
    DescribeEngineUsageInfo(req: DescribeEngineUsageInfoRequest, cb?: (error: string, rep: DescribeEngineUsageInfoResponse) => void): Promise<DescribeEngineUsageInfoResponse>;
    /**
     * 查看任务概览页
     */
    DescribeTasksOverview(req: DescribeTasksOverviewRequest, cb?: (error: string, rep: DescribeTasksOverviewResponse) => void): Promise<DescribeTasksOverviewResponse>;
    /**
     * 用户某种操作，触发引擎配置修改
     */
    UpdateDataEngineConfig(req: UpdateDataEngineConfigRequest, cb?: (error: string, rep: UpdateDataEngineConfigResponse) => void): Promise<UpdateDataEngineConfigResponse>;
    /**
     * 按顺序创建任务（已经废弃，后期不再维护，请使用接口CreateTasks）
     */
    CreateTasksInOrder(req: CreateTasksInOrderRequest, cb?: (error: string, rep: CreateTasksInOrderResponse) => void): Promise<CreateTasksInOrderResponse>;
    /**
     * 本接口（DescribeDataEngineImageVersions）用于获取独享集群大版本镜像列表。
     */
    DescribeDataEngineImageVersions(req: DescribeDataEngineImageVersionsRequest, cb?: (error: string, rep: DescribeDataEngineImageVersionsResponse) => void): Promise<DescribeDataEngineImageVersionsResponse>;
    /**
     * DMS元数据创建表
     */
    CreateDMSTable(req: CreateDMSTableRequest, cb?: (error: string, rep: CreateDMSTableResponse) => void): Promise<CreateDMSTableResponse>;
    /**
     * 本接口（DescribeSparkSessionBatchSQLCost）用于查询Spark SQL批任务消耗
     */
    DescribeSparkSessionBatchSQLCost(req: DescribeSparkSessionBatchSQLCostRequest, cb?: (error: string, rep: DescribeSparkSessionBatchSQLCostResponse) => void): Promise<DescribeSparkSessionBatchSQLCostResponse>;
    /**
     * 升级引擎镜像
     */
    UpgradeDataEngineImage(req: UpgradeDataEngineImageRequest, cb?: (error: string, rep: UpgradeDataEngineImageResponse) => void): Promise<UpgradeDataEngineImageResponse>;
    /**
     * 解绑用户鉴权策略
     */
    DetachUserPolicy(req: DetachUserPolicyRequest, cb?: (error: string, rep: DetachUserPolicyResponse) => void): Promise<DetachUserPolicyResponse>;
    /**
     * 查询数据引擎事件
     */
    DescribeDataEngineEvents(req: DescribeDataEngineEventsRequest, cb?: (error: string, rep: DescribeDataEngineEventsResponse) => void): Promise<DescribeDataEngineEventsResponse>;
    /**
     * 解绑工作组鉴权策略
     */
    DetachWorkGroupPolicy(req: DetachWorkGroupPolicyRequest, cb?: (error: string, rep: DetachWorkGroupPolicyResponse) => void): Promise<DetachWorkGroupPolicyResponse>;
    /**
     * DMS元数据删除表
     */
    DropDMSTable(req: DropDMSTableRequest, cb?: (error: string, rep: DropDMSTableResponse) => void): Promise<DropDMSTableResponse>;
    /**
     * 获取任务结果查询
     */
    QueryResult(req: QueryResultRequest, cb?: (error: string, rep: QueryResultResponse) => void): Promise<QueryResultResponse>;
    /**
     * 元数据锁检查
     */
    CheckLockMetaData(req: CheckLockMetaDataRequest, cb?: (error: string, rep: CheckLockMetaDataResponse) => void): Promise<CheckLockMetaDataResponse>;
    /**
     * 该接口（CreateImportTask）用于创建导入任务
     */
    CreateImportTask(req: CreateImportTaskRequest, cb?: (error: string, rep: CreateImportTaskResponse) => void): Promise<CreateImportTaskResponse>;
    /**
     * 本接口（CreateTable）用于生成建表SQL。
     */
    CreateTable(req: CreateTableRequest, cb?: (error: string, rep: CreateTableResponse) => void): Promise<CreateTableResponse>;
    /**
     * 查询任务结果，仅支持30天以内的任务查询结果，且返回数据大小超过近50M会进行截断。
     */
    DescribeTaskResult(req: DescribeTaskResultRequest, cb?: (error: string, rep: DescribeTaskResultResponse) => void): Promise<DescribeTaskResultResponse>;
    /**
     * 该接口（CreateExportTask）用于创建导出任务
     */
    CreateExportTask(req: CreateExportTaskRequest, cb?: (error: string, rep: CreateExportTaskResponse) => void): Promise<CreateExportTaskResponse>;
    /**
     * 本接口（RegisterThirdPartyAccessUser）用于开通第三方平台访问
     */
    RegisterThirdPartyAccessUser(req?: RegisterThirdPartyAccessUserRequest, cb?: (error: string, rep: RegisterThirdPartyAccessUserResponse) => void): Promise<RegisterThirdPartyAccessUserResponse>;
    /**
     * 该接口用于洞察分析列表
     */
    DescribeTasksAnalysis(req: DescribeTasksAnalysisRequest, cb?: (error: string, rep: DescribeTasksAnalysisResponse) => void): Promise<DescribeTasksAnalysisResponse>;
    /**
     * 从工作组中删除用户
     */
    DeleteUsersFromWorkGroup(req: DeleteUsersFromWorkGroupRequest, cb?: (error: string, rep: DeleteUsersFromWorkGroupResponse) => void): Promise<DeleteUsersFromWorkGroupResponse>;
    /**
     * 为用户创建数据引擎
     */
    CreateDataEngine(req: CreateDataEngineRequest, cb?: (error: string, rep: CreateDataEngineResponse) => void): Promise<CreateDataEngineResponse>;
    /**
     * 解绑用户上的用户组
     */
    UnbindWorkGroupsFromUser(req: UnbindWorkGroupsFromUserRequest, cb?: (error: string, rep: UnbindWorkGroupsFromUserResponse) => void): Promise<UnbindWorkGroupsFromUserResponse>;
    /**
     * 获取工作组列表
     */
    DescribeWorkGroups(req: DescribeWorkGroupsRequest, cb?: (error: string, rep: DescribeWorkGroupsResponse) => void): Promise<DescribeWorkGroupsResponse>;
    /**
     * 该接口（CreateScript）用于创建sql脚本。
     */
    CreateScript(req: CreateScriptRequest, cb?: (error: string, rep: CreateScriptResponse) => void): Promise<CreateScriptResponse>;
    /**
     * 重启引擎
     */
    RestartDataEngine(req: RestartDataEngineRequest, cb?: (error: string, rep: RestartDataEngineResponse) => void): Promise<RestartDataEngineResponse>;
    /**
     * 本接口（DescribeNotebookSessionStatement）用于查询session 中执行任务的详情
     */
    DescribeNotebookSessionStatement(req: DescribeNotebookSessionStatementRequest, cb?: (error: string, rep: DescribeNotebookSessionStatementResponse) => void): Promise<DescribeNotebookSessionStatementResponse>;
    /**
     * 续费数据引擎
     */
    RenewDataEngine(req: RenewDataEngineRequest, cb?: (error: string, rep: RenewDataEngineResponse) => void): Promise<RenewDataEngineResponse>;
    /**
     * 更新spark作业
     */
    ModifySparkApp(req: ModifySparkAppRequest, cb?: (error: string, rep: ModifySparkAppResponse) => void): Promise<ModifySparkAppResponse>;
    /**
     * 本接口（DescribeViews）用于查询数据视图列表。
     */
    DescribeViews(req: DescribeViewsRequest, cb?: (error: string, rep: DescribeViewsResponse) => void): Promise<DescribeViewsResponse>;
    /**
     * 本接口（RegisterThirdPartyAccessUser）用于移除第三方平台访问
     */
    DeleteThirdPartyAccessUser(req?: DeleteThirdPartyAccessUserRequest, cb?: (error: string, rep: DeleteThirdPartyAccessUserResponse) => void): Promise<DeleteThirdPartyAccessUserResponse>;
    /**
     * DMS元数据获取库
     */
    DescribeDMSDatabase(req: DescribeDMSDatabaseRequest, cb?: (error: string, rep: DescribeDMSDatabaseResponse) => void): Promise<DescribeDMSDatabaseResponse>;
    /**
     * 绑定工作组到用户
     */
    BindWorkGroupsToUser(req: BindWorkGroupsToUserRequest, cb?: (error: string, rep: BindWorkGroupsToUserResponse) => void): Promise<BindWorkGroupsToUserResponse>;
    /**
     * 查询用户自定义引擎参数
     */
    DescribeUserDataEngineConfig(req: DescribeUserDataEngineConfigRequest, cb?: (error: string, rep: DescribeUserDataEngineConfigResponse) => void): Promise<DescribeUserDataEngineConfigResponse>;
    /**
     * 本接口（DescribeTaskLog）用于获取spark 作业任务日志详情
     */
    DescribeTaskLog(req: DescribeTaskLogRequest, cb?: (error: string, rep: DescribeTaskLogResponse) => void): Promise<DescribeTaskLogResponse>;
    /**
     * 修改引擎描述信息
     */
    ModifyDataEngineDescription(req: ModifyDataEngineDescriptionRequest, cb?: (error: string, rep: ModifyDataEngineDescriptionResponse) => void): Promise<ModifyDataEngineDescriptionResponse>;
    /**
     * 本接口（DeleteNotebookSession）用于删除交互式session（notebook）
     */
    DeleteNotebookSession(req: DeleteNotebookSessionRequest, cb?: (error: string, rep: DeleteNotebookSessionResponse) => void): Promise<DeleteNotebookSessionResponse>;
    /**
     * 本接口（CancelNotebookSessionStatement）用于取消session中执行的任务
     */
    CancelNotebookSessionStatement(req: CancelNotebookSessionStatementRequest, cb?: (error: string, rep: CancelNotebookSessionStatementResponse) => void): Promise<CancelNotebookSessionStatementResponse>;
    /**
     * 查询计算结果存储位置。
     */
    DescribeStoreLocation(req?: DescribeStoreLocationRequest, cb?: (error: string, rep: DescribeStoreLocationResponse) => void): Promise<DescribeStoreLocationResponse>;
    /**
     * 查询spark作业信息
     */
    DescribeSparkAppJob(req: DescribeSparkAppJobRequest, cb?: (error: string, rep: DescribeSparkAppJobResponse) => void): Promise<DescribeSparkAppJobResponse>;
    /**
     * 查询Spark作业的运行任务列表
     */
    DescribeSparkAppTasks(req: DescribeSparkAppTasksRequest, cb?: (error: string, rep: DescribeSparkAppTasksResponse) => void): Promise<DescribeSparkAppTasksResponse>;
    /**
     * 本接口（DescribeDataEnginePythonSparkImages）用于获取PYSPARK镜像列表
     */
    DescribeDataEnginePythonSparkImages(req: DescribeDataEnginePythonSparkImagesRequest, cb?: (error: string, rep: DescribeDataEnginePythonSparkImagesResponse) => void): Promise<DescribeDataEnginePythonSparkImagesResponse>;
    /**
     * 本接口（ListTaskJobLogDetail）用于获取spark 作业任务日志详情
     */
    ListTaskJobLogDetail(req: ListTaskJobLogDetailRequest, cb?: (error: string, rep: ListTaskJobLogDetailResponse) => void): Promise<ListTaskJobLogDetailResponse>;
    /**
     * 查询用户的托管存储信息
     */
    DescribeLakeFsInfo(req?: DescribeLakeFsInfoRequest, cb?: (error: string, rep: DescribeLakeFsInfoResponse) => void): Promise<DescribeLakeFsInfoResponse>;
}

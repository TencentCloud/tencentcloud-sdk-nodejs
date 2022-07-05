import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeTaskResultResponse, AlterDMSTableResponse, DescribeDatabasesRequest, DeleteUserRequest, ListTaskJobLogDetailResponse, DescribeSparkAppJobRequest, CreateDMSDatabaseResponse, CreateStoreLocationResponse, ReportHeartbeatMetaDataRequest, DescribeDMSDatabaseResponse, DropDMSDatabaseRequest, CreateScriptResponse, CreateTasksInOrderResponse, DescribeTablesResponse, DeleteSparkAppRequest, ModifyUserResponse, DeleteScriptResponse, DetachUserPolicyRequest, DescribeSparkAppTasksResponse, DescribeTasksResponse, DescribeDMSTableResponse, DropDMSPartitionsRequest, CreateTasksInOrderRequest, AddDMSPartitionsResponse, DetachWorkGroupPolicyResponse, ModifySparkAppRequest, CreateDatabaseRequest, DescribeDMSTablesResponse, AlterDMSPartitionRequest, CheckLockMetaDataRequest, CreateDatabaseResponse, DescribeTasksRequest, CreateSparkAppTaskRequest, DeleteWorkGroupRequest, UnlockMetaDataRequest, AttachUserPolicyRequest, ListTaskJobLogDetailRequest, AttachWorkGroupPolicyRequest, CreateUserResponse, DeleteUserResponse, CreateStoreLocationRequest, DescribeDMSPartitionsRequest, DescribeSparkAppJobsRequest, CreateDMSTableResponse, CreateTaskRequest, ModifySparkAppResponse, CreateTableRequest, DescribeWorkGroupsResponse, CreateImportTaskRequest, DescribeScriptsRequest, DescribeSparkAppJobResponse, DeleteUsersFromWorkGroupResponse, AddUsersToWorkGroupRequest, DescribeStoreLocationRequest, AddUsersToWorkGroupResponse, CreateExportTaskRequest, ReportHeartbeatMetaDataResponse, CreateDMSTableRequest, DropDMSTableRequest, AttachWorkGroupPolicyResponse, ModifyWorkGroupResponse, DescribeDMSTablesRequest, ModifyUserRequest, CreateSparkAppTaskResponse, CancelTaskRequest, BindWorkGroupsToUserResponse, DescribeStoreLocationResponse, DeleteScriptRequest, AddDMSPartitionsRequest, AlterDMSTableRequest, CreateImportTaskResponse, CreateTableResponse, CreateScriptRequest, BindWorkGroupsToUserRequest, DescribeTaskResultRequest, DescribeUsersResponse, DescribeScriptsResponse, CreateUserRequest, ModifyWorkGroupRequest, CancelTaskResponse, UnlockMetaDataResponse, DeleteWorkGroupResponse, DropDMSTableResponse, CreateWorkGroupResponse, DescribeTablesRequest, DescribeDatabasesResponse, DescribeDMSPartitionsResponse, CreateExportTaskResponse, UnbindWorkGroupsFromUserRequest, DescribeDMSDatabaseRequest, DescribeTableRequest, DropDMSDatabaseResponse, DescribeUsersRequest, DeleteUsersFromWorkGroupRequest, CreateSparkAppResponse, CreateTaskResponse, DeleteSparkAppResponse, AlterDMSPartitionResponse, CreateTasksRequest, DescribeTableResponse, DescribeSparkAppJobsResponse, DescribeViewsRequest, LockMetaDataRequest, DetachUserPolicyResponse, DescribeWorkGroupsRequest, CreateTasksResponse, CreateSparkAppRequest, UnbindWorkGroupsFromUserResponse, DropDMSPartitionsResponse, AlterDMSDatabaseResponse, CreateWorkGroupRequest, DescribeSparkAppTasksRequest, LockMetaDataResponse, CheckLockMetaDataResponse, AlterDMSDatabaseRequest, AttachUserPolicyResponse, CreateDMSDatabaseRequest, DetachWorkGroupPolicyRequest, DescribeDMSTableRequest, DescribeViewsResponse } from "./dlc_models";
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
     * DMS元数据删除库
     */
    DropDMSDatabase(req: DropDMSDatabaseRequest, cb?: (error: string, rep: DropDMSDatabaseResponse) => void): Promise<DropDMSDatabaseResponse>;
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
     * 该接口（CreateExportTask）用于创建导出任务
     */
    CreateExportTask(req: CreateExportTaskRequest, cb?: (error: string, rep: CreateExportTaskResponse) => void): Promise<CreateExportTaskResponse>;
    /**
     * 删除spark应用
     */
    DeleteSparkApp(req: DeleteSparkAppRequest, cb?: (error: string, rep: DeleteSparkAppResponse) => void): Promise<DeleteSparkAppResponse>;
    /**
     * 获取用户列表信息
     */
    DescribeUsers(req: DescribeUsersRequest, cb?: (error: string, rep: DescribeUsersResponse) => void): Promise<DescribeUsersResponse>;
    /**
     * 本接口（CreateTasks），用于批量创建任务
     */
    CreateTasks(req: CreateTasksRequest, cb?: (error: string, rep: CreateTasksResponse) => void): Promise<CreateTasksResponse>;
    /**
     * 该接口（DescribeScripts）用于获取所有SQL查询。
     */
    DescribeScripts(req: DescribeScriptsRequest, cb?: (error: string, rep: DescribeScriptsResponse) => void): Promise<DescribeScriptsResponse>;
    /**
     * 删除工作组
     */
    DeleteWorkGroup(req: DeleteWorkGroupRequest, cb?: (error: string, rep: DeleteWorkGroupResponse) => void): Promise<DeleteWorkGroupResponse>;
    /**
     * 元数据解锁
     */
    UnlockMetaData(req: UnlockMetaDataRequest, cb?: (error: string, rep: UnlockMetaDataResponse) => void): Promise<UnlockMetaDataResponse>;
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
     * 本接口（ListTaskJobLogDetail）用于获取spark-jar日志列表
     */
    ListTaskJobLogDetail(req: ListTaskJobLogDetailRequest, cb?: (error: string, rep: ListTaskJobLogDetailResponse) => void): Promise<ListTaskJobLogDetailResponse>;
    /**
     * DMS元数据更新库
     */
    AlterDMSDatabase(req: AlterDMSDatabaseRequest, cb?: (error: string, rep: AlterDMSDatabaseResponse) => void): Promise<AlterDMSDatabaseResponse>;
    /**
     * 解绑用户上的用户组
     */
    UnbindWorkGroupsFromUser(req: UnbindWorkGroupsFromUserRequest, cb?: (error: string, rep: UnbindWorkGroupsFromUserResponse) => void): Promise<UnbindWorkGroupsFromUserResponse>;
    /**
     * 绑定鉴权策略到工作组
     */
    AttachWorkGroupPolicy(req: AttachWorkGroupPolicyRequest, cb?: (error: string, rep: AttachWorkGroupPolicyResponse) => void): Promise<AttachWorkGroupPolicyResponse>;
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
     * 获取工作组列表
     */
    DescribeWorkGroups(req: DescribeWorkGroupsRequest, cb?: (error: string, rep: DescribeWorkGroupsResponse) => void): Promise<DescribeWorkGroupsResponse>;
    /**
     * 修改工作组信息
     */
    ModifyWorkGroup(req: ModifyWorkGroupRequest, cb?: (error: string, rep: ModifyWorkGroupResponse) => void): Promise<ModifyWorkGroupResponse>;
    /**
     * 更新spark应用
     */
    ModifySparkApp(req: ModifySparkAppRequest, cb?: (error: string, rep: ModifySparkAppResponse) => void): Promise<ModifySparkAppResponse>;
    /**
     * 本接口（DescribeViews）用于查询数据视图列表。
     */
    DescribeViews(req: DescribeViewsRequest, cb?: (error: string, rep: DescribeViewsResponse) => void): Promise<DescribeViewsResponse>;
    /**
     * 本接口（DescribeTable），用于查询单个表的详细信息。
     */
    DescribeTable(req: DescribeTableRequest, cb?: (error: string, rep: DescribeTableResponse) => void): Promise<DescribeTableResponse>;
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
     * 查询具体的spark应用
     */
    DescribeSparkAppJob(req: DescribeSparkAppJobRequest, cb?: (error: string, rep: DescribeSparkAppJobResponse) => void): Promise<DescribeSparkAppJobResponse>;
    /**
     * 查询spark应用的运行任务实例列表
     */
    DescribeSparkAppTasks(req: DescribeSparkAppTasksRequest, cb?: (error: string, rep: DescribeSparkAppTasksResponse) => void): Promise<DescribeSparkAppTasksResponse>;
    /**
     * 获取spark应用列表
     */
    DescribeSparkAppJobs(req: DescribeSparkAppJobsRequest, cb?: (error: string, rep: DescribeSparkAppJobsResponse) => void): Promise<DescribeSparkAppJobsResponse>;
    /**
     * 创建用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 解绑用户鉴权策略
     */
    DetachUserPolicy(req: DetachUserPolicyRequest, cb?: (error: string, rep: DetachUserPolicyResponse) => void): Promise<DetachUserPolicyResponse>;
    /**
     * 本接口（DescribeTables）用于查询数据表列表。
     */
    DescribeTables(req: DescribeTablesRequest, cb?: (error: string, rep: DescribeTablesResponse) => void): Promise<DescribeTablesResponse>;
}

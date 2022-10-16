import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SubmitTaskResponse, ModifyFolderRequest, DeleteFolderResponse, RunTaskRequest, MakeUpTasksNewResponse, DescribeTaskDetailResponse, DescribeDependTasksNewRequest, DescribeInstanceLogsRequest, ModifyTaskScriptRequest, CreateDataSourceRequest, DeleteWorkflowNewResponse, DescribeInstanceLogsResponse, MakeUpWorkflowNewResponse, BatchDeleteTasksNewResponse, ModifyTaskLinksResponse, DescribeDatasourceResponse, KillInstancesResponse, SetTaskAlarmNewRequest, ModifyTaskScriptResponse, SubmitWorkflowResponse, SubmitTaskRequest, DescribeProjectResponse, DescribeFunctionTypesRequest, BatchDeleteTasksNewRequest, DescribeFolderWorkflowListResponse, ModifyFolderResponse, CreateFolderRequest, DeleteCustomFunctionRequest, DeleteFolderRequest, DescribeTaskScriptRequest, DescribeFunctionKindsRequest, DescribeFunctionKindsResponse, FreezeTasksByMultiWorkflowResponse, SaveCustomFunctionResponse, DescribeDataSourceListRequest, CreateWorkflowRequest, CreateTaskRequest, KillInstancesRequest, ModifyTaskInfoResponse, RegisterEventListenerResponse, CreateFolderResponse, ModifyWorkflowInfoRequest, DescribeFolderWorkflowListRequest, ModifyDataSourceResponse, BatchStopTasksNewRequest, TriggerEventRequest, DescribeFunctionTypesResponse, SubmitWorkflowRequest, RerunInstancesResponse, SaveCustomFunctionRequest, ForceSucInstancesRequest, ModifyWorkflowScheduleRequest, RegisterEventRequest, BatchModifyOwnersNewResponse, DescribeDataSourceWithoutInfoRequest, DescribeDatasourceRequest, DeleteWorkflowNewRequest, FreezeTasksByMultiWorkflowRequest, MakeUpWorkflowNewRequest, BatchStopTasksNewResponse, TriggerEventResponse, DescribeTaskInstancesRequest, DescribeTasksByPageResponse, CreateDataSourceResponse, DescribeDataSourceListResponse, DescribeDataSourceWithoutInfoResponse, DescribeFolderListResponse, DescribeProjectRequest, FreezeTasksRequest, DeleteCustomFunctionResponse, DescribeFolderListRequest, DescribeTaskScriptResponse, RunTaskResponse, DescribeDependTasksNewResponse, SubmitCustomFunctionResponse, DescribeTaskInstancesResponse, BatchModifyOwnersNewRequest, FreezeTasksResponse, CreateTaskResponse, ModifyDataSourceRequest, CreateCustomFunctionResponse, ModifyTaskInfoRequest, DescribeTaskDetailRequest, SetTaskAlarmNewResponse, CreateWorkflowResponse, CreateCustomFunctionRequest, DeleteDataSourcesResponse, RegisterEventListenerRequest, ModifyTaskLinksRequest, ModifyWorkflowScheduleResponse, DeleteDataSourcesRequest, DescribeRelatedInstancesRequest, DescribeOrganizationalFunctionsRequest, ModifyWorkflowInfoResponse, DescribeRelatedInstancesResponse, RerunInstancesRequest, MakeUpTasksNewRequest, RegisterEventResponse, ForceSucInstancesResponse, DescribeOrganizationalFunctionsResponse, DescribeTasksByPageRequest, SubmitCustomFunctionRequest } from "./wedata_models";
/**
 * wedata client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建任务
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     */
    SetTaskAlarmNew(req: SetTaskAlarmNewRequest, cb?: (error: string, rep: SetTaskAlarmNewResponse) => void): Promise<SetTaskAlarmNewResponse>;
    /**
     * 查询任务实例列表
     */
    DescribeTaskInstances(req: DescribeTaskInstancesRequest, cb?: (error: string, rep: DescribeTaskInstancesResponse) => void): Promise<DescribeTaskInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除数据源
     */
    DeleteDataSources(req: DeleteDataSourcesRequest, cb?: (error: string, rep: DeleteDataSourcesResponse) => void): Promise<DeleteDataSourcesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
    ModifyTaskScript(req: ModifyTaskScriptRequest, cb?: (error: string, rep: ModifyTaskScriptResponse) => void): Promise<ModifyTaskScriptResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
    SubmitTask(req: SubmitTaskRequest, cb?: (error: string, rep: SubmitTaskResponse) => void): Promise<SubmitTaskResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量冻结任务
     */
    FreezeTasks(req: FreezeTasksRequest, cb?: (error: string, rep: FreezeTasksResponse) => void): Promise<FreezeTasksResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
工作流下所有任务的补录
     */
    MakeUpWorkflowNew(req: MakeUpWorkflowNewRequest, cb?: (error: string, rep: MakeUpWorkflowNewResponse) => void): Promise<MakeUpWorkflowNewResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件
     */
    RegisterEvent(req: RegisterEventRequest, cb?: (error: string, rep: RegisterEventResponse) => void): Promise<RegisterEventResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改数据源
     */
    ModifyDataSource(req: ModifyDataSourceRequest, cb?: (error: string, rep: ModifyDataSourceResponse) => void): Promise<ModifyDataSourceResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
    DescribeDataSourceList(req: DescribeDataSourceListRequest, cb?: (error: string, rep: DescribeDataSourceListResponse) => void): Promise<DescribeDataSourceListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新任务
     */
    ModifyTaskInfo(req: ModifyTaskInfoRequest, cb?: (error: string, rep: ModifyTaskInfoResponse) => void): Promise<ModifyTaskInfoResponse>;
    /**
     * 删除用户自定义函数
     */
    DeleteCustomFunction(req: DeleteCustomFunctionRequest, cb?: (error: string, rep: DeleteCustomFunctionResponse) => void): Promise<DeleteCustomFunctionResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量终止操作
     */
    KillInstances(req: KillInstancesRequest, cb?: (error: string, rep: KillInstancesResponse) => void): Promise<KillInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹下的工作流
     */
    DescribeFolderWorkflowList(req: DescribeFolderWorkflowListRequest, cb?: (error: string, rep: DescribeFolderWorkflowListResponse) => void): Promise<DescribeFolderWorkflowListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量重跑
     */
    RerunInstances(req: RerunInstancesRequest, cb?: (error: string, rep: RerunInstancesResponse) => void): Promise<RerunInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务具体详情
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
任务批量补录，调度状态任务才可以补录；



     */
    MakeUpTasksNew(req: MakeUpTasksNewRequest, cb?: (error: string, rep: MakeUpTasksNewResponse) => void): Promise<MakeUpTasksNewResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
文件夹更新
     */
    ModifyFolder(req: ModifyFolderRequest, cb?: (error: string, rep: ModifyFolderResponse) => void): Promise<ModifyFolderResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
基于多个工作流进行批量冻结任务操作
     */
    FreezeTasksByMultiWorkflow(req: FreezeTasksByMultiWorkflowRequest, cb?: (error: string, rep: FreezeTasksByMultiWorkflowResponse) => void): Promise<FreezeTasksByMultiWorkflowResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源列表
     */
    DescribeDataSourceWithoutInfo(req: DescribeDataSourceWithoutInfoRequest, cb?: (error: string, rep: DescribeDataSourceWithoutInfoResponse) => void): Promise<DescribeDataSourceWithoutInfoResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
获取实例日志列表
     */
    DescribeInstanceLogs(req: DescribeInstanceLogsRequest, cb?: (error: string, rep: DescribeInstanceLogsResponse) => void): Promise<DescribeInstanceLogsResponse>;
    /**
     * 查询任务实例的关联实例列表
     */
    DescribeRelatedInstances(req: DescribeRelatedInstancesRequest, cb?: (error: string, rep: DescribeRelatedInstancesResponse) => void): Promise<DescribeRelatedInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
     */
    BatchStopTasksNew(req: BatchStopTasksNewRequest, cb?: (error: string, rep: BatchStopTasksNewResponse) => void): Promise<BatchStopTasksNewResponse>;
    /**
     * 提交自定义函数
     */
    SubmitCustomFunction(req: SubmitCustomFunctionRequest, cb?: (error: string, rep: SubmitCustomFunctionResponse) => void): Promise<SubmitCustomFunctionResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量删除任务，仅对任务状态为”已停止“有效；

     */
    BatchDeleteTasksNew(req: BatchDeleteTasksNewRequest, cb?: (error: string, rep: BatchDeleteTasksNewResponse) => void): Promise<BatchDeleteTasksNewResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除工作流
     */
    DeleteWorkflowNew(req: DeleteWorkflowNewRequest, cb?: (error: string, rep: DeleteWorkflowNewResponse) => void): Promise<DeleteWorkflowNewResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流调度
     */
    ModifyWorkflowSchedule(req: ModifyWorkflowScheduleRequest, cb?: (error: string, rep: ModifyWorkflowScheduleResponse) => void): Promise<ModifyWorkflowScheduleResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据工作流分页查询任务
     */
    DescribeTasksByPage(req: DescribeTasksByPageRequest, cb?: (error: string, rep: DescribeTasksByPageResponse) => void): Promise<DescribeTasksByPageResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流
     */
    ModifyWorkflowInfo(req: ModifyWorkflowInfoRequest, cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void): Promise<ModifyWorkflowInfoResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建文件夹
     */
    CreateFolder(req: CreateFolderRequest, cb?: (error: string, rep: CreateFolderResponse) => void): Promise<CreateFolderResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
    ModifyTaskLinks(req: ModifyTaskLinksRequest, cb?: (error: string, rep: ModifyTaskLinksResponse) => void): Promise<ModifyTaskLinksResponse>;
    /**
     *  创建用户自定义函数
     */
    CreateCustomFunction(req: CreateCustomFunctionRequest, cb?: (error: string, rep: CreateCustomFunctionResponse) => void): Promise<CreateCustomFunctionResponse>;
    /**
     * 查询函数类型
     */
    DescribeFunctionTypes(req?: DescribeFunctionTypesRequest, cb?: (error: string, rep: DescribeFunctionTypesResponse) => void): Promise<DescribeFunctionTypesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹目录
     */
    DescribeFolderList(req: DescribeFolderListRequest, cb?: (error: string, rep: DescribeFolderListResponse) => void): Promise<DescribeFolderListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除文件夹
     */
    DeleteFolder(req: DeleteFolderRequest, cb?: (error: string, rep: DeleteFolderResponse) => void): Promise<DeleteFolderResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件监听器
     */
    RegisterEventListener(req: RegisterEventListenerRequest, cb?: (error: string, rep: RegisterEventListenerResponse) => void): Promise<RegisterEventListenerResponse>;
    /**
     * 查询函数分类
     */
    DescribeFunctionKinds(req?: DescribeFunctionKindsRequest, cb?: (error: string, rep: DescribeFunctionKindsResponse) => void): Promise<DescribeFunctionKindsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
触发事件
     */
    TriggerEvent(req: TriggerEventRequest, cb?: (error: string, rep: TriggerEventResponse) => void): Promise<TriggerEventResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建数据源
     */
    CreateDataSource(req: CreateDataSourceRequest, cb?: (error: string, rep: CreateDataSourceResponse) => void): Promise<CreateDataSourceResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建工作流
     */
    CreateWorkflow(req: CreateWorkflowRequest, cb?: (error: string, rep: CreateWorkflowResponse) => void): Promise<CreateWorkflowResponse>;
    /**
     * 获取项目信息
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量置成功
     */
    ForceSucInstances(req: ForceSucInstancesRequest, cb?: (error: string, rep: ForceSucInstancesResponse) => void): Promise<ForceSucInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
运行任务
     */
    RunTask(req: RunTaskRequest, cb?: (error: string, rep: RunTaskResponse) => void): Promise<RunTaskResponse>;
    /**
     * 保存用户自定义函数
     */
    SaveCustomFunction(req: SaveCustomFunctionRequest, cb?: (error: string, rep: SaveCustomFunctionResponse) => void): Promise<SaveCustomFunctionResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据层级查找上/下游任务节点
     */
    DescribeDependTasksNew(req: DescribeDependTasksNewRequest, cb?: (error: string, rep: DescribeDependTasksNewResponse) => void): Promise<DescribeDependTasksNewResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
    DescribeDatasource(req: DescribeDatasourceRequest, cb?: (error: string, rep: DescribeDatasourceResponse) => void): Promise<DescribeDatasourceResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交工作流
     */
    SubmitWorkflow(req: SubmitWorkflowRequest, cb?: (error: string, rep: SubmitWorkflowResponse) => void): Promise<SubmitWorkflowResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务脚本
     */
    DescribeTaskScript(req: DescribeTaskScriptRequest, cb?: (error: string, rep: DescribeTaskScriptResponse) => void): Promise<DescribeTaskScriptResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量修改任务责任人
     */
    BatchModifyOwnersNew(req: BatchModifyOwnersNewRequest, cb?: (error: string, rep: BatchModifyOwnersNewResponse) => void): Promise<BatchModifyOwnersNewResponse>;
    /**
     * 查询全量函数
     */
    DescribeOrganizationalFunctions(req: DescribeOrganizationalFunctionsRequest, cb?: (error: string, rep: DescribeOrganizationalFunctionsResponse) => void): Promise<DescribeOrganizationalFunctionsResponse>;
}

import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SubmitTaskResponse, ModifyFolderRequest, DeleteFolderResponse, RunTaskRequest, MakeUpTasksNewResponse, DescribeTaskDetailResponse, DescribeDependTasksNewRequest, DescribeInstanceLogsRequest, ModifyTaskScriptRequest, DeleteWorkflowNewResponse, DescribeInstanceLogsResponse, MakeUpWorkflowNewResponse, BatchDeleteTasksNewResponse, ModifyTaskLinksResponse, KillInstancesResponse, SetTaskAlarmNewRequest, ModifyTaskScriptResponse, SubmitWorkflowResponse, SubmitTaskRequest, DescribeProjectResponse, BatchDeleteTasksNewRequest, DescribeFolderWorkflowListResponse, CreateFolderRequest, DeleteFolderRequest, DescribeTaskScriptRequest, RegisterEventResponse, FreezeTasksByMultiWorkflowResponse, CreateWorkflowRequest, CreateTaskRequest, KillInstancesRequest, RegisterEventListenerResponse, CreateFolderResponse, DescribeFolderWorkflowListRequest, DescribeFolderListRequest, TriggerEventRequest, ModifyTaskInfoResponse, SubmitWorkflowRequest, RerunInstancesResponse, FreezeTasksRequest, BatchStopTasksNewRequest, ForceSucInstancesRequest, ModifyWorkflowScheduleRequest, RegisterEventRequest, BatchModifyOwnersNewResponse, DeleteWorkflowNewRequest, FreezeTasksByMultiWorkflowRequest, MakeUpWorkflowNewRequest, BatchStopTasksNewResponse, TriggerEventResponse, DescribeTaskInstancesRequest, DescribeTasksByPageResponse, DescribeFolderListResponse, DescribeProjectRequest, ModifyWorkflowInfoRequest, ModifyFolderResponse, DescribeTaskScriptResponse, RunTaskResponse, DescribeDependTasksNewResponse, DescribeRelatedInstancesRequest, BatchModifyOwnersNewRequest, FreezeTasksResponse, CreateTaskResponse, DescribeTaskInstancesResponse, ModifyTaskInfoRequest, DescribeTaskDetailRequest, SetTaskAlarmNewResponse, CreateWorkflowResponse, RegisterEventListenerRequest, ModifyTaskLinksRequest, ModifyWorkflowScheduleResponse, ModifyWorkflowInfoResponse, DescribeRelatedInstancesResponse, RerunInstancesRequest, MakeUpTasksNewRequest, ForceSucInstancesResponse, DescribeTasksByPageRequest } from "./wedata_models";
/**
 * wedata client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建任务（Beta版本）
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * 设置任务告警，新建/更新告警信息（最新）（Beta版本）
     */
    SetTaskAlarmNew(req: SetTaskAlarmNewRequest, cb?: (error: string, rep: SetTaskAlarmNewResponse) => void): Promise<SetTaskAlarmNewResponse>;
    /**
     * 查询任务实例列表
     */
    DescribeTaskInstances(req: DescribeTaskInstancesRequest, cb?: (error: string, rep: DescribeTaskInstancesResponse) => void): Promise<DescribeTaskInstancesResponse>;
    /**
     * 修改任务脚本（Beta版本）
     */
    ModifyTaskScript(req: ModifyTaskScriptRequest, cb?: (error: string, rep: ModifyTaskScriptResponse) => void): Promise<ModifyTaskScriptResponse>;
    /**
     * 提交任务（Beta版本）
     */
    SubmitTask(req: SubmitTaskRequest, cb?: (error: string, rep: SubmitTaskResponse) => void): Promise<SubmitTaskResponse>;
    /**
     * 批量冻结任务（Beta版本）
     */
    FreezeTasks(req: FreezeTasksRequest, cb?: (error: string, rep: FreezeTasksResponse) => void): Promise<FreezeTasksResponse>;
    /**
     * 工作流下所有任务的补录（Beta版本）
     */
    MakeUpWorkflowNew(req: MakeUpWorkflowNewRequest, cb?: (error: string, rep: MakeUpWorkflowNewResponse) => void): Promise<MakeUpWorkflowNewResponse>;
    /**
     * 注册事件（Beta版本）
     */
    RegisterEvent(req: RegisterEventRequest, cb?: (error: string, rep: RegisterEventResponse) => void): Promise<RegisterEventResponse>;
    /**
     * 更新任务（Beta版本）
     */
    ModifyTaskInfo(req: ModifyTaskInfoRequest, cb?: (error: string, rep: ModifyTaskInfoResponse) => void): Promise<ModifyTaskInfoResponse>;
    /**
     * 实例批量终止操作（Beta版本）
     */
    KillInstances(req: KillInstancesRequest, cb?: (error: string, rep: KillInstancesResponse) => void): Promise<KillInstancesResponse>;
    /**
     * 拉取文件夹下的工作流（Beta版本）
     */
    DescribeFolderWorkflowList(req: DescribeFolderWorkflowListRequest, cb?: (error: string, rep: DescribeFolderWorkflowListResponse) => void): Promise<DescribeFolderWorkflowListResponse>;
    /**
     * 实例批量重跑（Beta版本）
     */
    RerunInstances(req: RerunInstancesRequest, cb?: (error: string, rep: RerunInstancesResponse) => void): Promise<RerunInstancesResponse>;
    /**
     * 查询任务具体详情（Beta版本）
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 任务批量补录，调度状态任务才可以补录；（Beta版本）

     */
    MakeUpTasksNew(req: MakeUpTasksNewRequest, cb?: (error: string, rep: MakeUpTasksNewResponse) => void): Promise<MakeUpTasksNewResponse>;
    /**
     * 基于多个工作流进行批量冻结任务操作（Beta版本）
     */
    FreezeTasksByMultiWorkflow(req: FreezeTasksByMultiWorkflowRequest, cb?: (error: string, rep: FreezeTasksByMultiWorkflowResponse) => void): Promise<FreezeTasksByMultiWorkflowResponse>;
    /**
     * 获取实例日志列表（Beta版本）
     */
    DescribeInstanceLogs(req: DescribeInstanceLogsRequest, cb?: (error: string, rep: DescribeInstanceLogsResponse) => void): Promise<DescribeInstanceLogsResponse>;
    /**
     * 查询任务实例的关联实例列表
     */
    DescribeRelatedInstances(req: DescribeRelatedInstancesRequest, cb?: (error: string, rep: DescribeRelatedInstancesResponse) => void): Promise<DescribeRelatedInstancesResponse>;
    /**
     * 批量删除任务，仅对任务状态为”已停止“有效；（Beta版本）

     */
    BatchDeleteTasksNew(req: BatchDeleteTasksNewRequest, cb?: (error: string, rep: BatchDeleteTasksNewResponse) => void): Promise<BatchDeleteTasksNewResponse>;
    /**
     * 删除工作流（Beta版本）
     */
    DeleteWorkflowNew(req: DeleteWorkflowNewRequest, cb?: (error: string, rep: DeleteWorkflowNewResponse) => void): Promise<DeleteWorkflowNewResponse>;
    /**
     * 更新工作流调度（Beta版本）
     */
    ModifyWorkflowSchedule(req: ModifyWorkflowScheduleRequest, cb?: (error: string, rep: ModifyWorkflowScheduleResponse) => void): Promise<ModifyWorkflowScheduleResponse>;
    /**
     * 根据工作流分页查询任务（Beta版本）
     */
    DescribeTasksByPage(req: DescribeTasksByPageRequest, cb?: (error: string, rep: DescribeTasksByPageResponse) => void): Promise<DescribeTasksByPageResponse>;
    /**
     * 更新工作流（Beta版本）
     */
    ModifyWorkflowInfo(req: ModifyWorkflowInfoRequest, cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void): Promise<ModifyWorkflowInfoResponse>;
    /**
     * 创建文件夹（Beta版本）
     */
    CreateFolder(req: CreateFolderRequest, cb?: (error: string, rep: CreateFolderResponse) => void): Promise<CreateFolderResponse>;
    /**
     * 文件夹更新（Beta版本）
     */
    ModifyFolder(req: ModifyFolderRequest, cb?: (error: string, rep: ModifyFolderResponse) => void): Promise<ModifyFolderResponse>;
    /**
     * 拉取文件夹目录（Beta版本）
     */
    DescribeFolderList(req: DescribeFolderListRequest, cb?: (error: string, rep: DescribeFolderListResponse) => void): Promise<DescribeFolderListResponse>;
    /**
     * 删除文件夹（Beta版本）
     */
    DeleteFolder(req: DeleteFolderRequest, cb?: (error: string, rep: DeleteFolderResponse) => void): Promise<DeleteFolderResponse>;
    /**
     * 注册事件监听器（Beta版本）
     */
    RegisterEventListener(req: RegisterEventListenerRequest, cb?: (error: string, rep: RegisterEventListenerResponse) => void): Promise<RegisterEventListenerResponse>;
    /**
     * 触发事件（Beta版本）
     */
    TriggerEvent(req: TriggerEventRequest, cb?: (error: string, rep: TriggerEventResponse) => void): Promise<TriggerEventResponse>;
    /**
     * 添加父任务依赖（Beta版本）
     */
    ModifyTaskLinks(req: ModifyTaskLinksRequest, cb?: (error: string, rep: ModifyTaskLinksResponse) => void): Promise<ModifyTaskLinksResponse>;
    /**
     * 创建工作流（Beta版本）
     */
    CreateWorkflow(req: CreateWorkflowRequest, cb?: (error: string, rep: CreateWorkflowResponse) => void): Promise<CreateWorkflowResponse>;
    /**
     * 获取项目信息
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 实例批量置成功（Beta版本）
     */
    ForceSucInstances(req: ForceSucInstancesRequest, cb?: (error: string, rep: ForceSucInstancesResponse) => void): Promise<ForceSucInstancesResponse>;
    /**
     * 运行任务（Beta版本）
     */
    RunTask(req: RunTaskRequest, cb?: (error: string, rep: RunTaskResponse) => void): Promise<RunTaskResponse>;
    /**
     * 根据层级查找上/下游任务节点（Beta版本）
     */
    DescribeDependTasksNew(req: DescribeDependTasksNewRequest, cb?: (error: string, rep: DescribeDependTasksNewResponse) => void): Promise<DescribeDependTasksNewResponse>;
    /**
     * 提交工作流（Beta版本）
     */
    SubmitWorkflow(req: SubmitWorkflowRequest, cb?: (error: string, rep: SubmitWorkflowResponse) => void): Promise<SubmitWorkflowResponse>;
    /**
     * 查询任务脚本（Beta版本）
     */
    DescribeTaskScript(req: DescribeTaskScriptRequest, cb?: (error: string, rep: DescribeTaskScriptResponse) => void): Promise<DescribeTaskScriptResponse>;
    /**
     * 批量修改任务责任人（Beta版本）
     */
    BatchModifyOwnersNew(req: BatchModifyOwnersNewRequest, cb?: (error: string, rep: BatchModifyOwnersNewResponse) => void): Promise<BatchModifyOwnersNewResponse>;
    /**
     * 仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度（Beta版本）
     */
    BatchStopTasksNew(req: BatchStopTasksNewRequest, cb?: (error: string, rep: BatchStopTasksNewResponse) => void): Promise<BatchStopTasksNewResponse>;
}

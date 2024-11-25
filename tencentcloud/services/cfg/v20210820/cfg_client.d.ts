import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeTaskRequest, DescribeActionFieldConfigListRequest, CreateTaskFromActionRequest, DeleteTaskRequest, DescribeActionLibraryListRequest, ExecuteTaskResponse, DescribeActionFieldConfigListResponse, DescribeObjectTypeListResponse, DescribeTaskExecuteLogsRequest, ModifyTaskRunStatusRequest, DescribeTemplateResponse, ModifyTaskRunStatusResponse, DescribeTemplateRequest, ExecuteTaskInstanceRequest, ExecuteTaskRequest, DescribeTaskListResponse, DescribeTemplateListResponse, DescribeTemplateListRequest, DescribeObjectTypeListRequest, DescribeTaskPolicyTriggerLogResponse, CreateTaskFromTemplateResponse, DeleteTaskResponse, DescribeTaskPolicyTriggerLogRequest, CreateTaskFromTemplateRequest, CreateTaskFromMultiActionRequest, TriggerPolicyRequest, TriggerPolicyResponse, DescribeTaskListRequest, DescribeActionLibraryListResponse, ExecuteTaskInstanceResponse, DescribeTaskExecuteLogsResponse, CreateTaskFromMultiActionResponse, DescribeTaskResponse, CreateTaskFromActionResponse } from "./cfg_models";
/**
 * cfg client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询对象类型列表
     */
    DescribeObjectTypeList(req: DescribeObjectTypeListRequest, cb?: (error: string, rep: DescribeObjectTypeListResponse) => void): Promise<DescribeObjectTypeListResponse>;
    /**
     * 从经验库创建演练
     */
    CreateTaskFromTemplate(req: CreateTaskFromTemplateRequest, cb?: (error: string, rep: CreateTaskFromTemplateResponse) => void): Promise<CreateTaskFromTemplateResponse>;
    /**
     * 以多个动作创建演练
     */
    CreateTaskFromMultiAction(req: CreateTaskFromMultiActionRequest, cb?: (error: string, rep: CreateTaskFromMultiActionResponse) => void): Promise<CreateTaskFromMultiActionResponse>;
    /**
     * 触发混沌演练任务的动作，对于实例进行演练操作
     */
    ExecuteTaskInstance(req: ExecuteTaskInstanceRequest, cb?: (error: string, rep: ExecuteTaskInstanceResponse) => void): Promise<ExecuteTaskInstanceResponse>;
    /**
     * 查询经验库列表
     */
    DescribeTemplateList(req: DescribeTemplateListRequest, cb?: (error: string, rep: DescribeTemplateListResponse) => void): Promise<DescribeTemplateListResponse>;
    /**
     * 修改任务运行状态
     */
    ModifyTaskRunStatus(req: ModifyTaskRunStatusRequest, cb?: (error: string, rep: ModifyTaskRunStatusResponse) => void): Promise<ModifyTaskRunStatusResponse>;
    /**
     * 执行任务
     */
    ExecuteTask(req: ExecuteTaskRequest, cb?: (error: string, rep: ExecuteTaskResponse) => void): Promise<ExecuteTaskResponse>;
    /**
     * 从动作创建演练
     */
    CreateTaskFromAction(req: CreateTaskFromActionRequest, cb?: (error: string, rep: CreateTaskFromActionResponse) => void): Promise<CreateTaskFromActionResponse>;
    /**
     * 用于触发混沌演练护栏（类型为触发和恢复2种）
     */
    TriggerPolicy(req: TriggerPolicyRequest, cb?: (error: string, rep: TriggerPolicyResponse) => void): Promise<TriggerPolicyResponse>;
    /**
     * 查询任务列表
     */
    DescribeTaskList(req: DescribeTaskListRequest, cb?: (error: string, rep: DescribeTaskListResponse) => void): Promise<DescribeTaskListResponse>;
    /**
     * 获取护栏触发日志
     */
    DescribeTaskPolicyTriggerLog(req: DescribeTaskPolicyTriggerLogRequest, cb?: (error: string, rep: DescribeTaskPolicyTriggerLogResponse) => void): Promise<DescribeTaskPolicyTriggerLogResponse>;
    /**
     * 获取演练过程中的所有日志
     */
    DescribeTaskExecuteLogs(req: DescribeTaskExecuteLogsRequest, cb?: (error: string, rep: DescribeTaskExecuteLogsResponse) => void): Promise<DescribeTaskExecuteLogsResponse>;
    /**
     * 删除任务
     */
    DeleteTask(req: DeleteTaskRequest, cb?: (error: string, rep: DeleteTaskResponse) => void): Promise<DeleteTaskResponse>;
    /**
     * 获取混沌演练平台的动作库列表
     */
    DescribeActionLibraryList(req: DescribeActionLibraryListRequest, cb?: (error: string, rep: DescribeActionLibraryListResponse) => void): Promise<DescribeActionLibraryListResponse>;
    /**
     * 根据动作ID获取动作栏位动态配置参数信息，里面包含动作自有和通用两部分参数。
     */
    DescribeActionFieldConfigList(req: DescribeActionFieldConfigListRequest, cb?: (error: string, rep: DescribeActionFieldConfigListResponse) => void): Promise<DescribeActionFieldConfigListResponse>;
    /**
     * 查询任务
     */
    DescribeTask(req: DescribeTaskRequest, cb?: (error: string, rep: DescribeTaskResponse) => void): Promise<DescribeTaskResponse>;
    /**
     * 查询经验库
     */
    DescribeTemplate(req: DescribeTemplateRequest, cb?: (error: string, rep: DescribeTemplateResponse) => void): Promise<DescribeTemplateResponse>;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  SubmitTaskResponse,
  ModifyFolderRequest,
  AlarmInfo,
  DeleteFolderResponse,
  RunTaskRequest,
  MakeUpTasksNewResponse,
  DescribeTaskDetailResponse,
  DescribeDependTasksNewRequest,
  OperateResult,
  DescribeInstanceLogsRequest,
  Workflow,
  ModifyTaskScriptRequest,
  IntegrationNodeSchemaMapping,
  DeleteWorkflowNewResponse,
  TaskInfoData,
  DescribeInstanceLogsResponse,
  MakeUpWorkflowNewResponse,
  TaskInnerInfo,
  BatchDeleteTasksNewResponse,
  ModifyTaskLinksResponse,
  IntegrationNodeMapping,
  IntegrationNodeSchema,
  KillInstancesResponse,
  SetTaskAlarmNewRequest,
  CommonContent,
  ModifyTaskScriptResponse,
  SubmitWorkflowResponse,
  SubmitTaskRequest,
  DescribeProjectResponse,
  InstanceLog,
  BatchDeleteTasksNewRequest,
  DescribeFolderWorkflowListResponse,
  CreateFolderRequest,
  TaskInfoDataPage,
  DeleteFolderRequest,
  DescribeTaskScriptRequest,
  DescribeTaskInstancesData,
  RegisterEventResponse,
  FreezeTasksByMultiWorkflowResponse,
  DependencyConfig,
  DescribeFolderWorkflowListData,
  CreateWorkflowRequest,
  SimpleTaskInfo,
  CreateTaskRequest,
  BatchOperateResult,
  KillInstancesRequest,
  GeneralTaskParam,
  RegisterEventListenerResponse,
  CreateFolderResponse,
  DescribeFolderWorkflowListRequest,
  DescribeFolderListRequest,
  TriggerEventRequest,
  ModifyTaskInfoResponse,
  SubmitWorkflowRequest,
  RerunInstancesResponse,
  ParamInfo,
  FreezeTasksRequest,
  IntegrationNodeDetail,
  BatchStopTasksNewRequest,
  ForceSucInstancesRequest,
  ModifyWorkflowScheduleRequest,
  RegisterEventRequest,
  BatchModifyOwnersNewResponse,
  CanvasInfo,
  DeleteWorkflowNewRequest,
  FreezeTasksByMultiWorkflowRequest,
  InstanceInfo,
  MakeUpWorkflowNewRequest,
  CommonId,
  BatchStopTasksNewResponse,
  TriggerEventResponse,
  DescribeTaskInstancesRequest,
  TaskInstanceInfo,
  DescribeTasksByPageResponse,
  DescribeFolderListResponse,
  DescribeProjectRequest,
  TaskCanvasInfo,
  TaskLinkInfo,
  DescribeFolderListData,
  TaskExtInfo,
  ModifyWorkflowInfoRequest,
  SubmitWorkflow,
  ModifyFolderResponse,
  DescribeTaskScriptResponse,
  RunTaskResponse,
  DescribeDependTasksNewResponse,
  DescribeRelatedInstancesRequest,
  BatchModifyOwnersNewRequest,
  Folder,
  FreezeTasksResponse,
  CreateTaskResponse,
  BatchResult,
  DescribeTaskInstancesResponse,
  ModifyTaskInfoRequest,
  BatchReturn,
  DescribeTaskDetailRequest,
  SetTaskAlarmNewResponse,
  CreateWorkflowResponse,
  RegisterEventListenerRequest,
  ModifyTaskLinksRequest,
  ModifyWorkflowScheduleResponse,
  RecordField,
  ModifyWorkflowInfoResponse,
  OrderField,
  DescribeRelatedInstancesResponse,
  RerunInstancesRequest,
  MakeUpTasksNewRequest,
  TaskScriptContent,
  ForceSucInstancesResponse,
  DescribeTasksByPageRequest,
} from "./wedata_models"

/**
 * wedata client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("wedata.tencentcloudapi.com", "2021-08-20", clientConfig)
  }

  /**
   * 创建任务（Beta版本）
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
   * 设置任务告警，新建/更新告警信息（最新）（Beta版本）
   */
  async SetTaskAlarmNew(
    req: SetTaskAlarmNewRequest,
    cb?: (error: string, rep: SetTaskAlarmNewResponse) => void
  ): Promise<SetTaskAlarmNewResponse> {
    return this.request("SetTaskAlarmNew", req, cb)
  }

  /**
   * 查询任务实例列表
   */
  async DescribeTaskInstances(
    req: DescribeTaskInstancesRequest,
    cb?: (error: string, rep: DescribeTaskInstancesResponse) => void
  ): Promise<DescribeTaskInstancesResponse> {
    return this.request("DescribeTaskInstances", req, cb)
  }

  /**
   * 修改任务脚本（Beta版本）
   */
  async ModifyTaskScript(
    req: ModifyTaskScriptRequest,
    cb?: (error: string, rep: ModifyTaskScriptResponse) => void
  ): Promise<ModifyTaskScriptResponse> {
    return this.request("ModifyTaskScript", req, cb)
  }

  /**
   * 提交任务（Beta版本）
   */
  async SubmitTask(
    req: SubmitTaskRequest,
    cb?: (error: string, rep: SubmitTaskResponse) => void
  ): Promise<SubmitTaskResponse> {
    return this.request("SubmitTask", req, cb)
  }

  /**
   * 批量冻结任务（Beta版本）
   */
  async FreezeTasks(
    req: FreezeTasksRequest,
    cb?: (error: string, rep: FreezeTasksResponse) => void
  ): Promise<FreezeTasksResponse> {
    return this.request("FreezeTasks", req, cb)
  }

  /**
   * 工作流下所有任务的补录（Beta版本）
   */
  async MakeUpWorkflowNew(
    req: MakeUpWorkflowNewRequest,
    cb?: (error: string, rep: MakeUpWorkflowNewResponse) => void
  ): Promise<MakeUpWorkflowNewResponse> {
    return this.request("MakeUpWorkflowNew", req, cb)
  }

  /**
   * 注册事件（Beta版本）
   */
  async RegisterEvent(
    req: RegisterEventRequest,
    cb?: (error: string, rep: RegisterEventResponse) => void
  ): Promise<RegisterEventResponse> {
    return this.request("RegisterEvent", req, cb)
  }

  /**
   * 更新任务（Beta版本）
   */
  async ModifyTaskInfo(
    req: ModifyTaskInfoRequest,
    cb?: (error: string, rep: ModifyTaskInfoResponse) => void
  ): Promise<ModifyTaskInfoResponse> {
    return this.request("ModifyTaskInfo", req, cb)
  }

  /**
   * 实例批量终止操作（Beta版本）
   */
  async KillInstances(
    req: KillInstancesRequest,
    cb?: (error: string, rep: KillInstancesResponse) => void
  ): Promise<KillInstancesResponse> {
    return this.request("KillInstances", req, cb)
  }

  /**
   * 拉取文件夹下的工作流（Beta版本）
   */
  async DescribeFolderWorkflowList(
    req: DescribeFolderWorkflowListRequest,
    cb?: (error: string, rep: DescribeFolderWorkflowListResponse) => void
  ): Promise<DescribeFolderWorkflowListResponse> {
    return this.request("DescribeFolderWorkflowList", req, cb)
  }

  /**
   * 实例批量重跑（Beta版本）
   */
  async RerunInstances(
    req: RerunInstancesRequest,
    cb?: (error: string, rep: RerunInstancesResponse) => void
  ): Promise<RerunInstancesResponse> {
    return this.request("RerunInstances", req, cb)
  }

  /**
   * 查询任务具体详情（Beta版本）
   */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
     * 任务批量补录，调度状态任务才可以补录；（Beta版本）

     */
  async MakeUpTasksNew(
    req: MakeUpTasksNewRequest,
    cb?: (error: string, rep: MakeUpTasksNewResponse) => void
  ): Promise<MakeUpTasksNewResponse> {
    return this.request("MakeUpTasksNew", req, cb)
  }

  /**
   * 基于多个工作流进行批量冻结任务操作（Beta版本）
   */
  async FreezeTasksByMultiWorkflow(
    req: FreezeTasksByMultiWorkflowRequest,
    cb?: (error: string, rep: FreezeTasksByMultiWorkflowResponse) => void
  ): Promise<FreezeTasksByMultiWorkflowResponse> {
    return this.request("FreezeTasksByMultiWorkflow", req, cb)
  }

  /**
   * 获取实例日志列表（Beta版本）
   */
  async DescribeInstanceLogs(
    req: DescribeInstanceLogsRequest,
    cb?: (error: string, rep: DescribeInstanceLogsResponse) => void
  ): Promise<DescribeInstanceLogsResponse> {
    return this.request("DescribeInstanceLogs", req, cb)
  }

  /**
   * 查询任务实例的关联实例列表
   */
  async DescribeRelatedInstances(
    req: DescribeRelatedInstancesRequest,
    cb?: (error: string, rep: DescribeRelatedInstancesResponse) => void
  ): Promise<DescribeRelatedInstancesResponse> {
    return this.request("DescribeRelatedInstances", req, cb)
  }

  /**
     * 批量删除任务，仅对任务状态为”已停止“有效；（Beta版本）

     */
  async BatchDeleteTasksNew(
    req: BatchDeleteTasksNewRequest,
    cb?: (error: string, rep: BatchDeleteTasksNewResponse) => void
  ): Promise<BatchDeleteTasksNewResponse> {
    return this.request("BatchDeleteTasksNew", req, cb)
  }

  /**
   * 删除工作流（Beta版本）
   */
  async DeleteWorkflowNew(
    req: DeleteWorkflowNewRequest,
    cb?: (error: string, rep: DeleteWorkflowNewResponse) => void
  ): Promise<DeleteWorkflowNewResponse> {
    return this.request("DeleteWorkflowNew", req, cb)
  }

  /**
   * 更新工作流调度（Beta版本）
   */
  async ModifyWorkflowSchedule(
    req: ModifyWorkflowScheduleRequest,
    cb?: (error: string, rep: ModifyWorkflowScheduleResponse) => void
  ): Promise<ModifyWorkflowScheduleResponse> {
    return this.request("ModifyWorkflowSchedule", req, cb)
  }

  /**
   * 根据工作流分页查询任务（Beta版本）
   */
  async DescribeTasksByPage(
    req: DescribeTasksByPageRequest,
    cb?: (error: string, rep: DescribeTasksByPageResponse) => void
  ): Promise<DescribeTasksByPageResponse> {
    return this.request("DescribeTasksByPage", req, cb)
  }

  /**
   * 更新工作流（Beta版本）
   */
  async ModifyWorkflowInfo(
    req: ModifyWorkflowInfoRequest,
    cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void
  ): Promise<ModifyWorkflowInfoResponse> {
    return this.request("ModifyWorkflowInfo", req, cb)
  }

  /**
   * 创建文件夹（Beta版本）
   */
  async CreateFolder(
    req: CreateFolderRequest,
    cb?: (error: string, rep: CreateFolderResponse) => void
  ): Promise<CreateFolderResponse> {
    return this.request("CreateFolder", req, cb)
  }

  /**
   * 文件夹更新（Beta版本）
   */
  async ModifyFolder(
    req: ModifyFolderRequest,
    cb?: (error: string, rep: ModifyFolderResponse) => void
  ): Promise<ModifyFolderResponse> {
    return this.request("ModifyFolder", req, cb)
  }

  /**
   * 拉取文件夹目录（Beta版本）
   */
  async DescribeFolderList(
    req: DescribeFolderListRequest,
    cb?: (error: string, rep: DescribeFolderListResponse) => void
  ): Promise<DescribeFolderListResponse> {
    return this.request("DescribeFolderList", req, cb)
  }

  /**
   * 删除文件夹（Beta版本）
   */
  async DeleteFolder(
    req: DeleteFolderRequest,
    cb?: (error: string, rep: DeleteFolderResponse) => void
  ): Promise<DeleteFolderResponse> {
    return this.request("DeleteFolder", req, cb)
  }

  /**
   * 注册事件监听器（Beta版本）
   */
  async RegisterEventListener(
    req: RegisterEventListenerRequest,
    cb?: (error: string, rep: RegisterEventListenerResponse) => void
  ): Promise<RegisterEventListenerResponse> {
    return this.request("RegisterEventListener", req, cb)
  }

  /**
   * 触发事件（Beta版本）
   */
  async TriggerEvent(
    req: TriggerEventRequest,
    cb?: (error: string, rep: TriggerEventResponse) => void
  ): Promise<TriggerEventResponse> {
    return this.request("TriggerEvent", req, cb)
  }

  /**
   * 添加父任务依赖（Beta版本）
   */
  async ModifyTaskLinks(
    req: ModifyTaskLinksRequest,
    cb?: (error: string, rep: ModifyTaskLinksResponse) => void
  ): Promise<ModifyTaskLinksResponse> {
    return this.request("ModifyTaskLinks", req, cb)
  }

  /**
   * 创建工作流（Beta版本）
   */
  async CreateWorkflow(
    req: CreateWorkflowRequest,
    cb?: (error: string, rep: CreateWorkflowResponse) => void
  ): Promise<CreateWorkflowResponse> {
    return this.request("CreateWorkflow", req, cb)
  }

  /**
   * 获取项目信息
   */
  async DescribeProject(
    req: DescribeProjectRequest,
    cb?: (error: string, rep: DescribeProjectResponse) => void
  ): Promise<DescribeProjectResponse> {
    return this.request("DescribeProject", req, cb)
  }

  /**
   * 实例批量置成功（Beta版本）
   */
  async ForceSucInstances(
    req: ForceSucInstancesRequest,
    cb?: (error: string, rep: ForceSucInstancesResponse) => void
  ): Promise<ForceSucInstancesResponse> {
    return this.request("ForceSucInstances", req, cb)
  }

  /**
   * 运行任务（Beta版本）
   */
  async RunTask(
    req: RunTaskRequest,
    cb?: (error: string, rep: RunTaskResponse) => void
  ): Promise<RunTaskResponse> {
    return this.request("RunTask", req, cb)
  }

  /**
   * 根据层级查找上/下游任务节点（Beta版本）
   */
  async DescribeDependTasksNew(
    req: DescribeDependTasksNewRequest,
    cb?: (error: string, rep: DescribeDependTasksNewResponse) => void
  ): Promise<DescribeDependTasksNewResponse> {
    return this.request("DescribeDependTasksNew", req, cb)
  }

  /**
   * 提交工作流（Beta版本）
   */
  async SubmitWorkflow(
    req: SubmitWorkflowRequest,
    cb?: (error: string, rep: SubmitWorkflowResponse) => void
  ): Promise<SubmitWorkflowResponse> {
    return this.request("SubmitWorkflow", req, cb)
  }

  /**
   * 查询任务脚本（Beta版本）
   */
  async DescribeTaskScript(
    req: DescribeTaskScriptRequest,
    cb?: (error: string, rep: DescribeTaskScriptResponse) => void
  ): Promise<DescribeTaskScriptResponse> {
    return this.request("DescribeTaskScript", req, cb)
  }

  /**
   * 批量修改任务责任人（Beta版本）
   */
  async BatchModifyOwnersNew(
    req: BatchModifyOwnersNewRequest,
    cb?: (error: string, rep: BatchModifyOwnersNewResponse) => void
  ): Promise<BatchModifyOwnersNewResponse> {
    return this.request("BatchModifyOwnersNew", req, cb)
  }

  /**
   * 仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度（Beta版本）
   */
  async BatchStopTasksNew(
    req: BatchStopTasksNewRequest,
    cb?: (error: string, rep: BatchStopTasksNewResponse) => void
  ): Promise<BatchStopTasksNewResponse> {
    return this.request("BatchStopTasksNew", req, cb)
  }
}

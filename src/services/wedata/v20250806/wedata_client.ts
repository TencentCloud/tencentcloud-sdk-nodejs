/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  CreateTaskResult,
  ListDownstreamOpsTasksRequest,
  RerunTaskInstancesAsyncResponse,
  UpdateCodeFileRequest,
  ListAlarmMessages,
  CreateResourceFileRequest,
  TaskBaseAttribute,
  UpdateTaskRequest,
  ListDownstreamTaskInstancesResponse,
  ResourceFolder,
  UpdateWorkflowFolderResponse,
  UpdateWorkflowFolderRequest,
  ListTaskVersionsRequest,
  GetCodeFileRequest,
  ResourceFileItem,
  UpdateTaskBrief,
  ListOpsWorkflowsRequest,
  CreateWorkflowFolderResponse,
  WorkflowInfo,
  StopSQLScriptRunResponse,
  ListOpsTasksResponse,
  ListTaskVersionsResponse,
  ResourceFolderPage,
  UpdateOpsTasksOwnerResponse,
  ListDownstreamTasksResponse,
  DeleteWorkflowResponse,
  OpsWorkflows,
  ListOpsAlarmRulesResponse,
  CreateCodeFileResponse,
  UpdateOpsTasksOwnerRequest,
  DeleteResourceFolderResponse,
  KVMap,
  ListWorkflowInfo,
  ListResourceFilesResponse,
  ListDownstreamTaskInstancesRequest,
  ListTaskInstanceExecutionsRequest,
  ListUpstreamOpsTasksResponse,
  DeleteTaskRequest,
  UpdateWorkflowResponse,
  NotebookSessionInfo,
  ListOpsTasksPage,
  DeleteWorkflowRequest,
  CreateOpsAlarmRuleResponse,
  DeleteOpsAlarmRuleResponse,
  GetTaskRequest,
  ModifyAlarmRuleResult,
  AlarmMessage,
  ListResourceFilesRequest,
  GetOpsAlarmRuleResponse,
  UpdateTaskResult,
  GetResourceFileRequest,
  UpdateTasksOwner,
  TaskInstancePage,
  GetOpsAsyncJobRequest,
  DeleteCodeFolderResponse,
  PauseOpsTasksAsyncRequest,
  TaskInstanceExecutions,
  UpdateResourceFileResult,
  SqlCreateResult,
  UpdateResourceFileResponse,
  CreateWorkflowRequest,
  AlarmWayWebHook,
  TaskSchedulingParameter,
  CreateAlarmRuleData,
  SubmitTaskRequest,
  InstanceLog,
  GetResourceFileResponse,
  CreateResourceFileResult,
  UpdateSQLFolderRequest,
  BackfillInstance,
  ListUpstreamTaskInstancesResponse,
  CreateSQLFolderRequest,
  UpdateWorkflowRequest,
  KVPair,
  GetOpsTaskResponse,
  SQLScriptConfig,
  JobExecutionDto,
  CreateTaskSchedulerConfiguration,
  CreateCodeFolderResponse,
  ListUpstreamTaskInstancesRequest,
  CodeFolderNode,
  UpdateOpsAlarmRuleResponse,
  UpdateSQLScriptResponse,
  SQLContentActionResult,
  CreateFolderResult,
  SQLStopResult,
  ListWorkflowsRequest,
  RunSQLScriptRequest,
  ListDownstreamOpsTasksResponse,
  TaskInstanceDetail,
  ListTaskInstancesResponse,
  UpdateResourceFolderResponse,
  SubmitTaskResult,
  ListSQLScriptRunsRequest,
  CreateDataBackfillPlanRequest,
  GetTaskInstanceRequest,
  TaskDependDto,
  ListUpstreamTasksResponse,
  DeleteWorkflowFolderRequest,
  ListSQLFolderContentsRequest,
  RunSQLScriptResponse,
  DeleteSQLScriptRequest,
  GetOpsAlarmRuleRequest,
  ListTasksResponse,
  GetOpsTaskCodeResponse,
  ListWorkflowsResponse,
  CreateTaskRequest,
  ProjectInstanceStatisticsAlarmInfo,
  ListCodeFolderContentsResponse,
  GetTaskCodeResponse,
  InTaskParameter,
  DeleteResourceFileResult,
  UpdateTaskResponse,
  DeleteSQLFolderResponse,
  GetTaskVersionResponse,
  ListResourceFoldersResponse,
  GetSQLScriptResponse,
  TaskVersionDetail,
  UpdateFolderResult,
  ListAlarmMessagesRequest,
  UpdateCodeFileResponse,
  GetOpsWorkflowRequest,
  CreateOpsAlarmRuleRequest,
  ListSQLScriptRunsResponse,
  Task,
  NotificationFatigue,
  TaskDataRegistry,
  GetTaskInstanceLogRequest,
  SetSuccessTaskInstancesAsyncResponse,
  TaskCodeResult,
  UpdateSQLScriptRequest,
  SetSuccessTaskInstancesAsyncRequest,
  TaskCode,
  StopOpsTasksAsyncRequest,
  ListAlarmMessagesResponse,
  ParamInfo,
  CodeStudioFolderResult,
  GetOpsTaskRequest,
  DeleteAlarmRuleResult,
  DeleteTaskResult,
  DeleteResourceFileRequest,
  ListWorkflowFoldersResponse,
  CreateSQLScriptResponse,
  AlarmQuietInterval,
  CodeFile,
  ListTasksRequest,
  OpsAsyncResponse,
  CreateWorkflowResult,
  ListResourceFoldersRequest,
  ResourceFile,
  ListTaskVersions,
  OpsWorkflow,
  GetWorkflowResponse,
  ListUpstreamTasksRequest,
  GetTaskCodeRequest,
  GetTaskResponse,
  DeleteCodeFolderRequest,
  KillTaskInstancesAsyncRequest,
  CodeStudioFileActionResult,
  CreateSQLScriptRequest,
  WorkflowFolder,
  ListDataBackfillInstancesRequest,
  UpdateResourceFolderRequest,
  CodeStudioFolderActionResult,
  ListOpsWorkflowsResponse,
  EventListener,
  BackfillInstanceCollection,
  UpdateSQLFolderResponse,
  InstanceExecutionPhase,
  GetAlarmMessageRequest,
  CreateSQLFolderResponse,
  ListCodeFolderContentsRequest,
  GetWorkflowRequest,
  OpsWorkflowDetail,
  DeleteWorkflowResult,
  TaskSchedulerConfiguration,
  GetTaskInstanceResponse,
  ListDataBackfillInstancesResponse,
  ListUpstreamOpsTasksRequest,
  UpdateOpsAlarmRuleRequest,
  ListSQLFolderContentsResponse,
  ListWorkflowFoldersRequest,
  DependencyConfigPage,
  DeleteFolderResult,
  CreateResourceFileResponse,
  TaskConfiguration,
  DeleteWorkflowFolderResponse,
  ListTaskInstancesRequest,
  CodeFileConfig,
  ListAlarmRulesResult,
  DeleteSQLScriptResponse,
  StopSQLScriptRunRequest,
  ListOpsTasksRequest,
  AlarmRuleData,
  CreateCodeFileRequest,
  ChildDependencyConfigPage,
  SQLFolderNode,
  TaskVersion,
  GetCodeFileResponse,
  CreateTaskConfiguration,
  GetOpsWorkflowResponse,
  UpdateWorkflowResult,
  ListTaskInstanceExecutionsResponse,
  ParentDependencyConfigPage,
  SubmitTaskResponse,
  WorkflowFolderPage,
  AlarmRuleDetail,
  RerunTaskInstancesAsyncRequest,
  ListTaskInfo,
  DataBackfillRange,
  CreateTaskResponse,
  WorkflowSchedulerConfiguration,
  GetSQLScriptRequest,
  CreateDataBackfillPlanResponse,
  DeleteCodeFileResponse,
  InstanceExecution,
  TaskInstance,
  TaskOpsInfo,
  DependencyStrategyTask,
  SQLScript,
  CreateTaskBaseAttribute,
  CreateDataReplenishmentPlan,
  KillTaskInstancesAsyncResponse,
  StopOpsTasksAsyncResponse,
  PauseOpsTasksAsyncResponse,
  CreateWorkflowResponse,
  TimeOutStrategyInfo,
  DeleteTaskResponse,
  GetTaskInstanceLogResponse,
  AlarmGroup,
  OpsTaskDepend,
  ListDownstreamTasksRequest,
  OutTaskParameter,
  DeleteOpsAlarmRuleRequest,
  GetTaskVersionRequest,
  GetOpsAsyncJobResponse,
  CreateCodeFolderRequest,
  DeleteSQLFolderRequest,
  DeleteCodeFileRequest,
  DependencyTaskBrief,
  WorkflowDetail,
  UpdateCodeFolderRequest,
  ResourceFilePage,
  WorkflowSchedulerConfigurationInfo,
  ListOpsAlarmRulesRequest,
  CreateWorkflowFolderRequest,
  GetAlarmMessageResponse,
  OpsAsyncJobDetail,
  CreateResourceFolderRequest,
  UpdateTaskBaseAttribute,
  DeleteResourceFolderRequest,
  UpdateCodeFolderResponse,
  GetOpsTaskCodeRequest,
  UpdateResourceFileRequest,
  CreateResourceFolderResponse,
  TaskExtParameter,
  JobDto,
  ReconciliationStrategyInfo,
  DeleteResourceFileResponse,
} from "./wedata_models"

/**
 * wedata client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("wedata.tencentcloudapi.com", "2025-08-06", clientConfig)
  }

  /**
   * 创建资源文件文件夹
   */
  async CreateResourceFolder(
    req: CreateResourceFolderRequest,
    cb?: (error: string, rep: CreateResourceFolderResponse) => void
  ): Promise<CreateResourceFolderResponse> {
    return this.request("CreateResourceFolder", req, cb)
  }

  /**
   * 创建任务接口
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
   * 根据项目ID获取项目下工作流
   */
  async ListOpsWorkflows(
    req: ListOpsWorkflowsRequest,
    cb?: (error: string, rep: ListOpsWorkflowsResponse) => void
  ): Promise<ListOpsWorkflowsResponse> {
    return this.request("ListOpsWorkflows", req, cb)
  }

  /**
   * 创建数据探索脚本文件夹
   */
  async CreateSQLFolder(
    req: CreateSQLFolderRequest,
    cb?: (error: string, rep: CreateSQLFolderResponse) => void
  ): Promise<CreateSQLFolderResponse> {
    return this.request("CreateSQLFolder", req, cb)
  }

  /**
   * 重命名代码文件夹
   */
  async UpdateCodeFolder(
    req: UpdateCodeFolderRequest,
    cb?: (error: string, rep: UpdateCodeFolderResponse) => void
  ): Promise<UpdateCodeFolderResponse> {
    return this.request("UpdateCodeFolder", req, cb)
  }

  /**
   * 获取告警信息列表
   */
  async ListAlarmMessages(
    req: ListAlarmMessagesRequest,
    cb?: (error: string, rep: ListAlarmMessagesResponse) => void
  ): Promise<ListAlarmMessagesResponse> {
    return this.request("ListAlarmMessages", req, cb)
  }

  /**
   * 获取工作流信息
   */
  async GetWorkflow(
    req: GetWorkflowRequest,
    cb?: (error: string, rep: GetWorkflowResponse) => void
  ): Promise<GetWorkflowResponse> {
    return this.request("GetWorkflow", req, cb)
  }

  /**
   * 获取实例直接上游
   */
  async ListDownstreamTaskInstances(
    req: ListDownstreamTaskInstancesRequest,
    cb?: (error: string, rep: ListDownstreamTaskInstancesResponse) => void
  ): Promise<ListDownstreamTaskInstancesResponse> {
    return this.request("ListDownstreamTaskInstances", req, cb)
  }

  /**
   * 更新工作流（包括工作流基本信息与工作流参数）
   */
  async UpdateWorkflow(
    req: UpdateWorkflowRequest,
    cb?: (error: string, rep: UpdateWorkflowResponse) => void
  ): Promise<UpdateWorkflowResponse> {
    return this.request("UpdateWorkflow", req, cb)
  }

  /**
   * 获取任务直接上游
   */
  async ListUpstreamTasks(
    req: ListUpstreamTasksRequest,
    cb?: (error: string, rep: ListUpstreamTasksResponse) => void
  ): Promise<ListUpstreamTasksResponse> {
    return this.request("ListUpstreamTasks", req, cb)
  }

  /**
   * 拉取任务版本列表
   */
  async GetTaskVersion(
    req: GetTaskVersionRequest,
    cb?: (error: string, rep: GetTaskVersionResponse) => void
  ): Promise<GetTaskVersionResponse> {
    return this.request("GetTaskVersion", req, cb)
  }

  /**
   * 创建数据补录计划
   */
  async CreateDataBackfillPlan(
    req: CreateDataBackfillPlanRequest,
    cb?: (error: string, rep: CreateDataBackfillPlanResponse) => void
  ): Promise<CreateDataBackfillPlanResponse> {
    return this.request("CreateDataBackfillPlan", req, cb)
  }

  /**
   * 查询数据探索文件夹树，包括文件夹下的脚本
   */
  async ListSQLFolderContents(
    req: ListSQLFolderContentsRequest,
    cb?: (error: string, rep: ListSQLFolderContentsResponse) => void
  ): Promise<ListSQLFolderContentsResponse> {
    return this.request("ListSQLFolderContents", req, cb)
  }

  /**
   * 运行SQL脚本
   */
  async RunSQLScript(
    req: RunSQLScriptRequest,
    cb?: (error: string, rep: RunSQLScriptResponse) => void
  ): Promise<RunSQLScriptResponse> {
    return this.request("RunSQLScript", req, cb)
  }

  /**
   * 新建代码文件夹
   */
  async CreateCodeFolder(
    req: CreateCodeFolderRequest,
    cb?: (error: string, rep: CreateCodeFolderResponse) => void
  ): Promise<CreateCodeFolderResponse> {
    return this.request("CreateCodeFolder", req, cb)
  }

  /**
   * 获取任务直接上游
   */
  async ListUpstreamOpsTasks(
    req: ListUpstreamOpsTasksRequest,
    cb?: (error: string, rep: ListUpstreamOpsTasksResponse) => void
  ): Promise<ListUpstreamOpsTasksResponse> {
    return this.request("ListUpstreamOpsTasks", req, cb)
  }

  /**
   * 新增SQL脚本
   */
  async CreateSQLScript(
    req: CreateSQLScriptRequest,
    cb?: (error: string, rep: CreateSQLScriptResponse) => void
  ): Promise<CreateSQLScriptResponse> {
    return this.request("CreateSQLScript", req, cb)
  }

  /**
   * 异步批量暂停任务
   */
  async PauseOpsTasksAsync(
    req: PauseOpsTasksAsyncRequest,
    cb?: (error: string, rep: PauseOpsTasksAsyncResponse) => void
  ): Promise<PauseOpsTasksAsyncResponse> {
    return this.request("PauseOpsTasksAsync", req, cb)
  }

  /**
   * 查询运维中心异步操作详情
   */
  async GetOpsAsyncJob(
    req: GetOpsAsyncJobRequest,
    cb?: (error: string, rep: GetOpsAsyncJobResponse) => void
  ): Promise<GetOpsAsyncJobResponse> {
    return this.request("GetOpsAsyncJob", req, cb)
  }

  /**
   * 更新代码文件
   */
  async UpdateCodeFile(
    req: UpdateCodeFileRequest,
    cb?: (error: string, rep: UpdateCodeFileResponse) => void
  ): Promise<UpdateCodeFileResponse> {
    return this.request("UpdateCodeFile", req, cb)
  }

  /**
   * 修改任务负责人
   */
  async UpdateOpsTasksOwner(
    req: UpdateOpsTasksOwnerRequest,
    cb?: (error: string, rep: UpdateOpsTasksOwnerResponse) => void
  ): Promise<UpdateOpsTasksOwnerResponse> {
    return this.request("UpdateOpsTasksOwner", req, cb)
  }

  /**
   * 删除告警规则
   */
  async DeleteOpsAlarmRule(
    req: DeleteOpsAlarmRuleRequest,
    cb?: (error: string, rep: DeleteOpsAlarmRuleResponse) => void
  ): Promise<DeleteOpsAlarmRuleResponse> {
    return this.request("DeleteOpsAlarmRule", req, cb)
  }

  /**
   * 查询告警信息详情
   */
  async GetAlarmMessage(
    req: GetAlarmMessageRequest,
    cb?: (error: string, rep: GetAlarmMessageResponse) => void
  ): Promise<GetAlarmMessageResponse> {
    return this.request("GetAlarmMessage", req, cb)
  }

  /**
   * 获取任务直接下游详情
   */
  async ListDownstreamOpsTasks(
    req: ListDownstreamOpsTasksRequest,
    cb?: (error: string, rep: ListDownstreamOpsTasksResponse) => void
  ): Promise<ListDownstreamOpsTasksResponse> {
    return this.request("ListDownstreamOpsTasks", req, cb)
  }

  /**
   * 任务保存版本列表
   */
  async ListTaskVersions(
    req: ListTaskVersionsRequest,
    cb?: (error: string, rep: ListTaskVersionsResponse) => void
  ): Promise<ListTaskVersionsResponse> {
    return this.request("ListTaskVersions", req, cb)
  }

  /**
   * 实例批量重跑-异步
   */
  async RerunTaskInstancesAsync(
    req: RerunTaskInstancesAsyncRequest,
    cb?: (error: string, rep: RerunTaskInstancesAsyncResponse) => void
  ): Promise<RerunTaskInstancesAsyncResponse> {
    return this.request("RerunTaskInstancesAsync", req, cb)
  }

  /**
   * 异步批量下线任务
   */
  async StopOpsTasksAsync(
    req: StopOpsTasksAsyncRequest,
    cb?: (error: string, rep: StopOpsTasksAsyncResponse) => void
  ): Promise<StopOpsTasksAsyncResponse> {
    return this.request("StopOpsTasksAsync", req, cb)
  }

  /**
   * 删除代码文件
   */
  async DeleteCodeFile(
    req: DeleteCodeFileRequest,
    cb?: (error: string, rep: DeleteCodeFileResponse) => void
  ): Promise<DeleteCodeFileResponse> {
    return this.request("DeleteCodeFile", req, cb)
  }

  /**
   * 删除编排空间任务
   */
  async DeleteTask(
    req: DeleteTaskRequest,
    cb?: (error: string, rep: DeleteTaskResponse) => void
  ): Promise<DeleteTaskResponse> {
    return this.request("DeleteTask", req, cb)
  }

  /**
   * 查询脚本详情
   */
  async GetSQLScript(
    req: GetSQLScriptRequest,
    cb?: (error: string, rep: GetSQLScriptResponse) => void
  ): Promise<GetSQLScriptResponse> {
    return this.request("GetSQLScript", req, cb)
  }

  /**
   * 获取任务代码
   */
  async GetTaskCode(
    req: GetTaskCodeRequest,
    cb?: (error: string, rep: GetTaskCodeResponse) => void
  ): Promise<GetTaskCodeResponse> {
    return this.request("GetTaskCode", req, cb)
  }

  /**
   * 获取文件夹内容
   */
  async ListCodeFolderContents(
    req: ListCodeFolderContentsRequest,
    cb?: (error: string, rep: ListCodeFolderContentsResponse) => void
  ): Promise<ListCodeFolderContentsResponse> {
    return this.request("ListCodeFolderContents", req, cb)
  }

  /**
   * 创建资源文件
   */
  async CreateResourceFile(
    req: CreateResourceFileRequest,
    cb?: (error: string, rep: CreateResourceFileResponse) => void
  ): Promise<CreateResourceFileResponse> {
    return this.request("CreateResourceFile", req, cb)
  }

  /**
   * 重命名SQL文件夹
   */
  async UpdateSQLFolder(
    req: UpdateSQLFolderRequest,
    cb?: (error: string, rep: UpdateSQLFolderResponse) => void
  ): Promise<UpdateSQLFolderResponse> {
    return this.request("UpdateSQLFolder", req, cb)
  }

  /**
   * 查询SQL运行记录
   */
  async ListSQLScriptRuns(
    req: ListSQLScriptRunsRequest,
    cb?: (error: string, rep: ListSQLScriptRunsResponse) => void
  ): Promise<ListSQLScriptRunsResponse> {
    return this.request("ListSQLScriptRuns", req, cb)
  }

  /**
   * 修改告警规则
   */
  async UpdateOpsAlarmRule(
    req: UpdateOpsAlarmRuleRequest,
    cb?: (error: string, rep: UpdateOpsAlarmRuleResponse) => void
  ): Promise<UpdateOpsAlarmRuleResponse> {
    return this.request("UpdateOpsAlarmRule", req, cb)
  }

  /**
   * 查询告警规则列表
   */
  async ListOpsAlarmRules(
    req: ListOpsAlarmRulesRequest,
    cb?: (error: string, rep: ListOpsAlarmRulesResponse) => void
  ): Promise<ListOpsAlarmRulesResponse> {
    return this.request("ListOpsAlarmRules", req, cb)
  }

  /**
   * 根据告警规则id/名称查询单个告警规则信息
   */
  async GetOpsAlarmRule(
    req: GetOpsAlarmRuleRequest,
    cb?: (error: string, rep: GetOpsAlarmRuleResponse) => void
  ): Promise<GetOpsAlarmRuleResponse> {
    return this.request("GetOpsAlarmRule", req, cb)
  }

  /**
   * 查询资源文件文件夹列表
   */
  async ListResourceFolders(
    req: ListResourceFoldersRequest,
    cb?: (error: string, rep: ListResourceFoldersResponse) => void
  ): Promise<ListResourceFoldersResponse> {
    return this.request("ListResourceFolders", req, cb)
  }

  /**
   * 查询工作流列表
   */
  async ListWorkflows(
    req: ListWorkflowsRequest,
    cb?: (error: string, rep: ListWorkflowsResponse) => void
  ): Promise<ListWorkflowsResponse> {
    return this.request("ListWorkflows", req, cb)
  }

  /**
   * 获取任务详情
   */
  async GetOpsTask(
    req: GetOpsTaskRequest,
    cb?: (error: string, rep: GetOpsTaskResponse) => void
  ): Promise<GetOpsTaskResponse> {
    return this.request("GetOpsTask", req, cb)
  }

  /**
   * 实例批量置成功-异步
   */
  async SetSuccessTaskInstancesAsync(
    req: SetSuccessTaskInstancesAsyncRequest,
    cb?: (error: string, rep: SetSuccessTaskInstancesAsyncResponse) => void
  ): Promise<SetSuccessTaskInstancesAsyncResponse> {
    return this.request("SetSuccessTaskInstancesAsync", req, cb)
  }

  /**
   * 更新资源文件
   */
  async UpdateResourceFile(
    req: UpdateResourceFileRequest,
    cb?: (error: string, rep: UpdateResourceFileResponse) => void
  ): Promise<UpdateResourceFileResponse> {
    return this.request("UpdateResourceFile", req, cb)
  }

  /**
   * 获取实例列表
   */
  async ListTaskInstances(
    req: ListTaskInstancesRequest,
    cb?: (error: string, rep: ListTaskInstancesResponse) => void
  ): Promise<ListTaskInstancesResponse> {
    return this.request("ListTaskInstances", req, cb)
  }

  /**
   * 根据工作流id，获取工作流调度详情。
   */
  async GetOpsWorkflow(
    req: GetOpsWorkflowRequest,
    cb?: (error: string, rep: GetOpsWorkflowResponse) => void
  ): Promise<GetOpsWorkflowResponse> {
    return this.request("GetOpsWorkflow", req, cb)
  }

  /**
   * 获取任务代码
   */
  async GetOpsTaskCode(
    req: GetOpsTaskCodeRequest,
    cb?: (error: string, rep: GetOpsTaskCodeResponse) => void
  ): Promise<GetOpsTaskCodeResponse> {
    return this.request("GetOpsTaskCode", req, cb)
  }

  /**
   * 设置告警规则
   */
  async CreateOpsAlarmRule(
    req: CreateOpsAlarmRuleRequest,
    cb?: (error: string, rep: CreateOpsAlarmRuleResponse) => void
  ): Promise<CreateOpsAlarmRuleResponse> {
    return this.request("CreateOpsAlarmRule", req, cb)
  }

  /**
   * 获取单次补录的所有实例详情
   */
  async ListDataBackfillInstances(
    req: ListDataBackfillInstancesRequest,
    cb?: (error: string, rep: ListDataBackfillInstancesResponse) => void
  ): Promise<ListDataBackfillInstancesResponse> {
    return this.request("ListDataBackfillInstances", req, cb)
  }

  /**
   * 获取实例直接上游
   */
  async ListUpstreamTaskInstances(
    req: ListUpstreamTaskInstancesRequest,
    cb?: (error: string, rep: ListUpstreamTaskInstancesResponse) => void
  ): Promise<ListUpstreamTaskInstancesResponse> {
    return this.request("ListUpstreamTaskInstances", req, cb)
  }

  /**
   * 查询文件夹列表
   */
  async ListWorkflowFolders(
    req: ListWorkflowFoldersRequest,
    cb?: (error: string, rep: ListWorkflowFoldersResponse) => void
  ): Promise<ListWorkflowFoldersResponse> {
    return this.request("ListWorkflowFolders", req, cb)
  }

  /**
   * 资源管理-删除资源文件
   */
  async DeleteResourceFile(
    req: DeleteResourceFileRequest,
    cb?: (error: string, rep: DeleteResourceFileResponse) => void
  ): Promise<DeleteResourceFileResponse> {
    return this.request("DeleteResourceFile", req, cb)
  }

  /**
   * 新建代码文件
   */
  async CreateCodeFile(
    req: CreateCodeFileRequest,
    cb?: (error: string, rep: CreateCodeFileResponse) => void
  ): Promise<CreateCodeFileResponse> {
    return this.request("CreateCodeFile", req, cb)
  }

  /**
   * 创建任务接口
   */
  async GetTask(
    req: GetTaskRequest,
    cb?: (error: string, rep: GetTaskResponse) => void
  ): Promise<GetTaskResponse> {
    return this.request("GetTask", req, cb)
  }

  /**
   * 提交任务。
   */
  async SubmitTask(
    req: SubmitTaskRequest,
    cb?: (error: string, rep: SubmitTaskResponse) => void
  ): Promise<SubmitTaskResponse> {
    return this.request("SubmitTask", req, cb)
  }

  /**
   * 获取实例列表
   */
  async GetTaskInstanceLog(
    req: GetTaskInstanceLogRequest,
    cb?: (error: string, rep: GetTaskInstanceLogResponse) => void
  ): Promise<GetTaskInstanceLogResponse> {
    return this.request("GetTaskInstanceLog", req, cb)
  }

  /**
   * 获取资源文件列表
   */
  async ListResourceFiles(
    req: ListResourceFilesRequest,
    cb?: (error: string, rep: ListResourceFilesResponse) => void
  ): Promise<ListResourceFilesResponse> {
    return this.request("ListResourceFiles", req, cb)
  }

  /**
   * 创建任务接口
   */
  async UpdateTask(
    req: UpdateTaskRequest,
    cb?: (error: string, rep: UpdateTaskResponse) => void
  ): Promise<UpdateTaskResponse> {
    return this.request("UpdateTask", req, cb)
  }

  /**
   * 删除工作流
   */
  async DeleteWorkflow(
    req: DeleteWorkflowRequest,
    cb?: (error: string, rep: DeleteWorkflowResponse) => void
  ): Promise<DeleteWorkflowResponse> {
    return this.request("DeleteWorkflow", req, cb)
  }

  /**
   * 获取资源文件详情
   */
  async GetResourceFile(
    req: GetResourceFileRequest,
    cb?: (error: string, rep: GetResourceFileResponse) => void
  ): Promise<GetResourceFileResponse> {
    return this.request("GetResourceFile", req, cb)
  }

  /**
   * 数据探索删除文件夹
   */
  async DeleteCodeFolder(
    req: DeleteCodeFolderRequest,
    cb?: (error: string, rep: DeleteCodeFolderResponse) => void
  ): Promise<DeleteCodeFolderResponse> {
    return this.request("DeleteCodeFolder", req, cb)
  }

  /**
   * 删除资源文件文件夹
   */
  async DeleteResourceFolder(
    req: DeleteResourceFolderRequest,
    cb?: (error: string, rep: DeleteResourceFolderResponse) => void
  ): Promise<DeleteResourceFolderResponse> {
    return this.request("DeleteResourceFolder", req, cb)
  }

  /**
   * 创建工作流
   */
  async CreateWorkflow(
    req: CreateWorkflowRequest,
    cb?: (error: string, rep: CreateWorkflowResponse) => void
  ): Promise<CreateWorkflowResponse> {
    return this.request("CreateWorkflow", req, cb)
  }

  /**
   * 实例批量终止操作-异步操作
   */
  async KillTaskInstancesAsync(
    req: KillTaskInstancesAsyncRequest,
    cb?: (error: string, rep: KillTaskInstancesAsyncResponse) => void
  ): Promise<KillTaskInstancesAsyncResponse> {
    return this.request("KillTaskInstancesAsync", req, cb)
  }

  /**
   * 删除数据开发文件夹
   */
  async DeleteWorkflowFolder(
    req: DeleteWorkflowFolderRequest,
    cb?: (error: string, rep: DeleteWorkflowFolderResponse) => void
  ): Promise<DeleteWorkflowFolderResponse> {
    return this.request("DeleteWorkflowFolder", req, cb)
  }

  /**
   * 查询任务分页信息
   */
  async ListTasks(
    req: ListTasksRequest,
    cb?: (error: string, rep: ListTasksResponse) => void
  ): Promise<ListTasksResponse> {
    return this.request("ListTasks", req, cb)
  }

  /**
   * 调度实例详情
   */
  async ListTaskInstanceExecutions(
    req: ListTaskInstanceExecutionsRequest,
    cb?: (error: string, rep: ListTaskInstanceExecutionsResponse) => void
  ): Promise<ListTaskInstanceExecutionsResponse> {
    return this.request("ListTaskInstanceExecutions", req, cb)
  }

  /**
   * 查看代码文件详情
   */
  async GetCodeFile(
    req: GetCodeFileRequest,
    cb?: (error: string, rep: GetCodeFileResponse) => void
  ): Promise<GetCodeFileResponse> {
    return this.request("GetCodeFile", req, cb)
  }

  /**
   * 创建文件夹
   */
  async CreateWorkflowFolder(
    req: CreateWorkflowFolderRequest,
    cb?: (error: string, rep: CreateWorkflowFolderResponse) => void
  ): Promise<CreateWorkflowFolderResponse> {
    return this.request("CreateWorkflowFolder", req, cb)
  }

  /**
   * 删除SQL文件夹
   */
  async DeleteSQLFolder(
    req: DeleteSQLFolderRequest,
    cb?: (error: string, rep: DeleteSQLFolderResponse) => void
  ): Promise<DeleteSQLFolderResponse> {
    return this.request("DeleteSQLFolder", req, cb)
  }

  /**
   * 删除探索脚本
   */
  async DeleteSQLScript(
    req: DeleteSQLScriptRequest,
    cb?: (error: string, rep: DeleteSQLScriptResponse) => void
  ): Promise<DeleteSQLScriptResponse> {
    return this.request("DeleteSQLScript", req, cb)
  }

  /**
   * 创建文件夹
   */
  async UpdateWorkflowFolder(
    req: UpdateWorkflowFolderRequest,
    cb?: (error: string, rep: UpdateWorkflowFolderResponse) => void
  ): Promise<UpdateWorkflowFolderResponse> {
    return this.request("UpdateWorkflowFolder", req, cb)
  }

  /**
   * 根据项目id获取任务列表
   */
  async ListOpsTasks(
    req: ListOpsTasksRequest,
    cb?: (error: string, rep: ListOpsTasksResponse) => void
  ): Promise<ListOpsTasksResponse> {
    return this.request("ListOpsTasks", req, cb)
  }

  /**
   * 停止运行SQL脚本
   */
  async StopSQLScriptRun(
    req: StopSQLScriptRunRequest,
    cb?: (error: string, rep: StopSQLScriptRunResponse) => void
  ): Promise<StopSQLScriptRunResponse> {
    return this.request("StopSQLScriptRun", req, cb)
  }

  /**
   * 获取任务直接下游详情
   */
  async ListDownstreamTasks(
    req: ListDownstreamTasksRequest,
    cb?: (error: string, rep: ListDownstreamTasksResponse) => void
  ): Promise<ListDownstreamTasksResponse> {
    return this.request("ListDownstreamTasks", req, cb)
  }

  /**
   * 创建资源文件文件夹
   */
  async UpdateResourceFolder(
    req: UpdateResourceFolderRequest,
    cb?: (error: string, rep: UpdateResourceFolderResponse) => void
  ): Promise<UpdateResourceFolderResponse> {
    return this.request("UpdateResourceFolder", req, cb)
  }

  /**
   * 保存探索脚本内容
   */
  async UpdateSQLScript(
    req: UpdateSQLScriptRequest,
    cb?: (error: string, rep: UpdateSQLScriptResponse) => void
  ): Promise<UpdateSQLScriptResponse> {
    return this.request("UpdateSQLScript", req, cb)
  }

  /**
   * 调度实例详情
   */
  async GetTaskInstance(
    req: GetTaskInstanceRequest,
    cb?: (error: string, rep: GetTaskInstanceResponse) => void
  ): Promise<GetTaskInstanceResponse> {
    return this.request("GetTaskInstance", req, cb)
  }
}

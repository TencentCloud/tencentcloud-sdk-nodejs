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
  ListProcessLineageResponse,
  SetSuccessTaskInstancesAsyncRequest,
  WorkflowInfo,
  ListTableResponse,
  CreateDataSourceRequest,
  GetResourceGroupMetricsResponse,
  DeleteWorkflowResponse,
  ListDataSourcesRequest,
  OpsWorkflows,
  ProjectRequest,
  DeleteResourceFolderResponse,
  UpdateTaskRequest,
  KVMap,
  ListResourceFilesResponse,
  ListDownstreamTaskInstancesRequest,
  UpdateProjectRequest,
  DeleteWorkflowRequest,
  ListProjectMembersRequest,
  PauseOpsTasksAsyncRequest,
  DissociateResourceGroupFromProjectRequest,
  DLCClusterInfo,
  CreateWorkflowRequest,
  TaskSchedulingParameter,
  SubmitTaskRequest,
  UpdateSQLFolderRequest,
  BackfillInstance,
  OpsWorkflow,
  CreateSQLFolderRequest,
  GetOpsTaskResponse,
  SQLStopResult,
  ResourceStatus,
  EnableProjectResponse,
  ListCatalogPage,
  GetDataSourceRelatedTasksResponse,
  DeleteLineageResponse,
  TaskInstanceDetail,
  ListTaskInstancesRequest,
  ProjectUserRole,
  TaskDependDto,
  GetOpsTaskCodeResponse,
  ListWorkflowsResponse,
  CreateProjectResponse,
  ProjectInstanceStatisticsAlarmInfo,
  GetTaskVersionResponse,
  GetOpsWorkflowRequest,
  ListWorkflowInfo,
  ProjectBrief,
  TaskCode,
  GetTaskCodeResponse,
  DeleteResourceFileRequest,
  SQLScriptConfig,
  ResourceNumber,
  AddCalcEnginesToProjectRequest,
  CreateWorkflowResult,
  TaskDataRegistry,
  ListDatabaseResponse,
  DeleteCodeFolderRequest,
  ListOpsWorkflowsResponse,
  BackfillInstanceCollection,
  CreateSQLFolderResponse,
  ListDownstreamTaskInstancesResponse,
  GetWorkflowRequest,
  ListResourceFoldersResponse,
  UpdateResourceGroupResponse,
  ListSQLFolderContentsResponse,
  TaskConfiguration,
  DeleteWorkflowFolderResponse,
  SubmitTaskResult,
  RerunTaskInstancesAsyncResponse,
  ListLineagePage,
  RelateTask,
  UpdateWorkflowResult,
  AlarmRuleDetail,
  StopOpsTasksAsyncRequest,
  GetSQLScriptRequest,
  ExecutorResourceGroupInfo,
  GrantMemberProjectRoleResponse,
  TaskInstance,
  IntegrationResource,
  ListTaskInfo,
  OpsTaskDepend,
  ListTaskInstancesResponse,
  DataSourceResult,
  CreateCodeFolderRequest,
  CreateResourceGroupRequest,
  ListTableRequest,
  UpdateResourceGroupRequest,
  DeleteCodeFileRequest,
  ListOpsAlarmRulesRequest,
  GetProjectResponse,
  InstanceExecution,
  JobDto,
  DeleteResourceFileResponse,
  ListDownstreamOpsTasksRequest,
  UpdateCodeFileRequest,
  LineageResource,
  TaskBaseAttribute,
  ListDataSourcesResponse,
  TimeOutStrategyInfo,
  GetCodeFileRequest,
  OperateResult,
  ListSchemaPage,
  RegisterLineageResponse,
  CreateCodeFileResponse,
  ListResourceGroupsResponse,
  UpdateResourceFolderRequest,
  ListTaskInstanceExecutionsRequest,
  MonitorWhiteTask,
  ProjectUsersBrief,
  CodeStudioFolderResult,
  ListOpsTasksPage,
  CreateOpsAlarmRuleResponse,
  GetSQLFolderRequest,
  AlarmWayWebHook,
  GetResourceFileResponse,
  GetTaskCodeRequest,
  ListLineageResponse,
  CreateTaskSchedulerConfiguration,
  CreateCodeFolderResponse,
  ExecutorResourceGroupData,
  SQLContentActionResult,
  DataBackfill,
  RemoveMemberProjectRoleRequest,
  RunSQLScriptRequest,
  AssociateResourceGroupToProjectResponse,
  CreateResourceGroupResponse,
  DeleteSQLScriptRequest,
  ListTasksResponse,
  UpdateResourceFolderResponse,
  DataSourceFileUpload,
  DeleteResourceFileResult,
  ListSchemaResponse,
  GetCodeFolderResponse,
  DeleteSQLFolderResponse,
  ListWorkflowFoldersRequest,
  GetTableColumnsRequest,
  ListAlarmMessagesRequest,
  DataSource,
  ListSQLScriptRunsResponse,
  ListTenantRolesRequest,
  GetTaskInstanceLogRequest,
  ListCatalogRequest,
  ListLineageRequest,
  DeleteTaskResult,
  CreateSQLScriptResponse,
  AlarmQuietInterval,
  ResourceGroupSpecification,
  DeleteResourceGroupRequest,
  ListTasksRequest,
  ResourceFile,
  GetWorkflowResponse,
  GetTaskResponse,
  CreateSQLScriptRequest,
  GetAlarmMessageRequest,
  ListCodeFolderContentsRequest,
  ListTaskVersionsRequest,
  OpsWorkflowDetail,
  TableInfo,
  ListResourceFilesRequest,
  WorkflowSchedulerConfigurationInfo,
  ListProjectRolesResponse,
  DependencyConfigPage,
  StartTasks,
  CreateResourceFileResponse,
  TaskInstanceExecutions,
  ListAlarmRulesResult,
  EnableProjectRequest,
  ListTaskInstanceExecutionsResponse,
  UpdateTaskResult,
  LineageProperty,
  CreateTaskResponse,
  DisableProjectRequest,
  DependencyStrategyTask,
  CreateTaskBaseAttribute,
  CreateDataReplenishmentPlan,
  GetTableResponse,
  UpdateWorkflowFolderRequest,
  PauseOpsTasksAsyncResponse,
  JobExecutionDto,
  ListUpstreamTasksResponse,
  OutTaskParameter,
  ModifyAlarmRuleResult,
  UpdateFolderResult,
  ListSchemaRequest,
  WorkflowDetail,
  DeleteProjectMemberResponse,
  CreateWorkflowFolderRequest,
  CreateResourceFolderRequest,
  MetricData,
  DeleteResourceFolderRequest,
  UpdateCodeFolderResponse,
  UpdateResourceFileRequest,
  TaskExtParameter,
  CodeFile,
  SubmitTaskResponse,
  ResourceFileItem,
  ListAlarmMessages,
  BindProject,
  ResourceType,
  StartOpsTasksResponse,
  UpdateTaskResponse,
  ResourceFolder,
  UpdateDataSourceRequest,
  AssociateResourceGroupToProjectRequest,
  ListOpsWorkflowsRequest,
  CreateWorkflowFolderResponse,
  GetDataSourceRelatedTasksRequest,
  ResourceFolderPage,
  ListDownstreamTasksResponse,
  UpdateOpsTasksOwnerResponse,
  NotebookSessionInfo,
  ListTenantRolesResponse,
  PageRoles,
  UpdateTaskBrief,
  GetTaskInstanceResponse,
  TechnicalMetadata,
  UpdateOpsTasksOwnerRequest,
  UpdateDataSourceResponse,
  GetOpsAsyncJobRequest,
  DeleteCodeFolderResponse,
  CreateProjectMemberRequest,
  UpdateResourceFileResponse,
  GetOpsAlarmRuleResponse,
  CreateProjectRequest,
  InstanceLog,
  OpsAsyncResponse,
  UpdateWorkflowRequest,
  TrendData,
  ListColumnLineageRequest,
  UpdateOpsAlarmRuleResponse,
  CodeStudioFileActionResult,
  OpsAsyncJobDetail,
  ListDownstreamOpsTasksResponse,
  GetProjectRequest,
  ListTaskVersionsResponse,
  ListSQLScriptRunsRequest,
  CreateDataBackfillPlanRequest,
  ListProjectRolesRequest,
  GetTaskInstanceRequest,
  ListSQLFolderContentsRequest,
  UpdateResourceFileResult,
  CreateTaskRequest,
  GetDataSourceRequest,
  ListProjectMembersResponse,
  LineageResouce,
  ListAlarmMessagesResponse,
  SystemRole,
  DeleteTaskRequest,
  GetCodeFolderRequest,
  GetOpsTaskRequest,
  DeleteAlarmRuleResult,
  ListWorkflowFoldersResponse,
  KillTaskInstancesAsyncResponse,
  ListTaskVersions,
  ListUpstreamTasksRequest,
  ReconciliationStrategyInfo,
  AddCalcEnginesToProjectResponse,
  EventListener,
  InstanceExecutionPhase,
  DatasourceRelationTaskInfo,
  UpdateWorkflowResponse,
  ListUpstreamOpsTasksRequest,
  RemoveMemberProjectRoleResponse,
  DeleteFolderResult,
  ListWorkflowsRequest,
  UpdateSQLFolderResponse,
  CodeFileConfig,
  DeleteSQLScriptResponse,
  ListOpsTasksRequest,
  GetSQLScriptResponse,
  CreateCodeFileRequest,
  ChildDependencyConfigPage,
  LineageRelation,
  CreateTaskConfiguration,
  RerunTaskInstancesAsyncRequest,
  Task,
  ListTablePage,
  WorkflowSchedulerConfiguration,
  CreateDataBackfillPlanResponse,
  DataSourceInfo,
  TaskVersionDetail,
  StopOpsTasksAsyncResponse,
  CreateWorkflowResponse,
  DeleteTaskResponse,
  SchemaInfo,
  DissociateResourceGroupFromProjectResponse,
  AlarmGroup,
  GrantMemberProjectRoleRequest,
  GetTaskVersionRequest,
  GetOpsAsyncJobResponse,
  DeleteSQLFolderRequest,
  LineagePair,
  ListDatabasePage,
  ListResourceGroupsRequest,
  WorkflowFolder,
  GetAlarmMessageResponse,
  UpdateTaskBaseAttribute,
  GetOpsTaskCodeRequest,
  RegisterLineageRequest,
  GetDataBackfillPlanRequest,
  ListProcessLineageRequest,
  UpdateProjectResponse,
  CreateResourceFileRequest,
  ListDatabaseRequest,
  GetOpsAlarmRuleRequest,
  StopSQLScriptRunResponse,
  ListOpsTasksResponse,
  ListProjectsRequest,
  CreateProjectMemberResponse,
  ListOpsAlarmRulesResponse,
  UpdateOpsAlarmRuleRequest,
  ParentDependencyConfigPage,
  ListUpstreamOpsTasksResponse,
  DeleteProjectMemberRequest,
  GetSQLFolderResponse,
  Project,
  DeleteOpsAlarmRuleResponse,
  GetTaskRequest,
  AlarmMessage,
  StartOpsTasksRequest,
  ListCatalogResponse,
  GetResourceFileRequest,
  UpdateTasksOwner,
  TaskInstancePage,
  ListColumnLineageResponse,
  SqlCreateResult,
  CreateAlarmRuleData,
  SQLScript,
  CreateResourceFileResult,
  ListUpstreamTaskInstancesResponse,
  KVPair,
  CreateDataSourceResponse,
  ListUpstreamTaskInstancesRequest,
  CodeFolderNode,
  ResourceGroupMetrics,
  UpdateSQLScriptResponse,
  CreateFolderResult,
  LineageNodeInfo,
  CatalogInfo,
  ListDownstreamTasksRequest,
  DeleteWorkflowFolderRequest,
  RunSQLScriptResponse,
  CreateProjectResult,
  GetTableColumnsResponse,
  DeleteOpsAlarmRuleRequest,
  BriefTask,
  ProjectResult,
  ListDataBackfillInstancesResponse,
  ListProcessLineagePage,
  DisableProjectResponse,
  DeleteLineageRequest,
  CreateOpsAlarmRuleRequest,
  SetSuccessTaskInstancesAsyncResponse,
  UpdateSQLScriptRequest,
  ParamInfo,
  DeleteDataSourceResponse,
  InTaskParameter,
  ListResourceFoldersRequest,
  GetDataSourceResponse,
  GetDataBackfillPlanResponse,
  KillTaskInstancesAsyncRequest,
  ListDataBackfillInstancesRequest,
  CodeStudioFolderActionResult,
  GetResourceGroupMetricsRequest,
  BusinessMetadata,
  ListProjectsResponse,
  DeleteWorkflowResult,
  TaskSchedulerConfiguration,
  UpdateWorkflowFolderResponse,
  DeleteDataSourceRequest,
  StopSQLScriptRunRequest,
  AlarmRuleData,
  UpdateCodeFileResponse,
  NotificationFatigue,
  SQLFolderNode,
  DatabaseInfo,
  TaskVersion,
  GetCodeFileResponse,
  WorkflowFolderPage,
  TaskCodeResult,
  DataBackfillRange,
  DeleteCodeFileResponse,
  TaskOpsInfo,
  DeleteResourceGroupResponse,
  LineageProcess,
  GetTaskInstanceLogResponse,
  ListCodeFolderContentsResponse,
  DependencyTaskBrief,
  UpdateCodeFolderRequest,
  ResourceFilePage,
  ResourceResult,
  ColumnInfo,
  GetOpsWorkflowResponse,
  DataSourceStatus,
  GetTableRequest,
  CreateResourceFolderResponse,
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
   * 获取告警信息列表
   */
  async ListAlarmMessages(
    req: ListAlarmMessagesRequest,
    cb?: (error: string, rep: ListAlarmMessagesResponse) => void
  ): Promise<ListAlarmMessagesResponse> {
    return this.request("ListAlarmMessages", req, cb)
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
   * 数据源关联任务详情
   */
  async GetDataSourceRelatedTasks(
    req: GetDataSourceRelatedTasksRequest,
    cb?: (error: string, rep: GetDataSourceRelatedTasksResponse) => void
  ): Promise<GetDataSourceRelatedTasksResponse> {
    return this.request("GetDataSourceRelatedTasks", req, cb)
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
   * 租户全局范围的项目列表，与用户查看范围无关.
   */
  async ListProjects(
    req: ListProjectsRequest,
    cb?: (error: string, rep: ListProjectsResponse) => void
  ): Promise<ListProjectsResponse> {
    return this.request("ListProjects", req, cb)
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
   * 获取任务直接下游详情
   */
  async ListDownstreamOpsTasks(
    req: ListDownstreamOpsTasksRequest,
    cb?: (error: string, rep: ListDownstreamOpsTasksResponse) => void
  ): Promise<ListDownstreamOpsTasksResponse> {
    return this.request("ListDownstreamOpsTasks", req, cb)
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
   * 获取任务直接上游
   */
  async ListUpstreamOpsTasks(
    req: ListUpstreamOpsTasksRequest,
    cb?: (error: string, rep: ListUpstreamOpsTasksResponse) => void
  ): Promise<ListUpstreamOpsTasksResponse> {
    return this.request("ListUpstreamOpsTasks", req, cb)
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
   * 获取资产目录信息
   */
  async ListCatalog(
    req: ListCatalogRequest,
    cb?: (error: string, rep: ListCatalogResponse) => void
  ): Promise<ListCatalogResponse> {
    return this.request("ListCatalog", req, cb)
  }

  /**
   * 获取补录计划详情
   */
  async GetDataBackfillPlan(
    req: GetDataBackfillPlanRequest,
    cb?: (error: string, rep: GetDataBackfillPlanResponse) => void
  ): Promise<GetDataBackfillPlanResponse> {
    return this.request("GetDataBackfillPlan", req, cb)
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
   * 该接口用于删除数据源
   */
  async DeleteDataSource(
    req: DeleteDataSourceRequest,
    cb?: (error: string, rep: DeleteDataSourceResponse) => void
  ): Promise<DeleteDataSourceResponse> {
    return this.request("DeleteDataSource", req, cb)
  }

  /**
   * 该接口用于将指定执行资源组解除与项目的绑定
   */
  async DissociateResourceGroupFromProject(
    req: DissociateResourceGroupFromProjectRequest,
    cb?: (error: string, rep: DissociateResourceGroupFromProjectResponse) => void
  ): Promise<DissociateResourceGroupFromProjectResponse> {
    return this.request("DissociateResourceGroupFromProject", req, cb)
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
   * 更新资源文件夹
   */
  async UpdateResourceFolder(
    req: UpdateResourceFolderRequest,
    cb?: (error: string, rep: UpdateResourceFolderResponse) => void
  ): Promise<UpdateResourceFolderResponse> {
    return this.request("UpdateResourceFolder", req, cb)
  }

  /**
   * 该接口用于在指定项目中创建数据源
   */
  async CreateDataSource(
    req: CreateDataSourceRequest,
    cb?: (error: string, rep: CreateDataSourceResponse) => void
  ): Promise<CreateDataSourceResponse> {
    return this.request("CreateDataSource", req, cb)
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
   * 查询任务分页信息
   */
  async ListTasks(
    req: ListTasksRequest,
    cb?: (error: string, rep: ListTasksResponse) => void
  ): Promise<ListTasksResponse> {
    return this.request("ListTasks", req, cb)
  }

  /**
   * 该接口用于将指定执行资源组绑定到项目
   */
  async AssociateResourceGroupToProject(
    req: AssociateResourceGroupToProjectRequest,
    cb?: (error: string, rep: AssociateResourceGroupToProjectResponse) => void
  ): Promise<AssociateResourceGroupToProjectResponse> {
    return this.request("AssociateResourceGroupToProject", req, cb)
  }

  /**
   * 删除项目用户角色
   */
  async RemoveMemberProjectRole(
    req: RemoveMemberProjectRoleRequest,
    cb?: (error: string, rep: RemoveMemberProjectRoleResponse) => void
  ): Promise<RemoveMemberProjectRoleResponse> {
    return this.request("RemoveMemberProjectRole", req, cb)
  }

  /**
   * 修改项目基础信息。
   */
  async UpdateProject(
    req: UpdateProjectRequest,
    cb?: (error: string, rep: UpdateProjectResponse) => void
  ): Promise<UpdateProjectResponse> {
    return this.request("UpdateProject", req, cb)
  }

  /**
   * 启用项目
   */
  async EnableProject(
    req: EnableProjectRequest,
    cb?: (error: string, rep: EnableProjectResponse) => void
  ): Promise<EnableProjectResponse> {
    return this.request("EnableProject", req, cb)
  }

  /**
   * 获取所有主账号角色列表
   */
  async ListTenantRoles(
    req: ListTenantRolesRequest,
    cb?: (error: string, rep: ListTenantRolesResponse) => void
  ): Promise<ListTenantRolesResponse> {
    return this.request("ListTenantRoles", req, cb)
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
   * 获取单次补录的所有实例详情
   */
  async ListDataBackfillInstances(
    req: ListDataBackfillInstancesRequest,
    cb?: (error: string, rep: ListDataBackfillInstancesResponse) => void
  ): Promise<ListDataBackfillInstancesResponse> {
    return this.request("ListDataBackfillInstances", req, cb)
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
   * 运行SQL脚本
   */
  async RunSQLScript(
    req: RunSQLScriptRequest,
    cb?: (error: string, rep: RunSQLScriptResponse) => void
  ): Promise<RunSQLScriptResponse> {
    return this.request("RunSQLScript", req, cb)
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
   * 获取项目信息
   */
  async GetProject(
    req: GetProjectRequest,
    cb?: (error: string, rep: GetProjectResponse) => void
  ): Promise<GetProjectResponse> {
    return this.request("GetProject", req, cb)
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
   * 修改任务负责人
   */
  async UpdateOpsTasksOwner(
    req: UpdateOpsTasksOwnerRequest,
    cb?: (error: string, rep: UpdateOpsTasksOwnerResponse) => void
  ): Promise<UpdateOpsTasksOwnerResponse> {
    return this.request("UpdateOpsTasksOwner", req, cb)
  }

  /**
   * 查询表所有字段列表
   */
  async GetTableColumns(
    req: GetTableColumnsRequest,
    cb?: (error: string, rep: GetTableColumnsResponse) => void
  ): Promise<GetTableColumnsResponse> {
    return this.request("GetTableColumns", req, cb)
  }

  /**
   * 获取表字段血缘信息
   */
  async ListColumnLineage(
    req: ListColumnLineageRequest,
    cb?: (error: string, rep: ListColumnLineageResponse) => void
  ): Promise<ListColumnLineageResponse> {
    return this.request("ListColumnLineage", req, cb)
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
   * 禁用项目
   */
  async DisableProject(
    req: DisableProjectRequest,
    cb?: (error: string, rep: DisableProjectResponse) => void
  ): Promise<DisableProjectResponse> {
    return this.request("DisableProject", req, cb)
  }

  /**
   * 关联项目集群
   */
  async AddCalcEnginesToProject(
    req: AddCalcEnginesToProjectRequest,
    cb?: (error: string, rep: AddCalcEnginesToProjectResponse) => void
  ): Promise<AddCalcEnginesToProjectResponse> {
    return this.request("AddCalcEnginesToProject", req, cb)
  }

  /**
   * RegisterLineage
   */
  async RegisterLineage(
    req: RegisterLineageRequest,
    cb?: (error: string, rep: RegisterLineageResponse) => void
  ): Promise<RegisterLineageResponse> {
    return this.request("RegisterLineage", req, cb)
  }

  /**
   * 获取项目下的用户，分页返回
   */
  async ListProjectMembers(
    req: ListProjectMembersRequest,
    cb?: (error: string, rep: ListProjectMembersResponse) => void
  ): Promise<ListProjectMembersResponse> {
    return this.request("ListProjectMembers", req, cb)
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
   * 该接口用于销毁资源
   */
  async DeleteResourceGroup(
    req: DeleteResourceGroupRequest,
    cb?: (error: string, rep: DeleteResourceGroupResponse) => void
  ): Promise<DeleteResourceGroupResponse> {
    return this.request("DeleteResourceGroup", req, cb)
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
   * 获取任务详情接口
   */
  async GetTask(
    req: GetTaskRequest,
    cb?: (error: string, rep: GetTaskResponse) => void
  ): Promise<GetTaskResponse> {
    return this.request("GetTask", req, cb)
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
   * 该接口用于查询指定项目中的数据源列表
   */
  async ListDataSources(
    req: ListDataSourcesRequest,
    cb?: (error: string, rep: ListDataSourcesResponse) => void
  ): Promise<ListDataSourcesResponse> {
    return this.request("ListDataSources", req, cb)
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
   * 获取资产血缘信息
   */
  async ListProcessLineage(
    req: ListProcessLineageRequest,
    cb?: (error: string, rep: ListProcessLineageResponse) => void
  ): Promise<ListProcessLineageResponse> {
    return this.request("ListProcessLineage", req, cb)
  }

  /**
   * 创建项目，创建时包含集群信息
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
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
   * 停止运行SQL脚本
   */
  async StopSQLScriptRun(
    req: StopSQLScriptRunRequest,
    cb?: (error: string, rep: StopSQLScriptRunResponse) => void
  ): Promise<StopSQLScriptRunResponse> {
    return this.request("StopSQLScriptRun", req, cb)
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
   * 保存探索脚本内容
   */
  async UpdateSQLScript(
    req: UpdateSQLScriptRequest,
    cb?: (error: string, rep: UpdateSQLScriptResponse) => void
  ): Promise<UpdateSQLScriptResponse> {
    return this.request("UpdateSQLScript", req, cb)
  }

  /**
   * RegisterLineage
   */
  async DeleteLineage(
    req: DeleteLineageRequest,
    cb?: (error: string, rep: DeleteLineageResponse) => void
  ): Promise<DeleteLineageResponse> {
    return this.request("DeleteLineage", req, cb)
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
   * 更新工作流（包括工作流基本信息与工作流参数）
   */
  async UpdateWorkflow(
    req: UpdateWorkflowRequest,
    cb?: (error: string, rep: UpdateWorkflowResponse) => void
  ): Promise<UpdateWorkflowResponse> {
    return this.request("UpdateWorkflow", req, cb)
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
   * 查询数据探索文件夹树，包括文件夹下的脚本
   */
  async ListSQLFolderContents(
    req: ListSQLFolderContentsRequest,
    cb?: (error: string, rep: ListSQLFolderContentsResponse) => void
  ): Promise<ListSQLFolderContentsResponse> {
    return this.request("ListSQLFolderContents", req, cb)
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
   * 新增SQL脚本
   */
  async CreateSQLScript(
    req: CreateSQLScriptRequest,
    cb?: (error: string, rep: CreateSQLScriptResponse) => void
  ): Promise<CreateSQLScriptResponse> {
    return this.request("CreateSQLScript", req, cb)
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
   * 查询资源文件文件夹列表
   */
  async ListResourceFolders(
    req: ListResourceFoldersRequest,
    cb?: (error: string, rep: ListResourceFoldersResponse) => void
  ): Promise<ListResourceFoldersResponse> {
    return this.request("ListResourceFolders", req, cb)
  }

  /**
   * 该接口用于查看指定执行资源组的监控指标
   */
  async GetResourceGroupMetrics(
    req: GetResourceGroupMetricsRequest,
    cb?: (error: string, rep: GetResourceGroupMetricsResponse) => void
  ): Promise<GetResourceGroupMetricsResponse> {
    return this.request("GetResourceGroupMetrics", req, cb)
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
   * 异步批量下线任务
   */
  async StopOpsTasksAsync(
    req: StopOpsTasksAsyncRequest,
    cb?: (error: string, rep: StopOpsTasksAsyncResponse) => void
  ): Promise<StopOpsTasksAsyncResponse> {
    return this.request("StopOpsTasksAsync", req, cb)
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
   * 该接口用于更新数据源
   */
  async UpdateDataSource(
    req: UpdateDataSourceRequest,
    cb?: (error: string, rep: UpdateDataSourceResponse) => void
  ): Promise<UpdateDataSourceResponse> {
    return this.request("UpdateDataSource", req, cb)
  }

  /**
   * 该接口用于变配/续费资源
   */
  async UpdateResourceGroup(
    req: UpdateResourceGroupRequest,
    cb?: (error: string, rep: UpdateResourceGroupResponse) => void
  ): Promise<UpdateResourceGroupResponse> {
    return this.request("UpdateResourceGroup", req, cb)
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
   * 该接口用于查询执行资源组列表
   */
  async ListResourceGroups(
    req: ListResourceGroupsRequest,
    cb?: (error: string, rep: ListResourceGroupsResponse) => void
  ): Promise<ListResourceGroupsResponse> {
    return this.request("ListResourceGroups", req, cb)
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
   * 修改项目用户角色
   */
  async GrantMemberProjectRole(
    req: GrantMemberProjectRoleRequest,
    cb?: (error: string, rep: GrantMemberProjectRoleResponse) => void
  ): Promise<GrantMemberProjectRoleResponse> {
    return this.request("GrantMemberProjectRole", req, cb)
  }

  /**
   * 获取sql文件夹详情
   */
  async GetSQLFolder(
    req: GetSQLFolderRequest,
    cb?: (error: string, rep: GetSQLFolderResponse) => void
  ): Promise<GetSQLFolderResponse> {
    return this.request("GetSQLFolder", req, cb)
  }

  /**
   * 添加项目用户角色
   */
  async CreateProjectMember(
    req: CreateProjectMemberRequest,
    cb?: (error: string, rep: CreateProjectMemberResponse) => void
  ): Promise<CreateProjectMemberResponse> {
    return this.request("CreateProjectMember", req, cb)
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
   * 更新工作流文件夹
   */
  async UpdateWorkflowFolder(
    req: UpdateWorkflowFolderRequest,
    cb?: (error: string, rep: UpdateWorkflowFolderResponse) => void
  ): Promise<UpdateWorkflowFolderResponse> {
    return this.request("UpdateWorkflowFolder", req, cb)
  }

  /**
   * 更新任务接口
   */
  async UpdateTask(
    req: UpdateTaskRequest,
    cb?: (error: string, rep: UpdateTaskResponse) => void
  ): Promise<UpdateTaskResponse> {
    return this.request("UpdateTask", req, cb)
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
   * 删除项目用户
   */
  async DeleteProjectMember(
    req: DeleteProjectMemberRequest,
    cb?: (error: string, rep: DeleteProjectMemberResponse) => void
  ): Promise<DeleteProjectMemberResponse> {
    return this.request("DeleteProjectMember", req, cb)
  }

  /**
   * 获取角色列表信息
   */
  async ListProjectRoles(
    req: ListProjectRolesRequest,
    cb?: (error: string, rep: ListProjectRolesResponse) => void
  ): Promise<ListProjectRolesResponse> {
    return this.request("ListProjectRoles", req, cb)
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
   * 删除SQL文件夹
   */
  async DeleteSQLFolder(
    req: DeleteSQLFolderRequest,
    cb?: (error: string, rep: DeleteSQLFolderResponse) => void
  ): Promise<DeleteSQLFolderResponse> {
    return this.request("DeleteSQLFolder", req, cb)
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
   * 获取资产数据库信息
   */
  async ListDatabase(
    req: ListDatabaseRequest,
    cb?: (error: string, rep: ListDatabaseResponse) => void
  ): Promise<ListDatabaseResponse> {
    return this.request("ListDatabase", req, cb)
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
   * 获取工作流信息
   */
  async GetWorkflow(
    req: GetWorkflowRequest,
    cb?: (error: string, rep: GetWorkflowResponse) => void
  ): Promise<GetWorkflowResponse> {
    return this.request("GetWorkflow", req, cb)
  }

  /**
   * 获取资产数据库Schema信息
   */
  async ListSchema(
    req: ListSchemaRequest,
    cb?: (error: string, rep: ListSchemaResponse) => void
  ): Promise<ListSchemaResponse> {
    return this.request("ListSchema", req, cb)
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
   * 获取sql文件夹详情
   */
  async GetCodeFolder(
    req: GetCodeFolderRequest,
    cb?: (error: string, rep: GetCodeFolderResponse) => void
  ): Promise<GetCodeFolderResponse> {
    return this.request("GetCodeFolder", req, cb)
  }

  /**
   * 异步批量启动任务
   */
  async StartOpsTasks(
    req: StartOpsTasksRequest,
    cb?: (error: string, rep: StartOpsTasksResponse) => void
  ): Promise<StartOpsTasksResponse> {
    return this.request("StartOpsTasks", req, cb)
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
   * 实例批量重跑-异步
   */
  async RerunTaskInstancesAsync(
    req: RerunTaskInstancesAsyncRequest,
    cb?: (error: string, rep: RerunTaskInstancesAsyncResponse) => void
  ): Promise<RerunTaskInstancesAsyncResponse> {
    return this.request("RerunTaskInstancesAsync", req, cb)
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
   * 查询脚本详情
   */
  async GetSQLScript(
    req: GetSQLScriptRequest,
    cb?: (error: string, rep: GetSQLScriptResponse) => void
  ): Promise<GetSQLScriptResponse> {
    return this.request("GetSQLScript", req, cb)
  }

  /**
   * 获取资产血缘信息
   */
  async ListLineage(
    req: ListLineageRequest,
    cb?: (error: string, rep: ListLineageResponse) => void
  ): Promise<ListLineageResponse> {
    return this.request("ListLineage", req, cb)
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
   * 查询文件夹列表
   */
  async ListWorkflowFolders(
    req: ListWorkflowFoldersRequest,
    cb?: (error: string, rep: ListWorkflowFoldersResponse) => void
  ): Promise<ListWorkflowFoldersResponse> {
    return this.request("ListWorkflowFolders", req, cb)
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
   * 数据探索删除文件夹
   */
  async DeleteCodeFolder(
    req: DeleteCodeFolderRequest,
    cb?: (error: string, rep: DeleteCodeFolderResponse) => void
  ): Promise<DeleteCodeFolderResponse> {
    return this.request("DeleteCodeFolder", req, cb)
  }

  /**
   * 该接口用于购买资源
   */
  async CreateResourceGroup(
    req: CreateResourceGroupRequest,
    cb?: (error: string, rep: CreateResourceGroupResponse) => void
  ): Promise<CreateResourceGroupResponse> {
    return this.request("CreateResourceGroup", req, cb)
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
   * 获取资产表信息
   */
  async ListTable(
    req: ListTableRequest,
    cb?: (error: string, rep: ListTableResponse) => void
  ): Promise<ListTableResponse> {
    return this.request("ListTable", req, cb)
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
   * 删除探索脚本
   */
  async DeleteSQLScript(
    req: DeleteSQLScriptRequest,
    cb?: (error: string, rep: DeleteSQLScriptResponse) => void
  ): Promise<DeleteSQLScriptResponse> {
    return this.request("DeleteSQLScript", req, cb)
  }

  /**
   * 该接口用于查看指定数据源的详细信息
   */
  async GetDataSource(
    req: GetDataSourceRequest,
    cb?: (error: string, rep: GetDataSourceResponse) => void
  ): Promise<GetDataSourceResponse> {
    return this.request("GetDataSource", req, cb)
  }

  /**
   * 查询表详情
   */
  async GetTable(
    req: GetTableRequest,
    cb?: (error: string, rep: GetTableResponse) => void
  ): Promise<GetTableResponse> {
    return this.request("GetTable", req, cb)
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
}

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
  SystemRole,
  ListOpsTriggerWorkflowsResponse,
  ListWorkflowPermissionsResponse,
  ListProcessLineageResponse,
  GetWorkflowFolderRequest,
  WorkflowInfo,
  RevokePrivilegesRequest,
  ListTableResponse,
  CreateQualityRuleRequest,
  CreateDataSourceRequest,
  GetResourceGroupMetricsResponse,
  DeleteWorkflowResponse,
  ListDataSourcesRequest,
  OpsWorkflows,
  ProjectRequest,
  WorkflowGeneralTaskParam,
  GetMyCodeMaxPermissionRequest,
  DeleteResourceFolderResponse,
  UpdateTaskRequest,
  KVMap,
  ListResourceFilesResponse,
  ListDownstreamTaskInstancesRequest,
  UpdateProjectRequest,
  DeleteWorkflowRequest,
  ListProjectMembersRequest,
  DeleteDataBackfillPlanAsyncRequest,
  DeleteTriggerWorkflowResponse,
  TriggerTaskRunBrief,
  ListTriggerWorkflowsRequest,
  PauseOpsTasksAsyncRequest,
  TaskConfiguration,
  DependencyTriggerTaskBrief,
  DissociateResourceGroupFromProjectRequest,
  DLCClusterInfo,
  UpdateTriggerWorkflowResult,
  CreateWorkflowRequest,
  TaskSchedulingParameter,
  SubmitTaskRequest,
  RemoveMemberProjectRoleResponse,
  SchedulingParameter,
  UpdateSQLFolderRequest,
  BackfillInstance,
  OpsWorkflow,
  CreateSQLFolderRequest,
  GetOpsTaskResponse,
  UpdateTriggerTaskResponse,
  DeleteQualityRuleGroupRequest,
  ListTriggerTaskInfo,
  SQLStopResult,
  ResourceStatus,
  QualityRule,
  EnableProjectResponse,
  ListCatalogPage,
  CreateProjectMemberRequest,
  DeleteLineageResponse,
  TaskInstanceDetail,
  CreateTaskFolderResult,
  QualityRuleExecResult,
  ProjectUserRole,
  TaskDependDto,
  DeleteWorkflowPermissionsResult,
  SetSuccessTaskInstancesAsyncRequest,
  GetOpsTaskCodeResponse,
  ListWorkflowsResponse,
  CreateProjectResponse,
  ProjectInstanceStatisticsAlarmInfo,
  DeleteProjectResponse,
  QualityRuleFieldConfig,
  TriggerWorkflowResult,
  CodePermissionsResultItem,
  GetTaskVersionResponse,
  GetOpsWorkflowRequest,
  ListTaskVersionsResponse,
  ProjectBrief,
  UpdateOpsTriggerTasksOwnerResponse,
  RevokeDataSourceAuthorizationResponse,
  TaskCode,
  BriefTask,
  UpdateTaskPartiallyResponse,
  UpdateTriggerTaskPartiallyRequest,
  DeleteResourceFileRequest,
  QualitySubscribeReceiver,
  DeleteCodePermissionsRequest,
  SQLScriptConfig,
  CodeFile,
  AddCalcEnginesToProjectRequest,
  CreateWorkflowResult,
  RelateTask,
  QualityThresholdValue,
  KillTriggerWorkflowRunsRequest,
  QualityFieldConfig,
  AuthInfo,
  DeleteCodeFolderRequest,
  CommonQualityOperateResult,
  DeleteResourceFileResult,
  UpdateTaskFolderRequest,
  QualityColumnValueConfig,
  ListOpsWorkflowsResponse,
  DeleteQualityRuleGroupResponse,
  BackfillInstanceCollection,
  CreateSQLFolderResponse,
  ListDownstreamTaskInstancesResponse,
  GetWorkflowRequest,
  ListQualityRuleGroupsTableResponse,
  ListResourceFoldersResponse,
  UpdateResourceGroupResponse,
  CreateTriggerTaskSchedulerConfiguration,
  GetTriggerTaskResponse,
  ListSQLFolderContentsResponse,
  GetTriggerTaskCodeResponse,
  ListWorkflowFoldersRequest,
  GetDataSourceRelatedTasksResponse,
  DeleteWorkflowFolderResponse,
  ListTaskInstancesRequest,
  RerunTaskInstancesAsyncResponse,
  ListUpstreamTriggerTasksRequest,
  ExploreFilePermissionsPage,
  ExploreAuthorizationObject,
  GetTriggerTaskCodeRequest,
  QualityRuleGroupExecStrategy,
  GetTriggerWorkflowRunRequest,
  UpdateWorkflowResult,
  DescribeDataSourceAuthorityResponse,
  AlarmRuleDetail,
  QualityProdSchedulerTask,
  GetTriggerTaskRunResponse,
  UpdateTaskPartiallyRequest,
  GetSQLScriptRequest,
  ExecutorResourceGroupInfo,
  DeleteQualityRuleResponse,
  InstanceExecution,
  UpdateTriggerTaskRequest,
  TaskInstance,
  TriggerWorkflowDetail,
  IntegrationResource,
  DataSource,
  CompareQualityResultItem,
  QualitySqlExpressionTable,
  OpsTaskDepend,
  ListQualityRulesResponse,
  ListTaskInstancesResponse,
  DataSourceResult,
  GetResourcePrivilegeDetailRsp,
  CreateResourceGroupRequest,
  ListTableRequest,
  UpdateResourceGroupRequest,
  DeleteCodeFileRequest,
  UpdateTriggerWorkflowResponse,
  ListOpsAlarmRulesRequest,
  ListTenantRolesRequest,
  UpdateTriggerTaskBrief,
  SecurityFilter,
  GrantMemberProjectRoleResponse,
  QualityRuleTemplate,
  ExploreFileResource,
  JobDto,
  DeleteResourceFileResponse,
  ListDownstreamOpsTasksRequest,
  UpdateOpsTriggerTasksOwnerRequest,
  UpdateCodeFileRequest,
  LineageResource,
  TaskBaseAttribute,
  CreateQualityRuleGroupResultVO,
  ListDataSourcesResponse,
  TimeOutStrategyInfo,
  GetCodeFileRequest,
  ExploreAuthorizationRecycleObject,
  OperateResult,
  ListSchemaPage,
  GetTriggerWorkflowRunResponse,
  RegisterLineageResponse,
  ListTriggerWorkflowRunsResponse,
  ListQualityRuleGroupsResponse,
  CreateCodeFileResponse,
  ListResourceGroupsResponse,
  UpdateResourceFolderRequest,
  UpdateTriggerTaskBaseAttributePart,
  ListTaskInstanceExecutionsRequest,
  StopOpsTasksAsyncResponse,
  ProjectUsersBrief,
  ListLineageRequest,
  ListOpsTasksPage,
  CreateOpsAlarmRuleResponse,
  AuthorizeDataSourceRequest,
  ExploreAuthorizeSubject,
  GetTriggerTaskRunRequest,
  QualityRuleGroupPage,
  SubmitTriggerTaskResponse,
  AuthorizePrivilegesRequest,
  ListQualityRuleGroupExecResultsByPageResponse,
  CreateQualityRuleVO,
  GetSQLFolderRequest,
  TaskFolder,
  AlarmWayWebHook,
  CreateQualityRuleResponse,
  Subject,
  GetResourceFileResponse,
  GetTaskCodeRequest,
  CreateSQLScriptResponse,
  TriggerTaskSchedulerConfiguration,
  TriggerDependencyConfigPage,
  ListLineageResponse,
  CreateTaskSchedulerConfiguration,
  CreateCodeFolderResponse,
  ExecutorResourceGroupData,
  CreateTriggerTaskBaseAttribute,
  LineageProcess,
  DeleteQualityRuleGroupResultVO,
  ListTriggerWorkflowInfo,
  DataBackfill,
  RemoveMemberProjectRoleRequest,
  ListTriggerTaskVersionsRequest,
  RunSQLScriptRequest,
  AssociateResourceGroupToProjectResponse,
  CreateResourceGroupResponse,
  TriggerWorkflowRunBrief,
  QualitySubscribeWebHook,
  GetTriggerTaskRequest,
  DeleteSQLScriptRequest,
  ListTasksResponse,
  UpdateResourceFolderResponse,
  ListCodePermissionsRequest,
  DataSourceFileUpload,
  ListTriggerWorkflowsResponse,
  DeleteDataBackfillPlanAsyncResponse,
  ListSchemaResponse,
  GetCodeFolderResponse,
  DeleteSQLFolderResponse,
  GetTaskVersionRequest,
  GetTableColumnsRequest,
  UpdateSQLFolderResponse,
  ListAlarmMessagesRequest,
  ModifyQualityRuleGroupResultVO,
  ListDatabaseResponse,
  ListSQLScriptRunsResponse,
  GetProjectResponse,
  GetTaskInstanceLogRequest,
  CreateCodeFolderRequest,
  QualityCompareRuleItem,
  CreateTaskFolderRequest,
  ListPermissionsResponse,
  GetMyCodeMaxPermissionResponse,
  ListCatalogRequest,
  CodeStudioFolderResult,
  PrivilegeInfo,
  DeleteTaskResult,
  ExploreFilePrivilegeItem,
  GetResourceFolderRequest,
  AlarmQuietInterval,
  UpdateTaskFolderResponse,
  ResourceGroupSpecification,
  DeleteResourceGroupRequest,
  ListTasksRequest,
  ListDownstreamTriggerTasksRequest,
  UpdateTaskPart,
  ResourceFile,
  QualityRulePage,
  TriggerWorkflowRunResult,
  ExecutionActionBrief,
  GetWorkflowResponse,
  GetTaskResponse,
  CreateSQLScriptRequest,
  UpdateTaskFolderResult,
  DeleteTaskFolderRequest,
  GetAlarmMessageRequest,
  ListCodeFolderContentsRequest,
  ListTaskVersionsRequest,
  OpsWorkflowDetail,
  CreateQualityRuleGroupRequest,
  TableInfo,
  GetTaskInstanceResponse,
  WorkflowSchedulerConfigurationInfo,
  CreateTriggerTaskRequest,
  CreateWorkflowPermissionsRequest,
  ListProjectRolesResponse,
  DependencyConfigPage,
  CodeStudioFileActionResult,
  CreateResourceFileResponse,
  StopSQLScriptRunRequest,
  TaskInstanceExecutions,
  ListAlarmRulesResult,
  EnableProjectRequest,
  ListTaskInstanceExecutionsResponse,
  GetOpsTriggerWorkflowResponse,
  RerunTriggerWorkflowRunAsyncRequest,
  QualityRuleTemplatePage,
  LineageProperty,
  QualityRuleGroup,
  KillTriggerWorkflowRunsResponse,
  CreateTaskResponse,
  CreateWorkflowPermissionsResult,
  CreateCodePermissionsResponse,
  DisableProjectRequest,
  GetTriggerWorkflowResponse,
  DependencyStrategyTask,
  Task,
  CreateTaskBaseAttribute,
  CreateDataReplenishmentPlan,
  GetTableResponse,
  UpdateWorkflowFolderRequest,
  DeleteProjectMemberRequest,
  TriggerTaskDependDto,
  DeleteCodePermissionsResponse,
  AuthorizePrivilegesResponse,
  BatchOperationOpsDto,
  JobExecutionDto,
  CreateTaskFolderResponse,
  ListDownstreamTasksRequest,
  OutTaskParameter,
  DeleteTriggerWorkflowResult,
  ListProcessLineagePage,
  UpdateFolderResult,
  ListSchemaRequest,
  UpdateTriggerWorkflowPartiallyResponse,
  WorkflowDetail,
  DeleteProjectMemberResponse,
  CreateWorkflowFolderRequest,
  ListOpsTriggerWorkflowsRequest,
  CreateResourceFolderRequest,
  MetricData,
  DeleteResourceFolderRequest,
  ListQualityRuleGroupExecResult,
  UpdateCodeFolderResponse,
  ListTaskFoldersRequest,
  UpdateResourceFileRequest,
  ListTriggerWorkflowRunsRequest,
  TaskExtParameter,
  ColumnInfo,
  SubmitTaskResponse,
  ResourceFileItem,
  ListAlarmMessages,
  BindProject,
  ResourceType,
  StartOpsTasksResponse,
  UpdateTaskResponse,
  ResourceFolder,
  UpdateDataSourceRequest,
  QualityRuleGroupsTableVO,
  AssociateResourceGroupToProjectRequest,
  ListOpsWorkflowsRequest,
  CreateWorkflowFolderResponse,
  GetDataSourceRelatedTasksRequest,
  UpdateTriggerTaskBaseAttribute,
  ResourceFolderPage,
  ListDownstreamTasksResponse,
  ListQualityRuleTemplatesRequest,
  AuthorizePrivilegesRsp,
  ListQualityRuleGroupExecResultPage,
  UpdateOpsTasksOwnerResponse,
  DescribeDataSourceAuthorityRequest,
  NotebookSessionInfo,
  ListTaskFoldersResponse,
  ListTenantRolesResponse,
  PageRoles,
  UpdateTaskBrief,
  ListResourceFilesRequest,
  TechnicalMetadata,
  UpdateOpsTasksOwnerRequest,
  UpdateDataSourceResponse,
  GetOpsAsyncJobRequest,
  DeleteCodeFolderResponse,
  TriggerWorkflowInfo,
  ModifyQualityRuleRequest,
  SubjectInfo,
  UpdateResourceFileResult,
  UpdateResourceFileResponse,
  GetOpsAlarmRuleResponse,
  CreateTriggerTaskResponse,
  ResourceNumber,
  CreateProjectRequest,
  ListTriggerTaskVersions,
  InstanceLog,
  OpsAsyncResponse,
  TriggerTaskBrief,
  UpdateWorkflowRequest,
  TrendData,
  ListColumnLineageRequest,
  UpdateOpsAlarmRuleResponse,
  StartTasks,
  OpsAsyncJobDetail,
  ListDownstreamOpsTasksResponse,
  GetProjectRequest,
  ListPermissionsRequest,
  ListSQLScriptRunsRequest,
  CreateDataBackfillPlanRequest,
  UpdateTriggerWorkflowRequest,
  ListProjectRolesRequest,
  GetTaskInstanceRequest,
  ListSQLFolderContentsRequest,
  DeleteWorkflowPermission,
  CreateTaskRequest,
  ListTriggerTasksResponse,
  GetOpsTriggerWorkflowRequest,
  GetDataSourceRequest,
  ListProjectMembersResponse,
  LineageResouce,
  TaskVersionDetail,
  ListAlarmMessagesResponse,
  WorkflowFolderDetail,
  SubmitTriggerTaskRequest,
  GetTaskFolderRequest,
  ListDatabaseRequest,
  RegisterLineageRequest,
  DeleteTaskRequest,
  GetCodeFolderRequest,
  ListCatalogResponse,
  DeleteAlarmRuleResult,
  ListWorkflowFoldersResponse,
  ResourceFolderDetail,
  KillTaskInstancesAsyncResponse,
  ListTaskVersions,
  TaskFolderDetail,
  ListUpstreamTasksRequest,
  ReconciliationStrategyInfo,
  AddCalcEnginesToProjectResponse,
  RevokePrivilegesRsp,
  ModifyQualityRuleGroupRequest,
  EventListener,
  ModifyQualityRuleResponse,
  InstanceExecutionPhase,
  DatasourceRelationTaskInfo,
  UpdateWorkflowResponse,
  ListQualityRuleTemplatesResponse,
  DeleteTriggerTaskResponse,
  QualityTableConfig,
  TriggerTaskVersion,
  UpdateTriggerWorkflowPartiallyRequest,
  ListUpstreamOpsTasksRequest,
  SubmitTaskResult,
  ListWorkflowPermissionsRequest,
  CreateTriggerWorkflowResult,
  DeleteFolderResult,
  ListWorkflowsRequest,
  RevokePrivilegesResponse,
  CodeFileConfig,
  DeleteSQLScriptResponse,
  ListOpsTasksRequest,
  GetSQLScriptResponse,
  CreateCodeFileRequest,
  ChildDependencyConfigPage,
  LineageRelation,
  CreateTaskConfiguration,
  CompareQualityResult,
  RerunTriggerWorkflowRunAsyncResponse,
  TriggerTaskDAGBrief,
  RerunTaskInstancesAsyncRequest,
  ListTaskInfo,
  WorkflowSchedulerConfiguration,
  CreateDataBackfillPlanResponse,
  DataSourceInfo,
  ListCodePermissionsResponse,
  DeleteWorkflowPermissionsRequest,
  MonitorWhiteTask,
  TriggerTaskLinkBrief,
  CreateWorkflowResponse,
  DeleteTaskResponse,
  SchemaInfo,
  RevokeDataSourceAuthorizationRequest,
  DissociateResourceGroupFromProjectResponse,
  AlarmGroup,
  GrantMemberProjectRoleRequest,
  TriggerTask,
  ListWorkflowInfo,
  GetTriggerTaskVersionResponse,
  GetOpsAsyncJobResponse,
  DeleteSQLFolderRequest,
  CreateTriggerWorkflowRequest,
  Project,
  ListDatabasePage,
  ListResourceGroupsRequest,
  GetResourceFolderResponse,
  WorkflowFolder,
  GetAlarmMessageResponse,
  UpdateTaskBaseAttribute,
  GetOpsTaskCodeRequest,
  GetTaskFolderResponse,
  GetDataBackfillPlanRequest,
  ListProcessLineageRequest,
  UpdateProjectResponse,
  TriggerWorkflowBrief,
  TriggerTaskBaseAttribute,
  DeleteProjectRequest,
  CreateResourceFileRequest,
  WorkflowPermission,
  DeleteTaskFolderResponse,
  DeleteWorkflowPermissionsResponse,
  ListLineagePage,
  GetOpsAlarmRuleRequest,
  StopSQLScriptRunResponse,
  ListOpsTasksResponse,
  ListProjectsRequest,
  ListUpstreamTriggerTasksResponse,
  BizStateEnumInfoBrief,
  CreateProjectMemberResponse,
  ListOpsAlarmRulesResponse,
  UpdateOpsAlarmRuleRequest,
  ParentDependencyConfigPage,
  ListUpstreamOpsTasksResponse,
  CreateTriggerWorkflowResponse,
  PauseOpsTasksAsyncResponse,
  GetSQLFolderResponse,
  LineagePair,
  DeleteOpsAlarmRuleResponse,
  GetTaskRequest,
  AlarmMessage,
  StartOpsTasksRequest,
  GetOpsTaskRequest,
  UpdateTaskResult,
  GetResourceFileRequest,
  UpdateTasksOwner,
  TaskInstancePage,
  ListTriggerTasksRequest,
  ListColumnLineageResponse,
  SqlCreateResult,
  DeleteQualityRuleRequest,
  CreateAlarmRuleData,
  QualityRuleGroupSubscribe,
  SQLScript,
  CreateResourceFileResult,
  AuthorizeDataSourceResponse,
  KVPair,
  CreateDataSourceResponse,
  GetWorkflowFolderResponse,
  CreateQualityRuleGroupResponse,
  GetMyWorkflowMaxPermissionRequest,
  CodeStudioMaxPermission,
  GetTriggerTaskVersionRequest,
  GetTriggerWorkflowRequest,
  CodeFolderNode,
  ResourceGroupMetrics,
  UpdateSQLScriptResponse,
  CreateFolderResult,
  CreateTriggerTaskConfiguration,
  CreateWorkflowPermissionsResponse,
  LineageNodeInfo,
  ResourcePrivilegeDetail,
  QualityRuleGroupTableV2,
  CatalogInfo,
  ListUpstreamTasksResponse,
  DeleteWorkflowFolderRequest,
  RunSQLScriptResponse,
  CreateProjectResult,
  GetTableColumnsResponse,
  ListQualityRulesRequest,
  DeleteOpsAlarmRuleRequest,
  GetTaskCodeResponse,
  ModifyQualityRuleGroupResponse,
  CreateCodePermissionsRequest,
  SQLContentActionResult,
  DeleteTriggerWorkflowRequest,
  ProjectResult,
  TriggerWorkflowTaskRunDetailBrief,
  ListDataBackfillInstancesResponse,
  ModifyAlarmRuleResult,
  DisableProjectResponse,
  DeleteLineageRequest,
  CreateOpsAlarmRuleRequest,
  TaskDataRegistry,
  QualityRuleInfo,
  SetSuccessTaskInstancesAsyncResponse,
  UpdateSQLScriptRequest,
  ParamInfo,
  ListQualityRuleGroupsTableRequest,
  UpdateTriggerTaskPart,
  DeleteTriggerTaskRequest,
  DeleteDataSourceResponse,
  InTaskParameter,
  ListResourceFoldersRequest,
  AuthorizeResult,
  GetDataSourceResponse,
  StopOpsTasksAsyncRequest,
  ListUpstreamTaskInstancesResponse,
  GetDataBackfillPlanResponse,
  KillTaskInstancesAsyncRequest,
  ListDataBackfillInstancesRequest,
  CodeStudioFolderActionResult,
  ListQualityRuleGroupsRequest,
  TriggerTaskVersionDetail,
  UpdateTriggerTaskPartiallyResponse,
  Filter,
  GetResourceGroupMetricsRequest,
  BusinessMetadata,
  ListProjectsResponse,
  DeleteWorkflowResult,
  WorkflowMaxPermission,
  TaskSchedulerConfiguration,
  QualitySqlExpression,
  QualityRuleCreateResult,
  UpdateWorkflowFolderResponse,
  DeleteDataSourceRequest,
  UpdateTaskBaseAttributePart,
  PrivilegeResource,
  AlarmRuleData,
  UpdateCodeFileResponse,
  NotificationFatigue,
  SQLFolderNode,
  DatabaseInfo,
  WorkflowTriggerConfig,
  TaskVersion,
  GetCodeFileResponse,
  ListUpstreamTaskInstancesRequest,
  WorkflowFolderPage,
  TaskCodeResult,
  DataBackfillRange,
  QualityRuleGroupConfig,
  ListTriggerTaskVersionsResponse,
  DeleteCodeFileResponse,
  QualityRuleGroupResult,
  TaskOpsInfo,
  DeleteTaskFolderResult,
  UpdateTriggerWorkflowPartially,
  DeleteResourceGroupResponse,
  ListTablePage,
  GetTaskInstanceLogResponse,
  ListDownstreamTriggerTasksResponse,
  QualityCompareRule,
  ListCodeFolderContentsResponse,
  GetMyWorkflowMaxPermissionResponse,
  OrderField,
  DependencyTaskBrief,
  Page,
  TriggerTaskConfiguration,
  UpdateCodeFolderRequest,
  ResourceFilePage,
  ResourceResult,
  GetOpsWorkflowResponse,
  DataSourceStatus,
  ListQualityRuleGroupExecResultsByPageRequest,
  GetTableRequest,
  CreateResourceFolderResponse,
  TaskFolderPage,
  WorkflowPermissionPage,
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
   * 获取实例直接上游
   */
  async ListDownstreamTaskInstances(
    req: ListDownstreamTaskInstancesRequest,
    cb?: (error: string, rep: ListDownstreamTaskInstancesResponse) => void
  ): Promise<ListDownstreamTaskInstancesResponse> {
    return this.request("ListDownstreamTaskInstances", req, cb)
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
   * 分页查询质量规则
   */
  async ListQualityRules(
    req: ListQualityRulesRequest,
    cb?: (error: string, rep: ListQualityRulesResponse) => void
  ): Promise<ListQualityRulesResponse> {
    return this.request("ListQualityRules", req, cb)
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
   * 查询任务文件夹列表
   */
  async ListTaskFolders(
    req: ListTaskFoldersRequest,
    cb?: (error: string, rep: ListTaskFoldersResponse) => void
  ): Promise<ListTaskFoldersResponse> {
    return this.request("ListTaskFolders", req, cb)
  }

  /**
   * 查询工作流任务详情
   */
  async GetOpsTriggerWorkflow(
    req: GetOpsTriggerWorkflowRequest,
    cb?: (error: string, rep: GetOpsTriggerWorkflowResponse) => void
  ): Promise<GetOpsTriggerWorkflowResponse> {
    return this.request("GetOpsTriggerWorkflow", req, cb)
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
   * 创建监控任务
   */
  async ModifyQualityRuleGroup(
    req: ModifyQualityRuleGroupRequest,
    cb?: (error: string, rep: ModifyQualityRuleGroupResponse) => void
  ): Promise<ModifyQualityRuleGroupResponse> {
    return this.request("ModifyQualityRuleGroup", req, cb)
  }

  /**
   * 删除CodeStudio实体权限
   */
  async DeleteCodePermissions(
    req: DeleteCodePermissionsRequest,
    cb?: (error: string, rep: DeleteCodePermissionsResponse) => void
  ): Promise<DeleteCodePermissionsResponse> {
    return this.request("DeleteCodePermissions", req, cb)
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
   * 提交工作流调度任务
   */
  async SubmitTriggerTask(
    req: SubmitTriggerTaskRequest,
    cb?: (error: string, rep: SubmitTriggerTaskResponse) => void
  ): Promise<SubmitTriggerTaskResponse> {
    return this.request("SubmitTriggerTask", req, cb)
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
   * 删除工作流调度任务
   */
  async DeleteTriggerTask(
    req: DeleteTriggerTaskRequest,
    cb?: (error: string, rep: DeleteTriggerTaskResponse) => void
  ): Promise<DeleteTriggerTaskResponse> {
    return this.request("DeleteTriggerTask", req, cb)
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
   * 获取任务详情接口
   */
  async GetTriggerTask(
    req: GetTriggerTaskRequest,
    cb?: (error: string, rep: GetTriggerTaskResponse) => void
  ): Promise<GetTriggerTaskResponse> {
    return this.request("GetTriggerTask", req, cb)
  }

  /**
   * 删除工作流
   */
  async DeleteTriggerWorkflow(
    req: DeleteTriggerWorkflowRequest,
    cb?: (error: string, rep: DeleteTriggerWorkflowResponse) => void
  ): Promise<DeleteTriggerWorkflowResponse> {
    return this.request("DeleteTriggerWorkflow", req, cb)
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
   * 授权数据源
   */
  async AuthorizeDataSource(
    req: AuthorizeDataSourceRequest,
    cb?: (error: string, rep: AuthorizeDataSourceResponse) => void
  ): Promise<AuthorizeDataSourceResponse> {
    return this.request("AuthorizeDataSource", req, cb)
  }

  /**
   * 查询当前用户对工作流文件夹的递归最大权限
   */
  async GetMyWorkflowMaxPermission(
    req: GetMyWorkflowMaxPermissionRequest,
    cb?: (error: string, rep: GetMyWorkflowMaxPermissionResponse) => void
  ): Promise<GetMyWorkflowMaxPermissionResponse> {
    return this.request("GetMyWorkflowMaxPermission", req, cb)
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
   * 查询任务执行详情
   */
  async GetTriggerTaskRun(
    req: GetTriggerTaskRunRequest,
    cb?: (error: string, rep: GetTriggerTaskRunResponse) => void
  ): Promise<GetTriggerTaskRunResponse> {
    return this.request("GetTriggerTaskRun", req, cb)
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
   * 删除SQL文件夹
   */
  async DeleteSQLFolder(
    req: DeleteSQLFolderRequest,
    cb?: (error: string, rep: DeleteSQLFolderResponse) => void
  ): Promise<DeleteSQLFolderResponse> {
    return this.request("DeleteSQLFolder", req, cb)
  }

  /**
   * 查询文件夹详情
   */
  async GetWorkflowFolder(
    req: GetWorkflowFolderRequest,
    cb?: (error: string, rep: GetWorkflowFolderResponse) => void
  ): Promise<GetWorkflowFolderResponse> {
    return this.request("GetWorkflowFolder", req, cb)
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
   * 数据开发配置权限
   */
  async CreateWorkflowPermissions(
    req: CreateWorkflowPermissionsRequest,
    cb?: (error: string, rep: CreateWorkflowPermissionsResponse) => void
  ): Promise<CreateWorkflowPermissionsResponse> {
    return this.request("CreateWorkflowPermissions", req, cb)
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
   * 删除质量规则接口
   */
  async DeleteQualityRule(
    req: DeleteQualityRuleRequest,
    cb?: (error: string, rep: DeleteQualityRuleResponse) => void
  ): Promise<DeleteQualityRuleResponse> {
    return this.request("DeleteQualityRule", req, cb)
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
   * 查询任务文件夹详情
   */
  async GetTaskFolder(
    req: GetTaskFolderRequest,
    cb?: (error: string, rep: GetTaskFolderResponse) => void
  ): Promise<GetTaskFolderResponse> {
    return this.request("GetTaskFolder", req, cb)
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
   * 查询任务执行详情
   */
  async UpdateOpsTriggerTasksOwner(
    req: UpdateOpsTriggerTasksOwnerRequest,
    cb?: (error: string, rep: UpdateOpsTriggerTasksOwnerResponse) => void
  ): Promise<UpdateOpsTriggerTasksOwnerResponse> {
    return this.request("UpdateOpsTriggerTasksOwner", req, cb)
  }

  /**
   * 更新任务接口
   */
  async UpdateTaskPartially(
    req: UpdateTaskPartiallyRequest,
    cb?: (error: string, rep: UpdateTaskPartiallyResponse) => void
  ): Promise<UpdateTaskPartiallyResponse> {
    return this.request("UpdateTaskPartially", req, cb)
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
   * 任务保存版本列表
   */
  async ListTriggerTaskVersions(
    req: ListTriggerTaskVersionsRequest,
    cb?: (error: string, rep: ListTriggerTaskVersionsResponse) => void
  ): Promise<ListTriggerTaskVersionsResponse> {
    return this.request("ListTriggerTaskVersions", req, cb)
  }

  /**
   * 更新质量规则接口
   */
  async ModifyQualityRule(
    req: ModifyQualityRuleRequest,
    cb?: (error: string, rep: ModifyQualityRuleResponse) => void
  ): Promise<ModifyQualityRuleResponse> {
    return this.request("ModifyQualityRule", req, cb)
  }

  /**
   * 获取任务直接下游详情
   */
  async ListDownstreamTriggerTasks(
    req: ListDownstreamTriggerTasksRequest,
    cb?: (error: string, rep: ListDownstreamTriggerTasksResponse) => void
  ): Promise<ListDownstreamTriggerTasksResponse> {
    return this.request("ListDownstreamTriggerTasks", req, cb)
  }

  /**
   * 更新任务接口
   */
  async UpdateTriggerTaskPartially(
    req: UpdateTriggerTaskPartiallyRequest,
    cb?: (error: string, rep: UpdateTriggerTaskPartiallyResponse) => void
  ): Promise<UpdateTriggerTaskPartiallyResponse> {
    return this.request("UpdateTriggerTaskPartially", req, cb)
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
   * 获取工作流调度任务代码
   */
  async GetTriggerTaskCode(
    req: GetTriggerTaskCodeRequest,
    cb?: (error: string, rep: GetTriggerTaskCodeResponse) => void
  ): Promise<GetTriggerTaskCodeResponse> {
    return this.request("GetTriggerTaskCode", req, cb)
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
   * 创建质量规则接口
   */
  async CreateQualityRule(
    req: CreateQualityRuleRequest,
    cb?: (error: string, rep: CreateQualityRuleResponse) => void
  ): Promise<CreateQualityRuleResponse> {
    return this.request("CreateQualityRule", req, cb)
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
   * 调度实例详情
   */
  async ListTaskInstanceExecutions(
    req: ListTaskInstanceExecutionsRequest,
    cb?: (error: string, rep: ListTaskInstanceExecutionsResponse) => void
  ): Promise<ListTaskInstanceExecutionsResponse> {
    return this.request("ListTaskInstanceExecutions", req, cb)
  }

  /**
   * 拉取任务版本列表
   */
  async GetTriggerTaskVersion(
    req: GetTriggerTaskVersionRequest,
    cb?: (error: string, rep: GetTriggerTaskVersionResponse) => void
  ): Promise<GetTriggerTaskVersionResponse> {
    return this.request("GetTriggerTaskVersion", req, cb)
  }

  /**
   * 规则组执行结果分页查询接口
   */
  async ListQualityRuleGroupExecResultsByPage(
    req: ListQualityRuleGroupExecResultsByPageRequest,
    cb?: (error: string, rep: ListQualityRuleGroupExecResultsByPageResponse) => void
  ): Promise<ListQualityRuleGroupExecResultsByPageResponse> {
    return this.request("ListQualityRuleGroupExecResultsByPage", req, cb)
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
   * 设置告警规则
   */
  async CreateOpsAlarmRule(
    req: CreateOpsAlarmRuleRequest,
    cb?: (error: string, rep: CreateOpsAlarmRuleResponse) => void
  ): Promise<CreateOpsAlarmRuleResponse> {
    return this.request("CreateOpsAlarmRule", req, cb)
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
   * 查询工作流运行
   */
  async ListTriggerWorkflowRuns(
    req: ListTriggerWorkflowRunsRequest,
    cb?: (error: string, rep: ListTriggerWorkflowRunsResponse) => void
  ): Promise<ListTriggerWorkflowRunsResponse> {
    return this.request("ListTriggerWorkflowRuns", req, cb)
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
   * 获取任务直接上游
   */
  async ListUpstreamTriggerTasks(
    req: ListUpstreamTriggerTasksRequest,
    cb?: (error: string, rep: ListUpstreamTriggerTasksResponse) => void
  ): Promise<ListUpstreamTriggerTasksResponse> {
    return this.request("ListUpstreamTriggerTasks", req, cb)
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
   * 删除监控任务
   */
  async DeleteQualityRuleGroup(
    req: DeleteQualityRuleGroupRequest,
    cb?: (error: string, rep: DeleteQualityRuleGroupResponse) => void
  ): Promise<DeleteQualityRuleGroupResponse> {
    return this.request("DeleteQualityRuleGroup", req, cb)
  }

  /**
   * 查询工作流授权权限
   */
  async ListWorkflowPermissions(
    req: ListWorkflowPermissionsRequest,
    cb?: (error: string, rep: ListWorkflowPermissionsResponse) => void
  ): Promise<ListWorkflowPermissionsResponse> {
    return this.request("ListWorkflowPermissions", req, cb)
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
   * 查看CodeStudio实体权限
   */
  async ListCodePermissions(
    req: ListCodePermissionsRequest,
    cb?: (error: string, rep: ListCodePermissionsResponse) => void
  ): Promise<ListCodePermissionsResponse> {
    return this.request("ListCodePermissions", req, cb)
  }

  /**
   * 查询资源文件文件夹详情
   */
  async GetResourceFolder(
    req: GetResourceFolderRequest,
    cb?: (error: string, rep: GetResourceFolderResponse) => void
  ): Promise<GetResourceFolderResponse> {
    return this.request("GetResourceFolder", req, cb)
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
   * 删除项目
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
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
   * 创建任务接口
   */
  async CreateTriggerTask(
    req: CreateTriggerTaskRequest,
    cb?: (error: string, rep: CreateTriggerTaskResponse) => void
  ): Promise<CreateTriggerTaskResponse> {
    return this.request("CreateTriggerTask", req, cb)
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
   * 【过滤条件】 {模板名称Name，查询使用Keyword进行模糊匹配} {模板类型type，1.系统模板 2.自定义模板} {质量检测维度QualityDims, 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性} 【排序字段】 { 引用数排序类型CitationOrderType，根据引用数量排序 ASC DESC}
   */
  async ListQualityRuleTemplates(
    req: ListQualityRuleTemplatesRequest,
    cb?: (error: string, rep: ListQualityRuleTemplatesResponse) => void
  ): Promise<ListQualityRuleTemplatesResponse> {
    return this.request("ListQualityRuleTemplates", req, cb)
  }

  /**
   * 查看当前用户对CodeStudio实体的最大权限
   */
  async GetMyCodeMaxPermission(
    req: GetMyCodeMaxPermissionRequest,
    cb?: (error: string, rep: GetMyCodeMaxPermissionResponse) => void
  ): Promise<GetMyCodeMaxPermissionResponse> {
    return this.request("GetMyCodeMaxPermission", req, cb)
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
   * 查询监控列表
   */
  async ListQualityRuleGroupsTable(
    req: ListQualityRuleGroupsTableRequest,
    cb?: (error: string, rep: ListQualityRuleGroupsTableResponse) => void
  ): Promise<ListQualityRuleGroupsTableResponse> {
    return this.request("ListQualityRuleGroupsTable", req, cb)
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
   * 获取工作流信息
   */
  async GetTriggerWorkflow(
    req: GetTriggerWorkflowRequest,
    cb?: (error: string, rep: GetTriggerWorkflowResponse) => void
  ): Promise<GetTriggerWorkflowResponse> {
    return this.request("GetTriggerWorkflow", req, cb)
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
   * Catalog模式下授权回收
   */
  async RevokePrivileges(
    req: RevokePrivilegesRequest,
    cb?: (error: string, rep: RevokePrivilegesResponse) => void
  ): Promise<RevokePrivilegesResponse> {
    return this.request("RevokePrivileges", req, cb)
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
   * 获取资产数据库Schema信息
   */
  async ListSchema(
    req: ListSchemaRequest,
    cb?: (error: string, rep: ListSchemaResponse) => void
  ): Promise<ListSchemaResponse> {
    return this.request("ListSchema", req, cb)
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
   * 创建监控任务
   */
  async CreateQualityRuleGroup(
    req: CreateQualityRuleGroupRequest,
    cb?: (error: string, rep: CreateQualityRuleGroupResponse) => void
  ): Promise<CreateQualityRuleGroupResponse> {
    return this.request("CreateQualityRuleGroup", req, cb)
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
   * 配置CodeStudio实体权限
   */
  async CreateCodePermissions(
    req: CreateCodePermissionsRequest,
    cb?: (error: string, rep: CreateCodePermissionsResponse) => void
  ): Promise<CreateCodePermissionsResponse> {
    return this.request("CreateCodePermissions", req, cb)
  }

  /**
   * 查询任务分页信息
   */
  async ListTriggerTasks(
    req: ListTriggerTasksRequest,
    cb?: (error: string, rep: ListTriggerTasksResponse) => void
  ): Promise<ListTriggerTasksResponse> {
    return this.request("ListTriggerTasks", req, cb)
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
   * 查询工作流列表
   */
  async ListTriggerWorkflows(
    req: ListTriggerWorkflowsRequest,
    cb?: (error: string, rep: ListTriggerWorkflowsResponse) => void
  ): Promise<ListTriggerWorkflowsResponse> {
    return this.request("ListTriggerWorkflows", req, cb)
  }

  /**
   * 删除补录计划
   */
  async DeleteDataBackfillPlanAsync(
    req: DeleteDataBackfillPlanAsyncRequest,
    cb?: (error: string, rep: DeleteDataBackfillPlanAsyncResponse) => void
  ): Promise<DeleteDataBackfillPlanAsyncResponse> {
    return this.request("DeleteDataBackfillPlanAsync", req, cb)
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
   * 获取任务直接上游
   */
  async ListUpstreamOpsTasks(
    req: ListUpstreamOpsTasksRequest,
    cb?: (error: string, rep: ListUpstreamOpsTasksResponse) => void
  ): Promise<ListUpstreamOpsTasksResponse> {
    return this.request("ListUpstreamOpsTasks", req, cb)
  }

  /**
   * 查看数据源权限
   */
  async DescribeDataSourceAuthority(
    req: DescribeDataSourceAuthorityRequest,
    cb?: (error: string, rep: DescribeDataSourceAuthorityResponse) => void
  ): Promise<DescribeDataSourceAuthorityResponse> {
    return this.request("DescribeDataSourceAuthority", req, cb)
  }

  /**
   * 查询工作流列表
   */
  async ListOpsTriggerWorkflows(
    req: ListOpsTriggerWorkflowsRequest,
    cb?: (error: string, rep: ListOpsTriggerWorkflowsResponse) => void
  ): Promise<ListOpsTriggerWorkflowsResponse> {
    return this.request("ListOpsTriggerWorkflows", req, cb)
  }

  /**
   * 删除数据开发任务文件夹
   */
  async DeleteTaskFolder(
    req: DeleteTaskFolderRequest,
    cb?: (error: string, rep: DeleteTaskFolderResponse) => void
  ): Promise<DeleteTaskFolderResponse> {
    return this.request("DeleteTaskFolder", req, cb)
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
   * 获取表字段血缘信息
   */
  async ListColumnLineage(
    req: ListColumnLineageRequest,
    cb?: (error: string, rep: ListColumnLineageResponse) => void
  ): Promise<ListColumnLineageResponse> {
    return this.request("ListColumnLineage", req, cb)
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
   * 更新任务接口
   */
  async UpdateTriggerTask(
    req: UpdateTriggerTaskRequest,
    cb?: (error: string, rep: UpdateTriggerTaskResponse) => void
  ): Promise<UpdateTriggerTaskResponse> {
    return this.request("UpdateTriggerTask", req, cb)
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
     * 【过滤条件】
{表idTableId,支持匹配}       {任务负责人Operator,支持匹配}    
【必要字段】
{数据来源TableId}
     */
  async ListQualityRuleGroups(
    req: ListQualityRuleGroupsRequest,
    cb?: (error: string, rep: ListQualityRuleGroupsResponse) => void
  ): Promise<ListQualityRuleGroupsResponse> {
    return this.request("ListQualityRuleGroups", req, cb)
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
   * 更新工作流（包括工作流基本信息与工作流参数）
   */
  async UpdateTriggerWorkflow(
    req: UpdateTriggerWorkflowRequest,
    cb?: (error: string, rep: UpdateTriggerWorkflowResponse) => void
  ): Promise<UpdateTriggerWorkflowResponse> {
    return this.request("UpdateTriggerWorkflow", req, cb)
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
   * 查询脚本详情
   */
  async GetSQLScript(
    req: GetSQLScriptRequest,
    cb?: (error: string, rep: GetSQLScriptResponse) => void
  ): Promise<GetSQLScriptResponse> {
    return this.request("GetSQLScript", req, cb)
  }

  /**
   * 更新工作流（包括工作流基本信息与工作流参数）
   */
  async UpdateTriggerWorkflowPartially(
    req: UpdateTriggerWorkflowPartiallyRequest,
    cb?: (error: string, rep: UpdateTriggerWorkflowPartiallyResponse) => void
  ): Promise<UpdateTriggerWorkflowPartiallyResponse> {
    return this.request("UpdateTriggerWorkflowPartially", req, cb)
  }

  /**
   * 终止运行
   */
  async KillTriggerWorkflowRuns(
    req: KillTriggerWorkflowRunsRequest,
    cb?: (error: string, rep: KillTriggerWorkflowRunsResponse) => void
  ): Promise<KillTriggerWorkflowRunsResponse> {
    return this.request("KillTriggerWorkflowRuns", req, cb)
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
   * 重跑运行
   */
  async RerunTriggerWorkflowRunAsync(
    req: RerunTriggerWorkflowRunAsyncRequest,
    cb?: (error: string, rep: RerunTriggerWorkflowRunAsyncResponse) => void
  ): Promise<RerunTriggerWorkflowRunAsyncResponse> {
    return this.request("RerunTriggerWorkflowRunAsync", req, cb)
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
   * 创建文件夹
   */
  async CreateTaskFolder(
    req: CreateTaskFolderRequest,
    cb?: (error: string, rep: CreateTaskFolderResponse) => void
  ): Promise<CreateTaskFolderResponse> {
    return this.request("CreateTaskFolder", req, cb)
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
   * 查询工作流任务详情
   */
  async GetTriggerWorkflowRun(
    req: GetTriggerWorkflowRunRequest,
    cb?: (error: string, rep: GetTriggerWorkflowRunResponse) => void
  ): Promise<GetTriggerWorkflowRunResponse> {
    return this.request("GetTriggerWorkflowRun", req, cb)
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
   * 回收数据源权限
   */
  async RevokeDataSourceAuthorization(
    req: RevokeDataSourceAuthorizationRequest,
    cb?: (error: string, rep: RevokeDataSourceAuthorizationResponse) => void
  ): Promise<RevokeDataSourceAuthorizationResponse> {
    return this.request("RevokeDataSourceAuthorization", req, cb)
  }

  /**
   * 更新任务文件夹
   */
  async UpdateTaskFolder(
    req: UpdateTaskFolderRequest,
    cb?: (error: string, rep: UpdateTaskFolderResponse) => void
  ): Promise<UpdateTaskFolderResponse> {
    return this.request("UpdateTaskFolder", req, cb)
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
   * 删除工作流文件夹权限
   */
  async DeleteWorkflowPermissions(
    req: DeleteWorkflowPermissionsRequest,
    cb?: (error: string, rep: DeleteWorkflowPermissionsResponse) => void
  ): Promise<DeleteWorkflowPermissionsResponse> {
    return this.request("DeleteWorkflowPermissions", req, cb)
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
   * Catalog模式下授权
   */
  async AuthorizePrivileges(
    req: AuthorizePrivilegesRequest,
    cb?: (error: string, rep: AuthorizePrivilegesResponse) => void
  ): Promise<AuthorizePrivilegesResponse> {
    return this.request("AuthorizePrivileges", req, cb)
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
   * 创建工作流
   */
  async CreateTriggerWorkflow(
    req: CreateTriggerWorkflowRequest,
    cb?: (error: string, rep: CreateTriggerWorkflowResponse) => void
  ): Promise<CreateTriggerWorkflowResponse> {
    return this.request("CreateTriggerWorkflow", req, cb)
  }

  /**
   * 获取可授权权限详情
   */
  async ListPermissions(
    req: ListPermissionsRequest,
    cb?: (error: string, rep: ListPermissionsResponse) => void
  ): Promise<ListPermissionsResponse> {
    return this.request("ListPermissions", req, cb)
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

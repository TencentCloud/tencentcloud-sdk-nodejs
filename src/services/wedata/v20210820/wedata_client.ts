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
  DescribeEventConsumeTasksResponse,
  CreateRuleTemplateResponse,
  AlarmInfo,
  DescribeBatchOperateTaskPage,
  DescribeIntegrationStatisticsResponse,
  UnlockIntegrationTaskResponse,
  SubmitTaskTestRunResponse,
  DescribeStreamTaskLogListRequest,
  GovDatasourceInfo,
  DescribeIntegrationNodeResponse,
  LogContentInfo,
  ModifyIntegrationTaskRequest,
  DescribeRuleDimStatResponse,
  RegisterEventListenerResponse,
  DescribeTaskAlarmRegulationsResponse,
  ColumnBasicInfo,
  DescribeWorkflowInfoByIdRequest,
  CreateDataSourceRequest,
  UserFileDTONew,
  IntegrationNodeSchemaMapping,
  DescribeTrendStatResponse,
  DescribeRealTimeTaskSpeedRequest,
  UpdateDataModelRegistryInfoRequest,
  BatchTaskOperateNew,
  DescribeRuleDimStatRequest,
  DescribeRuleTemplatesResponse,
  DeleteDsFolderResponse,
  CreateIntegrationNodeResponse,
  TaskInnerInfo,
  GetCosTokenResponse,
  CreateDsFolderResponse,
  UserFileInfo,
  FreezeOpsTasksRequest,
  InstanceOpsInfoPage,
  DescribeRulesResponse,
  WorkFlowExecuteDto,
  RecordsSpeed,
  ColumnLineageInfo,
  TaskLineageInfoPair,
  JudgeResourceFileResponse,
  DataServicePublishedApiListFilter,
  SubmitTaskRequest,
  DescribeTableMetasRequest,
  RuleExecResultDetail,
  DataSourceInfoPage,
  OpsTaskInfoPage,
  DescribeRuleGroupExecResultsByPageRequest,
  EventCaseAuditLogOptDto,
  DescribeTableLineageRequest,
  KillOpsMakePlanInstancesRequest,
  AddProjectUserRoleResponse,
  BatchResumeIntegrationTasksResponse,
  DescribeFieldBasicInfoResponse,
  ColumnItem,
  RuleGroupExecResult,
  AlarmEventInfo,
  DescribeTaskLineageRequest,
  BytesSpeed,
  CheckTaskNameExistRequest,
  ThresholdValue,
  DescribeFunctionKindsRequest,
  DescribeFunctionKindsResponse,
  DescribeInstanceDetailInfoResponse,
  DescribeTemplateDimCountRequest,
  ModifyIntegrationTaskResponse,
  DescribeDataSourceListRequest,
  DescribeInstanceByCycleResponse,
  DataServiceRequestParam,
  DataSourceEnvInfo,
  DescribeDataCheckStatRequest,
  TablePropertyScore,
  GetOfflineInstanceListRequest,
  TaskTypeMap,
  InstanceLifeDetailDto,
  Workflow,
  DescribeRuleExecResultsRequest,
  InstanceDownloadLogInfo,
  EventCaseDTO,
  TableScoreStatisticsInfo,
  InstanceOpsDto,
  DescribeDutyScheduleDetailsRequest,
  SubmitWorkflowResponse,
  TriggerEventRequest,
  WorkflowTaskCountOpsDto,
  StageCloudApiRequest,
  DescribeDependOpsTasksRequest,
  RolePrivilege,
  RuleGroupTable,
  DescribeInstanceLogRequest,
  DescribeRuleGroupSubscriptionResponse,
  BaseClusterInfo,
  DescribeIntegrationStatisticsTaskStatusTrendResponse,
  DeleteResourceFileRequest,
  SaveCustomFunctionRequest,
  DescribeSchedulerTaskTypeCntRequest,
  MakePlanTaskOpsDto,
  ProjectUserRole,
  RuleGroupExecStrategy,
  ModifyWorkflowScheduleRequest,
  CreateDsFolderRequest,
  RegisterEventRequest,
  Property,
  MakePlanOpsDtoCollection,
  DescribeTableMetasResponse,
  UploadContentResponse,
  UploadResourceRequest,
  RuleExecLog,
  AiOpsEventListenerDTO,
  DescribeRuleGroupsByPageRequest,
  FolderDsDto,
  BatchDeleteIntegrationTasksResponse,
  SearchConditionInstanceNew,
  DescribeTaskTableMetricOverviewResponse,
  BatchRerunIntegrationTaskInstancesRequest,
  DescribeWorkflowTaskCountResponse,
  TaskTag,
  TaskTypeCnt,
  ExtResourceFlagDto,
  DescribeTopTableStatRequest,
  SearchCondition,
  Rule,
  AddProjectUserRoleRequest,
  ModifyRuleGroupSubscriptionRequest,
  DescribeDataSourceListResponse,
  AgentStatus,
  DescribeInstanceLogDetailRequest,
  BatchSuspendIntegrationTasksRequest,
  CreateAndDDLSupport,
  DescribeDrInstancePageResponse,
  MoveTasksToFolderRequest,
  OrderFields,
  MoveTasksToFolderResponse,
  UpdateWorkflowOwnerRequest,
  DescribeSchedulerTaskTypeCntResponse,
  ProdSchedulerTask,
  DeleteCustomFunctionResponse,
  RulePage,
  DimensionScoreInfo,
  DescribeTaskScriptResponse,
  CollectionInstanceOpsDto,
  DrInstanceOpsDtoPage,
  TableLineageInfo,
  DescribeSchedulerInstanceStatusResponse,
  CountOpsInstanceStateRequest,
  EventCaseOpsDto,
  CreateTaskVersionDsResponse,
  InstanceNodeInfo,
  BatchUpdateIntegrationTasksRequest,
  BatchModifyOpsOwnersRequest,
  ModifyTaskNameResponse,
  BatchDeleteOpsTasksRequest,
  GetCosTokenRequest,
  WorkflowExtOpsDto,
  LineageParamRecord,
  BatchResult,
  StartTaskInfo,
  DescribeIntegrationStatisticsInstanceTrendResponse,
  DescribeInstanceLogListRequest,
  IntegrationNodeInfo,
  DescribeRuleGroupResponse,
  DeleteDataSourcesResponse,
  DescribeBatchOperateTaskDTO,
  ModifyTaskLinksRequest,
  DescribeOpsMakePlansResponse,
  EventCaseConsumeLogOptDtoCollection,
  DeleteFileRequest,
  DeleteDataSourcesRequest,
  ModifyTaskAlarmRegularRequest,
  SubmitSqlTaskResponse,
  DescribeColumnsMetaRequest,
  DescribeOrganizationalFunctionsRequest,
  DescribeRuleTemplateResponse,
  CreateDataModelResponse,
  DescribeDependTaskListsRequest,
  DatabaseMeta,
  DescribeAllByFolderNewRequest,
  DescribeTaskRunHistoryResponse,
  BatchStopWorkflowsByIdsRequest,
  DescribeDutyScheduleListResponse,
  CommitIntegrationTaskRequest,
  DescribeTableInfoListRequest,
  DescribeQualityScoreRequest,
  RunForceSucScheduleInstancesResponse,
  CommitIntegrationTaskResponse,
  Apply,
  IntegrationTaskInfo,
  DeleteResourceFilesRequest,
  DeleteResourceFileResponse,
  SubmitTaskResponse,
  ModifyApproveStatusResponse,
  DescribeAlarmEventsResponse,
  DescribeInstanceLogListResponse,
  RuleGroup,
  DescribeTableQualityDetailsRequest,
  DescribeScheduleInstancesResponse,
  DeleteProjectParamDsResponse,
  DescribeTablePartitionsRequest,
  DescribeOpsWorkflowsRequest,
  CreateOfflineTaskResponse,
  DescribeColumnLineageRequest,
  CreateTaskAlarmRegularRequest,
  ModifyRuleRequest,
  DataSourceInfo,
  FindAllFolderResponse,
  DescribeDataServicePublishedApiListRequest,
  ResourcePathTree,
  DescribeRuleExecLogResponse,
  ParamInfo,
  DescribeDsFolderTreeRequest,
  TableMetaProperty,
  BatchDeleteIntegrationTasksRequest,
  KillOpsMakePlanInstancesResponse,
  DataServiceResponseParam,
  TaskLogRequest,
  OpsTaskLinkInfoDto,
  ScriptInfoResponse,
  TaskImportInfo,
  DescribeIntegrationStatisticsTaskStatusRequest,
  GetFileInfoResponse,
  BaseUser,
  InstanceCondition,
  FreezeOpsTasksResponse,
  IntegrationNodeMapping,
  ColumnAggregationLineage,
  ModifyRuleGroupSubscriptionResponse,
  CreateWorkflowDsResponse,
  CreateHiveTableByDDLResponse,
  DescribeTaskByCycleResponse,
  DescribeExecStrategyResponse,
  DescribeSuccessorOpsTaskInfosResponse,
  DeleteResourceResponse,
  ModifyRuleResponse,
  DescribeInstanceLogFileResponse,
  PairDto,
  CosTokenResponse,
  DeleteTaskDsResponse,
  LifecycleInfo,
  DescribeAllByFolderNewResponse,
  DescribeDsParentFolderTreeRequest,
  DescribeDataServicePublishedApiListResp,
  KillScheduleInstancesResponse,
  TablePartition,
  DescribeWorkflowTaskCountRequest,
  DescribeInstanceListRequest,
  ModifyWorkflowScheduleResponse,
  DeleteCustomFunctionRequest,
  DrInstanceOpsDto,
  InstanceLogInfo,
  GetFileInfoRequest,
  TableLineageBaseInfo,
  InstanceList,
  ProjectUsersPage,
  SqlExpressionTable,
  OrderFieldOptional,
  DryRunDIOfflineTaskRequest,
  CreateOfflineTaskRequest,
  DescribeIntegrationStatisticsRecordsTrendResponse,
  EventOpsDto,
  DescribeFolderWorkflowListData,
  ScreenTaskInfo,
  TableConfig,
  FilterOptional,
  TaskInstanceCountDto,
  DescribePendingSubmitTaskListResponse,
  BatchForceSuccessIntegrationTaskInstancesResponse,
  InstanceLifeCycleOpsDto,
  AlarmReceiverInfo,
  GeneralTaskParam,
  DescribeTableBasicInfoResponse,
  WorkflowScheduleDtoDs,
  ModifyRuleTemplateRequest,
  DescribeRuleExecStatResponse,
  TaskByCycle,
  DagInstancesResponse,
  DimensionScore,
  SubscribeWebHook,
  DescribeTableLineageInfoRequest,
  CreateTaskFolderRequest,
  IntegrationNodeDetail,
  DescribeEventResponse,
  DescribeOpsMakePlanInstancesRequest,
  GenHiveTableDDLSqlRequest,
  BatchCreateIntegrationTaskAlarmsRequest,
  QualityScore,
  LockIntegrationTaskResponse,
  KillScheduleInstancesRequest,
  SearchConditionNew,
  BatchStopOpsTasksRequest,
  DescribeFunctionTypesResponse,
  ModifyRuleTemplateResponse,
  RenewWorkflowSchedulerInfoDsResponse,
  DescribePendingSubmitTaskInfo,
  BatchUpdateIntegrationTasksResponse,
  TaskLogResponse,
  QuietPeriod,
  AdhocDetail,
  DescribeInstanceLastLogRequest,
  DescribeEventRequest,
  TableQualityDetailPage,
  BatchCreateTaskVersionAsyncRequest,
  TaskTypeOpsDto,
  BatchModifyOpsOwnersResponse,
  CreateTaskAlarmRegularResponse,
  DeleteRuleTemplateRequest,
  DescribeOpsMakePlanTasksRequest,
  TaskVersionInstance,
  TableInfo,
  DescribeProjectRequest,
  CreateIntegrationTaskResponse,
  DescribeIntegrationTasksResponse,
  DeleteProjectUsersResponse,
  DescribeAlarmReceiverRequest,
  DescribeStatisticInstanceStatusTrendOpsResponse,
  SchedulerTaskInstanceInfo,
  DescribeSchedulerTaskCntByStatusResponse,
  TaskExtInfo,
  ModifyWorkflowInfoRequest,
  MakePlanOpsDto,
  DescribeBatchOperateTaskResponse,
  StartIntegrationTaskResponse,
  SubmitWorkflow,
  BatchResumeIntegrationTasksRequest,
  OperationOpsDto,
  DeleteTaskAlarmRegularResponse,
  DeleteWorkflowByIdRequest,
  ProjectBaseInfoOpsRequest,
  DescribeEventCasesRequest,
  DeleteRuleResponse,
  MakePlanTaskOpsDtoCollection,
  SimpleColumnInfo,
  CreateWorkflowDsRequest,
  CreateTaskResponse,
  TableQualityDetail,
  BatchStopIntegrationTasksResponse,
  DescribeApproveTypeListRequest,
  DeleteIntegrationNodeResponse,
  DescribeDataSourceInfoListRequest,
  TaskTableMetricInfo,
  BatchResultDs,
  DeleteDataModelResponse,
  DescribeIntegrationNodeRequest,
  SetTaskAlarmNewResponse,
  GetOfflineDIInstanceListResponse,
  DescribeDatasourceResponse,
  BatchOperationOpsDto,
  RuleExecConfig,
  SuspendIntegrationTaskResponse,
  DescribeSchedulerRunTimeInstanceCntByStatusResponse,
  CreateTaskFolderResponse,
  ModifyTaskScriptResponse,
  RunForceSucScheduleInstancesRequest,
  DescribeQualityScoreResponse,
  DescribeRulesByPageResponse,
  DescribeDsParentFolderTreeResponse,
  TopTableStatItem,
  DescribeEventConsumeTasksRequest,
  DescribeDataSourceInfoListResponse,
  InstanceStatisticInfo,
  CommitRuleGroupTaskRequest,
  CheckIntegrationNodeNameExistsRequest,
  GetOfflineInstanceListResponse,
  DescribeOpsMakePlansRequest,
  CreateOpsMakePlanRequest,
  DescribeDimensionScoreResponse,
  ScriptRequestInfo,
  DescribeOrganizationalFunctionsResponse,
  CollectionFolderOpsDto,
  FreezeTasksByWorkflowIdsRequest,
  DescribeTaskByCycleReportResponse,
  BatchDeleteOpsTasksResponse,
  CheckIntegrationTaskNameExistsResponse,
  BatchOperateResultOpsDto,
  DeleteRuleRequest,
  ApproveType,
  SubmitCustomFunctionResponse,
  TableNameFilter,
  RealTimeTaskInstanceNodeInfo,
  DeleteResourceFilesResponse,
  DescribeFieldBasicInfoRequest,
  DiagnoseProRequest,
  CreateOpsMakePlanResponse,
  DescribeStreamTaskLogListResponse,
  DlcDataGovernPolicy,
  DescribeRuleGroupExecResultsByPageResponse,
  DescribeRuleGroupsByPageResponse,
  GetIntegrationNodeColumnSchemaRequest,
  DeleteWorkflowByIdResponse,
  AiopsDLCResourceConfigDto,
  DeleteIntegrationNodeRequest,
  TableBasicInfo,
  ModifyIntegrationNodeResponse,
  DescribeIntegrationStatisticsTaskStatusTrendRequest,
  DescribeTableMetaRequest,
  DescribeWorkflowInfoByIdResponse,
  OpsTaskCanvasInfoList,
  ModifyDimensionWeightResponse,
  ModifyTaskAlarmRegularResponse,
  InstanceSearchCondition,
  CreateRuleResponse,
  ModifyTaskLinksResponse,
  DescribeTaskRunHistoryRequest,
  BatchMakeUpIntegrationTasksRequest,
  OfflineInstance,
  BatchCreateTaskVersionDTO,
  CreateTaskVersionDsRequest,
  DeleteOfflineTaskRequest,
  WeightInfo,
  DescribeDatabaseInfoListResponse,
  ModifyDsFolderResponse,
  CommonContent,
  DescribeTableScoreTrendResponse,
  ModifyIntegrationNodeRequest,
  ModifyMonitorStatusResponse,
  DescribeRuleTemplatesByPageResponse,
  DescribeTemplateDimCountResponse,
  DataSourceConnectStatus,
  DescribeFunctionTypesRequest,
  DimensionCount,
  AttributeItemDTO,
  DescribeInstanceLogResponse,
  ApproveModify,
  DescribeOpsMakePlanTasksResponse,
  InstanceLogList,
  ModifyMonitorStatusRequest,
  DescribeColumnLineageResponse,
  DescribeIntegrationTaskRequest,
  DiagnoseRep,
  DescribeWorkflowListByProjectIdResponse,
  DeleteFilePathRequest,
  WorkflowSchedulerOpsDto,
  DescribeRulesByPageRequest,
  DescribeTopTableStatResponse,
  DescribeDataServicePublishedApiDetailRequest,
  DescribeTaskTableMetricOverviewRequest,
  SourceFieldInfo,
  DeleteDsFolderRequest,
  SaveCustomFunctionResponse,
  ModifyDsFolderRequest,
  AdhocRecord,
  DescribeDataServicePublishedApiListResponse,
  TriggerDsEventResponse,
  EventBatchCaseDTO,
  CreateTaskRequest,
  DescribeDatabaseMetasRequest,
  SearchColumnDocVO,
  SimpleTaskInfo,
  DescribeIntegrationStatisticsRecordsTrendRequest,
  DescribeRealTimeTaskInstanceNodeInfoRequest,
  DescribeWorkflowSchedulerInfoDsRequest,
  DescribeDependTaskListsResponse,
  CreateHiveTableResponse,
  RuleTemplatePage,
  ModifyDataSourceResponse,
  DutyScheduleData,
  DescribeTaskByStatusReportResponse,
  ModifyDimensionWeightRequest,
  CreateMakeDatetimeInfo,
  InstanceApiOpsRequest,
  SubmitSqlTaskRequest,
  DescribeTaskLockStatusResponse,
  RemoveWorkflowDsRequest,
  BatchKillIntegrationTaskInstancesRequest,
  DeleteTaskDsRequest,
  BatchStopOpsTasksResponse,
  InstanceLogInfoOpsDto,
  DeleteFilePathResponse,
  FailMessage,
  RunRerunScheduleInstancesResponse,
  DependencyConfig,
  RobAndLockIntegrationTaskRequest,
  ModifyTaskInfoResponse,
  DataCheckStat,
  CreateRuleRequest,
  IntegrationNodeSchema,
  DescribeColumnsMetaResponse,
  DescribeRuleExecResultsResponse,
  QualityScoreTrend,
  RuleTemplate,
  DeleteFileResponse,
  ResumeIntegrationTaskRequest,
  TriggerDsEventRequest,
  ModifyDataSourceRequest,
  DescribePendingSubmitTaskListRequest,
  TriggerEventResponse,
  TaskAlarmInfo,
  DescribeSchedulerTaskCntByStatusRequest,
  ModifyApproveStatusRequest,
  UpdateDataModelRegistryInfoResponse,
  DescribeOperateOpsTasksResponse,
  DescribeResourceManagePathTreesRequest,
  DescribeDutyScheduleDetailsResponse,
  TaskLineageInfo,
  DescribeTableQualityDetailsResponse,
  DescribeProjectUsersRequest,
  CommonIdOpsDto,
  BatchStopWorkflowsByIdsResponse,
  RuleGroupSchedulerInfo,
  DatasourceBaseInfo,
  LinkOpsDto,
  DlcMergeManifestsInfo,
  DescribeWorkflowListByProjectIdRequest,
  AlarmIndicatorInfo,
  DescribeDataServicePublishedApiDetailResponse,
  TableMeta,
  RegisterEventResponse,
  CountOpsInstanceStateResponse,
  SubscribeReceiver,
  EventCaseAuditLogVOCollection,
  DescribeQualityScoreTrendRequest,
  RobLockState,
  SubmitTaskTestRunRequest,
  DescribeAlarmEventsRequest,
  CompareResult,
  CheckAlarmRegularNameExistResponse,
  UploadResourceRequestInfo,
  DeleteProjectParamDsRequest,
  Content,
  SpeedValue,
  FunctionVersion,
  RuleExecDateStat,
  DescribeThirdTaskRunLogResponse,
  DescribeTaskAlarmRegulationsRequest,
  CreateCustomFunctionResponse,
  ScreenInstanceInfo,
  ModifyTaskInfoRequest,
  DescribeOperateOpsTasksRequest,
  DescribeBatchOperateTaskRequest,
  DescribeTableMetaResponse,
  TaskOpsDto,
  DescribeOfflineTaskTokenRequest,
  DescribeRuleExecDetailRequest,
  DeleteResourceRequest,
  RuleGroupSubscribe,
  RegisterEventListenerRequest,
  BatchRunOpsTaskResponse,
  CheckIntegrationNodeNameExistsResponse,
  RobAndLockIntegrationTaskResponse,
  MakePlanInstanceOpsDtoCollection,
  DeleteTaskAlarmRegularRequest,
  CompareRule,
  CompareRuleItem,
  DescribeInstanceLogFileRequest,
  UnlockIntegrationTaskRequest,
  DutyPerson,
  DeleteOfflineTaskResponse,
  IntegrationInstanceLog,
  TaskScriptContent,
  IntegrationStatisticsTrendResult,
  DescribeDrInstancePageRequest,
  RuntimeInstanceCntTop,
  ColumnMeta,
  GenHiveTableDDLSqlResponse,
  DescribeRuleGroupTableRequest,
  CheckAlarmRegularNameExistRequest,
  ColumnData,
  RuleExecResult,
  Table,
  DescribeWorkflowExecuteByIdResponse,
  TaskByStatus,
  CreateIntegrationTaskRequest,
  BatchRunOpsTaskRequest,
  FieldConfig,
  DescribeRealTimeTaskMetricOverviewRequest,
  DescribeDatabaseMetasResponse,
  FreezeTasksByWorkflowIdsResponse,
  SubmitWorkflowRequest,
  DescribeResourceManagePathTreesResponse,
  RunRerunScheduleInstancesRequest,
  SystemRole,
  RuleGroupTableInnerInfo,
  DeleteIntegrationTaskRequest,
  CompareResultItem,
  ModifyTaskScriptRequest,
  CreateIntegrationNodeRequest,
  DescribeTablePartitionsResponse,
  DescribeTableScoreTrendRequest,
  RuleExecResultPage,
  DescribeTaskByStatusReportRequest,
  ModifyExecStrategyRequest,
  BatchForceSuccessIntegrationTaskInstancesRequest,
  DescribeRealTimeTaskInstanceNodeInfoResponse,
  DescribeTaskByCycleReportRequest,
  DescribeInstanceLogDetailResponse,
  DescribeApproveListRequest,
  DescribeDutyScheduleListRequest,
  DescribeTaskLineageResponse,
  CommitRuleGroupTaskResponse,
  Project,
  DescribeRealTimeTaskMetricOverviewResponse,
  DescribeOfflineTaskTokenResponse,
  DescribeTableInfoListResponse,
  RemoveWorkflowDsResponse,
  GetOfflineDIInstanceListRequest,
  ModifyExecStrategyResponse,
  BatchStartIntegrationTasksRequest,
  CreateCustomFunctionRequest,
  DescribeTableBasicInfoRequest,
  DescribeDatasourceRequest,
  RuleExecStat,
  DescribeStatisticInstanceStatusTrendOpsRequest,
  DescribeEventCasesResponse,
  DescribeTableSchemaInfoResponse,
  DiagnoseProResponse,
  UpdateWorkflowOwnerResponse,
  SetTaskAlarmNewRequest,
  DescribeInstanceListResponse,
  DescribeOpsInstanceLogListRequest,
  UploadContentRequest,
  StartIntegrationTaskRequest,
  DescribeProjectResponse,
  StopIntegrationTaskRequest,
  FunctionTypeOrKind,
  DescribeApply,
  CreateDataSourceResponse,
  BatchReturn,
  DescribeFolderWorkflowListResponse,
  RecordField,
  DescribeIntegrationVersionNodesInfoResponse,
  DescribeRulesRequest,
  AiopsSimpleTaskDto,
  ResumeIntegrationTaskResponse,
  DescribeRuleResponse,
  DescribeTaskScriptRequest,
  SchemaDetail,
  DescribeRuleRequest,
  BatchOpsDTO,
  DescribeAlarmReceiverResponse,
  DescribeTableLineageInfoResponse,
  DlcExpiredSnapshotsInfo,
  DescribeWorkflowCanvasInfoResponse,
  Partition,
  RuleDimCnt,
  BatchOperateResult,
  DutySchedule,
  DescribeDimensionScoreRequest,
  FindAllFolderRequest,
  DescribeTableSchemaInfoRequest,
  BatchStartIntegrationTasksResponse,
  DescribeIntegrationVersionNodesInfoRequest,
  DescribeSuccessorOpsTaskInfosRequest,
  DescribeSchedulerInstanceStatusRequest,
  DescribeScheduleInstancesRequest,
  DescribeRealTimeTaskSpeedResponse,
  ModifyWorkflowInfoResponse,
  DescribeFolderWorkflowListRequest,
  RuleFieldConfig,
  CheckTaskNameExistResponse,
  DescribeSchedulerRunTimeInstanceCntByStatusRequest,
  DataServiceRequestListOrder,
  StrToStrMap,
  WorkflowCanvasOpsDto,
  DlcRemoveOrphanFilesInfo,
  LockIntegrationTaskRequest,
  BatchStopIntegrationTasksRequest,
  DescribeRuleTemplatesByPageRequest,
  RunTasksByMultiWorkflowResponse,
  RenewWorkflowSchedulerInfoDsRequest,
  DutyScheduleDetailsInfo,
  DescribeInstanceLastLogResponse,
  TableHeat,
  DescribeExecStrategyRequest,
  DescribeDataServicePublishedApiDetailResp,
  CreateHiveTableRequest,
  AiopsScriptInfo,
  BatchKillIntegrationTaskInstancesResponse,
  RunTasksByMultiWorkflowRequest,
  EventListenerOpsDto,
  CheckIntegrationTaskNameExistsRequest,
  DescribeWorkflowSchedulerInfoDsResponse,
  DescribeRuleGroupTableResponse,
  DailyScoreInfo,
  SuspendIntegrationTaskRequest,
  TaskSubmitPreCheckDetailInfo,
  DescribeDependOpsTasksResponse,
  DeleteRuleTemplateResponse,
  DescribeRuleTemplateRequest,
  SqlExpression,
  DescribeTaskByCycleRequest,
  DescribeProjectUsersResponse,
  CommonId,
  CreateRuleTemplateRequest,
  DlcRewriteDataInfo,
  TopTableStat,
  WorkFlowExecuteDtoByPage,
  DescribeRuleExecDetailResponse,
  Filter,
  Pair,
  DeleteIntegrationTaskResponse,
  TableBaseInfo,
  BatchCreateTaskVersionAsyncResponse,
  DescribeInstanceByCycleRequest,
  Duty,
  DescribeThirdTaskRunLogRequest,
  DescribeIntegrationStatisticsTaskStatusResponse,
  JudgeResourceFileRequest,
  UploadResourceResponse,
  DescribeOpsMakePlanInstancesResponse,
  DescribeDatabaseInfoListRequest,
  DescribeIntegrationTaskResponse,
  CreateDataModelRequest,
  DescribeQualityScoreTrendResponse,
  RuleDimStat,
  CreateHiveTableByDDLRequest,
  DatabaseInfo,
  GetIntegrationNodeColumnSchemaResponse,
  StopIntegrationTaskResponse,
  DescribeOpsWorkflowsResponse,
  OpsTaskCanvasDto,
  DescribeRuleTemplatesRequest,
  DescribeDataCheckStatResponse,
  DescribeInstanceDetailInfoRequest,
  DescribeIntegrationStatisticsInstanceTrendRequest,
  DescribeDsFolderTreeResponse,
  PathNodeDsVO,
  DescribeWorkflowCanvasInfoRequest,
  ParamInfoDs,
  DagInstancesRequest,
  DryRunDIOfflineTaskResponse,
  FolderOpsDto,
  DescribeTaskLockStatusRequest,
  DescribeRuleExecStatRequest,
  OfflineTaskAddParam,
  RuleConfig,
  LogContent,
  RealTimeTaskSpeed,
  TagVoteSum,
  BatchCreateIntegrationTaskAlarmsResponse,
  DescribeIntegrationStatisticsRequest,
  DescribeRuleGroupRequest,
  ModifyTaskNameRequest,
  DescribeTrendStatRequest,
  DescribeOpsInstanceLogListResponse,
  DescribeApproveTypeListResponse,
  RuleGroupExecResultPage,
  DescribeRuleGroupSubscriptionRequest,
  OrganizationalFunction,
  OrderField,
  BatchSuspendIntegrationTasksResponse,
  DeleteProjectUsersRequest,
  BaseTenant,
  DescribeWorkflowExecuteByIdRequest,
  WorkflowExtOpsDtoPage,
  DescribeTableLineageResponse,
  DescribeRuleExecLogRequest,
  BatchRerunIntegrationTaskInstancesResponse,
  RuleGroupPage,
  DeleteDataModelRequest,
  DescribeApproveListResponse,
  DescribeIntegrationTasksRequest,
  BatchMakeUpIntegrationTasksResponse,
  FunctionResource,
  SubmitCustomFunctionRequest,
  TaskLockStatus,
  EventCaseConsumeLogOptDto,
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
   * 创建任务
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
   * 创建任务告警规则
   */
  async CreateTaskAlarmRegular(
    req: CreateTaskAlarmRegularRequest,
    cb?: (error: string, rep: CreateTaskAlarmRegularResponse) => void
  ): Promise<CreateTaskAlarmRegularResponse> {
    return this.request("CreateTaskAlarmRegular", req, cb)
  }

  /**
   * 数据集成大屏同步条数统计趋势
   */
  async DescribeIntegrationStatisticsRecordsTrend(
    req: DescribeIntegrationStatisticsRecordsTrendRequest,
    cb?: (error: string, rep: DescribeIntegrationStatisticsRecordsTrendResponse) => void
  ): Promise<DescribeIntegrationStatisticsRecordsTrendResponse> {
    return this.request("DescribeIntegrationStatisticsRecordsTrend", req, cb)
  }

  /**
   * 删除集成任务
   */
  async DeleteIntegrationTask(
    req: DeleteIntegrationTaskRequest,
    cb?: (error: string, rep: DeleteIntegrationTaskResponse) => void
  ): Promise<DeleteIntegrationTaskResponse> {
    return this.request("DeleteIntegrationTask", req, cb)
  }

  /**
   * 批量终止实例
   */
  async KillScheduleInstances(
    req: KillScheduleInstancesRequest,
    cb?: (error: string, rep: KillScheduleInstancesResponse) => void
  ): Promise<KillScheduleInstancesResponse> {
    return this.request("KillScheduleInstances", req, cb)
  }

  /**
   * 开发空间-获取数据开发脚本信息
   */
  async GetFileInfo(
    req: GetFileInfoRequest,
    cb?: (error: string, rep: GetFileInfoResponse) => void
  ): Promise<GetFileInfoResponse> {
    return this.request("GetFileInfo", req, cb)
  }

  /**
   * 查询任务脚本
   */
  async DescribeTaskScript(
    req: DescribeTaskScriptRequest,
    cb?: (error: string, rep: DescribeTaskScriptResponse) => void
  ): Promise<DescribeTaskScriptResponse> {
    return this.request("DescribeTaskScript", req, cb)
  }

  /**
   * 创建规则模板
   */
  async CreateRuleTemplate(
    req: CreateRuleTemplateRequest,
    cb?: (error: string, rep: CreateRuleTemplateResponse) => void
  ): Promise<CreateRuleTemplateResponse> {
    return this.request("CreateRuleTemplate", req, cb)
  }

  /**
   * 实例诊断，用于诊断 INITIAL、DEPENDENCE、ALLOCATED、LAUNCHED、EVENT_LISTENING、BEFORE_ASPECT、EXPIRED、FAILED状态的实例
   */
  async DiagnosePro(
    req: DiagnoseProRequest,
    cb?: (error: string, rep: DiagnoseProResponse) => void
  ): Promise<DiagnoseProResponse> {
    return this.request("DiagnosePro", req, cb)
  }

  /**
   * 实时任务运行指标概览
   */
  async DescribeRealTimeTaskMetricOverview(
    req: DescribeRealTimeTaskMetricOverviewRequest,
    cb?: (error: string, rep: DescribeRealTimeTaskMetricOverviewResponse) => void
  ): Promise<DescribeRealTimeTaskMetricOverviewResponse> {
    return this.request("DescribeRealTimeTaskMetricOverview", req, cb)
  }

  /**
   * 获取实例列表
   */
  async DescribeScheduleInstances(
    req: DescribeScheduleInstancesRequest,
    cb?: (error: string, rep: DescribeScheduleInstancesResponse) => void
  ): Promise<DescribeScheduleInstancesResponse> {
    return this.request("DescribeScheduleInstances", req, cb)
  }

  /**
   * 仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
   */
  async BatchStopOpsTasks(
    req: BatchStopOpsTasksRequest,
    cb?: (error: string, rep: BatchStopOpsTasksResponse) => void
  ): Promise<BatchStopOpsTasksResponse> {
    return this.request("BatchStopOpsTasks", req, cb)
  }

  /**
     * 能够调通但该API已经没有使用了，看北京数据最后一次上报是23年10月，有接近一千万条数据历史无效数据。当前策略，云API示例修订然后已经分析出来的无效API走预下线流程。
https://capi.woa.com/api/detail?product=wedata&env=api_formal&version=2021-08-20&action=DescribeTaskByCycleReport
这两天在分析API的时候 有较多运维大屏的原始API当前已经没有使用了，但API没有下线。预计需要专项去梳理这一系列待下线API。

任务状态周期增长趋势
     */
  async DescribeTaskByCycleReport(
    req: DescribeTaskByCycleReportRequest,
    cb?: (error: string, rep: DescribeTaskByCycleReportResponse) => void
  ): Promise<DescribeTaskByCycleReportResponse> {
    return this.request("DescribeTaskByCycleReport", req, cb)
  }

  /**
   * 数据质量的概览页面数据监测情况接口
   */
  async DescribeDataCheckStat(
    req: DescribeDataCheckStatRequest,
    cb?: (error: string, rep: DescribeDataCheckStatResponse) => void
  ): Promise<DescribeDataCheckStatResponse> {
    return this.request("DescribeDataCheckStat", req, cb)
  }

  /**
   * 批量终止集成任务实例
   */
  async BatchKillIntegrationTaskInstances(
    req: BatchKillIntegrationTaskInstancesRequest,
    cb?: (error: string, rep: BatchKillIntegrationTaskInstancesResponse) => void
  ): Promise<BatchKillIntegrationTaskInstancesResponse> {
    return this.request("BatchKillIntegrationTaskInstances", req, cb)
  }

  /**
   * 更新规则组执行策略
   */
  async ModifyExecStrategy(
    req: ModifyExecStrategyRequest,
    cb?: (error: string, rep: ModifyExecStrategyResponse) => void
  ): Promise<ModifyExecStrategyResponse> {
    return this.request("ModifyExecStrategy", req, cb)
  }

  /**
   * 数据集成大屏任务状态统计趋势
   */
  async DescribeIntegrationStatisticsTaskStatusTrend(
    req: DescribeIntegrationStatisticsTaskStatusTrendRequest,
    cb?: (error: string, rep: DescribeIntegrationStatisticsTaskStatusTrendResponse) => void
  ): Promise<DescribeIntegrationStatisticsTaskStatusTrendResponse> {
    return this.request("DescribeIntegrationStatisticsTaskStatusTrend", req, cb)
  }

  /**
   * 建hive表
   */
  async CreateHiveTable(
    req: CreateHiveTableRequest,
    cb?: (error: string, rep: CreateHiveTableResponse) => void
  ): Promise<CreateHiveTableResponse> {
    return this.request("CreateHiveTable", req, cb)
  }

  /**
   * 任务运维列表组合条件查询
   */
  async DescribeOperateOpsTasks(
    req: DescribeOperateOpsTasksRequest,
    cb?: (error: string, rep: DescribeOperateOpsTasksResponse) => void
  ): Promise<DescribeOperateOpsTasksResponse> {
    return this.request("DescribeOperateOpsTasks", req, cb)
  }

  /**
   * 根据周期类型查询所有实例
   */
  async DescribeInstanceByCycle(
    req: DescribeInstanceByCycleRequest,
    cb?: (error: string, rep: DescribeInstanceByCycleResponse) => void
  ): Promise<DescribeInstanceByCycleResponse> {
    return this.request("DescribeInstanceByCycle", req, cb)
  }

  /**
   * 查询集成节点
   */
  async DescribeIntegrationNode(
    req: DescribeIntegrationNodeRequest,
    cb?: (error: string, rep: DescribeIntegrationNodeResponse) => void
  ): Promise<DescribeIntegrationNodeResponse> {
    return this.request("DescribeIntegrationNode", req, cb)
  }

  /**
   * 资源管理-上传资源
   */
  async UploadResource(
    req: UploadResourceRequest,
    cb?: (error: string, rep: UploadResourceResponse) => void
  ): Promise<UploadResourceResponse> {
    return this.request("UploadResource", req, cb)
  }

  /**
   * 根据周期类型 查询所有任务
   */
  async DescribeTaskByCycle(
    req: DescribeTaskByCycleRequest,
    cb?: (error: string, rep: DescribeTaskByCycleResponse) => void
  ): Promise<DescribeTaskByCycleResponse> {
    return this.request("DescribeTaskByCycle", req, cb)
  }

  /**
   * 批量暂停集成任务
   */
  async BatchSuspendIntegrationTasks(
    req: BatchSuspendIntegrationTasksRequest,
    cb?: (error: string, rep: BatchSuspendIntegrationTasksResponse) => void
  ): Promise<BatchSuspendIntegrationTasksResponse> {
    return this.request("BatchSuspendIntegrationTasks", req, cb)
  }

  /**
   * 元数据模型-字段基础信息查询接口
   */
  async DescribeFieldBasicInfo(
    req: DescribeFieldBasicInfoRequest,
    cb?: (error: string, rep: DescribeFieldBasicInfoResponse) => void
  ): Promise<DescribeFieldBasicInfoResponse> {
    return this.request("DescribeFieldBasicInfo", req, cb)
  }

  /**
   * 查询表得分趋势
   */
  async DescribeTableScoreTrend(
    req: DescribeTableScoreTrendRequest,
    cb?: (error: string, rep: DescribeTableScoreTrendResponse) => void
  ): Promise<DescribeTableScoreTrendResponse> {
    return this.request("DescribeTableScoreTrend", req, cb)
  }

  /**
   * 删除编排空间工作流
   */
  async RemoveWorkflowDs(
    req: RemoveWorkflowDsRequest,
    cb?: (error: string, rep: RemoveWorkflowDsResponse) => void
  ): Promise<RemoveWorkflowDsResponse> {
    return this.request("RemoveWorkflowDs", req, cb)
  }

  /**
   * 获取第三方运行日志
   */
  async DescribeThirdTaskRunLog(
    req: DescribeThirdTaskRunLogRequest,
    cb?: (error: string, rep: DescribeThirdTaskRunLogResponse) => void
  ): Promise<DescribeThirdTaskRunLogResponse> {
    return this.request("DescribeThirdTaskRunLog", req, cb)
  }

  /**
   * 查询父目录树，用于工作流、任务定位
   */
  async DescribeDsParentFolderTree(
    req: DescribeDsParentFolderTreeRequest,
    cb?: (error: string, rep: DescribeDsParentFolderTreeResponse) => void
  ): Promise<DescribeDsParentFolderTreeResponse> {
    return this.request("DescribeDsParentFolderTree", req, cb)
  }

  /**
   * 继续集成任务
   */
  async ResumeIntegrationTask(
    req: ResumeIntegrationTaskRequest,
    cb?: (error: string, rep: ResumeIntegrationTaskResponse) => void
  ): Promise<ResumeIntegrationTaskResponse> {
    return this.request("ResumeIntegrationTask", req, cb)
  }

  /**
   * 重命名任务（任务编辑）
   */
  async ModifyTaskName(
    req: ModifyTaskNameRequest,
    cb?: (error: string, rep: ModifyTaskNameResponse) => void
  ): Promise<ModifyTaskNameResponse> {
    return this.request("ModifyTaskName", req, cb)
  }

  /**
   * 离线任务实例运行日志列表
   */
  async DescribeInstanceLogList(
    req: DescribeInstanceLogListRequest,
    cb?: (error: string, rep: DescribeInstanceLogListResponse) => void
  ): Promise<DescribeInstanceLogListResponse> {
    return this.request("DescribeInstanceLogList", req, cb)
  }

  /**
   * 提交任务版本
   */
  async CreateTaskVersionDs(
    req: CreateTaskVersionDsRequest,
    cb?: (error: string, rep: CreateTaskVersionDsResponse) => void
  ): Promise<CreateTaskVersionDsResponse> {
    return this.request("CreateTaskVersionDs", req, cb)
  }

  /**
   * 批量修改任务责任人
   */
  async BatchModifyOpsOwners(
    req: BatchModifyOpsOwnersRequest,
    cb?: (error: string, rep: BatchModifyOpsOwnersResponse) => void
  ): Promise<BatchModifyOpsOwnersResponse> {
    return this.request("BatchModifyOpsOwners", req, cb)
  }

  /**
   * 创建用户自定义函数
   */
  async CreateCustomFunction(
    req: CreateCustomFunctionRequest,
    cb?: (error: string, rep: CreateCustomFunctionResponse) => void
  ): Promise<CreateCustomFunctionResponse> {
    return this.request("CreateCustomFunction", req, cb)
  }

  /**
   * 解锁集成任务
   */
  async UnlockIntegrationTask(
    req: UnlockIntegrationTaskRequest,
    cb?: (error: string, rep: UnlockIntegrationTaskResponse) => void
  ): Promise<UnlockIntegrationTaskResponse> {
    return this.request("UnlockIntegrationTask", req, cb)
  }

  /**
   * 批量停止集成任务
   */
  async BatchStopIntegrationTasks(
    req: BatchStopIntegrationTasksRequest,
    cb?: (error: string, rep: BatchStopIntegrationTasksResponse) => void
  ): Promise<BatchStopIntegrationTasksResponse> {
    return this.request("BatchStopIntegrationTasks", req, cb)
  }

  /**
   * 运维大屏-任务状态分布
   */
  async DescribeSchedulerTaskTypeCnt(
    req: DescribeSchedulerTaskTypeCntRequest,
    cb?: (error: string, rep: DescribeSchedulerTaskTypeCntResponse) => void
  ): Promise<DescribeSchedulerTaskTypeCntResponse> {
    return this.request("DescribeSchedulerTaskTypeCnt", req, cb)
  }

  /**
   * 删除项目参数
   */
  async DeleteProjectParamDs(
    req: DeleteProjectParamDsRequest,
    cb?: (error: string, rep: DeleteProjectParamDsResponse) => void
  ): Promise<DeleteProjectParamDsResponse> {
    return this.request("DeleteProjectParamDs", req, cb)
  }

  /**
   * 编排空间-工作流-移动任务到工作流文件夹
   */
  async MoveTasksToFolder(
    req: MoveTasksToFolderRequest,
    cb?: (error: string, rep: MoveTasksToFolderResponse) => void
  ): Promise<MoveTasksToFolderResponse> {
    return this.request("MoveTasksToFolder", req, cb)
  }

  /**
   * 根据项目id 获取项目下所有工作流列表
   */
  async DescribeWorkflowListByProjectId(
    req: DescribeWorkflowListByProjectIdRequest,
    cb?: (error: string, rep: DescribeWorkflowListByProjectIdResponse) => void
  ): Promise<DescribeWorkflowListByProjectIdResponse> {
    return this.request("DescribeWorkflowListByProjectId", req, cb)
  }

  /**
   * 创建数据源
   */
  async CreateDataSource(
    req: CreateDataSourceRequest,
    cb?: (error: string, rep: CreateDataSourceResponse) => void
  ): Promise<CreateDataSourceResponse> {
    return this.request("CreateDataSource", req, cb)
  }

  /**
   * 实例运维-获取实例日志列表
   */
  async DescribeOpsInstanceLogList(
    req: DescribeOpsInstanceLogListRequest,
    cb?: (error: string, rep: DescribeOpsInstanceLogListResponse) => void
  ): Promise<DescribeOpsInstanceLogListResponse> {
    return this.request("DescribeOpsInstanceLogList", req, cb)
  }

  /**
   * 查看事件实例的消费任务
   */
  async DescribeEventConsumeTasks(
    req: DescribeEventConsumeTasksRequest,
    cb?: (error: string, rep: DescribeEventConsumeTasksResponse) => void
  ): Promise<DescribeEventConsumeTasksResponse> {
    return this.request("DescribeEventConsumeTasks", req, cb)
  }

  /**
   * 更新工作流下任务调度信息
   */
  async RenewWorkflowSchedulerInfoDs(
    req: RenewWorkflowSchedulerInfoDsRequest,
    cb?: (error: string, rep: RenewWorkflowSchedulerInfoDsResponse) => void
  ): Promise<RenewWorkflowSchedulerInfoDsResponse> {
    return this.request("RenewWorkflowSchedulerInfoDs", req, cb)
  }

  /**
   * 获取离线任务长连接Token
   */
  async DescribeOfflineTaskToken(
    req?: DescribeOfflineTaskTokenRequest,
    cb?: (error: string, rep: DescribeOfflineTaskTokenResponse) => void
  ): Promise<DescribeOfflineTaskTokenResponse> {
    return this.request("DescribeOfflineTaskToken", req, cb)
  }

  /**
   * 删除规则模板
   */
  async DeleteRuleTemplate(
    req: DeleteRuleTemplateRequest,
    cb?: (error: string, rep: DeleteRuleTemplateResponse) => void
  ): Promise<DeleteRuleTemplateResponse> {
    return this.request("DeleteRuleTemplate", req, cb)
  }

  /**
   * 数语向wedata注册，提供自身cam角色信息，跳转域名、ip、端口信息等
   */
  async UpdateDataModelRegistryInfo(
    req: UpdateDataModelRegistryInfoRequest,
    cb?: (error: string, rep: UpdateDataModelRegistryInfoResponse) => void
  ): Promise<UpdateDataModelRegistryInfoResponse> {
    return this.request("UpdateDataModelRegistryInfo", req, cb)
  }

  /**
   * 获取待审批列表
   */
  async DescribeApproveList(
    req: DescribeApproveListRequest,
    cb?: (error: string, rep: DescribeApproveListResponse) => void
  ): Promise<DescribeApproveListResponse> {
    return this.request("DescribeApproveList", req, cb)
  }

  /**
   * 添加项目用户角色
   */
  async AddProjectUserRole(
    req?: AddProjectUserRoleRequest,
    cb?: (error: string, rep: AddProjectUserRoleResponse) => void
  ): Promise<AddProjectUserRoleResponse> {
    return this.request("AddProjectUserRole", req, cb)
  }

  /**
   * 判断集成节点名称是否存在
   */
  async CheckIntegrationNodeNameExists(
    req: CheckIntegrationNodeNameExistsRequest,
    cb?: (error: string, rep: CheckIntegrationNodeNameExistsResponse) => void
  ): Promise<CheckIntegrationNodeNameExistsResponse> {
    return this.request("CheckIntegrationNodeNameExists", req, cb)
  }

  /**
   * 告警事件列表
   */
  async DescribeAlarmEvents(
    req: DescribeAlarmEventsRequest,
    cb?: (error: string, rep: DescribeAlarmEventsResponse) => void
  ): Promise<DescribeAlarmEventsResponse> {
    return this.request("DescribeAlarmEvents", req, cb)
  }

  /**
   * 批量启动工作流
   */
  async RunTasksByMultiWorkflow(
    req: RunTasksByMultiWorkflowRequest,
    cb?: (error: string, rep: RunTasksByMultiWorkflowResponse) => void
  ): Promise<RunTasksByMultiWorkflowResponse> {
    return this.request("RunTasksByMultiWorkflow", req, cb)
  }

  /**
   * 质量报告-质量评分
   */
  async DescribeQualityScore(
    req: DescribeQualityScoreRequest,
    cb?: (error: string, rep: DescribeQualityScoreResponse) => void
  ): Promise<DescribeQualityScoreResponse> {
    return this.request("DescribeQualityScore", req, cb)
  }

  /**
   * 获取cos token
   */
  async GetCosToken(
    req: GetCosTokenRequest,
    cb?: (error: string, rep: GetCosTokenResponse) => void
  ): Promise<GetCosTokenResponse> {
    return this.request("GetCosToken", req, cb)
  }

  /**
   * 数据质量概览页面触发维度分布统计接口
   */
  async DescribeRuleDimStat(
    req: DescribeRuleDimStatRequest,
    cb?: (error: string, rep: DescribeRuleDimStatResponse) => void
  ): Promise<DescribeRuleDimStatResponse> {
    return this.request("DescribeRuleDimStat", req, cb)
  }

  /**
   * 生成建hive表的sql
   */
  async GenHiveTableDDLSql(
    req: GenHiveTableDDLSqlRequest,
    cb?: (error: string, rep: GenHiveTableDDLSqlResponse) => void
  ): Promise<GenHiveTableDDLSqlResponse> {
    return this.request("GenHiveTableDDLSql", req, cb)
  }

  /**
   * 分页查询任务运行历史
   */
  async DescribeTaskRunHistory(
    req: DescribeTaskRunHistoryRequest,
    cb?: (error: string, rep: DescribeTaskRunHistoryResponse) => void
  ): Promise<DescribeTaskRunHistoryResponse> {
    return this.request("DescribeTaskRunHistory", req, cb)
  }

  /**
   * 查看补录计划任务
   */
  async DescribeOpsMakePlanTasks(
    req: DescribeOpsMakePlanTasksRequest,
    cb?: (error: string, rep: DescribeOpsMakePlanTasksResponse) => void
  ): Promise<DescribeOpsMakePlanTasksResponse> {
    return this.request("DescribeOpsMakePlanTasks", req, cb)
  }

  /**
   * 数据质量概览页面表排行接口
   */
  async DescribeTopTableStat(
    req: DescribeTopTableStatRequest,
    cb?: (error: string, rep: DescribeTopTableStatResponse) => void
  ): Promise<DescribeTopTableStatResponse> {
    return this.request("DescribeTopTableStat", req, cb)
  }

  /**
   * 查询全量函数
   */
  async DescribeOrganizationalFunctions(
    req: DescribeOrganizationalFunctionsRequest,
    cb?: (error: string, rep: DescribeOrganizationalFunctionsResponse) => void
  ): Promise<DescribeOrganizationalFunctionsResponse> {
    return this.request("DescribeOrganizationalFunctions", req, cb)
  }

  /**
   * 实例批量置成功
   */
  async RunForceSucScheduleInstances(
    req: RunForceSucScheduleInstancesRequest,
    cb?: (error: string, rep: RunForceSucScheduleInstancesResponse) => void
  ): Promise<RunForceSucScheduleInstancesResponse> {
    return this.request("RunForceSucScheduleInstances", req, cb)
  }

  /**
   * 查询目录树
   */
  async DescribeDsFolderTree(
    req: DescribeDsFolderTreeRequest,
    cb?: (error: string, rep: DescribeDsFolderTreeResponse) => void
  ): Promise<DescribeDsFolderTreeResponse> {
    return this.request("DescribeDsFolderTree", req, cb)
  }

  /**
   * 查询实时任务表粒度指标概览
   */
  async DescribeTaskTableMetricOverview(
    req: DescribeTaskTableMetricOverviewRequest,
    cb?: (error: string, rep: DescribeTaskTableMetricOverviewResponse) => void
  ): Promise<DescribeTaskTableMetricOverviewResponse> {
    return this.request("DescribeTaskTableMetricOverview", req, cb)
  }

  /**
   * 无
   */
  async SubmitTaskTestRun(
    req: SubmitTaskTestRunRequest,
    cb?: (error: string, rep: SubmitTaskTestRunResponse) => void
  ): Promise<SubmitTaskTestRunResponse> {
    return this.request("SubmitTaskTestRun", req, cb)
  }

  /**
   * 获取审批分类列表
   */
  async DescribeApproveTypeList(
    req: DescribeApproveTypeListRequest,
    cb?: (error: string, rep: DescribeApproveTypeListResponse) => void
  ): Promise<DescribeApproveTypeListResponse> {
    return this.request("DescribeApproveTypeList", req, cb)
  }

  /**
   * 规则执行日志查询
   */
  async DescribeRuleExecLog(
    req: DescribeRuleExecLogRequest,
    cb?: (error: string, rep: DescribeRuleExecLogResponse) => void
  ): Promise<DescribeRuleExecLogResponse> {
    return this.request("DescribeRuleExecLog", req, cb)
  }

  /**
   * 开发空间-批量删除目录和文件
   */
  async DeleteFilePath(
    req: DeleteFilePathRequest,
    cb?: (error: string, rep: DeleteFilePathResponse) => void
  ): Promise<DeleteFilePathResponse> {
    return this.request("DeleteFilePath", req, cb)
  }

  /**
   * 编排空间-创建文件夹
   */
  async CreateDsFolder(
    req: CreateDsFolderRequest,
    cb?: (error: string, rep: CreateDsFolderResponse) => void
  ): Promise<CreateDsFolderResponse> {
    return this.request("CreateDsFolder", req, cb)
  }

  /**
   * 获取下游任务信息
   */
  async DescribeSuccessorOpsTaskInfos(
    req: DescribeSuccessorOpsTaskInfosRequest,
    cb?: (error: string, rep: DescribeSuccessorOpsTaskInfosResponse) => void
  ): Promise<DescribeSuccessorOpsTaskInfosResponse> {
    return this.request("DescribeSuccessorOpsTaskInfos", req, cb)
  }

  /**
   * 调试运行集成任务
   */
  async DryRunDIOfflineTask(
    req: DryRunDIOfflineTaskRequest,
    cb?: (error: string, rep: DryRunDIOfflineTaskResponse) => void
  ): Promise<DryRunDIOfflineTaskResponse> {
    return this.request("DryRunDIOfflineTask", req, cb)
  }

  /**
   * 质量报告-查询质量评分
   */
  async DescribeDimensionScore(
    req: DescribeDimensionScoreRequest,
    cb?: (error: string, rep: DescribeDimensionScoreResponse) => void
  ): Promise<DescribeDimensionScoreResponse> {
    return this.request("DescribeDimensionScore", req, cb)
  }

  /**
   * 查询表绑定执行规则组信息
   */
  async DescribeRuleGroupTable(
    req: DescribeRuleGroupTableRequest,
    cb?: (error: string, rep: DescribeRuleGroupTableResponse) => void
  ): Promise<DescribeRuleGroupTableResponse> {
    return this.request("DescribeRuleGroupTable", req, cb)
  }

  /**
   * 抢占锁定集成任务
   */
  async RobAndLockIntegrationTask(
    req: RobAndLockIntegrationTaskRequest,
    cb?: (error: string, rep: RobAndLockIntegrationTaskResponse) => void
  ): Promise<RobAndLockIntegrationTaskResponse> {
    return this.request("RobAndLockIntegrationTask", req, cb)
  }

  /**
   * 创建集成任务
   */
  async CreateIntegrationTask(
    req: CreateIntegrationTaskRequest,
    cb?: (error: string, rep: CreateIntegrationTaskResponse) => void
  ): Promise<CreateIntegrationTaskResponse> {
    return this.request("CreateIntegrationTask", req, cb)
  }

  /**
   * 查询规则详情
   */
  async DescribeRule(
    req: DescribeRuleRequest,
    cb?: (error: string, rep: DescribeRuleResponse) => void
  ): Promise<DescribeRuleResponse> {
    return this.request("DescribeRule", req, cb)
  }

  /**
   * 按补录计划批量终止实例。
   */
  async KillOpsMakePlanInstances(
    req: KillOpsMakePlanInstancesRequest,
    cb?: (error: string, rep: KillOpsMakePlanInstancesResponse) => void
  ): Promise<KillOpsMakePlanInstancesResponse> {
    return this.request("KillOpsMakePlanInstances", req, cb)
  }

  /**
   * 数据源详情
   */
  async DescribeDataSourceList(
    req: DescribeDataSourceListRequest,
    cb?: (error: string, rep: DescribeDataSourceListResponse) => void
  ): Promise<DescribeDataSourceListResponse> {
    return this.request("DescribeDataSourceList", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
更新任务
     */
  async ModifyTaskInfo(
    req: ModifyTaskInfoRequest,
    cb?: (error: string, rep: ModifyTaskInfoResponse) => void
  ): Promise<ModifyTaskInfoResponse> {
    return this.request("ModifyTaskInfo", req, cb)
  }

  /**
   * 事件管理-触发事件
   */
  async TriggerDsEvent(
    req: TriggerDsEventRequest,
    cb?: (error: string, rep: TriggerDsEventResponse) => void
  ): Promise<TriggerDsEventResponse> {
    return this.request("TriggerDsEvent", req, cb)
  }

  /**
   * 运维大屏-实例运行时长排行
   */
  async DescribeSchedulerRunTimeInstanceCntByStatus(
    req: DescribeSchedulerRunTimeInstanceCntByStatusRequest,
    cb?: (error: string, rep: DescribeSchedulerRunTimeInstanceCntByStatusResponse) => void
  ): Promise<DescribeSchedulerRunTimeInstanceCntByStatusResponse> {
    return this.request("DescribeSchedulerRunTimeInstanceCntByStatus", req, cb)
  }

  /**
   * 任务状态统计
   */
  async DescribeSchedulerTaskCntByStatus(
    req: DescribeSchedulerTaskCntByStatusRequest,
    cb?: (error: string, rep: DescribeSchedulerTaskCntByStatusResponse) => void
  ): Promise<DescribeSchedulerTaskCntByStatusResponse> {
    return this.request("DescribeSchedulerTaskCntByStatus", req, cb)
  }

  /**
   * 更新集成任务
   */
  async ModifyIntegrationTask(
    req: ModifyIntegrationTaskRequest,
    cb?: (error: string, rep: ModifyIntegrationTaskResponse) => void
  ): Promise<ModifyIntegrationTaskResponse> {
    return this.request("ModifyIntegrationTask", req, cb)
  }

  /**
   * 获取值班日历
   */
  async DescribeDutyScheduleDetails(
    req: DescribeDutyScheduleDetailsRequest,
    cb?: (error: string, rep: DescribeDutyScheduleDetailsResponse) => void
  ): Promise<DescribeDutyScheduleDetailsResponse> {
    return this.request("DescribeDutyScheduleDetails", req, cb)
  }

  /**
   * 数据集成大屏任务状态分布统计
   */
  async DescribeIntegrationStatisticsTaskStatus(
    req: DescribeIntegrationStatisticsTaskStatusRequest,
    cb?: (error: string, rep: DescribeIntegrationStatisticsTaskStatusResponse) => void
  ): Promise<DescribeIntegrationStatisticsTaskStatusResponse> {
    return this.request("DescribeIntegrationStatisticsTaskStatus", req, cb)
  }

  /**
   * 批量运行集成任务
   */
  async BatchStartIntegrationTasks(
    req: BatchStartIntegrationTasksRequest,
    cb?: (error: string, rep: BatchStartIntegrationTasksResponse) => void
  ): Promise<BatchStartIntegrationTasksResponse> {
    return this.request("BatchStartIntegrationTasks", req, cb)
  }

  /**
   * 质量报告-修改维度权限
   */
  async ModifyDimensionWeight(
    req: ModifyDimensionWeightRequest,
    cb?: (error: string, rep: ModifyDimensionWeightResponse) => void
  ): Promise<ModifyDimensionWeightResponse> {
    return this.request("ModifyDimensionWeight", req, cb)
  }

  /**
   * 查询规则执行结果详情
   */
  async DescribeRuleExecDetail(
    req: DescribeRuleExecDetailRequest,
    cb?: (error: string, rep: DescribeRuleExecDetailResponse) => void
  ): Promise<DescribeRuleExecDetailResponse> {
    return this.request("DescribeRuleExecDetail", req, cb)
  }

  /**
   * 离线任务重名校验
   */
  async CheckTaskNameExist(
    req: CheckTaskNameExistRequest,
    cb?: (error: string, rep: CheckTaskNameExistResponse) => void
  ): Promise<CheckTaskNameExistResponse> {
    return this.request("CheckTaskNameExist", req, cb)
  }

  /**
   * 根据补录计划和补录任务获取补录实例列表。
   */
  async DescribeOpsMakePlanInstances(
    req: DescribeOpsMakePlanInstancesRequest,
    cb?: (error: string, rep: DescribeOpsMakePlanInstancesResponse) => void
  ): Promise<DescribeOpsMakePlanInstancesResponse> {
    return this.request("DescribeOpsMakePlanInstances", req, cb)
  }

  /**
   * 数据源详情
   */
  async DescribeDatasource(
    req: DescribeDatasourceRequest,
    cb?: (error: string, rep: DescribeDatasourceResponse) => void
  ): Promise<DescribeDatasourceResponse> {
    return this.request("DescribeDatasource", req, cb)
  }

  /**
   * 数据开发模块-文件夹更新
   */
  async ModifyDsFolder(
    req: ModifyDsFolderRequest,
    cb?: (error: string, rep: ModifyDsFolderResponse) => void
  ): Promise<ModifyDsFolderResponse> {
    return this.request("ModifyDsFolder", req, cb)
  }

  /**
   * 通过工作流id，查询工作流详情
   */
  async DescribeWorkflowInfoById(
    req: DescribeWorkflowInfoByIdRequest,
    cb?: (error: string, rep: DescribeWorkflowInfoByIdResponse) => void
  ): Promise<DescribeWorkflowInfoByIdResponse> {
    return this.request("DescribeWorkflowInfoById", req, cb)
  }

  /**
   * 任务状态趋势
   */
  async DescribeTaskByStatusReport(
    req: DescribeTaskByStatusReportRequest,
    cb?: (error: string, rep: DescribeTaskByStatusReportResponse) => void
  ): Promise<DescribeTaskByStatusReportResponse> {
    return this.request("DescribeTaskByStatusReport", req, cb)
  }

  /**
   * 获取离线任务实例
   */
  async GetOfflineInstanceList(
    req: GetOfflineInstanceListRequest,
    cb?: (error: string, rep: GetOfflineInstanceListResponse) => void
  ): Promise<GetOfflineInstanceListResponse> {
    return this.request("GetOfflineInstanceList", req, cb)
  }

  /**
   * 创建离线任务
   */
  async CreateOfflineTask(
    req: CreateOfflineTaskRequest,
    cb?: (error: string, rep: CreateOfflineTaskResponse) => void
  ): Promise<CreateOfflineTaskResponse> {
    return this.request("CreateOfflineTask", req, cb)
  }

  /**
   * 更新工作流调度
   */
  async ModifyWorkflowSchedule(
    req: ModifyWorkflowScheduleRequest,
    cb?: (error: string, rep: ModifyWorkflowScheduleResponse) => void
  ): Promise<ModifyWorkflowScheduleResponse> {
    return this.request("ModifyWorkflowSchedule", req, cb)
  }

  /**
   * 获取表schema信息
   */
  async DescribeTableSchemaInfo(
    req: DescribeTableSchemaInfoRequest,
    cb?: (error: string, rep: DescribeTableSchemaInfoResponse) => void
  ): Promise<DescribeTableSchemaInfoResponse> {
    return this.request("DescribeTableSchemaInfo", req, cb)
  }

  /**
   * 更新质量规则接口
   */
  async ModifyRule(
    req: ModifyRuleRequest,
    cb?: (error: string, rep: ModifyRuleResponse) => void
  ): Promise<ModifyRuleResponse> {
    return this.request("ModifyRule", req, cb)
  }

  /**
   * 查询函数类型
   */
  async DescribeFunctionTypes(
    req?: DescribeFunctionTypesRequest,
    cb?: (error: string, rep: DescribeFunctionTypesResponse) => void
  ): Promise<DescribeFunctionTypesResponse> {
    return this.request("DescribeFunctionTypes", req, cb)
  }

  /**
   * 删除数据源
   */
  async DeleteDataSources(
    req: DeleteDataSourcesRequest,
    cb?: (error: string, rep: DeleteDataSourcesResponse) => void
  ): Promise<DeleteDataSourcesResponse> {
    return this.request("DeleteDataSources", req, cb)
  }

  /**
   * 删除集成节点
   */
  async DeleteIntegrationNode(
    req: DeleteIntegrationNodeRequest,
    cb?: (error: string, rep: DeleteIntegrationNodeResponse) => void
  ): Promise<DeleteIntegrationNodeResponse> {
    return this.request("DeleteIntegrationNode", req, cb)
  }

  /**
   * 停止集成任务
   */
  async StopIntegrationTask(
    req: StopIntegrationTaskRequest,
    cb?: (error: string, rep: StopIntegrationTaskResponse) => void
  ): Promise<StopIntegrationTaskResponse> {
    return this.request("StopIntegrationTask", req, cb)
  }

  /**
   * 获取表元数据list
   */
  async DescribeTableMetas(
    req: DescribeTableMetasRequest,
    cb?: (error: string, rep: DescribeTableMetasResponse) => void
  ): Promise<DescribeTableMetasResponse> {
    return this.request("DescribeTableMetas", req, cb)
  }

  /**
   * 实时任务同步速度趋势
   */
  async DescribeRealTimeTaskSpeed(
    req: DescribeRealTimeTaskSpeedRequest,
    cb?: (error: string, rep: DescribeRealTimeTaskSpeedResponse) => void
  ): Promise<DescribeRealTimeTaskSpeedResponse> {
    return this.request("DescribeRealTimeTaskSpeed", req, cb)
  }

  /**
   * 获取实例列表
   */
  async DescribeInstanceList(
    req: DescribeInstanceListRequest,
    cb?: (error: string, rep: DescribeInstanceListResponse) => void
  ): Promise<DescribeInstanceListResponse> {
    return this.request("DescribeInstanceList", req, cb)
  }

  /**
   * 元数据模型-表基础信息查询接口
   */
  async DescribeTableBasicInfo(
    req: DescribeTableBasicInfoRequest,
    cb?: (error: string, rep: DescribeTableBasicInfoResponse) => void
  ): Promise<DescribeTableBasicInfoResponse> {
    return this.request("DescribeTableBasicInfo", req, cb)
  }

  /**
   * 告警接收人详情
   */
  async DescribeAlarmReceiver(
    req: DescribeAlarmReceiverRequest,
    cb?: (error: string, rep: DescribeAlarmReceiverResponse) => void
  ): Promise<DescribeAlarmReceiverResponse> {
    return this.request("DescribeAlarmReceiver", req, cb)
  }

  /**
   * 查看任务锁状态信息
   */
  async DescribeTaskLockStatus(
    req: DescribeTaskLockStatusRequest,
    cb?: (error: string, rep: DescribeTaskLockStatusResponse) => void
  ): Promise<DescribeTaskLockStatusResponse> {
    return this.request("DescribeTaskLockStatus", req, cb)
  }

  /**
   * 运维大屏-实例状态分布
   */
  async DescribeSchedulerInstanceStatus(
    req: DescribeSchedulerInstanceStatusRequest,
    cb?: (error: string, rep: DescribeSchedulerInstanceStatusResponse) => void
  ): Promise<DescribeSchedulerInstanceStatusResponse> {
    return this.request("DescribeSchedulerInstanceStatus", req, cb)
  }

  /**
   * 获取实例运行日志
   */
  async DescribeInstanceLog(
    req: DescribeInstanceLogRequest,
    cb?: (error: string, rep: DescribeInstanceLogResponse) => void
  ): Promise<DescribeInstanceLogResponse> {
    return this.request("DescribeInstanceLog", req, cb)
  }

  /**
   * 批量更新集成任务（暂时仅支持批量更新责任人）
   */
  async BatchUpdateIntegrationTasks(
    req: BatchUpdateIntegrationTasksRequest,
    cb?: (error: string, rep: BatchUpdateIntegrationTasksResponse) => void
  ): Promise<BatchUpdateIntegrationTasksResponse> {
    return this.request("BatchUpdateIntegrationTasks", req, cb)
  }

  /**
   * 资源管理-批量删除资源文件
   */
  async DeleteResourceFiles(
    req: DeleteResourceFilesRequest,
    cb?: (error: string, rep: DeleteResourceFilesResponse) => void
  ): Promise<DeleteResourceFilesResponse> {
    return this.request("DeleteResourceFiles", req, cb)
  }

  /**
   * 批量补数据（创建补录任务）
   */
  async CreateOpsMakePlan(
    req: CreateOpsMakePlanRequest,
    cb?: (error: string, rep: CreateOpsMakePlanResponse) => void
  ): Promise<CreateOpsMakePlanResponse> {
    return this.request("CreateOpsMakePlan", req, cb)
  }

  /**
   * 任务运维-批量暂停任务
   */
  async FreezeOpsTasks(
    req: FreezeOpsTasksRequest,
    cb?: (error: string, rep: FreezeOpsTasksResponse) => void
  ): Promise<FreezeOpsTasksResponse> {
    return this.request("FreezeOpsTasks", req, cb)
  }

  /**
   * 查询规则组详情接口
   */
  async DescribeRuleGroup(
    req: DescribeRuleGroupRequest,
    cb?: (error: string, rep: DescribeRuleGroupResponse) => void
  ): Promise<DescribeRuleGroupResponse> {
    return this.request("DescribeRuleGroup", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
  async ModifyTaskScript(
    req: ModifyTaskScriptRequest,
    cb?: (error: string, rep: ModifyTaskScriptResponse) => void
  ): Promise<ModifyTaskScriptResponse> {
    return this.request("ModifyTaskScript", req, cb)
  }

  /**
   * 获取具体实例相关日志信息
   */
  async DescribeInstanceLogDetail(
    req: DescribeInstanceLogDetailRequest,
    cb?: (error: string, rep: DescribeInstanceLogDetailResponse) => void
  ): Promise<DescribeInstanceLogDetailResponse> {
    return this.request("DescribeInstanceLogDetail", req, cb)
  }

  /**
   * 编排空间批量操作页面查找全部的文件夹
   */
  async FindAllFolder(
    req: FindAllFolderRequest,
    cb?: (error: string, rep: FindAllFolderResponse) => void
  ): Promise<FindAllFolderResponse> {
    return this.request("FindAllFolder", req, cb)
  }

  /**
   * 获取数据库信息
   */
  async DescribeDatabaseInfoList(
    req: DescribeDatabaseInfoListRequest,
    cb?: (error: string, rep: DescribeDatabaseInfoListResponse) => void
  ): Promise<DescribeDatabaseInfoListResponse> {
    return this.request("DescribeDatabaseInfoList", req, cb)
  }

  /**
   * 根据层级查找上/下游任务节点
   */
  async DescribeDependOpsTasks(
    req: DescribeDependOpsTasksRequest,
    cb?: (error: string, rep: DescribeDependOpsTasksResponse) => void
  ): Promise<DescribeDependOpsTasksResponse> {
    return this.request("DescribeDependOpsTasks", req, cb)
  }

  /**
   * 资源管理-判断资源文件是否存在
   */
  async JudgeResourceFile(
    req: JudgeResourceFileRequest,
    cb?: (error: string, rep: JudgeResourceFileResponse) => void
  ): Promise<JudgeResourceFileResponse> {
    return this.request("JudgeResourceFile", req, cb)
  }

  /**
   * 提交集成任务
   */
  async CommitIntegrationTask(
    req: CommitIntegrationTaskRequest,
    cb?: (error: string, rep: CommitIntegrationTaskResponse) => void
  ): Promise<CommitIntegrationTaskResponse> {
    return this.request("CommitIntegrationTask", req, cb)
  }

  /**
   * 删除任务
   */
  async DeleteOfflineTask(
    req: DeleteOfflineTaskRequest,
    cb?: (error: string, rep: DeleteOfflineTaskResponse) => void
  ): Promise<DeleteOfflineTaskResponse> {
    return this.request("DeleteOfflineTask", req, cb)
  }

  /**
   * 创建hive表，返回表名称
   */
  async CreateHiveTableByDDL(
    req: CreateHiveTableByDDLRequest,
    cb?: (error: string, rep: CreateHiveTableByDDLResponse) => void
  ): Promise<CreateHiveTableByDDLResponse> {
    return this.request("CreateHiveTableByDDL", req, cb)
  }

  /**
   * 编排空间-删除文件夹
   */
  async DeleteDsFolder(
    req: DeleteDsFolderRequest,
    cb?: (error: string, rep: DeleteDsFolderResponse) => void
  ): Promise<DeleteDsFolderResponse> {
    return this.request("DeleteDsFolder", req, cb)
  }

  /**
   * 批量操作页面获取任务列表
   */
  async DescribeBatchOperateTask(
    req: DescribeBatchOperateTaskRequest,
    cb?: (error: string, rep: DescribeBatchOperateTaskResponse) => void
  ): Promise<DescribeBatchOperateTaskResponse> {
    return this.request("DescribeBatchOperateTask", req, cb)
  }

  /**
   * 通过任务查询表的血缘关系
   */
  async DescribeTaskLineage(
    req: DescribeTaskLineageRequest,
    cb?: (error: string, rep: DescribeTaskLineageResponse) => void
  ): Promise<DescribeTaskLineageResponse> {
    return this.request("DescribeTaskLineage", req, cb)
  }

  /**
   * 获取资源管理目录树
   */
  async DescribeResourceManagePathTrees(
    req: DescribeResourceManagePathTreesRequest,
    cb?: (error: string, rep: DescribeResourceManagePathTreesResponse) => void
  ): Promise<DescribeResourceManagePathTreesResponse> {
    return this.request("DescribeResourceManagePathTrees", req, cb)
  }

  /**
   * 批量置成功集成任务实例
   */
  async BatchForceSuccessIntegrationTaskInstances(
    req: BatchForceSuccessIntegrationTaskInstancesRequest,
    cb?: (error: string, rep: BatchForceSuccessIntegrationTaskInstancesResponse) => void
  ): Promise<BatchForceSuccessIntegrationTaskInstancesResponse> {
    return this.request("BatchForceSuccessIntegrationTaskInstances", req, cb)
  }

  /**
   * 查询实时任务日志列表
   */
  async DescribeStreamTaskLogList(
    req: DescribeStreamTaskLogListRequest,
    cb?: (error: string, rep: DescribeStreamTaskLogListResponse) => void
  ): Promise<DescribeStreamTaskLogListResponse> {
    return this.request("DescribeStreamTaskLogList", req, cb)
  }

  /**
   * 创建质量规则接口
   */
  async CreateRule(
    req: CreateRuleRequest,
    cb?: (error: string, rep: CreateRuleResponse) => void
  ): Promise<CreateRuleResponse> {
    return this.request("CreateRule", req, cb)
  }

  /**
   * 编辑规则模板
   */
  async ModifyRuleTemplate(
    req: ModifyRuleTemplateRequest,
    cb?: (error: string, rep: ModifyRuleTemplateResponse) => void
  ): Promise<ModifyRuleTemplateResponse> {
    return this.request("ModifyRuleTemplate", req, cb)
  }

  /**
   * 根据项目ID和事件名称查看事件详情
   */
  async DescribeEvent(
    req: DescribeEventRequest,
    cb?: (error: string, rep: DescribeEventResponse) => void
  ): Promise<DescribeEventResponse> {
    return this.request("DescribeEvent", req, cb)
  }

  /**
   * 查询父目录下所有子文件夹+工作流
   */
  async DescribeAllByFolderNew(
    req: DescribeAllByFolderNewRequest,
    cb?: (error: string, rep: DescribeAllByFolderNewResponse) => void
  ): Promise<DescribeAllByFolderNewResponse> {
    return this.request("DescribeAllByFolderNew", req, cb)
  }

  /**
   * 质量报告-查询表质量详情
   */
  async DescribeTableQualityDetails(
    req: DescribeTableQualityDetailsRequest,
    cb?: (error: string, rep: DescribeTableQualityDetailsResponse) => void
  ): Promise<DescribeTableQualityDetailsResponse> {
    return this.request("DescribeTableQualityDetails", req, cb)
  }

  /**
     * 【过滤条件】
{表名称TableName,支持模糊匹配}       {表负责人TableOwnerName,支持模糊匹配}      {监控方式MonitorTypes，1.未配置 2.关联生产调度 3.离线周期检测,支持多选}  {订阅人ReceiverUin}
【必要字段】
{数据来源DatasourceId}
     */
  async DescribeRuleGroupsByPage(
    req: DescribeRuleGroupsByPageRequest,
    cb?: (error: string, rep: DescribeRuleGroupsByPageResponse) => void
  ): Promise<DescribeRuleGroupsByPageResponse> {
    return this.request("DescribeRuleGroupsByPage", req, cb)
  }

  /**
   * 查询表的所有列元数据
   */
  async DescribeColumnsMeta(
    req: DescribeColumnsMetaRequest,
    cb?: (error: string, rep: DescribeColumnsMetaResponse) => void
  ): Promise<DescribeColumnsMetaResponse> {
    return this.request("DescribeColumnsMeta", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
注册事件监听器
     */
  async RegisterEventListener(
    req: RegisterEventListenerRequest,
    cb?: (error: string, rep: RegisterEventListenerResponse) => void
  ): Promise<RegisterEventListenerResponse> {
    return this.request("RegisterEventListener", req, cb)
  }

  /**
   * 实例详情页，返回某个实例所有生命周期信息
   */
  async DescribeInstanceDetailInfo(
    req: DescribeInstanceDetailInfoRequest,
    cb?: (error: string, rep: DescribeInstanceDetailInfoResponse) => void
  ): Promise<DescribeInstanceDetailInfoResponse> {
    return this.request("DescribeInstanceDetailInfo", req, cb)
  }

  /**
   * 获取值班表列表
   */
  async DescribeDutyScheduleList(
    req: DescribeDutyScheduleListRequest,
    cb?: (error: string, rep: DescribeDutyScheduleListResponse) => void
  ): Promise<DescribeDutyScheduleListResponse> {
    return this.request("DescribeDutyScheduleList", req, cb)
  }

  /**
   * 删除质量规则接口
   */
  async DeleteRule(
    req: DeleteRuleRequest,
    cb?: (error: string, rep: DeleteRuleResponse) => void
  ): Promise<DeleteRuleResponse> {
    return this.request("DeleteRule", req, cb)
  }

  /**
   * 判断告警规则重名
   */
  async CheckAlarmRegularNameExist(
    req: CheckAlarmRegularNameExistRequest,
    cb?: (error: string, rep: CheckAlarmRegularNameExistResponse) => void
  ): Promise<CheckAlarmRegularNameExistResponse> {
    return this.request("CheckAlarmRegularNameExist", req, cb)
  }

  /**
   * 判断集成任务名称是否存在
   */
  async CheckIntegrationTaskNameExists(
    req: CheckIntegrationTaskNameExistsRequest,
    cb?: (error: string, rep: CheckIntegrationTaskNameExistsResponse) => void
  ): Promise<CheckIntegrationTaskNameExistsResponse> {
    return this.request("CheckIntegrationTaskNameExists", req, cb)
  }

  /**
   * 查询表的分区详情信息
   */
  async DescribeTablePartitions(
    req: DescribeTablePartitionsRequest,
    cb?: (error: string, rep: DescribeTablePartitionsResponse) => void
  ): Promise<DescribeTablePartitionsResponse> {
    return this.request("DescribeTablePartitions", req, cb)
  }

  /**
   * 分页查询质量规则
   */
  async DescribeRulesByPage(
    req: DescribeRulesByPageRequest,
    cb?: (error: string, rep: DescribeRulesByPageResponse) => void
  ): Promise<DescribeRulesByPageResponse> {
    return this.request("DescribeRulesByPage", req, cb)
  }

  /**
   * 删除项目用户
   */
  async DeleteProjectUsers(
    req: DeleteProjectUsersRequest,
    cb?: (error: string, rep: DeleteProjectUsersResponse) => void
  ): Promise<DeleteProjectUsersResponse> {
    return this.request("DeleteProjectUsers", req, cb)
  }

  /**
   * 删除文件
   */
  async DeleteFile(
    req: DeleteFileRequest,
    cb?: (error: string, rep: DeleteFileResponse) => void
  ): Promise<DeleteFileResponse> {
    return this.request("DeleteFile", req, cb)
  }

  /**
   * 对集成离线任务执行批量补数据操作
   */
  async BatchMakeUpIntegrationTasks(
    req: BatchMakeUpIntegrationTasksRequest,
    cb?: (error: string, rep: BatchMakeUpIntegrationTasksResponse) => void
  ): Promise<BatchMakeUpIntegrationTasksResponse> {
    return this.request("BatchMakeUpIntegrationTasks", req, cb)
  }

  /**
   * 保存任务信息
   */
  async UploadContent(
    req: UploadContentRequest,
    cb?: (error: string, rep: UploadContentResponse) => void
  ): Promise<UploadContentResponse> {
    return this.request("UploadContent", req, cb)
  }

  /**
   * 查询模板详情
   */
  async DescribeRuleTemplate(
    req: DescribeRuleTemplateRequest,
    cb?: (error: string, rep: DescribeRuleTemplateResponse) => void
  ): Promise<DescribeRuleTemplateResponse> {
    return this.request("DescribeRuleTemplate", req, cb)
  }

  /**
   * 任务运维-任务列表 批量启动
   */
  async BatchRunOpsTask(
    req: BatchRunOpsTaskRequest,
    cb?: (error: string, rep: BatchRunOpsTaskResponse) => void
  ): Promise<BatchRunOpsTaskResponse> {
    return this.request("BatchRunOpsTask", req, cb)
  }

  /**
   * 【过滤条件】 {模板名称Name,支持模糊匹配} {模板类型type，1.系统模板 2.自定义模板} {质量检测维度QualityDims, 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性} 【排序字段】 { 引用数排序类型CitationOrderType，根据引用数量排序 ASC DESC}
   */
  async DescribeRuleTemplatesByPage(
    req: DescribeRuleTemplatesByPageRequest,
    cb?: (error: string, rep: DescribeRuleTemplatesByPageResponse) => void
  ): Promise<DescribeRuleTemplatesByPageResponse> {
    return this.request("DescribeRuleTemplatesByPage", req, cb)
  }

  /**
   * 更新工作流信息
   */
  async ModifyWorkflowInfo(
    req: ModifyWorkflowInfoRequest,
    cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void
  ): Promise<ModifyWorkflowInfoResponse> {
    return this.request("ModifyWorkflowInfo", req, cb)
  }

  /**
   * 数据质量概览页面规则运行情况接口
   */
  async DescribeRuleExecStat(
    req: DescribeRuleExecStatRequest,
    cb?: (error: string, rep: DescribeRuleExecStatResponse) => void
  ): Promise<DescribeRuleExecStatResponse> {
    return this.request("DescribeRuleExecStat", req, cb)
  }

  /**
   * 实例批量重跑
   */
  async RunRerunScheduleInstances(
    req: RunRerunScheduleInstancesRequest,
    cb?: (error: string, rep: RunRerunScheduleInstancesResponse) => void
  ): Promise<RunRerunScheduleInstancesResponse> {
    return this.request("RunRerunScheduleInstances", req, cb)
  }

  /**
   * 规则组执行结果分页查询接口
   */
  async DescribeRuleGroupExecResultsByPage(
    req: DescribeRuleGroupExecResultsByPageRequest,
    cb?: (error: string, rep: DescribeRuleGroupExecResultsByPageResponse) => void
  ): Promise<DescribeRuleGroupExecResultsByPageResponse> {
    return this.request("DescribeRuleGroupExecResultsByPage", req, cb)
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
   * 批量创建任务告警规则
   */
  async BatchCreateIntegrationTaskAlarms(
    req: BatchCreateIntegrationTaskAlarmsRequest,
    cb?: (error: string, rep: BatchCreateIntegrationTaskAlarmsResponse) => void
  ): Promise<BatchCreateIntegrationTaskAlarmsResponse> {
    return this.request("BatchCreateIntegrationTaskAlarms", req, cb)
  }

  /**
   * 拉取dag实例
   */
  async DagInstances(
    req: DagInstancesRequest,
    cb?: (error: string, rep: DagInstancesResponse) => void
  ): Promise<DagInstancesResponse> {
    return this.request("DagInstances", req, cb)
  }

  /**
   * 获取数据服务API的发布态信息列表
   */
  async DescribeDataServicePublishedApiList(
    req: DescribeDataServicePublishedApiListRequest,
    cb?: (error: string, rep: DescribeDataServicePublishedApiListResponse) => void
  ): Promise<DescribeDataServicePublishedApiListResponse> {
    return this.request("DescribeDataServicePublishedApiList", req, cb)
  }

  /**
   * 修改审批单状态
   */
  async ModifyApproveStatus(
    req: ModifyApproveStatusRequest,
    cb?: (error: string, rep: ModifyApproveStatusResponse) => void
  ): Promise<ModifyApproveStatusResponse> {
    return this.request("ModifyApproveStatus", req, cb)
  }

  /**
   * 下载日志文件，返回日志下载URL
   */
  async DescribeInstanceLogFile(
    req: DescribeInstanceLogFileRequest,
    cb?: (error: string, rep: DescribeInstanceLogFileResponse) => void
  ): Promise<DescribeInstanceLogFileResponse> {
    return this.request("DescribeInstanceLogFile", req, cb)
  }

  /**
   * 异步批量创建任务版本
   */
  async BatchCreateTaskVersionAsync(
    req: BatchCreateTaskVersionAsyncRequest,
    cb?: (error: string, rep: BatchCreateTaskVersionAsyncResponse) => void
  ): Promise<BatchCreateTaskVersionAsyncResponse> {
    return this.request("BatchCreateTaskVersionAsync", req, cb)
  }

  /**
   * 更新监控状态
   */
  async ModifyMonitorStatus(
    req: ModifyMonitorStatusRequest,
    cb?: (error: string, rep: ModifyMonitorStatusResponse) => void
  ): Promise<ModifyMonitorStatusResponse> {
    return this.request("ModifyMonitorStatus", req, cb)
  }

  /**
   * 查询规则组执行策略
   */
  async DescribeExecStrategy(
    req: DescribeExecStrategyRequest,
    cb?: (error: string, rep: DescribeExecStrategyResponse) => void
  ): Promise<DescribeExecStrategyResponse> {
    return this.request("DescribeExecStrategy", req, cb)
  }

  /**
   * 列出表血缘信息
   */
  async DescribeTableLineage(
    req: DescribeTableLineageRequest,
    cb?: (error: string, rep: DescribeTableLineageResponse) => void
  ): Promise<DescribeTableLineageResponse> {
    return this.request("DescribeTableLineage", req, cb)
  }

  /**
   * 暂停集成任务
   */
  async SuspendIntegrationTask(
    req: SuspendIntegrationTaskRequest,
    cb?: (error: string, rep: SuspendIntegrationTaskResponse) => void
  ): Promise<SuspendIntegrationTaskResponse> {
    return this.request("SuspendIntegrationTask", req, cb)
  }

  /**
   * 创建工作流
   */
  async CreateWorkflowDs(
    req: CreateWorkflowDsRequest,
    cb?: (error: string, rep: CreateWorkflowDsResponse) => void
  ): Promise<CreateWorkflowDsResponse> {
    return this.request("CreateWorkflowDs", req, cb)
  }

  /**
   * 根据条件查找事件实例
   */
  async DescribeEventCases(
    req: DescribeEventCasesRequest,
    cb?: (error: string, rep: DescribeEventCasesResponse) => void
  ): Promise<DescribeEventCasesResponse> {
    return this.request("DescribeEventCases", req, cb)
  }

  /**
   * 获取离线任务实例列表(新)
   */
  async GetOfflineDIInstanceList(
    req: GetOfflineDIInstanceListRequest,
    cb?: (error: string, rep: GetOfflineDIInstanceListResponse) => void
  ): Promise<GetOfflineDIInstanceListResponse> {
    return this.request("GetOfflineDIInstanceList", req, cb)
  }

  /**
   * 通过工作流Id删除工作流
   */
  async DeleteWorkflowById(
    req: DeleteWorkflowByIdRequest,
    cb?: (error: string, rep: DeleteWorkflowByIdResponse) => void
  ): Promise<DeleteWorkflowByIdResponse> {
    return this.request("DeleteWorkflowById", req, cb)
  }

  /**
   * 查询质量规则列表
   */
  async DescribeRules(
    req: DescribeRulesRequest,
    cb?: (error: string, rep: DescribeRulesResponse) => void
  ): Promise<DescribeRulesResponse> {
    return this.request("DescribeRules", req, cb)
  }

  /**
   * 启动集成任务
   */
  async StartIntegrationTask(
    req: StartIntegrationTaskRequest,
    cb?: (error: string, rep: StartIntegrationTaskResponse) => void
  ): Promise<StartIntegrationTaskResponse> {
    return this.request("StartIntegrationTask", req, cb)
  }

  /**
   * 锁定集成任务
   */
  async LockIntegrationTask(
    req: LockIntegrationTaskRequest,
    cb?: (error: string, rep: LockIntegrationTaskResponse) => void
  ): Promise<LockIntegrationTaskResponse> {
    return this.request("LockIntegrationTask", req, cb)
  }

  /**
   * 提交工作流
   */
  async SubmitWorkflow(
    req: SubmitWorkflowRequest,
    cb?: (error: string, rep: SubmitWorkflowResponse) => void
  ): Promise<SubmitWorkflowResponse> {
    return this.request("SubmitWorkflow", req, cb)
  }

  /**
   * 批量删除集成任务
   */
  async BatchDeleteIntegrationTasks(
    req: BatchDeleteIntegrationTasksRequest,
    cb?: (error: string, rep: BatchDeleteIntegrationTasksResponse) => void
  ): Promise<BatchDeleteIntegrationTasksResponse> {
    return this.request("BatchDeleteIntegrationTasks", req, cb)
  }

  /**
   * 查询集成任务列表
   */
  async DescribeIntegrationTasks(
    req: DescribeIntegrationTasksRequest,
    cb?: (error: string, rep: DescribeIntegrationTasksResponse) => void
  ): Promise<DescribeIntegrationTasksResponse> {
    return this.request("DescribeIntegrationTasks", req, cb)
  }

  /**
   * 任务状态趋势
   */
  async DescribeStatisticInstanceStatusTrendOps(
    req: DescribeStatisticInstanceStatusTrendOpsRequest,
    cb?: (error: string, rep: DescribeStatisticInstanceStatusTrendOpsResponse) => void
  ): Promise<DescribeStatisticInstanceStatusTrendOpsResponse> {
    return this.request("DescribeStatisticInstanceStatusTrendOps", req, cb)
  }

  /**
   * 列出字段血缘信息
   */
  async DescribeColumnLineage(
    req: DescribeColumnLineageRequest,
    cb?: (error: string, rep: DescribeColumnLineageResponse) => void
  ): Promise<DescribeColumnLineageResponse> {
    return this.request("DescribeColumnLineage", req, cb)
  }

  /**
   * 数据质量概览页面趋势变化接口
   */
  async DescribeTrendStat(
    req: DescribeTrendStatRequest,
    cb?: (error: string, rep: DescribeTrendStatResponse) => void
  ): Promise<DescribeTrendStatResponse> {
    return this.request("DescribeTrendStat", req, cb)
  }

  /**
   * 获取数据表信息
   */
  async DescribeTableInfoList(
    req: DescribeTableInfoListRequest,
    cb?: (error: string, rep: DescribeTableInfoListResponse) => void
  ): Promise<DescribeTableInfoListResponse> {
    return this.request("DescribeTableInfoList", req, cb)
  }

  /**
   * 查询规则组订阅信息
   */
  async DescribeRuleGroupSubscription(
    req: DescribeRuleGroupSubscriptionRequest,
    cb?: (error: string, rep: DescribeRuleGroupSubscriptionResponse) => void
  ): Promise<DescribeRuleGroupSubscriptionResponse> {
    return this.request("DescribeRuleGroupSubscription", req, cb)
  }

  /**
   * 删除编排空间任务
   */
  async DeleteTaskDs(
    req: DeleteTaskDsRequest,
    cb?: (error: string, rep: DeleteTaskDsResponse) => void
  ): Promise<DeleteTaskDsResponse> {
    return this.request("DeleteTaskDs", req, cb)
  }

  /**
   * 更新规则组订阅信息
   */
  async ModifyRuleGroupSubscription(
    req: ModifyRuleGroupSubscriptionRequest,
    cb?: (error: string, rep: ModifyRuleGroupSubscriptionResponse) => void
  ): Promise<ModifyRuleGroupSubscriptionResponse> {
    return this.request("ModifyRuleGroupSubscription", req, cb)
  }

  /**
   * 删除任务告警规则
   */
  async DeleteTaskAlarmRegular(
    req: DeleteTaskAlarmRegularRequest,
    cb?: (error: string, rep: DeleteTaskAlarmRegularResponse) => void
  ): Promise<DeleteTaskAlarmRegularResponse> {
    return this.request("DeleteTaskAlarmRegular", req, cb)
  }

  /**
   * 获取待提交任务预提交校验信息（注意：工作流编号或者任务编号列表，必须填一项）
   */
  async DescribePendingSubmitTaskList(
    req: DescribePendingSubmitTaskListRequest,
    cb?: (error: string, rep: DescribePendingSubmitTaskListResponse) => void
  ): Promise<DescribePendingSubmitTaskListResponse> {
    return this.request("DescribePendingSubmitTaskList", req, cb)
  }

  /**
   * 规则执行结果列表查询
   */
  async DescribeRuleExecResults(
    req: DescribeRuleExecResultsRequest,
    cb?: (error: string, rep: DescribeRuleExecResultsResponse) => void
  ): Promise<DescribeRuleExecResultsResponse> {
    return this.request("DescribeRuleExecResults", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
触发事件
     */
  async TriggerEvent(
    req: TriggerEventRequest,
    cb?: (error: string, rep: TriggerEventResponse) => void
  ): Promise<TriggerEventResponse> {
    return this.request("TriggerEvent", req, cb)
  }

  /**
   * 暂停工作流下的所有任务
   */
  async FreezeTasksByWorkflowIds(
    req: FreezeTasksByWorkflowIdsRequest,
    cb?: (error: string, rep: FreezeTasksByWorkflowIdsResponse) => void
  ): Promise<FreezeTasksByWorkflowIdsResponse> {
    return this.request("FreezeTasksByWorkflowIds", req, cb)
  }

  /**
   * 资源管理删除资源
   */
  async DeleteResource(
    req: DeleteResourceRequest,
    cb?: (error: string, rep: DeleteResourceResponse) => void
  ): Promise<DeleteResourceResponse> {
    return this.request("DeleteResource", req, cb)
  }

  /**
   * 质量报告-质量分周期趋势
   */
  async DescribeQualityScoreTrend(
    req: DescribeQualityScoreTrendRequest,
    cb?: (error: string, rep: DescribeQualityScoreTrendResponse) => void
  ): Promise<DescribeQualityScoreTrendResponse> {
    return this.request("DescribeQualityScoreTrend", req, cb)
  }

  /**
   * 通过taskIds查询task详情列表
   */
  async DescribeDependTaskLists(
    req: DescribeDependTaskListsRequest,
    cb?: (error: string, rep: DescribeDependTaskListsResponse) => void
  ): Promise<DescribeDependTaskListsResponse> {
    return this.request("DescribeDependTaskLists", req, cb)
  }

  /**
   * 保存用户自定义函数
   */
  async SaveCustomFunction(
    req: SaveCustomFunctionRequest,
    cb?: (error: string, rep: SaveCustomFunctionResponse) => void
  ): Promise<SaveCustomFunctionResponse> {
    return this.request("SaveCustomFunction", req, cb)
  }

  /**
   * 修改数据源
   */
  async ModifyDataSource(
    req: ModifyDataSourceRequest,
    cb?: (error: string, rep: ModifyDataSourceResponse) => void
  ): Promise<ModifyDataSourceResponse> {
    return this.request("ModifyDataSource", req, cb)
  }

  /**
   * 查询任务告警规则列表
   */
  async DescribeTaskAlarmRegulations(
    req: DescribeTaskAlarmRegulationsRequest,
    cb?: (error: string, rep: DescribeTaskAlarmRegulationsResponse) => void
  ): Promise<DescribeTaskAlarmRegulationsResponse> {
    return this.request("DescribeTaskAlarmRegulations", req, cb)
  }

  /**
   * 查询集成任务版本节点信息
   */
  async DescribeIntegrationVersionNodesInfo(
    req: DescribeIntegrationVersionNodesInfoRequest,
    cb?: (error: string, rep: DescribeIntegrationVersionNodesInfoResponse) => void
  ): Promise<DescribeIntegrationVersionNodesInfoResponse> {
    return this.request("DescribeIntegrationVersionNodesInfo", req, cb)
  }

  /**
   * 获取项目下的用户，分页返回
   */
  async DescribeProjectUsers(
    req: DescribeProjectUsersRequest,
    cb?: (error: string, rep: DescribeProjectUsersResponse) => void
  ): Promise<DescribeProjectUsersResponse> {
    return this.request("DescribeProjectUsers", req, cb)
  }

  /**
   * 获取工作流调度信息
   */
  async DescribeWorkflowSchedulerInfoDs(
    req: DescribeWorkflowSchedulerInfoDsRequest,
    cb?: (error: string, rep: DescribeWorkflowSchedulerInfoDsResponse) => void
  ): Promise<DescribeWorkflowSchedulerInfoDsResponse> {
    return this.request("DescribeWorkflowSchedulerInfoDs", req, cb)
  }

  /**
   * 删除用户自定义函数
   */
  async DeleteCustomFunction(
    req: DeleteCustomFunctionRequest,
    cb?: (error: string, rep: DeleteCustomFunctionResponse) => void
  ): Promise<DeleteCustomFunctionResponse> {
    return this.request("DeleteCustomFunction", req, cb)
  }

  /**
   * 查询规则模板维度分布情况
   */
  async DescribeTemplateDimCount(
    req: DescribeTemplateDimCountRequest,
    cb?: (error: string, rep: DescribeTemplateDimCountResponse) => void
  ): Promise<DescribeTemplateDimCountResponse> {
    return this.request("DescribeTemplateDimCount", req, cb)
  }

  /**
   * 根据项目id 获取项目下所有工作流列表
   */
  async DescribeFolderWorkflowList(
    req: DescribeFolderWorkflowListRequest,
    cb?: (error: string, rep: DescribeFolderWorkflowListResponse) => void
  ): Promise<DescribeFolderWorkflowListResponse> {
    return this.request("DescribeFolderWorkflowList", req, cb)
  }

  /**
   * 查询集成任务
   */
  async DescribeIntegrationTask(
    req: DescribeIntegrationTaskRequest,
    cb?: (error: string, rep: DescribeIntegrationTaskResponse) => void
  ): Promise<DescribeIntegrationTaskResponse> {
    return this.request("DescribeIntegrationTask", req, cb)
  }

  /**
   * 查询数据服务API的发布态信息
   */
  async DescribeDataServicePublishedApiDetail(
    req: DescribeDataServicePublishedApiDetailRequest,
    cb?: (error: string, rep: DescribeDataServicePublishedApiDetailResponse) => void
  ): Promise<DescribeDataServicePublishedApiDetailResponse> {
    return this.request("DescribeDataServicePublishedApiDetail", req, cb)
  }

  /**
   * 查询工作流任务数
   */
  async DescribeWorkflowTaskCount(
    req: DescribeWorkflowTaskCountRequest,
    cb?: (error: string, rep: DescribeWorkflowTaskCountResponse) => void
  ): Promise<DescribeWorkflowTaskCountResponse> {
    return this.request("DescribeWorkflowTaskCount", req, cb)
  }

  /**
   * 统计任务实例状态
   */
  async CountOpsInstanceState(
    req: CountOpsInstanceStateRequest,
    cb?: (error: string, rep: CountOpsInstanceStateResponse) => void
  ): Promise<CountOpsInstanceStateResponse> {
    return this.request("CountOpsInstanceState", req, cb)
  }

  /**
   * 数据集成大屏实例状态统计趋势
   */
  async DescribeIntegrationStatisticsInstanceTrend(
    req: DescribeIntegrationStatisticsInstanceTrendRequest,
    cb?: (error: string, rep: DescribeIntegrationStatisticsInstanceTrendResponse) => void
  ): Promise<DescribeIntegrationStatisticsInstanceTrendResponse> {
    return this.request("DescribeIntegrationStatisticsInstanceTrend", req, cb)
  }

  /**
   * 查询工作流画布运行起止时间
   */
  async DescribeWorkflowExecuteById(
    req: DescribeWorkflowExecuteByIdRequest,
    cb?: (error: string, rep: DescribeWorkflowExecuteByIdResponse) => void
  ): Promise<DescribeWorkflowExecuteByIdResponse> {
    return this.request("DescribeWorkflowExecuteById", req, cb)
  }

  /**
   * 创建集成节点
   */
  async CreateIntegrationNode(
    req: CreateIntegrationNodeRequest,
    cb?: (error: string, rep: CreateIntegrationNodeResponse) => void
  ): Promise<CreateIntegrationNodeResponse> {
    return this.request("CreateIntegrationNode", req, cb)
  }

  /**
   * 任务运维-批量删除任务
   */
  async BatchDeleteOpsTasks(
    req: BatchDeleteOpsTasksRequest,
    cb?: (error: string, rep: BatchDeleteOpsTasksResponse) => void
  ): Promise<BatchDeleteOpsTasksResponse> {
    return this.request("BatchDeleteOpsTasks", req, cb)
  }

  /**
   * 提交规则组运行任务接口
   */
  async CommitRuleGroupTask(
    req: CommitRuleGroupTaskRequest,
    cb?: (error: string, rep: CommitRuleGroupTaskResponse) => void
  ): Promise<CommitRuleGroupTaskResponse> {
    return this.request("CommitRuleGroupTask", req, cb)
  }

  /**
   * 日志获取详情页面
   */
  async DescribeInstanceLastLog(
    req: DescribeInstanceLastLogRequest,
    cb?: (error: string, rep: DescribeInstanceLastLogResponse) => void
  ): Promise<DescribeInstanceLastLogResponse> {
    return this.request("DescribeInstanceLastLog", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
  async ModifyTaskLinks(
    req: ModifyTaskLinksRequest,
    cb?: (error: string, rep: ModifyTaskLinksResponse) => void
  ): Promise<ModifyTaskLinksResponse> {
    return this.request("ModifyTaskLinks", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
注册事件
     */
  async RegisterEvent(
    req: RegisterEventRequest,
    cb?: (error: string, rep: RegisterEventResponse) => void
  ): Promise<RegisterEventResponse> {
    return this.request("RegisterEvent", req, cb)
  }

  /**
   * 根据条件分页查询补录计划
   */
  async DescribeOpsMakePlans(
    req: DescribeOpsMakePlansRequest,
    cb?: (error: string, rep: DescribeOpsMakePlansResponse) => void
  ): Promise<DescribeOpsMakePlansResponse> {
    return this.request("DescribeOpsMakePlans", req, cb)
  }

  /**
   * 查询工作流画布
   */
  async DescribeWorkflowCanvasInfo(
    req: DescribeWorkflowCanvasInfoRequest,
    cb?: (error: string, rep: DescribeWorkflowCanvasInfoResponse) => void
  ): Promise<DescribeWorkflowCanvasInfoResponse> {
    return this.request("DescribeWorkflowCanvasInfo", req, cb)
  }

  /**
   * 查询数据库列表
   */
  async DescribeDatabaseMetas(
    req: DescribeDatabaseMetasRequest,
    cb?: (error: string, rep: DescribeDatabaseMetasResponse) => void
  ): Promise<DescribeDatabaseMetasResponse> {
    return this.request("DescribeDatabaseMetas", req, cb)
  }

  /**
   * 编排空间-工作流-创建任务文件夹
   */
  async CreateTaskFolder(
    req: CreateTaskFolderRequest,
    cb?: (error: string, rep: CreateTaskFolderResponse) => void
  ): Promise<CreateTaskFolderResponse> {
    return this.request("CreateTaskFolder", req, cb)
  }

  /**
   * 修改任务告警规则
   */
  async ModifyTaskAlarmRegular(
    req: ModifyTaskAlarmRegularRequest,
    cb?: (error: string, rep: ModifyTaskAlarmRegularResponse) => void
  ): Promise<ModifyTaskAlarmRegularResponse> {
    return this.request("ModifyTaskAlarmRegular", req, cb)
  }

  /**
   * 批量继续执行集成实时任务
   */
  async BatchResumeIntegrationTasks(
    req: BatchResumeIntegrationTasksRequest,
    cb?: (error: string, rep: BatchResumeIntegrationTasksResponse) => void
  ): Promise<BatchResumeIntegrationTasksResponse> {
    return this.request("BatchResumeIntegrationTasks", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     */
  async SetTaskAlarmNew(
    req: SetTaskAlarmNewRequest,
    cb?: (error: string, rep: SetTaskAlarmNewResponse) => void
  ): Promise<SetTaskAlarmNewResponse> {
    return this.request("SetTaskAlarmNew", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
  async SubmitTask(
    req: SubmitTaskRequest,
    cb?: (error: string, rep: SubmitTaskResponse) => void
  ): Promise<SubmitTaskResponse> {
    return this.request("SubmitTask", req, cb)
  }

  /**
   * 即席分析提交SQL任务
   */
  async SubmitSqlTask(
    req: SubmitSqlTaskRequest,
    cb?: (error: string, rep: SubmitSqlTaskResponse) => void
  ): Promise<SubmitSqlTaskResponse> {
    return this.request("SubmitSqlTask", req, cb)
  }

  /**
   * 获取数据源信息-数据源分页列表
   */
  async DescribeDataSourceInfoList(
    req: DescribeDataSourceInfoListRequest,
    cb?: (error: string, rep: DescribeDataSourceInfoListResponse) => void
  ): Promise<DescribeDataSourceInfoListResponse> {
    return this.request("DescribeDataSourceInfoList", req, cb)
  }

  /**
   * 查询函数分类
   */
  async DescribeFunctionKinds(
    req?: DescribeFunctionKindsRequest,
    cb?: (error: string, rep: DescribeFunctionKindsResponse) => void
  ): Promise<DescribeFunctionKindsResponse> {
    return this.request("DescribeFunctionKinds", req, cb)
  }

  /**
   * 查询Inlong manager日志
   */
  async TaskLog(
    req: TaskLogRequest,
    cb?: (error: string, rep: TaskLogResponse) => void
  ): Promise<TaskLogResponse> {
    return this.request("TaskLog", req, cb)
  }

  /**
   * 查询规则模板列表
   */
  async DescribeRuleTemplates(
    req: DescribeRuleTemplatesRequest,
    cb?: (error: string, rep: DescribeRuleTemplatesResponse) => void
  ): Promise<DescribeRuleTemplatesResponse> {
    return this.request("DescribeRuleTemplates", req, cb)
  }

  /**
   * 修改工作流责任人
   */
  async UpdateWorkflowOwner(
    req: UpdateWorkflowOwnerRequest,
    cb?: (error: string, rep: UpdateWorkflowOwnerResponse) => void
  ): Promise<UpdateWorkflowOwnerResponse> {
    return this.request("UpdateWorkflowOwner", req, cb)
  }

  /**
   * 更新集成节点
   */
  async ModifyIntegrationNode(
    req: ModifyIntegrationNodeRequest,
    cb?: (error: string, rep: ModifyIntegrationNodeResponse) => void
  ): Promise<ModifyIntegrationNodeResponse> {
    return this.request("ModifyIntegrationNode", req, cb)
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
   * 查询表元数据详情
   */
  async DescribeTableMeta(
    req: DescribeTableMetaRequest,
    cb?: (error: string, rep: DescribeTableMetaResponse) => void
  ): Promise<DescribeTableMetaResponse> {
    return this.request("DescribeTableMeta", req, cb)
  }

  /**
   * 创建数据建模，提供给云应用使用，实现“Wedata数据建模”的下单发货
   */
  async CreateDataModel(
    req: CreateDataModelRequest,
    cb?: (error: string, rep: CreateDataModelResponse) => void
  ): Promise<CreateDataModelResponse> {
    return this.request("CreateDataModel", req, cb)
  }

  /**
   * 提取数据集成节点字段Schema
   */
  async GetIntegrationNodeColumnSchema(
    req: GetIntegrationNodeColumnSchemaRequest,
    cb?: (error: string, rep: GetIntegrationNodeColumnSchemaResponse) => void
  ): Promise<GetIntegrationNodeColumnSchemaResponse> {
    return this.request("GetIntegrationNodeColumnSchema", req, cb)
  }

  /**
   * 查询用户生产工作流列表
   */
  async DescribeOpsWorkflows(
    req: DescribeOpsWorkflowsRequest,
    cb?: (error: string, rep: DescribeOpsWorkflowsResponse) => void
  ): Promise<DescribeOpsWorkflowsResponse> {
    return this.request("DescribeOpsWorkflows", req, cb)
  }

  /**
   * 批量重跑集成任务实例
   */
  async BatchRerunIntegrationTaskInstances(
    req: BatchRerunIntegrationTaskInstancesRequest,
    cb?: (error: string, rep: BatchRerunIntegrationTaskInstancesResponse) => void
  ): Promise<BatchRerunIntegrationTaskInstancesResponse> {
    return this.request("BatchRerunIntegrationTaskInstances", req, cb)
  }

  /**
   * 列出表血缘信息
   */
  async DescribeTableLineageInfo(
    req: DescribeTableLineageInfoRequest,
    cb?: (error: string, rep: DescribeTableLineageInfoResponse) => void
  ): Promise<DescribeTableLineageInfoResponse> {
    return this.request("DescribeTableLineageInfo", req, cb)
  }

  /**
   * 提交自定义函数
   */
  async SubmitCustomFunction(
    req: SubmitCustomFunctionRequest,
    cb?: (error: string, rep: SubmitCustomFunctionResponse) => void
  ): Promise<SubmitCustomFunctionResponse> {
    return this.request("SubmitCustomFunction", req, cb)
  }

  /**
   * 查询实时任务实例节点信息
   */
  async DescribeRealTimeTaskInstanceNodeInfo(
    req: DescribeRealTimeTaskInstanceNodeInfoRequest,
    cb?: (error: string, rep: DescribeRealTimeTaskInstanceNodeInfoResponse) => void
  ): Promise<DescribeRealTimeTaskInstanceNodeInfoResponse> {
    return this.request("DescribeRealTimeTaskInstanceNodeInfo", req, cb)
  }

  /**
   * 数据集成大屏概览
   */
  async DescribeIntegrationStatistics(
    req: DescribeIntegrationStatisticsRequest,
    cb?: (error: string, rep: DescribeIntegrationStatisticsResponse) => void
  ): Promise<DescribeIntegrationStatisticsResponse> {
    return this.request("DescribeIntegrationStatistics", req, cb)
  }

  /**
   * 批量停止工作流
   */
  async BatchStopWorkflowsByIds(
    req: BatchStopWorkflowsByIdsRequest,
    cb?: (error: string, rep: BatchStopWorkflowsByIdsResponse) => void
  ): Promise<BatchStopWorkflowsByIdsResponse> {
    return this.request("BatchStopWorkflowsByIds", req, cb)
  }

  /**
     * 无效API，没有上线过的业务功能

分页查询试运行实例列表
     */
  async DescribeDrInstancePage(
    req: DescribeDrInstancePageRequest,
    cb?: (error: string, rep: DescribeDrInstancePageResponse) => void
  ): Promise<DescribeDrInstancePageResponse> {
    return this.request("DescribeDrInstancePage", req, cb)
  }

  /**
   * 销毁数据建模，提供给云应用使用，实现“Wedata数据建模”的销毁
   */
  async DeleteDataModel(
    req: DeleteDataModelRequest,
    cb?: (error: string, rep: DeleteDataModelResponse) => void
  ): Promise<DeleteDataModelResponse> {
    return this.request("DeleteDataModel", req, cb)
  }
}

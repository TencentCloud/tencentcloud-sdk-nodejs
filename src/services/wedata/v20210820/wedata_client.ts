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
  DescribeBatchOperateTaskPage,
  CreateRuleTemplateResponse,
  AlarmInfo,
  DescribeEventConsumeTasksResponse,
  RuleHistory,
  DescribeIntegrationStatisticsResponse,
  InstanceList,
  SubmitTaskTestRunResponse,
  DescribeStreamTaskLogListRequest,
  ModifyBaselineAlarmStatusRequest,
  DescribeIntegrationNodeResponse,
  MakeUpTasksNewResponse,
  LogContentInfo,
  ModifyIntegrationTaskRequest,
  DescribeScheduleInstanceResponse,
  DescribeRuleDimStatResponse,
  DescribeInstanceLogsRequest,
  DescribeTaskAlarmRegulationsResponse,
  CheckIntegrationTaskNameExistsResponse,
  DescribeWorkflowInfoByIdRequest,
  CreateDataSourceRequest,
  IntegrationNodeSchemaMapping,
  DescribeTrendStatResponse,
  DescribeRealTimeTaskSpeedRequest,
  DescribeRuleDimStatRequest,
  FreezeTasksRequest,
  DescribeDataObjectsResponse,
  DescribeRuleTemplatesResponse,
  DescribeRuleExecStatRequest,
  MakeUpWorkflowNewResponse,
  DescribeInstancesInfoWithTaskInfoResponse,
  ModifyBaselineTaskAlarmStatusResponse,
  CreateIntegrationNodeResponse,
  BatchDeleteTasksDsRequest,
  CreateDsFolderResponse,
  UserFileInfo,
  RuleGroupSchedulerInfo,
  FreezeOpsTasksRequest,
  InstanceOpsInfoPage,
  DeleteBaselineRequest,
  DescribeRulesResponse,
  InLongAgentTask,
  RuleGroupPage,
  RecordsSpeed,
  ColumnLineageInfo,
  InLongAgentDetail,
  CreateWorkflowRequest,
  FindAllFolderRequest,
  DlcMergeManifestsInfo,
  RuleExecResultDetail,
  DataSourceInfoPage,
  OpsTaskInfoPage,
  DescribeRuleGroupExecResultsByPageRequest,
  Label,
  DescribeTableLineageRequest,
  KillOpsMakePlanInstancesRequest,
  UpdateWorkflowOwnerRequest,
  DescribeEventCasesRequest,
  EventPage,
  BatchResumeIntegrationTasksResponse,
  DescribeRuleExecResultsByPageResponse,
  RuleGroupExecResult,
  MakeUpTasksByWorkflowResponse,
  AlarmEventInfo,
  TaskInstanceDetail,
  BytesSpeed,
  CheckTaskNameExistRequest,
  ThresholdValue,
  DescribeFunctionKindsRequest,
  DescribeFunctionKindsResponse,
  UpdateInLongAgentResponse,
  DescribeTemplateDimCountRequest,
  ModifyIntegrationTaskResponse,
  DescribeDataSourceListRequest,
  DescribeInstanceByCycleResponse,
  DescribeIntegrationStatisticsRecordsTrendRequest,
  DescribeInLongTkeClusterListResponse,
  DescribeOperateTasksRequest,
  DescribeDataCheckStatRequest,
  RegisterEventListenerResponse,
  SubscribeWebHook,
  RestartInLongAgentResponse,
  GetOfflineInstanceListRequest,
  ModifyAlarmRuleRequest,
  Workflow,
  DescribeRuleExecResultsRequest,
  DescribeStandardRuleDetailInfoListResponse,
  DescribeDrSonInstanceResponse,
  InstanceOpsDto,
  RunTaskResponse,
  SubmitWorkflowResponse,
  DeleteBaselineResponse,
  TriggerEventRequest,
  WorkflowTaskCountOpsDto,
  StageCloudApiRequest,
  DescribeDependOpsTasksRequest,
  DescribeClusterNamespaceListResponse,
  CreateInLongAgentResponse,
  RuleGroupTable,
  DescribeInstanceLogRequest,
  DescribeKafkaTopicInfoRequest,
  DescribeRuleGroupSubscriptionResponse,
  DescribeIntegrationStatisticsTaskStatusTrendResponse,
  DeleteResourceFileRequest,
  SaveCustomFunctionRequest,
  DescribeSchedulerTaskTypeCntRequest,
  InLongTkeDetail,
  RuleGroupExecStrategy,
  ModifyWorkflowScheduleRequest,
  CreateDsFolderRequest,
  RegisterEventRequest,
  Property,
  MakePlanOpsDtoCollection,
  CheckAlarmRegularNameExistResponse,
  CreateAlarmRuleRequest,
  RuleExecLog,
  DescribeDiagnosticInfoByBaselineIdRequest,
  RuleTemplate,
  DescribeRuleGroupsByPageRequest,
  DescribeDataBasesRequest,
  BatchDeleteIntegrationTasksResponse,
  SearchConditionInstanceNew,
  DescribeThirdTaskRunLogRequest,
  BatchRerunIntegrationTaskInstancesRequest,
  DescribeDrSonInstanceRequest,
  TableLineageInfo,
  DescribeWorkflowTaskCountResponse,
  RuleTemplateHistoryPage,
  AlarmRuleDto,
  SubmitCustomFunctionResponse,
  DescribeDataObjectsRequest,
  SearchCondition,
  Rule,
  DescribeTableLineageResponse,
  ModifyRuleGroupSubscriptionRequest,
  DescribeDataSourceListResponse,
  AgentStatus,
  ExportTaskInfo,
  DescribeInstanceLogDetailRequest,
  BatchSuspendIntegrationTasksRequest,
  DeleteDsFolderResponse,
  DescribeDrInstancePageResponse,
  TaskCanvasInfo,
  TaskLinkInfo,
  DescribeFolderListData,
  DescribeSchedulerTaskTypeCntResponse,
  UserFileDTO,
  DeleteCustomFunctionResponse,
  EditBaselineRequest,
  InstanceNodeInfo,
  DimensionScoreInfo,
  DescribeTaskScriptResponse,
  UploadContentResponse,
  ForceSucScheduleInstancesResponse,
  CollectionInstanceOpsDto,
  DrInstanceOpsDtoPage,
  RuleExecDateStat,
  DescribeTaskInstanceResponse,
  DescribeSchedulerInstanceStatusResponse,
  CountOpsInstanceStateRequest,
  EventCaseOpsDto,
  DrInstanceOpsDto,
  SubmitBaselineRequest,
  DescribeProdTasksRequest,
  CheckDuplicateTemplateNameRequest,
  DescribeEventTypesResponse,
  BatchUpdateIntegrationTasksRequest,
  CreateResourcePathRequest,
  BatchModifyOpsOwnersRequest,
  ModifyTaskNameResponse,
  BatchDeleteOpsTasksRequest,
  ResumeIntegrationTaskResponse,
  WorkflowExtOpsDto,
  LineageParamRecord,
  BatchResult,
  FreezeTasksResponse,
  DescribeTaskReportDetailListResponse,
  DescribeBaselineInstanceDagRequest,
  DescribeIntegrationStatisticsInstanceTrendResponse,
  DescribeInstanceLogListRequest,
  RerunOpsMakePlanInstancesResponse,
  RunnerRuleExecResult,
  DescribeAllTaskTypeResponse,
  DescribeRuleGroupResponse,
  DeleteDataSourcesResponse,
  DescribeBatchOperateTaskDTO,
  ModifyTaskLinksRequest,
  DescribeBaselineInstancesResponse,
  DescribeOpsMakePlansResponse,
  EventCaseConsumeLogOptDtoCollection,
  DeleteFileRequest,
  DeleteDataSourcesRequest,
  TaskInnerInfo,
  ModifyTaskAlarmRegularRequest,
  BaselineInstanceVo,
  DescribeOrganizationalFunctionsRequest,
  DescribeRuleTemplateResponse,
  DescribeKafkaTopicInfoResponse,
  OpsTaskCanvasInfoList,
  DescribeDependTaskListsRequest,
  CollectionFolderOpsDto,
  RerunInstancesRequest,
  DlcRemoveOrphanFilesInfo,
  DescribeEventsRequest,
  DescribeAllByFolderNewRequest,
  DescribeTaskRunHistoryResponse,
  BatchStopWorkflowsByIdsRequest,
  DescribeBatchOperateTaskResponse,
  CommitIntegrationTaskRequest,
  DescribeTableInfoListRequest,
  DescribeQualityScoreRequest,
  RunForceSucScheduleInstancesResponse,
  DescribeBaselineAllTaskDagResponse,
  CommitIntegrationTaskResponse,
  TaskReportDetail,
  CreateBaselineRequest,
  IntegrationTaskInfo,
  DeleteResourceFilesRequest,
  DeleteResourceFileResponse,
  SubmitTaskResponse,
  ModifyFolderRequest,
  DescribeAlarmEventsResponse,
  DescribeInstanceLogListResponse,
  RuleGroup,
  DescribeTableQualityDetailsRequest,
  DescribeScheduleInstancesResponse,
  DeleteProjectParamDsResponse,
  RuleConfig,
  RunTaskRequest,
  DescribeOpsWorkflowsRequest,
  DescribeDependTasksNewRequest,
  CreateOfflineTaskResponse,
  DescribeColumnLineageRequest,
  CreateTaskAlarmRegularRequest,
  ModifyRuleRequest,
  BatchReturn,
  DescribeDiagnosticInfoResponse,
  FindAllFolderResponse,
  MakeUpOpsTasksResponse,
  ResourcePathTree,
  StopBaselineRequest,
  DescribeInLongAgentListRequest,
  DescribeRuleExecLogResponse,
  DescribeDependOpsTaskListRequest,
  ParamInfo,
  DescribeInstanceLogsResponse,
  DescribeDsFolderTreeRequest,
  BatchDeleteIntegrationTasksRequest,
  KillOpsMakePlanInstancesResponse,
  DescribeScheduleInstanceRequest,
  TaskLogRequest,
  SourceObject,
  DescribeBaselineAllTaskDagRequest,
  OpsTaskLinkInfoDto,
  IntegrationNodeInfo,
  DescribeIntegrationStatisticsTaskStatusRequest,
  GetFileInfoResponse,
  BatchDeleteTasksNewResponse,
  DescribeBelongToResponse,
  WorkFlowExecuteDto,
  FreezeOpsTasksResponse,
  IntegrationNodeMapping,
  ColumnAggregationLineage,
  ModifyRuleGroupSubscriptionResponse,
  SuspendIntegrationTaskRequest,
  CreateHiveTableByDDLResponse,
  DescribeOperateOpsTaskDatasourceTypeRequest,
  DescribeTaskByCycleResponse,
  DescribeExecStrategyResponse,
  DescribeSuccessorOpsTaskInfosResponse,
  DeleteResourceResponse,
  ModifyRuleResponse,
  DescribeInstanceLogFileResponse,
  DescribeTaskInstanceReportDetailRequest,
  SubmitBaselineResponse,
  PairDto,
  DeleteTaskDsResponse,
  Namespace,
  DescribeAllByFolderNewResponse,
  DescribeDsParentFolderTreeRequest,
  KillScheduleInstancesResponse,
  RerunScheduleInstancesRequest,
  DescribeTaskInstancesResponse,
  CheckIntegrationNodeNameExistsResponse,
  DescribeWorkflowTaskCountRequest,
  DescribeInstanceListRequest,
  ModifyWorkflowScheduleResponse,
  DeleteCustomFunctionRequest,
  TaskInfoDataPage,
  DescribeAllTaskTypeRequest,
  SimpleDataSourceInfo,
  InstanceLogInfo,
  GetFileInfoRequest,
  DescribeSonInstancesRequest,
  DescribeBaselinesResponse,
  DescribeTaskInstancesData,
  MakePlanInstanceOpsDtoCollection,
  DryRunDIOfflineTaskRequest,
  CreateOfflineTaskRequest,
  SubmitSqlTaskResponse,
  DescribeIntegrationStatisticsRecordsTrendResponse,
  EventOpsDto,
  DescribeFolderWorkflowListData,
  DescribeWorkflowOpsCanvasInfoRequest,
  ScreenTaskInfo,
  RerunOpsMakePlanInstancesRequest,
  TableConfig,
  TaskInstanceCountDto,
  TableScoreStatisticsInfo,
  BatchForceSuccessIntegrationTaskInstancesResponse,
  BaselineTaskInfo,
  TaskAlarmInfo,
  DescribeClusterNamespaceListRequest,
  AlarmReceiverInfo,
  GeneralTaskParam,
  DiagnosePlusRequest,
  DescribeDiagnosticInfoByBaselineIdResponse,
  CreateInLongAgentRequest,
  ModifyRuleTemplateRequest,
  DescribeRuleExecStatResponse,
  TaskByCycle,
  DagInstancesResponse,
  DescribeAllUsedVersionSonResponse,
  DescribeTemplateHistoryRequest,
  CanvasInfo,
  BatchRunOpsTaskResponse,
  FreezeTasksByMultiWorkflowRequest,
  IntegrationNodeDetail,
  DescribeEventResponse,
  DescribeOpsMakePlanInstancesRequest,
  ForceSucInstancesRequest,
  DescribeRuleExecExportResultRequest,
  GenHiveTableDDLSqlRequest,
  BatchCreateIntegrationTaskAlarmsRequest,
  QualityScore,
  LockIntegrationTaskResponse,
  KillScheduleInstancesRequest,
  DescribeEventsResponse,
  SearchConditionNew,
  BatchStopOpsTasksRequest,
  DescribeFunctionTypesResponse,
  DeleteWorkflowNewRequest,
  BatchUpdateIntegrationTasksResponse,
  TaskLogResponse,
  CheckDuplicateRuleNameRequest,
  AdhocDetail,
  ModifyRuleTemplateResponse,
  DescribeInstanceLastLogRequest,
  DescribeEventRequest,
  TableQualityDetailPage,
  TaskTypeOpsDto,
  BatchModifyOpsOwnersResponse,
  TaskInstanceInfo,
  CreateTaskAlarmRegularResponse,
  DeleteRuleTemplateRequest,
  DescribeOpsMakePlanTasksRequest,
  TaskVersionInstance,
  CreateBaselineResponse,
  TableInfo,
  DescribeProjectRequest,
  CreateIntegrationTaskResponse,
  DescribeIntegrationTasksResponse,
  DescribeAlarmReceiverRequest,
  SchedulerTaskInstanceInfo,
  DescribeSchedulerTaskCntByStatusResponse,
  TaskExtInfo,
  ModifyWorkflowInfoRequest,
  MakePlanOpsDto,
  StartIntegrationTaskResponse,
  SubmitWorkflow,
  BatchResumeIntegrationTasksRequest,
  DescribeFolderListRequest,
  DeleteTaskAlarmRegularResponse,
  DeleteWorkflowByIdRequest,
  ProjectBaseInfoOpsRequest,
  DescribeFathersResponse,
  DeleteRuleResponse,
  MakePlanTaskOpsDtoCollection,
  SimpleColumnInfo,
  LinkOpsDto,
  DescribeOpsMakePlanTasksResponse,
  DescribeInLongAgentListResponse,
  Folder,
  CreateTaskResponse,
  TableQualityDetail,
  BatchStopIntegrationTasksResponse,
  ForceSucScheduleInstancesRequest,
  DescribeInstanceByCycleReportResponse,
  DeleteIntegrationNodeResponse,
  CommitRuleGroupExecResultRequest,
  DescribeDataSourceInfoListRequest,
  DescribeTaskInstancesRequest,
  UpdateInLongAgentRequest,
  DescribeRuleGroupExecResultsByPageWithoutAuthResponse,
  DescribeIntegrationNodeRequest,
  DescribeOperateOpsTaskDatasourceResponse,
  DescribeEventIsAlarmTypesResponse,
  BatchOperationOpsDto,
  RuleExecConfig,
  BaselineTaskDto,
  SearchConditionInstance,
  DescribeSchedulerRunTimeInstanceCntByStatusResponse,
  DescribeDataTypesRequest,
  RecordField,
  RunForceSucScheduleInstancesRequest,
  DescribeQualityScoreResponse,
  DeleteInLongAgentRequest,
  DescribeDsParentFolderTreeResponse,
  DescribeRuleTablesByPageRequest,
  TopTableStatItem,
  DescribeIntegrationStatisticsAgentStatusResponse,
  DescribeEventConsumeTasksRequest,
  DescribeDataSourceInfoListResponse,
  InstanceStatisticInfo,
  DescribeRelatedInstancesResponse,
  CreateOrUpdateResourceRequest,
  CheckIntegrationNodeNameExistsRequest,
  MakeUpTasksNewRequest,
  GetOfflineInstanceListResponse,
  DescribeOpsMakePlansRequest,
  CreateOpsMakePlanRequest,
  BatchDeleteTasksDsResponse,
  DescribeDimensionScoreResponse,
  ScriptRequestInfo,
  DescribeOrganizationalFunctionsResponse,
  DescribeInstancesInfoWithTaskInfoRequest,
  DescribeEventDetailRequest,
  FreezeTasksByWorkflowIdsRequest,
  DescribeDataTypesResponse,
  DescribeTaskByCycleReportResponse,
  BatchDeleteOpsTasksResponse,
  CheckDuplicateRuleNameResponse,
  BatchOperateResultOpsDto,
  DeleteRuleRequest,
  EventCaseAuditLogOptDto,
  RealTimeTaskInstanceNodeInfo,
  DeleteResourceFilesResponse,
  DescribeEventIsAlarmTypesRequest,
  CreateOpsMakePlanResponse,
  DescribeStreamTaskLogListResponse,
  DlcDataGovernPolicy,
  DeleteWorkflowNewResponse,
  DescribeRuleGroupExecResultsByPageResponse,
  DescribeRuleGroupExecResultsByPageWithoutAuthRequest,
  BaselineDetailResponse,
  GetIntegrationNodeColumnSchemaRequest,
  DeleteWorkflowByIdResponse,
  DescribeInstancesResponse,
  RulePage,
  DeleteIntegrationNodeRequest,
  StringListNode,
  ModifyIntegrationNodeResponse,
  DescribeIntegrationStatisticsTaskStatusTrendRequest,
  DescribeRuleHistoryByPageResponse,
  EventDto,
  DescribeWorkflowInfoByIdResponse,
  DescribeBaselineByIdRequest,
  RuleDimStat,
  ModifyDimensionWeightResponse,
  ModifyTaskAlarmRegularResponse,
  InstanceSearchCondition,
  CreateRuleResponse,
  ModifyTaskLinksResponse,
  DescribeTaskRunHistoryRequest,
  BatchMakeUpIntegrationTasksRequest,
  OfflineInstance,
  InstanceCondition,
  DeleteOfflineTaskRequest,
  SubmitTaskRequest,
  WeightInfo,
  DescribeInLongAgentVpcListRequest,
  RuleExecExportResult,
  DescribeDatabaseInfoListResponse,
  ModifyDsFolderResponse,
  CommonContent,
  DescribeTableScoreTrendResponse,
  ModifyIntegrationNodeRequest,
  ModifyMonitorStatusResponse,
  DescribeRuleTemplatesByPageResponse,
  InstanceLog,
  DescribeTemplateDimCountResponse,
  DescribeFunctionTypesRequest,
  RestartInLongAgentRequest,
  BatchDeleteTasksNewRequest,
  DimensionCount,
  DescribeInstanceLogResponse,
  DeleteInLongAgentResponse,
  InstanceLogList,
  ModifyMonitorStatusRequest,
  DescribeColumnLineageResponse,
  DeleteFolderRequest,
  DescribeIntegrationTaskRequest,
  DescribeWorkflowListByProjectIdResponse,
  DeleteFilePathRequest,
  DescribeRulesByPageRequest,
  DescribeTopTableStatResponse,
  ProdSchedulerTask,
  WorkflowSchedulerOpsDto,
  DescribeEventDetailResponse,
  SourceFieldInfo,
  DeleteDsFolderRequest,
  FreezeTasksByMultiWorkflowResponse,
  SaveCustomFunctionResponse,
  ModifyDsFolderRequest,
  AdhocRecord,
  OperateResult,
  CreateTaskRequest,
  ModifyDimensionWeightRequest,
  SimpleTaskInfo,
  CreateFolderResponse,
  DescribeRealTimeTaskInstanceNodeInfoRequest,
  EventCaseAuditLogVOCollection,
  DescribeDependTaskListsResponse,
  DescribeTaskInstanceReportDetailResponse,
  CreateHiveTableResponse,
  RuleTemplatePage,
  ModifyDataSourceResponse,
  OperationOpsDto,
  DescribeTaskByStatusReportResponse,
  DescribeMonitorsByPageRequest,
  CreateMakeDatetimeInfo,
  DescribeRuleGroupsByPageResponse,
  InstanceApiOpsRequest,
  SubmitSqlTaskRequest,
  DescribeTaskLockStatusResponse,
  KillInstancesRequest,
  RemoveWorkflowDsRequest,
  BatchKillIntegrationTaskInstancesRequest,
  DeleteTaskDsRequest,
  BatchStopOpsTasksResponse,
  InstanceLogInfoOpsDto,
  DeleteFilePathResponse,
  InstanceReportWriteNode,
  RunRerunScheduleInstancesResponse,
  DependencyConfig,
  RobAndLockIntegrationTaskRequest,
  RuleGroupMonitorPage,
  CommitExportTaskResponse,
  ModifyTaskInfoResponse,
  DataCheckStat,
  CreateRuleRequest,
  DescribeRuleGroupSubscriptionRequest,
  DescribeRuleExecResultsResponse,
  DescribeTaskByStatusReportRequest,
  QualityScoreTrend,
  DeleteFileResponse,
  InstanceInfo,
  TaskInfoData,
  ModifyDataSourceRequest,
  DescribeDrInstanceScriptContentResponse,
  StopBaselineResponse,
  TriggerEventResponse,
  DescribeSchedulerTaskCntByStatusRequest,
  DescribeInstancesRequest,
  DescribeRuleDataSourcesRequest,
  DatasourceTypeByTaskType,
  CreateCustomFunctionRequest,
  DescribeResourceManagePathTreesRequest,
  DescribeTasksByPageResponse,
  FunctionResource,
  DescribeInstanceByCycleReportRequest,
  DescribeTableQualityDetailsResponse,
  DescribeStandardRuleDetailInfoListRequest,
  DescribeDataSourceWithoutInfoResponse,
  CommonIdOpsDto,
  BatchStopWorkflowsByIdsResponse,
  DescribeDependOpsTaskListResponse,
  DatasourceBaseInfo,
  DescribeRuleTemplatesRequest,
  DiagnosePlusResponse,
  DescribeWorkflowListByProjectIdRequest,
  AlarmIndicatorInfo,
  DescribeStatisticInstanceStatusTrendOpsResponse,
  CountOpsInstanceStateResponse,
  SubscribeReceiver,
  DescribeQualityScoreTrendRequest,
  RobLockState,
  SubmitTaskTestRunRequest,
  DescribeAlarmEventsRequest,
  CompareResult,
  RuleHistoryPage,
  InstanceReportSummary,
  BooleanResponse,
  DeleteProjectParamDsRequest,
  DescribeRuleTablesByPageResponse,
  SpeedValue,
  FunctionVersion,
  InstanceDownloadLogInfo,
  DescribeSonInstancesResponse,
  InstanceReportReadNode,
  DescribeThirdTaskRunLogResponse,
  DescribeTaskAlarmRegulationsRequest,
  DescribeRuleExecHistoryRequest,
  EditBaselineResponse,
  DimensionScore,
  CreateCustomFunctionResponse,
  ScreenInstanceInfo,
  ModifyTaskInfoRequest,
  DescribeOperateOpsTasksRequest,
  DataSourceInfo,
  CompareRuleItem,
  DescribeTaskDetailRequest,
  TaskOpsDto,
  DescribeOfflineTaskTokenRequest,
  CreateWorkflowResponse,
  DescribeRuleExecDetailRequest,
  DeleteResourceRequest,
  RuleGroupSubscribe,
  RegisterEventListenerRequest,
  BaselineTaskInstanceDto,
  CollectionTaskOpsDto,
  RobAndLockIntegrationTaskResponse,
  DescribeFathersRequest,
  DeleteTaskAlarmRegularRequest,
  CompareRule,
  DescribeIntegrationStatisticsAgentStatusRequest,
  DescribeInstanceLogFileRequest,
  UnlockIntegrationTaskRequest,
  DeleteOfflineTaskResponse,
  IntegrationInstanceLog,
  TaskScriptContent,
  IntegrationStatisticsTrendResult,
  DescribeDrInstancePageRequest,
  RuntimeInstanceCntTop,
  DescribeBelongToRequest,
  ForceSucInstancesResponse,
  GenHiveTableDDLSqlResponse,
  DescribeTaskReportResponse,
  DescribeRuleGroupTableRequest,
  CheckAlarmRegularNameExistRequest,
  GetOfflineDIInstanceListResponse,
  DescribeOperateOpsTaskDatasourceRequest,
  RuleExecResult,
  DescribeWorkflowExecuteByIdResponse,
  CreateIntegrationTaskRequest,
  BatchRunOpsTaskRequest,
  FieldConfig,
  DescribeRealTimeTaskMetricOverviewRequest,
  DescribeBaselineTaskDagResponse,
  CreateResourcePathResponse,
  DeleteFolderResponse,
  FreezeTasksByWorkflowIdsResponse,
  SubmitWorkflowRequest,
  DescribeResourceManagePathTreesResponse,
  RuleGroupMonitor,
  RunRerunScheduleInstancesRequest,
  StartIntegrationTaskRequest,
  DescribeTaskDetailResponse,
  RerunInstancesResponse,
  RuleGroupTableInnerInfo,
  DeleteIntegrationTaskRequest,
  CompareResultItem,
  CreateOrUpdateResourceResponse,
  ModifyTaskScriptRequest,
  CreateIntegrationNodeRequest,
  DescribeTableSchemaInfoRequest,
  DescribeTableScoreTrendRequest,
  RuleExecResultPage,
  BaselineDto,
  ModifyExecStrategyRequest,
  DescribeBaselineInstancesRequest,
  MakeUpOpsTasksRequest,
  BatchForceSuccessIntegrationTaskInstancesRequest,
  DescribeRealTimeTaskInstanceNodeInfoResponse,
  DescribeTaskByCycleReportRequest,
  DescribeInstanceLogDetailResponse,
  SetTaskAlarmNewResponse,
  DescribeProdTasksResponse,
  SubmitCustomFunctionRequest,
  DescribeBatchOperateTaskRequest,
  MakeUpWorkflowNewRequest,
  DescribeTaskReportRequest,
  CommitRuleGroupTaskResponse,
  DescribeRealTimeTaskMetricOverviewResponse,
  DescribeOfflineTaskTokenResponse,
  DescribeTableInfoListResponse,
  RealTimeTaskSpeed,
  RemoveWorkflowDsResponse,
  GetOfflineDIInstanceListRequest,
  ModifyExecStrategyResponse,
  BatchStartIntegrationTasksRequest,
  DescribeDatasourceResponse,
  IntegrationNodeSchema,
  DescribeDatasourceRequest,
  RuleExecStat,
  KillInstancesResponse,
  DescribeStatisticInstanceStatusTrendOpsRequest,
  DescribeEventCasesResponse,
  DescribeTableSchemaInfoResponse,
  DescribeDataBasesResponse,
  SuspendIntegrationTaskResponse,
  UpdateWorkflowOwnerResponse,
  SetTaskAlarmNewRequest,
  RerunScheduleInstancesResponse,
  DescribeInstanceListResponse,
  DescribeOpsInstanceLogListRequest,
  UploadContentRequest,
  DescribeTaskReportDetailListRequest,
  DescribeProjectResponse,
  StopIntegrationTaskRequest,
  FunctionTypeOrKind,
  DescribeRuleGroupRequest,
  CreateDataSourceResponse,
  TaskByStatus,
  DescribeFolderWorkflowListResponse,
  CreateFolderRequest,
  DescribeIntegrationVersionNodesInfoResponse,
  DescribeRulesRequest,
  DescribeDrInstanceScriptContentRequest,
  DescribeRuleResponse,
  DescribeTaskScriptRequest,
  TaskTypeCnt,
  DescribeRuleHistoryByPageRequest,
  SchemaDetail,
  CheckIntegrationTaskNameExistsRequest,
  DescribeRuleRequest,
  TaskTypeMap,
  DescribeRuleDataSourcesResponse,
  DescribeAlarmReceiverResponse,
  DlcExpiredSnapshotsInfo,
  DescribeWorkflowCanvasInfoResponse,
  BatchModifyOwnersNewResponse,
  DescribeRulesByPageResponse,
  Partition,
  RuleDimCnt,
  ModifyBaselineTaskAlarmStatusRequest,
  BatchOperateResult,
  ModifyTaskScriptResponse,
  DescribeDimensionScoreRequest,
  CvmAgentStatus,
  FolderDsDto,
  BatchStartIntegrationTasksResponse,
  DescribeIntegrationVersionNodesInfoRequest,
  DescribeSuccessorOpsTaskInfosRequest,
  DescribeSchedulerInstanceStatusRequest,
  DescribeScheduleInstancesRequest,
  DescribeRealTimeTaskSpeedResponse,
  ModifyWorkflowInfoResponse,
  DescribeFolderWorkflowListRequest,
  DescribeBaselineInstanceDagResponse,
  RuleFieldConfig,
  CheckTaskNameExistResponse,
  DescribeSchedulerRunTimeInstanceCntByStatusRequest,
  StrToStrMap,
  WorkflowCanvasOpsDto,
  DescribeInLongAgentTaskListResponse,
  LockIntegrationTaskRequest,
  TaskInfoPage,
  BatchStopIntegrationTasksRequest,
  DescribeRuleTemplatesByPageRequest,
  DescribeMonitorsByPageResponse,
  DescribeRuleExecResultsByPageRequest,
  RunTasksByMultiWorkflowResponse,
  DescribeInstanceLastLogResponse,
  DescribeExecStrategyRequest,
  ScriptInfoResponse,
  CreateHiveTableRequest,
  BatchKillIntegrationTaskInstancesResponse,
  RunTasksByMultiWorkflowRequest,
  EventListenerOpsDto,
  DescribeOperateOpsTaskDatasourceTypeResponse,
  CommitRuleGroupTaskRequest,
  DescribeRuleGroupTableResponse,
  DescribeDataSourceWithoutInfoRequest,
  DailyScoreInfo,
  DescribeTemplateHistoryResponse,
  DescribeWorkflowOpsCanvasInfoResponse,
  MakePlanTaskOpsDto,
  RuleTemplateHistory,
  DescribeInLongAgentVpcListResponse,
  DescribeDependOpsTasksResponse,
  DeleteRuleTemplateResponse,
  DescribeRuleTemplateRequest,
  DescribeTaskByCycleRequest,
  CommonId,
  CreateRuleTemplateRequest,
  DlcRewriteDataInfo,
  BatchStopTasksNewResponse,
  WorkFlowExecuteDtoByPage,
  TopTableStat,
  MakeUpTasksByWorkflowRequest,
  UnlockIntegrationTaskResponse,
  DescribeRuleExecDetailResponse,
  Filter,
  DeleteIntegrationTaskResponse,
  TableBaseInfo,
  ResumeIntegrationTaskRequest,
  DescribeInstanceByCycleRequest,
  DescribeFolderListResponse,
  DescribeIntegrationStatisticsTaskStatusResponse,
  DescribeAllUsedVersionSonRequest,
  DescribeOpsMakePlanInstancesResponse,
  DescribeDatabaseInfoListRequest,
  DescribeInLongTkeClusterListRequest,
  DescribeRuleExecHistoryResponse,
  DescribeIntegrationTaskResponse,
  ModifyBaselineAlarmStatusResponse,
  DescribeQualityScoreTrendResponse,
  ModifyFolderResponse,
  CreateHiveTableByDDLRequest,
  DatabaseInfo,
  GetIntegrationNodeColumnSchemaResponse,
  StopIntegrationTaskResponse,
  DescribeOpsWorkflowsResponse,
  DescribeDependTasksNewResponse,
  CheckDuplicateTemplateNameResponse,
  DescribeRelatedInstancesRequest,
  DescribeDataCheckStatResponse,
  DescribeIntegrationStatisticsInstanceTrendRequest,
  BatchModifyOwnersNewRequest,
  DescribeDsFolderTreeResponse,
  PathNodeDsVO,
  DescribeWorkflowCanvasInfoRequest,
  DagInstancesRequest,
  DryRunDIOfflineTaskResponse,
  FolderOpsDto,
  DescribeTaskLockStatusRequest,
  DescribeBaselinesRequest,
  OfflineTaskAddParam,
  DescribeRuleExecExportResultResponse,
  LogContent,
  DescribeOperateTasksResponse,
  DescribeBaselineResponse,
  DescribeTopTableStatRequest,
  BatchCreateIntegrationTaskAlarmsResponse,
  DescribeIntegrationTasksRequest,
  BatchStopTasksNewRequest,
  DescribeInLongAgentTaskListRequest,
  ModifyTaskNameRequest,
  DescribeTrendStatRequest,
  DescribeEventTypesRequest,
  DescribeOpsInstanceLogListResponse,
  DescribeOperateOpsTasksResponse,
  RuleGroupExecResultPage,
  DescribeBaselineInstanceGanttRequest,
  OrganizationalFunction,
  OrderField,
  BatchSuspendIntegrationTasksResponse,
  DescribeWorkflowExecuteByIdRequest,
  WorkflowExtOpsDtoPage,
  RegisterEventResponse,
  DescribeRuleExecLogRequest,
  BatchRerunIntegrationTaskInstancesResponse,
  DescribeBaselineByIdResponse,
  OpsTaskCanvasDto,
  DescribeBaselineInstanceGanttResponse,
  CommitRuleGroupExecResultResponse,
  DescribeIntegrationStatisticsRequest,
  DescribeTasksByPageRequest,
  BatchMakeUpIntegrationTasksResponse,
  CommitExportTaskRequest,
  EventCaseConsumeLogOptDto,
  TaskLockStatus,
  DescribeTaskInstanceRequest,
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建任务
     */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
   * 查询基线DAG
   */
  async DescribeBaselineAllTaskDag(
    req: DescribeBaselineAllTaskDagRequest,
    cb?: (error: string, rep: DescribeBaselineAllTaskDagResponse) => void
  ): Promise<DescribeBaselineAllTaskDagResponse> {
    return this.request("DescribeBaselineAllTaskDag", req, cb)
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
   * 批量kill实例
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
   * 检查规则名称是否重复
   */
  async CheckDuplicateRuleName(
    req: CheckDuplicateRuleNameRequest,
    cb?: (error: string, rep: CheckDuplicateRuleNameResponse) => void
  ): Promise<CheckDuplicateRuleNameResponse> {
    return this.request("CheckDuplicateRuleName", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改数据源
     */
  async ModifyDataSource(
    req: ModifyDataSourceRequest,
    cb?: (error: string, rep: ModifyDataSourceResponse) => void
  ): Promise<ModifyDataSourceResponse> {
    return this.request("ModifyDataSource", req, cb)
  }

  /**
   * 创建规则模版
   */
  async CreateRuleTemplate(
    req: CreateRuleTemplateRequest,
    cb?: (error: string, rep: CreateRuleTemplateResponse) => void
  ): Promise<CreateRuleTemplateResponse> {
    return this.request("CreateRuleTemplate", req, cb)
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
   * 任务状态周期增长趋势
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
   * 分页查询规则执行结果列表
   */
  async DescribeRuleExecResultsByPage(
    req: DescribeRuleExecResultsByPageRequest,
    cb?: (error: string, rep: DescribeRuleExecResultsByPageResponse) => void
  ): Promise<DescribeRuleExecResultsByPageResponse> {
    return this.request("DescribeRuleExecResultsByPage", req, cb)
  }

  /**
   * 获取采集器所在集群的VPC列表
   */
  async DescribeInLongAgentVpcList(
    req: DescribeInLongAgentVpcListRequest,
    cb?: (error: string, rep: DescribeInLongAgentVpcListResponse) => void
  ): Promise<DescribeInLongAgentVpcListResponse> {
    return this.request("DescribeInLongAgentVpcList", req, cb)
  }

  /**
   * 查询运维画布信息，只需要获取边和节点
   */
  async DescribeWorkflowOpsCanvasInfo(
    req: DescribeWorkflowOpsCanvasInfoRequest,
    cb?: (error: string, rep: DescribeWorkflowOpsCanvasInfoResponse) => void
  ): Promise<DescribeWorkflowOpsCanvasInfoResponse> {
    return this.request("DescribeWorkflowOpsCanvasInfo", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件监听器
     */
  async RegisterEventListener(
    req: RegisterEventListenerRequest,
    cb?: (error: string, rep: RegisterEventListenerResponse) => void
  ): Promise<RegisterEventListenerResponse> {
    return this.request("RegisterEventListener", req, cb)
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
   * 获取集群命名空间列表
   */
  async DescribeClusterNamespaceList(
    req: DescribeClusterNamespaceListRequest,
    cb?: (error: string, rep: DescribeClusterNamespaceListResponse) => void
  ): Promise<DescribeClusterNamespaceListResponse> {
    return this.request("DescribeClusterNamespaceList", req, cb)
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
   * 在基线系统内查询单个调度任务实例
   */
  async DescribeScheduleInstance(
    req: DescribeScheduleInstanceRequest,
    cb?: (error: string, rep: DescribeScheduleInstanceResponse) => void
  ): Promise<DescribeScheduleInstanceResponse> {
    return this.request("DescribeScheduleInstance", req, cb)
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
   * 智能运维-批量删除任务
   */
  async BatchDeleteOpsTasks(
    req: BatchDeleteOpsTasksRequest,
    cb?: (error: string, rep: BatchDeleteOpsTasksResponse) => void
  ): Promise<BatchDeleteOpsTasksResponse> {
    return this.request("BatchDeleteOpsTasks", req, cb)
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
   * 提交自定义函数
   */
  async SubmitCustomFunction(
    req: SubmitCustomFunctionRequest,
    cb?: (error: string, rep: SubmitCustomFunctionResponse) => void
  ): Promise<SubmitCustomFunctionResponse> {
    return this.request("SubmitCustomFunction", req, cb)
  }

  /**
   * 规则组执行结果分页查询接口不带鉴权
   */
  async DescribeRuleGroupExecResultsByPageWithoutAuth(
    req: DescribeRuleGroupExecResultsByPageWithoutAuthRequest,
    cb?: (error: string, rep: DescribeRuleGroupExecResultsByPageWithoutAuthResponse) => void
  ): Promise<DescribeRuleGroupExecResultsByPageWithoutAuthResponse> {
    return this.request("DescribeRuleGroupExecResultsByPageWithoutAuth", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量删除任务，仅对任务状态为”已停止“有效；

     */
  async BatchDeleteTasksNew(
    req: BatchDeleteTasksNewRequest,
    cb?: (error: string, rep: BatchDeleteTasksNewResponse) => void
  ): Promise<BatchDeleteTasksNewResponse> {
    return this.request("BatchDeleteTasksNew", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除工作流
     */
  async DeleteWorkflowNew(
    req: DeleteWorkflowNewRequest,
    cb?: (error: string, rep: DeleteWorkflowNewResponse) => void
  ): Promise<DeleteWorkflowNewResponse> {
    return this.request("DeleteWorkflowNew", req, cb)
  }

  /**
   * 数据集成大屏采集器状态分布统计
   */
  async DescribeIntegrationStatisticsAgentStatus(
    req: DescribeIntegrationStatisticsAgentStatusRequest,
    cb?: (error: string, rep: DescribeIntegrationStatisticsAgentStatusResponse) => void
  ): Promise<DescribeIntegrationStatisticsAgentStatusResponse> {
    return this.request("DescribeIntegrationStatisticsAgentStatus", req, cb)
  }

  /**
   * 提交基线
   */
  async StopBaseline(
    req: StopBaselineRequest,
    cb?: (error: string, rep: StopBaselineResponse) => void
  ): Promise<StopBaselineResponse> {
    return this.request("StopBaseline", req, cb)
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
   * 编辑基线
   */
  async EditBaseline(
    req: EditBaselineRequest,
    cb?: (error: string, rep: EditBaselineResponse) => void
  ): Promise<EditBaselineResponse> {
    return this.request("EditBaseline", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
     */
  async BatchStopTasksNew(
    req: BatchStopTasksNewRequest,
    cb?: (error: string, rep: BatchStopTasksNewResponse) => void
  ): Promise<BatchStopTasksNewResponse> {
    return this.request("BatchStopTasksNew", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除文件夹
     */
  async DeleteFolder(
    req: DeleteFolderRequest,
    cb?: (error: string, rep: DeleteFolderResponse) => void
  ): Promise<DeleteFolderResponse> {
    return this.request("DeleteFolder", req, cb)
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
   * 根据项目id 获取项目下所有工作流列表
   */
  async DescribeWorkflowListByProjectId(
    req: DescribeWorkflowListByProjectIdRequest,
    cb?: (error: string, rep: DescribeWorkflowListByProjectIdResponse) => void
  ): Promise<DescribeWorkflowListByProjectIdResponse> {
    return this.request("DescribeWorkflowListByProjectId", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建数据源
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     */
  async SetTaskAlarmNew(
    req: SetTaskAlarmNewRequest,
    cb?: (error: string, rep: SetTaskAlarmNewResponse) => void
  ): Promise<SetTaskAlarmNewResponse> {
    return this.request("SetTaskAlarmNew", req, cb)
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
   * 查询基线诊断信息
   */
  async DescribeDiagnosticInfoByBaselineId(
    req: DescribeDiagnosticInfoByBaselineIdRequest,
    cb?: (error: string, rep: DescribeDiagnosticInfoByBaselineIdResponse) => void
  ): Promise<DescribeDiagnosticInfoByBaselineIdResponse> {
    return this.request("DescribeDiagnosticInfoByBaselineId", req, cb)
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
   * 删除规则模版
   */
  async DeleteRuleTemplate(
    req: DeleteRuleTemplateRequest,
    cb?: (error: string, rep: DeleteRuleTemplateResponse) => void
  ): Promise<DeleteRuleTemplateResponse> {
    return this.request("DeleteRuleTemplate", req, cb)
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
   * 更新集成节点
   */
  async ModifyIntegrationNode(
    req: ModifyIntegrationNodeRequest,
    cb?: (error: string, rep: ModifyIntegrationNodeResponse) => void
  ): Promise<ModifyIntegrationNodeResponse> {
    return this.request("ModifyIntegrationNode", req, cb)
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
   * 获取表列表
   */
  async DescribeRuleTablesByPage(
    req: DescribeRuleTablesByPageRequest,
    cb?: (error: string, rep: DescribeRuleTablesByPageResponse) => void
  ): Promise<DescribeRuleTablesByPageResponse> {
    return this.request("DescribeRuleTablesByPage", req, cb)
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
   * 文件路径的根目录为 /datastudio/resource，如果要在根目录下创建 aaa 文件夹，FilePath的值应该为 /datastudio/resource，如果根目录下已经创建了 aaa 文件夹，要在 aaa 下创建  bbb 文件夹，FilePath的值应该为 /datastudio/resource/aaa
   */
  async CreateResourcePath(
    req: CreateResourcePathRequest,
    cb?: (error: string, rep: CreateResourcePathResponse) => void
  ): Promise<CreateResourcePathResponse> {
    return this.request("CreateResourcePath", req, cb)
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
   * 根据任务Id查找生产态子任务
   */
  async DescribeAllUsedVersionSon(
    req: DescribeAllUsedVersionSonRequest,
    cb?: (error: string, rep: DescribeAllUsedVersionSonResponse) => void
  ): Promise<DescribeAllUsedVersionSonResponse> {
    return this.request("DescribeAllUsedVersionSon", req, cb)
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
   * 删除采集器
   */
  async DeleteInLongAgent(
    req: DeleteInLongAgentRequest,
    cb?: (error: string, rep: DeleteInLongAgentResponse) => void
  ): Promise<DeleteInLongAgentResponse> {
    return this.request("DeleteInLongAgent", req, cb)
  }

  /**
   * 实例强制成功
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量终止操作
     */
  async KillInstances(
    req: KillInstancesRequest,
    cb?: (error: string, rep: KillInstancesResponse) => void
  ): Promise<KillInstancesResponse> {
    return this.request("KillInstances", req, cb)
  }

  /**
   * 编辑基线实例中任务告警状态
   */
  async ModifyBaselineTaskAlarmStatus(
    req: ModifyBaselineTaskAlarmStatusRequest,
    cb?: (error: string, rep: ModifyBaselineTaskAlarmStatusResponse) => void
  ): Promise<ModifyBaselineTaskAlarmStatusResponse> {
    return this.request("ModifyBaselineTaskAlarmStatus", req, cb)
  }

  /**
   * Runner 规则检测结果上报
   */
  async CommitRuleGroupExecResult(
    req: CommitRuleGroupExecResultRequest,
    cb?: (error: string, rep: CommitRuleGroupExecResultResponse) => void
  ): Promise<CommitRuleGroupExecResultResponse> {
    return this.request("CommitRuleGroupExecResult", req, cb)
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
   * 任务批量补录，调度状态任务才可以补录；
   */
  async MakeUpOpsTasks(
    req: MakeUpOpsTasksRequest,
    cb?: (error: string, rep: MakeUpOpsTasksResponse) => void
  ): Promise<MakeUpOpsTasksResponse> {
    return this.request("MakeUpOpsTasks", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交工作流
     */
  async SubmitWorkflow(
    req: SubmitWorkflowRequest,
    cb?: (error: string, rep: SubmitWorkflowResponse) => void
  ): Promise<SubmitWorkflowResponse> {
    return this.request("SubmitWorkflow", req, cb)
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
   * 获取关联子实例
   */
  async DescribeSonInstances(
    req: DescribeSonInstancesRequest,
    cb?: (error: string, rep: DescribeSonInstancesResponse) => void
  ): Promise<DescribeSonInstancesResponse> {
    return this.request("DescribeSonInstances", req, cb)
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
   * DeleteBaseline
   */
  async DeleteBaseline(
    req: DeleteBaselineRequest,
    cb?: (error: string, rep: DeleteBaselineResponse) => void
  ): Promise<DeleteBaselineResponse> {
    return this.request("DeleteBaseline", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
  async ModifyTaskScript(
    req: ModifyTaskScriptRequest,
    cb?: (error: string, rep: ModifyTaskScriptResponse) => void
  ): Promise<ModifyTaskScriptResponse> {
    return this.request("ModifyTaskScript", req, cb)
  }

  /**
   * 提交数据导出任务
   */
  async CommitExportTask(
    req: CommitExportTaskRequest,
    cb?: (error: string, rep: CommitExportTaskResponse) => void
  ): Promise<CommitExportTaskResponse> {
    return this.request("CommitExportTask", req, cb)
  }

  /**
   * 过滤条件【必要字段】{ruleId}
   */
  async DescribeRuleHistoryByPage(
    req: DescribeRuleHistoryByPageRequest,
    cb?: (error: string, rep: DescribeRuleHistoryByPageResponse) => void
  ): Promise<DescribeRuleHistoryByPageResponse> {
    return this.request("DescribeRuleHistoryByPage", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
  async DescribeDataSourceList(
    req: DescribeDataSourceListRequest,
    cb?: (error: string, rep: DescribeDataSourceListResponse) => void
  ): Promise<DescribeDataSourceListResponse> {
    return this.request("DescribeDataSourceList", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新任务
     */
  async ModifyTaskInfo(
    req: ModifyTaskInfoRequest,
    cb?: (error: string, rep: ModifyTaskInfoResponse) => void
  ): Promise<ModifyTaskInfoResponse> {
    return this.request("ModifyTaskInfo", req, cb)
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
   * 查询事件类型列表
   */
  async DescribeEventTypes(
    req?: DescribeEventTypesRequest,
    cb?: (error: string, rep: DescribeEventTypesResponse) => void
  ): Promise<DescribeEventTypesResponse> {
    return this.request("DescribeEventTypes", req, cb)
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
   * 查询表得分趋势
   */
  async DescribeTableScoreTrend(
    req: DescribeTableScoreTrendRequest,
    cb?: (error: string, rep: DescribeTableScoreTrendResponse) => void
  ): Promise<DescribeTableScoreTrendResponse> {
    return this.request("DescribeTableScoreTrend", req, cb)
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
   * 分页查询质量监控组
   */
  async DescribeMonitorsByPage(
    req: DescribeMonitorsByPageRequest,
    cb?: (error: string, rep: DescribeMonitorsByPageResponse) => void
  ): Promise<DescribeMonitorsByPageResponse> {
    return this.request("DescribeMonitorsByPage", req, cb)
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
   * 查询任务实例的关联实例列表
   */
  async DescribeRelatedInstances(
    req: DescribeRelatedInstancesRequest,
    cb?: (error: string, rep: DescribeRelatedInstancesResponse) => void
  ): Promise<DescribeRelatedInstancesResponse> {
    return this.request("DescribeRelatedInstances", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
  async DescribeDatasource(
    req: DescribeDatasourceRequest,
    cb?: (error: string, rep: DescribeDatasourceResponse) => void
  ): Promise<DescribeDatasourceResponse> {
    return this.request("DescribeDatasource", req, cb)
  }

  /**
   * 任务运维搜索 查询生产态任务数据源列表
   */
  async DescribeOperateOpsTaskDatasource(
    req: DescribeOperateOpsTaskDatasourceRequest,
    cb?: (error: string, rep: DescribeOperateOpsTaskDatasourceResponse) => void
  ): Promise<DescribeOperateOpsTaskDatasourceResponse> {
    return this.request("DescribeOperateOpsTaskDatasource", req, cb)
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
   * 注册采集器
   */
  async CreateInLongAgent(
    req: CreateInLongAgentRequest,
    cb?: (error: string, rep: CreateInLongAgentResponse) => void
  ): Promise<CreateInLongAgentResponse> {
    return this.request("CreateInLongAgent", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
运行任务
     */
  async RunTask(
    req: RunTaskRequest,
    cb?: (error: string, rep: RunTaskResponse) => void
  ): Promise<RunTaskResponse> {
    return this.request("RunTask", req, cb)
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
   * 更新采集器
   */
  async UpdateInLongAgent(
    req: UpdateInLongAgentRequest,
    cb?: (error: string, rep: UpdateInLongAgentResponse) => void
  ): Promise<UpdateInLongAgentResponse> {
    return this.request("UpdateInLongAgent", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流调度
     */
  async ModifyWorkflowSchedule(
    req: ModifyWorkflowScheduleRequest,
    cb?: (error: string, rep: ModifyWorkflowScheduleResponse) => void
  ): Promise<ModifyWorkflowScheduleResponse> {
    return this.request("ModifyWorkflowSchedule", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据工作流分页查询任务
     */
  async DescribeTasksByPage(
    req: DescribeTasksByPageRequest,
    cb?: (error: string, rep: DescribeTasksByPageResponse) => void
  ): Promise<DescribeTasksByPageResponse> {
    return this.request("DescribeTasksByPage", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建文件夹
     */
  async CreateFolder(
    req: CreateFolderRequest,
    cb?: (error: string, rep: CreateFolderResponse) => void
  ): Promise<CreateFolderResponse> {
    return this.request("CreateFolder", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量置成功
     */
  async ForceSucInstances(
    req: ForceSucInstancesRequest,
    cb?: (error: string, rep: ForceSucInstancesResponse) => void
  ): Promise<ForceSucInstancesResponse> {
    return this.request("ForceSucInstances", req, cb)
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
   * 查询父目录树，用于工作流、任务定位
   */
  async DescribeDsParentFolderTree(
    req: DescribeDsParentFolderTreeRequest,
    cb?: (error: string, rep: DescribeDsParentFolderTreeResponse) => void
  ): Promise<DescribeDsParentFolderTreeResponse> {
    return this.request("DescribeDsParentFolderTree", req, cb)
  }

  /**
   * 离线任务周期统计明细
   */
  async DescribeTaskReportDetailList(
    req: DescribeTaskReportDetailListRequest,
    cb?: (error: string, rep: DescribeTaskReportDetailListResponse) => void
  ): Promise<DescribeTaskReportDetailListResponse> {
    return this.request("DescribeTaskReportDetailList", req, cb)
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
   * 创建基线
   */
  async CreateBaseline(
    req: CreateBaselineRequest,
    cb?: (error: string, rep: CreateBaselineResponse) => void
  ): Promise<CreateBaselineResponse> {
    return this.request("CreateBaseline", req, cb)
  }

  /**
   * 实例诊断信息
   */
  async DiagnosePlus(
    req: DiagnosePlusRequest,
    cb?: (error: string, rep: DiagnosePlusResponse) => void
  ): Promise<DiagnosePlusResponse> {
    return this.request("DiagnosePlus", req, cb)
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
   * 拉取实例列表，join task表一些信息
   */
  async DescribeInstancesInfoWithTaskInfo(
    req: DescribeInstancesInfoWithTaskInfoRequest,
    cb?: (error: string, rep: DescribeInstancesInfoWithTaskInfoResponse) => void
  ): Promise<DescribeInstancesInfoWithTaskInfoResponse> {
    return this.request("DescribeInstancesInfoWithTaskInfo", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务脚本
     */
  async DescribeTaskScript(
    req: DescribeTaskScriptRequest,
    cb?: (error: string, rep: DescribeTaskScriptResponse) => void
  ): Promise<DescribeTaskScriptResponse> {
    return this.request("DescribeTaskScript", req, cb)
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
   * 补录任务
   */
  async CreateOpsMakePlan(
    req: CreateOpsMakePlanRequest,
    cb?: (error: string, rep: CreateOpsMakePlanResponse) => void
  ): Promise<CreateOpsMakePlanResponse> {
    return this.request("CreateOpsMakePlan", req, cb)
  }

  /**
   * 提交基线
   */
  async SubmitBaseline(
    req: SubmitBaselineRequest,
    cb?: (error: string, rep: SubmitBaselineResponse) => void
  ): Promise<SubmitBaselineResponse> {
    return this.request("SubmitBaseline", req, cb)
  }

  /**
   * 任务运维列表组合条件查询
   */
  async DescribeOperateTasks(
    req: DescribeOperateTasksRequest,
    cb?: (error: string, rep: DescribeOperateTasksResponse) => void
  ): Promise<DescribeOperateTasksResponse> {
    return this.request("DescribeOperateTasks", req, cb)
  }

  /**
   * 任务运维-批量冻结任务
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
   * 规则执行日志查询
   */
  async DescribeRuleExecLog(
    req: DescribeRuleExecLogRequest,
    cb?: (error: string, rep: DescribeRuleExecLogResponse) => void
  ): Promise<DescribeRuleExecLogResponse> {
    return this.request("DescribeRuleExecLog", req, cb)
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
   * 获取具体实例相关日志信息
   */
  async DescribeInstanceLogDetail(
    req: DescribeInstanceLogDetailRequest,
    cb?: (error: string, rep: DescribeInstanceLogDetailResponse) => void
  ): Promise<DescribeInstanceLogDetailResponse> {
    return this.request("DescribeInstanceLogDetail", req, cb)
  }

  /**
   * 任务运维-查询生产态任务数据源类型列表
   */
  async DescribeOperateOpsTaskDatasourceType(
    req: DescribeOperateOpsTaskDatasourceTypeRequest,
    cb?: (error: string, rep: DescribeOperateOpsTaskDatasourceTypeResponse) => void
  ): Promise<DescribeOperateOpsTaskDatasourceTypeResponse> {
    return this.request("DescribeOperateOpsTaskDatasourceType", req, cb)
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
   * 查询规则模版操作记录
   */
  async DescribeTemplateHistory(
    req: DescribeTemplateHistoryRequest,
    cb?: (error: string, rep: DescribeTemplateHistoryResponse) => void
  ): Promise<DescribeTemplateHistoryResponse> {
    return this.request("DescribeTemplateHistory", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
  async SubmitTask(
    req: SubmitTaskRequest,
    cb?: (error: string, rep: SubmitTaskResponse) => void
  ): Promise<SubmitTaskResponse> {
    return this.request("SubmitTask", req, cb)
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
   * 查询质量规则数据源
   */
  async DescribeRuleDataSources(
    req: DescribeRuleDataSourcesRequest,
    cb?: (error: string, rep: DescribeRuleDataSourcesResponse) => void
  ): Promise<DescribeRuleDataSourcesResponse> {
    return this.request("DescribeRuleDataSources", req, cb)
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
   * 实例强制成功
   */
  async ForceSucScheduleInstances(
    req: ForceSucScheduleInstancesRequest,
    cb?: (error: string, rep: ForceSucScheduleInstancesResponse) => void
  ): Promise<ForceSucScheduleInstancesResponse> {
    return this.request("ForceSucScheduleInstances", req, cb)
  }

  /**
   * 查询基线实例关键任务实例甘特图
   */
  async DescribeBaselineInstanceGantt(
    req: DescribeBaselineInstanceGanttRequest,
    cb?: (error: string, rep: DescribeBaselineInstanceGanttResponse) => void
  ): Promise<DescribeBaselineInstanceGanttResponse> {
    return this.request("DescribeBaselineInstanceGantt", req, cb)
  }

  /**
   * 智能运维事件查询列表
   */
  async DescribeEvents(
    req: DescribeEventsRequest,
    cb?: (error: string, rep: DescribeEventsResponse) => void
  ): Promise<DescribeEventsResponse> {
    return this.request("DescribeEvents", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量冻结任务
     */
  async FreezeTasks(
    req: FreezeTasksRequest,
    cb?: (error: string, rep: FreezeTasksResponse) => void
  ): Promise<FreezeTasksResponse> {
    return this.request("FreezeTasks", req, cb)
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
   * 下载日志文件，返回日志URL
   */
  async DescribeInstanceLogFile(
    req: DescribeInstanceLogFileRequest,
    cb?: (error: string, rep: DescribeInstanceLogFileResponse) => void
  ): Promise<DescribeInstanceLogFileResponse> {
    return this.request("DescribeInstanceLogFile", req, cb)
  }

  /**
   * 编辑规则模版
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
   * 智能运维-事件列表-所属任务/基线过滤列表
   */
  async DescribeBelongTo(
    req: DescribeBelongToRequest,
    cb?: (error: string, rep: DescribeBelongToResponse) => void
  ): Promise<DescribeBelongToResponse> {
    return this.request("DescribeBelongTo", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除数据源
     */
  async DeleteDataSources(
    req: DeleteDataSourcesRequest,
    cb?: (error: string, rep: DeleteDataSourcesResponse) => void
  ): Promise<DeleteDataSourcesResponse> {
    return this.request("DeleteDataSources", req, cb)
  }

  /**
   * 智能运维事件详情1
   */
  async DescribeEventDetail(
    req: DescribeEventDetailRequest,
    cb?: (error: string, rep: DescribeEventDetailResponse) => void
  ): Promise<DescribeEventDetailResponse> {
    return this.request("DescribeEventDetail", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
文件夹更新
     */
  async ModifyFolder(
    req: ModifyFolderRequest,
    cb?: (error: string, rep: ModifyFolderResponse) => void
  ): Promise<ModifyFolderResponse> {
    return this.request("ModifyFolder", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务具体详情
     */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量重跑
     */
  async RerunInstances(
    req: RerunInstancesRequest,
    cb?: (error: string, rep: RerunInstancesResponse) => void
  ): Promise<RerunInstancesResponse> {
    return this.request("RerunInstances", req, cb)
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
   * 批量操作任务列表
   */
  async DescribeBatchOperateTask(
    req: DescribeBatchOperateTaskRequest,
    cb?: (error: string, rep: DescribeBatchOperateTaskResponse) => void
  ): Promise<DescribeBatchOperateTaskResponse> {
    return this.request("DescribeBatchOperateTask", req, cb)
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
   * 获取字段类型列表
   */
  async DescribeDataTypes(
    req: DescribeDataTypesRequest,
    cb?: (error: string, rep: DescribeDataTypesResponse) => void
  ): Promise<DescribeDataTypesResponse> {
    return this.request("DescribeDataTypes", req, cb)
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
   * 启动集成任务
   */
  async StartIntegrationTask(
    req: StartIntegrationTaskRequest,
    cb?: (error: string, rep: StartIntegrationTaskResponse) => void
  ): Promise<StartIntegrationTaskResponse> {
    return this.request("StartIntegrationTask", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
基于多个工作流进行批量冻结任务操作
     */
  async FreezeTasksByMultiWorkflow(
    req: FreezeTasksByMultiWorkflowRequest,
    cb?: (error: string, rep: FreezeTasksByMultiWorkflowResponse) => void
  ): Promise<FreezeTasksByMultiWorkflowResponse> {
    return this.request("FreezeTasksByMultiWorkflow", req, cb)
  }

  /**
   * 查询基线实例列表
   */
  async DescribeBaselineInstances(
    req: DescribeBaselineInstancesRequest,
    cb?: (error: string, rep: DescribeBaselineInstancesResponse) => void
  ): Promise<DescribeBaselineInstancesResponse> {
    return this.request("DescribeBaselineInstances", req, cb)
  }

  /**
   * 获取所有任务类型
   */
  async DescribeAllTaskType(
    req: DescribeAllTaskTypeRequest,
    cb?: (error: string, rep: DescribeAllTaskTypeResponse) => void
  ): Promise<DescribeAllTaskTypeResponse> {
    return this.request("DescribeAllTaskType", req, cb)
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
   * 获取关联父实例
   */
  async DescribeFathers(
    req: DescribeFathersRequest,
    cb?: (error: string, rep: DescribeFathersResponse) => void
  ): Promise<DescribeFathersResponse> {
    return this.request("DescribeFathers", req, cb)
  }

  /**
   * 基线列表
   */
  async DescribeBaselines(
    req: DescribeBaselinesRequest,
    cb?: (error: string, rep: DescribeBaselinesResponse) => void
  ): Promise<DescribeBaselinesResponse> {
    return this.request("DescribeBaselines", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹下的工作流
     */
  async DescribeFolderWorkflowList(
    req: DescribeFolderWorkflowListRequest,
    cb?: (error: string, rep: DescribeFolderWorkflowListResponse) => void
  ): Promise<DescribeFolderWorkflowListResponse> {
    return this.request("DescribeFolderWorkflowList", req, cb)
  }

  /**
   * 查询数据来源列表
   */
  async DescribeDataBases(
    req: DescribeDataBasesRequest,
    cb?: (error: string, rep: DescribeDataBasesResponse) => void
  ): Promise<DescribeDataBasesResponse> {
    return this.request("DescribeDataBases", req, cb)
  }

  /**
   * 任务运维-任务列表 批量运行
   */
  async BatchRunOpsTask(
    req: BatchRunOpsTaskRequest,
    cb?: (error: string, rep: BatchRunOpsTaskResponse) => void
  ): Promise<BatchRunOpsTaskResponse> {
    return this.request("BatchRunOpsTask", req, cb)
  }

  /**
   * 过滤条件】 {模版名称Name,支持模糊匹配} {模版类型type，1.系统模版 2.自定义模版} {质量检测维度QualityDims, 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性} 【排序字段】 { 引用数排序类型CitationOrderType，根据引用数量排序 ASC DESC}
   */
  async DescribeRuleTemplatesByPage(
    req: DescribeRuleTemplatesByPageRequest,
    cb?: (error: string, rep: DescribeRuleTemplatesByPageResponse) => void
  ): Promise<DescribeRuleTemplatesByPageResponse> {
    return this.request("DescribeRuleTemplatesByPage", req, cb)
  }

  /**
   * 获取数据标准规则详情
   */
  async DescribeStandardRuleDetailInfoList(
    req: DescribeStandardRuleDetailInfoListRequest,
    cb?: (error: string, rep: DescribeStandardRuleDetailInfoListResponse) => void
  ): Promise<DescribeStandardRuleDetailInfoListResponse> {
    return this.request("DescribeStandardRuleDetailInfoList", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
  async ModifyTaskLinks(
    req: ModifyTaskLinksRequest,
    cb?: (error: string, rep: ModifyTaskLinksResponse) => void
  ): Promise<ModifyTaskLinksResponse> {
    return this.request("ModifyTaskLinks", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹目录
     */
  async DescribeFolderList(
    req: DescribeFolderListRequest,
    cb?: (error: string, rep: DescribeFolderListResponse) => void
  ): Promise<DescribeFolderListResponse> {
    return this.request("DescribeFolderList", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源列表
     */
  async DescribeDataSourceWithoutInfo(
    req: DescribeDataSourceWithoutInfoRequest,
    cb?: (error: string, rep: DescribeDataSourceWithoutInfoResponse) => void
  ): Promise<DescribeDataSourceWithoutInfoResponse> {
    return this.request("DescribeDataSourceWithoutInfo", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
工作流下所有任务的补录
     */
  async MakeUpWorkflowNew(
    req: MakeUpWorkflowNewRequest,
    cb?: (error: string, rep: MakeUpWorkflowNewResponse) => void
  ): Promise<MakeUpWorkflowNewResponse> {
    return this.request("MakeUpWorkflowNew", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
获取实例日志列表
     */
  async DescribeInstanceLogs(
    req: DescribeInstanceLogsRequest,
    cb?: (error: string, rep: DescribeInstanceLogsResponse) => void
  ): Promise<DescribeInstanceLogsResponse> {
    return this.request("DescribeInstanceLogs", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建工作流
     */
  async CreateWorkflow(
    req: CreateWorkflowRequest,
    cb?: (error: string, rep: CreateWorkflowResponse) => void
  ): Promise<CreateWorkflowResponse> {
    return this.request("CreateWorkflow", req, cb)
  }

  /**
   * 实例状态周期增长趋势
   */
  async DescribeInstanceByCycleReport(
    req: DescribeInstanceByCycleReportRequest,
    cb?: (error: string, rep: DescribeInstanceByCycleReportResponse) => void
  ): Promise<DescribeInstanceByCycleReportResponse> {
    return this.request("DescribeInstanceByCycleReport", req, cb)
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
   * 批量启动工作流
   */
  async RunTasksByMultiWorkflow(
    req: RunTasksByMultiWorkflowRequest,
    cb?: (error: string, rep: RunTasksByMultiWorkflowResponse) => void
  ): Promise<RunTasksByMultiWorkflowResponse> {
    return this.request("RunTasksByMultiWorkflow", req, cb)
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
   * 按起止日期统计离线任务的所有实例的运行指标总和
   */
  async DescribeTaskReport(
    req: DescribeTaskReportRequest,
    cb?: (error: string, rep: DescribeTaskReportResponse) => void
  ): Promise<DescribeTaskReportResponse> {
    return this.request("DescribeTaskReport", req, cb)
  }

  /**
   * 查询试运行实例子实例列表
   */
  async DescribeDrSonInstance(
    req: DescribeDrSonInstanceRequest,
    cb?: (error: string, rep: DescribeDrSonInstanceResponse) => void
  ): Promise<DescribeDrSonInstanceResponse> {
    return this.request("DescribeDrSonInstance", req, cb)
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
   * 根据条件查找事件实例
   */
  async DescribeEventCases(
    req: DescribeEventCasesRequest,
    cb?: (error: string, rep: DescribeEventCasesResponse) => void
  ): Promise<DescribeEventCasesResponse> {
    return this.request("DescribeEventCases", req, cb)
  }

  /**
   * 查询规则执行导出结果
   */
  async DescribeRuleExecExportResult(
    req: DescribeRuleExecExportResultRequest,
    cb?: (error: string, rep: DescribeRuleExecExportResultResponse) => void
  ): Promise<DescribeRuleExecExportResultResponse> {
    return this.request("DescribeRuleExecExportResult", req, cb)
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
   * 事件是否告警过滤条件
   */
  async DescribeEventIsAlarmTypes(
    req?: DescribeEventIsAlarmTypesRequest,
    cb?: (error: string, rep: DescribeEventIsAlarmTypesResponse) => void
  ): Promise<DescribeEventIsAlarmTypesResponse> {
    return this.request("DescribeEventIsAlarmTypes", req, cb)
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
   * 质量报告-质量分周期趋势
   */
  async DescribeQualityScoreTrend(
    req: DescribeQualityScoreTrendRequest,
    cb?: (error: string, rep: DescribeQualityScoreTrendResponse) => void
  ): Promise<DescribeQualityScoreTrendResponse> {
    return this.request("DescribeQualityScoreTrend", req, cb)
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
   * 删除任务Ds
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
   * 查询任务实例列表
   */
  async DescribeTaskInstances(
    req: DescribeTaskInstancesRequest,
    cb?: (error: string, rep: DescribeTaskInstancesResponse) => void
  ): Promise<DescribeTaskInstancesResponse> {
    return this.request("DescribeTaskInstances", req, cb)
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
   * 规则执行结果列表查询
   */
  async DescribeRuleExecResults(
    req: DescribeRuleExecResultsRequest,
    cb?: (error: string, rep: DescribeRuleExecResultsResponse) => void
  ): Promise<DescribeRuleExecResultsResponse> {
    return this.request("DescribeRuleExecResults", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
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
   * 基线列表
   */
  async DescribeBaselineById(
    req: DescribeBaselineByIdRequest,
    cb?: (error: string, rep: DescribeBaselineByIdResponse) => void
  ): Promise<DescribeBaselineByIdResponse> {
    return this.request("DescribeBaselineById", req, cb)
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
   * Ds批量删除任务，仅对任务状态为”已停止“有效；
   */
  async BatchDeleteTasksDs(
    req: BatchDeleteTasksDsRequest,
    cb?: (error: string, rep: BatchDeleteTasksDsResponse) => void
  ): Promise<BatchDeleteTasksDsResponse> {
    return this.request("BatchDeleteTasksDs", req, cb)
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
   * 获取TKE集群列表
   */
  async DescribeInLongTkeClusterList(
    req: DescribeInLongTkeClusterListRequest,
    cb?: (error: string, rep: DescribeInLongTkeClusterListResponse) => void
  ): Promise<DescribeInLongTkeClusterListResponse> {
    return this.request("DescribeInLongTkeClusterList", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据层级查找上/下游任务节点
     */
  async DescribeDependTasksNew(
    req: DescribeDependTasksNewRequest,
    cb?: (error: string, rep: DescribeDependTasksNewResponse) => void
  ): Promise<DescribeDependTasksNewResponse> {
    return this.request("DescribeDependTasksNew", req, cb)
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
   * 删除用户自定义函数
   */
  async DeleteCustomFunction(
    req: DeleteCustomFunctionRequest,
    cb?: (error: string, rep: DeleteCustomFunctionResponse) => void
  ): Promise<DeleteCustomFunctionResponse> {
    return this.request("DeleteCustomFunction", req, cb)
  }

  /**
   * 查询规则模版维度分布情况
   */
  async DescribeTemplateDimCount(
    req: DescribeTemplateDimCountRequest,
    cb?: (error: string, rep: DescribeTemplateDimCountResponse) => void
  ): Promise<DescribeTemplateDimCountResponse> {
    return this.request("DescribeTemplateDimCount", req, cb)
  }

  /**
   * 查询基线实例DAG
   */
  async DescribeBaselineInstanceDag(
    req: DescribeBaselineInstanceDagRequest,
    cb?: (error: string, rep: DescribeBaselineInstanceDagResponse) => void
  ): Promise<DescribeBaselineInstanceDagResponse> {
    return this.request("DescribeBaselineInstanceDag", req, cb)
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
   * 查询试运行实例执行内容
   */
  async DescribeDrInstanceScriptContent(
    req: DescribeDrInstanceScriptContentRequest,
    cb?: (error: string, rep: DescribeDrInstanceScriptContentResponse) => void
  ): Promise<DescribeDrInstanceScriptContentResponse> {
    return this.request("DescribeDrInstanceScriptContent", req, cb)
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
   * 批量暂停集成任务
   */
  async BatchSuspendIntegrationTasks(
    req: BatchSuspendIntegrationTasksRequest,
    cb?: (error: string, rep: BatchSuspendIntegrationTasksResponse) => void
  ): Promise<BatchSuspendIntegrationTasksResponse> {
    return this.request("BatchSuspendIntegrationTasks", req, cb)
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
   * 根据任务id获取下游依赖任务列表
   */
  async DescribeDependOpsTaskList(
    req: DescribeDependOpsTaskListRequest,
    cb?: (error: string, rep: DescribeDependOpsTaskListResponse) => void
  ): Promise<DescribeDependOpsTaskListResponse> {
    return this.request("DescribeDependOpsTaskList", req, cb)
  }

  /**
   * 获取采集器列表
   */
  async DescribeInLongAgentList(
    req: DescribeInLongAgentListRequest,
    cb?: (error: string, rep: DescribeInLongAgentListResponse) => void
  ): Promise<DescribeInLongAgentListResponse> {
    return this.request("DescribeInLongAgentList", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流
     */
  async ModifyWorkflowInfo(
    req: ModifyWorkflowInfoRequest,
    cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void
  ): Promise<ModifyWorkflowInfoResponse> {
    return this.request("ModifyWorkflowInfo", req, cb)
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
   * 按补录计划批量重跑/选择补录计划→补录任务→补录实例，点击重跑
   */
  async RerunOpsMakePlanInstances(
    req: RerunOpsMakePlanInstancesRequest,
    cb?: (error: string, rep: RerunOpsMakePlanInstancesResponse) => void
  ): Promise<RerunOpsMakePlanInstancesResponse> {
    return this.request("RerunOpsMakePlanInstances", req, cb)
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
   * 质量报告-修改维度权限
   */
  async ModifyDimensionWeight(
    req: ModifyDimensionWeightRequest,
    cb?: (error: string, rep: ModifyDimensionWeightResponse) => void
  ): Promise<ModifyDimensionWeightResponse> {
    return this.request("ModifyDimensionWeight", req, cb)
  }

  /**
   * 查找全部的文件夹
   */
  async FindAllFolder(
    req: FindAllFolderRequest,
    cb?: (error: string, rep: FindAllFolderResponse) => void
  ): Promise<FindAllFolderResponse> {
    return this.request("FindAllFolder", req, cb)
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
   * 检查规则模板名称是否重复
   */
  async CheckDuplicateTemplateName(
    req: CheckDuplicateTemplateNameRequest,
    cb?: (error: string, rep: CheckDuplicateTemplateNameResponse) => void
  ): Promise<CheckDuplicateTemplateNameResponse> {
    return this.request("CheckDuplicateTemplateName", req, cb)
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
   * 批量继续执行集成实时任务
   */
  async BatchResumeIntegrationTasks(
    req: BatchResumeIntegrationTasksRequest,
    cb?: (error: string, rep: BatchResumeIntegrationTasksResponse) => void
  ): Promise<BatchResumeIntegrationTasksResponse> {
    return this.request("BatchResumeIntegrationTasks", req, cb)
  }

  /**
   * 重启采集器
   */
  async RestartInLongAgent(
    req: RestartInLongAgentRequest,
    cb?: (error: string, rep: RestartInLongAgentResponse) => void
  ): Promise<RestartInLongAgentResponse> {
    return this.request("RestartInLongAgent", req, cb)
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
   * 实例批量重跑
   */
  async RerunScheduleInstances(
    req: RerunScheduleInstancesRequest,
    cb?: (error: string, rep: RerunScheduleInstancesResponse) => void
  ): Promise<RerunScheduleInstancesResponse> {
    return this.request("RerunScheduleInstances", req, cb)
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
   * 数据质量获取生产调度任务列表
   */
  async DescribeProdTasks(
    req: DescribeProdTasksRequest,
    cb?: (error: string, rep: DescribeProdTasksResponse) => void
  ): Promise<DescribeProdTasksResponse> {
    return this.request("DescribeProdTasks", req, cb)
  }

  /**
   * 数据质量，查询调度任务的实例列表
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
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
   * 查询采集器关联的任务列表
   */
  async DescribeInLongAgentTaskList(
    req: DescribeInLongAgentTaskListRequest,
    cb?: (error: string, rep: DescribeInLongAgentTaskListResponse) => void
  ): Promise<DescribeInLongAgentTaskListResponse> {
    return this.request("DescribeInLongAgentTaskList", req, cb)
  }

  /**
   * 查询规则执行历史， 最近30条
   */
  async DescribeRuleExecHistory(
    req: DescribeRuleExecHistoryRequest,
    cb?: (error: string, rep: DescribeRuleExecHistoryResponse) => void
  ): Promise<DescribeRuleExecHistoryResponse> {
    return this.request("DescribeRuleExecHistory", req, cb)
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
   * 查询规则模版列表
   */
  async DescribeRuleTemplates(
    req: DescribeRuleTemplatesRequest,
    cb?: (error: string, rep: DescribeRuleTemplatesResponse) => void
  ): Promise<DescribeRuleTemplatesResponse> {
    return this.request("DescribeRuleTemplates", req, cb)
  }

  /**
   * 离线任务实例统计明细
   */
  async DescribeTaskInstanceReportDetail(
    req: DescribeTaskInstanceReportDetailRequest,
    cb?: (error: string, rep: DescribeTaskInstanceReportDetailResponse) => void
  ): Promise<DescribeTaskInstanceReportDetailResponse> {
    return this.request("DescribeTaskInstanceReportDetail", req, cb)
  }

  /**
   * 查询规则组数据对象列表
   */
  async DescribeDataObjects(
    req: DescribeDataObjectsRequest,
    cb?: (error: string, rep: DescribeDataObjectsResponse) => void
  ): Promise<DescribeDataObjectsResponse> {
    return this.request("DescribeDataObjects", req, cb)
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
   * 编辑基线告警状态
   */
  async ModifyBaselineAlarmStatus(
    req: ModifyBaselineAlarmStatusRequest,
    cb?: (error: string, rep: ModifyBaselineAlarmStatusResponse) => void
  ): Promise<ModifyBaselineAlarmStatusResponse> {
    return this.request("ModifyBaselineAlarmStatus", req, cb)
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
     * 没用到

获取kafka的topic信息
     */
  async DescribeKafkaTopicInfo(
    req: DescribeKafkaTopicInfoRequest,
    cb?: (error: string, rep: DescribeKafkaTopicInfoResponse) => void
  ): Promise<DescribeKafkaTopicInfoResponse> {
    return this.request("DescribeKafkaTopicInfo", req, cb)
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
   * 资源管理需要先将资源上传到cos中，然后调用该接口，将cos资源绑定到wedata
   */
  async CreateOrUpdateResource(
    req: CreateOrUpdateResourceRequest,
    cb?: (error: string, rep: CreateOrUpdateResourceResponse) => void
  ): Promise<CreateOrUpdateResourceResponse> {
    return this.request("CreateOrUpdateResource", req, cb)
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
   * 离线任务实例详情
   */
  async DescribeTaskInstance(
    req: DescribeTaskInstanceRequest,
    cb?: (error: string, rep: DescribeTaskInstanceResponse) => void
  ): Promise<DescribeTaskInstanceResponse> {
    return this.request("DescribeTaskInstance", req, cb)
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
任务批量补录，调度状态任务才可以补录；



     */
  async MakeUpTasksNew(
    req: MakeUpTasksNewRequest,
    cb?: (error: string, rep: MakeUpTasksNewResponse) => void
  ): Promise<MakeUpTasksNewResponse> {
    return this.request("MakeUpTasksNew", req, cb)
  }

  /**
   * 工作流补数据
   */
  async MakeUpTasksByWorkflow(
    req: MakeUpTasksByWorkflowRequest,
    cb?: (error: string, rep: MakeUpTasksByWorkflowResponse) => void
  ): Promise<MakeUpTasksByWorkflowResponse> {
    return this.request("MakeUpTasksByWorkflow", req, cb)
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
   * 分页查询试运行实例列表
   */
  async DescribeDrInstancePage(
    req: DescribeDrInstancePageRequest,
    cb?: (error: string, rep: DescribeDrInstancePageResponse) => void
  ): Promise<DescribeDrInstancePageResponse> {
    return this.request("DescribeDrInstancePage", req, cb)
  }

  /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量修改任务责任人
     */
  async BatchModifyOwnersNew(
    req: BatchModifyOwnersNewRequest,
    cb?: (error: string, rep: BatchModifyOwnersNewResponse) => void
  ): Promise<BatchModifyOwnersNewResponse> {
    return this.request("BatchModifyOwnersNew", req, cb)
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
   * 批量停止集成任务
   */
  async BatchStopIntegrationTasks(
    req: BatchStopIntegrationTasksRequest,
    cb?: (error: string, rep: BatchStopIntegrationTasksResponse) => void
  ): Promise<BatchStopIntegrationTasksResponse> {
    return this.request("BatchStopIntegrationTasks", req, cb)
  }
}

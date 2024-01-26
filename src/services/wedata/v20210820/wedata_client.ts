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
  CreateRuleTemplateResponse,
  TaskInfoWithInstance,
  DescribeDsEventListenerResponse,
  ModifyBaselineAlarmStatusRequest,
  DescribeScheduleInstanceResponse,
  WorkflowScheduleDtoDs,
  DescribeInstanceLogsRequest,
  Workflow,
  CreateDataSourceRequest,
  DescribeChildrenDsResponse,
  CreateIntegrationNodeResponse,
  DeleteProjectParamVersionDsResponse,
  AttributeItemVO,
  ParameterTaskDsDto,
  DescribeDsEventResponse,
  ColumnLineageInfo,
  DescribeTableMetasRequest,
  RuleExecResultDetail,
  OpsTaskInfoPage,
  DescribeSqlTaskResultRequest,
  ExportEventDTO,
  VirtualTaskInfo,
  MakeUpTasksByWorkflowRequest,
  SubmitPySparkTaskResponse,
  MakeUpTasksByWorkflowResponse,
  AlarmEventInfo,
  DescribeFunctionKindsRequest,
  CodeSearchAuditInfo,
  DescribeIntegrationStatisticsRecordsTrendRequest,
  DescribeOperateTasksRequest,
  SubmitTaskTestRunResponse,
  RegisterEventListenerResponse,
  TaskTypeMap,
  DescribeStandardRuleDetailInfoListResponse,
  EventCaseDTO,
  BatchStopTasksNewRequest,
  TriggerEventRequest,
  DescribeDependOpsTasksRequest,
  ShareStorageFileDTO,
  CreateProjectParamDsRequest,
  DescribeScriptsImportTaskTypeResponse,
  DescribeRuleGroupSubscriptionResponse,
  DescribeIntegrationStatisticsTaskStatusTrendResponse,
  DescribeSchedulerTaskTypeCntRequest,
  RuleGroupExecStrategy,
  DescribeDependencyTasksForProjectCloneRequest,
  DownloadSqlResultRequest,
  DeleteDsEventListenerRequest,
  UploadContentResponse,
  RuleTemplate,
  DescribeDataBasesRequest,
  DescribeRealTimeTaskMetricOverviewResponse,
  DescribeProjectParamDsPageResponse,
  TaskTypeCnt,
  Rule,
  UpdateWorkflowInfoResponse,
  GetLatestAnalyseInfoRequest,
  GetCosTokenResponse,
  ImportProjectParamDsResponse,
  ForceSucScheduleInstancesResponse,
  TableLineageInfo,
  InstanceNodeInfo,
  WorkflowExtOpsDto,
  CreateResourceDirectoryRequest,
  DescribeRuleExecHistoryRequest,
  StopBaselineRequest,
  RunnerRuleExecResult,
  IntegrationNodeInfo,
  GetPathTreesResponse,
  DescribeTaskInstanceReportDetailRequest,
  DescribeBaselineInstancesResponse,
  TaskInnerInfo,
  BaselineInstanceVo,
  DescribeOrganizationalFunctionsRequest,
  CustomizeBusinessEntityDTO,
  FindTaskByRemotePathRequest,
  DescribeTaskTypeByScriptTypeResponse,
  BatchStopWorkflowsByIdsRequest,
  InLongAgentDetail,
  CreateBaselineRequest,
  DeleteResourceFileResponse,
  CloneTaskModeInfo,
  BrowsingHistory,
  DescribeRecycleTaskDetailRequest,
  DescribeTaskListByConditionDsRequest,
  DeleteEventListenerByTaskIdRequest,
  RunTaskRequest,
  DescribeOpsWorkflowsRequest,
  DescribeBatchTestRunRequest,
  CreateOfflineTaskResponse,
  DescribeWorkflowCanvasInfoDsResponse,
  CreateTaskOutputRegistryResponse,
  DescribeDsFolderTreeRequest,
  DeleteResourcePathRequest,
  BatchDeleteIntegrationTasksRequest,
  UploadFilesDsResponse,
  TaskLogRequest,
  OpsTaskLinkInfoDto,
  DescribeIntegrationStatisticsTaskStatusRequest,
  DescribeBelongToResponse,
  FreezeOpsTasksResponse,
  ModifyRuleGroupSubscriptionResponse,
  CreateWorkflowDsResponse,
  DescribeExecStrategyResponse,
  DescribeSuccessorOpsTaskInfosResponse,
  InLongAgentTask,
  DescribeInstanceLogFileResponse,
  SubmitBaselineResponse,
  DescribeWorkflowCanvasOplogRequestFilter,
  GetResourcePathTreeResponse,
  RenameResourceFileResponse,
  SimpleDataSourceInfo,
  CreateTaskInParamDsResponse,
  DescribeSonInstancesRequest,
  CodeDetailResult,
  SqlExpressionTable,
  DependencyWorkflowDTO,
  DryRunDIOfflineTaskRequest,
  CreateOfflineTaskRequest,
  EventOpsDto,
  DescribeEtlTaskTypeResponse,
  DescribeTableBasicInfoResponse,
  CompareRuleItem,
  ImportTableDataResponse,
  DimensionScore,
  CanvasInfo,
  IntegrationNodeDetail,
  SubmitBaselineRequest,
  ForceSucInstancesRequest,
  SubmitBatchTestRunRequest,
  DeleteOfflineTaskResponse,
  DeleteBatchWorkflowDsRequest,
  CopyTaskDsResponse,
  CheckDuplicateRuleNameRequest,
  RollbackCustomFunctionVersionResponse,
  DescribeCrontabTopNDsRequest,
  TableQualityDetailPage,
  CreateTaskAlarmRegularResponse,
  DeleteRuleTemplateRequest,
  CreateBaselineResponse,
  MakeUpWorkflowNewRequest,
  DescribeAlarmReceiverRequest,
  KillOpsMakePlanInstancesRequest,
  ModifyWorkflowInfoRequest,
  AdhocRecordInfoDto,
  BatchResumeIntegrationTasksRequest,
  DeleteTaskAlarmRegularResponse,
  CollectionEventDTO,
  DescribeWorkflowSchedulerInfoDsResponse,
  MakePlanTaskOpsDtoCollection,
  DescribeCodeSearchAuditInfoV2Response,
  LinkOpsDto,
  ListBatchJobRequest,
  InstanceReportReadNode,
  BatchStopIntegrationTasksResponse,
  ModifyDataSourceRequest,
  UpdateInLongAgentRequest,
  CreatePathRequest,
  DescribeDatasourceResponse,
  SuspendIntegrationTaskResponse,
  TaskVersionDsDTO,
  DescribeSchedulerRunTimeInstanceCntByStatusResponse,
  QueryWorkflowVersionRequest,
  RunForceSucScheduleInstancesRequest,
  CodeSearchAuditDTO,
  CsvRow,
  CreateFileVersionRequest,
  CheckIntegrationTaskNameExistsRequest,
  DescribeAllParamDsResponse,
  DescribeOrganizationalFunctionsResponse,
  FindAllFolderRequest,
  DescribeDataTypesResponse,
  TaskLogResponse,
  ImportRequestInfo,
  ApproveType,
  DeleteResourceFilesResponse,
  ParamGetTaskInstancesStatusInfoResponseInstance,
  GetOfflineInstanceListRequest,
  DescribeRealTimeTaskMetricOverviewRequest,
  RulePage,
  TaskTypeExtDsVO,
  DescribeRuleHistoryByPageResponse,
  DescribeWorkflowInfoByIdResponse,
  ImportFilesResponse,
  DescribeProjectRequest,
  ModifyTaskAlarmRegularResponse,
  InstanceSearchCondition,
  DescribeTaskRunHistoryRequest,
  TaskDataRegistryDTO,
  InstanceCondition,
  DeleteOfflineTaskRequest,
  WeightInfo,
  DescribeInLongAgentVpcListRequest,
  RuleExecExportResult,
  ModifyMonitorStatusResponse,
  DescribeFatherDatasourceInfoDsRequest,
  DeleteInLongAgentResponse,
  ModifyMonitorStatusRequest,
  ImportTableDTO,
  DeleteFilePathRequest,
  DescribeTasksForProjectCloneResponse,
  ExportWorkflowXmlRequest,
  MoveFileResponse,
  FindTaskByRemotePathResponse,
  CreateTaskDsRequest,
  DeleteDsFolderRequest,
  TaskLinkDsDTO,
  AdhocRecord,
  DescribeDatabaseMetasRequest,
  DescribeWorkflowSchedulerInfoDsRequest,
  OperationOpsDto,
  DescribeTaskByStatusReportResponse,
  DescribeInfoTransByTypeIdDsRequest,
  DescribeNewSqlTaskResultRequest,
  InstanceApiOpsRequest,
  KillInstancesRequest,
  StartIntegrationTaskResponse,
  BatchStopOpsTasksResponse,
  RenewWorkflowFolderDsResponse,
  DescribeCodeSearchInfoRequest,
  Columns,
  RuleGroupMonitorPage,
  DeleteRuleResponse,
  ImportOfflineTaskResponse,
  InstanceInfo,
  TaskInfoData,
  UpdateBatchTaskAdvancedSettingsRequest,
  DescribeInstancesRequest,
  TaskDatasourceDTO,
  DescribeInstanceByCycleReportRequest,
  UpdateBatchTaskScheduleResponse,
  DescribeDataSourceWithoutInfoResponse,
  ModifyBaselineTaskAlarmStatusResponse,
  BatchStopWorkflowsByIdsResponse,
  DescribeDependOpsTaskListResponse,
  DatasourceBaseInfo,
  TaskTypeExtParamVO,
  DescribeStatisticInstanceStatusTrendOpsResponse,
  CountOpsInstanceStateResponse,
  DescribeQualityScoreTrendRequest,
  SubmitTaskTestRunRequest,
  DeleteBaselineResponse,
  InstanceReportSummary,
  CheckAlarmRegularNameExistResponse,
  WorkflowCanvasOplog,
  SpeedValue,
  FunctionVersion,
  PreviewDataTableCsvRequest,
  ScreenInstanceInfo,
  TaskOpsDto,
  RenewWorkflowOwnerDsResponse,
  UpdateBatchTaskResourceGroupResponse,
  DescribeWorkflowParamDsRequest,
  DiagnosePlusRequest,
  DescribeIntegrationStatisticsAgentStatusRequest,
  DescribeInstanceLogFileRequest,
  CheckTaskNameExistDsRequest,
  DescribeTaskLatestRunTimeResponse,
  ModifyRuleTemplateResponse,
  IntegrationInstanceLog,
  CsvReadDTO,
  DeleteTaskFolderRequest,
  IntegrationStatisticsTrendResult,
  RuntimeInstanceCntTop,
  ColumnMeta,
  DescribeTaskReportResponse,
  GetOfflineDIInstanceListResponse,
  DescribeBrowsingHistoriesResponse,
  GetOfflineInstanceListResponse,
  CreateIntegrationTaskRequest,
  FieldConfig,
  DescribeRuleGroupExecResultsByPageResponse,
  DescribeBaselineTaskDagResponse,
  DescribeTaskDetailResponse,
  ModifyDsFolderRequest,
  GetTestRunTaskInstancesStatusInfoResponse,
  DescribeDsEventListenerRequest,
  InstanceReportWriteNode,
  SubCloneObjectDTO,
  RuleHistoryPage,
  KillTasksTestRunRequest,
  ImportDsEventResponse,
  ModifyTaskFolderResponse,
  DescribeDsNotSubmitTasksAndCanRunByWorkflowResponse,
  RemoveWorkflowDsResponse,
  GetOfflineDIInstanceListRequest,
  ModifyExecStrategyResponse,
  DescribeDatasourceRequest,
  IntegrationNodeSchema,
  CreateBrowsingHistoryRequest,
  FunctionTypeOrKind,
  DescribeTableSchemaInfoResponse,
  BatchDeleteTasksDsAsyncRequest,
  DescribeInstanceListResponse,
  StartIntegrationTaskRequest,
  DescribeProjectResponse,
  TableBaseInfo,
  DescribeDsEventRequest,
  OfflineInstance,
  ModifyTaskInfoDsRequest,
  StopAdhocTaskResponse,
  DescribeProjectParamVersionDsRequest,
  DescribeNewSqlTaskResultResponse,
  ResourcePathTree,
  TaskLinkInfo,
  Property,
  TaskDsDTOLite,
  BatchStartIntegrationTasksResponse,
  DescribeRealTimeTaskSpeedResponse,
  DescribeFolderWorkflowListRequest,
  DescribeBaselineInstanceDagResponse,
  TaskExtVO,
  CheckTaskNameExistResponse,
  DescribeSchedulerRunTimeInstanceCntByStatusRequest,
  TaskInfoPage,
  CreateDsFolderRequest,
  DescribeMonitorsByPageResponse,
  RenewWorkflowSchedulerInfoDsRequest,
  TableHeat,
  DescribeDsEventPublisherListRequest,
  RunTasksByMultiWorkflowRequest,
  DescribeBaselinesResponse,
  SubmitIntegrationTaskResponse,
  DescribeCodeSearchAuditInfoRequest,
  DescribeDataSourceWithoutInfoRequest,
  DailyScoreInfo,
  DescribeInLongAgentVpcListResponse,
  DescribeDataTableImportProgressRequest,
  DescribeQualityScoreRequest,
  GetResourcePathTreeRequest,
  DescribeChildrenDsRequest,
  BatchStopTasksNewResponse,
  WorkFlowExecuteDtoByPage,
  DescribeRuleExecDetailResponse,
  BatchCreateTaskVersionAsyncResponse,
  DescribeDevelopmentSpaceSupportTypeResponse,
  RestoreRecycleTaskRequest,
  DescribeTaskParentRunTimeRequest,
  DescribePathTreesRequest,
  ExportDsEventRequest,
  CreateOpsMakePlanRequest,
  InstanceLogInfoOpsDto,
  RunTaskResponse,
  KillTestRunTasksResponseResult,
  DescribeDependTasksNewResponse,
  DescribeIntegrationStatisticsInstanceTrendRequest,
  DescribeDsFolderTreeResponse,
  PathNodeDsVO,
  DeleteResourcePathResponse,
  DescribeTableLineageInfoRequest,
  DryRunDIOfflineTaskResponse,
  DescribeBaselinesRequest,
  OfflineTaskAddParam,
  UserFileVersionDto,
  RealTimeTaskSpeed,
  ExportProjectParamDsResponse,
  CreateBrowsingHistoryResponse,
  ListBatchDetailRequest,
  ModifyWorkflowInfoResponse,
  OrganizationalFunction,
  EventBatchCaseDTO,
  RegisterEventResponse,
  DeleteTaskOutParamDsRequest,
  DescribeIntegrationTasksRequest,
  EventCaseConsumeLogOptDto,
  DescribeEventConsumeTasksResponse,
  AlarmInfo,
  DescribeStreamTaskLogListRequest,
  DescribeProjectParamDsResponse,
  MakeUpTasksNewResponse,
  LogContentInfo,
  TaskParentSchedulerDependency,
  DescribeRuleDimStatResponse,
  ColumnBasicInfo,
  RestartInLongAgentRequest,
  UserFileDTONew,
  IntegrationNodeSchemaMapping,
  TaskDsDTOLiteV2,
  TaskDsDTOLiteV3,
  DescribeRealTimeTaskSpeedRequest,
  BatchTaskOperateNew,
  DescribeDataObjectsResponse,
  TableHybrisReq,
  DeleteTaskDsResponse,
  CreateWorkflowRequest,
  JudgeResourceFileResponse,
  UpdateBatchTaskParameterDTO,
  Label,
  DescribeExecutionLogResponse,
  DescribeFieldBasicInfoResponse,
  RenameFileResponse,
  DescribeRuleExecResultsByPageResponse,
  RuleGroupExecResult,
  DeleteProjectParamVersionDsRequest,
  SparkParameterDTO,
  RegisterDsEventRequest,
  CheckTaskNameExistRequest,
  DescribeTemplateDimCountRequest,
  ModifyIntegrationTaskResponse,
  DescribeInLongTkeClusterListResponse,
  GetResourceCosPathRequest,
  DescribeDataCheckStatRequest,
  DescribeRuleExecResultsRequest,
  RegisterDsEventListenerResponse,
  DescribeDrSonInstanceResponse,
  DeleteRecycleTaskResponse,
  WorkflowTaskCountOpsDto,
  DescribeCodeSearchCountResponse,
  DescribeClusterNamespaceListResponse,
  CreateInLongAgentResponse,
  DescribeDataBasesResponse,
  ModifyWorkflowScheduleRequest,
  RegisterEventRequest,
  UploadResourceRequest,
  BatchDeleteTasksDsAsyncResponse,
  DescribeRuleGroupsByPageRequest,
  SearchConditionInstanceNew,
  BatchJobVO,
  DescribeDsEventListenerListRequest,
  RuleTemplateHistoryPage,
  ModifyTaskScriptDsResponse,
  DescribeTopTableStatRequest,
  DescribeTableLineageResponse,
  DescribeDataSourceListResponse,
  AgentStatus,
  UpdateWorkflowOwnerRequest,
  ExportWorkflowZipResponse,
  DescribeSchedulerTaskTypeCntResponse,
  DescribeTaskScriptResponse,
  DescribeEventListenerTaskRequest,
  CountOpsInstanceStateRequest,
  BatchCreateVirtualTaskDsResponse,
  CheckDuplicateTemplateNameRequest,
  DescribeEventTypesResponse,
  EventCaseOpsDto,
  CreateResourcePathRequest,
  BatchModifyOpsOwnersRequest,
  BatchDeleteOpsTasksRequest,
  LineageParamRecord,
  ListBatchJobResponse,
  DescribeBaselineInstanceDagRequest,
  DescribeIntegrationStatisticsInstanceTrendResponse,
  DescribeInstanceLogListRequest,
  SavePositionsDsRequest,
  DescribeAllTaskTypeResponse,
  DescribeBatchOperateTaskDTO,
  ModifyTaskLinksRequest,
  UploadAdvanceRunParamsRequest,
  RenameResourceDTO,
  EventCaseConsumeLogOptDtoCollection,
  DeleteFileRequest,
  TableConfig,
  DescribeRuleTemplateResponse,
  DescribeCustomFunctionVersionListRequest,
  DatabaseMeta,
  TaskBaseInfo,
  DescribeTableInfoListRequest,
  RunForceSucScheduleInstancesResponse,
  DescribeBaselineAllTaskDagResponse,
  DescribeDsLatestTaskVersionInfoRequest,
  DependencyStrategyDs,
  RuleGroup,
  DescribeScheduleInstancesResponse,
  DescribeColumnLineageRequest,
  RunTasksByMultiWorkflowResponse,
  DescribeDiagnosticInfoResponse,
  DescribeRecycleTaskDetailResponse,
  RowColumn,
  AlarmDsVO,
  DescribeRuleExecLogResponse,
  KillOpsMakePlanInstancesResponse,
  DescribeDataTableImportProgressResponse,
  IntegrationNodeMapping,
  ColumnAggregationLineage,
  CreateHiveTableByDDLResponse,
  DescribeOperateOpsTaskDatasourceTypeRequest,
  BatchKillIntegrationTaskInstancesResponse,
  DescribeSqlTaskResultResponse,
  DeleteResourceResponse,
  ModifyRuleResponse,
  PairDto,
  DescribeFileVersionsRequest,
  DescribeBatchTestRunResponse,
  DescribeAllByFolderNewResponse,
  KillScheduleInstancesResponse,
  SubmitPythonTaskRequest,
  UnlockIntegrationTaskRequest,
  DescribeWorkflowTaskCountRequest,
  CollectionEventListenerTaskDTO,
  DrInstanceOpsDto,
  TaskLockStatus,
  CommonContent,
  TableScoreStatisticsInfo,
  BatchForceSuccessIntegrationTaskInstancesResponse,
  CompareDsTaskVersionInfoResponse,
  AlarmReceiverInfo,
  DescribeTestRunResponse,
  TaskDatasourceDTOPage,
  DescribeRuleExecStatResponse,
  TaskByCycle,
  DescribeProdWorkflowCanvasInfoDsRequest,
  SubmitShellTaskResponse,
  CreateTaskDsResponse,
  ExportWorkflowXmlResponse,
  DescribeEventResponse,
  GenHiveTableDDLSqlRequest,
  CollectionParamDTO,
  DescribeEventsResponse,
  BatchStopOpsTasksRequest,
  RenewWorkflowSchedulerInfoDsResponse,
  DescribeInstanceLastLogRequest,
  AdhocDetail,
  BatchOperateResultDs,
  BatchDeleteTasksNewRequest,
  SubmitTestRunRequest,
  CheckDuplicateRuleNameResponse,
  DependencyConfigDsDTONoRecur,
  DescribeSchedulerTaskCntByStatusResponse,
  SubmitWorkflow,
  DescribeFolderListRequest,
  DescribeWorkflowParamDsResponse,
  GetRunSonListDsResponse,
  DescribeTaskDetailDsResponse,
  DsKettleServerFolderTreeNodeDto,
  ForceSucScheduleInstancesRequest,
  EventListenerTaskInfo,
  DescribeApproveTypeListRequest,
  SubmitShellTaskRequest,
  TCHouseXTaskParameter,
  BatchResultDs,
  DescribeIntegrationNodeRequest,
  SetTaskAlarmNewResponse,
  RenameResourceRequest,
  CreateCustomFunctionRequest,
  BatchOperationOpsDto,
  RuleExecConfig,
  BaselineTaskDto,
  RecordField,
  CreateTaskOutputRegistriesResponse,
  DescribeDsParentFolderTreeResponse,
  WorkflowCanvasOpsDto,
  DescribeLockResponse,
  DescribeRelatedInstancesResponse,
  CreateOrUpdateResourceRequest,
  RecycleTaskPageInfo,
  DescribeDimensionScoreResponse,
  DescribeInstancesInfoWithTaskInfoRequest,
  SubmitCustomFunctionRequest,
  BatchOperateResultOpsDto,
  DeleteRuleRequest,
  BatchCreateTaskVersionDsRequest,
  DescribeDependencyWorkflowForProjectCloneRequest,
  LatestAnalyseInfoTask,
  TablePropertyScore,
  DescribeWorkflowByFordIdsResponse,
  CreateOpsMakePlanResponse,
  DeleteWorkflowNewResponse,
  DescribeRuleGroupExecResultsByPageWithoutAuthRequest,
  HeartBeatResponse,
  DeleteWorkflowByIdResponse,
  DescribeCodeDetailRequest,
  DescribeInstancesResponse,
  StringListNode,
  DescribeTableMetaRequest,
  DescribeBaselineByIdRequest,
  CreateRuleResponse,
  DescribeEtlTaskTypeRequest,
  BatchMakeUpIntegrationTasksRequest,
  DescribeAllUsedVersionSonRequest,
  DescribeDatabaseInfoListResponse,
  DescribeDsEventDetailResponse,
  ModifyIntegrationNodeRequest,
  SubmitWorkflowResponse,
  StopTestRunResponse,
  DescribeTemplateDimCountResponse,
  UpdateBatchTaskAdvancedSettingsResponse,
  DescribeInstanceLogResponse,
  UpdateDsEventRequest,
  DescribeWorkflowForProjectCloneResponse,
  ApproveModify,
  DescribeOpsMakePlanTasksResponse,
  InstanceLogList,
  DescribeRecordListResponse,
  DescribeColumnLineageResponse,
  DeleteFolderRequest,
  DescribeWorkflowListByProjectIdResponse,
  CheckTaskPriorityTaskDTO,
  AlarmExtDsVO,
  DescribeEventDetailResponse,
  AcquireLockRequest,
  CreateFolderResponse,
  TaskExtDsVO,
  DescribeQualityScoreTrendResponse,
  ParameterTaskOutDsDto,
  PreviewDataTableCsvResponse,
  SubmitSqlTaskRequest,
  DependencyConfigDsDTONoRecurV2,
  FindDependTaskListDsResponse,
  ReleaseLockResponse,
  RenameFileRequest,
  CodeSearchCountInfo,
  DeleteFileResponse,
  DescribeCodeSearchAuditInfoV2Request,
  DatasourceTypeByTaskType,
  DescribeOperateOpsTasksResponse,
  DescribeResourceManagePathTreesRequest,
  DescribeTasksByPageResponse,
  FunctionResource,
  ExportFilesRequest,
  DescribeStandardRuleDetailInfoListRequest,
  RenameResourceFileRequest,
  RuleGroupSchedulerInfo,
  DiagnosePlusResponse,
  HeartBeatRequest,
  AlarmIndicatorInfo,
  AlarmVO,
  DescribeTableMetasResponse,
  DescribeSonInstancesResponse,
  GetLatestTestRunInfoRequest,
  DescribeTaskAlarmRegulationsRequest,
  CreateTaskOutputRegistryRequest,
  DescribeInfoTransByTypeIdDsResponse,
  DescribeDependTasksDevDsRequest,
  CreateCustomFunctionResponse,
  UpdateEventListenerResponse,
  ModifyTaskInfoRequest,
  DeleteTaskOutParamDsResponse,
  DescribeTableMetaResponse,
  FindFuzzyTasksDsResponse,
  FindDependTaskListsDsRequest,
  RuleGroupSubscribe,
  DagInstancesRequest,
  MakePlanInstanceOpsDtoCollection,
  DeleteTaskAlarmRegularRequest,
  CompareRule,
  CreateInLongAgentRequest,
  CreateTaskParamDsResponse,
  EventListenerDTO,
  DescribeBelongToRequest,
  CheckAlarmRegularNameExistRequest,
  CheckTaskPriorityDsRequest,
  RuleExecResult,
  BatchRunOpsTaskRequest,
  DescribeTaskDetailDsRequest,
  DescribeDatabaseMetasResponse,
  FreezeTasksByWorkflowIdsResponse,
  CreateMakeDatetimeInfo,
  RunRerunScheduleInstancesRequest,
  DescribeTaskParentRunTimeResponse,
  SubmitPySparkTaskRequest,
  CompareResultItem,
  DescribeTableSchemaInfoRequest,
  RunRerunScheduleInstancesResponse,
  BaselineDto,
  DlcMergeManifestsInfo,
  RobLockState,
  DescribeApproveListRequest,
  TaskTypeExtVO,
  CommitRuleGroupTaskResponse,
  DescribeWorkflowTasksForProjectCloneResponse,
  BatchStartIntegrationTasksRequest,
  CreateScriptsImportTasksDsResponse,
  RuleExecStat,
  DescribeTaskBindVirtualTaskRequest,
  DescribeFileVersionsResponse,
  DescribeSuccessorOpsTaskInfosRequest,
  CreateTaskOutputRegistry,
  DescribeTaskReportDetailListRequest,
  DescribeImportableOfflineTaskResponse,
  ProjectCloneWorkflowInfoPageNew,
  DescribeIntegrationVersionNodesInfoResponse,
  ImportWorkflowZipRequest,
  UpdateBatchTaskInChargeResponse,
  DescribeRuleRequest,
  DescribeCodeSearchAuditInfoResponse,
  PathTreeNodeParams,
  DescribeTableLineageInfoResponse,
  RenameTaskDsRequest,
  Partition,
  ReplaceProjectParamVersionDsResponse,
  ModifyBaselineTaskAlarmStatusRequest,
  RestartInLongAgentResponse,
  DescribeIntegrationVersionNodesInfoRequest,
  DescribeGlobalWorkflowDsRequest,
  DescribeScheduleInstancesRequest,
  DescribeBaselineInstanceGanttRequest,
  UpdateBatchTaskResourceGroupRequest,
  StrToStrMap,
  TaskReportDetail,
  TestRunBatchItem,
  DeleteLinkResponse,
  ParamInfo,
  DescribeExecStrategyRequest,
  CreateHiveTableRequest,
  VirtualTaskInfoPage,
  DescribeRuleGroupTableResponse,
  DescribeTaskOutParamDsResponse,
  DeleteDsEventPublisherRequest,
  ShareStorageFileMappingDTO,
  ImportFilesRequest,
  RenameResourcePathRequest,
  UpdateBatchTaskDatasourceRequest,
  FreezeTasksByMultiWorkflowRequest,
  CreateRuleTemplateRequest,
  TopTableStat,
  Pair,
  DeleteIntegrationTaskResponse,
  DescribeRecycleTaskListResponse,
  TableBasicInfo,
  ModifyTaskLinksDsRequest,
  ParamMapDsDto,
  DescribeDatabaseInfoListRequest,
  DescribeIntegrationTaskResponse,
  StopIntegrationTaskResponse,
  DescribeDsTaskVersionInfoRequest,
  CheckDuplicateTemplateNameResponse,
  UpdateBatchTaskInChargeRequest,
  DescribeRuleTemplatesRequest,
  BatchModifyOwnersNewRequest,
  UpdateEventListenerRequest,
  StopBaselineResponse,
  GetPathTreesRequest,
  GenHiveTableDDLSqlResponse,
  DescribeRuleExecStatRequest,
  WorkflowCanvasOperatorsDs,
  RuleConfig,
  BatchCreateIntegrationTaskAlarmsResponse,
  MoveFileRequest,
  DescribeEventTypesRequest,
  DescribeOpsInstanceLogListResponse,
  DescribeTaskParamDsRequest,
  DescribeApproveTypeListResponse,
  BatchSuspendIntegrationTasksResponse,
  CheckCustomFunctionPremiseRequest,
  DescribeRuleExecLogRequest,
  RuleGroupPage,
  UpdateTaskDsRequest,
  DescribeBaselineInstanceGanttResponse,
  BatchRunTasksDsResponse,
  DescribeTasksByPageRequest,
  DescribeBatchOperateTaskPage,
  AnalyzeDependentTask,
  DescribeIntegrationStatisticsResponse,
  UpdateBatchTaskParamsRequest,
  DescribeIntegrationNodeResponse,
  DescribeTokenRequest,
  ScreenTaskInfo,
  DescribeTrendStatResponse,
  DescribePathTreesResponse,
  RuleHistory,
  MoveTasksToFolderResponse,
  DescribeFatherDatasourceInfoDsResponse,
  EditBaselineRequest,
  DescribeRuleTemplatesResponse,
  DescribeTaskTypeByScriptTypeRequest,
  BatchDeleteTasksDsRequest,
  DeleteDsEventListenerResponse,
  FreezeOpsTasksRequest,
  DeleteRecordListRequest,
  SourceObject,
  DescribeRulesResponse,
  WorkFlowExecuteDto,
  SubmitTaskRequest,
  DescribeWorkflowByFordIdsRequest,
  DataSourceInfoPage,
  DeleteRecordListResponse,
  ParamTaskDsRequest,
  UpdateInLongAgentResponse,
  DescribeEventCasesRequest,
  BatchResumeIntegrationTasksResponse,
  RenewWorkflowDsRequest,
  UpdateWorkflowOwnerResponse,
  DescribeDataSourceListRequest,
  BatchCreateTaskVersionDsDTOLite,
  SubmitBatchTestRunResponse,
  ScriptUsedByOtherTaskDsRequest,
  CodeSearchResult,
  RecycleFilePageInfo,
  InstanceOpsDto,
  DeleteTaskInParamDsResponse,
  DeleteResourceFileRequest,
  SaveCustomFunctionRequest,
  DescribeRuleDataSourcesResponse,
  ModifyTaskScriptDsRequest,
  MakePlanOpsDtoCollection,
  UpdateBatchTaskParameterResponse,
  TaskDataRegistry,
  DescribeDiagnosticInfoByBaselineIdRequest,
  DescribeThirdTaskRunLogRequest,
  AnalyzeDependentTasksRequest,
  BatchRerunIntegrationTaskInstancesRequest,
  ParameterTaskInDsDto,
  DescribeDrSonInstanceRequest,
  AlarmRuleDto,
  SearchCondition,
  DescribeInstanceLogDetailRequest,
  BatchSuspendIntegrationTasksRequest,
  BizParams,
  TaskInstanceDetail,
  DescribeCodeDetailResponse,
  ParameterVersionDsDto,
  DeleteCustomFunctionResponse,
  CreateFileVersionResponse,
  BatchUpdateTasksDsRequest,
  ListBatchDetailResponse,
  DescribeTaskInstanceResponse,
  DescribeSchedulerInstanceStatusResponse,
  DescribeThirdTaskRunLogResponse,
  CreateTaskVersionDsResponse,
  DescribeProdTasksRequest,
  ResumeIntegrationTaskResponse,
  DescribeTaskReportDetailListResponse,
  GetCosTokenRequest,
  BatchResult,
  RenewWorkflowDsResponse,
  StopTestRunRequest,
  DescribeRuleGroupResponse,
  DeleteDataSourcesResponse,
  DeleteDataSourcesRequest,
  SubmitSqlTaskResponse,
  ImportOfflineTaskRequest,
  ListBatchJobPages,
  RerunInstancesRequest,
  UpdateBatchTaskDatasourceResponse,
  DescribeTaskRunHistoryResponse,
  DescribeBatchOperateTaskResponse,
  AsyncResourceVO,
  CommitIntegrationTaskRequest,
  CommitIntegrationTaskResponse,
  UpdateTaskDsResponse,
  CompareDsTaskVersionInfoRequest,
  IntegrationTaskInfo,
  DeleteResourceFilesRequest,
  SubmitTaskResponse,
  ModifyFolderRequest,
  ModifyApproveStatusResponse,
  AlarmExtVO,
  CreateTaskAlarmRegularRequest,
  ProjectCloneTaskInfoPageNew,
  QueryWorkflowVersionResponse,
  CodeSearchInfo,
  DescribeWorkflowCanvasOperatorsResponse,
  DependencyConfigDsDTONoRecurV3,
  BatchRunTasksDsRequest,
  DescribeDependOpsTaskListRequest,
  DescribeInstanceLogsResponse,
  DescribeDsLatestTaskVersionInfoResponse,
  DescribeBaselineAllTaskDagRequest,
  DescribeRuleExecDetailRequest,
  ModifyAlarmRuleRequest,
  ScriptUsedByOtherTaskDsResponse,
  ProjectCloneWorkflowInfo,
  RegisterDsEventPublisherRequest,
  ModifyTaskScriptResponse,
  RecordsSpeed,
  UploadFilesDsRequest,
  CreateResourceDirectoryResponse,
  Namespace,
  ImportWorkflowXmlResponse,
  CollectionTaskOpsDto,
  FolderOpsDto,
  ParamGetTestRunTaskInstancesStatusInfoTask,
  DeleteCustomFunctionRequest,
  TaskInfoDataPage,
  DescribeAllTaskTypeRequest,
  DescribeWorkflowCanvasOpLogsResponse,
  TableLineageBaseInfo,
  InstanceList,
  TaskDsDTOPage,
  DescribeDsEventPublisherListResponse,
  OrderFieldOptional,
  DescribeFolderWorkflowListData,
  RerunOpsMakePlanInstancesRequest,
  FilterOptional,
  TaskInstanceCountDto,
  BaselineTaskInfo,
  TaskAlarmInfo,
  DescribeClusterNamespaceListRequest,
  DescribeChildrenPathTreesRequest,
  CandidateDsDTo,
  DagInstancesResponse,
  DescribeAllUsedVersionSonResponse,
  DescribeTemplateHistoryRequest,
  FreezeTasksByWorkflowIdsRequest,
  DescribeCodeSearchInfoV2Response,
  DescribeOpsMakePlanInstancesRequest,
  DescribeRuleExecExportResultRequest,
  DescribeRuleExecResultsByPageRequest,
  LockIntegrationTaskResponse,
  DeleteWorkflowNewRequest,
  DescribeEventRequest,
  DescribeTaskInstancesRequest,
  RegisterDsEventPublisherResponse,
  DescribeDsTaskVersionListRequest,
  TaskInstanceInfo,
  ExportFile,
  DescribeLockRequest,
  DescribeDsEventListenerListResponse,
  DeleteWorkflowByIdRequest,
  DescribeTableLineageRequest,
  SimpleColumnInfo,
  CreateTaskResponse,
  CommitRuleGroupExecResultRequest,
  DescribeDependencyTasksForProjectCloneResponse,
  CheckTaskNameExistDsResponse,
  DescribeEventIsAlarmTypesResponse,
  DescribeStatisticInstanceStatusTrendOpsRequest,
  SearchConditionInstance,
  CodeSearchInfoPage,
  DescribeRulesByPageResponse,
  CvmAgentStatus,
  DescribeIntegrationStatisticsAgentStatusResponse,
  CommitRuleGroupTaskRequest,
  CheckIntegrationNodeNameExistsRequest,
  ScriptRequestInfo,
  CommitWorkflowResponse,
  GetAdvanceRunParamsRequest,
  DescribeDataTypesRequest,
  RegisterDsEventListenerRequest,
  DescribeTokenResponse,
  ModifyTaskFolderRequest,
  DescribeEventIsAlarmTypesRequest,
  GetRunSonListDsRequest,
  DescribeProdWorkflowCanvasInfoDsResponse,
  DimensionScoreInfo,
  DescribeIntegrationStatisticsTaskStatusTrendRequest,
  DescribeTaskInParamDsResponse,
  ModifyTaskLinksResponse,
  FindFuzzyTasksDsRequest,
  DescribeWorkflowOpsCanvasInfoRequest,
  DescribeResourceManagePathTreesResponse,
  DescribeFunctionTypesRequest,
  DimensionCount,
  ExportRequestInfo,
  WorkflowSchedulerOpsDto,
  DownloadNewSqlResultResponse,
  FreezeTasksByMultiWorkflowResponse,
  EventListenerNewDTO,
  SaveCustomFunctionResponse,
  TaskDsDTONoRecurV3,
  TaskDsDTONoRecurV2,
  ModifyDimensionWeightRequest,
  SimpleTaskInfo,
  DescribeSchedulerTaskCntByStatusRequest,
  RuleExecLog,
  EventCaseAuditLogVOCollection,
  CreateHiveTableResponse,
  CreateIntegrationNodeRequest,
  ModifyDataSourceResponse,
  DescribeMonitorsByPageRequest,
  RerunInstancesResponse,
  DescribeTaskOutputRegistriesResponse,
  DescribeProjectParamVersionInfoDsRequest,
  DeleteTaskDsRequest,
  FindDependTaskListsDsResponse,
  DependencyConfig,
  RobAndLockIntegrationTaskRequest,
  CommitExportTaskResponse,
  DataCheckStat,
  CreateRuleRequest,
  DescribeChildrenPathTreesResponse,
  DescribeTemplateHistoryResponse,
  DescribeRuleExecResultsResponse,
  QualityScoreTrend,
  DescribeDrInstanceScriptContentResponse,
  TriggerEventResponse,
  DescribeRuleDataSourcesRequest,
  DescribeTableQualityDetailsResponse,
  CommonIdOpsDto,
  BatchUpdateTasksDsResponse,
  DownloadNewSqlResultRequest,
  RenewWorkflowFolderDsRequest,
  SubscribeReceiver,
  CompareResult,
  BatchRunOpsTaskResponse,
  UploadResourceRequestInfo,
  SubmitCustomFunctionResponse,
  DescribeRuleTablesByPageResponse,
  DescribeTasksForProjectCloneRequest,
  InstanceDownloadLogInfo,
  FreezeTasksResponse,
  DescribeTaskOutParamDsRequest,
  DescribeOperateOpsTasksRequest,
  DescribeOfflineTaskTokenRequest,
  CreateWorkflowResponse,
  DeleteResourceRequest,
  BaselineTaskInstanceDto,
  RobAndLockIntegrationTaskResponse,
  DescribeLockResp,
  DeleteBatchWorkflowDsResponse,
  DescribeEventListenerTaskResponse,
  EventDsDto,
  RecycleTaskInfo,
  ForceSucInstancesResponse,
  UpdateDsEventResponse,
  DescribeRuleGroupTableRequest,
  DescribeOperateOpsTaskDatasourceRequest,
  TopTableStatItem,
  CreateTaskOutputRegistriesRequest,
  CreateResourcePathResponse,
  DeleteTaskFolderResponse,
  DeleteFolderResponse,
  GetTestRunTaskInstancesStatusInfoRequest,
  RuleGroupTableInnerInfo,
  DeleteIntegrationTaskRequest,
  DependencyConfigDsDTO,
  RuleExecResultPage,
  ModifyExecStrategyRequest,
  BatchForceSuccessIntegrationTaskInstancesRequest,
  DescribeTaskByCycleReportRequest,
  DescribeInstanceLogDetailResponse,
  DescribeProdTasksResponse,
  GetIntegrationNodeColumnSchemaRequest,
  DescribeTableInfoListResponse,
  MakeUpOpsTasksRequest,
  UserFileInfo,
  DescribeTableBasicInfoRequest,
  CheckTaskNameExistResult,
  SchemaDetail,
  DescribeProjectParamVersionInfoDsResponse,
  DescribeTaskOutputRegistriesRequest,
  StopIntegrationTaskRequest,
  CreateTaskParamDsRequest,
  DescribeFolderWorkflowListResponse,
  Params,
  CreateFolderRequest,
  DescribeWorkflowCanvasInfoDsRequest,
  DescribeRulesRequest,
  DescribeWorkflowExecuteByIdResponse,
  DescribeRuleResponse,
  DescribeTaskListByConditionDsResponse,
  ModifyTaskLinksDsResponse,
  DescribeQualityScoreResponse,
  DescribeWorkflowTasksForProjectCloneRequest,
  RuleDimCnt,
  RuleGroupTable,
  MakePlanTaskOpsDto,
  FindDependTaskListDsRequest,
  UploadContentRequest,
  TaskByStatus,
  DlcRemoveOrphanFilesInfo,
  LockIntegrationTaskRequest,
  BatchStopIntegrationTasksRequest,
  DescribeRuleTemplatesByPageRequest,
  RegisterDsEventResponse,
  ExportDsEventResponse,
  DescribeInstanceLastLogResponse,
  ScriptInfoResponse,
  CreateTaskInParamDsRequest,
  SavePositionsDsResponse,
  DescribeTestRunBatchItem,
  DescribeRecycleTaskListRequest,
  EventListenerOpsDto,
  DescribeOperateOpsTaskDatasourceTypeResponse,
  GetLatestTestRunInfoResponse,
  DescribeWorkflowOpsCanvasInfoResponse,
  RuleTemplateHistory,
  DescribeApply,
  BatchDeleteIntegrationTasksResponse,
  DlcRewriteDataInfo,
  DescribeDataDevelopTaskTypeRequest,
  Filter,
  DescribeInstanceByCycleRequest,
  DescribeFolderListResponse,
  JudgeResourceFileRequest,
  DescribeRuleExecHistoryResponse,
  ModifyBaselineAlarmStatusResponse,
  ModifyFolderResponse,
  DatabaseInfo,
  GetIntegrationNodeColumnSchemaResponse,
  OpsTaskCanvasDto,
  CreatePathResponse,
  DescribeDataCheckStatResponse,
  DescribeWorkflowCanvasInfoRequest,
  ParamInfoDs,
  DescribeDsKettleServerFolderTreeResponse,
  DeleteTaskInParamDsRequest,
  DescribeRuleExecExportResultResponse,
  DescribeOperateTasksResponse,
  DescribeTestRunRequest,
  DescribeBaselineResponse,
  CollectionFolderOpsDto,
  DescribeInLongAgentTaskListRequest,
  DescribeTrendStatRequest,
  OrderField,
  ModifyTaskInfoDsResponse,
  DescribeDsTaskVersionListResponse,
  BatchRerunIntegrationTaskInstancesResponse,
  UpdateBatchTaskScheduleRequest,
  DescribeIntegrationStatisticsRequest,
  BatchMakeUpIntegrationTasksResponse,
  CommitExportTaskRequest,
  DeleteDsEventRequest,
  JudgeTaskListenEventRequest,
  BatchDeleteOpsTasksResponse,
  ExportWorkflowZipRequest,
  EventPublisherDTO,
  CreateTaskOutParamDsRequest,
  CopyTaskDsRequest,
  DescribeTaskAlarmRegulationsResponse,
  DescribeWorkflowInfoByIdRequest,
  DescribeDataDevelopTaskTypeResponse,
  AdhocSubTaskDto,
  DescribeRuleDimStatRequest,
  FreezeTasksRequest,
  CodeSearchAuditResult,
  MakeUpWorkflowNewResponse,
  DescribeInstancesInfoWithTaskInfoResponse,
  DescribeDsTaskVersionInfoResponse,
  CreateDsFolderResponse,
  DeleteTaskOutputRegistryRequest,
  DeleteTaskOutputRegistryResponse,
  ClearRecycleTaskResponse,
  InstanceOpsInfoPage,
  DeleteBaselineRequest,
  GetFileInfoResponse,
  DescribeCodeSearchInfoResponse,
  CopyWorkflowDsResponse,
  RollbackCustomFunctionVersionRequest,
  KillTasksTestRunResponse,
  TaskExtInfo,
  DescribeFathersResponse,
  EventPage,
  DescribeInstanceByCycleReportResponse,
  ParamDsRequest,
  BytesSpeed,
  ThresholdValue,
  DescribeFunctionKindsResponse,
  RestoreRecycleTaskResponse,
  DescribeInstanceByCycleResponse,
  DescribeCodeDetailV2Request,
  ProjectCloneTaskInfo,
  StageCloudApiRequest,
  DeleteEventListenerByTaskIdResponse,
  SubmitPythonTaskResponse,
  DescribeInstanceLogRequest,
  DescribeDimensionScoreRequest,
  CreateAlarmRuleRequest,
  FolderDsDto,
  DependencyStrategy,
  SubmitTestRunResponse,
  DescribeRecordListRequest,
  DescribeWorkflowTaskCountResponse,
  TaskTag,
  DescribeDataObjectsRequest,
  ModifyRuleGroupSubscriptionRequest,
  ExportTaskInfo,
  DeleteDsFolderResponse,
  DescribeDrInstancePageResponse,
  MoveTasksToFolderRequest,
  StopAdhocTaskRequest,
  DescribeScriptsImportTaskTypeRequest,
  TaskCanvasInfo,
  DescribeFolderListData,
  CollectionInstanceOpsDto,
  DrInstanceOpsDtoPage,
  JudgeTaskListenEventResponse,
  BatchUpdateIntegrationTasksRequest,
  ModifyTaskNameResponse,
  DescribeTopTableStatResponse,
  GetBatchDetailErrorLogRequest,
  DescribeWorkflowForProjectCloneRequest,
  BatchReturn,
  RerunOpsMakePlanInstancesResponse,
  DescribeOpsMakePlansResponse,
  ModifyWorkflowScheduleResponse,
  GetFileInfoRequest,
  ModifyTaskAlarmRegularRequest,
  DescribeColumnsMetaRequest,
  WorkflowCanvasOpLogResult,
  CreateProjectParamDsResponse,
  OpsTaskCanvasInfoList,
  DescribeDependTaskListsRequest,
  DescribeEventsRequest,
  DescribeAllByFolderNewRequest,
  BatchCreateVirtualTaskDTO,
  Apply,
  DescribeEventListenerByTaskIdRequest,
  DescribeInstanceLogListResponse,
  DeleteProjectParamDsResponse,
  DescribeParentTaskRequest,
  DescribeDependTasksNewRequest,
  ModifyRuleRequest,
  FindAllFolderResponse,
  MakeUpOpsTasksResponse,
  DescribeInLongAgentListRequest,
  DescribeCodeDetailV2Response,
  DescribeDevelopmentSpaceSupportTypeRequest,
  DescribeScheduleInstanceRequest,
  TaskDsDTO,
  BatchDeleteTasksNewResponse,
  DescribeCodeSearchInfoV2Request,
  SuspendIntegrationTaskRequest,
  DownloadSqlResultResponse,
  CosTokenResponse,
  DescribeDsParentFolderTreeRequest,
  RuleDimStat,
  RerunScheduleInstancesRequest,
  DescribeTaskInstancesResponse,
  RenameResourcePathResponse,
  DescribeInstanceListRequest,
  InstanceLogInfo,
  ParameterInfoDsDto,
  DescribeTaskInstancesData,
  DescribeIntegrationStatisticsRecordsTrendResponse,
  DescribeTaskLatestRunTimeRequest,
  BatchCreateTaskVersionDsResponse,
  CodeMatchInfo,
  ExportProjectParamDsRequest,
  GeneralTaskParam,
  DescribeDiagnosticInfoByBaselineIdResponse,
  UserFileDTO,
  DescribeTaskInParamDsRequest,
  DescribeTableQualityDetailsRequest,
  CreateTaskFolderRequest,
  BatchCreateIntegrationTaskAlarmsRequest,
  QualityScore,
  KillScheduleInstancesRequest,
  DescribeDsNotSubmitTasksAndCanRunByWorkflowRequest,
  CheckCustomFunctionPremiseResponse,
  DescribeFunctionTypesResponse,
  BatchUpdateIntegrationTasksResponse,
  DescribeEventDetailRequest,
  DescribeRuleTemplateRequest,
  BatchCreateTaskVersionAsyncRequest,
  BatchModifyOpsOwnersResponse,
  DescribeTaskByCycleReportResponse,
  DescribeOpsMakePlanTasksRequest,
  TableInfo,
  CreateIntegrationTaskResponse,
  DescribeIntegrationTasksResponse,
  DeleteProjectUsersResponse,
  SchedulerTaskInstanceInfo,
  MakePlanOpsDto,
  ProjectBaseInfoOpsRequest,
  DescribeRuleGroupSubscriptionRequest,
  UpdateWorkflowInfoRequest,
  DescribeInLongAgentListResponse,
  Folder,
  TableQualityDetail,
  SubscribeWebHook,
  SubmitIntegrationTaskRequest,
  DeleteIntegrationNodeResponse,
  DescribeDataSourceInfoListRequest,
  DescribeProjectParamDsPageRequest,
  DescribeRuleGroupExecResultsByPageWithoutAuthResponse,
  DescribeOperateOpsTaskDatasourceResponse,
  AcquireLockResponse,
  RenewWorkflowOwnerDsRequest,
  CreateTaskFolderResponse,
  DeleteInLongAgentRequest,
  DescribeRuleTablesByPageRequest,
  DescribeEventConsumeTasksRequest,
  DescribeDataSourceInfoListResponse,
  InstanceStatisticInfo,
  MakeUpTasksNewRequest,
  DescribeAllParamDsRequest,
  DescribeOpsMakePlansRequest,
  RenameResourceResponse,
  BatchDeleteTasksDsResponse,
  DescribeWorkflowCanvasOpLogsRequest,
  CheckIntegrationTaskNameExistsResponse,
  DescribeRuleGroupExecResultsByPageRequest,
  EventCaseAuditLogOptDto,
  DescribeRulesByPageRequest,
  ImportWorkflowZipResponse,
  ImportWorkflowXmlRequest,
  DescribeFieldBasicInfoRequest,
  DescribeStreamTaskLogListResponse,
  DlcDataGovernPolicy,
  BaselineDetailResponse,
  DeleteIntegrationNodeRequest,
  DescribeAlarmEventsResponse,
  ModifyIntegrationNodeResponse,
  CheckTaskPriorityDsResponse,
  ScriptTypeInfo,
  DescribeProjectParamDsRequest,
  DescribeWorkflowCanvasOperatorsRequest,
  BatchCreateTaskVersionDTO,
  CreateTaskVersionDsRequest,
  ModifyDsFolderResponse,
  ModifyRuleTemplateRequest,
  DescribeCustomFunctionVersionListResponse,
  DescribeRuleTemplatesByPageResponse,
  InstanceLog,
  GetAdvanceRunParamsResponse,
  LatestTestRunInfoTask,
  DeleteLinkRequest,
  CreateWorkflowDsRequest,
  TaskTypeDsVO,
  DeleteDsEventPublisherResponse,
  UploadAdvanceRunParamsResponse,
  DescribeIntegrationTaskRequest,
  DescribeParentTaskResponse,
  GetResourceCosPathResponse,
  EventDto,
  WorkflowVersionInfo,
  SourceFieldInfo,
  ReplaceProjectParamVersionDsRequest,
  AnalyzeDependentTasksResponse,
  CopyWorkflowDsRequest,
  OperateResult,
  TriggerDsEventResponse,
  CreateTaskRequest,
  UpdateBatchTaskParameterRequest,
  DependencyTaskDTO,
  SearchColumnDocVO,
  TriggerDsEventRequest,
  UpdateBatchTaskParamsResponse,
  DescribeDependTaskListsResponse,
  DescribeTaskInstanceReportDetailResponse,
  WorkflowDsDTOPage,
  SubmitWorkflowRequest,
  ImportTableDataRequest,
  DescribeTaskLockStatusResponse,
  DescribeDsEventDetailRequest,
  RemoveWorkflowDsRequest,
  BatchKillIntegrationTaskInstancesRequest,
  ImportDsEventRequest,
  DeleteFilePathResponse,
  FailMessage,
  DescribeDependTasksDevDsResponse,
  BatchModifyOwnersNewResponse,
  CreateTaskOutParamDsResponse,
  DescribeDsEventPublisherResponse,
  ModifyTaskInfoResponse,
  DescribeColumnsMetaResponse,
  SearchConditionNew,
  DescribeProjectParamVersionDsResponse,
  ResumeIntegrationTaskRequest,
  ModifyApproveStatusRequest,
  DescribeRealTimeTaskInstanceNodeInfoRequest,
  DescribeDependencyWorkflowForProjectCloneResponse,
  DescribeWorkflowListByProjectIdRequest,
  TableMeta,
  DescribeAlarmEventsRequest,
  BooleanResponse,
  DeleteProjectParamDsRequest,
  RuleExecDateStat,
  EditBaselineResponse,
  DeleteDsEventResponse,
  DataSourceInfo,
  DescribeTaskDetailRequest,
  RegisterEventListenerRequest,
  CheckIntegrationNodeNameExistsResponse,
  DescribeFathersRequest,
  NewPathDTO,
  TaskScriptContent,
  DescribeDrInstancePageRequest,
  RuleGroupMonitor,
  CloneTaskModePageInfoInfo,
  DeleteUserFileDTO,
  RealTimeTaskInstanceNodeInfo,
  ModifyDimensionWeightResponse,
  DescribeTableScoreTrendResponse,
  DescribeExecutionLogRequest,
  CreateOrUpdateResourceResponse,
  ModifyTaskScriptRequest,
  RuleTemplatePage,
  CommitWorkflowRequest,
  DescribeTableScoreTrendRequest,
  DescribeTaskByStatusReportRequest,
  DescribeBaselineInstancesRequest,
  DescribeRealTimeTaskInstanceNodeInfoResponse,
  ClearRecycleTaskRequest,
  PathTreeNode,
  DescribeBatchOperateTaskRequest,
  DescribeTaskReportRequest,
  DescribeOfflineTaskTokenResponse,
  KillInstancesResponse,
  SetTaskAlarmNewRequest,
  DescribeEventCasesResponse,
  RerunScheduleInstancesResponse,
  DescribeOpsInstanceLogListRequest,
  TaskTypeOpsDto,
  DescribeDsEventPublisherRequest,
  CreateDataSourceResponse,
  DescribeRelatedInstancesRequest,
  DescribeDrInstanceScriptContentRequest,
  CreateLinkResponse,
  DescribeTaskScriptRequest,
  DescribeRuleHistoryByPageRequest,
  UnlockIntegrationTaskResponse,
  RenameTaskDsResponse,
  BatchOpsDTO,
  DeleteRecycleTaskRequest,
  GetBatchDetailErrorLogResponse,
  DescribeAlarmReceiverResponse,
  DescribeTaskByCycleResponse,
  DescribeDsKettleServerFolderTreeRequest,
  DlcExpiredSnapshotsInfo,
  DescribeWorkflowCanvasInfoResponse,
  AttributeItemDsVO,
  DescribeTaskParamDsResponse,
  BatchOperateResult,
  InLongTkeDetail,
  CreateLinkRequest,
  CloneObjectDTO,
  DescribeSchedulerInstanceStatusRequest,
  DescribeCrontabTopNDsResponse,
  RuleFieldConfig,
  DescribeInLongAgentTaskListResponse,
  DescribeImportableOfflineTaskRequest,
  TaskVersionInstance,
  DescribeBrowsingHistoriesRequest,
  DescribeDependOpsTasksResponse,
  DeleteRuleTemplateResponse,
  ExportFilesResponse,
  SqlExpression,
  DescribeTaskByCycleRequest,
  ImportProjectParamDsRequest,
  CommonId,
  DescribeRuleGroupsByPageResponse,
  TaskTypeExtParamDsVO,
  DescribeIntegrationStatisticsTaskStatusResponse,
  UploadResourceResponse,
  DescribeOpsMakePlanInstancesResponse,
  ProdSchedulerTask,
  DescribeInLongTkeClusterListRequest,
  CreateHiveTableByDDLRequest,
  DescribeBaselineByIdResponse,
  TaskTypeVO,
  DescribeEventListenerByTaskIdResponse,
  DescribeGlobalWorkflowDsResponse,
  DescribeOpsWorkflowsResponse,
  TaskDsDTONoRecur,
  DescribeTaskLockStatusRequest,
  DescribeCodeSearchCountRequest,
  CommitRuleGroupExecResultResponse,
  DescribeTaskBindVirtualTaskResponse,
  LogContent,
  CreateScriptsImportTasksDsRequest,
  BatchCreateVirtualTaskDsRequest,
  DescribeRuleGroupRequest,
  ModifyTaskNameRequest,
  RuleGroupExecResultPage,
  DeleteProjectUsersRequest,
  ModifyIntegrationTaskRequest,
  DescribeWorkflowExecuteByIdRequest,
  WorkflowExtOpsDtoPage,
  GetLatestAnalyseInfoResponse,
  WorkflowDsDTO,
  DescribeApproveListResponse,
  DescribeTaskInstanceRequest,
  ReleaseLockRequest,
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
   * 获取SQL执行结果
   */
  async DescribeSqlTaskResult(
    req: DescribeSqlTaskResultRequest,
    cb?: (error: string, rep: DescribeSqlTaskResultResponse) => void
  ): Promise<DescribeSqlTaskResultResponse> {
    return this.request("DescribeSqlTaskResult", req, cb)
  }

  /**
   * 资源管理-拉取资源目录树
   */
  async GetResourcePathTree(
    req: GetResourcePathTreeRequest,
    cb?: (error: string, rep: GetResourcePathTreeResponse) => void
  ): Promise<GetResourcePathTreeResponse> {
    return this.request("GetResourcePathTree", req, cb)
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
   * 分页查询质量监控组
   */
  async DescribeMonitorsByPage(
    req: DescribeMonitorsByPageRequest,
    cb?: (error: string, rep: DescribeMonitorsByPageResponse) => void
  ): Promise<DescribeMonitorsByPageResponse> {
    return this.request("DescribeMonitorsByPage", req, cb)
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
   * 异步批量创建任务版本
   */
  async BatchCreateTaskVersionAsync(
    req: BatchCreateTaskVersionAsyncRequest,
    cb?: (error: string, rep: BatchCreateTaskVersionAsyncResponse) => void
  ): Promise<BatchCreateTaskVersionAsyncResponse> {
    return this.request("BatchCreateTaskVersionAsync", req, cb)
  }

  /**
   * 查询回收站任务列表
   */
  async DescribeRecycleTaskList(
    req: DescribeRecycleTaskListRequest,
    cb?: (error: string, rep: DescribeRecycleTaskListResponse) => void
  ): Promise<DescribeRecycleTaskListResponse> {
    return this.request("DescribeRecycleTaskList", req, cb)
  }

  /**
   * 获取全局工作流信息，用于跨工作流节点拉取租户所有工作流列表
   */
  async DescribeGlobalWorkflowDs(
    req: DescribeGlobalWorkflowDsRequest,
    cb?: (error: string, rep: DescribeGlobalWorkflowDsResponse) => void
  ): Promise<DescribeGlobalWorkflowDsResponse> {
    return this.request("DescribeGlobalWorkflowDs", req, cb)
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
   * 查询集成节点
   */
  async DescribeIntegrationNode(
    req: DescribeIntegrationNodeRequest,
    cb?: (error: string, rep: DescribeIntegrationNodeResponse) => void
  ): Promise<DescribeIntegrationNodeResponse> {
    return this.request("DescribeIntegrationNode", req, cb)
  }

  /**
   * 下载SQL执行结果
   */
  async DownloadSqlResult(
    req: DownloadSqlResultRequest,
    cb?: (error: string, rep: DownloadSqlResultResponse) => void
  ): Promise<DownloadSqlResultResponse> {
    return this.request("DownloadSqlResult", req, cb)
  }

  /**
   * 批量修改资源组
   */
  async UpdateBatchTaskResourceGroup(
    req: UpdateBatchTaskResourceGroupRequest,
    cb?: (error: string, rep: UpdateBatchTaskResourceGroupResponse) => void
  ): Promise<UpdateBatchTaskResourceGroupResponse> {
    return this.request("UpdateBatchTaskResourceGroup", req, cb)
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
   * 查询事件监听者信息
   */
  async DescribeDsEventListener(
    req: DescribeDsEventListenerRequest,
    cb?: (error: string, rep: DescribeDsEventListenerResponse) => void
  ): Promise<DescribeDsEventListenerResponse> {
    return this.request("DescribeDsEventListener", req, cb)
  }

  /**
   * 获取协同编辑资源锁
   */
  async DescribeLock(
    req: DescribeLockRequest,
    cb?: (error: string, rep: DescribeLockResponse) => void
  ): Promise<DescribeLockResponse> {
    return this.request("DescribeLock", req, cb)
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
   * 批量提交etl测试运行任务
   */
  async SubmitBatchTestRun(
    req: SubmitBatchTestRunRequest,
    cb?: (error: string, rep: SubmitBatchTestRunResponse) => void
  ): Promise<SubmitBatchTestRunResponse> {
    return this.request("SubmitBatchTestRun", req, cb)
  }

  /**
   * 事件管理-导入事件
   */
  async ImportDsEvent(
    req: ImportDsEventRequest,
    cb?: (error: string, rep: ImportDsEventResponse) => void
  ): Promise<ImportDsEventResponse> {
    return this.request("ImportDsEvent", req, cb)
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
   * 更新任务Ds
   */
  async UpdateTaskDs(
    req: UpdateTaskDsRequest,
    cb?: (error: string, rep: UpdateTaskDsResponse) => void
  ): Promise<UpdateTaskDsResponse> {
    return this.request("UpdateTaskDs", req, cb)
  }

  /**
   * 编排空间-根据项目名称和任务名称模糊查询所有任务
   */
  async FindFuzzyTasksDs(
    req: FindFuzzyTasksDsRequest,
    cb?: (error: string, rep: FindFuzzyTasksDsResponse) => void
  ): Promise<FindFuzzyTasksDsResponse> {
    return this.request("FindFuzzyTasksDs", req, cb)
  }

  /**
   * 全局搜索根据条件搜索代码
   */
  async DescribeCodeSearchInfoV2(
    req: DescribeCodeSearchInfoV2Request,
    cb?: (error: string, rep: DescribeCodeSearchInfoV2Response) => void
  ): Promise<DescribeCodeSearchInfoV2Response> {
    return this.request("DescribeCodeSearchInfoV2", req, cb)
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
   * 获取指定任务产出登记列表
   */
  async DescribeTaskOutputRegistries(
    req: DescribeTaskOutputRegistriesRequest,
    cb?: (error: string, rep: DescribeTaskOutputRegistriesResponse) => void
  ): Promise<DescribeTaskOutputRegistriesResponse> {
    return this.request("DescribeTaskOutputRegistries", req, cb)
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
   * 查询项目全局参数
   */
  async DescribeProjectParamDs(
    req: DescribeProjectParamDsRequest,
    cb?: (error: string, rep: DescribeProjectParamDsResponse) => void
  ): Promise<DescribeProjectParamDsResponse> {
    return this.request("DescribeProjectParamDs", req, cb)
  }

  /**
   * 更新工作流
   */
  async RenewWorkflowDs(
    req: RenewWorkflowDsRequest,
    cb?: (error: string, rep: RenewWorkflowDsResponse) => void
  ): Promise<RenewWorkflowDsResponse> {
    return this.request("RenewWorkflowDs", req, cb)
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
   * 查询模板详情
   */
  async DescribeRuleTemplate(
    req: DescribeRuleTemplateRequest,
    cb?: (error: string, rep: DescribeRuleTemplateResponse) => void
  ): Promise<DescribeRuleTemplateResponse> {
    return this.request("DescribeRuleTemplate", req, cb)
  }

  /**
   * 注册事件发布者
   */
  async RegisterDsEventPublisher(
    req: RegisterDsEventPublisherRequest,
    cb?: (error: string, rep: RegisterDsEventPublisherResponse) => void
  ): Promise<RegisterDsEventPublisherResponse> {
    return this.request("RegisterDsEventPublisher", req, cb)
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
   * 获取数据同步任务类型
   */
  async DescribeEtlTaskType(
    req?: DescribeEtlTaskTypeRequest,
    cb?: (error: string, rep: DescribeEtlTaskTypeResponse) => void
  ): Promise<DescribeEtlTaskTypeResponse> {
    return this.request("DescribeEtlTaskType", req, cb)
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
设置任务告警，新建/更新告警信息（最新）
     */
  async SetTaskAlarmNew(
    req: SetTaskAlarmNewRequest,
    cb?: (error: string, rep: SetTaskAlarmNewResponse) => void
  ): Promise<SetTaskAlarmNewResponse> {
    return this.request("SetTaskAlarmNew", req, cb)
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
   * 工作流任务信息查询-项目克隆使用
   */
  async DescribeWorkflowTasksForProjectClone(
    req: DescribeWorkflowTasksForProjectCloneRequest,
    cb?: (error: string, rep: DescribeWorkflowTasksForProjectCloneResponse) => void
  ): Promise<DescribeWorkflowTasksForProjectCloneResponse> {
    return this.request("DescribeWorkflowTasksForProjectClone", req, cb)
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
   * 即席分析提交数据集成任务
   */
  async SubmitIntegrationTask(
    req: SubmitIntegrationTaskRequest,
    cb?: (error: string, rep: SubmitIntegrationTaskResponse) => void
  ): Promise<SubmitIntegrationTaskResponse> {
    return this.request("SubmitIntegrationTask", req, cb)
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
   * 更新采集器
   */
  async UpdateInLongAgent(
    req: UpdateInLongAgentRequest,
    cb?: (error: string, rep: UpdateInLongAgentResponse) => void
  ): Promise<UpdateInLongAgentResponse> {
    return this.request("UpdateInLongAgent", req, cb)
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
   * 上游依赖自动解析
   */
  async AnalyzeDependentTasks(
    req: AnalyzeDependentTasksRequest,
    cb?: (error: string, rep: AnalyzeDependentTasksResponse) => void
  ): Promise<AnalyzeDependentTasksResponse> {
    return this.request("AnalyzeDependentTasks", req, cb)
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
   * 创建基线
   */
  async CreateBaseline(
    req: CreateBaselineRequest,
    cb?: (error: string, rep: CreateBaselineResponse) => void
  ): Promise<CreateBaselineResponse> {
    return this.request("CreateBaseline", req, cb)
  }

  /**
   * 查询项目全局参数
   */
  async DescribeProjectParamDsPage(
    req: DescribeProjectParamDsPageRequest,
    cb?: (error: string, rep: DescribeProjectParamDsPageResponse) => void
  ): Promise<DescribeProjectParamDsPageResponse> {
    return this.request("DescribeProjectParamDsPage", req, cb)
  }

  /**
   * 对比任务版本
   */
  async CompareDsTaskVersionInfo(
    req: CompareDsTaskVersionInfoRequest,
    cb?: (error: string, rep: CompareDsTaskVersionInfoResponse) => void
  ): Promise<CompareDsTaskVersionInfoResponse> {
    return this.request("CompareDsTaskVersionInfo", req, cb)
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
   * 下载SQL执行结果
   */
  async DownloadNewSqlResult(
    req: DownloadNewSqlResultRequest,
    cb?: (error: string, rep: DownloadNewSqlResultResponse) => void
  ): Promise<DownloadNewSqlResultResponse> {
    return this.request("DownloadNewSqlResult", req, cb)
  }

  /**
   * 查询依赖工作流信息查询-项目克隆使用
   */
  async DescribeDependencyWorkflowForProjectClone(
    req: DescribeDependencyWorkflowForProjectCloneRequest,
    cb?: (error: string, rep: DescribeDependencyWorkflowForProjectCloneResponse) => void
  ): Promise<DescribeDependencyWorkflowForProjectCloneResponse> {
    return this.request("DescribeDependencyWorkflowForProjectClone", req, cb)
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
   * 批量修改责任人
   */
  async UpdateBatchTaskInCharge(
    req: UpdateBatchTaskInChargeRequest,
    cb?: (error: string, rep: UpdateBatchTaskInChargeResponse) => void
  ): Promise<UpdateBatchTaskInChargeResponse> {
    return this.request("UpdateBatchTaskInCharge", req, cb)
  }

  /**
   * 批量更新工作流下任务责任人
   */
  async RenewWorkflowOwnerDs(
    req: RenewWorkflowOwnerDsRequest,
    cb?: (error: string, rep: RenewWorkflowOwnerDsResponse) => void
  ): Promise<RenewWorkflowOwnerDsResponse> {
    return this.request("RenewWorkflowOwnerDs", req, cb)
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
   * 根据层级查找上/下游任务节点
   */
  async DescribeDependOpsTasks(
    req: DescribeDependOpsTasksRequest,
    cb?: (error: string, rep: DescribeDependOpsTasksResponse) => void
  ): Promise<DescribeDependOpsTasksResponse> {
    return this.request("DescribeDependOpsTasks", req, cb)
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
   * 删除事件监听者
   */
  async DeleteDsEventListener(
    req: DeleteDsEventListenerRequest,
    cb?: (error: string, rep: DeleteDsEventListenerResponse) => void
  ): Promise<DeleteDsEventListenerResponse> {
    return this.request("DeleteDsEventListener", req, cb)
  }

  /**
   * 获取工作流运行任务下游Ds
   */
  async GetRunSonListDs(
    req: GetRunSonListDsRequest,
    cb?: (error: string, rep: GetRunSonListDsResponse) => void
  ): Promise<GetRunSonListDsResponse> {
    return this.request("GetRunSonListDs", req, cb)
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
   * 即席分析终止任务接口
   */
  async StopAdhocTask(
    req: StopAdhocTaskRequest,
    cb?: (error: string, rep: StopAdhocTaskResponse) => void
  ): Promise<StopAdhocTaskResponse> {
    return this.request("StopAdhocTask", req, cb)
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
   * 查询表得分趋势
   */
  async DescribeTableScoreTrend(
    req: DescribeTableScoreTrendRequest,
    cb?: (error: string, rep: DescribeTableScoreTrendResponse) => void
  ): Promise<DescribeTableScoreTrendResponse> {
    return this.request("DescribeTableScoreTrend", req, cb)
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
   * 获取调试任务实例状态信息
   */
  async GetTestRunTaskInstancesStatusInfo(
    req: GetTestRunTaskInstancesStatusInfoRequest,
    cb?: (error: string, rep: GetTestRunTaskInstancesStatusInfoResponse) => void
  ): Promise<GetTestRunTaskInstancesStatusInfoResponse> {
    return this.request("GetTestRunTaskInstancesStatusInfo", req, cb)
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
   * 获取离线任务实例列表(新)
   */
  async GetOfflineDIInstanceList(
    req: GetOfflineDIInstanceListRequest,
    cb?: (error: string, rep: GetOfflineDIInstanceListResponse) => void
  ): Promise<GetOfflineDIInstanceListResponse> {
    return this.request("GetOfflineDIInstanceList", req, cb)
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
   * 查找全部的文件夹
   */
  async FindAllFolder(
    req: FindAllFolderRequest,
    cb?: (error: string, rep: FindAllFolderResponse) => void
  ): Promise<FindAllFolderResponse> {
    return this.request("FindAllFolder", req, cb)
  }

  /**
   * 批量导入文件
   */
  async ImportFiles(
    req: ImportFilesRequest,
    cb?: (error: string, rep: ImportFilesResponse) => void
  ): Promise<ImportFilesResponse> {
    return this.request("ImportFiles", req, cb)
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
   * 获取任务最新版本
   */
  async DescribeDsLatestTaskVersionInfo(
    req: DescribeDsLatestTaskVersionInfoRequest,
    cb?: (error: string, rep: DescribeDsLatestTaskVersionInfoResponse) => void
  ): Promise<DescribeDsLatestTaskVersionInfoResponse> {
    return this.request("DescribeDsLatestTaskVersionInfo", req, cb)
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
   * 数据质量概览页面规则运行情况接口
   */
  async DescribeRuleExecStat(
    req: DescribeRuleExecStatRequest,
    cb?: (error: string, rep: DescribeRuleExecStatResponse) => void
  ): Promise<DescribeRuleExecStatResponse> {
    return this.request("DescribeRuleExecStat", req, cb)
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
   * 资源管理-删除资源文件
   */
  async DeleteResourceFile(
    req: DeleteResourceFileRequest,
    cb?: (error: string, rep: DeleteResourceFileResponse) => void
  ): Promise<DeleteResourceFileResponse> {
    return this.request("DeleteResourceFile", req, cb)
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
   * 拉取dag实例
   */
  async DagInstances(
    req: DagInstancesRequest,
    cb?: (error: string, rep: DagInstancesResponse) => void
  ): Promise<DagInstancesResponse> {
    return this.request("DagInstances", req, cb)
  }

  /**
   * 事件管理-查询事件关联任务
   */
  async DescribeEventListenerTask(
    req: DescribeEventListenerTaskRequest,
    cb?: (error: string, rep: DescribeEventListenerTaskResponse) => void
  ): Promise<DescribeEventListenerTaskResponse> {
    return this.request("DescribeEventListenerTask", req, cb)
  }

  /**
   * 保存高级运行用户自定义参数
   */
  async UploadAdvanceRunParams(
    req: UploadAdvanceRunParamsRequest,
    cb?: (error: string, rep: UploadAdvanceRunParamsResponse) => void
  ): Promise<UploadAdvanceRunParamsResponse> {
    return this.request("UploadAdvanceRunParams", req, cb)
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
   * 实例状态周期增长趋势
   */
  async DescribeInstanceByCycleReport(
    req: DescribeInstanceByCycleReportRequest,
    cb?: (error: string, rep: DescribeInstanceByCycleReportResponse) => void
  ): Promise<DescribeInstanceByCycleReportResponse> {
    return this.request("DescribeInstanceByCycleReport", req, cb)
  }

  /**
   * 获取数据表导入状态
   */
  async DescribeDataTableImportProgress(
    req: DescribeDataTableImportProgressRequest,
    cb?: (error: string, rep: DescribeDataTableImportProgressResponse) => void
  ): Promise<DescribeDataTableImportProgressResponse> {
    return this.request("DescribeDataTableImportProgress", req, cb)
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
   * 查询基线实例DAG
   */
  async DescribeBaselineInstanceDag(
    req: DescribeBaselineInstanceDagRequest,
    cb?: (error: string, rep: DescribeBaselineInstanceDagResponse) => void
  ): Promise<DescribeBaselineInstanceDagResponse> {
    return this.request("DescribeBaselineInstanceDag", req, cb)
  }

  /**
   * 查询任务父依赖
   */
  async DescribeParentTask(
    req: DescribeParentTaskRequest,
    cb?: (error: string, rep: DescribeParentTaskResponse) => void
  ): Promise<DescribeParentTaskResponse> {
    return this.request("DescribeParentTask", req, cb)
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
   * 复制任务Ds
   */
  async CopyTaskDs(
    req: CopyTaskDsRequest,
    cb?: (error: string, rep: CopyTaskDsResponse) => void
  ): Promise<CopyTaskDsResponse> {
    return this.request("CopyTaskDs", req, cb)
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
   * 资源管理删除资源
   */
  async DeleteResource(
    req: DeleteResourceRequest,
    cb?: (error: string, rep: DeleteResourceResponse) => void
  ): Promise<DeleteResourceResponse> {
    return this.request("DeleteResource", req, cb)
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
   * 获取工作流调度信息
   */
  async DescribeWorkflowSchedulerInfoDs(
    req: DescribeWorkflowSchedulerInfoDsRequest,
    cb?: (error: string, rep: DescribeWorkflowSchedulerInfoDsResponse) => void
  ): Promise<DescribeWorkflowSchedulerInfoDsResponse> {
    return this.request("DescribeWorkflowSchedulerInfoDs", req, cb)
  }

  /**
   * 更新任务Ds
   */
  async ModifyTaskInfoDs(
    req: ModifyTaskInfoDsRequest,
    cb?: (error: string, rep: ModifyTaskInfoDsResponse) => void
  ): Promise<ModifyTaskInfoDsResponse> {
    return this.request("ModifyTaskInfoDs", req, cb)
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
   * 智能运维-批量删除任务
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
   * 根据条件分页查询补录计划
   */
  async DescribeOpsMakePlans(
    req: DescribeOpsMakePlansRequest,
    cb?: (error: string, rep: DescribeOpsMakePlansResponse) => void
  ): Promise<DescribeOpsMakePlansResponse> {
    return this.request("DescribeOpsMakePlans", req, cb)
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
   * 批量保存任务位置
   */
  async SavePositionsDs(
    req: SavePositionsDsRequest,
    cb?: (error: string, rep: SavePositionsDsResponse) => void
  ): Promise<SavePositionsDsResponse> {
    return this.request("SavePositionsDs", req, cb)
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
   * 查询任务具体详情Ds
   */
  async DescribeTaskDetailDs(
    req: DescribeTaskDetailDsRequest,
    cb?: (error: string, rep: DescribeTaskDetailDsResponse) => void
  ): Promise<DescribeTaskDetailDsResponse> {
    return this.request("DescribeTaskDetailDs", req, cb)
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
   * 锁定集成任务
   */
  async LockIntegrationTask(
    req: LockIntegrationTaskRequest,
    cb?: (error: string, rep: LockIntegrationTaskResponse) => void
  ): Promise<LockIntegrationTaskResponse> {
    return this.request("LockIntegrationTask", req, cb)
  }

  /**
   * RenameTaskDs
   */
  async RenameTaskDs(
    req: RenameTaskDsRequest,
    cb?: (error: string, rep: RenameTaskDsResponse) => void
  ): Promise<RenameTaskDsResponse> {
    return this.request("RenameTaskDs", req, cb)
  }

  /**
   * 【项目克隆任务模式】依赖任务信息查询
   */
  async DescribeDependencyTasksForProjectClone(
    req: DescribeDependencyTasksForProjectCloneRequest,
    cb?: (error: string, rep: DescribeDependencyTasksForProjectCloneResponse) => void
  ): Promise<DescribeDependencyTasksForProjectCloneResponse> {
    return this.request("DescribeDependencyTasksForProjectClone", req, cb)
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
   * 数据集成大屏概览
   */
  async DescribeIntegrationStatistics(
    req: DescribeIntegrationStatisticsRequest,
    cb?: (error: string, rep: DescribeIntegrationStatisticsResponse) => void
  ): Promise<DescribeIntegrationStatisticsResponse> {
    return this.request("DescribeIntegrationStatistics", req, cb)
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
   * 批量拉取下游依赖的任务列表Ds
   */
  async FindDependTaskListsDs(
    req: FindDependTaskListsDsRequest,
    cb?: (error: string, rep: FindDependTaskListsDsResponse) => void
  ): Promise<FindDependTaskListsDsResponse> {
    return this.request("FindDependTaskListsDs", req, cb)
  }

  /**
   * 查询可导入的集成任务
   */
  async DescribeImportableOfflineTask(
    req: DescribeImportableOfflineTaskRequest,
    cb?: (error: string, rep: DescribeImportableOfflineTaskResponse) => void
  ): Promise<DescribeImportableOfflineTaskResponse> {
    return this.request("DescribeImportableOfflineTask", req, cb)
  }

  /**
   * 停止试运行任务（多个）
   */
  async KillTasksTestRun(
    req: KillTasksTestRunRequest,
    cb?: (error: string, rep: KillTasksTestRunResponse) => void
  ): Promise<KillTasksTestRunResponse> {
    return this.request("KillTasksTestRun", req, cb)
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
   * 检查规则名称是否重复
   */
  async CheckDuplicateRuleName(
    req: CheckDuplicateRuleNameRequest,
    cb?: (error: string, rep: CheckDuplicateRuleNameResponse) => void
  ): Promise<CheckDuplicateRuleNameResponse> {
    return this.request("CheckDuplicateRuleName", req, cb)
  }

  /**
   * 删除事件发布者
   */
  async DeleteDsEventPublisher(
    req: DeleteDsEventPublisherRequest,
    cb?: (error: string, rep: DeleteDsEventPublisherResponse) => void
  ): Promise<DeleteDsEventPublisherResponse> {
    return this.request("DeleteDsEventPublisher", req, cb)
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
   * 获取工作流画布信息
   */
  async DescribeProdWorkflowCanvasInfoDs(
    req: DescribeProdWorkflowCanvasInfoDsRequest,
    cb?: (error: string, rep: DescribeProdWorkflowCanvasInfoDsResponse) => void
  ): Promise<DescribeProdWorkflowCanvasInfoDsResponse> {
    return this.request("DescribeProdWorkflowCanvasInfoDs", req, cb)
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
   * 终止etl测试运行任务
   */
  async StopTestRun(
    req: StopTestRunRequest,
    cb?: (error: string, rep: StopTestRunResponse) => void
  ): Promise<StopTestRunResponse> {
    return this.request("StopTestRun", req, cb)
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
   * 建hive表
   */
  async CreateHiveTable(
    req: CreateHiveTableRequest,
    cb?: (error: string, rep: CreateHiveTableResponse) => void
  ): Promise<CreateHiveTableResponse> {
    return this.request("CreateHiveTable", req, cb)
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
   * 获取批量操作错误日志
   */
  async GetBatchDetailErrorLog(
    req: GetBatchDetailErrorLogRequest,
    cb?: (error: string, rep: GetBatchDetailErrorLogResponse) => void
  ): Promise<GetBatchDetailErrorLogResponse> {
    return this.request("GetBatchDetailErrorLog", req, cb)
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
   * 工作流版本提交
   */
  async CommitWorkflow(
    req: CommitWorkflowRequest,
    cb?: (error: string, rep: CommitWorkflowResponse) => void
  ): Promise<CommitWorkflowResponse> {
    return this.request("CommitWorkflow", req, cb)
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
   * 工作流导入（ZIP）
   */
  async ImportWorkflowZip(
    req: ImportWorkflowZipRequest,
    cb?: (error: string, rep: ImportWorkflowZipResponse) => void
  ): Promise<ImportWorkflowZipResponse> {
    return this.request("ImportWorkflowZip", req, cb)
  }

  /**
   * 重命名文件
   */
  async RenameFile(
    req: RenameFileRequest,
    cb?: (error: string, rep: RenameFileResponse) => void
  ): Promise<RenameFileResponse> {
    return this.request("RenameFile", req, cb)
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
   * 离线任务实例运行日志列表
   */
  async DescribeInstanceLogList(
    req: DescribeInstanceLogListRequest,
    cb?: (error: string, rep: DescribeInstanceLogListResponse) => void
  ): Promise<DescribeInstanceLogListResponse> {
    return this.request("DescribeInstanceLogList", req, cb)
  }

  /**
   * 创建任务版本
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
   * 设置任务输入参数
   */
  async CreateTaskInParamDs(
    req: CreateTaskInParamDsRequest,
    cb?: (error: string, rep: CreateTaskInParamDsResponse) => void
  ): Promise<CreateTaskInParamDsResponse> {
    return this.request("CreateTaskInParamDs", req, cb)
  }

  /**
   * 基于任务类型获取任务信息Ds
   */
  async DescribeInfoTransByTypeIdDs(
    req: DescribeInfoTransByTypeIdDsRequest,
    cb?: (error: string, rep: DescribeInfoTransByTypeIdDsResponse) => void
  ): Promise<DescribeInfoTransByTypeIdDsResponse> {
    return this.request("DescribeInfoTransByTypeIdDs", req, cb)
  }

  /**
   * 获取脚本导出任务类型
   */
  async DescribeScriptsImportTaskType(
    req: DescribeScriptsImportTaskTypeRequest,
    cb?: (error: string, rep: DescribeScriptsImportTaskTypeResponse) => void
  ): Promise<DescribeScriptsImportTaskTypeResponse> {
    return this.request("DescribeScriptsImportTaskType", req, cb)
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
   * 查询基线诊断信息
   */
  async DescribeDiagnosticInfoByBaselineId(
    req: DescribeDiagnosticInfoByBaselineIdRequest,
    cb?: (error: string, rep: DescribeDiagnosticInfoByBaselineIdResponse) => void
  ): Promise<DescribeDiagnosticInfoByBaselineIdResponse> {
    return this.request("DescribeDiagnosticInfoByBaselineId", req, cb)
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
   * 抢占锁定集成任务
   */
  async RobAndLockIntegrationTask(
    req: RobAndLockIntegrationTaskRequest,
    cb?: (error: string, rep: RobAndLockIntegrationTaskResponse) => void
  ): Promise<RobAndLockIntegrationTaskResponse> {
    return this.request("RobAndLockIntegrationTask", req, cb)
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
   * 协同编辑资源锁心跳
   */
  async HeartBeat(
    req: HeartBeatRequest,
    cb?: (error: string, rep: HeartBeatResponse) => void
  ): Promise<HeartBeatResponse> {
    return this.request("HeartBeat", req, cb)
  }

  /**
   * 获取数据开发任务类型
   */
  async DescribeDataDevelopTaskType(
    req: DescribeDataDevelopTaskTypeRequest,
    cb?: (error: string, rep: DescribeDataDevelopTaskTypeResponse) => void
  ): Promise<DescribeDataDevelopTaskTypeResponse> {
    return this.request("DescribeDataDevelopTaskType", req, cb)
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
   * 删除采集器
   */
  async DeleteInLongAgent(
    req: DeleteInLongAgentRequest,
    cb?: (error: string, rep: DeleteInLongAgentResponse) => void
  ): Promise<DeleteInLongAgentResponse> {
    return this.request("DeleteInLongAgent", req, cb)
  }

  /**
   * 资源管理-删除资源目录
   */
  async DeleteResourcePath(
    req: DeleteResourcePathRequest,
    cb?: (error: string, rep: DeleteResourcePathResponse) => void
  ): Promise<DeleteResourcePathResponse> {
    return this.request("DeleteResourcePath", req, cb)
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
   * 无
   */
  async SubmitTaskTestRun(
    req: SubmitTaskTestRunRequest,
    cb?: (error: string, rep: SubmitTaskTestRunResponse) => void
  ): Promise<SubmitTaskTestRunResponse> {
    return this.request("SubmitTaskTestRun", req, cb)
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
   * 质量报告-查询质量评分
   */
  async DescribeDimensionScore(
    req: DescribeDimensionScoreRequest,
    cb?: (error: string, rep: DescribeDimensionScoreResponse) => void
  ): Promise<DescribeDimensionScoreResponse> {
    return this.request("DescribeDimensionScore", req, cb)
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
   * 运维大屏-实例运行时长排行
   */
  async DescribeSchedulerRunTimeInstanceCntByStatus(
    req: DescribeSchedulerRunTimeInstanceCntByStatusRequest,
    cb?: (error: string, rep: DescribeSchedulerRunTimeInstanceCntByStatusResponse) => void
  ): Promise<DescribeSchedulerRunTimeInstanceCntByStatusResponse> {
    return this.request("DescribeSchedulerRunTimeInstanceCntByStatus", req, cb)
  }

  /**
   * 查询工作流全局参数
   */
  async DescribeWorkflowParamDs(
    req: DescribeWorkflowParamDsRequest,
    cb?: (error: string, rep: DescribeWorkflowParamDsResponse) => void
  ): Promise<DescribeWorkflowParamDsResponse> {
    return this.request("DescribeWorkflowParamDs", req, cb)
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
   * 资源管理-重命名资源目录
   */
  async RenameResourcePath(
    req: RenameResourcePathRequest,
    cb?: (error: string, rep: RenameResourcePathResponse) => void
  ): Promise<RenameResourcePathResponse> {
    return this.request("RenameResourcePath", req, cb)
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
   * 查询事件发布者列表
   */
  async DescribeDsEventPublisherList(
    req: DescribeDsEventPublisherListRequest,
    cb?: (error: string, rep: DescribeDsEventPublisherListResponse) => void
  ): Promise<DescribeDsEventPublisherListResponse> {
    return this.request("DescribeDsEventPublisherList", req, cb)
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
   * 批量更新调度周期设置
   */
  async UpdateBatchTaskSchedule(
    req: UpdateBatchTaskScheduleRequest,
    cb?: (error: string, rep: UpdateBatchTaskScheduleResponse) => void
  ): Promise<UpdateBatchTaskScheduleResponse> {
    return this.request("UpdateBatchTaskSchedule", req, cb)
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
   * 查询子任务信息Ds
   */
  async DescribeChildrenDs(
    req: DescribeChildrenDsRequest,
    cb?: (error: string, rep: DescribeChildrenDsResponse) => void
  ): Promise<DescribeChildrenDsResponse> {
    return this.request("DescribeChildrenDs", req, cb)
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
   * 获取实例列表
   */
  async DescribeInstanceList(
    req: DescribeInstanceListRequest,
    cb?: (error: string, rep: DescribeInstanceListResponse) => void
  ): Promise<DescribeInstanceListResponse> {
    return this.request("DescribeInstanceList", req, cb)
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
   * 获取实例运行日志
   */
  async DescribeInstanceLog(
    req: DescribeInstanceLogRequest,
    cb?: (error: string, rep: DescribeInstanceLogResponse) => void
  ): Promise<DescribeInstanceLogResponse> {
    return this.request("DescribeInstanceLog", req, cb)
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
   * 任务运维列表组合条件查询
   */
  async DescribeOperateTasks(
    req: DescribeOperateTasksRequest,
    cb?: (error: string, rep: DescribeOperateTasksResponse) => void
  ): Promise<DescribeOperateTasksResponse> {
    return this.request("DescribeOperateTasks", req, cb)
  }

  /**
   * 查询开发空间版本列表
   */
  async DescribeFileVersions(
    req: DescribeFileVersionsRequest,
    cb?: (error: string, rep: DescribeFileVersionsResponse) => void
  ): Promise<DescribeFileVersionsResponse> {
    return this.request("DescribeFileVersions", req, cb)
  }

  /**
   * 查询父任务数据源信息Ds
   */
  async DescribeFatherDatasourceInfoDs(
    req: DescribeFatherDatasourceInfoDsRequest,
    cb?: (error: string, rep: DescribeFatherDatasourceInfoDsResponse) => void
  ): Promise<DescribeFatherDatasourceInfoDsResponse> {
    return this.request("DescribeFatherDatasourceInfoDs", req, cb)
  }

  /**
   * 查询最近5条代码搜索审计日志
   */
  async DescribeCodeSearchAuditInfo(
    req: DescribeCodeSearchAuditInfoRequest,
    cb?: (error: string, rep: DescribeCodeSearchAuditInfoResponse) => void
  ): Promise<DescribeCodeSearchAuditInfoResponse> {
    return this.request("DescribeCodeSearchAuditInfo", req, cb)
  }

  /**
   * 根据任务ID获取任务监听事件
   */
  async DescribeEventListenerByTaskId(
    req: DescribeEventListenerByTaskIdRequest,
    cb?: (error: string, rep: DescribeEventListenerByTaskIdResponse) => void
  ): Promise<DescribeEventListenerByTaskIdResponse> {
    return this.request("DescribeEventListenerByTaskId", req, cb)
  }

  /**
   * 批量创建登记项
   */
  async CreateTaskOutputRegistries(
    req: CreateTaskOutputRegistriesRequest,
    cb?: (error: string, rep: CreateTaskOutputRegistriesResponse) => void
  ): Promise<CreateTaskOutputRegistriesResponse> {
    return this.request("CreateTaskOutputRegistries", req, cb)
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
   * 编辑基线
   */
  async EditBaseline(
    req: EditBaselineRequest,
    cb?: (error: string, rep: EditBaselineResponse) => void
  ): Promise<EditBaselineResponse> {
    return this.request("EditBaseline", req, cb)
  }

  /**
   * 删除任务输入参数
   */
  async DeleteTaskInParamDs(
    req: DeleteTaskInParamDsRequest,
    cb?: (error: string, rep: DeleteTaskInParamDsResponse) => void
  ): Promise<DeleteTaskInParamDsResponse> {
    return this.request("DeleteTaskInParamDs", req, cb)
  }

  /**
   * 代码搜索结果的统计信息
   */
  async DescribeCodeSearchCount(
    req: DescribeCodeSearchCountRequest,
    cb?: (error: string, rep: DescribeCodeSearchCountResponse) => void
  ): Promise<DescribeCodeSearchCountResponse> {
    return this.request("DescribeCodeSearchCount", req, cb)
  }

  /**
   * 导入项目参数
   */
  async ImportProjectParamDs(
    req: ImportProjectParamDsRequest,
    cb?: (error: string, rep: ImportProjectParamDsResponse) => void
  ): Promise<ImportProjectParamDsResponse> {
    return this.request("ImportProjectParamDs", req, cb)
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
   * 资源管理-上传资源
   */
  async UploadResource(
    req: UploadResourceRequest,
    cb?: (error: string, rep: UploadResourceResponse) => void
  ): Promise<UploadResourceResponse> {
    return this.request("UploadResource", req, cb)
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
   * 获取代码搜索最近n条关键字搜索信息
   */
  async DescribeCodeSearchAuditInfoV2(
    req: DescribeCodeSearchAuditInfoV2Request,
    cb?: (error: string, rep: DescribeCodeSearchAuditInfoV2Response) => void
  ): Promise<DescribeCodeSearchAuditInfoV2Response> {
    return this.request("DescribeCodeSearchAuditInfoV2", req, cb)
  }

  /**
   * 库表管理-新建数据表-csv预览，最多支持500行预览
   */
  async PreviewDataTableCsv(
    req: PreviewDataTableCsvRequest,
    cb?: (error: string, rep: PreviewDataTableCsvResponse) => void
  ): Promise<PreviewDataTableCsvResponse> {
    return this.request("PreviewDataTableCsv", req, cb)
  }

  /**
   * 开发空间-拉取完整目录树
   */
  async DescribePathTrees(
    req: DescribePathTreesRequest,
    cb?: (error: string, rep: DescribePathTreesResponse) => void
  ): Promise<DescribePathTreesResponse> {
    return this.request("DescribePathTrees", req, cb)
  }

  /**
   * 导出工作流(XML格式)，导出的文件存储在 cos 中(私有化 csp)，请自行下载，相关的下载信息在返回值中可以获取到
   */
  async ExportWorkflowXml(
    req: ExportWorkflowXmlRequest,
    cb?: (error: string, rep: ExportWorkflowXmlResponse) => void
  ): Promise<ExportWorkflowXmlResponse> {
    return this.request("ExportWorkflowXml", req, cb)
  }

  /**
   * 通过任务ID删除所有事件
   */
  async DeleteEventListenerByTaskId(
    req: DeleteEventListenerByTaskIdRequest,
    cb?: (error: string, rep: DeleteEventListenerByTaskIdResponse) => void
  ): Promise<DeleteEventListenerByTaskIdResponse> {
    return this.request("DeleteEventListenerByTaskId", req, cb)
  }

  /**
   * 创建任务Ds
   */
  async CreateTaskDs(
    req: CreateTaskDsRequest,
    cb?: (error: string, rep: CreateTaskDsResponse) => void
  ): Promise<CreateTaskDsResponse> {
    return this.request("CreateTaskDs", req, cb)
  }

  /**
   * 更新事件监听
   */
  async UpdateEventListener(
    req: UpdateEventListenerRequest,
    cb?: (error: string, rep: UpdateEventListenerResponse) => void
  ): Promise<UpdateEventListenerResponse> {
    return this.request("UpdateEventListener", req, cb)
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
   * 事件管理-查询事件详情
   */
  async DescribeDsEventDetail(
    req: DescribeDsEventDetailRequest,
    cb?: (error: string, rep: DescribeDsEventDetailResponse) => void
  ): Promise<DescribeDsEventDetailResponse> {
    return this.request("DescribeDsEventDetail", req, cb)
  }

  /**
   * 获取任务绑定的虚拟任务
   */
  async DescribeTaskBindVirtualTask(
    req: DescribeTaskBindVirtualTaskRequest,
    cb?: (error: string, rep: DescribeTaskBindVirtualTaskResponse) => void
  ): Promise<DescribeTaskBindVirtualTaskResponse> {
    return this.request("DescribeTaskBindVirtualTask", req, cb)
  }

  /**
   * 拉取项目参数版本详情
   */
  async DescribeProjectParamVersionInfoDs(
    req: DescribeProjectParamVersionInfoDsRequest,
    cb?: (error: string, rep: DescribeProjectParamVersionInfoDsResponse) => void
  ): Promise<DescribeProjectParamVersionInfoDsResponse> {
    return this.request("DescribeProjectParamVersionInfoDs", req, cb)
  }

  /**
   * 获取 crontab topN 个数据时间周期
   */
  async DescribeCrontabTopNDs(
    req: DescribeCrontabTopNDsRequest,
    cb?: (error: string, rep: DescribeCrontabTopNDsResponse) => void
  ): Promise<DescribeCrontabTopNDsResponse> {
    return this.request("DescribeCrontabTopNDs", req, cb)
  }

  /**
   * 查询事件发布者信息
   */
  async DescribeDsEventPublisher(
    req: DescribeDsEventPublisherRequest,
    cb?: (error: string, rep: DescribeDsEventPublisherResponse) => void
  ): Promise<DescribeDsEventPublisherResponse> {
    return this.request("DescribeDsEventPublisher", req, cb)
  }

  /**
   * 删除任务连接
   */
  async DeleteLink(
    req: DeleteLinkRequest,
    cb?: (error: string, rep: DeleteLinkResponse) => void
  ): Promise<DeleteLinkResponse> {
    return this.request("DeleteLink", req, cb)
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
   * 批量删除集成任务
   */
  async BatchDeleteIntegrationTasks(
    req: BatchDeleteIntegrationTasksRequest,
    cb?: (error: string, rep: BatchDeleteIntegrationTasksResponse) => void
  ): Promise<BatchDeleteIntegrationTasksResponse> {
    return this.request("BatchDeleteIntegrationTasks", req, cb)
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
   * 智能运维-事件列表-所属任务/基线过滤列表
   */
  async DescribeBelongTo(
    req: DescribeBelongToRequest,
    cb?: (error: string, rep: DescribeBelongToResponse) => void
  ): Promise<DescribeBelongToResponse> {
    return this.request("DescribeBelongTo", req, cb)
  }

  /**
   * 根据脚本类型获取任务类型
   */
  async DescribeTaskTypeByScriptType(
    req: DescribeTaskTypeByScriptTypeRequest,
    cb?: (error: string, rep: DescribeTaskTypeByScriptTypeResponse) => void
  ): Promise<DescribeTaskTypeByScriptTypeResponse> {
    return this.request("DescribeTaskTypeByScriptType", req, cb)
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
   * 清空回收站任务
   */
  async ClearRecycleTask(
    req: ClearRecycleTaskRequest,
    cb?: (error: string, rep: ClearRecycleTaskResponse) => void
  ): Promise<ClearRecycleTaskResponse> {
    return this.request("ClearRecycleTask", req, cb)
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
   * 修改任务告警规则
   */
  async ModifyTaskAlarmRegular(
    req: ModifyTaskAlarmRegularRequest,
    cb?: (error: string, rep: ModifyTaskAlarmRegularResponse) => void
  ): Promise<ModifyTaskAlarmRegularResponse> {
    return this.request("ModifyTaskAlarmRegular", req, cb)
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
   * 删除任务输出参数
   */
  async DeleteTaskOutParamDs(
    req: DeleteTaskOutParamDsRequest,
    cb?: (error: string, rep: DeleteTaskOutParamDsResponse) => void
  ): Promise<DeleteTaskOutParamDsResponse> {
    return this.request("DeleteTaskOutParamDs", req, cb)
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
   * 根据任务id获取下游依赖任务列表
   */
  async DescribeDependOpsTaskList(
    req: DescribeDependOpsTaskListRequest,
    cb?: (error: string, rep: DescribeDependOpsTaskListResponse) => void
  ): Promise<DescribeDependOpsTaskListResponse> {
    return this.request("DescribeDependOpsTaskList", req, cb)
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
   * 开发空间获取最近一次测试运行记录信息
   */
  async GetLatestAnalyseInfo(
    req: GetLatestAnalyseInfoRequest,
    cb?: (error: string, rep: GetLatestAnalyseInfoResponse) => void
  ): Promise<GetLatestAnalyseInfoResponse> {
    return this.request("GetLatestAnalyseInfo", req, cb)
  }

  /**
   * 删除事件
   */
  async DeleteDsEvent(
    req: DeleteDsEventRequest,
    cb?: (error: string, rep: DeleteDsEventResponse) => void
  ): Promise<DeleteDsEventResponse> {
    return this.request("DeleteDsEvent", req, cb)
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
   * 查询数据库列表
   */
  async DescribeDatabaseMetas(
    req: DescribeDatabaseMetasRequest,
    cb?: (error: string, rep: DescribeDatabaseMetasResponse) => void
  ): Promise<DescribeDatabaseMetasResponse> {
    return this.request("DescribeDatabaseMetas", req, cb)
  }

  /**
   * 即席分析提交SHELL任务
   */
  async SubmitShellTask(
    req: SubmitShellTaskRequest,
    cb?: (error: string, rep: SubmitShellTaskResponse) => void
  ): Promise<SubmitShellTaskResponse> {
    return this.request("SubmitShellTask", req, cb)
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
   * 即席分析提交SQL任务
   */
  async SubmitSqlTask(
    req: SubmitSqlTaskRequest,
    cb?: (error: string, rep: SubmitSqlTaskResponse) => void
  ): Promise<SubmitSqlTaskResponse> {
    return this.request("SubmitSqlTask", req, cb)
  }

  /**
   * 回收站脚本文件目录树
   */
  async GetPathTrees(
    req: GetPathTreesRequest,
    cb?: (error: string, rep: GetPathTreesResponse) => void
  ): Promise<GetPathTreesResponse> {
    return this.request("GetPathTrees", req, cb)
  }

  /**
   * 通过指定基准时间，计算出最近一次任务基于该基准时间的运行时间
   */
  async DescribeTaskLatestRunTime(
    req: DescribeTaskLatestRunTimeRequest,
    cb?: (error: string, rep: DescribeTaskLatestRunTimeResponse) => void
  ): Promise<DescribeTaskLatestRunTimeResponse> {
    return this.request("DescribeTaskLatestRunTime", req, cb)
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
   * 查询函数版本列表
   */
  async DescribeCustomFunctionVersionList(
    req: DescribeCustomFunctionVersionListRequest,
    cb?: (error: string, rep: DescribeCustomFunctionVersionListResponse) => void
  ): Promise<DescribeCustomFunctionVersionListResponse> {
    return this.request("DescribeCustomFunctionVersionList", req, cb)
  }

  /**
   * 创建用户数据开发浏览历史
   */
  async CreateBrowsingHistory(
    req: CreateBrowsingHistoryRequest,
    cb?: (error: string, rep: CreateBrowsingHistoryResponse) => void
  ): Promise<CreateBrowsingHistoryResponse> {
    return this.request("CreateBrowsingHistory", req, cb)
  }

  /**
   * 批量更新调度参数
   */
  async UpdateBatchTaskParams(
    req: UpdateBatchTaskParamsRequest,
    cb?: (error: string, rep: UpdateBatchTaskParamsResponse) => void
  ): Promise<UpdateBatchTaskParamsResponse> {
    return this.request("UpdateBatchTaskParams", req, cb)
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
   * 分页查询试运行实例列表
   */
  async DescribeDrInstancePage(
    req: DescribeDrInstancePageRequest,
    cb?: (error: string, rep: DescribeDrInstancePageResponse) => void
  ): Promise<DescribeDrInstancePageResponse> {
    return this.request("DescribeDrInstancePage", req, cb)
  }

  /**
   * 编排空间获取最近一次测试运行记录信息
   */
  async GetLatestTestRunInfo(
    req: GetLatestTestRunInfoRequest,
    cb?: (error: string, rep: GetLatestTestRunInfoResponse) => void
  ): Promise<GetLatestTestRunInfoResponse> {
    return this.request("GetLatestTestRunInfo", req, cb)
  }

  /**
   * 查询任务输出参数
   */
  async DescribeTaskOutParamDs(
    req: DescribeTaskOutParamDsRequest,
    cb?: (error: string, rep: DescribeTaskOutParamDsResponse) => void
  ): Promise<DescribeTaskOutParamDsResponse> {
    return this.request("DescribeTaskOutParamDs", req, cb)
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
   * 开发空间-获取数据开发脚本信息
   */
  async GetFileInfo(
    req: GetFileInfoRequest,
    cb?: (error: string, rep: GetFileInfoResponse) => void
  ): Promise<GetFileInfoResponse> {
    return this.request("GetFileInfo", req, cb)
  }

  /**
   * 编排空间导入开发空间脚本。
   */
  async CreateScriptsImportTasksDs(
    req: CreateScriptsImportTasksDsRequest,
    cb?: (error: string, rep: CreateScriptsImportTasksDsResponse) => void
  ): Promise<CreateScriptsImportTasksDsResponse> {
    return this.request("CreateScriptsImportTasksDs", req, cb)
  }

  /**
   * 批量修改参数
   */
  async UpdateBatchTaskParameter(
    req: UpdateBatchTaskParameterRequest,
    cb?: (error: string, rep: UpdateBatchTaskParameterResponse) => void
  ): Promise<UpdateBatchTaskParameterResponse> {
    return this.request("UpdateBatchTaskParameter", req, cb)
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
   * 全局搜索查询文件或任务详情
   */
  async DescribeCodeDetailV2(
    req: DescribeCodeDetailV2Request,
    cb?: (error: string, rep: DescribeCodeDetailV2Response) => void
  ): Promise<DescribeCodeDetailV2Response> {
    return this.request("DescribeCodeDetailV2", req, cb)
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
   * 获取资源管理目录树
   */
  async DescribeResourceManagePathTrees(
    req: DescribeResourceManagePathTreesRequest,
    cb?: (error: string, rep: DescribeResourceManagePathTreesResponse) => void
  ): Promise<DescribeResourceManagePathTreesResponse> {
    return this.request("DescribeResourceManagePathTrees", req, cb)
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
   * 下载日志文件，返回日志URL
   */
  async DescribeInstanceLogFile(
    req: DescribeInstanceLogFileRequest,
    cb?: (error: string, rep: DescribeInstanceLogFileResponse) => void
  ): Promise<DescribeInstanceLogFileResponse> {
    return this.request("DescribeInstanceLogFile", req, cb)
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
   * 获取高级运行参数
   */
  async GetAdvanceRunParams(
    req: GetAdvanceRunParamsRequest,
    cb?: (error: string, rep: GetAdvanceRunParamsResponse) => void
  ): Promise<GetAdvanceRunParamsResponse> {
    return this.request("GetAdvanceRunParams", req, cb)
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
   * 解锁集成任务
   */
  async UnlockIntegrationTask(
    req: UnlockIntegrationTaskRequest,
    cb?: (error: string, rep: UnlockIntegrationTaskResponse) => void
  ): Promise<UnlockIntegrationTaskResponse> {
    return this.request("UnlockIntegrationTask", req, cb)
  }

  /**
   * 文件上传需要先获取文件上传所需要的秘钥，文件位置等信息，因为文件名字可能会出现冲突，所以需要传入将要写入的文件，如果检测到文件名冲突，WeData 后端会在文件名上加入随机字符串。
   */
  async UploadFilesDs(
    req: UploadFilesDsRequest,
    cb?: (error: string, rep: UploadFilesDsResponse) => void
  ): Promise<UploadFilesDsResponse> {
    return this.request("UploadFilesDs", req, cb)
  }

  /**
   * 查询用户数据开发浏览历史
   */
  async DescribeBrowsingHistories(
    req: DescribeBrowsingHistoriesRequest,
    cb?: (error: string, rep: DescribeBrowsingHistoriesResponse) => void
  ): Promise<DescribeBrowsingHistoriesResponse> {
    return this.request("DescribeBrowsingHistories", req, cb)
  }

  /**
   * 批量创建虚拟任务, 用于新建跨工作流任务场景中新增跨工作流任务操作
   */
  async BatchCreateVirtualTaskDs(
    req: BatchCreateVirtualTaskDsRequest,
    cb?: (error: string, rep: BatchCreateVirtualTaskDsResponse) => void
  ): Promise<BatchCreateVirtualTaskDsResponse> {
    return this.request("BatchCreateVirtualTaskDs", req, cb)
  }

  /**
   * 查询事件监听者列表
   */
  async DescribeDsEventListenerList(
    req: DescribeDsEventListenerListRequest,
    cb?: (error: string, rep: DescribeDsEventListenerListResponse) => void
  ): Promise<DescribeDsEventListenerListResponse> {
    return this.request("DescribeDsEventListenerList", req, cb)
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
   * 查看事件实例的消费任务
   */
  async DescribeEventConsumeTasks(
    req: DescribeEventConsumeTasksRequest,
    cb?: (error: string, rep: DescribeEventConsumeTasksResponse) => void
  ): Promise<DescribeEventConsumeTasksResponse> {
    return this.request("DescribeEventConsumeTasks", req, cb)
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
   * 批量更新任务Ds
   */
  async BatchUpdateTasksDs(
    req: BatchUpdateTasksDsRequest,
    cb?: (error: string, rep: BatchUpdateTasksDsResponse) => void
  ): Promise<BatchUpdateTasksDsResponse> {
    return this.request("BatchUpdateTasksDs", req, cb)
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
   * 资源管理-重命名资源文件
   */
  async RenameResourceFile(
    req: RenameResourceFileRequest,
    cb?: (error: string, rep: RenameResourceFileResponse) => void
  ): Promise<RenameResourceFileResponse> {
    return this.request("RenameResourceFile", req, cb)
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
   * 生成建hive表的sql
   */
  async GenHiveTableDDLSql(
    req: GenHiveTableDDLSqlRequest,
    cb?: (error: string, rep: GenHiveTableDDLSqlResponse) => void
  ): Promise<GenHiveTableDDLSqlResponse> {
    return this.request("GenHiveTableDDLSql", req, cb)
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
   * 保存用户自定义函数
   */
  async SaveCustomFunction(
    req: SaveCustomFunctionRequest,
    cb?: (error: string, rep: SaveCustomFunctionResponse) => void
  ): Promise<SaveCustomFunctionResponse> {
    return this.request("SaveCustomFunction", req, cb)
  }

  /**
     * <p style="color:red;">[该接口为 ds 中开发]</p>
更新工作流（包括工作流基本信息与工作流参数）
     */
  async UpdateWorkflowInfo(
    req: UpdateWorkflowInfoRequest,
    cb?: (error: string, rep: UpdateWorkflowInfoResponse) => void
  ): Promise<UpdateWorkflowInfoResponse> {
    return this.request("UpdateWorkflowInfo", req, cb)
  }

  /**
   * 释放协同编辑资源锁
   */
  async ReleaseLock(
    req: ReleaseLockRequest,
    cb?: (error: string, rep: ReleaseLockResponse) => void
  ): Promise<ReleaseLockResponse> {
    return this.request("ReleaseLock", req, cb)
  }

  /**
   * 批量删除工作流
   */
  async DeleteBatchWorkflowDs(
    req: DeleteBatchWorkflowDsRequest,
    cb?: (error: string, rep: DeleteBatchWorkflowDsResponse) => void
  ): Promise<DeleteBatchWorkflowDsResponse> {
    return this.request("DeleteBatchWorkflowDs", req, cb)
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
   * 获取工作流画布操作人列表
   */
  async DescribeWorkflowCanvasOperators(
    req: DescribeWorkflowCanvasOperatorsRequest,
    cb?: (error: string, rep: DescribeWorkflowCanvasOperatorsResponse) => void
  ): Promise<DescribeWorkflowCanvasOperatorsResponse> {
    return this.request("DescribeWorkflowCanvasOperators", req, cb)
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
   * 删除产出登记项
   */
  async DeleteTaskOutputRegistry(
    req: DeleteTaskOutputRegistryRequest,
    cb?: (error: string, rep: DeleteTaskOutputRegistryResponse) => void
  ): Promise<DeleteTaskOutputRegistryResponse> {
    return this.request("DeleteTaskOutputRegistry", req, cb)
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
   * 重启采集器
   */
  async RestartInLongAgent(
    req: RestartInLongAgentRequest,
    cb?: (error: string, rep: RestartInLongAgentResponse) => void
  ): Promise<RestartInLongAgentResponse> {
    return this.request("RestartInLongAgent", req, cb)
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
   * 检查任务名称是否重复
   */
  async CheckTaskNameExistDs(
    req: CheckTaskNameExistDsRequest,
    cb?: (error: string, rep: CheckTaskNameExistDsResponse) => void
  ): Promise<CheckTaskNameExistDsResponse> {
    return this.request("CheckTaskNameExistDs", req, cb)
  }

  /**
   * 更新事件
   */
  async UpdateDsEvent(
    req: UpdateDsEventRequest,
    cb?: (error: string, rep: UpdateDsEventResponse) => void
  ): Promise<UpdateDsEventResponse> {
    return this.request("UpdateDsEvent", req, cb)
  }

  /**
   * 新建用户自定义函数组件检查
   */
  async CheckCustomFunctionPremise(
    req: CheckCustomFunctionPremiseRequest,
    cb?: (error: string, rep: CheckCustomFunctionPremiseResponse) => void
  ): Promise<CheckCustomFunctionPremiseResponse> {
    return this.request("CheckCustomFunctionPremise", req, cb)
  }

  /**
   * 获取etl测试运行任务执行状态和日志
   */
  async DescribeTestRun(
    req: DescribeTestRunRequest,
    cb?: (error: string, rep: DescribeTestRunResponse) => void
  ): Promise<DescribeTestRunResponse> {
    return this.request("DescribeTestRun", req, cb)
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
   * 查询规则执行结果详情
   */
  async DescribeRuleExecDetail(
    req: DescribeRuleExecDetailRequest,
    cb?: (error: string, rep: DescribeRuleExecDetailResponse) => void
  ): Promise<DescribeRuleExecDetailResponse> {
    return this.request("DescribeRuleExecDetail", req, cb)
  }

  /**
   * 删除回收站任务
   */
  async DeleteRecycleTask(
    req: DeleteRecycleTaskRequest,
    cb?: (error: string, rep: DeleteRecycleTaskResponse) => void
  ): Promise<DeleteRecycleTaskResponse> {
    return this.request("DeleteRecycleTask", req, cb)
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
   * 基于条件翻页获取任务列表, 用于新建跨工作流任务场景中展示工作流列表操作
   */
  async DescribeTaskListByConditionDs(
    req: DescribeTaskListByConditionDsRequest,
    cb?: (error: string, rep: DescribeTaskListByConditionDsResponse) => void
  ): Promise<DescribeTaskListByConditionDsResponse> {
    return this.request("DescribeTaskListByConditionDs", req, cb)
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
   * 离线任务周期统计明细
   */
  async DescribeTaskReportDetailList(
    req: DescribeTaskReportDetailListRequest,
    cb?: (error: string, rep: DescribeTaskReportDetailListResponse) => void
  ): Promise<DescribeTaskReportDetailListResponse> {
    return this.request("DescribeTaskReportDetailList", req, cb)
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
   * 修改工作流责任人
   */
  async UpdateWorkflowOwner(
    req: UpdateWorkflowOwnerRequest,
    cb?: (error: string, rep: UpdateWorkflowOwnerResponse) => void
  ): Promise<UpdateWorkflowOwnerResponse> {
    return this.request("UpdateWorkflowOwner", req, cb)
  }

  /**
   * 查询 kettle 资源服务器目录树
   */
  async DescribeDsKettleServerFolderTree(
    req: DescribeDsKettleServerFolderTreeRequest,
    cb?: (error: string, rep: DescribeDsKettleServerFolderTreeResponse) => void
  ): Promise<DescribeDsKettleServerFolderTreeResponse> {
    return this.request("DescribeDsKettleServerFolderTree", req, cb)
  }

  /**
   * 获取开发空间支持的脚本类型
   */
  async DescribeDevelopmentSpaceSupportType(
    req?: DescribeDevelopmentSpaceSupportTypeRequest,
    cb?: (error: string, rep: DescribeDevelopmentSpaceSupportTypeResponse) => void
  ): Promise<DescribeDevelopmentSpaceSupportTypeResponse> {
    return this.request("DescribeDevelopmentSpaceSupportType", req, cb)
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
   * 补录任务
   */
  async CreateOpsMakePlan(
    req: CreateOpsMakePlanRequest,
    cb?: (error: string, rep: CreateOpsMakePlanResponse) => void
  ): Promise<CreateOpsMakePlanResponse> {
    return this.request("CreateOpsMakePlan", req, cb)
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
   * 查询规则组详情接口
   */
  async DescribeRuleGroup(
    req: DescribeRuleGroupRequest,
    cb?: (error: string, rep: DescribeRuleGroupResponse) => void
  ): Promise<DescribeRuleGroupResponse> {
    return this.request("DescribeRuleGroup", req, cb)
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
   * 判断脚本文件是否被任务列表所引用
   */
  async ScriptUsedByOtherTaskDs(
    req: ScriptUsedByOtherTaskDsRequest,
    cb?: (error: string, rep: ScriptUsedByOtherTaskDsResponse) => void
  ): Promise<ScriptUsedByOtherTaskDsResponse> {
    return this.request("ScriptUsedByOtherTaskDs", req, cb)
  }

  /**
   * 回滚自定义函数版本
   */
  async RollbackCustomFunctionVersion(
    req: RollbackCustomFunctionVersionRequest,
    cb?: (error: string, rep: RollbackCustomFunctionVersionResponse) => void
  ): Promise<RollbackCustomFunctionVersionResponse> {
    return this.request("RollbackCustomFunctionVersion", req, cb)
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
   * 获取回收站任务详情
   */
  async DescribeRecycleTaskDetail(
    req: DescribeRecycleTaskDetailRequest,
    cb?: (error: string, rep: DescribeRecycleTaskDetailResponse) => void
  ): Promise<DescribeRecycleTaskDetailResponse> {
    return this.request("DescribeRecycleTaskDetail", req, cb)
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
   * 查询父目录下所有子文件夹+工作流
   */
  async DescribeAllByFolderNew(
    req: DescribeAllByFolderNewRequest,
    cb?: (error: string, rep: DescribeAllByFolderNewResponse) => void
  ): Promise<DescribeAllByFolderNewResponse> {
    return this.request("DescribeAllByFolderNew", req, cb)
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
   * 远端路径寻找任务
   */
  async FindTaskByRemotePath(
    req: FindTaskByRemotePathRequest,
    cb?: (error: string, rep: FindTaskByRemotePathResponse) => void
  ): Promise<FindTaskByRemotePathResponse> {
    return this.request("FindTaskByRemotePath", req, cb)
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
   * 判断告警规则重名
   */
  async CheckAlarmRegularNameExist(
    req: CheckAlarmRegularNameExistRequest,
    cb?: (error: string, rep: CheckAlarmRegularNameExistResponse) => void
  ): Promise<CheckAlarmRegularNameExistResponse> {
    return this.request("CheckAlarmRegularNameExist", req, cb)
  }

  /**
   * 批量获取etl测试运行任务执行状态和日志
   */
  async DescribeBatchTestRun(
    req: DescribeBatchTestRunRequest,
    cb?: (error: string, rep: DescribeBatchTestRunResponse) => void
  ): Promise<DescribeBatchTestRunResponse> {
    return this.request("DescribeBatchTestRun", req, cb)
  }

  /**
   * 设置任务输出参数
   */
  async CreateTaskOutParamDs(
    req: CreateTaskOutParamDsRequest,
    cb?: (error: string, rep: CreateTaskOutParamDsResponse) => void
  ): Promise<CreateTaskOutParamDsResponse> {
    return this.request("CreateTaskOutParamDs", req, cb)
  }

  /**
   * 查询文件或任务详情
   */
  async DescribeCodeDetail(
    req: DescribeCodeDetailRequest,
    cb?: (error: string, rep: DescribeCodeDetailResponse) => void
  ): Promise<DescribeCodeDetailResponse> {
    return this.request("DescribeCodeDetail", req, cb)
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
   * 获取所有任务类型
   */
  async DescribeAllTaskType(
    req: DescribeAllTaskTypeRequest,
    cb?: (error: string, rep: DescribeAllTaskTypeResponse) => void
  ): Promise<DescribeAllTaskTypeResponse> {
    return this.request("DescribeAllTaskType", req, cb)
  }

  /**
   * 拉取任务版本列表
   */
  async DescribeDsTaskVersionList(
    req: DescribeDsTaskVersionListRequest,
    cb?: (error: string, rep: DescribeDsTaskVersionListResponse) => void
  ): Promise<DescribeDsTaskVersionListResponse> {
    return this.request("DescribeDsTaskVersionList", req, cb)
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
更新工作流
     */
  async ModifyWorkflowInfo(
    req: ModifyWorkflowInfoRequest,
    cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void
  ): Promise<ModifyWorkflowInfoResponse> {
    return this.request("ModifyWorkflowInfo", req, cb)
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
   * 批量创建任务告警规则
   */
  async BatchCreateIntegrationTaskAlarms(
    req: BatchCreateIntegrationTaskAlarmsRequest,
    cb?: (error: string, rep: BatchCreateIntegrationTaskAlarmsResponse) => void
  ): Promise<BatchCreateIntegrationTaskAlarmsResponse> {
    return this.request("BatchCreateIntegrationTaskAlarms", req, cb)
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
   * 修改审批单状态
   */
  async ModifyApproveStatus(
    req: ModifyApproveStatusRequest,
    cb?: (error: string, rep: ModifyApproveStatusResponse) => void
  ): Promise<ModifyApproveStatusResponse> {
    return this.request("ModifyApproveStatus", req, cb)
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
   * 根据工作流id查询保存未提交任务
   */
  async DescribeDsNotSubmitTasksAndCanRunByWorkflow(
    req: DescribeDsNotSubmitTasksAndCanRunByWorkflowRequest,
    cb?: (error: string, rep: DescribeDsNotSubmitTasksAndCanRunByWorkflowResponse) => void
  ): Promise<DescribeDsNotSubmitTasksAndCanRunByWorkflowResponse> {
    return this.request("DescribeDsNotSubmitTasksAndCanRunByWorkflow", req, cb)
  }

  /**
   * 查询工作流版本信息
   */
  async QueryWorkflowVersion(
    req: QueryWorkflowVersionRequest,
    cb?: (error: string, rep: QueryWorkflowVersionResponse) => void
  ): Promise<QueryWorkflowVersionResponse> {
    return this.request("QueryWorkflowVersion", req, cb)
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
   * 查询试运行实例子实例列表
   */
  async DescribeDrSonInstance(
    req: DescribeDrSonInstanceRequest,
    cb?: (error: string, rep: DescribeDrSonInstanceResponse) => void
  ): Promise<DescribeDrSonInstanceResponse> {
    return this.request("DescribeDrSonInstance", req, cb)
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
   * 即席分析提交PYTHON任务
   */
  async SubmitPythonTask(
    req: SubmitPythonTaskRequest,
    cb?: (error: string, rep: SubmitPythonTaskResponse) => void
  ): Promise<SubmitPythonTaskResponse> {
    return this.request("SubmitPythonTask", req, cb)
  }

  /**
   * 工作流导入（XML）
   */
  async ImportWorkflowXml(
    req: ImportWorkflowXmlRequest,
    cb?: (error: string, rep: ImportWorkflowXmlResponse) => void
  ): Promise<ImportWorkflowXmlResponse> {
    return this.request("ImportWorkflowXml", req, cb)
  }

  /**
   * 获取操作详情列表
   */
  async ListBatchDetail(
    req: ListBatchDetailRequest,
    cb?: (error: string, rep: ListBatchDetailResponse) => void
  ): Promise<ListBatchDetailResponse> {
    return this.request("ListBatchDetail", req, cb)
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
   * 资源管理-创建资源目录
   */
  async CreateResourceDirectory(
    req: CreateResourceDirectoryRequest,
    cb?: (error: string, rep: CreateResourceDirectoryResponse) => void
  ): Promise<CreateResourceDirectoryResponse> {
    return this.request("CreateResourceDirectory", req, cb)
  }

  /**
   * 还原任务
   */
  async RestoreRecycleTask(
    req: RestoreRecycleTaskRequest,
    cb?: (error: string, rep: RestoreRecycleTaskResponse) => void
  ): Promise<RestoreRecycleTaskResponse> {
    return this.request("RestoreRecycleTask", req, cb)
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
   * 查询任务实例列表
   */
  async DescribeTaskInstances(
    req: DescribeTaskInstancesRequest,
    cb?: (error: string, rep: DescribeTaskInstancesResponse) => void
  ): Promise<DescribeTaskInstancesResponse> {
    return this.request("DescribeTaskInstances", req, cb)
  }

  /**
   * 批量导出文件
   */
  async ExportFiles(
    req: ExportFilesRequest,
    cb?: (error: string, rep: ExportFilesResponse) => void
  ): Promise<ExportFilesResponse> {
    return this.request("ExportFiles", req, cb)
  }

  /**
   * 创建开发空间版本
   */
  async CreateFileVersion(
    req: CreateFileVersionRequest,
    cb?: (error: string, rep: CreateFileVersionResponse) => void
  ): Promise<CreateFileVersionResponse> {
    return this.request("CreateFileVersion", req, cb)
  }

  /**
   * 批量删除任务提交记录列表
   */
  async DeleteRecordList(
    req: DeleteRecordListRequest,
    cb?: (error: string, rep: DeleteRecordListResponse) => void
  ): Promise<DeleteRecordListResponse> {
    return this.request("DeleteRecordList", req, cb)
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
   * 替换项目参数历史版本
   */
  async ReplaceProjectParamVersionDs(
    req: ReplaceProjectParamVersionDsRequest,
    cb?: (error: string, rep: ReplaceProjectParamVersionDsResponse) => void
  ): Promise<ReplaceProjectParamVersionDsResponse> {
    return this.request("ReplaceProjectParamVersionDs", req, cb)
  }

  /**
   * 新获取SQL执行结果
   */
  async DescribeNewSqlTaskResult(
    req: DescribeNewSqlTaskResultRequest,
    cb?: (error: string, rep: DescribeNewSqlTaskResultResponse) => void
  ): Promise<DescribeNewSqlTaskResultResponse> {
    return this.request("DescribeNewSqlTaskResult", req, cb)
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
   * 查询集成任务
   */
  async DescribeIntegrationTask(
    req: DescribeIntegrationTaskRequest,
    cb?: (error: string, rep: DescribeIntegrationTaskResponse) => void
  ): Promise<DescribeIntegrationTaskResponse> {
    return this.request("DescribeIntegrationTask", req, cb)
  }

  /**
   * 资源管理-获取资源上传的可用 cos 路径
   */
  async GetResourceCosPath(
    req: GetResourceCosPathRequest,
    cb?: (error: string, rep: GetResourceCosPathResponse) => void
  ): Promise<GetResourceCosPathResponse> {
    return this.request("GetResourceCosPath", req, cb)
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
   * 任务运维搜索 查询生产态任务数据源列表
   */
  async DescribeOperateOpsTaskDatasource(
    req: DescribeOperateOpsTaskDatasourceRequest,
    cb?: (error: string, rep: DescribeOperateOpsTaskDatasourceResponse) => void
  ): Promise<DescribeOperateOpsTaskDatasourceResponse> {
    return this.request("DescribeOperateOpsTaskDatasource", req, cb)
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
   * 开发空间-拉取指定路径目录树
   */
  async DescribeChildrenPathTrees(
    req: DescribeChildrenPathTreesRequest,
    cb?: (error: string, rep: DescribeChildrenPathTreesResponse) => void
  ): Promise<DescribeChildrenPathTreesResponse> {
    return this.request("DescribeChildrenPathTrees", req, cb)
  }

  /**
   * 批量更新数据源
   */
  async UpdateBatchTaskDatasource(
    req: UpdateBatchTaskDatasourceRequest,
    cb?: (error: string, rep: UpdateBatchTaskDatasourceResponse) => void
  ): Promise<UpdateBatchTaskDatasourceResponse> {
    return this.request("UpdateBatchTaskDatasource", req, cb)
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
   * 实例批量重跑
   */
  async RerunScheduleInstances(
    req: RerunScheduleInstancesRequest,
    cb?: (error: string, rep: RerunScheduleInstancesResponse) => void
  ): Promise<RerunScheduleInstancesResponse> {
    return this.request("RerunScheduleInstances", req, cb)
  }

  /**
   * 获取执行日志
   */
  async DescribeExecutionLog(
    req: DescribeExecutionLogRequest,
    cb?: (error: string, rep: DescribeExecutionLogResponse) => void
  ): Promise<DescribeExecutionLogResponse> {
    return this.request("DescribeExecutionLog", req, cb)
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
   * 查询函数分类
   */
  async DescribeFunctionKinds(
    req?: DescribeFunctionKindsRequest,
    cb?: (error: string, rep: DescribeFunctionKindsResponse) => void
  ): Promise<DescribeFunctionKindsResponse> {
    return this.request("DescribeFunctionKinds", req, cb)
  }

  /**
   * 即席分析提交PySpark任务
   */
  async SubmitPySparkTask(
    req: SubmitPySparkTaskRequest,
    cb?: (error: string, rep: SubmitPySparkTaskResponse) => void
  ): Promise<SubmitPySparkTaskResponse> {
    return this.request("SubmitPySparkTask", req, cb)
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
   * 拉取下游依赖的任务列表Ds
   */
  async FindDependTaskListDs(
    req: FindDependTaskListDsRequest,
    cb?: (error: string, rep: FindDependTaskListDsResponse) => void
  ): Promise<FindDependTaskListDsResponse> {
    return this.request("FindDependTaskListDs", req, cb)
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
   * 数据质量获取生产调度任务列表
   */
  async DescribeProdTasks(
    req: DescribeProdTasksRequest,
    cb?: (error: string, rep: DescribeProdTasksResponse) => void
  ): Promise<DescribeProdTasksResponse> {
    return this.request("DescribeProdTasks", req, cb)
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
   * 在基线系统内查询单个调度任务实例
   */
  async DescribeScheduleInstance(
    req: DescribeScheduleInstanceRequest,
    cb?: (error: string, rep: DescribeScheduleInstanceResponse) => void
  ): Promise<DescribeScheduleInstanceResponse> {
    return this.request("DescribeScheduleInstance", req, cb)
  }

  /**
   * 查询项目参数历史版本
   */
  async DescribeProjectParamVersionDs(
    req: DescribeProjectParamVersionDsRequest,
    cb?: (error: string, rep: DescribeProjectParamVersionDsResponse) => void
  ): Promise<DescribeProjectParamVersionDsResponse> {
    return this.request("DescribeProjectParamVersionDs", req, cb)
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
   * 导出项目参数
   */
  async ExportProjectParamDs(
    req: ExportProjectParamDsRequest,
    cb?: (error: string, rep: ExportProjectParamDsResponse) => void
  ): Promise<ExportProjectParamDsResponse> {
    return this.request("ExportProjectParamDs", req, cb)
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
   * 工作流信息查询-项目克隆使用
   */
  async DescribeWorkflowForProjectClone(
    req: DescribeWorkflowForProjectCloneRequest,
    cb?: (error: string, rep: DescribeWorkflowForProjectCloneResponse) => void
  ): Promise<DescribeWorkflowForProjectCloneResponse> {
    return this.request("DescribeWorkflowForProjectClone", req, cb)
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
   * 查询任务引用参数
   */
  async DescribeTaskParamDs(
    req: DescribeTaskParamDsRequest,
    cb?: (error: string, rep: DescribeTaskParamDsResponse) => void
  ): Promise<DescribeTaskParamDsResponse> {
    return this.request("DescribeTaskParamDs", req, cb)
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
   * 根据周期类型 查询所有任务
   */
  async DescribeTaskByCycle(
    req: DescribeTaskByCycleRequest,
    cb?: (error: string, rep: DescribeTaskByCycleResponse) => void
  ): Promise<DescribeTaskByCycleResponse> {
    return this.request("DescribeTaskByCycle", req, cb)
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
     * 批量运行任务, 用于工作流-任务配置-运行、工作流-任务右键-运行、任务运维-任务管理-更多操作-运行、任务运维-任务管理-选择任务-批量运行等场景。
1. 任务运行预判断
2. 更新db中任务状态
3. 通知scheduler进行运行操作
     */
  async BatchRunTasksDs(
    req: BatchRunTasksDsRequest,
    cb?: (error: string, rep: BatchRunTasksDsResponse) => void
  ): Promise<BatchRunTasksDsResponse> {
    return this.request("BatchRunTasksDs", req, cb)
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
   * 编排空间-工作流-移动任务到工作流文件夹
   */
  async MoveTasksToFolder(
    req: MoveTasksToFolderRequest,
    cb?: (error: string, rep: MoveTasksToFolderResponse) => void
  ): Promise<MoveTasksToFolderResponse> {
    return this.request("MoveTasksToFolder", req, cb)
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
   * 工作流补数据
   */
  async MakeUpTasksByWorkflow(
    req: MakeUpTasksByWorkflowRequest,
    cb?: (error: string, rep: MakeUpTasksByWorkflowResponse) => void
  ): Promise<MakeUpTasksByWorkflowResponse> {
    return this.request("MakeUpTasksByWorkflow", req, cb)
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
   * 根据条件搜索代码
   */
  async DescribeCodeSearchInfo(
    req: DescribeCodeSearchInfoRequest,
    cb?: (error: string, rep: DescribeCodeSearchInfoResponse) => void
  ): Promise<DescribeCodeSearchInfoResponse> {
    return this.request("DescribeCodeSearchInfo", req, cb)
  }

  /**
   * 创建项目参数
   */
  async CreateProjectParamDs(
    req: CreateProjectParamDsRequest,
    cb?: (error: string, rep: CreateProjectParamDsResponse) => void
  ): Promise<CreateProjectParamDsResponse> {
    return this.request("CreateProjectParamDs", req, cb)
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
   * 批量启动工作流
   */
  async RunTasksByMultiWorkflow(
    req: RunTasksByMultiWorkflowRequest,
    cb?: (error: string, rep: RunTasksByMultiWorkflowResponse) => void
  ): Promise<RunTasksByMultiWorkflowResponse> {
    return this.request("RunTasksByMultiWorkflow", req, cb)
  }

  /**
   * 批量更新高级设置
   */
  async UpdateBatchTaskAdvancedSettings(
    req: UpdateBatchTaskAdvancedSettingsRequest,
    cb?: (error: string, rep: UpdateBatchTaskAdvancedSettingsResponse) => void
  ): Promise<UpdateBatchTaskAdvancedSettingsResponse> {
    return this.request("UpdateBatchTaskAdvancedSettings", req, cb)
  }

  /**
   * 查询任务输入参数
   */
  async DescribeTaskInParamDs(
    req: DescribeTaskInParamDsRequest,
    cb?: (error: string, rep: DescribeTaskInParamDsResponse) => void
  ): Promise<DescribeTaskInParamDsResponse> {
    return this.request("DescribeTaskInParamDs", req, cb)
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
   * 新增或编辑产出登记项
   */
  async CreateTaskOutputRegistry(
    req: CreateTaskOutputRegistryRequest,
    cb?: (error: string, rep: CreateTaskOutputRegistryResponse) => void
  ): Promise<CreateTaskOutputRegistryResponse> {
    return this.request("CreateTaskOutputRegistry", req, cb)
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
   * 编辑基线实例中任务告警状态
   */
  async ModifyBaselineTaskAlarmStatus(
    req: ModifyBaselineTaskAlarmStatusRequest,
    cb?: (error: string, rep: ModifyBaselineTaskAlarmStatusResponse) => void
  ): Promise<ModifyBaselineTaskAlarmStatusResponse> {
    return this.request("ModifyBaselineTaskAlarmStatus", req, cb)
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
   * 检查操作用户对所选任务是否有操作权限, 用于新建跨工作流任务场景中展示审批提示操作
   */
  async CheckTaskPriorityDs(
    req: CheckTaskPriorityDsRequest,
    cb?: (error: string, rep: CheckTaskPriorityDsResponse) => void
  ): Promise<CheckTaskPriorityDsResponse> {
    return this.request("CheckTaskPriorityDs", req, cb)
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
   * 查询表绑定执行规则组信息
   */
  async DescribeRuleGroupTable(
    req: DescribeRuleGroupTableRequest,
    cb?: (error: string, rep: DescribeRuleGroupTableResponse) => void
  ): Promise<DescribeRuleGroupTableResponse> {
    return this.request("DescribeRuleGroupTable", req, cb)
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
更新任务
     */
  async ModifyTaskInfo(
    req: ModifyTaskInfoRequest,
    cb?: (error: string, rep: ModifyTaskInfoResponse) => void
  ): Promise<ModifyTaskInfoResponse> {
    return this.request("ModifyTaskInfo", req, cb)
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
   * 新建文件夹
   */
  async CreatePath(
    req: CreatePathRequest,
    cb?: (error: string, rep: CreatePathResponse) => void
  ): Promise<CreatePathResponse> {
    return this.request("CreatePath", req, cb)
  }

  /**
   * 任务引用参数
   */
  async CreateTaskParamDs(
    req: CreateTaskParamDsRequest,
    cb?: (error: string, rep: CreateTaskParamDsResponse) => void
  ): Promise<CreateTaskParamDsResponse> {
    return this.request("CreateTaskParamDs", req, cb)
  }

  /**
   * 根据层级查找开发态上下游任务节点
   */
  async DescribeDependTasksDevDs(
    req: DescribeDependTasksDevDsRequest,
    cb?: (error: string, rep: DescribeDependTasksDevDsResponse) => void
  ): Promise<DescribeDependTasksDevDsResponse> {
    return this.request("DescribeDependTasksDevDs", req, cb)
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
   * 数据开发模块-文件夹更新
   */
  async ModifyDsFolder(
    req: ModifyDsFolderRequest,
    cb?: (error: string, rep: ModifyDsFolderResponse) => void
  ): Promise<ModifyDsFolderResponse> {
    return this.request("ModifyDsFolder", req, cb)
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
   * 根据文件夹查询工作流
   */
  async DescribeWorkflowByFordIds(
    req: DescribeWorkflowByFordIdsRequest,
    cb?: (error: string, rep: DescribeWorkflowByFordIdsResponse) => void
  ): Promise<DescribeWorkflowByFordIdsResponse> {
    return this.request("DescribeWorkflowByFordIds", req, cb)
  }

  /**
   * 事件管理-导出事件
   */
  async ExportDsEvent(
    req: ExportDsEventRequest,
    cb?: (error: string, rep: ExportDsEventResponse) => void
  ): Promise<ExportDsEventResponse> {
    return this.request("ExportDsEvent", req, cb)
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
   * 创建数据表：HIVE
   */
  async ImportTableData(
    req: ImportTableDataRequest,
    cb?: (error: string, rep: ImportTableDataResponse) => void
  ): Promise<ImportTableDataResponse> {
    return this.request("ImportTableData", req, cb)
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
   * 复制工作流
   */
  async CopyWorkflowDs(
    req: CopyWorkflowDsRequest,
    cb?: (error: string, rep: CopyWorkflowDsResponse) => void
  ): Promise<CopyWorkflowDsResponse> {
    return this.request("CopyWorkflowDs", req, cb)
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
   * 提交基线
   */
  async SubmitBaseline(
    req: SubmitBaselineRequest,
    cb?: (error: string, rep: SubmitBaselineResponse) => void
  ): Promise<SubmitBaselineResponse> {
    return this.request("SubmitBaseline", req, cb)
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
   * 获取协同编辑资源锁
   */
  async AcquireLock(
    req: AcquireLockRequest,
    cb?: (error: string, rep: AcquireLockResponse) => void
  ): Promise<AcquireLockResponse> {
    return this.request("AcquireLock", req, cb)
  }

  /**
   * 查询规则模板操作记录
   */
  async DescribeTemplateHistory(
    req: DescribeTemplateHistoryRequest,
    cb?: (error: string, rep: DescribeTemplateHistoryResponse) => void
  ): Promise<DescribeTemplateHistoryResponse> {
    return this.request("DescribeTemplateHistory", req, cb)
  }

  /**
   * 查询所有参数
   */
  async DescribeAllParamDs(
    req: DescribeAllParamDsRequest,
    cb?: (error: string, rep: DescribeAllParamDsResponse) => void
  ): Promise<DescribeAllParamDsResponse> {
    return this.request("DescribeAllParamDs", req, cb)
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
   * 获取长连接Token
   */
  async DescribeToken(
    req?: DescribeTokenRequest,
    cb?: (error: string, rep: DescribeTokenResponse) => void
  ): Promise<DescribeTokenResponse> {
    return this.request("DescribeToken", req, cb)
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
   * 删除项目参数版本
   */
  async DeleteProjectParamVersionDs(
    req: DeleteProjectParamVersionDsRequest,
    cb?: (error: string, rep: DeleteProjectParamVersionDsResponse) => void
  ): Promise<DeleteProjectParamVersionDsResponse> {
    return this.request("DeleteProjectParamVersionDs", req, cb)
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
   * 数据质量概览页面触发维度分布统计接口
   */
  async DescribeRuleDimStat(
    req: DescribeRuleDimStatRequest,
    cb?: (error: string, rep: DescribeRuleDimStatResponse) => void
  ): Promise<DescribeRuleDimStatResponse> {
    return this.request("DescribeRuleDimStat", req, cb)
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
   * Ds批量删除任务，仅对任务状态为”已停止“有效；
   */
  async BatchDeleteTasksDsAsync(
    req: BatchDeleteTasksDsAsyncRequest,
    cb?: (error: string, rep: BatchDeleteTasksDsAsyncResponse) => void
  ): Promise<BatchDeleteTasksDsAsyncResponse> {
    return this.request("BatchDeleteTasksDsAsync", req, cb)
  }

  /**
   * 异步导入集成任务
   */
  async ImportOfflineTask(
    req: ImportOfflineTaskRequest,
    cb?: (error: string, rep: ImportOfflineTaskResponse) => void
  ): Promise<ImportOfflineTaskResponse> {
    return this.request("ImportOfflineTask", req, cb)
  }

  /**
   * 编排空间-工作流-创建任务文件夹
   */
  async ModifyTaskFolder(
    req: ModifyTaskFolderRequest,
    cb?: (error: string, rep: ModifyTaskFolderResponse) => void
  ): Promise<ModifyTaskFolderResponse> {
    return this.request("ModifyTaskFolder", req, cb)
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
    req?: DeleteProjectUsersRequest,
    cb?: (error: string, rep: DeleteProjectUsersResponse) => void
  ): Promise<DeleteProjectUsersResponse> {
    return this.request("DeleteProjectUsers", req, cb)
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
   * 删除文件
   */
  async DeleteFile(
    req: DeleteFileRequest,
    cb?: (error: string, rep: DeleteFileResponse) => void
  ): Promise<DeleteFileResponse> {
    return this.request("DeleteFile", req, cb)
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
   * 资源管理-重命名资源
   */
  async RenameResource(
    req: RenameResourceRequest,
    cb?: (error: string, rep: RenameResourceResponse) => void
  ): Promise<RenameResourceResponse> {
    return this.request("RenameResource", req, cb)
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
   * 获取操作历史列表
   */
  async ListBatchJob(
    req: ListBatchJobRequest,
    cb?: (error: string, rep: ListBatchJobResponse) => void
  ): Promise<ListBatchJobResponse> {
    return this.request("ListBatchJob", req, cb)
  }

  /**
   * 获取工作流操作日志
   */
  async DescribeWorkflowCanvasOpLogs(
    req: DescribeWorkflowCanvasOpLogsRequest,
    cb?: (error: string, rep: DescribeWorkflowCanvasOpLogsResponse) => void
  ): Promise<DescribeWorkflowCanvasOpLogsResponse> {
    return this.request("DescribeWorkflowCanvasOpLogs", req, cb)
  }

  /**
   * 注册事件
   */
  async RegisterDsEvent(
    req: RegisterDsEventRequest,
    cb?: (error: string, rep: RegisterDsEventResponse) => void
  ): Promise<RegisterDsEventResponse> {
    return this.request("RegisterDsEvent", req, cb)
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
   * 修改任务脚本Ds
   */
  async ModifyTaskScriptDs(
    req: ModifyTaskScriptDsRequest,
    cb?: (error: string, rep: ModifyTaskScriptDsResponse) => void
  ): Promise<ModifyTaskScriptDsResponse> {
    return this.request("ModifyTaskScriptDs", req, cb)
  }

  /**
   * 导出工作流到 Zip 文件，导出的文件存储在 cos 中(私有化 csp)，请自行下载，相关的下载信息在返回值中可以获取到
   */
  async ExportWorkflowZip(
    req: ExportWorkflowZipRequest,
    cb?: (error: string, rep: ExportWorkflowZipResponse) => void
  ): Promise<ExportWorkflowZipResponse> {
    return this.request("ExportWorkflowZip", req, cb)
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
   * 添加父任务依赖
   */
  async ModifyTaskLinksDs(
    req: ModifyTaskLinksDsRequest,
    cb?: (error: string, rep: ModifyTaskLinksDsResponse) => void
  ): Promise<ModifyTaskLinksDsResponse> {
    return this.request("ModifyTaskLinksDs", req, cb)
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
   * 批量创建任务版本Ds
   */
  async BatchCreateTaskVersionDs(
    req: BatchCreateTaskVersionDsRequest,
    cb?: (error: string, rep: BatchCreateTaskVersionDsResponse) => void
  ): Promise<BatchCreateTaskVersionDsResponse> {
    return this.request("BatchCreateTaskVersionDs", req, cb)
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
   * 分页查询事件
   */
  async DescribeDsEvent(
    req: DescribeDsEventRequest,
    cb?: (error: string, rep: DescribeDsEventResponse) => void
  ): Promise<DescribeDsEventResponse> {
    return this.request("DescribeDsEvent", req, cb)
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
   * 编排空间-工作流-删除任务文件夹
   */
  async DeleteTaskFolder(
    req: DeleteTaskFolderRequest,
    cb?: (error: string, rep: DeleteTaskFolderResponse) => void
  ): Promise<DeleteTaskFolderResponse> {
    return this.request("DeleteTaskFolder", req, cb)
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
   * 任务状态趋势
   */
  async DescribeStatisticInstanceStatusTrendOps(
    req: DescribeStatisticInstanceStatusTrendOpsRequest,
    cb?: (error: string, rep: DescribeStatisticInstanceStatusTrendOpsResponse) => void
  ): Promise<DescribeStatisticInstanceStatusTrendOpsResponse> {
    return this.request("DescribeStatisticInstanceStatusTrendOps", req, cb)
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
   * 即席分析-获取任务列表
   */
  async DescribeRecordList(
    req: DescribeRecordListRequest,
    cb?: (error: string, rep: DescribeRecordListResponse) => void
  ): Promise<DescribeRecordListResponse> {
    return this.request("DescribeRecordList", req, cb)
  }

  /**
   * 查看任务版本详细信息
   */
  async DescribeDsTaskVersionInfo(
    req: DescribeDsTaskVersionInfoRequest,
    cb?: (error: string, rep: DescribeDsTaskVersionInfoResponse) => void
  ): Promise<DescribeDsTaskVersionInfoResponse> {
    return this.request("DescribeDsTaskVersionInfo", req, cb)
  }

  /**
   * 提交etl测试运行任务
   */
  async SubmitTestRun(
    req: SubmitTestRunRequest,
    cb?: (error: string, rep: SubmitTestRunResponse) => void
  ): Promise<SubmitTestRunResponse> {
    return this.request("SubmitTestRun", req, cb)
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
   * Ds批量删除任务，仅对任务状态为”已停止“有效；
   */
  async BatchDeleteTasksDs(
    req: BatchDeleteTasksDsRequest,
    cb?: (error: string, rep: BatchDeleteTasksDsResponse) => void
  ): Promise<BatchDeleteTasksDsResponse> {
    return this.request("BatchDeleteTasksDs", req, cb)
  }

  /**
   * 任务信息查询-项目克隆使用
   */
  async DescribeTasksForProjectClone(
    req: DescribeTasksForProjectCloneRequest,
    cb?: (error: string, rep: DescribeTasksForProjectCloneResponse) => void
  ): Promise<DescribeTasksForProjectCloneResponse> {
    return this.request("DescribeTasksForProjectClone", req, cb)
  }

  /**
   * 移动文件夹
   */
  async RenewWorkflowFolderDs(
    req: RenewWorkflowFolderDsRequest,
    cb?: (error: string, rep: RenewWorkflowFolderDsResponse) => void
  ): Promise<RenewWorkflowFolderDsResponse> {
    return this.request("RenewWorkflowFolderDs", req, cb)
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
   * 删除用户自定义函数
   */
  async DeleteCustomFunction(
    req: DeleteCustomFunctionRequest,
    cb?: (error: string, rep: DeleteCustomFunctionResponse) => void
  ): Promise<DeleteCustomFunctionResponse> {
    return this.request("DeleteCustomFunction", req, cb)
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
   * 查询工作流任务数
   */
  async DescribeWorkflowTaskCount(
    req: DescribeWorkflowTaskCountRequest,
    cb?: (error: string, rep: DescribeWorkflowTaskCountResponse) => void
  ): Promise<DescribeWorkflowTaskCountResponse> {
    return this.request("DescribeWorkflowTaskCount", req, cb)
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
   * 批量重跑集成任务实例
   */
  async BatchRerunIntegrationTaskInstances(
    req: BatchRerunIntegrationTaskInstancesRequest,
    cb?: (error: string, rep: BatchRerunIntegrationTaskInstancesResponse) => void
  ): Promise<BatchRerunIntegrationTaskInstancesResponse> {
    return this.request("BatchRerunIntegrationTaskInstances", req, cb)
  }

  /**
   * 创建任务连接
   */
  async CreateLink(
    req: CreateLinkRequest,
    cb?: (error: string, rep: CreateLinkResponse) => void
  ): Promise<CreateLinkResponse> {
    return this.request("CreateLink", req, cb)
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
   * 任务是否存在监听事件
   */
  async JudgeTaskListenEvent(
    req: JudgeTaskListenEventRequest,
    cb?: (error: string, rep: JudgeTaskListenEventResponse) => void
  ): Promise<JudgeTaskListenEventResponse> {
    return this.request("JudgeTaskListenEvent", req, cb)
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
   * 查询采集器关联的任务列表
   */
  async DescribeInLongAgentTaskList(
    req: DescribeInLongAgentTaskListRequest,
    cb?: (error: string, rep: DescribeInLongAgentTaskListResponse) => void
  ): Promise<DescribeInLongAgentTaskListResponse> {
    return this.request("DescribeInLongAgentTaskList", req, cb)
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
   * 获取项目信息
   */
  async DescribeProject(
    req: DescribeProjectRequest,
    cb?: (error: string, rep: DescribeProjectResponse) => void
  ): Promise<DescribeProjectResponse> {
    return this.request("DescribeProject", req, cb)
  }

  /**
   * 注册事件监听者
   */
  async RegisterDsEventListener(
    req: RegisterDsEventListenerRequest,
    cb?: (error: string, rep: RegisterDsEventListenerResponse) => void
  ): Promise<RegisterDsEventListenerResponse> {
    return this.request("RegisterDsEventListener", req, cb)
  }

  /**
   * 数据开发-获取工作流画布信息
   */
  async DescribeWorkflowCanvasInfoDs(
    req: DescribeWorkflowCanvasInfoDsRequest,
    cb?: (error: string, rep: DescribeWorkflowCanvasInfoDsResponse) => void
  ): Promise<DescribeWorkflowCanvasInfoDsResponse> {
    return this.request("DescribeWorkflowCanvasInfoDs", req, cb)
  }

  /**
   * 移动文件
   */
  async MoveFile(
    req: MoveFileRequest,
    cb?: (error: string, rep: MoveFileResponse) => void
  ): Promise<MoveFileResponse> {
    return this.request("MoveFile", req, cb)
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
   * 查询工作流画布
   */
  async DescribeWorkflowCanvasInfo(
    req: DescribeWorkflowCanvasInfoRequest,
    cb?: (error: string, rep: DescribeWorkflowCanvasInfoResponse) => void
  ): Promise<DescribeWorkflowCanvasInfoResponse> {
    return this.request("DescribeWorkflowCanvasInfo", req, cb)
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
   * 查询规则模版列表
   */
  async DescribeRuleTemplates(
    req: DescribeRuleTemplatesRequest,
    cb?: (error: string, rep: DescribeRuleTemplatesResponse) => void
  ): Promise<DescribeRuleTemplatesResponse> {
    return this.request("DescribeRuleTemplates", req, cb)
  }

  /**
   * 基于当前任务的数据时间计算依赖的上游任务数据时间
   */
  async DescribeTaskParentRunTime(
    req: DescribeTaskParentRunTimeRequest,
    cb?: (error: string, rep: DescribeTaskParentRunTimeResponse) => void
  ): Promise<DescribeTaskParentRunTimeResponse> {
    return this.request("DescribeTaskParentRunTime", req, cb)
  }
}

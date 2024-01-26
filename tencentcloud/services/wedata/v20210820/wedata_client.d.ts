import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRuleTemplateResponse, DescribeDsEventListenerResponse, ModifyBaselineAlarmStatusRequest, DescribeScheduleInstanceResponse, DescribeInstanceLogsRequest, CreateDataSourceRequest, DescribeChildrenDsResponse, CreateIntegrationNodeResponse, DeleteProjectParamVersionDsResponse, DescribeDsEventResponse, DescribeTableMetasRequest, DescribeSqlTaskResultRequest, MakeUpTasksByWorkflowRequest, SubmitPySparkTaskResponse, MakeUpTasksByWorkflowResponse, DescribeFunctionKindsRequest, DescribeIntegrationStatisticsRecordsTrendRequest, DescribeOperateTasksRequest, SubmitTaskTestRunResponse, RegisterEventListenerResponse, DescribeStandardRuleDetailInfoListResponse, BatchStopTasksNewRequest, TriggerEventRequest, DescribeDependOpsTasksRequest, CreateProjectParamDsRequest, DescribeScriptsImportTaskTypeResponse, DescribeRuleGroupSubscriptionResponse, DescribeIntegrationStatisticsTaskStatusTrendResponse, DescribeSchedulerTaskTypeCntRequest, DescribeDependencyTasksForProjectCloneRequest, DownloadSqlResultRequest, DeleteDsEventListenerRequest, UploadContentResponse, DescribeDataBasesRequest, DescribeRealTimeTaskMetricOverviewResponse, DescribeProjectParamDsPageResponse, UpdateWorkflowInfoResponse, GetLatestAnalyseInfoRequest, GetCosTokenResponse, ImportProjectParamDsResponse, ForceSucScheduleInstancesResponse, CreateResourceDirectoryRequest, DescribeRuleExecHistoryRequest, StopBaselineRequest, GetPathTreesResponse, DescribeTaskInstanceReportDetailRequest, DescribeBaselineInstancesResponse, DescribeOrganizationalFunctionsRequest, FindTaskByRemotePathRequest, DescribeTaskTypeByScriptTypeResponse, BatchStopWorkflowsByIdsRequest, CreateBaselineRequest, DeleteResourceFileResponse, DescribeRecycleTaskDetailRequest, DescribeTaskListByConditionDsRequest, DeleteEventListenerByTaskIdRequest, RunTaskRequest, DescribeOpsWorkflowsRequest, DescribeBatchTestRunRequest, CreateOfflineTaskResponse, DescribeWorkflowCanvasInfoDsResponse, CreateTaskOutputRegistryResponse, DescribeDsFolderTreeRequest, DeleteResourcePathRequest, BatchDeleteIntegrationTasksRequest, UploadFilesDsResponse, TaskLogRequest, DescribeIntegrationStatisticsTaskStatusRequest, DescribeBelongToResponse, FreezeOpsTasksResponse, ModifyRuleGroupSubscriptionResponse, CreateWorkflowDsResponse, DescribeExecStrategyResponse, DescribeSuccessorOpsTaskInfosResponse, DescribeInstanceLogFileResponse, SubmitBaselineResponse, GetResourcePathTreeResponse, RenameResourceFileResponse, CreateTaskInParamDsResponse, DescribeSonInstancesRequest, DryRunDIOfflineTaskRequest, CreateOfflineTaskRequest, DescribeEtlTaskTypeResponse, DescribeTableBasicInfoResponse, ImportTableDataResponse, SubmitBaselineRequest, ForceSucInstancesRequest, SubmitBatchTestRunRequest, DeleteOfflineTaskResponse, DeleteBatchWorkflowDsRequest, CopyTaskDsResponse, CheckDuplicateRuleNameRequest, RollbackCustomFunctionVersionResponse, DescribeCrontabTopNDsRequest, CreateTaskAlarmRegularResponse, DeleteRuleTemplateRequest, CreateBaselineResponse, MakeUpWorkflowNewRequest, DescribeAlarmReceiverRequest, KillOpsMakePlanInstancesRequest, ModifyWorkflowInfoRequest, BatchResumeIntegrationTasksRequest, DeleteTaskAlarmRegularResponse, DescribeWorkflowSchedulerInfoDsResponse, DescribeCodeSearchAuditInfoV2Response, ListBatchJobRequest, BatchStopIntegrationTasksResponse, ModifyDataSourceRequest, UpdateInLongAgentRequest, CreatePathRequest, DescribeDatasourceResponse, SuspendIntegrationTaskResponse, DescribeSchedulerRunTimeInstanceCntByStatusResponse, QueryWorkflowVersionRequest, RunForceSucScheduleInstancesRequest, CreateFileVersionRequest, CheckIntegrationTaskNameExistsRequest, DescribeAllParamDsResponse, DescribeOrganizationalFunctionsResponse, FindAllFolderRequest, DescribeDataTypesResponse, TaskLogResponse, DeleteResourceFilesResponse, GetOfflineInstanceListRequest, DescribeRealTimeTaskMetricOverviewRequest, DescribeRuleHistoryByPageResponse, DescribeWorkflowInfoByIdResponse, ImportFilesResponse, DescribeProjectRequest, ModifyTaskAlarmRegularResponse, DescribeTaskRunHistoryRequest, DeleteOfflineTaskRequest, DescribeInLongAgentVpcListRequest, ModifyMonitorStatusResponse, DescribeFatherDatasourceInfoDsRequest, DeleteInLongAgentResponse, ModifyMonitorStatusRequest, DeleteFilePathRequest, DescribeTasksForProjectCloneResponse, ExportWorkflowXmlRequest, MoveFileResponse, FindTaskByRemotePathResponse, CreateTaskDsRequest, DeleteDsFolderRequest, DescribeDatabaseMetasRequest, DescribeWorkflowSchedulerInfoDsRequest, DescribeTaskByStatusReportResponse, DescribeInfoTransByTypeIdDsRequest, DescribeNewSqlTaskResultRequest, KillInstancesRequest, StartIntegrationTaskResponse, BatchStopOpsTasksResponse, RenewWorkflowFolderDsResponse, DescribeCodeSearchInfoRequest, DeleteRuleResponse, ImportOfflineTaskResponse, UpdateBatchTaskAdvancedSettingsRequest, DescribeInstancesRequest, DescribeInstanceByCycleReportRequest, UpdateBatchTaskScheduleResponse, DescribeDataSourceWithoutInfoResponse, ModifyBaselineTaskAlarmStatusResponse, BatchStopWorkflowsByIdsResponse, DescribeDependOpsTaskListResponse, DescribeStatisticInstanceStatusTrendOpsResponse, CountOpsInstanceStateResponse, DescribeQualityScoreTrendRequest, SubmitTaskTestRunRequest, DeleteBaselineResponse, CheckAlarmRegularNameExistResponse, PreviewDataTableCsvRequest, RenewWorkflowOwnerDsResponse, UpdateBatchTaskResourceGroupResponse, DescribeWorkflowParamDsRequest, DiagnosePlusRequest, DescribeIntegrationStatisticsAgentStatusRequest, DescribeInstanceLogFileRequest, CheckTaskNameExistDsRequest, DescribeTaskLatestRunTimeResponse, ModifyRuleTemplateResponse, DeleteTaskFolderRequest, DescribeTaskReportResponse, GetOfflineDIInstanceListResponse, DescribeBrowsingHistoriesResponse, GetOfflineInstanceListResponse, CreateIntegrationTaskRequest, DescribeRuleGroupExecResultsByPageResponse, DescribeTaskDetailResponse, ModifyDsFolderRequest, GetTestRunTaskInstancesStatusInfoResponse, DescribeDsEventListenerRequest, KillTasksTestRunRequest, ImportDsEventResponse, ModifyTaskFolderResponse, DescribeDsNotSubmitTasksAndCanRunByWorkflowResponse, RemoveWorkflowDsResponse, GetOfflineDIInstanceListRequest, ModifyExecStrategyResponse, DescribeDatasourceRequest, CreateBrowsingHistoryRequest, DescribeTableSchemaInfoResponse, BatchDeleteTasksDsAsyncRequest, DescribeInstanceListResponse, StartIntegrationTaskRequest, DescribeProjectResponse, DescribeDsEventRequest, ModifyTaskInfoDsRequest, StopAdhocTaskResponse, DescribeProjectParamVersionDsRequest, DescribeNewSqlTaskResultResponse, BatchStartIntegrationTasksResponse, DescribeRealTimeTaskSpeedResponse, DescribeFolderWorkflowListRequest, DescribeBaselineInstanceDagResponse, CheckTaskNameExistResponse, DescribeSchedulerRunTimeInstanceCntByStatusRequest, CreateDsFolderRequest, DescribeMonitorsByPageResponse, RenewWorkflowSchedulerInfoDsRequest, DescribeDsEventPublisherListRequest, RunTasksByMultiWorkflowRequest, DescribeBaselinesResponse, SubmitIntegrationTaskResponse, DescribeCodeSearchAuditInfoRequest, DescribeDataSourceWithoutInfoRequest, DescribeInLongAgentVpcListResponse, DescribeDataTableImportProgressRequest, DescribeQualityScoreRequest, GetResourcePathTreeRequest, DescribeChildrenDsRequest, BatchStopTasksNewResponse, DescribeRuleExecDetailResponse, BatchCreateTaskVersionAsyncResponse, DescribeDevelopmentSpaceSupportTypeResponse, RestoreRecycleTaskRequest, DescribeTaskParentRunTimeRequest, DescribePathTreesRequest, ExportDsEventRequest, CreateOpsMakePlanRequest, RunTaskResponse, DescribeDependTasksNewResponse, DescribeIntegrationStatisticsInstanceTrendRequest, DescribeDsFolderTreeResponse, DeleteResourcePathResponse, DescribeTableLineageInfoRequest, DryRunDIOfflineTaskResponse, DescribeBaselinesRequest, ExportProjectParamDsResponse, CreateBrowsingHistoryResponse, ListBatchDetailRequest, ModifyWorkflowInfoResponse, RegisterEventResponse, DeleteTaskOutParamDsRequest, DescribeIntegrationTasksRequest, DescribeEventConsumeTasksResponse, DescribeStreamTaskLogListRequest, DescribeProjectParamDsResponse, MakeUpTasksNewResponse, DescribeRuleDimStatResponse, RestartInLongAgentRequest, DescribeRealTimeTaskSpeedRequest, DescribeDataObjectsResponse, DeleteTaskDsResponse, CreateWorkflowRequest, JudgeResourceFileResponse, DescribeExecutionLogResponse, DescribeFieldBasicInfoResponse, RenameFileResponse, DescribeRuleExecResultsByPageResponse, DeleteProjectParamVersionDsRequest, RegisterDsEventRequest, CheckTaskNameExistRequest, DescribeTemplateDimCountRequest, ModifyIntegrationTaskResponse, DescribeInLongTkeClusterListResponse, GetResourceCosPathRequest, DescribeDataCheckStatRequest, DescribeRuleExecResultsRequest, RegisterDsEventListenerResponse, DescribeDrSonInstanceResponse, DeleteRecycleTaskResponse, DescribeCodeSearchCountResponse, DescribeClusterNamespaceListResponse, CreateInLongAgentResponse, DescribeDataBasesResponse, ModifyWorkflowScheduleRequest, RegisterEventRequest, UploadResourceRequest, BatchDeleteTasksDsAsyncResponse, DescribeRuleGroupsByPageRequest, DescribeDsEventListenerListRequest, ModifyTaskScriptDsResponse, DescribeTopTableStatRequest, DescribeTableLineageResponse, DescribeDataSourceListResponse, UpdateWorkflowOwnerRequest, ExportWorkflowZipResponse, DescribeSchedulerTaskTypeCntResponse, DescribeTaskScriptResponse, DescribeEventListenerTaskRequest, CountOpsInstanceStateRequest, BatchCreateVirtualTaskDsResponse, CheckDuplicateTemplateNameRequest, DescribeEventTypesResponse, CreateResourcePathRequest, BatchModifyOpsOwnersRequest, BatchDeleteOpsTasksRequest, ListBatchJobResponse, DescribeBaselineInstanceDagRequest, DescribeIntegrationStatisticsInstanceTrendResponse, DescribeInstanceLogListRequest, SavePositionsDsRequest, DescribeAllTaskTypeResponse, ModifyTaskLinksRequest, UploadAdvanceRunParamsRequest, DeleteFileRequest, DescribeRuleTemplateResponse, DescribeCustomFunctionVersionListRequest, DescribeTableInfoListRequest, RunForceSucScheduleInstancesResponse, DescribeBaselineAllTaskDagResponse, DescribeDsLatestTaskVersionInfoRequest, DescribeScheduleInstancesResponse, DescribeColumnLineageRequest, RunTasksByMultiWorkflowResponse, DescribeRecycleTaskDetailResponse, DescribeRuleExecLogResponse, KillOpsMakePlanInstancesResponse, DescribeDataTableImportProgressResponse, CreateHiveTableByDDLResponse, DescribeOperateOpsTaskDatasourceTypeRequest, BatchKillIntegrationTaskInstancesResponse, DescribeSqlTaskResultResponse, DeleteResourceResponse, ModifyRuleResponse, DescribeFileVersionsRequest, DescribeBatchTestRunResponse, DescribeAllByFolderNewResponse, KillScheduleInstancesResponse, SubmitPythonTaskRequest, UnlockIntegrationTaskRequest, DescribeWorkflowTaskCountRequest, BatchForceSuccessIntegrationTaskInstancesResponse, CompareDsTaskVersionInfoResponse, DescribeTestRunResponse, DescribeRuleExecStatResponse, DescribeProdWorkflowCanvasInfoDsRequest, SubmitShellTaskResponse, CreateTaskDsResponse, ExportWorkflowXmlResponse, DescribeEventResponse, GenHiveTableDDLSqlRequest, DescribeEventsResponse, BatchStopOpsTasksRequest, RenewWorkflowSchedulerInfoDsResponse, DescribeInstanceLastLogRequest, BatchDeleteTasksNewRequest, SubmitTestRunRequest, CheckDuplicateRuleNameResponse, DescribeSchedulerTaskCntByStatusResponse, DescribeFolderListRequest, DescribeWorkflowParamDsResponse, GetRunSonListDsResponse, DescribeTaskDetailDsResponse, ForceSucScheduleInstancesRequest, DescribeApproveTypeListRequest, SubmitShellTaskRequest, DescribeIntegrationNodeRequest, SetTaskAlarmNewResponse, RenameResourceRequest, CreateCustomFunctionRequest, CreateTaskOutputRegistriesResponse, DescribeDsParentFolderTreeResponse, DescribeLockResponse, DescribeRelatedInstancesResponse, CreateOrUpdateResourceRequest, DescribeDimensionScoreResponse, DescribeInstancesInfoWithTaskInfoRequest, SubmitCustomFunctionRequest, DeleteRuleRequest, BatchCreateTaskVersionDsRequest, DescribeDependencyWorkflowForProjectCloneRequest, DescribeWorkflowByFordIdsResponse, CreateOpsMakePlanResponse, DeleteWorkflowNewResponse, DescribeRuleGroupExecResultsByPageWithoutAuthRequest, HeartBeatResponse, DeleteWorkflowByIdResponse, DescribeCodeDetailRequest, DescribeInstancesResponse, DescribeTableMetaRequest, DescribeBaselineByIdRequest, CreateRuleResponse, DescribeEtlTaskTypeRequest, BatchMakeUpIntegrationTasksRequest, DescribeAllUsedVersionSonRequest, DescribeDatabaseInfoListResponse, DescribeDsEventDetailResponse, ModifyIntegrationNodeRequest, SubmitWorkflowResponse, StopTestRunResponse, DescribeTemplateDimCountResponse, UpdateBatchTaskAdvancedSettingsResponse, DescribeInstanceLogResponse, UpdateDsEventRequest, DescribeWorkflowForProjectCloneResponse, DescribeOpsMakePlanTasksResponse, DescribeRecordListResponse, DescribeColumnLineageResponse, DeleteFolderRequest, DescribeWorkflowListByProjectIdResponse, DescribeEventDetailResponse, AcquireLockRequest, CreateFolderResponse, DescribeQualityScoreTrendResponse, PreviewDataTableCsvResponse, SubmitSqlTaskRequest, FindDependTaskListDsResponse, ReleaseLockResponse, RenameFileRequest, DeleteFileResponse, DescribeCodeSearchAuditInfoV2Request, DescribeOperateOpsTasksResponse, DescribeResourceManagePathTreesRequest, DescribeTasksByPageResponse, ExportFilesRequest, DescribeStandardRuleDetailInfoListRequest, RenameResourceFileRequest, DiagnosePlusResponse, HeartBeatRequest, DescribeTableMetasResponse, DescribeSonInstancesResponse, GetLatestTestRunInfoRequest, DescribeTaskAlarmRegulationsRequest, CreateTaskOutputRegistryRequest, DescribeInfoTransByTypeIdDsResponse, DescribeDependTasksDevDsRequest, CreateCustomFunctionResponse, UpdateEventListenerResponse, ModifyTaskInfoRequest, DeleteTaskOutParamDsResponse, DescribeTableMetaResponse, FindFuzzyTasksDsResponse, FindDependTaskListsDsRequest, DagInstancesRequest, DeleteTaskAlarmRegularRequest, CreateInLongAgentRequest, CreateTaskParamDsResponse, DescribeBelongToRequest, CheckAlarmRegularNameExistRequest, CheckTaskPriorityDsRequest, BatchRunOpsTaskRequest, DescribeTaskDetailDsRequest, DescribeDatabaseMetasResponse, FreezeTasksByWorkflowIdsResponse, RunRerunScheduleInstancesRequest, DescribeTaskParentRunTimeResponse, SubmitPySparkTaskRequest, DescribeTableSchemaInfoRequest, RunRerunScheduleInstancesResponse, DescribeApproveListRequest, CommitRuleGroupTaskResponse, DescribeWorkflowTasksForProjectCloneResponse, BatchStartIntegrationTasksRequest, CreateScriptsImportTasksDsResponse, DescribeTaskBindVirtualTaskRequest, DescribeFileVersionsResponse, DescribeSuccessorOpsTaskInfosRequest, DescribeTaskReportDetailListRequest, DescribeImportableOfflineTaskResponse, DescribeIntegrationVersionNodesInfoResponse, ImportWorkflowZipRequest, UpdateBatchTaskInChargeResponse, DescribeRuleRequest, DescribeCodeSearchAuditInfoResponse, DescribeTableLineageInfoResponse, RenameTaskDsRequest, ReplaceProjectParamVersionDsResponse, ModifyBaselineTaskAlarmStatusRequest, RestartInLongAgentResponse, DescribeIntegrationVersionNodesInfoRequest, DescribeGlobalWorkflowDsRequest, DescribeScheduleInstancesRequest, DescribeBaselineInstanceGanttRequest, UpdateBatchTaskResourceGroupRequest, DeleteLinkResponse, DescribeExecStrategyRequest, CreateHiveTableRequest, DescribeRuleGroupTableResponse, DescribeTaskOutParamDsResponse, DeleteDsEventPublisherRequest, ImportFilesRequest, RenameResourcePathRequest, UpdateBatchTaskDatasourceRequest, FreezeTasksByMultiWorkflowRequest, CreateRuleTemplateRequest, DeleteIntegrationTaskResponse, DescribeRecycleTaskListResponse, ModifyTaskLinksDsRequest, DescribeDatabaseInfoListRequest, DescribeIntegrationTaskResponse, StopIntegrationTaskResponse, DescribeDsTaskVersionInfoRequest, CheckDuplicateTemplateNameResponse, UpdateBatchTaskInChargeRequest, DescribeRuleTemplatesRequest, BatchModifyOwnersNewRequest, UpdateEventListenerRequest, StopBaselineResponse, GetPathTreesRequest, GenHiveTableDDLSqlResponse, DescribeRuleExecStatRequest, BatchCreateIntegrationTaskAlarmsResponse, MoveFileRequest, DescribeEventTypesRequest, DescribeOpsInstanceLogListResponse, DescribeTaskParamDsRequest, DescribeApproveTypeListResponse, BatchSuspendIntegrationTasksResponse, CheckCustomFunctionPremiseRequest, DescribeRuleExecLogRequest, UpdateTaskDsRequest, DescribeBaselineInstanceGanttResponse, BatchRunTasksDsResponse, DescribeTasksByPageRequest, DescribeIntegrationStatisticsResponse, UpdateBatchTaskParamsRequest, DescribeIntegrationNodeResponse, DescribeTokenRequest, DescribeTrendStatResponse, DescribePathTreesResponse, MoveTasksToFolderResponse, DescribeFatherDatasourceInfoDsResponse, EditBaselineRequest, DescribeRuleTemplatesResponse, DescribeTaskTypeByScriptTypeRequest, BatchDeleteTasksDsRequest, DeleteDsEventListenerResponse, FreezeOpsTasksRequest, DeleteRecordListRequest, DescribeRulesResponse, SubmitTaskRequest, DescribeWorkflowByFordIdsRequest, DeleteRecordListResponse, UpdateInLongAgentResponse, DescribeEventCasesRequest, BatchResumeIntegrationTasksResponse, RenewWorkflowDsRequest, UpdateWorkflowOwnerResponse, DescribeDataSourceListRequest, SubmitBatchTestRunResponse, ScriptUsedByOtherTaskDsRequest, DeleteTaskInParamDsResponse, DeleteResourceFileRequest, SaveCustomFunctionRequest, DescribeRuleDataSourcesResponse, ModifyTaskScriptDsRequest, UpdateBatchTaskParameterResponse, DescribeDiagnosticInfoByBaselineIdRequest, DescribeThirdTaskRunLogRequest, AnalyzeDependentTasksRequest, BatchRerunIntegrationTaskInstancesRequest, DescribeDrSonInstanceRequest, DescribeInstanceLogDetailRequest, BatchSuspendIntegrationTasksRequest, DescribeCodeDetailResponse, DeleteCustomFunctionResponse, CreateFileVersionResponse, BatchUpdateTasksDsRequest, ListBatchDetailResponse, DescribeTaskInstanceResponse, DescribeSchedulerInstanceStatusResponse, DescribeThirdTaskRunLogResponse, CreateTaskVersionDsResponse, DescribeProdTasksRequest, ResumeIntegrationTaskResponse, DescribeTaskReportDetailListResponse, GetCosTokenRequest, RenewWorkflowDsResponse, StopTestRunRequest, DescribeRuleGroupResponse, DeleteDataSourcesResponse, DeleteDataSourcesRequest, SubmitSqlTaskResponse, ImportOfflineTaskRequest, RerunInstancesRequest, UpdateBatchTaskDatasourceResponse, DescribeTaskRunHistoryResponse, DescribeBatchOperateTaskResponse, CommitIntegrationTaskRequest, CommitIntegrationTaskResponse, UpdateTaskDsResponse, CompareDsTaskVersionInfoRequest, DeleteResourceFilesRequest, SubmitTaskResponse, ModifyFolderRequest, ModifyApproveStatusResponse, CreateTaskAlarmRegularRequest, QueryWorkflowVersionResponse, DescribeWorkflowCanvasOperatorsResponse, BatchRunTasksDsRequest, DescribeDependOpsTaskListRequest, DescribeInstanceLogsResponse, DescribeDsLatestTaskVersionInfoResponse, DescribeBaselineAllTaskDagRequest, DescribeRuleExecDetailRequest, ScriptUsedByOtherTaskDsResponse, RegisterDsEventPublisherRequest, ModifyTaskScriptResponse, UploadFilesDsRequest, CreateResourceDirectoryResponse, ImportWorkflowXmlResponse, DeleteCustomFunctionRequest, DescribeAllTaskTypeRequest, DescribeWorkflowCanvasOpLogsResponse, DescribeDsEventPublisherListResponse, RerunOpsMakePlanInstancesRequest, DescribeClusterNamespaceListRequest, DescribeChildrenPathTreesRequest, DagInstancesResponse, DescribeAllUsedVersionSonResponse, DescribeTemplateHistoryRequest, FreezeTasksByWorkflowIdsRequest, DescribeCodeSearchInfoV2Response, DescribeOpsMakePlanInstancesRequest, DescribeRuleExecExportResultRequest, DescribeRuleExecResultsByPageRequest, LockIntegrationTaskResponse, DeleteWorkflowNewRequest, DescribeEventRequest, DescribeTaskInstancesRequest, RegisterDsEventPublisherResponse, DescribeDsTaskVersionListRequest, DescribeLockRequest, DescribeDsEventListenerListResponse, DeleteWorkflowByIdRequest, DescribeTableLineageRequest, CreateTaskResponse, CommitRuleGroupExecResultRequest, DescribeDependencyTasksForProjectCloneResponse, CheckTaskNameExistDsResponse, DescribeEventIsAlarmTypesResponse, DescribeStatisticInstanceStatusTrendOpsRequest, DescribeRulesByPageResponse, DescribeIntegrationStatisticsAgentStatusResponse, CommitRuleGroupTaskRequest, CheckIntegrationNodeNameExistsRequest, CommitWorkflowResponse, GetAdvanceRunParamsRequest, DescribeDataTypesRequest, RegisterDsEventListenerRequest, DescribeTokenResponse, ModifyTaskFolderRequest, DescribeEventIsAlarmTypesRequest, GetRunSonListDsRequest, DescribeProdWorkflowCanvasInfoDsResponse, DescribeIntegrationStatisticsTaskStatusTrendRequest, DescribeTaskInParamDsResponse, ModifyTaskLinksResponse, FindFuzzyTasksDsRequest, DescribeWorkflowOpsCanvasInfoRequest, DescribeResourceManagePathTreesResponse, DescribeFunctionTypesRequest, DownloadNewSqlResultResponse, FreezeTasksByMultiWorkflowResponse, SaveCustomFunctionResponse, ModifyDimensionWeightRequest, DescribeSchedulerTaskCntByStatusRequest, CreateHiveTableResponse, CreateIntegrationNodeRequest, ModifyDataSourceResponse, DescribeMonitorsByPageRequest, RerunInstancesResponse, DescribeTaskOutputRegistriesResponse, DescribeProjectParamVersionInfoDsRequest, DeleteTaskDsRequest, FindDependTaskListsDsResponse, RobAndLockIntegrationTaskRequest, CommitExportTaskResponse, CreateRuleRequest, DescribeChildrenPathTreesResponse, DescribeTemplateHistoryResponse, DescribeRuleExecResultsResponse, DescribeDrInstanceScriptContentResponse, TriggerEventResponse, DescribeRuleDataSourcesRequest, DescribeTableQualityDetailsResponse, BatchUpdateTasksDsResponse, DownloadNewSqlResultRequest, RenewWorkflowFolderDsRequest, BatchRunOpsTaskResponse, SubmitCustomFunctionResponse, DescribeRuleTablesByPageResponse, DescribeTasksForProjectCloneRequest, FreezeTasksResponse, DescribeTaskOutParamDsRequest, DescribeOperateOpsTasksRequest, DescribeOfflineTaskTokenRequest, CreateWorkflowResponse, DeleteResourceRequest, RobAndLockIntegrationTaskResponse, DeleteBatchWorkflowDsResponse, DescribeEventListenerTaskResponse, ForceSucInstancesResponse, UpdateDsEventResponse, DescribeRuleGroupTableRequest, DescribeOperateOpsTaskDatasourceRequest, CreateTaskOutputRegistriesRequest, CreateResourcePathResponse, DeleteTaskFolderResponse, DeleteFolderResponse, GetTestRunTaskInstancesStatusInfoRequest, DeleteIntegrationTaskRequest, ModifyExecStrategyRequest, BatchForceSuccessIntegrationTaskInstancesRequest, DescribeTaskByCycleReportRequest, DescribeInstanceLogDetailResponse, DescribeProdTasksResponse, GetIntegrationNodeColumnSchemaRequest, DescribeTableInfoListResponse, MakeUpOpsTasksRequest, DescribeTableBasicInfoRequest, DescribeProjectParamVersionInfoDsResponse, DescribeTaskOutputRegistriesRequest, StopIntegrationTaskRequest, CreateTaskParamDsRequest, DescribeFolderWorkflowListResponse, CreateFolderRequest, DescribeWorkflowCanvasInfoDsRequest, DescribeRulesRequest, DescribeWorkflowExecuteByIdResponse, DescribeRuleResponse, DescribeTaskListByConditionDsResponse, ModifyTaskLinksDsResponse, DescribeQualityScoreResponse, DescribeWorkflowTasksForProjectCloneRequest, FindDependTaskListDsRequest, UploadContentRequest, LockIntegrationTaskRequest, BatchStopIntegrationTasksRequest, DescribeRuleTemplatesByPageRequest, RegisterDsEventResponse, ExportDsEventResponse, DescribeInstanceLastLogResponse, CreateTaskInParamDsRequest, SavePositionsDsResponse, DescribeRecycleTaskListRequest, DescribeOperateOpsTaskDatasourceTypeResponse, GetLatestTestRunInfoResponse, DescribeWorkflowOpsCanvasInfoResponse, BatchDeleteIntegrationTasksResponse, DescribeDataDevelopTaskTypeRequest, DescribeInstanceByCycleRequest, DescribeFolderListResponse, JudgeResourceFileRequest, DescribeRuleExecHistoryResponse, ModifyBaselineAlarmStatusResponse, ModifyFolderResponse, GetIntegrationNodeColumnSchemaResponse, CreatePathResponse, DescribeDataCheckStatResponse, DescribeWorkflowCanvasInfoRequest, DescribeDsKettleServerFolderTreeResponse, DeleteTaskInParamDsRequest, DescribeRuleExecExportResultResponse, DescribeOperateTasksResponse, DescribeTestRunRequest, DescribeInLongAgentTaskListRequest, DescribeTrendStatRequest, ModifyTaskInfoDsResponse, DescribeDsTaskVersionListResponse, BatchRerunIntegrationTaskInstancesResponse, UpdateBatchTaskScheduleRequest, DescribeIntegrationStatisticsRequest, BatchMakeUpIntegrationTasksResponse, CommitExportTaskRequest, DeleteDsEventRequest, JudgeTaskListenEventRequest, BatchDeleteOpsTasksResponse, ExportWorkflowZipRequest, CreateTaskOutParamDsRequest, CopyTaskDsRequest, DescribeTaskAlarmRegulationsResponse, DescribeWorkflowInfoByIdRequest, DescribeDataDevelopTaskTypeResponse, DescribeRuleDimStatRequest, FreezeTasksRequest, MakeUpWorkflowNewResponse, DescribeInstancesInfoWithTaskInfoResponse, DescribeDsTaskVersionInfoResponse, CreateDsFolderResponse, DeleteTaskOutputRegistryRequest, DeleteTaskOutputRegistryResponse, ClearRecycleTaskResponse, DeleteBaselineRequest, GetFileInfoResponse, DescribeCodeSearchInfoResponse, CopyWorkflowDsResponse, RollbackCustomFunctionVersionRequest, KillTasksTestRunResponse, DescribeFathersResponse, DescribeInstanceByCycleReportResponse, DescribeFunctionKindsResponse, RestoreRecycleTaskResponse, DescribeInstanceByCycleResponse, DescribeCodeDetailV2Request, DeleteEventListenerByTaskIdResponse, SubmitPythonTaskResponse, DescribeInstanceLogRequest, DescribeDimensionScoreRequest, SubmitTestRunResponse, DescribeRecordListRequest, DescribeWorkflowTaskCountResponse, DescribeDataObjectsRequest, ModifyRuleGroupSubscriptionRequest, DeleteDsFolderResponse, DescribeDrInstancePageResponse, MoveTasksToFolderRequest, StopAdhocTaskRequest, DescribeScriptsImportTaskTypeRequest, JudgeTaskListenEventResponse, BatchUpdateIntegrationTasksRequest, ModifyTaskNameResponse, DescribeTopTableStatResponse, GetBatchDetailErrorLogRequest, DescribeWorkflowForProjectCloneRequest, RerunOpsMakePlanInstancesResponse, DescribeOpsMakePlansResponse, ModifyWorkflowScheduleResponse, GetFileInfoRequest, ModifyTaskAlarmRegularRequest, DescribeColumnsMetaRequest, CreateProjectParamDsResponse, DescribeDependTaskListsRequest, DescribeEventsRequest, DescribeAllByFolderNewRequest, DescribeEventListenerByTaskIdRequest, DescribeInstanceLogListResponse, DeleteProjectParamDsResponse, DescribeParentTaskRequest, DescribeDependTasksNewRequest, ModifyRuleRequest, FindAllFolderResponse, MakeUpOpsTasksResponse, DescribeInLongAgentListRequest, DescribeCodeDetailV2Response, DescribeDevelopmentSpaceSupportTypeRequest, DescribeScheduleInstanceRequest, BatchDeleteTasksNewResponse, DescribeCodeSearchInfoV2Request, SuspendIntegrationTaskRequest, DownloadSqlResultResponse, DescribeDsParentFolderTreeRequest, RerunScheduleInstancesRequest, DescribeTaskInstancesResponse, RenameResourcePathResponse, DescribeInstanceListRequest, DescribeIntegrationStatisticsRecordsTrendResponse, DescribeTaskLatestRunTimeRequest, BatchCreateTaskVersionDsResponse, ExportProjectParamDsRequest, DescribeDiagnosticInfoByBaselineIdResponse, DescribeTaskInParamDsRequest, DescribeTableQualityDetailsRequest, CreateTaskFolderRequest, BatchCreateIntegrationTaskAlarmsRequest, KillScheduleInstancesRequest, DescribeDsNotSubmitTasksAndCanRunByWorkflowRequest, CheckCustomFunctionPremiseResponse, DescribeFunctionTypesResponse, BatchUpdateIntegrationTasksResponse, DescribeEventDetailRequest, DescribeRuleTemplateRequest, BatchCreateTaskVersionAsyncRequest, BatchModifyOpsOwnersResponse, DescribeTaskByCycleReportResponse, DescribeOpsMakePlanTasksRequest, CreateIntegrationTaskResponse, DescribeIntegrationTasksResponse, DeleteProjectUsersResponse, DescribeRuleGroupSubscriptionRequest, UpdateWorkflowInfoRequest, DescribeInLongAgentListResponse, SubmitIntegrationTaskRequest, DeleteIntegrationNodeResponse, DescribeDataSourceInfoListRequest, DescribeProjectParamDsPageRequest, DescribeRuleGroupExecResultsByPageWithoutAuthResponse, DescribeOperateOpsTaskDatasourceResponse, AcquireLockResponse, RenewWorkflowOwnerDsRequest, CreateTaskFolderResponse, DeleteInLongAgentRequest, DescribeRuleTablesByPageRequest, DescribeEventConsumeTasksRequest, DescribeDataSourceInfoListResponse, MakeUpTasksNewRequest, DescribeAllParamDsRequest, DescribeOpsMakePlansRequest, RenameResourceResponse, BatchDeleteTasksDsResponse, DescribeWorkflowCanvasOpLogsRequest, CheckIntegrationTaskNameExistsResponse, DescribeRuleGroupExecResultsByPageRequest, DescribeRulesByPageRequest, ImportWorkflowZipResponse, ImportWorkflowXmlRequest, DescribeFieldBasicInfoRequest, DescribeStreamTaskLogListResponse, DeleteIntegrationNodeRequest, DescribeAlarmEventsResponse, ModifyIntegrationNodeResponse, CheckTaskPriorityDsResponse, DescribeProjectParamDsRequest, DescribeWorkflowCanvasOperatorsRequest, CreateTaskVersionDsRequest, ModifyDsFolderResponse, ModifyRuleTemplateRequest, DescribeCustomFunctionVersionListResponse, DescribeRuleTemplatesByPageResponse, GetAdvanceRunParamsResponse, DeleteLinkRequest, CreateWorkflowDsRequest, DeleteDsEventPublisherResponse, UploadAdvanceRunParamsResponse, DescribeIntegrationTaskRequest, DescribeParentTaskResponse, GetResourceCosPathResponse, ReplaceProjectParamVersionDsRequest, AnalyzeDependentTasksResponse, CopyWorkflowDsRequest, TriggerDsEventResponse, CreateTaskRequest, UpdateBatchTaskParameterRequest, TriggerDsEventRequest, UpdateBatchTaskParamsResponse, DescribeDependTaskListsResponse, DescribeTaskInstanceReportDetailResponse, SubmitWorkflowRequest, ImportTableDataRequest, DescribeTaskLockStatusResponse, DescribeDsEventDetailRequest, RemoveWorkflowDsRequest, BatchKillIntegrationTaskInstancesRequest, ImportDsEventRequest, DeleteFilePathResponse, DescribeDependTasksDevDsResponse, BatchModifyOwnersNewResponse, CreateTaskOutParamDsResponse, DescribeDsEventPublisherResponse, ModifyTaskInfoResponse, DescribeColumnsMetaResponse, DescribeProjectParamVersionDsResponse, ResumeIntegrationTaskRequest, ModifyApproveStatusRequest, DescribeRealTimeTaskInstanceNodeInfoRequest, DescribeDependencyWorkflowForProjectCloneResponse, DescribeWorkflowListByProjectIdRequest, DescribeAlarmEventsRequest, DeleteProjectParamDsRequest, EditBaselineResponse, DeleteDsEventResponse, DescribeTaskDetailRequest, RegisterEventListenerRequest, CheckIntegrationNodeNameExistsResponse, DescribeFathersRequest, DescribeDrInstancePageRequest, ModifyDimensionWeightResponse, DescribeTableScoreTrendResponse, DescribeExecutionLogRequest, CreateOrUpdateResourceResponse, ModifyTaskScriptRequest, CommitWorkflowRequest, DescribeTableScoreTrendRequest, DescribeTaskByStatusReportRequest, DescribeBaselineInstancesRequest, DescribeRealTimeTaskInstanceNodeInfoResponse, ClearRecycleTaskRequest, DescribeBatchOperateTaskRequest, DescribeTaskReportRequest, DescribeOfflineTaskTokenResponse, KillInstancesResponse, SetTaskAlarmNewRequest, DescribeEventCasesResponse, RerunScheduleInstancesResponse, DescribeOpsInstanceLogListRequest, DescribeDsEventPublisherRequest, CreateDataSourceResponse, DescribeRelatedInstancesRequest, DescribeDrInstanceScriptContentRequest, CreateLinkResponse, DescribeTaskScriptRequest, DescribeRuleHistoryByPageRequest, UnlockIntegrationTaskResponse, RenameTaskDsResponse, DeleteRecycleTaskRequest, GetBatchDetailErrorLogResponse, DescribeAlarmReceiverResponse, DescribeTaskByCycleResponse, DescribeDsKettleServerFolderTreeRequest, DescribeWorkflowCanvasInfoResponse, DescribeTaskParamDsResponse, CreateLinkRequest, DescribeSchedulerInstanceStatusRequest, DescribeCrontabTopNDsResponse, DescribeInLongAgentTaskListResponse, DescribeImportableOfflineTaskRequest, DescribeBrowsingHistoriesRequest, DescribeDependOpsTasksResponse, DeleteRuleTemplateResponse, ExportFilesResponse, DescribeTaskByCycleRequest, ImportProjectParamDsRequest, DescribeRuleGroupsByPageResponse, DescribeIntegrationStatisticsTaskStatusResponse, UploadResourceResponse, DescribeOpsMakePlanInstancesResponse, DescribeInLongTkeClusterListRequest, CreateHiveTableByDDLRequest, DescribeBaselineByIdResponse, DescribeEventListenerByTaskIdResponse, DescribeGlobalWorkflowDsResponse, DescribeOpsWorkflowsResponse, DescribeTaskLockStatusRequest, DescribeCodeSearchCountRequest, CommitRuleGroupExecResultResponse, DescribeTaskBindVirtualTaskResponse, CreateScriptsImportTasksDsRequest, BatchCreateVirtualTaskDsRequest, DescribeRuleGroupRequest, ModifyTaskNameRequest, DeleteProjectUsersRequest, ModifyIntegrationTaskRequest, DescribeWorkflowExecuteByIdRequest, GetLatestAnalyseInfoResponse, DescribeApproveListResponse, DescribeTaskInstanceRequest, ReleaseLockRequest } from "./wedata_models";
/**
 * wedata client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取SQL执行结果
     */
    DescribeSqlTaskResult(req: DescribeSqlTaskResultRequest, cb?: (error: string, rep: DescribeSqlTaskResultResponse) => void): Promise<DescribeSqlTaskResultResponse>;
    /**
     * 资源管理-拉取资源目录树
     */
    GetResourcePathTree(req: GetResourcePathTreeRequest, cb?: (error: string, rep: GetResourcePathTreeResponse) => void): Promise<GetResourcePathTreeResponse>;
    /**
     * 删除集成任务
     */
    DeleteIntegrationTask(req: DeleteIntegrationTaskRequest, cb?: (error: string, rep: DeleteIntegrationTaskResponse) => void): Promise<DeleteIntegrationTaskResponse>;
    /**
     * 批量kill实例
     */
    KillScheduleInstances(req: KillScheduleInstancesRequest, cb?: (error: string, rep: KillScheduleInstancesResponse) => void): Promise<KillScheduleInstancesResponse>;
    /**
     * 实时任务运行指标概览
     */
    DescribeRealTimeTaskMetricOverview(req: DescribeRealTimeTaskMetricOverviewRequest, cb?: (error: string, rep: DescribeRealTimeTaskMetricOverviewResponse) => void): Promise<DescribeRealTimeTaskMetricOverviewResponse>;
    /**
     * 获取实例列表
     */
    DescribeScheduleInstances(req: DescribeScheduleInstancesRequest, cb?: (error: string, rep: DescribeScheduleInstancesResponse) => void): Promise<DescribeScheduleInstancesResponse>;
    /**
     * 仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
     */
    BatchStopOpsTasks(req: BatchStopOpsTasksRequest, cb?: (error: string, rep: BatchStopOpsTasksResponse) => void): Promise<BatchStopOpsTasksResponse>;
    /**
     * 分页查询质量监控组
     */
    DescribeMonitorsByPage(req: DescribeMonitorsByPageRequest, cb?: (error: string, rep: DescribeMonitorsByPageResponse) => void): Promise<DescribeMonitorsByPageResponse>;
    /**
     * 更新规则组执行策略
     */
    ModifyExecStrategy(req: ModifyExecStrategyRequest, cb?: (error: string, rep: ModifyExecStrategyResponse) => void): Promise<ModifyExecStrategyResponse>;
    /**
     * 异步批量创建任务版本
     */
    BatchCreateTaskVersionAsync(req: BatchCreateTaskVersionAsyncRequest, cb?: (error: string, rep: BatchCreateTaskVersionAsyncResponse) => void): Promise<BatchCreateTaskVersionAsyncResponse>;
    /**
     * 查询回收站任务列表
     */
    DescribeRecycleTaskList(req: DescribeRecycleTaskListRequest, cb?: (error: string, rep: DescribeRecycleTaskListResponse) => void): Promise<DescribeRecycleTaskListResponse>;
    /**
     * 获取全局工作流信息，用于跨工作流节点拉取租户所有工作流列表
     */
    DescribeGlobalWorkflowDs(req: DescribeGlobalWorkflowDsRequest, cb?: (error: string, rep: DescribeGlobalWorkflowDsResponse) => void): Promise<DescribeGlobalWorkflowDsResponse>;
    /**
     * 任务运维列表组合条件查询
     */
    DescribeOperateOpsTasks(req: DescribeOperateOpsTasksRequest, cb?: (error: string, rep: DescribeOperateOpsTasksResponse) => void): Promise<DescribeOperateOpsTasksResponse>;
    /**
     * 查询集成节点
     */
    DescribeIntegrationNode(req: DescribeIntegrationNodeRequest, cb?: (error: string, rep: DescribeIntegrationNodeResponse) => void): Promise<DescribeIntegrationNodeResponse>;
    /**
     * 下载SQL执行结果
     */
    DownloadSqlResult(req: DownloadSqlResultRequest, cb?: (error: string, rep: DownloadSqlResultResponse) => void): Promise<DownloadSqlResultResponse>;
    /**
     * 批量修改资源组
     */
    UpdateBatchTaskResourceGroup(req: UpdateBatchTaskResourceGroupRequest, cb?: (error: string, rep: UpdateBatchTaskResourceGroupResponse) => void): Promise<UpdateBatchTaskResourceGroupResponse>;
    /**
     * 删除编排空间工作流
     */
    RemoveWorkflowDs(req: RemoveWorkflowDsRequest, cb?: (error: string, rep: RemoveWorkflowDsResponse) => void): Promise<RemoveWorkflowDsResponse>;
    /**
     * 获取第三方运行日志
     */
    DescribeThirdTaskRunLog(req: DescribeThirdTaskRunLogRequest, cb?: (error: string, rep: DescribeThirdTaskRunLogResponse) => void): Promise<DescribeThirdTaskRunLogResponse>;
    /**
     * 查询事件监听者信息
     */
    DescribeDsEventListener(req: DescribeDsEventListenerRequest, cb?: (error: string, rep: DescribeDsEventListenerResponse) => void): Promise<DescribeDsEventListenerResponse>;
    /**
     * 获取协同编辑资源锁
     */
    DescribeLock(req: DescribeLockRequest, cb?: (error: string, rep: DescribeLockResponse) => void): Promise<DescribeLockResponse>;
    /**
     * 创建用户自定义函数
     */
    CreateCustomFunction(req: CreateCustomFunctionRequest, cb?: (error: string, rep: CreateCustomFunctionResponse) => void): Promise<CreateCustomFunctionResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
     */
    BatchStopTasksNew(req: BatchStopTasksNewRequest, cb?: (error: string, rep: BatchStopTasksNewResponse) => void): Promise<BatchStopTasksNewResponse>;
    /**
     * 批量提交etl测试运行任务
     */
    SubmitBatchTestRun(req: SubmitBatchTestRunRequest, cb?: (error: string, rep: SubmitBatchTestRunResponse) => void): Promise<SubmitBatchTestRunResponse>;
    /**
     * 事件管理-导入事件
     */
    ImportDsEvent(req: ImportDsEventRequest, cb?: (error: string, rep: ImportDsEventResponse) => void): Promise<ImportDsEventResponse>;
    /**
     * 删除项目参数
     */
    DeleteProjectParamDs(req: DeleteProjectParamDsRequest, cb?: (error: string, rep: DeleteProjectParamDsResponse) => void): Promise<DeleteProjectParamDsResponse>;
    /**
     * 根据项目id 获取项目下所有工作流列表
     */
    DescribeWorkflowListByProjectId(req: DescribeWorkflowListByProjectIdRequest, cb?: (error: string, rep: DescribeWorkflowListByProjectIdResponse) => void): Promise<DescribeWorkflowListByProjectIdResponse>;
    /**
     * 更新任务Ds
     */
    UpdateTaskDs(req: UpdateTaskDsRequest, cb?: (error: string, rep: UpdateTaskDsResponse) => void): Promise<UpdateTaskDsResponse>;
    /**
     * 编排空间-根据项目名称和任务名称模糊查询所有任务
     */
    FindFuzzyTasksDs(req: FindFuzzyTasksDsRequest, cb?: (error: string, rep: FindFuzzyTasksDsResponse) => void): Promise<FindFuzzyTasksDsResponse>;
    /**
     * 全局搜索根据条件搜索代码
     */
    DescribeCodeSearchInfoV2(req: DescribeCodeSearchInfoV2Request, cb?: (error: string, rep: DescribeCodeSearchInfoV2Response) => void): Promise<DescribeCodeSearchInfoV2Response>;
    /**
     * 更新集成任务
     */
    ModifyIntegrationTask(req: ModifyIntegrationTaskRequest, cb?: (error: string, rep: ModifyIntegrationTaskResponse) => void): Promise<ModifyIntegrationTaskResponse>;
    /**
     * 质量报告-质量评分
     */
    DescribeQualityScore(req: DescribeQualityScoreRequest, cb?: (error: string, rep: DescribeQualityScoreResponse) => void): Promise<DescribeQualityScoreResponse>;
    /**
     * 获取cos token
     */
    GetCosToken(req: GetCosTokenRequest, cb?: (error: string, rep: GetCosTokenResponse) => void): Promise<GetCosTokenResponse>;
    /**
     * 获取指定任务产出登记列表
     */
    DescribeTaskOutputRegistries(req: DescribeTaskOutputRegistriesRequest, cb?: (error: string, rep: DescribeTaskOutputRegistriesResponse) => void): Promise<DescribeTaskOutputRegistriesResponse>;
    /**
     * 查询全量函数
     */
    DescribeOrganizationalFunctions(req: DescribeOrganizationalFunctionsRequest, cb?: (error: string, rep: DescribeOrganizationalFunctionsResponse) => void): Promise<DescribeOrganizationalFunctionsResponse>;
    /**
     * 查询项目全局参数
     */
    DescribeProjectParamDs(req: DescribeProjectParamDsRequest, cb?: (error: string, rep: DescribeProjectParamDsResponse) => void): Promise<DescribeProjectParamDsResponse>;
    /**
     * 更新工作流
     */
    RenewWorkflowDs(req: RenewWorkflowDsRequest, cb?: (error: string, rep: RenewWorkflowDsResponse) => void): Promise<RenewWorkflowDsResponse>;
    /**
     * 获取审批分类列表
     */
    DescribeApproveTypeList(req: DescribeApproveTypeListRequest, cb?: (error: string, rep: DescribeApproveTypeListResponse) => void): Promise<DescribeApproveTypeListResponse>;
    /**
     * 查询模板详情
     */
    DescribeRuleTemplate(req: DescribeRuleTemplateRequest, cb?: (error: string, rep: DescribeRuleTemplateResponse) => void): Promise<DescribeRuleTemplateResponse>;
    /**
     * 注册事件发布者
     */
    RegisterDsEventPublisher(req: RegisterDsEventPublisherRequest, cb?: (error: string, rep: RegisterDsEventPublisherResponse) => void): Promise<RegisterDsEventPublisherResponse>;
    /**
     * 任务批量补录，调度状态任务才可以补录；
     */
    MakeUpOpsTasks(req: MakeUpOpsTasksRequest, cb?: (error: string, rep: MakeUpOpsTasksResponse) => void): Promise<MakeUpOpsTasksResponse>;
    /**
     * 获取数据同步任务类型
     */
    DescribeEtlTaskType(req?: DescribeEtlTaskTypeRequest, cb?: (error: string, rep: DescribeEtlTaskTypeResponse) => void): Promise<DescribeEtlTaskTypeResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
    DescribeDataSourceList(req: DescribeDataSourceListRequest, cb?: (error: string, rep: DescribeDataSourceListResponse) => void): Promise<DescribeDataSourceListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     */
    SetTaskAlarmNew(req: SetTaskAlarmNewRequest, cb?: (error: string, rep: SetTaskAlarmNewResponse) => void): Promise<SetTaskAlarmNewResponse>;
    /**
     * 查询事件类型列表
     */
    DescribeEventTypes(req?: DescribeEventTypesRequest, cb?: (error: string, rep: DescribeEventTypesResponse) => void): Promise<DescribeEventTypesResponse>;
    /**
     * 工作流任务信息查询-项目克隆使用
     */
    DescribeWorkflowTasksForProjectClone(req: DescribeWorkflowTasksForProjectCloneRequest, cb?: (error: string, rep: DescribeWorkflowTasksForProjectCloneResponse) => void): Promise<DescribeWorkflowTasksForProjectCloneResponse>;
    /**
     * 重命名任务（任务编辑）
     */
    ModifyTaskName(req: ModifyTaskNameRequest, cb?: (error: string, rep: ModifyTaskNameResponse) => void): Promise<ModifyTaskNameResponse>;
    /**
     * 即席分析提交数据集成任务
     */
    SubmitIntegrationTask(req: SubmitIntegrationTaskRequest, cb?: (error: string, rep: SubmitIntegrationTaskResponse) => void): Promise<SubmitIntegrationTaskResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
    DescribeDatasource(req: DescribeDatasourceRequest, cb?: (error: string, rep: DescribeDatasourceResponse) => void): Promise<DescribeDatasourceResponse>;
    /**
     * 更新采集器
     */
    UpdateInLongAgent(req: UpdateInLongAgentRequest, cb?: (error: string, rep: UpdateInLongAgentResponse) => void): Promise<UpdateInLongAgentResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流调度
     */
    ModifyWorkflowSchedule(req: ModifyWorkflowScheduleRequest, cb?: (error: string, rep: ModifyWorkflowScheduleResponse) => void): Promise<ModifyWorkflowScheduleResponse>;
    /**
     * 上游依赖自动解析
     */
    AnalyzeDependentTasks(req: AnalyzeDependentTasksRequest, cb?: (error: string, rep: AnalyzeDependentTasksResponse) => void): Promise<AnalyzeDependentTasksResponse>;
    /**
     * 更新质量规则接口
     */
    ModifyRule(req: ModifyRuleRequest, cb?: (error: string, rep: ModifyRuleResponse) => void): Promise<ModifyRuleResponse>;
    /**
     * 创建基线
     */
    CreateBaseline(req: CreateBaselineRequest, cb?: (error: string, rep: CreateBaselineResponse) => void): Promise<CreateBaselineResponse>;
    /**
     * 查询项目全局参数
     */
    DescribeProjectParamDsPage(req: DescribeProjectParamDsPageRequest, cb?: (error: string, rep: DescribeProjectParamDsPageResponse) => void): Promise<DescribeProjectParamDsPageResponse>;
    /**
     * 对比任务版本
     */
    CompareDsTaskVersionInfo(req: CompareDsTaskVersionInfoRequest, cb?: (error: string, rep: CompareDsTaskVersionInfoResponse) => void): Promise<CompareDsTaskVersionInfoResponse>;
    /**
     * 查询集成任务列表
     */
    DescribeIntegrationTasks(req: DescribeIntegrationTasksRequest, cb?: (error: string, rep: DescribeIntegrationTasksResponse) => void): Promise<DescribeIntegrationTasksResponse>;
    /**
     * 下载SQL执行结果
     */
    DownloadNewSqlResult(req: DownloadNewSqlResultRequest, cb?: (error: string, rep: DownloadNewSqlResultResponse) => void): Promise<DownloadNewSqlResultResponse>;
    /**
     * 查询依赖工作流信息查询-项目克隆使用
     */
    DescribeDependencyWorkflowForProjectClone(req: DescribeDependencyWorkflowForProjectCloneRequest, cb?: (error: string, rep: DescribeDependencyWorkflowForProjectCloneResponse) => void): Promise<DescribeDependencyWorkflowForProjectCloneResponse>;
    /**
     * 批量更新集成任务（暂时仅支持批量更新责任人）
     */
    BatchUpdateIntegrationTasks(req: BatchUpdateIntegrationTasksRequest, cb?: (error: string, rep: BatchUpdateIntegrationTasksResponse) => void): Promise<BatchUpdateIntegrationTasksResponse>;
    /**
     * 批量修改责任人
     */
    UpdateBatchTaskInCharge(req: UpdateBatchTaskInChargeRequest, cb?: (error: string, rep: UpdateBatchTaskInChargeResponse) => void): Promise<UpdateBatchTaskInChargeResponse>;
    /**
     * 批量更新工作流下任务责任人
     */
    RenewWorkflowOwnerDs(req: RenewWorkflowOwnerDsRequest, cb?: (error: string, rep: RenewWorkflowOwnerDsResponse) => void): Promise<RenewWorkflowOwnerDsResponse>;
    /**
     * 任务运维-查询生产态任务数据源类型列表
     */
    DescribeOperateOpsTaskDatasourceType(req: DescribeOperateOpsTaskDatasourceTypeRequest, cb?: (error: string, rep: DescribeOperateOpsTaskDatasourceTypeResponse) => void): Promise<DescribeOperateOpsTaskDatasourceTypeResponse>;
    /**
     * 获取数据库信息
     */
    DescribeDatabaseInfoList(req: DescribeDatabaseInfoListRequest, cb?: (error: string, rep: DescribeDatabaseInfoListResponse) => void): Promise<DescribeDatabaseInfoListResponse>;
    /**
     * 根据层级查找上/下游任务节点
     */
    DescribeDependOpsTasks(req: DescribeDependOpsTasksRequest, cb?: (error: string, rep: DescribeDependOpsTasksResponse) => void): Promise<DescribeDependOpsTasksResponse>;
    /**
     * 规则组执行结果分页查询接口不带鉴权
     */
    DescribeRuleGroupExecResultsByPageWithoutAuth(req: DescribeRuleGroupExecResultsByPageWithoutAuthRequest, cb?: (error: string, rep: DescribeRuleGroupExecResultsByPageWithoutAuthResponse) => void): Promise<DescribeRuleGroupExecResultsByPageWithoutAuthResponse>;
    /**
     * 删除事件监听者
     */
    DeleteDsEventListener(req: DeleteDsEventListenerRequest, cb?: (error: string, rep: DeleteDsEventListenerResponse) => void): Promise<DeleteDsEventListenerResponse>;
    /**
     * 获取工作流运行任务下游Ds
     */
    GetRunSonListDs(req: GetRunSonListDsRequest, cb?: (error: string, rep: GetRunSonListDsResponse) => void): Promise<GetRunSonListDsResponse>;
    /**
     * 智能运维事件查询列表
     */
    DescribeEvents(req: DescribeEventsRequest, cb?: (error: string, rep: DescribeEventsResponse) => void): Promise<DescribeEventsResponse>;
    /**
     * 即席分析终止任务接口
     */
    StopAdhocTask(req: StopAdhocTaskRequest, cb?: (error: string, rep: StopAdhocTaskResponse) => void): Promise<StopAdhocTaskResponse>;
    /**
     * 根据项目ID和事件名称查看事件详情
     */
    DescribeEvent(req: DescribeEventRequest, cb?: (error: string, rep: DescribeEventResponse) => void): Promise<DescribeEventResponse>;
    /**
     * 查询表得分趋势
     */
    DescribeTableScoreTrend(req: DescribeTableScoreTrendRequest, cb?: (error: string, rep: DescribeTableScoreTrendResponse) => void): Promise<DescribeTableScoreTrendResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除数据源
     */
    DeleteDataSources(req: DeleteDataSourcesRequest, cb?: (error: string, rep: DeleteDataSourcesResponse) => void): Promise<DeleteDataSourcesResponse>;
    /**
     * 获取调试任务实例状态信息
     */
    GetTestRunTaskInstancesStatusInfo(req: GetTestRunTaskInstancesStatusInfoRequest, cb?: (error: string, rep: GetTestRunTaskInstancesStatusInfoResponse) => void): Promise<GetTestRunTaskInstancesStatusInfoResponse>;
    /**
     * 批量操作任务列表
     */
    DescribeBatchOperateTask(req: DescribeBatchOperateTaskRequest, cb?: (error: string, rep: DescribeBatchOperateTaskResponse) => void): Promise<DescribeBatchOperateTaskResponse>;
    /**
     * 删除质量规则接口
     */
    DeleteRule(req: DeleteRuleRequest, cb?: (error: string, rep: DeleteRuleResponse) => void): Promise<DeleteRuleResponse>;
    /**
     * 判断集成任务名称是否存在
     */
    CheckIntegrationTaskNameExists(req: CheckIntegrationTaskNameExistsRequest, cb?: (error: string, rep: CheckIntegrationTaskNameExistsResponse) => void): Promise<CheckIntegrationTaskNameExistsResponse>;
    /**
     * 获取字段类型列表
     */
    DescribeDataTypes(req: DescribeDataTypesRequest, cb?: (error: string, rep: DescribeDataTypesResponse) => void): Promise<DescribeDataTypesResponse>;
    /**
     * 获取离线任务实例列表(新)
     */
    GetOfflineDIInstanceList(req: GetOfflineDIInstanceListRequest, cb?: (error: string, rep: GetOfflineDIInstanceListResponse) => void): Promise<GetOfflineDIInstanceListResponse>;
    /**
     * 事件是否告警过滤条件
     */
    DescribeEventIsAlarmTypes(req?: DescribeEventIsAlarmTypesRequest, cb?: (error: string, rep: DescribeEventIsAlarmTypesResponse) => void): Promise<DescribeEventIsAlarmTypesResponse>;
    /**
     * 查找全部的文件夹
     */
    FindAllFolder(req: FindAllFolderRequest, cb?: (error: string, rep: FindAllFolderResponse) => void): Promise<FindAllFolderResponse>;
    /**
     * 批量导入文件
     */
    ImportFiles(req: ImportFilesRequest, cb?: (error: string, rep: ImportFilesResponse) => void): Promise<ImportFilesResponse>;
    /**
     * 查询数据来源列表
     */
    DescribeDataBases(req: DescribeDataBasesRequest, cb?: (error: string, rep: DescribeDataBasesResponse) => void): Promise<DescribeDataBasesResponse>;
    /**
     * 获取任务最新版本
     */
    DescribeDsLatestTaskVersionInfo(req: DescribeDsLatestTaskVersionInfoRequest, cb?: (error: string, rep: DescribeDsLatestTaskVersionInfoResponse) => void): Promise<DescribeDsLatestTaskVersionInfoResponse>;
    /**
     * 查询规则详情
     */
    DescribeRule(req: DescribeRuleRequest, cb?: (error: string, rep: DescribeRuleResponse) => void): Promise<DescribeRuleResponse>;
    /**
     * 数据质量概览页面规则运行情况接口
     */
    DescribeRuleExecStat(req: DescribeRuleExecStatRequest, cb?: (error: string, rep: DescribeRuleExecStatResponse) => void): Promise<DescribeRuleExecStatResponse>;
    /**
     * 删除任务告警规则
     */
    DeleteTaskAlarmRegular(req: DeleteTaskAlarmRegularRequest, cb?: (error: string, rep: DeleteTaskAlarmRegularResponse) => void): Promise<DeleteTaskAlarmRegularResponse>;
    /**
     * 资源管理-删除资源文件
     */
    DeleteResourceFile(req: DeleteResourceFileRequest, cb?: (error: string, rep: DeleteResourceFileResponse) => void): Promise<DeleteResourceFileResponse>;
    /**
     * 过滤条件】 {模版名称Name,支持模糊匹配} {模版类型type，1.系统模版 2.自定义模版} {质量检测维度QualityDims, 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性} 【排序字段】 { 引用数排序类型CitationOrderType，根据引用数量排序 ASC DESC}
     */
    DescribeRuleTemplatesByPage(req: DescribeRuleTemplatesByPageRequest, cb?: (error: string, rep: DescribeRuleTemplatesByPageResponse) => void): Promise<DescribeRuleTemplatesByPageResponse>;
    /**
     * 拉取dag实例
     */
    DagInstances(req: DagInstancesRequest, cb?: (error: string, rep: DagInstancesResponse) => void): Promise<DagInstancesResponse>;
    /**
     * 事件管理-查询事件关联任务
     */
    DescribeEventListenerTask(req: DescribeEventListenerTaskRequest, cb?: (error: string, rep: DescribeEventListenerTaskResponse) => void): Promise<DescribeEventListenerTaskResponse>;
    /**
     * 保存高级运行用户自定义参数
     */
    UploadAdvanceRunParams(req: UploadAdvanceRunParamsRequest, cb?: (error: string, rep: UploadAdvanceRunParamsResponse) => void): Promise<UploadAdvanceRunParamsResponse>;
    /**
     * 查询规则组执行策略
     */
    DescribeExecStrategy(req: DescribeExecStrategyRequest, cb?: (error: string, rep: DescribeExecStrategyResponse) => void): Promise<DescribeExecStrategyResponse>;
    /**
     * 实例状态周期增长趋势
     */
    DescribeInstanceByCycleReport(req: DescribeInstanceByCycleReportRequest, cb?: (error: string, rep: DescribeInstanceByCycleReportResponse) => void): Promise<DescribeInstanceByCycleReportResponse>;
    /**
     * 获取数据表导入状态
     */
    DescribeDataTableImportProgress(req: DescribeDataTableImportProgressRequest, cb?: (error: string, rep: DescribeDataTableImportProgressResponse) => void): Promise<DescribeDataTableImportProgressResponse>;
    /**
     * 创建工作流
     */
    CreateWorkflowDs(req: CreateWorkflowDsRequest, cb?: (error: string, rep: CreateWorkflowDsResponse) => void): Promise<CreateWorkflowDsResponse>;
    /**
     * 查询基线实例DAG
     */
    DescribeBaselineInstanceDag(req: DescribeBaselineInstanceDagRequest, cb?: (error: string, rep: DescribeBaselineInstanceDagResponse) => void): Promise<DescribeBaselineInstanceDagResponse>;
    /**
     * 查询任务父依赖
     */
    DescribeParentTask(req: DescribeParentTaskRequest, cb?: (error: string, rep: DescribeParentTaskResponse) => void): Promise<DescribeParentTaskResponse>;
    /**
     * 列出字段血缘信息
     */
    DescribeColumnLineage(req: DescribeColumnLineageRequest, cb?: (error: string, rep: DescribeColumnLineageResponse) => void): Promise<DescribeColumnLineageResponse>;
    /**
     * 复制任务Ds
     */
    CopyTaskDs(req: CopyTaskDsRequest, cb?: (error: string, rep: CopyTaskDsResponse) => void): Promise<CopyTaskDsResponse>;
    /**
     * 规则组执行结果分页查询接口
     */
    DescribeRuleGroupExecResultsByPage(req: DescribeRuleGroupExecResultsByPageRequest, cb?: (error: string, rep: DescribeRuleGroupExecResultsByPageResponse) => void): Promise<DescribeRuleGroupExecResultsByPageResponse>;
    /**
     * 资源管理删除资源
     */
    DeleteResource(req: DeleteResourceRequest, cb?: (error: string, rep: DeleteResourceResponse) => void): Promise<DeleteResourceResponse>;
    /**
     * 按起止日期统计离线任务的所有实例的运行指标总和
     */
    DescribeTaskReport(req: DescribeTaskReportRequest, cb?: (error: string, rep: DescribeTaskReportResponse) => void): Promise<DescribeTaskReportResponse>;
    /**
     * 获取工作流调度信息
     */
    DescribeWorkflowSchedulerInfoDs(req: DescribeWorkflowSchedulerInfoDsRequest, cb?: (error: string, rep: DescribeWorkflowSchedulerInfoDsResponse) => void): Promise<DescribeWorkflowSchedulerInfoDsResponse>;
    /**
     * 更新任务Ds
     */
    ModifyTaskInfoDs(req: ModifyTaskInfoDsRequest, cb?: (error: string, rep: ModifyTaskInfoDsResponse) => void): Promise<ModifyTaskInfoDsResponse>;
    /**
     * 数据集成大屏同步条数统计趋势
     */
    DescribeIntegrationStatisticsRecordsTrend(req: DescribeIntegrationStatisticsRecordsTrendRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsRecordsTrendResponse) => void): Promise<DescribeIntegrationStatisticsRecordsTrendResponse>;
    /**
     * 智能运维-批量删除任务
     */
    BatchDeleteOpsTasks(req: BatchDeleteOpsTasksRequest, cb?: (error: string, rep: BatchDeleteOpsTasksResponse) => void): Promise<BatchDeleteOpsTasksResponse>;
    /**
     * 提交规则组运行任务接口
     */
    CommitRuleGroupTask(req: CommitRuleGroupTaskRequest, cb?: (error: string, rep: CommitRuleGroupTaskResponse) => void): Promise<CommitRuleGroupTaskResponse>;
    /**
     * 根据条件分页查询补录计划
     */
    DescribeOpsMakePlans(req: DescribeOpsMakePlansRequest, cb?: (error: string, rep: DescribeOpsMakePlansResponse) => void): Promise<DescribeOpsMakePlansResponse>;
    /**
     * 检查规则模板名称是否重复
     */
    CheckDuplicateTemplateName(req: CheckDuplicateTemplateNameRequest, cb?: (error: string, rep: CheckDuplicateTemplateNameResponse) => void): Promise<CheckDuplicateTemplateNameResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
    SubmitTask(req: SubmitTaskRequest, cb?: (error: string, rep: SubmitTaskResponse) => void): Promise<SubmitTaskResponse>;
    /**
     * 批量保存任务位置
     */
    SavePositionsDs(req: SavePositionsDsRequest, cb?: (error: string, rep: SavePositionsDsResponse) => void): Promise<SavePositionsDsResponse>;
    /**
     * 获取数据源信息-数据源分页列表
     */
    DescribeDataSourceInfoList(req: DescribeDataSourceInfoListRequest, cb?: (error: string, rep: DescribeDataSourceInfoListResponse) => void): Promise<DescribeDataSourceInfoListResponse>;
    /**
     * 查询任务具体详情Ds
     */
    DescribeTaskDetailDs(req: DescribeTaskDetailDsRequest, cb?: (error: string, rep: DescribeTaskDetailDsResponse) => void): Promise<DescribeTaskDetailDsResponse>;
    /**
     * 更新规则组订阅信息
     */
    ModifyRuleGroupSubscription(req: ModifyRuleGroupSubscriptionRequest, cb?: (error: string, rep: ModifyRuleGroupSubscriptionResponse) => void): Promise<ModifyRuleGroupSubscriptionResponse>;
    /**
     * 锁定集成任务
     */
    LockIntegrationTask(req: LockIntegrationTaskRequest, cb?: (error: string, rep: LockIntegrationTaskResponse) => void): Promise<LockIntegrationTaskResponse>;
    /**
     * RenameTaskDs
     */
    RenameTaskDs(req: RenameTaskDsRequest, cb?: (error: string, rep: RenameTaskDsResponse) => void): Promise<RenameTaskDsResponse>;
    /**
     * 【项目克隆任务模式】依赖任务信息查询
     */
    DescribeDependencyTasksForProjectClone(req: DescribeDependencyTasksForProjectCloneRequest, cb?: (error: string, rep: DescribeDependencyTasksForProjectCloneResponse) => void): Promise<DescribeDependencyTasksForProjectCloneResponse>;
    /**
     * 资源管理-判断资源文件是否存在
     */
    JudgeResourceFile(req: JudgeResourceFileRequest, cb?: (error: string, rep: JudgeResourceFileResponse) => void): Promise<JudgeResourceFileResponse>;
    /**
     * 数据集成大屏概览
     */
    DescribeIntegrationStatistics(req: DescribeIntegrationStatisticsRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsResponse) => void): Promise<DescribeIntegrationStatisticsResponse>;
    /**
     * 数据质量概览页面趋势变化接口
     */
    DescribeTrendStat(req: DescribeTrendStatRequest, cb?: (error: string, rep: DescribeTrendStatResponse) => void): Promise<DescribeTrendStatResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量修改任务责任人
     */
    BatchModifyOwnersNew(req: BatchModifyOwnersNewRequest, cb?: (error: string, rep: BatchModifyOwnersNewResponse) => void): Promise<BatchModifyOwnersNewResponse>;
    /**
     * 批量拉取下游依赖的任务列表Ds
     */
    FindDependTaskListsDs(req: FindDependTaskListsDsRequest, cb?: (error: string, rep: FindDependTaskListsDsResponse) => void): Promise<FindDependTaskListsDsResponse>;
    /**
     * 查询可导入的集成任务
     */
    DescribeImportableOfflineTask(req: DescribeImportableOfflineTaskRequest, cb?: (error: string, rep: DescribeImportableOfflineTaskResponse) => void): Promise<DescribeImportableOfflineTaskResponse>;
    /**
     * 停止试运行任务（多个）
     */
    KillTasksTestRun(req: KillTasksTestRunRequest, cb?: (error: string, rep: KillTasksTestRunResponse) => void): Promise<KillTasksTestRunResponse>;
    /**
     * 统计任务实例状态
     */
    CountOpsInstanceState(req: CountOpsInstanceStateRequest, cb?: (error: string, rep: CountOpsInstanceStateResponse) => void): Promise<CountOpsInstanceStateResponse>;
    /**
     * 检查规则名称是否重复
     */
    CheckDuplicateRuleName(req: CheckDuplicateRuleNameRequest, cb?: (error: string, rep: CheckDuplicateRuleNameResponse) => void): Promise<CheckDuplicateRuleNameResponse>;
    /**
     * 删除事件发布者
     */
    DeleteDsEventPublisher(req: DeleteDsEventPublisherRequest, cb?: (error: string, rep: DeleteDsEventPublisherResponse) => void): Promise<DeleteDsEventPublisherResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除文件夹
     */
    DeleteFolder(req: DeleteFolderRequest, cb?: (error: string, rep: DeleteFolderResponse) => void): Promise<DeleteFolderResponse>;
    /**
     * 任务状态周期增长趋势
     */
    DescribeTaskByCycleReport(req: DescribeTaskByCycleReportRequest, cb?: (error: string, rep: DescribeTaskByCycleReportResponse) => void): Promise<DescribeTaskByCycleReportResponse>;
    /**
     * 数据质量的概览页面数据监测情况接口
     */
    DescribeDataCheckStat(req: DescribeDataCheckStatRequest, cb?: (error: string, rep: DescribeDataCheckStatResponse) => void): Promise<DescribeDataCheckStatResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
任务批量补录，调度状态任务才可以补录；



     */
    MakeUpTasksNew(req: MakeUpTasksNewRequest, cb?: (error: string, rep: MakeUpTasksNewResponse) => void): Promise<MakeUpTasksNewResponse>;
    /**
     * 获取工作流画布信息
     */
    DescribeProdWorkflowCanvasInfoDs(req: DescribeProdWorkflowCanvasInfoDsRequest, cb?: (error: string, rep: DescribeProdWorkflowCanvasInfoDsResponse) => void): Promise<DescribeProdWorkflowCanvasInfoDsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量终止操作
     */
    KillInstances(req: KillInstancesRequest, cb?: (error: string, rep: KillInstancesResponse) => void): Promise<KillInstancesResponse>;
    /**
     * 终止etl测试运行任务
     */
    StopTestRun(req: StopTestRunRequest, cb?: (error: string, rep: StopTestRunResponse) => void): Promise<StopTestRunResponse>;
    /**
     * 创建hive表，返回表名称
     */
    CreateHiveTableByDDL(req: CreateHiveTableByDDLRequest, cb?: (error: string, rep: CreateHiveTableByDDLResponse) => void): Promise<CreateHiveTableByDDLResponse>;
    /**
     * 建hive表
     */
    CreateHiveTable(req: CreateHiveTableRequest, cb?: (error: string, rep: CreateHiveTableResponse) => void): Promise<CreateHiveTableResponse>;
    /**
     * 获取数据标准规则详情
     */
    DescribeStandardRuleDetailInfoList(req: DescribeStandardRuleDetailInfoListRequest, cb?: (error: string, rep: DescribeStandardRuleDetailInfoListResponse) => void): Promise<DescribeStandardRuleDetailInfoListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
基于多个工作流进行批量冻结任务操作
     */
    FreezeTasksByMultiWorkflow(req: FreezeTasksByMultiWorkflowRequest, cb?: (error: string, rep: FreezeTasksByMultiWorkflowResponse) => void): Promise<FreezeTasksByMultiWorkflowResponse>;
    /**
     * 获取批量操作错误日志
     */
    GetBatchDetailErrorLog(req: GetBatchDetailErrorLogRequest, cb?: (error: string, rep: GetBatchDetailErrorLogResponse) => void): Promise<GetBatchDetailErrorLogResponse>;
    /**
     * 元数据模型-字段基础信息查询接口
     */
    DescribeFieldBasicInfo(req: DescribeFieldBasicInfoRequest, cb?: (error: string, rep: DescribeFieldBasicInfoResponse) => void): Promise<DescribeFieldBasicInfoResponse>;
    /**
     * 工作流版本提交
     */
    CommitWorkflow(req: CommitWorkflowRequest, cb?: (error: string, rep: CommitWorkflowResponse) => void): Promise<CommitWorkflowResponse>;
    /**
     * 查询父目录树，用于工作流、任务定位
     */
    DescribeDsParentFolderTree(req: DescribeDsParentFolderTreeRequest, cb?: (error: string, rep: DescribeDsParentFolderTreeResponse) => void): Promise<DescribeDsParentFolderTreeResponse>;
    /**
     * 工作流导入（ZIP）
     */
    ImportWorkflowZip(req: ImportWorkflowZipRequest, cb?: (error: string, rep: ImportWorkflowZipResponse) => void): Promise<ImportWorkflowZipResponse>;
    /**
     * 重命名文件
     */
    RenameFile(req: RenameFileRequest, cb?: (error: string, rep: RenameFileResponse) => void): Promise<RenameFileResponse>;
    /**
     * 数据集成大屏采集器状态分布统计
     */
    DescribeIntegrationStatisticsAgentStatus(req: DescribeIntegrationStatisticsAgentStatusRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsAgentStatusResponse) => void): Promise<DescribeIntegrationStatisticsAgentStatusResponse>;
    /**
     * 提交基线
     */
    StopBaseline(req: StopBaselineRequest, cb?: (error: string, rep: StopBaselineResponse) => void): Promise<StopBaselineResponse>;
    /**
     * 离线任务实例运行日志列表
     */
    DescribeInstanceLogList(req: DescribeInstanceLogListRequest, cb?: (error: string, rep: DescribeInstanceLogListResponse) => void): Promise<DescribeInstanceLogListResponse>;
    /**
     * 创建任务版本
     */
    CreateTaskVersionDs(req: CreateTaskVersionDsRequest, cb?: (error: string, rep: CreateTaskVersionDsResponse) => void): Promise<CreateTaskVersionDsResponse>;
    /**
     * 批量修改任务责任人
     */
    BatchModifyOpsOwners(req: BatchModifyOpsOwnersRequest, cb?: (error: string, rep: BatchModifyOpsOwnersResponse) => void): Promise<BatchModifyOpsOwnersResponse>;
    /**
     * 设置任务输入参数
     */
    CreateTaskInParamDs(req: CreateTaskInParamDsRequest, cb?: (error: string, rep: CreateTaskInParamDsResponse) => void): Promise<CreateTaskInParamDsResponse>;
    /**
     * 基于任务类型获取任务信息Ds
     */
    DescribeInfoTransByTypeIdDs(req: DescribeInfoTransByTypeIdDsRequest, cb?: (error: string, rep: DescribeInfoTransByTypeIdDsResponse) => void): Promise<DescribeInfoTransByTypeIdDsResponse>;
    /**
     * 获取脚本导出任务类型
     */
    DescribeScriptsImportTaskType(req: DescribeScriptsImportTaskTypeRequest, cb?: (error: string, rep: DescribeScriptsImportTaskTypeResponse) => void): Promise<DescribeScriptsImportTaskTypeResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
获取实例日志列表
     */
    DescribeInstanceLogs(req: DescribeInstanceLogsRequest, cb?: (error: string, rep: DescribeInstanceLogsResponse) => void): Promise<DescribeInstanceLogsResponse>;
    /**
     * 查询基线诊断信息
     */
    DescribeDiagnosticInfoByBaselineId(req: DescribeDiagnosticInfoByBaselineIdRequest, cb?: (error: string, rep: DescribeDiagnosticInfoByBaselineIdResponse) => void): Promise<DescribeDiagnosticInfoByBaselineIdResponse>;
    /**
     * 删除规则模版
     */
    DeleteRuleTemplate(req: DeleteRuleTemplateRequest, cb?: (error: string, rep: DeleteRuleTemplateResponse) => void): Promise<DeleteRuleTemplateResponse>;
    /**
     * 编排空间-创建文件夹
     */
    CreateDsFolder(req: CreateDsFolderRequest, cb?: (error: string, rep: CreateDsFolderResponse) => void): Promise<CreateDsFolderResponse>;
    /**
     * 抢占锁定集成任务
     */
    RobAndLockIntegrationTask(req: RobAndLockIntegrationTaskRequest, cb?: (error: string, rep: RobAndLockIntegrationTaskResponse) => void): Promise<RobAndLockIntegrationTaskResponse>;
    /**
     * 文件路径的根目录为 /datastudio/resource，如果要在根目录下创建 aaa 文件夹，FilePath的值应该为 /datastudio/resource，如果根目录下已经创建了 aaa 文件夹，要在 aaa 下创建  bbb 文件夹，FilePath的值应该为 /datastudio/resource/aaa
     */
    CreateResourcePath(req: CreateResourcePathRequest, cb?: (error: string, rep: CreateResourcePathResponse) => void): Promise<CreateResourcePathResponse>;
    /**
     * 协同编辑资源锁心跳
     */
    HeartBeat(req: HeartBeatRequest, cb?: (error: string, rep: HeartBeatResponse) => void): Promise<HeartBeatResponse>;
    /**
     * 获取数据开发任务类型
     */
    DescribeDataDevelopTaskType(req: DescribeDataDevelopTaskTypeRequest, cb?: (error: string, rep: DescribeDataDevelopTaskTypeResponse) => void): Promise<DescribeDataDevelopTaskTypeResponse>;
    /**
     * 根据任务Id查找生产态子任务
     */
    DescribeAllUsedVersionSon(req: DescribeAllUsedVersionSonRequest, cb?: (error: string, rep: DescribeAllUsedVersionSonResponse) => void): Promise<DescribeAllUsedVersionSonResponse>;
    /**
     * 删除采集器
     */
    DeleteInLongAgent(req: DeleteInLongAgentRequest, cb?: (error: string, rep: DeleteInLongAgentResponse) => void): Promise<DeleteInLongAgentResponse>;
    /**
     * 资源管理-删除资源目录
     */
    DeleteResourcePath(req: DeleteResourcePathRequest, cb?: (error: string, rep: DeleteResourcePathResponse) => void): Promise<DeleteResourcePathResponse>;
    /**
     * 查询目录树
     */
    DescribeDsFolderTree(req: DescribeDsFolderTreeRequest, cb?: (error: string, rep: DescribeDsFolderTreeResponse) => void): Promise<DescribeDsFolderTreeResponse>;
    /**
     * 无
     */
    SubmitTaskTestRun(req: SubmitTaskTestRunRequest, cb?: (error: string, rep: SubmitTaskTestRunResponse) => void): Promise<SubmitTaskTestRunResponse>;
    /**
     * 开发空间-批量删除目录和文件
     */
    DeleteFilePath(req: DeleteFilePathRequest, cb?: (error: string, rep: DeleteFilePathResponse) => void): Promise<DeleteFilePathResponse>;
    /**
     * 质量报告-查询质量评分
     */
    DescribeDimensionScore(req: DescribeDimensionScoreRequest, cb?: (error: string, rep: DescribeDimensionScoreResponse) => void): Promise<DescribeDimensionScoreResponse>;
    /**
     * DeleteBaseline
     */
    DeleteBaseline(req: DeleteBaselineRequest, cb?: (error: string, rep: DeleteBaselineResponse) => void): Promise<DeleteBaselineResponse>;
    /**
     * 运维大屏-实例运行时长排行
     */
    DescribeSchedulerRunTimeInstanceCntByStatus(req: DescribeSchedulerRunTimeInstanceCntByStatusRequest, cb?: (error: string, rep: DescribeSchedulerRunTimeInstanceCntByStatusResponse) => void): Promise<DescribeSchedulerRunTimeInstanceCntByStatusResponse>;
    /**
     * 查询工作流全局参数
     */
    DescribeWorkflowParamDs(req: DescribeWorkflowParamDsRequest, cb?: (error: string, rep: DescribeWorkflowParamDsResponse) => void): Promise<DescribeWorkflowParamDsResponse>;
    /**
     * 数据集成大屏任务状态分布统计
     */
    DescribeIntegrationStatisticsTaskStatus(req: DescribeIntegrationStatisticsTaskStatusRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsTaskStatusResponse) => void): Promise<DescribeIntegrationStatisticsTaskStatusResponse>;
    /**
     * 资源管理-重命名资源目录
     */
    RenameResourcePath(req: RenameResourcePathRequest, cb?: (error: string, rep: RenameResourcePathResponse) => void): Promise<RenameResourcePathResponse>;
    /**
     * 批量运行集成任务
     */
    BatchStartIntegrationTasks(req: BatchStartIntegrationTasksRequest, cb?: (error: string, rep: BatchStartIntegrationTasksResponse) => void): Promise<BatchStartIntegrationTasksResponse>;
    /**
     * 离线任务重名校验
     */
    CheckTaskNameExist(req: CheckTaskNameExistRequest, cb?: (error: string, rep: CheckTaskNameExistResponse) => void): Promise<CheckTaskNameExistResponse>;
    /**
     * 根据补录计划和补录任务获取补录实例列表。
     */
    DescribeOpsMakePlanInstances(req: DescribeOpsMakePlanInstancesRequest, cb?: (error: string, rep: DescribeOpsMakePlanInstancesResponse) => void): Promise<DescribeOpsMakePlanInstancesResponse>;
    /**
     * 查询任务实例的关联实例列表
     */
    DescribeRelatedInstances(req: DescribeRelatedInstancesRequest, cb?: (error: string, rep: DescribeRelatedInstancesResponse) => void): Promise<DescribeRelatedInstancesResponse>;
    /**
     * 查询事件发布者列表
     */
    DescribeDsEventPublisherList(req: DescribeDsEventPublisherListRequest, cb?: (error: string, rep: DescribeDsEventPublisherListResponse) => void): Promise<DescribeDsEventPublisherListResponse>;
    /**
     * 任务状态统计
     */
    DescribeSchedulerTaskCntByStatus(req: DescribeSchedulerTaskCntByStatusRequest, cb?: (error: string, rep: DescribeSchedulerTaskCntByStatusResponse) => void): Promise<DescribeSchedulerTaskCntByStatusResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据工作流分页查询任务
     */
    DescribeTasksByPage(req: DescribeTasksByPageRequest, cb?: (error: string, rep: DescribeTasksByPageResponse) => void): Promise<DescribeTasksByPageResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建文件夹
     */
    CreateFolder(req: CreateFolderRequest, cb?: (error: string, rep: CreateFolderResponse) => void): Promise<CreateFolderResponse>;
    /**
     * 批量更新调度周期设置
     */
    UpdateBatchTaskSchedule(req: UpdateBatchTaskScheduleRequest, cb?: (error: string, rep: UpdateBatchTaskScheduleResponse) => void): Promise<UpdateBatchTaskScheduleResponse>;
    /**
     * 查询函数类型
     */
    DescribeFunctionTypes(req?: DescribeFunctionTypesRequest, cb?: (error: string, rep: DescribeFunctionTypesResponse) => void): Promise<DescribeFunctionTypesResponse>;
    /**
     * 查询子任务信息Ds
     */
    DescribeChildrenDs(req: DescribeChildrenDsRequest, cb?: (error: string, rep: DescribeChildrenDsResponse) => void): Promise<DescribeChildrenDsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量重跑
     */
    RerunInstances(req: RerunInstancesRequest, cb?: (error: string, rep: RerunInstancesResponse) => void): Promise<RerunInstancesResponse>;
    /**
     * 获取实例列表
     */
    DescribeInstanceList(req: DescribeInstanceListRequest, cb?: (error: string, rep: DescribeInstanceListResponse) => void): Promise<DescribeInstanceListResponse>;
    /**
     * 分页查询任务运行历史
     */
    DescribeTaskRunHistory(req: DescribeTaskRunHistoryRequest, cb?: (error: string, rep: DescribeTaskRunHistoryResponse) => void): Promise<DescribeTaskRunHistoryResponse>;
    /**
     * 告警接收人详情
     */
    DescribeAlarmReceiver(req: DescribeAlarmReceiverRequest, cb?: (error: string, rep: DescribeAlarmReceiverResponse) => void): Promise<DescribeAlarmReceiverResponse>;
    /**
     * 查看任务锁状态信息
     */
    DescribeTaskLockStatus(req: DescribeTaskLockStatusRequest, cb?: (error: string, rep: DescribeTaskLockStatusResponse) => void): Promise<DescribeTaskLockStatusResponse>;
    /**
     * 获取实例运行日志
     */
    DescribeInstanceLog(req: DescribeInstanceLogRequest, cb?: (error: string, rep: DescribeInstanceLogResponse) => void): Promise<DescribeInstanceLogResponse>;
    /**
     * 资源管理-批量删除资源文件
     */
    DeleteResourceFiles(req: DeleteResourceFilesRequest, cb?: (error: string, rep: DeleteResourceFilesResponse) => void): Promise<DeleteResourceFilesResponse>;
    /**
     * 任务运维列表组合条件查询
     */
    DescribeOperateTasks(req: DescribeOperateTasksRequest, cb?: (error: string, rep: DescribeOperateTasksResponse) => void): Promise<DescribeOperateTasksResponse>;
    /**
     * 查询开发空间版本列表
     */
    DescribeFileVersions(req: DescribeFileVersionsRequest, cb?: (error: string, rep: DescribeFileVersionsResponse) => void): Promise<DescribeFileVersionsResponse>;
    /**
     * 查询父任务数据源信息Ds
     */
    DescribeFatherDatasourceInfoDs(req: DescribeFatherDatasourceInfoDsRequest, cb?: (error: string, rep: DescribeFatherDatasourceInfoDsResponse) => void): Promise<DescribeFatherDatasourceInfoDsResponse>;
    /**
     * 查询最近5条代码搜索审计日志
     */
    DescribeCodeSearchAuditInfo(req: DescribeCodeSearchAuditInfoRequest, cb?: (error: string, rep: DescribeCodeSearchAuditInfoResponse) => void): Promise<DescribeCodeSearchAuditInfoResponse>;
    /**
     * 根据任务ID获取任务监听事件
     */
    DescribeEventListenerByTaskId(req: DescribeEventListenerByTaskIdRequest, cb?: (error: string, rep: DescribeEventListenerByTaskIdResponse) => void): Promise<DescribeEventListenerByTaskIdResponse>;
    /**
     * 批量创建登记项
     */
    CreateTaskOutputRegistries(req: CreateTaskOutputRegistriesRequest, cb?: (error: string, rep: CreateTaskOutputRegistriesResponse) => void): Promise<CreateTaskOutputRegistriesResponse>;
    /**
     * 查询基线实例关键任务实例甘特图
     */
    DescribeBaselineInstanceGantt(req: DescribeBaselineInstanceGanttRequest, cb?: (error: string, rep: DescribeBaselineInstanceGanttResponse) => void): Promise<DescribeBaselineInstanceGanttResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量冻结任务
     */
    FreezeTasks(req: FreezeTasksRequest, cb?: (error: string, rep: FreezeTasksResponse) => void): Promise<FreezeTasksResponse>;
    /**
     * 编辑基线
     */
    EditBaseline(req: EditBaselineRequest, cb?: (error: string, rep: EditBaselineResponse) => void): Promise<EditBaselineResponse>;
    /**
     * 删除任务输入参数
     */
    DeleteTaskInParamDs(req: DeleteTaskInParamDsRequest, cb?: (error: string, rep: DeleteTaskInParamDsResponse) => void): Promise<DeleteTaskInParamDsResponse>;
    /**
     * 代码搜索结果的统计信息
     */
    DescribeCodeSearchCount(req: DescribeCodeSearchCountRequest, cb?: (error: string, rep: DescribeCodeSearchCountResponse) => void): Promise<DescribeCodeSearchCountResponse>;
    /**
     * 导入项目参数
     */
    ImportProjectParamDs(req: ImportProjectParamDsRequest, cb?: (error: string, rep: ImportProjectParamDsResponse) => void): Promise<ImportProjectParamDsResponse>;
    /**
     * 对集成离线任务执行批量补数据操作
     */
    BatchMakeUpIntegrationTasks(req: BatchMakeUpIntegrationTasksRequest, cb?: (error: string, rep: BatchMakeUpIntegrationTasksResponse) => void): Promise<BatchMakeUpIntegrationTasksResponse>;
    /**
     * 资源管理-上传资源
     */
    UploadResource(req: UploadResourceRequest, cb?: (error: string, rep: UploadResourceResponse) => void): Promise<UploadResourceResponse>;
    /**
     * 规则执行日志查询
     */
    DescribeRuleExecLog(req: DescribeRuleExecLogRequest, cb?: (error: string, rep: DescribeRuleExecLogResponse) => void): Promise<DescribeRuleExecLogResponse>;
    /**
     * 获取代码搜索最近n条关键字搜索信息
     */
    DescribeCodeSearchAuditInfoV2(req: DescribeCodeSearchAuditInfoV2Request, cb?: (error: string, rep: DescribeCodeSearchAuditInfoV2Response) => void): Promise<DescribeCodeSearchAuditInfoV2Response>;
    /**
     * 库表管理-新建数据表-csv预览，最多支持500行预览
     */
    PreviewDataTableCsv(req: PreviewDataTableCsvRequest, cb?: (error: string, rep: PreviewDataTableCsvResponse) => void): Promise<PreviewDataTableCsvResponse>;
    /**
     * 开发空间-拉取完整目录树
     */
    DescribePathTrees(req: DescribePathTreesRequest, cb?: (error: string, rep: DescribePathTreesResponse) => void): Promise<DescribePathTreesResponse>;
    /**
     * 导出工作流(XML格式)，导出的文件存储在 cos 中(私有化 csp)，请自行下载，相关的下载信息在返回值中可以获取到
     */
    ExportWorkflowXml(req: ExportWorkflowXmlRequest, cb?: (error: string, rep: ExportWorkflowXmlResponse) => void): Promise<ExportWorkflowXmlResponse>;
    /**
     * 通过任务ID删除所有事件
     */
    DeleteEventListenerByTaskId(req: DeleteEventListenerByTaskIdRequest, cb?: (error: string, rep: DeleteEventListenerByTaskIdResponse) => void): Promise<DeleteEventListenerByTaskIdResponse>;
    /**
     * 创建任务Ds
     */
    CreateTaskDs(req: CreateTaskDsRequest, cb?: (error: string, rep: CreateTaskDsResponse) => void): Promise<CreateTaskDsResponse>;
    /**
     * 更新事件监听
     */
    UpdateEventListener(req: UpdateEventListenerRequest, cb?: (error: string, rep: UpdateEventListenerResponse) => void): Promise<UpdateEventListenerResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件监听器
     */
    RegisterEventListener(req: RegisterEventListenerRequest, cb?: (error: string, rep: RegisterEventListenerResponse) => void): Promise<RegisterEventListenerResponse>;
    /**
     * 事件管理-查询事件详情
     */
    DescribeDsEventDetail(req: DescribeDsEventDetailRequest, cb?: (error: string, rep: DescribeDsEventDetailResponse) => void): Promise<DescribeDsEventDetailResponse>;
    /**
     * 获取任务绑定的虚拟任务
     */
    DescribeTaskBindVirtualTask(req: DescribeTaskBindVirtualTaskRequest, cb?: (error: string, rep: DescribeTaskBindVirtualTaskResponse) => void): Promise<DescribeTaskBindVirtualTaskResponse>;
    /**
     * 拉取项目参数版本详情
     */
    DescribeProjectParamVersionInfoDs(req: DescribeProjectParamVersionInfoDsRequest, cb?: (error: string, rep: DescribeProjectParamVersionInfoDsResponse) => void): Promise<DescribeProjectParamVersionInfoDsResponse>;
    /**
     * 获取 crontab topN 个数据时间周期
     */
    DescribeCrontabTopNDs(req: DescribeCrontabTopNDsRequest, cb?: (error: string, rep: DescribeCrontabTopNDsResponse) => void): Promise<DescribeCrontabTopNDsResponse>;
    /**
     * 查询事件发布者信息
     */
    DescribeDsEventPublisher(req: DescribeDsEventPublisherRequest, cb?: (error: string, rep: DescribeDsEventPublisherResponse) => void): Promise<DescribeDsEventPublisherResponse>;
    /**
     * 删除任务连接
     */
    DeleteLink(req: DeleteLinkRequest, cb?: (error: string, rep: DeleteLinkResponse) => void): Promise<DeleteLinkResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交工作流
     */
    SubmitWorkflow(req: SubmitWorkflowRequest, cb?: (error: string, rep: SubmitWorkflowResponse) => void): Promise<SubmitWorkflowResponse>;
    /**
     * 批量删除集成任务
     */
    BatchDeleteIntegrationTasks(req: BatchDeleteIntegrationTasksRequest, cb?: (error: string, rep: BatchDeleteIntegrationTasksResponse) => void): Promise<BatchDeleteIntegrationTasksResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
    ModifyTaskScript(req: ModifyTaskScriptRequest, cb?: (error: string, rep: ModifyTaskScriptResponse) => void): Promise<ModifyTaskScriptResponse>;
    /**
     * 智能运维-事件列表-所属任务/基线过滤列表
     */
    DescribeBelongTo(req: DescribeBelongToRequest, cb?: (error: string, rep: DescribeBelongToResponse) => void): Promise<DescribeBelongToResponse>;
    /**
     * 根据脚本类型获取任务类型
     */
    DescribeTaskTypeByScriptType(req: DescribeTaskTypeByScriptTypeRequest, cb?: (error: string, rep: DescribeTaskTypeByScriptTypeResponse) => void): Promise<DescribeTaskTypeByScriptTypeResponse>;
    /**
     * 基线列表
     */
    DescribeBaselineById(req: DescribeBaselineByIdRequest, cb?: (error: string, rep: DescribeBaselineByIdResponse) => void): Promise<DescribeBaselineByIdResponse>;
    /**
     * 质量报告-质量分周期趋势
     */
    DescribeQualityScoreTrend(req: DescribeQualityScoreTrendRequest, cb?: (error: string, rep: DescribeQualityScoreTrendResponse) => void): Promise<DescribeQualityScoreTrendResponse>;
    /**
     * 通过taskIds查询task详情列表
     */
    DescribeDependTaskLists(req: DescribeDependTaskListsRequest, cb?: (error: string, rep: DescribeDependTaskListsResponse) => void): Promise<DescribeDependTaskListsResponse>;
    /**
     * 清空回收站任务
     */
    ClearRecycleTask(req: ClearRecycleTaskRequest, cb?: (error: string, rep: ClearRecycleTaskResponse) => void): Promise<ClearRecycleTaskResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改数据源
     */
    ModifyDataSource(req: ModifyDataSourceRequest, cb?: (error: string, rep: ModifyDataSourceResponse) => void): Promise<ModifyDataSourceResponse>;
    /**
     * 修改任务告警规则
     */
    ModifyTaskAlarmRegular(req: ModifyTaskAlarmRegularRequest, cb?: (error: string, rep: ModifyTaskAlarmRegularResponse) => void): Promise<ModifyTaskAlarmRegularResponse>;
    /**
     * 数据质量，查询调度任务的实例列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 删除任务输出参数
     */
    DeleteTaskOutParamDs(req: DeleteTaskOutParamDsRequest, cb?: (error: string, rep: DeleteTaskOutParamDsResponse) => void): Promise<DeleteTaskOutParamDsResponse>;
    /**
     * 查询试运行实例执行内容
     */
    DescribeDrInstanceScriptContent(req: DescribeDrInstanceScriptContentRequest, cb?: (error: string, rep: DescribeDrInstanceScriptContentResponse) => void): Promise<DescribeDrInstanceScriptContentResponse>;
    /**
     * 创建集成节点
     */
    CreateIntegrationNode(req: CreateIntegrationNodeRequest, cb?: (error: string, rep: CreateIntegrationNodeResponse) => void): Promise<CreateIntegrationNodeResponse>;
    /**
     * 批量暂停集成任务
     */
    BatchSuspendIntegrationTasks(req: BatchSuspendIntegrationTasksRequest, cb?: (error: string, rep: BatchSuspendIntegrationTasksResponse) => void): Promise<BatchSuspendIntegrationTasksResponse>;
    /**
     * 根据任务id获取下游依赖任务列表
     */
    DescribeDependOpsTaskList(req: DescribeDependOpsTaskListRequest, cb?: (error: string, rep: DescribeDependOpsTaskListResponse) => void): Promise<DescribeDependOpsTaskListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
    ModifyTaskLinks(req: ModifyTaskLinksRequest, cb?: (error: string, rep: ModifyTaskLinksResponse) => void): Promise<ModifyTaskLinksResponse>;
    /**
     * 开发空间获取最近一次测试运行记录信息
     */
    GetLatestAnalyseInfo(req: GetLatestAnalyseInfoRequest, cb?: (error: string, rep: GetLatestAnalyseInfoResponse) => void): Promise<GetLatestAnalyseInfoResponse>;
    /**
     * 删除事件
     */
    DeleteDsEvent(req: DeleteDsEventRequest, cb?: (error: string, rep: DeleteDsEventResponse) => void): Promise<DeleteDsEventResponse>;
    /**
     * 过滤条件【必要字段】{ruleId}
     */
    DescribeRuleHistoryByPage(req: DescribeRuleHistoryByPageRequest, cb?: (error: string, rep: DescribeRuleHistoryByPageResponse) => void): Promise<DescribeRuleHistoryByPageResponse>;
    /**
     * 查询数据库列表
     */
    DescribeDatabaseMetas(req: DescribeDatabaseMetasRequest, cb?: (error: string, rep: DescribeDatabaseMetasResponse) => void): Promise<DescribeDatabaseMetasResponse>;
    /**
     * 即席分析提交SHELL任务
     */
    SubmitShellTask(req: SubmitShellTaskRequest, cb?: (error: string, rep: SubmitShellTaskResponse) => void): Promise<SubmitShellTaskResponse>;
    /**
     * 实例批量重跑
     */
    RunRerunScheduleInstances(req: RunRerunScheduleInstancesRequest, cb?: (error: string, rep: RunRerunScheduleInstancesResponse) => void): Promise<RunRerunScheduleInstancesResponse>;
    /**
     * 批量继续执行集成实时任务
     */
    BatchResumeIntegrationTasks(req: BatchResumeIntegrationTasksRequest, cb?: (error: string, rep: BatchResumeIntegrationTasksResponse) => void): Promise<BatchResumeIntegrationTasksResponse>;
    /**
     * 即席分析提交SQL任务
     */
    SubmitSqlTask(req: SubmitSqlTaskRequest, cb?: (error: string, rep: SubmitSqlTaskResponse) => void): Promise<SubmitSqlTaskResponse>;
    /**
     * 回收站脚本文件目录树
     */
    GetPathTrees(req: GetPathTreesRequest, cb?: (error: string, rep: GetPathTreesResponse) => void): Promise<GetPathTreesResponse>;
    /**
     * 通过指定基准时间，计算出最近一次任务基于该基准时间的运行时间
     */
    DescribeTaskLatestRunTime(req: DescribeTaskLatestRunTimeRequest, cb?: (error: string, rep: DescribeTaskLatestRunTimeResponse) => void): Promise<DescribeTaskLatestRunTimeResponse>;
    /**
     * 查询规则执行历史， 最近30条
     */
    DescribeRuleExecHistory(req: DescribeRuleExecHistoryRequest, cb?: (error: string, rep: DescribeRuleExecHistoryResponse) => void): Promise<DescribeRuleExecHistoryResponse>;
    /**
     * 查询函数版本列表
     */
    DescribeCustomFunctionVersionList(req: DescribeCustomFunctionVersionListRequest, cb?: (error: string, rep: DescribeCustomFunctionVersionListResponse) => void): Promise<DescribeCustomFunctionVersionListResponse>;
    /**
     * 创建用户数据开发浏览历史
     */
    CreateBrowsingHistory(req: CreateBrowsingHistoryRequest, cb?: (error: string, rep: CreateBrowsingHistoryResponse) => void): Promise<CreateBrowsingHistoryResponse>;
    /**
     * 批量更新调度参数
     */
    UpdateBatchTaskParams(req: UpdateBatchTaskParamsRequest, cb?: (error: string, rep: UpdateBatchTaskParamsResponse) => void): Promise<UpdateBatchTaskParamsResponse>;
    /**
     * 提取数据集成节点字段Schema
     */
    GetIntegrationNodeColumnSchema(req: GetIntegrationNodeColumnSchemaRequest, cb?: (error: string, rep: GetIntegrationNodeColumnSchemaResponse) => void): Promise<GetIntegrationNodeColumnSchemaResponse>;
    /**
     * 查询用户生产工作流列表
     */
    DescribeOpsWorkflows(req: DescribeOpsWorkflowsRequest, cb?: (error: string, rep: DescribeOpsWorkflowsResponse) => void): Promise<DescribeOpsWorkflowsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据层级查找上/下游任务节点
     */
    DescribeDependTasksNew(req: DescribeDependTasksNewRequest, cb?: (error: string, rep: DescribeDependTasksNewResponse) => void): Promise<DescribeDependTasksNewResponse>;
    /**
     * 离线任务实例详情
     */
    DescribeTaskInstance(req: DescribeTaskInstanceRequest, cb?: (error: string, rep: DescribeTaskInstanceResponse) => void): Promise<DescribeTaskInstanceResponse>;
    /**
     * 查询实时任务实例节点信息
     */
    DescribeRealTimeTaskInstanceNodeInfo(req: DescribeRealTimeTaskInstanceNodeInfoRequest, cb?: (error: string, rep: DescribeRealTimeTaskInstanceNodeInfoResponse) => void): Promise<DescribeRealTimeTaskInstanceNodeInfoResponse>;
    /**
     * 分页查询试运行实例列表
     */
    DescribeDrInstancePage(req: DescribeDrInstancePageRequest, cb?: (error: string, rep: DescribeDrInstancePageResponse) => void): Promise<DescribeDrInstancePageResponse>;
    /**
     * 编排空间获取最近一次测试运行记录信息
     */
    GetLatestTestRunInfo(req: GetLatestTestRunInfoRequest, cb?: (error: string, rep: GetLatestTestRunInfoResponse) => void): Promise<GetLatestTestRunInfoResponse>;
    /**
     * 查询任务输出参数
     */
    DescribeTaskOutParamDs(req: DescribeTaskOutParamDsRequest, cb?: (error: string, rep: DescribeTaskOutParamDsResponse) => void): Promise<DescribeTaskOutParamDsResponse>;
    /**
     * 查询基线DAG
     */
    DescribeBaselineAllTaskDag(req: DescribeBaselineAllTaskDagRequest, cb?: (error: string, rep: DescribeBaselineAllTaskDagResponse) => void): Promise<DescribeBaselineAllTaskDagResponse>;
    /**
     * 创建任务告警规则
     */
    CreateTaskAlarmRegular(req: CreateTaskAlarmRegularRequest, cb?: (error: string, rep: CreateTaskAlarmRegularResponse) => void): Promise<CreateTaskAlarmRegularResponse>;
    /**
     * 开发空间-获取数据开发脚本信息
     */
    GetFileInfo(req: GetFileInfoRequest, cb?: (error: string, rep: GetFileInfoResponse) => void): Promise<GetFileInfoResponse>;
    /**
     * 编排空间导入开发空间脚本。
     */
    CreateScriptsImportTasksDs(req: CreateScriptsImportTasksDsRequest, cb?: (error: string, rep: CreateScriptsImportTasksDsResponse) => void): Promise<CreateScriptsImportTasksDsResponse>;
    /**
     * 批量修改参数
     */
    UpdateBatchTaskParameter(req: UpdateBatchTaskParameterRequest, cb?: (error: string, rep: UpdateBatchTaskParameterResponse) => void): Promise<UpdateBatchTaskParameterResponse>;
    /**
     * 批量停止集成任务
     */
    BatchStopIntegrationTasks(req: BatchStopIntegrationTasksRequest, cb?: (error: string, rep: BatchStopIntegrationTasksResponse) => void): Promise<BatchStopIntegrationTasksResponse>;
    /**
     * 全局搜索查询文件或任务详情
     */
    DescribeCodeDetailV2(req: DescribeCodeDetailV2Request, cb?: (error: string, rep: DescribeCodeDetailV2Response) => void): Promise<DescribeCodeDetailV2Response>;
    /**
     * 获取离线任务实例
     */
    GetOfflineInstanceList(req: GetOfflineInstanceListRequest, cb?: (error: string, rep: GetOfflineInstanceListResponse) => void): Promise<GetOfflineInstanceListResponse>;
    /**
     * 获取资源管理目录树
     */
    DescribeResourceManagePathTrees(req: DescribeResourceManagePathTreesRequest, cb?: (error: string, rep: DescribeResourceManagePathTreesResponse) => void): Promise<DescribeResourceManagePathTreesResponse>;
    /**
     * 根据周期类型查询所有实例
     */
    DescribeInstanceByCycle(req: DescribeInstanceByCycleRequest, cb?: (error: string, rep: DescribeInstanceByCycleResponse) => void): Promise<DescribeInstanceByCycleResponse>;
    /**
     * 下载日志文件，返回日志URL
     */
    DescribeInstanceLogFile(req: DescribeInstanceLogFileRequest, cb?: (error: string, rep: DescribeInstanceLogFileResponse) => void): Promise<DescribeInstanceLogFileResponse>;
    /**
     * 继续集成任务
     */
    ResumeIntegrationTask(req: ResumeIntegrationTaskRequest, cb?: (error: string, rep: ResumeIntegrationTaskResponse) => void): Promise<ResumeIntegrationTaskResponse>;
    /**
     * 获取高级运行参数
     */
    GetAdvanceRunParams(req: GetAdvanceRunParamsRequest, cb?: (error: string, rep: GetAdvanceRunParamsResponse) => void): Promise<GetAdvanceRunParamsResponse>;
    /**
     * 编辑基线告警状态
     */
    ModifyBaselineAlarmStatus(req: ModifyBaselineAlarmStatusRequest, cb?: (error: string, rep: ModifyBaselineAlarmStatusResponse) => void): Promise<ModifyBaselineAlarmStatusResponse>;
    /**
     * 解锁集成任务
     */
    UnlockIntegrationTask(req: UnlockIntegrationTaskRequest, cb?: (error: string, rep: UnlockIntegrationTaskResponse) => void): Promise<UnlockIntegrationTaskResponse>;
    /**
     * 文件上传需要先获取文件上传所需要的秘钥，文件位置等信息，因为文件名字可能会出现冲突，所以需要传入将要写入的文件，如果检测到文件名冲突，WeData 后端会在文件名上加入随机字符串。
     */
    UploadFilesDs(req: UploadFilesDsRequest, cb?: (error: string, rep: UploadFilesDsResponse) => void): Promise<UploadFilesDsResponse>;
    /**
     * 查询用户数据开发浏览历史
     */
    DescribeBrowsingHistories(req: DescribeBrowsingHistoriesRequest, cb?: (error: string, rep: DescribeBrowsingHistoriesResponse) => void): Promise<DescribeBrowsingHistoriesResponse>;
    /**
     * 批量创建虚拟任务, 用于新建跨工作流任务场景中新增跨工作流任务操作
     */
    BatchCreateVirtualTaskDs(req: BatchCreateVirtualTaskDsRequest, cb?: (error: string, rep: BatchCreateVirtualTaskDsResponse) => void): Promise<BatchCreateVirtualTaskDsResponse>;
    /**
     * 查询事件监听者列表
     */
    DescribeDsEventListenerList(req: DescribeDsEventListenerListRequest, cb?: (error: string, rep: DescribeDsEventListenerListResponse) => void): Promise<DescribeDsEventListenerListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建数据源
     */
    CreateDataSource(req: CreateDataSourceRequest, cb?: (error: string, rep: CreateDataSourceResponse) => void): Promise<CreateDataSourceResponse>;
    /**
     * 实例运维-获取实例日志列表
     */
    DescribeOpsInstanceLogList(req: DescribeOpsInstanceLogListRequest, cb?: (error: string, rep: DescribeOpsInstanceLogListResponse) => void): Promise<DescribeOpsInstanceLogListResponse>;
    /**
     * 查看事件实例的消费任务
     */
    DescribeEventConsumeTasks(req: DescribeEventConsumeTasksRequest, cb?: (error: string, rep: DescribeEventConsumeTasksResponse) => void): Promise<DescribeEventConsumeTasksResponse>;
    /**
     * 获取待审批列表
     */
    DescribeApproveList(req: DescribeApproveListRequest, cb?: (error: string, rep: DescribeApproveListResponse) => void): Promise<DescribeApproveListResponse>;
    /**
     * 批量更新任务Ds
     */
    BatchUpdateTasksDs(req: BatchUpdateTasksDsRequest, cb?: (error: string, rep: BatchUpdateTasksDsResponse) => void): Promise<BatchUpdateTasksDsResponse>;
    /**
     * 判断集成节点名称是否存在
     */
    CheckIntegrationNodeNameExists(req: CheckIntegrationNodeNameExistsRequest, cb?: (error: string, rep: CheckIntegrationNodeNameExistsResponse) => void): Promise<CheckIntegrationNodeNameExistsResponse>;
    /**
     * 告警事件列表
     */
    DescribeAlarmEvents(req: DescribeAlarmEventsRequest, cb?: (error: string, rep: DescribeAlarmEventsResponse) => void): Promise<DescribeAlarmEventsResponse>;
    /**
     * 资源管理-重命名资源文件
     */
    RenameResourceFile(req: RenameResourceFileRequest, cb?: (error: string, rep: RenameResourceFileResponse) => void): Promise<RenameResourceFileResponse>;
    /**
     * 运维大屏-任务状态分布
     */
    DescribeSchedulerTaskTypeCnt(req: DescribeSchedulerTaskTypeCntRequest, cb?: (error: string, rep: DescribeSchedulerTaskTypeCntResponse) => void): Promise<DescribeSchedulerTaskTypeCntResponse>;
    /**
     * 生成建hive表的sql
     */
    GenHiveTableDDLSql(req: GenHiveTableDDLSqlRequest, cb?: (error: string, rep: GenHiveTableDDLSqlResponse) => void): Promise<GenHiveTableDDLSqlResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务脚本
     */
    DescribeTaskScript(req: DescribeTaskScriptRequest, cb?: (error: string, rep: DescribeTaskScriptResponse) => void): Promise<DescribeTaskScriptResponse>;
    /**
     * 保存用户自定义函数
     */
    SaveCustomFunction(req: SaveCustomFunctionRequest, cb?: (error: string, rep: SaveCustomFunctionResponse) => void): Promise<SaveCustomFunctionResponse>;
    /**
     * <p style="color:red;">[该接口为 ds 中开发]</p>
更新工作流（包括工作流基本信息与工作流参数）
     */
    UpdateWorkflowInfo(req: UpdateWorkflowInfoRequest, cb?: (error: string, rep: UpdateWorkflowInfoResponse) => void): Promise<UpdateWorkflowInfoResponse>;
    /**
     * 释放协同编辑资源锁
     */
    ReleaseLock(req: ReleaseLockRequest, cb?: (error: string, rep: ReleaseLockResponse) => void): Promise<ReleaseLockResponse>;
    /**
     * 批量删除工作流
     */
    DeleteBatchWorkflowDs(req: DeleteBatchWorkflowDsRequest, cb?: (error: string, rep: DeleteBatchWorkflowDsResponse) => void): Promise<DeleteBatchWorkflowDsResponse>;
    /**
     * Runner 规则检测结果上报
     */
    CommitRuleGroupExecResult(req: CommitRuleGroupExecResultRequest, cb?: (error: string, rep: CommitRuleGroupExecResultResponse) => void): Promise<CommitRuleGroupExecResultResponse>;
    /**
     * 获取工作流画布操作人列表
     */
    DescribeWorkflowCanvasOperators(req: DescribeWorkflowCanvasOperatorsRequest, cb?: (error: string, rep: DescribeWorkflowCanvasOperatorsResponse) => void): Promise<DescribeWorkflowCanvasOperatorsResponse>;
    /**
     * 获取TKE集群列表
     */
    DescribeInLongTkeClusterList(req: DescribeInLongTkeClusterListRequest, cb?: (error: string, rep: DescribeInLongTkeClusterListResponse) => void): Promise<DescribeInLongTkeClusterListResponse>;
    /**
     * 删除产出登记项
     */
    DeleteTaskOutputRegistry(req: DeleteTaskOutputRegistryRequest, cb?: (error: string, rep: DeleteTaskOutputRegistryResponse) => void): Promise<DeleteTaskOutputRegistryResponse>;
    /**
     * 提交数据导出任务
     */
    CommitExportTask(req: CommitExportTaskRequest, cb?: (error: string, rep: CommitExportTaskResponse) => void): Promise<CommitExportTaskResponse>;
    /**
     * 重启采集器
     */
    RestartInLongAgent(req: RestartInLongAgentRequest, cb?: (error: string, rep: RestartInLongAgentResponse) => void): Promise<RestartInLongAgentResponse>;
    /**
     * 事件管理-触发事件
     */
    TriggerDsEvent(req: TriggerDsEventRequest, cb?: (error: string, rep: TriggerDsEventResponse) => void): Promise<TriggerDsEventResponse>;
    /**
     * 检查任务名称是否重复
     */
    CheckTaskNameExistDs(req: CheckTaskNameExistDsRequest, cb?: (error: string, rep: CheckTaskNameExistDsResponse) => void): Promise<CheckTaskNameExistDsResponse>;
    /**
     * 更新事件
     */
    UpdateDsEvent(req: UpdateDsEventRequest, cb?: (error: string, rep: UpdateDsEventResponse) => void): Promise<UpdateDsEventResponse>;
    /**
     * 新建用户自定义函数组件检查
     */
    CheckCustomFunctionPremise(req: CheckCustomFunctionPremiseRequest, cb?: (error: string, rep: CheckCustomFunctionPremiseResponse) => void): Promise<CheckCustomFunctionPremiseResponse>;
    /**
     * 获取etl测试运行任务执行状态和日志
     */
    DescribeTestRun(req: DescribeTestRunRequest, cb?: (error: string, rep: DescribeTestRunResponse) => void): Promise<DescribeTestRunResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
文件夹更新
     */
    ModifyFolder(req: ModifyFolderRequest, cb?: (error: string, rep: ModifyFolderResponse) => void): Promise<ModifyFolderResponse>;
    /**
     * 查询规则执行结果详情
     */
    DescribeRuleExecDetail(req: DescribeRuleExecDetailRequest, cb?: (error: string, rep: DescribeRuleExecDetailResponse) => void): Promise<DescribeRuleExecDetailResponse>;
    /**
     * 删除回收站任务
     */
    DeleteRecycleTask(req: DeleteRecycleTaskRequest, cb?: (error: string, rep: DeleteRecycleTaskResponse) => void): Promise<DeleteRecycleTaskResponse>;
    /**
     * 创建离线任务
     */
    CreateOfflineTask(req: CreateOfflineTaskRequest, cb?: (error: string, rep: CreateOfflineTaskResponse) => void): Promise<CreateOfflineTaskResponse>;
    /**
     * 基于条件翻页获取任务列表, 用于新建跨工作流任务场景中展示工作流列表操作
     */
    DescribeTaskListByConditionDs(req: DescribeTaskListByConditionDsRequest, cb?: (error: string, rep: DescribeTaskListByConditionDsResponse) => void): Promise<DescribeTaskListByConditionDsResponse>;
    /**
     * 获取表schema信息
     */
    DescribeTableSchemaInfo(req: DescribeTableSchemaInfoRequest, cb?: (error: string, rep: DescribeTableSchemaInfoResponse) => void): Promise<DescribeTableSchemaInfoResponse>;
    /**
     * 离线任务周期统计明细
     */
    DescribeTaskReportDetailList(req: DescribeTaskReportDetailListRequest, cb?: (error: string, rep: DescribeTaskReportDetailListResponse) => void): Promise<DescribeTaskReportDetailListResponse>;
    /**
     * 获取表元数据list
     */
    DescribeTableMetas(req: DescribeTableMetasRequest, cb?: (error: string, rep: DescribeTableMetasResponse) => void): Promise<DescribeTableMetasResponse>;
    /**
     * 实时任务同步速度趋势
     */
    DescribeRealTimeTaskSpeed(req: DescribeRealTimeTaskSpeedRequest, cb?: (error: string, rep: DescribeRealTimeTaskSpeedResponse) => void): Promise<DescribeRealTimeTaskSpeedResponse>;
    /**
     * 修改工作流责任人
     */
    UpdateWorkflowOwner(req: UpdateWorkflowOwnerRequest, cb?: (error: string, rep: UpdateWorkflowOwnerResponse) => void): Promise<UpdateWorkflowOwnerResponse>;
    /**
     * 查询 kettle 资源服务器目录树
     */
    DescribeDsKettleServerFolderTree(req: DescribeDsKettleServerFolderTreeRequest, cb?: (error: string, rep: DescribeDsKettleServerFolderTreeResponse) => void): Promise<DescribeDsKettleServerFolderTreeResponse>;
    /**
     * 获取开发空间支持的脚本类型
     */
    DescribeDevelopmentSpaceSupportType(req?: DescribeDevelopmentSpaceSupportTypeRequest, cb?: (error: string, rep: DescribeDevelopmentSpaceSupportTypeResponse) => void): Promise<DescribeDevelopmentSpaceSupportTypeResponse>;
    /**
     * 运维大屏-实例状态分布
     */
    DescribeSchedulerInstanceStatus(req: DescribeSchedulerInstanceStatusRequest, cb?: (error: string, rep: DescribeSchedulerInstanceStatusResponse) => void): Promise<DescribeSchedulerInstanceStatusResponse>;
    /**
     * 补录任务
     */
    CreateOpsMakePlan(req: CreateOpsMakePlanRequest, cb?: (error: string, rep: CreateOpsMakePlanResponse) => void): Promise<CreateOpsMakePlanResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量置成功
     */
    ForceSucInstances(req: ForceSucInstancesRequest, cb?: (error: string, rep: ForceSucInstancesResponse) => void): Promise<ForceSucInstancesResponse>;
    /**
     * 查询规则组详情接口
     */
    DescribeRuleGroup(req: DescribeRuleGroupRequest, cb?: (error: string, rep: DescribeRuleGroupResponse) => void): Promise<DescribeRuleGroupResponse>;
    /**
     * 获取具体实例相关日志信息
     */
    DescribeInstanceLogDetail(req: DescribeInstanceLogDetailRequest, cb?: (error: string, rep: DescribeInstanceLogDetailResponse) => void): Promise<DescribeInstanceLogDetailResponse>;
    /**
     * 判断脚本文件是否被任务列表所引用
     */
    ScriptUsedByOtherTaskDs(req: ScriptUsedByOtherTaskDsRequest, cb?: (error: string, rep: ScriptUsedByOtherTaskDsResponse) => void): Promise<ScriptUsedByOtherTaskDsResponse>;
    /**
     * 回滚自定义函数版本
     */
    RollbackCustomFunctionVersion(req: RollbackCustomFunctionVersionRequest, cb?: (error: string, rep: RollbackCustomFunctionVersionResponse) => void): Promise<RollbackCustomFunctionVersionResponse>;
    /**
     * 编排空间-删除文件夹
     */
    DeleteDsFolder(req: DeleteDsFolderRequest, cb?: (error: string, rep: DeleteDsFolderResponse) => void): Promise<DeleteDsFolderResponse>;
    /**
     * 获取回收站任务详情
     */
    DescribeRecycleTaskDetail(req: DescribeRecycleTaskDetailRequest, cb?: (error: string, rep: DescribeRecycleTaskDetailResponse) => void): Promise<DescribeRecycleTaskDetailResponse>;
    /**
     * 创建质量规则接口
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 编辑规则模板
     */
    ModifyRuleTemplate(req: ModifyRuleTemplateRequest, cb?: (error: string, rep: ModifyRuleTemplateResponse) => void): Promise<ModifyRuleTemplateResponse>;
    /**
     * 查询父目录下所有子文件夹+工作流
     */
    DescribeAllByFolderNew(req: DescribeAllByFolderNewRequest, cb?: (error: string, rep: DescribeAllByFolderNewResponse) => void): Promise<DescribeAllByFolderNewResponse>;
    /**
     * 删除任务Ds
     */
    DeleteTaskDs(req: DeleteTaskDsRequest, cb?: (error: string, rep: DeleteTaskDsResponse) => void): Promise<DeleteTaskDsResponse>;
    /**
     * 远端路径寻找任务
     */
    FindTaskByRemotePath(req: FindTaskByRemotePathRequest, cb?: (error: string, rep: FindTaskByRemotePathResponse) => void): Promise<FindTaskByRemotePathResponse>;
    /**
     * 智能运维事件详情1
     */
    DescribeEventDetail(req: DescribeEventDetailRequest, cb?: (error: string, rep: DescribeEventDetailResponse) => void): Promise<DescribeEventDetailResponse>;
    /**
     * 判断告警规则重名
     */
    CheckAlarmRegularNameExist(req: CheckAlarmRegularNameExistRequest, cb?: (error: string, rep: CheckAlarmRegularNameExistResponse) => void): Promise<CheckAlarmRegularNameExistResponse>;
    /**
     * 批量获取etl测试运行任务执行状态和日志
     */
    DescribeBatchTestRun(req: DescribeBatchTestRunRequest, cb?: (error: string, rep: DescribeBatchTestRunResponse) => void): Promise<DescribeBatchTestRunResponse>;
    /**
     * 设置任务输出参数
     */
    CreateTaskOutParamDs(req: CreateTaskOutParamDsRequest, cb?: (error: string, rep: CreateTaskOutParamDsResponse) => void): Promise<CreateTaskOutParamDsResponse>;
    /**
     * 查询文件或任务详情
     */
    DescribeCodeDetail(req: DescribeCodeDetailRequest, cb?: (error: string, rep: DescribeCodeDetailResponse) => void): Promise<DescribeCodeDetailResponse>;
    /**
     * 拉取实例列表，join task表一些信息
     */
    DescribeInstancesInfoWithTaskInfo(req: DescribeInstancesInfoWithTaskInfoRequest, cb?: (error: string, rep: DescribeInstancesInfoWithTaskInfoResponse) => void): Promise<DescribeInstancesInfoWithTaskInfoResponse>;
    /**
     * 获取所有任务类型
     */
    DescribeAllTaskType(req: DescribeAllTaskTypeRequest, cb?: (error: string, rep: DescribeAllTaskTypeResponse) => void): Promise<DescribeAllTaskTypeResponse>;
    /**
     * 拉取任务版本列表
     */
    DescribeDsTaskVersionList(req: DescribeDsTaskVersionListRequest, cb?: (error: string, rep: DescribeDsTaskVersionListResponse) => void): Promise<DescribeDsTaskVersionListResponse>;
    /**
     * 获取关联父实例
     */
    DescribeFathers(req: DescribeFathersRequest, cb?: (error: string, rep: DescribeFathersResponse) => void): Promise<DescribeFathersResponse>;
    /**
     * 基线列表
     */
    DescribeBaselines(req: DescribeBaselinesRequest, cb?: (error: string, rep: DescribeBaselinesResponse) => void): Promise<DescribeBaselinesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流
     */
    ModifyWorkflowInfo(req: ModifyWorkflowInfoRequest, cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void): Promise<ModifyWorkflowInfoResponse>;
    /**
     * 更新集成节点
     */
    ModifyIntegrationNode(req: ModifyIntegrationNodeRequest, cb?: (error: string, rep: ModifyIntegrationNodeResponse) => void): Promise<ModifyIntegrationNodeResponse>;
    /**
     * 批量创建任务告警规则
     */
    BatchCreateIntegrationTaskAlarms(req: BatchCreateIntegrationTaskAlarmsRequest, cb?: (error: string, rep: BatchCreateIntegrationTaskAlarmsResponse) => void): Promise<BatchCreateIntegrationTaskAlarmsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹目录
     */
    DescribeFolderList(req: DescribeFolderListRequest, cb?: (error: string, rep: DescribeFolderListResponse) => void): Promise<DescribeFolderListResponse>;
    /**
     * 修改审批单状态
     */
    ModifyApproveStatus(req: ModifyApproveStatusRequest, cb?: (error: string, rep: ModifyApproveStatusResponse) => void): Promise<ModifyApproveStatusResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
工作流下所有任务的补录
     */
    MakeUpWorkflowNew(req: MakeUpWorkflowNewRequest, cb?: (error: string, rep: MakeUpWorkflowNewResponse) => void): Promise<MakeUpWorkflowNewResponse>;
    /**
     * 根据工作流id查询保存未提交任务
     */
    DescribeDsNotSubmitTasksAndCanRunByWorkflow(req: DescribeDsNotSubmitTasksAndCanRunByWorkflowRequest, cb?: (error: string, rep: DescribeDsNotSubmitTasksAndCanRunByWorkflowResponse) => void): Promise<DescribeDsNotSubmitTasksAndCanRunByWorkflowResponse>;
    /**
     * 查询工作流版本信息
     */
    QueryWorkflowVersion(req: QueryWorkflowVersionRequest, cb?: (error: string, rep: QueryWorkflowVersionResponse) => void): Promise<QueryWorkflowVersionResponse>;
    /**
     * 更新监控状态
     */
    ModifyMonitorStatus(req: ModifyMonitorStatusRequest, cb?: (error: string, rep: ModifyMonitorStatusResponse) => void): Promise<ModifyMonitorStatusResponse>;
    /**
     * 查询试运行实例子实例列表
     */
    DescribeDrSonInstance(req: DescribeDrSonInstanceRequest, cb?: (error: string, rep: DescribeDrSonInstanceResponse) => void): Promise<DescribeDrSonInstanceResponse>;
    /**
     * 根据条件查找事件实例
     */
    DescribeEventCases(req: DescribeEventCasesRequest, cb?: (error: string, rep: DescribeEventCasesResponse) => void): Promise<DescribeEventCasesResponse>;
    /**
     * 查询规则执行导出结果
     */
    DescribeRuleExecExportResult(req: DescribeRuleExecExportResultRequest, cb?: (error: string, rep: DescribeRuleExecExportResultResponse) => void): Promise<DescribeRuleExecExportResultResponse>;
    /**
     * 即席分析提交PYTHON任务
     */
    SubmitPythonTask(req: SubmitPythonTaskRequest, cb?: (error: string, rep: SubmitPythonTaskResponse) => void): Promise<SubmitPythonTaskResponse>;
    /**
     * 工作流导入（XML）
     */
    ImportWorkflowXml(req: ImportWorkflowXmlRequest, cb?: (error: string, rep: ImportWorkflowXmlResponse) => void): Promise<ImportWorkflowXmlResponse>;
    /**
     * 获取操作详情列表
     */
    ListBatchDetail(req: ListBatchDetailRequest, cb?: (error: string, rep: ListBatchDetailResponse) => void): Promise<ListBatchDetailResponse>;
    /**
     * 元数据模型-表基础信息查询接口
     */
    DescribeTableBasicInfo(req: DescribeTableBasicInfoRequest, cb?: (error: string, rep: DescribeTableBasicInfoResponse) => void): Promise<DescribeTableBasicInfoResponse>;
    /**
     * 资源管理-创建资源目录
     */
    CreateResourceDirectory(req: CreateResourceDirectoryRequest, cb?: (error: string, rep: CreateResourceDirectoryResponse) => void): Promise<CreateResourceDirectoryResponse>;
    /**
     * 还原任务
     */
    RestoreRecycleTask(req: RestoreRecycleTaskRequest, cb?: (error: string, rep: RestoreRecycleTaskResponse) => void): Promise<RestoreRecycleTaskResponse>;
    /**
     * 查询规则组订阅信息
     */
    DescribeRuleGroupSubscription(req: DescribeRuleGroupSubscriptionRequest, cb?: (error: string, rep: DescribeRuleGroupSubscriptionResponse) => void): Promise<DescribeRuleGroupSubscriptionResponse>;
    /**
     * 查询任务实例列表
     */
    DescribeTaskInstances(req: DescribeTaskInstancesRequest, cb?: (error: string, rep: DescribeTaskInstancesResponse) => void): Promise<DescribeTaskInstancesResponse>;
    /**
     * 批量导出文件
     */
    ExportFiles(req: ExportFilesRequest, cb?: (error: string, rep: ExportFilesResponse) => void): Promise<ExportFilesResponse>;
    /**
     * 创建开发空间版本
     */
    CreateFileVersion(req: CreateFileVersionRequest, cb?: (error: string, rep: CreateFileVersionResponse) => void): Promise<CreateFileVersionResponse>;
    /**
     * 批量删除任务提交记录列表
     */
    DeleteRecordList(req: DeleteRecordListRequest, cb?: (error: string, rep: DeleteRecordListResponse) => void): Promise<DeleteRecordListResponse>;
    /**
     * 暂停工作流下的所有任务
     */
    FreezeTasksByWorkflowIds(req: FreezeTasksByWorkflowIdsRequest, cb?: (error: string, rep: FreezeTasksByWorkflowIdsResponse) => void): Promise<FreezeTasksByWorkflowIdsResponse>;
    /**
     * 替换项目参数历史版本
     */
    ReplaceProjectParamVersionDs(req: ReplaceProjectParamVersionDsRequest, cb?: (error: string, rep: ReplaceProjectParamVersionDsResponse) => void): Promise<ReplaceProjectParamVersionDsResponse>;
    /**
     * 新获取SQL执行结果
     */
    DescribeNewSqlTaskResult(req: DescribeNewSqlTaskResultRequest, cb?: (error: string, rep: DescribeNewSqlTaskResultResponse) => void): Promise<DescribeNewSqlTaskResultResponse>;
    /**
     * 查询任务告警规则列表
     */
    DescribeTaskAlarmRegulations(req: DescribeTaskAlarmRegulationsRequest, cb?: (error: string, rep: DescribeTaskAlarmRegulationsResponse) => void): Promise<DescribeTaskAlarmRegulationsResponse>;
    /**
     * 查询集成任务
     */
    DescribeIntegrationTask(req: DescribeIntegrationTaskRequest, cb?: (error: string, rep: DescribeIntegrationTaskResponse) => void): Promise<DescribeIntegrationTaskResponse>;
    /**
     * 资源管理-获取资源上传的可用 cos 路径
     */
    GetResourceCosPath(req: GetResourceCosPathRequest, cb?: (error: string, rep: GetResourceCosPathResponse) => void): Promise<GetResourceCosPathResponse>;
    /**
     * 查询工作流画布运行起止时间
     */
    DescribeWorkflowExecuteById(req: DescribeWorkflowExecuteByIdRequest, cb?: (error: string, rep: DescribeWorkflowExecuteByIdResponse) => void): Promise<DescribeWorkflowExecuteByIdResponse>;
    /**
     * 任务运维搜索 查询生产态任务数据源列表
     */
    DescribeOperateOpsTaskDatasource(req: DescribeOperateOpsTaskDatasourceRequest, cb?: (error: string, rep: DescribeOperateOpsTaskDatasourceResponse) => void): Promise<DescribeOperateOpsTaskDatasourceResponse>;
    /**
     * 获取关联子实例
     */
    DescribeSonInstances(req: DescribeSonInstancesRequest, cb?: (error: string, rep: DescribeSonInstancesResponse) => void): Promise<DescribeSonInstancesResponse>;
    /**
     * 开发空间-拉取指定路径目录树
     */
    DescribeChildrenPathTrees(req: DescribeChildrenPathTreesRequest, cb?: (error: string, rep: DescribeChildrenPathTreesResponse) => void): Promise<DescribeChildrenPathTreesResponse>;
    /**
     * 批量更新数据源
     */
    UpdateBatchTaskDatasource(req: UpdateBatchTaskDatasourceRequest, cb?: (error: string, rep: UpdateBatchTaskDatasourceResponse) => void): Promise<UpdateBatchTaskDatasourceResponse>;
    /**
     * 编排空间-工作流-创建任务文件夹
     */
    CreateTaskFolder(req: CreateTaskFolderRequest, cb?: (error: string, rep: CreateTaskFolderResponse) => void): Promise<CreateTaskFolderResponse>;
    /**
     * 实例批量重跑
     */
    RerunScheduleInstances(req: RerunScheduleInstancesRequest, cb?: (error: string, rep: RerunScheduleInstancesResponse) => void): Promise<RerunScheduleInstancesResponse>;
    /**
     * 获取执行日志
     */
    DescribeExecutionLog(req: DescribeExecutionLogRequest, cb?: (error: string, rep: DescribeExecutionLogResponse) => void): Promise<DescribeExecutionLogResponse>;
    /**
     * 通过工作流id，查询工作流详情
     */
    DescribeWorkflowInfoById(req: DescribeWorkflowInfoByIdRequest, cb?: (error: string, rep: DescribeWorkflowInfoByIdResponse) => void): Promise<DescribeWorkflowInfoByIdResponse>;
    /**
     * 查询函数分类
     */
    DescribeFunctionKinds(req?: DescribeFunctionKindsRequest, cb?: (error: string, rep: DescribeFunctionKindsResponse) => void): Promise<DescribeFunctionKindsResponse>;
    /**
     * 即席分析提交PySpark任务
     */
    SubmitPySparkTask(req: SubmitPySparkTaskRequest, cb?: (error: string, rep: SubmitPySparkTaskResponse) => void): Promise<SubmitPySparkTaskResponse>;
    /**
     * 离线任务实例统计明细
     */
    DescribeTaskInstanceReportDetail(req: DescribeTaskInstanceReportDetailRequest, cb?: (error: string, rep: DescribeTaskInstanceReportDetailResponse) => void): Promise<DescribeTaskInstanceReportDetailResponse>;
    /**
     * 查询规则组数据对象列表
     */
    DescribeDataObjects(req: DescribeDataObjectsRequest, cb?: (error: string, rep: DescribeDataObjectsResponse) => void): Promise<DescribeDataObjectsResponse>;
    /**
     * 拉取下游依赖的任务列表Ds
     */
    FindDependTaskListDs(req: FindDependTaskListDsRequest, cb?: (error: string, rep: FindDependTaskListDsResponse) => void): Promise<FindDependTaskListDsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
运行任务
     */
    RunTask(req: RunTaskRequest, cb?: (error: string, rep: RunTaskResponse) => void): Promise<RunTaskResponse>;
    /**
     * 数据质量获取生产调度任务列表
     */
    DescribeProdTasks(req: DescribeProdTasksRequest, cb?: (error: string, rep: DescribeProdTasksResponse) => void): Promise<DescribeProdTasksResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建任务
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * 在基线系统内查询单个调度任务实例
     */
    DescribeScheduleInstance(req: DescribeScheduleInstanceRequest, cb?: (error: string, rep: DescribeScheduleInstanceResponse) => void): Promise<DescribeScheduleInstanceResponse>;
    /**
     * 查询项目参数历史版本
     */
    DescribeProjectParamVersionDs(req: DescribeProjectParamVersionDsRequest, cb?: (error: string, rep: DescribeProjectParamVersionDsResponse) => void): Promise<DescribeProjectParamVersionDsResponse>;
    /**
     * 创建规则模版
     */
    CreateRuleTemplate(req: CreateRuleTemplateRequest, cb?: (error: string, rep: CreateRuleTemplateResponse) => void): Promise<CreateRuleTemplateResponse>;
    /**
     * 导出项目参数
     */
    ExportProjectParamDs(req: ExportProjectParamDsRequest, cb?: (error: string, rep: ExportProjectParamDsResponse) => void): Promise<ExportProjectParamDsResponse>;
    /**
     * 分页查询规则执行结果列表
     */
    DescribeRuleExecResultsByPage(req: DescribeRuleExecResultsByPageRequest, cb?: (error: string, rep: DescribeRuleExecResultsByPageResponse) => void): Promise<DescribeRuleExecResultsByPageResponse>;
    /**
     * 工作流信息查询-项目克隆使用
     */
    DescribeWorkflowForProjectClone(req: DescribeWorkflowForProjectCloneRequest, cb?: (error: string, rep: DescribeWorkflowForProjectCloneResponse) => void): Promise<DescribeWorkflowForProjectCloneResponse>;
    /**
     * 获取采集器所在集群的VPC列表
     */
    DescribeInLongAgentVpcList(req: DescribeInLongAgentVpcListRequest, cb?: (error: string, rep: DescribeInLongAgentVpcListResponse) => void): Promise<DescribeInLongAgentVpcListResponse>;
    /**
     * 查询运维画布信息，只需要获取边和节点
     */
    DescribeWorkflowOpsCanvasInfo(req: DescribeWorkflowOpsCanvasInfoRequest, cb?: (error: string, rep: DescribeWorkflowOpsCanvasInfoResponse) => void): Promise<DescribeWorkflowOpsCanvasInfoResponse>;
    /**
     * 批量终止集成任务实例
     */
    BatchKillIntegrationTaskInstances(req: BatchKillIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchKillIntegrationTaskInstancesResponse) => void): Promise<BatchKillIntegrationTaskInstancesResponse>;
    /**
     * 查询任务引用参数
     */
    DescribeTaskParamDs(req: DescribeTaskParamDsRequest, cb?: (error: string, rep: DescribeTaskParamDsResponse) => void): Promise<DescribeTaskParamDsResponse>;
    /**
     * 获取集群命名空间列表
     */
    DescribeClusterNamespaceList(req: DescribeClusterNamespaceListRequest, cb?: (error: string, rep: DescribeClusterNamespaceListResponse) => void): Promise<DescribeClusterNamespaceListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务具体详情
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 根据周期类型 查询所有任务
     */
    DescribeTaskByCycle(req: DescribeTaskByCycleRequest, cb?: (error: string, rep: DescribeTaskByCycleResponse) => void): Promise<DescribeTaskByCycleResponse>;
    /**
     * 获取采集器列表
     */
    DescribeInLongAgentList(req: DescribeInLongAgentListRequest, cb?: (error: string, rep: DescribeInLongAgentListResponse) => void): Promise<DescribeInLongAgentListResponse>;
    /**
     * 批量运行任务, 用于工作流-任务配置-运行、工作流-任务右键-运行、任务运维-任务管理-更多操作-运行、任务运维-任务管理-选择任务-批量运行等场景。
1. 任务运行预判断
2. 更新db中任务状态
3. 通知scheduler进行运行操作
     */
    BatchRunTasksDs(req: BatchRunTasksDsRequest, cb?: (error: string, rep: BatchRunTasksDsResponse) => void): Promise<BatchRunTasksDsResponse>;
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
     * 编排空间-工作流-移动任务到工作流文件夹
     */
    MoveTasksToFolder(req: MoveTasksToFolderRequest, cb?: (error: string, rep: MoveTasksToFolderResponse) => void): Promise<MoveTasksToFolderResponse>;
    /**
     * 日志获取详情页面
     */
    DescribeInstanceLastLog(req: DescribeInstanceLastLogRequest, cb?: (error: string, rep: DescribeInstanceLastLogResponse) => void): Promise<DescribeInstanceLastLogResponse>;
    /**
     * 工作流补数据
     */
    MakeUpTasksByWorkflow(req: MakeUpTasksByWorkflowRequest, cb?: (error: string, rep: MakeUpTasksByWorkflowResponse) => void): Promise<MakeUpTasksByWorkflowResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源列表
     */
    DescribeDataSourceWithoutInfo(req: DescribeDataSourceWithoutInfoRequest, cb?: (error: string, rep: DescribeDataSourceWithoutInfoResponse) => void): Promise<DescribeDataSourceWithoutInfoResponse>;
    /**
     * 根据条件搜索代码
     */
    DescribeCodeSearchInfo(req: DescribeCodeSearchInfoRequest, cb?: (error: string, rep: DescribeCodeSearchInfoResponse) => void): Promise<DescribeCodeSearchInfoResponse>;
    /**
     * 创建项目参数
     */
    CreateProjectParamDs(req: CreateProjectParamDsRequest, cb?: (error: string, rep: CreateProjectParamDsResponse) => void): Promise<CreateProjectParamDsResponse>;
    /**
     * 更新工作流下任务调度信息
     */
    RenewWorkflowSchedulerInfoDs(req: RenewWorkflowSchedulerInfoDsRequest, cb?: (error: string, rep: RenewWorkflowSchedulerInfoDsResponse) => void): Promise<RenewWorkflowSchedulerInfoDsResponse>;
    /**
     * 获取离线任务长连接Token
     */
    DescribeOfflineTaskToken(req?: DescribeOfflineTaskTokenRequest, cb?: (error: string, rep: DescribeOfflineTaskTokenResponse) => void): Promise<DescribeOfflineTaskTokenResponse>;
    /**
     * 批量启动工作流
     */
    RunTasksByMultiWorkflow(req: RunTasksByMultiWorkflowRequest, cb?: (error: string, rep: RunTasksByMultiWorkflowResponse) => void): Promise<RunTasksByMultiWorkflowResponse>;
    /**
     * 批量更新高级设置
     */
    UpdateBatchTaskAdvancedSettings(req: UpdateBatchTaskAdvancedSettingsRequest, cb?: (error: string, rep: UpdateBatchTaskAdvancedSettingsResponse) => void): Promise<UpdateBatchTaskAdvancedSettingsResponse>;
    /**
     * 查询任务输入参数
     */
    DescribeTaskInParamDs(req: DescribeTaskInParamDsRequest, cb?: (error: string, rep: DescribeTaskInParamDsResponse) => void): Promise<DescribeTaskInParamDsResponse>;
    /**
     * 查看补录计划任务
     */
    DescribeOpsMakePlanTasks(req: DescribeOpsMakePlanTasksRequest, cb?: (error: string, rep: DescribeOpsMakePlanTasksResponse) => void): Promise<DescribeOpsMakePlanTasksResponse>;
    /**
     * 新增或编辑产出登记项
     */
    CreateTaskOutputRegistry(req: CreateTaskOutputRegistryRequest, cb?: (error: string, rep: CreateTaskOutputRegistryResponse) => void): Promise<CreateTaskOutputRegistryResponse>;
    /**
     * 数据质量概览页面表排行接口
     */
    DescribeTopTableStat(req: DescribeTopTableStatRequest, cb?: (error: string, rep: DescribeTopTableStatResponse) => void): Promise<DescribeTopTableStatResponse>;
    /**
     * 编辑基线实例中任务告警状态
     */
    ModifyBaselineTaskAlarmStatus(req: ModifyBaselineTaskAlarmStatusRequest, cb?: (error: string, rep: ModifyBaselineTaskAlarmStatusResponse) => void): Promise<ModifyBaselineTaskAlarmStatusResponse>;
    /**
     * 查询Inlong manager日志
     */
    TaskLog(req: TaskLogRequest, cb?: (error: string, rep: TaskLogResponse) => void): Promise<TaskLogResponse>;
    /**
     * 检查操作用户对所选任务是否有操作权限, 用于新建跨工作流任务场景中展示审批提示操作
     */
    CheckTaskPriorityDs(req: CheckTaskPriorityDsRequest, cb?: (error: string, rep: CheckTaskPriorityDsResponse) => void): Promise<CheckTaskPriorityDsResponse>;
    /**
     * 获取下游任务信息
     */
    DescribeSuccessorOpsTaskInfos(req: DescribeSuccessorOpsTaskInfosRequest, cb?: (error: string, rep: DescribeSuccessorOpsTaskInfosResponse) => void): Promise<DescribeSuccessorOpsTaskInfosResponse>;
    /**
     * 调试运行集成任务
     */
    DryRunDIOfflineTask(req: DryRunDIOfflineTaskRequest, cb?: (error: string, rep: DryRunDIOfflineTaskResponse) => void): Promise<DryRunDIOfflineTaskResponse>;
    /**
     * 查询表绑定执行规则组信息
     */
    DescribeRuleGroupTable(req: DescribeRuleGroupTableRequest, cb?: (error: string, rep: DescribeRuleGroupTableResponse) => void): Promise<DescribeRuleGroupTableResponse>;
    /**
     * 创建集成任务
     */
    CreateIntegrationTask(req: CreateIntegrationTaskRequest, cb?: (error: string, rep: CreateIntegrationTaskResponse) => void): Promise<CreateIntegrationTaskResponse>;
    /**
     * 按补录计划批量终止实例。
     */
    KillOpsMakePlanInstances(req: KillOpsMakePlanInstancesRequest, cb?: (error: string, rep: KillOpsMakePlanInstancesResponse) => void): Promise<KillOpsMakePlanInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新任务
     */
    ModifyTaskInfo(req: ModifyTaskInfoRequest, cb?: (error: string, rep: ModifyTaskInfoResponse) => void): Promise<ModifyTaskInfoResponse>;
    /**
     * 获取表列表
     */
    DescribeRuleTablesByPage(req: DescribeRuleTablesByPageRequest, cb?: (error: string, rep: DescribeRuleTablesByPageResponse) => void): Promise<DescribeRuleTablesByPageResponse>;
    /**
     * 新建文件夹
     */
    CreatePath(req: CreatePathRequest, cb?: (error: string, rep: CreatePathResponse) => void): Promise<CreatePathResponse>;
    /**
     * 任务引用参数
     */
    CreateTaskParamDs(req: CreateTaskParamDsRequest, cb?: (error: string, rep: CreateTaskParamDsResponse) => void): Promise<CreateTaskParamDsResponse>;
    /**
     * 根据层级查找开发态上下游任务节点
     */
    DescribeDependTasksDevDs(req: DescribeDependTasksDevDsRequest, cb?: (error: string, rep: DescribeDependTasksDevDsResponse) => void): Promise<DescribeDependTasksDevDsResponse>;
    /**
     * 质量报告-修改维度权限
     */
    ModifyDimensionWeight(req: ModifyDimensionWeightRequest, cb?: (error: string, rep: ModifyDimensionWeightResponse) => void): Promise<ModifyDimensionWeightResponse>;
    /**
     * 数据开发模块-文件夹更新
     */
    ModifyDsFolder(req: ModifyDsFolderRequest, cb?: (error: string, rep: ModifyDsFolderResponse) => void): Promise<ModifyDsFolderResponse>;
    /**
     * 任务状态趋势
     */
    DescribeTaskByStatusReport(req: DescribeTaskByStatusReportRequest, cb?: (error: string, rep: DescribeTaskByStatusReportResponse) => void): Promise<DescribeTaskByStatusReportResponse>;
    /**
     * 注册采集器
     */
    CreateInLongAgent(req: CreateInLongAgentRequest, cb?: (error: string, rep: CreateInLongAgentResponse) => void): Promise<CreateInLongAgentResponse>;
    /**
     * 根据文件夹查询工作流
     */
    DescribeWorkflowByFordIds(req: DescribeWorkflowByFordIdsRequest, cb?: (error: string, rep: DescribeWorkflowByFordIdsResponse) => void): Promise<DescribeWorkflowByFordIdsResponse>;
    /**
     * 事件管理-导出事件
     */
    ExportDsEvent(req: ExportDsEventRequest, cb?: (error: string, rep: ExportDsEventResponse) => void): Promise<ExportDsEventResponse>;
    /**
     * 实例诊断信息
     */
    DiagnosePlus(req: DiagnosePlusRequest, cb?: (error: string, rep: DiagnosePlusResponse) => void): Promise<DiagnosePlusResponse>;
    /**
     * 删除集成节点
     */
    DeleteIntegrationNode(req: DeleteIntegrationNodeRequest, cb?: (error: string, rep: DeleteIntegrationNodeResponse) => void): Promise<DeleteIntegrationNodeResponse>;
    /**
     * 创建数据表：HIVE
     */
    ImportTableData(req: ImportTableDataRequest, cb?: (error: string, rep: ImportTableDataResponse) => void): Promise<ImportTableDataResponse>;
    /**
     * 停止集成任务
     */
    StopIntegrationTask(req: StopIntegrationTaskRequest, cb?: (error: string, rep: StopIntegrationTaskResponse) => void): Promise<StopIntegrationTaskResponse>;
    /**
     * 复制工作流
     */
    CopyWorkflowDs(req: CopyWorkflowDsRequest, cb?: (error: string, rep: CopyWorkflowDsResponse) => void): Promise<CopyWorkflowDsResponse>;
    /**
     * 实例强制成功
     */
    RunForceSucScheduleInstances(req: RunForceSucScheduleInstancesRequest, cb?: (error: string, rep: RunForceSucScheduleInstancesResponse) => void): Promise<RunForceSucScheduleInstancesResponse>;
    /**
     * 提交基线
     */
    SubmitBaseline(req: SubmitBaselineRequest, cb?: (error: string, rep: SubmitBaselineResponse) => void): Promise<SubmitBaselineResponse>;
    /**
     * 任务运维-批量冻结任务
     */
    FreezeOpsTasks(req: FreezeOpsTasksRequest, cb?: (error: string, rep: FreezeOpsTasksResponse) => void): Promise<FreezeOpsTasksResponse>;
    /**
     * 获取协同编辑资源锁
     */
    AcquireLock(req: AcquireLockRequest, cb?: (error: string, rep: AcquireLockResponse) => void): Promise<AcquireLockResponse>;
    /**
     * 查询规则模板操作记录
     */
    DescribeTemplateHistory(req: DescribeTemplateHistoryRequest, cb?: (error: string, rep: DescribeTemplateHistoryResponse) => void): Promise<DescribeTemplateHistoryResponse>;
    /**
     * 查询所有参数
     */
    DescribeAllParamDs(req: DescribeAllParamDsRequest, cb?: (error: string, rep: DescribeAllParamDsResponse) => void): Promise<DescribeAllParamDsResponse>;
    /**
     * 提交集成任务
     */
    CommitIntegrationTask(req: CommitIntegrationTaskRequest, cb?: (error: string, rep: CommitIntegrationTaskResponse) => void): Promise<CommitIntegrationTaskResponse>;
    /**
     * 删除任务
     */
    DeleteOfflineTask(req: DeleteOfflineTaskRequest, cb?: (error: string, rep: DeleteOfflineTaskResponse) => void): Promise<DeleteOfflineTaskResponse>;
    /**
     * 查询质量规则数据源
     */
    DescribeRuleDataSources(req: DescribeRuleDataSourcesRequest, cb?: (error: string, rep: DescribeRuleDataSourcesResponse) => void): Promise<DescribeRuleDataSourcesResponse>;
    /**
     * 获取长连接Token
     */
    DescribeToken(req?: DescribeTokenRequest, cb?: (error: string, rep: DescribeTokenResponse) => void): Promise<DescribeTokenResponse>;
    /**
     * 实例强制成功
     */
    ForceSucScheduleInstances(req: ForceSucScheduleInstancesRequest, cb?: (error: string, rep: ForceSucScheduleInstancesResponse) => void): Promise<ForceSucScheduleInstancesResponse>;
    /**
     * 删除项目参数版本
     */
    DeleteProjectParamVersionDs(req: DeleteProjectParamVersionDsRequest, cb?: (error: string, rep: DeleteProjectParamVersionDsResponse) => void): Promise<DeleteProjectParamVersionDsResponse>;
    /**
     * 批量置成功集成任务实例
     */
    BatchForceSuccessIntegrationTaskInstances(req: BatchForceSuccessIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchForceSuccessIntegrationTaskInstancesResponse) => void): Promise<BatchForceSuccessIntegrationTaskInstancesResponse>;
    /**
     * 查询实时任务日志列表
     */
    DescribeStreamTaskLogList(req: DescribeStreamTaskLogListRequest, cb?: (error: string, rep: DescribeStreamTaskLogListResponse) => void): Promise<DescribeStreamTaskLogListResponse>;
    /**
     * 数据质量概览页面触发维度分布统计接口
     */
    DescribeRuleDimStat(req: DescribeRuleDimStatRequest, cb?: (error: string, rep: DescribeRuleDimStatResponse) => void): Promise<DescribeRuleDimStatResponse>;
    /**
     * 质量报告-查询表质量详情
     */
    DescribeTableQualityDetails(req: DescribeTableQualityDetailsRequest, cb?: (error: string, rep: DescribeTableQualityDetailsResponse) => void): Promise<DescribeTableQualityDetailsResponse>;
    /**
     * 【过滤条件】
{表名称TableName,支持模糊匹配}       {表负责人TableOwnerName,支持模糊匹配}      {监控方式MonitorTypes，1.未配置 2.关联生产调度 3.离线周期检测,支持多选}  {订阅人ReceiverUin}
【必要字段】
{数据来源DatasourceId}
     */
    DescribeRuleGroupsByPage(req: DescribeRuleGroupsByPageRequest, cb?: (error: string, rep: DescribeRuleGroupsByPageResponse) => void): Promise<DescribeRuleGroupsByPageResponse>;
    /**
     * 查询表的所有列元数据
     */
    DescribeColumnsMeta(req: DescribeColumnsMetaRequest, cb?: (error: string, rep: DescribeColumnsMetaResponse) => void): Promise<DescribeColumnsMetaResponse>;
    /**
     * Ds批量删除任务，仅对任务状态为”已停止“有效；
     */
    BatchDeleteTasksDsAsync(req: BatchDeleteTasksDsAsyncRequest, cb?: (error: string, rep: BatchDeleteTasksDsAsyncResponse) => void): Promise<BatchDeleteTasksDsAsyncResponse>;
    /**
     * 异步导入集成任务
     */
    ImportOfflineTask(req: ImportOfflineTaskRequest, cb?: (error: string, rep: ImportOfflineTaskResponse) => void): Promise<ImportOfflineTaskResponse>;
    /**
     * 编排空间-工作流-创建任务文件夹
     */
    ModifyTaskFolder(req: ModifyTaskFolderRequest, cb?: (error: string, rep: ModifyTaskFolderResponse) => void): Promise<ModifyTaskFolderResponse>;
    /**
     * 分页查询质量规则
     */
    DescribeRulesByPage(req: DescribeRulesByPageRequest, cb?: (error: string, rep: DescribeRulesByPageResponse) => void): Promise<DescribeRulesByPageResponse>;
    /**
     * 删除项目用户
     */
    DeleteProjectUsers(req?: DeleteProjectUsersRequest, cb?: (error: string, rep: DeleteProjectUsersResponse) => void): Promise<DeleteProjectUsersResponse>;
    /**
     * 查询基线实例列表
     */
    DescribeBaselineInstances(req: DescribeBaselineInstancesRequest, cb?: (error: string, rep: DescribeBaselineInstancesResponse) => void): Promise<DescribeBaselineInstancesResponse>;
    /**
     * 删除文件
     */
    DeleteFile(req: DeleteFileRequest, cb?: (error: string, rep: DeleteFileResponse) => void): Promise<DeleteFileResponse>;
    /**
     * 保存任务信息
     */
    UploadContent(req: UploadContentRequest, cb?: (error: string, rep: UploadContentResponse) => void): Promise<UploadContentResponse>;
    /**
     * 资源管理-重命名资源
     */
    RenameResource(req: RenameResourceRequest, cb?: (error: string, rep: RenameResourceResponse) => void): Promise<RenameResourceResponse>;
    /**
     * 任务运维-任务列表 批量运行
     */
    BatchRunOpsTask(req: BatchRunOpsTaskRequest, cb?: (error: string, rep: BatchRunOpsTaskResponse) => void): Promise<BatchRunOpsTaskResponse>;
    /**
     * 获取操作历史列表
     */
    ListBatchJob(req: ListBatchJobRequest, cb?: (error: string, rep: ListBatchJobResponse) => void): Promise<ListBatchJobResponse>;
    /**
     * 获取工作流操作日志
     */
    DescribeWorkflowCanvasOpLogs(req: DescribeWorkflowCanvasOpLogsRequest, cb?: (error: string, rep: DescribeWorkflowCanvasOpLogsResponse) => void): Promise<DescribeWorkflowCanvasOpLogsResponse>;
    /**
     * 注册事件
     */
    RegisterDsEvent(req: RegisterDsEventRequest, cb?: (error: string, rep: RegisterDsEventResponse) => void): Promise<RegisterDsEventResponse>;
    /**
     * 数据集成大屏任务状态统计趋势
     */
    DescribeIntegrationStatisticsTaskStatusTrend(req: DescribeIntegrationStatisticsTaskStatusTrendRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsTaskStatusTrendResponse) => void): Promise<DescribeIntegrationStatisticsTaskStatusTrendResponse>;
    /**
     * 修改任务脚本Ds
     */
    ModifyTaskScriptDs(req: ModifyTaskScriptDsRequest, cb?: (error: string, rep: ModifyTaskScriptDsResponse) => void): Promise<ModifyTaskScriptDsResponse>;
    /**
     * 导出工作流到 Zip 文件，导出的文件存储在 cos 中(私有化 csp)，请自行下载，相关的下载信息在返回值中可以获取到
     */
    ExportWorkflowZip(req: ExportWorkflowZipRequest, cb?: (error: string, rep: ExportWorkflowZipResponse) => void): Promise<ExportWorkflowZipResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建工作流
     */
    CreateWorkflow(req: CreateWorkflowRequest, cb?: (error: string, rep: CreateWorkflowResponse) => void): Promise<CreateWorkflowResponse>;
    /**
     * 添加父任务依赖
     */
    ModifyTaskLinksDs(req: ModifyTaskLinksDsRequest, cb?: (error: string, rep: ModifyTaskLinksDsResponse) => void): Promise<ModifyTaskLinksDsResponse>;
    /**
     * 列出表血缘信息
     */
    DescribeTableLineage(req: DescribeTableLineageRequest, cb?: (error: string, rep: DescribeTableLineageResponse) => void): Promise<DescribeTableLineageResponse>;
    /**
     * 批量创建任务版本Ds
     */
    BatchCreateTaskVersionDs(req: BatchCreateTaskVersionDsRequest, cb?: (error: string, rep: BatchCreateTaskVersionDsResponse) => void): Promise<BatchCreateTaskVersionDsResponse>;
    /**
     * 通过工作流Id删除工作流
     */
    DeleteWorkflowById(req: DeleteWorkflowByIdRequest, cb?: (error: string, rep: DeleteWorkflowByIdResponse) => void): Promise<DeleteWorkflowByIdResponse>;
    /**
     * 查询质量规则列表
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 分页查询事件
     */
    DescribeDsEvent(req: DescribeDsEventRequest, cb?: (error: string, rep: DescribeDsEventResponse) => void): Promise<DescribeDsEventResponse>;
    /**
     * 启动集成任务
     */
    StartIntegrationTask(req: StartIntegrationTaskRequest, cb?: (error: string, rep: StartIntegrationTaskResponse) => void): Promise<StartIntegrationTaskResponse>;
    /**
     * 编排空间-工作流-删除任务文件夹
     */
    DeleteTaskFolder(req: DeleteTaskFolderRequest, cb?: (error: string, rep: DeleteTaskFolderResponse) => void): Promise<DeleteTaskFolderResponse>;
    /**
     * 查询表元数据详情
     */
    DescribeTableMeta(req: DescribeTableMetaRequest, cb?: (error: string, rep: DescribeTableMetaResponse) => void): Promise<DescribeTableMetaResponse>;
    /**
     * 任务状态趋势
     */
    DescribeStatisticInstanceStatusTrendOps(req: DescribeStatisticInstanceStatusTrendOpsRequest, cb?: (error: string, rep: DescribeStatisticInstanceStatusTrendOpsResponse) => void): Promise<DescribeStatisticInstanceStatusTrendOpsResponse>;
    /**
     * 获取数据表信息
     */
    DescribeTableInfoList(req: DescribeTableInfoListRequest, cb?: (error: string, rep: DescribeTableInfoListResponse) => void): Promise<DescribeTableInfoListResponse>;
    /**
     * 即席分析-获取任务列表
     */
    DescribeRecordList(req: DescribeRecordListRequest, cb?: (error: string, rep: DescribeRecordListResponse) => void): Promise<DescribeRecordListResponse>;
    /**
     * 查看任务版本详细信息
     */
    DescribeDsTaskVersionInfo(req: DescribeDsTaskVersionInfoRequest, cb?: (error: string, rep: DescribeDsTaskVersionInfoResponse) => void): Promise<DescribeDsTaskVersionInfoResponse>;
    /**
     * 提交etl测试运行任务
     */
    SubmitTestRun(req: SubmitTestRunRequest, cb?: (error: string, rep: SubmitTestRunResponse) => void): Promise<SubmitTestRunResponse>;
    /**
     * 规则执行结果列表查询
     */
    DescribeRuleExecResults(req: DescribeRuleExecResultsRequest, cb?: (error: string, rep: DescribeRuleExecResultsResponse) => void): Promise<DescribeRuleExecResultsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
触发事件
     */
    TriggerEvent(req: TriggerEventRequest, cb?: (error: string, rep: TriggerEventResponse) => void): Promise<TriggerEventResponse>;
    /**
     * Ds批量删除任务，仅对任务状态为”已停止“有效；
     */
    BatchDeleteTasksDs(req: BatchDeleteTasksDsRequest, cb?: (error: string, rep: BatchDeleteTasksDsResponse) => void): Promise<BatchDeleteTasksDsResponse>;
    /**
     * 任务信息查询-项目克隆使用
     */
    DescribeTasksForProjectClone(req: DescribeTasksForProjectCloneRequest, cb?: (error: string, rep: DescribeTasksForProjectCloneResponse) => void): Promise<DescribeTasksForProjectCloneResponse>;
    /**
     * 移动文件夹
     */
    RenewWorkflowFolderDs(req: RenewWorkflowFolderDsRequest, cb?: (error: string, rep: RenewWorkflowFolderDsResponse) => void): Promise<RenewWorkflowFolderDsResponse>;
    /**
     * 查询集成任务版本节点信息
     */
    DescribeIntegrationVersionNodesInfo(req: DescribeIntegrationVersionNodesInfoRequest, cb?: (error: string, rep: DescribeIntegrationVersionNodesInfoResponse) => void): Promise<DescribeIntegrationVersionNodesInfoResponse>;
    /**
     * 删除用户自定义函数
     */
    DeleteCustomFunction(req: DeleteCustomFunctionRequest, cb?: (error: string, rep: DeleteCustomFunctionResponse) => void): Promise<DeleteCustomFunctionResponse>;
    /**
     * 按补录计划批量重跑/选择补录计划→补录任务→补录实例，点击重跑
     */
    RerunOpsMakePlanInstances(req: RerunOpsMakePlanInstancesRequest, cb?: (error: string, rep: RerunOpsMakePlanInstancesResponse) => void): Promise<RerunOpsMakePlanInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹下的工作流
     */
    DescribeFolderWorkflowList(req: DescribeFolderWorkflowListRequest, cb?: (error: string, rep: DescribeFolderWorkflowListResponse) => void): Promise<DescribeFolderWorkflowListResponse>;
    /**
     * 查询工作流任务数
     */
    DescribeWorkflowTaskCount(req: DescribeWorkflowTaskCountRequest, cb?: (error: string, rep: DescribeWorkflowTaskCountResponse) => void): Promise<DescribeWorkflowTaskCountResponse>;
    /**
     * 数据集成大屏实例状态统计趋势
     */
    DescribeIntegrationStatisticsInstanceTrend(req: DescribeIntegrationStatisticsInstanceTrendRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsInstanceTrendResponse) => void): Promise<DescribeIntegrationStatisticsInstanceTrendResponse>;
    /**
     * 批量重跑集成任务实例
     */
    BatchRerunIntegrationTaskInstances(req: BatchRerunIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchRerunIntegrationTaskInstancesResponse) => void): Promise<BatchRerunIntegrationTaskInstancesResponse>;
    /**
     * 创建任务连接
     */
    CreateLink(req: CreateLinkRequest, cb?: (error: string, rep: CreateLinkResponse) => void): Promise<CreateLinkResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件
     */
    RegisterEvent(req: RegisterEventRequest, cb?: (error: string, rep: RegisterEventResponse) => void): Promise<RegisterEventResponse>;
    /**
     * 任务是否存在监听事件
     */
    JudgeTaskListenEvent(req: JudgeTaskListenEventRequest, cb?: (error: string, rep: JudgeTaskListenEventResponse) => void): Promise<JudgeTaskListenEventResponse>;
    /**
     * 批量停止工作流
     */
    BatchStopWorkflowsByIds(req: BatchStopWorkflowsByIdsRequest, cb?: (error: string, rep: BatchStopWorkflowsByIdsResponse) => void): Promise<BatchStopWorkflowsByIdsResponse>;
    /**
     * 查询采集器关联的任务列表
     */
    DescribeInLongAgentTaskList(req: DescribeInLongAgentTaskListRequest, cb?: (error: string, rep: DescribeInLongAgentTaskListResponse) => void): Promise<DescribeInLongAgentTaskListResponse>;
    /**
     * 暂停集成任务
     */
    SuspendIntegrationTask(req: SuspendIntegrationTaskRequest, cb?: (error: string, rep: SuspendIntegrationTaskResponse) => void): Promise<SuspendIntegrationTaskResponse>;
    /**
     * 获取项目信息
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 注册事件监听者
     */
    RegisterDsEventListener(req: RegisterDsEventListenerRequest, cb?: (error: string, rep: RegisterDsEventListenerResponse) => void): Promise<RegisterDsEventListenerResponse>;
    /**
     * 数据开发-获取工作流画布信息
     */
    DescribeWorkflowCanvasInfoDs(req: DescribeWorkflowCanvasInfoDsRequest, cb?: (error: string, rep: DescribeWorkflowCanvasInfoDsResponse) => void): Promise<DescribeWorkflowCanvasInfoDsResponse>;
    /**
     * 移动文件
     */
    MoveFile(req: MoveFileRequest, cb?: (error: string, rep: MoveFileResponse) => void): Promise<MoveFileResponse>;
    /**
     * 资源管理需要先将资源上传到cos中，然后调用该接口，将cos资源绑定到wedata
     */
    CreateOrUpdateResource(req: CreateOrUpdateResourceRequest, cb?: (error: string, rep: CreateOrUpdateResourceResponse) => void): Promise<CreateOrUpdateResourceResponse>;
    /**
     * 列出表血缘信息
     */
    DescribeTableLineageInfo(req: DescribeTableLineageInfoRequest, cb?: (error: string, rep: DescribeTableLineageInfoResponse) => void): Promise<DescribeTableLineageInfoResponse>;
    /**
     * 提交自定义函数
     */
    SubmitCustomFunction(req: SubmitCustomFunctionRequest, cb?: (error: string, rep: SubmitCustomFunctionResponse) => void): Promise<SubmitCustomFunctionResponse>;
    /**
     * 查询工作流画布
     */
    DescribeWorkflowCanvasInfo(req: DescribeWorkflowCanvasInfoRequest, cb?: (error: string, rep: DescribeWorkflowCanvasInfoResponse) => void): Promise<DescribeWorkflowCanvasInfoResponse>;
    /**
     * 查询规则模板维度分布情况
     */
    DescribeTemplateDimCount(req: DescribeTemplateDimCountRequest, cb?: (error: string, rep: DescribeTemplateDimCountResponse) => void): Promise<DescribeTemplateDimCountResponse>;
    /**
     * 查询规则模版列表
     */
    DescribeRuleTemplates(req: DescribeRuleTemplatesRequest, cb?: (error: string, rep: DescribeRuleTemplatesResponse) => void): Promise<DescribeRuleTemplatesResponse>;
    /**
     * 基于当前任务的数据时间计算依赖的上游任务数据时间
     */
    DescribeTaskParentRunTime(req: DescribeTaskParentRunTimeRequest, cb?: (error: string, rep: DescribeTaskParentRunTimeResponse) => void): Promise<DescribeTaskParentRunTimeResponse>;
}

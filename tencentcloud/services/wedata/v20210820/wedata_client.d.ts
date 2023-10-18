import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRuleTemplateResponse, DescribeEventConsumeTasksResponse, DescribeIntegrationStatisticsResponse, SubmitTaskTestRunResponse, DescribeStreamTaskLogListRequest, ModifyBaselineAlarmStatusRequest, DescribeIntegrationNodeResponse, MakeUpTasksNewResponse, ModifyIntegrationTaskRequest, DescribeScheduleInstanceResponse, DescribeRuleDimStatResponse, DescribeInstanceLogsRequest, DescribeTaskAlarmRegulationsResponse, CheckIntegrationTaskNameExistsResponse, DescribeWorkflowInfoByIdRequest, CreateDataSourceRequest, DescribeTrendStatResponse, DescribeRealTimeTaskSpeedRequest, DescribeRuleDimStatRequest, FreezeTasksRequest, DescribeDataObjectsResponse, DescribeRuleTemplatesResponse, DescribeRuleExecStatRequest, MakeUpWorkflowNewResponse, DescribeInstancesInfoWithTaskInfoResponse, ModifyBaselineTaskAlarmStatusResponse, CreateIntegrationNodeResponse, BatchDeleteTasksDsRequest, CreateDsFolderResponse, FreezeOpsTasksRequest, DeleteBaselineRequest, DescribeRulesResponse, CreateWorkflowRequest, FindAllFolderRequest, DescribeRuleGroupExecResultsByPageRequest, DescribeTableLineageRequest, KillOpsMakePlanInstancesRequest, UpdateWorkflowOwnerRequest, DescribeEventCasesRequest, BatchResumeIntegrationTasksResponse, DescribeRuleExecResultsByPageResponse, MakeUpTasksByWorkflowResponse, CheckTaskNameExistRequest, DescribeFunctionKindsRequest, DescribeFunctionKindsResponse, UpdateInLongAgentResponse, DescribeTemplateDimCountRequest, ModifyIntegrationTaskResponse, DescribeDataSourceListRequest, DescribeInstanceByCycleResponse, DescribeIntegrationStatisticsRecordsTrendRequest, DescribeInLongTkeClusterListResponse, DescribeOperateTasksRequest, DescribeDataCheckStatRequest, RegisterEventListenerResponse, RestartInLongAgentResponse, GetOfflineInstanceListRequest, DescribeRuleExecResultsRequest, DescribeStandardRuleDetailInfoListResponse, DescribeDrSonInstanceResponse, RunTaskResponse, SubmitWorkflowResponse, DeleteBaselineResponse, TriggerEventRequest, DescribeDependOpsTasksRequest, DescribeClusterNamespaceListResponse, CreateInLongAgentResponse, DescribeInstanceLogRequest, DescribeKafkaTopicInfoRequest, DescribeRuleGroupSubscriptionResponse, DescribeIntegrationStatisticsTaskStatusTrendResponse, DeleteResourceFileRequest, SaveCustomFunctionRequest, DescribeSchedulerTaskTypeCntRequest, ModifyWorkflowScheduleRequest, CreateDsFolderRequest, RegisterEventRequest, CheckAlarmRegularNameExistResponse, DescribeDiagnosticInfoByBaselineIdRequest, DescribeRuleGroupsByPageRequest, DescribeDataBasesRequest, BatchDeleteIntegrationTasksResponse, DescribeThirdTaskRunLogRequest, BatchRerunIntegrationTaskInstancesRequest, DescribeDrSonInstanceRequest, DescribeWorkflowTaskCountResponse, SubmitCustomFunctionResponse, DescribeDataObjectsRequest, DescribeTableLineageResponse, ModifyRuleGroupSubscriptionRequest, DescribeDataSourceListResponse, DescribeInstanceLogDetailRequest, BatchSuspendIntegrationTasksRequest, DeleteDsFolderResponse, DescribeDrInstancePageResponse, DescribeSchedulerTaskTypeCntResponse, DeleteCustomFunctionResponse, EditBaselineRequest, DescribeTaskScriptResponse, UploadContentResponse, ForceSucScheduleInstancesResponse, DescribeTaskInstanceResponse, DescribeSchedulerInstanceStatusResponse, CountOpsInstanceStateRequest, SubmitBaselineRequest, DescribeProdTasksRequest, CheckDuplicateTemplateNameRequest, DescribeEventTypesResponse, BatchUpdateIntegrationTasksRequest, CreateResourcePathRequest, BatchModifyOpsOwnersRequest, ModifyTaskNameResponse, BatchDeleteOpsTasksRequest, ResumeIntegrationTaskResponse, FreezeTasksResponse, DescribeTaskReportDetailListResponse, DescribeBaselineInstanceDagRequest, DescribeIntegrationStatisticsInstanceTrendResponse, DescribeInstanceLogListRequest, RerunOpsMakePlanInstancesResponse, DescribeAllTaskTypeResponse, DescribeRuleGroupResponse, DeleteDataSourcesResponse, ModifyTaskLinksRequest, DescribeBaselineInstancesResponse, DescribeOpsMakePlansResponse, DeleteFileRequest, DeleteDataSourcesRequest, ModifyTaskAlarmRegularRequest, DescribeOrganizationalFunctionsRequest, DescribeRuleTemplateResponse, DescribeKafkaTopicInfoResponse, DescribeDependTaskListsRequest, RerunInstancesRequest, DescribeEventsRequest, DescribeAllByFolderNewRequest, DescribeTaskRunHistoryResponse, BatchStopWorkflowsByIdsRequest, DescribeBatchOperateTaskResponse, CommitIntegrationTaskRequest, DescribeTableInfoListRequest, DescribeQualityScoreRequest, RunForceSucScheduleInstancesResponse, DescribeBaselineAllTaskDagResponse, CommitIntegrationTaskResponse, CreateBaselineRequest, DeleteResourceFilesRequest, DeleteResourceFileResponse, SubmitTaskResponse, ModifyFolderRequest, DescribeAlarmEventsResponse, DescribeInstanceLogListResponse, DescribeTableQualityDetailsRequest, DescribeScheduleInstancesResponse, DeleteProjectParamDsResponse, RunTaskRequest, DescribeOpsWorkflowsRequest, DescribeDependTasksNewRequest, CreateOfflineTaskResponse, DescribeColumnLineageRequest, CreateTaskAlarmRegularRequest, ModifyRuleRequest, FindAllFolderResponse, MakeUpOpsTasksResponse, StopBaselineRequest, DescribeInLongAgentListRequest, DescribeRuleExecLogResponse, DescribeDependOpsTaskListRequest, DescribeInstanceLogsResponse, DescribeDsFolderTreeRequest, BatchDeleteIntegrationTasksRequest, KillOpsMakePlanInstancesResponse, DescribeScheduleInstanceRequest, TaskLogRequest, DescribeBaselineAllTaskDagRequest, DescribeIntegrationStatisticsTaskStatusRequest, GetFileInfoResponse, BatchDeleteTasksNewResponse, DescribeBelongToResponse, FreezeOpsTasksResponse, ModifyRuleGroupSubscriptionResponse, SuspendIntegrationTaskRequest, CreateHiveTableByDDLResponse, DescribeOperateOpsTaskDatasourceTypeRequest, DescribeTaskByCycleResponse, DescribeExecStrategyResponse, DescribeSuccessorOpsTaskInfosResponse, DeleteResourceResponse, ModifyRuleResponse, DescribeInstanceLogFileResponse, DescribeTaskInstanceReportDetailRequest, SubmitBaselineResponse, DeleteTaskDsResponse, DescribeAllByFolderNewResponse, DescribeDsParentFolderTreeRequest, KillScheduleInstancesResponse, RerunScheduleInstancesRequest, DescribeTaskInstancesResponse, CheckIntegrationNodeNameExistsResponse, DescribeWorkflowTaskCountRequest, DescribeInstanceListRequest, ModifyWorkflowScheduleResponse, DeleteCustomFunctionRequest, DescribeAllTaskTypeRequest, GetFileInfoRequest, DescribeSonInstancesRequest, DescribeBaselinesResponse, DryRunDIOfflineTaskRequest, CreateOfflineTaskRequest, SubmitSqlTaskResponse, DescribeIntegrationStatisticsRecordsTrendResponse, DescribeWorkflowOpsCanvasInfoRequest, RerunOpsMakePlanInstancesRequest, BatchForceSuccessIntegrationTaskInstancesResponse, DescribeClusterNamespaceListRequest, DiagnosePlusRequest, DescribeDiagnosticInfoByBaselineIdResponse, CreateInLongAgentRequest, ModifyRuleTemplateRequest, DescribeRuleExecStatResponse, DagInstancesResponse, DescribeAllUsedVersionSonResponse, DescribeTemplateHistoryRequest, BatchRunOpsTaskResponse, FreezeTasksByMultiWorkflowRequest, DescribeEventResponse, DescribeOpsMakePlanInstancesRequest, ForceSucInstancesRequest, DescribeRuleExecExportResultRequest, GenHiveTableDDLSqlRequest, BatchCreateIntegrationTaskAlarmsRequest, LockIntegrationTaskResponse, KillScheduleInstancesRequest, DescribeEventsResponse, BatchStopOpsTasksRequest, DescribeFunctionTypesResponse, DeleteWorkflowNewRequest, BatchUpdateIntegrationTasksResponse, TaskLogResponse, CheckDuplicateRuleNameRequest, ModifyRuleTemplateResponse, DescribeInstanceLastLogRequest, DescribeEventRequest, BatchModifyOpsOwnersResponse, CreateTaskAlarmRegularResponse, DeleteRuleTemplateRequest, DescribeOpsMakePlanTasksRequest, CreateBaselineResponse, DescribeProjectRequest, CreateIntegrationTaskResponse, DescribeIntegrationTasksResponse, DescribeAlarmReceiverRequest, DescribeSchedulerTaskCntByStatusResponse, ModifyWorkflowInfoRequest, StartIntegrationTaskResponse, BatchResumeIntegrationTasksRequest, DescribeFolderListRequest, DeleteTaskAlarmRegularResponse, DeleteWorkflowByIdRequest, DescribeFathersResponse, DeleteRuleResponse, DescribeOpsMakePlanTasksResponse, DescribeInLongAgentListResponse, CreateTaskResponse, BatchStopIntegrationTasksResponse, ForceSucScheduleInstancesRequest, DescribeInstanceByCycleReportResponse, DeleteIntegrationNodeResponse, CommitRuleGroupExecResultRequest, DescribeDataSourceInfoListRequest, DescribeTaskInstancesRequest, UpdateInLongAgentRequest, DescribeRuleGroupExecResultsByPageWithoutAuthResponse, DescribeIntegrationNodeRequest, DescribeOperateOpsTaskDatasourceResponse, DescribeEventIsAlarmTypesResponse, DescribeSchedulerRunTimeInstanceCntByStatusResponse, DescribeDataTypesRequest, RunForceSucScheduleInstancesRequest, DescribeQualityScoreResponse, DeleteInLongAgentRequest, DescribeDsParentFolderTreeResponse, DescribeRuleTablesByPageRequest, DescribeIntegrationStatisticsAgentStatusResponse, DescribeEventConsumeTasksRequest, DescribeDataSourceInfoListResponse, DescribeRelatedInstancesResponse, CreateOrUpdateResourceRequest, CheckIntegrationNodeNameExistsRequest, MakeUpTasksNewRequest, GetOfflineInstanceListResponse, DescribeOpsMakePlansRequest, CreateOpsMakePlanRequest, BatchDeleteTasksDsResponse, DescribeDimensionScoreResponse, DescribeOrganizationalFunctionsResponse, DescribeInstancesInfoWithTaskInfoRequest, DescribeEventDetailRequest, FreezeTasksByWorkflowIdsRequest, DescribeDataTypesResponse, DescribeTaskByCycleReportResponse, BatchDeleteOpsTasksResponse, CheckDuplicateRuleNameResponse, DeleteRuleRequest, DeleteResourceFilesResponse, DescribeEventIsAlarmTypesRequest, CreateOpsMakePlanResponse, DescribeStreamTaskLogListResponse, DeleteWorkflowNewResponse, DescribeRuleGroupExecResultsByPageResponse, DescribeRuleGroupExecResultsByPageWithoutAuthRequest, GetIntegrationNodeColumnSchemaRequest, DeleteWorkflowByIdResponse, DescribeInstancesResponse, DeleteIntegrationNodeRequest, ModifyIntegrationNodeResponse, DescribeIntegrationStatisticsTaskStatusTrendRequest, DescribeRuleHistoryByPageResponse, DescribeWorkflowInfoByIdResponse, DescribeBaselineByIdRequest, ModifyDimensionWeightResponse, ModifyTaskAlarmRegularResponse, CreateRuleResponse, ModifyTaskLinksResponse, DescribeTaskRunHistoryRequest, BatchMakeUpIntegrationTasksRequest, DeleteOfflineTaskRequest, SubmitTaskRequest, DescribeInLongAgentVpcListRequest, DescribeDatabaseInfoListResponse, ModifyDsFolderResponse, DescribeTableScoreTrendResponse, ModifyIntegrationNodeRequest, ModifyMonitorStatusResponse, DescribeRuleTemplatesByPageResponse, DescribeTemplateDimCountResponse, DescribeFunctionTypesRequest, RestartInLongAgentRequest, BatchDeleteTasksNewRequest, DescribeInstanceLogResponse, DeleteInLongAgentResponse, ModifyMonitorStatusRequest, DescribeColumnLineageResponse, DeleteFolderRequest, DescribeIntegrationTaskRequest, DescribeWorkflowListByProjectIdResponse, DeleteFilePathRequest, DescribeRulesByPageRequest, DescribeTopTableStatResponse, DescribeEventDetailResponse, DeleteDsFolderRequest, FreezeTasksByMultiWorkflowResponse, SaveCustomFunctionResponse, ModifyDsFolderRequest, CreateTaskRequest, ModifyDimensionWeightRequest, CreateFolderResponse, DescribeRealTimeTaskInstanceNodeInfoRequest, DescribeDependTaskListsResponse, DescribeTaskInstanceReportDetailResponse, CreateHiveTableResponse, ModifyDataSourceResponse, DescribeTaskByStatusReportResponse, DescribeMonitorsByPageRequest, DescribeRuleGroupsByPageResponse, SubmitSqlTaskRequest, DescribeTaskLockStatusResponse, KillInstancesRequest, RemoveWorkflowDsRequest, BatchKillIntegrationTaskInstancesRequest, DeleteTaskDsRequest, BatchStopOpsTasksResponse, DeleteFilePathResponse, RunRerunScheduleInstancesResponse, RobAndLockIntegrationTaskRequest, CommitExportTaskResponse, ModifyTaskInfoResponse, CreateRuleRequest, DescribeRuleGroupSubscriptionRequest, DescribeRuleExecResultsResponse, DescribeTaskByStatusReportRequest, DeleteFileResponse, ModifyDataSourceRequest, DescribeDrInstanceScriptContentResponse, StopBaselineResponse, TriggerEventResponse, DescribeSchedulerTaskCntByStatusRequest, DescribeInstancesRequest, DescribeRuleDataSourcesRequest, CreateCustomFunctionRequest, DescribeResourceManagePathTreesRequest, DescribeTasksByPageResponse, DescribeInstanceByCycleReportRequest, DescribeTableQualityDetailsResponse, DescribeStandardRuleDetailInfoListRequest, DescribeDataSourceWithoutInfoResponse, BatchStopWorkflowsByIdsResponse, DescribeDependOpsTaskListResponse, DescribeRuleTemplatesRequest, DiagnosePlusResponse, DescribeWorkflowListByProjectIdRequest, DescribeStatisticInstanceStatusTrendOpsResponse, CountOpsInstanceStateResponse, DescribeQualityScoreTrendRequest, SubmitTaskTestRunRequest, DescribeAlarmEventsRequest, DeleteProjectParamDsRequest, DescribeRuleTablesByPageResponse, DescribeSonInstancesResponse, DescribeThirdTaskRunLogResponse, DescribeTaskAlarmRegulationsRequest, DescribeRuleExecHistoryRequest, EditBaselineResponse, CreateCustomFunctionResponse, ModifyTaskInfoRequest, DescribeOperateOpsTasksRequest, DescribeTaskDetailRequest, DescribeOfflineTaskTokenRequest, CreateWorkflowResponse, DescribeRuleExecDetailRequest, DeleteResourceRequest, RegisterEventListenerRequest, RobAndLockIntegrationTaskResponse, DescribeFathersRequest, DeleteTaskAlarmRegularRequest, DescribeIntegrationStatisticsAgentStatusRequest, DescribeInstanceLogFileRequest, UnlockIntegrationTaskRequest, DeleteOfflineTaskResponse, DescribeDrInstancePageRequest, DescribeBelongToRequest, ForceSucInstancesResponse, GenHiveTableDDLSqlResponse, DescribeTaskReportResponse, DescribeRuleGroupTableRequest, CheckAlarmRegularNameExistRequest, GetOfflineDIInstanceListResponse, DescribeOperateOpsTaskDatasourceRequest, DescribeWorkflowExecuteByIdResponse, CreateIntegrationTaskRequest, BatchRunOpsTaskRequest, DescribeRealTimeTaskMetricOverviewRequest, CreateResourcePathResponse, DeleteFolderResponse, FreezeTasksByWorkflowIdsResponse, SubmitWorkflowRequest, DescribeResourceManagePathTreesResponse, RunRerunScheduleInstancesRequest, StartIntegrationTaskRequest, DescribeTaskDetailResponse, RerunInstancesResponse, DeleteIntegrationTaskRequest, CreateOrUpdateResourceResponse, ModifyTaskScriptRequest, CreateIntegrationNodeRequest, DescribeTableSchemaInfoRequest, DescribeTableScoreTrendRequest, ModifyExecStrategyRequest, DescribeBaselineInstancesRequest, MakeUpOpsTasksRequest, BatchForceSuccessIntegrationTaskInstancesRequest, DescribeRealTimeTaskInstanceNodeInfoResponse, DescribeTaskByCycleReportRequest, DescribeInstanceLogDetailResponse, SetTaskAlarmNewResponse, DescribeProdTasksResponse, SubmitCustomFunctionRequest, DescribeBatchOperateTaskRequest, MakeUpWorkflowNewRequest, DescribeTaskReportRequest, CommitRuleGroupTaskResponse, DescribeRealTimeTaskMetricOverviewResponse, DescribeOfflineTaskTokenResponse, DescribeTableInfoListResponse, RemoveWorkflowDsResponse, GetOfflineDIInstanceListRequest, ModifyExecStrategyResponse, BatchStartIntegrationTasksRequest, DescribeDatasourceResponse, DescribeDatasourceRequest, KillInstancesResponse, DescribeStatisticInstanceStatusTrendOpsRequest, DescribeEventCasesResponse, DescribeTableSchemaInfoResponse, DescribeDataBasesResponse, SuspendIntegrationTaskResponse, UpdateWorkflowOwnerResponse, SetTaskAlarmNewRequest, RerunScheduleInstancesResponse, DescribeInstanceListResponse, DescribeOpsInstanceLogListRequest, UploadContentRequest, DescribeTaskReportDetailListRequest, DescribeProjectResponse, StopIntegrationTaskRequest, DescribeRuleGroupRequest, CreateDataSourceResponse, DescribeFolderWorkflowListResponse, CreateFolderRequest, DescribeIntegrationVersionNodesInfoResponse, DescribeRulesRequest, DescribeDrInstanceScriptContentRequest, DescribeRuleResponse, DescribeTaskScriptRequest, DescribeRuleHistoryByPageRequest, CheckIntegrationTaskNameExistsRequest, DescribeRuleRequest, DescribeRuleDataSourcesResponse, DescribeAlarmReceiverResponse, DescribeWorkflowCanvasInfoResponse, BatchModifyOwnersNewResponse, DescribeRulesByPageResponse, ModifyBaselineTaskAlarmStatusRequest, ModifyTaskScriptResponse, DescribeDimensionScoreRequest, BatchStartIntegrationTasksResponse, DescribeIntegrationVersionNodesInfoRequest, DescribeSuccessorOpsTaskInfosRequest, DescribeSchedulerInstanceStatusRequest, DescribeScheduleInstancesRequest, DescribeRealTimeTaskSpeedResponse, ModifyWorkflowInfoResponse, DescribeFolderWorkflowListRequest, DescribeBaselineInstanceDagResponse, CheckTaskNameExistResponse, DescribeSchedulerRunTimeInstanceCntByStatusRequest, DescribeInLongAgentTaskListResponse, LockIntegrationTaskRequest, BatchStopIntegrationTasksRequest, DescribeRuleTemplatesByPageRequest, DescribeMonitorsByPageResponse, DescribeRuleExecResultsByPageRequest, RunTasksByMultiWorkflowResponse, DescribeInstanceLastLogResponse, DescribeExecStrategyRequest, CreateHiveTableRequest, BatchKillIntegrationTaskInstancesResponse, RunTasksByMultiWorkflowRequest, DescribeOperateOpsTaskDatasourceTypeResponse, CommitRuleGroupTaskRequest, DescribeRuleGroupTableResponse, DescribeDataSourceWithoutInfoRequest, DescribeTemplateHistoryResponse, DescribeWorkflowOpsCanvasInfoResponse, DescribeInLongAgentVpcListResponse, DescribeDependOpsTasksResponse, DeleteRuleTemplateResponse, DescribeRuleTemplateRequest, DescribeTaskByCycleRequest, CreateRuleTemplateRequest, BatchStopTasksNewResponse, MakeUpTasksByWorkflowRequest, UnlockIntegrationTaskResponse, DescribeRuleExecDetailResponse, DeleteIntegrationTaskResponse, ResumeIntegrationTaskRequest, DescribeInstanceByCycleRequest, DescribeFolderListResponse, DescribeIntegrationStatisticsTaskStatusResponse, DescribeAllUsedVersionSonRequest, DescribeOpsMakePlanInstancesResponse, DescribeDatabaseInfoListRequest, DescribeInLongTkeClusterListRequest, DescribeRuleExecHistoryResponse, DescribeIntegrationTaskResponse, ModifyBaselineAlarmStatusResponse, DescribeQualityScoreTrendResponse, ModifyFolderResponse, CreateHiveTableByDDLRequest, GetIntegrationNodeColumnSchemaResponse, StopIntegrationTaskResponse, DescribeOpsWorkflowsResponse, DescribeDependTasksNewResponse, CheckDuplicateTemplateNameResponse, DescribeRelatedInstancesRequest, DescribeDataCheckStatResponse, DescribeIntegrationStatisticsInstanceTrendRequest, BatchModifyOwnersNewRequest, DescribeDsFolderTreeResponse, DescribeWorkflowCanvasInfoRequest, DagInstancesRequest, DryRunDIOfflineTaskResponse, DescribeTaskLockStatusRequest, DescribeBaselinesRequest, DescribeRuleExecExportResultResponse, DescribeOperateTasksResponse, DescribeTopTableStatRequest, BatchCreateIntegrationTaskAlarmsResponse, DescribeIntegrationTasksRequest, BatchStopTasksNewRequest, DescribeInLongAgentTaskListRequest, ModifyTaskNameRequest, DescribeTrendStatRequest, DescribeEventTypesRequest, DescribeOpsInstanceLogListResponse, DescribeOperateOpsTasksResponse, DescribeBaselineInstanceGanttRequest, BatchSuspendIntegrationTasksResponse, DescribeWorkflowExecuteByIdRequest, RegisterEventResponse, DescribeRuleExecLogRequest, BatchRerunIntegrationTaskInstancesResponse, DescribeBaselineByIdResponse, DescribeBaselineInstanceGanttResponse, CommitRuleGroupExecResultResponse, DescribeIntegrationStatisticsRequest, DescribeTasksByPageRequest, BatchMakeUpIntegrationTasksResponse, CommitExportTaskRequest, DescribeTaskInstanceRequest } from "./wedata_models";
/**
 * wedata client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建任务
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * 查询基线DAG
     */
    DescribeBaselineAllTaskDag(req: DescribeBaselineAllTaskDagRequest, cb?: (error: string, rep: DescribeBaselineAllTaskDagResponse) => void): Promise<DescribeBaselineAllTaskDagResponse>;
    /**
     * 创建任务告警规则
     */
    CreateTaskAlarmRegular(req: CreateTaskAlarmRegularRequest, cb?: (error: string, rep: CreateTaskAlarmRegularResponse) => void): Promise<CreateTaskAlarmRegularResponse>;
    /**
     * 数据集成大屏同步条数统计趋势
     */
    DescribeIntegrationStatisticsRecordsTrend(req: DescribeIntegrationStatisticsRecordsTrendRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsRecordsTrendResponse) => void): Promise<DescribeIntegrationStatisticsRecordsTrendResponse>;
    /**
     * 删除集成任务
     */
    DeleteIntegrationTask(req: DeleteIntegrationTaskRequest, cb?: (error: string, rep: DeleteIntegrationTaskResponse) => void): Promise<DeleteIntegrationTaskResponse>;
    /**
     * 批量kill实例
     */
    KillScheduleInstances(req: KillScheduleInstancesRequest, cb?: (error: string, rep: KillScheduleInstancesResponse) => void): Promise<KillScheduleInstancesResponse>;
    /**
     * 开发空间-获取数据开发脚本信息
     */
    GetFileInfo(req: GetFileInfoRequest, cb?: (error: string, rep: GetFileInfoResponse) => void): Promise<GetFileInfoResponse>;
    /**
     * 检查规则名称是否重复
     */
    CheckDuplicateRuleName(req: CheckDuplicateRuleNameRequest, cb?: (error: string, rep: CheckDuplicateRuleNameResponse) => void): Promise<CheckDuplicateRuleNameResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改数据源
     */
    ModifyDataSource(req: ModifyDataSourceRequest, cb?: (error: string, rep: ModifyDataSourceResponse) => void): Promise<ModifyDataSourceResponse>;
    /**
     * 创建规则模版
     */
    CreateRuleTemplate(req: CreateRuleTemplateRequest, cb?: (error: string, rep: CreateRuleTemplateResponse) => void): Promise<CreateRuleTemplateResponse>;
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
     * 任务状态周期增长趋势
     */
    DescribeTaskByCycleReport(req: DescribeTaskByCycleReportRequest, cb?: (error: string, rep: DescribeTaskByCycleReportResponse) => void): Promise<DescribeTaskByCycleReportResponse>;
    /**
     * 数据质量的概览页面数据监测情况接口
     */
    DescribeDataCheckStat(req: DescribeDataCheckStatRequest, cb?: (error: string, rep: DescribeDataCheckStatResponse) => void): Promise<DescribeDataCheckStatResponse>;
    /**
     * 分页查询规则执行结果列表
     */
    DescribeRuleExecResultsByPage(req: DescribeRuleExecResultsByPageRequest, cb?: (error: string, rep: DescribeRuleExecResultsByPageResponse) => void): Promise<DescribeRuleExecResultsByPageResponse>;
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
     * 更新规则组执行策略
     */
    ModifyExecStrategy(req: ModifyExecStrategyRequest, cb?: (error: string, rep: ModifyExecStrategyResponse) => void): Promise<ModifyExecStrategyResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件监听器
     */
    RegisterEventListener(req: RegisterEventListenerRequest, cb?: (error: string, rep: RegisterEventListenerResponse) => void): Promise<RegisterEventListenerResponse>;
    /**
     * 建hive表
     */
    CreateHiveTable(req: CreateHiveTableRequest, cb?: (error: string, rep: CreateHiveTableResponse) => void): Promise<CreateHiveTableResponse>;
    /**
     * 获取集群命名空间列表
     */
    DescribeClusterNamespaceList(req: DescribeClusterNamespaceListRequest, cb?: (error: string, rep: DescribeClusterNamespaceListResponse) => void): Promise<DescribeClusterNamespaceListResponse>;
    /**
     * 任务运维列表组合条件查询
     */
    DescribeOperateOpsTasks(req: DescribeOperateOpsTasksRequest, cb?: (error: string, rep: DescribeOperateOpsTasksResponse) => void): Promise<DescribeOperateOpsTasksResponse>;
    /**
     * 根据周期类型查询所有实例
     */
    DescribeInstanceByCycle(req: DescribeInstanceByCycleRequest, cb?: (error: string, rep: DescribeInstanceByCycleResponse) => void): Promise<DescribeInstanceByCycleResponse>;
    /**
     * 查询集成节点
     */
    DescribeIntegrationNode(req: DescribeIntegrationNodeRequest, cb?: (error: string, rep: DescribeIntegrationNodeResponse) => void): Promise<DescribeIntegrationNodeResponse>;
    /**
     * 在基线系统内查询单个调度任务实例
     */
    DescribeScheduleInstance(req: DescribeScheduleInstanceRequest, cb?: (error: string, rep: DescribeScheduleInstanceResponse) => void): Promise<DescribeScheduleInstanceResponse>;
    /**
     * 根据周期类型 查询所有任务
     */
    DescribeTaskByCycle(req: DescribeTaskByCycleRequest, cb?: (error: string, rep: DescribeTaskByCycleResponse) => void): Promise<DescribeTaskByCycleResponse>;
    /**
     * 智能运维-批量删除任务
     */
    BatchDeleteOpsTasks(req: BatchDeleteOpsTasksRequest, cb?: (error: string, rep: BatchDeleteOpsTasksResponse) => void): Promise<BatchDeleteOpsTasksResponse>;
    /**
     * 更新质量规则接口
     */
    ModifyRule(req: ModifyRuleRequest, cb?: (error: string, rep: ModifyRuleResponse) => void): Promise<ModifyRuleResponse>;
    /**
     * 提交自定义函数
     */
    SubmitCustomFunction(req: SubmitCustomFunctionRequest, cb?: (error: string, rep: SubmitCustomFunctionResponse) => void): Promise<SubmitCustomFunctionResponse>;
    /**
     * 规则组执行结果分页查询接口不带鉴权
     */
    DescribeRuleGroupExecResultsByPageWithoutAuth(req: DescribeRuleGroupExecResultsByPageWithoutAuthRequest, cb?: (error: string, rep: DescribeRuleGroupExecResultsByPageWithoutAuthResponse) => void): Promise<DescribeRuleGroupExecResultsByPageWithoutAuthResponse>;
    /**
     * 删除编排空间工作流
     */
    RemoveWorkflowDs(req: RemoveWorkflowDsRequest, cb?: (error: string, rep: RemoveWorkflowDsResponse) => void): Promise<RemoveWorkflowDsResponse>;
    /**
     * 获取第三方运行日志
     */
    DescribeThirdTaskRunLog(req: DescribeThirdTaskRunLogRequest, cb?: (error: string, rep: DescribeThirdTaskRunLogResponse) => void): Promise<DescribeThirdTaskRunLogResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量删除任务，仅对任务状态为”已停止“有效；

     */
    BatchDeleteTasksNew(req: BatchDeleteTasksNewRequest, cb?: (error: string, rep: BatchDeleteTasksNewResponse) => void): Promise<BatchDeleteTasksNewResponse>;
    /**
     * 继续集成任务
     */
    ResumeIntegrationTask(req: ResumeIntegrationTaskRequest, cb?: (error: string, rep: ResumeIntegrationTaskResponse) => void): Promise<ResumeIntegrationTaskResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除工作流
     */
    DeleteWorkflowNew(req: DeleteWorkflowNewRequest, cb?: (error: string, rep: DeleteWorkflowNewResponse) => void): Promise<DeleteWorkflowNewResponse>;
    /**
     * 数据集成大屏采集器状态分布统计
     */
    DescribeIntegrationStatisticsAgentStatus(req: DescribeIntegrationStatisticsAgentStatusRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsAgentStatusResponse) => void): Promise<DescribeIntegrationStatisticsAgentStatusResponse>;
    /**
     * 提交基线
     */
    StopBaseline(req: StopBaselineRequest, cb?: (error: string, rep: StopBaselineResponse) => void): Promise<StopBaselineResponse>;
    /**
     * 日志获取详情页面
     */
    DescribeInstanceLastLog(req: DescribeInstanceLastLogRequest, cb?: (error: string, rep: DescribeInstanceLastLogResponse) => void): Promise<DescribeInstanceLastLogResponse>;
    /**
     * 批量修改任务责任人
     */
    BatchModifyOpsOwners(req: BatchModifyOpsOwnersRequest, cb?: (error: string, rep: BatchModifyOpsOwnersResponse) => void): Promise<BatchModifyOpsOwnersResponse>;
    /**
     * 创建用户自定义函数
     */
    CreateCustomFunction(req: CreateCustomFunctionRequest, cb?: (error: string, rep: CreateCustomFunctionResponse) => void): Promise<CreateCustomFunctionResponse>;
    /**
     * 编辑基线
     */
    EditBaseline(req: EditBaselineRequest, cb?: (error: string, rep: EditBaselineResponse) => void): Promise<EditBaselineResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
     */
    BatchStopTasksNew(req: BatchStopTasksNewRequest, cb?: (error: string, rep: BatchStopTasksNewResponse) => void): Promise<BatchStopTasksNewResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除文件夹
     */
    DeleteFolder(req: DeleteFolderRequest, cb?: (error: string, rep: DeleteFolderResponse) => void): Promise<DeleteFolderResponse>;
    /**
     * 运维大屏-任务状态分布
     */
    DescribeSchedulerTaskTypeCnt(req: DescribeSchedulerTaskTypeCntRequest, cb?: (error: string, rep: DescribeSchedulerTaskTypeCntResponse) => void): Promise<DescribeSchedulerTaskTypeCntResponse>;
    /**
     * 删除项目参数
     */
    DeleteProjectParamDs(req: DeleteProjectParamDsRequest, cb?: (error: string, rep: DeleteProjectParamDsResponse) => void): Promise<DeleteProjectParamDsResponse>;
    /**
     * 根据项目id 获取项目下所有工作流列表
     */
    DescribeWorkflowListByProjectId(req: DescribeWorkflowListByProjectIdRequest, cb?: (error: string, rep: DescribeWorkflowListByProjectIdResponse) => void): Promise<DescribeWorkflowListByProjectIdResponse>;
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     */
    SetTaskAlarmNew(req: SetTaskAlarmNewRequest, cb?: (error: string, rep: SetTaskAlarmNewResponse) => void): Promise<SetTaskAlarmNewResponse>;
    /**
     * 查看事件实例的消费任务
     */
    DescribeEventConsumeTasks(req: DescribeEventConsumeTasksRequest, cb?: (error: string, rep: DescribeEventConsumeTasksResponse) => void): Promise<DescribeEventConsumeTasksResponse>;
    /**
     * 查询基线诊断信息
     */
    DescribeDiagnosticInfoByBaselineId(req: DescribeDiagnosticInfoByBaselineIdRequest, cb?: (error: string, rep: DescribeDiagnosticInfoByBaselineIdResponse) => void): Promise<DescribeDiagnosticInfoByBaselineIdResponse>;
    /**
     * 获取离线任务长连接Token
     */
    DescribeOfflineTaskToken(req?: DescribeOfflineTaskTokenRequest, cb?: (error: string, rep: DescribeOfflineTaskTokenResponse) => void): Promise<DescribeOfflineTaskTokenResponse>;
    /**
     * 删除规则模版
     */
    DeleteRuleTemplate(req: DeleteRuleTemplateRequest, cb?: (error: string, rep: DeleteRuleTemplateResponse) => void): Promise<DeleteRuleTemplateResponse>;
    /**
     * 编排空间-创建文件夹
     */
    CreateDsFolder(req: CreateDsFolderRequest, cb?: (error: string, rep: CreateDsFolderResponse) => void): Promise<CreateDsFolderResponse>;
    /**
     * 更新集成节点
     */
    ModifyIntegrationNode(req: ModifyIntegrationNodeRequest, cb?: (error: string, rep: ModifyIntegrationNodeResponse) => void): Promise<ModifyIntegrationNodeResponse>;
    /**
     * 抢占锁定集成任务
     */
    RobAndLockIntegrationTask(req: RobAndLockIntegrationTaskRequest, cb?: (error: string, rep: RobAndLockIntegrationTaskResponse) => void): Promise<RobAndLockIntegrationTaskResponse>;
    /**
     * 判断集成节点名称是否存在
     */
    CheckIntegrationNodeNameExists(req: CheckIntegrationNodeNameExistsRequest, cb?: (error: string, rep: CheckIntegrationNodeNameExistsResponse) => void): Promise<CheckIntegrationNodeNameExistsResponse>;
    /**
     * 告警事件列表
     */
    DescribeAlarmEvents(req: DescribeAlarmEventsRequest, cb?: (error: string, rep: DescribeAlarmEventsResponse) => void): Promise<DescribeAlarmEventsResponse>;
    /**
     * 获取表列表
     */
    DescribeRuleTablesByPage(req: DescribeRuleTablesByPageRequest, cb?: (error: string, rep: DescribeRuleTablesByPageResponse) => void): Promise<DescribeRuleTablesByPageResponse>;
    /**
     * 质量报告-质量评分
     */
    DescribeQualityScore(req: DescribeQualityScoreRequest, cb?: (error: string, rep: DescribeQualityScoreResponse) => void): Promise<DescribeQualityScoreResponse>;
    /**
     * 文件路径的根目录为 /datastudio/resource，如果要在根目录下创建 aaa 文件夹，FilePath的值应该为 /datastudio/resource，如果根目录下已经创建了 aaa 文件夹，要在 aaa 下创建  bbb 文件夹，FilePath的值应该为 /datastudio/resource/aaa
     */
    CreateResourcePath(req: CreateResourcePathRequest, cb?: (error: string, rep: CreateResourcePathResponse) => void): Promise<CreateResourcePathResponse>;
    /**
     * 数据质量概览页面触发维度分布统计接口
     */
    DescribeRuleDimStat(req: DescribeRuleDimStatRequest, cb?: (error: string, rep: DescribeRuleDimStatResponse) => void): Promise<DescribeRuleDimStatResponse>;
    /**
     * 生成建hive表的sql
     */
    GenHiveTableDDLSql(req: GenHiveTableDDLSqlRequest, cb?: (error: string, rep: GenHiveTableDDLSqlResponse) => void): Promise<GenHiveTableDDLSqlResponse>;
    /**
     * 分页查询任务运行历史
     */
    DescribeTaskRunHistory(req: DescribeTaskRunHistoryRequest, cb?: (error: string, rep: DescribeTaskRunHistoryResponse) => void): Promise<DescribeTaskRunHistoryResponse>;
    /**
     * 查看补录计划任务
     */
    DescribeOpsMakePlanTasks(req: DescribeOpsMakePlanTasksRequest, cb?: (error: string, rep: DescribeOpsMakePlanTasksResponse) => void): Promise<DescribeOpsMakePlanTasksResponse>;
    /**
     * 根据任务Id查找生产态子任务
     */
    DescribeAllUsedVersionSon(req: DescribeAllUsedVersionSonRequest, cb?: (error: string, rep: DescribeAllUsedVersionSonResponse) => void): Promise<DescribeAllUsedVersionSonResponse>;
    /**
     * 查询全量函数
     */
    DescribeOrganizationalFunctions(req: DescribeOrganizationalFunctionsRequest, cb?: (error: string, rep: DescribeOrganizationalFunctionsResponse) => void): Promise<DescribeOrganizationalFunctionsResponse>;
    /**
     * 删除采集器
     */
    DeleteInLongAgent(req: DeleteInLongAgentRequest, cb?: (error: string, rep: DeleteInLongAgentResponse) => void): Promise<DeleteInLongAgentResponse>;
    /**
     * 实例强制成功
     */
    RunForceSucScheduleInstances(req: RunForceSucScheduleInstancesRequest, cb?: (error: string, rep: RunForceSucScheduleInstancesResponse) => void): Promise<RunForceSucScheduleInstancesResponse>;
    /**
     * 查询目录树
     */
    DescribeDsFolderTree(req: DescribeDsFolderTreeRequest, cb?: (error: string, rep: DescribeDsFolderTreeResponse) => void): Promise<DescribeDsFolderTreeResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量终止操作
     */
    KillInstances(req: KillInstancesRequest, cb?: (error: string, rep: KillInstancesResponse) => void): Promise<KillInstancesResponse>;
    /**
     * 编辑基线实例中任务告警状态
     */
    ModifyBaselineTaskAlarmStatus(req: ModifyBaselineTaskAlarmStatusRequest, cb?: (error: string, rep: ModifyBaselineTaskAlarmStatusResponse) => void): Promise<ModifyBaselineTaskAlarmStatusResponse>;
    /**
     * Runner 规则检测结果上报
     */
    CommitRuleGroupExecResult(req: CommitRuleGroupExecResultRequest, cb?: (error: string, rep: CommitRuleGroupExecResultResponse) => void): Promise<CommitRuleGroupExecResultResponse>;
    /**
     * 开发空间-批量删除目录和文件
     */
    DeleteFilePath(req: DeleteFilePathRequest, cb?: (error: string, rep: DeleteFilePathResponse) => void): Promise<DeleteFilePathResponse>;
    /**
     * 任务批量补录，调度状态任务才可以补录；
     */
    MakeUpOpsTasks(req: MakeUpOpsTasksRequest, cb?: (error: string, rep: MakeUpOpsTasksResponse) => void): Promise<MakeUpOpsTasksResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交工作流
     */
    SubmitWorkflow(req: SubmitWorkflowRequest, cb?: (error: string, rep: SubmitWorkflowResponse) => void): Promise<SubmitWorkflowResponse>;
    /**
     * 获取下游任务信息
     */
    DescribeSuccessorOpsTaskInfos(req: DescribeSuccessorOpsTaskInfosRequest, cb?: (error: string, rep: DescribeSuccessorOpsTaskInfosResponse) => void): Promise<DescribeSuccessorOpsTaskInfosResponse>;
    /**
     * 获取关联子实例
     */
    DescribeSonInstances(req: DescribeSonInstancesRequest, cb?: (error: string, rep: DescribeSonInstancesResponse) => void): Promise<DescribeSonInstancesResponse>;
    /**
     * 调试运行集成任务
     */
    DryRunDIOfflineTask(req: DryRunDIOfflineTaskRequest, cb?: (error: string, rep: DryRunDIOfflineTaskResponse) => void): Promise<DryRunDIOfflineTaskResponse>;
    /**
     * 质量报告-查询质量评分
     */
    DescribeDimensionScore(req: DescribeDimensionScoreRequest, cb?: (error: string, rep: DescribeDimensionScoreResponse) => void): Promise<DescribeDimensionScoreResponse>;
    /**
     * 查询表绑定执行规则组信息
     */
    DescribeRuleGroupTable(req: DescribeRuleGroupTableRequest, cb?: (error: string, rep: DescribeRuleGroupTableResponse) => void): Promise<DescribeRuleGroupTableResponse>;
    /**
     * DeleteBaseline
     */
    DeleteBaseline(req: DeleteBaselineRequest, cb?: (error: string, rep: DeleteBaselineResponse) => void): Promise<DeleteBaselineResponse>;
    /**
     * 创建集成任务
     */
    CreateIntegrationTask(req: CreateIntegrationTaskRequest, cb?: (error: string, rep: CreateIntegrationTaskResponse) => void): Promise<CreateIntegrationTaskResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
    ModifyTaskScript(req: ModifyTaskScriptRequest, cb?: (error: string, rep: ModifyTaskScriptResponse) => void): Promise<ModifyTaskScriptResponse>;
    /**
     * 提交数据导出任务
     */
    CommitExportTask(req: CommitExportTaskRequest, cb?: (error: string, rep: CommitExportTaskResponse) => void): Promise<CommitExportTaskResponse>;
    /**
     * 过滤条件【必要字段】{ruleId}
     */
    DescribeRuleHistoryByPage(req: DescribeRuleHistoryByPageRequest, cb?: (error: string, rep: DescribeRuleHistoryByPageResponse) => void): Promise<DescribeRuleHistoryByPageResponse>;
    /**
     * 按补录计划批量终止实例。
     */
    KillOpsMakePlanInstances(req: KillOpsMakePlanInstancesRequest, cb?: (error: string, rep: KillOpsMakePlanInstancesResponse) => void): Promise<KillOpsMakePlanInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
    DescribeDataSourceList(req: DescribeDataSourceListRequest, cb?: (error: string, rep: DescribeDataSourceListResponse) => void): Promise<DescribeDataSourceListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新任务
     */
    ModifyTaskInfo(req: ModifyTaskInfoRequest, cb?: (error: string, rep: ModifyTaskInfoResponse) => void): Promise<ModifyTaskInfoResponse>;
    /**
     * 查询集成任务版本节点信息
     */
    DescribeIntegrationVersionNodesInfo(req: DescribeIntegrationVersionNodesInfoRequest, cb?: (error: string, rep: DescribeIntegrationVersionNodesInfoResponse) => void): Promise<DescribeIntegrationVersionNodesInfoResponse>;
    /**
     * 查询事件类型列表
     */
    DescribeEventTypes(req?: DescribeEventTypesRequest, cb?: (error: string, rep: DescribeEventTypesResponse) => void): Promise<DescribeEventTypesResponse>;
    /**
     * 任务状态统计
     */
    DescribeSchedulerTaskCntByStatus(req: DescribeSchedulerTaskCntByStatusRequest, cb?: (error: string, rep: DescribeSchedulerTaskCntByStatusResponse) => void): Promise<DescribeSchedulerTaskCntByStatusResponse>;
    /**
     * 更新集成任务
     */
    ModifyIntegrationTask(req: ModifyIntegrationTaskRequest, cb?: (error: string, rep: ModifyIntegrationTaskResponse) => void): Promise<ModifyIntegrationTaskResponse>;
    /**
     * 查询表得分趋势
     */
    DescribeTableScoreTrend(req: DescribeTableScoreTrendRequest, cb?: (error: string, rep: DescribeTableScoreTrendResponse) => void): Promise<DescribeTableScoreTrendResponse>;
    /**
     * 数据集成大屏任务状态分布统计
     */
    DescribeIntegrationStatisticsTaskStatus(req: DescribeIntegrationStatisticsTaskStatusRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsTaskStatusResponse) => void): Promise<DescribeIntegrationStatisticsTaskStatusResponse>;
    /**
     * 批量运行集成任务
     */
    BatchStartIntegrationTasks(req: BatchStartIntegrationTasksRequest, cb?: (error: string, rep: BatchStartIntegrationTasksResponse) => void): Promise<BatchStartIntegrationTasksResponse>;
    /**
     * 分页查询质量监控组
     */
    DescribeMonitorsByPage(req: DescribeMonitorsByPageRequest, cb?: (error: string, rep: DescribeMonitorsByPageResponse) => void): Promise<DescribeMonitorsByPageResponse>;
    /**
     * 重命名任务（任务编辑）
     */
    ModifyTaskName(req: ModifyTaskNameRequest, cb?: (error: string, rep: ModifyTaskNameResponse) => void): Promise<ModifyTaskNameResponse>;
    /**
     * 查询规则执行结果详情
     */
    DescribeRuleExecDetail(req: DescribeRuleExecDetailRequest, cb?: (error: string, rep: DescribeRuleExecDetailResponse) => void): Promise<DescribeRuleExecDetailResponse>;
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
    DescribeDatasource(req: DescribeDatasourceRequest, cb?: (error: string, rep: DescribeDatasourceResponse) => void): Promise<DescribeDatasourceResponse>;
    /**
     * 任务运维搜索 查询生产态任务数据源列表
     */
    DescribeOperateOpsTaskDatasource(req: DescribeOperateOpsTaskDatasourceRequest, cb?: (error: string, rep: DescribeOperateOpsTaskDatasourceResponse) => void): Promise<DescribeOperateOpsTaskDatasourceResponse>;
    /**
     * 通过工作流id，查询工作流详情
     */
    DescribeWorkflowInfoById(req: DescribeWorkflowInfoByIdRequest, cb?: (error: string, rep: DescribeWorkflowInfoByIdResponse) => void): Promise<DescribeWorkflowInfoByIdResponse>;
    /**
     * 任务状态趋势
     */
    DescribeTaskByStatusReport(req: DescribeTaskByStatusReportRequest, cb?: (error: string, rep: DescribeTaskByStatusReportResponse) => void): Promise<DescribeTaskByStatusReportResponse>;
    /**
     * 注册采集器
     */
    CreateInLongAgent(req: CreateInLongAgentRequest, cb?: (error: string, rep: CreateInLongAgentResponse) => void): Promise<CreateInLongAgentResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
运行任务
     */
    RunTask(req: RunTaskRequest, cb?: (error: string, rep: RunTaskResponse) => void): Promise<RunTaskResponse>;
    /**
     * 获取离线任务实例
     */
    GetOfflineInstanceList(req: GetOfflineInstanceListRequest, cb?: (error: string, rep: GetOfflineInstanceListResponse) => void): Promise<GetOfflineInstanceListResponse>;
    /**
     * 更新采集器
     */
    UpdateInLongAgent(req: UpdateInLongAgentRequest, cb?: (error: string, rep: UpdateInLongAgentResponse) => void): Promise<UpdateInLongAgentResponse>;
    /**
     * 创建离线任务
     */
    CreateOfflineTask(req: CreateOfflineTaskRequest, cb?: (error: string, rep: CreateOfflineTaskResponse) => void): Promise<CreateOfflineTaskResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流调度
     */
    ModifyWorkflowSchedule(req: ModifyWorkflowScheduleRequest, cb?: (error: string, rep: ModifyWorkflowScheduleResponse) => void): Promise<ModifyWorkflowScheduleResponse>;
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
     * 获取表schema信息
     */
    DescribeTableSchemaInfo(req: DescribeTableSchemaInfoRequest, cb?: (error: string, rep: DescribeTableSchemaInfoResponse) => void): Promise<DescribeTableSchemaInfoResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量置成功
     */
    ForceSucInstances(req: ForceSucInstancesRequest, cb?: (error: string, rep: ForceSucInstancesResponse) => void): Promise<ForceSucInstancesResponse>;
    /**
     * 查询函数类型
     */
    DescribeFunctionTypes(req?: DescribeFunctionTypesRequest, cb?: (error: string, rep: DescribeFunctionTypesResponse) => void): Promise<DescribeFunctionTypesResponse>;
    /**
     * 查询父目录树，用于工作流、任务定位
     */
    DescribeDsParentFolderTree(req: DescribeDsParentFolderTreeRequest, cb?: (error: string, rep: DescribeDsParentFolderTreeResponse) => void): Promise<DescribeDsParentFolderTreeResponse>;
    /**
     * 离线任务周期统计明细
     */
    DescribeTaskReportDetailList(req: DescribeTaskReportDetailListRequest, cb?: (error: string, rep: DescribeTaskReportDetailListResponse) => void): Promise<DescribeTaskReportDetailListResponse>;
    /**
     * 解锁集成任务
     */
    UnlockIntegrationTask(req: UnlockIntegrationTaskRequest, cb?: (error: string, rep: UnlockIntegrationTaskResponse) => void): Promise<UnlockIntegrationTaskResponse>;
    /**
     * 创建基线
     */
    CreateBaseline(req: CreateBaselineRequest, cb?: (error: string, rep: CreateBaselineResponse) => void): Promise<CreateBaselineResponse>;
    /**
     * 实例诊断信息
     */
    DiagnosePlus(req: DiagnosePlusRequest, cb?: (error: string, rep: DiagnosePlusResponse) => void): Promise<DiagnosePlusResponse>;
    /**
     * 删除集成节点
     */
    DeleteIntegrationNode(req: DeleteIntegrationNodeRequest, cb?: (error: string, rep: DeleteIntegrationNodeResponse) => void): Promise<DeleteIntegrationNodeResponse>;
    /**
     * 停止集成任务
     */
    StopIntegrationTask(req: StopIntegrationTaskRequest, cb?: (error: string, rep: StopIntegrationTaskResponse) => void): Promise<StopIntegrationTaskResponse>;
    /**
     * 拉取实例列表，join task表一些信息
     */
    DescribeInstancesInfoWithTaskInfo(req: DescribeInstancesInfoWithTaskInfoRequest, cb?: (error: string, rep: DescribeInstancesInfoWithTaskInfoResponse) => void): Promise<DescribeInstancesInfoWithTaskInfoResponse>;
    /**
     * 实时任务同步速度趋势
     */
    DescribeRealTimeTaskSpeed(req: DescribeRealTimeTaskSpeedRequest, cb?: (error: string, rep: DescribeRealTimeTaskSpeedResponse) => void): Promise<DescribeRealTimeTaskSpeedResponse>;
    /**
     * 获取实例列表
     */
    DescribeInstanceList(req: DescribeInstanceListRequest, cb?: (error: string, rep: DescribeInstanceListResponse) => void): Promise<DescribeInstanceListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务脚本
     */
    DescribeTaskScript(req: DescribeTaskScriptRequest, cb?: (error: string, rep: DescribeTaskScriptResponse) => void): Promise<DescribeTaskScriptResponse>;
    /**
     * 告警接收人详情
     */
    DescribeAlarmReceiver(req: DescribeAlarmReceiverRequest, cb?: (error: string, rep: DescribeAlarmReceiverResponse) => void): Promise<DescribeAlarmReceiverResponse>;
    /**
     * 查看任务锁状态信息
     */
    DescribeTaskLockStatus(req: DescribeTaskLockStatusRequest, cb?: (error: string, rep: DescribeTaskLockStatusResponse) => void): Promise<DescribeTaskLockStatusResponse>;
    /**
     * 运维大屏-实例状态分布
     */
    DescribeSchedulerInstanceStatus(req: DescribeSchedulerInstanceStatusRequest, cb?: (error: string, rep: DescribeSchedulerInstanceStatusResponse) => void): Promise<DescribeSchedulerInstanceStatusResponse>;
    /**
     * 获取实例运行日志
     */
    DescribeInstanceLog(req: DescribeInstanceLogRequest, cb?: (error: string, rep: DescribeInstanceLogResponse) => void): Promise<DescribeInstanceLogResponse>;
    /**
     * 批量更新集成任务（暂时仅支持批量更新责任人）
     */
    BatchUpdateIntegrationTasks(req: BatchUpdateIntegrationTasksRequest, cb?: (error: string, rep: BatchUpdateIntegrationTasksResponse) => void): Promise<BatchUpdateIntegrationTasksResponse>;
    /**
     * 资源管理-批量删除资源文件
     */
    DeleteResourceFiles(req: DeleteResourceFilesRequest, cb?: (error: string, rep: DeleteResourceFilesResponse) => void): Promise<DeleteResourceFilesResponse>;
    /**
     * 补录任务
     */
    CreateOpsMakePlan(req: CreateOpsMakePlanRequest, cb?: (error: string, rep: CreateOpsMakePlanResponse) => void): Promise<CreateOpsMakePlanResponse>;
    /**
     * 提交基线
     */
    SubmitBaseline(req: SubmitBaselineRequest, cb?: (error: string, rep: SubmitBaselineResponse) => void): Promise<SubmitBaselineResponse>;
    /**
     * 任务运维列表组合条件查询
     */
    DescribeOperateTasks(req: DescribeOperateTasksRequest, cb?: (error: string, rep: DescribeOperateTasksResponse) => void): Promise<DescribeOperateTasksResponse>;
    /**
     * 任务运维-批量冻结任务
     */
    FreezeOpsTasks(req: FreezeOpsTasksRequest, cb?: (error: string, rep: FreezeOpsTasksResponse) => void): Promise<FreezeOpsTasksResponse>;
    /**
     * 查询规则组详情接口
     */
    DescribeRuleGroup(req: DescribeRuleGroupRequest, cb?: (error: string, rep: DescribeRuleGroupResponse) => void): Promise<DescribeRuleGroupResponse>;
    /**
     * 规则执行日志查询
     */
    DescribeRuleExecLog(req: DescribeRuleExecLogRequest, cb?: (error: string, rep: DescribeRuleExecLogResponse) => void): Promise<DescribeRuleExecLogResponse>;
    /**
     * 数据质量概览页面表排行接口
     */
    DescribeTopTableStat(req: DescribeTopTableStatRequest, cb?: (error: string, rep: DescribeTopTableStatResponse) => void): Promise<DescribeTopTableStatResponse>;
    /**
     * 获取具体实例相关日志信息
     */
    DescribeInstanceLogDetail(req: DescribeInstanceLogDetailRequest, cb?: (error: string, rep: DescribeInstanceLogDetailResponse) => void): Promise<DescribeInstanceLogDetailResponse>;
    /**
     * 任务运维-查询生产态任务数据源类型列表
     */
    DescribeOperateOpsTaskDatasourceType(req: DescribeOperateOpsTaskDatasourceTypeRequest, cb?: (error: string, rep: DescribeOperateOpsTaskDatasourceTypeResponse) => void): Promise<DescribeOperateOpsTaskDatasourceTypeResponse>;
    /**
     * 获取数据库信息
     */
    DescribeDatabaseInfoList(req: DescribeDatabaseInfoListRequest, cb?: (error: string, rep: DescribeDatabaseInfoListResponse) => void): Promise<DescribeDatabaseInfoListResponse>;
    /**
     * 查询规则模版操作记录
     */
    DescribeTemplateHistory(req: DescribeTemplateHistoryRequest, cb?: (error: string, rep: DescribeTemplateHistoryResponse) => void): Promise<DescribeTemplateHistoryResponse>;
    /**
     * 根据层级查找上/下游任务节点
     */
    DescribeDependOpsTasks(req: DescribeDependOpsTasksRequest, cb?: (error: string, rep: DescribeDependOpsTasksResponse) => void): Promise<DescribeDependOpsTasksResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
    SubmitTask(req: SubmitTaskRequest, cb?: (error: string, rep: SubmitTaskResponse) => void): Promise<SubmitTaskResponse>;
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
     * 创建hive表，返回表名称
     */
    CreateHiveTableByDDL(req: CreateHiveTableByDDLRequest, cb?: (error: string, rep: CreateHiveTableByDDLResponse) => void): Promise<CreateHiveTableByDDLResponse>;
    /**
     * 编排空间-删除文件夹
     */
    DeleteDsFolder(req: DeleteDsFolderRequest, cb?: (error: string, rep: DeleteDsFolderResponse) => void): Promise<DeleteDsFolderResponse>;
    /**
     * 实例强制成功
     */
    ForceSucScheduleInstances(req: ForceSucScheduleInstancesRequest, cb?: (error: string, rep: ForceSucScheduleInstancesResponse) => void): Promise<ForceSucScheduleInstancesResponse>;
    /**
     * 查询基线实例关键任务实例甘特图
     */
    DescribeBaselineInstanceGantt(req: DescribeBaselineInstanceGanttRequest, cb?: (error: string, rep: DescribeBaselineInstanceGanttResponse) => void): Promise<DescribeBaselineInstanceGanttResponse>;
    /**
     * 智能运维事件查询列表
     */
    DescribeEvents(req: DescribeEventsRequest, cb?: (error: string, rep: DescribeEventsResponse) => void): Promise<DescribeEventsResponse>;
    /**
     * 获取资源管理目录树
     */
    DescribeResourceManagePathTrees(req: DescribeResourceManagePathTreesRequest, cb?: (error: string, rep: DescribeResourceManagePathTreesResponse) => void): Promise<DescribeResourceManagePathTreesResponse>;
    /**
     * 批量置成功集成任务实例
     */
    BatchForceSuccessIntegrationTaskInstances(req: BatchForceSuccessIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchForceSuccessIntegrationTaskInstancesResponse) => void): Promise<BatchForceSuccessIntegrationTaskInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量冻结任务
     */
    FreezeTasks(req: FreezeTasksRequest, cb?: (error: string, rep: FreezeTasksResponse) => void): Promise<FreezeTasksResponse>;
    /**
     * 查询实时任务日志列表
     */
    DescribeStreamTaskLogList(req: DescribeStreamTaskLogListRequest, cb?: (error: string, rep: DescribeStreamTaskLogListResponse) => void): Promise<DescribeStreamTaskLogListResponse>;
    /**
     * 创建质量规则接口
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 下载日志文件，返回日志URL
     */
    DescribeInstanceLogFile(req: DescribeInstanceLogFileRequest, cb?: (error: string, rep: DescribeInstanceLogFileResponse) => void): Promise<DescribeInstanceLogFileResponse>;
    /**
     * 编辑规则模版
     */
    ModifyRuleTemplate(req: ModifyRuleTemplateRequest, cb?: (error: string, rep: ModifyRuleTemplateResponse) => void): Promise<ModifyRuleTemplateResponse>;
    /**
     * 根据项目ID和事件名称查看事件详情
     */
    DescribeEvent(req: DescribeEventRequest, cb?: (error: string, rep: DescribeEventResponse) => void): Promise<DescribeEventResponse>;
    /**
     * 查询父目录下所有子文件夹+工作流
     */
    DescribeAllByFolderNew(req: DescribeAllByFolderNewRequest, cb?: (error: string, rep: DescribeAllByFolderNewResponse) => void): Promise<DescribeAllByFolderNewResponse>;
    /**
     * 智能运维-事件列表-所属任务/基线过滤列表
     */
    DescribeBelongTo(req: DescribeBelongToRequest, cb?: (error: string, rep: DescribeBelongToResponse) => void): Promise<DescribeBelongToResponse>;
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除数据源
     */
    DeleteDataSources(req: DeleteDataSourcesRequest, cb?: (error: string, rep: DeleteDataSourcesResponse) => void): Promise<DeleteDataSourcesResponse>;
    /**
     * 智能运维事件详情1
     */
    DescribeEventDetail(req: DescribeEventDetailRequest, cb?: (error: string, rep: DescribeEventDetailResponse) => void): Promise<DescribeEventDetailResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
文件夹更新
     */
    ModifyFolder(req: ModifyFolderRequest, cb?: (error: string, rep: ModifyFolderResponse) => void): Promise<ModifyFolderResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务具体详情
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量重跑
     */
    RerunInstances(req: RerunInstancesRequest, cb?: (error: string, rep: RerunInstancesResponse) => void): Promise<RerunInstancesResponse>;
    /**
     * 无
     */
    SubmitTaskTestRun(req: SubmitTaskTestRunRequest, cb?: (error: string, rep: SubmitTaskTestRunResponse) => void): Promise<SubmitTaskTestRunResponse>;
    /**
     * 批量操作任务列表
     */
    DescribeBatchOperateTask(req: DescribeBatchOperateTaskRequest, cb?: (error: string, rep: DescribeBatchOperateTaskResponse) => void): Promise<DescribeBatchOperateTaskResponse>;
    /**
     * 删除质量规则接口
     */
    DeleteRule(req: DeleteRuleRequest, cb?: (error: string, rep: DeleteRuleResponse) => void): Promise<DeleteRuleResponse>;
    /**
     * 判断告警规则重名
     */
    CheckAlarmRegularNameExist(req: CheckAlarmRegularNameExistRequest, cb?: (error: string, rep: CheckAlarmRegularNameExistResponse) => void): Promise<CheckAlarmRegularNameExistResponse>;
    /**
     * 判断集成任务名称是否存在
     */
    CheckIntegrationTaskNameExists(req: CheckIntegrationTaskNameExistsRequest, cb?: (error: string, rep: CheckIntegrationTaskNameExistsResponse) => void): Promise<CheckIntegrationTaskNameExistsResponse>;
    /**
     * 获取字段类型列表
     */
    DescribeDataTypes(req: DescribeDataTypesRequest, cb?: (error: string, rep: DescribeDataTypesResponse) => void): Promise<DescribeDataTypesResponse>;
    /**
     * 分页查询质量规则
     */
    DescribeRulesByPage(req: DescribeRulesByPageRequest, cb?: (error: string, rep: DescribeRulesByPageResponse) => void): Promise<DescribeRulesByPageResponse>;
    /**
     * 启动集成任务
     */
    StartIntegrationTask(req: StartIntegrationTaskRequest, cb?: (error: string, rep: StartIntegrationTaskResponse) => void): Promise<StartIntegrationTaskResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
基于多个工作流进行批量冻结任务操作
     */
    FreezeTasksByMultiWorkflow(req: FreezeTasksByMultiWorkflowRequest, cb?: (error: string, rep: FreezeTasksByMultiWorkflowResponse) => void): Promise<FreezeTasksByMultiWorkflowResponse>;
    /**
     * 查询基线实例列表
     */
    DescribeBaselineInstances(req: DescribeBaselineInstancesRequest, cb?: (error: string, rep: DescribeBaselineInstancesResponse) => void): Promise<DescribeBaselineInstancesResponse>;
    /**
     * 获取所有任务类型
     */
    DescribeAllTaskType(req: DescribeAllTaskTypeRequest, cb?: (error: string, rep: DescribeAllTaskTypeResponse) => void): Promise<DescribeAllTaskTypeResponse>;
    /**
     * 删除文件
     */
    DeleteFile(req: DeleteFileRequest, cb?: (error: string, rep: DeleteFileResponse) => void): Promise<DeleteFileResponse>;
    /**
     * 对集成离线任务执行批量补数据操作
     */
    BatchMakeUpIntegrationTasks(req: BatchMakeUpIntegrationTasksRequest, cb?: (error: string, rep: BatchMakeUpIntegrationTasksResponse) => void): Promise<BatchMakeUpIntegrationTasksResponse>;
    /**
     * 保存任务信息
     */
    UploadContent(req: UploadContentRequest, cb?: (error: string, rep: UploadContentResponse) => void): Promise<UploadContentResponse>;
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
拉取文件夹下的工作流
     */
    DescribeFolderWorkflowList(req: DescribeFolderWorkflowListRequest, cb?: (error: string, rep: DescribeFolderWorkflowListResponse) => void): Promise<DescribeFolderWorkflowListResponse>;
    /**
     * 查询数据来源列表
     */
    DescribeDataBases(req: DescribeDataBasesRequest, cb?: (error: string, rep: DescribeDataBasesResponse) => void): Promise<DescribeDataBasesResponse>;
    /**
     * 任务运维-任务列表 批量运行
     */
    BatchRunOpsTask(req: BatchRunOpsTaskRequest, cb?: (error: string, rep: BatchRunOpsTaskResponse) => void): Promise<BatchRunOpsTaskResponse>;
    /**
     * 过滤条件】 {模版名称Name,支持模糊匹配} {模版类型type，1.系统模版 2.自定义模版} {质量检测维度QualityDims, 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性} 【排序字段】 { 引用数排序类型CitationOrderType，根据引用数量排序 ASC DESC}
     */
    DescribeRuleTemplatesByPage(req: DescribeRuleTemplatesByPageRequest, cb?: (error: string, rep: DescribeRuleTemplatesByPageResponse) => void): Promise<DescribeRuleTemplatesByPageResponse>;
    /**
     * 获取数据标准规则详情
     */
    DescribeStandardRuleDetailInfoList(req: DescribeStandardRuleDetailInfoListRequest, cb?: (error: string, rep: DescribeStandardRuleDetailInfoListResponse) => void): Promise<DescribeStandardRuleDetailInfoListResponse>;
    /**
     * 数据质量概览页面规则运行情况接口
     */
    DescribeRuleExecStat(req: DescribeRuleExecStatRequest, cb?: (error: string, rep: DescribeRuleExecStatResponse) => void): Promise<DescribeRuleExecStatResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
    ModifyTaskLinks(req: ModifyTaskLinksRequest, cb?: (error: string, rep: ModifyTaskLinksResponse) => void): Promise<ModifyTaskLinksResponse>;
    /**
     * 规则组执行结果分页查询接口
     */
    DescribeRuleGroupExecResultsByPage(req: DescribeRuleGroupExecResultsByPageRequest, cb?: (error: string, rep: DescribeRuleGroupExecResultsByPageResponse) => void): Promise<DescribeRuleGroupExecResultsByPageResponse>;
    /**
     * 资源管理-删除资源文件
     */
    DeleteResourceFile(req: DeleteResourceFileRequest, cb?: (error: string, rep: DeleteResourceFileResponse) => void): Promise<DeleteResourceFileResponse>;
    /**
     * 批量创建任务告警规则
     */
    BatchCreateIntegrationTaskAlarms(req: BatchCreateIntegrationTaskAlarmsRequest, cb?: (error: string, rep: BatchCreateIntegrationTaskAlarmsResponse) => void): Promise<BatchCreateIntegrationTaskAlarmsResponse>;
    /**
     * 拉取dag实例
     */
    DagInstances(req: DagInstancesRequest, cb?: (error: string, rep: DagInstancesResponse) => void): Promise<DagInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹目录
     */
    DescribeFolderList(req: DescribeFolderListRequest, cb?: (error: string, rep: DescribeFolderListResponse) => void): Promise<DescribeFolderListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源列表
     */
    DescribeDataSourceWithoutInfo(req: DescribeDataSourceWithoutInfoRequest, cb?: (error: string, rep: DescribeDataSourceWithoutInfoResponse) => void): Promise<DescribeDataSourceWithoutInfoResponse>;
    /**
     * 暂停集成任务
     */
    SuspendIntegrationTask(req: SuspendIntegrationTaskRequest, cb?: (error: string, rep: SuspendIntegrationTaskResponse) => void): Promise<SuspendIntegrationTaskResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
工作流下所有任务的补录
     */
    MakeUpWorkflowNew(req: MakeUpWorkflowNewRequest, cb?: (error: string, rep: MakeUpWorkflowNewResponse) => void): Promise<MakeUpWorkflowNewResponse>;
    /**
     * 数据集成大屏任务状态统计趋势
     */
    DescribeIntegrationStatisticsTaskStatusTrend(req: DescribeIntegrationStatisticsTaskStatusTrendRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsTaskStatusTrendResponse) => void): Promise<DescribeIntegrationStatisticsTaskStatusTrendResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
获取实例日志列表
     */
    DescribeInstanceLogs(req: DescribeInstanceLogsRequest, cb?: (error: string, rep: DescribeInstanceLogsResponse) => void): Promise<DescribeInstanceLogsResponse>;
    /**
     * 更新监控状态
     */
    ModifyMonitorStatus(req: ModifyMonitorStatusRequest, cb?: (error: string, rep: ModifyMonitorStatusResponse) => void): Promise<ModifyMonitorStatusResponse>;
    /**
     * 查询规则组执行策略
     */
    DescribeExecStrategy(req: DescribeExecStrategyRequest, cb?: (error: string, rep: DescribeExecStrategyResponse) => void): Promise<DescribeExecStrategyResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建工作流
     */
    CreateWorkflow(req: CreateWorkflowRequest, cb?: (error: string, rep: CreateWorkflowResponse) => void): Promise<CreateWorkflowResponse>;
    /**
     * 实例状态周期增长趋势
     */
    DescribeInstanceByCycleReport(req: DescribeInstanceByCycleReportRequest, cb?: (error: string, rep: DescribeInstanceByCycleReportResponse) => void): Promise<DescribeInstanceByCycleReportResponse>;
    /**
     * 查询规则详情
     */
    DescribeRule(req: DescribeRuleRequest, cb?: (error: string, rep: DescribeRuleResponse) => void): Promise<DescribeRuleResponse>;
    /**
     * 批量启动工作流
     */
    RunTasksByMultiWorkflow(req: RunTasksByMultiWorkflowRequest, cb?: (error: string, rep: RunTasksByMultiWorkflowResponse) => void): Promise<RunTasksByMultiWorkflowResponse>;
    /**
     * 修改工作流责任人
     */
    UpdateWorkflowOwner(req: UpdateWorkflowOwnerRequest, cb?: (error: string, rep: UpdateWorkflowOwnerResponse) => void): Promise<UpdateWorkflowOwnerResponse>;
    /**
     * 按起止日期统计离线任务的所有实例的运行指标总和
     */
    DescribeTaskReport(req: DescribeTaskReportRequest, cb?: (error: string, rep: DescribeTaskReportResponse) => void): Promise<DescribeTaskReportResponse>;
    /**
     * 查询试运行实例子实例列表
     */
    DescribeDrSonInstance(req: DescribeDrSonInstanceRequest, cb?: (error: string, rep: DescribeDrSonInstanceResponse) => void): Promise<DescribeDrSonInstanceResponse>;
    /**
     * 列出表血缘信息
     */
    DescribeTableLineage(req: DescribeTableLineageRequest, cb?: (error: string, rep: DescribeTableLineageResponse) => void): Promise<DescribeTableLineageResponse>;
    /**
     * 根据条件查找事件实例
     */
    DescribeEventCases(req: DescribeEventCasesRequest, cb?: (error: string, rep: DescribeEventCasesResponse) => void): Promise<DescribeEventCasesResponse>;
    /**
     * 查询规则执行导出结果
     */
    DescribeRuleExecExportResult(req: DescribeRuleExecExportResultRequest, cb?: (error: string, rep: DescribeRuleExecExportResultResponse) => void): Promise<DescribeRuleExecExportResultResponse>;
    /**
     * 通过工作流Id删除工作流
     */
    DeleteWorkflowById(req: DeleteWorkflowByIdRequest, cb?: (error: string, rep: DeleteWorkflowByIdResponse) => void): Promise<DeleteWorkflowByIdResponse>;
    /**
     * 查询质量规则列表
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 事件是否告警过滤条件
     */
    DescribeEventIsAlarmTypes(req?: DescribeEventIsAlarmTypesRequest, cb?: (error: string, rep: DescribeEventIsAlarmTypesResponse) => void): Promise<DescribeEventIsAlarmTypesResponse>;
    /**
     * 锁定集成任务
     */
    LockIntegrationTask(req: LockIntegrationTaskRequest, cb?: (error: string, rep: LockIntegrationTaskResponse) => void): Promise<LockIntegrationTaskResponse>;
    /**
     * 质量报告-质量分周期趋势
     */
    DescribeQualityScoreTrend(req: DescribeQualityScoreTrendRequest, cb?: (error: string, rep: DescribeQualityScoreTrendResponse) => void): Promise<DescribeQualityScoreTrendResponse>;
    /**
     * 批量删除集成任务
     */
    BatchDeleteIntegrationTasks(req: BatchDeleteIntegrationTasksRequest, cb?: (error: string, rep: BatchDeleteIntegrationTasksResponse) => void): Promise<BatchDeleteIntegrationTasksResponse>;
    /**
     * 查询集成任务列表
     */
    DescribeIntegrationTasks(req: DescribeIntegrationTasksRequest, cb?: (error: string, rep: DescribeIntegrationTasksResponse) => void): Promise<DescribeIntegrationTasksResponse>;
    /**
     * 任务状态趋势
     */
    DescribeStatisticInstanceStatusTrendOps(req: DescribeStatisticInstanceStatusTrendOpsRequest, cb?: (error: string, rep: DescribeStatisticInstanceStatusTrendOpsResponse) => void): Promise<DescribeStatisticInstanceStatusTrendOpsResponse>;
    /**
     * 列出字段血缘信息
     */
    DescribeColumnLineage(req: DescribeColumnLineageRequest, cb?: (error: string, rep: DescribeColumnLineageResponse) => void): Promise<DescribeColumnLineageResponse>;
    /**
     * 数据质量概览页面趋势变化接口
     */
    DescribeTrendStat(req: DescribeTrendStatRequest, cb?: (error: string, rep: DescribeTrendStatResponse) => void): Promise<DescribeTrendStatResponse>;
    /**
     * 获取数据表信息
     */
    DescribeTableInfoList(req: DescribeTableInfoListRequest, cb?: (error: string, rep: DescribeTableInfoListResponse) => void): Promise<DescribeTableInfoListResponse>;
    /**
     * 查询规则组订阅信息
     */
    DescribeRuleGroupSubscription(req: DescribeRuleGroupSubscriptionRequest, cb?: (error: string, rep: DescribeRuleGroupSubscriptionResponse) => void): Promise<DescribeRuleGroupSubscriptionResponse>;
    /**
     * 删除任务Ds
     */
    DeleteTaskDs(req: DeleteTaskDsRequest, cb?: (error: string, rep: DeleteTaskDsResponse) => void): Promise<DeleteTaskDsResponse>;
    /**
     * 更新规则组订阅信息
     */
    ModifyRuleGroupSubscription(req: ModifyRuleGroupSubscriptionRequest, cb?: (error: string, rep: ModifyRuleGroupSubscriptionResponse) => void): Promise<ModifyRuleGroupSubscriptionResponse>;
    /**
     * 查询任务实例列表
     */
    DescribeTaskInstances(req: DescribeTaskInstancesRequest, cb?: (error: string, rep: DescribeTaskInstancesResponse) => void): Promise<DescribeTaskInstancesResponse>;
    /**
     * 删除任务告警规则
     */
    DeleteTaskAlarmRegular(req: DeleteTaskAlarmRegularRequest, cb?: (error: string, rep: DeleteTaskAlarmRegularResponse) => void): Promise<DeleteTaskAlarmRegularResponse>;
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
     * 暂停工作流下的所有任务
     */
    FreezeTasksByWorkflowIds(req: FreezeTasksByWorkflowIdsRequest, cb?: (error: string, rep: FreezeTasksByWorkflowIdsResponse) => void): Promise<FreezeTasksByWorkflowIdsResponse>;
    /**
     * 基线列表
     */
    DescribeBaselineById(req: DescribeBaselineByIdRequest, cb?: (error: string, rep: DescribeBaselineByIdResponse) => void): Promise<DescribeBaselineByIdResponse>;
    /**
     * 资源管理删除资源
     */
    DeleteResource(req: DeleteResourceRequest, cb?: (error: string, rep: DeleteResourceResponse) => void): Promise<DeleteResourceResponse>;
    /**
     * Ds批量删除任务，仅对任务状态为”已停止“有效；
     */
    BatchDeleteTasksDs(req: BatchDeleteTasksDsRequest, cb?: (error: string, rep: BatchDeleteTasksDsResponse) => void): Promise<BatchDeleteTasksDsResponse>;
    /**
     * 通过taskIds查询task详情列表
     */
    DescribeDependTaskLists(req: DescribeDependTaskListsRequest, cb?: (error: string, rep: DescribeDependTaskListsResponse) => void): Promise<DescribeDependTaskListsResponse>;
    /**
     * 保存用户自定义函数
     */
    SaveCustomFunction(req: SaveCustomFunctionRequest, cb?: (error: string, rep: SaveCustomFunctionResponse) => void): Promise<SaveCustomFunctionResponse>;
    /**
     * 获取TKE集群列表
     */
    DescribeInLongTkeClusterList(req: DescribeInLongTkeClusterListRequest, cb?: (error: string, rep: DescribeInLongTkeClusterListResponse) => void): Promise<DescribeInLongTkeClusterListResponse>;
    /**
     * 查询任务告警规则列表
     */
    DescribeTaskAlarmRegulations(req: DescribeTaskAlarmRegulationsRequest, cb?: (error: string, rep: DescribeTaskAlarmRegulationsResponse) => void): Promise<DescribeTaskAlarmRegulationsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据层级查找上/下游任务节点
     */
    DescribeDependTasksNew(req: DescribeDependTasksNewRequest, cb?: (error: string, rep: DescribeDependTasksNewResponse) => void): Promise<DescribeDependTasksNewResponse>;
    /**
     * 数据开发模块-文件夹更新
     */
    ModifyDsFolder(req: ModifyDsFolderRequest, cb?: (error: string, rep: ModifyDsFolderResponse) => void): Promise<ModifyDsFolderResponse>;
    /**
     * 删除用户自定义函数
     */
    DeleteCustomFunction(req: DeleteCustomFunctionRequest, cb?: (error: string, rep: DeleteCustomFunctionResponse) => void): Promise<DeleteCustomFunctionResponse>;
    /**
     * 查询规则模版维度分布情况
     */
    DescribeTemplateDimCount(req: DescribeTemplateDimCountRequest, cb?: (error: string, rep: DescribeTemplateDimCountResponse) => void): Promise<DescribeTemplateDimCountResponse>;
    /**
     * 查询基线实例DAG
     */
    DescribeBaselineInstanceDag(req: DescribeBaselineInstanceDagRequest, cb?: (error: string, rep: DescribeBaselineInstanceDagResponse) => void): Promise<DescribeBaselineInstanceDagResponse>;
    /**
     * 查询集成任务
     */
    DescribeIntegrationTask(req: DescribeIntegrationTaskRequest, cb?: (error: string, rep: DescribeIntegrationTaskResponse) => void): Promise<DescribeIntegrationTaskResponse>;
    /**
     * 查询工作流任务数
     */
    DescribeWorkflowTaskCount(req: DescribeWorkflowTaskCountRequest, cb?: (error: string, rep: DescribeWorkflowTaskCountResponse) => void): Promise<DescribeWorkflowTaskCountResponse>;
    /**
     * 统计任务实例状态
     */
    CountOpsInstanceState(req: CountOpsInstanceStateRequest, cb?: (error: string, rep: CountOpsInstanceStateResponse) => void): Promise<CountOpsInstanceStateResponse>;
    /**
     * 数据集成大屏实例状态统计趋势
     */
    DescribeIntegrationStatisticsInstanceTrend(req: DescribeIntegrationStatisticsInstanceTrendRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsInstanceTrendResponse) => void): Promise<DescribeIntegrationStatisticsInstanceTrendResponse>;
    /**
     * 查询试运行实例执行内容
     */
    DescribeDrInstanceScriptContent(req: DescribeDrInstanceScriptContentRequest, cb?: (error: string, rep: DescribeDrInstanceScriptContentResponse) => void): Promise<DescribeDrInstanceScriptContentResponse>;
    /**
     * 查询工作流画布运行起止时间
     */
    DescribeWorkflowExecuteById(req: DescribeWorkflowExecuteByIdRequest, cb?: (error: string, rep: DescribeWorkflowExecuteByIdResponse) => void): Promise<DescribeWorkflowExecuteByIdResponse>;
    /**
     * 创建集成节点
     */
    CreateIntegrationNode(req: CreateIntegrationNodeRequest, cb?: (error: string, rep: CreateIntegrationNodeResponse) => void): Promise<CreateIntegrationNodeResponse>;
    /**
     * 批量暂停集成任务
     */
    BatchSuspendIntegrationTasks(req: BatchSuspendIntegrationTasksRequest, cb?: (error: string, rep: BatchSuspendIntegrationTasksResponse) => void): Promise<BatchSuspendIntegrationTasksResponse>;
    /**
     * 提交规则组运行任务接口
     */
    CommitRuleGroupTask(req: CommitRuleGroupTaskRequest, cb?: (error: string, rep: CommitRuleGroupTaskResponse) => void): Promise<CommitRuleGroupTaskResponse>;
    /**
     * 根据任务id获取下游依赖任务列表
     */
    DescribeDependOpsTaskList(req: DescribeDependOpsTaskListRequest, cb?: (error: string, rep: DescribeDependOpsTaskListResponse) => void): Promise<DescribeDependOpsTaskListResponse>;
    /**
     * 获取采集器列表
     */
    DescribeInLongAgentList(req: DescribeInLongAgentListRequest, cb?: (error: string, rep: DescribeInLongAgentListResponse) => void): Promise<DescribeInLongAgentListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件
     */
    RegisterEvent(req: RegisterEventRequest, cb?: (error: string, rep: RegisterEventResponse) => void): Promise<RegisterEventResponse>;
    /**
     * 根据条件分页查询补录计划
     */
    DescribeOpsMakePlans(req: DescribeOpsMakePlansRequest, cb?: (error: string, rep: DescribeOpsMakePlansResponse) => void): Promise<DescribeOpsMakePlansResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流
     */
    ModifyWorkflowInfo(req: ModifyWorkflowInfoRequest, cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void): Promise<ModifyWorkflowInfoResponse>;
    /**
     * 离线任务实例运行日志列表
     */
    DescribeInstanceLogList(req: DescribeInstanceLogListRequest, cb?: (error: string, rep: DescribeInstanceLogListResponse) => void): Promise<DescribeInstanceLogListResponse>;
    /**
     * 按补录计划批量重跑/选择补录计划→补录任务→补录实例，点击重跑
     */
    RerunOpsMakePlanInstances(req: RerunOpsMakePlanInstancesRequest, cb?: (error: string, rep: RerunOpsMakePlanInstancesResponse) => void): Promise<RerunOpsMakePlanInstancesResponse>;
    /**
     * 查询工作流画布
     */
    DescribeWorkflowCanvasInfo(req: DescribeWorkflowCanvasInfoRequest, cb?: (error: string, rep: DescribeWorkflowCanvasInfoResponse) => void): Promise<DescribeWorkflowCanvasInfoResponse>;
    /**
     * 质量报告-修改维度权限
     */
    ModifyDimensionWeight(req: ModifyDimensionWeightRequest, cb?: (error: string, rep: ModifyDimensionWeightResponse) => void): Promise<ModifyDimensionWeightResponse>;
    /**
     * 查找全部的文件夹
     */
    FindAllFolder(req: FindAllFolderRequest, cb?: (error: string, rep: FindAllFolderResponse) => void): Promise<FindAllFolderResponse>;
    /**
     * 修改任务告警规则
     */
    ModifyTaskAlarmRegular(req: ModifyTaskAlarmRegularRequest, cb?: (error: string, rep: ModifyTaskAlarmRegularResponse) => void): Promise<ModifyTaskAlarmRegularResponse>;
    /**
     * 检查规则模板名称是否重复
     */
    CheckDuplicateTemplateName(req: CheckDuplicateTemplateNameRequest, cb?: (error: string, rep: CheckDuplicateTemplateNameResponse) => void): Promise<CheckDuplicateTemplateNameResponse>;
    /**
     * 实例批量重跑
     */
    RunRerunScheduleInstances(req: RunRerunScheduleInstancesRequest, cb?: (error: string, rep: RunRerunScheduleInstancesResponse) => void): Promise<RunRerunScheduleInstancesResponse>;
    /**
     * 批量继续执行集成实时任务
     */
    BatchResumeIntegrationTasks(req: BatchResumeIntegrationTasksRequest, cb?: (error: string, rep: BatchResumeIntegrationTasksResponse) => void): Promise<BatchResumeIntegrationTasksResponse>;
    /**
     * 重启采集器
     */
    RestartInLongAgent(req: RestartInLongAgentRequest, cb?: (error: string, rep: RestartInLongAgentResponse) => void): Promise<RestartInLongAgentResponse>;
    /**
     * 查询模板详情
     */
    DescribeRuleTemplate(req: DescribeRuleTemplateRequest, cb?: (error: string, rep: DescribeRuleTemplateResponse) => void): Promise<DescribeRuleTemplateResponse>;
    /**
     * 实例批量重跑
     */
    RerunScheduleInstances(req: RerunScheduleInstancesRequest, cb?: (error: string, rep: RerunScheduleInstancesResponse) => void): Promise<RerunScheduleInstancesResponse>;
    /**
     * 即席分析提交SQL任务
     */
    SubmitSqlTask(req: SubmitSqlTaskRequest, cb?: (error: string, rep: SubmitSqlTaskResponse) => void): Promise<SubmitSqlTaskResponse>;
    /**
     * 数据质量获取生产调度任务列表
     */
    DescribeProdTasks(req: DescribeProdTasksRequest, cb?: (error: string, rep: DescribeProdTasksResponse) => void): Promise<DescribeProdTasksResponse>;
    /**
     * 数据质量，查询调度任务的实例列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 获取数据源信息-数据源分页列表
     */
    DescribeDataSourceInfoList(req: DescribeDataSourceInfoListRequest, cb?: (error: string, rep: DescribeDataSourceInfoListResponse) => void): Promise<DescribeDataSourceInfoListResponse>;
    /**
     * 查询函数分类
     */
    DescribeFunctionKinds(req?: DescribeFunctionKindsRequest, cb?: (error: string, rep: DescribeFunctionKindsResponse) => void): Promise<DescribeFunctionKindsResponse>;
    /**
     * 查询采集器关联的任务列表
     */
    DescribeInLongAgentTaskList(req: DescribeInLongAgentTaskListRequest, cb?: (error: string, rep: DescribeInLongAgentTaskListResponse) => void): Promise<DescribeInLongAgentTaskListResponse>;
    /**
     * 查询规则执行历史， 最近30条
     */
    DescribeRuleExecHistory(req: DescribeRuleExecHistoryRequest, cb?: (error: string, rep: DescribeRuleExecHistoryResponse) => void): Promise<DescribeRuleExecHistoryResponse>;
    /**
     * 查询Inlong manager日志
     */
    TaskLog(req: TaskLogRequest, cb?: (error: string, rep: TaskLogResponse) => void): Promise<TaskLogResponse>;
    /**
     * 查询规则模版列表
     */
    DescribeRuleTemplates(req: DescribeRuleTemplatesRequest, cb?: (error: string, rep: DescribeRuleTemplatesResponse) => void): Promise<DescribeRuleTemplatesResponse>;
    /**
     * 离线任务实例统计明细
     */
    DescribeTaskInstanceReportDetail(req: DescribeTaskInstanceReportDetailRequest, cb?: (error: string, rep: DescribeTaskInstanceReportDetailResponse) => void): Promise<DescribeTaskInstanceReportDetailResponse>;
    /**
     * 查询规则组数据对象列表
     */
    DescribeDataObjects(req: DescribeDataObjectsRequest, cb?: (error: string, rep: DescribeDataObjectsResponse) => void): Promise<DescribeDataObjectsResponse>;
    /**
     * 获取离线任务实例列表(新)
     */
    GetOfflineDIInstanceList(req: GetOfflineDIInstanceListRequest, cb?: (error: string, rep: GetOfflineDIInstanceListResponse) => void): Promise<GetOfflineDIInstanceListResponse>;
    /**
     * 编辑基线告警状态
     */
    ModifyBaselineAlarmStatus(req: ModifyBaselineAlarmStatusRequest, cb?: (error: string, rep: ModifyBaselineAlarmStatusResponse) => void): Promise<ModifyBaselineAlarmStatusResponse>;
    /**
     * 获取项目信息
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 没用到

获取kafka的topic信息
     */
    DescribeKafkaTopicInfo(req: DescribeKafkaTopicInfoRequest, cb?: (error: string, rep: DescribeKafkaTopicInfoResponse) => void): Promise<DescribeKafkaTopicInfoResponse>;
    /**
     * 提取数据集成节点字段Schema
     */
    GetIntegrationNodeColumnSchema(req: GetIntegrationNodeColumnSchemaRequest, cb?: (error: string, rep: GetIntegrationNodeColumnSchemaResponse) => void): Promise<GetIntegrationNodeColumnSchemaResponse>;
    /**
     * 查询用户生产工作流列表
     */
    DescribeOpsWorkflows(req: DescribeOpsWorkflowsRequest, cb?: (error: string, rep: DescribeOpsWorkflowsResponse) => void): Promise<DescribeOpsWorkflowsResponse>;
    /**
     * 资源管理需要先将资源上传到cos中，然后调用该接口，将cos资源绑定到wedata
     */
    CreateOrUpdateResource(req: CreateOrUpdateResourceRequest, cb?: (error: string, rep: CreateOrUpdateResourceResponse) => void): Promise<CreateOrUpdateResourceResponse>;
    /**
     * 批量重跑集成任务实例
     */
    BatchRerunIntegrationTaskInstances(req: BatchRerunIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchRerunIntegrationTaskInstancesResponse) => void): Promise<BatchRerunIntegrationTaskInstancesResponse>;
    /**
     * 离线任务实例详情
     */
    DescribeTaskInstance(req: DescribeTaskInstanceRequest, cb?: (error: string, rep: DescribeTaskInstanceResponse) => void): Promise<DescribeTaskInstanceResponse>;
    /**
     * 查询实时任务实例节点信息
     */
    DescribeRealTimeTaskInstanceNodeInfo(req: DescribeRealTimeTaskInstanceNodeInfoRequest, cb?: (error: string, rep: DescribeRealTimeTaskInstanceNodeInfoResponse) => void): Promise<DescribeRealTimeTaskInstanceNodeInfoResponse>;
    /**
     * 数据集成大屏概览
     */
    DescribeIntegrationStatistics(req: DescribeIntegrationStatisticsRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsResponse) => void): Promise<DescribeIntegrationStatisticsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
任务批量补录，调度状态任务才可以补录；



     */
    MakeUpTasksNew(req: MakeUpTasksNewRequest, cb?: (error: string, rep: MakeUpTasksNewResponse) => void): Promise<MakeUpTasksNewResponse>;
    /**
     * 工作流补数据
     */
    MakeUpTasksByWorkflow(req: MakeUpTasksByWorkflowRequest, cb?: (error: string, rep: MakeUpTasksByWorkflowResponse) => void): Promise<MakeUpTasksByWorkflowResponse>;
    /**
     * 批量停止工作流
     */
    BatchStopWorkflowsByIds(req: BatchStopWorkflowsByIdsRequest, cb?: (error: string, rep: BatchStopWorkflowsByIdsResponse) => void): Promise<BatchStopWorkflowsByIdsResponse>;
    /**
     * 分页查询试运行实例列表
     */
    DescribeDrInstancePage(req: DescribeDrInstancePageRequest, cb?: (error: string, rep: DescribeDrInstancePageResponse) => void): Promise<DescribeDrInstancePageResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量修改任务责任人
     */
    BatchModifyOwnersNew(req: BatchModifyOwnersNewRequest, cb?: (error: string, rep: BatchModifyOwnersNewResponse) => void): Promise<BatchModifyOwnersNewResponse>;
    /**
     * 运维大屏-实例运行时长排行
     */
    DescribeSchedulerRunTimeInstanceCntByStatus(req: DescribeSchedulerRunTimeInstanceCntByStatusRequest, cb?: (error: string, rep: DescribeSchedulerRunTimeInstanceCntByStatusResponse) => void): Promise<DescribeSchedulerRunTimeInstanceCntByStatusResponse>;
    /**
     * 批量停止集成任务
     */
    BatchStopIntegrationTasks(req: BatchStopIntegrationTasksRequest, cb?: (error: string, rep: BatchStopIntegrationTasksResponse) => void): Promise<BatchStopIntegrationTasksResponse>;
}

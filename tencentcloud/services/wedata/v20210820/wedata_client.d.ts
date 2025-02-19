import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeEventConsumeTasksResponse, CreateRuleTemplateResponse, DescribeIntegrationStatisticsResponse, UnlockIntegrationTaskResponse, SubmitTaskTestRunResponse, DescribeStreamTaskLogListRequest, DescribeIntegrationNodeResponse, ModifyIntegrationTaskRequest, DescribeRuleDimStatResponse, RegisterEventListenerResponse, DescribeTaskAlarmRegulationsResponse, DescribeWorkflowInfoByIdRequest, CreateDataSourceRequest, DescribeTrendStatResponse, DescribeRealTimeTaskSpeedRequest, UpdateDataModelRegistryInfoRequest, DescribeRuleDimStatRequest, DescribeRuleTemplatesResponse, DeleteDsFolderResponse, CreateIntegrationNodeResponse, GetCosTokenResponse, CreateDsFolderResponse, FreezeOpsTasksRequest, DescribeRulesResponse, JudgeResourceFileResponse, SubmitTaskRequest, DescribeTableMetasRequest, DescribeRuleGroupExecResultsByPageRequest, DescribeTableLineageRequest, KillOpsMakePlanInstancesRequest, AddProjectUserRoleResponse, BatchResumeIntegrationTasksResponse, DescribeFieldBasicInfoResponse, DescribeTaskLineageRequest, CheckTaskNameExistRequest, DescribeFunctionKindsRequest, DescribeFunctionKindsResponse, DescribeInstanceDetailInfoResponse, DescribeTemplateDimCountRequest, ModifyIntegrationTaskResponse, DescribeDataSourceListRequest, DescribeInstanceByCycleResponse, DescribeDataCheckStatRequest, GetOfflineInstanceListRequest, DescribeRuleExecResultsRequest, DescribeDutyScheduleDetailsRequest, SubmitWorkflowResponse, TriggerEventRequest, DescribeDependOpsTasksRequest, DescribeInstanceLogRequest, DescribeRuleGroupSubscriptionResponse, DescribeIntegrationStatisticsTaskStatusTrendResponse, DeleteResourceFileRequest, SaveCustomFunctionRequest, DescribeSchedulerTaskTypeCntRequest, ModifyWorkflowScheduleRequest, CreateDsFolderRequest, RegisterEventRequest, DescribeTableMetasResponse, UploadContentResponse, UploadResourceRequest, DescribeRuleGroupsByPageRequest, BatchDeleteIntegrationTasksResponse, DescribeTaskTableMetricOverviewResponse, BatchRerunIntegrationTaskInstancesRequest, DescribeWorkflowTaskCountResponse, DescribeTopTableStatRequest, AddProjectUserRoleRequest, ModifyRuleGroupSubscriptionRequest, DescribeDataSourceListResponse, DescribeInstanceLogDetailRequest, BatchSuspendIntegrationTasksRequest, DescribeDrInstancePageResponse, MoveTasksToFolderRequest, MoveTasksToFolderResponse, UpdateWorkflowOwnerRequest, DescribeSchedulerTaskTypeCntResponse, DeleteCustomFunctionResponse, DescribeTaskScriptResponse, DescribeSchedulerInstanceStatusResponse, CountOpsInstanceStateRequest, CreateTaskVersionDsResponse, BatchUpdateIntegrationTasksRequest, BatchModifyOpsOwnersRequest, ModifyTaskNameResponse, BatchDeleteOpsTasksRequest, GetCosTokenRequest, DescribeIntegrationStatisticsInstanceTrendResponse, DescribeInstanceLogListRequest, DescribeRuleGroupResponse, DeleteDataSourcesResponse, ModifyTaskLinksRequest, DescribeOpsMakePlansResponse, DeleteFileRequest, DeleteDataSourcesRequest, ModifyTaskAlarmRegularRequest, SubmitSqlTaskResponse, DescribeColumnsMetaRequest, DescribeOrganizationalFunctionsRequest, DescribeRuleTemplateResponse, CreateDataModelResponse, DescribeDependTaskListsRequest, DescribeAllByFolderNewRequest, DescribeTaskRunHistoryResponse, BatchStopWorkflowsByIdsRequest, DescribeDutyScheduleListResponse, CommitIntegrationTaskRequest, DescribeTableInfoListRequest, DescribeQualityScoreRequest, RunForceSucScheduleInstancesResponse, CommitIntegrationTaskResponse, DeleteResourceFilesRequest, DeleteResourceFileResponse, SubmitTaskResponse, ModifyApproveStatusResponse, DescribeAlarmEventsResponse, DescribeInstanceLogListResponse, DescribeTableQualityDetailsRequest, DescribeScheduleInstancesResponse, DeleteProjectParamDsResponse, DescribeTablePartitionsRequest, DescribeOpsWorkflowsRequest, CreateOfflineTaskResponse, DescribeColumnLineageRequest, CreateTaskAlarmRegularRequest, ModifyRuleRequest, FindAllFolderResponse, DescribeDataServicePublishedApiListRequest, DescribeRuleExecLogResponse, DescribeDsFolderTreeRequest, BatchDeleteIntegrationTasksRequest, KillOpsMakePlanInstancesResponse, TaskLogRequest, DescribeIntegrationStatisticsTaskStatusRequest, GetFileInfoResponse, FreezeOpsTasksResponse, ModifyRuleGroupSubscriptionResponse, CreateWorkflowDsResponse, CreateHiveTableByDDLResponse, DescribeTaskByCycleResponse, DescribeExecStrategyResponse, DescribeSuccessorOpsTaskInfosResponse, DeleteResourceResponse, ModifyRuleResponse, DescribeInstanceLogFileResponse, DeleteTaskDsResponse, DescribeAllByFolderNewResponse, DescribeDsParentFolderTreeRequest, KillScheduleInstancesResponse, DescribeWorkflowTaskCountRequest, DescribeInstanceListRequest, ModifyWorkflowScheduleResponse, DeleteCustomFunctionRequest, GetFileInfoRequest, DryRunDIOfflineTaskRequest, CreateOfflineTaskRequest, DescribeIntegrationStatisticsRecordsTrendResponse, DescribePendingSubmitTaskListResponse, BatchForceSuccessIntegrationTaskInstancesResponse, DescribeTableBasicInfoResponse, ModifyRuleTemplateRequest, DescribeRuleExecStatResponse, DagInstancesResponse, DescribeTableLineageInfoRequest, CreateTaskFolderRequest, DescribeEventResponse, DescribeOpsMakePlanInstancesRequest, GenHiveTableDDLSqlRequest, BatchCreateIntegrationTaskAlarmsRequest, LockIntegrationTaskResponse, KillScheduleInstancesRequest, BatchStopOpsTasksRequest, DescribeFunctionTypesResponse, ModifyRuleTemplateResponse, RenewWorkflowSchedulerInfoDsResponse, BatchUpdateIntegrationTasksResponse, TaskLogResponse, DescribeInstanceLastLogRequest, DescribeEventRequest, BatchCreateTaskVersionAsyncRequest, BatchModifyOpsOwnersResponse, CreateTaskAlarmRegularResponse, DeleteRuleTemplateRequest, DescribeOpsMakePlanTasksRequest, DescribeProjectRequest, CreateIntegrationTaskResponse, DescribeIntegrationTasksResponse, DeleteProjectUsersResponse, DescribeAlarmReceiverRequest, DescribeStatisticInstanceStatusTrendOpsResponse, DescribeSchedulerTaskCntByStatusResponse, ModifyWorkflowInfoRequest, DescribeBatchOperateTaskResponse, StartIntegrationTaskResponse, BatchResumeIntegrationTasksRequest, DeleteTaskAlarmRegularResponse, DeleteWorkflowByIdRequest, DescribeEventCasesRequest, DeleteRuleResponse, CreateWorkflowDsRequest, CreateTaskResponse, BatchStopIntegrationTasksResponse, DescribeApproveTypeListRequest, DeleteIntegrationNodeResponse, DescribeDataSourceInfoListRequest, DeleteDataModelResponse, DescribeIntegrationNodeRequest, SetTaskAlarmNewResponse, GetOfflineDIInstanceListResponse, DescribeDatasourceResponse, SuspendIntegrationTaskResponse, DescribeSchedulerRunTimeInstanceCntByStatusResponse, CreateTaskFolderResponse, ModifyTaskScriptResponse, RunForceSucScheduleInstancesRequest, DescribeQualityScoreResponse, DescribeRulesByPageResponse, DescribeDsParentFolderTreeResponse, DescribeEventConsumeTasksRequest, DescribeDataSourceInfoListResponse, CommitRuleGroupTaskRequest, CheckIntegrationNodeNameExistsRequest, GetOfflineInstanceListResponse, DescribeOpsMakePlansRequest, CreateOpsMakePlanRequest, DescribeDimensionScoreResponse, DescribeOrganizationalFunctionsResponse, FreezeTasksByWorkflowIdsRequest, DescribeTaskByCycleReportResponse, BatchDeleteOpsTasksResponse, CheckIntegrationTaskNameExistsResponse, DeleteRuleRequest, SubmitCustomFunctionResponse, DeleteResourceFilesResponse, DescribeFieldBasicInfoRequest, DiagnoseProRequest, CreateOpsMakePlanResponse, DescribeStreamTaskLogListResponse, DescribeRuleGroupExecResultsByPageResponse, DescribeRuleGroupsByPageResponse, GetIntegrationNodeColumnSchemaRequest, DeleteWorkflowByIdResponse, DeleteIntegrationNodeRequest, ModifyIntegrationNodeResponse, DescribeIntegrationStatisticsTaskStatusTrendRequest, DescribeTableMetaRequest, DescribeWorkflowInfoByIdResponse, ModifyDimensionWeightResponse, ModifyTaskAlarmRegularResponse, CreateRuleResponse, ModifyTaskLinksResponse, DescribeTaskRunHistoryRequest, BatchMakeUpIntegrationTasksRequest, CreateTaskVersionDsRequest, DeleteOfflineTaskRequest, DescribeDatabaseInfoListResponse, ModifyDsFolderResponse, DescribeTableScoreTrendResponse, ModifyIntegrationNodeRequest, ModifyMonitorStatusResponse, DescribeRuleTemplatesByPageResponse, DescribeTemplateDimCountResponse, DescribeFunctionTypesRequest, DescribeInstanceLogResponse, DescribeOpsMakePlanTasksResponse, ModifyMonitorStatusRequest, DescribeColumnLineageResponse, DescribeIntegrationTaskRequest, DescribeWorkflowListByProjectIdResponse, DeleteFilePathRequest, DescribeRulesByPageRequest, DescribeTopTableStatResponse, DescribeDataServicePublishedApiDetailRequest, DescribeTaskTableMetricOverviewRequest, DeleteDsFolderRequest, SaveCustomFunctionResponse, ModifyDsFolderRequest, DescribeDataServicePublishedApiListResponse, TriggerDsEventResponse, CreateTaskRequest, DescribeDatabaseMetasRequest, DescribeIntegrationStatisticsRecordsTrendRequest, DescribeRealTimeTaskInstanceNodeInfoRequest, DescribeWorkflowSchedulerInfoDsRequest, DescribeDependTaskListsResponse, CreateHiveTableResponse, ModifyDataSourceResponse, DescribeTaskByStatusReportResponse, ModifyDimensionWeightRequest, SubmitSqlTaskRequest, DescribeTaskLockStatusResponse, RemoveWorkflowDsRequest, BatchKillIntegrationTaskInstancesRequest, DeleteTaskDsRequest, BatchStopOpsTasksResponse, DeleteFilePathResponse, RunRerunScheduleInstancesResponse, RobAndLockIntegrationTaskRequest, ModifyTaskInfoResponse, CreateRuleRequest, DescribeColumnsMetaResponse, DescribeRuleExecResultsResponse, DeleteFileResponse, ResumeIntegrationTaskRequest, TriggerDsEventRequest, ModifyDataSourceRequest, DescribePendingSubmitTaskListRequest, TriggerEventResponse, DescribeSchedulerTaskCntByStatusRequest, ModifyApproveStatusRequest, UpdateDataModelRegistryInfoResponse, DescribeOperateOpsTasksResponse, DescribeResourceManagePathTreesRequest, DescribeDutyScheduleDetailsResponse, DescribeTableQualityDetailsResponse, DescribeProjectUsersRequest, BatchStopWorkflowsByIdsResponse, DescribeWorkflowListByProjectIdRequest, DescribeDataServicePublishedApiDetailResponse, RegisterEventResponse, CountOpsInstanceStateResponse, DescribeQualityScoreTrendRequest, SubmitTaskTestRunRequest, DescribeAlarmEventsRequest, CheckAlarmRegularNameExistResponse, DeleteProjectParamDsRequest, DescribeThirdTaskRunLogResponse, DescribeTaskAlarmRegulationsRequest, CreateCustomFunctionResponse, ModifyTaskInfoRequest, DescribeOperateOpsTasksRequest, DescribeBatchOperateTaskRequest, DescribeTableMetaResponse, DescribeOfflineTaskTokenRequest, DescribeRuleExecDetailRequest, DeleteResourceRequest, RegisterEventListenerRequest, BatchRunOpsTaskResponse, CheckIntegrationNodeNameExistsResponse, RobAndLockIntegrationTaskResponse, DeleteTaskAlarmRegularRequest, DescribeInstanceLogFileRequest, UnlockIntegrationTaskRequest, DeleteOfflineTaskResponse, DescribeDrInstancePageRequest, GenHiveTableDDLSqlResponse, DescribeRuleGroupTableRequest, CheckAlarmRegularNameExistRequest, DescribeWorkflowExecuteByIdResponse, CreateIntegrationTaskRequest, BatchRunOpsTaskRequest, DescribeRealTimeTaskMetricOverviewRequest, DescribeDatabaseMetasResponse, FreezeTasksByWorkflowIdsResponse, SubmitWorkflowRequest, DescribeResourceManagePathTreesResponse, RunRerunScheduleInstancesRequest, DeleteIntegrationTaskRequest, ModifyTaskScriptRequest, CreateIntegrationNodeRequest, DescribeTablePartitionsResponse, DescribeTableScoreTrendRequest, DescribeTaskByStatusReportRequest, ModifyExecStrategyRequest, BatchForceSuccessIntegrationTaskInstancesRequest, DescribeRealTimeTaskInstanceNodeInfoResponse, DescribeTaskByCycleReportRequest, DescribeInstanceLogDetailResponse, DescribeApproveListRequest, DescribeDutyScheduleListRequest, DescribeTaskLineageResponse, CommitRuleGroupTaskResponse, DescribeRealTimeTaskMetricOverviewResponse, DescribeOfflineTaskTokenResponse, DescribeTableInfoListResponse, RemoveWorkflowDsResponse, GetOfflineDIInstanceListRequest, ModifyExecStrategyResponse, BatchStartIntegrationTasksRequest, CreateCustomFunctionRequest, DescribeTableBasicInfoRequest, DescribeDatasourceRequest, DescribeStatisticInstanceStatusTrendOpsRequest, DescribeEventCasesResponse, DescribeTableSchemaInfoResponse, DiagnoseProResponse, UpdateWorkflowOwnerResponse, SetTaskAlarmNewRequest, DescribeInstanceListResponse, DescribeOpsInstanceLogListRequest, UploadContentRequest, StartIntegrationTaskRequest, DescribeProjectResponse, StopIntegrationTaskRequest, CreateDataSourceResponse, DescribeFolderWorkflowListResponse, DescribeIntegrationVersionNodesInfoResponse, DescribeRulesRequest, ResumeIntegrationTaskResponse, DescribeRuleResponse, DescribeTaskScriptRequest, DescribeRuleRequest, DescribeAlarmReceiverResponse, DescribeTableLineageInfoResponse, DescribeWorkflowCanvasInfoResponse, DescribeDimensionScoreRequest, FindAllFolderRequest, DescribeTableSchemaInfoRequest, BatchStartIntegrationTasksResponse, DescribeIntegrationVersionNodesInfoRequest, DescribeSuccessorOpsTaskInfosRequest, DescribeSchedulerInstanceStatusRequest, DescribeScheduleInstancesRequest, DescribeRealTimeTaskSpeedResponse, ModifyWorkflowInfoResponse, DescribeFolderWorkflowListRequest, CheckTaskNameExistResponse, DescribeSchedulerRunTimeInstanceCntByStatusRequest, LockIntegrationTaskRequest, BatchStopIntegrationTasksRequest, DescribeRuleTemplatesByPageRequest, RunTasksByMultiWorkflowResponse, RenewWorkflowSchedulerInfoDsRequest, DescribeInstanceLastLogResponse, DescribeExecStrategyRequest, CreateHiveTableRequest, BatchKillIntegrationTaskInstancesResponse, RunTasksByMultiWorkflowRequest, CheckIntegrationTaskNameExistsRequest, DescribeWorkflowSchedulerInfoDsResponse, DescribeRuleGroupTableResponse, SuspendIntegrationTaskRequest, DescribeDependOpsTasksResponse, DeleteRuleTemplateResponse, DescribeRuleTemplateRequest, DescribeTaskByCycleRequest, DescribeProjectUsersResponse, CreateRuleTemplateRequest, DescribeRuleExecDetailResponse, DeleteIntegrationTaskResponse, BatchCreateTaskVersionAsyncResponse, DescribeInstanceByCycleRequest, DescribeThirdTaskRunLogRequest, DescribeIntegrationStatisticsTaskStatusResponse, JudgeResourceFileRequest, UploadResourceResponse, DescribeOpsMakePlanInstancesResponse, DescribeDatabaseInfoListRequest, DescribeIntegrationTaskResponse, CreateDataModelRequest, DescribeQualityScoreTrendResponse, CreateHiveTableByDDLRequest, GetIntegrationNodeColumnSchemaResponse, StopIntegrationTaskResponse, DescribeOpsWorkflowsResponse, DescribeRuleTemplatesRequest, DescribeDataCheckStatResponse, DescribeInstanceDetailInfoRequest, DescribeIntegrationStatisticsInstanceTrendRequest, DescribeDsFolderTreeResponse, DescribeWorkflowCanvasInfoRequest, DagInstancesRequest, DryRunDIOfflineTaskResponse, DescribeTaskLockStatusRequest, DescribeRuleExecStatRequest, BatchCreateIntegrationTaskAlarmsResponse, DescribeIntegrationStatisticsRequest, DescribeRuleGroupRequest, ModifyTaskNameRequest, DescribeTrendStatRequest, DescribeOpsInstanceLogListResponse, DescribeApproveTypeListResponse, DescribeRuleGroupSubscriptionRequest, BatchSuspendIntegrationTasksResponse, DeleteProjectUsersRequest, DescribeWorkflowExecuteByIdRequest, DescribeTableLineageResponse, DescribeRuleExecLogRequest, BatchRerunIntegrationTaskInstancesResponse, DeleteDataModelRequest, DescribeApproveListResponse, DescribeIntegrationTasksRequest, BatchMakeUpIntegrationTasksResponse, SubmitCustomFunctionRequest } from "./wedata_models";
/**
 * wedata client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建任务
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
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
     * 批量终止实例
     */
    KillScheduleInstances(req: KillScheduleInstancesRequest, cb?: (error: string, rep: KillScheduleInstancesResponse) => void): Promise<KillScheduleInstancesResponse>;
    /**
     * 开发空间-获取数据开发脚本信息
     */
    GetFileInfo(req: GetFileInfoRequest, cb?: (error: string, rep: GetFileInfoResponse) => void): Promise<GetFileInfoResponse>;
    /**
     * 查询任务脚本
     */
    DescribeTaskScript(req: DescribeTaskScriptRequest, cb?: (error: string, rep: DescribeTaskScriptResponse) => void): Promise<DescribeTaskScriptResponse>;
    /**
     * 创建规则模板
     */
    CreateRuleTemplate(req: CreateRuleTemplateRequest, cb?: (error: string, rep: CreateRuleTemplateResponse) => void): Promise<CreateRuleTemplateResponse>;
    /**
     * 实例诊断，用于诊断 INITIAL、DEPENDENCE、ALLOCATED、LAUNCHED、EVENT_LISTENING、BEFORE_ASPECT、EXPIRED、FAILED状态的实例
     */
    DiagnosePro(req: DiagnoseProRequest, cb?: (error: string, rep: DiagnoseProResponse) => void): Promise<DiagnoseProResponse>;
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
     * 能够调通但该API已经没有使用了，看北京数据最后一次上报是23年10月，有接近一千万条数据历史无效数据。当前策略，云API示例修订然后已经分析出来的无效API走预下线流程。
https://capi.woa.com/api/detail?product=wedata&env=api_formal&version=2021-08-20&action=DescribeTaskByCycleReport
这两天在分析API的时候 有较多运维大屏的原始API当前已经没有使用了，但API没有下线。预计需要专项去梳理这一系列待下线API。

任务状态周期增长趋势
     */
    DescribeTaskByCycleReport(req: DescribeTaskByCycleReportRequest, cb?: (error: string, rep: DescribeTaskByCycleReportResponse) => void): Promise<DescribeTaskByCycleReportResponse>;
    /**
     * 数据质量的概览页面数据监测情况接口
     */
    DescribeDataCheckStat(req: DescribeDataCheckStatRequest, cb?: (error: string, rep: DescribeDataCheckStatResponse) => void): Promise<DescribeDataCheckStatResponse>;
    /**
     * 批量终止集成任务实例
     */
    BatchKillIntegrationTaskInstances(req: BatchKillIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchKillIntegrationTaskInstancesResponse) => void): Promise<BatchKillIntegrationTaskInstancesResponse>;
    /**
     * 更新规则组执行策略
     */
    ModifyExecStrategy(req: ModifyExecStrategyRequest, cb?: (error: string, rep: ModifyExecStrategyResponse) => void): Promise<ModifyExecStrategyResponse>;
    /**
     * 数据集成大屏任务状态统计趋势
     */
    DescribeIntegrationStatisticsTaskStatusTrend(req: DescribeIntegrationStatisticsTaskStatusTrendRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsTaskStatusTrendResponse) => void): Promise<DescribeIntegrationStatisticsTaskStatusTrendResponse>;
    /**
     * 建hive表
     */
    CreateHiveTable(req: CreateHiveTableRequest, cb?: (error: string, rep: CreateHiveTableResponse) => void): Promise<CreateHiveTableResponse>;
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
     * 资源管理-上传资源
     */
    UploadResource(req: UploadResourceRequest, cb?: (error: string, rep: UploadResourceResponse) => void): Promise<UploadResourceResponse>;
    /**
     * 根据周期类型 查询所有任务
     */
    DescribeTaskByCycle(req: DescribeTaskByCycleRequest, cb?: (error: string, rep: DescribeTaskByCycleResponse) => void): Promise<DescribeTaskByCycleResponse>;
    /**
     * 批量暂停集成任务
     */
    BatchSuspendIntegrationTasks(req: BatchSuspendIntegrationTasksRequest, cb?: (error: string, rep: BatchSuspendIntegrationTasksResponse) => void): Promise<BatchSuspendIntegrationTasksResponse>;
    /**
     * 元数据模型-字段基础信息查询接口
     */
    DescribeFieldBasicInfo(req: DescribeFieldBasicInfoRequest, cb?: (error: string, rep: DescribeFieldBasicInfoResponse) => void): Promise<DescribeFieldBasicInfoResponse>;
    /**
     * 查询表得分趋势
     */
    DescribeTableScoreTrend(req: DescribeTableScoreTrendRequest, cb?: (error: string, rep: DescribeTableScoreTrendResponse) => void): Promise<DescribeTableScoreTrendResponse>;
    /**
     * 删除编排空间工作流
     */
    RemoveWorkflowDs(req: RemoveWorkflowDsRequest, cb?: (error: string, rep: RemoveWorkflowDsResponse) => void): Promise<RemoveWorkflowDsResponse>;
    /**
     * 获取第三方运行日志
     */
    DescribeThirdTaskRunLog(req: DescribeThirdTaskRunLogRequest, cb?: (error: string, rep: DescribeThirdTaskRunLogResponse) => void): Promise<DescribeThirdTaskRunLogResponse>;
    /**
     * 查询父目录树，用于工作流、任务定位
     */
    DescribeDsParentFolderTree(req: DescribeDsParentFolderTreeRequest, cb?: (error: string, rep: DescribeDsParentFolderTreeResponse) => void): Promise<DescribeDsParentFolderTreeResponse>;
    /**
     * 继续集成任务
     */
    ResumeIntegrationTask(req: ResumeIntegrationTaskRequest, cb?: (error: string, rep: ResumeIntegrationTaskResponse) => void): Promise<ResumeIntegrationTaskResponse>;
    /**
     * 重命名任务（任务编辑）
     */
    ModifyTaskName(req: ModifyTaskNameRequest, cb?: (error: string, rep: ModifyTaskNameResponse) => void): Promise<ModifyTaskNameResponse>;
    /**
     * 离线任务实例运行日志列表
     */
    DescribeInstanceLogList(req: DescribeInstanceLogListRequest, cb?: (error: string, rep: DescribeInstanceLogListResponse) => void): Promise<DescribeInstanceLogListResponse>;
    /**
     * 提交任务版本
     */
    CreateTaskVersionDs(req: CreateTaskVersionDsRequest, cb?: (error: string, rep: CreateTaskVersionDsResponse) => void): Promise<CreateTaskVersionDsResponse>;
    /**
     * 批量修改任务责任人
     */
    BatchModifyOpsOwners(req: BatchModifyOpsOwnersRequest, cb?: (error: string, rep: BatchModifyOpsOwnersResponse) => void): Promise<BatchModifyOpsOwnersResponse>;
    /**
     * 创建用户自定义函数
     */
    CreateCustomFunction(req: CreateCustomFunctionRequest, cb?: (error: string, rep: CreateCustomFunctionResponse) => void): Promise<CreateCustomFunctionResponse>;
    /**
     * 解锁集成任务
     */
    UnlockIntegrationTask(req: UnlockIntegrationTaskRequest, cb?: (error: string, rep: UnlockIntegrationTaskResponse) => void): Promise<UnlockIntegrationTaskResponse>;
    /**
     * 批量停止集成任务
     */
    BatchStopIntegrationTasks(req: BatchStopIntegrationTasksRequest, cb?: (error: string, rep: BatchStopIntegrationTasksResponse) => void): Promise<BatchStopIntegrationTasksResponse>;
    /**
     * 运维大屏-任务状态分布
     */
    DescribeSchedulerTaskTypeCnt(req: DescribeSchedulerTaskTypeCntRequest, cb?: (error: string, rep: DescribeSchedulerTaskTypeCntResponse) => void): Promise<DescribeSchedulerTaskTypeCntResponse>;
    /**
     * 删除项目参数
     */
    DeleteProjectParamDs(req: DeleteProjectParamDsRequest, cb?: (error: string, rep: DeleteProjectParamDsResponse) => void): Promise<DeleteProjectParamDsResponse>;
    /**
     * 编排空间-工作流-移动任务到工作流文件夹
     */
    MoveTasksToFolder(req: MoveTasksToFolderRequest, cb?: (error: string, rep: MoveTasksToFolderResponse) => void): Promise<MoveTasksToFolderResponse>;
    /**
     * 根据项目id 获取项目下所有工作流列表
     */
    DescribeWorkflowListByProjectId(req: DescribeWorkflowListByProjectIdRequest, cb?: (error: string, rep: DescribeWorkflowListByProjectIdResponse) => void): Promise<DescribeWorkflowListByProjectIdResponse>;
    /**
     * 创建数据源
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
     * 更新工作流下任务调度信息
     */
    RenewWorkflowSchedulerInfoDs(req: RenewWorkflowSchedulerInfoDsRequest, cb?: (error: string, rep: RenewWorkflowSchedulerInfoDsResponse) => void): Promise<RenewWorkflowSchedulerInfoDsResponse>;
    /**
     * 获取离线任务长连接Token
     */
    DescribeOfflineTaskToken(req?: DescribeOfflineTaskTokenRequest, cb?: (error: string, rep: DescribeOfflineTaskTokenResponse) => void): Promise<DescribeOfflineTaskTokenResponse>;
    /**
     * 删除规则模板
     */
    DeleteRuleTemplate(req: DeleteRuleTemplateRequest, cb?: (error: string, rep: DeleteRuleTemplateResponse) => void): Promise<DeleteRuleTemplateResponse>;
    /**
     * 数语向wedata注册，提供自身cam角色信息，跳转域名、ip、端口信息等
     */
    UpdateDataModelRegistryInfo(req: UpdateDataModelRegistryInfoRequest, cb?: (error: string, rep: UpdateDataModelRegistryInfoResponse) => void): Promise<UpdateDataModelRegistryInfoResponse>;
    /**
     * 获取待审批列表
     */
    DescribeApproveList(req: DescribeApproveListRequest, cb?: (error: string, rep: DescribeApproveListResponse) => void): Promise<DescribeApproveListResponse>;
    /**
     * 添加项目用户角色
     */
    AddProjectUserRole(req?: AddProjectUserRoleRequest, cb?: (error: string, rep: AddProjectUserRoleResponse) => void): Promise<AddProjectUserRoleResponse>;
    /**
     * 判断集成节点名称是否存在
     */
    CheckIntegrationNodeNameExists(req: CheckIntegrationNodeNameExistsRequest, cb?: (error: string, rep: CheckIntegrationNodeNameExistsResponse) => void): Promise<CheckIntegrationNodeNameExistsResponse>;
    /**
     * 告警事件列表
     */
    DescribeAlarmEvents(req: DescribeAlarmEventsRequest, cb?: (error: string, rep: DescribeAlarmEventsResponse) => void): Promise<DescribeAlarmEventsResponse>;
    /**
     * 批量启动工作流
     */
    RunTasksByMultiWorkflow(req: RunTasksByMultiWorkflowRequest, cb?: (error: string, rep: RunTasksByMultiWorkflowResponse) => void): Promise<RunTasksByMultiWorkflowResponse>;
    /**
     * 质量报告-质量评分
     */
    DescribeQualityScore(req: DescribeQualityScoreRequest, cb?: (error: string, rep: DescribeQualityScoreResponse) => void): Promise<DescribeQualityScoreResponse>;
    /**
     * 获取cos token
     */
    GetCosToken(req: GetCosTokenRequest, cb?: (error: string, rep: GetCosTokenResponse) => void): Promise<GetCosTokenResponse>;
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
     * 数据质量概览页面表排行接口
     */
    DescribeTopTableStat(req: DescribeTopTableStatRequest, cb?: (error: string, rep: DescribeTopTableStatResponse) => void): Promise<DescribeTopTableStatResponse>;
    /**
     * 查询全量函数
     */
    DescribeOrganizationalFunctions(req: DescribeOrganizationalFunctionsRequest, cb?: (error: string, rep: DescribeOrganizationalFunctionsResponse) => void): Promise<DescribeOrganizationalFunctionsResponse>;
    /**
     * 实例批量置成功
     */
    RunForceSucScheduleInstances(req: RunForceSucScheduleInstancesRequest, cb?: (error: string, rep: RunForceSucScheduleInstancesResponse) => void): Promise<RunForceSucScheduleInstancesResponse>;
    /**
     * 查询目录树
     */
    DescribeDsFolderTree(req: DescribeDsFolderTreeRequest, cb?: (error: string, rep: DescribeDsFolderTreeResponse) => void): Promise<DescribeDsFolderTreeResponse>;
    /**
     * 查询实时任务表粒度指标概览
     */
    DescribeTaskTableMetricOverview(req: DescribeTaskTableMetricOverviewRequest, cb?: (error: string, rep: DescribeTaskTableMetricOverviewResponse) => void): Promise<DescribeTaskTableMetricOverviewResponse>;
    /**
     * 无
     */
    SubmitTaskTestRun(req: SubmitTaskTestRunRequest, cb?: (error: string, rep: SubmitTaskTestRunResponse) => void): Promise<SubmitTaskTestRunResponse>;
    /**
     * 获取审批分类列表
     */
    DescribeApproveTypeList(req: DescribeApproveTypeListRequest, cb?: (error: string, rep: DescribeApproveTypeListResponse) => void): Promise<DescribeApproveTypeListResponse>;
    /**
     * 规则执行日志查询
     */
    DescribeRuleExecLog(req: DescribeRuleExecLogRequest, cb?: (error: string, rep: DescribeRuleExecLogResponse) => void): Promise<DescribeRuleExecLogResponse>;
    /**
     * 开发空间-批量删除目录和文件
     */
    DeleteFilePath(req: DeleteFilePathRequest, cb?: (error: string, rep: DeleteFilePathResponse) => void): Promise<DeleteFilePathResponse>;
    /**
     * 编排空间-创建文件夹
     */
    CreateDsFolder(req: CreateDsFolderRequest, cb?: (error: string, rep: CreateDsFolderResponse) => void): Promise<CreateDsFolderResponse>;
    /**
     * 获取下游任务信息
     */
    DescribeSuccessorOpsTaskInfos(req: DescribeSuccessorOpsTaskInfosRequest, cb?: (error: string, rep: DescribeSuccessorOpsTaskInfosResponse) => void): Promise<DescribeSuccessorOpsTaskInfosResponse>;
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
     * 抢占锁定集成任务
     */
    RobAndLockIntegrationTask(req: RobAndLockIntegrationTaskRequest, cb?: (error: string, rep: RobAndLockIntegrationTaskResponse) => void): Promise<RobAndLockIntegrationTaskResponse>;
    /**
     * 创建集成任务
     */
    CreateIntegrationTask(req: CreateIntegrationTaskRequest, cb?: (error: string, rep: CreateIntegrationTaskResponse) => void): Promise<CreateIntegrationTaskResponse>;
    /**
     * 查询规则详情
     */
    DescribeRule(req: DescribeRuleRequest, cb?: (error: string, rep: DescribeRuleResponse) => void): Promise<DescribeRuleResponse>;
    /**
     * 按补录计划批量终止实例。
     */
    KillOpsMakePlanInstances(req: KillOpsMakePlanInstancesRequest, cb?: (error: string, rep: KillOpsMakePlanInstancesResponse) => void): Promise<KillOpsMakePlanInstancesResponse>;
    /**
     * 数据源详情
     */
    DescribeDataSourceList(req: DescribeDataSourceListRequest, cb?: (error: string, rep: DescribeDataSourceListResponse) => void): Promise<DescribeDataSourceListResponse>;
    /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
更新任务
     */
    ModifyTaskInfo(req: ModifyTaskInfoRequest, cb?: (error: string, rep: ModifyTaskInfoResponse) => void): Promise<ModifyTaskInfoResponse>;
    /**
     * 事件管理-触发事件
     */
    TriggerDsEvent(req: TriggerDsEventRequest, cb?: (error: string, rep: TriggerDsEventResponse) => void): Promise<TriggerDsEventResponse>;
    /**
     * 运维大屏-实例运行时长排行
     */
    DescribeSchedulerRunTimeInstanceCntByStatus(req: DescribeSchedulerRunTimeInstanceCntByStatusRequest, cb?: (error: string, rep: DescribeSchedulerRunTimeInstanceCntByStatusResponse) => void): Promise<DescribeSchedulerRunTimeInstanceCntByStatusResponse>;
    /**
     * 任务状态统计
     */
    DescribeSchedulerTaskCntByStatus(req: DescribeSchedulerTaskCntByStatusRequest, cb?: (error: string, rep: DescribeSchedulerTaskCntByStatusResponse) => void): Promise<DescribeSchedulerTaskCntByStatusResponse>;
    /**
     * 更新集成任务
     */
    ModifyIntegrationTask(req: ModifyIntegrationTaskRequest, cb?: (error: string, rep: ModifyIntegrationTaskResponse) => void): Promise<ModifyIntegrationTaskResponse>;
    /**
     * 获取值班日历
     */
    DescribeDutyScheduleDetails(req: DescribeDutyScheduleDetailsRequest, cb?: (error: string, rep: DescribeDutyScheduleDetailsResponse) => void): Promise<DescribeDutyScheduleDetailsResponse>;
    /**
     * 数据集成大屏任务状态分布统计
     */
    DescribeIntegrationStatisticsTaskStatus(req: DescribeIntegrationStatisticsTaskStatusRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsTaskStatusResponse) => void): Promise<DescribeIntegrationStatisticsTaskStatusResponse>;
    /**
     * 批量运行集成任务
     */
    BatchStartIntegrationTasks(req: BatchStartIntegrationTasksRequest, cb?: (error: string, rep: BatchStartIntegrationTasksResponse) => void): Promise<BatchStartIntegrationTasksResponse>;
    /**
     * 质量报告-修改维度权限
     */
    ModifyDimensionWeight(req: ModifyDimensionWeightRequest, cb?: (error: string, rep: ModifyDimensionWeightResponse) => void): Promise<ModifyDimensionWeightResponse>;
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
     * 数据源详情
     */
    DescribeDatasource(req: DescribeDatasourceRequest, cb?: (error: string, rep: DescribeDatasourceResponse) => void): Promise<DescribeDatasourceResponse>;
    /**
     * 数据开发模块-文件夹更新
     */
    ModifyDsFolder(req: ModifyDsFolderRequest, cb?: (error: string, rep: ModifyDsFolderResponse) => void): Promise<ModifyDsFolderResponse>;
    /**
     * 通过工作流id，查询工作流详情
     */
    DescribeWorkflowInfoById(req: DescribeWorkflowInfoByIdRequest, cb?: (error: string, rep: DescribeWorkflowInfoByIdResponse) => void): Promise<DescribeWorkflowInfoByIdResponse>;
    /**
     * 任务状态趋势
     */
    DescribeTaskByStatusReport(req: DescribeTaskByStatusReportRequest, cb?: (error: string, rep: DescribeTaskByStatusReportResponse) => void): Promise<DescribeTaskByStatusReportResponse>;
    /**
     * 获取离线任务实例
     */
    GetOfflineInstanceList(req: GetOfflineInstanceListRequest, cb?: (error: string, rep: GetOfflineInstanceListResponse) => void): Promise<GetOfflineInstanceListResponse>;
    /**
     * 创建离线任务
     */
    CreateOfflineTask(req: CreateOfflineTaskRequest, cb?: (error: string, rep: CreateOfflineTaskResponse) => void): Promise<CreateOfflineTaskResponse>;
    /**
     * 更新工作流调度
     */
    ModifyWorkflowSchedule(req: ModifyWorkflowScheduleRequest, cb?: (error: string, rep: ModifyWorkflowScheduleResponse) => void): Promise<ModifyWorkflowScheduleResponse>;
    /**
     * 获取表schema信息
     */
    DescribeTableSchemaInfo(req: DescribeTableSchemaInfoRequest, cb?: (error: string, rep: DescribeTableSchemaInfoResponse) => void): Promise<DescribeTableSchemaInfoResponse>;
    /**
     * 更新质量规则接口
     */
    ModifyRule(req: ModifyRuleRequest, cb?: (error: string, rep: ModifyRuleResponse) => void): Promise<ModifyRuleResponse>;
    /**
     * 查询函数类型
     */
    DescribeFunctionTypes(req?: DescribeFunctionTypesRequest, cb?: (error: string, rep: DescribeFunctionTypesResponse) => void): Promise<DescribeFunctionTypesResponse>;
    /**
     * 删除数据源
     */
    DeleteDataSources(req: DeleteDataSourcesRequest, cb?: (error: string, rep: DeleteDataSourcesResponse) => void): Promise<DeleteDataSourcesResponse>;
    /**
     * 删除集成节点
     */
    DeleteIntegrationNode(req: DeleteIntegrationNodeRequest, cb?: (error: string, rep: DeleteIntegrationNodeResponse) => void): Promise<DeleteIntegrationNodeResponse>;
    /**
     * 停止集成任务
     */
    StopIntegrationTask(req: StopIntegrationTaskRequest, cb?: (error: string, rep: StopIntegrationTaskResponse) => void): Promise<StopIntegrationTaskResponse>;
    /**
     * 获取表元数据list
     */
    DescribeTableMetas(req: DescribeTableMetasRequest, cb?: (error: string, rep: DescribeTableMetasResponse) => void): Promise<DescribeTableMetasResponse>;
    /**
     * 实时任务同步速度趋势
     */
    DescribeRealTimeTaskSpeed(req: DescribeRealTimeTaskSpeedRequest, cb?: (error: string, rep: DescribeRealTimeTaskSpeedResponse) => void): Promise<DescribeRealTimeTaskSpeedResponse>;
    /**
     * 获取实例列表
     */
    DescribeInstanceList(req: DescribeInstanceListRequest, cb?: (error: string, rep: DescribeInstanceListResponse) => void): Promise<DescribeInstanceListResponse>;
    /**
     * 元数据模型-表基础信息查询接口
     */
    DescribeTableBasicInfo(req: DescribeTableBasicInfoRequest, cb?: (error: string, rep: DescribeTableBasicInfoResponse) => void): Promise<DescribeTableBasicInfoResponse>;
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
     * 批量补数据（创建补录任务）
     */
    CreateOpsMakePlan(req: CreateOpsMakePlanRequest, cb?: (error: string, rep: CreateOpsMakePlanResponse) => void): Promise<CreateOpsMakePlanResponse>;
    /**
     * 任务运维-批量暂停任务
     */
    FreezeOpsTasks(req: FreezeOpsTasksRequest, cb?: (error: string, rep: FreezeOpsTasksResponse) => void): Promise<FreezeOpsTasksResponse>;
    /**
     * 查询规则组详情接口
     */
    DescribeRuleGroup(req: DescribeRuleGroupRequest, cb?: (error: string, rep: DescribeRuleGroupResponse) => void): Promise<DescribeRuleGroupResponse>;
    /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
    ModifyTaskScript(req: ModifyTaskScriptRequest, cb?: (error: string, rep: ModifyTaskScriptResponse) => void): Promise<ModifyTaskScriptResponse>;
    /**
     * 获取具体实例相关日志信息
     */
    DescribeInstanceLogDetail(req: DescribeInstanceLogDetailRequest, cb?: (error: string, rep: DescribeInstanceLogDetailResponse) => void): Promise<DescribeInstanceLogDetailResponse>;
    /**
     * 编排空间批量操作页面查找全部的文件夹
     */
    FindAllFolder(req: FindAllFolderRequest, cb?: (error: string, rep: FindAllFolderResponse) => void): Promise<FindAllFolderResponse>;
    /**
     * 获取数据库信息
     */
    DescribeDatabaseInfoList(req: DescribeDatabaseInfoListRequest, cb?: (error: string, rep: DescribeDatabaseInfoListResponse) => void): Promise<DescribeDatabaseInfoListResponse>;
    /**
     * 根据层级查找上/下游任务节点
     */
    DescribeDependOpsTasks(req: DescribeDependOpsTasksRequest, cb?: (error: string, rep: DescribeDependOpsTasksResponse) => void): Promise<DescribeDependOpsTasksResponse>;
    /**
     * 资源管理-判断资源文件是否存在
     */
    JudgeResourceFile(req: JudgeResourceFileRequest, cb?: (error: string, rep: JudgeResourceFileResponse) => void): Promise<JudgeResourceFileResponse>;
    /**
     * 提交集成任务
     */
    CommitIntegrationTask(req: CommitIntegrationTaskRequest, cb?: (error: string, rep: CommitIntegrationTaskResponse) => void): Promise<CommitIntegrationTaskResponse>;
    /**
     * 删除任务
     */
    DeleteOfflineTask(req: DeleteOfflineTaskRequest, cb?: (error: string, rep: DeleteOfflineTaskResponse) => void): Promise<DeleteOfflineTaskResponse>;
    /**
     * 创建hive表，返回表名称
     */
    CreateHiveTableByDDL(req: CreateHiveTableByDDLRequest, cb?: (error: string, rep: CreateHiveTableByDDLResponse) => void): Promise<CreateHiveTableByDDLResponse>;
    /**
     * 编排空间-删除文件夹
     */
    DeleteDsFolder(req: DeleteDsFolderRequest, cb?: (error: string, rep: DeleteDsFolderResponse) => void): Promise<DeleteDsFolderResponse>;
    /**
     * 批量操作页面获取任务列表
     */
    DescribeBatchOperateTask(req: DescribeBatchOperateTaskRequest, cb?: (error: string, rep: DescribeBatchOperateTaskResponse) => void): Promise<DescribeBatchOperateTaskResponse>;
    /**
     * 通过任务查询表的血缘关系
     */
    DescribeTaskLineage(req: DescribeTaskLineageRequest, cb?: (error: string, rep: DescribeTaskLineageResponse) => void): Promise<DescribeTaskLineageResponse>;
    /**
     * 获取资源管理目录树
     */
    DescribeResourceManagePathTrees(req: DescribeResourceManagePathTreesRequest, cb?: (error: string, rep: DescribeResourceManagePathTreesResponse) => void): Promise<DescribeResourceManagePathTreesResponse>;
    /**
     * 批量置成功集成任务实例
     */
    BatchForceSuccessIntegrationTaskInstances(req: BatchForceSuccessIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchForceSuccessIntegrationTaskInstancesResponse) => void): Promise<BatchForceSuccessIntegrationTaskInstancesResponse>;
    /**
     * 查询实时任务日志列表
     */
    DescribeStreamTaskLogList(req: DescribeStreamTaskLogListRequest, cb?: (error: string, rep: DescribeStreamTaskLogListResponse) => void): Promise<DescribeStreamTaskLogListResponse>;
    /**
     * 创建质量规则接口
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 编辑规则模板
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
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
注册事件监听器
     */
    RegisterEventListener(req: RegisterEventListenerRequest, cb?: (error: string, rep: RegisterEventListenerResponse) => void): Promise<RegisterEventListenerResponse>;
    /**
     * 实例详情页，返回某个实例所有生命周期信息
     */
    DescribeInstanceDetailInfo(req: DescribeInstanceDetailInfoRequest, cb?: (error: string, rep: DescribeInstanceDetailInfoResponse) => void): Promise<DescribeInstanceDetailInfoResponse>;
    /**
     * 获取值班表列表
     */
    DescribeDutyScheduleList(req: DescribeDutyScheduleListRequest, cb?: (error: string, rep: DescribeDutyScheduleListResponse) => void): Promise<DescribeDutyScheduleListResponse>;
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
     * 查询表的分区详情信息
     */
    DescribeTablePartitions(req: DescribeTablePartitionsRequest, cb?: (error: string, rep: DescribeTablePartitionsResponse) => void): Promise<DescribeTablePartitionsResponse>;
    /**
     * 分页查询质量规则
     */
    DescribeRulesByPage(req: DescribeRulesByPageRequest, cb?: (error: string, rep: DescribeRulesByPageResponse) => void): Promise<DescribeRulesByPageResponse>;
    /**
     * 删除项目用户
     */
    DeleteProjectUsers(req: DeleteProjectUsersRequest, cb?: (error: string, rep: DeleteProjectUsersResponse) => void): Promise<DeleteProjectUsersResponse>;
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
     * 查询模板详情
     */
    DescribeRuleTemplate(req: DescribeRuleTemplateRequest, cb?: (error: string, rep: DescribeRuleTemplateResponse) => void): Promise<DescribeRuleTemplateResponse>;
    /**
     * 任务运维-任务列表 批量启动
     */
    BatchRunOpsTask(req: BatchRunOpsTaskRequest, cb?: (error: string, rep: BatchRunOpsTaskResponse) => void): Promise<BatchRunOpsTaskResponse>;
    /**
     * 【过滤条件】 {模板名称Name,支持模糊匹配} {模板类型type，1.系统模板 2.自定义模板} {质量检测维度QualityDims, 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性} 【排序字段】 { 引用数排序类型CitationOrderType，根据引用数量排序 ASC DESC}
     */
    DescribeRuleTemplatesByPage(req: DescribeRuleTemplatesByPageRequest, cb?: (error: string, rep: DescribeRuleTemplatesByPageResponse) => void): Promise<DescribeRuleTemplatesByPageResponse>;
    /**
     * 更新工作流信息
     */
    ModifyWorkflowInfo(req: ModifyWorkflowInfoRequest, cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void): Promise<ModifyWorkflowInfoResponse>;
    /**
     * 数据质量概览页面规则运行情况接口
     */
    DescribeRuleExecStat(req: DescribeRuleExecStatRequest, cb?: (error: string, rep: DescribeRuleExecStatResponse) => void): Promise<DescribeRuleExecStatResponse>;
    /**
     * 实例批量重跑
     */
    RunRerunScheduleInstances(req: RunRerunScheduleInstancesRequest, cb?: (error: string, rep: RunRerunScheduleInstancesResponse) => void): Promise<RunRerunScheduleInstancesResponse>;
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
     * 获取数据服务API的发布态信息列表
     */
    DescribeDataServicePublishedApiList(req: DescribeDataServicePublishedApiListRequest, cb?: (error: string, rep: DescribeDataServicePublishedApiListResponse) => void): Promise<DescribeDataServicePublishedApiListResponse>;
    /**
     * 修改审批单状态
     */
    ModifyApproveStatus(req: ModifyApproveStatusRequest, cb?: (error: string, rep: ModifyApproveStatusResponse) => void): Promise<ModifyApproveStatusResponse>;
    /**
     * 下载日志文件，返回日志下载URL
     */
    DescribeInstanceLogFile(req: DescribeInstanceLogFileRequest, cb?: (error: string, rep: DescribeInstanceLogFileResponse) => void): Promise<DescribeInstanceLogFileResponse>;
    /**
     * 异步批量创建任务版本
     */
    BatchCreateTaskVersionAsync(req: BatchCreateTaskVersionAsyncRequest, cb?: (error: string, rep: BatchCreateTaskVersionAsyncResponse) => void): Promise<BatchCreateTaskVersionAsyncResponse>;
    /**
     * 更新监控状态
     */
    ModifyMonitorStatus(req: ModifyMonitorStatusRequest, cb?: (error: string, rep: ModifyMonitorStatusResponse) => void): Promise<ModifyMonitorStatusResponse>;
    /**
     * 查询规则组执行策略
     */
    DescribeExecStrategy(req: DescribeExecStrategyRequest, cb?: (error: string, rep: DescribeExecStrategyResponse) => void): Promise<DescribeExecStrategyResponse>;
    /**
     * 列出表血缘信息
     */
    DescribeTableLineage(req: DescribeTableLineageRequest, cb?: (error: string, rep: DescribeTableLineageResponse) => void): Promise<DescribeTableLineageResponse>;
    /**
     * 暂停集成任务
     */
    SuspendIntegrationTask(req: SuspendIntegrationTaskRequest, cb?: (error: string, rep: SuspendIntegrationTaskResponse) => void): Promise<SuspendIntegrationTaskResponse>;
    /**
     * 创建工作流
     */
    CreateWorkflowDs(req: CreateWorkflowDsRequest, cb?: (error: string, rep: CreateWorkflowDsResponse) => void): Promise<CreateWorkflowDsResponse>;
    /**
     * 根据条件查找事件实例
     */
    DescribeEventCases(req: DescribeEventCasesRequest, cb?: (error: string, rep: DescribeEventCasesResponse) => void): Promise<DescribeEventCasesResponse>;
    /**
     * 获取离线任务实例列表(新)
     */
    GetOfflineDIInstanceList(req: GetOfflineDIInstanceListRequest, cb?: (error: string, rep: GetOfflineDIInstanceListResponse) => void): Promise<GetOfflineDIInstanceListResponse>;
    /**
     * 通过工作流Id删除工作流
     */
    DeleteWorkflowById(req: DeleteWorkflowByIdRequest, cb?: (error: string, rep: DeleteWorkflowByIdResponse) => void): Promise<DeleteWorkflowByIdResponse>;
    /**
     * 查询质量规则列表
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 启动集成任务
     */
    StartIntegrationTask(req: StartIntegrationTaskRequest, cb?: (error: string, rep: StartIntegrationTaskResponse) => void): Promise<StartIntegrationTaskResponse>;
    /**
     * 锁定集成任务
     */
    LockIntegrationTask(req: LockIntegrationTaskRequest, cb?: (error: string, rep: LockIntegrationTaskResponse) => void): Promise<LockIntegrationTaskResponse>;
    /**
     * 提交工作流
     */
    SubmitWorkflow(req: SubmitWorkflowRequest, cb?: (error: string, rep: SubmitWorkflowResponse) => void): Promise<SubmitWorkflowResponse>;
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
     * 删除编排空间任务
     */
    DeleteTaskDs(req: DeleteTaskDsRequest, cb?: (error: string, rep: DeleteTaskDsResponse) => void): Promise<DeleteTaskDsResponse>;
    /**
     * 更新规则组订阅信息
     */
    ModifyRuleGroupSubscription(req: ModifyRuleGroupSubscriptionRequest, cb?: (error: string, rep: ModifyRuleGroupSubscriptionResponse) => void): Promise<ModifyRuleGroupSubscriptionResponse>;
    /**
     * 删除任务告警规则
     */
    DeleteTaskAlarmRegular(req: DeleteTaskAlarmRegularRequest, cb?: (error: string, rep: DeleteTaskAlarmRegularResponse) => void): Promise<DeleteTaskAlarmRegularResponse>;
    /**
     * 获取待提交任务预提交校验信息（注意：工作流编号或者任务编号列表，必须填一项）
     */
    DescribePendingSubmitTaskList(req: DescribePendingSubmitTaskListRequest, cb?: (error: string, rep: DescribePendingSubmitTaskListResponse) => void): Promise<DescribePendingSubmitTaskListResponse>;
    /**
     * 规则执行结果列表查询
     */
    DescribeRuleExecResults(req: DescribeRuleExecResultsRequest, cb?: (error: string, rep: DescribeRuleExecResultsResponse) => void): Promise<DescribeRuleExecResultsResponse>;
    /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
触发事件
     */
    TriggerEvent(req: TriggerEventRequest, cb?: (error: string, rep: TriggerEventResponse) => void): Promise<TriggerEventResponse>;
    /**
     * 暂停工作流下的所有任务
     */
    FreezeTasksByWorkflowIds(req: FreezeTasksByWorkflowIdsRequest, cb?: (error: string, rep: FreezeTasksByWorkflowIdsResponse) => void): Promise<FreezeTasksByWorkflowIdsResponse>;
    /**
     * 资源管理删除资源
     */
    DeleteResource(req: DeleteResourceRequest, cb?: (error: string, rep: DeleteResourceResponse) => void): Promise<DeleteResourceResponse>;
    /**
     * 质量报告-质量分周期趋势
     */
    DescribeQualityScoreTrend(req: DescribeQualityScoreTrendRequest, cb?: (error: string, rep: DescribeQualityScoreTrendResponse) => void): Promise<DescribeQualityScoreTrendResponse>;
    /**
     * 通过taskIds查询task详情列表
     */
    DescribeDependTaskLists(req: DescribeDependTaskListsRequest, cb?: (error: string, rep: DescribeDependTaskListsResponse) => void): Promise<DescribeDependTaskListsResponse>;
    /**
     * 保存用户自定义函数
     */
    SaveCustomFunction(req: SaveCustomFunctionRequest, cb?: (error: string, rep: SaveCustomFunctionResponse) => void): Promise<SaveCustomFunctionResponse>;
    /**
     * 修改数据源
     */
    ModifyDataSource(req: ModifyDataSourceRequest, cb?: (error: string, rep: ModifyDataSourceResponse) => void): Promise<ModifyDataSourceResponse>;
    /**
     * 查询任务告警规则列表
     */
    DescribeTaskAlarmRegulations(req: DescribeTaskAlarmRegulationsRequest, cb?: (error: string, rep: DescribeTaskAlarmRegulationsResponse) => void): Promise<DescribeTaskAlarmRegulationsResponse>;
    /**
     * 查询集成任务版本节点信息
     */
    DescribeIntegrationVersionNodesInfo(req: DescribeIntegrationVersionNodesInfoRequest, cb?: (error: string, rep: DescribeIntegrationVersionNodesInfoResponse) => void): Promise<DescribeIntegrationVersionNodesInfoResponse>;
    /**
     * 获取项目下的用户，分页返回
     */
    DescribeProjectUsers(req: DescribeProjectUsersRequest, cb?: (error: string, rep: DescribeProjectUsersResponse) => void): Promise<DescribeProjectUsersResponse>;
    /**
     * 获取工作流调度信息
     */
    DescribeWorkflowSchedulerInfoDs(req: DescribeWorkflowSchedulerInfoDsRequest, cb?: (error: string, rep: DescribeWorkflowSchedulerInfoDsResponse) => void): Promise<DescribeWorkflowSchedulerInfoDsResponse>;
    /**
     * 删除用户自定义函数
     */
    DeleteCustomFunction(req: DeleteCustomFunctionRequest, cb?: (error: string, rep: DeleteCustomFunctionResponse) => void): Promise<DeleteCustomFunctionResponse>;
    /**
     * 查询规则模板维度分布情况
     */
    DescribeTemplateDimCount(req: DescribeTemplateDimCountRequest, cb?: (error: string, rep: DescribeTemplateDimCountResponse) => void): Promise<DescribeTemplateDimCountResponse>;
    /**
     * 根据项目id 获取项目下所有工作流列表
     */
    DescribeFolderWorkflowList(req: DescribeFolderWorkflowListRequest, cb?: (error: string, rep: DescribeFolderWorkflowListResponse) => void): Promise<DescribeFolderWorkflowListResponse>;
    /**
     * 查询集成任务
     */
    DescribeIntegrationTask(req: DescribeIntegrationTaskRequest, cb?: (error: string, rep: DescribeIntegrationTaskResponse) => void): Promise<DescribeIntegrationTaskResponse>;
    /**
     * 查询数据服务API的发布态信息
     */
    DescribeDataServicePublishedApiDetail(req: DescribeDataServicePublishedApiDetailRequest, cb?: (error: string, rep: DescribeDataServicePublishedApiDetailResponse) => void): Promise<DescribeDataServicePublishedApiDetailResponse>;
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
     * 查询工作流画布运行起止时间
     */
    DescribeWorkflowExecuteById(req: DescribeWorkflowExecuteByIdRequest, cb?: (error: string, rep: DescribeWorkflowExecuteByIdResponse) => void): Promise<DescribeWorkflowExecuteByIdResponse>;
    /**
     * 创建集成节点
     */
    CreateIntegrationNode(req: CreateIntegrationNodeRequest, cb?: (error: string, rep: CreateIntegrationNodeResponse) => void): Promise<CreateIntegrationNodeResponse>;
    /**
     * 任务运维-批量删除任务
     */
    BatchDeleteOpsTasks(req: BatchDeleteOpsTasksRequest, cb?: (error: string, rep: BatchDeleteOpsTasksResponse) => void): Promise<BatchDeleteOpsTasksResponse>;
    /**
     * 提交规则组运行任务接口
     */
    CommitRuleGroupTask(req: CommitRuleGroupTaskRequest, cb?: (error: string, rep: CommitRuleGroupTaskResponse) => void): Promise<CommitRuleGroupTaskResponse>;
    /**
     * 日志获取详情页面
     */
    DescribeInstanceLastLog(req: DescribeInstanceLastLogRequest, cb?: (error: string, rep: DescribeInstanceLastLogResponse) => void): Promise<DescribeInstanceLastLogResponse>;
    /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
    ModifyTaskLinks(req: ModifyTaskLinksRequest, cb?: (error: string, rep: ModifyTaskLinksResponse) => void): Promise<ModifyTaskLinksResponse>;
    /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
注册事件
     */
    RegisterEvent(req: RegisterEventRequest, cb?: (error: string, rep: RegisterEventResponse) => void): Promise<RegisterEventResponse>;
    /**
     * 根据条件分页查询补录计划
     */
    DescribeOpsMakePlans(req: DescribeOpsMakePlansRequest, cb?: (error: string, rep: DescribeOpsMakePlansResponse) => void): Promise<DescribeOpsMakePlansResponse>;
    /**
     * 查询工作流画布
     */
    DescribeWorkflowCanvasInfo(req: DescribeWorkflowCanvasInfoRequest, cb?: (error: string, rep: DescribeWorkflowCanvasInfoResponse) => void): Promise<DescribeWorkflowCanvasInfoResponse>;
    /**
     * 查询数据库列表
     */
    DescribeDatabaseMetas(req: DescribeDatabaseMetasRequest, cb?: (error: string, rep: DescribeDatabaseMetasResponse) => void): Promise<DescribeDatabaseMetasResponse>;
    /**
     * 编排空间-工作流-创建任务文件夹
     */
    CreateTaskFolder(req: CreateTaskFolderRequest, cb?: (error: string, rep: CreateTaskFolderResponse) => void): Promise<CreateTaskFolderResponse>;
    /**
     * 修改任务告警规则
     */
    ModifyTaskAlarmRegular(req: ModifyTaskAlarmRegularRequest, cb?: (error: string, rep: ModifyTaskAlarmRegularResponse) => void): Promise<ModifyTaskAlarmRegularResponse>;
    /**
     * 批量继续执行集成实时任务
     */
    BatchResumeIntegrationTasks(req: BatchResumeIntegrationTasksRequest, cb?: (error: string, rep: BatchResumeIntegrationTasksResponse) => void): Promise<BatchResumeIntegrationTasksResponse>;
    /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     */
    SetTaskAlarmNew(req: SetTaskAlarmNewRequest, cb?: (error: string, rep: SetTaskAlarmNewResponse) => void): Promise<SetTaskAlarmNewResponse>;
    /**
     * <p style="color:red;">[注意：该版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
    SubmitTask(req: SubmitTaskRequest, cb?: (error: string, rep: SubmitTaskResponse) => void): Promise<SubmitTaskResponse>;
    /**
     * 即席分析提交SQL任务
     */
    SubmitSqlTask(req: SubmitSqlTaskRequest, cb?: (error: string, rep: SubmitSqlTaskResponse) => void): Promise<SubmitSqlTaskResponse>;
    /**
     * 获取数据源信息-数据源分页列表
     */
    DescribeDataSourceInfoList(req: DescribeDataSourceInfoListRequest, cb?: (error: string, rep: DescribeDataSourceInfoListResponse) => void): Promise<DescribeDataSourceInfoListResponse>;
    /**
     * 查询函数分类
     */
    DescribeFunctionKinds(req?: DescribeFunctionKindsRequest, cb?: (error: string, rep: DescribeFunctionKindsResponse) => void): Promise<DescribeFunctionKindsResponse>;
    /**
     * 查询Inlong manager日志
     */
    TaskLog(req: TaskLogRequest, cb?: (error: string, rep: TaskLogResponse) => void): Promise<TaskLogResponse>;
    /**
     * 查询规则模板列表
     */
    DescribeRuleTemplates(req: DescribeRuleTemplatesRequest, cb?: (error: string, rep: DescribeRuleTemplatesResponse) => void): Promise<DescribeRuleTemplatesResponse>;
    /**
     * 修改工作流责任人
     */
    UpdateWorkflowOwner(req: UpdateWorkflowOwnerRequest, cb?: (error: string, rep: UpdateWorkflowOwnerResponse) => void): Promise<UpdateWorkflowOwnerResponse>;
    /**
     * 更新集成节点
     */
    ModifyIntegrationNode(req: ModifyIntegrationNodeRequest, cb?: (error: string, rep: ModifyIntegrationNodeResponse) => void): Promise<ModifyIntegrationNodeResponse>;
    /**
     * 获取项目信息
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 查询表元数据详情
     */
    DescribeTableMeta(req: DescribeTableMetaRequest, cb?: (error: string, rep: DescribeTableMetaResponse) => void): Promise<DescribeTableMetaResponse>;
    /**
     * 创建数据建模，提供给云应用使用，实现“Wedata数据建模”的下单发货
     */
    CreateDataModel(req: CreateDataModelRequest, cb?: (error: string, rep: CreateDataModelResponse) => void): Promise<CreateDataModelResponse>;
    /**
     * 提取数据集成节点字段Schema
     */
    GetIntegrationNodeColumnSchema(req: GetIntegrationNodeColumnSchemaRequest, cb?: (error: string, rep: GetIntegrationNodeColumnSchemaResponse) => void): Promise<GetIntegrationNodeColumnSchemaResponse>;
    /**
     * 查询用户生产工作流列表
     */
    DescribeOpsWorkflows(req: DescribeOpsWorkflowsRequest, cb?: (error: string, rep: DescribeOpsWorkflowsResponse) => void): Promise<DescribeOpsWorkflowsResponse>;
    /**
     * 批量重跑集成任务实例
     */
    BatchRerunIntegrationTaskInstances(req: BatchRerunIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchRerunIntegrationTaskInstancesResponse) => void): Promise<BatchRerunIntegrationTaskInstancesResponse>;
    /**
     * 列出表血缘信息
     */
    DescribeTableLineageInfo(req: DescribeTableLineageInfoRequest, cb?: (error: string, rep: DescribeTableLineageInfoResponse) => void): Promise<DescribeTableLineageInfoResponse>;
    /**
     * 提交自定义函数
     */
    SubmitCustomFunction(req: SubmitCustomFunctionRequest, cb?: (error: string, rep: SubmitCustomFunctionResponse) => void): Promise<SubmitCustomFunctionResponse>;
    /**
     * 查询实时任务实例节点信息
     */
    DescribeRealTimeTaskInstanceNodeInfo(req: DescribeRealTimeTaskInstanceNodeInfoRequest, cb?: (error: string, rep: DescribeRealTimeTaskInstanceNodeInfoResponse) => void): Promise<DescribeRealTimeTaskInstanceNodeInfoResponse>;
    /**
     * 数据集成大屏概览
     */
    DescribeIntegrationStatistics(req: DescribeIntegrationStatisticsRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsResponse) => void): Promise<DescribeIntegrationStatisticsResponse>;
    /**
     * 批量停止工作流
     */
    BatchStopWorkflowsByIds(req: BatchStopWorkflowsByIdsRequest, cb?: (error: string, rep: BatchStopWorkflowsByIdsResponse) => void): Promise<BatchStopWorkflowsByIdsResponse>;
    /**
     * 无效API，没有上线过的业务功能

分页查询试运行实例列表
     */
    DescribeDrInstancePage(req: DescribeDrInstancePageRequest, cb?: (error: string, rep: DescribeDrInstancePageResponse) => void): Promise<DescribeDrInstancePageResponse>;
    /**
     * 销毁数据建模，提供给云应用使用，实现“Wedata数据建模”的销毁
     */
    DeleteDataModel(req: DeleteDataModelRequest, cb?: (error: string, rep: DeleteDataModelResponse) => void): Promise<DeleteDataModelResponse>;
}

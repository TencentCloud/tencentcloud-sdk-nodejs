import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TaskLogResponse, DescribeIntegrationStatisticsResponse, UnlockIntegrationTaskResponse, DescribeStreamTaskLogListRequest, DescribeIntegrationNodeResponse, MakeUpTasksNewResponse, DescribeInstanceLogsRequest, DescribeTaskAlarmRegulationsResponse, CreateDataSourceRequest, DescribeRealTimeTaskSpeedRequest, FreezeTasksRequest, MakeUpWorkflowNewResponse, CreateIntegrationNodeResponse, CreateWorkflowRequest, SubmitTaskRequest, BatchResumeIntegrationTasksResponse, CheckTaskNameExistRequest, DescribeFunctionKindsRequest, DescribeFunctionKindsResponse, ModifyIntegrationTaskResponse, DescribeDataSourceListRequest, DescribeIntegrationStatisticsRecordsTrendRequest, DescribeInLongTkeClusterListResponse, KillInstancesRequest, RegisterEventListenerResponse, RestartInLongAgentResponse, DescribeStandardRuleDetailInfoListResponse, TriggerEventRequest, DescribeClusterNamespaceListResponse, CreateInLongAgentResponse, DescribeInstanceLogRequest, DescribeKafkaTopicInfoRequest, RestartInLongAgentRequest, DescribeIntegrationStatisticsTaskStatusTrendResponse, SaveCustomFunctionRequest, ModifyWorkflowScheduleRequest, RegisterEventRequest, BatchDeleteIntegrationTasksResponse, BatchRerunIntegrationTaskInstancesRequest, DescribeDataSourceListResponse, ModifyIntegrationTaskRequest, BatchSuspendIntegrationTasksRequest, DeleteCustomFunctionResponse, DescribeTaskScriptResponse, DescribeTaskInstanceResponse, BatchUpdateIntegrationTasksRequest, ResumeIntegrationTaskResponse, ModifyTaskNameResponse, DescribeTaskReportDetailListResponse, DescribeIntegrationStatisticsInstanceTrendResponse, DeleteDataSourcesResponse, DescribeTaskInstanceReportDetailRequest, ModifyTaskLinksRequest, ModifyWorkflowScheduleResponse, DeleteDataSourcesRequest, ModifyTaskAlarmRegularRequest, DescribeOrganizationalFunctionsRequest, DescribeKafkaTopicInfoResponse, RerunInstancesRequest, CommitIntegrationTaskRequest, DescribeTableInfoListRequest, CommitIntegrationTaskResponse, SubmitTaskResponse, ModifyFolderRequest, DescribeAlarmEventsResponse, DescribeInstanceLogListResponse, RunTaskRequest, DescribeDependTasksNewRequest, CreateOfflineTaskResponse, CreateTaskAlarmRegularRequest, DescribeInstanceLogListRequest, DescribeInLongAgentListRequest, DescribeInstanceLogsResponse, BatchDeleteIntegrationTasksRequest, TaskLogRequest, DescribeIntegrationStatisticsTaskStatusRequest, BatchDeleteTasksNewResponse, SuspendIntegrationTaskRequest, CreateHiveTableByDDLResponse, ModifyTaskScriptResponse, DeleteResourceResponse, DescribeTaskInstancesResponse, DescribeInstanceListRequest, DeleteCustomFunctionRequest, DryRunDIOfflineTaskRequest, CreateOfflineTaskRequest, DescribeIntegrationStatisticsRecordsTrendResponse, BatchForceSuccessIntegrationTaskInstancesResponse, DescribeClusterNamespaceListRequest, CreateInLongAgentRequest, ForceSucInstancesRequest, GenHiveTableDDLSqlRequest, BatchCreateIntegrationTaskAlarmsRequest, LockIntegrationTaskResponse, DescribeFunctionTypesResponse, DeleteWorkflowNewRequest, BatchUpdateIntegrationTasksResponse, MakeUpWorkflowNewRequest, DescribeInstanceLastLogRequest, DescribeTaskInstancesRequest, CreateTaskAlarmRegularResponse, DescribeProjectRequest, CreateIntegrationTaskResponse, DescribeIntegrationTasksResponse, DescribeAlarmReceiverRequest, UpdateInLongAgentResponse, ModifyWorkflowInfoRequest, BatchResumeIntegrationTasksRequest, DescribeFolderListRequest, DeleteTaskAlarmRegularResponse, CreateTaskResponse, BatchStopIntegrationTasksResponse, ModifyDataSourceRequest, DeleteIntegrationNodeResponse, DescribeDataSourceInfoListRequest, UpdateInLongAgentRequest, DescribeIntegrationNodeRequest, SetTaskAlarmNewResponse, DescribeDatasourceResponse, SuspendIntegrationTaskResponse, DeleteInLongAgentRequest, DescribeIntegrationStatisticsAgentStatusResponse, DescribeDataSourceInfoListResponse, DescribeRelatedInstancesResponse, CreateOrUpdateResourceRequest, CheckIntegrationNodeNameExistsRequest, MakeUpTasksNewRequest, DescribeOrganizationalFunctionsResponse, DescribeDataTypesResponse, SubmitCustomFunctionRequest, DescribeDataTypesRequest, CheckIntegrationTaskNameExistsResponse, GetOfflineInstanceListRequest, DescribeStreamTaskLogListResponse, DeleteWorkflowNewResponse, DeleteIntegrationNodeRequest, ModifyIntegrationNodeResponse, DescribeIntegrationStatisticsTaskStatusTrendRequest, UnlockIntegrationTaskRequest, ModifyTaskAlarmRegularResponse, ModifyTaskLinksResponse, BatchMakeUpIntegrationTasksRequest, DeleteOfflineTaskRequest, DescribeInLongAgentVpcListRequest, DescribeDatabaseInfoListResponse, GetIntegrationNodeColumnSchemaResponse, ModifyIntegrationNodeRequest, SubmitWorkflowResponse, DescribeFunctionTypesRequest, BatchDeleteTasksNewRequest, DescribeInstanceLogResponse, DeleteInLongAgentResponse, DeleteFolderRequest, DescribeIntegrationTaskRequest, FreezeTasksByMultiWorkflowResponse, SaveCustomFunctionResponse, CreateTaskRequest, CreateFolderResponse, DescribeRealTimeTaskInstanceNodeInfoRequest, DescribeTaskInstanceReportDetailResponse, CreateHiveTableResponse, ModifyDataSourceResponse, SubmitWorkflowRequest, RerunInstancesResponse, DescribeTaskLockStatusResponse, StartIntegrationTaskResponse, BatchKillIntegrationTaskInstancesRequest, RobAndLockIntegrationTaskRequest, ModifyTaskInfoResponse, ResumeIntegrationTaskRequest, TriggerEventResponse, DescribeResourceManagePathTreesRequest, DescribeTasksByPageResponse, DescribeStandardRuleDetailInfoListRequest, DescribeDataSourceWithoutInfoResponse, RegisterEventResponse, DescribeAlarmEventsRequest, BatchStopTasksNewRequest, CheckAlarmRegularNameExistResponse, SubmitCustomFunctionResponse, DescribeInLongAgentListResponse, DescribeTaskAlarmRegulationsRequest, FreezeTasksResponse, CreateCustomFunctionResponse, ModifyTaskInfoRequest, DescribeTaskDetailRequest, DescribeOfflineTaskTokenRequest, CreateWorkflowResponse, DeleteResourceRequest, RegisterEventListenerRequest, CheckIntegrationNodeNameExistsResponse, RobAndLockIntegrationTaskResponse, DeleteTaskAlarmRegularRequest, DescribeIntegrationStatisticsAgentStatusRequest, DeleteOfflineTaskResponse, GetIntegrationNodeColumnSchemaRequest, ForceSucInstancesResponse, DescribeTaskLockStatusRequest, DescribeTaskReportResponse, CheckAlarmRegularNameExistRequest, GetOfflineDIInstanceListResponse, GetOfflineInstanceListResponse, CreateIntegrationTaskRequest, DescribeRealTimeTaskMetricOverviewRequest, DeleteFolderResponse, DescribeResourceManagePathTreesResponse, StartIntegrationTaskRequest, DescribeTaskDetailResponse, DeleteIntegrationTaskRequest, CreateOrUpdateResourceResponse, ModifyTaskScriptRequest, CreateIntegrationNodeRequest, DescribeTableSchemaInfoRequest, BatchForceSuccessIntegrationTaskInstancesRequest, DescribeRealTimeTaskInstanceNodeInfoResponse, DescribeTaskReportRequest, DescribeRealTimeTaskMetricOverviewResponse, DescribeOfflineTaskTokenResponse, DescribeTableInfoListResponse, GetOfflineDIInstanceListRequest, BatchStartIntegrationTasksRequest, CreateCustomFunctionRequest, DescribeDatasourceRequest, KillInstancesResponse, SetTaskAlarmNewRequest, DescribeTableSchemaInfoResponse, DescribeInstanceListResponse, DescribeTaskReportDetailListRequest, DescribeProjectResponse, StopIntegrationTaskRequest, CreateDataSourceResponse, DescribeFolderWorkflowListResponse, CreateFolderRequest, DescribeIntegrationVersionNodesInfoResponse, DescribeTaskScriptRequest, DescribeAlarmReceiverResponse, BatchModifyOwnersNewResponse, BatchStartIntegrationTasksResponse, DescribeIntegrationVersionNodesInfoRequest, DescribeRealTimeTaskSpeedResponse, DescribeFolderWorkflowListRequest, CheckTaskNameExistResponse, DescribeInLongAgentTaskListResponse, LockIntegrationTaskRequest, BatchStopIntegrationTasksRequest, DescribeInstanceLastLogResponse, CreateHiveTableRequest, BatchKillIntegrationTaskInstancesResponse, CheckIntegrationTaskNameExistsRequest, DescribeDataSourceWithoutInfoRequest, DescribeInLongAgentVpcListResponse, FreezeTasksByMultiWorkflowRequest, BatchStopTasksNewResponse, DeleteIntegrationTaskResponse, DescribeFolderListResponse, DescribeIntegrationStatisticsTaskStatusResponse, DescribeDatabaseInfoListRequest, DescribeInLongTkeClusterListRequest, DescribeIntegrationTaskResponse, ModifyFolderResponse, CreateHiveTableByDDLRequest, RunTaskResponse, StopIntegrationTaskResponse, DescribeDependTasksNewResponse, DescribeRelatedInstancesRequest, DescribeIntegrationStatisticsInstanceTrendRequest, BatchModifyOwnersNewRequest, DryRunDIOfflineTaskResponse, GenHiveTableDDLSqlResponse, BatchCreateIntegrationTaskAlarmsResponse, DescribeIntegrationStatisticsRequest, DescribeInLongAgentTaskListRequest, ModifyTaskNameRequest, ModifyWorkflowInfoResponse, BatchSuspendIntegrationTasksResponse, BatchRerunIntegrationTaskInstancesResponse, DescribeIntegrationTasksRequest, DescribeTasksByPageRequest, BatchMakeUpIntegrationTasksResponse, DescribeTaskInstanceRequest } from "./wedata_models";
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
     * 创建任务告警规则
     */
    CreateTaskAlarmRegular(req: CreateTaskAlarmRegularRequest, cb?: (error: string, rep: CreateTaskAlarmRegularResponse) => void): Promise<CreateTaskAlarmRegularResponse>;
    /**
     * 删除集成任务
     */
    DeleteIntegrationTask(req: DeleteIntegrationTaskRequest, cb?: (error: string, rep: DeleteIntegrationTaskResponse) => void): Promise<DeleteIntegrationTaskResponse>;
    /**
     * 实时任务运行指标概览
     */
    DescribeRealTimeTaskMetricOverview(req: DescribeRealTimeTaskMetricOverviewRequest, cb?: (error: string, rep: DescribeRealTimeTaskMetricOverviewResponse) => void): Promise<DescribeRealTimeTaskMetricOverviewResponse>;
    /**
     * 获取离线任务实例
     */
    GetOfflineInstanceList(req: GetOfflineInstanceListRequest, cb?: (error: string, rep: GetOfflineInstanceListResponse) => void): Promise<GetOfflineInstanceListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
任务批量补录，调度状态任务才可以补录；



     */
    MakeUpTasksNew(req: MakeUpTasksNewRequest, cb?: (error: string, rep: MakeUpTasksNewResponse) => void): Promise<MakeUpTasksNewResponse>;
    /**
     * 获取采集器所在集群的VPC列表
     */
    DescribeInLongAgentVpcList(req: DescribeInLongAgentVpcListRequest, cb?: (error: string, rep: DescribeInLongAgentVpcListResponse) => void): Promise<DescribeInLongAgentVpcListResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量终止操作
     */
    KillInstances(req: KillInstancesRequest, cb?: (error: string, rep: KillInstancesResponse) => void): Promise<KillInstancesResponse>;
    /**
     * 批量终止集成任务实例
     */
    BatchKillIntegrationTaskInstances(req: BatchKillIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchKillIntegrationTaskInstancesResponse) => void): Promise<BatchKillIntegrationTaskInstancesResponse>;
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务具体详情
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 查询集成节点
     */
    DescribeIntegrationNode(req: DescribeIntegrationNodeRequest, cb?: (error: string, rep: DescribeIntegrationNodeResponse) => void): Promise<DescribeIntegrationNodeResponse>;
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
     * 获取采集器列表
     */
    DescribeInLongAgentList(req: DescribeInLongAgentListRequest, cb?: (error: string, rep: DescribeInLongAgentListResponse) => void): Promise<DescribeInLongAgentListResponse>;
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
     * 离线任务实例运行日志列表
     */
    DescribeInstanceLogList(req: DescribeInstanceLogListRequest, cb?: (error: string, rep: DescribeInstanceLogListResponse) => void): Promise<DescribeInstanceLogListResponse>;
    /**
     *  创建用户自定义函数
     */
    CreateCustomFunction(req: CreateCustomFunctionRequest, cb?: (error: string, rep: CreateCustomFunctionResponse) => void): Promise<CreateCustomFunctionResponse>;
    /**
     * 解锁集成任务
     */
    UnlockIntegrationTask(req: UnlockIntegrationTaskRequest, cb?: (error: string, rep: UnlockIntegrationTaskResponse) => void): Promise<UnlockIntegrationTaskResponse>;
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建数据源
     */
    CreateDataSource(req: CreateDataSourceRequest, cb?: (error: string, rep: CreateDataSourceResponse) => void): Promise<CreateDataSourceResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     */
    SetTaskAlarmNew(req: SetTaskAlarmNewRequest, cb?: (error: string, rep: SetTaskAlarmNewResponse) => void): Promise<SetTaskAlarmNewResponse>;
    /**
     * 获取离线任务长连接Token
     */
    DescribeOfflineTaskToken(req?: DescribeOfflineTaskTokenRequest, cb?: (error: string, rep: DescribeOfflineTaskTokenResponse) => void): Promise<DescribeOfflineTaskTokenResponse>;
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
     * 查询全量函数
     */
    DescribeOrganizationalFunctions(req: DescribeOrganizationalFunctionsRequest, cb?: (error: string, rep: DescribeOrganizationalFunctionsResponse) => void): Promise<DescribeOrganizationalFunctionsResponse>;
    /**
     * 删除采集器
     */
    DeleteInLongAgent(req: DeleteInLongAgentRequest, cb?: (error: string, rep: DeleteInLongAgentResponse) => void): Promise<DeleteInLongAgentResponse>;
    /**
     * 查询Inlong manager日志
     */
    TaskLog(req: TaskLogRequest, cb?: (error: string, rep: TaskLogResponse) => void): Promise<TaskLogResponse>;
    /**
     * 调试运行集成任务
     */
    DryRunDIOfflineTask(req: DryRunDIOfflineTaskRequest, cb?: (error: string, rep: DryRunDIOfflineTaskResponse) => void): Promise<DryRunDIOfflineTaskResponse>;
    /**
     * 获取TKE集群列表
     */
    DescribeInLongTkeClusterList(req: DescribeInLongTkeClusterListRequest, cb?: (error: string, rep: DescribeInLongTkeClusterListResponse) => void): Promise<DescribeInLongTkeClusterListResponse>;
    /**
     * 创建集成任务
     */
    CreateIntegrationTask(req: CreateIntegrationTaskRequest, cb?: (error: string, rep: CreateIntegrationTaskResponse) => void): Promise<CreateIntegrationTaskResponse>;
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
     * 更新集成任务
     */
    ModifyIntegrationTask(req: ModifyIntegrationTaskRequest, cb?: (error: string, rep: ModifyIntegrationTaskResponse) => void): Promise<ModifyIntegrationTaskResponse>;
    /**
     * 数据集成大屏任务状态分布统计
     */
    DescribeIntegrationStatisticsTaskStatus(req: DescribeIntegrationStatisticsTaskStatusRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsTaskStatusResponse) => void): Promise<DescribeIntegrationStatisticsTaskStatusResponse>;
    /**
     * 批量运行集成任务
     */
    BatchStartIntegrationTasks(req: BatchStartIntegrationTasksRequest, cb?: (error: string, rep: BatchStartIntegrationTasksResponse) => void): Promise<BatchStartIntegrationTasksResponse>;
    /**
     * 重命名任务（任务编辑）
     */
    ModifyTaskName(req: ModifyTaskNameRequest, cb?: (error: string, rep: ModifyTaskNameResponse) => void): Promise<ModifyTaskNameResponse>;
    /**
     * 离线任务重名校验
     */
    CheckTaskNameExist(req: CheckTaskNameExistRequest, cb?: (error: string, rep: CheckTaskNameExistResponse) => void): Promise<CheckTaskNameExistResponse>;
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
     * 注册采集器
     */
    CreateInLongAgent(req: CreateInLongAgentRequest, cb?: (error: string, rep: CreateInLongAgentResponse) => void): Promise<CreateInLongAgentResponse>;
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
     * 查询函数类型
     */
    DescribeFunctionTypes(req?: DescribeFunctionTypesRequest, cb?: (error: string, rep: DescribeFunctionTypesResponse) => void): Promise<DescribeFunctionTypesResponse>;
    /**
     * 离线任务周期统计明细
     */
    DescribeTaskReportDetailList(req: DescribeTaskReportDetailListRequest, cb?: (error: string, rep: DescribeTaskReportDetailListResponse) => void): Promise<DescribeTaskReportDetailListResponse>;
    /**
     * 删除集成节点
     */
    DeleteIntegrationNode(req: DeleteIntegrationNodeRequest, cb?: (error: string, rep: DeleteIntegrationNodeResponse) => void): Promise<DeleteIntegrationNodeResponse>;
    /**
     * 停止集成任务
     */
    StopIntegrationTask(req: StopIntegrationTaskRequest, cb?: (error: string, rep: StopIntegrationTaskResponse) => void): Promise<StopIntegrationTaskResponse>;
    /**
     * 实时任务同步速度趋势
     */
    DescribeRealTimeTaskSpeed(req: DescribeRealTimeTaskSpeedRequest, cb?: (error: string, rep: DescribeRealTimeTaskSpeedResponse) => void): Promise<DescribeRealTimeTaskSpeedResponse>;
    /**
     * 获取实例列表
     */
    DescribeInstanceList(req: DescribeInstanceListRequest, cb?: (error: string, rep: DescribeInstanceListResponse) => void): Promise<DescribeInstanceListResponse>;
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
     * 批量更新集成任务（暂时仅支持批量更新责任人）
     */
    BatchUpdateIntegrationTasks(req: BatchUpdateIntegrationTasksRequest, cb?: (error: string, rep: BatchUpdateIntegrationTasksResponse) => void): Promise<BatchUpdateIntegrationTasksResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量置成功
     */
    ForceSucInstances(req: ForceSucInstancesRequest, cb?: (error: string, rep: ForceSucInstancesResponse) => void): Promise<ForceSucInstancesResponse>;
    /**
     * 获取数据库信息
     */
    DescribeDatabaseInfoList(req: DescribeDatabaseInfoListRequest, cb?: (error: string, rep: DescribeDatabaseInfoListResponse) => void): Promise<DescribeDatabaseInfoListResponse>;
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改数据源
     */
    ModifyDataSource(req: ModifyDataSourceRequest, cb?: (error: string, rep: ModifyDataSourceResponse) => void): Promise<ModifyDataSourceResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除数据源
     */
    DeleteDataSources(req: DeleteDataSourcesRequest, cb?: (error: string, rep: DeleteDataSourcesResponse) => void): Promise<DeleteDataSourcesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
文件夹更新
     */
    ModifyFolder(req: ModifyFolderRequest, cb?: (error: string, rep: ModifyFolderResponse) => void): Promise<ModifyFolderResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量重跑
     */
    RerunInstances(req: RerunInstancesRequest, cb?: (error: string, rep: RerunInstancesResponse) => void): Promise<RerunInstancesResponse>;
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
     * 获取离线任务实例列表(新)
     */
    GetOfflineDIInstanceList(req: GetOfflineDIInstanceListRequest, cb?: (error: string, rep: GetOfflineDIInstanceListResponse) => void): Promise<GetOfflineDIInstanceListResponse>;
    /**
     * 对集成离线任务执行批量补数据操作
     */
    BatchMakeUpIntegrationTasks(req: BatchMakeUpIntegrationTasksRequest, cb?: (error: string, rep: BatchMakeUpIntegrationTasksResponse) => void): Promise<BatchMakeUpIntegrationTasksResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流
     */
    ModifyWorkflowInfo(req: ModifyWorkflowInfoRequest, cb?: (error: string, rep: ModifyWorkflowInfoResponse) => void): Promise<ModifyWorkflowInfoResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
    ModifyTaskLinks(req: ModifyTaskLinksRequest, cb?: (error: string, rep: ModifyTaskLinksResponse) => void): Promise<ModifyTaskLinksResponse>;
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源列表
     */
    DescribeDataSourceWithoutInfo(req: DescribeDataSourceWithoutInfoRequest, cb?: (error: string, rep: DescribeDataSourceWithoutInfoResponse) => void): Promise<DescribeDataSourceWithoutInfoResponse>;
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
     * 批量重跑集成任务实例
     */
    BatchRerunIntegrationTaskInstances(req: BatchRerunIntegrationTaskInstancesRequest, cb?: (error: string, rep: BatchRerunIntegrationTaskInstancesResponse) => void): Promise<BatchRerunIntegrationTaskInstancesResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建工作流
     */
    CreateWorkflow(req: CreateWorkflowRequest, cb?: (error: string, rep: CreateWorkflowResponse) => void): Promise<CreateWorkflowResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
运行任务
     */
    RunTask(req: RunTaskRequest, cb?: (error: string, rep: RunTaskResponse) => void): Promise<RunTaskResponse>;
    /**
     * 启动集成任务
     */
    StartIntegrationTask(req: StartIntegrationTaskRequest, cb?: (error: string, rep: StartIntegrationTaskResponse) => void): Promise<StartIntegrationTaskResponse>;
    /**
     * 锁定集成任务
     */
    LockIntegrationTask(req: LockIntegrationTaskRequest, cb?: (error: string, rep: LockIntegrationTaskResponse) => void): Promise<LockIntegrationTaskResponse>;
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
     * 查询集成任务列表
     */
    DescribeIntegrationTasks(req: DescribeIntegrationTasksRequest, cb?: (error: string, rep: DescribeIntegrationTasksResponse) => void): Promise<DescribeIntegrationTasksResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
    ModifyTaskScript(req: ModifyTaskScriptRequest, cb?: (error: string, rep: ModifyTaskScriptResponse) => void): Promise<ModifyTaskScriptResponse>;
    /**
     * 获取数据表信息
     */
    DescribeTableInfoList(req: DescribeTableInfoListRequest, cb?: (error: string, rep: DescribeTableInfoListResponse) => void): Promise<DescribeTableInfoListResponse>;
    /**
     * 查询任务实例列表
     */
    DescribeTaskInstances(req: DescribeTaskInstancesRequest, cb?: (error: string, rep: DescribeTaskInstancesResponse) => void): Promise<DescribeTaskInstancesResponse>;
    /**
     * 删除任务告警规则
     */
    DeleteTaskAlarmRegular(req: DeleteTaskAlarmRegularRequest, cb?: (error: string, rep: DeleteTaskAlarmRegularResponse) => void): Promise<DeleteTaskAlarmRegularResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
触发事件
     */
    TriggerEvent(req: TriggerEventRequest, cb?: (error: string, rep: TriggerEventResponse) => void): Promise<TriggerEventResponse>;
    /**
     * 资源管理删除资源
     */
    DeleteResource(req: DeleteResourceRequest, cb?: (error: string, rep: DeleteResourceResponse) => void): Promise<DeleteResourceResponse>;
    /**
     * 按起止日期统计离线任务的所有实例的运行指标总和
     */
    DescribeTaskReport(req: DescribeTaskReportRequest, cb?: (error: string, rep: DescribeTaskReportResponse) => void): Promise<DescribeTaskReportResponse>;
    /**
     * 查询任务告警规则列表
     */
    DescribeTaskAlarmRegulations(req: DescribeTaskAlarmRegulationsRequest, cb?: (error: string, rep: DescribeTaskAlarmRegulationsResponse) => void): Promise<DescribeTaskAlarmRegulationsResponse>;
    /**
     * 查询集成任务版本节点信息
     */
    DescribeIntegrationVersionNodesInfo(req: DescribeIntegrationVersionNodesInfoRequest, cb?: (error: string, rep: DescribeIntegrationVersionNodesInfoResponse) => void): Promise<DescribeIntegrationVersionNodesInfoResponse>;
    /**
     * 修改任务告警规则
     */
    ModifyTaskAlarmRegular(req: ModifyTaskAlarmRegularRequest, cb?: (error: string, rep: ModifyTaskAlarmRegularResponse) => void): Promise<ModifyTaskAlarmRegularResponse>;
    /**
     * 删除用户自定义函数
     */
    DeleteCustomFunction(req: DeleteCustomFunctionRequest, cb?: (error: string, rep: DeleteCustomFunctionResponse) => void): Promise<DeleteCustomFunctionResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹下的工作流
     */
    DescribeFolderWorkflowList(req: DescribeFolderWorkflowListRequest, cb?: (error: string, rep: DescribeFolderWorkflowListResponse) => void): Promise<DescribeFolderWorkflowListResponse>;
    /**
     * 查询集成任务
     */
    DescribeIntegrationTask(req: DescribeIntegrationTaskRequest, cb?: (error: string, rep: DescribeIntegrationTaskResponse) => void): Promise<DescribeIntegrationTaskResponse>;
    /**
     * 数据集成大屏同步条数统计趋势
     */
    DescribeIntegrationStatisticsRecordsTrend(req: DescribeIntegrationStatisticsRecordsTrendRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsRecordsTrendResponse) => void): Promise<DescribeIntegrationStatisticsRecordsTrendResponse>;
    /**
     * 数据集成大屏实例状态统计趋势
     */
    DescribeIntegrationStatisticsInstanceTrend(req: DescribeIntegrationStatisticsInstanceTrendRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsInstanceTrendResponse) => void): Promise<DescribeIntegrationStatisticsInstanceTrendResponse>;
    /**
     * 创建集成节点
     */
    CreateIntegrationNode(req: CreateIntegrationNodeRequest, cb?: (error: string, rep: CreateIntegrationNodeResponse) => void): Promise<CreateIntegrationNodeResponse>;
    /**
     * 批量暂停集成任务
     */
    BatchSuspendIntegrationTasks(req: BatchSuspendIntegrationTasksRequest, cb?: (error: string, rep: BatchSuspendIntegrationTasksResponse) => void): Promise<BatchSuspendIntegrationTasksResponse>;
    /**
     * 日志获取详情页面
     */
    DescribeInstanceLastLog(req: DescribeInstanceLastLogRequest, cb?: (error: string, rep: DescribeInstanceLastLogResponse) => void): Promise<DescribeInstanceLastLogResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
获取实例日志列表
     */
    DescribeInstanceLogs(req: DescribeInstanceLogsRequest, cb?: (error: string, rep: DescribeInstanceLogsResponse) => void): Promise<DescribeInstanceLogsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件
     */
    RegisterEvent(req: RegisterEventRequest, cb?: (error: string, rep: RegisterEventResponse) => void): Promise<RegisterEventResponse>;
    /**
     * 提交自定义函数
     */
    SubmitCustomFunction(req: SubmitCustomFunctionRequest, cb?: (error: string, rep: SubmitCustomFunctionResponse) => void): Promise<SubmitCustomFunctionResponse>;
    /**
     * 批量继续执行集成实时任务
     */
    BatchResumeIntegrationTasks(req: BatchResumeIntegrationTasksRequest, cb?: (error: string, rep: BatchResumeIntegrationTasksResponse) => void): Promise<BatchResumeIntegrationTasksResponse>;
    /**
     * 重启采集器
     */
    RestartInLongAgent(req: RestartInLongAgentRequest, cb?: (error: string, rep: RestartInLongAgentResponse) => void): Promise<RestartInLongAgentResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
    SubmitTask(req: SubmitTaskRequest, cb?: (error: string, rep: SubmitTaskResponse) => void): Promise<SubmitTaskResponse>;
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
     * 离线任务实例统计明细
     */
    DescribeTaskInstanceReportDetail(req: DescribeTaskInstanceReportDetailRequest, cb?: (error: string, rep: DescribeTaskInstanceReportDetailResponse) => void): Promise<DescribeTaskInstanceReportDetailResponse>;
    /**
     * 暂停集成任务
     */
    SuspendIntegrationTask(req: SuspendIntegrationTaskRequest, cb?: (error: string, rep: SuspendIntegrationTaskResponse) => void): Promise<SuspendIntegrationTaskResponse>;
    /**
     * 获取项目信息
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 获取kafka的topic信息
     */
    DescribeKafkaTopicInfo(req: DescribeKafkaTopicInfoRequest, cb?: (error: string, rep: DescribeKafkaTopicInfoResponse) => void): Promise<DescribeKafkaTopicInfoResponse>;
    /**
     * 提取数据集成节点字段Schema
     */
    GetIntegrationNodeColumnSchema(req: GetIntegrationNodeColumnSchemaRequest, cb?: (error: string, rep: GetIntegrationNodeColumnSchemaResponse) => void): Promise<GetIntegrationNodeColumnSchemaResponse>;
    /**
     * 资源管理需要先将资源上传到cos中，然后调用该接口，将cos资源绑定到wedata
     */
    CreateOrUpdateResource(req: CreateOrUpdateResourceRequest, cb?: (error: string, rep: CreateOrUpdateResourceResponse) => void): Promise<CreateOrUpdateResourceResponse>;
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
     * 数据集成大屏概览
     */
    DescribeIntegrationStatistics(req: DescribeIntegrationStatisticsRequest, cb?: (error: string, rep: DescribeIntegrationStatisticsResponse) => void): Promise<DescribeIntegrationStatisticsResponse>;
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量修改任务责任人
     */
    BatchModifyOwnersNew(req: BatchModifyOwnersNewRequest, cb?: (error: string, rep: BatchModifyOwnersNewResponse) => void): Promise<BatchModifyOwnersNewResponse>;
    /**
     * 批量停止集成任务
     */
    BatchStopIntegrationTasks(req: BatchStopIntegrationTasksRequest, cb?: (error: string, rep: BatchStopIntegrationTasksResponse) => void): Promise<BatchStopIntegrationTasksResponse>;
}

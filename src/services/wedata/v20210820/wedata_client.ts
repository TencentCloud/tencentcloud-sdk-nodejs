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
  AlarmInfo,
  TaskLogResponse,
  DescribeIntegrationStatisticsResponse,
  UnlockIntegrationTaskResponse,
  DescribeStreamTaskLogListRequest,
  DescribeIntegrationNodeResponse,
  MakeUpTasksNewResponse,
  LogContentInfo,
  DescribeInstanceLogsRequest,
  DescribeTaskAlarmRegulationsResponse,
  CreateDataSourceRequest,
  IntegrationNodeSchemaMapping,
  DescribeRealTimeTaskSpeedRequest,
  FreezeTasksRequest,
  MakeUpWorkflowNewResponse,
  CreateIntegrationNodeResponse,
  TaskInnerInfo,
  RecordsSpeed,
  CreateWorkflowRequest,
  SubmitTaskRequest,
  DataSourceInfoPage,
  Label,
  TaskExtInfo,
  BatchResumeIntegrationTasksResponse,
  AlarmEventInfo,
  BytesSpeed,
  CheckTaskNameExistRequest,
  DescribeFunctionKindsRequest,
  DescribeFunctionKindsResponse,
  ModifyIntegrationTaskResponse,
  DescribeDataSourceListRequest,
  DescribeIntegrationStatisticsRecordsTrendRequest,
  DescribeInLongTkeClusterListResponse,
  KillInstancesRequest,
  RegisterEventListenerResponse,
  RestartInLongAgentResponse,
  Workflow,
  DescribeStandardRuleDetailInfoListResponse,
  TriggerEventRequest,
  BatchOperateResult,
  DescribeClusterNamespaceListResponse,
  CreateInLongAgentResponse,
  DescribeInstanceLogRequest,
  DescribeKafkaTopicInfoRequest,
  RestartInLongAgentRequest,
  DescribeIntegrationStatisticsTaskStatusTrendResponse,
  SaveCustomFunctionRequest,
  ModifyWorkflowScheduleRequest,
  RegisterEventRequest,
  BatchDeleteIntegrationTasksResponse,
  SearchConditionInstanceNew,
  BatchRerunIntegrationTaskInstancesRequest,
  SearchCondition,
  DescribeDataSourceListResponse,
  ModifyIntegrationTaskRequest,
  BatchSuspendIntegrationTasksRequest,
  TaskCanvasInfo,
  DescribeFolderListData,
  TaskInstanceDetail,
  DeleteCustomFunctionResponse,
  DescribeTaskScriptResponse,
  DescribeTaskInstanceResponse,
  InstanceNodeInfo,
  BatchUpdateIntegrationTasksRequest,
  ResumeIntegrationTaskResponse,
  ModifyTaskNameResponse,
  DescribeTaskReportDetailListResponse,
  BatchResult,
  DescribeIntegrationStatisticsInstanceTrendResponse,
  BatchReturn,
  IntegrationNodeInfo,
  DeleteDataSourcesResponse,
  DescribeTaskInstanceReportDetailRequest,
  ModifyTaskLinksRequest,
  ModifyWorkflowScheduleResponse,
  DeleteDataSourcesRequest,
  ModifyTaskAlarmRegularRequest,
  DescribeOrganizationalFunctionsRequest,
  DescribeKafkaTopicInfoResponse,
  RerunInstancesRequest,
  CommitIntegrationTaskRequest,
  DescribeTableInfoListRequest,
  InLongAgentDetail,
  CommitIntegrationTaskResponse,
  IntegrationTaskInfo,
  SubmitTaskResponse,
  ModifyFolderRequest,
  DescribeAlarmEventsResponse,
  DescribeInstanceLogListResponse,
  RunTaskRequest,
  DescribeDependTasksNewRequest,
  CreateOfflineTaskResponse,
  CreateTaskAlarmRegularRequest,
  OperateResult,
  DescribeInstanceLogListRequest,
  DescribeInLongAgentListRequest,
  ParamInfo,
  DescribeInstanceLogsResponse,
  BatchDeleteIntegrationTasksRequest,
  TaskLogRequest,
  DescribeIntegrationStatisticsTaskStatusRequest,
  BatchDeleteTasksNewResponse,
  IntegrationNodeMapping,
  SuspendIntegrationTaskRequest,
  CreateHiveTableByDDLResponse,
  ModifyTaskScriptResponse,
  DeleteResourceResponse,
  Namespace,
  DescribeTaskInstancesResponse,
  DescribeInstanceListRequest,
  DeleteCustomFunctionRequest,
  TaskInfoDataPage,
  TaskLockStatus,
  DescribeTaskInstancesData,
  DryRunDIOfflineTaskRequest,
  CreateOfflineTaskRequest,
  DescribeIntegrationStatisticsRecordsTrendResponse,
  DescribeFolderWorkflowListData,
  BatchForceSuccessIntegrationTaskInstancesResponse,
  TaskAlarmInfo,
  DescribeClusterNamespaceListRequest,
  AlarmReceiverInfo,
  GeneralTaskParam,
  CreateInLongAgentRequest,
  UserFileDTO,
  CanvasInfo,
  IntegrationNodeDetail,
  ForceSucInstancesRequest,
  GenHiveTableDDLSqlRequest,
  BatchCreateIntegrationTaskAlarmsRequest,
  LockIntegrationTaskResponse,
  DescribeFunctionTypesResponse,
  DeleteWorkflowNewRequest,
  BatchUpdateIntegrationTasksResponse,
  MakeUpWorkflowNewRequest,
  DescribeInstanceLastLogRequest,
  DescribeTaskInstancesRequest,
  TaskInstanceInfo,
  CreateTaskAlarmRegularResponse,
  TableInfo,
  DescribeProjectRequest,
  CreateIntegrationTaskResponse,
  DescribeIntegrationTasksResponse,
  DescribeAlarmReceiverRequest,
  SchedulerTaskInstanceInfo,
  UpdateInLongAgentResponse,
  ModifyWorkflowInfoRequest,
  SubmitWorkflow,
  BatchResumeIntegrationTasksRequest,
  DescribeFolderListRequest,
  DeleteTaskAlarmRegularResponse,
  InstanceReportReadNode,
  Folder,
  CreateTaskResponse,
  BatchStopIntegrationTasksResponse,
  ModifyDataSourceRequest,
  DeleteIntegrationNodeResponse,
  DescribeDataSourceInfoListRequest,
  UpdateInLongAgentRequest,
  DescribeIntegrationNodeRequest,
  SetTaskAlarmNewResponse,
  DescribeDatasourceResponse,
  SuspendIntegrationTaskResponse,
  RecordField,
  DeleteInLongAgentRequest,
  DescribeIntegrationStatisticsAgentStatusResponse,
  DescribeDataSourceInfoListResponse,
  DescribeRelatedInstancesResponse,
  CreateOrUpdateResourceRequest,
  CheckIntegrationNodeNameExistsRequest,
  MakeUpTasksNewRequest,
  DescribeOrganizationalFunctionsResponse,
  DescribeDataTypesResponse,
  SubmitCustomFunctionRequest,
  DescribeDataTypesRequest,
  CheckIntegrationTaskNameExistsResponse,
  GetOfflineInstanceListRequest,
  DescribeStreamTaskLogListResponse,
  DeleteWorkflowNewResponse,
  DeleteIntegrationNodeRequest,
  ModifyIntegrationNodeResponse,
  DescribeIntegrationStatisticsTaskStatusTrendRequest,
  UnlockIntegrationTaskRequest,
  ModifyTaskAlarmRegularResponse,
  ModifyTaskLinksResponse,
  BatchMakeUpIntegrationTasksRequest,
  DeleteOfflineTaskRequest,
  DescribeInLongAgentVpcListRequest,
  DescribeDatabaseInfoListResponse,
  GetIntegrationNodeColumnSchemaResponse,
  CommonContent,
  ModifyIntegrationNodeRequest,
  SubmitWorkflowResponse,
  InstanceLog,
  DescribeFunctionTypesRequest,
  BatchDeleteTasksNewRequest,
  DescribeInstanceLogResponse,
  DeleteInLongAgentResponse,
  DeleteFolderRequest,
  DescribeIntegrationTaskRequest,
  FreezeTasksByMultiWorkflowResponse,
  SaveCustomFunctionResponse,
  CreateTaskRequest,
  SimpleTaskInfo,
  CreateFolderResponse,
  DescribeRealTimeTaskInstanceNodeInfoRequest,
  DescribeTaskInstanceReportDetailResponse,
  CreateHiveTableResponse,
  ModifyDataSourceResponse,
  SubmitWorkflowRequest,
  RerunInstancesResponse,
  DescribeTaskLockStatusResponse,
  StartIntegrationTaskResponse,
  BatchKillIntegrationTaskInstancesRequest,
  DependencyConfig,
  RobAndLockIntegrationTaskRequest,
  ModifyTaskInfoResponse,
  SearchConditionNew,
  ResumeIntegrationTaskRequest,
  TaskInfoData,
  TriggerEventResponse,
  DescribeResourceManagePathTreesRequest,
  DescribeTasksByPageResponse,
  FunctionResource,
  DescribeStandardRuleDetailInfoListRequest,
  DescribeDataSourceWithoutInfoResponse,
  DatasourceBaseInfo,
  RegisterEventResponse,
  RobLockState,
  DescribeAlarmEventsRequest,
  BatchStopTasksNewRequest,
  InstanceReportSummary,
  CheckAlarmRegularNameExistResponse,
  SubmitCustomFunctionResponse,
  SpeedValue,
  FunctionVersion,
  DescribeInLongAgentListResponse,
  DescribeTaskAlarmRegulationsRequest,
  FreezeTasksResponse,
  CreateCustomFunctionResponse,
  ModifyTaskInfoRequest,
  DataSourceInfo,
  DescribeTaskDetailRequest,
  DescribeOfflineTaskTokenRequest,
  CreateWorkflowResponse,
  DeleteResourceRequest,
  RegisterEventListenerRequest,
  CheckIntegrationNodeNameExistsResponse,
  RobAndLockIntegrationTaskResponse,
  DeleteTaskAlarmRegularRequest,
  DescribeIntegrationStatisticsAgentStatusRequest,
  DeleteOfflineTaskResponse,
  TaskScriptContent,
  IntegrationStatisticsTrendResult,
  GetIntegrationNodeColumnSchemaRequest,
  ForceSucInstancesResponse,
  DescribeTaskLockStatusRequest,
  DescribeTaskReportResponse,
  CheckAlarmRegularNameExistRequest,
  GetOfflineDIInstanceListResponse,
  SearchConditionInstance,
  GetOfflineInstanceListResponse,
  CreateIntegrationTaskRequest,
  RealTimeTaskInstanceNodeInfo,
  DescribeRealTimeTaskMetricOverviewRequest,
  DeleteFolderResponse,
  DescribeResourceManagePathTreesResponse,
  StartIntegrationTaskRequest,
  DescribeTaskDetailResponse,
  DeleteIntegrationTaskRequest,
  CreateOrUpdateResourceResponse,
  ModifyTaskScriptRequest,
  CreateIntegrationNodeRequest,
  DescribeTableSchemaInfoRequest,
  InstanceReportWriteNode,
  BatchForceSuccessIntegrationTaskInstancesRequest,
  DescribeRealTimeTaskInstanceNodeInfoResponse,
  DescribeTaskReportRequest,
  DescribeRealTimeTaskMetricOverviewResponse,
  DescribeOfflineTaskTokenResponse,
  DescribeTableInfoListResponse,
  GetOfflineDIInstanceListRequest,
  BatchStartIntegrationTasksRequest,
  CreateCustomFunctionRequest,
  IntegrationNodeSchema,
  DescribeDatasourceRequest,
  KillInstancesResponse,
  SetTaskAlarmNewRequest,
  FunctionTypeOrKind,
  DescribeTableSchemaInfoResponse,
  DescribeInstanceListResponse,
  DescribeTaskReportDetailListRequest,
  DescribeProjectResponse,
  StopIntegrationTaskRequest,
  CreateDataSourceResponse,
  DescribeFolderWorkflowListResponse,
  CreateFolderRequest,
  DescribeIntegrationVersionNodesInfoResponse,
  DescribeTaskScriptRequest,
  SchemaDetail,
  OfflineInstance,
  DescribeAlarmReceiverResponse,
  BatchModifyOwnersNewResponse,
  ResourcePathTree,
  TaskLinkInfo,
  InLongTkeDetail,
  InLongAgentTask,
  BatchStartIntegrationTasksResponse,
  DescribeIntegrationVersionNodesInfoRequest,
  DescribeRealTimeTaskSpeedResponse,
  DescribeFolderWorkflowListRequest,
  CheckTaskNameExistResponse,
  DescribeInLongAgentTaskListResponse,
  LockIntegrationTaskRequest,
  TaskReportDetail,
  BatchStopIntegrationTasksRequest,
  DescribeInstanceLastLogResponse,
  CreateHiveTableRequest,
  BatchKillIntegrationTaskInstancesResponse,
  CheckIntegrationTaskNameExistsRequest,
  DescribeDataSourceWithoutInfoRequest,
  DescribeInLongAgentVpcListResponse,
  FreezeTasksByMultiWorkflowRequest,
  CommonId,
  BatchStopTasksNewResponse,
  Filter,
  DeleteIntegrationTaskResponse,
  InstanceInfo,
  DescribeFolderListResponse,
  DescribeIntegrationStatisticsTaskStatusResponse,
  DescribeDatabaseInfoListRequest,
  DescribeInLongTkeClusterListRequest,
  DescribeIntegrationTaskResponse,
  ModifyFolderResponse,
  CreateHiveTableByDDLRequest,
  RunTaskResponse,
  StopIntegrationTaskResponse,
  DescribeDependTasksNewResponse,
  DescribeRelatedInstancesRequest,
  DescribeIntegrationStatisticsInstanceTrendRequest,
  BatchModifyOwnersNewRequest,
  DryRunDIOfflineTaskResponse,
  GenHiveTableDDLSqlResponse,
  OfflineTaskAddParam,
  LogContent,
  BatchCreateIntegrationTaskAlarmsResponse,
  DescribeIntegrationStatisticsRequest,
  DescribeInLongAgentTaskListRequest,
  ModifyTaskNameRequest,
  ModifyWorkflowInfoResponse,
  OrganizationalFunction,
  OrderField,
  BatchSuspendIntegrationTasksResponse,
  BatchRerunIntegrationTaskInstancesResponse,
  DescribeIntegrationTasksRequest,
  DescribeTasksByPageRequest,
  BatchMakeUpIntegrationTasksResponse,
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
   * 创建任务告警规则
   */
  async CreateTaskAlarmRegular(
    req: CreateTaskAlarmRegularRequest,
    cb?: (error: string, rep: CreateTaskAlarmRegularResponse) => void
  ): Promise<CreateTaskAlarmRegularResponse> {
    return this.request("CreateTaskAlarmRegular", req, cb)
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
   * 实时任务运行指标概览
   */
  async DescribeRealTimeTaskMetricOverview(
    req: DescribeRealTimeTaskMetricOverviewRequest,
    cb?: (error: string, rep: DescribeRealTimeTaskMetricOverviewResponse) => void
  ): Promise<DescribeRealTimeTaskMetricOverviewResponse> {
    return this.request("DescribeRealTimeTaskMetricOverview", req, cb)
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
   * 获取采集器所在集群的VPC列表
   */
  async DescribeInLongAgentVpcList(
    req: DescribeInLongAgentVpcListRequest,
    cb?: (error: string, rep: DescribeInLongAgentVpcListResponse) => void
  ): Promise<DescribeInLongAgentVpcListResponse> {
    return this.request("DescribeInLongAgentVpcList", req, cb)
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
   * 批量终止集成任务实例
   */
  async BatchKillIntegrationTaskInstances(
    req: BatchKillIntegrationTaskInstancesRequest,
    cb?: (error: string, rep: BatchKillIntegrationTaskInstancesResponse) => void
  ): Promise<BatchKillIntegrationTaskInstancesResponse> {
    return this.request("BatchKillIntegrationTaskInstances", req, cb)
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
   * 查询集成节点
   */
  async DescribeIntegrationNode(
    req: DescribeIntegrationNodeRequest,
    cb?: (error: string, rep: DescribeIntegrationNodeResponse) => void
  ): Promise<DescribeIntegrationNodeResponse> {
    return this.request("DescribeIntegrationNode", req, cb)
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
   * 离线任务实例运行日志列表
   */
  async DescribeInstanceLogList(
    req: DescribeInstanceLogListRequest,
    cb?: (error: string, rep: DescribeInstanceLogListResponse) => void
  ): Promise<DescribeInstanceLogListResponse> {
    return this.request("DescribeInstanceLogList", req, cb)
  }

  /**
   *  创建用户自定义函数
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
   * 获取离线任务长连接Token
   */
  async DescribeOfflineTaskToken(
    req?: DescribeOfflineTaskTokenRequest,
    cb?: (error: string, rep: DescribeOfflineTaskTokenResponse) => void
  ): Promise<DescribeOfflineTaskTokenResponse> {
    return this.request("DescribeOfflineTaskToken", req, cb)
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
   * 查询Inlong manager日志
   */
  async TaskLog(
    req: TaskLogRequest,
    cb?: (error: string, rep: TaskLogResponse) => void
  ): Promise<TaskLogResponse> {
    return this.request("TaskLog", req, cb)
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
   * 获取TKE集群列表
   */
  async DescribeInLongTkeClusterList(
    req: DescribeInLongTkeClusterListRequest,
    cb?: (error: string, rep: DescribeInLongTkeClusterListResponse) => void
  ): Promise<DescribeInLongTkeClusterListResponse> {
    return this.request("DescribeInLongTkeClusterList", req, cb)
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
   * 更新集成任务
   */
  async ModifyIntegrationTask(
    req: ModifyIntegrationTaskRequest,
    cb?: (error: string, rep: ModifyIntegrationTaskResponse) => void
  ): Promise<ModifyIntegrationTaskResponse> {
    return this.request("ModifyIntegrationTask", req, cb)
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
   * 重命名任务（任务编辑）
   */
  async ModifyTaskName(
    req: ModifyTaskNameRequest,
    cb?: (error: string, rep: ModifyTaskNameResponse) => void
  ): Promise<ModifyTaskNameResponse> {
    return this.request("ModifyTaskName", req, cb)
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
   * 注册采集器
   */
  async CreateInLongAgent(
    req: CreateInLongAgentRequest,
    cb?: (error: string, rep: CreateInLongAgentResponse) => void
  ): Promise<CreateInLongAgentResponse> {
    return this.request("CreateInLongAgent", req, cb)
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
   * 查询函数类型
   */
  async DescribeFunctionTypes(
    req?: DescribeFunctionTypesRequest,
    cb?: (error: string, rep: DescribeFunctionTypesResponse) => void
  ): Promise<DescribeFunctionTypesResponse> {
    return this.request("DescribeFunctionTypes", req, cb)
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
   * 批量更新集成任务（暂时仅支持批量更新责任人）
   */
  async BatchUpdateIntegrationTasks(
    req: BatchUpdateIntegrationTasksRequest,
    cb?: (error: string, rep: BatchUpdateIntegrationTasksResponse) => void
  ): Promise<BatchUpdateIntegrationTasksResponse> {
    return this.request("BatchUpdateIntegrationTasks", req, cb)
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
   * 获取数据库信息
   */
  async DescribeDatabaseInfoList(
    req: DescribeDatabaseInfoListRequest,
    cb?: (error: string, rep: DescribeDatabaseInfoListResponse) => void
  ): Promise<DescribeDatabaseInfoListResponse> {
    return this.request("DescribeDatabaseInfoList", req, cb)
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
实例批量重跑
     */
  async RerunInstances(
    req: RerunInstancesRequest,
    cb?: (error: string, rep: RerunInstancesResponse) => void
  ): Promise<RerunInstancesResponse> {
    return this.request("RerunInstances", req, cb)
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
   * 获取离线任务实例列表(新)
   */
  async GetOfflineDIInstanceList(
    req: GetOfflineDIInstanceListRequest,
    cb?: (error: string, rep: GetOfflineDIInstanceListResponse) => void
  ): Promise<GetOfflineDIInstanceListResponse> {
    return this.request("GetOfflineDIInstanceList", req, cb)
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
   * 批量重跑集成任务实例
   */
  async BatchRerunIntegrationTaskInstances(
    req: BatchRerunIntegrationTaskInstancesRequest,
    cb?: (error: string, rep: BatchRerunIntegrationTaskInstancesResponse) => void
  ): Promise<BatchRerunIntegrationTaskInstancesResponse> {
    return this.request("BatchRerunIntegrationTaskInstances", req, cb)
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
   * 查询集成任务列表
   */
  async DescribeIntegrationTasks(
    req: DescribeIntegrationTasksRequest,
    cb?: (error: string, rep: DescribeIntegrationTasksResponse) => void
  ): Promise<DescribeIntegrationTasksResponse> {
    return this.request("DescribeIntegrationTasks", req, cb)
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
   * 获取数据表信息
   */
  async DescribeTableInfoList(
    req: DescribeTableInfoListRequest,
    cb?: (error: string, rep: DescribeTableInfoListResponse) => void
  ): Promise<DescribeTableInfoListResponse> {
    return this.request("DescribeTableInfoList", req, cb)
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
   * 修改任务告警规则
   */
  async ModifyTaskAlarmRegular(
    req: ModifyTaskAlarmRegularRequest,
    cb?: (error: string, rep: ModifyTaskAlarmRegularResponse) => void
  ): Promise<ModifyTaskAlarmRegularResponse> {
    return this.request("ModifyTaskAlarmRegular", req, cb)
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
   * 查询集成任务
   */
  async DescribeIntegrationTask(
    req: DescribeIntegrationTaskRequest,
    cb?: (error: string, rep: DescribeIntegrationTaskResponse) => void
  ): Promise<DescribeIntegrationTaskResponse> {
    return this.request("DescribeIntegrationTask", req, cb)
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
   * 数据集成大屏实例状态统计趋势
   */
  async DescribeIntegrationStatisticsInstanceTrend(
    req: DescribeIntegrationStatisticsInstanceTrendRequest,
    cb?: (error: string, rep: DescribeIntegrationStatisticsInstanceTrendResponse) => void
  ): Promise<DescribeIntegrationStatisticsInstanceTrendResponse> {
    return this.request("DescribeIntegrationStatisticsInstanceTrend", req, cb)
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
   * 日志获取详情页面
   */
  async DescribeInstanceLastLog(
    req: DescribeInstanceLastLogRequest,
    cb?: (error: string, rep: DescribeInstanceLastLogResponse) => void
  ): Promise<DescribeInstanceLastLogResponse> {
    return this.request("DescribeInstanceLastLog", req, cb)
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
   * 提交自定义函数
   */
  async SubmitCustomFunction(
    req: SubmitCustomFunctionRequest,
    cb?: (error: string, rep: SubmitCustomFunctionResponse) => void
  ): Promise<SubmitCustomFunctionResponse> {
    return this.request("SubmitCustomFunction", req, cb)
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
   * 离线任务实例统计明细
   */
  async DescribeTaskInstanceReportDetail(
    req: DescribeTaskInstanceReportDetailRequest,
    cb?: (error: string, rep: DescribeTaskInstanceReportDetailResponse) => void
  ): Promise<DescribeTaskInstanceReportDetailResponse> {
    return this.request("DescribeTaskInstanceReportDetail", req, cb)
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
   * 获取kafka的topic信息
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
   * 资源管理需要先将资源上传到cos中，然后调用该接口，将cos资源绑定到wedata
   */
  async CreateOrUpdateResource(
    req: CreateOrUpdateResourceRequest,
    cb?: (error: string, rep: CreateOrUpdateResourceResponse) => void
  ): Promise<CreateOrUpdateResourceResponse> {
    return this.request("CreateOrUpdateResource", req, cb)
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
批量修改任务责任人
     */
  async BatchModifyOwnersNew(
    req: BatchModifyOwnersNewRequest,
    cb?: (error: string, rep: BatchModifyOwnersNewResponse) => void
  ): Promise<BatchModifyOwnersNewResponse> {
    return this.request("BatchModifyOwnersNew", req, cb)
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

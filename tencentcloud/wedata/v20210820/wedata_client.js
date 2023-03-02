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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const CreateRuleTemplateResponse = models.CreateRuleTemplateResponse;
const AlarmInfo = models.AlarmInfo;
const TaskLogResponse = models.TaskLogResponse;
const RuleHistory = models.RuleHistory;
const DescribeIntegrationStatisticsResponse = models.DescribeIntegrationStatisticsResponse;
const UnlockIntegrationTaskResponse = models.UnlockIntegrationTaskResponse;
const DescribeStreamTaskLogListRequest = models.DescribeStreamTaskLogListRequest;
const DescribeIntegrationNodeResponse = models.DescribeIntegrationNodeResponse;
const MakeUpTasksNewResponse = models.MakeUpTasksNewResponse;
const LogContentInfo = models.LogContentInfo;
const DescribeRuleDimStatResponse = models.DescribeRuleDimStatResponse;
const DescribeInstanceLogsRequest = models.DescribeInstanceLogsRequest;
const DescribeTaskAlarmRegulationsResponse = models.DescribeTaskAlarmRegulationsResponse;
const CheckIntegrationTaskNameExistsResponse = models.CheckIntegrationTaskNameExistsResponse;
const CreateDataSourceRequest = models.CreateDataSourceRequest;
const IntegrationNodeSchemaMapping = models.IntegrationNodeSchemaMapping;
const DescribeTrendStatResponse = models.DescribeTrendStatResponse;
const DescribeRealTimeTaskSpeedRequest = models.DescribeRealTimeTaskSpeedRequest;
const DescribeRuleDimStatRequest = models.DescribeRuleDimStatRequest;
const FreezeTasksRequest = models.FreezeTasksRequest;
const DescribeDataObjectsResponse = models.DescribeDataObjectsResponse;
const DescribeRuleTemplatesResponse = models.DescribeRuleTemplatesResponse;
const MakeUpWorkflowNewResponse = models.MakeUpWorkflowNewResponse;
const CreateIntegrationNodeResponse = models.CreateIntegrationNodeResponse;
const TaskInnerInfo = models.TaskInnerInfo;
const SourceObject = models.SourceObject;
const DescribeRulesResponse = models.DescribeRulesResponse;
const RecordsSpeed = models.RecordsSpeed;
const CreateWorkflowRequest = models.CreateWorkflowRequest;
const SubmitTaskRequest = models.SubmitTaskRequest;
const RuleExecResultDetail = models.RuleExecResultDetail;
const DataSourceInfoPage = models.DataSourceInfoPage;
const DescribeRuleGroupExecResultsByPageRequest = models.DescribeRuleGroupExecResultsByPageRequest;
const Label = models.Label;
const TaskExtInfo = models.TaskExtInfo;
const BatchResumeIntegrationTasksResponse = models.BatchResumeIntegrationTasksResponse;
const DescribeRuleExecResultsByPageResponse = models.DescribeRuleExecResultsByPageResponse;
const RuleGroupExecResult = models.RuleGroupExecResult;
const AlarmEventInfo = models.AlarmEventInfo;
const BytesSpeed = models.BytesSpeed;
const CheckTaskNameExistRequest = models.CheckTaskNameExistRequest;
const ThresholdValue = models.ThresholdValue;
const DescribeFunctionKindsRequest = models.DescribeFunctionKindsRequest;
const DescribeFunctionKindsResponse = models.DescribeFunctionKindsResponse;
const DescribeTemplateDimCountRequest = models.DescribeTemplateDimCountRequest;
const ModifyIntegrationTaskResponse = models.ModifyIntegrationTaskResponse;
const DescribeDataSourceListRequest = models.DescribeDataSourceListRequest;
const DescribeIntegrationStatisticsRecordsTrendRequest = models.DescribeIntegrationStatisticsRecordsTrendRequest;
const DescribeInLongTkeClusterListResponse = models.DescribeInLongTkeClusterListResponse;
const KillInstancesRequest = models.KillInstancesRequest;
const DescribeDataCheckStatRequest = models.DescribeDataCheckStatRequest;
const RegisterEventListenerResponse = models.RegisterEventListenerResponse;
const RestartInLongAgentResponse = models.RestartInLongAgentResponse;
const Workflow = models.Workflow;
const DescribeRuleExecResultsRequest = models.DescribeRuleExecResultsRequest;
const DescribeStandardRuleDetailInfoListResponse = models.DescribeStandardRuleDetailInfoListResponse;
const RunTaskResponse = models.RunTaskResponse;
const BatchStopTasksNewRequest = models.BatchStopTasksNewRequest;
const TriggerEventRequest = models.TriggerEventRequest;
const ResourcePathTree = models.ResourcePathTree;
const DescribeClusterNamespaceListResponse = models.DescribeClusterNamespaceListResponse;
const CreateInLongAgentResponse = models.CreateInLongAgentResponse;
const TaskLinkInfo = models.TaskLinkInfo;
const DescribeInstanceLogRequest = models.DescribeInstanceLogRequest;
const DescribeKafkaTopicInfoRequest = models.DescribeKafkaTopicInfoRequest;
const DescribeRuleGroupSubscriptionResponse = models.DescribeRuleGroupSubscriptionResponse;
const DescribeIntegrationStatisticsTaskStatusTrendResponse = models.DescribeIntegrationStatisticsTaskStatusTrendResponse;
const DescribeDataBasesResponse = models.DescribeDataBasesResponse;
const SaveCustomFunctionRequest = models.SaveCustomFunctionRequest;
const InLongTkeDetail = models.InLongTkeDetail;
const RuleGroupExecStrategy = models.RuleGroupExecStrategy;
const ModifyWorkflowScheduleRequest = models.ModifyWorkflowScheduleRequest;
const DescribeRuleDataSourcesResponse = models.DescribeRuleDataSourcesResponse;
const RegisterEventRequest = models.RegisterEventRequest;
const RuleTemplate = models.RuleTemplate;
const DescribeRuleGroupsByPageRequest = models.DescribeRuleGroupsByPageRequest;
const DescribeDataBasesRequest = models.DescribeDataBasesRequest;
const BatchDeleteIntegrationTasksResponse = models.BatchDeleteIntegrationTasksResponse;
const SearchConditionInstanceNew = models.SearchConditionInstanceNew;
const BatchRerunIntegrationTaskInstancesRequest = models.BatchRerunIntegrationTaskInstancesRequest;
const RuleTemplateHistoryPage = models.RuleTemplateHistoryPage;
const DescribeDataObjectsRequest = models.DescribeDataObjectsRequest;
const SearchCondition = models.SearchCondition;
const Rule = models.Rule;
const ModifyRuleGroupSubscriptionRequest = models.ModifyRuleGroupSubscriptionRequest;
const DescribeDataSourceListResponse = models.DescribeDataSourceListResponse;
const ModifyIntegrationTaskRequest = models.ModifyIntegrationTaskRequest;
const ExportTaskInfo = models.ExportTaskInfo;
const BatchSuspendIntegrationTasksRequest = models.BatchSuspendIntegrationTasksRequest;
const TaskCanvasInfo = models.TaskCanvasInfo;
const DescribeFolderListData = models.DescribeFolderListData;
const TaskInstanceDetail = models.TaskInstanceDetail;
const UserFileDTO = models.UserFileDTO;
const DeleteCustomFunctionResponse = models.DeleteCustomFunctionResponse;
const InstanceNodeInfo = models.InstanceNodeInfo;
const DimensionScoreInfo = models.DimensionScoreInfo;
const DescribeTaskScriptResponse = models.DescribeTaskScriptResponse;
const RuleExecDateStat = models.RuleExecDateStat;
const DescribeTaskInstanceResponse = models.DescribeTaskInstanceResponse;
const DescribeProdTasksRequest = models.DescribeProdTasksRequest;
const CheckDuplicateTemplateNameRequest = models.CheckDuplicateTemplateNameRequest;
const BatchUpdateIntegrationTasksRequest = models.BatchUpdateIntegrationTasksRequest;
const CreateResourcePathRequest = models.CreateResourcePathRequest;
const ResumeIntegrationTaskResponse = models.ResumeIntegrationTaskResponse;
const ModifyTaskNameResponse = models.ModifyTaskNameResponse;
const DescribeTaskReportDetailListResponse = models.DescribeTaskReportDetailListResponse;
const BatchResult = models.BatchResult;
const DescribeRuleExecHistoryRequest = models.DescribeRuleExecHistoryRequest;
const DescribeIntegrationStatisticsInstanceTrendResponse = models.DescribeIntegrationStatisticsInstanceTrendResponse;
const DescribeInstanceLogListRequest = models.DescribeInstanceLogListRequest;
const RunnerRuleExecResult = models.RunnerRuleExecResult;
const IntegrationNodeInfo = models.IntegrationNodeInfo;
const DescribeRuleGroupResponse = models.DescribeRuleGroupResponse;
const DeleteDataSourcesResponse = models.DeleteDataSourcesResponse;
const DescribeTaskInstanceReportDetailRequest = models.DescribeTaskInstanceReportDetailRequest;
const ModifyTaskLinksRequest = models.ModifyTaskLinksRequest;
const ModifyWorkflowScheduleResponse = models.ModifyWorkflowScheduleResponse;
const DeleteDataSourcesRequest = models.DeleteDataSourcesRequest;
const ModifyTaskAlarmRegularRequest = models.ModifyTaskAlarmRegularRequest;
const DescribeOrganizationalFunctionsRequest = models.DescribeOrganizationalFunctionsRequest;
const DescribeRuleTemplateResponse = models.DescribeRuleTemplateResponse;
const DescribeKafkaTopicInfoResponse = models.DescribeKafkaTopicInfoResponse;
const RerunInstancesRequest = models.RerunInstancesRequest;
const DescribeTemplateHistoryRequest = models.DescribeTemplateHistoryRequest;
const CommitIntegrationTaskRequest = models.CommitIntegrationTaskRequest;
const DescribeTableInfoListRequest = models.DescribeTableInfoListRequest;
const DescribeQualityScoreRequest = models.DescribeQualityScoreRequest;
const CommitIntegrationTaskResponse = models.CommitIntegrationTaskResponse;
const IntegrationTaskInfo = models.IntegrationTaskInfo;
const SubmitTaskResponse = models.SubmitTaskResponse;
const ModifyFolderRequest = models.ModifyFolderRequest;
const DescribeAlarmEventsResponse = models.DescribeAlarmEventsResponse;
const DescribeInstanceLogListResponse = models.DescribeInstanceLogListResponse;
const RuleGroup = models.RuleGroup;
const RuleConfig = models.RuleConfig;
const RunTaskRequest = models.RunTaskRequest;
const DescribeDependTasksNewRequest = models.DescribeDependTasksNewRequest;
const CreateOfflineTaskResponse = models.CreateOfflineTaskResponse;
const CreateTaskAlarmRegularRequest = models.CreateTaskAlarmRegularRequest;
const ModifyRuleRequest = models.ModifyRuleRequest;
const BatchReturn = models.BatchReturn;
const DescribeInLongAgentListRequest = models.DescribeInLongAgentListRequest;
const DescribeRuleExecLogResponse = models.DescribeRuleExecLogResponse;
const ParamInfo = models.ParamInfo;
const DescribeInstanceLogsResponse = models.DescribeInstanceLogsResponse;
const BatchDeleteIntegrationTasksRequest = models.BatchDeleteIntegrationTasksRequest;
const TaskLogRequest = models.TaskLogRequest;
const DescribeIntegrationStatisticsTaskStatusRequest = models.DescribeIntegrationStatisticsTaskStatusRequest;
const BatchDeleteTasksNewResponse = models.BatchDeleteTasksNewResponse;
const IntegrationNodeMapping = models.IntegrationNodeMapping;
const ModifyRuleGroupSubscriptionResponse = models.ModifyRuleGroupSubscriptionResponse;
const SuspendIntegrationTaskRequest = models.SuspendIntegrationTaskRequest;
const CreateHiveTableByDDLResponse = models.CreateHiveTableByDDLResponse;
const DescribeExecStrategyResponse = models.DescribeExecStrategyResponse;
const ModifyTaskScriptResponse = models.ModifyTaskScriptResponse;
const DeleteResourceResponse = models.DeleteResourceResponse;
const ModifyRuleResponse = models.ModifyRuleResponse;
const Namespace = models.Namespace;
const RuleDimStat = models.RuleDimStat;
const DescribeTaskInstancesResponse = models.DescribeTaskInstancesResponse;
const DescribeInstanceListRequest = models.DescribeInstanceListRequest;
const DeleteCustomFunctionRequest = models.DeleteCustomFunctionRequest;
const TaskInfoDataPage = models.TaskInfoDataPage;
const TaskLockStatus = models.TaskLockStatus;
const BatchCreateIntegrationTaskAlarmsRequest = models.BatchCreateIntegrationTaskAlarmsRequest;
const DescribeTaskInstancesData = models.DescribeTaskInstancesData;
const DryRunDIOfflineTaskRequest = models.DryRunDIOfflineTaskRequest;
const CreateOfflineTaskRequest = models.CreateOfflineTaskRequest;
const DescribeIntegrationStatisticsRecordsTrendResponse = models.DescribeIntegrationStatisticsRecordsTrendResponse;
const DescribeFolderWorkflowListData = models.DescribeFolderWorkflowListData;
const TableConfig = models.TableConfig;
const TableScoreStatisticsInfo = models.TableScoreStatisticsInfo;
const BatchForceSuccessIntegrationTaskInstancesResponse = models.BatchForceSuccessIntegrationTaskInstancesResponse;
const TaskAlarmInfo = models.TaskAlarmInfo;
const DescribeClusterNamespaceListRequest = models.DescribeClusterNamespaceListRequest;
const AlarmReceiverInfo = models.AlarmReceiverInfo;
const GeneralTaskParam = models.GeneralTaskParam;
const CreateInLongAgentRequest = models.CreateInLongAgentRequest;
const ModifyRuleTemplateRequest = models.ModifyRuleTemplateRequest;
const DescribeRuleExecStatResponse = models.DescribeRuleExecStatResponse;
const DimensionScore = models.DimensionScore;
const CanvasInfo = models.CanvasInfo;
const DescribeTableQualityDetailsRequest = models.DescribeTableQualityDetailsRequest;
const IntegrationNodeDetail = models.IntegrationNodeDetail;
const ForceSucInstancesRequest = models.ForceSucInstancesRequest;
const DescribeRuleExecExportResultRequest = models.DescribeRuleExecExportResultRequest;
const GenHiveTableDDLSqlRequest = models.GenHiveTableDDLSqlRequest;
const DescribeRuleExecResultsByPageRequest = models.DescribeRuleExecResultsByPageRequest;
const QualityScore = models.QualityScore;
const LockIntegrationTaskResponse = models.LockIntegrationTaskResponse;
const DescribeFunctionTypesResponse = models.DescribeFunctionTypesResponse;
const DeleteWorkflowNewRequest = models.DeleteWorkflowNewRequest;
const BatchUpdateIntegrationTasksResponse = models.BatchUpdateIntegrationTasksResponse;
const CheckDuplicateRuleNameRequest = models.CheckDuplicateRuleNameRequest;
const MakeUpWorkflowNewRequest = models.MakeUpWorkflowNewRequest;
const DescribeInstanceLastLogRequest = models.DescribeInstanceLastLogRequest;
const TableQualityDetailPage = models.TableQualityDetailPage;
const DescribeTaskInstancesRequest = models.DescribeTaskInstancesRequest;
const TaskInstanceInfo = models.TaskInstanceInfo;
const CreateTaskAlarmRegularResponse = models.CreateTaskAlarmRegularResponse;
const DeleteRuleTemplateRequest = models.DeleteRuleTemplateRequest;
const TableInfo = models.TableInfo;
const DescribeProjectRequest = models.DescribeProjectRequest;
const CreateIntegrationTaskResponse = models.CreateIntegrationTaskResponse;
const DescribeIntegrationTasksResponse = models.DescribeIntegrationTasksResponse;
const DescribeAlarmReceiverRequest = models.DescribeAlarmReceiverRequest;
const SchedulerTaskInstanceInfo = models.SchedulerTaskInstanceInfo;
const UpdateInLongAgentResponse = models.UpdateInLongAgentResponse;
const ModifyWorkflowInfoRequest = models.ModifyWorkflowInfoRequest;
const SubmitWorkflow = models.SubmitWorkflow;
const BatchResumeIntegrationTasksRequest = models.BatchResumeIntegrationTasksRequest;
const DescribeFolderListRequest = models.DescribeFolderListRequest;
const DeleteTaskAlarmRegularResponse = models.DeleteTaskAlarmRegularResponse;
const DescribeRuleGroupSubscriptionRequest = models.DescribeRuleGroupSubscriptionRequest;
const DescribeInLongAgentListResponse = models.DescribeInLongAgentListResponse;
const Folder = models.Folder;
const CreateTaskResponse = models.CreateTaskResponse;
const TableQualityDetail = models.TableQualityDetail;
const BatchStopIntegrationTasksResponse = models.BatchStopIntegrationTasksResponse;
const InLongAgentDetail = models.InLongAgentDetail;
const ModifyDataSourceRequest = models.ModifyDataSourceRequest;
const DeleteIntegrationNodeResponse = models.DeleteIntegrationNodeResponse;
const CommitRuleGroupExecResultRequest = models.CommitRuleGroupExecResultRequest;
const DescribeDataSourceInfoListRequest = models.DescribeDataSourceInfoListRequest;
const UpdateInLongAgentRequest = models.UpdateInLongAgentRequest;
const DescribeRuleGroupExecResultsByPageWithoutAuthResponse = models.DescribeRuleGroupExecResultsByPageWithoutAuthResponse;
const DescribeIntegrationNodeRequest = models.DescribeIntegrationNodeRequest;
const SetTaskAlarmNewResponse = models.SetTaskAlarmNewResponse;
const DescribeDatasourceResponse = models.DescribeDatasourceResponse;
const RuleExecConfig = models.RuleExecConfig;
const SuspendIntegrationTaskResponse = models.SuspendIntegrationTaskResponse;
const RecordField = models.RecordField;
const DescribeQualityScoreResponse = models.DescribeQualityScoreResponse;
const DescribeRulesByPageResponse = models.DescribeRulesByPageResponse;
const CvmAgentStatus = models.CvmAgentStatus;
const DescribeRuleTablesByPageRequest = models.DescribeRuleTablesByPageRequest;
const TopTableStatItem = models.TopTableStatItem;
const DeleteRuleResponse = models.DeleteRuleResponse;
const DescribeDataSourceInfoListResponse = models.DescribeDataSourceInfoListResponse;
const DescribeRelatedInstancesResponse = models.DescribeRelatedInstancesResponse;
const CheckIntegrationTaskNameExistsRequest = models.CheckIntegrationTaskNameExistsRequest;
const CheckIntegrationNodeNameExistsRequest = models.CheckIntegrationNodeNameExistsRequest;
const MakeUpTasksNewRequest = models.MakeUpTasksNewRequest;
const DescribeDimensionScoreResponse = models.DescribeDimensionScoreResponse;
const SubmitWorkflowResponse = models.SubmitWorkflowResponse;
const DescribeOrganizationalFunctionsResponse = models.DescribeOrganizationalFunctionsResponse;
const DescribeDataTypesResponse = models.DescribeDataTypesResponse;
const SubmitCustomFunctionRequest = models.SubmitCustomFunctionRequest;
const DescribeDataTypesRequest = models.DescribeDataTypesRequest;
const CheckDuplicateRuleNameResponse = models.CheckDuplicateRuleNameResponse;
const DeleteRuleRequest = models.DeleteRuleRequest;
const RealTimeTaskInstanceNodeInfo = models.RealTimeTaskInstanceNodeInfo;
const GetOfflineInstanceListRequest = models.GetOfflineInstanceListRequest;
const DescribeStreamTaskLogListResponse = models.DescribeStreamTaskLogListResponse;
const DeleteWorkflowNewResponse = models.DeleteWorkflowNewResponse;
const DescribeRuleGroupExecResultsByPageResponse = models.DescribeRuleGroupExecResultsByPageResponse;
const DescribeRuleGroupExecResultsByPageWithoutAuthRequest = models.DescribeRuleGroupExecResultsByPageWithoutAuthRequest;
const OfflineInstance = models.OfflineInstance;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const RulePage = models.RulePage;
const DeleteIntegrationNodeRequest = models.DeleteIntegrationNodeRequest;
const ModifyIntegrationNodeResponse = models.ModifyIntegrationNodeResponse;
const DescribeIntegrationStatisticsTaskStatusTrendRequest = models.DescribeIntegrationStatisticsTaskStatusTrendRequest;
const DescribeRuleHistoryByPageResponse = models.DescribeRuleHistoryByPageResponse;
const UnlockIntegrationTaskRequest = models.UnlockIntegrationTaskRequest;
const ModifyDimensionWeightResponse = models.ModifyDimensionWeightResponse;
const ModifyTaskAlarmRegularResponse = models.ModifyTaskAlarmRegularResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const ModifyTaskLinksResponse = models.ModifyTaskLinksResponse;
const BatchMakeUpIntegrationTasksRequest = models.BatchMakeUpIntegrationTasksRequest;
const DeleteOfflineTaskRequest = models.DeleteOfflineTaskRequest;
const WeightInfo = models.WeightInfo;
const DescribeInLongAgentVpcListRequest = models.DescribeInLongAgentVpcListRequest;
const RuleExecExportResult = models.RuleExecExportResult;
const DescribeDatabaseInfoListResponse = models.DescribeDatabaseInfoListResponse;
const CommonContent = models.CommonContent;
const DescribeTableScoreTrendResponse = models.DescribeTableScoreTrendResponse;
const ModifyIntegrationNodeRequest = models.ModifyIntegrationNodeRequest;
const ModifyMonitorStatusResponse = models.ModifyMonitorStatusResponse;
const DescribeRuleTemplatesByPageResponse = models.DescribeRuleTemplatesByPageResponse;
const InstanceLog = models.InstanceLog;
const DescribeTemplateDimCountResponse = models.DescribeTemplateDimCountResponse;
const DescribeFunctionTypesRequest = models.DescribeFunctionTypesRequest;
const RestartInLongAgentRequest = models.RestartInLongAgentRequest;
const BatchDeleteTasksNewRequest = models.BatchDeleteTasksNewRequest;
const DimensionCount = models.DimensionCount;
const DescribeInstanceLogResponse = models.DescribeInstanceLogResponse;
const DeleteInLongAgentResponse = models.DeleteInLongAgentResponse;
const ModifyMonitorStatusRequest = models.ModifyMonitorStatusRequest;
const DeleteFolderRequest = models.DeleteFolderRequest;
const DescribeIntegrationTaskRequest = models.DescribeIntegrationTaskRequest;
const DescribeRulesByPageRequest = models.DescribeRulesByPageRequest;
const DescribeTopTableStatResponse = models.DescribeTopTableStatResponse;
const ProdSchedulerTask = models.ProdSchedulerTask;
const SourceFieldInfo = models.SourceFieldInfo;
const FreezeTasksByMultiWorkflowResponse = models.FreezeTasksByMultiWorkflowResponse;
const SaveCustomFunctionResponse = models.SaveCustomFunctionResponse;
const OperateResult = models.OperateResult;
const CreateTaskRequest = models.CreateTaskRequest;
const ModifyDimensionWeightRequest = models.ModifyDimensionWeightRequest;
const SimpleTaskInfo = models.SimpleTaskInfo;
const CreateFolderResponse = models.CreateFolderResponse;
const DescribeRealTimeTaskInstanceNodeInfoRequest = models.DescribeRealTimeTaskInstanceNodeInfoRequest;
const DescribeTaskInstanceReportDetailResponse = models.DescribeTaskInstanceReportDetailResponse;
const CreateHiveTableResponse = models.CreateHiveTableResponse;
const RuleTemplatePage = models.RuleTemplatePage;
const ModifyDataSourceResponse = models.ModifyDataSourceResponse;
const DescribeMonitorsByPageRequest = models.DescribeMonitorsByPageRequest;
const SubmitWorkflowRequest = models.SubmitWorkflowRequest;
const RerunInstancesResponse = models.RerunInstancesResponse;
const DescribeTaskLockStatusResponse = models.DescribeTaskLockStatusResponse;
const StartIntegrationTaskResponse = models.StartIntegrationTaskResponse;
const BatchKillIntegrationTaskInstancesRequest = models.BatchKillIntegrationTaskInstancesRequest;
const InstanceReportWriteNode = models.InstanceReportWriteNode;
const DependencyConfig = models.DependencyConfig;
const RobAndLockIntegrationTaskRequest = models.RobAndLockIntegrationTaskRequest;
const RuleGroupMonitorPage = models.RuleGroupMonitorPage;
const CommitExportTaskResponse = models.CommitExportTaskResponse;
const ModifyTaskInfoResponse = models.ModifyTaskInfoResponse;
const DataCheckStat = models.DataCheckStat;
const CreateRuleRequest = models.CreateRuleRequest;
const CommitRuleGroupTaskRequest = models.CommitRuleGroupTaskRequest;
const DescribeTemplateHistoryResponse = models.DescribeTemplateHistoryResponse;
const DescribeRuleExecResultsResponse = models.DescribeRuleExecResultsResponse;
const QualityScoreTrend = models.QualityScoreTrend;
const InstanceInfo = models.InstanceInfo;
const TaskInfoData = models.TaskInfoData;
const TriggerEventResponse = models.TriggerEventResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DescribeRuleDataSourcesRequest = models.DescribeRuleDataSourcesRequest;
const RuleExecLog = models.RuleExecLog;
const DescribeResourceManagePathTreesRequest = models.DescribeResourceManagePathTreesRequest;
const DescribeTasksByPageResponse = models.DescribeTasksByPageResponse;
const FunctionResource = models.FunctionResource;
const DescribeTableQualityDetailsResponse = models.DescribeTableQualityDetailsResponse;
const DescribeStandardRuleDetailInfoListRequest = models.DescribeStandardRuleDetailInfoListRequest;
const DescribeDataSourceWithoutInfoResponse = models.DescribeDataSourceWithoutInfoResponse;
const RuleGroupSchedulerInfo = models.RuleGroupSchedulerInfo;
const DatasourceBaseInfo = models.DatasourceBaseInfo;
const DescribeRuleTemplatesRequest = models.DescribeRuleTemplatesRequest;
const RegisterEventResponse = models.RegisterEventResponse;
const SubscribeReceiver = models.SubscribeReceiver;
const DescribeQualityScoreTrendRequest = models.DescribeQualityScoreTrendRequest;
const RobLockState = models.RobLockState;
const DescribeAlarmEventsRequest = models.DescribeAlarmEventsRequest;
const CompareResult = models.CompareResult;
const InstanceReportSummary = models.InstanceReportSummary;
const CheckAlarmRegularNameExistResponse = models.CheckAlarmRegularNameExistResponse;
const SubmitCustomFunctionResponse = models.SubmitCustomFunctionResponse;
const DescribeRuleTablesByPageResponse = models.DescribeRuleTablesByPageResponse;
const SpeedValue = models.SpeedValue;
const FunctionVersion = models.FunctionVersion;
const InstanceReportReadNode = models.InstanceReportReadNode;
const DescribeTaskAlarmRegulationsRequest = models.DescribeTaskAlarmRegulationsRequest;
const FreezeTasksResponse = models.FreezeTasksResponse;
const CreateCustomFunctionResponse = models.CreateCustomFunctionResponse;
const ModifyTaskInfoRequest = models.ModifyTaskInfoRequest;
const DataSourceInfo = models.DataSourceInfo;
const CompareRuleItem = models.CompareRuleItem;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const DescribeOfflineTaskTokenRequest = models.DescribeOfflineTaskTokenRequest;
const CreateWorkflowResponse = models.CreateWorkflowResponse;
const DescribeRuleExecDetailRequest = models.DescribeRuleExecDetailRequest;
const DeleteResourceRequest = models.DeleteResourceRequest;
const RuleGroupSubscribe = models.RuleGroupSubscribe;
const RegisterEventListenerRequest = models.RegisterEventListenerRequest;
const CheckIntegrationNodeNameExistsResponse = models.CheckIntegrationNodeNameExistsResponse;
const RobAndLockIntegrationTaskResponse = models.RobAndLockIntegrationTaskResponse;
const DeleteTaskAlarmRegularRequest = models.DeleteTaskAlarmRegularRequest;
const CompareRule = models.CompareRule;
const DescribeIntegrationStatisticsAgentStatusRequest = models.DescribeIntegrationStatisticsAgentStatusRequest;
const SubscribeWebHook = models.SubscribeWebHook;
const DeleteOfflineTaskResponse = models.DeleteOfflineTaskResponse;
const TaskScriptContent = models.TaskScriptContent;
const IntegrationStatisticsTrendResult = models.IntegrationStatisticsTrendResult;
const GetIntegrationNodeColumnSchemaRequest = models.GetIntegrationNodeColumnSchemaRequest;
const ForceSucInstancesResponse = models.ForceSucInstancesResponse;
const DescribeTaskLockStatusRequest = models.DescribeTaskLockStatusRequest;
const DescribeTaskReportResponse = models.DescribeTaskReportResponse;
const DescribeRuleGroupTableRequest = models.DescribeRuleGroupTableRequest;
const CheckAlarmRegularNameExistRequest = models.CheckAlarmRegularNameExistRequest;
const GetOfflineDIInstanceListResponse = models.GetOfflineDIInstanceListResponse;
const SearchConditionInstance = models.SearchConditionInstance;
const RuleExecResult = models.RuleExecResult;
const GetOfflineInstanceListResponse = models.GetOfflineInstanceListResponse;
const CreateIntegrationTaskRequest = models.CreateIntegrationTaskRequest;
const FieldConfig = models.FieldConfig;
const DescribeRealTimeTaskMetricOverviewRequest = models.DescribeRealTimeTaskMetricOverviewRequest;
const CreateResourcePathResponse = models.CreateResourcePathResponse;
const DeleteFolderResponse = models.DeleteFolderResponse;
const DescribeResourceManagePathTreesResponse = models.DescribeResourceManagePathTreesResponse;
const RuleGroupMonitor = models.RuleGroupMonitor;
const StartIntegrationTaskRequest = models.StartIntegrationTaskRequest;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const RuleGroupTableInnerInfo = models.RuleGroupTableInnerInfo;
const DeleteIntegrationTaskRequest = models.DeleteIntegrationTaskRequest;
const CompareResultItem = models.CompareResultItem;
const CreateOrUpdateResourceResponse = models.CreateOrUpdateResourceResponse;
const ModifyTaskScriptRequest = models.ModifyTaskScriptRequest;
const CreateIntegrationNodeRequest = models.CreateIntegrationNodeRequest;
const DescribeTableSchemaInfoRequest = models.DescribeTableSchemaInfoRequest;
const DescribeTableScoreTrendRequest = models.DescribeTableScoreTrendRequest;
const RuleExecResultPage = models.RuleExecResultPage;
const ModifyExecStrategyRequest = models.ModifyExecStrategyRequest;
const BatchForceSuccessIntegrationTaskInstancesRequest = models.BatchForceSuccessIntegrationTaskInstancesRequest;
const DescribeRealTimeTaskInstanceNodeInfoResponse = models.DescribeRealTimeTaskInstanceNodeInfoResponse;
const RuleHistoryPage = models.RuleHistoryPage;
const DescribeProdTasksResponse = models.DescribeProdTasksResponse;
const DescribeTaskReportRequest = models.DescribeTaskReportRequest;
const CommitRuleGroupTaskResponse = models.CommitRuleGroupTaskResponse;
const DescribeRealTimeTaskMetricOverviewResponse = models.DescribeRealTimeTaskMetricOverviewResponse;
const DescribeOfflineTaskTokenResponse = models.DescribeOfflineTaskTokenResponse;
const DescribeTableInfoListResponse = models.DescribeTableInfoListResponse;
const GetOfflineDIInstanceListRequest = models.GetOfflineDIInstanceListRequest;
const ModifyExecStrategyResponse = models.ModifyExecStrategyResponse;
const BatchStartIntegrationTasksRequest = models.BatchStartIntegrationTasksRequest;
const CreateCustomFunctionRequest = models.CreateCustomFunctionRequest;
const IntegrationNodeSchema = models.IntegrationNodeSchema;
const DescribeDatasourceRequest = models.DescribeDatasourceRequest;
const RuleExecStat = models.RuleExecStat;
const KillInstancesResponse = models.KillInstancesResponse;
const SetTaskAlarmNewRequest = models.SetTaskAlarmNewRequest;
const FunctionTypeOrKind = models.FunctionTypeOrKind;
const DescribeTableSchemaInfoResponse = models.DescribeTableSchemaInfoResponse;
const DescribeInstanceListResponse = models.DescribeInstanceListResponse;
const DescribeTaskReportDetailListRequest = models.DescribeTaskReportDetailListRequest;
const DescribeProjectResponse = models.DescribeProjectResponse;
const StopIntegrationTaskRequest = models.StopIntegrationTaskRequest;
const CreateDataSourceResponse = models.CreateDataSourceResponse;
const DescribeFolderWorkflowListResponse = models.DescribeFolderWorkflowListResponse;
const CreateFolderRequest = models.CreateFolderRequest;
const DescribeIntegrationVersionNodesInfoResponse = models.DescribeIntegrationVersionNodesInfoResponse;
const DescribeRulesRequest = models.DescribeRulesRequest;
const DescribeRuleResponse = models.DescribeRuleResponse;
const DescribeTaskScriptRequest = models.DescribeTaskScriptRequest;
const DescribeRuleHistoryByPageRequest = models.DescribeRuleHistoryByPageRequest;
const SchemaDetail = models.SchemaDetail;
const DescribeRuleRequest = models.DescribeRuleRequest;
const DescribeAlarmReceiverResponse = models.DescribeAlarmReceiverResponse;
const BatchModifyOwnersNewResponse = models.BatchModifyOwnersNewResponse;
const DeleteInLongAgentRequest = models.DeleteInLongAgentRequest;
const Partition = models.Partition;
const RuleDimCnt = models.RuleDimCnt;
const BatchOperateResult = models.BatchOperateResult;
const RuleGroupTable = models.RuleGroupTable;
const DescribeDimensionScoreRequest = models.DescribeDimensionScoreRequest;
const Property = models.Property;
const InLongAgentTask = models.InLongAgentTask;
const BatchStartIntegrationTasksResponse = models.BatchStartIntegrationTasksResponse;
const DescribeIntegrationVersionNodesInfoRequest = models.DescribeIntegrationVersionNodesInfoRequest;
const DescribeRealTimeTaskSpeedResponse = models.DescribeRealTimeTaskSpeedResponse;
const DescribeIntegrationStatisticsAgentStatusResponse = models.DescribeIntegrationStatisticsAgentStatusResponse;
const DescribeFolderWorkflowListRequest = models.DescribeFolderWorkflowListRequest;
const RuleFieldConfig = models.RuleFieldConfig;
const CheckTaskNameExistResponse = models.CheckTaskNameExistResponse;
const DescribeInLongAgentTaskListResponse = models.DescribeInLongAgentTaskListResponse;
const LockIntegrationTaskRequest = models.LockIntegrationTaskRequest;
const TaskReportDetail = models.TaskReportDetail;
const BatchStopIntegrationTasksRequest = models.BatchStopIntegrationTasksRequest;
const DescribeRuleTemplatesByPageRequest = models.DescribeRuleTemplatesByPageRequest;
const DescribeMonitorsByPageResponse = models.DescribeMonitorsByPageResponse;
const DescribeInstanceLastLogResponse = models.DescribeInstanceLastLogResponse;
const DescribeExecStrategyRequest = models.DescribeExecStrategyRequest;
const CreateHiveTableRequest = models.CreateHiveTableRequest;
const BatchKillIntegrationTaskInstancesResponse = models.BatchKillIntegrationTaskInstancesResponse;
const ModifyRuleTemplateResponse = models.ModifyRuleTemplateResponse;
const CreateOrUpdateResourceRequest = models.CreateOrUpdateResourceRequest;
const DescribeRuleGroupTableResponse = models.DescribeRuleGroupTableResponse;
const DescribeDataSourceWithoutInfoRequest = models.DescribeDataSourceWithoutInfoRequest;
const DailyScoreInfo = models.DailyScoreInfo;
const RuleTemplateHistory = models.RuleTemplateHistory;
const DescribeInLongAgentVpcListResponse = models.DescribeInLongAgentVpcListResponse;
const DeleteRuleTemplateResponse = models.DeleteRuleTemplateResponse;
const DescribeRuleTemplateRequest = models.DescribeRuleTemplateRequest;
const FreezeTasksByMultiWorkflowRequest = models.FreezeTasksByMultiWorkflowRequest;
const CommonId = models.CommonId;
const CreateRuleTemplateRequest = models.CreateRuleTemplateRequest;
const SearchConditionNew = models.SearchConditionNew;
const BatchStopTasksNewResponse = models.BatchStopTasksNewResponse;
const TopTableStat = models.TopTableStat;
const DescribeRuleExecDetailResponse = models.DescribeRuleExecDetailResponse;
const Filter = models.Filter;
const DeleteIntegrationTaskResponse = models.DeleteIntegrationTaskResponse;
const ResumeIntegrationTaskRequest = models.ResumeIntegrationTaskRequest;
const DescribeRuleGroupsByPageResponse = models.DescribeRuleGroupsByPageResponse;
const DescribeFolderListResponse = models.DescribeFolderListResponse;
const DescribeIntegrationStatisticsTaskStatusResponse = models.DescribeIntegrationStatisticsTaskStatusResponse;
const DescribeDatabaseInfoListRequest = models.DescribeDatabaseInfoListRequest;
const DescribeInLongTkeClusterListRequest = models.DescribeInLongTkeClusterListRequest;
const DescribeRuleExecHistoryResponse = models.DescribeRuleExecHistoryResponse;
const DescribeIntegrationTaskResponse = models.DescribeIntegrationTaskResponse;
const DescribeQualityScoreTrendResponse = models.DescribeQualityScoreTrendResponse;
const ModifyFolderResponse = models.ModifyFolderResponse;
const CreateHiveTableByDDLRequest = models.CreateHiveTableByDDLRequest;
const DatabaseInfo = models.DatabaseInfo;
const GetIntegrationNodeColumnSchemaResponse = models.GetIntegrationNodeColumnSchemaResponse;
const StopIntegrationTaskResponse = models.StopIntegrationTaskResponse;
const DescribeDependTasksNewResponse = models.DescribeDependTasksNewResponse;
const CheckDuplicateTemplateNameResponse = models.CheckDuplicateTemplateNameResponse;
const DescribeRelatedInstancesRequest = models.DescribeRelatedInstancesRequest;
const DescribeDataCheckStatResponse = models.DescribeDataCheckStatResponse;
const DescribeIntegrationStatisticsInstanceTrendRequest = models.DescribeIntegrationStatisticsInstanceTrendRequest;
const BatchModifyOwnersNewRequest = models.BatchModifyOwnersNewRequest;
const DryRunDIOfflineTaskResponse = models.DryRunDIOfflineTaskResponse;
const GenHiveTableDDLSqlResponse = models.GenHiveTableDDLSqlResponse;
const DescribeRuleExecStatRequest = models.DescribeRuleExecStatRequest;
const OfflineTaskAddParam = models.OfflineTaskAddParam;
const DescribeRuleExecExportResultResponse = models.DescribeRuleExecExportResultResponse;
const LogContent = models.LogContent;
const RealTimeTaskSpeed = models.RealTimeTaskSpeed;
const DescribeTopTableStatRequest = models.DescribeTopTableStatRequest;
const BatchCreateIntegrationTaskAlarmsResponse = models.BatchCreateIntegrationTaskAlarmsResponse;
const DescribeIntegrationStatisticsRequest = models.DescribeIntegrationStatisticsRequest;
const DescribeRuleGroupRequest = models.DescribeRuleGroupRequest;
const DescribeInLongAgentTaskListRequest = models.DescribeInLongAgentTaskListRequest;
const ModifyTaskNameRequest = models.ModifyTaskNameRequest;
const DescribeTrendStatRequest = models.DescribeTrendStatRequest;
const RuleGroupExecResultPage = models.RuleGroupExecResultPage;
const ModifyWorkflowInfoResponse = models.ModifyWorkflowInfoResponse;
const OrganizationalFunction = models.OrganizationalFunction;
const OrderField = models.OrderField;
const BatchSuspendIntegrationTasksResponse = models.BatchSuspendIntegrationTasksResponse;
const DescribeRuleExecLogRequest = models.DescribeRuleExecLogRequest;
const BatchRerunIntegrationTaskInstancesResponse = models.BatchRerunIntegrationTaskInstancesResponse;
const RuleGroupPage = models.RuleGroupPage;
const CommitRuleGroupExecResultResponse = models.CommitRuleGroupExecResultResponse;
const DescribeIntegrationTasksRequest = models.DescribeIntegrationTasksRequest;
const DescribeTasksByPageRequest = models.DescribeTasksByPageRequest;
const BatchMakeUpIntegrationTasksResponse = models.BatchMakeUpIntegrationTasksResponse;
const CommitExportTaskRequest = models.CommitExportTaskRequest;
const DescribeTaskInstanceRequest = models.DescribeTaskInstanceRequest;


/**
 * wedata client
 * @class
 */
class WedataClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("wedata.tencentcloudapi.com", "2021-08-20", credential, region, profile);
    }
    
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建任务
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * 创建任务告警规则
     * @param {CreateTaskAlarmRegularRequest} req
     * @param {function(string, CreateTaskAlarmRegularResponse):void} cb
     * @public
     */
    CreateTaskAlarmRegular(req, cb) {
        let resp = new CreateTaskAlarmRegularResponse();
        this.request("CreateTaskAlarmRegular", req, resp, cb);
    }

    /**
     * 删除集成任务
     * @param {DeleteIntegrationTaskRequest} req
     * @param {function(string, DeleteIntegrationTaskResponse):void} cb
     * @public
     */
    DeleteIntegrationTask(req, cb) {
        let resp = new DeleteIntegrationTaskResponse();
        this.request("DeleteIntegrationTask", req, resp, cb);
    }

    /**
     * 检查规则名称是否重复
     * @param {CheckDuplicateRuleNameRequest} req
     * @param {function(string, CheckDuplicateRuleNameResponse):void} cb
     * @public
     */
    CheckDuplicateRuleName(req, cb) {
        let resp = new CheckDuplicateRuleNameResponse();
        this.request("CheckDuplicateRuleName", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
运行任务
     * @param {RunTaskRequest} req
     * @param {function(string, RunTaskResponse):void} cb
     * @public
     */
    RunTask(req, cb) {
        let resp = new RunTaskResponse();
        this.request("RunTask", req, resp, cb);
    }

    /**
     * 创建规则模版
     * @param {CreateRuleTemplateRequest} req
     * @param {function(string, CreateRuleTemplateResponse):void} cb
     * @public
     */
    CreateRuleTemplate(req, cb) {
        let resp = new CreateRuleTemplateResponse();
        this.request("CreateRuleTemplate", req, resp, cb);
    }

    /**
     * 实时任务运行指标概览
     * @param {DescribeRealTimeTaskMetricOverviewRequest} req
     * @param {function(string, DescribeRealTimeTaskMetricOverviewResponse):void} cb
     * @public
     */
    DescribeRealTimeTaskMetricOverview(req, cb) {
        let resp = new DescribeRealTimeTaskMetricOverviewResponse();
        this.request("DescribeRealTimeTaskMetricOverview", req, resp, cb);
    }

    /**
     * 获取离线任务实例
     * @param {GetOfflineInstanceListRequest} req
     * @param {function(string, GetOfflineInstanceListResponse):void} cb
     * @public
     */
    GetOfflineInstanceList(req, cb) {
        let resp = new GetOfflineInstanceListResponse();
        this.request("GetOfflineInstanceList", req, resp, cb);
    }

    /**
     * 数据质量的概览页面数据监测情况接口
     * @param {DescribeDataCheckStatRequest} req
     * @param {function(string, DescribeDataCheckStatResponse):void} cb
     * @public
     */
    DescribeDataCheckStat(req, cb) {
        let resp = new DescribeDataCheckStatResponse();
        this.request("DescribeDataCheckStat", req, resp, cb);
    }

    /**
     * 分页查询规则执行结果列表
     * @param {DescribeRuleExecResultsByPageRequest} req
     * @param {function(string, DescribeRuleExecResultsByPageResponse):void} cb
     * @public
     */
    DescribeRuleExecResultsByPage(req, cb) {
        let resp = new DescribeRuleExecResultsByPageResponse();
        this.request("DescribeRuleExecResultsByPage", req, resp, cb);
    }

    /**
     * 获取采集器所在集群的VPC列表
     * @param {DescribeInLongAgentVpcListRequest} req
     * @param {function(string, DescribeInLongAgentVpcListResponse):void} cb
     * @public
     */
    DescribeInLongAgentVpcList(req, cb) {
        let resp = new DescribeInLongAgentVpcListResponse();
        this.request("DescribeInLongAgentVpcList", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量终止操作
     * @param {KillInstancesRequest} req
     * @param {function(string, KillInstancesResponse):void} cb
     * @public
     */
    KillInstances(req, cb) {
        let resp = new KillInstancesResponse();
        this.request("KillInstances", req, resp, cb);
    }

    /**
     * 批量终止集成任务实例
     * @param {BatchKillIntegrationTaskInstancesRequest} req
     * @param {function(string, BatchKillIntegrationTaskInstancesResponse):void} cb
     * @public
     */
    BatchKillIntegrationTaskInstances(req, cb) {
        let resp = new BatchKillIntegrationTaskInstancesResponse();
        this.request("BatchKillIntegrationTaskInstances", req, resp, cb);
    }

    /**
     * 更新规则组执行策略
     * @param {ModifyExecStrategyRequest} req
     * @param {function(string, ModifyExecStrategyResponse):void} cb
     * @public
     */
    ModifyExecStrategy(req, cb) {
        let resp = new ModifyExecStrategyResponse();
        this.request("ModifyExecStrategy", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件监听器
     * @param {RegisterEventListenerRequest} req
     * @param {function(string, RegisterEventListenerResponse):void} cb
     * @public
     */
    RegisterEventListener(req, cb) {
        let resp = new RegisterEventListenerResponse();
        this.request("RegisterEventListener", req, resp, cb);
    }

    /**
     * 建hive表
     * @param {CreateHiveTableRequest} req
     * @param {function(string, CreateHiveTableResponse):void} cb
     * @public
     */
    CreateHiveTable(req, cb) {
        let resp = new CreateHiveTableResponse();
        this.request("CreateHiveTable", req, resp, cb);
    }

    /**
     * 获取集群命名空间列表
     * @param {DescribeClusterNamespaceListRequest} req
     * @param {function(string, DescribeClusterNamespaceListResponse):void} cb
     * @public
     */
    DescribeClusterNamespaceList(req, cb) {
        let resp = new DescribeClusterNamespaceListResponse();
        this.request("DescribeClusterNamespaceList", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务具体详情
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     * 查询集成节点
     * @param {DescribeIntegrationNodeRequest} req
     * @param {function(string, DescribeIntegrationNodeResponse):void} cb
     * @public
     */
    DescribeIntegrationNode(req, cb) {
        let resp = new DescribeIntegrationNodeResponse();
        this.request("DescribeIntegrationNode", req, resp, cb);
    }

    /**
     * 获取数据标准规则详情
     * @param {DescribeStandardRuleDetailInfoListRequest} req
     * @param {function(string, DescribeStandardRuleDetailInfoListResponse):void} cb
     * @public
     */
    DescribeStandardRuleDetailInfoList(req, cb) {
        let resp = new DescribeStandardRuleDetailInfoListResponse();
        this.request("DescribeStandardRuleDetailInfoList", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
基于多个工作流进行批量冻结任务操作
     * @param {FreezeTasksByMultiWorkflowRequest} req
     * @param {function(string, FreezeTasksByMultiWorkflowResponse):void} cb
     * @public
     */
    FreezeTasksByMultiWorkflow(req, cb) {
        let resp = new FreezeTasksByMultiWorkflowResponse();
        this.request("FreezeTasksByMultiWorkflow", req, resp, cb);
    }

    /**
     * 获取采集器列表
     * @param {DescribeInLongAgentListRequest} req
     * @param {function(string, DescribeInLongAgentListResponse):void} cb
     * @public
     */
    DescribeInLongAgentList(req, cb) {
        let resp = new DescribeInLongAgentListResponse();
        this.request("DescribeInLongAgentList", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量删除任务，仅对任务状态为”已停止“有效；

     * @param {BatchDeleteTasksNewRequest} req
     * @param {function(string, BatchDeleteTasksNewResponse):void} cb
     * @public
     */
    BatchDeleteTasksNew(req, cb) {
        let resp = new BatchDeleteTasksNewResponse();
        this.request("BatchDeleteTasksNew", req, resp, cb);
    }

    /**
     * 继续集成任务
     * @param {ResumeIntegrationTaskRequest} req
     * @param {function(string, ResumeIntegrationTaskResponse):void} cb
     * @public
     */
    ResumeIntegrationTask(req, cb) {
        let resp = new ResumeIntegrationTaskResponse();
        this.request("ResumeIntegrationTask", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除工作流
     * @param {DeleteWorkflowNewRequest} req
     * @param {function(string, DeleteWorkflowNewResponse):void} cb
     * @public
     */
    DeleteWorkflowNew(req, cb) {
        let resp = new DeleteWorkflowNewResponse();
        this.request("DeleteWorkflowNew", req, resp, cb);
    }

    /**
     * 数据集成大屏采集器状态分布统计
     * @param {DescribeIntegrationStatisticsAgentStatusRequest} req
     * @param {function(string, DescribeIntegrationStatisticsAgentStatusResponse):void} cb
     * @public
     */
    DescribeIntegrationStatisticsAgentStatus(req, cb) {
        let resp = new DescribeIntegrationStatisticsAgentStatusResponse();
        this.request("DescribeIntegrationStatisticsAgentStatus", req, resp, cb);
    }

    /**
     * 离线任务实例运行日志列表
     * @param {DescribeInstanceLogListRequest} req
     * @param {function(string, DescribeInstanceLogListResponse):void} cb
     * @public
     */
    DescribeInstanceLogList(req, cb) {
        let resp = new DescribeInstanceLogListResponse();
        this.request("DescribeInstanceLogList", req, resp, cb);
    }

    /**
     *  创建用户自定义函数
     * @param {CreateCustomFunctionRequest} req
     * @param {function(string, CreateCustomFunctionResponse):void} cb
     * @public
     */
    CreateCustomFunction(req, cb) {
        let resp = new CreateCustomFunctionResponse();
        this.request("CreateCustomFunction", req, resp, cb);
    }

    /**
     * 解锁集成任务
     * @param {UnlockIntegrationTaskRequest} req
     * @param {function(string, UnlockIntegrationTaskResponse):void} cb
     * @public
     */
    UnlockIntegrationTask(req, cb) {
        let resp = new UnlockIntegrationTaskResponse();
        this.request("UnlockIntegrationTask", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
     * @param {BatchStopTasksNewRequest} req
     * @param {function(string, BatchStopTasksNewResponse):void} cb
     * @public
     */
    BatchStopTasksNew(req, cb) {
        let resp = new BatchStopTasksNewResponse();
        this.request("BatchStopTasksNew", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除文件夹
     * @param {DeleteFolderRequest} req
     * @param {function(string, DeleteFolderResponse):void} cb
     * @public
     */
    DeleteFolder(req, cb) {
        let resp = new DeleteFolderResponse();
        this.request("DeleteFolder", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建数据源
     * @param {CreateDataSourceRequest} req
     * @param {function(string, CreateDataSourceResponse):void} cb
     * @public
     */
    CreateDataSource(req, cb) {
        let resp = new CreateDataSourceResponse();
        this.request("CreateDataSource", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     * @param {SetTaskAlarmNewRequest} req
     * @param {function(string, SetTaskAlarmNewResponse):void} cb
     * @public
     */
    SetTaskAlarmNew(req, cb) {
        let resp = new SetTaskAlarmNewResponse();
        this.request("SetTaskAlarmNew", req, resp, cb);
    }

    /**
     * 获取离线任务长连接Token
     * @param {DescribeOfflineTaskTokenRequest} req
     * @param {function(string, DescribeOfflineTaskTokenResponse):void} cb
     * @public
     */
    DescribeOfflineTaskToken(req, cb) {
        let resp = new DescribeOfflineTaskTokenResponse();
        this.request("DescribeOfflineTaskToken", req, resp, cb);
    }

    /**
     * 删除规则模版
     * @param {DeleteRuleTemplateRequest} req
     * @param {function(string, DeleteRuleTemplateResponse):void} cb
     * @public
     */
    DeleteRuleTemplate(req, cb) {
        let resp = new DeleteRuleTemplateResponse();
        this.request("DeleteRuleTemplate", req, resp, cb);
    }

    /**
     * 抢占锁定集成任务
     * @param {RobAndLockIntegrationTaskRequest} req
     * @param {function(string, RobAndLockIntegrationTaskResponse):void} cb
     * @public
     */
    RobAndLockIntegrationTask(req, cb) {
        let resp = new RobAndLockIntegrationTaskResponse();
        this.request("RobAndLockIntegrationTask", req, resp, cb);
    }

    /**
     * 判断集成节点名称是否存在
     * @param {CheckIntegrationNodeNameExistsRequest} req
     * @param {function(string, CheckIntegrationNodeNameExistsResponse):void} cb
     * @public
     */
    CheckIntegrationNodeNameExists(req, cb) {
        let resp = new CheckIntegrationNodeNameExistsResponse();
        this.request("CheckIntegrationNodeNameExists", req, resp, cb);
    }

    /**
     * 告警事件列表
     * @param {DescribeAlarmEventsRequest} req
     * @param {function(string, DescribeAlarmEventsResponse):void} cb
     * @public
     */
    DescribeAlarmEvents(req, cb) {
        let resp = new DescribeAlarmEventsResponse();
        this.request("DescribeAlarmEvents", req, resp, cb);
    }

    /**
     * 质量报告-质量评分
     * @param {DescribeQualityScoreRequest} req
     * @param {function(string, DescribeQualityScoreResponse):void} cb
     * @public
     */
    DescribeQualityScore(req, cb) {
        let resp = new DescribeQualityScoreResponse();
        this.request("DescribeQualityScore", req, resp, cb);
    }

    /**
     * 文件路径的根目录为 /datastudio/resource，如果要在根目录下创建 aaa 文件夹，FilePath的值应该为 /datastudio/resource，如果根目录下已经创建了 aaa 文件夹，要在 aaa 下创建  bbb 文件夹，FilePath的值应该为 /datastudio/resource/aaa
     * @param {CreateResourcePathRequest} req
     * @param {function(string, CreateResourcePathResponse):void} cb
     * @public
     */
    CreateResourcePath(req, cb) {
        let resp = new CreateResourcePathResponse();
        this.request("CreateResourcePath", req, resp, cb);
    }

    /**
     * 数据质量概览页面触发维度分布统计接口
     * @param {DescribeRuleDimStatRequest} req
     * @param {function(string, DescribeRuleDimStatResponse):void} cb
     * @public
     */
    DescribeRuleDimStat(req, cb) {
        let resp = new DescribeRuleDimStatResponse();
        this.request("DescribeRuleDimStat", req, resp, cb);
    }

    /**
     * 生成建hive表的sql
     * @param {GenHiveTableDDLSqlRequest} req
     * @param {function(string, GenHiveTableDDLSqlResponse):void} cb
     * @public
     */
    GenHiveTableDDLSql(req, cb) {
        let resp = new GenHiveTableDDLSqlResponse();
        this.request("GenHiveTableDDLSql", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务脚本
     * @param {DescribeTaskScriptRequest} req
     * @param {function(string, DescribeTaskScriptResponse):void} cb
     * @public
     */
    DescribeTaskScript(req, cb) {
        let resp = new DescribeTaskScriptResponse();
        this.request("DescribeTaskScript", req, resp, cb);
    }

    /**
     * 保存用户自定义函数
     * @param {SaveCustomFunctionRequest} req
     * @param {function(string, SaveCustomFunctionResponse):void} cb
     * @public
     */
    SaveCustomFunction(req, cb) {
        let resp = new SaveCustomFunctionResponse();
        this.request("SaveCustomFunction", req, resp, cb);
    }

    /**
     * 数据质量概览页面表排行接口
     * @param {DescribeTopTableStatRequest} req
     * @param {function(string, DescribeTopTableStatResponse):void} cb
     * @public
     */
    DescribeTopTableStat(req, cb) {
        let resp = new DescribeTopTableStatResponse();
        this.request("DescribeTopTableStat", req, resp, cb);
    }

    /**
     * 查询全量函数
     * @param {DescribeOrganizationalFunctionsRequest} req
     * @param {function(string, DescribeOrganizationalFunctionsResponse):void} cb
     * @public
     */
    DescribeOrganizationalFunctions(req, cb) {
        let resp = new DescribeOrganizationalFunctionsResponse();
        this.request("DescribeOrganizationalFunctions", req, resp, cb);
    }

    /**
     * 删除采集器
     * @param {DeleteInLongAgentRequest} req
     * @param {function(string, DeleteInLongAgentResponse):void} cb
     * @public
     */
    DeleteInLongAgent(req, cb) {
        let resp = new DeleteInLongAgentResponse();
        this.request("DeleteInLongAgent", req, resp, cb);
    }

    /**
     * Runner 规则检测结果上报
     * @param {CommitRuleGroupExecResultRequest} req
     * @param {function(string, CommitRuleGroupExecResultResponse):void} cb
     * @public
     */
    CommitRuleGroupExecResult(req, cb) {
        let resp = new CommitRuleGroupExecResultResponse();
        this.request("CommitRuleGroupExecResult", req, resp, cb);
    }

    /**
     * 查询Inlong manager日志
     * @param {TaskLogRequest} req
     * @param {function(string, TaskLogResponse):void} cb
     * @public
     */
    TaskLog(req, cb) {
        let resp = new TaskLogResponse();
        this.request("TaskLog", req, resp, cb);
    }

    /**
     * 调试运行集成任务
     * @param {DryRunDIOfflineTaskRequest} req
     * @param {function(string, DryRunDIOfflineTaskResponse):void} cb
     * @public
     */
    DryRunDIOfflineTask(req, cb) {
        let resp = new DryRunDIOfflineTaskResponse();
        this.request("DryRunDIOfflineTask", req, resp, cb);
    }

    /**
     * 质量报告-查询质量评分
     * @param {DescribeDimensionScoreRequest} req
     * @param {function(string, DescribeDimensionScoreResponse):void} cb
     * @public
     */
    DescribeDimensionScore(req, cb) {
        let resp = new DescribeDimensionScoreResponse();
        this.request("DescribeDimensionScore", req, resp, cb);
    }

    /**
     * 查询表绑定执行规则组信息
     * @param {DescribeRuleGroupTableRequest} req
     * @param {function(string, DescribeRuleGroupTableResponse):void} cb
     * @public
     */
    DescribeRuleGroupTable(req, cb) {
        let resp = new DescribeRuleGroupTableResponse();
        this.request("DescribeRuleGroupTable", req, resp, cb);
    }

    /**
     * 获取TKE集群列表
     * @param {DescribeInLongTkeClusterListRequest} req
     * @param {function(string, DescribeInLongTkeClusterListResponse):void} cb
     * @public
     */
    DescribeInLongTkeClusterList(req, cb) {
        let resp = new DescribeInLongTkeClusterListResponse();
        this.request("DescribeInLongTkeClusterList", req, resp, cb);
    }

    /**
     * 创建集成任务
     * @param {CreateIntegrationTaskRequest} req
     * @param {function(string, CreateIntegrationTaskResponse):void} cb
     * @public
     */
    CreateIntegrationTask(req, cb) {
        let resp = new CreateIntegrationTaskResponse();
        this.request("CreateIntegrationTask", req, resp, cb);
    }

    /**
     * 提交数据导出任务
     * @param {CommitExportTaskRequest} req
     * @param {function(string, CommitExportTaskResponse):void} cb
     * @public
     */
    CommitExportTask(req, cb) {
        let resp = new CommitExportTaskResponse();
        this.request("CommitExportTask", req, resp, cb);
    }

    /**
     * 过滤条件【必要字段】{ruleId}
     * @param {DescribeRuleHistoryByPageRequest} req
     * @param {function(string, DescribeRuleHistoryByPageResponse):void} cb
     * @public
     */
    DescribeRuleHistoryByPage(req, cb) {
        let resp = new DescribeRuleHistoryByPageResponse();
        this.request("DescribeRuleHistoryByPage", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     * @param {DescribeDataSourceListRequest} req
     * @param {function(string, DescribeDataSourceListResponse):void} cb
     * @public
     */
    DescribeDataSourceList(req, cb) {
        let resp = new DescribeDataSourceListResponse();
        this.request("DescribeDataSourceList", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新任务
     * @param {ModifyTaskInfoRequest} req
     * @param {function(string, ModifyTaskInfoResponse):void} cb
     * @public
     */
    ModifyTaskInfo(req, cb) {
        let resp = new ModifyTaskInfoResponse();
        this.request("ModifyTaskInfo", req, resp, cb);
    }

    /**
     * 获取表列表
     * @param {DescribeRuleTablesByPageRequest} req
     * @param {function(string, DescribeRuleTablesByPageResponse):void} cb
     * @public
     */
    DescribeRuleTablesByPage(req, cb) {
        let resp = new DescribeRuleTablesByPageResponse();
        this.request("DescribeRuleTablesByPage", req, resp, cb);
    }

    /**
     * 更新集成任务
     * @param {ModifyIntegrationTaskRequest} req
     * @param {function(string, ModifyIntegrationTaskResponse):void} cb
     * @public
     */
    ModifyIntegrationTask(req, cb) {
        let resp = new ModifyIntegrationTaskResponse();
        this.request("ModifyIntegrationTask", req, resp, cb);
    }

    /**
     * 数据集成大屏任务状态分布统计
     * @param {DescribeIntegrationStatisticsTaskStatusRequest} req
     * @param {function(string, DescribeIntegrationStatisticsTaskStatusResponse):void} cb
     * @public
     */
    DescribeIntegrationStatisticsTaskStatus(req, cb) {
        let resp = new DescribeIntegrationStatisticsTaskStatusResponse();
        this.request("DescribeIntegrationStatisticsTaskStatus", req, resp, cb);
    }

    /**
     * 批量运行集成任务
     * @param {BatchStartIntegrationTasksRequest} req
     * @param {function(string, BatchStartIntegrationTasksResponse):void} cb
     * @public
     */
    BatchStartIntegrationTasks(req, cb) {
        let resp = new BatchStartIntegrationTasksResponse();
        this.request("BatchStartIntegrationTasks", req, resp, cb);
    }

    /**
     * 分页查询质量监控组
     * @param {DescribeMonitorsByPageRequest} req
     * @param {function(string, DescribeMonitorsByPageResponse):void} cb
     * @public
     */
    DescribeMonitorsByPage(req, cb) {
        let resp = new DescribeMonitorsByPageResponse();
        this.request("DescribeMonitorsByPage", req, resp, cb);
    }

    /**
     * 重命名任务（任务编辑）
     * @param {ModifyTaskNameRequest} req
     * @param {function(string, ModifyTaskNameResponse):void} cb
     * @public
     */
    ModifyTaskName(req, cb) {
        let resp = new ModifyTaskNameResponse();
        this.request("ModifyTaskName", req, resp, cb);
    }

    /**
     * 查询规则执行结果详情
     * @param {DescribeRuleExecDetailRequest} req
     * @param {function(string, DescribeRuleExecDetailResponse):void} cb
     * @public
     */
    DescribeRuleExecDetail(req, cb) {
        let resp = new DescribeRuleExecDetailResponse();
        this.request("DescribeRuleExecDetail", req, resp, cb);
    }

    /**
     * 离线任务重名校验
     * @param {CheckTaskNameExistRequest} req
     * @param {function(string, CheckTaskNameExistResponse):void} cb
     * @public
     */
    CheckTaskNameExist(req, cb) {
        let resp = new CheckTaskNameExistResponse();
        this.request("CheckTaskNameExist", req, resp, cb);
    }

    /**
     * 查询任务实例的关联实例列表
     * @param {DescribeRelatedInstancesRequest} req
     * @param {function(string, DescribeRelatedInstancesResponse):void} cb
     * @public
     */
    DescribeRelatedInstances(req, cb) {
        let resp = new DescribeRelatedInstancesResponse();
        this.request("DescribeRelatedInstances", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     * @param {DescribeDatasourceRequest} req
     * @param {function(string, DescribeDatasourceResponse):void} cb
     * @public
     */
    DescribeDatasource(req, cb) {
        let resp = new DescribeDatasourceResponse();
        this.request("DescribeDatasource", req, resp, cb);
    }

    /**
     * 注册采集器
     * @param {CreateInLongAgentRequest} req
     * @param {function(string, CreateInLongAgentResponse):void} cb
     * @public
     */
    CreateInLongAgent(req, cb) {
        let resp = new CreateInLongAgentResponse();
        this.request("CreateInLongAgent", req, resp, cb);
    }

    /**
     * 更新采集器
     * @param {UpdateInLongAgentRequest} req
     * @param {function(string, UpdateInLongAgentResponse):void} cb
     * @public
     */
    UpdateInLongAgent(req, cb) {
        let resp = new UpdateInLongAgentResponse();
        this.request("UpdateInLongAgent", req, resp, cb);
    }

    /**
     * 创建离线任务
     * @param {CreateOfflineTaskRequest} req
     * @param {function(string, CreateOfflineTaskResponse):void} cb
     * @public
     */
    CreateOfflineTask(req, cb) {
        let resp = new CreateOfflineTaskResponse();
        this.request("CreateOfflineTask", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流调度
     * @param {ModifyWorkflowScheduleRequest} req
     * @param {function(string, ModifyWorkflowScheduleResponse):void} cb
     * @public
     */
    ModifyWorkflowSchedule(req, cb) {
        let resp = new ModifyWorkflowScheduleResponse();
        this.request("ModifyWorkflowSchedule", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据工作流分页查询任务
     * @param {DescribeTasksByPageRequest} req
     * @param {function(string, DescribeTasksByPageResponse):void} cb
     * @public
     */
    DescribeTasksByPage(req, cb) {
        let resp = new DescribeTasksByPageResponse();
        this.request("DescribeTasksByPage", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建文件夹
     * @param {CreateFolderRequest} req
     * @param {function(string, CreateFolderResponse):void} cb
     * @public
     */
    CreateFolder(req, cb) {
        let resp = new CreateFolderResponse();
        this.request("CreateFolder", req, resp, cb);
    }

    /**
     * 获取表schema信息
     * @param {DescribeTableSchemaInfoRequest} req
     * @param {function(string, DescribeTableSchemaInfoResponse):void} cb
     * @public
     */
    DescribeTableSchemaInfo(req, cb) {
        let resp = new DescribeTableSchemaInfoResponse();
        this.request("DescribeTableSchemaInfo", req, resp, cb);
    }

    /**
     * 更新质量规则接口
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * 查询函数类型
     * @param {DescribeFunctionTypesRequest} req
     * @param {function(string, DescribeFunctionTypesResponse):void} cb
     * @public
     */
    DescribeFunctionTypes(req, cb) {
        let resp = new DescribeFunctionTypesResponse();
        this.request("DescribeFunctionTypes", req, resp, cb);
    }

    /**
     * 离线任务周期统计明细
     * @param {DescribeTaskReportDetailListRequest} req
     * @param {function(string, DescribeTaskReportDetailListResponse):void} cb
     * @public
     */
    DescribeTaskReportDetailList(req, cb) {
        let resp = new DescribeTaskReportDetailListResponse();
        this.request("DescribeTaskReportDetailList", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交工作流
     * @param {SubmitWorkflowRequest} req
     * @param {function(string, SubmitWorkflowResponse):void} cb
     * @public
     */
    SubmitWorkflow(req, cb) {
        let resp = new SubmitWorkflowResponse();
        this.request("SubmitWorkflow", req, resp, cb);
    }

    /**
     * 删除集成节点
     * @param {DeleteIntegrationNodeRequest} req
     * @param {function(string, DeleteIntegrationNodeResponse):void} cb
     * @public
     */
    DeleteIntegrationNode(req, cb) {
        let resp = new DeleteIntegrationNodeResponse();
        this.request("DeleteIntegrationNode", req, resp, cb);
    }

    /**
     * 停止集成任务
     * @param {StopIntegrationTaskRequest} req
     * @param {function(string, StopIntegrationTaskResponse):void} cb
     * @public
     */
    StopIntegrationTask(req, cb) {
        let resp = new StopIntegrationTaskResponse();
        this.request("StopIntegrationTask", req, resp, cb);
    }

    /**
     * 实时任务同步速度趋势
     * @param {DescribeRealTimeTaskSpeedRequest} req
     * @param {function(string, DescribeRealTimeTaskSpeedResponse):void} cb
     * @public
     */
    DescribeRealTimeTaskSpeed(req, cb) {
        let resp = new DescribeRealTimeTaskSpeedResponse();
        this.request("DescribeRealTimeTaskSpeed", req, resp, cb);
    }

    /**
     * 获取实例列表
     * @param {DescribeInstanceListRequest} req
     * @param {function(string, DescribeInstanceListResponse):void} cb
     * @public
     */
    DescribeInstanceList(req, cb) {
        let resp = new DescribeInstanceListResponse();
        this.request("DescribeInstanceList", req, resp, cb);
    }

    /**
     * 告警接收人详情
     * @param {DescribeAlarmReceiverRequest} req
     * @param {function(string, DescribeAlarmReceiverResponse):void} cb
     * @public
     */
    DescribeAlarmReceiver(req, cb) {
        let resp = new DescribeAlarmReceiverResponse();
        this.request("DescribeAlarmReceiver", req, resp, cb);
    }

    /**
     * 查看任务锁状态信息
     * @param {DescribeTaskLockStatusRequest} req
     * @param {function(string, DescribeTaskLockStatusResponse):void} cb
     * @public
     */
    DescribeTaskLockStatus(req, cb) {
        let resp = new DescribeTaskLockStatusResponse();
        this.request("DescribeTaskLockStatus", req, resp, cb);
    }

    /**
     * 获取实例运行日志
     * @param {DescribeInstanceLogRequest} req
     * @param {function(string, DescribeInstanceLogResponse):void} cb
     * @public
     */
    DescribeInstanceLog(req, cb) {
        let resp = new DescribeInstanceLogResponse();
        this.request("DescribeInstanceLog", req, resp, cb);
    }

    /**
     * 批量更新集成任务（暂时仅支持批量更新责任人）
     * @param {BatchUpdateIntegrationTasksRequest} req
     * @param {function(string, BatchUpdateIntegrationTasksResponse):void} cb
     * @public
     */
    BatchUpdateIntegrationTasks(req, cb) {
        let resp = new BatchUpdateIntegrationTasksResponse();
        this.request("BatchUpdateIntegrationTasks", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     * @param {ModifyTaskScriptRequest} req
     * @param {function(string, ModifyTaskScriptResponse):void} cb
     * @public
     */
    ModifyTaskScript(req, cb) {
        let resp = new ModifyTaskScriptResponse();
        this.request("ModifyTaskScript", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量置成功
     * @param {ForceSucInstancesRequest} req
     * @param {function(string, ForceSucInstancesResponse):void} cb
     * @public
     */
    ForceSucInstances(req, cb) {
        let resp = new ForceSucInstancesResponse();
        this.request("ForceSucInstances", req, resp, cb);
    }

    /**
     * 查询规则组详情接口
     * @param {DescribeRuleGroupRequest} req
     * @param {function(string, DescribeRuleGroupResponse):void} cb
     * @public
     */
    DescribeRuleGroup(req, cb) {
        let resp = new DescribeRuleGroupResponse();
        this.request("DescribeRuleGroup", req, resp, cb);
    }

    /**
     * 获取数据库信息
     * @param {DescribeDatabaseInfoListRequest} req
     * @param {function(string, DescribeDatabaseInfoListResponse):void} cb
     * @public
     */
    DescribeDatabaseInfoList(req, cb) {
        let resp = new DescribeDatabaseInfoListResponse();
        this.request("DescribeDatabaseInfoList", req, resp, cb);
    }

    /**
     * 查询规则模版操作记录
     * @param {DescribeTemplateHistoryRequest} req
     * @param {function(string, DescribeTemplateHistoryResponse):void} cb
     * @public
     */
    DescribeTemplateHistory(req, cb) {
        let resp = new DescribeTemplateHistoryResponse();
        this.request("DescribeTemplateHistory", req, resp, cb);
    }

    /**
     * 提交集成任务
     * @param {CommitIntegrationTaskRequest} req
     * @param {function(string, CommitIntegrationTaskResponse):void} cb
     * @public
     */
    CommitIntegrationTask(req, cb) {
        let resp = new CommitIntegrationTaskResponse();
        this.request("CommitIntegrationTask", req, resp, cb);
    }

    /**
     * 删除任务
     * @param {DeleteOfflineTaskRequest} req
     * @param {function(string, DeleteOfflineTaskResponse):void} cb
     * @public
     */
    DeleteOfflineTask(req, cb) {
        let resp = new DeleteOfflineTaskResponse();
        this.request("DeleteOfflineTask", req, resp, cb);
    }

    /**
     * 查询质量规则数据源
     * @param {DescribeRuleDataSourcesRequest} req
     * @param {function(string, DescribeRuleDataSourcesResponse):void} cb
     * @public
     */
    DescribeRuleDataSources(req, cb) {
        let resp = new DescribeRuleDataSourcesResponse();
        this.request("DescribeRuleDataSources", req, resp, cb);
    }

    /**
     * 创建hive表，返回表名称
     * @param {CreateHiveTableByDDLRequest} req
     * @param {function(string, CreateHiveTableByDDLResponse):void} cb
     * @public
     */
    CreateHiveTableByDDL(req, cb) {
        let resp = new CreateHiveTableByDDLResponse();
        this.request("CreateHiveTableByDDL", req, resp, cb);
    }

    /**
     * 规则组执行结果分页查询接口不带鉴权
     * @param {DescribeRuleGroupExecResultsByPageWithoutAuthRequest} req
     * @param {function(string, DescribeRuleGroupExecResultsByPageWithoutAuthResponse):void} cb
     * @public
     */
    DescribeRuleGroupExecResultsByPageWithoutAuth(req, cb) {
        let resp = new DescribeRuleGroupExecResultsByPageWithoutAuthResponse();
        this.request("DescribeRuleGroupExecResultsByPageWithoutAuth", req, resp, cb);
    }

    /**
     * 获取资源管理目录树
     * @param {DescribeResourceManagePathTreesRequest} req
     * @param {function(string, DescribeResourceManagePathTreesResponse):void} cb
     * @public
     */
    DescribeResourceManagePathTrees(req, cb) {
        let resp = new DescribeResourceManagePathTreesResponse();
        this.request("DescribeResourceManagePathTrees", req, resp, cb);
    }

    /**
     * 批量置成功集成任务实例
     * @param {BatchForceSuccessIntegrationTaskInstancesRequest} req
     * @param {function(string, BatchForceSuccessIntegrationTaskInstancesResponse):void} cb
     * @public
     */
    BatchForceSuccessIntegrationTaskInstances(req, cb) {
        let resp = new BatchForceSuccessIntegrationTaskInstancesResponse();
        this.request("BatchForceSuccessIntegrationTaskInstances", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量冻结任务
     * @param {FreezeTasksRequest} req
     * @param {function(string, FreezeTasksResponse):void} cb
     * @public
     */
    FreezeTasks(req, cb) {
        let resp = new FreezeTasksResponse();
        this.request("FreezeTasks", req, resp, cb);
    }

    /**
     * 查询实时任务日志列表
     * @param {DescribeStreamTaskLogListRequest} req
     * @param {function(string, DescribeStreamTaskLogListResponse):void} cb
     * @public
     */
    DescribeStreamTaskLogList(req, cb) {
        let resp = new DescribeStreamTaskLogListResponse();
        this.request("DescribeStreamTaskLogList", req, resp, cb);
    }

    /**
     * 创建质量规则接口
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * 编辑规则模版
     * @param {ModifyRuleTemplateRequest} req
     * @param {function(string, ModifyRuleTemplateResponse):void} cb
     * @public
     */
    ModifyRuleTemplate(req, cb) {
        let resp = new ModifyRuleTemplateResponse();
        this.request("ModifyRuleTemplate", req, resp, cb);
    }

    /**
     * 查询表得分趋势
     * @param {DescribeTableScoreTrendRequest} req
     * @param {function(string, DescribeTableScoreTrendResponse):void} cb
     * @public
     */
    DescribeTableScoreTrend(req, cb) {
        let resp = new DescribeTableScoreTrendResponse();
        this.request("DescribeTableScoreTrend", req, resp, cb);
    }

    /**
     * 质量报告-查询表质量详情
     * @param {DescribeTableQualityDetailsRequest} req
     * @param {function(string, DescribeTableQualityDetailsResponse):void} cb
     * @public
     */
    DescribeTableQualityDetails(req, cb) {
        let resp = new DescribeTableQualityDetailsResponse();
        this.request("DescribeTableQualityDetails", req, resp, cb);
    }

    /**
     * 【过滤条件】
{表名称TableName,支持模糊匹配}       {表负责人TableOwnerName,支持模糊匹配}      {监控方式MonitorTypes，1.未配置 2.关联生产调度 3.离线周期检测,支持多选}  {订阅人ReceiverUin}
【必要字段】
{数据来源DatasourceId}
     * @param {DescribeRuleGroupsByPageRequest} req
     * @param {function(string, DescribeRuleGroupsByPageResponse):void} cb
     * @public
     */
    DescribeRuleGroupsByPage(req, cb) {
        let resp = new DescribeRuleGroupsByPageResponse();
        this.request("DescribeRuleGroupsByPage", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除数据源
     * @param {DeleteDataSourcesRequest} req
     * @param {function(string, DeleteDataSourcesResponse):void} cb
     * @public
     */
    DeleteDataSources(req, cb) {
        let resp = new DeleteDataSourcesResponse();
        this.request("DeleteDataSources", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
文件夹更新
     * @param {ModifyFolderRequest} req
     * @param {function(string, ModifyFolderResponse):void} cb
     * @public
     */
    ModifyFolder(req, cb) {
        let resp = new ModifyFolderResponse();
        this.request("ModifyFolder", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量重跑
     * @param {RerunInstancesRequest} req
     * @param {function(string, RerunInstancesResponse):void} cb
     * @public
     */
    RerunInstances(req, cb) {
        let resp = new RerunInstancesResponse();
        this.request("RerunInstances", req, resp, cb);
    }

    /**
     * 删除质量规则接口
     * @param {DeleteRuleRequest} req
     * @param {function(string, DeleteRuleResponse):void} cb
     * @public
     */
    DeleteRule(req, cb) {
        let resp = new DeleteRuleResponse();
        this.request("DeleteRule", req, resp, cb);
    }

    /**
     * 判断告警规则重名
     * @param {CheckAlarmRegularNameExistRequest} req
     * @param {function(string, CheckAlarmRegularNameExistResponse):void} cb
     * @public
     */
    CheckAlarmRegularNameExist(req, cb) {
        let resp = new CheckAlarmRegularNameExistResponse();
        this.request("CheckAlarmRegularNameExist", req, resp, cb);
    }

    /**
     * 判断集成任务名称是否存在
     * @param {CheckIntegrationTaskNameExistsRequest} req
     * @param {function(string, CheckIntegrationTaskNameExistsResponse):void} cb
     * @public
     */
    CheckIntegrationTaskNameExists(req, cb) {
        let resp = new CheckIntegrationTaskNameExistsResponse();
        this.request("CheckIntegrationTaskNameExists", req, resp, cb);
    }

    /**
     * 获取字段类型列表
     * @param {DescribeDataTypesRequest} req
     * @param {function(string, DescribeDataTypesResponse):void} cb
     * @public
     */
    DescribeDataTypes(req, cb) {
        let resp = new DescribeDataTypesResponse();
        this.request("DescribeDataTypes", req, resp, cb);
    }

    /**
     * 分页查询质量规则
     * @param {DescribeRulesByPageRequest} req
     * @param {function(string, DescribeRulesByPageResponse):void} cb
     * @public
     */
    DescribeRulesByPage(req, cb) {
        let resp = new DescribeRulesByPageResponse();
        this.request("DescribeRulesByPage", req, resp, cb);
    }

    /**
     * 获取离线任务实例列表(新)
     * @param {GetOfflineDIInstanceListRequest} req
     * @param {function(string, GetOfflineDIInstanceListResponse):void} cb
     * @public
     */
    GetOfflineDIInstanceList(req, cb) {
        let resp = new GetOfflineDIInstanceListResponse();
        this.request("GetOfflineDIInstanceList", req, resp, cb);
    }

    /**
     * 对集成离线任务执行批量补数据操作
     * @param {BatchMakeUpIntegrationTasksRequest} req
     * @param {function(string, BatchMakeUpIntegrationTasksResponse):void} cb
     * @public
     */
    BatchMakeUpIntegrationTasks(req, cb) {
        let resp = new BatchMakeUpIntegrationTasksResponse();
        this.request("BatchMakeUpIntegrationTasks", req, resp, cb);
    }

    /**
     * 规则执行日志查询
     * @param {DescribeRuleExecLogRequest} req
     * @param {function(string, DescribeRuleExecLogResponse):void} cb
     * @public
     */
    DescribeRuleExecLog(req, cb) {
        let resp = new DescribeRuleExecLogResponse();
        this.request("DescribeRuleExecLog", req, resp, cb);
    }

    /**
     * 查询数据来源列表
     * @param {DescribeDataBasesRequest} req
     * @param {function(string, DescribeDataBasesResponse):void} cb
     * @public
     */
    DescribeDataBases(req, cb) {
        let resp = new DescribeDataBasesResponse();
        this.request("DescribeDataBases", req, resp, cb);
    }

    /**
     * 查询规则详情
     * @param {DescribeRuleRequest} req
     * @param {function(string, DescribeRuleResponse):void} cb
     * @public
     */
    DescribeRule(req, cb) {
        let resp = new DescribeRuleResponse();
        this.request("DescribeRule", req, resp, cb);
    }

    /**
     * 过滤条件】 {模版名称Name,支持模糊匹配} {模版类型type，1.系统模版 2.自定义模版} {质量检测维度QualityDims, 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性} 【排序字段】 { 引用数排序类型CitationOrderType，根据引用数量排序 ASC DESC}
     * @param {DescribeRuleTemplatesByPageRequest} req
     * @param {function(string, DescribeRuleTemplatesByPageResponse):void} cb
     * @public
     */
    DescribeRuleTemplatesByPage(req, cb) {
        let resp = new DescribeRuleTemplatesByPageResponse();
        this.request("DescribeRuleTemplatesByPage", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流
     * @param {ModifyWorkflowInfoRequest} req
     * @param {function(string, ModifyWorkflowInfoResponse):void} cb
     * @public
     */
    ModifyWorkflowInfo(req, cb) {
        let resp = new ModifyWorkflowInfoResponse();
        this.request("ModifyWorkflowInfo", req, resp, cb);
    }

    /**
     * 数据质量概览页面规则运行情况接口
     * @param {DescribeRuleExecStatRequest} req
     * @param {function(string, DescribeRuleExecStatResponse):void} cb
     * @public
     */
    DescribeRuleExecStat(req, cb) {
        let resp = new DescribeRuleExecStatResponse();
        this.request("DescribeRuleExecStat", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     * @param {ModifyTaskLinksRequest} req
     * @param {function(string, ModifyTaskLinksResponse):void} cb
     * @public
     */
    ModifyTaskLinks(req, cb) {
        let resp = new ModifyTaskLinksResponse();
        this.request("ModifyTaskLinks", req, resp, cb);
    }

    /**
     * 规则组执行结果分页查询接口
     * @param {DescribeRuleGroupExecResultsByPageRequest} req
     * @param {function(string, DescribeRuleGroupExecResultsByPageResponse):void} cb
     * @public
     */
    DescribeRuleGroupExecResultsByPage(req, cb) {
        let resp = new DescribeRuleGroupExecResultsByPageResponse();
        this.request("DescribeRuleGroupExecResultsByPage", req, resp, cb);
    }

    /**
     * 更新集成节点
     * @param {ModifyIntegrationNodeRequest} req
     * @param {function(string, ModifyIntegrationNodeResponse):void} cb
     * @public
     */
    ModifyIntegrationNode(req, cb) {
        let resp = new ModifyIntegrationNodeResponse();
        this.request("ModifyIntegrationNode", req, resp, cb);
    }

    /**
     * 批量创建任务告警规则
     * @param {BatchCreateIntegrationTaskAlarmsRequest} req
     * @param {function(string, BatchCreateIntegrationTaskAlarmsResponse):void} cb
     * @public
     */
    BatchCreateIntegrationTaskAlarms(req, cb) {
        let resp = new BatchCreateIntegrationTaskAlarmsResponse();
        this.request("BatchCreateIntegrationTaskAlarms", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹目录
     * @param {DescribeFolderListRequest} req
     * @param {function(string, DescribeFolderListResponse):void} cb
     * @public
     */
    DescribeFolderList(req, cb) {
        let resp = new DescribeFolderListResponse();
        this.request("DescribeFolderList", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源列表
     * @param {DescribeDataSourceWithoutInfoRequest} req
     * @param {function(string, DescribeDataSourceWithoutInfoResponse):void} cb
     * @public
     */
    DescribeDataSourceWithoutInfo(req, cb) {
        let resp = new DescribeDataSourceWithoutInfoResponse();
        this.request("DescribeDataSourceWithoutInfo", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
工作流下所有任务的补录
     * @param {MakeUpWorkflowNewRequest} req
     * @param {function(string, MakeUpWorkflowNewResponse):void} cb
     * @public
     */
    MakeUpWorkflowNew(req, cb) {
        let resp = new MakeUpWorkflowNewResponse();
        this.request("MakeUpWorkflowNew", req, resp, cb);
    }

    /**
     * 数据集成大屏任务状态统计趋势
     * @param {DescribeIntegrationStatisticsTaskStatusTrendRequest} req
     * @param {function(string, DescribeIntegrationStatisticsTaskStatusTrendResponse):void} cb
     * @public
     */
    DescribeIntegrationStatisticsTaskStatusTrend(req, cb) {
        let resp = new DescribeIntegrationStatisticsTaskStatusTrendResponse();
        this.request("DescribeIntegrationStatisticsTaskStatusTrend", req, resp, cb);
    }

    /**
     * 批量重跑集成任务实例
     * @param {BatchRerunIntegrationTaskInstancesRequest} req
     * @param {function(string, BatchRerunIntegrationTaskInstancesResponse):void} cb
     * @public
     */
    BatchRerunIntegrationTaskInstances(req, cb) {
        let resp = new BatchRerunIntegrationTaskInstancesResponse();
        this.request("BatchRerunIntegrationTaskInstances", req, resp, cb);
    }

    /**
     * 查询规则组执行策略
     * @param {DescribeExecStrategyRequest} req
     * @param {function(string, DescribeExecStrategyResponse):void} cb
     * @public
     */
    DescribeExecStrategy(req, cb) {
        let resp = new DescribeExecStrategyResponse();
        this.request("DescribeExecStrategy", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建工作流
     * @param {CreateWorkflowRequest} req
     * @param {function(string, CreateWorkflowResponse):void} cb
     * @public
     */
    CreateWorkflow(req, cb) {
        let resp = new CreateWorkflowResponse();
        this.request("CreateWorkflow", req, resp, cb);
    }

    /**
     * 暂停集成任务
     * @param {SuspendIntegrationTaskRequest} req
     * @param {function(string, SuspendIntegrationTaskResponse):void} cb
     * @public
     */
    SuspendIntegrationTask(req, cb) {
        let resp = new SuspendIntegrationTaskResponse();
        this.request("SuspendIntegrationTask", req, resp, cb);
    }

    /**
     * 查询规则执行导出结果
     * @param {DescribeRuleExecExportResultRequest} req
     * @param {function(string, DescribeRuleExecExportResultResponse):void} cb
     * @public
     */
    DescribeRuleExecExportResult(req, cb) {
        let resp = new DescribeRuleExecExportResultResponse();
        this.request("DescribeRuleExecExportResult", req, resp, cb);
    }

    /**
     * 查询质量规则列表
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * 启动集成任务
     * @param {StartIntegrationTaskRequest} req
     * @param {function(string, StartIntegrationTaskResponse):void} cb
     * @public
     */
    StartIntegrationTask(req, cb) {
        let resp = new StartIntegrationTaskResponse();
        this.request("StartIntegrationTask", req, resp, cb);
    }

    /**
     * 锁定集成任务
     * @param {LockIntegrationTaskRequest} req
     * @param {function(string, LockIntegrationTaskResponse):void} cb
     * @public
     */
    LockIntegrationTask(req, cb) {
        let resp = new LockIntegrationTaskResponse();
        this.request("LockIntegrationTask", req, resp, cb);
    }

    /**
     * 按起止日期统计离线任务的所有实例的运行指标总和
     * @param {DescribeTaskReportRequest} req
     * @param {function(string, DescribeTaskReportResponse):void} cb
     * @public
     */
    DescribeTaskReport(req, cb) {
        let resp = new DescribeTaskReportResponse();
        this.request("DescribeTaskReport", req, resp, cb);
    }

    /**
     * 批量删除集成任务
     * @param {BatchDeleteIntegrationTasksRequest} req
     * @param {function(string, BatchDeleteIntegrationTasksResponse):void} cb
     * @public
     */
    BatchDeleteIntegrationTasks(req, cb) {
        let resp = new BatchDeleteIntegrationTasksResponse();
        this.request("BatchDeleteIntegrationTasks", req, resp, cb);
    }

    /**
     * 查询集成任务列表
     * @param {DescribeIntegrationTasksRequest} req
     * @param {function(string, DescribeIntegrationTasksResponse):void} cb
     * @public
     */
    DescribeIntegrationTasks(req, cb) {
        let resp = new DescribeIntegrationTasksResponse();
        this.request("DescribeIntegrationTasks", req, resp, cb);
    }

    /**
     * 更新监控状态
     * @param {ModifyMonitorStatusRequest} req
     * @param {function(string, ModifyMonitorStatusResponse):void} cb
     * @public
     */
    ModifyMonitorStatus(req, cb) {
        let resp = new ModifyMonitorStatusResponse();
        this.request("ModifyMonitorStatus", req, resp, cb);
    }

    /**
     * 数据质量概览页面趋势变化接口
     * @param {DescribeTrendStatRequest} req
     * @param {function(string, DescribeTrendStatResponse):void} cb
     * @public
     */
    DescribeTrendStat(req, cb) {
        let resp = new DescribeTrendStatResponse();
        this.request("DescribeTrendStat", req, resp, cb);
    }

    /**
     * 获取数据表信息
     * @param {DescribeTableInfoListRequest} req
     * @param {function(string, DescribeTableInfoListResponse):void} cb
     * @public
     */
    DescribeTableInfoList(req, cb) {
        let resp = new DescribeTableInfoListResponse();
        this.request("DescribeTableInfoList", req, resp, cb);
    }

    /**
     * 查询规则组订阅信息
     * @param {DescribeRuleGroupSubscriptionRequest} req
     * @param {function(string, DescribeRuleGroupSubscriptionResponse):void} cb
     * @public
     */
    DescribeRuleGroupSubscription(req, cb) {
        let resp = new DescribeRuleGroupSubscriptionResponse();
        this.request("DescribeRuleGroupSubscription", req, resp, cb);
    }

    /**
     * 查询任务实例列表
     * @param {DescribeTaskInstancesRequest} req
     * @param {function(string, DescribeTaskInstancesResponse):void} cb
     * @public
     */
    DescribeTaskInstances(req, cb) {
        let resp = new DescribeTaskInstancesResponse();
        this.request("DescribeTaskInstances", req, resp, cb);
    }

    /**
     * 删除任务告警规则
     * @param {DeleteTaskAlarmRegularRequest} req
     * @param {function(string, DeleteTaskAlarmRegularResponse):void} cb
     * @public
     */
    DeleteTaskAlarmRegular(req, cb) {
        let resp = new DeleteTaskAlarmRegularResponse();
        this.request("DeleteTaskAlarmRegular", req, resp, cb);
    }

    /**
     * 规则执行结果列表查询
     * @param {DescribeRuleExecResultsRequest} req
     * @param {function(string, DescribeRuleExecResultsResponse):void} cb
     * @public
     */
    DescribeRuleExecResults(req, cb) {
        let resp = new DescribeRuleExecResultsResponse();
        this.request("DescribeRuleExecResults", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
触发事件
     * @param {TriggerEventRequest} req
     * @param {function(string, TriggerEventResponse):void} cb
     * @public
     */
    TriggerEvent(req, cb) {
        let resp = new TriggerEventResponse();
        this.request("TriggerEvent", req, resp, cb);
    }

    /**
     * 资源管理删除资源
     * @param {DeleteResourceRequest} req
     * @param {function(string, DeleteResourceResponse):void} cb
     * @public
     */
    DeleteResource(req, cb) {
        let resp = new DeleteResourceResponse();
        this.request("DeleteResource", req, resp, cb);
    }

    /**
     * 质量报告-质量分周期趋势
     * @param {DescribeQualityScoreTrendRequest} req
     * @param {function(string, DescribeQualityScoreTrendResponse):void} cb
     * @public
     */
    DescribeQualityScoreTrend(req, cb) {
        let resp = new DescribeQualityScoreTrendResponse();
        this.request("DescribeQualityScoreTrend", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改数据源
     * @param {ModifyDataSourceRequest} req
     * @param {function(string, ModifyDataSourceResponse):void} cb
     * @public
     */
    ModifyDataSource(req, cb) {
        let resp = new ModifyDataSourceResponse();
        this.request("ModifyDataSource", req, resp, cb);
    }

    /**
     * 查询任务告警规则列表
     * @param {DescribeTaskAlarmRegulationsRequest} req
     * @param {function(string, DescribeTaskAlarmRegulationsResponse):void} cb
     * @public
     */
    DescribeTaskAlarmRegulations(req, cb) {
        let resp = new DescribeTaskAlarmRegulationsResponse();
        this.request("DescribeTaskAlarmRegulations", req, resp, cb);
    }

    /**
     * 查询集成任务版本节点信息
     * @param {DescribeIntegrationVersionNodesInfoRequest} req
     * @param {function(string, DescribeIntegrationVersionNodesInfoResponse):void} cb
     * @public
     */
    DescribeIntegrationVersionNodesInfo(req, cb) {
        let resp = new DescribeIntegrationVersionNodesInfoResponse();
        this.request("DescribeIntegrationVersionNodesInfo", req, resp, cb);
    }

    /**
     * 修改任务告警规则
     * @param {ModifyTaskAlarmRegularRequest} req
     * @param {function(string, ModifyTaskAlarmRegularResponse):void} cb
     * @public
     */
    ModifyTaskAlarmRegular(req, cb) {
        let resp = new ModifyTaskAlarmRegularResponse();
        this.request("ModifyTaskAlarmRegular", req, resp, cb);
    }

    /**
     * 删除用户自定义函数
     * @param {DeleteCustomFunctionRequest} req
     * @param {function(string, DeleteCustomFunctionResponse):void} cb
     * @public
     */
    DeleteCustomFunction(req, cb) {
        let resp = new DeleteCustomFunctionResponse();
        this.request("DeleteCustomFunction", req, resp, cb);
    }

    /**
     * 查询规则组数据对象列表
     * @param {DescribeDataObjectsRequest} req
     * @param {function(string, DescribeDataObjectsResponse):void} cb
     * @public
     */
    DescribeDataObjects(req, cb) {
        let resp = new DescribeDataObjectsResponse();
        this.request("DescribeDataObjects", req, resp, cb);
    }

    /**
     * 查询集成任务
     * @param {DescribeIntegrationTaskRequest} req
     * @param {function(string, DescribeIntegrationTaskResponse):void} cb
     * @public
     */
    DescribeIntegrationTask(req, cb) {
        let resp = new DescribeIntegrationTaskResponse();
        this.request("DescribeIntegrationTask", req, resp, cb);
    }

    /**
     * 数据集成大屏同步条数统计趋势
     * @param {DescribeIntegrationStatisticsRecordsTrendRequest} req
     * @param {function(string, DescribeIntegrationStatisticsRecordsTrendResponse):void} cb
     * @public
     */
    DescribeIntegrationStatisticsRecordsTrend(req, cb) {
        let resp = new DescribeIntegrationStatisticsRecordsTrendResponse();
        this.request("DescribeIntegrationStatisticsRecordsTrend", req, resp, cb);
    }

    /**
     * 数据集成大屏实例状态统计趋势
     * @param {DescribeIntegrationStatisticsInstanceTrendRequest} req
     * @param {function(string, DescribeIntegrationStatisticsInstanceTrendResponse):void} cb
     * @public
     */
    DescribeIntegrationStatisticsInstanceTrend(req, cb) {
        let resp = new DescribeIntegrationStatisticsInstanceTrendResponse();
        this.request("DescribeIntegrationStatisticsInstanceTrend", req, resp, cb);
    }

    /**
     * 创建集成节点
     * @param {CreateIntegrationNodeRequest} req
     * @param {function(string, CreateIntegrationNodeResponse):void} cb
     * @public
     */
    CreateIntegrationNode(req, cb) {
        let resp = new CreateIntegrationNodeResponse();
        this.request("CreateIntegrationNode", req, resp, cb);
    }

    /**
     * 批量暂停集成任务
     * @param {BatchSuspendIntegrationTasksRequest} req
     * @param {function(string, BatchSuspendIntegrationTasksResponse):void} cb
     * @public
     */
    BatchSuspendIntegrationTasks(req, cb) {
        let resp = new BatchSuspendIntegrationTasksResponse();
        this.request("BatchSuspendIntegrationTasks", req, resp, cb);
    }

    /**
     * 提交规则组运行任务接口
     * @param {CommitRuleGroupTaskRequest} req
     * @param {function(string, CommitRuleGroupTaskResponse):void} cb
     * @public
     */
    CommitRuleGroupTask(req, cb) {
        let resp = new CommitRuleGroupTaskResponse();
        this.request("CommitRuleGroupTask", req, resp, cb);
    }

    /**
     * 日志获取详情页面
     * @param {DescribeInstanceLastLogRequest} req
     * @param {function(string, DescribeInstanceLastLogResponse):void} cb
     * @public
     */
    DescribeInstanceLastLog(req, cb) {
        let resp = new DescribeInstanceLastLogResponse();
        this.request("DescribeInstanceLastLog", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
获取实例日志列表
     * @param {DescribeInstanceLogsRequest} req
     * @param {function(string, DescribeInstanceLogsResponse):void} cb
     * @public
     */
    DescribeInstanceLogs(req, cb) {
        let resp = new DescribeInstanceLogsResponse();
        this.request("DescribeInstanceLogs", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件
     * @param {RegisterEventRequest} req
     * @param {function(string, RegisterEventResponse):void} cb
     * @public
     */
    RegisterEvent(req, cb) {
        let resp = new RegisterEventResponse();
        this.request("RegisterEvent", req, resp, cb);
    }

    /**
     * 提交自定义函数
     * @param {SubmitCustomFunctionRequest} req
     * @param {function(string, SubmitCustomFunctionResponse):void} cb
     * @public
     */
    SubmitCustomFunction(req, cb) {
        let resp = new SubmitCustomFunctionResponse();
        this.request("SubmitCustomFunction", req, resp, cb);
    }

    /**
     * 质量报告-修改维度权限
     * @param {ModifyDimensionWeightRequest} req
     * @param {function(string, ModifyDimensionWeightResponse):void} cb
     * @public
     */
    ModifyDimensionWeight(req, cb) {
        let resp = new ModifyDimensionWeightResponse();
        this.request("ModifyDimensionWeight", req, resp, cb);
    }

    /**
     * 检查规则模板名称是否重复
     * @param {CheckDuplicateTemplateNameRequest} req
     * @param {function(string, CheckDuplicateTemplateNameResponse):void} cb
     * @public
     */
    CheckDuplicateTemplateName(req, cb) {
        let resp = new CheckDuplicateTemplateNameResponse();
        this.request("CheckDuplicateTemplateName", req, resp, cb);
    }

    /**
     * 批量继续执行集成实时任务
     * @param {BatchResumeIntegrationTasksRequest} req
     * @param {function(string, BatchResumeIntegrationTasksResponse):void} cb
     * @public
     */
    BatchResumeIntegrationTasks(req, cb) {
        let resp = new BatchResumeIntegrationTasksResponse();
        this.request("BatchResumeIntegrationTasks", req, resp, cb);
    }

    /**
     * 重启采集器
     * @param {RestartInLongAgentRequest} req
     * @param {function(string, RestartInLongAgentResponse):void} cb
     * @public
     */
    RestartInLongAgent(req, cb) {
        let resp = new RestartInLongAgentResponse();
        this.request("RestartInLongAgent", req, resp, cb);
    }

    /**
     * 查询模板详情
     * @param {DescribeRuleTemplateRequest} req
     * @param {function(string, DescribeRuleTemplateResponse):void} cb
     * @public
     */
    DescribeRuleTemplate(req, cb) {
        let resp = new DescribeRuleTemplateResponse();
        this.request("DescribeRuleTemplate", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交任务
     * @param {SubmitTaskRequest} req
     * @param {function(string, SubmitTaskResponse):void} cb
     * @public
     */
    SubmitTask(req, cb) {
        let resp = new SubmitTaskResponse();
        this.request("SubmitTask", req, resp, cb);
    }

    /**
     * 数据质量，查询调度任务的实例列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 获取数据源信息-数据源分页列表
     * @param {DescribeDataSourceInfoListRequest} req
     * @param {function(string, DescribeDataSourceInfoListResponse):void} cb
     * @public
     */
    DescribeDataSourceInfoList(req, cb) {
        let resp = new DescribeDataSourceInfoListResponse();
        this.request("DescribeDataSourceInfoList", req, resp, cb);
    }

    /**
     * 查询函数分类
     * @param {DescribeFunctionKindsRequest} req
     * @param {function(string, DescribeFunctionKindsResponse):void} cb
     * @public
     */
    DescribeFunctionKinds(req, cb) {
        let resp = new DescribeFunctionKindsResponse();
        this.request("DescribeFunctionKinds", req, resp, cb);
    }

    /**
     * 查询采集器关联的任务列表
     * @param {DescribeInLongAgentTaskListRequest} req
     * @param {function(string, DescribeInLongAgentTaskListResponse):void} cb
     * @public
     */
    DescribeInLongAgentTaskList(req, cb) {
        let resp = new DescribeInLongAgentTaskListResponse();
        this.request("DescribeInLongAgentTaskList", req, resp, cb);
    }

    /**
     * 查询规则执行历史， 最近30条
     * @param {DescribeRuleExecHistoryRequest} req
     * @param {function(string, DescribeRuleExecHistoryResponse):void} cb
     * @public
     */
    DescribeRuleExecHistory(req, cb) {
        let resp = new DescribeRuleExecHistoryResponse();
        this.request("DescribeRuleExecHistory", req, resp, cb);
    }

    /**
     * 查询规则模版列表
     * @param {DescribeRuleTemplatesRequest} req
     * @param {function(string, DescribeRuleTemplatesResponse):void} cb
     * @public
     */
    DescribeRuleTemplates(req, cb) {
        let resp = new DescribeRuleTemplatesResponse();
        this.request("DescribeRuleTemplates", req, resp, cb);
    }

    /**
     * 离线任务实例统计明细
     * @param {DescribeTaskInstanceReportDetailRequest} req
     * @param {function(string, DescribeTaskInstanceReportDetailResponse):void} cb
     * @public
     */
    DescribeTaskInstanceReportDetail(req, cb) {
        let resp = new DescribeTaskInstanceReportDetailResponse();
        this.request("DescribeTaskInstanceReportDetail", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹下的工作流
     * @param {DescribeFolderWorkflowListRequest} req
     * @param {function(string, DescribeFolderWorkflowListResponse):void} cb
     * @public
     */
    DescribeFolderWorkflowList(req, cb) {
        let resp = new DescribeFolderWorkflowListResponse();
        this.request("DescribeFolderWorkflowList", req, resp, cb);
    }

    /**
     * 更新规则组订阅信息
     * @param {ModifyRuleGroupSubscriptionRequest} req
     * @param {function(string, ModifyRuleGroupSubscriptionResponse):void} cb
     * @public
     */
    ModifyRuleGroupSubscription(req, cb) {
        let resp = new ModifyRuleGroupSubscriptionResponse();
        this.request("ModifyRuleGroupSubscription", req, resp, cb);
    }

    /**
     * 获取项目信息
     * @param {DescribeProjectRequest} req
     * @param {function(string, DescribeProjectResponse):void} cb
     * @public
     */
    DescribeProject(req, cb) {
        let resp = new DescribeProjectResponse();
        this.request("DescribeProject", req, resp, cb);
    }

    /**
     * 获取kafka的topic信息
     * @param {DescribeKafkaTopicInfoRequest} req
     * @param {function(string, DescribeKafkaTopicInfoResponse):void} cb
     * @public
     */
    DescribeKafkaTopicInfo(req, cb) {
        let resp = new DescribeKafkaTopicInfoResponse();
        this.request("DescribeKafkaTopicInfo", req, resp, cb);
    }

    /**
     * 提取数据集成节点字段Schema
     * @param {GetIntegrationNodeColumnSchemaRequest} req
     * @param {function(string, GetIntegrationNodeColumnSchemaResponse):void} cb
     * @public
     */
    GetIntegrationNodeColumnSchema(req, cb) {
        let resp = new GetIntegrationNodeColumnSchemaResponse();
        this.request("GetIntegrationNodeColumnSchema", req, resp, cb);
    }

    /**
     * 资源管理需要先将资源上传到cos中，然后调用该接口，将cos资源绑定到wedata
     * @param {CreateOrUpdateResourceRequest} req
     * @param {function(string, CreateOrUpdateResourceResponse):void} cb
     * @public
     */
    CreateOrUpdateResource(req, cb) {
        let resp = new CreateOrUpdateResourceResponse();
        this.request("CreateOrUpdateResource", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据层级查找上/下游任务节点
     * @param {DescribeDependTasksNewRequest} req
     * @param {function(string, DescribeDependTasksNewResponse):void} cb
     * @public
     */
    DescribeDependTasksNew(req, cb) {
        let resp = new DescribeDependTasksNewResponse();
        this.request("DescribeDependTasksNew", req, resp, cb);
    }

    /**
     * 离线任务实例详情
     * @param {DescribeTaskInstanceRequest} req
     * @param {function(string, DescribeTaskInstanceResponse):void} cb
     * @public
     */
    DescribeTaskInstance(req, cb) {
        let resp = new DescribeTaskInstanceResponse();
        this.request("DescribeTaskInstance", req, resp, cb);
    }

    /**
     * 查询实时任务实例节点信息
     * @param {DescribeRealTimeTaskInstanceNodeInfoRequest} req
     * @param {function(string, DescribeRealTimeTaskInstanceNodeInfoResponse):void} cb
     * @public
     */
    DescribeRealTimeTaskInstanceNodeInfo(req, cb) {
        let resp = new DescribeRealTimeTaskInstanceNodeInfoResponse();
        this.request("DescribeRealTimeTaskInstanceNodeInfo", req, resp, cb);
    }

    /**
     * 数据集成大屏概览
     * @param {DescribeIntegrationStatisticsRequest} req
     * @param {function(string, DescribeIntegrationStatisticsResponse):void} cb
     * @public
     */
    DescribeIntegrationStatistics(req, cb) {
        let resp = new DescribeIntegrationStatisticsResponse();
        this.request("DescribeIntegrationStatistics", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
任务批量补录，调度状态任务才可以补录；



     * @param {MakeUpTasksNewRequest} req
     * @param {function(string, MakeUpTasksNewResponse):void} cb
     * @public
     */
    MakeUpTasksNew(req, cb) {
        let resp = new MakeUpTasksNewResponse();
        this.request("MakeUpTasksNew", req, resp, cb);
    }

    /**
     * 查询规则模版维度分布情况
     * @param {DescribeTemplateDimCountRequest} req
     * @param {function(string, DescribeTemplateDimCountResponse):void} cb
     * @public
     */
    DescribeTemplateDimCount(req, cb) {
        let resp = new DescribeTemplateDimCountResponse();
        this.request("DescribeTemplateDimCount", req, resp, cb);
    }

    /**
     * 数据质量获取生产调度任务列表
     * @param {DescribeProdTasksRequest} req
     * @param {function(string, DescribeProdTasksResponse):void} cb
     * @public
     */
    DescribeProdTasks(req, cb) {
        let resp = new DescribeProdTasksResponse();
        this.request("DescribeProdTasks", req, resp, cb);
    }

    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量修改任务责任人
     * @param {BatchModifyOwnersNewRequest} req
     * @param {function(string, BatchModifyOwnersNewResponse):void} cb
     * @public
     */
    BatchModifyOwnersNew(req, cb) {
        let resp = new BatchModifyOwnersNewResponse();
        this.request("BatchModifyOwnersNew", req, resp, cb);
    }

    /**
     * 批量停止集成任务
     * @param {BatchStopIntegrationTasksRequest} req
     * @param {function(string, BatchStopIntegrationTasksResponse):void} cb
     * @public
     */
    BatchStopIntegrationTasks(req, cb) {
        let resp = new BatchStopIntegrationTasksResponse();
        this.request("BatchStopIntegrationTasks", req, resp, cb);
    }


}
module.exports = WedataClient;

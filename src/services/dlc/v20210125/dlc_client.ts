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
  CheckDataEngineConfigPairsValidityResponse,
  DescribeResultDownloadResponse,
  AccessInfo,
  EngineNetworkInfo,
  DescribeDatabasesRequest,
  Asset,
  DescribeFlowDetailListRequest,
  DescribeDataMaskStrategiesResponse,
  PythonSparkImage,
  UpdateClusterGroupRequest,
  Other,
  RevokeDLCCatalogAccessRequest,
  CreateResourceConfigResponse,
  MixedTablePartitions,
  ModifyGovernEventRuleResponse,
  DescribeNotebookSessionsRequest,
  ListLabsResponse,
  DescribeDMSDatabaseResponse,
  DescribeTaskListResponse,
  Policys,
  DropDMSDatabaseRequest,
  NotebookSessionStatementBatchInformation,
  DescribeTablesResponse,
  DescribeDataEngineEventsResponse,
  SessionResourceTemplate,
  GetRayClusterResponse,
  DescribePartitionsRequest,
  AlterTableCommentResponse,
  DescribeEngineUsageInfoRequest,
  DescribeDMSTableResponse,
  AlterTableCommentRequest,
  CreateTasksInOrderRequest,
  ResourceQuota,
  PersistentWorkDir,
  RayClusterEntity,
  GetLabEventRequest,
  ElasticsearchInfo,
  DescribeUpdatableDataEnginesResponse,
  DataEngineImageSessionParameter,
  CreateDatabaseRequest,
  DescribeDMSTablesResponse,
  Tag,
  CreateInferenceServiceRequest,
  DataMaskStrategy,
  DescribeAdvancedStoreLocationResponse,
  DescribeTablesNameResponse,
  GetLabPodYamlResponse,
  DescribeAdvancedStoreLocationRequest,
  DeletePartitionQueueResponse,
  DeleteMetaDatabaseRequest,
  GetRayClusterRequest,
  CancelNotebookSessionStatementBatchResponse,
  Label,
  CreateModelVersionRequest,
  BatchSqlTask,
  ModifySparkAppForTDLCResponse,
  GroupInfo,
  StartRayClusterRequest,
  UnboundDatasourceHouseRequest,
  CreatePartitionResponse,
  DeleteUserVpcConnectionResponse,
  GetRayJobYamlResponse,
  PartitionInfo,
  SetOptimizerPolicyRequest,
  UpdateDataEngineRequest,
  SmartOptimizerWrittenPolicy,
  DescribeDatabaseResponse,
  JobSpec,
  DescribeSparkAppJobsRequest,
  DeleteNotebookSessionRequest,
  CreateDMSTableResponse,
  ViewResponseInfo,
  ListClusterGroupsRequest,
  DescribeSparkSessionBatchSQLRequest,
  HeadSpecDTO,
  CreatePartitionQueueRequest,
  LocationInfo,
  UpdateEngineResourceGroupNetworkConfigInfoRequest,
  SmartOptimizerPolicy,
  UnboundDatasourceHouseResponse,
  RunJobSpecResponse,
  GetLabHistoryRequest,
  DescribeUserInfoResponse,
  DescribeTaskListRequest,
  DetachWorkGroupPolicyRequest,
  ModifyUserTypeRequest,
  NotebookSessionStatementInfo,
  CreateImportTaskRequest,
  ListRayClustersRequest,
  DescribeDataMaskStrategiesRequest,
  SmartOptimizerLifecyclePolicy,
  DeleteUsersFromWorkGroupResponse,
  DescribeDLCCatalogAccessResponse,
  DeleteTableResponse,
  GetLabYamlResponse,
  DescribeUserRolesResponse,
  CreateExportTaskRequest,
  ListInferenceModelsResponse,
  RayJobEventItem,
  CreateDMSTableRequest,
  ModifySparkAppResponse,
  CreatePartitionRequest,
  DMSTable,
  CreateSparkSubmitTaskResponse,
  CancelRayJobRequest,
  InferenceModelInfo,
  CreateRayClusterRequest,
  DescribeUserRegisterTimeRequest,
  AttachDataMaskPolicyRequest,
  DMSSds,
  OpendThirdAccessUserInfo,
  DescribeDataEnginesScaleDetailResponse,
  CreateJobSpecResponse,
  OptimizerEngineInfo,
  CreateStandardEngineResourceGroupRequest,
  QueryDashboardOverviewRequest,
  DescribeNotebookSessionStatementSqlResultRequest,
  GetLabPodYamlRequest,
  CreateSparkSubmitTaskRequest,
  CreateTableResponse,
  ListTaskJobLogNameRequest,
  QueryMonitorOverviewRequest,
  DeleteStandardEngineResourceGroupResponse,
  DescribeTaskResultRequest,
  UpdateUserDataEngineConfigRequest,
  CreateNotebookSessionStatementRequest,
  QueueInfo,
  OverviewItem,
  DescribeUsersResponse,
  CheckQueueNameRequest,
  DataGovernPolicy,
  DeleteNativeSparkSessionResponse,
  CreateWorkGroupResponse,
  DescribeFlowDetailListResponse,
  DescribeEngineUsageInfoResponse,
  DescribeWorkGroupInfoResponse,
  DescribeTablesRequest,
  StartLabResponse,
  CreateStoreLocationRequest,
  DescribeLakeFsInfoResponse,
  ElasticPlan,
  ModifyWorkGroupResponse,
  ListExampleDifficultiesRequest,
  DescribeDMSPartitionsResponse,
  DeleteRayClusterRequest,
  GetInferenceServiceRequest,
  DescribeTableRequest,
  QueryDashboardOverviewResponse,
  Policy,
  DescribeTaskLogRequest,
  DescribeDataEnginesScaleDetailRequest,
  StopInferenceServiceRequest,
  UpdateJobSpecResponse,
  CreateInferenceModelRequest,
  DescribeEngineNetworksRequest,
  GenerateCreateMangedTableSqlRequest,
  SuspendResumeDataEngineRequest,
  DescribeNetworkConnectionsResponse,
  DescribeSparkAppJobsResponse,
  ClusterGroup,
  TableResponseInfo,
  UpdateResourceConfigRequest,
  ModifyUserTypeResponse,
  DescribeDataEnginePythonSparkImagesRequest,
  CancelSparkSessionBatchSQLRequest,
  CancelTasksRequest,
  TasksOverview,
  CreateCHDFSBindingProductRequest,
  EngineResourceGroupConfigPair,
  FlowInfo,
  UnbindWorkGroupsFromUserRequest,
  UpdateRowFilterResponse,
  UserInfo,
  CreateDatabaseResponse,
  DeleteJobSpecRequest,
  GetLabPodsRequest,
  EngineCapabilities,
  UpdateInferenceModelRequest,
  GetRayJobRequest,
  DeleteDataMaskStrategyRequest,
  ListExampleTagsResponse,
  CreateWorkGroupRequest,
  DescribeClusterGroupClustersRequest,
  OtherDatasourceConnection,
  UpdateDataMaskStrategyRequest,
  DescribeDatasourceConnectionRequest,
  CheckDataEngineImageCanBeUpgradeRequest,
  UpdateJobSpecPriorityResponse,
  QueryInternalTableWarehouseRequest,
  CreateResultDownloadRequest,
  DescribeNotebookSessionStatementSqlResultResponse,
  PauseStandardEngineResourceGroupsRequest,
  GenerateInternalTableRequest,
  UpdateStandardEngineResourceGroupConfigInfoRequest,
  GetRayClusterHistoryResponse,
  LinkedServiceInfo,
  UpdateUserDataEngineConfigResponse,
  GetResourceConfigRequest,
  ListExampleCategoriesRequest,
  DescribeTasksCostInfoResponse,
  DeleteRayJobRequest,
  ModifyClusterPriorityResponse,
  DataEngineBasicInfo,
  CancelNotebookSessionStatementRequest,
  Param,
  GPUInfo,
  GetRayClusterEventRequest,
  UpdateStandardEngineResourceGroupBaseInfoRequest,
  SparkSessionBatchLogOperate,
  DescribeTablePartitionsRequest,
  TaskResultInfo,
  SparkMonitorMetrics,
  CreateDMSDatabaseResponse,
  CreateStoreLocationResponse,
  BatchSQLCostInfo,
  DescribeTablesNameRequest,
  UnbindWorkGroupsFromUserResponse,
  DescribeTaskDetailRequest,
  WorkGroupInfo,
  CreatePartitionQueueResponse,
  DLCCatalogAccess,
  ModifyUserResponse,
  DeleteScriptResponse,
  Task,
  DataEngineConfigInstanceInfo,
  DescribeSaleResourceInfoResponse,
  TableExpirationPolicy,
  CreateMetaDatabaseRequest,
  CustomConfig,
  NotebookSessions,
  CreateNotebookSessionStatementSupportBatchSQLRequest,
  UpgradeDataEngineImageResponse,
  DetachWorkGroupPolicyResponse,
  DescribeSparkSessionBatchSqlLogResponse,
  ServiceMetricsItem,
  GetRayClusterPodsRequest,
  SwitchDataEngineResponse,
  DescribeTaskResourceUsageRequest,
  ListExampleTagsRequest,
  DescribeLakeFsInfoRequest,
  UpdateStandardEngineResourceGroupConfigInfoResponse,
  CreateCHDFSBindingProductResponse,
  DescribeUserInfoRequest,
  CreateModelVersionResponse,
  PauseStandardEngineResourceGroupsResponse,
  DescribeSaleRegionsResponse,
  ModifyLabPriorityResponse,
  DeleteStandardEngineResourceGroupRequest,
  GatewayInfo,
  ResourceUsage,
  DescribeUserTypeResponse,
  ListJobsBySpecResponse,
  QueryResultResponse,
  RegisterThirdPartyAccessUserResponse,
  Env,
  DeleteThirdPartyAccessUserRequest,
  ResourceConfig,
  FlowDetail,
  DescribePartitionsResponse,
  GetRayClusterYamlRequest,
  DeleteUserResponse,
  CreateUserRoleRequest,
  RestartInferenceServiceRequest,
  DependencyPackage,
  DescribeForbiddenTableProRequest,
  CreateDataEngineResponse,
  GetRayJobPodYamlRequest,
  AssociateDatasourceHouseResponse,
  DescribeDataEngineRequest,
  CreateNotebookSessionRequest,
  KerberosInfo,
  AssociateDatasourceHouseRequest,
  CreateDataEngineRequest,
  QueryDashboardServiceListResponse,
  DescribeNotebookSessionRequest,
  UpgradeDataEngineImageRequest,
  CSV,
  ModelVersionInfo,
  GetRayClusterPodYamlRequest,
  DropDMSPartitionsResponse,
  DeleteMetaDatabaseResponse,
  DescribeUsersRequest,
  TCHousePInfo,
  CreateExportTaskResponse,
  AddUsersToWorkGroupRequest,
  CreateDataMaskStrategyRequest,
  ModifyAdvancedStoreLocationRequest,
  DescribeNotebookSessionLogRequest,
  DeleteClusterGroupResponse,
  GetOptimizerPolicyRequest,
  GetModelReadmeRequest,
  GetRayJobHistoryResponse,
  DataEngineConfigPair,
  SortOrder,
  GetLabDetailResponse,
  EventItem,
  SuspendResumeDataEngineResponse,
  ModifyUserRequest,
  DatasourceConnectionLocation,
  WrittenAdvancePolicy,
  DescribeTCLakeMetaInstanceRequest,
  AttachUserPolicyRequest,
  CancelTaskRequest,
  TextFile,
  WorkGroups,
  CreateNotebookSessionStatementResponse,
  ListTaskJobLogNameResponse,
  GenerateInternalTableResponse,
  DescribeClusterMonitorInfosResponse,
  GetRayJobPodsResponse,
  DescribeLakeFsTaskResultRequest,
  OtherCHDFSBinding,
  AlterDMSTableRequest,
  GpuSummaryItem,
  WorkerSpecDTO,
  SmartPolicy,
  CreateScriptRequest,
  DescribeUserVpcConnectionRequest,
  StartRayClusterResponse,
  GetRayClusterEventResponse,
  DataFormat,
  DescribeNotebookSessionLogResponse,
  DescribeForbiddenTableProResponse,
  DescribeWorkGroupInfoRequest,
  DescribeOtherCHDFSBindingListRequest,
  CancelTaskResponse,
  GooseFSConfig,
  TableInfo,
  DescribeFlowListResponse,
  DescribeSparkSessionBatchSQLResponse,
  DescribeResourceGroupUsageInfoResponse,
  JobPodEntity,
  DescribeSparkSessionBatchSQLCostResponse,
  ModifyPartitionQueueRequest,
  DescribeTasksOverviewResponse,
  GetJobSpecResponse,
  ListLabsRequest,
  KafkaInfo,
  FavorInfo,
  StopInferenceServiceResponse,
  TaskFullRespInfo,
  SmartOptimizerChangeTablePolicy,
  DeleteDataEngineRequest,
  StopLabResponse,
  CreateSparkSessionBatchSQLResponse,
  DescribeDMSDatabaseRequest,
  DescribeLakeFsDirSummaryRequest,
  ScheduleElasticityConf,
  DescribeMCPSubUinResponse,
  DeleteClusterGroupRequest,
  CreateSparkAppResponse,
  CreateTaskResponse,
  MountPointAssociates,
  GetRayJobEventResponse,
  AlterDMSPartitionResponse,
  UpdateStandardEngineResourceGroupResourceInfoResponse,
  DescribeTableResponse,
  CoreInfo,
  DetachUserPolicyResponse,
  UpdateLabResponse,
  GetOptimizerPolicyResponse,
  AnalysisTaskResults,
  MessageItem,
  MetaDatabaseInfo,
  GetRayJobEventLogRequest,
  GetRayJobEventRequest,
  DescribePartitionQueuesResponse,
  AlterDMSDatabaseResponse,
  CancelNotebookSessionStatementResponse,
  DataEngineInfo,
  DescribeSessionImageVersionResponse,
  LockMetaDataResponse,
  SetOptimizerPolicyResponse,
  GetLabEventResponse,
  CheckLockMetaDataResponse,
  CreateJobSpecRequest,
  AlterDMSDatabaseRequest,
  QueryDashboardServiceListRequest,
  DescribeOtherCHDFSBindingListResponse,
  GetLabHistoryResponse,
  DescribeDataEngineEventsRequest,
  DescribeDataEnginePythonSparkImagesResponse,
  DescribeViewsResponse,
  DescribeDataEnginesResponse,
  ListRayClustersResponse,
  StandardEngineResourceGroupConfigInfo,
  CopyJobSpecRequest,
  DatasourceConnectionConfig,
  UpdateRowFilterRequest,
  TColumn,
  LakeFileSystemToken,
  DeleteNativeSparkSessionRequest,
  AlterDMSTableResponse,
  PartitionDetail,
  ListModelVersionsRequest,
  CreateUserVpcConnectionResponse,
  DescribeMCPTaskResultResponse,
  DeleteUserRequest,
  DataEngineScaleInfoDetail,
  DescribeClusterGroupClustersResponse,
  DeleteDataEngineResponse,
  ReplicaInfo,
  DescribePartitionQueuesRequest,
  CosPermission,
  GetResourceConfigResponse,
  LockComponentInfo,
  GetRayJobResponse,
  QueryMonitorOverviewResponse,
  IpPortPair,
  PrestoMonitorMetrics,
  ModifyClusterPriorityRequest,
  DescribeTasksAnalysisResponse,
  RestartDataEngineResponse,
  DescribeNativeSparkSessionsResponse,
  SwitchDataEngineImageResponse,
  ModifyPartitionDescriptionRequest,
  UnlockMetaDataResponse,
  ModifyDataEngineDescriptionRequest,
  ClusterPod,
  GetRayClusterHistoryRequest,
  DescribeSparkAppTasksResponse,
  CpuSummaryItem,
  DescribeUserRegisterTimeResponse,
  DropDMSTableResponse,
  AddDMSPartitionsResponse,
  RayClusterHistory,
  TaskMonitorInfo,
  DetachUserPolicyRequest,
  ModifySparkAppRequest,
  SpecInfo,
  AssignMangedTablePropertiesRequest,
  UpdateLabRequest,
  UserIdSetOfWorkGroupId,
  InitializeTCLakeRequest,
  AlterDMSPartitionRequest,
  UpdateDataMaskStrategyResponse,
  ListInferenceServicesResponse,
  DeleteLabResponse,
  ReportHeartbeatMetaDataResponse,
  GetLabPodsResponse,
  QueryInternalTableWarehouseResponse,
  Script,
  DescribeUDFPolicyResponse,
  CheckDataEngineImageCanBeUpgradeResponse,
  CheckResourceNameRequest,
  CreateInternalTableRequest,
  TasksInfo,
  RollbackDataEngineImageRequest,
  AttachWorkGroupPolicyRequest,
  StatementOutput,
  CreateUserResponse,
  DescribeNotebookSessionStatementsRequest,
  UpdateDataEngineResponse,
  DescribeClusterGroupRequest,
  DescribeTasksOverviewRequest,
  TPartition,
  DeleteUserVpcConnectionRequest,
  ExampleEntity,
  CreateClusterGroupResponse,
  ListClusterGroupsResponse,
  DescribeTaskMonitorInfosRequest,
  LakeFsInfo,
  UpdateRayClusterRequest,
  QueryResultRequest,
  CheckDataEngineImageCanBeRollbackRequest,
  CreateTaskRequest,
  SparkSessionInfo,
  ExampleCategories,
  DescribeMCPSubUinRequest,
  DescribeClusterMonitorInfosRequest,
  CreateTableRequest,
  DescribeStandardEngineResourceGroupsRequest,
  ListInferenceModelsRequest,
  DescribeSparkSessionBatchSqlLogRequest,
  GetLabDetailRequest,
  DescribeUpdatableDataEnginesRequest,
  ModifySparkAppBatchRequest,
  ImageDto,
  DeleteTableRequest,
  DescribeStoreLocationRequest,
  AddUsersToWorkGroupResponse,
  StandardEngineResourceGroupInfo,
  CreateStandardEngineResourceGroupResponse,
  CreateDatasourceConnectionRequest,
  GrantDLCCatalogAccessRequest,
  ReportHeartbeatMetaDataRequest,
  DescribeEngineNetworksResponse,
  DescribeNetworkConnectionsRequest,
  CreateTcIcebergTableRequest,
  AttachWorkGroupPolicyResponse,
  DescribeDMSTablesRequest,
  LaunchStandardEngineResourceGroupsResponse,
  UpdateNetworkConnectionResponse,
  ListJobSpecsResponse,
  CreateSparkAppTaskResponse,
  RestartInferenceServiceResponse,
  UpdateRayJobPriorityRequest,
  DatasourceConnectionInfo,
  DescribeDataEngineImageVersionsRequest,
  BindWorkGroupsToUserResponse,
  GetRayJobPodYamlResponse,
  UpdateRayClusterResponse,
  ListExamplesResponse,
  SparkSessionBatchLog,
  DeleteScriptRequest,
  AddDMSPartitionsRequest,
  ExampleDifficulties,
  DescribeUserRolesRequest,
  ResourceInfo,
  CreateImportTaskResponse,
  DescribeClusterGroupResponse,
  StartLabRequest,
  StopRayClusterResponse,
  DeleteJobSpecResponse,
  SmartOptimizerIndexPolicy,
  SwitchDataEngineRequest,
  ModifySparkAppForTDLCRequest,
  RenewDataEngineRequest,
  DescribeDataEngineSessionParametersRequest,
  DescribeDataEngineSessionParametersResponse,
  DescribeScriptsResponse,
  GetExampleDetailRequest,
  UpdateStandardEngineResourceGroupResourceInfoRequest,
  NetworkConnection,
  CreateUserRequest,
  ModifyWorkGroupRequest,
  DescribeStandardEngineResourceGroupConfigInfoResponse,
  RunJobSpecRequest,
  GetModelFilesResponse,
  WorkGroupIdSetOfUserId,
  ListResourceConfigsRequest,
  DescribeDatabaseRequest,
  RayJobSubmitEntity,
  UpdateStandardEngineResourceGroupBaseInfoResponse,
  SmartPolicyBaseInfo,
  DescribeDatabasesResponse,
  DMSTableInfo,
  GetRayJobPodsRequest,
  DMSPartition,
  UpdateJobSpecPriorityRequest,
  DeletePartitionQueueRequest,
  WorkGroupDetailInfo,
  DescribeEngineNodeSpecRequest,
  DescribeThirdPartyAccessUserRequest,
  AssignMangedTablePropertiesResponse,
  ResourceSaleInfo,
  DataEngineImageVersion,
  ListModelVersionsResponse,
  ListInferenceEnginesRequest,
  ModifyPartitionDescriptionResponse,
  UpdateUDFPolicyRequest,
  MysqlInfo,
  CreateTasksRequest,
  Sort,
  CreateResourceConfigRequest,
  StatementInformation,
  GetInferenceModelResponse,
  DeleteResourceConfigResponse,
  DeleteThirdPartyAccessUserResponse,
  CrontabResumeSuspendStrategy,
  StopRayClusterRequest,
  DescribeViewsRequest,
  GetLabYamlRequest,
  DescribeDataEngineImageVersionsResponse,
  DescribeSaleRegionsRequest,
  CreateTcIcebergTableResponse,
  DescribeWorkGroupsRequest,
  DescribeUserDataEngineConfigRequest,
  MCPTaskInfo,
  CopyJobSpecResponse,
  CreateTasksResponse,
  TccHive,
  GrantDLCCatalogAccessResponse,
  CreateSparkAppRequest,
  UpdateRayJobPriorityResponse,
  CreateSparkSessionBatchSQLRequest,
  DescribePartitionDetailResponse,
  ListInferenceEnginesResponse,
  ListTaskJobLogDetailResponse,
  CreateMetaDatabaseResponse,
  VpcInfo,
  DescribeMCPTaskResponse,
  DeleteResourceConfigRequest,
  DescribeSubUserAccessPolicyRequest,
  HouseEventsInfo,
  LockMetaDataRequest,
  SQLTask,
  NetWork,
  ListExampleDifficultiesResponse,
  AttachUserPolicyResponse,
  CreateDMSDatabaseRequest,
  CheckModifyPartitionRequest,
  DeleteCHDFSBindingProductResponse,
  UpdateConfContext,
  CancelNotebookSessionStatementBatchRequest,
  GetInferenceServiceResponse,
  DescribeLakeFsTaskResultResponse,
  CheckModifyPartitionResponse,
  EngineSessionImage,
  DescribeTaskMonitorInfosResponse,
  DescribeTasksCostInfoRequest,
  UserDetailInfo,
  GetExampleDetailResponse,
  DescribeTaskResultResponse,
  DescribeDatasourceConnectionResponse,
  CreateDatasourceConnectionResponse,
  DescribeNotebookSessionStatementRequest,
  CreateClusterGroupRequest,
  GetRayClusterYamlResponse,
  UpdateNetworkConnectionRequest,
  WorkGroupMessage,
  DescribeUserDataEngineConfigResponse,
  DescribeSparkAppJobRequest,
  DeleteRayClusterResponse,
  DescribeTaskDetailResponse,
  CreateSparkAppForTDLCResponse,
  TCHouseD,
  CreateResultDownloadResponse,
  RestartDataEngineRequest,
  CheckQueueNameResponse,
  ListInferenceServicesRequest,
  GetModelConfigRequest,
  DescribeNotebookSessionResponse,
  DescribeSubUserAccessPolicyResponse,
  CreateRayClusterResponse,
  CreateScriptResponse,
  ModifyAdvancedStoreLocationResponse,
  CreateTasksInOrderResponse,
  TagInfo,
  GetModelReadmeResponse,
  LabResponse,
  DeleteSparkAppRequest,
  DescribeDLCCatalogAccessRequest,
  GetRayClusterPodsResponse,
  DescribeStandardEngineResourceGroupsResponse,
  ListResourceConfigsResponse,
  CreateUserRoleResponse,
  DescribeTaskLogResponse,
  DescribeTasksResponse,
  DropDMSPartitionsRequest,
  DescribeTaskResourceUsageResponse,
  CommonMetrics,
  UserRole,
  JobStatusHistory,
  DescribeUserTypeRequest,
  CheckDataEngineConfigPairsValidityRequest,
  DescribeTablePartitionsResponse,
  CSVSerde,
  GetModelConfigResponse,
  HiveInfo,
  CHDFSProductVpcInfo,
  DescribePartitionDetailRequest,
  UpdateDataEngineConfigResponse,
  CreateInferenceModelResponse,
  MetricsData,
  CheckLockMetaDataRequest,
  DeleteDataMaskStrategyResponse,
  TypeKVPair,
  AddOptimizerEnginesResponse,
  DescribeTasksRequest,
  CreateSparkAppTaskRequest,
  DeleteWorkGroupRequest,
  KVPair,
  TableBaseInfo,
  UnlockMetaDataRequest,
  GenerateCreateMangedTableSqlResponse,
  ListRayJobsResponse,
  ListTaskJobLogDetailRequest,
  DescribeSaleResourceInfoRequest,
  DescribeNativeSparkSessionsRequest,
  GetInferenceModelRequest,
  DescribeSessionImageVersionRequest,
  RevokeDLCCatalogAccessResponse,
  DeleteCHDFSBindingProductRequest,
  RenewDataEngineResponse,
  DataSourceInfo,
  UpdateUDFPolicyResponse,
  DescribeNotebookSessionsResponse,
  DescribeDMSPartitionsRequest,
  CreateDataMaskStrategyResponse,
  DataMaskStrategyInfo,
  RollbackDataEngineImageResponse,
  AddOptimizerEnginesRequest,
  CreateLabResponse,
  Partition,
  ListRayJobsRequest,
  ListJobsBySpecRequest,
  MCPTaskResultInfo,
  LaunchStandardEngineResourceGroupsRequest,
  ListRayClusterJobsRequest,
  Property,
  UserVpcConnectionInfo,
  CancelRayJobResponse,
  DescribeWorkGroupsResponse,
  SparkJobInfo,
  DescribeScriptsRequest,
  ViewBaseInfo,
  DescribeSparkAppJobResponse,
  HiveTablePartition,
  UDFPolicyInfo,
  DescribeNotebookSessionStatementResponse,
  UpdateResourceConfigResponse,
  DropDMSTableRequest,
  InferenceServiceInfo,
  UpdateJobSpecRequest,
  ListRayClusterJobsResponse,
  DescribeStandardEngineResourceGroupConfigInfoRequest,
  ListExampleCategoriesResponse,
  StreamingStatistics,
  ListImagesResponse,
  TaskResponseInfo,
  OperateEngineResourceGroupFailMessage,
  GetRayJobHistoryRequest,
  DescribeStoreLocationResponse,
  DescribeTCLakeMetaInstanceResponse,
  CreateInferenceServiceResponse,
  QueryTaskCostDetailResponse,
  UpdateInferenceModelResponse,
  NotebookSessionInfo,
  Execution,
  CreateNotebookSessionStatementSupportBatchSQLResponse,
  BindWorkGroupsToUserRequest,
  Column,
  Users,
  DescribeUDFPolicyRequest,
  ListJobSpecsRequest,
  Filter,
  DescribeLakeFsDirSummaryResponse,
  GetRayJobYamlRequest,
  GetRayJobEventLogResponse,
  DescribeUserVpcConnectionResponse,
  GetModelFilesRequest,
  FileNode,
  ExampleTag,
  DeleteWorkGroupResponse,
  RegisterThirdPartyAccessUserRequest,
  ModifySparkAppBatchResponse,
  ModifyLabPriorityRequest,
  CheckDataEngineImageCanBeRollbackResponse,
  DescribeFlowListRequest,
  DeleteNotebookSessionResponse,
  DescribeThirdPartyAccessUserResponse,
  StopLabRequest,
  DescribeNotebookSessionStatementsResponse,
  CancelSparkSessionBatchSQLResponse,
  ParallelKeyMapping,
  DatabaseInfo,
  CancelTasksResponse,
  EventLogItem,
  InitializeTCLakeResponse,
  ListImagesRequest,
  DescribeDataEnginesRequest,
  JobLogResult,
  DropDMSDatabaseResponse,
  VpcCidrBlock,
  DeleteUsersFromWorkGroupRequest,
  DMSColumnOrder,
  GetLabServiceUrlsRequest,
  UpdateEngineResourceGroupNetworkConfigInfoResponse,
  DeleteRayJobResponse,
  DeleteSparkAppResponse,
  CreateLabRequest,
  ResourceSpec,
  CreateSparkAppForTDLCRequest,
  GetRayClusterPodYamlResponse,
  FlowActivityDetail,
  DescribeResourceGroupUsageInfoRequest,
  RegionInfo,
  DescribeSparkSessionBatchSQLCostRequest,
  CreateNotebookSessionResponse,
  DataMaskStrategyPolicy,
  ModifyPartitionQueueResponse,
  DescribeDataEngineResponse,
  DataEngineScaleInfo,
  InferenceEngineInfo,
  DescribeTasksAnalysisRequest,
  ResourceConf,
  QueryTaskCostDetailRequest,
  DeleteLabRequest,
  ModifyDataEngineDescriptionResponse,
  GetJobSpecRequest,
  UpdateDataEngineConfigRequest,
  DescribeMCPTaskResultRequest,
  CheckResourceNameResponse,
  CreateInternalTableResponse,
  DescribeSparkAppTasksRequest,
  DescribeEngineNodeSpecResponse,
  AttachDataMaskPolicyResponse,
  CreateUserVpcConnectionRequest,
  UserMessage,
  DescribeMCPTaskRequest,
  SwitchDataEngineImageRequest,
  UpdateClusterGroupResponse,
  DescribeDMSTableRequest,
  ModifyGovernEventRuleRequest,
  GetLabServiceUrlsResponse,
  IcebergTablePartition,
  DatabaseResponseInfo,
  DMSColumn,
  ListExamplesRequest,
  SortField,
  DescribeResultDownloadRequest,
} from "./dlc_models"

/**
 * dlc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dlc.tencentcloudapi.com", "2021-01-25", clientConfig)
  }

  /**
   * 获取Ray集群的事件流（基于 K8s Event + CLS 日志）
   */
  async GetRayClusterEvent(
    req: GetRayClusterEventRequest,
    cb?: (error: string, rep: GetRayClusterEventResponse) => void
  ): Promise<GetRayClusterEventResponse> {
    return this.request("GetRayClusterEvent", req, cb)
  }

  /**
   * 本接口（CreateTask）用于创建并执行SQL任务。（推荐使用CreateTasks接口）
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
   * 修改用户信息
   */
  async ModifyUser(
    req: ModifyUserRequest,
    cb?: (error: string, rep: ModifyUserResponse) => void
  ): Promise<ModifyUserResponse> {
    return this.request("ModifyUser", req, cb)
  }

  /**
   * 添加用户到工作组
   */
  async AddUsersToWorkGroup(
    req: AddUsersToWorkGroupRequest,
    cb?: (error: string, rep: AddUsersToWorkGroupResponse) => void
  ): Promise<AddUsersToWorkGroupResponse> {
    return this.request("AddUsersToWorkGroup", req, cb)
  }

  /**
   * DMS元数据更新表
   */
  async AlterDMSTable(
    req: AlterDMSTableRequest,
    cb?: (error: string, rep: AlterDMSTableResponse) => void
  ): Promise<AlterDMSTableResponse> {
    return this.request("AlterDMSTable", req, cb)
  }

  /**
   * 本接口（DescribeForbiddenTablePro）用于查询被禁用的表属性列表（新）
   */
  async DescribeForbiddenTablePro(
    req?: DescribeForbiddenTableProRequest,
    cb?: (error: string, rep: DescribeForbiddenTableProResponse) => void
  ): Promise<DescribeForbiddenTableProResponse> {
    return this.request("DescribeForbiddenTablePro", req, cb)
  }

  /**
   * 获取指定资源分区详情
   */
  async DescribePartitionDetail(
    req: DescribePartitionDetailRequest,
    cb?: (error: string, rep: DescribePartitionDetailResponse) => void
  ): Promise<DescribePartitionDetailResponse> {
    return this.request("DescribePartitionDetail", req, cb)
  }

  /**
   * 获取用户详细信息
   */
  async DescribeUserInfo(
    req: DescribeUserInfoRequest,
    cb?: (error: string, rep: DescribeUserInfoResponse) => void
  ): Promise<DescribeUserInfoResponse> {
    return this.request("DescribeUserInfo", req, cb)
  }

  /**
   * 修改用户类型。只有管理员用户能够调用该接口进行操作
   */
  async ModifyUserType(
    req: ModifyUserTypeRequest,
    cb?: (error: string, rep: ModifyUserTypeResponse) => void
  ): Promise<ModifyUserTypeResponse> {
    return this.request("ModifyUserType", req, cb)
  }

  /**
   * 启动标准引擎资源组
   */
  async LaunchStandardEngineResourceGroups(
    req: LaunchStandardEngineResourceGroupsRequest,
    cb?: (error: string, rep: LaunchStandardEngineResourceGroupsResponse) => void
  ): Promise<LaunchStandardEngineResourceGroupsResponse> {
    return this.request("LaunchStandardEngineResourceGroups", req, cb)
  }

  /**
   * 该接口（DescribleTasks）用于查询任务列表
   */
  async DescribeTaskList(
    req: DescribeTaskListRequest,
    cb?: (error: string, rep: DescribeTaskListResponse) => void
  ): Promise<DescribeTaskListResponse> {
    return this.request("DescribeTaskList", req, cb)
  }

  /**
   * 获取工作组详细信息
   */
  async DescribeWorkGroupInfo(
    req: DescribeWorkGroupInfoRequest,
    cb?: (error: string, rep: DescribeWorkGroupInfoResponse) => void
  ): Promise<DescribeWorkGroupInfoResponse> {
    return this.request("DescribeWorkGroupInfo", req, cb)
  }

  /**
   * 查询任务监控指标信息
   */
  async DescribeTaskMonitorInfos(
    req: DescribeTaskMonitorInfosRequest,
    cb?: (error: string, rep: DescribeTaskMonitorInfosResponse) => void
  ): Promise<DescribeTaskMonitorInfosResponse> {
    return this.request("DescribeTaskMonitorInfos", req, cb)
  }

  /**
   * 更新spark作业
   */
  async ModifySparkApp(
    req: ModifySparkAppRequest,
    cb?: (error: string, rep: ModifySparkAppResponse) => void
  ): Promise<ModifySparkAppResponse> {
    return this.request("ModifySparkApp", req, cb)
  }

  /**
   * 本接口（DescribeNotebookSession）用于查询交互式 session详情信息
   */
  async DescribeNotebookSession(
    req: DescribeNotebookSessionRequest,
    cb?: (error: string, rep: DescribeNotebookSessionResponse) => void
  ): Promise<DescribeNotebookSessionResponse> {
    return this.request("DescribeNotebookSession", req, cb)
  }

  /**
   * 本接口（CreateNotebookSession）用于创建交互式session（notebook）
   */
  async CreateNotebookSession(
    req: CreateNotebookSessionRequest,
    cb?: (error: string, rep: CreateNotebookSessionResponse) => void
  ): Promise<CreateNotebookSessionResponse> {
    return this.request("CreateNotebookSession", req, cb)
  }

  /**
   * 查询数据脱敏列表接口
   */
  async DescribeDataMaskStrategies(
    req: DescribeDataMaskStrategiesRequest,
    cb?: (error: string, rep: DescribeDataMaskStrategiesResponse) => void
  ): Promise<DescribeDataMaskStrategiesResponse> {
    return this.request("DescribeDataMaskStrategies", req, cb)
  }

  /**
   * 本接口（DeleteMetaDatabase）用于一键删除元数据库
   */
  async DeleteMetaDatabase(
    req: DeleteMetaDatabaseRequest,
    cb?: (error: string, rep: DeleteMetaDatabaseResponse) => void
  ): Promise<DeleteMetaDatabaseResponse> {
    return this.request("DeleteMetaDatabase", req, cb)
  }

  /**
   * 删除工作组
   */
  async DeleteWorkGroup(
    req: DeleteWorkGroupRequest,
    cb?: (error: string, rep: DeleteWorkGroupResponse) => void
  ): Promise<DeleteWorkGroupResponse> {
    return this.request("DeleteWorkGroup", req, cb)
  }

  /**
   * 元数据解锁
   */
  async UnlockMetaData(
    req: UnlockMetaDataRequest,
    cb?: (error: string, rep: UnlockMetaDataResponse) => void
  ): Promise<UnlockMetaDataResponse> {
    return this.request("UnlockMetaData", req, cb)
  }

  /**
   * 本接口根据名称用于获取数据引擎详细信息
   */
  async DescribeDataEngine(
    req: DescribeDataEngineRequest,
    cb?: (error: string, rep: DescribeDataEngineResponse) => void
  ): Promise<DescribeDataEngineResponse> {
    return this.request("DescribeDataEngine", req, cb)
  }

  /**
   * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
   */
  async CreateStoreLocation(
    req: CreateStoreLocationRequest,
    cb?: (error: string, rep: CreateStoreLocationResponse) => void
  ): Promise<CreateStoreLocationResponse> {
    return this.request("CreateStoreLocation", req, cb)
  }

  /**
   * 新增资源队列：在指定分区下创建一个新的资源队列，支持设置队列名称、描述、资源规格列表和队列类型。
   */
  async CreatePartitionQueue(
    req: CreatePartitionQueueRequest,
    cb?: (error: string, rep: CreatePartitionQueueResponse) => void
  ): Promise<CreatePartitionQueueResponse> {
    return this.request("CreatePartitionQueue", req, cb)
  }

  /**
   * 获取数据实验室Pod的YAML内容
   */
  async GetLabPodYaml(
    req: GetLabPodYamlRequest,
    cb?: (error: string, rep: GetLabPodYamlResponse) => void
  ): Promise<GetLabPodYamlResponse> {
    return this.request("GetLabPodYaml", req, cb)
  }

  /**
   * 根据 exampleId 获取单个案例详情
   */
  async GetExampleDetail(
    req: GetExampleDetailRequest,
    cb?: (error: string, rep: GetExampleDetailResponse) => void
  ): Promise<GetExampleDetailResponse> {
    return this.request("GetExampleDetail", req, cb)
  }

  /**
   * 本接口（CreateNotebookSessionStatementSupportBatchSQL）用于创建交互式session并执行SQL任务
   */
  async CreateNotebookSessionStatementSupportBatchSQL(
    req: CreateNotebookSessionStatementSupportBatchSQLRequest,
    cb?: (error: string, rep: CreateNotebookSessionStatementSupportBatchSQLResponse) => void
  ): Promise<CreateNotebookSessionStatementSupportBatchSQLResponse> {
    return this.request("CreateNotebookSessionStatementSupportBatchSQL", req, cb)
  }

  /**
   * 案例列表
   */
  async ListExamples(
    req: ListExamplesRequest,
    cb?: (error: string, rep: ListExamplesResponse) => void
  ): Promise<ListExamplesResponse> {
    return this.request("ListExamples", req, cb)
  }

  /**
   * 切换主备集群
   */
  async SwitchDataEngine(
    req: SwitchDataEngineRequest,
    cb?: (error: string, rep: SwitchDataEngineResponse) => void
  ): Promise<SwitchDataEngineResponse> {
    return this.request("SwitchDataEngine", req, cb)
  }

  /**
   * 本接口（DescribeDataEngines）用于查询DataEngines信息列表.
   */
  async DescribeDataEngines(
    req: DescribeDataEnginesRequest,
    cb?: (error: string, rep: DescribeDataEnginesResponse) => void
  ): Promise<DescribeDataEnginesResponse> {
    return this.request("DescribeDataEngines", req, cb)
  }

  /**
   * 创建数据源
   */
  async CreateDatasourceConnection(
    req: CreateDatasourceConnectionRequest,
    cb?: (error: string, rep: CreateDatasourceConnectionResponse) => void
  ): Promise<CreateDatasourceConnectionResponse> {
    return this.request("CreateDatasourceConnection", req, cb)
  }

  /**
   * 该接口（DescribeTaskDetail）用于查询历史任务详情
   */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
   * 该接口（DescribeUserRegisterTime）用于查询当前用户注册时间，并判断是否是老用户。
   */
  async DescribeUserRegisterTime(
    req?: DescribeUserRegisterTimeRequest,
    cb?: (error: string, rep: DescribeUserRegisterTimeResponse) => void
  ): Promise<DescribeUserRegisterTimeResponse> {
    return this.request("DescribeUserRegisterTime", req, cb)
  }

  /**
   * 本接口（DescribeNotebookSessions）用于查询交互式 session列表
   */
  async DescribeNotebookSessions(
    req: DescribeNotebookSessionsRequest,
    cb?: (error: string, rep: DescribeNotebookSessionsResponse) => void
  ): Promise<DescribeNotebookSessionsResponse> {
    return this.request("DescribeNotebookSessions", req, cb)
  }

  /**
   * 根据集群组 ID 获取集群组详情。支持通过 IncludeDeleted 参数控制是否返回已软删除的记录（用于悬挂 cluster 回显场景）。
   */
  async DescribeClusterGroup(
    req: DescribeClusterGroupRequest,
    cb?: (error: string, rep: DescribeClusterGroupResponse) => void
  ): Promise<DescribeClusterGroupResponse> {
    return this.request("DescribeClusterGroup", req, cb)
  }

  /**
   * DMS元数据获取分区
   */
  async DescribeDMSPartitions(
    req: DescribeDMSPartitionsRequest,
    cb?: (error: string, rep: DescribeDMSPartitionsResponse) => void
  ): Promise<DescribeDMSPartitionsResponse> {
    return this.request("DescribeDMSPartitions", req, cb)
  }

  /**
   * 本接口（CancelTask），用于取消任务
   */
  async CancelTask(
    req: CancelTaskRequest,
    cb?: (error: string, rep: CancelTaskResponse) => void
  ): Promise<CancelTaskResponse> {
    return this.request("CancelTask", req, cb)
  }

  /**
   * 删除数据脱敏策略
   */
  async DeleteDataMaskStrategy(
    req: DeleteDataMaskStrategyRequest,
    cb?: (error: string, rep: DeleteDataMaskStrategyResponse) => void
  ): Promise<DeleteDataMaskStrategyResponse> {
    return this.request("DeleteDataMaskStrategy", req, cb)
  }

  /**
   * 查询DLC Catalog授权列表
   */
  async DescribeDLCCatalogAccess(
    req: DescribeDLCCatalogAccessRequest,
    cb?: (error: string, rep: DescribeDLCCatalogAccessResponse) => void
  ): Promise<DescribeDLCCatalogAccessResponse> {
    return this.request("DescribeDLCCatalogAccess", req, cb)
  }

  /**
   * 列出所有资源配置模板
   */
  async ListResourceConfigs(
    req: ListResourceConfigsRequest,
    cb?: (error: string, rep: ListResourceConfigsResponse) => void
  ): Promise<ListResourceConfigsResponse> {
    return this.request("ListResourceConfigs", req, cb)
  }

  /**
   * 删除数据引擎
   */
  async DeleteDataEngine(
    req: DeleteDataEngineRequest,
    cb?: (error: string, rep: DeleteDataEngineResponse) => void
  ): Promise<DeleteDataEngineResponse> {
    return this.request("DeleteDataEngine", req, cb)
  }

  /**
   * 根据资源组获取spark session列表
   */
  async DescribeNativeSparkSessions(
    req: DescribeNativeSparkSessionsRequest,
    cb?: (error: string, rep: DescribeNativeSparkSessionsResponse) => void
  ): Promise<DescribeNativeSparkSessionsResponse> {
    return this.request("DescribeNativeSparkSessions", req, cb)
  }

  /**
   * 获取用户类型
   */
  async DescribeUserType(
    req: DescribeUserTypeRequest,
    cb?: (error: string, rep: DescribeUserTypeResponse) => void
  ): Promise<DescribeUserTypeResponse> {
    return this.request("DescribeUserType", req, cb)
  }

  /**
   * 分页查询作业配置列表
   */
  async ListJobSpecs(
    req: ListJobSpecsRequest,
    cb?: (error: string, rep: ListJobSpecsResponse) => void
  ): Promise<ListJobSpecsResponse> {
    return this.request("ListJobSpecs", req, cb)
  }

  /**
   * 获取工作组列表
   */
  async DescribeWorkGroups(
    req: DescribeWorkGroupsRequest,
    cb?: (error: string, rep: DescribeWorkGroupsResponse) => void
  ): Promise<DescribeWorkGroupsResponse> {
    return this.request("DescribeWorkGroups", req, cb)
  }

  /**
   * 更新标准引擎资源组基础信息
   */
  async UpdateStandardEngineResourceGroupResourceInfo(
    req: UpdateStandardEngineResourceGroupResourceInfoRequest,
    cb?: (error: string, rep: UpdateStandardEngineResourceGroupResourceInfoResponse) => void
  ): Promise<UpdateStandardEngineResourceGroupResourceInfoResponse> {
    return this.request("UpdateStandardEngineResourceGroupResourceInfo", req, cb)
  }

  /**
   * 续费数据引擎
   */
  async RenewDataEngine(
    req: RenewDataEngineRequest,
    cb?: (error: string, rep: RenewDataEngineResponse) => void
  ): Promise<RenewDataEngineResponse> {
    return this.request("RenewDataEngine", req, cb)
  }

  /**
   * 新增资源包
   */
  async CreatePartition(
    req: CreatePartitionRequest,
    cb?: (error: string, rep: CreatePartitionResponse) => void
  ): Promise<CreatePartitionResponse> {
    return this.request("CreatePartition", req, cb)
  }

  /**
   * 查询网络配置列表
   */
  async DescribeNetworkConnections(
    req: DescribeNetworkConnectionsRequest,
    cb?: (error: string, rep: DescribeNetworkConnectionsResponse) => void
  ): Promise<DescribeNetworkConnectionsResponse> {
    return this.request("DescribeNetworkConnections", req, cb)
  }

  /**
   * 创建标准引擎资源组
   */
  async CreateStandardEngineResourceGroup(
    req: CreateStandardEngineResourceGroupRequest,
    cb?: (error: string, rep: CreateStandardEngineResourceGroupResponse) => void
  ): Promise<CreateStandardEngineResourceGroupResponse> {
    return this.request("CreateStandardEngineResourceGroup", req, cb)
  }

  /**
   * 该接口（DescribeTasks）用于查询任务列表
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 获取单个推理服务详情
   */
  async GetInferenceService(
    req: GetInferenceServiceRequest,
    cb?: (error: string, rep: GetInferenceServiceResponse) => void
  ): Promise<GetInferenceServiceResponse> {
    return this.request("GetInferenceService", req, cb)
  }

  /**
   * 该接口（DeleteScript）用于删除sql脚本。
   */
  async DeleteScript(
    req: DeleteScriptRequest,
    cb?: (error: string, rep: DeleteScriptResponse) => void
  ): Promise<DeleteScriptResponse> {
    return this.request("DeleteScript", req, cb)
  }

  /**
   * 本接口（DescribeDataEngineSessionParameters）用于获取指定小版本下的Session配置。
   */
  async DescribeDataEngineSessionParameters(
    req: DescribeDataEngineSessionParametersRequest,
    cb?: (error: string, rep: DescribeDataEngineSessionParametersResponse) => void
  ): Promise<DescribeDataEngineSessionParametersResponse> {
    return this.request("DescribeDataEngineSessionParameters", req, cb)
  }

  /**
   * 获取所有案例分类
   */
  async ListExampleCategories(
    req: ListExampleCategoriesRequest,
    cb?: (error: string, rep: ListExampleCategoriesResponse) => void
  ): Promise<ListExampleCategoriesResponse> {
    return this.request("ListExampleCategories", req, cb)
  }

  /**
   * 启动Spark作业
   */
  async CreateSparkAppTask(
    req: CreateSparkAppTaskRequest,
    cb?: (error: string, rep: CreateSparkAppTaskResponse) => void
  ): Promise<CreateSparkAppTaskResponse> {
    return this.request("CreateSparkAppTask", req, cb)
  }

  /**
   * 此接口（DescribeOtherCHDFSBindingList）用于查询其他产品元数据加速桶绑定列表
   */
  async DescribeOtherCHDFSBindingList(
    req: DescribeOtherCHDFSBindingListRequest,
    cb?: (error: string, rep: DescribeOtherCHDFSBindingListResponse) => void
  ): Promise<DescribeOtherCHDFSBindingListResponse> {
    return this.request("DescribeOtherCHDFSBindingList", req, cb)
  }

  /**
   * 修改分区描述
   */
  async ModifyPartitionDescription(
    req: ModifyPartitionDescriptionRequest,
    cb?: (error: string, rep: ModifyPartitionDescriptionResponse) => void
  ): Promise<ModifyPartitionDescriptionResponse> {
    return this.request("ModifyPartitionDescription", req, cb)
  }

  /**
   * 更新标准引擎资源组基础信息
   */
  async UpdateStandardEngineResourceGroupBaseInfo(
    req: UpdateStandardEngineResourceGroupBaseInfoRequest,
    cb?: (error: string, rep: UpdateStandardEngineResourceGroupBaseInfoResponse) => void
  ): Promise<UpdateStandardEngineResourceGroupBaseInfoResponse> {
    return this.request("UpdateStandardEngineResourceGroupBaseInfo", req, cb)
  }

  /**
   * 修改集群的调度优先级（1-9，数字越大优先级越高）
   */
  async ModifyClusterPriority(
    req: ModifyClusterPriorityRequest,
    cb?: (error: string, rep: ModifyClusterPriorityResponse) => void
  ): Promise<ModifyClusterPriorityResponse> {
    return this.request("ModifyClusterPriority", req, cb)
  }

  /**
   * 查询托管存储指定目录的Summary
   */
  async DescribeLakeFsDirSummary(
    req?: DescribeLakeFsDirSummaryRequest,
    cb?: (error: string, rep: DescribeLakeFsDirSummaryResponse) => void
  ): Promise<DescribeLakeFsDirSummaryResponse> {
    return this.request("DescribeLakeFsDirSummary", req, cb)
  }

  /**
   * 本接口（DescribeDatabases）用于查询数据库列表。
   */
  async DescribeDatabases(
    req: DescribeDatabasesRequest,
    cb?: (error: string, rep: DescribeDatabasesResponse) => void
  ): Promise<DescribeDatabasesResponse> {
    return this.request("DescribeDatabases", req, cb)
  }

  /**
   * 获取RayJob的YAML内容
   */
  async GetRayJobYaml(
    req: GetRayJobYamlRequest,
    cb?: (error: string, rep: GetRayJobYamlResponse) => void
  ): Promise<GetRayJobYamlResponse> {
    return this.request("GetRayJobYaml", req, cb)
  }

  /**
   * 获取实验室详情
   */
  async GetLabDetail(
    req: GetLabDetailRequest,
    cb?: (error: string, rep: GetLabDetailResponse) => void
  ): Promise<GetLabDetailResponse> {
    return this.request("GetLabDetail", req, cb)
  }

  /**
   * DMS元数据更新分区
   */
  async AlterDMSPartition(
    req: AlterDMSPartitionRequest,
    cb?: (error: string, rep: AlterDMSPartitionResponse) => void
  ): Promise<AlterDMSPartitionResponse> {
    return this.request("AlterDMSPartition", req, cb)
  }

  /**
   * 计算组关联 cluster 使用情况响应
   */
  async DescribeClusterGroupClusters(
    req: DescribeClusterGroupClustersRequest,
    cb?: (error: string, rep: DescribeClusterGroupClustersResponse) => void
  ): Promise<DescribeClusterGroupClustersResponse> {
    return this.request("DescribeClusterGroupClusters", req, cb)
  }

  /**
   * 获取集群Pod的YAML内容
   */
  async GetRayClusterPodYaml(
    req: GetRayClusterPodYamlRequest,
    cb?: (error: string, rep: GetRayClusterPodYamlResponse) => void
  ): Promise<GetRayClusterPodYamlResponse> {
    return this.request("GetRayClusterPodYaml", req, cb)
  }

  /**
   * 本接口（RegisterThirdPartyAccessUser）查询开通第三方平台访问的用户信息
   */
  async DescribeThirdPartyAccessUser(
    req?: DescribeThirdPartyAccessUserRequest,
    cb?: (error: string, rep: DescribeThirdPartyAccessUserResponse) => void
  ): Promise<DescribeThirdPartyAccessUserResponse> {
    return this.request("DescribeThirdPartyAccessUser", req, cb)
  }

  /**
   * 获取模型文件树（默认最新版本）
   */
  async GetModelFiles(
    req: GetModelFilesRequest,
    cb?: (error: string, rep: GetModelFilesResponse) => void
  ): Promise<GetModelFilesResponse> {
    return this.request("GetModelFiles", req, cb)
  }

  /**
   * 获取实验室的状态变更历史记录
   */
  async GetLabHistory(
    req: GetLabHistoryRequest,
    cb?: (error: string, rep: GetLabHistoryResponse) => void
  ): Promise<GetLabHistoryResponse> {
    return this.request("GetLabHistory", req, cb)
  }

  /**
   * 重启引擎
   */
  async RestartDataEngine(
    req: RestartDataEngineRequest,
    cb?: (error: string, rep: RestartDataEngineResponse) => void
  ): Promise<RestartDataEngineResponse> {
    return this.request("RestartDataEngine", req, cb)
  }

  /**
   * 创建用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 获取单个模型详情
   */
  async GetInferenceModel(
    req: GetInferenceModelRequest,
    cb?: (error: string, rep: GetInferenceModelResponse) => void
  ): Promise<GetInferenceModelResponse> {
    return this.request("GetInferenceModel", req, cb)
  }

  /**
   * 获取集群状态历史
   */
  async GetRayClusterHistory(
    req: GetRayClusterHistoryRequest,
    cb?: (error: string, rep: GetRayClusterHistoryResponse) => void
  ): Promise<GetRayClusterHistoryResponse> {
    return this.request("GetRayClusterHistory", req, cb)
  }

  /**
   * 本接口（DescribeTables）用于查询数据表列表。
   */
  async DescribeTables(
    req: DescribeTablesRequest,
    cb?: (error: string, rep: DescribeTablesResponse) => void
  ): Promise<DescribeTablesResponse> {
    return this.request("DescribeTables", req, cb)
  }

  /**
   * 本接口（ListTaskJobLogName）用于获取spark-jar日志名称列表
   */
  async ListTaskJobLogName(
    req: ListTaskJobLogNameRequest,
    cb?: (error: string, rep: ListTaskJobLogNameResponse) => void
  ): Promise<ListTaskJobLogNameResponse> {
    return this.request("ListTaskJobLogName", req, cb)
  }

  /**
   * 切换引擎镜像版本
   */
  async SwitchDataEngineImage(
    req: SwitchDataEngineImageRequest,
    cb?: (error: string, rep: SwitchDataEngineImageResponse) => void
  ): Promise<SwitchDataEngineImageResponse> {
    return this.request("SwitchDataEngineImage", req, cb)
  }

  /**
   * 绑定数据源和队列
   */
  async AssociateDatasourceHouse(
    req: AssociateDatasourceHouseRequest,
    cb?: (error: string, rep: AssociateDatasourceHouseResponse) => void
  ): Promise<AssociateDatasourceHouseResponse> {
    return this.request("AssociateDatasourceHouse", req, cb)
  }

  /**
   * 列出推理引擎
   */
  async ListInferenceEngines(
    req: ListInferenceEnginesRequest,
    cb?: (error: string, rep: ListInferenceEnginesResponse) => void
  ): Promise<ListInferenceEnginesResponse> {
    return this.request("ListInferenceEngines", req, cb)
  }

  /**
   * 获取LakeFs上task执行结果访问信息
   */
  async DescribeLakeFsTaskResult(
    req: DescribeLakeFsTaskResultRequest,
    cb?: (error: string, rep: DescribeLakeFsTaskResultResponse) => void
  ): Promise<DescribeLakeFsTaskResultResponse> {
    return this.request("DescribeLakeFsTaskResult", req, cb)
  }

  /**
   * 添加数据优化资源
   */
  async AddOptimizerEngines(
    req: AddOptimizerEnginesRequest,
    cb?: (error: string, rep: AddOptimizerEnginesResponse) => void
  ): Promise<AddOptimizerEnginesResponse> {
    return this.request("AddOptimizerEngines", req, cb)
  }

  /**
   * 本接口（DescribeDataEngineImageVersions）用于获取独享集群大版本镜像列表。
   */
  async DescribeDataEngineImageVersions(
    req: DescribeDataEngineImageVersionsRequest,
    cb?: (error: string, rep: DescribeDataEngineImageVersionsResponse) => void
  ): Promise<DescribeDataEngineImageVersionsResponse> {
    return this.request("DescribeDataEngineImageVersions", req, cb)
  }

  /**
   * 查询sql查询界面高级设置
   */
  async DescribeAdvancedStoreLocation(
    req?: DescribeAdvancedStoreLocationRequest,
    cb?: (error: string, rep: DescribeAdvancedStoreLocationResponse) => void
  ): Promise<DescribeAdvancedStoreLocationResponse> {
    return this.request("DescribeAdvancedStoreLocation", req, cb)
  }

  /**
   * 修改表备注
   */
  async AlterTableComment(
    req: AlterTableCommentRequest,
    cb?: (error: string, rep: AlterTableCommentResponse) => void
  ): Promise<AlterTableCommentResponse> {
    return this.request("AlterTableComment", req, cb)
  }

  /**
   * 查询spark作业列表
   */
  async DescribeSparkAppJobs(
    req: DescribeSparkAppJobsRequest,
    cb?: (error: string, rep: DescribeSparkAppJobsResponse) => void
  ): Promise<DescribeSparkAppJobsResponse> {
    return this.request("DescribeSparkAppJobs", req, cb)
  }

  /**
   * 分页查询某作业配置下产生的所有作业实例
   */
  async ListJobsBySpec(
    req: ListJobsBySpecRequest,
    cb?: (error: string, rep: ListJobsBySpecResponse) => void
  ): Promise<ListJobsBySpecResponse> {
    return this.request("ListJobsBySpec", req, cb)
  }

  /**
   * 获取用户列表信息
   */
  async DescribeUsers(
    req: DescribeUsersRequest,
    cb?: (error: string, rep: DescribeUsersResponse) => void
  ): Promise<DescribeUsersResponse> {
    return this.request("DescribeUsers", req, cb)
  }

  /**
   * 本接口（CreateTasks），用于批量创建并执行SQL任务
   */
  async CreateTasks(
    req: CreateTasksRequest,
    cb?: (error: string, rep: CreateTasksResponse) => void
  ): Promise<CreateTasksResponse> {
    return this.request("CreateTasks", req, cb)
  }

  /**
   * 该接口（DescribeScripts）用于查询SQL脚本列表
   */
  async DescribeScripts(
    req: DescribeScriptsRequest,
    cb?: (error: string, rep: DescribeScriptsResponse) => void
  ): Promise<DescribeScriptsResponse> {
    return this.request("DescribeScripts", req, cb)
  }

  /**
   * 建表
   */
  async GenerateInternalTable(
    req: GenerateInternalTableRequest,
    cb?: (error: string, rep: GenerateInternalTableResponse) => void
  ): Promise<GenerateInternalTableResponse> {
    return this.request("GenerateInternalTable", req, cb)
  }

  /**
   * 更新标准引擎资源组基础信息
   */
  async UpdateStandardEngineResourceGroupConfigInfo(
    req: UpdateStandardEngineResourceGroupConfigInfoRequest,
    cb?: (error: string, rep: UpdateStandardEngineResourceGroupConfigInfoResponse) => void
  ): Promise<UpdateStandardEngineResourceGroupConfigInfoResponse> {
    return this.request("UpdateStandardEngineResourceGroupConfigInfo", req, cb)
  }

  /**
   * 查询任务监控指标信息
   */
  async DescribeClusterMonitorInfos(
    req: DescribeClusterMonitorInfosRequest,
    cb?: (error: string, rep: DescribeClusterMonitorInfosResponse) => void
  ): Promise<DescribeClusterMonitorInfosResponse> {
    return this.request("DescribeClusterMonitorInfos", req, cb)
  }

  /**
   * 创建实验室
   */
  async CreateLab(
    req: CreateLabRequest,
    cb?: (error: string, rep: CreateLabResponse) => void
  ): Promise<CreateLabResponse> {
    return this.request("CreateLab", req, cb)
  }

  /**
   * 修改工作组信息
   */
  async ModifyWorkGroup(
    req: ModifyWorkGroupRequest,
    cb?: (error: string, rep: ModifyWorkGroupResponse) => void
  ): Promise<ModifyWorkGroupResponse> {
    return this.request("ModifyWorkGroup", req, cb)
  }

  /**
   * 本接口（DescribeTables）用于查询数据表名称列表
   */
  async DescribeTablesName(
    req: DescribeTablesNameRequest,
    cb?: (error: string, rep: DescribeTablesNameResponse) => void
  ): Promise<DescribeTablesNameResponse> {
    return this.request("DescribeTablesName", req, cb)
  }

  /**
   * 创建推理模型（模型上传）
   */
  async CreateInferenceModel(
    req: CreateInferenceModelRequest,
    cb?: (error: string, rep: CreateInferenceModelResponse) => void
  ): Promise<CreateInferenceModelResponse> {
    return this.request("CreateInferenceModel", req, cb)
  }

  /**
   * 暂停标准引擎session
   */
  async PauseStandardEngineResourceGroups(
    req: PauseStandardEngineResourceGroupsRequest,
    cb?: (error: string, rep: PauseStandardEngineResourceGroupsResponse) => void
  ): Promise<PauseStandardEngineResourceGroupsResponse> {
    return this.request("PauseStandardEngineResourceGroups", req, cb)
  }

  /**
   * 上报元数据心跳
   */
  async ReportHeartbeatMetaData(
    req: ReportHeartbeatMetaDataRequest,
    cb?: (error: string, rep: ReportHeartbeatMetaDataResponse) => void
  ): Promise<ReportHeartbeatMetaDataResponse> {
    return this.request("ReportHeartbeatMetaData", req, cb)
  }

  /**
   * 本接口（DescribeSparkSessionBatchSQLCost）用于查询Spark SQL批任务消耗
   */
  async DescribeSparkSessionBatchSQLCost(
    req: DescribeSparkSessionBatchSQLCostRequest,
    cb?: (error: string, rep: DescribeSparkSessionBatchSQLCostResponse) => void
  ): Promise<DescribeSparkSessionBatchSQLCostResponse> {
    return this.request("DescribeSparkSessionBatchSQLCost", req, cb)
  }

  /**
   * 查询可更新配置的引擎列表
   */
  async DescribeUpdatableDataEngines(
    req: DescribeUpdatableDataEnginesRequest,
    cb?: (error: string, rep: DescribeUpdatableDataEnginesResponse) => void
  ): Promise<DescribeUpdatableDataEnginesResponse> {
    return this.request("DescribeUpdatableDataEngines", req, cb)
  }

  /**
   * 创建模型新版本
   */
  async CreateModelVersion(
    req: CreateModelVersionRequest,
    cb?: (error: string, rep: CreateModelVersionResponse) => void
  ): Promise<CreateModelVersionResponse> {
    return this.request("CreateModelVersion", req, cb)
  }

  /**
   * 校验资源名称合法性
   */
  async CheckResourceName(
    req: CheckResourceNameRequest,
    cb?: (error: string, rep: CheckResourceNameResponse) => void
  ): Promise<CheckResourceNameResponse> {
    return this.request("CheckResourceName", req, cb)
  }

  /**
   * 撤销DLC Catalog访问权限
   */
  async RevokeDLCCatalogAccess(
    req: RevokeDLCCatalogAccessRequest,
    cb?: (error: string, rep: RevokeDLCCatalogAccessResponse) => void
  ): Promise<RevokeDLCCatalogAccessResponse> {
    return this.request("RevokeDLCCatalogAccess", req, cb)
  }

  /**
   * 创建托管存储内表（该接口已废弃）
   */
  async CreateInternalTable(
    req: CreateInternalTableRequest,
    cb?: (error: string, rep: CreateInternalTableResponse) => void
  ): Promise<CreateInternalTableResponse> {
    return this.request("CreateInternalTable", req, cb)
  }

  /**
   * 生成创建托管表语句
   */
  async GenerateCreateMangedTableSql(
    req: GenerateCreateMangedTableSqlRequest,
    cb?: (error: string, rep: GenerateCreateMangedTableSqlResponse) => void
  ): Promise<GenerateCreateMangedTableSqlResponse> {
    return this.request("GenerateCreateMangedTableSql", req, cb)
  }

  /**
   * 绑定鉴权策略到工作组
   */
  async AttachWorkGroupPolicy(
    req: AttachWorkGroupPolicyRequest,
    cb?: (error: string, rep: AttachWorkGroupPolicyResponse) => void
  ): Promise<AttachWorkGroupPolicyResponse> {
    return this.request("AttachWorkGroupPolicy", req, cb)
  }

  /**
   * 查询引擎规格详情
   */
  async DescribeDataEnginesScaleDetail(
    req: DescribeDataEnginesScaleDetailRequest,
    cb?: (error: string, rep: DescribeDataEnginesScaleDetailResponse) => void
  ): Promise<DescribeDataEnginesScaleDetailResponse> {
    return this.request("DescribeDataEnginesScaleDetail", req, cb)
  }

  /**
   * 获取所有案例分类
   */
  async ListExampleDifficulties(
    req: ListExampleDifficultiesRequest,
    cb?: (error: string, rep: ListExampleDifficultiesResponse) => void
  ): Promise<ListExampleDifficultiesResponse> {
    return this.request("ListExampleDifficulties", req, cb)
  }

  /**
   * 创建spark作业
   */
  async CreateSparkApp(
    req: CreateSparkAppRequest,
    cb?: (error: string, rep: CreateSparkAppResponse) => void
  ): Promise<CreateSparkAppResponse> {
    return this.request("CreateSparkApp", req, cb)
  }

  /**
   * 创建用户vpc连接到指定引擎网络
   */
  async CreateUserVpcConnection(
    req: CreateUserVpcConnectionRequest,
    cb?: (error: string, rep: CreateUserVpcConnectionResponse) => void
  ): Promise<CreateUserVpcConnectionResponse> {
    return this.request("CreateUserVpcConnection", req, cb)
  }

  /**
   * 此接口用于更新行过滤规则。注意只能更新过滤规则，不能更新规格对象catalog，database和table。
   */
  async UpdateRowFilter(
    req: UpdateRowFilterRequest,
    cb?: (error: string, rep: UpdateRowFilterResponse) => void
  ): Promise<UpdateRowFilterResponse> {
    return this.request("UpdateRowFilter", req, cb)
  }

  /**
   * 基于指定作业配置提交一次作业实例
   */
  async RunJobSpec(
    req: RunJobSpecRequest,
    cb?: (error: string, rep: RunJobSpecResponse) => void
  ): Promise<RunJobSpecResponse> {
    return this.request("RunJobSpec", req, cb)
  }

  /**
   * 删除标准引擎资源组
   */
  async DeleteStandardEngineResourceGroup(
    req: DeleteStandardEngineResourceGroupRequest,
    cb?: (error: string, rep: DeleteStandardEngineResourceGroupResponse) => void
  ): Promise<DeleteStandardEngineResourceGroupResponse> {
    return this.request("DeleteStandardEngineResourceGroup", req, cb)
  }

  /**
   * 本接口（CreateDatabase）用于生成建库SQL语句。
   */
  async CreateDatabase(
    req: CreateDatabaseRequest,
    cb?: (error: string, rep: CreateDatabaseResponse) => void
  ): Promise<CreateDatabaseResponse> {
    return this.request("CreateDatabase", req, cb)
  }

  /**
   * 回滚引擎镜像版本
   */
  async RollbackDataEngineImage(
    req: RollbackDataEngineImageRequest,
    cb?: (error: string, rep: RollbackDataEngineImageResponse) => void
  ): Promise<RollbackDataEngineImageResponse> {
    return this.request("RollbackDataEngineImage", req, cb)
  }

  /**
   * 获取指定大版本下所有小版本的所有内置镜像
   */
  async DescribeSessionImageVersion(
    req: DescribeSessionImageVersionRequest,
    cb?: (error: string, rep: DescribeSessionImageVersionResponse) => void
  ): Promise<DescribeSessionImageVersionResponse> {
    return this.request("DescribeSessionImageVersion", req, cb)
  }

  /**
   * 本接口（DescribeSubUserAccessPolicy）用于开通了第三方平台访问的用户，查询其子用户的访问策略
   */
  async DescribeSubUserAccessPolicy(
    req?: DescribeSubUserAccessPolicyRequest,
    cb?: (error: string, rep: DescribeSubUserAccessPolicyResponse) => void
  ): Promise<DescribeSubUserAccessPolicyResponse> {
    return this.request("DescribeSubUserAccessPolicy", req, cb)
  }

  /**
   * 本接口（CreateSparkSessionBatchSQL）用于向Spark作业引擎提交Spark SQL批任务。
   */
  async CreateSparkSessionBatchSQL(
    req: CreateSparkSessionBatchSQLRequest,
    cb?: (error: string, rep: CreateSparkSessionBatchSQLResponse) => void
  ): Promise<CreateSparkSessionBatchSQLResponse> {
    return this.request("CreateSparkSessionBatchSQL", req, cb)
  }

  /**
   * 创建集群组
   */
  async CreateClusterGroup(
    req: CreateClusterGroupRequest,
    cb?: (error: string, rep: CreateClusterGroupResponse) => void
  ): Promise<CreateClusterGroupResponse> {
    return this.request("CreateClusterGroup", req, cb)
  }

  /**
   * 获取UDF权限信息
   */
  async DescribeUDFPolicy(
    req: DescribeUDFPolicyRequest,
    cb?: (error: string, rep: DescribeUDFPolicyResponse) => void
  ): Promise<DescribeUDFPolicyResponse> {
    return this.request("DescribeUDFPolicy", req, cb)
  }

  /**
   * 更新处于 SUBMITTED/PENDING 状态的作业的优先级。仅 SUBMITTED/PENDING 状态的作业允许调整优先级。内部通过调用 Neutrino 的 UpdateJobConfig 接口更新 ENVIRONMENT 配置中的 priority 字段。
   */
  async UpdateRayJobPriority(
    req: UpdateRayJobPriorityRequest,
    cb?: (error: string, rep: UpdateRayJobPriorityResponse) => void
  ): Promise<UpdateRayJobPriorityResponse> {
    return this.request("UpdateRayJobPriority", req, cb)
  }

  /**
   * 本接口（DescribeNotebookSessionStatements）用于查询Session中执行的任务列表
   */
  async DescribeNotebookSessionStatements(
    req: DescribeNotebookSessionStatementsRequest,
    cb?: (error: string, rep: DescribeNotebookSessionStatementsResponse) => void
  ): Promise<DescribeNotebookSessionStatementsResponse> {
    return this.request("DescribeNotebookSessionStatements", req, cb)
  }

  /**
   * 获取Ray集群详情请求
   */
  async GetRayCluster(
    req: GetRayClusterRequest,
    cb?: (error: string, rep: GetRayClusterResponse) => void
  ): Promise<GetRayClusterResponse> {
    return this.request("GetRayCluster", req, cb)
  }

  /**
   * 授权访问DLC Catalog
   */
  async GrantDLCCatalogAccess(
    req: GrantDLCCatalogAccessRequest,
    cb?: (error: string, rep: GrantDLCCatalogAccessResponse) => void
  ): Promise<GrantDLCCatalogAccessResponse> {
    return this.request("GrantDLCCatalogAccess", req, cb)
  }

  /**
   * 更新推理模型（编辑标签、描述、参数量）
   */
  async UpdateInferenceModel(
    req: UpdateInferenceModelRequest,
    cb?: (error: string, rep: UpdateInferenceModelResponse) => void
  ): Promise<UpdateInferenceModelResponse> {
    return this.request("UpdateInferenceModel", req, cb)
  }

  /**
   * 更新集群配置：仅在 CREATED / STOPPED / FAILED 终态可用；变更落 MySQL，下次 Start 按新 spec 创建 K8s 资源
   */
  async UpdateRayCluster(
    req: UpdateRayClusterRequest,
    cb?: (error: string, rep: UpdateRayClusterResponse) => void
  ): Promise<UpdateRayClusterResponse> {
    return this.request("UpdateRayCluster", req, cb)
  }

  /**
   * 复制一份已有的作业配置
   */
  async CopyJobSpec(
    req: CopyJobSpecRequest,
    cb?: (error: string, rep: CopyJobSpecResponse) => void
  ): Promise<CopyJobSpecResponse> {
    return this.request("CopyJobSpec", req, cb)
  }

  /**
   * 该接口（QueryTaskCostDetail）用于查询任务消耗明细
   */
  async QueryTaskCostDetail(
    req: QueryTaskCostDetailRequest,
    cb?: (error: string, rep: QueryTaskCostDetailResponse) => void
  ): Promise<QueryTaskCostDetailResponse> {
    return this.request("QueryTaskCostDetail", req, cb)
  }

  /**
   * 更新集群组
   */
  async UpdateClusterGroup(
    req: UpdateClusterGroupRequest,
    cb?: (error: string, rep: UpdateClusterGroupResponse) => void
  ): Promise<UpdateClusterGroupResponse> {
    return this.request("UpdateClusterGroup", req, cb)
  }

  /**
   * 更新资源配置模板
   */
  async UpdateResourceConfig(
    req: UpdateResourceConfigRequest,
    cb?: (error: string, rep: UpdateResourceConfigResponse) => void
  ): Promise<UpdateResourceConfigResponse> {
    return this.request("UpdateResourceConfig", req, cb)
  }

  /**
   * 启动集群
   */
  async StartRayCluster(
    req: StartRayClusterRequest,
    cb?: (error: string, rep: StartRayClusterResponse) => void
  ): Promise<StartRayClusterResponse> {
    return this.request("StartRayCluster", req, cb)
  }

  /**
   * 本接口用于控制挂起或启动数据引擎
   */
  async SuspendResumeDataEngine(
    req: SuspendResumeDataEngineRequest,
    cb?: (error: string, rep: SuspendResumeDataEngineResponse) => void
  ): Promise<SuspendResumeDataEngineResponse> {
    return this.request("SuspendResumeDataEngine", req, cb)
  }

  /**
   * 获取作业事件日志
   */
  async GetRayJobEventLog(
    req: GetRayJobEventLogRequest,
    cb?: (error: string, rep: GetRayJobEventLogResponse) => void
  ): Promise<GetRayJobEventLogResponse> {
    return this.request("GetRayJobEventLog", req, cb)
  }

  /**
   * 获取模型 config.json 配置（默认最新版本）
   */
  async GetModelConfig(
    req: GetModelConfigRequest,
    cb?: (error: string, rep: GetModelConfigResponse) => void
  ): Promise<GetModelConfigResponse> {
    return this.request("GetModelConfig", req, cb)
  }

  /**
   * DMS元数据创建库
   */
  async CreateDMSDatabase(
    req: CreateDMSDatabaseRequest,
    cb?: (error: string, rep: CreateDMSDatabaseResponse) => void
  ): Promise<CreateDMSDatabaseResponse> {
    return this.request("CreateDMSDatabase", req, cb)
  }

  /**
   * 获取数据实验室的Pod列表
   */
  async GetLabPods(
    req: GetLabPodsRequest,
    cb?: (error: string, rep: GetLabPodsResponse) => void
  ): Promise<GetLabPodsResponse> {
    return this.request("GetLabPods", req, cb)
  }

  /**
   * 绑定鉴权策略到用户
   */
  async AttachUserPolicy(
    req: AttachUserPolicyRequest,
    cb?: (error: string, rep: AttachUserPolicyResponse) => void
  ): Promise<AttachUserPolicyResponse> {
    return this.request("AttachUserPolicy", req, cb)
  }

  /**
   * 停止实验室
   */
  async StopLab(
    req: StopLabRequest,
    cb?: (error: string, rep: StopLabResponse) => void
  ): Promise<StopLabResponse> {
    return this.request("StopLab", req, cb)
  }

  /**
   * 查询当前地域可售卖的资源规格、最大配额，以及库存情况。StatusCategory 与 DescribePartitionAvailableQuota 数据同源，将实时可新增数量映射为库存分级；当请求 Region 与资源池实际部署地域不一致，或服务 cold-start 快照尚未就绪时，StatusCategory 为 null。
   */
  async DescribeSaleResourceInfo(
    req?: DescribeSaleResourceInfoRequest,
    cb?: (error: string, rep: DescribeSaleResourceInfoResponse) => void
  ): Promise<DescribeSaleResourceInfoResponse> {
    return this.request("DescribeSaleResourceInfo", req, cb)
  }

  /**
   * 创建查询结果下载任务
   */
  async CreateResultDownload(
    req: CreateResultDownloadRequest,
    cb?: (error: string, rep: CreateResultDownloadResponse) => void
  ): Promise<CreateResultDownloadResponse> {
    return this.request("CreateResultDownload", req, cb)
  }

  /**
   * 修改sql查询界面高级设置。
   */
  async ModifyAdvancedStoreLocation(
    req: ModifyAdvancedStoreLocationRequest,
    cb?: (error: string, rep: ModifyAdvancedStoreLocationResponse) => void
  ): Promise<ModifyAdvancedStoreLocationResponse> {
    return this.request("ModifyAdvancedStoreLocation", req, cb)
  }

  /**
   * 本接口（DescribeNotebookSessionStatementSqlResult）用于获取statement运行结果。
   */
  async DescribeNotebookSessionStatementSqlResult(
    req: DescribeNotebookSessionStatementSqlResultRequest,
    cb?: (error: string, rep: DescribeNotebookSessionStatementSqlResultResponse) => void
  ): Promise<DescribeNotebookSessionStatementSqlResultResponse> {
    return this.request("DescribeNotebookSessionStatementSqlResult", req, cb)
  }

  /**
   * 查询用户vpc到引擎网络的连接
   */
  async DescribeUserVpcConnection(
    req: DescribeUserVpcConnectionRequest,
    cb?: (error: string, rep: DescribeUserVpcConnectionResponse) => void
  ): Promise<DescribeUserVpcConnectionResponse> {
    return this.request("DescribeUserVpcConnection", req, cb)
  }

  /**
   * 获取账户子账户信息
   */
  async DescribeMCPSubUin(
    req?: DescribeMCPSubUinRequest,
    cb?: (error: string, rep: DescribeMCPSubUinResponse) => void
  ): Promise<DescribeMCPSubUinResponse> {
    return this.request("DescribeMCPSubUin", req, cb)
  }

  /**
   * 删除数据实验室
   */
  async DeleteLab(
    req: DeleteLabRequest,
    cb?: (error: string, rep: DeleteLabResponse) => void
  ): Promise<DeleteLabResponse> {
    return this.request("DeleteLab", req, cb)
  }

  /**
   * 本接口（CreateNotebookSessionStatement）用于在session中执行代码片段
   */
  async CreateNotebookSessionStatement(
    req: CreateNotebookSessionStatementRequest,
    cb?: (error: string, rep: CreateNotebookSessionStatementResponse) => void
  ): Promise<CreateNotebookSessionStatementResponse> {
    return this.request("CreateNotebookSessionStatement", req, cb)
  }

  /**
   * 解绑数据源与队列
   */
  async UnboundDatasourceHouse(
    req: UnboundDatasourceHouseRequest,
    cb?: (error: string, rep: UnboundDatasourceHouseResponse) => void
  ): Promise<UnboundDatasourceHouseResponse> {
    return this.request("UnboundDatasourceHouse", req, cb)
  }

  /**
   * 变配校验：判断用户的目标配置是否可以执行变配。校验逻辑：对于缩容场景（目标值 < 当前值），检查 default 队列的 min 值是否足够承受缩容差值。
   */
  async CheckModifyPartition(
    req: CheckModifyPartitionRequest,
    cb?: (error: string, rep: CheckModifyPartitionResponse) => void
  ): Promise<CheckModifyPartitionResponse> {
    return this.request("CheckModifyPartition", req, cb)
  }

  /**
   * 列出推理服务（支持关键词和状态过滤 + 分页）
   */
  async ListInferenceServices(
    req: ListInferenceServicesRequest,
    cb?: (error: string, rep: ListInferenceServicesResponse) => void
  ): Promise<ListInferenceServicesResponse> {
    return this.request("ListInferenceServices", req, cb)
  }

  /**
   * 本接口（RegisterThirdPartyAccessUser）用于开通第三方平台访问
   */
  async RegisterThirdPartyAccessUser(
    req?: RegisterThirdPartyAccessUserRequest,
    cb?: (error: string, rep: RegisterThirdPartyAccessUserResponse) => void
  ): Promise<RegisterThirdPartyAccessUserResponse> {
    return this.request("RegisterThirdPartyAccessUser", req, cb)
  }

  /**
   * 获取实验室ide访问地址
   */
  async GetLabServiceUrls(
    req: GetLabServiceUrlsRequest,
    cb?: (error: string, rep: GetLabServiceUrlsResponse) => void
  ): Promise<GetLabServiceUrlsResponse> {
    return this.request("GetLabServiceUrls", req, cb)
  }

  /**
   * DMS元数据更新库
   */
  async AlterDMSDatabase(
    req: AlterDMSDatabaseRequest,
    cb?: (error: string, rep: AlterDMSDatabaseResponse) => void
  ): Promise<AlterDMSDatabaseResponse> {
    return this.request("AlterDMSDatabase", req, cb)
  }

  /**
   * 本接口（DescribeSparkSessionBatchSQL）用于查询Spark SQL批任务运行状态
   */
  async DescribeSparkSessionBatchSQL(
    req: DescribeSparkSessionBatchSQLRequest,
    cb?: (error: string, rep: DescribeSparkSessionBatchSQLResponse) => void
  ): Promise<DescribeSparkSessionBatchSQLResponse> {
    return this.request("DescribeSparkSessionBatchSQL", req, cb)
  }

  /**
   * 创建作业配置
   */
  async CreateJobSpec(
    req: CreateJobSpecRequest,
    cb?: (error: string, rep: CreateJobSpecResponse) => void
  ): Promise<CreateJobSpecResponse> {
    return this.request("CreateJobSpec", req, cb)
  }

  /**
   * DMS元数据新增分区
   */
  async AddDMSPartitions(
    req: AddDMSPartitionsRequest,
    cb?: (error: string, rep: AddDMSPartitionsResponse) => void
  ): Promise<AddDMSPartitionsResponse> {
    return this.request("AddDMSPartitions", req, cb)
  }

  /**
   * 返回指定时间范围内所有推理服务的聚合 KPI 值。
   */
  async QueryDashboardOverview(
    req: QueryDashboardOverviewRequest,
    cb?: (error: string, rep: QueryDashboardOverviewResponse) => void
  ): Promise<QueryDashboardOverviewResponse> {
    return this.request("QueryDashboardOverview", req, cb)
  }

  /**
   * 修改用户引擎自定义配置
   */
  async UpdateUserDataEngineConfig(
    req: UpdateUserDataEngineConfigRequest,
    cb?: (error: string, rep: UpdateUserDataEngineConfigResponse) => void
  ): Promise<UpdateUserDataEngineConfigResponse> {
    return this.request("UpdateUserDataEngineConfig", req, cb)
  }

  /**
   * 本接口（CancelNotebookSessionStatementBatch）用于批量取消Session 中执行的任务
   */
  async CancelNotebookSessionStatementBatch(
    req: CancelNotebookSessionStatementBatchRequest,
    cb?: (error: string, rep: CancelNotebookSessionStatementBatchResponse) => void
  ): Promise<CancelNotebookSessionStatementBatchResponse> {
    return this.request("CancelNotebookSessionStatementBatch", req, cb)
  }

  /**
   * 本接口（CheckDataEngineImageCanBeUpgrade）用于查看集群镜像是否能够升级。
   */
  async CheckDataEngineImageCanBeUpgrade(
    req: CheckDataEngineImageCanBeUpgradeRequest,
    cb?: (error: string, rep: CheckDataEngineImageCanBeUpgradeResponse) => void
  ): Promise<CheckDataEngineImageCanBeUpgradeResponse> {
    return this.request("CheckDataEngineImageCanBeUpgrade", req, cb)
  }

  /**
   * 删除spark作业
   */
  async DeleteSparkApp(
    req: DeleteSparkAppRequest,
    cb?: (error: string, rep: DeleteSparkAppResponse) => void
  ): Promise<DeleteSparkAppResponse> {
    return this.request("DeleteSparkApp", req, cb)
  }

  /**
   * 返回任务洞察资源用量
   */
  async DescribeTaskResourceUsage(
    req: DescribeTaskResourceUsageRequest,
    cb?: (error: string, rep: DescribeTaskResourceUsageResponse) => void
  ): Promise<DescribeTaskResourceUsageResponse> {
    return this.request("DescribeTaskResourceUsage", req, cb)
  }

  /**
   * 返回标签去重列表，按出现频次从高到低排序。
   */
  async ListExampleTags(
    req: ListExampleTagsRequest,
    cb?: (error: string, rep: ListExampleTagsResponse) => void
  ): Promise<ListExampleTagsResponse> {
    return this.request("ListExampleTags", req, cb)
  }

  /**
   * 本接口（DescribeNotebookSessionLog）用于查询交互式 session日志
   */
  async DescribeNotebookSessionLog(
    req: DescribeNotebookSessionLogRequest,
    cb?: (error: string, rep: DescribeNotebookSessionLogResponse) => void
  ): Promise<DescribeNotebookSessionLogResponse> {
    return this.request("DescribeNotebookSessionLog", req, cb)
  }

  /**
   * 该接口（DescribeTasksCostInfo）用于查询任务消耗
   */
  async DescribeTasksCostInfo(
    req: DescribeTasksCostInfoRequest,
    cb?: (error: string, rep: DescribeTasksCostInfoResponse) => void
  ): Promise<DescribeTasksCostInfoResponse> {
    return this.request("DescribeTasksCostInfo", req, cb)
  }

  /**
   * 查询结果下载任务
   */
  async DescribeResultDownload(
    req: DescribeResultDownloadRequest,
    cb?: (error: string, rep: DescribeResultDownloadResponse) => void
  ): Promise<DescribeResultDownloadResponse> {
    return this.request("DescribeResultDownload", req, cb)
  }

  /**
   * 根据配置ID获取作业配置详情
   */
  async GetJobSpec(
    req: GetJobSpecRequest,
    cb?: (error: string, rep: GetJobSpecResponse) => void
  ): Promise<GetJobSpecResponse> {
    return this.request("GetJobSpec", req, cb)
  }

  /**
   * DMS元数据获取表
   */
  async DescribeDMSTable(
    req: DescribeDMSTableRequest,
    cb?: (error: string, rep: DescribeDMSTableResponse) => void
  ): Promise<DescribeDMSTableResponse> {
    return this.request("DescribeDMSTable", req, cb)
  }

  /**
   * 创建推理服务（含默认部署）
   */
  async CreateInferenceService(
    req: CreateInferenceServiceRequest,
    cb?: (error: string, rep: CreateInferenceServiceResponse) => void
  ): Promise<CreateInferenceServiceResponse> {
    return this.request("CreateInferenceService", req, cb)
  }

  /**
   * DMS元数据删除分区
   */
  async DropDMSPartitions(
    req: DropDMSPartitionsRequest,
    cb?: (error: string, rep: DropDMSPartitionsResponse) => void
  ): Promise<DropDMSPartitionsResponse> {
    return this.request("DropDMSPartitions", req, cb)
  }

  /**
   * 本接口（CreateMetaDatabase）用于创建元数据库
   */
  async CreateMetaDatabase(
    req: CreateMetaDatabaseRequest,
    cb?: (error: string, rep: CreateMetaDatabaseResponse) => void
  ): Promise<CreateMetaDatabaseResponse> {
    return this.request("CreateMetaDatabase", req, cb)
  }

  /**
   * 创建工作组
   */
  async CreateWorkGroup(
    req: CreateWorkGroupRequest,
    cb?: (error: string, rep: CreateWorkGroupResponse) => void
  ): Promise<CreateWorkGroupResponse> {
    return this.request("CreateWorkGroup", req, cb)
  }

  /**
   * 创建TIceberg表
   */
  async CreateTcIcebergTable(
    req: CreateTcIcebergTableRequest,
    cb?: (error: string, rep: CreateTcIcebergTableResponse) => void
  ): Promise<CreateTcIcebergTableResponse> {
    return this.request("CreateTcIcebergTable", req, cb)
  }

  /**
   * 此接口（CreateCHDFSBindingProduct）用于创建元数据加速桶和产品绑定关系
   */
  async CreateCHDFSBindingProduct(
    req: CreateCHDFSBindingProductRequest,
    cb?: (error: string, rep: CreateCHDFSBindingProductResponse) => void
  ): Promise<CreateCHDFSBindingProductResponse> {
    return this.request("CreateCHDFSBindingProduct", req, cb)
  }

  /**
   * 本接口（QueryInternalTableWarehouse）用于获取原生表warehouse路径
   */
  async QueryInternalTableWarehouse(
    req: QueryInternalTableWarehouseRequest,
    cb?: (error: string, rep: QueryInternalTableWarehouseResponse) => void
  ): Promise<QueryInternalTableWarehouseResponse> {
    return this.request("QueryInternalTableWarehouse", req, cb)
  }

  /**
   * 本接口（DescribeDatasourceConnection）用于查询数据源信息
   */
  async DescribeDatasourceConnection(
    req: DescribeDatasourceConnectionRequest,
    cb?: (error: string, rep: DescribeDatasourceConnectionResponse) => void
  ): Promise<DescribeDatasourceConnectionResponse> {
    return this.request("DescribeDatasourceConnection", req, cb)
  }

  /**
   * 查询指定 Ray 集群下提交的所有作业，分页返回。底层委托给 ListRayJobs，强制注入 ClusterId 作为过滤条件。
   */
  async ListRayClusterJobs(
    req: ListRayClusterJobsRequest,
    cb?: (error: string, rep: ListRayClusterJobsResponse) => void
  ): Promise<ListRayClusterJobsResponse> {
    return this.request("ListRayClusterJobs", req, cb)
  }

  /**
   * 资源队列名称合法性检测：校验队列名称是否合法，包括非空校验、格式校验（以小写字母开头，只允许小写字母、数字和连字符，长度1~11）和同分区下重名校验。
   */
  async CheckQueueName(
    req: CheckQueueNameRequest,
    cb?: (error: string, rep: CheckQueueNameResponse) => void
  ): Promise<CheckQueueNameResponse> {
    return this.request("CheckQueueName", req, cb)
  }

  /**
   * 本接口（DescribeTablePartitions）用于查询数据表分区信息
   */
  async DescribeTablePartitions(
    req: DescribeTablePartitionsRequest,
    cb?: (error: string, rep: DescribeTablePartitionsResponse) => void
  ): Promise<DescribeTablePartitionsResponse> {
    return this.request("DescribeTablePartitions", req, cb)
  }

  /**
   * 重启推理服务（操作所有部署）。
   */
  async RestartInferenceService(
    req: RestartInferenceServiceRequest,
    cb?: (error: string, rep: RestartInferenceServiceResponse) => void
  ): Promise<RestartInferenceServiceResponse> {
    return this.request("RestartInferenceService", req, cb)
  }

  /**
   * 修改作业配置的调度优先级（1-9，数字越大优先级越高）
   */
  async UpdateJobSpecPriority(
    req: UpdateJobSpecPriorityRequest,
    cb?: (error: string, rep: UpdateJobSpecPriorityResponse) => void
  ): Promise<UpdateJobSpecPriorityResponse> {
    return this.request("UpdateJobSpecPriority", req, cb)
  }

  /**
   * 本接口（CheckDataEngineImageCanBeRollback）用于查看集群是否能回滚。
   */
  async CheckDataEngineImageCanBeRollback(
    req: CheckDataEngineImageCanBeRollbackRequest,
    cb?: (error: string, rep: CheckDataEngineImageCanBeRollbackResponse) => void
  ): Promise<CheckDataEngineImageCanBeRollbackResponse> {
    return this.request("CheckDataEngineImageCanBeRollback", req, cb)
  }

  /**
   * 根据配置ID删除作业配置
   */
  async DeleteJobSpec(
    req: DeleteJobSpecRequest,
    cb?: (error: string, rep: DeleteJobSpecResponse) => void
  ): Promise<DeleteJobSpecResponse> {
    return this.request("DeleteJobSpec", req, cb)
  }

  /**
   * 获取实验室的事件流（基于 K8s Event + CLS 日志）
   */
  async GetLabEvent(
    req: GetLabEventRequest,
    cb?: (error: string, rep: GetLabEventResponse) => void
  ): Promise<GetLabEventResponse> {
    return this.request("GetLabEvent", req, cb)
  }

  /**
   * 本接口（CancelSparkSessionBatchSQL）用于取消Spark SQL批任务。
   */
  async CancelSparkSessionBatchSQL(
    req: CancelSparkSessionBatchSQLRequest,
    cb?: (error: string, rep: CancelSparkSessionBatchSQLResponse) => void
  ): Promise<CancelSparkSessionBatchSQLResponse> {
    return this.request("CancelSparkSessionBatchSQL", req, cb)
  }

  /**
   * 获取分区列表信息
   */
  async DescribePartitions(
    req: DescribePartitionsRequest,
    cb?: (error: string, rep: DescribePartitionsResponse) => void
  ): Promise<DescribePartitionsResponse> {
    return this.request("DescribePartitions", req, cb)
  }

  /**
   * 根据任务ID获取Ray任务的历史执行记录
   */
  async GetRayJobHistory(
    req: GetRayJobHistoryRequest,
    cb?: (error: string, rep: GetRayJobHistoryResponse) => void
  ): Promise<GetRayJobHistoryResponse> {
    return this.request("GetRayJobHistory", req, cb)
  }

  /**
   * 本接口（DescribeSparkSessionBatchSqlLog）用于查询Spark SQL批任务日志
   */
  async DescribeSparkSessionBatchSqlLog(
    req: DescribeSparkSessionBatchSqlLogRequest,
    cb?: (error: string, rep: DescribeSparkSessionBatchSqlLogResponse) => void
  ): Promise<DescribeSparkSessionBatchSqlLogResponse> {
    return this.request("DescribeSparkSessionBatchSqlLog", req, cb)
  }

  /**
   * 本接口（DescribeTable），用于查询单个表的详细信息。
   */
  async DescribeTable(
    req: DescribeTableRequest,
    cb?: (error: string, rep: DescribeTableResponse) => void
  ): Promise<DescribeTableResponse> {
    return this.request("DescribeTable", req, cb)
  }

  /**
   * 是否成功开通TCLake
   */
  async DescribeTCLakeMetaInstance(
    req?: DescribeTCLakeMetaInstanceRequest,
    cb?: (error: string, rep: DescribeTCLakeMetaInstanceResponse) => void
  ): Promise<DescribeTCLakeMetaInstanceResponse> {
    return this.request("DescribeTCLakeMetaInstance", req, cb)
  }

  /**
   * 本接口根据资源组ID查询资源组CU使用情况
   */
  async DescribeResourceGroupUsageInfo(
    req: DescribeResourceGroupUsageInfoRequest,
    cb?: (error: string, rep: DescribeResourceGroupUsageInfoResponse) => void
  ): Promise<DescribeResourceGroupUsageInfoResponse> {
    return this.request("DescribeResourceGroupUsageInfo", req, cb)
  }

  /**
   * 删除用户vpc到引擎网络的连接
   */
  async DeleteUserVpcConnection(
    req: DeleteUserVpcConnectionRequest,
    cb?: (error: string, rep: DeleteUserVpcConnectionResponse) => void
  ): Promise<DeleteUserVpcConnectionResponse> {
    return this.request("DeleteUserVpcConnection", req, cb)
  }

  /**
   * 获取作业的Pod列表
   */
  async GetRayJobPods(
    req: GetRayJobPodsRequest,
    cb?: (error: string, rep: GetRayJobPodsResponse) => void
  ): Promise<GetRayJobPodsResponse> {
    return this.request("GetRayJobPods", req, cb)
  }

  /**
   * 根据spark session名称销毁eg spark session
   */
  async DeleteNativeSparkSession(
    req: DeleteNativeSparkSessionRequest,
    cb?: (error: string, rep: DeleteNativeSparkSessionResponse) => void
  ): Promise<DeleteNativeSparkSessionResponse> {
    return this.request("DeleteNativeSparkSession", req, cb)
  }

  /**
   * 分页查询指定分区的流程详情列表，包含每个流程的基本信息和活动列表
   */
  async DescribeFlowDetailList(
    req: DescribeFlowDetailListRequest,
    cb?: (error: string, rep: DescribeFlowDetailListResponse) => void
  ): Promise<DescribeFlowDetailListResponse> {
    return this.request("DescribeFlowDetailList", req, cb)
  }

  /**
   * 查询指定分区的流程列表
   */
  async DescribeFlowList(
    req: DescribeFlowListRequest,
    cb?: (error: string, rep: DescribeFlowListResponse) => void
  ): Promise<DescribeFlowListResponse> {
    return this.request("DescribeFlowList", req, cb)
  }

  /**
   * 本接口（CheckDataEngineConfigPairsValidity）用于检查引擎用户自定义参数的有效性
   */
  async CheckDataEngineConfigPairsValidity(
    req: CheckDataEngineConfigPairsValidityRequest,
    cb?: (error: string, rep: CheckDataEngineConfigPairsValidityResponse) => void
  ): Promise<CheckDataEngineConfigPairsValidityResponse> {
    return this.request("CheckDataEngineConfigPairsValidity", req, cb)
  }

  /**
   * 查询指定分区的所有队列列表
   */
  async DescribePartitionQueues(
    req: DescribePartitionQueuesRequest,
    cb?: (error: string, rep: DescribePartitionQueuesResponse) => void
  ): Promise<DescribePartitionQueuesResponse> {
    return this.request("DescribePartitionQueues", req, cb)
  }

  /**
   * 通过 ResourceManager 调用 CLS SearchLog API 查询作业相关日志。不返回总数，使用 Context 进行翻页，ListOver 标识是否还有更多数据。
   */
  async GetRayJobEvent(
    req: GetRayJobEventRequest,
    cb?: (error: string, rep: GetRayJobEventResponse) => void
  ): Promise<GetRayJobEventResponse> {
    return this.request("GetRayJobEvent", req, cb)
  }

  /**
   * 查询标准引擎资源组信息
   */
  async DescribeStandardEngineResourceGroupConfigInfo(
    req: DescribeStandardEngineResourceGroupConfigInfoRequest,
    cb?: (error: string, rep: DescribeStandardEngineResourceGroupConfigInfoResponse) => void
  ): Promise<DescribeStandardEngineResourceGroupConfigInfoResponse> {
    return this.request("DescribeStandardEngineResourceGroupConfigInfo", req, cb)
  }

  /**
   * 删除集群
   */
  async DeleteRayCluster(
    req: DeleteRayClusterRequest,
    cb?: (error: string, rep: DeleteRayClusterResponse) => void
  ): Promise<DeleteRayClusterResponse> {
    return this.request("DeleteRayCluster", req, cb)
  }

  /**
   * 删除用户
   */
  async DeleteUser(
    req: DeleteUserRequest,
    cb?: (error: string, rep: DeleteUserResponse) => void
  ): Promise<DeleteUserResponse> {
    return this.request("DeleteUser", req, cb)
  }

  /**
   * DMS元数据获取表列表
   */
  async DescribeDMSTables(
    req: DescribeDMSTablesRequest,
    cb?: (error: string, rep: DescribeDMSTablesResponse) => void
  ): Promise<DescribeDMSTablesResponse> {
    return this.request("DescribeDMSTables", req, cb)
  }

  /**
   * 删除表
   */
  async DeleteTable(
    req: DeleteTableRequest,
    cb?: (error: string, rep: DeleteTableResponse) => void
  ): Promise<DeleteTableResponse> {
    return this.request("DeleteTable", req, cb)
  }

  /**
   * 本接口根据引擎ID查询数据引擎资源使用情况
   */
  async DescribeEngineUsageInfo(
    req: DescribeEngineUsageInfoRequest,
    cb?: (error: string, rep: DescribeEngineUsageInfoResponse) => void
  ): Promise<DescribeEngineUsageInfoResponse> {
    return this.request("DescribeEngineUsageInfo", req, cb)
  }

  /**
   * 查看任务概览页
   */
  async DescribeTasksOverview(
    req: DescribeTasksOverviewRequest,
    cb?: (error: string, rep: DescribeTasksOverviewResponse) => void
  ): Promise<DescribeTasksOverviewResponse> {
    return this.request("DescribeTasksOverview", req, cb)
  }

  /**
   * 更新数据脱敏策略
   */
  async UpdateDataMaskStrategy(
    req: UpdateDataMaskStrategyRequest,
    cb?: (error: string, rep: UpdateDataMaskStrategyResponse) => void
  ): Promise<UpdateDataMaskStrategyResponse> {
    return this.request("UpdateDataMaskStrategy", req, cb)
  }

  /**
   * 用户某种操作，触发引擎配置修改
   */
  async UpdateDataEngineConfig(
    req: UpdateDataEngineConfigRequest,
    cb?: (error: string, rep: UpdateDataEngineConfigResponse) => void
  ): Promise<UpdateDataEngineConfigResponse> {
    return this.request("UpdateDataEngineConfig", req, cb)
  }

  /**
     * 废弃接口，申请下线

按顺序创建任务（已经废弃，后期不再维护，请使用接口CreateTasks）
     */
  async CreateTasksInOrder(
    req: CreateTasksInOrderRequest,
    cb?: (error: string, rep: CreateTasksInOrderResponse) => void
  ): Promise<CreateTasksInOrderResponse> {
    return this.request("CreateTasksInOrder", req, cb)
  }

  /**
   * 删除集群组
   */
  async DeleteClusterGroup(
    req: DeleteClusterGroupRequest,
    cb?: (error: string, rep: DeleteClusterGroupResponse) => void
  ): Promise<DeleteClusterGroupResponse> {
    return this.request("DeleteClusterGroup", req, cb)
  }

  /**
   * 元数据锁
   */
  async LockMetaData(
    req: LockMetaDataRequest,
    cb?: (error: string, rep: LockMetaDataResponse) => void
  ): Promise<LockMetaDataResponse> {
    return this.request("LockMetaData", req, cb)
  }

  /**
   * DMS元数据创建表
   */
  async CreateDMSTable(
    req: CreateDMSTableRequest,
    cb?: (error: string, rep: CreateDMSTableResponse) => void
  ): Promise<CreateDMSTableResponse> {
    return this.request("CreateDMSTable", req, cb)
  }

  /**
   * 分配原生表表属性
   */
  async AssignMangedTableProperties(
    req: AssignMangedTablePropertiesRequest,
    cb?: (error: string, rep: AssignMangedTablePropertiesResponse) => void
  ): Promise<AssignMangedTablePropertiesResponse> {
    return this.request("AssignMangedTableProperties", req, cb)
  }

  /**
   * 升级引擎镜像
   */
  async UpgradeDataEngineImage(
    req: UpgradeDataEngineImageRequest,
    cb?: (error: string, rep: UpgradeDataEngineImageResponse) => void
  ): Promise<UpgradeDataEngineImageResponse> {
    return this.request("UpgradeDataEngineImage", req, cb)
  }

  /**
   * 解绑用户鉴权策略
   */
  async DetachUserPolicy(
    req: DetachUserPolicyRequest,
    cb?: (error: string, rep: DetachUserPolicyResponse) => void
  ): Promise<DetachUserPolicyResponse> {
    return this.request("DetachUserPolicy", req, cb)
  }

  /**
   * UDP权限修改
   */
  async UpdateUDFPolicy(
    req: UpdateUDFPolicyRequest,
    cb?: (error: string, rep: UpdateUDFPolicyResponse) => void
  ): Promise<UpdateUDFPolicyResponse> {
    return this.request("UpdateUDFPolicy", req, cb)
  }

  /**
   * 列出推理模型（支持关键词过滤 + 分页）
   */
  async ListInferenceModels(
    req: ListInferenceModelsRequest,
    cb?: (error: string, rep: ListInferenceModelsResponse) => void
  ): Promise<ListInferenceModelsResponse> {
    return this.request("ListInferenceModels", req, cb)
  }

  /**
   * 查询数据引擎事件
   */
  async DescribeDataEngineEvents(
    req: DescribeDataEngineEventsRequest,
    cb?: (error: string, rep: DescribeDataEngineEventsResponse) => void
  ): Promise<DescribeDataEngineEventsResponse> {
    return this.request("DescribeDataEngineEvents", req, cb)
  }

  /**
   * 解绑工作组鉴权策略
   */
  async DetachWorkGroupPolicy(
    req: DetachWorkGroupPolicyRequest,
    cb?: (error: string, rep: DetachWorkGroupPolicyResponse) => void
  ): Promise<DetachWorkGroupPolicyResponse> {
    return this.request("DetachWorkGroupPolicy", req, cb)
  }

  /**
   * 根据任务ID获取Ray任务详情
   */
  async GetRayJob(
    req: GetRayJobRequest,
    cb?: (error: string, rep: GetRayJobResponse) => void
  ): Promise<GetRayJobResponse> {
    return this.request("GetRayJob", req, cb)
  }

  /**
   * DMS元数据删除表
   */
  async DropDMSTable(
    req: DropDMSTableRequest,
    cb?: (error: string, rep: DropDMSTableResponse) => void
  ): Promise<DropDMSTableResponse> {
    return this.request("DropDMSTable", req, cb)
  }

  /**
   * 获取任务结果查询
   */
  async QueryResult(
    req: QueryResultRequest,
    cb?: (error: string, rep: QueryResultResponse) => void
  ): Promise<QueryResultResponse> {
    return this.request("QueryResult", req, cb)
  }

  /**
   * 更新tdlc spark作业
   */
  async ModifySparkAppForTDLC(
    req: ModifySparkAppForTDLCRequest,
    cb?: (error: string, rep: ModifySparkAppForTDLCResponse) => void
  ): Promise<ModifySparkAppForTDLCResponse> {
    return this.request("ModifySparkAppForTDLC", req, cb)
  }

  /**
   * 元数据锁检查
   */
  async CheckLockMetaData(
    req: CheckLockMetaDataRequest,
    cb?: (error: string, rep: CheckLockMetaDataResponse) => void
  ): Promise<CheckLockMetaDataResponse> {
    return this.request("CheckLockMetaData", req, cb)
  }

  /**
   * 该接口（CreateImportTask）用于创建导入任务
   */
  async CreateImportTask(
    req: CreateImportTaskRequest,
    cb?: (error: string, rep: CreateImportTaskResponse) => void
  ): Promise<CreateImportTaskResponse> {
    return this.request("CreateImportTask", req, cb)
  }

  /**
   * 停止集群
   */
  async StopRayCluster(
    req: StopRayClusterRequest,
    cb?: (error: string, rep: StopRayClusterResponse) => void
  ): Promise<StopRayClusterResponse> {
    return this.request("StopRayCluster", req, cb)
  }

  /**
   * 获取集群的Pod列表
   */
  async GetRayClusterPods(
    req: GetRayClusterPodsRequest,
    cb?: (error: string, rep: GetRayClusterPodsResponse) => void
  ): Promise<GetRayClusterPodsResponse> {
    return this.request("GetRayClusterPods", req, cb)
  }

  /**
   * 查询可售卖的地域列表，仅返回状态为AVAILABLE的地域
   */
  async DescribeSaleRegions(
    req?: DescribeSaleRegionsRequest,
    cb?: (error: string, rep: DescribeSaleRegionsResponse) => void
  ): Promise<DescribeSaleRegionsResponse> {
    return this.request("DescribeSaleRegions", req, cb)
  }

  /**
   * 批量取消任务
   */
  async CancelTasks(
    req: CancelTasksRequest,
    cb?: (error: string, rep: CancelTasksResponse) => void
  ): Promise<CancelTasksResponse> {
    return this.request("CancelTasks", req, cb)
  }

  /**
   * 修改数据治理事件阈值
   */
  async ModifyGovernEventRule(
    req?: ModifyGovernEventRuleRequest,
    cb?: (error: string, rep: ModifyGovernEventRuleResponse) => void
  ): Promise<ModifyGovernEventRuleResponse> {
    return this.request("ModifyGovernEventRule", req, cb)
  }

  /**
   * 本接口（CreateTable）用于生成建表SQL。
   */
  async CreateTable(
    req: CreateTableRequest,
    cb?: (error: string, rep: CreateTableResponse) => void
  ): Promise<CreateTableResponse> {
    return this.request("CreateTable", req, cb)
  }

  /**
   * 查询任务结果，仅支持30天以内的任务查询结果，且返回数据大小超过近50M会进行截断。
   */
  async DescribeTaskResult(
    req: DescribeTaskResultRequest,
    cb?: (error: string, rep: DescribeTaskResultResponse) => void
  ): Promise<DescribeTaskResultResponse> {
    return this.request("DescribeTaskResult", req, cb)
  }

  /**
   * 该接口（CreateExportTask）用于创建导出任务
   */
  async CreateExportTask(
    req: CreateExportTaskRequest,
    cb?: (error: string, rep: CreateExportTaskResponse) => void
  ): Promise<CreateExportTaskResponse> {
    return this.request("CreateExportTask", req, cb)
  }

  /**
   * 创建资源配置模板
   */
  async CreateResourceConfig(
    req: CreateResourceConfigRequest,
    cb?: (error: string, rep: CreateResourceConfigResponse) => void
  ): Promise<CreateResourceConfigResponse> {
    return this.request("CreateResourceConfig", req, cb)
  }

  /**
   * 创建tdlc spark作业
   */
  async CreateSparkAppForTDLC(
    req: CreateSparkAppForTDLCRequest,
    cb?: (error: string, rep: CreateSparkAppForTDLCResponse) => void
  ): Promise<CreateSparkAppForTDLCResponse> {
    return this.request("CreateSparkAppForTDLC", req, cb)
  }

  /**
   * 查询监控大盘服务列表
   */
  async QueryDashboardServiceList(
    req: QueryDashboardServiceListRequest,
    cb?: (error: string, rep: QueryDashboardServiceListResponse) => void
  ): Promise<QueryDashboardServiceListResponse> {
    return this.request("QueryDashboardServiceList", req, cb)
  }

  /**
   * 列出所有集群组
   */
  async ListClusterGroups(
    req: ListClusterGroupsRequest,
    cb?: (error: string, rep: ListClusterGroupsResponse) => void
  ): Promise<ListClusterGroupsResponse> {
    return this.request("ListClusterGroups", req, cb)
  }

  /**
   * 列出所有集群
   */
  async ListRayClusters(
    req: ListRayClustersRequest,
    cb?: (error: string, rep: ListRayClustersResponse) => void
  ): Promise<ListRayClustersResponse> {
    return this.request("ListRayClusters", req, cb)
  }

  /**
   * 根据任务ID取消正在运行的Ray任务
   */
  async CancelRayJob(
    req: CancelRayJobRequest,
    cb?: (error: string, rep: CancelRayJobResponse) => void
  ): Promise<CancelRayJobResponse> {
    return this.request("CancelRayJob", req, cb)
  }

  /**
   * 该接口用于洞察分析列表
   */
  async DescribeTasksAnalysis(
    req: DescribeTasksAnalysisRequest,
    cb?: (error: string, rep: DescribeTasksAnalysisResponse) => void
  ): Promise<DescribeTasksAnalysisResponse> {
    return this.request("DescribeTasksAnalysis", req, cb)
  }

  /**
   * 列出实验室列表
   */
  async ListLabs(
    req: ListLabsRequest,
    cb?: (error: string, rep: ListLabsResponse) => void
  ): Promise<ListLabsResponse> {
    return this.request("ListLabs", req, cb)
  }

  /**
   * 从工作组中删除用户
   */
  async DeleteUsersFromWorkGroup(
    req: DeleteUsersFromWorkGroupRequest,
    cb?: (error: string, rep: DeleteUsersFromWorkGroupResponse) => void
  ): Promise<DeleteUsersFromWorkGroupResponse> {
    return this.request("DeleteUsersFromWorkGroup", req, cb)
  }

  /**
   * 更新网络配置
   */
  async UpdateNetworkConnection(
    req: UpdateNetworkConnectionRequest,
    cb?: (error: string, rep: UpdateNetworkConnectionResponse) => void
  ): Promise<UpdateNetworkConnectionResponse> {
    return this.request("UpdateNetworkConnection", req, cb)
  }

  /**
   * 获取Pod的YAML内容
   */
  async GetRayJobPodYaml(
    req: GetRayJobPodYamlRequest,
    cb?: (error: string, rep: GetRayJobPodYamlResponse) => void
  ): Promise<GetRayJobPodYamlResponse> {
    return this.request("GetRayJobPodYaml", req, cb)
  }

  /**
   * 根据集群ID列出所有Ray任务
   */
  async ListRayJobs(
    req: ListRayJobsRequest,
    cb?: (error: string, rep: ListRayJobsResponse) => void
  ): Promise<ListRayJobsResponse> {
    return this.request("ListRayJobs", req, cb)
  }

  /**
   * 更新已有作业配置的字段
   */
  async UpdateJobSpec(
    req: UpdateJobSpecRequest,
    cb?: (error: string, rep: UpdateJobSpecResponse) => void
  ): Promise<UpdateJobSpecResponse> {
    return this.request("UpdateJobSpec", req, cb)
  }

  /**
   * 查询Spark作业的运行任务列表
   */
  async DescribeSparkAppTasks(
    req: DescribeSparkAppTasksRequest,
    cb?: (error: string, rep: DescribeSparkAppTasksResponse) => void
  ): Promise<DescribeSparkAppTasksResponse> {
    return this.request("DescribeSparkAppTasks", req, cb)
  }

  /**
   * 创建用户角色
   */
  async CreateUserRole(
    req: CreateUserRoleRequest,
    cb?: (error: string, rep: CreateUserRoleResponse) => void
  ): Promise<CreateUserRoleResponse> {
    return this.request("CreateUserRole", req, cb)
  }

  /**
   * 解绑用户上的用户组
   */
  async UnbindWorkGroupsFromUser(
    req: UnbindWorkGroupsFromUserRequest,
    cb?: (error: string, rep: UnbindWorkGroupsFromUserResponse) => void
  ): Promise<UnbindWorkGroupsFromUserResponse> {
    return this.request("UnbindWorkGroupsFromUser", req, cb)
  }

  /**
   * 本接口（DescribeDataEnginePythonSparkImages）用于获取PYSPARK镜像列表
   */
  async DescribeDataEnginePythonSparkImages(
    req: DescribeDataEnginePythonSparkImagesRequest,
    cb?: (error: string, rep: DescribeDataEnginePythonSparkImagesResponse) => void
  ): Promise<DescribeDataEnginePythonSparkImagesResponse> {
    return this.request("DescribeDataEnginePythonSparkImages", req, cb)
  }

  /**
   * 本接口（CreateSparkSubmitTask）用于提交SparkSbumit批流任务。
   */
  async CreateSparkSubmitTask(
    req: CreateSparkSubmitTaskRequest,
    cb?: (error: string, rep: CreateSparkSubmitTaskResponse) => void
  ): Promise<CreateSparkSubmitTaskResponse> {
    return this.request("CreateSparkSubmitTask", req, cb)
  }

  /**
   * 删除资源队列
   */
  async DeletePartitionQueue(
    req: DeletePartitionQueueRequest,
    cb?: (error: string, rep: DeletePartitionQueueResponse) => void
  ): Promise<DeletePartitionQueueResponse> {
    return this.request("DeletePartitionQueue", req, cb)
  }

  /**
   * 该接口（CreateScript）用于创建sql脚本。
   */
  async CreateScript(
    req: CreateScriptRequest,
    cb?: (error: string, rep: CreateScriptResponse) => void
  ): Promise<CreateScriptResponse> {
    return this.request("CreateScript", req, cb)
  }

  /**
   * 该接口（DescribeTasks）用于查询任务列表
   */
  async DescribeMCPTask(
    req: DescribeMCPTaskRequest,
    cb?: (error: string, rep: DescribeMCPTaskResponse) => void
  ): Promise<DescribeMCPTaskResponse> {
    return this.request("DescribeMCPTask", req, cb)
  }

  /**
   * 本接口（DescribeDatabase）,查询数据库详细信息
   */
  async DescribeDatabase(
    req: DescribeDatabaseRequest,
    cb?: (error: string, rep: DescribeDatabaseResponse) => void
  ): Promise<DescribeDatabaseResponse> {
    return this.request("DescribeDatabase", req, cb)
  }

  /**
   * 编辑资源队列：根据队列ID修改指定资源队列的名称、描述、资源规格列表和队列类型等信息。
   */
  async ModifyPartitionQueue(
    req: ModifyPartitionQueueRequest,
    cb?: (error: string, rep: ModifyPartitionQueueResponse) => void
  ): Promise<ModifyPartitionQueueResponse> {
    return this.request("ModifyPartitionQueue", req, cb)
  }

  /**
   * 开通TCLake
   */
  async InitializeTCLake(
    req?: InitializeTCLakeRequest,
    cb?: (error: string, rep: InitializeTCLakeResponse) => void
  ): Promise<InitializeTCLakeResponse> {
    return this.request("InitializeTCLake", req, cb)
  }

  /**
   * 本接口（DescribeNotebookSessionStatement）用于查询session 中执行任务的详情
   */
  async DescribeNotebookSessionStatement(
    req: DescribeNotebookSessionStatementRequest,
    cb?: (error: string, rep: DescribeNotebookSessionStatementResponse) => void
  ): Promise<DescribeNotebookSessionStatementResponse> {
    return this.request("DescribeNotebookSessionStatement", req, cb)
  }

  /**
   * 停止推理服务（操作所有部署）。
   */
  async StopInferenceService(
    req: StopInferenceServiceRequest,
    cb?: (error: string, rep: StopInferenceServiceResponse) => void
  ): Promise<StopInferenceServiceResponse> {
    return this.request("StopInferenceService", req, cb)
  }

  /**
   * 绑定数据脱敏策略
   */
  async AttachDataMaskPolicy(
    req: AttachDataMaskPolicyRequest,
    cb?: (error: string, rep: AttachDataMaskPolicyResponse) => void
  ): Promise<AttachDataMaskPolicyResponse> {
    return this.request("AttachDataMaskPolicy", req, cb)
  }

  /**
   * 查询引擎可用的节点规格
   */
  async DescribeEngineNodeSpec(
    req: DescribeEngineNodeSpecRequest,
    cb?: (error: string, rep: DescribeEngineNodeSpecResponse) => void
  ): Promise<DescribeEngineNodeSpecResponse> {
    return this.request("DescribeEngineNodeSpec", req, cb)
  }

  /**
   * 查询监控概览数据（瞬时值）
   */
  async QueryMonitorOverview(
    req: QueryMonitorOverviewRequest,
    cb?: (error: string, rep: QueryMonitorOverviewResponse) => void
  ): Promise<QueryMonitorOverviewResponse> {
    return this.request("QueryMonitorOverview", req, cb)
  }

  /**
   * 列出所有镜像
   */
  async ListImages(
    req: ListImagesRequest,
    cb?: (error: string, rep: ListImagesResponse) => void
  ): Promise<ListImagesResponse> {
    return this.request("ListImages", req, cb)
  }

  /**
   * 本接口（DescribeViews）用于查询数据视图列表。
   */
  async DescribeViews(
    req: DescribeViewsRequest,
    cb?: (error: string, rep: DescribeViewsResponse) => void
  ): Promise<DescribeViewsResponse> {
    return this.request("DescribeViews", req, cb)
  }

  /**
   * 本接口（RegisterThirdPartyAccessUser）用于移除第三方平台访问
   */
  async DeleteThirdPartyAccessUser(
    req?: DeleteThirdPartyAccessUserRequest,
    cb?: (error: string, rep: DeleteThirdPartyAccessUserResponse) => void
  ): Promise<DeleteThirdPartyAccessUserResponse> {
    return this.request("DeleteThirdPartyAccessUser", req, cb)
  }

  /**
   * GetOptimizerPolicy
   */
  async GetOptimizerPolicy(
    req: GetOptimizerPolicyRequest,
    cb?: (error: string, rep: GetOptimizerPolicyResponse) => void
  ): Promise<GetOptimizerPolicyResponse> {
    return this.request("GetOptimizerPolicy", req, cb)
  }

  /**
   * 更新标准引擎资源组网络配置信息
   */
  async UpdateEngineResourceGroupNetworkConfigInfo(
    req: UpdateEngineResourceGroupNetworkConfigInfoRequest,
    cb?: (error: string, rep: UpdateEngineResourceGroupNetworkConfigInfoResponse) => void
  ): Promise<UpdateEngineResourceGroupNetworkConfigInfoResponse> {
    return this.request("UpdateEngineResourceGroupNetworkConfigInfo", req, cb)
  }

  /**
   * 启动实验室
   */
  async StartLab(
    req: StartLabRequest,
    cb?: (error: string, rep: StartLabResponse) => void
  ): Promise<StartLabResponse> {
    return this.request("StartLab", req, cb)
  }

  /**
   * 修改实验室的调度优先级（1-9，数字越大优先级越高）
   */
  async ModifyLabPriority(
    req: ModifyLabPriorityRequest,
    cb?: (error: string, rep: ModifyLabPriorityResponse) => void
  ): Promise<ModifyLabPriorityResponse> {
    return this.request("ModifyLabPriority", req, cb)
  }

  /**
   * 列举用户角色信息
   */
  async DescribeUserRoles(
    req: DescribeUserRolesRequest,
    cb?: (error: string, rep: DescribeUserRolesResponse) => void
  ): Promise<DescribeUserRolesResponse> {
    return this.request("DescribeUserRoles", req, cb)
  }

  /**
   * 本接口（ModifySparkAppBatch）用于批量修改Spark作业参数配置
   */
  async ModifySparkAppBatch(
    req: ModifySparkAppBatchRequest,
    cb?: (error: string, rep: ModifySparkAppBatchResponse) => void
  ): Promise<ModifySparkAppBatchResponse> {
    return this.request("ModifySparkAppBatch", req, cb)
  }

  /**
   * DMS元数据获取库
   */
  async DescribeDMSDatabase(
    req: DescribeDMSDatabaseRequest,
    cb?: (error: string, rep: DescribeDMSDatabaseResponse) => void
  ): Promise<DescribeDMSDatabaseResponse> {
    return this.request("DescribeDMSDatabase", req, cb)
  }

  /**
   * 创建集群
   */
  async CreateRayCluster(
    req: CreateRayClusterRequest,
    cb?: (error: string, rep: CreateRayClusterResponse) => void
  ): Promise<CreateRayClusterResponse> {
    return this.request("CreateRayCluster", req, cb)
  }

  /**
   * 获取模型 README 信息（默认最新版本）
   */
  async GetModelReadme(
    req: GetModelReadmeRequest,
    cb?: (error: string, rep: GetModelReadmeResponse) => void
  ): Promise<GetModelReadmeResponse> {
    return this.request("GetModelReadme", req, cb)
  }

  /**
   * 绑定工作组到用户
   */
  async BindWorkGroupsToUser(
    req: BindWorkGroupsToUserRequest,
    cb?: (error: string, rep: BindWorkGroupsToUserResponse) => void
  ): Promise<BindWorkGroupsToUserResponse> {
    return this.request("BindWorkGroupsToUser", req, cb)
  }

  /**
   * 此接口（DeleteCHDFSBindingProduct）用于删除元数据加速桶和产品绑定关系
   */
  async DeleteCHDFSBindingProduct(
    req: DeleteCHDFSBindingProductRequest,
    cb?: (error: string, rep: DeleteCHDFSBindingProductResponse) => void
  ): Promise<DeleteCHDFSBindingProductResponse> {
    return this.request("DeleteCHDFSBindingProduct", req, cb)
  }

  /**
   * 查询用户自定义引擎参数
   */
  async DescribeUserDataEngineConfig(
    req: DescribeUserDataEngineConfigRequest,
    cb?: (error: string, rep: DescribeUserDataEngineConfigResponse) => void
  ): Promise<DescribeUserDataEngineConfigResponse> {
    return this.request("DescribeUserDataEngineConfig", req, cb)
  }

  /**
   * 本接口（DescribeTaskLog）用于获取spark 作业任务日志详情
   */
  async DescribeTaskLog(
    req: DescribeTaskLogRequest,
    cb?: (error: string, rep: DescribeTaskLogResponse) => void
  ): Promise<DescribeTaskLogResponse> {
    return this.request("DescribeTaskLog", req, cb)
  }

  /**
   * 获取RayCluster的YAML内容
   */
  async GetRayClusterYaml(
    req: GetRayClusterYamlRequest,
    cb?: (error: string, rep: GetRayClusterYamlResponse) => void
  ): Promise<GetRayClusterYamlResponse> {
    return this.request("GetRayClusterYaml", req, cb)
  }

  /**
   * 列出模型所有版本
   */
  async ListModelVersions(
    req: ListModelVersionsRequest,
    cb?: (error: string, rep: ListModelVersionsResponse) => void
  ): Promise<ListModelVersionsResponse> {
    return this.request("ListModelVersions", req, cb)
  }

  /**
   * 获取数据实验室对应的RayCluster YAML内容
   */
  async GetLabYaml(
    req: GetLabYamlRequest,
    cb?: (error: string, rep: GetLabYamlResponse) => void
  ): Promise<GetLabYamlResponse> {
    return this.request("GetLabYaml", req, cb)
  }

  /**
   * 获取资源配置模板详情
   */
  async GetResourceConfig(
    req: GetResourceConfigRequest,
    cb?: (error: string, rep: GetResourceConfigResponse) => void
  ): Promise<GetResourceConfigResponse> {
    return this.request("GetResourceConfig", req, cb)
  }

  /**
   * 获取任务结果查询
   */
  async DescribeMCPTaskResult(
    req: DescribeMCPTaskResultRequest,
    cb?: (error: string, rep: DescribeMCPTaskResultResponse) => void
  ): Promise<DescribeMCPTaskResultResponse> {
    return this.request("DescribeMCPTaskResult", req, cb)
  }

  /**
   * 修改引擎描述信息
   */
  async ModifyDataEngineDescription(
    req: ModifyDataEngineDescriptionRequest,
    cb?: (error: string, rep: ModifyDataEngineDescriptionResponse) => void
  ): Promise<ModifyDataEngineDescriptionResponse> {
    return this.request("ModifyDataEngineDescription", req, cb)
  }

  /**
   * 本接口（DeleteNotebookSession）用于删除交互式session（notebook）
   */
  async DeleteNotebookSession(
    req: DeleteNotebookSessionRequest,
    cb?: (error: string, rep: DeleteNotebookSessionResponse) => void
  ): Promise<DeleteNotebookSessionResponse> {
    return this.request("DeleteNotebookSession", req, cb)
  }

  /**
   * 本接口（CancelNotebookSessionStatement）用于取消session中执行的任务
   */
  async CancelNotebookSessionStatement(
    req: CancelNotebookSessionStatementRequest,
    cb?: (error: string, rep: CancelNotebookSessionStatementResponse) => void
  ): Promise<CancelNotebookSessionStatementResponse> {
    return this.request("CancelNotebookSessionStatement", req, cb)
  }

  /**
   * 创建数据脱敏策略
   */
  async CreateDataMaskStrategy(
    req: CreateDataMaskStrategyRequest,
    cb?: (error: string, rep: CreateDataMaskStrategyResponse) => void
  ): Promise<CreateDataMaskStrategyResponse> {
    return this.request("CreateDataMaskStrategy", req, cb)
  }

  /**
   * 查询计算结果存储位置。
   */
  async DescribeStoreLocation(
    req?: DescribeStoreLocationRequest,
    cb?: (error: string, rep: DescribeStoreLocationResponse) => void
  ): Promise<DescribeStoreLocationResponse> {
    return this.request("DescribeStoreLocation", req, cb)
  }

  /**
   * 查询spark作业信息
   */
  async DescribeSparkAppJob(
    req: DescribeSparkAppJobRequest,
    cb?: (error: string, rep: DescribeSparkAppJobResponse) => void
  ): Promise<DescribeSparkAppJobResponse> {
    return this.request("DescribeSparkAppJob", req, cb)
  }

  /**
   * 设置优化策略的接口
   */
  async SetOptimizerPolicy(
    req: SetOptimizerPolicyRequest,
    cb?: (error: string, rep: SetOptimizerPolicyResponse) => void
  ): Promise<SetOptimizerPolicyResponse> {
    return this.request("SetOptimizerPolicy", req, cb)
  }

  /**
   * 为用户创建数据引擎
   */
  async CreateDataEngine(
    req: CreateDataEngineRequest,
    cb?: (error: string, rep: CreateDataEngineResponse) => void
  ): Promise<CreateDataEngineResponse> {
    return this.request("CreateDataEngine", req, cb)
  }

  /**
   * 删除资源配置模板
   */
  async DeleteResourceConfig(
    req: DeleteResourceConfigRequest,
    cb?: (error: string, rep: DeleteResourceConfigResponse) => void
  ): Promise<DeleteResourceConfigResponse> {
    return this.request("DeleteResourceConfig", req, cb)
  }

  /**
   * DMS元数据删除库
   */
  async DropDMSDatabase(
    req: DropDMSDatabaseRequest,
    cb?: (error: string, rep: DropDMSDatabaseResponse) => void
  ): Promise<DropDMSDatabaseResponse> {
    return this.request("DropDMSDatabase", req, cb)
  }

  /**
   * 查询标准引擎资源组信息
   */
  async DescribeStandardEngineResourceGroups(
    req: DescribeStandardEngineResourceGroupsRequest,
    cb?: (error: string, rep: DescribeStandardEngineResourceGroupsResponse) => void
  ): Promise<DescribeStandardEngineResourceGroupsResponse> {
    return this.request("DescribeStandardEngineResourceGroups", req, cb)
  }

  /**
   * 本接口（ListTaskJobLogDetail）用于获取spark 作业任务日志详情
   */
  async ListTaskJobLogDetail(
    req: ListTaskJobLogDetailRequest,
    cb?: (error: string, rep: ListTaskJobLogDetailResponse) => void
  ): Promise<ListTaskJobLogDetailResponse> {
    return this.request("ListTaskJobLogDetail", req, cb)
  }

  /**
   * 根据任务ID删除Ray任务
   */
  async DeleteRayJob(
    req: DeleteRayJobRequest,
    cb?: (error: string, rep: DeleteRayJobResponse) => void
  ): Promise<DeleteRayJobResponse> {
    return this.request("DeleteRayJob", req, cb)
  }

  /**
   * 更新实验室配置：仅在 CREATED / STOPPED / FAILED 终态可用；变更落 MySQL，下次 Start 按新 spec 创建 K8s 资源
   */
  async UpdateLab(
    req: UpdateLabRequest,
    cb?: (error: string, rep: UpdateLabResponse) => void
  ): Promise<UpdateLabResponse> {
    return this.request("UpdateLab", req, cb)
  }

  /**
   * 查询引擎网络信息
   */
  async DescribeEngineNetworks(
    req: DescribeEngineNetworksRequest,
    cb?: (error: string, rep: DescribeEngineNetworksResponse) => void
  ): Promise<DescribeEngineNetworksResponse> {
    return this.request("DescribeEngineNetworks", req, cb)
  }

  /**
   * 查询用户的托管存储信息
   */
  async DescribeLakeFsInfo(
    req?: DescribeLakeFsInfoRequest,
    cb?: (error: string, rep: DescribeLakeFsInfoResponse) => void
  ): Promise<DescribeLakeFsInfoResponse> {
    return this.request("DescribeLakeFsInfo", req, cb)
  }

  /**
   * 本接口用于更新数据引擎配置
   */
  async UpdateDataEngine(
    req: UpdateDataEngineRequest,
    cb?: (error: string, rep: UpdateDataEngineResponse) => void
  ): Promise<UpdateDataEngineResponse> {
    return this.request("UpdateDataEngine", req, cb)
  }
}

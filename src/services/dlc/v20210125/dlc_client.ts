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
  CheckDataEngineConfigPairsValidityResponse,
  DescribeResultDownloadResponse,
  AccessInfo,
  DescribeDatabasesRequest,
  Asset,
  CreateUserRequest,
  PythonSparkImage,
  ModifyGovernEventRuleResponse,
  DescribeNotebookSessionsRequest,
  SmartOptimizerLifecyclePolicy,
  DescribeDMSDatabaseResponse,
  Policys,
  DropDMSDatabaseRequest,
  NotebookSessionStatementBatchInformation,
  DescribeTablesResponse,
  DescribeDataEngineEventsResponse,
  SessionResourceTemplate,
  DescribeDMSPartitionsRequest,
  DescribeDMSTableResponse,
  CreateTasksInOrderRequest,
  CreateDatabaseRequest,
  DescribeDMSTablesResponse,
  DescribeAdvancedStoreLocationResponse,
  DescribeTablesNameResponse,
  DescribeAdvancedStoreLocationRequest,
  CancelNotebookSessionStatementBatchResponse,
  SmartOptimizerChangeTablePolicy,
  BatchSqlTask,
  CreateNotebookSessionRequest,
  UpdateDataEngineRequest,
  SmartOptimizerWrittenPolicy,
  DescribeSparkAppJobsRequest,
  DeleteNotebookSessionRequest,
  CreateDMSTableResponse,
  DescribeSparkSessionBatchSQLRequest,
  DescribeUsersResponse,
  SmartOptimizerPolicy,
  DescribeUserInfoResponse,
  ModifyUserTypeRequest,
  NotebookSessionStatementInfo,
  ElasticsearchInfo,
  DeleteUsersFromWorkGroupResponse,
  DescribeDLCCatalogAccessResponse,
  DeleteTableResponse,
  DescribeUserRolesResponse,
  CreateExportTaskRequest,
  CreateDMSTableRequest,
  DMSTable,
  ModifyWorkGroupResponse,
  DMSSds,
  OpendThirdAccessUserInfo,
  DescribeDataEnginesScaleDetailResponse,
  DescribeNotebookSessionStatementSqlResultRequest,
  CreateTableResponse,
  ListTaskJobLogNameRequest,
  DescribeTaskResultRequest,
  UpdateUserDataEngineConfigRequest,
  RollbackDataEngineImageRequest,
  QueryResultResponse,
  RevokeDLCCatalogAccessRequest,
  DataGovernPolicy,
  CreateWorkGroupResponse,
  DescribeEngineUsageInfoResponse,
  DescribeWorkGroupInfoResponse,
  DescribeTablesRequest,
  CreateStoreLocationRequest,
  DescribeLakeFsInfoResponse,
  GetOptimizerPolicyResponse,
  DescribeTableRequest,
  Policy,
  DescribeTaskLogRequest,
  DescribeDataEnginesScaleDetailRequest,
  CreateTasksRequest,
  SuspendResumeDataEngineRequest,
  DescribeSparkAppJobsResponse,
  TableResponseInfo,
  UpdateUserDataEngineConfigResponse,
  ModifyUserTypeResponse,
  DescribeDataEnginePythonSparkImagesRequest,
  CancelSparkSessionBatchSQLRequest,
  TasksOverview,
  CreateDatabaseResponse,
  DropDMSPartitionsResponse,
  CreateWorkGroupRequest,
  DescribeDatasourceConnectionRequest,
  CheckDataEngineImageCanBeUpgradeRequest,
  QueryInternalTableWarehouseRequest,
  CreateResultDownloadRequest,
  DescribeNotebookSessionStatementSqlResultResponse,
  ModifyUserRequest,
  DescribeTasksCostInfoResponse,
  AddDMSPartitionsResponse,
  CancelNotebookSessionStatementRequest,
  SparkMonitorMetrics,
  CreateDMSDatabaseResponse,
  CreateStoreLocationResponse,
  BatchSQLCostInfo,
  DescribeTablesNameRequest,
  WorkGroupInfo,
  SwitchDataEngineRequest,
  DLCCatalogAccess,
  ModifyUserResponse,
  DeleteScriptResponse,
  Task,
  DataEngineConfigInstanceInfo,
  CrontabResumeSuspendStrategy,
  VpcInfo,
  NotebookSessions,
  CreateNotebookSessionStatementSupportBatchSQLRequest,
  DetachWorkGroupPolicyResponse,
  DescribeSparkSessionBatchSqlLogResponse,
  SwitchDataEngineResponse,
  DescribeLakeFsInfoRequest,
  CreateCHDFSBindingProductResponse,
  DescribeUserInfoRequest,
  DescribeUserTypeResponse,
  DeleteThirdPartyAccessUserRequest,
  DeleteUserResponse,
  DescribeForbiddenTableProRequest,
  CreateDataEngineResponse,
  DescribeDataEngineRequest,
  GroupInfo,
  KerberosInfo,
  CreateDataEngineRequest,
  DescribeNotebookSessionRequest,
  UpgradeDataEngineImageRequest,
  CSV,
  CreateNotebookSessionStatementRequest,
  DescribeUsersRequest,
  CreateExportTaskResponse,
  AddUsersToWorkGroupRequest,
  ModifyAdvancedStoreLocationRequest,
  DescribeNotebookSessionLogRequest,
  UserInfo,
  GetOptimizerPolicyRequest,
  Users,
  DataEngineConfigPair,
  SuspendResumeDataEngineResponse,
  DatasourceConnectionLocation,
  AttachUserPolicyRequest,
  CancelTaskRequest,
  TextFile,
  WorkGroups,
  CreateNotebookSessionStatementResponse,
  ListTaskJobLogNameResponse,
  DescribeLakeFsTaskResultRequest,
  OtherCHDFSBinding,
  AlterDMSTableRequest,
  DescribeDMSPartitionsResponse,
  CreateScriptRequest,
  DataFormat,
  DescribeNotebookSessionLogResponse,
  DescribeForbiddenTableProResponse,
  DescribeWorkGroupInfoRequest,
  DescribeOtherCHDFSBindingListRequest,
  CancelTaskResponse,
  TableInfo,
  DescribeSparkSessionBatchSQLResponse,
  DescribeSparkSessionBatchSQLCostResponse,
  DescribeTasksOverviewResponse,
  KafkaInfo,
  FavorInfo,
  DeleteDataEngineRequest,
  SmartPolicy,
  CreateSparkSessionBatchSQLResponse,
  DescribeDMSDatabaseRequest,
  DescribeLakeFsDirSummaryRequest,
  Other,
  CreateSparkAppResponse,
  CreateTaskResponse,
  MountPointAssociates,
  AlterDMSPartitionResponse,
  DescribeTableResponse,
  DetachUserPolicyResponse,
  AnalysisTaskResults,
  UnbindWorkGroupsFromUserResponse,
  AlterDMSDatabaseResponse,
  CancelNotebookSessionStatementResponse,
  DataEngineInfo,
  LockMetaDataResponse,
  CheckLockMetaDataResponse,
  AlterDMSDatabaseRequest,
  DescribeOtherCHDFSBindingListResponse,
  UpdateRowFilterResponse,
  DescribeDataEngineEventsRequest,
  DescribeDataEnginePythonSparkImagesResponse,
  LockComponentInfo,
  DescribeDataEnginesResponse,
  DatasourceConnectionConfig,
  UpdateRowFilterRequest,
  TColumn,
  LakeFileSystemToken,
  AlterDMSTableResponse,
  DescribeUpdatableDataEnginesResponse,
  DeleteUserRequest,
  DataEngineScaleInfoDetail,
  DeleteDataEngineResponse,
  CosPermission,
  IpPortPair,
  DescribeTasksAnalysisResponse,
  RestartDataEngineResponse,
  SwitchDataEngineImageResponse,
  DescribeSparkAppTasksResponse,
  CreateCHDFSBindingProductRequest,
  NotebookSessionInfo,
  DataEngineBasicInfo,
  ModifySparkAppRequest,
  AssignMangedTablePropertiesRequest,
  UserIdSetOfWorkGroupId,
  AlterDMSPartitionRequest,
  ReportHeartbeatMetaDataResponse,
  QueryInternalTableWarehouseResponse,
  Script,
  CheckDataEngineImageCanBeUpgradeResponse,
  CreateInternalTableRequest,
  TasksInfo,
  AttachWorkGroupPolicyRequest,
  StatementOutput,
  CreateUserResponse,
  DescribeNotebookSessionStatementsRequest,
  UpdateDataEngineResponse,
  DescribeTasksOverviewRequest,
  TPartition,
  LakeFsInfo,
  QueryResultRequest,
  CheckDataEngineImageCanBeRollbackRequest,
  CreateTaskRequest,
  CreateTableRequest,
  DescribeSparkSessionBatchSqlLogRequest,
  WorkGroupIdSetOfUserId,
  DescribeUpdatableDataEnginesRequest,
  DeleteTableRequest,
  DescribeStoreLocationRequest,
  DescribeViewsRequest,
  GrantDLCCatalogAccessRequest,
  ReportHeartbeatMetaDataRequest,
  AttachWorkGroupPolicyResponse,
  DescribeDMSTablesRequest,
  GenerateCreateMangedTableSqlResponse,
  DatasourceConnectionInfo,
  DescribeDataEngineImageVersionsRequest,
  BindWorkGroupsToUserResponse,
  SparkSessionBatchLog,
  DeleteScriptRequest,
  AddDMSPartitionsRequest,
  DescribeUserRolesRequest,
  ResourceInfo,
  CreateImportTaskResponse,
  SmartOptimizerIndexPolicy,
  RenewDataEngineRequest,
  DescribeTasksAnalysisRequest,
  DescribeScriptsResponse,
  UnbindWorkGroupsFromUserRequest,
  ViewResponseInfo,
  NetworkConnection,
  CreateImportTaskRequest,
  ModifyWorkGroupRequest,
  SmartPolicyBaseInfo,
  DescribeDatabasesResponse,
  DMSTableInfo,
  DMSPartition,
  WorkGroupDetailInfo,
  DescribeThirdPartyAccessUserRequest,
  AssignMangedTablePropertiesResponse,
  UpdateDataEngineConfigResponse,
  DataEngineImageVersion,
  MysqlInfo,
  GenerateCreateMangedTableSqlRequest,
  StatementInformation,
  OtherDatasourceConnection,
  TaskResultInfo,
  DeleteThirdPartyAccessUserResponse,
  AddUsersToWorkGroupResponse,
  DescribeDataEngineImageVersionsResponse,
  DeleteSparkAppResponse,
  DescribeUserDataEngineConfigRequest,
  CreateTasksResponse,
  GrantDLCCatalogAccessResponse,
  CreateSparkAppRequest,
  CreateSparkSessionBatchSQLRequest,
  ListTaskJobLogDetailResponse,
  DescribeSubUserAccessPolicyRequest,
  HouseEventsInfo,
  SQLTask,
  AttachUserPolicyResponse,
  CreateDMSDatabaseRequest,
  DetachWorkGroupPolicyRequest,
  DeleteCHDFSBindingProductResponse,
  CancelNotebookSessionStatementBatchRequest,
  DescribeLakeFsTaskResultResponse,
  DescribeTasksCostInfoRequest,
  UserDetailInfo,
  DescribeTaskResultResponse,
  DescribeDatasourceConnectionResponse,
  PrestoMonitorMetrics,
  DescribeNotebookSessionStatementRequest,
  ModifyDataEngineDescriptionRequest,
  DropDMSTableResponse,
  WorkGroupMessage,
  DescribeUserDataEngineConfigResponse,
  DescribeSparkAppJobRequest,
  TCHouseD,
  CreateResultDownloadResponse,
  RestartDataEngineRequest,
  DescribeNotebookSessionResponse,
  DescribeSubUserAccessPolicyResponse,
  CreateScriptResponse,
  ModifyAdvancedStoreLocationResponse,
  CreateTasksInOrderResponse,
  TagInfo,
  DeleteSparkAppRequest,
  DescribeDLCCatalogAccessRequest,
  DetachUserPolicyRequest,
  DescribeTaskLogResponse,
  DescribeTasksResponse,
  DropDMSPartitionsRequest,
  CommonMetrics,
  UserRole,
  DescribeUserTypeRequest,
  CheckDataEngineConfigPairsValidityRequest,
  CSVSerde,
  HiveInfo,
  CHDFSProductVpcInfo,
  ViewBaseInfo,
  CheckLockMetaDataRequest,
  AddOptimizerEnginesResponse,
  DescribeTasksRequest,
  CreateSparkAppTaskRequest,
  DeleteWorkGroupRequest,
  KVPair,
  TableBaseInfo,
  UnlockMetaDataRequest,
  CreateSparkAppTaskResponse,
  ListTaskJobLogDetailRequest,
  SparkSessionBatchLogOperate,
  RevokeDLCCatalogAccessResponse,
  DeleteCHDFSBindingProductRequest,
  RenewDataEngineResponse,
  DataSourceInfo,
  DescribeNotebookSessionsResponse,
  DescribeEngineUsageInfoRequest,
  DataMaskStrategyInfo,
  RollbackDataEngineImageResponse,
  AddOptimizerEnginesRequest,
  Partition,
  ModifySparkAppBatchRequest,
  RegisterThirdPartyAccessUserResponse,
  ModifySparkAppResponse,
  Property,
  DescribeWorkGroupsResponse,
  SparkJobInfo,
  DescribeScriptsRequest,
  DescribeSparkAppJobResponse,
  DescribeNotebookSessionStatementResponse,
  UpgradeDataEngineImageResponse,
  StreamingStatistics,
  TaskResponseInfo,
  DescribeStoreLocationResponse,
  QueryTaskCostDetailResponse,
  Execution,
  CreateNotebookSessionStatementSupportBatchSQLResponse,
  BindWorkGroupsToUserRequest,
  Column,
  Filter,
  DescribeLakeFsDirSummaryResponse,
  UnlockMetaDataResponse,
  DeleteWorkGroupResponse,
  ModifySparkAppBatchResponse,
  CheckDataEngineImageCanBeRollbackResponse,
  DeleteNotebookSessionResponse,
  DescribeThirdPartyAccessUserResponse,
  DescribeNotebookSessionStatementsResponse,
  CancelSparkSessionBatchSQLResponse,
  DatabaseInfo,
  DescribeDataEnginesRequest,
  JobLogResult,
  DropDMSDatabaseResponse,
  VpcCidrBlock,
  DeleteUsersFromWorkGroupRequest,
  DMSColumnOrder,
  DescribeViewsResponse,
  DescribeWorkGroupsRequest,
  LockMetaDataRequest,
  DescribeSparkSessionBatchSQLCostRequest,
  CreateNotebookSessionResponse,
  DescribeDataEngineResponse,
  DataEngineScaleInfo,
  QueryTaskCostDetailRequest,
  ModifyDataEngineDescriptionResponse,
  UpdateDataEngineConfigRequest,
  DropDMSTableRequest,
  CreateInternalTableResponse,
  DescribeSparkAppTasksRequest,
  UserMessage,
  RegisterThirdPartyAccessUserRequest,
  SwitchDataEngineImageRequest,
  DescribeDMSTableRequest,
  ModifyGovernEventRuleRequest,
  DatabaseResponseInfo,
  DMSColumn,
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
   * 本接口（CreateTask）用于创建并执行SQL任务。（推荐使用CreateTasks接口）
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
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
   * 列举用户角色信息
   */
  async DescribeUserRoles(
    req: DescribeUserRolesRequest,
    cb?: (error: string, rep: DescribeUserRolesResponse) => void
  ): Promise<DescribeUserRolesResponse> {
    return this.request("DescribeUserRoles", req, cb)
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
   * 获取工作组详细信息
   */
  async DescribeWorkGroupInfo(
    req: DescribeWorkGroupInfoRequest,
    cb?: (error: string, rep: DescribeWorkGroupInfoResponse) => void
  ): Promise<DescribeWorkGroupInfoResponse> {
    return this.request("DescribeWorkGroupInfo", req, cb)
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
   * 本接口（CreateNotebookSessionStatementSupportBatchSQL）用于创建交互式session并执行SQL任务
   */
  async CreateNotebookSessionStatementSupportBatchSQL(
    req: CreateNotebookSessionStatementSupportBatchSQLRequest,
    cb?: (error: string, rep: CreateNotebookSessionStatementSupportBatchSQLResponse) => void
  ): Promise<CreateNotebookSessionStatementSupportBatchSQLResponse> {
    return this.request("CreateNotebookSessionStatementSupportBatchSQL", req, cb)
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
   * 查询DLC Catalog授权列表
   */
  async DescribeDLCCatalogAccess(
    req: DescribeDLCCatalogAccessRequest,
    cb?: (error: string, rep: DescribeDLCCatalogAccessResponse) => void
  ): Promise<DescribeDLCCatalogAccessResponse> {
    return this.request("DescribeDLCCatalogAccess", req, cb)
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
   * 获取用户类型
   */
  async DescribeUserType(
    req: DescribeUserTypeRequest,
    cb?: (error: string, rep: DescribeUserTypeResponse) => void
  ): Promise<DescribeUserTypeResponse> {
    return this.request("DescribeUserType", req, cb)
  }

  /**
   * 该接口（DescribleTasks）用于查询任务列表
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
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
   * 切换引擎镜像版本
   */
  async SwitchDataEngineImage(
    req: SwitchDataEngineImageRequest,
    cb?: (error: string, rep: SwitchDataEngineImageResponse) => void
  ): Promise<SwitchDataEngineImageResponse> {
    return this.request("SwitchDataEngineImage", req, cb)
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
   * 本接口（DescribeNotebookSessions）用于查询交互式 session列表
   */
  async DescribeNotebookSessions(
    req: DescribeNotebookSessionsRequest,
    cb?: (error: string, rep: DescribeNotebookSessionsResponse) => void
  ): Promise<DescribeNotebookSessionsResponse> {
    return this.request("DescribeNotebookSessions", req, cb)
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
   * 撤销DLC Catalog访问权限
   */
  async RevokeDLCCatalogAccess(
    req: RevokeDLCCatalogAccessRequest,
    cb?: (error: string, rep: RevokeDLCCatalogAccessResponse) => void
  ): Promise<RevokeDLCCatalogAccessResponse> {
    return this.request("RevokeDLCCatalogAccess", req, cb)
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
   * 本接口（DescribeTables）用于查询数据表列表。
   */
  async DescribeTables(
    req: DescribeTablesRequest,
    cb?: (error: string, rep: DescribeTablesResponse) => void
  ): Promise<DescribeTablesResponse> {
    return this.request("DescribeTables", req, cb)
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
   * DMS元数据更新分区
   */
  async AlterDMSPartition(
    req: AlterDMSPartitionRequest,
    cb?: (error: string, rep: AlterDMSPartitionResponse) => void
  ): Promise<AlterDMSPartitionResponse> {
    return this.request("AlterDMSPartition", req, cb)
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
    req?: AddOptimizerEnginesRequest,
    cb?: (error: string, rep: AddOptimizerEnginesResponse) => void
  ): Promise<AddOptimizerEnginesResponse> {
    return this.request("AddOptimizerEngines", req, cb)
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
   * 查询sql查询界面高级设置
   */
  async DescribeAdvancedStoreLocation(
    req?: DescribeAdvancedStoreLocationRequest,
    cb?: (error: string, rep: DescribeAdvancedStoreLocationResponse) => void
  ): Promise<DescribeAdvancedStoreLocationResponse> {
    return this.request("DescribeAdvancedStoreLocation", req, cb)
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
   * 查询spark作业列表
   */
  async DescribeSparkAppJobs(
    req: DescribeSparkAppJobsRequest,
    cb?: (error: string, rep: DescribeSparkAppJobsResponse) => void
  ): Promise<DescribeSparkAppJobsResponse> {
    return this.request("DescribeSparkAppJobs", req, cb)
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
   * 此接口（DeleteCHDFSBindingProduct）用于删除元数据加速桶和产品绑定关系
   */
  async DeleteCHDFSBindingProduct(
    req: DeleteCHDFSBindingProductRequest,
    cb?: (error: string, rep: DeleteCHDFSBindingProductResponse) => void
  ): Promise<DeleteCHDFSBindingProductResponse> {
    return this.request("DeleteCHDFSBindingProduct", req, cb)
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
   * 分配原生表表属性
   */
  async AssignMangedTableProperties(
    req: AssignMangedTablePropertiesRequest,
    cb?: (error: string, rep: AssignMangedTablePropertiesResponse) => void
  ): Promise<AssignMangedTablePropertiesResponse> {
    return this.request("AssignMangedTableProperties", req, cb)
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
   * 创建spark作业
   */
  async CreateSparkApp(
    req: CreateSparkAppRequest,
    cb?: (error: string, rep: CreateSparkAppResponse) => void
  ): Promise<CreateSparkAppResponse> {
    return this.request("CreateSparkApp", req, cb)
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
   * 本接口（DescribeNotebookSessionStatements）用于查询Session中执行的任务列表
   */
  async DescribeNotebookSessionStatements(
    req: DescribeNotebookSessionStatementsRequest,
    cb?: (error: string, rep: DescribeNotebookSessionStatementsResponse) => void
  ): Promise<DescribeNotebookSessionStatementsResponse> {
    return this.request("DescribeNotebookSessionStatements", req, cb)
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
   * 本接口用于控制挂起或启动数据引擎
   */
  async SuspendResumeDataEngine(
    req: SuspendResumeDataEngineRequest,
    cb?: (error: string, rep: SuspendResumeDataEngineResponse) => void
  ): Promise<SuspendResumeDataEngineResponse> {
    return this.request("SuspendResumeDataEngine", req, cb)
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
   * 绑定鉴权策略到用户
   */
  async AttachUserPolicy(
    req: AttachUserPolicyRequest,
    cb?: (error: string, rep: AttachUserPolicyResponse) => void
  ): Promise<AttachUserPolicyResponse> {
    return this.request("AttachUserPolicy", req, cb)
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
   * 本接口（CreateNotebookSessionStatement）用于在session中执行代码片段
   */
  async CreateNotebookSessionStatement(
    req: CreateNotebookSessionStatementRequest,
    cb?: (error: string, rep: CreateNotebookSessionStatementResponse) => void
  ): Promise<CreateNotebookSessionStatementResponse> {
    return this.request("CreateNotebookSessionStatement", req, cb)
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
   * DMS元数据删除库
   */
  async DropDMSDatabase(
    req: DropDMSDatabaseRequest,
    cb?: (error: string, rep: DropDMSDatabaseResponse) => void
  ): Promise<DropDMSDatabaseResponse> {
    return this.request("DropDMSDatabase", req, cb)
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
   * DMS元数据获取表
   */
  async DescribeDMSTable(
    req: DescribeDMSTableRequest,
    cb?: (error: string, rep: DescribeDMSTableResponse) => void
  ): Promise<DescribeDMSTableResponse> {
    return this.request("DescribeDMSTable", req, cb)
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
   * DMS元数据删除分区
   */
  async DropDMSPartitions(
    req: DropDMSPartitionsRequest,
    cb?: (error: string, rep: DropDMSPartitionsResponse) => void
  ): Promise<DropDMSPartitionsResponse> {
    return this.request("DropDMSPartitions", req, cb)
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
   * 本接口（CheckDataEngineImageCanBeRollback）用于查看集群是否能回滚。
   */
  async CheckDataEngineImageCanBeRollback(
    req: CheckDataEngineImageCanBeRollbackRequest,
    cb?: (error: string, rep: CheckDataEngineImageCanBeRollbackResponse) => void
  ): Promise<CheckDataEngineImageCanBeRollbackResponse> {
    return this.request("CheckDataEngineImageCanBeRollback", req, cb)
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
   * 修改用户信息
   */
  async ModifyUser(
    req: ModifyUserRequest,
    cb?: (error: string, rep: ModifyUserResponse) => void
  ): Promise<ModifyUserResponse> {
    return this.request("ModifyUser", req, cb)
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
   * GetOptimizerPolicy
   */
  async GetOptimizerPolicy(
    req: GetOptimizerPolicyRequest,
    cb?: (error: string, rep: GetOptimizerPolicyResponse) => void
  ): Promise<GetOptimizerPolicyResponse> {
    return this.request("GetOptimizerPolicy", req, cb)
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
   * 本接口用于更新数据引擎配置
   */
  async UpdateDataEngine(
    req: UpdateDataEngineRequest,
    cb?: (error: string, rep: UpdateDataEngineResponse) => void
  ): Promise<UpdateDataEngineResponse> {
    return this.request("UpdateDataEngine", req, cb)
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
   * 删除数据引擎
   */
  async DeleteDataEngine(
    req: DeleteDataEngineRequest,
    cb?: (error: string, rep: DeleteDataEngineResponse) => void
  ): Promise<DeleteDataEngineResponse> {
    return this.request("DeleteDataEngine", req, cb)
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
   * 用户某种操作，触发引擎配置修改
   */
  async UpdateDataEngineConfig(
    req: UpdateDataEngineConfigRequest,
    cb?: (error: string, rep: UpdateDataEngineConfigResponse) => void
  ): Promise<UpdateDataEngineConfigResponse> {
    return this.request("UpdateDataEngineConfig", req, cb)
  }

  /**
   * 按顺序创建任务（已经废弃，后期不再维护，请使用接口CreateTasks）
   */
  async CreateTasksInOrder(
    req: CreateTasksInOrderRequest,
    cb?: (error: string, rep: CreateTasksInOrderResponse) => void
  ): Promise<CreateTasksInOrderResponse> {
    return this.request("CreateTasksInOrder", req, cb)
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
   * DMS元数据创建表
   */
  async CreateDMSTable(
    req: CreateDMSTableRequest,
    cb?: (error: string, rep: CreateDMSTableResponse) => void
  ): Promise<CreateDMSTableResponse> {
    return this.request("CreateDMSTable", req, cb)
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
   * 本接口（RegisterThirdPartyAccessUser）用于开通第三方平台访问
   */
  async RegisterThirdPartyAccessUser(
    req?: RegisterThirdPartyAccessUserRequest,
    cb?: (error: string, rep: RegisterThirdPartyAccessUserResponse) => void
  ): Promise<RegisterThirdPartyAccessUserResponse> {
    return this.request("RegisterThirdPartyAccessUser", req, cb)
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
   * 从工作组中删除用户
   */
  async DeleteUsersFromWorkGroup(
    req: DeleteUsersFromWorkGroupRequest,
    cb?: (error: string, rep: DeleteUsersFromWorkGroupResponse) => void
  ): Promise<DeleteUsersFromWorkGroupResponse> {
    return this.request("DeleteUsersFromWorkGroup", req, cb)
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
   * 解绑用户上的用户组
   */
  async UnbindWorkGroupsFromUser(
    req: UnbindWorkGroupsFromUserRequest,
    cb?: (error: string, rep: UnbindWorkGroupsFromUserResponse) => void
  ): Promise<UnbindWorkGroupsFromUserResponse> {
    return this.request("UnbindWorkGroupsFromUser", req, cb)
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
   * 该接口（CreateScript）用于创建sql脚本。
   */
  async CreateScript(
    req: CreateScriptRequest,
    cb?: (error: string, rep: CreateScriptResponse) => void
  ): Promise<CreateScriptResponse> {
    return this.request("CreateScript", req, cb)
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
   * 本接口（DescribeNotebookSessionStatement）用于查询session 中执行任务的详情
   */
  async DescribeNotebookSessionStatement(
    req: DescribeNotebookSessionStatementRequest,
    cb?: (error: string, rep: DescribeNotebookSessionStatementResponse) => void
  ): Promise<DescribeNotebookSessionStatementResponse> {
    return this.request("DescribeNotebookSessionStatement", req, cb)
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
   * 更新spark作业
   */
  async ModifySparkApp(
    req: ModifySparkAppRequest,
    cb?: (error: string, rep: ModifySparkAppResponse) => void
  ): Promise<ModifySparkAppResponse> {
    return this.request("ModifySparkApp", req, cb)
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
   * DMS元数据获取库
   */
  async DescribeDMSDatabase(
    req: DescribeDMSDatabaseRequest,
    cb?: (error: string, rep: DescribeDMSDatabaseResponse) => void
  ): Promise<DescribeDMSDatabaseResponse> {
    return this.request("DescribeDMSDatabase", req, cb)
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
   * 查询Spark作业的运行任务列表
   */
  async DescribeSparkAppTasks(
    req: DescribeSparkAppTasksRequest,
    cb?: (error: string, rep: DescribeSparkAppTasksResponse) => void
  ): Promise<DescribeSparkAppTasksResponse> {
    return this.request("DescribeSparkAppTasks", req, cb)
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
   * 本接口（ListTaskJobLogDetail）用于获取spark 作业任务日志详情
   */
  async ListTaskJobLogDetail(
    req: ListTaskJobLogDetailRequest,
    cb?: (error: string, rep: ListTaskJobLogDetailResponse) => void
  ): Promise<ListTaskJobLogDetailResponse> {
    return this.request("ListTaskJobLogDetail", req, cb)
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
}

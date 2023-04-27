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
  DescribeResultDownloadResponse,
  DescribeTaskResultResponse,
  DescribeNotebookSessionStatementRequest,
  NetworkConnection,
  CancelNotebookSessionStatementRequest,
  DescribeDatabasesRequest,
  WorkGroupMessage,
  DeleteUserRequest,
  ListTaskJobLogDetailResponse,
  Asset,
  TaskResultInfo,
  CreateResultDownloadResponse,
  ModifyGovernEventRuleResponse,
  DescribeNotebookSessionsRequest,
  CreateDMSDatabaseResponse,
  CreateStoreLocationResponse,
  DescribeNotebookSessionResponse,
  DescribeDMSDatabaseResponse,
  UnbindWorkGroupsFromUserResponse,
  DropDMSDatabaseRequest,
  CreateScriptResponse,
  CreateTasksInOrderResponse,
  DescribeTablesResponse,
  SparkJobInfo,
  SwitchDataEngineRequest,
  SuspendResumeDataEngineResponse,
  DeleteSparkAppRequest,
  ModifyUserResponse,
  DeleteScriptResponse,
  TableInfo,
  Task,
  DetachUserPolicyRequest,
  CrontabResumeSuspendStrategy,
  AlterDMSTableResponse,
  DescribeEngineUsageInfoRequest,
  DescribeDMSTableResponse,
  DropDMSPartitionsRequest,
  NotebookSessions,
  CreateNotebookSessionStatementSupportBatchSQLRequest,
  CreateTasksInOrderRequest,
  AddDMSPartitionsResponse,
  DetachWorkGroupPolicyResponse,
  GenerateCreateMangedTableSqlRequest,
  SwitchDataEngineResponse,
  CSVSerde,
  DescribeLakeFsInfoRequest,
  ModifySparkAppRequest,
  StreamingStatistics,
  CreateDatabaseRequest,
  GenerateCreateMangedTableSqlResponse,
  DescribeDMSTablesResponse,
  UserIdSetOfWorkGroupId,
  AlterDMSPartitionRequest,
  ViewBaseInfo,
  CheckLockMetaDataRequest,
  DescribeSparkAppJobRequest,
  CreateDatabaseResponse,
  DescribeTasksRequest,
  CreateSparkAppTaskRequest,
  CancelNotebookSessionStatementBatchResponse,
  KVPair,
  TableBaseInfo,
  UnlockMetaDataRequest,
  AttachUserPolicyRequest,
  CreateInternalTableRequest,
  ListTaskJobLogDetailRequest,
  TasksInfo,
  AttachWorkGroupPolicyRequest,
  StatementOutput,
  TagInfo,
  CreateUserResponse,
  DescribeNotebookSessionStatementsRequest,
  DeleteUserResponse,
  DescribeDatabasesResponse,
  LockComponentInfo,
  DescribeNotebookSessionsResponse,
  DescribeDMSPartitionsRequest,
  TPartition,
  DescribeForbiddenTableProRequest,
  CreateDataEngineResponse,
  DescribeSparkAppJobsRequest,
  DeleteNotebookSessionRequest,
  CreateDMSTableResponse,
  CreateNotebookSessionRequest,
  WorkGroupIdSetOfUserId,
  Partition,
  CreateDataEngineRequest,
  CreateTaskRequest,
  DescribeNotebookSessionRequest,
  CSV,
  NotebookSessionStatementInfo,
  CreateTableRequest,
  CreateNotebookSessionStatementRequest,
  DescribeWorkGroupsResponse,
  CreateImportTaskRequest,
  DescribeScriptsRequest,
  DescribeSparkAppJobResponse,
  CreateExportTaskResponse,
  AddUsersToWorkGroupRequest,
  DescribeStoreLocationRequest,
  AddUsersToWorkGroupResponse,
  DescribeNotebookSessionLogRequest,
  UserInfo,
  CreateExportTaskRequest,
  DescribeNotebookSessionStatementResponse,
  ReportHeartbeatMetaDataResponse,
  DataEngineConfigPair,
  ReportHeartbeatMetaDataRequest,
  CreateDMSTableRequest,
  CancelNotebookSessionStatementResponse,
  DMSTable,
  AttachWorkGroupPolicyResponse,
  ModifyWorkGroupResponse,
  DescribeDMSTablesRequest,
  ModifyUserRequest,
  DMSSds,
  CreateSparkAppTaskResponse,
  CancelTaskRequest,
  TaskResponseInfo,
  TextFile,
  BindWorkGroupsToUserResponse,
  CreateNotebookSessionStatementResponse,
  DescribeStoreLocationResponse,
  DeleteScriptRequest,
  AddDMSPartitionsRequest,
  Script,
  NotebookSessionStatementBatchInformation,
  DescribeNotebookSessionStatementSqlResultRequest,
  ModifySparkAppResponse,
  AlterDMSTableRequest,
  CreateImportTaskResponse,
  NotebookSessionInfo,
  Execution,
  CreateTableResponse,
  WorkGroupInfo,
  CreateNotebookSessionStatementSupportBatchSQLResponse,
  CreateScriptRequest,
  BindWorkGroupsToUserRequest,
  Column,
  DeleteWorkGroupRequest,
  DescribeTaskResultRequest,
  Filter,
  DescribeLakeFsDirSummaryResponse,
  DataFormat,
  DescribeNotebookSessionLogResponse,
  ViewResponseInfo,
  DescribeForbiddenTableProResponse,
  CreateUserRequest,
  ModifyWorkGroupRequest,
  CancelTaskResponse,
  DataGovernPolicy,
  UnlockMetaDataResponse,
  DeleteWorkGroupResponse,
  DropDMSTableResponse,
  DescribeTableRequest,
  CreateWorkGroupResponse,
  DescribeEngineUsageInfoResponse,
  DescribeTablesRequest,
  DeleteNotebookSessionResponse,
  CreateStoreLocationRequest,
  DMSTableInfo,
  DescribeNotebookSessionStatementsResponse,
  AttachUserPolicyResponse,
  DescribeLakeFsInfoResponse,
  DropDMSTableRequest,
  DescribeNotebookSessionStatementSqlResultResponse,
  DMSPartition,
  DatabaseInfo,
  DescribeDMSPartitionsResponse,
  DeleteUsersFromWorkGroupResponse,
  UnbindWorkGroupsFromUserRequest,
  DescribeDMSDatabaseRequest,
  DescribeLakeFsDirSummaryRequest,
  Policy,
  JobLogResult,
  Other,
  DropDMSDatabaseResponse,
  DescribeUsersRequest,
  DeleteUsersFromWorkGroupRequest,
  DMSColumnOrder,
  CreateSparkAppResponse,
  CreateTaskResponse,
  DeleteSparkAppResponse,
  AlterDMSPartitionResponse,
  CreateTasksRequest,
  SuspendResumeDataEngineRequest,
  DescribeTableResponse,
  DescribeSparkAppJobsResponse,
  DescribeSparkAppTasksResponse,
  TableResponseInfo,
  DescribeViewsRequest,
  LockMetaDataRequest,
  DetachUserPolicyResponse,
  DescribeWorkGroupsRequest,
  TasksOverview,
  UpdateRowFilterResponse,
  CreateTasksResponse,
  CreateNotebookSessionResponse,
  DescribeViewsResponse,
  DescribeTasksResponse,
  CreateSparkAppRequest,
  DescribeDataEnginesRequest,
  DropDMSPartitionsResponse,
  AlterDMSDatabaseResponse,
  CreateWorkGroupRequest,
  CreateInternalTableResponse,
  DataEngineInfo,
  DescribeSparkAppTasksRequest,
  LockMetaDataResponse,
  CheckLockMetaDataResponse,
  AlterDMSDatabaseRequest,
  SQLTask,
  UserMessage,
  DescribeUsersResponse,
  Property,
  CreateResultDownloadRequest,
  CreateDMSDatabaseRequest,
  DetachWorkGroupPolicyRequest,
  DescribeDMSTableRequest,
  ModifyGovernEventRuleRequest,
  CancelNotebookSessionStatementBatchRequest,
  DescribeDataEnginesResponse,
  DescribeScriptsResponse,
  DatabaseResponseInfo,
  DMSColumn,
  UpdateRowFilterRequest,
  TColumn,
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
   * 本接口（CreateTask）用于创建sql查询任务。（推荐使用CreateTasks接口）
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
   * 本接口（DescribeForbiddenTablePro）用于获取被禁用的表属性列表
   */
  async DescribeForbiddenTablePro(
    req?: DescribeForbiddenTableProRequest,
    cb?: (error: string, rep: DescribeForbiddenTableProResponse) => void
  ): Promise<DescribeForbiddenTableProResponse> {
    return this.request("DescribeForbiddenTablePro", req, cb)
  }

  /**
   * 本接口（DescribeNotebookSession）用于获取notebook livy session详情信息
   */
  async DescribeNotebookSession(
    req: DescribeNotebookSessionRequest,
    cb?: (error: string, rep: DescribeNotebookSessionResponse) => void
  ): Promise<DescribeNotebookSessionResponse> {
    return this.request("DescribeNotebookSession", req, cb)
  }

  /**
   * 本接口（CreateNotebookSession）用于创建notebook livy session
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
   * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
   */
  async CreateStoreLocation(
    req: CreateStoreLocationRequest,
    cb?: (error: string, rep: CreateStoreLocationResponse) => void
  ): Promise<CreateStoreLocationResponse> {
    return this.request("CreateStoreLocation", req, cb)
  }

  /**
   * 本接口（CreateNotebookSessionStatementSupportBatchSQL）用于创建Statement批量运行SQL任务。
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
   * DMS元数据更新库
   */
  async AlterDMSDatabase(
    req: AlterDMSDatabaseRequest,
    cb?: (error: string, rep: AlterDMSDatabaseResponse) => void
  ): Promise<AlterDMSDatabaseResponse> {
    return this.request("AlterDMSDatabase", req, cb)
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
   * 查询任务结果
   */
  async DescribeTaskResult(
    req: DescribeTaskResultRequest,
    cb?: (error: string, rep: DescribeTaskResultResponse) => void
  ): Promise<DescribeTaskResultResponse> {
    return this.request("DescribeTaskResult", req, cb)
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
   * 创建spark任务
   */
  async CreateSparkAppTask(
    req: CreateSparkAppTaskRequest,
    cb?: (error: string, rep: CreateSparkAppTaskResponse) => void
  ): Promise<CreateSparkAppTaskResponse> {
    return this.request("CreateSparkAppTask", req, cb)
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
   * 本接口（DescribeNotebookSessions）用于获取notebook livy session列表
   */
  async DescribeNotebookSessions(
    req: DescribeNotebookSessionsRequest,
    cb?: (error: string, rep: DescribeNotebookSessionsResponse) => void
  ): Promise<DescribeNotebookSessionsResponse> {
    return this.request("DescribeNotebookSessions", req, cb)
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
   * DMS元数据更新分区
   */
  async AlterDMSPartition(
    req: AlterDMSPartitionRequest,
    cb?: (error: string, rep: AlterDMSPartitionResponse) => void
  ): Promise<AlterDMSPartitionResponse> {
    return this.request("AlterDMSPartition", req, cb)
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
   * 获取spark应用列表。
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
   * 本接口（CreateTasks），用于批量创建任务
   */
  async CreateTasks(
    req: CreateTasksRequest,
    cb?: (error: string, rep: CreateTasksResponse) => void
  ): Promise<CreateTasksResponse> {
    return this.request("CreateTasks", req, cb)
  }

  /**
   * 该接口（DescribeScripts）用于获取所有SQL查询。
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
   * 上报元数据心跳
   */
  async ReportHeartbeatMetaData(
    req: ReportHeartbeatMetaDataRequest,
    cb?: (error: string, rep: ReportHeartbeatMetaDataResponse) => void
  ): Promise<ReportHeartbeatMetaDataResponse> {
    return this.request("ReportHeartbeatMetaData", req, cb)
  }

  /**
   * 本接口（ListTaskJobLogDetail）用于获取spark-jar日志列表
   */
  async ListTaskJobLogDetail(
    req: ListTaskJobLogDetailRequest,
    cb?: (error: string, rep: ListTaskJobLogDetailResponse) => void
  ): Promise<ListTaskJobLogDetailResponse> {
    return this.request("ListTaskJobLogDetail", req, cb)
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
   * 创建spark应用
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
   * 本接口（DescribeNotebookSessionStatements）用于获取Session Statement列表。
   */
  async DescribeNotebookSessionStatements(
    req: DescribeNotebookSessionStatementsRequest,
    cb?: (error: string, rep: DescribeNotebookSessionStatementsResponse) => void
  ): Promise<DescribeNotebookSessionStatementsResponse> {
    return this.request("DescribeNotebookSessionStatements", req, cb)
  }

  /**
   * 本接口用于控制暂停或恢复数据引擎
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
   * 本接口（DescribeNotebookSessionStatementSqlResult）用于获取statement运行结果。
   */
  async DescribeNotebookSessionStatementSqlResult(
    req: DescribeNotebookSessionStatementSqlResultRequest,
    cb?: (error: string, rep: DescribeNotebookSessionStatementSqlResultResponse) => void
  ): Promise<DescribeNotebookSessionStatementSqlResultResponse> {
    return this.request("DescribeNotebookSessionStatementSqlResult", req, cb)
  }

  /**
   * 本接口（CreateNotebookSessionStatement）用于创建session statement
   */
  async CreateNotebookSessionStatement(
    req: CreateNotebookSessionStatementRequest,
    cb?: (error: string, rep: CreateNotebookSessionStatementResponse) => void
  ): Promise<CreateNotebookSessionStatementResponse> {
    return this.request("CreateNotebookSessionStatement", req, cb)
  }

  /**
   * 本接口（DescribeDataEngines）用于获取DataEngines信息列表
   */
  async DescribeDataEngines(
    req: DescribeDataEnginesRequest,
    cb?: (error: string, rep: DescribeDataEnginesResponse) => void
  ): Promise<DescribeDataEnginesResponse> {
    return this.request("DescribeDataEngines", req, cb)
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
   * 本接口（CancelNotebookSessionStatementBatch）用于按批取消Session statement。
   */
  async CancelNotebookSessionStatementBatch(
    req: CancelNotebookSessionStatementBatchRequest,
    cb?: (error: string, rep: CancelNotebookSessionStatementBatchResponse) => void
  ): Promise<CancelNotebookSessionStatementBatchResponse> {
    return this.request("CancelNotebookSessionStatementBatch", req, cb)
  }

  /**
   * 删除spark应用
   */
  async DeleteSparkApp(
    req: DeleteSparkAppRequest,
    cb?: (error: string, rep: DeleteSparkAppResponse) => void
  ): Promise<DeleteSparkAppResponse> {
    return this.request("DeleteSparkApp", req, cb)
  }

  /**
   * 本接口（DescribeNotebookSessionLog）用于获取notebook livy session日志
   */
  async DescribeNotebookSessionLog(
    req: DescribeNotebookSessionLogRequest,
    cb?: (error: string, rep: DescribeNotebookSessionLogResponse) => void
  ): Promise<DescribeNotebookSessionLogResponse> {
    return this.request("DescribeNotebookSessionLog", req, cb)
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
   * 本接口（CancelTask），用于取消任务执行
   */
  async CancelTask(
    req: CancelTaskRequest,
    cb?: (error: string, rep: CancelTaskResponse) => void
  ): Promise<CancelTaskResponse> {
    return this.request("CancelTask", req, cb)
  }

  /**
   * 更新spark应用
   */
  async ModifySparkApp(
    req: ModifySparkAppRequest,
    cb?: (error: string, rep: ModifySparkAppResponse) => void
  ): Promise<ModifySparkAppResponse> {
    return this.request("ModifySparkApp", req, cb)
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
   * 本接口根据引擎ID获取数据引擎资源使用情况
   */
  async DescribeEngineUsageInfo(
    req: DescribeEngineUsageInfoRequest,
    cb?: (error: string, rep: DescribeEngineUsageInfoResponse) => void
  ): Promise<DescribeEngineUsageInfoResponse> {
    return this.request("DescribeEngineUsageInfo", req, cb)
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
   * 此接口用于更新行过滤规则。注意只能更新过滤规则，不能更新规格对象catalog，database和table。
   */
  async UpdateRowFilter(
    req: UpdateRowFilterRequest,
    cb?: (error: string, rep: UpdateRowFilterResponse) => void
  ): Promise<UpdateRowFilterResponse> {
    return this.request("UpdateRowFilter", req, cb)
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
   * 解绑用户鉴权策略
   */
  async DetachUserPolicy(
    req: DetachUserPolicyRequest,
    cb?: (error: string, rep: DetachUserPolicyResponse) => void
  ): Promise<DetachUserPolicyResponse> {
    return this.request("DetachUserPolicy", req, cb)
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
   * 该接口（CreateExportTask）用于创建导出任务
   */
  async CreateExportTask(
    req: CreateExportTaskRequest,
    cb?: (error: string, rep: CreateExportTaskResponse) => void
  ): Promise<CreateExportTaskResponse> {
    return this.request("CreateExportTask", req, cb)
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
   * 本接口（DescribeNotebookSessionStatement）用于获取session statement信息
   */
  async DescribeNotebookSessionStatement(
    req: DescribeNotebookSessionStatementRequest,
    cb?: (error: string, rep: DescribeNotebookSessionStatementResponse) => void
  ): Promise<DescribeNotebookSessionStatementResponse> {
    return this.request("DescribeNotebookSessionStatement", req, cb)
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
   * 本接口（DescribeViews）用于查询数据视图列表。
   */
  async DescribeViews(
    req: DescribeViewsRequest,
    cb?: (error: string, rep: DescribeViewsResponse) => void
  ): Promise<DescribeViewsResponse> {
    return this.request("DescribeViews", req, cb)
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
   * 修改用户信息
   */
  async ModifyUser(
    req: ModifyUserRequest,
    cb?: (error: string, rep: ModifyUserResponse) => void
  ): Promise<ModifyUserResponse> {
    return this.request("ModifyUser", req, cb)
  }

  /**
   * 本接口（DeleteNotebookSession）用于删除notebook livy session
   */
  async DeleteNotebookSession(
    req: DeleteNotebookSessionRequest,
    cb?: (error: string, rep: DeleteNotebookSessionResponse) => void
  ): Promise<DeleteNotebookSessionResponse> {
    return this.request("DeleteNotebookSession", req, cb)
  }

  /**
   * 本接口（CancelNotebookSessionStatement）用于取消session statement
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
   * 查询具体的spark应用
   */
  async DescribeSparkAppJob(
    req: DescribeSparkAppJobRequest,
    cb?: (error: string, rep: DescribeSparkAppJobResponse) => void
  ): Promise<DescribeSparkAppJobResponse> {
    return this.request("DescribeSparkAppJob", req, cb)
  }

  /**
   * 查询spark应用的运行任务实例列表
   */
  async DescribeSparkAppTasks(
    req: DescribeSparkAppTasksRequest,
    cb?: (error: string, rep: DescribeSparkAppTasksResponse) => void
  ): Promise<DescribeSparkAppTasksResponse> {
    return this.request("DescribeSparkAppTasks", req, cb)
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

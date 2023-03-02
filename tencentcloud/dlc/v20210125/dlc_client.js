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
const DescribeResultDownloadResponse = models.DescribeResultDownloadResponse;
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const DescribeNotebookSessionStatementRequest = models.DescribeNotebookSessionStatementRequest;
const CancelNotebookSessionStatementRequest = models.CancelNotebookSessionStatementRequest;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const WorkGroupMessage = models.WorkGroupMessage;
const DeleteUserRequest = models.DeleteUserRequest;
const ListTaskJobLogDetailResponse = models.ListTaskJobLogDetailResponse;
const Asset = models.Asset;
const CreateResultDownloadResponse = models.CreateResultDownloadResponse;
const ModifyGovernEventRuleResponse = models.ModifyGovernEventRuleResponse;
const DescribeNotebookSessionsRequest = models.DescribeNotebookSessionsRequest;
const CreateDMSDatabaseResponse = models.CreateDMSDatabaseResponse;
const CreateStoreLocationResponse = models.CreateStoreLocationResponse;
const DescribeNotebookSessionResponse = models.DescribeNotebookSessionResponse;
const DescribeDMSDatabaseResponse = models.DescribeDMSDatabaseResponse;
const UnbindWorkGroupsFromUserResponse = models.UnbindWorkGroupsFromUserResponse;
const DropDMSDatabaseRequest = models.DropDMSDatabaseRequest;
const CreateScriptResponse = models.CreateScriptResponse;
const CreateTasksInOrderResponse = models.CreateTasksInOrderResponse;
const DescribeTablesResponse = models.DescribeTablesResponse;
const SparkJobInfo = models.SparkJobInfo;
const SuspendResumeDataEngineResponse = models.SuspendResumeDataEngineResponse;
const DeleteSparkAppRequest = models.DeleteSparkAppRequest;
const ModifyUserResponse = models.ModifyUserResponse;
const DeleteScriptResponse = models.DeleteScriptResponse;
const TableInfo = models.TableInfo;
const Task = models.Task;
const DetachUserPolicyRequest = models.DetachUserPolicyRequest;
const CrontabResumeSuspendStrategy = models.CrontabResumeSuspendStrategy;
const AlterDMSTableResponse = models.AlterDMSTableResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const DescribeDMSTableResponse = models.DescribeDMSTableResponse;
const DropDMSPartitionsRequest = models.DropDMSPartitionsRequest;
const NotebookSessions = models.NotebookSessions;
const CreateNotebookSessionStatementSupportBatchSQLRequest = models.CreateNotebookSessionStatementSupportBatchSQLRequest;
const CreateTasksInOrderRequest = models.CreateTasksInOrderRequest;
const AddDMSPartitionsResponse = models.AddDMSPartitionsResponse;
const DetachWorkGroupPolicyResponse = models.DetachWorkGroupPolicyResponse;
const GenerateCreateMangedTableSqlRequest = models.GenerateCreateMangedTableSqlRequest;
const CSVSerde = models.CSVSerde;
const ModifySparkAppRequest = models.ModifySparkAppRequest;
const StreamingStatistics = models.StreamingStatistics;
const CreateDatabaseRequest = models.CreateDatabaseRequest;
const GenerateCreateMangedTableSqlResponse = models.GenerateCreateMangedTableSqlResponse;
const DescribeDMSTablesResponse = models.DescribeDMSTablesResponse;
const UserIdSetOfWorkGroupId = models.UserIdSetOfWorkGroupId;
const AlterDMSPartitionRequest = models.AlterDMSPartitionRequest;
const ViewBaseInfo = models.ViewBaseInfo;
const CheckLockMetaDataRequest = models.CheckLockMetaDataRequest;
const DescribeSparkAppJobRequest = models.DescribeSparkAppJobRequest;
const CreateDatabaseResponse = models.CreateDatabaseResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const CreateSparkAppTaskRequest = models.CreateSparkAppTaskRequest;
const CancelNotebookSessionStatementBatchResponse = models.CancelNotebookSessionStatementBatchResponse;
const KVPair = models.KVPair;
const TableBaseInfo = models.TableBaseInfo;
const UnlockMetaDataRequest = models.UnlockMetaDataRequest;
const AttachUserPolicyRequest = models.AttachUserPolicyRequest;
const CreateInternalTableRequest = models.CreateInternalTableRequest;
const ListTaskJobLogDetailRequest = models.ListTaskJobLogDetailRequest;
const TasksInfo = models.TasksInfo;
const AttachWorkGroupPolicyRequest = models.AttachWorkGroupPolicyRequest;
const StatementOutput = models.StatementOutput;
const TagInfo = models.TagInfo;
const CreateUserResponse = models.CreateUserResponse;
const DescribeNotebookSessionStatementsRequest = models.DescribeNotebookSessionStatementsRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const LockComponentInfo = models.LockComponentInfo;
const DescribeNotebookSessionsResponse = models.DescribeNotebookSessionsResponse;
const DescribeDMSPartitionsRequest = models.DescribeDMSPartitionsRequest;
const TPartition = models.TPartition;
const DescribeSparkAppJobsRequest = models.DescribeSparkAppJobsRequest;
const DeleteNotebookSessionRequest = models.DeleteNotebookSessionRequest;
const CreateDMSTableResponse = models.CreateDMSTableResponse;
const CreateNotebookSessionRequest = models.CreateNotebookSessionRequest;
const Partition = models.Partition;
const CreateTaskRequest = models.CreateTaskRequest;
const DescribeNotebookSessionRequest = models.DescribeNotebookSessionRequest;
const CSV = models.CSV;
const NotebookSessionStatementInfo = models.NotebookSessionStatementInfo;
const CreateTableRequest = models.CreateTableRequest;
const CreateNotebookSessionStatementRequest = models.CreateNotebookSessionStatementRequest;
const DescribeWorkGroupsResponse = models.DescribeWorkGroupsResponse;
const CreateImportTaskRequest = models.CreateImportTaskRequest;
const DescribeScriptsRequest = models.DescribeScriptsRequest;
const DescribeSparkAppJobResponse = models.DescribeSparkAppJobResponse;
const CreateExportTaskResponse = models.CreateExportTaskResponse;
const AddUsersToWorkGroupRequest = models.AddUsersToWorkGroupRequest;
const DescribeStoreLocationRequest = models.DescribeStoreLocationRequest;
const AddUsersToWorkGroupResponse = models.AddUsersToWorkGroupResponse;
const DescribeNotebookSessionLogRequest = models.DescribeNotebookSessionLogRequest;
const UserInfo = models.UserInfo;
const CreateExportTaskRequest = models.CreateExportTaskRequest;
const DescribeNotebookSessionStatementResponse = models.DescribeNotebookSessionStatementResponse;
const ReportHeartbeatMetaDataResponse = models.ReportHeartbeatMetaDataResponse;
const ReportHeartbeatMetaDataRequest = models.ReportHeartbeatMetaDataRequest;
const CreateDMSTableRequest = models.CreateDMSTableRequest;
const CancelNotebookSessionStatementResponse = models.CancelNotebookSessionStatementResponse;
const DMSTable = models.DMSTable;
const AttachWorkGroupPolicyResponse = models.AttachWorkGroupPolicyResponse;
const ModifyWorkGroupResponse = models.ModifyWorkGroupResponse;
const DescribeDMSTablesRequest = models.DescribeDMSTablesRequest;
const ModifyUserRequest = models.ModifyUserRequest;
const DMSSds = models.DMSSds;
const CreateSparkAppTaskResponse = models.CreateSparkAppTaskResponse;
const CancelTaskRequest = models.CancelTaskRequest;
const TaskResponseInfo = models.TaskResponseInfo;
const TextFile = models.TextFile;
const BindWorkGroupsToUserResponse = models.BindWorkGroupsToUserResponse;
const CreateNotebookSessionStatementResponse = models.CreateNotebookSessionStatementResponse;
const DescribeStoreLocationResponse = models.DescribeStoreLocationResponse;
const DeleteScriptRequest = models.DeleteScriptRequest;
const AddDMSPartitionsRequest = models.AddDMSPartitionsRequest;
const Script = models.Script;
const NotebookSessionStatementBatchInformation = models.NotebookSessionStatementBatchInformation;
const DescribeNotebookSessionStatementSqlResultRequest = models.DescribeNotebookSessionStatementSqlResultRequest;
const ModifySparkAppResponse = models.ModifySparkAppResponse;
const AlterDMSTableRequest = models.AlterDMSTableRequest;
const CreateImportTaskResponse = models.CreateImportTaskResponse;
const NotebookSessionInfo = models.NotebookSessionInfo;
const Execution = models.Execution;
const CreateTableResponse = models.CreateTableResponse;
const WorkGroupInfo = models.WorkGroupInfo;
const CreateNotebookSessionStatementSupportBatchSQLResponse = models.CreateNotebookSessionStatementSupportBatchSQLResponse;
const CreateScriptRequest = models.CreateScriptRequest;
const BindWorkGroupsToUserRequest = models.BindWorkGroupsToUserRequest;
const Column = models.Column;
const DeleteWorkGroupRequest = models.DeleteWorkGroupRequest;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const Filter = models.Filter;
const DescribeUsersResponse = models.DescribeUsersResponse;
const DataFormat = models.DataFormat;
const DescribeNotebookSessionLogResponse = models.DescribeNotebookSessionLogResponse;
const ViewResponseInfo = models.ViewResponseInfo;
const NetworkConnection = models.NetworkConnection;
const CreateUserRequest = models.CreateUserRequest;
const ModifyWorkGroupRequest = models.ModifyWorkGroupRequest;
const CancelTaskResponse = models.CancelTaskResponse;
const DataGovernPolicy = models.DataGovernPolicy;
const UnlockMetaDataResponse = models.UnlockMetaDataResponse;
const DeleteWorkGroupResponse = models.DeleteWorkGroupResponse;
const DropDMSTableResponse = models.DropDMSTableResponse;
const WorkGroupIdSetOfUserId = models.WorkGroupIdSetOfUserId;
const CreateWorkGroupResponse = models.CreateWorkGroupResponse;
const TaskResultInfo = models.TaskResultInfo;
const DescribeTablesRequest = models.DescribeTablesRequest;
const DeleteNotebookSessionResponse = models.DeleteNotebookSessionResponse;
const CreateStoreLocationRequest = models.CreateStoreLocationRequest;
const DMSTableInfo = models.DMSTableInfo;
const DescribeNotebookSessionStatementsResponse = models.DescribeNotebookSessionStatementsResponse;
const AttachUserPolicyResponse = models.AttachUserPolicyResponse;
const DropDMSTableRequest = models.DropDMSTableRequest;
const DescribeNotebookSessionStatementSqlResultResponse = models.DescribeNotebookSessionStatementSqlResultResponse;
const DMSPartition = models.DMSPartition;
const DatabaseInfo = models.DatabaseInfo;
const DescribeDMSPartitionsResponse = models.DescribeDMSPartitionsResponse;
const DeleteUsersFromWorkGroupResponse = models.DeleteUsersFromWorkGroupResponse;
const UnbindWorkGroupsFromUserRequest = models.UnbindWorkGroupsFromUserRequest;
const DescribeDMSDatabaseRequest = models.DescribeDMSDatabaseRequest;
const DescribeTableRequest = models.DescribeTableRequest;
const Policy = models.Policy;
const JobLogResult = models.JobLogResult;
const Other = models.Other;
const DropDMSDatabaseResponse = models.DropDMSDatabaseResponse;
const DescribeUsersRequest = models.DescribeUsersRequest;
const DeleteUsersFromWorkGroupRequest = models.DeleteUsersFromWorkGroupRequest;
const DMSColumnOrder = models.DMSColumnOrder;
const CreateSparkAppResponse = models.CreateSparkAppResponse;
const CreateTaskResponse = models.CreateTaskResponse;
const DeleteSparkAppResponse = models.DeleteSparkAppResponse;
const AlterDMSPartitionResponse = models.AlterDMSPartitionResponse;
const CreateTasksRequest = models.CreateTasksRequest;
const SuspendResumeDataEngineRequest = models.SuspendResumeDataEngineRequest;
const DescribeTableResponse = models.DescribeTableResponse;
const DescribeSparkAppJobsResponse = models.DescribeSparkAppJobsResponse;
const DescribeSparkAppTasksResponse = models.DescribeSparkAppTasksResponse;
const TableResponseInfo = models.TableResponseInfo;
const DescribeViewsRequest = models.DescribeViewsRequest;
const LockMetaDataRequest = models.LockMetaDataRequest;
const DetachUserPolicyResponse = models.DetachUserPolicyResponse;
const DescribeWorkGroupsRequest = models.DescribeWorkGroupsRequest;
const TasksOverview = models.TasksOverview;
const CreateTasksResponse = models.CreateTasksResponse;
const CreateNotebookSessionResponse = models.CreateNotebookSessionResponse;
const CreateSparkAppRequest = models.CreateSparkAppRequest;
const DescribeDataEnginesRequest = models.DescribeDataEnginesRequest;
const DropDMSPartitionsResponse = models.DropDMSPartitionsResponse;
const AlterDMSDatabaseResponse = models.AlterDMSDatabaseResponse;
const CreateWorkGroupRequest = models.CreateWorkGroupRequest;
const CreateInternalTableResponse = models.CreateInternalTableResponse;
const DataEngineInfo = models.DataEngineInfo;
const DescribeSparkAppTasksRequest = models.DescribeSparkAppTasksRequest;
const LockMetaDataResponse = models.LockMetaDataResponse;
const CheckLockMetaDataResponse = models.CheckLockMetaDataResponse;
const AlterDMSDatabaseRequest = models.AlterDMSDatabaseRequest;
const SQLTask = models.SQLTask;
const UserMessage = models.UserMessage;
const DescribeViewsResponse = models.DescribeViewsResponse;
const Property = models.Property;
const CreateResultDownloadRequest = models.CreateResultDownloadRequest;
const CreateDMSDatabaseRequest = models.CreateDMSDatabaseRequest;
const DetachWorkGroupPolicyRequest = models.DetachWorkGroupPolicyRequest;
const DescribeDMSTableRequest = models.DescribeDMSTableRequest;
const ModifyGovernEventRuleRequest = models.ModifyGovernEventRuleRequest;
const CancelNotebookSessionStatementBatchRequest = models.CancelNotebookSessionStatementBatchRequest;
const DescribeDataEnginesResponse = models.DescribeDataEnginesResponse;
const DescribeScriptsResponse = models.DescribeScriptsResponse;
const DatabaseResponseInfo = models.DatabaseResponseInfo;
const DMSColumn = models.DMSColumn;
const TColumn = models.TColumn;
const DescribeResultDownloadRequest = models.DescribeResultDownloadRequest;


/**
 * dlc client
 * @class
 */
class DlcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dlc.tencentcloudapi.com", "2021-01-25", credential, region, profile);
    }
    
    /**
     * 解绑工作组鉴权策略
     * @param {DetachWorkGroupPolicyRequest} req
     * @param {function(string, DetachWorkGroupPolicyResponse):void} cb
     * @public
     */
    DetachWorkGroupPolicy(req, cb) {
        let resp = new DetachWorkGroupPolicyResponse();
        this.request("DetachWorkGroupPolicy", req, resp, cb);
    }

    /**
     * 本接口（CreateTask）用于创建sql查询任务。（推荐使用CreateTasks接口）
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * 按顺序创建任务（已经废弃，后期不再维护，请使用接口CreateTasks）
     * @param {CreateTasksInOrderRequest} req
     * @param {function(string, CreateTasksInOrderResponse):void} cb
     * @public
     */
    CreateTasksInOrder(req, cb) {
        let resp = new CreateTasksInOrderResponse();
        this.request("CreateTasksInOrder", req, resp, cb);
    }

    /**
     * 元数据锁检查
     * @param {CheckLockMetaDataRequest} req
     * @param {function(string, CheckLockMetaDataResponse):void} cb
     * @public
     */
    CheckLockMetaData(req, cb) {
        let resp = new CheckLockMetaDataResponse();
        this.request("CheckLockMetaData", req, resp, cb);
    }

    /**
     * 该接口（CreateImportTask）用于创建导入任务
     * @param {CreateImportTaskRequest} req
     * @param {function(string, CreateImportTaskResponse):void} cb
     * @public
     */
    CreateImportTask(req, cb) {
        let resp = new CreateImportTaskResponse();
        this.request("CreateImportTask", req, resp, cb);
    }

    /**
     * DMS元数据更新表
     * @param {AlterDMSTableRequest} req
     * @param {function(string, AlterDMSTableResponse):void} cb
     * @public
     */
    AlterDMSTable(req, cb) {
        let resp = new AlterDMSTableResponse();
        this.request("AlterDMSTable", req, resp, cb);
    }

    /**
     * 本接口（DescribeNotebookSession）用于获取notebook livy session详情信息
     * @param {DescribeNotebookSessionRequest} req
     * @param {function(string, DescribeNotebookSessionResponse):void} cb
     * @public
     */
    DescribeNotebookSession(req, cb) {
        let resp = new DescribeNotebookSessionResponse();
        this.request("DescribeNotebookSession", req, resp, cb);
    }

    /**
     * 本接口（CancelNotebookSessionStatement）用于取消session statement
     * @param {CancelNotebookSessionStatementRequest} req
     * @param {function(string, CancelNotebookSessionStatementResponse):void} cb
     * @public
     */
    CancelNotebookSessionStatement(req, cb) {
        let resp = new CancelNotebookSessionStatementResponse();
        this.request("CancelNotebookSessionStatement", req, resp, cb);
    }

    /**
     * DMS元数据新增分区
     * @param {AddDMSPartitionsRequest} req
     * @param {function(string, AddDMSPartitionsResponse):void} cb
     * @public
     */
    AddDMSPartitions(req, cb) {
        let resp = new AddDMSPartitionsResponse();
        this.request("AddDMSPartitions", req, resp, cb);
    }

    /**
     * 该接口（DeleteScript）用于删除sql脚本。
     * @param {DeleteScriptRequest} req
     * @param {function(string, DeleteScriptResponse):void} cb
     * @public
     */
    DeleteScript(req, cb) {
        let resp = new DeleteScriptResponse();
        this.request("DeleteScript", req, resp, cb);
    }

    /**
     * 元数据锁
     * @param {LockMetaDataRequest} req
     * @param {function(string, LockMetaDataResponse):void} cb
     * @public
     */
    LockMetaData(req, cb) {
        let resp = new LockMetaDataResponse();
        this.request("LockMetaData", req, resp, cb);
    }

    /**
     * 本接口（CreateTable）用于生成建表SQL。
     * @param {CreateTableRequest} req
     * @param {function(string, CreateTableResponse):void} cb
     * @public
     */
    CreateTable(req, cb) {
        let resp = new CreateTableResponse();
        this.request("CreateTable", req, resp, cb);
    }

    /**
     * 查询任务结果
     * @param {DescribeTaskResultRequest} req
     * @param {function(string, DescribeTaskResultResponse):void} cb
     * @public
     */
    DescribeTaskResult(req, cb) {
        let resp = new DescribeTaskResultResponse();
        this.request("DescribeTaskResult", req, resp, cb);
    }

    /**
     * 本接口（CancelNotebookSessionStatementBatch）用于按批取消Session statement。
     * @param {CancelNotebookSessionStatementBatchRequest} req
     * @param {function(string, CancelNotebookSessionStatementBatchResponse):void} cb
     * @public
     */
    CancelNotebookSessionStatementBatch(req, cb) {
        let resp = new CancelNotebookSessionStatementBatchResponse();
        this.request("CancelNotebookSessionStatementBatch", req, resp, cb);
    }

    /**
     * 删除spark应用
     * @param {DeleteSparkAppRequest} req
     * @param {function(string, DeleteSparkAppResponse):void} cb
     * @public
     */
    DeleteSparkApp(req, cb) {
        let resp = new DeleteSparkAppResponse();
        this.request("DeleteSparkApp", req, resp, cb);
    }

    /**
     * 本接口（CreateNotebookSession）用于创建notebook livy session
     * @param {CreateNotebookSessionRequest} req
     * @param {function(string, CreateNotebookSessionResponse):void} cb
     * @public
     */
    CreateNotebookSession(req, cb) {
        let resp = new CreateNotebookSessionResponse();
        this.request("CreateNotebookSession", req, resp, cb);
    }

    /**
     * 本接口（CreateTasks），用于批量创建任务
     * @param {CreateTasksRequest} req
     * @param {function(string, CreateTasksResponse):void} cb
     * @public
     */
    CreateTasks(req, cb) {
        let resp = new CreateTasksResponse();
        this.request("CreateTasks", req, resp, cb);
    }

    /**
     * 该接口（DescribeScripts）用于获取所有SQL查询。
     * @param {DescribeScriptsRequest} req
     * @param {function(string, DescribeScriptsResponse):void} cb
     * @public
     */
    DescribeScripts(req, cb) {
        let resp = new DescribeScriptsResponse();
        this.request("DescribeScripts", req, resp, cb);
    }

    /**
     * 查询具体的spark应用
     * @param {DescribeSparkAppJobRequest} req
     * @param {function(string, DescribeSparkAppJobResponse):void} cb
     * @public
     */
    DescribeSparkAppJob(req, cb) {
        let resp = new DescribeSparkAppJobResponse();
        this.request("DescribeSparkAppJob", req, resp, cb);
    }

    /**
     * 删除工作组
     * @param {DeleteWorkGroupRequest} req
     * @param {function(string, DeleteWorkGroupResponse):void} cb
     * @public
     */
    DeleteWorkGroup(req, cb) {
        let resp = new DeleteWorkGroupResponse();
        this.request("DeleteWorkGroup", req, resp, cb);
    }

    /**
     * 元数据解锁
     * @param {UnlockMetaDataRequest} req
     * @param {function(string, UnlockMetaDataResponse):void} cb
     * @public
     */
    UnlockMetaData(req, cb) {
        let resp = new UnlockMetaDataResponse();
        this.request("UnlockMetaData", req, resp, cb);
    }

    /**
     * 查询结果下载任务
     * @param {DescribeResultDownloadRequest} req
     * @param {function(string, DescribeResultDownloadResponse):void} cb
     * @public
     */
    DescribeResultDownload(req, cb) {
        let resp = new DescribeResultDownloadResponse();
        this.request("DescribeResultDownload", req, resp, cb);
    }

    /**
     * 本接口（DescribeDataEngines）用于获取DataEngines信息列表
     * @param {DescribeDataEnginesRequest} req
     * @param {function(string, DescribeDataEnginesResponse):void} cb
     * @public
     */
    DescribeDataEngines(req, cb) {
        let resp = new DescribeDataEnginesResponse();
        this.request("DescribeDataEngines", req, resp, cb);
    }

    /**
     * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
     * @param {CreateStoreLocationRequest} req
     * @param {function(string, CreateStoreLocationResponse):void} cb
     * @public
     */
    CreateStoreLocation(req, cb) {
        let resp = new CreateStoreLocationResponse();
        this.request("CreateStoreLocation", req, resp, cb);
    }

    /**
     * DMS元数据获取表
     * @param {DescribeDMSTableRequest} req
     * @param {function(string, DescribeDMSTableResponse):void} cb
     * @public
     */
    DescribeDMSTable(req, cb) {
        let resp = new DescribeDMSTableResponse();
        this.request("DescribeDMSTable", req, resp, cb);
    }

    /**
     * 从工作组中删除用户
     * @param {DeleteUsersFromWorkGroupRequest} req
     * @param {function(string, DeleteUsersFromWorkGroupResponse):void} cb
     * @public
     */
    DeleteUsersFromWorkGroup(req, cb) {
        let resp = new DeleteUsersFromWorkGroupResponse();
        this.request("DeleteUsersFromWorkGroup", req, resp, cb);
    }

    /**
     * 上报元数据心跳
     * @param {ReportHeartbeatMetaDataRequest} req
     * @param {function(string, ReportHeartbeatMetaDataResponse):void} cb
     * @public
     */
    ReportHeartbeatMetaData(req, cb) {
        let resp = new ReportHeartbeatMetaDataResponse();
        this.request("ReportHeartbeatMetaData", req, resp, cb);
    }

    /**
     * 创建工作组
     * @param {CreateWorkGroupRequest} req
     * @param {function(string, CreateWorkGroupResponse):void} cb
     * @public
     */
    CreateWorkGroup(req, cb) {
        let resp = new CreateWorkGroupResponse();
        this.request("CreateWorkGroup", req, resp, cb);
    }

    /**
     * 本接口（CreateNotebookSessionStatementSupportBatchSQL）用于创建Statement批量运行SQL任务。
     * @param {CreateNotebookSessionStatementSupportBatchSQLRequest} req
     * @param {function(string, CreateNotebookSessionStatementSupportBatchSQLResponse):void} cb
     * @public
     */
    CreateNotebookSessionStatementSupportBatchSQL(req, cb) {
        let resp = new CreateNotebookSessionStatementSupportBatchSQLResponse();
        this.request("CreateNotebookSessionStatementSupportBatchSQL", req, resp, cb);
    }

    /**
     * 本接口（DescribeNotebookSessionLog）用于获取notebook livy session日志
     * @param {DescribeNotebookSessionLogRequest} req
     * @param {function(string, DescribeNotebookSessionLogResponse):void} cb
     * @public
     */
    DescribeNotebookSessionLog(req, cb) {
        let resp = new DescribeNotebookSessionLogResponse();
        this.request("DescribeNotebookSessionLog", req, resp, cb);
    }

    /**
     * DMS元数据更新库
     * @param {AlterDMSDatabaseRequest} req
     * @param {function(string, AlterDMSDatabaseResponse):void} cb
     * @public
     */
    AlterDMSDatabase(req, cb) {
        let resp = new AlterDMSDatabaseResponse();
        this.request("AlterDMSDatabase", req, resp, cb);
    }

    /**
     * 更新spark应用
     * @param {ModifySparkAppRequest} req
     * @param {function(string, ModifySparkAppResponse):void} cb
     * @public
     */
    ModifySparkApp(req, cb) {
        let resp = new ModifySparkAppResponse();
        this.request("ModifySparkApp", req, resp, cb);
    }

    /**
     * 创建托管存储内表（该接口已废弃）
     * @param {CreateInternalTableRequest} req
     * @param {function(string, CreateInternalTableResponse):void} cb
     * @public
     */
    CreateInternalTable(req, cb) {
        let resp = new CreateInternalTableResponse();
        this.request("CreateInternalTable", req, resp, cb);
    }

    /**
     * 本接口（DeleteNotebookSession）用于删除notebook livy session
     * @param {DeleteNotebookSessionRequest} req
     * @param {function(string, DeleteNotebookSessionResponse):void} cb
     * @public
     */
    DeleteNotebookSession(req, cb) {
        let resp = new DeleteNotebookSessionResponse();
        this.request("DeleteNotebookSession", req, resp, cb);
    }

    /**
     * 生成创建托管表语句
     * @param {GenerateCreateMangedTableSqlRequest} req
     * @param {function(string, GenerateCreateMangedTableSqlResponse):void} cb
     * @public
     */
    GenerateCreateMangedTableSql(req, cb) {
        let resp = new GenerateCreateMangedTableSqlResponse();
        this.request("GenerateCreateMangedTableSql", req, resp, cb);
    }

    /**
     * 绑定鉴权策略到工作组
     * @param {AttachWorkGroupPolicyRequest} req
     * @param {function(string, AttachWorkGroupPolicyResponse):void} cb
     * @public
     */
    AttachWorkGroupPolicy(req, cb) {
        let resp = new AttachWorkGroupPolicyResponse();
        this.request("AttachWorkGroupPolicy", req, resp, cb);
    }

    /**
     * 本接口（DescribeNotebookSessions）用于获取notebook livy session列表
     * @param {DescribeNotebookSessionsRequest} req
     * @param {function(string, DescribeNotebookSessionsResponse):void} cb
     * @public
     */
    DescribeNotebookSessions(req, cb) {
        let resp = new DescribeNotebookSessionsResponse();
        this.request("DescribeNotebookSessions", req, resp, cb);
    }

    /**
     * DMS元数据获取分区
     * @param {DescribeDMSPartitionsRequest} req
     * @param {function(string, DescribeDMSPartitionsResponse):void} cb
     * @public
     */
    DescribeDMSPartitions(req, cb) {
        let resp = new DescribeDMSPartitionsResponse();
        this.request("DescribeDMSPartitions", req, resp, cb);
    }

    /**
     * 创建spark应用
     * @param {CreateSparkAppRequest} req
     * @param {function(string, CreateSparkAppResponse):void} cb
     * @public
     */
    CreateSparkApp(req, cb) {
        let resp = new CreateSparkAppResponse();
        this.request("CreateSparkApp", req, resp, cb);
    }

    /**
     * 本接口（CancelTask），用于取消任务执行
     * @param {CancelTaskRequest} req
     * @param {function(string, CancelTaskResponse):void} cb
     * @public
     */
    CancelTask(req, cb) {
        let resp = new CancelTaskResponse();
        this.request("CancelTask", req, resp, cb);
    }

    /**
     * DMS元数据删除表
     * @param {DropDMSTableRequest} req
     * @param {function(string, DropDMSTableResponse):void} cb
     * @public
     */
    DropDMSTable(req, cb) {
        let resp = new DropDMSTableResponse();
        this.request("DropDMSTable", req, resp, cb);
    }

    /**
     * 该接口（CreateScript）用于创建sql脚本。
     * @param {CreateScriptRequest} req
     * @param {function(string, CreateScriptResponse):void} cb
     * @public
     */
    CreateScript(req, cb) {
        let resp = new CreateScriptResponse();
        this.request("CreateScript", req, resp, cb);
    }

    /**
     * DMS元数据获取表列表
     * @param {DescribeDMSTablesRequest} req
     * @param {function(string, DescribeDMSTablesResponse):void} cb
     * @public
     */
    DescribeDMSTables(req, cb) {
        let resp = new DescribeDMSTablesResponse();
        this.request("DescribeDMSTables", req, resp, cb);
    }

    /**
     * 本接口（CreateDatabase）用于生成建库SQL语句。
     * @param {CreateDatabaseRequest} req
     * @param {function(string, CreateDatabaseResponse):void} cb
     * @public
     */
    CreateDatabase(req, cb) {
        let resp = new CreateDatabaseResponse();
        this.request("CreateDatabase", req, resp, cb);
    }

    /**
     * 本接口（DescribeNotebookSessionStatement）用于获取session statement信息
     * @param {DescribeNotebookSessionStatementRequest} req
     * @param {function(string, DescribeNotebookSessionStatementResponse):void} cb
     * @public
     */
    DescribeNotebookSessionStatement(req, cb) {
        let resp = new DescribeNotebookSessionStatementResponse();
        this.request("DescribeNotebookSessionStatement", req, resp, cb);
    }

    /**
     * 解绑用户上的用户组
     * @param {UnbindWorkGroupsFromUserRequest} req
     * @param {function(string, UnbindWorkGroupsFromUserResponse):void} cb
     * @public
     */
    UnbindWorkGroupsFromUser(req, cb) {
        let resp = new UnbindWorkGroupsFromUserResponse();
        this.request("UnbindWorkGroupsFromUser", req, resp, cb);
    }

    /**
     * 获取spark应用列表
     * @param {DescribeSparkAppJobsRequest} req
     * @param {function(string, DescribeSparkAppJobsResponse):void} cb
     * @public
     */
    DescribeSparkAppJobs(req, cb) {
        let resp = new DescribeSparkAppJobsResponse();
        this.request("DescribeSparkAppJobs", req, resp, cb);
    }

    /**
     * 获取工作组列表
     * @param {DescribeWorkGroupsRequest} req
     * @param {function(string, DescribeWorkGroupsResponse):void} cb
     * @public
     */
    DescribeWorkGroups(req, cb) {
        let resp = new DescribeWorkGroupsResponse();
        this.request("DescribeWorkGroups", req, resp, cb);
    }

    /**
     * 修改工作组信息
     * @param {ModifyWorkGroupRequest} req
     * @param {function(string, ModifyWorkGroupResponse):void} cb
     * @public
     */
    ModifyWorkGroup(req, cb) {
        let resp = new ModifyWorkGroupResponse();
        this.request("ModifyWorkGroup", req, resp, cb);
    }

    /**
     * 本接口（ListTaskJobLogDetail）用于获取spark-jar日志列表
     * @param {ListTaskJobLogDetailRequest} req
     * @param {function(string, ListTaskJobLogDetailResponse):void} cb
     * @public
     */
    ListTaskJobLogDetail(req, cb) {
        let resp = new ListTaskJobLogDetailResponse();
        this.request("ListTaskJobLogDetail", req, resp, cb);
    }

    /**
     * 本接口（DescribeViews）用于查询数据视图列表。
     * @param {DescribeViewsRequest} req
     * @param {function(string, DescribeViewsResponse):void} cb
     * @public
     */
    DescribeViews(req, cb) {
        let resp = new DescribeViewsResponse();
        this.request("DescribeViews", req, resp, cb);
    }

    /**
     * 本接口（DescribeTable），用于查询单个表的详细信息。
     * @param {DescribeTableRequest} req
     * @param {function(string, DescribeTableResponse):void} cb
     * @public
     */
    DescribeTable(req, cb) {
        let resp = new DescribeTableResponse();
        this.request("DescribeTable", req, resp, cb);
    }

    /**
     * 本接口（DescribeNotebookSessionStatements）用于获取Session Statement列表。
     * @param {DescribeNotebookSessionStatementsRequest} req
     * @param {function(string, DescribeNotebookSessionStatementsResponse):void} cb
     * @public
     */
    DescribeNotebookSessionStatements(req, cb) {
        let resp = new DescribeNotebookSessionStatementsResponse();
        this.request("DescribeNotebookSessionStatements", req, resp, cb);
    }

    /**
     * 获取用户列表信息
     * @param {DescribeUsersRequest} req
     * @param {function(string, DescribeUsersResponse):void} cb
     * @public
     */
    DescribeUsers(req, cb) {
        let resp = new DescribeUsersResponse();
        this.request("DescribeUsers", req, resp, cb);
    }

    /**
     * DMS元数据获取库
     * @param {DescribeDMSDatabaseRequest} req
     * @param {function(string, DescribeDMSDatabaseResponse):void} cb
     * @public
     */
    DescribeDMSDatabase(req, cb) {
        let resp = new DescribeDMSDatabaseResponse();
        this.request("DescribeDMSDatabase", req, resp, cb);
    }

    /**
     * 该接口（DescribleTasks）用于查询任务列表
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 绑定工作组到用户
     * @param {BindWorkGroupsToUserRequest} req
     * @param {function(string, BindWorkGroupsToUserResponse):void} cb
     * @public
     */
    BindWorkGroupsToUser(req, cb) {
        let resp = new BindWorkGroupsToUserResponse();
        this.request("BindWorkGroupsToUser", req, resp, cb);
    }

    /**
     * 创建spark任务
     * @param {CreateSparkAppTaskRequest} req
     * @param {function(string, CreateSparkAppTaskResponse):void} cb
     * @public
     */
    CreateSparkAppTask(req, cb) {
        let resp = new CreateSparkAppTaskResponse();
        this.request("CreateSparkAppTask", req, resp, cb);
    }

    /**
     * DMS元数据删除分区
     * @param {DropDMSPartitionsRequest} req
     * @param {function(string, DropDMSPartitionsResponse):void} cb
     * @public
     */
    DropDMSPartitions(req, cb) {
        let resp = new DropDMSPartitionsResponse();
        this.request("DropDMSPartitions", req, resp, cb);
    }

    /**
     * 修改用户信息
     * @param {ModifyUserRequest} req
     * @param {function(string, ModifyUserResponse):void} cb
     * @public
     */
    ModifyUser(req, cb) {
        let resp = new ModifyUserResponse();
        this.request("ModifyUser", req, resp, cb);
    }

    /**
     * 删除用户
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * 本接口用于控制暂停或恢复数据引擎
     * @param {SuspendResumeDataEngineRequest} req
     * @param {function(string, SuspendResumeDataEngineResponse):void} cb
     * @public
     */
    SuspendResumeDataEngine(req, cb) {
        let resp = new SuspendResumeDataEngineResponse();
        this.request("SuspendResumeDataEngine", req, resp, cb);
    }

    /**
     * 本接口（DescribeDatabases）用于查询数据库列表。
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * 添加用户到工作组
     * @param {AddUsersToWorkGroupRequest} req
     * @param {function(string, AddUsersToWorkGroupResponse):void} cb
     * @public
     */
    AddUsersToWorkGroup(req, cb) {
        let resp = new AddUsersToWorkGroupResponse();
        this.request("AddUsersToWorkGroup", req, resp, cb);
    }

    /**
     * 查询计算结果存储位置。
     * @param {DescribeStoreLocationRequest} req
     * @param {function(string, DescribeStoreLocationResponse):void} cb
     * @public
     */
    DescribeStoreLocation(req, cb) {
        let resp = new DescribeStoreLocationResponse();
        this.request("DescribeStoreLocation", req, resp, cb);
    }

    /**
     * DMS元数据创建库
     * @param {CreateDMSDatabaseRequest} req
     * @param {function(string, CreateDMSDatabaseResponse):void} cb
     * @public
     */
    CreateDMSDatabase(req, cb) {
        let resp = new CreateDMSDatabaseResponse();
        this.request("CreateDMSDatabase", req, resp, cb);
    }

    /**
     * DMS元数据更新分区
     * @param {AlterDMSPartitionRequest} req
     * @param {function(string, AlterDMSPartitionResponse):void} cb
     * @public
     */
    AlterDMSPartition(req, cb) {
        let resp = new AlterDMSPartitionResponse();
        this.request("AlterDMSPartition", req, resp, cb);
    }

    /**
     * 绑定鉴权策略到用户
     * @param {AttachUserPolicyRequest} req
     * @param {function(string, AttachUserPolicyResponse):void} cb
     * @public
     */
    AttachUserPolicy(req, cb) {
        let resp = new AttachUserPolicyResponse();
        this.request("AttachUserPolicy", req, resp, cb);
    }

    /**
     * DMS元数据创建表
     * @param {CreateDMSTableRequest} req
     * @param {function(string, CreateDMSTableResponse):void} cb
     * @public
     */
    CreateDMSTable(req, cb) {
        let resp = new CreateDMSTableResponse();
        this.request("CreateDMSTable", req, resp, cb);
    }

    /**
     * 创建查询结果下载任务
     * @param {CreateResultDownloadRequest} req
     * @param {function(string, CreateResultDownloadResponse):void} cb
     * @public
     */
    CreateResultDownload(req, cb) {
        let resp = new CreateResultDownloadResponse();
        this.request("CreateResultDownload", req, resp, cb);
    }

    /**
     * 修改数据治理事件阈值
     * @param {ModifyGovernEventRuleRequest} req
     * @param {function(string, ModifyGovernEventRuleResponse):void} cb
     * @public
     */
    ModifyGovernEventRule(req, cb) {
        let resp = new ModifyGovernEventRuleResponse();
        this.request("ModifyGovernEventRule", req, resp, cb);
    }

    /**
     * 查询spark应用的运行任务实例列表
     * @param {DescribeSparkAppTasksRequest} req
     * @param {function(string, DescribeSparkAppTasksResponse):void} cb
     * @public
     */
    DescribeSparkAppTasks(req, cb) {
        let resp = new DescribeSparkAppTasksResponse();
        this.request("DescribeSparkAppTasks", req, resp, cb);
    }

    /**
     * 本接口（DescribeNotebookSessionStatementSqlResult）用于获取statement运行结果。
     * @param {DescribeNotebookSessionStatementSqlResultRequest} req
     * @param {function(string, DescribeNotebookSessionStatementSqlResultResponse):void} cb
     * @public
     */
    DescribeNotebookSessionStatementSqlResult(req, cb) {
        let resp = new DescribeNotebookSessionStatementSqlResultResponse();
        this.request("DescribeNotebookSessionStatementSqlResult", req, resp, cb);
    }

    /**
     * DMS元数据删除库
     * @param {DropDMSDatabaseRequest} req
     * @param {function(string, DropDMSDatabaseResponse):void} cb
     * @public
     */
    DropDMSDatabase(req, cb) {
        let resp = new DropDMSDatabaseResponse();
        this.request("DropDMSDatabase", req, resp, cb);
    }

    /**
     * 创建用户
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * 本接口（CreateNotebookSessionStatement）用于创建session statement
     * @param {CreateNotebookSessionStatementRequest} req
     * @param {function(string, CreateNotebookSessionStatementResponse):void} cb
     * @public
     */
    CreateNotebookSessionStatement(req, cb) {
        let resp = new CreateNotebookSessionStatementResponse();
        this.request("CreateNotebookSessionStatement", req, resp, cb);
    }

    /**
     * 解绑用户鉴权策略
     * @param {DetachUserPolicyRequest} req
     * @param {function(string, DetachUserPolicyResponse):void} cb
     * @public
     */
    DetachUserPolicy(req, cb) {
        let resp = new DetachUserPolicyResponse();
        this.request("DetachUserPolicy", req, resp, cb);
    }

    /**
     * 本接口（DescribeTables）用于查询数据表列表。
     * @param {DescribeTablesRequest} req
     * @param {function(string, DescribeTablesResponse):void} cb
     * @public
     */
    DescribeTables(req, cb) {
        let resp = new DescribeTablesResponse();
        this.request("DescribeTables", req, resp, cb);
    }

    /**
     * 该接口（CreateExportTask）用于创建导出任务
     * @param {CreateExportTaskRequest} req
     * @param {function(string, CreateExportTaskResponse):void} cb
     * @public
     */
    CreateExportTask(req, cb) {
        let resp = new CreateExportTaskResponse();
        this.request("CreateExportTask", req, resp, cb);
    }


}
module.exports = DlcClient;

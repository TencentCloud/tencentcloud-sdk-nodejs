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
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const WorkGroupMessage = models.WorkGroupMessage;
const DeleteUserRequest = models.DeleteUserRequest;
const DescribeSparkAppJobRequest = models.DescribeSparkAppJobRequest;
const CreateStoreLocationResponse = models.CreateStoreLocationResponse;
const CreateScriptResponse = models.CreateScriptResponse;
const CreateTasksInOrderResponse = models.CreateTasksInOrderResponse;
const DescribeTablesResponse = models.DescribeTablesResponse;
const SparkJobInfo = models.SparkJobInfo;
const DeleteSparkAppRequest = models.DeleteSparkAppRequest;
const ModifyUserResponse = models.ModifyUserResponse;
const DeleteScriptResponse = models.DeleteScriptResponse;
const TableInfo = models.TableInfo;
const Task = models.Task;
const DetachUserPolicyRequest = models.DetachUserPolicyRequest;
const DescribeSparkAppTasksResponse = models.DescribeSparkAppTasksResponse;
const DescribeTasksResponse = models.DescribeTasksResponse;
const CreateTasksInOrderRequest = models.CreateTasksInOrderRequest;
const DetachWorkGroupPolicyResponse = models.DetachWorkGroupPolicyResponse;
const CSVSerde = models.CSVSerde;
const ModifySparkAppRequest = models.ModifySparkAppRequest;
const CreateDatabaseRequest = models.CreateDatabaseRequest;
const UserIdSetOfWorkGroupId = models.UserIdSetOfWorkGroupId;
const ViewBaseInfo = models.ViewBaseInfo;
const CreateDatabaseResponse = models.CreateDatabaseResponse;
const DescribeTasksRequest = models.DescribeTasksRequest;
const CreateSparkAppTaskRequest = models.CreateSparkAppTaskRequest;
const DeleteWorkGroupRequest = models.DeleteWorkGroupRequest;
const KVPair = models.KVPair;
const TableBaseInfo = models.TableBaseInfo;
const AttachUserPolicyRequest = models.AttachUserPolicyRequest;
const TasksInfo = models.TasksInfo;
const AttachWorkGroupPolicyRequest = models.AttachWorkGroupPolicyRequest;
const CreateUserResponse = models.CreateUserResponse;
const DeleteUserResponse = models.DeleteUserResponse;
const CreateStoreLocationRequest = models.CreateStoreLocationRequest;
const DescribeSparkAppJobsRequest = models.DescribeSparkAppJobsRequest;
const Partition = models.Partition;
const CreateTaskRequest = models.CreateTaskRequest;
const ModifySparkAppResponse = models.ModifySparkAppResponse;
const CSV = models.CSV;
const CreateTableRequest = models.CreateTableRequest;
const DescribeWorkGroupsResponse = models.DescribeWorkGroupsResponse;
const DescribeUsersRequest = models.DescribeUsersRequest;
const DescribeScriptsRequest = models.DescribeScriptsRequest;
const DescribeSparkAppJobResponse = models.DescribeSparkAppJobResponse;
const DeleteUsersFromWorkGroupResponse = models.DeleteUsersFromWorkGroupResponse;
const AddUsersToWorkGroupRequest = models.AddUsersToWorkGroupRequest;
const DescribeStoreLocationRequest = models.DescribeStoreLocationRequest;
const DescribeViewsRequest = models.DescribeViewsRequest;
const UserInfo = models.UserInfo;
const CreateExportTaskRequest = models.CreateExportTaskRequest;
const AttachWorkGroupPolicyResponse = models.AttachWorkGroupPolicyResponse;
const ModifyWorkGroupResponse = models.ModifyWorkGroupResponse;
const ModifyUserRequest = models.ModifyUserRequest;
const StreamingStatistics = models.StreamingStatistics;
const CreateSparkAppTaskResponse = models.CreateSparkAppTaskResponse;
const CancelTaskRequest = models.CancelTaskRequest;
const TaskResponseInfo = models.TaskResponseInfo;
const TextFile = models.TextFile;
const BindWorkGroupsToUserResponse = models.BindWorkGroupsToUserResponse;
const DescribeStoreLocationResponse = models.DescribeStoreLocationResponse;
const DeleteScriptRequest = models.DeleteScriptRequest;
const Script = models.Script;
const CreateImportTaskResponse = models.CreateImportTaskResponse;
const Execution = models.Execution;
const CreateTableResponse = models.CreateTableResponse;
const WorkGroupInfo = models.WorkGroupInfo;
const CreateScriptRequest = models.CreateScriptRequest;
const BindWorkGroupsToUserRequest = models.BindWorkGroupsToUserRequest;
const Column = models.Column;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const Filter = models.Filter;
const DescribeUsersResponse = models.DescribeUsersResponse;
const DescribeScriptsResponse = models.DescribeScriptsResponse;
const ViewResponseInfo = models.ViewResponseInfo;
const CreateUserRequest = models.CreateUserRequest;
const ModifyWorkGroupRequest = models.ModifyWorkGroupRequest;
const CancelTaskResponse = models.CancelTaskResponse;
const DeleteWorkGroupResponse = models.DeleteWorkGroupResponse;
const WorkGroupIdSetOfUserId = models.WorkGroupIdSetOfUserId;
const CreateWorkGroupResponse = models.CreateWorkGroupResponse;
const TaskResultInfo = models.TaskResultInfo;
const DescribeTablesRequest = models.DescribeTablesRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DatabaseInfo = models.DatabaseInfo;
const CreateImportTaskRequest = models.CreateImportTaskRequest;
const CreateExportTaskResponse = models.CreateExportTaskResponse;
const UnbindWorkGroupsFromUserRequest = models.UnbindWorkGroupsFromUserRequest;
const DescribeTableRequest = models.DescribeTableRequest;
const Other = models.Other;
const DeleteUsersFromWorkGroupRequest = models.DeleteUsersFromWorkGroupRequest;
const Policy = models.Policy;
const CreateSparkAppResponse = models.CreateSparkAppResponse;
const CreateTaskResponse = models.CreateTaskResponse;
const DeleteSparkAppResponse = models.DeleteSparkAppResponse;
const CreateTasksRequest = models.CreateTasksRequest;
const DescribeTableResponse = models.DescribeTableResponse;
const DescribeSparkAppJobsResponse = models.DescribeSparkAppJobsResponse;
const TableResponseInfo = models.TableResponseInfo;
const AddUsersToWorkGroupResponse = models.AddUsersToWorkGroupResponse;
const DetachUserPolicyResponse = models.DetachUserPolicyResponse;
const DescribeWorkGroupsRequest = models.DescribeWorkGroupsRequest;
const CreateTasksResponse = models.CreateTasksResponse;
const CreateSparkAppRequest = models.CreateSparkAppRequest;
const UnbindWorkGroupsFromUserResponse = models.UnbindWorkGroupsFromUserResponse;
const CreateWorkGroupRequest = models.CreateWorkGroupRequest;
const DescribeSparkAppTasksRequest = models.DescribeSparkAppTasksRequest;
const SQLTask = models.SQLTask;
const UserMessage = models.UserMessage;
const Property = models.Property;
const AttachUserPolicyResponse = models.AttachUserPolicyResponse;
const DetachWorkGroupPolicyRequest = models.DetachWorkGroupPolicyRequest;
const DescribeViewsResponse = models.DescribeViewsResponse;
const DataFormat = models.DataFormat;
const DatabaseResponseInfo = models.DatabaseResponseInfo;


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
     * 该接口（CreateExportTask）用于创建导出任务
     * @param {CreateExportTaskRequest} req
     * @param {function(string, CreateExportTaskResponse):void} cb
     * @public
     */
    CreateExportTask(req, cb) {
        let resp = new CreateExportTaskResponse();
        this.request("CreateExportTask", req, resp, cb);
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


}
module.exports = DlcClient;

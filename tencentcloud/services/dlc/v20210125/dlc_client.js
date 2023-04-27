"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * dlc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dlc.tencentcloudapi.com", "2021-01-25", clientConfig);
    }
    /**
     * 本接口（CreateTask）用于创建sql查询任务。（推荐使用CreateTasks接口）
     */
    async CreateTask(req, cb) {
        return this.request("CreateTask", req, cb);
    }
    /**
     * 添加用户到工作组
     */
    async AddUsersToWorkGroup(req, cb) {
        return this.request("AddUsersToWorkGroup", req, cb);
    }
    /**
     * DMS元数据更新表
     */
    async AlterDMSTable(req, cb) {
        return this.request("AlterDMSTable", req, cb);
    }
    /**
     * 本接口（DescribeForbiddenTablePro）用于获取被禁用的表属性列表
     */
    async DescribeForbiddenTablePro(req, cb) {
        return this.request("DescribeForbiddenTablePro", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSession）用于获取notebook livy session详情信息
     */
    async DescribeNotebookSession(req, cb) {
        return this.request("DescribeNotebookSession", req, cb);
    }
    /**
     * 本接口（CreateNotebookSession）用于创建notebook livy session
     */
    async CreateNotebookSession(req, cb) {
        return this.request("CreateNotebookSession", req, cb);
    }
    /**
     * 删除工作组
     */
    async DeleteWorkGroup(req, cb) {
        return this.request("DeleteWorkGroup", req, cb);
    }
    /**
     * 元数据解锁
     */
    async UnlockMetaData(req, cb) {
        return this.request("UnlockMetaData", req, cb);
    }
    /**
     * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
     */
    async CreateStoreLocation(req, cb) {
        return this.request("CreateStoreLocation", req, cb);
    }
    /**
     * 本接口（CreateNotebookSessionStatementSupportBatchSQL）用于创建Statement批量运行SQL任务。
     */
    async CreateNotebookSessionStatementSupportBatchSQL(req, cb) {
        return this.request("CreateNotebookSessionStatementSupportBatchSQL", req, cb);
    }
    /**
     * 切换主备集群
     */
    async SwitchDataEngine(req, cb) {
        return this.request("SwitchDataEngine", req, cb);
    }
    /**
     * DMS元数据更新库
     */
    async AlterDMSDatabase(req, cb) {
        return this.request("AlterDMSDatabase", req, cb);
    }
    /**
     * DMS元数据获取分区
     */
    async DescribeDMSPartitions(req, cb) {
        return this.request("DescribeDMSPartitions", req, cb);
    }
    /**
     * 查询任务结果
     */
    async DescribeTaskResult(req, cb) {
        return this.request("DescribeTaskResult", req, cb);
    }
    /**
     * DMS元数据获取表列表
     */
    async DescribeDMSTables(req, cb) {
        return this.request("DescribeDMSTables", req, cb);
    }
    /**
     * 该接口（DescribleTasks）用于查询任务列表
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 该接口（DeleteScript）用于删除sql脚本。
     */
    async DeleteScript(req, cb) {
        return this.request("DeleteScript", req, cb);
    }
    /**
     * 创建spark任务
     */
    async CreateSparkAppTask(req, cb) {
        return this.request("CreateSparkAppTask", req, cb);
    }
    /**
     * 查询托管存储指定目录的Summary
     */
    async DescribeLakeFsDirSummary(req, cb) {
        return this.request("DescribeLakeFsDirSummary", req, cb);
    }
    /**
     * 本接口（DescribeDatabases）用于查询数据库列表。
     */
    async DescribeDatabases(req, cb) {
        return this.request("DescribeDatabases", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSessions）用于获取notebook livy session列表
     */
    async DescribeNotebookSessions(req, cb) {
        return this.request("DescribeNotebookSessions", req, cb);
    }
    /**
     * 创建用户
     */
    async CreateUser(req, cb) {
        return this.request("CreateUser", req, cb);
    }
    /**
     * 本接口（DescribeTables）用于查询数据表列表。
     */
    async DescribeTables(req, cb) {
        return this.request("DescribeTables", req, cb);
    }
    /**
     * DMS元数据更新分区
     */
    async AlterDMSPartition(req, cb) {
        return this.request("AlterDMSPartition", req, cb);
    }
    /**
     * 元数据锁
     */
    async LockMetaData(req, cb) {
        return this.request("LockMetaData", req, cb);
    }
    /**
     * 获取spark应用列表。
     */
    async DescribeSparkAppJobs(req, cb) {
        return this.request("DescribeSparkAppJobs", req, cb);
    }
    /**
     * 获取用户列表信息
     */
    async DescribeUsers(req, cb) {
        return this.request("DescribeUsers", req, cb);
    }
    /**
     * 本接口（CreateTasks），用于批量创建任务
     */
    async CreateTasks(req, cb) {
        return this.request("CreateTasks", req, cb);
    }
    /**
     * 该接口（DescribeScripts）用于获取所有SQL查询。
     */
    async DescribeScripts(req, cb) {
        return this.request("DescribeScripts", req, cb);
    }
    /**
     * 修改工作组信息
     */
    async ModifyWorkGroup(req, cb) {
        return this.request("ModifyWorkGroup", req, cb);
    }
    /**
     * 上报元数据心跳
     */
    async ReportHeartbeatMetaData(req, cb) {
        return this.request("ReportHeartbeatMetaData", req, cb);
    }
    /**
     * 本接口（ListTaskJobLogDetail）用于获取spark-jar日志列表
     */
    async ListTaskJobLogDetail(req, cb) {
        return this.request("ListTaskJobLogDetail", req, cb);
    }
    /**
     * 创建托管存储内表（该接口已废弃）
     */
    async CreateInternalTable(req, cb) {
        return this.request("CreateInternalTable", req, cb);
    }
    /**
     * 生成创建托管表语句
     */
    async GenerateCreateMangedTableSql(req, cb) {
        return this.request("GenerateCreateMangedTableSql", req, cb);
    }
    /**
     * 绑定鉴权策略到工作组
     */
    async AttachWorkGroupPolicy(req, cb) {
        return this.request("AttachWorkGroupPolicy", req, cb);
    }
    /**
     * 创建spark应用
     */
    async CreateSparkApp(req, cb) {
        return this.request("CreateSparkApp", req, cb);
    }
    /**
     * 本接口（CreateDatabase）用于生成建库SQL语句。
     */
    async CreateDatabase(req, cb) {
        return this.request("CreateDatabase", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSessionStatements）用于获取Session Statement列表。
     */
    async DescribeNotebookSessionStatements(req, cb) {
        return this.request("DescribeNotebookSessionStatements", req, cb);
    }
    /**
     * 本接口用于控制暂停或恢复数据引擎
     */
    async SuspendResumeDataEngine(req, cb) {
        return this.request("SuspendResumeDataEngine", req, cb);
    }
    /**
     * DMS元数据创建库
     */
    async CreateDMSDatabase(req, cb) {
        return this.request("CreateDMSDatabase", req, cb);
    }
    /**
     * 绑定鉴权策略到用户
     */
    async AttachUserPolicy(req, cb) {
        return this.request("AttachUserPolicy", req, cb);
    }
    /**
     * 修改数据治理事件阈值
     */
    async ModifyGovernEventRule(req, cb) {
        return this.request("ModifyGovernEventRule", req, cb);
    }
    /**
     * 创建查询结果下载任务
     */
    async CreateResultDownload(req, cb) {
        return this.request("CreateResultDownload", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSessionStatementSqlResult）用于获取statement运行结果。
     */
    async DescribeNotebookSessionStatementSqlResult(req, cb) {
        return this.request("DescribeNotebookSessionStatementSqlResult", req, cb);
    }
    /**
     * 本接口（CreateNotebookSessionStatement）用于创建session statement
     */
    async CreateNotebookSessionStatement(req, cb) {
        return this.request("CreateNotebookSessionStatement", req, cb);
    }
    /**
     * 本接口（DescribeDataEngines）用于获取DataEngines信息列表
     */
    async DescribeDataEngines(req, cb) {
        return this.request("DescribeDataEngines", req, cb);
    }
    /**
     * DMS元数据删除库
     */
    async DropDMSDatabase(req, cb) {
        return this.request("DropDMSDatabase", req, cb);
    }
    /**
     * DMS元数据新增分区
     */
    async AddDMSPartitions(req, cb) {
        return this.request("AddDMSPartitions", req, cb);
    }
    /**
     * 本接口（CancelNotebookSessionStatementBatch）用于按批取消Session statement。
     */
    async CancelNotebookSessionStatementBatch(req, cb) {
        return this.request("CancelNotebookSessionStatementBatch", req, cb);
    }
    /**
     * 删除spark应用
     */
    async DeleteSparkApp(req, cb) {
        return this.request("DeleteSparkApp", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSessionLog）用于获取notebook livy session日志
     */
    async DescribeNotebookSessionLog(req, cb) {
        return this.request("DescribeNotebookSessionLog", req, cb);
    }
    /**
     * 查询结果下载任务
     */
    async DescribeResultDownload(req, cb) {
        return this.request("DescribeResultDownload", req, cb);
    }
    /**
     * DMS元数据获取表
     */
    async DescribeDMSTable(req, cb) {
        return this.request("DescribeDMSTable", req, cb);
    }
    /**
     * DMS元数据删除分区
     */
    async DropDMSPartitions(req, cb) {
        return this.request("DropDMSPartitions", req, cb);
    }
    /**
     * 创建工作组
     */
    async CreateWorkGroup(req, cb) {
        return this.request("CreateWorkGroup", req, cb);
    }
    /**
     * 本接口（CancelTask），用于取消任务执行
     */
    async CancelTask(req, cb) {
        return this.request("CancelTask", req, cb);
    }
    /**
     * 更新spark应用
     */
    async ModifySparkApp(req, cb) {
        return this.request("ModifySparkApp", req, cb);
    }
    /**
     * 删除用户
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 本接口根据引擎ID获取数据引擎资源使用情况
     */
    async DescribeEngineUsageInfo(req, cb) {
        return this.request("DescribeEngineUsageInfo", req, cb);
    }
    /**
     * 按顺序创建任务（已经废弃，后期不再维护，请使用接口CreateTasks）
     */
    async CreateTasksInOrder(req, cb) {
        return this.request("CreateTasksInOrder", req, cb);
    }
    /**
     * 此接口用于更新行过滤规则。注意只能更新过滤规则，不能更新规格对象catalog，database和table。
     */
    async UpdateRowFilter(req, cb) {
        return this.request("UpdateRowFilter", req, cb);
    }
    /**
     * DMS元数据创建表
     */
    async CreateDMSTable(req, cb) {
        return this.request("CreateDMSTable", req, cb);
    }
    /**
     * 解绑用户鉴权策略
     */
    async DetachUserPolicy(req, cb) {
        return this.request("DetachUserPolicy", req, cb);
    }
    /**
     * 解绑工作组鉴权策略
     */
    async DetachWorkGroupPolicy(req, cb) {
        return this.request("DetachWorkGroupPolicy", req, cb);
    }
    /**
     * DMS元数据删除表
     */
    async DropDMSTable(req, cb) {
        return this.request("DropDMSTable", req, cb);
    }
    /**
     * 元数据锁检查
     */
    async CheckLockMetaData(req, cb) {
        return this.request("CheckLockMetaData", req, cb);
    }
    /**
     * 该接口（CreateImportTask）用于创建导入任务
     */
    async CreateImportTask(req, cb) {
        return this.request("CreateImportTask", req, cb);
    }
    /**
     * 本接口（CreateTable）用于生成建表SQL。
     */
    async CreateTable(req, cb) {
        return this.request("CreateTable", req, cb);
    }
    /**
     * 该接口（CreateExportTask）用于创建导出任务
     */
    async CreateExportTask(req, cb) {
        return this.request("CreateExportTask", req, cb);
    }
    /**
     * 从工作组中删除用户
     */
    async DeleteUsersFromWorkGroup(req, cb) {
        return this.request("DeleteUsersFromWorkGroup", req, cb);
    }
    /**
     * 为用户创建数据引擎
     */
    async CreateDataEngine(req, cb) {
        return this.request("CreateDataEngine", req, cb);
    }
    /**
     * 解绑用户上的用户组
     */
    async UnbindWorkGroupsFromUser(req, cb) {
        return this.request("UnbindWorkGroupsFromUser", req, cb);
    }
    /**
     * 获取工作组列表
     */
    async DescribeWorkGroups(req, cb) {
        return this.request("DescribeWorkGroups", req, cb);
    }
    /**
     * 该接口（CreateScript）用于创建sql脚本。
     */
    async CreateScript(req, cb) {
        return this.request("CreateScript", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSessionStatement）用于获取session statement信息
     */
    async DescribeNotebookSessionStatement(req, cb) {
        return this.request("DescribeNotebookSessionStatement", req, cb);
    }
    /**
     * 本接口（DescribeTable），用于查询单个表的详细信息。
     */
    async DescribeTable(req, cb) {
        return this.request("DescribeTable", req, cb);
    }
    /**
     * 本接口（DescribeViews）用于查询数据视图列表。
     */
    async DescribeViews(req, cb) {
        return this.request("DescribeViews", req, cb);
    }
    /**
     * DMS元数据获取库
     */
    async DescribeDMSDatabase(req, cb) {
        return this.request("DescribeDMSDatabase", req, cb);
    }
    /**
     * 绑定工作组到用户
     */
    async BindWorkGroupsToUser(req, cb) {
        return this.request("BindWorkGroupsToUser", req, cb);
    }
    /**
     * 修改用户信息
     */
    async ModifyUser(req, cb) {
        return this.request("ModifyUser", req, cb);
    }
    /**
     * 本接口（DeleteNotebookSession）用于删除notebook livy session
     */
    async DeleteNotebookSession(req, cb) {
        return this.request("DeleteNotebookSession", req, cb);
    }
    /**
     * 本接口（CancelNotebookSessionStatement）用于取消session statement
     */
    async CancelNotebookSessionStatement(req, cb) {
        return this.request("CancelNotebookSessionStatement", req, cb);
    }
    /**
     * 查询计算结果存储位置。
     */
    async DescribeStoreLocation(req, cb) {
        return this.request("DescribeStoreLocation", req, cb);
    }
    /**
     * 查询具体的spark应用
     */
    async DescribeSparkAppJob(req, cb) {
        return this.request("DescribeSparkAppJob", req, cb);
    }
    /**
     * 查询spark应用的运行任务实例列表
     */
    async DescribeSparkAppTasks(req, cb) {
        return this.request("DescribeSparkAppTasks", req, cb);
    }
    /**
     * 查询用户的托管存储信息
     */
    async DescribeLakeFsInfo(req, cb) {
        return this.request("DescribeLakeFsInfo", req, cb);
    }
}
exports.Client = Client;

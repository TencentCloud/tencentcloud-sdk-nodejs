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
     * 本接口（CreateTask）用于创建并执行SQL任务。（推荐使用CreateTasks接口）
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
     * 本接口（DescribeForbiddenTablePro）用于查询被禁用的表属性列表（新）
     */
    async DescribeForbiddenTablePro(req, cb) {
        return this.request("DescribeForbiddenTablePro", req, cb);
    }
    /**
     * 列举用户角色信息
     */
    async DescribeUserRoles(req, cb) {
        return this.request("DescribeUserRoles", req, cb);
    }
    /**
     * 修改用户类型。只有管理员用户能够调用该接口进行操作
     */
    async ModifyUserType(req, cb) {
        return this.request("ModifyUserType", req, cb);
    }
    /**
     * 获取工作组详细信息
     */
    async DescribeWorkGroupInfo(req, cb) {
        return this.request("DescribeWorkGroupInfo", req, cb);
    }
    /**
     * 本接口（ListTaskJobLogName）用于获取spark-jar日志名称列表
     */
    async ListTaskJobLogName(req, cb) {
        return this.request("ListTaskJobLogName", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSession）用于查询交互式 session详情信息
     */
    async DescribeNotebookSession(req, cb) {
        return this.request("DescribeNotebookSession", req, cb);
    }
    /**
     * 本接口（CreateNotebookSession）用于创建交互式session（notebook）
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
     * 本接口根据名称用于获取数据引擎详细信息
     */
    async DescribeDataEngine(req, cb) {
        return this.request("DescribeDataEngine", req, cb);
    }
    /**
     * 该接口（CreateStoreLocation）新增或覆盖计算结果存储位置。
     */
    async CreateStoreLocation(req, cb) {
        return this.request("CreateStoreLocation", req, cb);
    }
    /**
     * 本接口（CreateNotebookSessionStatementSupportBatchSQL）用于创建交互式session并执行SQL任务
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
     * 本接口（DescribeDataEngines）用于查询DataEngines信息列表.
     */
    async DescribeDataEngines(req, cb) {
        return this.request("DescribeDataEngines", req, cb);
    }
    /**
     * DMS元数据获取分区
     */
    async DescribeDMSPartitions(req, cb) {
        return this.request("DescribeDMSPartitions", req, cb);
    }
    /**
     * 本接口（CancelTask），用于取消任务
     */
    async CancelTask(req, cb) {
        return this.request("CancelTask", req, cb);
    }
    /**
     * 查询DLC Catalog授权列表
     */
    async DescribeDLCCatalogAccess(req, cb) {
        return this.request("DescribeDLCCatalogAccess", req, cb);
    }
    /**
     * DMS元数据获取表列表
     */
    async DescribeDMSTables(req, cb) {
        return this.request("DescribeDMSTables", req, cb);
    }
    /**
     * 获取用户类型
     */
    async DescribeUserType(req, cb) {
        return this.request("DescribeUserType", req, cb);
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
     * 切换引擎镜像版本
     */
    async SwitchDataEngineImage(req, cb) {
        return this.request("SwitchDataEngineImage", req, cb);
    }
    /**
     * 启动Spark作业
     */
    async CreateSparkAppTask(req, cb) {
        return this.request("CreateSparkAppTask", req, cb);
    }
    /**
     * 此接口（DescribeOtherCHDFSBindingList）用于查询其他产品元数据加速桶绑定列表
     */
    async DescribeOtherCHDFSBindingList(req, cb) {
        return this.request("DescribeOtherCHDFSBindingList", req, cb);
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
     * 本接口（DescribeNotebookSessions）用于查询交互式 session列表
     */
    async DescribeNotebookSessions(req, cb) {
        return this.request("DescribeNotebookSessions", req, cb);
    }
    /**
     * 本接口（RegisterThirdPartyAccessUser）查询开通第三方平台访问的用户信息
     */
    async DescribeThirdPartyAccessUser(req, cb) {
        return this.request("DescribeThirdPartyAccessUser", req, cb);
    }
    /**
     * 撤销DLC Catalog访问权限
     */
    async RevokeDLCCatalogAccess(req, cb) {
        return this.request("RevokeDLCCatalogAccess", req, cb);
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
     * 本接口（ModifySparkAppBatch）用于批量修改Spark作业参数配置
     */
    async ModifySparkAppBatch(req, cb) {
        return this.request("ModifySparkAppBatch", req, cb);
    }
    /**
     * DMS元数据更新分区
     */
    async AlterDMSPartition(req, cb) {
        return this.request("AlterDMSPartition", req, cb);
    }
    /**
     * 获取LakeFs上task执行结果访问信息
     */
    async DescribeLakeFsTaskResult(req, cb) {
        return this.request("DescribeLakeFsTaskResult", req, cb);
    }
    /**
     * 添加数据优化资源
     */
    async AddOptimizerEngines(req, cb) {
        return this.request("AddOptimizerEngines", req, cb);
    }
    /**
     * 此接口用于更新行过滤规则。注意只能更新过滤规则，不能更新规格对象catalog，database和table。
     */
    async UpdateRowFilter(req, cb) {
        return this.request("UpdateRowFilter", req, cb);
    }
    /**
     * 查询sql查询界面高级设置
     */
    async DescribeAdvancedStoreLocation(req, cb) {
        return this.request("DescribeAdvancedStoreLocation", req, cb);
    }
    /**
     * 元数据锁
     */
    async LockMetaData(req, cb) {
        return this.request("LockMetaData", req, cb);
    }
    /**
     * 查询spark作业列表
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
     * 本接口（CreateTasks），用于批量创建并执行SQL任务
     */
    async CreateTasks(req, cb) {
        return this.request("CreateTasks", req, cb);
    }
    /**
     * 该接口（DescribeScripts）用于查询SQL脚本列表
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
     * 本接口（DescribeTables）用于查询数据表名称列表
     */
    async DescribeTablesName(req, cb) {
        return this.request("DescribeTablesName", req, cb);
    }
    /**
     * 此接口（DeleteCHDFSBindingProduct）用于删除元数据加速桶和产品绑定关系
     */
    async DeleteCHDFSBindingProduct(req, cb) {
        return this.request("DeleteCHDFSBindingProduct", req, cb);
    }
    /**
     * 上报元数据心跳
     */
    async ReportHeartbeatMetaData(req, cb) {
        return this.request("ReportHeartbeatMetaData", req, cb);
    }
    /**
     * 分配原生表表属性
     */
    async AssignMangedTableProperties(req, cb) {
        return this.request("AssignMangedTableProperties", req, cb);
    }
    /**
     * 查询可更新配置的引擎列表
     */
    async DescribeUpdatableDataEngines(req, cb) {
        return this.request("DescribeUpdatableDataEngines", req, cb);
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
     * 查询引擎规格详情
     */
    async DescribeDataEnginesScaleDetail(req, cb) {
        return this.request("DescribeDataEnginesScaleDetail", req, cb);
    }
    /**
     * 创建spark作业
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
     * 回滚引擎镜像版本
     */
    async RollbackDataEngineImage(req, cb) {
        return this.request("RollbackDataEngineImage", req, cb);
    }
    /**
     * 本接口（DescribeSubUserAccessPolicy）用于开通了第三方平台访问的用户，查询其子用户的访问策略
     */
    async DescribeSubUserAccessPolicy(req, cb) {
        return this.request("DescribeSubUserAccessPolicy", req, cb);
    }
    /**
     * 本接口（CreateSparkSessionBatchSQL）用于向Spark作业引擎提交Spark SQL批任务。
     */
    async CreateSparkSessionBatchSQL(req, cb) {
        return this.request("CreateSparkSessionBatchSQL", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSessionStatements）用于查询Session中执行的任务列表
     */
    async DescribeNotebookSessionStatements(req, cb) {
        return this.request("DescribeNotebookSessionStatements", req, cb);
    }
    /**
     * 授权访问DLC Catalog
     */
    async GrantDLCCatalogAccess(req, cb) {
        return this.request("GrantDLCCatalogAccess", req, cb);
    }
    /**
     * 本接口用于控制挂起或启动数据引擎
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
     * 修改sql查询界面高级设置。
     */
    async ModifyAdvancedStoreLocation(req, cb) {
        return this.request("ModifyAdvancedStoreLocation", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSessionStatementSqlResult）用于获取statement运行结果。
     */
    async DescribeNotebookSessionStatementSqlResult(req, cb) {
        return this.request("DescribeNotebookSessionStatementSqlResult", req, cb);
    }
    /**
     * 本接口（CreateNotebookSessionStatement）用于在session中执行代码片段
     */
    async CreateNotebookSessionStatement(req, cb) {
        return this.request("CreateNotebookSessionStatement", req, cb);
    }
    /**
     * DMS元数据更新库
     */
    async AlterDMSDatabase(req, cb) {
        return this.request("AlterDMSDatabase", req, cb);
    }
    /**
     * 本接口（DescribeSparkSessionBatchSQL）用于查询Spark SQL批任务运行状态
     */
    async DescribeSparkSessionBatchSQL(req, cb) {
        return this.request("DescribeSparkSessionBatchSQL", req, cb);
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
     * 修改用户引擎自定义配置
     */
    async UpdateUserDataEngineConfig(req, cb) {
        return this.request("UpdateUserDataEngineConfig", req, cb);
    }
    /**
     * 本接口（CancelNotebookSessionStatementBatch）用于批量取消Session 中执行的任务
     */
    async CancelNotebookSessionStatementBatch(req, cb) {
        return this.request("CancelNotebookSessionStatementBatch", req, cb);
    }
    /**
     * 本接口（CheckDataEngineImageCanBeUpgrade）用于查看集群镜像是否能够升级。
     */
    async CheckDataEngineImageCanBeUpgrade(req, cb) {
        return this.request("CheckDataEngineImageCanBeUpgrade", req, cb);
    }
    /**
     * 删除spark作业
     */
    async DeleteSparkApp(req, cb) {
        return this.request("DeleteSparkApp", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSessionLog）用于查询交互式 session日志
     */
    async DescribeNotebookSessionLog(req, cb) {
        return this.request("DescribeNotebookSessionLog", req, cb);
    }
    /**
     * 该接口（DescribeTasksCostInfo）用于查询任务消耗
     */
    async DescribeTasksCostInfo(req, cb) {
        return this.request("DescribeTasksCostInfo", req, cb);
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
     * 该接口（QueryTaskCostDetail）用于查询任务消耗明细
     */
    async QueryTaskCostDetail(req, cb) {
        return this.request("QueryTaskCostDetail", req, cb);
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
     * 此接口（CreateCHDFSBindingProduct）用于创建元数据加速桶和产品绑定关系
     */
    async CreateCHDFSBindingProduct(req, cb) {
        return this.request("CreateCHDFSBindingProduct", req, cb);
    }
    /**
     * 本接口（QueryInternalTableWarehouse）用于获取原生表warehouse路径
     */
    async QueryInternalTableWarehouse(req, cb) {
        return this.request("QueryInternalTableWarehouse", req, cb);
    }
    /**
     * 本接口（DescribeDatasourceConnection）用于查询数据源信息
     */
    async DescribeDatasourceConnection(req, cb) {
        return this.request("DescribeDatasourceConnection", req, cb);
    }
    /**
     * 本接口（CheckDataEngineImageCanBeRollback）用于查看集群是否能回滚。
     */
    async CheckDataEngineImageCanBeRollback(req, cb) {
        return this.request("CheckDataEngineImageCanBeRollback", req, cb);
    }
    /**
     * 本接口（CancelSparkSessionBatchSQL）用于取消Spark SQL批任务。
     */
    async CancelSparkSessionBatchSQL(req, cb) {
        return this.request("CancelSparkSessionBatchSQL", req, cb);
    }
    /**
     * 修改用户信息
     */
    async ModifyUser(req, cb) {
        return this.request("ModifyUser", req, cb);
    }
    /**
     * 本接口（DescribeSparkSessionBatchSqlLog）用于查询Spark SQL批任务日志
     */
    async DescribeSparkSessionBatchSqlLog(req, cb) {
        return this.request("DescribeSparkSessionBatchSqlLog", req, cb);
    }
    /**
     * 本接口（DescribeTable），用于查询单个表的详细信息。
     */
    async DescribeTable(req, cb) {
        return this.request("DescribeTable", req, cb);
    }
    /**
     * GetOptimizerPolicy
     */
    async GetOptimizerPolicy(req, cb) {
        return this.request("GetOptimizerPolicy", req, cb);
    }
    /**
     * 获取用户详细信息
     */
    async DescribeUserInfo(req, cb) {
        return this.request("DescribeUserInfo", req, cb);
    }
    /**
     * 本接口用于更新数据引擎配置
     */
    async UpdateDataEngine(req, cb) {
        return this.request("UpdateDataEngine", req, cb);
    }
    /**
     * 本接口（CheckDataEngineConfigPairsValidity）用于检查引擎用户自定义参数的有效性
     */
    async CheckDataEngineConfigPairsValidity(req, cb) {
        return this.request("CheckDataEngineConfigPairsValidity", req, cb);
    }
    /**
     * 删除数据引擎
     */
    async DeleteDataEngine(req, cb) {
        return this.request("DeleteDataEngine", req, cb);
    }
    /**
     * 删除用户
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 删除表
     */
    async DeleteTable(req, cb) {
        return this.request("DeleteTable", req, cb);
    }
    /**
     * 本接口根据引擎ID查询数据引擎资源使用情况
     */
    async DescribeEngineUsageInfo(req, cb) {
        return this.request("DescribeEngineUsageInfo", req, cb);
    }
    /**
     * 查看任务概览页
     */
    async DescribeTasksOverview(req, cb) {
        return this.request("DescribeTasksOverview", req, cb);
    }
    /**
     * 用户某种操作，触发引擎配置修改
     */
    async UpdateDataEngineConfig(req, cb) {
        return this.request("UpdateDataEngineConfig", req, cb);
    }
    /**
     * 按顺序创建任务（已经废弃，后期不再维护，请使用接口CreateTasks）
     */
    async CreateTasksInOrder(req, cb) {
        return this.request("CreateTasksInOrder", req, cb);
    }
    /**
     * 本接口（DescribeDataEngineImageVersions）用于获取独享集群大版本镜像列表。
     */
    async DescribeDataEngineImageVersions(req, cb) {
        return this.request("DescribeDataEngineImageVersions", req, cb);
    }
    /**
     * DMS元数据创建表
     */
    async CreateDMSTable(req, cb) {
        return this.request("CreateDMSTable", req, cb);
    }
    /**
     * 本接口（DescribeSparkSessionBatchSQLCost）用于查询Spark SQL批任务消耗
     */
    async DescribeSparkSessionBatchSQLCost(req, cb) {
        return this.request("DescribeSparkSessionBatchSQLCost", req, cb);
    }
    /**
     * 升级引擎镜像
     */
    async UpgradeDataEngineImage(req, cb) {
        return this.request("UpgradeDataEngineImage", req, cb);
    }
    /**
     * 解绑用户鉴权策略
     */
    async DetachUserPolicy(req, cb) {
        return this.request("DetachUserPolicy", req, cb);
    }
    /**
     * 查询数据引擎事件
     */
    async DescribeDataEngineEvents(req, cb) {
        return this.request("DescribeDataEngineEvents", req, cb);
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
     * 获取任务结果查询
     */
    async QueryResult(req, cb) {
        return this.request("QueryResult", req, cb);
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
     * 查询任务结果，仅支持30天以内的任务查询结果，且返回数据大小超过近50M会进行截断。
     */
    async DescribeTaskResult(req, cb) {
        return this.request("DescribeTaskResult", req, cb);
    }
    /**
     * 该接口（CreateExportTask）用于创建导出任务
     */
    async CreateExportTask(req, cb) {
        return this.request("CreateExportTask", req, cb);
    }
    /**
     * 本接口（RegisterThirdPartyAccessUser）用于开通第三方平台访问
     */
    async RegisterThirdPartyAccessUser(req, cb) {
        return this.request("RegisterThirdPartyAccessUser", req, cb);
    }
    /**
     * 该接口用于洞察分析列表
     */
    async DescribeTasksAnalysis(req, cb) {
        return this.request("DescribeTasksAnalysis", req, cb);
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
     * 重启引擎
     */
    async RestartDataEngine(req, cb) {
        return this.request("RestartDataEngine", req, cb);
    }
    /**
     * 本接口（DescribeNotebookSessionStatement）用于查询session 中执行任务的详情
     */
    async DescribeNotebookSessionStatement(req, cb) {
        return this.request("DescribeNotebookSessionStatement", req, cb);
    }
    /**
     * 续费数据引擎
     */
    async RenewDataEngine(req, cb) {
        return this.request("RenewDataEngine", req, cb);
    }
    /**
     * 更新spark作业
     */
    async ModifySparkApp(req, cb) {
        return this.request("ModifySparkApp", req, cb);
    }
    /**
     * 本接口（DescribeViews）用于查询数据视图列表。
     */
    async DescribeViews(req, cb) {
        return this.request("DescribeViews", req, cb);
    }
    /**
     * 本接口（RegisterThirdPartyAccessUser）用于移除第三方平台访问
     */
    async DeleteThirdPartyAccessUser(req, cb) {
        return this.request("DeleteThirdPartyAccessUser", req, cb);
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
     * 查询用户自定义引擎参数
     */
    async DescribeUserDataEngineConfig(req, cb) {
        return this.request("DescribeUserDataEngineConfig", req, cb);
    }
    /**
     * 本接口（DescribeTaskLog）用于获取spark 作业任务日志详情
     */
    async DescribeTaskLog(req, cb) {
        return this.request("DescribeTaskLog", req, cb);
    }
    /**
     * 修改引擎描述信息
     */
    async ModifyDataEngineDescription(req, cb) {
        return this.request("ModifyDataEngineDescription", req, cb);
    }
    /**
     * 本接口（DeleteNotebookSession）用于删除交互式session（notebook）
     */
    async DeleteNotebookSession(req, cb) {
        return this.request("DeleteNotebookSession", req, cb);
    }
    /**
     * 本接口（CancelNotebookSessionStatement）用于取消session中执行的任务
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
     * 查询spark作业信息
     */
    async DescribeSparkAppJob(req, cb) {
        return this.request("DescribeSparkAppJob", req, cb);
    }
    /**
     * 查询Spark作业的运行任务列表
     */
    async DescribeSparkAppTasks(req, cb) {
        return this.request("DescribeSparkAppTasks", req, cb);
    }
    /**
     * 本接口（DescribeDataEnginePythonSparkImages）用于获取PYSPARK镜像列表
     */
    async DescribeDataEnginePythonSparkImages(req, cb) {
        return this.request("DescribeDataEnginePythonSparkImages", req, cb);
    }
    /**
     * 本接口（ListTaskJobLogDetail）用于获取spark 作业任务日志详情
     */
    async ListTaskJobLogDetail(req, cb) {
        return this.request("ListTaskJobLogDetail", req, cb);
    }
    /**
     * 查询用户的托管存储信息
     */
    async DescribeLakeFsInfo(req, cb) {
        return this.request("DescribeLakeFsInfo", req, cb);
    }
}
exports.Client = Client;

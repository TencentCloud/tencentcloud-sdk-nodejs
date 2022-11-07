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
 * wedata client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("wedata.tencentcloudapi.com", "2021-08-20", clientConfig);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建任务
     */
    async CreateTask(req, cb) {
        return this.request("CreateTask", req, cb);
    }
    /**
     * 创建任务告警规则
     */
    async CreateTaskAlarmRegular(req, cb) {
        return this.request("CreateTaskAlarmRegular", req, cb);
    }
    /**
     * 删除集成任务
     */
    async DeleteIntegrationTask(req, cb) {
        return this.request("DeleteIntegrationTask", req, cb);
    }
    /**
     * 实时任务运行指标概览
     */
    async DescribeRealTimeTaskMetricOverview(req, cb) {
        return this.request("DescribeRealTimeTaskMetricOverview", req, cb);
    }
    /**
     * 获取离线任务实例
     */
    async GetOfflineInstanceList(req, cb) {
        return this.request("GetOfflineInstanceList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
任务批量补录，调度状态任务才可以补录；



     */
    async MakeUpTasksNew(req, cb) {
        return this.request("MakeUpTasksNew", req, cb);
    }
    /**
     * 获取采集器所在集群的VPC列表
     */
    async DescribeInLongAgentVpcList(req, cb) {
        return this.request("DescribeInLongAgentVpcList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量终止操作
     */
    async KillInstances(req, cb) {
        return this.request("KillInstances", req, cb);
    }
    /**
     * 批量终止集成任务实例
     */
    async BatchKillIntegrationTaskInstances(req, cb) {
        return this.request("BatchKillIntegrationTaskInstances", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件监听器
     */
    async RegisterEventListener(req, cb) {
        return this.request("RegisterEventListener", req, cb);
    }
    /**
     * 建hive表
     */
    async CreateHiveTable(req, cb) {
        return this.request("CreateHiveTable", req, cb);
    }
    /**
     * 获取集群命名空间列表
     */
    async DescribeClusterNamespaceList(req, cb) {
        return this.request("DescribeClusterNamespaceList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务具体详情
     */
    async DescribeTaskDetail(req, cb) {
        return this.request("DescribeTaskDetail", req, cb);
    }
    /**
     * 查询集成节点
     */
    async DescribeIntegrationNode(req, cb) {
        return this.request("DescribeIntegrationNode", req, cb);
    }
    /**
     * 获取数据标准规则详情
     */
    async DescribeStandardRuleDetailInfoList(req, cb) {
        return this.request("DescribeStandardRuleDetailInfoList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
基于多个工作流进行批量冻结任务操作
     */
    async FreezeTasksByMultiWorkflow(req, cb) {
        return this.request("FreezeTasksByMultiWorkflow", req, cb);
    }
    /**
     * 获取采集器列表
     */
    async DescribeInLongAgentList(req, cb) {
        return this.request("DescribeInLongAgentList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量删除任务，仅对任务状态为”已停止“有效；

     */
    async BatchDeleteTasksNew(req, cb) {
        return this.request("BatchDeleteTasksNew", req, cb);
    }
    /**
     * 继续集成任务
     */
    async ResumeIntegrationTask(req, cb) {
        return this.request("ResumeIntegrationTask", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除工作流
     */
    async DeleteWorkflowNew(req, cb) {
        return this.request("DeleteWorkflowNew", req, cb);
    }
    /**
     * 数据集成大屏采集器状态分布统计
     */
    async DescribeIntegrationStatisticsAgentStatus(req, cb) {
        return this.request("DescribeIntegrationStatisticsAgentStatus", req, cb);
    }
    /**
     * 离线任务实例运行日志列表
     */
    async DescribeInstanceLogList(req, cb) {
        return this.request("DescribeInstanceLogList", req, cb);
    }
    /**
     *  创建用户自定义函数
     */
    async CreateCustomFunction(req, cb) {
        return this.request("CreateCustomFunction", req, cb);
    }
    /**
     * 解锁集成任务
     */
    async UnlockIntegrationTask(req, cb) {
        return this.request("UnlockIntegrationTask", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
     */
    async BatchStopTasksNew(req, cb) {
        return this.request("BatchStopTasksNew", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除文件夹
     */
    async DeleteFolder(req, cb) {
        return this.request("DeleteFolder", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建数据源
     */
    async CreateDataSource(req, cb) {
        return this.request("CreateDataSource", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     */
    async SetTaskAlarmNew(req, cb) {
        return this.request("SetTaskAlarmNew", req, cb);
    }
    /**
     * 获取离线任务长连接Token
     */
    async DescribeOfflineTaskToken(req, cb) {
        return this.request("DescribeOfflineTaskToken", req, cb);
    }
    /**
     * 抢占锁定集成任务
     */
    async RobAndLockIntegrationTask(req, cb) {
        return this.request("RobAndLockIntegrationTask", req, cb);
    }
    /**
     * 判断集成节点名称是否存在
     */
    async CheckIntegrationNodeNameExists(req, cb) {
        return this.request("CheckIntegrationNodeNameExists", req, cb);
    }
    /**
     * 告警事件列表
     */
    async DescribeAlarmEvents(req, cb) {
        return this.request("DescribeAlarmEvents", req, cb);
    }
    /**
     * 生成建hive表的sql
     */
    async GenHiveTableDDLSql(req, cb) {
        return this.request("GenHiveTableDDLSql", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务脚本
     */
    async DescribeTaskScript(req, cb) {
        return this.request("DescribeTaskScript", req, cb);
    }
    /**
     * 保存用户自定义函数
     */
    async SaveCustomFunction(req, cb) {
        return this.request("SaveCustomFunction", req, cb);
    }
    /**
     * 查询全量函数
     */
    async DescribeOrganizationalFunctions(req, cb) {
        return this.request("DescribeOrganizationalFunctions", req, cb);
    }
    /**
     * 删除采集器
     */
    async DeleteInLongAgent(req, cb) {
        return this.request("DeleteInLongAgent", req, cb);
    }
    /**
     * 查询Inlong manager日志
     */
    async TaskLog(req, cb) {
        return this.request("TaskLog", req, cb);
    }
    /**
     * 调试运行集成任务
     */
    async DryRunDIOfflineTask(req, cb) {
        return this.request("DryRunDIOfflineTask", req, cb);
    }
    /**
     * 获取TKE集群列表
     */
    async DescribeInLongTkeClusterList(req, cb) {
        return this.request("DescribeInLongTkeClusterList", req, cb);
    }
    /**
     * 创建集成任务
     */
    async CreateIntegrationTask(req, cb) {
        return this.request("CreateIntegrationTask", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
    async DescribeDataSourceList(req, cb) {
        return this.request("DescribeDataSourceList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新任务
     */
    async ModifyTaskInfo(req, cb) {
        return this.request("ModifyTaskInfo", req, cb);
    }
    /**
     * 更新集成任务
     */
    async ModifyIntegrationTask(req, cb) {
        return this.request("ModifyIntegrationTask", req, cb);
    }
    /**
     * 数据集成大屏任务状态分布统计
     */
    async DescribeIntegrationStatisticsTaskStatus(req, cb) {
        return this.request("DescribeIntegrationStatisticsTaskStatus", req, cb);
    }
    /**
     * 批量运行集成任务
     */
    async BatchStartIntegrationTasks(req, cb) {
        return this.request("BatchStartIntegrationTasks", req, cb);
    }
    /**
     * 重命名任务（任务编辑）
     */
    async ModifyTaskName(req, cb) {
        return this.request("ModifyTaskName", req, cb);
    }
    /**
     * 离线任务重名校验
     */
    async CheckTaskNameExist(req, cb) {
        return this.request("CheckTaskNameExist", req, cb);
    }
    /**
     * 查询任务实例的关联实例列表
     */
    async DescribeRelatedInstances(req, cb) {
        return this.request("DescribeRelatedInstances", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
    async DescribeDatasource(req, cb) {
        return this.request("DescribeDatasource", req, cb);
    }
    /**
     * 注册采集器
     */
    async CreateInLongAgent(req, cb) {
        return this.request("CreateInLongAgent", req, cb);
    }
    /**
     * 更新采集器
     */
    async UpdateInLongAgent(req, cb) {
        return this.request("UpdateInLongAgent", req, cb);
    }
    /**
     * 创建离线任务
     */
    async CreateOfflineTask(req, cb) {
        return this.request("CreateOfflineTask", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流调度
     */
    async ModifyWorkflowSchedule(req, cb) {
        return this.request("ModifyWorkflowSchedule", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据工作流分页查询任务
     */
    async DescribeTasksByPage(req, cb) {
        return this.request("DescribeTasksByPage", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建文件夹
     */
    async CreateFolder(req, cb) {
        return this.request("CreateFolder", req, cb);
    }
    /**
     * 获取表schema信息
     */
    async DescribeTableSchemaInfo(req, cb) {
        return this.request("DescribeTableSchemaInfo", req, cb);
    }
    /**
     * 查询函数类型
     */
    async DescribeFunctionTypes(req, cb) {
        return this.request("DescribeFunctionTypes", req, cb);
    }
    /**
     * 离线任务周期统计明细
     */
    async DescribeTaskReportDetailList(req, cb) {
        return this.request("DescribeTaskReportDetailList", req, cb);
    }
    /**
     * 删除集成节点
     */
    async DeleteIntegrationNode(req, cb) {
        return this.request("DeleteIntegrationNode", req, cb);
    }
    /**
     * 停止集成任务
     */
    async StopIntegrationTask(req, cb) {
        return this.request("StopIntegrationTask", req, cb);
    }
    /**
     * 实时任务同步速度趋势
     */
    async DescribeRealTimeTaskSpeed(req, cb) {
        return this.request("DescribeRealTimeTaskSpeed", req, cb);
    }
    /**
     * 获取实例列表
     */
    async DescribeInstanceList(req, cb) {
        return this.request("DescribeInstanceList", req, cb);
    }
    /**
     * 告警接收人详情
     */
    async DescribeAlarmReceiver(req, cb) {
        return this.request("DescribeAlarmReceiver", req, cb);
    }
    /**
     * 查看任务锁状态信息
     */
    async DescribeTaskLockStatus(req, cb) {
        return this.request("DescribeTaskLockStatus", req, cb);
    }
    /**
     * 获取实例运行日志
     */
    async DescribeInstanceLog(req, cb) {
        return this.request("DescribeInstanceLog", req, cb);
    }
    /**
     * 批量更新集成任务（暂时仅支持批量更新责任人）
     */
    async BatchUpdateIntegrationTasks(req, cb) {
        return this.request("BatchUpdateIntegrationTasks", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量置成功
     */
    async ForceSucInstances(req, cb) {
        return this.request("ForceSucInstances", req, cb);
    }
    /**
     * 获取数据库信息
     */
    async DescribeDatabaseInfoList(req, cb) {
        return this.request("DescribeDatabaseInfoList", req, cb);
    }
    /**
     * 提交集成任务
     */
    async CommitIntegrationTask(req, cb) {
        return this.request("CommitIntegrationTask", req, cb);
    }
    /**
     * 删除任务
     */
    async DeleteOfflineTask(req, cb) {
        return this.request("DeleteOfflineTask", req, cb);
    }
    /**
     * 创建hive表，返回表名称
     */
    async CreateHiveTableByDDL(req, cb) {
        return this.request("CreateHiveTableByDDL", req, cb);
    }
    /**
     * 获取资源管理目录树
     */
    async DescribeResourceManagePathTrees(req, cb) {
        return this.request("DescribeResourceManagePathTrees", req, cb);
    }
    /**
     * 批量置成功集成任务实例
     */
    async BatchForceSuccessIntegrationTaskInstances(req, cb) {
        return this.request("BatchForceSuccessIntegrationTaskInstances", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量冻结任务
     */
    async FreezeTasks(req, cb) {
        return this.request("FreezeTasks", req, cb);
    }
    /**
     * 查询实时任务日志列表
     */
    async DescribeStreamTaskLogList(req, cb) {
        return this.request("DescribeStreamTaskLogList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改数据源
     */
    async ModifyDataSource(req, cb) {
        return this.request("ModifyDataSource", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除数据源
     */
    async DeleteDataSources(req, cb) {
        return this.request("DeleteDataSources", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
文件夹更新
     */
    async ModifyFolder(req, cb) {
        return this.request("ModifyFolder", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量重跑
     */
    async RerunInstances(req, cb) {
        return this.request("RerunInstances", req, cb);
    }
    /**
     * 判断告警规则重名
     */
    async CheckAlarmRegularNameExist(req, cb) {
        return this.request("CheckAlarmRegularNameExist", req, cb);
    }
    /**
     * 判断集成任务名称是否存在
     */
    async CheckIntegrationTaskNameExists(req, cb) {
        return this.request("CheckIntegrationTaskNameExists", req, cb);
    }
    /**
     * 获取字段类型列表
     */
    async DescribeDataTypes(req, cb) {
        return this.request("DescribeDataTypes", req, cb);
    }
    /**
     * 获取离线任务实例列表(新)
     */
    async GetOfflineDIInstanceList(req, cb) {
        return this.request("GetOfflineDIInstanceList", req, cb);
    }
    /**
     * 对集成离线任务执行批量补数据操作
     */
    async BatchMakeUpIntegrationTasks(req, cb) {
        return this.request("BatchMakeUpIntegrationTasks", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流
     */
    async ModifyWorkflowInfo(req, cb) {
        return this.request("ModifyWorkflowInfo", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
    async ModifyTaskLinks(req, cb) {
        return this.request("ModifyTaskLinks", req, cb);
    }
    /**
     * 更新集成节点
     */
    async ModifyIntegrationNode(req, cb) {
        return this.request("ModifyIntegrationNode", req, cb);
    }
    /**
     * 批量创建任务告警规则
     */
    async BatchCreateIntegrationTaskAlarms(req, cb) {
        return this.request("BatchCreateIntegrationTaskAlarms", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹目录
     */
    async DescribeFolderList(req, cb) {
        return this.request("DescribeFolderList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源列表
     */
    async DescribeDataSourceWithoutInfo(req, cb) {
        return this.request("DescribeDataSourceWithoutInfo", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
工作流下所有任务的补录
     */
    async MakeUpWorkflowNew(req, cb) {
        return this.request("MakeUpWorkflowNew", req, cb);
    }
    /**
     * 数据集成大屏任务状态统计趋势
     */
    async DescribeIntegrationStatisticsTaskStatusTrend(req, cb) {
        return this.request("DescribeIntegrationStatisticsTaskStatusTrend", req, cb);
    }
    /**
     * 批量重跑集成任务实例
     */
    async BatchRerunIntegrationTaskInstances(req, cb) {
        return this.request("BatchRerunIntegrationTaskInstances", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建工作流
     */
    async CreateWorkflow(req, cb) {
        return this.request("CreateWorkflow", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
运行任务
     */
    async RunTask(req, cb) {
        return this.request("RunTask", req, cb);
    }
    /**
     * 启动集成任务
     */
    async StartIntegrationTask(req, cb) {
        return this.request("StartIntegrationTask", req, cb);
    }
    /**
     * 锁定集成任务
     */
    async LockIntegrationTask(req, cb) {
        return this.request("LockIntegrationTask", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交工作流
     */
    async SubmitWorkflow(req, cb) {
        return this.request("SubmitWorkflow", req, cb);
    }
    /**
     * 批量删除集成任务
     */
    async BatchDeleteIntegrationTasks(req, cb) {
        return this.request("BatchDeleteIntegrationTasks", req, cb);
    }
    /**
     * 查询集成任务列表
     */
    async DescribeIntegrationTasks(req, cb) {
        return this.request("DescribeIntegrationTasks", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
    async ModifyTaskScript(req, cb) {
        return this.request("ModifyTaskScript", req, cb);
    }
    /**
     * 获取数据表信息
     */
    async DescribeTableInfoList(req, cb) {
        return this.request("DescribeTableInfoList", req, cb);
    }
    /**
     * 查询任务实例列表
     */
    async DescribeTaskInstances(req, cb) {
        return this.request("DescribeTaskInstances", req, cb);
    }
    /**
     * 删除任务告警规则
     */
    async DeleteTaskAlarmRegular(req, cb) {
        return this.request("DeleteTaskAlarmRegular", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
触发事件
     */
    async TriggerEvent(req, cb) {
        return this.request("TriggerEvent", req, cb);
    }
    /**
     * 资源管理删除资源
     */
    async DeleteResource(req, cb) {
        return this.request("DeleteResource", req, cb);
    }
    /**
     * 按起止日期统计离线任务的所有实例的运行指标总和
     */
    async DescribeTaskReport(req, cb) {
        return this.request("DescribeTaskReport", req, cb);
    }
    /**
     * 查询任务告警规则列表
     */
    async DescribeTaskAlarmRegulations(req, cb) {
        return this.request("DescribeTaskAlarmRegulations", req, cb);
    }
    /**
     * 查询集成任务版本节点信息
     */
    async DescribeIntegrationVersionNodesInfo(req, cb) {
        return this.request("DescribeIntegrationVersionNodesInfo", req, cb);
    }
    /**
     * 修改任务告警规则
     */
    async ModifyTaskAlarmRegular(req, cb) {
        return this.request("ModifyTaskAlarmRegular", req, cb);
    }
    /**
     * 删除用户自定义函数
     */
    async DeleteCustomFunction(req, cb) {
        return this.request("DeleteCustomFunction", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹下的工作流
     */
    async DescribeFolderWorkflowList(req, cb) {
        return this.request("DescribeFolderWorkflowList", req, cb);
    }
    /**
     * 查询集成任务
     */
    async DescribeIntegrationTask(req, cb) {
        return this.request("DescribeIntegrationTask", req, cb);
    }
    /**
     * 数据集成大屏同步条数统计趋势
     */
    async DescribeIntegrationStatisticsRecordsTrend(req, cb) {
        return this.request("DescribeIntegrationStatisticsRecordsTrend", req, cb);
    }
    /**
     * 数据集成大屏实例状态统计趋势
     */
    async DescribeIntegrationStatisticsInstanceTrend(req, cb) {
        return this.request("DescribeIntegrationStatisticsInstanceTrend", req, cb);
    }
    /**
     * 创建集成节点
     */
    async CreateIntegrationNode(req, cb) {
        return this.request("CreateIntegrationNode", req, cb);
    }
    /**
     * 批量暂停集成任务
     */
    async BatchSuspendIntegrationTasks(req, cb) {
        return this.request("BatchSuspendIntegrationTasks", req, cb);
    }
    /**
     * 日志获取详情页面
     */
    async DescribeInstanceLastLog(req, cb) {
        return this.request("DescribeInstanceLastLog", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
获取实例日志列表
     */
    async DescribeInstanceLogs(req, cb) {
        return this.request("DescribeInstanceLogs", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件
     */
    async RegisterEvent(req, cb) {
        return this.request("RegisterEvent", req, cb);
    }
    /**
     * 提交自定义函数
     */
    async SubmitCustomFunction(req, cb) {
        return this.request("SubmitCustomFunction", req, cb);
    }
    /**
     * 批量继续执行集成实时任务
     */
    async BatchResumeIntegrationTasks(req, cb) {
        return this.request("BatchResumeIntegrationTasks", req, cb);
    }
    /**
     * 重启采集器
     */
    async RestartInLongAgent(req, cb) {
        return this.request("RestartInLongAgent", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
    async SubmitTask(req, cb) {
        return this.request("SubmitTask", req, cb);
    }
    /**
     * 获取数据源信息-数据源分页列表
     */
    async DescribeDataSourceInfoList(req, cb) {
        return this.request("DescribeDataSourceInfoList", req, cb);
    }
    /**
     * 查询函数分类
     */
    async DescribeFunctionKinds(req, cb) {
        return this.request("DescribeFunctionKinds", req, cb);
    }
    /**
     * 查询采集器关联的任务列表
     */
    async DescribeInLongAgentTaskList(req, cb) {
        return this.request("DescribeInLongAgentTaskList", req, cb);
    }
    /**
     * 离线任务实例统计明细
     */
    async DescribeTaskInstanceReportDetail(req, cb) {
        return this.request("DescribeTaskInstanceReportDetail", req, cb);
    }
    /**
     * 暂停集成任务
     */
    async SuspendIntegrationTask(req, cb) {
        return this.request("SuspendIntegrationTask", req, cb);
    }
    /**
     * 获取项目信息
     */
    async DescribeProject(req, cb) {
        return this.request("DescribeProject", req, cb);
    }
    /**
     * 获取kafka的topic信息
     */
    async DescribeKafkaTopicInfo(req, cb) {
        return this.request("DescribeKafkaTopicInfo", req, cb);
    }
    /**
     * 提取数据集成节点字段Schema
     */
    async GetIntegrationNodeColumnSchema(req, cb) {
        return this.request("GetIntegrationNodeColumnSchema", req, cb);
    }
    /**
     * 资源管理需要先将资源上传到cos中，然后调用该接口，将cos资源绑定到wedata
     */
    async CreateOrUpdateResource(req, cb) {
        return this.request("CreateOrUpdateResource", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据层级查找上/下游任务节点
     */
    async DescribeDependTasksNew(req, cb) {
        return this.request("DescribeDependTasksNew", req, cb);
    }
    /**
     * 离线任务实例详情
     */
    async DescribeTaskInstance(req, cb) {
        return this.request("DescribeTaskInstance", req, cb);
    }
    /**
     * 查询实时任务实例节点信息
     */
    async DescribeRealTimeTaskInstanceNodeInfo(req, cb) {
        return this.request("DescribeRealTimeTaskInstanceNodeInfo", req, cb);
    }
    /**
     * 数据集成大屏概览
     */
    async DescribeIntegrationStatistics(req, cb) {
        return this.request("DescribeIntegrationStatistics", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量修改任务责任人
     */
    async BatchModifyOwnersNew(req, cb) {
        return this.request("BatchModifyOwnersNew", req, cb);
    }
    /**
     * 批量停止集成任务
     */
    async BatchStopIntegrationTasks(req, cb) {
        return this.request("BatchStopIntegrationTasks", req, cb);
    }
}
exports.Client = Client;

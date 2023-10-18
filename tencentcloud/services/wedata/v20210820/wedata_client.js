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
     * 查询基线DAG
     */
    async DescribeBaselineAllTaskDag(req, cb) {
        return this.request("DescribeBaselineAllTaskDag", req, cb);
    }
    /**
     * 创建任务告警规则
     */
    async CreateTaskAlarmRegular(req, cb) {
        return this.request("CreateTaskAlarmRegular", req, cb);
    }
    /**
     * 数据集成大屏同步条数统计趋势
     */
    async DescribeIntegrationStatisticsRecordsTrend(req, cb) {
        return this.request("DescribeIntegrationStatisticsRecordsTrend", req, cb);
    }
    /**
     * 删除集成任务
     */
    async DeleteIntegrationTask(req, cb) {
        return this.request("DeleteIntegrationTask", req, cb);
    }
    /**
     * 批量kill实例
     */
    async KillScheduleInstances(req, cb) {
        return this.request("KillScheduleInstances", req, cb);
    }
    /**
     * 开发空间-获取数据开发脚本信息
     */
    async GetFileInfo(req, cb) {
        return this.request("GetFileInfo", req, cb);
    }
    /**
     * 检查规则名称是否重复
     */
    async CheckDuplicateRuleName(req, cb) {
        return this.request("CheckDuplicateRuleName", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改数据源
     */
    async ModifyDataSource(req, cb) {
        return this.request("ModifyDataSource", req, cb);
    }
    /**
     * 创建规则模版
     */
    async CreateRuleTemplate(req, cb) {
        return this.request("CreateRuleTemplate", req, cb);
    }
    /**
     * 实时任务运行指标概览
     */
    async DescribeRealTimeTaskMetricOverview(req, cb) {
        return this.request("DescribeRealTimeTaskMetricOverview", req, cb);
    }
    /**
     * 获取实例列表
     */
    async DescribeScheduleInstances(req, cb) {
        return this.request("DescribeScheduleInstances", req, cb);
    }
    /**
     * 仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
     */
    async BatchStopOpsTasks(req, cb) {
        return this.request("BatchStopOpsTasks", req, cb);
    }
    /**
     * 任务状态周期增长趋势
     */
    async DescribeTaskByCycleReport(req, cb) {
        return this.request("DescribeTaskByCycleReport", req, cb);
    }
    /**
     * 数据质量的概览页面数据监测情况接口
     */
    async DescribeDataCheckStat(req, cb) {
        return this.request("DescribeDataCheckStat", req, cb);
    }
    /**
     * 分页查询规则执行结果列表
     */
    async DescribeRuleExecResultsByPage(req, cb) {
        return this.request("DescribeRuleExecResultsByPage", req, cb);
    }
    /**
     * 获取采集器所在集群的VPC列表
     */
    async DescribeInLongAgentVpcList(req, cb) {
        return this.request("DescribeInLongAgentVpcList", req, cb);
    }
    /**
     * 查询运维画布信息，只需要获取边和节点
     */
    async DescribeWorkflowOpsCanvasInfo(req, cb) {
        return this.request("DescribeWorkflowOpsCanvasInfo", req, cb);
    }
    /**
     * 批量终止集成任务实例
     */
    async BatchKillIntegrationTaskInstances(req, cb) {
        return this.request("BatchKillIntegrationTaskInstances", req, cb);
    }
    /**
     * 更新规则组执行策略
     */
    async ModifyExecStrategy(req, cb) {
        return this.request("ModifyExecStrategy", req, cb);
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
     * 任务运维列表组合条件查询
     */
    async DescribeOperateOpsTasks(req, cb) {
        return this.request("DescribeOperateOpsTasks", req, cb);
    }
    /**
     * 根据周期类型查询所有实例
     */
    async DescribeInstanceByCycle(req, cb) {
        return this.request("DescribeInstanceByCycle", req, cb);
    }
    /**
     * 查询集成节点
     */
    async DescribeIntegrationNode(req, cb) {
        return this.request("DescribeIntegrationNode", req, cb);
    }
    /**
     * 在基线系统内查询单个调度任务实例
     */
    async DescribeScheduleInstance(req, cb) {
        return this.request("DescribeScheduleInstance", req, cb);
    }
    /**
     * 根据周期类型 查询所有任务
     */
    async DescribeTaskByCycle(req, cb) {
        return this.request("DescribeTaskByCycle", req, cb);
    }
    /**
     * 智能运维-批量删除任务
     */
    async BatchDeleteOpsTasks(req, cb) {
        return this.request("BatchDeleteOpsTasks", req, cb);
    }
    /**
     * 更新质量规则接口
     */
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    /**
     * 提交自定义函数
     */
    async SubmitCustomFunction(req, cb) {
        return this.request("SubmitCustomFunction", req, cb);
    }
    /**
     * 规则组执行结果分页查询接口不带鉴权
     */
    async DescribeRuleGroupExecResultsByPageWithoutAuth(req, cb) {
        return this.request("DescribeRuleGroupExecResultsByPageWithoutAuth", req, cb);
    }
    /**
     * 删除编排空间工作流
     */
    async RemoveWorkflowDs(req, cb) {
        return this.request("RemoveWorkflowDs", req, cb);
    }
    /**
     * 获取第三方运行日志
     */
    async DescribeThirdTaskRunLog(req, cb) {
        return this.request("DescribeThirdTaskRunLog", req, cb);
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
     * 提交基线
     */
    async StopBaseline(req, cb) {
        return this.request("StopBaseline", req, cb);
    }
    /**
     * 日志获取详情页面
     */
    async DescribeInstanceLastLog(req, cb) {
        return this.request("DescribeInstanceLastLog", req, cb);
    }
    /**
     * 批量修改任务责任人
     */
    async BatchModifyOpsOwners(req, cb) {
        return this.request("BatchModifyOpsOwners", req, cb);
    }
    /**
     * 创建用户自定义函数
     */
    async CreateCustomFunction(req, cb) {
        return this.request("CreateCustomFunction", req, cb);
    }
    /**
     * 编辑基线
     */
    async EditBaseline(req, cb) {
        return this.request("EditBaseline", req, cb);
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
     * 运维大屏-任务状态分布
     */
    async DescribeSchedulerTaskTypeCnt(req, cb) {
        return this.request("DescribeSchedulerTaskTypeCnt", req, cb);
    }
    /**
     * 删除项目参数
     */
    async DeleteProjectParamDs(req, cb) {
        return this.request("DeleteProjectParamDs", req, cb);
    }
    /**
     * 根据项目id 获取项目下所有工作流列表
     */
    async DescribeWorkflowListByProjectId(req, cb) {
        return this.request("DescribeWorkflowListByProjectId", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建数据源
     */
    async CreateDataSource(req, cb) {
        return this.request("CreateDataSource", req, cb);
    }
    /**
     * 实例运维-获取实例日志列表
     */
    async DescribeOpsInstanceLogList(req, cb) {
        return this.request("DescribeOpsInstanceLogList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
设置任务告警，新建/更新告警信息（最新）
     */
    async SetTaskAlarmNew(req, cb) {
        return this.request("SetTaskAlarmNew", req, cb);
    }
    /**
     * 查看事件实例的消费任务
     */
    async DescribeEventConsumeTasks(req, cb) {
        return this.request("DescribeEventConsumeTasks", req, cb);
    }
    /**
     * 查询基线诊断信息
     */
    async DescribeDiagnosticInfoByBaselineId(req, cb) {
        return this.request("DescribeDiagnosticInfoByBaselineId", req, cb);
    }
    /**
     * 获取离线任务长连接Token
     */
    async DescribeOfflineTaskToken(req, cb) {
        return this.request("DescribeOfflineTaskToken", req, cb);
    }
    /**
     * 删除规则模版
     */
    async DeleteRuleTemplate(req, cb) {
        return this.request("DeleteRuleTemplate", req, cb);
    }
    /**
     * 编排空间-创建文件夹
     */
    async CreateDsFolder(req, cb) {
        return this.request("CreateDsFolder", req, cb);
    }
    /**
     * 更新集成节点
     */
    async ModifyIntegrationNode(req, cb) {
        return this.request("ModifyIntegrationNode", req, cb);
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
     * 获取表列表
     */
    async DescribeRuleTablesByPage(req, cb) {
        return this.request("DescribeRuleTablesByPage", req, cb);
    }
    /**
     * 质量报告-质量评分
     */
    async DescribeQualityScore(req, cb) {
        return this.request("DescribeQualityScore", req, cb);
    }
    /**
     * 文件路径的根目录为 /datastudio/resource，如果要在根目录下创建 aaa 文件夹，FilePath的值应该为 /datastudio/resource，如果根目录下已经创建了 aaa 文件夹，要在 aaa 下创建  bbb 文件夹，FilePath的值应该为 /datastudio/resource/aaa
     */
    async CreateResourcePath(req, cb) {
        return this.request("CreateResourcePath", req, cb);
    }
    /**
     * 数据质量概览页面触发维度分布统计接口
     */
    async DescribeRuleDimStat(req, cb) {
        return this.request("DescribeRuleDimStat", req, cb);
    }
    /**
     * 生成建hive表的sql
     */
    async GenHiveTableDDLSql(req, cb) {
        return this.request("GenHiveTableDDLSql", req, cb);
    }
    /**
     * 分页查询任务运行历史
     */
    async DescribeTaskRunHistory(req, cb) {
        return this.request("DescribeTaskRunHistory", req, cb);
    }
    /**
     * 查看补录计划任务
     */
    async DescribeOpsMakePlanTasks(req, cb) {
        return this.request("DescribeOpsMakePlanTasks", req, cb);
    }
    /**
     * 根据任务Id查找生产态子任务
     */
    async DescribeAllUsedVersionSon(req, cb) {
        return this.request("DescribeAllUsedVersionSon", req, cb);
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
     * 实例强制成功
     */
    async RunForceSucScheduleInstances(req, cb) {
        return this.request("RunForceSucScheduleInstances", req, cb);
    }
    /**
     * 查询目录树
     */
    async DescribeDsFolderTree(req, cb) {
        return this.request("DescribeDsFolderTree", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量终止操作
     */
    async KillInstances(req, cb) {
        return this.request("KillInstances", req, cb);
    }
    /**
     * 编辑基线实例中任务告警状态
     */
    async ModifyBaselineTaskAlarmStatus(req, cb) {
        return this.request("ModifyBaselineTaskAlarmStatus", req, cb);
    }
    /**
     * Runner 规则检测结果上报
     */
    async CommitRuleGroupExecResult(req, cb) {
        return this.request("CommitRuleGroupExecResult", req, cb);
    }
    /**
     * 开发空间-批量删除目录和文件
     */
    async DeleteFilePath(req, cb) {
        return this.request("DeleteFilePath", req, cb);
    }
    /**
     * 任务批量补录，调度状态任务才可以补录；
     */
    async MakeUpOpsTasks(req, cb) {
        return this.request("MakeUpOpsTasks", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交工作流
     */
    async SubmitWorkflow(req, cb) {
        return this.request("SubmitWorkflow", req, cb);
    }
    /**
     * 获取下游任务信息
     */
    async DescribeSuccessorOpsTaskInfos(req, cb) {
        return this.request("DescribeSuccessorOpsTaskInfos", req, cb);
    }
    /**
     * 获取关联子实例
     */
    async DescribeSonInstances(req, cb) {
        return this.request("DescribeSonInstances", req, cb);
    }
    /**
     * 调试运行集成任务
     */
    async DryRunDIOfflineTask(req, cb) {
        return this.request("DryRunDIOfflineTask", req, cb);
    }
    /**
     * 质量报告-查询质量评分
     */
    async DescribeDimensionScore(req, cb) {
        return this.request("DescribeDimensionScore", req, cb);
    }
    /**
     * 查询表绑定执行规则组信息
     */
    async DescribeRuleGroupTable(req, cb) {
        return this.request("DescribeRuleGroupTable", req, cb);
    }
    /**
     * DeleteBaseline
     */
    async DeleteBaseline(req, cb) {
        return this.request("DeleteBaseline", req, cb);
    }
    /**
     * 创建集成任务
     */
    async CreateIntegrationTask(req, cb) {
        return this.request("CreateIntegrationTask", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
    async ModifyTaskScript(req, cb) {
        return this.request("ModifyTaskScript", req, cb);
    }
    /**
     * 提交数据导出任务
     */
    async CommitExportTask(req, cb) {
        return this.request("CommitExportTask", req, cb);
    }
    /**
     * 过滤条件【必要字段】{ruleId}
     */
    async DescribeRuleHistoryByPage(req, cb) {
        return this.request("DescribeRuleHistoryByPage", req, cb);
    }
    /**
     * 按补录计划批量终止实例。
     */
    async KillOpsMakePlanInstances(req, cb) {
        return this.request("KillOpsMakePlanInstances", req, cb);
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
     * 查询集成任务版本节点信息
     */
    async DescribeIntegrationVersionNodesInfo(req, cb) {
        return this.request("DescribeIntegrationVersionNodesInfo", req, cb);
    }
    /**
     * 查询事件类型列表
     */
    async DescribeEventTypes(req, cb) {
        return this.request("DescribeEventTypes", req, cb);
    }
    /**
     * 任务状态统计
     */
    async DescribeSchedulerTaskCntByStatus(req, cb) {
        return this.request("DescribeSchedulerTaskCntByStatus", req, cb);
    }
    /**
     * 更新集成任务
     */
    async ModifyIntegrationTask(req, cb) {
        return this.request("ModifyIntegrationTask", req, cb);
    }
    /**
     * 查询表得分趋势
     */
    async DescribeTableScoreTrend(req, cb) {
        return this.request("DescribeTableScoreTrend", req, cb);
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
     * 分页查询质量监控组
     */
    async DescribeMonitorsByPage(req, cb) {
        return this.request("DescribeMonitorsByPage", req, cb);
    }
    /**
     * 重命名任务（任务编辑）
     */
    async ModifyTaskName(req, cb) {
        return this.request("ModifyTaskName", req, cb);
    }
    /**
     * 查询规则执行结果详情
     */
    async DescribeRuleExecDetail(req, cb) {
        return this.request("DescribeRuleExecDetail", req, cb);
    }
    /**
     * 离线任务重名校验
     */
    async CheckTaskNameExist(req, cb) {
        return this.request("CheckTaskNameExist", req, cb);
    }
    /**
     * 根据补录计划和补录任务获取补录实例列表。
     */
    async DescribeOpsMakePlanInstances(req, cb) {
        return this.request("DescribeOpsMakePlanInstances", req, cb);
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
     * 任务运维搜索 查询生产态任务数据源列表
     */
    async DescribeOperateOpsTaskDatasource(req, cb) {
        return this.request("DescribeOperateOpsTaskDatasource", req, cb);
    }
    /**
     * 通过工作流id，查询工作流详情
     */
    async DescribeWorkflowInfoById(req, cb) {
        return this.request("DescribeWorkflowInfoById", req, cb);
    }
    /**
     * 任务状态趋势
     */
    async DescribeTaskByStatusReport(req, cb) {
        return this.request("DescribeTaskByStatusReport", req, cb);
    }
    /**
     * 注册采集器
     */
    async CreateInLongAgent(req, cb) {
        return this.request("CreateInLongAgent", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
运行任务
     */
    async RunTask(req, cb) {
        return this.request("RunTask", req, cb);
    }
    /**
     * 获取离线任务实例
     */
    async GetOfflineInstanceList(req, cb) {
        return this.request("GetOfflineInstanceList", req, cb);
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量置成功
     */
    async ForceSucInstances(req, cb) {
        return this.request("ForceSucInstances", req, cb);
    }
    /**
     * 查询函数类型
     */
    async DescribeFunctionTypes(req, cb) {
        return this.request("DescribeFunctionTypes", req, cb);
    }
    /**
     * 查询父目录树，用于工作流、任务定位
     */
    async DescribeDsParentFolderTree(req, cb) {
        return this.request("DescribeDsParentFolderTree", req, cb);
    }
    /**
     * 离线任务周期统计明细
     */
    async DescribeTaskReportDetailList(req, cb) {
        return this.request("DescribeTaskReportDetailList", req, cb);
    }
    /**
     * 解锁集成任务
     */
    async UnlockIntegrationTask(req, cb) {
        return this.request("UnlockIntegrationTask", req, cb);
    }
    /**
     * 创建基线
     */
    async CreateBaseline(req, cb) {
        return this.request("CreateBaseline", req, cb);
    }
    /**
     * 实例诊断信息
     */
    async DiagnosePlus(req, cb) {
        return this.request("DiagnosePlus", req, cb);
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
     * 拉取实例列表，join task表一些信息
     */
    async DescribeInstancesInfoWithTaskInfo(req, cb) {
        return this.request("DescribeInstancesInfoWithTaskInfo", req, cb);
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
查询任务脚本
     */
    async DescribeTaskScript(req, cb) {
        return this.request("DescribeTaskScript", req, cb);
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
     * 运维大屏-实例状态分布
     */
    async DescribeSchedulerInstanceStatus(req, cb) {
        return this.request("DescribeSchedulerInstanceStatus", req, cb);
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
     * 资源管理-批量删除资源文件
     */
    async DeleteResourceFiles(req, cb) {
        return this.request("DeleteResourceFiles", req, cb);
    }
    /**
     * 补录任务
     */
    async CreateOpsMakePlan(req, cb) {
        return this.request("CreateOpsMakePlan", req, cb);
    }
    /**
     * 提交基线
     */
    async SubmitBaseline(req, cb) {
        return this.request("SubmitBaseline", req, cb);
    }
    /**
     * 任务运维列表组合条件查询
     */
    async DescribeOperateTasks(req, cb) {
        return this.request("DescribeOperateTasks", req, cb);
    }
    /**
     * 任务运维-批量冻结任务
     */
    async FreezeOpsTasks(req, cb) {
        return this.request("FreezeOpsTasks", req, cb);
    }
    /**
     * 查询规则组详情接口
     */
    async DescribeRuleGroup(req, cb) {
        return this.request("DescribeRuleGroup", req, cb);
    }
    /**
     * 规则执行日志查询
     */
    async DescribeRuleExecLog(req, cb) {
        return this.request("DescribeRuleExecLog", req, cb);
    }
    /**
     * 数据质量概览页面表排行接口
     */
    async DescribeTopTableStat(req, cb) {
        return this.request("DescribeTopTableStat", req, cb);
    }
    /**
     * 获取具体实例相关日志信息
     */
    async DescribeInstanceLogDetail(req, cb) {
        return this.request("DescribeInstanceLogDetail", req, cb);
    }
    /**
     * 任务运维-查询生产态任务数据源类型列表
     */
    async DescribeOperateOpsTaskDatasourceType(req, cb) {
        return this.request("DescribeOperateOpsTaskDatasourceType", req, cb);
    }
    /**
     * 获取数据库信息
     */
    async DescribeDatabaseInfoList(req, cb) {
        return this.request("DescribeDatabaseInfoList", req, cb);
    }
    /**
     * 查询规则模版操作记录
     */
    async DescribeTemplateHistory(req, cb) {
        return this.request("DescribeTemplateHistory", req, cb);
    }
    /**
     * 根据层级查找上/下游任务节点
     */
    async DescribeDependOpsTasks(req, cb) {
        return this.request("DescribeDependOpsTasks", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
    async SubmitTask(req, cb) {
        return this.request("SubmitTask", req, cb);
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
     * 查询质量规则数据源
     */
    async DescribeRuleDataSources(req, cb) {
        return this.request("DescribeRuleDataSources", req, cb);
    }
    /**
     * 创建hive表，返回表名称
     */
    async CreateHiveTableByDDL(req, cb) {
        return this.request("CreateHiveTableByDDL", req, cb);
    }
    /**
     * 编排空间-删除文件夹
     */
    async DeleteDsFolder(req, cb) {
        return this.request("DeleteDsFolder", req, cb);
    }
    /**
     * 实例强制成功
     */
    async ForceSucScheduleInstances(req, cb) {
        return this.request("ForceSucScheduleInstances", req, cb);
    }
    /**
     * 查询基线实例关键任务实例甘特图
     */
    async DescribeBaselineInstanceGantt(req, cb) {
        return this.request("DescribeBaselineInstanceGantt", req, cb);
    }
    /**
     * 智能运维事件查询列表
     */
    async DescribeEvents(req, cb) {
        return this.request("DescribeEvents", req, cb);
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
     * 创建质量规则接口
     */
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    /**
     * 下载日志文件，返回日志URL
     */
    async DescribeInstanceLogFile(req, cb) {
        return this.request("DescribeInstanceLogFile", req, cb);
    }
    /**
     * 编辑规则模版
     */
    async ModifyRuleTemplate(req, cb) {
        return this.request("ModifyRuleTemplate", req, cb);
    }
    /**
     * 根据项目ID和事件名称查看事件详情
     */
    async DescribeEvent(req, cb) {
        return this.request("DescribeEvent", req, cb);
    }
    /**
     * 查询父目录下所有子文件夹+工作流
     */
    async DescribeAllByFolderNew(req, cb) {
        return this.request("DescribeAllByFolderNew", req, cb);
    }
    /**
     * 智能运维-事件列表-所属任务/基线过滤列表
     */
    async DescribeBelongTo(req, cb) {
        return this.request("DescribeBelongTo", req, cb);
    }
    /**
     * 质量报告-查询表质量详情
     */
    async DescribeTableQualityDetails(req, cb) {
        return this.request("DescribeTableQualityDetails", req, cb);
    }
    /**
     * 【过滤条件】
{表名称TableName,支持模糊匹配}       {表负责人TableOwnerName,支持模糊匹配}      {监控方式MonitorTypes，1.未配置 2.关联生产调度 3.离线周期检测,支持多选}  {订阅人ReceiverUin}
【必要字段】
{数据来源DatasourceId}
     */
    async DescribeRuleGroupsByPage(req, cb) {
        return this.request("DescribeRuleGroupsByPage", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除数据源
     */
    async DeleteDataSources(req, cb) {
        return this.request("DeleteDataSources", req, cb);
    }
    /**
     * 智能运维事件详情1
     */
    async DescribeEventDetail(req, cb) {
        return this.request("DescribeEventDetail", req, cb);
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
查询任务具体详情
     */
    async DescribeTaskDetail(req, cb) {
        return this.request("DescribeTaskDetail", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量重跑
     */
    async RerunInstances(req, cb) {
        return this.request("RerunInstances", req, cb);
    }
    /**
     * 无
     */
    async SubmitTaskTestRun(req, cb) {
        return this.request("SubmitTaskTestRun", req, cb);
    }
    /**
     * 批量操作任务列表
     */
    async DescribeBatchOperateTask(req, cb) {
        return this.request("DescribeBatchOperateTask", req, cb);
    }
    /**
     * 删除质量规则接口
     */
    async DeleteRule(req, cb) {
        return this.request("DeleteRule", req, cb);
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
     * 分页查询质量规则
     */
    async DescribeRulesByPage(req, cb) {
        return this.request("DescribeRulesByPage", req, cb);
    }
    /**
     * 启动集成任务
     */
    async StartIntegrationTask(req, cb) {
        return this.request("StartIntegrationTask", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
基于多个工作流进行批量冻结任务操作
     */
    async FreezeTasksByMultiWorkflow(req, cb) {
        return this.request("FreezeTasksByMultiWorkflow", req, cb);
    }
    /**
     * 查询基线实例列表
     */
    async DescribeBaselineInstances(req, cb) {
        return this.request("DescribeBaselineInstances", req, cb);
    }
    /**
     * 获取所有任务类型
     */
    async DescribeAllTaskType(req, cb) {
        return this.request("DescribeAllTaskType", req, cb);
    }
    /**
     * 删除文件
     */
    async DeleteFile(req, cb) {
        return this.request("DeleteFile", req, cb);
    }
    /**
     * 对集成离线任务执行批量补数据操作
     */
    async BatchMakeUpIntegrationTasks(req, cb) {
        return this.request("BatchMakeUpIntegrationTasks", req, cb);
    }
    /**
     * 保存任务信息
     */
    async UploadContent(req, cb) {
        return this.request("UploadContent", req, cb);
    }
    /**
     * 获取关联父实例
     */
    async DescribeFathers(req, cb) {
        return this.request("DescribeFathers", req, cb);
    }
    /**
     * 基线列表
     */
    async DescribeBaselines(req, cb) {
        return this.request("DescribeBaselines", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹下的工作流
     */
    async DescribeFolderWorkflowList(req, cb) {
        return this.request("DescribeFolderWorkflowList", req, cb);
    }
    /**
     * 查询数据来源列表
     */
    async DescribeDataBases(req, cb) {
        return this.request("DescribeDataBases", req, cb);
    }
    /**
     * 任务运维-任务列表 批量运行
     */
    async BatchRunOpsTask(req, cb) {
        return this.request("BatchRunOpsTask", req, cb);
    }
    /**
     * 过滤条件】 {模版名称Name,支持模糊匹配} {模版类型type，1.系统模版 2.自定义模版} {质量检测维度QualityDims, 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性} 【排序字段】 { 引用数排序类型CitationOrderType，根据引用数量排序 ASC DESC}
     */
    async DescribeRuleTemplatesByPage(req, cb) {
        return this.request("DescribeRuleTemplatesByPage", req, cb);
    }
    /**
     * 获取数据标准规则详情
     */
    async DescribeStandardRuleDetailInfoList(req, cb) {
        return this.request("DescribeStandardRuleDetailInfoList", req, cb);
    }
    /**
     * 数据质量概览页面规则运行情况接口
     */
    async DescribeRuleExecStat(req, cb) {
        return this.request("DescribeRuleExecStat", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
    async ModifyTaskLinks(req, cb) {
        return this.request("ModifyTaskLinks", req, cb);
    }
    /**
     * 规则组执行结果分页查询接口
     */
    async DescribeRuleGroupExecResultsByPage(req, cb) {
        return this.request("DescribeRuleGroupExecResultsByPage", req, cb);
    }
    /**
     * 资源管理-删除资源文件
     */
    async DeleteResourceFile(req, cb) {
        return this.request("DeleteResourceFile", req, cb);
    }
    /**
     * 批量创建任务告警规则
     */
    async BatchCreateIntegrationTaskAlarms(req, cb) {
        return this.request("BatchCreateIntegrationTaskAlarms", req, cb);
    }
    /**
     * 拉取dag实例
     */
    async DagInstances(req, cb) {
        return this.request("DagInstances", req, cb);
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
     * 暂停集成任务
     */
    async SuspendIntegrationTask(req, cb) {
        return this.request("SuspendIntegrationTask", req, cb);
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
获取实例日志列表
     */
    async DescribeInstanceLogs(req, cb) {
        return this.request("DescribeInstanceLogs", req, cb);
    }
    /**
     * 更新监控状态
     */
    async ModifyMonitorStatus(req, cb) {
        return this.request("ModifyMonitorStatus", req, cb);
    }
    /**
     * 查询规则组执行策略
     */
    async DescribeExecStrategy(req, cb) {
        return this.request("DescribeExecStrategy", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建工作流
     */
    async CreateWorkflow(req, cb) {
        return this.request("CreateWorkflow", req, cb);
    }
    /**
     * 实例状态周期增长趋势
     */
    async DescribeInstanceByCycleReport(req, cb) {
        return this.request("DescribeInstanceByCycleReport", req, cb);
    }
    /**
     * 查询规则详情
     */
    async DescribeRule(req, cb) {
        return this.request("DescribeRule", req, cb);
    }
    /**
     * 批量启动工作流
     */
    async RunTasksByMultiWorkflow(req, cb) {
        return this.request("RunTasksByMultiWorkflow", req, cb);
    }
    /**
     * 修改工作流责任人
     */
    async UpdateWorkflowOwner(req, cb) {
        return this.request("UpdateWorkflowOwner", req, cb);
    }
    /**
     * 按起止日期统计离线任务的所有实例的运行指标总和
     */
    async DescribeTaskReport(req, cb) {
        return this.request("DescribeTaskReport", req, cb);
    }
    /**
     * 查询试运行实例子实例列表
     */
    async DescribeDrSonInstance(req, cb) {
        return this.request("DescribeDrSonInstance", req, cb);
    }
    /**
     * 列出表血缘信息
     */
    async DescribeTableLineage(req, cb) {
        return this.request("DescribeTableLineage", req, cb);
    }
    /**
     * 根据条件查找事件实例
     */
    async DescribeEventCases(req, cb) {
        return this.request("DescribeEventCases", req, cb);
    }
    /**
     * 查询规则执行导出结果
     */
    async DescribeRuleExecExportResult(req, cb) {
        return this.request("DescribeRuleExecExportResult", req, cb);
    }
    /**
     * 通过工作流Id删除工作流
     */
    async DeleteWorkflowById(req, cb) {
        return this.request("DeleteWorkflowById", req, cb);
    }
    /**
     * 查询质量规则列表
     */
    async DescribeRules(req, cb) {
        return this.request("DescribeRules", req, cb);
    }
    /**
     * 事件是否告警过滤条件
     */
    async DescribeEventIsAlarmTypes(req, cb) {
        return this.request("DescribeEventIsAlarmTypes", req, cb);
    }
    /**
     * 锁定集成任务
     */
    async LockIntegrationTask(req, cb) {
        return this.request("LockIntegrationTask", req, cb);
    }
    /**
     * 质量报告-质量分周期趋势
     */
    async DescribeQualityScoreTrend(req, cb) {
        return this.request("DescribeQualityScoreTrend", req, cb);
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
     * 任务状态趋势
     */
    async DescribeStatisticInstanceStatusTrendOps(req, cb) {
        return this.request("DescribeStatisticInstanceStatusTrendOps", req, cb);
    }
    /**
     * 列出字段血缘信息
     */
    async DescribeColumnLineage(req, cb) {
        return this.request("DescribeColumnLineage", req, cb);
    }
    /**
     * 数据质量概览页面趋势变化接口
     */
    async DescribeTrendStat(req, cb) {
        return this.request("DescribeTrendStat", req, cb);
    }
    /**
     * 获取数据表信息
     */
    async DescribeTableInfoList(req, cb) {
        return this.request("DescribeTableInfoList", req, cb);
    }
    /**
     * 查询规则组订阅信息
     */
    async DescribeRuleGroupSubscription(req, cb) {
        return this.request("DescribeRuleGroupSubscription", req, cb);
    }
    /**
     * 删除任务Ds
     */
    async DeleteTaskDs(req, cb) {
        return this.request("DeleteTaskDs", req, cb);
    }
    /**
     * 更新规则组订阅信息
     */
    async ModifyRuleGroupSubscription(req, cb) {
        return this.request("ModifyRuleGroupSubscription", req, cb);
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
     * 规则执行结果列表查询
     */
    async DescribeRuleExecResults(req, cb) {
        return this.request("DescribeRuleExecResults", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
触发事件
     */
    async TriggerEvent(req, cb) {
        return this.request("TriggerEvent", req, cb);
    }
    /**
     * 暂停工作流下的所有任务
     */
    async FreezeTasksByWorkflowIds(req, cb) {
        return this.request("FreezeTasksByWorkflowIds", req, cb);
    }
    /**
     * 基线列表
     */
    async DescribeBaselineById(req, cb) {
        return this.request("DescribeBaselineById", req, cb);
    }
    /**
     * 资源管理删除资源
     */
    async DeleteResource(req, cb) {
        return this.request("DeleteResource", req, cb);
    }
    /**
     * Ds批量删除任务，仅对任务状态为”已停止“有效；
     */
    async BatchDeleteTasksDs(req, cb) {
        return this.request("BatchDeleteTasksDs", req, cb);
    }
    /**
     * 通过taskIds查询task详情列表
     */
    async DescribeDependTaskLists(req, cb) {
        return this.request("DescribeDependTaskLists", req, cb);
    }
    /**
     * 保存用户自定义函数
     */
    async SaveCustomFunction(req, cb) {
        return this.request("SaveCustomFunction", req, cb);
    }
    /**
     * 获取TKE集群列表
     */
    async DescribeInLongTkeClusterList(req, cb) {
        return this.request("DescribeInLongTkeClusterList", req, cb);
    }
    /**
     * 查询任务告警规则列表
     */
    async DescribeTaskAlarmRegulations(req, cb) {
        return this.request("DescribeTaskAlarmRegulations", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
根据层级查找上/下游任务节点
     */
    async DescribeDependTasksNew(req, cb) {
        return this.request("DescribeDependTasksNew", req, cb);
    }
    /**
     * 数据开发模块-文件夹更新
     */
    async ModifyDsFolder(req, cb) {
        return this.request("ModifyDsFolder", req, cb);
    }
    /**
     * 删除用户自定义函数
     */
    async DeleteCustomFunction(req, cb) {
        return this.request("DeleteCustomFunction", req, cb);
    }
    /**
     * 查询规则模版维度分布情况
     */
    async DescribeTemplateDimCount(req, cb) {
        return this.request("DescribeTemplateDimCount", req, cb);
    }
    /**
     * 查询基线实例DAG
     */
    async DescribeBaselineInstanceDag(req, cb) {
        return this.request("DescribeBaselineInstanceDag", req, cb);
    }
    /**
     * 查询集成任务
     */
    async DescribeIntegrationTask(req, cb) {
        return this.request("DescribeIntegrationTask", req, cb);
    }
    /**
     * 查询工作流任务数
     */
    async DescribeWorkflowTaskCount(req, cb) {
        return this.request("DescribeWorkflowTaskCount", req, cb);
    }
    /**
     * 统计任务实例状态
     */
    async CountOpsInstanceState(req, cb) {
        return this.request("CountOpsInstanceState", req, cb);
    }
    /**
     * 数据集成大屏实例状态统计趋势
     */
    async DescribeIntegrationStatisticsInstanceTrend(req, cb) {
        return this.request("DescribeIntegrationStatisticsInstanceTrend", req, cb);
    }
    /**
     * 查询试运行实例执行内容
     */
    async DescribeDrInstanceScriptContent(req, cb) {
        return this.request("DescribeDrInstanceScriptContent", req, cb);
    }
    /**
     * 查询工作流画布运行起止时间
     */
    async DescribeWorkflowExecuteById(req, cb) {
        return this.request("DescribeWorkflowExecuteById", req, cb);
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
     * 提交规则组运行任务接口
     */
    async CommitRuleGroupTask(req, cb) {
        return this.request("CommitRuleGroupTask", req, cb);
    }
    /**
     * 根据任务id获取下游依赖任务列表
     */
    async DescribeDependOpsTaskList(req, cb) {
        return this.request("DescribeDependOpsTaskList", req, cb);
    }
    /**
     * 获取采集器列表
     */
    async DescribeInLongAgentList(req, cb) {
        return this.request("DescribeInLongAgentList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件
     */
    async RegisterEvent(req, cb) {
        return this.request("RegisterEvent", req, cb);
    }
    /**
     * 根据条件分页查询补录计划
     */
    async DescribeOpsMakePlans(req, cb) {
        return this.request("DescribeOpsMakePlans", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流
     */
    async ModifyWorkflowInfo(req, cb) {
        return this.request("ModifyWorkflowInfo", req, cb);
    }
    /**
     * 离线任务实例运行日志列表
     */
    async DescribeInstanceLogList(req, cb) {
        return this.request("DescribeInstanceLogList", req, cb);
    }
    /**
     * 按补录计划批量重跑/选择补录计划→补录任务→补录实例，点击重跑
     */
    async RerunOpsMakePlanInstances(req, cb) {
        return this.request("RerunOpsMakePlanInstances", req, cb);
    }
    /**
     * 查询工作流画布
     */
    async DescribeWorkflowCanvasInfo(req, cb) {
        return this.request("DescribeWorkflowCanvasInfo", req, cb);
    }
    /**
     * 质量报告-修改维度权限
     */
    async ModifyDimensionWeight(req, cb) {
        return this.request("ModifyDimensionWeight", req, cb);
    }
    /**
     * 查找全部的文件夹
     */
    async FindAllFolder(req, cb) {
        return this.request("FindAllFolder", req, cb);
    }
    /**
     * 修改任务告警规则
     */
    async ModifyTaskAlarmRegular(req, cb) {
        return this.request("ModifyTaskAlarmRegular", req, cb);
    }
    /**
     * 检查规则模板名称是否重复
     */
    async CheckDuplicateTemplateName(req, cb) {
        return this.request("CheckDuplicateTemplateName", req, cb);
    }
    /**
     * 实例批量重跑
     */
    async RunRerunScheduleInstances(req, cb) {
        return this.request("RunRerunScheduleInstances", req, cb);
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
     * 查询模板详情
     */
    async DescribeRuleTemplate(req, cb) {
        return this.request("DescribeRuleTemplate", req, cb);
    }
    /**
     * 实例批量重跑
     */
    async RerunScheduleInstances(req, cb) {
        return this.request("RerunScheduleInstances", req, cb);
    }
    /**
     * 即席分析提交SQL任务
     */
    async SubmitSqlTask(req, cb) {
        return this.request("SubmitSqlTask", req, cb);
    }
    /**
     * 数据质量获取生产调度任务列表
     */
    async DescribeProdTasks(req, cb) {
        return this.request("DescribeProdTasks", req, cb);
    }
    /**
     * 数据质量，查询调度任务的实例列表
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
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
     * 查询规则执行历史， 最近30条
     */
    async DescribeRuleExecHistory(req, cb) {
        return this.request("DescribeRuleExecHistory", req, cb);
    }
    /**
     * 查询Inlong manager日志
     */
    async TaskLog(req, cb) {
        return this.request("TaskLog", req, cb);
    }
    /**
     * 查询规则模版列表
     */
    async DescribeRuleTemplates(req, cb) {
        return this.request("DescribeRuleTemplates", req, cb);
    }
    /**
     * 离线任务实例统计明细
     */
    async DescribeTaskInstanceReportDetail(req, cb) {
        return this.request("DescribeTaskInstanceReportDetail", req, cb);
    }
    /**
     * 查询规则组数据对象列表
     */
    async DescribeDataObjects(req, cb) {
        return this.request("DescribeDataObjects", req, cb);
    }
    /**
     * 获取离线任务实例列表(新)
     */
    async GetOfflineDIInstanceList(req, cb) {
        return this.request("GetOfflineDIInstanceList", req, cb);
    }
    /**
     * 编辑基线告警状态
     */
    async ModifyBaselineAlarmStatus(req, cb) {
        return this.request("ModifyBaselineAlarmStatus", req, cb);
    }
    /**
     * 获取项目信息
     */
    async DescribeProject(req, cb) {
        return this.request("DescribeProject", req, cb);
    }
    /**
     * 没用到

获取kafka的topic信息
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
     * 查询用户生产工作流列表
     */
    async DescribeOpsWorkflows(req, cb) {
        return this.request("DescribeOpsWorkflows", req, cb);
    }
    /**
     * 资源管理需要先将资源上传到cos中，然后调用该接口，将cos资源绑定到wedata
     */
    async CreateOrUpdateResource(req, cb) {
        return this.request("CreateOrUpdateResource", req, cb);
    }
    /**
     * 批量重跑集成任务实例
     */
    async BatchRerunIntegrationTaskInstances(req, cb) {
        return this.request("BatchRerunIntegrationTaskInstances", req, cb);
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
任务批量补录，调度状态任务才可以补录；



     */
    async MakeUpTasksNew(req, cb) {
        return this.request("MakeUpTasksNew", req, cb);
    }
    /**
     * 工作流补数据
     */
    async MakeUpTasksByWorkflow(req, cb) {
        return this.request("MakeUpTasksByWorkflow", req, cb);
    }
    /**
     * 批量停止工作流
     */
    async BatchStopWorkflowsByIds(req, cb) {
        return this.request("BatchStopWorkflowsByIds", req, cb);
    }
    /**
     * 分页查询试运行实例列表
     */
    async DescribeDrInstancePage(req, cb) {
        return this.request("DescribeDrInstancePage", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量修改任务责任人
     */
    async BatchModifyOwnersNew(req, cb) {
        return this.request("BatchModifyOwnersNew", req, cb);
    }
    /**
     * 运维大屏-实例运行时长排行
     */
    async DescribeSchedulerRunTimeInstanceCntByStatus(req, cb) {
        return this.request("DescribeSchedulerRunTimeInstanceCntByStatus", req, cb);
    }
    /**
     * 批量停止集成任务
     */
    async BatchStopIntegrationTasks(req, cb) {
        return this.request("BatchStopIntegrationTasks", req, cb);
    }
}
exports.Client = Client;

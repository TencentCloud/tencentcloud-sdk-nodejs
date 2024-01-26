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
     * 获取SQL执行结果
     */
    async DescribeSqlTaskResult(req, cb) {
        return this.request("DescribeSqlTaskResult", req, cb);
    }
    /**
     * 资源管理-拉取资源目录树
     */
    async GetResourcePathTree(req, cb) {
        return this.request("GetResourcePathTree", req, cb);
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
     * 分页查询质量监控组
     */
    async DescribeMonitorsByPage(req, cb) {
        return this.request("DescribeMonitorsByPage", req, cb);
    }
    /**
     * 更新规则组执行策略
     */
    async ModifyExecStrategy(req, cb) {
        return this.request("ModifyExecStrategy", req, cb);
    }
    /**
     * 异步批量创建任务版本
     */
    async BatchCreateTaskVersionAsync(req, cb) {
        return this.request("BatchCreateTaskVersionAsync", req, cb);
    }
    /**
     * 查询回收站任务列表
     */
    async DescribeRecycleTaskList(req, cb) {
        return this.request("DescribeRecycleTaskList", req, cb);
    }
    /**
     * 获取全局工作流信息，用于跨工作流节点拉取租户所有工作流列表
     */
    async DescribeGlobalWorkflowDs(req, cb) {
        return this.request("DescribeGlobalWorkflowDs", req, cb);
    }
    /**
     * 任务运维列表组合条件查询
     */
    async DescribeOperateOpsTasks(req, cb) {
        return this.request("DescribeOperateOpsTasks", req, cb);
    }
    /**
     * 查询集成节点
     */
    async DescribeIntegrationNode(req, cb) {
        return this.request("DescribeIntegrationNode", req, cb);
    }
    /**
     * 下载SQL执行结果
     */
    async DownloadSqlResult(req, cb) {
        return this.request("DownloadSqlResult", req, cb);
    }
    /**
     * 批量修改资源组
     */
    async UpdateBatchTaskResourceGroup(req, cb) {
        return this.request("UpdateBatchTaskResourceGroup", req, cb);
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
     * 查询事件监听者信息
     */
    async DescribeDsEventListener(req, cb) {
        return this.request("DescribeDsEventListener", req, cb);
    }
    /**
     * 获取协同编辑资源锁
     */
    async DescribeLock(req, cb) {
        return this.request("DescribeLock", req, cb);
    }
    /**
     * 创建用户自定义函数
     */
    async CreateCustomFunction(req, cb) {
        return this.request("CreateCustomFunction", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
仅对任务状态为”调度中“和”已暂停“有效，对所选任务的任务实例进行终止，并停止调度
     */
    async BatchStopTasksNew(req, cb) {
        return this.request("BatchStopTasksNew", req, cb);
    }
    /**
     * 批量提交etl测试运行任务
     */
    async SubmitBatchTestRun(req, cb) {
        return this.request("SubmitBatchTestRun", req, cb);
    }
    /**
     * 事件管理-导入事件
     */
    async ImportDsEvent(req, cb) {
        return this.request("ImportDsEvent", req, cb);
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
     * 更新任务Ds
     */
    async UpdateTaskDs(req, cb) {
        return this.request("UpdateTaskDs", req, cb);
    }
    /**
     * 编排空间-根据项目名称和任务名称模糊查询所有任务
     */
    async FindFuzzyTasksDs(req, cb) {
        return this.request("FindFuzzyTasksDs", req, cb);
    }
    /**
     * 全局搜索根据条件搜索代码
     */
    async DescribeCodeSearchInfoV2(req, cb) {
        return this.request("DescribeCodeSearchInfoV2", req, cb);
    }
    /**
     * 更新集成任务
     */
    async ModifyIntegrationTask(req, cb) {
        return this.request("ModifyIntegrationTask", req, cb);
    }
    /**
     * 质量报告-质量评分
     */
    async DescribeQualityScore(req, cb) {
        return this.request("DescribeQualityScore", req, cb);
    }
    /**
     * 获取cos token
     */
    async GetCosToken(req, cb) {
        return this.request("GetCosToken", req, cb);
    }
    /**
     * 获取指定任务产出登记列表
     */
    async DescribeTaskOutputRegistries(req, cb) {
        return this.request("DescribeTaskOutputRegistries", req, cb);
    }
    /**
     * 查询全量函数
     */
    async DescribeOrganizationalFunctions(req, cb) {
        return this.request("DescribeOrganizationalFunctions", req, cb);
    }
    /**
     * 查询项目全局参数
     */
    async DescribeProjectParamDs(req, cb) {
        return this.request("DescribeProjectParamDs", req, cb);
    }
    /**
     * 更新工作流
     */
    async RenewWorkflowDs(req, cb) {
        return this.request("RenewWorkflowDs", req, cb);
    }
    /**
     * 获取审批分类列表
     */
    async DescribeApproveTypeList(req, cb) {
        return this.request("DescribeApproveTypeList", req, cb);
    }
    /**
     * 查询模板详情
     */
    async DescribeRuleTemplate(req, cb) {
        return this.request("DescribeRuleTemplate", req, cb);
    }
    /**
     * 注册事件发布者
     */
    async RegisterDsEventPublisher(req, cb) {
        return this.request("RegisterDsEventPublisher", req, cb);
    }
    /**
     * 任务批量补录，调度状态任务才可以补录；
     */
    async MakeUpOpsTasks(req, cb) {
        return this.request("MakeUpOpsTasks", req, cb);
    }
    /**
     * 获取数据同步任务类型
     */
    async DescribeEtlTaskType(req, cb) {
        return this.request("DescribeEtlTaskType", req, cb);
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
设置任务告警，新建/更新告警信息（最新）
     */
    async SetTaskAlarmNew(req, cb) {
        return this.request("SetTaskAlarmNew", req, cb);
    }
    /**
     * 查询事件类型列表
     */
    async DescribeEventTypes(req, cb) {
        return this.request("DescribeEventTypes", req, cb);
    }
    /**
     * 工作流任务信息查询-项目克隆使用
     */
    async DescribeWorkflowTasksForProjectClone(req, cb) {
        return this.request("DescribeWorkflowTasksForProjectClone", req, cb);
    }
    /**
     * 重命名任务（任务编辑）
     */
    async ModifyTaskName(req, cb) {
        return this.request("ModifyTaskName", req, cb);
    }
    /**
     * 即席分析提交数据集成任务
     */
    async SubmitIntegrationTask(req, cb) {
        return this.request("SubmitIntegrationTask", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源详情
     */
    async DescribeDatasource(req, cb) {
        return this.request("DescribeDatasource", req, cb);
    }
    /**
     * 更新采集器
     */
    async UpdateInLongAgent(req, cb) {
        return this.request("UpdateInLongAgent", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新工作流调度
     */
    async ModifyWorkflowSchedule(req, cb) {
        return this.request("ModifyWorkflowSchedule", req, cb);
    }
    /**
     * 上游依赖自动解析
     */
    async AnalyzeDependentTasks(req, cb) {
        return this.request("AnalyzeDependentTasks", req, cb);
    }
    /**
     * 更新质量规则接口
     */
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    /**
     * 创建基线
     */
    async CreateBaseline(req, cb) {
        return this.request("CreateBaseline", req, cb);
    }
    /**
     * 查询项目全局参数
     */
    async DescribeProjectParamDsPage(req, cb) {
        return this.request("DescribeProjectParamDsPage", req, cb);
    }
    /**
     * 对比任务版本
     */
    async CompareDsTaskVersionInfo(req, cb) {
        return this.request("CompareDsTaskVersionInfo", req, cb);
    }
    /**
     * 查询集成任务列表
     */
    async DescribeIntegrationTasks(req, cb) {
        return this.request("DescribeIntegrationTasks", req, cb);
    }
    /**
     * 下载SQL执行结果
     */
    async DownloadNewSqlResult(req, cb) {
        return this.request("DownloadNewSqlResult", req, cb);
    }
    /**
     * 查询依赖工作流信息查询-项目克隆使用
     */
    async DescribeDependencyWorkflowForProjectClone(req, cb) {
        return this.request("DescribeDependencyWorkflowForProjectClone", req, cb);
    }
    /**
     * 批量更新集成任务（暂时仅支持批量更新责任人）
     */
    async BatchUpdateIntegrationTasks(req, cb) {
        return this.request("BatchUpdateIntegrationTasks", req, cb);
    }
    /**
     * 批量修改责任人
     */
    async UpdateBatchTaskInCharge(req, cb) {
        return this.request("UpdateBatchTaskInCharge", req, cb);
    }
    /**
     * 批量更新工作流下任务责任人
     */
    async RenewWorkflowOwnerDs(req, cb) {
        return this.request("RenewWorkflowOwnerDs", req, cb);
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
     * 根据层级查找上/下游任务节点
     */
    async DescribeDependOpsTasks(req, cb) {
        return this.request("DescribeDependOpsTasks", req, cb);
    }
    /**
     * 规则组执行结果分页查询接口不带鉴权
     */
    async DescribeRuleGroupExecResultsByPageWithoutAuth(req, cb) {
        return this.request("DescribeRuleGroupExecResultsByPageWithoutAuth", req, cb);
    }
    /**
     * 删除事件监听者
     */
    async DeleteDsEventListener(req, cb) {
        return this.request("DeleteDsEventListener", req, cb);
    }
    /**
     * 获取工作流运行任务下游Ds
     */
    async GetRunSonListDs(req, cb) {
        return this.request("GetRunSonListDs", req, cb);
    }
    /**
     * 智能运维事件查询列表
     */
    async DescribeEvents(req, cb) {
        return this.request("DescribeEvents", req, cb);
    }
    /**
     * 即席分析终止任务接口
     */
    async StopAdhocTask(req, cb) {
        return this.request("StopAdhocTask", req, cb);
    }
    /**
     * 根据项目ID和事件名称查看事件详情
     */
    async DescribeEvent(req, cb) {
        return this.request("DescribeEvent", req, cb);
    }
    /**
     * 查询表得分趋势
     */
    async DescribeTableScoreTrend(req, cb) {
        return this.request("DescribeTableScoreTrend", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除数据源
     */
    async DeleteDataSources(req, cb) {
        return this.request("DeleteDataSources", req, cb);
    }
    /**
     * 获取调试任务实例状态信息
     */
    async GetTestRunTaskInstancesStatusInfo(req, cb) {
        return this.request("GetTestRunTaskInstancesStatusInfo", req, cb);
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
     * 事件是否告警过滤条件
     */
    async DescribeEventIsAlarmTypes(req, cb) {
        return this.request("DescribeEventIsAlarmTypes", req, cb);
    }
    /**
     * 查找全部的文件夹
     */
    async FindAllFolder(req, cb) {
        return this.request("FindAllFolder", req, cb);
    }
    /**
     * 批量导入文件
     */
    async ImportFiles(req, cb) {
        return this.request("ImportFiles", req, cb);
    }
    /**
     * 查询数据来源列表
     */
    async DescribeDataBases(req, cb) {
        return this.request("DescribeDataBases", req, cb);
    }
    /**
     * 获取任务最新版本
     */
    async DescribeDsLatestTaskVersionInfo(req, cb) {
        return this.request("DescribeDsLatestTaskVersionInfo", req, cb);
    }
    /**
     * 查询规则详情
     */
    async DescribeRule(req, cb) {
        return this.request("DescribeRule", req, cb);
    }
    /**
     * 数据质量概览页面规则运行情况接口
     */
    async DescribeRuleExecStat(req, cb) {
        return this.request("DescribeRuleExecStat", req, cb);
    }
    /**
     * 删除任务告警规则
     */
    async DeleteTaskAlarmRegular(req, cb) {
        return this.request("DeleteTaskAlarmRegular", req, cb);
    }
    /**
     * 资源管理-删除资源文件
     */
    async DeleteResourceFile(req, cb) {
        return this.request("DeleteResourceFile", req, cb);
    }
    /**
     * 过滤条件】 {模版名称Name,支持模糊匹配} {模版类型type，1.系统模版 2.自定义模版} {质量检测维度QualityDims, 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性} 【排序字段】 { 引用数排序类型CitationOrderType，根据引用数量排序 ASC DESC}
     */
    async DescribeRuleTemplatesByPage(req, cb) {
        return this.request("DescribeRuleTemplatesByPage", req, cb);
    }
    /**
     * 拉取dag实例
     */
    async DagInstances(req, cb) {
        return this.request("DagInstances", req, cb);
    }
    /**
     * 事件管理-查询事件关联任务
     */
    async DescribeEventListenerTask(req, cb) {
        return this.request("DescribeEventListenerTask", req, cb);
    }
    /**
     * 保存高级运行用户自定义参数
     */
    async UploadAdvanceRunParams(req, cb) {
        return this.request("UploadAdvanceRunParams", req, cb);
    }
    /**
     * 查询规则组执行策略
     */
    async DescribeExecStrategy(req, cb) {
        return this.request("DescribeExecStrategy", req, cb);
    }
    /**
     * 实例状态周期增长趋势
     */
    async DescribeInstanceByCycleReport(req, cb) {
        return this.request("DescribeInstanceByCycleReport", req, cb);
    }
    /**
     * 获取数据表导入状态
     */
    async DescribeDataTableImportProgress(req, cb) {
        return this.request("DescribeDataTableImportProgress", req, cb);
    }
    /**
     * 创建工作流
     */
    async CreateWorkflowDs(req, cb) {
        return this.request("CreateWorkflowDs", req, cb);
    }
    /**
     * 查询基线实例DAG
     */
    async DescribeBaselineInstanceDag(req, cb) {
        return this.request("DescribeBaselineInstanceDag", req, cb);
    }
    /**
     * 查询任务父依赖
     */
    async DescribeParentTask(req, cb) {
        return this.request("DescribeParentTask", req, cb);
    }
    /**
     * 列出字段血缘信息
     */
    async DescribeColumnLineage(req, cb) {
        return this.request("DescribeColumnLineage", req, cb);
    }
    /**
     * 复制任务Ds
     */
    async CopyTaskDs(req, cb) {
        return this.request("CopyTaskDs", req, cb);
    }
    /**
     * 规则组执行结果分页查询接口
     */
    async DescribeRuleGroupExecResultsByPage(req, cb) {
        return this.request("DescribeRuleGroupExecResultsByPage", req, cb);
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
     * 获取工作流调度信息
     */
    async DescribeWorkflowSchedulerInfoDs(req, cb) {
        return this.request("DescribeWorkflowSchedulerInfoDs", req, cb);
    }
    /**
     * 更新任务Ds
     */
    async ModifyTaskInfoDs(req, cb) {
        return this.request("ModifyTaskInfoDs", req, cb);
    }
    /**
     * 数据集成大屏同步条数统计趋势
     */
    async DescribeIntegrationStatisticsRecordsTrend(req, cb) {
        return this.request("DescribeIntegrationStatisticsRecordsTrend", req, cb);
    }
    /**
     * 智能运维-批量删除任务
     */
    async BatchDeleteOpsTasks(req, cb) {
        return this.request("BatchDeleteOpsTasks", req, cb);
    }
    /**
     * 提交规则组运行任务接口
     */
    async CommitRuleGroupTask(req, cb) {
        return this.request("CommitRuleGroupTask", req, cb);
    }
    /**
     * 根据条件分页查询补录计划
     */
    async DescribeOpsMakePlans(req, cb) {
        return this.request("DescribeOpsMakePlans", req, cb);
    }
    /**
     * 检查规则模板名称是否重复
     */
    async CheckDuplicateTemplateName(req, cb) {
        return this.request("CheckDuplicateTemplateName", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
提交任务
     */
    async SubmitTask(req, cb) {
        return this.request("SubmitTask", req, cb);
    }
    /**
     * 批量保存任务位置
     */
    async SavePositionsDs(req, cb) {
        return this.request("SavePositionsDs", req, cb);
    }
    /**
     * 获取数据源信息-数据源分页列表
     */
    async DescribeDataSourceInfoList(req, cb) {
        return this.request("DescribeDataSourceInfoList", req, cb);
    }
    /**
     * 查询任务具体详情Ds
     */
    async DescribeTaskDetailDs(req, cb) {
        return this.request("DescribeTaskDetailDs", req, cb);
    }
    /**
     * 更新规则组订阅信息
     */
    async ModifyRuleGroupSubscription(req, cb) {
        return this.request("ModifyRuleGroupSubscription", req, cb);
    }
    /**
     * 锁定集成任务
     */
    async LockIntegrationTask(req, cb) {
        return this.request("LockIntegrationTask", req, cb);
    }
    /**
     * RenameTaskDs
     */
    async RenameTaskDs(req, cb) {
        return this.request("RenameTaskDs", req, cb);
    }
    /**
     * 【项目克隆任务模式】依赖任务信息查询
     */
    async DescribeDependencyTasksForProjectClone(req, cb) {
        return this.request("DescribeDependencyTasksForProjectClone", req, cb);
    }
    /**
     * 资源管理-判断资源文件是否存在
     */
    async JudgeResourceFile(req, cb) {
        return this.request("JudgeResourceFile", req, cb);
    }
    /**
     * 数据集成大屏概览
     */
    async DescribeIntegrationStatistics(req, cb) {
        return this.request("DescribeIntegrationStatistics", req, cb);
    }
    /**
     * 数据质量概览页面趋势变化接口
     */
    async DescribeTrendStat(req, cb) {
        return this.request("DescribeTrendStat", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量修改任务责任人
     */
    async BatchModifyOwnersNew(req, cb) {
        return this.request("BatchModifyOwnersNew", req, cb);
    }
    /**
     * 批量拉取下游依赖的任务列表Ds
     */
    async FindDependTaskListsDs(req, cb) {
        return this.request("FindDependTaskListsDs", req, cb);
    }
    /**
     * 查询可导入的集成任务
     */
    async DescribeImportableOfflineTask(req, cb) {
        return this.request("DescribeImportableOfflineTask", req, cb);
    }
    /**
     * 停止试运行任务（多个）
     */
    async KillTasksTestRun(req, cb) {
        return this.request("KillTasksTestRun", req, cb);
    }
    /**
     * 统计任务实例状态
     */
    async CountOpsInstanceState(req, cb) {
        return this.request("CountOpsInstanceState", req, cb);
    }
    /**
     * 检查规则名称是否重复
     */
    async CheckDuplicateRuleName(req, cb) {
        return this.request("CheckDuplicateRuleName", req, cb);
    }
    /**
     * 删除事件发布者
     */
    async DeleteDsEventPublisher(req, cb) {
        return this.request("DeleteDsEventPublisher", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除文件夹
     */
    async DeleteFolder(req, cb) {
        return this.request("DeleteFolder", req, cb);
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
任务批量补录，调度状态任务才可以补录；



     */
    async MakeUpTasksNew(req, cb) {
        return this.request("MakeUpTasksNew", req, cb);
    }
    /**
     * 获取工作流画布信息
     */
    async DescribeProdWorkflowCanvasInfoDs(req, cb) {
        return this.request("DescribeProdWorkflowCanvasInfoDs", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量终止操作
     */
    async KillInstances(req, cb) {
        return this.request("KillInstances", req, cb);
    }
    /**
     * 终止etl测试运行任务
     */
    async StopTestRun(req, cb) {
        return this.request("StopTestRun", req, cb);
    }
    /**
     * 创建hive表，返回表名称
     */
    async CreateHiveTableByDDL(req, cb) {
        return this.request("CreateHiveTableByDDL", req, cb);
    }
    /**
     * 建hive表
     */
    async CreateHiveTable(req, cb) {
        return this.request("CreateHiveTable", req, cb);
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
     * 获取批量操作错误日志
     */
    async GetBatchDetailErrorLog(req, cb) {
        return this.request("GetBatchDetailErrorLog", req, cb);
    }
    /**
     * 元数据模型-字段基础信息查询接口
     */
    async DescribeFieldBasicInfo(req, cb) {
        return this.request("DescribeFieldBasicInfo", req, cb);
    }
    /**
     * 工作流版本提交
     */
    async CommitWorkflow(req, cb) {
        return this.request("CommitWorkflow", req, cb);
    }
    /**
     * 查询父目录树，用于工作流、任务定位
     */
    async DescribeDsParentFolderTree(req, cb) {
        return this.request("DescribeDsParentFolderTree", req, cb);
    }
    /**
     * 工作流导入（ZIP）
     */
    async ImportWorkflowZip(req, cb) {
        return this.request("ImportWorkflowZip", req, cb);
    }
    /**
     * 重命名文件
     */
    async RenameFile(req, cb) {
        return this.request("RenameFile", req, cb);
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
     * 离线任务实例运行日志列表
     */
    async DescribeInstanceLogList(req, cb) {
        return this.request("DescribeInstanceLogList", req, cb);
    }
    /**
     * 创建任务版本
     */
    async CreateTaskVersionDs(req, cb) {
        return this.request("CreateTaskVersionDs", req, cb);
    }
    /**
     * 批量修改任务责任人
     */
    async BatchModifyOpsOwners(req, cb) {
        return this.request("BatchModifyOpsOwners", req, cb);
    }
    /**
     * 设置任务输入参数
     */
    async CreateTaskInParamDs(req, cb) {
        return this.request("CreateTaskInParamDs", req, cb);
    }
    /**
     * 基于任务类型获取任务信息Ds
     */
    async DescribeInfoTransByTypeIdDs(req, cb) {
        return this.request("DescribeInfoTransByTypeIdDs", req, cb);
    }
    /**
     * 获取脚本导出任务类型
     */
    async DescribeScriptsImportTaskType(req, cb) {
        return this.request("DescribeScriptsImportTaskType", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
获取实例日志列表
     */
    async DescribeInstanceLogs(req, cb) {
        return this.request("DescribeInstanceLogs", req, cb);
    }
    /**
     * 查询基线诊断信息
     */
    async DescribeDiagnosticInfoByBaselineId(req, cb) {
        return this.request("DescribeDiagnosticInfoByBaselineId", req, cb);
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
     * 抢占锁定集成任务
     */
    async RobAndLockIntegrationTask(req, cb) {
        return this.request("RobAndLockIntegrationTask", req, cb);
    }
    /**
     * 文件路径的根目录为 /datastudio/resource，如果要在根目录下创建 aaa 文件夹，FilePath的值应该为 /datastudio/resource，如果根目录下已经创建了 aaa 文件夹，要在 aaa 下创建  bbb 文件夹，FilePath的值应该为 /datastudio/resource/aaa
     */
    async CreateResourcePath(req, cb) {
        return this.request("CreateResourcePath", req, cb);
    }
    /**
     * 协同编辑资源锁心跳
     */
    async HeartBeat(req, cb) {
        return this.request("HeartBeat", req, cb);
    }
    /**
     * 获取数据开发任务类型
     */
    async DescribeDataDevelopTaskType(req, cb) {
        return this.request("DescribeDataDevelopTaskType", req, cb);
    }
    /**
     * 根据任务Id查找生产态子任务
     */
    async DescribeAllUsedVersionSon(req, cb) {
        return this.request("DescribeAllUsedVersionSon", req, cb);
    }
    /**
     * 删除采集器
     */
    async DeleteInLongAgent(req, cb) {
        return this.request("DeleteInLongAgent", req, cb);
    }
    /**
     * 资源管理-删除资源目录
     */
    async DeleteResourcePath(req, cb) {
        return this.request("DeleteResourcePath", req, cb);
    }
    /**
     * 查询目录树
     */
    async DescribeDsFolderTree(req, cb) {
        return this.request("DescribeDsFolderTree", req, cb);
    }
    /**
     * 无
     */
    async SubmitTaskTestRun(req, cb) {
        return this.request("SubmitTaskTestRun", req, cb);
    }
    /**
     * 开发空间-批量删除目录和文件
     */
    async DeleteFilePath(req, cb) {
        return this.request("DeleteFilePath", req, cb);
    }
    /**
     * 质量报告-查询质量评分
     */
    async DescribeDimensionScore(req, cb) {
        return this.request("DescribeDimensionScore", req, cb);
    }
    /**
     * DeleteBaseline
     */
    async DeleteBaseline(req, cb) {
        return this.request("DeleteBaseline", req, cb);
    }
    /**
     * 运维大屏-实例运行时长排行
     */
    async DescribeSchedulerRunTimeInstanceCntByStatus(req, cb) {
        return this.request("DescribeSchedulerRunTimeInstanceCntByStatus", req, cb);
    }
    /**
     * 查询工作流全局参数
     */
    async DescribeWorkflowParamDs(req, cb) {
        return this.request("DescribeWorkflowParamDs", req, cb);
    }
    /**
     * 数据集成大屏任务状态分布统计
     */
    async DescribeIntegrationStatisticsTaskStatus(req, cb) {
        return this.request("DescribeIntegrationStatisticsTaskStatus", req, cb);
    }
    /**
     * 资源管理-重命名资源目录
     */
    async RenameResourcePath(req, cb) {
        return this.request("RenameResourcePath", req, cb);
    }
    /**
     * 批量运行集成任务
     */
    async BatchStartIntegrationTasks(req, cb) {
        return this.request("BatchStartIntegrationTasks", req, cb);
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
     * 查询事件发布者列表
     */
    async DescribeDsEventPublisherList(req, cb) {
        return this.request("DescribeDsEventPublisherList", req, cb);
    }
    /**
     * 任务状态统计
     */
    async DescribeSchedulerTaskCntByStatus(req, cb) {
        return this.request("DescribeSchedulerTaskCntByStatus", req, cb);
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
     * 批量更新调度周期设置
     */
    async UpdateBatchTaskSchedule(req, cb) {
        return this.request("UpdateBatchTaskSchedule", req, cb);
    }
    /**
     * 查询函数类型
     */
    async DescribeFunctionTypes(req, cb) {
        return this.request("DescribeFunctionTypes", req, cb);
    }
    /**
     * 查询子任务信息Ds
     */
    async DescribeChildrenDs(req, cb) {
        return this.request("DescribeChildrenDs", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量重跑
     */
    async RerunInstances(req, cb) {
        return this.request("RerunInstances", req, cb);
    }
    /**
     * 获取实例列表
     */
    async DescribeInstanceList(req, cb) {
        return this.request("DescribeInstanceList", req, cb);
    }
    /**
     * 分页查询任务运行历史
     */
    async DescribeTaskRunHistory(req, cb) {
        return this.request("DescribeTaskRunHistory", req, cb);
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
     * 资源管理-批量删除资源文件
     */
    async DeleteResourceFiles(req, cb) {
        return this.request("DeleteResourceFiles", req, cb);
    }
    /**
     * 任务运维列表组合条件查询
     */
    async DescribeOperateTasks(req, cb) {
        return this.request("DescribeOperateTasks", req, cb);
    }
    /**
     * 查询开发空间版本列表
     */
    async DescribeFileVersions(req, cb) {
        return this.request("DescribeFileVersions", req, cb);
    }
    /**
     * 查询父任务数据源信息Ds
     */
    async DescribeFatherDatasourceInfoDs(req, cb) {
        return this.request("DescribeFatherDatasourceInfoDs", req, cb);
    }
    /**
     * 查询最近5条代码搜索审计日志
     */
    async DescribeCodeSearchAuditInfo(req, cb) {
        return this.request("DescribeCodeSearchAuditInfo", req, cb);
    }
    /**
     * 根据任务ID获取任务监听事件
     */
    async DescribeEventListenerByTaskId(req, cb) {
        return this.request("DescribeEventListenerByTaskId", req, cb);
    }
    /**
     * 批量创建登记项
     */
    async CreateTaskOutputRegistries(req, cb) {
        return this.request("CreateTaskOutputRegistries", req, cb);
    }
    /**
     * 查询基线实例关键任务实例甘特图
     */
    async DescribeBaselineInstanceGantt(req, cb) {
        return this.request("DescribeBaselineInstanceGantt", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量冻结任务
     */
    async FreezeTasks(req, cb) {
        return this.request("FreezeTasks", req, cb);
    }
    /**
     * 编辑基线
     */
    async EditBaseline(req, cb) {
        return this.request("EditBaseline", req, cb);
    }
    /**
     * 删除任务输入参数
     */
    async DeleteTaskInParamDs(req, cb) {
        return this.request("DeleteTaskInParamDs", req, cb);
    }
    /**
     * 代码搜索结果的统计信息
     */
    async DescribeCodeSearchCount(req, cb) {
        return this.request("DescribeCodeSearchCount", req, cb);
    }
    /**
     * 导入项目参数
     */
    async ImportProjectParamDs(req, cb) {
        return this.request("ImportProjectParamDs", req, cb);
    }
    /**
     * 对集成离线任务执行批量补数据操作
     */
    async BatchMakeUpIntegrationTasks(req, cb) {
        return this.request("BatchMakeUpIntegrationTasks", req, cb);
    }
    /**
     * 资源管理-上传资源
     */
    async UploadResource(req, cb) {
        return this.request("UploadResource", req, cb);
    }
    /**
     * 规则执行日志查询
     */
    async DescribeRuleExecLog(req, cb) {
        return this.request("DescribeRuleExecLog", req, cb);
    }
    /**
     * 获取代码搜索最近n条关键字搜索信息
     */
    async DescribeCodeSearchAuditInfoV2(req, cb) {
        return this.request("DescribeCodeSearchAuditInfoV2", req, cb);
    }
    /**
     * 库表管理-新建数据表-csv预览，最多支持500行预览
     */
    async PreviewDataTableCsv(req, cb) {
        return this.request("PreviewDataTableCsv", req, cb);
    }
    /**
     * 开发空间-拉取完整目录树
     */
    async DescribePathTrees(req, cb) {
        return this.request("DescribePathTrees", req, cb);
    }
    /**
     * 导出工作流(XML格式)，导出的文件存储在 cos 中(私有化 csp)，请自行下载，相关的下载信息在返回值中可以获取到
     */
    async ExportWorkflowXml(req, cb) {
        return this.request("ExportWorkflowXml", req, cb);
    }
    /**
     * 通过任务ID删除所有事件
     */
    async DeleteEventListenerByTaskId(req, cb) {
        return this.request("DeleteEventListenerByTaskId", req, cb);
    }
    /**
     * 创建任务Ds
     */
    async CreateTaskDs(req, cb) {
        return this.request("CreateTaskDs", req, cb);
    }
    /**
     * 更新事件监听
     */
    async UpdateEventListener(req, cb) {
        return this.request("UpdateEventListener", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件监听器
     */
    async RegisterEventListener(req, cb) {
        return this.request("RegisterEventListener", req, cb);
    }
    /**
     * 事件管理-查询事件详情
     */
    async DescribeDsEventDetail(req, cb) {
        return this.request("DescribeDsEventDetail", req, cb);
    }
    /**
     * 获取任务绑定的虚拟任务
     */
    async DescribeTaskBindVirtualTask(req, cb) {
        return this.request("DescribeTaskBindVirtualTask", req, cb);
    }
    /**
     * 拉取项目参数版本详情
     */
    async DescribeProjectParamVersionInfoDs(req, cb) {
        return this.request("DescribeProjectParamVersionInfoDs", req, cb);
    }
    /**
     * 获取 crontab topN 个数据时间周期
     */
    async DescribeCrontabTopNDs(req, cb) {
        return this.request("DescribeCrontabTopNDs", req, cb);
    }
    /**
     * 查询事件发布者信息
     */
    async DescribeDsEventPublisher(req, cb) {
        return this.request("DescribeDsEventPublisher", req, cb);
    }
    /**
     * 删除任务连接
     */
    async DeleteLink(req, cb) {
        return this.request("DeleteLink", req, cb);
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
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改任务脚本
     */
    async ModifyTaskScript(req, cb) {
        return this.request("ModifyTaskScript", req, cb);
    }
    /**
     * 智能运维-事件列表-所属任务/基线过滤列表
     */
    async DescribeBelongTo(req, cb) {
        return this.request("DescribeBelongTo", req, cb);
    }
    /**
     * 根据脚本类型获取任务类型
     */
    async DescribeTaskTypeByScriptType(req, cb) {
        return this.request("DescribeTaskTypeByScriptType", req, cb);
    }
    /**
     * 基线列表
     */
    async DescribeBaselineById(req, cb) {
        return this.request("DescribeBaselineById", req, cb);
    }
    /**
     * 质量报告-质量分周期趋势
     */
    async DescribeQualityScoreTrend(req, cb) {
        return this.request("DescribeQualityScoreTrend", req, cb);
    }
    /**
     * 通过taskIds查询task详情列表
     */
    async DescribeDependTaskLists(req, cb) {
        return this.request("DescribeDependTaskLists", req, cb);
    }
    /**
     * 清空回收站任务
     */
    async ClearRecycleTask(req, cb) {
        return this.request("ClearRecycleTask", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
修改数据源
     */
    async ModifyDataSource(req, cb) {
        return this.request("ModifyDataSource", req, cb);
    }
    /**
     * 修改任务告警规则
     */
    async ModifyTaskAlarmRegular(req, cb) {
        return this.request("ModifyTaskAlarmRegular", req, cb);
    }
    /**
     * 数据质量，查询调度任务的实例列表
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 删除任务输出参数
     */
    async DeleteTaskOutParamDs(req, cb) {
        return this.request("DeleteTaskOutParamDs", req, cb);
    }
    /**
     * 查询试运行实例执行内容
     */
    async DescribeDrInstanceScriptContent(req, cb) {
        return this.request("DescribeDrInstanceScriptContent", req, cb);
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
     * 根据任务id获取下游依赖任务列表
     */
    async DescribeDependOpsTaskList(req, cb) {
        return this.request("DescribeDependOpsTaskList", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
添加父任务依赖
     */
    async ModifyTaskLinks(req, cb) {
        return this.request("ModifyTaskLinks", req, cb);
    }
    /**
     * 开发空间获取最近一次测试运行记录信息
     */
    async GetLatestAnalyseInfo(req, cb) {
        return this.request("GetLatestAnalyseInfo", req, cb);
    }
    /**
     * 删除事件
     */
    async DeleteDsEvent(req, cb) {
        return this.request("DeleteDsEvent", req, cb);
    }
    /**
     * 过滤条件【必要字段】{ruleId}
     */
    async DescribeRuleHistoryByPage(req, cb) {
        return this.request("DescribeRuleHistoryByPage", req, cb);
    }
    /**
     * 查询数据库列表
     */
    async DescribeDatabaseMetas(req, cb) {
        return this.request("DescribeDatabaseMetas", req, cb);
    }
    /**
     * 即席分析提交SHELL任务
     */
    async SubmitShellTask(req, cb) {
        return this.request("SubmitShellTask", req, cb);
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
     * 即席分析提交SQL任务
     */
    async SubmitSqlTask(req, cb) {
        return this.request("SubmitSqlTask", req, cb);
    }
    /**
     * 回收站脚本文件目录树
     */
    async GetPathTrees(req, cb) {
        return this.request("GetPathTrees", req, cb);
    }
    /**
     * 通过指定基准时间，计算出最近一次任务基于该基准时间的运行时间
     */
    async DescribeTaskLatestRunTime(req, cb) {
        return this.request("DescribeTaskLatestRunTime", req, cb);
    }
    /**
     * 查询规则执行历史， 最近30条
     */
    async DescribeRuleExecHistory(req, cb) {
        return this.request("DescribeRuleExecHistory", req, cb);
    }
    /**
     * 查询函数版本列表
     */
    async DescribeCustomFunctionVersionList(req, cb) {
        return this.request("DescribeCustomFunctionVersionList", req, cb);
    }
    /**
     * 创建用户数据开发浏览历史
     */
    async CreateBrowsingHistory(req, cb) {
        return this.request("CreateBrowsingHistory", req, cb);
    }
    /**
     * 批量更新调度参数
     */
    async UpdateBatchTaskParams(req, cb) {
        return this.request("UpdateBatchTaskParams", req, cb);
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
     * 分页查询试运行实例列表
     */
    async DescribeDrInstancePage(req, cb) {
        return this.request("DescribeDrInstancePage", req, cb);
    }
    /**
     * 编排空间获取最近一次测试运行记录信息
     */
    async GetLatestTestRunInfo(req, cb) {
        return this.request("GetLatestTestRunInfo", req, cb);
    }
    /**
     * 查询任务输出参数
     */
    async DescribeTaskOutParamDs(req, cb) {
        return this.request("DescribeTaskOutParamDs", req, cb);
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
     * 开发空间-获取数据开发脚本信息
     */
    async GetFileInfo(req, cb) {
        return this.request("GetFileInfo", req, cb);
    }
    /**
     * 编排空间导入开发空间脚本。
     */
    async CreateScriptsImportTasksDs(req, cb) {
        return this.request("CreateScriptsImportTasksDs", req, cb);
    }
    /**
     * 批量修改参数
     */
    async UpdateBatchTaskParameter(req, cb) {
        return this.request("UpdateBatchTaskParameter", req, cb);
    }
    /**
     * 批量停止集成任务
     */
    async BatchStopIntegrationTasks(req, cb) {
        return this.request("BatchStopIntegrationTasks", req, cb);
    }
    /**
     * 全局搜索查询文件或任务详情
     */
    async DescribeCodeDetailV2(req, cb) {
        return this.request("DescribeCodeDetailV2", req, cb);
    }
    /**
     * 获取离线任务实例
     */
    async GetOfflineInstanceList(req, cb) {
        return this.request("GetOfflineInstanceList", req, cb);
    }
    /**
     * 获取资源管理目录树
     */
    async DescribeResourceManagePathTrees(req, cb) {
        return this.request("DescribeResourceManagePathTrees", req, cb);
    }
    /**
     * 根据周期类型查询所有实例
     */
    async DescribeInstanceByCycle(req, cb) {
        return this.request("DescribeInstanceByCycle", req, cb);
    }
    /**
     * 下载日志文件，返回日志URL
     */
    async DescribeInstanceLogFile(req, cb) {
        return this.request("DescribeInstanceLogFile", req, cb);
    }
    /**
     * 继续集成任务
     */
    async ResumeIntegrationTask(req, cb) {
        return this.request("ResumeIntegrationTask", req, cb);
    }
    /**
     * 获取高级运行参数
     */
    async GetAdvanceRunParams(req, cb) {
        return this.request("GetAdvanceRunParams", req, cb);
    }
    /**
     * 编辑基线告警状态
     */
    async ModifyBaselineAlarmStatus(req, cb) {
        return this.request("ModifyBaselineAlarmStatus", req, cb);
    }
    /**
     * 解锁集成任务
     */
    async UnlockIntegrationTask(req, cb) {
        return this.request("UnlockIntegrationTask", req, cb);
    }
    /**
     * 文件上传需要先获取文件上传所需要的秘钥，文件位置等信息，因为文件名字可能会出现冲突，所以需要传入将要写入的文件，如果检测到文件名冲突，WeData 后端会在文件名上加入随机字符串。
     */
    async UploadFilesDs(req, cb) {
        return this.request("UploadFilesDs", req, cb);
    }
    /**
     * 查询用户数据开发浏览历史
     */
    async DescribeBrowsingHistories(req, cb) {
        return this.request("DescribeBrowsingHistories", req, cb);
    }
    /**
     * 批量创建虚拟任务, 用于新建跨工作流任务场景中新增跨工作流任务操作
     */
    async BatchCreateVirtualTaskDs(req, cb) {
        return this.request("BatchCreateVirtualTaskDs", req, cb);
    }
    /**
     * 查询事件监听者列表
     */
    async DescribeDsEventListenerList(req, cb) {
        return this.request("DescribeDsEventListenerList", req, cb);
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
     * 查看事件实例的消费任务
     */
    async DescribeEventConsumeTasks(req, cb) {
        return this.request("DescribeEventConsumeTasks", req, cb);
    }
    /**
     * 获取待审批列表
     */
    async DescribeApproveList(req, cb) {
        return this.request("DescribeApproveList", req, cb);
    }
    /**
     * 批量更新任务Ds
     */
    async BatchUpdateTasksDs(req, cb) {
        return this.request("BatchUpdateTasksDs", req, cb);
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
     * 资源管理-重命名资源文件
     */
    async RenameResourceFile(req, cb) {
        return this.request("RenameResourceFile", req, cb);
    }
    /**
     * 运维大屏-任务状态分布
     */
    async DescribeSchedulerTaskTypeCnt(req, cb) {
        return this.request("DescribeSchedulerTaskTypeCnt", req, cb);
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
     * <p style="color:red;">[该接口为 ds 中开发]</p>
更新工作流（包括工作流基本信息与工作流参数）
     */
    async UpdateWorkflowInfo(req, cb) {
        return this.request("UpdateWorkflowInfo", req, cb);
    }
    /**
     * 释放协同编辑资源锁
     */
    async ReleaseLock(req, cb) {
        return this.request("ReleaseLock", req, cb);
    }
    /**
     * 批量删除工作流
     */
    async DeleteBatchWorkflowDs(req, cb) {
        return this.request("DeleteBatchWorkflowDs", req, cb);
    }
    /**
     * Runner 规则检测结果上报
     */
    async CommitRuleGroupExecResult(req, cb) {
        return this.request("CommitRuleGroupExecResult", req, cb);
    }
    /**
     * 获取工作流画布操作人列表
     */
    async DescribeWorkflowCanvasOperators(req, cb) {
        return this.request("DescribeWorkflowCanvasOperators", req, cb);
    }
    /**
     * 获取TKE集群列表
     */
    async DescribeInLongTkeClusterList(req, cb) {
        return this.request("DescribeInLongTkeClusterList", req, cb);
    }
    /**
     * 删除产出登记项
     */
    async DeleteTaskOutputRegistry(req, cb) {
        return this.request("DeleteTaskOutputRegistry", req, cb);
    }
    /**
     * 提交数据导出任务
     */
    async CommitExportTask(req, cb) {
        return this.request("CommitExportTask", req, cb);
    }
    /**
     * 重启采集器
     */
    async RestartInLongAgent(req, cb) {
        return this.request("RestartInLongAgent", req, cb);
    }
    /**
     * 事件管理-触发事件
     */
    async TriggerDsEvent(req, cb) {
        return this.request("TriggerDsEvent", req, cb);
    }
    /**
     * 检查任务名称是否重复
     */
    async CheckTaskNameExistDs(req, cb) {
        return this.request("CheckTaskNameExistDs", req, cb);
    }
    /**
     * 更新事件
     */
    async UpdateDsEvent(req, cb) {
        return this.request("UpdateDsEvent", req, cb);
    }
    /**
     * 新建用户自定义函数组件检查
     */
    async CheckCustomFunctionPremise(req, cb) {
        return this.request("CheckCustomFunctionPremise", req, cb);
    }
    /**
     * 获取etl测试运行任务执行状态和日志
     */
    async DescribeTestRun(req, cb) {
        return this.request("DescribeTestRun", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
文件夹更新
     */
    async ModifyFolder(req, cb) {
        return this.request("ModifyFolder", req, cb);
    }
    /**
     * 查询规则执行结果详情
     */
    async DescribeRuleExecDetail(req, cb) {
        return this.request("DescribeRuleExecDetail", req, cb);
    }
    /**
     * 删除回收站任务
     */
    async DeleteRecycleTask(req, cb) {
        return this.request("DeleteRecycleTask", req, cb);
    }
    /**
     * 创建离线任务
     */
    async CreateOfflineTask(req, cb) {
        return this.request("CreateOfflineTask", req, cb);
    }
    /**
     * 基于条件翻页获取任务列表, 用于新建跨工作流任务场景中展示工作流列表操作
     */
    async DescribeTaskListByConditionDs(req, cb) {
        return this.request("DescribeTaskListByConditionDs", req, cb);
    }
    /**
     * 获取表schema信息
     */
    async DescribeTableSchemaInfo(req, cb) {
        return this.request("DescribeTableSchemaInfo", req, cb);
    }
    /**
     * 离线任务周期统计明细
     */
    async DescribeTaskReportDetailList(req, cb) {
        return this.request("DescribeTaskReportDetailList", req, cb);
    }
    /**
     * 获取表元数据list
     */
    async DescribeTableMetas(req, cb) {
        return this.request("DescribeTableMetas", req, cb);
    }
    /**
     * 实时任务同步速度趋势
     */
    async DescribeRealTimeTaskSpeed(req, cb) {
        return this.request("DescribeRealTimeTaskSpeed", req, cb);
    }
    /**
     * 修改工作流责任人
     */
    async UpdateWorkflowOwner(req, cb) {
        return this.request("UpdateWorkflowOwner", req, cb);
    }
    /**
     * 查询 kettle 资源服务器目录树
     */
    async DescribeDsKettleServerFolderTree(req, cb) {
        return this.request("DescribeDsKettleServerFolderTree", req, cb);
    }
    /**
     * 获取开发空间支持的脚本类型
     */
    async DescribeDevelopmentSpaceSupportType(req, cb) {
        return this.request("DescribeDevelopmentSpaceSupportType", req, cb);
    }
    /**
     * 运维大屏-实例状态分布
     */
    async DescribeSchedulerInstanceStatus(req, cb) {
        return this.request("DescribeSchedulerInstanceStatus", req, cb);
    }
    /**
     * 补录任务
     */
    async CreateOpsMakePlan(req, cb) {
        return this.request("CreateOpsMakePlan", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
实例批量置成功
     */
    async ForceSucInstances(req, cb) {
        return this.request("ForceSucInstances", req, cb);
    }
    /**
     * 查询规则组详情接口
     */
    async DescribeRuleGroup(req, cb) {
        return this.request("DescribeRuleGroup", req, cb);
    }
    /**
     * 获取具体实例相关日志信息
     */
    async DescribeInstanceLogDetail(req, cb) {
        return this.request("DescribeInstanceLogDetail", req, cb);
    }
    /**
     * 判断脚本文件是否被任务列表所引用
     */
    async ScriptUsedByOtherTaskDs(req, cb) {
        return this.request("ScriptUsedByOtherTaskDs", req, cb);
    }
    /**
     * 回滚自定义函数版本
     */
    async RollbackCustomFunctionVersion(req, cb) {
        return this.request("RollbackCustomFunctionVersion", req, cb);
    }
    /**
     * 编排空间-删除文件夹
     */
    async DeleteDsFolder(req, cb) {
        return this.request("DeleteDsFolder", req, cb);
    }
    /**
     * 获取回收站任务详情
     */
    async DescribeRecycleTaskDetail(req, cb) {
        return this.request("DescribeRecycleTaskDetail", req, cb);
    }
    /**
     * 创建质量规则接口
     */
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    /**
     * 编辑规则模板
     */
    async ModifyRuleTemplate(req, cb) {
        return this.request("ModifyRuleTemplate", req, cb);
    }
    /**
     * 查询父目录下所有子文件夹+工作流
     */
    async DescribeAllByFolderNew(req, cb) {
        return this.request("DescribeAllByFolderNew", req, cb);
    }
    /**
     * 删除任务Ds
     */
    async DeleteTaskDs(req, cb) {
        return this.request("DeleteTaskDs", req, cb);
    }
    /**
     * 远端路径寻找任务
     */
    async FindTaskByRemotePath(req, cb) {
        return this.request("FindTaskByRemotePath", req, cb);
    }
    /**
     * 智能运维事件详情1
     */
    async DescribeEventDetail(req, cb) {
        return this.request("DescribeEventDetail", req, cb);
    }
    /**
     * 判断告警规则重名
     */
    async CheckAlarmRegularNameExist(req, cb) {
        return this.request("CheckAlarmRegularNameExist", req, cb);
    }
    /**
     * 批量获取etl测试运行任务执行状态和日志
     */
    async DescribeBatchTestRun(req, cb) {
        return this.request("DescribeBatchTestRun", req, cb);
    }
    /**
     * 设置任务输出参数
     */
    async CreateTaskOutParamDs(req, cb) {
        return this.request("CreateTaskOutParamDs", req, cb);
    }
    /**
     * 查询文件或任务详情
     */
    async DescribeCodeDetail(req, cb) {
        return this.request("DescribeCodeDetail", req, cb);
    }
    /**
     * 拉取实例列表，join task表一些信息
     */
    async DescribeInstancesInfoWithTaskInfo(req, cb) {
        return this.request("DescribeInstancesInfoWithTaskInfo", req, cb);
    }
    /**
     * 获取所有任务类型
     */
    async DescribeAllTaskType(req, cb) {
        return this.request("DescribeAllTaskType", req, cb);
    }
    /**
     * 拉取任务版本列表
     */
    async DescribeDsTaskVersionList(req, cb) {
        return this.request("DescribeDsTaskVersionList", req, cb);
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
更新工作流
     */
    async ModifyWorkflowInfo(req, cb) {
        return this.request("ModifyWorkflowInfo", req, cb);
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
     * 修改审批单状态
     */
    async ModifyApproveStatus(req, cb) {
        return this.request("ModifyApproveStatus", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
工作流下所有任务的补录
     */
    async MakeUpWorkflowNew(req, cb) {
        return this.request("MakeUpWorkflowNew", req, cb);
    }
    /**
     * 根据工作流id查询保存未提交任务
     */
    async DescribeDsNotSubmitTasksAndCanRunByWorkflow(req, cb) {
        return this.request("DescribeDsNotSubmitTasksAndCanRunByWorkflow", req, cb);
    }
    /**
     * 查询工作流版本信息
     */
    async QueryWorkflowVersion(req, cb) {
        return this.request("QueryWorkflowVersion", req, cb);
    }
    /**
     * 更新监控状态
     */
    async ModifyMonitorStatus(req, cb) {
        return this.request("ModifyMonitorStatus", req, cb);
    }
    /**
     * 查询试运行实例子实例列表
     */
    async DescribeDrSonInstance(req, cb) {
        return this.request("DescribeDrSonInstance", req, cb);
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
     * 即席分析提交PYTHON任务
     */
    async SubmitPythonTask(req, cb) {
        return this.request("SubmitPythonTask", req, cb);
    }
    /**
     * 工作流导入（XML）
     */
    async ImportWorkflowXml(req, cb) {
        return this.request("ImportWorkflowXml", req, cb);
    }
    /**
     * 获取操作详情列表
     */
    async ListBatchDetail(req, cb) {
        return this.request("ListBatchDetail", req, cb);
    }
    /**
     * 元数据模型-表基础信息查询接口
     */
    async DescribeTableBasicInfo(req, cb) {
        return this.request("DescribeTableBasicInfo", req, cb);
    }
    /**
     * 资源管理-创建资源目录
     */
    async CreateResourceDirectory(req, cb) {
        return this.request("CreateResourceDirectory", req, cb);
    }
    /**
     * 还原任务
     */
    async RestoreRecycleTask(req, cb) {
        return this.request("RestoreRecycleTask", req, cb);
    }
    /**
     * 查询规则组订阅信息
     */
    async DescribeRuleGroupSubscription(req, cb) {
        return this.request("DescribeRuleGroupSubscription", req, cb);
    }
    /**
     * 查询任务实例列表
     */
    async DescribeTaskInstances(req, cb) {
        return this.request("DescribeTaskInstances", req, cb);
    }
    /**
     * 批量导出文件
     */
    async ExportFiles(req, cb) {
        return this.request("ExportFiles", req, cb);
    }
    /**
     * 创建开发空间版本
     */
    async CreateFileVersion(req, cb) {
        return this.request("CreateFileVersion", req, cb);
    }
    /**
     * 批量删除任务提交记录列表
     */
    async DeleteRecordList(req, cb) {
        return this.request("DeleteRecordList", req, cb);
    }
    /**
     * 暂停工作流下的所有任务
     */
    async FreezeTasksByWorkflowIds(req, cb) {
        return this.request("FreezeTasksByWorkflowIds", req, cb);
    }
    /**
     * 替换项目参数历史版本
     */
    async ReplaceProjectParamVersionDs(req, cb) {
        return this.request("ReplaceProjectParamVersionDs", req, cb);
    }
    /**
     * 新获取SQL执行结果
     */
    async DescribeNewSqlTaskResult(req, cb) {
        return this.request("DescribeNewSqlTaskResult", req, cb);
    }
    /**
     * 查询任务告警规则列表
     */
    async DescribeTaskAlarmRegulations(req, cb) {
        return this.request("DescribeTaskAlarmRegulations", req, cb);
    }
    /**
     * 查询集成任务
     */
    async DescribeIntegrationTask(req, cb) {
        return this.request("DescribeIntegrationTask", req, cb);
    }
    /**
     * 资源管理-获取资源上传的可用 cos 路径
     */
    async GetResourceCosPath(req, cb) {
        return this.request("GetResourceCosPath", req, cb);
    }
    /**
     * 查询工作流画布运行起止时间
     */
    async DescribeWorkflowExecuteById(req, cb) {
        return this.request("DescribeWorkflowExecuteById", req, cb);
    }
    /**
     * 任务运维搜索 查询生产态任务数据源列表
     */
    async DescribeOperateOpsTaskDatasource(req, cb) {
        return this.request("DescribeOperateOpsTaskDatasource", req, cb);
    }
    /**
     * 获取关联子实例
     */
    async DescribeSonInstances(req, cb) {
        return this.request("DescribeSonInstances", req, cb);
    }
    /**
     * 开发空间-拉取指定路径目录树
     */
    async DescribeChildrenPathTrees(req, cb) {
        return this.request("DescribeChildrenPathTrees", req, cb);
    }
    /**
     * 批量更新数据源
     */
    async UpdateBatchTaskDatasource(req, cb) {
        return this.request("UpdateBatchTaskDatasource", req, cb);
    }
    /**
     * 编排空间-工作流-创建任务文件夹
     */
    async CreateTaskFolder(req, cb) {
        return this.request("CreateTaskFolder", req, cb);
    }
    /**
     * 实例批量重跑
     */
    async RerunScheduleInstances(req, cb) {
        return this.request("RerunScheduleInstances", req, cb);
    }
    /**
     * 获取执行日志
     */
    async DescribeExecutionLog(req, cb) {
        return this.request("DescribeExecutionLog", req, cb);
    }
    /**
     * 通过工作流id，查询工作流详情
     */
    async DescribeWorkflowInfoById(req, cb) {
        return this.request("DescribeWorkflowInfoById", req, cb);
    }
    /**
     * 查询函数分类
     */
    async DescribeFunctionKinds(req, cb) {
        return this.request("DescribeFunctionKinds", req, cb);
    }
    /**
     * 即席分析提交PySpark任务
     */
    async SubmitPySparkTask(req, cb) {
        return this.request("SubmitPySparkTask", req, cb);
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
     * 拉取下游依赖的任务列表Ds
     */
    async FindDependTaskListDs(req, cb) {
        return this.request("FindDependTaskListDs", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
运行任务
     */
    async RunTask(req, cb) {
        return this.request("RunTask", req, cb);
    }
    /**
     * 数据质量获取生产调度任务列表
     */
    async DescribeProdTasks(req, cb) {
        return this.request("DescribeProdTasks", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建任务
     */
    async CreateTask(req, cb) {
        return this.request("CreateTask", req, cb);
    }
    /**
     * 在基线系统内查询单个调度任务实例
     */
    async DescribeScheduleInstance(req, cb) {
        return this.request("DescribeScheduleInstance", req, cb);
    }
    /**
     * 查询项目参数历史版本
     */
    async DescribeProjectParamVersionDs(req, cb) {
        return this.request("DescribeProjectParamVersionDs", req, cb);
    }
    /**
     * 创建规则模版
     */
    async CreateRuleTemplate(req, cb) {
        return this.request("CreateRuleTemplate", req, cb);
    }
    /**
     * 导出项目参数
     */
    async ExportProjectParamDs(req, cb) {
        return this.request("ExportProjectParamDs", req, cb);
    }
    /**
     * 分页查询规则执行结果列表
     */
    async DescribeRuleExecResultsByPage(req, cb) {
        return this.request("DescribeRuleExecResultsByPage", req, cb);
    }
    /**
     * 工作流信息查询-项目克隆使用
     */
    async DescribeWorkflowForProjectClone(req, cb) {
        return this.request("DescribeWorkflowForProjectClone", req, cb);
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
     * 查询任务引用参数
     */
    async DescribeTaskParamDs(req, cb) {
        return this.request("DescribeTaskParamDs", req, cb);
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
     * 根据周期类型 查询所有任务
     */
    async DescribeTaskByCycle(req, cb) {
        return this.request("DescribeTaskByCycle", req, cb);
    }
    /**
     * 获取采集器列表
     */
    async DescribeInLongAgentList(req, cb) {
        return this.request("DescribeInLongAgentList", req, cb);
    }
    /**
     * 批量运行任务, 用于工作流-任务配置-运行、工作流-任务右键-运行、任务运维-任务管理-更多操作-运行、任务运维-任务管理-选择任务-批量运行等场景。
1. 任务运行预判断
2. 更新db中任务状态
3. 通知scheduler进行运行操作
     */
    async BatchRunTasksDs(req, cb) {
        return this.request("BatchRunTasksDs", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
批量删除任务，仅对任务状态为”已停止“有效；

     */
    async BatchDeleteTasksNew(req, cb) {
        return this.request("BatchDeleteTasksNew", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
删除工作流
     */
    async DeleteWorkflowNew(req, cb) {
        return this.request("DeleteWorkflowNew", req, cb);
    }
    /**
     * 编排空间-工作流-移动任务到工作流文件夹
     */
    async MoveTasksToFolder(req, cb) {
        return this.request("MoveTasksToFolder", req, cb);
    }
    /**
     * 日志获取详情页面
     */
    async DescribeInstanceLastLog(req, cb) {
        return this.request("DescribeInstanceLastLog", req, cb);
    }
    /**
     * 工作流补数据
     */
    async MakeUpTasksByWorkflow(req, cb) {
        return this.request("MakeUpTasksByWorkflow", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
数据源列表
     */
    async DescribeDataSourceWithoutInfo(req, cb) {
        return this.request("DescribeDataSourceWithoutInfo", req, cb);
    }
    /**
     * 根据条件搜索代码
     */
    async DescribeCodeSearchInfo(req, cb) {
        return this.request("DescribeCodeSearchInfo", req, cb);
    }
    /**
     * 创建项目参数
     */
    async CreateProjectParamDs(req, cb) {
        return this.request("CreateProjectParamDs", req, cb);
    }
    /**
     * 更新工作流下任务调度信息
     */
    async RenewWorkflowSchedulerInfoDs(req, cb) {
        return this.request("RenewWorkflowSchedulerInfoDs", req, cb);
    }
    /**
     * 获取离线任务长连接Token
     */
    async DescribeOfflineTaskToken(req, cb) {
        return this.request("DescribeOfflineTaskToken", req, cb);
    }
    /**
     * 批量启动工作流
     */
    async RunTasksByMultiWorkflow(req, cb) {
        return this.request("RunTasksByMultiWorkflow", req, cb);
    }
    /**
     * 批量更新高级设置
     */
    async UpdateBatchTaskAdvancedSettings(req, cb) {
        return this.request("UpdateBatchTaskAdvancedSettings", req, cb);
    }
    /**
     * 查询任务输入参数
     */
    async DescribeTaskInParamDs(req, cb) {
        return this.request("DescribeTaskInParamDs", req, cb);
    }
    /**
     * 查看补录计划任务
     */
    async DescribeOpsMakePlanTasks(req, cb) {
        return this.request("DescribeOpsMakePlanTasks", req, cb);
    }
    /**
     * 新增或编辑产出登记项
     */
    async CreateTaskOutputRegistry(req, cb) {
        return this.request("CreateTaskOutputRegistry", req, cb);
    }
    /**
     * 数据质量概览页面表排行接口
     */
    async DescribeTopTableStat(req, cb) {
        return this.request("DescribeTopTableStat", req, cb);
    }
    /**
     * 编辑基线实例中任务告警状态
     */
    async ModifyBaselineTaskAlarmStatus(req, cb) {
        return this.request("ModifyBaselineTaskAlarmStatus", req, cb);
    }
    /**
     * 查询Inlong manager日志
     */
    async TaskLog(req, cb) {
        return this.request("TaskLog", req, cb);
    }
    /**
     * 检查操作用户对所选任务是否有操作权限, 用于新建跨工作流任务场景中展示审批提示操作
     */
    async CheckTaskPriorityDs(req, cb) {
        return this.request("CheckTaskPriorityDs", req, cb);
    }
    /**
     * 获取下游任务信息
     */
    async DescribeSuccessorOpsTaskInfos(req, cb) {
        return this.request("DescribeSuccessorOpsTaskInfos", req, cb);
    }
    /**
     * 调试运行集成任务
     */
    async DryRunDIOfflineTask(req, cb) {
        return this.request("DryRunDIOfflineTask", req, cb);
    }
    /**
     * 查询表绑定执行规则组信息
     */
    async DescribeRuleGroupTable(req, cb) {
        return this.request("DescribeRuleGroupTable", req, cb);
    }
    /**
     * 创建集成任务
     */
    async CreateIntegrationTask(req, cb) {
        return this.request("CreateIntegrationTask", req, cb);
    }
    /**
     * 按补录计划批量终止实例。
     */
    async KillOpsMakePlanInstances(req, cb) {
        return this.request("KillOpsMakePlanInstances", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
更新任务
     */
    async ModifyTaskInfo(req, cb) {
        return this.request("ModifyTaskInfo", req, cb);
    }
    /**
     * 获取表列表
     */
    async DescribeRuleTablesByPage(req, cb) {
        return this.request("DescribeRuleTablesByPage", req, cb);
    }
    /**
     * 新建文件夹
     */
    async CreatePath(req, cb) {
        return this.request("CreatePath", req, cb);
    }
    /**
     * 任务引用参数
     */
    async CreateTaskParamDs(req, cb) {
        return this.request("CreateTaskParamDs", req, cb);
    }
    /**
     * 根据层级查找开发态上下游任务节点
     */
    async DescribeDependTasksDevDs(req, cb) {
        return this.request("DescribeDependTasksDevDs", req, cb);
    }
    /**
     * 质量报告-修改维度权限
     */
    async ModifyDimensionWeight(req, cb) {
        return this.request("ModifyDimensionWeight", req, cb);
    }
    /**
     * 数据开发模块-文件夹更新
     */
    async ModifyDsFolder(req, cb) {
        return this.request("ModifyDsFolder", req, cb);
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
     * 根据文件夹查询工作流
     */
    async DescribeWorkflowByFordIds(req, cb) {
        return this.request("DescribeWorkflowByFordIds", req, cb);
    }
    /**
     * 事件管理-导出事件
     */
    async ExportDsEvent(req, cb) {
        return this.request("ExportDsEvent", req, cb);
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
     * 创建数据表：HIVE
     */
    async ImportTableData(req, cb) {
        return this.request("ImportTableData", req, cb);
    }
    /**
     * 停止集成任务
     */
    async StopIntegrationTask(req, cb) {
        return this.request("StopIntegrationTask", req, cb);
    }
    /**
     * 复制工作流
     */
    async CopyWorkflowDs(req, cb) {
        return this.request("CopyWorkflowDs", req, cb);
    }
    /**
     * 实例强制成功
     */
    async RunForceSucScheduleInstances(req, cb) {
        return this.request("RunForceSucScheduleInstances", req, cb);
    }
    /**
     * 提交基线
     */
    async SubmitBaseline(req, cb) {
        return this.request("SubmitBaseline", req, cb);
    }
    /**
     * 任务运维-批量冻结任务
     */
    async FreezeOpsTasks(req, cb) {
        return this.request("FreezeOpsTasks", req, cb);
    }
    /**
     * 获取协同编辑资源锁
     */
    async AcquireLock(req, cb) {
        return this.request("AcquireLock", req, cb);
    }
    /**
     * 查询规则模板操作记录
     */
    async DescribeTemplateHistory(req, cb) {
        return this.request("DescribeTemplateHistory", req, cb);
    }
    /**
     * 查询所有参数
     */
    async DescribeAllParamDs(req, cb) {
        return this.request("DescribeAllParamDs", req, cb);
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
     * 获取长连接Token
     */
    async DescribeToken(req, cb) {
        return this.request("DescribeToken", req, cb);
    }
    /**
     * 实例强制成功
     */
    async ForceSucScheduleInstances(req, cb) {
        return this.request("ForceSucScheduleInstances", req, cb);
    }
    /**
     * 删除项目参数版本
     */
    async DeleteProjectParamVersionDs(req, cb) {
        return this.request("DeleteProjectParamVersionDs", req, cb);
    }
    /**
     * 批量置成功集成任务实例
     */
    async BatchForceSuccessIntegrationTaskInstances(req, cb) {
        return this.request("BatchForceSuccessIntegrationTaskInstances", req, cb);
    }
    /**
     * 查询实时任务日志列表
     */
    async DescribeStreamTaskLogList(req, cb) {
        return this.request("DescribeStreamTaskLogList", req, cb);
    }
    /**
     * 数据质量概览页面触发维度分布统计接口
     */
    async DescribeRuleDimStat(req, cb) {
        return this.request("DescribeRuleDimStat", req, cb);
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
     * 查询表的所有列元数据
     */
    async DescribeColumnsMeta(req, cb) {
        return this.request("DescribeColumnsMeta", req, cb);
    }
    /**
     * Ds批量删除任务，仅对任务状态为”已停止“有效；
     */
    async BatchDeleteTasksDsAsync(req, cb) {
        return this.request("BatchDeleteTasksDsAsync", req, cb);
    }
    /**
     * 异步导入集成任务
     */
    async ImportOfflineTask(req, cb) {
        return this.request("ImportOfflineTask", req, cb);
    }
    /**
     * 编排空间-工作流-创建任务文件夹
     */
    async ModifyTaskFolder(req, cb) {
        return this.request("ModifyTaskFolder", req, cb);
    }
    /**
     * 分页查询质量规则
     */
    async DescribeRulesByPage(req, cb) {
        return this.request("DescribeRulesByPage", req, cb);
    }
    /**
     * 删除项目用户
     */
    async DeleteProjectUsers(req, cb) {
        return this.request("DeleteProjectUsers", req, cb);
    }
    /**
     * 查询基线实例列表
     */
    async DescribeBaselineInstances(req, cb) {
        return this.request("DescribeBaselineInstances", req, cb);
    }
    /**
     * 删除文件
     */
    async DeleteFile(req, cb) {
        return this.request("DeleteFile", req, cb);
    }
    /**
     * 保存任务信息
     */
    async UploadContent(req, cb) {
        return this.request("UploadContent", req, cb);
    }
    /**
     * 资源管理-重命名资源
     */
    async RenameResource(req, cb) {
        return this.request("RenameResource", req, cb);
    }
    /**
     * 任务运维-任务列表 批量运行
     */
    async BatchRunOpsTask(req, cb) {
        return this.request("BatchRunOpsTask", req, cb);
    }
    /**
     * 获取操作历史列表
     */
    async ListBatchJob(req, cb) {
        return this.request("ListBatchJob", req, cb);
    }
    /**
     * 获取工作流操作日志
     */
    async DescribeWorkflowCanvasOpLogs(req, cb) {
        return this.request("DescribeWorkflowCanvasOpLogs", req, cb);
    }
    /**
     * 注册事件
     */
    async RegisterDsEvent(req, cb) {
        return this.request("RegisterDsEvent", req, cb);
    }
    /**
     * 数据集成大屏任务状态统计趋势
     */
    async DescribeIntegrationStatisticsTaskStatusTrend(req, cb) {
        return this.request("DescribeIntegrationStatisticsTaskStatusTrend", req, cb);
    }
    /**
     * 修改任务脚本Ds
     */
    async ModifyTaskScriptDs(req, cb) {
        return this.request("ModifyTaskScriptDs", req, cb);
    }
    /**
     * 导出工作流到 Zip 文件，导出的文件存储在 cos 中(私有化 csp)，请自行下载，相关的下载信息在返回值中可以获取到
     */
    async ExportWorkflowZip(req, cb) {
        return this.request("ExportWorkflowZip", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
创建工作流
     */
    async CreateWorkflow(req, cb) {
        return this.request("CreateWorkflow", req, cb);
    }
    /**
     * 添加父任务依赖
     */
    async ModifyTaskLinksDs(req, cb) {
        return this.request("ModifyTaskLinksDs", req, cb);
    }
    /**
     * 列出表血缘信息
     */
    async DescribeTableLineage(req, cb) {
        return this.request("DescribeTableLineage", req, cb);
    }
    /**
     * 批量创建任务版本Ds
     */
    async BatchCreateTaskVersionDs(req, cb) {
        return this.request("BatchCreateTaskVersionDs", req, cb);
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
     * 分页查询事件
     */
    async DescribeDsEvent(req, cb) {
        return this.request("DescribeDsEvent", req, cb);
    }
    /**
     * 启动集成任务
     */
    async StartIntegrationTask(req, cb) {
        return this.request("StartIntegrationTask", req, cb);
    }
    /**
     * 编排空间-工作流-删除任务文件夹
     */
    async DeleteTaskFolder(req, cb) {
        return this.request("DeleteTaskFolder", req, cb);
    }
    /**
     * 查询表元数据详情
     */
    async DescribeTableMeta(req, cb) {
        return this.request("DescribeTableMeta", req, cb);
    }
    /**
     * 任务状态趋势
     */
    async DescribeStatisticInstanceStatusTrendOps(req, cb) {
        return this.request("DescribeStatisticInstanceStatusTrendOps", req, cb);
    }
    /**
     * 获取数据表信息
     */
    async DescribeTableInfoList(req, cb) {
        return this.request("DescribeTableInfoList", req, cb);
    }
    /**
     * 即席分析-获取任务列表
     */
    async DescribeRecordList(req, cb) {
        return this.request("DescribeRecordList", req, cb);
    }
    /**
     * 查看任务版本详细信息
     */
    async DescribeDsTaskVersionInfo(req, cb) {
        return this.request("DescribeDsTaskVersionInfo", req, cb);
    }
    /**
     * 提交etl测试运行任务
     */
    async SubmitTestRun(req, cb) {
        return this.request("SubmitTestRun", req, cb);
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
     * Ds批量删除任务，仅对任务状态为”已停止“有效；
     */
    async BatchDeleteTasksDs(req, cb) {
        return this.request("BatchDeleteTasksDs", req, cb);
    }
    /**
     * 任务信息查询-项目克隆使用
     */
    async DescribeTasksForProjectClone(req, cb) {
        return this.request("DescribeTasksForProjectClone", req, cb);
    }
    /**
     * 移动文件夹
     */
    async RenewWorkflowFolderDs(req, cb) {
        return this.request("RenewWorkflowFolderDs", req, cb);
    }
    /**
     * 查询集成任务版本节点信息
     */
    async DescribeIntegrationVersionNodesInfo(req, cb) {
        return this.request("DescribeIntegrationVersionNodesInfo", req, cb);
    }
    /**
     * 删除用户自定义函数
     */
    async DeleteCustomFunction(req, cb) {
        return this.request("DeleteCustomFunction", req, cb);
    }
    /**
     * 按补录计划批量重跑/选择补录计划→补录任务→补录实例，点击重跑
     */
    async RerunOpsMakePlanInstances(req, cb) {
        return this.request("RerunOpsMakePlanInstances", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
拉取文件夹下的工作流
     */
    async DescribeFolderWorkflowList(req, cb) {
        return this.request("DescribeFolderWorkflowList", req, cb);
    }
    /**
     * 查询工作流任务数
     */
    async DescribeWorkflowTaskCount(req, cb) {
        return this.request("DescribeWorkflowTaskCount", req, cb);
    }
    /**
     * 数据集成大屏实例状态统计趋势
     */
    async DescribeIntegrationStatisticsInstanceTrend(req, cb) {
        return this.request("DescribeIntegrationStatisticsInstanceTrend", req, cb);
    }
    /**
     * 批量重跑集成任务实例
     */
    async BatchRerunIntegrationTaskInstances(req, cb) {
        return this.request("BatchRerunIntegrationTaskInstances", req, cb);
    }
    /**
     * 创建任务连接
     */
    async CreateLink(req, cb) {
        return this.request("CreateLink", req, cb);
    }
    /**
     * <p style="color:red;">[注意：该Beta版本只满足广州区部分白名单客户使用]</p>
注册事件
     */
    async RegisterEvent(req, cb) {
        return this.request("RegisterEvent", req, cb);
    }
    /**
     * 任务是否存在监听事件
     */
    async JudgeTaskListenEvent(req, cb) {
        return this.request("JudgeTaskListenEvent", req, cb);
    }
    /**
     * 批量停止工作流
     */
    async BatchStopWorkflowsByIds(req, cb) {
        return this.request("BatchStopWorkflowsByIds", req, cb);
    }
    /**
     * 查询采集器关联的任务列表
     */
    async DescribeInLongAgentTaskList(req, cb) {
        return this.request("DescribeInLongAgentTaskList", req, cb);
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
     * 注册事件监听者
     */
    async RegisterDsEventListener(req, cb) {
        return this.request("RegisterDsEventListener", req, cb);
    }
    /**
     * 数据开发-获取工作流画布信息
     */
    async DescribeWorkflowCanvasInfoDs(req, cb) {
        return this.request("DescribeWorkflowCanvasInfoDs", req, cb);
    }
    /**
     * 移动文件
     */
    async MoveFile(req, cb) {
        return this.request("MoveFile", req, cb);
    }
    /**
     * 资源管理需要先将资源上传到cos中，然后调用该接口，将cos资源绑定到wedata
     */
    async CreateOrUpdateResource(req, cb) {
        return this.request("CreateOrUpdateResource", req, cb);
    }
    /**
     * 列出表血缘信息
     */
    async DescribeTableLineageInfo(req, cb) {
        return this.request("DescribeTableLineageInfo", req, cb);
    }
    /**
     * 提交自定义函数
     */
    async SubmitCustomFunction(req, cb) {
        return this.request("SubmitCustomFunction", req, cb);
    }
    /**
     * 查询工作流画布
     */
    async DescribeWorkflowCanvasInfo(req, cb) {
        return this.request("DescribeWorkflowCanvasInfo", req, cb);
    }
    /**
     * 查询规则模板维度分布情况
     */
    async DescribeTemplateDimCount(req, cb) {
        return this.request("DescribeTemplateDimCount", req, cb);
    }
    /**
     * 查询规则模版列表
     */
    async DescribeRuleTemplates(req, cb) {
        return this.request("DescribeRuleTemplates", req, cb);
    }
    /**
     * 基于当前任务的数据时间计算依赖的上游任务数据时间
     */
    async DescribeTaskParentRunTime(req, cb) {
        return this.request("DescribeTaskParentRunTime", req, cb);
    }
}
exports.Client = Client;

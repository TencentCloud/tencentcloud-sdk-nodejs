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
 * dbbrain client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dbbrain.tencentcloudapi.com", "2021-05-27", clientConfig);
    }
    /**
     * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     */
    async DescribeTopSpaceTableTimeSeries(req, cb) {
        return this.request("DescribeTopSpaceTableTimeSeries", req, cb);
    }
    /**
     * 查询安全审计日志导出文件下载链接。目前日志文件下载仅提供腾讯云内网地址，请通过广州地域的腾讯云服务器进行下载。
     */
    async DescribeSecurityAuditLogDownloadUrls(req, cb) {
        return this.request("DescribeSecurityAuditLogDownloadUrls", req, cb);
    }
    /**
     * 根据任务id删除健康报告生成任务
     */
    async DeleteDBDiagReportTasks(req, cb) {
        return this.request("DeleteDBDiagReportTasks", req, cb);
    }
    /**
     * 获取发送邮件的配置， 包括数据库巡检的邮件配置以及定期生成健康报告的邮件发送配置。
     */
    async DescribeMailProfile(req, cb) {
        return this.request("DescribeMailProfile", req, cb);
    }
    /**
     * 该接口用于创建定期生成健康报告并邮件发送的配置，将健康报告的定期生成时间作为参数传入（周一至周日），用于设置健康报告的定期生成时间，同时保存相应的定期邮件发送的配置。
     */
    async CreateSchedulerMailProfile(req, cb) {
        return this.request("CreateSchedulerMailProfile", req, cb);
    }
    /**
     * 查询SQL模板。
     */
    async DescribeSqlTemplate(req, cb) {
        return this.request("DescribeSqlTemplate", req, cb);
    }
    /**
     * 获取实例Top库的实时空间统计信息，默认返回按大小排序。
     */
    async DescribeTopSpaceSchemas(req, cb) {
        return this.request("DescribeTopSpaceSchemas", req, cb);
    }
    /**
     * 查询关系型数据库的实时线程列表。
     */
    async DescribeMySqlProcessList(req, cb) {
        return this.request("DescribeMySqlProcessList", req, cb);
    }
    /**
     * 创建邮件配置。其中入参ProfileType表示所创建配置的类型，ProfileType 取值包括：dbScan_mail_configuration（数据库巡检邮件配置）、scheduler_mail_configuration（定期生成健康报告的邮件发送配置）。Region统一选择广州，和实例所属地域无关。
     */
    async CreateMailProfile(req, cb) {
        return this.request("CreateMailProfile", req, cb);
    }
    /**
     * 查询健康报告生成任务列表。
     */
    async DescribeDBDiagReportTasks(req, cb) {
        return this.request("DescribeDBDiagReportTasks", req, cb);
    }
    /**
     * 热Key分析
     */
    async DescribeRedisTopHotKeys(req, cb) {
        return this.request("DescribeRedisTopHotKeys", req, cb);
    }
    /**
     * 更新Agent实例状态（停止或重连实例）
     */
    async UpdateMonitorSwitch(req, cb) {
        return this.request("UpdateMonitorSwitch", req, cb);
    }
    /**
     * 修改实例的配置信息。
     */
    async ModifyDiagDBInstanceConf(req, cb) {
        return this.request("ModifyDiagDBInstanceConf", req, cb);
    }
    /**
     * 即时创建redis实例大key分析任务，限制正在运行的即时分析任务数量默认为5。
     */
    async CreateRedisBigKeyAnalysisTask(req, cb) {
        return this.request("CreateRedisBigKeyAnalysisTask", req, cb);
    }
    /**
     * 用于删除云数据库实例的审计日志文件。
     */
    async DeleteAuditLogFile(req, cb) {
        return this.request("DeleteAuditLogFile", req, cb);
    }
    /**
     * 获取邮件发送联系组的相关信息。
     */
    async DescribeAllUserGroup(req, cb) {
        return this.request("DescribeAllUserGroup", req, cb);
    }
    /**
     * 获取指定时间段内的诊断事件列表，支持依据风险等级、实例ID等条件过滤。
     */
    async DescribeDBDiagEvents(req, cb) {
        return this.request("DescribeDBDiagEvents", req, cb);
    }
    /**
     * 查询实例列表
     */
    async DescribeAuditInstanceList(req, cb) {
        return this.request("DescribeAuditInstanceList", req, cb);
    }
    /**
     * 删除Redis实例的大key分析任务。
     */
    async DeleteRedisBigKeyAnalysisTasks(req, cb) {
        return this.request("DeleteRedisBigKeyAnalysisTasks", req, cb);
    }
    /**
     * 获取实例占用空间最大的前几个库在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     */
    async DescribeTopSpaceSchemaTimeSeries(req, cb) {
        return this.request("DescribeTopSpaceSchemaTimeSeries", req, cb);
    }
    /**
     * 获取慢日志统计柱状图。
     */
    async DescribeSlowLogTimeSeriesStats(req, cb) {
        return this.request("DescribeSlowLogTimeSeriesStats", req, cb);
    }
    /**
     * 获取 Redis 实例所有 proxy 节点的实时会话详情列表。
     */
    async DescribeRedisProcessList(req, cb) {
        return this.request("DescribeRedisProcessList", req, cb);
    }
    /**
     * 获取慢日志来源地址统计分布图。
     */
    async DescribeSlowLogUserHostStats(req, cb) {
        return this.request("DescribeSlowLogUserHostStats", req, cb);
    }
    /**
     * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
     */
    async DescribeSlowLogTopSqls(req, cb) {
        return this.request("DescribeSlowLogTopSqls", req, cb);
    }
    /**
     * 创建实例SQL限流任务。
     */
    async CreateSqlFilter(req, cb) {
        return this.request("CreateSqlFilter", req, cb);
    }
    /**
     * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
     */
    async DescribeDBSpaceStatus(req, cb) {
        return this.request("DescribeDBSpaceStatus", req, cb);
    }
    /**
     * 创建中止所有代理节点连接会话的异步任务。当前仅支持 Redis。得到的返回值为异步任务 id，可以作为参数传入接口 DescribeProxySessionKillTasks 查询kill会话任务执行状态。
     */
    async CreateProxySessionKillTask(req, cb) {
        return this.request("CreateProxySessionKillTask", req, cb);
    }
    /**
     * 根据实例ID获取指定时间段（30分钟）的健康得分，以及异常扣分项。
     */
    async DescribeHealthScore(req, cb) {
        return this.request("DescribeHealthScore", req, cb);
    }
    /**
     * 终止中断会话任务。
     */
    async CancelKillTask(req, cb) {
        return this.request("CancelKillTask", req, cb);
    }
    /**
     * 创建安全审计日志导出任务。
     */
    async CreateSecurityAuditLogExportTask(req, cb) {
        return this.request("CreateSecurityAuditLogExportTask", req, cb);
    }
    /**
     * 不用审计日志时，关闭数据库审计
     */
    async CloseAuditService(req, cb) {
        return this.request("CloseAuditService", req, cb);
    }
    /**
     * 获取SQL优化建议。【产品用户回馈，此接口限免开放，后续将并入dbbrain专业版】
     */
    async DescribeUserSqlAdvice(req, cb) {
        return this.request("DescribeUserSqlAdvice", req, cb);
    }
    /**
     * 删除安全审计日志导出任务。
     */
    async DeleteSecurityAuditLogExportTasks(req, cb) {
        return this.request("DeleteSecurityAuditLogExportTasks", req, cb);
    }
    /**
     * 更改实例限流任务状态，目前仅用于终止限流。
     */
    async ModifySqlFilters(req, cb) {
        return this.request("ModifySqlFilters", req, cb);
    }
    /**
     * 查询redis大key分析任务列表。
     */
    async DescribeRedisBigKeyAnalysisTasks(req, cb) {
        return this.request("DescribeRedisBigKeyAnalysisTasks", req, cb);
    }
    /**
     * 用于创建云数据库实例的审计日志文件，最多下载600w审计日志。
     */
    async CreateAuditLogFile(req, cb) {
        return this.request("CreateAuditLogFile", req, cb);
    }
    /**
     * 查询redis实例大key列表。
     */
    async DescribeRedisTopBigKeys(req, cb) {
        return this.request("DescribeRedisTopBigKeys", req, cb);
    }
    /**
     * 查询安全审计日志导出任务列表。
     */
    async DescribeSecurityAuditLogExportTasks(req, cb) {
        return this.request("DescribeSecurityAuditLogExportTasks", req, cb);
    }
    /**
     * 获取邮件发送中联系人的相关信息。
     */
    async DescribeAllUserContact(req, cb) {
        return this.request("DescribeAllUserContact", req, cb);
    }
    /**
     * 查询redis实例top key前缀列表。
     */
    async DescribeRedisTopKeyPrefixList(req, cb) {
        return this.request("DescribeRedisTopKeyPrefixList", req, cb);
    }
    /**
     * 获取指定时间内某个sql模板的慢日志明细
     */
    async DescribeSlowLogs(req, cb) {
        return this.request("DescribeSlowLogs", req, cb);
    }
    /**
     * 获取实例异常诊断事件的详情信息。
     */
    async DescribeDBDiagEvent(req, cb) {
        return this.request("DescribeDBDiagEvent", req, cb);
    }
    /**
     * 获取实例诊断事件的列表。
     */
    async DescribeDBDiagHistory(req, cb) {
        return this.request("DescribeDBDiagHistory", req, cb);
    }
    /**
     * 获取当前实例下的单个proxy的会话统计详情信息， 返回数据为单个 proxy 的会话统计信息。【注意】该接口仅限部分环境调用。
     */
    async DescribeProxyProcessStatistics(req, cb) {
        return this.request("DescribeProxyProcessStatistics", req, cb);
    }
    /**
     * 创建健康报告，并可以选择是否发送邮件。
     */
    async CreateDBDiagReportTask(req, cb) {
        return this.request("CreateDBDiagReportTask", req, cb);
    }
    /**
     * 获取实例信息列表。Region统一选择广州。
     */
    async DescribeDiagDBInstances(req, cb) {
        return this.request("DescribeDiagDBInstances", req, cb);
    }
    /**
     * 删除实例SQL限流任务。
     */
    async DeleteSqlFilters(req, cb) {
        return this.request("DeleteSqlFilters", req, cb);
    }
    /**
     * 修改告警策略
     */
    async ModifyAlarmPolicy(req, cb) {
        return this.request("ModifyAlarmPolicy", req, cb);
    }
    /**
     * 开启数据库审计服务
     */
    async OpenAuditService(req, cb) {
        return this.request("OpenAuditService", req, cb);
    }
    /**
     * 添加邮件接收联系人的姓名， 邮件地址，返回值为添加成功的联系人id。
     */
    async AddUserContact(req, cb) {
        return this.request("AddUserContact", req, cb);
    }
    /**
     * 查询实例的索引推荐信息，包括索引统计相关信息，推荐索引列表，无效索引列表等。
     */
    async DescribeIndexRecommendInfo(req, cb) {
        return this.request("DescribeIndexRecommendInfo", req, cb);
    }
    /**
     * 修改审计配置相关信息，如高频存储时长等
     */
    async ModifyAuditService(req, cb) {
        return this.request("ModifyAuditService", req, cb);
    }
    /**
     * 查询某张表的慢查模板概览
     */
    async DescribeIndexRecommendAggregationSlowLogs(req, cb) {
        return this.request("DescribeIndexRecommendAggregationSlowLogs", req, cb);
    }
    /**
     * 创建中断会话的任务。
     */
    async CreateKillTask(req, cb) {
        return this.request("CreateKillTask", req, cb);
    }
    /**
     * 更新agent状态（停止或重连Agent）
     */
    async UpdateAgentSwitch(req, cb) {
        return this.request("UpdateAgentSwitch", req, cb);
    }
    /**
     * 查询实例无主键表。
     */
    async DescribeNoPrimaryKeyTables(req, cb) {
        return this.request("DescribeNoPrimaryKeyTables", req, cb);
    }
    /**
     * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
     */
    async DescribeTopSpaceTables(req, cb) {
        return this.request("DescribeTopSpaceTables", req, cb);
    }
    /**
     * 查询实例SQL限流任务列表。
     */
    async DescribeSqlFilters(req, cb) {
        return this.request("DescribeSqlFilters", req, cb);
    }
    /**
     * 通知模板查询
     */
    async DescribeAlarmTemplate(req, cb) {
        return this.request("DescribeAlarmTemplate", req, cb);
    }
    /**
     * 用于创建云数据库实例的审计日志文件
     */
    async DescribeAuditLogFiles(req, cb) {
        return this.request("DescribeAuditLogFiles", req, cb);
    }
    /**
     * 根据会话ID中断当前会话，该接口分为两次提交：第一次为预提交阶段，Stage为"Prepare"，得到的返回值包含SqlExecId；第二次为确认提交， Stage为"Commit"， 将SqlExecId的值作为参数传入，最终终止会话进程。
     */
    async KillMySqlThreads(req, cb) {
        return this.request("KillMySqlThreads", req, cb);
    }
    /**
     * 创建健康报告的浏览地址。
     */
    async CreateDBDiagReportUrl(req, cb) {
        return this.request("CreateDBDiagReportUrl", req, cb);
    }
    /**
     * 验证用户数据库账号权限，获取会话token。
     */
    async VerifyUserAccount(req, cb) {
        return this.request("VerifyUserAccount", req, cb);
    }
    /**
     * 用于查询 redis 执行 kill 会话任务后代理节点的执行结果，入参异步任务 ID 从接口 CreateProxySessionKillTask 调用成功后取得。当前 product 只支持：redis。
     */
    async DescribeProxySessionKillTasks(req, cb) {
        return this.request("DescribeProxySessionKillTasks", req, cb);
    }
}
exports.Client = Client;

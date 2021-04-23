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
        super("dbbrain.tencentcloudapi.com", "2019-10-16", clientConfig);
    }
    /**
     * 查询安全审计日志导出文件下载链接。目前日志文件下载仅提供腾讯云内网地址，请通过广州地域的腾讯云服务器进行下载。
     */
    async DescribeSecurityAuditLogDownloadUrls(req, cb) {
        return this.request("DescribeSecurityAuditLogDownloadUrls", req, cb);
    }
    /**
     * 获取发送邮件的配置， 包括数据库巡检的邮件配置以及定期生成健康报告的邮件发送配置。Region统一选择广州。
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
     * 获取实例Top库的实时空间统计信息，默认返回按大小排序。
     */
    async DescribeTopSpaceSchemas(req, cb) {
        return this.request("DescribeTopSpaceSchemas", req, cb);
    }
    /**
     * 查询健康报告生成任务列表。
     */
    async DescribeDBDiagReportTasks(req, cb) {
        return this.request("DescribeDBDiagReportTasks", req, cb);
    }
    /**
     * 获取邮件发送联系组的相关信息。
     */
    async DescribeAllUserGroup(req, cb) {
        return this.request("DescribeAllUserGroup", req, cb);
    }
    /**
     * 获取慢日志统计柱状图。
     */
    async DescribeSlowLogTimeSeriesStats(req, cb) {
        return this.request("DescribeSlowLogTimeSeriesStats", req, cb);
    }
    /**
     * 获取慢日志来源地址统计分布图。
     */
    async DescribeSlowLogUserHostStats(req, cb) {
        return this.request("DescribeSlowLogUserHostStats", req, cb);
    }
    /**
     * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
     */
    async DescribeTopSpaceTables(req, cb) {
        return this.request("DescribeTopSpaceTables", req, cb);
    }
    /**
     * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
     */
    async DescribeDBSpaceStatus(req, cb) {
        return this.request("DescribeDBSpaceStatus", req, cb);
    }
    /**
     * 创建邮件配置。其中入参ProfileType表示所创建配置的类型，ProfileType 取值包括：dbScan_mail_configuration（数据库巡检邮件配置）、scheduler_mail_configuration（定期生成健康报告的邮件发送配置）。Region统一选择广州，和实例所属地域无关。
     */
    async CreateMailProfile(req, cb) {
        return this.request("CreateMailProfile", req, cb);
    }
    /**
     * 根据实例ID获取指定时间段（30分钟）的健康得分，以及异常扣分项。
     */
    async DescribeHealthScore(req, cb) {
        return this.request("DescribeHealthScore", req, cb);
    }
    /**
     * 创建安全审计日志导出任务。
     */
    async CreateSecurityAuditLogExportTask(req, cb) {
        return this.request("CreateSecurityAuditLogExportTask", req, cb);
    }
    /**
     * 删除安全审计日志导出任务。
     */
    async DeleteSecurityAuditLogExportTasks(req, cb) {
        return this.request("DeleteSecurityAuditLogExportTasks", req, cb);
    }
    /**
     * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
     */
    async DescribeSlowLogTopSqls(req, cb) {
        return this.request("DescribeSlowLogTopSqls", req, cb);
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
     * 添加邮件接收联系人的姓名， 邮件地址，返回值为添加成功的联系人id。Region统一选择广州。
     */
    async AddUserContact(req, cb) {
        return this.request("AddUserContact", req, cb);
    }
    /**
     * 获取实例占用空间最大的前几个库在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     */
    async DescribeTopSpaceSchemaTimeSeries(req, cb) {
        return this.request("DescribeTopSpaceSchemaTimeSeries", req, cb);
    }
    /**
     * 获取SQL优化建议。
     */
    async DescribeUserSqlAdvice(req, cb) {
        return this.request("DescribeUserSqlAdvice", req, cb);
    }
    /**
     * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     */
    async DescribeTopSpaceTableTimeSeries(req, cb) {
        return this.request("DescribeTopSpaceTableTimeSeries", req, cb);
    }
    /**
     * 修改实例巡检开关。
     */
    async ModifyDiagDBInstanceConf(req, cb) {
        return this.request("ModifyDiagDBInstanceConf", req, cb);
    }
    /**
     * 创建健康报告的浏览地址。
     */
    async CreateDBDiagReportUrl(req, cb) {
        return this.request("CreateDBDiagReportUrl", req, cb);
    }
}
exports.Client = Client;

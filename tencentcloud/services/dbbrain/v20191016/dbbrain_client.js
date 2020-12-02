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
     * 获取慢日志统计柱状图。
     */
    async DescribeSlowLogTimeSeriesStats(req, cb) {
        return this.request("DescribeSlowLogTimeSeriesStats", req, cb);
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
     * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
     */
    async DescribeDBSpaceStatus(req, cb) {
        return this.request("DescribeDBSpaceStatus", req, cb);
    }
    /**
     * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
     */
    async DescribeTopSpaceTables(req, cb) {
        return this.request("DescribeTopSpaceTables", req, cb);
    }
    /**
     * 创建健康报告，并可以选择是否发送邮件。
     */
    async CreateDBDiagReportTask(req, cb) {
        return this.request("CreateDBDiagReportTask", req, cb);
    }
    /**
     * 创建邮件配置。其中入参ProfileType表示所创建配置的类型，ProfileType 取值包括：dbScan_mail_configuration（数据库巡检邮件配置）、scheduler_mail_configuration（定期生成邮件配置）。
     */
    async CreateMailProfile(req, cb) {
        return this.request("CreateMailProfile", req, cb);
    }
    /**
     * 修改实例巡检开关。
     */
    async ModifyDiagDBInstanceConf(req, cb) {
        return this.request("ModifyDiagDBInstanceConf", req, cb);
    }
    /**
     * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     */
    async DescribeTopSpaceTableTimeSeries(req, cb) {
        return this.request("DescribeTopSpaceTableTimeSeries", req, cb);
    }
    /**
     * 获取邮件发送联系组的相关信息。
     */
    async DescribeAllUserGroup(req, cb) {
        return this.request("DescribeAllUserGroup", req, cb);
    }
    /**
     * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
     */
    async DescribeSlowLogTopSqls(req, cb) {
        return this.request("DescribeSlowLogTopSqls", req, cb);
    }
}
exports.Client = Client;

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
 * acp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("acp.tencentcloudapi.com", "2022-01-05", clientConfig);
    }
    /**
     * 创建应用合规隐私诊断任务
     */
    async CreateAppScanTask(req, cb) {
        return this.request("CreateAppScanTask", req, cb);
    }
    /**
     * App应用合规隐私诊断重试任务
     */
    async CreateAppScanTaskRepeat(req, cb) {
        return this.request("CreateAppScanTaskRepeat", req, cb);
    }
    /**
     * 获取子渠道的App合规诊断任务报告url
     */
    async DescribeChannelTaskReportUrl(req, cb) {
        return this.request("DescribeChannelTaskReportUrl", req, cb);
    }
    /**
     * 查询应用合规平台用户资源的使用情况
     */
    async DescribeResourceUsageInfo(req, cb) {
        return this.request("DescribeResourceUsageInfo", req, cb);
    }
    /**
     * 查询App隐私合规诊断任务状态
     */
    async DescribeScanTaskStatus(req, cb) {
        return this.request("DescribeScanTaskStatus", req, cb);
    }
    /**
     * 获取App合规诊断任务报告url
     */
    async DescribeScanTaskReportUrl(req, cb) {
        return this.request("DescribeScanTaskReportUrl", req, cb);
    }
    /**
     * 获取应用合规文件上传凭证，用于上传诊断文件
     */
    async DescribeFileTicket(req, cb) {
        return this.request("DescribeFileTicket", req, cb);
    }
    /**
     * 获取App隐私合规诊断任务列表
     */
    async DescribeScanTaskList(req, cb) {
        return this.request("DescribeScanTaskList", req, cb);
    }
}
exports.Client = Client;

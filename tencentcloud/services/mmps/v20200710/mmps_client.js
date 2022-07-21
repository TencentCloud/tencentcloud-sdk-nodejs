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
 * mmps client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("mmps.tencentcloudapi.com", "2020-07-10", clientConfig);
    }
    /**
     * 创建小程序隐私合规诊断任务
     */
    async CreateAppScanTask(req, cb) {
        return this.request("CreateAppScanTask", req, cb);
    }
    /**
     * 创建小程序安全深度诊断任务
     */
    async CreateFlySecMiniAppProfessionalScanTask(req, cb) {
        return this.request("CreateFlySecMiniAppProfessionalScanTask", req, cb);
    }
    /**
     * 查询指定小程序版本的翼扬诊断安全得分
     */
    async DescribeFlySecMiniAppScanReportList(req, cb) {
        return this.request("DescribeFlySecMiniAppScanReportList", req, cb);
    }
    /**
     * 获取翼扬诊断任务报告链接地址
     */
    async DescribeFlySecMiniAppReportUrl(req, cb) {
        return this.request("DescribeFlySecMiniAppReportUrl", req, cb);
    }
    /**
     * 查询翼扬安全诊断任务状态
     */
    async DescribeFlySecMiniAppScanTaskStatus(req, cb) {
        return this.request("DescribeFlySecMiniAppScanTaskStatus", req, cb);
    }
    /**
     * 查询翼扬安全资源使用情况
     */
    async DescribeResourceUsageInfo(req, cb) {
        return this.request("DescribeResourceUsageInfo", req, cb);
    }
    /**
     * 创建小程序翼扬安全的基础或深度诊断任务
     */
    async CreateFlySecMiniAppScanTask(req, cb) {
        return this.request("CreateFlySecMiniAppScanTask", req, cb);
    }
    /**
     * 重新提交基础诊断任务
     */
    async CreateFlySecMiniAppScanTaskRepeat(req, cb) {
        return this.request("CreateFlySecMiniAppScanTaskRepeat", req, cb);
    }
    /**
     * 获取小程序合规诊断任务报告url
     */
    async DescribeScanTaskReportUrl(req, cb) {
        return this.request("DescribeScanTaskReportUrl", req, cb);
    }
    /**
     * 获取小程序隐私合规诊断任务列表
     */
    async DescribeScanTaskList(req, cb) {
        return this.request("DescribeScanTaskList", req, cb);
    }
    /**
     * 获取翼扬安全诊断任务列表
     */
    async DescribeFlySecMiniAppScanTaskList(req, cb) {
        return this.request("DescribeFlySecMiniAppScanTaskList", req, cb);
    }
    /**
     * 查询小程序隐私合规诊断任务状态
     */
    async DescribeScanTaskStatus(req, cb) {
        return this.request("DescribeScanTaskStatus", req, cb);
    }
    /**
     * 查询翼扬安全基础诊断资源使用情况
     */
    async DescribeBasicDiagnosisResourceUsageInfo(req, cb) {
        return this.request("DescribeBasicDiagnosisResourceUsageInfo", req, cb);
    }
    /**
     * 小程序隐私合规诊断重试任务
     */
    async CreateAppScanTaskRepeat(req, cb) {
        return this.request("CreateAppScanTaskRepeat", req, cb);
    }
    /**
     * 获取用户提交的基础诊断任务参数信息
     */
    async DescribeFlySecMiniAppScanTaskParam(req, cb) {
        return this.request("DescribeFlySecMiniAppScanTaskParam", req, cb);
    }
}
exports.Client = Client;

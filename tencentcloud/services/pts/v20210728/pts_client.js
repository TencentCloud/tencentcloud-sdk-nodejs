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
 * pts client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("pts.tencentcloudapi.com", "2021-07-28", clientConfig);
    }
    /**
     * 查询场景配置并附带已经执行的任务内容
     */
    async DescribeScenarioWithJobs(req, cb) {
        return this.request("DescribeScenarioWithJobs", req, cb);
    }
    /**
     * 删除环境
     */
    async DeleteEnvironments(req, cb) {
        return this.request("DeleteEnvironments", req, cb);
    }
    /**
     * 更新任务
     */
    async UpdateJob(req, cb) {
        return this.request("UpdateJob", req, cb);
    }
    /**
     * 更新定时任务
     */
    async UpdateCronJob(req, cb) {
        return this.request("UpdateCronJob", req, cb);
    }
    /**
     * 创建并启动任务
     */
    async StartJob(req, cb) {
        return this.request("StartJob", req, cb);
    }
    /**
     * 更新场景
     */
    async UpdateScenario(req, cb) {
        return this.request("UpdateScenario", req, cb);
    }
    /**
     * 查询文件列表
     */
    async DescribeFiles(req, cb) {
        return this.request("DescribeFiles", req, cb);
    }
    /**
     * 删除项目
     */
    async DeleteProjects(req, cb) {
        return this.request("DeleteProjects", req, cb);
    }
    /**
     * 查询指标，返回固定时间点指标内容
     */
    async DescribeSampleQuery(req, cb) {
        return this.request("DescribeSampleQuery", req, cb);
    }
    /**
     * 查询任务列表
     */
    async DescribeJobs(req, cb) {
        return this.request("DescribeJobs", req, cb);
    }
    /**
     * 创建场景
     */
    async CreateScenario(req, cb) {
        return this.request("CreateScenario", req, cb);
    }
    /**
     * 删除文件
     */
    async DeleteFiles(req, cb) {
        return this.request("DeleteFiles", req, cb);
    }
    /**
     * 查询地域列表
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 查询检查点汇总信息
     */
    async DescribeCheckSummary(req, cb) {
        return this.request("DescribeCheckSummary", req, cb);
    }
    /**
     * 批量查询指标矩阵
     */
    async DescribeSampleMatrixBatchQuery(req, cb) {
        return this.request("DescribeSampleMatrixBatchQuery", req, cb);
    }
    /**
     * 查询指标矩阵
     */
    async DescribeSampleMatrixQuery(req, cb) {
        return this.request("DescribeSampleMatrixQuery", req, cb);
    }
    /**
     * 查询请求汇总信息
     */
    async DescribeRequestSummary(req, cb) {
        return this.request("DescribeRequestSummary", req, cb);
    }
    /**
     * 删除场景
     */
    async DeleteScenarios(req, cb) {
        return this.request("DeleteScenarios", req, cb);
    }
    /**
     * 查询项目列表
     */
    async DescribeProjects(req, cb) {
        return this.request("DescribeProjects", req, cb);
    }
    /**
     * 返回告警历史项的列表
     */
    async DescribeAlertRecords(req, cb) {
        return this.request("DescribeAlertRecords", req, cb);
    }
    /**
     * 批量查询指标，返回固定时间点指标内容
     */
    async DescribeSampleBatchQuery(req, cb) {
        return this.request("DescribeSampleBatchQuery", req, cb);
    }
    /**
     * 查询告警通知接收组
     */
    async DescribeAlertChannels(req, cb) {
        return this.request("DescribeAlertChannels", req, cb);
    }
    /**
     * 查询系统支持的指标
     */
    async DescribeAvailableMetrics(req, cb) {
        return this.request("DescribeAvailableMetrics", req, cb);
    }
    /**
     * 查询标签内容
     */
    async DescribeLabelValues(req, cb) {
        return this.request("DescribeLabelValues", req, cb);
    }
    /**
     * 停止定时任务
     */
    async AbortCronJobs(req, cb) {
        return this.request("AbortCronJobs", req, cb);
    }
    /**
     * 更新关联文件场景
     */
    async UpdateFileScenarioRelation(req, cb) {
        return this.request("UpdateFileScenarioRelation", req, cb);
    }
    /**
     * 重启状态为已中止的定时任务
     */
    async RestartCronJobs(req, cb) {
        return this.request("RestartCronJobs", req, cb);
    }
    /**
     * 更新环境
     */
    async UpdateEnvironment(req, cb) {
        return this.request("UpdateEnvironment", req, cb);
    }
    /**
     * 创建告警通知接收组
     */
    async CreateAlertChannel(req, cb) {
        return this.request("CreateAlertChannel", req, cb);
    }
    /**
     * 查看环境列表
     */
    async DescribeEnvironments(req, cb) {
        return this.request("DescribeEnvironments", req, cb);
    }
    /**
     * 删除任务
     */
    async DeleteJobs(req, cb) {
        return this.request("DeleteJobs", req, cb);
    }
    /**
     * 查询错误详情汇总信息
     */
    async DescribeErrorSummary(req, cb) {
        return this.request("DescribeErrorSummary", req, cb);
    }
    /**
     * 压测过程日志包括引擎输出日志及用户输出日志
     */
    async DescribeNormalLogs(req, cb) {
        return this.request("DescribeNormalLogs", req, cb);
    }
    /**
     * 复制场景
     */
    async CopyScenario(req, cb) {
        return this.request("CopyScenario", req, cb);
    }
    /**
     * 查询采样日志
     */
    async DescribeSampleLogs(req, cb) {
        return this.request("DescribeSampleLogs", req, cb);
    }
    /**
     * 创建环境
     */
    async CreateEnvironment(req, cb) {
        return this.request("CreateEnvironment", req, cb);
    }
    /**
     * 查询场景列表
     */
    async DescribeScenarios(req, cb) {
        return this.request("DescribeScenarios", req, cb);
    }
    /**
     * 删除定时任务
     */
    async DeleteCronJobs(req, cb) {
        return this.request("DeleteCronJobs", req, cb);
    }
    /**
     * 列出定时任务，非必填数组为空就默认全选
     */
    async DescribeCronJobs(req, cb) {
        return this.request("DescribeCronJobs", req, cb);
    }
    /**
     * 删除告警通知接收组
     */
    async DeleteAlertChannel(req, cb) {
        return this.request("DeleteAlertChannel", req, cb);
    }
    /**
     * 创建文件
     */
    async CreateFile(req, cb) {
        return this.request("CreateFile", req, cb);
    }
    /**
     * 调整任务的目标RPS
     */
    async AdjustJobSpeed(req, cb) {
        return this.request("AdjustJobSpeed", req, cb);
    }
    /**
     * 创建项目
     */
    async CreateProject(req, cb) {
        return this.request("CreateProject", req, cb);
    }
    /**
     * 停止任务
     */
    async AbortJob(req, cb) {
        return this.request("AbortJob", req, cb);
    }
    /**
     * 更新项目
     */
    async UpdateProject(req, cb) {
        return this.request("UpdateProject", req, cb);
    }
    /**
     * 生成临时COS凭证
     */
    async GenerateTmpKey(req, cb) {
        return this.request("GenerateTmpKey", req, cb);
    }
    /**
     * 查询指标所有的label及values值
     */
    async DescribeMetricLabelWithValues(req, cb) {
        return this.request("DescribeMetricLabelWithValues", req, cb);
    }
    /**
     * 创建定时任务
     */
    async CreateCronJob(req, cb) {
        return this.request("CreateCronJob", req, cb);
    }
}
exports.Client = Client;

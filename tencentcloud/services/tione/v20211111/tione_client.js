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
 * tione client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tione.tencentcloudapi.com", "2021-11-11", clientConfig);
    }
    /**
     * 查询模型版本
     */
    async DescribeTrainingModelVersion(req, cb) {
        return this.request("DescribeTrainingModelVersion", req, cb);
    }
    /**
     * 删除数据集
     */
    async DeleteDataset(req, cb) {
        return this.request("DeleteDataset", req, cb);
    }
    /**
     * 本接口(DescribeBillingSpecsPrice)用于查询计费项价格。
     */
    async DescribeBillingSpecsPrice(req, cb) {
        return this.request("DescribeBillingSpecsPrice", req, cb);
    }
    /**
     * 训练任务列表
     */
    async DescribeTrainingTasks(req, cb) {
        return this.request("DescribeTrainingTasks", req, cb);
    }
    /**
     * 训练框架列表
     */
    async DescribeTrainingFrameworks(req, cb) {
        return this.request("DescribeTrainingFrameworks", req, cb);
    }
    /**
     * 导入模型
     */
    async CreateTrainingModel(req, cb) {
        return this.request("CreateTrainingModel", req, cb);
    }
    /**
     * 创建模型训练任务
     */
    async CreateTrainingTask(req, cb) {
        return this.request("CreateTrainingTask", req, cb);
    }
    /**
     * 查询非结构化数据集详情
     */
    async DescribeDatasetDetailUnstructured(req, cb) {
        return this.request("DescribeDatasetDetailUnstructured", req, cb);
    }
    /**
     * 模型列表
     */
    async DescribeTrainingModels(req, cb) {
        return this.request("DescribeTrainingModels", req, cb);
    }
    /**
     * 训练任务pod列表
     */
    async DescribeTrainingTaskPods(req, cb) {
        return this.request("DescribeTrainingTaskPods", req, cb);
    }
    /**
     * 查询训练自定义指标
     */
    async DescribeTrainingMetrics(req, cb) {
        return this.request("DescribeTrainingMetrics", req, cb);
    }
    /**
     * 删除模型
     */
    async DeleteTrainingModel(req, cb) {
        return this.request("DeleteTrainingModel", req, cb);
    }
    /**
     * 启动模型训练任务
     */
    async StartTrainingTask(req, cb) {
        return this.request("StartTrainingTask", req, cb);
    }
    /**
     * 创建数据集
     */
    async CreateDataset(req, cb) {
        return this.request("CreateDataset", req, cb);
    }
    /**
     * 上报训练自定义指标
     */
    async PushTrainingMetrics(req, cb) {
        return this.request("PushTrainingMetrics", req, cb);
    }
    /**
     * 停止模型训练任务
     */
    async StopTrainingTask(req, cb) {
        return this.request("StopTrainingTask", req, cb);
    }
    /**
     * 模型版本列表
     */
    async DescribeTrainingModelVersions(req, cb) {
        return this.request("DescribeTrainingModelVersions", req, cb);
    }
    /**
     * 查询结构化数据集详情
     */
    async DescribeDatasetDetailStructured(req, cb) {
        return this.request("DescribeDatasetDetailStructured", req, cb);
    }
    /**
     * 获取训练、推理、Notebook服务的日志
     */
    async DescribeLogs(req, cb) {
        return this.request("DescribeLogs", req, cb);
    }
    /**
     * 查询数据集列表
     */
    async DescribeDatasets(req, cb) {
        return this.request("DescribeDatasets", req, cb);
    }
    /**
     * 训练任务详情
     */
    async DescribeTrainingTask(req, cb) {
        return this.request("DescribeTrainingTask", req, cb);
    }
    /**
     * 删除训练任务
     */
    async DeleteTrainingTask(req, cb) {
        return this.request("DeleteTrainingTask", req, cb);
    }
    /**
     * 查询最近上报的训练自定义指标
     */
    async DescribeLatestTrainingMetrics(req, cb) {
        return this.request("DescribeLatestTrainingMetrics", req, cb);
    }
    /**
     * 删除模型版本
     */
    async DeleteTrainingModelVersion(req, cb) {
        return this.request("DeleteTrainingModelVersion", req, cb);
    }
    /**
     * 查询资源组详情
     */
    async DescribeBillingResourceGroups(req, cb) {
        return this.request("DescribeBillingResourceGroups", req, cb);
    }
    /**
     * 查询推理镜像模板
     */
    async DescribeInferTemplates(req, cb) {
        return this.request("DescribeInferTemplates", req, cb);
    }
}
exports.Client = Client;

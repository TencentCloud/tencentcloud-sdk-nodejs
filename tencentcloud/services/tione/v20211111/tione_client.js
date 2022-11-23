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
     * 删除跑批任务
     */
    async DeleteBatchTask(req, cb) {
        return this.request("DeleteBatchTask", req, cb);
    }
    /**
     * 本接口(DescribeBillingSpecs)用于查询计费项列表
     */
    async DescribeBillingSpecs(req, cb) {
        return this.request("DescribeBillingSpecs", req, cb);
    }
    /**
     * 导入模型
     */
    async CreateTrainingModel(req, cb) {
        return this.request("CreateTrainingModel", req, cb);
    }
    /**
     * 本接口(DescribeBillingSpecsPrice)用于查询计费项价格。
     */
    async DescribeBillingSpecsPrice(req, cb) {
        return this.request("DescribeBillingSpecsPrice", req, cb);
    }
    /**
     * 展示服务的调用信息
     */
    async DescribeModelServiceCallInfo(req, cb) {
        return this.request("DescribeModelServiceCallInfo", req, cb);
    }
    /**
     * 增量更新在线推理服务的部分配置，不更新的配置项不需要传入
     */
    async ModifyModelServicePartialConfig(req, cb) {
        return this.request("ModifyModelServicePartialConfig", req, cb);
    }
    /**
     * 保存优化模型
     */
    async CreateOptimizedModel(req, cb) {
        return this.request("CreateOptimizedModel", req, cb);
    }
    /**
     * 训练任务列表
     */
    async DescribeTrainingTasks(req, cb) {
        return this.request("DescribeTrainingTasks", req, cb);
    }
    /**
     * 查询单个服务组
     */
    async DescribeModelServiceGroup(req, cb) {
        return this.request("DescribeModelServiceGroup", req, cb);
    }
    /**
     * 查询单个服务
     */
    async DescribeModelService(req, cb) {
        return this.request("DescribeModelService", req, cb);
    }
    /**
     * 训练框架列表
     */
    async DescribeTrainingFrameworks(req, cb) {
        return this.request("DescribeTrainingFrameworks", req, cb);
    }
    /**
     * 删除数据集
     */
    async DeleteDataset(req, cb) {
        return this.request("DeleteDataset", req, cb);
    }
    /**
     * 创建模型训练任务
     */
    async CreateTrainingTask(req, cb) {
        return this.request("CreateTrainingTask", req, cb);
    }
    /**
     * 停止跑批任务
     */
    async StopBatchTask(req, cb) {
        return this.request("StopBatchTask", req, cb);
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
     * 用于查询模型服务能否开启热更新
     */
    async DescribeModelServiceHotUpdated(req, cb) {
        return this.request("DescribeModelServiceHotUpdated", req, cb);
    }
    /**
     * 查询模型优化任务详情
     */
    async DescribeModelAccelerateTask(req, cb) {
        return this.request("DescribeModelAccelerateTask", req, cb);
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
     * 更新推理服务组流量分配
     */
    async ModifyServiceGroupWeights(req, cb) {
        return this.request("ModifyServiceGroupWeights", req, cb);
    }
    /**
     * 创建数据集
     */
    async CreateDataset(req, cb) {
        return this.request("CreateDataset", req, cb);
    }
    /**
     * 查询跑批实例列表
     */
    async DescribeBatchTaskInstances(req, cb) {
        return this.request("DescribeBatchTaskInstances", req, cb);
    }
    /**
     * 查询模型加速引擎版本列表
     */
    async DescribeModelAccEngineVersions(req, cb) {
        return this.request("DescribeModelAccEngineVersions", req, cb);
    }
    /**
     * 停止模型训练任务
     */
    async StopTrainingTask(req, cb) {
        return this.request("StopTrainingTask", req, cb);
    }
    /**
     * 启动模型训练任务
     */
    async StartTrainingTask(req, cb) {
        return this.request("StartTrainingTask", req, cb);
    }
    /**
     * 删除模型加速任务
     */
    async DeleteModelAccelerateTask(req, cb) {
        return this.request("DeleteModelAccelerateTask", req, cb);
    }
    /**
     * 列举API
     */
    async DescribeAPIConfigs(req, cb) {
        return this.request("DescribeAPIConfigs", req, cb);
    }
    /**
     * 根据服务组id删除服务组下所有模型服务
     */
    async DeleteModelServiceGroup(req, cb) {
        return this.request("DeleteModelServiceGroup", req, cb);
    }
    /**
     * 上报训练自定义指标
     */
    async PushTrainingMetrics(req, cb) {
        return this.request("PushTrainingMetrics", req, cb);
    }
    /**
     * 批量预测任务列表信息
     */
    async DescribeBatchTasks(req, cb) {
        return this.request("DescribeBatchTasks", req, cb);
    }
    /**
     * 模型版本列表
     */
    async DescribeTrainingModelVersions(req, cb) {
        return this.request("DescribeTrainingModelVersions", req, cb);
    }
    /**
     * 查询模型加速任务列表
     */
    async DescribeModelAccelerateTasks(req, cb) {
        return this.request("DescribeModelAccelerateTasks", req, cb);
    }
    /**
     * 用于创建、发布一个新的模型服务
     */
    async CreateModelService(req, cb) {
        return this.request("CreateModelService", req, cb);
    }
    /**
     * 查询数据集列表
     */
    async DescribeDatasets(req, cb) {
        return this.request("DescribeDatasets", req, cb);
    }
    /**
     * 获取训练、推理、Notebook服务的日志
     */
    async DescribeLogs(req, cb) {
        return this.request("DescribeLogs", req, cb);
    }
    /**
     * 根据服务id删除模型服务
     */
    async DeleteModelService(req, cb) {
        return this.request("DeleteModelService", req, cb);
    }
    /**
     * 查询结构化数据集详情
     */
    async DescribeDatasetDetailStructured(req, cb) {
        return this.request("DescribeDatasetDetailStructured", req, cb);
    }
    /**
     * 重启模型加速任务
     */
    async RestartModelAccelerateTask(req, cb) {
        return this.request("RestartModelAccelerateTask", req, cb);
    }
    /**
     * 查询多个服务
     */
    async DescribeModelServices(req, cb) {
        return this.request("DescribeModelServices", req, cb);
    }
    /**
     * 用于更新模型服务
     */
    async ModifyModelService(req, cb) {
        return this.request("ModifyModelService", req, cb);
    }
    /**
     * 训练任务详情
     */
    async DescribeTrainingTask(req, cb) {
        return this.request("DescribeTrainingTask", req, cb);
    }
    /**
     * 创建跑批任务
     */
    async CreateBatchTask(req, cb) {
        return this.request("CreateBatchTask", req, cb);
    }
    /**
     * 删除训练任务
     */
    async DeleteTrainingTask(req, cb) {
        return this.request("DeleteTrainingTask", req, cb);
    }
    /**
     * 批量创建模型加速任务
     */
    async CreateBatchModelAccTasks(req, cb) {
        return this.request("CreateBatchModelAccTasks", req, cb);
    }
    /**
     * 查询跑批任务
     */
    async DescribeBatchTask(req, cb) {
        return this.request("DescribeBatchTask", req, cb);
    }
    /**
     * 查询最近上报的训练自定义指标
     */
    async DescribeLatestTrainingMetrics(req, cb) {
        return this.request("DescribeLatestTrainingMetrics", req, cb);
    }
    /**
     * 展示服务的历史版本
     */
    async DescribeModelServiceHistory(req, cb) {
        return this.request("DescribeModelServiceHistory", req, cb);
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
    /**
     * 列举在线推理服务组
     */
    async DescribeModelServiceGroups(req, cb) {
        return this.request("DescribeModelServiceGroups", req, cb);
    }
    /**
     * 停止模型加速任务
     */
    async StopModelAccelerateTask(req, cb) {
        return this.request("StopModelAccelerateTask", req, cb);
    }
}
exports.Client = Client;

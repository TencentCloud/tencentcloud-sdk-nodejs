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
     * 查询单个服务
     */
    async DescribeModelService(req, cb) {
        return this.request("DescribeModelService", req, cb);
    }
    /**
     * 本接口(DescribeBillingSpecs) 提供查询计费项列表
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
     * 本接口(DescribeBillingSpecsPrice)用于查询按量计费计费项价格。
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
     * 训练任务列表
     */
    async DescribeTrainingTasks(req, cb) {
        return this.request("DescribeTrainingTasks", req, cb);
    }
    /**
     * 获取内置镜像列表
     */
    async DescribeBuildInImages(req, cb) {
        return this.request("DescribeBuildInImages", req, cb);
    }
    /**
     * 启动Notebook
     */
    async StartNotebook(req, cb) {
        return this.request("StartNotebook", req, cb);
    }
    /**
     * 删除数据集
     */
    async DeleteDataset(req, cb) {
        return this.request("DeleteDataset", req, cb);
    }
    /**
     * 删除Notebook
     */
    async DeleteNotebook(req, cb) {
        return this.request("DeleteNotebook", req, cb);
    }
    /**
     * 训练任务详情
     */
    async DescribeTrainingTask(req, cb) {
        return this.request("DescribeTrainingTask", req, cb);
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
     * 该接口支持与自行部署的大模型的聊天。
     */
    async ChatCompletion(req, cb) {
        return this.request("ChatCompletion", req, cb);
    }
    /**
     * 模型加速之后的模型版本列表
     */
    async DescribeModelAccelerateVersions(req, cb) {
        return this.request("DescribeModelAccelerateVersions", req, cb);
    }
    /**
     * 创建数据集
     */
    async CreateDataset(req, cb) {
        return this.request("CreateDataset", req, cb);
    }
    /**
     * 创建Notebook
     */
    async CreateNotebook(req, cb) {
        return this.request("CreateNotebook", req, cb);
    }
    /**
     * 查询单个服务组
     */
    async DescribeModelServiceGroup(req, cb) {
        return this.request("DescribeModelServiceGroup", req, cb);
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
     * 模型版本列表
     */
    async DescribeTrainingModelVersions(req, cb) {
        return this.request("DescribeTrainingModelVersions", req, cb);
    }
    /**
     * 用于创建、发布一个新的模型服务
     */
    async CreateModelService(req, cb) {
        return this.request("CreateModelService", req, cb);
    }
    /**
     * 生成Notebook访问链接
     */
    async CreatePresignedNotebookUrl(req, cb) {
        return this.request("CreatePresignedNotebookUrl", req, cb);
    }
    /**
     * 根据服务id删除模型服务
     */
    async DeleteModelService(req, cb) {
        return this.request("DeleteModelService", req, cb);
    }
    /**
     * 查询数据集列表
     */
    async DescribeDatasets(req, cb) {
        return this.request("DescribeDatasets", req, cb);
    }
    /**
     * 查询资源组节点运行中的任务
     */
    async DescribeBillingResourceInstanceRunningJobs(req, cb) {
        return this.request("DescribeBillingResourceInstanceRunningJobs", req, cb);
    }
    /**
     * 用于更新模型服务
     */
    async ModifyModelService(req, cb) {
        return this.request("ModifyModelService", req, cb);
    }
    /**
     * Notebook列表
     */
    async DescribeNotebooks(req, cb) {
        return this.request("DescribeNotebooks", req, cb);
    }
    /**
     * 删除模型
     */
    async DeleteTrainingModel(req, cb) {
        return this.request("DeleteTrainingModel", req, cb);
    }
    /**
     * 停止模型加速任务
     */
    async StopModelAccelerateTask(req, cb) {
        return this.request("StopModelAccelerateTask", req, cb);
    }
    /**
     * 查询资源组节点列表
     */
    async DescribeBillingResourceGroup(req, cb) {
        return this.request("DescribeBillingResourceGroup", req, cb);
    }
    /**
     * Notebook详情
     */
    async DescribeNotebook(req, cb) {
        return this.request("DescribeNotebook", req, cb);
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
     * 停止Notebook
     */
    async StopNotebook(req, cb) {
        return this.request("StopNotebook", req, cb);
    }
}
exports.Client = Client;

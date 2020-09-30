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
 * tia client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tia.tencentcloudapi.com", "2018-02-26", clientConfig);
    }
    /**
     * 部署模型，用以对外提供服务。有两种部署模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
     */
    async CreateModel(req, cb) {
        return this.request("CreateModel", req, cb);
    }
    /**
     * 列举训练任务
     */
    async ListJobs(req, cb) {
        return this.request("ListJobs", req, cb);
    }
    /**
     * 创建训练任务
     */
    async CreateJob(req, cb) {
        return this.request("CreateJob", req, cb);
    }
    /**
     * 描述已经部署的某个模型。而模型部署有两种模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
     */
    async DescribeModel(req, cb) {
        return this.request("DescribeModel", req, cb);
    }
    /**
     * 查询 TI-A 训练任务的日志
     */
    async QueryLogs(req, cb) {
        return this.request("QueryLogs", req, cb);
    }
    /**
     * 用以列举已经部署的模型。而部署有两种模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。不同部署模式下的模型分开列出。
     */
    async ListModels(req, cb) {
        return this.request("ListModels", req, cb);
    }
    /**
     * 删除训练任务
     */
    async DeleteJob(req, cb) {
        return this.request("DeleteJob", req, cb);
    }
    /**
     * 删除指定的部署模型。模型有两种部署模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
     */
    async DeleteModel(req, cb) {
        return this.request("DeleteModel", req, cb);
    }
    /**
     * 获取训练任务详情
     */
    async DescribeJob(req, cb) {
        return this.request("DescribeJob", req, cb);
    }
    /**
     * 安装agent
     */
    async InstallAgent(req, cb) {
        return this.request("InstallAgent", req, cb);
    }
}
exports.Client = Client;

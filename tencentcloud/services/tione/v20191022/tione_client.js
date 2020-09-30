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
        super("tione.tencentcloudapi.com", "2019-10-22", clientConfig);
    }
    /**
     * 更新Notebook实例
     */
    async UpdateNotebookInstance(req, cb) {
        return this.request("UpdateNotebookInstance", req, cb);
    }
    /**
     * 查看notebook生命周期脚本列表
     */
    async DescribeNotebookLifecycleScripts(req, cb) {
        return this.request("DescribeNotebookLifecycleScripts", req, cb);
    }
    /**
     * 启动Notebook实例
     */
    async StartNotebookInstance(req, cb) {
        return this.request("StartNotebookInstance", req, cb);
    }
    /**
     * 删除notebook实例
     */
    async DeleteNotebookInstance(req, cb) {
        return this.request("DeleteNotebookInstance", req, cb);
    }
    /**
     * 查看notebook生命周期脚本详情
     */
    async DescribeNotebookLifecycleScript(req, cb) {
        return this.request("DescribeNotebookLifecycleScript", req, cb);
    }
    /**
     * 创建Notebook授权Url
     */
    async CreatePresignedNotebookInstanceUrl(req, cb) {
        return this.request("CreatePresignedNotebookInstanceUrl", req, cb);
    }
    /**
     * 创建存储库
     */
    async CreateCodeRepository(req, cb) {
        return this.request("CreateCodeRepository", req, cb);
    }
    /**
     * 更新notebook生命周期脚本
     */
    async UpdateNotebookLifecycleScript(req, cb) {
        return this.request("UpdateNotebookLifecycleScript", req, cb);
    }
    /**
     * 查询训练任务
     */
    async DescribeTrainingJob(req, cb) {
        return this.request("DescribeTrainingJob", req, cb);
    }
    /**
     * 停止Notebook实例
     */
    async StopNotebookInstance(req, cb) {
        return this.request("StopNotebookInstance", req, cb);
    }
    /**
     * 创建Notebook实例
     */
    async CreateNotebookInstance(req, cb) {
        return this.request("CreateNotebookInstance", req, cb);
    }
    /**
     * 查询存储库详情
     */
    async DescribeCodeRepository(req, cb) {
        return this.request("DescribeCodeRepository", req, cb);
    }
    /**
     * 查询训练任务列表
     */
    async DescribeTrainingJobs(req, cb) {
        return this.request("DescribeTrainingJobs", req, cb);
    }
    /**
     * 删除存储库
     */
    async DeleteCodeRepository(req, cb) {
        return this.request("DeleteCodeRepository", req, cb);
    }
    /**
     * 查询Notebook概览数据
     */
    async DescribeNotebookSummary(req, cb) {
        return this.request("DescribeNotebookSummary", req, cb);
    }
    /**
     * 创建Notebook生命周期脚本
     */
    async CreateNotebookLifecycleScript(req, cb) {
        return this.request("CreateNotebookLifecycleScript", req, cb);
    }
    /**
     * 删除Notebook生命周期脚本
     */
    async DeleteNotebookLifecycleScript(req, cb) {
        return this.request("DeleteNotebookLifecycleScript", req, cb);
    }
    /**
     * 查询Notebook实例详情
     */
    async DescribeNotebookInstance(req, cb) {
        return this.request("DescribeNotebookInstance", req, cb);
    }
    /**
     * 更新存储库
     */
    async UpdateCodeRepository(req, cb) {
        return this.request("UpdateCodeRepository", req, cb);
    }
    /**
     * 查询Notebook实例列表
     */
    async DescribeNotebookInstances(req, cb) {
        return this.request("DescribeNotebookInstances", req, cb);
    }
    /**
     * 创建训练任务
     */
    async CreateTrainingJob(req, cb) {
        return this.request("CreateTrainingJob", req, cb);
    }
    /**
     * 查询存储库列表
     */
    async DescribeCodeRepositories(req, cb) {
        return this.request("DescribeCodeRepositories", req, cb);
    }
    /**
     * 停止训练任务
     */
    async StopTrainingJob(req, cb) {
        return this.request("StopTrainingJob", req, cb);
    }
}
exports.Client = Client;

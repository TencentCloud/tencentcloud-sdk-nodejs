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
 * cfg client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cfg.tencentcloudapi.com", "2021-08-20", clientConfig);
    }
    /**
     * 从经验库创建演练
     */
    async CreateTaskFromTemplate(req, cb) {
        return this.request("CreateTaskFromTemplate", req, cb);
    }
    /**
     * 查询经验库
     */
    async DescribeTemplate(req, cb) {
        return this.request("DescribeTemplate", req, cb);
    }
    /**
     * 触发混沌演练任务的动作，对于实例进行演练操作
     */
    async ExecuteTaskInstance(req, cb) {
        return this.request("ExecuteTaskInstance", req, cb);
    }
    /**
     * 查询经验库列表
     */
    async DescribeTemplateList(req, cb) {
        return this.request("DescribeTemplateList", req, cb);
    }
    /**
     * 修改任务运行状态
     */
    async ModifyTaskRunStatus(req, cb) {
        return this.request("ModifyTaskRunStatus", req, cb);
    }
    /**
     * 查询任务列表
     */
    async DescribeTaskList(req, cb) {
        return this.request("DescribeTaskList", req, cb);
    }
    /**
     * 获取演练过程中的所有日志
     */
    async DescribeTaskExecuteLogs(req, cb) {
        return this.request("DescribeTaskExecuteLogs", req, cb);
    }
    /**
     * 查询任务
     */
    async DescribeTask(req, cb) {
        return this.request("DescribeTask", req, cb);
    }
    /**
     * 执行任务
     */
    async ExecuteTask(req, cb) {
        return this.request("ExecuteTask", req, cb);
    }
    /**
     * 删除任务
     */
    async DeleteTask(req, cb) {
        return this.request("DeleteTask", req, cb);
    }
}
exports.Client = Client;

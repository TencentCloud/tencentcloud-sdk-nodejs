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
 * teo client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("teo.tencentcloudapi.com", "2022-01-06", clientConfig);
    }
    /**
     * 创建清除缓存任务
     */
    async CreatePurgeTask(req, cb) {
        return this.request("CreatePurgeTask", req, cb);
    }
    /**
     * 查询清除缓存历史记录
     */
    async DescribePurgeTasks(req, cb) {
        return this.request("DescribePurgeTasks", req, cb);
    }
    /**
     * 创建预热任务
     */
    async CreatePrefetchTask(req, cb) {
        return this.request("CreatePrefetchTask", req, cb);
    }
    /**
     * 查询预热任务状态
     */
    async DescribePrefetchTasks(req, cb) {
        return this.request("DescribePrefetchTasks", req, cb);
    }
    /**
     * 用户查询用户站点信息列表，支持分页
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
}
exports.Client = Client;

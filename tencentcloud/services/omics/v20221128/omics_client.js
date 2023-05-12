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
 * omics client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("omics.tencentcloudapi.com", "2022-11-28", clientConfig);
    }
    /**
     * 查询表格行数据。
     */
    async DescribeTablesRows(req, cb) {
        return this.request("DescribeTablesRows", req, cb);
    }
    /**
     * 查询环境列表。
     */
    async DescribeEnvironments(req, cb) {
        return this.request("DescribeEnvironments", req, cb);
    }
    /**
     * 导入表格文件。
     */
    async ImportTableFile(req, cb) {
        return this.request("ImportTableFile", req, cb);
    }
    /**
     * 查询任务详情。
     */
    async GetRunStatus(req, cb) {
        return this.request("GetRunStatus", req, cb);
    }
    /**
     * 运行应用。
     */
    async RunApplication(req, cb) {
        return this.request("RunApplication", req, cb);
    }
    /**
     * 创建组学平台计算环境。
     */
    async CreateEnvironment(req, cb) {
        return this.request("CreateEnvironment", req, cb);
    }
    /**
     * 重试任务。
     */
    async RetryRuns(req, cb) {
        return this.request("RetryRuns", req, cb);
    }
    /**
     * 查询任务列表。
     */
    async DescribeRuns(req, cb) {
        return this.request("DescribeRuns", req, cb);
    }
    /**
     * 查询任务批次列表。
     */
    async DescribeRunGroups(req, cb) {
        return this.request("DescribeRunGroups", req, cb);
    }
    /**
     * 删除环境。
     */
    async DeleteEnvironment(req, cb) {
        return this.request("DeleteEnvironment", req, cb);
    }
    /**
     * 查询表格。
     */
    async DescribeTables(req, cb) {
        return this.request("DescribeTables", req, cb);
    }
    /**
     * 查询作业详情。
     */
    async GetRunCalls(req, cb) {
        return this.request("GetRunCalls", req, cb);
    }
}
exports.Client = Client;

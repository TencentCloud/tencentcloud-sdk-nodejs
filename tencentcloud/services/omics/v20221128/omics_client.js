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
     * 查询作业详情。
     */
    async GetRunCalls(req, cb) {
        return this.request("GetRunCalls", req, cb);
    }
    /**
     * 导入表格文件。
     */
    async ImportTableFile(req, cb) {
        return this.request("ImportTableFile", req, cb);
    }
    /**
     * 运行应用。
     */
    async RunApplication(req, cb) {
        return this.request("RunApplication", req, cb);
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
     * 查询任务详情。
     */
    async GetRunStatus(req, cb) {
        return this.request("GetRunStatus", req, cb);
    }
}
exports.Client = Client;

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
 * dlc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dlc.tencentcloudapi.com", "2021-01-25", clientConfig);
    }
    /**
     * 本接口（CreateTask）用于创建sql查询任务。
     */
    async CreateTask(req, cb) {
        return this.request("CreateTask", req, cb);
    }
    /**
     * 本接口（DescribeDatabases）用于查询数据库列表。
     */
    async DescribeDatabases(req, cb) {
        return this.request("DescribeDatabases", req, cb);
    }
    /**
     * 本接口（DescribeViews）用于查询数据视图列表。
     */
    async DescribeViews(req, cb) {
        return this.request("DescribeViews", req, cb);
    }
    /**
     * 查询单个表的详细信息。
     */
    async DescribeTable(req, cb) {
        return this.request("DescribeTable", req, cb);
    }
    /**
     * 本接口（CreateTable）用于生成建表SQL。
     */
    async CreateTable(req, cb) {
        return this.request("CreateTable", req, cb);
    }
    /**
     * 该接口（DescribleTasks）用于查询任务列表
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 该接口（DeleteScript）用于删除sql脚本。
     */
    async DeleteScript(req, cb) {
        return this.request("DeleteScript", req, cb);
    }
    /**
     * 该接口（CreateScript）用于创建sql脚本。
     */
    async CreateScript(req, cb) {
        return this.request("CreateScript", req, cb);
    }
    /**
     * 该接口（DescribeScripts）用于获取所有SQL查询。
     */
    async DescribeScripts(req, cb) {
        return this.request("DescribeScripts", req, cb);
    }
    /**
     * 本接口（CreateDatabase）用于生成建库SQL语句。
     */
    async CreateDatabase(req, cb) {
        return this.request("CreateDatabase", req, cb);
    }
    /**
     * 本接口（DescribleTables）用于查询数据表列表。
     */
    async DescribeTables(req, cb) {
        return this.request("DescribeTables", req, cb);
    }
}
exports.Client = Client;

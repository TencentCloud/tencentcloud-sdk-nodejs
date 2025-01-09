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
 * config client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("config.tencentcloudapi.com", "2022-08-02", clientConfig);
    }
    /**
     * 账号组获取规则列表
     */
    async ListAggregateConfigRules(req, cb) {
        return this.request("ListAggregateConfigRules", req, cb);
    }
    /**
     * 获取资源列表
     */
    async ListDiscoveredResources(req, cb) {
        return this.request("ListDiscoveredResources", req, cb);
    }
    /**
     * 获取规则列表
     */
    async ListConfigRules(req, cb) {
        return this.request("ListConfigRules", req, cb);
    }
    /**
     * 账号组资源详情
     */
    async DescribeAggregateDiscoveredResource(req, cb) {
        return this.request("DescribeAggregateDiscoveredResource", req, cb);
    }
    /**
     * 资源详情
     */
    async DescribeDiscoveredResource(req, cb) {
        return this.request("DescribeDiscoveredResource", req, cb);
    }
    /**
     * 账号组获取资源列表
     */
    async ListAggregateDiscoveredResources(req, cb) {
        return this.request("ListAggregateDiscoveredResources", req, cb);
    }
    /**
     * 上报自定义规则评估结果
     */
    async PutEvaluations(req, cb) {
        return this.request("PutEvaluations", req, cb);
    }
}
exports.Client = Client;

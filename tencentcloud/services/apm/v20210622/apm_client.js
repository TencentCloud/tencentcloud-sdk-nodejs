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
 * apm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("apm.tencentcloudapi.com", "2021-06-22", clientConfig);
    }
    /**
     * 业务购买APM实例，调用该接口创建
     */
    async CreateApmInstance(req, cb) {
        return this.request("CreateApmInstance", req, cb);
    }
    /**
     * 拉取通用指标列表
     */
    async DescribeMetricRecords(req, cb) {
        return this.request("DescribeMetricRecords", req, cb);
    }
    /**
     * APM实例列表拉取
     */
    async DescribeApmInstances(req, cb) {
        return this.request("DescribeApmInstances", req, cb);
    }
    /**
     * 获取Apm Agent信息
     */
    async DescribeApmAgent(req, cb) {
        return this.request("DescribeApmAgent", req, cb);
    }
    /**
     * 服务概览数据拉取
     */
    async DescribeServiceOverview(req, cb) {
        return this.request("DescribeServiceOverview", req, cb);
    }
}
exports.Client = Client;

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
 * advisor client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("advisor.tencentcloudapi.com", "2020-07-21", clientConfig);
    }
    /**
     * 查询评估项风险实例列表
     */
    async DescribeTaskStrategyRisks(req, cb) {
        return this.request("DescribeTaskStrategyRisks", req, cb);
    }
    /**
     * 用于查询评估项的信息
     */
    async DescribeStrategies(req, cb) {
        return this.request("DescribeStrategies", req, cb);
    }
}
exports.Client = Client;

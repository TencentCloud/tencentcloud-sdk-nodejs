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
 * tse client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tse.tencentcloudapi.com", "2020-12-07", clientConfig);
    }
    /**
     * 用于查询微服务引擎实例列表
     */
    async DescribeSREInstances(req, cb) {
        return this.request("DescribeSREInstances", req, cb);
    }
    /**
     * 管理配置
     */
    async ManageConfig(req, cb) {
        return this.request("ManageConfig", req, cb);
    }
    /**
     * 查询微服务注册引擎实例访问地址
     */
    async DescribeSREInstanceAccessAddress(req, cb) {
        return this.request("DescribeSREInstanceAccessAddress", req, cb);
    }
    /**
     * 查看配置项
     */
    async DescribeConfig(req, cb) {
        return this.request("DescribeConfig", req, cb);
    }
}
exports.Client = Client;

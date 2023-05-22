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
 * csxg client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("csxg.tencentcloudapi.com", "2023-03-03", clientConfig);
    }
    /**
     * 修改5G入云服务
     */
    async Modify5GInstanceAttribute(req, cb) {
        return this.request("Modify5GInstanceAttribute", req, cb);
    }
    /**
     * 删除5G入云服务
     */
    async Delete5GInstance(req, cb) {
        return this.request("Delete5GInstance", req, cb);
    }
    /**
     * 创建5G入云服务接口
     */
    async Create5GInstance(req, cb) {
        return this.request("Create5GInstance", req, cb);
    }
    /**
     * 查询5G入云服务
     */
    async Describe5GInstances(req, cb) {
        return this.request("Describe5GInstances", req, cb);
    }
    /**
     * 查询APN信息
     */
    async Describe5GAPNs(req, cb) {
        return this.request("Describe5GAPNs", req, cb);
    }
}
exports.Client = Client;

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
 * tem client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tem.tencentcloudapi.com", "2020-12-21", clientConfig);
    }
    /**
     * 编辑命名空间
     */
    async ModifyNamespace(req, cb) {
        return this.request("ModifyNamespace", req, cb);
    }
    /**
     * 生成Cos临时秘钥
     */
    async CreateCosToken(req, cb) {
        return this.request("CreateCosToken", req, cb);
    }
    /**
     * 创建或者更新 Ingress 规则
     */
    async ModifyIngress(req, cb) {
        return this.request("ModifyIngress", req, cb);
    }
    /**
     * 获取租户命名空间列表
     */
    async DescribeNamespaces(req, cb) {
        return this.request("DescribeNamespaces", req, cb);
    }
    /**
     * 创建命名空间
     */
    async CreateNamespace(req, cb) {
        return this.request("CreateNamespace", req, cb);
    }
}
exports.Client = Client;

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
 * weilingwith client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("weilingwith.tencentcloudapi.com", "2023-04-27", clientConfig);
    }
    /**
     * 查询指定空间关联的应用列表
     */
    async DescribeApplicationList(req, cb) {
        return this.request("DescribeApplicationList", req, cb);
    }
    /**
     * 查询接口列表
     */
    async DescribeInterfaceList(req, cb) {
        return this.request("DescribeInterfaceList", req, cb);
    }
    /**
     * 查询项目空间人员列表
     */
    async DescribeWorkspaceUserList(req, cb) {
        return this.request("DescribeWorkspaceUserList", req, cb);
    }
    /**
     * 查询边缘应用凭证
     */
    async DescribeEdgeApplicationToken(req, cb) {
        return this.request("DescribeEdgeApplicationToken", req, cb);
    }
    /**
     * 获取租户下的空间列表
     */
    async DescribeWorkspaceList(req, cb) {
        return this.request("DescribeWorkspaceList", req, cb);
    }
}
exports.Client = Client;

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
 * ioa client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ioa.tencentcloudapi.com", "2022-06-01", clientConfig);
    }
    /**
     * 查询账号根分组详情。对应“用户与授权管理”里内置不可见的全网根账号组，所有新建的目录，都挂在该全网根账号组下。
     */
    async DescribeRootAccountGroup(req, cb) {
        return this.request("DescribeRootAccountGroup", req, cb);
    }
    /**
     * 查询满足条件的终端数据详情，私有化调用path为：/capi/Assets/Device/DescribeDevices
     */
    async DescribeDevices(req, cb) {
        return this.request("DescribeDevices", req, cb);
    }
    /**
     * 创建终端自定义分组，私有化调用path为：/capi/Assets/Device/CreateDeviceVirtualGroup
     */
    async CreateDeviceVirtualGroup(req, cb) {
        return this.request("CreateDeviceVirtualGroup", req, cb);
    }
    /**
     * 以分页的方式查询账号分组列表，私有化调用path为：/capi/Assets/DescribeAccountGroups
     */
    async DescribeAccountGroups(req, cb) {
        return this.request("DescribeAccountGroups", req, cb);
    }
    /**
     * 获取账号列表，支持分页，模糊搜索，私有化调用path为：/capi/Assets/Account/DescribeLocalAccounts
     */
    async DescribeLocalAccounts(req, cb) {
        return this.request("DescribeLocalAccounts", req, cb);
    }
}
exports.Client = Client;

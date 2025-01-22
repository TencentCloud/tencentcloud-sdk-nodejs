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
 * tccatalog client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tccatalog.tencentcloudapi.com", "2024-10-24", clientConfig);
    }
    /**
     * 获取Tcc数据目录列表
     */
    async DescribeTccCatalogs(req, cb) {
        return this.request("DescribeTccCatalogs", req, cb);
    }
    /**
     * 获取Tcc数据目录详情
     */
    async DescribeTccCatalog(req, cb) {
        return this.request("DescribeTccCatalog", req, cb);
    }
    /**
     * 绑定终端节点服务白名单用户
     */
    async BindTccVpcEndPointServiceWhiteList(req, cb) {
        return this.request("BindTccVpcEndPointServiceWhiteList", req, cb);
    }
    /**
     * 接受终端节点连接
     */
    async AcceptTccVpcEndPointConnect(req, cb) {
        return this.request("AcceptTccVpcEndPointConnect", req, cb);
    }
}
exports.Client = Client;

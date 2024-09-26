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
 * ca client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ca.tencentcloudapi.com", "2023-02-28", clientConfig);
    }
    /**
     * 下载验签报告url，url有效期默认12小时
     */
    async DescribeVerifyReport(req, cb) {
        return this.request("DescribeVerifyReport", req, cb);
    }
    /**
     * 文件上传接口
     */
    async UploadFile(req, cb) {
        return this.request("UploadFile", req, cb);
    }
    /**
     * 创建签名验证报告任务，此接口为异步盖章接口，盖章时效24小时。
     */
    async CreateVerifyReport(req, cb) {
        return this.request("CreateVerifyReport", req, cb);
    }
}
exports.Client = Client;

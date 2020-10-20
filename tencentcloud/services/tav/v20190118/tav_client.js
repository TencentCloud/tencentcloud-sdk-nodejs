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
 * tav client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tav.tencentcloudapi.com", "2019-01-18", clientConfig);
    }
    /**
     * tav文件上传扫描结果查询
     */
    async GetScanResult(req, cb) {
        return this.request("GetScanResult", req, cb);
    }
    /**
     * 通过文件哈希值获取文件黑白属性
     */
    async ScanFileHash(req, cb) {
        return this.request("ScanFileHash", req, cb);
    }
    /**
     * 获取TAV本地引擎
     */
    async GetLocalEngine(req, cb) {
        return this.request("GetLocalEngine", req, cb);
    }
    /**
     * tav文件上传扫描
     */
    async ScanFile(req, cb) {
        return this.request("ScanFile", req, cb);
    }
}
exports.Client = Client;

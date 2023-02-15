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
 * bma client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("bma.tencentcloudapi.com", "2022-11-15", clientConfig);
    }
    /**
     * 仿冒应用举报
     */
    async CreateBPFakeAPP(req, cb) {
        return this.request("CreateBPFakeAPP", req, cb);
    }
    /**
     * 仿冒网址举报
     */
    async CreateBPFakeURL(req, cb) {
        return this.request("CreateBPFakeURL", req, cb);
    }
    /**
     * 批量仿冒网址举报
     */
    async CreateBPFakeURLs(req, cb) {
        return this.request("CreateBPFakeURLs", req, cb);
    }
    /**
     * 批量仿冒应用举报
     */
    async CreateBPFakeAPPList(req, cb) {
        return this.request("CreateBPFakeAPPList", req, cb);
    }
}
exports.Client = Client;

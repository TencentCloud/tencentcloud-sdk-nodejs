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
 * tbp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tbp.tencentcloudapi.com", "2019-03-11", clientConfig);
    }
    /**
     * 对当前机器人的会话状态进行复位
     */
    async Reset(req, cb) {
        return this.request("Reset", req, cb);
    }
    /**
     * 创建机器人
     */
    async CreateBot(req, cb) {
        return this.request("CreateBot", req, cb);
    }
    /**
     * 会话重置接口。已废弃，推荐使用最新版TextReset接口。
     */
    async TextReset(req, cb) {
        return this.request("TextReset", req, cb);
    }
    /**
     * 接收调用侧的文本输入，返回应答文本。已废弃，推荐使用最新版TextProcess接口。
     */
    async TextProcess(req, cb) {
        return this.request("TextProcess", req, cb);
    }
}
exports.Client = Client;

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
 * vms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("vms.tencentcloudapi.com", "2020-09-02", clientConfig);
    }
    /**
     * 给用户发语音验证码（仅支持数字）。
     */
    async SendCodeVoice(req, cb) {
        return this.request("SendCodeVoice", req, cb);
    }
    /**
     * 给用户发送指定模板的语音通知。
     */
    async SendTtsVoice(req, cb) {
        return this.request("SendTtsVoice", req, cb);
    }
}
exports.Client = Client;

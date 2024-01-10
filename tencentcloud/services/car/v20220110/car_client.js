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
 * car client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("car.tencentcloudapi.com", "2022-01-10", clientConfig);
    }
    /**
     * 本接口用于申请并发。接口超时时间：20秒。
     */
    async ApplyConcurrent(req, cb) {
        return this.request("ApplyConcurrent", req, cb);
    }
    /**
     * 销毁会话。如果该会话开启了云端推流，那么销毁会话时会结束云端推流。
     */
    async DestroySession(req, cb) {
        return this.request("DestroySession", req, cb);
    }
    /**
     * 开始云端推流。云端推流 codec 根据客户端（SDK）能力来自动选择，默认优先顺序为 H265、H264、VP8、VP9。
     */
    async StartPublishStream(req, cb) {
        return this.request("StartPublishStream", req, cb);
    }
    /**
     * 停止云端推流
     */
    async StopPublishStream(req, cb) {
        return this.request("StopPublishStream", req, cb);
    }
    /**
     * 开始云端推流到指定URL。云端推流 codec 根据客户端（SDK）能力来自动选择，默认优先顺序为 H265、H264、VP8、VP9。该推流方式需要单独计费，详细计费方式请查看[指定地址推流费用说明](https://cloud.tencent.com/document/product/1547/72168#98ac188a-d122-4caf-88be-05268ecefdf6)
     */
    async StartPublishStreamWithURL(req, cb) {
        return this.request("StartPublishStreamWithURL", req, cb);
    }
    /**
     * 本接口用于创建会话。接口超时时间：5秒。
     */
    async CreateSession(req, cb) {
        return this.request("CreateSession", req, cb);
    }
}
exports.Client = Client;

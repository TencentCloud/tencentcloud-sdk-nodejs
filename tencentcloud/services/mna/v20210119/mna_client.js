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
 * mna client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("mna.tencentcloudapi.com", "2021-01-19", clientConfig);
    }
    /**
     * 移动网络停止Qos加速过程
     */
    async DeleteQos(req, cb) {
        return this.request("DeleteQos", req, cb);
    }
    /**
     * 移动网络发起Qos加速过程
     */
    async CreateQos(req, cb) {
        return this.request("CreateQos", req, cb);
    }
    /**
     * 获取Qos加速状态
     */
    async DescribeQos(req, cb) {
        return this.request("DescribeQos", req, cb);
    }
}
exports.Client = Client;

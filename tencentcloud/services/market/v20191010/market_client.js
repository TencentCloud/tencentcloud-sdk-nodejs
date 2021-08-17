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
 * market client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("market.tencentcloudapi.com", "2019-10-10", clientConfig);
    }
    /**
     * 该接口可以根据InstanceId查询实例的api的使用情况。

     */
    async GetUsagePlanUsageAmount(req, cb) {
        return this.request("GetUsagePlanUsageAmount", req, cb);
    }
    /**
     * 计量商品用量提醒，用于服务商调用云服务，云服务向客户发送提醒信息
     */
    async FlowProductRemind(req, cb) {
        return this.request("FlowProductRemind", req, cb);
    }
}
exports.Client = Client;

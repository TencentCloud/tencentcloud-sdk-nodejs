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
 * hunyuan client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("hunyuan.tencentcloudapi.com", "2023-09-01", clientConfig);
    }
    /**
     * 腾讯混元大模型高级版是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口为SSE协议。

 1.本接口暂不支持返回图片内容。
 2.默认单账号限制并发数为5路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3.请使用SDK调用本接口 ，SDK GitHub仓库examples/hunyuan/v20230901/目录有提供[参考示例](https://github.com/TencentCloud/tencentcloud-sdk-python/blob/master/examples/hunyuan/v20230901/chat_std.py)。
     */
    async ChatPro(req, cb) {
        return this.request("ChatPro", req, cb);
    }
    /**
     * 腾讯混元大模型标准版是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口为SSE协议。

 1.本接口暂不支持返回图片内容。
 2.默认单账号限制并发数为5路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3.请使用SDK调用本接口 ，SDK GitHub仓库examples/hunyuan/v20230901/目录有提供[参考示例](https://github.com/TencentCloud/tencentcloud-sdk-python/blob/master/examples/hunyuan/v20230901/chat_std.py)。
     */
    async ChatStd(req, cb) {
        return this.request("ChatStd", req, cb);
    }
    /**
     * 该接口用于计算文本对应Token数、字符数。
     */
    async GetTokenCount(req, cb) {
        return this.request("GetTokenCount", req, cb);
    }
}
exports.Client = Client;

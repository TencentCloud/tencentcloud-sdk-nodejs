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
 * ecc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ecc.tencentcloudapi.com", "2018-12-13", clientConfig);
    }
    /**
     * https://ecc.tencentcloudapi.com/?Action=EHOCR
图像识别批改接口
     */
    async EHOCR(req, cb) {
        return this.request("EHOCR", req, cb);
    }
    /**
     * 接口请求域名： ecc.tencentcloudapi.com
纯文本英语作文批改
     */
    async ECC(req, cb) {
        return this.request("ECC", req, cb);
    }
    /**
     * 异步任务结果查询接口
     */
    async DescribeTask(req, cb) {
        return this.request("DescribeTask", req, cb);
    }
    /**
     * https://ecc.tencentcloudapi.com/?Action=CorrectMultiImage
多图像识别批改接口
     */
    async CorrectMultiImage(req, cb) {
        return this.request("CorrectMultiImage", req, cb);
    }
}
exports.Client = Client;

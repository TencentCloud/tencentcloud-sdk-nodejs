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
 * tms client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tms.tencentcloudapi.com", "2020-07-13", clientConfig);
    }
    /**
     * 控制台识别统计
     */
    async DescribeTextStat(req, cb) {
        return this.request("DescribeTextStat", req, cb);
    }
    /**
     * 举报恶意账号
     */
    async AccountTipoffAccess(req, cb) {
        return this.request("AccountTipoffAccess", req, cb);
    }
    /**
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别可能令人反感、不安全或不适宜的文本内容，同时支持用户配置词库黑白名单，打击自定义识别类型的图片。
     */
    async TextModeration(req, cb) {
        return this.request("TextModeration", req, cb);
    }
    /**
     * 控制台获取用户词库列表
     */
    async DescribeTextLib(req, cb) {
        return this.request("DescribeTextLib", req, cb);
    }
}
exports.Client = Client;

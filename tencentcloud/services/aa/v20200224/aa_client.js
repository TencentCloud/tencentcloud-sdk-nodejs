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
 * aa client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("aa.tencentcloudapi.com", "2020-02-24", clientConfig);
    }
    /**
     * 腾讯云活动防刷（ActivityAntiRush，AA）是针对电商、O2O、P2P、游戏、支付等行业在促销活动中遇到“羊毛党”恶意刷取优惠福利的行为时，通过防刷引擎，精准识别出“薅羊毛”恶意行为的活动防刷服务，避免了企业被刷带来的巨大经济损失。
     */
    async QueryActivityAntiRush(req, cb) {
        return this.request("QueryActivityAntiRush", req, cb);
    }
    /**
     * 活动防刷、注册保护、登录保护等营销产品的高级版本
     */
    async ManageMarketingRisk(req, cb) {
        return this.request("ManageMarketingRisk", req, cb);
    }
    /**
     * 活动防刷高级版，支持对网赚众包、网赚防刷、引流反诈骗场景的检测识别
     */
    async QueryActivityAntiRushAdvanced(req, cb) {
        return this.request("QueryActivityAntiRushAdvanced", req, cb);
    }
}
exports.Client = Client;

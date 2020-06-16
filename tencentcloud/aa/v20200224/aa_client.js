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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const QueryActivityAntiRushResponse = models.QueryActivityAntiRushResponse;
const QueryActivityAntiRushRequest = models.QueryActivityAntiRushRequest;


/**
 * aa client
 * @class
 */
class AaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("aa.tencentcloudapi.com", "2020-02-24", credential, region, profile);
    }
    
    /**
     * 腾讯云活动防刷（ActivityAntiRush，AA）是针对电商、O2O、P2P、游戏、支付等行业在促销活动中遇到“羊毛党”恶意刷取优惠福利的行为时，通过防刷引擎，精准识别出“薅羊毛”恶意行为的活动防刷服务，避免了企业被刷带来的巨大经济损失。
     * @param {QueryActivityAntiRushRequest} req
     * @param {function(string, QueryActivityAntiRushResponse):void} cb
     * @public
     */
    QueryActivityAntiRush(req, cb) {
        let resp = new QueryActivityAntiRushResponse();
        this.request("QueryActivityAntiRush", req, resp, cb);
    }


}
module.exports = AaClient;

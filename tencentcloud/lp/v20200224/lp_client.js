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
const QueryLoginProtectionRequest = models.QueryLoginProtectionRequest;
const QueryLoginProtectionResponse = models.QueryLoginProtectionResponse;


/**
 * lp client
 * @class
 */
class LpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("lp.tencentcloudapi.com", "2020-02-24", credential, region, profile);
    }
    
    /**
     * 登录保护服务（LoginProtection，LP）针对网站和 APP 的用户登录场景，实时检测是否存在盗号、撞库等恶意登录行为，帮助开发者发现异常登录，降低恶意用户登录给业务带来的风险。
     * @param {QueryLoginProtectionRequest} req
     * @param {function(string, QueryLoginProtectionResponse):void} cb
     * @public
     */
    QueryLoginProtection(req, cb) {
        let resp = new QueryLoginProtectionResponse();
        this.request("QueryLoginProtection", req, resp, cb);
    }


}
module.exports = LpClient;

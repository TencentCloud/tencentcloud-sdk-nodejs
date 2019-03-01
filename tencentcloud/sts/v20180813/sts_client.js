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
const GetFederationTokenRequest = models.GetFederationTokenRequest;
const Credentials = models.Credentials;
const AssumeRoleRequest = models.AssumeRoleRequest;
const AssumeRoleResponse = models.AssumeRoleResponse;
const GetFederationTokenResponse = models.GetFederationTokenResponse;


/**
 * sts client
 * @class
 */
class StsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sts.tencentcloudapi.com", "2018-08-13", credential, region, profile);
    }
    
    /**
     * 获取联合身份临时访问凭证
     * @param {GetFederationTokenRequest} req
     * @param {function(string, GetFederationTokenResponse):void} cb
     * @public
     */
    GetFederationToken(req, cb) {
        let resp = new GetFederationTokenResponse();
        this.request("GetFederationToken", req, resp, cb);
    }

    /**
     * 申请扮演角色
     * @param {AssumeRoleRequest} req
     * @param {function(string, AssumeRoleResponse):void} cb
     * @public
     */
    AssumeRole(req, cb) {
        let resp = new AssumeRoleResponse();
        this.request("AssumeRole", req, resp, cb);
    }


}
module.exports = StsClient;

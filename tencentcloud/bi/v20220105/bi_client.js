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
const CreateEmbedTokenResponse = models.CreateEmbedTokenResponse;
const ApplyEmbedIntervalRequest = models.ApplyEmbedIntervalRequest;
const ApplyEmbedTokenInfo = models.ApplyEmbedTokenInfo;
const ApplyEmbedIntervalResponse = models.ApplyEmbedIntervalResponse;
const CreateEmbedTokenRequest = models.CreateEmbedTokenRequest;
const EmbedTokenInfo = models.EmbedTokenInfo;


/**
 * bi client
 * @class
 */
class BiClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bi.tencentcloudapi.com", "2022-01-05", credential, region, profile);
    }
    
    /**
     * 创建嵌出报表-强鉴权
     * @param {CreateEmbedTokenRequest} req
     * @param {function(string, CreateEmbedTokenResponse):void} cb
     * @public
     */
    CreateEmbedToken(req, cb) {
        let resp = new CreateEmbedTokenResponse();
        this.request("CreateEmbedToken", req, resp, cb);
    }

    /**
     * 申请延长Token可用时间接口-强鉴权
     * @param {ApplyEmbedIntervalRequest} req
     * @param {function(string, ApplyEmbedIntervalResponse):void} cb
     * @public
     */
    ApplyEmbedInterval(req, cb) {
        let resp = new ApplyEmbedIntervalResponse();
        this.request("ApplyEmbedInterval", req, resp, cb);
    }


}
module.exports = BiClient;

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
const RiskDetails = models.RiskDetails;
const TextModerationRequest = models.TextModerationRequest;
const DetailResults = models.DetailResults;
const AccountTipoffAccessRequest = models.AccountTipoffAccessRequest;
const Device = models.Device;
const TipoffResponse = models.TipoffResponse;
const AccountTipoffAccessResponse = models.AccountTipoffAccessResponse;
const TextModerationResponse = models.TextModerationResponse;
const User = models.User;


/**
 * tms client
 * @class
 */
class TmsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tms.tencentcloudapi.com", "2020-07-13", credential, region, profile);
    }
    
    /**
     * 举报恶意账号
     * @param {AccountTipoffAccessRequest} req
     * @param {function(string, AccountTipoffAccessResponse):void} cb
     * @public
     */
    AccountTipoffAccess(req, cb) {
        let resp = new AccountTipoffAccessResponse();
        this.request("AccountTipoffAccess", req, resp, cb);
    }

    /**
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。
     * @param {TextModerationRequest} req
     * @param {function(string, TextModerationResponse):void} cb
     * @public
     */
    TextModeration(req, cb) {
        let resp = new TextModerationResponse();
        this.request("TextModeration", req, resp, cb);
    }


}
module.exports = TmsClient;

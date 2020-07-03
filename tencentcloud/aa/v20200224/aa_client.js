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
const CrowdAntiRushInfo = models.CrowdAntiRushInfo;
const QueryActivityAntiRushResponse = models.QueryActivityAntiRushResponse;
const OutputActivityAntiRushAdvancedValue = models.OutputActivityAntiRushAdvancedValue;
const QQAccountInfo = models.QQAccountInfo;
const ManageMarketingRiskRequest = models.ManageMarketingRiskRequest;
const OutputManageMarketingRisk = models.OutputManageMarketingRisk;
const OnlineScamInfo = models.OnlineScamInfo;
const InputManageMarketingRisk = models.InputManageMarketingRisk;
const InputActivityAntiRushAdvanced = models.InputActivityAntiRushAdvanced;
const OtherAccountInfo = models.OtherAccountInfo;
const AccountInfo = models.AccountInfo;
const QueryActivityAntiRushAdvancedResponse = models.QueryActivityAntiRushAdvancedResponse;
const ManageMarketingRiskResponse = models.ManageMarketingRiskResponse;
const SponsorInfo = models.SponsorInfo;
const QueryActivityAntiRushRequest = models.QueryActivityAntiRushRequest;
const OutputActivityAntiRushAdvanced = models.OutputActivityAntiRushAdvanced;
const OutputManageMarketingRiskValue = models.OutputManageMarketingRiskValue;
const WeChatAccountInfo = models.WeChatAccountInfo;
const QueryActivityAntiRushAdvancedRequest = models.QueryActivityAntiRushAdvancedRequest;


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

    /**
     * 活动防刷、注册保护、登录保护等营销产品的高级版本
     * @param {ManageMarketingRiskRequest} req
     * @param {function(string, ManageMarketingRiskResponse):void} cb
     * @public
     */
    ManageMarketingRisk(req, cb) {
        let resp = new ManageMarketingRiskResponse();
        this.request("ManageMarketingRisk", req, resp, cb);
    }

    /**
     * 活动防刷高级版，支持对网赚众包、网赚防刷、引流反诈骗场景的检测识别
     * @param {QueryActivityAntiRushAdvancedRequest} req
     * @param {function(string, QueryActivityAntiRushAdvancedResponse):void} cb
     * @public
     */
    QueryActivityAntiRushAdvanced(req, cb) {
        let resp = new QueryActivityAntiRushAdvancedResponse();
        this.request("QueryActivityAntiRushAdvanced", req, resp, cb);
    }


}
module.exports = AaClient;

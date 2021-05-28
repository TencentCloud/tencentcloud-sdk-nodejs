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
const Filters = models.Filters;
const Overview = models.Overview;
const RiskDetails = models.RiskDetails;
const DescribeTextStatRequest = models.DescribeTextStatRequest;
const TextModerationRequest = models.TextModerationRequest;
const AccountTipoffAccessRequest = models.AccountTipoffAccessRequest;
const TextLib = models.TextLib;
const TrendCount = models.TrendCount;
const DescribeTextLibResponse = models.DescribeTextLibResponse;
const DetailResults = models.DetailResults;
const EvilCount = models.EvilCount;
const Device = models.Device;
const TipoffResponse = models.TipoffResponse;
const AccountTipoffAccessResponse = models.AccountTipoffAccessResponse;
const DescribeTextLibRequest = models.DescribeTextLibRequest;
const DescribeTextStatResponse = models.DescribeTextStatResponse;
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
     * 控制台识别统计
     * @param {DescribeTextStatRequest} req
     * @param {function(string, DescribeTextStatResponse):void} cb
     * @public
     */
    DescribeTextStat(req, cb) {
        let resp = new DescribeTextStatResponse();
        this.request("DescribeTextStat", req, resp, cb);
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
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别可能令人反感、不安全或不适宜的文本内容，同时支持用户配置词库黑白名单，打击自定义识别类型的图片。
     * @param {TextModerationRequest} req
     * @param {function(string, TextModerationResponse):void} cb
     * @public
     */
    TextModeration(req, cb) {
        let resp = new TextModerationResponse();
        this.request("TextModeration", req, resp, cb);
    }

    /**
     * 控制台获取用户词库列表
     * @param {DescribeTextLibRequest} req
     * @param {function(string, DescribeTextLibResponse):void} cb
     * @public
     */
    DescribeTextLib(req, cb) {
        let resp = new DescribeTextLibResponse();
        this.request("DescribeTextLib", req, resp, cb);
    }


}
module.exports = TmsClient;

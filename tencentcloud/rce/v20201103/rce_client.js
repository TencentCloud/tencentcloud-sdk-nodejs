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
const OutputManageMarketingRisk = models.OutputManageMarketingRisk;
const WeChatAccountInfo = models.WeChatAccountInfo;
const QQAccountInfo = models.QQAccountInfo;
const ManageMarketingRiskRequest = models.ManageMarketingRiskRequest;
const DescribeRiskTrendsRequest = models.DescribeRiskTrendsRequest;
const SponsorInfo = models.SponsorInfo;
const DescribeRiskAssessmentRequest = models.DescribeRiskAssessmentRequest;
const OnlineScamInfo = models.OnlineScamInfo;
const InputManageMarketingRisk = models.InputManageMarketingRisk;
const InputFrontRisk = models.InputFrontRisk;
const OutputFrontRisk = models.OutputFrontRisk;
const OtherAccountInfo = models.OtherAccountInfo;
const DescribeRiskTrendsResponse = models.DescribeRiskTrendsResponse;
const AccountInfo = models.AccountInfo;
const ManageMarketingRiskResponse = models.ManageMarketingRiskResponse;
const InputCryptoManageMarketingRisk = models.InputCryptoManageMarketingRisk;
const DescribeRiskAssessmentResponse = models.DescribeRiskAssessmentResponse;
const OutputFrontRiskValue = models.OutputFrontRiskValue;
const InputDetails = models.InputDetails;
const OutputManageMarketingRiskValue = models.OutputManageMarketingRiskValue;
const OutputFrontRiskData = models.OutputFrontRiskData;


/**
 * rce client
 * @class
 */
class RceClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("rce.tencentcloudapi.com", "2020-11-03", credential, region, profile);
    }
    
    /**
     * 以图表形式展示三种请求状态的趋势变化
     * @param {DescribeRiskTrendsRequest} req
     * @param {function(string, DescribeRiskTrendsResponse):void} cb
     * @public
     */
    DescribeRiskTrends(req, cb) {
        let resp = new DescribeRiskTrendsResponse();
        this.request("DescribeRiskTrends", req, resp, cb);
    }

    /**
     * 此接口用于查询风险评估结果
     * @param {DescribeRiskAssessmentRequest} req
     * @param {function(string, DescribeRiskAssessmentResponse):void} cb
     * @public
     */
    DescribeRiskAssessment(req, cb) {
        let resp = new DescribeRiskAssessmentResponse();
        this.request("DescribeRiskAssessment", req, resp, cb);
    }

    /**
     * 全栈式风控引擎（RiskControlEngine，RCE）是基于人工智能技术和腾讯20年风控实战沉淀，依托腾讯海量业务构建的风控引擎，以轻量级的 SaaS 服务方式接入，帮助您快速解决注册、登录、营销活动等关键场景遇到的欺诈问题，实时防御黑灰产作恶。
     * @param {ManageMarketingRiskRequest} req
     * @param {function(string, ManageMarketingRiskResponse):void} cb
     * @public
     */
    ManageMarketingRisk(req, cb) {
        let resp = new ManageMarketingRiskResponse();
        this.request("ManageMarketingRisk", req, resp, cb);
    }


}
module.exports = RceClient;

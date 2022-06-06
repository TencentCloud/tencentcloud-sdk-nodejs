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
const RiskDetailInfo = models.RiskDetailInfo;
const AntiFraudRecord = models.AntiFraudRecord;
const AntiFraudFilter = models.AntiFraudFilter;
const AntiFraudCryptoFilter = models.AntiFraudCryptoFilter;
const FinanceAntiFraudRecord = models.FinanceAntiFraudRecord;
const DescribeAntiFraudResponse = models.DescribeAntiFraudResponse;
const RiskDetail = models.RiskDetail;
const FinanceOtherModelScores = models.FinanceOtherModelScores;
const SimpleKindRiskDetail = models.SimpleKindRiskDetail;
const OtherModelScoresDetail = models.OtherModelScoresDetail;
const GetAntiFraudRequest = models.GetAntiFraudRequest;
const DescribeAntiFraudRequest = models.DescribeAntiFraudRequest;
const FinanceAntiFraudFilter = models.FinanceAntiFraudFilter;
const QueryAntiFraudResponse = models.QueryAntiFraudResponse;
const GetAntiFraudResponse = models.GetAntiFraudResponse;
const QueryAntiFraudRequest = models.QueryAntiFraudRequest;
const FinanceAntiFraudCryptoFilter = models.FinanceAntiFraudCryptoFilter;


/**
 * af client
 * @class
 */
class AfClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("af.tencentcloudapi.com", "2020-02-26", credential, region, profile);
    }
    
    /**
     * 天御反欺诈服务，主要应用于银行、证券、保险、消费金融等金融行业客户，通过腾讯的大数据风控能力，
可以准确识别恶意用户信息，解决客户在支付、活动、理财，风控等业务环节遇到的欺诈威胁，降低企业
的损失。
     * @param {QueryAntiFraudRequest} req
     * @param {function(string, QueryAntiFraudResponse):void} cb
     * @public
     */
    QueryAntiFraud(req, cb) {
        let resp = new QueryAntiFraudResponse();
        this.request("QueryAntiFraud", req, resp, cb);
    }

    /**
     * 反欺诈评分接口
     * @param {GetAntiFraudRequest} req
     * @param {function(string, GetAntiFraudResponse):void} cb
     * @public
     */
    GetAntiFraud(req, cb) {
        let resp = new GetAntiFraudResponse();
        this.request("GetAntiFraud", req, resp, cb);
    }

    /**
     * 天御反欺诈服务，主要应用于银行、证券、保险、消费金融等金融行业客户，通过腾讯的大数据风控能力，
可以准确识别恶意用户信息，解决客户在支付、活动、理财，风控等业务环节遇到的欺诈威胁，降低企业
的损失。
     * @param {DescribeAntiFraudRequest} req
     * @param {function(string, DescribeAntiFraudResponse):void} cb
     * @public
     */
    DescribeAntiFraud(req, cb) {
        let resp = new DescribeAntiFraudResponse();
        this.request("DescribeAntiFraud", req, resp, cb);
    }


}
module.exports = AfClient;

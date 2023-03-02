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
const OtherModelScores = models.OtherModelScores;
const TransportGeneralInterfaceInput = models.TransportGeneralInterfaceInput;
const TransportGeneralInterfaceOutput = models.TransportGeneralInterfaceOutput;
const QueryAntiFraudVipResponse = models.QueryAntiFraudVipResponse;
const RiskDetail = models.RiskDetail;
const TransportGeneralInterfaceRequest = models.TransportGeneralInterfaceRequest;
const SimpleKindRiskDetail = models.SimpleKindRiskDetail;
const GetAntiFraudVipResponse = models.GetAntiFraudVipResponse;
const TransportGeneralInterfaceResponse = models.TransportGeneralInterfaceResponse;
const AntiFraudVipCryptoFilter = models.AntiFraudVipCryptoFilter;
const AntiFraudVipFilter = models.AntiFraudVipFilter;
const QueryAntiFraudVipRequest = models.QueryAntiFraudVipRequest;
const GetAntiFraudVipRequest = models.GetAntiFraudVipRequest;
const AntiFraudVipRecord = models.AntiFraudVipRecord;


/**
 * afc client
 * @class
 */
class AfcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("afc.tencentcloudapi.com", "2020-02-26", credential, region, profile);
    }
    
    /**
     * 天御反欺诈服务，主要应用于银行、证券、保险、P2P等金融行业客户，通过腾讯的大数据风控能力，
可以准确识别恶意用户信息，解决客户在支付、活动、理财，风控等业务环节遇到的欺诈威胁，降低企业
的损失。
     * @param {QueryAntiFraudVipRequest} req
     * @param {function(string, QueryAntiFraudVipResponse):void} cb
     * @public
     */
    QueryAntiFraudVip(req, cb) {
        let resp = new QueryAntiFraudVipResponse();
        this.request("QueryAntiFraudVip", req, resp, cb);
    }

    /**
     * 反欺诈VIP评分接口
     * @param {GetAntiFraudVipRequest} req
     * @param {function(string, GetAntiFraudVipResponse):void} cb
     * @public
     */
    GetAntiFraudVip(req, cb) {
        let resp = new GetAntiFraudVipResponse();
        this.request("GetAntiFraudVip", req, resp, cb);
    }

    /**
     * 天御信鸽取数平台接口
     * @param {TransportGeneralInterfaceRequest} req
     * @param {function(string, TransportGeneralInterfaceResponse):void} cb
     * @public
     */
    TransportGeneralInterface(req, cb) {
        let resp = new TransportGeneralInterfaceResponse();
        this.request("TransportGeneralInterface", req, resp, cb);
    }


}
module.exports = AfcClient;

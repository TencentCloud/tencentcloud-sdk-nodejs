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
const GetTokenResponse = models.GetTokenResponse;
const QueryDevAndRiskRequest = models.QueryDevAndRiskRequest;
const DevInfoQ = models.DevInfoQ;
const RiskDetail = models.RiskDetail;
const RiskInfo = models.RiskInfo;
const GetOpenIdRequest = models.GetOpenIdRequest;
const QueryDevAndRiskResponse = models.QueryDevAndRiskResponse;
const GetTokenRequest = models.GetTokenRequest;
const GetOpenIdResponse = models.GetOpenIdResponse;


/**
 * rkp client
 * @class
 */
class RkpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("rkp.tencentcloudapi.com", "2019-12-09", credential, region, profile);
    }
    
    /**
     * 根据DevicceToken查询OpenID。
     * @param {GetOpenIdRequest} req
     * @param {function(string, GetOpenIdResponse):void} cb
     * @public
     */
    GetOpenId(req, cb) {
        let resp = new GetOpenIdResponse();
        this.request("GetOpenId", req, resp, cb);
    }

    /**
     * 获取token接口。
     * @param {GetTokenRequest} req
     * @param {function(string, GetTokenResponse):void} cb
     * @public
     */
    GetToken(req, cb) {
        let resp = new GetTokenResponse();
        this.request("GetToken", req, resp, cb);
    }

    /**
     * 腾讯天御设备风险查询接口，输入由客户应用自主采集的设备信息， 通过腾讯大数据风控能力，可以准确根据输入设备信息，还原设备库中的设备ID，并且识别设备的风险，解决客户业务过程中的设备风险，降低企业损失。
     * @param {QueryDevAndRiskRequest} req
     * @param {function(string, QueryDevAndRiskResponse):void} cb
     * @public
     */
    QueryDevAndRisk(req, cb) {
        let resp = new QueryDevAndRiskResponse();
        this.request("QueryDevAndRisk", req, resp, cb);
    }


}
module.exports = RkpClient;

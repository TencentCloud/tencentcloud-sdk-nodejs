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
const DescribeTrustedIDResponse = models.DescribeTrustedIDResponse;
const DescribeFraudUltimateRequest = models.DescribeFraudUltimateRequest;
const DescribeFraudPremiumResponse = models.DescribeFraudPremiumResponse;
const DescribeFraudBaseRequest = models.DescribeFraudBaseRequest;
const DescribeFraudBaseResponse = models.DescribeFraudBaseResponse;
const DescribeTrustedIDRequest = models.DescribeTrustedIDRequest;
const DescribeFraudPremiumRequest = models.DescribeFraudPremiumRequest;
const DescribeFraudUltimateResponse = models.DescribeFraudUltimateResponse;
const RiskInfo = models.RiskInfo;


/**
 * tds client
 * @class
 */
class TdsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tds.tencentcloudapi.com", "2022-08-01", credential, region, profile);
    }
    
    /**
     * 查询设备风险
     * @param {DescribeFraudBaseRequest} req
     * @param {function(string, DescribeFraudBaseResponse):void} cb
     * @public
     */
    DescribeFraudBase(req, cb) {
        let resp = new DescribeFraudBaseResponse();
        this.request("DescribeFraudBase", req, resp, cb);
    }

    /**
     * 查询设备标识
     * @param {DescribeTrustedIDRequest} req
     * @param {function(string, DescribeTrustedIDResponse):void} cb
     * @public
     */
    DescribeTrustedID(req, cb) {
        let resp = new DescribeTrustedIDResponse();
        this.request("DescribeTrustedID", req, resp, cb);
    }

    /**
     * 查询设备标识及风险
     * @param {DescribeFraudPremiumRequest} req
     * @param {function(string, DescribeFraudPremiumResponse):void} cb
     * @public
     */
    DescribeFraudPremium(req, cb) {
        let resp = new DescribeFraudPremiumResponse();
        this.request("DescribeFraudPremium", req, resp, cb);
    }

    /**
     * 查询设备标识及风险（旗舰版）
     * @param {DescribeFraudUltimateRequest} req
     * @param {function(string, DescribeFraudUltimateResponse):void} cb
     * @public
     */
    DescribeFraudUltimate(req, cb) {
        let resp = new DescribeFraudUltimateResponse();
        this.request("DescribeFraudUltimate", req, resp, cb);
    }


}
module.exports = TdsClient;

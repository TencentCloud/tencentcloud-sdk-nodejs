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
const EvaluateUserRiskRequest = models.EvaluateUserRiskRequest;
const DeviceDetailInfo = models.DeviceDetailInfo;
const UniversalAccountInfo = models.UniversalAccountInfo;
const MarketingInfo = models.MarketingInfo;
const DeviceFingerprintInfo = models.DeviceFingerprintInfo;
const AccountInfo = models.AccountInfo;
const UserInfo = models.UserInfo;
const EvaluateUserRiskResponse = models.EvaluateUserRiskResponse;
const EvaluationResult = models.EvaluationResult;


/**
 * trdp client
 * @class
 */
class TrdpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trdp.tencentcloudapi.com", "2022-07-26", credential, region, profile);
    }
    
    /**
     * 用户风险质量接口
     * @param {EvaluateUserRiskRequest} req
     * @param {function(string, EvaluateUserRiskResponse):void} cb
     * @public
     */
    EvaluateUserRisk(req, cb) {
        let resp = new EvaluateUserRiskResponse();
        this.request("EvaluateUserRisk", req, resp, cb);
    }


}
module.exports = TrdpClient;

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
const DescribeStockEstimationResponse = models.DescribeStockEstimationResponse;
const DescribeNewUserAcquisitionRequest = models.DescribeNewUserAcquisitionRequest;
const Score = models.Score;
const UserInfos = models.UserInfos;
const DescribeStockEstimationRequest = models.DescribeStockEstimationRequest;
const DescribeNewUserAcquisitionResponse = models.DescribeNewUserAcquisitionResponse;


/**
 * pds client
 * @class
 */
class PdsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("pds.tencentcloudapi.com", "2021-07-01", credential, region, profile);
    }
    
    /**
     * 查询存量判断服务
     * @param {DescribeStockEstimationRequest} req
     * @param {function(string, DescribeStockEstimationResponse):void} cb
     * @public
     */
    DescribeStockEstimation(req, cb) {
        let resp = new DescribeStockEstimationResponse();
        this.request("DescribeStockEstimation", req, resp, cb);
    }

    /**
     * 判断新用户信誉值
     * @param {DescribeNewUserAcquisitionRequest} req
     * @param {function(string, DescribeNewUserAcquisitionResponse):void} cb
     * @public
     */
    DescribeNewUserAcquisition(req, cb) {
        let resp = new DescribeNewUserAcquisitionResponse();
        this.request("DescribeNewUserAcquisition", req, resp, cb);
    }


}
module.exports = PdsClient;

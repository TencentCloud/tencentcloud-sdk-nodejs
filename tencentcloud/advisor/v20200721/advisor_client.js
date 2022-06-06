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
const DescribeStrategiesResponse = models.DescribeStrategiesResponse;
const DescribeTaskStrategyRisksRequest = models.DescribeTaskStrategyRisksRequest;
const DescribeStrategie = models.DescribeStrategie;
const DescribeTaskStrategyRisksResponse = models.DescribeTaskStrategyRisksResponse;
const KeyValue = models.KeyValue;
const RiskFieldsDesc = models.RiskFieldsDesc;
const DescribeStrategiesCondition = models.DescribeStrategiesCondition;
const DescribeStrategiesRequest = models.DescribeStrategiesRequest;


/**
 * advisor client
 * @class
 */
class AdvisorClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("advisor.tencentcloudapi.com", "2020-07-21", credential, region, profile);
    }
    
    /**
     * 查询评估项风险实例列表
     * @param {DescribeTaskStrategyRisksRequest} req
     * @param {function(string, DescribeTaskStrategyRisksResponse):void} cb
     * @public
     */
    DescribeTaskStrategyRisks(req, cb) {
        let resp = new DescribeTaskStrategyRisksResponse();
        this.request("DescribeTaskStrategyRisks", req, resp, cb);
    }

    /**
     * 用于查询评估项的信息
     * @param {DescribeStrategiesRequest} req
     * @param {function(string, DescribeStrategiesResponse):void} cb
     * @public
     */
    DescribeStrategies(req, cb) {
        let resp = new DescribeStrategiesResponse();
        this.request("DescribeStrategies", req, resp, cb);
    }


}
module.exports = AdvisorClient;

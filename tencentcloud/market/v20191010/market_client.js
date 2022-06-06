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
const GetUsagePlanUsageAmountResponse = models.GetUsagePlanUsageAmountResponse;
const GetUsagePlanUsageAmountRequest = models.GetUsagePlanUsageAmountRequest;
const FlowProductRemindRequest = models.FlowProductRemindRequest;
const FlowProductRemindResponse = models.FlowProductRemindResponse;


/**
 * market client
 * @class
 */
class MarketClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("market.tencentcloudapi.com", "2019-10-10", credential, region, profile);
    }
    
    /**
     * 该接口可以根据InstanceId查询实例的api的使用情况。

     * @param {GetUsagePlanUsageAmountRequest} req
     * @param {function(string, GetUsagePlanUsageAmountResponse):void} cb
     * @public
     */
    GetUsagePlanUsageAmount(req, cb) {
        let resp = new GetUsagePlanUsageAmountResponse();
        this.request("GetUsagePlanUsageAmount", req, resp, cb);
    }

    /**
     * 计量商品用量提醒，用于服务商调用云服务，云服务向客户发送提醒信息
     * @param {FlowProductRemindRequest} req
     * @param {function(string, FlowProductRemindResponse):void} cb
     * @public
     */
    FlowProductRemind(req, cb) {
        let resp = new FlowProductRemindResponse();
        this.request("FlowProductRemind", req, resp, cb);
    }


}
module.exports = MarketClient;

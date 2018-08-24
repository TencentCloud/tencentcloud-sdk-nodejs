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
const DescribeBillDetailResponse = models.DescribeBillDetailResponse;
const Deal = models.Deal;
const DescribeDealsByCondResponse = models.DescribeDealsByCondResponse;
const DescribeBillResourceSummaryResponse = models.DescribeBillResourceSummaryResponse;
const DescribeBillDetailRequest = models.DescribeBillDetailRequest;
const DescribeDealsByCondRequest = models.DescribeDealsByCondRequest;
const DescribeBillResourceSummaryRequest = models.DescribeBillResourceSummaryRequest;
const PayDealsResponse = models.PayDealsResponse;
const PayDealsRequest = models.PayDealsRequest;
const BillDetailComponent = models.BillDetailComponent;
const BillResourceSummary = models.BillResourceSummary;
const BillDetail = models.BillDetail;


/**
 * billing client
 * @class
 */
class BillingClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("billing.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    
    /**
     * 查询账单明细数据
     * @param {DescribeBillDetailRequest} req
     * @param {function(string, DescribeBillDetailResponse):void} cb
     * @public
     */
    DescribeBillDetail(req, cb) {
        let resp = new DescribeBillDetailResponse();
        this.request("DescribeBillDetail", req, resp, cb);
    }

    /**
     * 支付订单
     * @param {PayDealsRequest} req
     * @param {function(string, PayDealsResponse):void} cb
     * @public
     */
    PayDeals(req, cb) {
        let resp = new PayDealsResponse();
        this.request("PayDeals", req, resp, cb);
    }

    /**
     * 查询订单
     * @param {DescribeDealsByCondRequest} req
     * @param {function(string, DescribeDealsByCondResponse):void} cb
     * @public
     */
    DescribeDealsByCond(req, cb) {
        let resp = new DescribeDealsByCondResponse();
        this.request("DescribeDealsByCond", req, resp, cb);
    }

    /**
     * 查询账单资源汇总数据
     * @param {DescribeBillResourceSummaryRequest} req
     * @param {function(string, DescribeBillResourceSummaryResponse):void} cb
     * @public
     */
    DescribeBillResourceSummary(req, cb) {
        let resp = new DescribeBillResourceSummaryResponse();
        this.request("DescribeBillResourceSummary", req, resp, cb);
    }


}
module.exports = BillingClient;

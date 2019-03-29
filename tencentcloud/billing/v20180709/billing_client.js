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
const DetailSet = models.DetailSet;
const Deal = models.Deal;
const DescribeDealsByCondResponse = models.DescribeDealsByCondResponse;
const DescribeAccountBalanceRequest = models.DescribeAccountBalanceRequest;
const DescribeBillDetailRequest = models.DescribeBillDetailRequest;
const DescribeDosageDetailByDateRequest = models.DescribeDosageDetailByDateRequest;
const ProductInfo = models.ProductInfo;
const DescribeDosageDetailByDateResponse = models.DescribeDosageDetailByDateResponse;
const DescribeBillResourceSummaryResponse = models.DescribeBillResourceSummaryResponse;
const DescribeBillResourceSummaryRequest = models.DescribeBillResourceSummaryRequest;
const DetailPoint = models.DetailPoint;
const DescribeAccountBalanceResponse = models.DescribeAccountBalanceResponse;
const PayDealsResponse = models.PayDealsResponse;
const DescribeDealsByCondRequest = models.DescribeDealsByCondRequest;
const BillDetailComponent = models.BillDetailComponent;
const BillResourceSummary = models.BillResourceSummary;
const BillDetail = models.BillDetail;
const PayDealsRequest = models.PayDealsRequest;


/**
 * billing client
 * @class
 */
class BillingClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("billing.tencentcloudapi.com", "2018-07-09", credential, region, profile);
    }
    
    /**
     * 获取云账户余额信息。
     * @param {DescribeAccountBalanceRequest} req
     * @param {function(string, DescribeAccountBalanceResponse):void} cb
     * @public
     */
    DescribeAccountBalance(req, cb) {
        let resp = new DescribeAccountBalanceResponse();
        this.request("DescribeAccountBalance", req, resp, cb);
    }

    /**
     * 按日期获取产品用量明细
     * @param {DescribeDosageDetailByDateRequest} req
     * @param {function(string, DescribeDosageDetailByDateResponse):void} cb
     * @public
     */
    DescribeDosageDetailByDate(req, cb) {
        let resp = new DescribeDosageDetailByDateResponse();
        this.request("DescribeDosageDetailByDate", req, resp, cb);
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


}
module.exports = BillingClient;

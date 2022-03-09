"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * billing client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("billing.tencentcloudapi.com", "2018-07-09", clientConfig);
    }
    /**
     * 获取云账户余额信息。
     */
    async DescribeAccountBalance(req, cb) {
        return this.request("DescribeAccountBalance", req, cb);
    }
    /**
     * 获取代金券相关信息
     */
    async DescribeVoucherInfo(req, cb) {
        return this.request("DescribeVoucherInfo", req, cb);
    }
    /**
     * 按日期获取产品用量明细
     */
    async DescribeDosageDetailByDate(req, cb) {
        return this.request("DescribeDosageDetailByDate", req, cb);
    }
    /**
     * 获取按资源汇总消耗详情
     */
    async DescribeCostSummaryByResource(req, cb) {
        return this.request("DescribeCostSummaryByResource", req, cb);
    }
    /**
     * 获取代金券使用记录
     */
    async DescribeVoucherUsageDetails(req, cb) {
        return this.request("DescribeVoucherUsageDetails", req, cb);
    }
    /**
     * 获取收支明细列表，支持翻页和参数过滤
     */
    async DescribeBillList(req, cb) {
        return this.request("DescribeBillList", req, cb);
    }
    /**
     * 查询账单明细数据
     */
    async DescribeBillDetail(req, cb) {
        return this.request("DescribeBillDetail", req, cb);
    }
    /**
     * 查询订单
     */
    async DescribeDealsByCond(req, cb) {
        return this.request("DescribeDealsByCond", req, cb);
    }
    /**
     * 获取按项目汇总消耗详情
     */
    async DescribeCostSummaryByProject(req, cb) {
        return this.request("DescribeCostSummaryByProject", req, cb);
    }
    /**
     * 获取按付费模式汇总费用分布
     */
    async DescribeBillSummaryByPayMode(req, cb) {
        return this.request("DescribeBillSummaryByPayMode", req, cb);
    }
    /**
     * 查询账单资源汇总数据
     */
    async DescribeBillResourceSummary(req, cb) {
        return this.request("DescribeBillResourceSummary", req, cb);
    }
    /**
     * 获取按地域汇总消耗详情
     */
    async DescribeCostSummaryByRegion(req, cb) {
        return this.request("DescribeCostSummaryByRegion", req, cb);
    }
    /**
     * 获取按地域汇总费用分布
     */
    async DescribeBillSummaryByRegion(req, cb) {
        return this.request("DescribeBillSummaryByRegion", req, cb);
    }
    /**
     * 获取按项目汇总费用分布
     */
    async DescribeBillSummaryByProject(req, cb) {
        return this.request("DescribeBillSummaryByProject", req, cb);
    }
    /**
     * 获取产品汇总费用分布
     */
    async DescribeBillSummaryByProduct(req, cb) {
        return this.request("DescribeBillSummaryByProduct", req, cb);
    }
    /**
     * 获取按标签汇总费用分布
     */
    async DescribeBillSummaryByTag(req, cb) {
        return this.request("DescribeBillSummaryByTag", req, cb);
    }
    /**
     * 获取按产品汇总消耗详情
     */
    async DescribeCostSummaryByProduct(req, cb) {
        return this.request("DescribeCostSummaryByProduct", req, cb);
    }
    /**
     * 查询消耗明细
     */
    async DescribeCostDetail(req, cb) {
        return this.request("DescribeCostDetail", req, cb);
    }
    /**
     * 获取COS产品用量明细
     */
    async DescribeDosageCosDetailByDate(req, cb) {
        return this.request("DescribeDosageCosDetailByDate", req, cb);
    }
    /**
     * 支付订单
     */
    async PayDeals(req, cb) {
        return this.request("PayDeals", req, cb);
    }
}
exports.Client = Client;

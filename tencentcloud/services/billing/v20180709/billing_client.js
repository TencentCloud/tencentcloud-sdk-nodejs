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
     * 成员账号获取管理账号代付账单（费用明细）。
注意事项：在请求接口时，由于网络不稳定或其它异常，可能会导致请求失败。如果您遇到这种情况，我们建议您在接口请求失败时，手动发起重试操作，这样可以更好地确保您的接口请求能够成功执行。
     */
    async DescribeBillDetailForOrganization(req, cb) {
        return this.request("DescribeBillDetailForOrganization", req, cb);
    }
    /**
     * 获取按资源汇总消耗详情
     */
    async DescribeCostSummaryByResource(req, cb) {
        return this.request("DescribeCostSummaryByResource", req, cb);
    }
    /**
     * 获取收支明细列表，支持翻页和参数过滤
     */
    async DescribeBillList(req, cb) {
        return this.request("DescribeBillList", req, cb);
    }
    /**
     * 查询当前用户节省计划覆盖率明细数据，如无特别说明，金额单位均为元（国内站）或者美元（国际站）。
     */
    async DescribeSavingPlanCoverage(req, cb) {
        return this.request("DescribeSavingPlanCoverage", req, cb);
    }
    /**
     * 查询分账账单按资源汇总
     */
    async DescribeAllocationSummaryByResource(req, cb) {
        return this.request("DescribeAllocationSummaryByResource", req, cb);
    }
    /**
     * 获取账单资源汇总数据
     */
    async DescribeBillResourceSummary(req, cb) {
        return this.request("DescribeBillResourceSummary", req, cb);
    }
    /**
     * 查询分账账单按产品汇总
     */
    async DescribeAllocationSummaryByBusiness(req, cb) {
        return this.request("DescribeAllocationSummaryByBusiness", req, cb);
    }
    /**
     * 查询资源目录筛选条件
     */
    async DescribeAllocateConditions(req, cb) {
        return this.request("DescribeAllocateConditions", req, cb);
    }
    /**
     * 查询分账账单日概览
     */
    async DescribeAllocationOverview(req, cb) {
        return this.request("DescribeAllocationOverview", req, cb);
    }
    /**
     * 获取已接入标准用量明细模板产品的用量明细数据，目前已接入并支持查询的产品包括：云联络中心、实时音视频、实时音视频、智能媒资托管、CODING DevOps、全球IP应用加速
     */
    async DescribeDosageDetailList(req, cb) {
        return this.request("DescribeDosageDetailList", req, cb);
    }
    /**
     * 批量设置分账标签
     */
    async CreateAllocationTag(req, cb) {
        return this.request("CreateAllocationTag", req, cb);
    }
    /**
     * 获取代金券相关信息
     */
    async DescribeVoucherInfo(req, cb) {
        return this.request("DescribeVoucherInfo", req, cb);
    }
    /**
     * 获取按项目汇总消耗详情
     */
    async DescribeCostSummaryByProject(req, cb) {
        return this.request("DescribeCostSummaryByProject", req, cb);
    }
    /**
     * 查看成本分析明细
     */
    async DescribeCostExplorerSummary(req, cb) {
        return this.request("DescribeCostExplorerSummary", req, cb);
    }
    /**
     * 成员账号获取管理账号代付账单（按资源汇总）
     */
    async DescribeBillResourceSummaryForOrganization(req, cb) {
        return this.request("DescribeBillResourceSummaryForOrganization", req, cb);
    }
    /**
     * 获取账单明细数据。
注意事项：
1.在请求接口时，由于网络不稳定或其它异常，可能会导致请求失败。如果您遇到这种情况，我们建议您在接口请求失败时，手动发起重试操作，这样可以更好地确保您的接口请求能够成功执行。
2.对于账单明细数据量级很大（例如每月账单明细量级超过20w）的客户，通过 API 调用账单数据效率较低，建议您开通账单数据存储功能，通过存储桶中获取账单文件进行分析。[账单存储至COS桶](https://cloud.tencent.com/document/product/555/61275)
     */
    async DescribeBillDetail(req, cb) {
        return this.request("DescribeBillDetail", req, cb);
    }
    /**
     * 该接口支持通过传参，按照产品、项目、地域、计费模式和标签五个维度获取账单费用明细。
     */
    async DescribeBillSummary(req, cb) {
        return this.request("DescribeBillSummary", req, cb);
    }
    /**
     * 获取按计费模式汇总费用分布
     */
    async DescribeBillSummaryByPayMode(req, cb) {
        return this.request("DescribeBillSummaryByPayMode", req, cb);
    }
    /**
     * 获取按地域汇总消耗详情
     */
    async DescribeCostSummaryByRegion(req, cb) {
        return this.request("DescribeCostSummaryByRegion", req, cb);
    }
    /**
     * 查询分账账单费用趋势
     */
    async DescribeAllocationTrendByMonth(req, cb) {
        return this.request("DescribeAllocationTrendByMonth", req, cb);
    }
    /**
     * 该接口支持通过传参，获取L0-PDF、L1-汇总、L2-资源、L3-明细、账单包、五类账单文件下载链接
     */
    async DescribeBillDownloadUrl(req, cb) {
        return this.request("DescribeBillDownloadUrl", req, cb);
    }
    /**
     * 获取COS产品用量明细
     */
    async DescribeDosageCosDetailByDate(req, cb) {
        return this.request("DescribeDosageCosDetailByDate", req, cb);
    }
    /**
     * 查询分账账单筛选条件
     */
    async DescribeAllocationBillConditions(req, cb) {
        return this.request("DescribeAllocationBillConditions", req, cb);
    }
    /**
     * 获取云账户余额信息。
     */
    async DescribeAccountBalance(req, cb) {
        return this.request("DescribeAccountBalance", req, cb);
    }
    /**
     * 按日期获取产品用量明细
     */
    async DescribeDosageDetailByDate(req, cb) {
        return this.request("DescribeDosageDetailByDate", req, cb);
    }
    /**
     * 可以通过API获取当前UIN是否有调账，客户可以更快地主动地获取调账情况。
     */
    async DescribeBillAdjustInfo(req, cb) {
        return this.request("DescribeBillAdjustInfo", req, cb);
    }
    /**
     * 查询分账账单明细
     */
    async DescribeAllocationBillDetail(req, cb) {
        return this.request("DescribeAllocationBillDetail", req, cb);
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
     * 查询分账账单月概览
     */
    async DescribeAllocationMonthOverview(req, cb) {
        return this.request("DescribeAllocationMonthOverview", req, cb);
    }
    /**
     * 获取按标签汇总费用分布
     */
    async DescribeBillSummaryByTag(req, cb) {
        return this.request("DescribeBillSummaryByTag", req, cb);
    }
    /**
     * 该接口支持通过传参，按照产品、项目、地域、计费模式和标签五个维度获取账单费用明细。
     */
    async DescribeBillSummaryForOrganization(req, cb) {
        return this.request("DescribeBillSummaryForOrganization", req, cb);
    }
    /**
     * 查询分账账单资源归集汇总
     */
    async DescribeGatherResource(req, cb) {
        return this.request("DescribeGatherResource", req, cb);
    }
    /**
     * 查询节省计划详情
     */
    async DescribeSavingPlanResourceInfo(req, cb) {
        return this.request("DescribeSavingPlanResourceInfo", req, cb);
    }
    /**
     * 获取分账标签
     */
    async DescribeTagList(req, cb) {
        return this.request("DescribeTagList", req, cb);
    }
    /**
     * 获取代金券使用记录
     */
    async DescribeVoucherUsageDetails(req, cb) {
        return this.request("DescribeVoucherUsageDetails", req, cb);
    }
    /**
     * 支付订单
     */
    async PayDeals(req, cb) {
        return this.request("PayDeals", req, cb);
    }
    /**
     * 获取按产品汇总消耗详情
     */
    async DescribeCostSummaryByProduct(req, cb) {
        return this.request("DescribeCostSummaryByProduct", req, cb);
    }
    /**
     * 批量取消设置分账标签
     */
    async DeleteAllocationTag(req, cb) {
        return this.request("DeleteAllocationTag", req, cb);
    }
    /**
     * 查询订单
     */
    async DescribeDealsByCond(req, cb) {
        return this.request("DescribeDealsByCond", req, cb);
    }
    /**
     * 查询分账账单按组件汇总
     */
    async DescribeAllocationSummaryByItem(req, cb) {
        return this.request("DescribeAllocationSummaryByItem", req, cb);
    }
    /**
     * 获取产品汇总费用分布
     */
    async DescribeBillSummaryByProduct(req, cb) {
        return this.request("DescribeBillSummaryByProduct", req, cb);
    }
    /**
     * 查询消耗明细

注意事项：
1. 对于消耗明细数据量级很大（例如每月消耗明细量级超过100w）的客户，通过 API 调用明细数据会有超时风险，建议您开通消耗账单数据存储功能，通过存储桶中获取账单文件进行分析。[账单存储至COS桶](https://cloud.tencent.com/document/product/555/61275)
     */
    async DescribeCostDetail(req, cb) {
        return this.request("DescribeCostDetail", req, cb);
    }
}
exports.Client = Client;

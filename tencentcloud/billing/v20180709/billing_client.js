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
const CostComponentSet = models.CostComponentSet;
const DescribeCostSummaryByProductRequest = models.DescribeCostSummaryByProductRequest;
const DescribeCostSummaryByProjectResponse = models.DescribeCostSummaryByProjectResponse;
const DescribeDosageDetailByDateRequest = models.DescribeDosageDetailByDateRequest;
const ProjectSummaryOverviewItem = models.ProjectSummaryOverviewItem;
const ConditionRegion = models.ConditionRegion;
const DescribeBillSummaryByProductRequest = models.DescribeBillSummaryByProductRequest;
const ConsumptionBusinessSummaryDataItem = models.ConsumptionBusinessSummaryDataItem;
const DetailPoint = models.DetailPoint;
const CostDetail = models.CostDetail;
const DescribeBillSummaryByPayModeResponse = models.DescribeBillSummaryByPayModeResponse;
const BillResourceSummary = models.BillResourceSummary;
const DescribeBillSummaryByTagRequest = models.DescribeBillSummaryByTagRequest;
const Conditions = models.Conditions;
const DescribeBillSummaryByProductResponse = models.DescribeBillSummaryByProductResponse;
const BillTagInfo = models.BillTagInfo;
const DescribeBillSummaryByRegionResponse = models.DescribeBillSummaryByRegionResponse;
const DetailSet = models.DetailSet;
const BillTransactionInfo = models.BillTransactionInfo;
const RegionSummaryOverviewItem = models.RegionSummaryOverviewItem;
const ConsumptionResourceSummaryDataItem = models.ConsumptionResourceSummaryDataItem;
const DescribeAccountBalanceRequest = models.DescribeAccountBalanceRequest;
const DescribeBillDetailRequest = models.DescribeBillDetailRequest;
const ConsumptionProjectSummaryDataItem = models.ConsumptionProjectSummaryDataItem;
const DescribeCostSummaryByProductResponse = models.DescribeCostSummaryByProductResponse;
const ProductInfo = models.ProductInfo;
const DescribeDosageDetailByDateResponse = models.DescribeDosageDetailByDateResponse;
const DescribeBillListResponse = models.DescribeBillListResponse;
const DescribeAccountBalanceResponse = models.DescribeAccountBalanceResponse;
const DescribeCostSummaryByRegionRequest = models.DescribeCostSummaryByRegionRequest;
const BusinessSummaryOverviewItem = models.BusinessSummaryOverviewItem;
const BillDetailComponent = models.BillDetailComponent;
const ConsumptionSummaryTrend = models.ConsumptionSummaryTrend;
const DescribeBillSummaryByRegionRequest = models.DescribeBillSummaryByRegionRequest;
const DescribeBillSummaryByPayModeRequest = models.DescribeBillSummaryByPayModeRequest;
const DescribeCostSummaryByProjectRequest = models.DescribeCostSummaryByProjectRequest;
const ConsumptionRegionSummaryDataItem = models.ConsumptionRegionSummaryDataItem;
const DescribeBillResourceSummaryResponse = models.DescribeBillResourceSummaryResponse;
const ActionSummaryOverviewItem = models.ActionSummaryOverviewItem;
const ConditionPayMode = models.ConditionPayMode;
const DescribeDealsByCondRequest = models.DescribeDealsByCondRequest;
const DescribeBillResourceSummaryRequest = models.DescribeBillResourceSummaryRequest;
const DescribeBillListRequest = models.DescribeBillListRequest;
const PayDealsResponse = models.PayDealsResponse;
const BillDetail = models.BillDetail;
const DescribeBillSummaryByTagResponse = models.DescribeBillSummaryByTagResponse;
const TagSummaryOverviewItem = models.TagSummaryOverviewItem;
const DescribeCostSummaryByResourceResponse = models.DescribeCostSummaryByResourceResponse;
const DescribeBillDetailResponse = models.DescribeBillDetailResponse;
const ConsumptionResourceSummaryConditionValue = models.ConsumptionResourceSummaryConditionValue;
const Deal = models.Deal;
const DescribeCostDetailRequest = models.DescribeCostDetailRequest;
const DescribeDealsByCondResponse = models.DescribeDealsByCondResponse;
const ConditionProject = models.ConditionProject;
const ConsumptionSummaryTotal = models.ConsumptionSummaryTotal;
const DescribeBillSummaryByProjectRequest = models.DescribeBillSummaryByProjectRequest;
const DescribeBillSummaryByProjectResponse = models.DescribeBillSummaryByProjectResponse;
const ConditionBusiness = models.ConditionBusiness;
const DescribeCostSummaryByResourceRequest = models.DescribeCostSummaryByResourceRequest;
const DescribeCostDetailResponse = models.DescribeCostDetailResponse;
const PayDealsRequest = models.PayDealsRequest;
const PayModeSummaryOverviewItem = models.PayModeSummaryOverviewItem;
const BusinessSummaryTotal = models.BusinessSummaryTotal;
const DescribeCostSummaryByRegionResponse = models.DescribeCostSummaryByRegionResponse;


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
     * 获取按资源汇总消耗详情
     * @param {DescribeCostSummaryByResourceRequest} req
     * @param {function(string, DescribeCostSummaryByResourceResponse):void} cb
     * @public
     */
    DescribeCostSummaryByResource(req, cb) {
        let resp = new DescribeCostSummaryByResourceResponse();
        this.request("DescribeCostSummaryByResource", req, resp, cb);
    }

    /**
     * 获取收支明细列表，支持翻页和参数过滤
     * @param {DescribeBillListRequest} req
     * @param {function(string, DescribeBillListResponse):void} cb
     * @public
     */
    DescribeBillList(req, cb) {
        let resp = new DescribeBillListResponse();
        this.request("DescribeBillList", req, resp, cb);
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
     * 获取按项目汇总消耗详情
     * @param {DescribeCostSummaryByProjectRequest} req
     * @param {function(string, DescribeCostSummaryByProjectResponse):void} cb
     * @public
     */
    DescribeCostSummaryByProject(req, cb) {
        let resp = new DescribeCostSummaryByProjectResponse();
        this.request("DescribeCostSummaryByProject", req, resp, cb);
    }

    /**
     * 获取按付费模式汇总费用分布
     * @param {DescribeBillSummaryByPayModeRequest} req
     * @param {function(string, DescribeBillSummaryByPayModeResponse):void} cb
     * @public
     */
    DescribeBillSummaryByPayMode(req, cb) {
        let resp = new DescribeBillSummaryByPayModeResponse();
        this.request("DescribeBillSummaryByPayMode", req, resp, cb);
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
     * 获取按地域汇总消耗详情
     * @param {DescribeCostSummaryByRegionRequest} req
     * @param {function(string, DescribeCostSummaryByRegionResponse):void} cb
     * @public
     */
    DescribeCostSummaryByRegion(req, cb) {
        let resp = new DescribeCostSummaryByRegionResponse();
        this.request("DescribeCostSummaryByRegion", req, resp, cb);
    }

    /**
     * 获取按地域汇总费用分布
     * @param {DescribeBillSummaryByRegionRequest} req
     * @param {function(string, DescribeBillSummaryByRegionResponse):void} cb
     * @public
     */
    DescribeBillSummaryByRegion(req, cb) {
        let resp = new DescribeBillSummaryByRegionResponse();
        this.request("DescribeBillSummaryByRegion", req, resp, cb);
    }

    /**
     * 获取按项目汇总费用分布
     * @param {DescribeBillSummaryByProjectRequest} req
     * @param {function(string, DescribeBillSummaryByProjectResponse):void} cb
     * @public
     */
    DescribeBillSummaryByProject(req, cb) {
        let resp = new DescribeBillSummaryByProjectResponse();
        this.request("DescribeBillSummaryByProject", req, resp, cb);
    }

    /**
     * 获取产品汇总费用分布
     * @param {DescribeBillSummaryByProductRequest} req
     * @param {function(string, DescribeBillSummaryByProductResponse):void} cb
     * @public
     */
    DescribeBillSummaryByProduct(req, cb) {
        let resp = new DescribeBillSummaryByProductResponse();
        this.request("DescribeBillSummaryByProduct", req, resp, cb);
    }

    /**
     * 获取按标签汇总费用分布
     * @param {DescribeBillSummaryByTagRequest} req
     * @param {function(string, DescribeBillSummaryByTagResponse):void} cb
     * @public
     */
    DescribeBillSummaryByTag(req, cb) {
        let resp = new DescribeBillSummaryByTagResponse();
        this.request("DescribeBillSummaryByTag", req, resp, cb);
    }

    /**
     * 获取按产品汇总消耗详情
     * @param {DescribeCostSummaryByProductRequest} req
     * @param {function(string, DescribeCostSummaryByProductResponse):void} cb
     * @public
     */
    DescribeCostSummaryByProduct(req, cb) {
        let resp = new DescribeCostSummaryByProductResponse();
        this.request("DescribeCostSummaryByProduct", req, resp, cb);
    }

    /**
     * 查询消耗明细
     * @param {DescribeCostDetailRequest} req
     * @param {function(string, DescribeCostDetailResponse):void} cb
     * @public
     */
    DescribeCostDetail(req, cb) {
        let resp = new DescribeCostDetailResponse();
        this.request("DescribeCostDetail", req, resp, cb);
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

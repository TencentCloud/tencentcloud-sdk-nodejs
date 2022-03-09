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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  CostComponentSet,
  VoucherInfos,
  DescribeCostSummaryByProductRequest,
  ConsumptionSummaryTotal,
  DescribeCostSummaryByProjectResponse,
  DescribeDosageDetailByDateRequest,
  ProjectSummaryOverviewItem,
  ConditionRegion,
  DescribeBillSummaryByProductRequest,
  ConsumptionBusinessSummaryDataItem,
  DetailPoint,
  CostDetail,
  DescribeBillSummaryByPayModeResponse,
  BillResourceSummary,
  DescribeBillSummaryByTagRequest,
  Conditions,
  DescribeBillSummaryByProductResponse,
  BillTagInfo,
  DescribeBillSummaryByRegionResponse,
  DetailSet,
  BillTransactionInfo,
  DescribeVoucherInfoResponse,
  ConsumptionResourceSummaryDataItem,
  DescribeAccountBalanceRequest,
  DescribeBillDetailRequest,
  ConsumptionProjectSummaryDataItem,
  RegionSummaryOverviewItem,
  DescribeCostSummaryByProductResponse,
  ProductInfo,
  DescribeDosageDetailByDateResponse,
  DescribeBillListResponse,
  DescribeAccountBalanceResponse,
  DescribeCostSummaryByRegionRequest,
  BusinessSummaryOverviewItem,
  BillDetailComponent,
  ConsumptionSummaryTrend,
  DescribeBillSummaryByRegionRequest,
  DescribeBillSummaryByPayModeRequest,
  DescribeCostSummaryByProjectRequest,
  UsageRecords,
  ConsumptionRegionSummaryDataItem,
  DescribeDosageCosDetailByDateResponse,
  UsageDetails,
  DescribeBillResourceSummaryResponse,
  ActionSummaryOverviewItem,
  DescribeVoucherInfoRequest,
  ApplicableProducts,
  ConditionPayMode,
  DescribeVoucherUsageDetailsRequest,
  DescribeDealsByCondRequest,
  DescribeBillResourceSummaryRequest,
  PayDealsRequest,
  DescribeBillListRequest,
  PayDealsResponse,
  SummaryTotal,
  BillDetail,
  DescribeBillSummaryByTagResponse,
  TagSummaryOverviewItem,
  DescribeCostSummaryByResourceResponse,
  DescribeBillDetailResponse,
  ConsumptionResourceSummaryConditionValue,
  Deal,
  DescribeCostDetailRequest,
  DescribeVoucherUsageDetailsResponse,
  DescribeDealsByCondResponse,
  ConditionProject,
  CosDetailSets,
  DescribeBillSummaryByProjectRequest,
  DescribeBillSummaryByProjectResponse,
  ConditionBusiness,
  DescribeCostSummaryByResourceRequest,
  DescribeCostDetailResponse,
  DescribeDosageCosDetailByDateRequest,
  ExcludedProducts,
  PayModeSummaryOverviewItem,
  BusinessSummaryTotal,
  DescribeCostSummaryByRegionResponse,
} from "./billing_models"

/**
 * billing client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("billing.tencentcloudapi.com", "2018-07-09", clientConfig)
  }

  /**
   * 获取云账户余额信息。
   */
  async DescribeAccountBalance(
    req?: DescribeAccountBalanceRequest,
    cb?: (error: string, rep: DescribeAccountBalanceResponse) => void
  ): Promise<DescribeAccountBalanceResponse> {
    return this.request("DescribeAccountBalance", req, cb)
  }

  /**
   * 获取代金券相关信息
   */
  async DescribeVoucherInfo(
    req: DescribeVoucherInfoRequest,
    cb?: (error: string, rep: DescribeVoucherInfoResponse) => void
  ): Promise<DescribeVoucherInfoResponse> {
    return this.request("DescribeVoucherInfo", req, cb)
  }

  /**
   * 按日期获取产品用量明细
   */
  async DescribeDosageDetailByDate(
    req: DescribeDosageDetailByDateRequest,
    cb?: (error: string, rep: DescribeDosageDetailByDateResponse) => void
  ): Promise<DescribeDosageDetailByDateResponse> {
    return this.request("DescribeDosageDetailByDate", req, cb)
  }

  /**
   * 获取按资源汇总消耗详情
   */
  async DescribeCostSummaryByResource(
    req: DescribeCostSummaryByResourceRequest,
    cb?: (error: string, rep: DescribeCostSummaryByResourceResponse) => void
  ): Promise<DescribeCostSummaryByResourceResponse> {
    return this.request("DescribeCostSummaryByResource", req, cb)
  }

  /**
   * 获取代金券使用记录
   */
  async DescribeVoucherUsageDetails(
    req: DescribeVoucherUsageDetailsRequest,
    cb?: (error: string, rep: DescribeVoucherUsageDetailsResponse) => void
  ): Promise<DescribeVoucherUsageDetailsResponse> {
    return this.request("DescribeVoucherUsageDetails", req, cb)
  }

  /**
   * 获取收支明细列表，支持翻页和参数过滤
   */
  async DescribeBillList(
    req: DescribeBillListRequest,
    cb?: (error: string, rep: DescribeBillListResponse) => void
  ): Promise<DescribeBillListResponse> {
    return this.request("DescribeBillList", req, cb)
  }

  /**
   * 查询账单明细数据
   */
  async DescribeBillDetail(
    req: DescribeBillDetailRequest,
    cb?: (error: string, rep: DescribeBillDetailResponse) => void
  ): Promise<DescribeBillDetailResponse> {
    return this.request("DescribeBillDetail", req, cb)
  }

  /**
   * 查询订单
   */
  async DescribeDealsByCond(
    req: DescribeDealsByCondRequest,
    cb?: (error: string, rep: DescribeDealsByCondResponse) => void
  ): Promise<DescribeDealsByCondResponse> {
    return this.request("DescribeDealsByCond", req, cb)
  }

  /**
   * 获取按项目汇总消耗详情
   */
  async DescribeCostSummaryByProject(
    req: DescribeCostSummaryByProjectRequest,
    cb?: (error: string, rep: DescribeCostSummaryByProjectResponse) => void
  ): Promise<DescribeCostSummaryByProjectResponse> {
    return this.request("DescribeCostSummaryByProject", req, cb)
  }

  /**
   * 获取按付费模式汇总费用分布
   */
  async DescribeBillSummaryByPayMode(
    req: DescribeBillSummaryByPayModeRequest,
    cb?: (error: string, rep: DescribeBillSummaryByPayModeResponse) => void
  ): Promise<DescribeBillSummaryByPayModeResponse> {
    return this.request("DescribeBillSummaryByPayMode", req, cb)
  }

  /**
   * 查询账单资源汇总数据
   */
  async DescribeBillResourceSummary(
    req: DescribeBillResourceSummaryRequest,
    cb?: (error: string, rep: DescribeBillResourceSummaryResponse) => void
  ): Promise<DescribeBillResourceSummaryResponse> {
    return this.request("DescribeBillResourceSummary", req, cb)
  }

  /**
   * 获取按地域汇总消耗详情
   */
  async DescribeCostSummaryByRegion(
    req: DescribeCostSummaryByRegionRequest,
    cb?: (error: string, rep: DescribeCostSummaryByRegionResponse) => void
  ): Promise<DescribeCostSummaryByRegionResponse> {
    return this.request("DescribeCostSummaryByRegion", req, cb)
  }

  /**
   * 获取按地域汇总费用分布
   */
  async DescribeBillSummaryByRegion(
    req: DescribeBillSummaryByRegionRequest,
    cb?: (error: string, rep: DescribeBillSummaryByRegionResponse) => void
  ): Promise<DescribeBillSummaryByRegionResponse> {
    return this.request("DescribeBillSummaryByRegion", req, cb)
  }

  /**
   * 获取按项目汇总费用分布
   */
  async DescribeBillSummaryByProject(
    req: DescribeBillSummaryByProjectRequest,
    cb?: (error: string, rep: DescribeBillSummaryByProjectResponse) => void
  ): Promise<DescribeBillSummaryByProjectResponse> {
    return this.request("DescribeBillSummaryByProject", req, cb)
  }

  /**
   * 获取产品汇总费用分布
   */
  async DescribeBillSummaryByProduct(
    req: DescribeBillSummaryByProductRequest,
    cb?: (error: string, rep: DescribeBillSummaryByProductResponse) => void
  ): Promise<DescribeBillSummaryByProductResponse> {
    return this.request("DescribeBillSummaryByProduct", req, cb)
  }

  /**
   * 获取按标签汇总费用分布
   */
  async DescribeBillSummaryByTag(
    req: DescribeBillSummaryByTagRequest,
    cb?: (error: string, rep: DescribeBillSummaryByTagResponse) => void
  ): Promise<DescribeBillSummaryByTagResponse> {
    return this.request("DescribeBillSummaryByTag", req, cb)
  }

  /**
   * 获取按产品汇总消耗详情
   */
  async DescribeCostSummaryByProduct(
    req: DescribeCostSummaryByProductRequest,
    cb?: (error: string, rep: DescribeCostSummaryByProductResponse) => void
  ): Promise<DescribeCostSummaryByProductResponse> {
    return this.request("DescribeCostSummaryByProduct", req, cb)
  }

  /**
   * 查询消耗明细
   */
  async DescribeCostDetail(
    req: DescribeCostDetailRequest,
    cb?: (error: string, rep: DescribeCostDetailResponse) => void
  ): Promise<DescribeCostDetailResponse> {
    return this.request("DescribeCostDetail", req, cb)
  }

  /**
   * 获取COS产品用量明细
   */
  async DescribeDosageCosDetailByDate(
    req: DescribeDosageCosDetailByDateRequest,
    cb?: (error: string, rep: DescribeDosageCosDetailByDateResponse) => void
  ): Promise<DescribeDosageCosDetailByDateResponse> {
    return this.request("DescribeDosageCosDetailByDate", req, cb)
  }

  /**
   * 支付订单
   */
  async PayDeals(
    req: PayDealsRequest,
    cb?: (error: string, rep: PayDealsResponse) => void
  ): Promise<PayDealsResponse> {
    return this.request("PayDeals", req, cb)
  }
}

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
  DescribeCostSummaryByProductRequest,
  ConsumptionBusinessSummaryDataItem,
  BillTagInfo,
  BillTransactionInfo,
  ConditionBusiness,
  DescribeCostSummaryByProductResponse,
  ProductInfo,
  DeleteAllocationTagResponse,
  DescribeBillDetailForOrganizationResponse,
  BillDetailComponent,
  DescribeCostSummaryByResourceResponse,
  DescribeBillSummaryByRegionRequest,
  DescribeCostSummaryByProjectRequest,
  ConsumptionRegionSummaryDataItem,
  DescribeBillSummaryRequest,
  DescribeBillResourceSummaryResponse,
  DistributionBillDetail,
  DescribeDosageCosDetailByDateRequest,
  DeleteAllocationTagRequest,
  DescribeBillListRequest,
  BillDistributionResourceSummary,
  BusinessSummaryInfo,
  DescribeBillSummaryByProductRequest,
  DescribeVoucherUsageDetailsResponse,
  ConsumptionSummaryTotal,
  DescribeCostDetailResponse,
  VoucherInfos,
  DescribeCostSummaryByProjectResponse,
  DescribeBillSummaryByTagResponse,
  DescribeBillSummaryByPayModeResponse,
  DescribeBillSummaryByTagRequest,
  SummaryDetail,
  DescribeBillResourceSummaryForOrganizationRequest,
  DescribeCostSummaryByRegionRequest,
  ConsumptionSummaryTrend,
  DescribeBillDownloadUrlRequest,
  DescribeBillSummaryByPayModeRequest,
  ApplicableProducts,
  ConditionPayMode,
  PayDealsResponse,
  BillDetail,
  DetailSet,
  Deal,
  DescribeDealsByCondResponse,
  DescribeBillSummaryByProjectRequest,
  DescribeBillSummaryByProjectResponse,
  DescribeBillDownloadUrlResponse,
  TagDataInfo,
  PayDealsRequest,
  SummaryTotal,
  BusinessSummaryTotal,
  CostComponentSet,
  DetailPoint,
  DescribeBillSummaryResponse,
  BillResourceSummary,
  Conditions,
  RegionSummaryOverviewItem,
  ConsumptionProjectSummaryDataItem,
  DescribeDosageDetailByDateResponse,
  DescribeBillSummaryForOrganizationRequest,
  ActionSummaryOverviewItem,
  DescribeVoucherInfoRequest,
  DescribeVoucherUsageDetailsRequest,
  DescribeBillResourceSummaryRequest,
  DescribeBillDetailResponse,
  BillDetailComponentConfig,
  TagSummaryOverviewItem,
  ConsumptionResourceSummaryConditionValue,
  DescribeCostDetailRequest,
  DescribeTagListRequest,
  DescribeBillResourceSummaryForOrganizationResponse,
  DescribeCostSummaryByResourceRequest,
  CreateAllocationTagRequest,
  ExcludedProducts,
  PayModeSummaryOverviewItem,
  UsageDetails,
  DescribeDosageDetailByDateRequest,
  ConditionRegion,
  CostDetail,
  DescribeBillSummaryByProductResponse,
  DescribeBillSummaryByRegionResponse,
  CreateAllocationTagResponse,
  ConsumptionResourceSummaryDataItem,
  DescribeAccountBalanceRequest,
  DescribeBillDetailRequest,
  DescribeVoucherInfoResponse,
  BillDetailAssociatedOrder,
  DescribeBillListResponse,
  DescribeAccountBalanceResponse,
  BusinessSummaryOverviewItem,
  UsageRecords,
  DescribeBillDetailForOrganizationRequest,
  DescribeDealsByCondRequest,
  DescribeDosageCosDetailByDateResponse,
  DescribeBillSummaryForOrganizationResponse,
  ConditionProject,
  DescribeTagListResponse,
  CosDetailSets,
  ProjectSummaryOverviewItem,
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
   * 获取按资源汇总消耗详情
   */
  async DescribeCostSummaryByResource(
    req: DescribeCostSummaryByResourceRequest,
    cb?: (error: string, rep: DescribeCostSummaryByResourceResponse) => void
  ): Promise<DescribeCostSummaryByResourceResponse> {
    return this.request("DescribeCostSummaryByResource", req, cb)
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
   * 获取账单资源汇总数据
   */
  async DescribeBillResourceSummary(
    req: DescribeBillResourceSummaryRequest,
    cb?: (error: string, rep: DescribeBillResourceSummaryResponse) => void
  ): Promise<DescribeBillResourceSummaryResponse> {
    return this.request("DescribeBillResourceSummary", req, cb)
  }

  /**
   * 批量设置分账标签
   */
  async CreateAllocationTag(
    req: CreateAllocationTagRequest,
    cb?: (error: string, rep: CreateAllocationTagResponse) => void
  ): Promise<CreateAllocationTagResponse> {
    return this.request("CreateAllocationTag", req, cb)
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
   * 获取代金券相关信息
   */
  async DescribeVoucherInfo(
    req: DescribeVoucherInfoRequest,
    cb?: (error: string, rep: DescribeVoucherInfoResponse) => void
  ): Promise<DescribeVoucherInfoResponse> {
    return this.request("DescribeVoucherInfo", req, cb)
  }

  /**
   * 成员账号获取管理账号代付账单（按资源汇总）
   */
  async DescribeBillResourceSummaryForOrganization(
    req: DescribeBillResourceSummaryForOrganizationRequest,
    cb?: (error: string, rep: DescribeBillResourceSummaryForOrganizationResponse) => void
  ): Promise<DescribeBillResourceSummaryForOrganizationResponse> {
    return this.request("DescribeBillResourceSummaryForOrganization", req, cb)
  }

  /**
     * 获取账单明细数据。
注意事项：
1.在请求接口时，由于网络不稳定或其它异常，可能会导致请求失败。如果您遇到这种情况，我们建议您在接口请求失败时，手动发起重试操作，这样可以更好地确保您的接口请求能够成功执行。
2.对于账单明细数据量级很大（例如每月账单明细量级超过20w）的客户，通过 API 调用账单数据效率较低，建议您开通账单数据存储功能，通过存储桶中获取账单文件进行分析。[账单存储至COS桶](https://cloud.tencent.com/document/product/555/61275)
     */
  async DescribeBillDetail(
    req: DescribeBillDetailRequest,
    cb?: (error: string, rep: DescribeBillDetailResponse) => void
  ): Promise<DescribeBillDetailResponse> {
    return this.request("DescribeBillDetail", req, cb)
  }

  /**
   * 该接口支持通过传参，按照产品、项目、地域、计费模式和标签五个维度获取账单费用明细。
   */
  async DescribeBillSummary(
    req: DescribeBillSummaryRequest,
    cb?: (error: string, rep: DescribeBillSummaryResponse) => void
  ): Promise<DescribeBillSummaryResponse> {
    return this.request("DescribeBillSummary", req, cb)
  }

  /**
   * 获取按计费模式汇总费用分布
   */
  async DescribeBillSummaryByPayMode(
    req: DescribeBillSummaryByPayModeRequest,
    cb?: (error: string, rep: DescribeBillSummaryByPayModeResponse) => void
  ): Promise<DescribeBillSummaryByPayModeResponse> {
    return this.request("DescribeBillSummaryByPayMode", req, cb)
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
   * 获取按产品汇总消耗详情
   */
  async DescribeCostSummaryByProduct(
    req: DescribeCostSummaryByProductRequest,
    cb?: (error: string, rep: DescribeCostSummaryByProductResponse) => void
  ): Promise<DescribeCostSummaryByProductResponse> {
    return this.request("DescribeCostSummaryByProduct", req, cb)
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
     * 成员账号获取管理账号代付账单（费用明细）。
注意事项：在请求接口时，由于网络不稳定或其它异常，可能会导致请求失败。如果您遇到这种情况，我们建议您在接口请求失败时，手动发起重试操作，这样可以更好地确保您的接口请求能够成功执行。
     */
  async DescribeBillDetailForOrganization(
    req: DescribeBillDetailForOrganizationRequest,
    cb?: (error: string, rep: DescribeBillDetailForOrganizationResponse) => void
  ): Promise<DescribeBillDetailForOrganizationResponse> {
    return this.request("DescribeBillDetailForOrganization", req, cb)
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
   * 按日期获取产品用量明细
   */
  async DescribeDosageDetailByDate(
    req: DescribeDosageDetailByDateRequest,
    cb?: (error: string, rep: DescribeDosageDetailByDateResponse) => void
  ): Promise<DescribeDosageDetailByDateResponse> {
    return this.request("DescribeDosageDetailByDate", req, cb)
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
   * 获取按标签汇总费用分布
   */
  async DescribeBillSummaryByTag(
    req: DescribeBillSummaryByTagRequest,
    cb?: (error: string, rep: DescribeBillSummaryByTagResponse) => void
  ): Promise<DescribeBillSummaryByTagResponse> {
    return this.request("DescribeBillSummaryByTag", req, cb)
  }

  /**
   * 该接口支持通过传参，按照产品、项目、地域、计费模式和标签五个维度获取账单费用明细。
   */
  async DescribeBillSummaryForOrganization(
    req: DescribeBillSummaryForOrganizationRequest,
    cb?: (error: string, rep: DescribeBillSummaryForOrganizationResponse) => void
  ): Promise<DescribeBillSummaryForOrganizationResponse> {
    return this.request("DescribeBillSummaryForOrganization", req, cb)
  }

  /**
   * 获取分账标签
   */
  async DescribeTagList(
    req: DescribeTagListRequest,
    cb?: (error: string, rep: DescribeTagListResponse) => void
  ): Promise<DescribeTagListResponse> {
    return this.request("DescribeTagList", req, cb)
  }

  /**
   * 该接口支持通过传参，获取L0-PDF、L1-汇总、L2-资源、L3-明细、账单包、五类账单文件下载链接
   */
  async DescribeBillDownloadUrl(
    req: DescribeBillDownloadUrlRequest,
    cb?: (error: string, rep: DescribeBillDownloadUrlResponse) => void
  ): Promise<DescribeBillDownloadUrlResponse> {
    return this.request("DescribeBillDownloadUrl", req, cb)
  }

  /**
   * 批量取消设置分账标签
   */
  async DeleteAllocationTag(
    req: DeleteAllocationTagRequest,
    cb?: (error: string, rep: DeleteAllocationTagResponse) => void
  ): Promise<DeleteAllocationTagResponse> {
    return this.request("DeleteAllocationTag", req, cb)
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
   * 获取产品汇总费用分布
   */
  async DescribeBillSummaryByProduct(
    req: DescribeBillSummaryByProductRequest,
    cb?: (error: string, rep: DescribeBillSummaryByProductResponse) => void
  ): Promise<DescribeBillSummaryByProductResponse> {
    return this.request("DescribeBillSummaryByProduct", req, cb)
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
}

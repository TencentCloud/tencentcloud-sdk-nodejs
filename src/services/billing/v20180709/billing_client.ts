/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  CreateAllocationUnitRequest,
  DescribeBillAdjustInfoResponse,
  DescribeCostSummaryByProductRequest,
  DescribeCostExplorerSummaryResponse,
  ConsumptionBusinessSummaryDataItem,
  ModifyAllocationRuleRequest,
  DeleteAllocationRuleRequest,
  CreateAllocationRuleResponse,
  BillTagInfo,
  AllocationOverviewTotal,
  BillTransactionInfo,
  ConditionBusiness,
  AnalyseActionTypeDetail,
  DescribeCostExplorerSummaryRequest,
  BillBusinessLink,
  DescribeCostSummaryByProductResponse,
  DescribeAllocationTreeResponse,
  AllocationMonthOverviewDetail,
  AllocationTree,
  DescribeBillDetailForOrganizationResponse,
  BillDetailComponentConfig,
  DescribeCostSummaryByResourceResponse,
  DescribeBillSummaryByRegionRequest,
  AdjustInfoDetail,
  DescribeBillListResponse,
  DescribeAllocateConditionsRequest,
  CreateAllocationRuleRequest,
  ConsumptionRegionSummaryDataItem,
  DescribeAllocationUnitDetailResponse,
  DescribeBillSummaryRequest,
  DescribeBillResourceSummaryResponse,
  AllocationSummaryByItem,
  TagSummaryOverviewItem,
  DescribeGatherRuleDetailRequest,
  DistributionBillDetail,
  DescribeAllocationOverviewResponse,
  DescribeDosageCosDetailByDateRequest,
  DeleteAllocationTagRequest,
  DescribeBillSummaryByProductRequest,
  BillDistributionResourceSummary,
  BusinessSummaryInfo,
  DescribeDosageDetailListResponse,
  DescribeAllocationBillDetailRequest,
  DescribeBillListRequest,
  DescribeAllocationTrendByMonthRequest,
  AllocationUnit,
  AllocationRationExpression,
  DescribeVoucherUsageDetailsResponse,
  ConsumptionSummaryTotal,
  DescribeAllocationOverviewRequest,
  DescribeGatherResourceResponse,
  DescribeCostDetailResponse,
  DetailPoint,
  DescribeAllocationMonthOverviewResponse,
  DescribeAllocationSummaryByItemResponse,
  DescribeDosageDetailByDateResponse,
  DescribeDosageDetailByDateRequest,
  UsageRecords,
  DescribeGatherResourceRequest,
  DescribeCostSummaryByProjectResponse,
  AnalyseProjectDetail,
  ProjectSummaryOverviewItem,
  DescribeBillSummaryByTagResponse,
  ModifyGatherRuleRequest,
  SummaryDetail,
  DescribeBillSummaryByPayModeResponse,
  DescribeAllocationSummaryByBusinessResponse,
  DescribeAllocationSummaryByItemRequest,
  DescribeBillSummaryByTagRequest,
  AnalyseDetail,
  BillDays,
  DescribeAllocationRuleSummaryResponse,
  AnalyseAmountDetail,
  DescribeBillSummaryByProjectRequest,
  CreateGatherRuleRequest,
  DescribeBillResourceSummaryForOrganizationRequest,
  DescribeCostSummaryByRegionRequest,
  ConsumptionSummaryTrend,
  DescribeBillDownloadUrlRequest,
  DescribeAllocationSummaryByBusinessRequest,
  DescribeBillSummaryByPayModeRequest,
  DeleteGatherRuleResponse,
  DescribeAllocationBillConditionsRequest,
  ApplicableProducts,
  AllocationSummaryByResource,
  DescribeAllocationRuleDetailRequest,
  AllocationOverviewNode,
  ConditionPayMode,
  BillProductLink,
  AllocationTreeNode,
  GatherRuleSummary,
  PayDealsResponse,
  DescribeCostSummaryByProjectRequest,
  BillDetailAssociatedOrder,
  BillDetail,
  DescribeBillDetailResponse,
  Deal,
  DescribeDealsByCondResponse,
  BillZoneId,
  BillRegion,
  DescribeBillSummaryByProjectResponse,
  DescribeBillAdjustInfoRequest,
  DeleteAllocationRuleResponse,
  TagDataInfo,
  PayDealsRequest,
  SummaryTotal,
  BusinessSummaryTotal,
  DescribeAllocationBillConditionsResponse,
  CostComponentSet,
  AnalyseHeaderDetail,
  DescribeAllocationMonthOverviewRequest,
  JsonObject,
  AllocationOverviewDetail,
  AnalysePayModeDetail,
  AllocationBillTrendDetail,
  DescribeBillSummaryResponse,
  AnalyseOwnerUinDetail,
  Conditions,
  AnalyseTimeDetail,
  BillOwnerUin,
  AllocationRule,
  RegionSummaryOverviewItem,
  ConsumptionProjectSummaryDataItem,
  AnalyseRegionDetail,
  ProductInfo,
  DeleteAllocationTagResponse,
  AllocationDetail,
  VoucherInfos,
  DescribeAllocationUnitDetailRequest,
  DescribeBillSummaryForOrganizationRequest,
  AllocationSummaryByBusiness,
  AllocationStat,
  ModifyGatherRuleResponse,
  BillProject,
  ActionSummaryOverviewItem,
  DescribeBillDetailForOrganizationRequest,
  DescribeVoucherUsageDetailsRequest,
  DescribeBillResourceSummaryRequest,
  DetailSet,
  BillDetailComponent,
  ConditionRegion,
  AllocationAverageData,
  ConsumptionResourceSummaryConditionValue,
  DescribeCostSummaryByRegionResponse,
  DescribeCostDetailRequest,
  DescribeAllocationSummaryByResourceRequest,
  DescribeBillSummaryForOrganizationResponse,
  BillOperateUin,
  DescribeTagListRequest,
  DescribeBillResourceSummaryForOrganizationResponse,
  DescribeAllocationTreeRequest,
  DescribeCostSummaryByResourceRequest,
  CreateAllocationTagRequest,
  ExcludedProducts,
  PayModeSummaryOverviewItem,
  BillBusiness,
  DescribeAllocationRuleDetailResponse,
  UsageDetails,
  BillInstanceType,
  AnalyseBusinessDetail,
  AnalyseConditions,
  CostDetail,
  DescribeBillSummaryByProductResponse,
  DescribeBillSummaryByRegionResponse,
  CreateAllocationTagResponse,
  ModifyAllocationUnitRequest,
  DescribeBillDownloadUrlResponse,
  ConsumptionResourceSummaryDataItem,
  DescribeAccountBalanceRequest,
  DescribeBillDetailRequest,
  DescribeSavingPlanResourceInfoRequest,
  AnalyseZoneDetail,
  DescribeVoucherInfoResponse,
  AllocationRulesSummary,
  DeleteGatherRuleRequest,
  DescribeAccountBalanceResponse,
  DescribeAllocationBillDetailResponse,
  BusinessSummaryOverviewItem,
  CreateGatherRuleResponse,
  BillTag,
  DescribeAllocateConditionsResponse,
  DescribeDosageDetailListRequest,
  ModifyAllocationRuleResponse,
  BillComponent,
  DescribeVoucherInfoRequest,
  BillActionType,
  GatherResourceSummary,
  DescribeSavingPlanResourceInfoResponse,
  DescribeDealsByCondRequest,
  DescribeAllocationSummaryByResourceResponse,
  CreateAllocationUnitResponse,
  DescribeDosageCosDetailByDateResponse,
  BillItem,
  DeleteAllocationUnitRequest,
  AllocationRuleExpression,
  BillProduct,
  DeleteAllocationUnitResponse,
  ConditionProject,
  DescribeTagListResponse,
  CosDetailSets,
  DescribeDosageDetail,
  DescribeAllocationRuleSummaryRequest,
  BillPayMode,
  DescribeAllocationTrendByMonthResponse,
  ModifyAllocationUnitResponse,
  AnalyseConditionDetail,
  BillResourceSummary,
  AnalyseHeaderTimeDetail,
  DescribeGatherRuleDetailResponse,
  AllocationRuleOverview,
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
   * 删除归集规则
   */
  async DeleteGatherRule(
    req: DeleteGatherRuleRequest,
    cb?: (error: string, rep: DeleteGatherRuleResponse) => void
  ): Promise<DeleteGatherRuleResponse> {
    return this.request("DeleteGatherRule", req, cb)
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
   * 查询分账账单按资源汇总
   */
  async DescribeAllocationSummaryByResource(
    req: DescribeAllocationSummaryByResourceRequest,
    cb?: (error: string, rep: DescribeAllocationSummaryByResourceResponse) => void
  ): Promise<DescribeAllocationSummaryByResourceResponse> {
    return this.request("DescribeAllocationSummaryByResource", req, cb)
  }

  /**
   * 查询所有公摊规则概览
   */
  async DescribeAllocationRuleSummary(
    req: DescribeAllocationRuleSummaryRequest,
    cb?: (error: string, rep: DescribeAllocationRuleSummaryResponse) => void
  ): Promise<DescribeAllocationRuleSummaryResponse> {
    return this.request("DescribeAllocationRuleSummary", req, cb)
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
   * 删除分账单元
   */
  async DeleteAllocationUnit(
    req: DeleteAllocationUnitRequest,
    cb?: (error: string, rep: DeleteAllocationUnitResponse) => void
  ): Promise<DeleteAllocationUnitResponse> {
    return this.request("DeleteAllocationUnit", req, cb)
  }

  /**
   * 查询资源目录筛选条件
   */
  async DescribeAllocateConditions(
    req: DescribeAllocateConditionsRequest,
    cb?: (error: string, rep: DescribeAllocateConditionsResponse) => void
  ): Promise<DescribeAllocateConditionsResponse> {
    return this.request("DescribeAllocateConditions", req, cb)
  }

  /**
   * 查询分账账单日概览
   */
  async DescribeAllocationOverview(
    req: DescribeAllocationOverviewRequest,
    cb?: (error: string, rep: DescribeAllocationOverviewResponse) => void
  ): Promise<DescribeAllocationOverviewResponse> {
    return this.request("DescribeAllocationOverview", req, cb)
  }

  /**
   * 获取已接入标准用量明细模板产品的用量明细数据，目前已接入并支持查询的产品包括：云联络中心、实时音视频、实时音视频、智能媒资托管、CODING DevOps、全球IP应用加速
   */
  async DescribeDosageDetailList(
    req: DescribeDosageDetailListRequest,
    cb?: (error: string, rep: DescribeDosageDetailListResponse) => void
  ): Promise<DescribeDosageDetailListResponse> {
    return this.request("DescribeDosageDetailList", req, cb)
  }

  /**
   * 创建分账单元
   */
  async CreateAllocationUnit(
    req: CreateAllocationUnitRequest,
    cb?: (error: string, rep: CreateAllocationUnitResponse) => void
  ): Promise<CreateAllocationUnitResponse> {
    return this.request("CreateAllocationUnit", req, cb)
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
   * 获取代金券相关信息
   */
  async DescribeVoucherInfo(
    req: DescribeVoucherInfoRequest,
    cb?: (error: string, rep: DescribeVoucherInfoResponse) => void
  ): Promise<DescribeVoucherInfoResponse> {
    return this.request("DescribeVoucherInfo", req, cb)
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
   * 查看成本分析明细
   */
  async DescribeCostExplorerSummary(
    req: DescribeCostExplorerSummaryRequest,
    cb?: (error: string, rep: DescribeCostExplorerSummaryResponse) => void
  ): Promise<DescribeCostExplorerSummaryResponse> {
    return this.request("DescribeCostExplorerSummary", req, cb)
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
   * 公摊规则删除接口
   */
  async DeleteAllocationRule(
    req: DeleteAllocationRuleRequest,
    cb?: (error: string, rep: DeleteAllocationRuleResponse) => void
  ): Promise<DeleteAllocationRuleResponse> {
    return this.request("DeleteAllocationRule", req, cb)
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
   * 查询公摊规则详情
   */
  async DescribeAllocationRuleDetail(
    req: DescribeAllocationRuleDetailRequest,
    cb?: (error: string, rep: DescribeAllocationRuleDetailResponse) => void
  ): Promise<DescribeAllocationRuleDetailResponse> {
    return this.request("DescribeAllocationRuleDetail", req, cb)
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
   * 获取代金券使用记录
   */
  async DescribeVoucherUsageDetails(
    req: DescribeVoucherUsageDetailsRequest,
    cb?: (error: string, rep: DescribeVoucherUsageDetailsResponse) => void
  ): Promise<DescribeVoucherUsageDetailsResponse> {
    return this.request("DescribeVoucherUsageDetails", req, cb)
  }

  /**
   * 编辑归集规则
   */
  async ModifyGatherRule(
    req: ModifyGatherRuleRequest,
    cb?: (error: string, rep: ModifyGatherRuleResponse) => void
  ): Promise<ModifyGatherRuleResponse> {
    return this.request("ModifyGatherRule", req, cb)
  }

  /**
   * 查询分账账单费用趋势
   */
  async DescribeAllocationTrendByMonth(
    req: DescribeAllocationTrendByMonthRequest,
    cb?: (error: string, rep: DescribeAllocationTrendByMonthResponse) => void
  ): Promise<DescribeAllocationTrendByMonthResponse> {
    return this.request("DescribeAllocationTrendByMonth", req, cb)
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
   * 获取COS产品用量明细
   */
  async DescribeDosageCosDetailByDate(
    req: DescribeDosageCosDetailByDateRequest,
    cb?: (error: string, rep: DescribeDosageCosDetailByDateResponse) => void
  ): Promise<DescribeDosageCosDetailByDateResponse> {
    return this.request("DescribeDosageCosDetailByDate", req, cb)
  }

  /**
   * 创建归集规则
   */
  async CreateGatherRule(
    req: CreateGatherRuleRequest,
    cb?: (error: string, rep: CreateGatherRuleResponse) => void
  ): Promise<CreateGatherRuleResponse> {
    return this.request("CreateGatherRule", req, cb)
  }

  /**
   * 查询分账账单筛选条件
   */
  async DescribeAllocationBillConditions(
    req: DescribeAllocationBillConditionsRequest,
    cb?: (error: string, rep: DescribeAllocationBillConditionsResponse) => void
  ): Promise<DescribeAllocationBillConditionsResponse> {
    return this.request("DescribeAllocationBillConditions", req, cb)
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
   * 查询归集规则详情
   */
  async DescribeGatherRuleDetail(
    req: DescribeGatherRuleDetailRequest,
    cb?: (error: string, rep: DescribeGatherRuleDetailResponse) => void
  ): Promise<DescribeGatherRuleDetailResponse> {
    return this.request("DescribeGatherRuleDetail", req, cb)
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
   * 查询分账目录树
   */
  async DescribeAllocationTree(
    req: DescribeAllocationTreeRequest,
    cb?: (error: string, rep: DescribeAllocationTreeResponse) => void
  ): Promise<DescribeAllocationTreeResponse> {
    return this.request("DescribeAllocationTree", req, cb)
  }

  /**
   * 查询分账单元详情
   */
  async DescribeAllocationUnitDetail(
    req: DescribeAllocationUnitDetailRequest,
    cb?: (error: string, rep: DescribeAllocationUnitDetailResponse) => void
  ): Promise<DescribeAllocationUnitDetailResponse> {
    return this.request("DescribeAllocationUnitDetail", req, cb)
  }

  /**
   * 可以通过API获取当前UIN是否有调账，客户可以更快地主动地获取调账情况。
   */
  async DescribeBillAdjustInfo(
    req: DescribeBillAdjustInfoRequest,
    cb?: (error: string, rep: DescribeBillAdjustInfoResponse) => void
  ): Promise<DescribeBillAdjustInfoResponse> {
    return this.request("DescribeBillAdjustInfo", req, cb)
  }

  /**
   * 查询分账账单明细
   */
  async DescribeAllocationBillDetail(
    req: DescribeAllocationBillDetailRequest,
    cb?: (error: string, rep: DescribeAllocationBillDetailResponse) => void
  ): Promise<DescribeAllocationBillDetailResponse> {
    return this.request("DescribeAllocationBillDetail", req, cb)
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
   * 查询分账账单月概览
   */
  async DescribeAllocationMonthOverview(
    req: DescribeAllocationMonthOverviewRequest,
    cb?: (error: string, rep: DescribeAllocationMonthOverviewResponse) => void
  ): Promise<DescribeAllocationMonthOverviewResponse> {
    return this.request("DescribeAllocationMonthOverview", req, cb)
  }

  /**
   * 创建公摊规则
   */
  async CreateAllocationRule(
    req: CreateAllocationRuleRequest,
    cb?: (error: string, rep: CreateAllocationRuleResponse) => void
  ): Promise<CreateAllocationRuleResponse> {
    return this.request("CreateAllocationRule", req, cb)
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
   * 查询分账账单资源归集汇总
   */
  async DescribeGatherResource(
    req: DescribeGatherResourceRequest,
    cb?: (error: string, rep: DescribeGatherResourceResponse) => void
  ): Promise<DescribeGatherResourceResponse> {
    return this.request("DescribeGatherResource", req, cb)
  }

  /**
   * 查询节省计划详情
   */
  async DescribeSavingPlanResourceInfo(
    req: DescribeSavingPlanResourceInfoRequest,
    cb?: (error: string, rep: DescribeSavingPlanResourceInfoResponse) => void
  ): Promise<DescribeSavingPlanResourceInfoResponse> {
    return this.request("DescribeSavingPlanResourceInfo", req, cb)
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
   * 修改分账单元信息
   */
  async ModifyAllocationUnit(
    req: ModifyAllocationUnitRequest,
    cb?: (error: string, rep: ModifyAllocationUnitResponse) => void
  ): Promise<ModifyAllocationUnitResponse> {
    return this.request("ModifyAllocationUnit", req, cb)
  }

  /**
   * 查询分账账单按产品汇总
   */
  async DescribeAllocationSummaryByBusiness(
    req: DescribeAllocationSummaryByBusinessRequest,
    cb?: (error: string, rep: DescribeAllocationSummaryByBusinessResponse) => void
  ): Promise<DescribeAllocationSummaryByBusinessResponse> {
    return this.request("DescribeAllocationSummaryByBusiness", req, cb)
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
   * 获取按产品汇总消耗详情
   */
  async DescribeCostSummaryByProduct(
    req: DescribeCostSummaryByProductRequest,
    cb?: (error: string, rep: DescribeCostSummaryByProductResponse) => void
  ): Promise<DescribeCostSummaryByProductResponse> {
    return this.request("DescribeCostSummaryByProduct", req, cb)
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
   * 查询分账账单按组件汇总
   */
  async DescribeAllocationSummaryByItem(
    req: DescribeAllocationSummaryByItemRequest,
    cb?: (error: string, rep: DescribeAllocationSummaryByItemResponse) => void
  ): Promise<DescribeAllocationSummaryByItemResponse> {
    return this.request("DescribeAllocationSummaryByItem", req, cb)
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
   * 编辑公摊规则
   */
  async ModifyAllocationRule(
    req: ModifyAllocationRuleRequest,
    cb?: (error: string, rep: ModifyAllocationRuleResponse) => void
  ): Promise<ModifyAllocationRuleResponse> {
    return this.request("ModifyAllocationRule", req, cb)
  }

  /**
     * 查询消耗明细

注意事项：
1. 对于消耗明细数据量级很大（例如每月消耗明细量级超过100w）的客户，通过 API 调用明细数据会有超时风险，建议您开通消耗账单数据存储功能，通过存储桶中获取账单文件进行分析。[账单存储至COS桶](https://cloud.tencent.com/document/product/555/61275)
     */
  async DescribeCostDetail(
    req: DescribeCostDetailRequest,
    cb?: (error: string, rep: DescribeCostDetailResponse) => void
  ): Promise<DescribeCostDetailResponse> {
    return this.request("DescribeCostDetail", req, cb)
  }
}

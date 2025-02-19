import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeBillAdjustInfoResponse, DescribeCostSummaryByProductRequest, DescribeCostExplorerSummaryResponse, DescribeCostExplorerSummaryRequest, DescribeCostSummaryByProductResponse, DeleteAllocationTagResponse, DescribeBillDetailForOrganizationResponse, DescribeCostSummaryByResourceResponse, DescribeBillSummaryByRegionRequest, DescribeAllocateConditionsRequest, DescribeBillSummaryRequest, DescribeBillResourceSummaryResponse, DescribeAllocationOverviewResponse, DescribeDosageCosDetailByDateRequest, DeleteAllocationTagRequest, DescribeBillSummaryByProductRequest, DescribeDosageDetailListResponse, DescribeAllocationBillDetailRequest, DescribeBillListRequest, DescribeAllocationTrendByMonthRequest, DescribeVoucherUsageDetailsResponse, DescribeAllocationOverviewRequest, DescribeGatherResourceResponse, DescribeCostDetailResponse, DescribeAllocationMonthOverviewResponse, DescribeAllocationSummaryByItemResponse, DescribeDosageDetailByDateResponse, DescribeDosageDetailByDateRequest, DescribeGatherResourceRequest, DescribeCostSummaryByProjectResponse, DescribeBillSummaryByTagResponse, DescribeBillSummaryByPayModeResponse, DescribeAllocationSummaryByBusinessResponse, DescribeAllocationSummaryByItemRequest, DescribeBillSummaryByTagRequest, DescribeSavingPlanCoverageResponse, DescribeBillSummaryByProjectRequest, DescribeBillResourceSummaryForOrganizationRequest, DescribeCostSummaryByRegionRequest, DescribeBillDownloadUrlRequest, DescribeAllocationSummaryByBusinessRequest, DescribeBillSummaryByPayModeRequest, DescribeAllocationBillConditionsRequest, DescribeSavingPlanCoverageRequest, PayDealsResponse, DescribeBillDetailResponse, DescribeDealsByCondResponse, DescribeBillSummaryByProjectResponse, DescribeBillAdjustInfoRequest, PayDealsRequest, DescribeAllocationBillConditionsResponse, DescribeAllocationMonthOverviewRequest, DescribeBillSummaryResponse, DescribeBillSummaryForOrganizationRequest, DescribeBillDetailForOrganizationRequest, DescribeVoucherUsageDetailsRequest, DescribeBillResourceSummaryRequest, DescribeCostDetailRequest, DescribeAllocationSummaryByResourceRequest, DescribeBillSummaryForOrganizationResponse, DescribeTagListRequest, DescribeBillResourceSummaryForOrganizationResponse, DescribeCostSummaryByProjectRequest, DescribeCostSummaryByResourceRequest, CreateAllocationTagRequest, DescribeBillSummaryByProductResponse, DescribeBillSummaryByRegionResponse, CreateAllocationTagResponse, DescribeBillDownloadUrlResponse, DescribeAccountBalanceRequest, DescribeBillDetailRequest, DescribeSavingPlanResourceInfoRequest, DescribeVoucherInfoResponse, DescribeBillListResponse, DescribeAccountBalanceResponse, DescribeAllocationBillDetailResponse, DescribeAllocateConditionsResponse, DescribeDosageDetailListRequest, DescribeVoucherInfoRequest, DescribeSavingPlanResourceInfoResponse, DescribeDealsByCondRequest, DescribeAllocationSummaryByResourceResponse, DescribeDosageCosDetailByDateResponse, DescribeTagListResponse, DescribeAllocationTrendByMonthResponse, DescribeCostSummaryByRegionResponse } from "./billing_models";
/**
 * billing client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 成员账号获取管理账号代付账单（费用明细）。
注意事项：在请求接口时，由于网络不稳定或其它异常，可能会导致请求失败。如果您遇到这种情况，我们建议您在接口请求失败时，手动发起重试操作，这样可以更好地确保您的接口请求能够成功执行。
     */
    DescribeBillDetailForOrganization(req: DescribeBillDetailForOrganizationRequest, cb?: (error: string, rep: DescribeBillDetailForOrganizationResponse) => void): Promise<DescribeBillDetailForOrganizationResponse>;
    /**
     * 获取按资源汇总消耗详情
     */
    DescribeCostSummaryByResource(req: DescribeCostSummaryByResourceRequest, cb?: (error: string, rep: DescribeCostSummaryByResourceResponse) => void): Promise<DescribeCostSummaryByResourceResponse>;
    /**
     * 获取收支明细列表，支持翻页和参数过滤
     */
    DescribeBillList(req: DescribeBillListRequest, cb?: (error: string, rep: DescribeBillListResponse) => void): Promise<DescribeBillListResponse>;
    /**
     * 查询当前用户节省计划覆盖率明细数据，如无特别说明，金额单位均为元（国内站）或者美元（国际站）。
     */
    DescribeSavingPlanCoverage(req: DescribeSavingPlanCoverageRequest, cb?: (error: string, rep: DescribeSavingPlanCoverageResponse) => void): Promise<DescribeSavingPlanCoverageResponse>;
    /**
     * 查询分账账单按资源汇总
     */
    DescribeAllocationSummaryByResource(req: DescribeAllocationSummaryByResourceRequest, cb?: (error: string, rep: DescribeAllocationSummaryByResourceResponse) => void): Promise<DescribeAllocationSummaryByResourceResponse>;
    /**
     * 获取账单资源汇总数据
     */
    DescribeBillResourceSummary(req: DescribeBillResourceSummaryRequest, cb?: (error: string, rep: DescribeBillResourceSummaryResponse) => void): Promise<DescribeBillResourceSummaryResponse>;
    /**
     * 查询分账账单按产品汇总
     */
    DescribeAllocationSummaryByBusiness(req: DescribeAllocationSummaryByBusinessRequest, cb?: (error: string, rep: DescribeAllocationSummaryByBusinessResponse) => void): Promise<DescribeAllocationSummaryByBusinessResponse>;
    /**
     * 查询资源目录筛选条件
     */
    DescribeAllocateConditions(req: DescribeAllocateConditionsRequest, cb?: (error: string, rep: DescribeAllocateConditionsResponse) => void): Promise<DescribeAllocateConditionsResponse>;
    /**
     * 查询分账账单日概览
     */
    DescribeAllocationOverview(req: DescribeAllocationOverviewRequest, cb?: (error: string, rep: DescribeAllocationOverviewResponse) => void): Promise<DescribeAllocationOverviewResponse>;
    /**
     * 获取已接入标准用量明细模板产品的用量明细数据，目前已接入并支持查询的产品包括：云联络中心、实时音视频、实时音视频、智能媒资托管、CODING DevOps、全球IP应用加速
     */
    DescribeDosageDetailList(req: DescribeDosageDetailListRequest, cb?: (error: string, rep: DescribeDosageDetailListResponse) => void): Promise<DescribeDosageDetailListResponse>;
    /**
     * 批量设置分账标签
     */
    CreateAllocationTag(req: CreateAllocationTagRequest, cb?: (error: string, rep: CreateAllocationTagResponse) => void): Promise<CreateAllocationTagResponse>;
    /**
     * 获取代金券相关信息
     */
    DescribeVoucherInfo(req: DescribeVoucherInfoRequest, cb?: (error: string, rep: DescribeVoucherInfoResponse) => void): Promise<DescribeVoucherInfoResponse>;
    /**
     * 获取按项目汇总消耗详情
     */
    DescribeCostSummaryByProject(req: DescribeCostSummaryByProjectRequest, cb?: (error: string, rep: DescribeCostSummaryByProjectResponse) => void): Promise<DescribeCostSummaryByProjectResponse>;
    /**
     * 查看成本分析明细
     */
    DescribeCostExplorerSummary(req: DescribeCostExplorerSummaryRequest, cb?: (error: string, rep: DescribeCostExplorerSummaryResponse) => void): Promise<DescribeCostExplorerSummaryResponse>;
    /**
     * 成员账号获取管理账号代付账单（按资源汇总）
     */
    DescribeBillResourceSummaryForOrganization(req: DescribeBillResourceSummaryForOrganizationRequest, cb?: (error: string, rep: DescribeBillResourceSummaryForOrganizationResponse) => void): Promise<DescribeBillResourceSummaryForOrganizationResponse>;
    /**
     * 获取账单明细数据。
注意事项：
1.在请求接口时，由于网络不稳定或其它异常，可能会导致请求失败。如果您遇到这种情况，我们建议您在接口请求失败时，手动发起重试操作，这样可以更好地确保您的接口请求能够成功执行。
2.对于账单明细数据量级很大（例如每月账单明细量级超过20w）的客户，通过 API 调用账单数据效率较低，建议您开通账单数据存储功能，通过存储桶中获取账单文件进行分析。[账单存储至COS桶](https://cloud.tencent.com/document/product/555/61275)
     */
    DescribeBillDetail(req: DescribeBillDetailRequest, cb?: (error: string, rep: DescribeBillDetailResponse) => void): Promise<DescribeBillDetailResponse>;
    /**
     * 该接口支持通过传参，按照产品、项目、地域、计费模式和标签五个维度获取账单费用明细。
     */
    DescribeBillSummary(req: DescribeBillSummaryRequest, cb?: (error: string, rep: DescribeBillSummaryResponse) => void): Promise<DescribeBillSummaryResponse>;
    /**
     * 获取按计费模式汇总费用分布
     */
    DescribeBillSummaryByPayMode(req: DescribeBillSummaryByPayModeRequest, cb?: (error: string, rep: DescribeBillSummaryByPayModeResponse) => void): Promise<DescribeBillSummaryByPayModeResponse>;
    /**
     * 获取按地域汇总消耗详情
     */
    DescribeCostSummaryByRegion(req: DescribeCostSummaryByRegionRequest, cb?: (error: string, rep: DescribeCostSummaryByRegionResponse) => void): Promise<DescribeCostSummaryByRegionResponse>;
    /**
     * 查询分账账单费用趋势
     */
    DescribeAllocationTrendByMonth(req: DescribeAllocationTrendByMonthRequest, cb?: (error: string, rep: DescribeAllocationTrendByMonthResponse) => void): Promise<DescribeAllocationTrendByMonthResponse>;
    /**
     * 该接口支持通过传参，获取L0-PDF、L1-汇总、L2-资源、L3-明细、账单包、五类账单文件下载链接
     */
    DescribeBillDownloadUrl(req: DescribeBillDownloadUrlRequest, cb?: (error: string, rep: DescribeBillDownloadUrlResponse) => void): Promise<DescribeBillDownloadUrlResponse>;
    /**
     * 获取COS产品用量明细
     */
    DescribeDosageCosDetailByDate(req: DescribeDosageCosDetailByDateRequest, cb?: (error: string, rep: DescribeDosageCosDetailByDateResponse) => void): Promise<DescribeDosageCosDetailByDateResponse>;
    /**
     * 查询分账账单筛选条件
     */
    DescribeAllocationBillConditions(req: DescribeAllocationBillConditionsRequest, cb?: (error: string, rep: DescribeAllocationBillConditionsResponse) => void): Promise<DescribeAllocationBillConditionsResponse>;
    /**
     * 获取云账户余额信息。
     */
    DescribeAccountBalance(req?: DescribeAccountBalanceRequest, cb?: (error: string, rep: DescribeAccountBalanceResponse) => void): Promise<DescribeAccountBalanceResponse>;
    /**
     * 按日期获取产品用量明细
     */
    DescribeDosageDetailByDate(req: DescribeDosageDetailByDateRequest, cb?: (error: string, rep: DescribeDosageDetailByDateResponse) => void): Promise<DescribeDosageDetailByDateResponse>;
    /**
     * 可以通过API获取当前UIN是否有调账，客户可以更快地主动地获取调账情况。
     */
    DescribeBillAdjustInfo(req: DescribeBillAdjustInfoRequest, cb?: (error: string, rep: DescribeBillAdjustInfoResponse) => void): Promise<DescribeBillAdjustInfoResponse>;
    /**
     * 查询分账账单明细
     */
    DescribeAllocationBillDetail(req: DescribeAllocationBillDetailRequest, cb?: (error: string, rep: DescribeAllocationBillDetailResponse) => void): Promise<DescribeAllocationBillDetailResponse>;
    /**
     * 获取按地域汇总费用分布
     */
    DescribeBillSummaryByRegion(req: DescribeBillSummaryByRegionRequest, cb?: (error: string, rep: DescribeBillSummaryByRegionResponse) => void): Promise<DescribeBillSummaryByRegionResponse>;
    /**
     * 获取按项目汇总费用分布
     */
    DescribeBillSummaryByProject(req: DescribeBillSummaryByProjectRequest, cb?: (error: string, rep: DescribeBillSummaryByProjectResponse) => void): Promise<DescribeBillSummaryByProjectResponse>;
    /**
     * 查询分账账单月概览
     */
    DescribeAllocationMonthOverview(req: DescribeAllocationMonthOverviewRequest, cb?: (error: string, rep: DescribeAllocationMonthOverviewResponse) => void): Promise<DescribeAllocationMonthOverviewResponse>;
    /**
     * 获取按标签汇总费用分布
     */
    DescribeBillSummaryByTag(req: DescribeBillSummaryByTagRequest, cb?: (error: string, rep: DescribeBillSummaryByTagResponse) => void): Promise<DescribeBillSummaryByTagResponse>;
    /**
     * 该接口支持通过传参，按照产品、项目、地域、计费模式和标签五个维度获取账单费用明细。
     */
    DescribeBillSummaryForOrganization(req: DescribeBillSummaryForOrganizationRequest, cb?: (error: string, rep: DescribeBillSummaryForOrganizationResponse) => void): Promise<DescribeBillSummaryForOrganizationResponse>;
    /**
     * 查询分账账单资源归集汇总
     */
    DescribeGatherResource(req: DescribeGatherResourceRequest, cb?: (error: string, rep: DescribeGatherResourceResponse) => void): Promise<DescribeGatherResourceResponse>;
    /**
     * 查询节省计划详情
     */
    DescribeSavingPlanResourceInfo(req: DescribeSavingPlanResourceInfoRequest, cb?: (error: string, rep: DescribeSavingPlanResourceInfoResponse) => void): Promise<DescribeSavingPlanResourceInfoResponse>;
    /**
     * 获取分账标签
     */
    DescribeTagList(req: DescribeTagListRequest, cb?: (error: string, rep: DescribeTagListResponse) => void): Promise<DescribeTagListResponse>;
    /**
     * 获取代金券使用记录
     */
    DescribeVoucherUsageDetails(req: DescribeVoucherUsageDetailsRequest, cb?: (error: string, rep: DescribeVoucherUsageDetailsResponse) => void): Promise<DescribeVoucherUsageDetailsResponse>;
    /**
     * 支付订单
     */
    PayDeals(req: PayDealsRequest, cb?: (error: string, rep: PayDealsResponse) => void): Promise<PayDealsResponse>;
    /**
     * 获取按产品汇总消耗详情
     */
    DescribeCostSummaryByProduct(req: DescribeCostSummaryByProductRequest, cb?: (error: string, rep: DescribeCostSummaryByProductResponse) => void): Promise<DescribeCostSummaryByProductResponse>;
    /**
     * 批量取消设置分账标签
     */
    DeleteAllocationTag(req: DeleteAllocationTagRequest, cb?: (error: string, rep: DeleteAllocationTagResponse) => void): Promise<DeleteAllocationTagResponse>;
    /**
     * 查询订单
     */
    DescribeDealsByCond(req: DescribeDealsByCondRequest, cb?: (error: string, rep: DescribeDealsByCondResponse) => void): Promise<DescribeDealsByCondResponse>;
    /**
     * 查询分账账单按组件汇总
     */
    DescribeAllocationSummaryByItem(req: DescribeAllocationSummaryByItemRequest, cb?: (error: string, rep: DescribeAllocationSummaryByItemResponse) => void): Promise<DescribeAllocationSummaryByItemResponse>;
    /**
     * 获取产品汇总费用分布
     */
    DescribeBillSummaryByProduct(req: DescribeBillSummaryByProductRequest, cb?: (error: string, rep: DescribeBillSummaryByProductResponse) => void): Promise<DescribeBillSummaryByProductResponse>;
    /**
     * 查询消耗明细

注意事项：
1. 对于消耗明细数据量级很大（例如每月消耗明细量级超过100w）的客户，通过 API 调用明细数据会有超时风险，建议您开通消耗账单数据存储功能，通过存储桶中获取账单文件进行分析。[账单存储至COS桶](https://cloud.tencent.com/document/product/555/61275)
     */
    DescribeCostDetail(req: DescribeCostDetailRequest, cb?: (error: string, rep: DescribeCostDetailResponse) => void): Promise<DescribeCostDetailResponse>;
}

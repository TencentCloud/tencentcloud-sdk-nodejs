import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCostSummaryByProductRequest, DescribeCostSummaryByProjectResponse, DescribeDosageDetailByDateRequest, DescribeBillSummaryByProductRequest, DescribeBillSummaryByPayModeResponse, DescribeBillSummaryByTagRequest, DescribeBillSummaryByProductResponse, DescribeBillSummaryByRegionResponse, DescribeVoucherInfoResponse, DescribeAccountBalanceRequest, DescribeBillDetailRequest, DescribeCostSummaryByProductResponse, DescribeDosageDetailByDateResponse, DescribeBillListResponse, DescribeAccountBalanceResponse, DescribeCostSummaryByRegionRequest, DescribeBillSummaryByRegionRequest, DescribeBillSummaryByPayModeRequest, DescribeCostSummaryByProjectRequest, DescribeDosageCosDetailByDateResponse, DescribeBillResourceSummaryResponse, DescribeVoucherInfoRequest, DescribeVoucherUsageDetailsRequest, DescribeDealsByCondRequest, DescribeBillResourceSummaryRequest, PayDealsRequest, DescribeBillListRequest, PayDealsResponse, DescribeBillSummaryByTagResponse, DescribeCostSummaryByResourceResponse, DescribeBillDetailResponse, DescribeCostDetailRequest, DescribeVoucherUsageDetailsResponse, DescribeDealsByCondResponse, DescribeBillSummaryByProjectRequest, DescribeBillSummaryByProjectResponse, DescribeCostSummaryByResourceRequest, DescribeCostDetailResponse, DescribeDosageCosDetailByDateRequest, DescribeCostSummaryByRegionResponse } from "./billing_models";
/**
 * billing client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取云账户余额信息。
     */
    DescribeAccountBalance(req?: DescribeAccountBalanceRequest, cb?: (error: string, rep: DescribeAccountBalanceResponse) => void): Promise<DescribeAccountBalanceResponse>;
    /**
     * 获取代金券相关信息
     */
    DescribeVoucherInfo(req: DescribeVoucherInfoRequest, cb?: (error: string, rep: DescribeVoucherInfoResponse) => void): Promise<DescribeVoucherInfoResponse>;
    /**
     * 按日期获取产品用量明细
     */
    DescribeDosageDetailByDate(req: DescribeDosageDetailByDateRequest, cb?: (error: string, rep: DescribeDosageDetailByDateResponse) => void): Promise<DescribeDosageDetailByDateResponse>;
    /**
     * 获取按资源汇总消耗详情
     */
    DescribeCostSummaryByResource(req: DescribeCostSummaryByResourceRequest, cb?: (error: string, rep: DescribeCostSummaryByResourceResponse) => void): Promise<DescribeCostSummaryByResourceResponse>;
    /**
     * 获取代金券使用记录
     */
    DescribeVoucherUsageDetails(req: DescribeVoucherUsageDetailsRequest, cb?: (error: string, rep: DescribeVoucherUsageDetailsResponse) => void): Promise<DescribeVoucherUsageDetailsResponse>;
    /**
     * 获取收支明细列表，支持翻页和参数过滤
     */
    DescribeBillList(req: DescribeBillListRequest, cb?: (error: string, rep: DescribeBillListResponse) => void): Promise<DescribeBillListResponse>;
    /**
     * 查询账单明细数据。
注意事项：
1.在请求接口时，由于网络不稳定或其它异常，可能会导致请求失败。如果您遇到这种情况，我们建议您在接口请求失败时，手动发起重试操作，这样可以更好地确保您的接口请求能够成功执行。
2.对于账单明细数据量级很大（例如每月账单明细量级超过20w）的客户，通过 API 调用账单数据效率较低，建议您开通账单数据存储功能，通过存储桶中获取账单文件进行分析。[账单存储至COS桶](https://cloud.tencent.com/document/product/555/61275)
     */
    DescribeBillDetail(req: DescribeBillDetailRequest, cb?: (error: string, rep: DescribeBillDetailResponse) => void): Promise<DescribeBillDetailResponse>;
    /**
     * 查询订单
     */
    DescribeDealsByCond(req: DescribeDealsByCondRequest, cb?: (error: string, rep: DescribeDealsByCondResponse) => void): Promise<DescribeDealsByCondResponse>;
    /**
     * 获取按项目汇总消耗详情
     */
    DescribeCostSummaryByProject(req: DescribeCostSummaryByProjectRequest, cb?: (error: string, rep: DescribeCostSummaryByProjectResponse) => void): Promise<DescribeCostSummaryByProjectResponse>;
    /**
     * 获取按付费模式汇总费用分布
     */
    DescribeBillSummaryByPayMode(req: DescribeBillSummaryByPayModeRequest, cb?: (error: string, rep: DescribeBillSummaryByPayModeResponse) => void): Promise<DescribeBillSummaryByPayModeResponse>;
    /**
     * 查询账单资源汇总数据
     */
    DescribeBillResourceSummary(req: DescribeBillResourceSummaryRequest, cb?: (error: string, rep: DescribeBillResourceSummaryResponse) => void): Promise<DescribeBillResourceSummaryResponse>;
    /**
     * 获取按地域汇总消耗详情
     */
    DescribeCostSummaryByRegion(req: DescribeCostSummaryByRegionRequest, cb?: (error: string, rep: DescribeCostSummaryByRegionResponse) => void): Promise<DescribeCostSummaryByRegionResponse>;
    /**
     * 获取按地域汇总费用分布
     */
    DescribeBillSummaryByRegion(req: DescribeBillSummaryByRegionRequest, cb?: (error: string, rep: DescribeBillSummaryByRegionResponse) => void): Promise<DescribeBillSummaryByRegionResponse>;
    /**
     * 获取按项目汇总费用分布
     */
    DescribeBillSummaryByProject(req: DescribeBillSummaryByProjectRequest, cb?: (error: string, rep: DescribeBillSummaryByProjectResponse) => void): Promise<DescribeBillSummaryByProjectResponse>;
    /**
     * 获取产品汇总费用分布
     */
    DescribeBillSummaryByProduct(req: DescribeBillSummaryByProductRequest, cb?: (error: string, rep: DescribeBillSummaryByProductResponse) => void): Promise<DescribeBillSummaryByProductResponse>;
    /**
     * 获取按标签汇总费用分布
     */
    DescribeBillSummaryByTag(req: DescribeBillSummaryByTagRequest, cb?: (error: string, rep: DescribeBillSummaryByTagResponse) => void): Promise<DescribeBillSummaryByTagResponse>;
    /**
     * 获取按产品汇总消耗详情
     */
    DescribeCostSummaryByProduct(req: DescribeCostSummaryByProductRequest, cb?: (error: string, rep: DescribeCostSummaryByProductResponse) => void): Promise<DescribeCostSummaryByProductResponse>;
    /**
     * 查询消耗明细
     */
    DescribeCostDetail(req: DescribeCostDetailRequest, cb?: (error: string, rep: DescribeCostDetailResponse) => void): Promise<DescribeCostDetailResponse>;
    /**
     * 获取COS产品用量明细
     */
    DescribeDosageCosDetailByDate(req: DescribeDosageCosDetailByDateRequest, cb?: (error: string, rep: DescribeDosageCosDetailByDateResponse) => void): Promise<DescribeDosageCosDetailByDateResponse>;
    /**
     * 支付订单
     */
    PayDeals(req: PayDealsRequest, cb?: (error: string, rep: PayDealsResponse) => void): Promise<PayDealsResponse>;
}

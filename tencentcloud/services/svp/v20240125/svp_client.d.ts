import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateSavingPlanOrderRequest, DescribeSavingPlanCoverageRequest, CreateSavingPlanOrderResponse, DescribeSavingPlanDeductRequest, DescribeSavingPlanUsageRequest, DescribeSavingPlanOverviewResponse, DescribeSavingPlanUsageResponse, DescribeSavingPlanDeductResponse, DescribeSavingPlanOverviewRequest, DescribeSavingPlanCoverageResponse } from "./svp_models";
/**
 * svp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询当前用户节省计划覆盖率明细数据，如无特别说明，金额单位均为元（国内站）或者美元（国际站）。
     */
    DescribeSavingPlanCoverage(req: DescribeSavingPlanCoverageRequest, cb?: (error: string, rep: DescribeSavingPlanCoverageResponse) => void): Promise<DescribeSavingPlanCoverageResponse>;
    /**
     * 查用当前用户明细节省计划查询时段内的使用情况
     */
    DescribeSavingPlanUsage(req: DescribeSavingPlanUsageRequest, cb?: (error: string, rep: DescribeSavingPlanUsageResponse) => void): Promise<DescribeSavingPlanUsageResponse>;
    /**
     * 查用当前用户明细节省计划总览查询时段内的使用情况
     */
    DescribeSavingPlanOverview(req: DescribeSavingPlanOverviewRequest, cb?: (error: string, rep: DescribeSavingPlanOverviewResponse) => void): Promise<DescribeSavingPlanOverviewResponse>;
    /**
     * 创建节省计划订单
     */
    CreateSavingPlanOrder(req: CreateSavingPlanOrderRequest, cb?: (error: string, rep: CreateSavingPlanOrderResponse) => void): Promise<CreateSavingPlanOrderResponse>;
    /**
     * 查询节省计划抵扣明细
     */
    DescribeSavingPlanDeduct(req: DescribeSavingPlanDeductRequest, cb?: (error: string, rep: DescribeSavingPlanDeductResponse) => void): Promise<DescribeSavingPlanDeductResponse>;
}

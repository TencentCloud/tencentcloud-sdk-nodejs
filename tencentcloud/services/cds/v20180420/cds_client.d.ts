import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyDbauditInstancesRenewFlagResponse, DescribeDbauditInstanceTypeResponse, InquiryPriceDbauditInstanceResponse, ModifyDbauditInstancesRenewFlagRequest, DescribeDbauditUsedRegionsResponse, DescribeDbauditInstancesRequest, DescribeDbauditInstanceTypeRequest, DescribeDbauditInstancesResponse, DescribeDbauditUsedRegionsRequest, InquiryPriceDbauditInstanceRequest, DescribeDasbImageIdsResponse, DescribeDasbImageIdsRequest } from "./cds_models";
/**
 * cds client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取镜像列表
     */
    DescribeDasbImageIds(req?: DescribeDasbImageIdsRequest, cb?: (error: string, rep: DescribeDasbImageIdsResponse) => void): Promise<DescribeDasbImageIdsResponse>;
    /**
     * 本接口 (ModifyDbauditInstancesRenewFlag) 用于修改数据安全审计产品实例续费标识
     */
    ModifyDbauditInstancesRenewFlag(req: ModifyDbauditInstancesRenewFlagRequest, cb?: (error: string, rep: ModifyDbauditInstancesRenewFlagResponse) => void): Promise<ModifyDbauditInstancesRenewFlagResponse>;
    /**
     * 本接口 (DescribeDbauditInstances) 用于查询数据安全审计实例列表
     */
    DescribeDbauditInstances(req: DescribeDbauditInstancesRequest, cb?: (error: string, rep: DescribeDbauditInstancesResponse) => void): Promise<DescribeDbauditInstancesResponse>;
    /**
     * 用于查询数据安全审计产品实例价格
     */
    InquiryPriceDbauditInstance(req: InquiryPriceDbauditInstanceRequest, cb?: (error: string, rep: InquiryPriceDbauditInstanceResponse) => void): Promise<InquiryPriceDbauditInstanceResponse>;
    /**
     * 本接口 (DescribeDbauditUsedRegions) 用于查询可售卖地域列表。
     */
    DescribeDbauditUsedRegions(req?: DescribeDbauditUsedRegionsRequest, cb?: (error: string, rep: DescribeDbauditUsedRegionsResponse) => void): Promise<DescribeDbauditUsedRegionsResponse>;
    /**
     * 本接口 (DescribeDbauditInstanceType) 用于查询可售卖的产品规格列表。
     */
    DescribeDbauditInstanceType(req?: DescribeDbauditInstanceTypeRequest, cb?: (error: string, rep: DescribeDbauditInstanceTypeResponse) => void): Promise<DescribeDbauditInstanceTypeResponse>;
}

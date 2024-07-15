import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCloudDedicatedZoneResourceSummaryRequest, DescribeCloudDedicatedZoneHostsResponse, DescribeCloudDedicatedZoneHostsRequest, DescribeCloudDedicatedZoneResourceSummaryResponse } from "./cdz_models";
/**
 * cdz client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询专属可用区各个垂直产品的资源使用情况
     */
    DescribeCloudDedicatedZoneResourceSummary(req: DescribeCloudDedicatedZoneResourceSummaryRequest, cb?: (error: string, rep: DescribeCloudDedicatedZoneResourceSummaryResponse) => void): Promise<DescribeCloudDedicatedZoneResourceSummaryResponse>;
    /**
     * 查询可用区的Host和Host上部署的实例
     */
    DescribeCloudDedicatedZoneHosts(req: DescribeCloudDedicatedZoneHostsRequest, cb?: (error: string, rep: DescribeCloudDedicatedZoneHostsResponse) => void): Promise<DescribeCloudDedicatedZoneHostsResponse>;
}

import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeZonesRequest, DescribeZonesResponse, DescribeRegionsResponse, DescribeRegionsRequest } from "./api_models";
/**
 * api client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口(DescribeRegions)用于查询各个产品支持地域信息，当前只支持cvm。
     */
    DescribeRegions(req: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 本接口(DescribeZones)用于查询产品可用区信息，当前只支持cvm。
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
}

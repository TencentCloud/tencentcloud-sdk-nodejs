import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeProductsRequest, DescribeProductsResponse, DescribeZonesRequest, DescribeZonesResponse, DescribeRegionsResponse, DescribeRegionsRequest } from "./region_models";
/**
 * region client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口(DescribeProducts)用于查询各个支持地域列表查询的产品信息。
     */
    DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse>;
    /**
     * 本接口(DescribeRegions)用于查询各个产品支持地域信息。
     */
    DescribeRegions(req: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 本接口(DescribeZones)用于查询产品可用区信息。
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
}

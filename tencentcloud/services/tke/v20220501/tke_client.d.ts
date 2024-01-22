import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeNodePoolsResponse, DescribeClusterInstancesResponse, DescribeClusterInstancesRequest, DescribeNodePoolsRequest } from "./tke_models";
/**
 * tke client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询集群下节点实例信息
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
    /**
     * 查询 TKE 节点池列表
     */
    DescribeNodePools(req: DescribeNodePoolsRequest, cb?: (error: string, rep: DescribeNodePoolsResponse) => void): Promise<DescribeNodePoolsResponse>;
}

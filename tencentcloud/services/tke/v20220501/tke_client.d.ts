import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateNodePoolResponse, DescribeNodePoolsResponse, DescribeClusterInstancesResponse, DeleteNodePoolResponse, ModifyNodePoolRequest, DescribeClusterInstancesRequest, ModifyNodePoolResponse, CreateNodePoolRequest, DescribeNodePoolsRequest, DeleteNodePoolRequest } from "./tke_models";
/**
 * tke client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询 TKE 节点池列表
     */
    DescribeNodePools(req: DescribeNodePoolsRequest, cb?: (error: string, rep: DescribeNodePoolsResponse) => void): Promise<DescribeNodePoolsResponse>;
    /**
     * 创建 TKE 节点池
     */
    CreateNodePool(req: CreateNodePoolRequest, cb?: (error: string, rep: CreateNodePoolResponse) => void): Promise<CreateNodePoolResponse>;
    /**
     * 删除 TKE 节点池
     */
    DeleteNodePool(req: DeleteNodePoolRequest, cb?: (error: string, rep: DeleteNodePoolResponse) => void): Promise<DeleteNodePoolResponse>;
    /**
     * 更新 TKE 节点池
     */
    ModifyNodePool(req: ModifyNodePoolRequest, cb?: (error: string, rep: ModifyNodePoolResponse) => void): Promise<ModifyNodePoolResponse>;
    /**
     * 查询集群下节点实例信息
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
}

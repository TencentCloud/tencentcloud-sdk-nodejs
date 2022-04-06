import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeClustersRequest, DeleteNodesResponse, DeleteClusterResponse, CreateClusterRequest, CreateClusterResponse, BindAutoScalingGroupResponse, DeleteClusterRequest, AddNodesRequest, BindAutoScalingGroupRequest, DeleteNodesRequest, DescribeClustersResponse, AddNodesResponse } from "./thpc_models";
/**
 * thpc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口(DeleteNodes)用于删除指定集群中一个或者多个计算节点或者登录节点。
     */
    DeleteNodes(req: DeleteNodesRequest, cb?: (error: string, rep: DeleteNodesResponse) => void): Promise<DeleteNodesResponse>;
    /**
     * 本接口(BindAutoScalingGroup)用于为集群队列绑定弹性伸缩组
     */
    BindAutoScalingGroup(req: BindAutoScalingGroupRequest, cb?: (error: string, rep: BindAutoScalingGroupResponse) => void): Promise<BindAutoScalingGroupResponse>;
    /**
     * 本接口 (CreateCluster) 用于创建并启动集群。
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 本接口(AddNodes)用于添加一个或者多个计算节点或者登录节点到指定集群。
     */
    AddNodes(req: AddNodesRequest, cb?: (error: string, rep: AddNodesResponse) => void): Promise<AddNodesResponse>;
    /**
     * 本接口（DescribeClusters）用于查询集群列表。
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 本接口（DeleteCluster）用于删除一个指定的集群。
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
}

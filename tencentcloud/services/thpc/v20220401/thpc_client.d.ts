import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeAutoScalingConfigurationResponse, DescribeClusterStorageOptionRequest, DescribeClustersRequest, SetAutoScalingConfigurationRequest, DescribeNodesRequest, DeleteNodesResponse, AddClusterStorageOptionResponse, DeleteClusterResponse, AddQueueRequest, CreateClusterResponse, DescribeQueuesRequest, SetAutoScalingConfigurationResponse, CreateClusterRequest, AddQueueResponse, DescribeClusterStorageOptionResponse, DescribeQueuesResponse, BindAutoScalingGroupResponse, DeleteClusterRequest, DescribeClusterActivitiesRequest, DeleteQueueRequest, AddNodesRequest, DeleteClusterStorageOptionRequest, AddClusterStorageOptionRequest, BindAutoScalingGroupRequest, DescribeAutoScalingConfigurationRequest, DeleteNodesRequest, DescribeClustersResponse, DeleteClusterStorageOptionResponse, DescribeNodesResponse, DescribeClusterActivitiesResponse, DeleteQueueResponse, AddNodesResponse } from "./thpc_models";
/**
 * thpc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口 (DescribeClusterStorageOption) 用于查询集群存储选项信息。
     */
    DescribeClusterStorageOption(req: DescribeClusterStorageOptionRequest, cb?: (error: string, rep: DescribeClusterStorageOptionResponse) => void): Promise<DescribeClusterStorageOptionResponse>;
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

* 本接口为异步接口， 当创建集群请求下发成功后会返回一个集群`ID`和一个`RequestId`，此时创建集群操作并未立即完成。在此期间集群的状态将会处于“PENDING”或者“INITING”，集群创建结果可以通过调用 [DescribeClusters](https://cloud.tencent.com/document/product/1527/72100)  接口查询，如果集群状态(ClusterStatus)变为“RUNNING(运行中)”，则代表集群创建成功，“ INIT_FAILED”代表集群创建失败。
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 本接口（DeleteCluster）用于删除一个指定的集群。
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 本接口(SetAutoScalingConfiguration)用于为集群设置集群弹性伸缩配置信息。
     */
    SetAutoScalingConfiguration(req: SetAutoScalingConfigurationRequest, cb?: (error: string, rep: SetAutoScalingConfigurationResponse) => void): Promise<SetAutoScalingConfigurationResponse>;
    /**
     * 本接口(AddQueue)用于添加队列到指定集群。
* 本接口为目前只支持SchedulerType为SLURM的集群。
* 单个集群中队列数量上限为10个。
     */
    AddQueue(req: AddQueueRequest, cb?: (error: string, rep: AddQueueResponse) => void): Promise<AddQueueResponse>;
    /**
     * 本接口 (DescribeNodes) 用于查询指定集群节点概览信息列表。
     */
    DescribeNodes(req: DescribeNodesRequest, cb?: (error: string, rep: DescribeNodesResponse) => void): Promise<DescribeNodesResponse>;
    /**
     * 本接口(DeleteQueue)用于从指定集群删除队列。
* 本接口为目前只支持SchedulerType为SLURM的集群。

* 删除队列时，需要保证队列内不存在节点。
     */
    DeleteQueue(req: DeleteQueueRequest, cb?: (error: string, rep: DeleteQueueResponse) => void): Promise<DeleteQueueResponse>;
    /**
     * 本接口 (DeleteClusterStorageOption) 用于删除集群存储选项信息。
     */
    DeleteClusterStorageOption(req: DeleteClusterStorageOptionRequest, cb?: (error: string, rep: DeleteClusterStorageOptionResponse) => void): Promise<DeleteClusterStorageOptionResponse>;
    /**
     * 本接口(AddNodes)用于添加一个或者多个计算节点或者登录节点到指定集群。
     */
    AddNodes(req: AddNodesRequest, cb?: (error: string, rep: AddNodesResponse) => void): Promise<AddNodesResponse>;
    /**
     * 本接口(DescribeAutoScalingConfiguration)用于查询集群弹性伸缩配置信息。本接口仅适用于弹性伸缩类型为THPC_AS的集群。
     */
    DescribeAutoScalingConfiguration(req: DescribeAutoScalingConfigurationRequest, cb?: (error: string, rep: DescribeAutoScalingConfigurationResponse) => void): Promise<DescribeAutoScalingConfigurationResponse>;
    /**
     * 本接口（DescribeClusters）用于查询集群列表。
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 本接口（AddClusterStorageOption）用于添加集群存储选项信息。
     */
    AddClusterStorageOption(req: AddClusterStorageOptionRequest, cb?: (error: string, rep: AddClusterStorageOptionResponse) => void): Promise<AddClusterStorageOptionResponse>;
    /**
     * 本接口（DescribeClusterActivities）用于查询集群活动历史记录列表。
     */
    DescribeClusterActivities(req: DescribeClusterActivitiesRequest, cb?: (error: string, rep: DescribeClusterActivitiesResponse) => void): Promise<DescribeClusterActivitiesResponse>;
    /**
     * 本接口(DescribeQueues)用于查询指定集群队列概览信息列表。
     */
    DescribeQueues(req: DescribeQueuesRequest, cb?: (error: string, rep: DescribeQueuesResponse) => void): Promise<DescribeQueuesResponse>;
}

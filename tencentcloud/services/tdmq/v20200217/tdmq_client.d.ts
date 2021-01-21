import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteTopicsResponse, DescribeBindClustersResponse, ModifyEnvironmentAttributesRequest, DescribeSubscriptionsRequest, DeleteClusterResponse, ModifyClusterRequest, DescribeEnvironmentAttributesRequest, DescribeBindClustersRequest, CreateClusterResponse, DescribeTopicsResponse, CreateClusterRequest, ModifyClusterResponse, CreateTopicResponse, DescribeClusterDetailRequest, DescribeEnvironmentsResponse, DescribeEnvironmentsRequest, ModifyTopicResponse, DescribeClustersRequest, DescribeProducersRequest, DescribeEnvironmentAttributesResponse, DeleteClusterRequest, DescribeSubscriptionsResponse, DescribeProducersResponse, CreateTopicRequest, DescribeTopicsRequest, DeleteEnvironmentsResponse, DeleteTopicsRequest, DescribeEnvironmentRolesResponse, CreateSubscriptionRequest, ModifyTopicRequest, DescribeBindVpcsResponse, ModifyEnvironmentAttributesResponse, DeleteSubscriptionsRequest, CreateEnvironmentResponse, ResetMsgSubOffsetByTimestampRequest, DeleteSubscriptionsResponse, CreateSubscriptionResponse, DeleteEnvironmentsRequest, DescribeClusterDetailResponse, DescribeBindVpcsRequest, DescribeClustersResponse, ResetMsgSubOffsetByTimestampResponse, CreateEnvironmentRequest, DescribeEnvironmentRolesRequest } from "./tdmq_models";
/**
 * tdmq client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 批量删除租户下的命名空间
     */
    DeleteEnvironments(req: DeleteEnvironmentsRequest, cb?: (error: string, rep: DeleteEnvironmentsResponse) => void): Promise<DeleteEnvironmentsResponse>;
    /**
     * 获取租户VPC绑定关系
     */
    DescribeBindVpcs(req: DescribeBindVpcsRequest, cb?: (error: string, rep: DescribeBindVpcsResponse) => void): Promise<DescribeBindVpcsResponse>;
    /**
     * 创建用户的集群
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 修改主题备注和分区数
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 删除集群
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 获取命名空间角色列表
     */
    DescribeEnvironmentRoles(req: DescribeEnvironmentRolesRequest, cb?: (error: string, rep: DescribeEnvironmentRolesResponse) => void): Promise<DescribeEnvironmentRolesResponse>;
    /**
     * 批量删除topics
     */
    DeleteTopics(req: DeleteTopicsRequest, cb?: (error: string, rep: DeleteTopicsResponse) => void): Promise<DeleteTopicsResponse>;
    /**
     * 获取用户绑定的专享集群列表
     */
    DescribeBindClusters(req?: DescribeBindClustersRequest, cb?: (error: string, rep: DescribeBindClustersResponse) => void): Promise<DescribeBindClustersResponse>;
    /**
     * 获取集群列表
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 新增指定分区、类型的消息主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 获取租户下命名空间列表
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 获取集群的详细信息
     */
    DescribeClusterDetail(req: DescribeClusterDetailRequest, cb?: (error: string, rep: DescribeClusterDetailResponse) => void): Promise<DescribeClusterDetailResponse>;
    /**
     * 查询指定环境和主题下的订阅者列表
     */
    DescribeSubscriptions(req: DescribeSubscriptionsRequest, cb?: (error: string, rep: DescribeSubscriptionsResponse) => void): Promise<DescribeSubscriptionsResponse>;
    /**
     * 用于在用户账户下创建消息队列 Tdmq 命名空间
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 获取生产者列表，仅显示在线的生产者
     */
    DescribeProducers(req: DescribeProducersRequest, cb?: (error: string, rep: DescribeProducersResponse) => void): Promise<DescribeProducersResponse>;
    /**
     * 获取环境下主题列表
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
    /**
     * 更新集群信息
     */
    ModifyCluster(req: ModifyClusterRequest, cb?: (error: string, rep: ModifyClusterResponse) => void): Promise<ModifyClusterResponse>;
    /**
     * 修改指定命名空间的属性值
     */
    ModifyEnvironmentAttributes(req: ModifyEnvironmentAttributesRequest, cb?: (error: string, rep: ModifyEnvironmentAttributesResponse) => void): Promise<ModifyEnvironmentAttributesResponse>;
    /**
     * 创建一个主题的订阅关系
     */
    CreateSubscription(req: CreateSubscriptionRequest, cb?: (error: string, rep: CreateSubscriptionResponse) => void): Promise<CreateSubscriptionResponse>;
    /**
     * 获取指定命名空间的属性
     */
    DescribeEnvironmentAttributes(req: DescribeEnvironmentAttributesRequest, cb?: (error: string, rep: DescribeEnvironmentAttributesResponse) => void): Promise<DescribeEnvironmentAttributesResponse>;
    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     */
    ResetMsgSubOffsetByTimestamp(req: ResetMsgSubOffsetByTimestampRequest, cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void): Promise<ResetMsgSubOffsetByTimestampResponse>;
    /**
     * 删除订阅关系
     */
    DeleteSubscriptions(req: DeleteSubscriptionsRequest, cb?: (error: string, rep: DeleteSubscriptionsResponse) => void): Promise<DeleteSubscriptionsResponse>;
}

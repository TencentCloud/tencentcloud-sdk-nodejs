import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeRolesResponse, DescribeBindClustersResponse, DescribeNamespaceBundlesOptRequest, DescribeSubscriptionsRequest, CreateRocketMQGroupRequest, ModifyEnvironmentAttributesRequest, DeleteClusterResponse, SendBatchMessagesResponse, ModifyCmqSubscriptionAttributeResponse, CreateCmqTopicRequest, DescribeRocketMQNamespacesResponse, ModifyClusterResponse, DescribeCmqQueuesResponse, DescribeNamespaceBundlesOptResponse, CreateCmqSubscribeRequest, RewindCmqQueueResponse, DeleteClusterRequest, DeleteRocketMQGroupRequest, DeleteCmqTopicResponse, CreateSubscriptionRequest, CreateRocketMQNamespaceRequest, DescribeCmqTopicDetailResponse, CreateEnvironmentResponse, CreateSubscriptionResponse, SendMsgResponse, ModifyCmqTopicAttributeResponse, DescribeCmqSubscriptionDetailRequest, DescribeEnvironmentsRequest, DescribeRocketMQNamespacesRequest, DescribeRocketMQTopicsRequest, ModifyRocketMQClusterResponse, DescribeCmqQueueDetailResponse, CreateEnvironmentRequest, DeleteTopicsResponse, DescribeClustersRequest, DescribeRocketMQClusterResponse, DescribeCmqSubscriptionDetailResponse, RewindCmqQueueRequest, ModifyClusterRequest, DescribeEnvironmentAttributesRequest, ModifyRocketMQClusterRequest, AcknowledgeMessageRequest, DescribeTopicsResponse, PublishCmqMsgResponse, CreateRocketMQClusterRequest, SendCmqMsgRequest, AcknowledgeMessageResponse, DeleteEnvironmentRolesResponse, DescribeClusterDetailRequest, ModifyRoleResponse, DeleteCmqQueueResponse, DescribeRocketMQClusterRequest, DeleteRocketMQTopicResponse, ModifyCmqTopicAttributeRequest, DeleteRolesRequest, CreateCmqSubscribeResponse, DescribeSubscriptionsResponse, ModifyRoleRequest, SendMessagesResponse, ReceiveMessageRequest, CreateTopicRequest, DescribeTopicsRequest, DeleteEnvironmentsResponse, DescribeEnvironmentRolesResponse, ClearCmqQueueRequest, ModifyRocketMQGroupRequest, DescribeCmqTopicsResponse, DescribeCmqTopicDetailRequest, UnbindCmqDeadLetterResponse, ModifyRocketMQNamespaceResponse, DeleteEnvironmentsRequest, DescribeRocketMQClustersRequest, DescribeBindVpcsRequest, DescribeClustersResponse, ClearCmqSubscriptionFilterTagsRequest, CreateRocketMQGroupResponse, ModifyRocketMQNamespaceRequest, DescribeEnvironmentRolesRequest, DeleteRolesResponse, ModifyRocketMQTopicRequest, DescribeRocketMQTopicsResponse, DeleteRocketMQGroupResponse, CreateCmqQueueResponse, DescribeRocketMQGroupsResponse, ResetMsgSubOffsetByTimestampResponse, CreateClusterResponse, DescribeCmqDeadLetterSourceQueuesRequest, DeleteRocketMQNamespaceRequest, CreateClusterRequest, ModifyCmqQueueAttributeResponse, CreateTopicResponse, DescribeCmqQueuesRequest, DescribeEnvironmentsResponse, ModifyCmqSubscriptionAttributeRequest, ModifyTopicResponse, ReceiveMessageResponse, DeleteRocketMQClusterResponse, CreateCmqTopicResponse, ClearCmqSubscriptionFilterTagsResponse, DescribeCmqTopicsRequest, DeleteTopicsRequest, ModifyTopicRequest, ResetMsgSubOffsetByTimestampRequest, CreateEnvironmentRoleResponse, DescribeBindVpcsResponse, DeleteCmqSubscribeRequest, DescribeCmqDeadLetterSourceQueuesResponse, DeleteSubscriptionsResponse, DeleteRocketMQTopicRequest, CreateRocketMQClusterResponse, DeleteRocketMQNamespaceResponse, SendMsgRequest, DescribeCmqQueueDetailRequest, CreateRocketMQTopicRequest, CreateRoleResponse, DeleteRocketMQClusterRequest, DeleteEnvironmentRolesRequest, ClearCmqQueueResponse, DescribeNodeHealthOptRequest, DescribeBindClustersRequest, CreateRocketMQTopicResponse, ModifyEnvironmentAttributesResponse, CreateCmqQueueRequest, ModifyEnvironmentRoleResponse, DeleteCmqQueueRequest, DescribeRocketMQGroupsRequest, DescribeRocketMQClustersResponse, CreateRoleRequest, DescribeProducersRequest, ModifyEnvironmentRoleRequest, DescribeEnvironmentAttributesResponse, DescribeProducersResponse, CreateRocketMQNamespaceResponse, SendBatchMessagesRequest, DeleteCmqTopicRequest, SendCmqMsgResponse, DescribeNodeHealthOptResponse, PublishCmqMsgRequest, UnbindCmqDeadLetterRequest, ModifyCmqQueueAttributeRequest, DeleteCmqSubscribeResponse, DescribeRolesRequest, DeleteSubscriptionsRequest, ModifyRocketMQGroupResponse, DescribeClusterDetailResponse, SendMessagesRequest, CreateEnvironmentRoleRequest, ModifyRocketMQTopicResponse } from "./tdmq_models";
/**
 * tdmq client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除cmq主题
     */
    DeleteCmqTopic(req: DeleteCmqTopicRequest, cb?: (error: string, rep: DeleteCmqTopicResponse) => void): Promise<DeleteCmqTopicResponse>;
    /**
     * 获取RocketMQ集群列表
     */
    DescribeRocketMQClusters(req: DescribeRocketMQClustersRequest, cb?: (error: string, rep: DescribeRocketMQClustersResponse) => void): Promise<DescribeRocketMQClustersResponse>;
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
     * 清空cmq消息队列中的消息
     */
    ClearCmqQueue(req: ClearCmqQueueRequest, cb?: (error: string, rep: ClearCmqQueueResponse) => void): Promise<ClearCmqQueueResponse>;
    /**
     * 删除RocketMQ主题
     */
    DeleteRocketMQTopic(req: DeleteRocketMQTopicRequest, cb?: (error: string, rep: DeleteRocketMQTopicResponse) => void): Promise<DeleteRocketMQTopicResponse>;
    /**
     * 运营端获节点健康状态
     */
    DescribeNodeHealthOpt(req: DescribeNodeHealthOptRequest, cb?: (error: string, rep: DescribeNodeHealthOptResponse) => void): Promise<DescribeNodeHealthOptResponse>;
    /**
     * 创建角色
     */
    CreateRole(req: CreateRoleRequest, cb?: (error: string, rep: CreateRoleResponse) => void): Promise<CreateRoleResponse>;
    /**
     * 创建cmq队列接口
     */
    CreateCmqQueue(req: CreateCmqQueueRequest, cb?: (error: string, rep: CreateCmqQueueResponse) => void): Promise<CreateCmqQueueResponse>;
    /**
     * 更新RocketMQ消费组信息
     */
    ModifyRocketMQGroup(req: ModifyRocketMQGroupRequest, cb?: (error: string, rep: ModifyRocketMQGroupResponse) => void): Promise<ModifyRocketMQGroupResponse>;
    /**
     * 修改cmq主题属性
     */
    ModifyCmqTopicAttribute(req: ModifyCmqTopicAttributeRequest, cb?: (error: string, rep: ModifyCmqTopicAttributeResponse) => void): Promise<ModifyCmqTopicAttributeResponse>;
    /**
     * 修改cmq队列属性
     */
    ModifyCmqQueueAttribute(req: ModifyCmqQueueAttributeRequest, cb?: (error: string, rep: ModifyCmqQueueAttributeResponse) => void): Promise<ModifyCmqQueueAttributeResponse>;
    /**
     * 删除订阅关系
     */
    DeleteSubscriptions(req: DeleteSubscriptionsRequest, cb?: (error: string, rep: DeleteSubscriptionsResponse) => void): Promise<DeleteSubscriptionsResponse>;
    /**
     * 创建cmq主题
     */
    CreateCmqTopic(req: CreateCmqTopicRequest, cb?: (error: string, rep: CreateCmqTopicResponse) => void): Promise<CreateCmqTopicResponse>;
    /**
     * 查询cmq订阅详情
     */
    DescribeCmqSubscriptionDetail(req: DescribeCmqSubscriptionDetailRequest, cb?: (error: string, rep: DescribeCmqSubscriptionDetailResponse) => void): Promise<DescribeCmqSubscriptionDetailResponse>;
    /**
     * 枚举cmq死信队列源队列
     */
    DescribeCmqDeadLetterSourceQueues(req: DescribeCmqDeadLetterSourceQueuesRequest, cb?: (error: string, rep: DescribeCmqDeadLetterSourceQueuesResponse) => void): Promise<DescribeCmqDeadLetterSourceQueuesResponse>;
    /**
     * 获取RocketMQ命名空间列表
     */
    DescribeRocketMQNamespaces(req: DescribeRocketMQNamespacesRequest, cb?: (error: string, rep: DescribeRocketMQNamespacesResponse) => void): Promise<DescribeRocketMQNamespacesResponse>;
    /**
     * 删除cmq队列
     */
    DeleteCmqQueue(req: DeleteCmqQueueRequest, cb?: (error: string, rep: DeleteCmqQueueResponse) => void): Promise<DeleteCmqQueueResponse>;
    /**
     * 此接口用于创建一个RocketMQ集群
     */
    CreateRocketMQCluster(req: CreateRocketMQClusterRequest, cb?: (error: string, rep: CreateRocketMQClusterResponse) => void): Promise<CreateRocketMQClusterResponse>;
    /**
     * 删除环境角色授权。
     */
    DeleteEnvironmentRoles(req: DeleteEnvironmentRolesRequest, cb?: (error: string, rep: DeleteEnvironmentRolesResponse) => void): Promise<DeleteEnvironmentRolesResponse>;
    /**
     * 删除RocketMQ消费组
     */
    DeleteRocketMQGroup(req: DeleteRocketMQGroupRequest, cb?: (error: string, rep: DeleteRocketMQGroupResponse) => void): Promise<DeleteRocketMQGroupResponse>;
    /**
     * 获取命名空间角色列表
     */
    DescribeEnvironmentRoles(req: DescribeEnvironmentRolesRequest, cb?: (error: string, rep: DescribeEnvironmentRolesResponse) => void): Promise<DescribeEnvironmentRolesResponse>;
    /**
     * 发送cmq主题消息
     */
    PublishCmqMsg(req: PublishCmqMsgRequest, cb?: (error: string, rep: PublishCmqMsgResponse) => void): Promise<PublishCmqMsgResponse>;
    /**
     * 更新RocketMQ命名空间
     */
    ModifyRocketMQNamespace(req: ModifyRocketMQNamespaceRequest, cb?: (error: string, rep: ModifyRocketMQNamespaceResponse) => void): Promise<ModifyRocketMQNamespaceResponse>;
    /**
     * 获取用户绑定的专享集群列表
     */
    DescribeBindClusters(req?: DescribeBindClustersRequest, cb?: (error: string, rep: DescribeBindClustersResponse) => void): Promise<DescribeBindClustersResponse>;
    /**
     * 查询cmq队列详情
     */
    DescribeCmqQueueDetail(req: DescribeCmqQueueDetailRequest, cb?: (error: string, rep: DescribeCmqQueueDetailResponse) => void): Promise<DescribeCmqQueueDetailResponse>;
    /**
     * 回溯cmq队列
     */
    RewindCmqQueue(req: RewindCmqQueueRequest, cb?: (error: string, rep: RewindCmqQueueResponse) => void): Promise<RewindCmqQueueResponse>;
    /**
     * 获取集群列表
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 此接口仅用于测试发生消息，不能作为现网正式生产使用
     */
    SendMsg(req: SendMsgRequest, cb?: (error: string, rep: SendMsgResponse) => void): Promise<SendMsgResponse>;
    /**
     * 新增指定分区、类型的消息主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 获取RocketMQ消费组列表
     */
    DescribeRocketMQGroups(req: DescribeRocketMQGroupsRequest, cb?: (error: string, rep: DescribeRocketMQGroupsResponse) => void): Promise<DescribeRocketMQGroupsResponse>;
    /**
     * 查询cmq全量队列
     */
    DescribeCmqQueues(req: DescribeCmqQueuesRequest, cb?: (error: string, rep: DescribeCmqQueuesResponse) => void): Promise<DescribeCmqQueuesResponse>;
    /**
     * 创建RocketMQ主题
     */
    CreateRocketMQTopic(req: CreateRocketMQTopicRequest, cb?: (error: string, rep: CreateRocketMQTopicResponse) => void): Promise<CreateRocketMQTopicResponse>;
    /**
     * 获取租户下命名空间列表
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 获取RocketMQ主题列表
     */
    DescribeRocketMQTopics(req: DescribeRocketMQTopicsRequest, cb?: (error: string, rep: DescribeRocketMQTopicsResponse) => void): Promise<DescribeRocketMQTopicsResponse>;
    /**
     * 获取集群的详细信息
     */
    DescribeClusterDetail(req: DescribeClusterDetailRequest, cb?: (error: string, rep: DescribeClusterDetailResponse) => void): Promise<DescribeClusterDetailResponse>;
    /**
     * 删除RocketMQ集群
     */
    DeleteRocketMQCluster(req: DeleteRocketMQClusterRequest, cb?: (error: string, rep: DeleteRocketMQClusterResponse) => void): Promise<DeleteRocketMQClusterResponse>;
    /**
     * 创建RocketMQ消费组
     */
    CreateRocketMQGroup(req: CreateRocketMQGroupRequest, cb?: (error: string, rep: CreateRocketMQGroupResponse) => void): Promise<CreateRocketMQGroupResponse>;
    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     */
    ResetMsgSubOffsetByTimestamp(req: ResetMsgSubOffsetByTimestampRequest, cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void): Promise<ResetMsgSubOffsetByTimestampResponse>;
    /**
     * 根据提供的 MessageID 确认指定 topic 中的消息
     */
    AcknowledgeMessage(req: AcknowledgeMessageRequest, cb?: (error: string, rep: AcknowledgeMessageResponse) => void): Promise<AcknowledgeMessageResponse>;
    /**
     * 查询cmq主题详情
     */
    DescribeCmqTopicDetail(req: DescribeCmqTopicDetailRequest, cb?: (error: string, rep: DescribeCmqTopicDetailResponse) => void): Promise<DescribeCmqTopicDetailResponse>;
    /**
     * 查询指定环境和主题下的订阅者列表
     */
    DescribeSubscriptions(req: DescribeSubscriptionsRequest, cb?: (error: string, rep: DescribeSubscriptionsResponse) => void): Promise<DescribeSubscriptionsResponse>;
    /**
     * 用于在用户账户下创建消息队列 Tdmq 命名空间
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 删除角色，支持批量。
     */
    DeleteRoles(req: DeleteRolesRequest, cb?: (error: string, rep: DeleteRolesResponse) => void): Promise<DeleteRolesResponse>;
    /**
     * 获取生产者列表，仅显示在线的生产者
     */
    DescribeProducers(req: DescribeProducersRequest, cb?: (error: string, rep: DescribeProducersResponse) => void): Promise<DescribeProducersResponse>;
    /**
     * 接收发送到指定 topic 中的消息
     */
    ReceiveMessage(req: ReceiveMessageRequest, cb?: (error: string, rep: ReceiveMessageResponse) => void): Promise<ReceiveMessageResponse>;
    /**
     * 获取环境下主题列表
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
    /**
     * 枚举cmq全量主题
     */
    DescribeCmqTopics(req: DescribeCmqTopicsRequest, cb?: (error: string, rep: DescribeCmqTopicsResponse) => void): Promise<DescribeCmqTopicsResponse>;
    /**
     * 清空订阅者消息标签
     */
    ClearCmqSubscriptionFilterTags(req: ClearCmqSubscriptionFilterTagsRequest, cb?: (error: string, rep: ClearCmqSubscriptionFilterTagsResponse) => void): Promise<ClearCmqSubscriptionFilterTagsResponse>;
    /**
     * 删除cmq订阅
     */
    DeleteCmqSubscribe(req: DeleteCmqSubscribeRequest, cb?: (error: string, rep: DeleteCmqSubscribeResponse) => void): Promise<DeleteCmqSubscribeResponse>;
    /**
     * 发送单条消息
     */
    SendMessages(req: SendMessagesRequest, cb?: (error: string, rep: SendMessagesResponse) => void): Promise<SendMessagesResponse>;
    /**
     * 更新RocketMQ集群信息
     */
    ModifyRocketMQCluster(req: ModifyRocketMQClusterRequest, cb?: (error: string, rep: ModifyRocketMQClusterResponse) => void): Promise<ModifyRocketMQClusterResponse>;
    /**
     * 发送cmq消息
     */
    SendCmqMsg(req: SendCmqMsgRequest, cb?: (error: string, rep: SendCmqMsgResponse) => void): Promise<SendCmqMsgResponse>;
    /**
     * 更新集群信息
     */
    ModifyCluster(req: ModifyClusterRequest, cb?: (error: string, rep: ModifyClusterResponse) => void): Promise<ModifyClusterResponse>;
    /**
     * 更新RocketMQ主题信息
     */
    ModifyRocketMQTopic(req: ModifyRocketMQTopicRequest, cb?: (error: string, rep: ModifyRocketMQTopicResponse) => void): Promise<ModifyRocketMQTopicResponse>;
    /**
     * 角色修改
     */
    ModifyRole(req: ModifyRoleRequest, cb?: (error: string, rep: ModifyRoleResponse) => void): Promise<ModifyRoleResponse>;
    /**
     * 修改指定命名空间的属性值
     */
    ModifyEnvironmentAttributes(req: ModifyEnvironmentAttributesRequest, cb?: (error: string, rep: ModifyEnvironmentAttributesResponse) => void): Promise<ModifyEnvironmentAttributesResponse>;
    /**
     * 修改cmq订阅属性
     */
    ModifyCmqSubscriptionAttribute(req: ModifyCmqSubscriptionAttributeRequest, cb?: (error: string, rep: ModifyCmqSubscriptionAttributeResponse) => void): Promise<ModifyCmqSubscriptionAttributeResponse>;
    /**
     * 获取角色列表
     */
    DescribeRoles(req: DescribeRolesRequest, cb?: (error: string, rep: DescribeRolesResponse) => void): Promise<DescribeRolesResponse>;
    /**
     * 解绑cmq死信队列
     */
    UnbindCmqDeadLetter(req: UnbindCmqDeadLetterRequest, cb?: (error: string, rep: UnbindCmqDeadLetterResponse) => void): Promise<UnbindCmqDeadLetterResponse>;
    /**
     * 创建一个主题的订阅关系
     */
    CreateSubscription(req: CreateSubscriptionRequest, cb?: (error: string, rep: CreateSubscriptionResponse) => void): Promise<CreateSubscriptionResponse>;
    /**
     * 创建RocketMQ命名空间
     */
    CreateRocketMQNamespace(req: CreateRocketMQNamespaceRequest, cb?: (error: string, rep: CreateRocketMQNamespaceResponse) => void): Promise<CreateRocketMQNamespaceResponse>;
    /**
     * 获取单个RocketMQ集群信息
     */
    DescribeRocketMQCluster(req: DescribeRocketMQClusterRequest, cb?: (error: string, rep: DescribeRocketMQClusterResponse) => void): Promise<DescribeRocketMQClusterResponse>;
    /**
     * 批量发送消息

注意：TDMQ 批量发送消息的接口是在 TDMQ-HTTP 的服务侧将消息打包为一个 Batch，然后将该 Batch 在服务内部当作一次 TCP 请求发送出去。所以在使用过程中，用户还是按照单条消息发送的逻辑，每一条消息是一个独立的 HTTP 的请求，在 TDMQ-HTTP 的服务内部，会将多个 HTTP 的请求聚合为一个 Batch 发送到服务端。即，批量发送消息在使用上与发送单条消息是一致的，batch 的聚合是在 TDMQ-HTTP 的服务内部完成的。
     */
    SendBatchMessages(req: SendBatchMessagesRequest, cb?: (error: string, rep: SendBatchMessagesResponse) => void): Promise<SendBatchMessagesResponse>;
    /**
     * 获取指定命名空间的属性
     */
    DescribeEnvironmentAttributes(req: DescribeEnvironmentAttributesRequest, cb?: (error: string, rep: DescribeEnvironmentAttributesResponse) => void): Promise<DescribeEnvironmentAttributesResponse>;
    /**
     * 创建cmq订阅接口
     */
    CreateCmqSubscribe(req: CreateCmqSubscribeRequest, cb?: (error: string, rep: CreateCmqSubscribeResponse) => void): Promise<CreateCmqSubscribeResponse>;
    /**
     * 创建环境角色授权
     */
    CreateEnvironmentRole(req: CreateEnvironmentRoleRequest, cb?: (error: string, rep: CreateEnvironmentRoleResponse) => void): Promise<CreateEnvironmentRoleResponse>;
    /**
     * 批量删除topics
     */
    DeleteTopics(req: DeleteTopicsRequest, cb?: (error: string, rep: DeleteTopicsResponse) => void): Promise<DeleteTopicsResponse>;
    /**
     * 修改环境角色授权。
     */
    ModifyEnvironmentRole(req: ModifyEnvironmentRoleRequest, cb?: (error: string, rep: ModifyEnvironmentRoleResponse) => void): Promise<ModifyEnvironmentRoleResponse>;
    /**
     * 删除RocketMQ命名空间
     */
    DeleteRocketMQNamespace(req: DeleteRocketMQNamespaceRequest, cb?: (error: string, rep: DeleteRocketMQNamespaceResponse) => void): Promise<DeleteRocketMQNamespaceResponse>;
    /**
     * 运营端获取命名空间bundle列表
     */
    DescribeNamespaceBundlesOpt(req: DescribeNamespaceBundlesOptRequest, cb?: (error: string, rep: DescribeNamespaceBundlesOptResponse) => void): Promise<DescribeNamespaceBundlesOptResponse>;
    /**
     * 删除集群
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
}

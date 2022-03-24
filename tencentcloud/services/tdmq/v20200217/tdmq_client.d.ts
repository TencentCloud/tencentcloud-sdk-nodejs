import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeRolesResponse, DescribeAMQPRouteRelationsRequest, DescribeNamespaceBundlesOptRequest, DescribeSubscriptionsRequest, CreateRocketMQGroupRequest, ModifyEnvironmentAttributesRequest, DeleteClusterResponse, SendBatchMessagesResponse, ModifyCmqSubscriptionAttributeResponse, CreateCmqTopicRequest, CreateAMQPExchangeRequest, DescribeRocketMQNamespacesResponse, ResetRocketMQConsumerOffSetResponse, DescribeBindClustersResponse, ModifyClusterResponse, DescribeCmqQueuesResponse, DescribeAllTenantsResponse, DescribeNamespaceBundlesOptResponse, DescribeBindVpcsResponse, RewindCmqQueueResponse, DeleteClusterRequest, ModifyAMQPVHostResponse, DescribeAMQPClusterResponse, CreateAMQPClusterRequest, DeleteRocketMQGroupRequest, DeleteCmqTopicResponse, ModifyAMQPVHostRequest, CreateSubscriptionRequest, CreateRocketMQNamespaceRequest, DescribeCmqTopicDetailResponse, CreateEnvironmentResponse, CreateSubscriptionResponse, DeleteAMQPQueueResponse, ModifyCmqTopicAttributeResponse, DescribeCmqSubscriptionDetailRequest, DescribePublisherSummaryResponse, DescribeAMQPVHostsResponse, DescribeEnvironmentsRequest, DescribeRocketMQNamespacesRequest, DeleteAMQPClusterResponse, DescribeAMQPClusterRequest, DescribeRocketMQTopicsRequest, ModifyRocketMQClusterResponse, DescribeCmqQueueDetailResponse, CreateEnvironmentRequest, CreateAMQPQueueRequest, ClearCmqQueueRequest, DescribeClustersRequest, DescribeRocketMQClusterResponse, CreateAMQPVHostResponse, DescribeCmqSubscriptionDetailResponse, RewindCmqQueueRequest, DescribeAMQPVHostsRequest, ModifyClusterRequest, DescribeAMQPQueuesRequest, ModifyRocketMQClusterRequest, ModifyAMQPExchangeResponse, DescribeAMQPExchangesResponse, AcknowledgeMessageRequest, DeleteAMQPClusterRequest, DescribeTopicsResponse, PublishCmqMsgResponse, DescribePublishersRequest, CreateRocketMQClusterRequest, DeleteAMQPVHostRequest, AcknowledgeMessageResponse, ModifyCmqQueueAttributeResponse, DeleteEnvironmentRolesResponse, DescribeClusterDetailRequest, ModifyRoleResponse, ModifyAMQPQueueRequest, DeleteCmqQueueResponse, DescribeRocketMQClusterRequest, DeleteRocketMQTopicResponse, ModifyCmqTopicAttributeRequest, DeleteRolesRequest, ModifyRocketMQTopicResponse, CreateCmqSubscribeResponse, DescribeCmqDeadLetterSourceQueuesRequest, DescribeSubscriptionsResponse, ModifyRoleRequest, SendMessagesResponse, ReceiveMessageRequest, CreateTopicRequest, DescribeTopicsRequest, DeleteEnvironmentsResponse, ModifyAMQPClusterRequest, DescribeEnvironmentRolesResponse, DescribeAMQPCreateQuotaResponse, ModifyRocketMQGroupRequest, DescribeCmqTopicsResponse, DescribeCmqTopicDetailRequest, UnbindCmqDeadLetterResponse, ModifyRocketMQNamespaceResponse, DeleteAMQPQueueRequest, DeleteEnvironmentsRequest, DescribeRocketMQClustersRequest, ReceiveMessageResponse, DescribeBindVpcsRequest, DescribeClustersResponse, DeleteRocketMQNamespaceResponse, ClearCmqSubscriptionFilterTagsRequest, CreateRocketMQGroupResponse, CreateEnvironmentRoleRequest, DescribeEnvironmentRolesRequest, DeleteRolesResponse, SendMsgResponse, ModifyRocketMQTopicRequest, DescribeRocketMQTopicsResponse, CreateAMQPVHostRequest, DeleteRocketMQGroupResponse, CreateCmqQueueResponse, DescribeRocketMQGroupsResponse, ResetMsgSubOffsetByTimestampResponse, CreateClusterResponse, DeleteAMQPExchangeResponse, DeleteRocketMQNamespaceRequest, DescribeRolesRequest, CreateAMQPQueueResponse, CreateClusterRequest, DescribeAMQPClustersRequest, CreateAMQPRouteRelationResponse, CreateTopicResponse, DescribeCmqQueuesRequest, DescribeEnvironmentsResponse, ModifyCmqSubscriptionAttributeRequest, ModifyTopicResponse, DescribeAMQPRouteRelationsResponse, DeleteTopicsResponse, CreateAMQPClusterResponse, DeleteAMQPExchangeRequest, DeleteRocketMQClusterResponse, CreateCmqTopicResponse, ClearCmqSubscriptionFilterTagsResponse, DescribeCmqTopicsRequest, DeleteTopicsRequest, ModifyTopicRequest, ResetMsgSubOffsetByTimestampRequest, CreateEnvironmentRoleResponse, CreateCmqSubscribeRequest, DeleteCmqSubscribeRequest, DescribeAMQPClustersResponse, DescribeCmqDeadLetterSourceQueuesResponse, DeleteSubscriptionsResponse, DeleteRocketMQTopicRequest, CreateRocketMQClusterResponse, DescribeAMQPCreateQuotaRequest, DescribePublishersResponse, DeleteAMQPRouteRelationResponse, SendMsgRequest, ResetRocketMQConsumerOffSetRequest, DescribeCmqQueueDetailRequest, DescribeAMQPQueuesResponse, CreateRocketMQTopicRequest, CreateRoleResponse, DeleteRocketMQClusterRequest, DescribeEnvironmentAttributesRequest, DeleteEnvironmentRolesRequest, ClearCmqQueueResponse, CreateAMQPExchangeResponse, DescribeNodeHealthOptRequest, DescribeBindClustersRequest, CreateRocketMQTopicResponse, ModifyEnvironmentAttributesResponse, ModifyAMQPQueueResponse, CreateCmqQueueRequest, ModifyEnvironmentRoleResponse, DeleteCmqQueueRequest, DescribeRocketMQGroupsRequest, DescribeRocketMQClustersResponse, CreateRoleRequest, ModifyEnvironmentRoleRequest, DescribeEnvironmentAttributesResponse, ModifyAMQPClusterResponse, DescribeAMQPExchangesRequest, CreateRocketMQNamespaceResponse, ModifyAMQPExchangeRequest, SendBatchMessagesRequest, DeleteCmqTopicRequest, DeleteAMQPRouteRelationRequest, SendCmqMsgResponse, DescribeNodeHealthOptResponse, PublishCmqMsgRequest, UnbindCmqDeadLetterRequest, CreateAMQPRouteRelationRequest, DeleteCmqSubscribeResponse, DescribePublisherSummaryRequest, DeleteSubscriptionsRequest, SendCmqMsgRequest, ModifyCmqQueueAttributeRequest, ModifyRocketMQGroupResponse, DescribeClusterDetailResponse, SendMessagesRequest, ModifyRocketMQNamespaceRequest, DeleteAMQPVHostResponse, DescribeAllTenantsRequest } from "./tdmq_models";
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
     * 创建用户的集群
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 获取RocketMQ命名空间列表
     */
    DescribeRocketMQNamespaces(req: DescribeRocketMQNamespacesRequest, cb?: (error: string, rep: DescribeRocketMQNamespacesResponse) => void): Promise<DescribeRocketMQNamespacesResponse>;
    /**
     * 更新Amqp集群信息
     */
    ModifyAMQPCluster(req: ModifyAMQPClusterRequest, cb?: (error: string, rep: ModifyAMQPClusterResponse) => void): Promise<ModifyAMQPClusterResponse>;
    /**
     * 删除Amqp交换机
     */
    DeleteAMQPExchange(req: DeleteAMQPExchangeRequest, cb?: (error: string, rep: DeleteAMQPExchangeResponse) => void): Promise<DeleteAMQPExchangeResponse>;
    /**
     * 创建cmq主题
     */
    CreateCmqTopic(req: CreateCmqTopicRequest, cb?: (error: string, rep: CreateCmqTopicResponse) => void): Promise<CreateCmqTopicResponse>;
    /**
     * 删除cmq队列
     */
    DeleteCmqQueue(req: DeleteCmqQueueRequest, cb?: (error: string, rep: DeleteCmqQueueResponse) => void): Promise<DeleteCmqQueueResponse>;
    /**
     * 枚举cmq全量主题
     */
    DescribeCmqTopics(req: DescribeCmqTopicsRequest, cb?: (error: string, rep: DescribeCmqTopicsResponse) => void): Promise<DescribeCmqTopicsResponse>;
    /**
     * 创建Amqp Vhost
     */
    CreateAMQPVHost(req: CreateAMQPVHostRequest, cb?: (error: string, rep: CreateAMQPVHostResponse) => void): Promise<CreateAMQPVHostResponse>;
    /**
     * 批量删除topics
     */
    DeleteTopics(req: DeleteTopicsRequest, cb?: (error: string, rep: DeleteTopicsResponse) => void): Promise<DeleteTopicsResponse>;
    /**
     * 删除RocketMQ消费组
     */
    DeleteRocketMQGroup(req: DeleteRocketMQGroupRequest, cb?: (error: string, rep: DeleteRocketMQGroupResponse) => void): Promise<DeleteRocketMQGroupResponse>;
    /**
     * 回溯cmq队列
     */
    RewindCmqQueue(req: RewindCmqQueueRequest, cb?: (error: string, rep: RewindCmqQueueResponse) => void): Promise<RewindCmqQueueResponse>;
    /**
     * 发送cmq主题消息
     */
    PublishCmqMsg(req: PublishCmqMsgRequest, cb?: (error: string, rep: PublishCmqMsgResponse) => void): Promise<PublishCmqMsgResponse>;
    /**
     * 新增指定分区、类型的消息主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 获取单个Amqp集群信息
     */
    DescribeAMQPCluster(req: DescribeAMQPClusterRequest, cb?: (error: string, rep: DescribeAMQPClusterResponse) => void): Promise<DescribeAMQPClusterResponse>;
    /**
     * 查询cmq全量队列
     */
    DescribeCmqQueues(req: DescribeCmqQueuesRequest, cb?: (error: string, rep: DescribeCmqQueuesResponse) => void): Promise<DescribeCmqQueuesResponse>;
    /**
     * 获取租户下命名空间列表
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 获取集群的详细信息
     */
    DescribeClusterDetail(req: DescribeClusterDetailRequest, cb?: (error: string, rep: DescribeClusterDetailResponse) => void): Promise<DescribeClusterDetailResponse>;
    /**
     * 修改环境角色授权。
     */
    ModifyEnvironmentRole(req: ModifyEnvironmentRoleRequest, cb?: (error: string, rep: ModifyEnvironmentRoleResponse) => void): Promise<ModifyEnvironmentRoleResponse>;
    /**
     * 根据提供的 MessageID 确认指定 topic 中的消息
     */
    AcknowledgeMessage(req: AcknowledgeMessageRequest, cb?: (error: string, rep: AcknowledgeMessageResponse) => void): Promise<AcknowledgeMessageResponse>;
    /**
     * 用于在用户账户下创建消息队列 Tdmq 命名空间
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 获取环境下主题列表
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
    /**
     * 发送单条消息
     */
    SendMessages(req: SendMessagesRequest, cb?: (error: string, rep: SendMessagesResponse) => void): Promise<SendMessagesResponse>;
    /**
     * 更新RocketMQ主题信息
     */
    ModifyRocketMQTopic(req: ModifyRocketMQTopicRequest, cb?: (error: string, rep: ModifyRocketMQTopicResponse) => void): Promise<ModifyRocketMQTopicResponse>;
    /**
     * 获取指定命名空间的属性
     */
    DescribeEnvironmentAttributes(req: DescribeEnvironmentAttributesRequest, cb?: (error: string, rep: DescribeEnvironmentAttributesResponse) => void): Promise<DescribeEnvironmentAttributesResponse>;
    /**
     * 创建cmq订阅接口
     */
    CreateCmqSubscribe(req: CreateCmqSubscribeRequest, cb?: (error: string, rep: CreateCmqSubscribeResponse) => void): Promise<CreateCmqSubscribeResponse>;
    /**
     * 获取消息生产概览信息
     */
    DescribePublisherSummary(req: DescribePublisherSummaryRequest, cb?: (error: string, rep: DescribePublisherSummaryResponse) => void): Promise<DescribePublisherSummaryResponse>;
    /**
     * 删除RocketMQ命名空间
     */
    DeleteRocketMQNamespace(req: DeleteRocketMQNamespaceRequest, cb?: (error: string, rep: DeleteRocketMQNamespaceResponse) => void): Promise<DeleteRocketMQNamespaceResponse>;
    /**
     * 删除集群
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 删除cmq主题
     */
    DeleteCmqTopic(req: DeleteCmqTopicRequest, cb?: (error: string, rep: DeleteCmqTopicResponse) => void): Promise<DeleteCmqTopicResponse>;
    /**
     * 修改cmq队列属性
     */
    ModifyCmqQueueAttribute(req: ModifyCmqQueueAttributeRequest, cb?: (error: string, rep: ModifyCmqQueueAttributeResponse) => void): Promise<ModifyCmqQueueAttributeResponse>;
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
     * 查询cmq订阅详情
     */
    DescribeCmqSubscriptionDetail(req: DescribeCmqSubscriptionDetailRequest, cb?: (error: string, rep: DescribeCmqSubscriptionDetailResponse) => void): Promise<DescribeCmqSubscriptionDetailResponse>;
    /**
     * 创建AMQP集群
     */
    CreateAMQPCluster(req: CreateAMQPClusterRequest, cb?: (error: string, rep: CreateAMQPClusterResponse) => void): Promise<CreateAMQPClusterResponse>;
    /**
     * 枚举cmq死信队列源队列
     */
    DescribeCmqDeadLetterSourceQueues(req: DescribeCmqDeadLetterSourceQueuesRequest, cb?: (error: string, rep: DescribeCmqDeadLetterSourceQueuesResponse) => void): Promise<DescribeCmqDeadLetterSourceQueuesResponse>;
    /**
     * 获取Amqp Vhost 列表
     */
    DescribeAMQPVHosts(req: DescribeAMQPVHostsRequest, cb?: (error: string, rep: DescribeAMQPVHostsResponse) => void): Promise<DescribeAMQPVHostsResponse>;
    /**
     * 更新Amqp队列
     */
    ModifyAMQPQueue(req: ModifyAMQPQueueRequest, cb?: (error: string, rep: ModifyAMQPQueueResponse) => void): Promise<ModifyAMQPQueueResponse>;
    /**
     * 获取集群列表
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 重置指定Group的消费位点到指定时间戳
     */
    ResetRocketMQConsumerOffSet(req: ResetRocketMQConsumerOffSetRequest, cb?: (error: string, rep: ResetRocketMQConsumerOffSetResponse) => void): Promise<ResetRocketMQConsumerOffSetResponse>;
    /**
     * 查询指定环境和主题下的订阅者列表
     */
    DescribeSubscriptions(req: DescribeSubscriptionsRequest, cb?: (error: string, rep: DescribeSubscriptionsResponse) => void): Promise<DescribeSubscriptionsResponse>;
    /**
     * 查询cmq主题详情
     */
    DescribeCmqTopicDetail(req: DescribeCmqTopicDetailRequest, cb?: (error: string, rep: DescribeCmqTopicDetailResponse) => void): Promise<DescribeCmqTopicDetailResponse>;
    /**
     * 删除Amqp队列
     */
    DeleteAMQPQueue(req: DeleteAMQPQueueRequest, cb?: (error: string, rep: DeleteAMQPQueueResponse) => void): Promise<DeleteAMQPQueueResponse>;
    /**
     * 更新RocketMQ集群信息
     */
    ModifyRocketMQCluster(req: ModifyRocketMQClusterRequest, cb?: (error: string, rep: ModifyRocketMQClusterResponse) => void): Promise<ModifyRocketMQClusterResponse>;
    /**
     * 更新集群信息
     */
    ModifyCluster(req: ModifyClusterRequest, cb?: (error: string, rep: ModifyClusterResponse) => void): Promise<ModifyClusterResponse>;
    /**
     * 修改cmq订阅属性
     */
    ModifyCmqSubscriptionAttribute(req: ModifyCmqSubscriptionAttributeRequest, cb?: (error: string, rep: ModifyCmqSubscriptionAttributeResponse) => void): Promise<ModifyCmqSubscriptionAttributeResponse>;
    /**
     * 创建一个主题的订阅关系
     */
    CreateSubscription(req: CreateSubscriptionRequest, cb?: (error: string, rep: CreateSubscriptionResponse) => void): Promise<CreateSubscriptionResponse>;
    /**
     * 删除AMQP集群
     */
    DeleteAMQPCluster(req: DeleteAMQPClusterRequest, cb?: (error: string, rep: DeleteAMQPClusterResponse) => void): Promise<DeleteAMQPClusterResponse>;
    /**
     * 获取单个RocketMQ集群信息
     */
    DescribeRocketMQCluster(req: DescribeRocketMQClusterRequest, cb?: (error: string, rep: DescribeRocketMQClusterResponse) => void): Promise<DescribeRocketMQClusterResponse>;
    /**
     * 删除环境角色授权。
     */
    DeleteEnvironmentRoles(req: DeleteEnvironmentRolesRequest, cb?: (error: string, rep: DeleteEnvironmentRolesResponse) => void): Promise<DeleteEnvironmentRolesResponse>;
    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     */
    ResetMsgSubOffsetByTimestamp(req: ResetMsgSubOffsetByTimestampRequest, cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void): Promise<ResetMsgSubOffsetByTimestampResponse>;
    /**
     * 获取租户VPC绑定关系
     */
    DescribeBindVpcs(req: DescribeBindVpcsRequest, cb?: (error: string, rep: DescribeBindVpcsResponse) => void): Promise<DescribeBindVpcsResponse>;
    /**
     * 获取用户的配额，如Queue容量，Exchange容量，Vhost容量，单Vhost Tps数,剩余可创建集群数
     */
    DescribeAMQPCreateQuota(req?: DescribeAMQPCreateQuotaRequest, cb?: (error: string, rep: DescribeAMQPCreateQuotaResponse) => void): Promise<DescribeAMQPCreateQuotaResponse>;
    /**
     * 删除RocketMQ主题
     */
    DeleteRocketMQTopic(req: DeleteRocketMQTopicRequest, cb?: (error: string, rep: DeleteRocketMQTopicResponse) => void): Promise<DeleteRocketMQTopicResponse>;
    /**
     * 创建AMQP Exchange
     */
    CreateAMQPExchange(req: CreateAMQPExchangeRequest, cb?: (error: string, rep: CreateAMQPExchangeResponse) => void): Promise<CreateAMQPExchangeResponse>;
    /**
     * 创建AMQP路由关系
     */
    CreateAMQPRouteRelation(req: CreateAMQPRouteRelationRequest, cb?: (error: string, rep: CreateAMQPRouteRelationResponse) => void): Promise<CreateAMQPRouteRelationResponse>;
    /**
     * 获取Amqp路由关系列表
     */
    DescribeAMQPRouteRelations(req: DescribeAMQPRouteRelationsRequest, cb?: (error: string, rep: DescribeAMQPRouteRelationsResponse) => void): Promise<DescribeAMQPRouteRelationsResponse>;
    /**
     * 获取amqp集群列表
     */
    DescribeAMQPClusters(req: DescribeAMQPClustersRequest, cb?: (error: string, rep: DescribeAMQPClustersResponse) => void): Promise<DescribeAMQPClustersResponse>;
    /**
     * 创建AMQP队列
     */
    CreateAMQPQueue(req: CreateAMQPQueueRequest, cb?: (error: string, rep: CreateAMQPQueueResponse) => void): Promise<CreateAMQPQueueResponse>;
    /**
     * 更新Vhost
     */
    ModifyAMQPVHost(req: ModifyAMQPVHostRequest, cb?: (error: string, rep: ModifyAMQPVHostResponse) => void): Promise<ModifyAMQPVHostResponse>;
    /**
     * 获取RocketMQ消费组列表
     */
    DescribeRocketMQGroups(req: DescribeRocketMQGroupsRequest, cb?: (error: string, rep: DescribeRocketMQGroupsResponse) => void): Promise<DescribeRocketMQGroupsResponse>;
    /**
     * 获取Amqp队列列表
     */
    DescribeAMQPQueues(req: DescribeAMQPQueuesRequest, cb?: (error: string, rep: DescribeAMQPQueuesResponse) => void): Promise<DescribeAMQPQueuesResponse>;
    /**
     * 删除RocketMQ集群
     */
    DeleteRocketMQCluster(req: DeleteRocketMQClusterRequest, cb?: (error: string, rep: DeleteRocketMQClusterResponse) => void): Promise<DeleteRocketMQClusterResponse>;
    /**
     * 删除Vhost
     */
    DeleteAMQPVHost(req: DeleteAMQPVHostRequest, cb?: (error: string, rep: DeleteAMQPVHostResponse) => void): Promise<DeleteAMQPVHostResponse>;
    /**
     * 删除角色，支持批量。
     */
    DeleteRoles(req: DeleteRolesRequest, cb?: (error: string, rep: DeleteRolesResponse) => void): Promise<DeleteRolesResponse>;
    /**
     * 获取AMQP Exchange列表
     */
    DescribeAMQPExchanges(req: DescribeAMQPExchangesRequest, cb?: (error: string, rep: DescribeAMQPExchangesResponse) => void): Promise<DescribeAMQPExchangesResponse>;
    /**
     * 接收发送到指定 topic 中的消息
     */
    ReceiveMessage(req: ReceiveMessageRequest, cb?: (error: string, rep: ReceiveMessageResponse) => void): Promise<ReceiveMessageResponse>;
    /**
     * 更新Amqp交换机
     */
    ModifyAMQPExchange(req: ModifyAMQPExchangeRequest, cb?: (error: string, rep: ModifyAMQPExchangeResponse) => void): Promise<ModifyAMQPExchangeResponse>;
    /**
     * 发送cmq消息
     */
    SendCmqMsg(req: SendCmqMsgRequest, cb?: (error: string, rep: SendCmqMsgResponse) => void): Promise<SendCmqMsgResponse>;
    /**
     * 修改指定命名空间的属性值
     */
    ModifyEnvironmentAttributes(req: ModifyEnvironmentAttributesRequest, cb?: (error: string, rep: ModifyEnvironmentAttributesResponse) => void): Promise<ModifyEnvironmentAttributesResponse>;
    /**
     * 获取角色列表
     */
    DescribeRoles(req: DescribeRolesRequest, cb?: (error: string, rep: DescribeRolesResponse) => void): Promise<DescribeRolesResponse>;
    /**
     * 解绑cmq死信队列
     */
    UnbindCmqDeadLetter(req: UnbindCmqDeadLetterRequest, cb?: (error: string, rep: UnbindCmqDeadLetterResponse) => void): Promise<UnbindCmqDeadLetterResponse>;
    /**
     * 创建RocketMQ命名空间
     */
    CreateRocketMQNamespace(req: CreateRocketMQNamespaceRequest, cb?: (error: string, rep: CreateRocketMQNamespaceResponse) => void): Promise<CreateRocketMQNamespaceResponse>;
    /**
     * 创建环境角色授权
     */
    CreateEnvironmentRole(req: CreateEnvironmentRoleRequest, cb?: (error: string, rep: CreateEnvironmentRoleResponse) => void): Promise<CreateEnvironmentRoleResponse>;
    /**
     * 获取RocketMQ主题列表
     */
    DescribeRocketMQTopics(req: DescribeRocketMQTopicsRequest, cb?: (error: string, rep: DescribeRocketMQTopicsResponse) => void): Promise<DescribeRocketMQTopicsResponse>;
    /**
     * 获取RocketMQ集群列表
     */
    DescribeRocketMQClusters(req: DescribeRocketMQClustersRequest, cb?: (error: string, rep: DescribeRocketMQClustersResponse) => void): Promise<DescribeRocketMQClustersResponse>;
    /**
     * 修改主题备注和分区数
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 删除Amqp路由关系
     */
    DeleteAMQPRouteRelation(req: DeleteAMQPRouteRelationRequest, cb?: (error: string, rep: DeleteAMQPRouteRelationResponse) => void): Promise<DeleteAMQPRouteRelationResponse>;
    /**
     * 运营端获节点健康状态
     */
    DescribeNodeHealthOpt(req: DescribeNodeHealthOptRequest, cb?: (error: string, rep: DescribeNodeHealthOptResponse) => void): Promise<DescribeNodeHealthOptResponse>;
    /**
     * 创建角色
     */
    CreateRole(req: CreateRoleRequest, cb?: (error: string, rep: CreateRoleResponse) => void): Promise<CreateRoleResponse>;
    /**
     * 更新RocketMQ命名空间
     */
    ModifyRocketMQNamespace(req: ModifyRocketMQNamespaceRequest, cb?: (error: string, rep: ModifyRocketMQNamespaceResponse) => void): Promise<ModifyRocketMQNamespaceResponse>;
    /**
     * 批量发送消息

注意：TDMQ 批量发送消息的接口是在 TDMQ-HTTP 的服务侧将消息打包为一个 Batch，然后将该 Batch 在服务内部当作一次 TCP 请求发送出去。所以在使用过程中，用户还是按照单条消息发送的逻辑，每一条消息是一个独立的 HTTP 的请求，在 TDMQ-HTTP 的服务内部，会将多个 HTTP 的请求聚合为一个 Batch 发送到服务端。即，批量发送消息在使用上与发送单条消息是一致的，batch 的聚合是在 TDMQ-HTTP 的服务内部完成的。
     */
    SendBatchMessages(req: SendBatchMessagesRequest, cb?: (error: string, rep: SendBatchMessagesResponse) => void): Promise<SendBatchMessagesResponse>;
    /**
     * 清空cmq消息队列中的消息
     */
    ClearCmqQueue(req: ClearCmqQueueRequest, cb?: (error: string, rep: ClearCmqQueueResponse) => void): Promise<ClearCmqQueueResponse>;
    /**
     * 获取命名空间角色列表
     */
    DescribeEnvironmentRoles(req: DescribeEnvironmentRolesRequest, cb?: (error: string, rep: DescribeEnvironmentRolesResponse) => void): Promise<DescribeEnvironmentRolesResponse>;
    /**
     * 获取生产者信息列表
     */
    DescribePublishers(req: DescribePublishersRequest, cb?: (error: string, rep: DescribePublishersResponse) => void): Promise<DescribePublishersResponse>;
    /**
     * 此接口用于创建一个RocketMQ集群
     */
    CreateRocketMQCluster(req: CreateRocketMQClusterRequest, cb?: (error: string, rep: CreateRocketMQClusterResponse) => void): Promise<CreateRocketMQClusterResponse>;
    /**
     * 创建RocketMQ主题
     */
    CreateRocketMQTopic(req: CreateRocketMQTopicRequest, cb?: (error: string, rep: CreateRocketMQTopicResponse) => void): Promise<CreateRocketMQTopicResponse>;
    /**
     * 获取用户绑定的专享集群列表
     */
    DescribeBindClusters(req?: DescribeBindClustersRequest, cb?: (error: string, rep: DescribeBindClustersResponse) => void): Promise<DescribeBindClustersResponse>;
    /**
     * 查询cmq队列详情
     */
    DescribeCmqQueueDetail(req: DescribeCmqQueueDetailRequest, cb?: (error: string, rep: DescribeCmqQueueDetailResponse) => void): Promise<DescribeCmqQueueDetailResponse>;
    /**
     * 此接口仅用于测试发生消息，不能作为现网正式生产使用
     */
    SendMsg(req: SendMsgRequest, cb?: (error: string, rep: SendMsgResponse) => void): Promise<SendMsgResponse>;
    /**
     * 清空订阅者消息标签
     */
    ClearCmqSubscriptionFilterTags(req: ClearCmqSubscriptionFilterTagsRequest, cb?: (error: string, rep: ClearCmqSubscriptionFilterTagsResponse) => void): Promise<ClearCmqSubscriptionFilterTagsResponse>;
    /**
     * 创建RocketMQ消费组
     */
    CreateRocketMQGroup(req: CreateRocketMQGroupRequest, cb?: (error: string, rep: CreateRocketMQGroupResponse) => void): Promise<CreateRocketMQGroupResponse>;
    /**
     * 角色修改
     */
    ModifyRole(req: ModifyRoleRequest, cb?: (error: string, rep: ModifyRoleResponse) => void): Promise<ModifyRoleResponse>;
    /**
     * 删除cmq订阅
     */
    DeleteCmqSubscribe(req: DeleteCmqSubscribeRequest, cb?: (error: string, rep: DeleteCmqSubscribeResponse) => void): Promise<DeleteCmqSubscribeResponse>;
    /**
     * 获取某个租户的虚拟集群列表
     */
    DescribeAllTenants(req: DescribeAllTenantsRequest, cb?: (error: string, rep: DescribeAllTenantsResponse) => void): Promise<DescribeAllTenantsResponse>;
    /**
     * 运营端获取命名空间bundle列表
     */
    DescribeNamespaceBundlesOpt(req: DescribeNamespaceBundlesOptRequest, cb?: (error: string, rep: DescribeNamespaceBundlesOptResponse) => void): Promise<DescribeNamespaceBundlesOptResponse>;
    /**
     * 删除订阅关系
     */
    DeleteSubscriptions(req: DeleteSubscriptionsRequest, cb?: (error: string, rep: DeleteSubscriptionsResponse) => void): Promise<DeleteSubscriptionsResponse>;
}

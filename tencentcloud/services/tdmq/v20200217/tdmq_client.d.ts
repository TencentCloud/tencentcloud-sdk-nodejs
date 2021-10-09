import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeRolesResponse, DescribeBindClustersResponse, DescribeSubscriptionsRequest, DeleteClusterResponse, SendBatchMessagesResponse, ModifyCmqSubscriptionAttributeResponse, CreateCmqTopicRequest, ReceiveMessageRequest, ModifyClusterResponse, DescribeCmqQueuesResponse, DeleteCmqQueueResponse, CreateCmqSubscribeRequest, RewindCmqQueueResponse, DeleteClusterRequest, DeleteCmqTopicResponse, CreateSubscriptionRequest, DescribeCmqTopicDetailResponse, CreateEnvironmentResponse, CreateSubscriptionResponse, SendMsgResponse, ModifyCmqTopicAttributeResponse, DescribeCmqSubscriptionDetailRequest, DescribeEnvironmentsRequest, DescribeCmqQueueDetailResponse, CreateEnvironmentRequest, DeleteTopicsResponse, DescribeClustersRequest, ModifyEnvironmentAttributesRequest, DescribeCmqSubscriptionDetailResponse, RewindCmqQueueRequest, ModifyClusterRequest, DescribeEnvironmentAttributesRequest, AcknowledgeMessageRequest, DescribeTopicsResponse, PublishCmqMsgResponse, SendCmqMsgRequest, AcknowledgeMessageResponse, DeleteEnvironmentRolesResponse, DescribeClusterDetailRequest, ModifyRoleResponse, DescribeNamespaceBundlesOptResponse, SendMessagesRequest, ModifyCmqTopicAttributeRequest, DeleteRolesRequest, CreateCmqSubscribeResponse, DescribeSubscriptionsResponse, ModifyRoleRequest, SendMessagesResponse, CreateTopicRequest, DescribeTopicsRequest, DeleteEnvironmentsResponse, DescribeEnvironmentRolesResponse, ClearCmqQueueRequest, DescribeCmqTopicsResponse, DescribeCmqTopicDetailRequest, UnbindCmqDeadLetterResponse, DescribeNodeHealthOptRequest, DescribeBindVpcsRequest, DescribeClustersResponse, ClearCmqSubscriptionFilterTagsRequest, DescribeEnvironmentRolesRequest, DeleteRolesResponse, CreateCmqQueueResponse, ResetMsgSubOffsetByTimestampResponse, CreateClusterResponse, DescribeCmqDeadLetterSourceQueuesRequest, DescribeNodeHealthOptResponse, CreateClusterRequest, ModifyCmqQueueAttributeResponse, CreateTopicResponse, DescribeCmqQueuesRequest, DescribeEnvironmentsResponse, ModifyCmqSubscriptionAttributeRequest, ModifyTopicResponse, ReceiveMessageResponse, CreateCmqTopicResponse, ClearCmqSubscriptionFilterTagsResponse, DescribeCmqTopicsRequest, DeleteTopicsRequest, DescribeNamespaceBundlesOptRequest, ModifyTopicRequest, ResetMsgSubOffsetByTimestampRequest, CreateEnvironmentRoleResponse, DescribeBindVpcsResponse, DeleteCmqSubscribeRequest, DescribeCmqDeadLetterSourceQueuesResponse, DeleteSubscriptionsResponse, SendMsgRequest, DescribeCmqQueueDetailRequest, CreateRoleResponse, DeleteEnvironmentRolesRequest, ClearCmqQueueResponse, DeleteEnvironmentsRequest, DescribeBindClustersRequest, ModifyEnvironmentAttributesResponse, CreateCmqQueueRequest, ModifyEnvironmentRoleResponse, DeleteCmqQueueRequest, CreateRoleRequest, DescribeProducersRequest, ModifyEnvironmentRoleRequest, DescribeEnvironmentAttributesResponse, DescribeProducersResponse, SendBatchMessagesRequest, DeleteCmqTopicRequest, SendCmqMsgResponse, PublishCmqMsgRequest, UnbindCmqDeadLetterRequest, ModifyCmqQueueAttributeRequest, DeleteCmqSubscribeResponse, DescribeRolesRequest, DeleteSubscriptionsRequest, DescribeClusterDetailResponse, CreateEnvironmentRoleRequest } from "./tdmq_models";
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
     * 修改cmq主题属性
     */
    ModifyCmqTopicAttribute(req: ModifyCmqTopicAttributeRequest, cb?: (error: string, rep: ModifyCmqTopicAttributeResponse) => void): Promise<ModifyCmqTopicAttributeResponse>;
    /**
     * 修改cmq队列属性
     */
    ModifyCmqQueueAttribute(req: ModifyCmqQueueAttributeRequest, cb?: (error: string, rep: ModifyCmqQueueAttributeResponse) => void): Promise<ModifyCmqQueueAttributeResponse>;
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
     * 删除cmq队列
     */
    DeleteCmqQueue(req: DeleteCmqQueueRequest, cb?: (error: string, rep: DeleteCmqQueueResponse) => void): Promise<DeleteCmqQueueResponse>;
    /**
     * 枚举cmq全量主题
     */
    DescribeCmqTopics(req: DescribeCmqTopicsRequest, cb?: (error: string, rep: DescribeCmqTopicsResponse) => void): Promise<DescribeCmqTopicsResponse>;
    /**
     * 批量删除topics
     */
    DeleteTopics(req: DeleteTopicsRequest, cb?: (error: string, rep: DeleteTopicsResponse) => void): Promise<DeleteTopicsResponse>;
    /**
     * 获取命名空间角色列表
     */
    DescribeEnvironmentRoles(req: DescribeEnvironmentRolesRequest, cb?: (error: string, rep: DescribeEnvironmentRolesResponse) => void): Promise<DescribeEnvironmentRolesResponse>;
    /**
     * 删除集群
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
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
     * 查询cmq全量队列
     */
    DescribeCmqQueues(req: DescribeCmqQueuesRequest, cb?: (error: string, rep: DescribeCmqQueuesResponse) => void): Promise<DescribeCmqQueuesResponse>;
    /**
     * 发送cmq主题消息
     */
    PublishCmqMsg(req: PublishCmqMsgRequest, cb?: (error: string, rep: PublishCmqMsgResponse) => void): Promise<PublishCmqMsgResponse>;
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
     * 删除cmq订阅
     */
    DeleteCmqSubscribe(req: DeleteCmqSubscribeRequest, cb?: (error: string, rep: DeleteCmqSubscribeResponse) => void): Promise<DeleteCmqSubscribeResponse>;
    /**
     * 根据提供的 MessageID 确认指定 topic 中的消息
     */
    AcknowledgeMessage(req: AcknowledgeMessageRequest, cb?: (error: string, rep: AcknowledgeMessageResponse) => void): Promise<AcknowledgeMessageResponse>;
    /**
     * 查询cmq主题详情
     */
    DescribeCmqTopicDetail(req: DescribeCmqTopicDetailRequest, cb?: (error: string, rep: DescribeCmqTopicDetailResponse) => void): Promise<DescribeCmqTopicDetailResponse>;
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
     * 清空订阅者消息标签
     */
    ClearCmqSubscriptionFilterTags(req: ClearCmqSubscriptionFilterTagsRequest, cb?: (error: string, rep: ClearCmqSubscriptionFilterTagsResponse) => void): Promise<ClearCmqSubscriptionFilterTagsResponse>;
    /**
     * 修改环境角色授权。
     */
    ModifyEnvironmentRole(req: ModifyEnvironmentRoleRequest, cb?: (error: string, rep: ModifyEnvironmentRoleResponse) => void): Promise<ModifyEnvironmentRoleResponse>;
    /**
     * 发送单条消息
     */
    SendMessages(req: SendMessagesRequest, cb?: (error: string, rep: SendMessagesResponse) => void): Promise<SendMessagesResponse>;
    /**
     * 发送cmq消息
     */
    SendCmqMsg(req: SendCmqMsgRequest, cb?: (error: string, rep: SendCmqMsgResponse) => void): Promise<SendCmqMsgResponse>;
    /**
     * 更新集群信息
     */
    ModifyCluster(req: ModifyClusterRequest, cb?: (error: string, rep: ModifyClusterResponse) => void): Promise<ModifyClusterResponse>;
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
     * 批量发送消息
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
     * 删除环境角色授权。
     */
    DeleteEnvironmentRoles(req: DeleteEnvironmentRolesRequest, cb?: (error: string, rep: DeleteEnvironmentRolesResponse) => void): Promise<DeleteEnvironmentRolesResponse>;
    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     */
    ResetMsgSubOffsetByTimestamp(req: ResetMsgSubOffsetByTimestampRequest, cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void): Promise<ResetMsgSubOffsetByTimestampResponse>;
    /**
     * 运营端获取命名空间bundle列表
     */
    DescribeNamespaceBundlesOpt(req: DescribeNamespaceBundlesOptRequest, cb?: (error: string, rep: DescribeNamespaceBundlesOptResponse) => void): Promise<DescribeNamespaceBundlesOptResponse>;
    /**
     * 删除订阅关系
     */
    DeleteSubscriptions(req: DeleteSubscriptionsRequest, cb?: (error: string, rep: DeleteSubscriptionsResponse) => void): Promise<DeleteSubscriptionsResponse>;
}

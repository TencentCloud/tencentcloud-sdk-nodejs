import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateRabbitMQBindingResponse, ModifyRocketMQInstanceSpecRequest, DeleteClusterResponse, CreateCmqTopicRequest, ModifyRabbitMQVipInstanceRequest, DescribeCmqQueuesResponse, DescribeRabbitMQVirtualHostListRequest, DescribeAllTenantsResponse, DescribeRabbitMQNodeListRequest, DeleteCmqQueueResponse, DescribeRocketMQEnvironmentRolesRequest, DeleteRocketMQGroupRequest, ModifyRabbitMQUserRequest, CreateSubscriptionRequest, DescribeRabbitMQQueuesResponse, DescribeEnvironmentsRequest, DescribeRocketMQNamespacesRequest, ModifyRocketMQClusterResponse, DescribeRocketMQTopicStatsResponse, CreateEnvironmentRequest, CreateCmqSubscribeResponse, DescribeClustersRequest, ModifyEnvironmentAttributesRequest, DescribeSubscriptionsResponse, ModifyRocketMQClusterRequest, SendBatchMessagesResponse, DescribeRocketMQVipInstanceDetailResponse, DescribeRabbitMQVirtualHostResponse, CreateRocketMQClusterRequest, ModifyCmqSubscriptionAttributeResponse, DeleteRocketMQRolesResponse, DeleteRocketMQTopicResponse, ModifyRoleRequest, DescribeRocketMQMsgRequest, CreateTopicRequest, DescribeCmqTopicsResponse, DescribeRocketMQMsgTraceRequest, ModifyRocketMQGroupRequest, DescribeCmqTopicDetailRequest, UnbindCmqDeadLetterResponse, ModifyRocketMQEnvironmentRoleRequest, ModifyRocketMQNamespaceResponse, DeleteEnvironmentsRequest, DescribeRocketMQClustersRequest, SendRocketMQMessageRequest, CreateClusterResponse, DeleteRocketMQNamespaceRequest, DescribeRocketMQSmoothMigrationTaskListResponse, DescribeRocketMQSourceClusterTopicListResponse, DeleteRabbitMQPermissionRequest, CreateTopicResponse, ReceiveMessageResponse, CreateRocketMQVipInstanceRequest, DescribeRabbitMQVipInstanceRequest, DescribeRabbitMQExchangesRequest, DeleteTopicsRequest, DescribeNamespaceBundlesOptRequest, DeleteRocketMQEnvironmentRolesResponse, DeleteCmqSubscribeRequest, SendMsgResponse, DescribeMsgRequest, DeleteRabbitMQPermissionResponse, DeleteRabbitMQBindingResponse, ModifyRabbitMQVipInstanceResponse, DescribeRocketMQSourceClusterGroupListRequest, DescribePulsarProInstancesRequest, ClearCmqQueueResponse, DescribeTopicMsgsRequest, DeleteCmqQueueRequest, DeleteRabbitMQUserResponse, DescribeRabbitMQVirtualHostListResponse, SetRocketMQPublicAccessPointResponse, DescribeRocketMQTopicMsgsRequest, ModifyEnvironmentRoleRequest, DescribeRocketMQRolesResponse, ModifyRocketMQRoleRequest, DescribeMqMsgTraceRequest, SendBatchMessagesRequest, DescribeRabbitMQNodeListResponse, DescribePublisherSummaryRequest, ModifyRocketMQGroupResponse, ImportRocketMQTopicsRequest, DeleteRabbitMQVipInstanceResponse, DescribeBindClustersResponse, ModifyRabbitMQVirtualHostRequest, ReceiveMessageRequest, CreateRabbitMQVipInstanceRequest, DescribeRabbitMQPermissionResponse, DescribeRocketMQSmoothMigrationTaskRequest, DeleteClusterRequest, DeleteCmqTopicResponse, CreateRocketMQNamespaceRequest, ModifyRabbitMQVirtualHostResponse, ExportRocketMQMessageDetailResponse, CreateSubscriptionResponse, ImportRocketMQConsumerGroupsResponse, DescribeRocketMQConsumerConnectionsResponse, DescribeCmqSubscriptionDetailRequest, DescribeRocketMQClusterResponse, DescribeMsgTraceResponse, ModifyClusterRequest, CreateRocketMQVipInstanceResponse, AcknowledgeMessageRequest, DescribeMsgResponse, CreateProClusterResponse, ModifyRocketMQInstanceRequest, CreateProClusterRequest, DescribeRabbitMQVipInstancesResponse, DeleteRolesRequest, ClearCmqQueueRequest, CreateRocketMQEnvironmentRoleRequest, SetRocketMQPublicAccessPointRequest, DeleteEnvironmentsResponse, ModifyAMQPClusterRequest, DescribeRabbitMQBindingsResponse, DescribeClustersResponse, ClearCmqSubscriptionFilterTagsRequest, CreateRocketMQGroupResponse, ModifyRocketMQNamespaceRequest, ModifyRocketMQTopicResponse, CreateRocketMQRoleResponse, DeleteRocketMQGroupResponse, DescribeRocketMQClusterRequest, DescribeAMQPClustersRequest, DescribeEnvironmentsResponse, ModifyRocketMQInstanceSpecResponse, GetTopicListResponse, DescribeMsgTraceRequest, DescribeCmqTopicsRequest, CreateEnvironmentRoleResponse, CreateRocketMQClusterResponse, DeleteRocketMQNamespaceResponse, CreateRocketMQTopicRequest, DescribeRocketMQVipInstancesResponse, DeleteRocketMQClusterRequest, DescribePulsarProInstancesResponse, DeleteRabbitMQBindingRequest, DescribeRocketMQSmoothMigrationTaskResponse, DescribeBindClustersRequest, CreateRabbitMQVirtualHostRequest, VerifyRocketMQConsumeRequest, DescribeRabbitMQQueueDetailRequest, DescribePulsarProInstanceDetailRequest, DescribeRocketMQConsumerConnectionsRequest, CreateRoleRequest, DescribeEnvironmentAttributesResponse, DescribeRocketMQRolesRequest, CreateRocketMQNamespaceResponse, ModifyRocketMQEnvironmentRoleResponse, CreateCmqQueueResponse, DeleteRabbitMQVipInstanceRequest, DescribeRocketMQPublicAccessMonitorDataRequest, DescribeRolesResponse, DescribeRabbitMQPermissionRequest, DeleteRabbitMQUserRequest, DescribeSubscriptionsRequest, CreateRocketMQGroupRequest, DescribeTopicMsgsResponse, DescribeClusterDetailRequest, SendCmqMsgRequest, CreateRabbitMQVirtualHostResponse, DescribeNamespaceBundlesOptResponse, GetTopicListRequest, RewindCmqQueueResponse, DeleteProClusterRequest, DescribeCmqTopicDetailResponse, DescribeRocketMQTopicsRequest, DescribeRocketMQSubscriptionsResponse, DescribeCmqSubscriptionDetailResponse, DescribeRocketMQMsgResponse, DescribeEnvironmentAttributesRequest, ModifyPublicNetworkSecurityPolicyResponse, DeleteRabbitMQVirtualHostResponse, DescribePublishersRequest, ModifyPublicNetworkSecurityPolicyRequest, ModifyRoleResponse, DescribeRocketMQTopicStatsRequest, SendRocketMQMessageResponse, SendMessagesResponse, DescribeRocketMQNamespacesResponse, DescribeTopicsRequest, DescribeRocketMQMigratingTopicListResponse, DescribeEnvironmentRolesResponse, DescribeRocketMQPublicAccessPointResponse, DescribeRabbitMQExchangesResponse, DescribeRabbitMQQueueDetailResponse, DescribeRocketMQTopicMsgsResponse, VerifyRocketMQConsumeResponse, DescribeRocketMQConsumerConnectionDetailRequest, DeleteRolesResponse, RetryRocketMQDlqMessageResponse, DescribeRabbitMQBindingsRequest, ModifyRocketMQTopicRequest, ModifyRocketMQInstanceResponse, ResetMsgSubOffsetByTimestampResponse, SendMessagesRequest, CreateRocketMQRoleRequest, DescribeNodeHealthOptResponse, DescribeRabbitMQVipInstanceResponse, ModifyCmqSubscriptionAttributeRequest, ModifyTopicResponse, DescribeRocketMQVipInstanceDetailRequest, DeleteRocketMQClusterResponse, CreateCmqTopicResponse, ClearCmqSubscriptionFilterTagsResponse, DescribeRocketMQSubscriptionsRequest, ResetMsgSubOffsetByTimestampRequest, DescribeBindVpcsResponse, DescribeAMQPClustersResponse, ModifyRabbitMQPermissionRequest, DescribeRocketMQClustersResponse, DescribeRabbitMQQueuesRequest, SendMsgRequest, DescribeRocketMQEnvironmentRolesResponse, DescribeRocketMQMigratingTopicListRequest, CreateRoleResponse, ModifyRabbitMQUserResponse, DescribeNodeHealthOptRequest, DescribeMqMsgTraceResponse, CreateRabbitMQUserRequest, DescribeRocketMQConsumeStatsRequest, SendCmqMsgResponse, ModifyPublicNetworkAccessPointResponse, ModifyCmqQueueAttributeRequest, DeleteCmqSubscribeResponse, DeleteRocketMQEnvironmentRolesRequest, DescribeRabbitMQVipInstancesRequest, DescribeClusterDetailResponse, DescribeRabbitMQVirtualHostRequest, DeleteRocketMQRolesRequest, ExportRocketMQMessageDetailRequest, CreateRabbitMQUserResponse, ModifyRocketMQRoleResponse, CreateRabbitMQBindingRequest, ModifyClusterResponse, DescribeRocketMQPublicAccessPointRequest, RetryRocketMQDlqMessageRequest, ModifyPublicNetworkAccessPointRequest, DescribeRocketMQSourceClusterGroupListResponse, DescribeRocketMQTopicsByGroupRequest, DescribeRocketMQConsumeStatsResponse, DescribeRocketMQPublicAccessMonitorDataResponse, CreateEnvironmentResponse, ModifyRabbitMQPermissionResponse, DescribeCmqQueueDetailResponse, DescribeRocketMQSourceClusterTopicListRequest, ModifyCmqTopicAttributeResponse, DeleteRocketMQVipInstanceResponse, DescribeRabbitMQUserResponse, ImportRocketMQConsumerGroupsRequest, DescribeTopicsResponse, PublishCmqMsgResponse, AcknowledgeMessageResponse, DeleteEnvironmentRolesResponse, PublishCmqMsgRequest, ModifyCmqTopicAttributeRequest, DeleteTopicsResponse, RewindCmqQueueRequest, DeleteRocketMQVipInstanceRequest, DescribeBindVpcsRequest, DescribeEnvironmentRolesRequest, DescribeRabbitMQUserRequest, DescribeRocketMQTopicsResponse, DescribeRocketMQGroupsResponse, DescribeRocketMQConsumerConnectionDetailResponse, DescribeRocketMQSmoothMigrationTaskListRequest, CreateClusterRequest, DeleteProClusterResponse, ModifyCmqQueueAttributeResponse, DescribeCmqQueuesRequest, ResetRocketMQConsumerOffSetResponse, DescribeRocketMQVipInstancesRequest, DeleteRabbitMQVirtualHostRequest, CreateRabbitMQVipInstanceResponse, ModifyEnvironmentAttributesResponse, ModifyTopicRequest, CreateCmqSubscribeRequest, DeleteSubscriptionsResponse, DeleteRocketMQTopicRequest, DescribePublishersResponse, DescribeCmqQueueDetailRequest, CreateRocketMQEnvironmentRoleResponse, DescribeRocketMQTopicsByGroupResponse, DeleteEnvironmentRolesRequest, CreateRocketMQTopicResponse, CreateCmqQueueRequest, ModifyEnvironmentRoleResponse, DescribeRocketMQGroupsRequest, DescribeRocketMQMsgTraceResponse, ImportRocketMQTopicsResponse, ModifyAMQPClusterResponse, DescribePublisherSummaryResponse, DeleteCmqTopicRequest, DescribePulsarProInstanceDetailResponse, UnbindCmqDeadLetterRequest, DescribeRolesRequest, DeleteSubscriptionsRequest, DescribeAllTenantsRequest, ResetRocketMQConsumerOffSetRequest, CreateEnvironmentRoleRequest } from "./tdmq_models";
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
     * 获取消费详情列表
     */
    DescribeRocketMQConsumeStats(req: DescribeRocketMQConsumeStatsRequest, cb?: (error: string, rep: DescribeRocketMQConsumeStatsResponse) => void): Promise<DescribeRocketMQConsumeStatsResponse>;
    /**
     * 删除角色，支持批量。
     */
    DeleteRoles(req: DeleteRolesRequest, cb?: (error: string, rep: DeleteRolesResponse) => void): Promise<DeleteRolesResponse>;
    /**
     * 查询RabbitMQ exchange 列表
     */
    DescribeRabbitMQExchanges(req: DescribeRabbitMQExchangesRequest, cb?: (error: string, rep: DescribeRabbitMQExchangesResponse) => void): Promise<DescribeRabbitMQExchangesResponse>;
    /**
     * 历史原因，该接口位于tdmq-manager，目前rabbitmq产品没有使用该接口，当前使用的是ModifyRabbitMQVipInstance。不过从调用链上看，线网还有请求流程，所以走预下线流程。

更新Amqp集群信息
     */
    ModifyAMQPCluster(req: ModifyAMQPClusterRequest, cb?: (error: string, rep: ModifyAMQPClusterResponse) => void): Promise<ModifyAMQPClusterResponse>;
    /**
     * 查询消息轨迹
     */
    DescribeRocketMQMsgTrace(req: DescribeRocketMQMsgTraceRequest, cb?: (error: string, rep: DescribeRocketMQMsgTraceResponse) => void): Promise<DescribeRocketMQMsgTraceResponse>;
    /**
     * 创建角色
     */
    CreateRocketMQRole(req: CreateRocketMQRoleRequest, cb?: (error: string, rep: CreateRocketMQRoleResponse) => void): Promise<CreateRocketMQRoleResponse>;
    /**
     * 创建cmq主题
     */
    CreateCmqTopic(req: CreateCmqTopicRequest, cb?: (error: string, rep: CreateCmqTopicResponse) => void): Promise<CreateCmqTopicResponse>;
    /**
     * 删除cmq队列
     */
    DeleteCmqQueue(req: DeleteCmqQueueRequest, cb?: (error: string, rep: DeleteCmqQueueResponse) => void): Promise<DeleteCmqQueueResponse>;
    /**
     * 修改RabbitMQ的vhost
     */
    ModifyRabbitMQVirtualHost(req: ModifyRabbitMQVirtualHostRequest, cb?: (error: string, rep: ModifyRabbitMQVirtualHostResponse) => void): Promise<ModifyRabbitMQVirtualHostResponse>;
    /**
     * 枚举cmq全量主题
     */
    DescribeCmqTopics(req: DescribeCmqTopicsRequest, cb?: (error: string, rep: DescribeCmqTopicsResponse) => void): Promise<DescribeCmqTopicsResponse>;
    /**
     * 批量删除topics
     */
    DeleteTopics(req: DeleteTopicsRequest, cb?: (error: string, rep: DeleteTopicsResponse) => void): Promise<DeleteTopicsResponse>;
    /**
     * 删除RocketMQ消费组
     */
    DeleteRocketMQGroup(req: DeleteRocketMQGroupRequest, cb?: (error: string, rep: DeleteRocketMQGroupResponse) => void): Promise<DeleteRocketMQGroupResponse>;
    /**
     * 删除专业集群——预付费，仅通过API 调用
     */
    DeleteProCluster(req: DeleteProClusterRequest, cb?: (error: string, rep: DeleteProClusterResponse) => void): Promise<DeleteProClusterResponse>;
    /**
     * 删除角色，支持批量。
     */
    DeleteRocketMQRoles(req: DeleteRocketMQRolesRequest, cb?: (error: string, rep: DeleteRocketMQRolesResponse) => void): Promise<DeleteRocketMQRolesResponse>;
    /**
     * 获取指定消费组下当前客户端的连接情况
     */
    DescribeRocketMQConsumerConnections(req: DescribeRocketMQConsumerConnectionsRequest, cb?: (error: string, rep: DescribeRocketMQConsumerConnectionsResponse) => void): Promise<DescribeRocketMQConsumerConnectionsResponse>;
    /**
     * 创建RabbitMQ的用户
     */
    CreateRabbitMQUser(req: CreateRabbitMQUserRequest, cb?: (error: string, rep: CreateRabbitMQUserResponse) => void): Promise<CreateRabbitMQUserResponse>;
    /**
     * 查询用户已购的RabbitMQ专享实例列表
     */
    DescribeRabbitMQVipInstances(req: DescribeRabbitMQVipInstancesRequest, cb?: (error: string, rep: DescribeRabbitMQVipInstancesResponse) => void): Promise<DescribeRabbitMQVipInstancesResponse>;
    /**
     * 回溯cmq队列
     */
    RewindCmqQueue(req: RewindCmqQueueRequest, cb?: (error: string, rep: RewindCmqQueueResponse) => void): Promise<RewindCmqQueueResponse>;
    /**
     * 获取Topic生产详情列表
     */
    DescribeRocketMQTopicStats(req: DescribeRocketMQTopicStatsRequest, cb?: (error: string, rep: DescribeRocketMQTopicStatsResponse) => void): Promise<DescribeRocketMQTopicStatsResponse>;
    /**
     * 新增指定分区、类型的消息主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 获取RocketMQ命名空间列表
     */
    DescribeRocketMQNamespaces(req: DescribeRocketMQNamespacesRequest, cb?: (error: string, rep: DescribeRocketMQNamespacesResponse) => void): Promise<DescribeRocketMQNamespacesResponse>;
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
     * 创建RocketMQ消费组
     */
    CreateRocketMQGroup(req: CreateRocketMQGroupRequest, cb?: (error: string, rep: CreateRocketMQGroupResponse) => void): Promise<CreateRocketMQGroupResponse>;
    /**
     * 根据提供的 MessageID 确认指定 topic 中的消息
     */
    AcknowledgeMessage(req: AcknowledgeMessageRequest, cb?: (error: string, rep: AcknowledgeMessageResponse) => void): Promise<AcknowledgeMessageResponse>;
    /**
     * 用于在用户账户下创建消息队列 Tdmq 命名空间
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 查询RabbitMQ权限列表
     */
    DescribeRabbitMQPermission(req: DescribeRabbitMQPermissionRequest, cb?: (error: string, rep: DescribeRabbitMQPermissionResponse) => void): Promise<DescribeRabbitMQPermissionResponse>;
    /**
     * 修改pulsar专业版公网安全策略
     */
    ModifyPublicNetworkSecurityPolicy(req: ModifyPublicNetworkSecurityPolicyRequest, cb?: (error: string, rep: ModifyPublicNetworkSecurityPolicyResponse) => void): Promise<ModifyPublicNetworkSecurityPolicyResponse>;
    /**
     * 修改环境角色授权。
     */
    ModifyRocketMQEnvironmentRole(req: ModifyRocketMQEnvironmentRoleRequest, cb?: (error: string, rep: ModifyRocketMQEnvironmentRoleResponse) => void): Promise<ModifyRocketMQEnvironmentRoleResponse>;
    /**
     * 更新RocketMQ主题信息
     */
    ModifyRocketMQTopic(req: ModifyRocketMQTopicRequest, cb?: (error: string, rep: ModifyRocketMQTopicResponse) => void): Promise<ModifyRocketMQTopicResponse>;
    /**
     * rocketmq 消息查询
     */
    DescribeRocketMQTopicMsgs(req: DescribeRocketMQTopicMsgsRequest, cb?: (error: string, rep: DescribeRocketMQTopicMsgsResponse) => void): Promise<DescribeRocketMQTopicMsgsResponse>;
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
     * 创建RabbitMQ的vhost
     */
    CreateRabbitMQVirtualHost(req: CreateRabbitMQVirtualHostRequest, cb?: (error: string, rep: CreateRabbitMQVirtualHostResponse) => void): Promise<CreateRabbitMQVirtualHostResponse>;
    /**
     * 删除cmq主题
     */
    DeleteCmqTopic(req: DeleteCmqTopicRequest, cb?: (error: string, rep: DeleteCmqTopicResponse) => void): Promise<DeleteCmqTopicResponse>;
    /**
     * RabbitMQ专享版修改公网管控台，vpc15672开关
     */
    ModifyPublicNetworkAccessPoint(req: ModifyPublicNetworkAccessPointRequest, cb?: (error: string, rep: ModifyPublicNetworkAccessPointResponse) => void): Promise<ModifyPublicNetworkAccessPointResponse>;
    /**
     * 修改RocketMQ专享实例
     */
    ModifyRocketMQInstance(req: ModifyRocketMQInstanceRequest, cb?: (error: string, rep: ModifyRocketMQInstanceResponse) => void): Promise<ModifyRocketMQInstanceResponse>;
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
     * 查询Topic迁移状态列表，源集群和目标集群客户端数量信息需要配合DescribeRocketMQSmoothMigrationTaskTopicInsNum接口查询
     */
    DescribeRocketMQMigratingTopicList(req: DescribeRocketMQMigratingTopicListRequest, cb?: (error: string, rep: DescribeRocketMQMigratingTopicListResponse) => void): Promise<DescribeRocketMQMigratingTopicListResponse>;
    /**
     * 查询cmq订阅详情
     */
    DescribeCmqSubscriptionDetail(req: DescribeCmqSubscriptionDetailRequest, cb?: (error: string, rep: DescribeCmqSubscriptionDetailResponse) => void): Promise<DescribeCmqSubscriptionDetailResponse>;
    /**
     * 获取环境下主题列表
     */
    GetTopicList(req: GetTopicListRequest, cb?: (error: string, rep: GetTopicListResponse) => void): Promise<GetTopicListResponse>;
    /**
     * 删除集群
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 重置指定Group的消费位点到指定时间戳
     */
    ResetRocketMQConsumerOffSet(req: ResetRocketMQConsumerOffSetRequest, cb?: (error: string, rep: ResetRocketMQConsumerOffSetResponse) => void): Promise<ResetRocketMQConsumerOffSetResponse>;
    /**
     * 获取集群列表
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 删除RabbitMQ的权限
     */
    DeleteRabbitMQPermission(req: DeleteRabbitMQPermissionRequest, cb?: (error: string, rep: DeleteRabbitMQPermissionResponse) => void): Promise<DeleteRabbitMQPermissionResponse>;
    /**
     * 平滑迁移过程获取源集群topic列表接口
     */
    DescribeRocketMQSourceClusterTopicList(req: DescribeRocketMQSourceClusterTopicListRequest, cb?: (error: string, rep: DescribeRocketMQSourceClusterTopicListResponse) => void): Promise<DescribeRocketMQSourceClusterTopicListResponse>;
    /**
     * 创建环境角色授权
     */
    CreateRocketMQEnvironmentRole(req: CreateRocketMQEnvironmentRoleRequest, cb?: (error: string, rep: CreateRocketMQEnvironmentRoleResponse) => void): Promise<CreateRocketMQEnvironmentRoleResponse>;
    /**
     * 获取在线消费端详情
     */
    DescribeRocketMQConsumerConnectionDetail(req: DescribeRocketMQConsumerConnectionDetailRequest, cb?: (error: string, rep: DescribeRocketMQConsumerConnectionDetailResponse) => void): Promise<DescribeRocketMQConsumerConnectionDetailResponse>;
    /**
     * 获取单个RabbitMQ专享实例信息
     */
    DescribeRabbitMQVipInstance(req: DescribeRabbitMQVipInstanceRequest, cb?: (error: string, rep: DescribeRabbitMQVipInstanceResponse) => void): Promise<DescribeRabbitMQVipInstanceResponse>;
    /**
     * 获取指定消费组下订阅的主题列表
     */
    DescribeRocketMQTopicsByGroup(req: DescribeRocketMQTopicsByGroupRequest, cb?: (error: string, rep: DescribeRocketMQTopicsByGroupResponse) => void): Promise<DescribeRocketMQTopicsByGroupResponse>;
    /**
     * 从腾讯云可观测平台拉取公网指标监控数据，目前仅支持客户端到 LB 的入带宽和出宽带指标。
     */
    DescribeRocketMQPublicAccessMonitorData(req: DescribeRocketMQPublicAccessMonitorDataRequest, cb?: (error: string, rep: DescribeRocketMQPublicAccessMonitorDataResponse) => void): Promise<DescribeRocketMQPublicAccessMonitorDataResponse>;
    /**
     * 导入topic列表
     */
    ImportRocketMQTopics(req: ImportRocketMQTopicsRequest, cb?: (error: string, rep: ImportRocketMQTopicsResponse) => void): Promise<ImportRocketMQTopicsResponse>;
    /**
     * 该接口用于开启关闭公网访问、设置安全访问策略
     */
    SetRocketMQPublicAccessPoint(req: SetRocketMQPublicAccessPointRequest, cb?: (error: string, rep: SetRocketMQPublicAccessPointResponse) => void): Promise<SetRocketMQPublicAccessPointResponse>;
    /**
     * 查询指定环境和主题下的订阅者列表
     */
    DescribeSubscriptions(req: DescribeSubscriptionsRequest, cb?: (error: string, rep: DescribeSubscriptionsResponse) => void): Promise<DescribeSubscriptionsResponse>;
    /**
     * 查询cmq主题详情
     */
    DescribeCmqTopicDetail(req: DescribeCmqTopicDetailRequest, cb?: (error: string, rep: DescribeCmqTopicDetailResponse) => void): Promise<DescribeCmqTopicDetailResponse>;
    /**
     * 获取单个RocketMQ专享集群信息
     */
    DescribeRocketMQVipInstanceDetail(req: DescribeRocketMQVipInstanceDetailRequest, cb?: (error: string, rep: DescribeRocketMQVipInstanceDetailResponse) => void): Promise<DescribeRocketMQVipInstanceDetailResponse>;
    /**
     * 获取角色列表
     */
    DescribeRocketMQRoles(req: DescribeRocketMQRolesRequest, cb?: (error: string, rep: DescribeRocketMQRolesResponse) => void): Promise<DescribeRocketMQRolesResponse>;
    /**
     * 查询RabbitMQ用户列表
     */
    DescribeRabbitMQUser(req: DescribeRabbitMQUserRequest, cb?: (error: string, rep: DescribeRabbitMQUserResponse) => void): Promise<DescribeRabbitMQUserResponse>;
    /**
     * 更新RocketMQ集群信息
     */
    ModifyRocketMQCluster(req: ModifyRocketMQClusterRequest, cb?: (error: string, rep: ModifyRocketMQClusterResponse) => void): Promise<ModifyRocketMQClusterResponse>;
    /**
     * 更新集群信息
     */
    ModifyCluster(req: ModifyClusterRequest, cb?: (error: string, rep: ModifyClusterResponse) => void): Promise<ModifyClusterResponse>;
    /**
     * 获取Pulsar专业版集群实例信息
     */
    DescribePulsarProInstanceDetail(req: DescribePulsarProInstanceDetailRequest, cb?: (error: string, rep: DescribePulsarProInstanceDetailResponse) => void): Promise<DescribePulsarProInstanceDetailResponse>;
    /**
     * 修改cmq订阅属性
     */
    ModifyCmqSubscriptionAttribute(req: ModifyCmqSubscriptionAttributeRequest, cb?: (error: string, rep: ModifyCmqSubscriptionAttributeResponse) => void): Promise<ModifyCmqSubscriptionAttributeResponse>;
    /**
     * 用于获取RocketMQ消费组订阅关系数据
     */
    DescribeRocketMQSubscriptions(req: DescribeRocketMQSubscriptionsRequest, cb?: (error: string, rep: DescribeRocketMQSubscriptionsResponse) => void): Promise<DescribeRocketMQSubscriptionsResponse>;
    /**
     * 创建一个主题的订阅关系
     */
    CreateSubscription(req: CreateSubscriptionRequest, cb?: (error: string, rep: CreateSubscriptionResponse) => void): Promise<CreateSubscriptionResponse>;
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
     * 创建RabbitMQ路由关系
     */
    CreateRabbitMQBinding(req: CreateRabbitMQBindingRequest, cb?: (error: string, rep: CreateRabbitMQBindingResponse) => void): Promise<CreateRabbitMQBindingResponse>;
    /**
     * 查询消息轨迹
     */
    DescribeMsgTrace(req: DescribeMsgTraceRequest, cb?: (error: string, rep: DescribeMsgTraceResponse) => void): Promise<DescribeMsgTraceResponse>;
    /**
     * 角色修改
     */
    ModifyRocketMQRole(req: ModifyRocketMQRoleRequest, cb?: (error: string, rep: ModifyRocketMQRoleResponse) => void): Promise<ModifyRocketMQRoleResponse>;
    /**
     * RabbitMQ专享版查询节点列表
     */
    DescribeRabbitMQNodeList(req: DescribeRabbitMQNodeListRequest, cb?: (error: string, rep: DescribeRabbitMQNodeListResponse) => void): Promise<DescribeRabbitMQNodeListResponse>;
    /**
     * 获取租户VPC绑定关系
     */
    DescribeBindVpcs(req: DescribeBindVpcsRequest, cb?: (error: string, rep: DescribeBindVpcsResponse) => void): Promise<DescribeBindVpcsResponse>;
    /**
     * 删除RocketMQ主题
     */
    DeleteRocketMQTopic(req: DeleteRocketMQTopicRequest, cb?: (error: string, rep: DeleteRocketMQTopicResponse) => void): Promise<DeleteRocketMQTopicResponse>;
    /**
     * 重发RocketMQ死信消息
     */
    RetryRocketMQDlqMessage(req: RetryRocketMQDlqMessageRequest, cb?: (error: string, rep: RetryRocketMQDlqMessageResponse) => void): Promise<RetryRocketMQDlqMessageResponse>;
    /**
     * 用于查询RocketMQ平滑迁移任务列表
     */
    DescribeRocketMQSmoothMigrationTaskList(req: DescribeRocketMQSmoothMigrationTaskListRequest, cb?: (error: string, rep: DescribeRocketMQSmoothMigrationTaskListResponse) => void): Promise<DescribeRocketMQSmoothMigrationTaskListResponse>;
    /**
     * 导出RocketMQ消息详情
     */
    ExportRocketMQMessageDetail(req: ExportRocketMQMessageDetailRequest, cb?: (error: string, rep: ExportRocketMQMessageDetailResponse) => void): Promise<ExportRocketMQMessageDetailResponse>;
    /**
     * 查询RabbitMQ队列列表
     */
    DescribeRabbitMQQueues(req: DescribeRabbitMQQueuesRequest, cb?: (error: string, rep: DescribeRabbitMQQueuesResponse) => void): Promise<DescribeRabbitMQQueuesResponse>;
    /**
     * 修改cmq队列属性
     */
    ModifyCmqQueueAttribute(req: ModifyCmqQueueAttributeRequest, cb?: (error: string, rep: ModifyCmqQueueAttributeResponse) => void): Promise<ModifyCmqQueueAttributeResponse>;
    /**
     * 本API用于修改RocketMQ专享实例配置，可以支持实例规格、节点数和存储的升配和实例规格的降配。本API发起订单并成功支付后进入实例配置变更的流程，可通过DescribeRocketMQVipInstances查询实例是否已变更完成。
     */
    ModifyRocketMQInstanceSpec(req: ModifyRocketMQInstanceSpecRequest, cb?: (error: string, rep: ModifyRocketMQInstanceSpecResponse) => void): Promise<ModifyRocketMQInstanceSpecResponse>;
    /**
     * 输入迁移任务id和要导入的Group，导入后台
     */
    ImportRocketMQConsumerGroups(req: ImportRocketMQConsumerGroupsRequest, cb?: (error: string, rep: ImportRocketMQConsumerGroupsResponse) => void): Promise<ImportRocketMQConsumerGroupsResponse>;
    /**
     * 查询用户已购的RocketMQ专享实例列表
     */
    DescribeRocketMQVipInstances(req: DescribeRocketMQVipInstancesRequest, cb?: (error: string, rep: DescribeRocketMQVipInstancesResponse) => void): Promise<DescribeRocketMQVipInstancesResponse>;
    /**
     * Rocketmq消费验证
     */
    VerifyRocketMQConsume(req: VerifyRocketMQConsumeRequest, cb?: (error: string, rep: VerifyRocketMQConsumeResponse) => void): Promise<VerifyRocketMQConsumeResponse>;
    /**
     * 修改RabbitMQ的权限
     */
    ModifyRabbitMQPermission(req: ModifyRabbitMQPermissionRequest, cb?: (error: string, rep: ModifyRabbitMQPermissionResponse) => void): Promise<ModifyRabbitMQPermissionResponse>;
    /**
     * 历史原因，该接口位于tdmq-manager，目前rabbitmq产品没有使用该接口，当前使用的是DescribeRabbitMQVipInstances。不过从调用链上看，线网还有请求流程，所以走预下线流程。

获取amqp集群列表
     */
    DescribeAMQPClusters(req: DescribeAMQPClustersRequest, cb?: (error: string, rep: DescribeAMQPClustersResponse) => void): Promise<DescribeAMQPClustersResponse>;
    /**
     * 创建RabbitMQ专享版实例
     */
    CreateRabbitMQVipInstance(req: CreateRabbitMQVipInstanceRequest, cb?: (error: string, rep: CreateRabbitMQVipInstanceResponse) => void): Promise<CreateRabbitMQVipInstanceResponse>;
    /**
     * 查询消息轨迹
     */
    DescribeMqMsgTrace(req: DescribeMqMsgTraceRequest, cb?: (error: string, rep: DescribeMqMsgTraceResponse) => void): Promise<DescribeMqMsgTraceResponse>;
    /**
     * 获取RocketMQ消费组列表
     */
    DescribeRocketMQGroups(req: DescribeRocketMQGroupsRequest, cb?: (error: string, rep: DescribeRocketMQGroupsResponse) => void): Promise<DescribeRocketMQGroupsResponse>;
    /**
     * 创建RocketMQ主题
     */
    CreateRocketMQTopic(req: CreateRocketMQTopicRequest, cb?: (error: string, rep: CreateRocketMQTopicResponse) => void): Promise<CreateRocketMQTopicResponse>;
    /**
     * 获取命名空间角色列表
     */
    DescribeRocketMQEnvironmentRoles(req: DescribeRocketMQEnvironmentRolesRequest, cb?: (error: string, rep: DescribeRocketMQEnvironmentRolesResponse) => void): Promise<DescribeRocketMQEnvironmentRolesResponse>;
    /**
     * 删除RocketMQ集群
     */
    DeleteRocketMQCluster(req: DeleteRocketMQClusterRequest, cb?: (error: string, rep: DeleteRocketMQClusterResponse) => void): Promise<DeleteRocketMQClusterResponse>;
    /**
     * 删除RabbitMQ的用户
     */
    DeleteRabbitMQUser(req: DeleteRabbitMQUserRequest, cb?: (error: string, rep: DeleteRabbitMQUserResponse) => void): Promise<DeleteRabbitMQUserResponse>;
    /**
     * 创建专业集群——预付费，仅通过api调用
     */
    CreateProCluster(req: CreateProClusterRequest, cb?: (error: string, rep: CreateProClusterResponse) => void): Promise<CreateProClusterResponse>;
    /**
     * 查询RabbitMQ vhost列表
     */
    DescribeRabbitMQVirtualHost(req: DescribeRabbitMQVirtualHostRequest, cb?: (error: string, rep: DescribeRabbitMQVirtualHostResponse) => void): Promise<DescribeRabbitMQVirtualHostResponse>;
    /**
     * 当前 ReceiveMessage 接口只支持 Partitioned 类型的 Topic。该接口用于接收发送到指定 Partitioned Topic 中的消息，当 Partitioned Topic 中没有消息但还去尝试调用该接口时，会抛出 ReceiveTimeout 的异常。

如何使用 BatchReceivePolicy：

BatchReceive 接口提供了如下三个参数：

● MaxNumMessages: 即每次使用 BatchReceive 的时候，最多一次Receive接口返回多少条消息。
● MaxNumBytes：即每次使用 BatchReceive 的时候，最多一次Receive接口返回多大内容的消息，单位是：bytes。
● Timeout：即每次使用 BatchReceive 的时候，最多一次 Receive 接口的超时时间是多久，单位是：MS。

默认如果上述三个参数都不指定，即关闭 BatchReceive 的特性。如果三个参数中的任意一个参数指定的数值大于 0，即开启 BatchReceive。BatchReceive 的结束条件为到达上述三个参数中任意一个指定的阈值。

注意：MaxNumMessages 和 MaxNumBytes 每一次接收的最大消息同时受限于 ReceiveQueueSize 的大小，如果 ReceiveQueueSize 的大小设置为 5，MaxNumMessages 设置为10，那么一次 BatchReceive 接收的最多的消息是 5条，而不是10条。



BatchReceivePolicy 的接口会一次性返回多条消息：

1. 多条消息的内容之间使用特殊字符 '###' 来进行分割，业务侧接收到消息之后，可以利用不同语言提供的 Split 工具分割不同的消息。
2. 多条消息的 MessageID 之间使用特殊字符 '###' 来进行分割，业务侧接收到消息之后，可以利用不同语言提供的 Split 工具分割不同的消息。（用于在调用 AcknowledgeMessage 接口中填入所需要的 MessageID 字段信息）
     */
    ReceiveMessage(req: ReceiveMessageRequest, cb?: (error: string, rep: ReceiveMessageResponse) => void): Promise<ReceiveMessageResponse>;
    /**
     * 删除RabbitMQ的vhost
     */
    DeleteRabbitMQVirtualHost(req: DeleteRabbitMQVirtualHostRequest, cb?: (error: string, rep: DeleteRabbitMQVirtualHostResponse) => void): Promise<DeleteRabbitMQVirtualHostResponse>;
    /**
     * 发送cmq消息
     */
    SendCmqMsg(req: SendCmqMsgRequest, cb?: (error: string, rep: SendCmqMsgResponse) => void): Promise<SendCmqMsgResponse>;
    /**
     * 用于获取RocketMQ平滑迁移任务详情
     */
    DescribeRocketMQSmoothMigrationTask(req: DescribeRocketMQSmoothMigrationTaskRequest, cb?: (error: string, rep: DescribeRocketMQSmoothMigrationTaskResponse) => void): Promise<DescribeRocketMQSmoothMigrationTaskResponse>;
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
     * 修改RabbitMQ的用户
     */
    ModifyRabbitMQUser(req: ModifyRabbitMQUserRequest, cb?: (error: string, rep: ModifyRabbitMQUserResponse) => void): Promise<ModifyRabbitMQUserResponse>;
    /**
     * 创建RocketMQ命名空间
     */
    CreateRocketMQNamespace(req: CreateRocketMQNamespaceRequest, cb?: (error: string, rep: CreateRocketMQNamespaceResponse) => void): Promise<CreateRocketMQNamespaceResponse>;
    /**
     * 消息详情
     */
    DescribeMsg(req: DescribeMsgRequest, cb?: (error: string, rep: DescribeMsgResponse) => void): Promise<DescribeMsgResponse>;
    /**
     * 批量发送消息

注意：TDMQ 批量发送消息的接口是在 TDMQ-HTTP 的服务侧将消息打包为一个 Batch，然后将该 Batch 在服务内部当作一次 TCP 请求发送出去。所以在使用过程中，用户还是按照单条消息发送的逻辑，每一条消息是一个独立的 HTTP 的请求，在 TDMQ-HTTP 的服务内部，会将多个 HTTP 的请求聚合为一个 Batch 发送到服务端。即，批量发送消息在使用上与发送单条消息是一致的，batch 的聚合是在 TDMQ-HTTP 的服务内部完成的。
     */
    SendBatchMessages(req: SendBatchMessagesRequest, cb?: (error: string, rep: SendBatchMessagesResponse) => void): Promise<SendBatchMessagesResponse>;
    /**
     * 修改RabbitMQ专享版实例
     */
    ModifyRabbitMQVipInstance(req: ModifyRabbitMQVipInstanceRequest, cb?: (error: string, rep: ModifyRabbitMQVipInstanceResponse) => void): Promise<ModifyRabbitMQVipInstanceResponse>;
    /**
     * 创建环境角色授权
     */
    CreateEnvironmentRole(req: CreateEnvironmentRoleRequest, cb?: (error: string, rep: CreateEnvironmentRoleResponse) => void): Promise<CreateEnvironmentRoleResponse>;
    /**
     * 获取RocketMQ主题列表
     */
    DescribeRocketMQTopics(req: DescribeRocketMQTopicsRequest, cb?: (error: string, rep: DescribeRocketMQTopicsResponse) => void): Promise<DescribeRocketMQTopicsResponse>;
    /**
     * 修改环境角色授权。
     */
    ModifyEnvironmentRole(req: ModifyEnvironmentRoleRequest, cb?: (error: string, rep: ModifyEnvironmentRoleResponse) => void): Promise<ModifyEnvironmentRoleResponse>;
    /**
     * 消息队列TDMQ RabbitMQ 有一个存量旧接口没下线，目前实际上已经不在产品中使用：DescribeRabbitMQVirtualHostList，这个接口很久前已经被 DescribeRabbitMQVirtualHost 替换掉。已无用户在调用。

RabbitMQ专享版查询虚拟主机列表
     */
    DescribeRabbitMQVirtualHostList(req: DescribeRabbitMQVirtualHostListRequest, cb?: (error: string, rep: DescribeRabbitMQVirtualHostListResponse) => void): Promise<DescribeRabbitMQVirtualHostListResponse>;
    /**
     * 获取RocketMQ集群列表
     */
    DescribeRocketMQClusters(req: DescribeRocketMQClustersRequest, cb?: (error: string, rep: DescribeRocketMQClustersResponse) => void): Promise<DescribeRocketMQClustersResponse>;
    /**
     * 发送单条消息
不支持持久topic
     */
    SendMessages(req: SendMessagesRequest, cb?: (error: string, rep: SendMessagesResponse) => void): Promise<SendMessagesResponse>;
    /**
     * 修改主题备注和分区数
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 查询RabbitMQ路由关系列表
     */
    DescribeRabbitMQBindings(req: DescribeRabbitMQBindingsRequest, cb?: (error: string, rep: DescribeRabbitMQBindingsResponse) => void): Promise<DescribeRabbitMQBindingsResponse>;
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
     * 消息查询
     */
    DescribeTopicMsgs(req: DescribeTopicMsgsRequest, cb?: (error: string, rep: DescribeTopicMsgsResponse) => void): Promise<DescribeTopicMsgsResponse>;
    /**
     * 清空cmq消息队列中的消息
     */
    ClearCmqQueue(req: ClearCmqQueueRequest, cb?: (error: string, rep: ClearCmqQueueResponse) => void): Promise<ClearCmqQueueResponse>;
    /**
     * 查询用户已购的Pulsar专业版实例列表
     */
    DescribePulsarProInstances(req: DescribePulsarProInstancesRequest, cb?: (error: string, rep: DescribePulsarProInstancesResponse) => void): Promise<DescribePulsarProInstancesResponse>;
    /**
     * 获取生产者信息列表
     */
    DescribePublishers(req: DescribePublishersRequest, cb?: (error: string, rep: DescribePublishersResponse) => void): Promise<DescribePublishersResponse>;
    /**
     * 此接口用于创建一个RocketMQ集群
     */
    CreateRocketMQCluster(req: CreateRocketMQClusterRequest, cb?: (error: string, rep: CreateRocketMQClusterResponse) => void): Promise<CreateRocketMQClusterResponse>;
    /**
     * 查询RabbitMQ队列详情
     */
    DescribeRabbitMQQueueDetail(req: DescribeRabbitMQQueueDetailRequest, cb?: (error: string, rep: DescribeRabbitMQQueueDetailResponse) => void): Promise<DescribeRabbitMQQueueDetailResponse>;
    /**
     * rocketmq消息详情
     */
    DescribeRocketMQMsg(req: DescribeRocketMQMsgRequest, cb?: (error: string, rep: DescribeRocketMQMsgResponse) => void): Promise<DescribeRocketMQMsgResponse>;
    /**
     * 获取环境下主题列表
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
    /**
     * 获取命名空间角色列表
     */
    DescribeEnvironmentRoles(req: DescribeEnvironmentRolesRequest, cb?: (error: string, rep: DescribeEnvironmentRolesResponse) => void): Promise<DescribeEnvironmentRolesResponse>;
    /**
     * 删除RabbitMQ专享版实例
     */
    DeleteRabbitMQVipInstance(req: DeleteRabbitMQVipInstanceRequest, cb?: (error: string, rep: DeleteRabbitMQVipInstanceResponse) => void): Promise<DeleteRabbitMQVipInstanceResponse>;
    /**
     * 发送cmq主题消息
     */
    PublishCmqMsg(req: PublishCmqMsgRequest, cb?: (error: string, rep: PublishCmqMsgResponse) => void): Promise<PublishCmqMsgResponse>;
    /**
     * 获取用户绑定的专享集群列表
     */
    DescribeBindClusters(req?: DescribeBindClustersRequest, cb?: (error: string, rep: DescribeBindClustersResponse) => void): Promise<DescribeBindClustersResponse>;
    /**
     * 查询cmq队列详情
     */
    DescribeCmqQueueDetail(req: DescribeCmqQueueDetailRequest, cb?: (error: string, rep: DescribeCmqQueueDetailResponse) => void): Promise<DescribeCmqQueueDetailResponse>;
    /**
     * 平滑迁移过程获取源集群group列表接口
     */
    DescribeRocketMQSourceClusterGroupList(req: DescribeRocketMQSourceClusterGroupListRequest, cb?: (error: string, rep: DescribeRocketMQSourceClusterGroupListResponse) => void): Promise<DescribeRocketMQSourceClusterGroupListResponse>;
    /**
     * 此接口仅用于测试发生消息，不能作为现网正式生产使用
     */
    SendMsg(req: SendMsgRequest, cb?: (error: string, rep: SendMsgResponse) => void): Promise<SendMsgResponse>;
    /**
     * 删除RocketMQ专享实例
     */
    DeleteRocketMQVipInstance(req: DeleteRocketMQVipInstanceRequest, cb?: (error: string, rep: DeleteRocketMQVipInstanceResponse) => void): Promise<DeleteRocketMQVipInstanceResponse>;
    /**
     * 发送RocketMQ消息
     */
    SendRocketMQMessage(req: SendRocketMQMessageRequest, cb?: (error: string, rep: SendRocketMQMessageResponse) => void): Promise<SendRocketMQMessageResponse>;
    /**
     * 清空订阅者消息标签
     */
    ClearCmqSubscriptionFilterTags(req: ClearCmqSubscriptionFilterTagsRequest, cb?: (error: string, rep: ClearCmqSubscriptionFilterTagsResponse) => void): Promise<ClearCmqSubscriptionFilterTagsResponse>;
    /**
     * 删除cmq订阅
     */
    DeleteCmqSubscribe(req: DeleteCmqSubscribeRequest, cb?: (error: string, rep: DeleteCmqSubscribeResponse) => void): Promise<DeleteCmqSubscribeResponse>;
    /**
     * 接口用于查询RocketMQ实例的公网接入信息
     */
    DescribeRocketMQPublicAccessPoint(req: DescribeRocketMQPublicAccessPointRequest, cb?: (error: string, rep: DescribeRocketMQPublicAccessPointResponse) => void): Promise<DescribeRocketMQPublicAccessPointResponse>;
    /**
     * 解绑RabbitMQ路由关系
     */
    DeleteRabbitMQBinding(req: DeleteRabbitMQBindingRequest, cb?: (error: string, rep: DeleteRabbitMQBindingResponse) => void): Promise<DeleteRabbitMQBindingResponse>;
    /**
     * 角色修改
     */
    ModifyRole(req: ModifyRoleRequest, cb?: (error: string, rep: ModifyRoleResponse) => void): Promise<ModifyRoleResponse>;
    /**
     * 创建RocketMQ专享实例
     */
    CreateRocketMQVipInstance(req: CreateRocketMQVipInstanceRequest, cb?: (error: string, rep: CreateRocketMQVipInstanceResponse) => void): Promise<CreateRocketMQVipInstanceResponse>;
    /**
     * 删除环境角色授权。
     */
    DeleteRocketMQEnvironmentRoles(req: DeleteRocketMQEnvironmentRolesRequest, cb?: (error: string, rep: DeleteRocketMQEnvironmentRolesResponse) => void): Promise<DeleteRocketMQEnvironmentRolesResponse>;
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

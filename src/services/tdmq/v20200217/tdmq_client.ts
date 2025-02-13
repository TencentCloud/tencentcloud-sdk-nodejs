/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  RocketMQNamespace,
  CreateRabbitMQBindingResponse,
  ModifyRocketMQInstanceSpecRequest,
  DeleteClusterResponse,
  CreateCmqTopicRequest,
  ModifyRabbitMQVipInstanceRequest,
  RocketMQVipInstance,
  DescribeCmqQueuesResponse,
  DescribeRabbitMQVirtualHostListRequest,
  DescribeAllTenantsResponse,
  RocketMQConsumerTopic,
  DescribeRabbitMQNodeListRequest,
  DeleteCmqQueueResponse,
  ConsumerStats,
  DescribeRocketMQEnvironmentRolesRequest,
  DeleteRocketMQGroupRequest,
  RocketMQGroup,
  ModifyRabbitMQUserRequest,
  CreateSubscriptionRequest,
  RabbitMQVipInstance,
  RabbitMQClusterInfo,
  RabbitMQVirtualHostStatistics,
  DescribeRabbitMQQueuesResponse,
  DescribeEnvironmentsRequest,
  DescribeRocketMQNamespacesRequest,
  ModifyRocketMQClusterResponse,
  DescribeRocketMQTopicStatsResponse,
  CreateEnvironmentRequest,
  CreateCmqSubscribeResponse,
  DescribeClustersRequest,
  ModifyEnvironmentAttributesRequest,
  RocketMQDataPoint,
  DescribeSubscriptionsResponse,
  ModifyRocketMQClusterRequest,
  SendBatchMessagesResponse,
  DescribeRocketMQVipInstanceDetailResponse,
  DescribeRabbitMQVirtualHostResponse,
  RabbitMQPermission,
  CreateRocketMQClusterRequest,
  ModifyCmqSubscriptionAttributeResponse,
  DeleteRocketMQRolesResponse,
  DeleteRocketMQTopicResponse,
  Publisher,
  ModifyRoleRequest,
  DescribeRocketMQMsgRequest,
  RocketMQGroupConfigOutput,
  CreateTopicRequest,
  DescribeCmqTopicsResponse,
  DescribeRocketMQMsgTraceRequest,
  ModifyRocketMQGroupRequest,
  DescribeCmqTopicDetailRequest,
  UnbindCmqDeadLetterResponse,
  ModifyRocketMQEnvironmentRoleRequest,
  ModifyRocketMQNamespaceResponse,
  InternalTenant,
  DeleteEnvironmentsRequest,
  DescribeRocketMQClustersRequest,
  SendRocketMQMessageRequest,
  CreateClusterResponse,
  DeleteRocketMQNamespaceRequest,
  DescribeRocketMQSmoothMigrationTaskListResponse,
  DescribeRocketMQSourceClusterTopicListResponse,
  DeleteRabbitMQPermissionRequest,
  CreateTopicResponse,
  ReceiveMessageResponse,
  CreateRocketMQVipInstanceRequest,
  PulsarNetworkAccessPointInfo,
  DescribeRabbitMQVipInstanceRequest,
  DescribeRabbitMQExchangesRequest,
  DeleteTopicsRequest,
  DescribeNamespaceBundlesOptRequest,
  DeleteRocketMQEnvironmentRolesResponse,
  DeleteCmqSubscribeRequest,
  RocketMQClusterConfig,
  SendMsgResponse,
  DescribeMsgRequest,
  DeleteRabbitMQPermissionResponse,
  DeleteRabbitMQBindingResponse,
  ModifyRabbitMQVipInstanceResponse,
  DescribeRocketMQSourceClusterGroupListRequest,
  DescribePulsarProInstancesRequest,
  RocketMQGroupConfig,
  VpcEndpointInfo,
  ClearCmqQueueResponse,
  DescribeTopicMsgsRequest,
  DeleteCmqQueueRequest,
  DeleteRabbitMQUserResponse,
  DescribeRabbitMQVirtualHostListResponse,
  SetRocketMQPublicAccessPointResponse,
  DescribeRocketMQTopicMsgsRequest,
  ModifyEnvironmentRoleRequest,
  DescribeRocketMQRolesResponse,
  SubscriptionTopic,
  ModifyRocketMQRoleRequest,
  DescribeMqMsgTraceRequest,
  SendBatchMessagesRequest,
  DescribeRabbitMQNodeListResponse,
  RocketMQTopicConfig,
  ProducerLog,
  DescribePublisherSummaryRequest,
  PulsarProClusterInfo,
  ModifyRocketMQGroupResponse,
  EnvironmentRole,
  ImportRocketMQTopicsRequest,
  DeleteRabbitMQVipInstanceResponse,
  DetailedRolePerm,
  RabbitMQClusterAccessInfo,
  DescribeBindClustersResponse,
  ModifyRabbitMQVirtualHostRequest,
  ReceiveMessageRequest,
  RocketMQConsumerConnection,
  CreateRabbitMQVipInstanceRequest,
  DescribeRabbitMQPermissionResponse,
  DescribeRocketMQSmoothMigrationTaskRequest,
  DeleteClusterRequest,
  CmqSubscription,
  RocketMQTopicConfigOutput,
  RocketMQSmoothMigrationTaskItem,
  VpcInfo,
  DeleteCmqTopicResponse,
  CreateRocketMQNamespaceRequest,
  RocketMQSubscription,
  ExchangeQuota,
  ModifyRabbitMQVirtualHostResponse,
  RabbitMQQueueListConsumerDetailInfo,
  ExportRocketMQMessageDetailResponse,
  CreateSubscriptionResponse,
  ImportRocketMQConsumerGroupsResponse,
  DescribeRocketMQConsumerConnectionsResponse,
  DescribeCmqSubscriptionDetailRequest,
  DescribeRocketMQClusterResponse,
  AMQPClusterConfig,
  ServerLog,
  DescribeMsgTraceResponse,
  ModifyClusterRequest,
  CreateRocketMQVipInstanceResponse,
  AcknowledgeMessageRequest,
  RabbitMQQueueListInfo,
  DescribeMsgResponse,
  CreateProClusterResponse,
  ModifyRocketMQInstanceRequest,
  Tag,
  CreateProClusterRequest,
  DescribeRabbitMQVipInstancesResponse,
  DeleteRolesRequest,
  ClearCmqQueueRequest,
  CreateRocketMQEnvironmentRoleRequest,
  SetRocketMQPublicAccessPointRequest,
  DeleteEnvironmentsResponse,
  ModifyAMQPClusterRequest,
  DescribeRabbitMQBindingsResponse,
  FilterSubscription,
  TopicStats,
  DescribeClustersResponse,
  ClearCmqSubscriptionFilterTagsRequest,
  CreateRocketMQGroupResponse,
  ModifyRocketMQNamespaceRequest,
  ModifyRocketMQTopicResponse,
  CreateRocketMQRoleResponse,
  DeleteRocketMQGroupResponse,
  PulsarProInstance,
  RocketMQMigrationTopicDistribution,
  DescribeRocketMQClusterRequest,
  DescribeAMQPClustersRequest,
  EnvironmentRoleSet,
  DescribeEnvironmentsResponse,
  AMQPClusterInfo,
  ModifyRocketMQInstanceSpecResponse,
  GetTopicListResponse,
  DescribeMsgTraceRequest,
  DescribeCmqTopicsRequest,
  ConsumerLog,
  CreateEnvironmentRoleResponse,
  PrometheusEndpointInfo,
  Cluster,
  RocketMQMsgLog,
  CreateRocketMQClusterResponse,
  DeleteRocketMQNamespaceResponse,
  CreateRocketMQTopicRequest,
  DescribeRocketMQVipInstancesResponse,
  DeleteRocketMQClusterRequest,
  DescribePulsarProInstancesResponse,
  RocketMQInstanceConfig,
  MigrateTopic,
  DeleteRabbitMQBindingRequest,
  DescribeRocketMQSmoothMigrationTaskResponse,
  DescribeBindClustersRequest,
  CreateRabbitMQVirtualHostRequest,
  VerifyRocketMQConsumeRequest,
  DescribeRabbitMQQueueDetailRequest,
  DescribePulsarProInstanceDetailRequest,
  DescribeRocketMQConsumerConnectionsRequest,
  CreateRoleRequest,
  DescribeEnvironmentAttributesResponse,
  DescribeRocketMQRolesRequest,
  CreateRocketMQNamespaceResponse,
  Topic_Simplification,
  ModifyRocketMQEnvironmentRoleResponse,
  CreateCmqQueueResponse,
  DeleteRabbitMQVipInstanceRequest,
  Filter,
  DescribeRocketMQPublicAccessMonitorDataRequest,
  DescribeRolesResponse,
  DescribeRabbitMQPermissionRequest,
  DeleteRabbitMQUserRequest,
  DescribeSubscriptionsRequest,
  InstanceNodeDistribution,
  CreateRocketMQGroupRequest,
  Role,
  DescribeTopicMsgsResponse,
  DescribeClusterDetailRequest,
  SendCmqMsgRequest,
  RabbitMQPrivateVirtualHost,
  CreateRabbitMQVirtualHostResponse,
  DescribeNamespaceBundlesOptResponse,
  GetTopicListRequest,
  RewindCmqQueueResponse,
  PublicAccessRule,
  RabbitMQClusterWhiteListInfo,
  DeleteProClusterRequest,
  DescribeCmqTopicDetailResponse,
  DescribeRocketMQTopicsRequest,
  DescribeRocketMQSubscriptionsResponse,
  ClientSubscriptionInfo,
  DescribeCmqSubscriptionDetailResponse,
  VpcBindRecord,
  DescribeRocketMQMsgResponse,
  DescribeEnvironmentAttributesRequest,
  ModifyPublicNetworkSecurityPolicyResponse,
  DeleteRabbitMQVirtualHostResponse,
  DescribePublishersRequest,
  RabbitMQBindingListInfo,
  ModifyPublicNetworkSecurityPolicyRequest,
  ModifyRoleResponse,
  DescribeRocketMQTopicStatsRequest,
  SendRocketMQMessageResponse,
  PulsarProClusterSpecInfo,
  Subscription,
  SendMessagesResponse,
  RocketMQMessageTrack,
  DescribeRocketMQNamespacesResponse,
  DescribeTopicsRequest,
  DescribeRocketMQMigratingTopicListResponse,
  DescribeEnvironmentRolesResponse,
  DescribeRocketMQPublicAccessPointResponse,
  DescribeRabbitMQExchangesResponse,
  DescribeRabbitMQQueueDetailResponse,
  DescribeRocketMQTopicMsgsResponse,
  SecurityPolicy,
  VerifyRocketMQConsumeResponse,
  DescribeRocketMQConsumerConnectionDetailRequest,
  DeleteRolesResponse,
  RetryRocketMQDlqMessageResponse,
  DescribeRabbitMQBindingsRequest,
  ModifyRocketMQTopicRequest,
  RocketMQClusterInfo,
  ModifyRocketMQInstanceResponse,
  PartitionsTopic,
  ResetMsgSubOffsetByTimestampResponse,
  SendMessagesRequest,
  CreateRocketMQRoleRequest,
  DescribeNodeHealthOptResponse,
  DescribeRabbitMQVipInstanceResponse,
  ModifyCmqSubscriptionAttributeRequest,
  ModifyTopicResponse,
  VirtualHostQuota,
  DescribeRocketMQVipInstanceDetailRequest,
  DeleteRocketMQClusterResponse,
  CreateCmqTopicResponse,
  CmqDeadLetterSource,
  ClearCmqSubscriptionFilterTagsResponse,
  DescribeRocketMQSubscriptionsRequest,
  ResetMsgSubOffsetByTimestampRequest,
  DescribeBindVpcsResponse,
  DescribeAMQPClustersResponse,
  ModifyRabbitMQPermissionRequest,
  ConsumersSchedule,
  DescribeRocketMQClustersResponse,
  TraceResult,
  DescribeRabbitMQQueuesRequest,
  SendMsgRequest,
  DescribeRocketMQEnvironmentRolesResponse,
  DescribeRocketMQMigratingTopicListRequest,
  CreateRoleResponse,
  ModifyRabbitMQUserResponse,
  DescribeNodeHealthOptRequest,
  Sort,
  ConsumerLogs,
  DescribeMqMsgTraceResponse,
  CreateRabbitMQUserRequest,
  DescribeRocketMQConsumeStatsRequest,
  SendCmqMsgResponse,
  ModifyPublicNetworkAccessPointResponse,
  ModifyCmqQueueAttributeRequest,
  RabbitMQClusterSpecInfo,
  DeleteCmqSubscribeResponse,
  DeleteRocketMQEnvironmentRolesRequest,
  VpcConfig,
  DescribeRabbitMQVipInstancesRequest,
  DescribeClusterDetailResponse,
  DescribeRabbitMQVirtualHostRequest,
  DeleteRocketMQRolesRequest,
  CmqDeadLetterPolicy,
  QueueQuota,
  ExportRocketMQMessageDetailRequest,
  CreateRabbitMQUserResponse,
  ModifyRocketMQRoleResponse,
  CreateRabbitMQBindingRequest,
  RocketMQTopicDistribution,
  BindCluster,
  ModifyClusterResponse,
  RocketMQClusterRecentStats,
  DescribeRocketMQPublicAccessPointRequest,
  RabbitMQPrivateNode,
  RetryRocketMQDlqMessageRequest,
  ModifyPublicNetworkAccessPointRequest,
  DescribeRocketMQSourceClusterGroupListResponse,
  DescribeRocketMQTopicsByGroupRequest,
  DescribeRocketMQConsumeStatsResponse,
  DescribeRocketMQPublicAccessMonitorDataResponse,
  RabbitMQVirtualHostInfo,
  CmqQueue,
  CreateEnvironmentResponse,
  Topic,
  ModifyRabbitMQPermissionResponse,
  DescribeCmqQueueDetailResponse,
  DescribeRocketMQSourceClusterTopicListRequest,
  ModifyCmqTopicAttributeResponse,
  RocketMQTopic,
  DeleteRocketMQVipInstanceResponse,
  DescribeRabbitMQUserResponse,
  ImportRocketMQConsumerGroupsRequest,
  DescribeTopicsResponse,
  PublishCmqMsgResponse,
  AcknowledgeMessageResponse,
  DeleteEnvironmentRolesResponse,
  PublishCmqMsgRequest,
  ModifyCmqTopicAttributeRequest,
  DeleteTopicsResponse,
  RewindCmqQueueRequest,
  DeleteRocketMQVipInstanceRequest,
  MsgLog,
  CmqTopic,
  RabbitMQExchangeListInfo,
  DescribeBindVpcsRequest,
  TopicRecord,
  DescribeEnvironmentRolesRequest,
  DescribeRabbitMQUserRequest,
  DescribeRocketMQTopicsResponse,
  Environment,
  RocketMQClusterDetail,
  DescribeRocketMQGroupsResponse,
  DescribeRocketMQConsumerConnectionDetailResponse,
  DescribeRocketMQSmoothMigrationTaskListRequest,
  CreateClusterRequest,
  DeleteProClusterResponse,
  ModifyCmqQueueAttributeResponse,
  DescribeCmqQueuesRequest,
  ResetRocketMQConsumerOffSetResponse,
  RabbitMQUser,
  DescribeRocketMQVipInstancesRequest,
  DeleteRabbitMQVirtualHostRequest,
  CreateRabbitMQVipInstanceResponse,
  ModifyEnvironmentAttributesResponse,
  CmqTransactionPolicy,
  ModifyTopicRequest,
  Consumer,
  CreateCmqSubscribeRequest,
  DeleteSubscriptionsResponse,
  DeleteRocketMQTopicRequest,
  RetentionPolicy,
  DescribePublishersResponse,
  DescribeCmqQueueDetailRequest,
  CreateRocketMQEnvironmentRoleResponse,
  DescribeRocketMQTopicsByGroupResponse,
  DeleteEnvironmentRolesRequest,
  CreateRocketMQTopicResponse,
  CreateCmqQueueRequest,
  ModifyEnvironmentRoleResponse,
  DescribeRocketMQGroupsRequest,
  DescribeRocketMQMsgTraceResponse,
  ImportRocketMQTopicsResponse,
  ModifyAMQPClusterResponse,
  DescribePublisherSummaryResponse,
  DeleteCmqTopicRequest,
  DescribePulsarProInstanceDetailResponse,
  UnbindCmqDeadLetterRequest,
  DescribeRolesRequest,
  DeleteSubscriptionsRequest,
  DescribeAllTenantsRequest,
  ResetRocketMQConsumerOffSetRequest,
  AMQPClusterDetail,
  CreateEnvironmentRoleRequest,
} from "./tdmq_models"

/**
 * tdmq client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tdmq.tencentcloudapi.com", "2020-02-17", clientConfig)
  }

  /**
   * 批量删除租户下的命名空间
   */
  async DeleteEnvironments(
    req: DeleteEnvironmentsRequest,
    cb?: (error: string, rep: DeleteEnvironmentsResponse) => void
  ): Promise<DeleteEnvironmentsResponse> {
    return this.request("DeleteEnvironments", req, cb)
  }

  /**
   * 创建用户的集群
   */
  async CreateCluster(
    req: CreateClusterRequest,
    cb?: (error: string, rep: CreateClusterResponse) => void
  ): Promise<CreateClusterResponse> {
    return this.request("CreateCluster", req, cb)
  }

  /**
   * 获取消费详情列表
   */
  async DescribeRocketMQConsumeStats(
    req: DescribeRocketMQConsumeStatsRequest,
    cb?: (error: string, rep: DescribeRocketMQConsumeStatsResponse) => void
  ): Promise<DescribeRocketMQConsumeStatsResponse> {
    return this.request("DescribeRocketMQConsumeStats", req, cb)
  }

  /**
   * 删除角色，支持批量。
   */
  async DeleteRoles(
    req: DeleteRolesRequest,
    cb?: (error: string, rep: DeleteRolesResponse) => void
  ): Promise<DeleteRolesResponse> {
    return this.request("DeleteRoles", req, cb)
  }

  /**
   * 查询RabbitMQ exchange 列表
   */
  async DescribeRabbitMQExchanges(
    req: DescribeRabbitMQExchangesRequest,
    cb?: (error: string, rep: DescribeRabbitMQExchangesResponse) => void
  ): Promise<DescribeRabbitMQExchangesResponse> {
    return this.request("DescribeRabbitMQExchanges", req, cb)
  }

  /**
     * 历史原因，该接口位于tdmq-manager，目前rabbitmq产品没有使用该接口，当前使用的是ModifyRabbitMQVipInstance。不过从调用链上看，线网还有请求流程，所以走预下线流程。

更新Amqp集群信息
     */
  async ModifyAMQPCluster(
    req: ModifyAMQPClusterRequest,
    cb?: (error: string, rep: ModifyAMQPClusterResponse) => void
  ): Promise<ModifyAMQPClusterResponse> {
    return this.request("ModifyAMQPCluster", req, cb)
  }

  /**
   * 查询消息轨迹
   */
  async DescribeRocketMQMsgTrace(
    req: DescribeRocketMQMsgTraceRequest,
    cb?: (error: string, rep: DescribeRocketMQMsgTraceResponse) => void
  ): Promise<DescribeRocketMQMsgTraceResponse> {
    return this.request("DescribeRocketMQMsgTrace", req, cb)
  }

  /**
   * 创建角色
   */
  async CreateRocketMQRole(
    req: CreateRocketMQRoleRequest,
    cb?: (error: string, rep: CreateRocketMQRoleResponse) => void
  ): Promise<CreateRocketMQRoleResponse> {
    return this.request("CreateRocketMQRole", req, cb)
  }

  /**
   * 创建cmq主题
   */
  async CreateCmqTopic(
    req: CreateCmqTopicRequest,
    cb?: (error: string, rep: CreateCmqTopicResponse) => void
  ): Promise<CreateCmqTopicResponse> {
    return this.request("CreateCmqTopic", req, cb)
  }

  /**
   * 删除cmq队列
   */
  async DeleteCmqQueue(
    req: DeleteCmqQueueRequest,
    cb?: (error: string, rep: DeleteCmqQueueResponse) => void
  ): Promise<DeleteCmqQueueResponse> {
    return this.request("DeleteCmqQueue", req, cb)
  }

  /**
   * 修改RabbitMQ的vhost
   */
  async ModifyRabbitMQVirtualHost(
    req: ModifyRabbitMQVirtualHostRequest,
    cb?: (error: string, rep: ModifyRabbitMQVirtualHostResponse) => void
  ): Promise<ModifyRabbitMQVirtualHostResponse> {
    return this.request("ModifyRabbitMQVirtualHost", req, cb)
  }

  /**
   * 枚举cmq全量主题
   */
  async DescribeCmqTopics(
    req: DescribeCmqTopicsRequest,
    cb?: (error: string, rep: DescribeCmqTopicsResponse) => void
  ): Promise<DescribeCmqTopicsResponse> {
    return this.request("DescribeCmqTopics", req, cb)
  }

  /**
   * 批量删除topics
   */
  async DeleteTopics(
    req: DeleteTopicsRequest,
    cb?: (error: string, rep: DeleteTopicsResponse) => void
  ): Promise<DeleteTopicsResponse> {
    return this.request("DeleteTopics", req, cb)
  }

  /**
   * 删除RocketMQ消费组
   */
  async DeleteRocketMQGroup(
    req: DeleteRocketMQGroupRequest,
    cb?: (error: string, rep: DeleteRocketMQGroupResponse) => void
  ): Promise<DeleteRocketMQGroupResponse> {
    return this.request("DeleteRocketMQGroup", req, cb)
  }

  /**
   * 删除专业集群——预付费，仅通过API 调用
   */
  async DeleteProCluster(
    req: DeleteProClusterRequest,
    cb?: (error: string, rep: DeleteProClusterResponse) => void
  ): Promise<DeleteProClusterResponse> {
    return this.request("DeleteProCluster", req, cb)
  }

  /**
   * 删除角色，支持批量。
   */
  async DeleteRocketMQRoles(
    req: DeleteRocketMQRolesRequest,
    cb?: (error: string, rep: DeleteRocketMQRolesResponse) => void
  ): Promise<DeleteRocketMQRolesResponse> {
    return this.request("DeleteRocketMQRoles", req, cb)
  }

  /**
   * 获取指定消费组下当前客户端的连接情况
   */
  async DescribeRocketMQConsumerConnections(
    req: DescribeRocketMQConsumerConnectionsRequest,
    cb?: (error: string, rep: DescribeRocketMQConsumerConnectionsResponse) => void
  ): Promise<DescribeRocketMQConsumerConnectionsResponse> {
    return this.request("DescribeRocketMQConsumerConnections", req, cb)
  }

  /**
   * 创建RabbitMQ的用户
   */
  async CreateRabbitMQUser(
    req: CreateRabbitMQUserRequest,
    cb?: (error: string, rep: CreateRabbitMQUserResponse) => void
  ): Promise<CreateRabbitMQUserResponse> {
    return this.request("CreateRabbitMQUser", req, cb)
  }

  /**
   * 查询用户已购的RabbitMQ专享实例列表
   */
  async DescribeRabbitMQVipInstances(
    req: DescribeRabbitMQVipInstancesRequest,
    cb?: (error: string, rep: DescribeRabbitMQVipInstancesResponse) => void
  ): Promise<DescribeRabbitMQVipInstancesResponse> {
    return this.request("DescribeRabbitMQVipInstances", req, cb)
  }

  /**
   * 回溯cmq队列
   */
  async RewindCmqQueue(
    req: RewindCmqQueueRequest,
    cb?: (error: string, rep: RewindCmqQueueResponse) => void
  ): Promise<RewindCmqQueueResponse> {
    return this.request("RewindCmqQueue", req, cb)
  }

  /**
   * 获取Topic生产详情列表
   */
  async DescribeRocketMQTopicStats(
    req: DescribeRocketMQTopicStatsRequest,
    cb?: (error: string, rep: DescribeRocketMQTopicStatsResponse) => void
  ): Promise<DescribeRocketMQTopicStatsResponse> {
    return this.request("DescribeRocketMQTopicStats", req, cb)
  }

  /**
   * 新增指定分区、类型的消息主题
   */
  async CreateTopic(
    req: CreateTopicRequest,
    cb?: (error: string, rep: CreateTopicResponse) => void
  ): Promise<CreateTopicResponse> {
    return this.request("CreateTopic", req, cb)
  }

  /**
   * 获取RocketMQ命名空间列表
   */
  async DescribeRocketMQNamespaces(
    req: DescribeRocketMQNamespacesRequest,
    cb?: (error: string, rep: DescribeRocketMQNamespacesResponse) => void
  ): Promise<DescribeRocketMQNamespacesResponse> {
    return this.request("DescribeRocketMQNamespaces", req, cb)
  }

  /**
   * 查询cmq全量队列
   */
  async DescribeCmqQueues(
    req: DescribeCmqQueuesRequest,
    cb?: (error: string, rep: DescribeCmqQueuesResponse) => void
  ): Promise<DescribeCmqQueuesResponse> {
    return this.request("DescribeCmqQueues", req, cb)
  }

  /**
   * 获取租户下命名空间列表
   */
  async DescribeEnvironments(
    req: DescribeEnvironmentsRequest,
    cb?: (error: string, rep: DescribeEnvironmentsResponse) => void
  ): Promise<DescribeEnvironmentsResponse> {
    return this.request("DescribeEnvironments", req, cb)
  }

  /**
   * 获取集群的详细信息
   */
  async DescribeClusterDetail(
    req: DescribeClusterDetailRequest,
    cb?: (error: string, rep: DescribeClusterDetailResponse) => void
  ): Promise<DescribeClusterDetailResponse> {
    return this.request("DescribeClusterDetail", req, cb)
  }

  /**
   * 创建RocketMQ消费组
   */
  async CreateRocketMQGroup(
    req: CreateRocketMQGroupRequest,
    cb?: (error: string, rep: CreateRocketMQGroupResponse) => void
  ): Promise<CreateRocketMQGroupResponse> {
    return this.request("CreateRocketMQGroup", req, cb)
  }

  /**
   * 根据提供的 MessageID 确认指定 topic 中的消息
   */
  async AcknowledgeMessage(
    req: AcknowledgeMessageRequest,
    cb?: (error: string, rep: AcknowledgeMessageResponse) => void
  ): Promise<AcknowledgeMessageResponse> {
    return this.request("AcknowledgeMessage", req, cb)
  }

  /**
   * 用于在用户账户下创建消息队列 Tdmq 命名空间
   */
  async CreateEnvironment(
    req: CreateEnvironmentRequest,
    cb?: (error: string, rep: CreateEnvironmentResponse) => void
  ): Promise<CreateEnvironmentResponse> {
    return this.request("CreateEnvironment", req, cb)
  }

  /**
   * 查询RabbitMQ权限列表
   */
  async DescribeRabbitMQPermission(
    req: DescribeRabbitMQPermissionRequest,
    cb?: (error: string, rep: DescribeRabbitMQPermissionResponse) => void
  ): Promise<DescribeRabbitMQPermissionResponse> {
    return this.request("DescribeRabbitMQPermission", req, cb)
  }

  /**
   * 修改pulsar专业版公网安全策略
   */
  async ModifyPublicNetworkSecurityPolicy(
    req: ModifyPublicNetworkSecurityPolicyRequest,
    cb?: (error: string, rep: ModifyPublicNetworkSecurityPolicyResponse) => void
  ): Promise<ModifyPublicNetworkSecurityPolicyResponse> {
    return this.request("ModifyPublicNetworkSecurityPolicy", req, cb)
  }

  /**
   * 修改环境角色授权。
   */
  async ModifyRocketMQEnvironmentRole(
    req: ModifyRocketMQEnvironmentRoleRequest,
    cb?: (error: string, rep: ModifyRocketMQEnvironmentRoleResponse) => void
  ): Promise<ModifyRocketMQEnvironmentRoleResponse> {
    return this.request("ModifyRocketMQEnvironmentRole", req, cb)
  }

  /**
   * 更新RocketMQ主题信息
   */
  async ModifyRocketMQTopic(
    req: ModifyRocketMQTopicRequest,
    cb?: (error: string, rep: ModifyRocketMQTopicResponse) => void
  ): Promise<ModifyRocketMQTopicResponse> {
    return this.request("ModifyRocketMQTopic", req, cb)
  }

  /**
   * rocketmq 消息查询
   */
  async DescribeRocketMQTopicMsgs(
    req: DescribeRocketMQTopicMsgsRequest,
    cb?: (error: string, rep: DescribeRocketMQTopicMsgsResponse) => void
  ): Promise<DescribeRocketMQTopicMsgsResponse> {
    return this.request("DescribeRocketMQTopicMsgs", req, cb)
  }

  /**
   * 获取指定命名空间的属性
   */
  async DescribeEnvironmentAttributes(
    req: DescribeEnvironmentAttributesRequest,
    cb?: (error: string, rep: DescribeEnvironmentAttributesResponse) => void
  ): Promise<DescribeEnvironmentAttributesResponse> {
    return this.request("DescribeEnvironmentAttributes", req, cb)
  }

  /**
   * 创建cmq订阅接口
   */
  async CreateCmqSubscribe(
    req: CreateCmqSubscribeRequest,
    cb?: (error: string, rep: CreateCmqSubscribeResponse) => void
  ): Promise<CreateCmqSubscribeResponse> {
    return this.request("CreateCmqSubscribe", req, cb)
  }

  /**
   * 获取消息生产概览信息
   */
  async DescribePublisherSummary(
    req: DescribePublisherSummaryRequest,
    cb?: (error: string, rep: DescribePublisherSummaryResponse) => void
  ): Promise<DescribePublisherSummaryResponse> {
    return this.request("DescribePublisherSummary", req, cb)
  }

  /**
   * 删除RocketMQ命名空间
   */
  async DeleteRocketMQNamespace(
    req: DeleteRocketMQNamespaceRequest,
    cb?: (error: string, rep: DeleteRocketMQNamespaceResponse) => void
  ): Promise<DeleteRocketMQNamespaceResponse> {
    return this.request("DeleteRocketMQNamespace", req, cb)
  }

  /**
   * 创建RabbitMQ的vhost
   */
  async CreateRabbitMQVirtualHost(
    req: CreateRabbitMQVirtualHostRequest,
    cb?: (error: string, rep: CreateRabbitMQVirtualHostResponse) => void
  ): Promise<CreateRabbitMQVirtualHostResponse> {
    return this.request("CreateRabbitMQVirtualHost", req, cb)
  }

  /**
   * 删除cmq主题
   */
  async DeleteCmqTopic(
    req: DeleteCmqTopicRequest,
    cb?: (error: string, rep: DeleteCmqTopicResponse) => void
  ): Promise<DeleteCmqTopicResponse> {
    return this.request("DeleteCmqTopic", req, cb)
  }

  /**
   * RabbitMQ专享版修改公网管控台，vpc15672开关
   */
  async ModifyPublicNetworkAccessPoint(
    req: ModifyPublicNetworkAccessPointRequest,
    cb?: (error: string, rep: ModifyPublicNetworkAccessPointResponse) => void
  ): Promise<ModifyPublicNetworkAccessPointResponse> {
    return this.request("ModifyPublicNetworkAccessPoint", req, cb)
  }

  /**
   * 修改RocketMQ专享实例
   */
  async ModifyRocketMQInstance(
    req: ModifyRocketMQInstanceRequest,
    cb?: (error: string, rep: ModifyRocketMQInstanceResponse) => void
  ): Promise<ModifyRocketMQInstanceResponse> {
    return this.request("ModifyRocketMQInstance", req, cb)
  }

  /**
   * 创建cmq队列接口
   */
  async CreateCmqQueue(
    req: CreateCmqQueueRequest,
    cb?: (error: string, rep: CreateCmqQueueResponse) => void
  ): Promise<CreateCmqQueueResponse> {
    return this.request("CreateCmqQueue", req, cb)
  }

  /**
   * 更新RocketMQ消费组信息
   */
  async ModifyRocketMQGroup(
    req: ModifyRocketMQGroupRequest,
    cb?: (error: string, rep: ModifyRocketMQGroupResponse) => void
  ): Promise<ModifyRocketMQGroupResponse> {
    return this.request("ModifyRocketMQGroup", req, cb)
  }

  /**
   * 修改cmq主题属性
   */
  async ModifyCmqTopicAttribute(
    req: ModifyCmqTopicAttributeRequest,
    cb?: (error: string, rep: ModifyCmqTopicAttributeResponse) => void
  ): Promise<ModifyCmqTopicAttributeResponse> {
    return this.request("ModifyCmqTopicAttribute", req, cb)
  }

  /**
   * 查询Topic迁移状态列表，源集群和目标集群客户端数量信息需要配合DescribeRocketMQSmoothMigrationTaskTopicInsNum接口查询
   */
  async DescribeRocketMQMigratingTopicList(
    req: DescribeRocketMQMigratingTopicListRequest,
    cb?: (error: string, rep: DescribeRocketMQMigratingTopicListResponse) => void
  ): Promise<DescribeRocketMQMigratingTopicListResponse> {
    return this.request("DescribeRocketMQMigratingTopicList", req, cb)
  }

  /**
   * 查询cmq订阅详情
   */
  async DescribeCmqSubscriptionDetail(
    req: DescribeCmqSubscriptionDetailRequest,
    cb?: (error: string, rep: DescribeCmqSubscriptionDetailResponse) => void
  ): Promise<DescribeCmqSubscriptionDetailResponse> {
    return this.request("DescribeCmqSubscriptionDetail", req, cb)
  }

  /**
   * 获取环境下主题列表
   */
  async GetTopicList(
    req: GetTopicListRequest,
    cb?: (error: string, rep: GetTopicListResponse) => void
  ): Promise<GetTopicListResponse> {
    return this.request("GetTopicList", req, cb)
  }

  /**
   * 删除集群
   */
  async DeleteCluster(
    req: DeleteClusterRequest,
    cb?: (error: string, rep: DeleteClusterResponse) => void
  ): Promise<DeleteClusterResponse> {
    return this.request("DeleteCluster", req, cb)
  }

  /**
   * 重置指定Group的消费位点到指定时间戳
   */
  async ResetRocketMQConsumerOffSet(
    req: ResetRocketMQConsumerOffSetRequest,
    cb?: (error: string, rep: ResetRocketMQConsumerOffSetResponse) => void
  ): Promise<ResetRocketMQConsumerOffSetResponse> {
    return this.request("ResetRocketMQConsumerOffSet", req, cb)
  }

  /**
   * 获取集群列表
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 删除RabbitMQ的权限
   */
  async DeleteRabbitMQPermission(
    req: DeleteRabbitMQPermissionRequest,
    cb?: (error: string, rep: DeleteRabbitMQPermissionResponse) => void
  ): Promise<DeleteRabbitMQPermissionResponse> {
    return this.request("DeleteRabbitMQPermission", req, cb)
  }

  /**
   * 平滑迁移过程获取源集群topic列表接口
   */
  async DescribeRocketMQSourceClusterTopicList(
    req: DescribeRocketMQSourceClusterTopicListRequest,
    cb?: (error: string, rep: DescribeRocketMQSourceClusterTopicListResponse) => void
  ): Promise<DescribeRocketMQSourceClusterTopicListResponse> {
    return this.request("DescribeRocketMQSourceClusterTopicList", req, cb)
  }

  /**
   * 创建环境角色授权
   */
  async CreateRocketMQEnvironmentRole(
    req: CreateRocketMQEnvironmentRoleRequest,
    cb?: (error: string, rep: CreateRocketMQEnvironmentRoleResponse) => void
  ): Promise<CreateRocketMQEnvironmentRoleResponse> {
    return this.request("CreateRocketMQEnvironmentRole", req, cb)
  }

  /**
   * 获取在线消费端详情
   */
  async DescribeRocketMQConsumerConnectionDetail(
    req: DescribeRocketMQConsumerConnectionDetailRequest,
    cb?: (error: string, rep: DescribeRocketMQConsumerConnectionDetailResponse) => void
  ): Promise<DescribeRocketMQConsumerConnectionDetailResponse> {
    return this.request("DescribeRocketMQConsumerConnectionDetail", req, cb)
  }

  /**
   * 获取单个RabbitMQ专享实例信息
   */
  async DescribeRabbitMQVipInstance(
    req: DescribeRabbitMQVipInstanceRequest,
    cb?: (error: string, rep: DescribeRabbitMQVipInstanceResponse) => void
  ): Promise<DescribeRabbitMQVipInstanceResponse> {
    return this.request("DescribeRabbitMQVipInstance", req, cb)
  }

  /**
   * 获取指定消费组下订阅的主题列表
   */
  async DescribeRocketMQTopicsByGroup(
    req: DescribeRocketMQTopicsByGroupRequest,
    cb?: (error: string, rep: DescribeRocketMQTopicsByGroupResponse) => void
  ): Promise<DescribeRocketMQTopicsByGroupResponse> {
    return this.request("DescribeRocketMQTopicsByGroup", req, cb)
  }

  /**
   * 从腾讯云可观测平台拉取公网指标监控数据，目前仅支持客户端到 LB 的入带宽和出宽带指标。
   */
  async DescribeRocketMQPublicAccessMonitorData(
    req: DescribeRocketMQPublicAccessMonitorDataRequest,
    cb?: (error: string, rep: DescribeRocketMQPublicAccessMonitorDataResponse) => void
  ): Promise<DescribeRocketMQPublicAccessMonitorDataResponse> {
    return this.request("DescribeRocketMQPublicAccessMonitorData", req, cb)
  }

  /**
   * 导入topic列表
   */
  async ImportRocketMQTopics(
    req: ImportRocketMQTopicsRequest,
    cb?: (error: string, rep: ImportRocketMQTopicsResponse) => void
  ): Promise<ImportRocketMQTopicsResponse> {
    return this.request("ImportRocketMQTopics", req, cb)
  }

  /**
   * 该接口用于开启关闭公网访问、设置安全访问策略
   */
  async SetRocketMQPublicAccessPoint(
    req: SetRocketMQPublicAccessPointRequest,
    cb?: (error: string, rep: SetRocketMQPublicAccessPointResponse) => void
  ): Promise<SetRocketMQPublicAccessPointResponse> {
    return this.request("SetRocketMQPublicAccessPoint", req, cb)
  }

  /**
   * 查询指定环境和主题下的订阅者列表
   */
  async DescribeSubscriptions(
    req: DescribeSubscriptionsRequest,
    cb?: (error: string, rep: DescribeSubscriptionsResponse) => void
  ): Promise<DescribeSubscriptionsResponse> {
    return this.request("DescribeSubscriptions", req, cb)
  }

  /**
   * 查询cmq主题详情
   */
  async DescribeCmqTopicDetail(
    req: DescribeCmqTopicDetailRequest,
    cb?: (error: string, rep: DescribeCmqTopicDetailResponse) => void
  ): Promise<DescribeCmqTopicDetailResponse> {
    return this.request("DescribeCmqTopicDetail", req, cb)
  }

  /**
   * 获取单个RocketMQ专享集群信息
   */
  async DescribeRocketMQVipInstanceDetail(
    req: DescribeRocketMQVipInstanceDetailRequest,
    cb?: (error: string, rep: DescribeRocketMQVipInstanceDetailResponse) => void
  ): Promise<DescribeRocketMQVipInstanceDetailResponse> {
    return this.request("DescribeRocketMQVipInstanceDetail", req, cb)
  }

  /**
   * 获取角色列表
   */
  async DescribeRocketMQRoles(
    req: DescribeRocketMQRolesRequest,
    cb?: (error: string, rep: DescribeRocketMQRolesResponse) => void
  ): Promise<DescribeRocketMQRolesResponse> {
    return this.request("DescribeRocketMQRoles", req, cb)
  }

  /**
   * 查询RabbitMQ用户列表
   */
  async DescribeRabbitMQUser(
    req: DescribeRabbitMQUserRequest,
    cb?: (error: string, rep: DescribeRabbitMQUserResponse) => void
  ): Promise<DescribeRabbitMQUserResponse> {
    return this.request("DescribeRabbitMQUser", req, cb)
  }

  /**
   * 更新RocketMQ集群信息
   */
  async ModifyRocketMQCluster(
    req: ModifyRocketMQClusterRequest,
    cb?: (error: string, rep: ModifyRocketMQClusterResponse) => void
  ): Promise<ModifyRocketMQClusterResponse> {
    return this.request("ModifyRocketMQCluster", req, cb)
  }

  /**
   * 更新集群信息
   */
  async ModifyCluster(
    req: ModifyClusterRequest,
    cb?: (error: string, rep: ModifyClusterResponse) => void
  ): Promise<ModifyClusterResponse> {
    return this.request("ModifyCluster", req, cb)
  }

  /**
   * 获取Pulsar专业版集群实例信息
   */
  async DescribePulsarProInstanceDetail(
    req: DescribePulsarProInstanceDetailRequest,
    cb?: (error: string, rep: DescribePulsarProInstanceDetailResponse) => void
  ): Promise<DescribePulsarProInstanceDetailResponse> {
    return this.request("DescribePulsarProInstanceDetail", req, cb)
  }

  /**
   * 修改cmq订阅属性
   */
  async ModifyCmqSubscriptionAttribute(
    req: ModifyCmqSubscriptionAttributeRequest,
    cb?: (error: string, rep: ModifyCmqSubscriptionAttributeResponse) => void
  ): Promise<ModifyCmqSubscriptionAttributeResponse> {
    return this.request("ModifyCmqSubscriptionAttribute", req, cb)
  }

  /**
   * 用于获取RocketMQ消费组订阅关系数据
   */
  async DescribeRocketMQSubscriptions(
    req: DescribeRocketMQSubscriptionsRequest,
    cb?: (error: string, rep: DescribeRocketMQSubscriptionsResponse) => void
  ): Promise<DescribeRocketMQSubscriptionsResponse> {
    return this.request("DescribeRocketMQSubscriptions", req, cb)
  }

  /**
   * 创建一个主题的订阅关系
   */
  async CreateSubscription(
    req: CreateSubscriptionRequest,
    cb?: (error: string, rep: CreateSubscriptionResponse) => void
  ): Promise<CreateSubscriptionResponse> {
    return this.request("CreateSubscription", req, cb)
  }

  /**
   * 获取单个RocketMQ集群信息
   */
  async DescribeRocketMQCluster(
    req: DescribeRocketMQClusterRequest,
    cb?: (error: string, rep: DescribeRocketMQClusterResponse) => void
  ): Promise<DescribeRocketMQClusterResponse> {
    return this.request("DescribeRocketMQCluster", req, cb)
  }

  /**
   * 删除环境角色授权。
   */
  async DeleteEnvironmentRoles(
    req: DeleteEnvironmentRolesRequest,
    cb?: (error: string, rep: DeleteEnvironmentRolesResponse) => void
  ): Promise<DeleteEnvironmentRolesResponse> {
    return this.request("DeleteEnvironmentRoles", req, cb)
  }

  /**
   * 根据时间戳进行消息回溯，精确到毫秒
   */
  async ResetMsgSubOffsetByTimestamp(
    req: ResetMsgSubOffsetByTimestampRequest,
    cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void
  ): Promise<ResetMsgSubOffsetByTimestampResponse> {
    return this.request("ResetMsgSubOffsetByTimestamp", req, cb)
  }

  /**
   * 创建RabbitMQ路由关系
   */
  async CreateRabbitMQBinding(
    req: CreateRabbitMQBindingRequest,
    cb?: (error: string, rep: CreateRabbitMQBindingResponse) => void
  ): Promise<CreateRabbitMQBindingResponse> {
    return this.request("CreateRabbitMQBinding", req, cb)
  }

  /**
   * 查询消息轨迹
   */
  async DescribeMsgTrace(
    req: DescribeMsgTraceRequest,
    cb?: (error: string, rep: DescribeMsgTraceResponse) => void
  ): Promise<DescribeMsgTraceResponse> {
    return this.request("DescribeMsgTrace", req, cb)
  }

  /**
   * 角色修改
   */
  async ModifyRocketMQRole(
    req: ModifyRocketMQRoleRequest,
    cb?: (error: string, rep: ModifyRocketMQRoleResponse) => void
  ): Promise<ModifyRocketMQRoleResponse> {
    return this.request("ModifyRocketMQRole", req, cb)
  }

  /**
   * RabbitMQ专享版查询节点列表
   */
  async DescribeRabbitMQNodeList(
    req: DescribeRabbitMQNodeListRequest,
    cb?: (error: string, rep: DescribeRabbitMQNodeListResponse) => void
  ): Promise<DescribeRabbitMQNodeListResponse> {
    return this.request("DescribeRabbitMQNodeList", req, cb)
  }

  /**
   * 获取租户VPC绑定关系
   */
  async DescribeBindVpcs(
    req: DescribeBindVpcsRequest,
    cb?: (error: string, rep: DescribeBindVpcsResponse) => void
  ): Promise<DescribeBindVpcsResponse> {
    return this.request("DescribeBindVpcs", req, cb)
  }

  /**
   * 删除RocketMQ主题
   */
  async DeleteRocketMQTopic(
    req: DeleteRocketMQTopicRequest,
    cb?: (error: string, rep: DeleteRocketMQTopicResponse) => void
  ): Promise<DeleteRocketMQTopicResponse> {
    return this.request("DeleteRocketMQTopic", req, cb)
  }

  /**
   * 重发RocketMQ死信消息
   */
  async RetryRocketMQDlqMessage(
    req: RetryRocketMQDlqMessageRequest,
    cb?: (error: string, rep: RetryRocketMQDlqMessageResponse) => void
  ): Promise<RetryRocketMQDlqMessageResponse> {
    return this.request("RetryRocketMQDlqMessage", req, cb)
  }

  /**
   * 用于查询RocketMQ平滑迁移任务列表
   */
  async DescribeRocketMQSmoothMigrationTaskList(
    req: DescribeRocketMQSmoothMigrationTaskListRequest,
    cb?: (error: string, rep: DescribeRocketMQSmoothMigrationTaskListResponse) => void
  ): Promise<DescribeRocketMQSmoothMigrationTaskListResponse> {
    return this.request("DescribeRocketMQSmoothMigrationTaskList", req, cb)
  }

  /**
   * 导出RocketMQ消息详情
   */
  async ExportRocketMQMessageDetail(
    req: ExportRocketMQMessageDetailRequest,
    cb?: (error: string, rep: ExportRocketMQMessageDetailResponse) => void
  ): Promise<ExportRocketMQMessageDetailResponse> {
    return this.request("ExportRocketMQMessageDetail", req, cb)
  }

  /**
   * 查询RabbitMQ队列列表
   */
  async DescribeRabbitMQQueues(
    req: DescribeRabbitMQQueuesRequest,
    cb?: (error: string, rep: DescribeRabbitMQQueuesResponse) => void
  ): Promise<DescribeRabbitMQQueuesResponse> {
    return this.request("DescribeRabbitMQQueues", req, cb)
  }

  /**
   * 修改cmq队列属性
   */
  async ModifyCmqQueueAttribute(
    req: ModifyCmqQueueAttributeRequest,
    cb?: (error: string, rep: ModifyCmqQueueAttributeResponse) => void
  ): Promise<ModifyCmqQueueAttributeResponse> {
    return this.request("ModifyCmqQueueAttribute", req, cb)
  }

  /**
   * 本API用于修改RocketMQ专享实例配置，可以支持实例规格、节点数和存储的升配和实例规格的降配。本API发起订单并成功支付后进入实例配置变更的流程，可通过DescribeRocketMQVipInstances查询实例是否已变更完成。
   */
  async ModifyRocketMQInstanceSpec(
    req: ModifyRocketMQInstanceSpecRequest,
    cb?: (error: string, rep: ModifyRocketMQInstanceSpecResponse) => void
  ): Promise<ModifyRocketMQInstanceSpecResponse> {
    return this.request("ModifyRocketMQInstanceSpec", req, cb)
  }

  /**
   * 输入迁移任务id和要导入的Group，导入后台
   */
  async ImportRocketMQConsumerGroups(
    req: ImportRocketMQConsumerGroupsRequest,
    cb?: (error: string, rep: ImportRocketMQConsumerGroupsResponse) => void
  ): Promise<ImportRocketMQConsumerGroupsResponse> {
    return this.request("ImportRocketMQConsumerGroups", req, cb)
  }

  /**
   * 查询用户已购的RocketMQ专享实例列表
   */
  async DescribeRocketMQVipInstances(
    req: DescribeRocketMQVipInstancesRequest,
    cb?: (error: string, rep: DescribeRocketMQVipInstancesResponse) => void
  ): Promise<DescribeRocketMQVipInstancesResponse> {
    return this.request("DescribeRocketMQVipInstances", req, cb)
  }

  /**
   * Rocketmq消费验证
   */
  async VerifyRocketMQConsume(
    req: VerifyRocketMQConsumeRequest,
    cb?: (error: string, rep: VerifyRocketMQConsumeResponse) => void
  ): Promise<VerifyRocketMQConsumeResponse> {
    return this.request("VerifyRocketMQConsume", req, cb)
  }

  /**
   * 修改RabbitMQ的权限
   */
  async ModifyRabbitMQPermission(
    req: ModifyRabbitMQPermissionRequest,
    cb?: (error: string, rep: ModifyRabbitMQPermissionResponse) => void
  ): Promise<ModifyRabbitMQPermissionResponse> {
    return this.request("ModifyRabbitMQPermission", req, cb)
  }

  /**
     * 历史原因，该接口位于tdmq-manager，目前rabbitmq产品没有使用该接口，当前使用的是DescribeRabbitMQVipInstances。不过从调用链上看，线网还有请求流程，所以走预下线流程。

获取amqp集群列表
     */
  async DescribeAMQPClusters(
    req: DescribeAMQPClustersRequest,
    cb?: (error: string, rep: DescribeAMQPClustersResponse) => void
  ): Promise<DescribeAMQPClustersResponse> {
    return this.request("DescribeAMQPClusters", req, cb)
  }

  /**
   * 创建RabbitMQ专享版实例
   */
  async CreateRabbitMQVipInstance(
    req: CreateRabbitMQVipInstanceRequest,
    cb?: (error: string, rep: CreateRabbitMQVipInstanceResponse) => void
  ): Promise<CreateRabbitMQVipInstanceResponse> {
    return this.request("CreateRabbitMQVipInstance", req, cb)
  }

  /**
   * 查询消息轨迹
   */
  async DescribeMqMsgTrace(
    req: DescribeMqMsgTraceRequest,
    cb?: (error: string, rep: DescribeMqMsgTraceResponse) => void
  ): Promise<DescribeMqMsgTraceResponse> {
    return this.request("DescribeMqMsgTrace", req, cb)
  }

  /**
   * 获取RocketMQ消费组列表
   */
  async DescribeRocketMQGroups(
    req: DescribeRocketMQGroupsRequest,
    cb?: (error: string, rep: DescribeRocketMQGroupsResponse) => void
  ): Promise<DescribeRocketMQGroupsResponse> {
    return this.request("DescribeRocketMQGroups", req, cb)
  }

  /**
   * 创建RocketMQ主题
   */
  async CreateRocketMQTopic(
    req: CreateRocketMQTopicRequest,
    cb?: (error: string, rep: CreateRocketMQTopicResponse) => void
  ): Promise<CreateRocketMQTopicResponse> {
    return this.request("CreateRocketMQTopic", req, cb)
  }

  /**
   * 获取命名空间角色列表
   */
  async DescribeRocketMQEnvironmentRoles(
    req: DescribeRocketMQEnvironmentRolesRequest,
    cb?: (error: string, rep: DescribeRocketMQEnvironmentRolesResponse) => void
  ): Promise<DescribeRocketMQEnvironmentRolesResponse> {
    return this.request("DescribeRocketMQEnvironmentRoles", req, cb)
  }

  /**
   * 删除RocketMQ集群
   */
  async DeleteRocketMQCluster(
    req: DeleteRocketMQClusterRequest,
    cb?: (error: string, rep: DeleteRocketMQClusterResponse) => void
  ): Promise<DeleteRocketMQClusterResponse> {
    return this.request("DeleteRocketMQCluster", req, cb)
  }

  /**
   * 删除RabbitMQ的用户
   */
  async DeleteRabbitMQUser(
    req: DeleteRabbitMQUserRequest,
    cb?: (error: string, rep: DeleteRabbitMQUserResponse) => void
  ): Promise<DeleteRabbitMQUserResponse> {
    return this.request("DeleteRabbitMQUser", req, cb)
  }

  /**
   * 创建专业集群——预付费，仅通过api调用
   */
  async CreateProCluster(
    req: CreateProClusterRequest,
    cb?: (error: string, rep: CreateProClusterResponse) => void
  ): Promise<CreateProClusterResponse> {
    return this.request("CreateProCluster", req, cb)
  }

  /**
   * 查询RabbitMQ vhost列表
   */
  async DescribeRabbitMQVirtualHost(
    req: DescribeRabbitMQVirtualHostRequest,
    cb?: (error: string, rep: DescribeRabbitMQVirtualHostResponse) => void
  ): Promise<DescribeRabbitMQVirtualHostResponse> {
    return this.request("DescribeRabbitMQVirtualHost", req, cb)
  }

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
  async ReceiveMessage(
    req: ReceiveMessageRequest,
    cb?: (error: string, rep: ReceiveMessageResponse) => void
  ): Promise<ReceiveMessageResponse> {
    return this.request("ReceiveMessage", req, cb)
  }

  /**
   * 删除RabbitMQ的vhost
   */
  async DeleteRabbitMQVirtualHost(
    req: DeleteRabbitMQVirtualHostRequest,
    cb?: (error: string, rep: DeleteRabbitMQVirtualHostResponse) => void
  ): Promise<DeleteRabbitMQVirtualHostResponse> {
    return this.request("DeleteRabbitMQVirtualHost", req, cb)
  }

  /**
   * 发送cmq消息
   */
  async SendCmqMsg(
    req: SendCmqMsgRequest,
    cb?: (error: string, rep: SendCmqMsgResponse) => void
  ): Promise<SendCmqMsgResponse> {
    return this.request("SendCmqMsg", req, cb)
  }

  /**
   * 用于获取RocketMQ平滑迁移任务详情
   */
  async DescribeRocketMQSmoothMigrationTask(
    req: DescribeRocketMQSmoothMigrationTaskRequest,
    cb?: (error: string, rep: DescribeRocketMQSmoothMigrationTaskResponse) => void
  ): Promise<DescribeRocketMQSmoothMigrationTaskResponse> {
    return this.request("DescribeRocketMQSmoothMigrationTask", req, cb)
  }

  /**
   * 修改指定命名空间的属性值
   */
  async ModifyEnvironmentAttributes(
    req: ModifyEnvironmentAttributesRequest,
    cb?: (error: string, rep: ModifyEnvironmentAttributesResponse) => void
  ): Promise<ModifyEnvironmentAttributesResponse> {
    return this.request("ModifyEnvironmentAttributes", req, cb)
  }

  /**
   * 获取角色列表
   */
  async DescribeRoles(
    req: DescribeRolesRequest,
    cb?: (error: string, rep: DescribeRolesResponse) => void
  ): Promise<DescribeRolesResponse> {
    return this.request("DescribeRoles", req, cb)
  }

  /**
   * 解绑cmq死信队列
   */
  async UnbindCmqDeadLetter(
    req: UnbindCmqDeadLetterRequest,
    cb?: (error: string, rep: UnbindCmqDeadLetterResponse) => void
  ): Promise<UnbindCmqDeadLetterResponse> {
    return this.request("UnbindCmqDeadLetter", req, cb)
  }

  /**
   * 修改RabbitMQ的用户
   */
  async ModifyRabbitMQUser(
    req: ModifyRabbitMQUserRequest,
    cb?: (error: string, rep: ModifyRabbitMQUserResponse) => void
  ): Promise<ModifyRabbitMQUserResponse> {
    return this.request("ModifyRabbitMQUser", req, cb)
  }

  /**
   * 创建RocketMQ命名空间
   */
  async CreateRocketMQNamespace(
    req: CreateRocketMQNamespaceRequest,
    cb?: (error: string, rep: CreateRocketMQNamespaceResponse) => void
  ): Promise<CreateRocketMQNamespaceResponse> {
    return this.request("CreateRocketMQNamespace", req, cb)
  }

  /**
   * 消息详情
   */
  async DescribeMsg(
    req: DescribeMsgRequest,
    cb?: (error: string, rep: DescribeMsgResponse) => void
  ): Promise<DescribeMsgResponse> {
    return this.request("DescribeMsg", req, cb)
  }

  /**
     * 批量发送消息

注意：TDMQ 批量发送消息的接口是在 TDMQ-HTTP 的服务侧将消息打包为一个 Batch，然后将该 Batch 在服务内部当作一次 TCP 请求发送出去。所以在使用过程中，用户还是按照单条消息发送的逻辑，每一条消息是一个独立的 HTTP 的请求，在 TDMQ-HTTP 的服务内部，会将多个 HTTP 的请求聚合为一个 Batch 发送到服务端。即，批量发送消息在使用上与发送单条消息是一致的，batch 的聚合是在 TDMQ-HTTP 的服务内部完成的。
     */
  async SendBatchMessages(
    req: SendBatchMessagesRequest,
    cb?: (error: string, rep: SendBatchMessagesResponse) => void
  ): Promise<SendBatchMessagesResponse> {
    return this.request("SendBatchMessages", req, cb)
  }

  /**
   * 修改RabbitMQ专享版实例
   */
  async ModifyRabbitMQVipInstance(
    req: ModifyRabbitMQVipInstanceRequest,
    cb?: (error: string, rep: ModifyRabbitMQVipInstanceResponse) => void
  ): Promise<ModifyRabbitMQVipInstanceResponse> {
    return this.request("ModifyRabbitMQVipInstance", req, cb)
  }

  /**
   * 创建环境角色授权
   */
  async CreateEnvironmentRole(
    req: CreateEnvironmentRoleRequest,
    cb?: (error: string, rep: CreateEnvironmentRoleResponse) => void
  ): Promise<CreateEnvironmentRoleResponse> {
    return this.request("CreateEnvironmentRole", req, cb)
  }

  /**
   * 获取RocketMQ主题列表
   */
  async DescribeRocketMQTopics(
    req: DescribeRocketMQTopicsRequest,
    cb?: (error: string, rep: DescribeRocketMQTopicsResponse) => void
  ): Promise<DescribeRocketMQTopicsResponse> {
    return this.request("DescribeRocketMQTopics", req, cb)
  }

  /**
   * 修改环境角色授权。
   */
  async ModifyEnvironmentRole(
    req: ModifyEnvironmentRoleRequest,
    cb?: (error: string, rep: ModifyEnvironmentRoleResponse) => void
  ): Promise<ModifyEnvironmentRoleResponse> {
    return this.request("ModifyEnvironmentRole", req, cb)
  }

  /**
     * 消息队列TDMQ RabbitMQ 有一个存量旧接口没下线，目前实际上已经不在产品中使用：DescribeRabbitMQVirtualHostList，这个接口很久前已经被 DescribeRabbitMQVirtualHost 替换掉。已无用户在调用。

RabbitMQ专享版查询虚拟主机列表
     */
  async DescribeRabbitMQVirtualHostList(
    req: DescribeRabbitMQVirtualHostListRequest,
    cb?: (error: string, rep: DescribeRabbitMQVirtualHostListResponse) => void
  ): Promise<DescribeRabbitMQVirtualHostListResponse> {
    return this.request("DescribeRabbitMQVirtualHostList", req, cb)
  }

  /**
   * 获取RocketMQ集群列表
   */
  async DescribeRocketMQClusters(
    req: DescribeRocketMQClustersRequest,
    cb?: (error: string, rep: DescribeRocketMQClustersResponse) => void
  ): Promise<DescribeRocketMQClustersResponse> {
    return this.request("DescribeRocketMQClusters", req, cb)
  }

  /**
     * 发送单条消息
不支持持久topic
     */
  async SendMessages(
    req: SendMessagesRequest,
    cb?: (error: string, rep: SendMessagesResponse) => void
  ): Promise<SendMessagesResponse> {
    return this.request("SendMessages", req, cb)
  }

  /**
   * 修改主题备注和分区数
   */
  async ModifyTopic(
    req: ModifyTopicRequest,
    cb?: (error: string, rep: ModifyTopicResponse) => void
  ): Promise<ModifyTopicResponse> {
    return this.request("ModifyTopic", req, cb)
  }

  /**
   * 查询RabbitMQ路由关系列表
   */
  async DescribeRabbitMQBindings(
    req: DescribeRabbitMQBindingsRequest,
    cb?: (error: string, rep: DescribeRabbitMQBindingsResponse) => void
  ): Promise<DescribeRabbitMQBindingsResponse> {
    return this.request("DescribeRabbitMQBindings", req, cb)
  }

  /**
   * 运营端获节点健康状态
   */
  async DescribeNodeHealthOpt(
    req: DescribeNodeHealthOptRequest,
    cb?: (error: string, rep: DescribeNodeHealthOptResponse) => void
  ): Promise<DescribeNodeHealthOptResponse> {
    return this.request("DescribeNodeHealthOpt", req, cb)
  }

  /**
   * 创建角色
   */
  async CreateRole(
    req: CreateRoleRequest,
    cb?: (error: string, rep: CreateRoleResponse) => void
  ): Promise<CreateRoleResponse> {
    return this.request("CreateRole", req, cb)
  }

  /**
   * 更新RocketMQ命名空间
   */
  async ModifyRocketMQNamespace(
    req: ModifyRocketMQNamespaceRequest,
    cb?: (error: string, rep: ModifyRocketMQNamespaceResponse) => void
  ): Promise<ModifyRocketMQNamespaceResponse> {
    return this.request("ModifyRocketMQNamespace", req, cb)
  }

  /**
   * 消息查询
   */
  async DescribeTopicMsgs(
    req: DescribeTopicMsgsRequest,
    cb?: (error: string, rep: DescribeTopicMsgsResponse) => void
  ): Promise<DescribeTopicMsgsResponse> {
    return this.request("DescribeTopicMsgs", req, cb)
  }

  /**
   * 清空cmq消息队列中的消息
   */
  async ClearCmqQueue(
    req: ClearCmqQueueRequest,
    cb?: (error: string, rep: ClearCmqQueueResponse) => void
  ): Promise<ClearCmqQueueResponse> {
    return this.request("ClearCmqQueue", req, cb)
  }

  /**
   * 查询用户已购的Pulsar专业版实例列表
   */
  async DescribePulsarProInstances(
    req: DescribePulsarProInstancesRequest,
    cb?: (error: string, rep: DescribePulsarProInstancesResponse) => void
  ): Promise<DescribePulsarProInstancesResponse> {
    return this.request("DescribePulsarProInstances", req, cb)
  }

  /**
   * 获取生产者信息列表
   */
  async DescribePublishers(
    req: DescribePublishersRequest,
    cb?: (error: string, rep: DescribePublishersResponse) => void
  ): Promise<DescribePublishersResponse> {
    return this.request("DescribePublishers", req, cb)
  }

  /**
   * 此接口用于创建一个RocketMQ集群
   */
  async CreateRocketMQCluster(
    req: CreateRocketMQClusterRequest,
    cb?: (error: string, rep: CreateRocketMQClusterResponse) => void
  ): Promise<CreateRocketMQClusterResponse> {
    return this.request("CreateRocketMQCluster", req, cb)
  }

  /**
   * 查询RabbitMQ队列详情
   */
  async DescribeRabbitMQQueueDetail(
    req: DescribeRabbitMQQueueDetailRequest,
    cb?: (error: string, rep: DescribeRabbitMQQueueDetailResponse) => void
  ): Promise<DescribeRabbitMQQueueDetailResponse> {
    return this.request("DescribeRabbitMQQueueDetail", req, cb)
  }

  /**
   * rocketmq消息详情
   */
  async DescribeRocketMQMsg(
    req: DescribeRocketMQMsgRequest,
    cb?: (error: string, rep: DescribeRocketMQMsgResponse) => void
  ): Promise<DescribeRocketMQMsgResponse> {
    return this.request("DescribeRocketMQMsg", req, cb)
  }

  /**
   * 获取环境下主题列表
   */
  async DescribeTopics(
    req: DescribeTopicsRequest,
    cb?: (error: string, rep: DescribeTopicsResponse) => void
  ): Promise<DescribeTopicsResponse> {
    return this.request("DescribeTopics", req, cb)
  }

  /**
   * 获取命名空间角色列表
   */
  async DescribeEnvironmentRoles(
    req: DescribeEnvironmentRolesRequest,
    cb?: (error: string, rep: DescribeEnvironmentRolesResponse) => void
  ): Promise<DescribeEnvironmentRolesResponse> {
    return this.request("DescribeEnvironmentRoles", req, cb)
  }

  /**
   * 删除RabbitMQ专享版实例
   */
  async DeleteRabbitMQVipInstance(
    req: DeleteRabbitMQVipInstanceRequest,
    cb?: (error: string, rep: DeleteRabbitMQVipInstanceResponse) => void
  ): Promise<DeleteRabbitMQVipInstanceResponse> {
    return this.request("DeleteRabbitMQVipInstance", req, cb)
  }

  /**
   * 发送cmq主题消息
   */
  async PublishCmqMsg(
    req: PublishCmqMsgRequest,
    cb?: (error: string, rep: PublishCmqMsgResponse) => void
  ): Promise<PublishCmqMsgResponse> {
    return this.request("PublishCmqMsg", req, cb)
  }

  /**
   * 获取用户绑定的专享集群列表
   */
  async DescribeBindClusters(
    req?: DescribeBindClustersRequest,
    cb?: (error: string, rep: DescribeBindClustersResponse) => void
  ): Promise<DescribeBindClustersResponse> {
    return this.request("DescribeBindClusters", req, cb)
  }

  /**
   * 查询cmq队列详情
   */
  async DescribeCmqQueueDetail(
    req: DescribeCmqQueueDetailRequest,
    cb?: (error: string, rep: DescribeCmqQueueDetailResponse) => void
  ): Promise<DescribeCmqQueueDetailResponse> {
    return this.request("DescribeCmqQueueDetail", req, cb)
  }

  /**
   * 平滑迁移过程获取源集群group列表接口
   */
  async DescribeRocketMQSourceClusterGroupList(
    req: DescribeRocketMQSourceClusterGroupListRequest,
    cb?: (error: string, rep: DescribeRocketMQSourceClusterGroupListResponse) => void
  ): Promise<DescribeRocketMQSourceClusterGroupListResponse> {
    return this.request("DescribeRocketMQSourceClusterGroupList", req, cb)
  }

  /**
   * 此接口仅用于测试发生消息，不能作为现网正式生产使用
   */
  async SendMsg(
    req: SendMsgRequest,
    cb?: (error: string, rep: SendMsgResponse) => void
  ): Promise<SendMsgResponse> {
    return this.request("SendMsg", req, cb)
  }

  /**
   * 删除RocketMQ专享实例
   */
  async DeleteRocketMQVipInstance(
    req: DeleteRocketMQVipInstanceRequest,
    cb?: (error: string, rep: DeleteRocketMQVipInstanceResponse) => void
  ): Promise<DeleteRocketMQVipInstanceResponse> {
    return this.request("DeleteRocketMQVipInstance", req, cb)
  }

  /**
   * 发送RocketMQ消息
   */
  async SendRocketMQMessage(
    req: SendRocketMQMessageRequest,
    cb?: (error: string, rep: SendRocketMQMessageResponse) => void
  ): Promise<SendRocketMQMessageResponse> {
    return this.request("SendRocketMQMessage", req, cb)
  }

  /**
   * 清空订阅者消息标签
   */
  async ClearCmqSubscriptionFilterTags(
    req: ClearCmqSubscriptionFilterTagsRequest,
    cb?: (error: string, rep: ClearCmqSubscriptionFilterTagsResponse) => void
  ): Promise<ClearCmqSubscriptionFilterTagsResponse> {
    return this.request("ClearCmqSubscriptionFilterTags", req, cb)
  }

  /**
   * 删除cmq订阅
   */
  async DeleteCmqSubscribe(
    req: DeleteCmqSubscribeRequest,
    cb?: (error: string, rep: DeleteCmqSubscribeResponse) => void
  ): Promise<DeleteCmqSubscribeResponse> {
    return this.request("DeleteCmqSubscribe", req, cb)
  }

  /**
   * 接口用于查询RocketMQ实例的公网接入信息
   */
  async DescribeRocketMQPublicAccessPoint(
    req: DescribeRocketMQPublicAccessPointRequest,
    cb?: (error: string, rep: DescribeRocketMQPublicAccessPointResponse) => void
  ): Promise<DescribeRocketMQPublicAccessPointResponse> {
    return this.request("DescribeRocketMQPublicAccessPoint", req, cb)
  }

  /**
   * 解绑RabbitMQ路由关系
   */
  async DeleteRabbitMQBinding(
    req: DeleteRabbitMQBindingRequest,
    cb?: (error: string, rep: DeleteRabbitMQBindingResponse) => void
  ): Promise<DeleteRabbitMQBindingResponse> {
    return this.request("DeleteRabbitMQBinding", req, cb)
  }

  /**
   * 角色修改
   */
  async ModifyRole(
    req: ModifyRoleRequest,
    cb?: (error: string, rep: ModifyRoleResponse) => void
  ): Promise<ModifyRoleResponse> {
    return this.request("ModifyRole", req, cb)
  }

  /**
   * 创建RocketMQ专享实例
   */
  async CreateRocketMQVipInstance(
    req: CreateRocketMQVipInstanceRequest,
    cb?: (error: string, rep: CreateRocketMQVipInstanceResponse) => void
  ): Promise<CreateRocketMQVipInstanceResponse> {
    return this.request("CreateRocketMQVipInstance", req, cb)
  }

  /**
   * 删除环境角色授权。
   */
  async DeleteRocketMQEnvironmentRoles(
    req: DeleteRocketMQEnvironmentRolesRequest,
    cb?: (error: string, rep: DeleteRocketMQEnvironmentRolesResponse) => void
  ): Promise<DeleteRocketMQEnvironmentRolesResponse> {
    return this.request("DeleteRocketMQEnvironmentRoles", req, cb)
  }

  /**
   * 获取某个租户的虚拟集群列表
   */
  async DescribeAllTenants(
    req: DescribeAllTenantsRequest,
    cb?: (error: string, rep: DescribeAllTenantsResponse) => void
  ): Promise<DescribeAllTenantsResponse> {
    return this.request("DescribeAllTenants", req, cb)
  }

  /**
   * 运营端获取命名空间bundle列表
   */
  async DescribeNamespaceBundlesOpt(
    req: DescribeNamespaceBundlesOptRequest,
    cb?: (error: string, rep: DescribeNamespaceBundlesOptResponse) => void
  ): Promise<DescribeNamespaceBundlesOptResponse> {
    return this.request("DescribeNamespaceBundlesOpt", req, cb)
  }

  /**
   * 删除订阅关系
   */
  async DeleteSubscriptions(
    req: DeleteSubscriptionsRequest,
    cb?: (error: string, rep: DeleteSubscriptionsResponse) => void
  ): Promise<DeleteSubscriptionsResponse> {
    return this.request("DeleteSubscriptions", req, cb)
  }
}

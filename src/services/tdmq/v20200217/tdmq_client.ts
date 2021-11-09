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
  DescribeRolesResponse,
  DescribeBindClustersResponse,
  CmqDeadLetterPolicy,
  DescribeNamespaceBundlesOptRequest,
  RocketMQNamespace,
  DescribeSubscriptionsRequest,
  CreateRocketMQGroupRequest,
  ModifyEnvironmentAttributesRequest,
  DeleteClusterResponse,
  SendBatchMessagesResponse,
  ModifyCmqSubscriptionAttributeResponse,
  CreateCmqTopicRequest,
  DescribeRocketMQNamespacesResponse,
  BindCluster,
  ModifyClusterResponse,
  RocketMQClusterRecentStats,
  DescribeCmqQueuesResponse,
  DescribeNamespaceBundlesOptResponse,
  CreateCmqSubscribeRequest,
  RewindCmqQueueResponse,
  DeleteClusterRequest,
  CmqSubscription,
  DeleteRocketMQGroupRequest,
  RocketMQGroup,
  DeleteCmqTopicResponse,
  CreateSubscriptionRequest,
  CreateRocketMQNamespaceRequest,
  DescribeCmqTopicDetailResponse,
  CmqQueue,
  CreateEnvironmentResponse,
  Producer,
  CreateSubscriptionResponse,
  SendMsgResponse,
  ModifyCmqTopicAttributeResponse,
  DescribeCmqSubscriptionDetailRequest,
  Topic,
  DescribeEnvironmentsRequest,
  DescribeRocketMQNamespacesRequest,
  DescribeRocketMQTopicsRequest,
  ModifyRocketMQClusterResponse,
  DescribeCmqQueueDetailResponse,
  CreateEnvironmentRequest,
  DeleteTopicsResponse,
  DescribeClustersRequest,
  RocketMQTopic,
  DescribeRocketMQClusterResponse,
  DescribeCmqSubscriptionDetailResponse,
  VpcBindRecord,
  RewindCmqQueueRequest,
  ModifyClusterRequest,
  DescribeEnvironmentAttributesRequest,
  ModifyRocketMQClusterRequest,
  AcknowledgeMessageRequest,
  DescribeTopicsResponse,
  PublishCmqMsgResponse,
  CreateRocketMQClusterRequest,
  SendCmqMsgRequest,
  AcknowledgeMessageResponse,
  DeleteEnvironmentRolesResponse,
  DescribeClusterDetailRequest,
  ModifyRoleResponse,
  Tag,
  DeleteCmqQueueResponse,
  DescribeRocketMQClusterRequest,
  DeleteRocketMQTopicResponse,
  ModifyCmqTopicAttributeRequest,
  DeleteRolesRequest,
  Subscription,
  CreateCmqSubscribeResponse,
  DescribeSubscriptionsResponse,
  ModifyRoleRequest,
  SendMessagesResponse,
  ReceiveMessageRequest,
  CreateTopicRequest,
  DescribeTopicsRequest,
  DeleteEnvironmentsResponse,
  DescribeEnvironmentRolesResponse,
  ClearCmqQueueRequest,
  ModifyRocketMQGroupRequest,
  FilterSubscription,
  DescribeCmqTopicsResponse,
  DescribeCmqTopicDetailRequest,
  CmqTopic,
  UnbindCmqDeadLetterResponse,
  ModifyRocketMQNamespaceResponse,
  DeleteEnvironmentsRequest,
  DescribeRocketMQClustersRequest,
  DescribeBindVpcsRequest,
  DescribeClustersResponse,
  ClearCmqSubscriptionFilterTagsRequest,
  TopicRecord,
  CreateRocketMQGroupResponse,
  ModifyRocketMQNamespaceRequest,
  DescribeEnvironmentRolesRequest,
  DeleteRolesResponse,
  ModifyRocketMQTopicRequest,
  RocketMQClusterInfo,
  DescribeRocketMQTopicsResponse,
  Environment,
  RocketMQClusterDetail,
  DeleteRocketMQGroupResponse,
  CreateCmqQueueResponse,
  PartitionsTopic,
  DescribeRocketMQGroupsResponse,
  ResetMsgSubOffsetByTimestampResponse,
  CreateClusterResponse,
  DescribeCmqDeadLetterSourceQueuesRequest,
  DeleteRocketMQNamespaceRequest,
  CreateClusterRequest,
  ModifyCmqQueueAttributeResponse,
  CreateTopicResponse,
  DescribeCmqQueuesRequest,
  DescribeEnvironmentsResponse,
  ModifyCmqSubscriptionAttributeRequest,
  ModifyTopicResponse,
  ReceiveMessageResponse,
  DeleteRocketMQClusterResponse,
  CreateCmqTopicResponse,
  CmqDeadLetterSource,
  ClearCmqSubscriptionFilterTagsResponse,
  DescribeCmqTopicsRequest,
  Filter,
  Connection,
  DeleteTopicsRequest,
  CmqTransactionPolicy,
  BundleSetOpt,
  ModifyTopicRequest,
  ResetMsgSubOffsetByTimestampRequest,
  CreateEnvironmentRoleResponse,
  Consumer,
  DescribeBindVpcsResponse,
  DeleteCmqSubscribeRequest,
  RocketMQClusterConfig,
  DescribeCmqDeadLetterSourceQueuesResponse,
  DeleteSubscriptionsResponse,
  DeleteRocketMQTopicRequest,
  ConsumersSchedule,
  Cluster,
  RetentionPolicy,
  CreateRocketMQClusterResponse,
  DeleteRocketMQNamespaceResponse,
  SendMsgRequest,
  DescribeCmqQueueDetailRequest,
  CreateRocketMQTopicRequest,
  CreateRoleResponse,
  DeleteRocketMQClusterRequest,
  DeleteEnvironmentRolesRequest,
  ClearCmqQueueResponse,
  DescribeNodeHealthOptRequest,
  DescribeBindClustersRequest,
  CreateRocketMQTopicResponse,
  ModifyEnvironmentAttributesResponse,
  EnvironmentRole,
  CreateCmqQueueRequest,
  ModifyEnvironmentRoleResponse,
  DeleteCmqQueueRequest,
  DescribeRocketMQGroupsRequest,
  DescribeRocketMQClustersResponse,
  CreateRoleRequest,
  DescribeProducersRequest,
  ModifyEnvironmentRoleRequest,
  DescribeEnvironmentAttributesResponse,
  Role,
  SubscriptionTopic,
  DescribeProducersResponse,
  CreateRocketMQNamespaceResponse,
  SendBatchMessagesRequest,
  DeleteCmqTopicRequest,
  SendCmqMsgResponse,
  DescribeNodeHealthOptResponse,
  PublishCmqMsgRequest,
  UnbindCmqDeadLetterRequest,
  ModifyCmqQueueAttributeRequest,
  DeleteCmqSubscribeResponse,
  DescribeRolesRequest,
  DeleteSubscriptionsRequest,
  ModifyRocketMQGroupResponse,
  DescribeClusterDetailResponse,
  SendMessagesRequest,
  CreateEnvironmentRoleRequest,
  ModifyRocketMQTopicResponse,
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
   * 删除cmq主题
   */
  async DeleteCmqTopic(
    req: DeleteCmqTopicRequest,
    cb?: (error: string, rep: DeleteCmqTopicResponse) => void
  ): Promise<DeleteCmqTopicResponse> {
    return this.request("DeleteCmqTopic", req, cb)
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
   * 批量删除租户下的命名空间
   */
  async DeleteEnvironments(
    req: DeleteEnvironmentsRequest,
    cb?: (error: string, rep: DeleteEnvironmentsResponse) => void
  ): Promise<DeleteEnvironmentsResponse> {
    return this.request("DeleteEnvironments", req, cb)
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
   * 创建用户的集群
   */
  async CreateCluster(
    req: CreateClusterRequest,
    cb?: (error: string, rep: CreateClusterResponse) => void
  ): Promise<CreateClusterResponse> {
    return this.request("CreateCluster", req, cb)
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
   * 清空cmq消息队列中的消息
   */
  async ClearCmqQueue(
    req: ClearCmqQueueRequest,
    cb?: (error: string, rep: ClearCmqQueueResponse) => void
  ): Promise<ClearCmqQueueResponse> {
    return this.request("ClearCmqQueue", req, cb)
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
   * 修改cmq队列属性
   */
  async ModifyCmqQueueAttribute(
    req: ModifyCmqQueueAttributeRequest,
    cb?: (error: string, rep: ModifyCmqQueueAttributeResponse) => void
  ): Promise<ModifyCmqQueueAttributeResponse> {
    return this.request("ModifyCmqQueueAttribute", req, cb)
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
   * 查询cmq订阅详情
   */
  async DescribeCmqSubscriptionDetail(
    req: DescribeCmqSubscriptionDetailRequest,
    cb?: (error: string, rep: DescribeCmqSubscriptionDetailResponse) => void
  ): Promise<DescribeCmqSubscriptionDetailResponse> {
    return this.request("DescribeCmqSubscriptionDetail", req, cb)
  }

  /**
   * 枚举cmq死信队列源队列
   */
  async DescribeCmqDeadLetterSourceQueues(
    req: DescribeCmqDeadLetterSourceQueuesRequest,
    cb?: (error: string, rep: DescribeCmqDeadLetterSourceQueuesResponse) => void
  ): Promise<DescribeCmqDeadLetterSourceQueuesResponse> {
    return this.request("DescribeCmqDeadLetterSourceQueues", req, cb)
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
   * 删除cmq队列
   */
  async DeleteCmqQueue(
    req: DeleteCmqQueueRequest,
    cb?: (error: string, rep: DeleteCmqQueueResponse) => void
  ): Promise<DeleteCmqQueueResponse> {
    return this.request("DeleteCmqQueue", req, cb)
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
   * 删除环境角色授权。
   */
  async DeleteEnvironmentRoles(
    req: DeleteEnvironmentRolesRequest,
    cb?: (error: string, rep: DeleteEnvironmentRolesResponse) => void
  ): Promise<DeleteEnvironmentRolesResponse> {
    return this.request("DeleteEnvironmentRoles", req, cb)
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
   * 获取命名空间角色列表
   */
  async DescribeEnvironmentRoles(
    req: DescribeEnvironmentRolesRequest,
    cb?: (error: string, rep: DescribeEnvironmentRolesResponse) => void
  ): Promise<DescribeEnvironmentRolesResponse> {
    return this.request("DescribeEnvironmentRoles", req, cb)
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
   * 更新RocketMQ命名空间
   */
  async ModifyRocketMQNamespace(
    req: ModifyRocketMQNamespaceRequest,
    cb?: (error: string, rep: ModifyRocketMQNamespaceResponse) => void
  ): Promise<ModifyRocketMQNamespaceResponse> {
    return this.request("ModifyRocketMQNamespace", req, cb)
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
   * 回溯cmq队列
   */
  async RewindCmqQueue(
    req: RewindCmqQueueRequest,
    cb?: (error: string, rep: RewindCmqQueueResponse) => void
  ): Promise<RewindCmqQueueResponse> {
    return this.request("RewindCmqQueue", req, cb)
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
   * 此接口仅用于测试发生消息，不能作为现网正式生产使用
   */
  async SendMsg(
    req: SendMsgRequest,
    cb?: (error: string, rep: SendMsgResponse) => void
  ): Promise<SendMsgResponse> {
    return this.request("SendMsg", req, cb)
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
   * 获取RocketMQ消费组列表
   */
  async DescribeRocketMQGroups(
    req: DescribeRocketMQGroupsRequest,
    cb?: (error: string, rep: DescribeRocketMQGroupsResponse) => void
  ): Promise<DescribeRocketMQGroupsResponse> {
    return this.request("DescribeRocketMQGroups", req, cb)
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
   * 创建RocketMQ主题
   */
  async CreateRocketMQTopic(
    req: CreateRocketMQTopicRequest,
    cb?: (error: string, rep: CreateRocketMQTopicResponse) => void
  ): Promise<CreateRocketMQTopicResponse> {
    return this.request("CreateRocketMQTopic", req, cb)
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
   * 获取RocketMQ主题列表
   */
  async DescribeRocketMQTopics(
    req: DescribeRocketMQTopicsRequest,
    cb?: (error: string, rep: DescribeRocketMQTopicsResponse) => void
  ): Promise<DescribeRocketMQTopicsResponse> {
    return this.request("DescribeRocketMQTopics", req, cb)
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
   * 删除RocketMQ集群
   */
  async DeleteRocketMQCluster(
    req: DeleteRocketMQClusterRequest,
    cb?: (error: string, rep: DeleteRocketMQClusterResponse) => void
  ): Promise<DeleteRocketMQClusterResponse> {
    return this.request("DeleteRocketMQCluster", req, cb)
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
   * 根据时间戳进行消息回溯，精确到毫秒
   */
  async ResetMsgSubOffsetByTimestamp(
    req: ResetMsgSubOffsetByTimestampRequest,
    cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void
  ): Promise<ResetMsgSubOffsetByTimestampResponse> {
    return this.request("ResetMsgSubOffsetByTimestamp", req, cb)
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
   * 查询cmq主题详情
   */
  async DescribeCmqTopicDetail(
    req: DescribeCmqTopicDetailRequest,
    cb?: (error: string, rep: DescribeCmqTopicDetailResponse) => void
  ): Promise<DescribeCmqTopicDetailResponse> {
    return this.request("DescribeCmqTopicDetail", req, cb)
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
   * 用于在用户账户下创建消息队列 Tdmq 命名空间
   */
  async CreateEnvironment(
    req: CreateEnvironmentRequest,
    cb?: (error: string, rep: CreateEnvironmentResponse) => void
  ): Promise<CreateEnvironmentResponse> {
    return this.request("CreateEnvironment", req, cb)
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
   * 获取生产者列表，仅显示在线的生产者
   */
  async DescribeProducers(
    req: DescribeProducersRequest,
    cb?: (error: string, rep: DescribeProducersResponse) => void
  ): Promise<DescribeProducersResponse> {
    return this.request("DescribeProducers", req, cb)
  }

  /**
   * 接收发送到指定 topic 中的消息
   */
  async ReceiveMessage(
    req: ReceiveMessageRequest,
    cb?: (error: string, rep: ReceiveMessageResponse) => void
  ): Promise<ReceiveMessageResponse> {
    return this.request("ReceiveMessage", req, cb)
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
   * 枚举cmq全量主题
   */
  async DescribeCmqTopics(
    req: DescribeCmqTopicsRequest,
    cb?: (error: string, rep: DescribeCmqTopicsResponse) => void
  ): Promise<DescribeCmqTopicsResponse> {
    return this.request("DescribeCmqTopics", req, cb)
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
   * 发送单条消息
   */
  async SendMessages(
    req: SendMessagesRequest,
    cb?: (error: string, rep: SendMessagesResponse) => void
  ): Promise<SendMessagesResponse> {
    return this.request("SendMessages", req, cb)
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
   * 发送cmq消息
   */
  async SendCmqMsg(
    req: SendCmqMsgRequest,
    cb?: (error: string, rep: SendCmqMsgResponse) => void
  ): Promise<SendCmqMsgResponse> {
    return this.request("SendCmqMsg", req, cb)
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
   * 更新RocketMQ主题信息
   */
  async ModifyRocketMQTopic(
    req: ModifyRocketMQTopicRequest,
    cb?: (error: string, rep: ModifyRocketMQTopicResponse) => void
  ): Promise<ModifyRocketMQTopicResponse> {
    return this.request("ModifyRocketMQTopic", req, cb)
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
   * 修改指定命名空间的属性值
   */
  async ModifyEnvironmentAttributes(
    req: ModifyEnvironmentAttributesRequest,
    cb?: (error: string, rep: ModifyEnvironmentAttributesResponse) => void
  ): Promise<ModifyEnvironmentAttributesResponse> {
    return this.request("ModifyEnvironmentAttributes", req, cb)
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
   * 创建一个主题的订阅关系
   */
  async CreateSubscription(
    req: CreateSubscriptionRequest,
    cb?: (error: string, rep: CreateSubscriptionResponse) => void
  ): Promise<CreateSubscriptionResponse> {
    return this.request("CreateSubscription", req, cb)
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
   * 获取单个RocketMQ集群信息
   */
  async DescribeRocketMQCluster(
    req: DescribeRocketMQClusterRequest,
    cb?: (error: string, rep: DescribeRocketMQClusterResponse) => void
  ): Promise<DescribeRocketMQClusterResponse> {
    return this.request("DescribeRocketMQCluster", req, cb)
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
   * 创建环境角色授权
   */
  async CreateEnvironmentRole(
    req: CreateEnvironmentRoleRequest,
    cb?: (error: string, rep: CreateEnvironmentRoleResponse) => void
  ): Promise<CreateEnvironmentRoleResponse> {
    return this.request("CreateEnvironmentRole", req, cb)
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
   * 修改环境角色授权。
   */
  async ModifyEnvironmentRole(
    req: ModifyEnvironmentRoleRequest,
    cb?: (error: string, rep: ModifyEnvironmentRoleResponse) => void
  ): Promise<ModifyEnvironmentRoleResponse> {
    return this.request("ModifyEnvironmentRole", req, cb)
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
   * 运营端获取命名空间bundle列表
   */
  async DescribeNamespaceBundlesOpt(
    req: DescribeNamespaceBundlesOptRequest,
    cb?: (error: string, rep: DescribeNamespaceBundlesOptResponse) => void
  ): Promise<DescribeNamespaceBundlesOptResponse> {
    return this.request("DescribeNamespaceBundlesOpt", req, cb)
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
}

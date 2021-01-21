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
  DeleteTopicsResponse,
  DescribeBindClustersResponse,
  SubscriptionTopic,
  ModifyEnvironmentAttributesRequest,
  DescribeSubscriptionsRequest,
  Environment,
  VpcBindRecord,
  DeleteClusterResponse,
  ModifyClusterRequest,
  DescribeEnvironmentAttributesRequest,
  PartitionsTopic,
  DescribeBindClustersRequest,
  CreateClusterResponse,
  DescribeTopicsResponse,
  EnvironmentRole,
  CreateClusterRequest,
  BindCluster,
  ModifyClusterResponse,
  CreateTopicResponse,
  DescribeClusterDetailRequest,
  DescribeEnvironmentsResponse,
  DescribeEnvironmentsRequest,
  ModifyTopicResponse,
  DescribeClustersRequest,
  DescribeProducersRequest,
  DescribeEnvironmentAttributesResponse,
  TopicRecord,
  Subscription,
  DeleteClusterRequest,
  FilterSubscription,
  Tag,
  DescribeSubscriptionsResponse,
  DescribeProducersResponse,
  CreateTopicRequest,
  DescribeTopicsRequest,
  DeleteEnvironmentsResponse,
  Connection,
  DeleteTopicsRequest,
  DescribeEnvironmentRolesResponse,
  CreateSubscriptionRequest,
  ModifyTopicRequest,
  Topic,
  Consumer,
  DescribeBindVpcsResponse,
  ModifyEnvironmentAttributesResponse,
  DeleteSubscriptionsRequest,
  CreateEnvironmentResponse,
  ResetMsgSubOffsetByTimestampRequest,
  Producer,
  DeleteSubscriptionsResponse,
  CreateSubscriptionResponse,
  ConsumersSchedule,
  DeleteEnvironmentsRequest,
  DescribeClusterDetailResponse,
  Cluster,
  DescribeBindVpcsRequest,
  DescribeClustersResponse,
  ResetMsgSubOffsetByTimestampResponse,
  CreateEnvironmentRequest,
  DescribeEnvironmentRolesRequest,
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
   * 删除集群
   */
  async DeleteCluster(
    req: DeleteClusterRequest,
    cb?: (error: string, rep: DeleteClusterResponse) => void
  ): Promise<DeleteClusterResponse> {
    return this.request("DeleteCluster", req, cb)
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
   * 批量删除topics
   */
  async DeleteTopics(
    req: DeleteTopicsRequest,
    cb?: (error: string, rep: DeleteTopicsResponse) => void
  ): Promise<DeleteTopicsResponse> {
    return this.request("DeleteTopics", req, cb)
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
   * 获取集群列表
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
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
   * 获取生产者列表，仅显示在线的生产者
   */
  async DescribeProducers(
    req: DescribeProducersRequest,
    cb?: (error: string, rep: DescribeProducersResponse) => void
  ): Promise<DescribeProducersResponse> {
    return this.request("DescribeProducers", req, cb)
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
   * 更新集群信息
   */
  async ModifyCluster(
    req: ModifyClusterRequest,
    cb?: (error: string, rep: ModifyClusterResponse) => void
  ): Promise<ModifyClusterResponse> {
    return this.request("ModifyCluster", req, cb)
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
   * 创建一个主题的订阅关系
   */
  async CreateSubscription(
    req: CreateSubscriptionRequest,
    cb?: (error: string, rep: CreateSubscriptionResponse) => void
  ): Promise<CreateSubscriptionResponse> {
    return this.request("CreateSubscription", req, cb)
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
   * 根据时间戳进行消息回溯，精确到毫秒
   */
  async ResetMsgSubOffsetByTimestamp(
    req: ResetMsgSubOffsetByTimestampRequest,
    cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void
  ): Promise<ResetMsgSubOffsetByTimestampResponse> {
    return this.request("ResetMsgSubOffsetByTimestamp", req, cb)
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

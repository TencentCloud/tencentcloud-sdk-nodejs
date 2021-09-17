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
  TopicDetail,
  DeleteAclRequest,
  GroupInfoMember,
  BatchCreateAclRequest,
  DeleteUserRequest,
  PartitionOffset,
  DescribeACLRequest,
  DescribeTopicSyncReplicaResponse,
  DescribeTopicAttributesRequest,
  DescribeInstanceAttributesRequest,
  ConsumerGroup,
  Assignment,
  DescribeConsumerGroupResponse,
  DeleteTopicRequest,
  DescribeInstancesResponse,
  FetchMessageByOffsetResponse,
  GroupInfoTopics,
  TopicResult,
  Region,
  DescribeInstancesDetailResponse,
  CreateInstancePreData,
  AclRule,
  DescribeACLResponse,
  JgwOperateResponse,
  ZoneInfo,
  DescribeTopicSubscribeGroupResponse,
  DescribeCkafkaZoneRequest,
  Topic,
  Tag,
  GroupResponse,
  DescribeTopicAttributesResponse,
  DeleteRouteTriggerTimeRequest,
  RouteResponse,
  DescribeGroupResponse,
  DeleteAclRuleRequest,
  ModifyInstanceAttributesConfig,
  OperateResponseData,
  CreateUserResponse,
  ModifyInstanceAttributesResponse,
  CreatePartitionResponse,
  ClusterInfo,
  DescribeConsumerGroupRequest,
  DeleteUserResponse,
  CreateAclRequest,
  DescribeAppInfoRequest,
  DescribeTopicResponse,
  ConsumerGroupResponse,
  CreateTopicIpWhiteListResponse,
  GroupOffsetTopic,
  ModifyGroupOffsetsResponse,
  Partition,
  CreateAclResponse,
  CreateTopicRequest,
  DeleteAclResponse,
  DynamicRetentionTime,
  DescribeTopicSubscribeGroupRequest,
  InstanceDetailResponse,
  FetchMessageByOffsetRequest,
  TopicInSyncReplicaInfo,
  DescribeRegionRequest,
  InstanceConfigDO,
  DeleteAclRuleResponse,
  UserResponse,
  DescribeGroupInfoRequest,
  DescribeGroupInfoResponse,
  ModifyTopicAttributesResponse,
  DeleteRouteTriggerTimeResponse,
  DescribeUserResponse,
  AppIdResponse,
  DescribeTopicRequest,
  CreatePartitionRequest,
  Group,
  DescribeAppInfoResponse,
  AclResponse,
  ZoneResponse,
  Instance,
  DescribeInstanceAttributesResponse,
  TopicDetailResponse,
  TopicSubscribeGroup,
  Config,
  ModifyPasswordRequest,
  CreateInstancePreRequest,
  ModifyInstanceAttributesRequest,
  DescribeRegionResponse,
  CreateTopicResponse,
  VipEntity,
  ConsumerGroupTopic,
  User,
  GroupOffsetPartition,
  DeleteTopicResponse,
  DescribeInstancesRequest,
  InstanceAttributesResponse,
  DescribeCkafkaZoneResponse,
  Filter,
  GroupOffsetResponse,
  BatchCreateAclResponse,
  CreateUserRequest,
  DeleteTopicIpWhiteListResponse,
  CreateInstancePreResponse,
  DescribeInstancesDetailRequest,
  ModifyPasswordResponse,
  DescribeRouteRequest,
  TopicInSyncReplicaResult,
  GroupInfoResponse,
  TopicAttributesResponse,
  InstanceResponse,
  DescribeGroup,
  TopicPartitionDO,
  CreateTopicResp,
  DescribeRouteResponse,
  DescribeTopicDetailRequest,
  DescribeGroupOffsetsResponse,
  ConsumerRecord,
  ModifyGroupOffsetsRequest,
  CreateTopicIpWhiteListRequest,
  Route,
  AclRuleInfo,
  Acl,
  TopicRetentionTimeConfigRsp,
  ModifyTopicAttributesRequest,
  DescribeGroupRequest,
  DeleteTopicIpWhiteListRequest,
  DescribeGroupOffsetsRequest,
  DescribeUserRequest,
  DescribeTopicSyncReplicaRequest,
  InstanceDetail,
  DescribeTopicDetailResponse,
  SubscribedInfo,
  Price,
} from "./ckafka_models"

/**
 * ckafka client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ckafka.tencentcloudapi.com", "2019-08-19", clientConfig)
  }

  /**
   * 查看路由信息
   */
  async DescribeRoute(
    req: DescribeRouteRequest,
    cb?: (error: string, rep: DescribeRouteResponse) => void
  ): Promise<DescribeRouteResponse> {
    return this.request("DescribeRoute", req, cb)
  }

  /**
   * 获取消费分组信息
   */
  async DescribeGroupInfo(
    req: DescribeGroupInfoRequest,
    cb?: (error: string, rep: DescribeGroupInfoResponse) => void
  ): Promise<DescribeGroupInfoResponse> {
    return this.request("DescribeGroupInfo", req, cb)
  }

  /**
   * 查询消费分组信息
   */
  async DescribeConsumerGroup(
    req: DescribeConsumerGroupRequest,
    cb?: (error: string, rep: DescribeConsumerGroupResponse) => void
  ): Promise<DescribeConsumerGroupResponse> {
    return this.request("DescribeConsumerGroup", req, cb)
  }

  /**
   * 查询订阅某主题消息分组信息
   */
  async DescribeTopicSubscribeGroup(
    req: DescribeTopicSubscribeGroupRequest,
    cb?: (error: string, rep: DescribeTopicSubscribeGroupResponse) => void
  ): Promise<DescribeTopicSubscribeGroupResponse> {
    return this.request("DescribeTopicSubscribeGroup", req, cb)
  }

  /**
   * 本接口用于修改主题属性。
   */
  async ModifyTopicAttributes(
    req: ModifyTopicAttributesRequest,
    cb?: (error: string, rep: ModifyTopicAttributesResponse) => void
  ): Promise<ModifyTopicAttributesResponse> {
    return this.request("ModifyTopicAttributes", req, cb)
  }

  /**
   * 创建主题ip白名单
   */
  async CreateTopicIpWhiteList(
    req: CreateTopicIpWhiteListRequest,
    cb?: (error: string, rep: CreateTopicIpWhiteListResponse) => void
  ): Promise<CreateTopicIpWhiteListResponse> {
    return this.request("CreateTopicIpWhiteList", req, cb)
  }

  /**
   * 枚举消费分组(精简版)
   */
  async DescribeGroup(
    req: DescribeGroupRequest,
    cb?: (error: string, rep: DescribeGroupResponse) => void
  ): Promise<DescribeGroupResponse> {
    return this.request("DescribeGroup", req, cb)
  }

  /**
   * 设置Groups 消费分组offset
   */
  async ModifyGroupOffsets(
    req: ModifyGroupOffsetsRequest,
    cb?: (error: string, rep: ModifyGroupOffsetsResponse) => void
  ): Promise<ModifyGroupOffsetsResponse> {
    return this.request("ModifyGroupOffsets", req, cb)
  }

  /**
   * 本接口（DescribeInstance）用于在用户账户下获取消息队列 CKafka 实例列表
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 设置实例属性
   */
  async ModifyInstanceAttributes(
    req: ModifyInstanceAttributesRequest,
    cb?: (error: string, rep: ModifyInstanceAttributesResponse) => void
  ): Promise<ModifyInstanceAttributesResponse> {
    return this.request("ModifyInstanceAttributes", req, cb)
  }

  /**
   * 查询用户信息
   */
  async DescribeUser(
    req: DescribeUserRequest,
    cb?: (error: string, rep: DescribeUserResponse) => void
  ): Promise<DescribeUserResponse> {
    return this.request("DescribeUser", req, cb)
  }

  /**
   * 枚举ACL
   */
  async DescribeACL(
    req: DescribeACLRequest,
    cb?: (error: string, rep: DescribeACLResponse) => void
  ): Promise<DescribeACLResponse> {
    return this.request("DescribeACL", req, cb)
  }

  /**
   * 获取主题列表详情（仅控制台调用）
   */
  async DescribeTopicDetail(
    req: DescribeTopicDetailRequest,
    cb?: (error: string, rep: DescribeTopicDetailResponse) => void
  ): Promise<DescribeTopicDetailResponse> {
    return this.request("DescribeTopicDetail", req, cb)
  }

  /**
   * 创建实例(预付费包年包月)
   */
  async CreateInstancePre(
    req: CreateInstancePreRequest,
    cb?: (error: string, rep: CreateInstancePreResponse) => void
  ): Promise<CreateInstancePreResponse> {
    return this.request("CreateInstancePre", req, cb)
  }

  /**
   * 根据指定offset位置的消息
   */
  async FetchMessageByOffset(
    req: FetchMessageByOffsetRequest,
    cb?: (error: string, rep: FetchMessageByOffsetResponse) => void
  ): Promise<FetchMessageByOffsetResponse> {
    return this.request("FetchMessageByOffset", req, cb)
  }

  /**
   * 删除主题IP白名单
   */
  async DeleteTopicIpWhiteList(
    req: DeleteTopicIpWhiteListRequest,
    cb?: (error: string, rep: DeleteTopicIpWhiteListResponse) => void
  ): Promise<DeleteTopicIpWhiteListResponse> {
    return this.request("DeleteTopicIpWhiteList", req, cb)
  }

  /**
   * 修改密码
   */
  async ModifyPassword(
    req: ModifyPasswordRequest,
    cb?: (error: string, rep: ModifyPasswordResponse) => void
  ): Promise<ModifyPasswordResponse> {
    return this.request("ModifyPassword", req, cb)
  }

  /**
   * 添加 ACL 策略
   */
  async CreateAcl(
    req: CreateAclRequest,
    cb?: (error: string, rep: CreateAclResponse) => void
  ): Promise<CreateAclResponse> {
    return this.request("CreateAcl", req, cb)
  }

  /**
   * 创建ckafka主题
   */
  async CreateTopic(
    req: CreateTopicRequest,
    cb?: (error: string, rep: CreateTopicResponse) => void
  ): Promise<CreateTopicResponse> {
    return this.request("CreateTopic", req, cb)
  }

  /**
   * 本接口用于增加主题中的分区
   */
  async CreatePartition(
    req: CreatePartitionRequest,
    cb?: (error: string, rep: CreatePartitionResponse) => void
  ): Promise<CreatePartitionResponse> {
    return this.request("CreatePartition", req, cb)
  }

  /**
   * 删除ACL
   */
  async DeleteAcl(
    req: DeleteAclRequest,
    cb?: (error: string, rep: DeleteAclResponse) => void
  ): Promise<DeleteAclResponse> {
    return this.request("DeleteAcl", req, cb)
  }

  /**
   * 查询用户列表
   */
  async DescribeAppInfo(
    req: DescribeAppInfoRequest,
    cb?: (error: string, rep: DescribeAppInfoResponse) => void
  ): Promise<DescribeAppInfoResponse> {
    return this.request("DescribeAppInfo", req, cb)
  }

  /**
     * 获取主题属性

     */
  async DescribeTopicAttributes(
    req: DescribeTopicAttributesRequest,
    cb?: (error: string, rep: DescribeTopicAttributesResponse) => void
  ): Promise<DescribeTopicAttributesResponse> {
    return this.request("DescribeTopicAttributes", req, cb)
  }

  /**
   * 获取实例属性
   */
  async DescribeInstanceAttributes(
    req: DescribeInstanceAttributesRequest,
    cb?: (error: string, rep: DescribeInstanceAttributesResponse) => void
  ): Promise<DescribeInstanceAttributesResponse> {
    return this.request("DescribeInstanceAttributes", req, cb)
  }

  /**
   * 用户账户下获取实例列表详情
   */
  async DescribeInstancesDetail(
    req: DescribeInstancesDetailRequest,
    cb?: (error: string, rep: DescribeInstancesDetailResponse) => void
  ): Promise<DescribeInstancesDetailResponse> {
    return this.request("DescribeInstancesDetail", req, cb)
  }

  /**
   * 批量添加ACL策略
   */
  async BatchCreateAcl(
    req: BatchCreateAclRequest,
    cb?: (error: string, rep: BatchCreateAclResponse) => void
  ): Promise<BatchCreateAclResponse> {
    return this.request("BatchCreateAcl", req, cb)
  }

  /**
   * 删除ACL规则
   */
  async DeleteAclRule(
    req: DeleteAclRuleRequest,
    cb?: (error: string, rep: DeleteAclRuleResponse) => void
  ): Promise<DeleteAclRuleResponse> {
    return this.request("DeleteAclRule", req, cb)
  }

  /**
   * 修改删除路由延迟触发时间
   */
  async DeleteRouteTriggerTime(
    req: DeleteRouteTriggerTimeRequest,
    cb?: (error: string, rep: DeleteRouteTriggerTimeResponse) => void
  ): Promise<DeleteRouteTriggerTimeResponse> {
    return this.request("DeleteRouteTriggerTime", req, cb)
  }

  /**
   * 删除用户
   */
  async DeleteUser(
    req: DeleteUserRequest,
    cb?: (error: string, rep: DeleteUserResponse) => void
  ): Promise<DeleteUserResponse> {
    return this.request("DeleteUser", req, cb)
  }

  /**
   * 获取Topic 副本详情信息
   */
  async DescribeTopicSyncReplica(
    req: DescribeTopicSyncReplicaRequest,
    cb?: (error: string, rep: DescribeTopicSyncReplicaResponse) => void
  ): Promise<DescribeTopicSyncReplicaResponse> {
    return this.request("DescribeTopicSyncReplica", req, cb)
  }

  /**
   * 获取消费分组offset
   */
  async DescribeGroupOffsets(
    req: DescribeGroupOffsetsRequest,
    cb?: (error: string, rep: DescribeGroupOffsetsResponse) => void
  ): Promise<DescribeGroupOffsetsResponse> {
    return this.request("DescribeGroupOffsets", req, cb)
  }

  /**
     * 接口请求域名：https://ckafka.tencentcloudapi.com
本接口（DescribeTopic）用于在用户获取消息队列 CKafka 实例的主题列表
     */
  async DescribeTopic(
    req: DescribeTopicRequest,
    cb?: (error: string, rep: DescribeTopicResponse) => void
  ): Promise<DescribeTopicResponse> {
    return this.request("DescribeTopic", req, cb)
  }

  /**
   * 用于查看ckafka的可用区列表
   */
  async DescribeCkafkaZone(
    req?: DescribeCkafkaZoneRequest,
    cb?: (error: string, rep: DescribeCkafkaZoneResponse) => void
  ): Promise<DescribeCkafkaZoneResponse> {
    return this.request("DescribeCkafkaZone", req, cb)
  }

  /**
   * 枚举地域,只支持广州地域
   */
  async DescribeRegion(
    req: DescribeRegionRequest,
    cb?: (error: string, rep: DescribeRegionResponse) => void
  ): Promise<DescribeRegionResponse> {
    return this.request("DescribeRegion", req, cb)
  }

  /**
   * 添加用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 删除ckafka主题
   */
  async DeleteTopic(
    req: DeleteTopicRequest,
    cb?: (error: string, rep: DeleteTopicResponse) => void
  ): Promise<DeleteTopicResponse> {
    return this.request("DeleteTopic", req, cb)
  }
}

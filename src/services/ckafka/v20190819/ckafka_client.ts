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
  CreateInstancePostResponse,
  DropCls,
  PostgreSQLModifyConnectParam,
  GroupInfoMember,
  RowParam,
  EsConnectParam,
  BatchCreateAclRequest,
  DescribeDatahubTaskResponse,
  DeleteUserRequest,
  PartitionOffset,
  SQLServerConnectParam,
  CreateConnectResourceResponse,
  TopicRetentionTimeConfigRsp,
  BatchModifyTopicResultDTO,
  SubscribedInfo,
  DescribeTopicAttributesRequest,
  DescribeDatahubGroupOffsetsResponse,
  SplitParam,
  ConsumerGroup,
  Assignment,
  DescribeConnectResourceResp,
  AuthorizeTokenResponse,
  DescribeDatahubTaskRequest,
  UrlDecodeParam,
  FetchLatestDatahubMessageListResponse,
  EsParam,
  DescribeAclRuleResponse,
  DtsParam,
  GroupOffsetPartition,
  CancelAuthorizationTokenRequest,
  CancelAuthorizationTokenResponse,
  MySQLConnectParam,
  InquireCkafkaPriceResp,
  CreateRouteRequest,
  SQLServerModifyConnectParam,
  DeleteTopicRequest,
  DescribeDatahubTasksRequest,
  DescribeInstancesResponse,
  DatahubResource,
  BatchModifyTopicAttributesResponse,
  ClickHouseParam,
  FilterMapParam,
  CreateInstancePreResp,
  ModifyDatahubTaskResponse,
  GroupInfoTopics,
  FetchMessageListByOffsetRequest,
  Region,
  ModifyInstancePreRequest,
  CreateAclRuleRequest,
  TransformsParam,
  ClickHouseModifyConnectParam,
  ModifyAclRuleRequest,
  DescribeDatahubTasksRes,
  DescribeInstancesDetailResponse,
  CreateInstancePreData,
  DescribeAppInfoRequest,
  AclRule,
  SMTParam,
  CheckCdcClusterResponse,
  CtsdbModifyConnectParam,
  CreateTokenResponse,
  DynamicDiskConfig,
  DorisConnectParam,
  ZoneInfo,
  DescribeTopicSubscribeGroupResponse,
  DeleteAclRuleRequest,
  DescribeConnectResourcesRequest,
  DescribeRouteRequest,
  Topic,
  Tag,
  ModifyAclRuleResponse,
  ModifyConnectResourceRequest,
  ModifyInstanceAttributesResponse,
  DescribeACLResponse,
  BatchModifyGroupOffsetsResponse,
  GroupResponse,
  InstanceDetailResponse,
  GroupOffsetResponse,
  CreateDatahubTopicRequest,
  DescribeTopicResponse,
  MongoDBModifyConnectParam,
  TdwParam,
  ModifyGroupOffsetsRequest,
  DescribeDatahubTopicResponse,
  DescribeCkafkaZoneRequest,
  FetchDatahubMessageByOffsetResponse,
  CreateConsumerResponse,
  CreateCdcClusterResponse,
  DescribeGroupResponse,
  CdcClusterResponse,
  ModifyPasswordResponse,
  ModifyInstanceAttributesConfig,
  FetchDatahubMessageByOffsetRequest,
  AuthorizeTokenRequest,
  OperateResponseData,
  RenewCkafkaInstanceResponse,
  DescribeACLRequest,
  CreateUserResponse,
  DescribeDatahubTaskRes,
  CreatePartitionResponse,
  MongoDBConnectParam,
  MySQLParam,
  BatchAnalyseParam,
  ClusterInfo,
  DeleteGroupRequest,
  DescribeConsumerGroupRequest,
  DeleteUserResponse,
  DescribeConnectResourceRequest,
  DescribeTopicProduceConnectionRequest,
  CreateAclRequest,
  DescribeTopicSyncReplicaResponse,
  CreateConnectResourceRequest,
  MariaDBParam,
  Route,
  DeleteRouteResponse,
  Partitions,
  CreateDatahubTaskRes,
  ConsumerGroupResponse,
  CreateTopicIpWhiteListResponse,
  GroupOffsetTopic,
  ModifyGroupOffsetsResponse,
  DescribeConnectInfoResultDTO,
  Partition,
  CreateAclResponse,
  FailureParam,
  CreateTopicRequest,
  DeleteAclResponse,
  DynamicRetentionTime,
  TransformParam,
  DeleteRouteTriggerTimeRequest,
  DescribeTopicSubscribeGroupRequest,
  DeleteInstancePreResponse,
  TableMapping,
  DatahubTopicResp,
  RecordMapping,
  DescribeInstanceAttributesRequest,
  InquiryPublicNetworkParam,
  TopicInSyncReplicaInfo,
  DeleteConnectResourceResponse,
  DescribeRegionRequest,
  InstanceConfigDO,
  DeleteAclRuleResponse,
  UserResponse,
  DescribeGroupInfoRequest,
  DescribeConnectResourcesResp,
  ModifyTopicAttributesResponse,
  BatchContent,
  DeleteRouteTriggerTimeResponse,
  User,
  TopicSubscribeGroup,
  DescribeUserResponse,
  DtsConnectParam,
  DorisModifyConnectParam,
  FieldParam,
  DescribeGroupInfoResponse,
  AppIdResponse,
  DescribeTopicRequest,
  CreateTokenRequest,
  CreatePartitionRequest,
  Group,
  GroupInfoResponse,
  DescribeAppInfoResponse,
  CosParam,
  AclResponse,
  ZoneResponse,
  Instance,
  DescribeInstanceAttributesResponse,
  MapParam,
  TopicDetailResponse,
  TopicInSyncReplicaResult,
  DeleteInstancePreRequest,
  DescribeDatahubTopicRequest,
  Config,
  ClickHouseSchema,
  CtsdbConnectParam,
  ModifyPasswordRequest,
  MariaDBModifyConnectParam,
  ModifyInstanceAttributesRequest,
  DeleteDatahubTopicRequest,
  DescribeRegionResponse,
  CreateTopicResponse,
  VipEntity,
  KafkaConnectParam,
  DescribeTopicProduceConnectionResponse,
  FetchLatestDatahubMessageListRequest,
  ConsumerGroupTopic,
  DatahubTaskInfo,
  CreateAclRuleResponse,
  DescribeTopicAttributesResponse,
  DeleteDatahubTopicResponse,
  DescribeConsumerGroupResponse,
  FetchMessageListByOffsetResponse,
  InquiryDetailPrice,
  DeleteDatahubTaskRequest,
  DescribeGroupOffsetsRequest,
  DeleteConnectResourceRequest,
  DeleteDatahubTaskResponse,
  DescribeInstancesRequest,
  InstanceAttributesResponse,
  CreateInstancePostRequest,
  DescribeDatahubTopicsResponse,
  DescribeConnectResourceResponse,
  DescribeGroupRequest,
  Filter,
  Connection,
  BatchCreateAclResponse,
  ModifyInstancePreResponse,
  CreateUserRequest,
  RouteResponse,
  DtsModifyConnectParam,
  DeleteRouteRequest,
  CreateCdcClusterRequest,
  DeleteTopicIpWhiteListResponse,
  CreateInstancePreResponse,
  ConnectResourceResourceIdResp,
  CheckCdcClusterRequest,
  FetchMessageByOffsetRequest,
  DescribeDatahubTopicResp,
  DescribeInstancesDetailRequest,
  JsonPathReplaceParam,
  SubstrParam,
  FetchMessageByOffsetResponse,
  CreateConsumerRequest,
  InquireCkafkaPriceResponse,
  CreateDatahubTopicResponse,
  InquireCkafkaPriceRequest,
  DateParam,
  ValueParam,
  DescribeDatahubTasksResponse,
  InquiryDiskParam,
  LowercaseParam,
  SendMessageResponse,
  DescribeDatahubGroupOffsetsRequest,
  InquiryBasePrice,
  DescribeCkafkaZoneResponse,
  BatchModifyGroupOffsetsRequest,
  TopicAttributesResponse,
  KafkaParam,
  RegexReplaceParam,
  PrivateLinkParam,
  CreateRouteResponse,
  InstanceResponse,
  DatahubTopicDTO,
  JgwOperateResponse,
  DescribeGroup,
  CtsdbParam,
  EventBusParam,
  DatahubTaskIdRes,
  TopicPartitionDO,
  CreateTopicResp,
  AnalyseParam,
  BatchModifyTopicInfo,
  DescribeRouteResponse,
  ModifyDatahubTopicResponse,
  EsModifyConnectParam,
  ModifyConnectResourceResponse,
  InstanceChargeParam,
  DescribeDatahubTopicsRequest,
  CreateDatahubTaskRequest,
  InquiryPrice,
  TopicResult,
  DescribeTopicDetailRequest,
  DescribeGroupOffsetsResponse,
  ClsParam,
  SendMessageRequest,
  ConsumerRecord,
  PostgreSQLConnectParam,
  KVParam,
  BatchModifyTopicAttributesRequest,
  DeleteGroupResponse,
  CreateTopicIpWhiteListRequest,
  PostgreSQLParam,
  MariaDBConnectParam,
  AclRuleInfo,
  RenewCkafkaInstanceRequest,
  Acl,
  DescribeAclRuleRequest,
  MongoDBParam,
  TopicParam,
  ModifyDatahubTopicRequest,
  ModifyTopicAttributesRequest,
  SecondaryAnalyseParam,
  CreateInstancePreRequest,
  DeleteTopicIpWhiteListRequest,
  SaleInfo,
  DeleteTopicResponse,
  ScfParam,
  CreateDatahubTaskResponse,
  ClickHouseConnectParam,
  DescribeUserRequest,
  DescribeDatahubTopicsResp,
  DescribeTopicSyncReplicaRequest,
  DescribeConnectResource,
  ModifyDatahubTaskRequest,
  InstanceDetail,
  InstanceQuotaConfigResp,
  DescribeTopicDetailResponse,
  MySQLModifyConnectParam,
  AclRuleResp,
  SQLServerParam,
  ReplaceParam,
  Price,
  DescribeConnectResourcesResponse,
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
   * 续费Ckafka实例, 目前只支持国内站包年包月实例续费
   */
  async RenewCkafkaInstance(
    req: RenewCkafkaInstanceRequest,
    cb?: (error: string, rep: RenewCkafkaInstanceResponse) => void
  ): Promise<RenewCkafkaInstanceResponse> {
    return this.request("RenewCkafkaInstance", req, cb)
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
   * 创建消费者组
   */
  async CreateConsumer(
    req: CreateConsumerRequest,
    cb?: (error: string, rep: CreateConsumerResponse) => void
  ): Promise<CreateConsumerResponse> {
    return this.request("CreateConsumer", req, cb)
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
   * 查询Datahub连接源
   */
  async DescribeConnectResource(
    req: DescribeConnectResourceRequest,
    cb?: (error: string, rep: DescribeConnectResourceResponse) => void
  ): Promise<DescribeConnectResourceResponse> {
    return this.request("DescribeConnectResource", req, cb)
  }

  /**
   * 创建按量计费实例
   */
  async CreateInstancePost(
    req: CreateInstancePostRequest,
    cb?: (error: string, rep: CreateInstancePostResponse) => void
  ): Promise<CreateInstancePostResponse> {
    return this.request("CreateInstancePost", req, cb)
  }

  /**
   * 查询ACL规则列表
   */
  async DescribeAclRule(
    req: DescribeAclRuleRequest,
    cb?: (error: string, rep: DescribeAclRuleResponse) => void
  ): Promise<DescribeAclRuleResponse> {
    return this.request("DescribeAclRule", req, cb)
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
   * 预付费实例变配接口，调整磁盘，带宽
   */
  async ModifyInstancePre(
    req: ModifyInstancePreRequest,
    cb?: (error: string, rep: ModifyInstancePreResponse) => void
  ): Promise<ModifyInstancePreResponse> {
    return this.request("ModifyInstancePre", req, cb)
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
   * 批量设置主题属性
   */
  async BatchModifyTopicAttributes(
    req: BatchModifyTopicAttributesRequest,
    cb?: (error: string, rep: BatchModifyTopicAttributesResponse) => void
  ): Promise<BatchModifyTopicAttributesResponse> {
    return this.request("BatchModifyTopicAttributes", req, cb)
  }

  /**
   * 删除路由
   */
  async DeleteRoute(
    req: DeleteRouteRequest,
    cb?: (error: string, rep: DeleteRouteResponse) => void
  ): Promise<DeleteRouteResponse> {
    return this.request("DeleteRoute", req, cb)
  }

  /**
   * 通过HTTP接入层发送消息
   */
  async SendMessage(
    req: SendMessageRequest,
    cb?: (error: string, rep: SendMessageResponse) => void
  ): Promise<SendMessageResponse> {
    return this.request("SendMessage", req, cb)
  }

  /**
   * 修改Datahub主题属性
   */
  async ModifyDatahubTopic(
    req: ModifyDatahubTopicRequest,
    cb?: (error: string, rep: ModifyDatahubTopicResponse) => void
  ): Promise<ModifyDatahubTopicResponse> {
    return this.request("ModifyDatahubTopic", req, cb)
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
   * 删除Datahub连接源
   */
  async DeleteConnectResource(
    req: DeleteConnectResourceRequest,
    cb?: (error: string, rep: DeleteConnectResourceResponse) => void
  ): Promise<DeleteConnectResourceResponse> {
    return this.request("DeleteConnectResource", req, cb)
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
   * 修改Datahub任务
   */
  async ModifyDatahubTask(
    req: ModifyDatahubTaskRequest,
    cb?: (error: string, rep: ModifyDatahubTaskResponse) => void
  ): Promise<ModifyDatahubTaskResponse> {
    return this.request("ModifyDatahubTask", req, cb)
  }

  /**
   * 查询Datahub任务列表
   */
  async DescribeDatahubTasks(
    req: DescribeDatahubTasksRequest,
    cb?: (error: string, rep: DescribeDatahubTasksResponse) => void
  ): Promise<DescribeDatahubTasksResponse> {
    return this.request("DescribeDatahubTasks", req, cb)
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
   * 添加实例路由
   */
  async CreateRoute(
    req: CreateRouteRequest,
    cb?: (error: string, rep: CreateRouteResponse) => void
  ): Promise<CreateRouteResponse> {
    return this.request("CreateRoute", req, cb)
  }

  /**
   * 删除Datahub任务
   */
  async DeleteDatahubTask(
    req: DeleteDatahubTaskRequest,
    cb?: (error: string, rep: DeleteDatahubTaskResponse) => void
  ): Promise<DeleteDatahubTaskResponse> {
    return this.request("DeleteDatahubTask", req, cb)
  }

  /**
   * 删除消费组
   */
  async DeleteGroup(
    req: DeleteGroupRequest,
    cb?: (error: string, rep: DeleteGroupResponse) => void
  ): Promise<DeleteGroupResponse> {
    return this.request("DeleteGroup", req, cb)
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
   * 根据位点查询消息列表
   */
  async FetchMessageListByOffset(
    req: FetchMessageListByOffsetRequest,
    cb?: (error: string, rep: FetchMessageListByOffsetResponse) => void
  ): Promise<FetchMessageListByOffsetResponse> {
    return this.request("FetchMessageListByOffset", req, cb)
  }

  /**
   * 创建Datahub主题
   */
  async CreateDatahubTopic(
    req: CreateDatahubTopicRequest,
    cb?: (error: string, rep: CreateDatahubTopicResponse) => void
  ): Promise<CreateDatahubTopicResponse> {
    return this.request("CreateDatahubTopic", req, cb)
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
   * 查询DIP主题列表
   */
  async DescribeDatahubTopics(
    req: DescribeDatahubTopicsRequest,
    cb?: (error: string, rep: DescribeDatahubTopicsResponse) => void
  ): Promise<DescribeDatahubTopicsResponse> {
    return this.request("DescribeDatahubTopics", req, cb)
  }

  /**
   * 取消授权token
   */
  async CancelAuthorizationToken(
    req: CancelAuthorizationTokenRequest,
    cb?: (error: string, rep: CancelAuthorizationTokenResponse) => void
  ): Promise<CancelAuthorizationTokenResponse> {
    return this.request("CancelAuthorizationToken", req, cb)
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
   * 删除Datahub主题
   */
  async DeleteDatahubTopic(
    req: DeleteDatahubTopicRequest,
    cb?: (error: string, rep: DeleteDatahubTopicResponse) => void
  ): Promise<DeleteDatahubTopicResponse> {
    return this.request("DeleteDatahubTopic", req, cb)
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
   * 枚举地域,只支持广州地域
   */
  async DescribeRegion(
    req: DescribeRegionRequest,
    cb?: (error: string, rep: DescribeRegionResponse) => void
  ): Promise<DescribeRegionResponse> {
    return this.request("DescribeRegion", req, cb)
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
   * 创建Datahub连接源
   */
  async CreateConnectResource(
    req: CreateConnectResourceRequest,
    cb?: (error: string, rep: CreateConnectResourceResponse) => void
  ): Promise<CreateConnectResourceResponse> {
    return this.request("CreateConnectResource", req, cb)
  }

  /**
   * 查询Datahub任务信息
   */
  async DescribeDatahubTask(
    req: DescribeDatahubTaskRequest,
    cb?: (error: string, rep: DescribeDatahubTaskResponse) => void
  ): Promise<DescribeDatahubTaskResponse> {
    return this.request("DescribeDatahubTask", req, cb)
  }

  /**
   * 用于查询cdc-ckafka任务状态
   */
  async CheckCdcCluster(
    req: CheckCdcClusterRequest,
    cb?: (error: string, rep: CheckCdcClusterResponse) => void
  ): Promise<CheckCdcClusterResponse> {
    return this.request("CheckCdcCluster", req, cb)
  }

  /**
   * 修改AC策略，目前只支持预设规则的是否应用到新增topic这一项的修改
   */
  async ModifyAclRule(
    req: ModifyAclRuleRequest,
    cb?: (error: string, rep: ModifyAclRuleResponse) => void
  ): Promise<ModifyAclRuleResponse> {
    return this.request("ModifyAclRule", req, cb)
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
   * 查询最新消息列表
   */
  async FetchLatestDatahubMessageList(
    req: FetchLatestDatahubMessageListRequest,
    cb?: (error: string, rep: FetchLatestDatahubMessageListResponse) => void
  ): Promise<FetchLatestDatahubMessageListResponse> {
    return this.request("FetchLatestDatahubMessageList", req, cb)
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
   * 编辑Datahub连接源
   */
  async ModifyConnectResource(
    req: ModifyConnectResourceRequest,
    cb?: (error: string, rep: ModifyConnectResourceResponse) => void
  ): Promise<ModifyConnectResourceResponse> {
    return this.request("ModifyConnectResource", req, cb)
  }

  /**
   * 根据指定offset位置的消息
   */
  async FetchDatahubMessageByOffset(
    req: FetchDatahubMessageByOffsetRequest,
    cb?: (error: string, rep: FetchDatahubMessageByOffsetResponse) => void
  ): Promise<FetchDatahubMessageByOffsetResponse> {
    return this.request("FetchDatahubMessageByOffset", req, cb)
  }

  /**
   * 创建最高权限的token
   */
  async CreateToken(
    req: CreateTokenRequest,
    cb?: (error: string, rep: CreateTokenResponse) => void
  ): Promise<CreateTokenResponse> {
    return this.request("CreateToken", req, cb)
  }

  /**
   * 获取Datahub消费分组offset
   */
  async DescribeDatahubGroupOffsets(
    req: DescribeDatahubGroupOffsetsRequest,
    cb?: (error: string, rep: DescribeDatahubGroupOffsetsResponse) => void
  ): Promise<DescribeDatahubGroupOffsetsResponse> {
    return this.request("DescribeDatahubGroupOffsets", req, cb)
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
   * 删除预付费实例
   */
  async DeleteInstancePre(
    req: DeleteInstancePreRequest,
    cb?: (error: string, rep: DeleteInstancePreResponse) => void
  ): Promise<DeleteInstancePreResponse> {
    return this.request("DeleteInstancePre", req, cb)
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
   * 创建DIP转储任务
   */
  async CreateDatahubTask(
    req: CreateDatahubTaskRequest,
    cb?: (error: string, rep: CreateDatahubTaskResponse) => void
  ): Promise<CreateDatahubTaskResponse> {
    return this.request("CreateDatahubTask", req, cb)
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
   * 批量修改消费组offset
   */
  async BatchModifyGroupOffsets(
    req: BatchModifyGroupOffsetsRequest,
    cb?: (error: string, rep: BatchModifyGroupOffsetsResponse) => void
  ): Promise<BatchModifyGroupOffsetsResponse> {
    return this.request("BatchModifyGroupOffsets", req, cb)
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
   * 给实例授权token
   */
  async AuthorizeToken(
    req: AuthorizeTokenRequest,
    cb?: (error: string, rep: AuthorizeTokenResponse) => void
  ): Promise<AuthorizeTokenResponse> {
    return this.request("AuthorizeToken", req, cb)
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
   * 查询topic 生产端连接信息
   */
  async DescribeTopicProduceConnection(
    req: DescribeTopicProduceConnectionRequest,
    cb?: (error: string, rep: DescribeTopicProduceConnectionResponse) => void
  ): Promise<DescribeTopicProduceConnectionResponse> {
    return this.request("DescribeTopicProduceConnection", req, cb)
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
   * 添加 ACL 规则
   */
  async CreateAclRule(
    req: CreateAclRuleRequest,
    cb?: (error: string, rep: CreateAclRuleResponse) => void
  ): Promise<CreateAclRuleResponse> {
    return this.request("CreateAclRule", req, cb)
  }

  /**
   * 获取Datahub主题属性
   */
  async DescribeDatahubTopic(
    req: DescribeDatahubTopicRequest,
    cb?: (error: string, rep: DescribeDatahubTopicResponse) => void
  ): Promise<DescribeDatahubTopicResponse> {
    return this.request("DescribeDatahubTopic", req, cb)
  }

  /**
   * 用于查看ckafka的可用区列表
   */
  async DescribeCkafkaZone(
    req: DescribeCkafkaZoneRequest,
    cb?: (error: string, rep: DescribeCkafkaZoneResponse) => void
  ): Promise<DescribeCkafkaZoneResponse> {
    return this.request("DescribeCkafkaZone", req, cb)
  }

  /**
   * 查询Datahub连接源列表
   */
  async DescribeConnectResources(
    req: DescribeConnectResourcesRequest,
    cb?: (error: string, rep: DescribeConnectResourcesResponse) => void
  ): Promise<DescribeConnectResourcesResponse> {
    return this.request("DescribeConnectResources", req, cb)
  }

  /**
   * 用于cdc的专用ckafka集群
   */
  async CreateCdcCluster(
    req: CreateCdcClusterRequest,
    cb?: (error: string, rep: CreateCdcClusterResponse) => void
  ): Promise<CreateCdcClusterResponse> {
    return this.request("CreateCdcCluster", req, cb)
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
   * Ckafka实例购买/续费询价
   */
  async InquireCkafkaPrice(
    req: InquireCkafkaPriceRequest,
    cb?: (error: string, rep: InquireCkafkaPriceResponse) => void
  ): Promise<InquireCkafkaPriceResponse> {
    return this.request("InquireCkafkaPrice", req, cb)
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
}

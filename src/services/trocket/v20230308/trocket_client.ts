/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  DetailedRolePerm,
  DescribeProductSKUsRequest,
  ResetConsumerGroupOffsetResponse,
  DescribeSmoothMigrationTaskListRequest,
  ProductSKU,
  DescribeRoleListResponse,
  DeleteMQTTTopicRequest,
  SmoothMigrationTaskItem,
  CreateInstanceResponse,
  SourceClusterTopicConfig,
  ConsumeGroupItem,
  ModifyRoleResponse,
  DescribeMessageListRequest,
  DeleteMQTTInsPublicEndpointRequest,
  ModifyInstanceRequest,
  MigrationTaskItem,
  FusionInstanceItem,
  InstanceItemExtraInfo,
  CreateMQTTInsPublicEndpointResponse,
  ImportSourceClusterConsumerGroupsResponse,
  TopicStageChangeResult,
  DeleteTopicRequest,
  MigratingTopic,
  DescribeSmoothMigrationTaskListResponse,
  DescribeMigrationTaskListResponse,
  PublicAccessRule,
  VpcInfo,
  DescribeMQTTProductSKUListResponse,
  DescribeRoleListRequest,
  DescribeMQTTClientResponse,
  DescribeMQTTMessageListResponse,
  DescribeMigratingTopicStatsResponse,
  DescribeMQTTProductSKUListRequest,
  DescribeConsumerLagRequest,
  SendMessageRequest,
  DescribeMigratingGroupStatsRequest,
  Tag,
  DescribeSourceClusterGroupListResponse,
  DescribeMessageListResponse,
  DescribeMQTTMessageResponse,
  DeleteSmoothMigrationTaskRequest,
  MQTTInstanceItem,
  DescribeInstanceListResponse,
  DescribeConsumerClientListResponse,
  ModifyInstanceResponse,
  CreateConsumerGroupRequest,
  ClientSubscriptionInfo,
  ChangeMigratingTopicToNextStageResponse,
  DescribeMQTTClientRequest,
  DescribeSourceClusterGroupListRequest,
  DescribeMQTTInsVPCEndpointsResponse,
  DescribeMQTTInsPublicEndpointsResponse,
  DescribeInstanceListRequest,
  ResendDeadLetterMessageResponse,
  MQTTMessageItem,
  DescribeMigrationTaskListRequest,
  DeleteMQTTUserRequest,
  ModifyMQTTInstanceCertBindingRequest,
  VerifyMessageConsumptionResponse,
  CreateMQTTTopicResponse,
  DescribeMQTTInstanceRequest,
  ImportSourceClusterTopicsRequest,
  CreateMQTTUserResponse,
  SourceClusterGroupConfig,
  DeleteInstanceResponse,
  DescribeTopicResponse,
  DeleteMQTTInsPublicEndpointResponse,
  DeleteInstanceRequest,
  ModifyRoleRequest,
  DescribeMQTTInsVPCEndpointsRequest,
  DescribeFusionInstanceListResponse,
  CreateTopicRequest,
  DescribeMessageRequest,
  DeleteRoleRequest,
  MQTTProductSkuItem,
  DescribeMQTTInstanceListResponse,
  DescribeMigratingTopicStatsRequest,
  TagFilter,
  DeleteConsumerGroupRequest,
  CreateConsumerGroupResponse,
  RollbackMigratingTopicStageRequest,
  DescribeMQTTUserListResponse,
  ModifyMQTTUserResponse,
  PriceTag,
  DescribeTopicListByGroupResponse,
  DescribeMessageTraceResponse,
  DoHealthCheckOnMigratingTopicRequest,
  DescribeProducerListRequest,
  DescribeMigratingTopicListResponse,
  ModifyMQTTInsPublicEndpointRequest,
  ModifyMQTTInstanceCertBindingResponse,
  InstanceItem,
  DeleteMQTTInstanceResponse,
  VerifyMessageConsumptionRequest,
  DescribeTopicRequest,
  DeleteMQTTInstanceRequest,
  DescribeMessageTraceRequest,
  DeleteSmoothMigrationTaskResponse,
  CreateTopicResponse,
  DescribeMigratingGroupStatsResponse,
  DescribeMQTTInstanceListRequest,
  ModifyConsumerGroupResponse,
  CreateMQTTInstanceResponse,
  DescribeMQTTInstanceResponse,
  ImportSourceClusterConsumerGroupsRequest,
  MQTTEndpointItem,
  RemoveMigratingTopicRequest,
  DescribeMessageResponse,
  DoHealthCheckOnMigratingTopicResponse,
  DeleteMQTTUserResponse,
  ImportSourceClusterTopicsResponse,
  DescribeTopicListRequest,
  ModifyConsumerGroupRequest,
  DescribeConsumerGroupRequest,
  DescribeConsumerGroupListRequest,
  TopicItem,
  SubscriptionData,
  CreateInstanceRequest,
  ConsumerClient,
  DescribeConsumerGroupResponse,
  DescribeConsumerClientRequest,
  ModifyTopicResponse,
  SendMessageResponse,
  DescribeConsumerLagResponse,
  DescribeMQTTInsPublicEndpointsRequest,
  DeleteRoleResponse,
  DescribeTopicListByGroupRequest,
  DescribeMigratingTopicListRequest,
  Filter,
  ModifyMQTTTopicResponse,
  DescribeMQTTTopicListRequest,
  MQTTClientSubscription,
  MessageTraceItem,
  ModifyTopicRequest,
  DescribeInstanceResponse,
  PacketStatistics,
  DeleteMQTTTopicResponse,
  DescribeConsumerClientResponse,
  DescribeMQTTInstanceCertRequest,
  MessageTrackItem,
  DescribeProducerListResponse,
  ModifyMQTTInsPublicEndpointResponse,
  ResendDeadLetterMessageRequest,
  CreateMQTTUserRequest,
  RollbackMigratingTopicStageResponse,
  DescribeFusionInstanceListRequest,
  DescribeMQTTMessageRequest,
  CustomMapEntry,
  CreateRoleResponse,
  DescribeMQTTTopicListResponse,
  MQTTUserItem,
  ModifyInstanceEndpointRequest,
  ZoneScheduledItem,
  ChangeMigratingTopicToNextStageRequest,
  DescribeMQTTUserListRequest,
  ModifyMQTTInstanceRequest,
  ModifyMQTTInstanceResponse,
  CreateMQTTInstanceRequest,
  DescribeTopicListResponse,
  DescribeConsumerClientListRequest,
  TopicConsumeStats,
  DescribeMQTTTopicRequest,
  CreateRoleRequest,
  DeleteConsumerGroupResponse,
  Endpoint,
  ModifyMQTTTopicRequest,
  StatisticsReport,
  IpRule,
  MessageItem,
  RoleItem,
  MQTTTopicItem,
  DescribeConsumerGroupListResponse,
  ModifyMQTTUserRequest,
  CreateMQTTInsPublicEndpointRequest,
  ProducerInfo,
  CreateMQTTTopicRequest,
  DeleteTopicResponse,
  DescribeMQTTInstanceCertResponse,
  DescribeMQTTTopicResponse,
  ModifyInstanceEndpointResponse,
  DescribeInstanceRequest,
  DescribeProductSKUsResponse,
  RemoveMigratingTopicResponse,
  DescribeMQTTMessageListRequest,
  ResetConsumerGroupOffsetRequest,
} from "./trocket_models"

/**
 * trocket client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("trocket.tencentcloudapi.com", "2023-03-08", clientConfig)
  }

  /**
     * 消息消费验证。
当前 API 适用集群：5.x 集群。4.x 集群的消息消费验证接口文档见 [VerifyRocketMQConsume](https://cloud.tencent.com/document/api/1179/101061)。
     */
  async VerifyMessageConsumption(
    req: VerifyMessageConsumptionRequest,
    cb?: (error: string, rep: VerifyMessageConsumptionResponse) => void
  ): Promise<VerifyMessageConsumptionResponse> {
    return this.request("VerifyMessageConsumption", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

查询消息列表，如查询死信，请设置ConsumerGroup参数
     */
  async DescribeMQTTMessageList(
    req: DescribeMQTTMessageListRequest,
    cb?: (error: string, rep: DescribeMQTTMessageListResponse) => void
  ): Promise<DescribeMQTTMessageListResponse> {
    return this.request("DescribeMQTTMessageList", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

更新MQTT集群绑定证书
参数传空，则为删除证书
     */
  async ModifyMQTTInstanceCertBinding(
    req: ModifyMQTTInstanceCertBindingRequest,
    cb?: (error: string, rep: ModifyMQTTInstanceCertBindingResponse) => void
  ): Promise<ModifyMQTTInstanceCertBindingResponse> {
    return this.request("ModifyMQTTInstanceCertBinding", req, cb)
  }

  /**
   * 修改 RocketMQ 5.x 集群接入点，操作前请先确认接入点已存在。
   */
  async ModifyInstanceEndpoint(
    req: ModifyInstanceEndpointRequest,
    cb?: (error: string, rep: ModifyInstanceEndpointResponse) => void
  ): Promise<ModifyInstanceEndpointResponse> {
    return this.request("ModifyInstanceEndpoint", req, cb)
  }

  /**
     * 查询Topic迁移状态列表。

Filters字段为查询过滤器，支持以下条件：
* TopicName 主题名称，支持模糊查询
* MigrationStatus 迁移状态，可参考[MigratingTopic](https://cloud.tencent.com/document/api/1493/96031#MigratingTopic)数据结构
* Namespace 命名空间，仅4.x集群有效

Filters示例：
[{
    "Name": "TopicName",
    "Values": ["topic-a"]
}]
     */
  async DescribeMigratingTopicList(
    req: DescribeMigratingTopicListRequest,
    cb?: (error: string, rep: DescribeMigratingTopicListResponse) => void
  ): Promise<DescribeMigratingTopicListResponse> {
    return this.request("DescribeMigratingTopicList", req, cb)
  }

  /**
     * 根据消息 ID 查询消息轨迹。
当前 API 适用集群：5.x 集群。4.x 集群查询消息轨迹接口文档见 [DescribeRocketMQMsgTrace](https://cloud.tencent.com/document/product/1179/97760)。
     */
  async DescribeMessageTrace(
    req: DescribeMessageTraceRequest,
    cb?: (error: string, rep: DescribeMessageTraceResponse) => void
  ): Promise<DescribeMessageTraceResponse> {
    return this.request("DescribeMessageTrace", req, cb)
  }

  /**
     * 修改主题属性。
当前 API 适用集群：5.x 集群。4.x 集群的修改主题属性接口文档见 [ModifyRocketMQTopic](https://cloud.tencent.com/document/api/1179/63414)。
     */
  async ModifyTopic(
    req: ModifyTopicRequest,
    cb?: (error: string, rep: ModifyTopicResponse) => void
  ): Promise<ModifyTopicResponse> {
    return this.request("ModifyTopic", req, cb)
  }

  /**
     * 查询消费组订阅的主题列表，Filter参数使用说明如下：

- TopicName 主题名称，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得。

Filters示例： 
[{ "Name": "TopicName", "Values": ["test_topic"] }]
当前 API 适用集群：5.x 集群。4.x 集群的查询消费组订阅的主题列表接口文档见 [DescribeRocketMQTopicsByGroup](https://cloud.tencent.com/document/product/1179/108863)。
     */
  async DescribeTopicListByGroup(
    req: DescribeTopicListByGroupRequest,
    cb?: (error: string, rep: DescribeTopicListByGroupResponse) => void
  ): Promise<DescribeTopicListByGroupResponse> {
    return this.request("DescribeTopicListByGroup", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

修改主题属性
     */
  async ModifyMQTTTopic(
    req: ModifyMQTTTopicRequest,
    cb?: (error: string, rep: ModifyMQTTTopicResponse) => void
  ): Promise<ModifyMQTTTopicResponse> {
    return this.request("ModifyMQTTTopic", req, cb)
  }

  /**
   * 从迁移列表中移除主题，仅当主题处于初始状态时有效
   */
  async RemoveMigratingTopic(
    req: RemoveMigratingTopicRequest,
    cb?: (error: string, rep: RemoveMigratingTopicResponse) => void
  ): Promise<RemoveMigratingTopicResponse> {
    return this.request("RemoveMigratingTopic", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

删除MQTT访问用户
     */
  async DeleteMQTTUser(
    req: DeleteMQTTUserRequest,
    cb?: (error: string, rep: DeleteMQTTUserResponse) => void
  ): Promise<DeleteMQTTUserResponse> {
    return this.request("DeleteMQTTUser", req, cb)
  }

  /**
     * 添加角色。
当前 API 适用集群：5.x 集群。4.x 集群的创建角色接口文档见 [CreateRocketMQRole](https://cloud.tencent.com/document/product/1179/107538)，给角色授权接口文档见 [CreateRocketMQEnvironmentRole](https://cloud.tencent.com/document/product/1179/107539)。
     */
  async CreateRole(
    req: CreateRoleRequest,
    cb?: (error: string, rep: CreateRoleResponse) => void
  ): Promise<CreateRoleResponse> {
    return this.request("CreateRole", req, cb)
  }

  /**
   * 导入消费者组列表
   */
  async ImportSourceClusterConsumerGroups(
    req: ImportSourceClusterConsumerGroupsRequest,
    cb?: (error: string, rep: ImportSourceClusterConsumerGroupsResponse) => void
  ): Promise<ImportSourceClusterConsumerGroupsResponse> {
    return this.request("ImportSourceClusterConsumerGroups", req, cb)
  }

  /**
     * 用于查询平滑迁移任务列表。

查询参数Filters， 支持的字段如下：
* TaskStatus, 任务状态，支持多选 
* ConnectionType，网络连接类型，支持多选，参考[SmoothMigrationTaskItem](https://cloud.tencent.com/document/api/1493/96031#SmoothMigrationTaskItem)的说明
* InstanceId，实例ID，精确搜索 
* TaskName，任务名称，支持模糊搜索

Filters示例：
[{
    "Name": "InstanceId",
    "Values": ["rmq-1gzecldfg"]
}]
     */
  async DescribeSmoothMigrationTaskList(
    req: DescribeSmoothMigrationTaskListRequest,
    cb?: (error: string, rep: DescribeSmoothMigrationTaskListResponse) => void
  ): Promise<DescribeSmoothMigrationTaskListResponse> {
    return this.request("DescribeSmoothMigrationTaskList", req, cb)
  }

  /**
     * 发送 RocketMQ 消息，该接口仅用于控制台发送少量测试消息，不保证 SLA，且云 API 存在限流，在真实业务场景下，请使用 RocketMQ SDK 发送消息。
当前 API 适用集群：5.x 集群。4.x 集群的发送消息接口文档见 [SendRocketMQMessage](https://cloud.tencent.com/document/api/1179/94179)。
     */
  async SendMessage(
    req: SendMessageRequest,
    cb?: (error: string, rep: SendMessageResponse) => void
  ): Promise<SendMessageResponse> {
    return this.request("SendMessage", req, cb)
  }

  /**
     * 删除 RocketMQ 5.x 集群，删除前请先删除正在使用的主题、消费组和角色信息。
当前 API 适用集群：5.x 集群。删除 4.x 集群接口文档见 [DeleteRocketMQVipInstance](https://cloud.tencent.com/document/product/1179/95802)。
     */
  async DeleteInstance(
    req: DeleteInstanceRequest,
    cb?: (error: string, rep: DeleteInstanceResponse) => void
  ): Promise<DeleteInstanceResponse> {
    return this.request("DeleteInstance", req, cb)
  }

  /**
     * 创建消费组。
当前 API 适用集群：5.x 集群。4.x 集群的创建消费组接口文档见 [CreateRocketMQGroup](https://cloud.tencent.com/document/api/1179/63428)。
     */
  async CreateConsumerGroup(
    req: CreateConsumerGroupRequest,
    cb?: (error: string, rep: CreateConsumerGroupResponse) => void
  ): Promise<CreateConsumerGroupResponse> {
    return this.request("CreateConsumerGroup", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

获取产品售卖规格
     */
  async DescribeMQTTProductSKUList(
    req?: DescribeMQTTProductSKUListRequest,
    cb?: (error: string, rep: DescribeMQTTProductSKUListResponse) => void
  ): Promise<DescribeMQTTProductSKUListResponse> {
    return this.request("DescribeMQTTProductSKUList", req, cb)
  }

  /**
     * 平滑迁移过程获取源集群group列表接口。

Filters字段为查询过滤器，支持以下字段：
* GroupName，消费组名称，支持模糊搜索
* Imported，是否已导入
* ImportStatus，导入状态，参考[SourceClusterGroupConfig](https://cloud.tencent.com/document/api/1493/96031#SourceClusterGroupConfig)的说明
* Namespace，命名空间，仅4.x集群有效

Filters示例：
[{
    "Name": "GroupName",
    "Values": ["group-a"]
}]
     */
  async DescribeSourceClusterGroupList(
    req: DescribeSourceClusterGroupListRequest,
    cb?: (error: string, rep: DescribeSourceClusterGroupListResponse) => void
  ): Promise<DescribeSourceClusterGroupListResponse> {
    return this.request("DescribeSourceClusterGroupList", req, cb)
  }

  /**
   * 检查迁移中的主题是否处于正常状态，只有处于正常状态的主题，才可以进入下一个迁移阶段
   */
  async DoHealthCheckOnMigratingTopic(
    req: DoHealthCheckOnMigratingTopicRequest,
    cb?: (error: string, rep: DoHealthCheckOnMigratingTopicResponse) => void
  ): Promise<DoHealthCheckOnMigratingTopicResponse> {
    return this.request("DoHealthCheckOnMigratingTopic", req, cb)
  }

  /**
     * 查询消息详情。
当前 API 适用集群：5.x 集群。4.x 集群的查询消息详情接口文档见 [DescribeRocketMQMsg](https://cloud.tencent.com/document/product/1179/91055)。
     */
  async DescribeMessage(
    req: DescribeMessageRequest,
    cb?: (error: string, rep: DescribeMessageResponse) => void
  ): Promise<DescribeMessageResponse> {
    return this.request("DescribeMessage", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

查询用户列表，Filter参数使用说明如下：

1. Username，用户名称模糊搜索
     */
  async DescribeMQTTUserList(
    req: DescribeMQTTUserListRequest,
    cb?: (error: string, rep: DescribeMQTTUserListResponse) => void
  ): Promise<DescribeMQTTUserListResponse> {
    return this.request("DescribeMQTTUserList", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

删除MQTT实例的公网接入点
     */
  async DeleteMQTTInsPublicEndpoint(
    req: DeleteMQTTInsPublicEndpointRequest,
    cb?: (error: string, rep: DeleteMQTTInsPublicEndpointResponse) => void
  ): Promise<DeleteMQTTInsPublicEndpointResponse> {
    return this.request("DeleteMQTTInsPublicEndpoint", req, cb)
  }

  /**
     * 查询角色列表，Filter参数使用说明如下：

- RoleName 角色名称，支持模糊搜索，从本接口返回值或控制台获得
- AccessKey AccessKey，支持模糊搜索，从本接口返回值或控制台获得

Filters示例： 
[{ "Name": "RoleName", "Values": ["test_role"] }]
当前 API 适用集群：5.x 集群。4.x 集群的查询角色列表接口文档见 [DescribeRocketMQRoles](https://cloud.tencent.com/document/product/1179/107534)，查询角色授权列表接口文档见 [DescribeRocketMQEnvironmentRoles](https://cloud.tencent.com/document/product/1179/107535)。
     */
  async DescribeRoleList(
    req: DescribeRoleListRequest,
    cb?: (error: string, rep: DescribeRoleListResponse) => void
  ): Promise<DescribeRoleListResponse> {
    return this.request("DescribeRoleList", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

修改MQTT角色
     */
  async ModifyMQTTUser(
    req: ModifyMQTTUserRequest,
    cb?: (error: string, rep: ModifyMQTTUserResponse) => void
  ): Promise<ModifyMQTTUserResponse> {
    return this.request("ModifyMQTTUser", req, cb)
  }

  /**
     * 删除消费组。消费者组删除后，消费者组的所有配置和相关数据都会被清空，且无法找回。删除后，在线的消费者客户端会出现报错，建议您提前下线客户端。
当前 API 适用集群：5.x 集群。4.x 集群的删除消费组接口文档见 [DeleteRocketMQGroup](https://cloud.tencent.com/document/api/1179/63424)。
     */
  async DeleteConsumerGroup(
    req: DeleteConsumerGroupRequest,
    cb?: (error: string, rep: DeleteConsumerGroupResponse) => void
  ): Promise<DeleteConsumerGroupResponse> {
    return this.request("DeleteConsumerGroup", req, cb)
  }

  /**
     * 查询主题关联的生产者列表信息，Filters支持以下筛选条件：
- ClientIP，客户端IP
- ClientID，客户端ID
当前 API 适用集群：5.x 集群。4.x 集群的查询生产者客户端列表接口文档见 [DescribeRocketMQProducers](https://cloud.tencent.com/document/api/1179/122749)。
     */
  async DescribeProducerList(
    req: DescribeProducerListRequest,
    cb?: (error: string, rep: DescribeProducerListResponse) => void
  ): Promise<DescribeProducerListResponse> {
    return this.request("DescribeProducerList", req, cb)
  }

  /**
     * 修改消费组属性。
当前 API 适用集群：5.x 集群。4.x 集群的修改消费组属性接口文档见 [ModifyRocketMQGroup](https://cloud.tencent.com/document/api/1179/63416)。
     */
  async ModifyConsumerGroup(
    req: ModifyConsumerGroupRequest,
    cb?: (error: string, rep: ModifyConsumerGroupResponse) => void
  ): Promise<ModifyConsumerGroupResponse> {
    return this.request("ModifyConsumerGroup", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

查询MQTT实例公网接入点
     */
  async DescribeMQTTInsVPCEndpoints(
    req: DescribeMQTTInsVPCEndpointsRequest,
    cb?: (error: string, rep: DescribeMQTTInsVPCEndpointsResponse) => void
  ): Promise<DescribeMQTTInsVPCEndpointsResponse> {
    return this.request("DescribeMQTTInsVPCEndpoints", req, cb)
  }

  /**
     * 查询消费者客户端详情。
当前 API 适用集群：5.x 集群。4.x 集群的查询消费者客户端详情接口文档见 [DescribeRocketMQConsumerConnectionDetail](https://cloud.tencent.com/document/product/1179/102490)。
     */
  async DescribeConsumerClient(
    req: DescribeConsumerClientRequest,
    cb?: (error: string, rep: DescribeConsumerClientResponse) => void
  ): Promise<DescribeConsumerClientResponse> {
    return this.request("DescribeConsumerClient", req, cb)
  }

  /**
   * 查看迁移消费组的实时信息
   */
  async DescribeMigratingGroupStats(
    req: DescribeMigratingGroupStatsRequest,
    cb?: (error: string, rep: DescribeMigratingGroupStatsResponse) => void
  ): Promise<DescribeMigratingGroupStatsResponse> {
    return this.request("DescribeMigratingGroupStats", req, cb)
  }

  /**
     * 删除角色。请确保该角色相关信息不在当前代码中被使用。删除角色后，原先使用该角色进行生产或消费消息的密钥（AccessKey 和 SecretKey）将立即失效。
当前 API 适用集群：5.x 集群。4.x 集群的删除角色接口文档见 [DeleteRocketMQRoles](https://cloud.tencent.com/document/product/1179/107536)，删除角色授权接口文档见 [DeleteRocketMQEnvironmentRoles](https://cloud.tencent.com/document/product/1179/107537)。
     */
  async DeleteRole(
    req: DeleteRoleRequest,
    cb?: (error: string, rep: DeleteRoleResponse) => void
  ): Promise<DeleteRoleResponse> {
    return this.request("DeleteRole", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

删除MQTT实例
     */
  async DeleteMQTTInstance(
    req: DeleteMQTTInstanceRequest,
    cb?: (error: string, rep: DeleteMQTTInstanceResponse) => void
  ): Promise<DeleteMQTTInstanceResponse> {
    return this.request("DeleteMQTTInstance", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

查询MQTT消息详情
     */
  async DescribeMQTTMessage(
    req: DescribeMQTTMessageRequest,
    cb?: (error: string, rep: DescribeMQTTMessageResponse) => void
  ): Promise<DescribeMQTTMessageResponse> {
    return this.request("DescribeMQTTMessage", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

更新MQTT实例公网接入点
     */
  async ModifyMQTTInsPublicEndpoint(
    req: ModifyMQTTInsPublicEndpointRequest,
    cb?: (error: string, rep: ModifyMQTTInsPublicEndpointResponse) => void
  ): Promise<ModifyMQTTInsPublicEndpointResponse> {
    return this.request("ModifyMQTTInsPublicEndpoint", req, cb)
  }

  /**
   * 修改迁移中的Topic状态进入下一步
   */
  async ChangeMigratingTopicToNextStage(
    req: ChangeMigratingTopicToNextStageRequest,
    cb?: (error: string, rep: ChangeMigratingTopicToNextStageResponse) => void
  ): Promise<ChangeMigratingTopicToNextStageResponse> {
    return this.request("ChangeMigratingTopicToNextStage", req, cb)
  }

  /**
     * 查询指定消费组堆积数。
当前 API 适用集群：4.x 集群和 5.x 集群。
     */
  async DescribeConsumerLag(
    req: DescribeConsumerLagRequest,
    cb?: (error: string, rep: DescribeConsumerLagResponse) => void
  ): Promise<DescribeConsumerLagResponse> {
    return this.request("DescribeConsumerLag", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

查询mqtt主题详情
     */
  async DescribeMQTTTopic(
    req: DescribeMQTTTopicRequest,
    cb?: (error: string, rep: DescribeMQTTTopicResponse) => void
  ): Promise<DescribeMQTTTopicResponse> {
    return this.request("DescribeMQTTTopic", req, cb)
  }

  /**
   * 查询产品售卖规格，针对 RocketMQ 5.x 集群。
   */
  async DescribeProductSKUs(
    req?: DescribeProductSKUsRequest,
    cb?: (error: string, rep: DescribeProductSKUsResponse) => void
  ): Promise<DescribeProductSKUsResponse> {
    return this.request("DescribeProductSKUs", req, cb)
  }

  /**
     * 修改 RocketMQ 5.x 集群属性，仅支持修改运行中的集群。
当前 API 适用集群：5.x 集群。修改 4.x 集群属性的接口文档见 [ModifyRocketMQInstance](https://cloud.tencent.com/document/product/1179/108862)。
     */
  async ModifyInstance(
    req: ModifyInstanceRequest,
    cb?: (error: string, rep: ModifyInstanceResponse) => void
  ): Promise<ModifyInstanceResponse> {
    return this.request("ModifyInstance", req, cb)
  }

  /**
     * 查询消费组详情。
当前 API 适用集群：5.x 集群。4.x 集群的查询消费组详情接口文档见 [DescribeRocketMQConsumerConnections](https://cloud.tencent.com/document/product/1179/100460)。
     */
  async DescribeConsumerGroup(
    req: DescribeConsumerGroupRequest,
    cb?: (error: string, rep: DescribeConsumerGroupResponse) => void
  ): Promise<DescribeConsumerGroupResponse> {
    return this.request("DescribeConsumerGroup", req, cb)
  }

  /**
     * 创建 RocketMQ 主题。
当前 API 适用集群：5.x 集群。4.x 集群的创建主题接口文档见 [CreateRocketMQTopic](https://cloud.tencent.com/document/api/1179/63426)
     */
  async CreateTopic(
    req: CreateTopicRequest,
    cb?: (error: string, rep: CreateTopicResponse) => void
  ): Promise<CreateTopicResponse> {
    return this.request("CreateTopic", req, cb)
  }

  /**
     * 查询消息列表。如果查询死信消息，请设置ConsumerGroup参数。
当前 API 适用集群：5.x 集群。4.x 集群的查询消息列表接口文档见 [DescribeRocketMQTopicMsgs](https://cloud.tencent.com/document/product/1179/97761)。
     */
  async DescribeMessageList(
    req: DescribeMessageListRequest,
    cb?: (error: string, rep: DescribeMessageListResponse) => void
  ): Promise<DescribeMessageListResponse> {
    return this.request("DescribeMessageList", req, cb)
  }

  /**
     * 重置消费位点。
当前 API 适用集群：5.x 集群。4.x 集群的重置消费位点接口文档见 [ResetRocketMQConsumerOffSet](https://cloud.tencent.com/document/api/1179/71662)。
     */
  async ResetConsumerGroupOffset(
    req: ResetConsumerGroupOffsetRequest,
    cb?: (error: string, rep: ResetConsumerGroupOffsetResponse) => void
  ): Promise<ResetConsumerGroupOffsetResponse> {
    return this.request("ResetConsumerGroupOffset", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
  async DescribeMQTTTopicList(
    req: DescribeMQTTTopicListRequest,
    cb?: (error: string, rep: DescribeMQTTTopicListResponse) => void
  ): Promise<DescribeMQTTTopicListResponse> {
    return this.request("DescribeMQTTTopicList", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

查询实例信息
     */
  async DescribeMQTTInstance(
    req: DescribeMQTTInstanceRequest,
    cb?: (error: string, rep: DescribeMQTTInstanceResponse) => void
  ): Promise<DescribeMQTTInstanceResponse> {
    return this.request("DescribeMQTTInstance", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

创建主题
     */
  async CreateMQTTTopic(
    req: CreateMQTTTopicRequest,
    cb?: (error: string, rep: CreateMQTTTopicResponse) => void
  ): Promise<CreateMQTTTopicResponse> {
    return this.request("CreateMQTTTopic", req, cb)
  }

  /**
     * 创建 RocketMQ 5.x 集群。
当前 API 适用集群：5.x 集群。创建 4.x 专享/通用集群的接口文档见 [CreateRocketMQVipInstance](https://cloud.tencent.com/document/product/1179/95721)。
     */
  async CreateInstance(
    req: CreateInstanceRequest,
    cb?: (error: string, rep: CreateInstanceResponse) => void
  ): Promise<CreateInstanceResponse> {
    return this.request("CreateInstance", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

删除MQTT主题
     */
  async DeleteMQTTTopic(
    req: DeleteMQTTTopicRequest,
    cb?: (error: string, rep: DeleteMQTTTopicResponse) => void
  ): Promise<DeleteMQTTTopicResponse> {
    return this.request("DeleteMQTTTopic", req, cb)
  }

  /**
     * 查询 RocketMQ 5.x 集群信息。
当前 API 适用集群：5.x 集群。查询 4.x 专享/通用集群信息的接口文档见 [DescribeRocketMQVipInstanceDetail](https://cloud.tencent.com/document/product/1179/86725)。
     */
  async DescribeInstance(
    req: DescribeInstanceRequest,
    cb?: (error: string, rep: DescribeInstanceResponse) => void
  ): Promise<DescribeInstanceResponse> {
    return this.request("DescribeInstance", req, cb)
  }

  /**
   * 导入topic列表
   */
  async ImportSourceClusterTopics(
    req: ImportSourceClusterTopicsRequest,
    cb?: (error: string, rep: ImportSourceClusterTopicsResponse) => void
  ): Promise<ImportSourceClusterTopicsResponse> {
    return this.request("ImportSourceClusterTopics", req, cb)
  }

  /**
     * 获取主题列表，Filter参数使用说明如下：

- TopicName 主题名称，支持模糊搜索，从 [DescribeTopicList](https://cloud.tencent.com/document/api/1493/96030) 接口返回的 [TopicItem](https://cloud.tencent.com/document/api/1493/96031#TopicItem) 或控制台获得
- TopicType 主题类型查询，支持多选，参考 [DescribeTopic](https://cloud.tencent.com/document/api/1493/97945) 接口 TopicType 字段

Filters示例：
 [{ "Name": "TopicName", "Values": ["test_topic"] }]
当前 API 适用集群：5.x 集群。4.x 集群的获取主题列表接口文档见 [DescribeRocketMQTopics](https://cloud.tencent.com/document/api/1179/63418)。
     */
  async DescribeTopicList(
    req: DescribeTopicListRequest,
    cb?: (error: string, rep: DescribeTopicListResponse) => void
  ): Promise<DescribeTopicListResponse> {
    return this.request("DescribeTopicList", req, cb)
  }

  /**
     * 重新发送死信消息。
当前 API 适用集群：5.x集群。4.x 集群的重发死信消息接口文档见 [RetryRocketMQDlqMessage](https://cloud.tencent.com/document/api/1179/114595)。
     */
  async ResendDeadLetterMessage(
    req: ResendDeadLetterMessageRequest,
    cb?: (error: string, rep: ResendDeadLetterMessageResponse) => void
  ): Promise<ResendDeadLetterMessageResponse> {
    return this.request("ResendDeadLetterMessage", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

查询MQTT实例公网接入点
     */
  async DescribeMQTTInsPublicEndpoints(
    req: DescribeMQTTInsPublicEndpointsRequest,
    cb?: (error: string, rep: DescribeMQTTInsPublicEndpointsResponse) => void
  ): Promise<DescribeMQTTInsPublicEndpointsResponse> {
    return this.request("DescribeMQTTInsPublicEndpoints", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

查询MQTT集群证书列表
     */
  async DescribeMQTTInstanceCert(
    req: DescribeMQTTInstanceCertRequest,
    cb?: (error: string, rep: DescribeMQTTInstanceCertResponse) => void
  ): Promise<DescribeMQTTInstanceCertResponse> {
    return this.request("DescribeMQTTInstanceCert", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

修改实例属性
     */
  async ModifyMQTTInstance(
    req: ModifyMQTTInstanceRequest,
    cb?: (error: string, rep: ModifyMQTTInstanceResponse) => void
  ): Promise<ModifyMQTTInstanceResponse> {
    return this.request("ModifyMQTTInstance", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
  async DescribeMQTTInstanceList(
    req: DescribeMQTTInstanceListRequest,
    cb?: (error: string, rep: DescribeMQTTInstanceListResponse) => void
  ): Promise<DescribeMQTTInstanceListResponse> {
    return this.request("DescribeMQTTInstanceList", req, cb)
  }

  /**
     * 获取消费组列表，Filter参数使用说明如下：

- ConsumerGroupName 消费组名称，支持模糊查询，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。
- ConsumeMessageOrderly，投递顺序性，枚举值如下：
    - true 顺序投递
    - false 并发投递

Filters示例： 
[{ "Name": "ConsumeMessageOrderly", "Values": ["true"] }]
当前 API 适用集群：5.x 集群。4.x 集群的获取消费组列表接口文档见 [DescribeRocketMQGroups](https://cloud.tencent.com/document/api/1179/63420)。
     */
  async DescribeConsumerGroupList(
    req: DescribeConsumerGroupListRequest,
    cb?: (error: string, rep: DescribeConsumerGroupListResponse) => void
  ): Promise<DescribeConsumerGroupListResponse> {
    return this.request("DescribeConsumerGroupList", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

购买新的MQTT实例
     */
  async CreateMQTTInstance(
    req: CreateMQTTInstanceRequest,
    cb?: (error: string, rep: CreateMQTTInstanceResponse) => void
  ): Promise<CreateMQTTInstanceResponse> {
    return this.request("CreateMQTTInstance", req, cb)
  }

  /**
     * 查询集群列表，仅支持 5.x 集群。Filters参数使用说明如下：

- InstanceName 集群名称，支持模糊搜索
- InstanceId 腾讯云 RocketMQ 实例 ID，从 [DescribeFusionInstanceList](https://cloud.tencent.com/document/api/1493/106745) 接口或控制台获得
- InstanceType 集群类型，可参考 [InstanceItem](https://cloud.tencent.com/document/api/1493/96031#InstanceItem) 数据结构，支持多选
- InstanceStatus 集群状态，可参考 [InstanceItem](https://cloud.tencent.com/document/api/1493/96031#InstanceItem) 数据结构，支持多选

Filters示例：
[{
    "Name": "InstanceId",
    "Values": ["rmq-72mo3a9o"]
}]
     */
  async DescribeInstanceList(
    req: DescribeInstanceListRequest,
    cb?: (error: string, rep: DescribeInstanceListResponse) => void
  ): Promise<DescribeInstanceListResponse> {
    return this.request("DescribeInstanceList", req, cb)
  }

  /**
     * 查询集群列表，支持 4.x 和 5.x 集群，其中 Filters 参数使用说明如下：

- InstanceName 集群名称，支持模糊查询，从本接口返回值或控制台获得
- InstanceId 集群ID，精确查询，从当前接口或控制台获得
- InstanceType 集群类型，可参考 [InstanceItem](https://cloud.tencent.com/document/api/1493/96031#InstanceItem) 数据结构，支持多选
- Version 集群版本，枚举值如下：
    - 4 RocketMQ 4.x 集群
    - 5 RocketMQ 5.x 集群

Filters示例：
 [{ "Name": "InstanceId", "Values": ["rmq-72mo3a9o"] }]
     */
  async DescribeFusionInstanceList(
    req: DescribeFusionInstanceListRequest,
    cb?: (error: string, rep: DescribeFusionInstanceListResponse) => void
  ): Promise<DescribeFusionInstanceListResponse> {
    return this.request("DescribeFusionInstanceList", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

添加mqtt角色
     */
  async CreateMQTTUser(
    req: CreateMQTTUserRequest,
    cb?: (error: string, rep: CreateMQTTUserResponse) => void
  ): Promise<CreateMQTTUserResponse> {
    return this.request("CreateMQTTUser", req, cb)
  }

  /**
     * 修改角色。
当前 API 适用集群：5.x 集群。4.x 集群的修改角色接口文档见 [ModifyRocketMQRole](https://cloud.tencent.com/document/product/1179/107532)，修改角色的授权接口文档见 [ModifyRocketMQEnvironmentRole](https://cloud.tencent.com/document/product/1179/107533)。
     */
  async ModifyRole(
    req: ModifyRoleRequest,
    cb?: (error: string, rep: ModifyRoleResponse) => void
  ): Promise<ModifyRoleResponse> {
    return this.request("ModifyRole", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

查询 MQTT 客户端详情
     */
  async DescribeMQTTClient(
    req: DescribeMQTTClientRequest,
    cb?: (error: string, rep: DescribeMQTTClientResponse) => void
  ): Promise<DescribeMQTTClientResponse> {
    return this.request("DescribeMQTTClient", req, cb)
  }

  /**
     * 查询主题详情，Offset和Limit参数是指订阅该主题的消费组查询分页参数，Filter参数使用说明如下：

- ConsumerGroup 消费组名称，从 [DescribeConsumerGroupList](https://cloud.tencent.com/document/api/1493/101535) 接口返回的 [ConsumeGroupItem](https://cloud.tencent.com/document/api/1493/96031#ConsumeGroupItem) 或控制台获得。

Filters示例： 
[{ "Name": "ConsumerGroup", "Values": ["test_group"] }]
     */
  async DescribeTopic(
    req: DescribeTopicRequest,
    cb?: (error: string, rep: DescribeTopicResponse) => void
  ): Promise<DescribeTopicResponse> {
    return this.request("DescribeTopic", req, cb)
  }

  /**
     * 获取数据迁移任务列表，Filter参数使用说明如下：

TaskId，根据任务ID精确查找
InstanceId，根据实例ID精确查找
Type，根据任务类型精确查找
     */
  async DescribeMigrationTaskList(
    req: DescribeMigrationTaskListRequest,
    cb?: (error: string, rep: DescribeMigrationTaskListResponse) => void
  ): Promise<DescribeMigrationTaskListResponse> {
    return this.request("DescribeMigrationTaskList", req, cb)
  }

  /**
     * 查询消费组下的客户端连接列表。
当前 API 适用集群：5.x 集群。4.x 集群的查询消费组下的客户端列表接口文档见 [DescribeRocketMQConsumerConnections](https://cloud.tencent.com/document/product/1179/100460)。
     */
  async DescribeConsumerClientList(
    req: DescribeConsumerClientListRequest,
    cb?: (error: string, rep: DescribeConsumerClientListResponse) => void
  ): Promise<DescribeConsumerClientListResponse> {
    return this.request("DescribeConsumerClientList", req, cb)
  }

  /**
   * 用于查询迁移主题的实时数据
   */
  async DescribeMigratingTopicStats(
    req: DescribeMigratingTopicStatsRequest,
    cb?: (error: string, rep: DescribeMigratingTopicStatsResponse) => void
  ): Promise<DescribeMigratingTopicStatsResponse> {
    return this.request("DescribeMigratingTopicStats", req, cb)
  }

  /**
     * 删除主题。主题删除后，主题的所有配置和相关数据都会被清空，且无法找回。
当前 API 适用集群：5.x 集群。4.x 集群的删除主题接口文档见 [DeleteRocketMQTopic](https://cloud.tencent.com/document/api/1179/63423)。
     */
  async DeleteTopic(
    req: DeleteTopicRequest,
    cb?: (error: string, rep: DeleteTopicResponse) => void
  ): Promise<DeleteTopicResponse> {
    return this.request("DeleteTopic", req, cb)
  }

  /**
   * 删除平滑迁移任务，只有被取消的任务才可删除
   */
  async DeleteSmoothMigrationTask(
    req: DeleteSmoothMigrationTaskRequest,
    cb?: (error: string, rep: DeleteSmoothMigrationTaskResponse) => void
  ): Promise<DeleteSmoothMigrationTaskResponse> {
    return this.request("DeleteSmoothMigrationTask", req, cb)
  }

  /**
   * 回滚正在迁移的主题至前一个阶段
   */
  async RollbackMigratingTopicStage(
    req: RollbackMigratingTopicStageRequest,
    cb?: (error: string, rep: RollbackMigratingTopicStageResponse) => void
  ): Promise<RollbackMigratingTopicStageResponse> {
    return this.request("RollbackMigratingTopicStage", req, cb)
  }

  /**
     * 下线trocket下mqtt接口

为MQTT实例创建公网接入点
     */
  async CreateMQTTInsPublicEndpoint(
    req: CreateMQTTInsPublicEndpointRequest,
    cb?: (error: string, rep: CreateMQTTInsPublicEndpointResponse) => void
  ): Promise<CreateMQTTInsPublicEndpointResponse> {
    return this.request("CreateMQTTInsPublicEndpoint", req, cb)
  }
}

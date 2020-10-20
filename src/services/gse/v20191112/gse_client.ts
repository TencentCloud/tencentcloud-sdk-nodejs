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
  DeleteGameServerSessionQueueRequest,
  FleetAttributes,
  CreateAssetResponse,
  InboundPermission,
  GetInstanceAccessResponse,
  Asset,
  ListAliasesResponse,
  DeleteGameServerSessionQueueResponse,
  DescribeFleetAttributesRequest,
  ResolveAliasRequest,
  StartGameServerSessionPlacementResponse,
  DescribeFleetStatisticDetailsRequest,
  GetInstanceAccessRequest,
  CreateFleetRequest,
  StartFleetActionsRequest,
  UpdateFleetPortSettingsResponse,
  DescribeInstancesResponse,
  ListFleetsResponse,
  DeleteAssetResponse,
  DescribeFleetUtilizationResponse,
  DescribeScalingPoliciesRequest,
  DeleteFleetRequest,
  DetachCcnInstancesResponse,
  DescribeFleetPortSettingsResponse,
  DescribeUserQuotasRequest,
  UpdateAssetRequest,
  DesiredPlayerSession,
  UpdateFleetPortSettingsRequest,
  DescribeFleetStatisticFlowsRequest,
  UpdateAliasRequest,
  GameServerSessionPlacement,
  JoinGameServerSessionBatchRequest,
  GameServerSessionQueue,
  UpdateFleetCapacityResponse,
  DescribeRuntimeConfigurationResponse,
  CreateGameServerSessionRequest,
  UpdateAliasResponse,
  GameServerSessionDetail,
  UpdateGameServerSessionQueueResponse,
  DescribeGameServerSessionQueuesRequest,
  GetUploadFederationTokenResponse,
  DeleteScalingPolicyResponse,
  DescribeFleetStatisticSummaryRequest,
  PlayerDataMap,
  ResolveAliasResponse,
  DescribeInstancesExtendResponse,
  Event,
  UpdateRuntimeConfigurationResponse,
  DescribeCcnInstancesResponse,
  DescribeInstanceLimitResponse,
  DescribeAssetResponse,
  PlacedPlayerSession,
  DescribeFleetStatisticSummaryResponse,
  FleetUtilization,
  DescribeGameServerSessionQueuesResponse,
  DeleteAliasRequest,
  DescribeFleetAttributesResponse,
  GetUploadCredentialsResponse,
  AttachCcnInstancesRequest,
  InboundPermissionRevocations,
  DescribeAssetsRequest,
  SetServerWeightResponse,
  ScalingPolicy,
  DescribeGameServerSessionsRequest,
  GetUploadCredentialsRequest,
  DescribePlayerSessionsRequest,
  DeleteAssetRequest,
  DescribeAssetsResponse,
  DescribeFleetCapacityRequest,
  DescribeCcnInstancesRequest,
  DescribeFleetStatisticDetailsResponse,
  UpdateGameServerSessionQueueRequest,
  JoinGameServerSessionResponse,
  AssetCredentials,
  TargetConfiguration,
  DescribeGameServerSessionPlacementRequest,
  GameServerSessionQueueDestination,
  FleetCapacity,
  SetServerWeightRequest,
  GetGameServerSessionLogUrlResponse,
  DeleteFleetResponse,
  StartGameServerSessionPlacementRequest,
  InstanceTypeInfo,
  DescribeGameServerSessionPlacementResponse,
  CreateAliasResponse,
  ResourceCreationLimitPolicy,
  ListFleetsRequest,
  UpdateFleetAttributesRequest,
  ExtraInfos,
  AttachCcnInstancesResponse,
  DescribeFleetPortSettingsRequest,
  StopFleetActionsResponse,
  DeleteAliasResponse,
  DeleteScalingPolicyRequest,
  DescribeAliasResponse,
  StopFleetActionsRequest,
  Instance,
  SearchGameServerSessionsRequest,
  DescribePlayerSessionsResponse,
  DescribeUserQuotaRequest,
  DescribeInstanceLimitRequest,
  CreateGameServerSessionQueueResponse,
  DescribeInstanceTypesRequest,
  PlayerLatency,
  StopGameServerSessionPlacementRequest,
  DescribeAliasRequest,
  CreateAliasRequest,
  UpdateGameServerSessionRequest,
  CreateAssetRequest,
  DescribeGameServerSessionDetailsResponse,
  Credentials,
  GetGameServerSessionLogUrlRequest,
  InboundPermissionAuthorization,
  CreateGameServerSessionResponse,
  DescribeInstancesRequest,
  QuotaResource,
  DescribeFleetStatisticFlowsResponse,
  InstanceCounts,
  CreateFleetResponse,
  UpdateFleetAttributesResponse,
  DescribeFleetUtilizationRequest,
  DescribeGameServerSessionDetailsRequest,
  GameServerSession,
  PlayerLatencyPolicy,
  UpdateRuntimeConfigurationRequest,
  GameProperty,
  FleetStatisticTimes,
  FleetStatisticFlows,
  DescribeAssetRequest,
  DescribeInstancesExtendRequest,
  DescribeGameServerSessionsResponse,
  StartFleetActionsResponse,
  JoinGameServerSessionRequest,
  DescribeUserQuotasResponse,
  GetUploadFederationTokenRequest,
  DescribeInstanceTypesResponse,
  SearchGameServerSessionsResponse,
  DescribeFleetEventsResponse,
  RoutingStrategy,
  DescribeFleetCapacityResponse,
  DescribeUserQuotaResponse,
  DescribeFleetEventsRequest,
  UpdateAssetResponse,
  ListAliasesRequest,
  PlayerSession,
  PutScalingPolicyResponse,
  CreateGameServerSessionQueueRequest,
  Alias,
  DescribeRuntimeConfigurationRequest,
  RuntimeConfiguration,
  DescribeScalingPoliciesResponse,
  DetachCcnInstancesRequest,
  ServerProcesse,
  UpdateGameServerSessionResponse,
  InstanceAccess,
  UpdateFleetCapacityRequest,
  FleetStatisticDetail,
  JoinGameServerSessionBatchResponse,
  InstanceExtend,
  PutScalingPolicyRequest,
  StopGameServerSessionPlacementResponse,
  CcnInstanceSets,
} from "./gse_models"

/**
 * gse client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("gse.tencentcloudapi.com", "2019-11-12", clientConfig)
  }

  /**
   * 本接口（DeleteFleet）用于删除服务器舰队
   */
  async DeleteFleet(
    req: DeleteFleetRequest,
    cb?: (error: string, rep: DeleteFleetResponse) => void
  ): Promise<DeleteFleetResponse> {
    return this.request("DeleteFleet", req, cb)
  }

  /**
   * 用于更新服务部署容量配置
   */
  async UpdateFleetCapacity(
    req: UpdateFleetCapacityRequest,
    cb?: (error: string, rep: UpdateFleetCapacityResponse) => void
  ): Promise<UpdateFleetCapacityResponse> {
    return this.request("UpdateFleetCapacity", req, cb)
  }

  /**
   * 本接口（StartFleetActions）用于启用服务器舰队自动扩缩容
   */
  async StartFleetActions(
    req: StartFleetActionsRequest,
    cb?: (error: string, rep: StartFleetActionsResponse) => void
  ): Promise<StartFleetActionsResponse> {
    return this.request("StartFleetActions", req, cb)
  }

  /**
   * 本接口（DescribeRuntimeConfiguration）用于获取服务器舰队运行配置
   */
  async DescribeRuntimeConfiguration(
    req: DescribeRuntimeConfigurationRequest,
    cb?: (error: string, rep: DescribeRuntimeConfigurationResponse) => void
  ): Promise<DescribeRuntimeConfigurationResponse> {
    return this.request("DescribeRuntimeConfiguration", req, cb)
  }

  /**
   * 本接口（UpdateAlias）用于更新别名的属性
   */
  async UpdateAlias(
    req: UpdateAliasRequest,
    cb?: (error: string, rep: UpdateAliasResponse) => void
  ): Promise<UpdateAliasResponse> {
    return this.request("UpdateAlias", req, cb)
  }

  /**
   * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
   */
  async DescribeGameServerSessionPlacement(
    req: DescribeGameServerSessionPlacementRequest,
    cb?: (error: string, rep: DescribeGameServerSessionPlacementResponse) => void
  ): Promise<DescribeGameServerSessionPlacementResponse> {
    return this.request("DescribeGameServerSessionPlacement", req, cb)
  }

  /**
   * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
   */
  async DescribeGameServerSessionDetails(
    req: DescribeGameServerSessionDetailsRequest,
    cb?: (error: string, rep: DescribeGameServerSessionDetailsResponse) => void
  ): Promise<DescribeGameServerSessionDetailsResponse> {
    return this.request("DescribeGameServerSessionDetails", req, cb)
  }

  /**
     * 本接口（CreateAsset）用于创建生成包。
通过获取上传cos的临时密钥，将文件上传至cos，然后将生成包的zip名称下发给[CreateAsset](https://cloud.tencent.com/document/product/1165/48731)完成接口创建。上传文件至 cos支持俩种方式：

- 获取预签名方式，COS 简单上传
    1. [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) 获取预签名信息
    2. 使用 COS API 进行上传
-  临时密钥方式，COS 简单上传或者分块上传方式
    1. [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727)（获取上传 bucket  第一次调用需要，后续可以不用调用）
    2. [GetUploadFederationToken](https://cloud.tencent.com/document/product/1165/48742) 获取临时密钥
    3. 使用 COS API 进行上传

具体使用场景可以参考 [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) ,  [GetUploadFederationToken](https://cloud.tencent.com/document/product/1165/48742)和下面 CreateAsset 示例。  
     */
  async CreateAsset(
    req: CreateAssetRequest,
    cb?: (error: string, rep: CreateAssetResponse) => void
  ): Promise<CreateAssetResponse> {
    return this.request("CreateAsset", req, cb)
  }

  /**
   * 本接口（CreateGameServerSessionQueue）用于创建游戏服务器会话队列
   */
  async CreateGameServerSessionQueue(
    req: CreateGameServerSessionQueueRequest,
    cb?: (error: string, rep: CreateGameServerSessionQueueResponse) => void
  ): Promise<CreateGameServerSessionQueueResponse> {
    return this.request("CreateGameServerSessionQueue", req, cb)
  }

  /**
   * 本接口（DeleteAsset）用于删除生成包
   */
  async DeleteAsset(
    req: DeleteAssetRequest,
    cb?: (error: string, rep: DeleteAssetResponse) => void
  ): Promise<DeleteAssetResponse> {
    return this.request("DeleteAsset", req, cb)
  }

  /**
   * 本接口（ListFleets）用于获取服务器舰队列表
   */
  async ListFleets(
    req: ListFleetsRequest,
    cb?: (error: string, rep: ListFleetsResponse) => void
  ): Promise<ListFleetsResponse> {
    return this.request("ListFleets", req, cb)
  }

  /**
   * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
   */
  async GetGameServerSessionLogUrl(
    req: GetGameServerSessionLogUrlRequest,
    cb?: (error: string, rep: GetGameServerSessionLogUrlResponse) => void
  ): Promise<GetGameServerSessionLogUrlResponse> {
    return this.request("GetGameServerSessionLogUrl", req, cb)
  }

  /**
   * 本接口（UpdateRuntimeConfiguration）用于更新服务器舰队配置
   */
  async UpdateRuntimeConfiguration(
    req: UpdateRuntimeConfigurationRequest,
    cb?: (error: string, rep: UpdateRuntimeConfigurationResponse) => void
  ): Promise<UpdateRuntimeConfigurationResponse> {
    return this.request("UpdateRuntimeConfiguration", req, cb)
  }

  /**
   * 用于查询服务部署容量配置
   */
  async DescribeFleetCapacity(
    req: DescribeFleetCapacityRequest,
    cb?: (error: string, rep: DescribeFleetCapacityResponse) => void
  ): Promise<DescribeFleetCapacityResponse> {
    return this.request("DescribeFleetCapacity", req, cb)
  }

  /**
   * 本接口（DeleteGameServerSessionQueue）用于删除游戏服务器会话队列
   */
  async DeleteGameServerSessionQueue(
    req: DeleteGameServerSessionQueueRequest,
    cb?: (error: string, rep: DeleteGameServerSessionQueueResponse) => void
  ): Promise<DeleteGameServerSessionQueueResponse> {
    return this.request("DeleteGameServerSessionQueue", req, cb)
  }

  /**
   * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
   */
  async DescribeGameServerSessionQueues(
    req: DescribeGameServerSessionQueuesRequest,
    cb?: (error: string, rep: DescribeGameServerSessionQueuesResponse) => void
  ): Promise<DescribeGameServerSessionQueuesResponse> {
    return this.request("DescribeGameServerSessionQueues", req, cb)
  }

  /**
   * 本接口（PutScalingPolicy）用于设置动态扩缩容配置
   */
  async PutScalingPolicy(
    req: PutScalingPolicyRequest,
    cb?: (error: string, rep: PutScalingPolicyResponse) => void
  ): Promise<PutScalingPolicyResponse> {
    return this.request("PutScalingPolicy", req, cb)
  }

  /**
   * 本接口（DescribeScalingPolicies）用于查询服务部署的动态扩缩容配置
   */
  async DescribeScalingPolicies(
    req: DescribeScalingPoliciesRequest,
    cb?: (error: string, rep: DescribeScalingPoliciesResponse) => void
  ): Promise<DescribeScalingPoliciesResponse> {
    return this.request("DescribeScalingPolicies", req, cb)
  }

  /**
   * 本接口（DescribeFleetStatisticDetails）用于查询服务部署统计详情
   */
  async DescribeFleetStatisticDetails(
    req: DescribeFleetStatisticDetailsRequest,
    cb?: (error: string, rep: DescribeFleetStatisticDetailsResponse) => void
  ): Promise<DescribeFleetStatisticDetailsResponse> {
    return this.request("DescribeFleetStatisticDetails", req, cb)
  }

  /**
   * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
   */
  async DescribeGameServerSessions(
    req: DescribeGameServerSessionsRequest,
    cb?: (error: string, rep: DescribeGameServerSessionsResponse) => void
  ): Promise<DescribeGameServerSessionsResponse> {
    return this.request("DescribeGameServerSessions", req, cb)
  }

  /**
   * 本接口（JoinGameServerSession）用于加入游戏服务器会话
   */
  async JoinGameServerSession(
    req: JoinGameServerSessionRequest,
    cb?: (error: string, rep: JoinGameServerSessionResponse) => void
  ): Promise<JoinGameServerSessionResponse> {
    return this.request("JoinGameServerSession", req, cb)
  }

  /**
   * 本接口（JoinGameServerSessionBatch）用于加入游戏服务器会话
   */
  async JoinGameServerSessionBatch(
    req: JoinGameServerSessionBatchRequest,
    cb?: (error: string, rep: JoinGameServerSessionBatchResponse) => void
  ): Promise<JoinGameServerSessionBatchResponse> {
    return this.request("JoinGameServerSessionBatch", req, cb)
  }

  /**
   * 本接口（DescribeFleetStatisticSummary）用于查询服务部署统计汇总信息
   */
  async DescribeFleetStatisticSummary(
    req: DescribeFleetStatisticSummaryRequest,
    cb?: (error: string, rep: DescribeFleetStatisticSummaryResponse) => void
  ): Promise<DescribeFleetStatisticSummaryResponse> {
    return this.request("DescribeFleetStatisticSummary", req, cb)
  }

  /**
   * 本接口（DeleteAlias）用于删除别名
   */
  async DeleteAlias(
    req: DeleteAliasRequest,
    cb?: (error: string, rep: DeleteAliasResponse) => void
  ): Promise<DeleteAliasResponse> {
    return this.request("DeleteAlias", req, cb)
  }

  /**
   * 查询用户实例数限额
   */
  async DescribeInstanceLimit(
    req?: DescribeInstanceLimitRequest,
    cb?: (error: string, rep: DescribeInstanceLimitResponse) => void
  ): Promise<DescribeInstanceLimitResponse> {
    return this.request("DescribeInstanceLimit", req, cb)
  }

  /**
   * 本接口（UpdateAsset）用于修改生成包信息
   */
  async UpdateAsset(
    req: UpdateAssetRequest,
    cb?: (error: string, rep: UpdateAssetResponse) => void
  ): Promise<UpdateAssetResponse> {
    return this.request("UpdateAsset", req, cb)
  }

  /**
   * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
   */
  async StartGameServerSessionPlacement(
    req: StartGameServerSessionPlacementRequest,
    cb?: (error: string, rep: StartGameServerSessionPlacementResponse) => void
  ): Promise<StartGameServerSessionPlacementResponse> {
    return this.request("StartGameServerSessionPlacement", req, cb)
  }

  /**
   * 本接口（DescribeFleetPortSettings）用于获取服务器舰队安全组信息
   */
  async DescribeFleetPortSettings(
    req: DescribeFleetPortSettingsRequest,
    cb?: (error: string, rep: DescribeFleetPortSettingsResponse) => void
  ): Promise<DescribeFleetPortSettingsResponse> {
    return this.request("DescribeFleetPortSettings", req, cb)
  }

  /**
   * 本接口（AttachCcnInstances）用于关联云联网实例
   */
  async AttachCcnInstances(
    req: AttachCcnInstancesRequest,
    cb?: (error: string, rep: AttachCcnInstancesResponse) => void
  ): Promise<AttachCcnInstancesResponse> {
    return this.request("AttachCcnInstances", req, cb)
  }

  /**
   * 本接口（DetachCcnInstances）用于解关联云联网实例
   */
  async DetachCcnInstances(
    req: DetachCcnInstancesRequest,
    cb?: (error: string, rep: DetachCcnInstancesResponse) => void
  ): Promise<DetachCcnInstancesResponse> {
    return this.request("DetachCcnInstances", req, cb)
  }

  /**
   * 本接口（DeleteScalingPolicy）用于删除扩缩容配置
   */
  async DeleteScalingPolicy(
    req: DeleteScalingPolicyRequest,
    cb?: (error: string, rep: DeleteScalingPolicyResponse) => void
  ): Promise<DeleteScalingPolicyResponse> {
    return this.request("DeleteScalingPolicy", req, cb)
  }

  /**
   * 本接口（CreateAlias）用于创建别名
   */
  async CreateAlias(
    req: CreateAliasRequest,
    cb?: (error: string, rep: CreateAliasResponse) => void
  ): Promise<CreateAliasResponse> {
    return this.request("CreateAlias", req, cb)
  }

  /**
   * 本接口（DescribeFleetStatisticFlows）用于查询服务部署统计用量
   */
  async DescribeFleetStatisticFlows(
    req: DescribeFleetStatisticFlowsRequest,
    cb?: (error: string, rep: DescribeFleetStatisticFlowsResponse) => void
  ): Promise<DescribeFleetStatisticFlowsResponse> {
    return this.request("DescribeFleetStatisticFlows", req, cb)
  }

  /**
   * 本接口（CreateGameServerSession）用于创建游戏服务会话
   */
  async CreateGameServerSession(
    req: CreateGameServerSessionRequest,
    cb?: (error: string, rep: CreateGameServerSessionResponse) => void
  ): Promise<CreateGameServerSessionResponse> {
    return this.request("CreateGameServerSession", req, cb)
  }

  /**
   * 本接口（DescribePlayerSessions）用于获取玩家会话列表
   */
  async DescribePlayerSessions(
    req: DescribePlayerSessionsRequest,
    cb?: (error: string, rep: DescribePlayerSessionsResponse) => void
  ): Promise<DescribePlayerSessionsResponse> {
    return this.request("DescribePlayerSessions", req, cb)
  }

  /**
   * 本接口（DescribeAsset）获取生成包信息
   */
  async DescribeAsset(
    req: DescribeAssetRequest,
    cb?: (error: string, rep: DescribeAssetResponse) => void
  ): Promise<DescribeAssetResponse> {
    return this.request("DescribeAsset", req, cb)
  }

  /**
     * 本接口（GetUploadCredentials）获取上传文件授权信息。
通过 [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) 接口获取临时授权信息后，调用 COS API将数据上传，根据上传的 BucketKey 信息进行生成包 [CreateAsset](https://cloud.tencent.com/document/product/1165/48731) 的创建。参考下面的示例部分。
     */
  async GetUploadCredentials(
    req: GetUploadCredentialsRequest,
    cb?: (error: string, rep: GetUploadCredentialsResponse) => void
  ): Promise<GetUploadCredentialsResponse> {
    return this.request("GetUploadCredentials", req, cb)
  }

  /**
   * 本接口（CreateFleet）用于创建服务器舰队
   */
  async CreateFleet(
    req: CreateFleetRequest,
    cb?: (error: string, rep: CreateFleetResponse) => void
  ): Promise<CreateFleetResponse> {
    return this.request("CreateFleet", req, cb)
  }

  /**
   * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
   */
  async StopGameServerSessionPlacement(
    req: StopGameServerSessionPlacementRequest,
    cb?: (error: string, rep: StopGameServerSessionPlacementResponse) => void
  ): Promise<StopGameServerSessionPlacementResponse> {
    return this.request("StopGameServerSessionPlacement", req, cb)
  }

  /**
   * 本接口（UpdateGameServerSessionQueue）用于修改游戏服务器会话队列
   */
  async UpdateGameServerSessionQueue(
    req: UpdateGameServerSessionQueueRequest,
    cb?: (error: string, rep: UpdateGameServerSessionQueueResponse) => void
  ): Promise<UpdateGameServerSessionQueueResponse> {
    return this.request("UpdateGameServerSessionQueue", req, cb)
  }

  /**
   * 本接口（GetInstanceAccess）用于获取实例登录所需要的凭据
   */
  async GetInstanceAccess(
    req: GetInstanceAccessRequest,
    cb?: (error: string, rep: GetInstanceAccessResponse) => void
  ): Promise<GetInstanceAccessResponse> {
    return this.request("GetInstanceAccess", req, cb)
  }

  /**
   * 本接口（UpdateFleetAttributes）用于更新服务器舰队属性
   */
  async UpdateFleetAttributes(
    req: UpdateFleetAttributesRequest,
    cb?: (error: string, rep: UpdateFleetAttributesResponse) => void
  ): Promise<UpdateFleetAttributesResponse> {
    return this.request("UpdateFleetAttributes", req, cb)
  }

  /**
   * 本接口（DescribeUserQuota）获取用户单个模块配额
   */
  async DescribeUserQuota(
    req: DescribeUserQuotaRequest,
    cb?: (error: string, rep: DescribeUserQuotaResponse) => void
  ): Promise<DescribeUserQuotaResponse> {
    return this.request("DescribeUserQuota", req, cb)
  }

  /**
   * 本接口（DescribeFleetAttributes）用于查询服务器舰队属性
   */
  async DescribeFleetAttributes(
    req: DescribeFleetAttributesRequest,
    cb?: (error: string, rep: DescribeFleetAttributesResponse) => void
  ): Promise<DescribeFleetAttributesResponse> {
    return this.request("DescribeFleetAttributes", req, cb)
  }

  /**
   * 本接口（GetUploadFederationToken）用于 获取生成包上传所需要的临时密钥
   */
  async GetUploadFederationToken(
    req?: GetUploadFederationTokenRequest,
    cb?: (error: string, rep: GetUploadFederationTokenResponse) => void
  ): Promise<GetUploadFederationTokenResponse> {
    return this.request("GetUploadFederationToken", req, cb)
  }

  /**
   * 本接口（ResolveAlias）用于获取别名当前指向的fleetId
   */
  async ResolveAlias(
    req: ResolveAliasRequest,
    cb?: (error: string, rep: ResolveAliasResponse) => void
  ): Promise<ResolveAliasResponse> {
    return this.request("ResolveAlias", req, cb)
  }

  /**
   * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
   */
  async SearchGameServerSessions(
    req: SearchGameServerSessionsRequest,
    cb?: (error: string, rep: SearchGameServerSessionsResponse) => void
  ): Promise<SearchGameServerSessionsResponse> {
    return this.request("SearchGameServerSessions", req, cb)
  }

  /**
   * 本接口（DescribeInstances）用于查询服务器实例列表
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 本接口（DescribeAssets）用于获取生成包列表
   */
  async DescribeAssets(
    req: DescribeAssetsRequest,
    cb?: (error: string, rep: DescribeAssetsResponse) => void
  ): Promise<DescribeAssetsResponse> {
    return this.request("DescribeAssets", req, cb)
  }

  /**
   * 本接口（DescribeCcnInstances）用于查询云联网实例
   */
  async DescribeCcnInstances(
    req: DescribeCcnInstancesRequest,
    cb?: (error: string, rep: DescribeCcnInstancesResponse) => void
  ): Promise<DescribeCcnInstancesResponse> {
    return this.request("DescribeCcnInstances", req, cb)
  }

  /**
   * 本接口（StopFleetActions）用于停止服务器舰队自动扩缩容，改为手动扩缩容
   */
  async StopFleetActions(
    req: StopFleetActionsRequest,
    cb?: (error: string, rep: StopFleetActionsResponse) => void
  ): Promise<StopFleetActionsResponse> {
    return this.request("StopFleetActions", req, cb)
  }

  /**
   * 本接口（DescribeInstances）用于查询实例扩展信息列表
   */
  async DescribeInstancesExtend(
    req: DescribeInstancesExtendRequest,
    cb?: (error: string, rep: DescribeInstancesExtendResponse) => void
  ): Promise<DescribeInstancesExtendResponse> {
    return this.request("DescribeInstancesExtend", req, cb)
  }

  /**
   * 本接口（DescribeAlias）用于获取别名详情
   */
  async DescribeAlias(
    req: DescribeAliasRequest,
    cb?: (error: string, rep: DescribeAliasResponse) => void
  ): Promise<DescribeAliasResponse> {
    return this.request("DescribeAlias", req, cb)
  }

  /**
   * 本接口（ListAliases）用于检索帐户下的所有别名
   */
  async ListAliases(
    req: ListAliasesRequest,
    cb?: (error: string, rep: ListAliasesResponse) => void
  ): Promise<ListAliasesResponse> {
    return this.request("ListAliases", req, cb)
  }

  /**
   * 本接口（DescribeUserQuotas）用于获取用户配额
   */
  async DescribeUserQuotas(
    req?: DescribeUserQuotasRequest,
    cb?: (error: string, rep: DescribeUserQuotasResponse) => void
  ): Promise<DescribeUserQuotasResponse> {
    return this.request("DescribeUserQuotas", req, cb)
  }

  /**
   * 本接口（DescribeInstanceTypes）用于获取服务器实例类型列表
   */
  async DescribeInstanceTypes(
    req?: DescribeInstanceTypesRequest,
    cb?: (error: string, rep: DescribeInstanceTypesResponse) => void
  ): Promise<DescribeInstanceTypesResponse> {
    return this.request("DescribeInstanceTypes", req, cb)
  }

  /**
   * 本接口（DescribeFleetEvents）用于查询部署服务器舰队相关的事件列表
   */
  async DescribeFleetEvents(
    req: DescribeFleetEventsRequest,
    cb?: (error: string, rep: DescribeFleetEventsResponse) => void
  ): Promise<DescribeFleetEventsResponse> {
    return this.request("DescribeFleetEvents", req, cb)
  }

  /**
   * 设置服务器权重
   */
  async SetServerWeight(
    req: SetServerWeightRequest,
    cb?: (error: string, rep: SetServerWeightResponse) => void
  ): Promise<SetServerWeightResponse> {
    return this.request("SetServerWeight", req, cb)
  }

  /**
   * 本接口（DescribeFleetUtilization）用于查询服务器舰队的利用率信息
   */
  async DescribeFleetUtilization(
    req: DescribeFleetUtilizationRequest,
    cb?: (error: string, rep: DescribeFleetUtilizationResponse) => void
  ): Promise<DescribeFleetUtilizationResponse> {
    return this.request("DescribeFleetUtilization", req, cb)
  }

  /**
   * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
   */
  async UpdateGameServerSession(
    req: UpdateGameServerSessionRequest,
    cb?: (error: string, rep: UpdateGameServerSessionResponse) => void
  ): Promise<UpdateGameServerSessionResponse> {
    return this.request("UpdateGameServerSession", req, cb)
  }

  /**
   * 本接口（UpdateFleetPortSettings）用于更新服务器舰队安全组
   */
  async UpdateFleetPortSettings(
    req: UpdateFleetPortSettingsRequest,
    cb?: (error: string, rep: UpdateFleetPortSettingsResponse) => void
  ): Promise<UpdateFleetPortSettingsResponse> {
    return this.request("UpdateFleetPortSettings", req, cb)
  }
}

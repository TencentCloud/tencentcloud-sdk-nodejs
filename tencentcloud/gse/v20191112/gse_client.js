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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const FleetAttributes = models.FleetAttributes;
const CreateAssetResponse = models.CreateAssetResponse;
const InboundPermission = models.InboundPermission;
const GetInstanceAccessResponse = models.GetInstanceAccessResponse;
const Asset = models.Asset;
const ListAliasesResponse = models.ListAliasesResponse;
const StartMatchPlacementResponse = models.StartMatchPlacementResponse;
const DescribeFleetAttributesRequest = models.DescribeFleetAttributesRequest;
const ResolveAliasRequest = models.ResolveAliasRequest;
const StartGameServerSessionPlacementResponse = models.StartGameServerSessionPlacementResponse;
const GetInstanceAccessRequest = models.GetInstanceAccessRequest;
const StartFleetActionsRequest = models.StartFleetActionsRequest;
const UpdateFleetPortSettingsResponse = models.UpdateFleetPortSettingsResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const ListFleetsResponse = models.ListFleetsResponse;
const DeleteAssetResponse = models.DeleteAssetResponse;
const DescribeFleetUtilizationResponse = models.DescribeFleetUtilizationResponse;
const DescribeScalingPoliciesRequest = models.DescribeScalingPoliciesRequest;
const DeleteFleetRequest = models.DeleteFleetRequest;
const DetachCcnInstancesResponse = models.DetachCcnInstancesResponse;
const DescribeFleetPortSettingsResponse = models.DescribeFleetPortSettingsResponse;
const DescribeUserQuotasRequest = models.DescribeUserQuotasRequest;
const UpdateAssetRequest = models.UpdateAssetRequest;
const DesiredPlayerSession = models.DesiredPlayerSession;
const UpdateFleetPortSettingsRequest = models.UpdateFleetPortSettingsRequest;
const CcnInstanceSets = models.CcnInstanceSets;
const UpdateAliasRequest = models.UpdateAliasRequest;
const GameServerSessionPlacement = models.GameServerSessionPlacement;
const GameServerSessionQueue = models.GameServerSessionQueue;
const DescribeRuntimeConfigurationResponse = models.DescribeRuntimeConfigurationResponse;
const CreateGameServerSessionRequest = models.CreateGameServerSessionRequest;
const UpdateAliasResponse = models.UpdateAliasResponse;
const GameServerSessionDetail = models.GameServerSessionDetail;
const DescribeGameServerSessionQueuesRequest = models.DescribeGameServerSessionQueuesRequest;
const GetUploadFederationTokenResponse = models.GetUploadFederationTokenResponse;
const DeleteScalingPolicyResponse = models.DeleteScalingPolicyResponse;
const ResolveAliasResponse = models.ResolveAliasResponse;
const ListFleetsRequest = models.ListFleetsRequest;
const Event = models.Event;
const UpdateRuntimeConfigurationResponse = models.UpdateRuntimeConfigurationResponse;
const DescribeCcnInstancesResponse = models.DescribeCcnInstancesResponse;
const UpdateRuntimeConfigurationRequest = models.UpdateRuntimeConfigurationRequest;
const DescribeAssetResponse = models.DescribeAssetResponse;
const PlacedPlayerSession = models.PlacedPlayerSession;
const FleetUtilization = models.FleetUtilization;
const DescribeGameServerSessionQueuesResponse = models.DescribeGameServerSessionQueuesResponse;
const DeleteAliasRequest = models.DeleteAliasRequest;
const AttachCcnInstancesRequest = models.AttachCcnInstancesRequest;
const InboundPermissionRevocations = models.InboundPermissionRevocations;
const DescribeAssetsRequest = models.DescribeAssetsRequest;
const ScalingPolicy = models.ScalingPolicy;
const DescribeGameServerSessionsRequest = models.DescribeGameServerSessionsRequest;
const GetUploadCredentialsRequest = models.GetUploadCredentialsRequest;
const DescribePlayerSessionsRequest = models.DescribePlayerSessionsRequest;
const DeleteAssetRequest = models.DeleteAssetRequest;
const DescribeAssetsResponse = models.DescribeAssetsResponse;
const DescribeFleetAttributesResponse = models.DescribeFleetAttributesResponse;
const DescribeCcnInstancesRequest = models.DescribeCcnInstancesRequest;
const JoinGameServerSessionResponse = models.JoinGameServerSessionResponse;
const AssetCredentials = models.AssetCredentials;
const TargetConfiguration = models.TargetConfiguration;
const InstanceAccess = models.InstanceAccess;
const GameServerSessionQueueDestination = models.GameServerSessionQueueDestination;
const SetServerWeightRequest = models.SetServerWeightRequest;
const GetGameServerSessionLogUrlResponse = models.GetGameServerSessionLogUrlResponse;
const Alias = models.Alias;
const StartGameServerSessionPlacementRequest = models.StartGameServerSessionPlacementRequest;
const InstanceTypeInfo = models.InstanceTypeInfo;
const DescribeGameServerSessionPlacementResponse = models.DescribeGameServerSessionPlacementResponse;
const CreateAliasResponse = models.CreateAliasResponse;
const ResourceCreationLimitPolicy = models.ResourceCreationLimitPolicy;
const UpdateFleetAttributesRequest = models.UpdateFleetAttributesRequest;
const DescribeGameServerSessionPlacementRequest = models.DescribeGameServerSessionPlacementRequest;
const AttachCcnInstancesResponse = models.AttachCcnInstancesResponse;
const DescribeFleetPortSettingsRequest = models.DescribeFleetPortSettingsRequest;
const StopFleetActionsResponse = models.StopFleetActionsResponse;
const DeleteAliasResponse = models.DeleteAliasResponse;
const DeleteScalingPolicyRequest = models.DeleteScalingPolicyRequest;
const DescribeAliasResponse = models.DescribeAliasResponse;
const StopFleetActionsRequest = models.StopFleetActionsRequest;
const Instance = models.Instance;
const SearchGameServerSessionsRequest = models.SearchGameServerSessionsRequest;
const DescribePlayerSessionsResponse = models.DescribePlayerSessionsResponse;
const DescribeUserQuotaRequest = models.DescribeUserQuotaRequest;
const GetUploadCredentialsResponse = models.GetUploadCredentialsResponse;
const SetServerWeightResponse = models.SetServerWeightResponse;
const DescribeInstanceTypesRequest = models.DescribeInstanceTypesRequest;
const PlayerLatency = models.PlayerLatency;
const StopGameServerSessionPlacementRequest = models.StopGameServerSessionPlacementRequest;
const DescribeAliasRequest = models.DescribeAliasRequest;
const CreateAliasRequest = models.CreateAliasRequest;
const UpdateGameServerSessionRequest = models.UpdateGameServerSessionRequest;
const CreateAssetRequest = models.CreateAssetRequest;
const DescribeGameServerSessionDetailsResponse = models.DescribeGameServerSessionDetailsResponse;
const Credentials = models.Credentials;
const GetGameServerSessionLogUrlRequest = models.GetGameServerSessionLogUrlRequest;
const InboundPermissionAuthorization = models.InboundPermissionAuthorization;
const CreateGameServerSessionResponse = models.CreateGameServerSessionResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const QuotaResource = models.QuotaResource;
const UpdateFleetAttributesResponse = models.UpdateFleetAttributesResponse;
const DescribeFleetUtilizationRequest = models.DescribeFleetUtilizationRequest;
const DescribeGameServerSessionDetailsRequest = models.DescribeGameServerSessionDetailsRequest;
const GameServerSession = models.GameServerSession;
const PlayerLatencyPolicy = models.PlayerLatencyPolicy;
const GameProperty = models.GameProperty;
const DescribeAssetRequest = models.DescribeAssetRequest;
const DescribeGameServerSessionsResponse = models.DescribeGameServerSessionsResponse;
const StartFleetActionsResponse = models.StartFleetActionsResponse;
const JoinGameServerSessionRequest = models.JoinGameServerSessionRequest;
const DescribeUserQuotasResponse = models.DescribeUserQuotasResponse;
const GetUploadFederationTokenRequest = models.GetUploadFederationTokenRequest;
const DescribeInstanceTypesResponse = models.DescribeInstanceTypesResponse;
const DescribeFleetEventsResponse = models.DescribeFleetEventsResponse;
const RoutingStrategy = models.RoutingStrategy;
const StartMatchPlacementRequest = models.StartMatchPlacementRequest;
const DescribeUserQuotaResponse = models.DescribeUserQuotaResponse;
const DescribeFleetEventsRequest = models.DescribeFleetEventsRequest;
const UpdateAssetResponse = models.UpdateAssetResponse;
const ListAliasesRequest = models.ListAliasesRequest;
const PlayerSession = models.PlayerSession;
const PutScalingPolicyResponse = models.PutScalingPolicyResponse;
const DeleteFleetResponse = models.DeleteFleetResponse;
const DescribeRuntimeConfigurationRequest = models.DescribeRuntimeConfigurationRequest;
const RuntimeConfiguration = models.RuntimeConfiguration;
const DescribeScalingPoliciesResponse = models.DescribeScalingPoliciesResponse;
const DetachCcnInstancesRequest = models.DetachCcnInstancesRequest;
const ServerProcesse = models.ServerProcesse;
const UpdateGameServerSessionResponse = models.UpdateGameServerSessionResponse;
const PutScalingPolicyRequest = models.PutScalingPolicyRequest;
const StopGameServerSessionPlacementResponse = models.StopGameServerSessionPlacementResponse;
const SearchGameServerSessionsResponse = models.SearchGameServerSessionsResponse;


/**
 * gse client
 * @class
 */
class GseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gse.tencentcloudapi.com", "2019-11-12", credential, region, profile);
    }
    
    /**
     * 本接口（StartMatchPlacement）用于开始匹配放置游戏服务器会话
     * @param {StartMatchPlacementRequest} req
     * @param {function(string, StartMatchPlacementResponse):void} cb
     * @public
     */
    StartMatchPlacement(req, cb) {
        let resp = new StartMatchPlacementResponse();
        this.request("StartMatchPlacement", req, resp, cb);
    }

    /**
     * 本接口（DeleteFleet）用于删除服务器舰队
     * @param {DeleteFleetRequest} req
     * @param {function(string, DeleteFleetResponse):void} cb
     * @public
     */
    DeleteFleet(req, cb) {
        let resp = new DeleteFleetResponse();
        this.request("DeleteFleet", req, resp, cb);
    }

    /**
     * 本接口（StartFleetActions）用于启用服务器舰队自动扩缩容
     * @param {StartFleetActionsRequest} req
     * @param {function(string, StartFleetActionsResponse):void} cb
     * @public
     */
    StartFleetActions(req, cb) {
        let resp = new StartFleetActionsResponse();
        this.request("StartFleetActions", req, resp, cb);
    }

    /**
     * 本接口（DescribeRuntimeConfiguration）用于获取服务器舰队运行配置
     * @param {DescribeRuntimeConfigurationRequest} req
     * @param {function(string, DescribeRuntimeConfigurationResponse):void} cb
     * @public
     */
    DescribeRuntimeConfiguration(req, cb) {
        let resp = new DescribeRuntimeConfigurationResponse();
        this.request("DescribeRuntimeConfiguration", req, resp, cb);
    }

    /**
     * 本接口（UpdateAlias）用于更新别名的属性
     * @param {UpdateAliasRequest} req
     * @param {function(string, UpdateAliasResponse):void} cb
     * @public
     */
    UpdateAlias(req, cb) {
        let resp = new UpdateAliasResponse();
        this.request("UpdateAlias", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
     * @param {DescribeGameServerSessionPlacementRequest} req
     * @param {function(string, DescribeGameServerSessionPlacementResponse):void} cb
     * @public
     */
    DescribeGameServerSessionPlacement(req, cb) {
        let resp = new DescribeGameServerSessionPlacementResponse();
        this.request("DescribeGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
     * @param {DescribeGameServerSessionDetailsRequest} req
     * @param {function(string, DescribeGameServerSessionDetailsResponse):void} cb
     * @public
     */
    DescribeGameServerSessionDetails(req, cb) {
        let resp = new DescribeGameServerSessionDetailsResponse();
        this.request("DescribeGameServerSessionDetails", req, resp, cb);
    }

    /**
     * 本接口（CreateAsset）用于创建生成包。
通过获取上传cos的临时秘钥，将文件上传至cos，然后将生成包的zip名称下发给[CreateAsset](https://cloud.tencent.com/document/product/1165/48731)完成接口创建。上传文件至 cos支持俩种方式：

- 获取预签名方式，COS 简单上传
    1. [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) 获取预签名信息
    2. 使用 COS API 进行上传
-  临时密钥方式，COS 简单上传或者分块上传方式
    1. [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727)（获取上传 bucket  第一次调用需要，后续可以不用调用）
    2. [GetUploadFederationToken](https://cloud.tencent.com/document/product/1165/48742) 获取临时密钥
    3. 使用 COS API 进行上传

具体使用场景可以参考 [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) ,  [GetUploadFederationToken](https://cloud.tencent.com/document/product/1165/48742)和下面 CreateAsset 示例。  
     * @param {CreateAssetRequest} req
     * @param {function(string, CreateAssetResponse):void} cb
     * @public
     */
    CreateAsset(req, cb) {
        let resp = new CreateAssetResponse();
        this.request("CreateAsset", req, resp, cb);
    }

    /**
     * 本接口（DeleteAsset）用于删除生成包
     * @param {DeleteAssetRequest} req
     * @param {function(string, DeleteAssetResponse):void} cb
     * @public
     */
    DeleteAsset(req, cb) {
        let resp = new DeleteAssetResponse();
        this.request("DeleteAsset", req, resp, cb);
    }

    /**
     * 本接口（ListFleets）用于获取服务器舰队列表
     * @param {ListFleetsRequest} req
     * @param {function(string, ListFleetsResponse):void} cb
     * @public
     */
    ListFleets(req, cb) {
        let resp = new ListFleetsResponse();
        this.request("ListFleets", req, resp, cb);
    }

    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
     * @param {GetGameServerSessionLogUrlRequest} req
     * @param {function(string, GetGameServerSessionLogUrlResponse):void} cb
     * @public
     */
    GetGameServerSessionLogUrl(req, cb) {
        let resp = new GetGameServerSessionLogUrlResponse();
        this.request("GetGameServerSessionLogUrl", req, resp, cb);
    }

    /**
     * 本接口（UpdateRuntimeConfiguration）用于更新服务器舰队配置
     * @param {UpdateRuntimeConfigurationRequest} req
     * @param {function(string, UpdateRuntimeConfigurationResponse):void} cb
     * @public
     */
    UpdateRuntimeConfiguration(req, cb) {
        let resp = new UpdateRuntimeConfigurationResponse();
        this.request("UpdateRuntimeConfiguration", req, resp, cb);
    }

    /**
     * 本接口（ListAliases）用于检索帐户下的所有别名
     * @param {ListAliasesRequest} req
     * @param {function(string, ListAliasesResponse):void} cb
     * @public
     */
    ListAliases(req, cb) {
        let resp = new ListAliasesResponse();
        this.request("ListAliases", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
     * @param {DescribeGameServerSessionQueuesRequest} req
     * @param {function(string, DescribeGameServerSessionQueuesResponse):void} cb
     * @public
     */
    DescribeGameServerSessionQueues(req, cb) {
        let resp = new DescribeGameServerSessionQueuesResponse();
        this.request("DescribeGameServerSessionQueues", req, resp, cb);
    }

    /**
     * 本接口（PutScalingPolicy）用于设置动态扩缩容配置
     * @param {PutScalingPolicyRequest} req
     * @param {function(string, PutScalingPolicyResponse):void} cb
     * @public
     */
    PutScalingPolicy(req, cb) {
        let resp = new PutScalingPolicyResponse();
        this.request("PutScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口（DescribeScalingPolicies）用于查询服务部署的动态扩缩容配置
     * @param {DescribeScalingPoliciesRequest} req
     * @param {function(string, DescribeScalingPoliciesResponse):void} cb
     * @public
     */
    DescribeScalingPolicies(req, cb) {
        let resp = new DescribeScalingPoliciesResponse();
        this.request("DescribeScalingPolicies", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstances）用于查询服务器实例列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
     * @param {DescribeGameServerSessionsRequest} req
     * @param {function(string, DescribeGameServerSessionsResponse):void} cb
     * @public
     */
    DescribeGameServerSessions(req, cb) {
        let resp = new DescribeGameServerSessionsResponse();
        this.request("DescribeGameServerSessions", req, resp, cb);
    }

    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话
     * @param {JoinGameServerSessionRequest} req
     * @param {function(string, JoinGameServerSessionResponse):void} cb
     * @public
     */
    JoinGameServerSession(req, cb) {
        let resp = new JoinGameServerSessionResponse();
        this.request("JoinGameServerSession", req, resp, cb);
    }

    /**
     * 本接口（DeleteAlias）用于删除别名
     * @param {DeleteAliasRequest} req
     * @param {function(string, DeleteAliasResponse):void} cb
     * @public
     */
    DeleteAlias(req, cb) {
        let resp = new DeleteAliasResponse();
        this.request("DeleteAlias", req, resp, cb);
    }

    /**
     * 本接口（UpdateAsset）用于修改生成包信息
     * @param {UpdateAssetRequest} req
     * @param {function(string, UpdateAssetResponse):void} cb
     * @public
     */
    UpdateAsset(req, cb) {
        let resp = new UpdateAssetResponse();
        this.request("UpdateAsset", req, resp, cb);
    }

    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
     * @param {StartGameServerSessionPlacementRequest} req
     * @param {function(string, StartGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StartGameServerSessionPlacement(req, cb) {
        let resp = new StartGameServerSessionPlacementResponse();
        this.request("StartGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetPortSettings）用于获取服务器舰队安全组信息
     * @param {DescribeFleetPortSettingsRequest} req
     * @param {function(string, DescribeFleetPortSettingsResponse):void} cb
     * @public
     */
    DescribeFleetPortSettings(req, cb) {
        let resp = new DescribeFleetPortSettingsResponse();
        this.request("DescribeFleetPortSettings", req, resp, cb);
    }

    /**
     * 本接口（AttachCcnInstances）用于关联云联网实例
     * @param {AttachCcnInstancesRequest} req
     * @param {function(string, AttachCcnInstancesResponse):void} cb
     * @public
     */
    AttachCcnInstances(req, cb) {
        let resp = new AttachCcnInstancesResponse();
        this.request("AttachCcnInstances", req, resp, cb);
    }

    /**
     * 本接口（DetachCcnInstances）用于解关联云联网实例
     * @param {DetachCcnInstancesRequest} req
     * @param {function(string, DetachCcnInstancesResponse):void} cb
     * @public
     */
    DetachCcnInstances(req, cb) {
        let resp = new DetachCcnInstancesResponse();
        this.request("DetachCcnInstances", req, resp, cb);
    }

    /**
     * 本接口（DeleteScalingPolicy）用于删除扩缩容配置
     * @param {DeleteScalingPolicyRequest} req
     * @param {function(string, DeleteScalingPolicyResponse):void} cb
     * @public
     */
    DeleteScalingPolicy(req, cb) {
        let resp = new DeleteScalingPolicyResponse();
        this.request("DeleteScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口（CreateAlias）用于创建别名
     * @param {CreateAliasRequest} req
     * @param {function(string, CreateAliasResponse):void} cb
     * @public
     */
    CreateAlias(req, cb) {
        let resp = new CreateAliasResponse();
        this.request("CreateAlias", req, resp, cb);
    }

    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话
     * @param {CreateGameServerSessionRequest} req
     * @param {function(string, CreateGameServerSessionResponse):void} cb
     * @public
     */
    CreateGameServerSession(req, cb) {
        let resp = new CreateGameServerSessionResponse();
        this.request("CreateGameServerSession", req, resp, cb);
    }

    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表
     * @param {DescribePlayerSessionsRequest} req
     * @param {function(string, DescribePlayerSessionsResponse):void} cb
     * @public
     */
    DescribePlayerSessions(req, cb) {
        let resp = new DescribePlayerSessionsResponse();
        this.request("DescribePlayerSessions", req, resp, cb);
    }

    /**
     * 本接口（DescribeAsset）获取生成包信息
     * @param {DescribeAssetRequest} req
     * @param {function(string, DescribeAssetResponse):void} cb
     * @public
     */
    DescribeAsset(req, cb) {
        let resp = new DescribeAssetResponse();
        this.request("DescribeAsset", req, resp, cb);
    }

    /**
     * 本接口（GetUploadCredentials）获取上传文件授权信息。
通过 [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) 接口获取临时授权信息后，调用 COS API将数据上传，根据上传的 BucketKey 信息进行生成包 [CreateAsset](https://cloud.tencent.com/document/product/1165/48731) 的创建。参考下面的示例部分。
     * @param {GetUploadCredentialsRequest} req
     * @param {function(string, GetUploadCredentialsResponse):void} cb
     * @public
     */
    GetUploadCredentials(req, cb) {
        let resp = new GetUploadCredentialsResponse();
        this.request("GetUploadCredentials", req, resp, cb);
    }

    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
     * @param {UpdateGameServerSessionRequest} req
     * @param {function(string, UpdateGameServerSessionResponse):void} cb
     * @public
     */
    UpdateGameServerSession(req, cb) {
        let resp = new UpdateGameServerSessionResponse();
        this.request("UpdateGameServerSession", req, resp, cb);
    }

    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
     * @param {StopGameServerSessionPlacementRequest} req
     * @param {function(string, StopGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StopGameServerSessionPlacement(req, cb) {
        let resp = new StopGameServerSessionPlacementResponse();
        this.request("StopGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * 本接口（GetInstanceAccess）用于获取实例登录所需要的凭据
     * @param {GetInstanceAccessRequest} req
     * @param {function(string, GetInstanceAccessResponse):void} cb
     * @public
     */
    GetInstanceAccess(req, cb) {
        let resp = new GetInstanceAccessResponse();
        this.request("GetInstanceAccess", req, resp, cb);
    }

    /**
     * 本接口（UpdateFleetAttributes）用于更新服务器舰队属性
     * @param {UpdateFleetAttributesRequest} req
     * @param {function(string, UpdateFleetAttributesResponse):void} cb
     * @public
     */
    UpdateFleetAttributes(req, cb) {
        let resp = new UpdateFleetAttributesResponse();
        this.request("UpdateFleetAttributes", req, resp, cb);
    }

    /**
     * 本接口（DescribeUserQuota）获取用户单个模块配额
     * @param {DescribeUserQuotaRequest} req
     * @param {function(string, DescribeUserQuotaResponse):void} cb
     * @public
     */
    DescribeUserQuota(req, cb) {
        let resp = new DescribeUserQuotaResponse();
        this.request("DescribeUserQuota", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetAttributes）用于查询服务器舰队属性
     * @param {DescribeFleetAttributesRequest} req
     * @param {function(string, DescribeFleetAttributesResponse):void} cb
     * @public
     */
    DescribeFleetAttributes(req, cb) {
        let resp = new DescribeFleetAttributesResponse();
        this.request("DescribeFleetAttributes", req, resp, cb);
    }

    /**
     * 本接口（GetUploadFederationToken）用于 获取生成包上传所需要的临时密钥
     * @param {GetUploadFederationTokenRequest} req
     * @param {function(string, GetUploadFederationTokenResponse):void} cb
     * @public
     */
    GetUploadFederationToken(req, cb) {
        let resp = new GetUploadFederationTokenResponse();
        this.request("GetUploadFederationToken", req, resp, cb);
    }

    /**
     * 本接口（ResolveAlias）用于获取别名当前指向的fleetId
     * @param {ResolveAliasRequest} req
     * @param {function(string, ResolveAliasResponse):void} cb
     * @public
     */
    ResolveAlias(req, cb) {
        let resp = new ResolveAliasResponse();
        this.request("ResolveAlias", req, resp, cb);
    }

    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
     * @param {SearchGameServerSessionsRequest} req
     * @param {function(string, SearchGameServerSessionsResponse):void} cb
     * @public
     */
    SearchGameServerSessions(req, cb) {
        let resp = new SearchGameServerSessionsResponse();
        this.request("SearchGameServerSessions", req, resp, cb);
    }

    /**
     * 本接口（DescribeAssets）用于获取生成包列表
     * @param {DescribeAssetsRequest} req
     * @param {function(string, DescribeAssetsResponse):void} cb
     * @public
     */
    DescribeAssets(req, cb) {
        let resp = new DescribeAssetsResponse();
        this.request("DescribeAssets", req, resp, cb);
    }

    /**
     * 本接口（DescribeCcnInstances）用于查询云联网实例
     * @param {DescribeCcnInstancesRequest} req
     * @param {function(string, DescribeCcnInstancesResponse):void} cb
     * @public
     */
    DescribeCcnInstances(req, cb) {
        let resp = new DescribeCcnInstancesResponse();
        this.request("DescribeCcnInstances", req, resp, cb);
    }

    /**
     * 本接口（StopFleetActions）用于停止服务器舰队自动扩缩容，改为手动扩缩容
     * @param {StopFleetActionsRequest} req
     * @param {function(string, StopFleetActionsResponse):void} cb
     * @public
     */
    StopFleetActions(req, cb) {
        let resp = new StopFleetActionsResponse();
        this.request("StopFleetActions", req, resp, cb);
    }

    /**
     * 本接口（DescribeAlias）用于获取别名详情
     * @param {DescribeAliasRequest} req
     * @param {function(string, DescribeAliasResponse):void} cb
     * @public
     */
    DescribeAlias(req, cb) {
        let resp = new DescribeAliasResponse();
        this.request("DescribeAlias", req, resp, cb);
    }

    /**
     * 本接口（DescribeUserQuotas）用于获取用户配额
     * @param {DescribeUserQuotasRequest} req
     * @param {function(string, DescribeUserQuotasResponse):void} cb
     * @public
     */
    DescribeUserQuotas(req, cb) {
        let resp = new DescribeUserQuotasResponse();
        this.request("DescribeUserQuotas", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstanceTypes）用于获取服务器实例类型列表
     * @param {DescribeInstanceTypesRequest} req
     * @param {function(string, DescribeInstanceTypesResponse):void} cb
     * @public
     */
    DescribeInstanceTypes(req, cb) {
        let resp = new DescribeInstanceTypesResponse();
        this.request("DescribeInstanceTypes", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetEvents）用于查询部署服务器舰队相关的事件列表
     * @param {DescribeFleetEventsRequest} req
     * @param {function(string, DescribeFleetEventsResponse):void} cb
     * @public
     */
    DescribeFleetEvents(req, cb) {
        let resp = new DescribeFleetEventsResponse();
        this.request("DescribeFleetEvents", req, resp, cb);
    }

    /**
     * 设置服务器权重
     * @param {SetServerWeightRequest} req
     * @param {function(string, SetServerWeightResponse):void} cb
     * @public
     */
    SetServerWeight(req, cb) {
        let resp = new SetServerWeightResponse();
        this.request("SetServerWeight", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetUtilization）用于查询服务器舰队的利用率信息
     * @param {DescribeFleetUtilizationRequest} req
     * @param {function(string, DescribeFleetUtilizationResponse):void} cb
     * @public
     */
    DescribeFleetUtilization(req, cb) {
        let resp = new DescribeFleetUtilizationResponse();
        this.request("DescribeFleetUtilization", req, resp, cb);
    }

    /**
     * 本接口（UpdateFleetPortSettings）用于更新服务器舰队安全组
     * @param {UpdateFleetPortSettingsRequest} req
     * @param {function(string, UpdateFleetPortSettingsResponse):void} cb
     * @public
     */
    UpdateFleetPortSettings(req, cb) {
        let resp = new UpdateFleetPortSettingsResponse();
        this.request("UpdateFleetPortSettings", req, resp, cb);
    }


}
module.exports = GseClient;

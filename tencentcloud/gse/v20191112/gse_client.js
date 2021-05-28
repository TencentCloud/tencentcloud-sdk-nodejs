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
const TargetConfiguration = models.TargetConfiguration;
const DeleteGameServerSessionQueueRequest = models.DeleteGameServerSessionQueueRequest;
const FleetAttributes = models.FleetAttributes;
const CreateAssetResponse = models.CreateAssetResponse;
const InboundPermission = models.InboundPermission;
const GetInstanceAccessResponse = models.GetInstanceAccessResponse;
const Asset = models.Asset;
const ListAliasesResponse = models.ListAliasesResponse;
const UpdateBucketCORSOptResponse = models.UpdateBucketCORSOptResponse;
const DeleteGameServerSessionQueueResponse = models.DeleteGameServerSessionQueueResponse;
const DescribeFleetAttributesRequest = models.DescribeFleetAttributesRequest;
const ResolveAliasRequest = models.ResolveAliasRequest;
const GetGameServerInstanceLogUrlResponse = models.GetGameServerInstanceLogUrlResponse;
const StartGameServerSessionPlacementResponse = models.StartGameServerSessionPlacementResponse;
const DescribeFleetStatisticDetailsRequest = models.DescribeFleetStatisticDetailsRequest;
const DescribeAssetSystemsRequest = models.DescribeAssetSystemsRequest;
const GetInstanceAccessRequest = models.GetInstanceAccessRequest;
const CreateFleetRequest = models.CreateFleetRequest;
const StartFleetActionsRequest = models.StartFleetActionsRequest;
const UpdateFleetPortSettingsResponse = models.UpdateFleetPortSettingsResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const ListFleetsResponse = models.ListFleetsResponse;
const DeleteAssetResponse = models.DeleteAssetResponse;
const DescribeFleetUtilizationResponse = models.DescribeFleetUtilizationResponse;
const DescribeFleetRelatedResourcesResponse = models.DescribeFleetRelatedResourcesResponse;
const DescribeScalingPoliciesRequest = models.DescribeScalingPoliciesRequest;
const DeleteFleetRequest = models.DeleteFleetRequest;
const TimerScalingPolicy = models.TimerScalingPolicy;
const DetachCcnInstancesResponse = models.DetachCcnInstancesResponse;
const DescribeFleetPortSettingsResponse = models.DescribeFleetPortSettingsResponse;
const DescribeUserQuotasRequest = models.DescribeUserQuotasRequest;
const UpdateAssetRequest = models.UpdateAssetRequest;
const CcnInfo = models.CcnInfo;
const UpdateFleetPortSettingsRequest = models.UpdateFleetPortSettingsRequest;
const CcnInstanceSets = models.CcnInstanceSets;
const UpdateAliasRequest = models.UpdateAliasRequest;
const GameServerSessionPlacement = models.GameServerSessionPlacement;
const JoinGameServerSessionBatchRequest = models.JoinGameServerSessionBatchRequest;
const GameServerSessionQueue = models.GameServerSessionQueue;
const UpdateFleetCapacityResponse = models.UpdateFleetCapacityResponse;
const DescribeRuntimeConfigurationResponse = models.DescribeRuntimeConfigurationResponse;
const CreateGameServerSessionRequest = models.CreateGameServerSessionRequest;
const UpdateAliasResponse = models.UpdateAliasResponse;
const GameServerSessionDetail = models.GameServerSessionDetail;
const UpdateGameServerSessionQueueResponse = models.UpdateGameServerSessionQueueResponse;
const DescribeGameServerSessionQueuesRequest = models.DescribeGameServerSessionQueuesRequest;
const GetUploadFederationTokenResponse = models.GetUploadFederationTokenResponse;
const DeleteScalingPolicyResponse = models.DeleteScalingPolicyResponse;
const DescribeFleetStatisticSummaryRequest = models.DescribeFleetStatisticSummaryRequest;
const Tag = models.Tag;
const PlayerDataMap = models.PlayerDataMap;
const ResolveAliasResponse = models.ResolveAliasResponse;
const DescribeInstancesExtendResponse = models.DescribeInstancesExtendResponse;
const Event = models.Event;
const PutTimerScalingPolicyRequest = models.PutTimerScalingPolicyRequest;
const RelatedCcnInfo = models.RelatedCcnInfo;
const DescribeCcnInstancesResponse = models.DescribeCcnInstancesResponse;
const AssetSupportSys = models.AssetSupportSys;
const DeleteTimerScalingPolicyResponse = models.DeleteTimerScalingPolicyResponse;
const DescribeTimerScalingPoliciesRequest = models.DescribeTimerScalingPoliciesRequest;
const DescribeInstanceLimitResponse = models.DescribeInstanceLimitResponse;
const DescribeAssetResponse = models.DescribeAssetResponse;
const PlacedPlayerSession = models.PlacedPlayerSession;
const DescribeFleetStatisticSummaryResponse = models.DescribeFleetStatisticSummaryResponse;
const FleetUtilization = models.FleetUtilization;
const DescribeGameServerSessionQueuesResponse = models.DescribeGameServerSessionQueuesResponse;
const DeleteAliasRequest = models.DeleteAliasRequest;
const UpdateBucketCORSOptRequest = models.UpdateBucketCORSOptRequest;
const DescribeAssetSystemsResponse = models.DescribeAssetSystemsResponse;
const DescribeFleetAttributesResponse = models.DescribeFleetAttributesResponse;
const GetUploadCredentialsResponse = models.GetUploadCredentialsResponse;
const AttachCcnInstancesRequest = models.AttachCcnInstancesRequest;
const InboundPermissionRevocations = models.InboundPermissionRevocations;
const DescribeAssetsRequest = models.DescribeAssetsRequest;
const SetServerWeightResponse = models.SetServerWeightResponse;
const ScalingPolicy = models.ScalingPolicy;
const DescribeGameServerSessionsRequest = models.DescribeGameServerSessionsRequest;
const GetUploadCredentialsRequest = models.GetUploadCredentialsRequest;
const DescribePlayerSessionsRequest = models.DescribePlayerSessionsRequest;
const DeleteAssetRequest = models.DeleteAssetRequest;
const DescribeAssetsResponse = models.DescribeAssetsResponse;
const DescribeFleetCapacityRequest = models.DescribeFleetCapacityRequest;
const DescribeCcnInstancesRequest = models.DescribeCcnInstancesRequest;
const DescribeFleetStatisticDetailsResponse = models.DescribeFleetStatisticDetailsResponse;
const DeleteTimerScalingPolicyRequest = models.DeleteTimerScalingPolicyRequest;
const JoinGameServerSessionResponse = models.JoinGameServerSessionResponse;
const AssetCredentials = models.AssetCredentials;
const DescribeFleetRelatedResourcesRequest = models.DescribeFleetRelatedResourcesRequest;
const DescribeGameServerSessionPlacementRequest = models.DescribeGameServerSessionPlacementRequest;
const GameServerSessionQueueDestination = models.GameServerSessionQueueDestination;
const UpdateGameServerSessionQueueRequest = models.UpdateGameServerSessionQueueRequest;
const FleetCapacity = models.FleetCapacity;
const SetServerWeightRequest = models.SetServerWeightRequest;
const GetGameServerSessionLogUrlResponse = models.GetGameServerSessionLogUrlResponse;
const UpdateBucketAccelerateOptRequest = models.UpdateBucketAccelerateOptRequest;
const DeleteFleetResponse = models.DeleteFleetResponse;
const StartGameServerSessionPlacementRequest = models.StartGameServerSessionPlacementRequest;
const InstanceTypeInfo = models.InstanceTypeInfo;
const DescribeGameServerSessionPlacementResponse = models.DescribeGameServerSessionPlacementResponse;
const UpdateRuntimeConfigurationResponse = models.UpdateRuntimeConfigurationResponse;
const CreateAliasResponse = models.CreateAliasResponse;
const ResourceCreationLimitPolicy = models.ResourceCreationLimitPolicy;
const ListFleetsRequest = models.ListFleetsRequest;
const UpdateFleetAttributesRequest = models.UpdateFleetAttributesRequest;
const ExtraInfos = models.ExtraInfos;
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
const DescribeInstanceLimitRequest = models.DescribeInstanceLimitRequest;
const CreateGameServerSessionQueueResponse = models.CreateGameServerSessionQueueResponse;
const DescribeInstanceTypesRequest = models.DescribeInstanceTypesRequest;
const PlayerLatency = models.PlayerLatency;
const SetServerReservedResponse = models.SetServerReservedResponse;
const StopGameServerSessionPlacementRequest = models.StopGameServerSessionPlacementRequest;
const UpdateFleetNameResponse = models.UpdateFleetNameResponse;
const TimerFleetCapacity = models.TimerFleetCapacity;
const DescribeAliasRequest = models.DescribeAliasRequest;
const CreateAliasRequest = models.CreateAliasRequest;
const TimerValue = models.TimerValue;
const CopyFleetResponse = models.CopyFleetResponse;
const UpdateGameServerSessionRequest = models.UpdateGameServerSessionRequest;
const ListAliasesRequest = models.ListAliasesRequest;
const CreateAssetRequest = models.CreateAssetRequest;
const DescribeGameServerSessionDetailsResponse = models.DescribeGameServerSessionDetailsResponse;
const Credentials = models.Credentials;
const GetGameServerSessionLogUrlRequest = models.GetGameServerSessionLogUrlRequest;
const InboundPermissionAuthorization = models.InboundPermissionAuthorization;
const CreateGameServerSessionResponse = models.CreateGameServerSessionResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const QuotaResource = models.QuotaResource;
const DescribeFleetStatisticFlowsResponse = models.DescribeFleetStatisticFlowsResponse;
const DiskInfo = models.DiskInfo;
const TimerConfiguration = models.TimerConfiguration;
const CreateFleetResponse = models.CreateFleetResponse;
const Filter = models.Filter;
const UpdateFleetAttributesResponse = models.UpdateFleetAttributesResponse;
const DescribeFleetUtilizationRequest = models.DescribeFleetUtilizationRequest;
const DescribeInstanceTypesResponse = models.DescribeInstanceTypesResponse;
const StartFleetActionsResponse = models.StartFleetActionsResponse;
const DescribeGameServerSessionDetailsRequest = models.DescribeGameServerSessionDetailsRequest;
const GameServerSession = models.GameServerSession;
const PlayerLatencyPolicy = models.PlayerLatencyPolicy;
const FleetRelatedResource = models.FleetRelatedResource;
const UpdateRuntimeConfigurationRequest = models.UpdateRuntimeConfigurationRequest;
const GameProperty = models.GameProperty;
const CreateAssetWithImageResponse = models.CreateAssetWithImageResponse;
const FleetStatisticTimes = models.FleetStatisticTimes;
const FleetStatisticFlows = models.FleetStatisticFlows;
const DescribeAssetRequest = models.DescribeAssetRequest;
const DescribeInstancesExtendRequest = models.DescribeInstancesExtendRequest;
const DescribeGameServerSessionsResponse = models.DescribeGameServerSessionsResponse;
const InstanceCounts = models.InstanceCounts;
const UpdateBucketAccelerateOptResponse = models.UpdateBucketAccelerateOptResponse;
const JoinGameServerSessionRequest = models.JoinGameServerSessionRequest;
const DescribeUserQuotasResponse = models.DescribeUserQuotasResponse;
const GetUploadFederationTokenRequest = models.GetUploadFederationTokenRequest;
const DescribeTimerScalingPoliciesResponse = models.DescribeTimerScalingPoliciesResponse;
const CopyFleetRequest = models.CopyFleetRequest;
const SearchGameServerSessionsResponse = models.SearchGameServerSessionsResponse;
const PutTimerScalingPolicyResponse = models.PutTimerScalingPolicyResponse;
const DescribeFleetEventsResponse = models.DescribeFleetEventsResponse;
const RoutingStrategy = models.RoutingStrategy;
const GetGameServerInstanceLogUrlRequest = models.GetGameServerInstanceLogUrlRequest;
const DescribeFleetCapacityResponse = models.DescribeFleetCapacityResponse;
const DescribeUserQuotaResponse = models.DescribeUserQuotaResponse;
const DescribeFleetEventsRequest = models.DescribeFleetEventsRequest;
const UpdateAssetResponse = models.UpdateAssetResponse;
const CreateAssetWithImageRequest = models.CreateAssetWithImageRequest;
const PlayerSession = models.PlayerSession;
const PutScalingPolicyResponse = models.PutScalingPolicyResponse;
const CreateGameServerSessionQueueRequest = models.CreateGameServerSessionQueueRequest;
const UpdateFleetNameRequest = models.UpdateFleetNameRequest;
const Alias = models.Alias;
const DescribeRuntimeConfigurationRequest = models.DescribeRuntimeConfigurationRequest;
const RuntimeConfiguration = models.RuntimeConfiguration;
const DescribeScalingPoliciesResponse = models.DescribeScalingPoliciesResponse;
const DetachCcnInstancesRequest = models.DetachCcnInstancesRequest;
const ServerProcesse = models.ServerProcesse;
const UpdateGameServerSessionResponse = models.UpdateGameServerSessionResponse;
const InstanceAccess = models.InstanceAccess;
const UpdateFleetCapacityRequest = models.UpdateFleetCapacityRequest;
const FleetStatisticDetail = models.FleetStatisticDetail;
const DesiredPlayerSession = models.DesiredPlayerSession;
const JoinGameServerSessionBatchResponse = models.JoinGameServerSessionBatchResponse;
const SetServerReservedRequest = models.SetServerReservedRequest;
const InstanceExtend = models.InstanceExtend;
const PutScalingPolicyRequest = models.PutScalingPolicyRequest;
const StopGameServerSessionPlacementResponse = models.StopGameServerSessionPlacementResponse;
const DescribeFleetStatisticFlowsRequest = models.DescribeFleetStatisticFlowsRequest;


/**
 * gse client
 * @class
 */
class GseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gse.tencentcloudapi.com", "2019-11-12", credential, region, profile);
    }
    
    /**
     * 本接口（UpdateBucketCORSOpt）用于设置cos跨域访问。
     * @param {UpdateBucketCORSOptRequest} req
     * @param {function(string, UpdateBucketCORSOptResponse):void} cb
     * @public
     */
    UpdateBucketCORSOpt(req, cb) {
        let resp = new UpdateBucketCORSOptResponse();
        this.request("UpdateBucketCORSOpt", req, resp, cb);
    }

    /**
     * 本接口（DeleteFleet）用于删除服务器舰队。
     * @param {DeleteFleetRequest} req
     * @param {function(string, DeleteFleetResponse):void} cb
     * @public
     */
    DeleteFleet(req, cb) {
        let resp = new DeleteFleetResponse();
        this.request("DeleteFleet", req, resp, cb);
    }

    /**
     * 本接口（UpdateFleetCapacity）用于更新服务器舰队容量配置。
     * @param {UpdateFleetCapacityRequest} req
     * @param {function(string, UpdateFleetCapacityResponse):void} cb
     * @public
     */
    UpdateFleetCapacity(req, cb) {
        let resp = new UpdateFleetCapacityResponse();
        this.request("UpdateFleetCapacity", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetRelatedResources）用于获取与游戏服务器舰队关联的资源信息，如别名、队列
     * @param {DescribeFleetRelatedResourcesRequest} req
     * @param {function(string, DescribeFleetRelatedResourcesResponse):void} cb
     * @public
     */
    DescribeFleetRelatedResources(req, cb) {
        let resp = new DescribeFleetRelatedResourcesResponse();
        this.request("DescribeFleetRelatedResources", req, resp, cb);
    }

    /**
     * 本接口（DescribeRuntimeConfiguration）用于获取服务器舰队运行配置。
     * @param {DescribeRuntimeConfigurationRequest} req
     * @param {function(string, DescribeRuntimeConfigurationResponse):void} cb
     * @public
     */
    DescribeRuntimeConfiguration(req, cb) {
        let resp = new DescribeRuntimeConfigurationResponse();
        this.request("DescribeRuntimeConfiguration", req, resp, cb);
    }

    /**
     * 本接口（UpdateAlias）用于更新别名的属性。
     * @param {UpdateAliasRequest} req
     * @param {function(string, UpdateAliasResponse):void} cb
     * @public
     */
    UpdateAlias(req, cb) {
        let resp = new UpdateAliasResponse();
        this.request("UpdateAlias", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置。
     * @param {DescribeGameServerSessionPlacementRequest} req
     * @param {function(string, DescribeGameServerSessionPlacementResponse):void} cb
     * @public
     */
    DescribeGameServerSessionPlacement(req, cb) {
        let resp = new DescribeGameServerSessionPlacementResponse();
        this.request("DescribeGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表。
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
通过获取上传cos的临时密钥，将文件上传至cos，然后将生成包的zip名称下发给本接口完成资源创建。  

上传文件至 cos支持俩种方式：

- 获取预签名方式，COS 简单上传
    1. [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) 获取预签名信息
    2. 使用 COS API 进行上传([参考文档](https://cloud.tencent.com/document/product/436/7749))
-  临时密钥方式，COS 简单上传或者分块上传方式
    1. [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727)（获取上传 bucket  第一次调用需要，后续可以不用调用）
    2. [GetUploadFederationToken](https://cloud.tencent.com/document/product/1165/48742) 获取临时密钥
    3. 使用 COS API 进行上传([参考文档](https://cloud.tencent.com/document/product/436/7742))

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
     * 本接口（SetServerReserved）用于将异常的实例标记为保留，用于问题排查。

字段ReserveValue：0默认值，不保留；1 保留

     * @param {SetServerReservedRequest} req
     * @param {function(string, SetServerReservedResponse):void} cb
     * @public
     */
    SetServerReserved(req, cb) {
        let resp = new SetServerReservedResponse();
        this.request("SetServerReserved", req, resp, cb);
    }

    /**
     * 本接口（CreateGameServerSessionQueue）用于创建游戏服务器会话队列。
     * @param {CreateGameServerSessionQueueRequest} req
     * @param {function(string, CreateGameServerSessionQueueResponse):void} cb
     * @public
     */
    CreateGameServerSessionQueue(req, cb) {
        let resp = new CreateGameServerSessionQueueResponse();
        this.request("CreateGameServerSessionQueue", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstanceLimit）用于查询用户实例数限额。
     * @param {DescribeInstanceLimitRequest} req
     * @param {function(string, DescribeInstanceLimitResponse):void} cb
     * @public
     */
    DescribeInstanceLimit(req, cb) {
        let resp = new DescribeInstanceLimitResponse();
        this.request("DescribeInstanceLimit", req, resp, cb);
    }

    /**
     * 本接口（DeleteAsset）用于删除生成包。
     * @param {DeleteAssetRequest} req
     * @param {function(string, DeleteAssetResponse):void} cb
     * @public
     */
    DeleteAsset(req, cb) {
        let resp = new DeleteAssetResponse();
        this.request("DeleteAsset", req, resp, cb);
    }

    /**
     * 本接口（ListFleets）用于获取服务器舰队列表。
     * @param {ListFleetsRequest} req
     * @param {function(string, ListFleetsResponse):void} cb
     * @public
     */
    ListFleets(req, cb) {
        let resp = new ListFleetsResponse();
        this.request("ListFleets", req, resp, cb);
    }

    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL。
     * @param {GetGameServerSessionLogUrlRequest} req
     * @param {function(string, GetGameServerSessionLogUrlResponse):void} cb
     * @public
     */
    GetGameServerSessionLogUrl(req, cb) {
        let resp = new GetGameServerSessionLogUrlResponse();
        this.request("GetGameServerSessionLogUrl", req, resp, cb);
    }

    /**
     * 本接口（UpdateRuntimeConfiguration）用于更新服务器舰队配置。
     * @param {UpdateRuntimeConfigurationRequest} req
     * @param {function(string, UpdateRuntimeConfigurationResponse):void} cb
     * @public
     */
    UpdateRuntimeConfiguration(req, cb) {
        let resp = new UpdateRuntimeConfigurationResponse();
        this.request("UpdateRuntimeConfiguration", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetCapacity）用于查询服务部署容量配置。
     * @param {DescribeFleetCapacityRequest} req
     * @param {function(string, DescribeFleetCapacityResponse):void} cb
     * @public
     */
    DescribeFleetCapacity(req, cb) {
        let resp = new DescribeFleetCapacityResponse();
        this.request("DescribeFleetCapacity", req, resp, cb);
    }

    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话。
     * @param {StopGameServerSessionPlacementRequest} req
     * @param {function(string, StopGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StopGameServerSessionPlacement(req, cb) {
        let resp = new StopGameServerSessionPlacementResponse();
        this.request("StopGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * 本接口（UpdateBucketAccelerateOpt）用于开启cos全球加速。
     * @param {UpdateBucketAccelerateOptRequest} req
     * @param {function(string, UpdateBucketAccelerateOptResponse):void} cb
     * @public
     */
    UpdateBucketAccelerateOpt(req, cb) {
        let resp = new UpdateBucketAccelerateOptResponse();
        this.request("UpdateBucketAccelerateOpt", req, resp, cb);
    }

    /**
     * 本接口（DeleteGameServerSessionQueue）用于删除游戏服务器会话队列。
     * @param {DeleteGameServerSessionQueueRequest} req
     * @param {function(string, DeleteGameServerSessionQueueResponse):void} cb
     * @public
     */
    DeleteGameServerSessionQueue(req, cb) {
        let resp = new DeleteGameServerSessionQueueResponse();
        this.request("DeleteGameServerSessionQueue", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列。
     * @param {DescribeGameServerSessionQueuesRequest} req
     * @param {function(string, DescribeGameServerSessionQueuesResponse):void} cb
     * @public
     */
    DescribeGameServerSessionQueues(req, cb) {
        let resp = new DescribeGameServerSessionQueuesResponse();
        this.request("DescribeGameServerSessionQueues", req, resp, cb);
    }

    /**
     * 本接口（DescribeCcnInstances）用于查询云联网实例。
     * @param {DescribeCcnInstancesRequest} req
     * @param {function(string, DescribeCcnInstancesResponse):void} cb
     * @public
     */
    DescribeCcnInstances(req, cb) {
        let resp = new DescribeCcnInstancesResponse();
        this.request("DescribeCcnInstances", req, resp, cb);
    }

    /**
     * 本接口（PutScalingPolicy）用于设置服务器舰队的动态扩缩容策略。

通过此接口可以增加或者更新服务器舰队的扩缩容策略。
服务器舰队可以有多个扩缩容策略，但是只有一个TargetBased基于目标的策略。

## TargetBased基于目标的策略

TargetBased策略计算的指标是PercentAvailableGameSessions，这个策略用于计算当前服务器舰队应该有多少个CVM实例来支撑和分配游戏会话。
PercentAvailableGameSessions表示服务器舰队的缓冲值；用来计算服务器舰队在当前容量下可以处理的额外玩家会话数量。
如果使用基于目标的策略，可以按照业务需求设置一个期望的缓冲区大小，GSE的会按照配置的策略来扩容和缩容到这个目标要求的CVM实例数。

例如：客户可以设置同时承载100个游戏会话的服务器舰队预留10%的缓冲区。GSE会按照这个策略执行时，若服务器舰队的可用容量低于或高于10%的游戏服务器会话时，执行扩缩容动作。
GSE按照策略期望，扩容新CVM实例或缩容未使用的实例，保持在10%左右的缓冲区。

#### 请求参数取值说明

```
Name取值策略名称，
FleetId取值为选择的服务器舰队ID，
PolicyType取值TargetBased，
MetricName取值PercentAvailableGameSessions，
TargetConfiguration取值为所需的缓冲区值对象，
其他参数不用传递。
请求成功时，将返回策略名称。扩缩容策略在成功创建立即自动生效。
```



## RuleBased基于规则的策略

####  请求参数取值说明

```
Name取值策略名称，
FleetId取值为选择的服务器舰队ID，
PolicyType取值RuleBased，
MetricName取值（AvailableGameServerSessions，AvailableCustomCount，PercentAvailableCustomCount，ActiveInstances，IdleInstances，CurrentPlayerSessions和PercentIdleInstances）说明见备注1，
其他参数不用传递。
ComparisonOperator取值为 >,>=,<,<=这4个比较符号中的一个，
Threshold取值为指标MetricName达到的阈值是多少，
EvaluationPeriods取值为指标MetricName达到的阈值持续了多少时间，单位是分钟，
ScalingAdjustmentType取值（ChangeInCapacity，ExactCapacity，PercentChangeInCapacity）说明见备注2
ScalingAdjustment取值为指标MetricName达到的阈值的条件后，扩缩容多少个CVM实例。
请求成功时，将返回策略名称。扩缩容策略在成功创建立即自动生效。
```

规则执行的条件表达式如下所示：

```
若 [MetricName] 是 [ComparisonOperator] [Threshold] 持续 [EvaluationPeriods] 分钟, 则 [ScalingAdjustmentType] 调整 [ScalingAdjustment]个实例。
```
```
if [MetricName] ComparisonOperator [Threshold] for [EvaluationPeriods] minutes, then scaling up by/to  [ScalingAdjustment]
```
例如1：如果当前AvailableCustomCount值大于等于10，持续5分钟，扩容1台CVM实例。
```
ScalingAdjustmentType = ChangeInCapacity
if [AvailableGameServerSessions] >= [10] for [5] minutes, then scaling up [1]
```
例如2：如果当前AvailableGameServerSessions值大于等于200，持续5分钟，扩容到2台CVM实例。
```
ScalingAdjustmentType = ExactCapacity
if [AvailableGameServerSessions] >= [200] for [5] minutes, then scaling to [2]
```
例如3：如果当前AvailableCustomCount值大于等于400，持续5分钟，扩容20%台CVM实例。
当前CVM实例数为10台。扩容20%台CVM实例就是增加 10*20%等于2台
```
ScalingAdjustmentType = PercentChangeInCapacity
if [AvailableGameServerSessions] >= [400] for [5] minutes, then scaling by [currentCVMCount * 20 %]
```
**备注1**

- | 策略名称（MetricName）                                       | 计算公式                                   | 场景                                        | 场景使用举例                                                 |
  | :----------------------------------------------------------- | :----------------------------------------- | :------------------------------------------ | :----------------------------------------------------------- |
  | CurrentPlayerSessions<br>当前玩家数指标                      | = 当前在线的玩家数                         | CVM随着玩家会话数变化做扩缩容。             | 例如：<br>MetricName: CurrentPlayerSessions<br>ComparisonOperator: '<=' <br>Threshold: 300<br/>EvaluationPeriods: 1<br/>ScalingAdjustment: 2<br/>ScalingAdjustment: ChangeInCapacity<br>说明：若当前CurrentPlayerSessions小于等于300，持续1分钟，则扩容2台CVM。 |
  | AvailableGameServerSessions<br>可用游戏服务器会话数          | = 可用游戏服务会话数                       | CVM随着可用游戏会话数变化做扩缩容。         | 例如：<br/>MetricName: AvailableGameServerSessions<br/>ComparisonOperator: '<' <br/>Threshold: 50<br/>EvaluationPeriods: 5<br/>ScalingAdjustment: 2<br/>ScalingAdjustment: ExactCapacity<br/>说明：若当前AvailableGameServerSessions小于50，持续5分钟，则扩容到2台CVM。 |
  | PercentAvailableGameServerSessions<br>可用游戏服务器会话百分比 | = 空闲游戏会话数 / 所有的游戏会话数 * 100% | CVM随着可用游戏会话数百分比变化做扩缩容。   | 例如：<br/>MetricName: PercentAvailableGameServerSessions<br/>ComparisonOperator: '<' <br/>Threshold: 50<br/>EvaluationPeriods: 1<br/>ScalingAdjustment: -30<br/>ScalingAdjustment: PercentChangeInCapacity<br/>说明：若当前PercentAvailableGameServerSessions小于50%，持续1分钟，则缩容当前实例数30%台CVM。 |
  | AvailableCustomCount<br>可用客户自定义数指标                 | = 客户自定义的数                           | CVM随着可用客户自定义数变化做扩缩容。       | 例如：<br/>MetricName: AvailableCustomCount<br/>ComparisonOperator: '>=' <br/>Threshold: 6<br/>EvaluationPeriods: 3<br/>ScalingAdjustment: -1<br/>ScalingAdjustment: ExactCapacity<br/>说明：若当前AvailableCustomCount大于等于6，持续3分钟，则缩容到1台CVM。 |
  | PercentAvailableCustomCount<br>可用客户自定义数百分比        | = 客户自定义数 / 客户最大自定义数* 100%    | CVM随着可用客户自定义数百分比变化做扩缩容。 | 例如：<br/>MetricName: PercentAvailableCustomCount<br/>ComparisonOperator: '<' <br/>Threshold: 15<br/>EvaluationPeriods: 3<br/>ScalingAdjustment: 1<br/>ScalingAdjustment: ChangeInCapacity<br/>说明：若当前PercentAvailableCustomCount小于15%，持续3分钟，则扩容1台CVM。 |
  | ActiveInstances<br>活跃实例数指标                            | = 总实例数 - 缩容中的实例数                | CVM随着活跃实例数变化做扩缩容。             | 例如：<br/>MetricName: ActiveInstances<br/>ComparisonOperator: '<' <br/>Threshold: 3<br/>EvaluationPeriods: 1<br/>ScalingAdjustment: 3<br/>ScalingAdjustment: ExactCapacity<br/>说明：若当前ActiveInstances小于3台，持续1分钟，则扩容保留到3台CVM。 |
  | IdleInstances<br>空闲实例数指标                              | = 未使用的进程数 / 每实例进程数            | CVM随着空闲实例数变化做扩缩容。             | 例如：<br/>MetricName: IdleInstances<br/>ComparisonOperator: '<' <br/>Threshold: 2<br/>EvaluationPeriods: 3<br/>ScalingAdjustment: 1<br/>ScalingAdjustment: ChangeInCapacity<br/>说明：若当前IdleInstances小于2台，持续3分钟，则扩容1台CVM。 |
  | PercentIdleInstances<br>空闲实例百分比                       | = IdleInstances / ActiveInstances * 100%   | CVM随着空闲实例百分比变化做扩缩容。         | 例如：<br/>MetricName: PercentIdleInstances<br/>ComparisonOperator: '<' <br/>Threshold: 50<br/>EvaluationPeriods: 3<br/>ScalingAdjustment: 1<br/>ScalingAdjustment: ChangeInCapacity<br/>说明：若当前PercentIdleInstances小于50%，持续3分钟，则扩容1台CVM。 |



**备注2**

**ChangeInCapacity**

    当前CVM实例个数的扩容或缩容的调整值。正值按值扩容，负值按值缩容。

**ExactCapacity**

    把当前CVM实例个数调整为ScalingAdjustment设置的CVM实例数。

**PercentChangeInCapacity**

    按比例增加或减少的百分比。正值按比例扩容，负值按比例缩容；例如，值“-10”将按10%的比例缩容CVM实例。
     * @param {PutScalingPolicyRequest} req
     * @param {function(string, PutScalingPolicyResponse):void} cb
     * @public
     */
    PutScalingPolicy(req, cb) {
        let resp = new PutScalingPolicyResponse();
        this.request("PutScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口（DescribeScalingPolicies）用于查询服务器舰队的动态扩缩容策略列表。
     * @param {DescribeScalingPoliciesRequest} req
     * @param {function(string, DescribeScalingPoliciesResponse):void} cb
     * @public
     */
    DescribeScalingPolicies(req, cb) {
        let resp = new DescribeScalingPoliciesResponse();
        this.request("DescribeScalingPolicies", req, resp, cb);
    }

    /**
     * 本接口（CopyFleet）用于复制服务器舰队。
     * @param {CopyFleetRequest} req
     * @param {function(string, CopyFleetResponse):void} cb
     * @public
     */
    CopyFleet(req, cb) {
        let resp = new CopyFleetResponse();
        this.request("CopyFleet", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表。
     * @param {DescribeGameServerSessionsRequest} req
     * @param {function(string, DescribeGameServerSessionsResponse):void} cb
     * @public
     */
    DescribeGameServerSessions(req, cb) {
        let resp = new DescribeGameServerSessionsResponse();
        this.request("DescribeGameServerSessions", req, resp, cb);
    }

    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话。
     * @param {StartGameServerSessionPlacementRequest} req
     * @param {function(string, StartGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StartGameServerSessionPlacement(req, cb) {
        let resp = new StartGameServerSessionPlacementResponse();
        this.request("StartGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话。
     * @param {JoinGameServerSessionRequest} req
     * @param {function(string, JoinGameServerSessionResponse):void} cb
     * @public
     */
    JoinGameServerSession(req, cb) {
        let resp = new JoinGameServerSessionResponse();
        this.request("JoinGameServerSession", req, resp, cb);
    }

    /**
     * 本接口（JoinGameServerSessionBatch）用于批量加入游戏服务器会话。
     * @param {JoinGameServerSessionBatchRequest} req
     * @param {function(string, JoinGameServerSessionBatchResponse):void} cb
     * @public
     */
    JoinGameServerSessionBatch(req, cb) {
        let resp = new JoinGameServerSessionBatchResponse();
        this.request("JoinGameServerSessionBatch", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetStatisticSummary）用于查询服务部署统计汇总信息。
     * @param {DescribeFleetStatisticSummaryRequest} req
     * @param {function(string, DescribeFleetStatisticSummaryResponse):void} cb
     * @public
     */
    DescribeFleetStatisticSummary(req, cb) {
        let resp = new DescribeFleetStatisticSummaryResponse();
        this.request("DescribeFleetStatisticSummary", req, resp, cb);
    }

    /**
     * 本接口（DeleteAlias）用于删除别名。
     * @param {DeleteAliasRequest} req
     * @param {function(string, DeleteAliasResponse):void} cb
     * @public
     */
    DeleteAlias(req, cb) {
        let resp = new DeleteAliasResponse();
        this.request("DeleteAlias", req, resp, cb);
    }

    /**
     * 本接口（DeleteTimerScalingPolicy）用于删除fleet下的定时器。

     * @param {DeleteTimerScalingPolicyRequest} req
     * @param {function(string, DeleteTimerScalingPolicyResponse):void} cb
     * @public
     */
    DeleteTimerScalingPolicy(req, cb) {
        let resp = new DeleteTimerScalingPolicyResponse();
        this.request("DeleteTimerScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口（UpdateAsset）用于修改生成包信息。
     * @param {UpdateAssetRequest} req
     * @param {function(string, UpdateAssetResponse):void} cb
     * @public
     */
    UpdateAsset(req, cb) {
        let resp = new UpdateAssetResponse();
        this.request("UpdateAsset", req, resp, cb);
    }

    /**
     * 本接口（StartFleetActions）用于启用服务器舰队自动扩缩容。
     * @param {StartFleetActionsRequest} req
     * @param {function(string, StartFleetActionsResponse):void} cb
     * @public
     */
    StartFleetActions(req, cb) {
        let resp = new StartFleetActionsResponse();
        this.request("StartFleetActions", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetPortSettings）用于获取服务器舰队安全组信息。
     * @param {DescribeFleetPortSettingsRequest} req
     * @param {function(string, DescribeFleetPortSettingsResponse):void} cb
     * @public
     */
    DescribeFleetPortSettings(req, cb) {
        let resp = new DescribeFleetPortSettingsResponse();
        this.request("DescribeFleetPortSettings", req, resp, cb);
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
     * 本接口（AttachCcnInstances）用于关联云联网实例。
     * @param {AttachCcnInstancesRequest} req
     * @param {function(string, AttachCcnInstancesResponse):void} cb
     * @public
     */
    AttachCcnInstances(req, cb) {
        let resp = new AttachCcnInstancesResponse();
        this.request("AttachCcnInstances", req, resp, cb);
    }

    /**
     * 本接口（DetachCcnInstances）用于解关联云联网实例。
     * @param {DetachCcnInstancesRequest} req
     * @param {function(string, DetachCcnInstancesResponse):void} cb
     * @public
     */
    DetachCcnInstances(req, cb) {
        let resp = new DetachCcnInstancesResponse();
        this.request("DetachCcnInstances", req, resp, cb);
    }

    /**
     * 本接口（DeleteScalingPolicy）用于删除服务器舰队的扩缩容策略。
通过服务器舰队ID和策略名称删除服务器舰队的扩缩容策略，只传递服务器舰队ID时，会将这个服务器舰队下的所有策略都删除。
传递策略名称时，单独删除策略名称对应的策略。
     * @param {DeleteScalingPolicyRequest} req
     * @param {function(string, DeleteScalingPolicyResponse):void} cb
     * @public
     */
    DeleteScalingPolicy(req, cb) {
        let resp = new DeleteScalingPolicyResponse();
        this.request("DeleteScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口（CreateAlias）用于创建别名。
     * @param {CreateAliasRequest} req
     * @param {function(string, CreateAliasResponse):void} cb
     * @public
     */
    CreateAlias(req, cb) {
        let resp = new CreateAliasResponse();
        this.request("CreateAlias", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetStatisticFlows）用于查询服务部署统计用量。
     * @param {DescribeFleetStatisticFlowsRequest} req
     * @param {function(string, DescribeFleetStatisticFlowsResponse):void} cb
     * @public
     */
    DescribeFleetStatisticFlows(req, cb) {
        let resp = new DescribeFleetStatisticFlowsResponse();
        this.request("DescribeFleetStatisticFlows", req, resp, cb);
    }

    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话。
     * @param {CreateGameServerSessionRequest} req
     * @param {function(string, CreateGameServerSessionResponse):void} cb
     * @public
     */
    CreateGameServerSession(req, cb) {
        let resp = new CreateGameServerSessionResponse();
        this.request("CreateGameServerSession", req, resp, cb);
    }

    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表。
     * @param {DescribePlayerSessionsRequest} req
     * @param {function(string, DescribePlayerSessionsResponse):void} cb
     * @public
     */
    DescribePlayerSessions(req, cb) {
        let resp = new DescribePlayerSessionsResponse();
        this.request("DescribePlayerSessions", req, resp, cb);
    }

    /**
     * 本接口（DescribeAsset）获取生成包信息。
     * @param {DescribeAssetRequest} req
     * @param {function(string, DescribeAssetResponse):void} cb
     * @public
     */
    DescribeAsset(req, cb) {
        let resp = new DescribeAssetResponse();
        this.request("DescribeAsset", req, resp, cb);
    }

    /**
     * 本接口（DescribeAssetSystems）用于获取生成包支持的操作系统。
     * @param {DescribeAssetSystemsRequest} req
     * @param {function(string, DescribeAssetSystemsResponse):void} cb
     * @public
     */
    DescribeAssetSystems(req, cb) {
        let resp = new DescribeAssetSystemsResponse();
        this.request("DescribeAssetSystems", req, resp, cb);
    }

    /**
     * 本接口（CreateFleet）用于创建服务器舰队。
     * @param {CreateFleetRequest} req
     * @param {function(string, CreateFleetResponse):void} cb
     * @public
     */
    CreateFleet(req, cb) {
        let resp = new CreateFleetResponse();
        this.request("CreateFleet", req, resp, cb);
    }

    /**
     * 本接口（DescribeTimerScalingPolicies）用于查询fleet下的定时器列表。可以通过fleetid，定时器名称分页查询。

     * @param {DescribeTimerScalingPoliciesRequest} req
     * @param {function(string, DescribeTimerScalingPoliciesResponse):void} cb
     * @public
     */
    DescribeTimerScalingPolicies(req, cb) {
        let resp = new DescribeTimerScalingPoliciesResponse();
        this.request("DescribeTimerScalingPolicies", req, resp, cb);
    }

    /**
     * 本接口（UpdateGameServerSessionQueue）用于修改游戏服务器会话队列。
     * @param {UpdateGameServerSessionQueueRequest} req
     * @param {function(string, UpdateGameServerSessionQueueResponse):void} cb
     * @public
     */
    UpdateGameServerSessionQueue(req, cb) {
        let resp = new UpdateGameServerSessionQueueResponse();
        this.request("UpdateGameServerSessionQueue", req, resp, cb);
    }

    /**
     * 本接口（GetInstanceAccess）用于获取实例登录所需要的凭据。
     * @param {GetInstanceAccessRequest} req
     * @param {function(string, GetInstanceAccessResponse):void} cb
     * @public
     */
    GetInstanceAccess(req, cb) {
        let resp = new GetInstanceAccessResponse();
        this.request("GetInstanceAccess", req, resp, cb);
    }

    /**
     * 本接口（UpdateFleetAttributes）用于更新服务器舰队属性。
     * @param {UpdateFleetAttributesRequest} req
     * @param {function(string, UpdateFleetAttributesResponse):void} cb
     * @public
     */
    UpdateFleetAttributes(req, cb) {
        let resp = new UpdateFleetAttributesResponse();
        this.request("UpdateFleetAttributes", req, resp, cb);
    }

    /**
     * 本接口（DescribeUserQuota）获取用户单个模块配额。
     * @param {DescribeUserQuotaRequest} req
     * @param {function(string, DescribeUserQuotaResponse):void} cb
     * @public
     */
    DescribeUserQuota(req, cb) {
        let resp = new DescribeUserQuotaResponse();
        this.request("DescribeUserQuota", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetAttributes）用于查询服务器舰队属性。
     * @param {DescribeFleetAttributesRequest} req
     * @param {function(string, DescribeFleetAttributesResponse):void} cb
     * @public
     */
    DescribeFleetAttributes(req, cb) {
        let resp = new DescribeFleetAttributesResponse();
        this.request("DescribeFleetAttributes", req, resp, cb);
    }

    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话。
     * @param {UpdateGameServerSessionRequest} req
     * @param {function(string, UpdateGameServerSessionResponse):void} cb
     * @public
     */
    UpdateGameServerSession(req, cb) {
        let resp = new UpdateGameServerSessionResponse();
        this.request("UpdateGameServerSession", req, resp, cb);
    }

    /**
     * 本接口（GetUploadFederationToken）用于 获取生成包上传所需要的临时密钥。
     * @param {GetUploadFederationTokenRequest} req
     * @param {function(string, GetUploadFederationTokenResponse):void} cb
     * @public
     */
    GetUploadFederationToken(req, cb) {
        let resp = new GetUploadFederationTokenResponse();
        this.request("GetUploadFederationToken", req, resp, cb);
    }

    /**
     * 本接口用于获取游戏服务器实例的日志URL。
     * @param {GetGameServerInstanceLogUrlRequest} req
     * @param {function(string, GetGameServerInstanceLogUrlResponse):void} cb
     * @public
     */
    GetGameServerInstanceLogUrl(req, cb) {
        let resp = new GetGameServerInstanceLogUrlResponse();
        this.request("GetGameServerInstanceLogUrl", req, resp, cb);
    }

    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表。
     * @param {SearchGameServerSessionsRequest} req
     * @param {function(string, SearchGameServerSessionsResponse):void} cb
     * @public
     */
    SearchGameServerSessions(req, cb) {
        let resp = new SearchGameServerSessionsResponse();
        this.request("SearchGameServerSessions", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetStatisticDetails）用于查询服务部署统计详情。
     * @param {DescribeFleetStatisticDetailsRequest} req
     * @param {function(string, DescribeFleetStatisticDetailsResponse):void} cb
     * @public
     */
    DescribeFleetStatisticDetails(req, cb) {
        let resp = new DescribeFleetStatisticDetailsResponse();
        this.request("DescribeFleetStatisticDetails", req, resp, cb);
    }

    /**
     * 本接口（DescribeAssets）用于获取生成包列表。
     * @param {DescribeAssetsRequest} req
     * @param {function(string, DescribeAssetsResponse):void} cb
     * @public
     */
    DescribeAssets(req, cb) {
        let resp = new DescribeAssetsResponse();
        this.request("DescribeAssets", req, resp, cb);
    }

    /**
     * 本接口（CreateAssetWithImage）用于创建生成包镜像信息。
     * @param {CreateAssetWithImageRequest} req
     * @param {function(string, CreateAssetWithImageResponse):void} cb
     * @public
     */
    CreateAssetWithImage(req, cb) {
        let resp = new CreateAssetWithImageResponse();
        this.request("CreateAssetWithImage", req, resp, cb);
    }

    /**
     * 本接口（StopFleetActions）用于停止服务器舰队自动扩缩容，改为手动扩缩容。
     * @param {StopFleetActionsRequest} req
     * @param {function(string, StopFleetActionsResponse):void} cb
     * @public
     */
    StopFleetActions(req, cb) {
        let resp = new StopFleetActionsResponse();
        this.request("StopFleetActions", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstancesExtend）用于查询实例扩展信息列表。
     * @param {DescribeInstancesExtendRequest} req
     * @param {function(string, DescribeInstancesExtendResponse):void} cb
     * @public
     */
    DescribeInstancesExtend(req, cb) {
        let resp = new DescribeInstancesExtendResponse();
        this.request("DescribeInstancesExtend", req, resp, cb);
    }

    /**
     * 本接口（DescribeAlias）用于获取别名详情。
     * @param {DescribeAliasRequest} req
     * @param {function(string, DescribeAliasResponse):void} cb
     * @public
     */
    DescribeAlias(req, cb) {
        let resp = new DescribeAliasResponse();
        this.request("DescribeAlias", req, resp, cb);
    }

    /**
     * 本接口（ListAliases）用于检索帐户下的所有别名。
     * @param {ListAliasesRequest} req
     * @param {function(string, ListAliasesResponse):void} cb
     * @public
     */
    ListAliases(req, cb) {
        let resp = new ListAliasesResponse();
        this.request("ListAliases", req, resp, cb);
    }

    /**
     * 本接口（UpdateFleetPortSettings）用于更新服务器舰队安全组。
     * @param {UpdateFleetPortSettingsRequest} req
     * @param {function(string, UpdateFleetPortSettingsResponse):void} cb
     * @public
     */
    UpdateFleetPortSettings(req, cb) {
        let resp = new UpdateFleetPortSettingsResponse();
        this.request("UpdateFleetPortSettings", req, resp, cb);
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
     * 本接口（DescribeInstanceTypes）用于获取服务器实例类型列表。
     * @param {DescribeInstanceTypesRequest} req
     * @param {function(string, DescribeInstanceTypesResponse):void} cb
     * @public
     */
    DescribeInstanceTypes(req, cb) {
        let resp = new DescribeInstanceTypesResponse();
        this.request("DescribeInstanceTypes", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetEvents）用于查询服务器舰队相关的事件列表。
     * @param {DescribeFleetEventsRequest} req
     * @param {function(string, DescribeFleetEventsResponse):void} cb
     * @public
     */
    DescribeFleetEvents(req, cb) {
        let resp = new DescribeFleetEventsResponse();
        this.request("DescribeFleetEvents", req, resp, cb);
    }

    /**
     * 本接口（SetServerWeight）用于设置服务器权重。
     * @param {SetServerWeightRequest} req
     * @param {function(string, SetServerWeightResponse):void} cb
     * @public
     */
    SetServerWeight(req, cb) {
        let resp = new SetServerWeightResponse();
        this.request("SetServerWeight", req, resp, cb);
    }

    /**
     * 本接口（UpdateFleetName）用于更新服务器舰队名称。
     * @param {UpdateFleetNameRequest} req
     * @param {function(string, UpdateFleetNameResponse):void} cb
     * @public
     */
    UpdateFleetName(req, cb) {
        let resp = new UpdateFleetNameResponse();
        this.request("UpdateFleetName", req, resp, cb);
    }

    /**
     * 本接口（DescribeFleetUtilization）用于查询服务器舰队的利用率信息。
     * @param {DescribeFleetUtilizationRequest} req
     * @param {function(string, DescribeFleetUtilizationResponse):void} cb
     * @public
     */
    DescribeFleetUtilization(req, cb) {
        let resp = new DescribeFleetUtilizationResponse();
        this.request("DescribeFleetUtilization", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstances）用于查询服务器实例列表。
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 本接口（ResolveAlias）用于获取别名当前指向的fleetId。
     * @param {ResolveAliasRequest} req
     * @param {function(string, ResolveAliasResponse):void} cb
     * @public
     */
    ResolveAlias(req, cb) {
        let resp = new ResolveAliasResponse();
        this.request("ResolveAlias", req, resp, cb);
    }

    /**
     * 本接口（PutTimerScalingPolicy）用于给fleet创建或更新定时器。

填写字段timer_id，表示更新；不填字段timer_id表示新增。

     * @param {PutTimerScalingPolicyRequest} req
     * @param {function(string, PutTimerScalingPolicyResponse):void} cb
     * @public
     */
    PutTimerScalingPolicy(req, cb) {
        let resp = new PutTimerScalingPolicyResponse();
        this.request("PutTimerScalingPolicy", req, resp, cb);
    }


}
module.exports = GseClient;

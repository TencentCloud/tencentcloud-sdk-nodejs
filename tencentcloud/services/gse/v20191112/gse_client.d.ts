import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteGameServerSessionQueueRequest, CreateAssetResponse, GetInstanceAccessResponse, ListAliasesResponse, UpdateBucketCORSOptResponse, DeleteGameServerSessionQueueResponse, DescribeFleetAttributesRequest, ResolveAliasRequest, GetGameServerInstanceLogUrlResponse, StartGameServerSessionPlacementResponse, DescribeFleetStatisticDetailsRequest, DescribeAssetSystemsRequest, GetInstanceAccessRequest, CreateFleetRequest, StartFleetActionsRequest, UpdateFleetPortSettingsResponse, DescribeInstancesResponse, ListFleetsResponse, DeleteAssetResponse, DescribeFleetUtilizationResponse, DescribeFleetRelatedResourcesResponse, DescribeScalingPoliciesRequest, DeleteFleetRequest, DetachCcnInstancesResponse, DescribeFleetPortSettingsResponse, DescribeUserQuotasRequest, UpdateAssetRequest, UpdateFleetPortSettingsRequest, UpdateAliasRequest, JoinGameServerSessionBatchRequest, UpdateFleetCapacityResponse, DescribeRuntimeConfigurationResponse, CreateGameServerSessionRequest, UpdateAliasResponse, UpdateGameServerSessionQueueResponse, DescribeGameServerSessionQueuesRequest, GetUploadFederationTokenResponse, DeleteScalingPolicyResponse, DescribeFleetStatisticSummaryRequest, ResolveAliasResponse, DescribeInstancesExtendResponse, PutTimerScalingPolicyRequest, DescribeCcnInstancesResponse, DeleteTimerScalingPolicyResponse, DescribeTimerScalingPoliciesRequest, DescribeInstanceLimitResponse, DescribeAssetResponse, DescribeFleetStatisticSummaryResponse, DescribeGameServerSessionQueuesResponse, DeleteAliasRequest, UpdateBucketCORSOptRequest, DescribeAssetSystemsResponse, DescribeFleetAttributesResponse, GetUploadCredentialsResponse, AttachCcnInstancesRequest, DescribeAssetsRequest, SetServerWeightResponse, DescribeGameServerSessionsRequest, GetUploadCredentialsRequest, DescribePlayerSessionsRequest, DeleteAssetRequest, DescribeAssetsResponse, DescribeFleetCapacityRequest, DescribeCcnInstancesRequest, DescribeFleetStatisticDetailsResponse, DeleteTimerScalingPolicyRequest, JoinGameServerSessionResponse, DescribeFleetRelatedResourcesRequest, DescribeGameServerSessionPlacementRequest, UpdateGameServerSessionQueueRequest, SetServerWeightRequest, GetGameServerSessionLogUrlResponse, UpdateBucketAccelerateOptRequest, DeleteFleetResponse, StartGameServerSessionPlacementRequest, DescribeGameServerSessionPlacementResponse, UpdateRuntimeConfigurationResponse, CreateAliasResponse, ListFleetsRequest, UpdateFleetAttributesRequest, AttachCcnInstancesResponse, DescribeFleetPortSettingsRequest, StopFleetActionsResponse, DeleteAliasResponse, DeleteScalingPolicyRequest, DescribeAliasResponse, StopFleetActionsRequest, SearchGameServerSessionsRequest, DescribePlayerSessionsResponse, DescribeUserQuotaRequest, DescribeInstanceLimitRequest, CreateGameServerSessionQueueResponse, DescribeInstanceTypesRequest, SetServerReservedResponse, StopGameServerSessionPlacementRequest, UpdateFleetNameResponse, DescribeAliasRequest, CreateAliasRequest, CopyFleetResponse, UpdateGameServerSessionRequest, ListAliasesRequest, CreateAssetRequest, DescribeGameServerSessionDetailsResponse, GetGameServerSessionLogUrlRequest, CreateGameServerSessionResponse, DescribeInstancesRequest, DescribeFleetStatisticFlowsResponse, CreateFleetResponse, UpdateFleetAttributesResponse, DescribeFleetUtilizationRequest, DescribeInstanceTypesResponse, StartFleetActionsResponse, DescribeGameServerSessionDetailsRequest, UpdateRuntimeConfigurationRequest, EndGameServerSessionAndProcessRequest, CreateAssetWithImageResponse, DescribeAssetRequest, DescribeInstancesExtendRequest, DescribeGameServerSessionsResponse, UpdateBucketAccelerateOptResponse, JoinGameServerSessionRequest, DescribeUserQuotasResponse, GetUploadFederationTokenRequest, DescribeTimerScalingPoliciesResponse, CopyFleetRequest, EndGameServerSessionAndProcessResponse, SearchGameServerSessionsResponse, PutTimerScalingPolicyResponse, DescribeFleetEventsResponse, GetGameServerInstanceLogUrlRequest, DescribeFleetCapacityResponse, DescribeUserQuotaResponse, DescribeFleetEventsRequest, UpdateAssetResponse, CreateAssetWithImageRequest, PutScalingPolicyResponse, CreateGameServerSessionQueueRequest, UpdateFleetNameRequest, DescribeRuntimeConfigurationRequest, DescribeScalingPoliciesResponse, DetachCcnInstancesRequest, UpdateGameServerSessionResponse, UpdateFleetCapacityRequest, JoinGameServerSessionBatchResponse, SetServerReservedRequest, PutScalingPolicyRequest, StopGameServerSessionPlacementResponse, DescribeFleetStatisticFlowsRequest } from "./gse_models";
/**
 * gse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（UpdateBucketCORSOpt）用于设置cos跨域访问。
     */
    UpdateBucketCORSOpt(req: UpdateBucketCORSOptRequest, cb?: (error: string, rep: UpdateBucketCORSOptResponse) => void): Promise<UpdateBucketCORSOptResponse>;
    /**
     * 本接口（DeleteFleet）用于删除服务器舰队。
     */
    DeleteFleet(req: DeleteFleetRequest, cb?: (error: string, rep: DeleteFleetResponse) => void): Promise<DeleteFleetResponse>;
    /**
     * 本接口（UpdateFleetCapacity）用于更新服务器舰队容量配置。
     */
    UpdateFleetCapacity(req: UpdateFleetCapacityRequest, cb?: (error: string, rep: UpdateFleetCapacityResponse) => void): Promise<UpdateFleetCapacityResponse>;
    /**
     * 本接口（DescribeFleetRelatedResources）用于获取与游戏服务器舰队关联的资源信息，如别名、队列
     */
    DescribeFleetRelatedResources(req: DescribeFleetRelatedResourcesRequest, cb?: (error: string, rep: DescribeFleetRelatedResourcesResponse) => void): Promise<DescribeFleetRelatedResourcesResponse>;
    /**
     * 本接口（DescribeRuntimeConfiguration）用于获取服务器舰队运行配置。
     */
    DescribeRuntimeConfiguration(req: DescribeRuntimeConfigurationRequest, cb?: (error: string, rep: DescribeRuntimeConfigurationResponse) => void): Promise<DescribeRuntimeConfigurationResponse>;
    /**
     * 本接口（UpdateAlias）用于更新别名的属性。
     */
    UpdateAlias(req: UpdateAliasRequest, cb?: (error: string, rep: UpdateAliasResponse) => void): Promise<UpdateAliasResponse>;
    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置。
     */
    DescribeGameServerSessionPlacement(req: DescribeGameServerSessionPlacementRequest, cb?: (error: string, rep: DescribeGameServerSessionPlacementResponse) => void): Promise<DescribeGameServerSessionPlacementResponse>;
    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表。
     */
    DescribeGameServerSessionDetails(req: DescribeGameServerSessionDetailsRequest, cb?: (error: string, rep: DescribeGameServerSessionDetailsResponse) => void): Promise<DescribeGameServerSessionDetailsResponse>;
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
     */
    CreateAsset(req: CreateAssetRequest, cb?: (error: string, rep: CreateAssetResponse) => void): Promise<CreateAssetResponse>;
    /**
     * 本接口（SetServerReserved）用于将异常的实例标记为保留，用于问题排查。

字段ReserveValue：0默认值，不保留；1 保留

     */
    SetServerReserved(req: SetServerReservedRequest, cb?: (error: string, rep: SetServerReservedResponse) => void): Promise<SetServerReservedResponse>;
    /**
     * 本接口（CreateGameServerSessionQueue）用于创建游戏服务器会话队列。
     */
    CreateGameServerSessionQueue(req: CreateGameServerSessionQueueRequest, cb?: (error: string, rep: CreateGameServerSessionQueueResponse) => void): Promise<CreateGameServerSessionQueueResponse>;
    /**
     * 本接口（DescribeInstanceLimit）用于查询用户实例数限额。
     */
    DescribeInstanceLimit(req?: DescribeInstanceLimitRequest, cb?: (error: string, rep: DescribeInstanceLimitResponse) => void): Promise<DescribeInstanceLimitResponse>;
    /**
     * 本接口（DeleteAsset）用于删除生成包。
     */
    DeleteAsset(req: DeleteAssetRequest, cb?: (error: string, rep: DeleteAssetResponse) => void): Promise<DeleteAssetResponse>;
    /**
     * 本接口（ListFleets）用于获取服务器舰队列表。
     */
    ListFleets(req: ListFleetsRequest, cb?: (error: string, rep: ListFleetsResponse) => void): Promise<ListFleetsResponse>;
    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL。
     */
    GetGameServerSessionLogUrl(req: GetGameServerSessionLogUrlRequest, cb?: (error: string, rep: GetGameServerSessionLogUrlResponse) => void): Promise<GetGameServerSessionLogUrlResponse>;
    /**
     * 本接口（UpdateRuntimeConfiguration）用于更新服务器舰队配置。
     */
    UpdateRuntimeConfiguration(req: UpdateRuntimeConfigurationRequest, cb?: (error: string, rep: UpdateRuntimeConfigurationResponse) => void): Promise<UpdateRuntimeConfigurationResponse>;
    /**
     * 本接口（DescribeFleetCapacity）用于查询服务部署容量配置。
     */
    DescribeFleetCapacity(req: DescribeFleetCapacityRequest, cb?: (error: string, rep: DescribeFleetCapacityResponse) => void): Promise<DescribeFleetCapacityResponse>;
    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话。
     */
    StopGameServerSessionPlacement(req: StopGameServerSessionPlacementRequest, cb?: (error: string, rep: StopGameServerSessionPlacementResponse) => void): Promise<StopGameServerSessionPlacementResponse>;
    /**
     * 本接口（UpdateBucketAccelerateOpt）用于开启cos全球加速。
     */
    UpdateBucketAccelerateOpt(req: UpdateBucketAccelerateOptRequest, cb?: (error: string, rep: UpdateBucketAccelerateOptResponse) => void): Promise<UpdateBucketAccelerateOptResponse>;
    /**
     * 本接口（DeleteGameServerSessionQueue）用于删除游戏服务器会话队列。
     */
    DeleteGameServerSessionQueue(req: DeleteGameServerSessionQueueRequest, cb?: (error: string, rep: DeleteGameServerSessionQueueResponse) => void): Promise<DeleteGameServerSessionQueueResponse>;
    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列。
     */
    DescribeGameServerSessionQueues(req: DescribeGameServerSessionQueuesRequest, cb?: (error: string, rep: DescribeGameServerSessionQueuesResponse) => void): Promise<DescribeGameServerSessionQueuesResponse>;
    /**
     * 本接口（DescribeCcnInstances）用于查询云联网实例。
     */
    DescribeCcnInstances(req: DescribeCcnInstancesRequest, cb?: (error: string, rep: DescribeCcnInstancesResponse) => void): Promise<DescribeCcnInstancesResponse>;
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
     */
    PutScalingPolicy(req: PutScalingPolicyRequest, cb?: (error: string, rep: PutScalingPolicyResponse) => void): Promise<PutScalingPolicyResponse>;
    /**
     * 本接口（DescribeScalingPolicies）用于查询服务器舰队的动态扩缩容策略列表。
     */
    DescribeScalingPolicies(req: DescribeScalingPoliciesRequest, cb?: (error: string, rep: DescribeScalingPoliciesResponse) => void): Promise<DescribeScalingPoliciesResponse>;
    /**
     * 本接口（CopyFleet）用于复制服务器舰队。
     */
    CopyFleet(req: CopyFleetRequest, cb?: (error: string, rep: CopyFleetResponse) => void): Promise<CopyFleetResponse>;
    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表。
     */
    DescribeGameServerSessions(req: DescribeGameServerSessionsRequest, cb?: (error: string, rep: DescribeGameServerSessionsResponse) => void): Promise<DescribeGameServerSessionsResponse>;
    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话。
     */
    StartGameServerSessionPlacement(req: StartGameServerSessionPlacementRequest, cb?: (error: string, rep: StartGameServerSessionPlacementResponse) => void): Promise<StartGameServerSessionPlacementResponse>;
    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话。
     */
    JoinGameServerSession(req: JoinGameServerSessionRequest, cb?: (error: string, rep: JoinGameServerSessionResponse) => void): Promise<JoinGameServerSessionResponse>;
    /**
     * 本接口（JoinGameServerSessionBatch）用于批量加入游戏服务器会话。
     */
    JoinGameServerSessionBatch(req: JoinGameServerSessionBatchRequest, cb?: (error: string, rep: JoinGameServerSessionBatchResponse) => void): Promise<JoinGameServerSessionBatchResponse>;
    /**
     * 本接口（DescribeFleetStatisticSummary）用于查询服务部署统计汇总信息。
     */
    DescribeFleetStatisticSummary(req: DescribeFleetStatisticSummaryRequest, cb?: (error: string, rep: DescribeFleetStatisticSummaryResponse) => void): Promise<DescribeFleetStatisticSummaryResponse>;
    /**
     * 本接口（ResolveAlias）用于获取别名当前指向的fleetId。
     */
    ResolveAlias(req: ResolveAliasRequest, cb?: (error: string, rep: ResolveAliasResponse) => void): Promise<ResolveAliasResponse>;
    /**
     * 本接口（DeleteAlias）用于删除别名。
     */
    DeleteAlias(req: DeleteAliasRequest, cb?: (error: string, rep: DeleteAliasResponse) => void): Promise<DeleteAliasResponse>;
    /**
     * 本接口（DeleteTimerScalingPolicy）用于删除fleet下的定时器。

     */
    DeleteTimerScalingPolicy(req: DeleteTimerScalingPolicyRequest, cb?: (error: string, rep: DeleteTimerScalingPolicyResponse) => void): Promise<DeleteTimerScalingPolicyResponse>;
    /**
     * 本接口（UpdateAsset）用于修改生成包信息。
     */
    UpdateAsset(req: UpdateAssetRequest, cb?: (error: string, rep: UpdateAssetResponse) => void): Promise<UpdateAssetResponse>;
    /**
     * 本接口（StartFleetActions）用于启用服务器舰队自动扩缩容。
     */
    StartFleetActions(req: StartFleetActionsRequest, cb?: (error: string, rep: StartFleetActionsResponse) => void): Promise<StartFleetActionsResponse>;
    /**
     * 本接口（DescribeFleetPortSettings）用于获取服务器舰队安全组信息。
     */
    DescribeFleetPortSettings(req: DescribeFleetPortSettingsRequest, cb?: (error: string, rep: DescribeFleetPortSettingsResponse) => void): Promise<DescribeFleetPortSettingsResponse>;
    /**
     * 本接口（GetUploadCredentials）获取上传文件授权信息。
通过 [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) 接口获取临时授权信息后，调用 COS API将数据上传，根据上传的 BucketKey 信息进行生成包 [CreateAsset](https://cloud.tencent.com/document/product/1165/48731) 的创建。参考下面的示例部分。
     */
    GetUploadCredentials(req: GetUploadCredentialsRequest, cb?: (error: string, rep: GetUploadCredentialsResponse) => void): Promise<GetUploadCredentialsResponse>;
    /**
     * 本接口（AttachCcnInstances）用于关联云联网实例。
     */
    AttachCcnInstances(req: AttachCcnInstancesRequest, cb?: (error: string, rep: AttachCcnInstancesResponse) => void): Promise<AttachCcnInstancesResponse>;
    /**
     * 本接口（DetachCcnInstances）用于解关联云联网实例。
     */
    DetachCcnInstances(req: DetachCcnInstancesRequest, cb?: (error: string, rep: DetachCcnInstancesResponse) => void): Promise<DetachCcnInstancesResponse>;
    /**
     * 本接口（DeleteScalingPolicy）用于删除服务器舰队的扩缩容策略。
通过服务器舰队ID和策略名称删除服务器舰队的扩缩容策略，只传递服务器舰队ID时，会将这个服务器舰队下的所有策略都删除。
传递策略名称时，单独删除策略名称对应的策略。
     */
    DeleteScalingPolicy(req: DeleteScalingPolicyRequest, cb?: (error: string, rep: DeleteScalingPolicyResponse) => void): Promise<DeleteScalingPolicyResponse>;
    /**
     * 本接口（CreateAlias）用于创建别名。
     */
    CreateAlias(req: CreateAliasRequest, cb?: (error: string, rep: CreateAliasResponse) => void): Promise<CreateAliasResponse>;
    /**
     * 本接口（DescribeFleetStatisticFlows）用于查询服务部署统计用量。
     */
    DescribeFleetStatisticFlows(req: DescribeFleetStatisticFlowsRequest, cb?: (error: string, rep: DescribeFleetStatisticFlowsResponse) => void): Promise<DescribeFleetStatisticFlowsResponse>;
    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话。
     */
    CreateGameServerSession(req: CreateGameServerSessionRequest, cb?: (error: string, rep: CreateGameServerSessionResponse) => void): Promise<CreateGameServerSessionResponse>;
    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表。
     */
    DescribePlayerSessions(req: DescribePlayerSessionsRequest, cb?: (error: string, rep: DescribePlayerSessionsResponse) => void): Promise<DescribePlayerSessionsResponse>;
    /**
     * 本接口（DescribeAsset）获取生成包信息。
     */
    DescribeAsset(req: DescribeAssetRequest, cb?: (error: string, rep: DescribeAssetResponse) => void): Promise<DescribeAssetResponse>;
    /**
     * 本接口（DescribeAssetSystems）用于获取生成包支持的操作系统。
     */
    DescribeAssetSystems(req: DescribeAssetSystemsRequest, cb?: (error: string, rep: DescribeAssetSystemsResponse) => void): Promise<DescribeAssetSystemsResponse>;
    /**
     * 本接口（CreateFleet）用于创建服务器舰队。
     */
    CreateFleet(req: CreateFleetRequest, cb?: (error: string, rep: CreateFleetResponse) => void): Promise<CreateFleetResponse>;
    /**
     * 本接口（DescribeTimerScalingPolicies）用于查询fleet下的定时器列表。可以通过fleetid，定时器名称分页查询。

     */
    DescribeTimerScalingPolicies(req: DescribeTimerScalingPoliciesRequest, cb?: (error: string, rep: DescribeTimerScalingPoliciesResponse) => void): Promise<DescribeTimerScalingPoliciesResponse>;
    /**
     * 本接口（UpdateGameServerSessionQueue）用于修改游戏服务器会话队列。
     */
    UpdateGameServerSessionQueue(req: UpdateGameServerSessionQueueRequest, cb?: (error: string, rep: UpdateGameServerSessionQueueResponse) => void): Promise<UpdateGameServerSessionQueueResponse>;
    /**
     * 本接口（GetInstanceAccess）用于获取实例登录所需要的凭据。
     */
    GetInstanceAccess(req: GetInstanceAccessRequest, cb?: (error: string, rep: GetInstanceAccessResponse) => void): Promise<GetInstanceAccessResponse>;
    /**
     * 本接口（UpdateFleetAttributes）用于更新服务器舰队属性。
     */
    UpdateFleetAttributes(req: UpdateFleetAttributesRequest, cb?: (error: string, rep: UpdateFleetAttributesResponse) => void): Promise<UpdateFleetAttributesResponse>;
    /**
     * 本接口（DescribeUserQuota）获取用户单个模块配额。
     */
    DescribeUserQuota(req: DescribeUserQuotaRequest, cb?: (error: string, rep: DescribeUserQuotaResponse) => void): Promise<DescribeUserQuotaResponse>;
    /**
     * 本接口（DescribeFleetAttributes）用于查询服务器舰队属性。
     */
    DescribeFleetAttributes(req: DescribeFleetAttributesRequest, cb?: (error: string, rep: DescribeFleetAttributesResponse) => void): Promise<DescribeFleetAttributesResponse>;
    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话。
     */
    UpdateGameServerSession(req: UpdateGameServerSessionRequest, cb?: (error: string, rep: UpdateGameServerSessionResponse) => void): Promise<UpdateGameServerSessionResponse>;
    /**
     * 本接口（GetUploadFederationToken）用于 获取生成包上传所需要的临时密钥。
     */
    GetUploadFederationToken(req?: GetUploadFederationTokenRequest, cb?: (error: string, rep: GetUploadFederationTokenResponse) => void): Promise<GetUploadFederationTokenResponse>;
    /**
     * 本接口用于获取游戏服务器实例的日志URL。
     */
    GetGameServerInstanceLogUrl(req: GetGameServerInstanceLogUrlRequest, cb?: (error: string, rep: GetGameServerInstanceLogUrlResponse) => void): Promise<GetGameServerInstanceLogUrlResponse>;
    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表。
     */
    SearchGameServerSessions(req: SearchGameServerSessionsRequest, cb?: (error: string, rep: SearchGameServerSessionsResponse) => void): Promise<SearchGameServerSessionsResponse>;
    /**
     * 本接口（DescribeFleetStatisticDetails）用于查询服务部署统计详情。
     */
    DescribeFleetStatisticDetails(req: DescribeFleetStatisticDetailsRequest, cb?: (error: string, rep: DescribeFleetStatisticDetailsResponse) => void): Promise<DescribeFleetStatisticDetailsResponse>;
    /**
     * 本接口（DescribeAssets）用于获取生成包列表。
     */
    DescribeAssets(req: DescribeAssetsRequest, cb?: (error: string, rep: DescribeAssetsResponse) => void): Promise<DescribeAssetsResponse>;
    /**
     * 本接口（CreateAssetWithImage）用于创建生成包镜像信息。
     */
    CreateAssetWithImage(req: CreateAssetWithImageRequest, cb?: (error: string, rep: CreateAssetWithImageResponse) => void): Promise<CreateAssetWithImageResponse>;
    /**
     * 本接口（StopFleetActions）用于停止服务器舰队自动扩缩容，改为手动扩缩容。
     */
    StopFleetActions(req: StopFleetActionsRequest, cb?: (error: string, rep: StopFleetActionsResponse) => void): Promise<StopFleetActionsResponse>;
    /**
     * 本接口（DescribeInstancesExtend）用于查询实例扩展信息列表。
     */
    DescribeInstancesExtend(req: DescribeInstancesExtendRequest, cb?: (error: string, rep: DescribeInstancesExtendResponse) => void): Promise<DescribeInstancesExtendResponse>;
    /**
     * 本接口（DescribeAlias）用于获取别名详情。
     */
    DescribeAlias(req: DescribeAliasRequest, cb?: (error: string, rep: DescribeAliasResponse) => void): Promise<DescribeAliasResponse>;
    /**
     * 本接口（ListAliases）用于检索帐户下的所有别名。
     */
    ListAliases(req: ListAliasesRequest, cb?: (error: string, rep: ListAliasesResponse) => void): Promise<ListAliasesResponse>;
    /**
     * 本接口（UpdateFleetPortSettings）用于更新服务器舰队安全组。
     */
    UpdateFleetPortSettings(req: UpdateFleetPortSettingsRequest, cb?: (error: string, rep: UpdateFleetPortSettingsResponse) => void): Promise<UpdateFleetPortSettingsResponse>;
    /**
     * 本接口（DescribeUserQuotas）用于获取用户配额
     */
    DescribeUserQuotas(req?: DescribeUserQuotasRequest, cb?: (error: string, rep: DescribeUserQuotasResponse) => void): Promise<DescribeUserQuotasResponse>;
    /**
     * 本接口（DescribeInstanceTypes）用于获取服务器实例类型列表。
     */
    DescribeInstanceTypes(req?: DescribeInstanceTypesRequest, cb?: (error: string, rep: DescribeInstanceTypesResponse) => void): Promise<DescribeInstanceTypesResponse>;
    /**
     * 本接口（DescribeFleetEvents）用于查询服务器舰队相关的事件列表。
     */
    DescribeFleetEvents(req: DescribeFleetEventsRequest, cb?: (error: string, rep: DescribeFleetEventsResponse) => void): Promise<DescribeFleetEventsResponse>;
    /**
     * 本接口（SetServerWeight）用于设置服务器权重。
     */
    SetServerWeight(req: SetServerWeightRequest, cb?: (error: string, rep: SetServerWeightResponse) => void): Promise<SetServerWeightResponse>;
    /**
     * 本接口（UpdateFleetName）用于更新服务器舰队名称。
     */
    UpdateFleetName(req: UpdateFleetNameRequest, cb?: (error: string, rep: UpdateFleetNameResponse) => void): Promise<UpdateFleetNameResponse>;
    /**
     * 本接口（DescribeFleetUtilization）用于查询服务器舰队的利用率信息。
     */
    DescribeFleetUtilization(req: DescribeFleetUtilizationRequest, cb?: (error: string, rep: DescribeFleetUtilizationResponse) => void): Promise<DescribeFleetUtilizationResponse>;
    /**
     * 本接口（DescribeInstances）用于查询服务器实例列表。
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口（EndGameServerSessionAndProcess）用于终止游戏服务器会话和对应的进程，适用于时限保护和不保护。
     */
    EndGameServerSessionAndProcess(req: EndGameServerSessionAndProcessRequest, cb?: (error: string, rep: EndGameServerSessionAndProcessResponse) => void): Promise<EndGameServerSessionAndProcessResponse>;
    /**
     * 本接口（PutTimerScalingPolicy）用于给fleet创建或更新定时器。

填写字段timer_id，表示更新；不填字段timer_id表示新增。

     */
    PutTimerScalingPolicy(req: PutTimerScalingPolicyRequest, cb?: (error: string, rep: PutTimerScalingPolicyResponse) => void): Promise<PutTimerScalingPolicyResponse>;
}

import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteGameServerSessionQueueRequest, CreateAssetResponse, GetInstanceAccessResponse, ListAliasesResponse, DeleteGameServerSessionQueueResponse, DescribeFleetAttributesRequest, ResolveAliasRequest, StartGameServerSessionPlacementResponse, DescribeFleetStatisticDetailsRequest, GetInstanceAccessRequest, CreateFleetRequest, StartFleetActionsRequest, UpdateFleetPortSettingsResponse, DescribeInstancesResponse, ListFleetsResponse, DeleteAssetResponse, DescribeFleetUtilizationResponse, DescribeScalingPoliciesRequest, DeleteFleetRequest, DetachCcnInstancesResponse, DescribeFleetPortSettingsResponse, DescribeUserQuotasRequest, UpdateAssetRequest, UpdateFleetPortSettingsRequest, DescribeFleetStatisticFlowsRequest, UpdateAliasRequest, JoinGameServerSessionBatchRequest, UpdateFleetCapacityResponse, DescribeRuntimeConfigurationResponse, CreateGameServerSessionRequest, UpdateAliasResponse, UpdateGameServerSessionQueueResponse, DescribeGameServerSessionQueuesRequest, GetUploadFederationTokenResponse, DeleteScalingPolicyResponse, DescribeFleetStatisticSummaryRequest, ResolveAliasResponse, DescribeInstancesExtendResponse, UpdateRuntimeConfigurationResponse, DescribeCcnInstancesResponse, DescribeInstanceLimitResponse, DescribeAssetResponse, DescribeFleetStatisticSummaryResponse, DescribeGameServerSessionQueuesResponse, DeleteAliasRequest, DescribeFleetAttributesResponse, GetUploadCredentialsResponse, AttachCcnInstancesRequest, DescribeAssetsRequest, SetServerWeightResponse, DescribeGameServerSessionsRequest, GetUploadCredentialsRequest, DescribePlayerSessionsRequest, DeleteAssetRequest, DescribeAssetsResponse, DescribeFleetCapacityRequest, DescribeCcnInstancesRequest, DescribeFleetStatisticDetailsResponse, UpdateGameServerSessionQueueRequest, JoinGameServerSessionResponse, DescribeGameServerSessionPlacementRequest, SetServerWeightRequest, GetGameServerSessionLogUrlResponse, DeleteFleetResponse, StartGameServerSessionPlacementRequest, DescribeGameServerSessionPlacementResponse, CreateAliasResponse, ListFleetsRequest, UpdateFleetAttributesRequest, AttachCcnInstancesResponse, DescribeFleetPortSettingsRequest, StopFleetActionsResponse, DeleteAliasResponse, DeleteScalingPolicyRequest, DescribeAliasResponse, StopFleetActionsRequest, SearchGameServerSessionsRequest, DescribePlayerSessionsResponse, DescribeUserQuotaRequest, DescribeInstanceLimitRequest, CreateGameServerSessionQueueResponse, DescribeInstanceTypesRequest, StopGameServerSessionPlacementRequest, DescribeAliasRequest, CreateAliasRequest, UpdateGameServerSessionRequest, CreateAssetRequest, DescribeGameServerSessionDetailsResponse, GetGameServerSessionLogUrlRequest, CreateGameServerSessionResponse, DescribeInstancesRequest, DescribeFleetStatisticFlowsResponse, CreateFleetResponse, UpdateFleetAttributesResponse, DescribeFleetUtilizationRequest, DescribeGameServerSessionDetailsRequest, UpdateRuntimeConfigurationRequest, DescribeAssetRequest, DescribeInstancesExtendRequest, DescribeGameServerSessionsResponse, StartFleetActionsResponse, JoinGameServerSessionRequest, DescribeUserQuotasResponse, GetUploadFederationTokenRequest, DescribeInstanceTypesResponse, SearchGameServerSessionsResponse, DescribeFleetEventsResponse, DescribeFleetCapacityResponse, DescribeUserQuotaResponse, DescribeFleetEventsRequest, UpdateAssetResponse, ListAliasesRequest, PutScalingPolicyResponse, CreateGameServerSessionQueueRequest, DescribeRuntimeConfigurationRequest, DescribeScalingPoliciesResponse, DetachCcnInstancesRequest, UpdateGameServerSessionResponse, UpdateFleetCapacityRequest, JoinGameServerSessionBatchResponse, PutScalingPolicyRequest, StopGameServerSessionPlacementResponse } from "./gse_models";
/**
 * gse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DeleteFleet）用于删除服务器舰队
     */
    DeleteFleet(req: DeleteFleetRequest, cb?: (error: string, rep: DeleteFleetResponse) => void): Promise<DeleteFleetResponse>;
    /**
     * 用于更新服务部署容量配置
     */
    UpdateFleetCapacity(req: UpdateFleetCapacityRequest, cb?: (error: string, rep: UpdateFleetCapacityResponse) => void): Promise<UpdateFleetCapacityResponse>;
    /**
     * 本接口（StartFleetActions）用于启用服务器舰队自动扩缩容
     */
    StartFleetActions(req: StartFleetActionsRequest, cb?: (error: string, rep: StartFleetActionsResponse) => void): Promise<StartFleetActionsResponse>;
    /**
     * 本接口（DescribeRuntimeConfiguration）用于获取服务器舰队运行配置
     */
    DescribeRuntimeConfiguration(req: DescribeRuntimeConfigurationRequest, cb?: (error: string, rep: DescribeRuntimeConfigurationResponse) => void): Promise<DescribeRuntimeConfigurationResponse>;
    /**
     * 本接口（UpdateAlias）用于更新别名的属性
     */
    UpdateAlias(req: UpdateAliasRequest, cb?: (error: string, rep: UpdateAliasResponse) => void): Promise<UpdateAliasResponse>;
    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
     */
    DescribeGameServerSessionPlacement(req: DescribeGameServerSessionPlacementRequest, cb?: (error: string, rep: DescribeGameServerSessionPlacementResponse) => void): Promise<DescribeGameServerSessionPlacementResponse>;
    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
     */
    DescribeGameServerSessionDetails(req: DescribeGameServerSessionDetailsRequest, cb?: (error: string, rep: DescribeGameServerSessionDetailsResponse) => void): Promise<DescribeGameServerSessionDetailsResponse>;
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
    CreateAsset(req: CreateAssetRequest, cb?: (error: string, rep: CreateAssetResponse) => void): Promise<CreateAssetResponse>;
    /**
     * 本接口（CreateGameServerSessionQueue）用于创建游戏服务器会话队列
     */
    CreateGameServerSessionQueue(req: CreateGameServerSessionQueueRequest, cb?: (error: string, rep: CreateGameServerSessionQueueResponse) => void): Promise<CreateGameServerSessionQueueResponse>;
    /**
     * 本接口（DeleteAsset）用于删除生成包
     */
    DeleteAsset(req: DeleteAssetRequest, cb?: (error: string, rep: DeleteAssetResponse) => void): Promise<DeleteAssetResponse>;
    /**
     * 本接口（ListFleets）用于获取服务器舰队列表
     */
    ListFleets(req: ListFleetsRequest, cb?: (error: string, rep: ListFleetsResponse) => void): Promise<ListFleetsResponse>;
    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
     */
    GetGameServerSessionLogUrl(req: GetGameServerSessionLogUrlRequest, cb?: (error: string, rep: GetGameServerSessionLogUrlResponse) => void): Promise<GetGameServerSessionLogUrlResponse>;
    /**
     * 本接口（UpdateRuntimeConfiguration）用于更新服务器舰队配置
     */
    UpdateRuntimeConfiguration(req: UpdateRuntimeConfigurationRequest, cb?: (error: string, rep: UpdateRuntimeConfigurationResponse) => void): Promise<UpdateRuntimeConfigurationResponse>;
    /**
     * 用于查询服务部署容量配置
     */
    DescribeFleetCapacity(req: DescribeFleetCapacityRequest, cb?: (error: string, rep: DescribeFleetCapacityResponse) => void): Promise<DescribeFleetCapacityResponse>;
    /**
     * 本接口（DeleteGameServerSessionQueue）用于删除游戏服务器会话队列
     */
    DeleteGameServerSessionQueue(req: DeleteGameServerSessionQueueRequest, cb?: (error: string, rep: DeleteGameServerSessionQueueResponse) => void): Promise<DeleteGameServerSessionQueueResponse>;
    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
     */
    DescribeGameServerSessionQueues(req: DescribeGameServerSessionQueuesRequest, cb?: (error: string, rep: DescribeGameServerSessionQueuesResponse) => void): Promise<DescribeGameServerSessionQueuesResponse>;
    /**
     * 本接口（PutScalingPolicy）用于设置动态扩缩容配置
     */
    PutScalingPolicy(req: PutScalingPolicyRequest, cb?: (error: string, rep: PutScalingPolicyResponse) => void): Promise<PutScalingPolicyResponse>;
    /**
     * 本接口（DescribeScalingPolicies）用于查询服务部署的动态扩缩容配置
     */
    DescribeScalingPolicies(req: DescribeScalingPoliciesRequest, cb?: (error: string, rep: DescribeScalingPoliciesResponse) => void): Promise<DescribeScalingPoliciesResponse>;
    /**
     * 本接口（DescribeFleetStatisticDetails）用于查询服务部署统计详情
     */
    DescribeFleetStatisticDetails(req: DescribeFleetStatisticDetailsRequest, cb?: (error: string, rep: DescribeFleetStatisticDetailsResponse) => void): Promise<DescribeFleetStatisticDetailsResponse>;
    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
     */
    DescribeGameServerSessions(req: DescribeGameServerSessionsRequest, cb?: (error: string, rep: DescribeGameServerSessionsResponse) => void): Promise<DescribeGameServerSessionsResponse>;
    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话
     */
    JoinGameServerSession(req: JoinGameServerSessionRequest, cb?: (error: string, rep: JoinGameServerSessionResponse) => void): Promise<JoinGameServerSessionResponse>;
    /**
     * 本接口（JoinGameServerSessionBatch）用于加入游戏服务器会话
     */
    JoinGameServerSessionBatch(req: JoinGameServerSessionBatchRequest, cb?: (error: string, rep: JoinGameServerSessionBatchResponse) => void): Promise<JoinGameServerSessionBatchResponse>;
    /**
     * 本接口（DescribeFleetStatisticSummary）用于查询服务部署统计汇总信息
     */
    DescribeFleetStatisticSummary(req: DescribeFleetStatisticSummaryRequest, cb?: (error: string, rep: DescribeFleetStatisticSummaryResponse) => void): Promise<DescribeFleetStatisticSummaryResponse>;
    /**
     * 本接口（DeleteAlias）用于删除别名
     */
    DeleteAlias(req: DeleteAliasRequest, cb?: (error: string, rep: DeleteAliasResponse) => void): Promise<DeleteAliasResponse>;
    /**
     * 查询用户实例数限额
     */
    DescribeInstanceLimit(req?: DescribeInstanceLimitRequest, cb?: (error: string, rep: DescribeInstanceLimitResponse) => void): Promise<DescribeInstanceLimitResponse>;
    /**
     * 本接口（UpdateAsset）用于修改生成包信息
     */
    UpdateAsset(req: UpdateAssetRequest, cb?: (error: string, rep: UpdateAssetResponse) => void): Promise<UpdateAssetResponse>;
    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
     */
    StartGameServerSessionPlacement(req: StartGameServerSessionPlacementRequest, cb?: (error: string, rep: StartGameServerSessionPlacementResponse) => void): Promise<StartGameServerSessionPlacementResponse>;
    /**
     * 本接口（DescribeFleetPortSettings）用于获取服务器舰队安全组信息
     */
    DescribeFleetPortSettings(req: DescribeFleetPortSettingsRequest, cb?: (error: string, rep: DescribeFleetPortSettingsResponse) => void): Promise<DescribeFleetPortSettingsResponse>;
    /**
     * 本接口（AttachCcnInstances）用于关联云联网实例
     */
    AttachCcnInstances(req: AttachCcnInstancesRequest, cb?: (error: string, rep: AttachCcnInstancesResponse) => void): Promise<AttachCcnInstancesResponse>;
    /**
     * 本接口（DetachCcnInstances）用于解关联云联网实例
     */
    DetachCcnInstances(req: DetachCcnInstancesRequest, cb?: (error: string, rep: DetachCcnInstancesResponse) => void): Promise<DetachCcnInstancesResponse>;
    /**
     * 本接口（DeleteScalingPolicy）用于删除扩缩容配置
     */
    DeleteScalingPolicy(req: DeleteScalingPolicyRequest, cb?: (error: string, rep: DeleteScalingPolicyResponse) => void): Promise<DeleteScalingPolicyResponse>;
    /**
     * 本接口（CreateAlias）用于创建别名
     */
    CreateAlias(req: CreateAliasRequest, cb?: (error: string, rep: CreateAliasResponse) => void): Promise<CreateAliasResponse>;
    /**
     * 本接口（DescribeFleetStatisticFlows）用于查询服务部署统计用量
     */
    DescribeFleetStatisticFlows(req: DescribeFleetStatisticFlowsRequest, cb?: (error: string, rep: DescribeFleetStatisticFlowsResponse) => void): Promise<DescribeFleetStatisticFlowsResponse>;
    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话
     */
    CreateGameServerSession(req: CreateGameServerSessionRequest, cb?: (error: string, rep: CreateGameServerSessionResponse) => void): Promise<CreateGameServerSessionResponse>;
    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表
     */
    DescribePlayerSessions(req: DescribePlayerSessionsRequest, cb?: (error: string, rep: DescribePlayerSessionsResponse) => void): Promise<DescribePlayerSessionsResponse>;
    /**
     * 本接口（DescribeAsset）获取生成包信息
     */
    DescribeAsset(req: DescribeAssetRequest, cb?: (error: string, rep: DescribeAssetResponse) => void): Promise<DescribeAssetResponse>;
    /**
       * 本接口（GetUploadCredentials）获取上传文件授权信息。
  通过 [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) 接口获取临时授权信息后，调用 COS API将数据上传，根据上传的 BucketKey 信息进行生成包 [CreateAsset](https://cloud.tencent.com/document/product/1165/48731) 的创建。参考下面的示例部分。
       */
    GetUploadCredentials(req: GetUploadCredentialsRequest, cb?: (error: string, rep: GetUploadCredentialsResponse) => void): Promise<GetUploadCredentialsResponse>;
    /**
     * 本接口（CreateFleet）用于创建服务器舰队
     */
    CreateFleet(req: CreateFleetRequest, cb?: (error: string, rep: CreateFleetResponse) => void): Promise<CreateFleetResponse>;
    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
     */
    StopGameServerSessionPlacement(req: StopGameServerSessionPlacementRequest, cb?: (error: string, rep: StopGameServerSessionPlacementResponse) => void): Promise<StopGameServerSessionPlacementResponse>;
    /**
     * 本接口（UpdateGameServerSessionQueue）用于修改游戏服务器会话队列
     */
    UpdateGameServerSessionQueue(req: UpdateGameServerSessionQueueRequest, cb?: (error: string, rep: UpdateGameServerSessionQueueResponse) => void): Promise<UpdateGameServerSessionQueueResponse>;
    /**
     * 本接口（GetInstanceAccess）用于获取实例登录所需要的凭据
     */
    GetInstanceAccess(req: GetInstanceAccessRequest, cb?: (error: string, rep: GetInstanceAccessResponse) => void): Promise<GetInstanceAccessResponse>;
    /**
     * 本接口（UpdateFleetAttributes）用于更新服务器舰队属性
     */
    UpdateFleetAttributes(req: UpdateFleetAttributesRequest, cb?: (error: string, rep: UpdateFleetAttributesResponse) => void): Promise<UpdateFleetAttributesResponse>;
    /**
     * 本接口（DescribeUserQuota）获取用户单个模块配额
     */
    DescribeUserQuota(req: DescribeUserQuotaRequest, cb?: (error: string, rep: DescribeUserQuotaResponse) => void): Promise<DescribeUserQuotaResponse>;
    /**
     * 本接口（DescribeFleetAttributes）用于查询服务器舰队属性
     */
    DescribeFleetAttributes(req: DescribeFleetAttributesRequest, cb?: (error: string, rep: DescribeFleetAttributesResponse) => void): Promise<DescribeFleetAttributesResponse>;
    /**
     * 本接口（GetUploadFederationToken）用于 获取生成包上传所需要的临时密钥
     */
    GetUploadFederationToken(req?: GetUploadFederationTokenRequest, cb?: (error: string, rep: GetUploadFederationTokenResponse) => void): Promise<GetUploadFederationTokenResponse>;
    /**
     * 本接口（ResolveAlias）用于获取别名当前指向的fleetId
     */
    ResolveAlias(req: ResolveAliasRequest, cb?: (error: string, rep: ResolveAliasResponse) => void): Promise<ResolveAliasResponse>;
    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
     */
    SearchGameServerSessions(req: SearchGameServerSessionsRequest, cb?: (error: string, rep: SearchGameServerSessionsResponse) => void): Promise<SearchGameServerSessionsResponse>;
    /**
     * 本接口（DescribeInstances）用于查询服务器实例列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口（DescribeAssets）用于获取生成包列表
     */
    DescribeAssets(req: DescribeAssetsRequest, cb?: (error: string, rep: DescribeAssetsResponse) => void): Promise<DescribeAssetsResponse>;
    /**
     * 本接口（DescribeCcnInstances）用于查询云联网实例
     */
    DescribeCcnInstances(req: DescribeCcnInstancesRequest, cb?: (error: string, rep: DescribeCcnInstancesResponse) => void): Promise<DescribeCcnInstancesResponse>;
    /**
     * 本接口（StopFleetActions）用于停止服务器舰队自动扩缩容，改为手动扩缩容
     */
    StopFleetActions(req: StopFleetActionsRequest, cb?: (error: string, rep: StopFleetActionsResponse) => void): Promise<StopFleetActionsResponse>;
    /**
     * 本接口（DescribeInstances）用于查询实例扩展信息列表
     */
    DescribeInstancesExtend(req: DescribeInstancesExtendRequest, cb?: (error: string, rep: DescribeInstancesExtendResponse) => void): Promise<DescribeInstancesExtendResponse>;
    /**
     * 本接口（DescribeAlias）用于获取别名详情
     */
    DescribeAlias(req: DescribeAliasRequest, cb?: (error: string, rep: DescribeAliasResponse) => void): Promise<DescribeAliasResponse>;
    /**
     * 本接口（ListAliases）用于检索帐户下的所有别名
     */
    ListAliases(req: ListAliasesRequest, cb?: (error: string, rep: ListAliasesResponse) => void): Promise<ListAliasesResponse>;
    /**
     * 本接口（DescribeUserQuotas）用于获取用户配额
     */
    DescribeUserQuotas(req?: DescribeUserQuotasRequest, cb?: (error: string, rep: DescribeUserQuotasResponse) => void): Promise<DescribeUserQuotasResponse>;
    /**
     * 本接口（DescribeInstanceTypes）用于获取服务器实例类型列表
     */
    DescribeInstanceTypes(req?: DescribeInstanceTypesRequest, cb?: (error: string, rep: DescribeInstanceTypesResponse) => void): Promise<DescribeInstanceTypesResponse>;
    /**
     * 本接口（DescribeFleetEvents）用于查询部署服务器舰队相关的事件列表
     */
    DescribeFleetEvents(req: DescribeFleetEventsRequest, cb?: (error: string, rep: DescribeFleetEventsResponse) => void): Promise<DescribeFleetEventsResponse>;
    /**
     * 设置服务器权重
     */
    SetServerWeight(req: SetServerWeightRequest, cb?: (error: string, rep: SetServerWeightResponse) => void): Promise<SetServerWeightResponse>;
    /**
     * 本接口（DescribeFleetUtilization）用于查询服务器舰队的利用率信息
     */
    DescribeFleetUtilization(req: DescribeFleetUtilizationRequest, cb?: (error: string, rep: DescribeFleetUtilizationResponse) => void): Promise<DescribeFleetUtilizationResponse>;
    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
     */
    UpdateGameServerSession(req: UpdateGameServerSessionRequest, cb?: (error: string, rep: UpdateGameServerSessionResponse) => void): Promise<UpdateGameServerSessionResponse>;
    /**
     * 本接口（UpdateFleetPortSettings）用于更新服务器舰队安全组
     */
    UpdateFleetPortSettings(req: UpdateFleetPortSettingsRequest, cb?: (error: string, rep: UpdateFleetPortSettingsResponse) => void): Promise<UpdateFleetPortSettingsResponse>;
}

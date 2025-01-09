import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeEnvLimitResponse, DescribeCloudBaseRunAllVpcsResponse, CheckTcbServiceResponse, DescribeCloudBaseRunConfForGateWayRequest, DescribeCloudBaseRunServerVersionRequest, DescribeEnvLimitRequest, DescribeEnvDealRegionResponse, DeleteCloudBaseRunServerVersionResponse, RollUpdateCloudBaseRunServerVersionResponse, SearchClsLogResponse, ModifyClsTopicResponse, CommonServiceAPIResponse, DescribeStandaloneGatewayRequest, DescribeStandaloneGatewayPackageRequest, DescribeGraphDataResponse, DescribePostpayPackageFreeQuotasRequest, DescribeEndUserLoginStatisticRequest, DescribeCloudBaseBuildServiceResponse, DescribeEndUsersRequest, DescribeCloudBaseRunPodListResponse, DescribeCloudBaseRunServerDomainNameResponse, DestroyStandaloneGatewayRequest, CreateWxCloudBaseRunServerDBClusterResponse, ReplaceActivityRecordResponse, DescribeSpecialCostItemsRequest, TurnOnStandaloneGatewayRequest, CreatePostpayPackageRequest, DescribeWxCloudBaseRunSubNetsRequest, ModifyEndUserRequest, DescribeCurveDataResponse, DescribeBaasPackageListRequest, DescribeCloudBaseRunOperationTypesRequest, DescribeAuthDomainsResponse, ReinstateEnvRequest, DescribeCloudBaseRunOneClickTaskExternalRequest, ModifyClsTopicRequest, DescribeStandaloneGatewayResponse, DescribeWxCloudBaseRunEnvsResponse, CreateHostingDomainRequest, DescribeCloudBaseRunResourceRequest, DescribeCloudBaseRunServerRequest, DescribePostpayFreeQuotasRequest, DescribeActivityInfoResponse, DestroyStandaloneGatewayResponse, DescribeCloudBaseRunServerVersionResponse, DescribeGatewayVersionsResponse, DescribeGatewayVersionsRequest, DeleteEndUserRequest, DescribeHostingDomainTaskRequest, FreezeCloudBaseRunServersRequest, ModifyGatewayVersionTrafficRequest, DescribeQuotaDataResponse, DescribeGatewayCurveDataResponse, DeleteGatewayVersionRequest, CommonServiceAPIRequest, DestroyStaticStoreRequest, CreateWxCloudBaseRunEnvRequest, ModifyCloudBaseRunServerFlowConfRequest, DescribeActivityRecordResponse, DescribeCloudBaseRunVersionRsByConditionResponse, CreateStaticStoreRequest, CreateWxCloudBaseRunServerDBClusterRequest, DeleteCloudBaseProjectLatestVersionResponse, DescribeGatewayCurveDataRequest, DescribeGraphDataRequest, DescribeBillingInfoResponse, CreateAuthDomainResponse, ModifyDatabaseACLRequest, DescribeEnvsRequest, DeleteWxGatewayRouteRequest, DescribeEnvPostpaidDeductRequest, DescribeExtraPkgBillingInfoRequest, BindEnvGatewayResponse, DescribeWxCloudBaseRunSubNetsResponse, DescribeEnvFreeQuotaRequest, DescribeEndUserLoginStatisticResponse, DescribeExtensionUploadInfoRequest, DescribeBillingInfoRequest, CreateCloudBaseRunResourceResponse, DescribeStandaloneGatewayPackageResponse, DestroyStaticStoreResponse, DeleteEndUserResponse, ModifyDatabaseACLResponse, ModifyCloudBaseRunServerFlowConfResponse, DescribeCloudBaseRunOperationTypesResponse, EstablishCloudBaseRunServerResponse, DestroyEnvRequest, DestroyEnvResponse, DescribeCloudBaseProjectVersionListRequest, DescribeCloudBaseRunOneClickTaskExternalResponse, TurnOffStandaloneGatewayResponse, DescribeEnvsResponse, CreateAuthDomainRequest, DescribeEnvPostpaidDeductResponse, CreateHostingDomainResponse, DescribeActivityRecordRequest, CreateWxCloudBaseRunEnvResponse, DeleteCloudBaseRunServerVersionRequest, CreateCloudBaseRunServerVersionRequest, DescribeCloudBaseRunServerDomainNameRequest, DescribeCloudBaseRunAllVpcsRequest, CreatePostpayPackageResponse, DescribeBaasPackageListResponse, ReplaceActivityRecordRequest, DeleteWxGatewayRouteResponse, DescribeCloudBaseProjectVersionListResponse, UnfreezeCloudBaseRunServersRequest, EstablishCloudBaseRunServerRequest, ReinstateEnvResponse, DescribeSpecialCostItemsResponse, CreateStandaloneGatewayRequest, DescribeWxGatewayRoutesRequest, DescribeWxGatewaysRequest, DescribeDownloadFileRequest, DescribeEndUserStatisticRequest, DescribeEnvFreeQuotaResponse, CreateAndDeployCloudBaseProjectResponse, DescribeCloudBaseRunResourceForExtendResponse, CreateAndDeployCloudBaseProjectRequest, DescribeCloudBaseRunVersionRequest, EstablishWxGatewayRouteRequest, UnfreezeCloudBaseRunServersResponse, DescribeCloudBaseRunConfForGateWayResponse, DescribeCbrServerVersionRequest, DescribeWxGatewayRoutesResponse, TurnOffStandaloneGatewayRequest, DeleteGatewayVersionResponse, EstablishWxGatewayRouteResponse, DescribeDatabaseACLRequest, CreateCloudBaseRunServerVersionResponse, DeleteCloudBaseProjectLatestVersionRequest, DescribeCloudBaseProjectLatestVersionListResponse, DescribeWxGatewaysResponse, DescribeDownloadFileResponse, DescribeSmsQuotasResponse, DescribeWxCloudBaseRunEnvsRequest, DescribeCurveDataRequest, DescribeActivityInfoRequest, BindEnvGatewayRequest, ModifyEnvResponse, DescribeCbrServerVersionResponse, CreateStandaloneGatewayResponse, DescribeQuotaDataRequest, CreateStaticStoreResponse, DescribeCloudBaseRunResourceResponse, DescribeCloudBaseRunVersionSnapshotRequest, DescribeUserActivityInfoResponse, DescribePostpayFreeQuotasResponse, ModifyGatewayVersionTrafficResponse, DescribeCloudBaseProjectLatestVersionListRequest, DescribeEndUsersResponse, DescribeHostingDomainTaskResponse, DescribeEndUserStatisticResponse, DescribeSmsQuotasRequest, DescribeCloudBaseRunVersionResponse, DescribeCloudBaseRunResourceForExtendRequest, DescribeCloudBaseBuildServiceRequest, SearchClsLogRequest, CheckTcbServiceRequest, DescribeCloudBaseRunVersionRsByConditionRequest, DescribeCloudBaseRunServerResponse, DescribeUserActivityInfoRequest, DescribeCloudBaseRunVersionSnapshotResponse, DescribeCloudBaseRunPodListRequest, CreateCloudBaseRunResourceRequest, ModifyEndUserResponse, DescribeAuthDomainsRequest, FreezeCloudBaseRunServersResponse, DescribeEnvDealRegionRequest, DescribeDatabaseACLResponse, ModifyCloudBaseRunServerVersionResponse, DescribeExtensionUploadInfoResponse, TurnOnStandaloneGatewayResponse, ModifyEnvRequest, DescribePostpayPackageFreeQuotasResponse, DescribeExtraPkgBillingInfoResponse, ModifyCloudBaseRunServerVersionRequest, RollUpdateCloudBaseRunServerVersionRequest } from "./tcb_models";
/**
 * tcb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询微信云托管子网
     */
    DescribeWxCloudBaseRunSubNets(req: DescribeWxCloudBaseRunSubNetsRequest, cb?: (error: string, rep: DescribeWxCloudBaseRunSubNetsResponse) => void): Promise<DescribeWxCloudBaseRunSubNetsResponse>;
    /**
     * 查询环境下所有的vpc列表
     */
    DescribeCloudBaseRunAllVpcs(req: DescribeCloudBaseRunAllVpcsRequest, cb?: (error: string, rep: DescribeCloudBaseRunAllVpcsResponse) => void): Promise<DescribeCloudBaseRunAllVpcsResponse>;
    /**
     * 查询后付费短信资源量
1 有免费包的返回SmsFreeQuota结构所有字段
2 没有免费包，有付费包，付费返回复用SmsFreeQuota结构，其中只有 TodayUsedQuota 字段有效
3 都没有返回为空数组
     */
    DescribeSmsQuotas(req: DescribeSmsQuotasRequest, cb?: (error: string, rep: DescribeSmsQuotasResponse) => void): Promise<DescribeSmsQuotasResponse>;
    /**
     * 查询微信云托管服务域名
     */
    DescribeCloudBaseRunServerDomainName(req: DescribeCloudBaseRunServerDomainNameRequest, cb?: (error: string, rep: DescribeCloudBaseRunServerDomainNameResponse) => void): Promise<DescribeCloudBaseRunServerDomainNameResponse>;
    /**
     * 创建微信云托管
     */
    CreateWxCloudBaseRunEnv(req: CreateWxCloudBaseRunEnvRequest, cb?: (error: string, rep: CreateWxCloudBaseRunEnvResponse) => void): Promise<CreateWxCloudBaseRunEnvResponse>;
    /**
     * 本接口（TurnOffStandaloneGateway）用于关闭小租户网关。
     */
    TurnOffStandaloneGateway(req: TurnOffStandaloneGatewayRequest, cb?: (error: string, rep: TurnOffStandaloneGatewayResponse) => void): Promise<TurnOffStandaloneGatewayResponse>;
    /**
     * 本接口（TurnOnStandaloneGateway）用于开启小租户网关。
     */
    TurnOnStandaloneGateway(req: TurnOnStandaloneGatewayRequest, cb?: (error: string, rep: TurnOnStandaloneGatewayResponse) => void): Promise<TurnOnStandaloneGatewayResponse>;
    /**
     * 开通后付费资源
     */
    CreatePostpayPackage(req: CreatePostpayPackageRequest, cb?: (error: string, rep: CreatePostpayPackageResponse) => void): Promise<CreatePostpayPackageResponse>;
    /**
     * 获取新套餐列表，含详情，如果传了PackageId，则只获取指定套餐详情
     */
    DescribeBaasPackageList(req: DescribeBaasPackageListRequest, cb?: (error: string, rep: DescribeBaasPackageListResponse) => void): Promise<DescribeBaasPackageListResponse>;
    /**
     * 云项目部署列表
     */
    DescribeCloudBaseProjectVersionList(req: DescribeCloudBaseProjectVersionListRequest, cb?: (error: string, rep: DescribeCloudBaseProjectVersionListResponse) => void): Promise<DescribeCloudBaseProjectVersionListResponse>;
    /**
     * 获取云开发项目列表
     */
    DescribeCloudBaseProjectLatestVersionList(req: DescribeCloudBaseProjectLatestVersionListRequest, cb?: (error: string, rep: DescribeCloudBaseProjectLatestVersionListResponse) => void): Promise<DescribeCloudBaseProjectLatestVersionListResponse>;
    /**
     * 独立网关中拉取云托管服务对应的配置信息
     */
    DescribeCloudBaseRunConfForGateWay(req: DescribeCloudBaseRunConfForGateWayRequest, cb?: (error: string, rep: DescribeCloudBaseRunConfForGateWayResponse) => void): Promise<DescribeCloudBaseRunConfForGateWayResponse>;
    /**
     * 创建云应用服务
     */
    EstablishCloudBaseRunServer(req: EstablishCloudBaseRunServerRequest, cb?: (error: string, rep: EstablishCloudBaseRunServerResponse) => void): Promise<EstablishCloudBaseRunServerResponse>;
    /**
     * 创建云开发项目
     */
    CreateAndDeployCloudBaseProject(req: CreateAndDeployCloudBaseProjectRequest, cb?: (error: string, rep: CreateAndDeployCloudBaseProjectResponse) => void): Promise<CreateAndDeployCloudBaseProjectResponse>;
    /**
     * 检查是否开通Tcb服务
     */
    CheckTcbService(req?: CheckTcbServiceRequest, cb?: (error: string, rep: CheckTcbServiceResponse) => void): Promise<CheckTcbServiceResponse>;
    /**
     * 删除终端用户
     */
    DeleteEndUser(req: DeleteEndUserRequest, cb?: (error: string, rep: DeleteEndUserResponse) => void): Promise<DeleteEndUserResponse>;
    /**
     * 创建或修改安全网关路由
     */
    EstablishWxGatewayRoute(req: EstablishWxGatewayRouteRequest, cb?: (error: string, rep: EstablishWxGatewayRouteResponse) => void): Promise<EstablishWxGatewayRouteResponse>;
    /**
     * 查询用户活动信息
     */
    DescribeUserActivityInfo(req: DescribeUserActivityInfoRequest, cb?: (error: string, rep: DescribeUserActivityInfoResponse) => void): Promise<DescribeUserActivityInfoResponse>;
    /**
     * 删除云项目
     */
    DeleteCloudBaseProjectLatestVersion(req: DeleteCloudBaseProjectLatestVersionRequest, cb?: (error: string, rep: DeleteCloudBaseProjectLatestVersionResponse) => void): Promise<DeleteCloudBaseProjectLatestVersionResponse>;
    /**
     * 获取终端用户总量与平台分布情况
     */
    DescribeEndUserStatistic(req: DescribeEndUserStatisticRequest, cb?: (error: string, rep: DescribeEndUserStatisticResponse) => void): Promise<DescribeEndUserStatisticResponse>;
    /**
     * 批量冻结
     */
    FreezeCloudBaseRunServers(req: FreezeCloudBaseRunServersRequest, cb?: (error: string, rep: FreezeCloudBaseRunServersResponse) => void): Promise<FreezeCloudBaseRunServersResponse>;
    /**
     * 获取云托管代码上传url
     */
    DescribeCloudBaseBuildService(req: DescribeCloudBaseBuildServiceRequest, cb?: (error: string, rep: DescribeCloudBaseBuildServiceResponse) => void): Promise<DescribeCloudBaseBuildServiceResponse>;
    /**
     * 获取终端用户列表
     */
    DescribeEndUsers(req: DescribeEndUsersRequest, cb?: (error: string, rep: DescribeEndUsersResponse) => void): Promise<DescribeEndUsersResponse>;
    /**
     * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
     */
    CreateStaticStore(req: CreateStaticStoreRequest, cb?: (error: string, rep: CreateStaticStoreResponse) => void): Promise<CreateStaticStoreResponse>;
    /**
     * 查询环境1分钱抵扣信息
     */
    DescribeSpecialCostItems(req: DescribeSpecialCostItemsRequest, cb?: (error: string, rep: DescribeSpecialCostItemsResponse) => void): Promise<DescribeSpecialCostItemsResponse>;
    /**
     * 删除网关某版本
     */
    DeleteGatewayVersion(req: DeleteGatewayVersionRequest, cb?: (error: string, rep: DeleteGatewayVersionResponse) => void): Promise<DeleteGatewayVersionResponse>;
    /**
     * 修改日志主题
     */
    ModifyClsTopic(req: ModifyClsTopicRequest, cb?: (error: string, rep: ModifyClsTopicResponse) => void): Promise<ModifyClsTopicResponse>;
    /**
     * 查询静态托管域名任务状态
     */
    DescribeHostingDomainTask(req: DescribeHostingDomainTaskRequest, cb?: (error: string, rep: DescribeHostingDomainTaskResponse) => void): Promise<DescribeHostingDomainTaskResponse>;
    /**
     * 删除安全网关路由
     */
    DeleteWxGatewayRoute(req: DeleteWxGatewayRouteRequest, cb?: (error: string, rep: DeleteWxGatewayRouteResponse) => void): Promise<DeleteWxGatewayRouteResponse>;
    /**
     * 开通微信云托管MySQL数据库服务
     */
    CreateWxCloudBaseRunServerDBCluster(req: CreateWxCloudBaseRunServerDBClusterRequest, cb?: (error: string, rep: CreateWxCloudBaseRunServerDBClusterResponse) => void): Promise<CreateWxCloudBaseRunServerDBClusterResponse>;
    /**
     * 设置网关版本的流量比例
     */
    ModifyGatewayVersionTraffic(req: ModifyGatewayVersionTrafficRequest, cb?: (error: string, rep: ModifyGatewayVersionTrafficResponse) => void): Promise<ModifyGatewayVersionTrafficResponse>;
    /**
     * 增加安全域名
     */
    CreateAuthDomain(req: CreateAuthDomainRequest, cb?: (error: string, rep: CreateAuthDomainResponse) => void): Promise<CreateAuthDomainResponse>;
    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     */
    DescribeEnvs(req: DescribeEnvsRequest, cb?: (error: string, rep: DescribeEnvsResponse) => void): Promise<DescribeEnvsResponse>;
    /**
     * 查看容器托管的集群状态
     */
    DescribeCloudBaseRunResource(req: DescribeCloudBaseRunResourceRequest, cb?: (error: string, rep: DescribeCloudBaseRunResourceResponse) => void): Promise<DescribeCloudBaseRunResourceResponse>;
    /**
     * 查看安全网关路由
     */
    DescribeWxGatewayRoutes(req: DescribeWxGatewayRoutesRequest, cb?: (error: string, rep: DescribeWxGatewayRoutesResponse) => void): Promise<DescribeWxGatewayRoutesResponse>;
    /**
     * 管理终端用户
     */
    ModifyEndUser(req: ModifyEndUserRequest, cb?: (error: string, rep: ModifyEndUserResponse) => void): Promise<ModifyEndUserResponse>;
    /**
     * 获取环境下单地域
     */
    DescribeEnvDealRegion(req: DescribeEnvDealRegionRequest, cb?: (error: string, rep: DescribeEnvDealRegionResponse) => void): Promise<DescribeEnvDealRegionResponse>;
    /**
     * 查询网关监控数据
     */
    DescribeGatewayCurveData(req: DescribeGatewayCurveDataRequest, cb?: (error: string, rep: DescribeGatewayCurveDataResponse) => void): Promise<DescribeGatewayCurveDataResponse>;
    /**
     * 描述扩展上传文件信息
     */
    DescribeExtensionUploadInfo(req: DescribeExtensionUploadInfoRequest, cb?: (error: string, rep: DescribeExtensionUploadInfoResponse) => void): Promise<DescribeExtensionUploadInfoResponse>;
    /**
     * 删除服务版本
     */
    DeleteCloudBaseRunServerVersion(req: DeleteCloudBaseRunServerVersionRequest, cb?: (error: string, rep: DeleteCloudBaseRunServerVersionResponse) => void): Promise<DeleteCloudBaseRunServerVersionResponse>;
    /**
     * 开通容器托管的资源，包括集群创建，VPC配置，异步任务创建，镜像托管，Coding等，查看创建结果需要根据DescribeCloudBaseRunResource接口来查看
     */
    CreateCloudBaseRunResource(req: CreateCloudBaseRunResourceRequest, cb?: (error: string, rep: CreateCloudBaseRunResourceResponse) => void): Promise<CreateCloudBaseRunResourceResponse>;
    /**
     * 获取增值包计费相关信息
     */
    DescribeExtraPkgBillingInfo(req: DescribeExtraPkgBillingInfoRequest, cb?: (error: string, rep: DescribeExtraPkgBillingInfoResponse) => void): Promise<DescribeExtraPkgBillingInfoResponse>;
    /**
     * 查询版本历史
     */
    DescribeCloudBaseRunVersionSnapshot(req: DescribeCloudBaseRunVersionSnapshotRequest, cb?: (error: string, rep: DescribeCloudBaseRunVersionSnapshotResponse) => void): Promise<DescribeCloudBaseRunVersionSnapshotResponse>;
    /**
     * 根据用户传入的指标, 拉取一段时间内的监控数据。
     */
    DescribeCurveData(req: DescribeCurveDataRequest, cb?: (error: string, rep: DescribeCurveDataResponse) => void): Promise<DescribeCurveDataResponse>;
    /**
     * 修改数据库权限
     */
    ModifyDatabaseACL(req: ModifyDatabaseACLRequest, cb?: (error: string, rep: ModifyDatabaseACLResponse) => void): Promise<ModifyDatabaseACLResponse>;
    /**
     * 查看安全网关
     */
    DescribeWxGateways(req: DescribeWxGatewaysRequest, cb?: (error: string, rep: DescribeWxGatewaysResponse) => void): Promise<DescribeWxGatewaysResponse>;
    /**
     * TCB云API统一入口
     */
    CommonServiceAPI(req: CommonServiceAPIRequest, cb?: (error: string, rep: CommonServiceAPIResponse) => void): Promise<CommonServiceAPIResponse>;
    /**
     * 查询环境个数上限
     */
    DescribeEnvLimit(req?: DescribeEnvLimitRequest, cb?: (error: string, rep: DescribeEnvLimitResponse) => void): Promise<DescribeEnvLimitResponse>;
    /**
     * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
     */
    DestroyStaticStore(req: DestroyStaticStoreRequest, cb?: (error: string, rep: DestroyStaticStoreResponse) => void): Promise<DestroyStaticStoreResponse>;
    /**
     * 查询后付费免费配额信息
     */
    DescribeEnvFreeQuota(req: DescribeEnvFreeQuotaRequest, cb?: (error: string, rep: DescribeEnvFreeQuotaResponse) => void): Promise<DescribeEnvFreeQuotaResponse>;
    /**
     * 本接口（DestroyStandaloneGateway）用于销毁小租户网关。
     */
    DestroyStandaloneGateway(req: DestroyStandaloneGatewayRequest, cb?: (error: string, rep: DestroyStandaloneGatewayResponse) => void): Promise<DestroyStandaloneGatewayResponse>;
    /**
     * 创建托管域名
     */
    CreateHostingDomain(req: CreateHostingDomainRequest, cb?: (error: string, rep: CreateHostingDomainResponse) => void): Promise<CreateHostingDomainResponse>;
    /**
     * 绑定另外一个环境下的网关，callContainer请求可以访问到该网关
     */
    BindEnvGateway(req: BindEnvGatewayRequest, cb?: (error: string, rep: BindEnvGatewayResponse) => void): Promise<BindEnvGatewayResponse>;
    /**
     * 创建服务版本
     */
    CreateCloudBaseRunServerVersion(req: CreateCloudBaseRunServerVersionRequest, cb?: (error: string, rep: CreateCloudBaseRunServerVersionResponse) => void): Promise<CreateCloudBaseRunServerVersionResponse>;
    /**
     * 查询服务版本的详情，CPU和MEM  请使用CPUSize和MemSize
     */
    DescribeCloudBaseRunServerVersion(req: DescribeCloudBaseRunServerVersionRequest, cb?: (error: string, rep: DescribeCloudBaseRunServerVersionResponse) => void): Promise<DescribeCloudBaseRunServerVersionResponse>;
    /**
     * 查询指定指标的配额使用量
     */
    DescribeQuotaData(req: DescribeQuotaDataRequest, cb?: (error: string, rep: DescribeQuotaDataResponse) => void): Promise<DescribeQuotaDataResponse>;
    /**
     * 查询单个服务的详情，版本以及详情
     */
    DescribeCloudBaseRunServer(req: DescribeCloudBaseRunServerRequest, cb?: (error: string, rep: DescribeCloudBaseRunServerResponse) => void): Promise<DescribeCloudBaseRunServerResponse>;
    /**
     * 本接口（DescribeStandaloneGateway）查询小租户网关套餐信息。
     */
    DescribeStandaloneGateway(req: DescribeStandaloneGatewayRequest, cb?: (error: string, rep: DescribeStandaloneGatewayResponse) => void): Promise<DescribeStandaloneGatewayResponse>;
    /**
     * 查看容器托管的集群状态扩展使用
     */
    DescribeCloudBaseRunResourceForExtend(req: DescribeCloudBaseRunResourceForExtendRequest, cb?: (error: string, rep: DescribeCloudBaseRunResourceForExtendResponse) => void): Promise<DescribeCloudBaseRunResourceForExtendResponse>;
    /**
     * 获取后付费免费额度
     */
    DescribePostpayPackageFreeQuotas(req: DescribePostpayPackageFreeQuotasRequest, cb?: (error: string, rep: DescribePostpayPackageFreeQuotasResponse) => void): Promise<DescribePostpayPackageFreeQuotasResponse>;
    /**
     * 更新活动详情
     */
    ReplaceActivityRecord(req: ReplaceActivityRecordRequest, cb?: (error: string, rep: ReplaceActivityRecordResponse) => void): Promise<ReplaceActivityRecordResponse>;
    /**
     * 获取环境终端用户新增与登录信息
     */
    DescribeEndUserLoginStatistic(req: DescribeEndUserLoginStatisticRequest, cb?: (error: string, rep: DescribeEndUserLoginStatisticResponse) => void): Promise<DescribeEndUserLoginStatisticResponse>;
    /**
     * 查询服务、版本和操作类型
     */
    DescribeCloudBaseRunOperationTypes(req: DescribeCloudBaseRunOperationTypesRequest, cb?: (error: string, rep: DescribeCloudBaseRunOperationTypesResponse) => void): Promise<DescribeCloudBaseRunOperationTypesResponse>;
    /**
     * 销毁环境
     */
    DestroyEnv(req: DestroyEnvRequest, cb?: (error: string, rep: DestroyEnvResponse) => void): Promise<DestroyEnvResponse>;
    /**
     * 查询活动信息
     */
    DescribeActivityInfo(req: DescribeActivityInfoRequest, cb?: (error: string, rep: DescribeActivityInfoResponse) => void): Promise<DescribeActivityInfoResponse>;
    /**
     * 查询一键部署任务 （特定接口：外部查询使用）
     */
    DescribeCloudBaseRunOneClickTaskExternal(req: DescribeCloudBaseRunOneClickTaskExternalRequest, cb?: (error: string, rep: DescribeCloudBaseRunOneClickTaskExternalResponse) => void): Promise<DescribeCloudBaseRunOneClickTaskExternalResponse>;
    /**
     * DescribeCloudBaseRunVersionRsByCondition 获取云托管详情
     */
    DescribeCloudBaseRunVersionRsByCondition(req?: DescribeCloudBaseRunVersionRsByConditionRequest, cb?: (error: string, rep: DescribeCloudBaseRunVersionRsByConditionResponse) => void): Promise<DescribeCloudBaseRunVersionRsByConditionResponse>;
    /**
     * 查询后付费资源免费量
     */
    DescribePostpayFreeQuotas(req: DescribePostpayFreeQuotasRequest, cb?: (error: string, rep: DescribePostpayFreeQuotasResponse) => void): Promise<DescribePostpayFreeQuotasResponse>;
    /**
     * 查询网关版本信息
暂不鉴权
     */
    DescribeGatewayVersions(req: DescribeGatewayVersionsRequest, cb?: (error: string, rep: DescribeGatewayVersionsResponse) => void): Promise<DescribeGatewayVersionsResponse>;
    /**
     * 查询微信云托管环境信息
     */
    DescribeWxCloudBaseRunEnvs(req: DescribeWxCloudBaseRunEnvsRequest, cb?: (error: string, rep: DescribeWxCloudBaseRunEnvsResponse) => void): Promise<DescribeWxCloudBaseRunEnvsResponse>;
    /**
     * 查询服务版本的详情
     */
    DescribeCbrServerVersion(req: DescribeCbrServerVersionRequest, cb?: (error: string, rep: DescribeCbrServerVersionResponse) => void): Promise<DescribeCbrServerVersionResponse>;
    /**
     * 针对特定的版本，进行滚动更新
     */
    RollUpdateCloudBaseRunServerVersion(req: RollUpdateCloudBaseRunServerVersionRequest, cb?: (error: string, rep: RollUpdateCloudBaseRunServerVersionResponse) => void): Promise<RollUpdateCloudBaseRunServerVersionResponse>;
    /**
     * 查询环境后付费计费详情
     */
    DescribeEnvPostpaidDeduct(req: DescribeEnvPostpaidDeductRequest, cb?: (error: string, rep: DescribeEnvPostpaidDeductResponse) => void): Promise<DescribeEnvPostpaidDeductResponse>;
    /**
     * 获取下载文件信息
     */
    DescribeDownloadFile(req: DescribeDownloadFileRequest, cb?: (error: string, rep: DescribeDownloadFileResponse) => void): Promise<DescribeDownloadFileResponse>;
    /**
     * 本接口（CreateStandaloneGateway）用于创建独立网关。
     */
    CreateStandaloneGateway(req: CreateStandaloneGatewayRequest, cb?: (error: string, rep: CreateStandaloneGatewayResponse) => void): Promise<CreateStandaloneGatewayResponse>;
    /**
     * 获取安全域名列表
     */
    DescribeAuthDomains(req: DescribeAuthDomainsRequest, cb?: (error: string, rep: DescribeAuthDomainsResponse) => void): Promise<DescribeAuthDomainsResponse>;
    /**
     * 批量解冻服务
     */
    UnfreezeCloudBaseRunServers(req: UnfreezeCloudBaseRunServersRequest, cb?: (error: string, rep: UnfreezeCloudBaseRunServersResponse) => void): Promise<UnfreezeCloudBaseRunServersResponse>;
    /**
     * 获取计费相关信息
     */
    DescribeBillingInfo(req: DescribeBillingInfoRequest, cb?: (error: string, rep: DescribeBillingInfoResponse) => void): Promise<DescribeBillingInfoResponse>;
    /**
     * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
     */
    ReinstateEnv(req: ReinstateEnvRequest, cb?: (error: string, rep: ReinstateEnvResponse) => void): Promise<ReinstateEnvResponse>;
    /**
     * 获取数据库权限
     */
    DescribeDatabaseACL(req: DescribeDatabaseACLRequest, cb?: (error: string, rep: DescribeDatabaseACLResponse) => void): Promise<DescribeDatabaseACLResponse>;
    /**
     * 修改容器内的版本流量配置
     */
    ModifyCloudBaseRunServerFlowConf(req: ModifyCloudBaseRunServerFlowConfRequest, cb?: (error: string, rep: ModifyCloudBaseRunServerFlowConfResponse) => void): Promise<ModifyCloudBaseRunServerFlowConfResponse>;
    /**
     * 根据用户传入的指标, 拉取一段时间内的监控数据。
     */
    DescribeGraphData(req: DescribeGraphDataRequest, cb?: (error: string, rep: DescribeGraphDataResponse) => void): Promise<DescribeGraphDataResponse>;
    /**
     * 查询活动记录信息
     */
    DescribeActivityRecord(req: DescribeActivityRecordRequest, cb?: (error: string, rep: DescribeActivityRecordResponse) => void): Promise<DescribeActivityRecordResponse>;
    /**
     * 搜索CLS日志，TCB角色密钥访问
     */
    SearchClsLog(req: SearchClsLogRequest, cb?: (error: string, rep: SearchClsLogResponse) => void): Promise<SearchClsLogResponse>;
    /**
     * 本接口（DescribeStandaloneGatewayPackage）用于查询小租户网关套餐信息。
     */
    DescribeStandaloneGatewayPackage(req: DescribeStandaloneGatewayPackageRequest, cb?: (error: string, rep: DescribeStandaloneGatewayPackageResponse) => void): Promise<DescribeStandaloneGatewayPackageResponse>;
    /**
     * 更新环境信息
     */
    ModifyEnv(req: ModifyEnvRequest, cb?: (error: string, rep: ModifyEnvResponse) => void): Promise<ModifyEnvResponse>;
    /**
     * 修改服务版本的副本数，环境变量
     */
    ModifyCloudBaseRunServerVersion(req: ModifyCloudBaseRunServerVersionRequest, cb?: (error: string, rep: ModifyCloudBaseRunServerVersionResponse) => void): Promise<ModifyCloudBaseRunServerVersionResponse>;
    /**
     * 查询服务版本详情(新)
     */
    DescribeCloudBaseRunVersion(req: DescribeCloudBaseRunVersionRequest, cb?: (error: string, rep: DescribeCloudBaseRunVersionResponse) => void): Promise<DescribeCloudBaseRunVersionResponse>;
    /**
     * 查询云托管服务版本容器列表
     */
    DescribeCloudBaseRunPodList(req: DescribeCloudBaseRunPodListRequest, cb?: (error: string, rep: DescribeCloudBaseRunPodListResponse) => void): Promise<DescribeCloudBaseRunPodListResponse>;
}

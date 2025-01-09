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
  DescribeEnvLimitResponse,
  DescribeCloudBaseRunAllVpcsResponse,
  OrderInfo,
  CheckTcbServiceResponse,
  DescribeCloudBaseRunConfForGateWayRequest,
  DescribeCloudBaseRunServerVersionRequest,
  CbrPackageInfo,
  DescribeEnvLimitRequest,
  DescribeEnvDealRegionResponse,
  DeleteCloudBaseRunServerVersionResponse,
  RollUpdateCloudBaseRunServerVersionResponse,
  SearchClsLogResponse,
  ModifyClsTopicResponse,
  StandaloneGatewayInfo,
  CloudBaseRunSideSpec,
  CommonServiceAPIResponse,
  DescribeStandaloneGatewayRequest,
  DescribeStandaloneGatewayPackageRequest,
  DescribeGraphDataResponse,
  DescribePostpayPackageFreeQuotasRequest,
  DescribeEndUserLoginStatisticRequest,
  DescribeCloudBaseBuildServiceResponse,
  DescribeEndUsersRequest,
  DescribeCloudBaseRunPodListResponse,
  DescribeCloudBaseRunServerDomainNameResponse,
  BanConfig,
  LogResObject,
  DestroyStandaloneGatewayRequest,
  CloudRunServiceSimpleVersionSnapshot,
  CreateWxCloudBaseRunServerDBClusterResponse,
  ReplaceActivityRecordResponse,
  DescribeSpecialCostItemsRequest,
  TurnOnStandaloneGatewayRequest,
  CreatePostpayPackageRequest,
  DescribeWxCloudBaseRunSubNetsRequest,
  ModifyEndUserRequest,
  DescribeCurveDataResponse,
  DescribeBaasPackageListRequest,
  ClsInfo,
  DescribeCloudBaseRunOperationTypesRequest,
  GatewayVersionItem,
  DescribeAuthDomainsResponse,
  ReinstateEnvRequest,
  DescribeCloudBaseRunOneClickTaskExternalRequest,
  ModifyClsTopicRequest,
  DescribeStandaloneGatewayResponse,
  DescribeWxCloudBaseRunEnvsResponse,
  CreateHostingDomainRequest,
  DescribeCloudBaseRunResourceRequest,
  DescribeCloudBaseRunServerRequest,
  CloudBaseRunEmptyDirVolumeSource,
  CloudBaseRunVolumeMount,
  BackendServiceInfo,
  DescribePostpayFreeQuotasRequest,
  DescribeActivityInfoResponse,
  CloudBaseRunImageInfo,
  DestroyStandaloneGatewayResponse,
  DescribeCloudBaseRunServerVersionResponse,
  EndUserInfo,
  DescribeGatewayVersionsResponse,
  DescribeGatewayVersionsRequest,
  DeleteEndUserRequest,
  DescribeHostingDomainTaskRequest,
  FreezeCloudBaseRunServersRequest,
  BaasPackageInfo,
  ModifyGatewayVersionTrafficRequest,
  DescribeQuotaDataResponse,
  DescribeGatewayCurveDataResponse,
  ActivityInfoItem,
  KVPair,
  DeleteGatewayVersionRequest,
  FunctionInfo,
  CommonServiceAPIRequest,
  DestroyStaticStoreRequest,
  CreateWxCloudBaseRunEnvRequest,
  ModifyCloudBaseRunServerFlowConfRequest,
  DescribeActivityRecordResponse,
  DescribeCloudBaseRunVersionRsByConditionResponse,
  CreateStaticStoreRequest,
  CreateWxCloudBaseRunServerDBClusterRequest,
  DeleteCloudBaseProjectLatestVersionResponse,
  DescribeGatewayCurveDataRequest,
  DescribeGraphDataRequest,
  DescribeBillingInfoResponse,
  CreateAuthDomainResponse,
  ModifyDatabaseACLRequest,
  DescribeEnvsRequest,
  CloudBaseRunVersionFlowItem,
  DeleteWxGatewayRouteRequest,
  DescribeEnvPostpaidDeductRequest,
  CustomHeader,
  DescribeExtraPkgBillingInfoRequest,
  BindEnvGatewayResponse,
  DescribeWxCloudBaseRunSubNetsResponse,
  DescribeEnvFreeQuotaRequest,
  CloudBaseCapabilities,
  CbrRepoInfo,
  DescribeEndUserLoginStatisticResponse,
  DescribeExtensionUploadInfoRequest,
  DescribeBillingInfoRequest,
  HpaPolicy,
  CloudBaseRunImageSecretInfo,
  CreateCloudBaseRunResourceResponse,
  DescribeStandaloneGatewayPackageResponse,
  LogObject,
  DestroyStaticStoreResponse,
  DeleteEndUserResponse,
  ModifyDatabaseACLResponse,
  CloudBaseEsInfo,
  PostPaidEnvDeductInfo,
  ModifyCloudBaseRunServerFlowConfResponse,
  DescribeCloudBaseRunOperationTypesResponse,
  SpecialCostItem,
  EstablishCloudBaseRunServerResponse,
  EnvInfo,
  DestroyEnvRequest,
  DestroyEnvResponse,
  DescribeCloudBaseProjectVersionListRequest,
  CodeSource,
  DescribeCloudBaseRunOneClickTaskExternalResponse,
  TurnOffStandaloneGatewayResponse,
  DescribeEnvsResponse,
  CreateAuthDomainRequest,
  DescribeEnvPostpaidDeductResponse,
  CreateHostingDomainResponse,
  TkeClusterInfo,
  DescribeActivityRecordRequest,
  CreateWxCloudBaseRunEnvResponse,
  DeleteCloudBaseRunServerVersionRequest,
  CreateCloudBaseRunServerVersionRequest,
  LoginStatistic,
  DescribeCloudBaseRunServerDomainNameRequest,
  DescribeCloudBaseRunAllVpcsRequest,
  CreatePostpayPackageResponse,
  DescribeBaasPackageListResponse,
  ReplaceActivityRecordRequest,
  DeleteWxGatewayRouteResponse,
  DescribeCloudBaseProjectVersionListResponse,
  UnfreezeCloudBaseRunServersRequest,
  CustomLogConfig,
  EstablishCloudBaseRunServerRequest,
  ReinstateEnvResponse,
  CloudBaseRunServiceVolumeMount,
  DescribeSpecialCostItemsResponse,
  CreateStandaloneGatewayRequest,
  DescribeWxGatewayRoutesRequest,
  DescribeWxGatewaysRequest,
  CloudBaseRunKVPriority,
  DescribeDownloadFileRequest,
  DescribeEndUserStatisticRequest,
  CloudBaseRunVpcSubnet,
  PackageFreeQuotaInfo,
  DescribeEnvFreeQuotaResponse,
  CreateAndDeployCloudBaseProjectResponse,
  StaticStorageInfo,
  DescribeCloudBaseRunResourceForExtendResponse,
  CreateAndDeployCloudBaseProjectRequest,
  DescribeCloudBaseRunVersionRequest,
  EstablishWxGatewayRouteRequest,
  UnfreezeCloudBaseRunServersResponse,
  DescribeCloudBaseRunConfForGateWayResponse,
  DescribeCbrServerVersionRequest,
  DescribeWxGatewayRoutesResponse,
  DatabasesInfo,
  CloudBaseSecurityContext,
  ExtensionFile,
  TurnOffStandaloneGatewayRequest,
  DeleteGatewayVersionResponse,
  EstablishWxGatewayRouteResponse,
  DescribeDatabaseACLRequest,
  SmsFreeQuota,
  CreateCloudBaseRunServerVersionResponse,
  CloudBaseRunServerVersionItem,
  PlatformStatistic,
  DeleteCloudBaseProjectLatestVersionRequest,
  DescribeCloudBaseProjectLatestVersionListResponse,
  DescribeWxGatewaysResponse,
  DescribeDownloadFileResponse,
  StandaloneGatewayPackageInfo,
  CloudBaseRunNfsVolumeSource,
  DescribeSmsQuotasResponse,
  DescribeWxCloudBaseRunEnvsRequest,
  CloudBaseRunServiceVolumeHostPath,
  DescribeCurveDataRequest,
  DescribeActivityInfoRequest,
  BindEnvGatewayRequest,
  ModifyEnvResponse,
  DescribeCbrServerVersionResponse,
  CreateStandaloneGatewayResponse,
  DescribeQuotaDataRequest,
  CreateStaticStoreResponse,
  CloudBaseRunVpcInfo,
  DescribeCloudBaseRunResourceResponse,
  StorageInfo,
  DescribeCloudBaseRunVersionSnapshotRequest,
  FreequotaInfo,
  CloudBaseRunVersionPod,
  DescribeUserActivityInfoResponse,
  DescribePostpayFreeQuotasResponse,
  ModifyGatewayVersionTrafficResponse,
  ActivityRecordItem,
  AuthDomain,
  DescribeCloudBaseProjectLatestVersionListRequest,
  LogServiceInfo,
  FrequencyLimitConfig,
  DescribeEndUsersResponse,
  DescribeHostingDomainTaskResponse,
  EnvBillingInfoItem,
  DescribeEndUserStatisticResponse,
  WxGatewayRountItem,
  DescribeSmsQuotasRequest,
  DescribeCloudBaseRunVersionResponse,
  DescribeCloudBaseRunResourceForExtendRequest,
  DescribeCloudBaseBuildServiceRequest,
  SearchClsLogRequest,
  CloudBaseCodeRepoDetail,
  CheckTcbServiceRequest,
  DescribeCloudBaseRunVersionRsByConditionRequest,
  DescribeCloudBaseRunServerResponse,
  DescribeUserActivityInfoRequest,
  Tag,
  DescribeCloudBaseRunVersionSnapshotResponse,
  DescribeCloudBaseRunPodListRequest,
  CreateCloudBaseRunResourceRequest,
  ModifyEndUserResponse,
  DescribeAuthDomainsRequest,
  FreezeCloudBaseRunServersResponse,
  CloudRunServiceVolume,
  CloudBaseRunForGatewayConf,
  GatewayItem,
  ExtensionFileInfo,
  WxGatewayCustomConfig,
  ObjectKV,
  CloudBaseProjectVersion,
  DescribeEnvDealRegionRequest,
  DescribeDatabaseACLResponse,
  ModifyCloudBaseRunServerVersionResponse,
  DescribeExtensionUploadInfoResponse,
  TurnOnStandaloneGatewayResponse,
  ModifyEnvRequest,
  PostpayEnvQuota,
  CustomRequestToAdd,
  DescribePostpayPackageFreeQuotasResponse,
  OneClickTaskStepInfo,
  DescribeExtraPkgBillingInfoResponse,
  CloudBaseCodeRepoName,
  ModifyCloudBaseRunServerVersionRequest,
  RollUpdateCloudBaseRunServerVersionRequest,
} from "./tcb_models"

/**
 * tcb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tcb.tencentcloudapi.com", "2018-06-08", clientConfig)
  }

  /**
   * 查询微信云托管子网
   */
  async DescribeWxCloudBaseRunSubNets(
    req: DescribeWxCloudBaseRunSubNetsRequest,
    cb?: (error: string, rep: DescribeWxCloudBaseRunSubNetsResponse) => void
  ): Promise<DescribeWxCloudBaseRunSubNetsResponse> {
    return this.request("DescribeWxCloudBaseRunSubNets", req, cb)
  }

  /**
   * 查询环境下所有的vpc列表
   */
  async DescribeCloudBaseRunAllVpcs(
    req: DescribeCloudBaseRunAllVpcsRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunAllVpcsResponse) => void
  ): Promise<DescribeCloudBaseRunAllVpcsResponse> {
    return this.request("DescribeCloudBaseRunAllVpcs", req, cb)
  }

  /**
     * 查询后付费短信资源量
1 有免费包的返回SmsFreeQuota结构所有字段
2 没有免费包，有付费包，付费返回复用SmsFreeQuota结构，其中只有 TodayUsedQuota 字段有效
3 都没有返回为空数组
     */
  async DescribeSmsQuotas(
    req: DescribeSmsQuotasRequest,
    cb?: (error: string, rep: DescribeSmsQuotasResponse) => void
  ): Promise<DescribeSmsQuotasResponse> {
    return this.request("DescribeSmsQuotas", req, cb)
  }

  /**
   * 查询微信云托管服务域名
   */
  async DescribeCloudBaseRunServerDomainName(
    req: DescribeCloudBaseRunServerDomainNameRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunServerDomainNameResponse) => void
  ): Promise<DescribeCloudBaseRunServerDomainNameResponse> {
    return this.request("DescribeCloudBaseRunServerDomainName", req, cb)
  }

  /**
   * 创建微信云托管
   */
  async CreateWxCloudBaseRunEnv(
    req: CreateWxCloudBaseRunEnvRequest,
    cb?: (error: string, rep: CreateWxCloudBaseRunEnvResponse) => void
  ): Promise<CreateWxCloudBaseRunEnvResponse> {
    return this.request("CreateWxCloudBaseRunEnv", req, cb)
  }

  /**
   * 本接口（TurnOffStandaloneGateway）用于关闭小租户网关。
   */
  async TurnOffStandaloneGateway(
    req: TurnOffStandaloneGatewayRequest,
    cb?: (error: string, rep: TurnOffStandaloneGatewayResponse) => void
  ): Promise<TurnOffStandaloneGatewayResponse> {
    return this.request("TurnOffStandaloneGateway", req, cb)
  }

  /**
   * 本接口（TurnOnStandaloneGateway）用于开启小租户网关。
   */
  async TurnOnStandaloneGateway(
    req: TurnOnStandaloneGatewayRequest,
    cb?: (error: string, rep: TurnOnStandaloneGatewayResponse) => void
  ): Promise<TurnOnStandaloneGatewayResponse> {
    return this.request("TurnOnStandaloneGateway", req, cb)
  }

  /**
   * 开通后付费资源
   */
  async CreatePostpayPackage(
    req: CreatePostpayPackageRequest,
    cb?: (error: string, rep: CreatePostpayPackageResponse) => void
  ): Promise<CreatePostpayPackageResponse> {
    return this.request("CreatePostpayPackage", req, cb)
  }

  /**
   * 获取新套餐列表，含详情，如果传了PackageId，则只获取指定套餐详情
   */
  async DescribeBaasPackageList(
    req: DescribeBaasPackageListRequest,
    cb?: (error: string, rep: DescribeBaasPackageListResponse) => void
  ): Promise<DescribeBaasPackageListResponse> {
    return this.request("DescribeBaasPackageList", req, cb)
  }

  /**
   * 云项目部署列表
   */
  async DescribeCloudBaseProjectVersionList(
    req: DescribeCloudBaseProjectVersionListRequest,
    cb?: (error: string, rep: DescribeCloudBaseProjectVersionListResponse) => void
  ): Promise<DescribeCloudBaseProjectVersionListResponse> {
    return this.request("DescribeCloudBaseProjectVersionList", req, cb)
  }

  /**
   * 获取云开发项目列表
   */
  async DescribeCloudBaseProjectLatestVersionList(
    req: DescribeCloudBaseProjectLatestVersionListRequest,
    cb?: (error: string, rep: DescribeCloudBaseProjectLatestVersionListResponse) => void
  ): Promise<DescribeCloudBaseProjectLatestVersionListResponse> {
    return this.request("DescribeCloudBaseProjectLatestVersionList", req, cb)
  }

  /**
   * 独立网关中拉取云托管服务对应的配置信息
   */
  async DescribeCloudBaseRunConfForGateWay(
    req: DescribeCloudBaseRunConfForGateWayRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunConfForGateWayResponse) => void
  ): Promise<DescribeCloudBaseRunConfForGateWayResponse> {
    return this.request("DescribeCloudBaseRunConfForGateWay", req, cb)
  }

  /**
   * 创建云应用服务
   */
  async EstablishCloudBaseRunServer(
    req: EstablishCloudBaseRunServerRequest,
    cb?: (error: string, rep: EstablishCloudBaseRunServerResponse) => void
  ): Promise<EstablishCloudBaseRunServerResponse> {
    return this.request("EstablishCloudBaseRunServer", req, cb)
  }

  /**
   * 创建云开发项目
   */
  async CreateAndDeployCloudBaseProject(
    req: CreateAndDeployCloudBaseProjectRequest,
    cb?: (error: string, rep: CreateAndDeployCloudBaseProjectResponse) => void
  ): Promise<CreateAndDeployCloudBaseProjectResponse> {
    return this.request("CreateAndDeployCloudBaseProject", req, cb)
  }

  /**
   * 检查是否开通Tcb服务
   */
  async CheckTcbService(
    req?: CheckTcbServiceRequest,
    cb?: (error: string, rep: CheckTcbServiceResponse) => void
  ): Promise<CheckTcbServiceResponse> {
    return this.request("CheckTcbService", req, cb)
  }

  /**
   * 删除终端用户
   */
  async DeleteEndUser(
    req: DeleteEndUserRequest,
    cb?: (error: string, rep: DeleteEndUserResponse) => void
  ): Promise<DeleteEndUserResponse> {
    return this.request("DeleteEndUser", req, cb)
  }

  /**
   * 创建或修改安全网关路由
   */
  async EstablishWxGatewayRoute(
    req: EstablishWxGatewayRouteRequest,
    cb?: (error: string, rep: EstablishWxGatewayRouteResponse) => void
  ): Promise<EstablishWxGatewayRouteResponse> {
    return this.request("EstablishWxGatewayRoute", req, cb)
  }

  /**
   * 查询用户活动信息
   */
  async DescribeUserActivityInfo(
    req: DescribeUserActivityInfoRequest,
    cb?: (error: string, rep: DescribeUserActivityInfoResponse) => void
  ): Promise<DescribeUserActivityInfoResponse> {
    return this.request("DescribeUserActivityInfo", req, cb)
  }

  /**
   * 删除云项目
   */
  async DeleteCloudBaseProjectLatestVersion(
    req: DeleteCloudBaseProjectLatestVersionRequest,
    cb?: (error: string, rep: DeleteCloudBaseProjectLatestVersionResponse) => void
  ): Promise<DeleteCloudBaseProjectLatestVersionResponse> {
    return this.request("DeleteCloudBaseProjectLatestVersion", req, cb)
  }

  /**
   * 获取终端用户总量与平台分布情况
   */
  async DescribeEndUserStatistic(
    req: DescribeEndUserStatisticRequest,
    cb?: (error: string, rep: DescribeEndUserStatisticResponse) => void
  ): Promise<DescribeEndUserStatisticResponse> {
    return this.request("DescribeEndUserStatistic", req, cb)
  }

  /**
   * 批量冻结
   */
  async FreezeCloudBaseRunServers(
    req: FreezeCloudBaseRunServersRequest,
    cb?: (error: string, rep: FreezeCloudBaseRunServersResponse) => void
  ): Promise<FreezeCloudBaseRunServersResponse> {
    return this.request("FreezeCloudBaseRunServers", req, cb)
  }

  /**
   * 获取云托管代码上传url
   */
  async DescribeCloudBaseBuildService(
    req: DescribeCloudBaseBuildServiceRequest,
    cb?: (error: string, rep: DescribeCloudBaseBuildServiceResponse) => void
  ): Promise<DescribeCloudBaseBuildServiceResponse> {
    return this.request("DescribeCloudBaseBuildService", req, cb)
  }

  /**
   * 获取终端用户列表
   */
  async DescribeEndUsers(
    req: DescribeEndUsersRequest,
    cb?: (error: string, rep: DescribeEndUsersResponse) => void
  ): Promise<DescribeEndUsersResponse> {
    return this.request("DescribeEndUsers", req, cb)
  }

  /**
   * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
   */
  async CreateStaticStore(
    req: CreateStaticStoreRequest,
    cb?: (error: string, rep: CreateStaticStoreResponse) => void
  ): Promise<CreateStaticStoreResponse> {
    return this.request("CreateStaticStore", req, cb)
  }

  /**
   * 查询环境1分钱抵扣信息
   */
  async DescribeSpecialCostItems(
    req: DescribeSpecialCostItemsRequest,
    cb?: (error: string, rep: DescribeSpecialCostItemsResponse) => void
  ): Promise<DescribeSpecialCostItemsResponse> {
    return this.request("DescribeSpecialCostItems", req, cb)
  }

  /**
   * 删除网关某版本
   */
  async DeleteGatewayVersion(
    req: DeleteGatewayVersionRequest,
    cb?: (error: string, rep: DeleteGatewayVersionResponse) => void
  ): Promise<DeleteGatewayVersionResponse> {
    return this.request("DeleteGatewayVersion", req, cb)
  }

  /**
   * 修改日志主题
   */
  async ModifyClsTopic(
    req: ModifyClsTopicRequest,
    cb?: (error: string, rep: ModifyClsTopicResponse) => void
  ): Promise<ModifyClsTopicResponse> {
    return this.request("ModifyClsTopic", req, cb)
  }

  /**
   * 查询静态托管域名任务状态
   */
  async DescribeHostingDomainTask(
    req: DescribeHostingDomainTaskRequest,
    cb?: (error: string, rep: DescribeHostingDomainTaskResponse) => void
  ): Promise<DescribeHostingDomainTaskResponse> {
    return this.request("DescribeHostingDomainTask", req, cb)
  }

  /**
   * 删除安全网关路由
   */
  async DeleteWxGatewayRoute(
    req: DeleteWxGatewayRouteRequest,
    cb?: (error: string, rep: DeleteWxGatewayRouteResponse) => void
  ): Promise<DeleteWxGatewayRouteResponse> {
    return this.request("DeleteWxGatewayRoute", req, cb)
  }

  /**
   * 开通微信云托管MySQL数据库服务
   */
  async CreateWxCloudBaseRunServerDBCluster(
    req: CreateWxCloudBaseRunServerDBClusterRequest,
    cb?: (error: string, rep: CreateWxCloudBaseRunServerDBClusterResponse) => void
  ): Promise<CreateWxCloudBaseRunServerDBClusterResponse> {
    return this.request("CreateWxCloudBaseRunServerDBCluster", req, cb)
  }

  /**
   * 设置网关版本的流量比例
   */
  async ModifyGatewayVersionTraffic(
    req: ModifyGatewayVersionTrafficRequest,
    cb?: (error: string, rep: ModifyGatewayVersionTrafficResponse) => void
  ): Promise<ModifyGatewayVersionTrafficResponse> {
    return this.request("ModifyGatewayVersionTraffic", req, cb)
  }

  /**
   * 增加安全域名
   */
  async CreateAuthDomain(
    req: CreateAuthDomainRequest,
    cb?: (error: string, rep: CreateAuthDomainResponse) => void
  ): Promise<CreateAuthDomainResponse> {
    return this.request("CreateAuthDomain", req, cb)
  }

  /**
   * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
   */
  async DescribeEnvs(
    req: DescribeEnvsRequest,
    cb?: (error: string, rep: DescribeEnvsResponse) => void
  ): Promise<DescribeEnvsResponse> {
    return this.request("DescribeEnvs", req, cb)
  }

  /**
   * 查看容器托管的集群状态
   */
  async DescribeCloudBaseRunResource(
    req: DescribeCloudBaseRunResourceRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunResourceResponse) => void
  ): Promise<DescribeCloudBaseRunResourceResponse> {
    return this.request("DescribeCloudBaseRunResource", req, cb)
  }

  /**
   * 查看安全网关路由
   */
  async DescribeWxGatewayRoutes(
    req: DescribeWxGatewayRoutesRequest,
    cb?: (error: string, rep: DescribeWxGatewayRoutesResponse) => void
  ): Promise<DescribeWxGatewayRoutesResponse> {
    return this.request("DescribeWxGatewayRoutes", req, cb)
  }

  /**
   * 管理终端用户
   */
  async ModifyEndUser(
    req: ModifyEndUserRequest,
    cb?: (error: string, rep: ModifyEndUserResponse) => void
  ): Promise<ModifyEndUserResponse> {
    return this.request("ModifyEndUser", req, cb)
  }

  /**
   * 获取环境下单地域
   */
  async DescribeEnvDealRegion(
    req: DescribeEnvDealRegionRequest,
    cb?: (error: string, rep: DescribeEnvDealRegionResponse) => void
  ): Promise<DescribeEnvDealRegionResponse> {
    return this.request("DescribeEnvDealRegion", req, cb)
  }

  /**
   * 查询网关监控数据
   */
  async DescribeGatewayCurveData(
    req: DescribeGatewayCurveDataRequest,
    cb?: (error: string, rep: DescribeGatewayCurveDataResponse) => void
  ): Promise<DescribeGatewayCurveDataResponse> {
    return this.request("DescribeGatewayCurveData", req, cb)
  }

  /**
   * 描述扩展上传文件信息
   */
  async DescribeExtensionUploadInfo(
    req: DescribeExtensionUploadInfoRequest,
    cb?: (error: string, rep: DescribeExtensionUploadInfoResponse) => void
  ): Promise<DescribeExtensionUploadInfoResponse> {
    return this.request("DescribeExtensionUploadInfo", req, cb)
  }

  /**
   * 删除服务版本
   */
  async DeleteCloudBaseRunServerVersion(
    req: DeleteCloudBaseRunServerVersionRequest,
    cb?: (error: string, rep: DeleteCloudBaseRunServerVersionResponse) => void
  ): Promise<DeleteCloudBaseRunServerVersionResponse> {
    return this.request("DeleteCloudBaseRunServerVersion", req, cb)
  }

  /**
   * 开通容器托管的资源，包括集群创建，VPC配置，异步任务创建，镜像托管，Coding等，查看创建结果需要根据DescribeCloudBaseRunResource接口来查看
   */
  async CreateCloudBaseRunResource(
    req: CreateCloudBaseRunResourceRequest,
    cb?: (error: string, rep: CreateCloudBaseRunResourceResponse) => void
  ): Promise<CreateCloudBaseRunResourceResponse> {
    return this.request("CreateCloudBaseRunResource", req, cb)
  }

  /**
   * 获取增值包计费相关信息
   */
  async DescribeExtraPkgBillingInfo(
    req: DescribeExtraPkgBillingInfoRequest,
    cb?: (error: string, rep: DescribeExtraPkgBillingInfoResponse) => void
  ): Promise<DescribeExtraPkgBillingInfoResponse> {
    return this.request("DescribeExtraPkgBillingInfo", req, cb)
  }

  /**
   * 查询版本历史
   */
  async DescribeCloudBaseRunVersionSnapshot(
    req: DescribeCloudBaseRunVersionSnapshotRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunVersionSnapshotResponse) => void
  ): Promise<DescribeCloudBaseRunVersionSnapshotResponse> {
    return this.request("DescribeCloudBaseRunVersionSnapshot", req, cb)
  }

  /**
   * 根据用户传入的指标, 拉取一段时间内的监控数据。
   */
  async DescribeCurveData(
    req: DescribeCurveDataRequest,
    cb?: (error: string, rep: DescribeCurveDataResponse) => void
  ): Promise<DescribeCurveDataResponse> {
    return this.request("DescribeCurveData", req, cb)
  }

  /**
   * 修改数据库权限
   */
  async ModifyDatabaseACL(
    req: ModifyDatabaseACLRequest,
    cb?: (error: string, rep: ModifyDatabaseACLResponse) => void
  ): Promise<ModifyDatabaseACLResponse> {
    return this.request("ModifyDatabaseACL", req, cb)
  }

  /**
   * 查看安全网关
   */
  async DescribeWxGateways(
    req: DescribeWxGatewaysRequest,
    cb?: (error: string, rep: DescribeWxGatewaysResponse) => void
  ): Promise<DescribeWxGatewaysResponse> {
    return this.request("DescribeWxGateways", req, cb)
  }

  /**
   * TCB云API统一入口
   */
  async CommonServiceAPI(
    req: CommonServiceAPIRequest,
    cb?: (error: string, rep: CommonServiceAPIResponse) => void
  ): Promise<CommonServiceAPIResponse> {
    return this.request("CommonServiceAPI", req, cb)
  }

  /**
   * 查询环境个数上限
   */
  async DescribeEnvLimit(
    req?: DescribeEnvLimitRequest,
    cb?: (error: string, rep: DescribeEnvLimitResponse) => void
  ): Promise<DescribeEnvLimitResponse> {
    return this.request("DescribeEnvLimit", req, cb)
  }

  /**
   * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
   */
  async DestroyStaticStore(
    req: DestroyStaticStoreRequest,
    cb?: (error: string, rep: DestroyStaticStoreResponse) => void
  ): Promise<DestroyStaticStoreResponse> {
    return this.request("DestroyStaticStore", req, cb)
  }

  /**
   * 查询后付费免费配额信息
   */
  async DescribeEnvFreeQuota(
    req: DescribeEnvFreeQuotaRequest,
    cb?: (error: string, rep: DescribeEnvFreeQuotaResponse) => void
  ): Promise<DescribeEnvFreeQuotaResponse> {
    return this.request("DescribeEnvFreeQuota", req, cb)
  }

  /**
   * 本接口（DestroyStandaloneGateway）用于销毁小租户网关。
   */
  async DestroyStandaloneGateway(
    req: DestroyStandaloneGatewayRequest,
    cb?: (error: string, rep: DestroyStandaloneGatewayResponse) => void
  ): Promise<DestroyStandaloneGatewayResponse> {
    return this.request("DestroyStandaloneGateway", req, cb)
  }

  /**
   * 创建托管域名
   */
  async CreateHostingDomain(
    req: CreateHostingDomainRequest,
    cb?: (error: string, rep: CreateHostingDomainResponse) => void
  ): Promise<CreateHostingDomainResponse> {
    return this.request("CreateHostingDomain", req, cb)
  }

  /**
   * 绑定另外一个环境下的网关，callContainer请求可以访问到该网关
   */
  async BindEnvGateway(
    req: BindEnvGatewayRequest,
    cb?: (error: string, rep: BindEnvGatewayResponse) => void
  ): Promise<BindEnvGatewayResponse> {
    return this.request("BindEnvGateway", req, cb)
  }

  /**
   * 创建服务版本
   */
  async CreateCloudBaseRunServerVersion(
    req: CreateCloudBaseRunServerVersionRequest,
    cb?: (error: string, rep: CreateCloudBaseRunServerVersionResponse) => void
  ): Promise<CreateCloudBaseRunServerVersionResponse> {
    return this.request("CreateCloudBaseRunServerVersion", req, cb)
  }

  /**
   * 查询服务版本的详情，CPU和MEM  请使用CPUSize和MemSize
   */
  async DescribeCloudBaseRunServerVersion(
    req: DescribeCloudBaseRunServerVersionRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunServerVersionResponse) => void
  ): Promise<DescribeCloudBaseRunServerVersionResponse> {
    return this.request("DescribeCloudBaseRunServerVersion", req, cb)
  }

  /**
   * 查询指定指标的配额使用量
   */
  async DescribeQuotaData(
    req: DescribeQuotaDataRequest,
    cb?: (error: string, rep: DescribeQuotaDataResponse) => void
  ): Promise<DescribeQuotaDataResponse> {
    return this.request("DescribeQuotaData", req, cb)
  }

  /**
   * 查询单个服务的详情，版本以及详情
   */
  async DescribeCloudBaseRunServer(
    req: DescribeCloudBaseRunServerRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunServerResponse) => void
  ): Promise<DescribeCloudBaseRunServerResponse> {
    return this.request("DescribeCloudBaseRunServer", req, cb)
  }

  /**
   * 本接口（DescribeStandaloneGateway）查询小租户网关套餐信息。
   */
  async DescribeStandaloneGateway(
    req: DescribeStandaloneGatewayRequest,
    cb?: (error: string, rep: DescribeStandaloneGatewayResponse) => void
  ): Promise<DescribeStandaloneGatewayResponse> {
    return this.request("DescribeStandaloneGateway", req, cb)
  }

  /**
   * 查看容器托管的集群状态扩展使用
   */
  async DescribeCloudBaseRunResourceForExtend(
    req: DescribeCloudBaseRunResourceForExtendRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunResourceForExtendResponse) => void
  ): Promise<DescribeCloudBaseRunResourceForExtendResponse> {
    return this.request("DescribeCloudBaseRunResourceForExtend", req, cb)
  }

  /**
   * 获取后付费免费额度
   */
  async DescribePostpayPackageFreeQuotas(
    req: DescribePostpayPackageFreeQuotasRequest,
    cb?: (error: string, rep: DescribePostpayPackageFreeQuotasResponse) => void
  ): Promise<DescribePostpayPackageFreeQuotasResponse> {
    return this.request("DescribePostpayPackageFreeQuotas", req, cb)
  }

  /**
   * 更新活动详情
   */
  async ReplaceActivityRecord(
    req: ReplaceActivityRecordRequest,
    cb?: (error: string, rep: ReplaceActivityRecordResponse) => void
  ): Promise<ReplaceActivityRecordResponse> {
    return this.request("ReplaceActivityRecord", req, cb)
  }

  /**
   * 获取环境终端用户新增与登录信息
   */
  async DescribeEndUserLoginStatistic(
    req: DescribeEndUserLoginStatisticRequest,
    cb?: (error: string, rep: DescribeEndUserLoginStatisticResponse) => void
  ): Promise<DescribeEndUserLoginStatisticResponse> {
    return this.request("DescribeEndUserLoginStatistic", req, cb)
  }

  /**
   * 查询服务、版本和操作类型
   */
  async DescribeCloudBaseRunOperationTypes(
    req: DescribeCloudBaseRunOperationTypesRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunOperationTypesResponse) => void
  ): Promise<DescribeCloudBaseRunOperationTypesResponse> {
    return this.request("DescribeCloudBaseRunOperationTypes", req, cb)
  }

  /**
   * 销毁环境
   */
  async DestroyEnv(
    req: DestroyEnvRequest,
    cb?: (error: string, rep: DestroyEnvResponse) => void
  ): Promise<DestroyEnvResponse> {
    return this.request("DestroyEnv", req, cb)
  }

  /**
   * 查询活动信息
   */
  async DescribeActivityInfo(
    req: DescribeActivityInfoRequest,
    cb?: (error: string, rep: DescribeActivityInfoResponse) => void
  ): Promise<DescribeActivityInfoResponse> {
    return this.request("DescribeActivityInfo", req, cb)
  }

  /**
   * 查询一键部署任务 （特定接口：外部查询使用）
   */
  async DescribeCloudBaseRunOneClickTaskExternal(
    req: DescribeCloudBaseRunOneClickTaskExternalRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunOneClickTaskExternalResponse) => void
  ): Promise<DescribeCloudBaseRunOneClickTaskExternalResponse> {
    return this.request("DescribeCloudBaseRunOneClickTaskExternal", req, cb)
  }

  /**
   * DescribeCloudBaseRunVersionRsByCondition 获取云托管详情
   */
  async DescribeCloudBaseRunVersionRsByCondition(
    req?: DescribeCloudBaseRunVersionRsByConditionRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunVersionRsByConditionResponse) => void
  ): Promise<DescribeCloudBaseRunVersionRsByConditionResponse> {
    return this.request("DescribeCloudBaseRunVersionRsByCondition", req, cb)
  }

  /**
   * 查询后付费资源免费量
   */
  async DescribePostpayFreeQuotas(
    req: DescribePostpayFreeQuotasRequest,
    cb?: (error: string, rep: DescribePostpayFreeQuotasResponse) => void
  ): Promise<DescribePostpayFreeQuotasResponse> {
    return this.request("DescribePostpayFreeQuotas", req, cb)
  }

  /**
     * 查询网关版本信息
暂不鉴权
     */
  async DescribeGatewayVersions(
    req: DescribeGatewayVersionsRequest,
    cb?: (error: string, rep: DescribeGatewayVersionsResponse) => void
  ): Promise<DescribeGatewayVersionsResponse> {
    return this.request("DescribeGatewayVersions", req, cb)
  }

  /**
   * 查询微信云托管环境信息
   */
  async DescribeWxCloudBaseRunEnvs(
    req: DescribeWxCloudBaseRunEnvsRequest,
    cb?: (error: string, rep: DescribeWxCloudBaseRunEnvsResponse) => void
  ): Promise<DescribeWxCloudBaseRunEnvsResponse> {
    return this.request("DescribeWxCloudBaseRunEnvs", req, cb)
  }

  /**
   * 查询服务版本的详情
   */
  async DescribeCbrServerVersion(
    req: DescribeCbrServerVersionRequest,
    cb?: (error: string, rep: DescribeCbrServerVersionResponse) => void
  ): Promise<DescribeCbrServerVersionResponse> {
    return this.request("DescribeCbrServerVersion", req, cb)
  }

  /**
   * 针对特定的版本，进行滚动更新
   */
  async RollUpdateCloudBaseRunServerVersion(
    req: RollUpdateCloudBaseRunServerVersionRequest,
    cb?: (error: string, rep: RollUpdateCloudBaseRunServerVersionResponse) => void
  ): Promise<RollUpdateCloudBaseRunServerVersionResponse> {
    return this.request("RollUpdateCloudBaseRunServerVersion", req, cb)
  }

  /**
   * 查询环境后付费计费详情
   */
  async DescribeEnvPostpaidDeduct(
    req: DescribeEnvPostpaidDeductRequest,
    cb?: (error: string, rep: DescribeEnvPostpaidDeductResponse) => void
  ): Promise<DescribeEnvPostpaidDeductResponse> {
    return this.request("DescribeEnvPostpaidDeduct", req, cb)
  }

  /**
   * 获取下载文件信息
   */
  async DescribeDownloadFile(
    req: DescribeDownloadFileRequest,
    cb?: (error: string, rep: DescribeDownloadFileResponse) => void
  ): Promise<DescribeDownloadFileResponse> {
    return this.request("DescribeDownloadFile", req, cb)
  }

  /**
   * 本接口（CreateStandaloneGateway）用于创建独立网关。
   */
  async CreateStandaloneGateway(
    req: CreateStandaloneGatewayRequest,
    cb?: (error: string, rep: CreateStandaloneGatewayResponse) => void
  ): Promise<CreateStandaloneGatewayResponse> {
    return this.request("CreateStandaloneGateway", req, cb)
  }

  /**
   * 获取安全域名列表
   */
  async DescribeAuthDomains(
    req: DescribeAuthDomainsRequest,
    cb?: (error: string, rep: DescribeAuthDomainsResponse) => void
  ): Promise<DescribeAuthDomainsResponse> {
    return this.request("DescribeAuthDomains", req, cb)
  }

  /**
   * 批量解冻服务
   */
  async UnfreezeCloudBaseRunServers(
    req: UnfreezeCloudBaseRunServersRequest,
    cb?: (error: string, rep: UnfreezeCloudBaseRunServersResponse) => void
  ): Promise<UnfreezeCloudBaseRunServersResponse> {
    return this.request("UnfreezeCloudBaseRunServers", req, cb)
  }

  /**
   * 获取计费相关信息
   */
  async DescribeBillingInfo(
    req: DescribeBillingInfoRequest,
    cb?: (error: string, rep: DescribeBillingInfoResponse) => void
  ): Promise<DescribeBillingInfoResponse> {
    return this.request("DescribeBillingInfo", req, cb)
  }

  /**
   * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
   */
  async ReinstateEnv(
    req: ReinstateEnvRequest,
    cb?: (error: string, rep: ReinstateEnvResponse) => void
  ): Promise<ReinstateEnvResponse> {
    return this.request("ReinstateEnv", req, cb)
  }

  /**
   * 获取数据库权限
   */
  async DescribeDatabaseACL(
    req: DescribeDatabaseACLRequest,
    cb?: (error: string, rep: DescribeDatabaseACLResponse) => void
  ): Promise<DescribeDatabaseACLResponse> {
    return this.request("DescribeDatabaseACL", req, cb)
  }

  /**
   * 修改容器内的版本流量配置
   */
  async ModifyCloudBaseRunServerFlowConf(
    req: ModifyCloudBaseRunServerFlowConfRequest,
    cb?: (error: string, rep: ModifyCloudBaseRunServerFlowConfResponse) => void
  ): Promise<ModifyCloudBaseRunServerFlowConfResponse> {
    return this.request("ModifyCloudBaseRunServerFlowConf", req, cb)
  }

  /**
   * 根据用户传入的指标, 拉取一段时间内的监控数据。
   */
  async DescribeGraphData(
    req: DescribeGraphDataRequest,
    cb?: (error: string, rep: DescribeGraphDataResponse) => void
  ): Promise<DescribeGraphDataResponse> {
    return this.request("DescribeGraphData", req, cb)
  }

  /**
   * 查询活动记录信息
   */
  async DescribeActivityRecord(
    req: DescribeActivityRecordRequest,
    cb?: (error: string, rep: DescribeActivityRecordResponse) => void
  ): Promise<DescribeActivityRecordResponse> {
    return this.request("DescribeActivityRecord", req, cb)
  }

  /**
   * 搜索CLS日志，TCB角色密钥访问
   */
  async SearchClsLog(
    req: SearchClsLogRequest,
    cb?: (error: string, rep: SearchClsLogResponse) => void
  ): Promise<SearchClsLogResponse> {
    return this.request("SearchClsLog", req, cb)
  }

  /**
   * 本接口（DescribeStandaloneGatewayPackage）用于查询小租户网关套餐信息。
   */
  async DescribeStandaloneGatewayPackage(
    req: DescribeStandaloneGatewayPackageRequest,
    cb?: (error: string, rep: DescribeStandaloneGatewayPackageResponse) => void
  ): Promise<DescribeStandaloneGatewayPackageResponse> {
    return this.request("DescribeStandaloneGatewayPackage", req, cb)
  }

  /**
   * 更新环境信息
   */
  async ModifyEnv(
    req: ModifyEnvRequest,
    cb?: (error: string, rep: ModifyEnvResponse) => void
  ): Promise<ModifyEnvResponse> {
    return this.request("ModifyEnv", req, cb)
  }

  /**
   * 修改服务版本的副本数，环境变量
   */
  async ModifyCloudBaseRunServerVersion(
    req: ModifyCloudBaseRunServerVersionRequest,
    cb?: (error: string, rep: ModifyCloudBaseRunServerVersionResponse) => void
  ): Promise<ModifyCloudBaseRunServerVersionResponse> {
    return this.request("ModifyCloudBaseRunServerVersion", req, cb)
  }

  /**
   * 查询服务版本详情(新)
   */
  async DescribeCloudBaseRunVersion(
    req: DescribeCloudBaseRunVersionRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunVersionResponse) => void
  ): Promise<DescribeCloudBaseRunVersionResponse> {
    return this.request("DescribeCloudBaseRunVersion", req, cb)
  }

  /**
   * 查询云托管服务版本容器列表
   */
  async DescribeCloudBaseRunPodList(
    req: DescribeCloudBaseRunPodListRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunPodListResponse) => void
  ): Promise<DescribeCloudBaseRunPodListResponse> {
    return this.request("DescribeCloudBaseRunPodList", req, cb)
  }
}

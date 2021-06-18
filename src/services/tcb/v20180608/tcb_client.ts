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
  OrderInfo,
  CheckTcbServiceResponse,
  DescribeCloudBaseRunServerVersionRequest,
  DescribeExtensionUploadInfoRequest,
  DescribeCloudBaseRunServerVersionResponse,
  CloudBaseRunSideSpec,
  CommonServiceAPIResponse,
  DescribePostpayPackageFreeQuotasRequest,
  DescribeEnvLimitRequest,
  DescribeCloudBaseBuildServiceResponse,
  DescribeEndUsersRequest,
  DescribeEndUserStatisticRequest,
  CloudRunServiceSimpleVersionSnapshot,
  CreateWxCloudBaseRunServerDBClusterResponse,
  LogServiceInfo,
  DescribeCloudBaseRunResourceForExtendRequest,
  ModifyEndUserRequest,
  RollUpdateCloudBaseRunServerVersionResponse,
  DescribeAuthDomainsResponse,
  DescribeWxCloudBaseRunEnvsResponse,
  CreateHostingDomainRequest,
  DescribeCloudBaseRunResourceRequest,
  CloudBaseRunEmptyDirVolumeSource,
  CloudBaseRunVolumeMount,
  DescribePostpayFreeQuotasRequest,
  CloudBaseRunImageInfo,
  ModifyDatabaseACLRequest,
  DestroyStaticStoreRequest,
  EndUserInfo,
  DescribeEndUserLoginStatisticResponse,
  DescribeHostingDomainTaskRequest,
  DescribeQuotaDataResponse,
  KVPair,
  SmsFreeQuota,
  FunctionInfo,
  CommonServiceAPIRequest,
  CreateWxCloudBaseRunEnvRequest,
  CreateStaticStoreRequest,
  CreateWxCloudBaseRunServerDBClusterRequest,
  DeleteCloudBaseProjectLatestVersionResponse,
  CreateAuthDomainResponse,
  DescribeEnvsRequest,
  Tag,
  DeleteWxGatewayRouteRequest,
  DescribeExtraPkgBillingInfoRequest,
  DescribeWxCloudBaseRunSubNetsResponse,
  DescribeEnvFreeQuotaRequest,
  CloudBaseCapabilities,
  DeleteEndUserRequest,
  CreateCloudBaseRunResourceResponse,
  DestroyStaticStoreResponse,
  DeleteEndUserResponse,
  ModifyDatabaseACLResponse,
  CloudBaseEsInfo,
  EstablishCloudBaseRunServerResponse,
  EnvInfo,
  DestroyEnvRequest,
  DestroyEnvResponse,
  DescribeCloudBaseProjectVersionListRequest,
  CodeSource,
  DescribeEnvsResponse,
  CreateAuthDomainRequest,
  CreateHostingDomainResponse,
  EstablishWxGatewayRouteResponse,
  CreateWxCloudBaseRunEnvResponse,
  EstablishWxGatewayRouteRequest,
  CreateCloudBaseRunServerVersionRequest,
  LoginStatistic,
  DescribeWxCloudBaseRunSubNetsRequest,
  CreatePostpayPackageResponse,
  DeleteWxGatewayRouteResponse,
  EstablishCloudBaseRunServerRequest,
  CloudBaseRunServiceVolumeMount,
  DescribeCloudBaseProjectVersionListResponse,
  DescribeDownloadFileRequest,
  ReinstateEnvResponse,
  CloudBaseRunVpcSubnet,
  PackageFreeQuotaInfo,
  DescribeEnvFreeQuotaResponse,
  CreateAndDeployCloudBaseProjectResponse,
  StaticStorageInfo,
  DescribeCloudBaseRunResourceForExtendResponse,
  CreateAndDeployCloudBaseProjectRequest,
  DescribeCloudBaseRunVersionRequest,
  DatabasesInfo,
  CloudBaseSecurityContext,
  ExtensionFile,
  ReinstateEnvRequest,
  DescribeDatabaseACLRequest,
  CreateCloudBaseRunServerVersionResponse,
  DescribeEndUserLoginStatisticRequest,
  PlatformStatistic,
  DeleteCloudBaseProjectLatestVersionRequest,
  DescribeCloudBaseProjectLatestVersionListResponse,
  CloudBaseRunNfsVolumeSource,
  DescribeSmsQuotasResponse,
  DescribeWxCloudBaseRunEnvsRequest,
  CloudBaseRunImageSecretInfo,
  ModifyEnvResponse,
  DescribeDownloadFileResponse,
  DescribeQuotaDataRequest,
  CreateStaticStoreResponse,
  CloudBaseRunVpcInfo,
  DescribeCloudBaseRunResourceResponse,
  StorageInfo,
  DescribeCloudBaseRunVersionSnapshotRequest,
  FreequotaInfo,
  DescribePostpayFreeQuotasResponse,
  DescribeEndUsersResponse,
  AuthDomain,
  DescribeCloudBaseProjectLatestVersionListRequest,
  DescribeHostingDomainTaskResponse,
  EnvBillingInfoItem,
  DescribeEndUserStatisticResponse,
  DescribeSmsQuotasRequest,
  DescribeCloudBaseRunVersionResponse,
  CreatePostpayPackageRequest,
  DescribeCloudBaseBuildServiceRequest,
  CloudBaseCodeRepoDetail,
  CheckTcbServiceRequest,
  CreateCloudBaseRunResourceRequest,
  ModifyEndUserResponse,
  DescribeAuthDomainsRequest,
  CloudRunServiceVolume,
  ExtensionFileInfo,
  CloudBaseProjectVersion,
  DescribeDatabaseACLResponse,
  DescribeExtensionUploadInfoResponse,
  ModifyEnvRequest,
  PostpayEnvQuota,
  DescribeCloudBaseRunVersionSnapshotResponse,
  DescribePostpayPackageFreeQuotasResponse,
  DescribeExtraPkgBillingInfoResponse,
  CloudBaseCodeRepoName,
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
   * 创建托管域名
   */
  async CreateHostingDomain(
    req: CreateHostingDomainRequest,
    cb?: (error: string, rep: CreateHostingDomainResponse) => void
  ): Promise<CreateHostingDomainResponse> {
    return this.request("CreateHostingDomain", req, cb)
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
   * 获取终端用户列表
   */
  async DescribeEndUsers(
    req: DescribeEndUsersRequest,
    cb?: (error: string, rep: DescribeEndUsersResponse) => void
  ): Promise<DescribeEndUsersResponse> {
    return this.request("DescribeEndUsers", req, cb)
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
   * 针对特定的版本，进行滚动更新
   */
  async RollUpdateCloudBaseRunServerVersion(
    req: RollUpdateCloudBaseRunServerVersionRequest,
    cb?: (error: string, rep: RollUpdateCloudBaseRunServerVersionResponse) => void
  ): Promise<RollUpdateCloudBaseRunServerVersionResponse> {
    return this.request("RollUpdateCloudBaseRunServerVersion", req, cb)
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
   * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
   */
  async DescribeEnvs(
    req: DescribeEnvsRequest,
    cb?: (error: string, rep: DescribeEnvsResponse) => void
  ): Promise<DescribeEnvsResponse> {
    return this.request("DescribeEnvs", req, cb)
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
   * 增加安全域名
   */
  async CreateAuthDomain(
    req: CreateAuthDomainRequest,
    cb?: (error: string, rep: CreateAuthDomainResponse) => void
  ): Promise<CreateAuthDomainResponse> {
    return this.request("CreateAuthDomain", req, cb)
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
   * 获取安全域名列表
   */
  async DescribeAuthDomains(
    req: DescribeAuthDomainsRequest,
    cb?: (error: string, rep: DescribeAuthDomainsResponse) => void
  ): Promise<DescribeAuthDomainsResponse> {
    return this.request("DescribeAuthDomains", req, cb)
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
   * 查看容器托管的集群状态
   */
  async DescribeCloudBaseRunResource(
    req: DescribeCloudBaseRunResourceRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunResourceResponse) => void
  ): Promise<DescribeCloudBaseRunResourceResponse> {
    return this.request("DescribeCloudBaseRunResource", req, cb)
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
   * 查询静态托管域名任务状态
   */
  async DescribeHostingDomainTask(
    req: DescribeHostingDomainTaskRequest,
    cb?: (error: string, rep: DescribeHostingDomainTaskResponse) => void
  ): Promise<DescribeHostingDomainTaskResponse> {
    return this.request("DescribeHostingDomainTask", req, cb)
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
   * 查看容器托管的集群状态扩展使用
   */
  async DescribeCloudBaseRunResourceForExtend(
    req: DescribeCloudBaseRunResourceForExtendRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunResourceForExtendResponse) => void
  ): Promise<DescribeCloudBaseRunResourceForExtendResponse> {
    return this.request("DescribeCloudBaseRunResourceForExtend", req, cb)
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
   * 获取增值包计费相关信息
   */
  async DescribeExtraPkgBillingInfo(
    req: DescribeExtraPkgBillingInfoRequest,
    cb?: (error: string, rep: DescribeExtraPkgBillingInfoResponse) => void
  ): Promise<DescribeExtraPkgBillingInfoResponse> {
    return this.request("DescribeExtraPkgBillingInfo", req, cb)
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
   * 创建云应用服务
   */
  async EstablishCloudBaseRunServer(
    req: EstablishCloudBaseRunServerRequest,
    cb?: (error: string, rep: EstablishCloudBaseRunServerResponse) => void
  ): Promise<EstablishCloudBaseRunServerResponse> {
    return this.request("EstablishCloudBaseRunServer", req, cb)
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
   * 获取环境终端用户新增与登录信息
   */
  async DescribeEndUserLoginStatistic(
    req: DescribeEndUserLoginStatisticRequest,
    cb?: (error: string, rep: DescribeEndUserLoginStatisticResponse) => void
  ): Promise<DescribeEndUserLoginStatisticResponse> {
    return this.request("DescribeEndUserLoginStatistic", req, cb)
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
   * 查询指定指标的配额使用量
   */
  async DescribeQuotaData(
    req: DescribeQuotaDataRequest,
    cb?: (error: string, rep: DescribeQuotaDataResponse) => void
  ): Promise<DescribeQuotaDataResponse> {
    return this.request("DescribeQuotaData", req, cb)
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
   * 删除云项目
   */
  async DeleteCloudBaseProjectLatestVersion(
    req: DeleteCloudBaseProjectLatestVersionRequest,
    cb?: (error: string, rep: DeleteCloudBaseProjectLatestVersionResponse) => void
  ): Promise<DeleteCloudBaseProjectLatestVersionResponse> {
    return this.request("DeleteCloudBaseProjectLatestVersion", req, cb)
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
   * 更新环境信息
   */
  async ModifyEnv(
    req: ModifyEnvRequest,
    cb?: (error: string, rep: ModifyEnvResponse) => void
  ): Promise<ModifyEnvResponse> {
    return this.request("ModifyEnv", req, cb)
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
   * 销毁环境
   */
  async DestroyEnv(
    req: DestroyEnvRequest,
    cb?: (error: string, rep: DestroyEnvResponse) => void
  ): Promise<DestroyEnvResponse> {
    return this.request("DestroyEnv", req, cb)
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
   * 查询版本历史
   */
  async DescribeCloudBaseRunVersionSnapshot(
    req: DescribeCloudBaseRunVersionSnapshotRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunVersionSnapshotResponse) => void
  ): Promise<DescribeCloudBaseRunVersionSnapshotResponse> {
    return this.request("DescribeCloudBaseRunVersionSnapshot", req, cb)
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
   * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
   */
  async DestroyStaticStore(
    req: DestroyStaticStoreRequest,
    cb?: (error: string, rep: DestroyStaticStoreResponse) => void
  ): Promise<DestroyStaticStoreResponse> {
    return this.request("DestroyStaticStore", req, cb)
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
   * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
   */
  async CreateStaticStore(
    req: CreateStaticStoreRequest,
    cb?: (error: string, rep: CreateStaticStoreResponse) => void
  ): Promise<CreateStaticStoreResponse> {
    return this.request("CreateStaticStore", req, cb)
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
   * 查询后付费资源免费量
   */
  async DescribePostpayFreeQuotas(
    req: DescribePostpayFreeQuotasRequest,
    cb?: (error: string, rep: DescribePostpayFreeQuotasResponse) => void
  ): Promise<DescribePostpayFreeQuotasResponse> {
    return this.request("DescribePostpayFreeQuotas", req, cb)
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
}

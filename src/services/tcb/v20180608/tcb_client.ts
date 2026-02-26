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
  DescribeEnvLimitResponse,
  ListTablesResponse,
  OrderInfo,
  CheckTcbServiceResponse,
  DescribeCloudBaseRunServerVersionRequest,
  CbrPackageInfo,
  PostPaidEnvDeductInfo,
  DescribeEnvDealRegionResponse,
  DeleteCloudBaseRunServerVersionResponse,
  BindCloudBaseAccessDomainRequest,
  ModifyEnvPlanRequest,
  CloudBaseClientQPSPolicy,
  ModifyClsTopicResponse,
  CreateIndex,
  ClusterDetail,
  DbInstance,
  DescribeMySQLClusterDetailResponse,
  CloudBaseRunSideSpec,
  CommonServiceAPIResponse,
  DescribeGraphDataResponse,
  DeleteUsersResp,
  DescribeEnvLimitRequest,
  DescribeCloudBaseBuildServiceResponse,
  DescribeMySQLTaskStatusRequest,
  UnfreezeCloudBaseRunServersRequest,
  DescribeCloudBaseRunVersionRequest,
  BanConfig,
  ModifyUserResponse,
  LogResObject,
  CloudRunServiceSimpleVersionSnapshot,
  BindCloudBaseAccessDomainResponse,
  DestroyStaticStoreRequest,
  ReplaceActivityRecordResponse,
  DescribeSpecialCostItemsRequest,
  CreatePostpayPackageRequest,
  MongoConnector,
  DescribeCurveDataResponse,
  DescribeBaasPackageListRequest,
  ClsInfo,
  GatewayVersionItem,
  DescribeAuthDomainsResponse,
  ModifyCloudBaseGWAPIRequest,
  ModifyClsTopicRequest,
  CreateHostingDomainRequest,
  DescribeCloudBaseRunResourceRequest,
  DescribeCloudBaseRunServerRequest,
  CloudBaseRunEmptyDirVolumeSource,
  CloudBaseRunVolumeMount,
  DescribePostpayFreeQuotasRequest,
  DeleteGatewayVersionRequest,
  CloudBaseRunImageInfo,
  ModifyDatabaseACLRequest,
  DescribeCloudBaseRunServerVersionResponse,
  DescribeGatewayVersionsResponse,
  DescribeSmsQuotasRequest,
  MgoKeySchema,
  DescribeHostingDomainTaskRequest,
  FreezeCloudBaseRunServersRequest,
  DescribeUserListResp,
  RenewEnvRequest,
  BaasPackageInfo,
  ModifyGatewayVersionTrafficRequest,
  DescribeQuotaDataResponse,
  CreateBillDealResponse,
  CreateMySQLResult,
  DescribeGatewayCurveDataResponse,
  KVPair,
  SmsFreeQuota,
  FunctionInfo,
  CreateEnvResponse,
  WxGatewayRountItem,
  CommonServiceAPIRequest,
  StaticStoreInfo,
  ModifyCloudBaseRunServerFlowConfRequest,
  DescribeActivityRecordResponse,
  CreateUserResponse,
  DescribeEnvAccountCircleRequest,
  RenewEnvResponse,
  DescribeMySQLClusterDetailRequest,
  CreateStaticStoreRequest,
  DeleteCloudBaseProjectLatestVersionResponse,
  DescribeGatewayCurveDataRequest,
  DescribeGraphDataRequest,
  DescribeBillingInfoResponse,
  CreateAuthDomainResponse,
  DescribeEnvsRequest,
  CloudBaseRunVersionFlowItem,
  ModifyDatabaseACLResponse,
  DeleteWxGatewayRouteRequest,
  EditAuthConfigResponse,
  EstablishWxGatewayRouteRequest,
  DescribeEnvPostpaidDeductRequest,
  DestroyMySQLResponse,
  CustomHeader,
  UpdateTableResponse,
  DescribeExtraPkgBillingInfoRequest,
  BindEnvGatewayResponse,
  DescribeWxGatewaysRequest,
  DescribeEnvFreeQuotaRequest,
  CloudBaseCapabilities,
  CbrRepoInfo,
  ModifyEnvPlanResponse,
  DescribeExtensionUploadInfoRequest,
  DescribeCreateMySQLResultRequest,
  DescribeBillingInfoRequest,
  HpaPolicy,
  TkeClusterInfo,
  CreateCloudBaseRunResourceResponse,
  LogObject,
  DestroyStaticStoreResponse,
  DeleteUsersResponse,
  DescribeUserListResponse,
  CreateTableRequest,
  CloudBaseEsInfo,
  CreateMySQLResponse,
  ModifyCloudBaseRunServerFlowConfResponse,
  DescribeDownloadFileResponse,
  DeleteTableRequest,
  EstablishCloudBaseRunServerResponse,
  CreateCloudBaseGWAPIRequest,
  DestroyEnvRequest,
  DestroyEnvResponse,
  CreateBillDealRequest,
  CodeSource,
  RunSqlRequest,
  User,
  DestroyMySQLRequest,
  DescribeEnvsResponse,
  DescribePostpayPackageFreeQuotasRequest,
  CreateAuthDomainRequest,
  DescribeEnvPostpaidDeductResponse,
  CreateHostingDomainResponse,
  MySQLTaskStatus,
  RunSqlResponse,
  DescribeActivityRecordRequest,
  DeleteCloudBaseRunServerVersionRequest,
  CreateCloudBaseRunServerVersionRequest,
  DeleteCloudBaseGWAPIRequest,
  CreateCloudBaseGWAPIResponse,
  DescribeCreateMySQLResultResponse,
  DescribeSafeRuleRequest,
  DeleteUsersRequest,
  CreatePostpayPackageResponse,
  DescribeBaasPackageListResponse,
  ReplaceActivityRecordRequest,
  DeleteWxGatewayRouteResponse,
  DescribeCloudBaseProjectVersionListResponse,
  IndexAccesses,
  DescribeSafeRuleResponse,
  CustomLogConfig,
  EstablishCloudBaseRunServerRequest,
  DescribeCloudBaseProjectVersionListRequest,
  ReinstateEnvResponse,
  MgoIndexKeys,
  CloudBaseRunServiceVolumeMount,
  DescribeSpecialCostItemsResponse,
  DescribeStaticStoreRequest,
  DescribeWxGatewayRoutesRequest,
  ModifyCloudBaseGWAPIResponse,
  CloudBaseRunKVPriority,
  DescribeDownloadFileRequest,
  DescribeTablesResponse,
  DescribeEnvAccountCircleResponse,
  CloudBaseRunVpcSubnet,
  PackageFreeQuotaInfo,
  DescribeEnvFreeQuotaResponse,
  CreateAndDeployCloudBaseProjectResponse,
  StaticStorageInfo,
  DescribeCloudBaseRunResourceForExtendResponse,
  CreateAndDeployCloudBaseProjectRequest,
  ModifyCloudBaseRunServerVersionRequest,
  DestroyMySQLResult,
  DescribeCloudBaseGWAPIResponse,
  UnfreezeCloudBaseRunServersResponse,
  DescribeCloudBaseGWAPIRequest,
  CreateMySQLRequest,
  DescribeWxGatewayRoutesResponse,
  DatabasesInfo,
  CloudBaseSecurityContext,
  DropIndex,
  ExtensionFile,
  DescribeCloudBaseGWServiceResponse,
  DeleteGatewayVersionResponse,
  EstablishWxGatewayRouteResponse,
  CreateUserRequest,
  CreateCloudBaseRunServerVersionResponse,
  CloudBaseRunServerVersionItem,
  DescribeMySQLTaskStatusResponse,
  TableInfo,
  DeleteCloudBaseProjectLatestVersionRequest,
  DescribeCloudBaseProjectLatestVersionListResponse,
  DescribeWxGatewaysResponse,
  DeleteCloudBaseGWDomainRequest,
  DescribeGatewayVersionsRequest,
  CloudBaseRunNfsVolumeSource,
  DescribeSmsQuotasResponse,
  DescribeTablesRequest,
  CloudBaseRunServiceVolumeHostPath,
  DescribeUserListRequest,
  DescribeCurveDataRequest,
  CreateTableResponse,
  DescribeStaticStoreResponse,
  CloudBaseRunImageSecretInfo,
  BindEnvGatewayRequest,
  ModifyEnvResponse,
  DescribeCbrServerVersionResponse,
  ListTablesRequest,
  DescribeQuotaDataRequest,
  CreateStaticStoreResponse,
  EditAuthConfigRequest,
  CloudBaseRunVpcInfo,
  DescribeCloudBaseRunResourceResponse,
  Indexkey,
  StorageInfo,
  DescribeCloudBaseRunVersionSnapshotRequest,
  ModifyUserResp,
  BindCloudBaseGWDomainResponse,
  FreequotaInfo,
  DescribeTableRequest,
  DescribeUserActivityInfoResponse,
  EnvInfo,
  DescribePostpayFreeQuotasResponse,
  ModifyGatewayVersionTrafficResponse,
  ActivityRecordItem,
  AuthDomain,
  CloudBaseGWAPIQPSPolicy,
  DescribeCloudBaseProjectLatestVersionListRequest,
  LogServiceInfo,
  FrequencyLimitConfig,
  DescribeHostingDomainTaskResponse,
  DescribeTableResponse,
  DeleteTableResponse,
  CloudBaseOption,
  IndexInfo,
  DescribeCloudBaseRunVersionResponse,
  DescribeCbrServerVersionRequest,
  SearchClsLogResponse,
  DescribeCloudBaseGWServiceRequest,
  DescribeCloudBaseRunResourceForExtendRequest,
  DescribeCloudBaseBuildServiceRequest,
  SearchClsLogRequest,
  CloudBaseCodeRepoDetail,
  CheckTcbServiceRequest,
  MySQLNetDetail,
  PermissionInfo,
  Pager,
  DescribeCloudBaseRunServerResponse,
  DescribeDatabaseACLRequest,
  DescribeUserActivityInfoRequest,
  DescribeCreateMySQLResult,
  DeleteCloudBaseGWAPIResponse,
  Tag,
  CreateEnvRequest,
  DescribeCloudBaseRunVersionSnapshotResponse,
  ReinstateEnvRequest,
  CreateCloudBaseRunResourceRequest,
  MySQLClusterDetail,
  DescribeAuthDomainsRequest,
  FreezeCloudBaseRunServersResponse,
  CloudRunServiceVolume,
  GatewayItem,
  ExtensionFileInfo,
  WxGatewayCustomConfig,
  ObjectKV,
  CloudBaseProjectVersion,
  EnvBillingInfoItem,
  DescribeEnvDealRegionRequest,
  UpdateTableRequest,
  DeleteCloudBaseGWDomainResponse,
  SpecialCostItem,
  DescribeDatabaseACLResponse,
  ModifyCloudBaseRunServerVersionResponse,
  DescribeExtensionUploadInfoResponse,
  CloudBaseGWService,
  ModifyEnvRequest,
  ModifyUserRequest,
  PostpayEnvQuota,
  CustomRequestToAdd,
  DescribePostpayPackageFreeQuotasResponse,
  BindCloudBaseGWDomainRequest,
  CreateUserResp,
  DescribeExtraPkgBillingInfoResponse,
  CloudBaseCodeRepoName,
  CloudBaseGWAPI,
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
   * 修改云开发网关API
   */
  async ModifyCloudBaseGWAPI(
    req: ModifyCloudBaseGWAPIRequest,
    cb?: (error: string, rep: ModifyCloudBaseGWAPIResponse) => void
  ): Promise<ModifyCloudBaseGWAPIResponse> {
    return this.request("ModifyCloudBaseGWAPI", req, cb)
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
   * 删除tcb用户
   */
  async DeleteUsers(
    req: DeleteUsersRequest,
    cb?: (error: string, rep: DeleteUsersResponse) => void
  ): Promise<DeleteUsersResponse> {
    return this.request("DeleteUsers", req, cb)
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
   * 获取网关服务
   */
  async DescribeCloudBaseGWService(
    req: DescribeCloudBaseGWServiceRequest,
    cb?: (error: string, rep: DescribeCloudBaseGWServiceResponse) => void
  ): Promise<DescribeCloudBaseGWServiceResponse> {
    return this.request("DescribeCloudBaseGWService", req, cb)
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
   * 创建云开发网关API
   */
  async CreateCloudBaseGWAPI(
    req: CreateCloudBaseGWAPIRequest,
    cb?: (error: string, rep: CreateCloudBaseGWAPIResponse) => void
  ): Promise<CreateCloudBaseGWAPIResponse> {
    return this.request("CreateCloudBaseGWAPI", req, cb)
  }

  /**
   * 创建tcb用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
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
   * 修改登录配置
   */
  async EditAuthConfig(
    req: EditAuthConfigRequest,
    cb?: (error: string, rep: EditAuthConfigResponse) => void
  ): Promise<EditAuthConfigResponse> {
    return this.request("EditAuthConfig", req, cb)
  }

  /**
   * 本接口(ListTables)用于查询所有表信息，包括表名、表中数据条数、表中数据量、索引个数及索引的大小等
   */
  async DescribeTables(
    req: DescribeTablesRequest,
    cb?: (error: string, rep: DescribeTablesResponse) => void
  ): Promise<DescribeTablesResponse> {
    return this.request("DescribeTables", req, cb)
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
   * 查询tcb用户列表
   */
  async DescribeUserList(
    req: DescribeUserListRequest,
    cb?: (error: string, rep: DescribeUserListResponse) => void
  ): Promise<DescribeUserListResponse> {
    return this.request("DescribeUserList", req, cb)
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
   * 开通Mysql
   */
  async CreateMySQL(
    req: CreateMySQLRequest,
    cb?: (error: string, rep: CreateMySQLResponse) => void
  ): Promise<CreateMySQLResponse> {
    return this.request("CreateMySQL", req, cb)
  }

  /**
     * 本接口用于购买云开发环境。
该接口会自动下单并支付，会在腾讯云账户中扣除余额（余额不足会下单失败）。
该接口支持自动扣除代金券（AutoVoucher=true时），符合条件的代金券会被自动扣除。
环境下单成功之后会返回EnvId。EnvId是全局唯一表示。
环境发货是异步行为，后续可以通过接口 [DescribeEnvs ](https://cloud.tencent.com/document/product/876/34820) 查询环境状态和各项资源信息；通过 [DescribeBillingInfo](https://cloud.tencent.com/document/product/876/94390) 查询环境套餐信息，包括 到期时间、当前套餐等。
     */
  async CreateEnv(
    req: CreateEnvRequest,
    cb?: (error: string, rep: CreateEnvResponse) => void
  ): Promise<CreateEnvResponse> {
    return this.request("CreateEnv", req, cb)
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
     * 增加安全域名。
云开发会校验网页应用请求的来源域名，您需要将来源域名加入到WEB安全域名列表中。
可以通过接口 [DescribeAuthDomains](https://cloud.tencent.com/document/product/876/42151) 获取当前已绑定生效的安全域名。

注意⚠️
  安全域名绑定成功之后，需要几分钟时间逐步生效。
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
   * 绑定云开发自定义域名，用于云接入和静态托管
   */
  async BindCloudBaseAccessDomain(
    req: BindCloudBaseAccessDomainRequest,
    cb?: (error: string, rep: BindCloudBaseAccessDomainResponse) => void
  ): Promise<BindCloudBaseAccessDomainResponse> {
    return this.request("BindCloudBaseAccessDomain", req, cb)
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
   * 本接口(ListTables)用于查询所有表信息，包括表名、表中数据条数、表中数据量、索引个数及索引的大小等
   */
  async ListTables(
    req: ListTablesRequest,
    cb?: (error: string, rep: ListTablesResponse) => void
  ): Promise<ListTablesResponse> {
    return this.request("ListTables", req, cb)
  }

  /**
     * 查询数据库安全规则。
安全规则，用于控制C端用户的访问权限。详见 [安全规则介绍](https://cloud.tencent.com/document/product/876/123478) 。
     */
  async DescribeSafeRule(
    req: DescribeSafeRuleRequest,
    cb?: (error: string, rep: DescribeSafeRuleResponse) => void
  ): Promise<DescribeSafeRuleResponse> {
    return this.request("DescribeSafeRule", req, cb)
  }

  /**
   * 查询Mysql任务状态
   */
  async DescribeMySQLTaskStatus(
    req: DescribeMySQLTaskStatusRequest,
    cb?: (error: string, rep: DescribeMySQLTaskStatusResponse) => void
  ): Promise<DescribeMySQLTaskStatusResponse> {
    return this.request("DescribeMySQLTaskStatus", req, cb)
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
   * 执行SQL语句
   */
  async RunSql(
    req: RunSqlRequest,
    cb?: (error: string, rep: RunSqlResponse) => void
  ): Promise<RunSqlResponse> {
    return this.request("RunSql", req, cb)
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
     * 创建云开发产品计费订单，用于以下几种场景：
1. 购买云开发环境
2. 续费云开发环境
3. 变更云开发环境套餐
4. 购买云开发资源包
5. 购买云开发大促包

该接口支持下单并支付(CreateAndPay=true时)，此时会自动在腾讯云账户中扣除余额（余额不足会下单失败）。
该接口支持自动扣除代金券（AutoVoucher=true时），符合条件的代金券会被自动扣除。
     */
  async CreateBillDeal(
    req: CreateBillDealRequest,
    cb?: (error: string, rep: CreateBillDealResponse) => void
  ): Promise<CreateBillDealResponse> {
    return this.request("CreateBillDeal", req, cb)
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
   * 销毁Mysql
   */
  async DescribeMySQLClusterDetail(
    req: DescribeMySQLClusterDetailRequest,
    cb?: (error: string, rep: DescribeMySQLClusterDetailResponse) => void
  ): Promise<DescribeMySQLClusterDetailResponse> {
    return this.request("DescribeMySQLClusterDetail", req, cb)
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
   * 查看安全网关
   */
  async DescribeWxGateways(
    req: DescribeWxGatewaysRequest,
    cb?: (error: string, rep: DescribeWxGatewaysResponse) => void
  ): Promise<DescribeWxGatewaysResponse> {
    return this.request("DescribeWxGateways", req, cb)
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
   * 查看容器托管的集群状态扩展使用
   */
  async DescribeCloudBaseRunResourceForExtend(
    req: DescribeCloudBaseRunResourceForExtendRequest,
    cb?: (error: string, rep: DescribeCloudBaseRunResourceForExtendResponse) => void
  ): Promise<DescribeCloudBaseRunResourceForExtendResponse> {
    return this.request("DescribeCloudBaseRunResourceForExtend", req, cb)
  }

  /**
   * 查询表的相关信息，包括索引等信息
   */
  async DescribeTable(
    req: DescribeTableRequest,
    cb?: (error: string, rep: DescribeTableResponse) => void
  ): Promise<DescribeTableResponse> {
    return this.request("DescribeTable", req, cb)
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
   * 删除安全网关路由
   */
  async DeleteWxGatewayRoute(
    req: DeleteWxGatewayRouteRequest,
    cb?: (error: string, rep: DeleteWxGatewayRouteResponse) => void
  ): Promise<DeleteWxGatewayRouteResponse> {
    return this.request("DeleteWxGatewayRoute", req, cb)
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
   * 删除网关域名
   */
  async DeleteCloudBaseGWDomain(
    req: DeleteCloudBaseGWDomainRequest,
    cb?: (error: string, rep: DeleteCloudBaseGWDomainResponse) => void
  ): Promise<DeleteCloudBaseGWDomainResponse> {
    return this.request("DeleteCloudBaseGWDomain", req, cb)
  }

  /**
   * 本接口(DeleteTable)用于删除表，删除表后表中数据将会被删除且无法恢复，请谨慎操作
   */
  async DeleteTable(
    req: DeleteTableRequest,
    cb?: (error: string, rep: DeleteTableResponse) => void
  ): Promise<DeleteTableResponse> {
    return this.request("DeleteTable", req, cb)
  }

  /**
     * 本接口用于销毁云开发环境。
云开发环境遵循腾讯云包年包月预付费产品生命周期，因此环境销毁需要分两步：
1. 资源退费。此时会根据当前环境剩余有效期，自动退还相关费用(代金券不退)。退款后，环境进入隔离期。
2. 环境删除。环境在进入隔离期后15天会自动删除。也可以通过本接口，指定 IsForce=true 来强制删除隔离期环境。

**注意**⚠️
  1. 环境退费后进入隔离期，则所有资源均无法访问，控制台无法操作和管理。
  2. 环境被彻底删除后，所有数据均无法找回。请谨慎操作。

可以通过接口 [tcb:DescribeBillingInfo](https://cloud.tencent.com/document/product/876/94390) 查询环境计费状态。
     */
  async DestroyEnv(
    req: DestroyEnvRequest,
    cb?: (error: string, rep: DestroyEnvResponse) => void
  ): Promise<DestroyEnvResponse> {
    return this.request("DestroyEnv", req, cb)
  }

  /**
   * 销毁Mysql
   */
  async DestroyMySQL(
    req: DestroyMySQLRequest,
    cb?: (error: string, rep: DestroyMySQLResponse) => void
  ): Promise<DestroyMySQLResponse> {
    return this.request("DestroyMySQL", req, cb)
  }

  /**
     * 查询环境计费周期。
云开发环境的资源点都是按月结算的，每个月都有一定的抵扣额度。

例如：
  某个环境在 2026-01-05 购买了3个月个人版(到期时间: 2026-04-05)，则他可以在以下3个周期内，分别享有40000资源点的额度：
  1. 2026-01-05 ~ 2026-02-05 23:59:59
  2. 2026-02-06 ~ 2026-03-05 23:59:59
  3. 2026-03-06 ~ 2026-04-05 23:59:59

本接口，用于获取环境当前属于哪个计费周期内。
     */
  async DescribeEnvAccountCircle(
    req: DescribeEnvAccountCircleRequest,
    cb?: (error: string, rep: DescribeEnvAccountCircleResponse) => void
  ): Promise<DescribeEnvAccountCircleResponse> {
    return this.request("DescribeEnvAccountCircle", req, cb)
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
   * 查询开通Mysql结果，Mysql开通成功后，可通过接口设置数据库账号相关功能包括但不限于【创建账号、删除账号、查询可授权权限列表、查询账号已有权限、修改主机、修改配置、修改账号库表权限】、集群操作相关【查询集群参数、修改集群参数】，连接设置相关【关闭外网、开通外网、查询集群信息】，备份回档相关【创建手动回档、删除手动回档、修改自动备份配置信息、查询备份文件列表、集群回档、查询任务列表、获取table列表、获取集群数据库列表、查询备份下载地址】，相关功能接口文档：[TDSQL-C MySQL API文档](https://cloud.tencent.com/document/product/1003/48106)
   */
  async DescribeCreateMySQLResult(
    req: DescribeCreateMySQLResultRequest,
    cb?: (error: string, rep: DescribeCreateMySQLResultResponse) => void
  ): Promise<DescribeCreateMySQLResultResponse> {
    return this.request("DescribeCreateMySQLResult", req, cb)
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
   * 本接口(CreateTable)用于创建表，支持创建capped类型集合，暂时不支持分片表
   */
  async CreateTable(
    req: CreateTableRequest,
    cb?: (error: string, rep: CreateTableResponse) => void
  ): Promise<CreateTableResponse> {
    return this.request("CreateTable", req, cb)
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
   * 获取网关API列表
   */
  async DescribeCloudBaseGWAPI(
    req: DescribeCloudBaseGWAPIRequest,
    cb?: (error: string, rep: DescribeCloudBaseGWAPIResponse) => void
  ): Promise<DescribeCloudBaseGWAPIResponse> {
    return this.request("DescribeCloudBaseGWAPI", req, cb)
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
     * 本接口用于获取当前环境的安全域名列表。
云开发会校验网页应用请求的来源域名，您需要将来源域名加入到WEB安全域名列表中。
可以通过接口 [CreateAuthDomain](https://cloud.tencent.com/document/product/876/42764) 增加安全域名。
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
   * 修改数据库权限
   */
  async ModifyDatabaseACL(
    req: ModifyDatabaseACLRequest,
    cb?: (error: string, rep: ModifyDatabaseACLResponse) => void
  ): Promise<ModifyDatabaseACLResponse> {
    return this.request("ModifyDatabaseACL", req, cb)
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
     * 本接口用于云开发环境套餐续费。
该接口会自动下单并支付，会在腾讯云账户中扣除余额（余额不足会下单失败）。
该接口支持自动扣除代金券（AutoVoucher=true时），符合条件的代金券会被自动扣除。
     */
  async RenewEnv(
    req: RenewEnvRequest,
    cb?: (error: string, rep: RenewEnvResponse) => void
  ): Promise<RenewEnvResponse> {
    return this.request("RenewEnv", req, cb)
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
   * 查看当前环境下静态托管资源信息，根据返回结果判断静态资源的状态
   */
  async DescribeStaticStore(
    req: DescribeStaticStoreRequest,
    cb?: (error: string, rep: DescribeStaticStoreResponse) => void
  ): Promise<DescribeStaticStoreResponse> {
    return this.request("DescribeStaticStore", req, cb)
  }

  /**
   * 本接口(UpdateTable)用于修改表信息，当前可以支持创建和删除索引
   */
  async UpdateTable(
    req: UpdateTableRequest,
    cb?: (error: string, rep: UpdateTableResponse) => void
  ): Promise<UpdateTableResponse> {
    return this.request("UpdateTable", req, cb)
  }

  /**
   * 删除网关API
   */
  async DeleteCloudBaseGWAPI(
    req: DeleteCloudBaseGWAPIRequest,
    cb?: (error: string, rep: DeleteCloudBaseGWAPIResponse) => void
  ): Promise<DeleteCloudBaseGWAPIResponse> {
    return this.request("DeleteCloudBaseGWAPI", req, cb)
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
     * 本接口用于变更云开发环境套餐。
该接口会自动下单并支付，会在腾讯云账户中扣除余额（余额不足会下单失败）。
该接口支持自动扣除代金券（AutoVoucher=true时），符合条件的代金券会被自动扣除。
     */
  async ModifyEnvPlan(
    req: ModifyEnvPlanRequest,
    cb?: (error: string, rep: ModifyEnvPlanResponse) => void
  ): Promise<ModifyEnvPlanResponse> {
    return this.request("ModifyEnvPlan", req, cb)
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
   * 搜索用户调用日志
   */
  async SearchClsLog(
    req: SearchClsLogRequest,
    cb?: (error: string, rep: SearchClsLogResponse) => void
  ): Promise<SearchClsLogResponse> {
    return this.request("SearchClsLog", req, cb)
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
   * 修改tcb用户
   */
  async ModifyUser(
    req: ModifyUserRequest,
    cb?: (error: string, rep: ModifyUserResponse) => void
  ): Promise<ModifyUserResponse> {
    return this.request("ModifyUser", req, cb)
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
   * 绑定自定义域名
   */
  async BindCloudBaseGWDomain(
    req: BindCloudBaseGWDomainRequest,
    cb?: (error: string, rep: BindCloudBaseGWDomainResponse) => void
  ): Promise<BindCloudBaseGWDomainResponse> {
    return this.request("BindCloudBaseGWDomain", req, cb)
  }
}

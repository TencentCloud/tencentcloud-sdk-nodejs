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
const DescribeEnvLimitResponse = models.DescribeEnvLimitResponse;
const OrderInfo = models.OrderInfo;
const CheckTcbServiceResponse = models.CheckTcbServiceResponse;
const DescribeCloudBaseRunServerVersionRequest = models.DescribeCloudBaseRunServerVersionRequest;
const DescribeExtensionUploadInfoRequest = models.DescribeExtensionUploadInfoRequest;
const DescribeCloudBaseRunServerVersionResponse = models.DescribeCloudBaseRunServerVersionResponse;
const CloudBaseRunSideSpec = models.CloudBaseRunSideSpec;
const CommonServiceAPIResponse = models.CommonServiceAPIResponse;
const DescribePostpayPackageFreeQuotasRequest = models.DescribePostpayPackageFreeQuotasRequest;
const DescribeEnvLimitRequest = models.DescribeEnvLimitRequest;
const DescribeCloudBaseBuildServiceResponse = models.DescribeCloudBaseBuildServiceResponse;
const DescribeEndUsersRequest = models.DescribeEndUsersRequest;
const DescribeEndUserStatisticRequest = models.DescribeEndUserStatisticRequest;
const CloudRunServiceSimpleVersionSnapshot = models.CloudRunServiceSimpleVersionSnapshot;
const CreateWxCloudBaseRunServerDBClusterResponse = models.CreateWxCloudBaseRunServerDBClusterResponse;
const LogServiceInfo = models.LogServiceInfo;
const DescribeCloudBaseRunResourceForExtendRequest = models.DescribeCloudBaseRunResourceForExtendRequest;
const ModifyEndUserRequest = models.ModifyEndUserRequest;
const RollUpdateCloudBaseRunServerVersionResponse = models.RollUpdateCloudBaseRunServerVersionResponse;
const DescribeAuthDomainsResponse = models.DescribeAuthDomainsResponse;
const DescribeWxCloudBaseRunEnvsResponse = models.DescribeWxCloudBaseRunEnvsResponse;
const CreateHostingDomainRequest = models.CreateHostingDomainRequest;
const DescribeCloudBaseRunResourceRequest = models.DescribeCloudBaseRunResourceRequest;
const CloudBaseRunEmptyDirVolumeSource = models.CloudBaseRunEmptyDirVolumeSource;
const CloudBaseRunVolumeMount = models.CloudBaseRunVolumeMount;
const DescribePostpayFreeQuotasRequest = models.DescribePostpayFreeQuotasRequest;
const CloudBaseRunImageInfo = models.CloudBaseRunImageInfo;
const ModifyDatabaseACLRequest = models.ModifyDatabaseACLRequest;
const DestroyStaticStoreRequest = models.DestroyStaticStoreRequest;
const EndUserInfo = models.EndUserInfo;
const DescribeEndUserLoginStatisticResponse = models.DescribeEndUserLoginStatisticResponse;
const DescribeQuotaDataResponse = models.DescribeQuotaDataResponse;
const KVPair = models.KVPair;
const SmsFreeQuota = models.SmsFreeQuota;
const FunctionInfo = models.FunctionInfo;
const CommonServiceAPIRequest = models.CommonServiceAPIRequest;
const CreateWxCloudBaseRunEnvRequest = models.CreateWxCloudBaseRunEnvRequest;
const CreateStaticStoreRequest = models.CreateStaticStoreRequest;
const CreateWxCloudBaseRunServerDBClusterRequest = models.CreateWxCloudBaseRunServerDBClusterRequest;
const DeleteCloudBaseProjectLatestVersionResponse = models.DeleteCloudBaseProjectLatestVersionResponse;
const CreateAuthDomainResponse = models.CreateAuthDomainResponse;
const DescribeEnvsRequest = models.DescribeEnvsRequest;
const Tag = models.Tag;
const DeleteWxGatewayRouteRequest = models.DeleteWxGatewayRouteRequest;
const DescribeExtraPkgBillingInfoRequest = models.DescribeExtraPkgBillingInfoRequest;
const DescribeWxCloudBaseRunSubNetsResponse = models.DescribeWxCloudBaseRunSubNetsResponse;
const DescribeEnvFreeQuotaRequest = models.DescribeEnvFreeQuotaRequest;
const CloudBaseCapabilities = models.CloudBaseCapabilities;
const DeleteEndUserRequest = models.DeleteEndUserRequest;
const CreateCloudBaseRunResourceResponse = models.CreateCloudBaseRunResourceResponse;
const DestroyStaticStoreResponse = models.DestroyStaticStoreResponse;
const DeleteEndUserResponse = models.DeleteEndUserResponse;
const ModifyDatabaseACLResponse = models.ModifyDatabaseACLResponse;
const CloudBaseEsInfo = models.CloudBaseEsInfo;
const EstablishCloudBaseRunServerResponse = models.EstablishCloudBaseRunServerResponse;
const EnvInfo = models.EnvInfo;
const DestroyEnvRequest = models.DestroyEnvRequest;
const DestroyEnvResponse = models.DestroyEnvResponse;
const DescribeCloudBaseProjectVersionListRequest = models.DescribeCloudBaseProjectVersionListRequest;
const CodeSource = models.CodeSource;
const DescribeEnvsResponse = models.DescribeEnvsResponse;
const CreateAuthDomainRequest = models.CreateAuthDomainRequest;
const CreateHostingDomainResponse = models.CreateHostingDomainResponse;
const EstablishWxGatewayRouteResponse = models.EstablishWxGatewayRouteResponse;
const CreateWxCloudBaseRunEnvResponse = models.CreateWxCloudBaseRunEnvResponse;
const EstablishWxGatewayRouteRequest = models.EstablishWxGatewayRouteRequest;
const CreateCloudBaseRunServerVersionRequest = models.CreateCloudBaseRunServerVersionRequest;
const LoginStatistic = models.LoginStatistic;
const DescribeWxCloudBaseRunSubNetsRequest = models.DescribeWxCloudBaseRunSubNetsRequest;
const CreatePostpayPackageResponse = models.CreatePostpayPackageResponse;
const DeleteWxGatewayRouteResponse = models.DeleteWxGatewayRouteResponse;
const EstablishCloudBaseRunServerRequest = models.EstablishCloudBaseRunServerRequest;
const CloudBaseRunServiceVolumeMount = models.CloudBaseRunServiceVolumeMount;
const DescribeCloudBaseProjectVersionListResponse = models.DescribeCloudBaseProjectVersionListResponse;
const DescribeDownloadFileRequest = models.DescribeDownloadFileRequest;
const ReinstateEnvResponse = models.ReinstateEnvResponse;
const CloudBaseRunVpcSubnet = models.CloudBaseRunVpcSubnet;
const PackageFreeQuotaInfo = models.PackageFreeQuotaInfo;
const DescribeEnvFreeQuotaResponse = models.DescribeEnvFreeQuotaResponse;
const CreateAndDeployCloudBaseProjectResponse = models.CreateAndDeployCloudBaseProjectResponse;
const StaticStorageInfo = models.StaticStorageInfo;
const DescribeCloudBaseRunResourceForExtendResponse = models.DescribeCloudBaseRunResourceForExtendResponse;
const CreateAndDeployCloudBaseProjectRequest = models.CreateAndDeployCloudBaseProjectRequest;
const DescribeCloudBaseRunVersionRequest = models.DescribeCloudBaseRunVersionRequest;
const DatabasesInfo = models.DatabasesInfo;
const CloudBaseSecurityContext = models.CloudBaseSecurityContext;
const ExtensionFile = models.ExtensionFile;
const ReinstateEnvRequest = models.ReinstateEnvRequest;
const DescribeDatabaseACLRequest = models.DescribeDatabaseACLRequest;
const CreateCloudBaseRunServerVersionResponse = models.CreateCloudBaseRunServerVersionResponse;
const DescribeEndUserLoginStatisticRequest = models.DescribeEndUserLoginStatisticRequest;
const PlatformStatistic = models.PlatformStatistic;
const DeleteCloudBaseProjectLatestVersionRequest = models.DeleteCloudBaseProjectLatestVersionRequest;
const DescribeCloudBaseProjectLatestVersionListResponse = models.DescribeCloudBaseProjectLatestVersionListResponse;
const CloudBaseRunNfsVolumeSource = models.CloudBaseRunNfsVolumeSource;
const DescribeSmsQuotasResponse = models.DescribeSmsQuotasResponse;
const DescribeWxCloudBaseRunEnvsRequest = models.DescribeWxCloudBaseRunEnvsRequest;
const CloudBaseRunImageSecretInfo = models.CloudBaseRunImageSecretInfo;
const ModifyEnvResponse = models.ModifyEnvResponse;
const DescribeDownloadFileResponse = models.DescribeDownloadFileResponse;
const DescribeQuotaDataRequest = models.DescribeQuotaDataRequest;
const CreateStaticStoreResponse = models.CreateStaticStoreResponse;
const CloudBaseRunVpcInfo = models.CloudBaseRunVpcInfo;
const DescribeCloudBaseRunResourceResponse = models.DescribeCloudBaseRunResourceResponse;
const StorageInfo = models.StorageInfo;
const DescribeCloudBaseRunVersionSnapshotRequest = models.DescribeCloudBaseRunVersionSnapshotRequest;
const FreequotaInfo = models.FreequotaInfo;
const DescribePostpayFreeQuotasResponse = models.DescribePostpayFreeQuotasResponse;
const DescribeEndUsersResponse = models.DescribeEndUsersResponse;
const AuthDomain = models.AuthDomain;
const DescribeCloudBaseProjectLatestVersionListRequest = models.DescribeCloudBaseProjectLatestVersionListRequest;
const EnvBillingInfoItem = models.EnvBillingInfoItem;
const DescribeEndUserStatisticResponse = models.DescribeEndUserStatisticResponse;
const DescribeSmsQuotasRequest = models.DescribeSmsQuotasRequest;
const DescribeCloudBaseRunVersionResponse = models.DescribeCloudBaseRunVersionResponse;
const CreatePostpayPackageRequest = models.CreatePostpayPackageRequest;
const DescribeCloudBaseBuildServiceRequest = models.DescribeCloudBaseBuildServiceRequest;
const CloudBaseCodeRepoDetail = models.CloudBaseCodeRepoDetail;
const CheckTcbServiceRequest = models.CheckTcbServiceRequest;
const CreateCloudBaseRunResourceRequest = models.CreateCloudBaseRunResourceRequest;
const ModifyEndUserResponse = models.ModifyEndUserResponse;
const DescribeAuthDomainsRequest = models.DescribeAuthDomainsRequest;
const CloudRunServiceVolume = models.CloudRunServiceVolume;
const ExtensionFileInfo = models.ExtensionFileInfo;
const CloudBaseProjectVersion = models.CloudBaseProjectVersion;
const DescribeDatabaseACLResponse = models.DescribeDatabaseACLResponse;
const DescribeExtensionUploadInfoResponse = models.DescribeExtensionUploadInfoResponse;
const ModifyEnvRequest = models.ModifyEnvRequest;
const PostpayEnvQuota = models.PostpayEnvQuota;
const DescribeCloudBaseRunVersionSnapshotResponse = models.DescribeCloudBaseRunVersionSnapshotResponse;
const DescribePostpayPackageFreeQuotasResponse = models.DescribePostpayPackageFreeQuotasResponse;
const DescribeExtraPkgBillingInfoResponse = models.DescribeExtraPkgBillingInfoResponse;
const CloudBaseCodeRepoName = models.CloudBaseCodeRepoName;
const RollUpdateCloudBaseRunServerVersionRequest = models.RollUpdateCloudBaseRunServerVersionRequest;


/**
 * tcb client
 * @class
 */
class TcbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcb.tencentcloudapi.com", "2018-06-08", credential, region, profile);
    }
    
    /**
     * 查询微信云托管子网
     * @param {DescribeWxCloudBaseRunSubNetsRequest} req
     * @param {function(string, DescribeWxCloudBaseRunSubNetsResponse):void} cb
     * @public
     */
    DescribeWxCloudBaseRunSubNets(req, cb) {
        let resp = new DescribeWxCloudBaseRunSubNetsResponse();
        this.request("DescribeWxCloudBaseRunSubNets", req, resp, cb);
    }

    /**
     * 创建托管域名
     * @param {CreateHostingDomainRequest} req
     * @param {function(string, CreateHostingDomainResponse):void} cb
     * @public
     */
    CreateHostingDomain(req, cb) {
        let resp = new CreateHostingDomainResponse();
        this.request("CreateHostingDomain", req, resp, cb);
    }

    /**
     * 删除安全网关路由
     * @param {DeleteWxGatewayRouteRequest} req
     * @param {function(string, DeleteWxGatewayRouteResponse):void} cb
     * @public
     */
    DeleteWxGatewayRoute(req, cb) {
        let resp = new DeleteWxGatewayRouteResponse();
        this.request("DeleteWxGatewayRoute", req, resp, cb);
    }

    /**
     * 获取终端用户列表
     * @param {DescribeEndUsersRequest} req
     * @param {function(string, DescribeEndUsersResponse):void} cb
     * @public
     */
    DescribeEndUsers(req, cb) {
        let resp = new DescribeEndUsersResponse();
        this.request("DescribeEndUsers", req, resp, cb);
    }

    /**
     * 查询微信云托管环境信息
     * @param {DescribeWxCloudBaseRunEnvsRequest} req
     * @param {function(string, DescribeWxCloudBaseRunEnvsResponse):void} cb
     * @public
     */
    DescribeWxCloudBaseRunEnvs(req, cb) {
        let resp = new DescribeWxCloudBaseRunEnvsResponse();
        this.request("DescribeWxCloudBaseRunEnvs", req, resp, cb);
    }

    /**
     * 查询后付费短信资源量
1 有免费包的返回SmsFreeQuota结构所有字段
2 没有免费包，有付费包，付费返回复用SmsFreeQuota结构，其中只有 TodayUsedQuota 字段有效
3 都没有返回为空数组
     * @param {DescribeSmsQuotasRequest} req
     * @param {function(string, DescribeSmsQuotasResponse):void} cb
     * @public
     */
    DescribeSmsQuotas(req, cb) {
        let resp = new DescribeSmsQuotasResponse();
        this.request("DescribeSmsQuotas", req, resp, cb);
    }

    /**
     * 针对特定的版本，进行滚动更新
     * @param {RollUpdateCloudBaseRunServerVersionRequest} req
     * @param {function(string, RollUpdateCloudBaseRunServerVersionResponse):void} cb
     * @public
     */
    RollUpdateCloudBaseRunServerVersion(req, cb) {
        let resp = new RollUpdateCloudBaseRunServerVersionResponse();
        this.request("RollUpdateCloudBaseRunServerVersion", req, resp, cb);
    }

    /**
     * 开通微信云托管MySQL数据库服务
     * @param {CreateWxCloudBaseRunServerDBClusterRequest} req
     * @param {function(string, CreateWxCloudBaseRunServerDBClusterResponse):void} cb
     * @public
     */
    CreateWxCloudBaseRunServerDBCluster(req, cb) {
        let resp = new CreateWxCloudBaseRunServerDBClusterResponse();
        this.request("CreateWxCloudBaseRunServerDBCluster", req, resp, cb);
    }

    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     * @param {DescribeEnvsRequest} req
     * @param {function(string, DescribeEnvsResponse):void} cb
     * @public
     */
    DescribeEnvs(req, cb) {
        let resp = new DescribeEnvsResponse();
        this.request("DescribeEnvs", req, resp, cb);
    }

    /**
     * 创建微信云托管
     * @param {CreateWxCloudBaseRunEnvRequest} req
     * @param {function(string, CreateWxCloudBaseRunEnvResponse):void} cb
     * @public
     */
    CreateWxCloudBaseRunEnv(req, cb) {
        let resp = new CreateWxCloudBaseRunEnvResponse();
        this.request("CreateWxCloudBaseRunEnv", req, resp, cb);
    }

    /**
     * 增加安全域名
     * @param {CreateAuthDomainRequest} req
     * @param {function(string, CreateAuthDomainResponse):void} cb
     * @public
     */
    CreateAuthDomain(req, cb) {
        let resp = new CreateAuthDomainResponse();
        this.request("CreateAuthDomain", req, resp, cb);
    }

    /**
     * 获取后付费免费额度
     * @param {DescribePostpayPackageFreeQuotasRequest} req
     * @param {function(string, DescribePostpayPackageFreeQuotasResponse):void} cb
     * @public
     */
    DescribePostpayPackageFreeQuotas(req, cb) {
        let resp = new DescribePostpayPackageFreeQuotasResponse();
        this.request("DescribePostpayPackageFreeQuotas", req, resp, cb);
    }

    /**
     * 创建服务版本
     * @param {CreateCloudBaseRunServerVersionRequest} req
     * @param {function(string, CreateCloudBaseRunServerVersionResponse):void} cb
     * @public
     */
    CreateCloudBaseRunServerVersion(req, cb) {
        let resp = new CreateCloudBaseRunServerVersionResponse();
        this.request("CreateCloudBaseRunServerVersion", req, resp, cb);
    }

    /**
     * 查询服务版本的详情，CPU和MEM  请使用CPUSize和MemSize
     * @param {DescribeCloudBaseRunServerVersionRequest} req
     * @param {function(string, DescribeCloudBaseRunServerVersionResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunServerVersion(req, cb) {
        let resp = new DescribeCloudBaseRunServerVersionResponse();
        this.request("DescribeCloudBaseRunServerVersion", req, resp, cb);
    }

    /**
     * 获取安全域名列表
     * @param {DescribeAuthDomainsRequest} req
     * @param {function(string, DescribeAuthDomainsResponse):void} cb
     * @public
     */
    DescribeAuthDomains(req, cb) {
        let resp = new DescribeAuthDomainsResponse();
        this.request("DescribeAuthDomains", req, resp, cb);
    }

    /**
     * 开通后付费资源
     * @param {CreatePostpayPackageRequest} req
     * @param {function(string, CreatePostpayPackageResponse):void} cb
     * @public
     */
    CreatePostpayPackage(req, cb) {
        let resp = new CreatePostpayPackageResponse();
        this.request("CreatePostpayPackage", req, resp, cb);
    }

    /**
     * 查看容器托管的集群状态
     * @param {DescribeCloudBaseRunResourceRequest} req
     * @param {function(string, DescribeCloudBaseRunResourceResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunResource(req, cb) {
        let resp = new DescribeCloudBaseRunResourceResponse();
        this.request("DescribeCloudBaseRunResource", req, resp, cb);
    }

    /**
     * 云项目部署列表
     * @param {DescribeCloudBaseProjectVersionListRequest} req
     * @param {function(string, DescribeCloudBaseProjectVersionListResponse):void} cb
     * @public
     */
    DescribeCloudBaseProjectVersionList(req, cb) {
        let resp = new DescribeCloudBaseProjectVersionListResponse();
        this.request("DescribeCloudBaseProjectVersionList", req, resp, cb);
    }

    /**
     * 获取云开发项目列表
     * @param {DescribeCloudBaseProjectLatestVersionListRequest} req
     * @param {function(string, DescribeCloudBaseProjectLatestVersionListResponse):void} cb
     * @public
     */
    DescribeCloudBaseProjectLatestVersionList(req, cb) {
        let resp = new DescribeCloudBaseProjectLatestVersionListResponse();
        this.request("DescribeCloudBaseProjectLatestVersionList", req, resp, cb);
    }

    /**
     * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
     * @param {ReinstateEnvRequest} req
     * @param {function(string, ReinstateEnvResponse):void} cb
     * @public
     */
    ReinstateEnv(req, cb) {
        let resp = new ReinstateEnvResponse();
        this.request("ReinstateEnv", req, resp, cb);
    }

    /**
     * 获取数据库权限
     * @param {DescribeDatabaseACLRequest} req
     * @param {function(string, DescribeDatabaseACLResponse):void} cb
     * @public
     */
    DescribeDatabaseACL(req, cb) {
        let resp = new DescribeDatabaseACLResponse();
        this.request("DescribeDatabaseACL", req, resp, cb);
    }

    /**
     * 查看容器托管的集群状态扩展使用
     * @param {DescribeCloudBaseRunResourceForExtendRequest} req
     * @param {function(string, DescribeCloudBaseRunResourceForExtendResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunResourceForExtend(req, cb) {
        let resp = new DescribeCloudBaseRunResourceForExtendResponse();
        this.request("DescribeCloudBaseRunResourceForExtend", req, resp, cb);
    }

    /**
     * 管理终端用户
     * @param {ModifyEndUserRequest} req
     * @param {function(string, ModifyEndUserResponse):void} cb
     * @public
     */
    ModifyEndUser(req, cb) {
        let resp = new ModifyEndUserResponse();
        this.request("ModifyEndUser", req, resp, cb);
    }

    /**
     * 获取增值包计费相关信息
     * @param {DescribeExtraPkgBillingInfoRequest} req
     * @param {function(string, DescribeExtraPkgBillingInfoResponse):void} cb
     * @public
     */
    DescribeExtraPkgBillingInfo(req, cb) {
        let resp = new DescribeExtraPkgBillingInfoResponse();
        this.request("DescribeExtraPkgBillingInfo", req, resp, cb);
    }

    /**
     * 描述扩展上传文件信息
     * @param {DescribeExtensionUploadInfoRequest} req
     * @param {function(string, DescribeExtensionUploadInfoResponse):void} cb
     * @public
     */
    DescribeExtensionUploadInfo(req, cb) {
        let resp = new DescribeExtensionUploadInfoResponse();
        this.request("DescribeExtensionUploadInfo", req, resp, cb);
    }

    /**
     * 创建云应用服务
     * @param {EstablishCloudBaseRunServerRequest} req
     * @param {function(string, EstablishCloudBaseRunServerResponse):void} cb
     * @public
     */
    EstablishCloudBaseRunServer(req, cb) {
        let resp = new EstablishCloudBaseRunServerResponse();
        this.request("EstablishCloudBaseRunServer", req, resp, cb);
    }

    /**
     * TCB云API统一入口
     * @param {CommonServiceAPIRequest} req
     * @param {function(string, CommonServiceAPIResponse):void} cb
     * @public
     */
    CommonServiceAPI(req, cb) {
        let resp = new CommonServiceAPIResponse();
        this.request("CommonServiceAPI", req, resp, cb);
    }

    /**
     * 创建云开发项目
     * @param {CreateAndDeployCloudBaseProjectRequest} req
     * @param {function(string, CreateAndDeployCloudBaseProjectResponse):void} cb
     * @public
     */
    CreateAndDeployCloudBaseProject(req, cb) {
        let resp = new CreateAndDeployCloudBaseProjectResponse();
        this.request("CreateAndDeployCloudBaseProject", req, resp, cb);
    }

    /**
     * 检查是否开通Tcb服务
     * @param {CheckTcbServiceRequest} req
     * @param {function(string, CheckTcbServiceResponse):void} cb
     * @public
     */
    CheckTcbService(req, cb) {
        let resp = new CheckTcbServiceResponse();
        this.request("CheckTcbService", req, resp, cb);
    }

    /**
     * 删除终端用户
     * @param {DeleteEndUserRequest} req
     * @param {function(string, DeleteEndUserResponse):void} cb
     * @public
     */
    DeleteEndUser(req, cb) {
        let resp = new DeleteEndUserResponse();
        this.request("DeleteEndUser", req, resp, cb);
    }

    /**
     * 获取环境终端用户新增与登录信息
     * @param {DescribeEndUserLoginStatisticRequest} req
     * @param {function(string, DescribeEndUserLoginStatisticResponse):void} cb
     * @public
     */
    DescribeEndUserLoginStatistic(req, cb) {
        let resp = new DescribeEndUserLoginStatisticResponse();
        this.request("DescribeEndUserLoginStatistic", req, resp, cb);
    }

    /**
     * 创建或修改安全网关路由
     * @param {EstablishWxGatewayRouteRequest} req
     * @param {function(string, EstablishWxGatewayRouteResponse):void} cb
     * @public
     */
    EstablishWxGatewayRoute(req, cb) {
        let resp = new EstablishWxGatewayRouteResponse();
        this.request("EstablishWxGatewayRoute", req, resp, cb);
    }

    /**
     * 查询指定指标的配额使用量
     * @param {DescribeQuotaDataRequest} req
     * @param {function(string, DescribeQuotaDataResponse):void} cb
     * @public
     */
    DescribeQuotaData(req, cb) {
        let resp = new DescribeQuotaDataResponse();
        this.request("DescribeQuotaData", req, resp, cb);
    }

    /**
     * 开通容器托管的资源，包括集群创建，VPC配置，异步任务创建，镜像托管，Coding等，查看创建结果需要根据DescribeCloudBaseRunResource接口来查看
     * @param {CreateCloudBaseRunResourceRequest} req
     * @param {function(string, CreateCloudBaseRunResourceResponse):void} cb
     * @public
     */
    CreateCloudBaseRunResource(req, cb) {
        let resp = new CreateCloudBaseRunResourceResponse();
        this.request("CreateCloudBaseRunResource", req, resp, cb);
    }

    /**
     * 删除云项目
     * @param {DeleteCloudBaseProjectLatestVersionRequest} req
     * @param {function(string, DeleteCloudBaseProjectLatestVersionResponse):void} cb
     * @public
     */
    DeleteCloudBaseProjectLatestVersion(req, cb) {
        let resp = new DeleteCloudBaseProjectLatestVersionResponse();
        this.request("DeleteCloudBaseProjectLatestVersion", req, resp, cb);
    }

    /**
     * 获取下载文件信息
     * @param {DescribeDownloadFileRequest} req
     * @param {function(string, DescribeDownloadFileResponse):void} cb
     * @public
     */
    DescribeDownloadFile(req, cb) {
        let resp = new DescribeDownloadFileResponse();
        this.request("DescribeDownloadFile", req, resp, cb);
    }

    /**
     * 更新环境信息
     * @param {ModifyEnvRequest} req
     * @param {function(string, ModifyEnvResponse):void} cb
     * @public
     */
    ModifyEnv(req, cb) {
        let resp = new ModifyEnvResponse();
        this.request("ModifyEnv", req, resp, cb);
    }

    /**
     * 获取终端用户总量与平台分布情况
     * @param {DescribeEndUserStatisticRequest} req
     * @param {function(string, DescribeEndUserStatisticResponse):void} cb
     * @public
     */
    DescribeEndUserStatistic(req, cb) {
        let resp = new DescribeEndUserStatisticResponse();
        this.request("DescribeEndUserStatistic", req, resp, cb);
    }

    /**
     * 销毁环境
     * @param {DestroyEnvRequest} req
     * @param {function(string, DestroyEnvResponse):void} cb
     * @public
     */
    DestroyEnv(req, cb) {
        let resp = new DestroyEnvResponse();
        this.request("DestroyEnv", req, resp, cb);
    }

    /**
     * 获取云托管代码上传url
     * @param {DescribeCloudBaseBuildServiceRequest} req
     * @param {function(string, DescribeCloudBaseBuildServiceResponse):void} cb
     * @public
     */
    DescribeCloudBaseBuildService(req, cb) {
        let resp = new DescribeCloudBaseBuildServiceResponse();
        this.request("DescribeCloudBaseBuildService", req, resp, cb);
    }

    /**
     * 查询版本历史
     * @param {DescribeCloudBaseRunVersionSnapshotRequest} req
     * @param {function(string, DescribeCloudBaseRunVersionSnapshotResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunVersionSnapshot(req, cb) {
        let resp = new DescribeCloudBaseRunVersionSnapshotResponse();
        this.request("DescribeCloudBaseRunVersionSnapshot", req, resp, cb);
    }

    /**
     * 查询服务版本详情(新)
     * @param {DescribeCloudBaseRunVersionRequest} req
     * @param {function(string, DescribeCloudBaseRunVersionResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunVersion(req, cb) {
        let resp = new DescribeCloudBaseRunVersionResponse();
        this.request("DescribeCloudBaseRunVersion", req, resp, cb);
    }

    /**
     * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
     * @param {DestroyStaticStoreRequest} req
     * @param {function(string, DestroyStaticStoreResponse):void} cb
     * @public
     */
    DestroyStaticStore(req, cb) {
        let resp = new DestroyStaticStoreResponse();
        this.request("DestroyStaticStore", req, resp, cb);
    }

    /**
     * 修改数据库权限
     * @param {ModifyDatabaseACLRequest} req
     * @param {function(string, ModifyDatabaseACLResponse):void} cb
     * @public
     */
    ModifyDatabaseACL(req, cb) {
        let resp = new ModifyDatabaseACLResponse();
        this.request("ModifyDatabaseACL", req, resp, cb);
    }

    /**
     * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
     * @param {CreateStaticStoreRequest} req
     * @param {function(string, CreateStaticStoreResponse):void} cb
     * @public
     */
    CreateStaticStore(req, cb) {
        let resp = new CreateStaticStoreResponse();
        this.request("CreateStaticStore", req, resp, cb);
    }

    /**
     * 查询环境个数上限
     * @param {DescribeEnvLimitRequest} req
     * @param {function(string, DescribeEnvLimitResponse):void} cb
     * @public
     */
    DescribeEnvLimit(req, cb) {
        let resp = new DescribeEnvLimitResponse();
        this.request("DescribeEnvLimit", req, resp, cb);
    }

    /**
     * 查询后付费资源免费量
     * @param {DescribePostpayFreeQuotasRequest} req
     * @param {function(string, DescribePostpayFreeQuotasResponse):void} cb
     * @public
     */
    DescribePostpayFreeQuotas(req, cb) {
        let resp = new DescribePostpayFreeQuotasResponse();
        this.request("DescribePostpayFreeQuotas", req, resp, cb);
    }

    /**
     * 查询后付费免费配额信息
     * @param {DescribeEnvFreeQuotaRequest} req
     * @param {function(string, DescribeEnvFreeQuotaResponse):void} cb
     * @public
     */
    DescribeEnvFreeQuota(req, cb) {
        let resp = new DescribeEnvFreeQuotaResponse();
        this.request("DescribeEnvFreeQuota", req, resp, cb);
    }


}
module.exports = TcbClient;

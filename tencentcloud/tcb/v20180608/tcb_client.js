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
const DescribeCloudBaseRunAllVpcsResponse = models.DescribeCloudBaseRunAllVpcsResponse;
const OrderInfo = models.OrderInfo;
const CheckTcbServiceResponse = models.CheckTcbServiceResponse;
const DescribeCloudBaseRunConfForGateWayRequest = models.DescribeCloudBaseRunConfForGateWayRequest;
const DescribeCloudBaseRunServerVersionRequest = models.DescribeCloudBaseRunServerVersionRequest;
const TurnOnStandaloneGatewayResponse = models.TurnOnStandaloneGatewayResponse;
const DescribeEnvLimitRequest = models.DescribeEnvLimitRequest;
const DescribeEnvDealRegionResponse = models.DescribeEnvDealRegionResponse;
const DeleteCloudBaseRunServerVersionResponse = models.DeleteCloudBaseRunServerVersionResponse;
const RollUpdateCloudBaseRunServerVersionResponse = models.RollUpdateCloudBaseRunServerVersionResponse;
const SearchClsLogResponse = models.SearchClsLogResponse;
const ModifyClsTopicResponse = models.ModifyClsTopicResponse;
const StandaloneGatewayInfo = models.StandaloneGatewayInfo;
const CloudBaseRunSideSpec = models.CloudBaseRunSideSpec;
const CommonServiceAPIResponse = models.CommonServiceAPIResponse;
const DescribeStandaloneGatewayRequest = models.DescribeStandaloneGatewayRequest;
const DescribeStandaloneGatewayPackageRequest = models.DescribeStandaloneGatewayPackageRequest;
const DescribePostpayPackageFreeQuotasRequest = models.DescribePostpayPackageFreeQuotasRequest;
const DescribeEndUserLoginStatisticRequest = models.DescribeEndUserLoginStatisticRequest;
const DescribeCloudBaseBuildServiceResponse = models.DescribeCloudBaseBuildServiceResponse;
const DescribeEndUsersRequest = models.DescribeEndUsersRequest;
const DescribeCloudBaseRunPodListResponse = models.DescribeCloudBaseRunPodListResponse;
const DescribeCloudBaseRunServerDomainNameResponse = models.DescribeCloudBaseRunServerDomainNameResponse;
const LogResObject = models.LogResObject;
const DestroyStandaloneGatewayRequest = models.DestroyStandaloneGatewayRequest;
const CloudRunServiceSimpleVersionSnapshot = models.CloudRunServiceSimpleVersionSnapshot;
const CreateWxCloudBaseRunServerDBClusterResponse = models.CreateWxCloudBaseRunServerDBClusterResponse;
const ReplaceActivityRecordResponse = models.ReplaceActivityRecordResponse;
const DescribeSpecialCostItemsRequest = models.DescribeSpecialCostItemsRequest;
const CreatePostpayPackageRequest = models.CreatePostpayPackageRequest;
const DescribeWxCloudBaseRunSubNetsRequest = models.DescribeWxCloudBaseRunSubNetsRequest;
const ModifyEndUserRequest = models.ModifyEndUserRequest;
const DescribeCurveDataResponse = models.DescribeCurveDataResponse;
const DescribeBaasPackageListRequest = models.DescribeBaasPackageListRequest;
const ClsInfo = models.ClsInfo;
const DescribeCloudBaseRunOperationTypesRequest = models.DescribeCloudBaseRunOperationTypesRequest;
const DescribeAuthDomainsResponse = models.DescribeAuthDomainsResponse;
const DescribeCloudBaseRunOneClickTaskExternalRequest = models.DescribeCloudBaseRunOneClickTaskExternalRequest;
const ModifyClsTopicRequest = models.ModifyClsTopicRequest;
const DescribeStandaloneGatewayResponse = models.DescribeStandaloneGatewayResponse;
const DescribeWxCloudBaseRunEnvsResponse = models.DescribeWxCloudBaseRunEnvsResponse;
const CreateHostingDomainRequest = models.CreateHostingDomainRequest;
const DescribeCloudBaseRunResourceRequest = models.DescribeCloudBaseRunResourceRequest;
const DescribeCloudBaseRunServerRequest = models.DescribeCloudBaseRunServerRequest;
const CloudBaseRunEmptyDirVolumeSource = models.CloudBaseRunEmptyDirVolumeSource;
const CloudBaseRunVolumeMount = models.CloudBaseRunVolumeMount;
const BackendServiceInfo = models.BackendServiceInfo;
const DescribePostpayFreeQuotasRequest = models.DescribePostpayFreeQuotasRequest;
const DescribeActivityInfoResponse = models.DescribeActivityInfoResponse;
const CloudBaseRunImageInfo = models.CloudBaseRunImageInfo;
const DestroyStandaloneGatewayResponse = models.DestroyStandaloneGatewayResponse;
const DescribeCloudBaseRunServerVersionResponse = models.DescribeCloudBaseRunServerVersionResponse;
const EndUserInfo = models.EndUserInfo;
const DeleteEndUserRequest = models.DeleteEndUserRequest;
const DescribeHostingDomainTaskRequest = models.DescribeHostingDomainTaskRequest;
const FreezeCloudBaseRunServersRequest = models.FreezeCloudBaseRunServersRequest;
const BaasPackageInfo = models.BaasPackageInfo;
const DescribeQuotaDataResponse = models.DescribeQuotaDataResponse;
const ActivityInfoItem = models.ActivityInfoItem;
const KVPair = models.KVPair;
const SmsFreeQuota = models.SmsFreeQuota;
const FunctionInfo = models.FunctionInfo;
const CommonServiceAPIRequest = models.CommonServiceAPIRequest;
const DestroyStaticStoreRequest = models.DestroyStaticStoreRequest;
const CreateWxCloudBaseRunEnvRequest = models.CreateWxCloudBaseRunEnvRequest;
const ModifyCloudBaseRunServerFlowConfRequest = models.ModifyCloudBaseRunServerFlowConfRequest;
const DescribeActivityRecordResponse = models.DescribeActivityRecordResponse;
const DescribeCloudBaseRunVersionRsByConditionResponse = models.DescribeCloudBaseRunVersionRsByConditionResponse;
const CreateStaticStoreRequest = models.CreateStaticStoreRequest;
const CreateWxCloudBaseRunServerDBClusterRequest = models.CreateWxCloudBaseRunServerDBClusterRequest;
const DeleteCloudBaseProjectLatestVersionResponse = models.DeleteCloudBaseProjectLatestVersionResponse;
const CreateAuthDomainResponse = models.CreateAuthDomainResponse;
const ModifyDatabaseACLRequest = models.ModifyDatabaseACLRequest;
const DescribeEnvsRequest = models.DescribeEnvsRequest;
const CloudBaseRunVersionFlowItem = models.CloudBaseRunVersionFlowItem;
const DeleteWxGatewayRouteRequest = models.DeleteWxGatewayRouteRequest;
const DescribeEnvPostpaidDeductRequest = models.DescribeEnvPostpaidDeductRequest;
const DescribeExtraPkgBillingInfoRequest = models.DescribeExtraPkgBillingInfoRequest;
const BindEnvGatewayResponse = models.BindEnvGatewayResponse;
const DescribeWxCloudBaseRunSubNetsResponse = models.DescribeWxCloudBaseRunSubNetsResponse;
const DescribeEnvFreeQuotaRequest = models.DescribeEnvFreeQuotaRequest;
const CloudBaseCapabilities = models.CloudBaseCapabilities;
const DescribeEndUserLoginStatisticResponse = models.DescribeEndUserLoginStatisticResponse;
const DescribeExtensionUploadInfoRequest = models.DescribeExtensionUploadInfoRequest;
const DescribeEnvPostpaidDeductResponse = models.DescribeEnvPostpaidDeductResponse;
const HpaPolicy = models.HpaPolicy;
const CloudBaseRunImageSecretInfo = models.CloudBaseRunImageSecretInfo;
const CreateCloudBaseRunResourceResponse = models.CreateCloudBaseRunResourceResponse;
const DescribeStandaloneGatewayPackageResponse = models.DescribeStandaloneGatewayPackageResponse;
const LogObject = models.LogObject;
const DestroyStaticStoreResponse = models.DestroyStaticStoreResponse;
const DeleteEndUserResponse = models.DeleteEndUserResponse;
const ModifyDatabaseACLResponse = models.ModifyDatabaseACLResponse;
const CloudBaseEsInfo = models.CloudBaseEsInfo;
const PostPaidEnvDeductInfo = models.PostPaidEnvDeductInfo;
const ModifyCloudBaseRunServerFlowConfResponse = models.ModifyCloudBaseRunServerFlowConfResponse;
const DescribeCloudBaseRunOperationTypesResponse = models.DescribeCloudBaseRunOperationTypesResponse;
const SpecialCostItem = models.SpecialCostItem;
const EstablishCloudBaseRunServerResponse = models.EstablishCloudBaseRunServerResponse;
const EnvInfo = models.EnvInfo;
const DestroyEnvRequest = models.DestroyEnvRequest;
const DestroyEnvResponse = models.DestroyEnvResponse;
const DescribeCloudBaseProjectVersionListRequest = models.DescribeCloudBaseProjectVersionListRequest;
const CodeSource = models.CodeSource;
const DescribeCloudBaseRunOneClickTaskExternalResponse = models.DescribeCloudBaseRunOneClickTaskExternalResponse;
const TurnOffStandaloneGatewayResponse = models.TurnOffStandaloneGatewayResponse;
const DescribeEnvsResponse = models.DescribeEnvsResponse;
const CreateAuthDomainRequest = models.CreateAuthDomainRequest;
const CreateHostingDomainResponse = models.CreateHostingDomainResponse;
const TkeClusterInfo = models.TkeClusterInfo;
const DescribeActivityRecordRequest = models.DescribeActivityRecordRequest;
const CreateWxCloudBaseRunEnvResponse = models.CreateWxCloudBaseRunEnvResponse;
const DeleteCloudBaseRunServerVersionRequest = models.DeleteCloudBaseRunServerVersionRequest;
const CreateCloudBaseRunServerVersionRequest = models.CreateCloudBaseRunServerVersionRequest;
const LoginStatistic = models.LoginStatistic;
const DescribeCloudBaseRunServerDomainNameRequest = models.DescribeCloudBaseRunServerDomainNameRequest;
const DescribeCloudBaseRunAllVpcsRequest = models.DescribeCloudBaseRunAllVpcsRequest;
const CreatePostpayPackageResponse = models.CreatePostpayPackageResponse;
const DescribeBaasPackageListResponse = models.DescribeBaasPackageListResponse;
const ReplaceActivityRecordRequest = models.ReplaceActivityRecordRequest;
const DeleteWxGatewayRouteResponse = models.DeleteWxGatewayRouteResponse;
const CloudBaseRunKVPriority = models.CloudBaseRunKVPriority;
const UnfreezeCloudBaseRunServersRequest = models.UnfreezeCloudBaseRunServersRequest;
const EstablishCloudBaseRunServerRequest = models.EstablishCloudBaseRunServerRequest;
const ReinstateEnvResponse = models.ReinstateEnvResponse;
const CloudBaseRunServiceVolumeMount = models.CloudBaseRunServiceVolumeMount;
const DescribeSpecialCostItemsResponse = models.DescribeSpecialCostItemsResponse;
const CreateStandaloneGatewayRequest = models.CreateStandaloneGatewayRequest;
const DescribeCloudBaseProjectVersionListResponse = models.DescribeCloudBaseProjectVersionListResponse;
const DescribeDownloadFileRequest = models.DescribeDownloadFileRequest;
const DescribeEndUserStatisticRequest = models.DescribeEndUserStatisticRequest;
const CloudBaseRunVpcSubnet = models.CloudBaseRunVpcSubnet;
const PackageFreeQuotaInfo = models.PackageFreeQuotaInfo;
const DescribeEnvFreeQuotaResponse = models.DescribeEnvFreeQuotaResponse;
const CreateAndDeployCloudBaseProjectResponse = models.CreateAndDeployCloudBaseProjectResponse;
const StaticStorageInfo = models.StaticStorageInfo;
const DescribeCloudBaseRunResourceForExtendResponse = models.DescribeCloudBaseRunResourceForExtendResponse;
const CreateAndDeployCloudBaseProjectRequest = models.CreateAndDeployCloudBaseProjectRequest;
const DescribeCloudBaseRunVersionRequest = models.DescribeCloudBaseRunVersionRequest;
const EstablishWxGatewayRouteRequest = models.EstablishWxGatewayRouteRequest;
const UnfreezeCloudBaseRunServersResponse = models.UnfreezeCloudBaseRunServersResponse;
const DescribeCloudBaseRunConfForGateWayResponse = models.DescribeCloudBaseRunConfForGateWayResponse;
const DatabasesInfo = models.DatabasesInfo;
const CloudBaseSecurityContext = models.CloudBaseSecurityContext;
const ExtensionFile = models.ExtensionFile;
const TurnOffStandaloneGatewayRequest = models.TurnOffStandaloneGatewayRequest;
const ReinstateEnvRequest = models.ReinstateEnvRequest;
const EstablishWxGatewayRouteResponse = models.EstablishWxGatewayRouteResponse;
const DescribeDatabaseACLRequest = models.DescribeDatabaseACLRequest;
const CreateCloudBaseRunServerVersionResponse = models.CreateCloudBaseRunServerVersionResponse;
const CloudBaseRunServerVersionItem = models.CloudBaseRunServerVersionItem;
const PlatformStatistic = models.PlatformStatistic;
const DeleteCloudBaseProjectLatestVersionRequest = models.DeleteCloudBaseProjectLatestVersionRequest;
const DescribeCloudBaseProjectLatestVersionListResponse = models.DescribeCloudBaseProjectLatestVersionListResponse;
const StandaloneGatewayPackageInfo = models.StandaloneGatewayPackageInfo;
const CloudBaseRunNfsVolumeSource = models.CloudBaseRunNfsVolumeSource;
const DescribeSmsQuotasResponse = models.DescribeSmsQuotasResponse;
const DescribeWxCloudBaseRunEnvsRequest = models.DescribeWxCloudBaseRunEnvsRequest;
const CloudBaseRunServiceVolumeHostPath = models.CloudBaseRunServiceVolumeHostPath;
const DescribeCurveDataRequest = models.DescribeCurveDataRequest;
const DescribeActivityInfoRequest = models.DescribeActivityInfoRequest;
const BindEnvGatewayRequest = models.BindEnvGatewayRequest;
const ModifyEnvResponse = models.ModifyEnvResponse;
const DescribeDownloadFileResponse = models.DescribeDownloadFileResponse;
const CreateStandaloneGatewayResponse = models.CreateStandaloneGatewayResponse;
const DescribeQuotaDataRequest = models.DescribeQuotaDataRequest;
const CreateStaticStoreResponse = models.CreateStaticStoreResponse;
const CloudBaseRunVpcInfo = models.CloudBaseRunVpcInfo;
const DescribeCloudBaseRunResourceResponse = models.DescribeCloudBaseRunResourceResponse;
const StorageInfo = models.StorageInfo;
const DescribeCloudBaseRunVersionSnapshotRequest = models.DescribeCloudBaseRunVersionSnapshotRequest;
const FreequotaInfo = models.FreequotaInfo;
const TurnOnStandaloneGatewayRequest = models.TurnOnStandaloneGatewayRequest;
const DescribeUserActivityInfoResponse = models.DescribeUserActivityInfoResponse;
const DescribePostpayFreeQuotasResponse = models.DescribePostpayFreeQuotasResponse;
const ActivityRecordItem = models.ActivityRecordItem;
const AuthDomain = models.AuthDomain;
const DescribeCloudBaseProjectLatestVersionListRequest = models.DescribeCloudBaseProjectLatestVersionListRequest;
const LogServiceInfo = models.LogServiceInfo;
const DescribeEndUsersResponse = models.DescribeEndUsersResponse;
const DescribeHostingDomainTaskResponse = models.DescribeHostingDomainTaskResponse;
const EnvBillingInfoItem = models.EnvBillingInfoItem;
const DescribeEndUserStatisticResponse = models.DescribeEndUserStatisticResponse;
const DescribeSmsQuotasRequest = models.DescribeSmsQuotasRequest;
const DescribeCloudBaseRunVersionResponse = models.DescribeCloudBaseRunVersionResponse;
const DescribeCloudBaseRunResourceForExtendRequest = models.DescribeCloudBaseRunResourceForExtendRequest;
const DescribeCloudBaseBuildServiceRequest = models.DescribeCloudBaseBuildServiceRequest;
const SearchClsLogRequest = models.SearchClsLogRequest;
const CloudBaseCodeRepoDetail = models.CloudBaseCodeRepoDetail;
const CheckTcbServiceRequest = models.CheckTcbServiceRequest;
const DescribeCloudBaseRunVersionRsByConditionRequest = models.DescribeCloudBaseRunVersionRsByConditionRequest;
const DescribeCloudBaseRunServerResponse = models.DescribeCloudBaseRunServerResponse;
const DescribeUserActivityInfoRequest = models.DescribeUserActivityInfoRequest;
const Tag = models.Tag;
const DescribeCloudBaseRunPodListRequest = models.DescribeCloudBaseRunPodListRequest;
const CreateCloudBaseRunResourceRequest = models.CreateCloudBaseRunResourceRequest;
const ModifyEndUserResponse = models.ModifyEndUserResponse;
const DescribeAuthDomainsRequest = models.DescribeAuthDomainsRequest;
const FreezeCloudBaseRunServersResponse = models.FreezeCloudBaseRunServersResponse;
const CloudRunServiceVolume = models.CloudRunServiceVolume;
const CloudBaseRunForGatewayConf = models.CloudBaseRunForGatewayConf;
const ExtensionFileInfo = models.ExtensionFileInfo;
const ObjectKV = models.ObjectKV;
const CloudBaseProjectVersion = models.CloudBaseProjectVersion;
const DescribeEnvDealRegionRequest = models.DescribeEnvDealRegionRequest;
const DescribeDatabaseACLResponse = models.DescribeDatabaseACLResponse;
const ModifyCloudBaseRunServerVersionResponse = models.ModifyCloudBaseRunServerVersionResponse;
const DescribeExtensionUploadInfoResponse = models.DescribeExtensionUploadInfoResponse;
const ModifyEnvRequest = models.ModifyEnvRequest;
const PostpayEnvQuota = models.PostpayEnvQuota;
const DescribeCloudBaseRunVersionSnapshotResponse = models.DescribeCloudBaseRunVersionSnapshotResponse;
const DescribePostpayPackageFreeQuotasResponse = models.DescribePostpayPackageFreeQuotasResponse;
const OneClickTaskStepInfo = models.OneClickTaskStepInfo;
const DescribeExtraPkgBillingInfoResponse = models.DescribeExtraPkgBillingInfoResponse;
const CloudBaseCodeRepoName = models.CloudBaseCodeRepoName;
const ModifyCloudBaseRunServerVersionRequest = models.ModifyCloudBaseRunServerVersionRequest;
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
     * 查询环境1分钱抵扣信息
     * @param {DescribeSpecialCostItemsRequest} req
     * @param {function(string, DescribeSpecialCostItemsResponse):void} cb
     * @public
     */
    DescribeSpecialCostItems(req, cb) {
        let resp = new DescribeSpecialCostItemsResponse();
        this.request("DescribeSpecialCostItems", req, resp, cb);
    }

    /**
     * 查询环境下所有的vpc列表
     * @param {DescribeCloudBaseRunAllVpcsRequest} req
     * @param {function(string, DescribeCloudBaseRunAllVpcsResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunAllVpcs(req, cb) {
        let resp = new DescribeCloudBaseRunAllVpcsResponse();
        this.request("DescribeCloudBaseRunAllVpcs", req, resp, cb);
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
     * 修改日志主题
     * @param {ModifyClsTopicRequest} req
     * @param {function(string, ModifyClsTopicResponse):void} cb
     * @public
     */
    ModifyClsTopic(req, cb) {
        let resp = new ModifyClsTopicResponse();
        this.request("ModifyClsTopic", req, resp, cb);
    }

    /**
     * 本接口（DestroyStandaloneGateway）用于销毁小租户网关。
     * @param {DestroyStandaloneGatewayRequest} req
     * @param {function(string, DestroyStandaloneGatewayResponse):void} cb
     * @public
     */
    DestroyStandaloneGateway(req, cb) {
        let resp = new DestroyStandaloneGatewayResponse();
        this.request("DestroyStandaloneGateway", req, resp, cb);
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
     * 查询用户活动信息
     * @param {DescribeUserActivityInfoRequest} req
     * @param {function(string, DescribeUserActivityInfoResponse):void} cb
     * @public
     */
    DescribeUserActivityInfo(req, cb) {
        let resp = new DescribeUserActivityInfoResponse();
        this.request("DescribeUserActivityInfo", req, resp, cb);
    }

    /**
     * 绑定另外一个环境下的网关，callContainer请求可以访问到该网关
     * @param {BindEnvGatewayRequest} req
     * @param {function(string, BindEnvGatewayResponse):void} cb
     * @public
     */
    BindEnvGateway(req, cb) {
        let resp = new BindEnvGatewayResponse();
        this.request("BindEnvGateway", req, resp, cb);
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
     * 修改服务版本的副本数，环境变量
     * @param {ModifyCloudBaseRunServerVersionRequest} req
     * @param {function(string, ModifyCloudBaseRunServerVersionResponse):void} cb
     * @public
     */
    ModifyCloudBaseRunServerVersion(req, cb) {
        let resp = new ModifyCloudBaseRunServerVersionResponse();
        this.request("ModifyCloudBaseRunServerVersion", req, resp, cb);
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
     * 查询环境后付费计费详情
     * @param {DescribeEnvPostpaidDeductRequest} req
     * @param {function(string, DescribeEnvPostpaidDeductResponse):void} cb
     * @public
     */
    DescribeEnvPostpaidDeduct(req, cb) {
        let resp = new DescribeEnvPostpaidDeductResponse();
        this.request("DescribeEnvPostpaidDeduct", req, resp, cb);
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
     * 查询微信云托管服务域名
     * @param {DescribeCloudBaseRunServerDomainNameRequest} req
     * @param {function(string, DescribeCloudBaseRunServerDomainNameResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunServerDomainName(req, cb) {
        let resp = new DescribeCloudBaseRunServerDomainNameResponse();
        this.request("DescribeCloudBaseRunServerDomainName", req, resp, cb);
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
     * 本接口（CreateStandaloneGateway）用于创建独立网关。
     * @param {CreateStandaloneGatewayRequest} req
     * @param {function(string, CreateStandaloneGatewayResponse):void} cb
     * @public
     */
    CreateStandaloneGateway(req, cb) {
        let resp = new CreateStandaloneGatewayResponse();
        this.request("CreateStandaloneGateway", req, resp, cb);
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
     * 本接口（TurnOnStandaloneGateway）用于开启小租户网关。
     * @param {TurnOnStandaloneGatewayRequest} req
     * @param {function(string, TurnOnStandaloneGatewayResponse):void} cb
     * @public
     */
    TurnOnStandaloneGateway(req, cb) {
        let resp = new TurnOnStandaloneGatewayResponse();
        this.request("TurnOnStandaloneGateway", req, resp, cb);
    }

    /**
     * 本接口（DescribeStandaloneGatewayPackage）用于查询小租户网关套餐信息。
     * @param {DescribeStandaloneGatewayPackageRequest} req
     * @param {function(string, DescribeStandaloneGatewayPackageResponse):void} cb
     * @public
     */
    DescribeStandaloneGatewayPackage(req, cb) {
        let resp = new DescribeStandaloneGatewayPackageResponse();
        this.request("DescribeStandaloneGatewayPackage", req, resp, cb);
    }

    /**
     * 批量解冻服务
     * @param {UnfreezeCloudBaseRunServersRequest} req
     * @param {function(string, UnfreezeCloudBaseRunServersResponse):void} cb
     * @public
     */
    UnfreezeCloudBaseRunServers(req, cb) {
        let resp = new UnfreezeCloudBaseRunServersResponse();
        this.request("UnfreezeCloudBaseRunServers", req, resp, cb);
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
     * 更新活动详情
     * @param {ReplaceActivityRecordRequest} req
     * @param {function(string, ReplaceActivityRecordResponse):void} cb
     * @public
     */
    ReplaceActivityRecord(req, cb) {
        let resp = new ReplaceActivityRecordResponse();
        this.request("ReplaceActivityRecord", req, resp, cb);
    }

    /**
     * 获取新套餐列表，含详情，如果传了PackageId，则只获取指定套餐详情
     * @param {DescribeBaasPackageListRequest} req
     * @param {function(string, DescribeBaasPackageListResponse):void} cb
     * @public
     */
    DescribeBaasPackageList(req, cb) {
        let resp = new DescribeBaasPackageListResponse();
        this.request("DescribeBaasPackageList", req, resp, cb);
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
     * 本接口（TurnOffStandaloneGateway）用于关闭小租户网关。
     * @param {TurnOffStandaloneGatewayRequest} req
     * @param {function(string, TurnOffStandaloneGatewayResponse):void} cb
     * @public
     */
    TurnOffStandaloneGateway(req, cb) {
        let resp = new TurnOffStandaloneGatewayResponse();
        this.request("TurnOffStandaloneGateway", req, resp, cb);
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
     * 独立网关中拉取云托管服务对应的配置信息
     * @param {DescribeCloudBaseRunConfForGateWayRequest} req
     * @param {function(string, DescribeCloudBaseRunConfForGateWayResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunConfForGateWay(req, cb) {
        let resp = new DescribeCloudBaseRunConfForGateWayResponse();
        this.request("DescribeCloudBaseRunConfForGateWay", req, resp, cb);
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
     * 本接口（DescribeStandaloneGateway）查询小租户网关套餐信息。
     * @param {DescribeStandaloneGatewayRequest} req
     * @param {function(string, DescribeStandaloneGatewayResponse):void} cb
     * @public
     */
    DescribeStandaloneGateway(req, cb) {
        let resp = new DescribeStandaloneGatewayResponse();
        this.request("DescribeStandaloneGateway", req, resp, cb);
    }

    /**
     * 修改容器内的版本流量配置
     * @param {ModifyCloudBaseRunServerFlowConfRequest} req
     * @param {function(string, ModifyCloudBaseRunServerFlowConfResponse):void} cb
     * @public
     */
    ModifyCloudBaseRunServerFlowConf(req, cb) {
        let resp = new ModifyCloudBaseRunServerFlowConfResponse();
        this.request("ModifyCloudBaseRunServerFlowConf", req, resp, cb);
    }

    /**
     * 搜索CLS日志，TCB角色秘钥访问
     * @param {SearchClsLogRequest} req
     * @param {function(string, SearchClsLogResponse):void} cb
     * @public
     */
    SearchClsLog(req, cb) {
        let resp = new SearchClsLogResponse();
        this.request("SearchClsLog", req, resp, cb);
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
     * 获取环境下单地域
     * @param {DescribeEnvDealRegionRequest} req
     * @param {function(string, DescribeEnvDealRegionResponse):void} cb
     * @public
     */
    DescribeEnvDealRegion(req, cb) {
        let resp = new DescribeEnvDealRegionResponse();
        this.request("DescribeEnvDealRegion", req, resp, cb);
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
     * 查询静态托管域名任务状态
     * @param {DescribeHostingDomainTaskRequest} req
     * @param {function(string, DescribeHostingDomainTaskResponse):void} cb
     * @public
     */
    DescribeHostingDomainTask(req, cb) {
        let resp = new DescribeHostingDomainTaskResponse();
        this.request("DescribeHostingDomainTask", req, resp, cb);
    }

    /**
     * 查询活动记录信息
     * @param {DescribeActivityRecordRequest} req
     * @param {function(string, DescribeActivityRecordResponse):void} cb
     * @public
     */
    DescribeActivityRecord(req, cb) {
        let resp = new DescribeActivityRecordResponse();
        this.request("DescribeActivityRecord", req, resp, cb);
    }

    /**
     * 删除服务版本
     * @param {DeleteCloudBaseRunServerVersionRequest} req
     * @param {function(string, DeleteCloudBaseRunServerVersionResponse):void} cb
     * @public
     */
    DeleteCloudBaseRunServerVersion(req, cb) {
        let resp = new DeleteCloudBaseRunServerVersionResponse();
        this.request("DeleteCloudBaseRunServerVersion", req, resp, cb);
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
     * 查询服务、版本和操作类型
     * @param {DescribeCloudBaseRunOperationTypesRequest} req
     * @param {function(string, DescribeCloudBaseRunOperationTypesResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunOperationTypes(req, cb) {
        let resp = new DescribeCloudBaseRunOperationTypesResponse();
        this.request("DescribeCloudBaseRunOperationTypes", req, resp, cb);
    }

    /**
     * 查询单个服务的详情，版本以及详情
     * @param {DescribeCloudBaseRunServerRequest} req
     * @param {function(string, DescribeCloudBaseRunServerResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunServer(req, cb) {
        let resp = new DescribeCloudBaseRunServerResponse();
        this.request("DescribeCloudBaseRunServer", req, resp, cb);
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
     * 批量冻结
     * @param {FreezeCloudBaseRunServersRequest} req
     * @param {function(string, FreezeCloudBaseRunServersResponse):void} cb
     * @public
     */
    FreezeCloudBaseRunServers(req, cb) {
        let resp = new FreezeCloudBaseRunServersResponse();
        this.request("FreezeCloudBaseRunServers", req, resp, cb);
    }

    /**
     * 查询活动信息
     * @param {DescribeActivityInfoRequest} req
     * @param {function(string, DescribeActivityInfoResponse):void} cb
     * @public
     */
    DescribeActivityInfo(req, cb) {
        let resp = new DescribeActivityInfoResponse();
        this.request("DescribeActivityInfo", req, resp, cb);
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
     * 查询一键部署任务 （特定接口：外部查询使用）
     * @param {DescribeCloudBaseRunOneClickTaskExternalRequest} req
     * @param {function(string, DescribeCloudBaseRunOneClickTaskExternalResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunOneClickTaskExternal(req, cb) {
        let resp = new DescribeCloudBaseRunOneClickTaskExternalResponse();
        this.request("DescribeCloudBaseRunOneClickTaskExternal", req, resp, cb);
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
     * 根据用户传入的指标, 拉取一段时间内的监控数据。
     * @param {DescribeCurveDataRequest} req
     * @param {function(string, DescribeCurveDataResponse):void} cb
     * @public
     */
    DescribeCurveData(req, cb) {
        let resp = new DescribeCurveDataResponse();
        this.request("DescribeCurveData", req, resp, cb);
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
     * DescribeCloudBaseRunVersionRsByCondition 获取云托管详情
     * @param {DescribeCloudBaseRunVersionRsByConditionRequest} req
     * @param {function(string, DescribeCloudBaseRunVersionRsByConditionResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunVersionRsByCondition(req, cb) {
        let resp = new DescribeCloudBaseRunVersionRsByConditionResponse();
        this.request("DescribeCloudBaseRunVersionRsByCondition", req, resp, cb);
    }

    /**
     * 查询云应用服务版本容器列表
     * @param {DescribeCloudBaseRunPodListRequest} req
     * @param {function(string, DescribeCloudBaseRunPodListResponse):void} cb
     * @public
     */
    DescribeCloudBaseRunPodList(req, cb) {
        let resp = new DescribeCloudBaseRunPodListResponse();
        this.request("DescribeCloudBaseRunPodList", req, resp, cb);
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

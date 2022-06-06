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
const UnBindSubDomainResponse = models.UnBindSubDomainResponse;
const UpdateApiKeyRequest = models.UpdateApiKeyRequest;
const Service = models.Service;
const DeleteAPIDocRequest = models.DeleteAPIDocRequest;
const ApiUsagePlanSet = models.ApiUsagePlanSet;
const DescribeAPIDocDetailRequest = models.DescribeAPIDocDetailRequest;
const ModifyAPIDocResponse = models.ModifyAPIDocResponse;
const AttachedApiSummary = models.AttachedApiSummary;
const DescribeUsagePlanRequest = models.DescribeUsagePlanRequest;
const DeleteUsagePlanResponse = models.DeleteUsagePlanResponse;
const DisableApiKeyResponse = models.DisableApiKeyResponse;
const DescribeApiResponse = models.DescribeApiResponse;
const UnReleaseServiceRequest = models.UnReleaseServiceRequest;
const DetachPluginRequest = models.DetachPluginRequest;
const ModifySubDomainRequest = models.ModifySubDomainRequest;
const DescribeApiAppsStatusRequest = models.DescribeApiAppsStatusRequest;
const DescribeServiceUsagePlanRequest = models.DescribeServiceUsagePlanRequest;
const DescribeServiceEnvironmentListResponse = models.DescribeServiceEnvironmentListResponse;
const DescribeApiAppBindApisStatusRequest = models.DescribeApiAppBindApisStatusRequest;
const ModifyApiResponse = models.ModifyApiResponse;
const ServiceEnvironmentStrategy = models.ServiceEnvironmentStrategy;
const ApiInfo = models.ApiInfo;
const TargetServicesReq = models.TargetServicesReq;
const DescribeUsagePlansStatusRequest = models.DescribeUsagePlansStatusRequest;
const TsfLoadBalanceConfResp = models.TsfLoadBalanceConfResp;
const CreateIPStrategyRequest = models.CreateIPStrategyRequest;
const IPStrategy = models.IPStrategy;
const DescribeUsagePlansStatusResponse = models.DescribeUsagePlansStatusResponse;
const HealthCheckConf = models.HealthCheckConf;
const DeleteUpstreamRequest = models.DeleteUpstreamRequest;
const Plugin = models.Plugin;
const UnbindApiAppResponse = models.UnbindApiAppResponse;
const ModifyUpstreamRequest = models.ModifyUpstreamRequest;
const DescribeApiUsagePlanResponse = models.DescribeApiUsagePlanResponse;
const DeleteIPStrategyRequest = models.DeleteIPStrategyRequest;
const DescribeApiAppRequest = models.DescribeApiAppRequest;
const DescribePluginResponse = models.DescribePluginResponse;
const DescribeUpstreamBindApisRequest = models.DescribeUpstreamBindApisRequest;
const DescribeExclusiveInstancesResponse = models.DescribeExclusiveInstancesResponse;
const K8sService = models.K8sService;
const DeleteUsagePlanRequest = models.DeleteUsagePlanRequest;
const DeleteServiceRequest = models.DeleteServiceRequest;
const DescribeApiEnvironmentStrategyRequest = models.DescribeApiEnvironmentStrategyRequest;
const UpstreamHealthCheckerReqHeaders = models.UpstreamHealthCheckerReqHeaders;
const DescribeServiceForApiAppResponse = models.DescribeServiceForApiAppResponse;
const ServiceConfig = models.ServiceConfig;
const DeleteApiAppResponse = models.DeleteApiAppResponse;
const DescribeServiceResponse = models.DescribeServiceResponse;
const UsagePlanEnvironmentStatus = models.UsagePlanEnvironmentStatus;
const DescribeExclusiveInstancesRequest = models.DescribeExclusiveInstancesRequest;
const BindSubDomainResponse = models.BindSubDomainResponse;
const BindEnvironmentResponse = models.BindEnvironmentResponse;
const Tag = models.Tag;
const DescribeExclusiveInstanceDetailResponse = models.DescribeExclusiveInstanceDetailResponse;
const DescribeApiBindApiAppsStatusResponse = models.DescribeApiBindApiAppsStatusResponse;
const ConstantParameter = models.ConstantParameter;
const DescribeApiForApiAppRequest = models.DescribeApiForApiAppRequest;
const APIDocs = models.APIDocs;
const LogQuery = models.LogQuery;
const ServiceParameter = models.ServiceParameter;
const ModifyServiceResponse = models.ModifyServiceResponse;
const DisableApiKeyRequest = models.DisableApiKeyRequest;
const PathMapping = models.PathMapping;
const UnBindIPStrategyResponse = models.UnBindIPStrategyResponse;
const DescribeExclusiveInstanceDetailRequest = models.DescribeExclusiveInstanceDetailRequest;
const ModifyPluginRequest = models.ModifyPluginRequest;
const BindIPStrategyResponse = models.BindIPStrategyResponse;
const AvailableApiInfo = models.AvailableApiInfo;
const DescribeApisStatusRequest = models.DescribeApisStatusRequest;
const DeleteServiceSubDomainMappingRequest = models.DeleteServiceSubDomainMappingRequest;
const BindApiAppRequest = models.BindApiAppRequest;
const IPStrategyApi = models.IPStrategyApi;
const DescribeIPStrategyResponse = models.DescribeIPStrategyResponse;
const DescribePluginRequest = models.DescribePluginRequest;
const DocumentSDK = models.DocumentSDK;
const AttachedApiInfo = models.AttachedApiInfo;
const CreateApiResponse = models.CreateApiResponse;
const DescribeIPStrategyApisStatusRequest = models.DescribeIPStrategyApisStatusRequest;
const ModifyIPStrategyResponse = models.ModifyIPStrategyResponse;
const DescribeUpstreamInfo = models.DescribeUpstreamInfo;
const ModifyApiEnvironmentStrategyRequest = models.ModifyApiEnvironmentStrategyRequest;
const NetworkConfig = models.NetworkConfig;
const ServiceReleaseHistory = models.ServiceReleaseHistory;
const ModifyUsagePlanResponse = models.ModifyUsagePlanResponse;
const CreateUsagePlanResponse = models.CreateUsagePlanResponse;
const DomainSets = models.DomainSets;
const DeletePluginRequest = models.DeletePluginRequest;
const Base64EncodedTriggerRule = models.Base64EncodedTriggerRule;
const RequestConfig = models.RequestConfig;
const DeleteApiKeyResponse = models.DeleteApiKeyResponse;
const UpstreamInfo = models.UpstreamInfo;
const ModifyExclusiveInstanceRequest = models.ModifyExclusiveInstanceRequest;
const UsagePlan = models.UsagePlan;
const DescribeServiceReleaseVersionRequest = models.DescribeServiceReleaseVersionRequest;
const DescribeUsagePlanSecretIdsRequest = models.DescribeUsagePlanSecretIdsRequest;
const DescribeLogSearchResponse = models.DescribeLogSearchResponse;
const ModifyAPIDocRequest = models.ModifyAPIDocRequest;
const UnBindIPStrategyRequest = models.UnBindIPStrategyRequest;
const DescribeUpstreamsResponse = models.DescribeUpstreamsResponse;
const DescribePluginApisRequest = models.DescribePluginApisRequest;
const ResponseErrorCodeReq = models.ResponseErrorCodeReq;
const CreateServiceRequest = models.CreateServiceRequest;
const DescribeIPStrategysStatusRequest = models.DescribeIPStrategysStatusRequest;
const DemoteServiceUsagePlanResponse = models.DemoteServiceUsagePlanResponse;
const DescribePluginApisResponse = models.DescribePluginApisResponse;
const EnableApiKeyResponse = models.EnableApiKeyResponse;
const DeleteApiAppRequest = models.DeleteApiAppRequest;
const UnReleaseServiceResponse = models.UnReleaseServiceResponse;
const CreateAPIDocResponse = models.CreateAPIDocResponse;
const DescribeServiceRequest = models.DescribeServiceRequest;
const UsagePlansStatus = models.UsagePlansStatus;
const CreateUsagePlanRequest = models.CreateUsagePlanRequest;
const DescribeUsagePlanSecretIdsResponse = models.DescribeUsagePlanSecretIdsResponse;
const CreatePluginRequest = models.CreatePluginRequest;
const MicroServiceReq = models.MicroServiceReq;
const ModifySubDomainResponse = models.ModifySubDomainResponse;
const DescribePluginsRequest = models.DescribePluginsRequest;
const BindSecretIdsRequest = models.BindSecretIdsRequest;
const ParameterInfo = models.ParameterInfo;
const UsagePlanBindSecret = models.UsagePlanBindSecret;
const DeleteApiKeyRequest = models.DeleteApiKeyRequest;
const DescribeIPStrategyApisStatusResponse = models.DescribeIPStrategyApisStatusResponse;
const ModifyApiAppResponse = models.ModifyApiAppResponse;
const UpdateApiAppKeyRequest = models.UpdateApiAppKeyRequest;
const DomainSetList = models.DomainSetList;
const IPStrategysStatus = models.IPStrategysStatus;
const DescribeApiKeyResponse = models.DescribeApiKeyResponse;
const ModifyApiIncrementResponse = models.ModifyApiIncrementResponse;
const ModifyApiRequest = models.ModifyApiRequest;
const DescribeAllPluginApisResponse = models.DescribeAllPluginApisResponse;
const ModifyUsagePlanRequest = models.ModifyUsagePlanRequest;
const ApiRequestConfig = models.ApiRequestConfig;
const ModifyServiceRequest = models.ModifyServiceRequest;
const DescribeAllPluginApisRequest = models.DescribeAllPluginApisRequest;
const ApiIdStatus = models.ApiIdStatus;
const CreateApiRequest = models.CreateApiRequest;
const DescribeServiceEnvironmentStrategyRequest = models.DescribeServiceEnvironmentStrategyRequest;
const DescribeUpstreamBindApisResponse = models.DescribeUpstreamBindApisResponse;
const ReleaseServiceRequest = models.ReleaseServiceRequest;
const DeleteServiceResponse = models.DeleteServiceResponse;
const DescribeServiceEnvironmentReleaseHistoryResponse = models.DescribeServiceEnvironmentReleaseHistoryResponse;
const Environment = models.Environment;
const DescribeAPIDocsRequest = models.DescribeAPIDocsRequest;
const UsagePlanStatusInfo = models.UsagePlanStatusInfo;
const ServiceReleaseHistoryInfo = models.ServiceReleaseHistoryInfo;
const CreatePluginResponse = models.CreatePluginResponse;
const ModifyExclusiveInstanceResponse = models.ModifyExclusiveInstanceResponse;
const K8sLabel = models.K8sLabel;
const DescribePluginsResponse = models.DescribePluginsResponse;
const ReleaseServiceResponse = models.ReleaseServiceResponse;
const APIDocInfo = models.APIDocInfo;
const CosConfig = models.CosConfig;
const ModifyApiIncrementRequest = models.ModifyApiIncrementRequest;
const GenerateApiDocumentRequest = models.GenerateApiDocumentRequest;
const ServiceUsagePlanSet = models.ServiceUsagePlanSet;
const CreateUpstreamRequest = models.CreateUpstreamRequest;
const ModifyServiceEnvironmentStrategyResponse = models.ModifyServiceEnvironmentStrategyResponse;
const UpdateApiKeyResponse = models.UpdateApiKeyResponse;
const DescribeApiBindApiAppsStatusRequest = models.DescribeApiBindApiAppsStatusRequest;
const DescribeApisStatusResponse = models.DescribeApisStatusResponse;
const DescribeApiKeysStatusRequest = models.DescribeApiKeysStatusRequest;
const DemoteServiceUsagePlanRequest = models.DemoteServiceUsagePlanRequest;
const BindSecretIdsResponse = models.BindSecretIdsResponse;
const CreateApiRsp = models.CreateApiRsp;
const UsagePlanBindEnvironment = models.UsagePlanBindEnvironment;
const InstanceInfo = models.InstanceInfo;
const DeleteApiRequest = models.DeleteApiRequest;
const DescribeServiceSubDomainMappingsRequest = models.DescribeServiceSubDomainMappingsRequest;
const DescribeApiAppResponse = models.DescribeApiAppResponse;
const DescribeServiceSubDomainMappingsResponse = models.DescribeServiceSubDomainMappingsResponse;
const OauthConfig = models.OauthConfig;
const DescribeApiAppsStatusResponse = models.DescribeApiAppsStatusResponse;
const ServiceSubDomainMappings = models.ServiceSubDomainMappings;
const DescribeApiKeyRequest = models.DescribeApiKeyRequest;
const DescribeAPIDocDetailResponse = models.DescribeAPIDocDetailResponse;
const Filter = models.Filter;
const BindApiAppResponse = models.BindApiAppResponse;
const UsagePlanBindSecretStatus = models.UsagePlanBindSecretStatus;
const DeleteServiceSubDomainMappingResponse = models.DeleteServiceSubDomainMappingResponse;
const CreateApiKeyResponse = models.CreateApiKeyResponse;
const DescribeUpstreamsRequest = models.DescribeUpstreamsRequest;
const UsagePlanEnvironment = models.UsagePlanEnvironment;
const ModifyIPStrategyRequest = models.ModifyIPStrategyRequest;
const ModifyPluginResponse = models.ModifyPluginResponse;
const UnBindSecretIdsRequest = models.UnBindSecretIdsRequest;
const DescribeApiRequest = models.DescribeApiRequest;
const VpcConfig = models.VpcConfig;
const CreateUpstreamResponse = models.CreateUpstreamResponse;
const ResetAPIDocPasswordRequest = models.ResetAPIDocPasswordRequest;
const ApiUsagePlan = models.ApiUsagePlan;
const BuildAPIDocRequest = models.BuildAPIDocRequest;
const DescribeAPIDocsResponse = models.DescribeAPIDocsResponse;
const DetachPluginResponse = models.DetachPluginResponse;
const DeletePluginResponse = models.DeletePluginResponse;
const DescribeUpstreamBindApis = models.DescribeUpstreamBindApis;
const ModifyServiceEnvironmentStrategyRequest = models.ModifyServiceEnvironmentStrategyRequest;
const CreateAPIDocRequest = models.CreateAPIDocRequest;
const DescribeApiAppBindApisStatusResponse = models.DescribeApiAppBindApisStatusResponse;
const DescribeServiceSubDomainsRequest = models.DescribeServiceSubDomainsRequest;
const ModifyApiAppRequest = models.ModifyApiAppRequest;
const GenerateApiDocumentResponse = models.GenerateApiDocumentResponse;
const DescribeUsagePlanEnvironmentsResponse = models.DescribeUsagePlanEnvironmentsResponse;
const DescribeServiceSubDomainsResponse = models.DescribeServiceSubDomainsResponse;
const AttachPluginRequest = models.AttachPluginRequest;
const DescribeServiceForApiAppRequest = models.DescribeServiceForApiAppRequest;
const ModifyApiEnvironmentStrategyResponse = models.ModifyApiEnvironmentStrategyResponse;
const BindSubDomainRequest = models.BindSubDomainRequest;
const ApiAppInfos = models.ApiAppInfos;
const IPStrategyApiStatus = models.IPStrategyApiStatus;
const CreateIPStrategyResponse = models.CreateIPStrategyResponse;
const UnBindEnvironmentResponse = models.UnBindEnvironmentResponse;
const DeleteApiResponse = models.DeleteApiResponse;
const BindIPStrategyRequest = models.BindIPStrategyRequest;
const UpdateServiceRequest = models.UpdateServiceRequest;
const BuildAPIDocResponse = models.BuildAPIDocResponse;
const ErrorCodes = models.ErrorCodes;
const DescribeServiceEnvironmentListRequest = models.DescribeServiceEnvironmentListRequest;
const ServiceEnvironmentStrategyStatus = models.ServiceEnvironmentStrategyStatus;
const ReqParameter = models.ReqParameter;
const DescribeApiEnvironmentStrategyResponse = models.DescribeApiEnvironmentStrategyResponse;
const MicroService = models.MicroService;
const ApiEnvironmentStrategyStataus = models.ApiEnvironmentStrategyStataus;
const PluginSummary = models.PluginSummary;
const ApiAppInfo = models.ApiAppInfo;
const DeleteIPStrategyResponse = models.DeleteIPStrategyResponse;
const ApiInfoSummary = models.ApiInfoSummary;
const ApiKey = models.ApiKey;
const BindApiInfo = models.BindApiInfo;
const ApiAppApiInfo = models.ApiAppApiInfo;
const DescribeUsagePlanResponse = models.DescribeUsagePlanResponse;
const UnBindEnvironmentRequest = models.UnBindEnvironmentRequest;
const AttachPluginResponse = models.AttachPluginResponse;
const BindEnvironmentRequest = models.BindEnvironmentRequest;
const ModifyUpstreamResponse = models.ModifyUpstreamResponse;
const DescribeIPStrategyRequest = models.DescribeIPStrategyRequest;
const DescribeApiForApiAppResponse = models.DescribeApiForApiAppResponse;
const EnvironmentStrategy = models.EnvironmentStrategy;
const InstanceParameterInput = models.InstanceParameterInput;
const DescribeUsagePlanEnvironmentsRequest = models.DescribeUsagePlanEnvironmentsRequest;
const DescribeServiceReleaseVersionResponse = models.DescribeServiceReleaseVersionResponse;
const UpstreamNode = models.UpstreamNode;
const ApiAppApiInfos = models.ApiAppApiInfos;
const DeleteUpstreamResponse = models.DeleteUpstreamResponse;
const UpdateServiceResponse = models.UpdateServiceResponse;
const UsagePlanInfo = models.UsagePlanInfo;
const DescribeServiceEnvironmentReleaseHistoryRequest = models.DescribeServiceEnvironmentReleaseHistoryRequest;
const UnbindApiAppRequest = models.UnbindApiAppRequest;
const ReleaseService = models.ReleaseService;
const ServiceEnvironmentSet = models.ServiceEnvironmentSet;
const CreateServiceResponse = models.CreateServiceResponse;
const DeleteAPIDocResponse = models.DeleteAPIDocResponse;
const DescribeServiceEnvironmentStrategyResponse = models.DescribeServiceEnvironmentStrategyResponse;
const DesApisStatus = models.DesApisStatus;
const DescribeApiKeysStatusResponse = models.DescribeApiKeysStatusResponse;
const ServicesStatus = models.ServicesStatus;
const DescribeLogSearchRequest = models.DescribeLogSearchRequest;
const ApisStatus = models.ApisStatus;
const ApiKeysStatus = models.ApiKeysStatus;
const APIDoc = models.APIDoc;
const DescribeServiceUsagePlanResponse = models.DescribeServiceUsagePlanResponse;
const CreateApiAppResponse = models.CreateApiAppResponse;
const DescribeApiUsagePlanRequest = models.DescribeApiUsagePlanRequest;
const UnBindSubDomainRequest = models.UnBindSubDomainRequest;
const ApiEnvironmentStrategy = models.ApiEnvironmentStrategy;
const DescribeIPStrategysStatusResponse = models.DescribeIPStrategysStatusResponse;
const UpdateApiAppKeyResponse = models.UpdateApiAppKeyResponse;
const InstanceDetail = models.InstanceDetail;
const UnBindSecretIdsResponse = models.UnBindSecretIdsResponse;
const CreateApiAppRequest = models.CreateApiAppRequest;
const EnableApiKeyRequest = models.EnableApiKeyRequest;
const ResetAPIDocPasswordResponse = models.ResetAPIDocPasswordResponse;
const DescribeServicesStatusRequest = models.DescribeServicesStatusRequest;
const RequestParameter = models.RequestParameter;
const UpstreamHealthChecker = models.UpstreamHealthChecker;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const ServiceReleaseVersion = models.ServiceReleaseVersion;
const DescribeServicesStatusResponse = models.DescribeServicesStatusResponse;
const CreateApiKeyRequest = models.CreateApiKeyRequest;


/**
 * apigateway client
 * @class
 */
class ApigatewayClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("apigateway.tencentcloudapi.com", "2018-08-08", credential, region, profile);
    }
    
    /**
     * 本接口（CreateService）用于创建服务。
API 网关使用的最大单元为服务，每个服务中可创建多个 API 接口。每个服务有一个默认域名供客户调用，用户也可绑定自定义域名到此服务中。 
     * @param {CreateServiceRequest} req
     * @param {function(string, CreateServiceResponse):void} cb
     * @public
     */
    CreateService(req, cb) {
        let resp = new CreateServiceResponse();
        this.request("CreateService", req, resp, cb);
    }

    /**
     * 本接口（DescribeUsagePlanStatus）用于查询使用计划的列表。
     * @param {DescribeUsagePlansStatusRequest} req
     * @param {function(string, DescribeUsagePlansStatusResponse):void} cb
     * @public
     */
    DescribeUsagePlansStatus(req, cb) {
        let resp = new DescribeUsagePlansStatusResponse();
        this.request("DescribeUsagePlansStatus", req, resp, cb);
    }

    /**
     * 查询 API 文档详情
     * @param {DescribeAPIDocDetailRequest} req
     * @param {function(string, DescribeAPIDocDetailResponse):void} cb
     * @public
     */
    DescribeAPIDocDetail(req, cb) {
        let resp = new DescribeAPIDocDetailResponse();
        this.request("DescribeAPIDocDetail", req, resp, cb);
    }

    /**
     * 本接口（DescribeApiAppBindApisStatus）查询应用绑定的Api列表。
     * @param {DescribeApiAppBindApisStatusRequest} req
     * @param {function(string, DescribeApiAppBindApisStatusResponse):void} cb
     * @public
     */
    DescribeApiAppBindApisStatus(req, cb) {
        let resp = new DescribeApiAppBindApisStatusResponse();
        this.request("DescribeApiAppBindApisStatus", req, resp, cb);
    }

    /**
     * 本接口（DescribeUsagePlanSecretIds）用于查询使用计划绑定的密钥列表。
在 API 网关中，一个使用计划可绑定多个密钥对，可使用本接口查询使用计划绑定的密钥列表。
     * @param {DescribeUsagePlanSecretIdsRequest} req
     * @param {function(string, DescribeUsagePlanSecretIdsResponse):void} cb
     * @public
     */
    DescribeUsagePlanSecretIds(req, cb) {
        let resp = new DescribeUsagePlanSecretIdsResponse();
        this.request("DescribeUsagePlanSecretIds", req, resp, cb);
    }

    /**
     * 本接口（DescribeServiceForApiApp）用于应用使用者查询一个服务的详细信息、包括服务的描述、域名、协议等信息。
     * @param {DescribeServiceForApiAppRequest} req
     * @param {function(string, DescribeServiceForApiAppResponse):void} cb
     * @public
     */
    DescribeServiceForApiApp(req, cb) {
        let resp = new DescribeServiceForApiAppResponse();
        this.request("DescribeServiceForApiApp", req, resp, cb);
    }

    /**
     * 本接口（ModifyIPStrategy）用于修改服务IP策略。
     * @param {ModifyIPStrategyRequest} req
     * @param {function(string, ModifyIPStrategyResponse):void} cb
     * @public
     */
    ModifyIPStrategy(req, cb) {
        let resp = new ModifyIPStrategyResponse();
        this.request("ModifyIPStrategy", req, resp, cb);
    }

    /**
     * 本接口（UpdateService）用于从服务发布的环境中运行版本切换到特定版本。用户在使用 API 网关创建服务并发布服务到某个环境后，多因为开发过程会产生多个版本，此时可调用本接口。
     * @param {UpdateServiceRequest} req
     * @param {function(string, UpdateServiceResponse):void} cb
     * @public
     */
    UpdateService(req, cb) {
        let resp = new UpdateServiceResponse();
        this.request("UpdateService", req, resp, cb);
    }

    /**
     * 修改API网关插件。
     * @param {ModifyPluginRequest} req
     * @param {function(string, ModifyPluginResponse):void} cb
     * @public
     */
    ModifyPlugin(req, cb) {
        let resp = new ModifyPluginResponse();
        this.request("ModifyPlugin", req, resp, cb);
    }

    /**
     * 本接口（DeleteApiApp）用于删除已经创建的应用。
     * @param {DeleteApiAppRequest} req
     * @param {function(string, DeleteApiAppResponse):void} cb
     * @public
     */
    DeleteApiApp(req, cb) {
        let resp = new DeleteApiAppResponse();
        this.request("DeleteApiApp", req, resp, cb);
    }

    /**
     * 本接口（DescribeServicesStatus）用于搜索查询某一个服务或多个服务的列表，并返回服务相关的域名、时间等信息。
     * @param {DescribeServicesStatusRequest} req
     * @param {function(string, DescribeServicesStatusResponse):void} cb
     * @public
     */
    DescribeServicesStatus(req, cb) {
        let resp = new DescribeServicesStatusResponse();
        this.request("DescribeServicesStatus", req, resp, cb);
    }

    /**
     * 查询 API 文档列表
     * @param {DescribeAPIDocsRequest} req
     * @param {function(string, DescribeAPIDocsResponse):void} cb
     * @public
     */
    DescribeAPIDocs(req, cb) {
        let resp = new DescribeAPIDocsResponse();
        this.request("DescribeAPIDocs", req, resp, cb);
    }

    /**
     * 本接口（DescribeServiceSubDomainMappings）用于查询自定义域名的路径映射。
API 网关可绑定自定义域名到服务，并且可以对自定义域名的路径进行映射，可自定义不同的路径映射到服务中的三个环境，本接口用于查询绑定服务的自定义域名的路径映射列表。
     * @param {DescribeServiceSubDomainMappingsRequest} req
     * @param {function(string, DescribeServiceSubDomainMappingsResponse):void} cb
     * @public
     */
    DescribeServiceSubDomainMappings(req, cb) {
        let resp = new DescribeServiceSubDomainMappingsResponse();
        this.request("DescribeServiceSubDomainMappings", req, resp, cb);
    }

    /**
     * 展示插件相关的API列表，包括已绑定的和未绑定的API信息。
     * @param {DescribeAllPluginApisRequest} req
     * @param {function(string, DescribeAllPluginApisResponse):void} cb
     * @public
     */
    DescribeAllPluginApis(req, cb) {
        let resp = new DescribeAllPluginApisResponse();
        this.request("DescribeAllPluginApis", req, resp, cb);
    }

    /**
     * 本接口（UnBindIPStrategy）用于服务解绑IP策略。
     * @param {UnBindIPStrategyRequest} req
     * @param {function(string, UnBindIPStrategyResponse):void} cb
     * @public
     */
    UnBindIPStrategy(req, cb) {
        let resp = new UnBindIPStrategyResponse();
        this.request("UnBindIPStrategy", req, resp, cb);
    }

    /**
     * 重置API文档密码
     * @param {ResetAPIDocPasswordRequest} req
     * @param {function(string, ResetAPIDocPasswordResponse):void} cb
     * @public
     */
    ResetAPIDocPassword(req, cb) {
        let resp = new ResetAPIDocPasswordResponse();
        this.request("ResetAPIDocPassword", req, resp, cb);
    }

    /**
     * 查询指定插件下绑定的API信息
     * @param {DescribePluginApisRequest} req
     * @param {function(string, DescribePluginApisResponse):void} cb
     * @public
     */
    DescribePluginApis(req, cb) {
        let resp = new DescribePluginApisResponse();
        this.request("DescribePluginApis", req, resp, cb);
    }

    /**
     * 本接口（DisableApiKey）用于禁用一对 API 密钥。
     * @param {DisableApiKeyRequest} req
     * @param {function(string, DisableApiKeyResponse):void} cb
     * @public
     */
    DisableApiKey(req, cb) {
        let resp = new DisableApiKeyResponse();
        this.request("DisableApiKey", req, resp, cb);
    }

    /**
     * 本接口（DescribeApiEnvironmentStrategy）用于展示API绑定的限流策略。
     * @param {DescribeApiEnvironmentStrategyRequest} req
     * @param {function(string, DescribeApiEnvironmentStrategyResponse):void} cb
     * @public
     */
    DescribeApiEnvironmentStrategy(req, cb) {
        let resp = new DescribeApiEnvironmentStrategyResponse();
        this.request("DescribeApiEnvironmentStrategy", req, resp, cb);
    }

    /**
     * 本接口（DescribeApiAppsStatus）查询应用列表。
     * @param {DescribeApiAppsStatusRequest} req
     * @param {function(string, DescribeApiAppsStatusResponse):void} cb
     * @public
     */
    DescribeApiAppsStatus(req, cb) {
        let resp = new DescribeApiAppsStatusResponse();
        this.request("DescribeApiAppsStatus", req, resp, cb);
    }

    /**
     * 本接口（DescribeApiApp）用于根据应用ID搜索应用。
     * @param {DescribeApiAppRequest} req
     * @param {function(string, DescribeApiAppResponse):void} cb
     * @public
     */
    DescribeApiApp(req, cb) {
        let resp = new DescribeApiAppResponse();
        this.request("DescribeApiApp", req, resp, cb);
    }

    /**
     * 查询后端通道列表详情
     * @param {DescribeUpstreamsRequest} req
     * @param {function(string, DescribeUpstreamsResponse):void} cb
     * @public
     */
    DescribeUpstreams(req, cb) {
        let resp = new DescribeUpstreamsResponse();
        this.request("DescribeUpstreams", req, resp, cb);
    }

    /**
     * 本接口（DescribeApi）用于查询用户 API 网关的 API 接口的详细信息。​
     * @param {DescribeApiRequest} req
     * @param {function(string, DescribeApiResponse):void} cb
     * @public
     */
    DescribeApi(req, cb) {
        let resp = new DescribeApiResponse();
        this.request("DescribeApi", req, resp, cb);
    }

    /**
     * 本接口（GenerateApiDocument）用于自动生成 API 文档和 SDK，一个服务的一个环境生成一份文档和 SDK。
     * @param {GenerateApiDocumentRequest} req
     * @param {function(string, GenerateApiDocumentResponse):void} cb
     * @public
     */
    GenerateApiDocument(req, cb) {
        let resp = new GenerateApiDocumentResponse();
        this.request("GenerateApiDocument", req, resp, cb);
    }

    /**
     * 本接口（UnbindApiApp）用于解除应用和API绑定。
     * @param {UnbindApiAppRequest} req
     * @param {function(string, UnbindApiAppResponse):void} cb
     * @public
     */
    UnbindApiApp(req, cb) {
        let resp = new UnbindApiAppResponse();
        this.request("UnbindApiApp", req, resp, cb);
    }

    /**
     * 本接口（DeleteUsagePlan）用于删除使用计划。
     * @param {DeleteUsagePlanRequest} req
     * @param {function(string, DeleteUsagePlanResponse):void} cb
     * @public
     */
    DeleteUsagePlan(req, cb) {
        let resp = new DeleteUsagePlanResponse();
        this.request("DeleteUsagePlan", req, resp, cb);
    }

    /**
     * 本接口（CreateApiApp）用于创建应用。
     * @param {CreateApiAppRequest} req
     * @param {function(string, CreateApiAppResponse):void} cb
     * @public
     */
    CreateApiApp(req, cb) {
        let resp = new CreateApiAppResponse();
        this.request("CreateApiApp", req, resp, cb);
    }

    /**
     * 本接口（DescribeApiKeysStatus）用于查询密钥列表。
当用户创建了多个密钥对时，可使用本接口查询一个或多个 API 密钥信息。
     * @param {DescribeApiKeysStatusRequest} req
     * @param {function(string, DescribeApiKeysStatusResponse):void} cb
     * @public
     */
    DescribeApiKeysStatus(req, cb) {
        let resp = new DescribeApiKeysStatusResponse();
        this.request("DescribeApiKeysStatus", req, resp, cb);
    }

    /**
     * 创建 API 文档
     * @param {CreateAPIDocRequest} req
     * @param {function(string, CreateAPIDocResponse):void} cb
     * @public
     */
    CreateAPIDoc(req, cb) {
        let resp = new CreateAPIDocResponse();
        this.request("CreateAPIDoc", req, resp, cb);
    }

    /**
     * 本接口（DescribeIPStrategyApisStatus）用于查询IP策略可以绑定的API列表。即服务下所有API和该策略已绑定API的差集。
     * @param {DescribeIPStrategyApisStatusRequest} req
     * @param {function(string, DescribeIPStrategyApisStatusResponse):void} cb
     * @public
     */
    DescribeIPStrategyApisStatus(req, cb) {
        let resp = new DescribeIPStrategyApisStatusResponse();
        this.request("DescribeIPStrategyApisStatus", req, resp, cb);
    }

    /**
     * 本接口（UnReleaseService）用于下线服务。
用户发布服务到某个环境后，此服务中的 API 方可被调用者进行调用，当用户需要将此服务从发布环境中下线时，可调用此 API。下线后的服务不可被调用。
     * @param {UnReleaseServiceRequest} req
     * @param {function(string, UnReleaseServiceResponse):void} cb
     * @public
     */
    UnReleaseService(req, cb) {
        let resp = new UnReleaseServiceResponse();
        this.request("UnReleaseService", req, resp, cb);
    }

    /**
     * 本接口（DescribeServiceEnvironmentReleaseHistory）用于查询服务环境的发布历史。
用户在创建好服务后需要发布到某个环境中才能进行使用，本接口用于查询一个服务某个环境的发布记录。
     * @param {DescribeServiceEnvironmentReleaseHistoryRequest} req
     * @param {function(string, DescribeServiceEnvironmentReleaseHistoryResponse):void} cb
     * @public
     */
    DescribeServiceEnvironmentReleaseHistory(req, cb) {
        let resp = new DescribeServiceEnvironmentReleaseHistoryResponse();
        this.request("DescribeServiceEnvironmentReleaseHistory", req, resp, cb);
    }

    /**
     * 本接口（DeleteApi）用于删除已经创建的API。
     * @param {DeleteApiRequest} req
     * @param {function(string, DeleteApiResponse):void} cb
     * @public
     */
    DeleteApi(req, cb) {
        let resp = new DeleteApiResponse();
        this.request("DeleteApi", req, resp, cb);
    }

    /**
     * 本接口（UpdateApiAppKey）用于更新应用密钥。
     * @param {UpdateApiAppKeyRequest} req
     * @param {function(string, UpdateApiAppKeyResponse):void} cb
     * @public
     */
    UpdateApiAppKey(req, cb) {
        let resp = new UpdateApiAppKeyResponse();
        this.request("UpdateApiAppKey", req, resp, cb);
    }

    /**
     * 本接口（ModifyUsagePlan）用于修改使用计划的名称，描述及 QPS。
     * @param {ModifyUsagePlanRequest} req
     * @param {function(string, ModifyUsagePlanResponse):void} cb
     * @public
     */
    ModifyUsagePlan(req, cb) {
        let resp = new ModifyUsagePlanResponse();
        this.request("ModifyUsagePlan", req, resp, cb);
    }

    /**
     * 本接口（BindEnvironment）用于绑定使用计划到服务或API。
用户在发布服务到某个环境中后，如果 API 需要鉴权，还需要绑定使用计划才能进行调用，此接口用户将使用计划绑定到特定环境。
目前支持绑定使用计划到API，但是同一个服务不能同时存在绑定到服务的使用计划和绑定到API的使用计划，所以对已经绑定过服务级别使用计划的环境，请先使用 服务级别使用计划降级 接口进行降级操作。
     * @param {BindEnvironmentRequest} req
     * @param {function(string, BindEnvironmentResponse):void} cb
     * @public
     */
    BindEnvironment(req, cb) {
        let resp = new BindEnvironmentResponse();
        this.request("BindEnvironment", req, resp, cb);
    }

    /**
     * 修改 API 文档
     * @param {ModifyAPIDocRequest} req
     * @param {function(string, ModifyAPIDocResponse):void} cb
     * @public
     */
    ModifyAPIDoc(req, cb) {
        let resp = new ModifyAPIDocResponse();
        this.request("ModifyAPIDoc", req, resp, cb);
    }

    /**
     * 本接口（UnBindSecretIds）用于为使用计划解绑密钥。
     * @param {UnBindSecretIdsRequest} req
     * @param {function(string, UnBindSecretIdsResponse):void} cb
     * @public
     */
    UnBindSecretIds(req, cb) {
        let resp = new UnBindSecretIdsResponse();
        this.request("UnBindSecretIds", req, resp, cb);
    }

    /**
     * 本接口（DescribeIPStrategy）用于查询IP策略详情。
     * @param {DescribeIPStrategyRequest} req
     * @param {function(string, DescribeIPStrategyResponse):void} cb
     * @public
     */
    DescribeIPStrategy(req, cb) {
        let resp = new DescribeIPStrategyResponse();
        this.request("DescribeIPStrategy", req, resp, cb);
    }

    /**
     * 修改后端通道
     * @param {ModifyUpstreamRequest} req
     * @param {function(string, ModifyUpstreamResponse):void} cb
     * @public
     */
    ModifyUpstream(req, cb) {
        let resp = new ModifyUpstreamResponse();
        this.request("ModifyUpstream", req, resp, cb);
    }

    /**
     * 本接口（DescribeServiceReleaseVersion）查询一个服务下面所有已经发布的版本列表。
用户在发布服务时，常有多个版本发布，可使用本接口查询已发布的版本。
     * @param {DescribeServiceReleaseVersionRequest} req
     * @param {function(string, DescribeServiceReleaseVersionResponse):void} cb
     * @public
     */
    DescribeServiceReleaseVersion(req, cb) {
        let resp = new DescribeServiceReleaseVersionResponse();
        this.request("DescribeServiceReleaseVersion", req, resp, cb);
    }

    /**
     * 本接口（DescribeApisStatus）用于查看一个服务下的某个 API 或所有 API 列表及其相关信息。
     * @param {DescribeApisStatusRequest} req
     * @param {function(string, DescribeApisStatusResponse):void} cb
     * @public
     */
    DescribeApisStatus(req, cb) {
        let resp = new DescribeApisStatusResponse();
        this.request("DescribeApisStatus", req, resp, cb);
    }

    /**
     * 本接口（CreateApiKey）用于创建一对新的 API 密钥。
     * @param {CreateApiKeyRequest} req
     * @param {function(string, CreateApiKeyResponse):void} cb
     * @public
     */
    CreateApiKey(req, cb) {
        let resp = new CreateApiKeyResponse();
        this.request("CreateApiKey", req, resp, cb);
    }

    /**
     * 本接口（ModifySubDomain）用于修改服务的自定义域名设置中的路径映射，可以修改绑定自定义域名之前的路径映射规则。
     * @param {ModifySubDomainRequest} req
     * @param {function(string, ModifySubDomainResponse):void} cb
     * @public
     */
    ModifySubDomain(req, cb) {
        let resp = new ModifySubDomainResponse();
        this.request("ModifySubDomain", req, resp, cb);
    }

    /**
     * 本接口（DeleteIPStrategy）用于删除服务IP策略。
     * @param {DeleteIPStrategyRequest} req
     * @param {function(string, DeleteIPStrategyResponse):void} cb
     * @public
     */
    DeleteIPStrategy(req, cb) {
        let resp = new DeleteIPStrategyResponse();
        this.request("DeleteIPStrategy", req, resp, cb);
    }

    /**
     * 本接口（ModifyService）用于修改服务的相关信息。当服务创建后，服务的名称、描述和服务类型均可被修改。
     * @param {ModifyServiceRequest} req
     * @param {function(string, ModifyServiceResponse):void} cb
     * @public
     */
    ModifyService(req, cb) {
        let resp = new ModifyServiceResponse();
        this.request("ModifyService", req, resp, cb);
    }

    /**
     * 本接口（DescribeExclusiveInstances）用于查询独享实例列表信息。​
     * @param {DescribeExclusiveInstancesRequest} req
     * @param {function(string, DescribeExclusiveInstancesResponse):void} cb
     * @public
     */
    DescribeExclusiveInstances(req, cb) {
        let resp = new DescribeExclusiveInstancesResponse();
        this.request("DescribeExclusiveInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeService）用于查询一个服务的详细信息、包括服务的描述、域名、协议、创建时间、发布情况等信息。
     * @param {DescribeServiceRequest} req
     * @param {function(string, DescribeServiceResponse):void} cb
     * @public
     */
    DescribeService(req, cb) {
        let resp = new DescribeServiceResponse();
        this.request("DescribeService", req, resp, cb);
    }

    /**
     * 创建API网关插件。
     * @param {CreatePluginRequest} req
     * @param {function(string, CreatePluginResponse):void} cb
     * @public
     */
    CreatePlugin(req, cb) {
        let resp = new CreatePluginResponse();
        this.request("CreatePlugin", req, resp, cb);
    }

    /**
     * 展示插件列表和详情，支持分页，支持按照插件类型查询，支持按照插件ID批量查询，支持按照插件名称查询。
     * @param {DescribePluginsRequest} req
     * @param {function(string, DescribePluginsResponse):void} cb
     * @public
     */
    DescribePlugins(req, cb) {
        let resp = new DescribePluginsResponse();
        this.request("DescribePlugins", req, resp, cb);
    }

    /**
     * 本接口（DeleteApiKey）用于删除一对 API 密钥。
     * @param {DeleteApiKeyRequest} req
     * @param {function(string, DeleteApiKeyResponse):void} cb
     * @public
     */
    DeleteApiKey(req, cb) {
        let resp = new DeleteApiKeyResponse();
        this.request("DeleteApiKey", req, resp, cb);
    }

    /**
     * 本接口（CreateApi）用于创建 API 接口，创建 API 前，用户需要先创建服务，每个 API 都有自己归属的服务。
     * @param {CreateApiRequest} req
     * @param {function(string, CreateApiResponse):void} cb
     * @public
     */
    CreateApi(req, cb) {
        let resp = new CreateApiResponse();
        this.request("CreateApi", req, resp, cb);
    }

    /**
     * 本接口（DescribeExclusiveInstanceDetail）用于查询独享实例详情信息。​
     * @param {DescribeExclusiveInstanceDetailRequest} req
     * @param {function(string, DescribeExclusiveInstanceDetailResponse):void} cb
     * @public
     */
    DescribeExclusiveInstanceDetail(req, cb) {
        let resp = new DescribeExclusiveInstanceDetailResponse();
        this.request("DescribeExclusiveInstanceDetail", req, resp, cb);
    }

    /**
     * 绑定插件到API上。
     * @param {AttachPluginRequest} req
     * @param {function(string, AttachPluginResponse):void} cb
     * @public
     */
    AttachPlugin(req, cb) {
        let resp = new AttachPluginResponse();
        this.request("AttachPlugin", req, resp, cb);
    }

    /**
     * 本接口（BindApiApp）用于绑定应用到API。
     * @param {BindApiAppRequest} req
     * @param {function(string, BindApiAppResponse):void} cb
     * @public
     */
    BindApiApp(req, cb) {
        let resp = new BindApiAppResponse();
        this.request("BindApiApp", req, resp, cb);
    }

    /**
     * 本接口（DescribeApiBindApiAppsStatus）查询Api绑定的应用列表。
     * @param {DescribeApiBindApiAppsStatusRequest} req
     * @param {function(string, DescribeApiBindApiAppsStatusResponse):void} cb
     * @public
     */
    DescribeApiBindApiAppsStatus(req, cb) {
        let resp = new DescribeApiBindApiAppsStatusResponse();
        this.request("DescribeApiBindApiAppsStatus", req, resp, cb);
    }

    /**
     * 本接口DescribeLogSearch用于搜索日志
     * @param {DescribeLogSearchRequest} req
     * @param {function(string, DescribeLogSearchResponse):void} cb
     * @public
     */
    DescribeLogSearch(req, cb) {
        let resp = new DescribeLogSearchResponse();
        this.request("DescribeLogSearch", req, resp, cb);
    }

    /**
     * 本接口（DeleteService）用于删除 API 网关中某个服务。
     * @param {DeleteServiceRequest} req
     * @param {function(string, DeleteServiceResponse):void} cb
     * @public
     */
    DeleteService(req, cb) {
        let resp = new DeleteServiceResponse();
        this.request("DeleteService", req, resp, cb);
    }

    /**
     * 提供增量更新API能力，主要是给程序调用（区别于ModifyApi，该接口是需要传入API的全量参数，对console使用较友好）
     * @param {ModifyApiIncrementRequest} req
     * @param {function(string, ModifyApiIncrementResponse):void} cb
     * @public
     */
    ModifyApiIncrement(req, cb) {
        let resp = new ModifyApiIncrementResponse();
        this.request("ModifyApiIncrement", req, resp, cb);
    }

    /**
     * 本接口（DescribeApiUsagePlan）用于查询服务中 API 使用计划详情。
服务若需要鉴权限流生效，则需要绑定使用计划到此服务中，本接口用于查询绑定到一个服务及其中 API 的所有使用计划。
     * @param {DescribeApiUsagePlanRequest} req
     * @param {function(string, DescribeApiUsagePlanResponse):void} cb
     * @public
     */
    DescribeApiUsagePlan(req, cb) {
        let resp = new DescribeApiUsagePlanResponse();
        this.request("DescribeApiUsagePlan", req, resp, cb);
    }

    /**
     * 本接口（DescribeIPStrategysStatus）用于查询服务IP策略列表。
     * @param {DescribeIPStrategysStatusRequest} req
     * @param {function(string, DescribeIPStrategysStatusResponse):void} cb
     * @public
     */
    DescribeIPStrategysStatus(req, cb) {
        let resp = new DescribeIPStrategysStatusResponse();
        this.request("DescribeIPStrategysStatus", req, resp, cb);
    }

    /**
     * 本接口（ModifyServiceEnvironmentStrategy）用于修改服务限流策略
     * @param {ModifyServiceEnvironmentStrategyRequest} req
     * @param {function(string, ModifyServiceEnvironmentStrategyResponse):void} cb
     * @public
     */
    ModifyServiceEnvironmentStrategy(req, cb) {
        let resp = new ModifyServiceEnvironmentStrategyResponse();
        this.request("ModifyServiceEnvironmentStrategy", req, resp, cb);
    }

    /**
     * 本接口（ModifyExclusiveInstance）用于修改独享实例信息。​
     * @param {ModifyExclusiveInstanceRequest} req
     * @param {function(string, ModifyExclusiveInstanceResponse):void} cb
     * @public
     */
    ModifyExclusiveInstance(req, cb) {
        let resp = new ModifyExclusiveInstanceResponse();
        this.request("ModifyExclusiveInstance", req, resp, cb);
    }

    /**
     * 用于创建创建后端通道
     * @param {CreateUpstreamRequest} req
     * @param {function(string, CreateUpstreamResponse):void} cb
     * @public
     */
    CreateUpstream(req, cb) {
        let resp = new CreateUpstreamResponse();
        this.request("CreateUpstream", req, resp, cb);
    }

    /**
     * 本接口（DescribeUsagePlanEnvironments）用于查询使用计划绑定的环境列表。
用户在绑定了某个使用计划到环境后，可使用本接口查询这个使用计划绑定的所有服务的环境。
     * @param {DescribeUsagePlanEnvironmentsRequest} req
     * @param {function(string, DescribeUsagePlanEnvironmentsResponse):void} cb
     * @public
     */
    DescribeUsagePlanEnvironments(req, cb) {
        let resp = new DescribeUsagePlanEnvironmentsResponse();
        this.request("DescribeUsagePlanEnvironments", req, resp, cb);
    }

    /**
     * 展示插件详情，支持按照插件ID进行。
     * @param {DescribePluginRequest} req
     * @param {function(string, DescribePluginResponse):void} cb
     * @public
     */
    DescribePlugin(req, cb) {
        let resp = new DescribePluginResponse();
        this.request("DescribePlugin", req, resp, cb);
    }

    /**
     * 解除插件与API绑定
     * @param {DetachPluginRequest} req
     * @param {function(string, DetachPluginResponse):void} cb
     * @public
     */
    DetachPlugin(req, cb) {
        let resp = new DetachPluginResponse();
        this.request("DetachPlugin", req, resp, cb);
    }

    /**
     * 本接口（DescribeServiceEnvironmentList）用于查询一个服务的环境列表，可查询到此服务下所有环境及其状态。
     * @param {DescribeServiceEnvironmentListRequest} req
     * @param {function(string, DescribeServiceEnvironmentListResponse):void} cb
     * @public
     */
    DescribeServiceEnvironmentList(req, cb) {
        let resp = new DescribeServiceEnvironmentListResponse();
        this.request("DescribeServiceEnvironmentList", req, resp, cb);
    }

    /**
     * 删除后端通道，需要注意有API绑定时，不允许删除
     * @param {DeleteUpstreamRequest} req
     * @param {function(string, DeleteUpstreamResponse):void} cb
     * @public
     */
    DeleteUpstream(req, cb) {
        let resp = new DeleteUpstreamResponse();
        this.request("DeleteUpstream", req, resp, cb);
    }

    /**
     * 本接口（UnBindSubDomain）用于解绑自定义域名。
用户使用 API 网关绑定了自定义域名到服务中后，若想要解绑此自定义域名，可使用此接口。
     * @param {UnBindSubDomainRequest} req
     * @param {function(string, UnBindSubDomainResponse):void} cb
     * @public
     */
    UnBindSubDomain(req, cb) {
        let resp = new UnBindSubDomainResponse();
        this.request("UnBindSubDomain", req, resp, cb);
    }

    /**
     * 本接口（DescribeServiceEnvironmentStrategy）用于展示服务限流策略。
     * @param {DescribeServiceEnvironmentStrategyRequest} req
     * @param {function(string, DescribeServiceEnvironmentStrategyResponse):void} cb
     * @public
     */
    DescribeServiceEnvironmentStrategy(req, cb) {
        let resp = new DescribeServiceEnvironmentStrategyResponse();
        this.request("DescribeServiceEnvironmentStrategy", req, resp, cb);
    }

    /**
     * 本接口（DeleteServiceSubDomainMapping）用于删除服务中某个环境的自定义域名映射。
当用户使用自定义域名，并使用了自定义映射时，可使用此接口。但需注意，若删除了所有环境的映射时，调用此 API 均会返回失败。
     * @param {DeleteServiceSubDomainMappingRequest} req
     * @param {function(string, DeleteServiceSubDomainMappingResponse):void} cb
     * @public
     */
    DeleteServiceSubDomainMapping(req, cb) {
        let resp = new DeleteServiceSubDomainMappingResponse();
        this.request("DeleteServiceSubDomainMapping", req, resp, cb);
    }

    /**
     * 本接口（DescribeApiKey）用于查询密钥详情。
用户在创建密钥后，可用此接口查询一个 API 密钥的详情，该接口会显示密钥 Key。
     * @param {DescribeApiKeyRequest} req
     * @param {function(string, DescribeApiKeyResponse):void} cb
     * @public
     */
    DescribeApiKey(req, cb) {
        let resp = new DescribeApiKeyResponse();
        this.request("DescribeApiKey", req, resp, cb);
    }

    /**
     * 查询后端通道所绑定的API列表
     * @param {DescribeUpstreamBindApisRequest} req
     * @param {function(string, DescribeUpstreamBindApisResponse):void} cb
     * @public
     */
    DescribeUpstreamBindApis(req, cb) {
        let resp = new DescribeUpstreamBindApisResponse();
        this.request("DescribeUpstreamBindApis", req, resp, cb);
    }

    /**
     * 本接口（ReleaseService）用于发布服务。
API 网关的服务创建后，需要发布到某个环境方生效后，使用者才能进行调用，此接口用于发布服务到环境，如 release 环境。
     * @param {ReleaseServiceRequest} req
     * @param {function(string, ReleaseServiceResponse):void} cb
     * @public
     */
    ReleaseService(req, cb) {
        let resp = new ReleaseServiceResponse();
        this.request("ReleaseService", req, resp, cb);
    }

    /**
     * 本接口（BindSecretIds）用于为使用计划绑定密钥。
将密钥绑定到某个使用计划，并将此使用计划绑定到某个服务发布的环境上，调用者方可使用此密钥调用这个服务中的 API，可使用本接口为使用计划绑定密钥。
     * @param {BindSecretIdsRequest} req
     * @param {function(string, BindSecretIdsResponse):void} cb
     * @public
     */
    BindSecretIds(req, cb) {
        let resp = new BindSecretIdsResponse();
        this.request("BindSecretIds", req, resp, cb);
    }

    /**
     * 本接口（DescribeApiForApiApp）用于应用使用者查询部署于 API 网关的 API 接口的详细信息。​
     * @param {DescribeApiForApiAppRequest} req
     * @param {function(string, DescribeApiForApiAppResponse):void} cb
     * @public
     */
    DescribeApiForApiApp(req, cb) {
        let resp = new DescribeApiForApiAppResponse();
        this.request("DescribeApiForApiApp", req, resp, cb);
    }

    /**
     * 构建 API 文档
     * @param {BuildAPIDocRequest} req
     * @param {function(string, BuildAPIDocResponse):void} cb
     * @public
     */
    BuildAPIDoc(req, cb) {
        let resp = new BuildAPIDocResponse();
        this.request("BuildAPIDoc", req, resp, cb);
    }

    /**
     * 本接口（ModifyApiEnvironmentStrategy）用于修改API限流策略
     * @param {ModifyApiEnvironmentStrategyRequest} req
     * @param {function(string, ModifyApiEnvironmentStrategyResponse):void} cb
     * @public
     */
    ModifyApiEnvironmentStrategy(req, cb) {
        let resp = new ModifyApiEnvironmentStrategyResponse();
        this.request("ModifyApiEnvironmentStrategy", req, resp, cb);
    }

    /**
     * 本接口（ModifyApi）用于修改 API 接口，可调用此接口对已经配置的 API 接口进行编辑修改。修改后的 API 需要重新发布 API 所在的服务到对应环境方能生效。
     * @param {ModifyApiRequest} req
     * @param {function(string, ModifyApiResponse):void} cb
     * @public
     */
    ModifyApi(req, cb) {
        let resp = new ModifyApiResponse();
        this.request("ModifyApi", req, resp, cb);
    }

    /**
     * 本接口（DemoteServiceUsagePlan）用于将某个服务在某个环境的使用计划，降级到API上。
如果服务内没有API不允许进行此操作。
如果当前环境没有发布，不允许进行此操作。
     * @param {DemoteServiceUsagePlanRequest} req
     * @param {function(string, DemoteServiceUsagePlanResponse):void} cb
     * @public
     */
    DemoteServiceUsagePlan(req, cb) {
        let resp = new DemoteServiceUsagePlanResponse();
        this.request("DemoteServiceUsagePlan", req, resp, cb);
    }

    /**
     * 本接口（DescribeServiceSubDomains）用于查询自定义域名列表。
API 网关可绑定自定义域名到服务，用于服务调用。此接口用于查询用户绑定在服务的自定义域名列表。
     * @param {DescribeServiceSubDomainsRequest} req
     * @param {function(string, DescribeServiceSubDomainsResponse):void} cb
     * @public
     */
    DescribeServiceSubDomains(req, cb) {
        let resp = new DescribeServiceSubDomainsResponse();
        this.request("DescribeServiceSubDomains", req, resp, cb);
    }

    /**
     * 本接口（DescribeServiceUsagePlan）用于查询服务使用计划详情。
服务若需要鉴权限流生效，则需要绑定使用计划到此服务中，本接口用于查询绑定到一个服务的所有使用计划。
     * @param {DescribeServiceUsagePlanRequest} req
     * @param {function(string, DescribeServiceUsagePlanResponse):void} cb
     * @public
     */
    DescribeServiceUsagePlan(req, cb) {
        let resp = new DescribeServiceUsagePlanResponse();
        this.request("DescribeServiceUsagePlan", req, resp, cb);
    }

    /**
     * 本接口（CreateUsagePlan）用于创建使用计划。
用户在使用 API 网关时，需要创建使用计划并将其绑定到服务的环境中使用。
     * @param {CreateUsagePlanRequest} req
     * @param {function(string, CreateUsagePlanResponse):void} cb
     * @public
     */
    CreateUsagePlan(req, cb) {
        let resp = new CreateUsagePlanResponse();
        this.request("CreateUsagePlan", req, resp, cb);
    }

    /**
     * 本接口（UpdateApiKey）用于更换用户已创建的一对 API 密钥。
     * @param {UpdateApiKeyRequest} req
     * @param {function(string, UpdateApiKeyResponse):void} cb
     * @public
     */
    UpdateApiKey(req, cb) {
        let resp = new UpdateApiKeyResponse();
        this.request("UpdateApiKey", req, resp, cb);
    }

    /**
     * 删除API网关插件
     * @param {DeletePluginRequest} req
     * @param {function(string, DeletePluginResponse):void} cb
     * @public
     */
    DeletePlugin(req, cb) {
        let resp = new DeletePluginResponse();
        this.request("DeletePlugin", req, resp, cb);
    }

    /**
     * 本接口（BindIPStrategy）用于API绑定IP策略。
     * @param {BindIPStrategyRequest} req
     * @param {function(string, BindIPStrategyResponse):void} cb
     * @public
     */
    BindIPStrategy(req, cb) {
        let resp = new BindIPStrategyResponse();
        this.request("BindIPStrategy", req, resp, cb);
    }

    /**
     * 本接口（EnableApiKey）用于启动一对被禁用的 API 密钥。
     * @param {EnableApiKeyRequest} req
     * @param {function(string, EnableApiKeyResponse):void} cb
     * @public
     */
    EnableApiKey(req, cb) {
        let resp = new EnableApiKeyResponse();
        this.request("EnableApiKey", req, resp, cb);
    }

    /**
     * 本接口（CreateIPStrategy）用于创建服务IP策略。
     * @param {CreateIPStrategyRequest} req
     * @param {function(string, CreateIPStrategyResponse):void} cb
     * @public
     */
    CreateIPStrategy(req, cb) {
        let resp = new CreateIPStrategyResponse();
        this.request("CreateIPStrategy", req, resp, cb);
    }

    /**
     * 删除 API 文档
     * @param {DeleteAPIDocRequest} req
     * @param {function(string, DeleteAPIDocResponse):void} cb
     * @public
     */
    DeleteAPIDoc(req, cb) {
        let resp = new DeleteAPIDocResponse();
        this.request("DeleteAPIDoc", req, resp, cb);
    }

    /**
     * 本接口（UnBindEnvironment）用于将使用计划从特定环境解绑。
     * @param {UnBindEnvironmentRequest} req
     * @param {function(string, UnBindEnvironmentResponse):void} cb
     * @public
     */
    UnBindEnvironment(req, cb) {
        let resp = new UnBindEnvironmentResponse();
        this.request("UnBindEnvironment", req, resp, cb);
    }

    /**
     * 本接口（ModifyApiApp）用于修改已经创建的应用。
     * @param {ModifyApiAppRequest} req
     * @param {function(string, ModifyApiAppResponse):void} cb
     * @public
     */
    ModifyApiApp(req, cb) {
        let resp = new ModifyApiAppResponse();
        this.request("ModifyApiApp", req, resp, cb);
    }

    /**
     * 本接口（DescribeUsagePlan）用于查询一个使用计划的详细信息，包括名称、QPS、创建时间绑定的环境等。
     * @param {DescribeUsagePlanRequest} req
     * @param {function(string, DescribeUsagePlanResponse):void} cb
     * @public
     */
    DescribeUsagePlan(req, cb) {
        let resp = new DescribeUsagePlanResponse();
        this.request("DescribeUsagePlan", req, resp, cb);
    }

    /**
     * 本接口（BindSubDomain）用于绑定自定义域名到服务。
API 网关中每个服务都会提供一个默认的域名供用户调用，但当用户想使用自己的已有域名时，也可以将自定义域名绑定到此服务，在做好备案、与默认域名的 CNAME 后，可直接调用自定义域名。
     * @param {BindSubDomainRequest} req
     * @param {function(string, BindSubDomainResponse):void} cb
     * @public
     */
    BindSubDomain(req, cb) {
        let resp = new BindSubDomainResponse();
        this.request("BindSubDomain", req, resp, cb);
    }


}
module.exports = ApigatewayClient;

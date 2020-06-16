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
const ServiceReleaseVersion = models.ServiceReleaseVersion;
const ApiUsagePlanSet = models.ApiUsagePlanSet;
const DescribeUsagePlanRequest = models.DescribeUsagePlanRequest;
const DeleteUsagePlanResponse = models.DeleteUsagePlanResponse;
const DisableApiKeyResponse = models.DisableApiKeyResponse;
const UnReleaseServiceRequest = models.UnReleaseServiceRequest;
const ModifySubDomainRequest = models.ModifySubDomainRequest;
const DescribeServiceEnvironmentListResponse = models.DescribeServiceEnvironmentListResponse;
const ModifyApiResponse = models.ModifyApiResponse;
const ServiceEnvironmentStrategy = models.ServiceEnvironmentStrategy;
const DemoteServiceUsagePlanRequest = models.DemoteServiceUsagePlanRequest;
const TargetServicesReq = models.TargetServicesReq;
const TsfLoadBalanceConfResp = models.TsfLoadBalanceConfResp;
const CreateIPStrategyRequest = models.CreateIPStrategyRequest;
const IPStrategy = models.IPStrategy;
const DescribeUsagePlansStatusResponse = models.DescribeUsagePlansStatusResponse;
const HealthCheckConf = models.HealthCheckConf;
const DescribeApiUsagePlanResponse = models.DescribeApiUsagePlanResponse;
const DeleteIPStrategyRequest = models.DeleteIPStrategyRequest;
const DomainSets = models.DomainSets;
const DeleteUsagePlanRequest = models.DeleteUsagePlanRequest;
const DeleteServiceRequest = models.DeleteServiceRequest;
const DescribeApiEnvironmentStrategyRequest = models.DescribeApiEnvironmentStrategyRequest;
const UpdateServiceResponse = models.UpdateServiceResponse;
const ServiceConfig = models.ServiceConfig;
const ServiceEnvironmentSet = models.ServiceEnvironmentSet;
const DescribeServiceResponse = models.DescribeServiceResponse;
const UsagePlanEnvironmentStatus = models.UsagePlanEnvironmentStatus;
const ModifyIPStrategyResponse = models.ModifyIPStrategyResponse;
const BindSubDomainResponse = models.BindSubDomainResponse;
const BindEnvironmentResponse = models.BindEnvironmentResponse;
const Tag = models.Tag;
const DescribeServiceEnvironmentStrategyResponse = models.DescribeServiceEnvironmentStrategyResponse;
const ConstantParameter = models.ConstantParameter;
const UsagePlansStatus = models.UsagePlansStatus;
const ModifySubDomainResponse = models.ModifySubDomainResponse;
const LogQuery = models.LogQuery;
const ServiceParameter = models.ServiceParameter;
const ModifyServiceResponse = models.ModifyServiceResponse;
const DisableApiKeyRequest = models.DisableApiKeyRequest;
const PathMapping = models.PathMapping;
const UnBindIPStrategyResponse = models.UnBindIPStrategyResponse;
const BindIPStrategyResponse = models.BindIPStrategyResponse;
const DescribeApisStatusRequest = models.DescribeApisStatusRequest;
const DeleteServiceSubDomainMappingRequest = models.DeleteServiceSubDomainMappingRequest;
const DescribeIPStrategyResponse = models.DescribeIPStrategyResponse;
const DeleteApiResponse = models.DeleteApiResponse;
const CreateApiResponse = models.CreateApiResponse;
const DescribeIPStrategyApisStatusRequest = models.DescribeIPStrategyApisStatusRequest;
const UnBindEnvironmentRequest = models.UnBindEnvironmentRequest;
const OauthConfig = models.OauthConfig;
const ModifyApiEnvironmentStrategyRequest = models.ModifyApiEnvironmentStrategyRequest;
const ModifyUsagePlanResponse = models.ModifyUsagePlanResponse;
const CreateUsagePlanResponse = models.CreateUsagePlanResponse;
const ReqParameter = models.ReqParameter;
const DescribeServicesStatusRequest = models.DescribeServicesStatusRequest;
const RequestConfig = models.RequestConfig;
const DeleteApiKeyResponse = models.DeleteApiKeyResponse;
const UsagePlan = models.UsagePlan;
const DescribeServiceReleaseVersionRequest = models.DescribeServiceReleaseVersionRequest;
const DescribeUsagePlanSecretIdsRequest = models.DescribeUsagePlanSecretIdsRequest;
const DescribeLogSearchResponse = models.DescribeLogSearchResponse;
const ResponseErrorCodeReq = models.ResponseErrorCodeReq;
const CreateServiceRequest = models.CreateServiceRequest;
const DescribeIPStrategysStatusRequest = models.DescribeIPStrategysStatusRequest;
const DemoteServiceUsagePlanResponse = models.DemoteServiceUsagePlanResponse;
const EnableApiKeyResponse = models.EnableApiKeyResponse;
const ServiceReleaseHistory = models.ServiceReleaseHistory;
const UnReleaseServiceResponse = models.UnReleaseServiceResponse;
const DescribeServiceRequest = models.DescribeServiceRequest;
const CreateUsagePlanRequest = models.CreateUsagePlanRequest;
const DescribeUsagePlanSecretIdsResponse = models.DescribeUsagePlanSecretIdsResponse;
const UpdateServiceRequest = models.UpdateServiceRequest;
const ReleaseService = models.ReleaseService;
const DescribeServiceSubDomainMappingsResponse = models.DescribeServiceSubDomainMappingsResponse;
const BindSecretIdsRequest = models.BindSecretIdsRequest;
const UnBindEnvironmentResponse = models.UnBindEnvironmentResponse;
const UsagePlanBindSecret = models.UsagePlanBindSecret;
const DeleteApiKeyRequest = models.DeleteApiKeyRequest;
const ModifyApiEnvironmentStrategyResponse = models.ModifyApiEnvironmentStrategyResponse;
const DomainSetList = models.DomainSetList;
const IPStrategysStatus = models.IPStrategysStatus;
const DescribeApiKeyResponse = models.DescribeApiKeyResponse;
const ModifyApiIncrementResponse = models.ModifyApiIncrementResponse;
const ModifyApiRequest = models.ModifyApiRequest;
const ModifyUsagePlanRequest = models.ModifyUsagePlanRequest;
const ApiRequestConfig = models.ApiRequestConfig;
const ModifyServiceRequest = models.ModifyServiceRequest;
const ApiIdStatus = models.ApiIdStatus;
const CreateApiRequest = models.CreateApiRequest;
const DescribeServiceEnvironmentStrategyRequest = models.DescribeServiceEnvironmentStrategyRequest;
const ReleaseServiceRequest = models.ReleaseServiceRequest;
const DeleteServiceResponse = models.DeleteServiceResponse;
const DescribeServiceEnvironmentReleaseHistoryResponse = models.DescribeServiceEnvironmentReleaseHistoryResponse;
const Environment = models.Environment;
const ServiceReleaseHistoryInfo = models.ServiceReleaseHistoryInfo;
const ReleaseServiceResponse = models.ReleaseServiceResponse;
const UnBindIPStrategyRequest = models.UnBindIPStrategyRequest;
const ModifyApiIncrementRequest = models.ModifyApiIncrementRequest;
const GenerateApiDocumentRequest = models.GenerateApiDocumentRequest;
const ServiceUsagePlanSet = models.ServiceUsagePlanSet;
const DescribeIPStrategyApisStatusResponse = models.DescribeIPStrategyApisStatusResponse;
const ModifyServiceEnvironmentStrategyResponse = models.ModifyServiceEnvironmentStrategyResponse;
const UpdateApiKeyResponse = models.UpdateApiKeyResponse;
const DescribeApisStatusResponse = models.DescribeApisStatusResponse;
const DescribeApiKeysStatusRequest = models.DescribeApiKeysStatusRequest;
const DescribeApiResponse = models.DescribeApiResponse;
const BindSecretIdsResponse = models.BindSecretIdsResponse;
const CreateApiRsp = models.CreateApiRsp;
const UsagePlanBindEnvironment = models.UsagePlanBindEnvironment;
const DeleteApiRequest = models.DeleteApiRequest;
const DescribeServiceSubDomainMappingsRequest = models.DescribeServiceSubDomainMappingsRequest;
const DescribeServiceEnvironmentListRequest = models.DescribeServiceEnvironmentListRequest;
const ServiceSubDomainMappings = models.ServiceSubDomainMappings;
const DescribeApiKeyRequest = models.DescribeApiKeyRequest;
const DescribeUsagePlanResponse = models.DescribeUsagePlanResponse;
const Filter = models.Filter;
const UsagePlanBindSecretStatus = models.UsagePlanBindSecretStatus;
const DeleteServiceSubDomainMappingResponse = models.DeleteServiceSubDomainMappingResponse;
const DescribeServiceUsagePlanRequest = models.DescribeServiceUsagePlanRequest;
const DescribeUsagePlansStatusRequest = models.DescribeUsagePlansStatusRequest;
const UsagePlanEnvironment = models.UsagePlanEnvironment;
const ModifyIPStrategyRequest = models.ModifyIPStrategyRequest;
const UnBindSecretIdsRequest = models.UnBindSecretIdsRequest;
const ApiEnvironmentStrategy = models.ApiEnvironmentStrategy;
const UnBindSecretIdsResponse = models.UnBindSecretIdsResponse;
const ApiUsagePlan = models.ApiUsagePlan;
const IPStrategyApi = models.IPStrategyApi;
const DocumentSDK = models.DocumentSDK;
const ModifyServiceEnvironmentStrategyRequest = models.ModifyServiceEnvironmentStrategyRequest;
const DescribeServiceSubDomainsRequest = models.DescribeServiceSubDomainsRequest;
const GenerateApiDocumentResponse = models.GenerateApiDocumentResponse;
const DescribeUsagePlanEnvironmentsResponse = models.DescribeUsagePlanEnvironmentsResponse;
const DescribeServiceSubDomainsResponse = models.DescribeServiceSubDomainsResponse;
const BindSubDomainRequest = models.BindSubDomainRequest;
const IPStrategyApiStatus = models.IPStrategyApiStatus;
const CreateIPStrategyResponse = models.CreateIPStrategyResponse;
const BindIPStrategyRequest = models.BindIPStrategyRequest;
const MicroServiceReq = models.MicroServiceReq;
const ErrorCodes = models.ErrorCodes;
const ServiceEnvironmentStrategyStatus = models.ServiceEnvironmentStrategyStatus;
const DescribeApiEnvironmentStrategyResponse = models.DescribeApiEnvironmentStrategyResponse;
const MicroService = models.MicroService;
const ApiEnvironmentStrategyStataus = models.ApiEnvironmentStrategyStataus;
const DeleteIPStrategyResponse = models.DeleteIPStrategyResponse;
const ApiKey = models.ApiKey;
const BindEnvironmentRequest = models.BindEnvironmentRequest;
const DescribeIPStrategyRequest = models.DescribeIPStrategyRequest;
const DescribeUsagePlanEnvironmentsRequest = models.DescribeUsagePlanEnvironmentsRequest;
const CreateApiKeyResponse = models.CreateApiKeyResponse;
const DescribeServiceReleaseVersionResponse = models.DescribeServiceReleaseVersionResponse;
const RequestParameter = models.RequestParameter;
const UsagePlanInfo = models.UsagePlanInfo;
const DescribeServiceEnvironmentReleaseHistoryRequest = models.DescribeServiceEnvironmentReleaseHistoryRequest;
const UsagePlanStatusInfo = models.UsagePlanStatusInfo;
const CreateServiceResponse = models.CreateServiceResponse;
const DesApisStatus = models.DesApisStatus;
const DescribeApiKeysStatusResponse = models.DescribeApiKeysStatusResponse;
const ServicesStatus = models.ServicesStatus;
const DescribeLogSearchRequest = models.DescribeLogSearchRequest;
const ApisStatus = models.ApisStatus;
const ApiKeysStatus = models.ApiKeysStatus;
const DescribeServiceUsagePlanResponse = models.DescribeServiceUsagePlanResponse;
const DescribeApiUsagePlanRequest = models.DescribeApiUsagePlanRequest;
const UnBindSubDomainRequest = models.UnBindSubDomainRequest;
const DescribeApiRequest = models.DescribeApiRequest;
const DescribeIPStrategysStatusResponse = models.DescribeIPStrategysStatusResponse;
const ApiInfo = models.ApiInfo;
const EnvironmentStrategy = models.EnvironmentStrategy;
const EnableApiKeyRequest = models.EnableApiKeyRequest;
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
     * 本接口（DescribeApiKeysStatus）用于查询密钥列表。
当用户创建了多个密钥对时，可使用本接口查询一个或多个 API 密钥信息，本接口不会显示密钥 Key。
     * @param {DescribeApiKeysStatusRequest} req
     * @param {function(string, DescribeApiKeysStatusResponse):void} cb
     * @public
     */
    DescribeApiKeysStatus(req, cb) {
        let resp = new DescribeApiKeysStatusResponse();
        this.request("DescribeApiKeysStatus", req, resp, cb);
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

    /**
     * 本接口（DescribeApi）用于查询用户部署于 API 网关的 API 接口的详细信息。​
     * @param {DescribeApiRequest} req
     * @param {function(string, DescribeApiResponse):void} cb
     * @public
     */
    DescribeApi(req, cb) {
        let resp = new DescribeApiResponse();
        this.request("DescribeApi", req, resp, cb);
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
     * 本接口（GenerateApiDocument）用于自动生成 API 文档和 SDK，一个服务的一个环境生成一份文档和 SDK。
     * @param {GenerateApiDocumentRequest} req
     * @param {function(string, GenerateApiDocumentResponse):void} cb
     * @public
     */
    GenerateApiDocument(req, cb) {
        let resp = new GenerateApiDocumentResponse();
        this.request("GenerateApiDocument", req, resp, cb);
    }


}
module.exports = ApigatewayClient;

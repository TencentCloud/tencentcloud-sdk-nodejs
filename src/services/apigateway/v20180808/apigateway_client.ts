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
  IPStrategyApiStatus,
  UnBindSubDomainResponse,
  UpstreamInfo,
  UpdateApiKeyRequest,
  Service,
  DeleteAPIDocRequest,
  AttachedPluginInfo,
  ApiUsagePlanSet,
  DescribeAPIDocDetailRequest,
  CreateApiResultInfo,
  ModifyAPIDocResponse,
  AttachedApiSummary,
  DescribeUsagePlanRequest,
  DeleteUsagePlanResponse,
  ImportOpenApiResponse,
  DisableApiKeyResponse,
  DescribeApiResponse,
  DescribeServiceForApiAppRequest,
  UnReleaseServiceRequest,
  DescribeExclusiveInstancesStatusResponse,
  ModifySubDomainRequest,
  DescribeApiAppsStatusRequest,
  DescribeServiceUsagePlanRequest,
  DescribeServiceEnvironmentListResponse,
  DescribeApiAppBindApisStatusRequest,
  ModifyApiResponse,
  DescribeApiResultServiceParametersInfo,
  CreateApiRspSet,
  ApiInfo,
  TargetServicesReq,
  DescribeUsagePlansStatusRequest,
  TsfLoadBalanceConfResp,
  CreateIPStrategyRequest,
  IPStrategy,
  DescribeUsagePlansStatusResponse,
  InstanceNetworkConfig,
  HealthCheckConf,
  DeleteUpstreamRequest,
  Plugin,
  UnbindApiAppResponse,
  ModifyUpstreamRequest,
  DescribeApiUsagePlanResponse,
  DeleteIPStrategyRequest,
  DescribeApiAppRequest,
  DescribePluginResponse,
  DescribeUpstreamBindApisRequest,
  DescribePluginsByApiResponse,
  DescribeExclusiveInstancesResponse,
  K8sService,
  DeleteUsagePlanRequest,
  DeleteServiceRequest,
  DescribeApiEnvironmentStrategyRequest,
  UpstreamHealthCheckerReqHeaders,
  ServiceEnvironmentStrategy,
  DescribeServiceForApiAppResponse,
  ServiceConfig,
  DeleteApiAppResponse,
  DescribeServiceResponse,
  UsagePlanEnvironmentStatus,
  DescribeExclusiveInstancesRequest,
  BindSubDomainResponse,
  BindEnvironmentResponse,
  Tag,
  DescribeExclusiveInstanceDetailResponse,
  DescribeApiBindApiAppsStatusResponse,
  ConstantParameter,
  DescribeApiForApiAppRequest,
  APIDocs,
  LogQuery,
  ServiceParameter,
  ModifyServiceResponse,
  DisableApiKeyRequest,
  UsagePlanBindSecret,
  PathMapping,
  UnBindIPStrategyResponse,
  DescribeExclusiveInstanceDetailRequest,
  ModifyPluginRequest,
  BindIPStrategyResponse,
  AvailableApiInfo,
  DescribeApisStatusRequest,
  DeleteServiceSubDomainMappingRequest,
  BindApiAppRequest,
  DescribeIPStrategyResponse,
  DescribePluginRequest,
  DetachPluginRequest,
  AttachedApiInfo,
  CreateApiResponse,
  DescribeIPStrategyApisStatusRequest,
  ModifyIPStrategyResponse,
  DescribeUpstreamInfo,
  ModifyApiEnvironmentStrategyRequest,
  NetworkConfig,
  ServiceReleaseHistory,
  DescribeUpstreamBindApisResponse,
  IPStrategiesStatus,
  CreateUsagePlanResponse,
  DomainSets,
  DeletePluginRequest,
  Base64EncodedTriggerRule,
  RequestConfig,
  DeleteApiKeyResponse,
  EnvironmentStrategy,
  ModifyExclusiveInstanceRequest,
  UsagePlan,
  DescribeServiceReleaseVersionRequest,
  DescribeUsagePlanSecretIdsRequest,
  DescribeLogSearchResponse,
  ModifyAPIDocRequest,
  UnBindIPStrategyRequest,
  DescribeUpstreamsResponse,
  DescribePluginApisRequest,
  ResponseErrorCodeReq,
  InstanceSummary,
  CreateServiceRequest,
  DescribeIPStrategysStatusRequest,
  DemoteServiceUsagePlanResponse,
  DescribePluginApisResponse,
  EnableApiKeyResponse,
  DeleteApiAppRequest,
  UnReleaseServiceResponse,
  CreateAPIDocResponse,
  DescribeServiceRequest,
  UsagePlansStatus,
  CreateUsagePlanRequest,
  DescribeUsagePlanSecretIdsResponse,
  CreatePluginRequest,
  MicroServiceReq,
  ModifySubDomainResponse,
  DescribeExclusiveInstanceRegionsResponse,
  BindSecretIdsRequest,
  ParameterInfo,
  ModifyUpstreamResultInfo,
  DeleteApiKeyRequest,
  DescribeApisStatusResultInfo,
  DescribeIPStrategyApisStatusResponse,
  ModifyApiAppResponse,
  UpdateApiAppKeyRequest,
  ApigatewayTags,
  DomainSetList,
  ServicesStatus,
  DescribeApiKeyResponse,
  ModifyApiIncrementResponse,
  ModifyApiRequest,
  DescribeAllPluginApisResponse,
  ModifyUsagePlanRequest,
  ApiRequestConfig,
  ModifyServiceRequest,
  DescribeAllPluginApisRequest,
  ApiIdStatus,
  CreateApiRequest,
  UnBindEnvironmentRequest,
  DescribeServiceEnvironmentStrategyRequest,
  DescribeInstancesNetworkConfigResponse,
  ReleaseServiceRequest,
  DeleteServiceResponse,
  DescribeServiceEnvironmentReleaseHistoryResponse,
  Environment,
  DescribeAPIDocsRequest,
  DescribePluginsByApiRequest,
  ServiceReleaseHistoryInfo,
  CreatePluginResponse,
  ModifyExclusiveInstanceResponse,
  K8sLabel,
  DescribePluginsResponse,
  ReleaseServiceResponse,
  APIDocInfo,
  CosConfig,
  ModifyApiIncrementRequest,
  ServiceUsagePlanSet,
  CreateUpstreamRequest,
  ModifyServiceEnvironmentStrategyResponse,
  UpdateApiKeyResponse,
  DescribeApiBindApiAppsStatusRequest,
  DescribeApisStatusResponse,
  DescribeApiKeysStatusRequest,
  DemoteServiceUsagePlanRequest,
  BindSecretIdsResponse,
  CreateApiRsp,
  UsagePlanBindEnvironment,
  InstanceInfo,
  CreateExclusiveInstancesRequest,
  DescribeExclusiveInstanceRegionsRequest,
  DescribeApiAppResponse,
  DescribeServiceSubDomainMappingsResponse,
  OauthConfig,
  DescribeApiAppsStatusResponse,
  ServiceSubDomainMappings,
  DescribeApiKeyRequest,
  DescribeAPIDocDetailResponse,
  Filter,
  BindApiAppResponse,
  UsagePlanBindSecretStatus,
  DeleteServiceSubDomainMappingResponse,
  CreateApiKeyResponse,
  DeleteApiRequest,
  DescribeUpstreamsRequest,
  UsagePlanEnvironment,
  ModifyIPStrategyRequest,
  ModifyPluginResponse,
  UnBindSecretIdsRequest,
  ApiEnvironmentStrategy,
  VpcConfig,
  CreateUpstreamResponse,
  ResetAPIDocPasswordRequest,
  ApiUsagePlan,
  IPStrategyApi,
  DescribeAPIDocsResponse,
  DescribeServiceSubDomainMappingsRequest,
  DescribePluginsRequest,
  DeletePluginResponse,
  DescribeUpstreamBindApis,
  ModifyServiceEnvironmentStrategyRequest,
  CreateAPIDocRequest,
  DescribeApiAppBindApisStatusResponse,
  DescribeServiceSubDomainsRequest,
  ModifyApiAppRequest,
  ReleaseService,
  DescribeUsagePlanEnvironmentsResponse,
  DescribeServiceSubDomainsResponse,
  AttachPluginRequest,
  DescribeApisStatusResultApiIdStatusSetInfo,
  ModifyApiEnvironmentStrategyResponse,
  BindSubDomainRequest,
  ApiAppInfos,
  DescribeServiceReleaseVersionResultVersionListInfo,
  CreateIPStrategyResponse,
  UnBindEnvironmentResponse,
  DeleteApiResponse,
  BindIPStrategyRequest,
  UpdateServiceRequest,
  BuildAPIDocResponse,
  ErrorCodes,
  DescribeServiceEnvironmentListRequest,
  ServiceEnvironmentStrategyStatus,
  MicroService,
  DescribeApiEnvironmentStrategyResponse,
  DescribeApiRequest,
  PluginSummary,
  ModifyUsagePlanResponse,
  ApiAppInfo,
  DeleteIPStrategyResponse,
  ApiInfoSummary,
  ApiKey,
  BindApiInfo,
  ApiAppApiInfo,
  DescribeUsagePlanResponse,
  ReqParameter,
  ApiEnvironmentStrategyStatus,
  AttachPluginResponse,
  BindEnvironmentRequest,
  ModifyUpstreamResponse,
  DescribeIPStrategyRequest,
  DescribeApiForApiAppResponse,
  DescribeInstancesNetworkConfigRequest,
  InstanceParameterInput,
  DescribeUsagePlanEnvironmentsRequest,
  ImportOpenApiRequest,
  DescribeServiceReleaseVersionResponse,
  UpstreamNode,
  ApiAppApiInfos,
  DeleteUpstreamResponse,
  UpdateServiceResponse,
  UsagePlanInfo,
  DescribeServiceEnvironmentReleaseHistoryRequest,
  UnbindApiAppRequest,
  ServiceEnvironmentSet,
  CreateServiceResponse,
  DeleteAPIDocResponse,
  DescribeServiceEnvironmentStrategyResponse,
  DesApisStatus,
  DescribeApiKeysStatusResponse,
  UsagePlanStatusInfo,
  DescribeLogSearchRequest,
  BuildAPIDocRequest,
  DetachPluginResponse,
  ApiKeysStatus,
  CreateExclusiveInstancesResponse,
  APIDoc,
  DescribeServiceUsagePlanResponse,
  CreateApiAppResponse,
  DescribeApiUsagePlanRequest,
  UnBindSubDomainRequest,
  DescribeExclusiveInstancesResult,
  AttachedPluginSummary,
  DescribeIPStrategysStatusResponse,
  UpdateApiAppKeyResponse,
  DescribeExclusiveInstancesStatusRequest,
  InstanceDetail,
  UnBindSecretIdsResponse,
  CreateApiAppRequest,
  EnableApiKeyRequest,
  ResetAPIDocPasswordResponse,
  DescribeServicesStatusRequest,
  RequestParameter,
  UpstreamHealthChecker,
  InstanceChargePrepaid,
  ServiceReleaseVersion,
  DescribeServicesStatusResponse,
  CreateApiKeyRequest,
} from "./apigateway_models"

/**
 * apigateway client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("apigateway.tencentcloudapi.com", "2018-08-08", clientConfig)
  }

  /**
     * 本接口（CreateService）用于创建服务。
API 网关使用的最大单元为服务，每个服务中可创建多个 API 接口。每个服务有一个默认域名供客户调用，用户也可绑定自定义域名到此服务中。
     */
  async CreateService(
    req: CreateServiceRequest,
    cb?: (error: string, rep: CreateServiceResponse) => void
  ): Promise<CreateServiceResponse> {
    return this.request("CreateService", req, cb)
  }

  /**
   * 本接口（DescribeUsagePlanStatus）用于查询使用计划的列表。
   */
  async DescribeUsagePlansStatus(
    req: DescribeUsagePlansStatusRequest,
    cb?: (error: string, rep: DescribeUsagePlansStatusResponse) => void
  ): Promise<DescribeUsagePlansStatusResponse> {
    return this.request("DescribeUsagePlansStatus", req, cb)
  }

  /**
   * 查询 API 文档详情
   */
  async DescribeAPIDocDetail(
    req: DescribeAPIDocDetailRequest,
    cb?: (error: string, rep: DescribeAPIDocDetailResponse) => void
  ): Promise<DescribeAPIDocDetailResponse> {
    return this.request("DescribeAPIDocDetail", req, cb)
  }

  /**
   * 本接口（DescribeApiAppBindApisStatus）查询应用绑定的Api列表。
   */
  async DescribeApiAppBindApisStatus(
    req: DescribeApiAppBindApisStatusRequest,
    cb?: (error: string, rep: DescribeApiAppBindApisStatusResponse) => void
  ): Promise<DescribeApiAppBindApisStatusResponse> {
    return this.request("DescribeApiAppBindApisStatus", req, cb)
  }

  /**
     * 本接口（DescribeUsagePlanSecretIds）用于查询使用计划绑定的密钥列表。
在 API 网关中，一个使用计划可绑定多个密钥对，可使用本接口查询使用计划绑定的密钥列表。
     */
  async DescribeUsagePlanSecretIds(
    req: DescribeUsagePlanSecretIdsRequest,
    cb?: (error: string, rep: DescribeUsagePlanSecretIdsResponse) => void
  ): Promise<DescribeUsagePlanSecretIdsResponse> {
    return this.request("DescribeUsagePlanSecretIds", req, cb)
  }

  /**
   * 本接口（DescribeServiceForApiApp）用于应用使用者查询一个服务的详细信息、包括服务的描述、域名、协议等信息。
   */
  async DescribeServiceForApiApp(
    req: DescribeServiceForApiAppRequest,
    cb?: (error: string, rep: DescribeServiceForApiAppResponse) => void
  ): Promise<DescribeServiceForApiAppResponse> {
    return this.request("DescribeServiceForApiApp", req, cb)
  }

  /**
   * 本接口（ModifyIPStrategy）用于修改服务IP策略。
   */
  async ModifyIPStrategy(
    req: ModifyIPStrategyRequest,
    cb?: (error: string, rep: ModifyIPStrategyResponse) => void
  ): Promise<ModifyIPStrategyResponse> {
    return this.request("ModifyIPStrategy", req, cb)
  }

  /**
   * 本接口（UpdateService）用于从服务已发布的环境中将运行版本切换到特定版本。用户在使用 API 网关创建服务并发布服务到某个环境后，如在开发过程产生多个版本需要切换，此时可调用本接口。
   */
  async UpdateService(
    req: UpdateServiceRequest,
    cb?: (error: string, rep: UpdateServiceResponse) => void
  ): Promise<UpdateServiceResponse> {
    return this.request("UpdateService", req, cb)
  }

  /**
   * 修改API网关插件。
   */
  async ModifyPlugin(
    req: ModifyPluginRequest,
    cb?: (error: string, rep: ModifyPluginResponse) => void
  ): Promise<ModifyPluginResponse> {
    return this.request("ModifyPlugin", req, cb)
  }

  /**
   * 本接口（DeleteApiApp）用于删除已经创建的应用。
   */
  async DeleteApiApp(
    req: DeleteApiAppRequest,
    cb?: (error: string, rep: DeleteApiAppResponse) => void
  ): Promise<DeleteApiAppResponse> {
    return this.request("DeleteApiApp", req, cb)
  }

  /**
   * 展示API上已绑定的插件列表。
   */
  async DescribePluginsByApi(
    req: DescribePluginsByApiRequest,
    cb?: (error: string, rep: DescribePluginsByApiResponse) => void
  ): Promise<DescribePluginsByApiResponse> {
    return this.request("DescribePluginsByApi", req, cb)
  }

  /**
   * 本接口（DescribeServicesStatus）用于搜索查询某一个服务或多个服务的列表，并返回服务相关的域名、时间等信息。
   */
  async DescribeServicesStatus(
    req: DescribeServicesStatusRequest,
    cb?: (error: string, rep: DescribeServicesStatusResponse) => void
  ): Promise<DescribeServicesStatusResponse> {
    return this.request("DescribeServicesStatus", req, cb)
  }

  /**
   * 查询 API 文档列表
   */
  async DescribeAPIDocs(
    req: DescribeAPIDocsRequest,
    cb?: (error: string, rep: DescribeAPIDocsResponse) => void
  ): Promise<DescribeAPIDocsResponse> {
    return this.request("DescribeAPIDocs", req, cb)
  }

  /**
     * 本接口（CreateUsagePlan）用于创建使用计划。
用户在使用 API 网关时，需要创建使用计划并将其绑定到服务的环境中使用。
     */
  async CreateUsagePlan(
    req: CreateUsagePlanRequest,
    cb?: (error: string, rep: CreateUsagePlanResponse) => void
  ): Promise<CreateUsagePlanResponse> {
    return this.request("CreateUsagePlan", req, cb)
  }

  /**
   * 展示插件相关的API列表，包括已绑定的和未绑定的API信息。
   */
  async DescribeAllPluginApis(
    req: DescribeAllPluginApisRequest,
    cb?: (error: string, rep: DescribeAllPluginApisResponse) => void
  ): Promise<DescribeAllPluginApisResponse> {
    return this.request("DescribeAllPluginApis", req, cb)
  }

  /**
   * 本接口（UnBindIPStrategy）用于服务解绑IP策略。
   */
  async UnBindIPStrategy(
    req: UnBindIPStrategyRequest,
    cb?: (error: string, rep: UnBindIPStrategyResponse) => void
  ): Promise<UnBindIPStrategyResponse> {
    return this.request("UnBindIPStrategy", req, cb)
  }

  /**
   * 重置API文档密码
   */
  async ResetAPIDocPassword(
    req: ResetAPIDocPasswordRequest,
    cb?: (error: string, rep: ResetAPIDocPasswordResponse) => void
  ): Promise<ResetAPIDocPasswordResponse> {
    return this.request("ResetAPIDocPassword", req, cb)
  }

  /**
   * 查询指定插件下绑定的API信息
   */
  async DescribePluginApis(
    req: DescribePluginApisRequest,
    cb?: (error: string, rep: DescribePluginApisResponse) => void
  ): Promise<DescribePluginApisResponse> {
    return this.request("DescribePluginApis", req, cb)
  }

  /**
   * 本接口（DisableApiKey）用于禁用一对 API 密钥。
   */
  async DisableApiKey(
    req: DisableApiKeyRequest,
    cb?: (error: string, rep: DisableApiKeyResponse) => void
  ): Promise<DisableApiKeyResponse> {
    return this.request("DisableApiKey", req, cb)
  }

  /**
   * 本接口（DescribeApiEnvironmentStrategy）用于展示API绑定的限流策略。
   */
  async DescribeApiEnvironmentStrategy(
    req: DescribeApiEnvironmentStrategyRequest,
    cb?: (error: string, rep: DescribeApiEnvironmentStrategyResponse) => void
  ): Promise<DescribeApiEnvironmentStrategyResponse> {
    return this.request("DescribeApiEnvironmentStrategy", req, cb)
  }

  /**
   * 本接口（DescribeApiAppsStatus）查询应用列表。
   */
  async DescribeApiAppsStatus(
    req: DescribeApiAppsStatusRequest,
    cb?: (error: string, rep: DescribeApiAppsStatusResponse) => void
  ): Promise<DescribeApiAppsStatusResponse> {
    return this.request("DescribeApiAppsStatus", req, cb)
  }

  /**
   * 本接口（DescribeApiApp）用于根据应用ID搜索应用。此接口已下线，如需使用功能请使用DescribeApiAppsStatus接口。
   */
  async DescribeApiApp(
    req: DescribeApiAppRequest,
    cb?: (error: string, rep: DescribeApiAppResponse) => void
  ): Promise<DescribeApiAppResponse> {
    return this.request("DescribeApiApp", req, cb)
  }

  /**
   * 本接口（ModifyUsagePlan）用于修改使用计划的名称，描述及 QPS。
   */
  async ModifyUsagePlan(
    req: ModifyUsagePlanRequest,
    cb?: (error: string, rep: ModifyUsagePlanResponse) => void
  ): Promise<ModifyUsagePlanResponse> {
    return this.request("ModifyUsagePlan", req, cb)
  }

  /**
   * 查询后端通道列表详情
   */
  async DescribeUpstreams(
    req: DescribeUpstreamsRequest,
    cb?: (error: string, rep: DescribeUpstreamsResponse) => void
  ): Promise<DescribeUpstreamsResponse> {
    return this.request("DescribeUpstreams", req, cb)
  }

  /**
   * 本接口（DescribeApi）用于查询用户 API 网关的 API 接口的详细信息。​
   */
  async DescribeApi(
    req: DescribeApiRequest,
    cb?: (error: string, rep: DescribeApiResponse) => void
  ): Promise<DescribeApiResponse> {
    return this.request("DescribeApi", req, cb)
  }

  /**
   * 本接口（UnbindApiApp）用于解除应用和API绑定。
   */
  async UnbindApiApp(
    req: UnbindApiAppRequest,
    cb?: (error: string, rep: UnbindApiAppResponse) => void
  ): Promise<UnbindApiAppResponse> {
    return this.request("UnbindApiApp", req, cb)
  }

  /**
   * 本接口（DeleteUsagePlan）用于删除使用计划。
   */
  async DeleteUsagePlan(
    req: DeleteUsagePlanRequest,
    cb?: (error: string, rep: DeleteUsagePlanResponse) => void
  ): Promise<DeleteUsagePlanResponse> {
    return this.request("DeleteUsagePlan", req, cb)
  }

  /**
   * 本接口（CreateApiApp）用于创建应用。
   */
  async CreateApiApp(
    req: CreateApiAppRequest,
    cb?: (error: string, rep: CreateApiAppResponse) => void
  ): Promise<CreateApiAppResponse> {
    return this.request("CreateApiApp", req, cb)
  }

  /**
     * 本接口（DescribeApiKeysStatus）用于查询密钥列表。
当用户创建了多个密钥对时，可使用本接口查询一个或多个 API 密钥信息。
     */
  async DescribeApiKeysStatus(
    req: DescribeApiKeysStatusRequest,
    cb?: (error: string, rep: DescribeApiKeysStatusResponse) => void
  ): Promise<DescribeApiKeysStatusResponse> {
    return this.request("DescribeApiKeysStatus", req, cb)
  }

  /**
   * 创建 API 文档
   */
  async CreateAPIDoc(
    req: CreateAPIDocRequest,
    cb?: (error: string, rep: CreateAPIDocResponse) => void
  ): Promise<CreateAPIDocResponse> {
    return this.request("CreateAPIDoc", req, cb)
  }

  /**
   * 本接口（DescribeIPStrategyApisStatus）用于查询IP策略可以绑定的API列表。即服务下所有API和该策略已绑定API的差集。
   */
  async DescribeIPStrategyApisStatus(
    req: DescribeIPStrategyApisStatusRequest,
    cb?: (error: string, rep: DescribeIPStrategyApisStatusResponse) => void
  ): Promise<DescribeIPStrategyApisStatusResponse> {
    return this.request("DescribeIPStrategyApisStatus", req, cb)
  }

  /**
     * 本接口（UnReleaseService）用于下线服务。
用户发布服务到某个环境后，此服务中的 API 方可被调用者进行调用，当用户需要将此服务从发布环境中下线时，可调用此 API。下线后的服务不可被调用。
     */
  async UnReleaseService(
    req: UnReleaseServiceRequest,
    cb?: (error: string, rep: UnReleaseServiceResponse) => void
  ): Promise<UnReleaseServiceResponse> {
    return this.request("UnReleaseService", req, cb)
  }

  /**
     * 本接口（DescribeServiceEnvironmentReleaseHistory）用于查询服务环境的发布历史。
用户在创建好服务后需要发布到某个环境中才能进行使用，本接口用于查询一个服务某个环境的发布记录。
     */
  async DescribeServiceEnvironmentReleaseHistory(
    req: DescribeServiceEnvironmentReleaseHistoryRequest,
    cb?: (error: string, rep: DescribeServiceEnvironmentReleaseHistoryResponse) => void
  ): Promise<DescribeServiceEnvironmentReleaseHistoryResponse> {
    return this.request("DescribeServiceEnvironmentReleaseHistory", req, cb)
  }

  /**
   * 本接口（DeleteApi）用于删除已经创建的API。
   */
  async DeleteApi(
    req: DeleteApiRequest,
    cb?: (error: string, rep: DeleteApiResponse) => void
  ): Promise<DeleteApiResponse> {
    return this.request("DeleteApi", req, cb)
  }

  /**
   * 本接口（UpdateApiAppKey）用于更新应用密钥。
   */
  async UpdateApiAppKey(
    req: UpdateApiAppKeyRequest,
    cb?: (error: string, rep: UpdateApiAppKeyResponse) => void
  ): Promise<UpdateApiAppKeyResponse> {
    return this.request("UpdateApiAppKey", req, cb)
  }

  /**
   * 创建专享实例
   */
  async CreateExclusiveInstances(
    req: CreateExclusiveInstancesRequest,
    cb?: (error: string, rep: CreateExclusiveInstancesResponse) => void
  ): Promise<CreateExclusiveInstancesResponse> {
    return this.request("CreateExclusiveInstances", req, cb)
  }

  /**
     * 本接口（DescribeServiceSubDomainMappings）用于查询自定义域名的路径映射。
API 网关可绑定自定义域名到服务，并且可以对自定义域名的路径进行映射，可自定义不同的路径映射到服务中的三个环境，本接口用于查询绑定服务的自定义域名的路径映射列表。
     */
  async DescribeServiceSubDomainMappings(
    req: DescribeServiceSubDomainMappingsRequest,
    cb?: (error: string, rep: DescribeServiceSubDomainMappingsResponse) => void
  ): Promise<DescribeServiceSubDomainMappingsResponse> {
    return this.request("DescribeServiceSubDomainMappings", req, cb)
  }

  /**
     * 本接口（BindEnvironment）用于绑定使用计划到服务或API。
用户在发布服务到某个环境中后，如果 API 需要鉴权，还需要绑定使用计划才能进行调用，此接口用户将使用计划绑定到特定环境。
目前支持绑定使用计划到API，但是同一个服务不能同时存在绑定到服务的使用计划和绑定到API的使用计划，所以对已经绑定过服务级别使用计划的环境，请先使用 服务级别使用计划降级 接口进行降级操作。
     */
  async BindEnvironment(
    req: BindEnvironmentRequest,
    cb?: (error: string, rep: BindEnvironmentResponse) => void
  ): Promise<BindEnvironmentResponse> {
    return this.request("BindEnvironment", req, cb)
  }

  /**
   * 修改 API 文档
   */
  async ModifyAPIDoc(
    req: ModifyAPIDocRequest,
    cb?: (error: string, rep: ModifyAPIDocResponse) => void
  ): Promise<ModifyAPIDocResponse> {
    return this.request("ModifyAPIDoc", req, cb)
  }

  /**
   * 本接口（UnBindSecretIds）用于为使用计划解绑密钥。
   */
  async UnBindSecretIds(
    req: UnBindSecretIdsRequest,
    cb?: (error: string, rep: UnBindSecretIdsResponse) => void
  ): Promise<UnBindSecretIdsResponse> {
    return this.request("UnBindSecretIds", req, cb)
  }

  /**
   * 本接口（DescribeIPStrategy）用于查询IP策略详情。
   */
  async DescribeIPStrategy(
    req: DescribeIPStrategyRequest,
    cb?: (error: string, rep: DescribeIPStrategyResponse) => void
  ): Promise<DescribeIPStrategyResponse> {
    return this.request("DescribeIPStrategy", req, cb)
  }

  /**
   * 修改后端通道
   */
  async ModifyUpstream(
    req: ModifyUpstreamRequest,
    cb?: (error: string, rep: ModifyUpstreamResponse) => void
  ): Promise<ModifyUpstreamResponse> {
    return this.request("ModifyUpstream", req, cb)
  }

  /**
     * 本接口（DescribeServiceReleaseVersion）查询一个服务下面所有已经发布的版本列表。
用户在发布服务时，常有多个版本发布，可使用本接口查询已发布的版本。
     */
  async DescribeServiceReleaseVersion(
    req: DescribeServiceReleaseVersionRequest,
    cb?: (error: string, rep: DescribeServiceReleaseVersionResponse) => void
  ): Promise<DescribeServiceReleaseVersionResponse> {
    return this.request("DescribeServiceReleaseVersion", req, cb)
  }

  /**
   * 本接口（DescribeApisStatus）用于查看一个服务下的某个 API 或所有 API 列表及其相关信息。
   */
  async DescribeApisStatus(
    req: DescribeApisStatusRequest,
    cb?: (error: string, rep: DescribeApisStatusResponse) => void
  ): Promise<DescribeApisStatusResponse> {
    return this.request("DescribeApisStatus", req, cb)
  }

  /**
   * 本接口（CreateApiKey）用于创建一对新的 API 密钥。
   */
  async CreateApiKey(
    req: CreateApiKeyRequest,
    cb?: (error: string, rep: CreateApiKeyResponse) => void
  ): Promise<CreateApiKeyResponse> {
    return this.request("CreateApiKey", req, cb)
  }

  /**
   * 本接口（ModifySubDomain）用于修改服务的自定义域名设置中的路径映射，可以修改绑定自定义域名之前的路径映射规则。
   */
  async ModifySubDomain(
    req: ModifySubDomainRequest,
    cb?: (error: string, rep: ModifySubDomainResponse) => void
  ): Promise<ModifySubDomainResponse> {
    return this.request("ModifySubDomain", req, cb)
  }

  /**
   * 本接口（DeleteIPStrategy）用于删除服务IP策略。
   */
  async DeleteIPStrategy(
    req: DeleteIPStrategyRequest,
    cb?: (error: string, rep: DeleteIPStrategyResponse) => void
  ): Promise<DeleteIPStrategyResponse> {
    return this.request("DeleteIPStrategy", req, cb)
  }

  /**
     * 本接口（ReleaseService）用于发布服务。
API 网关的服务创建后，需要发布到某个环境方生效后，使用者才能进行调用，此接口用于发布服务到环境，如 release 环境。
     */
  async ReleaseService(
    req: ReleaseServiceRequest,
    cb?: (error: string, rep: ReleaseServiceResponse) => void
  ): Promise<ReleaseServiceResponse> {
    return this.request("ReleaseService", req, cb)
  }

  /**
   * 本接口（DescribeExclusiveInstances）用于查询独享实例列表信息。
   */
  async DescribeExclusiveInstances(
    req: DescribeExclusiveInstancesRequest,
    cb?: (error: string, rep: DescribeExclusiveInstancesResponse) => void
  ): Promise<DescribeExclusiveInstancesResponse> {
    return this.request("DescribeExclusiveInstances", req, cb)
  }

  /**
   * 本接口（DescribeService）用于查询一个服务的详细信息、包括服务的描述、域名、协议、创建时间、发布情况等信息。
   */
  async DescribeService(
    req: DescribeServiceRequest,
    cb?: (error: string, rep: DescribeServiceResponse) => void
  ): Promise<DescribeServiceResponse> {
    return this.request("DescribeService", req, cb)
  }

  /**
   * 创建API网关插件。
   */
  async CreatePlugin(
    req: CreatePluginRequest,
    cb?: (error: string, rep: CreatePluginResponse) => void
  ): Promise<CreatePluginResponse> {
    return this.request("CreatePlugin", req, cb)
  }

  /**
   * 展示插件列表和详情，支持分页，支持按照插件类型查询，支持按照插件ID批量查询，支持按照插件名称查询。
   */
  async DescribePlugins(
    req: DescribePluginsRequest,
    cb?: (error: string, rep: DescribePluginsResponse) => void
  ): Promise<DescribePluginsResponse> {
    return this.request("DescribePlugins", req, cb)
  }

  /**
   * 本接口（DeleteApiKey）用于删除一对 API 密钥。
   */
  async DeleteApiKey(
    req: DeleteApiKeyRequest,
    cb?: (error: string, rep: DeleteApiKeyResponse) => void
  ): Promise<DeleteApiKeyResponse> {
    return this.request("DeleteApiKey", req, cb)
  }

  /**
   * 本接口（CreateApi）用于创建 API 接口，创建 API 前，用户需要先创建服务，每个 API 都有自己归属的服务。
   */
  async CreateApi(
    req: CreateApiRequest,
    cb?: (error: string, rep: CreateApiResponse) => void
  ): Promise<CreateApiResponse> {
    return this.request("CreateApi", req, cb)
  }

  /**
   * 本接口（DescribeExclusiveInstanceDetail）用于查询独享实例详情信息。
   */
  async DescribeExclusiveInstanceDetail(
    req: DescribeExclusiveInstanceDetailRequest,
    cb?: (error: string, rep: DescribeExclusiveInstanceDetailResponse) => void
  ): Promise<DescribeExclusiveInstanceDetailResponse> {
    return this.request("DescribeExclusiveInstanceDetail", req, cb)
  }

  /**
   * 绑定插件到API上。
   */
  async AttachPlugin(
    req: AttachPluginRequest,
    cb?: (error: string, rep: AttachPluginResponse) => void
  ): Promise<AttachPluginResponse> {
    return this.request("AttachPlugin", req, cb)
  }

  /**
   * 本接口（BindApiApp）用于绑定应用到API。
   */
  async BindApiApp(
    req: BindApiAppRequest,
    cb?: (error: string, rep: BindApiAppResponse) => void
  ): Promise<BindApiAppResponse> {
    return this.request("BindApiApp", req, cb)
  }

  /**
   * 本接口（DescribeApiBindApiAppsStatus）查询Api绑定的应用列表。
   */
  async DescribeApiBindApiAppsStatus(
    req: DescribeApiBindApiAppsStatusRequest,
    cb?: (error: string, rep: DescribeApiBindApiAppsStatusResponse) => void
  ): Promise<DescribeApiBindApiAppsStatusResponse> {
    return this.request("DescribeApiBindApiAppsStatus", req, cb)
  }

  /**
   * 本接口DescribeLogSearch用于搜索日志
   */
  async DescribeLogSearch(
    req: DescribeLogSearchRequest,
    cb?: (error: string, rep: DescribeLogSearchResponse) => void
  ): Promise<DescribeLogSearchResponse> {
    return this.request("DescribeLogSearch", req, cb)
  }

  /**
   * 本接口（DeleteService）用于删除 API 网关中某个服务。
   */
  async DeleteService(
    req: DeleteServiceRequest,
    cb?: (error: string, rep: DeleteServiceResponse) => void
  ): Promise<DeleteServiceResponse> {
    return this.request("DeleteService", req, cb)
  }

  /**
   * 提供增量更新API能力，主要是给程序调用（区别于ModifyApi，该接口是需要传入API的全量参数，对console使用较友好）
   */
  async ModifyApiIncrement(
    req: ModifyApiIncrementRequest,
    cb?: (error: string, rep: ModifyApiIncrementResponse) => void
  ): Promise<ModifyApiIncrementResponse> {
    return this.request("ModifyApiIncrement", req, cb)
  }

  /**
     * 本接口（DescribeApiUsagePlan）用于查询服务中 API 使用计划详情。
服务若需要鉴权限流生效，则需要绑定使用计划到此服务中，本接口用于查询绑定到一个服务及其中 API 的所有使用计划。
     */
  async DescribeApiUsagePlan(
    req: DescribeApiUsagePlanRequest,
    cb?: (error: string, rep: DescribeApiUsagePlanResponse) => void
  ): Promise<DescribeApiUsagePlanResponse> {
    return this.request("DescribeApiUsagePlan", req, cb)
  }

  /**
   * 获取专享实例网络配置列表
   */
  async DescribeInstancesNetworkConfig(
    req: DescribeInstancesNetworkConfigRequest,
    cb?: (error: string, rep: DescribeInstancesNetworkConfigResponse) => void
  ): Promise<DescribeInstancesNetworkConfigResponse> {
    return this.request("DescribeInstancesNetworkConfig", req, cb)
  }

  /**
   * 本接口（DescribeIPStrategysStatus）用于查询服务IP策略列表，因为接口名拼写错误，已不推荐使用，请优先使用DescribeIPStrategiesStatus接口。
   */
  async DescribeIPStrategysStatus(
    req: DescribeIPStrategysStatusRequest,
    cb?: (error: string, rep: DescribeIPStrategysStatusResponse) => void
  ): Promise<DescribeIPStrategysStatusResponse> {
    return this.request("DescribeIPStrategysStatus", req, cb)
  }

  /**
   * 本接口（ModifyServiceEnvironmentStrategy）用于修改服务限流策略
   */
  async ModifyServiceEnvironmentStrategy(
    req: ModifyServiceEnvironmentStrategyRequest,
    cb?: (error: string, rep: ModifyServiceEnvironmentStrategyResponse) => void
  ): Promise<ModifyServiceEnvironmentStrategyResponse> {
    return this.request("ModifyServiceEnvironmentStrategy", req, cb)
  }

  /**
   * 本接口（ModifyExclusiveInstance）用于修改独享实例信息。​
   */
  async ModifyExclusiveInstance(
    req: ModifyExclusiveInstanceRequest,
    cb?: (error: string, rep: ModifyExclusiveInstanceResponse) => void
  ): Promise<ModifyExclusiveInstanceResponse> {
    return this.request("ModifyExclusiveInstance", req, cb)
  }

  /**
   * 用于创建后端通道
   */
  async CreateUpstream(
    req: CreateUpstreamRequest,
    cb?: (error: string, rep: CreateUpstreamResponse) => void
  ): Promise<CreateUpstreamResponse> {
    return this.request("CreateUpstream", req, cb)
  }

  /**
     * 本接口（DescribeUsagePlanEnvironments）用于查询使用计划绑定的环境列表。
用户在绑定了某个使用计划到环境后，可使用本接口查询这个使用计划绑定的所有服务的环境。
     */
  async DescribeUsagePlanEnvironments(
    req: DescribeUsagePlanEnvironmentsRequest,
    cb?: (error: string, rep: DescribeUsagePlanEnvironmentsResponse) => void
  ): Promise<DescribeUsagePlanEnvironmentsResponse> {
    return this.request("DescribeUsagePlanEnvironments", req, cb)
  }

  /**
   * 展示插件详情，支持按照插件ID进行。
   */
  async DescribePlugin(
    req: DescribePluginRequest,
    cb?: (error: string, rep: DescribePluginResponse) => void
  ): Promise<DescribePluginResponse> {
    return this.request("DescribePlugin", req, cb)
  }

  /**
   * 解除插件与API绑定
   */
  async DetachPlugin(
    req: DetachPluginRequest,
    cb?: (error: string, rep: DetachPluginResponse) => void
  ): Promise<DetachPluginResponse> {
    return this.request("DetachPlugin", req, cb)
  }

  /**
   * 本接口（DescribeServiceEnvironmentList）用于查询一个服务的环境列表，可查询到此服务下所有环境及其状态。
   */
  async DescribeServiceEnvironmentList(
    req: DescribeServiceEnvironmentListRequest,
    cb?: (error: string, rep: DescribeServiceEnvironmentListResponse) => void
  ): Promise<DescribeServiceEnvironmentListResponse> {
    return this.request("DescribeServiceEnvironmentList", req, cb)
  }

  /**
   * 删除后端通道，需要注意有API绑定时，不允许删除
   */
  async DeleteUpstream(
    req: DeleteUpstreamRequest,
    cb?: (error: string, rep: DeleteUpstreamResponse) => void
  ): Promise<DeleteUpstreamResponse> {
    return this.request("DeleteUpstream", req, cb)
  }

  /**
     * 本接口（UnBindSubDomain）用于解绑自定义域名。
用户使用 API 网关绑定了自定义域名到服务中后，若想要解绑此自定义域名，可使用此接口。
     */
  async UnBindSubDomain(
    req: UnBindSubDomainRequest,
    cb?: (error: string, rep: UnBindSubDomainResponse) => void
  ): Promise<UnBindSubDomainResponse> {
    return this.request("UnBindSubDomain", req, cb)
  }

  /**
   * 本接口（DescribeServiceEnvironmentStrategy）用于展示服务限流策略。
   */
  async DescribeServiceEnvironmentStrategy(
    req: DescribeServiceEnvironmentStrategyRequest,
    cb?: (error: string, rep: DescribeServiceEnvironmentStrategyResponse) => void
  ): Promise<DescribeServiceEnvironmentStrategyResponse> {
    return this.request("DescribeServiceEnvironmentStrategy", req, cb)
  }

  /**
     * 本接口（DeleteServiceSubDomainMapping）用于删除服务中某个环境的自定义域名映射。
当用户使用自定义域名，并使用了自定义映射时，可使用此接口。但需注意，若删除了所有环境的映射时，调用此 API 均会返回失败。
     */
  async DeleteServiceSubDomainMapping(
    req: DeleteServiceSubDomainMappingRequest,
    cb?: (error: string, rep: DeleteServiceSubDomainMappingResponse) => void
  ): Promise<DeleteServiceSubDomainMappingResponse> {
    return this.request("DeleteServiceSubDomainMapping", req, cb)
  }

  /**
     * 本接口（DescribeApiKey）用于查询密钥详情。
用户在创建密钥后，可用此接口查询一个 API 密钥的详情，该接口会显示密钥 Key。
     */
  async DescribeApiKey(
    req: DescribeApiKeyRequest,
    cb?: (error: string, rep: DescribeApiKeyResponse) => void
  ): Promise<DescribeApiKeyResponse> {
    return this.request("DescribeApiKey", req, cb)
  }

  /**
   * 查询后端通道所绑定的API列表
   */
  async DescribeUpstreamBindApis(
    req: DescribeUpstreamBindApisRequest,
    cb?: (error: string, rep: DescribeUpstreamBindApisResponse) => void
  ): Promise<DescribeUpstreamBindApisResponse> {
    return this.request("DescribeUpstreamBindApis", req, cb)
  }

  /**
   * 本接口（ImportOpenApi）用于将OpenAPI规范定义的API导入到API网关。
   */
  async ImportOpenApi(
    req: ImportOpenApiRequest,
    cb?: (error: string, rep: ImportOpenApiResponse) => void
  ): Promise<ImportOpenApiResponse> {
    return this.request("ImportOpenApi", req, cb)
  }

  /**
   * 本接口（ModifyService）用于修改服务的相关信息。当服务创建后，服务的名称、描述和服务类型均可被修改。
   */
  async ModifyService(
    req: ModifyServiceRequest,
    cb?: (error: string, rep: ModifyServiceResponse) => void
  ): Promise<ModifyServiceResponse> {
    return this.request("ModifyService", req, cb)
  }

  /**
     * 本接口（BindSecretIds）用于为使用计划绑定密钥。
将密钥绑定到某个使用计划，并将此使用计划绑定到某个服务发布的环境上，调用者方可使用此密钥调用这个服务中的 API，可使用本接口为使用计划绑定密钥。
     */
  async BindSecretIds(
    req: BindSecretIdsRequest,
    cb?: (error: string, rep: BindSecretIdsResponse) => void
  ): Promise<BindSecretIdsResponse> {
    return this.request("BindSecretIds", req, cb)
  }

  /**
   * 本接口（DescribeApiForApiApp）用于应用使用者查询部署于 API 网关的 API 接口的详细信息。​
   */
  async DescribeApiForApiApp(
    req: DescribeApiForApiAppRequest,
    cb?: (error: string, rep: DescribeApiForApiAppResponse) => void
  ): Promise<DescribeApiForApiAppResponse> {
    return this.request("DescribeApiForApiApp", req, cb)
  }

  /**
   * 构建 API 文档
   */
  async BuildAPIDoc(
    req: BuildAPIDocRequest,
    cb?: (error: string, rep: BuildAPIDocResponse) => void
  ): Promise<BuildAPIDocResponse> {
    return this.request("BuildAPIDoc", req, cb)
  }

  /**
   * 本接口（ModifyApiEnvironmentStrategy）用于修改API限流策略
   */
  async ModifyApiEnvironmentStrategy(
    req: ModifyApiEnvironmentStrategyRequest,
    cb?: (error: string, rep: ModifyApiEnvironmentStrategyResponse) => void
  ): Promise<ModifyApiEnvironmentStrategyResponse> {
    return this.request("ModifyApiEnvironmentStrategy", req, cb)
  }

  /**
   * 本接口（ModifyApi）用于修改 API 接口，可调用此接口对已经配置的 API 接口进行编辑修改。修改后的 API 需要重新发布 API 所在的服务到对应环境方能生效。
   */
  async ModifyApi(
    req: ModifyApiRequest,
    cb?: (error: string, rep: ModifyApiResponse) => void
  ): Promise<ModifyApiResponse> {
    return this.request("ModifyApi", req, cb)
  }

  /**
     * 本接口（DemoteServiceUsagePlan）用于将某个服务在某个环境的使用计划，降级到API上。
如果服务内没有API不允许进行此操作。
如果当前环境没有发布，不允许进行此操作。
     */
  async DemoteServiceUsagePlan(
    req: DemoteServiceUsagePlanRequest,
    cb?: (error: string, rep: DemoteServiceUsagePlanResponse) => void
  ): Promise<DemoteServiceUsagePlanResponse> {
    return this.request("DemoteServiceUsagePlan", req, cb)
  }

  /**
     * 本接口（DescribeServiceSubDomains）用于查询自定义域名列表。
API 网关可绑定自定义域名到服务，用于服务调用。此接口用于查询用户绑定在服务的自定义域名列表。
     */
  async DescribeServiceSubDomains(
    req: DescribeServiceSubDomainsRequest,
    cb?: (error: string, rep: DescribeServiceSubDomainsResponse) => void
  ): Promise<DescribeServiceSubDomainsResponse> {
    return this.request("DescribeServiceSubDomains", req, cb)
  }

  /**
     * 本接口（DescribeServiceUsagePlan）用于查询服务使用计划详情。
服务若需要鉴权限流生效，则需要绑定使用计划到此服务中，本接口用于查询绑定到一个服务的所有使用计划。
     */
  async DescribeServiceUsagePlan(
    req: DescribeServiceUsagePlanRequest,
    cb?: (error: string, rep: DescribeServiceUsagePlanResponse) => void
  ): Promise<DescribeServiceUsagePlanResponse> {
    return this.request("DescribeServiceUsagePlan", req, cb)
  }

  /**
   * Get the list of supported regions for dedicated instances
   */
  async DescribeExclusiveInstanceRegions(
    req?: DescribeExclusiveInstanceRegionsRequest,
    cb?: (error: string, rep: DescribeExclusiveInstanceRegionsResponse) => void
  ): Promise<DescribeExclusiveInstanceRegionsResponse> {
    return this.request("DescribeExclusiveInstanceRegions", req, cb)
  }

  /**
   * 本接口（UpdateApiKey）用于更换用户已创建的一对 API 密钥。
   */
  async UpdateApiKey(
    req: UpdateApiKeyRequest,
    cb?: (error: string, rep: UpdateApiKeyResponse) => void
  ): Promise<UpdateApiKeyResponse> {
    return this.request("UpdateApiKey", req, cb)
  }

  /**
   * 删除API网关插件
   */
  async DeletePlugin(
    req: DeletePluginRequest,
    cb?: (error: string, rep: DeletePluginResponse) => void
  ): Promise<DeletePluginResponse> {
    return this.request("DeletePlugin", req, cb)
  }

  /**
   * 本接口（BindIPStrategy）用于API绑定IP策略。
   */
  async BindIPStrategy(
    req: BindIPStrategyRequest,
    cb?: (error: string, rep: BindIPStrategyResponse) => void
  ): Promise<BindIPStrategyResponse> {
    return this.request("BindIPStrategy", req, cb)
  }

  /**
   * 本接口（EnableApiKey）用于启动一对被禁用的 API 密钥。
   */
  async EnableApiKey(
    req: EnableApiKeyRequest,
    cb?: (error: string, rep: EnableApiKeyResponse) => void
  ): Promise<EnableApiKeyResponse> {
    return this.request("EnableApiKey", req, cb)
  }

  /**
   * 本接口（CreateIPStrategy）用于创建服务IP策略。
   */
  async CreateIPStrategy(
    req: CreateIPStrategyRequest,
    cb?: (error: string, rep: CreateIPStrategyResponse) => void
  ): Promise<CreateIPStrategyResponse> {
    return this.request("CreateIPStrategy", req, cb)
  }

  /**
   * 删除 API 文档
   */
  async DeleteAPIDoc(
    req: DeleteAPIDocRequest,
    cb?: (error: string, rep: DeleteAPIDocResponse) => void
  ): Promise<DeleteAPIDocResponse> {
    return this.request("DeleteAPIDoc", req, cb)
  }

  /**
   * 查询专享实例列表（新）
   */
  async DescribeExclusiveInstancesStatus(
    req: DescribeExclusiveInstancesStatusRequest,
    cb?: (error: string, rep: DescribeExclusiveInstancesStatusResponse) => void
  ): Promise<DescribeExclusiveInstancesStatusResponse> {
    return this.request("DescribeExclusiveInstancesStatus", req, cb)
  }

  /**
   * 本接口（UnBindEnvironment）用于将使用计划从特定环境解绑。
   */
  async UnBindEnvironment(
    req: UnBindEnvironmentRequest,
    cb?: (error: string, rep: UnBindEnvironmentResponse) => void
  ): Promise<UnBindEnvironmentResponse> {
    return this.request("UnBindEnvironment", req, cb)
  }

  /**
   * 本接口（ModifyApiApp）用于修改已经创建的应用。
   */
  async ModifyApiApp(
    req: ModifyApiAppRequest,
    cb?: (error: string, rep: ModifyApiAppResponse) => void
  ): Promise<ModifyApiAppResponse> {
    return this.request("ModifyApiApp", req, cb)
  }

  /**
   * 本接口（DescribeUsagePlan）用于查询一个使用计划的详细信息，包括名称、QPS、创建时间绑定的环境等。
   */
  async DescribeUsagePlan(
    req: DescribeUsagePlanRequest,
    cb?: (error: string, rep: DescribeUsagePlanResponse) => void
  ): Promise<DescribeUsagePlanResponse> {
    return this.request("DescribeUsagePlan", req, cb)
  }

  /**
     * 本接口（BindSubDomain）用于绑定自定义域名到服务。
API 网关中每个服务都会提供一个默认的域名供用户调用，但当用户想使用自己的已有域名时，也可以将自定义域名绑定到此服务，在做好备案、与默认域名的 CNAME 后，可直接调用自定义域名。
     */
  async BindSubDomain(
    req: BindSubDomainRequest,
    cb?: (error: string, rep: BindSubDomainResponse) => void
  ): Promise<BindSubDomainResponse> {
    return this.request("BindSubDomain", req, cb)
  }
}

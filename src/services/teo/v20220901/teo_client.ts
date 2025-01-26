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
  DeployConfigGroupVersionRequest,
  RenewFlag,
  Compression,
  DescribeFunctionsResponse,
  DeleteL4ProxyRulesRequest,
  DescribeOriginGroupResponse,
  DescribeSecurityIPGroupInfoResponse,
  SlowPostConfig,
  OriginRecord,
  CompressionParameters,
  DescribeConfigGroupVersionDetailResponse,
  OriginDetail,
  HeaderAction,
  RealtimeLogDeliveryTask,
  PrepaidPlanParam,
  AccessURLRedirectQueryString,
  ModifyFunctionRulePriorityRequest,
  ModifyAccelerationDomainResponse,
  TopEntryValue,
  DescribeHostsSettingResponse,
  Origin,
  DescribeRulesResponse,
  TimingDataRecord,
  CreateCLSIndexResponse,
  DescribeRealtimeLogDeliveryTasksRequest,
  DescribeOriginProtectionResponse,
  DescribeBillingDataRequest,
  LogFormat,
  DescribeEnvironmentsRequest,
  DescribeAliasDomainsRequest,
  QUICParameters,
  RateLimitConfig,
  CreateRealtimeLogDeliveryTaskRequest,
  ModifyAccelerationDomainStatusesResponse,
  DeployRecord,
  RuleExtraParameter,
  WebSocket,
  ModifyAccelerationDomainRequest,
  ModifyContentIdentifierResponse,
  WafConfig,
  CreateAliasDomainRequest,
  CLSTopic,
  CreatePrefetchTaskRequest,
  DescribeApplicationProxiesResponse,
  VanityNameServers,
  DescribeTopL7AnalysisDataRequest,
  DescribeAccelerationDomainsResponse,
  SwitchConfig,
  IdentifyZoneResponse,
  UpstreamRequestQueryString,
  ModifyLoadBalancerResponse,
  ModifyL4ProxyResponse,
  HealthChecker,
  CreateFunctionRuleRequest,
  RuleBranch,
  DescribeAliasDomainsResponse,
  EnvInfo,
  ModifyLoadBalancerRequest,
  PlanInfo,
  DescribeTimingL7CacheDataRequest,
  IPv6Parameters,
  CreateFunctionRequest,
  PostMaxSizeParameters,
  S3,
  DescribeDDoSAttackEventResponse,
  DeleteL4ProxyRulesResponse,
  ForceRedirect,
  CodeAction,
  CreateL7AccRulesResponse,
  CachePrefresh,
  DescribeTimingL7AnalysisDataResponse,
  ImageOptimize,
  CreateL7AccRulesRequest,
  BotPortraitRule,
  RulesProperties,
  RuleCodeActionParams,
  OriginGroupReference,
  DeleteLoadBalancerRequest,
  CacheKeyCookie,
  ExceptUserRule,
  SecEntry,
  ModifyCustomErrorPageResponse,
  SubRule,
  StandardDebugParameters,
  ConfigGroupVersionInfo,
  VerifyOwnershipResponse,
  Sv,
  Rule,
  DownloadL4LogsRequest,
  StatusCodeCacheParam,
  ModifyZoneSettingRequest,
  OriginGroupHealthStatus,
  ModifyDnsRecordsResponse,
  BillingDataFilter,
  DeleteCustomErrorPageResponse,
  DescribeTimingL7CacheDataResponse,
  DescribeZonesResponse,
  Header,
  DeleteCustomErrorPageRequest,
  CustomField,
  CacheKeyHeader,
  DeleteZoneRequest,
  RangeOriginPullParameters,
  BotManagedRule,
  SecurityConfig,
  L4OfflineLog,
  ModifyPlanRequest,
  HostName,
  DDoS,
  ModifyL4ProxyRulesRequest,
  DescribeRulesSettingRequest,
  EntityStatus,
  SmartRoutingParameters,
  ModifyAliasDomainRequest,
  CreateFunctionRuleResponse,
  HTTPUpstreamTimeoutParameters,
  PrivateParameter,
  CreateSecurityIPGroupRequest,
  CreateOriginGroupRequest,
  TopDataRecord,
  CreateSecurityIPGroupResponse,
  CreateSharedCNAMEResponse,
  DescribeAvailablePlansResponse,
  RateLimitTemplate,
  ModifyRealtimeLogDeliveryTaskResponse,
  AccelerationDomainCertificate,
  DescribeSecurityTemplateBindingsRequest,
  L4ProxyRemoteAuth,
  AlgDetectResult,
  DefaultServerCertInfo,
  RuleEngineItem,
  OCSPStaplingParameters,
  CreateL4ProxyRulesRequest,
  DescribeDDoSAttackTopDataResponse,
  LoadBalancer,
  DeleteRulesRequest,
  ExceptUserRuleCondition,
  ModifyL7AccRuleRequest,
  MaxAge,
  DescribeCustomErrorPagesResponse,
  DeleteApplicationProxyResponse,
  AlgDetectRule,
  SecEntryValue,
  DiffIPWhitelist,
  DeleteSecurityIPGroupResponse,
  ModifyRuleRequest,
  SetContentIdentifierParameters,
  RenewPlanRequest,
  DescribePrefetchTasksResponse,
  DescribeZoneSettingRequest,
  ModifyL4ProxyStatusResponse,
  FileVerification,
  ModifySecurityPolicyRequest,
  DeleteL7AccRulesRequest,
  SmartRouting,
  CreateApplicationProxyResponse,
  BotUserRule,
  Task,
  DescribeL4ProxyRulesResponse,
  OriginHealthStatus,
  ZoneConfig,
  CustomizedHeader,
  DescribeFunctionsRequest,
  ModifyDnsRecordsStatusRequest,
  ModifyHostsCertificateRequest,
  BotExtendAction,
  CreatePurgeTaskResponse,
  DeleteApplicationProxyRuleResponse,
  DeleteAccelerationDomainsResponse,
  ExceptConfig,
  DeleteOriginGroupRequest,
  AclCondition,
  L7OfflineLog,
  ModifyRuleResponse,
  ApplicationProxyRule,
  UpstreamCertInfo,
  Zone,
  RuleNormalActionParams,
  ErrorPageParameters,
  DescribeRulesSettingResponse,
  BindSecurityTemplateToEntityResponse,
  ModifyL4ProxyRulesResponse,
  DDoSAttackEvent,
  DescribeConfigGroupVersionDetailRequest,
  ModifyPlanResponse,
  DropPageDetail,
  CnameStatus,
  CreateDnsRecordResponse,
  ServerCertInfo,
  DescribeZonesRequest,
  DescribeZoneConfigImportResultResponse,
  Tag,
  BindSharedCNAMEResponse,
  DeleteSharedCNAMERequest,
  ModifyRealtimeLogDeliveryTaskRequest,
  DescribeHostsSettingRequest,
  DestroyPlanRequest,
  CreatePlanRequest,
  DescribeFunctionRuntimeEnvironmentRequest,
  IPGroup,
  DescribeDnsRecordsRequest,
  CreatePrefetchTaskResponse,
  DescribeDefaultCertificatesRequest,
  ModifyApplicationProxyRuleResponse,
  FailReason,
  ModifyRequestHeaderParameters,
  CreateConfigGroupVersionResponse,
  DownloadL7LogsRequest,
  WebSocketParameters,
  RuleItem,
  SlowRateConfig,
  Cache,
  CustomTime,
  DetailHost,
  DescribeRealtimeLogDeliveryTasksResponse,
  DescribeConfigGroupVersionsResponse,
  FunctionEnvironmentVariable,
  DeleteRealtimeLogDeliveryTaskResponse,
  RuleCondition,
  DescribeOverviewL7DataResponse,
  MaxAgeParameters,
  DescribeEnvironmentsResponse,
  CacheParameters,
  TimingDataItem,
  RateLimitUserRule,
  CreatePlanForZoneRequest,
  CreateL4ProxyRulesResponse,
  ModifyCustomErrorPageRequest,
  ModifyFunctionRuleResponse,
  DescribeL7AccRulesRequest,
  DescribeFunctionRulesResponse,
  CacheKey,
  DownloadL4LogsResponse,
  BindSharedCNAMERequest,
  IpTableConfig,
  DeleteOriginGroupResponse,
  ModifyOriginParameters,
  DescribeL4ProxyRequest,
  DescribeIdentificationsRequest,
  ModifyHostsCertificateResponse,
  CreateAccelerationDomainRequest,
  NormalAction,
  TopDetailData,
  DescribeZoneSettingResponse,
  DescribePurgeTasksRequest,
  ModifyDnsRecordsRequest,
  IdentifyZoneRequest,
  CacheConfig,
  DescribeL7AccSettingRequest,
  UpgradePlanResponse,
  AclConfig,
  JITVideoProcess,
  OfflineCache,
  IntelligenceRule,
  CreateLoadBalancerResponse,
  CreateConfigGroupVersionRequest,
  AclUserRule,
  DescribeLoadBalancerListRequest,
  AccessURLRedirectParameters,
  DescribeDDoSAttackEventRequest,
  CacheConfigParameters,
  FunctionRuleCondition,
  CacheKeyParameters,
  ModifyFunctionResponse,
  DescribeOriginGroupRequest,
  DescribeIPRegionRequest,
  TimingTypeValue,
  CreatePlanForZoneResponse,
  ModifyL4ProxyRulesStatusResponse,
  CheckCnameStatusResponse,
  ImportZoneConfigResponse,
  CustomEndpoint,
  VerifyOwnershipRequest,
  ResponseSpeedLimitParameters,
  DeleteL4ProxyRequest,
  DeleteApplicationProxyRequest,
  AccelerateMainlandParameters,
  ModifyZoneStatusRequest,
  UpstreamURLRewriteParameters,
  DescribeL4ProxyResponse,
  ModifyOriginGroupResponse,
  DeleteAccelerationDomainsRequest,
  RenewPlanResponse,
  CustomErrorPage,
  DescribeDeployHistoryRequest,
  BillingData,
  ModifyOriginGroupRequest,
  DeleteZoneResponse,
  CreateRuleResponse,
  ModifyL7AccSettingResponse,
  BindZoneToPlanResponse,
  UpstreamHTTP2Parameters,
  DescribeL7AccSettingResponse,
  OriginInfo,
  CreateDnsRecordRequest,
  WafRule,
  ModifyApplicationProxyRequest,
  ModifyAliasDomainStatusRequest,
  DeleteFunctionRequest,
  BindSharedCNAMEMap,
  DeleteRealtimeLogDeliveryTaskRequest,
  RulesSettingAction,
  ForceRedirectHTTPSParameters,
  MutualTLS,
  Ipv6,
  ModifyApplicationProxyRuleRequest,
  CreateFunctionResponse,
  DescribeLoadBalancerListResponse,
  AlgDetectJS,
  SubRuleItem,
  DescribeL7AccRulesResponse,
  DeleteSecurityIPGroupRequest,
  Grpc,
  CreateAliasDomainResponse,
  ClientIpCountry,
  DeleteApplicationProxyRuleRequest,
  ModifyL7AccRuleResponse,
  FileAscriptionInfo,
  CreateRealtimeLogDeliveryTaskResponse,
  DescribeTopL7CacheDataResponse,
  DescribeFunctionRuntimeEnvironmentResponse,
  GrpcParameters,
  RuleChoicePropertiesItem,
  DescribeSecurityTemplateBindingsResponse,
  ModifyAliasDomainStatusResponse,
  DeleteFunctionRulesRequest,
  DescribeTimingL7AnalysisDataRequest,
  NoCache,
  ModifyFunctionRequest,
  ModifyApplicationProxyStatusRequest,
  CreateZoneRequest,
  AscriptionInfo,
  OriginGroupHealthStatusDetail,
  FirstPartConfig,
  Waf,
  CreateApplicationProxyRuleRequest,
  DescribeDnsRecordsResponse,
  DescribeDDoSAttackDataRequest,
  CreateL4ProxyRequest,
  CreatePlanResponse,
  DescribeApplicationProxiesRequest,
  DescribeContentQuotaRequest,
  Hsts,
  OwnershipVerification,
  CreateRuleRequest,
  ModifyL4ProxyStatusRequest,
  RateLimitTemplateDetail,
  CreateApplicationProxyRuleResponse,
  CertificateInfo,
  CreateApplicationProxyRequest,
  CC,
  HandleFunctionRuntimeEnvironmentRequest,
  ModifyL4ProxyRulesStatusRequest,
  DescribeCustomErrorPagesRequest,
  CachePrefreshParameters,
  Action,
  UpstreamFollowRedirectParameters,
  ApplicationProxy,
  ModifyApplicationProxyResponse,
  ModifySecurityIPGroupResponse,
  SecurityType,
  ZoneSetting,
  ModifyL4ProxyRequest,
  RuleAndConditions,
  DropPageConfig,
  DescribeSecurityIPGroupInfoRequest,
  ExceptUserRuleScope,
  PartialModule,
  DescribeZoneConfigImportResultRequest,
  ModifyApplicationProxyRuleStatusRequest,
  AccelerateType,
  DeliveryCondition,
  FollowOrigin,
  IPRegionInfo,
  DestroyPlanResponse,
  CacheKeyConfigParameters,
  TLSConfigParameters,
  QueryCondition,
  RuleRewriteActionParams,
  ClientIPHeaderParameters,
  ModifyAliasDomainResponse,
  DeleteDnsRecordsRequest,
  OfflineCacheParameters,
  DeleteAliasDomainRequest,
  DeleteFunctionRulesResponse,
  DescribeTopL7AnalysisDataResponse,
  ModifyContentIdentifierRequest,
  ClientIpHeader,
  Resource,
  ModifyResponseHeaderParameters,
  DescribeOriginProtectionRequest,
  DeleteContentIdentifierResponse,
  HandleFunctionRuntimeEnvironmentResponse,
  DeleteRulesResponse,
  OriginGroup,
  ModifySecurityIPGroupRequest,
  L4Proxy,
  SkipCondition,
  CreateSharedCNAMERequest,
  UpstreamHttp2,
  DeleteAliasDomainResponse,
  BotConfig,
  ModifyZoneResponse,
  DescribeTopL7CacheDataRequest,
  CreateLoadBalancerRequest,
  Https,
  DescribeOriginGroupHealthStatusRequest,
  DescribeContentIdentifiersRequest,
  ExportZoneConfigRequest,
  L4ProxyRule,
  CacheKeyQueryString,
  AdvancedFilter,
  DescribeDDoSAttackDataResponse,
  TemplateConfig,
  ErrorPageReference,
  DescribeIdentificationsResponse,
  DeleteL4ProxyResponse,
  ModifyApplicationProxyRuleStatusResponse,
  ModifyZoneRequest,
  ClientIPCountryParameters,
  IncreasePlanQuotaResponse,
  DescribeIPRegionResponse,
  DescribeAvailablePlansRequest,
  DnsVerification,
  AlgDetectSession,
  DeleteContentIdentifierRequest,
  CreateContentIdentifierRequest,
  OriginProtectionInfo,
  ModifyDnsRecordsStatusResponse,
  AliasDomain,
  ImportZoneConfigRequest,
  IpTableRule,
  DDosProtectionConfig,
  ModifyFunctionRuleRequest,
  IncreasePlanQuotaRequest,
  FunctionRule,
  UpstreamRequestCookie,
  DescribeDDoSAttackTopDataRequest,
  Quic,
  CreateCLSIndexRequest,
  DescribeRulesRequest,
  DescribeContentQuotaResponse,
  ModifyZoneSettingResponse,
  DownloadL7LogsResponse,
  AccelerationDomain,
  ContentIdentifier,
  CreateCustomizeErrorPageResponse,
  RuleEngineAction,
  StatusCodeCacheParameters,
  RewriteAction,
  TemplateScope,
  ErrorPage,
  HTTP2Parameters,
  DescribeOverviewL7DataRequest,
  DeleteSharedCNAMEResponse,
  DDoSBlockData,
  DescribePrefetchTasksRequest,
  ZoneConfigParameters,
  DnsRecord,
  OriginPrivateParameters,
  HSTSParameters,
  BindZoneToPlanRequest,
  DeleteFunctionResponse,
  IPWhitelist,
  ModifyL7AccSettingRequest,
  ModifyFunctionRulePriorityResponse,
  CreateCustomizeErrorPageRequest,
  URLPath,
  DescribeSecurityIPGroupRequest,
  ModifyApplicationProxyStatusResponse,
  Identification,
  OriginGroupInLoadBalancer,
  CheckRegionHealthStatus,
  UpstreamRequestParameters,
  TopEntry,
  NsVerification,
  AccelerateMainland,
  StandardDebug,
  AuthenticationParameters,
  BindSecurityTemplateToEntityRequest,
  RuleEngineSubRule,
  IntelligenceRuleItem,
  ExportZoneConfigResponse,
  PostMaxSize,
  DescribeBillingDataResponse,
  Filter,
  CreateAccelerationDomainResponse,
  ModifyAccelerationDomainStatusesRequest,
  CreateZoneResponse,
  CreateL4ProxyResponse,
  ModifySecurityPolicyResponse,
  DeleteLoadBalancerResponse,
  DeleteL7AccRulesResponse,
  DescribeOriginGroupHealthStatusResponse,
  DescribeContentIdentifiersResponse,
  CacheConfigCustomTime,
  SecurityTemplateBinding,
  CacheTag,
  DescribeDefaultCertificatesResponse,
  CreateOriginGroupResponse,
  CreateContentIdentifierResponse,
  HostHeaderParameters,
  DescribeConfigGroupVersionsRequest,
  DescribeL4ProxyRulesRequest,
  AiRule,
  Function,
  Quota,
  CheckCnameStatusRequest,
  ModifyZoneStatusResponse,
  DescribeSecurityIPGroupResponse,
  UpgradePlanRequest,
  CreatePurgeTaskRequest,
  DeleteDnsRecordsResponse,
  DescribePurgeTasksResponse,
  HTTPResponseParameters,
  DescribeFunctionRulesRequest,
  DeployConfigGroupVersionResponse,
  RateLimitIntelligence,
  DescribeDeployHistoryResponse,
  QueryString,
  DescribeAccelerationDomainsRequest,
  DescribeTimingL4DataRequest,
  DescribeTimingL4DataResponse,
  VanityNameServersIps,
} from "./teo_models"

/**
 * teo client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("teo.tencentcloudapi.com", "2022-09-01", clientConfig)
  }

  /**
     * 当您需要停止 Edgeone 套餐的计费，可以通过该接口销毁计费套餐。
> 销毁计费套餐需要满足以下条件：
    1.套餐已过期（企业版套餐除外）；
    2.套餐下所有站点均已关闭或删除。

> 站点状态可以通过 [查询站点列表](https://cloud.tencent.com/document/product/1552/80713) 接口进行查询
停用站点可以通过 [切换站点状态](https://cloud.tencent.com/document/product/1552/80707) 接口将站点切换至关闭状态
删除站点可以通过 [删除站点](https://cloud.tencent.com/document/product/1552/80717) 接口将站点删除
     */
  async DestroyPlan(
    req: DestroyPlanRequest,
    cb?: (error: string, rep: DestroyPlanResponse) => void
  ): Promise<DestroyPlanResponse> {
    return this.request("DestroyPlan", req, cb)
  }

  /**
   * 在创建完站点后，并且站点为 NS 模式接入时，您可以通过本接口创建 DNS 记录。
   */
  async CreateDnsRecord(
    req: CreateDnsRecordRequest,
    cb?: (error: string, rep: CreateDnsRecordResponse) => void
  ): Promise<CreateDnsRecordResponse> {
    return this.request("CreateDnsRecord", req, cb)
  }

  /**
   * 导出站点配置接口，本接口支持用户根据需要的配置项进行配置导出，导出的配置用于导入站点配置接口（ImportZoneConfig）进行配置导入。该功能仅支持标准版和企业版套餐站点使用。
   */
  async ExportZoneConfig(
    req: ExportZoneConfigRequest,
    cb?: (error: string, rep: ExportZoneConfigResponse) => void
  ): Promise<ExportZoneConfigResponse> {
    return this.request("ExportZoneConfig", req, cb)
  }

  /**
   * 批量查询内容标识符，可以根据 ID、描述、状态或者标签过滤。按照状态查询被删除的内容标识符仅保留三个月。该功能仅白名单开放。
   */
  async DescribeContentIdentifiers(
    req: DescribeContentIdentifiersRequest,
    cb?: (error: string, rep: DescribeContentIdentifiersResponse) => void
  ): Promise<DescribeContentIdentifiersResponse> {
    return this.request("DescribeContentIdentifiers", req, cb)
  }

  /**
   * 删除边缘函数，删除后函数无法恢复，关联的触发规则会一并删除。
   */
  async DeleteFunction(
    req: DeleteFunctionRequest,
    cb?: (error: string, rep: DeleteFunctionResponse) => void
  ): Promise<DeleteFunctionResponse> {
    return this.request("DeleteFunction", req, cb)
  }

  /**
     * 当源站资源更新，但节点缓存 TTL 未过期时，用户仍会访问到旧的资源，此时可以通过该接口实现节点资源更新。触发更新的方法有以下两种：<li>直接删除：不做任何校验，直接删除节点缓存，用户请求时触发回源拉取；</li><li>标记过期：将节点资源置为过期，用户请求时触发回源校验，即发送带有 If-None-Match 和 If-Modified-Since 头部的 HTTP 条件请求。若源站响应 200，则节点会回源拉取新的资源并更新缓存；若源站响应 304，则节点不会更新缓存；</li>

清除缓存任务详情请查看[清除缓存](https://cloud.tencent.com/document/product/1552/70759)。
     */
  async CreatePurgeTask(
    req: CreatePurgeTaskRequest,
    cb?: (error: string, rep: CreatePurgeTaskResponse) => void
  ): Promise<CreatePurgeTaskResponse> {
    return this.request("CreatePurgeTask", req, cb)
  }

  /**
   * 本接口（DownloadL4Logs）用于下载四层离线日志。
   */
  async DownloadL4Logs(
    req: DownloadL4LogsRequest,
    cb?: (error: string, rep: DownloadL4LogsResponse) => void
  ): Promise<DownloadL4LogsResponse> {
    return this.request("DownloadL4Logs", req, cb)
  }

  /**
   * DescribePrefetchTasks 用于查询预热任务提交历史记录及执行进度，通过 CreatePrefetchTasks 接口提交的任务可通过此接口进行查询。
   */
  async DescribePrefetchTasks(
    req: DescribePrefetchTasksRequest,
    cb?: (error: string, rep: DescribePrefetchTasksResponse) => void
  ): Promise<DescribePrefetchTasksResponse> {
    return this.request("DescribePrefetchTasks", req, cb)
  }

  /**
   * 查询内容管理接口配额
   */
  async DescribeContentQuota(
    req: DescribeContentQuotaRequest,
    cb?: (error: string, rep: DescribeContentQuotaResponse) => void
  ): Promise<DescribeContentQuotaResponse> {
    return this.request("DescribeContentQuota", req, cb)
  }

  /**
   * 查询站点的验证信息。
   */
  async DescribeIdentifications(
    req: DescribeIdentificationsRequest,
    cb?: (error: string, rep: DescribeIdentificationsResponse) => void
  ): Promise<DescribeIdentificationsResponse> {
    return this.request("DescribeIdentifications", req, cb)
  }

  /**
   * 通过本接口查询实时日志投递任务列表。
   */
  async DescribeRealtimeLogDeliveryTasks(
    req: DescribeRealtimeLogDeliveryTasksRequest,
    cb?: (error: string, rep: DescribeRealtimeLogDeliveryTasksResponse) => void
  ): Promise<DescribeRealtimeLogDeliveryTasksResponse> {
    return this.request("DescribeRealtimeLogDeliveryTasks", req, cb)
  }

  /**
     * 在 CNAME 接入模式下，您需要对站点或者域名的归属权进行验证，可以通过本接口触发验证。若站点通过归属权验证后，后续添加域名无需再验证。详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。

在 NS 接入模式下，您也可以通过本接口来查询 NS 服务器是否切换成功，详情参考 [修改 DNS 服务器](https://cloud.tencent.com/document/product/1552/90452)。
     */
  async VerifyOwnership(
    req: VerifyOwnershipRequest,
    cb?: (error: string, rep: VerifyOwnershipResponse) => void
  ): Promise<VerifyOwnershipResponse> {
    return this.request("VerifyOwnership", req, cb)
  }

  /**
   * 创建边缘函数的触发规则。
   */
  async CreateFunctionRule(
    req: CreateFunctionRuleRequest,
    cb?: (error: string, rep: CreateFunctionRuleResponse) => void
  ): Promise<CreateFunctionRuleResponse> {
    return this.request("CreateFunctionRule", req, cb)
  }

  /**
   * 删除边缘函数触发规则。
   */
  async DeleteFunctionRules(
    req: DeleteFunctionRulesRequest,
    cb?: (error: string, rep: DeleteFunctionRulesResponse) => void
  ): Promise<DeleteFunctionRulesResponse> {
    return this.request("DeleteFunctionRules", req, cb)
  }

  /**
   * 用于验证站点所有权。
   */
  async IdentifyZone(
    req: IdentifyZoneRequest,
    cb?: (error: string, rep: IdentifyZoneResponse) => void
  ): Promise<IdentifyZoneResponse> {
    return this.request("IdentifyZone", req, cb)
  }

  /**
   * 查询默认证书列表
   */
  async DescribeDefaultCertificates(
    req: DescribeDefaultCertificatesRequest,
    cb?: (error: string, rep: DescribeDefaultCertificatesResponse) => void
  ): Promise<DescribeDefaultCertificatesResponse> {
    return this.request("DescribeDefaultCertificates", req, cb)
  }

  /**
   * 本接口用于修改[规则引擎](https://cloud.tencent.com/document/product/1552/70901)中的规则，单次仅支持修改单条规则。
   */
  async ModifyL7AccRule(
    req: ModifyL7AccRuleRequest,
    cb?: (error: string, rep: ModifyL7AccRuleResponse) => void
  ): Promise<ModifyL7AccRuleResponse> {
    return this.request("ModifyL7AccRule", req, cb)
  }

  /**
   * 您可以通过本接口查看站点下的域名信息，包括加速域名、源站以及域名状态等信息。您可以查看站点下全部域名的信息，也可以指定过滤条件查询对应的域名信息。
   */
  async DescribeAccelerationDomains(
    req: DescribeAccelerationDomainsRequest,
    cb?: (error: string, rep: DescribeAccelerationDomainsResponse) => void
  ): Promise<DescribeAccelerationDomainsResponse> {
    return this.request("DescribeAccelerationDomains", req, cb)
  }

  /**
   * 查询边缘函数运行环境，包括环境变量。
   */
  async DescribeFunctionRuntimeEnvironment(
    req: DescribeFunctionRuntimeEnvironmentRequest,
    cb?: (error: string, rep: DescribeFunctionRuntimeEnvironmentResponse) => void
  ): Promise<DescribeFunctionRuntimeEnvironmentResponse> {
    return this.request("DescribeFunctionRuntimeEnvironment", req, cb)
  }

  /**
   * 修改源站组配置，新提交的源站记录将会覆盖原有源站组中的源站记录。
   */
  async ModifyOriginGroup(
    req: ModifyOriginGroupRequest,
    cb?: (error: string, rep: ModifyOriginGroupResponse) => void
  ): Promise<ModifyOriginGroupResponse> {
    return this.request("ModifyOriginGroup", req, cb)
  }

  /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [删除四层代理实例
](https://cloud.tencent.com/document/product/1552/103415) 。
     */
  async DeleteApplicationProxy(
    req: DeleteApplicationProxyRequest,
    cb?: (error: string, rep: DeleteApplicationProxyResponse) => void
  ): Promise<DeleteApplicationProxyResponse> {
    return this.request("DeleteApplicationProxy", req, cb)
  }

  /**
   * 本接口用于修改[站点加速](https://cloud.tencent.com/document/product/1552/96193)全局配置。
   */
  async ModifyL7AccSetting(
    req: ModifyL7AccSettingRequest,
    cb?: (error: string, rep: ModifyL7AccSettingResponse) => void
  ): Promise<ModifyL7AccSettingResponse> {
    return this.request("ModifyL7AccSetting", req, cb)
  }

  /**
   * 用于启用/停用四层代理实例。
   */
  async ModifyL4ProxyStatus(
    req: ModifyL4ProxyStatusRequest,
    cb?: (error: string, rep: ModifyL4ProxyStatusResponse) => void
  ): Promise<ModifyL4ProxyStatusResponse> {
    return this.request("ModifyL4ProxyStatus", req, cb)
  }

  /**
   * 本接口（DownloadL7Logs）下载七层离线日志。
   */
  async DownloadL7Logs(
    req: DownloadL7LogsRequest,
    cb?: (error: string, rep: DownloadL7LogsResponse) => void
  ): Promise<DownloadL7LogsResponse> {
    return this.request("DownloadL7Logs", req, cb)
  }

  /**
   * 在版本管理模式下，用于查询环境信息，可获取环境 ID、类型、当前生效版本等。版本管理功能内测中，当前仅白名单开放。
   */
  async DescribeEnvironments(
    req: DescribeEnvironmentsRequest,
    cb?: (error: string, rep: DescribeEnvironmentsResponse) => void
  ): Promise<DescribeEnvironmentsResponse> {
    return this.request("DescribeEnvironments", req, cb)
  }

  /**
     * 当您的套餐绑定的站点数，或配置的 Web 防护 - 自定义规则 - 精准匹配策略的规则数，或 Web 防护 - 速率限制 - 精准速率限制模块的规则数达到套餐允许的配额上限，可以通过该接口增购对应配额。
> 该接口该仅支持企业版套餐。
     */
  async IncreasePlanQuota(
    req: IncreasePlanQuotaRequest,
    cb?: (error: string, rep: IncreasePlanQuotaResponse) => void
  ): Promise<IncreasePlanQuotaResponse> {
    return this.request("IncreasePlanQuota", req, cb)
  }

  /**
   * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [删除四层代理转发规则](https://cloud.tencent.com/document/product/1552/103414) 。
   */
  async DeleteApplicationProxyRule(
    req: DeleteApplicationProxyRuleRequest,
    cb?: (error: string, rep: DeleteApplicationProxyRuleResponse) => void
  ): Promise<DeleteApplicationProxyRuleResponse> {
    return this.request("DeleteApplicationProxyRule", req, cb)
  }

  /**
   * 校验域名 CNAME 状态
   */
  async CheckCnameStatus(
    req: CheckCnameStatusRequest,
    cb?: (error: string, rep: CheckCnameStatusResponse) => void
  ): Promise<CheckCnameStatusResponse> {
    return this.request("CheckCnameStatus", req, cb)
  }

  /**
   * 修改站点信息。
   */
  async ModifyZone(
    req: ModifyZoneRequest,
    cb?: (error: string, rep: ModifyZoneResponse) => void
  ): Promise<ModifyZoneResponse> {
    return this.request("ModifyZone", req, cb)
  }

  /**
   * 创建预热任务
   */
  async CreatePrefetchTask(
    req: CreatePrefetchTaskRequest,
    cb?: (error: string, rep: CreatePrefetchTaskResponse) => void
  ): Promise<CreatePrefetchTaskResponse> {
    return this.request("CreatePrefetchTask", req, cb)
  }

  /**
   * 删除别称域名。
   */
  async DeleteAliasDomain(
    req: DeleteAliasDomainRequest,
    cb?: (error: string, rep: DeleteAliasDomainResponse) => void
  ): Promise<DeleteAliasDomainResponse> {
    return this.request("DeleteAliasDomain", req, cb)
  }

  /**
   * 本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。此接口待废弃，请使用 <a href="https://cloud.tencent.com/document/product/1552/80648">DescribeTimingL7AnalysisData</a> 接口。
   */
  async DescribeOverviewL7Data(
    req: DescribeOverviewL7DataRequest,
    cb?: (error: string, rep: DescribeOverviewL7DataResponse) => void
  ): Promise<DescribeOverviewL7DataResponse> {
    return this.request("DescribeOverviewL7Data", req, cb)
  }

  /**
     * 在创建完站点之后，您可以通过本接口创建加速域名。 

CNAME 模式接入时，若您未完成站点归属权校验，本接口将为您返回域名归属权验证信息，您可以单独对域名进行归属权验证，详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。
     */
  async CreateAccelerationDomain(
    req: CreateAccelerationDomainRequest,
    cb?: (error: string, rep: CreateAccelerationDomainResponse) => void
  ): Promise<CreateAccelerationDomainResponse> {
    return this.request("CreateAccelerationDomain", req, cb)
  }

  /**
   * 在版本管理模式下，用于获取版本的详细信息，包括版本 ID、描述、状态、创建时间、所属配置组信息以及版本配置文件的内容。版本管理功能内测中，当前仅白名单开放。
   */
  async DescribeConfigGroupVersionDetail(
    req: DescribeConfigGroupVersionDetailRequest,
    cb?: (error: string, rep: DescribeConfigGroupVersionDetailResponse) => void
  ): Promise<DescribeConfigGroupVersionDetailResponse> {
    return this.request("DescribeConfigGroupVersionDetail", req, cb)
  }

  /**
   * 本接口用于查询[规则引擎](https://cloud.tencent.com/document/product/1552/70901)的规则列表。
   */
  async DescribeL7AccRules(
    req: DescribeL7AccRulesRequest,
    cb?: (error: string, rep: DescribeL7AccRulesResponse) => void
  ): Promise<DescribeL7AccRulesResponse> {
    return this.request("DescribeL7AccRules", req, cb)
  }

  /**
   * 操作安全策略模板，支持将域名绑定或换绑到指定的策略模板，或者从指定的策略模板解绑。
   */
  async BindSecurityTemplateToEntity(
    req: BindSecurityTemplateToEntityRequest,
    cb?: (error: string, rep: BindSecurityTemplateToEntityResponse) => void
  ): Promise<BindSecurityTemplateToEntityResponse> {
    return this.request("BindSecurityTemplateToEntity", req, cb)
  }

  /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理转发规则状态
](https://cloud.tencent.com/document/product/1552/103409) 。
     */
  async ModifyApplicationProxyRuleStatus(
    req: ModifyApplicationProxyRuleStatusRequest,
    cb?: (error: string, rep: ModifyApplicationProxyRuleStatusResponse) => void
  ): Promise<ModifyApplicationProxyRuleStatusResponse> {
    return this.request("ModifyApplicationProxyRuleStatus", req, cb)
  }

  /**
   * 为未购买套餐的站点购买套餐
   */
  async CreatePlanForZone(
    req: CreatePlanForZoneRequest,
    cb?: (error: string, rep: CreatePlanForZoneResponse) => void
  ): Promise<CreatePlanForZoneResponse> {
    return this.request("CreatePlanForZone", req, cb)
  }

  /**
   * 删除源站组，若源站组仍然被服务（例如：四层代理，域名服务，负载均衡，规则引起）引用，将不允许删除。
   */
  async DeleteOriginGroup(
    req: DeleteOriginGroupRequest,
    cb?: (error: string, rep: DeleteOriginGroupResponse) => void
  ): Promise<DeleteOriginGroupResponse> {
    return this.request("DeleteOriginGroup", req, cb)
  }

  /**
   * 查询负载均衡实例列表。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
   */
  async DescribeLoadBalancerList(
    req: DescribeLoadBalancerListRequest,
    cb?: (error: string, rep: DescribeLoadBalancerListResponse) => void
  ): Promise<DescribeLoadBalancerListResponse> {
    return this.request("DescribeLoadBalancerList", req, cb)
  }

  /**
   * 创建安全 IP 组
   */
  async CreateSecurityIPGroup(
    req: CreateSecurityIPGroupRequest,
    cb?: (error: string, rep: CreateSecurityIPGroupResponse) => void
  ): Promise<CreateSecurityIPGroupResponse> {
    return this.request("CreateSecurityIPGroup", req, cb)
  }

  /**
   * 该接口可用于查询 IP 是否为 EdgeOne IP。
   */
  async DescribeIPRegion(
    req: DescribeIPRegionRequest,
    cb?: (error: string, rep: DescribeIPRegionResponse) => void
  ): Promise<DescribeIPRegionResponse> {
    return this.request("DescribeIPRegion", req, cb)
  }

  /**
   * 修改负载均衡实例配置。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
   */
  async ModifyLoadBalancer(
    req: ModifyLoadBalancerRequest,
    cb?: (error: string, rep: ModifyLoadBalancerResponse) => void
  ): Promise<ModifyLoadBalancerResponse> {
    return this.request("ModifyLoadBalancer", req, cb)
  }

  /**
   * 批量删除加速域名
   */
  async DeleteAccelerationDomains(
    req: DeleteAccelerationDomainsRequest,
    cb?: (error: string, rep: DeleteAccelerationDomainsResponse) => void
  ): Promise<DeleteAccelerationDomainsResponse> {
    return this.request("DeleteAccelerationDomains", req, cb)
  }

  /**
     * 通过本接口创建实时日志投递任务。本接口有如下限制：
同一个实体（七层域名或者四层代理实例）在同种数据投递类型（LogType）和数据投递区域（Area）的组合下，只能被添加到一个实时日志投递任务中。建议先通过 [DescribeRealtimeLogDeliveryTasks](https://cloud.tencent.com/document/product/1552/104110)  接口根据实体查询实时日志投递任务列表，检查实体是否已经被添加到另一实时日志投递任务中。
     */
  async CreateRealtimeLogDeliveryTask(
    req: CreateRealtimeLogDeliveryTaskRequest,
    cb?: (error: string, rep: CreateRealtimeLogDeliveryTaskResponse) => void
  ): Promise<CreateRealtimeLogDeliveryTaskResponse> {
    return this.request("CreateRealtimeLogDeliveryTask", req, cb)
  }

  /**
   * 用于修改四层代理实例的配置。
   */
  async ModifyL4Proxy(
    req: ModifyL4ProxyRequest,
    cb?: (error: string, rep: ModifyL4ProxyResponse) => void
  ): Promise<ModifyL4ProxyResponse> {
    return this.request("ModifyL4Proxy", req, cb)
  }

  /**
   * 用于修改四层代理转发规则，支持单条或者批量修改。
   */
  async ModifyL4ProxyRules(
    req: ModifyL4ProxyRulesRequest,
    cb?: (error: string, rep: ModifyL4ProxyRulesResponse) => void
  ): Promise<ModifyL4ProxyRulesResponse> {
    return this.request("ModifyL4ProxyRules", req, cb)
  }

  /**
   * 您可以通过本接口批量修改 DNS 记录。
   */
  async ModifyDnsRecords(
    req: ModifyDnsRecordsRequest,
    cb?: (error: string, rep: ModifyDnsRecordsResponse) => void
  ): Promise<ModifyDnsRecordsResponse> {
    return this.request("ModifyDnsRecords", req, cb)
  }

  /**
   * 本接口用于查询七层缓存分析时序类流量数据。此接口待废弃，请使用 <a href="https://cloud.tencent.com/document/product/1552/80648">DescribeTimingL7AnalysisData</a> 接口。
   */
  async DescribeTimingL7CacheData(
    req: DescribeTimingL7CacheDataRequest,
    cb?: (error: string, rep: DescribeTimingL7CacheDataResponse) => void
  ): Promise<DescribeTimingL7CacheDataResponse> {
    return this.request("DescribeTimingL7CacheData", req, cb)
  }

  /**
   * 在版本管理模式下，用于查询指定配置组的版本列表。版本管理功能内测中，当前仅白名单开放。
   */
  async DescribeConfigGroupVersions(
    req: DescribeConfigGroupVersionsRequest,
    cb?: (error: string, rep: DescribeConfigGroupVersionsResponse) => void
  ): Promise<DescribeConfigGroupVersionsResponse> {
    return this.request("DescribeConfigGroupVersions", req, cb)
  }

  /**
   * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [ModifyL7AccSetting](https://cloud.tencent.com/document/product/1552/115817)。
   */
  async ModifyZoneSetting(
    req: ModifyZoneSettingRequest,
    cb?: (error: string, rep: ModifyZoneSettingResponse) => void
  ): Promise<ModifyZoneSettingResponse> {
    return this.request("ModifyZoneSetting", req, cb)
  }

  /**
   * 创建别称域名。
   */
  async CreateAliasDomain(
    req: CreateAliasDomainRequest,
    cb?: (error: string, rep: CreateAliasDomainResponse) => void
  ): Promise<CreateAliasDomainResponse> {
    return this.request("CreateAliasDomain", req, cb)
  }

  /**
   * 修改别称域名状态。
   */
  async ModifyAliasDomainStatus(
    req: ModifyAliasDomainStatusRequest,
    cb?: (error: string, rep: ModifyAliasDomainStatusResponse) => void
  ): Promise<ModifyAliasDomainStatusResponse> {
    return this.request("ModifyAliasDomainStatus", req, cb)
  }

  /**
   * 查询安全 IP 组的配置信息，包括安全 IP 组的 ID、名称和内容。
   */
  async DescribeSecurityIPGroup(
    req: DescribeSecurityIPGroupRequest,
    cb?: (error: string, rep: DescribeSecurityIPGroupResponse) => void
  ): Promise<DescribeSecurityIPGroupResponse> {
    return this.request("DescribeSecurityIPGroup", req, cb)
  }

  /**
   * 用于创建四层代理实例规则，支持单条或者批量创建。
   */
  async CreateL4ProxyRules(
    req: CreateL4ProxyRulesRequest,
    cb?: (error: string, rep: CreateL4ProxyRulesResponse) => void
  ): Promise<CreateL4ProxyRulesResponse> {
    return this.request("CreateL4ProxyRules", req, cb)
  }

  /**
   * 本接口（DescribeTimingL4Data）用于查询四层时序流量数据列表。
   */
  async DescribeTimingL4Data(
    req: DescribeTimingL4DataRequest,
    cb?: (error: string, rep: DescribeTimingL4DataResponse) => void
  ): Promise<DescribeTimingL4DataResponse> {
    return this.request("DescribeTimingL4Data", req, cb)
  }

  /**
   * 本接口用于查询七层缓存分析 topN 数据。此接口待废弃，请使用 <a href="https://cloud.tencent.com/document/product/1552/80646"> DescribeTopL7AnalysisData</a> 接口。
   */
  async DescribeTopL7CacheData(
    req: DescribeTopL7CacheDataRequest,
    cb?: (error: string, rep: DescribeTopL7CacheDataResponse) => void
  ): Promise<DescribeTopL7CacheDataResponse> {
    return this.request("DescribeTopL7CacheData", req, cb)
  }

  /**
   * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [ModifyL7AccRule](https://cloud.tencent.com/document/product/1552/115818)。
   */
  async ModifyRule(
    req: ModifyRuleRequest,
    cb?: (error: string, rep: ModifyRuleResponse) => void
  ): Promise<ModifyRuleResponse> {
    return this.request("ModifyRule", req, cb)
  }

  /**
   * 本接口用于查询七层域名业务按照指定维度的 topN 数据。请注意本接口查询数据有 10 分钟左右延迟，建议拉取当前时间 10 分钟以前的数据。
   */
  async DescribeTopL7AnalysisData(
    req: DescribeTopL7AnalysisDataRequest,
    cb?: (error: string, rep: DescribeTopL7AnalysisDataResponse) => void
  ): Promise<DescribeTopL7AnalysisDataResponse> {
    return this.request("DescribeTopL7AnalysisData", req, cb)
  }

  /**
   * 您可以用本接口批量删除 DNS 记录。
   */
  async DeleteDnsRecords(
    req: DeleteDnsRecordsRequest,
    cb?: (error: string, rep: DeleteDnsRecordsResponse) => void
  ): Promise<DeleteDnsRecordsResponse> {
    return this.request("DeleteDnsRecords", req, cb)
  }

  /**
   * 修改Web&Bot安全配置。
   */
  async ModifySecurityPolicy(
    req: ModifySecurityPolicyRequest,
    cb?: (error: string, rep: ModifySecurityPolicyResponse) => void
  ): Promise<ModifySecurityPolicyResponse> {
    return this.request("ModifySecurityPolicy", req, cb)
  }

  /**
   * 修改套餐配置。目前仅支持修改预付费套餐的自动续费开关。
   */
  async ModifyPlan(
    req: ModifyPlanRequest,
    cb?: (error: string, rep: ModifyPlanResponse) => void
  ): Promise<ModifyPlanResponse> {
    return this.request("ModifyPlan", req, cb)
  }

  /**
   * 本接口用于删除[规则引擎](https://cloud.tencent.com/document/product/1552/70901)的规则，支持批量删除。
   */
  async DeleteL7AccRules(
    req: DeleteL7AccRulesRequest,
    cb?: (error: string, rep: DeleteL7AccRulesResponse) => void
  ): Promise<DeleteL7AccRulesResponse> {
    return this.request("DeleteL7AccRules", req, cb)
  }

  /**
   * 将未绑定套餐的站点绑定到已有套餐
   */
  async BindZoneToPlan(
    req: BindZoneToPlanRequest,
    cb?: (error: string, rep: BindZoneToPlanResponse) => void
  ): Promise<BindZoneToPlanResponse> {
    return this.request("BindZoneToPlan", req, cb)
  }

  /**
   * 查询负载均衡实例下源站组健康状态。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
   */
  async DescribeOriginGroupHealthStatus(
    req: DescribeOriginGroupHealthStatusRequest,
    cb?: (error: string, rep: DescribeOriginGroupHealthStatusResponse) => void
  ): Promise<DescribeOriginGroupHealthStatusResponse> {
    return this.request("DescribeOriginGroupHealthStatus", req, cb)
  }

  /**
   * 用于删除四层代理转发规则，支持单条或者批量操作。
   */
  async DeleteL4ProxyRules(
    req: DeleteL4ProxyRulesRequest,
    cb?: (error: string, rep: DeleteL4ProxyRulesResponse) => void
  ): Promise<DeleteL4ProxyRulesResponse> {
    return this.request("DeleteL4ProxyRules", req, cb)
  }

  /**
   * 创建自定义错误页面。
   */
  async CreateCustomizeErrorPage(
    req: CreateCustomizeErrorPageRequest,
    cb?: (error: string, rep: CreateCustomizeErrorPageResponse) => void
  ): Promise<CreateCustomizeErrorPageResponse> {
    return this.request("CreateCustomizeErrorPage", req, cb)
  }

  /**
   * 修改加速域名信息
   */
  async ModifyAccelerationDomain(
    req: ModifyAccelerationDomainRequest,
    cb?: (error: string, rep: ModifyAccelerationDomainResponse) => void
  ): Promise<ModifyAccelerationDomainResponse> {
    return this.request("ModifyAccelerationDomain", req, cb)
  }

  /**
   * 用于创建四层代理实例。
   */
  async CreateL4Proxy(
    req: CreateL4ProxyRequest,
    cb?: (error: string, rep: CreateL4ProxyResponse) => void
  ): Promise<CreateL4ProxyResponse> {
    return this.request("CreateL4Proxy", req, cb)
  }

  /**
   * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理实例状态](https://cloud.tencent.com/document/product/1552/103408) 。
   */
  async ModifyApplicationProxyStatus(
    req: ModifyApplicationProxyStatusRequest,
    cb?: (error: string, rep: ModifyApplicationProxyStatusResponse) => void
  ): Promise<ModifyApplicationProxyStatusResponse> {
    return this.request("ModifyApplicationProxyStatus", req, cb)
  }

  /**
     * 若您需要使用 Edgeone 产品，您需要通过此接口创建计费套餐。
> 创建套餐后，您需要通过 [CreateZone](https://cloud.tencent.com/document/product/1552/80719) 完成创建站点，绑定套餐的流程，Edgeone 才能正常提供服务。
     */
  async CreatePlan(
    req: CreatePlanRequest,
    cb?: (error: string, rep: CreatePlanResponse) => void
  ): Promise<CreatePlanResponse> {
    return this.request("CreatePlan", req, cb)
  }

  /**
   * 本接口查询七层域名业务的时序数据。请注意本接口查询数据有 10 分钟左右延迟，建议拉取当前时间 10 分钟以前的数据。
   */
  async DescribeTimingL7AnalysisData(
    req: DescribeTimingL7AnalysisDataRequest,
    cb?: (error: string, rep: DescribeTimingL7AnalysisDataResponse) => void
  ): Promise<DescribeTimingL7AnalysisDataResponse> {
    return this.request("DescribeTimingL7AnalysisData", req, cb)
  }

  /**
   * 创建并部署边缘函数至 EdgeOne 的边缘节点。
   */
  async CreateFunction(
    req: CreateFunctionRequest,
    cb?: (error: string, rep: CreateFunctionResponse) => void
  ): Promise<CreateFunctionResponse> {
    return this.request("CreateFunction", req, cb)
  }

  /**
   * 本接口为旧版，如需调用请尽快迁移至新版，新版接口中将四层代理实例列表的查询和四层转发规则的查询拆分成两个接口，详情请参考 [查询四层代理实例列表](https://cloud.tencent.com/document/product/1552/103413) 和 [查询四层代理转发规则列表](https://cloud.tencent.com/document/product/1552/103412)。
   */
  async DescribeApplicationProxies(
    req: DescribeApplicationProxiesRequest,
    cb?: (error: string, rep: DescribeApplicationProxiesResponse) => void
  ): Promise<DescribeApplicationProxiesResponse> {
    return this.request("DescribeApplicationProxies", req, cb)
  }

  /**
   * 用于创建共享 CNAME，该功能白名单内测中。
   */
  async CreateSharedCNAME(
    req: CreateSharedCNAMERequest,
    cb?: (error: string, rep: CreateSharedCNAMEResponse) => void
  ): Promise<CreateSharedCNAMEResponse> {
    return this.request("CreateSharedCNAME", req, cb)
  }

  /**
   * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [CreateL7AccRules](https://cloud.tencent.com/document/product/1552/115822)。
   */
  async CreateRule(
    req: CreateRuleRequest,
    cb?: (error: string, rep: CreateRuleResponse) => void
  ): Promise<CreateRuleResponse> {
    return this.request("CreateRule", req, cb)
  }

  /**
   * 在版本管理模式下，用于创建指定配置组的新版本。版本管理功能内测中，当前仅白名单开放。
   */
  async CreateConfigGroupVersion(
    req: CreateConfigGroupVersionRequest,
    cb?: (error: string, rep: CreateConfigGroupVersionResponse) => void
  ): Promise<CreateConfigGroupVersionResponse> {
    return this.request("CreateConfigGroupVersion", req, cb)
  }

  /**
   * 您可以通过本接口批量修改 DNS 记录的状态，批量对记录进行开启和停用。
   */
  async ModifyDnsRecordsStatus(
    req: ModifyDnsRecordsStatusRequest,
    cb?: (error: string, rep: ModifyDnsRecordsStatusResponse) => void
  ): Promise<ModifyDnsRecordsStatusResponse> {
    return this.request("ModifyDnsRecordsStatus", req, cb)
  }

  /**
   * 修改边缘函数，支持修改函数的内容及描述信息，修改且重新部署后，函数立刻生效。
   */
  async ModifyFunction(
    req: ModifyFunctionRequest,
    cb?: (error: string, rep: ModifyFunctionResponse) => void
  ): Promise<ModifyFunctionResponse> {
    return this.request("ModifyFunction", req, cb)
  }

  /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理实例
](https://cloud.tencent.com/document/product/1552/103411) 。
     */
  async ModifyApplicationProxy(
    req: ModifyApplicationProxyRequest,
    cb?: (error: string, rep: ModifyApplicationProxyResponse) => void
  ): Promise<ModifyApplicationProxyResponse> {
    return this.request("ModifyApplicationProxy", req, cb)
  }

  /**
     * EdgeOne 为您提供 CNAME、NS 和无域名接入三种接入方式，您需要先通过此接口完成站点创建。CNAME 和 NS 接入站点的场景可参考 [从零开始快速接入 EdgeOne](https://cloud.tencent.com/document/product/1552/87601); 无域名接入的场景可参考 [快速启用四层代理服务](https://cloud.tencent.com/document/product/1552/96051)。

> 建议您在账号下已存在套餐时调用本接口创建站点，请在入参时传入 PlanId ，直接将站点绑定至该套餐；不传入 PlanId 时，创建出来的站点会处于未激活状态，无法正常服务，您需要通过 [BindZoneToPlan](https://cloud.tencent.com/document/product/1552/83042) 完成套餐绑定之后，站点才可正常提供服务 。若您当前没有可绑定的套餐时，请前往控制台购买套餐完成站点创建。
     */
  async CreateZone(
    req: CreateZoneRequest,
    cb?: (error: string, rep: CreateZoneResponse) => void
  ): Promise<CreateZoneResponse> {
    return this.request("CreateZone", req, cb)
  }

  /**
   * 修改边缘函数触发规则，支持修改规则条件、执行函数以及描述信息。
   */
  async ModifyFunctionRule(
    req: ModifyFunctionRuleRequest,
    cb?: (error: string, rep: ModifyFunctionRuleResponse) => void
  ): Promise<ModifyFunctionRuleResponse> {
    return this.request("ModifyFunctionRule", req, cb)
  }

  /**
   * 查询当前账户可用套餐信息列表
   */
  async DescribeAvailablePlans(
    req?: DescribeAvailablePlansRequest,
    cb?: (error: string, rep: DescribeAvailablePlansResponse) => void
  ): Promise<DescribeAvailablePlansResponse> {
    return this.request("DescribeAvailablePlans", req, cb)
  }

  /**
   * 查询自定义错误页列表。
   */
  async DescribeCustomErrorPages(
    req: DescribeCustomErrorPagesRequest,
    cb?: (error: string, rep: DescribeCustomErrorPagesResponse) => void
  ): Promise<DescribeCustomErrorPagesResponse> {
    return this.request("DescribeCustomErrorPages", req, cb)
  }

  /**
   * 删除负载均衡实例，若负载均衡示例被其他服务（例如：四层代理等）引用的时候，示例无法被删除，需要先解除引用关系。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
   */
  async DeleteLoadBalancer(
    req: DeleteLoadBalancerRequest,
    cb?: (error: string, rep: DeleteLoadBalancerResponse) => void
  ): Promise<DeleteLoadBalancerResponse> {
    return this.request("DeleteLoadBalancer", req, cb)
  }

  /**
   * 删除指定的内容标识符。该功能仅白名单开放。
   */
  async DeleteContentIdentifier(
    req: DeleteContentIdentifierRequest,
    cb?: (error: string, rep: DeleteContentIdentifierResponse) => void
  ): Promise<DeleteContentIdentifierResponse> {
    return this.request("DeleteContentIdentifier", req, cb)
  }

  /**
   * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [RuleEngineAction](https://cloud.tencent.com/document/product/1552/80721#RuleEngineAction)。
   */
  async DescribeRulesSetting(
    req?: DescribeRulesSettingRequest,
    cb?: (error: string, rep: DescribeRulesSettingResponse) => void
  ): Promise<DescribeRulesSettingResponse> {
    return this.request("DescribeRulesSetting", req, cb)
  }

  /**
   * 批量修改加速域名状态
   */
  async ModifyAccelerationDomainStatuses(
    req: ModifyAccelerationDomainStatusesRequest,
    cb?: (error: string, rep: ModifyAccelerationDomainStatusesResponse) => void
  ): Promise<ModifyAccelerationDomainStatusesResponse> {
    return this.request("ModifyAccelerationDomainStatuses", req, cb)
  }

  /**
   * 查询边缘函数触发规则列表，支持按照规则 ID、函数 ID、规则描述等条件进行过滤。
   */
  async DescribeFunctionRules(
    req: DescribeFunctionRulesRequest,
    cb?: (error: string, rep: DescribeFunctionRulesResponse) => void
  ): Promise<DescribeFunctionRulesResponse> {
    return this.request("DescribeFunctionRules", req, cb)
  }

  /**
   * 通过本接口删除实时日志投递任务。
   */
  async DeleteRealtimeLogDeliveryTask(
    req: DeleteRealtimeLogDeliveryTaskRequest,
    cb?: (error: string, rep: DeleteRealtimeLogDeliveryTaskResponse) => void
  ): Promise<DeleteRealtimeLogDeliveryTaskResponse> {
    return this.request("DeleteRealtimeLogDeliveryTask", req, cb)
  }

  /**
   * 本接口（DescribeDDoSAttackTopData）用于查询DDoS攻击Top数据。
   */
  async DescribeDDoSAttackTopData(
    req: DescribeDDoSAttackTopDataRequest,
    cb?: (error: string, rep: DescribeDDoSAttackTopDataResponse) => void
  ): Promise<DescribeDDoSAttackTopDataResponse> {
    return this.request("DescribeDDoSAttackTopData", req, cb)
  }

  /**
   * 用于开启，关闭站点。
   */
  async ModifyZoneStatus(
    req: ModifyZoneStatusRequest,
    cb?: (error: string, rep: ModifyZoneStatusResponse) => void
  ): Promise<ModifyZoneStatusResponse> {
    return this.request("ModifyZoneStatus", req, cb)
  }

  /**
   * 本接口用于在[规则引擎](https://cloud.tencent.com/document/product/1552/70901)中创建规则，支持批量创建。
   */
  async CreateL7AccRules(
    req: CreateL7AccRulesRequest,
    cb?: (error: string, rep: CreateL7AccRulesResponse) => void
  ): Promise<CreateL7AccRulesResponse> {
    return this.request("CreateL7AccRules", req, cb)
  }

  /**
   * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 CreatePurgeTasks 接口提交的任务均可通过此接口进行查询。
   */
  async DescribePurgeTasks(
    req: DescribePurgeTasksRequest,
    cb?: (error: string, rep: DescribePurgeTasksResponse) => void
  ): Promise<DescribePurgeTasksResponse> {
    return this.request("DescribePurgeTasks", req, cb)
  }

  /**
   * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [DeleteL7AccRules](https://cloud.tencent.com/document/product/1552/115821)。
   */
  async DeleteRules(
    req: DeleteRulesRequest,
    cb?: (error: string, rep: DeleteRulesResponse) => void
  ): Promise<DeleteRulesResponse> {
    return this.request("DeleteRules", req, cb)
  }

  /**
   * 查询四层代理实例下的转发规则列表。
   */
  async DescribeL4ProxyRules(
    req: DescribeL4ProxyRulesRequest,
    cb?: (error: string, rep: DescribeL4ProxyRulesResponse) => void
  ): Promise<DescribeL4ProxyRulesResponse> {
    return this.request("DescribeL4ProxyRules", req, cb)
  }

  /**
   * 删除自定义错误页面。
   */
  async DeleteCustomErrorPage(
    req: DeleteCustomErrorPageRequest,
    cb?: (error: string, rep: DeleteCustomErrorPageResponse) => void
  ): Promise<DeleteCustomErrorPageResponse> {
    return this.request("DeleteCustomErrorPage", req, cb)
  }

  /**
     * 操作边缘函数运行环境，支持环境变量的相关设置。
设置环境变量后，可在函数代码中使用，具体参考 [边缘函数引入环境变量](https://cloud.tencent.com/document/product/1552/109151#0151fd9a-8b0e-407b-ae37-54553a60ded6)。
     */
  async HandleFunctionRuntimeEnvironment(
    req: HandleFunctionRuntimeEnvironmentRequest,
    cb?: (error: string, rep: HandleFunctionRuntimeEnvironmentResponse) => void
  ): Promise<HandleFunctionRuntimeEnvironmentResponse> {
    return this.request("HandleFunctionRuntimeEnvironment", req, cb)
  }

  /**
   * 本接口（DescribeDDoSAttackEvent）用于查询DDoS攻击事件列表。
   */
  async DescribeDDoSAttackEvent(
    req: DescribeDDoSAttackEventRequest,
    cb?: (error: string, rep: DescribeDDoSAttackEventResponse) => void
  ): Promise<DescribeDDoSAttackEventResponse> {
    return this.request("DescribeDDoSAttackEvent", req, cb)
  }

  /**
   * 修改内容标识符，仅支持修改描述。该功能仅白名单开放。
   */
  async ModifyContentIdentifier(
    req: ModifyContentIdentifierRequest,
    cb?: (error: string, rep: ModifyContentIdentifierResponse) => void
  ): Promise<ModifyContentIdentifierResponse> {
    return this.request("ModifyContentIdentifier", req, cb)
  }

  /**
     * 当您需要使用高等级套餐才拥有的功能，可以通过本接口升级套餐，仅支持个人版，基础版套餐进行升级。
> 不同类型 Edgeone 计费套餐区别参考 [Edgeone计费套餐选型对比](https://cloud.tencent.com/document/product/1552/94165)
计费套餐升级规则以及资费详情参考 [Edgeone计费套餐升配说明](https://cloud.tencent.com/document/product/1552/95291)
如果需要将套餐升级至企业版，请 [联系我们](https://cloud.tencent.com/online-service)
     */
  async UpgradePlan(
    req: UpgradePlanRequest,
    cb?: (error: string, rep: UpgradePlanResponse) => void
  ): Promise<UpgradePlanResponse> {
    return this.request("UpgradePlan", req, cb)
  }

  /**
   * 修改边缘函数触发规则的优先级。
   */
  async ModifyFunctionRulePriority(
    req: ModifyFunctionRulePriorityRequest,
    cb?: (error: string, rep: ModifyFunctionRulePriorityResponse) => void
  ): Promise<ModifyFunctionRulePriorityResponse> {
    return this.request("ModifyFunctionRulePriority", req, cb)
  }

  /**
   * 修改安全 IP 组。
   */
  async ModifySecurityIPGroup(
    req: ModifySecurityIPGroupRequest,
    cb?: (error: string, rep: ModifySecurityIPGroupResponse) => void
  ): Promise<ModifySecurityIPGroupResponse> {
    return this.request("ModifySecurityIPGroup", req, cb)
  }

  /**
   * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [DescribeL7AccRules](https://cloud.tencent.com/document/product/1552/115820)。
   */
  async DescribeRules(
    req: DescribeRulesRequest,
    cb?: (error: string, rep: DescribeRulesResponse) => void
  ): Promise<DescribeRulesResponse> {
    return this.request("DescribeRules", req, cb)
  }

  /**
   * 针对指定实时日志投递任务（task-id），在对应的腾讯云 CLS 日志主题中创建投递日志字段对应的键值索引。如果您在腾讯云 CLS 已经创建索引，本接口将采用合并的方式追加索引。
   */
  async CreateCLSIndex(
    req: CreateCLSIndexRequest,
    cb?: (error: string, rep: CreateCLSIndexResponse) => void
  ): Promise<CreateCLSIndexResponse> {
    return this.request("CreateCLSIndex", req, cb)
  }

  /**
   * 本接口为旧版，如需调用请尽快迁移至新版 [创建四层代理实例](https://cloud.tencent.com/document/product/1552/103417) 。
   */
  async CreateApplicationProxy(
    req: CreateApplicationProxyRequest,
    cb?: (error: string, rep: CreateApplicationProxyResponse) => void
  ): Promise<CreateApplicationProxyResponse> {
    return this.request("CreateApplicationProxy", req, cb)
  }

  /**
   * 获取源站组列表
   */
  async DescribeOriginGroup(
    req: DescribeOriginGroupRequest,
    cb?: (error: string, rep: DescribeOriginGroupResponse) => void
  ): Promise<DescribeOriginGroupResponse> {
    return this.request("DescribeOriginGroup", req, cb)
  }

  /**
   * 修改别称域名。
   */
  async ModifyAliasDomain(
    req: ModifyAliasDomainRequest,
    cb?: (error: string, rep: ModifyAliasDomainResponse) => void
  ): Promise<ModifyAliasDomainResponse> {
    return this.request("ModifyAliasDomain", req, cb)
  }

  /**
   * 创建负载均衡实例。详情请参考 [快速创建负载均衡实例](https://cloud.tencent.com/document/product/1552/104223)。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
   */
  async CreateLoadBalancer(
    req: CreateLoadBalancerRequest,
    cb?: (error: string, rep: CreateLoadBalancerResponse) => void
  ): Promise<CreateLoadBalancerResponse> {
    return this.request("CreateLoadBalancer", req, cb)
  }

  /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理转发规则
](https://cloud.tencent.com/document/product/1552/103410) 。
     */
  async ModifyApplicationProxyRule(
    req: ModifyApplicationProxyRuleRequest,
    cb?: (error: string, rep: ModifyApplicationProxyRuleResponse) => void
  ): Promise<ModifyApplicationProxyRuleResponse> {
    return this.request("ModifyApplicationProxyRule", req, cb)
  }

  /**
   * 本接口用于查询[站点加速](https://cloud.tencent.com/document/product/1552/96193)全局配置。
   */
  async DescribeL7AccSetting(
    req: DescribeL7AccSettingRequest,
    cb?: (error: string, rep: DescribeL7AccSettingResponse) => void
  ): Promise<DescribeL7AccSettingResponse> {
    return this.request("DescribeL7AccSetting", req, cb)
  }

  /**
   * 创建源站组，以源站组的方式管理业务源站。此处配置的源站组可于**添加加速域名**和**四层代理**等功能中引用。
   */
  async CreateOriginGroup(
    req: CreateOriginGroupRequest,
    cb?: (error: string, rep: CreateOriginGroupResponse) => void
  ): Promise<CreateOriginGroupResponse> {
    return this.request("CreateOriginGroup", req, cb)
  }

  /**
     * 完成域名创建之后，您可以为域名配置自有证书，也可以使用 EdgeOne 为您提供的 [免费证书](https://cloud.tencent.com/document/product/1552/90437)。
如果您需要配置自有证书，请先将证书上传至 [SSL证书控制台](https://console.cloud.tencent.com/certoverview)，然后在本接口中传入对应的证书 ID。详情参考 [部署自有证书至 EdgeOne 域名
](https://cloud.tencent.com/document/product/1552/88874)。
     */
  async ModifyHostsCertificate(
    req: ModifyHostsCertificateRequest,
    cb?: (error: string, rep: ModifyHostsCertificateResponse) => void
  ): Promise<ModifyHostsCertificateResponse> {
    return this.request("ModifyHostsCertificate", req, cb)
  }

  /**
   * 在版本管理模式下，用于查询生产/测试环境的版本发布历史。版本管理功能内测中，当前仅白名单开放。
   */
  async DescribeDeployHistory(
    req: DescribeDeployHistoryRequest,
    cb?: (error: string, rep: DescribeDeployHistoryResponse) => void
  ): Promise<DescribeDeployHistoryResponse> {
    return this.request("DescribeDeployHistory", req, cb)
  }

  /**
   * 在版本管理模式下，用于版本发布，可通过 EnvId 将版本发布至测试环境或生产环境。版本管理功能内测中，当前仅白名单开放。
   */
  async DeployConfigGroupVersion(
    req: DeployConfigGroupVersionRequest,
    cb?: (error: string, rep: DeployConfigGroupVersionResponse) => void
  ): Promise<DeployConfigGroupVersionResponse> {
    return this.request("DeployConfigGroupVersion", req, cb)
  }

  /**
   * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，可通过 [DescribeL7AccSetting](https://cloud.tencent.com/document/product/1552/115819) 和 [DescribeL7AccRules](https://cloud.tencent.com/document/product/1552/115820) 来获取域名的详细配置。
   */
  async DescribeHostsSetting(
    req: DescribeHostsSettingRequest,
    cb?: (error: string, rep: DescribeHostsSettingResponse) => void
  ): Promise<DescribeHostsSettingResponse> {
    return this.request("DescribeHostsSetting", req, cb)
  }

  /**
   * 查询指定策略模板的绑定关系列表。
   */
  async DescribeSecurityTemplateBindings(
    req: DescribeSecurityTemplateBindingsRequest,
    cb?: (error: string, rep: DescribeSecurityTemplateBindingsResponse) => void
  ): Promise<DescribeSecurityTemplateBindingsResponse> {
    return this.request("DescribeSecurityTemplateBindings", req, cb)
  }

  /**
   * 用于删除四层代理实例。
   */
  async DeleteL4Proxy(
    req: DeleteL4ProxyRequest,
    cb?: (error: string, rep: DeleteL4ProxyResponse) => void
  ): Promise<DeleteL4ProxyResponse> {
    return this.request("DeleteL4Proxy", req, cb)
  }

  /**
   * 用于加速域名绑定或解绑共享 CNAME，该功能白名单内测中。
   */
  async BindSharedCNAME(
    req: BindSharedCNAMERequest,
    cb?: (error: string, rep: BindSharedCNAMEResponse) => void
  ): Promise<BindSharedCNAMEResponse> {
    return this.request("BindSharedCNAME", req, cb)
  }

  /**
   * 通过本接口修改实时日志投递任务配置。本接口有如下限制：<li>不支持修改实时日志投递任务目的地类型（TaskType）；</li><li>不支持修改数据投递类型（LogType）</li><li>不支持修改数据投递区域（Area）</li><li>当原实时日志投递任务的目的地为腾讯云 CLS 时，不支持修改目的地详细配置，如日志集、日志主题。</li>
   */
  async ModifyRealtimeLogDeliveryTask(
    req: ModifyRealtimeLogDeliveryTaskRequest,
    cb?: (error: string, rep: ModifyRealtimeLogDeliveryTaskResponse) => void
  ): Promise<ModifyRealtimeLogDeliveryTaskResponse> {
    return this.request("ModifyRealtimeLogDeliveryTask", req, cb)
  }

  /**
   * 查询源站防护信息
   */
  async DescribeOriginProtection(
    req: DescribeOriginProtectionRequest,
    cb?: (error: string, rep: DescribeOriginProtectionResponse) => void
  ): Promise<DescribeOriginProtectionResponse> {
    return this.request("DescribeOriginProtection", req, cb)
  }

  /**
   * 用于启用/停用四层代理转发规则状态，支持单条或者批量操作。
   */
  async ModifyL4ProxyRulesStatus(
    req: ModifyL4ProxyRulesStatusRequest,
    cb?: (error: string, rep: ModifyL4ProxyRulesStatusResponse) => void
  ): Promise<ModifyL4ProxyRulesStatusResponse> {
    return this.request("ModifyL4ProxyRulesStatus", req, cb)
  }

  /**
     * 当您的套餐需要延长有效期，可以通过该接口进行续费。套餐续费仅支持个人版，基础版，标准版套餐。
> 费用详情可参考 [套餐费用](https://cloud.tencent.com/document/product/1552/94158)
     */
  async RenewPlan(
    req: RenewPlanRequest,
    cb?: (error: string, rep: RenewPlanResponse) => void
  ): Promise<RenewPlanResponse> {
    return this.request("RenewPlan", req, cb)
  }

  /**
   * 本接口为旧版，EdgeOne 已对规则引擎相关接口全面升级，详情请参考 [DescribeL7AccSetting](https://cloud.tencent.com/document/product/1552/115819)。
   */
  async DescribeZoneSetting(
    req: DescribeZoneSettingRequest,
    cb?: (error: string, rep: DescribeZoneSettingResponse) => void
  ): Promise<DescribeZoneSettingResponse> {
    return this.request("DescribeZoneSetting", req, cb)
  }

  /**
   * 查询站点配置项导入结果接口，本接口用于站点配置导入接口（ImportZoneConfig）的结果查询。该功能仅支持标准版或企业版套餐的站点使用。
   */
  async DescribeZoneConfigImportResult(
    req: DescribeZoneConfigImportResultRequest,
    cb?: (error: string, rep: DescribeZoneConfigImportResultResponse) => void
  ): Promise<DescribeZoneConfigImportResultResponse> {
    return this.request("DescribeZoneConfigImportResult", req, cb)
  }

  /**
   * 创建内容标识符，可以设置描述、标签等信息，同时需要绑定企业版套餐用于统计计费数据；一个内容标识符只能绑定一个计费套餐，一个计费套餐可以绑定多个内容标识符。该功能仅限白名单开放。
   */
  async CreateContentIdentifier(
    req: CreateContentIdentifierRequest,
    cb?: (error: string, rep: CreateContentIdentifierResponse) => void
  ): Promise<CreateContentIdentifierResponse> {
    return this.request("CreateContentIdentifier", req, cb)
  }

  /**
   * 删除指定 IP 组，如果有规则引用了 IP 组情况，则不允许删除。
   */
  async DeleteSecurityIPGroup(
    req: DeleteSecurityIPGroupRequest,
    cb?: (error: string, rep: DeleteSecurityIPGroupResponse) => void
  ): Promise<DeleteSecurityIPGroupResponse> {
    return this.request("DeleteSecurityIPGroup", req, cb)
  }

  /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [创建四层代理转发规则
](https://cloud.tencent.com/document/product/1552/103416) 。
     */
  async CreateApplicationProxyRule(
    req: CreateApplicationProxyRuleRequest,
    cb?: (error: string, rep: CreateApplicationProxyRuleResponse) => void
  ): Promise<CreateApplicationProxyRuleResponse> {
    return this.request("CreateApplicationProxyRule", req, cb)
  }

  /**
   * 该接口用于查询您有权限的站点信息。可根据不同查询条件筛选站点。
   */
  async DescribeZones(
    req: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 查询边缘函数列表，支持函数 ID、函数名称、描述等条件的过滤。
   */
  async DescribeFunctions(
    req: DescribeFunctionsRequest,
    cb?: (error: string, rep: DescribeFunctionsResponse) => void
  ): Promise<DescribeFunctionsResponse> {
    return this.request("DescribeFunctions", req, cb)
  }

  /**
   * 删除站点。
   */
  async DeleteZone(
    req: DeleteZoneRequest,
    cb?: (error: string, rep: DeleteZoneResponse) => void
  ): Promise<DeleteZoneResponse> {
    return this.request("DeleteZone", req, cb)
  }

  /**
     * 接口已废弃，将于 2024 年 6 月 30 日停止服务。请使用 [查询安全 IP 组
](https://cloud.tencent.com/document/product/1552/105866) 接口。

查询 IP 组的配置信息，包括 IP 组名称、 IP 组内容、 IP 组归属站点。
     */
  async DescribeSecurityIPGroupInfo(
    req: DescribeSecurityIPGroupInfoRequest,
    cb?: (error: string, rep: DescribeSecurityIPGroupInfoResponse) => void
  ): Promise<DescribeSecurityIPGroupInfoResponse> {
    return this.request("DescribeSecurityIPGroupInfo", req, cb)
  }

  /**
   * 您可以用过本接口查看站点下的 DNS 记录信息，包括 DNS 记录名、记录类型以及记录内容等信息，支持指定过滤条件查询对应的 DNS 记录信息。
   */
  async DescribeDnsRecords(
    req: DescribeDnsRecordsRequest,
    cb?: (error: string, rep: DescribeDnsRecordsResponse) => void
  ): Promise<DescribeDnsRecordsResponse> {
    return this.request("DescribeDnsRecords", req, cb)
  }

  /**
   * 导入站点配置接口，本接口支持站点配置文件的快速导入，发起导入后接口会返回对应的任务 ID（TaskId），用户需通过查询站点配置导入结果接口（DescribeZoneConfigImportResult）获取本次导入任务执行的结果。该功能仅支持标准版和企业版套餐站点使用。
   */
  async ImportZoneConfig(
    req: ImportZoneConfigRequest,
    cb?: (error: string, rep: ImportZoneConfigResponse) => void
  ): Promise<ImportZoneConfigResponse> {
    return this.request("ImportZoneConfig", req, cb)
  }

  /**
   * 修改自定义错误页面。
   */
  async ModifyCustomErrorPage(
    req: ModifyCustomErrorPageRequest,
    cb?: (error: string, rep: ModifyCustomErrorPageResponse) => void
  ): Promise<ModifyCustomErrorPageResponse> {
    return this.request("ModifyCustomErrorPage", req, cb)
  }

  /**
   * 本接口（DescribeDDoSAttackData）用于查询DDoS攻击时序数据。
   */
  async DescribeDDoSAttackData(
    req: DescribeDDoSAttackDataRequest,
    cb?: (error: string, rep: DescribeDDoSAttackDataResponse) => void
  ): Promise<DescribeDDoSAttackDataResponse> {
    return this.request("DescribeDDoSAttackData", req, cb)
  }

  /**
   * 用于删除共享 CNAME，该功能白名单内测中。
   */
  async DeleteSharedCNAME(
    req: DeleteSharedCNAMERequest,
    cb?: (error: string, rep: DeleteSharedCNAMEResponse) => void
  ): Promise<DeleteSharedCNAMEResponse> {
    return this.request("DeleteSharedCNAME", req, cb)
  }

  /**
   * 查询别称域名信息列表。
   */
  async DescribeAliasDomains(
    req: DescribeAliasDomainsRequest,
    cb?: (error: string, rep: DescribeAliasDomainsResponse) => void
  ): Promise<DescribeAliasDomainsResponse> {
    return this.request("DescribeAliasDomains", req, cb)
  }

  /**
   * 用于查询四层代理实例列表。
   */
  async DescribeL4Proxy(
    req: DescribeL4ProxyRequest,
    cb?: (error: string, rep: DescribeL4ProxyResponse) => void
  ): Promise<DescribeL4ProxyResponse> {
    return this.request("DescribeL4Proxy", req, cb)
  }

  /**
   * 通过本接口查询计费数据。
   */
  async DescribeBillingData(
    req: DescribeBillingDataRequest,
    cb?: (error: string, rep: DescribeBillingDataResponse) => void
  ): Promise<DescribeBillingDataResponse> {
    return this.request("DescribeBillingData", req, cb)
  }
}

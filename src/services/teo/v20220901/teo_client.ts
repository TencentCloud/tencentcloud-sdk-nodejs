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
  DeployConfigGroupVersionRequest,
  DescribeSecurityAPIResourceResponse,
  TopEntryValue,
  RenewFlag,
  Compression,
  DescribeFunctionsResponse,
  RequestFieldsForException,
  DeleteL4ProxyRulesRequest,
  DescribeOriginGroupResponse,
  ModifySecurityJSInjectionRuleRequest,
  DescribeSecurityIPGroupInfoResponse,
  AdaptiveFrequencyControl,
  SlowPostConfig,
  DescribeWebSecurityTemplatesRequest,
  IPReputation,
  CreateSecurityAPIServiceRequest,
  RateLimitingRules,
  DescribeMultiPathGatewayLineRequest,
  OriginACLEntity,
  SourceIDC,
  CompressionParameters,
  DescribeConfigGroupVersionDetailResponse,
  OriginDetail,
  DescribeSecurityClientAttesterResponse,
  MultiPathGatewayOriginACLInfo,
  HeaderAction,
  RealtimeLogDeliveryTask,
  PrepaidPlanParam,
  MinimalRequestBodyTransferRate,
  AccessURLRedirectQueryString,
  BrowserImpersonationDetectionRule,
  ModifyFunctionRulePriorityRequest,
  ModifyAccelerationDomainResponse,
  DeleteSecurityAPIResourceRequest,
  FunctionRegionSelection,
  ModifyMultiPathGatewayLineRequest,
  DescribeHostsSettingResponse,
  DescribeWebSecurityTemplateResponse,
  Origin,
  DescribeRulesResponse,
  TimingDataRecord,
  CreateCLSIndexResponse,
  DescribeRealtimeLogDeliveryTasksRequest,
  DescribeOriginProtectionResponse,
  DescribeBillingDataRequest,
  LogFormat,
  DescribeEnvironmentsRequest,
  MultiPathGateway,
  DescribeAliasDomainsRequest,
  QUICParameters,
  ManagedRuleGroupMeta,
  RateLimitConfig,
  CreateRealtimeLogDeliveryTaskRequest,
  ModifyAccelerationDomainStatusesResponse,
  DescribeOriginACLRequest,
  RuleExtraParameter,
  ModifyL7AccRulePriorityRequest,
  WebSocket,
  ModifyAccelerationDomainRequest,
  ModifyContentIdentifierResponse,
  DeleteSecurityAPIServiceResponse,
  RuleAndConditions,
  CreateAliasDomainRequest,
  CLSTopic,
  CreatePrefetchTaskRequest,
  DescribeApplicationProxiesResponse,
  VanityNameServers,
  DescribeTopL7AnalysisDataRequest,
  CreateMultiPathGatewaySecretKeyResponse,
  DescribeAccelerationDomainsResponse,
  SwitchConfig,
  IdentifyZoneResponse,
  DescribeSecurityAPIServiceRequest,
  UpstreamRequestQueryString,
  DeleteJustInTimeTranscodeTemplatesRequest,
  ModifyLoadBalancerResponse,
  ModifyL4ProxyResponse,
  HealthChecker,
  CreateFunctionRuleRequest,
  RuleBranch,
  ConfirmOriginACLUpdateResponse,
  DescribeAliasDomainsResponse,
  EnvInfo,
  AudioTemplateInfo,
  ModifyLoadBalancerRequest,
  PlanInfo,
  DescribeTimingL7CacheDataRequest,
  ModifySecurityAPIResourceRequest,
  IPv6Parameters,
  CreateFunctionRequest,
  SessionRateControl,
  PostMaxSizeParameters,
  S3,
  DescribeDDoSAttackEventResponse,
  DescribeTimingL7OriginPullDataResponse,
  DeleteL4ProxyRulesResponse,
  ForceRedirect,
  CodeAction,
  ZoneConfigParameters,
  CreateL7AccRulesResponse,
  CachePrefresh,
  OriginACLInfo,
  DescribeTimingL7AnalysisDataResponse,
  ImageOptimize,
  CreateL7AccRulesRequest,
  BotPortraitRule,
  RulesProperties,
  DescribeSecurityJSInjectionRuleResponse,
  RuleCodeActionParams,
  OriginGroupReference,
  DeleteLoadBalancerRequest,
  CacheKeyCookie,
  SecurityPolicyTemplateInfo,
  ExceptUserRule,
  SecEntry,
  ModifyCustomErrorPageResponse,
  ModifySecurityAPIServiceRequest,
  StandardDebugParameters,
  ConfigGroupVersionInfo,
  VerifyOwnershipResponse,
  DescribeSecurityIPGroupContentResponse,
  Sv,
  Rule,
  DownloadL4LogsRequest,
  ZoneInfo,
  StatusCodeCacheParam,
  SecurityAction,
  ModifyZoneSettingRequest,
  DetectLengthLimitRule,
  OriginGroupHealthStatus,
  ModifyDnsRecordsResponse,
  BillingDataFilter,
  DeleteCustomErrorPageResponse,
  DescribeTimingL7CacheDataResponse,
  DescribeDefaultCertificatesRequest,
  DescribeZonesResponse,
  DeleteMultiPathGatewayRequest,
  DeleteCustomErrorPageRequest,
  CustomField,
  BotManagedRule,
  BrowserImpersonationDetectionAction,
  CacheKeyHeader,
  DeleteZoneRequest,
  RangeOriginPullParameters,
  ApplyFreeCertificateResponse,
  CurrentOriginACL,
  Ipv6,
  SecurityConfig,
  CreateSecurityIPGroupRequest,
  ModifyPlanRequest,
  DescribeOriginACLResponse,
  FailReason,
  ModifyL4ProxyRulesRequest,
  DescribeRulesSettingRequest,
  EntityStatus,
  SmartRoutingParameters,
  DisableOriginACLResponse,
  CreateFunctionRuleResponse,
  CreateMultiPathGatewaySecretKeyRequest,
  HTTPUpstreamTimeoutParameters,
  DescribeMultiPathGatewayRequest,
  PrivateParameter,
  CacheKeyConfigParameters,
  MaxNewSessionTriggerConfig,
  CreateOriginGroupRequest,
  TopDataRecord,
  DescribeDDoSProtectionResponse,
  CreateSecurityIPGroupResponse,
  CreateSharedCNAMEResponse,
  DeleteMultiPathGatewayResponse,
  DescribeAvailablePlansResponse,
  RateLimitTemplate,
  ModifyRealtimeLogDeliveryTaskResponse,
  ContentCompressionParameters,
  AccelerationDomainCertificate,
  OriginRecord,
  DescribeSecurityTemplateBindingsRequest,
  L4ProxyRemoteAuth,
  AlgDetectResult,
  DefaultServerCertInfo,
  RuleEngineItem,
  ModifySecurityAPIServiceResponse,
  OCSPStaplingParameters,
  CreateL4ProxyRulesRequest,
  DescribeDDoSAttackTopDataResponse,
  SubRule,
  ModifyMultiPathGatewayRequest,
  LoadBalancer,
  CreateSecurityAPIServiceResponse,
  HostName,
  DeleteRulesRequest,
  ExceptUserRuleCondition,
  DeleteWebSecurityTemplateResponse,
  ModifyL7AccRuleRequest,
  MaxAge,
  DescribeCustomErrorPagesResponse,
  DeleteApplicationProxyResponse,
  AlgDetectRule,
  SecEntryValue,
  DescribeSecurityAPIResourceRequest,
  DiffIPWhitelist,
  DeleteSecurityIPGroupResponse,
  ModifyRuleRequest,
  SetContentIdentifierParameters,
  RenewPlanRequest,
  DescribePrefetchTasksResponse,
  ManagedRuleDetail,
  NextOriginACL,
  DescribeMultiPathGatewayRegionsRequest,
  DescribeZoneSettingRequest,
  ModifyL4ProxyStatusResponse,
  FileVerification,
  ModifyWebSecurityTemplateResponse,
  ModifySecurityPolicyRequest,
  DeleteL7AccRulesRequest,
  SmartRouting,
  CreateApplicationProxyResponse,
  BotUserRule,
  Task,
  DescribeL4ProxyRulesResponse,
  OriginHealthStatus,
  ZoneConfig,
  DescribeTimingL7OriginPullDataRequest,
  CustomizedHeader,
  ModifyDDoSProtectionResponse,
  DescribeFunctionsRequest,
  ModifyDnsRecordsStatusRequest,
  ManagedRuleAutoUpdate,
  CustomRule,
  BotExtendAction,
  CreatePurgeTaskResponse,
  DeleteApplicationProxyRuleResponse,
  DeleteAccelerationDomainsResponse,
  ExceptionRules,
  ExceptConfig,
  RedirectActionParameters,
  DeleteOriginGroupRequest,
  DescribeDDoSProtectionRequest,
  AclCondition,
  DescribeJustInTimeTranscodeTemplatesResponse,
  Identification,
  RequestBodyTransferTimeout,
  L7OfflineLog,
  ModifyRuleResponse,
  ApplicationProxyRule,
  UpstreamCertInfo,
  Zone,
  RuleNormalActionParams,
  ErrorPageParameters,
  DescribeRulesSettingResponse,
  BindSecurityTemplateToEntityResponse,
  BasicBotSettings,
  ModifyL4ProxyRulesResponse,
  DDoSAttackEvent,
  ClientIpHeader,
  DescribeConfigGroupVersionDetailRequest,
  ModifyPlanResponse,
  DropPageDetail,
  CnameStatus,
  WafConfig,
  BandwidthAbuseDefense,
  ServerCertInfo,
  DescribeZonesRequest,
  DescribeZoneConfigImportResultResponse,
  Tag,
  BindSharedCNAMEResponse,
  DeleteSharedCNAMERequest,
  CustomRules,
  ModifyRealtimeLogDeliveryTaskRequest,
  VideoTemplateInfo,
  HandleFunctionRuntimeEnvironmentResponse,
  DestroyPlanRequest,
  BlockIPActionParameters,
  CreatePlanRequest,
  DetectLengthLimitConfig,
  DescribeFunctionRuntimeEnvironmentRequest,
  IPGroup,
  DescribeDnsRecordsRequest,
  CreatePrefetchTaskResponse,
  CreateSecurityJSInjectionRuleRequest,
  DescribeMultiPathGatewaysResponse,
  MaxAgeParameters,
  ModifyApplicationProxyRuleResponse,
  DDoS,
  ModifyL7AccRulePriorityResponse,
  APIService,
  CreateConfigGroupVersionResponse,
  ConfirmOriginACLUpdateRequest,
  CreateJustInTimeTranscodeTemplateResponse,
  DownloadL7LogsRequest,
  DNSPodDetail,
  DescribeSecurityClientAttesterRequest,
  WebSocketParameters,
  RuleItem,
  SlowRateConfig,
  Cache,
  CustomTime,
  FunctionWeightedSelection,
  DetailHost,
  DescribeRealtimeLogDeliveryTasksResponse,
  TopEntry,
  DescribeConfigGroupVersionsResponse,
  FunctionEnvironmentVariable,
  DeleteRealtimeLogDeliveryTaskResponse,
  RuleCondition,
  DescribeOverviewL7DataResponse,
  DescribeSecurityPolicyRequest,
  DescribeEnvironmentsResponse,
  CacheParameters,
  OriginAuthenticationRequestProperties,
  TimingDataItem,
  RateLimitUserRule,
  DeployRecord,
  CreatePlanForZoneRequest,
  DeviceProfile,
  ConfirmMultiPathGatewayOriginACLResponse,
  CreateJustInTimeTranscodeTemplateRequest,
  ModifyCustomErrorPageRequest,
  ModifyFunctionRuleResponse,
  DescribeL7AccRulesRequest,
  DescribeFunctionRulesResponse,
  CacheKey,
  DownloadL4LogsResponse,
  DescribeMultiPathGatewayOriginACLResponse,
  BindSharedCNAMERequest,
  IpTableConfig,
  ModifyApplicationProxyStatusRequest,
  DeleteOriginGroupResponse,
  ModifyOriginParameters,
  DescribeMultiPathGatewayRegionsResponse,
  DescribeL4ProxyRequest,
  DescribeIdentificationsRequest,
  ModifyHostsCertificateResponse,
  DescribeSecurityAPIServiceResponse,
  CreateAccelerationDomainRequest,
  BotRatings,
  NormalAction,
  DenyActionParameters,
  TopDetailData,
  DescribeZoneSettingResponse,
  CreateMultiPathGatewayResponse,
  DeleteJustInTimeTranscodeTemplatesResponse,
  DescribePurgeTasksRequest,
  ModifyDnsRecordsRequest,
  IdentifyZoneRequest,
  CacheConfig,
  ClientAttestationRules,
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
  IPExpireInfo,
  AccessURLRedirectParameters,
  DescribeDDoSAttackEventRequest,
  CacheConfigParameters,
  CreateL4ProxyResponse,
  CacheKeyParameters,
  ModifyFunctionResponse,
  CreateL4ProxyRulesResponse,
  DescribeOriginGroupRequest,
  KnownBotCategories,
  CreateSecurityClientAttesterRequest,
  DescribeIPRegionRequest,
  BindDomainInfo,
  TimingTypeValue,
  CreatePlanForZoneResponse,
  ClientAttester,
  ModifyL4ProxyRulesStatusResponse,
  CheckCnameStatusResponse,
  ImportZoneConfigResponse,
  ModifyWebSecurityTemplateRequest,
  DescribeWebSecurityTemplateRequest,
  ClientAttestationRule,
  CustomEndpoint,
  ModifyOriginACLResponse,
  VerifyOwnershipRequest,
  MultiPathGatewayLine,
  ResponseSpeedLimitParameters,
  ModifyMultiPathGatewayResponse,
  BotManagement,
  DeleteL4ProxyRequest,
  DeleteApplicationProxyRequest,
  AccelerateMainlandParameters,
  ModifyZoneStatusRequest,
  UpstreamURLRewriteParameters,
  DescribeL4ProxyResponse,
  ModifyHostsCertificateRequest,
  ModifyOriginACLRequest,
  ModifyOriginGroupResponse,
  DeleteAccelerationDomainsRequest,
  RenewPlanResponse,
  CustomErrorPage,
  DescribeDeployHistoryRequest,
  Header,
  CreateMultiPathGatewayLineResponse,
  BillingData,
  DescribePlansRequest,
  CreateSecurityJSInjectionRuleResponse,
  ModifyOriginGroupRequest,
  RefreshMultiPathGatewaySecretKeyResponse,
  DeleteZoneResponse,
  CreateRuleResponse,
  ModifyL7AccSettingResponse,
  DeleteSecurityJSInjectionRuleResponse,
  ReturnCustomPageActionParameters,
  DescribeSecurityIPGroupContentRequest,
  BindZoneToPlanResponse,
  DeleteWebSecurityTemplateRequest,
  DescribeL7AccSettingResponse,
  UpstreamHTTP2Parameters,
  ModifyAliasDomainRequest,
  OriginInfo,
  CreateDnsRecordRequest,
  WafRule,
  BrowserImpersonationDetection,
  ModifyApplicationProxyRequest,
  DomainDDoSProtection,
  ModifyAliasDomainStatusRequest,
  DeleteFunctionRequest,
  BindSharedCNAMEMap,
  DeleteRealtimeLogDeliveryTaskRequest,
  RulesSettingAction,
  ForceRedirectHTTPSParameters,
  MutualTLS,
  ClientBehaviorDetection,
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
  DeleteSecurityClientAttesterRequest,
  DeleteApplicationProxyRuleRequest,
  ManagedRuleAction,
  ModifyL7AccRuleResponse,
  FileAscriptionInfo,
  CreateRealtimeLogDeliveryTaskResponse,
  DescribeTopL7CacheDataResponse,
  DescribeFunctionRuntimeEnvironmentResponse,
  GrpcParameters,
  BotManagementCustomRules,
  MultiPathGatewayNextOriginACL,
  RuleChoicePropertiesItem,
  DescribeSecurityTemplateBindingsResponse,
  ModifyAliasDomainStatusResponse,
  DeleteFunctionRulesRequest,
  DescribeTimingL7AnalysisDataRequest,
  NoCache,
  ModifyFunctionRequest,
  ManagedRuleGroup,
  BotSessionValidation,
  SecurityPolicy,
  AscriptionInfo,
  ModifySecurityClientAttesterResponse,
  CheckFreeCertificateVerificationResponse,
  FirstPartConfig,
  Waf,
  CreateApplicationProxyRuleRequest,
  JustInTimeTranscodeTemplate,
  TCCaptchaOption,
  DescribeDnsRecordsResponse,
  CreateWebSecurityTemplateRequest,
  CreateL4ProxyRequest,
  ModifyZoneRequest,
  CreatePlanResponse,
  DescribeApplicationProxiesRequest,
  DescribeContentQuotaRequest,
  AllowActionParameters,
  Hsts,
  OwnershipVerification,
  CreateRuleRequest,
  ModifyL4ProxyStatusRequest,
  DescribeSecurityPolicyResponse,
  Plan,
  CreateApplicationProxyRuleResponse,
  RateLimitingRule,
  CertificateInfo,
  CreateApplicationProxyRequest,
  ConfirmMultiPathGatewayOriginACLRequest,
  CC,
  HandleFunctionRuntimeEnvironmentRequest,
  ModifyL4ProxyRulesStatusRequest,
  DescribeCustomErrorPagesRequest,
  GatewayRegion,
  CachePrefreshParameters,
  Action,
  JSInjectionRule,
  UpstreamFollowRedirectParameters,
  DeleteSecurityAPIServiceRequest,
  ApplicationProxy,
  ModifyApplicationProxyResponse,
  ModifySecurityIPGroupResponse,
  SecurityType,
  ZoneSetting,
  ModifyL4ProxyRequest,
  DescribeSecurityJSInjectionRuleRequest,
  DropPageConfig,
  DescribeSecurityIPGroupInfoRequest,
  ExceptUserRuleScope,
  PartialModule,
  DescribeZoneConfigImportResultRequest,
  ModifyApplicationProxyRuleStatusRequest,
  AccelerateType,
  DeliveryCondition,
  ExceptionRule,
  FollowOrigin,
  DescribeMultiPathGatewayResponse,
  IPRegionInfo,
  DestroyPlanResponse,
  CreateSecurityAPIResourceRequest,
  TLSConfigParameters,
  QueryCondition,
  RuleRewriteActionParams,
  ClientIPHeaderParameters,
  L4OfflineLog,
  ModifyAliasDomainResponse,
  DeleteDnsRecordsRequest,
  OfflineCacheParameters,
  CreateZoneRequest,
  DeleteAliasDomainRequest,
  DeleteFunctionRulesResponse,
  DescribeTopL7AnalysisDataResponse,
  ModifyContentIdentifierRequest,
  DeleteMultiPathGatewayLineRequest,
  Resource,
  DDoSProtection,
  ModifyResponseHeaderParameters,
  DescribeOriginProtectionRequest,
  DeleteContentIdentifierResponse,
  DescribeHostsSettingRequest,
  DeleteRulesResponse,
  OriginGroup,
  ModifySecurityIPGroupRequest,
  VaryParameters,
  L4Proxy,
  SkipCondition,
  CreateSharedCNAMERequest,
  UpstreamHttp2,
  EnableOriginACLResponse,
  DeleteAliasDomainResponse,
  DeleteSecurityJSInjectionRuleRequest,
  BotConfig,
  EnableOriginACLRequest,
  ModifyZoneResponse,
  DeleteMultiPathGatewayLineResponse,
  ClientFiltering,
  DescribeTopL7CacheDataRequest,
  CreateLoadBalancerRequest,
  Https,
  DescribeOriginGroupHealthStatusRequest,
  DescribeContentIdentifiersRequest,
  ExportZoneConfigRequest,
  OriginGroupHealthStatusDetail,
  L4ProxyRule,
  NetworkErrorLoggingParameters,
  CacheKeyQueryString,
  AdvancedFilter,
  DescribeDDoSAttackDataResponse,
  TemplateConfig,
  BotManagementActionOverrides,
  ErrorPageReference,
  DescribeIdentificationsResponse,
  BotManagementCustomRule,
  DeleteL4ProxyResponse,
  ModifyApplicationProxyRuleStatusResponse,
  DisableOriginACLRequest,
  ClientIPCountryParameters,
  IncreasePlanQuotaResponse,
  DescribeIPRegionResponse,
  DescribeAvailablePlansRequest,
  ModifyMultiPathGatewayStatusResponse,
  IPReputationGroup,
  NSDetail,
  DnsVerification,
  AlgDetectSession,
  ModifyZoneStatusResponse,
  DeleteContentIdentifierRequest,
  RefreshMultiPathGatewaySecretKeyRequest,
  CreateContentIdentifierRequest,
  OriginProtectionInfo,
  ModifyDnsRecordsStatusResponse,
  ModifySecurityJSInjectionRuleResponse,
  AliasDomain,
  ImportZoneConfigRequest,
  IpTableRule,
  DDosProtectionConfig,
  ModifyFunctionRuleRequest,
  DescribeSecurityIPGroupResponse,
  IncreasePlanQuotaRequest,
  FunctionRule,
  UpstreamRequestCookie,
  NetworkErrorLogging,
  DescribeDDoSAttackTopDataRequest,
  Quic,
  DescribeDDoSAttackDataRequest,
  SlowAttackDefense,
  CreateCLSIndexRequest,
  DescribeRulesRequest,
  DescribeContentQuotaResponse,
  ModifyZoneSettingResponse,
  DownloadL7LogsResponse,
  AccelerationDomain,
  ContentIdentifier,
  CreateCustomizeErrorPageResponse,
  DescribeMultiPathGatewayOriginACLRequest,
  ApplyFreeCertificateRequest,
  StatusCodeCacheParameters,
  RewriteAction,
  TemplateScope,
  ErrorPage,
  APIResource,
  HTTP2Parameters,
  DescribeOverviewL7DataRequest,
  CreateMultiPathGatewayRequest,
  DeleteSharedCNAMEResponse,
  ModifyMultiPathGatewaySecretKeyResponse,
  DescribeMultiPathGatewaySecretKeyRequest,
  DDoSBlockData,
  DescribeMultiPathGatewaysRequest,
  DescribePrefetchTasksRequest,
  ModifyMultiPathGatewaySecretKeyRequest,
  DnsRecord,
  OriginPrivateParameters,
  HSTSParameters,
  DeleteSecurityAPIResourceResponse,
  BindZoneToPlanRequest,
  DeleteFunctionResponse,
  IPWhitelist,
  ModifyDDoSProtectionRequest,
  ModifyL7AccSettingRequest,
  ModifyFunctionRulePriorityResponse,
  CreateCustomizeErrorPageRequest,
  URLPath,
  DescribeSecurityIPGroupRequest,
  ModifyApplicationProxyStatusResponse,
  DescribeMultiPathGatewayLineResponse,
  OriginGroupInLoadBalancer,
  HTTPResponseParameters,
  UpstreamRequestParameters,
  ModifyMultiPathGatewayStatusRequest,
  DeleteSecurityClientAttesterResponse,
  TCRCEOption,
  NsVerification,
  AccelerateMainland,
  ChallengeActionParameters,
  StandardDebug,
  RateLimitTemplateDetail,
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
  FunctionRuleCondition,
  ModifySecurityPolicyResponse,
  DeleteLoadBalancerResponse,
  DeleteL7AccRulesResponse,
  DescribeOriginGroupHealthStatusResponse,
  DescribeContentIdentifiersResponse,
  CacheConfigCustomTime,
  ManagedRules,
  SecurityTemplateBinding,
  DescribeMultiPathGatewaySecretKeyResponse,
  CreateSecurityAPIResourceResponse,
  OriginPullProtocolParameters,
  CacheTag,
  CreateSecurityClientAttesterResponse,
  SecurityWeightedAction,
  ModifyMultiPathGatewayLineResponse,
  DescribeDefaultCertificatesResponse,
  CreateOriginGroupResponse,
  CreateMultiPathGatewayLineRequest,
  CreateContentIdentifierResponse,
  HostHeaderParameters,
  DescribeConfigGroupVersionsRequest,
  MultiPathGatewayCurrentOriginACL,
  DescribeL4ProxyRulesRequest,
  AiRule,
  Function,
  DescribeWebSecurityTemplatesResponse,
  Quota,
  CheckCnameStatusRequest,
  CheckFreeCertificateVerificationRequest,
  DetectLengthLimitCondition,
  ModifySecurityAPIResourceResponse,
  DescribePlansResponse,
  UpgradePlanRequest,
  CreatePurgeTaskRequest,
  DeleteDnsRecordsResponse,
  ModifyRequestHeaderParameters,
  CreateWebSecurityTemplateResponse,
  BotIntelligence,
  OriginCertificateVerify,
  SearchEngineBots,
  DescribePurgeTasksResponse,
  HttpDDoSProtection,
  CheckRegionHealthStatus,
  FrequentScanningProtection,
  DescribeFunctionRulesRequest,
  DeployConfigGroupVersionResponse,
  Addresses,
  RateLimitIntelligence,
  DescribeDeployHistoryResponse,
  DescribeJustInTimeTranscodeTemplatesRequest,
  QueryString,
  ModifySecurityClientAttesterRequest,
  DescribeAccelerationDomainsRequest,
  CreateDnsRecordResponse,
  DescribeTimingL4DataRequest,
  DescribeTimingL4DataResponse,
  CNAMEDetail,
  OriginAuthenticationParameters,
  RuleEngineAction,
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
   * 获取站点的独立 DDoS 防护信息。
   */
  async DescribeDDoSProtection(
    req: DescribeDDoSProtectionRequest,
    cb?: (error: string, rep: DescribeDDoSProtectionResponse) => void
  ): Promise<DescribeDDoSProtectionResponse> {
    return this.request("DescribeDDoSProtection", req, cb)
  }

  /**
   * 通过本接口查询用户创建的多通道安全加速网关（云上网关）的可用地域列表。
   */
  async DescribeMultiPathGatewayRegions(
    req: DescribeMultiPathGatewayRegionsRequest,
    cb?: (error: string, rep: DescribeMultiPathGatewayRegionsResponse) => void
  ): Promise<DescribeMultiPathGatewayRegionsResponse> {
    return this.request("DescribeMultiPathGatewayRegions", req, cb)
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
   * 为未购买套餐的站点购买套餐
   */
  async CreatePlanForZone(
    req: CreatePlanForZoneRequest,
    cb?: (error: string, rep: CreatePlanForZoneResponse) => void
  ): Promise<CreatePlanForZoneResponse> {
    return this.request("CreatePlanForZone", req, cb)
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
   * 创建安全策略配置模板
   */
  async CreateWebSecurityTemplate(
    req: CreateWebSecurityTemplateRequest,
    cb?: (error: string, rep: CreateWebSecurityTemplateResponse) => void
  ): Promise<CreateWebSecurityTemplateResponse> {
    return this.request("CreateWebSecurityTemplate", req, cb)
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
   * 修改站点信息。
   */
  async ModifyZone(
    req: ModifyZoneRequest,
    cb?: (error: string, rep: ModifyZoneResponse) => void
  ): Promise<ModifyZoneResponse> {
    return this.request("ModifyZone", req, cb)
  }

  /**
   * 查询安全策略配置模板详情
   */
  async DescribeWebSecurityTemplate(
    req: DescribeWebSecurityTemplateRequest,
    cb?: (error: string, rep: DescribeWebSecurityTemplateResponse) => void
  ): Promise<DescribeWebSecurityTemplateResponse> {
    return this.request("DescribeWebSecurityTemplate", req, cb)
  }

  /**
   * 创建边缘函数的触发规则。支持通过自定义过滤条件来决定是否需要执行函数，当需要执行函数时，提供了多种选择目标函数的方式，包括：直接指定，基于客户端归属地区选择和基于权重选择。
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
   * 更新多通道安全网关状态。
   */
  async ModifyMultiPathGatewayStatus(
    req: ModifyMultiPathGatewayStatusRequest,
    cb?: (error: string, rep: ModifyMultiPathGatewayStatusResponse) => void
  ): Promise<ModifyMultiPathGatewayStatusResponse> {
    return this.request("ModifyMultiPathGatewayStatus", req, cb)
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
   * 创建 JavaScript 注入规则。
   */
  async CreateSecurityJSInjectionRule(
    req: CreateSecurityJSInjectionRuleRequest,
    cb?: (error: string, rep: CreateSecurityJSInjectionRuleResponse) => void
  ): Promise<CreateSecurityJSInjectionRuleResponse> {
    return this.request("CreateSecurityJSInjectionRule", req, cb)
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
   * 用于删除 API 资源。
   */
  async DeleteSecurityAPIResource(
    req: DeleteSecurityAPIResourceRequest,
    cb?: (error: string, rep: DeleteSecurityAPIResourceResponse) => void
  ): Promise<DeleteSecurityAPIResourceResponse> {
    return this.request("DeleteSecurityAPIResource", req, cb)
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
   * 用于创建 API 资源。
   */
  async CreateSecurityAPIResource(
    req: CreateSecurityAPIResourceRequest,
    cb?: (error: string, rep: CreateSecurityAPIResourceResponse) => void
  ): Promise<CreateSecurityAPIResourceResponse> {
    return this.request("CreateSecurityAPIResource", req, cb)
  }

  /**
   * 通过本接口修改接入多通道安全加速网关的线路，包括 EdgeOne 四层代理线路、自定义线路。
   */
  async ModifyMultiPathGatewayLine(
    req: ModifyMultiPathGatewayLineRequest,
    cb?: (error: string, rep: ModifyMultiPathGatewayLineResponse) => void
  ): Promise<ModifyMultiPathGatewayLineResponse> {
    return this.request("ModifyMultiPathGatewayLine", req, cb)
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
   * 创建内容标识符，可以设置描述、标签等信息，同时需要绑定企业版套餐用于统计计费数据；一个内容标识符只能绑定一个计费套餐，一个计费套餐可以绑定多个内容标识符。该功能仅限白名单开放。
   */
  async CreateContentIdentifier(
    req: CreateContentIdentifierRequest,
    cb?: (error: string, rep: CreateContentIdentifierResponse) => void
  ): Promise<CreateContentIdentifierResponse> {
    return this.request("CreateContentIdentifier", req, cb)
  }

  /**
   * 本接口用于查询站点下的七层加速域名/四层代理实例与回源 IP 网段的绑定关系，以及回源 IP 网段详情。如果您想通过自动化脚本定期获取回源 IP 网段的最新版本，可以较低频率（建议每三天一次）轮询本接口，若 NextOriginACL 字段有返回值，则将最新的回源 IP 网段同步到源站防火墙配置中。
   */
  async DescribeOriginACL(
    req: DescribeOriginACLRequest,
    cb?: (error: string, rep: DescribeOriginACLResponse) => void
  ): Promise<DescribeOriginACLResponse> {
    return this.request("DescribeOriginACL", req, cb)
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
   * 通过本接口创建多通道安全加速网关，包括云上网关（腾讯云创建和管理的网关）和自有网关（用户部署的私有网关），需要通过接口 DescribeMultiPathGateway，查询状态为 online 即创建成功。
   */
  async CreateMultiPathGateway(
    req: CreateMultiPathGatewayRequest,
    cb?: (error: string, rep: CreateMultiPathGatewayResponse) => void
  ): Promise<CreateMultiPathGatewayResponse> {
    return this.request("CreateMultiPathGateway", req, cb)
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
该功能仅企业版套餐支持，并且该功能当前仍在内测中，如需使用，请[联系我们](https://cloud.tencent.com/online-service?from=connect-us)。
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
   * 通过本接口创建接入多通道安全加速网关的线路。包括 EdgeOne 四层代理线路、自定义线路。
   */
  async CreateMultiPathGatewayLine(
    req: CreateMultiPathGatewayLineRequest,
    cb?: (error: string, rep: CreateMultiPathGatewayLineResponse) => void
  ): Promise<CreateMultiPathGatewayLineResponse> {
    return this.request("CreateMultiPathGatewayLine", req, cb)
  }

  /**
     * 修改别称域名。
该功能仅企业版套餐支持，并且该功能当前仍在内测中，如需使用，请[联系我们](https://cloud.tencent.com/online-service?from=connect-us)。
     */
  async ModifyAliasDomain(
    req: ModifyAliasDomainRequest,
    cb?: (error: string, rep: ModifyAliasDomainResponse) => void
  ): Promise<ModifyAliasDomainResponse> {
    return this.request("ModifyAliasDomain", req, cb)
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
   * 本接口用于对七层加速域名/四层代理实例启用/关闭特定回源 IP 网段回源。单次支持提交的七层加速域名的数量最大为 200，四层代理实例的数量最大为 100，支持七层加速域名/四层代理实例混合提交，总实例个数最大为 200。如需变更超过 200 个实例，请通过本接口分批提交。
   */
  async ModifyOriginACL(
    req: ModifyOriginACLRequest,
    cb?: (error: string, rep: ModifyOriginACLResponse) => void
  ): Promise<ModifyOriginACLResponse> {
    return this.request("ModifyOriginACL", req, cb)
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
   * DescribePrefetchTasks 用于查询预热任务提交历史记录及执行进度，通过 CreatePrefetchTasks 接口提交的任务可通过此接口进行查询。
   */
  async DescribePrefetchTasks(
    req: DescribePrefetchTasksRequest,
    cb?: (error: string, rep: DescribePrefetchTasksResponse) => void
  ): Promise<DescribePrefetchTasksResponse> {
    return this.request("DescribePrefetchTasks", req, cb)
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
   * 批量删除加速域名
   */
  async DeleteAccelerationDomains(
    req: DeleteAccelerationDomainsRequest,
    cb?: (error: string, rep: DeleteAccelerationDomainsResponse) => void
  ): Promise<DeleteAccelerationDomainsResponse> {
    return this.request("DeleteAccelerationDomains", req, cb)
  }

  /**
   * 删除 JavaScript 注入规则。
   */
  async DeleteSecurityJSInjectionRule(
    req: DeleteSecurityJSInjectionRuleRequest,
    cb?: (error: string, rep: DeleteSecurityJSInjectionRuleResponse) => void
  ): Promise<DeleteSecurityJSInjectionRuleResponse> {
    return this.request("DeleteSecurityJSInjectionRule", req, cb)
  }

  /**
   * 通过本接口刷新多通道安全加速网关的密钥。客户基于接入密钥签名接入多通道安全加速网关。每个站点下只有一个密钥，可用于接入该站点下的所有网关，刷新密钥后，原始密钥会失效。
   */
  async RefreshMultiPathGatewaySecretKey(
    req: RefreshMultiPathGatewaySecretKeyRequest,
    cb?: (error: string, rep: RefreshMultiPathGatewaySecretKeyResponse) => void
  ): Promise<RefreshMultiPathGatewaySecretKeyResponse> {
    return this.request("RefreshMultiPathGatewaySecretKey", req, cb)
  }

  /**
     * 本接口用于创建实时日志投递任务。本接口有如下限制：
- 当数据投递类型（LogType）为站点加速日志（七层访问日志）、四层代理日志、边缘函数运行日志时，同一个实体（七层域名、四层代理实例、边缘函数实例）在同种数据投递类型（LogType）和数据投递区域（Area）的组合下，只能被添加到如下实时日志投递任务类型（TaskType）组合中：
    - 一个推送至腾讯云  CLS 的任务，加上另一个推送至自定义 HTTP(S) 地址的任务；
    - 一个推送至腾讯云  CLS 的任务，加上另一个推送至 AWS S3 兼容对象存储的任务；
- 当数据投递类型（LogType）为速率限制和 CC 攻击防护日志、托管规则日志、自定义规则日志、Bot 管理日志时，同一个实体在同种数据投递类型（LogType）和数据投递区域（Area）的组合下，只能被添加到一个实时日志投递任务中。
- 当实时日志投递任务类型（TaskType）为 EdgeOne 日志分析（log_analysis）时，只支持数据投递类型（LogType）为站点加速日志（domain）；在同一站点（ZoneId）和数据投递区域（Area）的组合下，只能添加一个推送至 EdgeOne 日志分析的实时日志投递任务；。

建议先通过 [DescribeRealtimeLogDeliveryTasks](https://cloud.tencent.com/document/product/1552/104110)  接口根据实体查询实时日志投递任务列表，检查实体是否已经被添加到另一实时日志投递任务中。
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
     * 该接口用于验证免费证书并获取免费证书申请结果。如果验证通过，可通过该接口查询到对应域名申请的免费证书信息，如果申请失败，该接口将返回对应的验证失败信息。
在触发[申请免费证书接口](https://cloud.tencent.com/document/product/1552/90437)后，您可以通过本接口检查免费证书申请结果。在免费证书申请成功后， 还需要通过[配置域名证书](https://cloud.tencent.com/document/product/1552/80764)接口配置，才能将免费证书部署至加速域上。
     */
  async CheckFreeCertificateVerification(
    req: CheckFreeCertificateVerificationRequest,
    cb?: (error: string, rep: CheckFreeCertificateVerificationResponse) => void
  ): Promise<CheckFreeCertificateVerificationResponse> {
    return this.request("CheckFreeCertificateVerification", req, cb)
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
   * 查询站点的验证信息。
   */
  async DescribeIdentifications(
    req: DescribeIdentificationsRequest,
    cb?: (error: string, rep: DescribeIdentificationsResponse) => void
  ): Promise<DescribeIdentificationsResponse> {
    return this.request("DescribeIdentifications", req, cb)
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
   * 修改边缘函数触发规则，支持修改规则条件、执行函数以及描述信息。您可以先通过 DescribeFunctionRules 接口来获取需要修改的规则的 RuleId，然后传入修改后的规则内容，原规则内容会被覆盖式更新。
   */
  async ModifyFunctionRule(
    req: ModifyFunctionRuleRequest,
    cb?: (error: string, rep: ModifyFunctionRuleResponse) => void
  ): Promise<ModifyFunctionRuleResponse> {
    return this.request("ModifyFunctionRule", req, cb)
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
   * 修改安全策略配置模板
   */
  async ModifyWebSecurityTemplate(
    req: ModifyWebSecurityTemplateRequest,
    cb?: (error: string, rep: ModifyWebSecurityTemplateResponse) => void
  ): Promise<ModifyWebSecurityTemplateResponse> {
    return this.request("ModifyWebSecurityTemplate", req, cb)
  }

  /**
   * 该接口用于分页查询指定 IP 组中的 IP 地址列表。当 IP 组中的 IP 地址数量超过 2000 个时，可以使用此接口进行分页查询，以获取完整的 IP 地址列表。
   */
  async DescribeSecurityIPGroupContent(
    req: DescribeSecurityIPGroupContentRequest,
    cb?: (error: string, rep: DescribeSecurityIPGroupContentResponse) => void
  ): Promise<DescribeSecurityIPGroupContentResponse> {
    return this.request("DescribeSecurityIPGroupContent", req, cb)
  }

  /**
   * 本接口用于修改[规则引擎](https://cloud.tencent.com/document/product/1552/70901)中规则列表的优先级，本接口需要传入站点 ID 下完整的规则 ID 列表，规则 ID 列表可以通过[查询七层加速规则](https://cloud.tencent.com/document/product/1552/115820)接口获取，最终优先级顺序将调整成规则 ID 列表的顺序，从前往后执行。
   */
  async ModifyL7AccRulePriority(
    req: ModifyL7AccRulePriorityRequest,
    cb?: (error: string, rep: ModifyL7AccRulePriorityResponse) => void
  ): Promise<ModifyL7AccRulePriorityResponse> {
    return this.request("ModifyL7AccRulePriority", req, cb)
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
该功能仅企业版套餐支持，并且该功能当前仍在内测中，如需使用，请[联系我们](https://cloud.tencent.com/online-service?from=connect-us)。
     */
  async CreateAliasDomain(
    req: CreateAliasDomainRequest,
    cb?: (error: string, rep: CreateAliasDomainResponse) => void
  ): Promise<CreateAliasDomainResponse> {
    return this.request("CreateAliasDomain", req, cb)
  }

  /**
     * 修改别称域名状态。
该功能仅企业版套餐支持，并且该功能当前仍在内测中，如需使用，请[联系我们](https://cloud.tencent.com/online-service?from=connect-us)。
     */
  async ModifyAliasDomainStatus(
    req: ModifyAliasDomainStatusRequest,
    cb?: (error: string, rep: ModifyAliasDomainStatusResponse) => void
  ): Promise<ModifyAliasDomainStatusResponse> {
    return this.request("ModifyAliasDomainStatus", req, cb)
  }

  /**
   * 查询安全 IP 组的配置信息，包括安全 IP 组的 ID、名称和内容。本接口的查询结果中，每个 IP 组最多只返回 2000 个 IP / 网段。如果存在超过 2000 个 IP / 网段的超大 IP 组，请调用 DescribeSecurityIPGroupContent 进行分页查询。
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
     * 本接口为旧版本修改规则引擎接口，EdgeOne 于 2025 年 1 月 21 日已对规则引擎相关接口全面升级，新版本修改七层加速规则接口详情请参考 [ModifyL7AccRule](https://cloud.tencent.com/document/product/1552/115818)。
<p style="color: red;">注意：自 2025 年 1 月 21 日起，旧版接口停止更新迭代，后续新增功能将仅在新版接口中提供，旧版接口支持的原有能力将不受影响。为避免在使用旧版接口时出现数据字段冲突，建议您尽早迁移到新版规则引擎接口。</p>
     */
  async ModifyRule(
    req: ModifyRuleRequest,
    cb?: (error: string, rep: ModifyRuleResponse) => void
  ): Promise<ModifyRuleResponse> {
    return this.request("ModifyRule", req, cb)
  }

  /**
   * 通过本接口查询用户创建的多通道安全加速网关列表。支持翻页。
   */
  async DescribeMultiPathGateways(
    req: DescribeMultiPathGatewaysRequest,
    cb?: (error: string, rep: DescribeMultiPathGatewaysResponse) => void
  ): Promise<DescribeMultiPathGatewaysResponse> {
    return this.request("DescribeMultiPathGateways", req, cb)
  }

  /**
     * 本接口用于查询七层域名业务按照指定维度的 topN 数据。
注意：
1. 本接口查询数据有 10 分钟左右延迟，建议拉取当前时间 10 分钟以前的数据。
2. 本接口默认返回防护后的流量请求数据，用户可在 `Filters.mitigatedByWebSecurity` 中自定义查询已防护缓释的数据。
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
   * 查询客户端认证选项配置。
   */
  async DescribeSecurityClientAttester(
    req: DescribeSecurityClientAttesterRequest,
    cb?: (error: string, rep: DescribeSecurityClientAttesterResponse) => void
  ): Promise<DescribeSecurityClientAttesterResponse> {
    return this.request("DescribeSecurityClientAttester", req, cb)
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
   * 通过本接口查询接入多通道安全加速网关的线路。包括直连、EdgeOne 四层代理线路、自定义线路。
   */
  async DescribeMultiPathGatewayLine(
    req: DescribeMultiPathGatewayLineRequest,
    cb?: (error: string, rep: DescribeMultiPathGatewayLineResponse) => void
  ): Promise<DescribeMultiPathGatewayLineResponse> {
    return this.request("DescribeMultiPathGatewayLine", req, cb)
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
   * 本接口（DescribeDDoSAttackEvent）用于查询DDoS攻击事件列表。
   */
  async DescribeDDoSAttackEvent(
    req: DescribeDDoSAttackEventRequest,
    cb?: (error: string, rep: DescribeDDoSAttackEventResponse) => void
  ): Promise<DescribeDDoSAttackEventResponse> {
    return this.request("DescribeDDoSAttackEvent", req, cb)
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
   * 该接口用于修改 API 资源。
   */
  async ModifySecurityAPIResource(
    req: ModifySecurityAPIResourceRequest,
    cb?: (error: string, rep: ModifySecurityAPIResourceResponse) => void
  ): Promise<ModifySecurityAPIResourceResponse> {
    return this.request("ModifySecurityAPIResource", req, cb)
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
   * 删除负载均衡实例，若负载均衡示例被其他服务（例如：四层代理等）引用的时候，示例无法被删除，需要先解除引用关系。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
   */
  async DeleteLoadBalancer(
    req: DeleteLoadBalancerRequest,
    cb?: (error: string, rep: DeleteLoadBalancerResponse) => void
  ): Promise<DeleteLoadBalancerResponse> {
    return this.request("DeleteLoadBalancer", req, cb)
  }

  /**
     * 本接口用于查询七层域名业务的时序数据。
注意：
1. 本接口查询数据有 10 分钟左右延迟，建议拉取当前时间 10 分钟以前的数据。
2. 本接口默认返回防护后的流量请求数据，用户可在 `Filters.mitigatedByWebSecurity` 中自定义查询已防护缓释的数据。
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
   * 通过本接口修改多通道安全加速网关信息，如名称、网关 ID、IP、端口等。
   */
  async ModifyMultiPathGateway(
    req: ModifyMultiPathGatewayRequest,
    cb?: (error: string, rep: ModifyMultiPathGatewayResponse) => void
  ): Promise<ModifyMultiPathGatewayResponse> {
    return this.request("ModifyMultiPathGateway", req, cb)
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
   * 本接口用于多通道安全加速网关回源 IP 网段发生变更时，确认已将最新回源 IP 网段更新至源站防火墙。
   */
  async ConfirmMultiPathGatewayOriginACL(
    req: ConfirmMultiPathGatewayOriginACLRequest,
    cb?: (error: string, rep: ConfirmMultiPathGatewayOriginACLResponse) => void
  ): Promise<ConfirmMultiPathGatewayOriginACLResponse> {
    return this.request("ConfirmMultiPathGatewayOriginACL", req, cb)
  }

  /**
   * 查询 JavaScript 注入规则。
   */
  async DescribeSecurityJSInjectionRule(
    req: DescribeSecurityJSInjectionRuleRequest,
    cb?: (error: string, rep: DescribeSecurityJSInjectionRuleResponse) => void
  ): Promise<DescribeSecurityJSInjectionRuleResponse> {
    return this.request("DescribeSecurityJSInjectionRule", req, cb)
  }

  /**
     * 本接口为旧版本创建规则引擎接口，EdgeOne 于 2025 年 1 月 21 日已对规则引擎相关接口全面升级，新版本创建七层加速规则接口详情请参考 [CreateL7AccRules](https://cloud.tencent.com/document/product/1552/115822)。
<p style="color: red;">注意：自 2025 年 1 月 21 日起，旧版接口停止更新迭代，后续新增功能将仅在新版接口中提供，旧版接口支持的原有能力将不受影响。为避免在使用旧版接口时出现数据字段冲突，建议您尽早迁移到新版规则引擎接口。</p>
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
   * 查询安全策略配置模板列表
   */
  async DescribeWebSecurityTemplates(
    req: DescribeWebSecurityTemplatesRequest,
    cb?: (error: string, rep: DescribeWebSecurityTemplatesResponse) => void
  ): Promise<DescribeWebSecurityTemplatesResponse> {
    return this.request("DescribeWebSecurityTemplates", req, cb)
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
   * 查询套餐信息列表，支持分页。
   */
  async DescribePlans(
    req: DescribePlansRequest,
    cb?: (error: string, rep: DescribePlansResponse) => void
  ): Promise<DescribePlansResponse> {
    return this.request("DescribePlans", req, cb)
  }

  /**
   * 创建客户端认证选项。
   */
  async CreateSecurityClientAttester(
    req: CreateSecurityClientAttesterRequest,
    cb?: (error: string, rep: CreateSecurityClientAttesterResponse) => void
  ): Promise<CreateSecurityClientAttesterResponse> {
    return this.request("CreateSecurityClientAttester", req, cb)
  }

  /**
   * 本接口用于关闭站点的源站防护功能。停用后，相关资源不再仅使用「源站防护」提供的回源 IP 网段请求您的源站，同时停止发送回源 IP 网段更新通知。
   */
  async DisableOriginACL(
    req: DisableOriginACLRequest,
    cb?: (error: string, rep: DisableOriginACLResponse) => void
  ): Promise<DisableOriginACLResponse> {
    return this.request("DisableOriginACL", req, cb)
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
   * 该接口用于修改 API 服务。
   */
  async ModifySecurityAPIService(
    req: ModifySecurityAPIServiceRequest,
    cb?: (error: string, rep: ModifySecurityAPIServiceResponse) => void
  ): Promise<ModifySecurityAPIServiceResponse> {
    return this.request("ModifySecurityAPIService", req, cb)
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
   * 您可以通过本接口查看站点下的域名信息，包括加速域名、源站以及域名状态等信息。您可以查看站点下全部域名的信息，也可以指定过滤条件查询对应的域名信息。
   */
  async DescribeAccelerationDomains(
    req: DescribeAccelerationDomainsRequest,
    cb?: (error: string, rep: DescribeAccelerationDomainsResponse) => void
  ): Promise<DescribeAccelerationDomainsResponse> {
    return this.request("DescribeAccelerationDomains", req, cb)
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
   * 通过本接口查询多通道安全加速网关详情。如名称、网关 ID、IP、端口、类型等。
   */
  async DescribeMultiPathGateway(
    req: DescribeMultiPathGatewayRequest,
    cb?: (error: string, rep: DescribeMultiPathGatewayResponse) => void
  ): Promise<DescribeMultiPathGatewayResponse> {
    return this.request("DescribeMultiPathGateway", req, cb)
  }

  /**
     * 本接口为旧版本删除规则引擎接口，EdgeOne 于 2025 年 1 月 21 日已对规则引擎相关接口全面升级，新版本删除七层加速规则接口详情请参考 [DeleteL7AccRules](https://cloud.tencent.com/document/product/1552/115821)。
<p style="color: red;">注意：自 2025 年 1 月 21 日起，旧版接口停止更新迭代，后续新增功能将仅在新版接口中提供，旧版接口支持的原有能力将不受影响。为避免在使用旧版接口时出现数据字段冲突，建议您尽早迁移到新版规则引擎接口。</p>
     */
  async DeleteRules(
    req: DeleteRulesRequest,
    cb?: (error: string, rep: DeleteRulesResponse) => void
  ): Promise<DeleteRulesResponse> {
    return this.request("DeleteRules", req, cb)
  }

  /**
   * 用于删除 API 服务。
   */
  async DeleteSecurityAPIService(
    req: DeleteSecurityAPIServiceRequest,
    cb?: (error: string, rep: DeleteSecurityAPIServiceResponse) => void
  ): Promise<DeleteSecurityAPIServiceResponse> {
    return this.request("DeleteSecurityAPIService", req, cb)
  }

  /**
   * 通过本接口删除多通道安全加速网关，包括自有网关和云上网关。
   */
  async DeleteMultiPathGateway(
    req: DeleteMultiPathGatewayRequest,
    cb?: (error: string, rep: DeleteMultiPathGatewayResponse) => void
  ): Promise<DeleteMultiPathGatewayResponse> {
    return this.request("DeleteMultiPathGateway", req, cb)
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
   * 修改内容标识符，仅支持修改描述。该功能仅白名单开放。
   */
  async ModifyContentIdentifier(
    req: ModifyContentIdentifierRequest,
    cb?: (error: string, rep: ModifyContentIdentifierResponse) => void
  ): Promise<ModifyContentIdentifierResponse> {
    return this.request("ModifyContentIdentifier", req, cb)
  }

  /**
   * 删除安全策略配置模板
   */
  async DeleteWebSecurityTemplate(
    req: DeleteWebSecurityTemplateRequest,
    cb?: (error: string, rep: DeleteWebSecurityTemplateResponse) => void
  ): Promise<DeleteWebSecurityTemplateResponse> {
    return this.request("DeleteWebSecurityTemplate", req, cb)
  }

  /**
   * 修改客户端认证选项。
   */
  async ModifySecurityClientAttester(
    req: ModifySecurityClientAttesterRequest,
    cb?: (error: string, rep: ModifySecurityClientAttesterResponse) => void
  ): Promise<ModifySecurityClientAttesterResponse> {
    return this.request("ModifySecurityClientAttester", req, cb)
  }

  /**
   * 查询安全防护配置详情。
   */
  async DescribeSecurityPolicy(
    req: DescribeSecurityPolicyRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyResponse) => void
  ): Promise<DescribeSecurityPolicyResponse> {
    return this.request("DescribeSecurityPolicy", req, cb)
  }

  /**
   * 删除客户端认证选项。
   */
  async DeleteSecurityClientAttester(
    req: DeleteSecurityClientAttesterRequest,
    cb?: (error: string, rep: DeleteSecurityClientAttesterResponse) => void
  ): Promise<DeleteSecurityClientAttesterResponse> {
    return this.request("DeleteSecurityClientAttester", req, cb)
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
   * 通过本接口修改接入多通道安全加速网关的密钥，客户基于接入密钥签名接入多通道安全加速网关，修改后原密钥失效。
   */
  async ModifyMultiPathGatewaySecretKey(
    req: ModifyMultiPathGatewaySecretKeyRequest,
    cb?: (error: string, rep: ModifyMultiPathGatewaySecretKeyResponse) => void
  ): Promise<ModifyMultiPathGatewaySecretKeyResponse> {
    return this.request("ModifyMultiPathGatewaySecretKey", req, cb)
  }

  /**
     * 本接口为旧版本查询规则引擎规则接口，EdgeOne 于 2025 年 1 月 21 日已对规则引擎相关接口全面升级，新版本查询七层加速规则接口详情请参考  [DescribeL7AccRules](https://cloud.tencent.com/document/product/1552/115820)。
<p style="color: red;">注意：自 2025 年 1 月 21 日起，旧版接口停止更新迭代，后续新增功能将仅在新版接口中提供，旧版接口支持的原有能力将不受影响。为避免在使用旧版接口时出现数据字段冲突，建议您尽早迁移到新版规则引擎接口。</p>
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
   * 本接口用于回源 IP 网段发生变更时，确认已将最新回源 IP 网段更新至源站防火墙。确认已更新至最新的回源 IP 网段后，相关变更通知将会停止推送。
   */
  async ConfirmOriginACLUpdate(
    req: ConfirmOriginACLUpdateRequest,
    cb?: (error: string, rep: ConfirmOriginACLUpdateResponse) => void
  ): Promise<ConfirmOriginACLUpdateResponse> {
    return this.request("ConfirmOriginACLUpdate", req, cb)
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
     * 本接口用于站点首次开启源站防护，启用后 EdgeOne 将会使用特定的回源 IP 网段为七层加速域名/四层代理实例回源。单次支持提交的七层加速域名的数量最大为 200，四层代理实例的数量最大为 100，支持七层加速域名/四层代理实例混合提交，总实例个数最大为 200。如需要启用超过 200 个资源，可先通过指定资源的方式以最大数量启用，剩余资源通过 ModifyOriginACL 接口启用。后续新增七层加速域名/四层代理实例均请通过 ModifyOriginACL 接口配置。

注意：
- 调用本接口视为同意 [源站防护启用特别约定](https://cloud.tencent.com/document/product/1552/120141)；
- 回源 IP 网段会不定期变更，EdgeOne 将在回源 IP 网段变更前 14 天、前 7 天、前 3 天和前 1 天分别通过站内信、短信、邮件等一种或多种方式发起通知，为了能正常收到回源 IP 网段的变更通知，请务必确保您在 [腾讯云消息中心控制台](https://console.cloud.tencent.com/message)内，已勾选边缘安全加速平台 EO 的产品服务相关消息通知，并配置正确的消息接收人。配置方式请参考 [消息订阅管理](https://cloud.tencent.com/document/product/567/43476)。
     */
  async EnableOriginACL(
    req: EnableOriginACLRequest,
    cb?: (error: string, rep: EnableOriginACLResponse) => void
  ): Promise<EnableOriginACLResponse> {
    return this.request("EnableOriginACL", req, cb)
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
   * 创建负载均衡实例。详情请参考 [快速创建负载均衡实例](https://cloud.tencent.com/document/product/1552/104223)。负载均衡功能内测中，如您需要使用请 [联系我们](https://cloud.tencent.com/online-service)。
   */
  async CreateLoadBalancer(
    req: CreateLoadBalancerRequest,
    cb?: (error: string, rep: CreateLoadBalancerResponse) => void
  ): Promise<CreateLoadBalancerResponse> {
    return this.request("CreateLoadBalancer", req, cb)
  }

  /**
   * 本接口用于查询多通道安全加速网关实例与回源 IP 网段的绑定关系，以及回源 IP 网段详情。若 MultiPathGatewayNextOriginACL 字段有返回值，则需要将最新的回源 IP 网段同步到源站防火墙配置中。
   */
  async DescribeMultiPathGatewayOriginACL(
    req: DescribeMultiPathGatewayOriginACLRequest,
    cb?: (error: string, rep: DescribeMultiPathGatewayOriginACLResponse) => void
  ): Promise<DescribeMultiPathGatewayOriginACLResponse> {
    return this.request("DescribeMultiPathGatewayOriginACL", req, cb)
  }

  /**
   * 根据即时转码模板名字、模板类型或唯一标识，获取即时转码模板详情列表。返回结果包含符合条件的所有用户自定义模板及预置模板。
   */
  async DescribeJustInTimeTranscodeTemplates(
    req: DescribeJustInTimeTranscodeTemplatesRequest,
    cb?: (error: string, rep: DescribeJustInTimeTranscodeTemplatesResponse) => void
  ): Promise<DescribeJustInTimeTranscodeTemplatesResponse> {
    return this.request("DescribeJustInTimeTranscodeTemplates", req, cb)
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
     * 即时转码已经提供了预置转码模板，满足大部分的需求。如果有个性化的转码需求，可以通过本接口创建自定义的转码模板，最多可创建100个自定义转码模板。
为了确保即时转码效果的一致性，避免因 EO 缓存或 M3U8 分片处理过程中的模板变更导致视频输出异常，模板在创建后不可进行修改。
即时转码详细能力了解：[EdgeOne视频即时处理功能介绍](https://cloud.tencent.com/document/product/1552/111927)。
     */
  async CreateJustInTimeTranscodeTemplate(
    req: CreateJustInTimeTranscodeTemplateRequest,
    cb?: (error: string, rep: CreateJustInTimeTranscodeTemplateResponse) => void
  ): Promise<CreateJustInTimeTranscodeTemplateResponse> {
    return this.request("CreateJustInTimeTranscodeTemplate", req, cb)
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
     * 本接口为旧版本查询源站防护接口，EdgeOne 于 2025 年 6 月 27 日已对源站防护相关接口全面升级，新版本查询源站防护接口详情请参考 [DescribeOriginACL](https://cloud.tencent.com/document/product/1552/120408)。

<p style="color: red;">注意：自 2025 年 6 月 27 日起，旧版接口停止更新迭代，后续新增功能将仅在新版接口中提供。为避免在使用旧版接口时出现数据字段冲突，建议您尽早迁移到新版源站防护接口。</p>
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
   * 查询站点下的 API 资源。
   */
  async DescribeSecurityAPIResource(
    req: DescribeSecurityAPIResourceRequest,
    cb?: (error: string, rep: DescribeSecurityAPIResourceResponse) => void
  ): Promise<DescribeSecurityAPIResourceResponse> {
    return this.request("DescribeSecurityAPIResource", req, cb)
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
   * 用于创建 API 服务。
   */
  async CreateSecurityAPIService(
    req: CreateSecurityAPIServiceRequest,
    cb?: (error: string, rep: CreateSecurityAPIServiceResponse) => void
  ): Promise<CreateSecurityAPIServiceResponse> {
    return this.request("CreateSecurityAPIService", req, cb)
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
   * 修改 JavaScript 注入规则。
   */
  async ModifySecurityJSInjectionRule(
    req: ModifySecurityJSInjectionRuleRequest,
    cb?: (error: string, rep: ModifySecurityJSInjectionRuleResponse) => void
  ): Promise<ModifySecurityJSInjectionRuleResponse> {
    return this.request("ModifySecurityJSInjectionRule", req, cb)
  }

  /**
   * 通过本接口查询接入多通道安全加速网关的密钥，客户基于接入密钥签名接入多通道安全加速网关。
   */
  async DescribeMultiPathGatewaySecretKey(
    req: DescribeMultiPathGatewaySecretKeyRequest,
    cb?: (error: string, rep: DescribeMultiPathGatewaySecretKeyResponse) => void
  ): Promise<DescribeMultiPathGatewaySecretKeyResponse> {
    return this.request("DescribeMultiPathGatewaySecretKey", req, cb)
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
   * 本接口用以查询七层域名业务的回源时序数据。
   */
  async DescribeTimingL7OriginPullData(
    req: DescribeTimingL7OriginPullDataRequest,
    cb?: (error: string, rep: DescribeTimingL7OriginPullDataResponse) => void
  ): Promise<DescribeTimingL7OriginPullDataResponse> {
    return this.request("DescribeTimingL7OriginPullData", req, cb)
  }

  /**
     * 申请免费证书时，如果您需要通过使用 DNS 委派验证或者文件验证进行申请，您可以调用该接口来进行发起证书申请并根据申请方式来获取对应的验证内容。调用接口的顺序如下：
第一步：调用 ApplyFreeCertificate，指定申请免费证书的校验方式，获取验证内容；
第二步：为相应域名按照验证内容配置；
第三步：调用CheckFreeCertificateVerification 验证，验证通过后即完成免费证书申请；
第四步：调用ModifyHostsCertificate，下发域名证书为使用 EdgeOne 免费证书配置。

申请方式的介绍可参考文档：[免费证书申请说明](https://cloud.tencent.com/document/product/1552/90437) 
说明：
- 仅 CNAME 接入模式可调用该接口来指定免费证书申请方式。NS/DNSPod 托管接入模式都是使用自动验证来申请免费证书，无需调用该接口。
- 如果您需要切换免费证书验证方式，您可以重新调用本接口通过修改 VerificationMethod 字段来进行变更。
- 同个域名只能申请一本免费证书，在调用本接口后，后台会触发申请免费证书相关任务，您需要在2 天内，完成域名验证信息的相关配置，然后完成证书验证。
     */
  async ApplyFreeCertificate(
    req: ApplyFreeCertificateRequest,
    cb?: (error: string, rep: ApplyFreeCertificateResponse) => void
  ): Promise<ApplyFreeCertificateResponse> {
    return this.request("ApplyFreeCertificate", req, cb)
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
   * 您可以用过本接口查看站点下的 DNS 记录信息，包括 DNS 记录名、记录类型以及记录内容等信息，支持指定过滤条件查询对应的 DNS 记录信息。
   */
  async DescribeDnsRecords(
    req: DescribeDnsRecordsRequest,
    cb?: (error: string, rep: DescribeDnsRecordsResponse) => void
  ): Promise<DescribeDnsRecordsResponse> {
    return this.request("DescribeDnsRecords", req, cb)
  }

  /**
   * 修改站点的独立 DDoS 防护。
   */
  async ModifyDDoSProtection(
    req: ModifyDDoSProtectionRequest,
    cb?: (error: string, rep: ModifyDDoSProtectionResponse) => void
  ): Promise<ModifyDDoSProtectionResponse> {
    return this.request("ModifyDDoSProtection", req, cb)
  }

  /**
   * 查询站点下的 API 服务。
   */
  async DescribeSecurityAPIService(
    req: DescribeSecurityAPIServiceRequest,
    cb?: (error: string, rep: DescribeSecurityAPIServiceResponse) => void
  ): Promise<DescribeSecurityAPIServiceResponse> {
    return this.request("DescribeSecurityAPIService", req, cb)
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
   * 通过本接口创建接入多通道安全加速网关的密钥，客户基于接入密钥签名接入多通道安全加速网关。每个站点下只有一个密钥，可用于接入该站点下的所有网关，可通过接口 DescribeMultiPathGatewaySecretKey 查询。
   */
  async CreateMultiPathGatewaySecretKey(
    req: CreateMultiPathGatewaySecretKeyRequest,
    cb?: (error: string, rep: CreateMultiPathGatewaySecretKeyResponse) => void
  ): Promise<CreateMultiPathGatewaySecretKeyResponse> {
    return this.request("CreateMultiPathGatewaySecretKey", req, cb)
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
   * 查询四层代理实例下的转发规则列表。
   */
  async DescribeL4ProxyRules(
    req: DescribeL4ProxyRulesRequest,
    cb?: (error: string, rep: DescribeL4ProxyRulesResponse) => void
  ): Promise<DescribeL4ProxyRulesResponse> {
    return this.request("DescribeL4ProxyRules", req, cb)
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
该功能仅企业版套餐支持，并且该功能当前仍在内测中，如需使用，请[联系我们](https://cloud.tencent.com/online-service?from=connect-us)。
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
   * 通过本接口删除接入多通道安全加速网关的线路，仅自定义线路支持删除。
   */
  async DeleteMultiPathGatewayLine(
    req: DeleteMultiPathGatewayLineRequest,
    cb?: (error: string, rep: DeleteMultiPathGatewayLineResponse) => void
  ): Promise<DeleteMultiPathGatewayLineResponse> {
    return this.request("DeleteMultiPathGatewayLine", req, cb)
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

  /**
   * 根据站点 id 下唯一的模板标识，删除相应的即时转码模板。
   */
  async DeleteJustInTimeTranscodeTemplates(
    req: DeleteJustInTimeTranscodeTemplatesRequest,
    cb?: (error: string, rep: DeleteJustInTimeTranscodeTemplatesResponse) => void
  ): Promise<DeleteJustInTimeTranscodeTemplatesResponse> {
    return this.request("DeleteJustInTimeTranscodeTemplates", req, cb)
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
}

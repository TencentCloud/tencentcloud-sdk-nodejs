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
  CreatePlanForZoneResponse,
  DeployConfigGroupVersionRequest,
  DescribeEnvironmentsRequest,
  ModifyL4ProxyRulesStatusResponse,
  Compression,
  DeleteRulesRequest,
  ExceptUserRuleCondition,
  CheckCnameStatusResponse,
  DeleteL4ProxyRulesRequest,
  ModifyZoneResponse,
  DescribeOriginGroupResponse,
  DescribeTopL7CacheDataRequest,
  DeleteApplicationProxyResponse,
  Https,
  AlgDetectRule,
  SecEntryValue,
  DescribeZonesRequest,
  L4OfflineLog,
  DiffIPWhitelist,
  VerifyOwnershipRequest,
  DeleteSecurityIPGroupResponse,
  ModifyRuleRequest,
  OwnershipVerification,
  DescribePurgeTasksRequest,
  OriginRecord,
  DescribePrefetchTasksResponse,
  AdvancedFilter,
  DeleteApplicationProxyRequest,
  DescribeConfigGroupVersionDetailResponse,
  OriginDetail,
  DescribeDDoSAttackDataResponse,
  DescribeZoneSettingRequest,
  ModifyL4ProxyStatusResponse,
  FileVerification,
  DescribeIdentificationsResponse,
  ModifySecurityPolicyRequest,
  DeleteL4ProxyResponse,
  ModifyApplicationProxyRuleStatusResponse,
  DescribeL4ProxyResponse,
  RuleRewriteActionParams,
  CreateApplicationProxyResponse,
  BotUserRule,
  ModifyOriginGroupResponse,
  DeleteAccelerationDomainsRequest,
  DescribeApplicationProxiesResponse,
  DescribeL4ProxyRulesResponse,
  DescribeDeployHistoryRequest,
  DescribeAvailablePlansRequest,
  OriginInfo,
  BillingData,
  ModifySecurityPolicyResponse,
  DescribeHostsSettingResponse,
  ModifyZoneStatusResponse,
  DnsVerification,
  AlgDetectSession,
  ModifyZoneRequest,
  ModifyApplicationProxyStatusResponse,
  DeleteZoneResponse,
  CreateRuleResponse,
  BotExtendAction,
  TimingDataRecord,
  CreatePurgeTaskResponse,
  DeleteApplicationProxyRuleResponse,
  ModifyZoneSettingRequest,
  DescribeRulesResponse,
  DownloadL4LogsResponse,
  OriginProtectionInfo,
  DescribeOriginProtectionResponse,
  BindZoneToPlanResponse,
  ExceptConfig,
  DeleteOriginGroupRequest,
  ImageOptimize,
  DescribeBillingDataRequest,
  AliasDomain,
  WebSocket,
  ModifyAliasDomainRequest,
  AclCondition,
  TimingTypeValue,
  DescribeAliasDomainsRequest,
  SkipCondition,
  IpTableRule,
  L7OfflineLog,
  ModifyHostsCertificateRequest,
  ApplicationProxyRule,
  SmartRouting,
  ModifyApplicationProxyRequest,
  ModifyAccelerationDomainStatusesResponse,
  Zone,
  DescribeRulesSettingResponse,
  BindSecurityTemplateToEntityResponse,
  RuleExtraParameter,
  BindSharedCNAMEMap,
  RulesSettingAction,
  ModifyL4ProxyRulesResponse,
  DDoSAttackEvent,
  ClientIpHeader,
  DescribeDDoSAttackTopDataRequest,
  Quic,
  DescribeConfigGroupVersionDetailRequest,
  DownloadL7LogsResponse,
  DescribeL4ProxyRulesRequest,
  DescribeRulesRequest,
  DescribeContentQuotaResponse,
  DownloadL7LogsRequest,
  AclConfig,
  ModifyZoneSettingResponse,
  AlgDetectJS,
  AccelerationDomain,
  DeleteSecurityIPGroupRequest,
  RateLimitTemplateDetail,
  Origin,
  ModifyL4ProxyRequest,
  Grpc,
  SlowRateConfig,
  ServerCertInfo,
  CreateAliasDomainRequest,
  CreateAliasDomainResponse,
  DescribeOriginProtectionRequest,
  ClientIpCountry,
  CreatePrefetchTaskRequest,
  DeleteApplicationProxyRuleRequest,
  BindSharedCNAMEResponse,
  TemplateScope,
  DescribeTopL7AnalysisDataRequest,
  FileAscriptionInfo,
  DeleteSharedCNAMERequest,
  DescribeAccelerationDomainsResponse,
  ZoneSetting,
  DescribeTopL7CacheDataResponse,
  DescribeOverviewL7DataRequest,
  SwitchConfig,
  IdentifyZoneResponse,
  DeleteSharedCNAMEResponse,
  L4ProxyRule,
  DDoSBlockData,
  VanityNameServers,
  RuleChoicePropertiesItem,
  ModifyL4ProxyResponse,
  WafRule,
  SecurityConfig,
  DeleteL4ProxyRulesResponse,
  DescribeSecurityTemplateBindingsResponse,
  MaxAge,
  ModifyAccelerationDomainResponse,
  RuleCodeActionParams,
  IPGroup,
  WafConfig,
  DescribeTimingL7AnalysisDataRequest,
  CreatePrefetchTaskResponse,
  NoCache,
  DescribeDefaultCertificatesRequest,
  SlowPostConfig,
  BindZoneToPlanRequest,
  EnvInfo,
  IPWhitelist,
  DDoS,
  CreateZoneRequest,
  PlanInfo,
  DescribeTimingL7CacheDataRequest,
  ModifyAliasDomainStatusResponse,
  Task,
  Waf,
  ModifyRuleResponse,
  CreateConfigGroupVersionResponse,
  DeleteL4ProxyRequest,
  AscriptionInfo,
  VerifyOwnershipResponse,
  RuleItem,
  FirstPartConfig,
  DescribeDDoSAttackEventResponse,
  CreateApplicationProxyRuleRequest,
  Cache,
  ForceRedirect,
  RateLimitConfig,
  DownloadL4LogsRequest,
  CodeAction,
  DetailHost,
  Identification,
  DDosProtectionConfig,
  DescribeDDoSAttackDataRequest,
  CachePrefresh,
  CreateL4ProxyRequest,
  DescribeTimingL7AnalysisDataResponse,
  DescribeConfigGroupVersionsResponse,
  DescribeApplicationProxiesRequest,
  DescribeContentQuotaRequest,
  BotPortraitRule,
  RuleCondition,
  RulesProperties,
  DescribeOverviewL7DataResponse,
  Hsts,
  RateLimitTemplate,
  OriginGroupReference,
  ModifyHostsCertificateResponse,
  CreateRuleRequest,
  ModifyL4ProxyStatusRequest,
  TopEntry,
  DescribeEnvironmentsResponse,
  VanityNameServersIps,
  NsVerification,
  Rule,
  AccelerateMainland,
  ExceptUserRule,
  CreateApplicationProxyRuleResponse,
  RateLimitUserRule,
  StandardDebug,
  SubRule,
  DeployRecord,
  CertificateInfo,
  CreatePlanForZoneRequest,
  ModifyAliasDomainStatusRequest,
  BindSecurityTemplateToEntityRequest,
  TimingDataItem,
  ConfigGroupVersionInfo,
  CreateApplicationProxyRequest,
  CC,
  IntelligenceRuleItem,
  IntelligenceRule,
  PostMaxSize,
  Sv,
  DescribeBillingDataResponse,
  ModifyL4ProxyRulesStatusRequest,
  Filter,
  CreateAccelerationDomainResponse,
  CreateL4ProxyRulesResponse,
  DescribeTimingL4DataResponse,
  CreateZoneResponse,
  ModifyAccelerationDomainRequest,
  Action,
  ApplicationProxy,
  ModifyApplicationProxyResponse,
  ModifySecurityIPGroupResponse,
  CacheKey,
  ModifyOriginGroupRequest,
  BillingDataFilter,
  DescribeTimingL7CacheDataResponse,
  BindSharedCNAMERequest,
  RateLimitIntelligence,
  IpTableConfig,
  ModifyApplicationProxyStatusRequest,
  DeleteOriginGroupResponse,
  Header,
  RuleAndConditions,
  SecurityTemplateBinding,
  DropPageConfig,
  DescribeL4ProxyRequest,
  SecEntry,
  DescribeIdentificationsRequest,
  ModifyZoneStatusRequest,
  DescribeDefaultCertificatesResponse,
  PartialModule,
  CreateOriginGroupResponse,
  ModifyApplicationProxyRuleStatusRequest,
  AccelerateType,
  Ipv6,
  DescribeAliasDomainsResponse,
  CreateAccelerationDomainRequest,
  FollowOrigin,
  DeleteZoneRequest,
  SecurityType,
  BotManagedRule,
  IPRegionInfo,
  TopDetailData,
  DescribeConfigGroupVersionsRequest,
  DescribeOriginGroupRequest,
  ModifyApplicationProxyRuleResponse,
  DescribeZoneSettingResponse,
  AiRule,
  CreateSecurityIPGroupRequest,
  DropPageDetail,
  DeleteRulesResponse,
  QueryCondition,
  IdentifyZoneRequest,
  CacheConfig,
  ModifyApplicationProxyRuleRequest,
  ExceptUserRuleScope,
  FailReason,
  DescribePrefetchTasksRequest,
  ModifyL4ProxyRulesRequest,
  DescribeRulesSettingRequest,
  DescribeZonesResponse,
  ModifyAliasDomainResponse,
  EntityStatus,
  TemplateConfig,
  RewriteAction,
  DescribeIPRegionResponse,
  CheckCnameStatusRequest,
  TopDataRecord,
  DeleteAliasDomainRequest,
  CnameStatus,
  DeleteAccelerationDomainsResponse,
  DescribeTopL7AnalysisDataResponse,
  OfflineCache,
  RuleNormalActionParams,
  CreatePurgeTaskRequest,
  Resource,
  PrivateParameter,
  CreateConfigGroupVersionRequest,
  AclUserRule,
  Quota,
  CreateOriginGroupRequest,
  DescribeTimingL4DataRequest,
  DescribeHostsSettingRequest,
  SubRuleItem,
  CreateSecurityIPGroupResponse,
  CreateSharedCNAMEResponse,
  NormalAction,
  DescribePurgeTasksResponse,
  DescribeAvailablePlansResponse,
  DescribeDDoSAttackEventRequest,
  OriginGroup,
  ModifySecurityIPGroupRequest,
  AccelerationDomainCertificate,
  DeployConfigGroupVersionResponse,
  DescribeSecurityTemplateBindingsRequest,
  CreateL4ProxyResponse,
  AlgDetectResult,
  DescribeDeployHistoryResponse,
  L4Proxy,
  QueryString,
  DefaultServerCertInfo,
  CreateSharedCNAMERequest,
  DescribeAccelerationDomainsRequest,
  UpstreamHttp2,
  TopEntryValue,
  CreateL4ProxyRulesRequest,
  DescribeDDoSAttackTopDataResponse,
  DeleteAliasDomainResponse,
  DescribeIPRegionRequest,
  ModifyAccelerationDomainStatusesRequest,
  BotConfig,
  Tag,
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
   * 您可以通过本接口查看站点下的域名信息，包括加速域名、源站以及域名状态等信息。您可以查看站点下全部域名的信息，也可以指定过滤条件查询对应的域名信息。
   */
  async DescribeAccelerationDomains(
    req: DescribeAccelerationDomainsRequest,
    cb?: (error: string, rep: DescribeAccelerationDomainsResponse) => void
  ): Promise<DescribeAccelerationDomainsResponse> {
    return this.request("DescribeAccelerationDomains", req, cb)
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
   * 批量删除加速域名
   */
  async DeleteAccelerationDomains(
    req: DeleteAccelerationDomainsRequest,
    cb?: (error: string, rep: DeleteAccelerationDomainsResponse) => void
  ): Promise<DeleteAccelerationDomainsResponse> {
    return this.request("DeleteAccelerationDomains", req, cb)
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
   * 创建别称域名。
   */
  async CreateAliasDomain(
    req: CreateAliasDomainRequest,
    cb?: (error: string, rep: CreateAliasDomainResponse) => void
  ): Promise<CreateAliasDomainResponse> {
    return this.request("CreateAliasDomain", req, cb)
  }

  /**
   * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
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
   * 用于修改站点配置
   */
  async ModifyZoneSetting(
    req: ModifyZoneSettingRequest,
    cb?: (error: string, rep: ModifyZoneSettingResponse) => void
  ): Promise<ModifyZoneSettingResponse> {
    return this.request("ModifyZoneSetting", req, cb)
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
   * 修改别称域名状态。
   */
  async ModifyAliasDomainStatus(
    req: ModifyAliasDomainStatusRequest,
    cb?: (error: string, rep: ModifyAliasDomainStatusResponse) => void
  ): Promise<ModifyAliasDomainStatusResponse> {
    return this.request("ModifyAliasDomainStatus", req, cb)
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
   * 本接口（DescribeTopL7CacheData）用于查询七层缓存分析topN流量数据。
   */
  async DescribeTopL7CacheData(
    req: DescribeTopL7CacheDataRequest,
    cb?: (error: string, rep: DescribeTopL7CacheDataResponse) => void
  ): Promise<DescribeTopL7CacheDataResponse> {
    return this.request("DescribeTopL7CacheData", req, cb)
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
   * 修改规则引擎规则。
   */
  async ModifyRule(
    req: ModifyRuleRequest,
    cb?: (error: string, rep: ModifyRuleResponse) => void
  ): Promise<ModifyRuleResponse> {
    return this.request("ModifyRule", req, cb)
  }

  /**
   * 本接口（DescribeTopL7AnalysisData）用于查询七层流量前topN的数据。
   */
  async DescribeTopL7AnalysisData(
    req: DescribeTopL7AnalysisDataRequest,
    cb?: (error: string, rep: DescribeTopL7AnalysisDataResponse) => void
  ): Promise<DescribeTopL7AnalysisDataResponse> {
    return this.request("DescribeTopL7AnalysisData", req, cb)
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
   * 本接口（DescribeTimingL7AnalysisData）查询七层数据分析类时序数据。
   */
  async DescribeTimingL7AnalysisData(
    req: DescribeTimingL7AnalysisDataRequest,
    cb?: (error: string, rep: DescribeTimingL7AnalysisDataResponse) => void
  ): Promise<DescribeTimingL7AnalysisDataResponse> {
    return this.request("DescribeTimingL7AnalysisData", req, cb)
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
   * 规则引擎创建规则。
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
   * 查询当前账户可用套餐信息列表
   */
  async DescribeAvailablePlans(
    req?: DescribeAvailablePlansRequest,
    cb?: (error: string, rep: DescribeAvailablePlansResponse) => void
  ): Promise<DescribeAvailablePlansResponse> {
    return this.request("DescribeAvailablePlans", req, cb)
  }

  /**
   * 返回规则引擎可应用匹配请求的设置列表及其详细建议配置信息
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
   * 修改安全 IP 组。
   */
  async ModifySecurityIPGroup(
    req: ModifySecurityIPGroupRequest,
    cb?: (error: string, rep: ModifySecurityIPGroupResponse) => void
  ): Promise<ModifySecurityIPGroupResponse> {
    return this.request("ModifySecurityIPGroup", req, cb)
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
   * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 CreatePurgeTasks 接口提交的任务均可通过此接口进行查询。
   */
  async DescribePurgeTasks(
    req: DescribePurgeTasksRequest,
    cb?: (error: string, rep: DescribePurgeTasksResponse) => void
  ): Promise<DescribePurgeTasksResponse> {
    return this.request("DescribePurgeTasks", req, cb)
  }

  /**
   * 批量删除规则引擎规则。
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
   * 用于查询四层代理实例列表。
   */
  async DescribeL4Proxy(
    req: DescribeL4ProxyRequest,
    cb?: (error: string, rep: DescribeL4ProxyResponse) => void
  ): Promise<DescribeL4ProxyResponse> {
    return this.request("DescribeL4Proxy", req, cb)
  }

  /**
   * 查询规则引擎规则。
   */
  async DescribeRules(
    req: DescribeRulesRequest,
    cb?: (error: string, rep: DescribeRulesResponse) => void
  ): Promise<DescribeRulesResponse> {
    return this.request("DescribeRules", req, cb)
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
   * 用于查询域名配置信息
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
   * 用于查询站点的所有配置信息。
   */
  async DescribeZoneSetting(
    req: DescribeZoneSettingRequest,
    cb?: (error: string, rep: DescribeZoneSettingResponse) => void
  ): Promise<DescribeZoneSettingResponse> {
    return this.request("DescribeZoneSetting", req, cb)
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
   * 删除站点。
   */
  async DeleteZone(
    req: DeleteZoneRequest,
    cb?: (error: string, rep: DeleteZoneResponse) => void
  ): Promise<DeleteZoneResponse> {
    return this.request("DeleteZone", req, cb)
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
   * 通过本接口查询计费数据。
   */
  async DescribeBillingData(
    req: DescribeBillingDataRequest,
    cb?: (error: string, rep: DescribeBillingDataResponse) => void
  ): Promise<DescribeBillingDataResponse> {
    return this.request("DescribeBillingData", req, cb)
  }
}

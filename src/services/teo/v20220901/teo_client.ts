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
  DownloadL7LogsRequest,
  DescribeSpeedTestingQuotaResponse,
  Compression,
  DeleteRulesRequest,
  ExceptUserRuleCondition,
  ModifyDefaultCertificateRequest,
  SingleDataRecord,
  DescribeOriginGroupResponse,
  DescribeWebManagedRulesLogResponse,
  SecClientIp,
  DescribeTopL7CacheDataRequest,
  SingleTypeValue,
  CreateCredentialResponse,
  DeleteApplicationProxyResponse,
  Https,
  AlgDetectRule,
  SecEntryValue,
  DescribeZonesRequest,
  L4OfflineLog,
  DiffIPWhitelist,
  DescribeLogTopicTasksRequest,
  CreateCredentialRequest,
  ModifyRuleRequest,
  OriginRecord,
  DescribePrefetchTasksResponse,
  DescribeWebManagedRulesHitRuleDetailRequest,
  AdvancedFilter,
  DeleteApplicationProxyRequest,
  OriginDetail,
  DescribeDDoSAttackDataResponse,
  ModifySecurityWafGroupPolicyRequest,
  DescribeZoneSettingRequest,
  DescribeClientRuleListResponse,
  DescribeIdentificationsResponse,
  ModifySecurityPolicyRequest,
  DescribeDDoSAttackEventResponse,
  ModifyApplicationProxyRuleStatusResponse,
  DescribeClientRuleListRequest,
  ModifyZoneSettingRequest,
  RuleRewriteActionParams,
  CreateApplicationProxyResponse,
  BotUserRule,
  ModifyOriginGroupResponse,
  DeleteAccelerationDomainsRequest,
  ExceptUserRuleScope,
  ModifyAliasDomainRequest,
  DescribeAvailablePlansRequest,
  SpeedTestingInfo,
  DistrictStatistics,
  OriginInfo,
  DescribeSingleL7AnalysisDataRequest,
  ModifySecurityPolicyResponse,
  DescribeHostsSettingResponse,
  ModifyZoneStatusResponse,
  ModifyZoneResponse,
  TemplateConfig,
  AlgDetectSession,
  ModifyZoneRequest,
  ModifyApplicationProxyStatusResponse,
  DeleteZoneResponse,
  CreateRuleResponse,
  BotExtendAction,
  CreatePurgeTaskResponse,
  DeleteApplicationProxyRuleResponse,
  ReclaimAliasDomainRequest,
  DescribeRulesResponse,
  TimingDataRecord,
  OriginProtectionInfo,
  DescribeOriginProtectionResponse,
  BindZoneToPlanResponse,
  ExceptConfig,
  DeleteOriginGroupRequest,
  AliasDomain,
  AclCondition,
  RateLimitConfig,
  DescribeAliasDomainsRequest,
  ModifyApplicationProxyStatusRequest,
  SkipCondition,
  IpTableRule,
  L7OfflineLog,
  ModifyHostsCertificateRequest,
  ApplicationProxyRule,
  SmartRouting,
  DescribeDnsDataResponse,
  ModifyAccelerationDomainStatusesResponse,
  Zone,
  DescribeRulesSettingResponse,
  RuleExtraParameter,
  RulesSettingAction,
  DDoSAttackEvent,
  ClientIpHeader,
  DescribeDDoSAttackTopDataRequest,
  Quic,
  Ipv6,
  ModifyAccelerationDomainRequest,
  DescribeRulesRequest,
  ClsLogTopicInfo,
  DescribeSpeedTestingMetricDataRequest,
  TopDataRecord,
  AclConfig,
  ModifyZoneSettingResponse,
  AlgDetectJS,
  AccelerationDomain,
  DeleteSecurityIPGroupRequest,
  RateLimitTemplateDetail,
  Origin,
  WafConfig,
  DescribeSpeedTestingDetailsResponse,
  SlowRateConfig,
  DnsData,
  ServerCertInfo,
  TimingTypeValue,
  CreateAliasDomainRequest,
  CreateAliasDomainResponse,
  DescribeOriginProtectionRequest,
  ClientIpCountry,
  CreatePrefetchTaskRequest,
  DeleteApplicationProxyRuleRequest,
  DescribeApplicationProxiesResponse,
  DescribeTopL7AnalysisDataRequest,
  FileAscriptionInfo,
  DescribeAccelerationDomainsResponse,
  ZoneSetting,
  ModifyRulePriorityResponse,
  DescribeTopL7CacheDataResponse,
  DescribeOverviewL7DataRequest,
  SwitchConfig,
  IdentifyZoneResponse,
  WebSocket,
  DescribeWebProtectionTopDataRequest,
  SpeedTestingDetailData,
  DeleteSecurityIPGroupResponse,
  DDoSBlockData,
  VanityNameServers,
  RuleItem,
  ModifySecurityWafGroupPolicyResponse,
  DescribeTimingL7SourceDataResponse,
  DescribeWebManagedRulesDataRequest,
  RuleChoicePropertiesItem,
  DescribeWebManagedRulesDataResponse,
  WafRule,
  SecurityConfig,
  CreateSpeedTestingRequest,
  MaxAge,
  ModifyAliasDomainStatusResponse,
  RuleCodeActionParams,
  IPGroup,
  ModifyRulePriorityRequest,
  DescribeTimingL7AnalysisDataRequest,
  CreatePrefetchTaskResponse,
  NoCache,
  DescribeDefaultCertificatesRequest,
  BindZoneToPlanRequest,
  DescribeWebProtectionHitRuleDetailRequest,
  IPWhitelist,
  DDoS,
  CreateZoneRequest,
  PlanInfo,
  DescribeTimingL7CacheDataRequest,
  SpeedTestingQuota,
  Waf,
  ModifyRuleResponse,
  CheckCertificateResponse,
  AscriptionInfo,
  DescribeLogSetsResponse,
  DescribeWebProtectionDataRequest,
  CheckCertificateRequest,
  FirstPartConfig,
  DescribeAddableEntityListResponse,
  CreateApplicationProxyRuleRequest,
  Cache,
  ForceRedirect,
  ModifyApplicationProxyRequest,
  DownloadL4LogsRequest,
  CodeAction,
  CreateReplayTaskRequest,
  DescribeWebProtectionHitRuleDetailResponse,
  Identification,
  DescribeDDoSAttackDataRequest,
  CachePrefresh,
  DescribePurgeTasksRequest,
  DescribeWebProtectionClientIpListResponse,
  DescribeTimingL7AnalysisDataResponse,
  ImageOptimize,
  TopDetailData,
  DescribeApplicationProxiesRequest,
  DescribeContentQuotaRequest,
  BotPortraitRule,
  RuleCondition,
  RulesProperties,
  DescribeOverviewL7DataResponse,
  Hsts,
  RateLimitTemplate,
  ModifyHostsCertificateResponse,
  CreateRuleRequest,
  ModifyZoneStatusRequest,
  TopEntry,
  VanityNameServersIps,
  SlowPostConfig,
  AccelerateMainland,
  ExceptUserRule,
  CreateApplicationProxyRuleResponse,
  RateLimitUserRule,
  SubRule,
  DescribeLogSetsRequest,
  CreatePlanForZoneRequest,
  ModifyAliasDomainStatusRequest,
  ClientRule,
  TimingDataItem,
  SpeedTestingConfig,
  CreateApplicationProxyRequest,
  SpeedTestingStatus,
  DescribeSpeedTestingMetricDataResponse,
  CC,
  IntelligenceRuleItem,
  IntelligenceRule,
  PostMaxSize,
  Sv,
  Rule,
  SpeedTestingMetricData,
  Filter,
  CreateAccelerationDomainResponse,
  DescribeTimingL4DataResponse,
  CreateZoneResponse,
  UpdateOriginProtectionIPWhitelistRequest,
  Action,
  SpeedTestingStatistics,
  DescribeSpeedTestingQuotaRequest,
  ApplicationProxy,
  ModifyApplicationProxyResponse,
  ModifySecurityIPGroupResponse,
  ReclaimZoneRequest,
  CacheKey,
  ModifyOriginGroupRequest,
  WebLogs,
  DownloadL4LogsResponse,
  DescribeTimingL7CacheDataResponse,
  RateLimitIntelligence,
  DescribeAddableEntityListRequest,
  IpTableConfig,
  DescribeSingleL7AnalysisDataResponse,
  DeleteOriginGroupResponse,
  Header,
  RuleAndConditions,
  DescribeSpeedTestingDetailsRequest,
  DescribeTimingL7SourceDataRequest,
  DropPageConfig,
  ReclaimZoneResponse,
  UpdateOriginProtectionIPWhitelistResponse,
  SecEntry,
  DescribeIdentificationsRequest,
  DescribeDefaultCertificatesResponse,
  PartialModule,
  CreateOriginGroupResponse,
  ModifyApplicationProxyRuleStatusRequest,
  AccelerateType,
  NormalAction,
  DescribeAliasDomainsResponse,
  CreateAccelerationDomainRequest,
  FollowOrigin,
  DeleteZoneRequest,
  SecurityType,
  BotManagedRule,
  ModifyDefaultCertificateResponse,
  DetailHost,
  DescribeTopL7AnalysisDataResponse,
  DescribeOriginGroupRequest,
  ModifyApplicationProxyRuleResponse,
  DescribeZoneSettingResponse,
  AiRule,
  CreateSecurityIPGroupRequest,
  DropPageDetail,
  DeleteRulesResponse,
  QueryCondition,
  DescribeWebProtectionDataResponse,
  CacheConfig,
  ModifyApplicationProxyRuleRequest,
  ModifyAccelerationDomainResponse,
  FailReason,
  DescribePrefetchTasksRequest,
  DescribeRulesSettingRequest,
  DescribeZonesResponse,
  ModifyAliasDomainResponse,
  LogSetInfo,
  RewriteAction,
  OptimizeAction,
  DeleteAliasDomainRequest,
  DescribeContentQuotaResponse,
  DeleteAccelerationDomainsResponse,
  DescribeDnsDataRequest,
  RuleNormalActionParams,
  Tag,
  CreatePurgeTaskRequest,
  Resource,
  PrivateParameter,
  DownloadL7LogsResponse,
  AclUserRule,
  Quota,
  CreateOriginGroupRequest,
  DescribeTimingL4DataRequest,
  DescribeHostsSettingRequest,
  SubRuleItem,
  DescribeWebManagedRulesLogRequest,
  Task,
  CreateSecurityIPGroupResponse,
  WafGroup,
  DescribePurgeTasksResponse,
  DescribeAvailablePlansResponse,
  DescribeDDoSAttackEventRequest,
  OriginGroup,
  DescribeWebProtectionTopDataResponse,
  ModifySecurityIPGroupRequest,
  DescribeWebManagedRulesHitRuleDetailResponse,
  DescribeWebProtectionClientIpListRequest,
  IdentifyZoneRequest,
  AlgDetectResult,
  CreateSpeedTestingResponse,
  QueryString,
  DefaultServerCertInfo,
  SecHitRuleInfo,
  DescribeAccelerationDomainsRequest,
  Grpc,
  UpstreamHttp2,
  TopEntryValue,
  ReclaimAliasDomainResponse,
  OfflineCache,
  DescribeDDoSAttackTopDataResponse,
  DeleteAliasDomainResponse,
  SecRuleRelatedInfo,
  ModifyAccelerationDomainStatusesRequest,
  BotConfig,
  DescribeLogTopicTasksResponse,
  CreateReplayTaskResponse,
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
   * 创建清除缓存任务
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
   * 查询站点的验证信息。
   */
  async DescribeIdentifications(
    req: DescribeIdentificationsRequest,
    cb?: (error: string, rep: DescribeIdentificationsResponse) => void
  ): Promise<DescribeIdentificationsResponse> {
    return this.request("DescribeIdentifications", req, cb)
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
   * 查询加速域名列表，支持搜索、分页、排序、过滤。
   */
  async DescribeAccelerationDomains(
    req: DescribeAccelerationDomainsRequest,
    cb?: (error: string, rep: DescribeAccelerationDomainsResponse) => void
  ): Promise<DescribeAccelerationDomainsResponse> {
    return this.request("DescribeAccelerationDomains", req, cb)
  }

  /**
   * 修改源站组
   */
  async ModifyOriginGroup(
    req: ModifyOriginGroupRequest,
    cb?: (error: string, rep: ModifyOriginGroupResponse) => void
  ): Promise<ModifyOriginGroupResponse> {
    return this.request("ModifyOriginGroup", req, cb)
  }

  /**
   * 删除应用代理
   */
  async DeleteApplicationProxy(
    req: DeleteApplicationProxyRequest,
    cb?: (error: string, rep: DeleteApplicationProxyResponse) => void
  ): Promise<DeleteApplicationProxyResponse> {
    return this.request("DeleteApplicationProxy", req, cb)
  }

  /**
   * 本接口（DescribeWebManagedRulesLog）用于查询Web攻击日志。
   */
  async DescribeWebManagedRulesLog(
    req: DescribeWebManagedRulesLogRequest,
    cb?: (error: string, rep: DescribeWebManagedRulesLogResponse) => void
  ): Promise<DescribeWebManagedRulesLogResponse> {
    return this.request("DescribeWebManagedRulesLog", req, cb)
  }

  /**
   * 用于创建COS回源私有凭证
   */
  async CreateCredential(
    req?: CreateCredentialRequest,
    cb?: (error: string, rep: CreateCredentialResponse) => void
  ): Promise<CreateCredentialResponse> {
    return this.request("CreateCredential", req, cb)
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
   * 删除应用代理规则
   */
  async DeleteApplicationProxyRule(
    req: DeleteApplicationProxyRuleRequest,
    cb?: (error: string, rep: DeleteApplicationProxyRuleResponse) => void
  ): Promise<DeleteApplicationProxyRuleResponse> {
    return this.request("DeleteApplicationProxyRule", req, cb)
  }

  /**
   * 本接口（DescribeWebProtectionData）用于查询CC防护时序数据。
   */
  async DescribeWebProtectionData(
    req: DescribeWebProtectionDataRequest,
    cb?: (error: string, rep: DescribeWebProtectionDataResponse) => void
  ): Promise<DescribeWebProtectionDataResponse> {
    return this.request("DescribeWebProtectionData", req, cb)
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
   * 本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。
   */
  async DescribeOverviewL7Data(
    req: DescribeOverviewL7DataRequest,
    cb?: (error: string, rep: DescribeOverviewL7DataResponse) => void
  ): Promise<DescribeOverviewL7DataResponse> {
    return this.request("DescribeOverviewL7Data", req, cb)
  }

  /**
   * 本接口（DescribeAddableEntityList）用于查询剩余可添加的日志推送实体列表。
   */
  async DescribeAddableEntityList(
    req: DescribeAddableEntityListRequest,
    cb?: (error: string, rep: DescribeAddableEntityListResponse) => void
  ): Promise<DescribeAddableEntityListResponse> {
    return this.request("DescribeAddableEntityList", req, cb)
  }

  /**
   * 创建加速域名
   */
  async CreateAccelerationDomain(
    req: CreateAccelerationDomainRequest,
    cb?: (error: string, rep: CreateAccelerationDomainResponse) => void
  ): Promise<CreateAccelerationDomainResponse> {
    return this.request("CreateAccelerationDomain", req, cb)
  }

  /**
   * 校验证书
   */
  async CheckCertificate(
    req: CheckCertificateRequest,
    cb?: (error: string, rep: CheckCertificateResponse) => void
  ): Promise<CheckCertificateResponse> {
    return this.request("CheckCertificate", req, cb)
  }

  /**
   * 创建刷新/预热重放任务
   */
  async CreateReplayTask(
    req: CreateReplayTaskRequest,
    cb?: (error: string, rep: CreateReplayTaskResponse) => void
  ): Promise<CreateReplayTaskResponse> {
    return this.request("CreateReplayTask", req, cb)
  }

  /**
   * 查询站点拨测配额
   */
  async DescribeSpeedTestingQuota(
    req: DescribeSpeedTestingQuotaRequest,
    cb?: (error: string, rep: DescribeSpeedTestingQuotaResponse) => void
  ): Promise<DescribeSpeedTestingQuotaResponse> {
    return this.request("DescribeSpeedTestingQuota", req, cb)
  }

  /**
   * 对用户指定的域名进行一次站点拨测
   */
  async CreateSpeedTesting(
    req: CreateSpeedTestingRequest,
    cb?: (error: string, rep: CreateSpeedTestingResponse) => void
  ): Promise<CreateSpeedTestingResponse> {
    return this.request("CreateSpeedTesting", req, cb)
  }

  /**
   * 查询站点拨测结果
   */
  async DescribeSpeedTestingMetricData(
    req: DescribeSpeedTestingMetricDataRequest,
    cb?: (error: string, rep: DescribeSpeedTestingMetricDataResponse) => void
  ): Promise<DescribeSpeedTestingMetricDataResponse> {
    return this.request("DescribeSpeedTestingMetricData", req, cb)
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
   * 修改应用代理规则的状态
   */
  async ModifyApplicationProxyRuleStatus(
    req: ModifyApplicationProxyRuleStatusRequest,
    cb?: (error: string, rep: ModifyApplicationProxyRuleStatusResponse) => void
  ): Promise<ModifyApplicationProxyRuleStatusResponse> {
    return this.request("ModifyApplicationProxyRuleStatus", req, cb)
  }

  /**
   * 查询预热任务状态
   */
  async DescribePrefetchTasks(
    req: DescribePrefetchTasksRequest,
    cb?: (error: string, rep: DescribePrefetchTasksResponse) => void
  ): Promise<DescribePrefetchTasksResponse> {
    return this.request("DescribePrefetchTasks", req, cb)
  }

  /**
   * 删除源站组
   */
  async DeleteOriginGroup(
    req: DeleteOriginGroupRequest,
    cb?: (error: string, rep: DeleteOriginGroupResponse) => void
  ): Promise<DeleteOriginGroupResponse> {
    return this.request("DeleteOriginGroup", req, cb)
  }

  /**
   * 更新源站防护IP白名单
   */
  async UpdateOriginProtectionIPWhitelist(
    req: UpdateOriginProtectionIPWhitelistRequest,
    cb?: (error: string, rep: UpdateOriginProtectionIPWhitelistResponse) => void
  ): Promise<UpdateOriginProtectionIPWhitelistResponse> {
    return this.request("UpdateOriginProtectionIPWhitelist", req, cb)
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
   * 查询清除缓存历史记录
   */
  async DescribePurgeTasks(
    req: DescribePurgeTasksRequest,
    cb?: (error: string, rep: DescribePurgeTasksResponse) => void
  ): Promise<DescribePurgeTasksResponse> {
    return this.request("DescribePurgeTasks", req, cb)
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
   * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
   */
  async DescribeTimingL7CacheData(
    req: DescribeTimingL7CacheDataRequest,
    cb?: (error: string, rep: DescribeTimingL7CacheDataResponse) => void
  ): Promise<DescribeTimingL7CacheDataResponse> {
    return this.request("DescribeTimingL7CacheData", req, cb)
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
   * 本接口（DescribeWebProtectionHitRuleDetail）用于查询CC防护命中规则详情列表。
   */
  async DescribeWebProtectionHitRuleDetail(
    req: DescribeWebProtectionHitRuleDetailRequest,
    cb?: (error: string, rep: DescribeWebProtectionHitRuleDetailResponse) => void
  ): Promise<DescribeWebProtectionHitRuleDetailResponse> {
    return this.request("DescribeWebProtectionHitRuleDetail", req, cb)
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
   * 修改规则引擎规则优先级
   */
  async ModifyRulePriority(
    req: ModifyRulePriorityRequest,
    cb?: (error: string, rep: ModifyRulePriorityResponse) => void
  ): Promise<ModifyRulePriorityResponse> {
    return this.request("ModifyRulePriority", req, cb)
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
   * 修改加速域名信息
   */
  async ModifyAccelerationDomain(
    req: ModifyAccelerationDomainRequest,
    cb?: (error: string, rep: ModifyAccelerationDomainResponse) => void
  ): Promise<ModifyAccelerationDomainResponse> {
    return this.request("ModifyAccelerationDomain", req, cb)
  }

  /**
   * 修改应用代理的状态
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
   * 查询应用代理列表。
   */
  async DescribeApplicationProxies(
    req: DescribeApplicationProxiesRequest,
    cb?: (error: string, rep: DescribeApplicationProxiesResponse) => void
  ): Promise<DescribeApplicationProxiesResponse> {
    return this.request("DescribeApplicationProxies", req, cb)
  }

  /**
   * 本接口（DescribeTimingL7SourceData）查询七层回源分析时序数据。
   */
  async DescribeTimingL7SourceData(
    req: DescribeTimingL7SourceDataRequest,
    cb?: (error: string, rep: DescribeTimingL7SourceDataResponse) => void
  ): Promise<DescribeTimingL7SourceDataResponse> {
    return this.request("DescribeTimingL7SourceData", req, cb)
  }

  /**
   * 本接口（DescribeClientRuleList）用于查询封禁客户端信息列表。
   */
  async DescribeClientRuleList(
    req: DescribeClientRuleListRequest,
    cb?: (error: string, rep: DescribeClientRuleListResponse) => void
  ): Promise<DescribeClientRuleListResponse> {
    return this.request("DescribeClientRuleList", req, cb)
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
   * 修改应用代理
   */
  async ModifyApplicationProxy(
    req: ModifyApplicationProxyRequest,
    cb?: (error: string, rep: ModifyApplicationProxyResponse) => void
  ): Promise<ModifyApplicationProxyResponse> {
    return this.request("ModifyApplicationProxy", req, cb)
  }

  /**
   * 用于用户接入新的站点。
   */
  async CreateZone(
    req: CreateZoneRequest,
    cb?: (error: string, rep: CreateZoneResponse) => void
  ): Promise<CreateZoneResponse> {
    return this.request("CreateZone", req, cb)
  }

  /**
   * 本接口（DescribeWebProtectionClientIpList）用于查询CC防护客户端（攻击源）IP信息。
   */
  async DescribeWebProtectionClientIpList(
    req: DescribeWebProtectionClientIpListRequest,
    cb?: (error: string, rep: DescribeWebProtectionClientIpListResponse) => void
  ): Promise<DescribeWebProtectionClientIpListResponse> {
    return this.request("DescribeWebProtectionClientIpList", req, cb)
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
   * 修改安全配置托管规则
   */
  async ModifySecurityWafGroupPolicy(
    req: ModifySecurityWafGroupPolicyRequest,
    cb?: (error: string, rep: ModifySecurityWafGroupPolicyResponse) => void
  ): Promise<ModifySecurityWafGroupPolicyResponse> {
    return this.request("ModifySecurityWafGroupPolicy", req, cb)
  }

  /**
   * 获取DNS请求数统计曲线
   */
  async DescribeDnsData(
    req: DescribeDnsDataRequest,
    cb?: (error: string, rep: DescribeDnsDataResponse) => void
  ): Promise<DescribeDnsDataResponse> {
    return this.request("DescribeDnsData", req, cb)
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
   * 本接口（DescribeLogTopicTasks）用于获取日志推送任务列表。
   */
  async DescribeLogTopicTasks(
    req: DescribeLogTopicTasksRequest,
    cb?: (error: string, rep: DescribeLogTopicTasksResponse) => void
  ): Promise<DescribeLogTopicTasksResponse> {
    return this.request("DescribeLogTopicTasks", req, cb)
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
   * 批量删除规则引擎规则。
   */
  async DeleteRules(
    req: DeleteRulesRequest,
    cb?: (error: string, rep: DeleteRulesResponse) => void
  ): Promise<DeleteRulesResponse> {
    return this.request("DeleteRules", req, cb)
  }

  /**
   * 本接口（DescribeSingleL7AnalysisData）用于查询七层流量数据分析单值数据列表，单值数据表示：指标在查询时间范围内的单个统计数据，通常表现为接口仅返回一个统计数值。
   */
  async DescribeSingleL7AnalysisData(
    req: DescribeSingleL7AnalysisDataRequest,
    cb?: (error: string, rep: DescribeSingleL7AnalysisDataResponse) => void
  ): Promise<DescribeSingleL7AnalysisDataResponse> {
    return this.request("DescribeSingleL7AnalysisData", req, cb)
  }

  /**
   * 修改默认证书状态
   */
  async ModifyDefaultCertificate(
    req: ModifyDefaultCertificateRequest,
    cb?: (error: string, rep: ModifyDefaultCertificateResponse) => void
  ): Promise<ModifyDefaultCertificateResponse> {
    return this.request("ModifyDefaultCertificate", req, cb)
  }

  /**
   * 本接口（DescribeWebManagedRulesHitRuleDetail）用于查询WAF攻击命中规则详情。
   */
  async DescribeWebManagedRulesHitRuleDetail(
    req: DescribeWebManagedRulesHitRuleDetailRequest,
    cb?: (error: string, rep: DescribeWebManagedRulesHitRuleDetailResponse) => void
  ): Promise<DescribeWebManagedRulesHitRuleDetailResponse> {
    return this.request("DescribeWebManagedRulesHitRuleDetail", req, cb)
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
   * 创建应用代理
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
   * 修改应用代理规则
   */
  async ModifyApplicationProxyRule(
    req: ModifyApplicationProxyRuleRequest,
    cb?: (error: string, rep: ModifyApplicationProxyRuleResponse) => void
  ): Promise<ModifyApplicationProxyRuleResponse> {
    return this.request("ModifyApplicationProxyRule", req, cb)
  }

  /**
   * 创建源站组
   */
  async CreateOriginGroup(
    req: CreateOriginGroupRequest,
    cb?: (error: string, rep: CreateOriginGroupResponse) => void
  ): Promise<CreateOriginGroupResponse> {
    return this.request("CreateOriginGroup", req, cb)
  }

  /**
   * 用于查询拨测分地区数据
   */
  async DescribeSpeedTestingDetails(
    req: DescribeSpeedTestingDetailsRequest,
    cb?: (error: string, rep: DescribeSpeedTestingDetailsResponse) => void
  ): Promise<DescribeSpeedTestingDetailsResponse> {
    return this.request("DescribeSpeedTestingDetails", req, cb)
  }

  /**
   * 用于修改域名证书
   */
  async ModifyHostsCertificate(
    req: ModifyHostsCertificateRequest,
    cb?: (error: string, rep: ModifyHostsCertificateResponse) => void
  ): Promise<ModifyHostsCertificateResponse> {
    return this.request("ModifyHostsCertificate", req, cb)
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
   * 查询源站防护信息
   */
  async DescribeOriginProtection(
    req: DescribeOriginProtectionRequest,
    cb?: (error: string, rep: DescribeOriginProtectionResponse) => void
  ): Promise<DescribeOriginProtectionResponse> {
    return this.request("DescribeOriginProtection", req, cb)
  }

  /**
   * 本接口（DescribeLogSets）用于获取日志集列表。
   */
  async DescribeLogSets(
    req: DescribeLogSetsRequest,
    cb?: (error: string, rep: DescribeLogSetsResponse) => void
  ): Promise<DescribeLogSetsResponse> {
    return this.request("DescribeLogSets", req, cb)
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
   * 当客户取回站定的同时会取回此站点下关联的别称域名，此时入参为ZoneId；当客户接入站点发现已被别称域名接入时通过验证之后可取回域名，此时入参为ZoneName。
   */
  async ReclaimAliasDomain(
    req: ReclaimAliasDomainRequest,
    cb?: (error: string, rep: ReclaimAliasDomainResponse) => void
  ): Promise<ReclaimAliasDomainResponse> {
    return this.request("ReclaimAliasDomain", req, cb)
  }

  /**
   * 创建应用代理规则
   */
  async CreateApplicationProxyRule(
    req: CreateApplicationProxyRuleRequest,
    cb?: (error: string, rep: CreateApplicationProxyRuleResponse) => void
  ): Promise<CreateApplicationProxyRuleResponse> {
    return this.request("CreateApplicationProxyRule", req, cb)
  }

  /**
   * 用户查询用户站点信息列表，支持分页。
   */
  async DescribeZones(
    req: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点。
   */
  async ReclaimZone(
    req: ReclaimZoneRequest,
    cb?: (error: string, rep: ReclaimZoneResponse) => void
  ): Promise<ReclaimZoneResponse> {
    return this.request("ReclaimZone", req, cb)
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
   * 本接口（DescribeWebProtectionTopData）用于查询CC防护的Top数据。
   */
  async DescribeWebProtectionTopData(
    req: DescribeWebProtectionTopDataRequest,
    cb?: (error: string, rep: DescribeWebProtectionTopDataResponse) => void
  ): Promise<DescribeWebProtectionTopDataResponse> {
    return this.request("DescribeWebProtectionTopData", req, cb)
  }

  /**
   * 本接口（DescribeWebManagedRulesData）用于查询WAF攻击的时序数据。
   */
  async DescribeWebManagedRulesData(
    req: DescribeWebManagedRulesDataRequest,
    cb?: (error: string, rep: DescribeWebManagedRulesDataResponse) => void
  ): Promise<DescribeWebManagedRulesDataResponse> {
    return this.request("DescribeWebManagedRulesData", req, cb)
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
}

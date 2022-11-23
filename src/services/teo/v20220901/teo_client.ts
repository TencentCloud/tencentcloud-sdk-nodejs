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
  Compression,
  DescribeOriginGroupResponse,
  ModifyLoadBalancingStatusResponse,
  DescribeBotDataRequest,
  SpeedTestingInfo,
  DescribeSingleL7AnalysisDataRequest,
  TopEntryValue,
  DescribeHostsSettingResponse,
  ShieldArea,
  Origin,
  DescribeRulesResponse,
  TimingDataRecord,
  DDoSAttackEventDetailData,
  DescribeBotDataResponse,
  Tag,
  RateLimitConfig,
  RuleExtraParameter,
  ClsLogTopicInfo,
  WafConfig,
  CreateAliasDomainRequest,
  CreatePrefetchTaskRequest,
  DescribeApplicationProxiesResponse,
  DescribeTopL7AnalysisDataRequest,
  DDoSAttackSourceEvent,
  ModifyRulePriorityResponse,
  SwitchConfig,
  IdentifyZoneResponse,
  SpeedTestingDetailData,
  BotManagedRuleDetail,
  DescribeDDoSAttackSourceEventResponse,
  DDoSAntiPly,
  DescribeAliasDomainsResponse,
  PlanInfo,
  DescribeTimingL7CacheDataRequest,
  DescribeSecurityPolicyListResponse,
  CheckCertificateRequest,
  DescribeDDoSAttackEventResponse,
  ForceRedirect,
  CodeAction,
  CachePrefresh,
  DescribeWebProtectionClientIpListResponse,
  DescribeTimingL7AnalysisDataResponse,
  OriginGroupCondition,
  BotPortraitRule,
  DDoSRule,
  RulesProperties,
  RuleCodeActionParams,
  ModifyDDoSPolicyHostResponse,
  ExceptUserRule,
  SecEntry,
  SubRule,
  DDoSPacketFilter,
  DescribeSpeedTestingMetricDataResponse,
  Sv,
  Rule,
  CreateLogSetResponse,
  DownloadL4LogsRequest,
  CreateCustomErrorPageRequest,
  DescribeDnssecResponse,
  ModifyZoneCnameSpeedUpRequest,
  SecurityEntity,
  ModifyDnsRecordRequest,
  DescribeDDoSPolicyResponse,
  CreateApplicationProxyRuleRequest,
  DescribeDDoSBlockListRequest,
  DescribeDDoSMajorAttackEventRequest,
  DescribeSecurityPolicyListRequest,
  DescribeTimingL7CacheDataResponse,
  DescribeZonesResponse,
  Header,
  DescribeDDoSPolicyRequest,
  DDoSSpeedLimit,
  RateLimitIntelligenceRuleDetail,
  ReclaimZoneRequest,
  DeleteZoneRequest,
  BotManagedRule,
  SecurityConfig,
  L4OfflineLog,
  ModifyZoneCnameSpeedUpResponse,
  FailReason,
  DescribeRulesSettingRequest,
  LogSetInfo,
  OptimizeAction,
  DescribeDnsDataRequest,
  RuleNormalActionParams,
  PrivateParameter,
  CreateOriginGroupRequest,
  TopDataRecord,
  ModifyLoadBalancingRequest,
  DescribeWebManagedRulesLogRequest,
  WafGroup,
  DescribeAvailablePlansResponse,
  RateLimitTemplate,
  DescribeWebProtectionTopDataResponse,
  WafGroupInfo,
  DefaultServerCertInfo,
  OfflineCache,
  DescribeDDoSAttackTopDataResponse,
  SecRuleRelatedInfo,
  DescribeSpeedTestingQuotaResponse,
  DeleteRulesRequest,
  ExceptUserRuleCondition,
  ModifyDefaultCertificateRequest,
  MaxAge,
  DeleteApplicationProxyResponse,
  SecEntryValue,
  ModifyAlarmDefaultThresholdResponse,
  CreateCredentialRequest,
  ModifyRuleRequest,
  DescribePrefetchTasksResponse,
  DescribeWebManagedRulesHitRuleDetailRequest,
  DescribeBotClientIpListResponse,
  ModifySecurityWafGroupPolicyRequest,
  DescribeZoneSettingRequest,
  ModifySecurityPolicyRequest,
  ModifyDnssecRequest,
  SmartRouting,
  CreateApplicationProxyResponse,
  Task,
  BotLog,
  DistrictStatistics,
  CreateIpTableListRequest,
  ModifyDDoSPolicyHostRequest,
  DeleteAliasDomainRequest,
  DescribeIdentificationsResponse,
  CreatePurgeTaskResponse,
  DeleteApplicationProxyRuleResponse,
  ReclaimAliasDomainRequest,
  CreateSecurityDropPageRequest,
  ExceptConfig,
  DeleteOriginGroupRequest,
  DetailHost,
  AclCondition,
  PortraitManagedRuleDetail,
  L7OfflineLog,
  CreateLogTopicTaskResponse,
  ApplicationProxyRule,
  DescribeDnsDataResponse,
  Zone,
  DescribeDDoSAttackSourceEventRequest,
  ModifyLoadBalancingStatusRequest,
  DDoSAttackEvent,
  DropPageDetail,
  SwitchLogTopicTaskResponse,
  CreateDnsRecordResponse,
  ServerCertInfo,
  DescribeZonesRequest,
  OriginRecord,
  AdvancedOriginGroup,
  CreateLoadBalancingResponse,
  DeleteLogTopicTaskRequest,
  VanityNameServers,
  DescribeDnsRecordsRequest,
  CreatePrefetchTaskResponse,
  DescribeDefaultCertificatesRequest,
  ModifyApplicationProxyRuleResponse,
  DescribeWebProtectionHitRuleDetailRequest,
  DDoS,
  DescribeSecurityRuleIdRequest,
  DDoSHost,
  DownloadL7LogsRequest,
  DeleteLoadBalancingResponse,
  RuleItem,
  DescribeAddableEntityListResponse,
  Cache,
  DescribeBotHitRuleDetailRequest,
  DescribeWebProtectionHitRuleDetailResponse,
  DescribeSpeedTestingMetricDataRequest,
  ModifyLogTopicTaskResponse,
  RuleCondition,
  DescribeOverviewL7DataResponse,
  DescribeSecurityPolicyRequest,
  TimingDataItem,
  RateLimitUserRule,
  ModifyDnsRecordResponse,
  CreatePlanForZoneRequest,
  DeleteLoadBalancingRequest,
  CacheKey,
  DownloadL4LogsResponse,
  IpTableConfig,
  DeleteOriginGroupResponse,
  CreateSecurityDropPageResponse,
  SpeedTestingMetricData,
  DescribeIdentificationsRequest,
  ModifyHostsCertificateResponse,
  CreateLogSetRequest,
  CreateIpTableListResponse,
  NormalAction,
  TopDetailData,
  DescribeZoneSettingResponse,
  DDoSAllowBlock,
  DescribePurgeTasksRequest,
  IdentifyZoneRequest,
  CacheConfig,
  ModifyDDoSPolicyResponse,
  DDoSFeaturesFilter,
  IntelligenceRule,
  DDoSAllowBlockRule,
  DescribeZoneDDoSPolicyRequest,
  ModifyLogTopicTaskRequest,
  DescribeDDoSAttackEventRequest,
  DescribeWebProtectionClientIpListRequest,
  ModifyDnssecResponse,
  CreateSpeedTestingResponse,
  SecHitRuleInfo,
  DescribeOriginGroupRequest,
  DescribeLogTopicTasksResponse,
  CreatePlanForZoneResponse,
  DescribeLogTopicTasksRequest,
  DescribeDDoSAttackEventDetailResponse,
  SingleTypeValue,
  CreateCredentialResponse,
  DescribeAliasDomainsRequest,
  SwitchLogTopicTaskRequest,
  DeleteApplicationProxyRequest,
  ModifyZoneStatusRequest,
  ModifyOriginGroupResponse,
  ExceptUserRuleScope,
  ModifyAliasDomainRequest,
  DescribeSecurityPortraitRulesRequest,
  ReclaimZoneResponse,
  DescribeSecurityPolicyRegionsResponse,
  DescribeBotTopDataRequest,
  DeleteZoneResponse,
  CreateRuleResponse,
  BindZoneToPlanResponse,
  CreateDnsRecordRequest,
  WafRule,
  ModifyApplicationProxyRequest,
  ModifyAliasDomainStatusRequest,
  RulesSettingAction,
  Ipv6,
  ModifyAlarmDefaultThresholdRequest,
  ModifyApplicationProxyRuleRequest,
  DDoSStatusInfo,
  AclConfig,
  SubRuleItem,
  DescribeSpeedTestingDetailsResponse,
  WafGroupDetail,
  CreateAliasDomainResponse,
  ClientIpCountry,
  LoadBalancing,
  DeleteApplicationProxyRuleRequest,
  FileAscriptionInfo,
  DescribeDDoSBlockListResponse,
  DescribeTopL7CacheDataResponse,
  SpeedTestingStatus,
  CreateLoadBalancingRequest,
  DescribeDnssecRequest,
  RuleChoicePropertiesItem,
  ModifyAlarmConfigResponse,
  ModifyAliasDomainStatusResponse,
  DescribeTimingL7AnalysisDataRequest,
  NoCache,
  GeoIp,
  DescribeSecurityGroupManagedRulesRequest,
  ModifyApplicationProxyStatusRequest,
  CreateZoneRequest,
  AscriptionInfo,
  DescribeLogSetsResponse,
  DescribeClientRuleListResponse,
  Waf,
  DescribeLogTopicTaskDetailRequest,
  CreateSpeedTestingRequest,
  CreateReplayTaskRequest,
  DescribeRateLimitIntelligenceRuleRequest,
  DescribeDnsRecordsResponse,
  DescribeDDoSAttackDataRequest,
  DescribeWebManagedRulesDataResponse,
  DescribeApplicationProxiesRequest,
  DescribeContentQuotaRequest,
  DescribeWebProtectionAttackEventsRequest,
  Hsts,
  CreateRuleRequest,
  TemplateConfig,
  DescribeRateLimitIntelligenceRuleResponse,
  RateLimitTemplateDetail,
  CreateApplicationProxyRuleResponse,
  DescribeLogSetsRequest,
  ClientRule,
  CreateApplicationProxyRequest,
  CC,
  DescribeTimingL4DataResponse,
  Action,
  LogTopicDetailInfo,
  ApplicationProxy,
  ModifyApplicationProxyResponse,
  ZoneSetting,
  RuleAndConditions,
  DropPageConfig,
  PartialModule,
  ModifyApplicationProxyRuleStatusRequest,
  AccelerateType,
  ModifyDefaultCertificateResponse,
  DescribeSecurityGroupManagedRulesResponse,
  FollowOrigin,
  DescribeSpeedTestingDetailsRequest,
  CreateLogTopicTaskRequest,
  QueryCondition,
  RuleRewriteActionParams,
  ModifyAliasDomainResponse,
  DeleteDnsRecordsRequest,
  DescribeBotLogRequest,
  DDoSGeoIp,
  ModifyHostsCertificateRequest,
  DDoSMajorAttackEvent,
  DescribeTopL7AnalysisDataResponse,
  ClientIpHeader,
  Resource,
  DescribeHostsSettingRequest,
  DescribeBotHitRuleDetailResponse,
  DescribeDDoSAttackEventDetailRequest,
  DeleteRulesResponse,
  OriginGroup,
  DescribeWebManagedRulesHitRuleDetailResponse,
  WebLogs,
  SkipCondition,
  DnssecInfo,
  UpstreamHttp2,
  ReclaimAliasDomainResponse,
  DeleteAliasDomainResponse,
  BotConfig,
  CreateReplayTaskResponse,
  SingleDataRecord,
  SecClientIp,
  DescribeTopL7CacheDataRequest,
  Https,
  DescribeBotManagedRulesResponse,
  AdvancedFilter,
  CreateCustomErrorPageResponse,
  DescribeDDoSAttackDataResponse,
  ModifyZoneSettingRequest,
  DDoSAcl,
  ModifyApplicationProxyRuleStatusResponse,
  DescribeClientRuleListRequest,
  ModifyZoneRequest,
  DescribeAvailablePlansRequest,
  ModifyZoneResponse,
  WafGroupRule,
  DDoSAclRule,
  DescribeBotTopDataResponse,
  DescribeBotClientIpListRequest,
  AliasDomain,
  IpTableRule,
  DescribeDDoSAttackTopDataRequest,
  Quic,
  DescribeRulesRequest,
  CCInterceptEvent,
  DescribeDDoSMajorAttackEventResponse,
  DescribeContentQuotaResponse,
  ModifyZoneSettingResponse,
  DownloadL7LogsResponse,
  DnsData,
  DescribeWebManagedRulesLogResponse,
  AclUserRule,
  RewriteAction,
  DescribeOverviewL7DataRequest,
  WebSocket,
  DescribeWebProtectionTopDataRequest,
  DDoSBlockData,
  ModifySecurityWafGroupPolicyResponse,
  DescribeWebManagedRulesDataRequest,
  SpeedTestingQuota,
  DescribePrefetchTasksRequest,
  DnsRecord,
  ModifyRulePriorityRequest,
  SpeedTestingStatistics,
  BindZoneToPlanRequest,
  SecurityType,
  ModifyRuleResponse,
  CheckCertificateResponse,
  DescribeWebProtectionDataRequest,
  DescribeSecurityPortraitRulesResponse,
  ModifyDDoSPolicyRequest,
  ModifyApplicationProxyStatusResponse,
  Identification,
  ModifyAlarmConfigRequest,
  DeleteLogTopicTaskResponse,
  ModifyLoadBalancingResponse,
  TopEntry,
  DescribeRulesSettingResponse,
  IntelligenceRuleItem,
  DescribeLogTopicTaskDetailResponse,
  PostMaxSize,
  Filter,
  CreateZoneResponse,
  DescribeSpeedTestingQuotaRequest,
  ModifySecurityPolicyResponse,
  ModifyOriginGroupRequest,
  DescribeAddableEntityListRequest,
  DescribeSingleL7AnalysisDataResponse,
  DescribeDefaultCertificatesResponse,
  CreateOriginGroupResponse,
  DescribeSecurityPolicyResponse,
  SpeedTestingConfig,
  DescribeSecurityPolicyRegionsRequest,
  AiRule,
  DescribeLoadBalancingRequest,
  DescribeWebProtectionDataResponse,
  Quota,
  DescribeZoneDDoSPolicyResponse,
  ModifyZoneStatusResponse,
  DescribeWebProtectionAttackEventsResponse,
  CreatePurgeTaskRequest,
  DeleteDnsRecordsResponse,
  DescribeSecurityRuleIdResponse,
  DescribePurgeTasksResponse,
  DescribeBotLogResponse,
  DescribeLoadBalancingResponse,
  RateLimitIntelligence,
  QueryString,
  TimingTypeValue,
  DescribeTimingL4DataRequest,
  VanityNameServersIps,
  DescribeBotManagedRulesRequest,
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
   * 创建 DNS 记录
   */
  async CreateDnsRecord(
    req: CreateDnsRecordRequest,
    cb?: (error: string, rep: CreateDnsRecordResponse) => void
  ): Promise<CreateDnsRecordResponse> {
    return this.request("CreateDnsRecord", req, cb)
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
   * 本接口（DescribeBotClientIpList）用于查询Bot攻击客户端Ip信息列表。
   */
  async DescribeBotClientIpList(
    req: DescribeBotClientIpListRequest,
    cb?: (error: string, rep: DescribeBotClientIpListResponse) => void
  ): Promise<DescribeBotClientIpListResponse> {
    return this.request("DescribeBotClientIpList", req, cb)
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
   * 获取托管规则组
   */
  async DescribeSecurityGroupManagedRules(
    req: DescribeSecurityGroupManagedRulesRequest,
    cb?: (error: string, rep: DescribeSecurityGroupManagedRulesResponse) => void
  ): Promise<DescribeSecurityGroupManagedRulesResponse> {
    return this.request("DescribeSecurityGroupManagedRules", req, cb)
  }

  /**
   * 本接口（DescribeWebProtectionAttackEvents）用于查询CC相关攻击事件列表。
   */
  async DescribeWebProtectionAttackEvents(
    req: DescribeWebProtectionAttackEventsRequest,
    cb?: (error: string, rep: DescribeWebProtectionAttackEventsResponse) => void
  ): Promise<DescribeWebProtectionAttackEventsResponse> {
    return this.request("DescribeWebProtectionAttackEvents", req, cb)
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
   * 修改站点信息。
   */
  async ModifyZone(
    req: ModifyZoneRequest,
    cb?: (error: string, rep: ModifyZoneResponse) => void
  ): Promise<ModifyZoneResponse> {
    return this.request("ModifyZone", req, cb)
  }

  /**
   * 创建负载均衡
   */
  async CreateLoadBalancing(
    req: CreateLoadBalancingRequest,
    cb?: (error: string, rep: CreateLoadBalancingResponse) => void
  ): Promise<CreateLoadBalancingResponse> {
    return this.request("CreateLoadBalancing", req, cb)
  }

  /**
   * 域名DDoS高可用开关
   */
  async ModifyDDoSPolicyHost(
    req: ModifyDDoSPolicyHostRequest,
    cb?: (error: string, rep: ModifyDDoSPolicyHostResponse) => void
  ): Promise<ModifyDDoSPolicyHostResponse> {
    return this.request("ModifyDDoSPolicyHost", req, cb)
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
   * 修改源站组
   */
  async ModifyOriginGroup(
    req: ModifyOriginGroupRequest,
    cb?: (error: string, rep: ModifyOriginGroupResponse) => void
  ): Promise<ModifyOriginGroupResponse> {
    return this.request("ModifyOriginGroup", req, cb)
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
   * 本接口（ModifyLogTopicTask）用于修改日志推送任务信息。
   */
  async ModifyLogTopicTask(
    req: ModifyLogTopicTaskRequest,
    cb?: (error: string, rep: ModifyLogTopicTaskResponse) => void
  ): Promise<ModifyLogTopicTaskResponse> {
    return this.request("ModifyLogTopicTask", req, cb)
  }

  /**
   * 查询Bot用户画像规则
   */
  async DescribeSecurityPortraitRules(
    req: DescribeSecurityPortraitRulesRequest,
    cb?: (error: string, rep: DescribeSecurityPortraitRulesResponse) => void
  ): Promise<DescribeSecurityPortraitRulesResponse> {
    return this.request("DescribeSecurityPortraitRules", req, cb)
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
   * 修改负载均衡状态
   */
  async ModifyLoadBalancingStatus(
    req: ModifyLoadBalancingStatusRequest,
    cb?: (error: string, rep: ModifyLoadBalancingStatusResponse) => void
  ): Promise<ModifyLoadBalancingStatusResponse> {
    return this.request("ModifyLoadBalancingStatus", req, cb)
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
   * 本接口（DescribeDDoSAttackSourceEvent）用于查询DDoS攻击源信息列表。
   */
  async DescribeDDoSAttackSourceEvent(
    req: DescribeDDoSAttackSourceEventRequest,
    cb?: (error: string, rep: DescribeDDoSAttackSourceEventResponse) => void
  ): Promise<DescribeDDoSAttackSourceEventResponse> {
    return this.request("DescribeDDoSAttackSourceEvent", req, cb)
  }

  /**
   * 本接口（CreateClsLog）用于创建CLS日志集。
   */
  async CreateLogSet(
    req: CreateLogSetRequest,
    cb?: (error: string, rep: CreateLogSetResponse) => void
  ): Promise<CreateLogSetResponse> {
    return this.request("CreateLogSet", req, cb)
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
   * 本接口（ModifyAlarmConfig）用于修改用户告警配置。
   */
  async ModifyAlarmConfig(
    req: ModifyAlarmConfigRequest,
    cb?: (error: string, rep: ModifyAlarmConfigResponse) => void
  ): Promise<ModifyAlarmConfigResponse> {
    return this.request("ModifyAlarmConfig", req, cb)
  }

  /**
   * 本接口（DeleteLogTopicTask）用于删除日志推送任务。
   */
  async DeleteLogTopicTask(
    req: DeleteLogTopicTaskRequest,
    cb?: (error: string, rep: DeleteLogTopicTaskResponse) => void
  ): Promise<DeleteLogTopicTaskResponse> {
    return this.request("DeleteLogTopicTask", req, cb)
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
   * 查询所有地域信息
   */
  async DescribeSecurityPolicyRegions(
    req: DescribeSecurityPolicyRegionsRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyRegionsResponse) => void
  ): Promise<DescribeSecurityPolicyRegionsResponse> {
    return this.request("DescribeSecurityPolicyRegions", req, cb)
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
   * 本接口（DescribeDDoSMajorAttackEvent）用于查询DDoS主攻击事件列表。
   */
  async DescribeDDoSMajorAttackEvent(
    req: DescribeDDoSMajorAttackEventRequest,
    cb?: (error: string, rep: DescribeDDoSMajorAttackEventResponse) => void
  ): Promise<DescribeDDoSMajorAttackEventResponse> {
    return this.request("DescribeDDoSMajorAttackEvent", req, cb)
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
   * 查询全部安全实例
   */
  async DescribeSecurityPolicyList(
    req: DescribeSecurityPolicyListRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyListResponse) => void
  ): Promise<DescribeSecurityPolicyListResponse> {
    return this.request("DescribeSecurityPolicyList", req, cb)
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
   * 创建自定义拦截页面。
   */
  async CreateSecurityDropPage(
    req: CreateSecurityDropPageRequest,
    cb?: (error: string, rep: CreateSecurityDropPageResponse) => void
  ): Promise<CreateSecurityDropPageResponse> {
    return this.request("CreateSecurityDropPage", req, cb)
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
   * 本接口（DownloadL4Logs）用于下载四层离线日志。
   */
  async DownloadL4Logs(
    req: DownloadL4LogsRequest,
    cb?: (error: string, rep: DownloadL4LogsResponse) => void
  ): Promise<DownloadL4LogsResponse> {
    return this.request("DownloadL4Logs", req, cb)
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
   * 本接口（CreateLogTopicTask）用于创建日志推送任务。
   */
  async CreateLogTopicTask(
    req: CreateLogTopicTaskRequest,
    cb?: (error: string, rep: CreateLogTopicTaskResponse) => void
  ): Promise<CreateLogTopicTaskResponse> {
    return this.request("CreateLogTopicTask", req, cb)
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
   * 获取负载均衡列表
   */
  async DescribeLoadBalancing(
    req: DescribeLoadBalancingRequest,
    cb?: (error: string, rep: DescribeLoadBalancingResponse) => void
  ): Promise<DescribeLoadBalancingResponse> {
    return this.request("DescribeLoadBalancing", req, cb)
  }

  /**
   * 删除负载均衡
   */
  async DeleteLoadBalancing(
    req: DeleteLoadBalancingRequest,
    cb?: (error: string, rep: DeleteLoadBalancingResponse) => void
  ): Promise<DeleteLoadBalancingResponse> {
    return this.request("DeleteLoadBalancing", req, cb)
  }

  /**
   * 本接口（DescribeBotData）查询Bot攻击时序数据。
   */
  async DescribeBotData(
    req: DescribeBotDataRequest,
    cb?: (error: string, rep: DescribeBotDataResponse) => void
  ): Promise<DescribeBotDataResponse> {
    return this.request("DescribeBotData", req, cb)
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
   * 查询安全规则详情
   */
  async DescribeSecurityRuleId(
    req: DescribeSecurityRuleIdRequest,
    cb?: (error: string, rep: DescribeSecurityRuleIdResponse) => void
  ): Promise<DescribeSecurityRuleIdResponse> {
    return this.request("DescribeSecurityRuleId", req, cb)
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
   * 批量删除 DNS 记录
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
   * 本接口（DescribeLogTopicTaskDetail）用于获取日志推送任务详细信息。
   */
  async DescribeLogTopicTaskDetail(
    req: DescribeLogTopicTaskDetailRequest,
    cb?: (error: string, rep: DescribeLogTopicTaskDetailResponse) => void
  ): Promise<DescribeLogTopicTaskDetailResponse> {
    return this.request("DescribeLogTopicTaskDetail", req, cb)
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
   * 查询Bot托管规则
   */
  async DescribeBotManagedRules(
    req: DescribeBotManagedRulesRequest,
    cb?: (error: string, rep: DescribeBotManagedRulesResponse) => void
  ): Promise<DescribeBotManagedRulesResponse> {
    return this.request("DescribeBotManagedRules", req, cb)
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
   * 本接口（DescribeDDoSAttackEventDetail）用于查询DDoS攻击事件详情。
   */
  async DescribeDDoSAttackEventDetail(
    req: DescribeDDoSAttackEventDetailRequest,
    cb?: (error: string, rep: DescribeDDoSAttackEventDetailResponse) => void
  ): Promise<DescribeDDoSAttackEventDetailResponse> {
    return this.request("DescribeDDoSAttackEventDetail", req, cb)
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
   * 查询所有DDoS防护分区
   */
  async DescribeZoneDDoSPolicy(
    req: DescribeZoneDDoSPolicyRequest,
    cb?: (error: string, rep: DescribeZoneDDoSPolicyResponse) => void
  ): Promise<DescribeZoneDDoSPolicyResponse> {
    return this.request("DescribeZoneDDoSPolicy", req, cb)
  }

  /**
   * 修改负载均衡
   */
  async ModifyLoadBalancing(
    req: ModifyLoadBalancingRequest,
    cb?: (error: string, rep: ModifyLoadBalancingResponse) => void
  ): Promise<ModifyLoadBalancingResponse> {
    return this.request("ModifyLoadBalancing", req, cb)
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
   * 创建自定义规则的自定义页
   */
  async CreateCustomErrorPage(
    req: CreateCustomErrorPageRequest,
    cb?: (error: string, rep: CreateCustomErrorPageResponse) => void
  ): Promise<CreateCustomErrorPageResponse> {
    return this.request("CreateCustomErrorPage", req, cb)
  }

  /**
   * 修改DDoS防护分区配置
   */
  async ModifyDDoSPolicy(
    req: ModifyDDoSPolicyRequest,
    cb?: (error: string, rep: ModifyDDoSPolicyResponse) => void
  ): Promise<ModifyDDoSPolicyResponse> {
    return this.request("ModifyDDoSPolicy", req, cb)
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
   * 查询DDoS防护配置详情
   */
  async DescribeDDoSPolicy(
    req: DescribeDDoSPolicyRequest,
    cb?: (error: string, rep: DescribeDDoSPolicyResponse) => void
  ): Promise<DescribeDDoSPolicyResponse> {
    return this.request("DescribeDDoSPolicy", req, cb)
  }

  /**
   * 本接口（DescribeSingleL7AnalysisData）用于查询七层数据分析类单值流量数据列表。
   */
  async DescribeSingleL7AnalysisData(
    req: DescribeSingleL7AnalysisDataRequest,
    cb?: (error: string, rep: DescribeSingleL7AnalysisDataResponse) => void
  ): Promise<DescribeSingleL7AnalysisDataResponse> {
    return this.request("DescribeSingleL7AnalysisData", req, cb)
  }

  /**
   * 本接口（DescribeBotHitRuleDetail）用于查询Bot攻击命中规则详情信息。
   */
  async DescribeBotHitRuleDetail(
    req: DescribeBotHitRuleDetailRequest,
    cb?: (error: string, rep: DescribeBotHitRuleDetailResponse) => void
  ): Promise<DescribeBotHitRuleDetailResponse> {
    return this.request("DescribeBotHitRuleDetail", req, cb)
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
   * 查询安全防护配置详情。请求参数中ZoneId+Entity或TemplateId至少填一项。
   */
  async DescribeSecurityPolicy(
    req: DescribeSecurityPolicyRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyResponse) => void
  ): Promise<DescribeSecurityPolicyResponse> {
    return this.request("DescribeSecurityPolicy", req, cb)
  }

  /**
   * 创建IP黑白名单列表
   */
  async CreateIpTableList(
    req: CreateIpTableListRequest,
    cb?: (error: string, rep: CreateIpTableListResponse) => void
  ): Promise<CreateIpTableListResponse> {
    return this.request("CreateIpTableList", req, cb)
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
   * 本接口（SwitchLogTopicTask）用于开启/关闭推送任务。
   */
  async SwitchLogTopicTask(
    req: SwitchLogTopicTaskRequest,
    cb?: (error: string, rep: SwitchLogTopicTaskResponse) => void
  ): Promise<SwitchLogTopicTaskResponse> {
    return this.request("SwitchLogTopicTask", req, cb)
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
   * 用于查询 DNSSEC 相关信息
   */
  async DescribeDnssec(
    req: DescribeDnssecRequest,
    cb?: (error: string, rep: DescribeDnssecResponse) => void
  ): Promise<DescribeDnssecResponse> {
    return this.request("DescribeDnssec", req, cb)
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
   * 本接口（DescribeBotTopData）查询Bot攻击TopN数据。
   */
  async DescribeBotTopData(
    req: DescribeBotTopDataRequest,
    cb?: (error: string, rep: DescribeBotTopDataResponse) => void
  ): Promise<DescribeBotTopDataResponse> {
    return this.request("DescribeBotTopData", req, cb)
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
   * 开启，关闭 CNAME 加速。
   */
  async ModifyZoneCnameSpeedUp(
    req: ModifyZoneCnameSpeedUpRequest,
    cb?: (error: string, rep: ModifyZoneCnameSpeedUpResponse) => void
  ): Promise<ModifyZoneCnameSpeedUpResponse> {
    return this.request("ModifyZoneCnameSpeedUp", req, cb)
  }

  /**
   * 修改 DNS 记录
   */
  async ModifyDnsRecord(
    req: ModifyDnsRecordRequest,
    cb?: (error: string, rep: ModifyDnsRecordResponse) => void
  ): Promise<ModifyDnsRecordResponse> {
    return this.request("ModifyDnsRecord", req, cb)
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
   * 此接口（ModifyAlarmDefaultThreshold）用于修改告警默认阈值。
   */
  async ModifyAlarmDefaultThreshold(
    req: ModifyAlarmDefaultThresholdRequest,
    cb?: (error: string, rep: ModifyAlarmDefaultThresholdResponse) => void
  ): Promise<ModifyAlarmDefaultThresholdResponse> {
    return this.request("ModifyAlarmDefaultThreshold", req, cb)
  }

  /**
   * 本接口（DescribeDDoSBlockList）用于查询DDoS封禁解封列表。
   */
  async DescribeDDoSBlockList(
    req: DescribeDDoSBlockListRequest,
    cb?: (error: string, rep: DescribeDDoSBlockListResponse) => void
  ): Promise<DescribeDDoSBlockListResponse> {
    return this.request("DescribeDDoSBlockList", req, cb)
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
   * 查询速率限制智能客户端过滤学习出来的规则
   */
  async DescribeRateLimitIntelligenceRule(
    req: DescribeRateLimitIntelligenceRuleRequest,
    cb?: (error: string, rep: DescribeRateLimitIntelligenceRuleResponse) => void
  ): Promise<DescribeRateLimitIntelligenceRuleResponse> {
    return this.request("DescribeRateLimitIntelligenceRule", req, cb)
  }

  /**
   * 查询 DNS 记录列表，支持搜索、分页、排序、过滤。
   */
  async DescribeDnsRecords(
    req: DescribeDnsRecordsRequest,
    cb?: (error: string, rep: DescribeDnsRecordsResponse) => void
  ): Promise<DescribeDnsRecordsResponse> {
    return this.request("DescribeDnsRecords", req, cb)
  }

  /**
   * 本接口（DescribeBotLog）用于查询Bot攻击日志。
   */
  async DescribeBotLog(
    req: DescribeBotLogRequest,
    cb?: (error: string, rep: DescribeBotLogResponse) => void
  ): Promise<DescribeBotLogResponse> {
    return this.request("DescribeBotLog", req, cb)
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

  /**
   * 设置站点DNSSEC状态
   */
  async ModifyDnssec(
    req: ModifyDnssecRequest,
    cb?: (error: string, rep: ModifyDnssecResponse) => void
  ): Promise<ModifyDnssecResponse> {
    return this.request("ModifyDnssec", req, cb)
  }
}

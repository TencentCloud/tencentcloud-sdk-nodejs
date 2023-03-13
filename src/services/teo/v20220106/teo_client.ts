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
  DropPageDetail,
  Compression,
  WebLogData,
  DeleteRulesRequest,
  ACLUserRule,
  ModifyDefaultCertificateRequest,
  DescribeWebManagedRulesTopDataResponse,
  DescribeOriginGroupResponse,
  DescribeWebManagedRulesAttackEventsResponse,
  DescribeTopL7CacheDataRequest,
  DeleteApplicationProxyResponse,
  Https,
  SecurityEntity,
  OriginFilter,
  BotLogData,
  DescribeZonesRequest,
  RateLimitTemplate,
  ShieldArea,
  ServerCertInfo,
  ModifyRuleRequest,
  DdosRule,
  ModifyLoadBalancingStatusResponse,
  DescribePrefetchTasksResponse,
  DescribeDDosAttackEventResponse,
  DeleteApplicationProxyRequest,
  CreateCustomErrorPageResponse,
  CreateRuleResponse,
  DescribeZoneSettingRequest,
  ExceptUserRuleCondition,
  ModifyZoneSettingRequest,
  ModifyDnsRecordRequest,
  DDoSAcl,
  ModifySecurityPolicyRequest,
  CreateApplicationProxyRulesRequest,
  LoadBalancing,
  ModifyDnssecRequest,
  ModifyApplicationProxyResponse,
  DdosPacketFilter,
  CreateApplicationProxyResponse,
  ImportDnsRecordsRequest,
  CacheConfigNoCache,
  ModifyZoneStatusResponse,
  DescribeRulesResponse,
  DescribeZoneDetailsResponse,
  BotLog,
  ExceptUserRuleScope,
  Origin,
  DescribeAvailablePlansRequest,
  DescribeSecurityPolicyManagedRulesRequest,
  DescribeSecurityPortraitRulesRequest,
  CertSort,
  ModifySecurityPolicyResponse,
  ModifyDDoSPolicyHostRequest,
  DescribeHostsSettingResponse,
  DescribeSecurityPolicyRegionsResponse,
  ModifyZoneResponse,
  DescribeDDosAttackSourceEventRequest,
  ModifyZoneRequest,
  DeleteZoneResponse,
  DDosAttackEventData,
  Hsts,
  CreatePurgeTaskResponse,
  RuleCodeAction,
  DeleteApplicationProxyRuleResponse,
  DDosAttackSourceEvent,
  TimingDataRecord,
  Zone,
  ModifyRulePriorityResponse,
  DdosAcls,
  DeleteOriginGroupRequest,
  RulesSettingAction,
  Tag,
  ModifyHostsCertificateResponse,
  RateLimitConfig,
  CreateDnsRecordRequest,
  IpTableRule,
  L7OfflineLog,
  ModifyHostsCertificateRequest,
  ApplicationProxyRule,
  SmartRouting,
  DdosSpeedLimit,
  OriginCheckOriginStatus,
  RuleNormalActionParams,
  DescribeSecurityPolicyManagedRulesIdRequest,
  DescribeRulesSettingResponse,
  CacheConfigCache,
  RuleExtraParameter,
  RuleAction,
  CertFilter,
  DescribeIdentificationRequest,
  ModifyLoadBalancingStatusRequest,
  DescribeDDosAttackTopDataResponse,
  DescribeCnameStatusResponse,
  DescribeLoadBalancingRequest,
  CCInterceptEvent,
  DDoSStatusInfo,
  AclConfig,
  ModifyZoneSettingResponse,
  DescribeZonesResponse,
  ScanDnsRecordsResponse,
  RateLimitTemplateDetail,
  WafConfig,
  CreateDnsRecordResponse,
  CCLog,
  RuleItem,
  RuleFilter,
  DDoSConfig,
  DescribeWebManagedRulesDataResponse,
  DescribeWebManagedRulesLogResponse,
  OriginRecord,
  WebLogs,
  TopDetailData,
  CreatePrefetchTaskRequest,
  DeleteApplicationProxyRuleRequest,
  CacheConfigFollowOrigin,
  ACLCondition,
  DescribeTopL7AnalysisDataRequest,
  TopNEntry,
  DescribeApplicationProxyResponse,
  CreateLoadBalancingResponse,
  DescribeTopL7CacheDataResponse,
  DescribeOverviewL7DataRequest,
  SwitchConfig,
  IdentifyZoneResponse,
  WebSocket,
  DataItem,
  ModifyLoadBalancingRequest,
  CreateLoadBalancingRequest,
  DescribeDnssecRequest,
  DescribeWebProtectionLogResponse,
  CCInterceptEventData,
  DescribeLoadBalancingDetailResponse,
  SecurityConfig,
  DDosMajorAttackEventData,
  DescribeBotManagedRulesResponse,
  DnsRecord,
  RuleCodeActionParams,
  Ipv6Access,
  DDoSAntiPly,
  DescribeWebManagedRulesDataRequest,
  DDosAttackSourceEventData,
  ModifyDDoSPolicyResponse,
  DescribeDnsRecordsRequest,
  CreatePrefetchTaskResponse,
  WafRule,
  DescribeDefaultCertificatesRequest,
  GeoIp,
  RuleChoicePropertiesItem,
  DescribeSecurityPolicyRequest,
  ModifyApplicationProxyRuleResponse,
  RuleRewriteActionParams,
  DDosAttackEvent,
  FailReason,
  TopNEntryValue,
  CreateZoneRequest,
  PlanInfo,
  VanityNameServersIps,
  DescribeTimingL7CacheDataRequest,
  DescribeSecurityPolicyListResponse,
  DescribePurgeTasksResponse,
  ModifyRuleResponse,
  CheckCertificateResponse,
  DDoSApplication,
  DownloadL7LogsRequest,
  DeleteLoadBalancingResponse,
  DescribeWebProtectionDataRequest,
  CheckCertificateRequest,
  DescribeSecurityPortraitRulesResponse,
  CreateApplicationProxyRuleRequest,
  BotManagedRuleDetail,
  ForceRedirect,
  DescribeDnsDataResponse,
  ModifyApplicationProxyStatusResponse,
  IdentifyZoneRequest,
  DetailHost,
  RateLimitUserRule,
  DescribeDnsRecordsResponse,
  DescribeDefaultCertificatesResponse,
  CachePrefresh,
  DescribeTimingL7AnalysisDataResponse,
  PortraitManagedRuleDetail,
  BotPortraitRule,
  DescribeWebProtectionAttackEventsRequest,
  RulesProperties,
  DescribeOverviewL7DataResponse,
  DescribeHostsCertificateRequest,
  DescribeSecurityPolicyManagedRulesResponse,
  OriginGroup,
  DescribeApplicationProxyRequest,
  CreateRuleRequest,
  ModifyDDoSPolicyHostResponse,
  ModifyApplicationProxyRuleStatusRequest,
  ModifyLoadBalancingResponse,
  WebAttackEvent,
  DescribeDDosAttackTopDataRequest,
  ExceptUserRule,
  CreateApplicationProxyRuleResponse,
  DescribeDDosAttackDataRequest,
  ModifyDnsRecordResponse,
  OriginRecordPrivateParameter,
  CreatePlanForZoneRequest,
  TimingDataItem,
  CreateApplicationProxyRequest,
  DescribeTopL7AnalysisDataResponse,
  IntelligenceRuleItem,
  IntelligenceRule,
  PostMaxSize,
  ModifyRulePriorityRequest,
  ManagedRule,
  Filter,
  DescribeWebManagedRulesAttackEventsRequest,
  DescribeCnameStatusRequest,
  CreateCustomErrorPageRequest,
  DescribeDnssecResponse,
  CreateZoneResponse,
  DnsDataFilter,
  DeleteLoadBalancingRequest,
  DescribeTimingL7AnalysisDataRequest,
  DescribeSecurityPolicyManagedRulesIdResponse,
  WebEventData,
  ApplicationProxy,
  ExceptConfig,
  DescribeDDoSPolicyResponse,
  CacheKey,
  ModifyOriginGroupRequest,
  ModifyApplicationProxyRuleStatusResponse,
  DescribeSecurityPolicyListRequest,
  DescribeTimingL7CacheDataResponse,
  DescribeApplicationProxyDetailRequest,
  RateLimitIntelligence,
  IpTableConfig,
  ModifyApplicationProxyStatusRequest,
  DeleteOriginGroupResponse,
  Header,
  RuleAndConditions,
  DropPageConfig,
  DescribeDDosAttackSourceEventResponse,
  DescribeZoneDetailsRequest,
  DescribeDDoSPolicyRequest,
  SecEntry,
  ModifyZoneStatusRequest,
  DescribeDDosMajorAttackEventRequest,
  Quic,
  CreateOriginGroupResponse,
  DescribeSecurityPolicyResponse,
  QueryString,
  DescribeSecurityPolicyRegionsRequest,
  SecEntryValue,
  ReclaimZoneRequest,
  RuleCondition,
  DeleteZoneRequest,
  BotManagedRule,
  ModifyDefaultCertificateResponse,
  DescribeDDosAttackEventRequest,
  ClientIp,
  DnsRecordFilter,
  DescribeHostsCertificateResponse,
  DescribeZoneSettingResponse,
  AiRule,
  ZoneFilter,
  MaxAge,
  DescribeRulesRequest,
  DeleteRulesResponse,
  QueryCondition,
  DescribeDnsDataRequest,
  CacheConfig,
  DescribeDDosAttackEventDetailResponse,
  ModifyApplicationProxyRuleRequest,
  ModifyDDoSPolicyRequest,
  ModifyZoneCnameSpeedUpResponse,
  DescribeWebProtectionLogRequest,
  CCLogData,
  DescribePrefetchTasksRequest,
  DescribeRulesSettingRequest,
  Task,
  DeleteDnsRecordsRequest,
  DdosAllowBlock,
  DDoSGeoIp,
  RuleSettingDetail,
  TopDataRecord,
  DescribeZoneDDoSPolicyResponse,
  CnameStatus,
  DescribeDDosMajorAttackEventResponse,
  DDoSFeaturesFilter,
  ModifyOriginGroupResponse,
  DescribeWebProtectionAttackEventsResponse,
  CreatePurgeTaskRequest,
  Resource,
  DeleteDnsRecordsResponse,
  DescribeBotLogRequest,
  DownloadL7LogsResponse,
  DDosAttackEventDetailData,
  CreateOriginGroupRequest,
  DescribeTimingL4DataRequest,
  DescribeHostsSettingRequest,
  DescribeZoneDDoSPolicyRequest,
  DescribeDDosAttackDataResponse,
  DescribeWebManagedRulesLogRequest,
  SecRuleRelatedInfo,
  ReclaimZoneResponse,
  CreateApplicationProxyRulesResponse,
  DescribeWebManagedRulesTopDataRequest,
  DescribeAvailablePlansResponse,
  DescribePurgeTasksRequest,
  DescribeIdentificationResponse,
  DDosMajorAttackEvent,
  ModifyZoneCnameSpeedUpRequest,
  DescribeApplicationProxyDetailResponse,
  DDoSUserAllowBlockIP,
  RuleRewriteAction,
  RuleNormalAction,
  DescribeBotLogResponse,
  DescribeLoadBalancingResponse,
  DescribeWebProtectionDataResponse,
  ModifyApplicationProxyRequest,
  ModifyDnssecResponse,
  ScanDnsRecordsRequest,
  VanityNameServers,
  ImportDnsRecordsResponse,
  DescribeLoadBalancingDetailRequest,
  DefaultServerCertInfo,
  DnssecInfo,
  DescribeOriginGroupRequest,
  DescribeOriginGroupDetailResponse,
  UpstreamHttp2,
  OfflineCache,
  DescribeOriginGroupDetailRequest,
  DescribeDDosAttackEventDetailRequest,
  HostCertSetting,
  DescribeTimingL4DataResponse,
  Sv,
  BotConfig,
  TimingTypeValue,
  DescribeBotManagedRulesRequest,
} from "./teo_models"

/**
 * teo client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("teo.tencentcloudapi.com", "2022-01-06", clientConfig)
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
   * 为未购买套餐的站点购买套餐
   */
  async CreatePlanForZone(
    req: CreatePlanForZoneRequest,
    cb?: (error: string, rep: CreatePlanForZoneResponse) => void
  ): Promise<CreatePlanForZoneResponse> {
    return this.request("CreatePlanForZone", req, cb)
  }

  /**
   * 查询web防护攻击事件
   */
  async DescribeWebProtectionAttackEvents(
    req: DescribeWebProtectionAttackEventsRequest,
    cb?: (error: string, rep: DescribeWebProtectionAttackEventsResponse) => void
  ): Promise<DescribeWebProtectionAttackEventsResponse> {
    return this.request("DescribeWebProtectionAttackEvents", req, cb)
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
   * 用于验证站点所有权
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
   * 源站组修改
   */
  async ModifyOriginGroup(
    req: ModifyOriginGroupRequest,
    cb?: (error: string, rep: ModifyOriginGroupResponse) => void
  ): Promise<ModifyOriginGroupResponse> {
    return this.request("ModifyOriginGroup", req, cb)
  }

  /**
   * 查询DDos攻击Top数据
   */
  async DescribeDDosAttackTopData(
    req: DescribeDDosAttackTopDataRequest,
    cb?: (error: string, rep: DescribeDDosAttackTopDataResponse) => void
  ): Promise<DescribeDDosAttackTopDataResponse> {
    return this.request("DescribeDDosAttackTopData", req, cb)
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
   * 查询waf攻击日志
   */
  async DescribeWebManagedRulesLog(
    req: DescribeWebManagedRulesLogRequest,
    cb?: (error: string, rep: DescribeWebManagedRulesLogResponse) => void
  ): Promise<DescribeWebManagedRulesLogResponse> {
    return this.request("DescribeWebManagedRulesLog", req, cb)
  }

  /**
   * 查询七层离线日志
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
   * 查询CC防护时序数据
   */
  async DescribeWebProtectionData(
    req: DescribeWebProtectionDataRequest,
    cb?: (error: string, rep: DescribeWebProtectionDataResponse) => void
  ): Promise<DescribeWebProtectionDataResponse> {
    return this.request("DescribeWebProtectionData", req, cb)
  }

  /**
   * 查询Web托管攻击事件
   */
  async DescribeWebManagedRulesAttackEvents(
    req: DescribeWebManagedRulesAttackEventsRequest,
    cb?: (error: string, rep: DescribeWebManagedRulesAttackEventsResponse) => void
  ): Promise<DescribeWebManagedRulesAttackEventsResponse> {
    return this.request("DescribeWebManagedRulesAttackEvents", req, cb)
  }

  /**
   * 用该站点信息
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
     * 接口已经不兼容升级，故作下线处理

本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。
     */
  async DescribeOverviewL7Data(
    req: DescribeOverviewL7DataRequest,
    cb?: (error: string, rep: DescribeOverviewL7DataResponse) => void
  ): Promise<DescribeOverviewL7DataResponse> {
    return this.request("DescribeOverviewL7Data", req, cb)
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
   * 分页查询门神规则
   */
  async DescribeSecurityPolicyManagedRules(
    req: DescribeSecurityPolicyManagedRulesRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyManagedRulesResponse) => void
  ): Promise<DescribeSecurityPolicyManagedRulesResponse> {
    return this.request("DescribeSecurityPolicyManagedRules", req, cb)
  }

  /**
   * 查询域名 CNAME 状态
   */
  async DescribeCnameStatus(
    req: DescribeCnameStatusRequest,
    cb?: (error: string, rep: DescribeCnameStatusResponse) => void
  ): Promise<DescribeCnameStatusResponse> {
    return this.request("DescribeCnameStatus", req, cb)
  }

  /**
   * 查询所有地域信息
   */
  async DescribeSecurityPolicyRegions(
    req?: DescribeSecurityPolicyRegionsRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyRegionsResponse) => void
  ): Promise<DescribeSecurityPolicyRegionsResponse> {
    return this.request("DescribeSecurityPolicyRegions", req, cb)
  }

  /**
   * 根据站点 ID 查询站点的详细信息
   */
  async DescribeZoneDetails(
    req: DescribeZoneDetailsRequest,
    cb?: (error: string, rep: DescribeZoneDetailsResponse) => void
  ): Promise<DescribeZoneDetailsResponse> {
    return this.request("DescribeZoneDetails", req, cb)
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
   * 源站组删除
   */
  async DeleteOriginGroup(
    req: DeleteOriginGroupRequest,
    cb?: (error: string, rep: DeleteOriginGroupResponse) => void
  ): Promise<DeleteOriginGroupResponse> {
    return this.request("DeleteOriginGroup", req, cb)
  }

  /**
     * 此版本的接口已经废弃

查询waf攻击top数据
     */
  async DescribeWebManagedRulesTopData(
    req: DescribeWebManagedRulesTopDataRequest,
    cb?: (error: string, rep: DescribeWebManagedRulesTopDataResponse) => void
  ): Promise<DescribeWebManagedRulesTopDataResponse> {
    return this.request("DescribeWebManagedRulesTopData", req, cb)
  }

  /**
   * 批量创建应用代理规则
   */
  async CreateApplicationProxyRules(
    req: CreateApplicationProxyRulesRequest,
    cb?: (error: string, rep: CreateApplicationProxyRulesResponse) => void
  ): Promise<CreateApplicationProxyRulesResponse> {
    return this.request("CreateApplicationProxyRules", req, cb)
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
   * 查询DDos攻击事件详情
   */
  async DescribeDDosAttackEventDetail(
    req: DescribeDDosAttackEventDetailRequest,
    cb?: (error: string, rep: DescribeDDosAttackEventDetailResponse) => void
  ): Promise<DescribeDDosAttackEventDetailResponse> {
    return this.request("DescribeDDosAttackEventDetail", req, cb)
  }

  /**
   * 七层查询缓存分析时序类流量数据
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
   * 七层查询缓存分析top类流量数据
   */
  async DescribeTopL7CacheData(
    req: DescribeTopL7CacheDataRequest,
    cb?: (error: string, rep: DescribeTopL7CacheDataResponse) => void
  ): Promise<DescribeTopL7CacheDataResponse> {
    return this.request("DescribeTopL7CacheData", req, cb)
  }

  /**
     * 旧版本的接口已经不兼容，故作下线处理

四层时序流量数据查询
     */
  async DescribeTimingL4Data(
    req: DescribeTimingL4DataRequest,
    cb?: (error: string, rep: DescribeTimingL4DataResponse) => void
  ): Promise<DescribeTimingL4DataResponse> {
    return this.request("DescribeTimingL4Data", req, cb)
  }

  /**
   * 扫描站点历史解析记录
   */
  async ScanDnsRecords(
    req: ScanDnsRecordsRequest,
    cb?: (error: string, rep: ScanDnsRecordsResponse) => void
  ): Promise<ScanDnsRecordsResponse> {
    return this.request("ScanDnsRecords", req, cb)
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
   * 查询top类流量数据
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
   * 修改Web&Bot安全配置
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
   * 分页查询Bot托管规则
   */
  async DescribeBotManagedRules(
    req: DescribeBotManagedRulesRequest,
    cb?: (error: string, rep: DescribeBotManagedRulesResponse) => void
  ): Promise<DescribeBotManagedRulesResponse> {
    return this.request("DescribeBotManagedRules", req, cb)
  }

  /**
   * 查询DDos攻击源信息
   */
  async DescribeDDosAttackSourceEvent(
    req: DescribeDDosAttackSourceEventRequest,
    cb?: (error: string, rep: DescribeDDosAttackSourceEventResponse) => void
  ): Promise<DescribeDDosAttackSourceEventResponse> {
    return this.request("DescribeDDosAttackSourceEvent", req, cb)
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
   * 查询七层数据分析类时序流量数据
   */
  async DescribeTimingL7AnalysisData(
    req: DescribeTimingL7AnalysisDataRequest,
    cb?: (error: string, rep: DescribeTimingL7AnalysisDataResponse) => void
  ): Promise<DescribeTimingL7AnalysisDataResponse> {
    return this.request("DescribeTimingL7AnalysisData", req, cb)
  }

  /**
   * 查询验证结果
   */
  async DescribeIdentification(
    req: DescribeIdentificationRequest,
    cb?: (error: string, rep: DescribeIdentificationResponse) => void
  ): Promise<DescribeIdentificationResponse> {
    return this.request("DescribeIdentification", req, cb)
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
   * 用于用户接入新的站点
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
   * 查询域名证书列表，支持搜索、分页、排序、过滤。
   */
  async DescribeHostsCertificate(
    req: DescribeHostsCertificateRequest,
    cb?: (error: string, rep: DescribeHostsCertificateResponse) => void
  ): Promise<DescribeHostsCertificateResponse> {
    return this.request("DescribeHostsCertificate", req, cb)
  }

  /**
   * 查询DDos攻击时序数据
   */
  async DescribeDDosAttackData(
    req: DescribeDDosAttackDataRequest,
    cb?: (error: string, rep: DescribeDDosAttackDataResponse) => void
  ): Promise<DescribeDDosAttackDataResponse> {
    return this.request("DescribeDDosAttackData", req, cb)
  }

  /**
   * 获取源站组详细信息
   */
  async DescribeOriginGroupDetail(
    req: DescribeOriginGroupDetailRequest,
    cb?: (error: string, rep: DescribeOriginGroupDetailResponse) => void
  ): Promise<DescribeOriginGroupDetailResponse> {
    return this.request("DescribeOriginGroupDetail", req, cb)
  }

  /**
   * 获取应用代理详细信息
   */
  async DescribeApplicationProxyDetail(
    req: DescribeApplicationProxyDetailRequest,
    cb?: (error: string, rep: DescribeApplicationProxyDetailResponse) => void
  ): Promise<DescribeApplicationProxyDetailResponse> {
    return this.request("DescribeApplicationProxyDetail", req, cb)
  }

  /**
   * 查询CC防护日志
   */
  async DescribeWebProtectionLog(
    req: DescribeWebProtectionLogRequest,
    cb?: (error: string, rep: DescribeWebProtectionLogResponse) => void
  ): Promise<DescribeWebProtectionLogResponse> {
    return this.request("DescribeWebProtectionLog", req, cb)
  }

  /**
   * 用于开启，关闭站点
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
   * 修改默认证书状态
   */
  async ModifyDefaultCertificate(
    req: ModifyDefaultCertificateRequest,
    cb?: (error: string, rep: ModifyDefaultCertificateResponse) => void
  ): Promise<ModifyDefaultCertificateResponse> {
    return this.request("ModifyDefaultCertificate", req, cb)
  }

  /**
   * 获取负载均衡详细信息
   */
  async DescribeLoadBalancingDetail(
    req: DescribeLoadBalancingDetailRequest,
    cb?: (error: string, rep: DescribeLoadBalancingDetailResponse) => void
  ): Promise<DescribeLoadBalancingDetailResponse> {
    return this.request("DescribeLoadBalancingDetail", req, cb)
  }

  /**
   * 查询安全防护配置详情
   */
  async DescribeSecurityPolicy(
    req: DescribeSecurityPolicyRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyResponse) => void
  ): Promise<DescribeSecurityPolicyResponse> {
    return this.request("DescribeSecurityPolicy", req, cb)
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
   * 获取源站组信息列表
   */
  async DescribeOriginGroup(
    req: DescribeOriginGroupRequest,
    cb?: (error: string, rep: DescribeOriginGroupResponse) => void
  ): Promise<DescribeOriginGroupResponse> {
    return this.request("DescribeOriginGroup", req, cb)
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
   * 源站组创建
   */
  async CreateOriginGroup(
    req: CreateOriginGroupRequest,
    cb?: (error: string, rep: CreateOriginGroupResponse) => void
  ): Promise<CreateOriginGroupResponse> {
    return this.request("CreateOriginGroup", req, cb)
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
   * 开启，关闭 CNAME 加速
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
     * 此接口已经做不兼容变更，所以此版本的接口已经无法调用，故作下线处理

查询DDos主攻击事件
     */
  async DescribeDDosMajorAttackEvent(
    req: DescribeDDosMajorAttackEventRequest,
    cb?: (error: string, rep: DescribeDDosMajorAttackEventResponse) => void
  ): Promise<DescribeDDosMajorAttackEventResponse> {
    return this.request("DescribeDDosMajorAttackEvent", req, cb)
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
   * 用于查询站点的所有配置信息。
   */
  async DescribeZoneSetting(
    req: DescribeZoneSettingRequest,
    cb?: (error: string, rep: DescribeZoneSettingResponse) => void
  ): Promise<DescribeZoneSettingResponse> {
    return this.request("DescribeZoneSetting", req, cb)
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
   * 用户查询用户站点信息列表，支持分页
   */
  async DescribeZones(
    req: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点
   */
  async ReclaimZone(
    req: ReclaimZoneRequest,
    cb?: (error: string, rep: ReclaimZoneResponse) => void
  ): Promise<ReclaimZoneResponse> {
    return this.request("ReclaimZone", req, cb)
  }

  /**
   * 删除站点
   */
  async DeleteZone(
    req: DeleteZoneRequest,
    cb?: (error: string, rep: DeleteZoneResponse) => void
  ): Promise<DeleteZoneResponse> {
    return this.request("DeleteZone", req, cb)
  }

  /**
   * 查询DDos攻击事件
   */
  async DescribeDDosAttackEvent(
    req: DescribeDDosAttackEventRequest,
    cb?: (error: string, rep: DescribeDDosAttackEventResponse) => void
  ): Promise<DescribeDDosAttackEventResponse> {
    return this.request("DescribeDDosAttackEvent", req, cb)
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
   * 查询Bot攻击日志
   */
  async DescribeBotLog(
    req: DescribeBotLogRequest,
    cb?: (error: string, rep: DescribeBotLogResponse) => void
  ): Promise<DescribeBotLogResponse> {
    return this.request("DescribeBotLog", req, cb)
  }

  /**
   * 获取应用代理列表
   */
  async DescribeApplicationProxy(
    req: DescribeApplicationProxyRequest,
    cb?: (error: string, rep: DescribeApplicationProxyResponse) => void
  ): Promise<DescribeApplicationProxyResponse> {
    return this.request("DescribeApplicationProxy", req, cb)
  }

  /**
   * 查询waf攻击时序数据
   */
  async DescribeWebManagedRulesData(
    req: DescribeWebManagedRulesDataRequest,
    cb?: (error: string, rep: DescribeWebManagedRulesDataResponse) => void
  ): Promise<DescribeWebManagedRulesDataResponse> {
    return this.request("DescribeWebManagedRulesData", req, cb)
  }

  /**
   * 导入 DNS 记录
   */
  async ImportDnsRecords(
    req: ImportDnsRecordsRequest,
    cb?: (error: string, rep: ImportDnsRecordsResponse) => void
  ): Promise<ImportDnsRecordsResponse> {
    return this.request("ImportDnsRecords", req, cb)
  }

  /**
   * 规则id查询门神规则详情
   */
  async DescribeSecurityPolicyManagedRulesId(
    req: DescribeSecurityPolicyManagedRulesIdRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyManagedRulesIdResponse) => void
  ): Promise<DescribeSecurityPolicyManagedRulesIdResponse> {
    return this.request("DescribeSecurityPolicyManagedRulesId", req, cb)
  }

  /**
   * 修改 DNSSEC 状态
   */
  async ModifyDnssec(
    req: ModifyDnssecRequest,
    cb?: (error: string, rep: ModifyDnssecResponse) => void
  ): Promise<ModifyDnssecResponse> {
    return this.request("ModifyDnssec", req, cb)
  }
}

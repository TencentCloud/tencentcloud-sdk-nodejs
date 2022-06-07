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
  HostCertSetting,
  ACLUserRule,
  ModifyDefaultCertificateRequest,
  DescribeZoneDetailsResponse,
  DescribeOriginGroupResponse,
  DeleteApplicationProxyResponse,
  Https,
  OriginFilter,
  DescribeOriginGroupDetailRequest,
  ShieldArea,
  DdosRule,
  ModifyLoadBalancingStatusResponse,
  DescribePrefetchTasksResponse,
  DeleteApplicationProxyRequest,
  CreateCustomErrorPageResponse,
  ReclaimZoneResponse,
  DescribeZoneSettingRequest,
  ModifyZoneStatusRequest,
  ModifyDnsRecordRequest,
  DDoSAcl,
  ModifySecurityPolicyRequest,
  CreateApplicationProxyRulesRequest,
  LoadBalancing,
  ModifyDnssecRequest,
  ModifyZoneSettingRequest,
  DdosPacketFilter,
  CreateApplicationProxyResponse,
  ImportDnsRecordsRequest,
  CacheConfigNoCache,
  ModifyOriginGroupResponse,
  Task,
  Origin,
  ModifyZoneStatusResponse,
  DescribeSecurityPolicyManagedRulesRequest,
  CertSort,
  ModifySecurityPolicyResponse,
  ModifyDDoSPolicyHostRequest,
  DescribeHostsSettingResponse,
  DescribeSecurityPolicyRegionsResponse,
  ModifyZoneResponse,
  ModifyZoneRequest,
  DeleteZoneResponse,
  ModifyHostsCertificateRequest,
  Hsts,
  CreatePurgeTaskResponse,
  DeleteApplicationProxyRuleResponse,
  DdosAcls,
  DeleteOriginGroupRequest,
  ModifyHostsCertificateResponse,
  CreateDnsRecordRequest,
  L7OfflineLog,
  WafRule,
  ApplicationProxyRule,
  SmartRouting,
  DescribeDnsDataResponse,
  Zone,
  DescribeSecurityPolicyManagedRulesIdRequest,
  ModifyApplicationProxyStatusRequest,
  CacheConfigCache,
  CertFilter,
  DescribeIdentificationRequest,
  ModifyLoadBalancingStatusRequest,
  Quic,
  DescribeCnameStatusResponse,
  DeleteDnsRecordsResponse,
  DescribeLoadBalancingRequest,
  ModifyApplicationProxyRuleRequest,
  DDoSStatusInfo,
  CnameStatus,
  ModifyZoneSettingResponse,
  DescribeZonesResponse,
  ScanDnsRecordsResponse,
  WafConfig,
  CreateDnsRecordResponse,
  ServerCertInfo,
  DDoSConfig,
  DescribeZonesRequest,
  OriginRecord,
  CreatePrefetchTaskRequest,
  DeleteApplicationProxyRuleRequest,
  CacheConfigFollowOrigin,
  ACLCondition,
  DescribeApplicationProxyResponse,
  CreateLoadBalancingResponse,
  SwitchConfig,
  IdentifyZoneResponse,
  WebSocket,
  DataItem,
  ModifyLoadBalancingRequest,
  CreateLoadBalancingRequest,
  DescribeDnssecRequest,
  DescribeLoadBalancingDetailResponse,
  SecurityConfig,
  BotManagedRuleDetail,
  DescribeBotManagedRulesResponse,
  DnsRecord,
  DDoSAntiPly,
  ModifyDDoSPolicyResponse,
  DescribeDnsRecordsRequest,
  CreatePrefetchTaskResponse,
  DescribeDefaultCertificatesRequest,
  GeoIp,
  DescribeSecurityPolicyRequest,
  ModifyApplicationProxyRuleResponse,
  DescribeSecurityPolicyManagedRulesIdResponse,
  FailReason,
  CreateZoneRequest,
  RateLimitConfig,
  DescribeSecurityPolicyListResponse,
  DescribePurgeTasksResponse,
  OriginRecordPrivateParameter,
  CheckCertificateResponse,
  DDoSApplication,
  DownloadL7LogsRequest,
  DeleteLoadBalancingResponse,
  CheckCertificateRequest,
  CreateApplicationProxyRuleRequest,
  DescribePrefetchTasksRequest,
  ForceRedirect,
  ModifyApplicationProxyRequest,
  ModifyApplicationProxyStatusResponse,
  DetailHost,
  DescribeDnsRecordsResponse,
  BotPortraitRule,
  ModifyZoneCnameSpeedUpRequest,
  DescribeHostsCertificateRequest,
  DescribeSecurityPolicyManagedRulesResponse,
  RateLimitTemplate,
  DescribeApplicationProxyRequest,
  ModifyDDoSPolicyHostResponse,
  ModifyApplicationProxyRuleStatusRequest,
  RateLimitTemplateDetail,
  CreateApplicationProxyRuleResponse,
  RateLimitUserRule,
  ModifyDnsRecordResponse,
  CreateApplicationProxyRequest,
  PostMaxSize,
  ManagedRule,
  ModifyLoadBalancingResponse,
  DescribeCnameStatusRequest,
  CreateCustomErrorPageRequest,
  DescribeDnssecResponse,
  CreateZoneResponse,
  DnsDataFilter,
  DeleteLoadBalancingRequest,
  SecurityEntity,
  ApplicationProxy,
  ModifyApplicationProxyResponse,
  DescribeDDoSPolicyResponse,
  CacheKey,
  ModifyOriginGroupRequest,
  ModifyApplicationProxyRuleStatusResponse,
  DescribeSecurityPolicyListRequest,
  DescribeApplicationProxyDetailRequest,
  DeleteOriginGroupResponse,
  Header,
  DescribeZoneDetailsRequest,
  DescribeDDoSPolicyRequest,
  DescribeDefaultCertificatesResponse,
  CreateOriginGroupResponse,
  DescribeSecurityPolicyResponse,
  QueryString,
  DescribeSecurityPolicyRegionsRequest,
  ReclaimZoneRequest,
  DeleteZoneRequest,
  BotManagedRule,
  ModifyDefaultCertificateResponse,
  ClientIp,
  DnsRecordFilter,
  DescribeHostsCertificateResponse,
  DescribeZoneSettingResponse,
  AiRule,
  DescribePurgeTasksRequest,
  IdentifyZoneRequest,
  CacheConfig,
  ModifyDDoSPolicyRequest,
  ModifyZoneCnameSpeedUpResponse,
  ZoneFilter,
  MaxAge,
  DeleteDnsRecordsRequest,
  DdosAllowBlock,
  DDoSGeoIp,
  DescribeZoneDDoSPolicyResponse,
  AclConfig,
  DescribeDnsDataRequest,
  DDoSFeaturesFilter,
  CreatePurgeTaskRequest,
  DescribeApplicationProxyDetailResponse,
  DownloadL7LogsResponse,
  CreateOriginGroupRequest,
  DescribeHostsSettingRequest,
  DescribeZoneDDoSPolicyRequest,
  CreateApplicationProxyRulesResponse,
  DescribeIdentificationResponse,
  OriginGroup,
  DDoSUserAllowBlockIP,
  DescribeLoadBalancingResponse,
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
  BotConfig,
  VanityNameServersIps,
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
   * 查询验证结果
   */
  async DescribeIdentification(
    req: DescribeIdentificationRequest,
    cb?: (error: string, rep: DescribeIdentificationResponse) => void
  ): Promise<DescribeIdentificationResponse> {
    return this.request("DescribeIdentification", req, cb)
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
   * 源站组删除
   */
  async DeleteOriginGroup(
    req: DeleteOriginGroupRequest,
    cb?: (error: string, rep: DeleteOriginGroupResponse) => void
  ): Promise<DeleteOriginGroupResponse> {
    return this.request("DeleteOriginGroup", req, cb)
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
   * 批量创建应用代理规则
   */
  async CreateApplicationProxyRules(
    req: CreateApplicationProxyRulesRequest,
    cb?: (error: string, rep: CreateApplicationProxyRulesResponse) => void
  ): Promise<CreateApplicationProxyRulesResponse> {
    return this.request("CreateApplicationProxyRules", req, cb)
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
   * 源站组创建
   */
  async CreateOriginGroup(
    req: CreateOriginGroupRequest,
    cb?: (error: string, rep: CreateOriginGroupResponse) => void
  ): Promise<CreateOriginGroupResponse> {
    return this.request("CreateOriginGroup", req, cb)
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
   * 分页查询门神规则
   */
  async DescribeSecurityPolicyManagedRules(
    req: DescribeSecurityPolicyManagedRulesRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyManagedRulesResponse) => void
  ): Promise<DescribeSecurityPolicyManagedRulesResponse> {
    return this.request("DescribeSecurityPolicyManagedRules", req, cb)
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
   * 查询预热任务状态
   */
  async DescribePrefetchTasks(
    req: DescribePrefetchTasksRequest,
    cb?: (error: string, rep: DescribePrefetchTasksResponse) => void
  ): Promise<DescribePrefetchTasksResponse> {
    return this.request("DescribePrefetchTasks", req, cb)
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
   * 用该站点信息
   */
  async ModifyZone(
    req: ModifyZoneRequest,
    cb?: (error: string, rep: ModifyZoneResponse) => void
  ): Promise<ModifyZoneResponse> {
    return this.request("ModifyZone", req, cb)
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
   * 创建自定义规则的自定义页
   */
  async CreateCustomErrorPage(
    req: CreateCustomErrorPageRequest,
    cb?: (error: string, rep: CreateCustomErrorPageResponse) => void
  ): Promise<CreateCustomErrorPageResponse> {
    return this.request("CreateCustomErrorPage", req, cb)
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
   * 用于查询站点的所有配置信息。
   */
  async DescribeZoneSetting(
    req: DescribeZoneSettingRequest,
    cb?: (error: string, rep: DescribeZoneSettingResponse) => void
  ): Promise<DescribeZoneSettingResponse> {
    return this.request("DescribeZoneSetting", req, cb)
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
   * 查询域名证书列表，支持搜索、分页、排序、过滤。
   */
  async DescribeHostsCertificate(
    req: DescribeHostsCertificateRequest,
    cb?: (error: string, rep: DescribeHostsCertificateResponse) => void
  ): Promise<DescribeHostsCertificateResponse> {
    return this.request("DescribeHostsCertificate", req, cb)
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
   * 创建应用代理规则
   */
  async CreateApplicationProxyRule(
    req: CreateApplicationProxyRuleRequest,
    cb?: (error: string, rep: CreateApplicationProxyRuleResponse) => void
  ): Promise<CreateApplicationProxyRuleResponse> {
    return this.request("CreateApplicationProxyRule", req, cb)
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
   * 删除负载均衡
   */
  async DeleteLoadBalancing(
    req: DeleteLoadBalancingRequest,
    cb?: (error: string, rep: DeleteLoadBalancingResponse) => void
  ): Promise<DeleteLoadBalancingResponse> {
    return this.request("DeleteLoadBalancing", req, cb)
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
   * 用于开启，关闭站点
   */
  async ModifyZoneStatus(
    req: ModifyZoneStatusRequest,
    cb?: (error: string, rep: ModifyZoneStatusResponse) => void
  ): Promise<ModifyZoneStatusResponse> {
    return this.request("ModifyZoneStatus", req, cb)
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
   * 用户查询用户站点信息列表，支持分页
   */
  async DescribeZones(
    req: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
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
   * 查询 DNS 记录列表，支持搜索、分页、排序、过滤。
   */
  async DescribeDnsRecords(
    req: DescribeDnsRecordsRequest,
    cb?: (error: string, rep: DescribeDnsRecordsResponse) => void
  ): Promise<DescribeDnsRecordsResponse> {
    return this.request("DescribeDnsRecords", req, cb)
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
   * 源站组修改
   */
  async ModifyOriginGroup(
    req: ModifyOriginGroupRequest,
    cb?: (error: string, rep: ModifyOriginGroupResponse) => void
  ): Promise<ModifyOriginGroupResponse> {
    return this.request("ModifyOriginGroup", req, cb)
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
   * 修改负载均衡状态
   */
  async ModifyLoadBalancingStatus(
    req: ModifyLoadBalancingStatusRequest,
    cb?: (error: string, rep: ModifyLoadBalancingStatusResponse) => void
  ): Promise<ModifyLoadBalancingStatusResponse> {
    return this.request("ModifyLoadBalancingStatus", req, cb)
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
   * 创建预热任务
   */
  async CreatePrefetchTask(
    req: CreatePrefetchTaskRequest,
    cb?: (error: string, rep: CreatePrefetchTaskResponse) => void
  ): Promise<CreatePrefetchTaskResponse> {
    return this.request("CreatePrefetchTask", req, cb)
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
   * 查询安全防护配置详情
   */
  async DescribeSecurityPolicy(
    req: DescribeSecurityPolicyRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyResponse) => void
  ): Promise<DescribeSecurityPolicyResponse> {
    return this.request("DescribeSecurityPolicy", req, cb)
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
   * 获取负载均衡详细信息
   */
  async DescribeLoadBalancingDetail(
    req: DescribeLoadBalancingDetailRequest,
    cb?: (error: string, rep: DescribeLoadBalancingDetailResponse) => void
  ): Promise<DescribeLoadBalancingDetailResponse> {
    return this.request("DescribeLoadBalancingDetail", req, cb)
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
   * 规则id查询门神规则详情
   */
  async DescribeSecurityPolicyManagedRulesId(
    req: DescribeSecurityPolicyManagedRulesIdRequest,
    cb?: (error: string, rep: DescribeSecurityPolicyManagedRulesIdResponse) => void
  ): Promise<DescribeSecurityPolicyManagedRulesIdResponse> {
    return this.request("DescribeSecurityPolicyManagedRulesId", req, cb)
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
   * 用于查询 DNSSEC 相关信息
   */
  async DescribeDnssec(
    req: DescribeDnssecRequest,
    cb?: (error: string, rep: DescribeDnssecResponse) => void
  ): Promise<DescribeDnssecResponse> {
    return this.request("DescribeDnssec", req, cb)
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
   * 修改应用代理的状态
   */
  async ModifyApplicationProxyStatus(
    req: ModifyApplicationProxyStatusRequest,
    cb?: (error: string, rep: ModifyApplicationProxyStatusResponse) => void
  ): Promise<ModifyApplicationProxyStatusResponse> {
    return this.request("ModifyApplicationProxyStatus", req, cb)
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
   * 修改 DNSSEC 状态
   */
  async ModifyDnssec(
    req: ModifyDnssecRequest,
    cb?: (error: string, rep: ModifyDnssecResponse) => void
  ): Promise<ModifyDnssecResponse> {
    return this.request("ModifyDnssec", req, cb)
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
}

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
  ModifyDefaultCertificateRequest,
  DescribeZoneDetailsResponse,
  DeleteApplicationProxyResponse,
  Https,
  ScanDnsRecordsResponse,
  ZoneFilter,
  ModifyLoadBalancingStatusResponse,
  DescribePrefetchTasksResponse,
  DeleteApplicationProxyRequest,
  DescribeZoneSettingRequest,
  ModifyZoneStatusRequest,
  ModifyDnsRecordRequest,
  CreateApplicationProxyRulesRequest,
  LoadBalancing,
  ModifyDnssecRequest,
  ModifyZoneSettingRequest,
  DescribeApplicationProxyDetailRequest,
  CreateApplicationProxyResponse,
  ImportDnsRecordsRequest,
  CacheConfigNoCache,
  Origin,
  Task,
  CertSort,
  DescribeHostsSettingResponse,
  ModifyZoneResponse,
  ModifyZoneRequest,
  DeleteZoneResponse,
  ReclaimZoneResponse,
  CreatePurgeTaskResponse,
  DeleteApplicationProxyRuleResponse,
  DescribeIdentificationRequest,
  CreateDnsRecordRequest,
  L7OfflineLog,
  ApplicationProxyRule,
  SmartRouting,
  DescribeDnsDataResponse,
  Zone,
  ModifyApplicationProxyStatusRequest,
  CacheConfigCache,
  CertFilter,
  ModifyLoadBalancingStatusRequest,
  Quic,
  DescribeCnameStatusResponse,
  DescribeLoadBalancingRequest,
  ModifyApplicationProxyRuleRequest,
  CnameStatus,
  ModifyZoneSettingResponse,
  DownloadL7LogsResponse,
  CreateDnsRecordResponse,
  ServerCertInfo,
  DescribeZonesRequest,
  OriginRecord,
  CreatePrefetchTaskRequest,
  DeleteApplicationProxyRuleRequest,
  CacheConfigFollowOrigin,
  VanityNameServers,
  DescribeApplicationProxyResponse,
  CreateLoadBalancingResponse,
  IdentifyZoneResponse,
  WebSocket,
  DataItem,
  ModifyLoadBalancingRequest,
  CreateLoadBalancingRequest,
  DescribeDnssecRequest,
  DescribeLoadBalancingDetailResponse,
  DescribePrefetchTasksRequest,
  DnsRecord,
  DescribeDnsRecordsRequest,
  CreatePrefetchTaskResponse,
  DescribeDefaultCertificatesRequest,
  ModifyApplicationProxyRuleResponse,
  FailReason,
  CreateZoneRequest,
  OriginRecordPrivateParameter,
  CheckCertificateResponse,
  DescribePurgeTasksResponse,
  DownloadL7LogsRequest,
  DeleteLoadBalancingResponse,
  CheckCertificateRequest,
  CreateApplicationProxyRuleRequest,
  ForceRedirect,
  ModifyApplicationProxyRequest,
  ModifyApplicationProxyStatusResponse,
  DetailHost,
  DescribeDnsRecordsResponse,
  DescribeApplicationProxyDetailResponse,
  ModifyZoneCnameSpeedUpRequest,
  DescribeHostsCertificateRequest,
  Hsts,
  ModifyHostsCertificateResponse,
  ModifyLoadBalancingResponse,
  CreateApplicationProxyRuleResponse,
  ModifyDnsRecordResponse,
  CreateApplicationProxyRequest,
  PostMaxSize,
  DescribeCnameStatusRequest,
  DescribeDnssecResponse,
  CreateZoneResponse,
  DnsDataFilter,
  DeleteLoadBalancingRequest,
  ApplicationProxy,
  ModifyApplicationProxyResponse,
  CacheKey,
  ModifyApplicationProxyRuleStatusResponse,
  DescribeZonesResponse,
  Header,
  DescribeZoneDetailsRequest,
  DescribeDefaultCertificatesResponse,
  DescribeApplicationProxyRequest,
  ModifyApplicationProxyRuleStatusRequest,
  QueryString,
  ReclaimZoneRequest,
  DeleteZoneRequest,
  ModifyDefaultCertificateResponse,
  ClientIp,
  DescribeHostsCertificateResponse,
  DescribeZoneSettingResponse,
  DescribePurgeTasksRequest,
  IdentifyZoneRequest,
  CacheConfig,
  ModifyZoneCnameSpeedUpResponse,
  MaxAge,
  DeleteDnsRecordsRequest,
  ModifyHostsCertificateRequest,
  ModifyZoneStatusResponse,
  DescribeDnsDataRequest,
  CreatePurgeTaskRequest,
  DeleteDnsRecordsResponse,
  DescribeHostsSettingRequest,
  CreateApplicationProxyRulesResponse,
  DescribeIdentificationResponse,
  OriginGroup,
  DescribeLoadBalancingResponse,
  ModifyDnssecResponse,
  ScanDnsRecordsRequest,
  ImportDnsRecordsResponse,
  DescribeLoadBalancingDetailRequest,
  DefaultServerCertInfo,
  DnssecInfo,
  DnsRecordFilter,
  UpstreamHttp2,
  OfflineCache,
  VanityNameServersIps,
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
   * 查询清除缓存历史记录
   */
  async DescribePurgeTasks(
    req: DescribePurgeTasksRequest,
    cb?: (error: string, rep: DescribePurgeTasksResponse) => void
  ): Promise<DescribePurgeTasksResponse> {
    return this.request("DescribePurgeTasks", req, cb)
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
   * 用于查询域名配置信息
   */
  async DescribeHostsSetting(
    req: DescribeHostsSettingRequest,
    cb?: (error: string, rep: DescribeHostsSettingResponse) => void
  ): Promise<DescribeHostsSettingResponse> {
    return this.request("DescribeHostsSetting", req, cb)
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
   * 修改负载均衡状态
   */
  async ModifyLoadBalancingStatus(
    req: ModifyLoadBalancingStatusRequest,
    cb?: (error: string, rep: ModifyLoadBalancingStatusResponse) => void
  ): Promise<ModifyLoadBalancingStatusResponse> {
    return this.request("ModifyLoadBalancingStatus", req, cb)
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
   * 获取应用代理列表
   */
  async DescribeApplicationProxy(
    req: DescribeApplicationProxyRequest,
    cb?: (error: string, rep: DescribeApplicationProxyResponse) => void
  ): Promise<DescribeApplicationProxyResponse> {
    return this.request("DescribeApplicationProxy", req, cb)
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
   * 修改默认证书状态
   */
  async ModifyDefaultCertificate(
    req: ModifyDefaultCertificateRequest,
    cb?: (error: string, rep: ModifyDefaultCertificateResponse) => void
  ): Promise<ModifyDefaultCertificateResponse> {
    return this.request("ModifyDefaultCertificate", req, cb)
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
   * 查询域名 CNAME 状态
   */
  async DescribeCnameStatus(
    req: DescribeCnameStatusRequest,
    cb?: (error: string, rep: DescribeCnameStatusResponse) => void
  ): Promise<DescribeCnameStatusResponse> {
    return this.request("DescribeCnameStatus", req, cb)
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
   * 用于修改站点配置
   */
  async ModifyZoneSetting(
    req: ModifyZoneSettingRequest,
    cb?: (error: string, rep: ModifyZoneSettingResponse) => void
  ): Promise<ModifyZoneSettingResponse> {
    return this.request("ModifyZoneSetting", req, cb)
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
   * 修改 DNSSEC 状态
   */
  async ModifyDnssec(
    req: ModifyDnssecRequest,
    cb?: (error: string, rep: ModifyDnssecResponse) => void
  ): Promise<ModifyDnssecResponse> {
    return this.request("ModifyDnssec", req, cb)
  }
}

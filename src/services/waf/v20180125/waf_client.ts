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
  CreateAccessExportRequest,
  ModifyHostRequest,
  CdcCluster,
  DescribeIpHitItemsResponse,
  DescribeCustomRulesRspRuleListItem,
  RefreshAccessCheckResultRequest,
  WafRuleLimit,
  DescribeUserCdcClbWafRegionsRequest,
  IpHitItemsData,
  DeleteAttackDownloadRecordResponse,
  DescribeFlowTrendRequest,
  DescribeWafAutoDenyStatusRequest,
  AddCustomWhiteRuleResponse,
  SearchAttackLogRequest,
  DomainPackageNew,
  DescribeCustomWhiteRuleResponse,
  AccessLogItems,
  DescribePeakValueResponse,
  HostDel,
  DeleteCustomWhiteRuleResponse,
  AddDomainWhiteRuleResponse,
  DescribeIpAccessControlResponse,
  ModifyHostModeResponse,
  LoadBalancerPackageNew,
  DescribeInstancesResponse,
  ModifyDomainWhiteRuleRequest,
  DescribeTlsVersionResponse,
  DescribeHostsResponse,
  AccessRuleTagInfo,
  DescribePeakPointsRequest,
  DescribeAccessIndexRequest,
  DeleteHostRequest,
  DomainInfo,
  VipInfo,
  DescribeDomainsResponse,
  SwitchDomainRulesRequest,
  DeleteSessionRequest,
  DescribeWafAutoDenyRulesRequest,
  DescribeUserClbWafRegionsRequest,
  ModifyHostResponse,
  DescribeCiphersDetailRequest,
  AddCustomRuleResponse,
  DescribeFlowTrendResponse,
  GetAttackDownloadRecordsRequest,
  ModifyDomainIpv6StatusRequest,
  UpsertIpAccessControlRequest,
  GetAttackTotalCountResponse,
  ModifySpartaProtectionResponse,
  ModifyHostFlowModeRequest,
  DeleteDownloadRecordRequest,
  DescribeUserCdcClbWafRegionsResponse,
  GetAttackHistogramRequest,
  DeleteAccessExportResponse,
  AddSpartaProtectionsAutoResponse,
  DescribeAccessExportsRequest,
  UserDomainInfo,
  DescribeCustomWhiteRuleRequest,
  DescribeUserClbWafRegionsResponse,
  ModifyCustomWhiteRuleRequest,
  DeleteCustomWhiteRuleRequest,
  FailedInfo,
  TLSCiphers,
  ModifyProtectionStatusResponse,
  ModifyWafAutoDenyStatusRequest,
  BotStatPointItem,
  ModifyAccessPeriodResponse,
  ClbHostResult,
  DescribeVipInfoRequest,
  GetAttackHistogramResponse,
  FiltersItemNew,
  DeleteSpartaProtectionResponse,
  DescribeAutoDenyIPResponse,
  SwitchDomainRulesResponse,
  SearchAccessLogResponse,
  CreateHostResponse,
  IpAccessControlItem,
  DeleteHostResponse,
  DeleteSpartaProtectionRequest,
  DomainsPartInfo,
  DescribeAutoDenyIPRequest,
  AccessRuleInfo,
  HostRecord,
  CreateHostRequest,
  ModifyAreaBanStatusRequest,
  DescribeWafInfoRequest,
  SpartaProtectionPort,
  AddSpartaProtectionRequest,
  PeakPointsItem,
  IpHitItem,
  PostAttackDownloadTaskRequest,
  ModifyCustomWhiteRuleResponse,
  SearchItem,
  DescribePolicyStatusRequest,
  GetAttackTotalCountRequest,
  DescribeAccessFastAnalysisRequest,
  DeleteIpAccessControlRequest,
  AttackLogInfo,
  DeleteDomainWhiteRulesResponse,
  RuleList,
  DescribeAttackOverviewResponse,
  DescribeDomainCountInfoResponse,
  ModifyWafAutoDenyStatusResponse,
  ModifyHostModeRequest,
  DescribeWafAutoDenyStatusResponse,
  DescribeDomainDetailsClbRequest,
  DeleteDomainWhiteRulesRequest,
  DescribeTlsVersionRequest,
  DescribeCiphersDetailResponse,
  ModifyDomainsCLSStatusResponse,
  DescribeHostLimitResponse,
  PostAttackDownloadTaskResponse,
  ModifySpartaProtectionModeResponse,
  QPSPackageNew,
  DescribeDomainDetailsSaasRequest,
  ModifyCustomRuleStatusResponse,
  AddSpartaProtectionResponse,
  DescribeUserDomainInfoRequest,
  IpAccessControlData,
  PortItem,
  WafThreatenIntelligenceDetails,
  DescribeDomainWhiteRulesRequest,
  ModifyHostStatusResponse,
  ModifyCustomRuleStatusRequest,
  DescribePeakPointsResponse,
  AccessHistogramItem,
  DeleteDownloadRecordResponse,
  ModifyAccessPeriodRequest,
  DescribeAttackOverviewRequest,
  DescribePeakValueRequest,
  BotQPS,
  ClbHostsParams,
  DescribeDomainDetailsClbResponse,
  HostStatus,
  ModifyProtectionStatusRequest,
  ModifyWafAutoDenyRulesResponse,
  SearchAttackLogResponse,
  DescribePolicyStatusResponse,
  DescribeInstancesRequest,
  CdcRegion,
  AccessValueInfo,
  DeleteIpAccessControlResponse,
  DescribeWafInfoResponse,
  AccessLogInfo,
  InstanceInfo,
  PortInfo,
  DescribeDomainDetailsSaasResponse,
  AccessKeyValueInfo,
  AddSpartaProtectionsAutoRequest,
  AddCustomRuleRequest,
  DescribeWafAutoDenyRulesResponse,
  FraudPkg,
  DescribeHostRequest,
  ModifyAreaBanStatusResponse,
  FindAllDomainDetail,
  AddSpartaProtectionAutoResponse,
  ModifyDomainWhiteRuleResponse,
  ExportAccessInfo,
  ModifyWafAutoDenyRulesRequest,
  DescribeAccessFastAnalysisResponse,
  ModifyDomainIpv6StatusResponse,
  DescribeHostsRequest,
  AutoDenyDetail,
  ResponseCode,
  ModifyWafThreatenIntelligenceRequest,
  Strategy,
  AddSpartaProtectionAutoRequest,
  AccessFullTextInfo,
  DescribeFindDomainListRequest,
  DescribeIpHitItemsRequest,
  DescribeVipInfoResponse,
  ModifyDomainsCLSStatusRequest,
  DescribeRuleLimitRequest,
  DescribeDomainCountInfoRequest,
  GetAttackDownloadRecordsResponse,
  DeleteAccessExportRequest,
  ModifySpartaProtectionRequest,
  DescribeIpAccessControlRequest,
  DescribeDomainWhiteRulesResponse,
  DescribeWafThreatenIntelligenceResponse,
  DescribeAccessHistogramResponse,
  ModifyHostFlowModeResponse,
  DeleteAttackDownloadRecordRequest,
  DescribeAccessIndexResponse,
  AddCustomWhiteRuleRequest,
  AddDomainWhiteRuleRequest,
  UpsertIpAccessControlResponse,
  DescribeFindDomainListResponse,
  DescribeAccessHistogramRequest,
  DeleteSessionResponse,
  DownloadAttackRecordInfo,
  DescribeRuleLimitResponse,
  DescribeWafThreatenIntelligenceRequest,
  DescribeHostLimitRequest,
  DescribeAccessExportsResponse,
  CreateAccessExportResponse,
  AccessLogItem,
  ClbDomainsInfo,
  DescribeHostResponse,
  LogHistogramInfo,
  DomainURI,
  SearchAccessLogRequest,
  ModifySpartaProtectionModeRequest,
  AccessRuleKeyValueInfo,
  DescribeDomainsRequest,
  BotPkg,
  ModifyWafThreatenIntelligenceResponse,
  DescribeUserDomainInfoResponse,
  ModifyHostStatusRequest,
  TLSVersion,
  LoadBalancer,
  RefreshAccessCheckResultResponse,
} from "./waf_models"

/**
 * waf client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("waf.tencentcloudapi.com", "2018-01-25", clientConfig)
  }

  /**
   * clb-waf编辑防护域名配置
   */
  async ModifyHost(
    req: ModifyHostRequest,
    cb?: (error: string, rep: ModifyHostResponse) => void
  ): Promise<ModifyHostResponse> {
    return this.request("ModifyHost", req, cb)
  }

  /**
   * 本接口用于获取访问日志导出列表
   */
  async DescribeAccessExports(
    req: DescribeAccessExportsRequest,
    cb?: (error: string, rep: DescribeAccessExportsResponse) => void
  ): Promise<DescribeAccessExportsResponse> {
    return this.request("DescribeAccessExports", req, cb)
  }

  /**
   * 获取发现域名列表接口
   */
  async DescribeFindDomainList(
    req: DescribeFindDomainListRequest,
    cb?: (error: string, rep: DescribeFindDomainListResponse) => void
  ): Promise<DescribeFindDomainListResponse> {
    return this.request("DescribeFindDomainList", req, cb)
  }

  /**
   * 查询业务和攻击概要趋势
   */
  async DescribePeakPoints(
    req: DescribePeakPointsRequest,
    cb?: (error: string, rep: DescribePeakPointsResponse) => void
  ): Promise<DescribePeakPointsResponse> {
    return this.request("DescribePeakPoints", req, cb)
  }

  /**
   * waf斯巴达-waf开关
   */
  async ModifyProtectionStatus(
    req: ModifyProtectionStatusRequest,
    cb?: (error: string, rep: ModifyProtectionStatusResponse) => void
  ): Promise<ModifyProtectionStatusResponse> {
    return this.request("ModifyProtectionStatus", req, cb)
  }

  /**
   * 添加域名的首先验证是否购买了套餐，是否没有达到购买套餐的限制，域名是否已经添加
   */
  async DescribeHostLimit(
    req: DescribeHostLimitRequest,
    cb?: (error: string, rep: DescribeHostLimitResponse) => void
  ): Promise<DescribeHostLimitResponse> {
    return this.request("DescribeHostLimit", req, cb)
  }

  /**
   * 本接口用于删除访问日志导出
   */
  async DeleteAccessExport(
    req: DeleteAccessExportRequest,
    cb?: (error: string, rep: DeleteAccessExportResponse) => void
  ): Promise<DeleteAccessExportResponse> {
    return this.request("DeleteAccessExport", req, cb)
  }

  /**
   * 获取一个clb域名详情
   */
  async DescribeDomainDetailsClb(
    req: DescribeDomainDetailsClbRequest,
    cb?: (error: string, rep: DescribeDomainDetailsClbResponse) => void
  ): Promise<DescribeDomainDetailsClbResponse> {
    return this.request("DescribeDomainDetailsClb", req, cb)
  }

  /**
   * 删除域名规则白名单
   */
  async DeleteDomainWhiteRules(
    req: DeleteDomainWhiteRulesRequest,
    cb?: (error: string, rep: DeleteDomainWhiteRulesResponse) => void
  ): Promise<DeleteDomainWhiteRulesResponse> {
    return this.request("DeleteDomainWhiteRules", req, cb)
  }

  /**
   * 修改防护域名的地域封禁状态
   */
  async ModifyAreaBanStatus(
    req: ModifyAreaBanStatusRequest,
    cb?: (error: string, rep: ModifyAreaBanStatusResponse) => void
  ): Promise<ModifyAreaBanStatusResponse> {
    return this.request("ModifyAreaBanStatus", req, cb)
  }

  /**
   * 切换域名的规则开关
   */
  async SwitchDomainRules(
    req: SwitchDomainRulesRequest,
    cb?: (error: string, rep: SwitchDomainRulesResponse) => void
  ): Promise<SwitchDomainRulesResponse> {
    return this.request("SwitchDomainRules", req, cb)
  }

  /**
   * 查询用户所有域名的详细信息
   */
  async DescribeDomains(
    req: DescribeDomainsRequest,
    cb?: (error: string, rep: DescribeDomainsResponse) => void
  ): Promise<DescribeDomainsResponse> {
    return this.request("DescribeDomains", req, cb)
  }

  /**
   * 本接口用于搜索WAF访问日志
   */
  async SearchAccessLog(
    req: SearchAccessLogRequest,
    cb?: (error: string, rep: SearchAccessLogResponse) => void
  ): Promise<SearchAccessLogResponse> {
    return this.request("SearchAccessLog", req, cb)
  }

  /**
   * 本接口用于获取访问日志索引配置信息
   */
  async DescribeAccessIndex(
    req?: DescribeAccessIndexRequest,
    cb?: (error: string, rep: DescribeAccessIndexResponse) => void
  ): Promise<DescribeAccessIndexResponse> {
    return this.request("DescribeAccessIndex", req, cb)
  }

  /**
   * clb-waf 设置防护域名的流量模式
   */
  async ModifyHostFlowMode(
    req: ModifyHostFlowModeRequest,
    cb?: (error: string, rep: ModifyHostFlowModeResponse) => void
  ): Promise<ModifyHostFlowModeResponse> {
    return this.request("ModifyHostFlowMode", req, cb)
  }

  /**
   * 本接口用于创建访问日志导出
   */
  async CreateAccessExport(
    req: CreateAccessExportRequest,
    cb?: (error: string, rep: CreateAccessExportResponse) => void
  ): Promise<CreateAccessExportResponse> {
    return this.request("CreateAccessExport", req, cb)
  }

  /**
   * 按照条件查询展示攻击总次数
   */
  async GetAttackTotalCount(
    req: GetAttackTotalCountRequest,
    cb?: (error: string, rep: GetAttackTotalCountResponse) => void
  ): Promise<GetAttackTotalCountResponse> {
    return this.request("GetAttackTotalCount", req, cb)
  }

  /**
   * 新版本CLS接口存在参数变化，query改成了query_string支持lucence语法接口搜索查询。
   */
  async SearchAttackLog(
    req: SearchAttackLogRequest,
    cb?: (error: string, rep: SearchAttackLogResponse) => void
  ): Promise<SearchAttackLogResponse> {
    return this.request("SearchAttackLog", req, cb)
  }

  /**
   * 本接口用于访问日志柱状趋势图
   */
  async DescribeAccessHistogram(
    req: DescribeAccessHistogramRequest,
    cb?: (error: string, rep: DescribeAccessHistogramResponse) => void
  ): Promise<DescribeAccessHistogramResponse> {
    return this.request("DescribeAccessHistogram", req, cb)
  }

  /**
   * 查询用户所有实例的详细信息
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 设置waf防护状态
   */
  async ModifySpartaProtectionMode(
    req: ModifySpartaProtectionModeRequest,
    cb?: (error: string, rep: ModifySpartaProtectionModeResponse) => void
  ): Promise<ModifySpartaProtectionModeResponse> {
    return this.request("ModifySpartaProtectionMode", req, cb)
  }

  /**
   * Waf IP黑白名单Delete接口
   */
  async DeleteIpAccessControl(
    req: DeleteIpAccessControlRequest,
    cb?: (error: string, rep: DeleteIpAccessControlResponse) => void
  ): Promise<DeleteIpAccessControlResponse> {
    return this.request("DeleteIpAccessControl", req, cb)
  }

  /**
   * 本接口用于修改访问日志保存期限及大字段是否存储
   */
  async ModifyAccessPeriod(
    req: ModifyAccessPeriodRequest,
    cb?: (error: string, rep: ModifyAccessPeriodResponse) => void
  ): Promise<ModifyAccessPeriodResponse> {
    return this.request("ModifyAccessPeriod", req, cb)
  }

  /**
   * 生成攻击日志的产生时间柱状图
   */
  async GetAttackHistogram(
    req: GetAttackHistogramRequest,
    cb?: (error: string, rep: GetAttackHistogramResponse) => void
  ): Promise<GetAttackHistogramResponse> {
    return this.request("GetAttackHistogram", req, cb)
  }

  /**
   * 配置WAF自动封禁模块状态
   */
  async ModifyWafAutoDenyStatus(
    req: ModifyWafAutoDenyStatusRequest,
    cb?: (error: string, rep: ModifyWafAutoDenyStatusResponse) => void
  ): Promise<ModifyWafAutoDenyStatusResponse> {
    return this.request("ModifyWafAutoDenyStatus", req, cb)
  }

  /**
   * 查询用户TLS版本
   */
  async DescribeTlsVersion(
    req?: DescribeTlsVersionRequest,
    cb?: (error: string, rep: DescribeTlsVersionResponse) => void
  ): Promise<DescribeTlsVersionResponse> {
    return this.request("DescribeTlsVersion", req, cb)
  }

  /**
     * clb-waf 设置防护域名WAF开关
支持批量操作。
     */
  async ModifyHostStatus(
    req: ModifyHostStatusRequest,
    cb?: (error: string, rep: ModifyHostStatusResponse) => void
  ): Promise<ModifyHostStatusResponse> {
    return this.request("ModifyHostStatus", req, cb)
  }

  /**
   * 查询加密套件信息
   */
  async DescribeCiphersDetail(
    req?: DescribeCiphersDetailRequest,
    cb?: (error: string, rep: DescribeCiphersDetailResponse) => void
  ): Promise<DescribeCiphersDetailResponse> {
    return this.request("DescribeCiphersDetail", req, cb)
  }

  /**
   * 批量添加域名
   */
  async AddSpartaProtectionsAuto(
    req: AddSpartaProtectionsAutoRequest,
    cb?: (error: string, rep: AddSpartaProtectionsAutoResponse) => void
  ): Promise<AddSpartaProtectionsAutoResponse> {
    return this.request("AddSpartaProtectionsAuto", req, cb)
  }

  /**
   * 修改域名列表的访问日志开关
   */
  async ModifyDomainsCLSStatus(
    req: ModifyDomainsCLSStatusRequest,
    cb?: (error: string, rep: ModifyDomainsCLSStatusResponse) => void
  ): Promise<ModifyDomainsCLSStatusResponse> {
    return this.request("ModifyDomainsCLSStatus", req, cb)
  }

  /**
   * 获取waf流量访问趋势
   */
  async DescribeFlowTrend(
    req: DescribeFlowTrendRequest,
    cb?: (error: string, rep: DescribeFlowTrendResponse) => void
  ): Promise<DescribeFlowTrendResponse> {
    return this.request("DescribeFlowTrend", req, cb)
  }

  /**
   * 根据过滤条件查询VIP信息
   */
  async DescribeVipInfo(
    req: DescribeVipInfoRequest,
    cb?: (error: string, rep: DescribeVipInfoResponse) => void
  ): Promise<DescribeVipInfoResponse> {
    return this.request("DescribeVipInfo", req, cb)
  }

  /**
   * 查询saas和clb的域名信息
   */
  async DescribeUserDomainInfo(
    req?: DescribeUserDomainInfoRequest,
    cb?: (error: string, rep: DescribeUserDomainInfoResponse) => void
  ): Promise<DescribeUserDomainInfoResponse> {
    return this.request("DescribeUserDomainInfo", req, cb)
  }

  /**
   * 在CDC场景下，负载均衡型WAF的添加、编辑域名配置的时候，需要展示CDC负载均衡型WAF（cdc-clb-waf)支持的地域列表，通过DescribeUserCdcClbWafRegions既可以获得当前对客户已经开放的地域列表
   */
  async DescribeUserCdcClbWafRegions(
    req?: DescribeUserCdcClbWafRegionsRequest,
    cb?: (error: string, rep: DescribeUserCdcClbWafRegionsResponse) => void
  ): Promise<DescribeUserCdcClbWafRegionsResponse> {
    return this.request("DescribeUserCdcClbWafRegions", req, cb)
  }

  /**
     * 删除CLB-WAF防护域名
支持批量操作
     */
  async DeleteHost(
    req: DeleteHostRequest,
    cb?: (error: string, rep: DeleteHostResponse) => void
  ): Promise<DeleteHostResponse> {
    return this.request("DeleteHost", req, cb)
  }

  /**
   * 更改某一条规则
   */
  async ModifyDomainWhiteRule(
    req: ModifyDomainWhiteRuleRequest,
    cb?: (error: string, rep: ModifyDomainWhiteRuleResponse) => void
  ): Promise<ModifyDomainWhiteRuleResponse> {
    return this.request("ModifyDomainWhiteRule", req, cb)
  }

  /**
   * 本接口用于访问日志的快速分析
   */
  async DescribeAccessFastAnalysis(
    req: DescribeAccessFastAnalysisRequest,
    cb?: (error: string, rep: DescribeAccessFastAnalysisResponse) => void
  ): Promise<DescribeAccessFastAnalysisResponse> {
    return this.request("DescribeAccessFastAnalysis", req, cb)
  }

  /**
     * 接口已废弃

描述WAF自动封禁IP详情,对齐自动封堵状态
     */
  async DescribeAutoDenyIP(
    req: DescribeAutoDenyIPRequest,
    cb?: (error: string, rep: DescribeAutoDenyIPResponse) => void
  ): Promise<DescribeAutoDenyIPResponse> {
    return this.request("DescribeAutoDenyIP", req, cb)
  }

  /**
   * 描述WAF自动封禁模块详情
   */
  async DescribeWafAutoDenyStatus(
    req?: DescribeWafAutoDenyStatusRequest,
    cb?: (error: string, rep: DescribeWafAutoDenyStatusResponse) => void
  ): Promise<DescribeWafAutoDenyStatusResponse> {
    return this.request("DescribeWafAutoDenyStatus", req, cb)
  }

  /**
   * 删除精准白名单规则
   */
  async DeleteCustomWhiteRule(
    req: DeleteCustomWhiteRuleRequest,
    cb?: (error: string, rep: DeleteCustomWhiteRuleResponse) => void
  ): Promise<DeleteCustomWhiteRuleResponse> {
    return this.request("DeleteCustomWhiteRule", req, cb)
  }

  /**
   * 编辑精准白名单
   */
  async ModifyCustomWhiteRule(
    req: ModifyCustomWhiteRuleRequest,
    cb?: (error: string, rep: ModifyCustomWhiteRuleResponse) => void
  ): Promise<ModifyCustomWhiteRuleResponse> {
    return this.request("ModifyCustomWhiteRule", req, cb)
  }

  /**
   * 查询下载攻击日志任务记录列表
   */
  async GetAttackDownloadRecords(
    req?: GetAttackDownloadRecordsRequest,
    cb?: (error: string, rep: GetAttackDownloadRecordsResponse) => void
  ): Promise<GetAttackDownloadRecordsResponse> {
    return this.request("GetAttackDownloadRecords", req, cb)
  }

  /**
   * 增加访问控制（自定义策略）
   */
  async AddCustomRule(
    req: AddCustomRuleRequest,
    cb?: (error: string, rep: AddCustomRuleResponse) => void
  ): Promise<AddCustomRuleResponse> {
    return this.request("AddCustomRule", req, cb)
  }

  /**
   * Waf ip黑白名单查询
   */
  async DescribeIpAccessControl(
    req: DescribeIpAccessControlRequest,
    cb?: (error: string, rep: DescribeIpAccessControlResponse) => void
  ): Promise<DescribeIpAccessControlResponse> {
    return this.request("DescribeIpAccessControl", req, cb)
  }

  /**
   * 创建搜索下载攻击日志任务，使用CLS新版本的搜索下载getlog接口
   */
  async PostAttackDownloadTask(
    req: PostAttackDownloadTaskRequest,
    cb?: (error: string, rep: PostAttackDownloadTaskResponse) => void
  ): Promise<PostAttackDownloadTaskResponse> {
    return this.request("PostAttackDownloadTask", req, cb)
  }

  /**
   * 查询单个saas域名详情
   */
  async DescribeDomainDetailsSaas(
    req: DescribeDomainDetailsSaasRequest,
    cb?: (error: string, rep: DescribeDomainDetailsSaasResponse) => void
  ): Promise<DescribeDomainDetailsSaasResponse> {
    return this.request("DescribeDomainDetailsSaas", req, cb)
  }

  /**
   * 开启或禁用访问控制（自定义策略）
   */
  async ModifyCustomRuleStatus(
    req: ModifyCustomRuleStatusRequest,
    cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void
  ): Promise<ModifyCustomRuleStatusResponse> {
    return this.request("ModifyCustomRuleStatus", req, cb)
  }

  /**
   * 获取域名概况
   */
  async DescribeDomainCountInfo(
    req?: DescribeDomainCountInfoRequest,
    cb?: (error: string, rep: DescribeDomainCountInfoResponse) => void
  ): Promise<DescribeDomainCountInfoResponse> {
    return this.request("DescribeDomainCountInfo", req, cb)
  }

  /**
   * waf斯巴达-删除防护域名
   */
  async DeleteSpartaProtection(
    req: DeleteSpartaProtectionRequest,
    cb?: (error: string, rep: DeleteSpartaProtectionResponse) => void
  ): Promise<DeleteSpartaProtectionResponse> {
    return this.request("DeleteSpartaProtection", req, cb)
  }

  /**
   * 获取业务和攻击概览峰值
   */
  async DescribePeakValue(
    req: DescribePeakValueRequest,
    cb?: (error: string, rep: DescribePeakValueResponse) => void
  ): Promise<DescribePeakValueResponse> {
    return this.request("DescribePeakValue", req, cb)
  }

  /**
   * 配置WAF威胁情报封禁模块详情
   */
  async ModifyWafThreatenIntelligence(
    req: ModifyWafThreatenIntelligenceRequest,
    cb?: (error: string, rep: ModifyWafThreatenIntelligenceResponse) => void
  ): Promise<ModifyWafThreatenIntelligenceResponse> {
    return this.request("ModifyWafThreatenIntelligence", req, cb)
  }

  /**
   * clb-waf设置防护域名防护状态
   */
  async ModifyHostMode(
    req: ModifyHostModeRequest,
    cb?: (error: string, rep: ModifyHostModeResponse) => void
  ): Promise<ModifyHostModeResponse> {
    return this.request("ModifyHostMode", req, cb)
  }

  /**
   * 修改域名配置
   */
  async ModifySpartaProtection(
    req: ModifySpartaProtectionRequest,
    cb?: (error: string, rep: ModifySpartaProtectionResponse) => void
  ): Promise<ModifySpartaProtectionResponse> {
    return this.request("ModifySpartaProtection", req, cb)
  }

  /**
   * 增加精准白名单规则
   */
  async AddCustomWhiteRule(
    req: AddCustomWhiteRuleRequest,
    cb?: (error: string, rep: AddCustomWhiteRuleResponse) => void
  ): Promise<AddCustomWhiteRuleResponse> {
    return this.request("AddCustomWhiteRule", req, cb)
  }

  /**
   * 修改ip惩罚规则
   */
  async ModifyWafAutoDenyRules(
    req: ModifyWafAutoDenyRulesRequest,
    cb?: (error: string, rep: ModifyWafAutoDenyRulesResponse) => void
  ): Promise<ModifyWafAutoDenyRulesResponse> {
    return this.request("ModifyWafAutoDenyRules", req, cb)
  }

  /**
   * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
   */
  async DescribeUserClbWafRegions(
    req?: DescribeUserClbWafRegionsRequest,
    cb?: (error: string, rep: DescribeUserClbWafRegionsResponse) => void
  ): Promise<DescribeUserClbWafRegionsResponse> {
    return this.request("DescribeUserClbWafRegions", req, cb)
  }

  /**
   * 删除攻击日志下载任务记录
   */
  async DeleteAttackDownloadRecord(
    req: DeleteAttackDownloadRecordRequest,
    cb?: (error: string, rep: DeleteAttackDownloadRecordResponse) => void
  ): Promise<DeleteAttackDownloadRecordResponse> {
    return this.request("DeleteAttackDownloadRecord", req, cb)
  }

  /**
   * 返回ip惩罚规则详细信息
   */
  async DescribeWafAutoDenyRules(
    req: DescribeWafAutoDenyRulesRequest,
    cb?: (error: string, rep: DescribeWafAutoDenyRulesResponse) => void
  ): Promise<DescribeWafAutoDenyRulesResponse> {
    return this.request("DescribeWafAutoDenyRules", req, cb)
  }

  /**
   * 攻击总览
   */
  async DescribeAttackOverview(
    req: DescribeAttackOverviewRequest,
    cb?: (error: string, rep: DescribeAttackOverviewResponse) => void
  ): Promise<DescribeAttackOverviewResponse> {
    return this.request("DescribeAttackOverview", req, cb)
  }

  /**
   * 删除访问日志下载记录
   */
  async DeleteDownloadRecord(
    req: DeleteDownloadRecordRequest,
    cb?: (error: string, rep: DeleteDownloadRecordResponse) => void
  ): Promise<DeleteDownloadRecordResponse> {
    return this.request("DeleteDownloadRecord", req, cb)
  }

  /**
   * clb-waf中添加防护的域名
   */
  async CreateHost(
    req: CreateHostRequest,
    cb?: (error: string, rep: CreateHostResponse) => void
  ): Promise<CreateHostResponse> {
    return this.request("CreateHost", req, cb)
  }

  /**
   * 删除CC攻击的session设置
   */
  async DeleteSession(
    req: DeleteSessionRequest,
    cb?: (error: string, rep: DeleteSessionResponse) => void
  ): Promise<DeleteSessionResponse> {
    return this.request("DeleteSession", req, cb)
  }

  /**
   * 一键接入
   */
  async AddSpartaProtectionAuto(
    req: AddSpartaProtectionAutoRequest,
    cb?: (error: string, rep: AddSpartaProtectionAutoResponse) => void
  ): Promise<AddSpartaProtectionAutoResponse> {
    return this.request("AddSpartaProtectionAuto", req, cb)
  }

  /**
   * 获取各个模块具体的规格限制
   */
  async DescribeRuleLimit(
    req: DescribeRuleLimitRequest,
    cb?: (error: string, rep: DescribeRuleLimitResponse) => void
  ): Promise<DescribeRuleLimitResponse> {
    return this.request("DescribeRuleLimit", req, cb)
  }

  /**
   * clb-waf中获取防护域名列表
   */
  async DescribeHosts(
    req: DescribeHostsRequest,
    cb?: (error: string, rep: DescribeHostsResponse) => void
  ): Promise<DescribeHostsResponse> {
    return this.request("DescribeHosts", req, cb)
  }

  /**
   * 添加Spart防护域名
   */
  async AddSpartaProtection(
    req: AddSpartaProtectionRequest,
    cb?: (error: string, rep: AddSpartaProtectionResponse) => void
  ): Promise<AddSpartaProtectionResponse> {
    return this.request("AddSpartaProtection", req, cb)
  }

  /**
   * 描述WAF威胁情报封禁模块配置详情
   */
  async DescribeWafThreatenIntelligence(
    req?: DescribeWafThreatenIntelligenceRequest,
    cb?: (error: string, rep: DescribeWafThreatenIntelligenceResponse) => void
  ): Promise<DescribeWafThreatenIntelligenceResponse> {
    return this.request("DescribeWafThreatenIntelligence", req, cb)
  }

  /**
     * 获取负载均衡绑定的WAF信息，可以根据租户负载均衡实例ID、负载均衡监听器ID、负载均衡的域名信息来查询对应绑定的 Waf的状态信息。
查询的范围：负载均衡实例ID、负载均衡实例ID+监听器ID、负载均衡实例ID+监听器ID+域名。
可能的错误码：ResourceNotFound（没有找到对应的资源）、UnsupportedRegion（目前clb-waf只支持北京、广州、上海、成都、重庆、香港地域）。

     */
  async DescribeWafInfo(
    req: DescribeWafInfoRequest,
    cb?: (error: string, rep: DescribeWafInfoResponse) => void
  ): Promise<DescribeWafInfoResponse> {
    return this.request("DescribeWafInfo", req, cb)
  }

  /**
   * 获取防护状态以及生效的实例id
   */
  async DescribePolicyStatus(
    req: DescribePolicyStatusRequest,
    cb?: (error: string, rep: DescribePolicyStatusResponse) => void
  ): Promise<DescribePolicyStatusResponse> {
    return this.request("DescribePolicyStatus", req, cb)
  }

  /**
   * 刷新接入检查的结果，后台会生成接入检查任务
   */
  async RefreshAccessCheckResult(
    req: RefreshAccessCheckResultRequest,
    cb?: (error: string, rep: RefreshAccessCheckResultResponse) => void
  ): Promise<RefreshAccessCheckResultResponse> {
    return this.request("RefreshAccessCheckResult", req, cb)
  }

  /**
   * Waf  IP封堵状态查询
   */
  async DescribeIpHitItems(
    req: DescribeIpHitItemsRequest,
    cb?: (error: string, rep: DescribeIpHitItemsResponse) => void
  ): Promise<DescribeIpHitItemsResponse> {
    return this.request("DescribeIpHitItems", req, cb)
  }

  /**
   * 增加域名规则白名单
   */
  async AddDomainWhiteRule(
    req: AddDomainWhiteRuleRequest,
    cb?: (error: string, rep: AddDomainWhiteRuleResponse) => void
  ): Promise<AddDomainWhiteRuleResponse> {
    return this.request("AddDomainWhiteRule", req, cb)
  }

  /**
   * 修改ipv6开关
   */
  async ModifyDomainIpv6Status(
    req: ModifyDomainIpv6StatusRequest,
    cb?: (error: string, rep: ModifyDomainIpv6StatusResponse) => void
  ): Promise<ModifyDomainIpv6StatusResponse> {
    return this.request("ModifyDomainIpv6Status", req, cb)
  }

  /**
   * 获取域名的规则白名单
   */
  async DescribeDomainWhiteRules(
    req: DescribeDomainWhiteRulesRequest,
    cb?: (error: string, rep: DescribeDomainWhiteRulesResponse) => void
  ): Promise<DescribeDomainWhiteRulesResponse> {
    return this.request("DescribeDomainWhiteRules", req, cb)
  }

  /**
   * 获取防护配置中的精准白名单策略列表
   */
  async DescribeCustomWhiteRule(
    req: DescribeCustomWhiteRuleRequest,
    cb?: (error: string, rep: DescribeCustomWhiteRuleResponse) => void
  ): Promise<DescribeCustomWhiteRuleResponse> {
    return this.request("DescribeCustomWhiteRule", req, cb)
  }

  /**
   * clb-waf获取防护域名详情
   */
  async DescribeHost(
    req: DescribeHostRequest,
    cb?: (error: string, rep: DescribeHostResponse) => void
  ): Promise<DescribeHostResponse> {
    return this.request("DescribeHost", req, cb)
  }

  /**
   * Waf IP黑白名单Upsert接口
   */
  async UpsertIpAccessControl(
    req: UpsertIpAccessControlRequest,
    cb?: (error: string, rep: UpsertIpAccessControlResponse) => void
  ): Promise<UpsertIpAccessControlResponse> {
    return this.request("UpsertIpAccessControl", req, cb)
  }
}

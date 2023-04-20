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
  CdcCluster,
  DescribeIpHitItemsResponse,
  DescribeCustomRulesRspRuleListItem,
  WafRuleLimit,
  DescribeUserCdcClbWafRegionsRequest,
  IpHitItemsData,
  DeleteAttackDownloadRecordResponse,
  DescribeFlowTrendRequest,
  DescribeWafAutoDenyStatusRequest,
  AddCustomWhiteRuleResponse,
  DescribeCustomWhiteRuleResponse,
  AccessLogItems,
  DescribePeakValueResponse,
  AddDomainWhiteRuleResponse,
  DescribeIpAccessControlResponse,
  LoadBalancerPackageNew,
  DescribeInstancesResponse,
  ModifyDomainWhiteRuleRequest,
  VipInfo,
  AccessRuleTagInfo,
  DescribePeakPointsRequest,
  DescribeAccessIndexRequest,
  DomainInfo,
  AccessLogItem,
  DeleteSessionRequest,
  DescribeWafAutoDenyRulesRequest,
  SearchAttackLogRequest,
  DeleteCustomWhiteRuleResponse,
  AddCustomRuleResponse,
  DescribeFlowTrendResponse,
  GetAttackDownloadRecordsRequest,
  UpsertIpAccessControlRequest,
  DeleteDownloadRecordRequest,
  DescribeUserCdcClbWafRegionsResponse,
  DeleteAccessExportResponse,
  DescribeAccessExportsRequest,
  DescribeCustomWhiteRuleRequest,
  DescribeUserClbWafRegionsResponse,
  ModifyCustomWhiteRuleRequest,
  DeleteCustomWhiteRuleRequest,
  ModifyWafAutoDenyStatusRequest,
  ModifyAccessPeriodResponse,
  DescribeVipInfoRequest,
  FiltersItemNew,
  DescribeAutoDenyIPResponse,
  SwitchDomainRulesResponse,
  SearchAccessLogResponse,
  CreateHostResponse,
  IpAccessControlItem,
  SwitchDomainRulesRequest,
  DomainsPartInfo,
  DescribeAutoDenyIPRequest,
  DescribeIpAccessControlRequest,
  HostRecord,
  CreateHostRequest,
  ModifyAreaBanStatusRequest,
  AddSpartaProtectionRequest,
  PeakPointsItem,
  PostAttackDownloadTaskRequest,
  ModifyCustomWhiteRuleResponse,
  DescribePolicyStatusRequest,
  DescribeAccessFastAnalysisRequest,
  DeleteIpAccessControlRequest,
  AttackLogInfo,
  DeleteDomainWhiteRulesResponse,
  DescribeAttackOverviewResponse,
  ModifyWafAutoDenyStatusResponse,
  DescribeWafAutoDenyStatusResponse,
  DeleteDomainWhiteRulesRequest,
  DomainPackageNew,
  RuleList,
  PostAttackDownloadTaskResponse,
  QPSPackageNew,
  DescribeDomainDetailsSaasRequest,
  ModifyCustomRuleStatusResponse,
  AddSpartaProtectionResponse,
  IpAccessControlData,
  PortItem,
  WafThreatenIntelligenceDetails,
  DescribeDomainWhiteRulesRequest,
  ModifyCustomRuleStatusRequest,
  DescribePeakPointsResponse,
  DeleteDownloadRecordResponse,
  ModifyAccessPeriodRequest,
  DescribeAttackOverviewRequest,
  DescribePeakValueRequest,
  BotQPS,
  ModifyWafAutoDenyRulesResponse,
  SearchAttackLogResponse,
  DescribePolicyStatusResponse,
  DescribeInstancesRequest,
  CdcRegion,
  AccessValueInfo,
  DeleteIpAccessControlResponse,
  AccessLogInfo,
  InstanceInfo,
  PortInfo,
  DescribeDomainDetailsSaasResponse,
  AccessKeyValueInfo,
  AddCustomRuleRequest,
  DescribeWafAutoDenyRulesResponse,
  FraudPkg,
  ModifyAreaBanStatusResponse,
  ModifyDomainWhiteRuleResponse,
  ExportAccessInfo,
  ModifyWafAutoDenyRulesRequest,
  DescribeAccessFastAnalysisResponse,
  DescribeDomainsResponse,
  AutoDenyDetail,
  ResponseCode,
  ModifyWafThreatenIntelligenceRequest,
  Strategy,
  AccessFullTextInfo,
  DescribeIpHitItemsRequest,
  DescribeVipInfoResponse,
  DescribeRuleLimitRequest,
  AccessRuleInfo,
  GetAttackDownloadRecordsResponse,
  DeleteAccessExportRequest,
  DescribeUserClbWafRegionsRequest,
  DescribeDomainWhiteRulesResponse,
  DescribeWafThreatenIntelligenceResponse,
  DeleteAttackDownloadRecordRequest,
  AddCustomWhiteRuleRequest,
  AddDomainWhiteRuleRequest,
  UpsertIpAccessControlResponse,
  IpHitItem,
  DeleteSessionResponse,
  DownloadAttackRecordInfo,
  DescribeRuleLimitResponse,
  DescribeWafThreatenIntelligenceRequest,
  DescribeAccessIndexResponse,
  DescribeAccessExportsResponse,
  CreateAccessExportResponse,
  BotStatPointItem,
  SearchAccessLogRequest,
  AccessRuleKeyValueInfo,
  DescribeDomainsRequest,
  BotPkg,
  ModifyWafThreatenIntelligenceResponse,
  LoadBalancer,
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
   * 本接口用于获取访问日志导出列表
   */
  async DescribeAccessExports(
    req: DescribeAccessExportsRequest,
    cb?: (error: string, rep: DescribeAccessExportsResponse) => void
  ): Promise<DescribeAccessExportsResponse> {
    return this.request("DescribeAccessExports", req, cb)
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
   * 本接口用于删除访问日志导出
   */
  async DeleteAccessExport(
    req: DeleteAccessExportRequest,
    cb?: (error: string, rep: DeleteAccessExportResponse) => void
  ): Promise<DeleteAccessExportResponse> {
    return this.request("DeleteAccessExport", req, cb)
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
   * 本接口用于创建访问日志导出
   */
  async CreateAccessExport(
    req: CreateAccessExportRequest,
    cb?: (error: string, rep: CreateAccessExportResponse) => void
  ): Promise<CreateAccessExportResponse> {
    return this.request("CreateAccessExport", req, cb)
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
   * 查询单个saas域名详情
   */
  async DescribeDomainDetailsSaas(
    req: DescribeDomainDetailsSaasRequest,
    cb?: (error: string, rep: DescribeDomainDetailsSaasResponse) => void
  ): Promise<DescribeDomainDetailsSaasResponse> {
    return this.request("DescribeDomainDetailsSaas", req, cb)
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
   * Waf IP黑白名单Delete接口
   */
  async DeleteIpAccessControl(
    req: DeleteIpAccessControlRequest,
    cb?: (error: string, rep: DeleteIpAccessControlResponse) => void
  ): Promise<DeleteIpAccessControlResponse> {
    return this.request("DeleteIpAccessControl", req, cb)
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
   * 本接口用于修改访问日志保存期限及大字段是否存储
   */
  async ModifyAccessPeriod(
    req: ModifyAccessPeriodRequest,
    cb?: (error: string, rep: ModifyAccessPeriodResponse) => void
  ): Promise<ModifyAccessPeriodResponse> {
    return this.request("ModifyAccessPeriod", req, cb)
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
   * 在CDC场景下，负载均衡型WAF的添加、编辑域名配置的时候，需要展示CDC负载均衡型WAF（cdc-clb-waf)支持的地域列表，通过DescribeUserCdcClbWafRegions既可以获得当前对客户已经开放的地域列表
   */
  async DescribeUserCdcClbWafRegions(
    req?: DescribeUserCdcClbWafRegionsRequest,
    cb?: (error: string, rep: DescribeUserCdcClbWafRegionsResponse) => void
  ): Promise<DescribeUserCdcClbWafRegionsResponse> {
    return this.request("DescribeUserCdcClbWafRegions", req, cb)
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
   * 描述WAF自动封禁IP详情,对齐自动封堵状态
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
   * 开启或禁用访问控制（自定义策略）
   */
  async ModifyCustomRuleStatus(
    req: ModifyCustomRuleStatusRequest,
    cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void
  ): Promise<ModifyCustomRuleStatusResponse> {
    return this.request("ModifyCustomRuleStatus", req, cb)
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
   * 获取域名的规则白名单
   */
  async DescribeDomainWhiteRules(
    req: DescribeDomainWhiteRulesRequest,
    cb?: (error: string, rep: DescribeDomainWhiteRulesResponse) => void
  ): Promise<DescribeDomainWhiteRulesResponse> {
    return this.request("DescribeDomainWhiteRules", req, cb)
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
   * 获取防护状态以及生效的实例id
   */
  async DescribePolicyStatus(
    req: DescribePolicyStatusRequest,
    cb?: (error: string, rep: DescribePolicyStatusResponse) => void
  ): Promise<DescribePolicyStatusResponse> {
    return this.request("DescribePolicyStatus", req, cb)
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
   * 切换域名的规则开关
   */
  async SwitchDomainRules(
    req: SwitchDomainRulesRequest,
    cb?: (error: string, rep: SwitchDomainRulesResponse) => void
  ): Promise<SwitchDomainRulesResponse> {
    return this.request("SwitchDomainRules", req, cb)
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
   * Waf IP黑白名单Upsert接口
   */
  async UpsertIpAccessControl(
    req: UpsertIpAccessControlRequest,
    cb?: (error: string, rep: UpsertIpAccessControlResponse) => void
  ): Promise<UpsertIpAccessControlResponse> {
    return this.request("UpsertIpAccessControl", req, cb)
  }
}

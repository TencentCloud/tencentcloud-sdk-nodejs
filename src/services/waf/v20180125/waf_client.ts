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
  ModifyWebshellStatusRequest,
  WafRuleLimit,
  DescribeUserClbWafRegionsResponse,
  AddAntiFakeUrlRequest,
  ModifyIpAccessControlRequest,
  DescribeApiListVersionTwoResponse,
  DescribePeakValueResponse,
  ProductInfo,
  DescribeAntiLeakageItem,
  LoadBalancerPackageNew,
  CCRuleItem,
  DescribeCertificateVerifyResultResponse,
  ModifyUserSignatureRuleResponse,
  ModifyInstanceNameResponse,
  DescribeWafAutoDenyRulesRequest,
  GenerateDealsAndPayNewRequest,
  DeleteCustomWhiteRuleResponse,
  ModifyHostModeResponse,
  GetAttackDownloadRecordsRequest,
  MajorEventsPkg,
  DescribeDomainRulesRequest,
  DescribeScanIpRequest,
  DeleteAccessExportResponse,
  DescribeModuleStatusResponse,
  AccessKeyValueInfo,
  KVInt,
  AddAntiInfoLeakRulesRequest,
  DeleteAttackWhiteRuleResponse,
  DescribeWebshellStatusRequest,
  GetAttackHistogramResponse,
  FiltersItemNew,
  DeleteSpartaProtectionResponse,
  PiechartItem,
  DeleteHostResponse,
  ModifyApiAnalyzeStatusResponse,
  ModifyAttackWhiteRuleRequest,
  HostRecord,
  ModifyCustomRuleResponse,
  FreshAntiFakeUrlRequest,
  ModifyAreaBanStatusRequest,
  SpartaProtectionPort,
  PeakPointsItem,
  DescribeSessionRequest,
  DescribePolicyStatusRequest,
  DescribeAccessFastAnalysisRequest,
  DeleteIpAccessControlRequest,
  DescribeDomainCountInfoResponse,
  ModifyHostModeRequest,
  ModifyAntiInfoLeakRuleStatusRequest,
  DescribeCiphersDetailResponse,
  DescribeCustomRuleListRequest,
  DeleteIpAccessControlV2Response,
  PostAttackDownloadTaskResponse,
  DescribeAttackWhiteRuleRequest,
  StrategyForAntiInfoLeak,
  AddSpartaProtectionResponse,
  DescribeUserDomainInfoRequest,
  HybridPkg,
  IpAccessControlData,
  DescribeHostResponse,
  ModifyWafAutoDenyRulesResponse,
  DescribeUserSignatureRuleResponse,
  AccessValueInfo,
  Rule,
  Strategy,
  UpsertCCRuleResponse,
  DescribeHostRequest,
  AccessFullTextInfo,
  DeleteCustomRuleRequest,
  DescribeUserSignatureRuleV2Request,
  ModifyApiSecEventChangeRequest,
  JobDateTime,
  DescribeHostsRequest,
  ModifyCustomWhiteRuleStatusRequest,
  ModifyAreaBanRuleRequest,
  ClbWafRegionItem,
  DescribeFindDomainListRequest,
  ModifyInstanceElasticModeResponse,
  TargetEntity,
  DeleteHostRequest,
  DescribeDomainCountInfoRequest,
  DescribeCustomWhiteRuleResponse,
  ModifySpartaProtectionRequest,
  DeleteAttackDownloadRecordRequest,
  DescribeAntiFakeRulesRequest,
  DescribeVipInfoRequest,
  ImportIpAccessControlRequest,
  DescribeFindDomainListResponse,
  DeleteSessionResponse,
  DescribeAccessIndexResponse,
  ModifyUserSignatureRuleRequest,
  ModifyWafThreatenIntelligenceResponse,
  DescribeUserDomainInfoResponse,
  TLSVersion,
  LoadBalancer,
  CdcCluster,
  DescribeCustomRulesRspRuleListItem,
  ModifyAntiInfoLeakRulesResponse,
  QpsData,
  AddCustomWhiteRuleResponse,
  SwitchElasticModeRequest,
  HostDel,
  DescribeModuleStatusRequest,
  DeleteAttackWhiteRuleRequest,
  DescribeHostsResponse,
  DescribeAccessIndexRequest,
  DomainInfo,
  DescribeAreaBanAreasResponse,
  DescribeDomainsResponse,
  AddAntiFakeUrlResponse,
  SearchAttackLogResponse,
  ModifySpartaProtectionResponse,
  DescribeUserCdcClbWafRegionsResponse,
  SwitchElasticModeResponse,
  AccessRuleInfo,
  DescribeAreaBanRuleResponse,
  CCRuleLists,
  BatchOperateUserSignatureRulesResponse,
  ModifyAreaBanAreasResponse,
  ModifyAntiFakeUrlStatusRequest,
  ApiAsset,
  DescribeCCRuleListRequest,
  ResponseCode,
  ModifyAttackWhiteRuleResponse,
  SearchAccessLogResponse,
  DescribeAntiInfoLeakageRulesRequest,
  CreateHostResponse,
  ModifyBotStatusRequest,
  ModifyHostFlowModeRequest,
  CreateHostRequest,
  GetInstanceQpsLimitResponse,
  CreateDealsRequest,
  ModifyCustomWhiteRuleResponse,
  SearchItem,
  ApiPkg,
  DescribeAreaBanSupportAreasResponse,
  TigaMainClassMode,
  DescribeUserSignatureClassResponse,
  DescribePortsRequest,
  DescribeWafAutoDenyStatusResponse,
  AreaBanRule,
  DescribeTlsVersionRequest,
  DealData,
  DescribeDomainDetailsSaasRequest,
  ApiDataFilter,
  CreateDealsGoodsDetail,
  ApiDetailSampleHistory,
  WafThreatenIntelligenceDetails,
  DescribeDomainWhiteRulesRequest,
  DescribePeakPointsResponse,
  ModifyInstanceRenewFlagRequest,
  UserWhiteRuleItem,
  GoodsDetailNew,
  DescribeAreaBanSupportAreasRequest,
  GoodsDetail,
  DeleteIpAccessControlResponse,
  BatchIpAccessControlItem,
  ApiSecKey,
  UserWhiteRule,
  PortInfo,
  AddAttackWhiteRuleRequest,
  FraudPkg,
  DescribeDomainDetailsClbResponse,
  ExportAccessInfo,
  DescribeIpAccessControlRequest,
  ModifyWafThreatenIntelligenceRequest,
  DescribeApiListVersionTwoRequest,
  ModifyInstanceQpsLimitResponse,
  ReqUserRule,
  DescribeIpHitItemsRequest,
  GoodNews,
  ScanIpInfo,
  DescribeUserSignatureRuleRequest,
  ModifyAreaBanRuleResponse,
  DescribeUserClbWafRegionsRequest,
  AddAntiInfoLeakRulesResponse,
  DescribeWafThreatenIntelligenceResponse,
  AddDomainWhiteRuleRequest,
  DeleteAntiInfoLeakRuleResponse,
  IpHitItem,
  UserSignatureRule,
  DownloadAttackRecordInfo,
  DescribeRuleLimitResponse,
  CreateAccessExportResponse,
  ModifyHostRequest,
  DescribeHistogramResponse,
  ClbObject,
  ModifyUserLevelResponse,
  CreateAccessExportRequest,
  ModifyUserLevelRequest,
  DescribeIpHitItemsResponse,
  ModifyHostResponse,
  DescribeCertificateVerifyResultRequest,
  DescribeUserCdcClbWafRegionsRequest,
  DeleteAttackDownloadRecordResponse,
  CreateIpAccessControlRequest,
  DescribeFlowTrendRequest,
  DescribeWafAutoDenyStatusRequest,
  MiniPkg,
  DescribeAreaBanAreasRequest,
  AddDomainWhiteRuleResponse,
  DescribeIpAccessControlResponse,
  ModifyProtectionStatusRequest,
  CCRuleData,
  DescribeInstancesResponse,
  AccessRuleTagInfo,
  IpAccessControlItem,
  UpsertCCAutoStatusResponse,
  ModifyGenerateDealsResponse,
  UpsertSessionResponse,
  AccessLogItem,
  SwitchDomainRulesRequest,
  DeleteSessionRequest,
  SearchAttackLogRequest,
  AddCustomRuleResponse,
  DescribeFlowTrendResponse,
  CreateIpAccessControlResponse,
  UpsertIpAccessControlRequest,
  SessionItem,
  ModifyObjectRequest,
  DescribeAccessExportsRequest,
  DescribeCustomWhiteRuleRequest,
  DeleteAntiFakeUrlResponse,
  CreateAreaBanRuleRequest,
  Area,
  DescribeUserLevelResponse,
  IpAccessControlParam,
  DescribeCustomRuleListResponse,
  GetInstanceQpsLimitRequest,
  SessionData,
  DescribeAutoDenyIPResponse,
  SwitchDomainRulesResponse,
  ModifyInstanceQpsLimitRequest,
  FreshAntiFakeUrlResponse,
  DeleteSpartaProtectionRequest,
  UserDomainInfo,
  DescribeAntiFakeRulesResponse,
  CreateAreaBanRuleResponse,
  GetAttackTotalCountRequest,
  DeleteDomainWhiteRulesResponse,
  DescribeAttackOverviewResponse,
  AddAreaBanAreasRequest,
  DescribeCCRuleListResponse,
  DescribeCCAutoStatusRequest,
  DescribeDomainDetailsClbRequest,
  TimedJob,
  DomainPackageNew,
  ModifyDomainsCLSStatusResponse,
  ModifyBotStatusResponse,
  ModifyCustomRuleStatusResponse,
  DomainRuleId,
  DescribeProtectionModesRequest,
  PortItem,
  RuleType,
  DescribeCCAutoStatusResponse,
  ModifyCustomRuleStatusRequest,
  AccessHistogramItem,
  ModifySpartaProtectionModeRequest,
  DescribeAttackOverviewRequest,
  DescribeUserLevelRequest,
  InstanceInfo,
  DescribeUserSignatureRuleV2Response,
  HostStatus,
  ModifyAntiFakeUrlResponse,
  DescribeBatchIpAccessControlRequest,
  DescribeInstancesRequest,
  ModifyAntiInfoLeakRulesRequest,
  DescribeUserSignatureClassRequest,
  AccessLogInfo,
  CommonRspData,
  DescribeBatchIpAccessControlResponse,
  DescribeDomainDetailsSaasResponse,
  ModifyApiAnalyzeStatusRequest,
  ModifyAntiInfoLeakRuleStatusResponse,
  ModifyAreaBanStatusResponse,
  DeleteIpAccessControlV2Request,
  DescribeTopAttackDomainRequest,
  DescribeAccessFastAnalysisResponse,
  ModifyDomainIpv6StatusResponse,
  DescribeHostLimitResponse,
  DeleteAntiFakeUrlRequest,
  DescribeSpartaProtectionInfoRequest,
  CacheUrlItems,
  ModifyUserSignatureRuleV2Request,
  ModifyWebshellStatusResponse,
  GenerateDealsAndPayNewResponse,
  DescribeCCRuleRequest,
  BatchOperateUserSignatureRulesRequest,
  GetAttackDownloadRecordsResponse,
  DescribeAreaBanRuleRequest,
  DescribeApiDetailResponse,
  VipInfo,
  DescribeAccessHistogramResponse,
  DescribeTopAttackDomainResponse,
  Goods,
  UpsertIpAccessControlResponse,
  DescribeAccessHistogramRequest,
  DescribeWafThreatenIntelligenceRequest,
  DescribeAccessExportsResponse,
  DeleteCustomRuleResponse,
  UpstreamRule,
  DescribeHistogramRequest,
  DeleteCCRuleResponse,
  DescribeAreaBanAreasRsp,
  UpsertCCRuleRequest,
  ModifyProtectionStatusResponse,
  DescribeDomainsRequest,
  ModifyDomainPostActionRequest,
  BotPkg,
  UpsertCCAutoStatusRequest,
  DescribeProtectionModesResponse,
  DescribeWafAutoDenyRulesResponse,
  RefreshAccessCheckResultRequest,
  IpHitItemsData,
  WebshellStatus,
  DescribeSpartaProtectionInfoResponse,
  ModifyModuleStatusRequest,
  ModifyUserSignatureRuleV2Response,
  AccessLogItems,
  ModifyInstanceNameRequest,
  DescribePortsResponse,
  ModifyCustomRuleRequest,
  ModifyDomainWhiteRuleRequest,
  DescribePeakPointsRequest,
  ModifyHostFlowModeResponse,
  DescribeAntiInfoLeakRulesStrategyItem,
  ApiParameterType,
  BotStatPointItem,
  DescribeCiphersDetailRequest,
  CCRuleItems,
  ModifyDomainIpv6StatusRequest,
  DescribeAntiInfoLeakageRulesResponse,
  AddAreaBanAreasResponse,
  DescribeScanIpResponse,
  GetAttackHistogramRequest,
  RuleList,
  DescribeAttackTypeRequest,
  ModifyCustomWhiteRuleRequest,
  DeleteCustomWhiteRuleRequest,
  ModifyInstanceRenewFlagResponse,
  AddAttackWhiteRuleResponse,
  ImportIpAccessControlResponse,
  AddCustomWhiteRuleRequest,
  CronJob,
  DomainsPartInfo,
  DescribeAutoDenyIPRequest,
  AddSpartaProtectionRequest,
  PostAttackDownloadTaskRequest,
  ModifyAreaBanAreasRequest,
  ModifyModuleStatusResponse,
  AttackLogInfo,
  ModifyHostStatusResponse,
  QPSPackageNew,
  LogHistogramInfo,
  DeleteDomainWhiteRulesRequest,
  DescribeDomainVerifyResultRequest,
  CreateDealsGoods,
  ModifySpartaProtectionModeResponse,
  ModifyApiSecEventChangeResponse,
  ModifyCustomWhiteRuleStatusResponse,
  AccessFieldValueRatioInfo,
  BatchIpAccessControlData,
  DescribePeakValueRequest,
  BotQPS,
  DescribeApiDetailRequest,
  DescribePolicyStatusResponse,
  CdcRegion,
  GetAttackTotalCountResponse,
  DescribeDomainRulesResponse,
  CreateDealsResponse,
  TLSCiphers,
  DescribeDomainVerifyResultResponse,
  AddCustomRuleRequest,
  DeleteCCRuleRequest,
  DescribeAttackTypeResponse,
  DescribeCCRuleResponse,
  ModifyGenerateDealsRequest,
  ModifyDomainWhiteRuleResponse,
  ModifyObjectResponse,
  ModifyAntiFakeUrlStatusResponse,
  ModifyAntiFakeUrlRequest,
  ModifyInstanceElasticModeRequest,
  AutoDenyDetail,
  DescribeWebshellStatusResponse,
  FindAllDomainDetail,
  DeleteAntiInfoLeakRuleRequest,
  DescribeVipInfoResponse,
  ModifyIpAccessControlResponse,
  DescribeRuleLimitRequest,
  ModifyDomainPostActionResponse,
  ModifyDomainsCLSStatusRequest,
  DeleteAccessExportRequest,
  DescribeTlsVersionResponse,
  DescribeDomainWhiteRulesResponse,
  ModifyWafAutoDenyRulesRequest,
  DescribeSessionResponse,
  UpsertSessionRequest,
  DescribeHostLimitRequest,
  ClbDomainsInfo,
  DescribeObjectsResponse,
  SearchAccessLogRequest,
  MiniExtendPkg,
  DomainURI,
  DescribeAttackWhiteRuleResponse,
  AccessRuleKeyValueInfo,
  DescribeObjectsRequest,
  ModifyHostStatusRequest,
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
   * 查询指定域名TOP N攻击类型
   */
  async DescribeAttackType(
    req: DescribeAttackTypeRequest,
    cb?: (error: string, rep: DescribeAttackTypeResponse) => void
  ): Promise<DescribeAttackTypeResponse> {
    return this.request("DescribeAttackType", req, cb)
  }

  /**
   * 获取一个clbwaf域名详情
   */
  async DescribeDomainDetailsClb(
    req: DescribeDomainDetailsClbRequest,
    cb?: (error: string, rep: DescribeDomainDetailsClbResponse) => void
  ): Promise<DescribeDomainDetailsClbResponse> {
    return this.request("DescribeDomainDetailsClb", req, cb)
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
   * 本接口用于获取访问日志索引配置信息
   */
  async DescribeAccessIndex(
    req?: DescribeAccessIndexRequest,
    cb?: (error: string, rep: DescribeAccessIndexResponse) => void
  ): Promise<DescribeAccessIndexResponse> {
    return this.request("DescribeAccessIndex", req, cb)
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
   * 导入IP黑白名单
   */
  async ImportIpAccessControl(
    req: ImportIpAccessControlRequest,
    cb?: (error: string, rep: ImportIpAccessControlResponse) => void
  ): Promise<ImportIpAccessControlResponse> {
    return this.request("ImportIpAccessControl", req, cb)
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
   * Waf IP黑白名单Delete接口（建议使用DeleteIpAccessControlV2来替换当前接口）
   */
  async DeleteIpAccessControl(
    req: DeleteIpAccessControlRequest,
    cb?: (error: string, rep: DeleteIpAccessControlResponse) => void
  ): Promise<DeleteIpAccessControlResponse> {
    return this.request("DeleteIpAccessControl", req, cb)
  }

  /**
   * 获取地域封禁配置包括地域封禁开关，设置封禁的地区信息
   */
  async DescribeAreaBanAreas(
    req: DescribeAreaBanAreasRequest,
    cb?: (error: string, rep: DescribeAreaBanAreasResponse) => void
  ): Promise<DescribeAreaBanAreasResponse> {
    return this.request("DescribeAreaBanAreas", req, cb)
  }

  /**
   * 编辑自定义规则
   */
  async ModifyCustomRule(
    req: ModifyCustomRuleRequest,
    cb?: (error: string, rep: ModifyCustomRuleResponse) => void
  ): Promise<ModifyCustomRuleResponse> {
    return this.request("ModifyCustomRule", req, cb)
  }

  /**
   * 设置负载均衡型WAF防护域名的流量模式，切换镜像模式和清洗模式
   */
  async ModifyHostFlowMode(
    req: ModifyHostFlowModeRequest,
    cb?: (error: string, rep: ModifyHostFlowModeResponse) => void
  ): Promise<ModifyHostFlowModeResponse> {
    return this.request("ModifyHostFlowMode", req, cb)
  }

  /**
   * 设置套餐实例的弹性qps上限
   */
  async ModifyInstanceQpsLimit(
    req: ModifyInstanceQpsLimitRequest,
    cb?: (error: string, rep: ModifyInstanceQpsLimitResponse) => void
  ): Promise<ModifyInstanceQpsLimitResponse> {
    return this.request("ModifyInstanceQpsLimit", req, cb)
  }

  /**
   * api资产列表
   */
  async DescribeApiListVersionTwo(
    req: DescribeApiListVersionTwoRequest,
    cb?: (error: string, rep: DescribeApiListVersionTwoResponse) => void
  ): Promise<DescribeApiListVersionTwoResponse> {
    return this.request("DescribeApiListVersionTwo", req, cb)
  }

  /**
   * waf斯巴达-获取防护域名信息
   */
  async DescribeSpartaProtectionInfo(
    req: DescribeSpartaProtectionInfoRequest,
    cb?: (error: string, rep: DescribeSpartaProtectionInfoResponse) => void
  ): Promise<DescribeSpartaProtectionInfoResponse> {
    return this.request("DescribeSpartaProtectionInfo", req, cb)
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
   * 删除精准白名单规则
   */
  async DeleteCustomWhiteRule(
    req: DeleteCustomWhiteRuleRequest,
    cb?: (error: string, rep: DeleteCustomWhiteRuleResponse) => void
  ): Promise<DeleteCustomWhiteRuleResponse> {
    return this.request("DeleteCustomWhiteRule", req, cb)
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
   * 获取Api请求详情信息
   */
  async DescribeApiDetail(
    req: DescribeApiDetailRequest,
    cb?: (error: string, rep: DescribeApiDetailResponse) => void
  ): Promise<DescribeApiDetailResponse> {
    return this.request("DescribeApiDetail", req, cb)
  }

  /**
   * 查询扫描ip
   */
  async DescribeScanIp(
    req: DescribeScanIpRequest,
    cb?: (error: string, rep: DescribeScanIpResponse) => void
  ): Promise<DescribeScanIpResponse> {
    return this.request("DescribeScanIp", req, cb)
  }

  /**
   * 删除自定义规则
   */
  async DeleteCustomRule(
    req: DeleteCustomRuleRequest,
    cb?: (error: string, rep: DeleteCustomRuleResponse) => void
  ): Promise<DeleteCustomRuleResponse> {
    return this.request("DeleteCustomRule", req, cb)
  }

  /**
   * 编辑防篡改url
   */
  async ModifyAntiFakeUrl(
    req: ModifyAntiFakeUrlRequest,
    cb?: (error: string, rep: ModifyAntiFakeUrlResponse) => void
  ): Promise<ModifyAntiFakeUrlResponse> {
    return this.request("ModifyAntiFakeUrl", req, cb)
  }

  /**
   * 编辑SaaS型WAF域名配置
   */
  async ModifySpartaProtection(
    req: ModifySpartaProtectionRequest,
    cb?: (error: string, rep: ModifySpartaProtectionResponse) => void
  ): Promise<ModifySpartaProtectionResponse> {
    return this.request("ModifySpartaProtection", req, cb)
  }

  /**
   * 修改实例的QPS弹性计费开关
   */
  async ModifyInstanceElasticMode(
    req: ModifyInstanceElasticModeRequest,
    cb?: (error: string, rep: ModifyInstanceElasticModeResponse) => void
  ): Promise<ModifyInstanceElasticModeResponse> {
    return this.request("ModifyInstanceElasticMode", req, cb)
  }

  /**
   * api分析页面开关
   */
  async ModifyApiAnalyzeStatus(
    req: ModifyApiAnalyzeStatusRequest,
    cb?: (error: string, rep: ModifyApiAnalyzeStatusResponse) => void
  ): Promise<ModifyApiAnalyzeStatusResponse> {
    return this.request("ModifyApiAnalyzeStatus", req, cb)
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
   * 查询saas和clb的域名信息
   */
  async DescribeUserDomainInfo(
    req?: DescribeUserDomainInfoRequest,
    cb?: (error: string, rep: DescribeUserDomainInfoResponse) => void
  ): Promise<DescribeUserDomainInfoResponse> {
    return this.request("DescribeUserDomainInfo", req, cb)
  }

  /**
   * 查询Tiga引擎大类规则及其防护模式
   */
  async DescribeProtectionModes(
    req: DescribeProtectionModesRequest,
    cb?: (error: string, rep: DescribeProtectionModesResponse) => void
  ): Promise<DescribeProtectionModesResponse> {
    return this.request("DescribeProtectionModes", req, cb)
  }

  /**
   * 取得信息防泄漏规则列表
   */
  async DescribeAntiInfoLeakageRules(
    req: DescribeAntiInfoLeakageRulesRequest,
    cb?: (error: string, rep: DescribeAntiInfoLeakageRulesResponse) => void
  ): Promise<DescribeAntiInfoLeakageRulesResponse> {
    return this.request("DescribeAntiInfoLeakageRules", req, cb)
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
   * 描述WAF威胁情报封禁模块配置详情
   */
  async DescribeWafThreatenIntelligence(
    req?: DescribeWafThreatenIntelligenceRequest,
    cb?: (error: string, rep: DescribeWafThreatenIntelligenceResponse) => void
  ): Promise<DescribeWafThreatenIntelligenceResponse> {
    return this.request("DescribeWafThreatenIntelligence", req, cb)
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
   * 删除CC攻击的session设置
   */
  async DeleteSession(
    req: DeleteSessionRequest,
    cb?: (error: string, rep: DeleteSessionResponse) => void
  ): Promise<DeleteSessionResponse> {
    return this.request("DeleteSession", req, cb)
  }

  /**
   * 查询多种条件的聚类分析
   */
  async DescribeHistogram(
    req: DescribeHistogramRequest,
    cb?: (error: string, rep: DescribeHistogramResponse) => void
  ): Promise<DescribeHistogramResponse> {
    return this.request("DescribeHistogram", req, cb)
  }

  /**
   * 获取域名的webshell状态
   */
  async DescribeWebshellStatus(
    req: DescribeWebshellStatusRequest,
    cb?: (error: string, rep: DescribeWebshellStatusResponse) => void
  ): Promise<DescribeWebshellStatusResponse> {
    return this.request("DescribeWebshellStatus", req, cb)
  }

  /**
   * 计费资源购买、续费下单接口
   */
  async GenerateDealsAndPayNew(
    req: GenerateDealsAndPayNewRequest,
    cb?: (error: string, rep: GenerateDealsAndPayNewResponse) => void
  ): Promise<GenerateDealsAndPayNewResponse> {
    return this.request("GenerateDealsAndPayNew", req, cb)
  }

  /**
   * 信息防泄漏删除规则
   */
  async DeleteAntiInfoLeakRule(
    req: DeleteAntiInfoLeakRuleRequest,
    cb?: (error: string, rep: DeleteAntiInfoLeakRuleResponse) => void
  ): Promise<DeleteAntiInfoLeakRuleResponse> {
    return this.request("DeleteAntiInfoLeakRule", req, cb)
  }

  /**
   * 添加（编辑）地域封禁中的地域信息
   */
  async CreateAreaBanRule(
    req: CreateAreaBanRuleRequest,
    cb?: (error: string, rep: CreateAreaBanRuleResponse) => void
  ): Promise<CreateAreaBanRuleResponse> {
    return this.request("CreateAreaBanRule", req, cb)
  }

  /**
   * 修改地域封禁中的地域信息
   */
  async ModifyAreaBanAreas(
    req: ModifyAreaBanAreasRequest,
    cb?: (error: string, rep: ModifyAreaBanAreasResponse) => void
  ): Promise<ModifyAreaBanAreasResponse> {
    return this.request("ModifyAreaBanAreas", req, cb)
  }

  /**
   * 计费资源购买、续费下单接口
   */
  async CreateDeals(
    req: CreateDealsRequest,
    cb?: (error: string, rep: CreateDealsResponse) => void
  ): Promise<CreateDealsResponse> {
    return this.request("CreateDeals", req, cb)
  }

  /**
   * 获取WAF地域封禁支持的地域列表
   */
  async DescribeAreaBanSupportAreas(
    req?: DescribeAreaBanSupportAreasRequest,
    cb?: (error: string, rep: DescribeAreaBanSupportAreasResponse) => void
  ): Promise<DescribeAreaBanSupportAreasResponse> {
    return this.request("DescribeAreaBanSupportAreas", req, cb)
  }

  /**
   * 编辑SAAS型接入的紧急CC防护状态
   */
  async UpsertCCAutoStatus(
    req: UpsertCCAutoStatusRequest,
    cb?: (error: string, rep: UpsertCCAutoStatusResponse) => void
  ): Promise<UpsertCCAutoStatusResponse> {
    return this.request("UpsertCCAutoStatus", req, cb)
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
   * 添加信息防泄漏规则
   */
  async AddAntiInfoLeakRules(
    req: AddAntiInfoLeakRulesRequest,
    cb?: (error: string, rep: AddAntiInfoLeakRulesResponse) => void
  ): Promise<AddAntiInfoLeakRulesResponse> {
    return this.request("AddAntiInfoLeakRules", req, cb)
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
   * 查询各个waf基础安全模块的开关状态，看每个模块是否开启
   */
  async DescribeModuleStatus(
    req: DescribeModuleStatusRequest,
    cb?: (error: string, rep: DescribeModuleStatusResponse) => void
  ): Promise<DescribeModuleStatusResponse> {
    return this.request("DescribeModuleStatus", req, cb)
  }

  /**
   * Waf IP黑白名单Upsert接口（建议使用CreateIpAccessControl、ModifyIpAccessControl来替换当前接口）
   */
  async UpsertIpAccessControl(
    req: UpsertIpAccessControlRequest,
    cb?: (error: string, rep: UpsertIpAccessControlResponse) => void
  ): Promise<UpsertIpAccessControlResponse> {
    return this.request("UpsertIpAccessControl", req, cb)
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
   * 修改域名列表的访问日志开关
   */
  async ModifyDomainsCLSStatus(
    req: ModifyDomainsCLSStatusRequest,
    cb?: (error: string, rep: ModifyDomainsCLSStatusResponse) => void
  ): Promise<ModifyDomainsCLSStatusResponse> {
    return this.request("ModifyDomainsCLSStatus", req, cb)
  }

  /**
   * 获取用户特征规则列表
   */
  async DescribeUserSignatureRuleV2(
    req: DescribeUserSignatureRuleV2Request,
    cb?: (error: string, rep: DescribeUserSignatureRuleV2Response) => void
  ): Promise<DescribeUserSignatureRuleV2Response> {
    return this.request("DescribeUserSignatureRuleV2", req, cb)
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
   * 删除负载均衡型域名，支持批量操作。
   */
  async DeleteHost(
    req: DeleteHostRequest,
    cb?: (error: string, rep: DeleteHostResponse) => void
  ): Promise<DeleteHostResponse> {
    return this.request("DeleteHost", req, cb)
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
   * 查询业务和攻击概要趋势
   */
  async DescribePeakPoints(
    req: DescribePeakPointsRequest,
    cb?: (error: string, rep: DescribePeakPointsResponse) => void
  ): Promise<DescribePeakPointsResponse> {
    return this.request("DescribePeakPoints", req, cb)
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
   * 获取证书的检查结果
   */
  async DescribeCertificateVerifyResult(
    req: DescribeCertificateVerifyResultRequest,
    cb?: (error: string, rep: DescribeCertificateVerifyResultResponse) => void
  ): Promise<DescribeCertificateVerifyResultResponse> {
    return this.request("DescribeCertificateVerifyResult", req, cb)
  }

  /**
   * Waf IP黑白名单最新版本删除接口
   */
  async DeleteIpAccessControlV2(
    req: DeleteIpAccessControlV2Request,
    cb?: (error: string, rep: DeleteIpAccessControlV2Response) => void
  ): Promise<DeleteIpAccessControlV2Response> {
    return this.request("DeleteIpAccessControlV2", req, cb)
  }

  /**
   * 切换弹性的开关
   */
  async SwitchElasticMode(
    req: SwitchElasticModeRequest,
    cb?: (error: string, rep: SwitchElasticModeResponse) => void
  ): Promise<SwitchElasticModeResponse> {
    return this.request("SwitchElasticMode", req, cb)
  }

  /**
   * 修改实例的自动续费开关
   */
  async ModifyInstanceRenewFlag(
    req: ModifyInstanceRenewFlagRequest,
    cb?: (error: string, rep: ModifyInstanceRenewFlagResponse) => void
  ): Promise<ModifyInstanceRenewFlagResponse> {
    return this.request("ModifyInstanceRenewFlag", req, cb)
  }

  /**
   * 获取用户防护规则等级
   */
  async DescribeUserLevel(
    req: DescribeUserLevelRequest,
    cb?: (error: string, rep: DescribeUserLevelResponse) => void
  ): Promise<DescribeUserLevelResponse> {
    return this.request("DescribeUserLevel", req, cb)
  }

  /**
   * Waf  CC V2 Query接口
   */
  async DescribeCCRule(
    req: DescribeCCRuleRequest,
    cb?: (error: string, rep: DescribeCCRuleResponse) => void
  ): Promise<DescribeCCRuleResponse> {
    return this.request("DescribeCCRule", req, cb)
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
   * 设置waf防护状态
   */
  async ModifySpartaProtectionMode(
    req: ModifySpartaProtectionModeRequest,
    cb?: (error: string, rep: ModifySpartaProtectionModeResponse) => void
  ): Promise<ModifySpartaProtectionModeResponse> {
    return this.request("ModifySpartaProtectionMode", req, cb)
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
   * 获取防护配置中的访问控制策略列表
   */
  async DescribeCustomRuleList(
    req: DescribeCustomRuleListRequest,
    cb?: (error: string, rep: DescribeCustomRuleListResponse) => void
  ): Promise<DescribeCustomRuleListResponse> {
    return this.request("DescribeCustomRuleList", req, cb)
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
   * 获取用户规则白名单列表
   */
  async DescribeAttackWhiteRule(
    req: DescribeAttackWhiteRuleRequest,
    cb?: (error: string, rep: DescribeAttackWhiteRuleResponse) => void
  ): Promise<DescribeAttackWhiteRuleResponse> {
    return this.request("DescribeAttackWhiteRule", req, cb)
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
   * 添加SaaS型WAF防护域名
   */
  async AddSpartaProtection(
    req: AddSpartaProtectionRequest,
    cb?: (error: string, rep: AddSpartaProtectionResponse) => void
  ): Promise<AddSpartaProtectionResponse> {
    return this.request("AddSpartaProtection", req, cb)
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
   * Waf 会话定义查询接口
   */
  async DescribeSession(
    req: DescribeSessionRequest,
    cb?: (error: string, rep: DescribeSessionResponse) => void
  ): Promise<DescribeSessionResponse> {
    return this.request("DescribeSession", req, cb)
  }

  /**
   * 查询Top5的攻击域名
   */
  async DescribeTopAttackDomain(
    req: DescribeTopAttackDomainRequest,
    cb?: (error: string, rep: DescribeTopAttackDomainResponse) => void
  ): Promise<DescribeTopAttackDomainResponse> {
    return this.request("DescribeTopAttackDomain", req, cb)
  }

  /**
   * 编辑负载均衡型WAF防护域名配置
   */
  async ModifyHost(
    req: ModifyHostRequest,
    cb?: (error: string, rep: ModifyHostResponse) => void
  ): Promise<ModifyHostResponse> {
    return this.request("ModifyHost", req, cb)
  }

  /**
   * 查询Tiga引擎规则类型及状态
   */
  async DescribeUserSignatureClass(
    req: DescribeUserSignatureClassRequest,
    cb?: (error: string, rep: DescribeUserSignatureClassResponse) => void
  ): Promise<DescribeUserSignatureClassResponse> {
    return this.request("DescribeUserSignatureClass", req, cb)
  }

  /**
   * Bot_V2 bot总开关更新
   */
  async ModifyBotStatus(
    req: ModifyBotStatusRequest,
    cb?: (error: string, rep: ModifyBotStatusResponse) => void
  ): Promise<ModifyBotStatusResponse> {
    return this.request("ModifyBotStatus", req, cb)
  }

  /**
   * 开启、关闭WAF开关
   */
  async ModifyProtectionStatus(
    req: ModifyProtectionStatusRequest,
    cb?: (error: string, rep: ModifyProtectionStatusResponse) => void
  ): Promise<ModifyProtectionStatusResponse> {
    return this.request("ModifyProtectionStatus", req, cb)
  }

  /**
   * Saas型WAF接入查询加密套件信息
   */
  async DescribeCiphersDetail(
    req?: DescribeCiphersDetailRequest,
    cb?: (error: string, rep: DescribeCiphersDetailResponse) => void
  ): Promise<DescribeCiphersDetailResponse> {
    return this.request("DescribeCiphersDetail", req, cb)
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
   * Waf IP黑白名单编辑接口
   */
  async ModifyIpAccessControl(
    req: ModifyIpAccessControlRequest,
    cb?: (error: string, rep: ModifyIpAccessControlResponse) => void
  ): Promise<ModifyIpAccessControlResponse> {
    return this.request("ModifyIpAccessControl", req, cb)
  }

  /**
   * 获取防篡改url
   */
  async DescribeAntiFakeRules(
    req: DescribeAntiFakeRulesRequest,
    cb?: (error: string, rep: DescribeAntiFakeRulesResponse) => void
  ): Promise<DescribeAntiFakeRulesResponse> {
    return this.request("DescribeAntiFakeRules", req, cb)
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
   * 切换防篡改开关
   */
  async ModifyAntiFakeUrlStatus(
    req: ModifyAntiFakeUrlStatusRequest,
    cb?: (error: string, rep: ModifyAntiFakeUrlStatusResponse) => void
  ): Promise<ModifyAntiFakeUrlStatusResponse> {
    return this.request("ModifyAntiFakeUrlStatus", req, cb)
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
   * 查询SaaS型WAF支持的TLS版本
   */
  async DescribeTlsVersion(
    req?: DescribeTlsVersionRequest,
    cb?: (error: string, rep: DescribeTlsVersionResponse) => void
  ): Promise<DescribeTlsVersionResponse> {
    return this.request("DescribeTlsVersion", req, cb)
  }

  /**
   * 编辑信息防泄漏规则
   */
  async ModifyAntiInfoLeakRules(
    req: ModifyAntiInfoLeakRulesRequest,
    cb?: (error: string, rep: ModifyAntiInfoLeakRulesResponse) => void
  ): Promise<ModifyAntiInfoLeakRulesResponse> {
    return this.request("ModifyAntiInfoLeakRules", req, cb)
  }

  /**
   * Waf IP黑白名单新增接口
   */
  async CreateIpAccessControl(
    req: CreateIpAccessControlRequest,
    cb?: (error: string, rep: CreateIpAccessControlResponse) => void
  ): Promise<CreateIpAccessControlResponse> {
    return this.request("CreateIpAccessControl", req, cb)
  }

  /**
   * 添加防篡改url
   */
  async AddAntiFakeUrl(
    req: AddAntiFakeUrlRequest,
    cb?: (error: string, rep: AddAntiFakeUrlResponse) => void
  ): Promise<AddAntiFakeUrlResponse> {
    return this.request("AddAntiFakeUrl", req, cb)
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
   * 查看防护对象列表
   */
  async DescribeObjects(
    req: DescribeObjectsRequest,
    cb?: (error: string, rep: DescribeObjectsResponse) => void
  ): Promise<DescribeObjectsResponse> {
    return this.request("DescribeObjects", req, cb)
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
   * 开启或禁用访问控制（自定义策略）
   */
  async ModifyCustomRuleStatus(
    req: ModifyCustomRuleStatusRequest,
    cb?: (error: string, rep: ModifyCustomRuleStatusResponse) => void
  ): Promise<ModifyCustomRuleStatusResponse> {
    return this.request("ModifyCustomRuleStatus", req, cb)
  }

  /**
   * 供用户控制台调用，删除Tiga规则引擎白名单。
   */
  async DeleteAttackWhiteRule(
    req: DeleteAttackWhiteRuleRequest,
    cb?: (error: string, rep: DeleteAttackWhiteRuleResponse) => void
  ): Promise<DeleteAttackWhiteRuleResponse> {
    return this.request("DeleteAttackWhiteRule", req, cb)
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
   * 供用户控制台调用，增加Tiga规则引擎白名单。
   */
  async AddAttackWhiteRule(
    req: AddAttackWhiteRuleRequest,
    cb?: (error: string, rep: AddAttackWhiteRuleResponse) => void
  ): Promise<AddAttackWhiteRuleResponse> {
    return this.request("AddAttackWhiteRule", req, cb)
  }

  /**
   * 添加地域封禁中的地域信息
   */
  async AddAreaBanAreas(
    req: AddAreaBanAreasRequest,
    cb?: (error: string, rep: AddAreaBanAreasResponse) => void
  ): Promise<AddAreaBanAreasResponse> {
    return this.request("AddAreaBanAreas", req, cb)
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
   * SaaS型WAF删除防护域名
   */
  async DeleteSpartaProtection(
    req: DeleteSpartaProtectionRequest,
    cb?: (error: string, rep: DeleteSpartaProtectionResponse) => void
  ): Promise<DeleteSpartaProtectionResponse> {
    return this.request("DeleteSpartaProtection", req, cb)
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
   * Waf 批量防护IP黑白名单查询
   */
  async DescribeBatchIpAccessControl(
    req: DescribeBatchIpAccessControlRequest,
    cb?: (error: string, rep: DescribeBatchIpAccessControlResponse) => void
  ): Promise<DescribeBatchIpAccessControlResponse> {
    return this.request("DescribeBatchIpAccessControl", req, cb)
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
   * 增加访问控制（自定义策略）
   */
  async AddCustomRule(
    req: AddCustomRuleRequest,
    cb?: (error: string, rep: AddCustomRuleResponse) => void
  ): Promise<AddCustomRuleResponse> {
    return this.request("AddCustomRule", req, cb)
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
   * 设置域名的webshell状态。
   */
  async ModifyWebshellStatus(
    req: ModifyWebshellStatusRequest,
    cb?: (error: string, rep: ModifyWebshellStatusResponse) => void
  ): Promise<ModifyWebshellStatusResponse> {
    return this.request("ModifyWebshellStatus", req, cb)
  }

  /**
   * 信息防泄漏切换规则开关
   */
  async ModifyAntiInfoLeakRuleStatus(
    req: ModifyAntiInfoLeakRuleStatusRequest,
    cb?: (error: string, rep: ModifyAntiInfoLeakRuleStatusResponse) => void
  ): Promise<ModifyAntiInfoLeakRuleStatusResponse> {
    return this.request("ModifyAntiInfoLeakRuleStatus", req, cb)
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
   * 创建搜索下载攻击日志任务，使用CLS新版本的搜索下载getlog接口
   */
  async PostAttackDownloadTask(
    req: PostAttackDownloadTaskRequest,
    cb?: (error: string, rep: PostAttackDownloadTaskResponse) => void
  ): Promise<PostAttackDownloadTaskResponse> {
    return this.request("PostAttackDownloadTask", req, cb)
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
   * 修改用户防护规则，开启关闭具体的某条规则
   */
  async ModifyUserSignatureRuleV2(
    req: ModifyUserSignatureRuleV2Request,
    cb?: (error: string, rep: ModifyUserSignatureRuleV2Response) => void
  ): Promise<ModifyUserSignatureRuleV2Response> {
    return this.request("ModifyUserSignatureRuleV2", req, cb)
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
   * 添加域名的首先验证是否购买了套餐，是否没有达到购买套餐的限制，域名是否已经添加
   */
  async DescribeHostLimit(
    req: DescribeHostLimitRequest,
    cb?: (error: string, rep: DescribeHostLimitResponse) => void
  ): Promise<DescribeHostLimitResponse> {
    return this.request("DescribeHostLimit", req, cb)
  }

  /**
   * 获取套餐实例的弹性qps上限
   */
  async GetInstanceQpsLimit(
    req: GetInstanceQpsLimitRequest,
    cb?: (error: string, rep: GetInstanceQpsLimitResponse) => void
  ): Promise<GetInstanceQpsLimitResponse> {
    return this.request("GetInstanceQpsLimit", req, cb)
  }

  /**
   * 获取地域封禁规则配置
   */
  async DescribeAreaBanRule(
    req: DescribeAreaBanRuleRequest,
    cb?: (error: string, rep: DescribeAreaBanRuleResponse) => void
  ): Promise<DescribeAreaBanRuleResponse> {
    return this.request("DescribeAreaBanRule", req, cb)
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
   * 获取添加域名操作的结果
   */
  async DescribeDomainVerifyResult(
    req: DescribeDomainVerifyResultRequest,
    cb?: (error: string, rep: DescribeDomainVerifyResultResponse) => void
  ): Promise<DescribeDomainVerifyResultResponse> {
    return this.request("DescribeDomainVerifyResult", req, cb)
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
   * 查询用户所有实例的详细信息
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 供用户控制台调用，修改Tiga规则引擎白名单。
   */
  async ModifyAttackWhiteRule(
    req: ModifyAttackWhiteRuleRequest,
    cb?: (error: string, rep: ModifyAttackWhiteRuleResponse) => void
  ): Promise<ModifyAttackWhiteRuleResponse> {
    return this.request("ModifyAttackWhiteRule", req, cb)
  }

  /**
   * 查询单个saaswaf域名详情
   */
  async DescribeDomainDetailsSaas(
    req: DescribeDomainDetailsSaasRequest,
    cb?: (error: string, rep: DescribeDomainDetailsSaasResponse) => void
  ): Promise<DescribeDomainDetailsSaasResponse> {
    return this.request("DescribeDomainDetailsSaas", req, cb)
  }

  /**
   * 修改用户防护规则，开启关闭具体的某条规则
   */
  async ModifyUserSignatureRule(
    req: ModifyUserSignatureRuleRequest,
    cb?: (error: string, rep: ModifyUserSignatureRuleResponse) => void
  ): Promise<ModifyUserSignatureRuleResponse> {
    return this.request("ModifyUserSignatureRule", req, cb)
  }

  /**
   * 提供给clb等使用的waf实例下单接口，目前只支持clb旗舰版实例的下单，该接口会进行入参校验，然后调用是否为收购用户，然后调用计费接口下单。目前只支持预付费下单，计费侧接口：https://tcb.woa.com/magical-brush/docs/754661947
   */
  async ModifyGenerateDeals(
    req: ModifyGenerateDealsRequest,
    cb?: (error: string, rep: ModifyGenerateDealsResponse) => void
  ): Promise<ModifyGenerateDealsResponse> {
    return this.request("ModifyGenerateDeals", req, cb)
  }

  /**
   * 修改实例的名称
   */
  async ModifyInstanceName(
    req: ModifyInstanceNameRequest,
    cb?: (error: string, rep: ModifyInstanceNameResponse) => void
  ): Promise<ModifyInstanceNameResponse> {
    return this.request("ModifyInstanceName", req, cb)
  }

  /**
   * 设置某个domain下基础安全模块的开关
   */
  async ModifyModuleStatus(
    req: ModifyModuleStatusRequest,
    cb?: (error: string, rep: ModifyModuleStatusResponse) => void
  ): Promise<ModifyModuleStatusResponse> {
    return this.request("ModifyModuleStatus", req, cb)
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
   * 添加（编辑）地域封禁中的地域信息
   */
  async ModifyAreaBanRule(
    req: ModifyAreaBanRuleRequest,
    cb?: (error: string, rep: ModifyAreaBanRuleResponse) => void
  ): Promise<ModifyAreaBanRuleResponse> {
    return this.request("ModifyAreaBanRule", req, cb)
  }

  /**
     * 废弃接口

描述WAF自动封禁模块详情
     */
  async DescribeWafAutoDenyStatus(
    req?: DescribeWafAutoDenyStatusRequest,
    cb?: (error: string, rep: DescribeWafAutoDenyStatusResponse) => void
  ): Promise<DescribeWafAutoDenyStatusResponse> {
    return this.request("DescribeWafAutoDenyStatus", req, cb)
  }

  /**
   * 开启或禁用精准白名单
   */
  async ModifyCustomWhiteRuleStatus(
    req: ModifyCustomWhiteRuleStatusRequest,
    cb?: (error: string, rep: ModifyCustomWhiteRuleStatusResponse) => void
  ): Promise<ModifyCustomWhiteRuleStatusResponse> {
    return this.request("ModifyCustomWhiteRuleStatus", req, cb)
  }

  /**
   * 获取Saas型WAF防护端口列表
   */
  async DescribePorts(
    req: DescribePortsRequest,
    cb?: (error: string, rep: DescribePortsResponse) => void
  ): Promise<DescribePortsResponse> {
    return this.request("DescribePorts", req, cb)
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
   * 修改域名投递状态
   */
  async ModifyDomainPostAction(
    req: ModifyDomainPostActionRequest,
    cb?: (error: string, rep: ModifyDomainPostActionResponse) => void
  ): Promise<ModifyDomainPostActionResponse> {
    return this.request("ModifyDomainPostAction", req, cb)
  }

  /**
   * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
   */
  async DescribeUserClbWafRegions(
    req: DescribeUserClbWafRegionsRequest,
    cb?: (error: string, rep: DescribeUserClbWafRegionsResponse) => void
  ): Promise<DescribeUserClbWafRegionsResponse> {
    return this.request("DescribeUserClbWafRegions", req, cb)
  }

  /**
   * Waf  CC V2 Upsert接口
   */
  async UpsertCCRule(
    req: UpsertCCRuleRequest,
    cb?: (error: string, rep: UpsertCCRuleResponse) => void
  ): Promise<UpsertCCRuleResponse> {
    return this.request("UpsertCCRule", req, cb)
  }

  /**
   * 修改防护对象
   */
  async ModifyObject(
    req: ModifyObjectRequest,
    cb?: (error: string, rep: ModifyObjectResponse) => void
  ): Promise<ModifyObjectResponse> {
    return this.request("ModifyObject", req, cb)
  }

  /**
   * 删除防篡改url
   */
  async DeleteAntiFakeUrl(
    req: DeleteAntiFakeUrlRequest,
    cb?: (error: string, rep: DeleteAntiFakeUrlResponse) => void
  ): Promise<DeleteAntiFakeUrlResponse> {
    return this.request("DeleteAntiFakeUrl", req, cb)
  }

  /**
   * 根据多条件查询CC规则
   */
  async DescribeCCRuleList(
    req: DescribeCCRuleListRequest,
    cb?: (error: string, rep: DescribeCCRuleListResponse) => void
  ): Promise<DescribeCCRuleListResponse> {
    return this.request("DescribeCCRuleList", req, cb)
  }

  /**
   * Waf  CC V2 Delete接口
   */
  async DeleteCCRule(
    req: DeleteCCRuleRequest,
    cb?: (error: string, rep: DeleteCCRuleResponse) => void
  ): Promise<DeleteCCRuleResponse> {
    return this.request("DeleteCCRule", req, cb)
  }

  /**
   * clb-waf中添加防护域名
   */
  async CreateHost(
    req: CreateHostRequest,
    cb?: (error: string, rep: CreateHostResponse) => void
  ): Promise<CreateHostResponse> {
    return this.request("CreateHost", req, cb)
  }

  /**
   * Waf  会话定义 Upsert接口
   */
  async UpsertSession(
    req: UpsertSessionRequest,
    cb?: (error: string, rep: UpsertSessionResponse) => void
  ): Promise<UpsertSessionResponse> {
    return this.request("UpsertSession", req, cb)
  }

  /**
   * 获取SAAS型接入的紧急CC防护状态
   */
  async DescribeCCAutoStatus(
    req: DescribeCCAutoStatusRequest,
    cb?: (error: string, rep: DescribeCCAutoStatusResponse) => void
  ): Promise<DescribeCCAutoStatusResponse> {
    return this.request("DescribeCCAutoStatus", req, cb)
  }

  /**
   * 获取用户特征规则列表
   */
  async DescribeUserSignatureRule(
    req: DescribeUserSignatureRuleRequest,
    cb?: (error: string, rep: DescribeUserSignatureRuleResponse) => void
  ): Promise<DescribeUserSignatureRuleResponse> {
    return this.request("DescribeUserSignatureRule", req, cb)
  }

  /**
   * 批量操作tiga子规则
   */
  async BatchOperateUserSignatureRules(
    req: BatchOperateUserSignatureRulesRequest,
    cb?: (error: string, rep: BatchOperateUserSignatureRulesResponse) => void
  ): Promise<BatchOperateUserSignatureRulesResponse> {
    return this.request("BatchOperateUserSignatureRules", req, cb)
  }

  /**
   * 刷新防篡改url
   */
  async FreshAntiFakeUrl(
    req: FreshAntiFakeUrlRequest,
    cb?: (error: string, rep: FreshAntiFakeUrlResponse) => void
  ): Promise<FreshAntiFakeUrlResponse> {
    return this.request("FreshAntiFakeUrl", req, cb)
  }

  /**
   * 拉取域名的防护规则列表
   */
  async DescribeDomainRules(
    req: DescribeDomainRulesRequest,
    cb?: (error: string, rep: DescribeDomainRulesResponse) => void
  ): Promise<DescribeDomainRulesResponse> {
    return this.request("DescribeDomainRules", req, cb)
  }

  /**
   * api安全状态变更接口
   */
  async ModifyApiSecEventChange(
    req: ModifyApiSecEventChangeRequest,
    cb?: (error: string, rep: ModifyApiSecEventChangeResponse) => void
  ): Promise<ModifyApiSecEventChangeResponse> {
    return this.request("ModifyApiSecEventChange", req, cb)
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
   * 切换ipv6开关
   */
  async ModifyDomainIpv6Status(
    req: ModifyDomainIpv6StatusRequest,
    cb?: (error: string, rep: ModifyDomainIpv6StatusResponse) => void
  ): Promise<ModifyDomainIpv6StatusResponse> {
    return this.request("ModifyDomainIpv6Status", req, cb)
  }

  /**
   * 修改用户防护规则等级
   */
  async ModifyUserLevel(
    req: ModifyUserLevelRequest,
    cb?: (error: string, rep: ModifyUserLevelResponse) => void
  ): Promise<ModifyUserLevelResponse> {
    return this.request("ModifyUserLevel", req, cb)
  }
}

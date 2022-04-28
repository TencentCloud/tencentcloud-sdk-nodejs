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
  DescribeWafDataRequest,
  DescribeCdnDomainLogsResponse,
  ScdnTopUrlData,
  ScdnLogTaskDetail,
  AdvancedAuthentication,
  AdvanceHttps,
  Revalidate,
  ResourceData,
  UrlRecord,
  UpdatePayTypeResponse,
  DescribePushQuotaResponse,
  DescribePurgeQuotaResponse,
  ScdnSevenLayerRules,
  Authentication,
  DescribeScdnTopDataResponse,
  ImageOptimization,
  Https,
  RangeOriginPullRule,
  RuleCache,
  DescribeCdnDomainLogsRequest,
  CcTopData,
  CreateClsLogTopicResponse,
  RemoteAuthenticationRule,
  Compression,
  PurgePathCacheResponse,
  RangeOriginPull,
  DomainFilter,
  DescribeCdnOriginIpResponse,
  UpdatePayTypeRequest,
  SpecificConfig,
  DescribeTopDataRequest,
  DescribeScdnBotDataResponse,
  RequestHeader,
  DescribePurgeQuotaRequest,
  DisableCachesResponse,
  Referer,
  StartScdnDomainRequest,
  PostSize,
  ListTopWafDataRequest,
  DescribeCdnDataResponse,
  DescribeIpStatusResponse,
  UpdateImageConfigResponse,
  ScdnDomain,
  CacheConfigNoCache,
  ListTopDDoSDataRequest,
  DescribeDistrictIspDataRequest,
  DeleteCdnDomainRequest,
  BotRecord,
  DescribeEventLogDataRequest,
  ForceRedirect,
  ListScdnTopBotDataRequest,
  PathRule,
  ListTopDataRequest,
  ListClsTopicDomainsRequest,
  DescribeDomainsResponse,
  DescribePayTypeRequest,
  DescribeCcDataResponse,
  UpdateImageConfigRequest,
  DisableCachesRequest,
  DescribeCertDomainsRequest,
  StartCdnDomainResponse,
  UrlRedirect,
  CompressionRule,
  GuetzliAdapter,
  UpdateScdnDomainResponse,
  Origin,
  ViolationUrl,
  ScdnIpStrategyFilter,
  DescribeDomainsConfigRequest,
  TopData,
  EnableCachesRequest,
  ClsLogIpData,
  CreateScdnDomainRequest,
  HeaderKey,
  DescribeBillingDataRequest,
  SimpleCache,
  DeleteClsLogTopicRequest,
  ListTopBotDataRequest,
  ListTopCcDataRequest,
  ReportData,
  DeleteScdnDomainRequest,
  DescribeDistrictIspDataResponse,
  DescribeCdnOriginIpRequest,
  TopDetailDataMore,
  TopicInfo,
  PushUrlsCacheRequest,
  AdvancedCCRules,
  DescribeDomainsConfigResponse,
  DescribeDiagnoseReportRequest,
  ResourceBillingData,
  BriefDomain,
  TimestampData,
  TpgAdapter,
  CacheConfigCache,
  ListScdnTopBotDataResponse,
  DescribeReportDataResponse,
  DisableClsLogTopicRequest,
  RuleCacheConfig,
  ListClsTopicDomainsResponse,
  TrafficPackage,
  BotCookie,
  CreateScdnFailedLogTaskResponse,
  Ipv6,
  BotStats,
  DescribeTrafficPackagesRequest,
  StatusCodeCache,
  DescribeIpVisitResponse,
  EnableClsLogTopicResponse,
  ModifyPurgeFetchTaskStatusRequest,
  ListClsLogTopicsResponse,
  OverseaConfig,
  AddCdnDomainRequest,
  UserAgentFilterRule,
  ListTopBotDataResponse,
  UpdateDomainConfigRequest,
  Tag,
  CacheConfigFollowOrigin,
  MaxAgeRule,
  AdvancedAuthenticationTypeE,
  AdvancedAuthenticationTypeD,
  AdvancedAuthenticationTypeF,
  AdvancedAuthenticationTypeA,
  AdvancedCache,
  AdvancedAuthenticationTypeC,
  AdvancedAuthenticationTypeB,
  SearchClsLogResponse,
  CreateScdnLogTaskResponse,
  ScdnEventLogConditions,
  QnPrivateAccess,
  WebSocket,
  MapInfo,
  DescribeCertDomainsResponse,
  ScdnBotConfig,
  DuplicateDomainConfigRequest,
  AuthenticationTypeD,
  AuthenticationTypeC,
  AuthenticationTypeB,
  AuthenticationTypeA,
  DescribeScdnIpStrategyResponse,
  ResponseHeader,
  OriginAuthenticationTypeA,
  SecurityConfig,
  DescribePushTasksResponse,
  ResourceOriginData,
  DDoSAttackIPTopData,
  AddCdnDomainResponse,
  ListScdnDomainsResponse,
  VerifyDomainRecordResponse,
  DomainAreaConfig,
  ListScdnDomainsRequest,
  ServerCert,
  AccessControlRule,
  HttpHeaderPathRule,
  CreateScdnLogTaskRequest,
  Quota,
  DistrictIspInfo,
  ScdnAclRule,
  SimpleCacheRule,
  ModifyPurgeFetchTaskStatusResponse,
  DisableClsLogTopicResponse,
  Hsts,
  DescribeIpStatusRequest,
  DetailDomain,
  RuleEngine,
  GetDisableRecordsResponse,
  Ipv6Access,
  HeuristicCache,
  DuplicateDomainConfigResponse,
  CdnIpHistory,
  ErrorPageRule,
  UpdateScdnDomainRequest,
  BotSortBy,
  ManageClsTopicDomainsRequest,
  ListDiagnoseReportRequest,
  OriginAuthentication,
  DomainBotCount,
  CreateScdnFailedLogTaskRequest,
  Cache,
  DiagnoseData,
  DescribeOriginDataRequest,
  DescribeScdnBotRecordsRequest,
  FollowRedirect,
  ListScdnLogTasksRequest,
  ListTopCcDataResponse,
  PathBasedOriginRule,
  IpStatus,
  MainlandConfig,
  DescribeReportDataRequest,
  DescribePushTasksRequest,
  DescribeDDoSDataRequest,
  DescribeUrlViolationsRequest,
  RefererRule,
  DescribeScdnIpStrategyRequest,
  ScdnCCRules,
  IpFreqLimit,
  EnableClsLogTopicRequest,
  CreateDiagnoseUrlResponse,
  CreateClsLogTopicRequest,
  ScdnAclConfig,
  CacheOptResult,
  DescribeScdnTopDataRequest,
  ListTopClsLogDataRequest,
  CreateVerifyRecordResponse,
  StopCdnDomainRequest,
  DescribeMapInfoResponse,
  DescribeTrafficPackagesResponse,
  DescribeMapInfoRequest,
  EnableCachesResponse,
  ScdnIpStrategy,
  RuleQueryString,
  AdvancedScdnAclRule,
  DescribeIpVisitRequest,
  HttpHeaderRule,
  ScdnTopDomainData,
  CreateScdnDomainResponse,
  ScdnTopData,
  ScdnConfig,
  DomainLog,
  StopScdnDomainResponse,
  GetDisableRecordsRequest,
  CreateDiagnoseUrlRequest,
  PurgeUrlsCacheResponse,
  StartScdnDomainResponse,
  BotJavaScript,
  DeleteClsLogTopicResponse,
  DescribeBillingDataResponse,
  BotStatisticsCount,
  EventLogStatsData,
  SchemeKey,
  StatisticItem,
  DescribeImageConfigRequest,
  DescribeCdnIpResponse,
  AdvanceCacheRule,
  DescribeCcDataRequest,
  AccessControl,
  ListScdnLogTasksResponse,
  ScdnErrorPage,
  CacheKey,
  ScdnDdosConfig,
  DownstreamCapping,
  CookieKey,
  ListTopClsLogDataResponse,
  StatusCodeCacheRule,
  RemoteAuthentication,
  ExtraLogset,
  KeyRule,
  ClientCert,
  CappingRule,
  ShareCname,
  DeleteScdnDomainResponse,
  ListClsLogTopicsRequest,
  Seo,
  BandwidthAlert,
  CreateVerifyRecordRequest,
  ClsLogObject,
  WebpAdapter,
  DescribeWafDataResponse,
  RegionMapRelation,
  PurgePathCacheRequest,
  DescribeDiagnoseReportResponse,
  DescribeCdnIpRequest,
  CdnData,
  PurgeUrlsCacheRequest,
  DDoSAttackBandwidthData,
  OriginPullOptimization,
  ErrorPage,
  StartCdnDomainRequest,
  PushTask,
  CreateEdgePackTaskResponse,
  BotStatsDetailData,
  DescribeScdnConfigResponse,
  DescribePushQuotaRequest,
  TopDetailData,
  ResponseHeaderCache,
  ListTopWafDataResponse,
  DescribePayTypeResponse,
  Sort,
  ClientInfo,
  DescribeEventLogDataResponse,
  HwPrivateAccess,
  CacheConfig,
  PushUrlsCacheResponse,
  OriginCombine,
  QueryStringKey,
  ListTopDataResponse,
  MaxAge,
  UpdateDomainConfigResponse,
  WafSubRuleStatus,
  OssPrivateAccess,
  LogSetInfo,
  ListDiagnoseReportResponse,
  SearchClsLogRequest,
  AdvanceConfig,
  AwsPrivateAccess,
  AdvancedScdnAclGroup,
  VideoSeek,
  Compatibility,
  ManageClsTopicDomainsResponse,
  ScdnAclGroup,
  ScdnWafRule,
  ClsSearchLogs,
  DescribeUrlViolationsResponse,
  IpFilter,
  DescribeScdnBotDataRequest,
  UserAgentFilter,
  DiagnoseUnit,
  DiagnoseInfo,
  DescribeScdnBotRecordsResponse,
  ScdnWafConfig,
  DescribePurgeTasksResponse,
  DDoSStatsData,
  SummarizedData,
  DescribePurgeTasksRequest,
  DescribeOriginDataResponse,
  PurgeTask,
  DDoSTopData,
  OriginPullTimeout,
  DeleteCdnDomainResponse,
  ListTopDDoSDataResponse,
  OriginIp,
  CdnIp,
  DescribeCdnDataRequest,
  DescribeImageConfigResponse,
  DescribeScdnConfigRequest,
  CacheTagKey,
  StopScdnDomainRequest,
  VerifyDomainRecordRequest,
  ScdnTypeData,
  Quic,
  DescribeDDoSDataResponse,
  DescribeTopDataResponse,
  DescribeDomainsRequest,
  OfflineCache,
  CreateEdgePackTaskRequest,
  StopCdnDomainResponse,
  UrlRedirectRule,
  TopDataMore,
  DiagnoseList,
  IpFilterPathRule,
} from "./cdn_models"

/**
 * cdn client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cdn.tencentcloudapi.com", "2018-06-06", clientConfig)
  }

  /**
   * 动态打包任务提交接口
   */
  async CreateEdgePackTask(
    req: CreateEdgePackTaskRequest,
    cb?: (error: string, rep: CreateEdgePackTaskResponse) => void
  ): Promise<CreateEdgePackTaskResponse> {
    return this.request("CreateEdgePackTask", req, cb)
  }

  /**
     * DescribeIpStatus 用于查询域名所在加速平台的边缘节点、回源节点明细。注意事项：边缘节点（edge）尚未全量开放，未在内测名单中的账号不支持调用。

>?  若您的业务已迁移至 CDN 控制台，请参考<a href="https://cloud.tencent.com/document/api/228/41954"> CDN 接口文档</a>，使用  CDN 相关API 进行操作。
     */
  async DescribeIpStatus(
    req: DescribeIpStatusRequest,
    cb?: (error: string, rep: DescribeIpStatusResponse) => void
  ): Promise<DescribeIpStatusResponse> {
    return this.request("DescribeIpStatus", req, cb)
  }

  /**
   * DescribeMapInfo 用于查询省份对应的 ID，运营商对应的 ID 信息。
   */
  async DescribeMapInfo(
    req: DescribeMapInfoRequest,
    cb?: (error: string, rep: DescribeMapInfoResponse) => void
  ): Promise<DescribeMapInfoResponse> {
    return this.request("DescribeMapInfo", req, cb)
  }

  /**
   * DeleteCdnDomain 用于删除指定加速域名
   */
  async DeleteCdnDomain(
    req: DeleteCdnDomainRequest,
    cb?: (error: string, rep: DeleteCdnDomainResponse) => void
  ): Promise<DeleteCdnDomainResponse> {
    return this.request("DeleteCdnDomain", req, cb)
  }

  /**
   * 验证域名解析值
   */
  async VerifyDomainRecord(
    req: VerifyDomainRecordRequest,
    cb?: (error: string, rep: VerifyDomainRecordResponse) => void
  ): Promise<VerifyDomainRecordResponse> {
    return this.request("VerifyDomainRecord", req, cb)
  }

  /**
   * 获取Waf攻击Top数据
   */
  async ListTopWafData(
    req: ListTopWafDataRequest,
    cb?: (error: string, rep: ListTopWafDataResponse) => void
  ): Promise<ListTopWafDataResponse> {
    return this.request("ListTopWafData", req, cb)
  }

  /**
   * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 PurgePathCache 与 PurgeUrlsCache 接口提交的任务均可通过此接口进行查询。
   */
  async DescribePurgeTasks(
    req: DescribePurgeTasksRequest,
    cb?: (error: string, rep: DescribePurgeTasksResponse) => void
  ): Promise<DescribePurgeTasksResponse> {
    return this.request("DescribePurgeTasks", req, cb)
  }

  /**
   * 删除SCDN域名
   */
  async DeleteScdnDomain(
    req: DeleteScdnDomainRequest,
    cb?: (error: string, rep: DeleteScdnDomainResponse) => void
  ): Promise<DeleteScdnDomainResponse> {
    return this.request("DeleteScdnDomain", req, cb)
  }

  /**
   * DescribePayType 用于查询用户的计费类型，计费周期等信息。
   */
  async DescribePayType(
    req: DescribePayTypeRequest,
    cb?: (error: string, rep: DescribePayTypeResponse) => void
  ): Promise<DescribePayTypeResponse> {
    return this.request("DescribePayType", req, cb)
  }

  /**
   * DescribeDomainsConfig 用于查询内容分发网络加速域名（含境内、境外）的所有配置信息。
   */
  async DescribeDomainsConfig(
    req: DescribeDomainsConfigRequest,
    cb?: (error: string, rep: DescribeDomainsConfigResponse) => void
  ): Promise<DescribeDomainsConfigResponse> {
    return this.request("DescribeDomainsConfig", req, cb)
  }

  /**
   * AddCdnDomain 用于新增内容分发网络加速域名。
   */
  async AddCdnDomain(
    req: AddCdnDomainRequest,
    cb?: (error: string, rep: AddCdnDomainResponse) => void
  ): Promise<AddCdnDomainResponse> {
    return this.request("AddCdnDomain", req, cb)
  }

  /**
   * GetDisableRecords 用于查询资源禁用历史，及 URL 当前状态。（接口尚在内测中，暂未全量开放使用）
   */
  async GetDisableRecords(
    req: GetDisableRecordsRequest,
    cb?: (error: string, rep: GetDisableRecordsResponse) => void
  ): Promise<GetDisableRecordsResponse> {
    return this.request("GetDisableRecords", req, cb)
  }

  /**
     * DescribeIpVisit 用于查询 5 分钟活跃用户数，及日活跃用户数明细

+ 5 分钟活跃用户数：根据日志中客户端 IP，5 分钟粒度去重统计
+ 日活跃用户数：根据日志中客户端 IP，按天粒度去重统计
     */
  async DescribeIpVisit(
    req: DescribeIpVisitRequest,
    cb?: (error: string, rep: DescribeIpVisitResponse) => void
  ): Promise<DescribeIpVisitResponse> {
    return this.request("DescribeIpVisit", req, cb)
  }

  /**
     * DescribeCdnData 用于查询 CDN 实时访问监控数据，支持以下指标查询：

+ 流量（单位为 byte）
+ 带宽（单位为 bps）
+ 请求数（单位为 次）
+ 命中请求数（单位为 次）
+ 请求命中率（单位为 %）
+ 命中流量（单位为 byte）
+ 流量命中率（单位为 %）
+ 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
+ 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
+ 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
+ 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
     */
  async DescribeCdnData(
    req: DescribeCdnDataRequest,
    cb?: (error: string, rep: DescribeCdnDataResponse) => void
  ): Promise<DescribeCdnDataResponse> {
    return this.request("DescribeCdnData", req, cb)
  }

  /**
   * DisableCaches 用于禁用 CDN 上指定 URL 的访问，禁用完成后，中国境内访问会直接返回 403。（注：接口尚在内测中，暂未全量开放；封禁URL并非无限期永久封禁）
   */
  async DisableCaches(
    req: DisableCachesRequest,
    cb?: (error: string, rep: DisableCachesResponse) => void
  ): Promise<DisableCachesResponse> {
    return this.request("DisableCaches", req, cb)
  }

  /**
   * DescribeDomains 用于查询内容分发网络加速域名（含境内、境外）基本配置信息，包括项目ID、服务状态，业务类型、创建时间、更新时间等信息。
   */
  async DescribeDomains(
    req: DescribeDomainsRequest,
    cb?: (error: string, rep: DescribeDomainsResponse) => void
  ): Promise<DescribeDomainsResponse> {
    return this.request("DescribeDomains", req, cb)
  }

  /**
   * 生成一条子域名解析，提示客户添加到域名解析上，用于泛域名及域名取回校验归属权
   */
  async CreateVerifyRecord(
    req: CreateVerifyRecordRequest,
    cb?: (error: string, rep: CreateVerifyRecordResponse) => void
  ): Promise<CreateVerifyRecordResponse> {
    return this.request("CreateVerifyRecord", req, cb)
  }

  /**
   * CC统计数据查询
   */
  async DescribeCcData(
    req: DescribeCcDataRequest,
    cb?: (error: string, rep: DescribeCcDataResponse) => void
  ): Promise<DescribeCcDataResponse> {
    return this.request("DescribeCcData", req, cb)
  }

  /**
   * ManageClsTopicDomains 用于管理某日志主题下绑定的域名列表。
   */
  async ManageClsTopicDomains(
    req: ManageClsTopicDomainsRequest,
    cb?: (error: string, rep: ManageClsTopicDomainsResponse) => void
  ): Promise<ManageClsTopicDomainsResponse> {
    return this.request("ManageClsTopicDomains", req, cb)
  }

  /**
   * CreateDiagnoseUrl 用于添加域名诊断任务URL
   */
  async CreateDiagnoseUrl(
    req: CreateDiagnoseUrlRequest,
    cb?: (error: string, rep: CreateDiagnoseUrlResponse) => void
  ): Promise<CreateDiagnoseUrlResponse> {
    return this.request("CreateDiagnoseUrl", req, cb)
  }

  /**
   * StartCdnDomain 用于启用已停用域名的加速服务
   */
  async StartCdnDomain(
    req: StartCdnDomainRequest,
    cb?: (error: string, rep: StartCdnDomainResponse) => void
  ): Promise<StartCdnDomainResponse> {
    return this.request("StartCdnDomain", req, cb)
  }

  /**
   * 拷贝参考域名的配置至新域名。暂不支持自有证书以及定制化配置
   */
  async DuplicateDomainConfig(
    req: DuplicateDomainConfigRequest,
    cb?: (error: string, rep: DuplicateDomainConfigResponse) => void
  ): Promise<DuplicateDomainConfigResponse> {
    return this.request("DuplicateDomainConfig", req, cb)
  }

  /**
   * StopScdnDomain 用于关闭域名的安全防护配置
   */
  async StopScdnDomain(
    req: StopScdnDomainRequest,
    cb?: (error: string, rep: StopScdnDomainResponse) => void
  ): Promise<StopScdnDomainResponse> {
    return this.request("StopScdnDomain", req, cb)
  }

  /**
   * DescribeDiagnoseReport 用于获取指定报告id的内容
   */
  async DescribeDiagnoseReport(
    req: DescribeDiagnoseReportRequest,
    cb?: (error: string, rep: DescribeDiagnoseReportResponse) => void
  ): Promise<DescribeDiagnoseReportResponse> {
    return this.request("DescribeDiagnoseReport", req, cb)
  }

  /**
   * DDoS统计数据查询
   */
  async DescribeDDoSData(
    req: DescribeDDoSDataRequest,
    cb?: (error: string, rep: DescribeDDoSDataResponse) => void
  ): Promise<DescribeDDoSDataResponse> {
    return this.request("DescribeDDoSData", req, cb)
  }

  /**
   * 获取Bot攻击的Top数据列表
   */
  async ListScdnTopBotData(
    req: ListScdnTopBotDataRequest,
    cb?: (error: string, rep: ListScdnTopBotDataResponse) => void
  ): Promise<ListScdnTopBotDataResponse> {
    return this.request("ListScdnTopBotData", req, cb)
  }

  /**
   * ListDiagnoseReport 用于获取用户诊断URL访问后各个子任务的简要详情。
   */
  async ListDiagnoseReport(
    req: ListDiagnoseReportRequest,
    cb?: (error: string, rep: ListDiagnoseReportResponse) => void
  ): Promise<ListDiagnoseReportResponse> {
    return this.request("ListDiagnoseReport", req, cb)
  }

  /**
   * 获取CC攻击Top数据
   */
  async ListTopCcData(
    req: ListTopCcDataRequest,
    cb?: (error: string, rep: ListTopCcDataResponse) => void
  ): Promise<ListTopCcDataResponse> {
    return this.request("ListTopCcData", req, cb)
  }

  /**
   * 查询在SCDN IP安全策略
   */
  async DescribeScdnIpStrategy(
    req: DescribeScdnIpStrategyRequest,
    cb?: (error: string, rep: DescribeScdnIpStrategyResponse) => void
  ): Promise<DescribeScdnIpStrategyResponse> {
    return this.request("DescribeScdnIpStrategy", req, cb)
  }

  /**
   * DescribePurgeQuota 用于查询账户刷新配额和每日可用量。
   */
  async DescribePurgeQuota(
    req?: DescribePurgeQuotaRequest,
    cb?: (error: string, rep: DescribePurgeQuotaResponse) => void
  ): Promise<DescribePurgeQuotaResponse> {
    return this.request("DescribePurgeQuota", req, cb)
  }

  /**
   * UpdateScdnDomain 用于修改 SCDN 加速域名安全相关配置
   */
  async UpdateScdnDomain(
    req: UpdateScdnDomainRequest,
    cb?: (error: string, rep: UpdateScdnDomainResponse) => void
  ): Promise<UpdateScdnDomainResponse> {
    return this.request("UpdateScdnDomain", req, cb)
  }

  /**
   * ListScdnLogTasks 用于查询SCDN日志下载任务列表,以及展示下载任务基本信息
   */
  async ListScdnLogTasks(
    req: ListScdnLogTasksRequest,
    cb?: (error: string, rep: ListScdnLogTasksResponse) => void
  ): Promise<ListScdnLogTasksResponse> {
    return this.request("ListScdnLogTasks", req, cb)
  }

  /**
   * 获取Bot攻击的Top信息
   */
  async ListTopBotData(
    req: ListTopBotDataRequest,
    cb?: (error: string, rep: ListTopBotDataResponse) => void
  ): Promise<ListTopBotDataResponse> {
    return this.request("ListTopBotData", req, cb)
  }

  /**
   * CreateScdnLogTask 用于创建事件日志任务
   */
  async CreateScdnLogTask(
    req: CreateScdnLogTaskRequest,
    cb?: (error: string, rep: CreateScdnLogTaskResponse) => void
  ): Promise<CreateScdnLogTaskResponse> {
    return this.request("CreateScdnLogTask", req, cb)
  }

  /**
   * DescribeImageConfig 用于获取域名图片优化的当前配置，支持Webp、TPG 和 Guetzli。
   */
  async DescribeImageConfig(
    req: DescribeImageConfigRequest,
    cb?: (error: string, rep: DescribeImageConfigResponse) => void
  ): Promise<DescribeImageConfigResponse> {
    return this.request("DescribeImageConfig", req, cb)
  }

  /**
   * 获取SCDN的Top数据
   */
  async DescribeScdnTopData(
    req: DescribeScdnTopDataRequest,
    cb?: (error: string, rep: DescribeScdnTopDataResponse) => void
  ): Promise<DescribeScdnTopDataResponse> {
    return this.request("DescribeScdnTopData", req, cb)
  }

  /**
   * SearchClsLog 用于 CLS 日志检索。支持检索今天，24小时（可选近7中的某一天），近7天的日志数据。
   */
  async SearchClsLog(
    req: SearchClsLogRequest,
    cb?: (error: string, rep: SearchClsLogResponse) => void
  ): Promise<SearchClsLogResponse> {
    return this.request("SearchClsLog", req, cb)
  }

  /**
     * StopCdnDomain 用于停止域名的加速服务。
注意：停止加速服务后，访问至加速节点的请求将会直接返回 404。为避免对您的业务造成影响，请在停止加速服务前将解析切走。
     */
  async StopCdnDomain(
    req: StopCdnDomainRequest,
    cb?: (error: string, rep: StopCdnDomainResponse) => void
  ): Promise<StopCdnDomainResponse> {
    return this.request("StopCdnDomain", req, cb)
  }

  /**
     * ListTopData 通过入参 Metric 和 Filter 组合不同，可以查询以下排序数据：

+ 依据总流量、总请求数对访问 URL 排序，从大至小返回 TOP 1000 URL
+ 依据总流量、总请求数对客户端省份排序，从大至小返回省份列表
+ 依据总流量、总请求数对客户端运营商排序，从大至小返回运营商列表
+ 依据总流量、峰值带宽、总请求数、平均命中率、2XX/3XX/4XX/5XX 状态码对域名排序，从大至小返回域名列表
+ 依据总回源流量、回源峰值带宽、总回源请求数、平均回源失败率、2XX/3XX/4XX/5XX 回源状态码对域名排序，从大至小返回域名列表

注意：仅支持 90 天内数据查询
     */
  async ListTopData(
    req: ListTopDataRequest,
    cb?: (error: string, rep: ListTopDataResponse) => void
  ): Promise<ListTopDataResponse> {
    return this.request("ListTopData", req, cb)
  }

  /**
     * DescribeOriginData 用于查询 CDN 实时回源监控数据，支持以下指标查询：

+ 回源流量（单位为 byte）
+ 回源带宽（单位为 bps）
+ 回源请求数（单位为 次）
+ 回源失败请求数（单位为 次）
+ 回源失败率（单位为 %，小数点后保留两位）
+ 回源状态码 2xx 汇总及各 2 开头回源状态码明细（单位为 个）
+ 回源状态码 3xx 汇总及各 3 开头回源状态码明细（单位为 个）
+ 回源状态码 4xx 汇总及各 4 开头回源状态码明细（单位为 个）
+ 回源状态码 5xx 汇总及各 5 开头回源状态码明细（单位为 个）
     */
  async DescribeOriginData(
    req: DescribeOriginDataRequest,
    cb?: (error: string, rep: DescribeOriginDataResponse) => void
  ): Promise<DescribeOriginDataResponse> {
    return this.request("DescribeOriginData", req, cb)
  }

  /**
     * DescribeCdnIp 用于查询 CDN IP 归属。
（注意：此接口请求频率限制以 CDN 侧限制为准：200次/10分钟）  
     */
  async DescribeCdnIp(
    req: DescribeCdnIpRequest,
    cb?: (error: string, rep: DescribeCdnIpResponse) => void
  ): Promise<DescribeCdnIpResponse> {
    return this.request("DescribeCdnIp", req, cb)
  }

  /**
   * StartScdnDomain 用于开启域名的安全防护配置
   */
  async StartScdnDomain(
    req: StartScdnDomainRequest,
    cb?: (error: string, rep: StartScdnDomainResponse) => void
  ): Promise<StartScdnDomainResponse> {
    return this.request("StartScdnDomain", req, cb)
  }

  /**
     * PurgePathCache 用于批量提交目录刷新，根据域名的加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日目录刷新额度为各 100 条，每次最多可提交 500 条。
     */
  async PurgePathCache(
    req: PurgePathCacheRequest,
    cb?: (error: string, rep: PurgePathCacheResponse) => void
  ): Promise<PurgePathCacheResponse> {
    return this.request("PurgePathCache", req, cb)
  }

  /**
     * DescribeUrlViolations 用于查询被 CDN 系统扫描到的域名违规 URL 列表及当前状态。
对应内容分发网络控制台【图片鉴黄】页面。
     */
  async DescribeUrlViolations(
    req: DescribeUrlViolationsRequest,
    cb?: (error: string, rep: DescribeUrlViolationsResponse) => void
  ): Promise<DescribeUrlViolationsResponse> {
    return this.request("DescribeUrlViolations", req, cb)
  }

  /**
   * Waf统计数据查询
   */
  async DescribeWafData(
    req: DescribeWafDataRequest,
    cb?: (error: string, rep: DescribeWafDataResponse) => void
  ): Promise<DescribeWafDataResponse> {
    return this.request("DescribeWafData", req, cb)
  }

  /**
   * 获取DDoS攻击Top数据
   */
  async ListTopDDoSData(
    req: ListTopDDoSDataRequest,
    cb?: (error: string, rep: ListTopDDoSDataResponse) => void
  ): Promise<ListTopDDoSDataResponse> {
    return this.request("ListTopDDoSData", req, cb)
  }

  /**
     * PurgeUrlsCache 用于批量提交 URL 进行刷新，根据 URL 中域名的当前加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日 URL 刷新额度各为 10000 条，每次最多可提交 1000 条。
     */
  async PurgeUrlsCache(
    req: PurgeUrlsCacheRequest,
    cb?: (error: string, rep: PurgeUrlsCacheResponse) => void
  ): Promise<PurgeUrlsCacheResponse> {
    return this.request("PurgeUrlsCache", req, cb)
  }

  /**
   * DescribeTrafficPackages 用于查询 CDN 流量包详情。
   */
  async DescribeTrafficPackages(
    req: DescribeTrafficPackagesRequest,
    cb?: (error: string, rep: DescribeTrafficPackagesResponse) => void
  ): Promise<DescribeTrafficPackagesResponse> {
    return this.request("DescribeTrafficPackages", req, cb)
  }

  /**
     * UpdateDomainConfig 用于修改内容分发网络加速域名配置信息
注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值，建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
     */
  async UpdateDomainConfig(
    req: UpdateDomainConfigRequest,
    cb?: (error: string, rep: UpdateDomainConfigResponse) => void
  ): Promise<UpdateDomainConfigResponse> {
    return this.request("UpdateDomainConfig", req, cb)
  }

  /**
   * DescribeCdnDomainLogs 用于查询访问日志下载地址，仅支持 30 天以内的境内、境外访问日志下载链接查询。
   */
  async DescribeCdnDomainLogs(
    req: DescribeCdnDomainLogsRequest,
    cb?: (error: string, rep: DescribeCdnDomainLogsResponse) => void
  ): Promise<DescribeCdnDomainLogsResponse> {
    return this.request("DescribeCdnDomainLogs", req, cb)
  }

  /**
     * DescribePushTasks  用于查询预热任务提交历史记录及执行进度。
接口灰度中，暂未全量开放，敬请期待。
     */
  async DescribePushTasks(
    req: DescribePushTasksRequest,
    cb?: (error: string, rep: DescribePushTasksResponse) => void
  ): Promise<DescribePushTasksResponse> {
    return this.request("DescribePushTasks", req, cb)
  }

  /**
   * DescribeCertDomains 用于校验SSL证书并提取证书中包含的域名。
   */
  async DescribeCertDomains(
    req: DescribeCertDomainsRequest,
    cb?: (error: string, rep: DescribeCertDomainsResponse) => void
  ): Promise<DescribeCertDomainsResponse> {
    return this.request("DescribeCertDomains", req, cb)
  }

  /**
   * DescribeEventLogData 用于查询事件日志统计曲线
   */
  async DescribeEventLogData(
    req: DescribeEventLogDataRequest,
    cb?: (error: string, rep: DescribeEventLogDataResponse) => void
  ): Promise<DescribeEventLogDataResponse> {
    return this.request("DescribeEventLogData", req, cb)
  }

  /**
   * CreateClsLogTopic 用于创建日志主题。注意：一个日志集下至多可创建10个日志主题。
   */
  async CreateClsLogTopic(
    req: CreateClsLogTopicRequest,
    cb?: (error: string, rep: CreateClsLogTopicResponse) => void
  ): Promise<CreateClsLogTopicResponse> {
    return this.request("CreateClsLogTopic", req, cb)
  }

  /**
     * PushUrlsCache 用于将指定 URL 资源列表加载至 CDN 节点，支持指定加速区域预热。
默认情况下境内、境外每日预热 URL 限额为各 1000 条，每次最多可提交 500 条。注意：中国境外区域预热，资源默认加载至中国境外边缘节点，所产生的边缘层流量会计入计费流量。
     */
  async PushUrlsCache(
    req: PushUrlsCacheRequest,
    cb?: (error: string, rep: PushUrlsCacheResponse) => void
  ): Promise<PushUrlsCacheResponse> {
    return this.request("PushUrlsCache", req, cb)
  }

  /**
   * CreateScdnDomain 用于创建 SCDN 加速域名
   */
  async CreateScdnDomain(
    req: CreateScdnDomainRequest,
    cb?: (error: string, rep: CreateScdnDomainResponse) => void
  ): Promise<CreateScdnDomainResponse> {
    return this.request("CreateScdnDomain", req, cb)
  }

  /**
   * UpdateImageConfig 用于更新控制台图片优化的相关配置，支持Webp、TPG 和 Guetzli。
   */
  async UpdateImageConfig(
    req: UpdateImageConfigRequest,
    cb?: (error: string, rep: UpdateImageConfigResponse) => void
  ): Promise<UpdateImageConfigResponse> {
    return this.request("UpdateImageConfig", req, cb)
  }

  /**
   * ModifyPurgeFetchTaskStatus 用于上报定时刷新预热任务执行状态
   */
  async ModifyPurgeFetchTaskStatus(
    req: ModifyPurgeFetchTaskStatusRequest,
    cb?: (error: string, rep: ModifyPurgeFetchTaskStatusResponse) => void
  ): Promise<ModifyPurgeFetchTaskStatusResponse> {
    return this.request("ModifyPurgeFetchTaskStatus", req, cb)
  }

  /**
   * CreateScdnFailedLogTask 用于重试创建失败的事件日志任务
   */
  async CreateScdnFailedLogTask(
    req: CreateScdnFailedLogTaskRequest,
    cb?: (error: string, rep: CreateScdnFailedLogTaskResponse) => void
  ): Promise<CreateScdnFailedLogTaskResponse> {
    return this.request("CreateScdnFailedLogTask", req, cb)
  }

  /**
     * DisableClsLogTopic 用于停止日志主题投递。注意：停止后，所有绑定该日志主题域名的日志将不再继续投递至该主题，已经投递的日志将会继续保留。生效时间约为 5~15 分钟。

     */
  async DisableClsLogTopic(
    req: DisableClsLogTopicRequest,
    cb?: (error: string, rep: DisableClsLogTopicResponse) => void
  ): Promise<DisableClsLogTopicResponse> {
    return this.request("DisableClsLogTopic", req, cb)
  }

  /**
   * ListClsTopicDomains 用于获取某日志主题下绑定的域名列表。
   */
  async ListClsTopicDomains(
    req: ListClsTopicDomainsRequest,
    cb?: (error: string, rep: ListClsTopicDomainsResponse) => void
  ): Promise<ListClsTopicDomainsResponse> {
    return this.request("ListClsTopicDomains", req, cb)
  }

  /**
   * ListClsLogTopics 用于显示日志主题列表。注意：一个日志集下至多含10个日志主题。
   */
  async ListClsLogTopics(
    req: ListClsLogTopicsRequest,
    cb?: (error: string, rep: ListClsLogTopicsResponse) => void
  ): Promise<ListClsLogTopicsResponse> {
    return this.request("ListClsLogTopics", req, cb)
  }

  /**
   * 查询BOT会话记录列表
   */
  async DescribeScdnBotRecords(
    req: DescribeScdnBotRecordsRequest,
    cb?: (error: string, rep: DescribeScdnBotRecordsResponse) => void
  ): Promise<DescribeScdnBotRecordsResponse> {
    return this.request("DescribeScdnBotRecords", req, cb)
  }

  /**
   * DescribeScdnConfig 用于查询指定 SCDN 加速域名的安全相关配置
   */
  async DescribeScdnConfig(
    req: DescribeScdnConfigRequest,
    cb?: (error: string, rep: DescribeScdnConfigResponse) => void
  ): Promise<DescribeScdnConfigResponse> {
    return this.request("DescribeScdnConfig", req, cb)
  }

  /**
   * DeleteClsLogTopic 用于删除日志主题。注意：删除后，所有该日志主题下绑定域名的日志将不再继续投递至该主题，已经投递的日志将会被全部清空。生效时间约为 5~15 分钟。
   */
  async DeleteClsLogTopic(
    req: DeleteClsLogTopicRequest,
    cb?: (error: string, rep: DeleteClsLogTopicResponse) => void
  ): Promise<DeleteClsLogTopicResponse> {
    return this.request("DeleteClsLogTopic", req, cb)
  }

  /**
   * 本接口（DescribeCdnOriginIp）用于查询 CDN 回源节点的IP信息。（注：此接口即将下线，不再进行维护，请通过DescribeIpStatus 接口进行查询）
   */
  async DescribeCdnOriginIp(
    req?: DescribeCdnOriginIpRequest,
    cb?: (error: string, rep: DescribeCdnOriginIpResponse) => void
  ): Promise<DescribeCdnOriginIpResponse> {
    return this.request("DescribeCdnOriginIp", req, cb)
  }

  /**
   * DescribeBillingData 用于查询实际计费数据明细。
   */
  async DescribeBillingData(
    req: DescribeBillingDataRequest,
    cb?: (error: string, rep: DescribeBillingDataResponse) => void
  ): Promise<DescribeBillingDataResponse> {
    return this.request("DescribeBillingData", req, cb)
  }

  /**
   * DescribePushQuota  用于查询预热配额和每日可用量。
   */
  async DescribePushQuota(
    req?: DescribePushQuotaRequest,
    cb?: (error: string, rep: DescribePushQuotaResponse) => void
  ): Promise<DescribePushQuotaResponse> {
    return this.request("DescribePushQuota", req, cb)
  }

  /**
   * EnableClsLogTopic 用于启动日志主题投递。注意：启动后，所有绑定该日志主题域名的日志将继续投递至该主题。生效时间约为 5~15 分钟。
   */
  async EnableClsLogTopic(
    req: EnableClsLogTopicRequest,
    cb?: (error: string, rep: EnableClsLogTopicResponse) => void
  ): Promise<EnableClsLogTopicResponse> {
    return this.request("EnableClsLogTopic", req, cb)
  }

  /**
   * ListScdnDomains 用于查询 SCDN 安全加速域名列表，及域名基本配置信息
   */
  async ListScdnDomains(
    req: ListScdnDomainsRequest,
    cb?: (error: string, rep: ListScdnDomainsResponse) => void
  ): Promise<ListScdnDomainsResponse> {
    return this.request("ListScdnDomains", req, cb)
  }

  /**
   * DescribeReportData 用于查询域名/项目维度的日/周/月报表数据。
   */
  async DescribeReportData(
    req: DescribeReportDataRequest,
    cb?: (error: string, rep: DescribeReportDataResponse) => void
  ): Promise<DescribeReportDataResponse> {
    return this.request("DescribeReportData", req, cb)
  }

  /**
     * 查询指定域名的区域、运营商明细数据
注意事项：接口尚未全量开放，未在内测名单中的账号不支持调用
     */
  async DescribeDistrictIspData(
    req: DescribeDistrictIspDataRequest,
    cb?: (error: string, rep: DescribeDistrictIspDataResponse) => void
  ): Promise<DescribeDistrictIspDataResponse> {
    return this.request("DescribeDistrictIspData", req, cb)
  }

  /**
   * 获取BOT统计数据列表
   */
  async DescribeScdnBotData(
    req: DescribeScdnBotDataRequest,
    cb?: (error: string, rep: DescribeScdnBotDataResponse) => void
  ): Promise<DescribeScdnBotDataResponse> {
    return this.request("DescribeScdnBotData", req, cb)
  }

  /**
   * 本接口(UpdatePayType)用于修改账号计费类型，暂不支持月结用户或子账号修改。
   */
  async UpdatePayType(
    req: UpdatePayTypeRequest,
    cb?: (error: string, rep: UpdatePayTypeResponse) => void
  ): Promise<UpdatePayTypeResponse> {
    return this.request("UpdatePayType", req, cb)
  }

  /**
     * DescribeTopData 通过入参 Metric 和 Filter 组合不同，可以查询以下排序数据：

+ 依据总流量、总请求数对访问 IP 排序，从大至小返回 TOP 100 IP
+ 依据总流量、总请求数对访问 Refer 排序，从大至小返回 TOP 100 Refer
+ 依据总流量、总请求数对访问 设备 排序，从大至小返回 设备类型
+ 依据总流量、总请求数对访问 操作系统 排序，从大至小返回 操作系统
+ 依据总流量、总请求数对访问 浏览器 排序，从大至小返回 浏览器

注意：
+ 仅支持 90 天内数据查询，且从2021年09月20日开始有数据
+ 本接口为beta版，尚未正式全量发布

     */
  async DescribeTopData(
    req: DescribeTopDataRequest,
    cb?: (error: string, rep: DescribeTopDataResponse) => void
  ): Promise<DescribeTopDataResponse> {
    return this.request("DescribeTopData", req, cb)
  }

  /**
   * EnableCaches 用于解禁手工封禁的 URL，解禁成功后，全网生效时间约 5~10 分钟。（接口尚在内测中，暂未全量开放使用）
   */
  async EnableCaches(
    req: EnableCachesRequest,
    cb?: (error: string, rep: EnableCachesResponse) => void
  ): Promise<EnableCachesResponse> {
    return this.request("EnableCaches", req, cb)
  }

  /**
   * 通过CLS日志计算Top信息。支持近7天的日志数据。
   */
  async ListTopClsLogData(
    req: ListTopClsLogDataRequest,
    cb?: (error: string, rep: ListTopClsLogDataResponse) => void
  ): Promise<ListTopClsLogDataResponse> {
    return this.request("ListTopClsLogData", req, cb)
  }
}

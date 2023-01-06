import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreatePlanForZoneResponse, DownloadL7LogsRequest, DescribeSpeedTestingQuotaResponse, DeleteRulesRequest, ModifyDefaultCertificateRequest, DescribeOriginGroupResponse, DescribeWebManagedRulesLogResponse, DescribeTopL7CacheDataRequest, CreateCredentialResponse, DeleteApplicationProxyResponse, DescribeZonesRequest, DescribeLogTopicTasksRequest, CreateCredentialRequest, ModifyRuleRequest, DescribePrefetchTasksResponse, DescribeWebManagedRulesHitRuleDetailRequest, DeleteApplicationProxyRequest, ModifySecurityWafGroupPolicyRequest, DescribeZoneSettingRequest, DescribeClientRuleListResponse, ModifySecurityPolicyRequest, ModifyApplicationProxyRuleStatusResponse, DescribeClientRuleListRequest, ModifyZoneSettingRequest, CreateApplicationProxyResponse, ModifyOriginGroupResponse, ModifyAliasDomainRequest, DescribeAvailablePlansRequest, ReclaimZoneResponse, DescribeSingleL7AnalysisDataRequest, ModifySecurityPolicyResponse, DescribeHostsSettingResponse, ModifyZoneStatusResponse, ModifyZoneResponse, ModifyZoneRequest, ModifyApplicationProxyStatusResponse, DeleteZoneResponse, CreateRuleResponse, DescribeIdentificationsResponse, CreatePurgeTaskResponse, DeleteApplicationProxyRuleResponse, ReclaimAliasDomainRequest, DescribeRulesResponse, DescribeOriginProtectionResponse, BindZoneToPlanResponse, DeleteOriginGroupRequest, DescribeAliasDomainsRequest, ModifyApplicationProxyStatusRequest, ModifyHostsCertificateRequest, DescribeDnsDataResponse, ModifyAliasDomainStatusRequest, DescribeRulesSettingResponse, DescribeDDoSAttackTopDataRequest, DescribeRulesRequest, DescribeSpeedTestingMetricDataRequest, ModifyZoneSettingResponse, DescribeZonesResponse, UpdateOriginProtectionIPWhitelistRequest, DescribeSpeedTestingDetailsResponse, CreateAliasDomainRequest, CreateAliasDomainResponse, DescribeOriginProtectionRequest, CreatePrefetchTaskRequest, DeleteApplicationProxyRuleRequest, DescribeApplicationProxiesResponse, DescribeTopL7AnalysisDataRequest, ModifyRulePriorityResponse, DescribeTopL7CacheDataResponse, DescribeOverviewL7DataRequest, IdentifyZoneResponse, DescribeWebProtectionTopDataRequest, ModifySecurityWafGroupPolicyResponse, DescribeWebManagedRulesDataRequest, DescribeWebManagedRulesDataResponse, CreateSpeedTestingRequest, ModifyAliasDomainStatusResponse, ModifyRulePriorityRequest, DescribeTimingL7AnalysisDataRequest, CreatePrefetchTaskResponse, DescribeDefaultCertificatesRequest, DescribeAliasDomainsResponse, DescribeWebProtectionHitRuleDetailRequest, CreateZoneRequest, DescribeTimingL7CacheDataRequest, ModifyRuleResponse, CheckCertificateResponse, DescribeLogSetsResponse, DescribeWebProtectionDataRequest, CheckCertificateRequest, DescribeAddableEntityListResponse, CreateApplicationProxyRuleRequest, ModifyApplicationProxyRequest, CreateReplayTaskRequest, DescribeWebProtectionHitRuleDetailResponse, DescribeWebProtectionClientIpListResponse, DescribeTimingL7AnalysisDataResponse, DescribeApplicationProxiesRequest, DescribeContentQuotaRequest, DescribeOverviewL7DataResponse, ModifyHostsCertificateResponse, CreateRuleRequest, ModifyZoneStatusRequest, CreateApplicationProxyRuleResponse, DescribeLogSetsRequest, CreatePlanForZoneRequest, CreateApplicationProxyRequest, DescribeSpeedTestingMetricDataResponse, DownloadL4LogsRequest, DescribeTimingL4DataResponse, CreateZoneResponse, DescribeSpeedTestingQuotaRequest, ModifyApplicationProxyResponse, ModifyOriginGroupRequest, DownloadL4LogsResponse, DescribeTimingL7CacheDataResponse, DescribeAddableEntityListRequest, DescribeSingleL7AnalysisDataResponse, DeleteOriginGroupResponse, DescribeSpeedTestingDetailsRequest, UpdateOriginProtectionIPWhitelistResponse, DescribeIdentificationsRequest, DescribeDefaultCertificatesResponse, CreateOriginGroupResponse, ModifyApplicationProxyRuleStatusRequest, BindZoneToPlanRequest, ReclaimZoneRequest, DeleteZoneRequest, ModifyDefaultCertificateResponse, DescribeTopL7AnalysisDataResponse, ModifyApplicationProxyRuleResponse, DescribeZoneSettingResponse, DeleteRulesResponse, DescribeWebProtectionDataResponse, ModifyApplicationProxyRuleRequest, DescribePrefetchTasksRequest, DescribeRulesSettingRequest, ModifyAliasDomainResponse, DeleteAliasDomainRequest, DescribeContentQuotaResponse, DescribeDnsDataRequest, CreatePurgeTaskRequest, DownloadL7LogsResponse, CreateOriginGroupRequest, DescribeTimingL4DataRequest, DescribeHostsSettingRequest, DescribeWebManagedRulesLogRequest, DescribePurgeTasksResponse, DescribeAvailablePlansResponse, DescribePurgeTasksRequest, DescribeWebProtectionTopDataResponse, DescribeWebManagedRulesHitRuleDetailResponse, DescribeWebProtectionClientIpListRequest, IdentifyZoneRequest, CreateSpeedTestingResponse, DescribeOriginGroupRequest, ReclaimAliasDomainResponse, DescribeDDoSAttackTopDataResponse, DeleteAliasDomainResponse, DescribeLogTopicTasksResponse, CreateReplayTaskResponse } from "./teo_models";
/**
 * teo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改应用代理规则
     */
    ModifyApplicationProxyRule(req: ModifyApplicationProxyRuleRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleResponse) => void): Promise<ModifyApplicationProxyRuleResponse>;
    /**
     * 删除源站组
     */
    DeleteOriginGroup(req: DeleteOriginGroupRequest, cb?: (error: string, rep: DeleteOriginGroupResponse) => void): Promise<DeleteOriginGroupResponse>;
    /**
     * 删除站点。
     */
    DeleteZone(req: DeleteZoneRequest, cb?: (error: string, rep: DeleteZoneResponse) => void): Promise<DeleteZoneResponse>;
    /**
     * 创建清除缓存任务
     */
    CreatePurgeTask(req: CreatePurgeTaskRequest, cb?: (error: string, rep: CreatePurgeTaskResponse) => void): Promise<CreatePurgeTaskResponse>;
    /**
     * 创建源站组
     */
    CreateOriginGroup(req: CreateOriginGroupRequest, cb?: (error: string, rep: CreateOriginGroupResponse) => void): Promise<CreateOriginGroupResponse>;
    /**
     * 查询清除缓存历史记录
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 用于修改站点配置
     */
    ModifyZoneSetting(req: ModifyZoneSettingRequest, cb?: (error: string, rep: ModifyZoneSettingResponse) => void): Promise<ModifyZoneSettingResponse>;
    /**
     * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
     */
    DescribeTimingL7CacheData(req: DescribeTimingL7CacheDataRequest, cb?: (error: string, rep: DescribeTimingL7CacheDataResponse) => void): Promise<DescribeTimingL7CacheDataResponse>;
    /**
     * 用于查询拨测分地区数据
     */
    DescribeSpeedTestingDetails(req: DescribeSpeedTestingDetailsRequest, cb?: (error: string, rep: DescribeSpeedTestingDetailsResponse) => void): Promise<DescribeSpeedTestingDetailsResponse>;
    /**
     * 本接口（DescribeClientRuleList）用于查询封禁客户端信息列表。
     */
    DescribeClientRuleList(req: DescribeClientRuleListRequest, cb?: (error: string, rep: DescribeClientRuleListResponse) => void): Promise<DescribeClientRuleListResponse>;
    /**
     * 规则引擎创建规则。
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 为未购买套餐的站点购买套餐
     */
    CreatePlanForZone(req: CreatePlanForZoneRequest, cb?: (error: string, rep: CreatePlanForZoneResponse) => void): Promise<CreatePlanForZoneResponse>;
    /**
     * 查询内容管理接口配额
     */
    DescribeContentQuota(req: DescribeContentQuotaRequest, cb?: (error: string, rep: DescribeContentQuotaResponse) => void): Promise<DescribeContentQuotaResponse>;
    /**
     * 本接口（DownloadL4Logs）用于下载四层离线日志。
     */
    DownloadL4Logs(req: DownloadL4LogsRequest, cb?: (error: string, rep: DownloadL4LogsResponse) => void): Promise<DownloadL4LogsResponse>;
    /**
     * 修改应用代理
     */
    ModifyApplicationProxy(req: ModifyApplicationProxyRequest, cb?: (error: string, rep: ModifyApplicationProxyResponse) => void): Promise<ModifyApplicationProxyResponse>;
    /**
     * 查询站点的验证信息。
     */
    DescribeIdentifications(req: DescribeIdentificationsRequest, cb?: (error: string, rep: DescribeIdentificationsResponse) => void): Promise<DescribeIdentificationsResponse>;
    /**
     * 用于用户接入新的站点。
     */
    CreateZone(req: CreateZoneRequest, cb?: (error: string, rep: CreateZoneResponse) => void): Promise<CreateZoneResponse>;
    /**
     * 修改站点信息。
     */
    ModifyZone(req: ModifyZoneRequest, cb?: (error: string, rep: ModifyZoneResponse) => void): Promise<ModifyZoneResponse>;
    /**
     * 本接口（DescribeWebManagedRulesLog）用于查询Web攻击日志。
     */
    DescribeWebManagedRulesLog(req: DescribeWebManagedRulesLogRequest, cb?: (error: string, rep: DescribeWebManagedRulesLogResponse) => void): Promise<DescribeWebManagedRulesLogResponse>;
    /**
     * 用于查询域名配置信息
     */
    DescribeHostsSetting(req: DescribeHostsSettingRequest, cb?: (error: string, rep: DescribeHostsSettingResponse) => void): Promise<DescribeHostsSettingResponse>;
    /**
     * 本接口（DescribeWebProtectionClientIpList）用于查询CC防护客户端（攻击源）IP信息。
     */
    DescribeWebProtectionClientIpList(req: DescribeWebProtectionClientIpListRequest, cb?: (error: string, rep: DescribeWebProtectionClientIpListResponse) => void): Promise<DescribeWebProtectionClientIpListResponse>;
    /**
     * 查询当前账户可用套餐信息列表
     */
    DescribeAvailablePlans(req?: DescribeAvailablePlansRequest, cb?: (error: string, rep: DescribeAvailablePlansResponse) => void): Promise<DescribeAvailablePlansResponse>;
    /**
     * 本接口（DescribeWebProtectionTopData）用于查询CC防护的Top数据。
     */
    DescribeWebProtectionTopData(req: DescribeWebProtectionTopDataRequest, cb?: (error: string, rep: DescribeWebProtectionTopDataResponse) => void): Promise<DescribeWebProtectionTopDataResponse>;
    /**
     * 修改安全配置托管规则
     */
    ModifySecurityWafGroupPolicy(req: ModifySecurityWafGroupPolicyRequest, cb?: (error: string, rep: ModifySecurityWafGroupPolicyResponse) => void): Promise<ModifySecurityWafGroupPolicyResponse>;
    /**
     * 用于验证站点所有权。
     */
    IdentifyZone(req: IdentifyZoneRequest, cb?: (error: string, rep: IdentifyZoneResponse) => void): Promise<IdentifyZoneResponse>;
    /**
     * 修改别称域名状态。
     */
    ModifyAliasDomainStatus(req: ModifyAliasDomainStatusRequest, cb?: (error: string, rep: ModifyAliasDomainStatusResponse) => void): Promise<ModifyAliasDomainStatusResponse>;
    /**
     * 查询源站防护信息
     */
    DescribeOriginProtection(req: DescribeOriginProtectionRequest, cb?: (error: string, rep: DescribeOriginProtectionResponse) => void): Promise<DescribeOriginProtectionResponse>;
    /**
     * 查询默认证书列表
     */
    DescribeDefaultCertificates(req: DescribeDefaultCertificatesRequest, cb?: (error: string, rep: DescribeDefaultCertificatesResponse) => void): Promise<DescribeDefaultCertificatesResponse>;
    /**
     * 用于修改域名证书
     */
    ModifyHostsCertificate(req: ModifyHostsCertificateRequest, cb?: (error: string, rep: ModifyHostsCertificateResponse) => void): Promise<ModifyHostsCertificateResponse>;
    /**
     * 获取DNS请求数统计曲线
     */
    DescribeDnsData(req: DescribeDnsDataRequest, cb?: (error: string, rep: DescribeDnsDataResponse) => void): Promise<DescribeDnsDataResponse>;
    /**
     * 用于查询站点的所有配置信息。
     */
    DescribeZoneSetting(req: DescribeZoneSettingRequest, cb?: (error: string, rep: DescribeZoneSettingResponse) => void): Promise<DescribeZoneSettingResponse>;
    /**
     * 返回规则引擎可应用匹配请求的设置列表及其详细建议配置信息
     */
    DescribeRulesSetting(req?: DescribeRulesSettingRequest, cb?: (error: string, rep: DescribeRulesSettingResponse) => void): Promise<DescribeRulesSettingResponse>;
    /**
     * 本接口（DescribeLogTopicTasks）用于获取日志推送任务列表。
     */
    DescribeLogTopicTasks(req: DescribeLogTopicTasksRequest, cb?: (error: string, rep: DescribeLogTopicTasksResponse) => void): Promise<DescribeLogTopicTasksResponse>;
    /**
     * 修改源站组
     */
    ModifyOriginGroup(req: ModifyOriginGroupRequest, cb?: (error: string, rep: ModifyOriginGroupResponse) => void): Promise<ModifyOriginGroupResponse>;
    /**
     * 当客户取回站定的同时会取回此站点下关联的别称域名，此时入参为ZoneId；当客户接入站点发现已被别称域名接入时通过验证之后可取回域名，此时入参为ZoneName。
     */
    ReclaimAliasDomain(req: ReclaimAliasDomainRequest, cb?: (error: string, rep: ReclaimAliasDomainResponse) => void): Promise<ReclaimAliasDomainResponse>;
    /**
     * 创建应用代理规则
     */
    CreateApplicationProxyRule(req: CreateApplicationProxyRuleRequest, cb?: (error: string, rep: CreateApplicationProxyRuleResponse) => void): Promise<CreateApplicationProxyRuleResponse>;
    /**
     * 查询预热任务状态
     */
    DescribePrefetchTasks(req: DescribePrefetchTasksRequest, cb?: (error: string, rep: DescribePrefetchTasksResponse) => void): Promise<DescribePrefetchTasksResponse>;
    /**
     * 用户查询用户站点信息列表，支持分页。
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 本接口（DescribeDDoSAttackTopData）用于查询DDoS攻击Top数据。
     */
    DescribeDDoSAttackTopData(req: DescribeDDoSAttackTopDataRequest, cb?: (error: string, rep: DescribeDDoSAttackTopDataResponse) => void): Promise<DescribeDDoSAttackTopDataResponse>;
    /**
     * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点。
     */
    ReclaimZone(req: ReclaimZoneRequest, cb?: (error: string, rep: ReclaimZoneResponse) => void): Promise<ReclaimZoneResponse>;
    /**
     * 删除应用代理
     */
    DeleteApplicationProxy(req: DeleteApplicationProxyRequest, cb?: (error: string, rep: DeleteApplicationProxyResponse) => void): Promise<DeleteApplicationProxyResponse>;
    /**
     * 本接口（DescribeTopL7CacheData）用于查询七层缓存分析topN流量数据。
     */
    DescribeTopL7CacheData(req: DescribeTopL7CacheDataRequest, cb?: (error: string, rep: DescribeTopL7CacheDataResponse) => void): Promise<DescribeTopL7CacheDataResponse>;
    /**
     * 用于开启，关闭站点。
     */
    ModifyZoneStatus(req: ModifyZoneStatusRequest, cb?: (error: string, rep: ModifyZoneStatusResponse) => void): Promise<ModifyZoneStatusResponse>;
    /**
     * 创建别称域名。
     */
    CreateAliasDomain(req: CreateAliasDomainRequest, cb?: (error: string, rep: CreateAliasDomainResponse) => void): Promise<CreateAliasDomainResponse>;
    /**
     * 本接口（DescribeWebProtectionHitRuleDetail）用于查询CC防护命中规则详情列表。
     */
    DescribeWebProtectionHitRuleDetail(req: DescribeWebProtectionHitRuleDetailRequest, cb?: (error: string, rep: DescribeWebProtectionHitRuleDetailResponse) => void): Promise<DescribeWebProtectionHitRuleDetailResponse>;
    /**
     * 用于创建COS回源私有凭证
     */
    CreateCredential(req?: CreateCredentialRequest, cb?: (error: string, rep: CreateCredentialResponse) => void): Promise<CreateCredentialResponse>;
    /**
     * 本接口（DownloadL7Logs）下载七层离线日志。
     */
    DownloadL7Logs(req: DownloadL7LogsRequest, cb?: (error: string, rep: DownloadL7LogsResponse) => void): Promise<DownloadL7LogsResponse>;
    /**
     * 删除应用代理规则
     */
    DeleteApplicationProxyRule(req: DeleteApplicationProxyRuleRequest, cb?: (error: string, rep: DeleteApplicationProxyRuleResponse) => void): Promise<DeleteApplicationProxyRuleResponse>;
    /**
     * 批量删除规则引擎规则。
     */
    DeleteRules(req: DeleteRulesRequest, cb?: (error: string, rep: DeleteRulesResponse) => void): Promise<DeleteRulesResponse>;
    /**
     * 本接口（DescribeTimingL4Data）用于查询四层时序流量数据列表。
     */
    DescribeTimingL4Data(req: DescribeTimingL4DataRequest, cb?: (error: string, rep: DescribeTimingL4DataResponse) => void): Promise<DescribeTimingL4DataResponse>;
    /**
     * 修改规则引擎规则。
     */
    ModifyRule(req: ModifyRuleRequest, cb?: (error: string, rep: ModifyRuleResponse) => void): Promise<ModifyRuleResponse>;
    /**
     * 本接口（DescribeTopL7AnalysisData）用于查询七层流量前topN的数据。
     */
    DescribeTopL7AnalysisData(req: DescribeTopL7AnalysisDataRequest, cb?: (error: string, rep: DescribeTopL7AnalysisDataResponse) => void): Promise<DescribeTopL7AnalysisDataResponse>;
    /**
     * 本接口（DescribeLogSets）用于获取日志集列表。
     */
    DescribeLogSets(req: DescribeLogSetsRequest, cb?: (error: string, rep: DescribeLogSetsResponse) => void): Promise<DescribeLogSetsResponse>;
    /**
     * 本接口（DescribeSingleL7AnalysisData）用于查询七层流量数据分析单值数据列表，单值数据表示：指标在查询时间范围内的单个统计数据，通常表现为接口仅返回一个统计数值。
     */
    DescribeSingleL7AnalysisData(req: DescribeSingleL7AnalysisDataRequest, cb?: (error: string, rep: DescribeSingleL7AnalysisDataResponse) => void): Promise<DescribeSingleL7AnalysisDataResponse>;
    /**
     * 修改Web&Bot安全配置。
     */
    ModifySecurityPolicy(req: ModifySecurityPolicyRequest, cb?: (error: string, rep: ModifySecurityPolicyResponse) => void): Promise<ModifySecurityPolicyResponse>;
    /**
     * 本接口（DescribeWebProtectionData）用于查询CC防护时序数据。
     */
    DescribeWebProtectionData(req: DescribeWebProtectionDataRequest, cb?: (error: string, rep: DescribeWebProtectionDataResponse) => void): Promise<DescribeWebProtectionDataResponse>;
    /**
     * 创建预热任务
     */
    CreatePrefetchTask(req: CreatePrefetchTaskRequest, cb?: (error: string, rep: CreatePrefetchTaskResponse) => void): Promise<CreatePrefetchTaskResponse>;
    /**
     * 删除别称域名。
     */
    DeleteAliasDomain(req: DeleteAliasDomainRequest, cb?: (error: string, rep: DeleteAliasDomainResponse) => void): Promise<DeleteAliasDomainResponse>;
    /**
     * 修改默认证书状态
     */
    ModifyDefaultCertificate(req: ModifyDefaultCertificateRequest, cb?: (error: string, rep: ModifyDefaultCertificateResponse) => void): Promise<ModifyDefaultCertificateResponse>;
    /**
     * 本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。
     */
    DescribeOverviewL7Data(req: DescribeOverviewL7DataRequest, cb?: (error: string, rep: DescribeOverviewL7DataResponse) => void): Promise<DescribeOverviewL7DataResponse>;
    /**
     * 本接口（DescribeAddableEntityList）用于查询剩余可添加的日志推送实体列表。
     */
    DescribeAddableEntityList(req: DescribeAddableEntityListRequest, cb?: (error: string, rep: DescribeAddableEntityListResponse) => void): Promise<DescribeAddableEntityListResponse>;
    /**
     * 修改规则引擎规则优先级
     */
    ModifyRulePriority(req: ModifyRulePriorityRequest, cb?: (error: string, rep: ModifyRulePriorityResponse) => void): Promise<ModifyRulePriorityResponse>;
    /**
     * 将未绑定套餐的站点绑定到已有套餐
     */
    BindZoneToPlan(req: BindZoneToPlanRequest, cb?: (error: string, rep: BindZoneToPlanResponse) => void): Promise<BindZoneToPlanResponse>;
    /**
     * 校验证书
     */
    CheckCertificate(req: CheckCertificateRequest, cb?: (error: string, rep: CheckCertificateResponse) => void): Promise<CheckCertificateResponse>;
    /**
     * 创建刷新/预热重放任务
     */
    CreateReplayTask(req: CreateReplayTaskRequest, cb?: (error: string, rep: CreateReplayTaskResponse) => void): Promise<CreateReplayTaskResponse>;
    /**
     * 查询别称域名信息列表。
     */
    DescribeAliasDomains(req: DescribeAliasDomainsRequest, cb?: (error: string, rep: DescribeAliasDomainsResponse) => void): Promise<DescribeAliasDomainsResponse>;
    /**
     * 查询站点拨测配额
     */
    DescribeSpeedTestingQuota(req: DescribeSpeedTestingQuotaRequest, cb?: (error: string, rep: DescribeSpeedTestingQuotaResponse) => void): Promise<DescribeSpeedTestingQuotaResponse>;
    /**
     * 对用户指定的域名进行一次站点拨测
     */
    CreateSpeedTesting(req: CreateSpeedTestingRequest, cb?: (error: string, rep: CreateSpeedTestingResponse) => void): Promise<CreateSpeedTestingResponse>;
    /**
     * 更新源站防护IP白名单
     */
    UpdateOriginProtectionIPWhitelist(req: UpdateOriginProtectionIPWhitelistRequest, cb?: (error: string, rep: UpdateOriginProtectionIPWhitelistResponse) => void): Promise<UpdateOriginProtectionIPWhitelistResponse>;
    /**
     * 本接口（DescribeWebManagedRulesHitRuleDetail）用于查询WAF攻击命中规则详情。
     */
    DescribeWebManagedRulesHitRuleDetail(req: DescribeWebManagedRulesHitRuleDetailRequest, cb?: (error: string, rep: DescribeWebManagedRulesHitRuleDetailResponse) => void): Promise<DescribeWebManagedRulesHitRuleDetailResponse>;
    /**
     * 查询规则引擎规则。
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 查询站点拨测结果
     */
    DescribeSpeedTestingMetricData(req: DescribeSpeedTestingMetricDataRequest, cb?: (error: string, rep: DescribeSpeedTestingMetricDataResponse) => void): Promise<DescribeSpeedTestingMetricDataResponse>;
    /**
     * 创建应用代理
     */
    CreateApplicationProxy(req: CreateApplicationProxyRequest, cb?: (error: string, rep: CreateApplicationProxyResponse) => void): Promise<CreateApplicationProxyResponse>;
    /**
     * 获取源站组列表
     */
    DescribeOriginGroup(req: DescribeOriginGroupRequest, cb?: (error: string, rep: DescribeOriginGroupResponse) => void): Promise<DescribeOriginGroupResponse>;
    /**
     * 修改应用代理的状态
     */
    ModifyApplicationProxyStatus(req: ModifyApplicationProxyStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyStatusResponse) => void): Promise<ModifyApplicationProxyStatusResponse>;
    /**
     * 本接口（DescribeWebManagedRulesData）用于查询WAF攻击的时序数据。
     */
    DescribeWebManagedRulesData(req: DescribeWebManagedRulesDataRequest, cb?: (error: string, rep: DescribeWebManagedRulesDataResponse) => void): Promise<DescribeWebManagedRulesDataResponse>;
    /**
     * 本接口（DescribeTimingL7AnalysisData）查询七层数据分析类时序数据。
     */
    DescribeTimingL7AnalysisData(req: DescribeTimingL7AnalysisDataRequest, cb?: (error: string, rep: DescribeTimingL7AnalysisDataResponse) => void): Promise<DescribeTimingL7AnalysisDataResponse>;
    /**
     * 修改别称域名。
     */
    ModifyAliasDomain(req: ModifyAliasDomainRequest, cb?: (error: string, rep: ModifyAliasDomainResponse) => void): Promise<ModifyAliasDomainResponse>;
    /**
     * 修改应用代理规则的状态
     */
    ModifyApplicationProxyRuleStatus(req: ModifyApplicationProxyRuleStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleStatusResponse) => void): Promise<ModifyApplicationProxyRuleStatusResponse>;
    /**
     * 查询应用代理列表。
     */
    DescribeApplicationProxies(req: DescribeApplicationProxiesRequest, cb?: (error: string, rep: DescribeApplicationProxiesResponse) => void): Promise<DescribeApplicationProxiesResponse>;
}

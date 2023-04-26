import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreatePlanForZoneResponse, DownloadL7LogsRequest, DescribeSpeedTestingQuotaResponse, DeleteRulesRequest, ModifyDefaultCertificateRequest, DescribeOriginGroupResponse, DescribeWebManagedRulesLogResponse, DescribeTopL7CacheDataRequest, CreateCredentialResponse, DeleteApplicationProxyResponse, DescribeZonesRequest, DescribeLogTopicTasksRequest, CreateCredentialRequest, ModifyRuleRequest, DescribePrefetchTasksResponse, DescribeWebManagedRulesHitRuleDetailRequest, DeleteApplicationProxyRequest, DescribeDDoSAttackDataResponse, ModifySecurityWafGroupPolicyRequest, DescribeZoneSettingRequest, DescribeClientRuleListResponse, DescribeIdentificationsResponse, ModifySecurityPolicyRequest, DescribeDDoSAttackEventResponse, ModifyApplicationProxyRuleStatusResponse, DescribeClientRuleListRequest, ModifyZoneSettingRequest, CreateApplicationProxyResponse, ModifyOriginGroupResponse, DeleteAccelerationDomainsRequest, ModifyAliasDomainRequest, DescribeAvailablePlansRequest, DescribeSingleL7AnalysisDataRequest, ModifySecurityPolicyResponse, DescribeHostsSettingResponse, ModifyZoneStatusResponse, ModifyZoneResponse, ModifyZoneRequest, ModifyApplicationProxyStatusResponse, DeleteZoneResponse, CreateRuleResponse, CreatePurgeTaskResponse, DeleteApplicationProxyRuleResponse, ReclaimAliasDomainRequest, DescribeRulesResponse, DescribeOriginProtectionResponse, BindZoneToPlanResponse, DeleteOriginGroupRequest, DescribeAliasDomainsRequest, ModifyApplicationProxyStatusRequest, ModifyHostsCertificateRequest, DescribeDnsDataResponse, ModifyAccelerationDomainStatusesResponse, DescribeRulesSettingResponse, DescribeDDoSAttackTopDataRequest, ModifyAccelerationDomainRequest, DescribeRulesRequest, DescribeSpeedTestingMetricDataRequest, ModifyZoneSettingResponse, DeleteSecurityIPGroupRequest, DescribeSpeedTestingDetailsResponse, CreateAliasDomainRequest, CreateAliasDomainResponse, DescribeOriginProtectionRequest, CreatePrefetchTaskRequest, DeleteApplicationProxyRuleRequest, DescribeApplicationProxiesResponse, DescribeTopL7AnalysisDataRequest, DescribeAccelerationDomainsResponse, ModifyRulePriorityResponse, DescribeTopL7CacheDataResponse, DescribeOverviewL7DataRequest, IdentifyZoneResponse, DescribeWebProtectionTopDataRequest, DeleteSecurityIPGroupResponse, ModifySecurityWafGroupPolicyResponse, DescribeTimingL7SourceDataResponse, DescribeWebManagedRulesDataRequest, DescribeWebManagedRulesDataResponse, CreateSpeedTestingRequest, ModifyAliasDomainStatusResponse, ModifyRulePriorityRequest, DescribeTimingL7AnalysisDataRequest, CreatePrefetchTaskResponse, DescribeDefaultCertificatesRequest, BindZoneToPlanRequest, DescribeWebProtectionHitRuleDetailRequest, CreateZoneRequest, DescribeTimingL7CacheDataRequest, ModifyRuleResponse, CheckCertificateResponse, DescribeLogSetsResponse, DescribeWebProtectionDataRequest, CheckCertificateRequest, DescribeAddableEntityListResponse, CreateApplicationProxyRuleRequest, ModifyApplicationProxyRequest, DownloadL4LogsRequest, CreateReplayTaskRequest, DescribeWebProtectionHitRuleDetailResponse, DescribeDDoSAttackDataRequest, DescribePurgeTasksRequest, DescribeWebProtectionClientIpListResponse, DescribeTimingL7AnalysisDataResponse, DescribeApplicationProxiesRequest, DescribeContentQuotaRequest, DescribeOverviewL7DataResponse, ModifyHostsCertificateResponse, CreateRuleRequest, ModifyZoneStatusRequest, CreateApplicationProxyRuleResponse, DescribeLogSetsRequest, CreatePlanForZoneRequest, ModifyAliasDomainStatusRequest, CreateApplicationProxyRequest, DescribeSpeedTestingMetricDataResponse, CreateAccelerationDomainResponse, DescribeTimingL4DataResponse, CreateZoneResponse, UpdateOriginProtectionIPWhitelistRequest, DescribeSpeedTestingQuotaRequest, ModifyApplicationProxyResponse, ModifySecurityIPGroupResponse, ReclaimZoneRequest, ModifyOriginGroupRequest, DownloadL4LogsResponse, DescribeTimingL7CacheDataResponse, DescribeAddableEntityListRequest, DescribeSingleL7AnalysisDataResponse, DeleteOriginGroupResponse, DescribeSpeedTestingDetailsRequest, DescribeTimingL7SourceDataRequest, ReclaimZoneResponse, UpdateOriginProtectionIPWhitelistResponse, DescribeIdentificationsRequest, DescribeDefaultCertificatesResponse, CreateOriginGroupResponse, ModifyApplicationProxyRuleStatusRequest, DescribeAliasDomainsResponse, CreateAccelerationDomainRequest, DeleteZoneRequest, ModifyDefaultCertificateResponse, DescribeTopL7AnalysisDataResponse, DescribeOriginGroupRequest, ModifyApplicationProxyRuleResponse, DescribeZoneSettingResponse, CreateSecurityIPGroupRequest, DeleteRulesResponse, DescribeWebProtectionDataResponse, ModifyApplicationProxyRuleRequest, ModifyAccelerationDomainResponse, DescribePrefetchTasksRequest, DescribeRulesSettingRequest, DescribeZonesResponse, ModifyAliasDomainResponse, DeleteAliasDomainRequest, DescribeContentQuotaResponse, DeleteAccelerationDomainsResponse, DescribeDnsDataRequest, CreatePurgeTaskRequest, DownloadL7LogsResponse, CreateOriginGroupRequest, DescribeTimingL4DataRequest, DescribeHostsSettingRequest, DescribeWebManagedRulesLogRequest, CreateSecurityIPGroupResponse, DescribePurgeTasksResponse, DescribeAvailablePlansResponse, DescribeDDoSAttackEventRequest, DescribeWebProtectionTopDataResponse, ModifySecurityIPGroupRequest, DescribeWebManagedRulesHitRuleDetailResponse, DescribeWebProtectionClientIpListRequest, IdentifyZoneRequest, CreateSpeedTestingResponse, DescribeAccelerationDomainsRequest, ReclaimAliasDomainResponse, DescribeDDoSAttackTopDataResponse, DeleteAliasDomainResponse, ModifyAccelerationDomainStatusesRequest, DescribeLogTopicTasksResponse, CreateReplayTaskResponse } from "./teo_models";
/**
 * teo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建清除缓存任务
     */
    CreatePurgeTask(req: CreatePurgeTaskRequest, cb?: (error: string, rep: CreatePurgeTaskResponse) => void): Promise<CreatePurgeTaskResponse>;
    /**
     * 本接口（DownloadL4Logs）用于下载四层离线日志。
     */
    DownloadL4Logs(req: DownloadL4LogsRequest, cb?: (error: string, rep: DownloadL4LogsResponse) => void): Promise<DownloadL4LogsResponse>;
    /**
     * 为未购买套餐的站点购买套餐
     */
    CreatePlanForZone(req: CreatePlanForZoneRequest, cb?: (error: string, rep: CreatePlanForZoneResponse) => void): Promise<CreatePlanForZoneResponse>;
    /**
     * 查询内容管理接口配额
     */
    DescribeContentQuota(req: DescribeContentQuotaRequest, cb?: (error: string, rep: DescribeContentQuotaResponse) => void): Promise<DescribeContentQuotaResponse>;
    /**
     * 查询站点的验证信息。
     */
    DescribeIdentifications(req: DescribeIdentificationsRequest, cb?: (error: string, rep: DescribeIdentificationsResponse) => void): Promise<DescribeIdentificationsResponse>;
    /**
     * 用于验证站点所有权。
     */
    IdentifyZone(req: IdentifyZoneRequest, cb?: (error: string, rep: IdentifyZoneResponse) => void): Promise<IdentifyZoneResponse>;
    /**
     * 查询默认证书列表
     */
    DescribeDefaultCertificates(req: DescribeDefaultCertificatesRequest, cb?: (error: string, rep: DescribeDefaultCertificatesResponse) => void): Promise<DescribeDefaultCertificatesResponse>;
    /**
     * 查询加速域名列表，支持搜索、分页、排序、过滤。
     */
    DescribeAccelerationDomains(req: DescribeAccelerationDomainsRequest, cb?: (error: string, rep: DescribeAccelerationDomainsResponse) => void): Promise<DescribeAccelerationDomainsResponse>;
    /**
     * 修改源站组
     */
    ModifyOriginGroup(req: ModifyOriginGroupRequest, cb?: (error: string, rep: ModifyOriginGroupResponse) => void): Promise<ModifyOriginGroupResponse>;
    /**
     * 删除应用代理
     */
    DeleteApplicationProxy(req: DeleteApplicationProxyRequest, cb?: (error: string, rep: DeleteApplicationProxyResponse) => void): Promise<DeleteApplicationProxyResponse>;
    /**
     * 本接口（DescribeWebManagedRulesLog）用于查询Web攻击日志。
     */
    DescribeWebManagedRulesLog(req: DescribeWebManagedRulesLogRequest, cb?: (error: string, rep: DescribeWebManagedRulesLogResponse) => void): Promise<DescribeWebManagedRulesLogResponse>;
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
     * 本接口（DescribeWebProtectionData）用于查询CC防护时序数据。
     */
    DescribeWebProtectionData(req: DescribeWebProtectionDataRequest, cb?: (error: string, rep: DescribeWebProtectionDataResponse) => void): Promise<DescribeWebProtectionDataResponse>;
    /**
     * 修改站点信息。
     */
    ModifyZone(req: ModifyZoneRequest, cb?: (error: string, rep: ModifyZoneResponse) => void): Promise<ModifyZoneResponse>;
    /**
     * 创建预热任务
     */
    CreatePrefetchTask(req: CreatePrefetchTaskRequest, cb?: (error: string, rep: CreatePrefetchTaskResponse) => void): Promise<CreatePrefetchTaskResponse>;
    /**
     * 删除别称域名。
     */
    DeleteAliasDomain(req: DeleteAliasDomainRequest, cb?: (error: string, rep: DeleteAliasDomainResponse) => void): Promise<DeleteAliasDomainResponse>;
    /**
     * 本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。
     */
    DescribeOverviewL7Data(req: DescribeOverviewL7DataRequest, cb?: (error: string, rep: DescribeOverviewL7DataResponse) => void): Promise<DescribeOverviewL7DataResponse>;
    /**
     * 本接口（DescribeAddableEntityList）用于查询剩余可添加的日志推送实体列表。
     */
    DescribeAddableEntityList(req: DescribeAddableEntityListRequest, cb?: (error: string, rep: DescribeAddableEntityListResponse) => void): Promise<DescribeAddableEntityListResponse>;
    /**
     * 创建加速域名
     */
    CreateAccelerationDomain(req: CreateAccelerationDomainRequest, cb?: (error: string, rep: CreateAccelerationDomainResponse) => void): Promise<CreateAccelerationDomainResponse>;
    /**
     * 校验证书
     */
    CheckCertificate(req: CheckCertificateRequest, cb?: (error: string, rep: CheckCertificateResponse) => void): Promise<CheckCertificateResponse>;
    /**
     * 创建刷新/预热重放任务
     */
    CreateReplayTask(req: CreateReplayTaskRequest, cb?: (error: string, rep: CreateReplayTaskResponse) => void): Promise<CreateReplayTaskResponse>;
    /**
     * 查询站点拨测配额
     */
    DescribeSpeedTestingQuota(req: DescribeSpeedTestingQuotaRequest, cb?: (error: string, rep: DescribeSpeedTestingQuotaResponse) => void): Promise<DescribeSpeedTestingQuotaResponse>;
    /**
     * 对用户指定的域名进行一次站点拨测
     */
    CreateSpeedTesting(req: CreateSpeedTestingRequest, cb?: (error: string, rep: CreateSpeedTestingResponse) => void): Promise<CreateSpeedTestingResponse>;
    /**
     * 查询站点拨测结果
     */
    DescribeSpeedTestingMetricData(req: DescribeSpeedTestingMetricDataRequest, cb?: (error: string, rep: DescribeSpeedTestingMetricDataResponse) => void): Promise<DescribeSpeedTestingMetricDataResponse>;
    /**
     * 用于修改站点配置
     */
    ModifyZoneSetting(req: ModifyZoneSettingRequest, cb?: (error: string, rep: ModifyZoneSettingResponse) => void): Promise<ModifyZoneSettingResponse>;
    /**
     * 修改应用代理规则的状态
     */
    ModifyApplicationProxyRuleStatus(req: ModifyApplicationProxyRuleStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleStatusResponse) => void): Promise<ModifyApplicationProxyRuleStatusResponse>;
    /**
     * 查询预热任务状态
     */
    DescribePrefetchTasks(req: DescribePrefetchTasksRequest, cb?: (error: string, rep: DescribePrefetchTasksResponse) => void): Promise<DescribePrefetchTasksResponse>;
    /**
     * 删除源站组
     */
    DeleteOriginGroup(req: DeleteOriginGroupRequest, cb?: (error: string, rep: DeleteOriginGroupResponse) => void): Promise<DeleteOriginGroupResponse>;
    /**
     * 更新源站防护IP白名单
     */
    UpdateOriginProtectionIPWhitelist(req: UpdateOriginProtectionIPWhitelistRequest, cb?: (error: string, rep: UpdateOriginProtectionIPWhitelistResponse) => void): Promise<UpdateOriginProtectionIPWhitelistResponse>;
    /**
     * 创建安全 IP 组
     */
    CreateSecurityIPGroup(req: CreateSecurityIPGroupRequest, cb?: (error: string, rep: CreateSecurityIPGroupResponse) => void): Promise<CreateSecurityIPGroupResponse>;
    /**
     * 查询清除缓存历史记录
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 批量删除加速域名
     */
    DeleteAccelerationDomains(req: DeleteAccelerationDomainsRequest, cb?: (error: string, rep: DeleteAccelerationDomainsResponse) => void): Promise<DeleteAccelerationDomainsResponse>;
    /**
     * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
     */
    DescribeTimingL7CacheData(req: DescribeTimingL7CacheDataRequest, cb?: (error: string, rep: DescribeTimingL7CacheDataResponse) => void): Promise<DescribeTimingL7CacheDataResponse>;
    /**
     * 创建别称域名。
     */
    CreateAliasDomain(req: CreateAliasDomainRequest, cb?: (error: string, rep: CreateAliasDomainResponse) => void): Promise<CreateAliasDomainResponse>;
    /**
     * 本接口（DescribeWebProtectionHitRuleDetail）用于查询CC防护命中规则详情列表。
     */
    DescribeWebProtectionHitRuleDetail(req: DescribeWebProtectionHitRuleDetailRequest, cb?: (error: string, rep: DescribeWebProtectionHitRuleDetailResponse) => void): Promise<DescribeWebProtectionHitRuleDetailResponse>;
    /**
     * 修改别称域名状态。
     */
    ModifyAliasDomainStatus(req: ModifyAliasDomainStatusRequest, cb?: (error: string, rep: ModifyAliasDomainStatusResponse) => void): Promise<ModifyAliasDomainStatusResponse>;
    /**
     * 本接口（DescribeTopL7CacheData）用于查询七层缓存分析topN流量数据。
     */
    DescribeTopL7CacheData(req: DescribeTopL7CacheDataRequest, cb?: (error: string, rep: DescribeTopL7CacheDataResponse) => void): Promise<DescribeTopL7CacheDataResponse>;
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
     * 修改Web&Bot安全配置。
     */
    ModifySecurityPolicy(req: ModifySecurityPolicyRequest, cb?: (error: string, rep: ModifySecurityPolicyResponse) => void): Promise<ModifySecurityPolicyResponse>;
    /**
     * 修改规则引擎规则优先级
     */
    ModifyRulePriority(req: ModifyRulePriorityRequest, cb?: (error: string, rep: ModifyRulePriorityResponse) => void): Promise<ModifyRulePriorityResponse>;
    /**
     * 将未绑定套餐的站点绑定到已有套餐
     */
    BindZoneToPlan(req: BindZoneToPlanRequest, cb?: (error: string, rep: BindZoneToPlanResponse) => void): Promise<BindZoneToPlanResponse>;
    /**
     * 本接口（DescribeDDoSAttackEvent）用于查询DDoS攻击事件列表。
     */
    DescribeDDoSAttackEvent(req: DescribeDDoSAttackEventRequest, cb?: (error: string, rep: DescribeDDoSAttackEventResponse) => void): Promise<DescribeDDoSAttackEventResponse>;
    /**
     * 修改加速域名信息
     */
    ModifyAccelerationDomain(req: ModifyAccelerationDomainRequest, cb?: (error: string, rep: ModifyAccelerationDomainResponse) => void): Promise<ModifyAccelerationDomainResponse>;
    /**
     * 修改应用代理的状态
     */
    ModifyApplicationProxyStatus(req: ModifyApplicationProxyStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyStatusResponse) => void): Promise<ModifyApplicationProxyStatusResponse>;
    /**
     * 本接口（DescribeTimingL7AnalysisData）查询七层数据分析类时序数据。
     */
    DescribeTimingL7AnalysisData(req: DescribeTimingL7AnalysisDataRequest, cb?: (error: string, rep: DescribeTimingL7AnalysisDataResponse) => void): Promise<DescribeTimingL7AnalysisDataResponse>;
    /**
     * 查询应用代理列表。
     */
    DescribeApplicationProxies(req: DescribeApplicationProxiesRequest, cb?: (error: string, rep: DescribeApplicationProxiesResponse) => void): Promise<DescribeApplicationProxiesResponse>;
    /**
     * 本接口（DescribeTimingL7SourceData）查询七层回源分析时序数据。
     */
    DescribeTimingL7SourceData(req: DescribeTimingL7SourceDataRequest, cb?: (error: string, rep: DescribeTimingL7SourceDataResponse) => void): Promise<DescribeTimingL7SourceDataResponse>;
    /**
     * 本接口（DescribeClientRuleList）用于查询封禁客户端信息列表。
     */
    DescribeClientRuleList(req: DescribeClientRuleListRequest, cb?: (error: string, rep: DescribeClientRuleListResponse) => void): Promise<DescribeClientRuleListResponse>;
    /**
     * 规则引擎创建规则。
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 修改应用代理
     */
    ModifyApplicationProxy(req: ModifyApplicationProxyRequest, cb?: (error: string, rep: ModifyApplicationProxyResponse) => void): Promise<ModifyApplicationProxyResponse>;
    /**
     * 用于用户接入新的站点。
     */
    CreateZone(req: CreateZoneRequest, cb?: (error: string, rep: CreateZoneResponse) => void): Promise<CreateZoneResponse>;
    /**
     * 本接口（DescribeWebProtectionClientIpList）用于查询CC防护客户端（攻击源）IP信息。
     */
    DescribeWebProtectionClientIpList(req: DescribeWebProtectionClientIpListRequest, cb?: (error: string, rep: DescribeWebProtectionClientIpListResponse) => void): Promise<DescribeWebProtectionClientIpListResponse>;
    /**
     * 查询当前账户可用套餐信息列表
     */
    DescribeAvailablePlans(req?: DescribeAvailablePlansRequest, cb?: (error: string, rep: DescribeAvailablePlansResponse) => void): Promise<DescribeAvailablePlansResponse>;
    /**
     * 修改安全配置托管规则
     */
    ModifySecurityWafGroupPolicy(req: ModifySecurityWafGroupPolicyRequest, cb?: (error: string, rep: ModifySecurityWafGroupPolicyResponse) => void): Promise<ModifySecurityWafGroupPolicyResponse>;
    /**
     * 获取DNS请求数统计曲线
     */
    DescribeDnsData(req: DescribeDnsDataRequest, cb?: (error: string, rep: DescribeDnsDataResponse) => void): Promise<DescribeDnsDataResponse>;
    /**
     * 返回规则引擎可应用匹配请求的设置列表及其详细建议配置信息
     */
    DescribeRulesSetting(req?: DescribeRulesSettingRequest, cb?: (error: string, rep: DescribeRulesSettingResponse) => void): Promise<DescribeRulesSettingResponse>;
    /**
     * 本接口（DescribeLogTopicTasks）用于获取日志推送任务列表。
     */
    DescribeLogTopicTasks(req: DescribeLogTopicTasksRequest, cb?: (error: string, rep: DescribeLogTopicTasksResponse) => void): Promise<DescribeLogTopicTasksResponse>;
    /**
     * 批量修改加速域名状态
     */
    ModifyAccelerationDomainStatuses(req: ModifyAccelerationDomainStatusesRequest, cb?: (error: string, rep: ModifyAccelerationDomainStatusesResponse) => void): Promise<ModifyAccelerationDomainStatusesResponse>;
    /**
     * 修改安全 IP 组。
     */
    ModifySecurityIPGroup(req: ModifySecurityIPGroupRequest, cb?: (error: string, rep: ModifySecurityIPGroupResponse) => void): Promise<ModifySecurityIPGroupResponse>;
    /**
     * 本接口（DescribeDDoSAttackTopData）用于查询DDoS攻击Top数据。
     */
    DescribeDDoSAttackTopData(req: DescribeDDoSAttackTopDataRequest, cb?: (error: string, rep: DescribeDDoSAttackTopDataResponse) => void): Promise<DescribeDDoSAttackTopDataResponse>;
    /**
     * 用于开启，关闭站点。
     */
    ModifyZoneStatus(req: ModifyZoneStatusRequest, cb?: (error: string, rep: ModifyZoneStatusResponse) => void): Promise<ModifyZoneStatusResponse>;
    /**
     * 批量删除规则引擎规则。
     */
    DeleteRules(req: DeleteRulesRequest, cb?: (error: string, rep: DeleteRulesResponse) => void): Promise<DeleteRulesResponse>;
    /**
     * 本接口（DescribeSingleL7AnalysisData）用于查询七层流量数据分析单值数据列表，单值数据表示：指标在查询时间范围内的单个统计数据，通常表现为接口仅返回一个统计数值。
     */
    DescribeSingleL7AnalysisData(req: DescribeSingleL7AnalysisDataRequest, cb?: (error: string, rep: DescribeSingleL7AnalysisDataResponse) => void): Promise<DescribeSingleL7AnalysisDataResponse>;
    /**
     * 修改默认证书状态
     */
    ModifyDefaultCertificate(req: ModifyDefaultCertificateRequest, cb?: (error: string, rep: ModifyDefaultCertificateResponse) => void): Promise<ModifyDefaultCertificateResponse>;
    /**
     * 本接口（DescribeWebManagedRulesHitRuleDetail）用于查询WAF攻击命中规则详情。
     */
    DescribeWebManagedRulesHitRuleDetail(req: DescribeWebManagedRulesHitRuleDetailRequest, cb?: (error: string, rep: DescribeWebManagedRulesHitRuleDetailResponse) => void): Promise<DescribeWebManagedRulesHitRuleDetailResponse>;
    /**
     * 查询规则引擎规则。
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 创建应用代理
     */
    CreateApplicationProxy(req: CreateApplicationProxyRequest, cb?: (error: string, rep: CreateApplicationProxyResponse) => void): Promise<CreateApplicationProxyResponse>;
    /**
     * 获取源站组列表
     */
    DescribeOriginGroup(req: DescribeOriginGroupRequest, cb?: (error: string, rep: DescribeOriginGroupResponse) => void): Promise<DescribeOriginGroupResponse>;
    /**
     * 修改别称域名。
     */
    ModifyAliasDomain(req: ModifyAliasDomainRequest, cb?: (error: string, rep: ModifyAliasDomainResponse) => void): Promise<ModifyAliasDomainResponse>;
    /**
     * 修改应用代理规则
     */
    ModifyApplicationProxyRule(req: ModifyApplicationProxyRuleRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleResponse) => void): Promise<ModifyApplicationProxyRuleResponse>;
    /**
     * 创建源站组
     */
    CreateOriginGroup(req: CreateOriginGroupRequest, cb?: (error: string, rep: CreateOriginGroupResponse) => void): Promise<CreateOriginGroupResponse>;
    /**
     * 用于查询拨测分地区数据
     */
    DescribeSpeedTestingDetails(req: DescribeSpeedTestingDetailsRequest, cb?: (error: string, rep: DescribeSpeedTestingDetailsResponse) => void): Promise<DescribeSpeedTestingDetailsResponse>;
    /**
     * 用于修改域名证书
     */
    ModifyHostsCertificate(req: ModifyHostsCertificateRequest, cb?: (error: string, rep: ModifyHostsCertificateResponse) => void): Promise<ModifyHostsCertificateResponse>;
    /**
     * 用于查询域名配置信息
     */
    DescribeHostsSetting(req: DescribeHostsSettingRequest, cb?: (error: string, rep: DescribeHostsSettingResponse) => void): Promise<DescribeHostsSettingResponse>;
    /**
     * 查询源站防护信息
     */
    DescribeOriginProtection(req: DescribeOriginProtectionRequest, cb?: (error: string, rep: DescribeOriginProtectionResponse) => void): Promise<DescribeOriginProtectionResponse>;
    /**
     * 本接口（DescribeLogSets）用于获取日志集列表。
     */
    DescribeLogSets(req: DescribeLogSetsRequest, cb?: (error: string, rep: DescribeLogSetsResponse) => void): Promise<DescribeLogSetsResponse>;
    /**
     * 用于查询站点的所有配置信息。
     */
    DescribeZoneSetting(req: DescribeZoneSettingRequest, cb?: (error: string, rep: DescribeZoneSettingResponse) => void): Promise<DescribeZoneSettingResponse>;
    /**
     * 删除指定 IP 组，如果有规则引用了 IP 组情况，则不允许删除。
     */
    DeleteSecurityIPGroup(req: DeleteSecurityIPGroupRequest, cb?: (error: string, rep: DeleteSecurityIPGroupResponse) => void): Promise<DeleteSecurityIPGroupResponse>;
    /**
     * 当客户取回站定的同时会取回此站点下关联的别称域名，此时入参为ZoneId；当客户接入站点发现已被别称域名接入时通过验证之后可取回域名，此时入参为ZoneName。
     */
    ReclaimAliasDomain(req: ReclaimAliasDomainRequest, cb?: (error: string, rep: ReclaimAliasDomainResponse) => void): Promise<ReclaimAliasDomainResponse>;
    /**
     * 创建应用代理规则
     */
    CreateApplicationProxyRule(req: CreateApplicationProxyRuleRequest, cb?: (error: string, rep: CreateApplicationProxyRuleResponse) => void): Promise<CreateApplicationProxyRuleResponse>;
    /**
     * 用户查询用户站点信息列表，支持分页。
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点。
     */
    ReclaimZone(req: ReclaimZoneRequest, cb?: (error: string, rep: ReclaimZoneResponse) => void): Promise<ReclaimZoneResponse>;
    /**
     * 删除站点。
     */
    DeleteZone(req: DeleteZoneRequest, cb?: (error: string, rep: DeleteZoneResponse) => void): Promise<DeleteZoneResponse>;
    /**
     * 本接口（DescribeDDoSAttackData）用于查询DDoS攻击时序数据。
     */
    DescribeDDoSAttackData(req: DescribeDDoSAttackDataRequest, cb?: (error: string, rep: DescribeDDoSAttackDataResponse) => void): Promise<DescribeDDoSAttackDataResponse>;
    /**
     * 本接口（DescribeWebProtectionTopData）用于查询CC防护的Top数据。
     */
    DescribeWebProtectionTopData(req: DescribeWebProtectionTopDataRequest, cb?: (error: string, rep: DescribeWebProtectionTopDataResponse) => void): Promise<DescribeWebProtectionTopDataResponse>;
    /**
     * 本接口（DescribeWebManagedRulesData）用于查询WAF攻击的时序数据。
     */
    DescribeWebManagedRulesData(req: DescribeWebManagedRulesDataRequest, cb?: (error: string, rep: DescribeWebManagedRulesDataResponse) => void): Promise<DescribeWebManagedRulesDataResponse>;
    /**
     * 查询别称域名信息列表。
     */
    DescribeAliasDomains(req: DescribeAliasDomainsRequest, cb?: (error: string, rep: DescribeAliasDomainsResponse) => void): Promise<DescribeAliasDomainsResponse>;
}

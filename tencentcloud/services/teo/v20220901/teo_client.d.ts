import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeOriginGroupResponse, ModifyLoadBalancingStatusResponse, DescribeBotDataRequest, DescribeSingleL7AnalysisDataRequest, DescribeHostsSettingResponse, DescribeRulesResponse, DescribeBillingDataRequest, CreateAliasDomainRequest, CreatePrefetchTaskRequest, DescribeApplicationProxiesResponse, DescribeTopL7AnalysisDataRequest, ModifyRulePriorityResponse, IdentifyZoneResponse, DescribeDDoSAttackSourceEventResponse, DescribeAliasDomainsResponse, DescribeTimingL7CacheDataRequest, DescribeSecurityPolicyListResponse, CheckCertificateRequest, DescribeDDoSAttackEventResponse, DescribeWebProtectionClientIpListResponse, DescribeTimingL7AnalysisDataResponse, ModifyDDoSPolicyHostResponse, DescribeSpeedTestingMetricDataResponse, CreateLogSetResponse, DownloadL4LogsRequest, CreateCustomErrorPageRequest, DescribeDnssecResponse, ModifyZoneCnameSpeedUpRequest, CreatePrefetchTaskResponse, DescribeDDoSPolicyResponse, CreateApplicationProxyRuleRequest, DescribeDDoSBlockListRequest, DescribeDDoSMajorAttackEventRequest, DescribeSecurityPolicyListRequest, DescribeTimingL7CacheDataResponse, DescribeZonesResponse, DescribeDDoSPolicyRequest, ReclaimZoneRequest, DeleteZoneRequest, ModifyZoneCnameSpeedUpResponse, DescribeRulesSettingRequest, DescribeDnsDataRequest, CreateOriginGroupRequest, ModifyLoadBalancingRequest, DescribeWebManagedRulesLogRequest, DescribeAvailablePlansResponse, DescribeWebProtectionTopDataResponse, DescribeDDoSAttackTopDataResponse, DescribeSpeedTestingQuotaResponse, DeleteRulesRequest, ModifyDefaultCertificateRequest, DeleteApplicationProxyResponse, ModifyAlarmDefaultThresholdResponse, CreateCredentialRequest, ModifyRuleRequest, DescribePrefetchTasksResponse, DescribeWebManagedRulesHitRuleDetailRequest, DescribeBotClientIpListResponse, ModifySecurityWafGroupPolicyRequest, DescribeZoneSettingRequest, ModifySecurityPolicyRequest, ModifyDnssecRequest, CreateApplicationProxyResponse, CreateIpTableListRequest, ModifyDDoSPolicyHostRequest, DeleteAliasDomainRequest, DescribeIdentificationsResponse, CreatePurgeTaskResponse, DeleteApplicationProxyRuleResponse, ReclaimAliasDomainRequest, CreateSecurityDropPageRequest, DeleteOriginGroupRequest, CreateLogTopicTaskResponse, DescribeDnsDataResponse, DescribeDDoSAttackSourceEventRequest, ModifyLoadBalancingStatusRequest, SwitchLogTopicTaskResponse, CreateDnsRecordResponse, DescribeZonesRequest, CreateLoadBalancingResponse, DeleteLogTopicTaskRequest, DescribeDnsRecordsRequest, ModifyDnsRecordRequest, DescribeDefaultCertificatesRequest, ModifyApplicationProxyRuleResponse, DescribeWebProtectionHitRuleDetailRequest, DescribeSecurityRuleIdRequest, DownloadL7LogsRequest, DeleteLoadBalancingResponse, DescribeAddableEntityListResponse, DescribeBotHitRuleDetailRequest, DescribeWebProtectionHitRuleDetailResponse, DescribeSpeedTestingMetricDataRequest, ModifyLogTopicTaskResponse, DescribeOverviewL7DataResponse, DescribeSecurityPolicyRequest, ModifyDnsRecordResponse, CreatePlanForZoneRequest, DeleteLoadBalancingRequest, DownloadL4LogsResponse, DeleteOriginGroupResponse, CreateSecurityDropPageResponse, DescribeIdentificationsRequest, ModifyHostsCertificateResponse, CreateLogSetRequest, CreateIpTableListResponse, DescribeZoneSettingResponse, DescribePurgeTasksRequest, IdentifyZoneRequest, ModifyDDoSPolicyResponse, DescribeZoneDDoSPolicyRequest, ModifyLogTopicTaskRequest, DescribeDDoSAttackEventRequest, DescribeWebProtectionClientIpListRequest, ModifyDnssecResponse, CreateSpeedTestingResponse, DescribeOriginGroupRequest, DescribeLogTopicTasksResponse, CreatePlanForZoneResponse, DescribeLogTopicTasksRequest, DescribeDDoSAttackEventDetailResponse, CreateCredentialResponse, DescribeAliasDomainsRequest, SwitchLogTopicTaskRequest, DeleteApplicationProxyRequest, ModifyZoneStatusRequest, ModifyOriginGroupResponse, ModifyAliasDomainRequest, DescribeSecurityPortraitRulesRequest, ReclaimZoneResponse, DescribeSecurityPolicyRegionsResponse, DescribeBotTopDataRequest, DeleteZoneResponse, CreateRuleResponse, CreateDnsRecordRequest, ModifyApplicationProxyRequest, ModifyAliasDomainStatusRequest, ModifyAlarmDefaultThresholdRequest, ModifyApplicationProxyRuleRequest, DescribeSpeedTestingDetailsResponse, CreateAliasDomainResponse, DeleteApplicationProxyRuleRequest, DescribeDDoSBlockListResponse, DescribeTopL7CacheDataResponse, CreateLoadBalancingRequest, DescribeDnssecRequest, ModifyAlarmConfigResponse, ModifyAliasDomainStatusResponse, DescribeTimingL7AnalysisDataRequest, DescribeSecurityGroupManagedRulesRequest, ModifyApplicationProxyStatusRequest, CreateZoneRequest, DescribeBotDataResponse, DescribeLogSetsResponse, DescribeClientRuleListResponse, DescribeLogTopicTaskDetailRequest, CreateSpeedTestingRequest, CreateReplayTaskRequest, DescribeRateLimitIntelligenceRuleRequest, DescribeDnsRecordsResponse, DescribeDDoSAttackDataRequest, DescribeWebManagedRulesDataResponse, DescribeApplicationProxiesRequest, DescribeContentQuotaRequest, DescribeWebProtectionAttackEventsRequest, CreateRuleRequest, DescribeRateLimitIntelligenceRuleResponse, CreateApplicationProxyRuleResponse, DescribeLogSetsRequest, CreateApplicationProxyRequest, DescribeTimingL4DataResponse, ModifyApplicationProxyResponse, ModifyApplicationProxyRuleStatusRequest, ModifyDefaultCertificateResponse, DescribeSecurityGroupManagedRulesResponse, DescribeSpeedTestingDetailsRequest, CreateLogTopicTaskRequest, ModifyAliasDomainResponse, DeleteDnsRecordsRequest, DescribeBotLogRequest, ModifyHostsCertificateRequest, DescribeTopL7AnalysisDataResponse, DescribeHostsSettingRequest, DescribeBotHitRuleDetailResponse, DescribeDDoSAttackEventDetailRequest, DeleteRulesResponse, DescribeWebManagedRulesHitRuleDetailResponse, ReclaimAliasDomainResponse, DeleteAliasDomainResponse, CreateReplayTaskResponse, DescribeTopL7CacheDataRequest, DescribeBotManagedRulesResponse, CreateCustomErrorPageResponse, DescribeDDoSAttackDataResponse, ModifyZoneSettingRequest, ModifyApplicationProxyRuleStatusResponse, DescribeClientRuleListRequest, ModifyZoneRequest, DescribeAvailablePlansRequest, ModifyZoneResponse, DescribeBotTopDataResponse, DescribeBotClientIpListRequest, DescribeDDoSAttackTopDataRequest, DescribeRulesRequest, DescribeDDoSMajorAttackEventResponse, DescribeContentQuotaResponse, ModifyZoneSettingResponse, DownloadL7LogsResponse, DescribeWebManagedRulesLogResponse, DescribeOverviewL7DataRequest, DescribeWebProtectionTopDataRequest, ModifySecurityWafGroupPolicyResponse, DescribeWebManagedRulesDataRequest, DescribePrefetchTasksRequest, ModifyRulePriorityRequest, ModifyRuleResponse, CheckCertificateResponse, DescribeWebProtectionDataRequest, DescribeSecurityPortraitRulesResponse, ModifyDDoSPolicyRequest, ModifyApplicationProxyStatusResponse, ModifyAlarmConfigRequest, DeleteLogTopicTaskResponse, ModifyLoadBalancingResponse, DescribeRulesSettingResponse, DescribeLogTopicTaskDetailResponse, DescribeBillingDataResponse, CreateZoneResponse, DescribeSpeedTestingQuotaRequest, ModifySecurityPolicyResponse, ModifyOriginGroupRequest, DescribeAddableEntityListRequest, DescribeSingleL7AnalysisDataResponse, DescribeDefaultCertificatesResponse, CreateOriginGroupResponse, DescribeSecurityPolicyResponse, DescribeSecurityPolicyRegionsRequest, DescribeLoadBalancingRequest, DescribeWebProtectionDataResponse, DescribeZoneDDoSPolicyResponse, ModifyZoneStatusResponse, DescribeWebProtectionAttackEventsResponse, CreatePurgeTaskRequest, DeleteDnsRecordsResponse, DescribeSecurityRuleIdResponse, DescribePurgeTasksResponse, DescribeBotLogResponse, DescribeLoadBalancingResponse, DescribeTimingL4DataRequest, DescribeBotManagedRulesRequest } from "./teo_models";
/**
 * teo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建 DNS 记录
     */
    CreateDnsRecord(req: CreateDnsRecordRequest, cb?: (error: string, rep: CreateDnsRecordResponse) => void): Promise<CreateDnsRecordResponse>;
    /**
     * 创建清除缓存任务
     */
    CreatePurgeTask(req: CreatePurgeTaskRequest, cb?: (error: string, rep: CreatePurgeTaskResponse) => void): Promise<CreatePurgeTaskResponse>;
    /**
     * 本接口（DescribeBotClientIpList）用于查询Bot攻击客户端Ip信息列表。
     */
    DescribeBotClientIpList(req: DescribeBotClientIpListRequest, cb?: (error: string, rep: DescribeBotClientIpListResponse) => void): Promise<DescribeBotClientIpListResponse>;
    /**
     * 为未购买套餐的站点购买套餐
     */
    CreatePlanForZone(req: CreatePlanForZoneRequest, cb?: (error: string, rep: CreatePlanForZoneResponse) => void): Promise<CreatePlanForZoneResponse>;
    /**
     * 查询内容管理接口配额
     */
    DescribeContentQuota(req: DescribeContentQuotaRequest, cb?: (error: string, rep: DescribeContentQuotaResponse) => void): Promise<DescribeContentQuotaResponse>;
    /**
     * 获取托管规则组
     */
    DescribeSecurityGroupManagedRules(req: DescribeSecurityGroupManagedRulesRequest, cb?: (error: string, rep: DescribeSecurityGroupManagedRulesResponse) => void): Promise<DescribeSecurityGroupManagedRulesResponse>;
    /**
     * 本接口（DescribeWebProtectionAttackEvents）用于查询CC相关攻击事件列表。
     */
    DescribeWebProtectionAttackEvents(req: DescribeWebProtectionAttackEventsRequest, cb?: (error: string, rep: DescribeWebProtectionAttackEventsResponse) => void): Promise<DescribeWebProtectionAttackEventsResponse>;
    /**
     * 查询站点的验证信息。
     */
    DescribeIdentifications(req: DescribeIdentificationsRequest, cb?: (error: string, rep: DescribeIdentificationsResponse) => void): Promise<DescribeIdentificationsResponse>;
    /**
     * 修改站点信息。
     */
    ModifyZone(req: ModifyZoneRequest, cb?: (error: string, rep: ModifyZoneResponse) => void): Promise<ModifyZoneResponse>;
    /**
     * 创建负载均衡
     */
    CreateLoadBalancing(req: CreateLoadBalancingRequest, cb?: (error: string, rep: CreateLoadBalancingResponse) => void): Promise<CreateLoadBalancingResponse>;
    /**
     * 域名DDoS高可用开关
     */
    ModifyDDoSPolicyHost(req: ModifyDDoSPolicyHostRequest, cb?: (error: string, rep: ModifyDDoSPolicyHostResponse) => void): Promise<ModifyDDoSPolicyHostResponse>;
    /**
     * 用于验证站点所有权。
     */
    IdentifyZone(req: IdentifyZoneRequest, cb?: (error: string, rep: IdentifyZoneResponse) => void): Promise<IdentifyZoneResponse>;
    /**
     * 查询默认证书列表
     */
    DescribeDefaultCertificates(req: DescribeDefaultCertificatesRequest, cb?: (error: string, rep: DescribeDefaultCertificatesResponse) => void): Promise<DescribeDefaultCertificatesResponse>;
    /**
     * 修改源站组
     */
    ModifyOriginGroup(req: ModifyOriginGroupRequest, cb?: (error: string, rep: ModifyOriginGroupResponse) => void): Promise<ModifyOriginGroupResponse>;
    /**
     * 修改规则引擎规则。
     */
    ModifyRule(req: ModifyRuleRequest, cb?: (error: string, rep: ModifyRuleResponse) => void): Promise<ModifyRuleResponse>;
    /**
     * 本接口（ModifyLogTopicTask）用于修改日志推送任务信息。
     */
    ModifyLogTopicTask(req: ModifyLogTopicTaskRequest, cb?: (error: string, rep: ModifyLogTopicTaskResponse) => void): Promise<ModifyLogTopicTaskResponse>;
    /**
     * 查询Bot用户画像规则
     */
    DescribeSecurityPortraitRules(req: DescribeSecurityPortraitRulesRequest, cb?: (error: string, rep: DescribeSecurityPortraitRulesResponse) => void): Promise<DescribeSecurityPortraitRulesResponse>;
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
     * 修改负载均衡状态
     */
    ModifyLoadBalancingStatus(req: ModifyLoadBalancingStatusRequest, cb?: (error: string, rep: ModifyLoadBalancingStatusResponse) => void): Promise<ModifyLoadBalancingStatusResponse>;
    /**
     * 本接口（DescribeWebProtectionData）用于查询CC防护时序数据。
     */
    DescribeWebProtectionData(req: DescribeWebProtectionDataRequest, cb?: (error: string, rep: DescribeWebProtectionDataResponse) => void): Promise<DescribeWebProtectionDataResponse>;
    /**
     * 本接口（DescribeDDoSAttackSourceEvent）用于查询DDoS攻击源信息列表。
     */
    DescribeDDoSAttackSourceEvent(req: DescribeDDoSAttackSourceEventRequest, cb?: (error: string, rep: DescribeDDoSAttackSourceEventResponse) => void): Promise<DescribeDDoSAttackSourceEventResponse>;
    /**
     * 本接口（CreateClsLog）用于创建CLS日志集。
     */
    CreateLogSet(req: CreateLogSetRequest, cb?: (error: string, rep: CreateLogSetResponse) => void): Promise<CreateLogSetResponse>;
    /**
     * 当客户取回站定的同时会取回此站点下关联的别称域名，此时入参为ZoneId；当客户接入站点发现已被别称域名接入时通过验证之后可取回域名，此时入参为ZoneName。
     */
    ReclaimAliasDomain(req: ReclaimAliasDomainRequest, cb?: (error: string, rep: ReclaimAliasDomainResponse) => void): Promise<ReclaimAliasDomainResponse>;
    /**
     * 本接口（ModifyAlarmConfig）用于修改用户告警配置。
     */
    ModifyAlarmConfig(req: ModifyAlarmConfigRequest, cb?: (error: string, rep: ModifyAlarmConfigResponse) => void): Promise<ModifyAlarmConfigResponse>;
    /**
     * 本接口（DeleteLogTopicTask）用于删除日志推送任务。
     */
    DeleteLogTopicTask(req: DeleteLogTopicTaskRequest, cb?: (error: string, rep: DeleteLogTopicTaskResponse) => void): Promise<DeleteLogTopicTaskResponse>;
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
     * 查询所有地域信息
     */
    DescribeSecurityPolicyRegions(req: DescribeSecurityPolicyRegionsRequest, cb?: (error: string, rep: DescribeSecurityPolicyRegionsResponse) => void): Promise<DescribeSecurityPolicyRegionsResponse>;
    /**
     * 查询站点拨测结果
     */
    DescribeSpeedTestingMetricData(req: DescribeSpeedTestingMetricDataRequest, cb?: (error: string, rep: DescribeSpeedTestingMetricDataResponse) => void): Promise<DescribeSpeedTestingMetricDataResponse>;
    /**
     * 用于修改站点配置
     */
    ModifyZoneSetting(req: ModifyZoneSettingRequest, cb?: (error: string, rep: ModifyZoneSettingResponse) => void): Promise<ModifyZoneSettingResponse>;
    /**
     * 本接口（DescribeDDoSMajorAttackEvent）用于查询DDoS主攻击事件列表。
     */
    DescribeDDoSMajorAttackEvent(req: DescribeDDoSMajorAttackEventRequest, cb?: (error: string, rep: DescribeDDoSMajorAttackEventResponse) => void): Promise<DescribeDDoSMajorAttackEventResponse>;
    /**
     * 修改应用代理规则的状态
     */
    ModifyApplicationProxyRuleStatus(req: ModifyApplicationProxyRuleStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleStatusResponse) => void): Promise<ModifyApplicationProxyRuleStatusResponse>;
    /**
     * 查询全部安全实例
     */
    DescribeSecurityPolicyList(req: DescribeSecurityPolicyListRequest, cb?: (error: string, rep: DescribeSecurityPolicyListResponse) => void): Promise<DescribeSecurityPolicyListResponse>;
    /**
     * 查询预热任务状态
     */
    DescribePrefetchTasks(req: DescribePrefetchTasksRequest, cb?: (error: string, rep: DescribePrefetchTasksResponse) => void): Promise<DescribePrefetchTasksResponse>;
    /**
     * 创建自定义拦截页面。
     */
    CreateSecurityDropPage(req: CreateSecurityDropPageRequest, cb?: (error: string, rep: CreateSecurityDropPageResponse) => void): Promise<CreateSecurityDropPageResponse>;
    /**
     * 删除源站组
     */
    DeleteOriginGroup(req: DeleteOriginGroupRequest, cb?: (error: string, rep: DeleteOriginGroupResponse) => void): Promise<DeleteOriginGroupResponse>;
    /**
     * 本接口（DownloadL4Logs）用于下载四层离线日志。
     */
    DownloadL4Logs(req: DownloadL4LogsRequest, cb?: (error: string, rep: DownloadL4LogsResponse) => void): Promise<DownloadL4LogsResponse>;
    /**
     * 查询清除缓存历史记录
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 本接口（CreateLogTopicTask）用于创建日志推送任务。
     */
    CreateLogTopicTask(req: CreateLogTopicTaskRequest, cb?: (error: string, rep: CreateLogTopicTaskResponse) => void): Promise<CreateLogTopicTaskResponse>;
    /**
     * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
     */
    DescribeTimingL7CacheData(req: DescribeTimingL7CacheDataRequest, cb?: (error: string, rep: DescribeTimingL7CacheDataResponse) => void): Promise<DescribeTimingL7CacheDataResponse>;
    /**
     * 获取负载均衡列表
     */
    DescribeLoadBalancing(req: DescribeLoadBalancingRequest, cb?: (error: string, rep: DescribeLoadBalancingResponse) => void): Promise<DescribeLoadBalancingResponse>;
    /**
     * 删除负载均衡
     */
    DeleteLoadBalancing(req: DeleteLoadBalancingRequest, cb?: (error: string, rep: DeleteLoadBalancingResponse) => void): Promise<DeleteLoadBalancingResponse>;
    /**
     * 本接口（DescribeBotData）查询Bot攻击时序数据。
     */
    DescribeBotData(req: DescribeBotDataRequest, cb?: (error: string, rep: DescribeBotDataResponse) => void): Promise<DescribeBotDataResponse>;
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
     * 查询安全规则详情
     */
    DescribeSecurityRuleId(req: DescribeSecurityRuleIdRequest, cb?: (error: string, rep: DescribeSecurityRuleIdResponse) => void): Promise<DescribeSecurityRuleIdResponse>;
    /**
     * 本接口（DescribeTopL7AnalysisData）用于查询七层流量前topN的数据。
     */
    DescribeTopL7AnalysisData(req: DescribeTopL7AnalysisDataRequest, cb?: (error: string, rep: DescribeTopL7AnalysisDataResponse) => void): Promise<DescribeTopL7AnalysisDataResponse>;
    /**
     * 批量删除 DNS 记录
     */
    DeleteDnsRecords(req: DeleteDnsRecordsRequest, cb?: (error: string, rep: DeleteDnsRecordsResponse) => void): Promise<DeleteDnsRecordsResponse>;
    /**
     * 修改Web&Bot安全配置
     */
    ModifySecurityPolicy(req: ModifySecurityPolicyRequest, cb?: (error: string, rep: ModifySecurityPolicyResponse) => void): Promise<ModifySecurityPolicyResponse>;
    /**
     * 本接口（DescribeLogTopicTaskDetail）用于获取日志推送任务详细信息。
     */
    DescribeLogTopicTaskDetail(req: DescribeLogTopicTaskDetailRequest, cb?: (error: string, rep: DescribeLogTopicTaskDetailResponse) => void): Promise<DescribeLogTopicTaskDetailResponse>;
    /**
     * 修改规则引擎规则优先级
     */
    ModifyRulePriority(req: ModifyRulePriorityRequest, cb?: (error: string, rep: ModifyRulePriorityResponse) => void): Promise<ModifyRulePriorityResponse>;
    /**
     * 本接口（DescribeDDoSAttackEvent）用于查询DDoS攻击事件列表。
     */
    DescribeDDoSAttackEvent(req: DescribeDDoSAttackEventRequest, cb?: (error: string, rep: DescribeDDoSAttackEventResponse) => void): Promise<DescribeDDoSAttackEventResponse>;
    /**
     * 查询Bot托管规则
     */
    DescribeBotManagedRules(req: DescribeBotManagedRulesRequest, cb?: (error: string, rep: DescribeBotManagedRulesResponse) => void): Promise<DescribeBotManagedRulesResponse>;
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
     * 本接口（DescribeDDoSAttackEventDetail）用于查询DDoS攻击事件详情。
     */
    DescribeDDoSAttackEventDetail(req: DescribeDDoSAttackEventDetailRequest, cb?: (error: string, rep: DescribeDDoSAttackEventDetailResponse) => void): Promise<DescribeDDoSAttackEventDetailResponse>;
    /**
     * 本接口（DescribeWebProtectionClientIpList）用于查询CC防护客户端（攻击源）IP信息。
     */
    DescribeWebProtectionClientIpList(req: DescribeWebProtectionClientIpListRequest, cb?: (error: string, rep: DescribeWebProtectionClientIpListResponse) => void): Promise<DescribeWebProtectionClientIpListResponse>;
    /**
     * 查询当前账户可用套餐信息列表
     */
    DescribeAvailablePlans(req?: DescribeAvailablePlansRequest, cb?: (error: string, rep: DescribeAvailablePlansResponse) => void): Promise<DescribeAvailablePlansResponse>;
    /**
     * 查询所有DDoS防护分区
     */
    DescribeZoneDDoSPolicy(req: DescribeZoneDDoSPolicyRequest, cb?: (error: string, rep: DescribeZoneDDoSPolicyResponse) => void): Promise<DescribeZoneDDoSPolicyResponse>;
    /**
     * 修改负载均衡
     */
    ModifyLoadBalancing(req: ModifyLoadBalancingRequest, cb?: (error: string, rep: ModifyLoadBalancingResponse) => void): Promise<ModifyLoadBalancingResponse>;
    /**
     * 修改安全配置托管规则
     */
    ModifySecurityWafGroupPolicy(req: ModifySecurityWafGroupPolicyRequest, cb?: (error: string, rep: ModifySecurityWafGroupPolicyResponse) => void): Promise<ModifySecurityWafGroupPolicyResponse>;
    /**
     * 创建自定义规则的自定义页
     */
    CreateCustomErrorPage(req: CreateCustomErrorPageRequest, cb?: (error: string, rep: CreateCustomErrorPageResponse) => void): Promise<CreateCustomErrorPageResponse>;
    /**
     * 修改DDoS防护分区配置
     */
    ModifyDDoSPolicy(req: ModifyDDoSPolicyRequest, cb?: (error: string, rep: ModifyDDoSPolicyResponse) => void): Promise<ModifyDDoSPolicyResponse>;
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
     * 查询DDoS防护配置详情
     */
    DescribeDDoSPolicy(req: DescribeDDoSPolicyRequest, cb?: (error: string, rep: DescribeDDoSPolicyResponse) => void): Promise<DescribeDDoSPolicyResponse>;
    /**
     * 本接口（DescribeSingleL7AnalysisData）用于查询七层数据分析类单值流量数据列表。
     */
    DescribeSingleL7AnalysisData(req: DescribeSingleL7AnalysisDataRequest, cb?: (error: string, rep: DescribeSingleL7AnalysisDataResponse) => void): Promise<DescribeSingleL7AnalysisDataResponse>;
    /**
     * 本接口（DescribeBotHitRuleDetail）用于查询Bot攻击命中规则详情信息。
     */
    DescribeBotHitRuleDetail(req: DescribeBotHitRuleDetailRequest, cb?: (error: string, rep: DescribeBotHitRuleDetailResponse) => void): Promise<DescribeBotHitRuleDetailResponse>;
    /**
     * 修改默认证书状态
     */
    ModifyDefaultCertificate(req: ModifyDefaultCertificateRequest, cb?: (error: string, rep: ModifyDefaultCertificateResponse) => void): Promise<ModifyDefaultCertificateResponse>;
    /**
     * 查询安全防护配置详情
     */
    DescribeSecurityPolicy(req: DescribeSecurityPolicyRequest, cb?: (error: string, rep: DescribeSecurityPolicyResponse) => void): Promise<DescribeSecurityPolicyResponse>;
    /**
     * 创建IP黑白名单列表
     */
    CreateIpTableList(req: CreateIpTableListRequest, cb?: (error: string, rep: CreateIpTableListResponse) => void): Promise<CreateIpTableListResponse>;
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
     * 本接口（SwitchLogTopicTask）用于开启/关闭推送任务。
     */
    SwitchLogTopicTask(req: SwitchLogTopicTaskRequest, cb?: (error: string, rep: SwitchLogTopicTaskResponse) => void): Promise<SwitchLogTopicTaskResponse>;
    /**
     * 修改别称域名。
     */
    ModifyAliasDomain(req: ModifyAliasDomainRequest, cb?: (error: string, rep: ModifyAliasDomainResponse) => void): Promise<ModifyAliasDomainResponse>;
    /**
     * 用于查询 DNSSEC 相关信息
     */
    DescribeDnssec(req: DescribeDnssecRequest, cb?: (error: string, rep: DescribeDnssecResponse) => void): Promise<DescribeDnssecResponse>;
    /**
     * 修改应用代理规则
     */
    ModifyApplicationProxyRule(req: ModifyApplicationProxyRuleRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleResponse) => void): Promise<ModifyApplicationProxyRuleResponse>;
    /**
     * 创建源站组
     */
    CreateOriginGroup(req: CreateOriginGroupRequest, cb?: (error: string, rep: CreateOriginGroupResponse) => void): Promise<CreateOriginGroupResponse>;
    /**
     * 本接口（DescribeBotTopData）查询Bot攻击TopN数据。
     */
    DescribeBotTopData(req: DescribeBotTopDataRequest, cb?: (error: string, rep: DescribeBotTopDataResponse) => void): Promise<DescribeBotTopDataResponse>;
    /**
     * 用于查询拨测分地区数据
     */
    DescribeSpeedTestingDetails(req: DescribeSpeedTestingDetailsRequest, cb?: (error: string, rep: DescribeSpeedTestingDetailsResponse) => void): Promise<DescribeSpeedTestingDetailsResponse>;
    /**
     * 用于修改域名证书
     */
    ModifyHostsCertificate(req: ModifyHostsCertificateRequest, cb?: (error: string, rep: ModifyHostsCertificateResponse) => void): Promise<ModifyHostsCertificateResponse>;
    /**
     * 开启，关闭 CNAME 加速。
     */
    ModifyZoneCnameSpeedUp(req: ModifyZoneCnameSpeedUpRequest, cb?: (error: string, rep: ModifyZoneCnameSpeedUpResponse) => void): Promise<ModifyZoneCnameSpeedUpResponse>;
    /**
     * 修改 DNS 记录
     */
    ModifyDnsRecord(req: ModifyDnsRecordRequest, cb?: (error: string, rep: ModifyDnsRecordResponse) => void): Promise<ModifyDnsRecordResponse>;
    /**
     * 用于查询域名配置信息
     */
    DescribeHostsSetting(req: DescribeHostsSettingRequest, cb?: (error: string, rep: DescribeHostsSettingResponse) => void): Promise<DescribeHostsSettingResponse>;
    /**
     * 本接口（DescribeLogSets）用于获取日志集列表。
     */
    DescribeLogSets(req: DescribeLogSetsRequest, cb?: (error: string, rep: DescribeLogSetsResponse) => void): Promise<DescribeLogSetsResponse>;
    /**
     * 用于查询站点的所有配置信息。
     */
    DescribeZoneSetting(req: DescribeZoneSettingRequest, cb?: (error: string, rep: DescribeZoneSettingResponse) => void): Promise<DescribeZoneSettingResponse>;
    /**
     * 此接口（ModifyAlarmDefaultThreshold）用于修改告警默认阈值。
     */
    ModifyAlarmDefaultThreshold(req: ModifyAlarmDefaultThresholdRequest, cb?: (error: string, rep: ModifyAlarmDefaultThresholdResponse) => void): Promise<ModifyAlarmDefaultThresholdResponse>;
    /**
     * 本接口（DescribeDDoSBlockList）用于查询DDoS封禁解封列表。
     */
    DescribeDDoSBlockList(req: DescribeDDoSBlockListRequest, cb?: (error: string, rep: DescribeDDoSBlockListResponse) => void): Promise<DescribeDDoSBlockListResponse>;
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
     * 查询速率限制智能客户端过滤学习出来的规则
     */
    DescribeRateLimitIntelligenceRule(req: DescribeRateLimitIntelligenceRuleRequest, cb?: (error: string, rep: DescribeRateLimitIntelligenceRuleResponse) => void): Promise<DescribeRateLimitIntelligenceRuleResponse>;
    /**
     * 查询 DNS 记录列表，支持搜索、分页、排序、过滤。
     */
    DescribeDnsRecords(req: DescribeDnsRecordsRequest, cb?: (error: string, rep: DescribeDnsRecordsResponse) => void): Promise<DescribeDnsRecordsResponse>;
    /**
     * 本接口（DescribeBotLog）用于查询Bot攻击日志。
     */
    DescribeBotLog(req: DescribeBotLogRequest, cb?: (error: string, rep: DescribeBotLogResponse) => void): Promise<DescribeBotLogResponse>;
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
    /**
     * 获取计费数据。
     */
    DescribeBillingData(req: DescribeBillingDataRequest, cb?: (error: string, rep: DescribeBillingDataResponse) => void): Promise<DescribeBillingDataResponse>;
    /**
     * 设置站点DNSSEC状态
     */
    ModifyDnssec(req: ModifyDnssecRequest, cb?: (error: string, rep: ModifyDnssecResponse) => void): Promise<ModifyDnssecResponse>;
}

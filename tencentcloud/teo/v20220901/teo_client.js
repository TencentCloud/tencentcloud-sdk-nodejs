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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const CreatePlanForZoneResponse = models.CreatePlanForZoneResponse;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const DescribeSpeedTestingQuotaResponse = models.DescribeSpeedTestingQuotaResponse;
const Compression = models.Compression;
const DeleteRulesRequest = models.DeleteRulesRequest;
const ExceptUserRuleCondition = models.ExceptUserRuleCondition;
const ModifyDefaultCertificateRequest = models.ModifyDefaultCertificateRequest;
const SingleDataRecord = models.SingleDataRecord;
const DescribeOriginGroupResponse = models.DescribeOriginGroupResponse;
const DescribeWebManagedRulesLogResponse = models.DescribeWebManagedRulesLogResponse;
const SecClientIp = models.SecClientIp;
const DescribeTopL7CacheDataRequest = models.DescribeTopL7CacheDataRequest;
const SingleTypeValue = models.SingleTypeValue;
const CreateCredentialResponse = models.CreateCredentialResponse;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const Https = models.Https;
const SecEntryValue = models.SecEntryValue;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DiffIPWhitelist = models.DiffIPWhitelist;
const DescribeLogTopicTasksRequest = models.DescribeLogTopicTasksRequest;
const CreateCredentialRequest = models.CreateCredentialRequest;
const ModifyRuleRequest = models.ModifyRuleRequest;
const OriginRecord = models.OriginRecord;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DescribeWebManagedRulesHitRuleDetailRequest = models.DescribeWebManagedRulesHitRuleDetailRequest;
const AdvancedFilter = models.AdvancedFilter;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const OriginDetail = models.OriginDetail;
const DescribeDDoSAttackDataResponse = models.DescribeDDoSAttackDataResponse;
const ModifySecurityWafGroupPolicyRequest = models.ModifySecurityWafGroupPolicyRequest;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const DescribeClientRuleListResponse = models.DescribeClientRuleListResponse;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const Waf = models.Waf;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const DescribeClientRuleListRequest = models.DescribeClientRuleListRequest;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const RuleRewriteActionParams = models.RuleRewriteActionParams;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const ModifyOriginGroupResponse = models.ModifyOriginGroupResponse;
const DeleteAccelerationDomainsRequest = models.DeleteAccelerationDomainsRequest;
const ExceptUserRuleScope = models.ExceptUserRuleScope;
const ModifyAliasDomainRequest = models.ModifyAliasDomainRequest;
const DescribeAvailablePlansRequest = models.DescribeAvailablePlansRequest;
const SpeedTestingInfo = models.SpeedTestingInfo;
const DistrictStatistics = models.DistrictStatistics;
const OriginInfo = models.OriginInfo;
const DescribeSingleL7AnalysisDataRequest = models.DescribeSingleL7AnalysisDataRequest;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const ModifyZoneResponse = models.ModifyZoneResponse;
const WafRule = models.WafRule;
const ModifyZoneRequest = models.ModifyZoneRequest;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const DeleteZoneResponse = models.DeleteZoneResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const DescribeIdentificationsResponse = models.DescribeIdentificationsResponse;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const ReclaimAliasDomainRequest = models.ReclaimAliasDomainRequest;
const DescribeRulesResponse = models.DescribeRulesResponse;
const TimingDataRecord = models.TimingDataRecord;
const OriginProtectionInfo = models.OriginProtectionInfo;
const DescribeOriginProtectionResponse = models.DescribeOriginProtectionResponse;
const BindZoneToPlanResponse = models.BindZoneToPlanResponse;
const ExceptConfig = models.ExceptConfig;
const DeleteOriginGroupRequest = models.DeleteOriginGroupRequest;
const AliasDomain = models.AliasDomain;
const AclCondition = models.AclCondition;
const RateLimitConfig = models.RateLimitConfig;
const DescribeAliasDomainsRequest = models.DescribeAliasDomainsRequest;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const SkipCondition = models.SkipCondition;
const IpTableRule = models.IpTableRule;
const L7OfflineLog = models.L7OfflineLog;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const ApplicationProxyRule = models.ApplicationProxyRule;
const SmartRouting = models.SmartRouting;
const DescribeDnsDataResponse = models.DescribeDnsDataResponse;
const ModifyAccelerationDomainStatusesResponse = models.ModifyAccelerationDomainStatusesResponse;
const Zone = models.Zone;
const DescribeRulesSettingResponse = models.DescribeRulesSettingResponse;
const RuleExtraParameter = models.RuleExtraParameter;
const RulesSettingAction = models.RulesSettingAction;
const ClientIpHeader = models.ClientIpHeader;
const DescribeDDoSAttackTopDataRequest = models.DescribeDDoSAttackTopDataRequest;
const Quic = models.Quic;
const Ipv6 = models.Ipv6;
const ModifyAccelerationDomainRequest = models.ModifyAccelerationDomainRequest;
const DescribeRulesRequest = models.DescribeRulesRequest;
const ClsLogTopicInfo = models.ClsLogTopicInfo;
const DescribeSpeedTestingMetricDataRequest = models.DescribeSpeedTestingMetricDataRequest;
const TopDataRecord = models.TopDataRecord;
const AclConfig = models.AclConfig;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const AccelerationDomain = models.AccelerationDomain;
const UpdateOriginProtectionIPWhitelistRequest = models.UpdateOriginProtectionIPWhitelistRequest;
const Origin = models.Origin;
const WafConfig = models.WafConfig;
const DescribeSpeedTestingDetailsResponse = models.DescribeSpeedTestingDetailsResponse;
const SlowRateConfig = models.SlowRateConfig;
const DnsData = models.DnsData;
const ServerCertInfo = models.ServerCertInfo;
const TimingTypeValue = models.TimingTypeValue;
const CreateAliasDomainRequest = models.CreateAliasDomainRequest;
const CreateAliasDomainResponse = models.CreateAliasDomainResponse;
const DescribeOriginProtectionRequest = models.DescribeOriginProtectionRequest;
const ClientIpCountry = models.ClientIpCountry;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const DescribeApplicationProxiesResponse = models.DescribeApplicationProxiesResponse;
const DescribeTopL7AnalysisDataRequest = models.DescribeTopL7AnalysisDataRequest;
const FileAscriptionInfo = models.FileAscriptionInfo;
const DescribeAccelerationDomainsResponse = models.DescribeAccelerationDomainsResponse;
const ZoneSetting = models.ZoneSetting;
const ModifyRulePriorityResponse = models.ModifyRulePriorityResponse;
const DescribeTopL7CacheDataResponse = models.DescribeTopL7CacheDataResponse;
const DescribeOverviewL7DataRequest = models.DescribeOverviewL7DataRequest;
const SwitchConfig = models.SwitchConfig;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const WebSocket = models.WebSocket;
const DescribeWebProtectionTopDataRequest = models.DescribeWebProtectionTopDataRequest;
const SpeedTestingDetailData = models.SpeedTestingDetailData;
const VanityNameServers = models.VanityNameServers;
const RuleItem = models.RuleItem;
const ModifySecurityWafGroupPolicyResponse = models.ModifySecurityWafGroupPolicyResponse;
const DescribeTimingL7SourceDataResponse = models.DescribeTimingL7SourceDataResponse;
const DescribeWebManagedRulesDataRequest = models.DescribeWebManagedRulesDataRequest;
const RuleChoicePropertiesItem = models.RuleChoicePropertiesItem;
const DescribeWebManagedRulesDataResponse = models.DescribeWebManagedRulesDataResponse;
const SecurityConfig = models.SecurityConfig;
const CreateSpeedTestingRequest = models.CreateSpeedTestingRequest;
const MaxAge = models.MaxAge;
const ModifyAliasDomainStatusResponse = models.ModifyAliasDomainStatusResponse;
const RuleCodeActionParams = models.RuleCodeActionParams;
const ModifyRulePriorityRequest = models.ModifyRulePriorityRequest;
const DescribeTimingL7AnalysisDataRequest = models.DescribeTimingL7AnalysisDataRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const NoCache = models.NoCache;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const DescribeAliasDomainsResponse = models.DescribeAliasDomainsResponse;
const DescribeWebProtectionHitRuleDetailRequest = models.DescribeWebProtectionHitRuleDetailRequest;
const IPWhitelist = models.IPWhitelist;
const DDoS = models.DDoS;
const CreateZoneRequest = models.CreateZoneRequest;
const PlanInfo = models.PlanInfo;
const DescribeTimingL7CacheDataRequest = models.DescribeTimingL7CacheDataRequest;
const SpeedTestingQuota = models.SpeedTestingQuota;
const ModifyRuleResponse = models.ModifyRuleResponse;
const CheckCertificateResponse = models.CheckCertificateResponse;
const AscriptionInfo = models.AscriptionInfo;
const DescribeLogSetsResponse = models.DescribeLogSetsResponse;
const DescribeWebProtectionDataRequest = models.DescribeWebProtectionDataRequest;
const CheckCertificateRequest = models.CheckCertificateRequest;
const FirstPartConfig = models.FirstPartConfig;
const DescribeAddableEntityListResponse = models.DescribeAddableEntityListResponse;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const Cache = models.Cache;
const ForceRedirect = models.ForceRedirect;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const TemplateConfig = models.TemplateConfig;
const CodeAction = models.CodeAction;
const CreateReplayTaskRequest = models.CreateReplayTaskRequest;
const DescribeWebProtectionHitRuleDetailResponse = models.DescribeWebProtectionHitRuleDetailResponse;
const Identification = models.Identification;
const DescribeDDoSAttackDataRequest = models.DescribeDDoSAttackDataRequest;
const CachePrefresh = models.CachePrefresh;
const DescribeWebProtectionClientIpListResponse = models.DescribeWebProtectionClientIpListResponse;
const DescribeTimingL7AnalysisDataResponse = models.DescribeTimingL7AnalysisDataResponse;
const ModifyAliasDomainStatusRequest = models.ModifyAliasDomainStatusRequest;
const TopDetailData = models.TopDetailData;
const DescribeApplicationProxiesRequest = models.DescribeApplicationProxiesRequest;
const DescribeContentQuotaRequest = models.DescribeContentQuotaRequest;
const BotPortraitRule = models.BotPortraitRule;
const RuleCondition = models.RuleCondition;
const RulesProperties = models.RulesProperties;
const DescribeOverviewL7DataResponse = models.DescribeOverviewL7DataResponse;
const Hsts = models.Hsts;
const RateLimitTemplate = models.RateLimitTemplate;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const CreateRuleRequest = models.CreateRuleRequest;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const TopEntry = models.TopEntry;
const SlowPostConfig = models.SlowPostConfig;
const RateLimitTemplateDetail = models.RateLimitTemplateDetail;
const ExceptUserRule = models.ExceptUserRule;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const RateLimitUserRule = models.RateLimitUserRule;
const SubRule = models.SubRule;
const DescribeLogSetsRequest = models.DescribeLogSetsRequest;
const CreatePlanForZoneRequest = models.CreatePlanForZoneRequest;
const ClientRule = models.ClientRule;
const TimingDataItem = models.TimingDataItem;
const SpeedTestingConfig = models.SpeedTestingConfig;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const SpeedTestingStatus = models.SpeedTestingStatus;
const DescribeSpeedTestingMetricDataResponse = models.DescribeSpeedTestingMetricDataResponse;
const CC = models.CC;
const IntelligenceRuleItem = models.IntelligenceRuleItem;
const IntelligenceRule = models.IntelligenceRule;
const PostMaxSize = models.PostMaxSize;
const Sv = models.Sv;
const Rule = models.Rule;
const Filter = models.Filter;
const CreateAccelerationDomainResponse = models.CreateAccelerationDomainResponse;
const DescribeTimingL4DataResponse = models.DescribeTimingL4DataResponse;
const CreateZoneResponse = models.CreateZoneResponse;
const Action = models.Action;
const SpeedTestingStatistics = models.SpeedTestingStatistics;
const DescribeSpeedTestingQuotaRequest = models.DescribeSpeedTestingQuotaRequest;
const ApplicationProxy = models.ApplicationProxy;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const ReclaimZoneRequest = models.ReclaimZoneRequest;
const CacheKey = models.CacheKey;
const ModifyOriginGroupRequest = models.ModifyOriginGroupRequest;
const WebLogs = models.WebLogs;
const DownloadL4LogsResponse = models.DownloadL4LogsResponse;
const DescribeTimingL7CacheDataResponse = models.DescribeTimingL7CacheDataResponse;
const RateLimitIntelligence = models.RateLimitIntelligence;
const DescribeAddableEntityListRequest = models.DescribeAddableEntityListRequest;
const IpTableConfig = models.IpTableConfig;
const DescribeSingleL7AnalysisDataResponse = models.DescribeSingleL7AnalysisDataResponse;
const DeleteOriginGroupResponse = models.DeleteOriginGroupResponse;
const Header = models.Header;
const RuleAndConditions = models.RuleAndConditions;
const DescribeSpeedTestingDetailsRequest = models.DescribeSpeedTestingDetailsRequest;
const DescribeTimingL7SourceDataRequest = models.DescribeTimingL7SourceDataRequest;
const DropPageConfig = models.DropPageConfig;
const SpeedTestingMetricData = models.SpeedTestingMetricData;
const UpdateOriginProtectionIPWhitelistResponse = models.UpdateOriginProtectionIPWhitelistResponse;
const SecEntry = models.SecEntry;
const DescribeIdentificationsRequest = models.DescribeIdentificationsRequest;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const PartialModule = models.PartialModule;
const CreateOriginGroupResponse = models.CreateOriginGroupResponse;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const AccelerateType = models.AccelerateType;
const NormalAction = models.NormalAction;
const BindZoneToPlanRequest = models.BindZoneToPlanRequest;
const CreateAccelerationDomainRequest = models.CreateAccelerationDomainRequest;
const FollowOrigin = models.FollowOrigin;
const DeleteZoneRequest = models.DeleteZoneRequest;
const SecurityType = models.SecurityType;
const BotManagedRule = models.BotManagedRule;
const ModifyDefaultCertificateResponse = models.ModifyDefaultCertificateResponse;
const DetailHost = models.DetailHost;
const DescribeTopL7AnalysisDataResponse = models.DescribeTopL7AnalysisDataResponse;
const DescribeOriginGroupRequest = models.DescribeOriginGroupRequest;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const AiRule = models.AiRule;
const L4OfflineLog = models.L4OfflineLog;
const DropPageDetail = models.DropPageDetail;
const DeleteRulesResponse = models.DeleteRulesResponse;
const QueryCondition = models.QueryCondition;
const DescribeWebProtectionDataResponse = models.DescribeWebProtectionDataResponse;
const CacheConfig = models.CacheConfig;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const ModifyAccelerationDomainResponse = models.ModifyAccelerationDomainResponse;
const FailReason = models.FailReason;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const DescribeRulesSettingRequest = models.DescribeRulesSettingRequest;
const ModifyAliasDomainResponse = models.ModifyAliasDomainResponse;
const LogSetInfo = models.LogSetInfo;
const RewriteAction = models.RewriteAction;
const OptimizeAction = models.OptimizeAction;
const DeleteAliasDomainRequest = models.DeleteAliasDomainRequest;
const DescribeContentQuotaResponse = models.DescribeContentQuotaResponse;
const DeleteAccelerationDomainsResponse = models.DeleteAccelerationDomainsResponse;
const DescribeDnsDataRequest = models.DescribeDnsDataRequest;
const RuleNormalActionParams = models.RuleNormalActionParams;
const Tag = models.Tag;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const Resource = models.Resource;
const PrivateParameter = models.PrivateParameter;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const AclUserRule = models.AclUserRule;
const Quota = models.Quota;
const CreateOriginGroupRequest = models.CreateOriginGroupRequest;
const DescribeTimingL4DataRequest = models.DescribeTimingL4DataRequest;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const SubRuleItem = models.SubRuleItem;
const DescribeWebManagedRulesLogRequest = models.DescribeWebManagedRulesLogRequest;
const Task = models.Task;
const ReclaimZoneResponse = models.ReclaimZoneResponse;
const WafGroup = models.WafGroup;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DescribeAvailablePlansResponse = models.DescribeAvailablePlansResponse;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const OriginGroup = models.OriginGroup;
const DescribeWebProtectionTopDataResponse = models.DescribeWebProtectionTopDataResponse;
const VanityNameServersIps = models.VanityNameServersIps;
const DescribeWebManagedRulesHitRuleDetailResponse = models.DescribeWebManagedRulesHitRuleDetailResponse;
const DescribeWebProtectionClientIpListRequest = models.DescribeWebProtectionClientIpListRequest;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const DownloadL4LogsRequest = models.DownloadL4LogsRequest;
const CreateSpeedTestingResponse = models.CreateSpeedTestingResponse;
const QueryString = models.QueryString;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const SecHitRuleInfo = models.SecHitRuleInfo;
const DescribeAccelerationDomainsRequest = models.DescribeAccelerationDomainsRequest;
const Grpc = models.Grpc;
const UpstreamHttp2 = models.UpstreamHttp2;
const TopEntryValue = models.TopEntryValue;
const ReclaimAliasDomainResponse = models.ReclaimAliasDomainResponse;
const OfflineCache = models.OfflineCache;
const DescribeDDoSAttackTopDataResponse = models.DescribeDDoSAttackTopDataResponse;
const DeleteAliasDomainResponse = models.DeleteAliasDomainResponse;
const SecRuleRelatedInfo = models.SecRuleRelatedInfo;
const ModifyAccelerationDomainStatusesRequest = models.ModifyAccelerationDomainStatusesRequest;
const BotConfig = models.BotConfig;
const DescribeLogTopicTasksResponse = models.DescribeLogTopicTasksResponse;
const CreateReplayTaskResponse = models.CreateReplayTaskResponse;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.tencentcloudapi.com", "2022-09-01", credential, region, profile);
    }
    
    /**
     * 创建清除缓存任务
     * @param {CreatePurgeTaskRequest} req
     * @param {function(string, CreatePurgeTaskResponse):void} cb
     * @public
     */
    CreatePurgeTask(req, cb) {
        let resp = new CreatePurgeTaskResponse();
        this.request("CreatePurgeTask", req, resp, cb);
    }

    /**
     * 本接口（DownloadL4Logs）用于下载四层离线日志。
     * @param {DownloadL4LogsRequest} req
     * @param {function(string, DownloadL4LogsResponse):void} cb
     * @public
     */
    DownloadL4Logs(req, cb) {
        let resp = new DownloadL4LogsResponse();
        this.request("DownloadL4Logs", req, resp, cb);
    }

    /**
     * 为未购买套餐的站点购买套餐
     * @param {CreatePlanForZoneRequest} req
     * @param {function(string, CreatePlanForZoneResponse):void} cb
     * @public
     */
    CreatePlanForZone(req, cb) {
        let resp = new CreatePlanForZoneResponse();
        this.request("CreatePlanForZone", req, resp, cb);
    }

    /**
     * 查询内容管理接口配额
     * @param {DescribeContentQuotaRequest} req
     * @param {function(string, DescribeContentQuotaResponse):void} cb
     * @public
     */
    DescribeContentQuota(req, cb) {
        let resp = new DescribeContentQuotaResponse();
        this.request("DescribeContentQuota", req, resp, cb);
    }

    /**
     * 查询站点的验证信息。
     * @param {DescribeIdentificationsRequest} req
     * @param {function(string, DescribeIdentificationsResponse):void} cb
     * @public
     */
    DescribeIdentifications(req, cb) {
        let resp = new DescribeIdentificationsResponse();
        this.request("DescribeIdentifications", req, resp, cb);
    }

    /**
     * 用于验证站点所有权。
     * @param {IdentifyZoneRequest} req
     * @param {function(string, IdentifyZoneResponse):void} cb
     * @public
     */
    IdentifyZone(req, cb) {
        let resp = new IdentifyZoneResponse();
        this.request("IdentifyZone", req, resp, cb);
    }

    /**
     * 查询默认证书列表
     * @param {DescribeDefaultCertificatesRequest} req
     * @param {function(string, DescribeDefaultCertificatesResponse):void} cb
     * @public
     */
    DescribeDefaultCertificates(req, cb) {
        let resp = new DescribeDefaultCertificatesResponse();
        this.request("DescribeDefaultCertificates", req, resp, cb);
    }

    /**
     * 查询加速域名列表，支持搜索、分页、排序、过滤。
     * @param {DescribeAccelerationDomainsRequest} req
     * @param {function(string, DescribeAccelerationDomainsResponse):void} cb
     * @public
     */
    DescribeAccelerationDomains(req, cb) {
        let resp = new DescribeAccelerationDomainsResponse();
        this.request("DescribeAccelerationDomains", req, resp, cb);
    }

    /**
     * 修改源站组
     * @param {ModifyOriginGroupRequest} req
     * @param {function(string, ModifyOriginGroupResponse):void} cb
     * @public
     */
    ModifyOriginGroup(req, cb) {
        let resp = new ModifyOriginGroupResponse();
        this.request("ModifyOriginGroup", req, resp, cb);
    }

    /**
     * 删除应用代理
     * @param {DeleteApplicationProxyRequest} req
     * @param {function(string, DeleteApplicationProxyResponse):void} cb
     * @public
     */
    DeleteApplicationProxy(req, cb) {
        let resp = new DeleteApplicationProxyResponse();
        this.request("DeleteApplicationProxy", req, resp, cb);
    }

    /**
     * 本接口（DescribeWebManagedRulesLog）用于查询Web攻击日志。
     * @param {DescribeWebManagedRulesLogRequest} req
     * @param {function(string, DescribeWebManagedRulesLogResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesLog(req, cb) {
        let resp = new DescribeWebManagedRulesLogResponse();
        this.request("DescribeWebManagedRulesLog", req, resp, cb);
    }

    /**
     * 用于创建COS回源私有凭证
     * @param {CreateCredentialRequest} req
     * @param {function(string, CreateCredentialResponse):void} cb
     * @public
     */
    CreateCredential(req, cb) {
        let resp = new CreateCredentialResponse();
        this.request("CreateCredential", req, resp, cb);
    }

    /**
     * 本接口（DownloadL7Logs）下载七层离线日志。
     * @param {DownloadL7LogsRequest} req
     * @param {function(string, DownloadL7LogsResponse):void} cb
     * @public
     */
    DownloadL7Logs(req, cb) {
        let resp = new DownloadL7LogsResponse();
        this.request("DownloadL7Logs", req, resp, cb);
    }

    /**
     * 删除应用代理规则
     * @param {DeleteApplicationProxyRuleRequest} req
     * @param {function(string, DeleteApplicationProxyRuleResponse):void} cb
     * @public
     */
    DeleteApplicationProxyRule(req, cb) {
        let resp = new DeleteApplicationProxyRuleResponse();
        this.request("DeleteApplicationProxyRule", req, resp, cb);
    }

    /**
     * 本接口（DescribeWebProtectionData）用于查询CC防护时序数据。
     * @param {DescribeWebProtectionDataRequest} req
     * @param {function(string, DescribeWebProtectionDataResponse):void} cb
     * @public
     */
    DescribeWebProtectionData(req, cb) {
        let resp = new DescribeWebProtectionDataResponse();
        this.request("DescribeWebProtectionData", req, resp, cb);
    }

    /**
     * 修改站点信息。
     * @param {ModifyZoneRequest} req
     * @param {function(string, ModifyZoneResponse):void} cb
     * @public
     */
    ModifyZone(req, cb) {
        let resp = new ModifyZoneResponse();
        this.request("ModifyZone", req, resp, cb);
    }

    /**
     * 创建预热任务
     * @param {CreatePrefetchTaskRequest} req
     * @param {function(string, CreatePrefetchTaskResponse):void} cb
     * @public
     */
    CreatePrefetchTask(req, cb) {
        let resp = new CreatePrefetchTaskResponse();
        this.request("CreatePrefetchTask", req, resp, cb);
    }

    /**
     * 删除别称域名。
     * @param {DeleteAliasDomainRequest} req
     * @param {function(string, DeleteAliasDomainResponse):void} cb
     * @public
     */
    DeleteAliasDomain(req, cb) {
        let resp = new DeleteAliasDomainResponse();
        this.request("DeleteAliasDomain", req, resp, cb);
    }

    /**
     * 本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。
     * @param {DescribeOverviewL7DataRequest} req
     * @param {function(string, DescribeOverviewL7DataResponse):void} cb
     * @public
     */
    DescribeOverviewL7Data(req, cb) {
        let resp = new DescribeOverviewL7DataResponse();
        this.request("DescribeOverviewL7Data", req, resp, cb);
    }

    /**
     * 本接口（DescribeAddableEntityList）用于查询剩余可添加的日志推送实体列表。
     * @param {DescribeAddableEntityListRequest} req
     * @param {function(string, DescribeAddableEntityListResponse):void} cb
     * @public
     */
    DescribeAddableEntityList(req, cb) {
        let resp = new DescribeAddableEntityListResponse();
        this.request("DescribeAddableEntityList", req, resp, cb);
    }

    /**
     * 创建加速域名
     * @param {CreateAccelerationDomainRequest} req
     * @param {function(string, CreateAccelerationDomainResponse):void} cb
     * @public
     */
    CreateAccelerationDomain(req, cb) {
        let resp = new CreateAccelerationDomainResponse();
        this.request("CreateAccelerationDomain", req, resp, cb);
    }

    /**
     * 校验证书
     * @param {CheckCertificateRequest} req
     * @param {function(string, CheckCertificateResponse):void} cb
     * @public
     */
    CheckCertificate(req, cb) {
        let resp = new CheckCertificateResponse();
        this.request("CheckCertificate", req, resp, cb);
    }

    /**
     * 创建刷新/预热重放任务
     * @param {CreateReplayTaskRequest} req
     * @param {function(string, CreateReplayTaskResponse):void} cb
     * @public
     */
    CreateReplayTask(req, cb) {
        let resp = new CreateReplayTaskResponse();
        this.request("CreateReplayTask", req, resp, cb);
    }

    /**
     * 查询站点拨测配额
     * @param {DescribeSpeedTestingQuotaRequest} req
     * @param {function(string, DescribeSpeedTestingQuotaResponse):void} cb
     * @public
     */
    DescribeSpeedTestingQuota(req, cb) {
        let resp = new DescribeSpeedTestingQuotaResponse();
        this.request("DescribeSpeedTestingQuota", req, resp, cb);
    }

    /**
     * 对用户指定的域名进行一次站点拨测
     * @param {CreateSpeedTestingRequest} req
     * @param {function(string, CreateSpeedTestingResponse):void} cb
     * @public
     */
    CreateSpeedTesting(req, cb) {
        let resp = new CreateSpeedTestingResponse();
        this.request("CreateSpeedTesting", req, resp, cb);
    }

    /**
     * 查询站点拨测结果
     * @param {DescribeSpeedTestingMetricDataRequest} req
     * @param {function(string, DescribeSpeedTestingMetricDataResponse):void} cb
     * @public
     */
    DescribeSpeedTestingMetricData(req, cb) {
        let resp = new DescribeSpeedTestingMetricDataResponse();
        this.request("DescribeSpeedTestingMetricData", req, resp, cb);
    }

    /**
     * 用于修改站点配置
     * @param {ModifyZoneSettingRequest} req
     * @param {function(string, ModifyZoneSettingResponse):void} cb
     * @public
     */
    ModifyZoneSetting(req, cb) {
        let resp = new ModifyZoneSettingResponse();
        this.request("ModifyZoneSetting", req, resp, cb);
    }

    /**
     * 修改应用代理规则的状态
     * @param {ModifyApplicationProxyRuleStatusRequest} req
     * @param {function(string, ModifyApplicationProxyRuleStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRuleStatus(req, cb) {
        let resp = new ModifyApplicationProxyRuleStatusResponse();
        this.request("ModifyApplicationProxyRuleStatus", req, resp, cb);
    }

    /**
     * 查询预热任务状态
     * @param {DescribePrefetchTasksRequest} req
     * @param {function(string, DescribePrefetchTasksResponse):void} cb
     * @public
     */
    DescribePrefetchTasks(req, cb) {
        let resp = new DescribePrefetchTasksResponse();
        this.request("DescribePrefetchTasks", req, resp, cb);
    }

    /**
     * 删除源站组
     * @param {DeleteOriginGroupRequest} req
     * @param {function(string, DeleteOriginGroupResponse):void} cb
     * @public
     */
    DeleteOriginGroup(req, cb) {
        let resp = new DeleteOriginGroupResponse();
        this.request("DeleteOriginGroup", req, resp, cb);
    }

    /**
     * 更新源站防护IP白名单
     * @param {UpdateOriginProtectionIPWhitelistRequest} req
     * @param {function(string, UpdateOriginProtectionIPWhitelistResponse):void} cb
     * @public
     */
    UpdateOriginProtectionIPWhitelist(req, cb) {
        let resp = new UpdateOriginProtectionIPWhitelistResponse();
        this.request("UpdateOriginProtectionIPWhitelist", req, resp, cb);
    }

    /**
     * 查询清除缓存历史记录
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * 批量删除加速域名
     * @param {DeleteAccelerationDomainsRequest} req
     * @param {function(string, DeleteAccelerationDomainsResponse):void} cb
     * @public
     */
    DeleteAccelerationDomains(req, cb) {
        let resp = new DeleteAccelerationDomainsResponse();
        this.request("DeleteAccelerationDomains", req, resp, cb);
    }

    /**
     * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
     * @param {DescribeTimingL7CacheDataRequest} req
     * @param {function(string, DescribeTimingL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTimingL7CacheData(req, cb) {
        let resp = new DescribeTimingL7CacheDataResponse();
        this.request("DescribeTimingL7CacheData", req, resp, cb);
    }

    /**
     * 创建别称域名。
     * @param {CreateAliasDomainRequest} req
     * @param {function(string, CreateAliasDomainResponse):void} cb
     * @public
     */
    CreateAliasDomain(req, cb) {
        let resp = new CreateAliasDomainResponse();
        this.request("CreateAliasDomain", req, resp, cb);
    }

    /**
     * 本接口（DescribeWebProtectionHitRuleDetail）用于查询CC防护命中规则详情列表。
     * @param {DescribeWebProtectionHitRuleDetailRequest} req
     * @param {function(string, DescribeWebProtectionHitRuleDetailResponse):void} cb
     * @public
     */
    DescribeWebProtectionHitRuleDetail(req, cb) {
        let resp = new DescribeWebProtectionHitRuleDetailResponse();
        this.request("DescribeWebProtectionHitRuleDetail", req, resp, cb);
    }

    /**
     * 修改别称域名状态。
     * @param {ModifyAliasDomainStatusRequest} req
     * @param {function(string, ModifyAliasDomainStatusResponse):void} cb
     * @public
     */
    ModifyAliasDomainStatus(req, cb) {
        let resp = new ModifyAliasDomainStatusResponse();
        this.request("ModifyAliasDomainStatus", req, resp, cb);
    }

    /**
     * 本接口（DescribeTopL7CacheData）用于查询七层缓存分析topN流量数据。
     * @param {DescribeTopL7CacheDataRequest} req
     * @param {function(string, DescribeTopL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTopL7CacheData(req, cb) {
        let resp = new DescribeTopL7CacheDataResponse();
        this.request("DescribeTopL7CacheData", req, resp, cb);
    }

    /**
     * 本接口（DescribeTimingL4Data）用于查询四层时序流量数据列表。
     * @param {DescribeTimingL4DataRequest} req
     * @param {function(string, DescribeTimingL4DataResponse):void} cb
     * @public
     */
    DescribeTimingL4Data(req, cb) {
        let resp = new DescribeTimingL4DataResponse();
        this.request("DescribeTimingL4Data", req, resp, cb);
    }

    /**
     * 修改规则引擎规则。
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * 本接口（DescribeTopL7AnalysisData）用于查询七层流量前topN的数据。
     * @param {DescribeTopL7AnalysisDataRequest} req
     * @param {function(string, DescribeTopL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTopL7AnalysisData(req, cb) {
        let resp = new DescribeTopL7AnalysisDataResponse();
        this.request("DescribeTopL7AnalysisData", req, resp, cb);
    }

    /**
     * 修改Web&Bot安全配置。
     * @param {ModifySecurityPolicyRequest} req
     * @param {function(string, ModifySecurityPolicyResponse):void} cb
     * @public
     */
    ModifySecurityPolicy(req, cb) {
        let resp = new ModifySecurityPolicyResponse();
        this.request("ModifySecurityPolicy", req, resp, cb);
    }

    /**
     * 修改规则引擎规则优先级
     * @param {ModifyRulePriorityRequest} req
     * @param {function(string, ModifyRulePriorityResponse):void} cb
     * @public
     */
    ModifyRulePriority(req, cb) {
        let resp = new ModifyRulePriorityResponse();
        this.request("ModifyRulePriority", req, resp, cb);
    }

    /**
     * 将未绑定套餐的站点绑定到已有套餐
     * @param {BindZoneToPlanRequest} req
     * @param {function(string, BindZoneToPlanResponse):void} cb
     * @public
     */
    BindZoneToPlan(req, cb) {
        let resp = new BindZoneToPlanResponse();
        this.request("BindZoneToPlan", req, resp, cb);
    }

    /**
     * 修改加速域名信息
     * @param {ModifyAccelerationDomainRequest} req
     * @param {function(string, ModifyAccelerationDomainResponse):void} cb
     * @public
     */
    ModifyAccelerationDomain(req, cb) {
        let resp = new ModifyAccelerationDomainResponse();
        this.request("ModifyAccelerationDomain", req, resp, cb);
    }

    /**
     * 修改应用代理的状态
     * @param {ModifyApplicationProxyStatusRequest} req
     * @param {function(string, ModifyApplicationProxyStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyStatus(req, cb) {
        let resp = new ModifyApplicationProxyStatusResponse();
        this.request("ModifyApplicationProxyStatus", req, resp, cb);
    }

    /**
     * 本接口（DescribeTimingL7AnalysisData）查询七层数据分析类时序数据。
     * @param {DescribeTimingL7AnalysisDataRequest} req
     * @param {function(string, DescribeTimingL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTimingL7AnalysisData(req, cb) {
        let resp = new DescribeTimingL7AnalysisDataResponse();
        this.request("DescribeTimingL7AnalysisData", req, resp, cb);
    }

    /**
     * 查询应用代理列表。
     * @param {DescribeApplicationProxiesRequest} req
     * @param {function(string, DescribeApplicationProxiesResponse):void} cb
     * @public
     */
    DescribeApplicationProxies(req, cb) {
        let resp = new DescribeApplicationProxiesResponse();
        this.request("DescribeApplicationProxies", req, resp, cb);
    }

    /**
     * 本接口（DescribeTimingL7SourceData）查询七层回源分析时序数据。
     * @param {DescribeTimingL7SourceDataRequest} req
     * @param {function(string, DescribeTimingL7SourceDataResponse):void} cb
     * @public
     */
    DescribeTimingL7SourceData(req, cb) {
        let resp = new DescribeTimingL7SourceDataResponse();
        this.request("DescribeTimingL7SourceData", req, resp, cb);
    }

    /**
     * 本接口（DescribeClientRuleList）用于查询封禁客户端信息列表。
     * @param {DescribeClientRuleListRequest} req
     * @param {function(string, DescribeClientRuleListResponse):void} cb
     * @public
     */
    DescribeClientRuleList(req, cb) {
        let resp = new DescribeClientRuleListResponse();
        this.request("DescribeClientRuleList", req, resp, cb);
    }

    /**
     * 规则引擎创建规则。
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * 修改应用代理
     * @param {ModifyApplicationProxyRequest} req
     * @param {function(string, ModifyApplicationProxyResponse):void} cb
     * @public
     */
    ModifyApplicationProxy(req, cb) {
        let resp = new ModifyApplicationProxyResponse();
        this.request("ModifyApplicationProxy", req, resp, cb);
    }

    /**
     * 用于用户接入新的站点。
     * @param {CreateZoneRequest} req
     * @param {function(string, CreateZoneResponse):void} cb
     * @public
     */
    CreateZone(req, cb) {
        let resp = new CreateZoneResponse();
        this.request("CreateZone", req, resp, cb);
    }

    /**
     * 本接口（DescribeWebProtectionClientIpList）用于查询CC防护客户端（攻击源）IP信息。
     * @param {DescribeWebProtectionClientIpListRequest} req
     * @param {function(string, DescribeWebProtectionClientIpListResponse):void} cb
     * @public
     */
    DescribeWebProtectionClientIpList(req, cb) {
        let resp = new DescribeWebProtectionClientIpListResponse();
        this.request("DescribeWebProtectionClientIpList", req, resp, cb);
    }

    /**
     * 查询当前账户可用套餐信息列表
     * @param {DescribeAvailablePlansRequest} req
     * @param {function(string, DescribeAvailablePlansResponse):void} cb
     * @public
     */
    DescribeAvailablePlans(req, cb) {
        let resp = new DescribeAvailablePlansResponse();
        this.request("DescribeAvailablePlans", req, resp, cb);
    }

    /**
     * 修改安全配置托管规则
     * @param {ModifySecurityWafGroupPolicyRequest} req
     * @param {function(string, ModifySecurityWafGroupPolicyResponse):void} cb
     * @public
     */
    ModifySecurityWafGroupPolicy(req, cb) {
        let resp = new ModifySecurityWafGroupPolicyResponse();
        this.request("ModifySecurityWafGroupPolicy", req, resp, cb);
    }

    /**
     * 获取DNS请求数统计曲线
     * @param {DescribeDnsDataRequest} req
     * @param {function(string, DescribeDnsDataResponse):void} cb
     * @public
     */
    DescribeDnsData(req, cb) {
        let resp = new DescribeDnsDataResponse();
        this.request("DescribeDnsData", req, resp, cb);
    }

    /**
     * 返回规则引擎可应用匹配请求的设置列表及其详细建议配置信息
     * @param {DescribeRulesSettingRequest} req
     * @param {function(string, DescribeRulesSettingResponse):void} cb
     * @public
     */
    DescribeRulesSetting(req, cb) {
        let resp = new DescribeRulesSettingResponse();
        this.request("DescribeRulesSetting", req, resp, cb);
    }

    /**
     * 本接口（DescribeLogTopicTasks）用于获取日志推送任务列表。
     * @param {DescribeLogTopicTasksRequest} req
     * @param {function(string, DescribeLogTopicTasksResponse):void} cb
     * @public
     */
    DescribeLogTopicTasks(req, cb) {
        let resp = new DescribeLogTopicTasksResponse();
        this.request("DescribeLogTopicTasks", req, resp, cb);
    }

    /**
     * 批量修改加速域名状态
     * @param {ModifyAccelerationDomainStatusesRequest} req
     * @param {function(string, ModifyAccelerationDomainStatusesResponse):void} cb
     * @public
     */
    ModifyAccelerationDomainStatuses(req, cb) {
        let resp = new ModifyAccelerationDomainStatusesResponse();
        this.request("ModifyAccelerationDomainStatuses", req, resp, cb);
    }

    /**
     * 本接口（DescribeDDoSAttackTopData）用于查询DDoS攻击Top数据。
     * @param {DescribeDDoSAttackTopDataRequest} req
     * @param {function(string, DescribeDDoSAttackTopDataResponse):void} cb
     * @public
     */
    DescribeDDoSAttackTopData(req, cb) {
        let resp = new DescribeDDoSAttackTopDataResponse();
        this.request("DescribeDDoSAttackTopData", req, resp, cb);
    }

    /**
     * 用于开启，关闭站点。
     * @param {ModifyZoneStatusRequest} req
     * @param {function(string, ModifyZoneStatusResponse):void} cb
     * @public
     */
    ModifyZoneStatus(req, cb) {
        let resp = new ModifyZoneStatusResponse();
        this.request("ModifyZoneStatus", req, resp, cb);
    }

    /**
     * 批量删除规则引擎规则。
     * @param {DeleteRulesRequest} req
     * @param {function(string, DeleteRulesResponse):void} cb
     * @public
     */
    DeleteRules(req, cb) {
        let resp = new DeleteRulesResponse();
        this.request("DeleteRules", req, resp, cb);
    }

    /**
     * 本接口（DescribeSingleL7AnalysisData）用于查询七层流量数据分析单值数据列表，单值数据表示：指标在查询时间范围内的单个统计数据，通常表现为接口仅返回一个统计数值。
     * @param {DescribeSingleL7AnalysisDataRequest} req
     * @param {function(string, DescribeSingleL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeSingleL7AnalysisData(req, cb) {
        let resp = new DescribeSingleL7AnalysisDataResponse();
        this.request("DescribeSingleL7AnalysisData", req, resp, cb);
    }

    /**
     * 修改默认证书状态
     * @param {ModifyDefaultCertificateRequest} req
     * @param {function(string, ModifyDefaultCertificateResponse):void} cb
     * @public
     */
    ModifyDefaultCertificate(req, cb) {
        let resp = new ModifyDefaultCertificateResponse();
        this.request("ModifyDefaultCertificate", req, resp, cb);
    }

    /**
     * 本接口（DescribeWebManagedRulesHitRuleDetail）用于查询WAF攻击命中规则详情。
     * @param {DescribeWebManagedRulesHitRuleDetailRequest} req
     * @param {function(string, DescribeWebManagedRulesHitRuleDetailResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesHitRuleDetail(req, cb) {
        let resp = new DescribeWebManagedRulesHitRuleDetailResponse();
        this.request("DescribeWebManagedRulesHitRuleDetail", req, resp, cb);
    }

    /**
     * 查询规则引擎规则。
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * 创建应用代理
     * @param {CreateApplicationProxyRequest} req
     * @param {function(string, CreateApplicationProxyResponse):void} cb
     * @public
     */
    CreateApplicationProxy(req, cb) {
        let resp = new CreateApplicationProxyResponse();
        this.request("CreateApplicationProxy", req, resp, cb);
    }

    /**
     * 获取源站组列表
     * @param {DescribeOriginGroupRequest} req
     * @param {function(string, DescribeOriginGroupResponse):void} cb
     * @public
     */
    DescribeOriginGroup(req, cb) {
        let resp = new DescribeOriginGroupResponse();
        this.request("DescribeOriginGroup", req, resp, cb);
    }

    /**
     * 修改别称域名。
     * @param {ModifyAliasDomainRequest} req
     * @param {function(string, ModifyAliasDomainResponse):void} cb
     * @public
     */
    ModifyAliasDomain(req, cb) {
        let resp = new ModifyAliasDomainResponse();
        this.request("ModifyAliasDomain", req, resp, cb);
    }

    /**
     * 修改应用代理规则
     * @param {ModifyApplicationProxyRuleRequest} req
     * @param {function(string, ModifyApplicationProxyRuleResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRule(req, cb) {
        let resp = new ModifyApplicationProxyRuleResponse();
        this.request("ModifyApplicationProxyRule", req, resp, cb);
    }

    /**
     * 创建源站组
     * @param {CreateOriginGroupRequest} req
     * @param {function(string, CreateOriginGroupResponse):void} cb
     * @public
     */
    CreateOriginGroup(req, cb) {
        let resp = new CreateOriginGroupResponse();
        this.request("CreateOriginGroup", req, resp, cb);
    }

    /**
     * 用于查询拨测分地区数据
     * @param {DescribeSpeedTestingDetailsRequest} req
     * @param {function(string, DescribeSpeedTestingDetailsResponse):void} cb
     * @public
     */
    DescribeSpeedTestingDetails(req, cb) {
        let resp = new DescribeSpeedTestingDetailsResponse();
        this.request("DescribeSpeedTestingDetails", req, resp, cb);
    }

    /**
     * 用于修改域名证书
     * @param {ModifyHostsCertificateRequest} req
     * @param {function(string, ModifyHostsCertificateResponse):void} cb
     * @public
     */
    ModifyHostsCertificate(req, cb) {
        let resp = new ModifyHostsCertificateResponse();
        this.request("ModifyHostsCertificate", req, resp, cb);
    }

    /**
     * 用于查询域名配置信息
     * @param {DescribeHostsSettingRequest} req
     * @param {function(string, DescribeHostsSettingResponse):void} cb
     * @public
     */
    DescribeHostsSetting(req, cb) {
        let resp = new DescribeHostsSettingResponse();
        this.request("DescribeHostsSetting", req, resp, cb);
    }

    /**
     * 查询源站防护信息
     * @param {DescribeOriginProtectionRequest} req
     * @param {function(string, DescribeOriginProtectionResponse):void} cb
     * @public
     */
    DescribeOriginProtection(req, cb) {
        let resp = new DescribeOriginProtectionResponse();
        this.request("DescribeOriginProtection", req, resp, cb);
    }

    /**
     * 本接口（DescribeLogSets）用于获取日志集列表。
     * @param {DescribeLogSetsRequest} req
     * @param {function(string, DescribeLogSetsResponse):void} cb
     * @public
     */
    DescribeLogSets(req, cb) {
        let resp = new DescribeLogSetsResponse();
        this.request("DescribeLogSets", req, resp, cb);
    }

    /**
     * 用于查询站点的所有配置信息。
     * @param {DescribeZoneSettingRequest} req
     * @param {function(string, DescribeZoneSettingResponse):void} cb
     * @public
     */
    DescribeZoneSetting(req, cb) {
        let resp = new DescribeZoneSettingResponse();
        this.request("DescribeZoneSetting", req, resp, cb);
    }

    /**
     * 当客户取回站定的同时会取回此站点下关联的别称域名，此时入参为ZoneId；当客户接入站点发现已被别称域名接入时通过验证之后可取回域名，此时入参为ZoneName。
     * @param {ReclaimAliasDomainRequest} req
     * @param {function(string, ReclaimAliasDomainResponse):void} cb
     * @public
     */
    ReclaimAliasDomain(req, cb) {
        let resp = new ReclaimAliasDomainResponse();
        this.request("ReclaimAliasDomain", req, resp, cb);
    }

    /**
     * 创建应用代理规则
     * @param {CreateApplicationProxyRuleRequest} req
     * @param {function(string, CreateApplicationProxyRuleResponse):void} cb
     * @public
     */
    CreateApplicationProxyRule(req, cb) {
        let resp = new CreateApplicationProxyRuleResponse();
        this.request("CreateApplicationProxyRule", req, resp, cb);
    }

    /**
     * 用户查询用户站点信息列表，支持分页。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点。
     * @param {ReclaimZoneRequest} req
     * @param {function(string, ReclaimZoneResponse):void} cb
     * @public
     */
    ReclaimZone(req, cb) {
        let resp = new ReclaimZoneResponse();
        this.request("ReclaimZone", req, resp, cb);
    }

    /**
     * 删除站点。
     * @param {DeleteZoneRequest} req
     * @param {function(string, DeleteZoneResponse):void} cb
     * @public
     */
    DeleteZone(req, cb) {
        let resp = new DeleteZoneResponse();
        this.request("DeleteZone", req, resp, cb);
    }

    /**
     * 本接口（DescribeDDoSAttackData）用于查询DDoS攻击时序数据。
     * @param {DescribeDDoSAttackDataRequest} req
     * @param {function(string, DescribeDDoSAttackDataResponse):void} cb
     * @public
     */
    DescribeDDoSAttackData(req, cb) {
        let resp = new DescribeDDoSAttackDataResponse();
        this.request("DescribeDDoSAttackData", req, resp, cb);
    }

    /**
     * 本接口（DescribeWebProtectionTopData）用于查询CC防护的Top数据。
     * @param {DescribeWebProtectionTopDataRequest} req
     * @param {function(string, DescribeWebProtectionTopDataResponse):void} cb
     * @public
     */
    DescribeWebProtectionTopData(req, cb) {
        let resp = new DescribeWebProtectionTopDataResponse();
        this.request("DescribeWebProtectionTopData", req, resp, cb);
    }

    /**
     * 本接口（DescribeWebManagedRulesData）用于查询WAF攻击的时序数据。
     * @param {DescribeWebManagedRulesDataRequest} req
     * @param {function(string, DescribeWebManagedRulesDataResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesData(req, cb) {
        let resp = new DescribeWebManagedRulesDataResponse();
        this.request("DescribeWebManagedRulesData", req, resp, cb);
    }

    /**
     * 查询别称域名信息列表。
     * @param {DescribeAliasDomainsRequest} req
     * @param {function(string, DescribeAliasDomainsResponse):void} cb
     * @public
     */
    DescribeAliasDomains(req, cb) {
        let resp = new DescribeAliasDomainsResponse();
        this.request("DescribeAliasDomains", req, resp, cb);
    }


}
module.exports = TeoClient;

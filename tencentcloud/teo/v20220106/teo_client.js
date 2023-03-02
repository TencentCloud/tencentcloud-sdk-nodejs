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
const DropPageDetail = models.DropPageDetail;
const Compression = models.Compression;
const WebLogData = models.WebLogData;
const DeleteRulesRequest = models.DeleteRulesRequest;
const ACLUserRule = models.ACLUserRule;
const ModifyDefaultCertificateRequest = models.ModifyDefaultCertificateRequest;
const DescribeWebManagedRulesTopDataResponse = models.DescribeWebManagedRulesTopDataResponse;
const DescribeOriginGroupResponse = models.DescribeOriginGroupResponse;
const DescribeWebManagedRulesAttackEventsResponse = models.DescribeWebManagedRulesAttackEventsResponse;
const DescribeTopL7CacheDataRequest = models.DescribeTopL7CacheDataRequest;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const Https = models.Https;
const SecurityEntity = models.SecurityEntity;
const OriginFilter = models.OriginFilter;
const BotLogData = models.BotLogData;
const DescribeZonesRequest = models.DescribeZonesRequest;
const RateLimitTemplate = models.RateLimitTemplate;
const ShieldArea = models.ShieldArea;
const ServerCertInfo = models.ServerCertInfo;
const ModifyRuleRequest = models.ModifyRuleRequest;
const DdosRule = models.DdosRule;
const ModifyLoadBalancingStatusResponse = models.ModifyLoadBalancingStatusResponse;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DescribeDDosAttackEventResponse = models.DescribeDDosAttackEventResponse;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const CreateCustomErrorPageResponse = models.CreateCustomErrorPageResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const ExceptUserRuleCondition = models.ExceptUserRuleCondition;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const ModifyDnsRecordRequest = models.ModifyDnsRecordRequest;
const DDoSAcl = models.DDoSAcl;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const CreateApplicationProxyRulesRequest = models.CreateApplicationProxyRulesRequest;
const LoadBalancing = models.LoadBalancing;
const ModifyDnssecRequest = models.ModifyDnssecRequest;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const DdosPacketFilter = models.DdosPacketFilter;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const ImportDnsRecordsRequest = models.ImportDnsRecordsRequest;
const CacheConfigNoCache = models.CacheConfigNoCache;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const DescribeRulesResponse = models.DescribeRulesResponse;
const DescribeZoneDetailsResponse = models.DescribeZoneDetailsResponse;
const BotLog = models.BotLog;
const ExceptUserRuleScope = models.ExceptUserRuleScope;
const Origin = models.Origin;
const DescribeAvailablePlansRequest = models.DescribeAvailablePlansRequest;
const DescribeSecurityPolicyManagedRulesRequest = models.DescribeSecurityPolicyManagedRulesRequest;
const DescribeSecurityPortraitRulesRequest = models.DescribeSecurityPortraitRulesRequest;
const CertSort = models.CertSort;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const ModifyDDoSPolicyHostRequest = models.ModifyDDoSPolicyHostRequest;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const DescribeSecurityPolicyRegionsResponse = models.DescribeSecurityPolicyRegionsResponse;
const ModifyZoneResponse = models.ModifyZoneResponse;
const DescribeDDosAttackSourceEventRequest = models.DescribeDDosAttackSourceEventRequest;
const ModifyZoneRequest = models.ModifyZoneRequest;
const DeleteZoneResponse = models.DeleteZoneResponse;
const DDosAttackEventData = models.DDosAttackEventData;
const Hsts = models.Hsts;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const RuleCodeAction = models.RuleCodeAction;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const DDosAttackSourceEvent = models.DDosAttackSourceEvent;
const TimingDataRecord = models.TimingDataRecord;
const Zone = models.Zone;
const ModifyRulePriorityResponse = models.ModifyRulePriorityResponse;
const DdosAcls = models.DdosAcls;
const DeleteOriginGroupRequest = models.DeleteOriginGroupRequest;
const RulesSettingAction = models.RulesSettingAction;
const Tag = models.Tag;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const RateLimitConfig = models.RateLimitConfig;
const CreateDnsRecordRequest = models.CreateDnsRecordRequest;
const IpTableRule = models.IpTableRule;
const L7OfflineLog = models.L7OfflineLog;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const ApplicationProxyRule = models.ApplicationProxyRule;
const SmartRouting = models.SmartRouting;
const DdosSpeedLimit = models.DdosSpeedLimit;
const OriginCheckOriginStatus = models.OriginCheckOriginStatus;
const RuleNormalActionParams = models.RuleNormalActionParams;
const DescribeSecurityPolicyManagedRulesIdRequest = models.DescribeSecurityPolicyManagedRulesIdRequest;
const DescribeRulesSettingResponse = models.DescribeRulesSettingResponse;
const CacheConfigCache = models.CacheConfigCache;
const RuleExtraParameter = models.RuleExtraParameter;
const RuleAction = models.RuleAction;
const CertFilter = models.CertFilter;
const DescribeIdentificationRequest = models.DescribeIdentificationRequest;
const ModifyLoadBalancingStatusRequest = models.ModifyLoadBalancingStatusRequest;
const DescribeDDosAttackTopDataResponse = models.DescribeDDosAttackTopDataResponse;
const DescribeCnameStatusResponse = models.DescribeCnameStatusResponse;
const DescribeLoadBalancingRequest = models.DescribeLoadBalancingRequest;
const CCInterceptEvent = models.CCInterceptEvent;
const DDoSStatusInfo = models.DDoSStatusInfo;
const AclConfig = models.AclConfig;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const ScanDnsRecordsResponse = models.ScanDnsRecordsResponse;
const RateLimitTemplateDetail = models.RateLimitTemplateDetail;
const WafConfig = models.WafConfig;
const CreateDnsRecordResponse = models.CreateDnsRecordResponse;
const CCLog = models.CCLog;
const RuleItem = models.RuleItem;
const RuleFilter = models.RuleFilter;
const DDoSConfig = models.DDoSConfig;
const DescribeWebManagedRulesDataResponse = models.DescribeWebManagedRulesDataResponse;
const DescribeWebManagedRulesLogResponse = models.DescribeWebManagedRulesLogResponse;
const OriginRecord = models.OriginRecord;
const WebLogs = models.WebLogs;
const TopDetailData = models.TopDetailData;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const CacheConfigFollowOrigin = models.CacheConfigFollowOrigin;
const ACLCondition = models.ACLCondition;
const DescribeTopL7AnalysisDataRequest = models.DescribeTopL7AnalysisDataRequest;
const TopNEntry = models.TopNEntry;
const DescribeApplicationProxyResponse = models.DescribeApplicationProxyResponse;
const CreateLoadBalancingResponse = models.CreateLoadBalancingResponse;
const DescribeTopL7CacheDataResponse = models.DescribeTopL7CacheDataResponse;
const DescribeOverviewL7DataRequest = models.DescribeOverviewL7DataRequest;
const SwitchConfig = models.SwitchConfig;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const WebSocket = models.WebSocket;
const DataItem = models.DataItem;
const ModifyLoadBalancingRequest = models.ModifyLoadBalancingRequest;
const CreateLoadBalancingRequest = models.CreateLoadBalancingRequest;
const DescribeDnssecRequest = models.DescribeDnssecRequest;
const DescribeWebProtectionLogResponse = models.DescribeWebProtectionLogResponse;
const CCInterceptEventData = models.CCInterceptEventData;
const DescribeLoadBalancingDetailResponse = models.DescribeLoadBalancingDetailResponse;
const SecurityConfig = models.SecurityConfig;
const DDosMajorAttackEventData = models.DDosMajorAttackEventData;
const DescribeBotManagedRulesResponse = models.DescribeBotManagedRulesResponse;
const DnsRecord = models.DnsRecord;
const RuleCodeActionParams = models.RuleCodeActionParams;
const Ipv6Access = models.Ipv6Access;
const DDoSAntiPly = models.DDoSAntiPly;
const DescribeWebManagedRulesDataRequest = models.DescribeWebManagedRulesDataRequest;
const DDosAttackSourceEventData = models.DDosAttackSourceEventData;
const ModifyDDoSPolicyResponse = models.ModifyDDoSPolicyResponse;
const DescribeDnsRecordsRequest = models.DescribeDnsRecordsRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const WafRule = models.WafRule;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const GeoIp = models.GeoIp;
const RuleChoicePropertiesItem = models.RuleChoicePropertiesItem;
const DescribeSecurityPolicyRequest = models.DescribeSecurityPolicyRequest;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const RuleRewriteActionParams = models.RuleRewriteActionParams;
const DDosAttackEvent = models.DDosAttackEvent;
const FailReason = models.FailReason;
const TopNEntryValue = models.TopNEntryValue;
const CreateZoneRequest = models.CreateZoneRequest;
const PlanInfo = models.PlanInfo;
const VanityNameServersIps = models.VanityNameServersIps;
const DescribeTimingL7CacheDataRequest = models.DescribeTimingL7CacheDataRequest;
const DescribeSecurityPolicyListResponse = models.DescribeSecurityPolicyListResponse;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const ModifyRuleResponse = models.ModifyRuleResponse;
const CheckCertificateResponse = models.CheckCertificateResponse;
const DDoSApplication = models.DDoSApplication;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const DeleteLoadBalancingResponse = models.DeleteLoadBalancingResponse;
const DescribeWebProtectionDataRequest = models.DescribeWebProtectionDataRequest;
const CheckCertificateRequest = models.CheckCertificateRequest;
const DescribeSecurityPortraitRulesResponse = models.DescribeSecurityPortraitRulesResponse;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const BotManagedRuleDetail = models.BotManagedRuleDetail;
const ForceRedirect = models.ForceRedirect;
const DescribeDnsDataResponse = models.DescribeDnsDataResponse;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const DetailHost = models.DetailHost;
const RateLimitUserRule = models.RateLimitUserRule;
const DescribeDnsRecordsResponse = models.DescribeDnsRecordsResponse;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const CachePrefresh = models.CachePrefresh;
const DescribeTimingL7AnalysisDataResponse = models.DescribeTimingL7AnalysisDataResponse;
const PortraitManagedRuleDetail = models.PortraitManagedRuleDetail;
const BotPortraitRule = models.BotPortraitRule;
const DescribeWebProtectionAttackEventsRequest = models.DescribeWebProtectionAttackEventsRequest;
const RulesProperties = models.RulesProperties;
const DescribeOverviewL7DataResponse = models.DescribeOverviewL7DataResponse;
const DescribeHostsCertificateRequest = models.DescribeHostsCertificateRequest;
const DescribeSecurityPolicyManagedRulesResponse = models.DescribeSecurityPolicyManagedRulesResponse;
const OriginGroup = models.OriginGroup;
const DescribeApplicationProxyRequest = models.DescribeApplicationProxyRequest;
const CreateRuleRequest = models.CreateRuleRequest;
const ModifyDDoSPolicyHostResponse = models.ModifyDDoSPolicyHostResponse;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const ModifyLoadBalancingResponse = models.ModifyLoadBalancingResponse;
const WebAttackEvent = models.WebAttackEvent;
const DescribeDDosAttackTopDataRequest = models.DescribeDDosAttackTopDataRequest;
const ExceptUserRule = models.ExceptUserRule;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const DescribeDDosAttackDataRequest = models.DescribeDDosAttackDataRequest;
const ModifyDnsRecordResponse = models.ModifyDnsRecordResponse;
const OriginRecordPrivateParameter = models.OriginRecordPrivateParameter;
const CreatePlanForZoneRequest = models.CreatePlanForZoneRequest;
const TimingDataItem = models.TimingDataItem;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const DescribeTopL7AnalysisDataResponse = models.DescribeTopL7AnalysisDataResponse;
const IntelligenceRuleItem = models.IntelligenceRuleItem;
const IntelligenceRule = models.IntelligenceRule;
const PostMaxSize = models.PostMaxSize;
const ModifyRulePriorityRequest = models.ModifyRulePriorityRequest;
const ManagedRule = models.ManagedRule;
const Filter = models.Filter;
const DescribeWebManagedRulesAttackEventsRequest = models.DescribeWebManagedRulesAttackEventsRequest;
const DescribeCnameStatusRequest = models.DescribeCnameStatusRequest;
const CreateCustomErrorPageRequest = models.CreateCustomErrorPageRequest;
const DescribeDnssecResponse = models.DescribeDnssecResponse;
const CreateZoneResponse = models.CreateZoneResponse;
const DnsDataFilter = models.DnsDataFilter;
const DeleteLoadBalancingRequest = models.DeleteLoadBalancingRequest;
const DescribeTimingL7AnalysisDataRequest = models.DescribeTimingL7AnalysisDataRequest;
const DescribeSecurityPolicyManagedRulesIdResponse = models.DescribeSecurityPolicyManagedRulesIdResponse;
const WebEventData = models.WebEventData;
const ApplicationProxy = models.ApplicationProxy;
const ExceptConfig = models.ExceptConfig;
const DescribeDDoSPolicyResponse = models.DescribeDDoSPolicyResponse;
const CacheKey = models.CacheKey;
const ModifyOriginGroupRequest = models.ModifyOriginGroupRequest;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const DescribeSecurityPolicyListRequest = models.DescribeSecurityPolicyListRequest;
const DescribeTimingL7CacheDataResponse = models.DescribeTimingL7CacheDataResponse;
const DescribeApplicationProxyDetailRequest = models.DescribeApplicationProxyDetailRequest;
const RateLimitIntelligence = models.RateLimitIntelligence;
const IpTableConfig = models.IpTableConfig;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const DeleteOriginGroupResponse = models.DeleteOriginGroupResponse;
const Header = models.Header;
const RuleAndConditions = models.RuleAndConditions;
const DropPageConfig = models.DropPageConfig;
const DescribeDDosAttackSourceEventResponse = models.DescribeDDosAttackSourceEventResponse;
const DescribeZoneDetailsRequest = models.DescribeZoneDetailsRequest;
const DescribeDDoSPolicyRequest = models.DescribeDDoSPolicyRequest;
const SecEntry = models.SecEntry;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const DescribeDDosMajorAttackEventRequest = models.DescribeDDosMajorAttackEventRequest;
const Quic = models.Quic;
const CreateOriginGroupResponse = models.CreateOriginGroupResponse;
const DescribeSecurityPolicyResponse = models.DescribeSecurityPolicyResponse;
const QueryString = models.QueryString;
const DescribeSecurityPolicyRegionsRequest = models.DescribeSecurityPolicyRegionsRequest;
const SecEntryValue = models.SecEntryValue;
const ReclaimZoneRequest = models.ReclaimZoneRequest;
const RuleCondition = models.RuleCondition;
const DeleteZoneRequest = models.DeleteZoneRequest;
const BotManagedRule = models.BotManagedRule;
const ModifyDefaultCertificateResponse = models.ModifyDefaultCertificateResponse;
const DescribeDDosAttackEventRequest = models.DescribeDDosAttackEventRequest;
const ClientIp = models.ClientIp;
const DnsRecordFilter = models.DnsRecordFilter;
const DescribeHostsCertificateResponse = models.DescribeHostsCertificateResponse;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const AiRule = models.AiRule;
const ZoneFilter = models.ZoneFilter;
const MaxAge = models.MaxAge;
const DescribeRulesRequest = models.DescribeRulesRequest;
const DeleteRulesResponse = models.DeleteRulesResponse;
const QueryCondition = models.QueryCondition;
const DescribeDnsDataRequest = models.DescribeDnsDataRequest;
const CacheConfig = models.CacheConfig;
const DescribeDDosAttackEventDetailResponse = models.DescribeDDosAttackEventDetailResponse;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const ModifyDDoSPolicyRequest = models.ModifyDDoSPolicyRequest;
const ModifyZoneCnameSpeedUpResponse = models.ModifyZoneCnameSpeedUpResponse;
const DescribeWebProtectionLogRequest = models.DescribeWebProtectionLogRequest;
const CCLogData = models.CCLogData;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const DescribeRulesSettingRequest = models.DescribeRulesSettingRequest;
const Task = models.Task;
const DeleteDnsRecordsRequest = models.DeleteDnsRecordsRequest;
const DdosAllowBlock = models.DdosAllowBlock;
const DDoSGeoIp = models.DDoSGeoIp;
const RuleSettingDetail = models.RuleSettingDetail;
const TopDataRecord = models.TopDataRecord;
const DescribeZoneDDoSPolicyResponse = models.DescribeZoneDDoSPolicyResponse;
const CnameStatus = models.CnameStatus;
const DescribeDDosMajorAttackEventResponse = models.DescribeDDosMajorAttackEventResponse;
const DDoSFeaturesFilter = models.DDoSFeaturesFilter;
const ModifyOriginGroupResponse = models.ModifyOriginGroupResponse;
const DescribeWebProtectionAttackEventsResponse = models.DescribeWebProtectionAttackEventsResponse;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const Resource = models.Resource;
const DeleteDnsRecordsResponse = models.DeleteDnsRecordsResponse;
const DescribeBotLogRequest = models.DescribeBotLogRequest;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const DDosAttackEventDetailData = models.DDosAttackEventDetailData;
const CreateOriginGroupRequest = models.CreateOriginGroupRequest;
const DescribeTimingL4DataRequest = models.DescribeTimingL4DataRequest;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const DescribeZoneDDoSPolicyRequest = models.DescribeZoneDDoSPolicyRequest;
const DescribeDDosAttackDataResponse = models.DescribeDDosAttackDataResponse;
const DescribeWebManagedRulesLogRequest = models.DescribeWebManagedRulesLogRequest;
const SecRuleRelatedInfo = models.SecRuleRelatedInfo;
const ReclaimZoneResponse = models.ReclaimZoneResponse;
const CreateApplicationProxyRulesResponse = models.CreateApplicationProxyRulesResponse;
const DescribeWebManagedRulesTopDataRequest = models.DescribeWebManagedRulesTopDataRequest;
const DescribeAvailablePlansResponse = models.DescribeAvailablePlansResponse;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const DescribeIdentificationResponse = models.DescribeIdentificationResponse;
const DDosMajorAttackEvent = models.DDosMajorAttackEvent;
const ModifyZoneCnameSpeedUpRequest = models.ModifyZoneCnameSpeedUpRequest;
const DescribeApplicationProxyDetailResponse = models.DescribeApplicationProxyDetailResponse;
const DDoSUserAllowBlockIP = models.DDoSUserAllowBlockIP;
const RuleRewriteAction = models.RuleRewriteAction;
const RuleNormalAction = models.RuleNormalAction;
const DescribeBotLogResponse = models.DescribeBotLogResponse;
const DescribeLoadBalancingResponse = models.DescribeLoadBalancingResponse;
const DescribeWebProtectionDataResponse = models.DescribeWebProtectionDataResponse;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const ModifyDnssecResponse = models.ModifyDnssecResponse;
const ScanDnsRecordsRequest = models.ScanDnsRecordsRequest;
const VanityNameServers = models.VanityNameServers;
const ImportDnsRecordsResponse = models.ImportDnsRecordsResponse;
const DescribeLoadBalancingDetailRequest = models.DescribeLoadBalancingDetailRequest;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const DnssecInfo = models.DnssecInfo;
const DescribeOriginGroupRequest = models.DescribeOriginGroupRequest;
const DescribeOriginGroupDetailResponse = models.DescribeOriginGroupDetailResponse;
const UpstreamHttp2 = models.UpstreamHttp2;
const OfflineCache = models.OfflineCache;
const DescribeOriginGroupDetailRequest = models.DescribeOriginGroupDetailRequest;
const DescribeDDosAttackEventDetailRequest = models.DescribeDDosAttackEventDetailRequest;
const HostCertSetting = models.HostCertSetting;
const DescribeTimingL4DataResponse = models.DescribeTimingL4DataResponse;
const Sv = models.Sv;
const BotConfig = models.BotConfig;
const TimingTypeValue = models.TimingTypeValue;
const DescribeBotManagedRulesRequest = models.DescribeBotManagedRulesRequest;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.tencentcloudapi.com", "2022-01-06", credential, region, profile);
    }
    
    /**
     * 创建 DNS 记录
     * @param {CreateDnsRecordRequest} req
     * @param {function(string, CreateDnsRecordResponse):void} cb
     * @public
     */
    CreateDnsRecord(req, cb) {
        let resp = new CreateDnsRecordResponse();
        this.request("CreateDnsRecord", req, resp, cb);
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
     * 查询web防护攻击事件
     * @param {DescribeWebProtectionAttackEventsRequest} req
     * @param {function(string, DescribeWebProtectionAttackEventsResponse):void} cb
     * @public
     */
    DescribeWebProtectionAttackEvents(req, cb) {
        let resp = new DescribeWebProtectionAttackEventsResponse();
        this.request("DescribeWebProtectionAttackEvents", req, resp, cb);
    }

    /**
     * 创建负载均衡
     * @param {CreateLoadBalancingRequest} req
     * @param {function(string, CreateLoadBalancingResponse):void} cb
     * @public
     */
    CreateLoadBalancing(req, cb) {
        let resp = new CreateLoadBalancingResponse();
        this.request("CreateLoadBalancing", req, resp, cb);
    }

    /**
     * 域名DDoS高可用开关
     * @param {ModifyDDoSPolicyHostRequest} req
     * @param {function(string, ModifyDDoSPolicyHostResponse):void} cb
     * @public
     */
    ModifyDDoSPolicyHost(req, cb) {
        let resp = new ModifyDDoSPolicyHostResponse();
        this.request("ModifyDDoSPolicyHost", req, resp, cb);
    }

    /**
     * 用于验证站点所有权
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
     * 源站组修改
     * @param {ModifyOriginGroupRequest} req
     * @param {function(string, ModifyOriginGroupResponse):void} cb
     * @public
     */
    ModifyOriginGroup(req, cb) {
        let resp = new ModifyOriginGroupResponse();
        this.request("ModifyOriginGroup", req, resp, cb);
    }

    /**
     * 查询DDos攻击Top数据
     * @param {DescribeDDosAttackTopDataRequest} req
     * @param {function(string, DescribeDDosAttackTopDataResponse):void} cb
     * @public
     */
    DescribeDDosAttackTopData(req, cb) {
        let resp = new DescribeDDosAttackTopDataResponse();
        this.request("DescribeDDosAttackTopData", req, resp, cb);
    }

    /**
     * 查询Bot用户画像规则
     * @param {DescribeSecurityPortraitRulesRequest} req
     * @param {function(string, DescribeSecurityPortraitRulesResponse):void} cb
     * @public
     */
    DescribeSecurityPortraitRules(req, cb) {
        let resp = new DescribeSecurityPortraitRulesResponse();
        this.request("DescribeSecurityPortraitRules", req, resp, cb);
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
     * 查询waf攻击日志
     * @param {DescribeWebManagedRulesLogRequest} req
     * @param {function(string, DescribeWebManagedRulesLogResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesLog(req, cb) {
        let resp = new DescribeWebManagedRulesLogResponse();
        this.request("DescribeWebManagedRulesLog", req, resp, cb);
    }

    /**
     * 查询七层离线日志
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
     * 修改负载均衡状态
     * @param {ModifyLoadBalancingStatusRequest} req
     * @param {function(string, ModifyLoadBalancingStatusResponse):void} cb
     * @public
     */
    ModifyLoadBalancingStatus(req, cb) {
        let resp = new ModifyLoadBalancingStatusResponse();
        this.request("ModifyLoadBalancingStatus", req, resp, cb);
    }

    /**
     * 查询CC防护时序数据
     * @param {DescribeWebProtectionDataRequest} req
     * @param {function(string, DescribeWebProtectionDataResponse):void} cb
     * @public
     */
    DescribeWebProtectionData(req, cb) {
        let resp = new DescribeWebProtectionDataResponse();
        this.request("DescribeWebProtectionData", req, resp, cb);
    }

    /**
     * 查询Web托管攻击事件
     * @param {DescribeWebManagedRulesAttackEventsRequest} req
     * @param {function(string, DescribeWebManagedRulesAttackEventsResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesAttackEvents(req, cb) {
        let resp = new DescribeWebManagedRulesAttackEventsResponse();
        this.request("DescribeWebManagedRulesAttackEvents", req, resp, cb);
    }

    /**
     * 用该站点信息
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
     * 分页查询门神规则
     * @param {DescribeSecurityPolicyManagedRulesRequest} req
     * @param {function(string, DescribeSecurityPolicyManagedRulesResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyManagedRules(req, cb) {
        let resp = new DescribeSecurityPolicyManagedRulesResponse();
        this.request("DescribeSecurityPolicyManagedRules", req, resp, cb);
    }

    /**
     * 查询域名 CNAME 状态
     * @param {DescribeCnameStatusRequest} req
     * @param {function(string, DescribeCnameStatusResponse):void} cb
     * @public
     */
    DescribeCnameStatus(req, cb) {
        let resp = new DescribeCnameStatusResponse();
        this.request("DescribeCnameStatus", req, resp, cb);
    }

    /**
     * 查询所有地域信息
     * @param {DescribeSecurityPolicyRegionsRequest} req
     * @param {function(string, DescribeSecurityPolicyRegionsResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyRegions(req, cb) {
        let resp = new DescribeSecurityPolicyRegionsResponse();
        this.request("DescribeSecurityPolicyRegions", req, resp, cb);
    }

    /**
     * 根据站点 ID 查询站点的详细信息
     * @param {DescribeZoneDetailsRequest} req
     * @param {function(string, DescribeZoneDetailsResponse):void} cb
     * @public
     */
    DescribeZoneDetails(req, cb) {
        let resp = new DescribeZoneDetailsResponse();
        this.request("DescribeZoneDetails", req, resp, cb);
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
     * 查询全部安全实例
     * @param {DescribeSecurityPolicyListRequest} req
     * @param {function(string, DescribeSecurityPolicyListResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyList(req, cb) {
        let resp = new DescribeSecurityPolicyListResponse();
        this.request("DescribeSecurityPolicyList", req, resp, cb);
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
     * 源站组删除
     * @param {DeleteOriginGroupRequest} req
     * @param {function(string, DeleteOriginGroupResponse):void} cb
     * @public
     */
    DeleteOriginGroup(req, cb) {
        let resp = new DeleteOriginGroupResponse();
        this.request("DeleteOriginGroup", req, resp, cb);
    }

    /**
     * 查询waf攻击top数据
     * @param {DescribeWebManagedRulesTopDataRequest} req
     * @param {function(string, DescribeWebManagedRulesTopDataResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesTopData(req, cb) {
        let resp = new DescribeWebManagedRulesTopDataResponse();
        this.request("DescribeWebManagedRulesTopData", req, resp, cb);
    }

    /**
     * 批量创建应用代理规则
     * @param {CreateApplicationProxyRulesRequest} req
     * @param {function(string, CreateApplicationProxyRulesResponse):void} cb
     * @public
     */
    CreateApplicationProxyRules(req, cb) {
        let resp = new CreateApplicationProxyRulesResponse();
        this.request("CreateApplicationProxyRules", req, resp, cb);
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
     * 查询DDos攻击事件详情
     * @param {DescribeDDosAttackEventDetailRequest} req
     * @param {function(string, DescribeDDosAttackEventDetailResponse):void} cb
     * @public
     */
    DescribeDDosAttackEventDetail(req, cb) {
        let resp = new DescribeDDosAttackEventDetailResponse();
        this.request("DescribeDDosAttackEventDetail", req, resp, cb);
    }

    /**
     * 七层查询缓存分析时序类流量数据
     * @param {DescribeTimingL7CacheDataRequest} req
     * @param {function(string, DescribeTimingL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTimingL7CacheData(req, cb) {
        let resp = new DescribeTimingL7CacheDataResponse();
        this.request("DescribeTimingL7CacheData", req, resp, cb);
    }

    /**
     * 获取负载均衡列表
     * @param {DescribeLoadBalancingRequest} req
     * @param {function(string, DescribeLoadBalancingResponse):void} cb
     * @public
     */
    DescribeLoadBalancing(req, cb) {
        let resp = new DescribeLoadBalancingResponse();
        this.request("DescribeLoadBalancing", req, resp, cb);
    }

    /**
     * 删除负载均衡
     * @param {DeleteLoadBalancingRequest} req
     * @param {function(string, DeleteLoadBalancingResponse):void} cb
     * @public
     */
    DeleteLoadBalancing(req, cb) {
        let resp = new DeleteLoadBalancingResponse();
        this.request("DeleteLoadBalancing", req, resp, cb);
    }

    /**
     * 七层查询缓存分析top类流量数据
     * @param {DescribeTopL7CacheDataRequest} req
     * @param {function(string, DescribeTopL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTopL7CacheData(req, cb) {
        let resp = new DescribeTopL7CacheDataResponse();
        this.request("DescribeTopL7CacheData", req, resp, cb);
    }

    /**
     * 四层时序流量数据查询
     * @param {DescribeTimingL4DataRequest} req
     * @param {function(string, DescribeTimingL4DataResponse):void} cb
     * @public
     */
    DescribeTimingL4Data(req, cb) {
        let resp = new DescribeTimingL4DataResponse();
        this.request("DescribeTimingL4Data", req, resp, cb);
    }

    /**
     * 扫描站点历史解析记录
     * @param {ScanDnsRecordsRequest} req
     * @param {function(string, ScanDnsRecordsResponse):void} cb
     * @public
     */
    ScanDnsRecords(req, cb) {
        let resp = new ScanDnsRecordsResponse();
        this.request("ScanDnsRecords", req, resp, cb);
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
     * 查询top类流量数据
     * @param {DescribeTopL7AnalysisDataRequest} req
     * @param {function(string, DescribeTopL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTopL7AnalysisData(req, cb) {
        let resp = new DescribeTopL7AnalysisDataResponse();
        this.request("DescribeTopL7AnalysisData", req, resp, cb);
    }

    /**
     * 批量删除 DNS 记录
     * @param {DeleteDnsRecordsRequest} req
     * @param {function(string, DeleteDnsRecordsResponse):void} cb
     * @public
     */
    DeleteDnsRecords(req, cb) {
        let resp = new DeleteDnsRecordsResponse();
        this.request("DeleteDnsRecords", req, resp, cb);
    }

    /**
     * 修改Web&Bot安全配置
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
     * 分页查询Bot托管规则
     * @param {DescribeBotManagedRulesRequest} req
     * @param {function(string, DescribeBotManagedRulesResponse):void} cb
     * @public
     */
    DescribeBotManagedRules(req, cb) {
        let resp = new DescribeBotManagedRulesResponse();
        this.request("DescribeBotManagedRules", req, resp, cb);
    }

    /**
     * 查询DDos攻击源信息
     * @param {DescribeDDosAttackSourceEventRequest} req
     * @param {function(string, DescribeDDosAttackSourceEventResponse):void} cb
     * @public
     */
    DescribeDDosAttackSourceEvent(req, cb) {
        let resp = new DescribeDDosAttackSourceEventResponse();
        this.request("DescribeDDosAttackSourceEvent", req, resp, cb);
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
     * 查询七层数据分析类时序流量数据
     * @param {DescribeTimingL7AnalysisDataRequest} req
     * @param {function(string, DescribeTimingL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTimingL7AnalysisData(req, cb) {
        let resp = new DescribeTimingL7AnalysisDataResponse();
        this.request("DescribeTimingL7AnalysisData", req, resp, cb);
    }

    /**
     * 查询验证结果
     * @param {DescribeIdentificationRequest} req
     * @param {function(string, DescribeIdentificationResponse):void} cb
     * @public
     */
    DescribeIdentification(req, cb) {
        let resp = new DescribeIdentificationResponse();
        this.request("DescribeIdentification", req, resp, cb);
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
     * 用于用户接入新的站点
     * @param {CreateZoneRequest} req
     * @param {function(string, CreateZoneResponse):void} cb
     * @public
     */
    CreateZone(req, cb) {
        let resp = new CreateZoneResponse();
        this.request("CreateZone", req, resp, cb);
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
     * 查询所有DDoS防护分区
     * @param {DescribeZoneDDoSPolicyRequest} req
     * @param {function(string, DescribeZoneDDoSPolicyResponse):void} cb
     * @public
     */
    DescribeZoneDDoSPolicy(req, cb) {
        let resp = new DescribeZoneDDoSPolicyResponse();
        this.request("DescribeZoneDDoSPolicy", req, resp, cb);
    }

    /**
     * 修改负载均衡
     * @param {ModifyLoadBalancingRequest} req
     * @param {function(string, ModifyLoadBalancingResponse):void} cb
     * @public
     */
    ModifyLoadBalancing(req, cb) {
        let resp = new ModifyLoadBalancingResponse();
        this.request("ModifyLoadBalancing", req, resp, cb);
    }

    /**
     * 创建自定义规则的自定义页
     * @param {CreateCustomErrorPageRequest} req
     * @param {function(string, CreateCustomErrorPageResponse):void} cb
     * @public
     */
    CreateCustomErrorPage(req, cb) {
        let resp = new CreateCustomErrorPageResponse();
        this.request("CreateCustomErrorPage", req, resp, cb);
    }

    /**
     * 修改DDoS防护分区配置
     * @param {ModifyDDoSPolicyRequest} req
     * @param {function(string, ModifyDDoSPolicyResponse):void} cb
     * @public
     */
    ModifyDDoSPolicy(req, cb) {
        let resp = new ModifyDDoSPolicyResponse();
        this.request("ModifyDDoSPolicy", req, resp, cb);
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
     * 查询域名证书列表，支持搜索、分页、排序、过滤。
     * @param {DescribeHostsCertificateRequest} req
     * @param {function(string, DescribeHostsCertificateResponse):void} cb
     * @public
     */
    DescribeHostsCertificate(req, cb) {
        let resp = new DescribeHostsCertificateResponse();
        this.request("DescribeHostsCertificate", req, resp, cb);
    }

    /**
     * 查询DDos攻击时序数据
     * @param {DescribeDDosAttackDataRequest} req
     * @param {function(string, DescribeDDosAttackDataResponse):void} cb
     * @public
     */
    DescribeDDosAttackData(req, cb) {
        let resp = new DescribeDDosAttackDataResponse();
        this.request("DescribeDDosAttackData", req, resp, cb);
    }

    /**
     * 获取源站组详细信息
     * @param {DescribeOriginGroupDetailRequest} req
     * @param {function(string, DescribeOriginGroupDetailResponse):void} cb
     * @public
     */
    DescribeOriginGroupDetail(req, cb) {
        let resp = new DescribeOriginGroupDetailResponse();
        this.request("DescribeOriginGroupDetail", req, resp, cb);
    }

    /**
     * 获取应用代理详细信息
     * @param {DescribeApplicationProxyDetailRequest} req
     * @param {function(string, DescribeApplicationProxyDetailResponse):void} cb
     * @public
     */
    DescribeApplicationProxyDetail(req, cb) {
        let resp = new DescribeApplicationProxyDetailResponse();
        this.request("DescribeApplicationProxyDetail", req, resp, cb);
    }

    /**
     * 查询CC防护日志
     * @param {DescribeWebProtectionLogRequest} req
     * @param {function(string, DescribeWebProtectionLogResponse):void} cb
     * @public
     */
    DescribeWebProtectionLog(req, cb) {
        let resp = new DescribeWebProtectionLogResponse();
        this.request("DescribeWebProtectionLog", req, resp, cb);
    }

    /**
     * 用于开启，关闭站点
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
     * 查询DDoS防护配置详情
     * @param {DescribeDDoSPolicyRequest} req
     * @param {function(string, DescribeDDoSPolicyResponse):void} cb
     * @public
     */
    DescribeDDoSPolicy(req, cb) {
        let resp = new DescribeDDoSPolicyResponse();
        this.request("DescribeDDoSPolicy", req, resp, cb);
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
     * 获取负载均衡详细信息
     * @param {DescribeLoadBalancingDetailRequest} req
     * @param {function(string, DescribeLoadBalancingDetailResponse):void} cb
     * @public
     */
    DescribeLoadBalancingDetail(req, cb) {
        let resp = new DescribeLoadBalancingDetailResponse();
        this.request("DescribeLoadBalancingDetail", req, resp, cb);
    }

    /**
     * 查询安全防护配置详情
     * @param {DescribeSecurityPolicyRequest} req
     * @param {function(string, DescribeSecurityPolicyResponse):void} cb
     * @public
     */
    DescribeSecurityPolicy(req, cb) {
        let resp = new DescribeSecurityPolicyResponse();
        this.request("DescribeSecurityPolicy", req, resp, cb);
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
     * 获取源站组信息列表
     * @param {DescribeOriginGroupRequest} req
     * @param {function(string, DescribeOriginGroupResponse):void} cb
     * @public
     */
    DescribeOriginGroup(req, cb) {
        let resp = new DescribeOriginGroupResponse();
        this.request("DescribeOriginGroup", req, resp, cb);
    }

    /**
     * 用于查询 DNSSEC 相关信息
     * @param {DescribeDnssecRequest} req
     * @param {function(string, DescribeDnssecResponse):void} cb
     * @public
     */
    DescribeDnssec(req, cb) {
        let resp = new DescribeDnssecResponse();
        this.request("DescribeDnssec", req, resp, cb);
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
     * 源站组创建
     * @param {CreateOriginGroupRequest} req
     * @param {function(string, CreateOriginGroupResponse):void} cb
     * @public
     */
    CreateOriginGroup(req, cb) {
        let resp = new CreateOriginGroupResponse();
        this.request("CreateOriginGroup", req, resp, cb);
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
     * 开启，关闭 CNAME 加速
     * @param {ModifyZoneCnameSpeedUpRequest} req
     * @param {function(string, ModifyZoneCnameSpeedUpResponse):void} cb
     * @public
     */
    ModifyZoneCnameSpeedUp(req, cb) {
        let resp = new ModifyZoneCnameSpeedUpResponse();
        this.request("ModifyZoneCnameSpeedUp", req, resp, cb);
    }

    /**
     * 修改 DNS 记录
     * @param {ModifyDnsRecordRequest} req
     * @param {function(string, ModifyDnsRecordResponse):void} cb
     * @public
     */
    ModifyDnsRecord(req, cb) {
        let resp = new ModifyDnsRecordResponse();
        this.request("ModifyDnsRecord", req, resp, cb);
    }

    /**
     * 查询DDos主攻击事件
     * @param {DescribeDDosMajorAttackEventRequest} req
     * @param {function(string, DescribeDDosMajorAttackEventResponse):void} cb
     * @public
     */
    DescribeDDosMajorAttackEvent(req, cb) {
        let resp = new DescribeDDosMajorAttackEventResponse();
        this.request("DescribeDDosMajorAttackEvent", req, resp, cb);
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
     * 用户查询用户站点信息列表，支持分页
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * 站点被其他用户接入后，验证了站点所有权之后，可以找回该站点
     * @param {ReclaimZoneRequest} req
     * @param {function(string, ReclaimZoneResponse):void} cb
     * @public
     */
    ReclaimZone(req, cb) {
        let resp = new ReclaimZoneResponse();
        this.request("ReclaimZone", req, resp, cb);
    }

    /**
     * 删除站点
     * @param {DeleteZoneRequest} req
     * @param {function(string, DeleteZoneResponse):void} cb
     * @public
     */
    DeleteZone(req, cb) {
        let resp = new DeleteZoneResponse();
        this.request("DeleteZone", req, resp, cb);
    }

    /**
     * 查询DDos攻击事件
     * @param {DescribeDDosAttackEventRequest} req
     * @param {function(string, DescribeDDosAttackEventResponse):void} cb
     * @public
     */
    DescribeDDosAttackEvent(req, cb) {
        let resp = new DescribeDDosAttackEventResponse();
        this.request("DescribeDDosAttackEvent", req, resp, cb);
    }

    /**
     * 查询 DNS 记录列表，支持搜索、分页、排序、过滤。
     * @param {DescribeDnsRecordsRequest} req
     * @param {function(string, DescribeDnsRecordsResponse):void} cb
     * @public
     */
    DescribeDnsRecords(req, cb) {
        let resp = new DescribeDnsRecordsResponse();
        this.request("DescribeDnsRecords", req, resp, cb);
    }

    /**
     * 查询Bot攻击日志
     * @param {DescribeBotLogRequest} req
     * @param {function(string, DescribeBotLogResponse):void} cb
     * @public
     */
    DescribeBotLog(req, cb) {
        let resp = new DescribeBotLogResponse();
        this.request("DescribeBotLog", req, resp, cb);
    }

    /**
     * 获取应用代理列表
     * @param {DescribeApplicationProxyRequest} req
     * @param {function(string, DescribeApplicationProxyResponse):void} cb
     * @public
     */
    DescribeApplicationProxy(req, cb) {
        let resp = new DescribeApplicationProxyResponse();
        this.request("DescribeApplicationProxy", req, resp, cb);
    }

    /**
     * 查询waf攻击时序数据
     * @param {DescribeWebManagedRulesDataRequest} req
     * @param {function(string, DescribeWebManagedRulesDataResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesData(req, cb) {
        let resp = new DescribeWebManagedRulesDataResponse();
        this.request("DescribeWebManagedRulesData", req, resp, cb);
    }

    /**
     * 导入 DNS 记录
     * @param {ImportDnsRecordsRequest} req
     * @param {function(string, ImportDnsRecordsResponse):void} cb
     * @public
     */
    ImportDnsRecords(req, cb) {
        let resp = new ImportDnsRecordsResponse();
        this.request("ImportDnsRecords", req, resp, cb);
    }

    /**
     * 规则id查询门神规则详情
     * @param {DescribeSecurityPolicyManagedRulesIdRequest} req
     * @param {function(string, DescribeSecurityPolicyManagedRulesIdResponse):void} cb
     * @public
     */
    DescribeSecurityPolicyManagedRulesId(req, cb) {
        let resp = new DescribeSecurityPolicyManagedRulesIdResponse();
        this.request("DescribeSecurityPolicyManagedRulesId", req, resp, cb);
    }

    /**
     * 修改 DNSSEC 状态
     * @param {ModifyDnssecRequest} req
     * @param {function(string, ModifyDnssecResponse):void} cb
     * @public
     */
    ModifyDnssec(req, cb) {
        let resp = new ModifyDnssecResponse();
        this.request("ModifyDnssec", req, resp, cb);
    }


}
module.exports = TeoClient;

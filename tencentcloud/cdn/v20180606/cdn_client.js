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
const DescribeCdnDomainLogsResponse = models.DescribeCdnDomainLogsResponse;
const ScdnTopUrlData = models.ScdnTopUrlData;
const ScdnLogTaskDetail = models.ScdnLogTaskDetail;
const AdvancedAuthentication = models.AdvancedAuthentication;
const Compression = models.Compression;
const Revalidate = models.Revalidate;
const ResourceData = models.ResourceData;
const UrlRecord = models.UrlRecord;
const DescribePushQuotaResponse = models.DescribePushQuotaResponse;
const DescribePurgeQuotaResponse = models.DescribePurgeQuotaResponse;
const Authentication = models.Authentication;
const DescribeScdnTopDataResponse = models.DescribeScdnTopDataResponse;
const ImageOptimization = models.ImageOptimization;
const Https = models.Https;
const RuleCache = models.RuleCache;
const DescribeCdnDomainLogsRequest = models.DescribeCdnDomainLogsRequest;
const DescribeTrafficPackagesRequest = models.DescribeTrafficPackagesRequest;
const CreateClsLogTopicResponse = models.CreateClsLogTopicResponse;
const ScdnAclRule = models.ScdnAclRule;
const PurgePathCacheResponse = models.PurgePathCacheResponse;
const DomainFilter = models.DomainFilter;
const DescribeCdnOriginIpResponse = models.DescribeCdnOriginIpResponse;
const SpecificConfig = models.SpecificConfig;
const FollowRedirect = models.FollowRedirect;
const RequestHeader = models.RequestHeader;
const DescribePurgeQuotaRequest = models.DescribePurgeQuotaRequest;
const Referer = models.Referer;
const StartScdnDomainRequest = models.StartScdnDomainRequest;
const PostSize = models.PostSize;
const DescribeCdnDataResponse = models.DescribeCdnDataResponse;
const EnableClsLogTopicRequest = models.EnableClsLogTopicRequest;
const UpdateImageConfigResponse = models.UpdateImageConfigResponse;
const ScdnDomain = models.ScdnDomain;
const CacheConfigNoCache = models.CacheConfigNoCache;
const AccessControl = models.AccessControl;
const DeleteCdnDomainRequest = models.DeleteCdnDomainRequest;
const DescribePayTypeResponse = models.DescribePayTypeResponse;
const ForceRedirect = models.ForceRedirect;
const PathRule = models.PathRule;
const ListTopDataRequest = models.ListTopDataRequest;
const ListClsTopicDomainsRequest = models.ListClsTopicDomainsRequest;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const DescribePayTypeRequest = models.DescribePayTypeRequest;
const UpdateImageConfigRequest = models.UpdateImageConfigRequest;
const DisableCachesRequest = models.DisableCachesRequest;
const AdvancedAuthenticationTypeD = models.AdvancedAuthenticationTypeD;
const StartCdnDomainResponse = models.StartCdnDomainResponse;
const CompressionRule = models.CompressionRule;
const GuetzliAdapter = models.GuetzliAdapter;
const UpdateScdnDomainResponse = models.UpdateScdnDomainResponse;
const Origin = models.Origin;
const ViolationUrl = models.ViolationUrl;
const DescribeDomainsConfigRequest = models.DescribeDomainsConfigRequest;
const TopData = models.TopData;
const EnableCachesRequest = models.EnableCachesRequest;
const Quota = models.Quota;
const HeaderKey = models.HeaderKey;
const DescribeBillingDataRequest = models.DescribeBillingDataRequest;
const SimpleCache = models.SimpleCache;
const DeleteClsLogTopicRequest = models.DeleteClsLogTopicRequest;
const UserAgentFilter = models.UserAgentFilter;
const DeleteScdnDomainRequest = models.DeleteScdnDomainRequest;
const DescribeDistrictIspDataResponse = models.DescribeDistrictIspDataResponse;
const DescribeCdnOriginIpRequest = models.DescribeCdnOriginIpRequest;
const UpdatePayTypeResponse = models.UpdatePayTypeResponse;
const TopicInfo = models.TopicInfo;
const DescribeDomainsConfigResponse = models.DescribeDomainsConfigResponse;
const DescribeDiagnoseReportRequest = models.DescribeDiagnoseReportRequest;
const BriefDomain = models.BriefDomain;
const TimestampData = models.TimestampData;
const TpgAdapter = models.TpgAdapter;
const CacheConfigCache = models.CacheConfigCache;
const DescribeReportDataResponse = models.DescribeReportDataResponse;
const DisableClsLogTopicRequest = models.DisableClsLogTopicRequest;
const RuleCacheConfig = models.RuleCacheConfig;
const ListClsTopicDomainsResponse = models.ListClsTopicDomainsResponse;
const TrafficPackage = models.TrafficPackage;
const BotCookie = models.BotCookie;
const DescribeCdnIpRequest = models.DescribeCdnIpRequest;
const Ipv6 = models.Ipv6;
const WafSubRuleStatus = models.WafSubRuleStatus;
const ScdnEventLogConditions = models.ScdnEventLogConditions;
const StatusCodeCache = models.StatusCodeCache;
const DescribeIpVisitResponse = models.DescribeIpVisitResponse;
const EnableClsLogTopicResponse = models.EnableClsLogTopicResponse;
const ListClsLogTopicsResponse = models.ListClsLogTopicsResponse;
const OverseaConfig = models.OverseaConfig;
const AddCdnDomainRequest = models.AddCdnDomainRequest;
const UserAgentFilterRule = models.UserAgentFilterRule;
const UpdateDomainConfigRequest = models.UpdateDomainConfigRequest;
const Tag = models.Tag;
const CacheConfigFollowOrigin = models.CacheConfigFollowOrigin;
const MaxAgeRule = models.MaxAgeRule;
const AdvancedAuthenticationTypeE = models.AdvancedAuthenticationTypeE;
const DescribeCertDomainsRequest = models.DescribeCertDomainsRequest;
const AdvancedAuthenticationTypeF = models.AdvancedAuthenticationTypeF;
const AdvancedAuthenticationTypeA = models.AdvancedAuthenticationTypeA;
const AdvancedCache = models.AdvancedCache;
const AdvancedAuthenticationTypeC = models.AdvancedAuthenticationTypeC;
const AdvancedAuthenticationTypeB = models.AdvancedAuthenticationTypeB;
const WebpAdapter = models.WebpAdapter;
const CreateScdnLogTaskResponse = models.CreateScdnLogTaskResponse;
const MapInfo = models.MapInfo;
const DescribeCertDomainsResponse = models.DescribeCertDomainsResponse;
const ScdnBotConfig = models.ScdnBotConfig;
const DuplicateDomainConfigRequest = models.DuplicateDomainConfigRequest;
const AuthenticationTypeD = models.AuthenticationTypeD;
const AuthenticationTypeC = models.AuthenticationTypeC;
const AuthenticationTypeB = models.AuthenticationTypeB;
const AuthenticationTypeA = models.AuthenticationTypeA;
const OriginAuthenticationTypeA = models.OriginAuthenticationTypeA;
const SecurityConfig = models.SecurityConfig;
const DescribePushTasksResponse = models.DescribePushTasksResponse;
const ResourceOriginData = models.ResourceOriginData;
const IpStatus = models.IpStatus;
const AddCdnDomainResponse = models.AddCdnDomainResponse;
const ListScdnDomainsResponse = models.ListScdnDomainsResponse;
const VerifyDomainRecordResponse = models.VerifyDomainRecordResponse;
const DomainAreaConfig = models.DomainAreaConfig;
const ListScdnDomainsRequest = models.ListScdnDomainsRequest;
const ServerCert = models.ServerCert;
const AccessControlRule = models.AccessControlRule;
const HttpHeaderPathRule = models.HttpHeaderPathRule;
const CreateScdnLogTaskRequest = models.CreateScdnLogTaskRequest;
const DistrictIspInfo = models.DistrictIspInfo;
const SimpleCacheRule = models.SimpleCacheRule;
const DisableClsLogTopicResponse = models.DisableClsLogTopicResponse;
const Hsts = models.Hsts;
const DescribeIpStatusRequest = models.DescribeIpStatusRequest;
const DetailDomain = models.DetailDomain;
const GetDisableRecordsResponse = models.GetDisableRecordsResponse;
const Ipv6Access = models.Ipv6Access;
const ResponseHeader = models.ResponseHeader;
const DuplicateDomainConfigResponse = models.DuplicateDomainConfigResponse;
const CdnIpHistory = models.CdnIpHistory;
const SummarizedData = models.SummarizedData;
const UpdateScdnDomainRequest = models.UpdateScdnDomainRequest;
const UpdatePayTypeRequest = models.UpdatePayTypeRequest;
const ManageClsTopicDomainsRequest = models.ManageClsTopicDomainsRequest;
const ListDiagnoseReportRequest = models.ListDiagnoseReportRequest;
const ScdnWafConfig = models.ScdnWafConfig;
const CreateScdnFailedLogTaskRequest = models.CreateScdnFailedLogTaskRequest;
const Cache = models.Cache;
const DiagnoseData = models.DiagnoseData;
const DescribeOriginDataRequest = models.DescribeOriginDataRequest;
const RangeOriginPull = models.RangeOriginPull;
const ListScdnLogTasksRequest = models.ListScdnLogTasksRequest;
const SearchClsLogResponse = models.SearchClsLogResponse;
const PathBasedOriginRule = models.PathBasedOriginRule;
const PushUrlsCacheRequest = models.PushUrlsCacheRequest;
const MainlandConfig = models.MainlandConfig;
const DescribeReportDataRequest = models.DescribeReportDataRequest;
const DescribePushTasksRequest = models.DescribePushTasksRequest;
const DescribeScdnTopDataRequest = models.DescribeScdnTopDataRequest;
const DescribeUrlViolationsRequest = models.DescribeUrlViolationsRequest;
const RefererRule = models.RefererRule;
const ScdnCCRules = models.ScdnCCRules;
const IpFreqLimit = models.IpFreqLimit;
const ScdnDdosConfig = models.ScdnDdosConfig;
const CreateDiagnoseUrlResponse = models.CreateDiagnoseUrlResponse;
const CreateClsLogTopicRequest = models.CreateClsLogTopicRequest;
const CacheOptResult = models.CacheOptResult;
const CreateVerifyRecordResponse = models.CreateVerifyRecordResponse;
const StopCdnDomainRequest = models.StopCdnDomainRequest;
const DescribeMapInfoResponse = models.DescribeMapInfoResponse;
const DescribeTrafficPackagesResponse = models.DescribeTrafficPackagesResponse;
const DescribeMapInfoRequest = models.DescribeMapInfoRequest;
const EnableCachesResponse = models.EnableCachesResponse;
const RuleQueryString = models.RuleQueryString;
const DescribeIpVisitRequest = models.DescribeIpVisitRequest;
const HttpHeaderRule = models.HttpHeaderRule;
const StatusCodeCacheRule = models.StatusCodeCacheRule;
const ClientCert = models.ClientCert;
const ScdnTopData = models.ScdnTopData;
const ScdnConfig = models.ScdnConfig;
const DomainLog = models.DomainLog;
const GetDisableRecordsRequest = models.GetDisableRecordsRequest;
const CreateDiagnoseUrlRequest = models.CreateDiagnoseUrlRequest;
const PurgeUrlsCacheResponse = models.PurgeUrlsCacheResponse;
const StartScdnDomainResponse = models.StartScdnDomainResponse;
const BotJavaScript = models.BotJavaScript;
const DeleteClsLogTopicResponse = models.DeleteClsLogTopicResponse;
const DescribeBillingDataResponse = models.DescribeBillingDataResponse;
const DisableCachesResponse = models.DisableCachesResponse;
const SchemeKey = models.SchemeKey;
const DescribeImageConfigRequest = models.DescribeImageConfigRequest;
const DescribeCdnIpResponse = models.DescribeCdnIpResponse;
const AdvanceCacheRule = models.AdvanceCacheRule;
const DescribeIpStatusResponse = models.DescribeIpStatusResponse;
const DescribeDistrictIspDataRequest = models.DescribeDistrictIspDataRequest;
const ListScdnLogTasksResponse = models.ListScdnLogTasksResponse;
const ScdnErrorPage = models.ScdnErrorPage;
const CacheKey = models.CacheKey;
const UrlRedirect = models.UrlRedirect;
const DownstreamCapping = models.DownstreamCapping;
const CookieKey = models.CookieKey;
const StopScdnDomainResponse = models.StopScdnDomainResponse;
const VerifyDomainRecordRequest = models.VerifyDomainRecordRequest;
const KeyRule = models.KeyRule;
const CappingRule = models.CappingRule;
const DeleteScdnDomainResponse = models.DeleteScdnDomainResponse;
const ListClsLogTopicsRequest = models.ListClsLogTopicsRequest;
const Seo = models.Seo;
const BandwidthAlert = models.BandwidthAlert;
const CreateVerifyRecordRequest = models.CreateVerifyRecordRequest;
const ClsLogObject = models.ClsLogObject;
const RegionMapRelation = models.RegionMapRelation;
const PurgePathCacheRequest = models.PurgePathCacheRequest;
const DescribeDiagnoseReportResponse = models.DescribeDiagnoseReportResponse;
const CreateScdnFailedLogTaskResponse = models.CreateScdnFailedLogTaskResponse;
const CdnData = models.CdnData;
const PurgeUrlsCacheRequest = models.PurgeUrlsCacheRequest;
const StartCdnDomainRequest = models.StartCdnDomainRequest;
const OriginPullOptimization = models.OriginPullOptimization;
const ErrorPage = models.ErrorPage;
const PushTask = models.PushTask;
const CreateEdgePackTaskResponse = models.CreateEdgePackTaskResponse;
const ReportData = models.ReportData;
const DescribeScdnConfigResponse = models.DescribeScdnConfigResponse;
const DescribePushQuotaRequest = models.DescribePushQuotaRequest;
const TopDetailData = models.TopDetailData;
const ResponseHeaderCache = models.ResponseHeaderCache;
const ResourceBillingData = models.ResourceBillingData;
const Sort = models.Sort;
const ClientInfo = models.ClientInfo;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const PushUrlsCacheResponse = models.PushUrlsCacheResponse;
const OriginCombine = models.OriginCombine;
const QueryStringKey = models.QueryStringKey;
const ListTopDataResponse = models.ListTopDataResponse;
const MaxAge = models.MaxAge;
const UpdateDomainConfigResponse = models.UpdateDomainConfigResponse;
const LogSetInfo = models.LogSetInfo;
const ListDiagnoseReportResponse = models.ListDiagnoseReportResponse;
const SearchClsLogRequest = models.SearchClsLogRequest;
const AdvanceConfig = models.AdvanceConfig;
const AwsPrivateAccess = models.AwsPrivateAccess;
const ManageClsTopicDomainsResponse = models.ManageClsTopicDomainsResponse;
const VideoSeek = models.VideoSeek;
const Compatibility = models.Compatibility;
const ScdnAclGroup = models.ScdnAclGroup;
const ScdnWafRule = models.ScdnWafRule;
const ClsSearchLogs = models.ClsSearchLogs;
const DescribeUrlViolationsResponse = models.DescribeUrlViolationsResponse;
const IpFilter = models.IpFilter;
const ScdnAclConfig = models.ScdnAclConfig;
const DiagnoseUnit = models.DiagnoseUnit;
const DiagnoseInfo = models.DiagnoseInfo;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const OriginAuthentication = models.OriginAuthentication;
const ErrorPageRule = models.ErrorPageRule;
const DescribeOriginDataResponse = models.DescribeOriginDataResponse;
const PurgeTask = models.PurgeTask;
const OriginPullTimeout = models.OriginPullTimeout;
const DeleteCdnDomainResponse = models.DeleteCdnDomainResponse;
const OriginIp = models.OriginIp;
const CdnIp = models.CdnIp;
const DescribeCdnDataRequest = models.DescribeCdnDataRequest;
const DescribeImageConfigResponse = models.DescribeImageConfigResponse;
const DescribeScdnConfigRequest = models.DescribeScdnConfigRequest;
const CacheTagKey = models.CacheTagKey;
const StopScdnDomainRequest = models.StopScdnDomainRequest;
const ScdnTypeData = models.ScdnTypeData;
const Quic = models.Quic;
const DescribeDomainsRequest = models.DescribeDomainsRequest;
const OfflineCache = models.OfflineCache;
const CreateEdgePackTaskRequest = models.CreateEdgePackTaskRequest;
const StopCdnDomainResponse = models.StopCdnDomainResponse;
const UrlRedirectRule = models.UrlRedirectRule;
const DiagnoseList = models.DiagnoseList;
const IpFilterPathRule = models.IpFilterPathRule;


/**
 * cdn client
 * @class
 */
class CdnClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdn.tencentcloudapi.com", "2018-06-06", credential, region, profile);
    }
    
    /**
     * 动态打包任务提交接口
     * @param {CreateEdgePackTaskRequest} req
     * @param {function(string, CreateEdgePackTaskResponse):void} cb
     * @public
     */
    CreateEdgePackTask(req, cb) {
        let resp = new CreateEdgePackTaskResponse();
        this.request("CreateEdgePackTask", req, resp, cb);
    }

    /**
     * DescribeIpStatus 用于查询域名所在加速平台的边缘节点、回源节点明细。注意事项：边缘节点（edge）尚未全量开放，未在内测名单中的账号不支持调用
     * @param {DescribeIpStatusRequest} req
     * @param {function(string, DescribeIpStatusResponse):void} cb
     * @public
     */
    DescribeIpStatus(req, cb) {
        let resp = new DescribeIpStatusResponse();
        this.request("DescribeIpStatus", req, resp, cb);
    }

    /**
     * DescribeMapInfo 用于查询省份对应的 ID，运营商对应的 ID 信息。
     * @param {DescribeMapInfoRequest} req
     * @param {function(string, DescribeMapInfoResponse):void} cb
     * @public
     */
    DescribeMapInfo(req, cb) {
        let resp = new DescribeMapInfoResponse();
        this.request("DescribeMapInfo", req, resp, cb);
    }

    /**
     * DeleteCdnDomain 用于删除指定加速域名
     * @param {DeleteCdnDomainRequest} req
     * @param {function(string, DeleteCdnDomainResponse):void} cb
     * @public
     */
    DeleteCdnDomain(req, cb) {
        let resp = new DeleteCdnDomainResponse();
        this.request("DeleteCdnDomain", req, resp, cb);
    }

    /**
     * 验证域名解析值
     * @param {VerifyDomainRecordRequest} req
     * @param {function(string, VerifyDomainRecordResponse):void} cb
     * @public
     */
    VerifyDomainRecord(req, cb) {
        let resp = new VerifyDomainRecordResponse();
        this.request("VerifyDomainRecord", req, resp, cb);
    }

    /**
     * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 PurgePathCache 与 PurgeUrlsCache 接口提交的任务均可通过此接口进行查询。
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * 删除SCDN域名
     * @param {DeleteScdnDomainRequest} req
     * @param {function(string, DeleteScdnDomainResponse):void} cb
     * @public
     */
    DeleteScdnDomain(req, cb) {
        let resp = new DeleteScdnDomainResponse();
        this.request("DeleteScdnDomain", req, resp, cb);
    }

    /**
     * DescribePayType 用于查询用户的计费类型，计费周期等信息。
     * @param {DescribePayTypeRequest} req
     * @param {function(string, DescribePayTypeResponse):void} cb
     * @public
     */
    DescribePayType(req, cb) {
        let resp = new DescribePayTypeResponse();
        this.request("DescribePayType", req, resp, cb);
    }

    /**
     * DescribeDomainsConfig 用于查询内容分发网络加速域名（含境内、境外）的所有配置信息。
     * @param {DescribeDomainsConfigRequest} req
     * @param {function(string, DescribeDomainsConfigResponse):void} cb
     * @public
     */
    DescribeDomainsConfig(req, cb) {
        let resp = new DescribeDomainsConfigResponse();
        this.request("DescribeDomainsConfig", req, resp, cb);
    }

    /**
     * AddCdnDomain 用于新增内容分发网络加速域名。
     * @param {AddCdnDomainRequest} req
     * @param {function(string, AddCdnDomainResponse):void} cb
     * @public
     */
    AddCdnDomain(req, cb) {
        let resp = new AddCdnDomainResponse();
        this.request("AddCdnDomain", req, resp, cb);
    }

    /**
     * DescribeIpVisit 用于查询 5 分钟活跃用户数，及日活跃用户数明细

+ 5 分钟活跃用户数：根据日志中客户端 IP，5 分钟粒度去重统计
+ 日活跃用户数：根据日志中客户端 IP，按天粒度去重统计
     * @param {DescribeIpVisitRequest} req
     * @param {function(string, DescribeIpVisitResponse):void} cb
     * @public
     */
    DescribeIpVisit(req, cb) {
        let resp = new DescribeIpVisitResponse();
        this.request("DescribeIpVisit", req, resp, cb);
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
     * @param {DescribeCdnDataRequest} req
     * @param {function(string, DescribeCdnDataResponse):void} cb
     * @public
     */
    DescribeCdnData(req, cb) {
        let resp = new DescribeCdnDataResponse();
        this.request("DescribeCdnData", req, resp, cb);
    }

    /**
     * DisableCaches 用于禁用 CDN 上指定 URL 的访问，禁用完成后，中国境内访问会直接返回 403。（接口尚在内测中，暂未全量开放使用）
     * @param {DisableCachesRequest} req
     * @param {function(string, DisableCachesResponse):void} cb
     * @public
     */
    DisableCaches(req, cb) {
        let resp = new DisableCachesResponse();
        this.request("DisableCaches", req, resp, cb);
    }

    /**
     * DescribeDomains 用于查询内容分发网络加速域名（含境内、境外）基本配置信息，包括项目ID、服务状态，业务类型、创建时间、更新时间等信息。
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        let resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }

    /**
     * 生成一条子域名解析，提示客户添加到域名解析上，用于泛域名及域名取回校验归属权
     * @param {CreateVerifyRecordRequest} req
     * @param {function(string, CreateVerifyRecordResponse):void} cb
     * @public
     */
    CreateVerifyRecord(req, cb) {
        let resp = new CreateVerifyRecordResponse();
        this.request("CreateVerifyRecord", req, resp, cb);
    }

    /**
     * GetDisableRecords 用于查询资源禁用历史，及 URL 当前状态。（接口尚在内测中，暂未全量开放使用）
     * @param {GetDisableRecordsRequest} req
     * @param {function(string, GetDisableRecordsResponse):void} cb
     * @public
     */
    GetDisableRecords(req, cb) {
        let resp = new GetDisableRecordsResponse();
        this.request("GetDisableRecords", req, resp, cb);
    }

    /**
     * ManageClsTopicDomains 用于管理某日志主题下绑定的域名列表。
     * @param {ManageClsTopicDomainsRequest} req
     * @param {function(string, ManageClsTopicDomainsResponse):void} cb
     * @public
     */
    ManageClsTopicDomains(req, cb) {
        let resp = new ManageClsTopicDomainsResponse();
        this.request("ManageClsTopicDomains", req, resp, cb);
    }

    /**
     * CreateDiagnoseUrl 用于添加域名诊断任务URL
     * @param {CreateDiagnoseUrlRequest} req
     * @param {function(string, CreateDiagnoseUrlResponse):void} cb
     * @public
     */
    CreateDiagnoseUrl(req, cb) {
        let resp = new CreateDiagnoseUrlResponse();
        this.request("CreateDiagnoseUrl", req, resp, cb);
    }

    /**
     * StartCdnDomain 用于启用已停用域名的加速服务
     * @param {StartCdnDomainRequest} req
     * @param {function(string, StartCdnDomainResponse):void} cb
     * @public
     */
    StartCdnDomain(req, cb) {
        let resp = new StartCdnDomainResponse();
        this.request("StartCdnDomain", req, resp, cb);
    }

    /**
     * 拷贝参考域名的配置至新域名。暂不支持自有证书以及定制化配置
     * @param {DuplicateDomainConfigRequest} req
     * @param {function(string, DuplicateDomainConfigResponse):void} cb
     * @public
     */
    DuplicateDomainConfig(req, cb) {
        let resp = new DuplicateDomainConfigResponse();
        this.request("DuplicateDomainConfig", req, resp, cb);
    }

    /**
     * StopScdnDomain 用于关闭域名的安全防护配置
     * @param {StopScdnDomainRequest} req
     * @param {function(string, StopScdnDomainResponse):void} cb
     * @public
     */
    StopScdnDomain(req, cb) {
        let resp = new StopScdnDomainResponse();
        this.request("StopScdnDomain", req, resp, cb);
    }

    /**
     * DescribeCertDomains 用于校验SSL证书并提取证书中包含的域名。
     * @param {DescribeCertDomainsRequest} req
     * @param {function(string, DescribeCertDomainsResponse):void} cb
     * @public
     */
    DescribeCertDomains(req, cb) {
        let resp = new DescribeCertDomainsResponse();
        this.request("DescribeCertDomains", req, resp, cb);
    }

    /**
     * ListDiagnoseReport 用于获取用户诊断URL访问后各个子任务的简要详情。
     * @param {ListDiagnoseReportRequest} req
     * @param {function(string, ListDiagnoseReportResponse):void} cb
     * @public
     */
    ListDiagnoseReport(req, cb) {
        let resp = new ListDiagnoseReportResponse();
        this.request("ListDiagnoseReport", req, resp, cb);
    }

    /**
     * DescribePurgeQuota 用于查询账户刷新配额和每日可用量。
     * @param {DescribePurgeQuotaRequest} req
     * @param {function(string, DescribePurgeQuotaResponse):void} cb
     * @public
     */
    DescribePurgeQuota(req, cb) {
        let resp = new DescribePurgeQuotaResponse();
        this.request("DescribePurgeQuota", req, resp, cb);
    }

    /**
     * UpdateScdnDomain 用于修改 SCDN 加速域名安全相关配置
     * @param {UpdateScdnDomainRequest} req
     * @param {function(string, UpdateScdnDomainResponse):void} cb
     * @public
     */
    UpdateScdnDomain(req, cb) {
        let resp = new UpdateScdnDomainResponse();
        this.request("UpdateScdnDomain", req, resp, cb);
    }

    /**
     * ListScdnLogTasks 用于查询SCDN日志下载任务列表,以及展示下载任务基本信息
     * @param {ListScdnLogTasksRequest} req
     * @param {function(string, ListScdnLogTasksResponse):void} cb
     * @public
     */
    ListScdnLogTasks(req, cb) {
        let resp = new ListScdnLogTasksResponse();
        this.request("ListScdnLogTasks", req, resp, cb);
    }

    /**
     * CreateScdnLogTask 用于创建事件日志任务
     * @param {CreateScdnLogTaskRequest} req
     * @param {function(string, CreateScdnLogTaskResponse):void} cb
     * @public
     */
    CreateScdnLogTask(req, cb) {
        let resp = new CreateScdnLogTaskResponse();
        this.request("CreateScdnLogTask", req, resp, cb);
    }

    /**
     * DescribeImageConfig 用于获取域名图片优化的当前配置，支持Webp、TPG 和 Guetzli。 
     * @param {DescribeImageConfigRequest} req
     * @param {function(string, DescribeImageConfigResponse):void} cb
     * @public
     */
    DescribeImageConfig(req, cb) {
        let resp = new DescribeImageConfigResponse();
        this.request("DescribeImageConfig", req, resp, cb);
    }

    /**
     * 获取SCDN的Top数据
     * @param {DescribeScdnTopDataRequest} req
     * @param {function(string, DescribeScdnTopDataResponse):void} cb
     * @public
     */
    DescribeScdnTopData(req, cb) {
        let resp = new DescribeScdnTopDataResponse();
        this.request("DescribeScdnTopData", req, resp, cb);
    }

    /**
     * SearchClsLog 用于 CLS 日志检索。支持检索今天，24小时（可选近7中的某一天），近7天的日志数据。
     * @param {SearchClsLogRequest} req
     * @param {function(string, SearchClsLogResponse):void} cb
     * @public
     */
    SearchClsLog(req, cb) {
        let resp = new SearchClsLogResponse();
        this.request("SearchClsLog", req, resp, cb);
    }

    /**
     * StopCdnDomain 用于停止域名的加速服务。
注意：停止加速服务后，访问至加速节点的请求将会直接返回 404。为避免对您的业务造成影响，请在停止加速服务前将解析切走。
     * @param {StopCdnDomainRequest} req
     * @param {function(string, StopCdnDomainResponse):void} cb
     * @public
     */
    StopCdnDomain(req, cb) {
        let resp = new StopCdnDomainResponse();
        this.request("StopCdnDomain", req, resp, cb);
    }

    /**
     * ListTopData 通过入参 Metric 和 Filter 组合不同，可以查询以下排序数据：

+ 依据总流量、总请求数对访问 URL 排序，从大至小返回 TOP 1000 URL
+ 依据总流量、总请求数对客户端省份排序，从大至小返回省份列表
+ 依据总流量、总请求数对客户端运营商排序，从大至小返回运营商列表
+ 依据总流量、峰值带宽、总请求数、平均命中率、2XX/3XX/4XX/5XX 状态码对域名排序，从大至小返回域名列表
+ 依据总回源流量、回源峰值带宽、总回源请求数、平均回源失败率、2XX/3XX/4XX/5XX 回源状态码对域名排序，从大至小返回域名列表

注意：仅支持 90 天内数据查询
     * @param {ListTopDataRequest} req
     * @param {function(string, ListTopDataResponse):void} cb
     * @public
     */
    ListTopData(req, cb) {
        let resp = new ListTopDataResponse();
        this.request("ListTopData", req, resp, cb);
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
     * @param {DescribeOriginDataRequest} req
     * @param {function(string, DescribeOriginDataResponse):void} cb
     * @public
     */
    DescribeOriginData(req, cb) {
        let resp = new DescribeOriginDataResponse();
        this.request("DescribeOriginData", req, resp, cb);
    }

    /**
     * DescribeCdnIp 用于查询 CDN IP 归属。
（注意：此接口请求频率限制以 CDN 侧限制为准：200次/10分钟）  
     * @param {DescribeCdnIpRequest} req
     * @param {function(string, DescribeCdnIpResponse):void} cb
     * @public
     */
    DescribeCdnIp(req, cb) {
        let resp = new DescribeCdnIpResponse();
        this.request("DescribeCdnIp", req, resp, cb);
    }

    /**
     * StartScdnDomain 用于开启域名的安全防护配置
     * @param {StartScdnDomainRequest} req
     * @param {function(string, StartScdnDomainResponse):void} cb
     * @public
     */
    StartScdnDomain(req, cb) {
        let resp = new StartScdnDomainResponse();
        this.request("StartScdnDomain", req, resp, cb);
    }

    /**
     * PurgePathCache 用于批量提交目录刷新，根据域名的加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日目录刷新额度为各 100 条，每次最多可提交 20 条。
     * @param {PurgePathCacheRequest} req
     * @param {function(string, PurgePathCacheResponse):void} cb
     * @public
     */
    PurgePathCache(req, cb) {
        let resp = new PurgePathCacheResponse();
        this.request("PurgePathCache", req, resp, cb);
    }

    /**
     * DescribeUrlViolations 用于查询被 CDN 系统扫描到的域名违规 URL 列表及当前状态。
对应内容分发网络控制台【图片鉴黄】页面。
     * @param {DescribeUrlViolationsRequest} req
     * @param {function(string, DescribeUrlViolationsResponse):void} cb
     * @public
     */
    DescribeUrlViolations(req, cb) {
        let resp = new DescribeUrlViolationsResponse();
        this.request("DescribeUrlViolations", req, resp, cb);
    }

    /**
     * PurgeUrlsCache 用于批量提交 URL 进行刷新，根据 URL 中域名的当前加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日 URL 刷新额度各为 10000 条，每次最多可提交 1000 条。
     * @param {PurgeUrlsCacheRequest} req
     * @param {function(string, PurgeUrlsCacheResponse):void} cb
     * @public
     */
    PurgeUrlsCache(req, cb) {
        let resp = new PurgeUrlsCacheResponse();
        this.request("PurgeUrlsCache", req, resp, cb);
    }

    /**
     * DescribeTrafficPackages 用于查询中国境内 CDN 流量包详情。
     * @param {DescribeTrafficPackagesRequest} req
     * @param {function(string, DescribeTrafficPackagesResponse):void} cb
     * @public
     */
    DescribeTrafficPackages(req, cb) {
        let resp = new DescribeTrafficPackagesResponse();
        this.request("DescribeTrafficPackages", req, resp, cb);
    }

    /**
     * UpdateDomainConfig 用于修改内容分发网络加速域名配置信息
注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值，建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
     * @param {UpdateDomainConfigRequest} req
     * @param {function(string, UpdateDomainConfigResponse):void} cb
     * @public
     */
    UpdateDomainConfig(req, cb) {
        let resp = new UpdateDomainConfigResponse();
        this.request("UpdateDomainConfig", req, resp, cb);
    }

    /**
     * DescribeCdnDomainLogs 用于查询访问日志下载地址，仅支持 30 天以内的境内、境外访问日志下载链接查询。
     * @param {DescribeCdnDomainLogsRequest} req
     * @param {function(string, DescribeCdnDomainLogsResponse):void} cb
     * @public
     */
    DescribeCdnDomainLogs(req, cb) {
        let resp = new DescribeCdnDomainLogsResponse();
        this.request("DescribeCdnDomainLogs", req, resp, cb);
    }

    /**
     * DescribePushTasks  用于查询预热任务提交历史记录及执行进度。
接口灰度中，暂未全量开放，敬请期待。
     * @param {DescribePushTasksRequest} req
     * @param {function(string, DescribePushTasksResponse):void} cb
     * @public
     */
    DescribePushTasks(req, cb) {
        let resp = new DescribePushTasksResponse();
        this.request("DescribePushTasks", req, resp, cb);
    }

    /**
     * DescribeDiagnoseReport 用于获取指定报告id的内容
     * @param {DescribeDiagnoseReportRequest} req
     * @param {function(string, DescribeDiagnoseReportResponse):void} cb
     * @public
     */
    DescribeDiagnoseReport(req, cb) {
        let resp = new DescribeDiagnoseReportResponse();
        this.request("DescribeDiagnoseReport", req, resp, cb);
    }

    /**
     * CreateClsLogTopic 用于创建日志主题。注意：一个日志集下至多可创建10个日志主题。
     * @param {CreateClsLogTopicRequest} req
     * @param {function(string, CreateClsLogTopicResponse):void} cb
     * @public
     */
    CreateClsLogTopic(req, cb) {
        let resp = new CreateClsLogTopicResponse();
        this.request("CreateClsLogTopic", req, resp, cb);
    }

    /**
     * PushUrlsCache 用于将指定 URL 资源列表加载至 CDN 节点，支持指定加速区域预热。
默认情况下境内、境外每日预热 URL 限额为各 1000 条，每次最多可提交 20 条。
     * @param {PushUrlsCacheRequest} req
     * @param {function(string, PushUrlsCacheResponse):void} cb
     * @public
     */
    PushUrlsCache(req, cb) {
        let resp = new PushUrlsCacheResponse();
        this.request("PushUrlsCache", req, resp, cb);
    }

    /**
     * UpdateImageConfig 用于更新控制台图片优化的相关配置，支持Webp、TPG 和 Guetzli。 
     * @param {UpdateImageConfigRequest} req
     * @param {function(string, UpdateImageConfigResponse):void} cb
     * @public
     */
    UpdateImageConfig(req, cb) {
        let resp = new UpdateImageConfigResponse();
        this.request("UpdateImageConfig", req, resp, cb);
    }

    /**
     * CreateScdnFailedLogTask 用于重试创建失败的事件日志任务
     * @param {CreateScdnFailedLogTaskRequest} req
     * @param {function(string, CreateScdnFailedLogTaskResponse):void} cb
     * @public
     */
    CreateScdnFailedLogTask(req, cb) {
        let resp = new CreateScdnFailedLogTaskResponse();
        this.request("CreateScdnFailedLogTask", req, resp, cb);
    }

    /**
     * DisableClsLogTopic 用于停止日志主题投递。注意：停止后，所有绑定该日志主题域名的日志将不再继续投递至该主题，已经投递的日志将会继续保留。生效时间约为 5~15 分钟。

     * @param {DisableClsLogTopicRequest} req
     * @param {function(string, DisableClsLogTopicResponse):void} cb
     * @public
     */
    DisableClsLogTopic(req, cb) {
        let resp = new DisableClsLogTopicResponse();
        this.request("DisableClsLogTopic", req, resp, cb);
    }

    /**
     * ListClsTopicDomains 用于获取某日志主题下绑定的域名列表。
     * @param {ListClsTopicDomainsRequest} req
     * @param {function(string, ListClsTopicDomainsResponse):void} cb
     * @public
     */
    ListClsTopicDomains(req, cb) {
        let resp = new ListClsTopicDomainsResponse();
        this.request("ListClsTopicDomains", req, resp, cb);
    }

    /**
     * ListClsLogTopics 用于显示日志主题列表。注意：一个日志集下至多含10个日志主题。
     * @param {ListClsLogTopicsRequest} req
     * @param {function(string, ListClsLogTopicsResponse):void} cb
     * @public
     */
    ListClsLogTopics(req, cb) {
        let resp = new ListClsLogTopicsResponse();
        this.request("ListClsLogTopics", req, resp, cb);
    }

    /**
     * DescribeScdnConfig 用于查询指定 SCDN 加速域名的安全相关配置
     * @param {DescribeScdnConfigRequest} req
     * @param {function(string, DescribeScdnConfigResponse):void} cb
     * @public
     */
    DescribeScdnConfig(req, cb) {
        let resp = new DescribeScdnConfigResponse();
        this.request("DescribeScdnConfig", req, resp, cb);
    }

    /**
     * DeleteClsLogTopic 用于删除日志主题。注意：删除后，所有该日志主题下绑定域名的日志将不再继续投递至该主题，已经投递的日志将会被全部清空。生效时间约为 5~15 分钟。
     * @param {DeleteClsLogTopicRequest} req
     * @param {function(string, DeleteClsLogTopicResponse):void} cb
     * @public
     */
    DeleteClsLogTopic(req, cb) {
        let resp = new DeleteClsLogTopicResponse();
        this.request("DeleteClsLogTopic", req, resp, cb);
    }

    /**
     * 本接口（DescribeCdnOriginIp）用于查询 CDN 回源节点的IP信息。（注：此接口即将下线，不再进行维护，请通过DescribeIpStatus 接口进行查询）
     * @param {DescribeCdnOriginIpRequest} req
     * @param {function(string, DescribeCdnOriginIpResponse):void} cb
     * @public
     */
    DescribeCdnOriginIp(req, cb) {
        let resp = new DescribeCdnOriginIpResponse();
        this.request("DescribeCdnOriginIp", req, resp, cb);
    }

    /**
     * DescribeBillingData 用于查询实际计费数据明细。
     * @param {DescribeBillingDataRequest} req
     * @param {function(string, DescribeBillingDataResponse):void} cb
     * @public
     */
    DescribeBillingData(req, cb) {
        let resp = new DescribeBillingDataResponse();
        this.request("DescribeBillingData", req, resp, cb);
    }

    /**
     * DescribePushQuota  用于查询预热配额和每日可用量。
     * @param {DescribePushQuotaRequest} req
     * @param {function(string, DescribePushQuotaResponse):void} cb
     * @public
     */
    DescribePushQuota(req, cb) {
        let resp = new DescribePushQuotaResponse();
        this.request("DescribePushQuota", req, resp, cb);
    }

    /**
     * EnableClsLogTopic 用于启动日志主题投递。注意：启动后，所有绑定该日志主题域名的日志将继续投递至该主题。生效时间约为 5~15 分钟。
     * @param {EnableClsLogTopicRequest} req
     * @param {function(string, EnableClsLogTopicResponse):void} cb
     * @public
     */
    EnableClsLogTopic(req, cb) {
        let resp = new EnableClsLogTopicResponse();
        this.request("EnableClsLogTopic", req, resp, cb);
    }

    /**
     * ListScdnDomains 用于查询 SCDN 安全加速域名列表，及域名基本配置信息
     * @param {ListScdnDomainsRequest} req
     * @param {function(string, ListScdnDomainsResponse):void} cb
     * @public
     */
    ListScdnDomains(req, cb) {
        let resp = new ListScdnDomainsResponse();
        this.request("ListScdnDomains", req, resp, cb);
    }

    /**
     * DescribeReportData 用于查询域名/项目维度的日/周/月报表数据。
     * @param {DescribeReportDataRequest} req
     * @param {function(string, DescribeReportDataResponse):void} cb
     * @public
     */
    DescribeReportData(req, cb) {
        let resp = new DescribeReportDataResponse();
        this.request("DescribeReportData", req, resp, cb);
    }

    /**
     * 查询指定域名的区域、运营商明细数据
注意事项：接口尚未全量开放，未在内测名单中的账号不支持调用
     * @param {DescribeDistrictIspDataRequest} req
     * @param {function(string, DescribeDistrictIspDataResponse):void} cb
     * @public
     */
    DescribeDistrictIspData(req, cb) {
        let resp = new DescribeDistrictIspDataResponse();
        this.request("DescribeDistrictIspData", req, resp, cb);
    }

    /**
     * 本接口(UpdatePayType)用于修改账号计费类型，暂不支持月结用户或子账号修改。
     * @param {UpdatePayTypeRequest} req
     * @param {function(string, UpdatePayTypeResponse):void} cb
     * @public
     */
    UpdatePayType(req, cb) {
        let resp = new UpdatePayTypeResponse();
        this.request("UpdatePayType", req, resp, cb);
    }

    /**
     * EnableCaches 用于解禁手工封禁的 URL，解禁成功后，全网生效时间约 5~10 分钟。（接口尚在内测中，暂未全量开放使用）
     * @param {EnableCachesRequest} req
     * @param {function(string, EnableCachesResponse):void} cb
     * @public
     */
    EnableCaches(req, cb) {
        let resp = new EnableCachesResponse();
        this.request("EnableCaches", req, resp, cb);
    }


}
module.exports = CdnClient;

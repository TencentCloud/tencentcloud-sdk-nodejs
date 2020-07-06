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
const DescribeCdnDomainLogsRequest = models.DescribeCdnDomainLogsRequest;
const Compression = models.Compression;
const Revalidate = models.Revalidate;
const ResourceData = models.ResourceData;
const UrlRecord = models.UrlRecord;
const DescribePushQuotaResponse = models.DescribePushQuotaResponse;
const DescribePurgeQuotaResponse = models.DescribePurgeQuotaResponse;
const Authentication = models.Authentication;
const ImageOptimization = models.ImageOptimization;
const Https = models.Https;
const ReportData = models.ReportData;
const DescribeTrafficPackagesRequest = models.DescribeTrafficPackagesRequest;
const CreateClsLogTopicResponse = models.CreateClsLogTopicResponse;
const PurgePathCacheResponse = models.PurgePathCacheResponse;
const DomainFilter = models.DomainFilter;
const SpecificConfig = models.SpecificConfig;
const FollowRedirect = models.FollowRedirect;
const RequestHeader = models.RequestHeader;
const DescribePurgeQuotaRequest = models.DescribePurgeQuotaRequest;
const Referer = models.Referer;
const UserAgentFilter = models.UserAgentFilter;
const AdvanceCacheRule = models.AdvanceCacheRule;
const EnableClsLogTopicRequest = models.EnableClsLogTopicRequest;
const UpdateImageConfigResponse = models.UpdateImageConfigResponse;
const DeleteCdnDomainRequest = models.DeleteCdnDomainRequest;
const DescribePayTypeResponse = models.DescribePayTypeResponse;
const ListTopDataRequest = models.ListTopDataRequest;
const ListClsTopicDomainsRequest = models.ListClsTopicDomainsRequest;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const UpdateImageConfigRequest = models.UpdateImageConfigRequest;
const CreateClsLogTopicRequest = models.CreateClsLogTopicRequest;
const CompressionRule = models.CompressionRule;
const GuetzliAdapter = models.GuetzliAdapter;
const Origin = models.Origin;
const TopData = models.TopData;
const EnableCachesRequest = models.EnableCachesRequest;
const Quota = models.Quota;
const HeaderKey = models.HeaderKey;
const DescribeBillingDataRequest = models.DescribeBillingDataRequest;
const SimpleCache = models.SimpleCache;
const DeleteClsLogTopicRequest = models.DeleteClsLogTopicRequest;
const UpdatePayTypeResponse = models.UpdatePayTypeResponse;
const TopicInfo = models.TopicInfo;
const DescribeDomainsConfigResponse = models.DescribeDomainsConfigResponse;
const BriefDomain = models.BriefDomain;
const UpdatePayTypeRequest = models.UpdatePayTypeRequest;
const TpgAdapter = models.TpgAdapter;
const DescribeReportDataResponse = models.DescribeReportDataResponse;
const DisableClsLogTopicRequest = models.DisableClsLogTopicRequest;
const ListClsTopicDomainsResponse = models.ListClsTopicDomainsResponse;
const TrafficPackage = models.TrafficPackage;
const DescribeCdnIpRequest = models.DescribeCdnIpRequest;
const Ipv6 = models.Ipv6;
const StatusCodeCache = models.StatusCodeCache;
const DescribeIpVisitResponse = models.DescribeIpVisitResponse;
const EnableClsLogTopicResponse = models.EnableClsLogTopicResponse;
const ListClsLogTopicsResponse = models.ListClsLogTopicsResponse;
const OverseaConfig = models.OverseaConfig;
const AddCdnDomainRequest = models.AddCdnDomainRequest;
const UserAgentFilterRule = models.UserAgentFilterRule;
const TopDetailData = models.TopDetailData;
const ErrorPage = models.ErrorPage;
const MaxAgeRule = models.MaxAgeRule;
const DescribePayTypeRequest = models.DescribePayTypeRequest;
const DescribeCertDomainsRequest = models.DescribeCertDomainsRequest;
const DescribeDomainsConfigRequest = models.DescribeDomainsConfigRequest;
const AdvancedCache = models.AdvancedCache;
const WebpAdapter = models.WebpAdapter;
const StartCdnDomainRequest = models.StartCdnDomainRequest;
const MapInfo = models.MapInfo;
const DescribeCertDomainsResponse = models.DescribeCertDomainsResponse;
const AuthenticationTypeD = models.AuthenticationTypeD;
const AuthenticationTypeC = models.AuthenticationTypeC;
const AuthenticationTypeB = models.AuthenticationTypeB;
const AuthenticationTypeA = models.AuthenticationTypeA;
const DescribePushTasksResponse = models.DescribePushTasksResponse;
const ResourceOriginData = models.ResourceOriginData;
const IpStatus = models.IpStatus;
const AddCdnDomainResponse = models.AddCdnDomainResponse;
const DownstreamCapping = models.DownstreamCapping;
const ServerCert = models.ServerCert;
const AccessControlRule = models.AccessControlRule;
const HttpHeaderPathRule = models.HttpHeaderPathRule;
const DisableCachesRequest = models.DisableCachesRequest;
const SimpleCacheRule = models.SimpleCacheRule;
const DisableClsLogTopicResponse = models.DisableClsLogTopicResponse;
const Hsts = models.Hsts;
const DescribeIpStatusRequest = models.DescribeIpStatusRequest;
const DetailDomain = models.DetailDomain;
const GetDisableRecordsResponse = models.GetDisableRecordsResponse;
const ResponseHeader = models.ResponseHeader;
const CdnIpHistory = models.CdnIpHistory;
const SummarizedData = models.SummarizedData;
const ManageClsTopicDomainsRequest = models.ManageClsTopicDomainsRequest;
const Cache = models.Cache;
const ForceRedirect = models.ForceRedirect;
const DescribeOriginDataRequest = models.DescribeOriginDataRequest;
const RangeOriginPull = models.RangeOriginPull;
const ViolationUrl = models.ViolationUrl;
const SearchClsLogResponse = models.SearchClsLogResponse;
const PushUrlsCacheRequest = models.PushUrlsCacheRequest;
const MainlandConfig = models.MainlandConfig;
const DescribeReportDataRequest = models.DescribeReportDataRequest;
const DescribePushTasksRequest = models.DescribePushTasksRequest;
const DescribeUrlViolationsRequest = models.DescribeUrlViolationsRequest;
const RefererRule = models.RefererRule;
const IpFreqLimit = models.IpFreqLimit;
const DomainAreaConfig = models.DomainAreaConfig;
const CacheOptResult = models.CacheOptResult;
const StopCdnDomainRequest = models.StopCdnDomainRequest;
const DescribeMapInfoResponse = models.DescribeMapInfoResponse;
const DescribeTrafficPackagesResponse = models.DescribeTrafficPackagesResponse;
const DescribeMapInfoRequest = models.DescribeMapInfoRequest;
const EnableCachesResponse = models.EnableCachesResponse;
const DescribeIpVisitRequest = models.DescribeIpVisitRequest;
const StatusCodeCacheRule = models.StatusCodeCacheRule;
const ClientCert = models.ClientCert;
const DomainLog = models.DomainLog;
const GetDisableRecordsRequest = models.GetDisableRecordsRequest;
const PurgeUrlsCacheResponse = models.PurgeUrlsCacheResponse;
const DeleteClsLogTopicResponse = models.DeleteClsLogTopicResponse;
const DescribeBillingDataResponse = models.DescribeBillingDataResponse;
const DisableCachesResponse = models.DisableCachesResponse;
const SchemeKey = models.SchemeKey;
const DescribeImageConfigRequest = models.DescribeImageConfigRequest;
const DescribeCdnIpResponse = models.DescribeCdnIpResponse;
const DescribeCdnDataResponse = models.DescribeCdnDataResponse;
const DescribeIpStatusResponse = models.DescribeIpStatusResponse;
const AccessControl = models.AccessControl;
const CacheKey = models.CacheKey;
const CookieKey = models.CookieKey;
const CappingRule = models.CappingRule;
const ListClsLogTopicsRequest = models.ListClsLogTopicsRequest;
const Seo = models.Seo;
const BandwidthAlert = models.BandwidthAlert;
const ClsLogObject = models.ClsLogObject;
const RegionMapRelation = models.RegionMapRelation;
const PurgePathCacheRequest = models.PurgePathCacheRequest;
const CdnData = models.CdnData;
const PurgeUrlsCacheRequest = models.PurgeUrlsCacheRequest;
const OriginPullOptimization = models.OriginPullOptimization;
const PushTask = models.PushTask;
const TimestampData = models.TimestampData;
const StartCdnDomainResponse = models.StartCdnDomainResponse;
const DescribePushQuotaRequest = models.DescribePushQuotaRequest;
const ResponseHeaderCache = models.ResponseHeaderCache;
const ResourceBillingData = models.ResourceBillingData;
const Sort = models.Sort;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const PushUrlsCacheResponse = models.PushUrlsCacheResponse;
const StopCdnDomainResponse = models.StopCdnDomainResponse;
const QueryStringKey = models.QueryStringKey;
const ListTopDataResponse = models.ListTopDataResponse;
const MaxAge = models.MaxAge;
const UpdateDomainConfigResponse = models.UpdateDomainConfigResponse;
const LogSetInfo = models.LogSetInfo;
const SecurityConfig = models.SecurityConfig;
const SearchClsLogRequest = models.SearchClsLogRequest;
const UpdateDomainConfigRequest = models.UpdateDomainConfigRequest;
const AwsPrivateAccess = models.AwsPrivateAccess;
const ManageClsTopicDomainsResponse = models.ManageClsTopicDomainsResponse;
const VideoSeek = models.VideoSeek;
const Compatibility = models.Compatibility;
const ClsSearchLogs = models.ClsSearchLogs;
const DescribeUrlViolationsResponse = models.DescribeUrlViolationsResponse;
const IpFilter = models.IpFilter;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const ErrorPageRule = models.ErrorPageRule;
const DescribeOriginDataResponse = models.DescribeOriginDataResponse;
const PurgeTask = models.PurgeTask;
const OriginPullTimeout = models.OriginPullTimeout;
const DeleteCdnDomainResponse = models.DeleteCdnDomainResponse;
const CdnIp = models.CdnIp;
const DescribeCdnDataRequest = models.DescribeCdnDataRequest;
const DescribeImageConfigResponse = models.DescribeImageConfigResponse;
const CacheTagKey = models.CacheTagKey;
const DescribeDomainsRequest = models.DescribeDomainsRequest;


/**
 * cdn client
 * @class
 */
class CdnClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdn.tencentcloudapi.com", "2018-06-06", credential, region, profile);
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
+ 流量命中率（单位为 %，小数点后保留两位）
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
     * DisableCaches 用于禁用 CDN 上指定 URL 的访问，禁用完成后，全网访问会直接返回 403。（接口尚在内测中，暂未全量开放使用）
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
     * @param {DescribeCdnIpRequest} req
     * @param {function(string, DescribeCdnIpResponse):void} cb
     * @public
     */
    DescribeCdnIp(req, cb) {
        let resp = new DescribeCdnIpResponse();
        this.request("DescribeCdnIp", req, resp, cb);
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
     * CreatClsLogTopic 用于创建日志主题。注意：一个日志集下至多可创建10个日志主题。
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
接口灰度中，暂未全量开放，敬请期待。
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

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
const PurgePathCacheRequest = models.PurgePathCacheRequest;
const DescribeCdnDomainLogsResponse = models.DescribeCdnDomainLogsResponse;
const DescribeCdnDomainLogsRequest = models.DescribeCdnDomainLogsRequest;
const CdnData = models.CdnData;
const PurgeUrlsCacheRequest = models.PurgeUrlsCacheRequest;
const ResourceData = models.ResourceData;
const UrlRecord = models.UrlRecord;
const DescribeOriginDataRequest = models.DescribeOriginDataRequest;
const PushTask = models.PushTask;
const TimestampData = models.TimestampData;
const DescribeCdnIpRequest = models.DescribeCdnIpRequest;
const PushUrlsCacheRequest = models.PushUrlsCacheRequest;
const DescribePushTasksRequest = models.DescribePushTasksRequest;
const DescribeTrafficPackagesRequest = models.DescribeTrafficPackagesRequest;
const DescribeIpVisitResponse = models.DescribeIpVisitResponse;
const PurgePathCacheResponse = models.PurgePathCacheResponse;
const PurgeTask = models.PurgeTask;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const CacheOptResult = models.CacheOptResult;
const ListTopDataResponse = models.ListTopDataResponse;
const DescribeMapInfoResponse = models.DescribeMapInfoResponse;
const DescribeTrafficPackagesResponse = models.DescribeTrafficPackagesResponse;
const DescribeMapInfoRequest = models.DescribeMapInfoRequest;
const EnableCachesResponse = models.EnableCachesResponse;
const DescribePayTypeRequest = models.DescribePayTypeRequest;
const DescribeIpVisitRequest = models.DescribeIpVisitRequest;
const DomainLog = models.DomainLog;
const DescribePayTypeResponse = models.DescribePayTypeResponse;
const GetDisableRecordsRequest = models.GetDisableRecordsRequest;
const PurgeUrlsCacheResponse = models.PurgeUrlsCacheResponse;
const ListTopDataRequest = models.ListTopDataRequest;
const DisableCachesResponse = models.DisableCachesResponse;
const TrafficPackage = models.TrafficPackage;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DescribePushTasksResponse = models.DescribePushTasksResponse;
const ResourceOriginData = models.ResourceOriginData;
const DescribeOriginDataResponse = models.DescribeOriginDataResponse;
const DescribeCdnIpResponse = models.DescribeCdnIpResponse;
const DescribeCdnDataResponse = models.DescribeCdnDataResponse;
const CdnIp = models.CdnIp;
const DisableCachesRequest = models.DisableCachesRequest;
const DescribeCdnDataRequest = models.DescribeCdnDataRequest;
const TopData = models.TopData;
const EnableCachesRequest = models.EnableCachesRequest;
const PushUrlsCacheResponse = models.PushUrlsCacheResponse;
const MapInfo = models.MapInfo;
const TopDetailData = models.TopDetailData;
const GetDisableRecordsResponse = models.GetDisableRecordsResponse;
const CdnIpHistory = models.CdnIpHistory;
const SummarizedData = models.SummarizedData;
const RegionMapRelation = models.RegionMapRelation;


/**
 * cdn client
 * @class
 */
class CdnClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdn.tencentcloudapi.com", "2018-06-06", credential, region, profile);
    }
    
    /**
     * ListTopData 通过入参 Metric 和 Filter 组合不同，可以查询以下排序数据：

+ 依据总流量、总请求数对访问 URL 排序，从大至小返回 TOP 1000 URL
+ 依据总流量、总请求数对客户端省份排序，从大至小返回省份列表
+ 依据总流量、总请求数对客户端运营商排序，从大至小返回运营商列表
+ 依据总流量、峰值带宽、总请求数、平均命中率、2XX/3XX/4XX/5XX 状态码对域名排序，从大至小返回域名列表
+ 依据总回源流量、回源峰值带宽、总回源请求数、平均回源失败率、2XX/3XX/4XX/5XX 回源状态码对域名排序，从大至小返回域名列表
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
     * DescribeTrafficPackages 用于查询境内 CDN 流量包详情。
     * @param {DescribeTrafficPackagesRequest} req
     * @param {function(string, DescribeTrafficPackagesResponse):void} cb
     * @public
     */
    DescribeTrafficPackages(req, cb) {
        let resp = new DescribeTrafficPackagesResponse();
        this.request("DescribeTrafficPackages", req, resp, cb);
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
     * GetDisableRecords 用户查询资源禁用历史，及 URL 当前状态。（接口尚在内测中，暂未全量开放使用）
     * @param {GetDisableRecordsRequest} req
     * @param {function(string, GetDisableRecordsResponse):void} cb
     * @public
     */
    GetDisableRecords(req, cb) {
        let resp = new GetDisableRecordsResponse();
        this.request("GetDisableRecords", req, resp, cb);
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
     * EnableCaches 用于解禁手工封禁的 URL，解禁成功后，全网生效时间约 5~10 分钟。（接口尚在内测中，暂未全量开放使用）
     * @param {EnableCachesRequest} req
     * @param {function(string, EnableCachesResponse):void} cb
     * @public
     */
    EnableCaches(req, cb) {
        let resp = new EnableCachesResponse();
        this.request("EnableCaches", req, resp, cb);
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


}
module.exports = CdnClient;

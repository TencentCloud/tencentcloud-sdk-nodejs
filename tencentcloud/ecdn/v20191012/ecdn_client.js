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
const DescribeEcdnStatisticsRequest = models.DescribeEcdnStatisticsRequest;
const StartEcdnDomainRequest = models.StartEcdnDomainRequest;
const DescribeDomainsConfigResponse = models.DescribeDomainsConfigResponse;
const Https = models.Https;
const PurgeUrlsCacheRequest = models.PurgeUrlsCacheRequest;
const ResourceData = models.ResourceData;
const Cache = models.Cache;
const ForceRedirect = models.ForceRedirect;
const DescribePurgeQuotaResponse = models.DescribePurgeQuotaResponse;
const DescribeEcdnDomainStatisticsResponse = models.DescribeEcdnDomainStatisticsResponse;
const TimestampData = models.TimestampData;
const DomainData = models.DomainData;
const StopEcdnDomainRequest = models.StopEcdnDomainRequest;
const Sort = models.Sort;
const IpFreqLimit = models.IpFreqLimit;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const DomainFilter = models.DomainFilter;
const DomainLogs = models.DomainLogs;
const Hsts = models.Hsts;
const HttpHeaderPathRule = models.HttpHeaderPathRule;
const UpdateDomainConfigResponse = models.UpdateDomainConfigResponse;
const DetailData = models.DetailData;
const DescribePurgeQuotaRequest = models.DescribePurgeQuotaRequest;
const DescribeEcdnDomainLogsResponse = models.DescribeEcdnDomainLogsResponse;
const EcdnData = models.EcdnData;
const UpdateDomainConfigRequest = models.UpdateDomainConfigRequest;
const DescribeDomainsConfigRequest = models.DescribeDomainsConfigRequest;
const ClientCert = models.ClientCert;
const DomainBriefInfo = models.DomainBriefInfo;
const StartEcdnDomainResponse = models.StartEcdnDomainResponse;
const DeleteEcdnDomainResponse = models.DeleteEcdnDomainResponse;
const StopEcdnDomainResponse = models.StopEcdnDomainResponse;
const PurgePathCacheResponse = models.PurgePathCacheResponse;
const PurgeUrlsCacheResponse = models.PurgeUrlsCacheResponse;
const IpFilter = models.IpFilter;
const AddEcdnDomainRequest = models.AddEcdnDomainRequest;
const ResponseHeader = models.ResponseHeader;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const DeleteEcdnDomainRequest = models.DeleteEcdnDomainRequest;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const AddEcdnDomainResponse = models.AddEcdnDomainResponse;
const PurgeTask = models.PurgeTask;
const CacheRule = models.CacheRule;
const DescribeEcdnStatisticsResponse = models.DescribeEcdnStatisticsResponse;
const Origin = models.Origin;
const ServerCert = models.ServerCert;
const CacheKey = models.CacheKey;
const DescribeEcdnDomainStatisticsRequest = models.DescribeEcdnDomainStatisticsRequest;
const Quota = models.Quota;
const DescribeEcdnDomainLogsRequest = models.DescribeEcdnDomainLogsRequest;
const DomainDetailInfo = models.DomainDetailInfo;
const DescribeDomainsRequest = models.DescribeDomainsRequest;


/**
 * ecdn client
 * @class
 */
class EcdnClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ecdn.tencentcloudapi.com", "2019-10-12", credential, region, profile);
    }
    
    /**
     * 本接口（AddEcdnDomain）用于创建加速域名。
     * @param {AddEcdnDomainRequest} req
     * @param {function(string, AddEcdnDomainResponse):void} cb
     * @public
     */
    AddEcdnDomain(req, cb) {
        let resp = new AddEcdnDomainResponse();
        this.request("AddEcdnDomain", req, resp, cb);
    }

    /**
     * PurgePathCache 用于批量刷新目录缓存，一次提交将返回一个刷新任务id。
     * @param {PurgePathCacheRequest} req
     * @param {function(string, PurgePathCacheResponse):void} cb
     * @public
     */
    PurgePathCache(req, cb) {
        let resp = new PurgePathCacheResponse();
        this.request("PurgePathCache", req, resp, cb);
    }

    /**
     * 本接口（StartEcdnDomain）用于启用加速域名，待启用域名必须处于已下线状态。
     * @param {StartEcdnDomainRequest} req
     * @param {function(string, StartEcdnDomainResponse):void} cb
     * @public
     */
    StartEcdnDomain(req, cb) {
        let resp = new StartEcdnDomainResponse();
        this.request("StartEcdnDomain", req, resp, cb);
    }

    /**
     * 本接口（UpdateDomainConfig）用于更新ECDN加速域名配置信息。
注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值。建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
     * @param {UpdateDomainConfigRequest} req
     * @param {function(string, UpdateDomainConfigResponse):void} cb
     * @public
     */
    UpdateDomainConfig(req, cb) {
        let resp = new UpdateDomainConfigResponse();
        this.request("UpdateDomainConfig", req, resp, cb);
    }

    /**
     * DescribePurgeTasks 用于查询刷新任务提交历史记录及执行进度。
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * 本接口（DescribeEcdnDomainLogs）用于查询域名的访问日志下载地址。
     * @param {DescribeEcdnDomainLogsRequest} req
     * @param {function(string, DescribeEcdnDomainLogsResponse):void} cb
     * @public
     */
    DescribeEcdnDomainLogs(req, cb) {
        let resp = new DescribeEcdnDomainLogsResponse();
        this.request("DescribeEcdnDomainLogs", req, resp, cb);
    }

    /**
     * 本接口（DescribeDomainsConfig）用于查询CDN加速域名详细配置信息。
     * @param {DescribeDomainsConfigRequest} req
     * @param {function(string, DescribeDomainsConfigResponse):void} cb
     * @public
     */
    DescribeDomainsConfig(req, cb) {
        let resp = new DescribeDomainsConfigResponse();
        this.request("DescribeDomainsConfig", req, resp, cb);
    }

    /**
     * 查询刷新接口的用量配额。
     * @param {DescribePurgeQuotaRequest} req
     * @param {function(string, DescribePurgeQuotaResponse):void} cb
     * @public
     */
    DescribePurgeQuota(req, cb) {
        let resp = new DescribePurgeQuotaResponse();
        this.request("DescribePurgeQuota", req, resp, cb);
    }

    /**
     * PurgeUrlsCache 用于批量刷新Url，一次提交将返回一个刷新任务id。
     * @param {PurgeUrlsCacheRequest} req
     * @param {function(string, PurgeUrlsCacheResponse):void} cb
     * @public
     */
    PurgeUrlsCache(req, cb) {
        let resp = new PurgeUrlsCacheResponse();
        this.request("PurgeUrlsCache", req, resp, cb);
    }

    /**
     * 本接口（StopCdnDomain）用于停止加速域名，待停用加速域名必须处于已上线或部署中状态。
     * @param {StopEcdnDomainRequest} req
     * @param {function(string, StopEcdnDomainResponse):void} cb
     * @public
     */
    StopEcdnDomain(req, cb) {
        let resp = new StopEcdnDomainResponse();
        this.request("StopEcdnDomain", req, resp, cb);
    }

    /**
     * 本接口（DeleteEcdnDomain）用于删除指定加速域名。待删除域名必须处于已停用状态。
     * @param {DeleteEcdnDomainRequest} req
     * @param {function(string, DeleteEcdnDomainResponse):void} cb
     * @public
     */
    DeleteEcdnDomain(req, cb) {
        let resp = new DeleteEcdnDomainResponse();
        this.request("DeleteEcdnDomain", req, resp, cb);
    }

    /**
     * 本接口（DescribeDomains）用于查询CDN域名基本信息，包括项目id，状态，业务类型，创建时间，更新时间等。
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        let resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }

    /**
     * DescribeEcdnStatistics用于查询 ECDN 实时访问监控数据，支持以下指标查询：

+ 流量（单位为 byte）
+ 带宽（单位为 bps）
+ 请求数（单位为 次）
+ 响应时间（单位为ms）
+ 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
+ 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
+ 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
+ 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
     * @param {DescribeEcdnStatisticsRequest} req
     * @param {function(string, DescribeEcdnStatisticsResponse):void} cb
     * @public
     */
    DescribeEcdnStatistics(req, cb) {
        let resp = new DescribeEcdnStatisticsResponse();
        this.request("DescribeEcdnStatistics", req, resp, cb);
    }

    /**
     * 本接口（DescribeEcdnDomainStatistics）用于查询指定时间段内的域名访问统计指标
     * @param {DescribeEcdnDomainStatisticsRequest} req
     * @param {function(string, DescribeEcdnDomainStatisticsResponse):void} cb
     * @public
     */
    DescribeEcdnDomainStatistics(req, cb) {
        let resp = new DescribeEcdnDomainStatisticsResponse();
        this.request("DescribeEcdnDomainStatistics", req, resp, cb);
    }


}
module.exports = EcdnClient;

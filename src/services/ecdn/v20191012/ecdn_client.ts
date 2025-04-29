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
  DescribeEcdnStatisticsRequest,
  DescribeDomainsConfigResponse,
  AdvanceHttps,
  PurgeUrlsCacheRequest,
  ResourceData,
  Https,
  Cache,
  ForceRedirect,
  DescribeEcdnDomainStatisticsResponse,
  TimestampData,
  DomainData,
  Sort,
  IpFreqLimit,
  DescribePurgeTasksRequest,
  DescribeEcdnStatisticsResponse,
  DomainLogs,
  Hsts,
  DetailData,
  HttpHeaderPathRule,
  DescribeEcdnDomainLogsResponse,
  EcdnData,
  DescribeDomainsConfigRequest,
  ClientCert,
  DomainBriefInfo,
  Tag,
  WebSocket,
  PurgeUrlsCacheResponse,
  IpFilter,
  ResponseHeader,
  DescribeDomainsResponse,
  DescribePurgeTasksResponse,
  IpStatus,
  PurgeTask,
  CacheRule,
  DescribeIpStatusResponse,
  Origin,
  ServerCert,
  CacheKey,
  DomainFilter,
  DescribeEcdnDomainStatisticsRequest,
  DescribeEcdnDomainLogsRequest,
  DomainDetailInfo,
  DescribeIpStatusRequest,
  DescribeDomainsRequest,
} from "./ecdn_models"

/**
 * ecdn client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ecdn.tencentcloudapi.com", "2019-10-12", clientConfig)
  }

  /**
     * ECDN平台下线，接口开始预下线处理

DescribeIpStatus 用于查询域名所在加速平台的所有节点信息, 如果您的源站有白名单设置,可以通过本接口获取ECDN服务的节点IP进行加白, 本接口为内测接口,请联系腾讯云工程师开白。

由于产品服务节点常有更新，对于源站开白的使用场景，请定期调用接口获取最新节点信息，若新增服务节点发布7日后您尚未更新加白导致回源失败等问题，ECDN侧不对此承担责任。
     */
  async DescribeIpStatus(
    req: DescribeIpStatusRequest,
    cb?: (error: string, rep: DescribeIpStatusResponse) => void
  ): Promise<DescribeIpStatusResponse> {
    return this.request("DescribeIpStatus", req, cb)
  }

  /**
     * ECDN即将下线，如需要动态加速请使用EdgeOne

DescribePurgeTasks 用于查询刷新任务提交历史记录及执行进度。

>?  若您的业务已迁移至 CDN 控制台，请参考<a href="https://cloud.tencent.com/document/api/228/37873"> CDN 接口文档</a>，使用  CDN 相关API 进行操作。
     */
  async DescribePurgeTasks(
    req: DescribePurgeTasksRequest,
    cb?: (error: string, rep: DescribePurgeTasksResponse) => void
  ): Promise<DescribePurgeTasksResponse> {
    return this.request("DescribePurgeTasks", req, cb)
  }

  /**
     * ECDN平台下线，接口开始预下线处理

本接口（DescribeEcdnDomainLogs）用于查询域名的访问日志下载地址。
     */
  async DescribeEcdnDomainLogs(
    req: DescribeEcdnDomainLogsRequest,
    cb?: (error: string, rep: DescribeEcdnDomainLogsResponse) => void
  ): Promise<DescribeEcdnDomainLogsResponse> {
    return this.request("DescribeEcdnDomainLogs", req, cb)
  }

  /**
     * ECDN平台下线，接口开始预下线处理

本接口（DescribeDomainsConfig）用于查询CDN加速域名详细配置信息。

>?  若您的业务已迁移至 CDN 控制台，请参考<a href="https://cloud.tencent.com/document/api/228/41117"> CDN 接口文档</a>，使用  CDN 相关API 进行操作。
     */
  async DescribeDomainsConfig(
    req: DescribeDomainsConfigRequest,
    cb?: (error: string, rep: DescribeDomainsConfigResponse) => void
  ): Promise<DescribeDomainsConfigResponse> {
    return this.request("DescribeDomainsConfig", req, cb)
  }

  /**
     * ECDN即将下线，如需要动态加速请使用EdgeOne

PurgeUrlsCache 用于批量刷新Url，一次提交将返回一个刷新任务id。

>?  若您的业务已迁移至 CDN 控制台，请参考<a href="https://cloud.tencent.com/document/api/228/37870"> CDN 接口文档</a>，使用  CDN 相关API 进行操作。
     */
  async PurgeUrlsCache(
    req: PurgeUrlsCacheRequest,
    cb?: (error: string, rep: PurgeUrlsCacheResponse) => void
  ): Promise<PurgeUrlsCacheResponse> {
    return this.request("PurgeUrlsCache", req, cb)
  }

  /**
     * ECDN平台下线，接口开始预下线处理

本接口（DescribeDomains）用于查询CDN域名基本信息，包括项目id，状态，业务类型，创建时间，更新时间等。

>?  若您的业务已迁移至 CDN 控制台，请参考<a href="https://cloud.tencent.com/document/api/228/41118"> CDN 接口文档</a>，使用  CDN 相关API 进行操作。
     */
  async DescribeDomains(
    req: DescribeDomainsRequest,
    cb?: (error: string, rep: DescribeDomainsResponse) => void
  ): Promise<DescribeDomainsResponse> {
    return this.request("DescribeDomains", req, cb)
  }

  /**
     * ECDN平台下线，接口开始预下线处理

DescribeEcdnStatistics用于查询 ECDN 实时访问监控数据，支持以下指标查询：

+ 流量（单位为 byte）
+ 带宽（单位为 bps）
+ 请求数（单位为 次）
+ 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
+ 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
+ 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
+ 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
     */
  async DescribeEcdnStatistics(
    req: DescribeEcdnStatisticsRequest,
    cb?: (error: string, rep: DescribeEcdnStatisticsResponse) => void
  ): Promise<DescribeEcdnStatisticsResponse> {
    return this.request("DescribeEcdnStatistics", req, cb)
  }

  /**
     * ECDN平台下线，接口开始预下线处理

本接口（DescribeEcdnDomainStatistics）用于查询指定时间段内的域名访问统计指标。

>?  若您的业务已迁移至 CDN 控制台，请参考<a href="https://cloud.tencent.com/document/api/228/30986"> CDN 接口文档</a>，使用  CDN 相关API 进行操作。
     */
  async DescribeEcdnDomainStatistics(
    req: DescribeEcdnDomainStatisticsRequest,
    cb?: (error: string, rep: DescribeEcdnDomainStatisticsResponse) => void
  ): Promise<DescribeEcdnDomainStatisticsResponse> {
    return this.request("DescribeEcdnDomainStatistics", req, cb)
  }
}

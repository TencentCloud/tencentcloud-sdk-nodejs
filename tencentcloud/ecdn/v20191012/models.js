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
const AbstractModel = require("../../common/abstract_model");

/**
 * PurgePathCache请求参数结构体
 * @class
 */
class PurgePathCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要刷新的目录列表，必须包含协议头部。
         * @type {Array.<string> || null}
         */
        this.Paths = null;

        /**
         * 刷新类型，flush 代表刷新有更新的资源，delete 表示刷新全部资源。
         * @type {string || null}
         */
        this.FlushType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Paths = 'Paths' in params ? params.Paths : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;

    }
}

/**
 * DescribeEcdnStatistics请求参数结构体
 * @class
 */
class DescribeEcdnStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始时间，如：2019-12-13 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2019-12-13 23:59:59
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定查询指标，支持的类型有：
flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
delay：响应时间，单位为ms
2xx：返回 2xx 状态码汇总或者 2 开头状态码数据，单位为 个
3xx：返回 3xx 状态码汇总或者 3 开头状态码数据，单位为 个
4xx：返回 4xx 状态码汇总或者 4 开头状态码数据，单位为 个
5xx：返回 5xx 状态码汇总或者 5 开头状态码数据，单位为 个
static_request ： 静态请求数，单位为 次
static_flux：静态流量，单位为 byte
static_bandwidth ： 静态带宽，单位为 bps
dynamic_request：动态请求数，单位为 次
dynamic_flux：动态流量，单位为 byte
dynamic_bandwidth：动态带宽，单位为 bps
         * @type {Array.<string> || null}
         */
        this.Metrics = null;

        /**
         * 时间粒度，支持以下几种模式：
1 天	 1，5，15，30，60，120，240，1440 
2 ~ 3 天	15，30，60，120，240，1440
4 ~ 7 天	30，60，120，240，1440
8 ~ 90 天	 60，120，240，1440
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 指定查询域名列表

最多可一次性查询30个加速域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
         * @type {Array.<number> || null}
         */
        this.Projects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Projects = 'Projects' in params ? params.Projects : null;

    }
}

/**
 * StartEcdnDomain请求参数结构体
 * @class
 */
class StartEcdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待启用域名。
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribeDomainsConfig返回参数结构体
 * @class
 */
class DescribeDomainsConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名列表。
         * @type {Array.<DomainDetailInfo> || null}
         */
        this.Domains = null;

        /**
         * 符合查询条件的域名总数，用于分页查询。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DomainDetailInfo();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名https配置。
 * @class
 */
class Https extends  AbstractModel {
    constructor(){
        super();

        /**
         * https配置开关，on或off。开启https配置的域名在部署中状态，开关保持off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 是否开启http2，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Http2 = null;

        /**
         * 是否开启OCSP功能，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcspStapling = null;

        /**
         * 是否开启客户端证书校验功能，on或off，开启时必选上传客户端证书信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VerifyClient = null;

        /**
         * 服务器证书配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ServerCert || null}
         */
        this.CertInfo = null;

        /**
         * 客户端证书配置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClientCert || null}
         */
        this.ClientCertInfo = null;

        /**
         * 是否开启Spdy，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spdy = null;

        /**
         * https证书部署状态，closed，deploying，deployed，failed分别表示已关闭，部署中，部署成功，部署失败。不可作为入参使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SslStatus = null;

        /**
         * Hsts配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Hsts || null}
         */
        this.Hsts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.VerifyClient = 'VerifyClient' in params ? params.VerifyClient : null;

        if (params.CertInfo) {
            let obj = new ServerCert();
            obj.deserialize(params.CertInfo)
            this.CertInfo = obj;
        }

        if (params.ClientCertInfo) {
            let obj = new ClientCert();
            obj.deserialize(params.ClientCertInfo)
            this.ClientCertInfo = obj;
        }
        this.Spdy = 'Spdy' in params ? params.Spdy : null;
        this.SslStatus = 'SslStatus' in params ? params.SslStatus : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }

    }
}

/**
 * PurgeUrlsCache请求参数结构体
 * @class
 */
class PurgeUrlsCacheRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要刷新的Url列表，必须包含协议头部。
         * @type {Array.<string> || null}
         */
        this.Urls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Urls = 'Urls' in params ? params.Urls : null;

    }
}

/**
 * 查询对象及其对应的访问明细数据
 * @class
 */
class ResourceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名称，根据查询条件不同分为以下几类：
具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
项目 ID：指定项目查询时，显示为项目 ID
all：账号维度明细数据
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 资源对应的数据明细
         * @type {EcdnData || null}
         */
        this.EcdnData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.EcdnData) {
            let obj = new EcdnData();
            obj.deserialize(params.EcdnData)
            this.EcdnData = obj;
        }

    }
}

/**
 * 缓存配置简单版本，该版本不支持设置源站未返回max-age情况下的缓存规则。
 * @class
 */
class Cache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存配置规则数组。
         * @type {Array.<CacheRule> || null}
         */
        this.CacheRules = null;

        /**
         * 遵循源站 Cache-Control: max-age 配置，白名单功能。
on：开启
off：关闭
开启后，未能匹配 CacheRules 规则的资源将根据源站返回的 max-age 值进行节点缓存；匹配了 CacheRules 规则的资源将按照 CacheRules 中设置的缓存过期时间在节点进行缓存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FollowOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CacheRules) {
            this.CacheRules = new Array();
            for (let z in params.CacheRules) {
                let obj = new CacheRule();
                obj.deserialize(params.CacheRules[z]);
                this.CacheRules.push(obj);
            }
        }
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;

    }
}

/**
 * 访问协议强制跳转配置。
 * @class
 */
class ForceRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问协议强制跳转配置开关，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 强制跳转访问协议类型，支持http，https，分别表示请求强制跳转http协议，请求强制跳转https协议。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RedirectType = null;

        /**
         * 强制跳转开启时返回的http状态码，支持301或302。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RedirectStatusCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RedirectType = 'RedirectType' in params ? params.RedirectType : null;
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;

    }
}

/**
 * DescribePurgeQuota返回参数结构体
 * @class
 */
class DescribePurgeQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Url刷新用量及配额。
         * @type {Quota || null}
         */
        this.UrlPurge = null;

        /**
         * 目录刷新用量及配额。
         * @type {Quota || null}
         */
        this.PathPurge = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UrlPurge) {
            let obj = new Quota();
            obj.deserialize(params.UrlPurge)
            this.UrlPurge = obj;
        }

        if (params.PathPurge) {
            let obj = new Quota();
            obj.deserialize(params.PathPurge)
            this.PathPurge = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEcdnDomainStatistics返回参数结构体
 * @class
 */
class DescribeEcdnDomainStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名数据
         * @type {Array.<DomainData> || null}
         */
        this.Data = null;

        /**
         * 数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DomainData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 时间戳与其对应的数值
 * @class
 */
class TimestampData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据统计时间点，采用向前汇总模式
以 5 分钟粒度为例，13:35:00 时间点代表的统计数据区间为 13:35:00 至 13:39:59
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 数据值
         * @type {Array.<number> || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 排序类型数据结构
 * @class
 */
class DomainData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Resource = null;

        /**
         * 结果详情
         * @type {Array.<DetailData> || null}
         */
        this.DetailData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Resource = 'Resource' in params ? params.Resource : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new DetailData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * StopEcdnDomain请求参数结构体
 * @class
 */
class StopEcdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待停用域名。
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * 查询结果排序条件。
 * @class
 */
class Sort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段，当前支持：
createTime，域名创建时间
certExpireTime，证书过期时间
         * @type {string || null}
         */
        this.Key = null;

        /**
         * asc/desc，默认desc。
         * @type {string || null}
         */
        this.Sequence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Sequence = 'Sequence' in params ? params.Sequence : null;

    }
}

/**
 * IP限频配置。
 * @class
 */
class IpFreqLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP限频配置开关，on或off。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 每秒请求数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Qps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Qps = 'Qps' in params ? params.Qps : null;

    }
}

/**
 * DescribePurgeTasks请求参数结构体
 * @class
 */
class DescribePurgeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询刷新类型。url：查询 url 刷新记录；path：查询目录刷新记录。
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * 开始时间，如2018-08-08 00:00:00。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，如2018-08-08 23:59:59。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 提交时返回的任务 Id，查询时 TaskId 和起始时间必须指定一项。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 分页查询偏移量，默认为0（从第0条开始）。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询关键字，请输入域名或 http(s):// 开头完整 URL。
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * 查询指定任务状态，fail表示失败，done表示成功，process表示刷新中。
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 域名查询时过滤条件。
 * @class
 */
class DomainFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名，支持的列表如下：
- origin：主源站。
- domain：域名。
- resourceId：域名id。
- status：域名状态，online，offline，processing。
- disable：域名封禁状态，normal，unlicensed。
- projectId：项目ID。
- fullUrlCache：全路径缓存，on或off。
- https：是否配置https，on，off或processing。
- originPullProtocol：回源协议类型，支持http，follow或https。
- area：加速区域，支持mainland，overseas或global。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值。
         * @type {Array.<string> || null}
         */
        this.Value = null;

        /**
         * 是否启用模糊查询，仅支持过滤字段名为origin，domain。
         * @type {boolean || null}
         */
        this.Fuzzy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * 域名日志信息
 * @class
 */
class DomainLogs extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志起始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 日志结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 日志下载路径。
         * @type {string || null}
         */
        this.LogPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.LogPath = 'LogPath' in params ? params.LogPath : null;

    }
}

/**
 * HSTS 配置。
 * @class
 */
class Hsts extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启，on或off。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * MaxAge数值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxAge = null;

        /**
         * 是否包含子域名，on或off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IncludeSubDomains = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxAge = 'MaxAge' in params ? params.MaxAge : null;
        this.IncludeSubDomains = 'IncludeSubDomains' in params ? params.IncludeSubDomains : null;

    }
}

/**
 * 分路径的http头部设置规则。
 * @class
 */
class HttpHeaderPathRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * http头部设置方式，支持add，set或del，分别表示新增，设置或删除头部。
请求头部暂不支持set。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeaderMode = null;

        /**
         * http头部名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeaderName = null;

        /**
         * http头部值。del时可不填写该字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeaderValue = null;

        /**
         * 生效的url路径规则类型，支持all，file，directory或path，分别表示全部路径，文件后缀类型，目录或绝对路径生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * url路径或文件类型列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RulePaths = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeaderMode = 'HeaderMode' in params ? params.HeaderMode : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;
        this.HeaderValue = 'HeaderValue' in params ? params.HeaderValue : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RulePaths = 'RulePaths' in params ? params.RulePaths : null;

    }
}

/**
 * UpdateDomainConfig返回参数结构体
 * @class
 */
class UpdateDomainConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 排序类型的数据结构
 * @class
 */
class DetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据类型的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数据值
         * @type {number || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribePurgeQuota请求参数结构体
 * @class
 */
class DescribePurgeQuotaRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DescribeEcdnDomainLogs返回参数结构体
 * @class
 */
class DescribeEcdnDomainLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志链接列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DomainLogs> || null}
         */
        this.DomainLogs = null;

        /**
         * 日志链接总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DomainLogs) {
            this.DomainLogs = new Array();
            for (let z in params.DomainLogs) {
                let obj = new DomainLogs();
                obj.deserialize(params.DomainLogs[z]);
                this.DomainLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 访问明细数据类型
 * @class
 */
class EcdnData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询指定的指标名称：Bandwidth，Flux，Request，Delay，状态码，LogBandwidth，LogFlux，LogRequest
         * @type {Array.<string> || null}
         */
        this.Metrics = null;

        /**
         * 明细数据组合
         * @type {Array.<TimestampData> || null}
         */
        this.DetailData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metrics = 'Metrics' in params ? params.Metrics : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new TimestampData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * UpdateDomainConfig请求参数结构体
 * @class
 */
class UpdateDomainConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 源站配置。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 项目id。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * IP黑白名单配置。
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP限频配置。
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * 源站响应头部配置。
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * 节点缓存配置。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 缓存规则配置。
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * Https配置。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 访问协议强制跳转配置。
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * 域名加速区域，mainland，overseas或global，分别表示中国境内加速，海外加速或全球加速。
         * @type {string || null}
         */
        this.Area = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeDomainsConfig请求参数结构体
 * @class
 */
class DescribeDomainsConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询的偏移地址，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询的域名个数，默认100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询条件过滤器。
         * @type {Array.<DomainFilter> || null}
         */
        this.Filters = null;

        /**
         * 查询结果排序规则。
         * @type {Sort || null}
         */
        this.Sort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sort) {
            let obj = new Sort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * https客户端证书配置。
 * @class
 */
class ClientCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端证书，pem格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * 客户端证书名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 证书颁发时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;

    }
}

/**
 * CDN域名简要信息。
 * @class
 */
class DomainBriefInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 腾讯云账号ID。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * CDN加速域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名CName。
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 域名状态，pending，rejected，processing， online，offline，deleted分别表示审核中，审核未通过，审核通过部署中，已开启，已关闭，已删除。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 域名创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 域名更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 源站配置详情。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 域名封禁状态，normal，overdue，quota，malicious，ddos，idle，unlicensed，capping，readonly分别表示 正常，欠费停服，试用客户流量包耗尽，恶意用户，ddos攻击，无流量域名，未备案，带宽封顶，只读
         * @type {string || null}
         */
        this.Disable = null;

        /**
         * 加速区域，mainland，oversea或global。
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 域名锁定状态，normal、global，分别表示未被锁定、全球锁定。
         * @type {string || null}
         */
        this.Readonly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;

    }
}

/**
 * StartEcdnDomain返回参数结构体
 * @class
 */
class StartEcdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEcdnDomain返回参数结构体
 * @class
 */
class DeleteEcdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopEcdnDomain返回参数结构体
 * @class
 */
class StopEcdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PurgePathCache返回参数结构体
 * @class
 */
class PurgePathCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刷新任务Id，前十位为提交任务时的UTC时间。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PurgeUrlsCache返回参数结构体
 * @class
 */
class PurgeUrlsCacheResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刷新任务Id，前十位为提交任务时的UTC时间。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP黑白名单。
 * @class
 */
class IpFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP黑白名单开关，on或off。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * IP黑白名单类型，whitelist或blacklist。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilterType = null;

        /**
         * IP黑白名单列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;
        this.Filters = 'Filters' in params ? params.Filters : null;

    }
}

/**
 * AddEcdnDomain请求参数结构体
 * @class
 */
class AddEcdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 源站配置。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 域名加速区域，mainland，overseas或global，分别表示中国境内加速，海外加速或全球加速。
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 项目id，默认0。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * IP黑白名单配置。
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP限频配置。
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * 源站响应头部配置。
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * 节点缓存配置。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 缓存规则配置。
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * Https配置。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 访问协议强制跳转配置。
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

    }
}

/**
 * 自定义响应头配置。
 * @class
 */
class ResponseHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义响应头开关，on或off。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 自定义响应头规则数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HttpHeaderPathRule> || null}
         */
        this.HeaderRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.HeaderRules) {
            this.HeaderRules = new Array();
            for (let z in params.HeaderRules) {
                let obj = new HttpHeaderPathRule();
                obj.deserialize(params.HeaderRules[z]);
                this.HeaderRules.push(obj);
            }
        }

    }
}

/**
 * DescribeDomains返回参数结构体
 * @class
 */
class DescribeDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名信息列表。
         * @type {Array.<DomainBriefInfo> || null}
         */
        this.Domains = null;

        /**
         * 域名总个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DomainBriefInfo();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteEcdnDomain请求参数结构体
 * @class
 */
class DeleteEcdnDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除域名。
         * @type {string || null}
         */
        this.Domain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribePurgeTasks返回参数结构体
 * @class
 */
class DescribePurgeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刷新历史记录。
         * @type {Array.<PurgeTask> || null}
         */
        this.PurgeLogs = null;

        /**
         * 任务总数，用于分页。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PurgeLogs) {
            this.PurgeLogs = new Array();
            for (let z in params.PurgeLogs) {
                let obj = new PurgeTask();
                obj.deserialize(params.PurgeLogs[z]);
                this.PurgeLogs.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddEcdnDomain返回参数结构体
 * @class
 */
class AddEcdnDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 刷新任务日志详情
 * @class
 */
class PurgeTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刷新任务ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 刷新Url。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 刷新任务状态，fail表示失败，done表示成功，process表示刷新中。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 刷新类型，url表示url刷新，path表示目录刷新。
         * @type {string || null}
         */
        this.PurgeType = null;

        /**
         * 刷新资源方式，flush代表刷新更新资源，delete代表刷新全部资源。
         * @type {string || null}
         */
        this.FlushType = null;

        /**
         * 刷新任务提交时间
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PurgeType = 'PurgeType' in params ? params.PurgeType : null;
        this.FlushType = 'FlushType' in params ? params.FlushType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 缓存配置规则。
 * @class
 */
class CacheRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存类型，支持all，file，directory，path，index，分别表示全部文件，后缀类型，目录，完整路径，首页。
         * @type {string || null}
         */
        this.CacheType = null;

        /**
         * 缓存内容列表。
         * @type {Array.<string> || null}
         */
        this.CacheContents = null;

        /**
         * 缓存时间，单位秒。
         * @type {number || null}
         */
        this.CacheTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CacheType = 'CacheType' in params ? params.CacheType : null;
        this.CacheContents = 'CacheContents' in params ? params.CacheContents : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;

    }
}

/**
 * DescribeEcdnStatistics返回参数结构体
 * @class
 */
class DescribeEcdnStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指定条件查询得到的数据明细
         * @type {Array.<ResourceData> || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new ResourceData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 源站配置。
 * @class
 */
class Origin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主源站列表，默认格式为 ["ip1:port1", "ip2:port2"]。
支持在源站列表中配置权重，配置IP源站权重格式为 ["ip1:port1:weight1", "ip2:port2:weight2"]。
         * @type {Array.<string> || null}
         */
        this.Origins = null;

        /**
         * 主源站类型，支持domain，ip，分别表示域名源站，ip源站。
设置Origins时必须填写。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 回源时Host头部值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServerName = null;

        /**
         * 回源协议类型，支持http，follow，https，分别表示强制http回源，协议跟随回源，https回源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

        /**
         * 备份源站列表。
         * @type {Array.<string> || null}
         */
        this.BackupOrigins = null;

        /**
         * 备份源站类型，同OriginType。
设置BackupOrigins时必须填写。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BackupOriginType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Origins = 'Origins' in params ? params.Origins : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ServerName = 'ServerName' in params ? params.ServerName : null;
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;
        this.BackupOrigins = 'BackupOrigins' in params ? params.BackupOrigins : null;
        this.BackupOriginType = 'BackupOriginType' in params ? params.BackupOriginType : null;

    }
}

/**
 * https服务端证书配置。
 * @class
 */
class ServerCert extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器证书id，当证书为腾讯云托管证书时必填。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 服务器证书名称，当证书为腾讯云托管证书时必填。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 服务器证书信息，上传自有证书时必填，必须包含完整的证书链信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * 服务器密钥信息，上传自有证书时必填。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 证书颁发时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * 证书备注信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * 缓存相关配置。
 * @class
 */
class CacheKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启全路径缓存，on或off。
         * @type {string || null}
         */
        this.FullUrlCache = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FullUrlCache = 'FullUrlCache' in params ? params.FullUrlCache : null;

    }
}

/**
 * DescribeEcdnDomainStatistics请求参数结构体
 * @class
 */
class DescribeEcdnDomainStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始时间，如：2019-12-13 00:00:00。
起止时间不超过90天。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，如：2019-12-13 23:59:59。
起止时间不超过90天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计指标名称。flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
delay：响应时间，单位为ms
static_request ： 静态请求数，单位为 次
static_flux：静态流量，单位为 byte
static_bandwidth ： 静态带宽，单位为 bps
dynamic_request：动态请求数，单位为 次
dynamic_flux：动态流量，单位为 byte
dynamic_bandwidth：动态带宽，单位为 bps
         * @type {Array.<string> || null}
         */
        this.Metrics = null;

        /**
         * 指定查询域名列表
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
         * @type {Array.<number> || null}
         */
        this.Projects = null;

        /**
         * 列表分页起始地址，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 列表分页记录条数，默认1000，最大3000。
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Metrics = 'Metrics' in params ? params.Metrics : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Projects = 'Projects' in params ? params.Projects : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 刷新用量及刷新配额
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 单次批量提交配额上限。
         * @type {number || null}
         */
        this.Batch = null;

        /**
         * 每日提交配额上限。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 每日剩余的可提交配额。
         * @type {number || null}
         */
        this.Available = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Batch = 'Batch' in params ? params.Batch : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Available = 'Available' in params ? params.Available : null;

    }
}

/**
 * DescribeEcdnDomainLogs请求参数结构体
 * @class
 */
class DescribeEcdnDomainLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 日志起始时间。如：2019-10-01 00:00:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 日志结束时间，只支持最近30天内日志查询。2019-10-02 00:00:00
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 日志链接列表分页起始地址，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 日志链接列表分页记录条数，默认100，最大1000。
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ECDN域名详细配置信息。
 * @class
 */
class DomainDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名ID。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 腾讯云账号ID。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 加速域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 域名CName。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 域名状态，pending，rejected，processing， online，offline，deleted分别表示审核中，审核未通过，审核通过部署中，已开启，已关闭，已删除。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 域名创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 域名更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 源站配置。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * IP黑白名单配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpFilter || null}
         */
        this.IpFilter = null;

        /**
         * IP限频配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpFreqLimit || null}
         */
        this.IpFreqLimit = null;

        /**
         * 源站响应头部配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ResponseHeader || null}
         */
        this.ResponseHeader = null;

        /**
         * 节点缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * Https配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 域名封禁状态，normal，overdue，quota，malicious，ddos，idle，unlicensed，capping，readonly分别表示 正常，欠费停服，试用客户流量包耗尽，恶意用户，ddos攻击，无流量域名，未备案，带宽封顶，只读。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Disable = null;

        /**
         * 访问协议强制跳转配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * 加速区域，mainland，overseas或global。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 域名锁定状态，normal、global 分别表示未被锁定，全球锁定。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Readonly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.IpFilter) {
            let obj = new IpFilter();
            obj.deserialize(params.IpFilter)
            this.IpFilter = obj;
        }

        if (params.IpFreqLimit) {
            let obj = new IpFreqLimit();
            obj.deserialize(params.IpFreqLimit)
            this.IpFreqLimit = obj;
        }

        if (params.ResponseHeader) {
            let obj = new ResponseHeader();
            obj.deserialize(params.ResponseHeader)
            this.ResponseHeader = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }
        this.Disable = 'Disable' in params ? params.Disable : null;

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.Readonly = 'Readonly' in params ? params.Readonly : null;

    }
}

/**
 * DescribeDomains请求参数结构体
 * @class
 */
class DescribeDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询的偏移地址，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询的域名个数，默认100，最大支持1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询条件过滤器。
         * @type {Array.<DomainFilter> || null}
         */
        this.Filters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DomainFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

module.exports = {
    PurgePathCacheRequest: PurgePathCacheRequest,
    DescribeEcdnStatisticsRequest: DescribeEcdnStatisticsRequest,
    StartEcdnDomainRequest: StartEcdnDomainRequest,
    DescribeDomainsConfigResponse: DescribeDomainsConfigResponse,
    Https: Https,
    PurgeUrlsCacheRequest: PurgeUrlsCacheRequest,
    ResourceData: ResourceData,
    Cache: Cache,
    ForceRedirect: ForceRedirect,
    DescribePurgeQuotaResponse: DescribePurgeQuotaResponse,
    DescribeEcdnDomainStatisticsResponse: DescribeEcdnDomainStatisticsResponse,
    TimestampData: TimestampData,
    DomainData: DomainData,
    StopEcdnDomainRequest: StopEcdnDomainRequest,
    Sort: Sort,
    IpFreqLimit: IpFreqLimit,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    DomainFilter: DomainFilter,
    DomainLogs: DomainLogs,
    Hsts: Hsts,
    HttpHeaderPathRule: HttpHeaderPathRule,
    UpdateDomainConfigResponse: UpdateDomainConfigResponse,
    DetailData: DetailData,
    DescribePurgeQuotaRequest: DescribePurgeQuotaRequest,
    DescribeEcdnDomainLogsResponse: DescribeEcdnDomainLogsResponse,
    EcdnData: EcdnData,
    UpdateDomainConfigRequest: UpdateDomainConfigRequest,
    DescribeDomainsConfigRequest: DescribeDomainsConfigRequest,
    ClientCert: ClientCert,
    DomainBriefInfo: DomainBriefInfo,
    StartEcdnDomainResponse: StartEcdnDomainResponse,
    DeleteEcdnDomainResponse: DeleteEcdnDomainResponse,
    StopEcdnDomainResponse: StopEcdnDomainResponse,
    PurgePathCacheResponse: PurgePathCacheResponse,
    PurgeUrlsCacheResponse: PurgeUrlsCacheResponse,
    IpFilter: IpFilter,
    AddEcdnDomainRequest: AddEcdnDomainRequest,
    ResponseHeader: ResponseHeader,
    DescribeDomainsResponse: DescribeDomainsResponse,
    DeleteEcdnDomainRequest: DeleteEcdnDomainRequest,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    AddEcdnDomainResponse: AddEcdnDomainResponse,
    PurgeTask: PurgeTask,
    CacheRule: CacheRule,
    DescribeEcdnStatisticsResponse: DescribeEcdnStatisticsResponse,
    Origin: Origin,
    ServerCert: ServerCert,
    CacheKey: CacheKey,
    DescribeEcdnDomainStatisticsRequest: DescribeEcdnDomainStatisticsRequest,
    Quota: Quota,
    DescribeEcdnDomainLogsRequest: DescribeEcdnDomainLogsRequest,
    DomainDetailInfo: DomainDetailInfo,
    DescribeDomainsRequest: DescribeDomainsRequest,

}

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
 * CreatePlanForZone返回参数结构体
 * @class
 */
class CreatePlanForZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买的资源名字列表。
         * @type {Array.<string> || null}
         */
        this.ResourceNames = null;

        /**
         * 购买的订单号列表。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

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
        this.ResourceNames = 'ResourceNames' in params ? params.ResourceNames : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadL7Logs请求参数结构体
 * @class
 */
class DownloadL7LogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 子域名集合，不填默认选择全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 分页查询的限制数目，默认值为20，最大查询条目为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeSpeedTestingQuota返回参数结构体
 * @class
 */
class DescribeSpeedTestingQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额数据。
         * @type {SpeedTestingQuota || null}
         */
        this.SpeedTestingQuota = null;

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

        if (params.SpeedTestingQuota) {
            let obj = new SpeedTestingQuota();
            obj.deserialize(params.SpeedTestingQuota)
            this.SpeedTestingQuota = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能压缩配置。
 * @class
 */
class Compression extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能压缩配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 支持的压缩算法列表，取值有：
<li>brotli：brotli算法；</li>
<li>gzip：gzip算法。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Algorithms = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Algorithms = 'Algorithms' in params ? params.Algorithms : null;

    }
}

/**
 * DeleteRules请求参数结构体
 * @class
 */
class DeleteRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 指定删除的规则 ID 列表。
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;

    }
}

/**
 * 例外规则生效的具体条件。
 * @class
 */
class ExceptUserRuleCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配项，取值有：
<li>host：请求域名；</li>
<li>sip：客户端IP；</li>
<li>ua：User-Agent；</li>
<li>cookie：会话 Cookie；</li>
<li>cgi：CGI 脚本；</li>
<li>xff：XFF 扩展头部；</li>
<li>url：请求 URL；</li>
<li>accept：请求内容类型；</li>
<li>method：请求方式；</li>
<li>header：请求头部；</li>
<li>sip_proto：网络层协议。</li>
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * 匹配项的参数。仅当 MatchFrom 为 header 时，可以使用本参数，值可填入 header 的 key 作为参数。
         * @type {string || null}
         */
        this.MatchParam = null;

        /**
         * 匹配操作符，取值有：
<li>equal：字符串等于；</li>
<li>not_equal：数值不等于；</li>
<li>include：字符包含；</li>
<li>not_include：字符不包含；</li>
<li>match：ip匹配；</li>
<li>not_match：ip不匹配；</li>
<li>include_area：地域包含；</li>
<li>is_empty：存在字段但值为空；</li>
<li>not_exists：不存在关键字段；</li>
<li>regexp：正则匹配；</li>
<li>len_gt：数值大于；</li>
<li>len_lt：数值小于；</li>
<li>len_eq：数值等于；</li>
<li>match_prefix：前缀匹配；</li>
<li>match_suffix：后缀匹配；</li>
<li>wildcard：通配符。</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 匹配值。
         * @type {string || null}
         */
        this.MatchContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.MatchParam = 'MatchParam' in params ? params.MatchParam : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;

    }
}

/**
 * ModifyDefaultCertificate请求参数结构体
 * @class
 */
class ModifyDefaultCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 默认证书ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书状态，取值有：
<li>deployed ：部署证书；</li>
<li>disabled ：禁用证书。</li>失败状态下重新deployed即可重试。
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 单值类数据记录
 * @class
 */
class SingleDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询维度值。
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * 查询维度下具体指标值。
         * @type {Array.<SingleTypeValue> || null}
         */
        this.TypeValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeKey = 'TypeKey' in params ? params.TypeKey : null;

        if (params.TypeValue) {
            this.TypeValue = new Array();
            for (let z in params.TypeValue) {
                let obj = new SingleTypeValue();
                obj.deserialize(params.TypeValue[z]);
                this.TypeValue.push(obj);
            }
        }

    }
}

/**
 * DescribeOriginGroup返回参数结构体
 * @class
 */
class DescribeOriginGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 源站组信息。
         * @type {Array.<OriginGroup> || null}
         */
        this.OriginGroups = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.OriginGroups) {
            this.OriginGroups = new Array();
            for (let z in params.OriginGroups) {
                let obj = new OriginGroup();
                obj.deserialize(params.OriginGroups[z]);
                this.OriginGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebManagedRulesLog返回参数结构体
 * @class
 */
class DescribeWebManagedRulesLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web攻击日志数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WebLogs> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new WebLogs();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 客户端ip信息
 * @class
 */
class SecClientIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端ip。
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 最大qps。
         * @type {number || null}
         */
        this.RequestMaxQps = null;

        /**
         * 请求数。
         * @type {number || null}
         */
        this.RequestNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.RequestMaxQps = 'RequestMaxQps' in params ? params.RequestMaxQps : null;
        this.RequestNum = 'RequestNum' in params ? params.RequestNum : null;

    }
}

/**
 * DescribeTopL7CacheData请求参数结构体
 * @class
 */
class DescribeTopL7CacheDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询的指标，取值有：
<li> l7Cache_outFlux_domain：host/域名；</li>
<li> l7Cache_outFlux_url：url地址；</li>
<li> l7Cache_outFlux_resourceType：资源类型；</li>
<li> l7Cache_outFlux_statusCode：状态码。</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 站点id集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，详细的过滤条件如下：
<li>domain<br>   按照【<strong>子域名</strong>】进行过滤，子域名形如： test.example.com。<br>   类型：String<br>   必选：否</li>
<li>url<br>   按照【<strong>URL</strong>】进行过滤，此参数只支持30天的时间范围，URL形如：/content。<br>   类型：String<br>   必选：否</li>
<li>resourceType<br>   按照【<strong>资源类型</strong>】进行过滤，此参数只支持30天的时间范围，资源类型形如：jpg，png。<br>   类型：String<br>   必选：否</li>
<li>cacheType<br>   按照【<strong>缓存类型</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   hit：命中缓存；<br>   dynamic：资源不可缓存；<br>   miss：未命中缓存。</li>
<li>statusCode<br>   按照【<strong>状态码</strong>】进行过滤，此参数只支持30天的时间范围。<br>   类型：String<br>   必选：否<br>   可选项：<br>   1XX：1xx类型的状态码；<br>   100：100状态码；<br>   101：101状态码；<br>   102：102状态码；<br>   2XX：2xx类型的状态码；<br>   200：200状态码；<br>   201：201状态码；<br>   202：202状态码；<br>   203：203状态码；<br>   204：204状态码；<br>   100：100状态码；<br>   206：206状态码；<br>   207：207状态码；<br>   3XX：3xx类型的状态码；<br>   300：300状态码；<br>   301：301状态码；<br>   302：302状态码；<br>   303：303状态码；<br>   304：304状态码；<br>   305：305状态码；<br>   307：307状态码；<br>   4XX：4xx类型的状态码；<br>   400：400状态码；<br>   401：401状态码；<br>   402：402状态码；<br>   403：403状态码；<br>   404：404状态码；<br>   405：405状态码；<br>   406：406状态码；<br>   407：407状态码；<br>   408：408状态码；<br>   409：409状态码；<br>   410：410状态码；<br>   411：411状态码；<br>   412：412状态码；<br>   412：413状态码；<br>   414：414状态码；<br>   415：415状态码；<br>   416：416状态码；<br>   417：417状态码；<br>   422：422状态码；<br>   423：423状态码；<br>   424：424状态码；<br>   426：426状态码；<br>   451：451状态码；<br>   5XX：5xx类型的状态码；<br>   500：500状态码；<br>   501：501状态码；<br>   502：502状态码；<br>   503：503状态码；<br>   504：504状态码；<br>   505：505状态码；<br>   506：506状态码；<br>   507：507状态码；<br>   510：510状态码；<br>   514：514状态码；<br>   544：544状态码。</li>
<li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
<li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * 查询时间粒度，取值有：
<li>min: 1分钟；</li>
<li>5min: 5分钟；</li>
<li>hour: 1小时；</li>
<li>day: 1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据；</li>
<li>global：全球数据。</li>不填默认取值为global。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 单值指标数据
 * @class
 */
class SingleTypeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名。
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标值。
         * @type {number || null}
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.DetailData = 'DetailData' in params ? params.DetailData : null;

    }
}

/**
 * CreateCredential返回参数结构体
 * @class
 */
class CreateCredentialResponse extends  AbstractModel {
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
 * DeleteApplicationProxy返回参数结构体
 * @class
 */
class DeleteApplicationProxyResponse extends  AbstractModel {
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
 * 域名 https 加速配置，默认为关闭状态
 * @class
 */
class Https extends  AbstractModel {
    constructor(){
        super();

        /**
         * http2 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Http2 = null;

        /**
         * OCSP 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OcspStapling = null;

        /**
         * Tls版本设置，取值有：
<li>TLSv1：TLSv1版本；</li>
<li>TLSV1.1：TLSv1.1版本；</li>
<li>TLSV1.2：TLSv1.2版本；</li>
<li>TLSv1.3：TLSv1.3版本。</li>修改时必须开启连续的版本。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.TlsVersion = null;

        /**
         * HSTS 配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Hsts || null}
         */
        this.Hsts = null;

        /**
         * 证书配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServerCertInfo> || null}
         */
        this.CertInfo = null;

        /**
         * 申请类型，取值有：
<li>apply：托管EdgeOne；</li>
<li>none：不托管EdgeOne。</li>不填，默认取值为none。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.OcspStapling = 'OcspStapling' in params ? params.OcspStapling : null;
        this.TlsVersion = 'TlsVersion' in params ? params.TlsVersion : null;

        if (params.Hsts) {
            let obj = new Hsts();
            obj.deserialize(params.Hsts)
            this.Hsts = obj;
        }

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }
        this.ApplyType = 'ApplyType' in params ? params.ApplyType : null;

    }
}

/**
 * 安全数据维度值信息
 * @class
 */
class SecEntryValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名称。
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 时序数据详情。
         * @type {Array.<TimingDataItem> || null}
         */
        this.Detail = null;

        /**
         * 最大值。
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 平均值。
         * @type {number || null}
         */
        this.Avg = null;

        /**
         * 数据总和。
         * @type {number || null}
         */
        this.Sum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Metric = 'Metric' in params ? params.Metric : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new TimingDataItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }
        this.Max = 'Max' in params ? params.Max : null;
        this.Avg = 'Avg' in params ? params.Avg : null;
        this.Sum = 'Sum' in params ? params.Sum : null;

    }
}

/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询偏移量。默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目。默认值：20，最大值：1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-name<br>   按照【<strong>站点名称</strong>】进行过滤。<br>   类型：String<br>   必选：否</li><li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-xxx。<br>   类型：String<br>   必选：否</li><li>status<br>   按照【<strong>站点状态</strong>】进行过滤。<br>   类型：String<br>   必选：否</li><li>tag-key<br>   按照【<strong>标签键</strong>】进行过滤。<br>   类型：String<br>   必选：否</li><li>tag-value<br>   按照【<strong>标签值</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>模糊查询时仅支持过滤字段名为zone-name。
         * @type {Array.<AdvancedFilter> || null}
         */
        this.Filters = null;

        /**
         * 排序字段，取值有：
<li> type：接入类型；</li>
<li> area：加速区域；</li>
<li> create-time：创建时间；</li>
<li> zone-name：站点名称；</li>
<li> use-time：最近使用时间；</li>
<li> active-status：生效状态。</li>不填写使用默认值create-time。
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 排序方向，取值有：
<li> asc：从小到大排序；</li>
<li> desc：从大到小排序。</li>不填写使用默认值desc。
         * @type {string || null}
         */
        this.Direction = null;

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
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Direction = 'Direction' in params ? params.Direction : null;

    }
}

/**
 * 最新IP白名单列表相比于当前IP白名单列表的区别
 * @class
 */
class DiffIPWhitelist extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最新IP白名单列表。
         * @type {IPWhitelist || null}
         */
        this.LatestIPWhitelist = null;

        /**
         * 最新IP白名单列表相比于当前IP白名单列表，新增部分。
         * @type {IPWhitelist || null}
         */
        this.AddedIPWhitelist = null;

        /**
         * 最新IP白名单列表相比于当前IP白名单列表，删减部分。
         * @type {IPWhitelist || null}
         */
        this.RemovedIPWhitelist = null;

        /**
         * 最新IP白名单列表相比于当前IP白名单列表，不变部分。
         * @type {IPWhitelist || null}
         */
        this.NoChangeIPWhitelist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LatestIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.LatestIPWhitelist)
            this.LatestIPWhitelist = obj;
        }

        if (params.AddedIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.AddedIPWhitelist)
            this.AddedIPWhitelist = obj;
        }

        if (params.RemovedIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.RemovedIPWhitelist)
            this.RemovedIPWhitelist = obj;
        }

        if (params.NoChangeIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.NoChangeIPWhitelist)
            this.NoChangeIPWhitelist = obj;
        }

    }
}

/**
 * DescribeLogTopicTasks请求参数结构体
 * @class
 */
class DescribeLogTopicTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 分页查询的限制数目，默认值为20，最大查询条目为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateCredential请求参数结构体
 * @class
 */
class CreateCredentialRequest extends  AbstractModel {
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
 * ModifyRule请求参数结构体
 * @class
 */
class ModifyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 规则名称，字符串名称长度 1~255。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则内容。
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

        /**
         * 规则 ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则状态，取值有：
<li> enable: 启用； </li>
<li> disable: 未启用。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 规则标签。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * 源站组记录
 * @class
 */
class OriginRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站记录值，不包含端口信息，可以为：IPv4，IPv6，域名格式。
         * @type {string || null}
         */
        this.Record = null;

        /**
         * 源站记录ID。
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 源站端口，取值范围：[1-65535]。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 当源站配置类型ConfigurationType=weight时，表示权重。
不配置权重信息时，所有源站组记录统一填写为0或者不填写，表示多个源站轮询回源。
配置权重信息时，取值为[1-100]，多个源站权重总和应为100，表示多个源站按照权重回源。
当源站配置类型ConfigurationType=proto时，表示权重。
不配置权重信息时，所有源站组记录统一填写为0或者不填写，表示多个源站轮询回源。
配置权重信息时，取值为[1-100]，源站组内Proto相同的多个源站权重总和应为100，表示多个源站按照权重回源。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 当源站配置类型ConfigurationType=proto时，表示源站的协议类型，将按照客户端请求协议回到相应的源站，取值有：
<li>http：HTTP协议源站；</li>
<li>https：HTTPS协议源站。</li>
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 当源站配置类型ConfigurationType=area时，表示区域，为空表示全部地区。取值为iso-3166中alpha-2编码或者大洲区域代码。大洲区域代码取值为：
<li>Asia：亚洲；</li>
<li>Europe：欧洲；</li>
<li>Africa：非洲；</li>
<li>Oceania：大洋洲；</li>
<li>Americas：美洲。</li>源站组记录中，至少需要有一项为全部地区。
         * @type {Array.<string> || null}
         */
        this.Area = null;

        /**
         * 当源站类型OriginType=third_part时有效
是否私有鉴权，取值有：
<li>true：使用私有鉴权；</li>
<li>false：不使用私有鉴权。</li>不填写，默认值为：false。
         * @type {boolean || null}
         */
        this.Private = null;

        /**
         * 当源站类型Private=true时有效，表示私有鉴权使用参数。
         * @type {Array.<PrivateParameter> || null}
         */
        this.PrivateParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Record = 'Record' in params ? params.Record : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Private = 'Private' in params ? params.Private : null;

        if (params.PrivateParameters) {
            this.PrivateParameters = new Array();
            for (let z in params.PrivateParameters) {
                let obj = new PrivateParameter();
                obj.deserialize(params.PrivateParameters[z]);
                this.PrivateParameters.push(obj);
            }
        }

    }
}

/**
 * DescribePrefetchTasks返回参数结构体
 * @class
 */
class DescribePrefetchTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该查询条件总共条目数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务结果列表。
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebManagedRulesHitRuleDetail请求参数结构体
 * @class
 */
class DescribeWebManagedRulesHitRuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 子域名列表，不填默认选择全部全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天 。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 筛选条件，key可选的值有：
<li>action ：执行动作 。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 分页查询的限制数目，默认值为20，最大查询条目为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询，支持模糊查询。例如过滤ID、名称、状态等。
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class AdvancedFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否启用模糊查询。
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * DeleteApplicationProxy请求参数结构体
 * @class
 */
class DeleteApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID。
         * @type {string || null}
         */
        this.ProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * 加速域名源站信息。
 * @class
 */
class OriginDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站类型，取值有：
<li>IP_DOMAIN：IPV4、IPV6或域名类型源站；</li>
<li>COS：COS源。</li>
<li>ORIGIN_GROUP：源站组类型源站。</li>
<li>AWS_S3：AWS S3对象存储源站。</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站地址，当OriginType参数指定为ORIGIN_GROUP时，该参数填写源站组ID，其他情况下填写源站地址。
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * 备用源站组ID，该参数在OriginType参数指定为ORIGIN_GROUP时生效，为空表示不使用备用源站。
         * @type {string || null}
         */
        this.BackupOrigin = null;

        /**
         * 主源源站组名称，当OriginType参数指定为ORIGIN_GROUP时该参数生效。
         * @type {string || null}
         */
        this.OriginGroupName = null;

        /**
         * 备用源站源站组名称，当OriginType参数指定为ORIGIN_GROUP，且用户指定了被用源站时该参数生效。
         * @type {string || null}
         */
        this.BackOriginGroupName = null;

        /**
         * 指定是否允许访问私有对象存储源站。当源站类型OriginType=COS或AWS_S3时有效 取值有：
<li>on：使用私有鉴权；</li>
<li>off：不使用私有鉴权。</li>
不填写，默认值为off。
         * @type {string || null}
         */
        this.PrivateAccess = null;

        /**
         * 私有鉴权使用参数，当源站类型PrivateAccess=on时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrivateParameter> || null}
         */
        this.PrivateParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.BackupOrigin = 'BackupOrigin' in params ? params.BackupOrigin : null;
        this.OriginGroupName = 'OriginGroupName' in params ? params.OriginGroupName : null;
        this.BackOriginGroupName = 'BackOriginGroupName' in params ? params.BackOriginGroupName : null;
        this.PrivateAccess = 'PrivateAccess' in params ? params.PrivateAccess : null;

        if (params.PrivateParameters) {
            this.PrivateParameters = new Array();
            for (let z in params.PrivateParameters) {
                let obj = new PrivateParameter();
                obj.deserialize(params.PrivateParameters[z]);
                this.PrivateParameters.push(obj);
            }
        }

    }
}

/**
 * DescribeDDoSAttackData返回参数结构体
 * @class
 */
class DescribeDDoSAttackDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * DDoS攻击数据内容列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecEntry> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityWafGroupPolicy请求参数结构体
 * @class
 */
class ModifySecurityWafGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点Id。当使用ZoneId和Entity时可不填写TemplateId，否则必须填写TemplateId。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名。当使用ZoneId和Entity时可不填写TemplateId，否则必须填写TemplateId。
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * 总开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>不填默认为上次的配置。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 规则等级，取值有：
<li> loose：宽松；</li>
<li> normal：正常；</li>
<li> strict：严格；</li>
<li> stricter：超严格；</li>
<li> custom：自定义。</li>不填默认为上次的配置。
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 处置方式，取值有：
<li> block：阻断；</li>
<li> observe：观察。</li>不填默认为上次的配置。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 托管规则。不填默认为上次的配置。
         * @type {WafRule || null}
         */
        this.WafRules = null;

        /**
         * AI引擎模式。不填默认为上次的配置。
         * @type {AiRule || null}
         */
        this.AiRule = null;

        /**
         * 托管规则等级组。不填默认为上次的配置。
         * @type {Array.<WafGroup> || null}
         */
        this.WafGroups = null;

        /**
         * 模板Id。当使用模板Id时可不填ZoneId和Entity，否则必须填写ZoneId和Entity。
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.WafRules) {
            let obj = new WafRule();
            obj.deserialize(params.WafRules)
            this.WafRules = obj;
        }

        if (params.AiRule) {
            let obj = new AiRule();
            obj.deserialize(params.AiRule)
            this.AiRule = obj;
        }

        if (params.WafGroups) {
            this.WafGroups = new Array();
            for (let z in params.WafGroups) {
                let obj = new WafGroup();
                obj.deserialize(params.WafGroups[z]);
                this.WafGroups.push(obj);
            }
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeZoneSetting请求参数结构体
 * @class
 */
class DescribeZoneSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeClientRuleList返回参数结构体
 * @class
 */
class DescribeClientRuleListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 封禁客户端数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClientRule> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new ClientRule();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySecurityPolicy请求参数结构体
 * @class
 */
class ModifySecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点Id。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 安全配置。
         * @type {SecurityConfig || null}
         */
        this.SecurityConfig = null;

        /**
         * 子域名/应用名。当使用Entity时可不填写TemplateId，否则必须填写TemplateId。
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * 模板策略id。当使用模板Id时可不填Entity，否则必须填写Entity。
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.SecurityConfig) {
            let obj = new SecurityConfig();
            obj.deserialize(params.SecurityConfig)
            this.SecurityConfig = obj;
        }
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * 无
 * @class
 */
class Waf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Waf开关，取值为：
<li> on：开启；</li>
<li> off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 策略ID。
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * ModifyApplicationProxyRuleStatus返回参数结构体
 * @class
 */
class ModifyApplicationProxyRuleStatusResponse extends  AbstractModel {
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
 * DescribeClientRuleList请求参数结构体
 * @class
 */
class DescribeClientRuleListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的站点ID.
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 查询的子域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 规则类型，取值有：
<li>acl：自定义规则；</li>
<li>rate：限速规则。</li>不填表示查询所有规则。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 规则ID。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 客户端IP。
         * @type {string || null}
         */
        this.SourceClientIp = null;

        /**
         * 分页查询的限制数目，默认值为20，最大查询条目为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.SourceClientIp = 'SourceClientIp' in params ? params.SourceClientIp : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifyZoneSetting请求参数结构体
 * @class
 */
class ModifyZoneSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待变更的站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 缓存过期时间配置。
不填写表示保持原有配置。
         * @type {CacheConfig || null}
         */
        this.CacheConfig = null;

        /**
         * 节点缓存键配置。
不填写表示保持原有配置。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 浏览器缓存配置。
不填写表示保持原有配置。
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * 离线缓存配置。
不填写表示保持原有配置。
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * Quic访问配置。
不填写表示保持原有配置。
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * Post请求传输配置。
不填写表示保持原有配置。
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * 智能压缩配置。
不填写表示保持原有配置。
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * Http2回源配置。
不填写表示保持原有配置。
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * 访问协议强制Https跳转配置。
不填写表示保持原有配置。
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * Https加速配置。
不填写表示保持原有配置。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 源站配置。
不填写表示保持原有配置。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 智能加速配置。
不填写表示保持原有配置。
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * WebSocket配置。
不填写表示保持原有配置。
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * 客户端IP回源请求头配置。
不填写表示保持原有配置。
         * @type {ClientIpHeader || null}
         */
        this.ClientIpHeader = null;

        /**
         * 缓存预刷新配置。
不填写表示保持原有配置。
         * @type {CachePrefresh || null}
         */
        this.CachePrefresh = null;

        /**
         * Ipv6访问配置。
不填写表示保持原有配置。
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * 回源时是否携带客户端IP所属地域信息的配置。
不填写表示保持原有配置。
         * @type {ClientIpCountry || null}
         */
        this.ClientIpCountry = null;

        /**
         * Grpc协议支持配置。
不填写表示保持原有配置。
         * @type {Grpc || null}
         */
        this.Grpc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.CacheConfig) {
            let obj = new CacheConfig();
            obj.deserialize(params.CacheConfig)
            this.CacheConfig = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

        if (params.PostMaxSize) {
            let obj = new PostMaxSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.UpstreamHttp2) {
            let obj = new UpstreamHttp2();
            obj.deserialize(params.UpstreamHttp2)
            this.UpstreamHttp2 = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.ClientIpHeader) {
            let obj = new ClientIpHeader();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.ClientIpCountry) {
            let obj = new ClientIpCountry();
            obj.deserialize(params.ClientIpCountry)
            this.ClientIpCountry = obj;
        }

        if (params.Grpc) {
            let obj = new Grpc();
            obj.deserialize(params.Grpc)
            this.Grpc = obj;
        }

    }
}

/**
 * 规则引擎条件 HTTP 请求/响应头操作动作参数。
 * @class
 */
class RuleRewriteActionParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 功能参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。现在只有三种取值：
<li> add：添加 HTTP 头部；</li>
<li> set：重写 HTTP 头部；</li>
<li> del：删除 HTTP 头部。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 参数名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * CreateApplicationProxy返回参数结构体
 * @class
 */
class CreateApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增的四层代理应用ID。
         * @type {string || null}
         */
        this.ProxyId = null;

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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyOriginGroup返回参数结构体
 * @class
 */
class ModifyOriginGroupResponse extends  AbstractModel {
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
 * DeleteAccelerationDomains请求参数结构体
 * @class
 */
class DeleteAccelerationDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速域名所属站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 需要删除的加速域名ID列表。
         * @type {Array.<string> || null}
         */
        this.DomainNames = null;

        /**
         * 是否强制删除。当域名存在关联资源（如马甲域名、流量调度功能）时，是否强制删除该域名，取值有：
<li> true：删除该域名及所有关联资源；</li>
<li> false：当该加速域名存在关联资源时，不允许删除。</li>不填写，默认值为：false。
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainNames = 'DomainNames' in params ? params.DomainNames : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * 例外规则的生效范围。
 * @class
 */
class ExceptUserRuleScope extends  AbstractModel {
    constructor(){
        super();

        /**
         * 例外规则类型。其中complete模式代表全量数据进行例外，partial模式代表可选择指定模块指定字段进行例外，该字段取值有：
<li>complete：完全跳过模式；</li>
<li>partial：部分跳过模式。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 生效的模块，该字段取值有：
<li>waf：托管规则；</li>
<li>cc：速率限制规则；</li>
<li>bot：Bot防护。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Modules = null;

        /**
         * 跳过部分规则ID的例外规则详情。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PartialModule> || null}
         */
        this.PartialModules = null;

        /**
         * 跳过具体字段不去扫描的例外规则详情。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SkipCondition> || null}
         */
        this.SkipConditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Modules = 'Modules' in params ? params.Modules : null;

        if (params.PartialModules) {
            this.PartialModules = new Array();
            for (let z in params.PartialModules) {
                let obj = new PartialModule();
                obj.deserialize(params.PartialModules[z]);
                this.PartialModules.push(obj);
            }
        }

        if (params.SkipConditions) {
            this.SkipConditions = new Array();
            for (let z in params.SkipConditions) {
                let obj = new SkipCondition();
                obj.deserialize(params.SkipConditions[z]);
                this.SkipConditions.push(obj);
            }
        }

    }
}

/**
 * ModifyAliasDomain请求参数结构体
 * @class
 */
class ModifyAliasDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 别称域名名称。
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 目标域名名称。
         * @type {string || null}
         */
        this.TargetName = null;

        /**
         * 证书配置，取值有：
<li> none：不配置；</li>
<li> hosting：SSL托管证书；</li>
<li> apply：申请免费证书。</li>不填写保持原有配置。
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * 当 CertType 取值为 hosting 时填入相应证书 ID。
         * @type {Array.<string> || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * DescribeAvailablePlans请求参数结构体
 * @class
 */
class DescribeAvailablePlansRequest extends  AbstractModel {
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
 * 拨测结果信息
 * @class
 */
class SpeedTestingInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态，取值有：
<li> 200：任务完成;</li>
<li> 100：任务进行中；</li>
<li> 503: 任务失败。</li>
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 拨测任务 ID。
         * @type {string || null}
         */
        this.TestId = null;

        /**
         * 拨测任务配置。
         * @type {SpeedTestingConfig || null}
         */
        this.SpeedTestingConfig = null;

        /**
         * 拨测任务统计结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SpeedTestingStatistics || null}
         */
        this.SpeedTestingStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.TestId = 'TestId' in params ? params.TestId : null;

        if (params.SpeedTestingConfig) {
            let obj = new SpeedTestingConfig();
            obj.deserialize(params.SpeedTestingConfig)
            this.SpeedTestingConfig = obj;
        }

        if (params.SpeedTestingStatistics) {
            let obj = new SpeedTestingStatistics();
            obj.deserialize(params.SpeedTestingStatistics)
            this.SpeedTestingStatistics = obj;
        }

    }
}

/**
 * 拨测分地域统计数据
 * @class
 */
class DistrictStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * ISO 3166-2 国家/地区简写，详情请参考[ISO 3166-2](https://zh.m.wikipedia.org/zh-hans/ISO_3166-2)。
         * @type {string || null}
         */
        this.Alpha2 = null;

        /**
         * 整体拨测用时，单位ms。
         * @type {number || null}
         */
        this.LoadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Alpha2 = 'Alpha2' in params ? params.Alpha2 : null;
        this.LoadTime = 'LoadTime' in params ? params.LoadTime : null;

    }
}

/**
 * 加速域名源站信息。
 * @class
 */
class OriginInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站类型，取值有：
<li>IP_DOMAIN：IPV4、IPV6或域名类型源站；</li>
<li>COS：COS源。</li>
<li>ORIGIN_GROUP：源站组类型源站。</li>
<li>AWS_S3：AWS S3对象存储源站。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站地址，当OriginType参数指定为ORIGIN_GROUP时，该参数填写源站组ID，其他情况下填写源站地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Origin = null;

        /**
         * 备用源站组ID，该参数在OriginType参数指定为ORIGIN_GROUP时生效，为空表示不使用备用源站。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BackupOrigin = null;

        /**
         * 指定是否允许访问私有对象存储源站，当源站类型OriginType=COS或AWS_S3时有效，取值有：
<li>on：使用私有鉴权；</li>
<li>off：不使用私有鉴权。</li>不填写，默认值为：off。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateAccess = null;

        /**
         * 私有鉴权使用参数，当源站类型PrivateAccess=on时有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrivateParameter> || null}
         */
        this.PrivateParameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.Origin = 'Origin' in params ? params.Origin : null;
        this.BackupOrigin = 'BackupOrigin' in params ? params.BackupOrigin : null;
        this.PrivateAccess = 'PrivateAccess' in params ? params.PrivateAccess : null;

        if (params.PrivateParameters) {
            this.PrivateParameters = new Array();
            for (let z in params.PrivateParameters) {
                let obj = new PrivateParameter();
                obj.deserialize(params.PrivateParameters[z]);
                this.PrivateParameters.push(obj);
            }
        }

    }
}

/**
 * DescribeSingleL7AnalysisData请求参数结构体
 * @class
 */
class DescribeSingleL7AnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询的指标，取值有:
<li> l7Flow_singleIpRequest：独立IP请求数。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点集合。
若不填写，默认选择全部站点，且最多只能查询近30天的数据；
若填写，则可查询站点绑定套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 过滤条件，详细的过滤条件Key值如下：
<li>country<br>   按照【<strong>国家/地区</strong>】进行过滤，国家/地区遵循<a href="https://zh.wikipedia.org/wiki/ISO_3166-1">ISO 3166</a>规范。</li>
<li>domain<br>   按照【<strong>子域名</strong>】进行过滤，子域名形如： test.example.com。</li>
<li>protocol<br>   按照【<strong>HTTP协议版本</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP/1.0：HTTP 1.0；<br>   HTTP/1.1：HTTP 1.1；<br>   HTTP/2.0：HTTP 2.0；<br>   HTTP/3.0：HTTP 3.0；<br>   WebSocket：WebSocket。</li>
<li>socket<br>   按照【<strong>HTTP协议类型</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP：HTTP 协议；<br>   HTTPS：HTTPS协议；<br>   QUIC：QUIC协议。</li>
<li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。</li>
<li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天;。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据；</li>
<li>global：全球数据。</li>不填默认取值为global。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifySecurityPolicy返回参数结构体
 * @class
 */
class ModifySecurityPolicyResponse extends  AbstractModel {
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
 * DescribeHostsSetting返回参数结构体
 * @class
 */
class DescribeHostsSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名列表。
         * @type {Array.<DetailHost> || null}
         */
        this.DetailHosts = null;

        /**
         * 域名数量。
         * @type {number || null}
         */
        this.TotalNumber = null;

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

        if (params.DetailHosts) {
            this.DetailHosts = new Array();
            for (let z in params.DetailHosts) {
                let obj = new DetailHost();
                obj.deserialize(params.DetailHosts[z]);
                this.DetailHosts.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyZoneStatus返回参数结构体
 * @class
 */
class ModifyZoneStatusResponse extends  AbstractModel {
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
 * ModifyZone返回参数结构体
 * @class
 */
class ModifyZoneResponse extends  AbstractModel {
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
 * Waf规则
 * @class
 */
class WafRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 托管规则开关，取值有：
<li> on：开启；</li>
<li> off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 黑名单，ID参考接口 [DescribeSecurityGroupManagedRules](https://tcloud4api.woa.com/document/product/1657/80807?!preview&!document=1)。
         * @type {Array.<number> || null}
         */
        this.BlockRuleIDs = null;

        /**
         * 观察模式ID列表，将规则ID加入本参数列表中代表该ID使用观察模式生效，即该规则ID进入观察模式。ID参考接口 [DescribeSecurityGroupManagedRules](https://tcloud4api.woa.com/document/product/1657/80807?!preview&!document=1)。
         * @type {Array.<number> || null}
         */
        this.ObserveRuleIDs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockRuleIDs = 'BlockRuleIDs' in params ? params.BlockRuleIDs : null;
        this.ObserveRuleIDs = 'ObserveRuleIDs' in params ? params.ObserveRuleIDs : null;

    }
}

/**
 * ModifyZone请求参数结构体
 * @class
 */
class ModifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点接入方式，取值有：
<li> full：NS 接入；</li>
<li> partial：CNAME 接入。</li>不填写保持原有配置。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 自定义站点信息，以替代系统默认分配的名称服务器。不填写保持原有配置。
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

        /**
         * 站点别名。数字、英文、-和_组合，限制20个字符。
         * @type {string || null}
         */
        this.AliasZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }
        this.AliasZoneName = 'AliasZoneName' in params ? params.AliasZoneName : null;

    }
}

/**
 * ModifyApplicationProxyStatus返回参数结构体
 * @class
 */
class ModifyApplicationProxyStatusResponse extends  AbstractModel {
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
 * DeleteZone返回参数结构体
 * @class
 */
class DeleteZoneResponse extends  AbstractModel {
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
 * CreateRule返回参数结构体
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID。
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIdentifications返回参数结构体
 * @class
 */
class DescribeIdentificationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的站点个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 站点验证信息列表。
         * @type {Array.<Identification> || null}
         */
        this.Identifications = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Identifications) {
            this.Identifications = new Array();
            for (let z in params.Identifications) {
                let obj = new Identification();
                obj.deserialize(params.Identifications[z]);
                this.Identifications.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePurgeTask返回参数结构体
 * @class
 */
class CreatePurgeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 失败的任务列表及原因。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FailReason> || null}
         */
        this.FailedList = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new FailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteApplicationProxyRule返回参数结构体
 * @class
 */
class DeleteApplicationProxyRuleResponse extends  AbstractModel {
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
 * ReclaimAliasDomain请求参数结构体
 * @class
 */
class ReclaimAliasDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * DescribeRules返回参数结构体
 * @class
 */
class DescribeRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 规则列表，按规则执行顺序从先往后排序。
         * @type {Array.<RuleItem> || null}
         */
        this.RuleItems = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.RuleItems) {
            this.RuleItems = new Array();
            for (let z in params.RuleItems) {
                let obj = new RuleItem();
                obj.deserialize(params.RuleItems[z]);
                this.RuleItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 时序数据信息
 * @class
 */
class TimingDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询维度值。
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * 详细时序数据。
         * @type {Array.<TimingTypeValue> || null}
         */
        this.TypeValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeKey = 'TypeKey' in params ? params.TypeKey : null;

        if (params.TypeValue) {
            this.TypeValue = new Array();
            for (let z in params.TypeValue) {
                let obj = new TimingTypeValue();
                obj.deserialize(params.TypeValue[z]);
                this.TypeValue.push(obj);
            }
        }

    }
}

/**
 * 源站防护信息
 * @class
 */
class OriginProtectionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 域名列表。
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * 代理ID列表。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * 当前版本的IP白名单。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IPWhitelist || null}
         */
        this.CurrentIPWhitelist = null;

        /**
         * 该站点是否需要更新源站白名单，取值有：
<li>true ：需要更新IP白名单 ；</li>
<li>false ：无需更新IP白名单。</li>
         * @type {boolean || null}
         */
        this.NeedUpdate = null;

        /**
         * 源站防护状态，取值有：
<li>online ：源站防护启用中 ；</li>
<li>offline ：源站防护已停用 ；</li>
<li>nonactivate ：源站防护未激活，仅在从未使用过源站防护功能的站点调用中返回。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 站点套餐是否支持源站防护，取值有：
<li>true ：支持 ；</li>
<li>false ：不支持。</li>
         * @type {boolean || null}
         */
        this.PlanSupport = null;

        /**
         * 最新IP白名单与当前IP白名单的对比。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiffIPWhitelist || null}
         */
        this.DiffIPWhitelist = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

        if (params.CurrentIPWhitelist) {
            let obj = new IPWhitelist();
            obj.deserialize(params.CurrentIPWhitelist)
            this.CurrentIPWhitelist = obj;
        }
        this.NeedUpdate = 'NeedUpdate' in params ? params.NeedUpdate : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PlanSupport = 'PlanSupport' in params ? params.PlanSupport : null;

        if (params.DiffIPWhitelist) {
            let obj = new DiffIPWhitelist();
            obj.deserialize(params.DiffIPWhitelist)
            this.DiffIPWhitelist = obj;
        }

    }
}

/**
 * DescribeOriginProtection返回参数结构体
 * @class
 */
class DescribeOriginProtectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站防护信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OriginProtectionInfo> || null}
         */
        this.OriginProtectionInfo = null;

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

        if (params.OriginProtectionInfo) {
            this.OriginProtectionInfo = new Array();
            for (let z in params.OriginProtectionInfo) {
                let obj = new OriginProtectionInfo();
                obj.deserialize(params.OriginProtectionInfo[z]);
                this.OriginProtectionInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindZoneToPlan返回参数结构体
 * @class
 */
class BindZoneToPlanResponse extends  AbstractModel {
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
 * 例外规则，用于配置需要跳过特定场景的规则
 * @class
 */
class ExceptConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 例外规则详情。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExceptUserRule> || null}
         */
        this.ExceptUserRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.ExceptUserRules) {
            this.ExceptUserRules = new Array();
            for (let z in params.ExceptUserRules) {
                let obj = new ExceptUserRule();
                obj.deserialize(params.ExceptUserRules[z]);
                this.ExceptUserRules.push(obj);
            }
        }

    }
}

/**
 * DeleteOriginGroup请求参数结构体
 * @class
 */
class DeleteOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 源站组ID。
         * @type {string || null}
         */
        this.OriginGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;

    }
}

/**
 * 别称域名信息。
 * @class
 */
class AliasDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 别称域名名称。
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 目标域名名称。
         * @type {string || null}
         */
        this.TargetName = null;

        /**
         * 别称域名状态，取值有：
<li> active：已生效； </li>
<li> pending：部署中；</li>
<li> conflict：被找回。 </li>
<li> stop：已停用；</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 封禁模式，取值有：
<li> 0：未封禁； </li>
<li> 11：合规封禁；</li>
<li> 14：未备案封禁。</li>
         * @type {number || null}
         */
        this.ForbidMode = null;

        /**
         * 别称域名创建时间。
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 别称域名修改时间。
         * @type {string || null}
         */
        this.ModifiedOn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ForbidMode = 'ForbidMode' in params ? params.ForbidMode : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;

    }
}

/**
 * 精准防护条件
 * @class
 */
class AclCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配字段，取值有：
<li>host：请求域名；</li>
<li>sip：客户端IP；</li>
<li>ua：User-Agent；</li>
<li>cookie：会话 Cookie；</li>
<li>cgi：CGI 脚本；</li>
<li>xff：XFF 扩展头部；</li>
<li>url：请求 URL；</li>
<li>accept：请求内容类型；</li>
<li>method：请求方式；</li>
<li>header：请求头部；</li>
<li>app_proto：应用层协议；</li>
<li>sip_proto：网络层协议。</li>
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * 匹配字符串。当 MatchFrom 为 header 时，可以填入 header 的 key 作为参数。
         * @type {string || null}
         */
        this.MatchParam = null;

        /**
         * 匹配关系，取值有：
<li>equal：字符串等于；</li>
<li>not_equal：数值不等于；</li>
<li>include：字符包含；</li>
<li>not_include：字符不包含；</li>
<li>match：ip匹配；</li>
<li>not_match：ip不匹配；</li>
<li>include_area：地域包含；</li>
<li>is_empty：存在字段但值为空；</li>
<li>not_exists：不存在关键字段；</li>
<li>regexp：正则匹配；</li>
<li>len_gt：数值大于；</li>
<li>len_lt：数值小于；</li>
<li>len_eq：数值等于；</li>
<li>match_prefix：前缀匹配；</li>
<li>match_suffix：后缀匹配；</li>
<li>wildcard：通配符。</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 匹配内容。
         * @type {string || null}
         */
        this.MatchContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.MatchParam = 'MatchParam' in params ? params.MatchParam : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;

    }
}

/**
 * 速率限制规则
 * @class
 */
class RateLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 速率限制-用户规则列表。如果为null，默认使用历史配置。
         * @type {Array.<RateLimitUserRule> || null}
         */
        this.RateLimitUserRules = null;

        /**
         * 速率限制模板功能。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RateLimitTemplate || null}
         */
        this.RateLimitTemplate = null;

        /**
         * 智能客户端过滤。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RateLimitIntelligence || null}
         */
        this.RateLimitIntelligence = null;

        /**
         * 速率限制-托管定制规则。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RateLimitUserRule> || null}
         */
        this.RateLimitCustomizes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.RateLimitUserRules) {
            this.RateLimitUserRules = new Array();
            for (let z in params.RateLimitUserRules) {
                let obj = new RateLimitUserRule();
                obj.deserialize(params.RateLimitUserRules[z]);
                this.RateLimitUserRules.push(obj);
            }
        }

        if (params.RateLimitTemplate) {
            let obj = new RateLimitTemplate();
            obj.deserialize(params.RateLimitTemplate)
            this.RateLimitTemplate = obj;
        }

        if (params.RateLimitIntelligence) {
            let obj = new RateLimitIntelligence();
            obj.deserialize(params.RateLimitIntelligence)
            this.RateLimitIntelligence = obj;
        }

        if (params.RateLimitCustomizes) {
            this.RateLimitCustomizes = new Array();
            for (let z in params.RateLimitCustomizes) {
                let obj = new RateLimitUserRule();
                obj.deserialize(params.RateLimitCustomizes[z]);
                this.RateLimitCustomizes.push(obj);
            }
        }

    }
}

/**
 * DescribeAliasDomains请求参数结构体
 * @class
 */
class DescribeAliasDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 分页查询偏移量。默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目。默认值：20，最大值：1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>target-name<br>   按照【<strong>目标域名名称</strong>】进行过滤。<br>   类型：String<br>   必选：否</li><li>alias-name<br>   按照【<strong>别称域名名称</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>模糊查询时仅支持过滤字段名为alias-name。
         * @type {Array.<AdvancedFilter> || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyApplicationProxyStatus请求参数结构体
 * @class
 */
class ModifyApplicationProxyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 状态，取值有：
<li>offline: 停用；</li>
<li>online: 启用。</li>
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 例外规则的跳过匹配条件，即在例外时根据本匹配条件，略过指定字段及内容。
 * @class
 */
class SkipCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 例外跳过类型，取值为：
<li>header_fields：HTTP请求Header；</li>
<li>cookie：HTTP请求Cookie；</li>
<li>query_string：HTTP请求URL中的Query参数；</li>
<li>uri：HTTP请求URI；</li>
<li>body_raw：HTTP请求Body；</li>
<li>body_json： JSON格式的HTTP Body。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 选择跳过的字段，取值为：
<li>args：uri 下选择 query 参数: ?name1=jack&age=12；</li>
<li>path：uri 下选择部分路径：/path/to/resource.jpg；</li>
<li>full：uri 下选择完整路径：example.com/path/to/resource.jpg?name1=jack&age=12；</li>
<li>upload_filename：分段文件名，即分段传输文件时；</li>
<li>keys：所有的Key；</li>
<li>values：匹配Key对应的值；</li>
<li>key_value：匹配Key及匹配Value。</li>
         * @type {string || null}
         */
        this.Selector = null;

        /**
         * 匹配Key所使用的匹配方式，取值为：
<li>equal：精准匹配，等于；</li>
<li>wildcard：通配符匹配，支持 * 通配。</li>
         * @type {string || null}
         */
        this.MatchFromType = null;

        /**
         * 匹配Key的值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MatchFrom = null;

        /**
         * 匹配Content所使用的匹配方式，取值为：
<li>equal：精准匹配，等于；</li>
<li>wildcard：通配符匹配，支持 * 通配。</li>
         * @type {string || null}
         */
        this.MatchContentType = null;

        /**
         * 匹配Value的值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MatchContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Selector = 'Selector' in params ? params.Selector : null;
        this.MatchFromType = 'MatchFromType' in params ? params.MatchFromType : null;
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.MatchContentType = 'MatchContentType' in params ? params.MatchContentType : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;

    }
}

/**
 * IP黑白名单详细规则
 * @class
 */
class IpTableRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 动作，取值有：
<li> drop：拦截；</li>
<li> trans：放行；</li>
<li> monitor：观察。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 根据类型匹配，取值有：
<li>ip：对ip进行匹配；</li>
<li>area：对ip所属地区匹配。</li>
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * 规则的匹配方式，默认为空代表等于。
取值有：
<li> is_emty：配置为空；</li>
<li> not_exists：配置为不存在；</li>
<li> include：包含；</li>
<li> not_include：不包含；</li>
<li> equal：等于；</li>
<li> not_equal：不等于。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 规则id。仅出参使用。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 更新时间。仅出参使用。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 规则启用状态，当返回为null时，为启用。取值有：
<li> on：启用；</li>
<li> off：未启用。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 规则名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 匹配内容。当 Operator为is_emty 或not_exists时，此值允许为空。
         * @type {string || null}
         */
        this.MatchContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;

    }
}

/**
 * 离线日志详细信息
 * @class
 */
class L7OfflineLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志打包开始时间。
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * 子域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 原始大小，单位byte。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 下载地址。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 日志数据包名。
         * @type {string || null}
         */
        this.LogPacketName = null;

        /**
         * 加速区域，取值有：
<li>mainland：中国大陆境内; </li>
<li>overseas：全球（不含中国大陆）。</li>
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
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LogPacketName = 'LogPacketName' in params ? params.LogPacketName : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifyHostsCertificate请求参数结构体
 * @class
 */
class ModifyHostsCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 本次变更的域名列表。
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * 证书信息, 只需要传入 CertId 即可, 如果为空, 则使用默认证书。
         * @type {Array.<ServerCertInfo> || null}
         */
        this.ServerCertInfo = null;

        /**
         * 托管类型，取值有：
<li>apply：托管EO；</li>
<li>none：不托管EO；</li>不填，默认取值为apply。
         * @type {string || null}
         */
        this.ApplyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

        if (params.ServerCertInfo) {
            this.ServerCertInfo = new Array();
            for (let z in params.ServerCertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.ServerCertInfo[z]);
                this.ServerCertInfo.push(obj);
            }
        }
        this.ApplyType = 'ApplyType' in params ? params.ApplyType : null;

    }
}

/**
 * 应用代理规则
 * @class
 */
class ApplicationProxyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议，取值有：
<li>TCP：TCP协议；</li>
<li>UDP：UDP协议。</li>
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 端口，支持格式：
<li>单个端口，如：80。</li>
<li>端口段，如：81-82。表示81，82两个端口。</li>
注意：一条规则最多可填写20个端口。
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * 源站类型，取值有：
<li>custom：手动添加；</li>
<li>origins：源站组。</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站信息：
<li>当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；</li>
<li>当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。</li>
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * 规则ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 状态，取值有：
<li>online：启用；</li>
<li>offline：停用；</li>
<li>progress：部署中；</li>
<li>stopping：停用中；</li>
<li>fail：部署失败/停用失败。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 传递客户端IP，取值有：
<li>TOA：TOA（仅Proto=TCP时可选）；</li>
<li>PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；</li>
<li>PPV2：Proxy Protocol传递，协议版本V2；</li>
<li>OFF：不传递。</li>默认值：OFF。
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 是否开启会话保持，取值有：
<li>true：开启；</li>
<li>false：关闭。</li>默认值：false。
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 源站端口，支持格式：
<li>单端口，如：80。</li>
<li>端口段：81-82，表示81，82两个端口。</li>
         * @type {string || null}
         */
        this.OriginPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.OriginPort = 'OriginPort' in params ? params.OriginPort : null;

    }
}

/**
 * 智能加速配置
 * @class
 */
class SmartRouting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能加速配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeDnsData返回参数结构体
 * @class
 */
class DescribeDnsDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计数据。
         * @type {Array.<DnsData> || null}
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
                let obj = new DnsData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAccelerationDomainStatuses返回参数结构体
 * @class
 */
class ModifyAccelerationDomainStatusesResponse extends  AbstractModel {
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
 * 站点信息
 * @class
 */
class Zone extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 站点当前使用的 NS 列表。
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 腾讯云分配的 NS 列表。
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * 站点状态，取值有：
<li> active：NS 已切换； </li>
<li> pending：NS 未切换；</li>
<li> moved：NS 已切走；</li>
<li> deactivated：被封禁。 </li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 站点接入方式，取值有
<li> full：NS 接入； </li>
<li> partial：CNAME 接入。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 站点是否关闭。
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * 是否开启 CNAME 加速，取值有：
<li> enabled：开启；</li>
<li> disabled：关闭。</li>
         * @type {string || null}
         */
        this.CnameSpeedUp = null;

        /**
         * CNAME 接入状态，取值有：
<li> finished：站点已验证；</li>
<li> pending：站点验证中。</li>
         * @type {string || null}
         */
        this.CnameStatus = null;

        /**
         * 资源标签列表。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 计费资源列表。
         * @type {Array.<Resource> || null}
         */
        this.Resources = null;

        /**
         * 站点创建时间。
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 站点修改时间。
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 站点接入地域，取值有：
<li> global：全球；</li>
<li> mainland：中国大陆；</li>
<li> overseas：境外区域。</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 用户自定义 NS 信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

        /**
         * 用户自定义 NS IP 信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VanityNameServersIps> || null}
         */
        this.VanityNameServersIps = null;

        /**
         * 展示状态，取值有：
<li> active：已启用；</li>
<li> inactive：未生效；</li>
<li> paused：已停用。</li>
         * @type {string || null}
         */
        this.ActiveStatus = null;

        /**
         * 站点别名。数字、英文、-和_组合，限制20个字符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AliasZoneName = null;

        /**
         * 是否伪站点，取值有：
<li> 0：非伪站点；</li>
<li> 1：伪站点。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsFake = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.CnameSpeedUp = 'CnameSpeedUp' in params ? params.CnameSpeedUp : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new Resource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }

        if (params.VanityNameServersIps) {
            this.VanityNameServersIps = new Array();
            for (let z in params.VanityNameServersIps) {
                let obj = new VanityNameServersIps();
                obj.deserialize(params.VanityNameServersIps[z]);
                this.VanityNameServersIps.push(obj);
            }
        }
        this.ActiveStatus = 'ActiveStatus' in params ? params.ActiveStatus : null;
        this.AliasZoneName = 'AliasZoneName' in params ? params.AliasZoneName : null;
        this.IsFake = 'IsFake' in params ? params.IsFake : null;

    }
}

/**
 * DescribeRulesSetting返回参数结构体
 * @class
 */
class DescribeRulesSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则引擎可应用匹配请求的设置列表及其详细建议配置信息。
         * @type {Array.<RulesSettingAction> || null}
         */
        this.Actions = null;

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

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new RulesSettingAction();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则引擎参数详情信息，特殊参数类型。
 * @class
 */
class RuleExtraParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名，取值有：
<li> Action：修改 HTTP 头部所需参数，RuleAction 选择 RewirteAction；</li>
<li> StatusCode：状态码相关功能所需参数，RuleAction 选择 CodeAction。</li>
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 参数值类型。
<li> CHOICE：参数值只能在 Values 中选择； </li>
<li> CUSTOM_NUM：参数值用户自定义，整型类型；</li>
<li> CUSTOM_STRING：参数值用户自定义，字符串类型。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 可选参数值。
注意：当 Id 的值为 StatusCode 时数组中的值为整型，填写参数值时请填写字符串的整型数值。
         * @type {Array.<string> || null}
         */
        this.Choices = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Choices = 'Choices' in params ? params.Choices : null;

    }
}

/**
 * 规则引擎可应用于匹配请求的设置列表及其详细信息
 * @class
 */
class RulesSettingAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 功能名称，取值有：
<li> 访问URL 重写（AccessUrlRedirect）；</li>
<li> 回源 URL 重写 （UpstreamUrlRedirect）；</li>
<li> 自定义错误页面
(ErrorPage)；</li>
<li> QUIC（QUIC）；</li>
<li> WebSocket （WebSocket）；</li>
<li> 视频拖拽（VideoSeek）；</li>
<li> Token 鉴权（Authentication）；</li>
<li> 自定义CacheKey（CacheKey）；</li>
<li> 节点缓存 TTL （Cache）；</li>
<li> 浏览器缓存 TTL（MaxAge）；</li>
<li> 离线缓存（OfflineCache）；</li>
<li> 智能加速（SmartRouting）；</li>
<li> 分片回源（RangeOriginPull）；</li>
<li> HTTP/2 回源（UpstreamHttp2）；</li>
<li> Host Header 重写（HostHeader）；</li>
<li> 强制 HTTPS（ForceRedirect）；</li>
<li> 回源 HTTPS（OriginPullProtocol）；</li>
<li> 缓存预刷新（CachePrefresh）；</li>
<li> 智能压缩（Compression）；</li>
<li> 修改 HTTP 请求头（RequestHeader）；</li>
<li> 修改HTTP响应头（ResponseHeader）;</li>
<li> 状态码缓存 TTL（StatusCodeCache）;</li>
<li> Hsts；</li>
<li> ClientIpHeader；</li>
<li> TlsVersion；</li>
<li> OcspStapling。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 参数信息。
         * @type {Array.<RulesProperties> || null}
         */
        this.Properties = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;

        if (params.Properties) {
            this.Properties = new Array();
            for (let z in params.Properties) {
                let obj = new RulesProperties();
                obj.deserialize(params.Properties[z]);
                this.Properties.push(obj);
            }
        }

    }
}

/**
 * 存储客户端请求IP的头部信息配置
 * @class
 */
class ClientIpHeader extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 回源时，存放客户端IP的请求头名称。
为空则使用默认值：X-Forwarded-IP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HeaderName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;

    }
}

/**
 * DescribeDDoSAttackTopData请求参数结构体
 * @class
 */
class DescribeDDoSAttackTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询的统计指标，取值有：
<li>ddos_attackFlux_protocol：按各协议的攻击流量排行；</li>
<li>ddos_attackPackageNum_protocol：按各协议的攻击包量排行；</li>
<li>ddos_attackNum_attackType：按各攻击类型的攻击数量排行；</li>
<li>ddos_attackNum_sregion：按攻击源地区的攻击数量排行；</li>
<li>ddos_attackFlux_sip：按攻击源IP的攻击数量排行；</li>
<li>ddos_attackFlux_sregion：按攻击源地区的攻击数量排行。</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 站点ID集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * DDoS策略组ID集合，不填默认选择全部策略ID。
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * 攻击类型，取值有：
<li>flood：洪泛攻击；</li>
<li>icmpFlood：icmp洪泛攻击；</li>
<li>all：所有的攻击类型。</li>不填默认为all，表示查询全部攻击类型。
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 协议类型，取值有：
<li>tcp：tcp协议；</li>
<li>udp：udp协议；</li>
<li>all：所有的协议类型。</li>不填默认为all，表示查询所有协议。
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 端口号。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * Quic配置项
 * @class
 */
class Quic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启Quic配置，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Ipv6访问配置
 * @class
 */
class Ipv6 extends  AbstractModel {
    constructor(){
        super();

        /**
         * Ipv6访问功能配置，取值有：
<li>on：开启Ipv6访问功能；</li>
<li>off：关闭Ipv6访问功能。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ModifyAccelerationDomain请求参数结构体
 * @class
 */
class ModifyAccelerationDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速域名所属站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 加速域名名称。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 源站信息。
         * @type {OriginInfo || null}
         */
        this.OriginInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

        if (params.OriginInfo) {
            let obj = new OriginInfo();
            obj.deserialize(params.OriginInfo)
            this.OriginInfo = obj;
        }

    }
}

/**
 * DescribeRules请求参数结构体
 * @class
 */
class DescribeRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>rule-id<br>   按照【<strong>规则ID</strong>】进行过滤。<br>   类型：string<br>   必选：否</li>
         * @type {Array.<Filter> || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 日志任务主题信息
 * @class
 */
class ClsLogTopicInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务名。
         * @type {string || null}
         */
        this.TaskName = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 日志集ID。
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * 日志主题ID。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 任务类型。
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * 任务主题保存时间。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 任务主题是否开启。
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 任务主题是否异常。
         * @type {string || null}
         */
        this.Deleted = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 推送目标地址,取值有：
<li>cls: 推送到cls；</li>
<li>custom_enpoint: 自定义推送地址。</li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 日志集所属地区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogSetRegion = null;

        /**
         * 站点id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 推送任务类型，取值有：
<li>cls：推送到cls；</li>
<li>custom_endpoint：推送到自定义接口。</li>
         * @type {string || null}
         */
        this.LogSetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskName = 'TaskName' in params ? params.TaskName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.LogSetType = 'LogSetType' in params ? params.LogSetType : null;

    }
}

/**
 * DescribeSpeedTestingMetricData请求参数结构体
 * @class
 */
class DescribeSpeedTestingMetricDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * Top类数据记录
 * @class
 */
class TopDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询维度值。
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * top数据排行。
         * @type {Array.<TopDetailData> || null}
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
        this.TypeKey = 'TypeKey' in params ? params.TypeKey : null;

        if (params.DetailData) {
            this.DetailData = new Array();
            for (let z in params.DetailData) {
                let obj = new TopDetailData();
                obj.deserialize(params.DetailData[z]);
                this.DetailData.push(obj);
            }
        }

    }
}

/**
 * ACL配置
 * @class
 */
class AclConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，取值有：
<li> on：开启；</li>
<li> off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 用户自定义规则。
         * @type {Array.<AclUserRule> || null}
         */
        this.AclUserRules = null;

        /**
         * 托管定制规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AclUserRule> || null}
         */
        this.Customizes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.AclUserRules) {
            this.AclUserRules = new Array();
            for (let z in params.AclUserRules) {
                let obj = new AclUserRule();
                obj.deserialize(params.AclUserRules[z]);
                this.AclUserRules.push(obj);
            }
        }

        if (params.Customizes) {
            this.Customizes = new Array();
            for (let z in params.Customizes) {
                let obj = new AclUserRule();
                obj.deserialize(params.Customizes[z]);
                this.Customizes.push(obj);
            }
        }

    }
}

/**
 * ModifyZoneSetting返回参数结构体
 * @class
 */
class ModifyZoneSettingResponse extends  AbstractModel {
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
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的站点个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 站点详细信息列表。
         * @type {Array.<Zone> || null}
         */
        this.Zones = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Zones) {
            this.Zones = new Array();
            for (let z in params.Zones) {
                let obj = new Zone();
                obj.deserialize(params.Zones[z]);
                this.Zones.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 加速域名
 * @class
 */
class AccelerationDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OriginDetail || null}
         */
        this.OriginDetail = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 加速域名名称。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 修改时间。
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 加速域名状态，取值有：
<li>online：已生效；</li>
<li>process：部署中；</li>
<li>offline：已停用；</li>
<li>forbidden：已封禁；</li>
<li>init：未生效，待激活站点；</li>
         * @type {string || null}
         */
        this.DomainStatus = null;

        /**
         * CNAME 地址。
         * @type {string || null}
         */
        this.Cname = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OriginDetail) {
            let obj = new OriginDetail();
            obj.deserialize(params.OriginDetail)
            this.OriginDetail = obj;
        }
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;
        this.Cname = 'Cname' in params ? params.Cname : null;

    }
}

/**
 * UpdateOriginProtectionIPWhitelist请求参数结构体
 * @class
 */
class UpdateOriginProtectionIPWhitelistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
         * 主源站列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Origins = null;

        /**
         * 备源站列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BackupOrigins = null;

        /**
         * 回源协议配置，取值有：
<li>http：强制 http 回源；</li>
<li>follow：协议跟随回源；</li>
<li>https：强制 https 回源。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

        /**
         * 源站为腾讯云COS时，是否为私有访问bucket，取值有：
<li>on：私有访问；</li>
<li>off：公共访问。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CosPrivateAccess = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Origins = 'Origins' in params ? params.Origins : null;
        this.BackupOrigins = 'BackupOrigins' in params ? params.BackupOrigins : null;
        this.OriginPullProtocol = 'OriginPullProtocol' in params ? params.OriginPullProtocol : null;
        this.CosPrivateAccess = 'CosPrivateAccess' in params ? params.CosPrivateAccess : null;

    }
}

/**
 * Waf配置。
 * @class
 */
class WafConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * WafConfig开关，取值有：
<li> on：开启；</li>
<li> off：关闭。</li>开关仅与配置是否生效有关，即使为off（关闭），也可以正常修改配置的内容。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 上一次设置的防护级别，取值有：
<li> loose：宽松；</li>
<li> normal：正常；</li>
<li> strict：严格；</li>
<li> stricter：超严格；</li>
<li> custom：自定义。</li>
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 全局WAF模式，取值有：
<li> block：阻断（全局阻断，但可对详细规则配置观察）；</li>
<li> observe：观察（无论详细规则配置什么，都为观察）。</li>
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 托管规则详细配置。如果为null，默认使用历史配置。
         * @type {WafRule || null}
         */
        this.WafRule = null;

        /**
         * AI规则引擎防护配置。如果为null，默认使用历史配置。
         * @type {AiRule || null}
         */
        this.AiRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.WafRule) {
            let obj = new WafRule();
            obj.deserialize(params.WafRule)
            this.WafRule = obj;
        }

        if (params.AiRule) {
            let obj = new AiRule();
            obj.deserialize(params.AiRule)
            this.AiRule = obj;
        }

    }
}

/**
 * DescribeSpeedTestingDetails返回参数结构体
 * @class
 */
class DescribeSpeedTestingDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分地域拨测统计数据。
         * @type {SpeedTestingDetailData || null}
         */
        this.SpeedTestingDetailData = null;

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

        if (params.SpeedTestingDetailData) {
            let obj = new SpeedTestingDetailData();
            obj.deserialize(params.SpeedTestingDetailData)
            this.SpeedTestingDetailData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 慢速攻击的基础配置。
 * @class
 */
class SlowRateConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 统计的间隔，单位是秒，即在首段包传输结束后，将数据传输轴按照本参数切分，每个分片独立计算慢速攻击。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 统计时应用的速率阈值，单位是bps，即如果本分片中的传输速率没达到本参数的值，则判定为慢速攻击，应用慢速攻击的处置方式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Threshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

    }
}

/**
 * Dns统计曲线数据项
 * @class
 */
class DnsData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间。
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 数值。
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * https 服务端证书配置
 * @class
 */
class ServerCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书备注名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 证书类型，取值有：
<li>default：默认证书；</lil>
<li>upload：用户上传；</li>
<li>managed：腾讯云托管。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 证书部署时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * 签名算法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignAlgo = null;

        /**
         * 证书归属域名名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CommonName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.SignAlgo = 'SignAlgo' in params ? params.SignAlgo : null;
        this.CommonName = 'CommonName' in params ? params.CommonName : null;

    }
}

/**
 * 时序类型详细数据
 * @class
 */
class TimingTypeValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据和。
         * @type {number || null}
         */
        this.Sum = null;

        /**
         * 最大值。
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 平均值。
         * @type {number || null}
         */
        this.Avg = null;

        /**
         * 指标名。
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 详细数据。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimingDataItem> || null}
         */
        this.Detail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sum = 'Sum' in params ? params.Sum : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Avg = 'Avg' in params ? params.Avg : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.Detail) {
            this.Detail = new Array();
            for (let z in params.Detail) {
                let obj = new TimingDataItem();
                obj.deserialize(params.Detail[z]);
                this.Detail.push(obj);
            }
        }

    }
}

/**
 * CreateAliasDomain请求参数结构体
 * @class
 */
class CreateAliasDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 别称域名名称。
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 目标域名名称。
         * @type {string || null}
         */
        this.TargetName = null;

        /**
         * 证书配置，取值有：
<li> none：不配置；</li>
<li> hosting：SSL托管证书。</li>默认取值为 none。
         * @type {string || null}
         */
        this.CertType = null;

        /**
         * 当 CertType 取值为 hosting 时需填入相应证书 ID。
         * @type {Array.<string> || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.TargetName = 'TargetName' in params ? params.TargetName : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * CreateAliasDomain返回参数结构体
 * @class
 */
class CreateAliasDomainResponse extends  AbstractModel {
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
 * DescribeOriginProtection请求参数结构体
 * @class
 */
class DescribeOriginProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的站点集合，不填默认查询所有站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>need-update<br>   按照【<strong>站点是否需要更新源站防护IP白名单</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   true：需要更新<br>   false：无需更新<br></li>
<li>plan-support<br>   按照【<strong>站点套餐是否支持源站防护</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   true：支持<br>   false：不支持<br></li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页查询偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目。默认值：20，最大值：1000。
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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 回源时携带客户端IP所属地域信息，值的格式为ISO-3166-1两位字母代码。
 * @class
 */
class ClientIpCountry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 存放客户端IP所属地域信息的请求头名称，当Switch=on时有效。
为空则使用默认值：EO-Client-IPCountry。
         * @type {string || null}
         */
        this.HeaderName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;

    }
}

/**
 * CreatePrefetchTask请求参数结构体
 * @class
 */
class CreatePrefetchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 要预热的资源列表，每个元素格式类似如下:
http://www.example.com/example.txt。
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * 是否对url进行encode，若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

        /**
         * 附带的http头部信息。
         * @type {Array.<Header> || null}
         */
        this.Headers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Targets = 'Targets' in params ? params.Targets : null;
        this.EncodeUrl = 'EncodeUrl' in params ? params.EncodeUrl : null;

        if (params.Headers) {
            this.Headers = new Array();
            for (let z in params.Headers) {
                let obj = new Header();
                obj.deserialize(params.Headers[z]);
                this.Headers.push(obj);
            }
        }

    }
}

/**
 * DeleteApplicationProxyRule请求参数结构体
 * @class
 */
class DeleteApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则ID。
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeApplicationProxies返回参数结构体
 * @class
 */
class DescribeApplicationProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用代理列表。
         * @type {Array.<ApplicationProxy> || null}
         */
        this.ApplicationProxies = null;

        /**
         * 记录总数。
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

        if (params.ApplicationProxies) {
            this.ApplicationProxies = new Array();
            for (let z in params.ApplicationProxies) {
                let obj = new ApplicationProxy();
                obj.deserialize(params.ApplicationProxies[z]);
                this.ApplicationProxies.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTopL7AnalysisData请求参数结构体
 * @class
 */
class DescribeTopL7AnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询的指标，取值有：
<li> l7Flow_outFlux_country：请求的国家；</li>
<li> l7Flow_outFlux_statusCode：请求的状态码；</li>
<li> l7Flow_outFlux_domain：请求域名；</li>
<li> l7Flow_outFlux_url：请求的URL; </li>
<li> l7Flow_outFlux_resourceType：请求的资源类型；</li>
<li> l7Flow_outFlux_sip：客户端的源IP；</li>
<li> l7Flow_outFlux_referers：refer信息；</li>
<li> l7Flow_outFlux_ua_device：设备类型; </li>
<li> l7Flow_outFlux_ua_browser：浏览器类型；</li>
<li> l7Flow_outFlux_us_os：操作系统类型。</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 查询前多少个数据，最大值为1000，不填默认默认为: 10， 表示查询前top10的数据。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，详细的过滤条件Key值如下：
<li>country<br>   按照【<strong>国家/地区</strong>】进行过滤，国家/地区遵循<a href="https://zh.wikipedia.org/wiki/ISO_3166-1">ISO 3166</a>规范。</li>
<li>province<br>   按照【<strong>省份</strong>】进行过滤，此参数只支持服务区域为中国大陆。</li>
<li>isp<br>   按照【<strong>运营商</strong>】进行过滤，此参数只支持服务区域为中国大陆。<br>   对应的Value可选项如下：<br>   2：中国电信；<br>   26：中国联通；<br>   1046：中国移动；<br>   3947：中国铁通；<br>   38：教育网；<br>   43：长城宽带；<br>   0：其他运营商。</li>
<li>domain<br>   按照【<strong>子域名</strong>】进行过滤，子域名形如： test.example.com。</li>
<li>url<br>   按照【<strong>URL Path</strong>】进行过滤，URL Path形如：/content或/content/test.jpg。<br>   若只填写url参数，则最多可查询近30天的数据；<br>   若同时填写url+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
<li>referer<br>   按照【<strong>Referer头信息</strong>】进行过滤, Referer形如：example.com。<br>   若只填写referer参数，则最多可查询近30天的数据；<br>   若同时填写referer+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
<li>resourceType<br>   按照【<strong>资源类型</strong>】进行过滤，资源类型一般是文件后缀，形如: .jpg, .css。<br>   若只填写resourceType参数，则最多可查询近30天的数据；<br>   若同时填写resourceType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
<li>protocol<br>   按照【<strong>HTTP协议版本</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP/1.0：HTTP 1.0；<br>   HTTP/1.1：HTTP 1.1；<br>   HTTP/2.0：HTTP 2.0；<br>   HTTP/3.0：HTTP 3.0；<br>   WebSocket：WebSocket。</li>
<li>socket<br>   按照【<strong>HTTP协议类型</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP：HTTP 协议；<br>   HTTPS：HTTPS协议；<br>   QUIC：QUIC协议。</li>
<li>statusCode<br>   按照【<strong>状态码</strong>】进行过滤。<br>   若只填写statusCode参数，则最多可查询近30天的数据；<br>   若同时填写statusCode+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应的Value可选项如下：<br>   1XX：1xx类型的状态码；<br>   100：100状态码；<br>   101：101状态码；<br>   102：102状态码；<br>   2XX：2xx类型的状态码；<br>   200：200状态码；<br>   201：201状态码；<br>   202：202状态码；<br>   203：203状态码；<br>   204：204状态码；<br>   205：205状态码；<br>   206：206状态码；<br>   207：207状态码；<br>   3XX：3xx类型的状态码；<br>   300：300状态码；<br>   301：301状态码；<br>   302：302状态码；<br>   303：303状态码；<br>   304：304状态码；<br>   305：305状态码；<br>   307：307状态码；<br>   4XX：4xx类型的状态码；<br>   400：400状态码；<br>   401：401状态码；<br>   402：402状态码；<br>   403：403状态码；<br>   404：404状态码；<br>   405：405状态码；<br>   406：406状态码；<br>   407：407状态码；<br>   408：408状态码；<br>   409：409状态码；<br>   410：410状态码；<br>   411：411状态码；<br>   412：412状态码；<br>   412：413状态码；<br>   414：414状态码；<br>   415：415状态码；<br>   416：416状态码；<br>   417：417状态码；<br>   422：422状态码；<br>   423：423状态码；<br>   424：424状态码；<br>   426：426状态码；<br>   451：451状态码；<br>   5XX：5xx类型的状态码；<br>   500：500状态码；<br>   501：501状态码；<br>   502：502状态码；<br>   503：503状态码；<br>   504：504状态码；<br>   505：505状态码；<br>   506：506状态码；<br>   507：507状态码；<br>   510：510状态码；<br>   514：514状态码；<br>   544：544状态码。</li>
<li>browserType<br>   按照【<strong>浏览器类型</strong>】进行过滤。<br>   若只填写browserType参数，则最多可查询近30天的数据；<br>   若同时填写browserType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   Firefox：Firefox浏览器；<br>   Chrome：Chrome浏览器；<br>   Safari：Safari浏览器；<br>   Other：其他浏览器类型；<br>   Empty：浏览器类型为空；<br>   Bot：搜索引擎爬虫；<br>   MicrosoftEdge：MicrosoftEdge浏览器；<br>   IE：IE浏览器；<br>   Opera：Opera浏览器；<br>   QQBrowser：QQ浏览器；<br>   LBBrowser：LB浏览器；<br>   MaxthonBrowser：Maxthon浏览器；<br>   SouGouBrowser：搜狗浏览器；<br>   BIDUBrowser：百度浏览器；<br>   TaoBrowser：淘浏览器；<br>   UBrowser：UC浏览器。</li>
<li>deviceType<br>   按照【<strong>设备类型</strong>】进行过滤。<br>   若只填写deviceType参数，则最多可查询近30天的数据；<br>   若同时填写deviceType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   TV：TV设备；<br>   Tablet：Tablet设备；<br>   Mobile：Mobile设备；<br>   Desktop：Desktop设备；<br>   Other：其他设备类型；<br>   Empty：设备类型为空。</li>
<li>operatingSystemType<br>   按照【<strong>操作系统类型</strong>】进行过滤。<br>   若只填写operatingSystemType参数，则最多可查询近30天的数据；<br>   若同时填写operatingSystemType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   Linux：Linux操作系统；<br>   MacOS：MacOs操作系统；<br>   Android：Android操作系统；<br>   IOS：IOS操作系统；<br>   Windows：Windows操作系统；<br>   NetBSD：NetBSD；<br>   ChromiumOS：ChromiumOS；<br>   Bot：搜索引擎爬虫；<br>   Other：其他类型的操作系统；<br>   Empty：操作系统为空。</li>
<li>tlsVersion<br>   按照【<strong>TLS版本</strong>】进行过滤。<br>   若只填写tlsVersion参数，则最多可查询近30天的数据；<br>   若同时填写tlsVersion+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   TLS1.0：TLS 1.0；<br>   TLS1.1：TLS 1.1；<br>   TLS1.2：TLS 1.2；<br>   TLS1.3：TLS 1.3。</li>
<li>ipVersion<br>   按照【<strong>IP版本</strong>】进行过滤。<br>   对应Value的可选项如下：<br>   4：Ipv4；<br>   6：Ipv6。</li>
<li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。</li>
<li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据；</li>
<li>global：全球数据。</li>不填默认取值为global。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 站点归属权校验——文件校验信息。
 * @class
 */
class FileAscriptionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件校验目录。
         * @type {string || null}
         */
        this.IdentifyPath = null;

        /**
         * 文件校验内容。
         * @type {string || null}
         */
        this.IdentifyContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdentifyPath = 'IdentifyPath' in params ? params.IdentifyPath : null;
        this.IdentifyContent = 'IdentifyContent' in params ? params.IdentifyContent : null;

    }
}

/**
 * DescribeAccelerationDomains返回参数结构体
 * @class
 */
class DescribeAccelerationDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速域名总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 加速域名列表。
         * @type {Array.<AccelerationDomain> || null}
         */
        this.AccelerationDomains = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AccelerationDomains) {
            this.AccelerationDomains = new Array();
            for (let z in params.AccelerationDomains) {
                let obj = new AccelerationDomain();
                obj.deserialize(params.AccelerationDomains[z]);
                this.AccelerationDomains.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 站点配置。
 * @class
 */
class ZoneSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 站点加速区域信息，取值有：
<li> mainland：中国境内加速；</li>
<li> overseas：中国境外加速。</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 节点缓存键配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * Quic访问配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Quic || null}
         */
        this.Quic = null;

        /**
         * POST请求传输配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PostMaxSize || null}
         */
        this.PostMaxSize = null;

        /**
         * 智能压缩配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * Http2回源配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UpstreamHttp2 || null}
         */
        this.UpstreamHttp2 = null;

        /**
         * 访问协议强制Https跳转配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ForceRedirect || null}
         */
        this.ForceRedirect = null;

        /**
         * 缓存过期时间配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheConfig || null}
         */
        this.CacheConfig = null;

        /**
         * 源站配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 智能加速配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * 浏览器缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MaxAge || null}
         */
        this.MaxAge = null;

        /**
         * 离线缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OfflineCache || null}
         */
        this.OfflineCache = null;

        /**
         * WebSocket配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WebSocket || null}
         */
        this.WebSocket = null;

        /**
         * 客户端IP回源请求头配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClientIpHeader || null}
         */
        this.ClientIpHeader = null;

        /**
         * 缓存预刷新配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CachePrefresh || null}
         */
        this.CachePrefresh = null;

        /**
         * Ipv6访问配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * Https 加速配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 回源时是否携带客户端IP所属地域信息的配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClientIpCountry || null}
         */
        this.ClientIpCountry = null;

        /**
         * Grpc协议支持配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Grpc || null}
         */
        this.Grpc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Quic) {
            let obj = new Quic();
            obj.deserialize(params.Quic)
            this.Quic = obj;
        }

        if (params.PostMaxSize) {
            let obj = new PostMaxSize();
            obj.deserialize(params.PostMaxSize)
            this.PostMaxSize = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.UpstreamHttp2) {
            let obj = new UpstreamHttp2();
            obj.deserialize(params.UpstreamHttp2)
            this.UpstreamHttp2 = obj;
        }

        if (params.ForceRedirect) {
            let obj = new ForceRedirect();
            obj.deserialize(params.ForceRedirect)
            this.ForceRedirect = obj;
        }

        if (params.CacheConfig) {
            let obj = new CacheConfig();
            obj.deserialize(params.CacheConfig)
            this.CacheConfig = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }

        if (params.MaxAge) {
            let obj = new MaxAge();
            obj.deserialize(params.MaxAge)
            this.MaxAge = obj;
        }

        if (params.OfflineCache) {
            let obj = new OfflineCache();
            obj.deserialize(params.OfflineCache)
            this.OfflineCache = obj;
        }

        if (params.WebSocket) {
            let obj = new WebSocket();
            obj.deserialize(params.WebSocket)
            this.WebSocket = obj;
        }

        if (params.ClientIpHeader) {
            let obj = new ClientIpHeader();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.ClientIpCountry) {
            let obj = new ClientIpCountry();
            obj.deserialize(params.ClientIpCountry)
            this.ClientIpCountry = obj;
        }

        if (params.Grpc) {
            let obj = new Grpc();
            obj.deserialize(params.Grpc)
            this.Grpc = obj;
        }

    }
}

/**
 * ModifyRulePriority返回参数结构体
 * @class
 */
class ModifyRulePriorityResponse extends  AbstractModel {
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
 * DescribeTopL7CacheData返回参数结构体
 * @class
 */
class DescribeTopL7CacheDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 七层缓存TopN流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TopDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TopDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOverviewL7Data请求参数结构体
 * @class
 */
class DescribeOverviewL7DataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询的指标，取值有：
<li>l7Flow_outFlux: 访问流量；</li>
<li>l7Flow_request: 访问请求数；</li>
<li>l7Flow_outBandwidth: 访问带宽；</li>
<li>l7Flow_hit_outFlux: 缓存命中流量。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点集合。
若不填写，默认选择全部站点，且最多只能查询近30天的数据；若填写，则可查询站点绑定套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 查询的域名集合，不填默认查询所有子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询的协议类型，取值有：
<li>http: http协议；</li>
<li>https: https协议；</li>
<li>http2: http2协议；</li>
<li>all:  所有协议。</li>不填默认为all，此参数暂未生效。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 过滤条件，详细的过滤条件Key值如下：
<li>socket<br>   按照【<strong>HTTP协议类型</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP：HTTP 协议；<br>   HTTPS：HTTPS协议；<br>   QUIC：QUIC协议。</li>
<li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。</li>
<li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据；</li>
<li>global：全球数据。</li>不填默认取值为global。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 功能总开关
 * @class
 */
class SwitchConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web类型的安全总开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>不影响DDoS与Bot的开关。
         * @type {string || null}
         */
        this.WebSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WebSwitch = 'WebSwitch' in params ? params.WebSwitch : null;

    }
}

/**
 * IdentifyZone返回参数结构体
 * @class
 */
class IdentifyZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点归属校验：Dns校验信息。
         * @type {AscriptionInfo || null}
         */
        this.Ascription = null;

        /**
         * 站点归属权校验：文件校验信息。
         * @type {FileAscriptionInfo || null}
         */
        this.FileAscription = null;

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

        if (params.Ascription) {
            let obj = new AscriptionInfo();
            obj.deserialize(params.Ascription)
            this.Ascription = obj;
        }

        if (params.FileAscription) {
            let obj = new FileAscriptionInfo();
            obj.deserialize(params.FileAscription)
            this.FileAscription = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WebSocket配置
 * @class
 */
class WebSocket extends  AbstractModel {
    constructor(){
        super();

        /**
         * WebSocket 超时时间配置开关，取值有：
<li>on：使用Timeout作为WebSocket超时时间；</li>
<li>off：平台仍支持WebSocket连接，此时使用系统默认的15秒为超时时间。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 超时时间，单位为秒，最大超时时间120秒。
         * @type {number || null}
         */
        this.Timeout = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Timeout = 'Timeout' in params ? params.Timeout : null;

    }
}

/**
 * DescribeWebProtectionTopData请求参数结构体
 * @class
 */
class DescribeWebProtectionTopDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计指标列表，取值有：
<li>ccRate_requestNum_url：速率限制规则请求次数url分布排行；</li>
<li>ccRate_cipRequestNum_region：速率限制规则请求次数区域客户端ip分布排行；</li>
<li>ccAcl_requestNum_url：自定义规则请求次数url分布排行；</li>
<li>ccAcl_requestNum_cip：自定义规则请求次数客户端ip分布排行；</li>
<li>ccAcl_cipRequestNum_region：自定义规则请求次数客户端区域分布排行。</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 域名集合，不填默认选择全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 筛选条件，key可选的值有：
<li>action：执行动作 。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 拨测详细数据，包括各地域性能数据。
 * @class
 */
class SpeedTestingDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 地域性能数据。
         * @type {Array.<DistrictStatistics> || null}
         */
        this.DistrictStatistics = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

        if (params.DistrictStatistics) {
            this.DistrictStatistics = new Array();
            for (let z in params.DistrictStatistics) {
                let obj = new DistrictStatistics();
                obj.deserialize(params.DistrictStatistics[z]);
                this.DistrictStatistics.push(obj);
            }
        }

    }
}

/**
 * 自定义 nameservers
 * @class
 */
class VanityNameServers extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义 ns 开关，取值有：
<li> on：开启；</li>
<li> off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 自定义 ns 列表。
         * @type {Array.<string> || null}
         */
        this.Servers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Servers = 'Servers' in params ? params.Servers : null;

    }
}

/**
 * 规则引擎规则详情
 * @class
 */
class RuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则名称，名称字符串长度 1~255。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则状态，取值有:
<li> enable: 启用； </li>
<li> disable: 未启用。 </li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 规则内容。
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

        /**
         * 规则优先级, 值越大优先级越高，最小为 1。
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * 规则标签。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * ModifySecurityWafGroupPolicy返回参数结构体
 * @class
 */
class ModifySecurityWafGroupPolicyResponse extends  AbstractModel {
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
 * DescribeTimingL7SourceData返回参数结构体
 * @class
 */
class DescribeTimingL7SourceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 时序流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimingDataRecord> || null}
         */
        this.TimingDataRecords = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TimingDataRecords) {
            this.TimingDataRecords = new Array();
            for (let z in params.TimingDataRecords) {
                let obj = new TimingDataRecord();
                obj.deserialize(params.TimingDataRecords[z]);
                this.TimingDataRecords.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebManagedRulesData请求参数结构体
 * @class
 */
class DescribeWebManagedRulesDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计指标列表，取值有：
<li>waf_interceptNum：waf拦截次数。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 子域名集合，不填默认选择全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 筛选条件，key可选的值有：
<li>action：执行动作。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 规则引擎可应用于匹配请求的设置详细信息，可选参数配置项
 * @class
 */
class RuleChoicePropertiesItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值类型。
<li> CHOICE：参数值只能在 ChoicesValue 中选择； </li>
<li> TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择；</li>
<li> CUSTOM_NUM：参数值用户自定义，整型类型；</li>
<li> CUSTOM_STRING：参数值用户自定义，字符串类型。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 参数值的可选值。
注意：若参数值为用户自定义则该数组为空数组。
         * @type {Array.<string> || null}
         */
        this.ChoicesValue = null;

        /**
         * 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
         * @type {number || null}
         */
        this.Min = null;

        /**
         * 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 参数值是否支持多选或者填写多个。
         * @type {boolean || null}
         */
        this.IsMultiple = null;

        /**
         * 是否允许为空。
         * @type {boolean || null}
         */
        this.IsAllowEmpty = null;

        /**
         * 特殊参数。
<li> 为 NULL：RuleAction 选择 NormalAction；</li>
<li> 成员参数 Id 为 Action：RuleAction 选择 RewirteAction；</li>
<li> 成员参数 Id 为 StatusCode：RuleAction 选择 CodeAction。</li>
         * @type {RuleExtraParameter || null}
         */
        this.ExtraParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ChoicesValue = 'ChoicesValue' in params ? params.ChoicesValue : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.IsMultiple = 'IsMultiple' in params ? params.IsMultiple : null;
        this.IsAllowEmpty = 'IsAllowEmpty' in params ? params.IsAllowEmpty : null;

        if (params.ExtraParameter) {
            let obj = new RuleExtraParameter();
            obj.deserialize(params.ExtraParameter)
            this.ExtraParameter = obj;
        }

    }
}

/**
 * DescribeWebManagedRulesData返回参数结构体
 * @class
 */
class DescribeWebManagedRulesDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * WAF攻击的时序数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全配置
 * @class
 */
class SecurityConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 托管规则。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {WafConfig || null}
         */
        this.WafConfig = null;

        /**
         * 速率限制。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RateLimitConfig || null}
         */
        this.RateLimitConfig = null;

        /**
         * 自定义规则。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AclConfig || null}
         */
        this.AclConfig = null;

        /**
         * Bot配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BotConfig || null}
         */
        this.BotConfig = null;

        /**
         * 七层防护总开关。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SwitchConfig || null}
         */
        this.SwitchConfig = null;

        /**
         * 基础访问管控。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IpTableConfig || null}
         */
        this.IpTableConfig = null;

        /**
         * 例外规则配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExceptConfig || null}
         */
        this.ExceptConfig = null;

        /**
         * 自定义拦截页面配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DropPageConfig || null}
         */
        this.DropPageConfig = null;

        /**
         * 模板配置。此处仅出参数使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TemplateConfig || null}
         */
        this.TemplateConfig = null;

        /**
         * 慢速攻击配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SlowPostConfig || null}
         */
        this.SlowPostConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WafConfig) {
            let obj = new WafConfig();
            obj.deserialize(params.WafConfig)
            this.WafConfig = obj;
        }

        if (params.RateLimitConfig) {
            let obj = new RateLimitConfig();
            obj.deserialize(params.RateLimitConfig)
            this.RateLimitConfig = obj;
        }

        if (params.AclConfig) {
            let obj = new AclConfig();
            obj.deserialize(params.AclConfig)
            this.AclConfig = obj;
        }

        if (params.BotConfig) {
            let obj = new BotConfig();
            obj.deserialize(params.BotConfig)
            this.BotConfig = obj;
        }

        if (params.SwitchConfig) {
            let obj = new SwitchConfig();
            obj.deserialize(params.SwitchConfig)
            this.SwitchConfig = obj;
        }

        if (params.IpTableConfig) {
            let obj = new IpTableConfig();
            obj.deserialize(params.IpTableConfig)
            this.IpTableConfig = obj;
        }

        if (params.ExceptConfig) {
            let obj = new ExceptConfig();
            obj.deserialize(params.ExceptConfig)
            this.ExceptConfig = obj;
        }

        if (params.DropPageConfig) {
            let obj = new DropPageConfig();
            obj.deserialize(params.DropPageConfig)
            this.DropPageConfig = obj;
        }

        if (params.TemplateConfig) {
            let obj = new TemplateConfig();
            obj.deserialize(params.TemplateConfig)
            this.TemplateConfig = obj;
        }

        if (params.SlowPostConfig) {
            let obj = new SlowPostConfig();
            obj.deserialize(params.SlowPostConfig)
            this.SlowPostConfig = obj;
        }

    }
}

/**
 * CreateSpeedTesting请求参数结构体
 * @class
 */
class CreateSpeedTestingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 拨测子域名。
         * @type {string || null}
         */
        this.Host = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态
 * @class
 */
class MaxAge extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否遵循源站，取值有：
<li>on：遵循源站，忽略MaxAge 时间设置；</li>
<li>off：不遵循源站，使用MaxAge 时间设置。</li>
         * @type {string || null}
         */
        this.FollowOrigin = null;

        /**
         * MaxAge 时间设置，单位秒，最大365天。
注意：时间为0，即不缓存。
         * @type {number || null}
         */
        this.MaxAgeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FollowOrigin = 'FollowOrigin' in params ? params.FollowOrigin : null;
        this.MaxAgeTime = 'MaxAgeTime' in params ? params.MaxAgeTime : null;

    }
}

/**
 * ModifyAliasDomainStatus返回参数结构体
 * @class
 */
class ModifyAliasDomainStatusResponse extends  AbstractModel {
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
 * 规则引擎条件使用StatusCode字段动作参数
 * @class
 */
class RuleCodeActionParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态 Code。
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * ModifyRulePriority请求参数结构体
 * @class
 */
class ModifyRulePriorityRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 规则 ID 的顺序，多条规则执行顺序依次往下。
         * @type {Array.<string> || null}
         */
        this.RuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;

    }
}

/**
 * DescribeTimingL7AnalysisData请求参数结构体
 * @class
 */
class DescribeTimingL7AnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指标列表，取值有:
<li>l7Flow_outFlux: 访问流量；</li>
<li>l7Flow_request: 访问请求数；</li>
<li>l7Flow_outBandwidth: 访问带宽。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点集合。
若不填写，默认选择全部站点，且最多只能查询近30天的数据；若填写，则可查询站点绑定套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 查询时间粒度，取值有：
<li>min: 1分钟；</li>
<li>5min: 5分钟；</li>
<li>hour: 1小时；</li>
<li>day: 1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 过滤条件，详细的过滤条件Key值如下：
<li>country<br>   按照【<strong>国家/地区</strong>】进行过滤，国家/地区遵循<a href="https://zh.wikipedia.org/wiki/ISO_3166-1">ISO 3166</a>规范。</li>
<li>province<br>   按照【<strong>省份</strong>】进行过滤，此参数只支持服务区域为中国大陆。</li>
<li>isp<br>   按照【<strong>运营商</strong>】进行过滤，此参数只支持服务区域为中国大陆。<br>   对应的Value可选项如下：<br>   2：中国电信；<br>   26：中国联通；<br>   1046：中国移动；<br>   3947：中国铁通；<br>   38：教育网；<br>   43：长城宽带；<br>   0：其他运营商。</li>
<li>domain<br>   按照【<strong>子域名</strong>】进行过滤，子域名形如： test.example.com。</li>
<li>url<br>   按照【<strong>URL Path</strong>】进行过滤，URL Path形如：/content或/content/test.jpg。<br>   若只填写url参数，则最多可查询近30天的数据；<br>   若同时填写url+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
<li>referer<br>   按照【<strong>Referer头信息</strong>】进行过滤, Referer形如：example.com。<br>   若只填写referer参数，则最多可查询近30天的数据；<br>   若同时填写referer+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
<li>resourceType<br>   按照【<strong>资源类型</strong>】进行过滤，资源类型一般是文件后缀，形如: .jpg, .css。<br>   若只填写resourceType参数，则最多可查询近30天的数据；<br>   若同时填写resourceType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。</li>
<li>protocol<br>   按照【<strong>HTTP协议版本</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP/1.0：HTTP 1.0；<br>   HTTP/1.1：HTTP 1.1；<br>   HTTP/2.0：HTTP 2.0；<br>   HTTP/3.0：HTTP 3.0；<br>   WebSocket：WebSocket。</li>
<li>socket<br>   按照【<strong>HTTP协议类型</strong>】进行过滤。<br>   对应的Value可选项如下：<br>   HTTP：HTTP 协议；<br>   HTTPS：HTTPS协议；<br>   QUIC：QUIC协议。</li>
<li>statusCode<br>   按照【<strong>状态码</strong>】进行过滤。<br>   若只填写statusCode参数，则最多可查询近30天的数据；<br>   若同时填写statusCode+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应的Value可选项如下：<br>   1XX：1xx类型的状态码；<br>   100：100状态码；<br>   101：101状态码；<br>   102：102状态码；<br>   2XX：2xx类型的状态码；<br>   200：200状态码；<br>   201：201状态码；<br>   202：202状态码；<br>   203：203状态码；<br>   204：204状态码；<br>   205：205状态码；<br>   206：206状态码；<br>   207：207状态码；<br>   3XX：3xx类型的状态码；<br>   300：300状态码；<br>   301：301状态码；<br>   302：302状态码；<br>   303：303状态码；<br>   304：304状态码；<br>   305：305状态码；<br>   307：307状态码；<br>   4XX：4xx类型的状态码；<br>   400：400状态码；<br>   401：401状态码；<br>   402：402状态码；<br>   403：403状态码；<br>   404：404状态码；<br>   405：405状态码；<br>   406：406状态码；<br>   407：407状态码；<br>   408：408状态码；<br>   409：409状态码；<br>   410：410状态码；<br>   411：411状态码；<br>   412：412状态码；<br>   412：413状态码；<br>   414：414状态码；<br>   415：415状态码；<br>   416：416状态码；<br>   417：417状态码；<br>   422：422状态码；<br>   423：423状态码；<br>   424：424状态码；<br>   426：426状态码；<br>   451：451状态码；<br>   5XX：5xx类型的状态码；<br>   500：500状态码；<br>   501：501状态码；<br>   502：502状态码；<br>   503：503状态码；<br>   504：504状态码；<br>   505：505状态码；<br>   506：506状态码；<br>   507：507状态码；<br>   510：510状态码；<br>   514：514状态码；<br>   544：544状态码。</li>
<li>browserType<br>   按照【<strong>浏览器类型</strong>】进行过滤。<br>   若只填写browserType参数，则最多可查询近30天的数据；<br>   若同时填写browserType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   Firefox：Firefox浏览器；<br>   Chrome：Chrome浏览器；<br>   Safari：Safari浏览器；<br>   Other：其他浏览器类型；<br>   Empty：浏览器类型为空；<br>   Bot：搜索引擎爬虫；<br>   MicrosoftEdge：MicrosoftEdge浏览器；<br>   IE：IE浏览器；<br>   Opera：Opera浏览器；<br>   QQBrowser：QQ浏览器；<br>   LBBrowser：LB浏览器；<br>   MaxthonBrowser：Maxthon浏览器；<br>   SouGouBrowser：搜狗浏览器；<br>   BIDUBrowser：百度浏览器；<br>   TaoBrowser：淘浏览器；<br>   UBrowser：UC浏览器。</li>
<li>deviceType<br>   按照【<strong>设备类型</strong>】进行过滤。<br>   若只填写deviceType参数，则最多可查询近30天的数据；<br>   若同时填写deviceType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   TV：TV设备；<br>   Tablet：Tablet设备；<br>   Mobile：Mobile设备；<br>   Desktop：Desktop设备；<br>   Other：其他设备类型；<br>   Empty：设备类型为空。</li>
<li>operatingSystemType<br>   按照【<strong>操作系统类型</strong>】进行过滤。<br>   若只填写operatingSystemType参数，则最多可查询近30天的数据；<br>   若同时填写operatingSystemType+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   Linux：Linux操作系统；<br>   MacOS：MacOs操作系统；<br>   Android：Android操作系统；<br>   IOS：IOS操作系统；<br>   Windows：Windows操作系统；<br>   NetBSD：NetBSD；<br>   ChromiumOS：ChromiumOS；<br>   Bot：搜索引擎爬虫；<br>   Other：其他类型的操作系统；<br>   Empty：操作系统为空。</li>
<li>tlsVersion<br>   按照【<strong>TLS版本</strong>】进行过滤。<br>   若只填写tlsVersion参数，则最多可查询近30天的数据；<br>   若同时填写tlsVersion+Zonelds参数，则支持的查询数据范围为套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>与30天两者中的较小值。<br>   对应Value的可选项如下：<br>   TLS1.0：TLS 1.0；<br>   TLS1.1：TLS 1.1；<br>   TLS1.2：TLS 1.2；<br>   TLS1.3：TLS 1.3。</li>
<li>ipVersion<br>   按照【<strong>IP版本</strong>】进行过滤。<br>   对应Value的可选项如下：<br>   4：Ipv4；<br>   6：Ipv6。</li>
<li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。</li>
<li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据；</li>
<li>global：全球数据。</li>不填默认取值为global。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * CreatePrefetchTask返回参数结构体
 * @class
 */
class CreatePrefetchTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 失败的任务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FailReason> || null}
         */
        this.FailedList = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new FailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 不缓存配置
 * @class
 */
class NoCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 不缓存配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeDefaultCertificates请求参数结构体
 * @class
 */
class DescribeDefaultCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，Filters.Values的上限为5。详细的过滤条件如下：
<li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-xxx。<br>   类型：String<br>   必选：是 </li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页查询偏移量。默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目。默认值：20，最大值：100。
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeAliasDomains返回参数结构体
 * @class
 */
class DescribeAliasDomainsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的别称域名个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 别称域名详细信息列表。
         * @type {Array.<AliasDomain> || null}
         */
        this.AliasDomains = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AliasDomains) {
            this.AliasDomains = new Array();
            for (let z in params.AliasDomains) {
                let obj = new AliasDomain();
                obj.deserialize(params.AliasDomains[z]);
                this.AliasDomains.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebProtectionHitRuleDetail请求参数结构体
 * @class
 */
class DescribeWebProtectionHitRuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 所属规则数据类型，支持的规则有：
<li>rate：限速规则；</li>
<li>acl：自定义规则。</li>
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 域名列表，不填默认选择全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 筛选条件，key可选的值有：
<li>action：执行动作。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 分页查询的限制数目，默认值为20，最大查询条目为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询时间粒度，支持的时间粒度有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 源站防护IP白名单
 * @class
 */
class IPWhitelist extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPv4列表。
         * @type {Array.<string> || null}
         */
        this.IPv4 = null;

        /**
         * IPv6列表。
         * @type {Array.<string> || null}
         */
        this.IPv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IPv4 = 'IPv4' in params ? params.IPv4 : null;
        this.IPv6 = 'IPv6' in params ? params.IPv6 : null;

    }
}

/**
 * DDoS配置
 * @class
 */
class DDoS extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateZone请求参数结构体
 * @class
 */
class CreateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 接入方式，取值有：
<li> full：NS接入；</li>
<li> partial：CNAME接入，请先调用认证站点API（IdentifyZone）进行站点归属权校验，校验通过后继续调用本接口创建站点。</li>不填写使用默认值full。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 是否跳过站点现有的DNS记录扫描。默认值：false。
         * @type {boolean || null}
         */
        this.JumpStart = null;

        /**
         * 资源标签。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 是否允许重复接入。
<li> true：允许重复接入；</li>
<li> false：不允许重复接入。</li>不填写使用默认值false。
         * @type {boolean || null}
         */
        this.AllowDuplicates = null;

        /**
         * 站点别名。数字、英文、-和_组合，限制20个字符。
         * @type {string || null}
         */
        this.AliasZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.JumpStart = 'JumpStart' in params ? params.JumpStart : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.AllowDuplicates = 'AllowDuplicates' in params ? params.AllowDuplicates : null;
        this.AliasZoneName = 'AliasZoneName' in params ? params.AliasZoneName : null;

    }
}

/**
 * edgeone套餐信息
 * @class
 */
class PlanInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结算货币类型，取值有：
<li> CNY ：人民币结算； </li>
<li> USD ：美元结算。</li>
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 套餐所含流量，该流量数值为安全加速流量，内容加速流量和智能加速流量的总和（单位：字节）。
         * @type {number || null}
         */
        this.Flux = null;

        /**
         * 结算周期，取值有：
<li> y ：按年结算； </li>
<li> m ：按月结算；</li>
<li> h ：按小时结算； </li>
<li> M ：按分钟结算；</li>
<li> s ：按秒结算。 </li>
         * @type {string || null}
         */
        this.Frequency = null;

        /**
         * 套餐类型，取值有：
<li> sta ：全球内容分发网络（不包括中国大陆）标准版套餐； </li>
<li> sta_with_bot ：全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理；</li>
<li> sta_cm ：中国大陆内容分发网络标准版套餐； </li>
<li> sta_cm_with_bot ：中国大陆内容分发网络标准版套餐附带bot管理；</li>
<li> sta_global ：全球内容分发网络（包括中国大陆）标准版套餐； </li>
<li> sta_global_with_bot ：全球内容分发网络（包括中国大陆）标准版套餐附带bot管理；</li>
<li> ent ：全球内容分发网络（不包括中国大陆）企业版套餐； </li>
<li> ent_with_bot ： 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理；</li>
<li> ent_cm ：中国大陆内容分发网络企业版套餐； </li>
<li> ent_cm_with_bot ：中国大陆内容分发网络企业版套餐附带bot管理；</li>
<li> ent_global ：全球内容分发网络（包括中国大陆）企业版套餐； </li>
<li> ent_global_with_bot ：全球内容分发网络（包括中国大陆）企业版套餐附带bot管理。</li>
         * @type {string || null}
         */
        this.PlanType = null;

        /**
         * 套餐价格（单位：分）。
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 套餐所含请求次数，该请求次数为安全加速请求次数。（单位：次）。
         * @type {number || null}
         */
        this.Request = null;

        /**
         * 套餐所能绑定的站点个数。
         * @type {number || null}
         */
        this.SiteNumber = null;

        /**
         * 套餐加速区域类型，取值有：
<li> mainland ：中国大陆； </li>
<li> overseas ：全球（不包括中国大陆）；</li>
<li> global ：全球（包括中国大陆）。 </li>
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
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.Flux = 'Flux' in params ? params.Flux : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.PlanType = 'PlanType' in params ? params.PlanType : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Request = 'Request' in params ? params.Request : null;
        this.SiteNumber = 'SiteNumber' in params ? params.SiteNumber : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeTimingL7CacheData请求参数结构体
 * @class
 */
class DescribeTimingL7CacheDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询的指标，取值有：
<li>l7Cache_outFlux：响应流量；</li>
<li>l7Cache_request：响应请求数；</li>
<li> l7Cache_outBandwidth：响应带宽。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 过滤条件，详细的过滤条件如下：
<li>domain<br>   按照【<strong>子域名</strong>】进行过滤，子域名形如： test.example.com。<br>   类型：String<br>   必选：否</li>
<li>url<br>   按照【<strong>URL</strong>】进行过滤，此参数只支持30天的时间范围，URL形如：/content。<br>   类型：String<br>   必选：否</li>
<li>resourceType<br>   按照【<strong>资源类型</strong>】进行过滤，此参数只支持30天的时间范围，资源类型形如：jpg，png。<br>   类型：String<br>   必选：否</li>
<li>cacheType<br>   按照【<strong>缓存类型</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   hit：命中缓存；<br>   dynamic：资源不可缓存；<br>   miss：未命中缓存。</li>
<li>statusCode<br>   按照【<strong>状态码</strong>】进行过滤，此参数只支持30天的时间范围。<br>   类型：String<br>   必选：否<br>   可选项：<br>   1XX：1xx类型的状态码；<br>   100：100状态码；<br>   101：101状态码；<br>   102：102状态码；<br>   2XX：2xx类型的状态码；<br>   200：200状态码；<br>   201：201状态码；<br>   202：202状态码；<br>   203：203状态码；<br>   204：204状态码；<br>   100：100状态码；<br>   206：206状态码；<br>   207：207状态码；<br>   3XX：3xx类型的状态码；<br>   300：300状态码；<br>   301：301状态码；<br>   302：302状态码；<br>   303：303状态码；<br>   304：304状态码；<br>   305：305状态码；<br>   307：307状态码；<br>   4XX：4xx类型的状态码；<br>   400：400状态码；<br>   401：401状态码；<br>   402：402状态码；<br>   403：403状态码；<br>   404：404状态码；<br>   405：405状态码；<br>   406：406状态码；<br>   407：407状态码；<br>   408：408状态码；<br>   409：409状态码；<br>   410：410状态码；<br>   411：411状态码；<br>   412：412状态码；<br>   412：413状态码；<br>   414：414状态码；<br>   415：415状态码；<br>   416：416状态码；<br>   417：417状态码；<br>   422：422状态码；<br>   423：423状态码；<br>   424：424状态码；<br>   426：426状态码；<br>   451：451状态码；<br>   5XX：5xx类型的状态码；<br>   500：500状态码；<br>   501：501状态码；<br>   502：502状态码；<br>   503：503状态码；<br>   504：504状态码；<br>   505：505状态码；<br>   506：506状态码；<br>   507：507状态码；<br>   510：510状态码；<br>   514：514状态码；<br>   544：544状态码。</li>
<li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
<li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * 查询时间粒度，可选的值有：
<li>min：1分钟的时间粒度；</li>
<li>5min：5分钟的时间粒度；</li>
<li>hour：1小时的时间粒度；</li>
<li>day：1天的时间粒度。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据；</li>
<li>global：全球数据。</li>不填默认取值为global。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 拨测配额数据。
 * @class
 */
class SpeedTestingQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点总拨测次数。
         * @type {number || null}
         */
        this.TotalTestRuns = null;

        /**
         * 站点剩余可用拨测次数。
         * @type {number || null}
         */
        this.AvailableTestRuns = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalTestRuns = 'TotalTestRuns' in params ? params.TotalTestRuns : null;
        this.AvailableTestRuns = 'AvailableTestRuns' in params ? params.AvailableTestRuns : null;

    }
}

/**
 * ModifyRule返回参数结构体
 * @class
 */
class ModifyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则 ID。
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckCertificate返回参数结构体
 * @class
 */
class CheckCertificateResponse extends  AbstractModel {
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
 * 站点归属信息
 * @class
 */
class AscriptionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主机记录。
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * 记录类型。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录值。
         * @type {string || null}
         */
        this.RecordValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;

    }
}

/**
 * DescribeLogSets返回参数结构体
 * @class
 */
class DescribeLogSetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集列表数据。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LogSetInfo> || null}
         */
        this.LogSetList = null;

        /**
         * 查询结果的总条数。
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

        if (params.LogSetList) {
            this.LogSetList = new Array();
            for (let z in params.LogSetList) {
                let obj = new LogSetInfo();
                obj.deserialize(params.LogSetList[z]);
                this.LogSetList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebProtectionData请求参数结构体
 * @class
 */
class DescribeWebProtectionDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计指标，取值有：
<li>ccRate_interceptNum：速率限制规则限制次数；</li>
<li>ccAcl_interceptNum：自定义规则拦截次数。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 域名集合，不填默认选择全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询时间粒度，支持的时间粒度有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 筛选条件，key可选的值有：
<li>action：执行动作。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * CheckCertificate请求参数结构体
 * @class
 */
class CheckCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书内容。
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * 私钥内容。
         * @type {string || null}
         */
        this.PrivateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Certificate = 'Certificate' in params ? params.Certificate : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * 慢速攻击的首段包配置。
 * @class
 */
class FirstPartConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 首段包的统计时长，单位是秒，即期望首段包的统计时长是多少，默认5秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StatTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.StatTime = 'StatTime' in params ? params.StatTime : null;

    }
}

/**
 * DescribeAddableEntityList返回参数结构体
 * @class
 */
class DescribeAddableEntityListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可添加的实体列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.EntityList = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.EntityList = 'EntityList' in params ? params.EntityList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApplicationProxyRule请求参数结构体
 * @class
 */
class CreateApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 协议，取值有：
<li>TCP：TCP协议；</li>
<li>UDP：UDP协议。</li>
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 端口，支持格式：
<li>80：80端口；</li>
<li>81-90：81至90端口。</li>
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * 源站类型，取值有：
<li>custom：手动添加；</li>
<li>origins：源站组。</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站信息：
<li>当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；</li>
<li>当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。</li>
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * 传递客户端IP，取值有：
<li>TOA：TOA（仅Proto=TCP时可选）；</li>
<li>PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；</li>
<li>PPV2：Proxy Protocol传递，协议版本V2；</li>
<li>OFF：不传递。</li>默认值：OFF。
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 是否开启会话保持，取值有：
<li>true：开启；</li>
<li>false：关闭。</li>默认值：false。
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 源站端口，支持格式：
<li>单端口：80；</li>
<li>端口段：81-90，81至90端口。</li>
         * @type {string || null}
         */
        this.OriginPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.OriginPort = 'OriginPort' in params ? params.OriginPort : null;

    }
}

/**
 * 缓存时间设置
 * @class
 */
class Cache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 缓存过期时间设置。
单位为秒，最大可设置为 365 天。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CacheTime = null;

        /**
         * 是否开启强制缓存，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreCacheControl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CacheTime = 'CacheTime' in params ? params.CacheTime : null;
        this.IgnoreCacheControl = 'IgnoreCacheControl' in params ? params.IgnoreCacheControl : null;

    }
}

/**
 * 访问协议强制https跳转配置
 * @class
 */
class ForceRedirect extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问强制跳转配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 重定向状态码，取值有：
<li>301：301跳转；</li>
<li>302：302跳转。</li>
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
        this.RedirectStatusCode = 'RedirectStatusCode' in params ? params.RedirectStatusCode : null;

    }
}

/**
 * ModifyApplicationProxy请求参数结构体
 * @class
 */
class ModifyApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 当ProxyType=hostname时，表示域名或子域名；
当ProxyType=instance时，表示代理名称。
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 会话保持时间，取值范围：30-3600，单位：秒。
不填写保持原有配置。
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>不填写保持原有配置。
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * Ipv6访问配置，不填写保持原有配置。
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

    }
}

/**
 * 安全模板配置
 * @class
 */
class TemplateConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;

    }
}

/**
 * 规则引擎带有状态码的动作
 * @class
 */
class CodeAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 操作参数。
         * @type {Array.<RuleCodeActionParams> || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new RuleCodeActionParams();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }

    }
}

/**
 * CreateReplayTask请求参数结构体
 * @class
 */
class CreateReplayTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重放任务的 ID 列表。
         * @type {Array.<string> || null}
         */
        this.Ids = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * DescribeWebProtectionHitRuleDetail返回参数结构体
 * @class
 */
class DescribeWebProtectionHitRuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * cc防护命中规则列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecHitRuleInfo> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new SecHitRuleInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 站点验证信息
 * @class
 */
class Identification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 验证状态，取值有：
<li> pending：验证中；</li>
<li> finished：验证完成。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 站点归属权校验：Dns校验信息。
         * @type {AscriptionInfo || null}
         */
        this.Ascription = null;

        /**
         * 域名当前的 NS 记录。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 站点归属权校验：文件校验信息。
         * @type {FileAscriptionInfo || null}
         */
        this.FileAscription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Ascription) {
            let obj = new AscriptionInfo();
            obj.deserialize(params.Ascription)
            this.Ascription = obj;
        }
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;

        if (params.FileAscription) {
            let obj = new FileAscriptionInfo();
            obj.deserialize(params.FileAscription)
            this.FileAscription = obj;
        }

    }
}

/**
 * DescribeDDoSAttackData请求参数结构体
 * @class
 */
class DescribeDDoSAttackDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计指标列表，取值有：
<li>ddos_attackMaxBandwidth：攻击带宽峰值；</li>
<li>ddos_attackMaxPackageRate：攻击包速率峰值 ；</li>
<li>ddos_attackBandwidth：攻击带宽曲线；</li>
<li>ddos_attackPackageRate：攻击包速率曲线。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * DDoS策略组ID列表，不填默认选择全部策略ID。
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间与结束时间的间隔自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据；</li>
<li>global：全球数据。</li>不填默认取值为global。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 缓存预刷新
 * @class
 */
class CachePrefresh extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存预刷新配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 缓存预刷新百分比，取值范围：1-99。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Percent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Percent = 'Percent' in params ? params.Percent : null;

    }
}

/**
 * DescribeWebProtectionClientIpList返回参数结构体
 * @class
 */
class DescribeWebProtectionClientIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC防护客户端（攻击源）ip信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecClientIp> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new SecClientIp();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTimingL7AnalysisData返回参数结构体
 * @class
 */
class DescribeTimingL7AnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 时序流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimingDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAliasDomainStatus请求参数结构体
 * @class
 */
class ModifyAliasDomainStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 别称域名状态，取值有：
<li> false：开启别称域名；</li>
<li> true：关闭别称域名。</li>
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * 待修改状态的别称域名名称。如果为空，则不执行修改状态操作。
         * @type {Array.<string> || null}
         */
        this.AliasNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.AliasNames = 'AliasNames' in params ? params.AliasNames : null;

    }
}

/**
 * Top数据的详细信息
 * @class
 */
class TopDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 字段值。
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeApplicationProxies请求参数结构体
 * @class
 */
class DescribeApplicationProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询偏移量。默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目。默认值：20，最大值：1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：<li>proxy-id<br>   按照【<strong>代理ID</strong>】进行过滤。代理ID形如：proxy-ev2sawbwfd。<br>   类型：String<br>   必选：否</li><li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-vawer2vadg。<br>   类型：String<br>   必选：否</li>
         * @type {Array.<Filter> || null}
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
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeContentQuota请求参数结构体
 * @class
 */
class DescribeContentQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * bot 用户画像规则
 * @class
 */
class BotPortraitRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本功能的开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 本规则的ID。仅出参使用。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * JS挑战的规则ID。默认所有规则不配置JS挑战。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AlgManagedIds = null;

        /**
         * 数字验证码的规则ID。默认所有规则不配置数字验证码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.CapManagedIds = null;

        /**
         * 观察的规则ID。默认所有规则不配置观察。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.MonManagedIds = null;

        /**
         * 拦截的规则ID。默认所有规则不配置拦截。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.DropManagedIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.AlgManagedIds = 'AlgManagedIds' in params ? params.AlgManagedIds : null;
        this.CapManagedIds = 'CapManagedIds' in params ? params.CapManagedIds : null;
        this.MonManagedIds = 'MonManagedIds' in params ? params.MonManagedIds : null;
        this.DropManagedIds = 'DropManagedIds' in params ? params.DropManagedIds : null;

    }
}

/**
 * 规则引擎条件参数
 * @class
 */
class RuleCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运算符，取值有：
<li> equal: 等于； </li>
<li> notequal: 不等于；</li>
<li> exist: 存在； </li>
<li> notexist: 不存在。</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 匹配类型，取值有：
<li> filename：文件名； </li>
<li> extension：文件后缀； </li>
<li> host：HOST； </li>
<li> full_url：URL Full，当前站点下完整 URL 路径，必须包含 HTTP 协议，Host 和 路径； </li>
<li> url：URL Path，当前站点下 URL 路径的请求； </li><li>client_country：客户端国家/地区；</li>
<li> query_string：查询字符串，当前站点下请求URL的查询字符串； </li>
<li> request_header：HTTP请求头部。 </li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 对应匹配类型的参数值，仅在匹配类型为查询字符串或HTTP请求头并且运算符取值为存在或不存在时允许传空数组，对应匹配类型有：
<li> 文件后缀：jpg、txt等文件后缀；</li>
<li> 文件名称：例如 foo.jpg 中的 foo；</li>
<li> 全部（站点任意请求）： all； </li>
<li> HOST：当前站点下的 host ，例如www.maxx55.com；</li>
<li> URL Path：当前站点下 URL 路径的请求，例如：/example；</li>
<li> URL Full：当前站点下完整 URL 请求，必须包含 HTTP 协议，Host 和 路径，例如：https://www.maxx55.cn/example；</li>
<li> 客户端国家/地区：符合ISO3166标准的国家/地区标识；</li>
<li> 查询字符串: 当前站点下URL请求中查询字符串的参数值，例如lang=cn&version=1中的cn和1； </li>
<li> HTTP 请求头: HTTP请求头部字段值，例如Accept-Language:zh-CN,zh;q=0.9中的zh-CN,zh;q=0.9。 </li>
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否忽略参数值的大小写，默认值为 false。
         * @type {boolean || null}
         */
        this.IgnoreCase = null;

        /**
         * 对应匹配类型的参数名称，在 Target 值为以下取值时有效，有效时值不能为空：
<li> query_string（查询字符串）: 当前站点下URL请求中查询字符串的参数名称，例如lang=cn&version=1中的lang和version； </li>
<li> request_header（HTTP 请求头）: HTTP请求头部字段名，例如Accept-Language:zh-CN,zh;q=0.9中的Accept-Language。 </li>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否忽略参数名称的大小写，默认值为 false。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IgnoreNameCase = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.Values = 'Values' in params ? params.Values : null;
        this.IgnoreCase = 'IgnoreCase' in params ? params.IgnoreCase : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IgnoreNameCase = 'IgnoreNameCase' in params ? params.IgnoreNameCase : null;

    }
}

/**
 * 规则引擎可应用于匹配请求的设置详细信息。
 * @class
 */
class RulesProperties extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值为参数名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
         * @type {number || null}
         */
        this.Min = null;

        /**
         * 参数值的可选值。
注意：若参数值为用户自定义则该数组为空数组。
         * @type {Array.<string> || null}
         */
        this.ChoicesValue = null;

        /**
         * 参数值类型。
<li> CHOICE：参数值只能在 ChoicesValue 中选择； </li>
<li> TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择；</li>
<li> OBJECT：参数值为对象类型，ChoiceProperties 为改对象类型关联的属性；</li>
<li> CUSTOM_NUM：参数值用户自定义，整型类型；</li>
<li> CUSTOM_STRING：参数值用户自定义，字符串类型。</li>注意：当参数类型为 OBJECT 类型时，请注意参考 [示例2 参数为 OBJECT 类型的创建](https://tcloud4api.woa.com/document/product/1657/79382?!preview&!document=1)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 参数值是否支持多选或者填写多个。
         * @type {boolean || null}
         */
        this.IsMultiple = null;

        /**
         * 是否允许为空。
         * @type {boolean || null}
         */
        this.IsAllowEmpty = null;

        /**
         * 该参数对应的关联配置参数，属于调用接口的必填参数。
注意：如果可选参数无特殊新增参数则该数组为空数组。
         * @type {Array.<RuleChoicePropertiesItem> || null}
         */
        this.ChoiceProperties = null;

        /**
         * <li> 为 NULL：无特殊参数，RuleAction 选择 NormalAction；</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleExtraParameter || null}
         */
        this.ExtraParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.ChoicesValue = 'ChoicesValue' in params ? params.ChoicesValue : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.IsMultiple = 'IsMultiple' in params ? params.IsMultiple : null;
        this.IsAllowEmpty = 'IsAllowEmpty' in params ? params.IsAllowEmpty : null;

        if (params.ChoiceProperties) {
            this.ChoiceProperties = new Array();
            for (let z in params.ChoiceProperties) {
                let obj = new RuleChoicePropertiesItem();
                obj.deserialize(params.ChoiceProperties[z]);
                this.ChoiceProperties.push(obj);
            }
        }

        if (params.ExtraParameter) {
            let obj = new RuleExtraParameter();
            obj.deserialize(params.ExtraParameter)
            this.ExtraParameter = obj;
        }

    }
}

/**
 * DescribeOverviewL7Data返回参数结构体
 * @class
 */
class DescribeOverviewL7DataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 七层监控类时序流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimingDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Hsts配置
 * @class
 */
class Hsts extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * MaxAge数值。单位为秒，最大值为1天。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxAge = null;

        /**
         * 是否包含子域名，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IncludeSubDomains = null;

        /**
         * 是否开启预加载，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Preload = null;

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
        this.Preload = 'Preload' in params ? params.Preload : null;

    }
}

/**
 * 速率限制模板
 * @class
 */
class RateLimitTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板等级名称，取值有：
<li>sup_loose：超级宽松；</li>
<li>loose：宽松；</li>
<li>emergency：紧急；</li>
<li>normal：适中；</li>
<li>strict：严格；</li>
<li>close：关闭，仅精准速率限制生效。</li>
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 模板处置方式，取值有：
<li>alg：JavaScript挑战；</li>
<li>monitor：观察。</li>不填写默认取alg。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 模板值详情。仅出参返回。
         * @type {RateLimitTemplateDetail || null}
         */
        this.RateLimitTemplateDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Action = 'Action' in params ? params.Action : null;

        if (params.RateLimitTemplateDetail) {
            let obj = new RateLimitTemplateDetail();
            obj.deserialize(params.RateLimitTemplateDetail)
            this.RateLimitTemplateDetail = obj;
        }

    }
}

/**
 * ModifyHostsCertificate返回参数结构体
 * @class
 */
class ModifyHostsCertificateResponse extends  AbstractModel {
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
 * CreateRule请求参数结构体
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 规则名称，名称字符串长度 1～255。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则状态，取值有：
<li> enable: 启用； </li>
<li> disable: 未启用。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 规则内容。
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

        /**
         * 规则标签。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * ModifyZoneStatus请求参数结构体
 * @class
 */
class ModifyZoneStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点状态，取值有：
<li> false：开启站点；</li>
<li> true：关闭站点。</li>
         * @type {boolean || null}
         */
        this.Paused = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Paused = 'Paused' in params ? params.Paused : null;

    }
}

/**
 * TopN的Entry数据
 * @class
 */
class TopEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * top查询维度值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 查询具体数据。
         * @type {Array.<TopEntryValue> || null}
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
        this.Key = 'Key' in params ? params.Key : null;

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new TopEntryValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * 慢速攻击配置。
 * @class
 */
class SlowPostConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 首包配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FirstPartConfig || null}
         */
        this.FirstPartConfig = null;

        /**
         * 基础配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SlowRateConfig || null}
         */
        this.SlowRateConfig = null;

        /**
         * 慢速攻击的处置动作，取值有：
<li>monitor：观察；</li>
<li>drop：拦截。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 本规则的Id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.FirstPartConfig) {
            let obj = new FirstPartConfig();
            obj.deserialize(params.FirstPartConfig)
            this.FirstPartConfig = obj;
        }

        if (params.SlowRateConfig) {
            let obj = new SlowRateConfig();
            obj.deserialize(params.SlowRateConfig)
            this.SlowRateConfig = obj;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * 模板当前详细配置
 * @class
 */
class RateLimitTemplateDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板等级名称，取值有：
<li>sup_loose：超级宽松；</li>
<li>loose：宽松；</li>
<li>emergency：紧急；</li>
<li>normal：适中；</li>
<li>strict：严格；</li>
<li>close：关闭，仅精准速率限制生效。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 唯一id。
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 模板处置方式，取值有：
<li>alg：JavaScript挑战；</li>
<li>monitor：观察。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 惩罚时间，取值范围0-2天，单位秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * 统计阈值，单位是次，取值范围0-4294967294。
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 统计周期，取值范围0-120秒。
         * @type {number || null}
         */
        this.Period = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.ID = 'ID' in params ? params.ID : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * 例外规则的配置，包含生效的条件，生效的范围。
 * @class
 */
class ExceptUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称，不可使用中文。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则的处置方式，当前仅支持skip：跳过全部托管规则。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 规则生效状态，取值有：
<li>on：生效；</li>
<li>off：失效。</li>
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * 规则ID。仅出参使用。默认由底层生成。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 更新时间，如果为null，默认由底层按当前时间生成。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 匹配条件。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExceptUserRuleCondition> || null}
         */
        this.ExceptUserRuleConditions = null;

        /**
         * 规则生效的范围。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExceptUserRuleScope || null}
         */
        this.ExceptUserRuleScope = null;

        /**
         * 优先级，取值范围0-100。如果为null，默认由底层设置为0。
         * @type {number || null}
         */
        this.RulePriority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.ExceptUserRuleConditions) {
            this.ExceptUserRuleConditions = new Array();
            for (let z in params.ExceptUserRuleConditions) {
                let obj = new ExceptUserRuleCondition();
                obj.deserialize(params.ExceptUserRuleConditions[z]);
                this.ExceptUserRuleConditions.push(obj);
            }
        }

        if (params.ExceptUserRuleScope) {
            let obj = new ExceptUserRuleScope();
            obj.deserialize(params.ExceptUserRuleScope)
            this.ExceptUserRuleScope = obj;
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;

    }
}

/**
 * CreateApplicationProxyRule返回参数结构体
 * @class
 */
class CreateApplicationProxyRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RateLimit规则
 * @class
 */
class RateLimitUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 速率限制统计阈值，单位是次，取值范围0-4294967294。
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 速率限制统计时间，取值范围 10/20/30/40/50/60 单位是秒。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 处置动作，取值有：
<li>monitor：观察；</li>
<li>drop：拦截；</li>
<li>alg：JavaScript挑战。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 惩罚时长，0-2天。
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * 处罚时长单位，取值有：
<li>second：秒；</li>
<li>minutes：分钟；</li>
<li>hour：小时。</li>
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * 规则状态，取值有：
<li>on：生效；</li>
<li>off：不生效。</li>默认on生效。
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * 规则详情。
         * @type {Array.<AclCondition> || null}
         */
        this.AclConditions = null;

        /**
         * 规则权重，取值范围0-100。
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * 规则id。仅出参使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 过滤词，取值有：
<li>sip：客户端ip。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FreqFields = null;

        /**
         * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 统计范围，字段为null时，代表source_to_eo。取值有：
<li>source_to_eo：（响应）源站到EdgeOne。</li>
<li>client_to_eo：（请求）客户端到EdgeOne；</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FreqScope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.PunishTimeUnit = 'PunishTimeUnit' in params ? params.PunishTimeUnit : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;

        if (params.AclConditions) {
            this.AclConditions = new Array();
            for (let z in params.AclConditions) {
                let obj = new AclCondition();
                obj.deserialize(params.AclConditions[z]);
                this.AclConditions.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.FreqFields = 'FreqFields' in params ? params.FreqFields : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FreqScope = 'FreqScope' in params ? params.FreqScope : null;

    }
}

/**
 * 嵌套规则信息。
 * @class
 */
class SubRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行功能判断条件。
注意：满足该数组内任意一项条件，功能即可执行。
         * @type {Array.<RuleAndConditions> || null}
         */
        this.Conditions = null;

        /**
         * 执行的功能。
         * @type {Array.<Action> || null}
         */
        this.Actions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RuleAndConditions();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new Action();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

    }
}

/**
 * DescribeLogSets请求参数结构体
 * @class
 */
class DescribeLogSetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集所属的地域。
         * @type {string || null}
         */
        this.LogSetRegion = null;

        /**
         * 日志集ID。
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * 日志集名称。
         * @type {string || null}
         */
        this.LogSetName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogSetName = 'LogSetName' in params ? params.LogSetName : null;

    }
}

/**
 * CreatePlanForZone请求参数结构体
 * @class
 */
class CreatePlanForZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 所要购买套餐的类型，取值有：
<li> sta: 全球内容分发网络（不包括中国大陆）标准版套餐； </li>
<li> sta_with_bot: 全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理；</li>
<li> sta_cm: 中国大陆内容分发网络标准版套餐； </li>
<li> sta_cm_with_bot: 中国大陆内容分发网络标准版套餐附带bot管理；</li>
<li> sta_global ：全球内容分发网络（包括中国大陆）标准版套餐； </li>
<li> sta_global_with_bot ：全球内容分发网络（包括中国大陆）标准版套餐附带bot管理；</li>
<li> ent: 全球内容分发网络（不包括中国大陆）企业版套餐； </li>
<li> ent_with_bot: 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理；</li>
<li> ent_cm: 中国大陆内容分发网络企业版套餐； </li>
<li> ent_cm_with_bot: 中国大陆内容分发网络企业版套餐附带bot管理。</li>
<li> ent_global ：全球内容分发网络（包括中国大陆）企业版套餐； </li>
<li> ent_global_with_bot ：全球内容分发网络（包括中国大陆）企业版套餐附带bot管理。</li>当前账户可购买套餐类型请以<a href="https://tcloud4api.woa.com/document/product/1657/80124?!preview&!document=1">DescribeAvailablePlans</a>返回为准。
         * @type {string || null}
         */
        this.PlanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PlanType = 'PlanType' in params ? params.PlanType : null;

    }
}

/**
 * 客户端规则信息
 * @class
 */
class ClientRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端ip。
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 规则类型。
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 规则id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 封禁状态，取值有：
<li>block ：封禁 ；</li>
<li>allow ：放行 。</li>
         * @type {string || null}
         */
        this.IpStatus = null;

        /**
         * 封禁时间，采用unix秒级时间戳。
         * @type {number || null}
         */
        this.BlockTime = null;

        /**
         * 每条数据的唯一标识id。
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IpStatus = 'IpStatus' in params ? params.IpStatus : null;
        this.BlockTime = 'BlockTime' in params ? params.BlockTime : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 统计曲线数据项
 * @class
 */
class TimingDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数据对应时间点，采用unix秒级时间戳。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 具体数值。
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
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 站点拨测配置
 * @class
 */
class SpeedTestingConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型，取值有：
<li>1：页面性能;</li>
<li>2：文件上传;</li>
<li>3：文件下载;</li>
<li>4：端口性能;</li>
<li>5：网络质量;</li>
<li>6：音视频体验。</li>
         * @type {number || null}
         */
        this.TaskType = null;

        /**
         * 拨测 url。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 拨测 UA。
         * @type {string || null}
         */
        this.UA = null;

        /**
         * 网络类型。
         * @type {string || null}
         */
        this.Connectivity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.UA = 'UA' in params ? params.UA : null;
        this.Connectivity = 'Connectivity' in params ? params.Connectivity : null;

    }
}

/**
 * CreateApplicationProxy请求参数结构体
 * @class
 */
class CreateApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 当ProxyType=hostname时，表示域名或子域名；
当ProxyType=instance时，表示代理名称。
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 调度模式，取值有：
<li>ip：表示Anycast IP调度；</li>
<li>domain：表示CNAME调度。</li>
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * 是否开启安全，取值有：
<li>0：关闭安全；</li>
<li>1：开启安全。</li>
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * 是否开启加速，取值有：
<li>0：关闭加速；</li>
<li>1：开启加速。</li>
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>不填写使用默认值instance。
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * 会话保持时间，取值范围：30-3600，单位：秒。
不填写使用默认值600。
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * Ipv6访问配置。
不填写表示关闭Ipv6访问。
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * 规则详细信息。
不填写则不创建规则。
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.ApplicationProxyRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.ApplicationProxyRules) {
            this.ApplicationProxyRules = new Array();
            for (let z in params.ApplicationProxyRules) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.ApplicationProxyRules[z]);
                this.ApplicationProxyRules.push(obj);
            }
        }

    }
}

/**
 * 拨测任务状态信息
 * @class
 */
class SpeedTestingStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拨测 url。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 拨测 url 是否使用 https。
         * @type {boolean || null}
         */
        this.Tls = null;

        /**
         * 任务创建时间。
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 任务状态，取值有：
<li> 200：任务完成;</li>
<li> 100：任务进行中。</li>
<li> 503: 任务失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 拨测 UA。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UA = null;

        /**
         * 网络环境。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Connectivity = null;

        /**
         * 是否可达，取值：
<li> true：可达；</li>
<li> false：不可达。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Reachable = null;

        /**
         * 是否超时，取值：
<li> true：超时；</li>
<li> false：不超时。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.TimedOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Tls = 'Tls' in params ? params.Tls : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.UA = 'UA' in params ? params.UA : null;
        this.Connectivity = 'Connectivity' in params ? params.Connectivity : null;
        this.Reachable = 'Reachable' in params ? params.Reachable : null;
        this.TimedOut = 'TimedOut' in params ? params.TimedOut : null;

    }
}

/**
 * DescribeSpeedTestingMetricData返回参数结构体
 * @class
 */
class DescribeSpeedTestingMetricDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点拨测维度数据。
         * @type {SpeedTestingMetricData || null}
         */
        this.SpeedTestingMetricData = null;

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

        if (params.SpeedTestingMetricData) {
            let obj = new SpeedTestingMetricData();
            obj.deserialize(params.SpeedTestingMetricData)
            this.SpeedTestingMetricData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cc配置项。
 * @class
 */
class CC extends  AbstractModel {
    constructor(){
        super();

        /**
         * Waf开关，取值为：
<li> on：开启；</li>
<li> off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 策略ID。
         * @type {number || null}
         */
        this.PolicyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * Bot智能分析规则详情
 * @class
 */
class IntelligenceRuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 智能分析标签，取值有：
<li>evil_bot：恶意bot；</li>
<li>suspect_bot：疑似bot；</li>
<li>good_bot：良好bot；</li>
<li>normal：正常请求。</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 触发智能分析标签对应的处置方式，取值有：
<li>drop：拦截；</li>
<li>trans：放行；</li>
<li>alg：Javascript挑战；</li>
<li>captcha：数字验证码；</li>
<li>monitor：观察。</li>
         * @type {string || null}
         */
        this.Action = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Action = 'Action' in params ? params.Action : null;

    }
}

/**
 * 智能分析规则
 * @class
 */
class IntelligenceRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 规则详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntelligenceRuleItem> || null}
         */
        this.IntelligenceRuleItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.IntelligenceRuleItems) {
            this.IntelligenceRuleItems = new Array();
            for (let z in params.IntelligenceRuleItems) {
                let obj = new IntelligenceRuleItem();
                obj.deserialize(params.IntelligenceRuleItems[z]);
                this.IntelligenceRuleItems.push(obj);
            }
        }

    }
}

/**
 * POST请求上传文件流式传输最大限制
 * @class
 */
class PostMaxSize extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启POST请求上传文件限制，平台默认为限制为32MB，取值有：
<li>on：开启限制；</li>
<li>off：关闭限制。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 最大限制，取值在1MB和500MB之间。单位字节。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.MaxSize = 'MaxSize' in params ? params.MaxSize : null;

    }
}

/**
 * 询价参数
 * @class
 */
class Sv extends  AbstractModel {
    constructor(){
        super();

        /**
         * 询价参数键。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 询价参数值。
         * @type {string || null}
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 规则引擎规则项，Conditions 数组内多个项的关系为 或，内层 Conditions 列表内多个项的关系为 且。
 * @class
 */
class Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行的功能。
         * @type {Array.<Action> || null}
         */
        this.Actions = null;

        /**
         * 执行功能判断条件。
注意：满足该数组内任意一项条件，功能即可执行。
         * @type {Array.<RuleAndConditions> || null}
         */
        this.Conditions = null;

        /**
         * 嵌套规则。
         * @type {Array.<SubRuleItem> || null}
         */
        this.SubRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new Action();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RuleAndConditions();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.SubRules) {
            this.SubRules = new Array();
            for (let z in params.SubRules) {
                let obj = new SubRuleItem();
                obj.deserialize(params.SubRules[z]);
                this.SubRules.push(obj);
            }
        }

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等。
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * CreateAccelerationDomain返回参数结构体
 * @class
 */
class CreateAccelerationDomainResponse extends  AbstractModel {
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
 * DescribeTimingL4Data返回参数结构体
 * @class
 */
class DescribeTimingL4DataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 四层时序流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimingDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateZone返回参数结构体
 * @class
 */
class CreateZoneResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则引擎功能项操作，对于一种功能只对应下面三种类型的其中一种，RuleAction 数组中的每一项只能是其中一个类型，更多功能项的填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
 * @class
 */
class Action extends  AbstractModel {
    constructor(){
        super();

        /**
         * 常规功能操作，选择该类型的功能项有：
<li> 访问URL 重写（AccessUrlRedirect）；</li>
<li> 回源 URL 重写 （UpstreamUrlRedirect）；</li>
<li> QUIC（QUIC）；</li>
<li> WebSocket （WebSocket）；</li>
<li> 视频拖拽（VideoSeek）；</li>
<li> Token 鉴权（Authentication）；</li>
<li> 自定义CacheKey（CacheKey）；</li>
<li> 节点缓存 TTL （Cache）；</li>
<li> 浏览器缓存 TTL（MaxAge）；</li>
<li> 离线缓存（OfflineCache）；</li>
<li> 智能加速（SmartRouting）；</li>
<li> 分片回源（RangeOriginPull）；</li>
<li> HTTP/2 回源（UpstreamHttp2）；</li>
<li> Host Header 重写（HostHeader）；</li>
<li> 强制 HTTPS（ForceRedirect）；</li>
<li> 回源 HTTPS（OriginPullProtocol）；</li>
<li> 缓存预刷新（CachePrefresh）；</li>
<li> 智能压缩（Compression）；</li>
<li> Hsts；</li>
<li> ClientIpHeader；</li>
<li> TlsVersion；</li>
<li> OcspStapling；</li>
<li> HTTP/2 访问（Http2）；</li>
<li> 回源跟随重定向(UpstreamFollowRedirect)；</li>
<li> 修改源站(Origin)。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NormalAction || null}
         */
        this.NormalAction = null;

        /**
         * 带有请求头/响应头的功能操作，选择该类型的功能项有：
<li> 修改 HTTP 请求头（RequestHeader）；</li>
<li> 修改HTTP响应头（ResponseHeader）。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RewriteAction || null}
         */
        this.RewriteAction = null;

        /**
         * 带有状态码的功能操作，选择该类型的功能项有：
<li> 自定义错误页面（ErrorPage）；</li>
<li> 状态码缓存 TTL（StatusCodeCache）。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CodeAction || null}
         */
        this.CodeAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NormalAction) {
            let obj = new NormalAction();
            obj.deserialize(params.NormalAction)
            this.NormalAction = obj;
        }

        if (params.RewriteAction) {
            let obj = new RewriteAction();
            obj.deserialize(params.RewriteAction)
            this.RewriteAction = obj;
        }

        if (params.CodeAction) {
            let obj = new CodeAction();
            obj.deserialize(params.CodeAction)
            this.CodeAction = obj;
        }

    }
}

/**
 * 拨测统计结果
 * @class
 */
class SpeedTestingStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 首屏时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstContentfulPaint = null;

        /**
         * 首屏完全渲染时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstMeaningfulPaint = null;

        /**
         * 整体下载速度，单位 KB/s。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OverallDownloadSpeed = null;

        /**
         * 渲染时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RenderTime = null;

        /**
         * 文档完成时间, 单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DocumentFinishTime = null;

        /**
         * 基础文档TCP连接时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TcpConnectionTime = null;

        /**
         * 基础文档服务器响应时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResponseTime = null;

        /**
         * 基础文档下载时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FileDownloadTime = null;

        /**
         * 整体性能，测试总时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LoadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FirstContentfulPaint = 'FirstContentfulPaint' in params ? params.FirstContentfulPaint : null;
        this.FirstMeaningfulPaint = 'FirstMeaningfulPaint' in params ? params.FirstMeaningfulPaint : null;
        this.OverallDownloadSpeed = 'OverallDownloadSpeed' in params ? params.OverallDownloadSpeed : null;
        this.RenderTime = 'RenderTime' in params ? params.RenderTime : null;
        this.DocumentFinishTime = 'DocumentFinishTime' in params ? params.DocumentFinishTime : null;
        this.TcpConnectionTime = 'TcpConnectionTime' in params ? params.TcpConnectionTime : null;
        this.ResponseTime = 'ResponseTime' in params ? params.ResponseTime : null;
        this.FileDownloadTime = 'FileDownloadTime' in params ? params.FileDownloadTime : null;
        this.LoadTime = 'LoadTime' in params ? params.LoadTime : null;

    }
}

/**
 * DescribeSpeedTestingQuota请求参数结构体
 * @class
 */
class DescribeSpeedTestingQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * 应用代理实例
 * @class
 */
class ApplicationProxy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 代理ID。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 当ProxyType=hostname时，表示域名或子域名；
当ProxyType=instance时，表示代理名称。
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * 调度模式，取值有：
<li>ip：表示Anycast IP调度；</li>
<li>domain：表示CNAME调度。</li>
         * @type {string || null}
         */
        this.PlatType = null;

        /**
         * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
默认值：overseas
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 是否开启安全，取值有：
<li>0：关闭安全；</li>
<li>1：开启安全。</li>
         * @type {number || null}
         */
        this.SecurityType = null;

        /**
         * 是否开启加速，取值有：
<li>0：关闭加速；</li>
<li>1：开启加速。</li>
         * @type {number || null}
         */
        this.AccelerateType = null;

        /**
         * 会话保持时间。
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * 状态，取值有：
<li>online：启用；</li>
<li>offline：停用；</li>
<li>progress：部署中；</li>
<li>stopping：停用中；</li>
<li>fail：部署失败/停用失败。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 封禁状态，取值有：
<li>banned：已封禁;</li>
<li>banning：封禁中；</li>
<li>recover：已解封；</li>
<li>recovering：解封禁中。</li>
         * @type {string || null}
         */
        this.BanStatus = null;

        /**
         * 调度信息。
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * 当ProxyType=hostname时：
表示代理加速唯一标识。
         * @type {string || null}
         */
        this.HostId = null;

        /**
         * Ipv6访问配置。
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * 更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 规则列表。
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.ApplicationProxyRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BanStatus = 'BanStatus' in params ? params.BanStatus : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.ApplicationProxyRules) {
            this.ApplicationProxyRules = new Array();
            for (let z in params.ApplicationProxyRules) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.ApplicationProxyRules[z]);
                this.ApplicationProxyRules.push(obj);
            }
        }

    }
}

/**
 * ModifyApplicationProxy返回参数结构体
 * @class
 */
class ModifyApplicationProxyResponse extends  AbstractModel {
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
 * ReclaimZone请求参数结构体
 * @class
 */
class ReclaimZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * 缓存键配置。
 * @class
 */
class CacheKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启全路径缓存，取值有：
<li>on：开启全路径缓存（即关闭参数忽略）；</li>
<li>off：关闭全路径缓存（即开启参数忽略）。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FullUrlCache = null;

        /**
         * 是否忽略大小写缓存，取值有：
<li>on：忽略；</li>
<li>off：不忽略。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IgnoreCase = null;

        /**
         * CacheKey中包含请求参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryString || null}
         */
        this.QueryString = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FullUrlCache = 'FullUrlCache' in params ? params.FullUrlCache : null;
        this.IgnoreCase = 'IgnoreCase' in params ? params.IgnoreCase : null;

        if (params.QueryString) {
            let obj = new QueryString();
            obj.deserialize(params.QueryString)
            this.QueryString = obj;
        }

    }
}

/**
 * ModifyOriginGroup请求参数结构体
 * @class
 */
class ModifyOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 源站组ID。
         * @type {string || null}
         */
        this.OriginGroupId = null;

        /**
         * 源站类型，取值有：
<li>self：自有源站；</li>
<li>third_party：第三方源站；</li>
<li>cos：腾讯云COS源站。</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站组名称。
         * @type {string || null}
         */
        this.OriginGroupName = null;

        /**
         * 源站配置类型，当OriginType=self时，取值有：
<li>area：按区域配置；</li>
<li>weight： 按权重配置；</li>
<li>proto： 按HTTP协议配置。</li>当OriginType=third_party/cos时放空。
         * @type {string || null}
         */
        this.ConfigurationType = null;

        /**
         * 源站记录信息。
         * @type {Array.<OriginRecord> || null}
         */
        this.OriginRecords = null;

        /**
         * 回源Host，仅当OriginType=self时可以设置。
不填写，表示使用已有配置。
         * @type {string || null}
         */
        this.HostHeader = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginGroupName = 'OriginGroupName' in params ? params.OriginGroupName : null;
        this.ConfigurationType = 'ConfigurationType' in params ? params.ConfigurationType : null;

        if (params.OriginRecords) {
            this.OriginRecords = new Array();
            for (let z in params.OriginRecords) {
                let obj = new OriginRecord();
                obj.deserialize(params.OriginRecords[z]);
                this.OriginRecords.push(obj);
            }
        }
        this.HostHeader = 'HostHeader' in params ? params.HostHeader : null;

    }
}

/**
 * web攻击日志
 * @class
 */
class WebLogs extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求（事件）ID。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * http 日志内容。
         * @type {string || null}
         */
        this.HttpLog = null;

        /**
         * 受攻击子域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 攻击源（客户端）Ip。
         * @type {string || null}
         */
        this.AttackIp = null;

        /**
         * IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)
         * @type {string || null}
         */
        this.SipCountryCode = null;

        /**
         * 真实客户端Ip。
         * @type {string || null}
         */
        this.RealClientIp = null;

        /**
         * 真实客户端Ip所在国家iso-3166中alpha-2编码。
         * @type {string || null}
         */
        this.RealClientIpCountryCode = null;

        /**
         * 攻击时间，采用unix秒级时间戳。
         * @type {number || null}
         */
        this.AttackTime = null;

        /**
         * 请求地址。
         * @type {string || null}
         */
        this.RequestUri = null;

        /**
         * 请求类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReqMethod = null;

        /**
         * 规则相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecRuleRelatedInfo> || null}
         */
        this.RuleDetailList = null;

        /**
         * 攻击内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackContent = null;

        /**
         * 日志所属区域。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.HttpLog = 'HttpLog' in params ? params.HttpLog : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.AttackIp = 'AttackIp' in params ? params.AttackIp : null;
        this.SipCountryCode = 'SipCountryCode' in params ? params.SipCountryCode : null;
        this.RealClientIp = 'RealClientIp' in params ? params.RealClientIp : null;
        this.RealClientIpCountryCode = 'RealClientIpCountryCode' in params ? params.RealClientIpCountryCode : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;
        this.RequestUri = 'RequestUri' in params ? params.RequestUri : null;
        this.ReqMethod = 'ReqMethod' in params ? params.ReqMethod : null;

        if (params.RuleDetailList) {
            this.RuleDetailList = new Array();
            for (let z in params.RuleDetailList) {
                let obj = new SecRuleRelatedInfo();
                obj.deserialize(params.RuleDetailList[z]);
                this.RuleDetailList.push(obj);
            }
        }
        this.AttackContent = 'AttackContent' in params ? params.AttackContent : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DownloadL4Logs返回参数结构体
 * @class
 */
class DownloadL4LogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 四层离线日志数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<L4OfflineLog> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new L4OfflineLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTimingL7CacheData返回参数结构体
 * @class
 */
class DescribeTimingL7CacheDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 七层缓存分析时序类流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimingDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 智能客户端过滤
 * @class
 */
class RateLimitIntelligence extends  AbstractModel {
    constructor(){
        super();

        /**
         * 功能开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 执行动作，取值有：
<li>monitor：观察；</li>
<li>alg：挑战。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 规则id，仅出参使用。
         * @type {number || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeAddableEntityList请求参数结构体
 * @class
 */
class DescribeAddableEntityListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 推送数据类型，取值有:
<li>domain：七层加速日志；</li>
<li>application：四层加速日志；</li>
<li>web-rateLiming：速率限制日志；</li>
<li>web-attack：web攻击防护日志；</li>
<li>web-rule：自定义规则日志；</li>
<li>web-bot：Bot管理日志。</li>
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * 服务区域，取值有：
<li>mainland：中国大陆境内；</li>
<li>overseas：全球（不含中国大陆）。</li>若为国内站账号，则默认取值为mainland；若为国际站账号，则默认取值为overseas。
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * IP黑白名单及IP区域控制配置
 * @class
 */
class IpTableConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭；</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 基础管控规则。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IpTableRule> || null}
         */
        this.IpTableRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.IpTableRules) {
            this.IpTableRules = new Array();
            for (let z in params.IpTableRules) {
                let obj = new IpTableRule();
                obj.deserialize(params.IpTableRules[z]);
                this.IpTableRules.push(obj);
            }
        }

    }
}

/**
 * DescribeSingleL7AnalysisData返回参数结构体
 * @class
 */
class DescribeSingleL7AnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 单值流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SingleDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SingleDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteOriginGroup返回参数结构体
 * @class
 */
class DeleteOriginGroupResponse extends  AbstractModel {
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
 * 刷新预热附带的头部信息
 * @class
 */
class Header extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP头部名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * HTTP头部值。
         * @type {string || null}
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
 * 规则引擎条件且关系条件列表
 * @class
 */
class RuleAndConditions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则引擎条件，该数组内所有项全部满足即判断该条件满足。
         * @type {Array.<RuleCondition> || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new RuleCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

    }
}

/**
 * DescribeSpeedTestingDetails请求参数结构体
 * @class
 */
class DescribeSpeedTestingDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeTimingL7SourceData请求参数结构体
 * @class
 */
class DescribeTimingL7SourceDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指标列表，取值有:
<li>l7Flow_outFlux_hy: Edgeone请求流量；</li>
<li>l7Flow_outBandwidth_hy: Edgeone请求带宽；</li>
<li>l7Flow_inFlux_hy: 源站响应流量；</li>
<li>l7Flow_inBandwidth_hy: 源站响应带宽；</li>
<li>l7Flow_request_hy: 回源请求数；</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 查询时间粒度，取值有：
<li>min: 1分钟；</li>
<li>5min: 5分钟；</li>
<li>hour: 1小时；</li>
<li>day: 1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 过滤条件，详细的过滤条件如下：
<li>domain<br>   按照【<strong>回源Host</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
<li>origin<br>   按照【<strong>源站</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
<li>originGroup<br>   按照【<strong>源站组</strong>】进行过滤，源站组形如：origin-xxxxx。<br>   类型：String<br>   必选：否</li>
<li>flowType<br>   按照【<strong>源站响应类型</strong>】进行过滤，优先级高于 MetricNames.N 参数。<br>   类型：String<br>   必选：否<br>   可选项：<br>   inFlow：源站响应流量，对应MetricNames中l7Flow_inFlux_hy、l7Flow_inBandwidth_hy、l7Flow_request_hy三个指标；<br>   outFlow：EdgeOne请求流量，对应MetricNames中l7Flow_outFlux_hy、l7Flow_outBandwidth_hy、l7Flow_request_hy三个指标。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据；</li>
<li>global：全球数据。</li>不填默认取值为global。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 拦截页面的总体配置，用于配置各个模块的拦截后行为。
 * @class
 */
class DropPageConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Waf(托管规则)模块的拦截页面配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DropPageDetail || null}
         */
        this.WafDropPageDetail = null;

        /**
         * 自定义页面的拦截页面配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DropPageDetail || null}
         */
        this.AclDropPageDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.WafDropPageDetail) {
            let obj = new DropPageDetail();
            obj.deserialize(params.WafDropPageDetail)
            this.WafDropPageDetail = obj;
        }

        if (params.AclDropPageDetail) {
            let obj = new DropPageDetail();
            obj.deserialize(params.AclDropPageDetail)
            this.AclDropPageDetail = obj;
        }

    }
}

/**
 * 不同维度的测速数据。
 * @class
 */
class SpeedTestingMetricData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 源站拨测信息。
         * @type {Array.<SpeedTestingInfo> || null}
         */
        this.OriginSpeedTestingInfo = null;

        /**
         * EO 拨测信息。
         * @type {Array.<SpeedTestingInfo> || null}
         */
        this.ProxySpeedTestingInfo = null;

        /**
         * 站点状态。
         * @type {SpeedTestingStatus || null}
         */
        this.SpeedTestingStatus = null;

        /**
         * 优化建议。
         * @type {Array.<OptimizeAction> || null}
         */
        this.OptimizeAction = null;

        /**
         * EO 整体性能，单位ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProxyLoadTime = null;

        /**
         * 源站整体性能，单位ms。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginLoadTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

        if (params.OriginSpeedTestingInfo) {
            this.OriginSpeedTestingInfo = new Array();
            for (let z in params.OriginSpeedTestingInfo) {
                let obj = new SpeedTestingInfo();
                obj.deserialize(params.OriginSpeedTestingInfo[z]);
                this.OriginSpeedTestingInfo.push(obj);
            }
        }

        if (params.ProxySpeedTestingInfo) {
            this.ProxySpeedTestingInfo = new Array();
            for (let z in params.ProxySpeedTestingInfo) {
                let obj = new SpeedTestingInfo();
                obj.deserialize(params.ProxySpeedTestingInfo[z]);
                this.ProxySpeedTestingInfo.push(obj);
            }
        }

        if (params.SpeedTestingStatus) {
            let obj = new SpeedTestingStatus();
            obj.deserialize(params.SpeedTestingStatus)
            this.SpeedTestingStatus = obj;
        }

        if (params.OptimizeAction) {
            this.OptimizeAction = new Array();
            for (let z in params.OptimizeAction) {
                let obj = new OptimizeAction();
                obj.deserialize(params.OptimizeAction[z]);
                this.OptimizeAction.push(obj);
            }
        }
        this.ProxyLoadTime = 'ProxyLoadTime' in params ? params.ProxyLoadTime : null;
        this.OriginLoadTime = 'OriginLoadTime' in params ? params.OriginLoadTime : null;

    }
}

/**
 * UpdateOriginProtectionIPWhitelist返回参数结构体
 * @class
 */
class UpdateOriginProtectionIPWhitelistResponse extends  AbstractModel {
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
 * 安全数据Entry返回值
 * @class
 */
class SecEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询维度值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 查询维度下详细数据。
         * @type {Array.<SecEntryValue> || null}
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
        this.Key = 'Key' in params ? params.Key : null;

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new SecEntryValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * DescribeIdentifications请求参数结构体
 * @class
 */
class DescribeIdentificationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-name<br>   按照【<strong>站点名称</strong>】进行过滤。<br>   类型：String<br>   必选：是</li>
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页查询偏移量。默认值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目。默认值：20，最大值：1000。
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeDefaultCertificates返回参数结构体
 * @class
 */
class DescribeDefaultCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 默认证书列表。
         * @type {Array.<DefaultServerCertInfo> || null}
         */
        this.DefaultServerCertInfo = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.DefaultServerCertInfo) {
            this.DefaultServerCertInfo = new Array();
            for (let z in params.DefaultServerCertInfo) {
                let obj = new DefaultServerCertInfo();
                obj.deserialize(params.DefaultServerCertInfo[z]);
                this.DefaultServerCertInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 例外规则的详细模块配置。
 * @class
 */
class PartialModule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名称，取值为：
<li>waf：托管规则。</li>
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 模块下的需要例外的具体规则ID列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.Include = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = 'Module' in params ? params.Module : null;
        this.Include = 'Include' in params ? params.Include : null;

    }
}

/**
 * CreateOriginGroup返回参数结构体
 * @class
 */
class CreateOriginGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站组ID。
         * @type {string || null}
         */
        this.OriginGroupId = null;

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
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyApplicationProxyRuleStatus请求参数结构体
 * @class
 */
class ModifyApplicationProxyRuleStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 状态，取值有：
<li>offline: 停用；</li>
<li>online: 启用。</li>
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 加速类型
 * @class
 */
class AccelerateType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速开关。取值范围：
<li> on：打开;</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * 规则引擎常规类型的动作
 * @class
 */
class NormalAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 参数。
         * @type {Array.<RuleNormalActionParams> || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new RuleNormalActionParams();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }

    }
}

/**
 * BindZoneToPlan请求参数结构体
 * @class
 */
class BindZoneToPlanRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 未绑定套餐的站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 待绑定的目标套餐ID。
         * @type {string || null}
         */
        this.PlanId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;

    }
}

/**
 * CreateAccelerationDomain请求参数结构体
 * @class
 */
class CreateAccelerationDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速域名所属站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 加速域名名称。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 源站信息。
         * @type {OriginInfo || null}
         */
        this.OriginInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

        if (params.OriginInfo) {
            let obj = new OriginInfo();
            obj.deserialize(params.OriginInfo)
            this.OriginInfo = obj;
        }

    }
}

/**
 * 缓存遵循源站配置
 * @class
 */
class FollowOrigin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 遵循源站配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 源站未返回 Cache-Control 头时, 设置默认的缓存时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DefaultCacheTime = null;

        /**
         * 源站未返回 Cache-Control 头时, 设置缓存/不缓存
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultCache = null;

        /**
         * 源站未返回 Cache-Control 头时, 使用/不使用默认缓存策略
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DefaultCacheStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.DefaultCacheTime = 'DefaultCacheTime' in params ? params.DefaultCacheTime : null;
        this.DefaultCache = 'DefaultCache' in params ? params.DefaultCache : null;
        this.DefaultCacheStrategy = 'DefaultCacheStrategy' in params ? params.DefaultCacheStrategy : null;

    }
}

/**
 * DeleteZone请求参数结构体
 * @class
 */
class DeleteZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * 安全类型配置项。
 * @class
 */
class SecurityType extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全类型开关，取值为：
<li> on：开启；</li>
<li> off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Bot 规则，下列规则ID可参考接口 DescribeBotManagedRules返回的ID信息
 * @class
 */
class BotManagedRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 触发规则后的处置方式，取值有：
<li>drop：拦截；</li>
<li>trans：放行；</li>
<li>alg：Javascript挑战；</li>
<li>monitor：观察。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 本规则的ID。仅出参使用。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 放行的规则ID。默认所有规则不配置放行。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.TransManagedIds = null;

        /**
         * JS挑战的规则ID。默认所有规则不配置JS挑战。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AlgManagedIds = null;

        /**
         * 数字验证码的规则ID。默认所有规则不配置数字验证码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.CapManagedIds = null;

        /**
         * 观察的规则ID。默认所有规则不配置观察。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.MonManagedIds = null;

        /**
         * 拦截的规则ID。默认所有规则不配置拦截。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.DropManagedIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.TransManagedIds = 'TransManagedIds' in params ? params.TransManagedIds : null;
        this.AlgManagedIds = 'AlgManagedIds' in params ? params.AlgManagedIds : null;
        this.CapManagedIds = 'CapManagedIds' in params ? params.CapManagedIds : null;
        this.MonManagedIds = 'MonManagedIds' in params ? params.MonManagedIds : null;
        this.DropManagedIds = 'DropManagedIds' in params ? params.DropManagedIds : null;

    }
}

/**
 * ModifyDefaultCertificate返回参数结构体
 * @class
 */
class ModifyDefaultCertificateResponse extends  AbstractModel {
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
 * 域名配置信息
 * @class
 */
class DetailHost extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 加速服务状态，取值为：
<li> process：部署中；</li>
<li> online：已启动；</li>
<li> offline：已关闭。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 分配的Cname域名
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 资源ID。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 锁状态。
         * @type {number || null}
         */
        this.Lock = null;

        /**
         * 域名状态类型。
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 域名加速地域，取值有：
<li> global：全球；</li>
<li> mainland：中国大陆；</li>
<li> overseas：境外区域。</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 加速类型配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AccelerateType || null}
         */
        this.AccelerateType = null;

        /**
         * Https配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Https || null}
         */
        this.Https = null;

        /**
         * 缓存配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheConfig || null}
         */
        this.CacheConfig = null;

        /**
         * 源站配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Origin || null}
         */
        this.Origin = null;

        /**
         * 安全类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SecurityType || null}
         */
        this.SecurityType = null;

        /**
         * 缓存键配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheKey || null}
         */
        this.CacheKey = null;

        /**
         * 智能压缩配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Compression || null}
         */
        this.Compression = null;

        /**
         * Waf防护配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Waf || null}
         */
        this.Waf = null;

        /**
         * CC防护配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CC || null}
         */
        this.CC = null;

        /**
         * DDoS防护配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DDoS || null}
         */
        this.DDoS = null;

        /**
         * 智能路由配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SmartRouting || null}
         */
        this.SmartRouting = null;

        /**
         * Ipv6访问配置项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Ipv6 || null}
         */
        this.Ipv6 = null;

        /**
         * 回源时是否携带客户端IP所属地域信息的配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClientIpCountry || null}
         */
        this.ClientIpCountry = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Lock = 'Lock' in params ? params.Lock : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.AccelerateType) {
            let obj = new AccelerateType();
            obj.deserialize(params.AccelerateType)
            this.AccelerateType = obj;
        }

        if (params.Https) {
            let obj = new Https();
            obj.deserialize(params.Https)
            this.Https = obj;
        }

        if (params.CacheConfig) {
            let obj = new CacheConfig();
            obj.deserialize(params.CacheConfig)
            this.CacheConfig = obj;
        }

        if (params.Origin) {
            let obj = new Origin();
            obj.deserialize(params.Origin)
            this.Origin = obj;
        }

        if (params.SecurityType) {
            let obj = new SecurityType();
            obj.deserialize(params.SecurityType)
            this.SecurityType = obj;
        }

        if (params.CacheKey) {
            let obj = new CacheKey();
            obj.deserialize(params.CacheKey)
            this.CacheKey = obj;
        }

        if (params.Compression) {
            let obj = new Compression();
            obj.deserialize(params.Compression)
            this.Compression = obj;
        }

        if (params.Waf) {
            let obj = new Waf();
            obj.deserialize(params.Waf)
            this.Waf = obj;
        }

        if (params.CC) {
            let obj = new CC();
            obj.deserialize(params.CC)
            this.CC = obj;
        }

        if (params.DDoS) {
            let obj = new DDoS();
            obj.deserialize(params.DDoS)
            this.DDoS = obj;
        }

        if (params.SmartRouting) {
            let obj = new SmartRouting();
            obj.deserialize(params.SmartRouting)
            this.SmartRouting = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

        if (params.ClientIpCountry) {
            let obj = new ClientIpCountry();
            obj.deserialize(params.ClientIpCountry)
            this.ClientIpCountry = obj;
        }

    }
}

/**
 * DescribeTopL7AnalysisData返回参数结构体
 * @class
 */
class DescribeTopL7AnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询结果的总条数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 七层流量前topN数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TopDataRecord> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new TopDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOriginGroup请求参数结构体
 * @class
 */
class DescribeOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页查询偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为10，取值：1-1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-20hzkd4rdmy0<br>   类型：String<br>   必选：否<br>   模糊查询：不支持<li>origin-group-id<br>   按照【<strong>源站组ID</strong>】进行过滤。源站组ID形如：origin-2ccgtb24-7dc5-46s2-9r3e-95825d53dwe3a<br>   类型：String<br>   必选：否<br>   模糊查询：不支持<li>origin-group-name<br>   按照【<strong>源站组名称</strong>】进行过滤<br>   类型：String<br>   必选：否<br>   模糊查询：支持。使用模糊查询时，仅支持填写一个源站组名称
         * @type {Array.<AdvancedFilter> || null}
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
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * ModifyApplicationProxyRule返回参数结构体
 * @class
 */
class ModifyApplicationProxyRuleResponse extends  AbstractModel {
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
 * DescribeZoneSetting返回参数结构体
 * @class
 */
class DescribeZoneSettingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ZoneSetting || null}
         */
        this.ZoneSetting = null;

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

        if (params.ZoneSetting) {
            let obj = new ZoneSetting();
            obj.deserialize(params.ZoneSetting)
            this.ZoneSetting = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AI规则引擎防护
 * @class
 */
class AiRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * AI规则引擎状态，取值有：
<li> smart_status_close：关闭；</li>
<li> smart_status_open：拦截处置；</li>
<li> smart_status_observe：观察处置。</li>
         * @type {string || null}
         */
        this.Mode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * 离线日志详细信息
 * @class
 */
class L4OfflineLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志打包开始时间。
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * 四层实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 原始大小 单位byte。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 下载地址。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 日志数据包名。
         * @type {string || null}
         */
        this.LogPacketName = null;

        /**
         * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
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
        this.LogTime = 'LogTime' in params ? params.LogTime : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LogPacketName = 'LogPacketName' in params ? params.LogPacketName : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 拦截页面的配置信息
 * @class
 */
class DropPageDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拦截页面的唯一Id。系统默认包含一个自带拦截页面，Id值为0。
该Id可通过创建拦截页面接口进行上传获取。如传入0，代表使用系统默认拦截页面。
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * 拦截页面的HTTP状态码。状态码范围是100-600。
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 页面文件名或url。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 页面的类型，取值有：
<li> file：页面文件内容；</li>
<li> url：上传的url地址。</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteRules返回参数结构体
 * @class
 */
class DeleteRulesResponse extends  AbstractModel {
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
 * 查询条件
 * @class
 */
class QueryCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 筛选条件的key。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 查询条件操作符，操作类型有：
<li>equals: 等于；</li>
<li>notEquals: 不等于；</li>
<li>include: 包含；</li>
<li>notInclude: 不包含; </li>
<li>startWith: 开始的值是value；</li>
<li>notStartWith: 不以value的值开始；</li>
<li>endWith: 结尾是value值；</li>
<li>notEndWith: 不以value的值结尾。</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 筛选条件的值。
         * @type {Array.<string> || null}
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeWebProtectionData返回参数结构体
 * @class
 */
class DescribeWebProtectionDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC防护时序数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new SecEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 缓存规则配置。
 * @class
 */
class CacheConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Cache || null}
         */
        this.Cache = null;

        /**
         * 不缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NoCache || null}
         */
        this.NoCache = null;

        /**
         * 遵循源站配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FollowOrigin || null}
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

        if (params.Cache) {
            let obj = new Cache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.NoCache) {
            let obj = new NoCache();
            obj.deserialize(params.NoCache)
            this.NoCache = obj;
        }

        if (params.FollowOrigin) {
            let obj = new FollowOrigin();
            obj.deserialize(params.FollowOrigin)
            this.FollowOrigin = obj;
        }

    }
}

/**
 * ModifyApplicationProxyRule请求参数结构体
 * @class
 */
class ModifyApplicationProxyRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则ID。
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 源站类型，取值有：
<li>custom：手动添加；</li>
<li>origins：源站组。</li>不填保持原有值。
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 端口，支持格式：
<li>80：80端口；</li>
<li>81-90：81至90端口。</li>
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * 协议，取值有：
<li>TCP：TCP协议；</li>
<li>UDP：UDP协议。</li>不填保持原有值。
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 源站信息：
<li>当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；</li>
<li>当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。</li>

不填保持原有值。
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * 传递客户端IP，取值有：
<li>TOA：TOA（仅Proto=TCP时可选）；</li>
<li>PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；</li>
<li>PPV2：Proxy Protocol传递，协议版本V2；</li>
<li>OFF：不传递。</li>不填保持原有值。
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 是否开启会话保持，取值有：
<li>true：开启；</li>
<li>false：关闭。</li>不填为false。
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 源站端口，支持格式：
<li>单端口：80；</li>
<li>端口段：81-90，81至90端口。</li>
         * @type {string || null}
         */
        this.OriginPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.OriginPort = 'OriginPort' in params ? params.OriginPort : null;

    }
}

/**
 * ModifyAccelerationDomain返回参数结构体
 * @class
 */
class ModifyAccelerationDomainResponse extends  AbstractModel {
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
 * 失败原因
 * @class
 */
class FailReason extends  AbstractModel {
    constructor(){
        super();

        /**
         * 失败原因。
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 处理失败的资源列表。
         * @type {Array.<string> || null}
         */
        this.Targets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.Targets = 'Targets' in params ? params.Targets : null;

    }
}

/**
 * DescribePrefetchTasks请求参数结构体
 * @class
 */
class DescribePrefetchTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询起始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页查询偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认值：20，上限：1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-id<br>   按照【<strong>站点 ID</strong>】进行过滤。zone-id形如：zone-1379afjk91u32h，暂不支持多值。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。</li><li>job-id<br>   按照【<strong>任务ID</strong>】进行过滤。job-id形如：1379afjk91u32h，暂不支持多值。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。</li><li>target<br>   按照【<strong>目标资源信息</strong>】进行过滤。target形如：http://www.qq.com/1.txt，暂不支持多值。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。</li><li>domains<br>   按照【<strong>域名</strong>】进行过滤。domains形如：www.qq.com。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。</li><li>statuses<br>   按照【<strong>任务状态</strong>】进行过滤。<br>   必选：否<br>   模糊查询：不支持。<br>   可选项：<br>   processing：处理中<br>   success：成功<br>   failed：失败<br>   timeout：超时</li>
         * @type {Array.<AdvancedFilter> || null}
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * DescribeRulesSetting请求参数结构体
 * @class
 */
class DescribeRulesSettingRequest extends  AbstractModel {
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
 * ModifyAliasDomain返回参数结构体
 * @class
 */
class ModifyAliasDomainResponse extends  AbstractModel {
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
 * 日志集基本信息
 * @class
 */
class LogSetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集所属地区。
         * @type {string || null}
         */
        this.LogSetRegion = null;

        /**
         * 日志集名
         * @type {string || null}
         */
        this.LogSetName = null;

        /**
         * 日志集Id
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * 该日志集是否已被删除, 可选的值有：
<li>no: 日志集没有被删除；</li>
<li>yes: 日志集已经被删除；</li>
         * @type {string || null}
         */
        this.Deleted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogSetRegion = 'LogSetRegion' in params ? params.LogSetRegion : null;
        this.LogSetName = 'LogSetName' in params ? params.LogSetName : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;

    }
}

/**
 * 规则引擎HTTP请求头/响应头类型的动作
 * @class
 */
class RewriteAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 参数。
         * @type {Array.<RuleRewriteActionParams> || null}
         */
        this.Parameters = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;

        if (params.Parameters) {
            this.Parameters = new Array();
            for (let z in params.Parameters) {
                let obj = new RuleRewriteActionParams();
                obj.deserialize(params.Parameters[z]);
                this.Parameters.push(obj);
            }
        }

    }
}

/**
 * 站点拨测优化建议
 * @class
 */
class OptimizeAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点性能优化配置项，取值有：
<li>Http2；</li>
<li>Http3；</li>
<li>Brotli。</li>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 网络环境。
         * @type {string || null}
         */
        this.Connectivity = null;

        /**
         * 开启配置项后，预估性能优化效果，单位ms。
         * @type {number || null}
         */
        this.Value = null;

        /**
         * 开启配置项后，预估性能提升比例，单位%。
         * @type {number || null}
         */
        this.Ratio = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Connectivity = 'Connectivity' in params ? params.Connectivity : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Ratio = 'Ratio' in params ? params.Ratio : null;

    }
}

/**
 * DeleteAliasDomain请求参数结构体
 * @class
 */
class DeleteAliasDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 待删除别称域名名称。如果为空，则不执行删除操作。
         * @type {Array.<string> || null}
         */
        this.AliasNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AliasNames = 'AliasNames' in params ? params.AliasNames : null;

    }
}

/**
 * DescribeContentQuota返回参数结构体
 * @class
 */
class DescribeContentQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刷新相关配额。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Quota> || null}
         */
        this.PurgeQuota = null;

        /**
         * 预热相关配额。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Quota> || null}
         */
        this.PrefetchQuota = null;

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

        if (params.PurgeQuota) {
            this.PurgeQuota = new Array();
            for (let z in params.PurgeQuota) {
                let obj = new Quota();
                obj.deserialize(params.PurgeQuota[z]);
                this.PurgeQuota.push(obj);
            }
        }

        if (params.PrefetchQuota) {
            this.PrefetchQuota = new Array();
            for (let z in params.PrefetchQuota) {
                let obj = new Quota();
                obj.deserialize(params.PrefetchQuota[z]);
                this.PrefetchQuota.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAccelerationDomains返回参数结构体
 * @class
 */
class DeleteAccelerationDomainsResponse extends  AbstractModel {
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
 * DescribeDnsData请求参数结构体
 * @class
 */
class DescribeDnsDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone<br>   按照【<strong>站点名称</strong>】进行过滤。站点名称形如：tencent.com<br>   类型：String<br>   必选：否，仅支持填写一个站点
<li>host<br>   按照【<strong>域名</strong>】进行过滤。域名形如：test.tencent.com<br>   类型：String<br>   必选：否，仅支持填写一个域名
<li>type<br>   按照【<strong>DNS解析类型</strong>】进行过滤<br>   类型：String<br>   必选：否<br>   可选项：<br>   A：A记录<br>   AAAA：AAAA记录<br>   CNAME：CNAME记录<br>   MX：MX记录<br>   TXT：TXT记录<br>   NS：NS记录<br>   SRV：SRV记录<br>   CAA：CAA记录
<li>code<br>   按照【<strong>DNS解析状态码</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   NoError：成功<br>   NXDomain：请求域不存在<br>   NotImp：不支持的请求类型<br>   Refused：域名服务器因为策略的原因拒绝执行请求
<li>area<br>   按照【<strong>DNS解析地域</strong>】进行过滤。<br>   类型：String<br>   必选：否。<br>   可选项：<br>   亚洲：Asia<br>   欧洲：Europe<br>   非洲：Africa<br>   大洋洲：Oceania<br>   美洲：Americas
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 时间粒度，取值有：
<li>min：1分钟粒度；</li>
<li>5min：5分钟粒度；</li>
<li>hour：1小时粒度；</li>
<li>day：天粒度。</li>不填写，默认值为：min。
         * @type {string || null}
         */
        this.Interval = null;

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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;

    }
}

/**
 * 规则引擎条件常规动作参数
 * @class
 */
class RuleNormalActionParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * 标签配置
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * CreatePurgeTask请求参数结构体
 * @class
 */
class CreatePurgeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 清除缓存类型，取值有：
<li>purge_url：URL；</li>
<li>purge_prefix：前缀；</li>
<li>purge_host：Hostname；</li>
<li>purge_all：全部缓存；</li>
<li>purge_cache_tag：cache-tag刷新。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 要清除缓存的资源列表，每个元素格式依据Type而定：
1) Type = purge_host 时：
形如：www.example.com 或 foo.bar.example.com。
2) Type = purge_prefix 时：
形如：http://www.example.com/example。
3) Type = purge_url 时：
形如：https://www.example.com/example.jpg。
4）Type = purge_all 时：
Targets可为空，不需要填写。
5）Type = purge_cache_tag 时：
形如：tag1。
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * 若有编码转换，仅清除编码转换后匹配的资源。
若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Targets = 'Targets' in params ? params.Targets : null;
        this.EncodeUrl = 'EncodeUrl' in params ? params.EncodeUrl : null;

    }
}

/**
 * 计费资源
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源 ID。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 付费模式，取值有：
<li>0：后付费。</li>
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 生效时间。
         * @type {string || null}
         */
        this.EnableTime = null;

        /**
         * 失效时间。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 套餐状态，取值有：
<li>normal：正常；</li>
<li>isolated：隔离；</li>
<li>destroyed：销毁。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 询价参数。
         * @type {Array.<Sv> || null}
         */
        this.Sv = null;

        /**
         * 是否自动续费，取值有：
<li>0：默认状态；</li>
<li>1：自动续费；</li>
<li>2：不自动续费。</li>
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 套餐关联资源 ID。
         * @type {string || null}
         */
        this.PlanId = null;

        /**
         * 地域，取值有：
<li>mainland：国内；</li>
<li>overseas：海外。</li>
<li>global：全球。</li>
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
        this.Id = 'Id' in params ? params.Id : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EnableTime = 'EnableTime' in params ? params.EnableTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Sv) {
            this.Sv = new Array();
            for (let z in params.Sv) {
                let obj = new Sv();
                obj.deserialize(params.Sv[z]);
                this.Sv.push(obj);
            }
        }
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.PlanId = 'PlanId' in params ? params.PlanId : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 源站记录私有鉴权参数
 * @class
 */
class PrivateParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有鉴权参数名称，取值有：
<li>AccessKeyId：鉴权参数Access Key ID；</li>
<li>SecretAccessKey：鉴权参数Secret Access Key。</li>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 私有鉴权参数值。
         * @type {string || null}
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
 * DownloadL7Logs返回参数结构体
 * @class
 */
class DownloadL7LogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 七层离线日志数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<L7OfflineLog> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new L7OfflineLog();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用户自定义规则
 * @class
 */
class AclUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 处罚动作，取值有：
<li>trans：放行；</li>
<li>drop：拦截；</li>
<li>monitor：观察；</li>
<li>ban：IP封禁；</li>
<li>redirect：重定向；</li>
<li>page：指定页面；</li>
<li>alg：Javascript挑战。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 规则状态，取值有：
<li>on：生效；</li>
<li>off：失效。</li>
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * 自定义规则。
         * @type {Array.<AclCondition> || null}
         */
        this.AclConditions = null;

        /**
         * 规则优先级，取值范围0-100。
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * 规则Id。仅出参使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 更新时间。仅出参使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * ip封禁的惩罚时间，取值范围0-2天。默认为0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * ip封禁的惩罚时间单位，取值有：
<li>second：秒；</li>
<li>minutes：分；</li>
<li>hour：小时。</li>默认为second。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * 自定义返回页面的名称。默认为空字符串。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义返回页面的实例id。默认为0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * 重定向时候的地址，必须为本用户接入的站点子域名。默认为空字符串。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * 重定向时候的返回码。默认为0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResponseCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;

        if (params.AclConditions) {
            this.AclConditions = new Array();
            for (let z in params.AclConditions) {
                let obj = new AclCondition();
                obj.deserialize(params.AclConditions[z]);
                this.AclConditions.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.PunishTimeUnit = 'PunishTimeUnit' in params ? params.PunishTimeUnit : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.ResponseCode = 'ResponseCode' in params ? params.ResponseCode : null;

    }
}

/**
 * 刷新/预热 可用量及配额
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
        this.Daily = null;

        /**
         * 每日剩余的可提交配额。
         * @type {number || null}
         */
        this.DailyAvailable = null;

        /**
         * 刷新预热缓存类型，取值有：
<li> purge_prefix：按前缀刷新；</li>
<li> purge_url：按URL刷新；</li>
<li> purge_host：按Hostname刷新；</li>
<li> purge_all：刷新全部缓存内容；</li>
<li> purge_cache_tag：按CacheTag刷新；</li><li> prefetch_url：按URL预热。</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Batch = 'Batch' in params ? params.Batch : null;
        this.Daily = 'Daily' in params ? params.Daily : null;
        this.DailyAvailable = 'DailyAvailable' in params ? params.DailyAvailable : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateOriginGroup请求参数结构体
 * @class
 */
class CreateOriginGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 源站类型，取值有：
<li>self：自有源站；</li>
<li>third_party：第三方源站；</li>
<li>cos：腾讯云COS源站。</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站组名称。
         * @type {string || null}
         */
        this.OriginGroupName = null;

        /**
         * 源站配置类型，当OriginType=self时，取值有：
<li>area：按区域配置；</li>
<li>weight： 按权重配置；</li>
<li>proto： 按HTTP协议配置。</li>当OriginType=third_party/cos时放空。
         * @type {string || null}
         */
        this.ConfigurationType = null;

        /**
         * 源站记录信息。
         * @type {Array.<OriginRecord> || null}
         */
        this.OriginRecords = null;

        /**
         * 回源Host，仅当OriginType=self时可以设置。
         * @type {string || null}
         */
        this.HostHeader = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginGroupName = 'OriginGroupName' in params ? params.OriginGroupName : null;
        this.ConfigurationType = 'ConfigurationType' in params ? params.ConfigurationType : null;

        if (params.OriginRecords) {
            this.OriginRecords = new Array();
            for (let z in params.OriginRecords) {
                let obj = new OriginRecord();
                obj.deserialize(params.OriginRecords[z]);
                this.OriginRecords.push(obj);
            }
        }
        this.HostHeader = 'HostHeader' in params ? params.HostHeader : null;

    }
}

/**
 * DescribeTimingL4Data请求参数结构体
 * @class
 */
class DescribeTimingL4DataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询指标，取值有：
<li>l4Flow_connections: 访问连接数；</li>
<li>l4Flow_flux: 访问总流量；</li>
<li>l4Flow_inFlux: 访问入流量；</li>
<li>l4Flow_outFlux: 访问出流量；</li>
<li> l4Flow_outPkt: 访问出包量。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点集合。
若不填写，默认选择全部站点，且最多只能查询近30天的数据；
若填写，则可查询站点绑定套餐支持的<a href="https://cloud.tencent.com/document/product/1552/77380#edgeone-.E5.A5.97.E9.A4.90">数据分析最大查询范围</a>。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 四层实例列表, 不填表示选择全部实例。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * 查询时间粒度，取值有：
<li>min: 1分钟 ；</li>
<li>5min: 5分钟 ；</li>
<li>hour: 1小时 ；</li>
<li>day: 1天 。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 过滤条件，详细的过滤条件Key值如下：
<li>ruleId<br>   按照【<strong>转发规则ID</strong>】进行过滤。</li>
<li>proxyId<br>   按照【<strong>四层代理实例ID</strong>】进行过滤。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.Filters = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据；</li>
<li>global：全球数据。</li>不填默认取值为global。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeHostsSetting请求参数结构体
 * @class
 */
class DescribeHostsSettingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 分页查询偏移量。默认值： 0，最小值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目。默认值： 100，最大值：1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>host<br>   按照【<strong>域名</strong>】进行过滤。<br>   类型：string<br>   必选：否</li>
         * @type {Array.<Filter> || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 规则引擎嵌套规则
 * @class
 */
class SubRuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 嵌套规则信息。
         * @type {Array.<SubRule> || null}
         */
        this.Rules = null;

        /**
         * 规则标签。
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new SubRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * DescribeWebManagedRulesLog请求参数结构体
 * @class
 */
class DescribeWebManagedRulesLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 域名集合，不填默认选择全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 分页查询的限制数目，默认值为20，最大查询条目为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 筛选条件，key可选的值有：
<li>attackType：攻击类型；</li>
<li>riskLevel：风险等级；</li>
<li>action：执行动作（处置方式）；</li>
<li>ruleId：规则id；</li>
<li>sipCountryCode：ip所在国家；</li>
<li>attackIp：攻击ip；</li>
<li>realClientIp：真实客户端ip；</li>
<li>oriDomain：被攻击的子域名；</li>
<li>eventId：事件id；</li>
<li>ua：用户代理；</li>
<li>requestMethod：请求方法；</li>
<li>uri：统一资源标识符。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 内容管理任务结果
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 状态。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 资源。
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 任务类型。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 任务创建时间。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务完成时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ReclaimZone返回参数结构体
 * @class
 */
class ReclaimZoneResponse extends  AbstractModel {
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
 * Waf托管规则组
 * @class
 */
class WafGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行动作，取值有：
<li> block：阻断；</li>
<li> observe：观察。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 防护级别，取值有：
<li> loose：宽松；</li>
<li> normal：正常；</li>
<li> strict：严格；</li>
<li> stricter：超严格；</li>
<li> custom：自定义。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 规则类型id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TypeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.TypeId = 'TypeId' in params ? params.TypeId : null;

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
         * 该查询条件总共条目数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务结果列表。
         * @type {Array.<Task> || null}
         */
        this.Tasks = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new Task();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAvailablePlans返回参数结构体
 * @class
 */
class DescribeAvailablePlansResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前账户可购买套餐类型及相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PlanInfo> || null}
         */
        this.PlanInfo = null;

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

        if (params.PlanInfo) {
            this.PlanInfo = new Array();
            for (let z in params.PlanInfo) {
                let obj = new PlanInfo();
                obj.deserialize(params.PlanInfo[z]);
                this.PlanInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 字段已废弃，请使用Filters中的zone-id。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 查询起始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 分页查询偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查限制数目，默认值：20，最大值：1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：<li>zone-id<br>   按照【<strong>站点 ID</strong>】进行过滤。zone-id形如：zone-xxx，暂不支持多值<br>   类型：String<br>   必选：否<br>   模糊查询：不支持</li><li>job-id<br>   按照【<strong>任务ID</strong>】进行过滤。job-id形如：1379afjk91u32h，暂不支持多值。<br>   类型：String<br>   必选：否<br>   模糊查询：不支持</li><li>target<br>   按照【<strong>目标资源信息</strong>】进行过滤，target形如：http://www.qq.com/1.txt或者tag1，暂不支持多值<br>   类型：String<br>   必选：否<br>   模糊查询：不支持</li><li>domains<br>   按照【<strong>域名</strong>】进行过滤，domains形如：www.qq.com<br>   类型：String<br>   必选：否<br>   模糊查询：不支持。</li><li>statuses<br>   按照【<strong>任务状态</strong>】进行过滤<br>   必选：否<br>   模糊查询：不支持。<br>   可选项：<br>   processing：处理中<br>   success：成功<br>   failed：失败<br>   timeout：超时</li><li>type<br>   按照【<strong>清除缓存类型</strong>】进行过滤，暂不支持多值。<br>   类型：String<br>   必选：否<br>   模糊查询：不支持<br>   可选项：<br>   purge_url：URL<br>   purge_prefix：前缀<br>   purge_all：全部缓存内容<br>   purge_host：Hostname<br>   purge_cache_tag：CacheTag</li>
         * @type {Array.<AdvancedFilter> || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * 源站组信息
 * @class
 */
class OriginGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 源站组ID。
         * @type {string || null}
         */
        this.OriginGroupId = null;

        /**
         * 源站类型，取值有：
<li>self：自有源站；</li>
<li>third_party：第三方源站；</li>
<li>cos：腾讯云COS源站。</li>
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站组名称。
         * @type {string || null}
         */
        this.OriginGroupName = null;

        /**
         * 源站配置类型，当OriginType=self时，取值有：
<li>area：按区域配置；</li>
<li>weight： 按权重配置。</li>
<li>proto： 按HTTP协议配置。</li>当OriginType=third_party/cos时放空。
         * @type {string || null}
         */
        this.ConfigurationType = null;

        /**
         * 源站记录信息。
         * @type {Array.<OriginRecord> || null}
         */
        this.OriginRecords = null;

        /**
         * 源站组更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 当OriginType=self时，表示回源Host。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HostHeader = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OriginGroupId = 'OriginGroupId' in params ? params.OriginGroupId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginGroupName = 'OriginGroupName' in params ? params.OriginGroupName : null;
        this.ConfigurationType = 'ConfigurationType' in params ? params.ConfigurationType : null;

        if (params.OriginRecords) {
            this.OriginRecords = new Array();
            for (let z in params.OriginRecords) {
                let obj = new OriginRecord();
                obj.deserialize(params.OriginRecords[z]);
                this.OriginRecords.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.HostHeader = 'HostHeader' in params ? params.HostHeader : null;

    }
}

/**
 * DescribeWebProtectionTopData返回参数结构体
 * @class
 */
class DescribeWebProtectionTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC防护的TopN数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TopEntry> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new TopEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 自定义名字服务器 IP 信息
 * @class
 */
class VanityNameServersIps extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义名字服务器名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义名字服务器 IPv4 地址。
         * @type {string || null}
         */
        this.IPv4 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IPv4 = 'IPv4' in params ? params.IPv4 : null;

    }
}

/**
 * DescribeWebManagedRulesHitRuleDetail返回参数结构体
 * @class
 */
class DescribeWebManagedRulesHitRuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 命中规则的详细列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecHitRuleInfo> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new SecHitRuleInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebProtectionClientIpList请求参数结构体
 * @class
 */
class DescribeWebProtectionClientIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 域名集合，不填默认选择全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询的时间粒度，支持的粒度有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 筛选条件，key可选的值有：
<li>action：执行动作。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 分页查询的限制数目，默认值为20，最大查询条目为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.QueryCondition) {
            this.QueryCondition = new Array();
            for (let z in params.QueryCondition) {
                let obj = new QueryCondition();
                obj.deserialize(params.QueryCondition[z]);
                this.QueryCondition.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * IdentifyZone请求参数结构体
 * @class
 */
class IdentifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * DownloadL4Logs请求参数结构体
 * @class
 */
class DownloadL4LogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 四层实例ID集合。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * 分页查询的限制数目，默认值为20，最大查询条目为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页的偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

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
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateSpeedTesting返回参数结构体
 * @class
 */
class CreateSpeedTestingResponse extends  AbstractModel {
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
 * CacheKey中包含请求参数
 * @class
 */
class QueryString extends  AbstractModel {
    constructor(){
        super();

        /**
         * CacheKey是否由QueryString组成，取值有：
<li>on：是；</li>
<li>off：否。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * CacheKey使用QueryString的方式，取值有：
<li>includeCustom：使用部分url参数；</li>
<li>excludeCustom：排除部分url参数。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 使用/排除的url参数数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * https 服务端证书配置
 * @class
 */
class DefaultServerCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书备注名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 证书类型，取值有：
<li>default: 默认证书;</li>
<li>upload:用户上传;</li>
<li>managed:腾讯云托管。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * 证书公用名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CommonName = null;

        /**
         * 证书SAN域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * 部署状态，取值有：
<li>processing: 部署中；</li>
<li>deployed: 已部署；</li>
<li>failed: 部署失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Status为失败时,此字段返回失败原因。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 证书算法。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignAlgo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.CommonName = 'CommonName' in params ? params.CommonName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.SignAlgo = 'SignAlgo' in params ? params.SignAlgo : null;

    }
}

/**
 * 命中规则信息
 * @class
 */
class SecHitRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 规则ID。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则类型名称。
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * 命中时间，采用unix秒级时间戳。
         * @type {number || null}
         */
        this.HitTime = null;

        /**
         * 请求数。
         * @type {number || null}
         */
        this.RequestNum = null;

        /**
         * 规则描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 子域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 执行动作（处置方式），取值有：
<li>trans ：通过 ；</li>
<li>alg ：算法挑战 ；</li>
<li>drop ：丢弃 ；</li>
<li>ban ：封禁源ip ；</li>
<li>redirect ：重定向 ；</li>
<li>page ：返回指定页面 ；</li>
<li>monitor ：观察 。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Bot标签，取值有:
<li>evil_bot：恶意Bot；</li>
<li>suspect_bot：疑似Bot；</li>
<li>good_bot：正常Bot；</li>
<li>normal：正常请求；</li>
<li>none：未分类。</li>
         * @type {string || null}
         */
        this.BotLabel = null;

        /**
         * 规则是否启用。
         * @type {boolean || null}
         */
        this.RuleEnabled = null;

        /**
         * 规则是否启用监控告警。
         * @type {boolean || null}
         */
        this.AlarmEnabled = null;

        /**
         * 规则是否存在，取值有：
<li>true: 规则不存在；</li>
<li>false: 规则存在。</li>
         * @type {boolean || null}
         */
        this.RuleDeleted = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.HitTime = 'HitTime' in params ? params.HitTime : null;
        this.RequestNum = 'RequestNum' in params ? params.RequestNum : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.BotLabel = 'BotLabel' in params ? params.BotLabel : null;
        this.RuleEnabled = 'RuleEnabled' in params ? params.RuleEnabled : null;
        this.AlarmEnabled = 'AlarmEnabled' in params ? params.AlarmEnabled : null;
        this.RuleDeleted = 'RuleDeleted' in params ? params.RuleDeleted : null;

    }
}

/**
 * DescribeAccelerationDomains请求参数结构体
 * @class
 */
class DescribeAccelerationDomainsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速域名所属站点ID。不填写该参数默认返回所有站点下的加速域名。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>domain-name<br>   按照【<strong>加速域名名称</strong>】进行过滤。<br>   类型：String<br>   必选：否
<li>origin-type<br>   按照【<strong>源站类型</strong>】进行过滤。<br>   类型：String<br>   必选：否
<li>origin<br>   按照【<strong>主源站地址</strong>】进行过滤。<br>   类型：String<br>   必选：否
<li>backup-origin<br>   按照【<strong>备用源站地址</strong>】进行过滤。<br>   类型：String<br>   必选：否
         * @type {Array.<AdvancedFilter> || null}
         */
        this.Filters = null;

        /**
         * 列表排序方式，取值有：
<li>asc：升序排列；</li>
<li>desc：降序排列。</li>默认值为asc。
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * 匹配方式，取值有：
<li>all：返回匹配所有查询条件的加速域名；</li>
<li>any：返回匹配任意一个查询条件的加速域名。</li>默认值为all。
         * @type {string || null}
         */
        this.Match = null;

        /**
         * 分页查询限制数目，默认值：20，上限：200。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页查询偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 排序依据，取值有：
<li>created_on：加速域名创建时间；</li>
<li>domain-name：加速域名名称；</li>
</li>默认根据domain-name属性排序。
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new AdvancedFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Match = 'Match' in params ? params.Match : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * Grpc配置项
 * @class
 */
class Grpc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启Grpc配置，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Http2回源配置
 * @class
 */
class UpstreamHttp2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * http2回源配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * TopN数据Entry
 * @class
 */
class TopEntryValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序实体名。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 排序实体数量。
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * ReclaimAliasDomain返回参数结构体
 * @class
 */
class ReclaimAliasDomainResponse extends  AbstractModel {
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
 * 离线缓存是否开启
 * @class
 */
class OfflineCache extends  AbstractModel {
    constructor(){
        super();

        /**
         * 离线缓存是否开启，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeDDoSAttackTopData返回参数结构体
 * @class
 */
class DescribeDDoSAttackTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS攻击Top数据列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TopEntry> || null}
         */
        this.Data = null;

        /**
         * 查询结果的总条数。
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
                let obj = new TopEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAliasDomain返回参数结构体
 * @class
 */
class DeleteAliasDomainResponse extends  AbstractModel {
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
 * 安全规则（cc/waf/bot）相关信息
 * @class
 */
class SecRuleRelatedInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 执行动作（处置方式），取值有：
<li>trans ：通过 ；</li>
<li>alg ：算法挑战 ；</li>
<li>drop ：丢弃 ；</li>
<li>ban ：封禁源ip ；</li>
<li>redirect ：重定向 ；</li>
<li>page ：返回指定页面 ；</li>
<li>monitor ：观察 。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 风险等级（waf日志中独有），取值有：
<li>high risk ：高危 ；</li>
<li>middle risk ：中危 ；</li>
<li>low risk ：低危 ；</li>
<li>unkonw ：未知 。</li>
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 规则等级，取值有：
<li>normal  ：正常 。</li>
         * @type {string || null}
         */
        this.RuleLevel = null;

        /**
         * 规则描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则类型名称。
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * 攻击内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackContent = null;

        /**
         * 规则类型，取值有：
<li>waf: 托管规则；</li>
<li>acl：自定义规则；</li>
<li>rate：速率限制规则；</li>
<li>bot：bot防护规则。</li>
         * @type {string || null}
         */
        this.RuleType = null;

        /**
         * 规则是否开启。
         * @type {boolean || null}
         */
        this.RuleEnabled = null;

        /**
         * 规则是否存在，取值有：
<li>true: 规则不存在；</li>
<li>false: 规则存在。</li>
         * @type {boolean || null}
         */
        this.RuleDeleted = null;

        /**
         * 规则是否启用监控告警。
         * @type {boolean || null}
         */
        this.AlarmEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RuleLevel = 'RuleLevel' in params ? params.RuleLevel : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.AttackContent = 'AttackContent' in params ? params.AttackContent : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;
        this.RuleEnabled = 'RuleEnabled' in params ? params.RuleEnabled : null;
        this.RuleDeleted = 'RuleDeleted' in params ? params.RuleDeleted : null;
        this.AlarmEnabled = 'AlarmEnabled' in params ? params.AlarmEnabled : null;

    }
}

/**
 * ModifyAccelerationDomainStatuses请求参数结构体
 * @class
 */
class ModifyAccelerationDomainStatusesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速域名所属站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 要执行状态变更的加速域名列表。
         * @type {Array.<string> || null}
         */
        this.DomainNames = null;

        /**
         * 加速域名状态，取值有：
<li>online：启用；</li>
<li>offline：停用。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 是否强制停用。当域名存在关联资源（如马甲域名、流量调度功能）时，是否强制停用该域名，取值有：
<li> true：停用该域名及所有关联资源；</li>
<li> false：当该加速域名存在关联资源时，不允许停用。</li>不填写，默认值为：false。
         * @type {boolean || null}
         */
        this.Force = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.DomainNames = 'DomainNames' in params ? params.DomainNames : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * 安全Bot配置
 * @class
 */
class BotConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * bot开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 通用详细基础规则。如果为null，默认使用历史配置。
         * @type {BotManagedRule || null}
         */
        this.BotManagedRule = null;

        /**
         * 用户画像规则。如果为null，默认使用历史配置。
         * @type {BotPortraitRule || null}
         */
        this.BotPortraitRule = null;

        /**
         * Bot智能分析。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {IntelligenceRule || null}
         */
        this.IntelligenceRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.BotManagedRule) {
            let obj = new BotManagedRule();
            obj.deserialize(params.BotManagedRule)
            this.BotManagedRule = obj;
        }

        if (params.BotPortraitRule) {
            let obj = new BotPortraitRule();
            obj.deserialize(params.BotPortraitRule)
            this.BotPortraitRule = obj;
        }

        if (params.IntelligenceRule) {
            let obj = new IntelligenceRule();
            obj.deserialize(params.IntelligenceRule)
            this.IntelligenceRule = obj;
        }

    }
}

/**
 * DescribeLogTopicTasks返回参数结构体
 * @class
 */
class DescribeLogTopicTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推送任务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClsLogTopicInfo> || null}
         */
        this.TopicList = null;

        /**
         * 查询结果的总条数。
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

        if (params.TopicList) {
            this.TopicList = new Array();
            for (let z in params.TopicList) {
                let obj = new ClsLogTopicInfo();
                obj.deserialize(params.TopicList[z]);
                this.TopicList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateReplayTask返回参数结构体
 * @class
 */
class CreateReplayTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 此次任务ID。
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 失败的任务列表及原因。
         * @type {Array.<FailReason> || null}
         */
        this.FailedList = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;

        if (params.FailedList) {
            this.FailedList = new Array();
            for (let z in params.FailedList) {
                let obj = new FailReason();
                obj.deserialize(params.FailedList[z]);
                this.FailedList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreatePlanForZoneResponse: CreatePlanForZoneResponse,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    DescribeSpeedTestingQuotaResponse: DescribeSpeedTestingQuotaResponse,
    Compression: Compression,
    DeleteRulesRequest: DeleteRulesRequest,
    ExceptUserRuleCondition: ExceptUserRuleCondition,
    ModifyDefaultCertificateRequest: ModifyDefaultCertificateRequest,
    SingleDataRecord: SingleDataRecord,
    DescribeOriginGroupResponse: DescribeOriginGroupResponse,
    DescribeWebManagedRulesLogResponse: DescribeWebManagedRulesLogResponse,
    SecClientIp: SecClientIp,
    DescribeTopL7CacheDataRequest: DescribeTopL7CacheDataRequest,
    SingleTypeValue: SingleTypeValue,
    CreateCredentialResponse: CreateCredentialResponse,
    DeleteApplicationProxyResponse: DeleteApplicationProxyResponse,
    Https: Https,
    SecEntryValue: SecEntryValue,
    DescribeZonesRequest: DescribeZonesRequest,
    DiffIPWhitelist: DiffIPWhitelist,
    DescribeLogTopicTasksRequest: DescribeLogTopicTasksRequest,
    CreateCredentialRequest: CreateCredentialRequest,
    ModifyRuleRequest: ModifyRuleRequest,
    OriginRecord: OriginRecord,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    DescribeWebManagedRulesHitRuleDetailRequest: DescribeWebManagedRulesHitRuleDetailRequest,
    AdvancedFilter: AdvancedFilter,
    DeleteApplicationProxyRequest: DeleteApplicationProxyRequest,
    OriginDetail: OriginDetail,
    DescribeDDoSAttackDataResponse: DescribeDDoSAttackDataResponse,
    ModifySecurityWafGroupPolicyRequest: ModifySecurityWafGroupPolicyRequest,
    DescribeZoneSettingRequest: DescribeZoneSettingRequest,
    DescribeClientRuleListResponse: DescribeClientRuleListResponse,
    ModifySecurityPolicyRequest: ModifySecurityPolicyRequest,
    Waf: Waf,
    ModifyApplicationProxyRuleStatusResponse: ModifyApplicationProxyRuleStatusResponse,
    DescribeClientRuleListRequest: DescribeClientRuleListRequest,
    ModifyZoneSettingRequest: ModifyZoneSettingRequest,
    RuleRewriteActionParams: RuleRewriteActionParams,
    CreateApplicationProxyResponse: CreateApplicationProxyResponse,
    ModifyOriginGroupResponse: ModifyOriginGroupResponse,
    DeleteAccelerationDomainsRequest: DeleteAccelerationDomainsRequest,
    ExceptUserRuleScope: ExceptUserRuleScope,
    ModifyAliasDomainRequest: ModifyAliasDomainRequest,
    DescribeAvailablePlansRequest: DescribeAvailablePlansRequest,
    SpeedTestingInfo: SpeedTestingInfo,
    DistrictStatistics: DistrictStatistics,
    OriginInfo: OriginInfo,
    DescribeSingleL7AnalysisDataRequest: DescribeSingleL7AnalysisDataRequest,
    ModifySecurityPolicyResponse: ModifySecurityPolicyResponse,
    DescribeHostsSettingResponse: DescribeHostsSettingResponse,
    ModifyZoneStatusResponse: ModifyZoneStatusResponse,
    ModifyZoneResponse: ModifyZoneResponse,
    WafRule: WafRule,
    ModifyZoneRequest: ModifyZoneRequest,
    ModifyApplicationProxyStatusResponse: ModifyApplicationProxyStatusResponse,
    DeleteZoneResponse: DeleteZoneResponse,
    CreateRuleResponse: CreateRuleResponse,
    DescribeIdentificationsResponse: DescribeIdentificationsResponse,
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    DeleteApplicationProxyRuleResponse: DeleteApplicationProxyRuleResponse,
    ReclaimAliasDomainRequest: ReclaimAliasDomainRequest,
    DescribeRulesResponse: DescribeRulesResponse,
    TimingDataRecord: TimingDataRecord,
    OriginProtectionInfo: OriginProtectionInfo,
    DescribeOriginProtectionResponse: DescribeOriginProtectionResponse,
    BindZoneToPlanResponse: BindZoneToPlanResponse,
    ExceptConfig: ExceptConfig,
    DeleteOriginGroupRequest: DeleteOriginGroupRequest,
    AliasDomain: AliasDomain,
    AclCondition: AclCondition,
    RateLimitConfig: RateLimitConfig,
    DescribeAliasDomainsRequest: DescribeAliasDomainsRequest,
    ModifyApplicationProxyStatusRequest: ModifyApplicationProxyStatusRequest,
    SkipCondition: SkipCondition,
    IpTableRule: IpTableRule,
    L7OfflineLog: L7OfflineLog,
    ModifyHostsCertificateRequest: ModifyHostsCertificateRequest,
    ApplicationProxyRule: ApplicationProxyRule,
    SmartRouting: SmartRouting,
    DescribeDnsDataResponse: DescribeDnsDataResponse,
    ModifyAccelerationDomainStatusesResponse: ModifyAccelerationDomainStatusesResponse,
    Zone: Zone,
    DescribeRulesSettingResponse: DescribeRulesSettingResponse,
    RuleExtraParameter: RuleExtraParameter,
    RulesSettingAction: RulesSettingAction,
    ClientIpHeader: ClientIpHeader,
    DescribeDDoSAttackTopDataRequest: DescribeDDoSAttackTopDataRequest,
    Quic: Quic,
    Ipv6: Ipv6,
    ModifyAccelerationDomainRequest: ModifyAccelerationDomainRequest,
    DescribeRulesRequest: DescribeRulesRequest,
    ClsLogTopicInfo: ClsLogTopicInfo,
    DescribeSpeedTestingMetricDataRequest: DescribeSpeedTestingMetricDataRequest,
    TopDataRecord: TopDataRecord,
    AclConfig: AclConfig,
    ModifyZoneSettingResponse: ModifyZoneSettingResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    AccelerationDomain: AccelerationDomain,
    UpdateOriginProtectionIPWhitelistRequest: UpdateOriginProtectionIPWhitelistRequest,
    Origin: Origin,
    WafConfig: WafConfig,
    DescribeSpeedTestingDetailsResponse: DescribeSpeedTestingDetailsResponse,
    SlowRateConfig: SlowRateConfig,
    DnsData: DnsData,
    ServerCertInfo: ServerCertInfo,
    TimingTypeValue: TimingTypeValue,
    CreateAliasDomainRequest: CreateAliasDomainRequest,
    CreateAliasDomainResponse: CreateAliasDomainResponse,
    DescribeOriginProtectionRequest: DescribeOriginProtectionRequest,
    ClientIpCountry: ClientIpCountry,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DeleteApplicationProxyRuleRequest: DeleteApplicationProxyRuleRequest,
    DescribeApplicationProxiesResponse: DescribeApplicationProxiesResponse,
    DescribeTopL7AnalysisDataRequest: DescribeTopL7AnalysisDataRequest,
    FileAscriptionInfo: FileAscriptionInfo,
    DescribeAccelerationDomainsResponse: DescribeAccelerationDomainsResponse,
    ZoneSetting: ZoneSetting,
    ModifyRulePriorityResponse: ModifyRulePriorityResponse,
    DescribeTopL7CacheDataResponse: DescribeTopL7CacheDataResponse,
    DescribeOverviewL7DataRequest: DescribeOverviewL7DataRequest,
    SwitchConfig: SwitchConfig,
    IdentifyZoneResponse: IdentifyZoneResponse,
    WebSocket: WebSocket,
    DescribeWebProtectionTopDataRequest: DescribeWebProtectionTopDataRequest,
    SpeedTestingDetailData: SpeedTestingDetailData,
    VanityNameServers: VanityNameServers,
    RuleItem: RuleItem,
    ModifySecurityWafGroupPolicyResponse: ModifySecurityWafGroupPolicyResponse,
    DescribeTimingL7SourceDataResponse: DescribeTimingL7SourceDataResponse,
    DescribeWebManagedRulesDataRequest: DescribeWebManagedRulesDataRequest,
    RuleChoicePropertiesItem: RuleChoicePropertiesItem,
    DescribeWebManagedRulesDataResponse: DescribeWebManagedRulesDataResponse,
    SecurityConfig: SecurityConfig,
    CreateSpeedTestingRequest: CreateSpeedTestingRequest,
    MaxAge: MaxAge,
    ModifyAliasDomainStatusResponse: ModifyAliasDomainStatusResponse,
    RuleCodeActionParams: RuleCodeActionParams,
    ModifyRulePriorityRequest: ModifyRulePriorityRequest,
    DescribeTimingL7AnalysisDataRequest: DescribeTimingL7AnalysisDataRequest,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    NoCache: NoCache,
    DescribeDefaultCertificatesRequest: DescribeDefaultCertificatesRequest,
    DescribeAliasDomainsResponse: DescribeAliasDomainsResponse,
    DescribeWebProtectionHitRuleDetailRequest: DescribeWebProtectionHitRuleDetailRequest,
    IPWhitelist: IPWhitelist,
    DDoS: DDoS,
    CreateZoneRequest: CreateZoneRequest,
    PlanInfo: PlanInfo,
    DescribeTimingL7CacheDataRequest: DescribeTimingL7CacheDataRequest,
    SpeedTestingQuota: SpeedTestingQuota,
    ModifyRuleResponse: ModifyRuleResponse,
    CheckCertificateResponse: CheckCertificateResponse,
    AscriptionInfo: AscriptionInfo,
    DescribeLogSetsResponse: DescribeLogSetsResponse,
    DescribeWebProtectionDataRequest: DescribeWebProtectionDataRequest,
    CheckCertificateRequest: CheckCertificateRequest,
    FirstPartConfig: FirstPartConfig,
    DescribeAddableEntityListResponse: DescribeAddableEntityListResponse,
    CreateApplicationProxyRuleRequest: CreateApplicationProxyRuleRequest,
    Cache: Cache,
    ForceRedirect: ForceRedirect,
    ModifyApplicationProxyRequest: ModifyApplicationProxyRequest,
    TemplateConfig: TemplateConfig,
    CodeAction: CodeAction,
    CreateReplayTaskRequest: CreateReplayTaskRequest,
    DescribeWebProtectionHitRuleDetailResponse: DescribeWebProtectionHitRuleDetailResponse,
    Identification: Identification,
    DescribeDDoSAttackDataRequest: DescribeDDoSAttackDataRequest,
    CachePrefresh: CachePrefresh,
    DescribeWebProtectionClientIpListResponse: DescribeWebProtectionClientIpListResponse,
    DescribeTimingL7AnalysisDataResponse: DescribeTimingL7AnalysisDataResponse,
    ModifyAliasDomainStatusRequest: ModifyAliasDomainStatusRequest,
    TopDetailData: TopDetailData,
    DescribeApplicationProxiesRequest: DescribeApplicationProxiesRequest,
    DescribeContentQuotaRequest: DescribeContentQuotaRequest,
    BotPortraitRule: BotPortraitRule,
    RuleCondition: RuleCondition,
    RulesProperties: RulesProperties,
    DescribeOverviewL7DataResponse: DescribeOverviewL7DataResponse,
    Hsts: Hsts,
    RateLimitTemplate: RateLimitTemplate,
    ModifyHostsCertificateResponse: ModifyHostsCertificateResponse,
    CreateRuleRequest: CreateRuleRequest,
    ModifyZoneStatusRequest: ModifyZoneStatusRequest,
    TopEntry: TopEntry,
    SlowPostConfig: SlowPostConfig,
    RateLimitTemplateDetail: RateLimitTemplateDetail,
    ExceptUserRule: ExceptUserRule,
    CreateApplicationProxyRuleResponse: CreateApplicationProxyRuleResponse,
    RateLimitUserRule: RateLimitUserRule,
    SubRule: SubRule,
    DescribeLogSetsRequest: DescribeLogSetsRequest,
    CreatePlanForZoneRequest: CreatePlanForZoneRequest,
    ClientRule: ClientRule,
    TimingDataItem: TimingDataItem,
    SpeedTestingConfig: SpeedTestingConfig,
    CreateApplicationProxyRequest: CreateApplicationProxyRequest,
    SpeedTestingStatus: SpeedTestingStatus,
    DescribeSpeedTestingMetricDataResponse: DescribeSpeedTestingMetricDataResponse,
    CC: CC,
    IntelligenceRuleItem: IntelligenceRuleItem,
    IntelligenceRule: IntelligenceRule,
    PostMaxSize: PostMaxSize,
    Sv: Sv,
    Rule: Rule,
    Filter: Filter,
    CreateAccelerationDomainResponse: CreateAccelerationDomainResponse,
    DescribeTimingL4DataResponse: DescribeTimingL4DataResponse,
    CreateZoneResponse: CreateZoneResponse,
    Action: Action,
    SpeedTestingStatistics: SpeedTestingStatistics,
    DescribeSpeedTestingQuotaRequest: DescribeSpeedTestingQuotaRequest,
    ApplicationProxy: ApplicationProxy,
    ModifyApplicationProxyResponse: ModifyApplicationProxyResponse,
    ReclaimZoneRequest: ReclaimZoneRequest,
    CacheKey: CacheKey,
    ModifyOriginGroupRequest: ModifyOriginGroupRequest,
    WebLogs: WebLogs,
    DownloadL4LogsResponse: DownloadL4LogsResponse,
    DescribeTimingL7CacheDataResponse: DescribeTimingL7CacheDataResponse,
    RateLimitIntelligence: RateLimitIntelligence,
    DescribeAddableEntityListRequest: DescribeAddableEntityListRequest,
    IpTableConfig: IpTableConfig,
    DescribeSingleL7AnalysisDataResponse: DescribeSingleL7AnalysisDataResponse,
    DeleteOriginGroupResponse: DeleteOriginGroupResponse,
    Header: Header,
    RuleAndConditions: RuleAndConditions,
    DescribeSpeedTestingDetailsRequest: DescribeSpeedTestingDetailsRequest,
    DescribeTimingL7SourceDataRequest: DescribeTimingL7SourceDataRequest,
    DropPageConfig: DropPageConfig,
    SpeedTestingMetricData: SpeedTestingMetricData,
    UpdateOriginProtectionIPWhitelistResponse: UpdateOriginProtectionIPWhitelistResponse,
    SecEntry: SecEntry,
    DescribeIdentificationsRequest: DescribeIdentificationsRequest,
    DescribeDefaultCertificatesResponse: DescribeDefaultCertificatesResponse,
    PartialModule: PartialModule,
    CreateOriginGroupResponse: CreateOriginGroupResponse,
    ModifyApplicationProxyRuleStatusRequest: ModifyApplicationProxyRuleStatusRequest,
    AccelerateType: AccelerateType,
    NormalAction: NormalAction,
    BindZoneToPlanRequest: BindZoneToPlanRequest,
    CreateAccelerationDomainRequest: CreateAccelerationDomainRequest,
    FollowOrigin: FollowOrigin,
    DeleteZoneRequest: DeleteZoneRequest,
    SecurityType: SecurityType,
    BotManagedRule: BotManagedRule,
    ModifyDefaultCertificateResponse: ModifyDefaultCertificateResponse,
    DetailHost: DetailHost,
    DescribeTopL7AnalysisDataResponse: DescribeTopL7AnalysisDataResponse,
    DescribeOriginGroupRequest: DescribeOriginGroupRequest,
    ModifyApplicationProxyRuleResponse: ModifyApplicationProxyRuleResponse,
    DescribeZoneSettingResponse: DescribeZoneSettingResponse,
    AiRule: AiRule,
    L4OfflineLog: L4OfflineLog,
    DropPageDetail: DropPageDetail,
    DeleteRulesResponse: DeleteRulesResponse,
    QueryCondition: QueryCondition,
    DescribeWebProtectionDataResponse: DescribeWebProtectionDataResponse,
    CacheConfig: CacheConfig,
    ModifyApplicationProxyRuleRequest: ModifyApplicationProxyRuleRequest,
    ModifyAccelerationDomainResponse: ModifyAccelerationDomainResponse,
    FailReason: FailReason,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    DescribeRulesSettingRequest: DescribeRulesSettingRequest,
    ModifyAliasDomainResponse: ModifyAliasDomainResponse,
    LogSetInfo: LogSetInfo,
    RewriteAction: RewriteAction,
    OptimizeAction: OptimizeAction,
    DeleteAliasDomainRequest: DeleteAliasDomainRequest,
    DescribeContentQuotaResponse: DescribeContentQuotaResponse,
    DeleteAccelerationDomainsResponse: DeleteAccelerationDomainsResponse,
    DescribeDnsDataRequest: DescribeDnsDataRequest,
    RuleNormalActionParams: RuleNormalActionParams,
    Tag: Tag,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    Resource: Resource,
    PrivateParameter: PrivateParameter,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    AclUserRule: AclUserRule,
    Quota: Quota,
    CreateOriginGroupRequest: CreateOriginGroupRequest,
    DescribeTimingL4DataRequest: DescribeTimingL4DataRequest,
    DescribeHostsSettingRequest: DescribeHostsSettingRequest,
    SubRuleItem: SubRuleItem,
    DescribeWebManagedRulesLogRequest: DescribeWebManagedRulesLogRequest,
    Task: Task,
    ReclaimZoneResponse: ReclaimZoneResponse,
    WafGroup: WafGroup,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    DescribeAvailablePlansResponse: DescribeAvailablePlansResponse,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    OriginGroup: OriginGroup,
    DescribeWebProtectionTopDataResponse: DescribeWebProtectionTopDataResponse,
    VanityNameServersIps: VanityNameServersIps,
    DescribeWebManagedRulesHitRuleDetailResponse: DescribeWebManagedRulesHitRuleDetailResponse,
    DescribeWebProtectionClientIpListRequest: DescribeWebProtectionClientIpListRequest,
    IdentifyZoneRequest: IdentifyZoneRequest,
    DownloadL4LogsRequest: DownloadL4LogsRequest,
    CreateSpeedTestingResponse: CreateSpeedTestingResponse,
    QueryString: QueryString,
    DefaultServerCertInfo: DefaultServerCertInfo,
    SecHitRuleInfo: SecHitRuleInfo,
    DescribeAccelerationDomainsRequest: DescribeAccelerationDomainsRequest,
    Grpc: Grpc,
    UpstreamHttp2: UpstreamHttp2,
    TopEntryValue: TopEntryValue,
    ReclaimAliasDomainResponse: ReclaimAliasDomainResponse,
    OfflineCache: OfflineCache,
    DescribeDDoSAttackTopDataResponse: DescribeDDoSAttackTopDataResponse,
    DeleteAliasDomainResponse: DeleteAliasDomainResponse,
    SecRuleRelatedInfo: SecRuleRelatedInfo,
    ModifyAccelerationDomainStatusesRequest: ModifyAccelerationDomainStatusesRequest,
    BotConfig: BotConfig,
    DescribeLogTopicTasksResponse: DescribeLogTopicTasksResponse,
    CreateReplayTaskResponse: CreateReplayTaskResponse,

}

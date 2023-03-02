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
 * 拦截页面的配置信息
 * @class
 */
class DropPageDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拦截页面的唯一Id。系统默认包含一个自带拦截页面，Id值为0。
该Id可通过创建拦截页面接口进行上传获取。如传入0，代表使用系统默认拦截页面
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * 拦截页面的HTTP状态码。状态码范围是 100 - 600。
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 页面的元信息，文件名或url。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 页面的类型。
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
 * 智能压缩配置
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
 * web攻击日志Data
 * @class
 */
class WebLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分组数据。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WebLogs> || null}
         */
        this.List = null;

        /**
         * 分页拉取的起始页号。最小值：1。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 分页拉取的最大返回结果数。最大值：1000。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数。
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new WebLogs();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
 * ACL用户规则
 * @class
 */
class ACLUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 处罚动作。
1. trans 放行
2. drop 拦截
3. monitor 观察
4. ban IP封禁
5. redirect 重定向
6. page 指定页面
7. alg Javascript挑战
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 规则状态。
1. on 规则生效
2. off 规则失效
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * ACL规则。
         * @type {Array.<ACLCondition> || null}
         */
        this.Conditions = null;

        /**
         * 规则优先级，0-100。
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * 规则id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * ip封禁的惩罚时间，0-2天
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * ip封禁的惩罚时间单位。
1. second 秒
2. 分钟 minutes
3. hour 小时
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * 自定义返回页面的实例id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * 自定义返回页面的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 重定向时候的地址，必须为本用户接入的站点子域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * 重定向时候的返回码。
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

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ACLCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.PunishTimeUnit = 'PunishTimeUnit' in params ? params.PunishTimeUnit : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.ResponseCode = 'ResponseCode' in params ? params.ResponseCode : null;

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
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 默认证书ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书状态
deployed: 部署证书
disabled:禁用证书
失败状态下重新deployed即可重试失败
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
 * DescribeWebManagedRulesTopData返回参数结构体
 * @class
 */
class DescribeWebManagedRulesTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * top数据内容。
         * @type {Array.<TopNEntry> || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应消息。
         * @type {string || null}
         */
        this.Msg = null;

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
                let obj = new TopNEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 源站组信息
         * @type {Array.<OriginGroup> || null}
         */
        this.Data = null;

        /**
         * 记录总数
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
                let obj = new OriginGroup();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebManagedRulesAttackEvents返回参数结构体
 * @class
 */
class DescribeWebManagedRulesAttackEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web攻击事件数据
         * @type {WebEventData || null}
         */
        this.Data = null;

        /**
         * 状态，1:失败，0:成功
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回数据
         * @type {string || null}
         */
        this.Msg = null;

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
            let obj = new WebEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * RFC3339标准，客户端时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * RFC3339标准，客户端时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 时序类访问流量指标
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * topN,填0时返回全量数据
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 时间间隔，选填{min, 5min, hour, day, week}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * ZoneId数组
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 筛选条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

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
         * 代理ID
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

    }
}

/**
 * 安全防护实例
 * @class
 */
class SecurityEntity extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户appid
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 一级域名
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 二级域名
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * 类型 domain/application
         * @type {string || null}
         */
        this.EntityType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.EntityType = 'EntityType' in params ? params.EntityType : null;

    }
}

/**
 * 源站组查询过滤参数
 * @class
 */
class OriginFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要过滤的字段，支持：name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 要过滤的值
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
 * 限速拦截日志
 * @class
 */
class BotLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bot攻击日志数据集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BotLog> || null}
         */
        this.List = null;

        /**
         * 分页拉取的起始页号。最小值：1。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 分页拉取的最大返回结果数。最大值：1000。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new BotLog();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
         * 分页查询偏移量。默认值：0，最小值：0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目。默认值：1000，最大值：1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询条件过滤器，复杂类型。
         * @type {Array.<ZoneFilter> || null}
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
                let obj = new ZoneFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

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
         * 模板等级名称。
1. sup_loose 自适应 - 超级宽松
2. loose     自适应 - 宽松
3. emergency 自适应 - 紧急
4. normal    自适应 - 适中
5. strict    固定阈值 - 严格
6. close     关闭 - 仅精准速率限制生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 模板值详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RateLimitTemplateDetail || null}
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
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.Detail) {
            let obj = new RateLimitTemplateDetail();
            obj.deserialize(params.Detail)
            this.Detail = obj;
        }

    }
}

/**
 * DDoS防护分区
 * @class
 */
class ShieldArea extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级域名id
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 策略id
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 防护类型 domain/application
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 四层应用名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EntityName = null;

        /**
         * 7层域名参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DDoSApplication> || null}
         */
        this.Application = null;

        /**
         * 四层tcp转发规则数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TcpNum = null;

        /**
         * 四层udp转发规则数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UdpNum = null;

        /**
         * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * 是否为共享资源客户，注意共享资源用户不可以切换代理模式，true-是；false-否
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Share = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.EntityName = 'EntityName' in params ? params.EntityName : null;

        if (params.Application) {
            this.Application = new Array();
            for (let z in params.Application) {
                let obj = new DDoSApplication();
                obj.deserialize(params.Application[z]);
                this.Application.push(obj);
            }
        }
        this.TcpNum = 'TcpNum' in params ? params.TcpNum : null;
        this.UdpNum = 'UdpNum' in params ? params.UdpNum : null;
        this.Entity = 'Entity' in params ? params.Entity : null;
        this.Share = 'Share' in params ? params.Share : null;

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
         * 证书部署时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeployTime = null;

        /**
         * 部署状态，取值有：
<li>processing: 部署中;</li>
<li>deployed: 已部署。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

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
        this.DeployTime = 'DeployTime' in params ? params.DeployTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.SignAlgo = 'SignAlgo' in params ? params.SignAlgo : null;

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
         * @type {Array.<RuleItem> || null}
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
                let obj = new RuleItem();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Ddos防护配置
 * @class
 */
class DdosRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS防护等级。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DDoSStatusInfo || null}
         */
        this.DdosStatusInfo = null;

        /**
         * DDoS地域封禁。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DDoSGeoIp || null}
         */
        this.DdosGeoIp = null;

        /**
         * DDoS黑白名单。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DdosAllowBlock || null}
         */
        this.DdosAllowBlock = null;

        /**
         * DDoS 协议封禁+连接防护。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DDoSAntiPly || null}
         */
        this.DdosAntiPly = null;

        /**
         * DDoS特征过滤。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DdosPacketFilter || null}
         */
        this.DdosPacketFilter = null;

        /**
         * DDoS端口过滤。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DdosAcls || null}
         */
        this.DdosAcl = null;

        /**
         * DDoS开关，取值有:
<li>on ：开启 ；</li>
<li>off ：关闭 。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * UDP分片功能是否支持，取值有:
<li>on ：支持 ；</li>
<li>off ：不支持 。</li>
         * @type {string || null}
         */
        this.UdpShardOpen = null;

        /**
         * DDoS源站访问速率限制。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DdosSpeedLimit || null}
         */
        this.DdosSpeedLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DdosStatusInfo) {
            let obj = new DDoSStatusInfo();
            obj.deserialize(params.DdosStatusInfo)
            this.DdosStatusInfo = obj;
        }

        if (params.DdosGeoIp) {
            let obj = new DDoSGeoIp();
            obj.deserialize(params.DdosGeoIp)
            this.DdosGeoIp = obj;
        }

        if (params.DdosAllowBlock) {
            let obj = new DdosAllowBlock();
            obj.deserialize(params.DdosAllowBlock)
            this.DdosAllowBlock = obj;
        }

        if (params.DdosAntiPly) {
            let obj = new DDoSAntiPly();
            obj.deserialize(params.DdosAntiPly)
            this.DdosAntiPly = obj;
        }

        if (params.DdosPacketFilter) {
            let obj = new DdosPacketFilter();
            obj.deserialize(params.DdosPacketFilter)
            this.DdosPacketFilter = obj;
        }

        if (params.DdosAcl) {
            let obj = new DdosAcls();
            obj.deserialize(params.DdosAcl)
            this.DdosAcl = obj;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.UdpShardOpen = 'UdpShardOpen' in params ? params.UdpShardOpen : null;

        if (params.DdosSpeedLimit) {
            let obj = new DdosSpeedLimit();
            obj.deserialize(params.DdosSpeedLimit)
            this.DdosSpeedLimit = obj;
        }

    }
}

/**
 * ModifyLoadBalancingStatus返回参数结构体
 * @class
 */
class ModifyLoadBalancingStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 该查询条件总共条目数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务结果列表
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
 * DescribeDDosAttackEvent返回参数结构体
 * @class
 */
class DescribeDDosAttackEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDos攻击事件数据。
         * @type {DDosAttackEventData || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应信息。
         * @type {string || null}
         */
        this.Msg = null;

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
            let obj = new DDosAttackEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
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
 * CreateCustomErrorPage返回参数结构体
 * @class
 */
class CreateCustomErrorPageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义页面上传后的唯一id
         * @type {number || null}
         */
        this.PageId = null;

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
        this.PageId = 'PageId' in params ? params.PageId : null;
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
 * 例外规则生效的具体条件
 * @class
 */
class ExceptUserRuleCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配项。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * 匹配项的参数。当 MatchFrom 为 header 时，可以填入 header 的 key 作为参数。
         * @type {string || null}
         */
        this.MatchParam = null;

        /**
         * 匹配操作符。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 匹配值。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Cache = null;

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
         * @type {ClientIp || null}
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
         * @type {Ipv6Access || null}
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

        if (params.Cache) {
            let obj = new CacheConfig();
            obj.deserialize(params.Cache)
            this.Cache = obj;
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
            let obj = new ClientIp();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

    }
}

/**
 * ModifyDnsRecord请求参数结构体
 * @class
 */
class ModifyDnsRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 生存时间值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 代理模式
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
        this.Id = 'Id' in params ? params.Id : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;

    }
}

/**
 * DDoS配置端口过滤
 * @class
 */
class DDoSAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目的端口结束，取值范围0-65535。
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * 目的端口开始，取值范围0-65535。
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * 源端口结束，取值范围0-65535。
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * 源端口开始，取值范围0-65535。
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * 协议，取值有：
<li>tcp ：tcp协议 ；</li>
<li>udp ：udp协议 ；</li>
<li>all ：全部协议 。</li>
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 执行动作，取值为：
<li>drop ：丢弃 ；</li>
<li>transmit ：放行 ；</li>
<li>forward ：继续防护 。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 是否为系统配置，取值为：
<li>0 ：修改配置 ；</li>
<li>1 ：系统默认配置 。</li>
         * @type {number || null}
         */
        this.Default = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DportEnd = 'DportEnd' in params ? params.DportEnd : null;
        this.DportStart = 'DportStart' in params ? params.DportStart : null;
        this.SportEnd = 'SportEnd' in params ? params.SportEnd : null;
        this.SportStart = 'SportStart' in params ? params.SportStart : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Default = 'Default' in params ? params.Default : null;

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
         * 一级域名
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 二级域名/应用名
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * 安全配置
         * @type {SecurityConfig || null}
         */
        this.Config = null;

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

        if (params.Config) {
            let obj = new SecurityConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
        }

    }
}

/**
 * CreateApplicationProxyRules请求参数结构体
 * @class
 */
class CreateApplicationProxyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则列表
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

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

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }

    }
}

/**
 * 负载均衡信息
 * @class
 */
class LoadBalancing extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名，填写@表示根域
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当Type=dns_only表示DNS的TTL时间
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 使用的源站组ID
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * 使用的源站信息
         * @type {Array.<OriginGroup> || null}
         */
        this.Origin = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 调度域名
注意：此字段可能返回 null，表示取不到有效值。
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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.Origin) {
            this.Origin = new Array();
            for (let z in params.Origin) {
                let obj = new OriginGroup();
                obj.deserialize(params.Origin[z]);
                this.Origin.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;

    }
}

/**
 * ModifyDnssec请求参数结构体
 * @class
 */
class ModifyDnssecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * DNSSEC 状态
- enabled 开启
- disabled 关闭
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * 代理ID。
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
 * ddos特征过滤
 * @class
 */
class DdosPacketFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 特征过滤规则数组。
         * @type {Array.<DDoSFeaturesFilter> || null}
         */
        this.PacketFilter = null;

        /**
         * 特征过滤清空标识，取值有：
<li>off ：清空特征过滤规则，无需填写 PacketFilter 参数 ；</li>
<li>on ：配置特征过滤规则，需填写 PacketFilter 参数。</li>默认值为on。
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

        if (params.PacketFilter) {
            this.PacketFilter = new Array();
            for (let z in params.PacketFilter) {
                let obj = new DDoSFeaturesFilter();
                obj.deserialize(params.PacketFilter[z]);
                this.PacketFilter.push(obj);
            }
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

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
 * ImportDnsRecords请求参数结构体
 * @class
 */
class ImportDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 文件内容
         * @type {string || null}
         */
        this.File = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.File = 'File' in params ? params.File : null;

    }
}

/**
 * 不缓存配置
 * @class
 */
class CacheConfigNoCache extends  AbstractModel {
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
 * ModifyZoneStatus返回参数结构体
 * @class
 */
class ModifyZoneStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点状态
- false 开启站点
- true 关闭站点
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Paused = 'Paused' in params ? params.Paused : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * @type {Array.<RuleSettingDetail> || null}
         */
        this.RuleList = null;

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

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new RuleSettingDetail();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneDetails返回参数结构体
 * @class
 */
class DescribeZoneDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户当前使用的 NS 列表
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 腾讯云分配给用户的 NS 列表
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * 站点状态
- active：NS 已切换
- pending：NS 未切换
- moved：NS 已切走
- deactivated：被封禁
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 站点接入方式
- full：NS 接入
- partial：CNAME 接入
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 站点是否关闭
         * @type {boolean || null}
         */
        this.Paused = null;

        /**
         * 是否开启 CNAME 加速
- enabled：开启
- disabled：关闭
         * @type {string || null}
         */
        this.CnameSpeedUp = null;

        /**
         * cname切换验证状态
- finished 切换完成
- pending 切换验证中
         * @type {string || null}
         */
        this.CnameStatus = null;

        /**
         * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 站点接入地域，取值为：
<li> global：全球；</li>
<li> mainland：中国大陆；</li>
<li> overseas：境外区域。</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 计费资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Resource> || null}
         */
        this.Resources = null;

        /**
         * 站点修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 站点创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 用户自定义 NS 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

        /**
         * 用户自定义 NS IP 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VanityNameServersIps> || null}
         */
        this.VanityNameServersIps = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
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
        this.Area = 'Area' in params ? params.Area : null;

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new Resource();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;

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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Bot攻击日志
 * @class
 */
class BotLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击时间，采用unix秒级时间戳。
         * @type {number || null}
         */
        this.AttackTime = null;

        /**
         * 攻击源（客户端）ip。
         * @type {string || null}
         */
        this.AttackIp = null;

        /**
         * 受攻击域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * URI。
         * @type {string || null}
         */
        this.RequestUri = null;

        /**
         * 当前该字段无效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 请求方法。
         * @type {string || null}
         */
        this.RequestMethod = null;

        /**
         * 攻击内容。
         * @type {string || null}
         */
        this.AttackContent = null;

        /**
         * 当前该字段无效 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 当前该字段无效 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)。
         * @type {string || null}
         */
        this.SipCountryCode = null;

        /**
         * 请求（事件）ID。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 该字段当前无效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisposalMethod = null;

        /**
         * 该字段当前无效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpLog = null;

        /**
         * user agent。
         * @type {string || null}
         */
        this.Ua = null;

        /**
         * 该字段当前无效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DetectionMethod = null;

        /**
         * 该字段当前无效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Confidence = null;

        /**
         * 该字段当前无效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Maliciousness = null;

        /**
         * 规则相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecRuleRelatedInfo> || null}
         */
        this.RuleDetailList = null;

        /**
         * Bot标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;
        this.AttackIp = 'AttackIp' in params ? params.AttackIp : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RequestUri = 'RequestUri' in params ? params.RequestUri : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.RequestMethod = 'RequestMethod' in params ? params.RequestMethod : null;
        this.AttackContent = 'AttackContent' in params ? params.AttackContent : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.SipCountryCode = 'SipCountryCode' in params ? params.SipCountryCode : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.DisposalMethod = 'DisposalMethod' in params ? params.DisposalMethod : null;
        this.HttpLog = 'HttpLog' in params ? params.HttpLog : null;
        this.Ua = 'Ua' in params ? params.Ua : null;
        this.DetectionMethod = 'DetectionMethod' in params ? params.DetectionMethod : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Maliciousness = 'Maliciousness' in params ? params.Maliciousness : null;

        if (params.RuleDetailList) {
            this.RuleDetailList = new Array();
            for (let z in params.RuleDetailList) {
                let obj = new SecRuleRelatedInfo();
                obj.deserialize(params.RuleDetailList[z]);
                this.RuleDetailList.push(obj);
            }
        }
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * 例外规则的生效范围
 * @class
 */
class ExceptUserRuleScope extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生效的模块

1. waf Waf防护
2. bot Bot防护
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Modules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Modules = 'Modules' in params ? params.Modules : null;

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
<li>https：强制 https 回源，https 回源时仅支持源站 443 端口。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginPullProtocol = null;

        /**
         * OriginType 为对象存储（COS）时，可以指定是否允许访问私有 bucket。
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
 * DescribeSecurityPolicyManagedRules请求参数结构体
 * @class
 */
class DescribeSecurityPolicyManagedRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级域名
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名/应用名
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页数量
         * @type {number || null}
         */
        this.PerPage = null;

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
        this.Page = 'Page' in params ? params.Page : null;
        this.PerPage = 'PerPage' in params ? params.PerPage : null;

    }
}

/**
 * DescribeSecurityPortraitRules请求参数结构体
 * @class
 */
class DescribeSecurityPortraitRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级域名
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名/应用名
         * @type {string || null}
         */
        this.Entity = null;

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

    }
}

/**
 * 查询结果排序条件。
 * @class
 */
class CertSort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段，当前支持：
createTime，域名创建时间
certExpireTime，证书过期时间
certDeployTime,  证书部署时间
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
 * ModifyDDoSPolicyHost请求参数结构体
 * @class
 */
class ModifyDDoSPolicyHostRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点id
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 二级域名
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 加速开关 on-开启加速；off-关闭加速（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强）
         * @type {string || null}
         */
        this.AccelerateType = null;

        /**
         * 策略id
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 安全开关 on-开启安全；off-关闭安全（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强）
         * @type {string || null}
         */
        this.SecurityType = null;

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
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;

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
         * 域名列表
         * @type {Array.<DetailHost> || null}
         */
        this.Hosts = null;

        /**
         * 域名数量
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

        if (params.Hosts) {
            this.Hosts = new Array();
            for (let z in params.Hosts) {
                let obj = new DetailHost();
                obj.deserialize(params.Hosts[z]);
                this.Hosts.push(obj);
            }
        }
        this.TotalNumber = 'TotalNumber' in params ? params.TotalNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityPolicyRegions返回参数结构体
 * @class
 */
class DescribeSecurityPolicyRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 地域信息
         * @type {Array.<GeoIp> || null}
         */
        this.GeoIp = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.GeoIp) {
            this.GeoIp = new Array();
            for (let z in params.GeoIp) {
                let obj = new GeoIp();
                obj.deserialize(params.GeoIp[z]);
                this.GeoIp.push(obj);
            }
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
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点当前使用的 NS
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 站点状态
- pending 未接入 NS
- active 已接入 NS
- moved NS 已切走
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 站点接入方式
- full NS 接入
- partial CNAME 接入
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 腾讯云分配的 NS 列表
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * cname 接入状态
- finished 站点验证完成
- pending 站点验证中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CnameStatus = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.CnameStatus = 'CnameStatus' in params ? params.CnameStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDosAttackSourceEvent请求参数结构体
 * @class
 */
class DescribeDDosAttackSourceEventRequest extends  AbstractModel {
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
         * 分页拉取的最大返回结果数。最大值：1000。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页拉取的起始页号。最小值：1。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * ddos策略组id 集合，不填默认选择全部策略id。
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * 站点集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.Area = 'Area' in params ? params.Area : null;

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
         * 站点 ID，用于唯一标识站点信息
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点接入方式
- full NS 接入
- partial CNAME 接入
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 自定义站点信息
         * @type {VanityNameServers || null}
         */
        this.VanityNameServers = null;

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

        if (params.VanityNameServers) {
            let obj = new VanityNameServers();
            obj.deserialize(params.VanityNameServers)
            this.VanityNameServers = obj;
        }

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
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DDos攻击事件数据
 * @class
 */
class DDosAttackEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击事件数据集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DDosAttackEvent> || null}
         */
        this.List = null;

        /**
         * 分页拉取的起始页号。最小值：1。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 分页拉取的最大返回结果数。最大值：1000。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DDosAttackEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
 * CreatePurgeTask返回参数结构体
 * @class
 */
class CreatePurgeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 失败的任务列表及原因
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
 * 规则引擎带有状态码的动作
 * @class
 */
class RuleCodeAction extends  AbstractModel {
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
 * DeleteApplicationProxyRule返回参数结构体
 * @class
 */
class DeleteApplicationProxyRuleResponse extends  AbstractModel {
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
 * DDos攻击事件对象
 * @class
 */
class DDosAttackSourceEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击源ip。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackSourceIp = null;

        /**
         * 地区（国家）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackRegion = null;

        /**
         * 累计攻击流量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackFlow = null;

        /**
         * 累计攻击包量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackPacketNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackSourceIp = 'AttackSourceIp' in params ? params.AttackSourceIp : null;
        this.AttackRegion = 'AttackRegion' in params ? params.AttackRegion : null;
        this.AttackFlow = 'AttackFlow' in params ? params.AttackFlow : null;
        this.AttackPacketNum = 'AttackPacketNum' in params ? params.AttackPacketNum : null;

    }
}

/**
 * L7数据分析时序数据
 * @class
 */
class TimingDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询维度值
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * 详细时序数据
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Id = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.Name = null;

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
         * 是否开启cname加速，取值有：
<li> enabled：开启；</li>
<li> disabled：关闭。</li>
         * @type {string || null}
         */
        this.CnameSpeedUp = null;

        /**
         * cname 接入状态，取值有：
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
         * 站点接入地域，取值为：
<li> global：全球；</li>
<li> mainland：中国大陆；</li>
<li> overseas：境外区域。</li>
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
        this.Name = 'Name' in params ? params.Name : null;
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
 * ddos端口过滤
 * @class
 */
class DdosAcls extends  AbstractModel {
    constructor(){
        super();

        /**
         * 端口过滤规则数组。
         * @type {Array.<DDoSAcl> || null}
         */
        this.Acl = null;

        /**
         * 清空规则标识，取值有：
<li>off ：清空端口过滤规则列表，Acl无需填写。 ；</li>
<li>on ：配置端口过滤规则，需填写Acl参数。</li>默认值为on。
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

        if (params.Acl) {
            this.Acl = new Array();
            for (let z in params.Acl) {
                let obj = new DDoSAcl();
                obj.deserialize(params.Acl[z]);
                this.Acl.push(obj);
            }
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

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
         * 源站组ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 站点ID
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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
 * 标签配置
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
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
 * RateLimit配置
 * @class
 */
class RateLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关。
1. on 开启RateLimit；
2. off 关闭RateLimit
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 速率限制-用户规则列表。
         * @type {Array.<RateLimitUserRule> || null}
         */
        this.UserRules = null;

        /**
         * 速率限制模板功能。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RateLimitTemplate || null}
         */
        this.Template = null;

        /**
         * 智能客户端过滤。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RateLimitIntelligence || null}
         */
        this.Intelligence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.UserRules) {
            this.UserRules = new Array();
            for (let z in params.UserRules) {
                let obj = new RateLimitUserRule();
                obj.deserialize(params.UserRules[z]);
                this.UserRules.push(obj);
            }
        }

        if (params.Template) {
            let obj = new RateLimitTemplate();
            obj.deserialize(params.Template)
            this.Template = obj;
        }

        if (params.Intelligence) {
            let obj = new RateLimitIntelligence();
            obj.deserialize(params.Intelligence)
            this.Intelligence = obj;
        }

    }
}

/**
 * CreateDnsRecord请求参数结构体
 * @class
 */
class CreateDnsRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 代理模式，可选值：dns_only, cdn_only, secure_cdn
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 生存时间值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * 详细规则。
 * @class
 */
class IpTableRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 处置动作。
1. drop 拦截
2. trans放行
3. monitor观察
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 类型匹配。
1. ip 根据ip
2. area 根据区域
3. ua 根据User-Agent
4. referer 根据Referer
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * 匹配内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MatchContent = null;

        /**
         * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.MatchFrom = 'MatchFrom' in params ? params.MatchFrom : null;
        this.MatchContent = 'MatchContent' in params ? params.MatchContent : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

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
         * 日志打包开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogTime = null;

        /**
         * 子域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 原始大小 单位byte
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 下载地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 日志数据包名
注意：此字段可能返回 null，表示取不到有效值。
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
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 本次变更的域名
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

        /**
         * 证书信息, 只需要传入 CertId 即可, 如果为空, 则使用默认证书
         * @type {Array.<ServerCertInfo> || null}
         */
        this.CertInfo = null;

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

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }

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
单个端口，如：80。
端口段，如：81-82。表示81，82两个端口。
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
当OriginType=custom时，表示一个或多个源站，如：
OriginValue=["8.8.8.8:80","9.9.9.9:80"]
OriginValue=["test.com:80"]；
当OriginType=origins时，要求有且仅有一个元素，表示源站组ID，如：
OriginValue=["origin-537f5b41-162a-11ed-abaa-525400c5da15"]。
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
<li>OFF：不传递。</li>
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 是否开启会话保持，取值有：
<li>true：开启；</li>
<li>false：关闭。</li>
         * @type {boolean || null}
         */
        this.SessionPersist = null;

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
 * DDoS端口限速
 * @class
 */
class DdosSpeedLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站包量限制，支持单位有pps、Kpps、Mpps、Gpps。支持范围1 pps-10000 Gpps。"0 pps"或其他单位数值为0，即不限包。""为不更新。
         * @type {string || null}
         */
        this.PackageLimit = null;

        /**
         * 源站流量限制，支持单位有bps、Kbps、Mbps、Gbps，支持范围1 bps-10000 Gbps。"0 bps"或其他单位数值为0，即不限流。""为不更新。
         * @type {string || null}
         */
        this.FluxLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageLimit = 'PackageLimit' in params ? params.PackageLimit : null;
        this.FluxLimit = 'FluxLimit' in params ? params.FluxLimit : null;

    }
}

/**
 * 源站健康检查，源站状态信息
 * @class
 */
class OriginCheckOriginStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * healthy: 健康，unhealthy: 不健康，process: 探测中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * host列表，源站组不健康时存在值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Host = 'Host' in params ? params.Host : null;

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
 * DescribeSecurityPolicyManagedRulesId请求参数结构体
 * @class
 */
class DescribeSecurityPolicyManagedRulesIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则id集合
         * @type {Array.<number> || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

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
 * 缓存时间设置
 * @class
 */
class CacheConfigCache extends  AbstractModel {
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
         * @type {string || null}
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
 * 规则引擎功能项操作，对于一种功能只对应下面三种类型的其中一种，RuleAction 数组中的每一项只能是其中一个类型，更多功能项的填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
 * @class
 */
class RuleAction extends  AbstractModel {
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
<li> OcspStapling。</li>
<li> HTTP/2 访问（Http2）。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleNormalAction || null}
         */
        this.NormalAction = null;

        /**
         * 带有请求头/响应头的功能操作，选择该类型的功能项有：
<li> 修改 HTTP 请求头（RequestHeader）；</li>
<li> 修改HTTP响应头（ResponseHeader）。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleRewriteAction || null}
         */
        this.RewriteAction = null;

        /**
         * 带有状态码的功能操作，选择该类型的功能项有：
<li> 自定义错误页面（ErrorPage）；</li>
<li> 状态码缓存 TTL（StatusCodeCache）。</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RuleCodeAction || null}
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
            let obj = new RuleNormalAction();
            obj.deserialize(params.NormalAction)
            this.NormalAction = obj;
        }

        if (params.RewriteAction) {
            let obj = new RuleRewriteAction();
            obj.deserialize(params.RewriteAction)
            this.RewriteAction = obj;
        }

        if (params.CodeAction) {
            let obj = new RuleCodeAction();
            obj.deserialize(params.CodeAction)
            this.CodeAction = obj;
        }

    }
}

/**
 * 证书查询过滤条件
 * @class
 */
class CertFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名，支持的列表如下:
 - host：域名。
 - certId: 证书ID
 - certAlias: 证书备用名
 - certType: default: 默认证书, upload: 上传证书, managed:腾讯云证书
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否启用模糊查询，仅支持过滤字段名host。
模糊查询时，Value长度最大为1。
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
 * DescribeIdentification请求参数结构体
 * @class
 */
class DescribeIdentificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * ModifyLoadBalancingStatus请求参数结构体
 * @class
 */
class ModifyLoadBalancingStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * 状态
online: 启用
offline: 停用
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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeDDosAttackTopData返回参数结构体
 * @class
 */
class DescribeDDosAttackTopDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * top数据内容
         * @type {Array.<TopNEntry> || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应消息。
         * @type {string || null}
         */
        this.Msg = null;

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
                let obj = new TopNEntry();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCnameStatus返回参数结构体
 * @class
 */
class DescribeCnameStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态列表
         * @type {Array.<CnameStatus> || null}
         */
        this.Status = null;

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

        if (params.Status) {
            this.Status = new Array();
            for (let z in params.Status) {
                let obj = new CnameStatus();
                obj.deserialize(params.Status[z]);
                this.Status.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancing请求参数结构体
 * @class
 */
class DescribeLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 分页参数Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤参数Host
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 过滤参数Host是否支持模糊匹配
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Fuzzy = 'Fuzzy' in params ? params.Fuzzy : null;

    }
}

/**
 * CC拦截事件
 * @class
 */
class CCInterceptEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 拦截次数/min
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InterceptNum = null;

        /**
         * 速拦截时间，分钟时间/min,单位为s
         * @type {number || null}
         */
        this.InterceptTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.InterceptNum = 'InterceptNum' in params ? params.InterceptNum : null;
        this.InterceptTime = 'InterceptTime' in params ? params.InterceptTime : null;

    }
}

/**
 * DDoS封禁等级
 * @class
 */
class DDoSStatusInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 暂不支持，默认值off。
         * @type {string || null}
         */
        this.AiStatus = null;

        /**
         * 废弃字段。
         * @type {string || null}
         */
        this.Appid = null;

        /**
         * 策略等级，取值有:
<li>low ：宽松 ；</li>
<li>middle ：适中 ；</li>
<li>high : 严格。 </li>
         * @type {string || null}
         */
        this.PlyLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AiStatus = 'AiStatus' in params ? params.AiStatus : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.PlyLevel = 'PlyLevel' in params ? params.PlyLevel : null;

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
         * 开关。
1. on 开启
2. off 关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 自定义-用户规则。
         * @type {Array.<ACLUserRule> || null}
         */
        this.UserRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.UserRules) {
            this.UserRules = new Array();
            for (let z in params.UserRules) {
                let obj = new ACLUserRule();
                obj.deserialize(params.UserRules[z]);
                this.UserRules.push(obj);
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
 * ScanDnsRecords返回参数结构体
 * @class
 */
class ScanDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扫描状态
- doing 扫描中
- done 扫描完成
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 扫描后添加的记录数
         * @type {number || null}
         */
        this.RecordsAdded = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RecordsAdded = 'RecordsAdded' in params ? params.RecordsAdded : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 模板当前详细配置。
 * @class
 */
class RateLimitTemplateDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板等级名称。
1. sup_loose 自适应 - 超级宽松
2. loose     自适应 - 宽松
3. emergency 自适应 - 紧急
4. normal    自适应 - 适中
5. strict    固定阈值 - 严格
6. close     关闭 - 仅精准速率限制生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 唯一id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ID = null;

        /**
         * 处置动作。模板阀值触发后的处罚行为。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 惩罚时间，单位是秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * 阈值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 统计周期。
注意：此字段可能返回 null，表示取不到有效值。
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
         * 防护级别，取值有：
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
         * 托管规则详细配置。
         * @type {WafRule || null}
         */
        this.WafRules = null;

        /**
         * AI规则引擎防护配置。
注意：此字段可能返回 null，表示取不到有效值。
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

    }
}

/**
 * CreateDnsRecord返回参数结构体
 * @class
 */
class CreateDnsRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 生存时间值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 代理模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 解析状态
active: 生效
pending: 不生效
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 已锁定
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CC日志
 * @class
 */
class CCLog extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击请求时间，采用unix秒级时间戳。
         * @type {number || null}
         */
        this.AttackTime = null;

        /**
         * 客户端ip。
         * @type {string || null}
         */
        this.AttackSip = null;

        /**
         * 受攻击域名。
         * @type {string || null}
         */
        this.AttackDomain = null;

        /**
         * URI。
         * @type {string || null}
         */
        this.RequestUri = null;

        /**
         * 命中次数。
         * @type {number || null}
         */
        this.HitCount = null;

        /**
         * IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)。
         * @type {string || null}
         */
        this.SipCountryCode = null;

        /**
         * 请求（事件）ID。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 当前该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisposalMethod = null;

        /**
         * 当前该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpLog = null;

        /**
         * 当前该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 当前该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * User Agent，仅自定义规则日志中存在。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ua = null;

        /**
         * 请求方法，仅自定义规则日志中存在。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RequestMethod = null;

        /**
         * 规则信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecRuleRelatedInfo> || null}
         */
        this.RuleDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;
        this.AttackSip = 'AttackSip' in params ? params.AttackSip : null;
        this.AttackDomain = 'AttackDomain' in params ? params.AttackDomain : null;
        this.RequestUri = 'RequestUri' in params ? params.RequestUri : null;
        this.HitCount = 'HitCount' in params ? params.HitCount : null;
        this.SipCountryCode = 'SipCountryCode' in params ? params.SipCountryCode : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.DisposalMethod = 'DisposalMethod' in params ? params.DisposalMethod : null;
        this.HttpLog = 'HttpLog' in params ? params.HttpLog : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.Ua = 'Ua' in params ? params.Ua : null;
        this.RequestMethod = 'RequestMethod' in params ? params.RequestMethod : null;

        if (params.RuleDetailList) {
            this.RuleDetailList = new Array();
            for (let z in params.RuleDetailList) {
                let obj = new SecRuleRelatedInfo();
                obj.deserialize(params.RuleDetailList[z]);
                this.RuleDetailList.push(obj);
            }
        }

    }
}

/**
 * 规则引擎规则项，Conditions 数组内多个项的关系为 或，内层 Conditions 列表内多个项的关系为 且。
 * @class
 */
class RuleItem extends  AbstractModel {
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
         * @type {Array.<RuleAction> || null}
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
                let obj = new RuleAction();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }

    }
}

/**
 * 规则查询 Filter
 * @class
 */
class RuleFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤参数，取值有：
<li> RULE_ID：规则 ID。 </li>
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
 * DDoS配置
 * @class
 */
class DDoSConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关
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
 * DescribeWebManagedRulesData返回参数结构体
 * @class
 */
class DescribeWebManagedRulesDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Web攻击日志实体。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应消息。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
         * @type {string || null}
         */
        this.Interval = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
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
         * web攻击日志数据内容。
         * @type {WebLogData || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应信息。
         * @type {string || null}
         */
        this.Msg = null;

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
            let obj = new WebLogData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 记录值
         * @type {string || null}
         */
        this.Record = null;

        /**
         * 当源站配置类型Type=area时，表示区域
为空表示默认区域
         * @type {Array.<string> || null}
         */
        this.Area = null;

        /**
         * 当源站配置类型Type=weight时，表示权重
取值范围为[1-100]
源站组内多个源站权重总和应为100。
当源站配置类型Type=proto，表示权重
取值范围为[1-100]
源站组内Proto相同的多个源站权重总和应为100。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 记录ID
         * @type {string || null}
         */
        this.RecordId = null;

        /**
         * 是否私有鉴权
当源站类型OriginType=third_part时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Private = null;

        /**
         * 私有鉴权参数
当源站类型Private=true时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OriginRecordPrivateParameter> || null}
         */
        this.PrivateParameter = null;

        /**
         * 当源站配置类型Type=proto时，表示客户端请求协议，取值：http/https
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Proto = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Record = 'Record' in params ? params.Record : null;
        this.Area = 'Area' in params ? params.Area : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RecordId = 'RecordId' in params ? params.RecordId : null;
        this.Private = 'Private' in params ? params.Private : null;

        if (params.PrivateParameter) {
            this.PrivateParameter = new Array();
            for (let z in params.PrivateParameter) {
                let obj = new OriginRecordPrivateParameter();
                obj.deserialize(params.PrivateParameter[z]);
                this.PrivateParameter.push(obj);
            }
        }
        this.Proto = 'Proto' in params ? params.Proto : null;

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
         * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackContent = null;

        /**
         * 攻击源（客户端）Ip。
         * @type {string || null}
         */
        this.AttackIp = null;

        /**
         * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 受攻击子域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msuuid = null;

        /**
         * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RequestMethod = null;

        /**
         * URI
         * @type {string || null}
         */
        this.RequestUri = null;

        /**
         * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)
         * @type {string || null}
         */
        this.SipCountryCode = null;

        /**
         * 请求（事件）ID。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisposalMethod = null;

        /**
         * http log。
         * @type {string || null}
         */
        this.HttpLog = null;

        /**
         * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ua = null;

        /**
         * 攻击时间，采用unix秒级时间戳。
         * @type {number || null}
         */
        this.AttackTime = null;

        /**
         * 规则相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecRuleRelatedInfo> || null}
         */
        this.RuleDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttackContent = 'AttackContent' in params ? params.AttackContent : null;
        this.AttackIp = 'AttackIp' in params ? params.AttackIp : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Msuuid = 'Msuuid' in params ? params.Msuuid : null;
        this.RequestMethod = 'RequestMethod' in params ? params.RequestMethod : null;
        this.RequestUri = 'RequestUri' in params ? params.RequestUri : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.SipCountryCode = 'SipCountryCode' in params ? params.SipCountryCode : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.DisposalMethod = 'DisposalMethod' in params ? params.DisposalMethod : null;
        this.HttpLog = 'HttpLog' in params ? params.HttpLog : null;
        this.Ua = 'Ua' in params ? params.Ua : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;

        if (params.RuleDetailList) {
            this.RuleDetailList = new Array();
            for (let z in params.RuleDetailList) {
                let obj = new SecRuleRelatedInfo();
                obj.deserialize(params.RuleDetailList[z]);
                this.RuleDetailList.push(obj);
            }
        }

    }
}

/**
 * 用于对top数据排序的结构体
 * @class
 */
class TopDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 字段值
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
 * CreatePrefetchTask请求参数结构体
 * @class
 */
class CreatePrefetchTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 要预热的资源列表，每个元素格式类似如下:
http://www.example.com/example.txt
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * 是否对url进行encode
若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986）
         * @type {boolean || null}
         */
        this.EncodeUrl = null;

        /**
         * 附带的http头部信息
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
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则ID
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
 * 缓存遵循源站配置
 * @class
 */
class CacheConfigFollowOrigin extends  AbstractModel {
    constructor(){
        super();

        /**
         * 遵循源站配置开关，取值有：
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
 * 精准防护条件
 * @class
 */
class ACLCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 匹配字段
         * @type {string || null}
         */
        this.MatchFrom = null;

        /**
         * 匹配字符串
         * @type {string || null}
         */
        this.MatchParam = null;

        /**
         * 匹配关系
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 匹配内容
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
 * DescribeTopL7AnalysisData请求参数结构体
 * @class
 */
class DescribeTopL7AnalysisDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RFC3339标准，客户端时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * RFC3339标准，客户端时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 时序类访问流量指标
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * topN,填0时返回全量数据
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 时间间隔，选填{min, 5min, hour, day, week}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * ZoneId数组
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 筛选条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * TopN entry
 * @class
 */
class TopNEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * top查询维度值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 查询具体数据。
         * @type {Array.<TopNEntryValue> || null}
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
                let obj = new TopNEntryValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * DescribeApplicationProxy返回参数结构体
 * @class
 */
class DescribeApplicationProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用代理列表。
         * @type {Array.<ApplicationProxy> || null}
         */
        this.Data = null;

        /**
         * 记录总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 字段已废弃。
         * @type {number || null}
         */
        this.Quota = null;

        /**
         * 当ProxyId为空时，表示套餐内PlatType为ip的Anycast IP的实例数量。
         * @type {number || null}
         */
        this.IpCount = null;

        /**
         * 当ProxyId为空时，表示套餐内PlatType为domain的CNAME的实例数量。
         * @type {number || null}
         */
        this.DomainCount = null;

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
                let obj = new ApplicationProxy();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.Quota = 'Quota' in params ? params.Quota : null;
        this.IpCount = 'IpCount' in params ? params.IpCount : null;
        this.DomainCount = 'DomainCount' in params ? params.DomainCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLoadBalancing返回参数结构体
 * @class
 */
class CreateLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
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
         * top详细数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TopDataRecord> || null}
         */
        this.Data = null;

        /**
         * 查询维度
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 查询指标
         * @type {string || null}
         */
        this.MetricName = null;

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
                let obj = new TopDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
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
         * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 查询的站点集合，不填默认查询所有站点。
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
<li>all:  所有协议。</li>不填默认为: all，表示查询所有协议。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
<li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
         * @type {Array.<QueryCondition> || null}
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
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new QueryCondition();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

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
         * Web类型的安全总开关生效范围，Waf，自定义规则，速率限制。
1. on 开启
2. off 关闭
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
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 子域
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录值
         * @type {string || null}
         */
        this.RecordValue = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
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
 * 统计曲线数据项
 * @class
 */
class DataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 数值
注意：此字段可能返回 null，表示取不到有效值。
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
 * ModifyLoadBalancing请求参数结构体
 * @class
 */
class ModifyLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 使用的源站组ID
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * 当Type=dns_only表示DNS的TTL时间
         * @type {number || null}
         */
        this.TTL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * CreateLoadBalancing请求参数结构体
 * @class
 */
class CreateLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 使用的源站组ID
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * 当Type=dns_only表示DNS的TTL时间
         * @type {number || null}
         */
        this.TTL = null;

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
        this.Type = 'Type' in params ? params.Type : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.TTL = 'TTL' in params ? params.TTL : null;

    }
}

/**
 * DescribeDnssec请求参数结构体
 * @class
 */
class DescribeDnssecRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeWebProtectionLog返回参数结构体
 * @class
 */
class DescribeWebProtectionLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限速拦截数据内容。
         * @type {CCLogData || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应信息。
         * @type {string || null}
         */
        this.Msg = null;

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
            let obj = new CCLogData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CC拦截事件数据
 * @class
 */
class CCInterceptEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击事件数据集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CCInterceptEvent> || null}
         */
        this.List = null;

        /**
         * 当前页
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总页数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new CCInterceptEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * DescribeLoadBalancingDetail返回参数结构体
 * @class
 */
class DescribeLoadBalancingDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名，填写@表示根域
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 当Type=dns_only表示DNS的TTL时间
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 使用的源站组ID
         * @type {Array.<string> || null}
         */
        this.OriginId = null;

        /**
         * 使用的源站信息
         * @type {Array.<OriginGroup> || null}
         */
        this.Origin = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 调度域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.OriginId = 'OriginId' in params ? params.OriginId : null;

        if (params.Origin) {
            this.Origin = new Array();
            for (let z in params.Origin) {
                let obj = new OriginGroup();
                obj.deserialize(params.Origin[z]);
                this.Origin.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全配置。
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
         * DDoS配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DDoSConfig || null}
         */
        this.DdosConfig = null;

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

        if (params.DdosConfig) {
            let obj = new DDoSConfig();
            obj.deserialize(params.DdosConfig)
            this.DdosConfig = obj;
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

    }
}

/**
 * 主攻击对象Data
 * @class
 */
class DDosMajorAttackEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDosMajorAttackEvent ddos 攻击事件。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DDosMajorAttackEvent> || null}
         */
        this.List = null;

        /**
         * 分页拉取的起始页号。最小值：1。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 分页拉取的最大返回结果数。最大值：1000。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DDosMajorAttackEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * DescribeBotManagedRules返回参数结构体
 * @class
 */
class DescribeBotManagedRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次返回的规则数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Bot规则
         * @type {Array.<BotManagedRuleDetail> || null}
         */
        this.Rules = null;

        /**
         * 总规则数
         * @type {number || null}
         */
        this.Total = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new BotManagedRuleDetail();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DNS 记录
 * @class
 */
class DnsRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 主机记录
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录值
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 代理模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * TTL 值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 域名锁
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 解析状态
active: 生效
pending: 不生效
         * @type {string || null}
         */
        this.Status = null;

        /**
         * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 域名是否开启了负载均衡，四层代理，安全
- lb 负载均衡
- security 安全
- l4 四层代理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DomainStatus = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.DomainStatus = 'DomainStatus' in params ? params.DomainStatus : null;

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
 * Ipv6访问配置
 * @class
 */
class Ipv6Access extends  AbstractModel {
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
 * DDoS协议防护+连接防护
 * @class
 */
class DDoSAntiPly extends  AbstractModel {
    constructor(){
        super();

        /**
         * tcp协议封禁，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
         * @type {string || null}
         */
        this.DropTcp = null;

        /**
         * udp协议封禁，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
         * @type {string || null}
         */
        this.DropUdp = null;

        /**
         * icmp协议封禁，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
         * @type {string || null}
         */
        this.DropIcmp = null;

        /**
         * 其他协议封禁，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
         * @type {string || null}
         */
        this.DropOther = null;

        /**
         * 源站每秒新连接限速，取值范围0-4294967295。
         * @type {number || null}
         */
        this.SourceCreateLimit = null;

        /**
         * 源站并发连接控制，取值范围0-4294967295。
         * @type {number || null}
         */
        this.SourceConnectLimit = null;

        /**
         * 目的端口每秒新连接限速，取值范围0-4294967295。
         * @type {number || null}
         */
        this.DestinationCreateLimit = null;

        /**
         * 目的端口并发连接控制，取值范围0-4294967295。
         * @type {number || null}
         */
        this.DestinationConnectLimit = null;

        /**
         * 每秒异常连接数阈值，取值范围0-4294967295。
         * @type {number || null}
         */
        this.AbnormalConnectNum = null;

        /**
         * 异常syn报文百分比阈值，取值范围0-100。
         * @type {number || null}
         */
        this.AbnormalSynRatio = null;

        /**
         * 异常syn报文阈值，取值范围0-65535。
         * @type {number || null}
         */
        this.AbnormalSynNum = null;

        /**
         * 每秒连接超时检测，取值范围0-65535。
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * 空连接防护开启，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
         * @type {string || null}
         */
        this.EmptyConnectProtect = null;

        /**
         * UDP分片开关，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
         * @type {string || null}
         */
        this.UdpShard = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DropTcp = 'DropTcp' in params ? params.DropTcp : null;
        this.DropUdp = 'DropUdp' in params ? params.DropUdp : null;
        this.DropIcmp = 'DropIcmp' in params ? params.DropIcmp : null;
        this.DropOther = 'DropOther' in params ? params.DropOther : null;
        this.SourceCreateLimit = 'SourceCreateLimit' in params ? params.SourceCreateLimit : null;
        this.SourceConnectLimit = 'SourceConnectLimit' in params ? params.SourceConnectLimit : null;
        this.DestinationCreateLimit = 'DestinationCreateLimit' in params ? params.DestinationCreateLimit : null;
        this.DestinationConnectLimit = 'DestinationConnectLimit' in params ? params.DestinationConnectLimit : null;
        this.AbnormalConnectNum = 'AbnormalConnectNum' in params ? params.AbnormalConnectNum : null;
        this.AbnormalSynRatio = 'AbnormalSynRatio' in params ? params.AbnormalSynRatio : null;
        this.AbnormalSynNum = 'AbnormalSynNum' in params ? params.AbnormalSynNum : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.EmptyConnectProtect = 'EmptyConnectProtect' in params ? params.EmptyConnectProtect : null;
        this.UdpShard = 'UdpShard' in params ? params.UdpShard : null;

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
         * 开始时间，RFC3339格式。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，RFC3339格式。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计指标列表，取值有：
<li>waf_interceptNum ：waf拦截次数 。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点id列表，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 子域名列表，不填默认选择子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 该字段已废弃，请勿传。
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 该字段已废弃，请勿传。
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 筛选条件，取值有：
<li>action ：执行动作 。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
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
 * DDos攻击源数据
 * @class
 */
class DDosAttackSourceEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDos攻击源数据集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DDosAttackSourceEvent> || null}
         */
        this.List = null;

        /**
         * 分页拉取的起始页号。最小值：1。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 分页拉取的最大返回结果数。最大值：1000。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new DDosAttackSourceEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

    }
}

/**
 * ModifyDDoSPolicy返回参数结构体
 * @class
 */
class ModifyDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略id。
         * @type {number || null}
         */
        this.PolicyId = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDnsRecords请求参数结构体
 * @class
 */
class DescribeDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询条件过滤器
         * @type {Array.<DnsRecordFilter> || null}
         */
        this.Filters = null;

        /**
         * 排序
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 可选值 asc, desc
         * @type {string || null}
         */
        this.Direction = null;

        /**
         * 可选值 all, any
         * @type {string || null}
         */
        this.Match = null;

        /**
         * 分页查询限制数目，默认为 100，最大可设置为 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 站点 ID
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new DnsRecordFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Order = 'Order' in params ? params.Order : null;
        this.Direction = 'Direction' in params ? params.Direction : null;
        this.Match = 'Match' in params ? params.Match : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 失败的任务列表
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
 * Waf规则
 * @class
 */
class WafRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 托管规则开关。 on为开启
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 黑名单ID列表，将规则ID加入本参数列表中代表该ID关闭，即该规则ID不再生效。ID参考接口 [DescribeSecurityPolicyManagedRules](https://tcloud4api.woa.com/document/product/1657/76030?!preview&!document=1)。
         * @type {Array.<number> || null}
         */
        this.BlockRuleIDs = null;

        /**
         * 观察模式ID列表，将规则ID加入本参数列表中代表该ID使用观察模式生效，即该规则ID进入观察模式。ID参考接口 [DescribeSecurityPolicyManagedRules](https://tcloud4api.woa.com/document/product/1657/76030?!preview&!document=1)。
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeDefaultCertificates请求参数结构体
 * @class
 */
class DescribeDefaultCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
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
 * 地域信息
 * @class
 */
class GeoIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 国家名
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 洲
         * @type {string || null}
         */
        this.Continent = null;

        /**
         * 国家英文名
         * @type {string || null}
         */
        this.CountryEn = null;

        /**
         * 洲
         * @type {string || null}
         */
        this.ContinentEn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Continent = 'Continent' in params ? params.Continent : null;
        this.CountryEn = 'CountryEn' in params ? params.CountryEn : null;
        this.ContinentEn = 'ContinentEn' in params ? params.ContinentEn : null;

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
 * DescribeSecurityPolicy请求参数结构体
 * @class
 */
class DescribeSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级域名
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 二级域名
         * @type {string || null}
         */
        this.Entity = null;

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
 * DDos攻击事件对象
 * @class
 */
class DDosAttackEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * ddos 策略组id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 攻击类型(对应交互事件名称)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 攻击状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * 攻击最大带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackMaxBandWidth = null;

        /**
         * 攻击包速率峰值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackPacketMaxRate = null;

        /**
         * 攻击开始时间 单位为s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackStartTime = null;

        /**
         * 攻击结束时间 单位为s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackEndTime = null;

        /**
         * 事件ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 站点id
注意：此字段可能返回 null，表示取不到有效值。
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.AttackMaxBandWidth = 'AttackMaxBandWidth' in params ? params.AttackMaxBandWidth : null;
        this.AttackPacketMaxRate = 'AttackPacketMaxRate' in params ? params.AttackPacketMaxRate : null;
        this.AttackStartTime = 'AttackStartTime' in params ? params.AttackStartTime : null;
        this.AttackEndTime = 'AttackEndTime' in params ? params.AttackEndTime : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
         * 失败原因
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 处理失败的资源列表。
该列表元素来源于输入参数中的Targets，因此格式和入参中的Targets保持一致
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
 * TopN数据Entry
 * @class
 */
class TopNEntryValue extends  AbstractModel {
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
 * CreateZone请求参数结构体
 * @class
 */
class CreateZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 接入方式，默认full
- full NS接入
- partial CNAME接入
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 是否跳过站点历史解析记录扫描
         * @type {boolean || null}
         */
        this.JumpStart = null;

        /**
         * 资源标签
         * @type {Array.<Tag> || null}
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
        this.Name = 'Name' in params ? params.Name : null;
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
         * 套餐所含流量（单位：字节）
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
<li> ent ：全球内容分发网络（不包括中国大陆）企业版套餐； </li>
<li> ent_with_bot ： 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理；</li>
<li> ent_cm ：中国大陆内容分发网络企业版套餐； </li>
<li> ent_cm_with_bot ：中国大陆内容分发网络企业版套餐附带bot管理。</li>
         * @type {string || null}
         */
        this.PlanType = null;

        /**
         * 套餐价格（单位：分）
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 套餐所含请求次数（单位：字节）
         * @type {number || null}
         */
        this.Request = null;

        /**
         * 套餐所能绑定的站点个数。
         * @type {number || null}
         */
        this.SiteNumber = null;

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
         * 自定义名字服务器名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义名字服务器 IPv4 地址
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
 * DescribeTimingL7CacheData请求参数结构体
 * @class
 */
class DescribeTimingL7CacheDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * RFC3339标准，客户端时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * RFC3339标准，客户端时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 时序类访问流量指标列表，支持的指标
l7Cache_outFlux: 访问流量
l7Cache_request: 访问请求数
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 时间间隔，选填{min, 5min, hour, day, week}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 站点id列表
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 筛选条件，筛选EO/源站响应如下：
EO响应：{Key: "cacheType", Value: ["hit"], Operator: "equals"}；
源站响应：{Key: "cacheType", Value: ["miss", "dynamic"], Operator: "equals"}
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeSecurityPolicyList返回参数结构体
 * @class
 */
class DescribeSecurityPolicyListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防护资源列表
         * @type {Array.<SecurityEntity> || null}
         */
        this.Entities = null;

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

        if (params.Entities) {
            this.Entities = new Array();
            for (let z in params.Entities) {
                let obj = new SecurityEntity();
                obj.deserialize(params.Entities[z]);
                this.Entities.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 该查询条件总共条目数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务结果列表
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
 * DDoS7层应用
 * @class
 */
class DDoSApplication extends  AbstractModel {
    constructor(){
        super();

        /**
         * 二级域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 域名状态；
init  待切ns
offline 需要dns开启站点加速
process 在部署中，稍等一会
online 正常状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 加速开关；on-开启加速；off-关闭加速（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccelerateType = null;

        /**
         * 安全开关；on-开启安全；off-关闭安全（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SecurityType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;

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
         * 起始时间(需严格按照RFC3339标准传参)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间(需严格按照RFC3339标准传参)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 每页展示条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 当前页
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 站点名集合
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 子域名集合
         * @type {Array.<string> || null}
         */
        this.Domains = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

    }
}

/**
 * DeleteLoadBalancing返回参数结构体
 * @class
 */
class DeleteLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
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
         * 开始时间，RFC3339格式。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，RFC3339格式。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计指标列表，取值有：
<li>ccRate_interceptNum ：速率限制规则限制次数 ；</li>
<li>ccAcl_interceptNum ：自定义规则拦截次数 。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点id列表，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 子域名列表，不填默认选择全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 该字段已废弃，请勿传。
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 该字段已废弃，请勿传。
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 筛选条件，取值有：
<li>action ：执行动作 。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
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
         * 证书
         * @type {string || null}
         */
        this.Certificate = null;

        /**
         * 私钥
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
 * DescribeSecurityPortraitRules返回参数结构体
 * @class
 */
class DescribeSecurityPortraitRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次返回的规则数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Bot用户画像规则
         * @type {Array.<PortraitManagedRuleDetail> || null}
         */
        this.Rules = null;

        /**
         * 总规则数
         * @type {number || null}
         */
        this.Total = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new PortraitManagedRuleDetail();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 协议，取值为TCP或者UDP
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 端口，支持格式：
80：80端口
81-90：81至90端口
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * 源站类型，取值：
custom：手动添加
origins：源站组
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站信息：
当OriginType=custom时，表示多个：
IP:端口
域名:端口
当OriginType=origins时，包含一个元素，表示源站组ID
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * 传递客户端IP，当Proto=TCP时，取值：
TOA：TOA
PPV1: Proxy Protocol传递，协议版本V1
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
当Proto=UDP时，取值：
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 是否开启会话保持
         * @type {boolean || null}
         */
        this.SessionPersist = null;

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

    }
}

/**
 * bot托管规则详情
 * @class
 */
class BotManagedRuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则分类
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * 该规则开启/关闭
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.Status = 'Status' in params ? params.Status : null;

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
 * DescribeDnsData返回参数结构体
 * @class
 */
class DescribeDnsDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计曲线数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DataItem> || null}
         */
        this.Data = null;

        /**
         * 时间粒度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Interval = null;

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
                let obj = new DataItem();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 代理ID
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
 * IdentifyZone请求参数结构体
 * @class
 */
class IdentifyZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

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
         * 腾讯云账号ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 加速服务状态
process：部署中
online：已启动
offline：已关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 域名
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Host = 'Host' in params ? params.Host : null;

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
         * RateLimit统计阈值，单位是次，取值范围0-4294967294。
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * RateLimit统计时间，取值范围 10/20/30/40/50/60 单位是秒。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 处置动作。
1. monitor(观察)；
2. drop(拦截)；
3. alg(Javascript挑战)
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 惩罚时长，0-100。
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * 处罚时长单位。
1. second 秒; 
2. minutes 分钟
3. hour 小时
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * 规则状态。
1. on 生效
2. off 不生效
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * 规则。
         * @type {Array.<ACLCondition> || null}
         */
        this.Conditions = null;

        /**
         * 规则权重，取值范围0-100。
         * @type {number || null}
         */
        this.RulePriority = null;

        /**
         * 规则id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 过滤词。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FreqFields = null;

        /**
         * 更新时间.
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.PunishTimeUnit = 'PunishTimeUnit' in params ? params.PunishTimeUnit : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ACLCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.FreqFields = 'FreqFields' in params ? params.FreqFields : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeDnsRecords返回参数结构体
 * @class
 */
class DescribeDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数，用于分页查询
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * DNS 记录列表
         * @type {Array.<DnsRecord> || null}
         */
        this.Records = null;

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

        if (params.Records) {
            this.Records = new Array();
            for (let z in params.Records) {
                let obj = new DnsRecord();
                obj.deserialize(params.Records[z]);
                this.Records.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 证书总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 默认证书列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DefaultServerCertInfo> || null}
         */
        this.CertInfo = null;

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

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new DefaultServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeTimingL7AnalysisData返回参数结构体
 * @class
 */
class DescribeTimingL7AnalysisDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 详细数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimingDataRecord> || null}
         */
        this.Data = null;

        /**
         * 查询维度
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 时间间隔
         * @type {string || null}
         */
        this.Interval = null;

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
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用户画像规则详情
 * @class
 */
class PortraitManagedRuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则唯一id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则的描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则所属类型的名字, botdb(用户画像)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * 规则内的功能分类Id(扫描器，Bot行为等)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ClassificationId = null;

        /**
         * 规则当前所属动作状态(block, alg, ...)
注意：此字段可能返回 null，表示取不到有效值。
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.ClassificationId = 'ClassificationId' in params ? params.ClassificationId : null;
        this.Status = 'Status' in params ? params.Status : null;

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
         * 本功能的开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 本规则的ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * JS挑战的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AlgManagedIds = null;

        /**
         * 数字验证码的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.CapManagedIds = null;

        /**
         * 观察的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.MonManagedIds = null;

        /**
         * 拦截的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.DropManagedIds = null;

        /**
         * 保留。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ManagedIds = null;

        /**
         * 保留。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.TransManagedIds = null;

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
        this.ManagedIds = 'ManagedIds' in params ? params.ManagedIds : null;
        this.TransManagedIds = 'TransManagedIds' in params ? params.TransManagedIds : null;

    }
}

/**
 * DescribeWebProtectionAttackEvents请求参数结构体
 * @class
 */
class DescribeWebProtectionAttackEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 当前页
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 域名
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 站点集合
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

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
         * 查询维度。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 查询时间间隔。
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 七层监控类时序流量数据列表。
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

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
 * DescribeHostsCertificate请求参数结构体
 * @class
 */
class DescribeHostsCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为 100，最大可设置为 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询条件过滤器
         * @type {Array.<CertFilter> || null}
         */
        this.Filters = null;

        /**
         * 排序方式
         * @type {CertSort || null}
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new CertFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

        if (params.Sort) {
            let obj = new CertSort();
            obj.deserialize(params.Sort)
            this.Sort = obj;
        }

    }
}

/**
 * DescribeSecurityPolicyManagedRules返回参数结构体
 * @class
 */
class DescribeSecurityPolicyManagedRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次返回的规则数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 门神规则
         * @type {Array.<ManagedRule> || null}
         */
        this.Rules = null;

        /**
         * 总规则数
         * @type {number || null}
         */
        this.Total = null;

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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ManagedRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 源站组ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 源站组名称
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * 源站组配置类型
area：表示按照Record记录中的Area字段进行按客户端IP所在区域回源。
weight：表示按照Record记录中的Weight字段进行按权重回源。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 源站类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 当前源站组是否被四层代理使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ApplicationProxyUsed = null;

        /**
         * 当前源站组是否被负载均衡使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.LoadBalancingUsed = null;

        /**
         * 源站状态信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OriginCheckOriginStatus || null}
         */
        this.Status = null;

        /**
         * 使用当前源站组的负载均衡的类型：
none：未被使用
dns_only：被仅DNS类型负载均衡使用
proxied：被代理加速类型负载均衡使用
both：同时被仅DNS和代理加速类型负载均衡使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancingUsedType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ApplicationProxyUsed = 'ApplicationProxyUsed' in params ? params.ApplicationProxyUsed : null;
        this.LoadBalancingUsed = 'LoadBalancingUsed' in params ? params.LoadBalancingUsed : null;

        if (params.Status) {
            let obj = new OriginCheckOriginStatus();
            obj.deserialize(params.Status)
            this.Status = obj;
        }
        this.LoadBalancingUsedType = 'LoadBalancingUsedType' in params ? params.LoadBalancingUsedType : null;

    }
}

/**
 * DescribeApplicationProxy请求参数结构体
 * @class
 */
class DescribeApplicationProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 分页查询偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为10，最大可设置为1000。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 代理ID。
当ProxyId为空时，表示查询站点下所有应用代理的列表。
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

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
         * @type {Array.<RuleItem> || null}
         */
        this.Rules = null;

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
                let obj = new RuleItem();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * ModifyDDoSPolicyHost返回参数结构体
 * @class
 */
class ModifyDDoSPolicyHostResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改成功的host
         * @type {string || null}
         */
        this.Host = null;

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
        this.Host = 'Host' in params ? params.Host : null;
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
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 状态
offline: 停用
online: 启用
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
 * ModifyLoadBalancing返回参数结构体
 * @class
 */
class ModifyLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

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
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Web拦截事件
 * @class
 */
class WebAttackEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientIp = null;

        /**
         * 攻击URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackUrl = null;

        /**
         * 攻击时间 单位为s
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AttackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientIp = 'ClientIp' in params ? params.ClientIp : null;
        this.AttackUrl = 'AttackUrl' in params ? params.AttackUrl : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;

    }
}

/**
 * DescribeDDosAttackTopData请求参数结构体
 * @class
 */
class DescribeDDosAttackTopDataRequest extends  AbstractModel {
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
<li>ddos_attackFlux_protocol ：攻击总流量协议类型分布排行 ；</li>
<li>ddos_attackPackageNum_protocol ：攻击总包量协议类型分布排行 ；</li>
<li>ddos_attackNum_attackType ：攻击总次数攻击类型分布排行 ；</li>
<li>ddos_attackNum_sregion ：攻击总次数攻击源地区分布排行 ；</li>
<li>ddos_attackFlux_sip ：攻击总流量攻击源ip分布排行 ；</li>
<li>ddos_attackFlux_sregion ：攻击总流量攻击源地区分布排行 。</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 查询前多少个，传值为0返回全量。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 站点id集合，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * ddos策略组id 集合，不填默认选择全部策略id。
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * 端口号。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 攻击类型，取值有：
<li>flood ；</li>
<li>icmpFlood ；</li>
<li>all 。</li>
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 例外规则的配置，包含生效的条件，生效的范围
 * @class
 */
class ExceptUserRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 规则名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则的处置方式。
1. skip 跳过
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 规则生效状态。
1. on 生效
2. off 失效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleStatus = null;

        /**
         * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 匹配条件。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExceptUserRuleCondition> || null}
         */
        this.Conditions = null;

        /**
         * 规则生效的范围。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExceptUserRuleScope || null}
         */
        this.Scope = null;

        /**
         * 优先级。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new ExceptUserRuleCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

        if (params.Scope) {
            let obj = new ExceptUserRuleScope();
            obj.deserialize(params.Scope)
            this.Scope = obj;
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
 * DescribeDDosAttackData请求参数结构体
 * @class
 */
class DescribeDDosAttackDataRequest extends  AbstractModel {
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
<li>ddos_attackMaxBandwidth ：攻击带宽峰值 ；</li>
<li>ddos_attackMaxPackageRate：攻击包速率峰值  ；</li>
<li>ddos_attackBandwidth ：攻击带宽曲线 ；</li>
<li>ddos_attackPackageRate ：攻击包速率曲线 。</li>
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点id列表，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * ddos策略组id列表，不填默认选择全部策略id。
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * 端口号。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 攻击类型，取值有：
<li>flood ；</li>
<li>icmpFlood ；</li>
<li>all 。</li>
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * ModifyDnsRecord返回参数结构体
 * @class
 */
class ModifyDnsRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 记录内容
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 生存时间值
         * @type {number || null}
         */
        this.Ttl = null;

        /**
         * 优先级
         * @type {number || null}
         */
        this.Priority = null;

        /**
         * 代理模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 解析状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 锁定状态
         * @type {boolean || null}
         */
        this.Locked = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;
        this.Ttl = 'Ttl' in params ? params.Ttl : null;
        this.Priority = 'Priority' in params ? params.Priority : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 源站记录私有鉴权参数
 * @class
 */
class OriginRecordPrivateParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有鉴权参数名称：
"AccessKeyId"：Access Key ID
"SecretAccessKey"：Secret Access Key
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 私有鉴权参数数值
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
<li> ent: 全球内容分发网络（不包括中国大陆）企业版套餐； </li>
<li> ent_with_bot: 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理；</li>
<li> ent_cm: 中国大陆内容分发网络企业版套餐； </li>
<li> ent_cm_with_bot: 中国大陆内容分发网络企业版套餐附带bot管理。</li>当前账户可购买套餐类型请以<a href="https://tcloud4api.woa.com/document/product/1657/80124?!preview&!document=1">DescribeAvailablePlans</a>返回为准。
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
 * 统计曲线数据项
 * @class
 */
class TimingDataItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数据对应时间点，采用unix秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 具体数值
注意：此字段可能返回 null，表示取不到有效值。
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
         * 站点名称。
         * @type {string || null}
         */
        this.ZoneName = null;

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
         * 字段已经废弃。
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 字段已经废弃。
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 规则详细信息。
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

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
         * @type {Ipv6Access || null}
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
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;

        if (params.Ipv6) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
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
         * top详细数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TopDataRecord> || null}
         */
        this.Data = null;

        /**
         * 查询维度
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 查询指标
         * @type {string || null}
         */
        this.MetricName = null;

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
                let obj = new TopDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 智能分析标签。
1. evil_bot 恶意
2. suspect_bot 疑似恶意
3. good_bot 好的
4. normal 正常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 触发智能分析标签对应的处置方式。
1. drop 拦截
2. trans 放行
3. monitor 监控
4. alg Javascript挑战
5. captcha 数字验证码
注意：此字段可能返回 null，表示取不到有效值。
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
         * 开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 规则详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IntelligenceRuleItem> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new IntelligenceRuleItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
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
 * 门神规则
 * @class
 */
class ManagedRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则id
         * @type {number || null}
         */
        this.RuleId = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则类型名
         * @type {string || null}
         */
        this.RuleTypeName = null;

        /**
         * 策略规则防护等级
         * @type {string || null}
         */
        this.RuleLevelDesc = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 规则当前状态  block, allow
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 规则标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.RuleTags = null;

        /**
         * 规则类型详细描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RuleTypeDesc = null;

        /**
         * 规则类型id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RuleTypeId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleTypeName = 'RuleTypeName' in params ? params.RuleTypeName : null;
        this.RuleLevelDesc = 'RuleLevelDesc' in params ? params.RuleLevelDesc : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleTags = 'RuleTags' in params ? params.RuleTags : null;
        this.RuleTypeDesc = 'RuleTypeDesc' in params ? params.RuleTypeDesc : null;
        this.RuleTypeId = 'RuleTypeId' in params ? params.RuleTypeId : null;

    }
}

/**
 * 过滤条件
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 筛选维度
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 操作符
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 筛选维度值
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
 * DescribeWebManagedRulesAttackEvents请求参数结构体
 * @class
 */
class DescribeWebManagedRulesAttackEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 条数
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 当前页
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * ddos策略组id列表
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * 站点集合
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 子域名列表
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 选填{Y、N},默认为Y；Y：展示，N：不展示
         * @type {string || null}
         */
        this.IsShowDetail = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.IsShowDetail = 'IsShowDetail' in params ? params.IsShowDetail : null;

    }
}

/**
 * DescribeCnameStatus请求参数结构体
 * @class
 */
class DescribeCnameStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 域名列表
         * @type {Array.<string> || null}
         */
        this.Names = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Names = 'Names' in params ? params.Names : null;

    }
}

/**
 * CreateCustomErrorPage请求参数结构体
 * @class
 */
class CreateCustomErrorPageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * zone的id
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 具体所属实体
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * 自定义页面的文件名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 自定义页面的内容
         * @type {string || null}
         */
        this.Content = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * DescribeDnssec返回参数结构体
 * @class
 */
class DescribeDnssecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * DNSSEC 状态
- enabled 开启
- disabled 关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * DNSSEC 相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DnssecInfo || null}
         */
        this.Dnssec = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Dnssec) {
            let obj = new DnssecInfo();
            obj.deserialize(params.Dnssec)
            this.Dnssec = obj;
        }
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
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
         * 站点ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 站点接入方式
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 站点状态
- pending 未切换NS
- active NS 已切换到分配的 NS
- moved NS 从腾讯云切走
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 当前使用的 NS 列表
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

        /**
         * 给用户分配的 NS 列表
         * @type {Array.<string> || null}
         */
        this.NameServers = null;

        /**
         * 站点创建时间
         * @type {string || null}
         */
        this.CreatedOn = null;

        /**
         * 站点更新时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.NameServers = 'NameServers' in params ? params.NameServers : null;
        this.CreatedOn = 'CreatedOn' in params ? params.CreatedOn : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Dns数据曲线过滤参数
 * @class
 */
class DnsDataFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称，取值范围：
zone：站点名
host：域名
type：dns解析类型
code：dns返回状态码
area：解析服务器所在区域
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值
当Name=area时，Value取值范围：
亚洲：Asia
欧洲：Europe
非洲：Africa
大洋洲：Oceania
美洲：Americas

当Name=code时，Value取值范围：
NoError：成功的响应
NXDomain：只在权威域名服务器的响应消息中有效，标示请求中请求的域不存在
NotImp：域名服务器不支持请求的类型
Refused：域名服务器因为策略的原因拒绝执行请求的操作
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 参数值
当Name=area时，Value取值范围：
亚洲：Asia
欧洲：Europe
非洲：Africa
大洋洲：Oceania
美洲：Americas

当Name=code时，Value取值范围：
NoError：成功的响应
NXDomain：只在权威域名服务器的响应消息中有效，标示请求中请求的域不存在
NotImp：域名服务器不支持请求的类型
Refused：域名服务器因为策略的原因拒绝执行请求的操作
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
        this.Value = 'Value' in params ? params.Value : null;
        this.Values = 'Values' in params ? params.Values : null;

    }
}

/**
 * DeleteLoadBalancing请求参数结构体
 * @class
 */
class DeleteLoadBalancingRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;

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
         * RFC3339标准，客户端时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * RFC3339标准，客户端时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指标列表，支持的指标
l7Flow_outFlux: 访问流量
l7Flow_request: 访问请求数
l7Flow_outBandwidth: 访问带宽
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 时间间隔，选填{min, 5min, hour, day, week}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * ZoneId数组
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 筛选条件
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * DescribeSecurityPolicyManagedRulesId返回参数结构体
 * @class
 */
class DescribeSecurityPolicyManagedRulesIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 门神规则
         * @type {Array.<ManagedRule> || null}
         */
        this.Rules = null;

        /**
         * 返回总数
         * @type {number || null}
         */
        this.Count = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new ManagedRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * web事件数据
 * @class
 */
class WebEventData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击事件数据集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WebAttackEvent> || null}
         */
        this.List = null;

        /**
         * 当前页
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总页数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new WebAttackEvent();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
         * 字段已经废弃。
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 字段已经废弃。
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 规则列表。
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

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
         * 调度信息。
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * 更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

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
         * 会话保持时间。
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * 当ProxyType=hostname时：
表示代理加速唯一标识。
         * @type {string || null}
         */
        this.HostId = null;

        /**
         * Ipv6访问配置。
         * @type {Ipv6Access || null}
         */
        this.Ipv6 = null;

        /**
         * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
默认值：overseas
         * @type {string || null}
         */
        this.Area = null;

        /**
         * 封禁状态，取值有：
<li>banned：已封禁;</li>
<li>banning：封禁中；</li>
<li>recover：已解封；</li>
<li>recovering：解封禁中。</li>
         * @type {string || null}
         */
        this.BanStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

        if (params.Ipv6) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.BanStatus = 'BanStatus' in params ? params.BanStatus : null;

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
         * 开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 例外规则详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExceptUserRule> || null}
         */
        this.UserRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.UserRules) {
            this.UserRules = new Array();
            for (let z in params.UserRules) {
                let obj = new ExceptUserRule();
                obj.deserialize(params.UserRules[z]);
                this.UserRules.push(obj);
            }
        }

    }
}

/**
 * DescribeDDoSPolicy返回参数结构体
 * @class
 */
class DescribeDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS防护配置
         * @type {DdosRule || null}
         */
        this.DdosRule = null;

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

        if (params.DdosRule) {
            let obj = new DdosRule();
            obj.deserialize(params.DdosRule)
            this.DdosRule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 缓存键配置
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
         * 源站组ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 源站组名称
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * 配置类型，当OriginType=self 时，需要填写：
area: 按区域配置
weight: 按权重配置
当OriginType=third_party/cos 时，不需要填写
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 源站记录
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 源站类型
self：自有源站
third_party：第三方源站
cos：腾讯云COS源站
         * @type {string || null}
         */
        this.OriginType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;

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
 * DescribeSecurityPolicyList请求参数结构体
 * @class
 */
class DescribeSecurityPolicyListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级域名
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
 * DescribeTimingL7CacheData返回参数结构体
 * @class
 */
class DescribeTimingL7CacheDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 详细数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimingDataRecord> || null}
         */
        this.Data = null;

        /**
         * 查询维度
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 时间间隔
         * @type {string || null}
         */
        this.Interval = null;

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
                let obj = new TimingDataRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeApplicationProxyDetail请求参数结构体
 * @class
 */
class DescribeApplicationProxyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 实例ID。
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
 * 智能客户端过滤
 * @class
 */
class RateLimitIntelligence extends  AbstractModel {
    constructor(){
        super();

        /**
         * 功能开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 执行动作 
1. monitor(观察)
2. alg(挑战)
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Action = 'Action' in params ? params.Action : null;

    }
}

/**
 * 基础管控规则配置。
 * @class
 */
class IpTableConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 基础管控规则。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IpTableRule> || null}
         */
        this.Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new IpTableRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
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
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 状态
offline: 停用
online: 启用
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
 * DeleteOriginGroup返回参数结构体
 * @class
 */
class DeleteOriginGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站组ID
         * @type {string || null}
         */
        this.OriginId = null;

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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
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
         * HTTP头部
         * @type {string || null}
         */
        this.Name = null;

        /**
         * HTTP头部值
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
 * 拦截页面的总体配置，用于配置各个模块的拦截后行为。
 * @class
 */
class DropPageConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置开关。
1. on 开启
2. off 关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Waf(托管规则)模块的拦截页面配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DropPageDetail || null}
         */
        this.Waf = null;

        /**
         * 自定义页面的拦截页面配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DropPageDetail || null}
         */
        this.Acl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

        if (params.Waf) {
            let obj = new DropPageDetail();
            obj.deserialize(params.Waf)
            this.Waf = obj;
        }

        if (params.Acl) {
            let obj = new DropPageDetail();
            obj.deserialize(params.Acl)
            this.Acl = obj;
        }

    }
}

/**
 * DescribeDDosAttackSourceEvent返回参数结构体
 * @class
 */
class DescribeDDosAttackSourceEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDos攻击源数据。
         * @type {DDosAttackSourceEventData || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应信息。
         * @type {string || null}
         */
        this.Msg = null;

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
            let obj = new DDosAttackSourceEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeZoneDetails请求参数结构体
 * @class
 */
class DescribeZoneDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeDDoSPolicy请求参数结构体
 * @class
 */
class DescribeDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略组id
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 一级域名zone
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 查询维度下详细数据。
注意：此字段可能返回 null，表示取不到有效值。
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
 * ModifyZoneStatus请求参数结构体
 * @class
 */
class ModifyZoneStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点状态
- false 开启站点
- true 关闭站点
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Paused = 'Paused' in params ? params.Paused : null;

    }
}

/**
 * DescribeDDosMajorAttackEvent请求参数结构体
 * @class
 */
class DescribeDDosMajorAttackEventRequest extends  AbstractModel {
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
         * 分页拉取的最大返回结果数。最大值：1000。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页拉取的起始页号。最小值：1。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * ddos 策略组id集合，不填默认选择全部策略id。
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 站点id列表，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
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
 * CreateOriginGroup返回参数结构体
 * @class
 */
class CreateOriginGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增的源站组ID
         * @type {string || null}
         */
        this.OriginId = null;

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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityPolicy返回参数结构体
 * @class
 */
class DescribeSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户id
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 一级域名
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 二级域名
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * 安全配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SecurityConfig || null}
         */
        this.Config = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Entity = 'Entity' in params ? params.Entity : null;

        if (params.Config) {
            let obj = new SecurityConfig();
            obj.deserialize(params.Config)
            this.Config = obj;
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
 * DescribeSecurityPolicyRegions请求参数结构体
 * @class
 */
class DescribeSecurityPolicyRegionsRequest extends  AbstractModel {
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
 * 安全数据Entry对应的值
 * @class
 */
class SecEntryValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Metric = null;

        /**
         * 时序数据详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TimingDataItem> || null}
         */
        this.Detail = null;

        /**
         * 最大值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 平均值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Avg = null;

        /**
         * 数据总和。
注意：此字段可能返回 null，表示取不到有效值。
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
 * ReclaimZone请求参数结构体
 * @class
 */
class ReclaimZoneRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

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
<li> notequal: 不等于。</li>
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 匹配类型，取值有：
<li> 全部（站点任意请求）: host。 </li>
<li> 文件名: filename； </li>
<li> 文件后缀: extension； </li>
<li> HOST: host； </li>
<li> URL Full: full_url，当前站点下完整 URL 路径，必须包含 HTTP 协议，Host 和 路径； </li>
<li> URL Path: url，当前站点下 URL 路径的请求。 </li>
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 对应匹配类型的参数值，对应匹配类型的取值有：
<li> 文件后缀：jpg、txt等文件后缀；</li>
<li> 文件名称：例如 foo.jpg 中的 foo；</li>
<li> 全部（站点任意请求）： all； </li>
<li> HOST：当前站点下的 host ，例如www.maxx55.com；</li>
<li> URL Path：当前站点下 URL 路径的请求，例如：/example；</li>
<li> URL Full：当前站点下完整 URL 请求，必须包含 HTTP 协议，Host 和 路径，例如：https://www.maxx55.cn/example。</li>
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
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Target = 'Target' in params ? params.Target : null;
        this.Values = 'Values' in params ? params.Values : null;

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
         * 站点 ID
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
        this.Id = 'Id' in params ? params.Id : null;

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
         * 本规则的ID。
         * @type {number || null}
         */
        this.RuleID = null;

        /**
         * 老版本的通用规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.ManagedIds = null;

        /**
         * 触发规则后的处置方式。
1. drop 拦截
2. trans 放行
3. monitor 观察
4. alg Javascript挑战
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 封禁的惩罚时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PunishTime = null;

        /**
         * 封禁的惩罚时间单位。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PunishTimeUnit = null;

        /**
         * 放行的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.TransManagedIds = null;

        /**
         * JS挑战的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.AlgManagedIds = null;

        /**
         * 数字验证码的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.CapManagedIds = null;

        /**
         * 观察的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.MonManagedIds = null;

        /**
         * 拦截的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.DropManagedIds = null;

        /**
         * 自定义返回页面的实例id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageId = null;

        /**
         * 自定义返回页面的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 重定向时候的地址，必须为本用户接入的站点子域名，使用URLENCODE。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RedirectUrl = null;

        /**
         * 重定向时候的返回码。
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
        this.RuleID = 'RuleID' in params ? params.RuleID : null;
        this.ManagedIds = 'ManagedIds' in params ? params.ManagedIds : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.PunishTime = 'PunishTime' in params ? params.PunishTime : null;
        this.PunishTimeUnit = 'PunishTimeUnit' in params ? params.PunishTimeUnit : null;
        this.TransManagedIds = 'TransManagedIds' in params ? params.TransManagedIds : null;
        this.AlgManagedIds = 'AlgManagedIds' in params ? params.AlgManagedIds : null;
        this.CapManagedIds = 'CapManagedIds' in params ? params.CapManagedIds : null;
        this.MonManagedIds = 'MonManagedIds' in params ? params.MonManagedIds : null;
        this.DropManagedIds = 'DropManagedIds' in params ? params.DropManagedIds : null;
        this.PageId = 'PageId' in params ? params.PageId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.RedirectUrl = 'RedirectUrl' in params ? params.RedirectUrl : null;
        this.ResponseCode = 'ResponseCode' in params ? params.ResponseCode : null;

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
 * DescribeDDosAttackEvent请求参数结构体
 * @class
 */
class DescribeDDosAttackEventRequest extends  AbstractModel {
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
         * 分页拉取的最大返回结果数。最大值：1000。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页拉取的起始页号。最小值：1。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * ddos策略组id列表，不填默认选择全部策略Id。
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * 站点id列表，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 是否展示详情，取值有：
<li>Y ：展示 ；</li>
<li>N ：不展示 。</li>默认为Y。
         * @type {string || null}
         */
        this.IsShowDetail = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.IsShowDetail = 'IsShowDetail' in params ? params.IsShowDetail : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 存储客户端请求IP的头部信息配置
 * @class
 */
class ClientIp extends  AbstractModel {
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
 * DNS 记录查询过滤条件
 * @class
 */
class DnsRecordFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名，支持的列表如下：
- name: 站点名。
- status: 站点状态
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1
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
 * DescribeHostsCertificate返回参数结构体
 * @class
 */
class DescribeHostsCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数，用于分页查询
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 域名证书配置列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HostCertSetting> || null}
         */
        this.Hosts = null;

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

        if (params.Hosts) {
            this.Hosts = new Array();
            for (let z in params.Hosts) {
                let obj = new HostCertSetting();
                obj.deserialize(params.Hosts[z]);
                this.Hosts.push(obj);
            }
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
         * 站点ID。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 缓存过期时间配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheConfig || null}
         */
        this.Cache = null;

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
         * Https 加速配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Https || null}
         */
        this.Https = null;

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
         * @type {ClientIp || null}
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
         * @type {Ipv6Access || null}
         */
        this.Ipv6 = null;

        /**
         * 站点加速区域信息，取值有：
<li>mainland：中国境内加速；</li>
<li>overseas：中国境外加速。</li>
         * @type {string || null}
         */
        this.Area = null;

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
        this.Zone = 'Zone' in params ? params.Zone : null;

        if (params.Cache) {
            let obj = new CacheConfig();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

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
            let obj = new ClientIp();
            obj.deserialize(params.ClientIpHeader)
            this.ClientIpHeader = obj;
        }

        if (params.CachePrefresh) {
            let obj = new CachePrefresh();
            obj.deserialize(params.CachePrefresh)
            this.CachePrefresh = obj;
        }

        if (params.Ipv6) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
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
注意：此字段可能返回 null，表示取不到有效值。
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
 * 站点查询过滤条件
 * @class
 */
class ZoneFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名，支持的列表如下：
<li> name：站点名；</li>
<li> status：站点状态；</li>
<li> tagKey：标签键；</li>
<li> tagValue: 标签值。</li>
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1。默认为false。
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
         * 过滤参数，不填默认不过滤。
         * @type {Array.<RuleFilter> || null}
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
                let obj = new RuleFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

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
<li>startWith: 开始于；</li>
<li>notStartWith: 不开始于；</li>
<li>endWith: 结尾是；</li>
<li>notEndWith: 不结尾是。</li>
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
 * DescribeDnsData请求参数结构体
 * @class
 */
class DescribeDnsDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 过滤参数
         * @type {Array.<DnsDataFilter> || null}
         */
        this.Filters = null;

        /**
         * 时间粒度，默认为1分钟粒度，服务端根据时间范围自适应。
支持指定以下几种粒度：
min：1分钟粒度
5min：5分钟粒度
hour：1小时粒度
day：天粒度
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
                let obj = new DnsDataFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Interval = 'Interval' in params ? params.Interval : null;

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
         * @type {CacheConfigCache || null}
         */
        this.Cache = null;

        /**
         * 不缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheConfigNoCache || null}
         */
        this.NoCache = null;

        /**
         * 遵循源站配置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CacheConfigFollowOrigin || null}
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
            let obj = new CacheConfigCache();
            obj.deserialize(params.Cache)
            this.Cache = obj;
        }

        if (params.NoCache) {
            let obj = new CacheConfigNoCache();
            obj.deserialize(params.NoCache)
            this.NoCache = obj;
        }

        if (params.FollowOrigin) {
            let obj = new CacheConfigFollowOrigin();
            obj.deserialize(params.FollowOrigin)
            this.FollowOrigin = obj;
        }

    }
}

/**
 * DescribeDDosAttackEventDetail返回参数结构体
 * @class
 */
class DescribeDDosAttackEventDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDos攻击事件详情。
         * @type {DDosAttackEventDetailData || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应信息。
         * @type {string || null}
         */
        this.Msg = null;

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
            let obj = new DDosAttackEventDetailData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 代理ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 协议，取值为TCP或者UDP
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 端口，支持格式：
80：80端口
81-90：81至90端口
         * @type {Array.<string> || null}
         */
        this.Port = null;

        /**
         * 源站类型，取值：
custom：手动添加
origins：源站组
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 源站信息：
当OriginType=custom时，表示一个或多个源站，如：
OriginValue=["8.8.8.8:80","9.9.9.9:80"]
OriginValue=["test.com:80"]

当OriginType=origins时，包含一个元素，表示源站组ID，如：
OriginValue=["origin-xxx"]
         * @type {Array.<string> || null}
         */
        this.OriginValue = null;

        /**
         * 传递客户端IP，当Proto=TCP时，取值：
TOA：TOA
PPV1: Proxy Protocol传递，协议版本V1
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
当Proto=UDP时，取值：
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 是否开启会话保持
         * @type {boolean || null}
         */
        this.SessionPersist = null;

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
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.OriginValue = 'OriginValue' in params ? params.OriginValue : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

    }
}

/**
 * ModifyDDoSPolicy请求参数结构体
 * @class
 */
class ModifyDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略id。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 站点id。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * DDoS防护配置详情。
         * @type {DdosRule || null}
         */
        this.DdosRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.DdosRule) {
            let obj = new DdosRule();
            obj.deserialize(params.DdosRule)
            this.DdosRule = obj;
        }

    }
}

/**
 * ModifyZoneCnameSpeedUp返回参数结构体
 * @class
 */
class ModifyZoneCnameSpeedUpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * CNAME 加速状态
- enabled 开启
- disabled 关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebProtectionLog请求参数结构体
 * @class
 */
class DescribeWebProtectionLogRequest extends  AbstractModel {
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
         * 分页拉取的最大返回结果数。最大值：1000。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页拉取的起始页号。最小值：1。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 站点集合，不填默认查询所有站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 域名集合，不填默认查询所有域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 筛选条件。
限速规则日志中取值有：
<li>action ：执行动作（处置方式）；</li>
<li>ruleId ：规则id ；</li>
<li>oriDomain ：被攻击的子域名 ；</li>
<li>attackIp ：攻击ip 。</li>
自定义规则日志中取值有：
<li>action ：执行动作（处置方式）；</li>
<li>ruleId ：规则id ；</li>
<li>oriDomain ：被攻击的子域名 ；</li>
<li>attackIp ：攻击ip ；</li>
<li>eventId ：事件id ；</li>
<li>ua ：用户代理 ；</li>
<li>requestMethod ：请求方法 ；</li>
<li>uri ：统一资源标识符 。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 日志类型，取值有：
<li>rate ：限速日志 ；</li>
<li>acl ：自定义规则日志 。</li>不填默认为rate。
         * @type {string || null}
         */
        this.EntityType = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
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
        this.EntityType = 'EntityType' in params ? params.EntityType : null;
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 限速拦截日志
 * @class
 */
class CCLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC拦截日志数据集合。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CCLog> || null}
         */
        this.List = null;

        /**
         * 分页拉取的起始页号。最小值：1。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 分页拉取的最大返回结果数。最大值：1000。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数。
         * @type {number || null}
         */
        this.TotalSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new CCLog();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;

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
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 查询起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询起始偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询最大返回的结果条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * zone id
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 查询的域名列表
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询的资源
         * @type {string || null}
         */
        this.Target = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Target = 'Target' in params ? params.Target : null;

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
 * 内容管理任务结果
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 资源
         * @type {string || null}
         */
        this.Target = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 任务创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 任务完成时间
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
 * DeleteDnsRecords请求参数结构体
 * @class
 */
class DeleteDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 记录 ID
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Ids = 'Ids' in params ? params.Ids : null;

    }
}

/**
 * ddos黑白名单
 * @class
 */
class DdosAllowBlock extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑白名单数组。
         * @type {Array.<DDoSUserAllowBlockIP> || null}
         */
        this.UserAllowBlockIp = null;

        /**
         * 开关标识防护是否清空，取值有：
<li>off ：清空黑白名单列表，UserAllowBlockIp无需填写。 ；</li>
<li>on ：配置黑白名单，需填写UserAllowBlockIp参数。</li>默认值为on。
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

        if (params.UserAllowBlockIp) {
            this.UserAllowBlockIp = new Array();
            for (let z in params.UserAllowBlockIp) {
                let obj = new DDoSUserAllowBlockIP();
                obj.deserialize(params.UserAllowBlockIp[z]);
                this.UserAllowBlockIp.push(obj);
            }
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DDoS地域封禁
 * @class
 */
class DDoSGeoIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域封禁清空标识，取值有：
<li>off ：清空地域封禁列表 ；</li>
<li>on ：不做处理 。</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 地域信息，ID参考[DescribeSecurityPolicyRegions](https://tcloud4api.woa.com/document/product/1657/76031?!preview&!document=1)。
         * @type {Array.<number> || null}
         */
        this.RegionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * 规则引擎规则详情
 * @class
 */
class RuleSettingDetail extends  AbstractModel {
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
         * @type {Array.<RuleItem> || null}
         */
        this.Rules = null;

        /**
         * 规则优先级, 值越大优先级越高，最小为 1。
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleItem();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RulePriority = 'RulePriority' in params ? params.RulePriority : null;

    }
}

/**
 * 七层数据分析类top数据
 * @class
 */
class TopDataRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询维度值
         * @type {string || null}
         */
        this.TypeKey = null;

        /**
         * top数据排行
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeZoneDDoSPolicy返回参数结构体
 * @class
 */
class DescribeZoneDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户appid
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 防护分区
         * @type {Array.<ShieldArea> || null}
         */
        this.ShieldAreas = null;

        /**
         * 所有子域名信息，包含安全加速/内容加速
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DDoSApplication> || null}
         */
        this.Domains = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;

        if (params.ShieldAreas) {
            this.ShieldAreas = new Array();
            for (let z in params.ShieldAreas) {
                let obj = new ShieldArea();
                obj.deserialize(params.ShieldAreas[z]);
                this.ShieldAreas.push(obj);
            }
        }

        if (params.Domains) {
            this.Domains = new Array();
            for (let z in params.Domains) {
                let obj = new DDoSApplication();
                obj.deserialize(params.Domains[z]);
                this.Domains.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CNAME 状态
 * @class
 */
class CnameStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 状态
生效：active
不生效：moved
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeDDosMajorAttackEvent返回参数结构体
 * @class
 */
class DescribeDDosMajorAttackEventResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDos查询主攻击事件。
         * @type {DDosMajorAttackEventData || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应消息。
         * @type {string || null}
         */
        this.Msg = null;

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
            let obj = new DDosMajorAttackEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DDoS特征过滤
 * @class
 */
class DDoSFeaturesFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 执行动作，取值有：
<li>drop ：丢弃 ；</li>
<li>transmit ：放行 ；</li>
<li>drop_block ：丢弃并拉黑 ；</li>
<li>forward ：继续防护 。</li>
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 协议，取值有：
<li>tcp ：tcp协议 ；</li>
<li>udp ：udp协议 ；</li>
<li>icmp ：icmp协议 ；</li>
<li>all ：全部协议 。</li>
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 目标端口开始，取值范围0-65535。
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * 目标端口结束，取值范围0-65535。
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * 最小包长，取值范围0-1500。
         * @type {number || null}
         */
        this.PacketMin = null;

        /**
         * 最大包长，取值范围0-1500。
         * @type {number || null}
         */
        this.PacketMax = null;

        /**
         * 源端口开始，取值范围0-65535。
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * 源端口结束，取值范围0-65535。
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * 匹配方式1，【特征1】，取值有：
<li>pcre ：正则匹配 ；</li>
<li>sunday ：字符串匹配 。</li>默认为空字符串。
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * 取非判断，该参数对MatchType配合使用，【特征1】，取值有：
<li>0 ：匹配 ；</li>
<li>1 ：不匹配 。</li>
         * @type {number || null}
         */
        this.IsNot = null;

        /**
         * 偏移量1，【特征1】，取值范围0-1500。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 检测包字符深度，【特征1】，取值范围1-1500。
         * @type {number || null}
         */
        this.Depth = null;

        /**
         * 匹配开始层级，层级参考计算机网络结构，取值有：
<li>begin_l5 ：载荷开始检测 ；</li>
<li>begin_l4 ：tcp/udp首部开始检测 ；</li>
<li>begin_l3 ：ip首部开始检测 。</li>
         * @type {string || null}
         */
        this.MatchBegin = null;

        /**
         * 正则或字符串匹配的内容，【特征1】。
         * @type {string || null}
         */
        this.Str = null;

        /**
         * 匹配方式2，【特征2】，取值有：
<li>pcre ：正则匹配 ；</li>
<li>sunday ：字符串匹配 。</li>默认为空字符串。
         * @type {string || null}
         */
        this.MatchType2 = null;

        /**
         * 取非判断2，该参数对MatchType2配合使用，【特征2】，取值有：
<li>0 ：匹配 ；</li>
<li>1 ：不匹配 。</li>
         * @type {number || null}
         */
        this.IsNot2 = null;

        /**
         * 偏移量2，【特征2】，取值范围0-1500。
         * @type {number || null}
         */
        this.Offset2 = null;

        /**
         * 检测包字符深度，【特征2】，取值范围1-1500。
         * @type {number || null}
         */
        this.Depth2 = null;

        /**
         * 匹配开始层级，层级参考计算机网络结构，取值有：
<li>begin_l5 ：载荷开始检测 ；</li>
<li>begin_l4 ：tcp/udp首部开始检测；</li>
<li>begin_l3 ：ip首部开始检测 。</li>
         * @type {string || null}
         */
        this.MatchBegin2 = null;

        /**
         * 正则或字符串匹配的内容，【特征2】。
         * @type {string || null}
         */
        this.Str2 = null;

        /**
         * 多特征关系，仅配置【特征1】时填 none，存在【特征2】配置可不填。
         * @type {string || null}
         */
        this.MatchLogic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DportStart = 'DportStart' in params ? params.DportStart : null;
        this.DportEnd = 'DportEnd' in params ? params.DportEnd : null;
        this.PacketMin = 'PacketMin' in params ? params.PacketMin : null;
        this.PacketMax = 'PacketMax' in params ? params.PacketMax : null;
        this.SportStart = 'SportStart' in params ? params.SportStart : null;
        this.SportEnd = 'SportEnd' in params ? params.SportEnd : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.IsNot = 'IsNot' in params ? params.IsNot : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.MatchBegin = 'MatchBegin' in params ? params.MatchBegin : null;
        this.Str = 'Str' in params ? params.Str : null;
        this.MatchType2 = 'MatchType2' in params ? params.MatchType2 : null;
        this.IsNot2 = 'IsNot2' in params ? params.IsNot2 : null;
        this.Offset2 = 'Offset2' in params ? params.Offset2 : null;
        this.Depth2 = 'Depth2' in params ? params.Depth2 : null;
        this.MatchBegin2 = 'MatchBegin2' in params ? params.MatchBegin2 : null;
        this.Str2 = 'Str2' in params ? params.Str2 : null;
        this.MatchLogic = 'MatchLogic' in params ? params.MatchLogic : null;

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
         * 源站组ID
         * @type {string || null}
         */
        this.OriginId = null;

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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWebProtectionAttackEvents返回参数结构体
 * @class
 */
class DescribeWebProtectionAttackEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDos攻击事件数据
         * @type {CCInterceptEventData || null}
         */
        this.Data = null;

        /**
         * 状态，1:失败，0:成功
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 返回消息
         * @type {string || null}
         */
        this.Msg = null;

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
            let obj = new CCInterceptEventData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * Zone ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 类型，当前支持的类型：
- purge_url：URL
- purge_prefix：前缀
- purge_host：Hostname
- purge_all：全部缓存
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 要刷新的资源列表，每个元素格式依据Type而定
1) Type = purge_host 时
形如：www.example.com 或 foo.bar.example.com
2) Type = purge_prefix 时
形如：http://www.example.com/example
3) Type = purge_url 时
形如：https://www.example.com/example.jpg
4）Type = purge_all 时
Targets可为空，不需要填写
         * @type {Array.<string> || null}
         */
        this.Targets = null;

        /**
         * 若有编码转换，仅清除编码转换后匹配的资源
若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986）
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
 * DeleteDnsRecords返回参数结构体
 * @class
 */
class DeleteDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {Array.<string> || null}
         */
        this.Ids = null;

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
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBotLog请求参数结构体
 * @class
 */
class DescribeBotLogRequest extends  AbstractModel {
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
         * 分页拉取的最大返回结果数。最大值：1000。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页拉取的起始页号。最小值：1。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 站点集合，不填默认查询所有站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 域名集合，不填默认查询所有子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 筛选条件，取值有：
<li>action ：执行动作（处置方式）；</li>
<li>sipCountryCode ：ip所在国家 ；</li>
<li>attackIp ：攻击ip ；</li>
<li>ruleId ：规则id ；</li>
<li>eventId ：事件id ；</li>
<li>ua ：用户代理 ；</li>
<li>requestMethod ：请求方法 ；</li>
<li>uri ：统一资源标识符 。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
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
        this.Area = 'Area' in params ? params.Area : null;

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
         * 七层离线日志data
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<L7OfflineLog> || null}
         */
        this.Data = null;

        /**
         * 页面大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 页号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PageNo = null;

        /**
         * 总页数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Pages = null;

        /**
         * 总条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalSize = null;

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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
        this.Pages = 'Pages' in params ? params.Pages : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ddos 攻击事件的详情
 * @class
 */
class DDosAttackEventDetailData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击状态，取值有：
<li>1 ：观察中 ；</li>
<li>2 ：攻击开始 ；</li>
<li>3 ：攻击结束 。</li>
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * 攻击类型。
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 结束时间。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 开始时间。
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 最大带宽。
         * @type {number || null}
         */
        this.MaxBandWidth = null;

        /**
         * 最大包速率。
         * @type {number || null}
         */
        this.PacketMaxRate = null;

        /**
         * 事件Id。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * ddos 策略组id。
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
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.MaxBandWidth = 'MaxBandWidth' in params ? params.MaxBandWidth : null;
        this.PacketMaxRate = 'PacketMaxRate' in params ? params.PacketMaxRate : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

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
         * 源站组名称
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * 配置类型，当OriginType=self 时，需要填写：
area: 按区域配置
weight: 按权重配置
当OriginType=third_party/cos 时，不需要填写
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 源站记录
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 源站类型
self：自有源站
third_party：第三方源站
cos：腾讯云COS源站
         * @type {string || null}
         */
        this.OriginType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;

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
         * RFC3339格式，客户端时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * RFC3339格式，客户端时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 支持的指标：
l4Flow_connections: 访问连接数
l4Flow_flux: 访问总流量
l4Flow_inFlux: 访问入流量
l4Flow_outFlux: 访问出流量
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 站点id列表
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 该字段已废弃，请使用ProxyIds字段
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 该字段当前无效
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 时间间隔，选填{min, 5min, hour, day}
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 该字段当前无效，请使用Filter筛选
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 支持的 Filter：proxyd,ruleId
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 四层实例列表
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;
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
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 分页查询偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页查询限制数目，默认为 100，最大可设置为 1000
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定域名查询
         * @type {Array.<string> || null}
         */
        this.Hosts = null;

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
        this.Hosts = 'Hosts' in params ? params.Hosts : null;

    }
}

/**
 * DescribeZoneDDoSPolicy请求参数结构体
 * @class
 */
class DescribeZoneDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级域名id
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
 * DescribeDDosAttackData返回参数结构体
 * @class
 */
class DescribeDDosAttackDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDos攻击数据内容。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应信息。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
         * @type {string || null}
         */
        this.Interval = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 分页拉取的最大返回结果数。最大值：1000。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 分页拉取的起始页号。最小值：1。
         * @type {number || null}
         */
        this.PageNo = null;

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
         * 筛选条件，取值有：
<li>attackType ：攻击类型 ；</li>
<li>riskLevel ：风险等级 ；</li>
<li>action ：执行动作（处置方式） ；</li>
<li>ruleId ：规则id ；</li>
<li>sipCountryCode ：ip所在国家 ；</li>
<li>attackIp ：攻击ip ；</li>
<li>oriDomain ：被攻击的子域名 ；</li>
<li>eventId ：事件id ；</li>
<li>ua ：用户代理 ；</li>
<li>requestMethod ：请求方法 ；</li>
<li>uri ：统一资源标识符 。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.PageNo = 'PageNo' in params ? params.PageNo : null;
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
        this.Area = 'Area' in params ? params.Area : null;

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
         * 规则ID列表（99999为无效id）。
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
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateApplicationProxyRules返回参数结构体
 * @class
 */
class CreateApplicationProxyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增的规则ID数组
         * @type {Array.<string> || null}
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
 * DescribeWebManagedRulesTopData请求参数结构体
 * @class
 */
class DescribeWebManagedRulesTopDataRequest extends  AbstractModel {
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
<li>waf_requestNum_url ：url请求数排行 ；</li>
<li>waf_requestNum_cip：客户端ip请求数排行 ；</li>
<li>waf_cipRequestNum_region ：客户端区域请求数排行 。</li>
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 查询前多少个，传值为0返回全量。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 站点id列表，不填默认选择全部站点。
         * @type {Array.<string> || null}
         */
        this.ZoneIds = null;

        /**
         * 该字段已废弃，请勿传。
         * @type {Array.<number> || null}
         */
        this.PolicyIds = null;

        /**
         * 该字段已废弃，请勿传。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 该字段已废弃，请勿传。
         * @type {string || null}
         */
        this.ProtocolType = null;

        /**
         * 该字段已废弃，请勿传。
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 域名列表，不填默认选择全部子域名。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 筛选条件，取值有：
<li>action ：执行动作 。</li>
         * @type {Array.<QueryCondition> || null}
         */
        this.QueryCondition = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ZoneIds = 'ZoneIds' in params ? params.ZoneIds : null;
        this.PolicyIds = 'PolicyIds' in params ? params.PolicyIds : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ProtocolType = 'ProtocolType' in params ? params.ProtocolType : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
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
        this.PlanInfoList = null;

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

        if (params.PlanInfoList) {
            this.PlanInfoList = new Array();
            for (let z in params.PlanInfoList) {
                let obj = new PlanInfo();
                obj.deserialize(params.PlanInfoList[z]);
                this.PlanInfoList.push(obj);
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
         * 任务ID
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 查询起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询起始偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询最大返回的结果条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
         * @type {Array.<string> || null}
         */
        this.Statuses = null;

        /**
         * zone id
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 查询的域名列表
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 查询内容
         * @type {string || null}
         */
        this.Target = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Statuses = 'Statuses' in params ? params.Statuses : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.Target = 'Target' in params ? params.Target : null;

    }
}

/**
 * DescribeIdentification返回参数结构体
 * @class
 */
class DescribeIdentificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 验证状态
- pending 验证中
- finished 验证完成
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 子域
         * @type {string || null}
         */
        this.Subdomain = null;

        /**
         * 记录类型
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 记录值
         * @type {string || null}
         */
        this.RecordValue = null;

        /**
         * 域名当前的 NS 记录
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OriginalNameServers = null;

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
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Subdomain = 'Subdomain' in params ? params.Subdomain : null;
        this.RecordType = 'RecordType' in params ? params.RecordType : null;
        this.RecordValue = 'RecordValue' in params ? params.RecordValue : null;
        this.OriginalNameServers = 'OriginalNameServers' in params ? params.OriginalNameServers : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DDos主攻击事件
 * @class
 */
class DDosMajorAttackEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * ddos 策略组id。
         * @type {number || null}
         */
        this.PolicyId = null;

        /**
         * 攻击最大带宽。
         * @type {number || null}
         */
        this.AttackMaxBandWidth = null;

        /**
         * 攻击请求时间，采用unix秒级时间戳。
         * @type {number || null}
         */
        this.AttackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.AttackMaxBandWidth = 'AttackMaxBandWidth' in params ? params.AttackMaxBandWidth : null;
        this.AttackTime = 'AttackTime' in params ? params.AttackTime : null;

    }
}

/**
 * ModifyZoneCnameSpeedUp请求参数结构体
 * @class
 */
class ModifyZoneCnameSpeedUpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CNAME 加速状态
- enabled 开启
- disabled 关闭
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeApplicationProxyDetail返回参数结构体
 * @class
 */
class DescribeApplicationProxyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
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
         * 字段已经废弃。
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 字段已经废弃。
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 规则列表。
         * @type {Array.<ApplicationProxyRule> || null}
         */
        this.Rule = null;

        /**
         * 状态，取值有：
<li>online：启用；</li>
<li>offline：停用；</li>
<li>progress：部署中。</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 调度信息。
         * @type {Array.<string> || null}
         */
        this.ScheduleValue = null;

        /**
         * 更新时间。
         * @type {string || null}
         */
        this.UpdateTime = null;

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
         * 会话保持时间。
         * @type {number || null}
         */
        this.SessionPersistTime = null;

        /**
         * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>
         * @type {string || null}
         */
        this.ProxyType = null;

        /**
         * 当ProxyType=hostname时：
表示代理加速唯一标识。
         * @type {string || null}
         */
        this.HostId = null;

        /**
         * IPv6访问配置。
         * @type {Ipv6Access || null}
         */
        this.Ipv6 = null;

        /**
         * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
         * @type {string || null}
         */
        this.Area = null;

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
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.PlatType = 'PlatType' in params ? params.PlatType : null;
        this.SecurityType = 'SecurityType' in params ? params.SecurityType : null;
        this.AccelerateType = 'AccelerateType' in params ? params.AccelerateType : null;
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new ApplicationProxyRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ScheduleValue = 'ScheduleValue' in params ? params.ScheduleValue : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;
        this.HostId = 'HostId' in params ? params.HostId : null;

        if (params.Ipv6) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }
        this.Area = 'Area' in params ? params.Area : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DDoS黑白名单
 * @class
 */
class DDoSUserAllowBlockIP extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端IP。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 掩码。
         * @type {number || null}
         */
        this.Mask = null;

        /**
         * 类型，取值有：
<li>block ：丢弃 ；</li>
<li>allow ：允许。</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 10位时间戳，例如1199116800。
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 客户端IP2，设置IP范围时使用，例如 1.1.1.1-1.1.1.2。
         * @type {string || null}
         */
        this.Ip2 = null;

        /**
         * 掩码2，设置IP网段范围时使用，例如 1.1.1.0/24-1.1.2.0/24。
         * @type {number || null}
         */
        this.Mask2 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Mask = 'Mask' in params ? params.Mask : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Ip2 = 'Ip2' in params ? params.Ip2 : null;
        this.Mask2 = 'Mask2' in params ? params.Mask2 : null;

    }
}

/**
 * 规则引擎HTTP请求头/响应头类型的动作
 * @class
 */
class RuleRewriteAction extends  AbstractModel {
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
 * 规则引擎常规类型的动作
 * @class
 */
class RuleNormalAction extends  AbstractModel {
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
 * DescribeBotLog返回参数结构体
 * @class
 */
class DescribeBotLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bot攻击数据内容。
         * @type {BotLogData || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应信息。
         * @type {string || null}
         */
        this.Msg = null;

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
            let obj = new BotLogData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancing返回参数结构体
 * @class
 */
class DescribeLoadBalancingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 负载均衡信息
         * @type {Array.<LoadBalancing> || null}
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
                let obj = new LoadBalancing();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 数据详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SecEntry> || null}
         */
        this.Data = null;

        /**
         * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 请求响应消息。
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
         * @type {string || null}
         */
        this.Interval = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 参数已经废弃。
         * @type {string || null}
         */
        this.ForwardClientIp = null;

        /**
         * 参数已经废弃。
         * @type {boolean || null}
         */
        this.SessionPersist = null;

        /**
         * 会话保持时间，不填写保持原有配置。取值范围：30-3600，单位：秒。
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
         * @type {Ipv6Access || null}
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
        this.ForwardClientIp = 'ForwardClientIp' in params ? params.ForwardClientIp : null;
        this.SessionPersist = 'SessionPersist' in params ? params.SessionPersist : null;
        this.SessionPersistTime = 'SessionPersistTime' in params ? params.SessionPersistTime : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

        if (params.Ipv6) {
            let obj = new Ipv6Access();
            obj.deserialize(params.Ipv6)
            this.Ipv6 = obj;
        }

    }
}

/**
 * ModifyDnssec返回参数结构体
 * @class
 */
class ModifyDnssecResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * DNSSEC 状态
- enabled 开启
- disabled 关闭
         * @type {string || null}
         */
        this.Status = null;

        /**
         * DNSSEC 相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DnssecInfo || null}
         */
        this.Dnssec = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifiedOn = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Dnssec) {
            let obj = new DnssecInfo();
            obj.deserialize(params.Dnssec)
            this.Dnssec = obj;
        }
        this.ModifiedOn = 'ModifiedOn' in params ? params.ModifiedOn : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ScanDnsRecords请求参数结构体
 * @class
 */
class ScanDnsRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点 ID
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
 * 自定义 nameservers
 * @class
 */
class VanityNameServers extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义 ns 开关
- on 开启
- off 关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 自定义 ns 列表
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
 * ImportDnsRecords返回参数结构体
 * @class
 */
class ImportDnsRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录 ID
         * @type {Array.<string> || null}
         */
        this.Ids = null;

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
        this.Ids = 'Ids' in params ? params.Ids : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLoadBalancingDetail请求参数结构体
 * @class
 */
class DescribeLoadBalancingDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancingId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.LoadBalancingId = 'LoadBalancingId' in params ? params.LoadBalancingId : null;

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
         * 服务器证书 ID, 默认证书ID, 或在 SSL 证书管理进行证书托管时自动生成
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 证书备注名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Alias = null;

        /**
         * 证书类型:
default: 默认证书
upload:用户上传
managed:腾讯云托管
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 证书过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 证书生效时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EffectiveTime = null;

        /**
         * 证书公用名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CommonName = null;

        /**
         * 证书SAN域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SubjectAltName = null;

        /**
         * 证书状态:
applying: 证书申请中
failed: 证书(申请)失败
processing: 证书部署中
deployed: 证书已部署
disabled: 证书被禁用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Status为失败时,此字段返回失败原因
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
        this.Alias = 'Alias' in params ? params.Alias : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.EffectiveTime = 'EffectiveTime' in params ? params.EffectiveTime : null;
        this.CommonName = 'CommonName' in params ? params.CommonName : null;
        this.SubjectAltName = 'SubjectAltName' in params ? params.SubjectAltName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DNSSEC 相关信息
 * @class
 */
class DnssecInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标志
         * @type {number || null}
         */
        this.Flags = null;

        /**
         * 加密算法
         * @type {string || null}
         */
        this.Algorithm = null;

        /**
         * 加密类型
         * @type {string || null}
         */
        this.KeyType = null;

        /**
         * 摘要类型
         * @type {string || null}
         */
        this.DigestType = null;

        /**
         * 摘要算法
         * @type {string || null}
         */
        this.DigestAlgorithm = null;

        /**
         * 摘要信息
         * @type {string || null}
         */
        this.Digest = null;

        /**
         * DS 记录值
         * @type {string || null}
         */
        this.DS = null;

        /**
         * 密钥标签
         * @type {number || null}
         */
        this.KeyTag = null;

        /**
         * 公钥
         * @type {string || null}
         */
        this.PublicKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Flags = 'Flags' in params ? params.Flags : null;
        this.Algorithm = 'Algorithm' in params ? params.Algorithm : null;
        this.KeyType = 'KeyType' in params ? params.KeyType : null;
        this.DigestType = 'DigestType' in params ? params.DigestType : null;
        this.DigestAlgorithm = 'DigestAlgorithm' in params ? params.DigestAlgorithm : null;
        this.Digest = 'Digest' in params ? params.Digest : null;
        this.DS = 'DS' in params ? params.DS : null;
        this.KeyTag = 'KeyTag' in params ? params.KeyTag : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;

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
         * 分页参数Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤参数
         * @type {Array.<OriginFilter> || null}
         */
        this.Filters = null;

        /**
         * 站点ID
不填写获取所有站点源站组
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new OriginFilter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeOriginGroupDetail返回参数结构体
 * @class
 */
class DescribeOriginGroupDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站组ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 源站组名称
         * @type {string || null}
         */
        this.OriginName = null;

        /**
         * 源站组配置类型
area：表示按照Record记录中的Area字段进行按客户端IP所在区域回源。
weight：表示按照Record记录中的Weight字段进行按权重回源。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 记录
         * @type {Array.<OriginRecord> || null}
         */
        this.Record = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 站点ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 站点名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 源站类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginType = null;

        /**
         * 当前源站组是否被四层代理使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ApplicationProxyUsed = null;

        /**
         * 当前源站组是否被负载均衡使用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.LoadBalancingUsed = null;

        /**
         * 使用当前源站组的负载均衡的类型：
none：未被使用
dns_only：被仅DNS类型负载均衡使用
proxied：被代理加速类型负载均衡使用
both：同时被仅DNS和代理加速类型负载均衡使用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancingUsedType = null;

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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.OriginName = 'OriginName' in params ? params.OriginName : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new OriginRecord();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OriginType = 'OriginType' in params ? params.OriginType : null;
        this.ApplicationProxyUsed = 'ApplicationProxyUsed' in params ? params.ApplicationProxyUsed : null;
        this.LoadBalancingUsed = 'LoadBalancingUsed' in params ? params.LoadBalancingUsed : null;
        this.LoadBalancingUsedType = 'LoadBalancingUsedType' in params ? params.LoadBalancingUsedType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeOriginGroupDetail请求参数结构体
 * @class
 */
class DescribeOriginGroupDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站组ID
         * @type {string || null}
         */
        this.OriginId = null;

        /**
         * 站点ID
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
        this.OriginId = 'OriginId' in params ? params.OriginId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeDDosAttackEventDetail请求参数结构体
 * @class
 */
class DescribeDDosAttackEventDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件id。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
        this.Area = 'Area' in params ? params.Area : null;

    }
}

/**
 * 域名证书配置
 * @class
 */
class HostCertSetting extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 服务端证书配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ServerCertInfo> || null}
         */
        this.CertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Host = 'Host' in params ? params.Host : null;

        if (params.CertInfo) {
            this.CertInfo = new Array();
            for (let z in params.CertInfo) {
                let obj = new ServerCertInfo();
                obj.deserialize(params.CertInfo[z]);
                this.CertInfo.push(obj);
            }
        }

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
         * 查询维度
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 时间间隔
         * @type {string || null}
         */
        this.Interval = null;

        /**
         * 详细数据
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

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
 * 安全Bot配置
 * @class
 */
class BotConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开关。
1. on 开启
2. off 关闭
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * 通用详细基础规则。
         * @type {BotManagedRule || null}
         */
        this.ManagedRule = null;

        /**
         * ua基础规则。
         * @type {BotManagedRule || null}
         */
        this.UaBotRule = null;

        /**
         * isp基础规则。
         * @type {BotManagedRule || null}
         */
        this.IspBotRule = null;

        /**
         * 用户画像规则。
         * @type {BotPortraitRule || null}
         */
        this.PortraitRule = null;

        /**
         * Bot智能分析。
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

        if (params.ManagedRule) {
            let obj = new BotManagedRule();
            obj.deserialize(params.ManagedRule)
            this.ManagedRule = obj;
        }

        if (params.UaBotRule) {
            let obj = new BotManagedRule();
            obj.deserialize(params.UaBotRule)
            this.UaBotRule = obj;
        }

        if (params.IspBotRule) {
            let obj = new BotManagedRule();
            obj.deserialize(params.IspBotRule)
            this.IspBotRule = obj;
        }

        if (params.PortraitRule) {
            let obj = new BotPortraitRule();
            obj.deserialize(params.PortraitRule)
            this.PortraitRule = obj;
        }

        if (params.IntelligenceRule) {
            let obj = new IntelligenceRule();
            obj.deserialize(params.IntelligenceRule)
            this.IntelligenceRule = obj;
        }

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
         * 数据和
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Sum = null;

        /**
         * 最大
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Max = null;

        /**
         * 平均
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Avg = null;

        /**
         * 指标名
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 废弃字段，即将下线，请使用Detail字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.DetailData = null;

        /**
         * 详细数据
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
        this.DetailData = 'DetailData' in params ? params.DetailData : null;

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
 * DescribeBotManagedRules请求参数结构体
 * @class
 */
class DescribeBotManagedRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一级域名
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 子域名/应用名
         * @type {string || null}
         */
        this.Entity = null;

        /**
         * 页数
         * @type {number || null}
         */
        this.Page = null;

        /**
         * 每页数量
         * @type {number || null}
         */
        this.PerPage = null;

        /**
         * idcid/sipbot/uabot规则类型，空代表拉取全部
         * @type {string || null}
         */
        this.RuleType = null;

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
        this.Page = 'Page' in params ? params.Page : null;
        this.PerPage = 'PerPage' in params ? params.PerPage : null;
        this.RuleType = 'RuleType' in params ? params.RuleType : null;

    }
}

module.exports = {
    CreatePlanForZoneResponse: CreatePlanForZoneResponse,
    DropPageDetail: DropPageDetail,
    Compression: Compression,
    WebLogData: WebLogData,
    DeleteRulesRequest: DeleteRulesRequest,
    ACLUserRule: ACLUserRule,
    ModifyDefaultCertificateRequest: ModifyDefaultCertificateRequest,
    DescribeWebManagedRulesTopDataResponse: DescribeWebManagedRulesTopDataResponse,
    DescribeOriginGroupResponse: DescribeOriginGroupResponse,
    DescribeWebManagedRulesAttackEventsResponse: DescribeWebManagedRulesAttackEventsResponse,
    DescribeTopL7CacheDataRequest: DescribeTopL7CacheDataRequest,
    DeleteApplicationProxyResponse: DeleteApplicationProxyResponse,
    Https: Https,
    SecurityEntity: SecurityEntity,
    OriginFilter: OriginFilter,
    BotLogData: BotLogData,
    DescribeZonesRequest: DescribeZonesRequest,
    RateLimitTemplate: RateLimitTemplate,
    ShieldArea: ShieldArea,
    ServerCertInfo: ServerCertInfo,
    ModifyRuleRequest: ModifyRuleRequest,
    DdosRule: DdosRule,
    ModifyLoadBalancingStatusResponse: ModifyLoadBalancingStatusResponse,
    DescribePrefetchTasksResponse: DescribePrefetchTasksResponse,
    DescribeDDosAttackEventResponse: DescribeDDosAttackEventResponse,
    DeleteApplicationProxyRequest: DeleteApplicationProxyRequest,
    CreateCustomErrorPageResponse: CreateCustomErrorPageResponse,
    CreateRuleResponse: CreateRuleResponse,
    DescribeZoneSettingRequest: DescribeZoneSettingRequest,
    ExceptUserRuleCondition: ExceptUserRuleCondition,
    ModifyZoneSettingRequest: ModifyZoneSettingRequest,
    ModifyDnsRecordRequest: ModifyDnsRecordRequest,
    DDoSAcl: DDoSAcl,
    ModifySecurityPolicyRequest: ModifySecurityPolicyRequest,
    CreateApplicationProxyRulesRequest: CreateApplicationProxyRulesRequest,
    LoadBalancing: LoadBalancing,
    ModifyDnssecRequest: ModifyDnssecRequest,
    ModifyApplicationProxyResponse: ModifyApplicationProxyResponse,
    DdosPacketFilter: DdosPacketFilter,
    CreateApplicationProxyResponse: CreateApplicationProxyResponse,
    ImportDnsRecordsRequest: ImportDnsRecordsRequest,
    CacheConfigNoCache: CacheConfigNoCache,
    ModifyZoneStatusResponse: ModifyZoneStatusResponse,
    DescribeRulesResponse: DescribeRulesResponse,
    DescribeZoneDetailsResponse: DescribeZoneDetailsResponse,
    BotLog: BotLog,
    ExceptUserRuleScope: ExceptUserRuleScope,
    Origin: Origin,
    DescribeAvailablePlansRequest: DescribeAvailablePlansRequest,
    DescribeSecurityPolicyManagedRulesRequest: DescribeSecurityPolicyManagedRulesRequest,
    DescribeSecurityPortraitRulesRequest: DescribeSecurityPortraitRulesRequest,
    CertSort: CertSort,
    ModifySecurityPolicyResponse: ModifySecurityPolicyResponse,
    ModifyDDoSPolicyHostRequest: ModifyDDoSPolicyHostRequest,
    DescribeHostsSettingResponse: DescribeHostsSettingResponse,
    DescribeSecurityPolicyRegionsResponse: DescribeSecurityPolicyRegionsResponse,
    ModifyZoneResponse: ModifyZoneResponse,
    DescribeDDosAttackSourceEventRequest: DescribeDDosAttackSourceEventRequest,
    ModifyZoneRequest: ModifyZoneRequest,
    DeleteZoneResponse: DeleteZoneResponse,
    DDosAttackEventData: DDosAttackEventData,
    Hsts: Hsts,
    CreatePurgeTaskResponse: CreatePurgeTaskResponse,
    RuleCodeAction: RuleCodeAction,
    DeleteApplicationProxyRuleResponse: DeleteApplicationProxyRuleResponse,
    DDosAttackSourceEvent: DDosAttackSourceEvent,
    TimingDataRecord: TimingDataRecord,
    Zone: Zone,
    ModifyRulePriorityResponse: ModifyRulePriorityResponse,
    DdosAcls: DdosAcls,
    DeleteOriginGroupRequest: DeleteOriginGroupRequest,
    RulesSettingAction: RulesSettingAction,
    Tag: Tag,
    ModifyHostsCertificateResponse: ModifyHostsCertificateResponse,
    RateLimitConfig: RateLimitConfig,
    CreateDnsRecordRequest: CreateDnsRecordRequest,
    IpTableRule: IpTableRule,
    L7OfflineLog: L7OfflineLog,
    ModifyHostsCertificateRequest: ModifyHostsCertificateRequest,
    ApplicationProxyRule: ApplicationProxyRule,
    SmartRouting: SmartRouting,
    DdosSpeedLimit: DdosSpeedLimit,
    OriginCheckOriginStatus: OriginCheckOriginStatus,
    RuleNormalActionParams: RuleNormalActionParams,
    DescribeSecurityPolicyManagedRulesIdRequest: DescribeSecurityPolicyManagedRulesIdRequest,
    DescribeRulesSettingResponse: DescribeRulesSettingResponse,
    CacheConfigCache: CacheConfigCache,
    RuleExtraParameter: RuleExtraParameter,
    RuleAction: RuleAction,
    CertFilter: CertFilter,
    DescribeIdentificationRequest: DescribeIdentificationRequest,
    ModifyLoadBalancingStatusRequest: ModifyLoadBalancingStatusRequest,
    DescribeDDosAttackTopDataResponse: DescribeDDosAttackTopDataResponse,
    DescribeCnameStatusResponse: DescribeCnameStatusResponse,
    DescribeLoadBalancingRequest: DescribeLoadBalancingRequest,
    CCInterceptEvent: CCInterceptEvent,
    DDoSStatusInfo: DDoSStatusInfo,
    AclConfig: AclConfig,
    ModifyZoneSettingResponse: ModifyZoneSettingResponse,
    DescribeZonesResponse: DescribeZonesResponse,
    ScanDnsRecordsResponse: ScanDnsRecordsResponse,
    RateLimitTemplateDetail: RateLimitTemplateDetail,
    WafConfig: WafConfig,
    CreateDnsRecordResponse: CreateDnsRecordResponse,
    CCLog: CCLog,
    RuleItem: RuleItem,
    RuleFilter: RuleFilter,
    DDoSConfig: DDoSConfig,
    DescribeWebManagedRulesDataResponse: DescribeWebManagedRulesDataResponse,
    DescribeWebManagedRulesLogResponse: DescribeWebManagedRulesLogResponse,
    OriginRecord: OriginRecord,
    WebLogs: WebLogs,
    TopDetailData: TopDetailData,
    CreatePrefetchTaskRequest: CreatePrefetchTaskRequest,
    DeleteApplicationProxyRuleRequest: DeleteApplicationProxyRuleRequest,
    CacheConfigFollowOrigin: CacheConfigFollowOrigin,
    ACLCondition: ACLCondition,
    DescribeTopL7AnalysisDataRequest: DescribeTopL7AnalysisDataRequest,
    TopNEntry: TopNEntry,
    DescribeApplicationProxyResponse: DescribeApplicationProxyResponse,
    CreateLoadBalancingResponse: CreateLoadBalancingResponse,
    DescribeTopL7CacheDataResponse: DescribeTopL7CacheDataResponse,
    DescribeOverviewL7DataRequest: DescribeOverviewL7DataRequest,
    SwitchConfig: SwitchConfig,
    IdentifyZoneResponse: IdentifyZoneResponse,
    WebSocket: WebSocket,
    DataItem: DataItem,
    ModifyLoadBalancingRequest: ModifyLoadBalancingRequest,
    CreateLoadBalancingRequest: CreateLoadBalancingRequest,
    DescribeDnssecRequest: DescribeDnssecRequest,
    DescribeWebProtectionLogResponse: DescribeWebProtectionLogResponse,
    CCInterceptEventData: CCInterceptEventData,
    DescribeLoadBalancingDetailResponse: DescribeLoadBalancingDetailResponse,
    SecurityConfig: SecurityConfig,
    DDosMajorAttackEventData: DDosMajorAttackEventData,
    DescribeBotManagedRulesResponse: DescribeBotManagedRulesResponse,
    DnsRecord: DnsRecord,
    RuleCodeActionParams: RuleCodeActionParams,
    Ipv6Access: Ipv6Access,
    DDoSAntiPly: DDoSAntiPly,
    DescribeWebManagedRulesDataRequest: DescribeWebManagedRulesDataRequest,
    DDosAttackSourceEventData: DDosAttackSourceEventData,
    ModifyDDoSPolicyResponse: ModifyDDoSPolicyResponse,
    DescribeDnsRecordsRequest: DescribeDnsRecordsRequest,
    CreatePrefetchTaskResponse: CreatePrefetchTaskResponse,
    WafRule: WafRule,
    DescribeDefaultCertificatesRequest: DescribeDefaultCertificatesRequest,
    GeoIp: GeoIp,
    RuleChoicePropertiesItem: RuleChoicePropertiesItem,
    DescribeSecurityPolicyRequest: DescribeSecurityPolicyRequest,
    ModifyApplicationProxyRuleResponse: ModifyApplicationProxyRuleResponse,
    RuleRewriteActionParams: RuleRewriteActionParams,
    DDosAttackEvent: DDosAttackEvent,
    FailReason: FailReason,
    TopNEntryValue: TopNEntryValue,
    CreateZoneRequest: CreateZoneRequest,
    PlanInfo: PlanInfo,
    VanityNameServersIps: VanityNameServersIps,
    DescribeTimingL7CacheDataRequest: DescribeTimingL7CacheDataRequest,
    DescribeSecurityPolicyListResponse: DescribeSecurityPolicyListResponse,
    DescribePurgeTasksResponse: DescribePurgeTasksResponse,
    ModifyRuleResponse: ModifyRuleResponse,
    CheckCertificateResponse: CheckCertificateResponse,
    DDoSApplication: DDoSApplication,
    DownloadL7LogsRequest: DownloadL7LogsRequest,
    DeleteLoadBalancingResponse: DeleteLoadBalancingResponse,
    DescribeWebProtectionDataRequest: DescribeWebProtectionDataRequest,
    CheckCertificateRequest: CheckCertificateRequest,
    DescribeSecurityPortraitRulesResponse: DescribeSecurityPortraitRulesResponse,
    CreateApplicationProxyRuleRequest: CreateApplicationProxyRuleRequest,
    BotManagedRuleDetail: BotManagedRuleDetail,
    ForceRedirect: ForceRedirect,
    DescribeDnsDataResponse: DescribeDnsDataResponse,
    ModifyApplicationProxyStatusResponse: ModifyApplicationProxyStatusResponse,
    IdentifyZoneRequest: IdentifyZoneRequest,
    DetailHost: DetailHost,
    RateLimitUserRule: RateLimitUserRule,
    DescribeDnsRecordsResponse: DescribeDnsRecordsResponse,
    DescribeDefaultCertificatesResponse: DescribeDefaultCertificatesResponse,
    CachePrefresh: CachePrefresh,
    DescribeTimingL7AnalysisDataResponse: DescribeTimingL7AnalysisDataResponse,
    PortraitManagedRuleDetail: PortraitManagedRuleDetail,
    BotPortraitRule: BotPortraitRule,
    DescribeWebProtectionAttackEventsRequest: DescribeWebProtectionAttackEventsRequest,
    RulesProperties: RulesProperties,
    DescribeOverviewL7DataResponse: DescribeOverviewL7DataResponse,
    DescribeHostsCertificateRequest: DescribeHostsCertificateRequest,
    DescribeSecurityPolicyManagedRulesResponse: DescribeSecurityPolicyManagedRulesResponse,
    OriginGroup: OriginGroup,
    DescribeApplicationProxyRequest: DescribeApplicationProxyRequest,
    CreateRuleRequest: CreateRuleRequest,
    ModifyDDoSPolicyHostResponse: ModifyDDoSPolicyHostResponse,
    ModifyApplicationProxyRuleStatusRequest: ModifyApplicationProxyRuleStatusRequest,
    ModifyLoadBalancingResponse: ModifyLoadBalancingResponse,
    WebAttackEvent: WebAttackEvent,
    DescribeDDosAttackTopDataRequest: DescribeDDosAttackTopDataRequest,
    ExceptUserRule: ExceptUserRule,
    CreateApplicationProxyRuleResponse: CreateApplicationProxyRuleResponse,
    DescribeDDosAttackDataRequest: DescribeDDosAttackDataRequest,
    ModifyDnsRecordResponse: ModifyDnsRecordResponse,
    OriginRecordPrivateParameter: OriginRecordPrivateParameter,
    CreatePlanForZoneRequest: CreatePlanForZoneRequest,
    TimingDataItem: TimingDataItem,
    CreateApplicationProxyRequest: CreateApplicationProxyRequest,
    DescribeTopL7AnalysisDataResponse: DescribeTopL7AnalysisDataResponse,
    IntelligenceRuleItem: IntelligenceRuleItem,
    IntelligenceRule: IntelligenceRule,
    PostMaxSize: PostMaxSize,
    ModifyRulePriorityRequest: ModifyRulePriorityRequest,
    ManagedRule: ManagedRule,
    Filter: Filter,
    DescribeWebManagedRulesAttackEventsRequest: DescribeWebManagedRulesAttackEventsRequest,
    DescribeCnameStatusRequest: DescribeCnameStatusRequest,
    CreateCustomErrorPageRequest: CreateCustomErrorPageRequest,
    DescribeDnssecResponse: DescribeDnssecResponse,
    CreateZoneResponse: CreateZoneResponse,
    DnsDataFilter: DnsDataFilter,
    DeleteLoadBalancingRequest: DeleteLoadBalancingRequest,
    DescribeTimingL7AnalysisDataRequest: DescribeTimingL7AnalysisDataRequest,
    DescribeSecurityPolicyManagedRulesIdResponse: DescribeSecurityPolicyManagedRulesIdResponse,
    WebEventData: WebEventData,
    ApplicationProxy: ApplicationProxy,
    ExceptConfig: ExceptConfig,
    DescribeDDoSPolicyResponse: DescribeDDoSPolicyResponse,
    CacheKey: CacheKey,
    ModifyOriginGroupRequest: ModifyOriginGroupRequest,
    ModifyApplicationProxyRuleStatusResponse: ModifyApplicationProxyRuleStatusResponse,
    DescribeSecurityPolicyListRequest: DescribeSecurityPolicyListRequest,
    DescribeTimingL7CacheDataResponse: DescribeTimingL7CacheDataResponse,
    DescribeApplicationProxyDetailRequest: DescribeApplicationProxyDetailRequest,
    RateLimitIntelligence: RateLimitIntelligence,
    IpTableConfig: IpTableConfig,
    ModifyApplicationProxyStatusRequest: ModifyApplicationProxyStatusRequest,
    DeleteOriginGroupResponse: DeleteOriginGroupResponse,
    Header: Header,
    RuleAndConditions: RuleAndConditions,
    DropPageConfig: DropPageConfig,
    DescribeDDosAttackSourceEventResponse: DescribeDDosAttackSourceEventResponse,
    DescribeZoneDetailsRequest: DescribeZoneDetailsRequest,
    DescribeDDoSPolicyRequest: DescribeDDoSPolicyRequest,
    SecEntry: SecEntry,
    ModifyZoneStatusRequest: ModifyZoneStatusRequest,
    DescribeDDosMajorAttackEventRequest: DescribeDDosMajorAttackEventRequest,
    Quic: Quic,
    CreateOriginGroupResponse: CreateOriginGroupResponse,
    DescribeSecurityPolicyResponse: DescribeSecurityPolicyResponse,
    QueryString: QueryString,
    DescribeSecurityPolicyRegionsRequest: DescribeSecurityPolicyRegionsRequest,
    SecEntryValue: SecEntryValue,
    ReclaimZoneRequest: ReclaimZoneRequest,
    RuleCondition: RuleCondition,
    DeleteZoneRequest: DeleteZoneRequest,
    BotManagedRule: BotManagedRule,
    ModifyDefaultCertificateResponse: ModifyDefaultCertificateResponse,
    DescribeDDosAttackEventRequest: DescribeDDosAttackEventRequest,
    ClientIp: ClientIp,
    DnsRecordFilter: DnsRecordFilter,
    DescribeHostsCertificateResponse: DescribeHostsCertificateResponse,
    DescribeZoneSettingResponse: DescribeZoneSettingResponse,
    AiRule: AiRule,
    ZoneFilter: ZoneFilter,
    MaxAge: MaxAge,
    DescribeRulesRequest: DescribeRulesRequest,
    DeleteRulesResponse: DeleteRulesResponse,
    QueryCondition: QueryCondition,
    DescribeDnsDataRequest: DescribeDnsDataRequest,
    CacheConfig: CacheConfig,
    DescribeDDosAttackEventDetailResponse: DescribeDDosAttackEventDetailResponse,
    ModifyApplicationProxyRuleRequest: ModifyApplicationProxyRuleRequest,
    ModifyDDoSPolicyRequest: ModifyDDoSPolicyRequest,
    ModifyZoneCnameSpeedUpResponse: ModifyZoneCnameSpeedUpResponse,
    DescribeWebProtectionLogRequest: DescribeWebProtectionLogRequest,
    CCLogData: CCLogData,
    DescribePrefetchTasksRequest: DescribePrefetchTasksRequest,
    DescribeRulesSettingRequest: DescribeRulesSettingRequest,
    Task: Task,
    DeleteDnsRecordsRequest: DeleteDnsRecordsRequest,
    DdosAllowBlock: DdosAllowBlock,
    DDoSGeoIp: DDoSGeoIp,
    RuleSettingDetail: RuleSettingDetail,
    TopDataRecord: TopDataRecord,
    DescribeZoneDDoSPolicyResponse: DescribeZoneDDoSPolicyResponse,
    CnameStatus: CnameStatus,
    DescribeDDosMajorAttackEventResponse: DescribeDDosMajorAttackEventResponse,
    DDoSFeaturesFilter: DDoSFeaturesFilter,
    ModifyOriginGroupResponse: ModifyOriginGroupResponse,
    DescribeWebProtectionAttackEventsResponse: DescribeWebProtectionAttackEventsResponse,
    CreatePurgeTaskRequest: CreatePurgeTaskRequest,
    Resource: Resource,
    DeleteDnsRecordsResponse: DeleteDnsRecordsResponse,
    DescribeBotLogRequest: DescribeBotLogRequest,
    DownloadL7LogsResponse: DownloadL7LogsResponse,
    DDosAttackEventDetailData: DDosAttackEventDetailData,
    CreateOriginGroupRequest: CreateOriginGroupRequest,
    DescribeTimingL4DataRequest: DescribeTimingL4DataRequest,
    DescribeHostsSettingRequest: DescribeHostsSettingRequest,
    DescribeZoneDDoSPolicyRequest: DescribeZoneDDoSPolicyRequest,
    DescribeDDosAttackDataResponse: DescribeDDosAttackDataResponse,
    DescribeWebManagedRulesLogRequest: DescribeWebManagedRulesLogRequest,
    SecRuleRelatedInfo: SecRuleRelatedInfo,
    ReclaimZoneResponse: ReclaimZoneResponse,
    CreateApplicationProxyRulesResponse: CreateApplicationProxyRulesResponse,
    DescribeWebManagedRulesTopDataRequest: DescribeWebManagedRulesTopDataRequest,
    DescribeAvailablePlansResponse: DescribeAvailablePlansResponse,
    DescribePurgeTasksRequest: DescribePurgeTasksRequest,
    DescribeIdentificationResponse: DescribeIdentificationResponse,
    DDosMajorAttackEvent: DDosMajorAttackEvent,
    ModifyZoneCnameSpeedUpRequest: ModifyZoneCnameSpeedUpRequest,
    DescribeApplicationProxyDetailResponse: DescribeApplicationProxyDetailResponse,
    DDoSUserAllowBlockIP: DDoSUserAllowBlockIP,
    RuleRewriteAction: RuleRewriteAction,
    RuleNormalAction: RuleNormalAction,
    DescribeBotLogResponse: DescribeBotLogResponse,
    DescribeLoadBalancingResponse: DescribeLoadBalancingResponse,
    DescribeWebProtectionDataResponse: DescribeWebProtectionDataResponse,
    ModifyApplicationProxyRequest: ModifyApplicationProxyRequest,
    ModifyDnssecResponse: ModifyDnssecResponse,
    ScanDnsRecordsRequest: ScanDnsRecordsRequest,
    VanityNameServers: VanityNameServers,
    ImportDnsRecordsResponse: ImportDnsRecordsResponse,
    DescribeLoadBalancingDetailRequest: DescribeLoadBalancingDetailRequest,
    DefaultServerCertInfo: DefaultServerCertInfo,
    DnssecInfo: DnssecInfo,
    DescribeOriginGroupRequest: DescribeOriginGroupRequest,
    DescribeOriginGroupDetailResponse: DescribeOriginGroupDetailResponse,
    UpstreamHttp2: UpstreamHttp2,
    OfflineCache: OfflineCache,
    DescribeOriginGroupDetailRequest: DescribeOriginGroupDetailRequest,
    DescribeDDosAttackEventDetailRequest: DescribeDDosAttackEventDetailRequest,
    HostCertSetting: HostCertSetting,
    DescribeTimingL4DataResponse: DescribeTimingL4DataResponse,
    Sv: Sv,
    BotConfig: BotConfig,
    TimingTypeValue: TimingTypeValue,
    DescribeBotManagedRulesRequest: DescribeBotManagedRulesRequest,

}

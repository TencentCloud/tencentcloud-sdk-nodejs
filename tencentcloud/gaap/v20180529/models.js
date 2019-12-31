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
 * 区域信息详情
 * @class
 */
class RegionDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 区域英文名或中文名
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * DescribeUDPListeners请求参数结构体
 * @class
 */
class DescribeUDPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，根据通道ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 过滤条件，根据监听器ID精确查询。
当设置了ProxyId时，会检查该监听器是否归属于该通道。
当设置了GroupId时，会检查该监听器是否归属于该通道组。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 过滤条件，根据监听器名称精确查询
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 过滤条件，根据监听器端口精确查询
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数量，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，根据通道组ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 过滤条件，支持按照端口或监听器名称进行模糊查询，该参数不能与ListenerName和Port同时使用
         * @type {string || null}
         */
        this.SearchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * DeleteProxyGroup请求参数结构体
 * @class
 */
class DeleteProxyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的通道组ID。
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * DescribeResourcesByTag请求参数结构体
 * @class
 */
class DescribeResourcesByTagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值。
         * @type {string || null}
         */
        this.TagValue = null;

        /**
         * 资源类型，其中：
Proxy表示通道；
ProxyGroup表示通道组；
RealServer表示源站。
不指定该字段则查询该标签下所有资源。
         * @type {string || null}
         */
        this.ResourceType = null;

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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

    }
}

/**
 * DescribeListenerStatistics请求参数结构体
 * @class
 */
class DescribeListenerStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

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
         * 统计指标名称列表，支持: 入带宽:InBandwidth, 出带宽:OutBandwidth, 并发:Concurrent, 入包量:InPackets, 出包量:OutPackets。
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 监控粒度，目前支持300，3600，86400，单位：秒。
查询时间范围不超过1天，支持最小粒度300秒；
查询间范围不超过7天，支持最小粒度3600秒；
查询间范围超过7天，支持最小粒度86400秒。
         * @type {number || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeProxyAndStatisticsListeners返回参数结构体
 * @class
 */
class DescribeProxyAndStatisticsListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可以统计的通道信息
         * @type {Array.<ProxySimpleInfo> || null}
         */
        this.ProxySet = null;

        /**
         * 通道数量
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

        if (params.ProxySet) {
            this.ProxySet = new Array();
            for (let z in params.ProxySet) {
                let obj = new ProxySimpleInfo();
                obj.deserialize(params.ProxySet[z]);
                this.ProxySet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRule请求参数结构体
 * @class
 */
class DeleteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 7层监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 是否可以强制删除已绑定源站的转发规则，0非强制，1强制
         * @type {number || null}
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * BindRuleRealServers请求参数结构体
 * @class
 */
class BindRuleRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 需要绑定的源站信息列表。
如果已经存在绑定的源站，则会覆盖更新成这个源站列表。
当不带该字段时，表示解绑该规则上的所有源站。
如果该规则的源站调度策略是加权轮询，需要填写源站权重 RealServerWeight, 不填或者其他调度类型默认源站权重为1。
         * @type {Array.<RealServerBindSetReq> || null}
         */
        this.RealServerBindSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.RealServerBindSet) {
            this.RealServerBindSet = new Array();
            for (let z in params.RealServerBindSet) {
                let obj = new RealServerBindSetReq();
                obj.deserialize(params.RealServerBindSet[z]);
                this.RealServerBindSet.push(obj);
            }
        }

    }
}

/**
 * DescribeHTTPSListeners返回参数结构体
 * @class
 */
class DescribeHTTPSListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * HTTPS监听器列表
         * @type {Array.<HTTPSListener> || null}
         */
        this.ListenerSet = null;

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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new HTTPSListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProxiesProject请求参数结构体
 * @class
 */
class ModifyProxiesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改到的项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * （旧参数，请切换到ProxyIds）一个或多个待操作的通道ID。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * （新参数）一个或多个待操作的通道ID。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * 域名的定制错误响应配置
 * @class
 */
class DomainErrorPageInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误定制响应的配置ID
         * @type {string || null}
         */
        this.ErrorPageId = null;

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 原始错误码
         * @type {Array.<number> || null}
         */
        this.ErrorNos = null;

        /**
         * 新的错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NewErrorNo = null;

        /**
         * 需要清理的响应头
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ClearHeaders = null;

        /**
         * 需要设置的响应头
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HttpHeaderParam> || null}
         */
        this.SetHeaders = null;

        /**
         * 设置的响应体(不包括 HTTP头)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Body = null;

        /**
         * 规则状态,0为成功
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.ErrorPageId = 'ErrorPageId' in params ? params.ErrorPageId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ErrorNos = 'ErrorNos' in params ? params.ErrorNos : null;
        this.NewErrorNo = 'NewErrorNo' in params ? params.NewErrorNo : null;
        this.ClearHeaders = 'ClearHeaders' in params ? params.ClearHeaders : null;

        if (params.SetHeaders) {
            this.SetHeaders = new Array();
            for (let z in params.SetHeaders) {
                let obj = new HttpHeaderParam();
                obj.deserialize(params.SetHeaders[z]);
                this.SetHeaders.push(obj);
            }
        }
        this.Body = 'Body' in params ? params.Body : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeCertificateDetail请求参数结构体
 * @class
 */
class DescribeCertificateDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * 标签对应资源信息
 * @class
 */
class TagResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型，其中：
Proxy表示通道，
ProxyGroup表示通道组，
RealServer表示源站
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.ResourceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * SetAuthentication返回参数结构体
 * @class
 */
class SetAuthenticationResponse extends  AbstractModel {
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
 * DescribeProxyGroupStatistics返回参数结构体
 * @class
 */
class DescribeProxyGroupStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组统计数据
         * @type {Array.<MetricStatisticsInfo> || null}
         */
        this.StatisticsData = null;

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

        if (params.StatisticsData) {
            this.StatisticsData = new Array();
            for (let z in params.StatisticsData) {
                let obj = new MetricStatisticsInfo();
                obj.deserialize(params.StatisticsData[z]);
                this.StatisticsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResourcesByTag返回参数结构体
 * @class
 */
class DescribeResourcesByTagResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 标签对应的资源列表
         * @type {Array.<TagResourceInfo> || null}
         */
        this.ResourceSet = null;

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

        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new TagResourceInfo();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGroupDomainConfig请求参数结构体
 * @class
 */
class ModifyGroupDomainConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 域名解析默认访问IP或域名。
         * @type {string || null}
         */
        this.DefaultDnsIp = null;

        /**
         * 就近接入区域配置。
         * @type {Array.<AccessRegionDomainConf> || null}
         */
        this.AccessRegionList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DefaultDnsIp = 'DefaultDnsIp' in params ? params.DefaultDnsIp : null;

        if (params.AccessRegionList) {
            this.AccessRegionList = new Array();
            for (let z in params.AccessRegionList) {
                let obj = new AccessRegionDomainConf();
                obj.deserialize(params.AccessRegionList[z]);
                this.AccessRegionList.push(obj);
            }
        }

    }
}

/**
 * 带宽梯度价格
 * @class
 */
class BandwidthPriceGradient extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带宽范围。
         * @type {Array.<number> || null}
         */
        this.BandwidthRange = null;

        /**
         * 在对应带宽范围内的单宽单价，单位：元/Mbps/天。
         * @type {number || null}
         */
        this.BandwidthUnitPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BandwidthRange = 'BandwidthRange' in params ? params.BandwidthRange : null;
        this.BandwidthUnitPrice = 'BandwidthUnitPrice' in params ? params.BandwidthUnitPrice : null;

    }
}

/**
 * DescribeHTTPListeners请求参数结构体
 * @class
 */
class DescribeHTTPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 过滤条件，按照监听器ID进行精确查询
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 过滤条件，按照监听器名称进行精确查询
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 过滤条件，按照监听器端口进行精确查询
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数量，默认为20个
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，支持按照端口或监听器名称进行模糊查询，该参数不能与ListenerName和Port同时使用
         * @type {string || null}
         */
        this.SearchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * ModifyRealServerName返回参数结构体
 * @class
 */
class ModifyRealServerNameResponse extends  AbstractModel {
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
 * DescribeGroupDomainConfig返回参数结构体
 * @class
 */
class DescribeGroupDomainConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名解析就近接入配置列表。
         * @type {Array.<DomainAccessRegionDict> || null}
         */
        this.AccessRegionList = null;

        /**
         * 默认访问Ip。
         * @type {string || null}
         */
        this.DefaultDnsIp = null;

        /**
         * 通道组ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 接入地域的配置的总数。
         * @type {number || null}
         */
        this.AccessRegionCount = null;

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

        if (params.AccessRegionList) {
            this.AccessRegionList = new Array();
            for (let z in params.AccessRegionList) {
                let obj = new DomainAccessRegionDict();
                obj.deserialize(params.AccessRegionList[z]);
                this.AccessRegionList.push(obj);
            }
        }
        this.DefaultDnsIp = 'DefaultDnsIp' in params ? params.DefaultDnsIp : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.AccessRegionCount = 'AccessRegionCount' in params ? params.AccessRegionCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCertificate返回参数结构体
 * @class
 */
class ModifyCertificateResponse extends  AbstractModel {
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
 * OpenSecurityPolicy请求参数结构体
 * @class
 */
class OpenSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需开启安全策略的通道ID
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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * DeleteDomainErrorPageInfo请求参数结构体
 * @class
 */
class DeleteDomainErrorPageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定制错误响应页的唯一ID，请参考CreateDomainErrorPageInfo的响应
         * @type {string || null}
         */
        this.ErrorPageId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorPageId = 'ErrorPageId' in params ? params.ErrorPageId : null;

    }
}

/**
 * DescribeListenerRealServers请求参数结构体
 * @class
 */
class DescribeListenerRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

    }
}

/**
 * DescribeProxyGroupStatistics请求参数结构体
 * @class
 */
class DescribeProxyGroupStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组ID
         * @type {string || null}
         */
        this.GroupId = null;

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
         * 统计指标名称列表，支持: 入带宽:InBandwidth, 出带宽:OutBandwidth, 并发:Concurrent, 入包量:InPackets, 出包量:OutPackets
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 监控粒度，目前支持60，300，3600，86400，单位：秒。
当时间范围不超过1天，支持最小粒度60秒；
当时间范围不超过7天，支持最小粒度3600秒；
当时间范围不超过30天，支持最小粒度86400秒。
         * @type {number || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * DescribeHTTPSListeners请求参数结构体
 * @class
 */
class DescribeHTTPSListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，通道ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 过滤条件，根据监听器ID进行精确查询。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 过滤条件，根据监听器名称进行精确查询。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 过滤条件，根据监听器端口进行精确查询。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 偏移量， 默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数量，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，支持按照端口或监听器名称进行模糊查询
         * @type {string || null}
         */
        this.SearchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * DescribeAccessRegionsByDestRegion返回参数结构体
 * @class
 */
class DescribeAccessRegionsByDestRegionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用加速区域数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可用加速区域信息列表
         * @type {Array.<AccessRegionDetial> || null}
         */
        this.AccessRegionSet = null;

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

        if (params.AccessRegionSet) {
            this.AccessRegionSet = new Array();
            for (let z in params.AccessRegionSet) {
                let obj = new AccessRegionDetial();
                obj.deserialize(params.AccessRegionSet[z]);
                this.AccessRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCountryAreaMapping请求参数结构体
 * @class
 */
class DescribeCountryAreaMappingRequest extends  AbstractModel {
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
 * CheckProxyCreate返回参数结构体
 * @class
 */
class CheckProxyCreateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询能否创建给定配置的通道，1可以创建，0不可创建。
         * @type {number || null}
         */
        this.CheckFlag = null;

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
        this.CheckFlag = 'CheckFlag' in params ? params.CheckFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCertificate请求参数结构体
 * @class
 */
class ModifyCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器实例ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 需要修改证书的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 新的服务器证书ID。其中：
当CertificateId=default时，表示使用监听器的证书。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 新的客户端证书ID。其中：
当ClientCertificateId=default时，表示使用监听器的证书。
仅当采用双向认证方式时，需要设置该参数或者PolyClientCertificateIds。
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * 新的多客户端证书ID列表。其中：
仅当采用双向认证方式时，需要设置该参数或ClientCertificateId参数。
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;

    }
}

/**
 * DestroyProxies请求参数结构体
 * @class
 */
class DestroyProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 强制删除标识。
1，强制删除该通道列表，无论是否已经绑定了源站；
0，如果已绑定了源站，则无法删除。
删除多通道时，如果该标识为0，只有所有的通道都没有绑定源站，才允许删除。
         * @type {number || null}
         */
        this.Force = null;

        /**
         * （旧参数，请切换到ProxyIds）通道实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * （新参数）通道实例ID列表。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Force = 'Force' in params ? params.Force : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

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
         * 按照域名分类的规则信息列表
         * @type {Array.<DomainRuleSet> || null}
         */
        this.DomainRuleSet = null;

        /**
         * 该监听器下的域名总数
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

        if (params.DomainRuleSet) {
            this.DomainRuleSet = new Array();
            for (let z in params.DomainRuleSet) {
                let obj = new DomainRuleSet();
                obj.deserialize(params.DomainRuleSet[z]);
                this.DomainRuleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxies返回参数结构体
 * @class
 */
class DescribeProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * （旧参数，请切换到ProxySet）通道实例信息列表。
         * @type {Array.<ProxyInfo> || null}
         */
        this.InstanceSet = null;

        /**
         * （新参数）通道实例信息列表。
         * @type {Array.<ProxyInfo> || null}
         */
        this.ProxySet = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new ProxyInfo();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }

        if (params.ProxySet) {
            this.ProxySet = new Array();
            for (let z in params.ProxySet) {
                let obj = new ProxyInfo();
                obj.deserialize(params.ProxySet[z]);
                this.ProxySet.push(obj);
            }
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
         * 创建转发规则成功返回规则ID
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
 * ModifyRealServerName请求参数结构体
 * @class
 */
class ModifyRealServerNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站名称
         * @type {string || null}
         */
        this.RealServerName = null;

        /**
         * 源站ID
         * @type {string || null}
         */
        this.RealServerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerName = 'RealServerName' in params ? params.RealServerName : null;
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;

    }
}

/**
 * DeleteProxyGroup返回参数结构体
 * @class
 */
class DeleteProxyGroupResponse extends  AbstractModel {
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
 * CreateDomainErrorPageInfo返回参数结构体
 * @class
 */
class CreateDomainErrorPageInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误定制响应的配置ID
         * @type {string || null}
         */
        this.ErrorPageId = null;

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
        this.ErrorPageId = 'ErrorPageId' in params ? params.ErrorPageId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindListenerRealServers请求参数结构体
 * @class
 */
class BindListenerRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 待绑定源站列表。如果该监听器的源站调度策略是加权轮询，需要填写源站权重 RealServerWeight, 不填或者其他调度类型默认源站权重为1。
         * @type {Array.<RealServerBindSetReq> || null}
         */
        this.RealServerBindSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.RealServerBindSet) {
            this.RealServerBindSet = new Array();
            for (let z in params.RealServerBindSet) {
                let obj = new RealServerBindSetReq();
                obj.deserialize(params.RealServerBindSet[z]);
                this.RealServerBindSet.push(obj);
            }
        }

    }
}

/**
 * ModifyProxyConfiguration请求参数结构体
 * @class
 */
class ModifyProxyConfigurationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （旧参数，请切换到ProxyId）通道的实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 需要调整到的目标带宽，单位：Mbps。
Bandwidth与Concurrent必须至少设置一个。取值范围根据DescribeAccessRegionsByDestRegion接口获取得到
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 需要调整到的目标并发值，单位：万。
Bandwidth与Concurrent必须至少设置一个。取值范围根据DescribeAccessRegionsByDestRegion接口获取得到
         * @type {number || null}
         */
        this.Concurrent = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * （新参数）通道的实例ID。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * DescribeRuleRealServers请求参数结构体
 * @class
 */
class DescribeRuleRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则ID
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DescribeGroupDomainConfig请求参数结构体
 * @class
 */
class DescribeGroupDomainConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组ID。
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreateProxyGroupDomain请求参数结构体
 * @class
 */
class CreateProxyGroupDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要开启域名的通道组ID。
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CreateTCPListeners请求参数结构体
 * @class
 */
class CreateTCPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器端口列表。
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * 监听器源站调度策略，支持轮询（rr），加权轮询（wrr），最小连接数（lc）。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 源站是否开启健康检查：1开启，0关闭，UDP监听器不支持健康检查
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * 监听器对应源站类型，支持IP或者DOMAIN类型。DOMAIN源站类型不支持wrr的源站调度策略。
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 源站健康检查时间间隔，单位：秒。时间间隔取值在[5，300]之间。
         * @type {number || null}
         */
        this.DelayLoop = null;

        /**
         * 源站健康检查响应超时时间，单位：秒。超时时间取值在[2，60]之间。超时时间应小于健康检查时间间隔DelayLoop。
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * 源站端口列表，该参数仅支持v1版本监听器和通道组监听器。
         * @type {Array.<number> || null}
         */
        this.RealServerPorts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.DelayLoop = 'DelayLoop' in params ? params.DelayLoop : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.RealServerPorts = 'RealServerPorts' in params ? params.RealServerPorts : null;

    }
}

/**
 * 证书详情，包括证书ID， 证书名字，证书类型，证书内容以及密钥内容。
 * @class
 */
class CertificateDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 证书类型。
         * @type {number || null}
         */
        this.CertificateType = null;

        /**
         * 证书名字。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * 证书内容。
         * @type {string || null}
         */
        this.CertificateContent = null;

        /**
         * 密钥内容。仅当证书类型为SSL证书时，返回该字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateKey = null;

        /**
         * 创建时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 证书生效起始时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 证书过期时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 证书签发者通用名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IssuerCN = null;

        /**
         * 证书主题通用名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubjectCN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.CertificateContent = 'CertificateContent' in params ? params.CertificateContent : null;
        this.CertificateKey = 'CertificateKey' in params ? params.CertificateKey : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IssuerCN = 'IssuerCN' in params ? params.IssuerCN : null;
        this.SubjectCN = 'SubjectCN' in params ? params.SubjectCN : null;

    }
}

/**
 * DescribeListenerStatistics返回参数结构体
 * @class
 */
class DescribeListenerStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组统计数据
         * @type {Array.<MetricStatisticsInfo> || null}
         */
        this.StatisticsData = null;

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

        if (params.StatisticsData) {
            this.StatisticsData = new Array();
            for (let z in params.StatisticsData) {
                let obj = new MetricStatisticsInfo();
                obj.deserialize(params.StatisticsData[z]);
                this.StatisticsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxyGroupDetails请求参数结构体
 * @class
 */
class DescribeProxyGroupDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组ID。
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * CloseProxies请求参数结构体
 * @class
 */
class CloseProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （旧参数，请切换到ProxyIds）通道的实例ID。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * （新参数）通道的实例ID。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * DescribeListenerRealServers返回参数结构体
 * @class
 */
class DescribeListenerRealServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可绑定源站的个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 源站信息列表
         * @type {Array.<RealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * 已绑定源站的个数
         * @type {number || null}
         */
        this.BindRealServerTotalCount = null;

        /**
         * 已绑定源站信息列表
         * @type {Array.<BindRealServer> || null}
         */
        this.BindRealServerSet = null;

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

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new RealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.BindRealServerTotalCount = 'BindRealServerTotalCount' in params ? params.BindRealServerTotalCount : null;

        if (params.BindRealServerSet) {
            this.BindRealServerSet = new Array();
            for (let z in params.BindRealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.BindRealServerSet[z]);
                this.BindRealServerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxyDetail请求参数结构体
 * @class
 */
class DescribeProxyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需查询的通道ID。
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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * ModifyTCPListenerAttribute请求参数结构体
 * @class
 */
class ModifyTCPListenerAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器源站调度策略，支持轮询（rr），加权轮询（wrr），最小连接数（lc）。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 源站健康检查时间间隔，单位：秒。时间间隔取值在[5，300]之间。
         * @type {number || null}
         */
        this.DelayLoop = null;

        /**
         * 源站健康检查响应超时时间，单位：秒。超时时间取值在[2，60]之间。超时时间应小于健康检查时间间隔DelayLoop。
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * 是否开启健康检查，1开启，0关闭。
         * @type {number || null}
         */
        this.HealthCheck = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.DelayLoop = 'DelayLoop' in params ? params.DelayLoop : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;

    }
}

/**
 * DeleteDomain请求参数结构体
 * @class
 */
class DeleteDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 需要删除的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 是否强制删除已绑定源站的转发规则，0非强制，1强制。
当采用非强制删除时，如果域名下已有规则绑定了源站，则无法删除。
         * @type {number || null}
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Force = 'Force' in params ? params.Force : null;

    }
}

/**
 * OpenSecurityPolicy返回参数结构体
 * @class
 */
class OpenSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID，可以通过DescribeAsyncTaskStatus接口查询流程运行状态
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
 * ModifyCertificateAttributes返回参数结构体
 * @class
 */
class ModifyCertificateAttributesResponse extends  AbstractModel {
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
 * DescribeSecurityPolicyDetail返回参数结构体
 * @class
 */
class DescribeSecurityPolicyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 安全策略状态：
BOUND，已开启安全策略
UNBIND，已关闭安全策略
BINDING，安全策略开启中
UNBINDING，安全策略关闭中。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 默认策略：ACCEPT或DROP。
         * @type {string || null}
         */
        this.DefaultAction = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 规则列表
         * @type {Array.<SecurityPolicyRuleOut> || null}
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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DefaultAction = 'DefaultAction' in params ? params.DefaultAction : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new SecurityPolicyRuleOut();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHTTPListener返回参数结构体
 * @class
 */
class CreateHTTPListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyUDPListenerAttribute返回参数结构体
 * @class
 */
class ModifyUDPListenerAttributeResponse extends  AbstractModel {
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
 * CreateProxyGroup请求参数结构体
 * @class
 */
class CreateProxyGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组所属项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 通道组别名
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 源站地域，参考接口DescribeDestRegions 返回参数RegionDetail中的RegionId
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * 标签列表
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * 7层监听器转发规则信息
 * @class
 */
class RuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则信息
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 监听器信息
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 规则域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 规则路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 源站类型
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * 转发源站策略
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 是否开启健康检查标志，1开启，0关闭
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * 规则状态，0运行中，1创建中，2销毁中，3绑定解绑源站中，4配置更新中
         * @type {number || null}
         */
        this.RuleStatus = null;

        /**
         * 健康检查相关参数
         * @type {RuleCheckParams || null}
         */
        this.CheckParams = null;

        /**
         * 已绑定的源站相关信息
         * @type {Array.<BindRealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * 源站的服务状态，0：异常，1：正常。
未开启健康检查时，该状态始终未正常。
只要有一个源站健康状态为异常时，该状态为异常，具体源站的状态请查看RealServerSet。
         * @type {number || null}
         */
        this.BindStatus = null;

        /**
         * 通道转发到源站的请求所携带的host，其中default表示直接转发接收到的host。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ForwardHost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;
        this.RuleStatus = 'RuleStatus' in params ? params.RuleStatus : null;

        if (params.CheckParams) {
            let obj = new RuleCheckParams();
            obj.deserialize(params.CheckParams)
            this.CheckParams = obj;
        }

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.ForwardHost = 'ForwardHost' in params ? params.ForwardHost : null;

    }
}

/**
 * 源站绑定信息查询，BindStatus， 0: 未被绑定 1：被规则或者监听器绑定
 * @class
 */
class RealServerStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站ID。
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * 0: 未被绑定 1：被规则或者监听器绑定。
         * @type {number || null}
         */
        this.BindStatus = null;

        /**
         * 绑定此源站的通道ID，没有绑定时为空字符串。
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
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * DescribeTCPListeners返回参数结构体
 * @class
 */
class DescribeTCPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足条件的监听器总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * TCP监听器列表
         * @type {Array.<TCPListener> || null}
         */
        this.ListenerSet = null;

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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new TCPListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 7层监听器Id。
         * @type {string || null}
         */
        this.ListenerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

    }
}

/**
 * DescribeCountryAreaMapping返回参数结构体
 * @class
 */
class DescribeCountryAreaMappingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家地区编码映射表。
         * @type {Array.<CountryAreaMap> || null}
         */
        this.CountryAreaMappingList = null;

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

        if (params.CountryAreaMappingList) {
            this.CountryAreaMappingList = new Array();
            for (let z in params.CountryAreaMappingList) {
                let obj = new CountryAreaMap();
                obj.deserialize(params.CountryAreaMappingList[z]);
                this.CountryAreaMappingList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealServers返回参数结构体
 * @class
 */
class DescribeRealServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站信息列表
         * @type {Array.<BindRealServerInfo> || null}
         */
        this.RealServerSet = null;

        /**
         * 查询得到的源站数量
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

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new BindRealServerInfo();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyHTTPListenerAttribute返回参数结构体
 * @class
 */
class ModifyHTTPListenerAttributeResponse extends  AbstractModel {
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
 * DescribeRealServerStatistics请求参数结构体
 * @class
 */
class DescribeRealServerStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 统计时长，单位：小时。仅支持最近1,3,6,12,24小时的统计查询
         * @type {number || null}
         */
        this.WithinTime = null;

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
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.WithinTime = 'WithinTime' in params ? params.WithinTime : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * 添加源站的源站信息返回值
 * @class
 */
class BindRealServerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站的IP或域名
         * @type {string || null}
         */
        this.RealServerIP = null;

        /**
         * 源站ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * 源站名称
         * @type {string || null}
         */
        this.RealServerName = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerName = 'RealServerName' in params ? params.RealServerName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * DescribeProxyAndStatisticsListeners请求参数结构体
 * @class
 */
class DescribeProxyAndStatisticsListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeAccessRegions返回参数结构体
 * @class
 */
class DescribeAccessRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速区域总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 加速区域详情列表
         * @type {Array.<RegionDetail> || null}
         */
        this.AccessRegionSet = null;

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

        if (params.AccessRegionSet) {
            this.AccessRegionSet = new Array();
            for (let z in params.AccessRegionSet) {
                let obj = new RegionDetail();
                obj.deserialize(params.AccessRegionSet[z]);
                this.AccessRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteListeners请求参数结构体
 * @class
 */
class DeleteListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的监听器ID列表
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * 已绑定源站的监听器是否允许强制删除，1：允许， 0：不允许
         * @type {number || null}
         */
        this.Force = null;

        /**
         * 通道组ID，该参数和GroupId必须设置一个，但不能同时设置。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 通道ID，该参数和GroupId必须设置一个，但不能同时设置。
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
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Force = 'Force' in params ? params.Force : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * DescribeSecurityRules请求参数结构体
 * @class
 */
class DescribeSecurityRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全规则ID列表。总数不能超过20个。
         * @type {Array.<string> || null}
         */
        this.SecurityRuleIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityRuleIds = 'SecurityRuleIds' in params ? params.SecurityRuleIds : null;

    }
}

/**
 * DescribeDestRegions返回参数结构体
 * @class
 */
class DescribeDestRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站区域总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 源站区域详情列表
         * @type {Array.<RegionDetail> || null}
         */
        this.DestRegionSet = null;

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

        if (params.DestRegionSet) {
            this.DestRegionSet = new Array();
            for (let z in params.DestRegionSet) {
                let obj = new RegionDetail();
                obj.deserialize(params.DestRegionSet[z]);
                this.DestRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainErrorPageInfoByIds返回参数结构体
 * @class
 */
class DescribeDomainErrorPageInfoByIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定制错误响应配置集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DomainErrorPageInfo> || null}
         */
        this.ErrorPageSet = null;

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

        if (params.ErrorPageSet) {
            this.ErrorPageSet = new Array();
            for (let z in params.ErrorPageSet) {
                let obj = new DomainErrorPageInfo();
                obj.deserialize(params.ErrorPageSet[z]);
                this.ErrorPageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxies请求参数结构体
 * @class
 */
class DescribeProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （旧参数，请切换到ProxyIds）按照一个或者多个实例ID查询。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件。   
每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定InstanceIds和Filters。 
ProjectId - String - 是否必填：否 -（过滤条件）按照项目ID过滤。    
AccessRegion - String - 是否必填：否 - （过滤条件）按照接入地域过滤。    
RealServerRegion - String - 是否必填：否 - （过滤条件）按照源站地域过滤。
GroupId - String - 是否必填：否 - （过滤条件）按照通道组ID过滤。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * （新参数，替代InstanceIds）按照一个或者多个实例ID查询。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

        /**
         * 标签列表，当存在该字段时，拉取对应标签下的资源列表。
最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，通道会被拉取出来。
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * 当该字段为1时，仅拉取非通道组的通道，
当该字段为0时，仅拉取通道组的通道，
不存在该字段时，拉取所有通道，包括独立通道和通道组通道。
         * @type {number || null}
         */
        this.Independent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
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
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.Independent = 'Independent' in params ? params.Independent : null;

    }
}

/**
 * BindListenerRealServers返回参数结构体
 * @class
 */
class BindListenerRealServersResponse extends  AbstractModel {
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
 * ModifyProxyGroupAttribute返回参数结构体
 * @class
 */
class ModifyProxyGroupAttributeResponse extends  AbstractModel {
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
 * 内部接口使用，返回可以查询统计数据的监听器信息
 * @class
 */
class ListenerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器监听端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 监听器协议类型
         * @type {string || null}
         */
        this.Protocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeUDPListeners返回参数结构体
 * @class
 */
class DescribeUDPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * UDP监听器列表
         * @type {Array.<UDPListener> || null}
         */
        this.ListenerSet = null;

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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new UDPListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUDPListeners请求参数结构体
 * @class
 */
class CreateUDPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器端口列表
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * 监听器源站调度策略，支持轮询（rr），加权轮询（wrr），最小连接数（lc）
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 监听器对应源站类型，支持IP或者DOMAIN类型
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 源站端口列表，该参数仅支持v1版本监听器和通道组监听器
         * @type {Array.<number> || null}
         */
        this.RealServerPorts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RealServerPorts = 'RealServerPorts' in params ? params.RealServerPorts : null;

    }
}

/**
 * ModifyRuleAttribute请求参数结构体
 * @class
 */
class ModifyRuleAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 调度策略，其中：
rr，轮询；
wrr，加权轮询；
lc，最小连接数。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 源站健康检查开关，其中：
1，开启；
0，关闭。
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * 健康检查配置参数
         * @type {RuleCheckParams || null}
         */
        this.CheckParams = null;

        /**
         * 转发规则路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 加速通道转发到源站的协议类型，支持：default, HTTP和HTTPS。
当ForwardProtocol=default时，表示使用对应监听器的ForwardProtocol。
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * 加速通道转发到源站的请求中携带的host。
当ForwardHost=default时，使用规则的域名，其他情况为该字段所设置的值。
         * @type {string || null}
         */
        this.ForwardHost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;

        if (params.CheckParams) {
            let obj = new RuleCheckParams();
            obj.deserialize(params.CheckParams)
            this.CheckParams = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.ForwardHost = 'ForwardHost' in params ? params.ForwardHost : null;

    }
}

/**
 * CreateSecurityPolicy返回参数结构体
 * @class
 */
class CreateSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全策略ID
         * @type {string || null}
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
 * TCP类型监听器信息
 * @class
 */
class TCPListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 监听器转发源站端口，仅对版本为1.0的通道有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealServerPort = null;

        /**
         * 监听器绑定源站类型
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * 监听器协议， TCP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器状态，其中：
0， 运行中；
1， 创建中；
2，销毁中；
3，源站调整中；
4，配置变更中。
         * @type {number || null}
         */
        this.ListenerStatus = null;

        /**
         * 监听器源站访问策略，其中：
rr，轮询；
wrr，加权轮询；
lc，最小连接数。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 源站健康检查响应超时时间，单位：秒
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * 源站健康检查时间间隔，单位：秒
         * @type {number || null}
         */
        this.DelayLoop = null;

        /**
         * 监听器是否开启健康检查，其中：
0，关闭；
1，开启
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * 监听器绑定的源站状态， 其中：
0，异常；
1，正常。
         * @type {number || null}
         */
        this.BindStatus = null;

        /**
         * 监听器绑定的源站信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BindRealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * 监听器创建时间，Unix时间戳
         * @type {number || null}
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RealServerPort = 'RealServerPort' in params ? params.RealServerPort : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.DelayLoop = 'DelayLoop' in params ? params.DelayLoop : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * CreateSecurityRules返回参数结构体
 * @class
 */
class CreateSecurityRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID列表
         * @type {Array.<string> || null}
         */
        this.RuleIdList = null;

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
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccessRegions请求参数结构体
 * @class
 */
class DescribeAccessRegionsRequest extends  AbstractModel {
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
 * CreateCertificate请求参数结构体
 * @class
 */
class CreateCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书类型。其中：
0，表示基础认证配置；
1，表示客户端CA证书；
2，服务器SSL证书；
3，表示源站CA证书；
4，表示通道SSL证书。
         * @type {number || null}
         */
        this.CertificateType = null;

        /**
         * 证书内容。采用url编码。其中：
当证书类型为基础认证配置时，该参数填写用户名/密码对。格式：“用户名：密码”，例如：root:FSGdT。其中密码使用htpasswd或者openssl，例如：openssl passwd -crypt 123456。
当证书类型为CA/SSL证书时，该参数填写证书内容，格式为pem。
         * @type {string || null}
         */
        this.CertificateContent = null;

        /**
         * 证书名称
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * 密钥内容。采用url编码。仅当证书类型为SSL证书时，需要填写该参数。格式为pem。
         * @type {string || null}
         */
        this.CertificateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.CertificateContent = 'CertificateContent' in params ? params.CertificateContent : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.CertificateKey = 'CertificateKey' in params ? params.CertificateKey : null;

    }
}

/**
 * DescribeCertificates返回参数结构体
 * @class
 */
class DescribeCertificatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务器证书列表，包括证书ID 和证书名称。
         * @type {Array.<Certificate> || null}
         */
        this.CertificateSet = null;

        /**
         * 满足查询条件的服务器证书总数量。
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

        if (params.CertificateSet) {
            this.CertificateSet = new Array();
            for (let z in params.CertificateSet) {
                let obj = new Certificate();
                obj.deserialize(params.CertificateSet[z]);
                this.CertificateSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProxyGroupList返回参数结构体
 * @class
 */
class DescribeProxyGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 通道组列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProxyGroupInfo> || null}
         */
        this.ProxyGroupList = null;

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

        if (params.ProxyGroupList) {
            this.ProxyGroupList = new Array();
            for (let z in params.ProxyGroupList) {
                let obj = new ProxyGroupInfo();
                obj.deserialize(params.ProxyGroupList[z]);
                this.ProxyGroupList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDomainErrorPageInfo请求参数结构体
 * @class
 */
class DescribeDomainErrorPageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 域名
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * HTTPS类型监听器信息
 * @class
 */
class HTTPSListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 监听器协议， 值为：HTTP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器状态，其中：
0， 运行中；
1， 创建中；
2，销毁中；
3，源站调整中；
4，配置变更中。
         * @type {number || null}
         */
        this.ListenerStatus = null;

        /**
         * 监听器服务器SSL证书ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 监听器后端转发源站协议
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * 监听器创建时间，Unix时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 服务器SSL证书的别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * 监听器客户端CA证书ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * 监听器认证方式。其中，
0，单向认证；
1，双向认证。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 客户端CA证书别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientCertificateAlias = null;

        /**
         * 多客户端CA证书别名信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CertificateAliasInfo> || null}
         */
        this.PolyClientCertificateAliasInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ClientCertificateAlias = 'ClientCertificateAlias' in params ? params.ClientCertificateAlias : null;

        if (params.PolyClientCertificateAliasInfo) {
            this.PolyClientCertificateAliasInfo = new Array();
            for (let z in params.PolyClientCertificateAliasInfo) {
                let obj = new CertificateAliasInfo();
                obj.deserialize(params.PolyClientCertificateAliasInfo[z]);
                this.PolyClientCertificateAliasInfo.push(obj);
            }
        }

    }
}

/**
 * 域名解析就近访问配置详情
 * @class
 */
class DomainAccessRegionDict extends  AbstractModel {
    constructor(){
        super();

        /**
         * 就近接入区域
         * @type {Array.<NationCountryInnerInfo> || null}
         */
        this.NationCountryInnerList = null;

        /**
         * 加速区域通道列表
         * @type {Array.<ProxyIdDict> || null}
         */
        this.ProxyList = null;

        /**
         * 加速区域ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 加速区域内部编码
         * @type {string || null}
         */
        this.GeographicalZoneInnerCode = null;

        /**
         * 加速区域所属大洲内部编码
         * @type {string || null}
         */
        this.ContinentInnerCode = null;

        /**
         * 加速区域别名
         * @type {string || null}
         */
        this.RegionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NationCountryInnerList) {
            this.NationCountryInnerList = new Array();
            for (let z in params.NationCountryInnerList) {
                let obj = new NationCountryInnerInfo();
                obj.deserialize(params.NationCountryInnerList[z]);
                this.NationCountryInnerList.push(obj);
            }
        }

        if (params.ProxyList) {
            this.ProxyList = new Array();
            for (let z in params.ProxyList) {
                let obj = new ProxyIdDict();
                obj.deserialize(params.ProxyList[z]);
                this.ProxyList.push(obj);
            }
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.GeographicalZoneInnerCode = 'GeographicalZoneInnerCode' in params ? params.GeographicalZoneInnerCode : null;
        this.ContinentInnerCode = 'ContinentInnerCode' in params ? params.ContinentInnerCode : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

    }
}

/**
 * CloseSecurityPolicy请求参数结构体
 * @class
 */
class CloseSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道ID
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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * ModifyCertificateAttributes请求参数结构体
 * @class
 */
class ModifyCertificateAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 证书名字。长度不超过50个字符。
         * @type {string || null}
         */
        this.CertificateAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;

    }
}

/**
 * 标签键值对
 * @class
 */
class TagPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值
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
 * CreateSecurityRules请求参数结构体
 * @class
 */
class CreateSecurityRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 访问规则列表
         * @type {Array.<SecurityPolicyRuleIn> || null}
         */
        this.RuleList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new SecurityPolicyRuleIn();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }

    }
}

/**
 * DescribeCertificates请求参数结构体
 * @class
 */
class DescribeCertificatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书类型。其中：
0，表示基础认证配置；
1，表示客户端CA证书；
2，表示服务器SSL证书；
3，表示源站CA证书；
4，表示通道SSL证书。
-1，所有类型。
默认为-1。
         * @type {number || null}
         */
        this.CertificateType = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数量，默认为20。
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
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeProxiesStatus请求参数结构体
 * @class
 */
class DescribeProxiesStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （旧参数，请切换到ProxyIds）通道ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * （新参数）通道ID列表。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * 通道状态信息
 * @class
 */
class ProxyStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 通道状态。
其中：
RUNNING，运行中；
CREATING，创建中；
DESTROYING，销毁中；
OPENING，开启中；
CLOSING，关闭中；
CLOSED，已关闭；
ADJUSTING，配置变更中；
ISOLATING，隔离中；
ISOLATED，已隔离；
UNKNOWN，未知状态。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeGroupAndStatisticsProxy返回参数结构体
 * @class
 */
class DescribeGroupAndStatisticsProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可以统计的通道组信息
         * @type {Array.<GroupStatisticsInfo> || null}
         */
        this.GroupSet = null;

        /**
         * 通道组数量
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

        if (params.GroupSet) {
            this.GroupSet = new Array();
            for (let z in params.GroupSet) {
                let obj = new GroupStatisticsInfo();
                obj.deserialize(params.GroupSet[z]);
                this.GroupSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDomain返回参数结构体
 * @class
 */
class CreateDomainResponse extends  AbstractModel {
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
 * ModifyProxiesProject返回参数结构体
 * @class
 */
class ModifyProxiesProjectResponse extends  AbstractModel {
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
 * ModifyDomain请求参数结构体
 * @class
 */
class ModifyDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 7层监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 修改前的域名信息
         * @type {string || null}
         */
        this.OldDomain = null;

        /**
         * 修改后的域名信息
         * @type {string || null}
         */
        this.NewDomain = null;

        /**
         * 服务器SSL证书ID，仅适用于version3.0的通道。其中：
不带该字段时，表示使用原证书；
携带该字段时并且CertificateId=default，表示使用监听器证书；
其他情况，使用该CertificateId指定的证书。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 客户端CA证书ID，仅适用于version3.0的通道。其中：
不带该字段和PolyClientCertificateIds时，表示使用原证书；
携带该字段时并且ClientCertificateId=default，表示使用监听器证书；
其他情况，使用该ClientCertificateId或PolyClientCertificateIds指定的证书。
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * 客户端CA证书ID，仅适用于version3.0的通道。其中：
不带该字段和ClientCertificateId时，表示使用原证书；
携带该字段时并且ClientCertificateId=default，表示使用监听器证书；
其他情况，使用该ClientCertificateId或PolyClientCertificateIds指定的证书。
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.OldDomain = 'OldDomain' in params ? params.OldDomain : null;
        this.NewDomain = 'NewDomain' in params ? params.NewDomain : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;

    }
}

/**
 * ModifySecurityRule请求参数结构体
 * @class
 */
class ModifySecurityRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则名：不得超过30个字符，超过部分会被截断。
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 安全策略ID
         * @type {string || null}
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * 就近接入的国家地区详情
 * @class
 */
class NationCountryInnerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家名
         * @type {string || null}
         */
        this.NationCountryName = null;

        /**
         * 国家内部编码
         * @type {string || null}
         */
        this.NationCountryInnerCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NationCountryName = 'NationCountryName' in params ? params.NationCountryName : null;
        this.NationCountryInnerCode = 'NationCountryInnerCode' in params ? params.NationCountryInnerCode : null;

    }
}

/**
 * DescribeAccessRegionsByDestRegion请求参数结构体
 * @class
 */
class DescribeAccessRegionsByDestRegionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站区域：接口DescribeDestRegions返回DestRegionSet中的RegionId字段值
         * @type {string || null}
         */
        this.DestRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestRegion = 'DestRegion' in params ? params.DestRegion : null;

    }
}

/**
 * 查询监听器或者规则相关的源站信息，不包括tag信息
 * @class
 */
class RealServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站的IP或域名
         * @type {string || null}
         */
        this.RealServerIP = null;

        /**
         * 源站ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * 源站名称
         * @type {string || null}
         */
        this.RealServerName = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerName = 'RealServerName' in params ? params.RealServerName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeRealServers请求参数结构体
 * @class
 */
class DescribeRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询源站的所属项目ID，-1表示所有项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 需要查询的源站IP或域名，支持模糊匹配
         * @type {string || null}
         */
        this.SearchValue = null;

        /**
         * 偏移量，默认值是0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20个，最大值为50个
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 标签列表，当存在该字段时，拉取对应标签下的资源列表。
最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，源站会被拉取出来。
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * 过滤条件。filter的name取值(RealServerName,RealServerIP)
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

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
 * 统计数据信息
 * @class
 */
class StatisticsDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对应的时间点
         * @type {number || null}
         */
        this.Time = null;

        /**
         * 统计数据值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Time = 'Time' in params ? params.Time : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * 通道组详情列表
 * @class
 */
class ProxyGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组id
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 通道组域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 通道组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 目标地域
         * @type {RegionDetail || null}
         */
        this.RealServerRegionInfo = null;

        /**
         * 通道组状态。
其中，
0，运行中；
1，创建中；
4，销毁中；
11，通道迁移中。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 标签列表。
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.RealServerRegionInfo) {
            let obj = new RegionDetail();
            obj.deserialize(params.RealServerRegionInfo)
            this.RealServerRegionInfo = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * CreateProxyGroupDomain返回参数结构体
 * @class
 */
class CreateProxyGroupDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组ID。
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 服务器证书
 * @class
 */
class Certificate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 证书名称（旧参数，请使用CertificateAlias）。
         * @type {string || null}
         */
        this.CertificateName = null;

        /**
         * 证书类型。
         * @type {number || null}
         */
        this.CertificateType = null;

        /**
         * 证书名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * 证书创建时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 证书生效起始时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 证书过期时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 证书签发者通用名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IssuerCN = null;

        /**
         * 证书主题通用名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubjectCN = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateName = 'CertificateName' in params ? params.CertificateName : null;
        this.CertificateType = 'CertificateType' in params ? params.CertificateType : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IssuerCN = 'IssuerCN' in params ? params.IssuerCN : null;
        this.SubjectCN = 'SubjectCN' in params ? params.SubjectCN : null;

    }
}

/**
 * DescribeDomainErrorPageInfo返回参数结构体
 * @class
 */
class DescribeDomainErrorPageInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定制错误响应配置集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DomainErrorPageInfo> || null}
         */
        this.ErrorPageSet = null;

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

        if (params.ErrorPageSet) {
            this.ErrorPageSet = new Array();
            for (let z in params.ErrorPageSet) {
                let obj = new DomainErrorPageInfo();
                obj.deserialize(params.ErrorPageSet[z]);
                this.ErrorPageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyProxies返回参数结构体
 * @class
 */
class DestroyProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处于不可销毁状态下的通道实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InvalidStatusInstanceSet = null;

        /**
         * 销毁操作失败的通道实例ID列表。
         * @type {Array.<string> || null}
         */
        this.OperationFailedInstanceSet = null;

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
        this.InvalidStatusInstanceSet = 'InvalidStatusInstanceSet' in params ? params.InvalidStatusInstanceSet : null;
        this.OperationFailedInstanceSet = 'OperationFailedInstanceSet' in params ? params.OperationFailedInstanceSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRuleRealServers返回参数结构体
 * @class
 */
class DescribeRuleRealServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可绑定的源站个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可绑定的源站信息列表
         * @type {Array.<RealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * 已绑定的源站个数
         * @type {number || null}
         */
        this.BindRealServerTotalCount = null;

        /**
         * 已绑定的源站信息列表
         * @type {Array.<BindRealServer> || null}
         */
        this.BindRealServerSet = null;

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

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new RealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.BindRealServerTotalCount = 'BindRealServerTotalCount' in params ? params.BindRealServerTotalCount : null;

        if (params.BindRealServerSet) {
            this.BindRealServerSet = new Array();
            for (let z in params.BindRealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.BindRealServerSet[z]);
                this.BindRealServerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealServersStatus请求参数结构体
 * @class
 */
class DescribeRealServersStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站ID列表
         * @type {Array.<string> || null}
         */
        this.RealServerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerIds = 'RealServerIds' in params ? params.RealServerIds : null;

    }
}

/**
 * ModifyHTTPListenerAttribute请求参数结构体
 * @class
 */
class ModifyHTTPListenerAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改的监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 新的监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 通道ID
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * CreateProxy请求参数结构体
 * @class
 */
class CreateProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道的项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 通道名称。
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 接入地域。
         * @type {string || null}
         */
        this.AccessRegion = null;

        /**
         * 通道带宽上限，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 通道并发量上限，表示同时在线的连接数，单位：万。
         * @type {number || null}
         */
        this.Concurrent = null;

        /**
         * 源站地域。当GroupId存在时，源站地域为通道组的源站地域,此时可不填该字段。当GroupId不存在时，需要填写该字段
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 通道所在的通道组ID，当在通道组中创建通道时必带，否则忽略该字段。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 通道需要添加的标签列表。
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * 被复制的通道ID。只有处于运行中状态的通道可以被复制。
当设置该参数时，表示复制该通道。
         * @type {string || null}
         */
        this.ClonedProxyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.AccessRegion = 'AccessRegion' in params ? params.AccessRegion : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.ClonedProxyId = 'ClonedProxyId' in params ? params.ClonedProxyId : null;

    }
}

/**
 * DeleteCertificate请求参数结构体
 * @class
 */
class DeleteCertificateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要删除的证书ID。
         * @type {string || null}
         */
        this.CertificateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;

    }
}

/**
 * ModifySecurityRule返回参数结构体
 * @class
 */
class ModifySecurityRuleResponse extends  AbstractModel {
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
 * DescribeProxiesStatus返回参数结构体
 * @class
 */
class DescribeProxiesStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道状态列表。
         * @type {Array.<ProxyStatus> || null}
         */
        this.InstanceStatusSet = null;

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

        if (params.InstanceStatusSet) {
            this.InstanceStatusSet = new Array();
            for (let z in params.InstanceStatusSet) {
                let obj = new ProxyStatus();
                obj.deserialize(params.InstanceStatusSet[z]);
                this.InstanceStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemoveRealServers请求参数结构体
 * @class
 */
class RemoveRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站Id列表
         * @type {Array.<string> || null}
         */
        this.RealServerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerIds = 'RealServerIds' in params ? params.RealServerIds : null;

    }
}

/**
 * CreateDomain请求参数结构体
 * @class
 */
class CreateDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 需要创建的域名，一个监听器下最大支持100个域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 服务器证书，用于客户端与GAAP的HTTPS的交互。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 客户端CA证书，用于客户端与GAAP的HTTPS的交互。
仅当采用双向认证的方式时，需要设置该字段或PolyClientCertificateIds字段。
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * 客户端CA证书，用于客户端与GAAP的HTTPS的交互。
仅当采用双向认证的方式时，需要设置该字段或ClientCertificateId字段。
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;

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
         * 7层监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发规则的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发规则的路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 转发规则对应源站的类型，支持IP和DOMAIN类型。
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * 规则转发源站调度策略，支持轮询（rr），加权轮询（wrr），最小连接数（lc）。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 规则是否开启健康检查，1开启，0关闭。
         * @type {number || null}
         */
        this.HealthCheck = null;

        /**
         * 源站健康检查相关参数
         * @type {RuleCheckParams || null}
         */
        this.CheckParams = null;

        /**
         * 加速通道转发到源站的协议类型：支持HTTP或HTTPS。
不传递该字段时表示使用对应监听器的ForwardProtocol。
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * 加速通道转发到远照的host，不设置该参数时，使用默认的host设置，即客户端发起的http请求的host。
         * @type {string || null}
         */
        this.ForwardHost = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.HealthCheck = 'HealthCheck' in params ? params.HealthCheck : null;

        if (params.CheckParams) {
            let obj = new RuleCheckParams();
            obj.deserialize(params.CheckParams)
            this.CheckParams = obj;
        }
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.ForwardHost = 'ForwardHost' in params ? params.ForwardHost : null;

    }
}

/**
 * DeleteSecurityPolicy请求参数结构体
 * @class
 */
class DeleteSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
         * @type {string || null}
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * HTTP类型监听器信息
 * @class
 */
class HTTPListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 监听器创建时间，Unix时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 监听器协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器状态，其中：
0， 运行中；
1， 创建中；
2，销毁中；
3，源站调整中；
4，配置变更中。
         * @type {number || null}
         */
        this.ListenerStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;

    }
}

/**
 * 通道组详情信息
 * @class
 */
class ProxyGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 通道组中通道数量
         * @type {number || null}
         */
        this.ProxyNum = null;

        /**
         * 通道组状态：
0 正常运行
1 创建中
4 销毁中
11 迁移中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 归属Uin
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 创建Uin
         * @type {string || null}
         */
        this.CreateUin = null;

        /**
         * 通道名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 通道组域名解析默认IP
         * @type {string || null}
         */
        this.DnsDefaultIp = null;

        /**
         * 通道组域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标地域
         * @type {RegionDetail || null}
         */
        this.RealServerRegionInfo = null;

        /**
         * 是否老通道组，2018-08-03之前创建的通道组为老通道组
         * @type {boolean || null}
         */
        this.IsOldGroup = null;

        /**
         * 通道组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProxyNum = 'ProxyNum' in params ? params.ProxyNum : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.CreateUin = 'CreateUin' in params ? params.CreateUin : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.DnsDefaultIp = 'DnsDefaultIp' in params ? params.DnsDefaultIp : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.RealServerRegionInfo) {
            let obj = new RegionDetail();
            obj.deserialize(params.RealServerRegionInfo)
            this.RealServerRegionInfo = obj;
        }
        this.IsOldGroup = 'IsOldGroup' in params ? params.IsOldGroup : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * CreateHTTPListener请求参数结构体
 * @class
 */
class CreateHTTPListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器端口，基于同种传输层协议（TCP 或 UDP）的监听器，端口不可重复
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 通道ID
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
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

    }
}

/**
 * CloseSecurityPolicy返回参数结构体
 * @class
 */
class CloseSecurityPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程ID，可以通过DescribeAsyncTaskStatus 查询流程执行进展和状态
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
 * DescribeRegionAndPrice返回参数结构体
 * @class
 */
class DescribeRegionAndPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站区域总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 源站区域详情列表
         * @type {Array.<RegionDetail> || null}
         */
        this.DestRegionSet = null;

        /**
         * 通道带宽费用梯度价格
         * @type {Array.<BandwidthPriceGradient> || null}
         */
        this.BandwidthUnitPrice = null;

        /**
         * 带宽价格货币类型：
CNY 人民币
USD 美元
         * @type {string || null}
         */
        this.Currency = null;

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

        if (params.DestRegionSet) {
            this.DestRegionSet = new Array();
            for (let z in params.DestRegionSet) {
                let obj = new RegionDetail();
                obj.deserialize(params.DestRegionSet[z]);
                this.DestRegionSet.push(obj);
            }
        }

        if (params.BandwidthUnitPrice) {
            this.BandwidthUnitPrice = new Array();
            for (let z in params.BandwidthUnitPrice) {
                let obj = new BandwidthPriceGradient();
                obj.deserialize(params.BandwidthUnitPrice[z]);
                this.BandwidthUnitPrice.push(obj);
            }
        }
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddRealServers返回参数结构体
 * @class
 */
class AddRealServersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站信息列表
         * @type {Array.<NewRealServer> || null}
         */
        this.RealServerSet = null;

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

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new NewRealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseProxies返回参数结构体
 * @class
 */
class CloseProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 非运行状态下的通道实例ID列表，不可开启。
         * @type {Array.<string> || null}
         */
        this.InvalidStatusInstanceSet = null;

        /**
         * 开启操作失败的通道实例ID列表。
         * @type {Array.<string> || null}
         */
        this.OperationFailedInstanceSet = null;

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
        this.InvalidStatusInstanceSet = 'InvalidStatusInstanceSet' in params ? params.InvalidStatusInstanceSet : null;
        this.OperationFailedInstanceSet = 'OperationFailedInstanceSet' in params ? params.OperationFailedInstanceSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCertificate返回参数结构体
 * @class
 */
class DeleteCertificateResponse extends  AbstractModel {
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
 * 安全策略规则（入参）
 * @class
 */
class SecurityPolicyRuleIn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求来源IP或IP段。
         * @type {string || null}
         */
        this.SourceCidr = null;

        /**
         * 策略：允许（ACCEPT）或拒绝（DROP）
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 规则别名
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 协议：TCP或UDP，ALL表示所有协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 目标端口，填写格式举例：
单个端口: 80
多个端口: 80,443
连续端口: 3306-20000
所有端口: ALL
         * @type {string || null}
         */
        this.DestPortRange = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceCidr = 'SourceCidr' in params ? params.SourceCidr : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DestPortRange = 'DestPortRange' in params ? params.DestPortRange : null;

    }
}

/**
 * 内部接口使用，返回可以查询统计数据的通道和对应的监听器信息
 * @class
 */
class ProxySimpleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 通道名称
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 监听器列表
         * @type {Array.<ListenerInfo> || null}
         */
        this.ListenerList = null;

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

        if (params.ListenerList) {
            this.ListenerList = new Array();
            for (let z in params.ListenerList) {
                let obj = new ListenerInfo();
                obj.deserialize(params.ListenerList[z]);
                this.ListenerList.push(obj);
            }
        }

    }
}

/**
 * DescribeDestRegions请求参数结构体
 * @class
 */
class DescribeDestRegionsRequest extends  AbstractModel {
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
 * ModifyRuleAttribute返回参数结构体
 * @class
 */
class ModifyRuleAttributeResponse extends  AbstractModel {
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
 * CreateTCPListeners返回参数结构体
 * @class
 */
class CreateTCPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回监听器ID
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

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
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityPolicyDetail请求参数结构体
 * @class
 */
class DescribeSecurityPolicyDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全策略ID
         * @type {string || null}
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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * ModifyDomain返回参数结构体
 * @class
 */
class ModifyDomainResponse extends  AbstractModel {
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
 * DescribeRulesByRuleIds返回参数结构体
 * @class
 */
class DescribeRulesByRuleIdsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的规则总个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的规则列表。
         * @type {Array.<RuleInfo> || null}
         */
        this.RuleSet = null;

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

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new RuleInfo();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetAuthentication请求参数结构体
 * @class
 */
class SetAuthenticationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 需要进行高级配置的域名，该域名为监听器下的转发规则的域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 基础认证开关，其中：
0，关闭基础认证；
1，开启基础认证。
默认为0。
         * @type {number || null}
         */
        this.BasicAuth = null;

        /**
         * 通道认证开关，用于源站对Gaap的认证，其中：
0，关闭通道认证；
1，开启通道认证。
默认为0。
         * @type {number || null}
         */
        this.GaapAuth = null;

        /**
         * 源站认证开关，用于Gaap对服务器的认证，其中：
0，关闭源站认证；
1，开启源站认证。
默认为0。
         * @type {number || null}
         */
        this.RealServerAuth = null;

        /**
         * 基础认证配置ID，从证书管理页获取。
         * @type {string || null}
         */
        this.BasicAuthConfId = null;

        /**
         * 通道SSL证书ID，从证书管理页获取。
         * @type {string || null}
         */
        this.GaapCertificateId = null;

        /**
         * 源站CA证书ID，从证书管理页获取。源站认证时，填写该参数或RealServerCertificateId参数
         * @type {string || null}
         */
        this.RealServerCertificateId = null;

        /**
         * 源站证书域名。
         * @type {string || null}
         */
        this.RealServerCertificateDomain = null;

        /**
         * 多源站CA证书ID，从证书管理页获取。源站认证时，填写该参数或RealServerCertificateId参数
         * @type {Array.<string> || null}
         */
        this.PolyRealServerCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.BasicAuth = 'BasicAuth' in params ? params.BasicAuth : null;
        this.GaapAuth = 'GaapAuth' in params ? params.GaapAuth : null;
        this.RealServerAuth = 'RealServerAuth' in params ? params.RealServerAuth : null;
        this.BasicAuthConfId = 'BasicAuthConfId' in params ? params.BasicAuthConfId : null;
        this.GaapCertificateId = 'GaapCertificateId' in params ? params.GaapCertificateId : null;
        this.RealServerCertificateId = 'RealServerCertificateId' in params ? params.RealServerCertificateId : null;
        this.RealServerCertificateDomain = 'RealServerCertificateDomain' in params ? params.RealServerCertificateDomain : null;
        this.PolyRealServerCertificateIds = 'PolyRealServerCertificateIds' in params ? params.PolyRealServerCertificateIds : null;

    }
}

/**
 * InquiryPriceCreateProxy返回参数结构体
 * @class
 */
class InquiryPriceCreateProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道基础费用价格，单位：元/天。
         * @type {number || null}
         */
        this.ProxyDailyPrice = null;

        /**
         * 通道带宽费用梯度价格。
         * @type {Array.<BandwidthPriceGradient> || null}
         */
        this.BandwidthUnitPrice = null;

        /**
         * 通道基础费用折扣价格，单位：元/天。
         * @type {number || null}
         */
        this.DiscountProxyDailyPrice = null;

        /**
         * 价格使用的货币，支持人民币，美元等。
         * @type {string || null}
         */
        this.Currency = null;

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
        this.ProxyDailyPrice = 'ProxyDailyPrice' in params ? params.ProxyDailyPrice : null;

        if (params.BandwidthUnitPrice) {
            this.BandwidthUnitPrice = new Array();
            for (let z in params.BandwidthUnitPrice) {
                let obj = new BandwidthPriceGradient();
                obj.deserialize(params.BandwidthUnitPrice[z]);
                this.BandwidthUnitPrice.push(obj);
            }
        }
        this.DiscountProxyDailyPrice = 'DiscountProxyDailyPrice' in params ? params.DiscountProxyDailyPrice : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 新添加源站信息
 * @class
 */
class NewRealServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * 源站ip或域名
         * @type {string || null}
         */
        this.RealServerIP = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;

    }
}

/**
 * DescribeHTTPListeners返回参数结构体
 * @class
 */
class DescribeHTTPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * HTTP监听器列表
         * @type {Array.<HTTPListener> || null}
         */
        this.ListenerSet = null;

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

        if (params.ListenerSet) {
            this.ListenerSet = new Array();
            for (let z in params.ListenerSet) {
                let obj = new HTTPListener();
                obj.deserialize(params.ListenerSet[z]);
                this.ListenerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述HTTP的包头参数
 * @class
 */
class HttpHeaderParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTP头名
         * @type {string || null}
         */
        this.HeaderName = null;

        /**
         * HTTP头值
         * @type {string || null}
         */
        this.HeaderValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HeaderName = 'HeaderName' in params ? params.HeaderName : null;
        this.HeaderValue = 'HeaderValue' in params ? params.HeaderValue : null;

    }
}

/**
 * DescribeRealServerStatistics返回参数结构体
 * @class
 */
class DescribeRealServerStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站状态统计数据
         * @type {Array.<StatisticsDataInfo> || null}
         */
        this.StatisticsData = null;

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

        if (params.StatisticsData) {
            this.StatisticsData = new Array();
            for (let z in params.StatisticsData) {
                let obj = new StatisticsDataInfo();
                obj.deserialize(params.StatisticsData[z]);
                this.StatisticsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 域名就近接入配置
 * @class
 */
class AccessRegionDomainConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域ID。
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 就近接入区域国家内部编码，编码列表可通过DescribeCountryAreaMapping接口获取。
         * @type {Array.<string> || null}
         */
        this.NationCountryInnerList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.NationCountryInnerList = 'NationCountryInnerList' in params ? params.NationCountryInnerList : null;

    }
}

/**
 * DeleteDomain返回参数结构体
 * @class
 */
class DeleteDomainResponse extends  AbstractModel {
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
 * DeleteListeners返回参数结构体
 * @class
 */
class DeleteListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除操作失败的监听器ID列表
         * @type {Array.<string> || null}
         */
        this.OperationFailedListenerSet = null;

        /**
         * 删除操作成功的监听器ID列表
         * @type {Array.<string> || null}
         */
        this.OperationSucceedListenerSet = null;

        /**
         * 无效的监听器ID列表，如：监听器不存在，监听器对应实例不匹配
         * @type {Array.<string> || null}
         */
        this.InvalidStatusListenerSet = null;

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
        this.OperationFailedListenerSet = 'OperationFailedListenerSet' in params ? params.OperationFailedListenerSet : null;
        this.OperationSucceedListenerSet = 'OperationSucceedListenerSet' in params ? params.OperationSucceedListenerSet : null;
        this.InvalidStatusListenerSet = 'InvalidStatusListenerSet' in params ? params.InvalidStatusListenerSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 7层监听器转发规则健康检查相关参数
 * @class
 */
class RuleCheckParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 健康检查的时间间隔
         * @type {number || null}
         */
        this.DelayLoop = null;

        /**
         * 健康检查的响应超时时间
         * @type {number || null}
         */
        this.ConnectTimeout = null;

        /**
         * 健康检查的检查路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 健康检查的方法，GET/HEAD
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 确认源站正常的返回码，可选范围[100, 200, 300, 400, 500]
         * @type {Array.<number> || null}
         */
        this.StatusCode = null;

        /**
         * 健康检查的检查域名。
当调用ModifyRuleAttribute时，不支持修改该参数。
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
        this.DelayLoop = 'DelayLoop' in params ? params.DelayLoop : null;
        this.ConnectTimeout = 'ConnectTimeout' in params ? params.ConnectTimeout : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * CreateSecurityPolicy请求参数结构体
 * @class
 */
class CreateSecurityPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速通道ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 默认策略：ACCEPT或DROP
         * @type {string || null}
         */
        this.DefaultAction = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.DefaultAction = 'DefaultAction' in params ? params.DefaultAction : null;

    }
}

/**
 * ModifyHTTPSListenerAttribute返回参数结构体
 * @class
 */
class ModifyHTTPSListenerAttributeResponse extends  AbstractModel {
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
 * 根据源站查询的可用加速区域信息及对应的可选带宽和并发量
 * @class
 */
class AccessRegionDetial extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * 区域的中文或英文名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 可选的并发量取值数组
         * @type {Array.<number> || null}
         */
        this.ConcurrentList = null;

        /**
         * 可选的带宽取值数组
         * @type {Array.<number> || null}
         */
        this.BandwidthList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ConcurrentList = 'ConcurrentList' in params ? params.ConcurrentList : null;
        this.BandwidthList = 'BandwidthList' in params ? params.BandwidthList : null;

    }
}

/**
 * DescribeProxyGroupList请求参数结构体
 * @class
 */
class DescribeProxyGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，默认值为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 项目ID。取值范围：
-1，该用户下所有项目
0，默认项目
其他值，指定的项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 标签列表，当存在该字段时，拉取对应标签下的资源列表。
最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，该通道组会被拉取出来。
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * 过滤条件。   
每次请求的Filter.Values的上限为5。
RealServerRegion - String - 是否必填：否 -（过滤条件）按照源站地域过滤，可参考DescribeDestRegions接口返回结果中的RegionId。
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

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
 * 安全策略规则（出参）
 * @class
 */
class SecurityPolicyRuleOut extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略：允许（ACCEPT）或拒绝（DROP）
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 请求来源Ip或Ip段
         * @type {string || null}
         */
        this.SourceCidr = null;

        /**
         * 规则别名
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 目标端口范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DestPortRange = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 要匹配的协议类型（TCP/UDP）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 安全策略ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.Action = 'Action' in params ? params.Action : null;
        this.SourceCidr = 'SourceCidr' in params ? params.SourceCidr : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.DestPortRange = 'DestPortRange' in params ? params.DestPortRange : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * 已绑定的源站信息
 * @class
 */
class BindRealServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站ID
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * 源站IP或者域名
         * @type {string || null}
         */
        this.RealServerIP = null;

        /**
         * 该源站所占权重
         * @type {number || null}
         */
        this.RealServerWeight = null;

        /**
         * 源站健康检查状态，其中：
0，正常；
1，异常。
未开启健康检查状态时，该状态始终为正常。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealServerStatus = null;

        /**
         * 源站的端口号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealServerPort = null;

        /**
         * 当源站为域名时，域名被解析成一个或者多个IP，该字段表示其中异常的IP列表。状态异常，但该字段为空时，表示域名解析异常。
         * @type {Array.<string> || null}
         */
        this.DownIPList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerWeight = 'RealServerWeight' in params ? params.RealServerWeight : null;
        this.RealServerStatus = 'RealServerStatus' in params ? params.RealServerStatus : null;
        this.RealServerPort = 'RealServerPort' in params ? params.RealServerPort : null;
        this.DownIPList = 'DownIPList' in params ? params.DownIPList : null;

    }
}

/**
 * 可以显示统计数据的通道组和对应通道信息
 * @class
 */
class GroupStatisticsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 通道组名称
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 通道组下通道列表
         * @type {Array.<ProxySimpleInfo> || null}
         */
        this.ProxySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.ProxySet) {
            this.ProxySet = new Array();
            for (let z in params.ProxySet) {
                let obj = new ProxySimpleInfo();
                obj.deserialize(params.ProxySet[z]);
                this.ProxySet.push(obj);
            }
        }

    }
}

/**
 * CreateProxyGroup返回参数结构体
 * @class
 */
class CreateProxyGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组ID
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateHTTPSListener返回参数结构体
 * @class
 */
class CreateHTTPSListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteRule返回参数结构体
 * @class
 */
class DeleteRuleResponse extends  AbstractModel {
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
 * BindRuleRealServers返回参数结构体
 * @class
 */
class BindRuleRealServersResponse extends  AbstractModel {
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
 * DescribeGroupAndStatisticsProxy请求参数结构体
 * @class
 */
class DescribeGroupAndStatisticsProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifyUDPListenerAttribute请求参数结构体
 * @class
 */
class ModifyUDPListenerAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器源站调度策略
         * @type {string || null}
         */
        this.Scheduler = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;

    }
}

/**
 * DeleteSecurityRules返回参数结构体
 * @class
 */
class DeleteSecurityRulesResponse extends  AbstractModel {
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
 * ModifyTCPListenerAttribute返回参数结构体
 * @class
 */
class ModifyTCPListenerAttributeResponse extends  AbstractModel {
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
 * 国家地区映射关系（名称和编码）
 * @class
 */
class CountryAreaMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家名称。
         * @type {string || null}
         */
        this.NationCountryName = null;

        /**
         * 国家编码。
         * @type {string || null}
         */
        this.NationCountryInnerCode = null;

        /**
         * 地区名称。
         * @type {string || null}
         */
        this.GeographicalZoneName = null;

        /**
         * 地区编码。
         * @type {string || null}
         */
        this.GeographicalZoneInnerCode = null;

        /**
         * 大洲名称。
         * @type {string || null}
         */
        this.ContinentName = null;

        /**
         * 大洲编码。
         * @type {string || null}
         */
        this.ContinentInnerCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NationCountryName = 'NationCountryName' in params ? params.NationCountryName : null;
        this.NationCountryInnerCode = 'NationCountryInnerCode' in params ? params.NationCountryInnerCode : null;
        this.GeographicalZoneName = 'GeographicalZoneName' in params ? params.GeographicalZoneName : null;
        this.GeographicalZoneInnerCode = 'GeographicalZoneInnerCode' in params ? params.GeographicalZoneInnerCode : null;
        this.ContinentName = 'ContinentName' in params ? params.ContinentName : null;
        this.ContinentInnerCode = 'ContinentInnerCode' in params ? params.ContinentInnerCode : null;

    }
}

/**
 * 单指标的统计数据
 * @class
 */
class MetricStatisticsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名称
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 指标统计数据
         * @type {Array.<StatisticsDataInfo> || null}
         */
        this.MetricData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

        if (params.MetricData) {
            this.MetricData = new Array();
            for (let z in params.MetricData) {
                let obj = new StatisticsDataInfo();
                obj.deserialize(params.MetricData[z]);
                this.MetricData.push(obj);
            }
        }

    }
}

/**
 * DescribeProxyDetail返回参数结构体
 * @class
 */
class DescribeProxyDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道详情信息。
         * @type {ProxyInfo || null}
         */
        this.ProxyDetail = null;

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

        if (params.ProxyDetail) {
            let obj = new ProxyInfo();
            obj.deserialize(params.ProxyDetail)
            this.ProxyDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSecurityPolicy返回参数结构体
 * @class
 */
class DeleteSecurityPolicyResponse extends  AbstractModel {
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
 * CreateUDPListeners返回参数结构体
 * @class
 */
class CreateUDPListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回监听器ID
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

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
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyHTTPSListenerAttribute请求参数结构体
 * @class
 */
class ModifyHTTPSListenerAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 通道ID， 若为单通道监听器，此项必须填写
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 修改后的监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器后端转发与源站之间的协议类型
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * 修改后的监听器服务器证书ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 修改后的监听器客户端证书ID，不支持多客户端证书，多客户端证书新采用PolyClientCertificateIds字段
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * 新字段,修改后的监听器客户端证书ID
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;

    }
}

/**
 * DescribeProxyStatistics请求参数结构体
 * @class
 */
class DescribeProxyStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 起始时间(2019-03-25 12:00:00)
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间(2019-03-25 12:00:00)
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计指标名称列表，支持: 入带宽:InBandwidth, 出带宽:OutBandwidth, 并发:Concurrent, 入包量:InPackets, 出包量:OutPackets, 丢包率:PacketLoss, 延迟:Latency
         * @type {Array.<string> || null}
         */
        this.MetricNames = null;

        /**
         * 监控粒度，目前支持60，300，3600，86400，单位：秒。
当时间范围不超过3天，支持最小粒度60秒；
当时间范围不超过7天，支持最小粒度300秒；
当时间范围不超过30天，支持最小粒度3600秒。
         * @type {number || null}
         */
        this.Granularity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricNames = 'MetricNames' in params ? params.MetricNames : null;
        this.Granularity = 'Granularity' in params ? params.Granularity : null;

    }
}

/**
 * 按照域名分类的7层监听器转发规则信息
 * @class
 */
class DomainRuleSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 该域名对应的转发规则列表。
         * @type {Array.<RuleInfo> || null}
         */
        this.RuleSet = null;

        /**
         * 该域名对应的服务器证书ID，值为default时，表示使用默认证书（监听器配置的证书）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 该域名对应服务器证书名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertificateAlias = null;

        /**
         * 该域名对应的客户端证书ID，值为default时，表示使用默认证书（监听器配置的证书）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * 该域名对应客户端证书名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientCertificateAlias = null;

        /**
         * 该域名对应基础认证配置ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BasicAuthConfId = null;

        /**
         * 基础认证开关，其中：
0，表示未开启；
1，表示已开启。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BasicAuth = null;

        /**
         * 该域名对应基础认证配置名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BasicAuthConfAlias = null;

        /**
         * 该域名对应源站认证证书ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealServerCertificateId = null;

        /**
         * 源站认证开关，其中：
0，表示未开启；
1，表示已开启。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealServerAuth = null;

        /**
         * 该域名对应源站认证证书名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealServerCertificateAlias = null;

        /**
         * 该域名对应通道认证证书ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GaapCertificateId = null;

        /**
         * 通道认证开关，其中：
0，表示未开启；
1，表示已开启。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GaapAuth = null;

        /**
         * 该域名对应通道认证证书名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GaapCertificateAlias = null;

        /**
         * 源站认证域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RealServerCertificateDomain = null;

        /**
         * 多客户端证书时，返回多个证书的id和别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CertificateAliasInfo> || null}
         */
        this.PolyClientCertificateAliasInfo = null;

        /**
         * 多源站证书时，返回多个证书的id和别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CertificateAliasInfo> || null}
         */
        this.PolyRealServerCertificateAliasInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.RuleSet) {
            this.RuleSet = new Array();
            for (let z in params.RuleSet) {
                let obj = new RuleInfo();
                obj.deserialize(params.RuleSet[z]);
                this.RuleSet.push(obj);
            }
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.ClientCertificateAlias = 'ClientCertificateAlias' in params ? params.ClientCertificateAlias : null;
        this.BasicAuthConfId = 'BasicAuthConfId' in params ? params.BasicAuthConfId : null;
        this.BasicAuth = 'BasicAuth' in params ? params.BasicAuth : null;
        this.BasicAuthConfAlias = 'BasicAuthConfAlias' in params ? params.BasicAuthConfAlias : null;
        this.RealServerCertificateId = 'RealServerCertificateId' in params ? params.RealServerCertificateId : null;
        this.RealServerAuth = 'RealServerAuth' in params ? params.RealServerAuth : null;
        this.RealServerCertificateAlias = 'RealServerCertificateAlias' in params ? params.RealServerCertificateAlias : null;
        this.GaapCertificateId = 'GaapCertificateId' in params ? params.GaapCertificateId : null;
        this.GaapAuth = 'GaapAuth' in params ? params.GaapAuth : null;
        this.GaapCertificateAlias = 'GaapCertificateAlias' in params ? params.GaapCertificateAlias : null;
        this.RealServerCertificateDomain = 'RealServerCertificateDomain' in params ? params.RealServerCertificateDomain : null;

        if (params.PolyClientCertificateAliasInfo) {
            this.PolyClientCertificateAliasInfo = new Array();
            for (let z in params.PolyClientCertificateAliasInfo) {
                let obj = new CertificateAliasInfo();
                obj.deserialize(params.PolyClientCertificateAliasInfo[z]);
                this.PolyClientCertificateAliasInfo.push(obj);
            }
        }

        if (params.PolyRealServerCertificateAliasInfo) {
            this.PolyRealServerCertificateAliasInfo = new Array();
            for (let z in params.PolyRealServerCertificateAliasInfo) {
                let obj = new CertificateAliasInfo();
                obj.deserialize(params.PolyRealServerCertificateAliasInfo[z]);
                this.PolyRealServerCertificateAliasInfo.push(obj);
            }
        }

    }
}

/**
 * DescribeTCPListeners请求参数结构体
 * @class
 */
class DescribeTCPListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，根据通道ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 过滤条件，根据监听器ID精确查询。
当设置了ProxyId时，会检查该监听器是否归属于该通道。
当设置了GroupId时，会检查该监听器是否归属于该通道组。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 过滤条件，根据监听器名称精确查询
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 过滤条件，根据监听器端口精确查询
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制数量，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件，根据通道组ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 过滤条件，支持按照端口或监听器名称进行模糊查询，该参数不能与ListenerName和Port同时使用
         * @type {string || null}
         */
        this.SearchValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchValue = 'SearchValue' in params ? params.SearchValue : null;

    }
}

/**
 * CreateCertificate返回参数结构体
 * @class
 */
class CreateCertificateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID
         * @type {string || null}
         */
        this.CertificateId = null;

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
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyGroupDomainConfig返回参数结构体
 * @class
 */
class ModifyGroupDomainConfigResponse extends  AbstractModel {
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
 * DescribeProxyStatistics返回参数结构体
 * @class
 */
class DescribeProxyStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道统计数据
         * @type {Array.<MetricStatisticsInfo> || null}
         */
        this.StatisticsData = null;

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

        if (params.StatisticsData) {
            this.StatisticsData = new Array();
            for (let z in params.StatisticsData) {
                let obj = new MetricStatisticsInfo();
                obj.deserialize(params.StatisticsData[z]);
                this.StatisticsData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRealServersStatus返回参数结构体
 * @class
 */
class DescribeRealServersStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回源站查询结果的个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 源站被绑定状态列表
         * @type {Array.<RealServerStatus> || null}
         */
        this.RealServerStatusSet = null;

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

        if (params.RealServerStatusSet) {
            this.RealServerStatusSet = new Array();
            for (let z in params.RealServerStatusSet) {
                let obj = new RealServerStatus();
                obj.deserialize(params.RealServerStatusSet[z]);
                this.RealServerStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProxyGroupAttribute请求参数结构体
 * @class
 */
class ModifyProxyGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要修改的通道组ID。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 修改后的通道组名称：不超过30个字符，超过部分会被截断。
         * @type {string || null}
         */
        this.GroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

    }
}

/**
 * DescribeCertificateDetail返回参数结构体
 * @class
 */
class DescribeCertificateDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书详情。
         * @type {CertificateDetail || null}
         */
        this.CertificateDetail = null;

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

        if (params.CertificateDetail) {
            let obj = new CertificateDetail();
            obj.deserialize(params.CertificateDetail)
            this.CertificateDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDomainErrorPageInfo返回参数结构体
 * @class
 */
class DeleteDomainErrorPageInfoResponse extends  AbstractModel {
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
 * ModifyProxiesAttribute返回参数结构体
 * @class
 */
class ModifyProxiesAttributeResponse extends  AbstractModel {
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
 * DescribeDomainErrorPageInfoByIds请求参数结构体
 * @class
 */
class DescribeDomainErrorPageInfoByIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 定制错误ID列表,最多支持10个
         * @type {Array.<string> || null}
         */
        this.ErrorPageIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrorPageIds = 'ErrorPageIds' in params ? params.ErrorPageIds : null;

    }
}

/**
 * CheckProxyCreate请求参数结构体
 * @class
 */
class CheckProxyCreateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道的接入(加速)区域。取值可通过接口DescribeAccessRegionsByDestRegion获取到
         * @type {string || null}
         */
        this.AccessRegion = null;

        /**
         * 通道的源站区域。取值可通过接口DescribeDestRegions获取到
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * 通道带宽上限，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 通道并发量上限，表示同时在线的连接数，单位：万。
         * @type {number || null}
         */
        this.Concurrent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessRegion = 'AccessRegion' in params ? params.AccessRegion : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;

    }
}

/**
 * DescribeRegionAndPrice请求参数结构体
 * @class
 */
class DescribeRegionAndPriceRequest extends  AbstractModel {
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
 * AddRealServers请求参数结构体
 * @class
 */
class AddRealServersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站对应的项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 源站对应的IP或域名
         * @type {Array.<string> || null}
         */
        this.RealServerIP = null;

        /**
         * 源站名称
         * @type {string || null}
         */
        this.RealServerName = null;

        /**
         * 标签列表
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerName = 'RealServerName' in params ? params.RealServerName : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * ModifyProxiesAttribute请求参数结构体
 * @class
 */
class ModifyProxiesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （旧参数，请切换到ProxyIds）一个或多个待操作的通道ID。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 通道名称。可任意命名，但不得超过30个字符。
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * （新参数）一个或多个待操作的通道ID。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * DescribeSecurityRules返回参数结构体
 * @class
 */
class DescribeSecurityRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的安全规则详情总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的安全规则详情列表。
         * @type {Array.<SecurityPolicyRuleOut> || null}
         */
        this.SecurityRuleSet = null;

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

        if (params.SecurityRuleSet) {
            this.SecurityRuleSet = new Array();
            for (let z in params.SecurityRuleSet) {
                let obj = new SecurityPolicyRuleOut();
                obj.deserialize(params.SecurityRuleSet[z]);
                this.SecurityRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 证书别名信息
 * @class
 */
class CertificateAliasInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 证书别名
         * @type {string || null}
         */
        this.CertificateAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.CertificateAlias = 'CertificateAlias' in params ? params.CertificateAlias : null;

    }
}

/**
 * CreateHTTPSListener请求参数结构体
 * @class
 */
class CreateHTTPSListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器端口，基于同种传输层协议（TCP 或 UDP）的监听器，端口不可重复
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 服务器证书ID
         * @type {string || null}
         */
        this.CertificateId = null;

        /**
         * 加速通道转发到源站的协议类型：HTTP | HTTPS
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * 通道ID
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 认证类型，其中：
0，单向认证；
1，双向认证。
默认使用单向认证。
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 客户端CA单证书ID，仅当双向认证时设置该参数或PolyClientCertificateIds参数
         * @type {string || null}
         */
        this.ClientCertificateId = null;

        /**
         * 新的客户端多CA证书ID，仅当双向认证时设置该参数或设置ClientCertificateId参数
         * @type {Array.<string> || null}
         */
        this.PolyClientCertificateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CertificateId = 'CertificateId' in params ? params.CertificateId : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.ClientCertificateId = 'ClientCertificateId' in params ? params.ClientCertificateId : null;
        this.PolyClientCertificateIds = 'PolyClientCertificateIds' in params ? params.PolyClientCertificateIds : null;

    }
}

/**
 * DeleteSecurityRules请求参数结构体
 * @class
 */
class DeleteSecurityRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 访问规则ID列表
         * @type {Array.<string> || null}
         */
        this.RuleIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * 通道ID
 * @class
 */
class ProxyIdDict extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道ID
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
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;

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
         * 过滤条件
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤值
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
 * CreateProxy返回参数结构体
 * @class
 */
class CreateProxyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道的实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * OpenProxies请求参数结构体
 * @class
 */
class OpenProxiesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * （旧参数，请切换到ProxyIds）通道的实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
更多详细信息请参阅：如何保证幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * （新参数）通道的实例ID列表。
         * @type {Array.<string> || null}
         */
        this.ProxyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.ProxyIds = 'ProxyIds' in params ? params.ProxyIds : null;

    }
}

/**
 * InquiryPriceCreateProxy请求参数结构体
 * @class
 */
class InquiryPriceCreateProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 加速区域名称。
         * @type {string || null}
         */
        this.AccessRegion = null;

        /**
         * 通道带宽上限，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * （旧参数，请切换到RealServerRegion）源站区域名称。
         * @type {string || null}
         */
        this.DestRegion = null;

        /**
         * （旧参数，请切换到Concurrent）通道并发量上限，表示同时在线的连接数，单位：万。
         * @type {number || null}
         */
        this.Concurrency = null;

        /**
         * （新参数）源站区域名称。
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * （新参数）通道并发量上限，表示同时在线的连接数，单位：万。
         * @type {number || null}
         */
        this.Concurrent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessRegion = 'AccessRegion' in params ? params.AccessRegion : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.DestRegion = 'DestRegion' in params ? params.DestRegion : null;
        this.Concurrency = 'Concurrency' in params ? params.Concurrency : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;

    }
}

/**
 * DescribeProxyGroupDetails返回参数结构体
 * @class
 */
class DescribeProxyGroupDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通道组详细信息。
         * @type {ProxyGroupDetail || null}
         */
        this.ProxyGroupDetail = null;

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

        if (params.ProxyGroupDetail) {
            let obj = new ProxyGroupDetail();
            obj.deserialize(params.ProxyGroupDetail)
            this.ProxyGroupDetail = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UDP类型监听器信息
 * @class
 */
class UDPListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 监听器转发源站端口，仅V1版本通道或通道组监听器有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RealServerPort = null;

        /**
         * 监听器绑定源站类型
         * @type {string || null}
         */
        this.RealServerType = null;

        /**
         * 监听器协议， UDP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器状态，其中：
0， 运行中；
1， 创建中；
2，销毁中；
3，源站调整中；
4，配置变更中。
         * @type {number || null}
         */
        this.ListenerStatus = null;

        /**
         * 监听器源站访问策略
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 监听器绑定源站状态， 0正常，1IP异常，2域名解析异常
         * @type {number || null}
         */
        this.BindStatus = null;

        /**
         * 监听器绑定的源站信息
         * @type {Array.<BindRealServer> || null}
         */
        this.RealServerSet = null;

        /**
         * 监听器创建时间，Unix时间戳
         * @type {number || null}
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.RealServerPort = 'RealServerPort' in params ? params.RealServerPort : null;
        this.RealServerType = 'RealServerType' in params ? params.RealServerType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerStatus = 'ListenerStatus' in params ? params.ListenerStatus : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;

        if (params.RealServerSet) {
            this.RealServerSet = new Array();
            for (let z in params.RealServerSet) {
                let obj = new BindRealServer();
                obj.deserialize(params.RealServerSet[z]);
                this.RealServerSet.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 通道信息
 * @class
 */
class ProxyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * （旧参数，请使用ProxyId）通道实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 创建时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 项目ID。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 通道名称。
         * @type {string || null}
         */
        this.ProxyName = null;

        /**
         * 接入地域。
         * @type {string || null}
         */
        this.AccessRegion = null;

        /**
         * 源站地域。
         * @type {string || null}
         */
        this.RealServerRegion = null;

        /**
         * 带宽，单位：Mbps。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 并发，单位：个/秒。
         * @type {number || null}
         */
        this.Concurrent = null;

        /**
         * 通道状态。其中：
RUNNING，运行中；
CREATING，创建中；
DESTROYING，销毁中；
OPENING，开启中；
CLOSING，关闭中；
CLOSED，已关闭；
ADJUSTING，配置变更中；
ISOLATING，隔离中（欠费触发）；
ISOLATED，已隔离（欠费触发）；
CLONING，复制中；
UNKNOWN，未知状态。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 接入域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 接入IP。
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 通道版本号：1.0，2.0，3.0。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * （新参数）通道实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProxyId = null;

        /**
         * 1，该通道可缩扩容；0，该通道无法缩扩容。
         * @type {number || null}
         */
        this.Scalarable = null;

        /**
         * 支持的协议类型。
         * @type {Array.<string> || null}
         */
        this.SupportProtocols = null;

        /**
         * 通道组ID，当通道归属于某一通道组时，存在该字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 安全策略ID，当设置了安全策略时，存在该字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 接入地域详细信息，包括地域ID和地域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RegionDetail || null}
         */
        this.AccessRegionInfo = null;

        /**
         * 源站地域详细信息，包括地域ID和地域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RegionDetail || null}
         */
        this.RealServerRegionInfo = null;

        /**
         * 通道转发IP
         * @type {string || null}
         */
        this.ForwardIP = null;

        /**
         * 标签列表，不存在标签时，该字段为空列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagPair> || null}
         */
        this.TagSet = null;

        /**
         * 是否支持安全组配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SupportSecurity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProxyName = 'ProxyName' in params ? params.ProxyName : null;
        this.AccessRegion = 'AccessRegion' in params ? params.AccessRegion : null;
        this.RealServerRegion = 'RealServerRegion' in params ? params.RealServerRegion : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.Concurrent = 'Concurrent' in params ? params.Concurrent : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ProxyId = 'ProxyId' in params ? params.ProxyId : null;
        this.Scalarable = 'Scalarable' in params ? params.Scalarable : null;
        this.SupportProtocols = 'SupportProtocols' in params ? params.SupportProtocols : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.AccessRegionInfo) {
            let obj = new RegionDetail();
            obj.deserialize(params.AccessRegionInfo)
            this.AccessRegionInfo = obj;
        }

        if (params.RealServerRegionInfo) {
            let obj = new RegionDetail();
            obj.deserialize(params.RealServerRegionInfo)
            this.RealServerRegionInfo = obj;
        }
        this.ForwardIP = 'ForwardIP' in params ? params.ForwardIP : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new TagPair();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.SupportSecurity = 'SupportSecurity' in params ? params.SupportSecurity : null;

    }
}

/**
 * RemoveRealServers返回参数结构体
 * @class
 */
class RemoveRealServersResponse extends  AbstractModel {
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
 * DescribeRulesByRuleIds请求参数结构体
 * @class
 */
class DescribeRulesByRuleIdsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID列表。最多支持10个规则。
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
        this.RuleIds = 'RuleIds' in params ? params.RuleIds : null;

    }
}

/**
 * RealServerBindSetReq
 * @class
 */
class RealServerBindSetReq extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站id
         * @type {string || null}
         */
        this.RealServerId = null;

        /**
         * 源站端口
         * @type {number || null}
         */
        this.RealServerPort = null;

        /**
         * 源站IP
         * @type {string || null}
         */
        this.RealServerIP = null;

        /**
         * 源站权重
         * @type {number || null}
         */
        this.RealServerWeight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServerId = 'RealServerId' in params ? params.RealServerId : null;
        this.RealServerPort = 'RealServerPort' in params ? params.RealServerPort : null;
        this.RealServerIP = 'RealServerIP' in params ? params.RealServerIP : null;
        this.RealServerWeight = 'RealServerWeight' in params ? params.RealServerWeight : null;

    }
}

/**
 * OpenProxies返回参数结构体
 * @class
 */
class OpenProxiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 非关闭状态下的通道实例ID列表，不可开启。
         * @type {Array.<string> || null}
         */
        this.InvalidStatusInstanceSet = null;

        /**
         * 开启操作失败的通道实例ID列表。
         * @type {Array.<string> || null}
         */
        this.OperationFailedInstanceSet = null;

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
        this.InvalidStatusInstanceSet = 'InvalidStatusInstanceSet' in params ? params.InvalidStatusInstanceSet : null;
        this.OperationFailedInstanceSet = 'OperationFailedInstanceSet' in params ? params.OperationFailedInstanceSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProxyConfiguration返回参数结构体
 * @class
 */
class ModifyProxyConfigurationResponse extends  AbstractModel {
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
 * CreateDomainErrorPageInfo请求参数结构体
 * @class
 */
class CreateDomainErrorPageInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 原始错误码
         * @type {Array.<number> || null}
         */
        this.ErrorNos = null;

        /**
         * 新的响应包体
         * @type {string || null}
         */
        this.Body = null;

        /**
         * 新错误码
         * @type {number || null}
         */
        this.NewErrorNo = null;

        /**
         * 需要删除的响应头
         * @type {Array.<string> || null}
         */
        this.ClearHeaders = null;

        /**
         * 需要设置的响应头
         * @type {Array.<HttpHeaderParam> || null}
         */
        this.SetHeaders = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ErrorNos = 'ErrorNos' in params ? params.ErrorNos : null;
        this.Body = 'Body' in params ? params.Body : null;
        this.NewErrorNo = 'NewErrorNo' in params ? params.NewErrorNo : null;
        this.ClearHeaders = 'ClearHeaders' in params ? params.ClearHeaders : null;

        if (params.SetHeaders) {
            this.SetHeaders = new Array();
            for (let z in params.SetHeaders) {
                let obj = new HttpHeaderParam();
                obj.deserialize(params.SetHeaders[z]);
                this.SetHeaders.push(obj);
            }
        }

    }
}

module.exports = {
    RegionDetail: RegionDetail,
    DescribeUDPListenersRequest: DescribeUDPListenersRequest,
    DeleteProxyGroupRequest: DeleteProxyGroupRequest,
    DescribeResourcesByTagRequest: DescribeResourcesByTagRequest,
    DescribeListenerStatisticsRequest: DescribeListenerStatisticsRequest,
    DescribeProxyAndStatisticsListenersResponse: DescribeProxyAndStatisticsListenersResponse,
    DeleteRuleRequest: DeleteRuleRequest,
    BindRuleRealServersRequest: BindRuleRealServersRequest,
    DescribeHTTPSListenersResponse: DescribeHTTPSListenersResponse,
    ModifyProxiesProjectRequest: ModifyProxiesProjectRequest,
    DomainErrorPageInfo: DomainErrorPageInfo,
    DescribeCertificateDetailRequest: DescribeCertificateDetailRequest,
    TagResourceInfo: TagResourceInfo,
    SetAuthenticationResponse: SetAuthenticationResponse,
    DescribeProxyGroupStatisticsResponse: DescribeProxyGroupStatisticsResponse,
    DescribeResourcesByTagResponse: DescribeResourcesByTagResponse,
    ModifyGroupDomainConfigRequest: ModifyGroupDomainConfigRequest,
    BandwidthPriceGradient: BandwidthPriceGradient,
    DescribeHTTPListenersRequest: DescribeHTTPListenersRequest,
    ModifyRealServerNameResponse: ModifyRealServerNameResponse,
    DescribeGroupDomainConfigResponse: DescribeGroupDomainConfigResponse,
    ModifyCertificateResponse: ModifyCertificateResponse,
    OpenSecurityPolicyRequest: OpenSecurityPolicyRequest,
    DeleteDomainErrorPageInfoRequest: DeleteDomainErrorPageInfoRequest,
    DescribeListenerRealServersRequest: DescribeListenerRealServersRequest,
    DescribeProxyGroupStatisticsRequest: DescribeProxyGroupStatisticsRequest,
    DescribeHTTPSListenersRequest: DescribeHTTPSListenersRequest,
    DescribeAccessRegionsByDestRegionResponse: DescribeAccessRegionsByDestRegionResponse,
    DescribeCountryAreaMappingRequest: DescribeCountryAreaMappingRequest,
    CheckProxyCreateResponse: CheckProxyCreateResponse,
    ModifyCertificateRequest: ModifyCertificateRequest,
    DestroyProxiesRequest: DestroyProxiesRequest,
    DescribeRulesResponse: DescribeRulesResponse,
    DescribeProxiesResponse: DescribeProxiesResponse,
    CreateRuleResponse: CreateRuleResponse,
    ModifyRealServerNameRequest: ModifyRealServerNameRequest,
    DeleteProxyGroupResponse: DeleteProxyGroupResponse,
    CreateDomainErrorPageInfoResponse: CreateDomainErrorPageInfoResponse,
    BindListenerRealServersRequest: BindListenerRealServersRequest,
    ModifyProxyConfigurationRequest: ModifyProxyConfigurationRequest,
    DescribeRuleRealServersRequest: DescribeRuleRealServersRequest,
    DescribeGroupDomainConfigRequest: DescribeGroupDomainConfigRequest,
    CreateProxyGroupDomainRequest: CreateProxyGroupDomainRequest,
    CreateTCPListenersRequest: CreateTCPListenersRequest,
    CertificateDetail: CertificateDetail,
    DescribeListenerStatisticsResponse: DescribeListenerStatisticsResponse,
    DescribeProxyGroupDetailsRequest: DescribeProxyGroupDetailsRequest,
    CloseProxiesRequest: CloseProxiesRequest,
    DescribeListenerRealServersResponse: DescribeListenerRealServersResponse,
    DescribeProxyDetailRequest: DescribeProxyDetailRequest,
    ModifyTCPListenerAttributeRequest: ModifyTCPListenerAttributeRequest,
    DeleteDomainRequest: DeleteDomainRequest,
    OpenSecurityPolicyResponse: OpenSecurityPolicyResponse,
    ModifyCertificateAttributesResponse: ModifyCertificateAttributesResponse,
    DescribeSecurityPolicyDetailResponse: DescribeSecurityPolicyDetailResponse,
    CreateHTTPListenerResponse: CreateHTTPListenerResponse,
    ModifyUDPListenerAttributeResponse: ModifyUDPListenerAttributeResponse,
    CreateProxyGroupRequest: CreateProxyGroupRequest,
    RuleInfo: RuleInfo,
    RealServerStatus: RealServerStatus,
    DescribeTCPListenersResponse: DescribeTCPListenersResponse,
    DescribeRulesRequest: DescribeRulesRequest,
    DescribeCountryAreaMappingResponse: DescribeCountryAreaMappingResponse,
    DescribeRealServersResponse: DescribeRealServersResponse,
    ModifyHTTPListenerAttributeResponse: ModifyHTTPListenerAttributeResponse,
    DescribeRealServerStatisticsRequest: DescribeRealServerStatisticsRequest,
    BindRealServerInfo: BindRealServerInfo,
    DescribeProxyAndStatisticsListenersRequest: DescribeProxyAndStatisticsListenersRequest,
    DescribeAccessRegionsResponse: DescribeAccessRegionsResponse,
    DeleteListenersRequest: DeleteListenersRequest,
    DescribeSecurityRulesRequest: DescribeSecurityRulesRequest,
    DescribeDestRegionsResponse: DescribeDestRegionsResponse,
    DescribeDomainErrorPageInfoByIdsResponse: DescribeDomainErrorPageInfoByIdsResponse,
    DescribeProxiesRequest: DescribeProxiesRequest,
    BindListenerRealServersResponse: BindListenerRealServersResponse,
    ModifyProxyGroupAttributeResponse: ModifyProxyGroupAttributeResponse,
    ListenerInfo: ListenerInfo,
    DescribeUDPListenersResponse: DescribeUDPListenersResponse,
    CreateUDPListenersRequest: CreateUDPListenersRequest,
    ModifyRuleAttributeRequest: ModifyRuleAttributeRequest,
    CreateSecurityPolicyResponse: CreateSecurityPolicyResponse,
    TCPListener: TCPListener,
    CreateSecurityRulesResponse: CreateSecurityRulesResponse,
    DescribeAccessRegionsRequest: DescribeAccessRegionsRequest,
    CreateCertificateRequest: CreateCertificateRequest,
    DescribeCertificatesResponse: DescribeCertificatesResponse,
    DescribeProxyGroupListResponse: DescribeProxyGroupListResponse,
    DescribeDomainErrorPageInfoRequest: DescribeDomainErrorPageInfoRequest,
    HTTPSListener: HTTPSListener,
    DomainAccessRegionDict: DomainAccessRegionDict,
    CloseSecurityPolicyRequest: CloseSecurityPolicyRequest,
    ModifyCertificateAttributesRequest: ModifyCertificateAttributesRequest,
    TagPair: TagPair,
    CreateSecurityRulesRequest: CreateSecurityRulesRequest,
    DescribeCertificatesRequest: DescribeCertificatesRequest,
    DescribeProxiesStatusRequest: DescribeProxiesStatusRequest,
    ProxyStatus: ProxyStatus,
    DescribeGroupAndStatisticsProxyResponse: DescribeGroupAndStatisticsProxyResponse,
    CreateDomainResponse: CreateDomainResponse,
    ModifyProxiesProjectResponse: ModifyProxiesProjectResponse,
    ModifyDomainRequest: ModifyDomainRequest,
    ModifySecurityRuleRequest: ModifySecurityRuleRequest,
    NationCountryInnerInfo: NationCountryInnerInfo,
    DescribeAccessRegionsByDestRegionRequest: DescribeAccessRegionsByDestRegionRequest,
    RealServer: RealServer,
    DescribeRealServersRequest: DescribeRealServersRequest,
    StatisticsDataInfo: StatisticsDataInfo,
    ProxyGroupInfo: ProxyGroupInfo,
    CreateProxyGroupDomainResponse: CreateProxyGroupDomainResponse,
    Certificate: Certificate,
    DescribeDomainErrorPageInfoResponse: DescribeDomainErrorPageInfoResponse,
    DestroyProxiesResponse: DestroyProxiesResponse,
    DescribeRuleRealServersResponse: DescribeRuleRealServersResponse,
    DescribeRealServersStatusRequest: DescribeRealServersStatusRequest,
    ModifyHTTPListenerAttributeRequest: ModifyHTTPListenerAttributeRequest,
    CreateProxyRequest: CreateProxyRequest,
    DeleteCertificateRequest: DeleteCertificateRequest,
    ModifySecurityRuleResponse: ModifySecurityRuleResponse,
    DescribeProxiesStatusResponse: DescribeProxiesStatusResponse,
    RemoveRealServersRequest: RemoveRealServersRequest,
    CreateDomainRequest: CreateDomainRequest,
    CreateRuleRequest: CreateRuleRequest,
    DeleteSecurityPolicyRequest: DeleteSecurityPolicyRequest,
    HTTPListener: HTTPListener,
    ProxyGroupDetail: ProxyGroupDetail,
    CreateHTTPListenerRequest: CreateHTTPListenerRequest,
    CloseSecurityPolicyResponse: CloseSecurityPolicyResponse,
    DescribeRegionAndPriceResponse: DescribeRegionAndPriceResponse,
    AddRealServersResponse: AddRealServersResponse,
    CloseProxiesResponse: CloseProxiesResponse,
    DeleteCertificateResponse: DeleteCertificateResponse,
    SecurityPolicyRuleIn: SecurityPolicyRuleIn,
    ProxySimpleInfo: ProxySimpleInfo,
    DescribeDestRegionsRequest: DescribeDestRegionsRequest,
    ModifyRuleAttributeResponse: ModifyRuleAttributeResponse,
    CreateTCPListenersResponse: CreateTCPListenersResponse,
    DescribeSecurityPolicyDetailRequest: DescribeSecurityPolicyDetailRequest,
    ModifyDomainResponse: ModifyDomainResponse,
    DescribeRulesByRuleIdsResponse: DescribeRulesByRuleIdsResponse,
    SetAuthenticationRequest: SetAuthenticationRequest,
    InquiryPriceCreateProxyResponse: InquiryPriceCreateProxyResponse,
    NewRealServer: NewRealServer,
    DescribeHTTPListenersResponse: DescribeHTTPListenersResponse,
    HttpHeaderParam: HttpHeaderParam,
    DescribeRealServerStatisticsResponse: DescribeRealServerStatisticsResponse,
    AccessRegionDomainConf: AccessRegionDomainConf,
    DeleteDomainResponse: DeleteDomainResponse,
    DeleteListenersResponse: DeleteListenersResponse,
    RuleCheckParams: RuleCheckParams,
    CreateSecurityPolicyRequest: CreateSecurityPolicyRequest,
    ModifyHTTPSListenerAttributeResponse: ModifyHTTPSListenerAttributeResponse,
    AccessRegionDetial: AccessRegionDetial,
    DescribeProxyGroupListRequest: DescribeProxyGroupListRequest,
    SecurityPolicyRuleOut: SecurityPolicyRuleOut,
    BindRealServer: BindRealServer,
    GroupStatisticsInfo: GroupStatisticsInfo,
    CreateProxyGroupResponse: CreateProxyGroupResponse,
    CreateHTTPSListenerResponse: CreateHTTPSListenerResponse,
    DeleteRuleResponse: DeleteRuleResponse,
    BindRuleRealServersResponse: BindRuleRealServersResponse,
    DescribeGroupAndStatisticsProxyRequest: DescribeGroupAndStatisticsProxyRequest,
    ModifyUDPListenerAttributeRequest: ModifyUDPListenerAttributeRequest,
    DeleteSecurityRulesResponse: DeleteSecurityRulesResponse,
    ModifyTCPListenerAttributeResponse: ModifyTCPListenerAttributeResponse,
    CountryAreaMap: CountryAreaMap,
    MetricStatisticsInfo: MetricStatisticsInfo,
    DescribeProxyDetailResponse: DescribeProxyDetailResponse,
    DeleteSecurityPolicyResponse: DeleteSecurityPolicyResponse,
    CreateUDPListenersResponse: CreateUDPListenersResponse,
    ModifyHTTPSListenerAttributeRequest: ModifyHTTPSListenerAttributeRequest,
    DescribeProxyStatisticsRequest: DescribeProxyStatisticsRequest,
    DomainRuleSet: DomainRuleSet,
    DescribeTCPListenersRequest: DescribeTCPListenersRequest,
    CreateCertificateResponse: CreateCertificateResponse,
    ModifyGroupDomainConfigResponse: ModifyGroupDomainConfigResponse,
    DescribeProxyStatisticsResponse: DescribeProxyStatisticsResponse,
    DescribeRealServersStatusResponse: DescribeRealServersStatusResponse,
    ModifyProxyGroupAttributeRequest: ModifyProxyGroupAttributeRequest,
    DescribeCertificateDetailResponse: DescribeCertificateDetailResponse,
    DeleteDomainErrorPageInfoResponse: DeleteDomainErrorPageInfoResponse,
    ModifyProxiesAttributeResponse: ModifyProxiesAttributeResponse,
    DescribeDomainErrorPageInfoByIdsRequest: DescribeDomainErrorPageInfoByIdsRequest,
    CheckProxyCreateRequest: CheckProxyCreateRequest,
    DescribeRegionAndPriceRequest: DescribeRegionAndPriceRequest,
    AddRealServersRequest: AddRealServersRequest,
    ModifyProxiesAttributeRequest: ModifyProxiesAttributeRequest,
    DescribeSecurityRulesResponse: DescribeSecurityRulesResponse,
    CertificateAliasInfo: CertificateAliasInfo,
    CreateHTTPSListenerRequest: CreateHTTPSListenerRequest,
    DeleteSecurityRulesRequest: DeleteSecurityRulesRequest,
    ProxyIdDict: ProxyIdDict,
    Filter: Filter,
    CreateProxyResponse: CreateProxyResponse,
    OpenProxiesRequest: OpenProxiesRequest,
    InquiryPriceCreateProxyRequest: InquiryPriceCreateProxyRequest,
    DescribeProxyGroupDetailsResponse: DescribeProxyGroupDetailsResponse,
    UDPListener: UDPListener,
    ProxyInfo: ProxyInfo,
    RemoveRealServersResponse: RemoveRealServersResponse,
    DescribeRulesByRuleIdsRequest: DescribeRulesByRuleIdsRequest,
    RealServerBindSetReq: RealServerBindSetReq,
    OpenProxiesResponse: OpenProxiesResponse,
    ModifyProxyConfigurationResponse: ModifyProxyConfigurationResponse,
    CreateDomainErrorPageInfoRequest: CreateDomainErrorPageInfoRequest,

}

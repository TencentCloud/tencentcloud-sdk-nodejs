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
 * CreateDefaultAlarmThreshold请求参数结构体
 * @class
 */
class CreateDefaultAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认告警阈值配置
         * @type {DefaultAlarmThreshold || null}
         */
        this.DefaultAlarmConfig = null;

        /**
         * 产品类型，取值[
bgp(表示高防包产品)
bgpip(表示高防IP产品)
]
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DefaultAlarmConfig) {
            let obj = new DefaultAlarmThreshold();
            obj.deserialize(params.DefaultAlarmConfig)
            this.DefaultAlarmConfig = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DescribeDDoSConnectLimitList请求参数结构体
 * @class
 */
class DescribeDDoSConnectLimitListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 可选参数，按照IP进行过滤
         * @type {string || null}
         */
        this.FilterIp = null;

        /**
         * 可选参数，按照实例id进行过滤
         * @type {string || null}
         */
        this.FilterInstanceId = null;

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
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;

    }
}

/**
 * DescribeListBGPIPInstances返回参数结构体
 * @class
 */
class DescribeListBGPIPInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 高防IP资产实例列表
         * @type {Array.<BGPIPInstance> || null}
         */
        this.InstanceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new BGPIPInstance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBlackWhiteIpList返回参数结构体
 * @class
 */
class DescribeBlackWhiteIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑名单IP列表
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * 白名单IP列表
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 特征过滤配置
 * @class
 */
class PacketFilterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议，取值[tcp udp icmp all]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 起始源端口，取值0~65535
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * 结束源端口，取值1~65535，必须大于等于起始源端口
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * 起始目的端口，取值0~65535
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * 结束目的端口，取值1~65535，必须大于等于起始目的端口
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * 最小报文长度，取值1-1500
         * @type {number || null}
         */
        this.PktlenMin = null;

        /**
         * 最大报文长度，取值1-1500，必须大于等于最小报文长度
         * @type {number || null}
         */
        this.PktlenMax = null;

        /**
         * 动作，取值[
drop(丢弃)
transmit(放行)
drop_black(丢弃并拉黑)
drop_rst(拦截)
drop_black_rst(拦截并拉黑)
forward(继续防护)
]
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 检测位置，取值[
begin_l3(IP头)
begin_l4(TCP/UDP头)
begin_l5(T载荷)
no_match(不匹配)
]
         * @type {string || null}
         */
        this.MatchBegin = null;

        /**
         * 检测类型，取值[
sunday(关键字)
pcre(正则表达式)
]
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * 检测值，关键字符串或正则表达式,取值[
当检测类型为sunday时，请填写字符串或者16进制字节码，例如\x313233对应的是字符串"123"的16进制字节码;
当检测类型为pcre时, 请填写正则表达式字符串;
]
         * @type {string || null}
         */
        this.Str = null;

        /**
         * 从检测位置开始的检测深度，取值[0,1500]
         * @type {number || null}
         */
        this.Depth = null;

        /**
         * 从检测位置开始的偏移量，取值范围[0,Depth]
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 是否包含检测值，取值[
0(包含)
1(不包含)
]
         * @type {number || null}
         */
        this.IsNot = null;

        /**
         * 当有第二个检测条件时，与第一检测条件的且或关系，取值[
and(且的关系)
none(当没有第二个检测条件时填写此值)
]
         * @type {string || null}
         */
        this.MatchLogic = null;

        /**
         * 第二个检测位置，取值[
begin_l5(载荷)
no_match(不匹配)
]
         * @type {string || null}
         */
        this.MatchBegin2 = null;

        /**
         * 第二个检测类型，取值[
sunday(关键字)
pcre(正则表达式)
]
         * @type {string || null}
         */
        this.MatchType2 = null;

        /**
         * 第二个检测值，关键字符串或正则表达式,取值[
当检测类型为sunday时，请填写字符串或者16进制字节码，例如\x313233对应的是字符串"123"的16进制字节码;
当检测类型为pcre时, 请填写正则表达式字符串;
]
         * @type {string || null}
         */
        this.Str2 = null;

        /**
         * 从第二个检测位置开始的第二个检测深度，取值[0,1500]
         * @type {number || null}
         */
        this.Depth2 = null;

        /**
         * 从第二个检测位置开始的偏移量，取值范围[0,Depth2]
         * @type {number || null}
         */
        this.Offset2 = null;

        /**
         * 第二个检测是否包含检测值，取值[
0(包含)
1(不包含)
]
         * @type {number || null}
         */
        this.IsNot2 = null;

        /**
         * 特征过滤配置添加成功后自动生成的规则ID，当添加新特征过滤配置时，此字段不用填写；
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 大于报文长度，取值1+
         * @type {number || null}
         */
        this.PktLenGT = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SportStart = 'SportStart' in params ? params.SportStart : null;
        this.SportEnd = 'SportEnd' in params ? params.SportEnd : null;
        this.DportStart = 'DportStart' in params ? params.DportStart : null;
        this.DportEnd = 'DportEnd' in params ? params.DportEnd : null;
        this.PktlenMin = 'PktlenMin' in params ? params.PktlenMin : null;
        this.PktlenMax = 'PktlenMax' in params ? params.PktlenMax : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.MatchBegin = 'MatchBegin' in params ? params.MatchBegin : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.Str = 'Str' in params ? params.Str : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.IsNot = 'IsNot' in params ? params.IsNot : null;
        this.MatchLogic = 'MatchLogic' in params ? params.MatchLogic : null;
        this.MatchBegin2 = 'MatchBegin2' in params ? params.MatchBegin2 : null;
        this.MatchType2 = 'MatchType2' in params ? params.MatchType2 : null;
        this.Str2 = 'Str2' in params ? params.Str2 : null;
        this.Depth2 = 'Depth2' in params ? params.Depth2 : null;
        this.Offset2 = 'Offset2' in params ? params.Offset2 : null;
        this.IsNot2 = 'IsNot2' in params ? params.IsNot2 : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.PktLenGT = 'PktLenGT' in params ? params.PktLenGT : null;

    }
}

/**
 * DescribeOverviewCCTrend请求参数结构体
 * @class
 */
class DescribeOverviewCCTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp-multip表示共享包；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))，incount(请求次数), dropcount(攻击次数)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 资源的IP
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * 资源实例ID
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteCCLevelPolicy请求参数结构体
 * @class
 */
class DeleteCCLevelPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 配置策略的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，可取值http
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * 转发类型
 * @class
 */
class ProxyTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发监听端口列表，端口取值1~65535
         * @type {Array.<number> || null}
         */
        this.ProxyPorts = null;

        /**
         * 转发协议，取值[
http(HTTP协议)
https(HTTPS协议)
]
         * @type {string || null}
         */
        this.ProxyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyPorts = 'ProxyPorts' in params ? params.ProxyPorts : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

    }
}

/**
 * CreateBoundIP请求参数结构体
 * @class
 */
class CreateBoundIPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 绑定到资源实例的IP数组，当资源实例为高防包(独享包)时，数组只允许填1个IP；当没有要绑定的IP时可以为空数组；但是BoundDevList和UnBoundDevList至少有一个不为空；
         * @type {Array.<BoundIpInfo> || null}
         */
        this.BoundDevList = null;

        /**
         * 与资源实例解绑的IP数组，当资源实例为高防包(独享包)时，数组只允许填1个IP；当没有要解绑的IP时可以为空数组；但是BoundDevList和UnBoundDevList至少有一个不为空；
         * @type {Array.<BoundIpInfo> || null}
         */
        this.UnBoundDevList = null;

        /**
         * 已弃用，不填
         * @type {string || null}
         */
        this.CopyPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.BoundDevList) {
            this.BoundDevList = new Array();
            for (let z in params.BoundDevList) {
                let obj = new BoundIpInfo();
                obj.deserialize(params.BoundDevList[z]);
                this.BoundDevList.push(obj);
            }
        }

        if (params.UnBoundDevList) {
            this.UnBoundDevList = new Array();
            for (let z in params.UnBoundDevList) {
                let obj = new BoundIpInfo();
                obj.deserialize(params.UnBoundDevList[z]);
                this.UnBoundDevList.push(obj);
            }
        }
        this.CopyPolicy = 'CopyPolicy' in params ? params.CopyPolicy : null;

    }
}

/**
 * CC频率限制策略项字段
 * @class
 */
class CCReqLimitPolicyRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计周期，可取值1，10，30，60，单位秒
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 请求数，取值1~20000
         * @type {number || null}
         */
        this.RequestNum = null;

        /**
         * 频率限制策略方式，可取值alg表示验证码，drop表示丢弃
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 频率限制策略时长，可取值1~86400，单位秒
         * @type {number || null}
         */
        this.ExecuteDuration = null;

        /**
         * 策略项比对方式，可取值include表示包含，equal表示等于
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * Uri，三个策略项仅可填其中之一
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * User-Agent，三个策略项仅可填其中之一
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Cookie，三个策略项仅可填其中之一
         * @type {string || null}
         */
        this.Cookie = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.RequestNum = 'RequestNum' in params ? params.RequestNum : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.ExecuteDuration = 'ExecuteDuration' in params ? params.ExecuteDuration : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;

    }
}

/**
 * DescribeListSchedulingDomain请求参数结构体
 * @class
 */
class DescribeListSchedulingDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为20;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 调度域名搜索
         * @type {string || null}
         */
        this.FilterDomain = null;

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
        this.FilterDomain = 'FilterDomain' in params ? params.FilterDomain : null;

    }
}

/**
 * CreateWaterPrintConfig请求参数结构体
 * @class
 */
class CreateWaterPrintConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 水印防护配置
         * @type {WaterPrintConfig || null}
         */
        this.WaterPrintConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.WaterPrintConfig) {
            let obj = new WaterPrintConfig();
            obj.deserialize(params.WaterPrintConfig)
            this.WaterPrintConfig = obj;
        }

    }
}

/**
 * DDoS防护的区域封禁配置
 * @class
 */
class DDoSGeoIPBlockConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域类型，取值[
oversea(境外)
china(国内)
customized(自定义地区)
]
         * @type {string || null}
         */
        this.RegionType = null;

        /**
         * 封禁动作，取值[
drop(拦截)
trans(放行)
]
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 配置ID，配置添加成功后生成；添加新配置时不用填写此字段，修改或删除配置时需要填写配置ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 当RegionType为customized时，必须填写AreaList，且最多填写128个；
         * @type {Array.<number> || null}
         */
        this.AreaList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionType = 'RegionType' in params ? params.RegionType : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.AreaList = 'AreaList' in params ? params.AreaList : null;

    }
}

/**
 * CreateBlackWhiteIpList返回参数结构体
 * @class
 */
class CreateBlackWhiteIpListResponse extends  AbstractModel {
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
 * 单IP告警阈值配置
 * @class
 */
class IPAlarmThresholdRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警阈值类型，取值[
1(入流量告警阈值)
2(攻击清洗流量告警阈值)
]
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * 告警阈值，单位Mbps，取值>=0；当作为输入参数时，设置0会删除告警阈值配置；
         * @type {number || null}
         */
        this.AlarmThreshold = null;

        /**
         * 告警阈值所属的资源实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DeleteCCRequestLimitPolicy请求参数结构体
 * @class
 */
class DeleteCCRequestLimitPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 策略Id
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * DescribeL7RulesBySSLCertId返回参数结构体
 * @class
 */
class DescribeL7RulesBySSLCertIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书规则集合
         * @type {Array.<CertIdInsL7Rules> || null}
         */
        this.CertSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CertSet) {
            this.CertSet = new Array();
            for (let z in params.CertSet) {
                let obj = new CertIdInsL7Rules();
                obj.deserialize(params.CertSet[z]);
                this.CertSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSBlackWhiteIpList返回参数结构体
 * @class
 */
class DescribeDDoSBlackWhiteIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑名单IP列表
         * @type {Array.<IpSegment> || null}
         */
        this.BlackIpList = null;

        /**
         * 白名单IP列表
         * @type {Array.<IpSegment> || null}
         */
        this.WhiteIpList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BlackIpList) {
            this.BlackIpList = new Array();
            for (let z in params.BlackIpList) {
                let obj = new IpSegment();
                obj.deserialize(params.BlackIpList[z]);
                this.BlackIpList.push(obj);
            }
        }

        if (params.WhiteIpList) {
            this.WhiteIpList = new Array();
            for (let z in params.WhiteIpList) {
                let obj = new IpSegment();
                obj.deserialize(params.WhiteIpList[z]);
                this.WhiteIpList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源实例IP信息
 * @class
 */
class InstanceRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例的IP
         * @type {Array.<string> || null}
         */
        this.EipList = null;

        /**
         * 资源实例的ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipList = 'EipList' in params ? params.EipList : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyNewDomainRules请求参数结构体
 * @class
 */
class ModifyNewDomainRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 域名转发规则
         * @type {NewL7RuleEntry || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rule) {
            let obj = new NewL7RuleEntry();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * 地域信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域名称，例如，ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeListProtocolBlockConfig返回参数结构体
 * @class
 */
class DescribeListProtocolBlockConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 协议封禁配置
         * @type {Array.<ProtocolBlockRelation> || null}
         */
        this.ConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new ProtocolBlockRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListBGPInstances请求参数结构体
 * @class
 */
class DescribeListBGPInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为20;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

        /**
         * 资产实例ID搜索，例如，bgp-00000001
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * 地域搜索，例如，ap-guangzhou
         * @type {string || null}
         */
        this.FilterRegion = null;

        /**
         * 名称搜索
         * @type {string || null}
         */
        this.FilterName = null;

        /**
         * 按照线路搜索, 1: BGP; 2: 三网
         * @type {number || null}
         */
        this.FilterLine = null;

        /**
         * 状态搜索，idle：运行中；attacking：攻击中；blocking：封堵中
         * @type {string || null}
         */
        this.FilterStatus = null;

        /**
         * 高防包绑定状态搜索，bounding：绑定中； failed：绑定失败
         * @type {string || null}
         */
        this.FilterBoundStatus = null;

        /**
         * 实例id数组
         * @type {Array.<string> || null}
         */
        this.FilterInstanceIdList = null;

        /**
         * 企业版搜索,  1：包含重保护航套餐下的企业版列表, 2: 不包含重保护航套餐的企业版列表
         * @type {number || null}
         */
        this.FilterEnterpriseFlag = null;

        /**
         * 轻量版搜索
         * @type {number || null}
         */
        this.FilterLightFlag = null;

        /**
         * 定制版搜索
         * @type {number || null}
         */
        this.FilterChannelFlag = null;

        /**
         * 标签搜索
         * @type {TagFilter || null}
         */
        this.FilterTag = null;

        /**
         * 试用资源搜索，1: 应急防护资源；2：PLG试用资源
         * @type {number || null}
         */
        this.FilterTrialFlag = null;

        /**
         * 重保护航搜索
         * @type {number || null}
         */
        this.FilterConvoy = null;

        /**
         * 默认false；接口传true，返回数据中不包含高级信息，高级信息包含：InstanceList[0].Usage。
         * @type {boolean || null}
         */
        this.ExcludeAdvancedInfo = null;

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
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterRegion = 'FilterRegion' in params ? params.FilterRegion : null;
        this.FilterName = 'FilterName' in params ? params.FilterName : null;
        this.FilterLine = 'FilterLine' in params ? params.FilterLine : null;
        this.FilterStatus = 'FilterStatus' in params ? params.FilterStatus : null;
        this.FilterBoundStatus = 'FilterBoundStatus' in params ? params.FilterBoundStatus : null;
        this.FilterInstanceIdList = 'FilterInstanceIdList' in params ? params.FilterInstanceIdList : null;
        this.FilterEnterpriseFlag = 'FilterEnterpriseFlag' in params ? params.FilterEnterpriseFlag : null;
        this.FilterLightFlag = 'FilterLightFlag' in params ? params.FilterLightFlag : null;
        this.FilterChannelFlag = 'FilterChannelFlag' in params ? params.FilterChannelFlag : null;

        if (params.FilterTag) {
            let obj = new TagFilter();
            obj.deserialize(params.FilterTag)
            this.FilterTag = obj;
        }
        this.FilterTrialFlag = 'FilterTrialFlag' in params ? params.FilterTrialFlag : null;
        this.FilterConvoy = 'FilterConvoy' in params ? params.FilterConvoy : null;
        this.ExcludeAdvancedInfo = 'ExcludeAdvancedInfo' in params ? params.ExcludeAdvancedInfo : null;

    }
}

/**
 * 字段值，K-V形式
 * @class
 */
class KeyValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名称
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 字段取值
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
 * ModifyCcBlackWhiteIpList请求参数结构体
 * @class
 */
class ModifyCcBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP列表
         * @type {Array.<IpSegment> || null}
         */
        this.IpList = null;

        /**
         * IP类型，取值[black(黑名单IP), white(白名单IP)]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 策略Id
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.IpList) {
            this.IpList = new Array();
            for (let z in params.IpList) {
                let obj = new IpSegment();
                obj.deserialize(params.IpList[z]);
                this.IpList.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * DeleteDDoSSpeedLimitConfig请求参数结构体
 * @class
 */
class DeleteDDoSSpeedLimitConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 访问限速配置，填写参数时配置ID不能为空
         * @type {DDoSSpeedLimitConfig || null}
         */
        this.DDoSSpeedLimitConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSSpeedLimitConfig) {
            let obj = new DDoSSpeedLimitConfig();
            obj.deserialize(params.DDoSSpeedLimitConfig)
            this.DDoSSpeedLimitConfig = obj;
        }

    }
}

/**
 * CreatePacketFilterConfig返回参数结构体
 * @class
 */
class CreatePacketFilterConfigResponse extends  AbstractModel {
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
 * CreateCCReqLimitPolicy返回参数结构体
 * @class
 */
class CreateCCReqLimitPolicyResponse extends  AbstractModel {
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
 * DescribeListWaterPrintConfig请求参数结构体
 * @class
 */
class DescribeListWaterPrintConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * CreateL7RuleCerts请求参数结构体
 * @class
 */
class CreateL7RuleCertsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL证书ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * L7域名转发规则列表
         * @type {Array.<InsL7Rules> || null}
         */
        this.L7Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

        if (params.L7Rules) {
            this.L7Rules = new Array();
            for (let z in params.L7Rules) {
                let obj = new InsL7Rules();
                obj.deserialize(params.L7Rules[z]);
                this.L7Rules.push(obj);
            }
        }

    }
}

/**
 * CreateCCPrecisionPolicy返回参数结构体
 * @class
 */
class CreateCCPrecisionPolicyResponse extends  AbstractModel {
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
 * DeleteCcGeoIPBlockConfig返回参数结构体
 * @class
 */
class DeleteCcGeoIPBlockConfigResponse extends  AbstractModel {
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
 * DeleteDDoSGeoIPBlockConfig请求参数结构体
 * @class
 */
class DeleteDDoSGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * DDoS区域封禁配置，填写参数时配置ID不能为空
         * @type {DDoSGeoIPBlockConfig || null}
         */
        this.DDoSGeoIPBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSGeoIPBlockConfig) {
            let obj = new DDoSGeoIPBlockConfig();
            obj.deserialize(params.DDoSGeoIPBlockConfig)
            this.DDoSGeoIPBlockConfig = obj;
        }

    }
}

/**
 * ModifyDDoSGeoIPBlockConfig返回参数结构体
 * @class
 */
class ModifyDDoSGeoIPBlockConfigResponse extends  AbstractModel {
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
 * DescribeCcBlackWhiteIpList返回参数结构体
 * @class
 */
class DescribeCcBlackWhiteIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC四层黑白名单策略列表总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * CC四层黑白名单策略列表详情
         * @type {Array.<CcBlackWhiteIpPolicy> || null}
         */
        this.CcBlackWhiteIpList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.CcBlackWhiteIpList) {
            this.CcBlackWhiteIpList = new Array();
            for (let z in params.CcBlackWhiteIpList) {
                let obj = new CcBlackWhiteIpPolicy();
                obj.deserialize(params.CcBlackWhiteIpList[z]);
                this.CcBlackWhiteIpList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCLevelPolicy返回参数结构体
 * @class
 */
class ModifyCCLevelPolicyResponse extends  AbstractModel {
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
 * CreateIPAlarmThresholdConfig请求参数结构体
 * @class
 */
class CreateIPAlarmThresholdConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP告警阈值配置列表
         * @type {Array.<IPAlarmThresholdRelation> || null}
         */
        this.IpAlarmThresholdConfigList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IpAlarmThresholdConfigList) {
            this.IpAlarmThresholdConfigList = new Array();
            for (let z in params.IpAlarmThresholdConfigList) {
                let obj = new IPAlarmThresholdRelation();
                obj.deserialize(params.IpAlarmThresholdConfigList[z]);
                this.IpAlarmThresholdConfigList.push(obj);
            }
        }

    }
}

/**
 * CreateCcBlackWhiteIpList返回参数结构体
 * @class
 */
class CreateCcBlackWhiteIpListResponse extends  AbstractModel {
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
 * DescribeDefaultAlarmThreshold返回参数结构体
 * @class
 */
class DescribeDefaultAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认告警阈值配置
         * @type {Array.<DefaultAlarmThreshold> || null}
         */
        this.DefaultAlarmConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DefaultAlarmConfigList) {
            this.DefaultAlarmConfigList = new Array();
            for (let z in params.DefaultAlarmConfigList) {
                let obj = new DefaultAlarmThreshold();
                obj.deserialize(params.DefaultAlarmConfigList[z]);
                this.DefaultAlarmConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNewL7Rules返回参数结构体
 * @class
 */
class CreateNewL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功码
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDDoSAI请求参数结构体
 * @class
 */
class CreateDDoSAIRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * AI防护开关，取值[
on(开启)
off(关闭)
]
         * @type {string || null}
         */
        this.DDoSAI = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;

    }
}

/**
 * DescribeListProtectThresholdConfig请求参数结构体
 * @class
 */
class DescribeListProtectThresholdConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

        /**
         * 域名搜索(查询域名与协议的CC防护阈值时使用）
         * @type {string || null}
         */
        this.FilterDomain = null;

        /**
         * 协议搜索(查询域名与协议的CC防护阈值时使用）
         * @type {string || null}
         */
        this.FilterProtocol = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;
        this.FilterDomain = 'FilterDomain' in params ? params.FilterDomain : null;
        this.FilterProtocol = 'FilterProtocol' in params ? params.FilterProtocol : null;

    }
}

/**
 * ModifyNewDomainRules返回参数结构体
 * @class
 */
class ModifyNewDomainRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功码
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CC四层黑白名单列表
 * @class
 */
class CcBlackWhiteIpPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略Id
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * IP类型，取值[black(黑名单IP), white(白名单IP)]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 黑白名单IP地址
         * @type {string || null}
         */
        this.BlackWhiteIp = null;

        /**
         * 掩码
         * @type {number || null}
         */
        this.Mask = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.BlackWhiteIp = 'BlackWhiteIp' in params ? params.BlackWhiteIp : null;
        this.Mask = 'Mask' in params ? params.Mask : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeDDoSConnectLimitList返回参数结构体
 * @class
 */
class DescribeDDoSConnectLimitListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接抑制配置总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 连接抑制配置详情信息
         * @type {Array.<ConnectLimitRelation> || null}
         */
        this.ConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new ConnectLimitRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * L7规则健康检查参数
 * @class
 */
class L7RuleHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置状态，0： 正常，1：配置中，2：配置失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * =1表示开启；=0表示关闭
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 检查目录的URL，默认为/
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 检测间隔时间，单位秒
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 健康阈值，单位次
         * @type {number || null}
         */
        this.AliveNum = null;

        /**
         * 不健康阈值，单位次
         * @type {number || null}
         */
        this.KickNum = null;

        /**
         * HTTP请求方式，取值[HEAD,GET]
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 健康检查判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 是否同时下发http和https规则健康检查配置
         * @type {number || null}
         */
        this.ProtocolFlag = null;

        /**
         * 被动探测开关，=1表示开启；=0表示关闭
         * @type {number || null}
         */
        this.PassiveEnable = null;

        /**
         * 被动探测不健康屏蔽时间
         * @type {number || null}
         */
        this.BlockInter = null;

        /**
         * 被动探测不健康统计间隔
         * @type {number || null}
         */
        this.FailedCountInter = null;

        /**
         * 被动探测不健康阈值
         * @type {number || null}
         */
        this.FailedThreshold = null;

        /**
         * 被动探测判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和
         * @type {number || null}
         */
        this.PassiveStatusCode = null;

        /**
         * 被动探测配置状态，0： 正常，1：配置中，2：配置失败
         * @type {number || null}
         */
        this.PassiveStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.AliveNum = 'AliveNum' in params ? params.AliveNum : null;
        this.KickNum = 'KickNum' in params ? params.KickNum : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.ProtocolFlag = 'ProtocolFlag' in params ? params.ProtocolFlag : null;
        this.PassiveEnable = 'PassiveEnable' in params ? params.PassiveEnable : null;
        this.BlockInter = 'BlockInter' in params ? params.BlockInter : null;
        this.FailedCountInter = 'FailedCountInter' in params ? params.FailedCountInter : null;
        this.FailedThreshold = 'FailedThreshold' in params ? params.FailedThreshold : null;
        this.PassiveStatusCode = 'PassiveStatusCode' in params ? params.PassiveStatusCode : null;
        this.PassiveStatus = 'PassiveStatus' in params ? params.PassiveStatus : null;

    }
}

/**
 * ModifyPacketFilterConfig返回参数结构体
 * @class
 */
class ModifyPacketFilterConfigResponse extends  AbstractModel {
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
 * DescribeCCLevelPolicy请求参数结构体
 * @class
 */
class DescribeCCLevelPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP值
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，可取值HTTP，HTTPS
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * CreateWaterPrintConfig返回参数结构体
 * @class
 */
class CreateWaterPrintConfigResponse extends  AbstractModel {
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
 * DescribeOverviewAttackTrend请求参数结构体
 * @class
 */
class DescribeOverviewAttackTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击类型，取值ddos， cc
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 纬度，当前仅支持attackcount
         * @type {string || null}
         */
        this.Dimension = null;

        /**
         * 周期，当前仅支持86400
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 防护概览攻击趋势开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 防护概览攻击趋势结束时间
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeListBGPIPInstances请求参数结构体
 * @class
 */
class DescribeListBGPIPInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为20;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

        /**
         * 资产实例ID搜索，例如，bgpip-00000001
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * 高防IP线路搜索，取值为[
1：BGP线路
2：电信
3：联通
4：移动
99：第三方合作线路
]
         * @type {number || null}
         */
        this.FilterLine = null;

        /**
         * 地域搜索，例如，ap-guangzhou
         * @type {string || null}
         */
        this.FilterRegion = null;

        /**
         * 名称搜索
         * @type {string || null}
         */
        this.FilterName = null;

        /**
         * 是否只获取高防弹性公网IP实例。填写时，只能填写1或者0。当填写1时，表示返回高防弹性公网IP实例。当填写0时，表示返回非高防弹性公网IP实例。
         * @type {number || null}
         */
        this.FilterEipType = null;

        /**
         * 高防弹性公网IP实例的绑定状态搜索条件，取值范围 [BINDING、 BIND、UNBINDING、UNBIND]。该搜索条件只在FilterEipType=1时才有效。
         * @type {Array.<string> || null}
         */
        this.FilterEipEipAddressStatus = null;

        /**
         * 是否只获取安全加速实例。填写时，只能填写1或者0。当填写1时，表示返回安全加速实例。当填写0时，表示返回非安全加速实例。
         * @type {number || null}
         */
        this.FilterDamDDoSStatus = null;

        /**
         * 获取特定状态的资源，运行中填idle，攻击中填attacking，封堵中填blocking，试用资源填trial
         * @type {string || null}
         */
        this.FilterStatus = null;

        /**
         * 获取特定的实例Cname
         * @type {string || null}
         */
        this.FilterCname = null;

        /**
         * 批量查询实例ID对应的高防IP实例资源
         * @type {Array.<string> || null}
         */
        this.FilterInstanceIdList = null;

        /**
         * 标签搜索
         * @type {TagFilter || null}
         */
        this.FilterTag = null;

        /**
         * 按照套餐类型进行过滤
         * @type {Array.<string> || null}
         */
        this.FilterPackType = null;

        /**
         * 重保护航搜索
         * @type {number || null}
         */
        this.FilterConvoy = null;

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
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterLine = 'FilterLine' in params ? params.FilterLine : null;
        this.FilterRegion = 'FilterRegion' in params ? params.FilterRegion : null;
        this.FilterName = 'FilterName' in params ? params.FilterName : null;
        this.FilterEipType = 'FilterEipType' in params ? params.FilterEipType : null;
        this.FilterEipEipAddressStatus = 'FilterEipEipAddressStatus' in params ? params.FilterEipEipAddressStatus : null;
        this.FilterDamDDoSStatus = 'FilterDamDDoSStatus' in params ? params.FilterDamDDoSStatus : null;
        this.FilterStatus = 'FilterStatus' in params ? params.FilterStatus : null;
        this.FilterCname = 'FilterCname' in params ? params.FilterCname : null;
        this.FilterInstanceIdList = 'FilterInstanceIdList' in params ? params.FilterInstanceIdList : null;

        if (params.FilterTag) {
            let obj = new TagFilter();
            obj.deserialize(params.FilterTag)
            this.FilterTag = obj;
        }
        this.FilterPackType = 'FilterPackType' in params ? params.FilterPackType : null;
        this.FilterConvoy = 'FilterConvoy' in params ? params.FilterConvoy : null;

    }
}

/**
 * DescribeNewL7Rules返回参数结构体
 * @class
 */
class DescribeNewL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则列表
         * @type {Array.<NewL7RuleEntry> || null}
         */
        this.Rules = null;

        /**
         * 健康检查配置列表
         * @type {Array.<L7RuleHealth> || null}
         */
        this.Healths = null;

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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new NewL7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

        if (params.Healths) {
            this.Healths = new Array();
            for (let z in params.Healths) {
                let obj = new L7RuleHealth();
                obj.deserialize(params.Healths[z]);
                this.Healths.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 三网高防套餐详情
 * @class
 */
class StaticPackRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保底带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProtectBandwidth = null;

        /**
         * 业务带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NormalBandwidth = null;

        /**
         * 转发规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ForwardRulesLimit = null;

        /**
         * 自动续费标记
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 到期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurDeadline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectBandwidth = 'ProtectBandwidth' in params ? params.ProtectBandwidth : null;
        this.NormalBandwidth = 'NormalBandwidth' in params ? params.NormalBandwidth : null;
        this.ForwardRulesLimit = 'ForwardRulesLimit' in params ? params.ForwardRulesLimit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.CurDeadline = 'CurDeadline' in params ? params.CurDeadline : null;

    }
}

/**
 * CreatePortAclConfig请求参数结构体
 * @class
 */
class CreatePortAclConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 端口acl策略
         * @type {AclConfig || null}
         */
        this.AclConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AclConfig) {
            let obj = new AclConfig();
            obj.deserialize(params.AclConfig)
            this.AclConfig = obj;
        }

    }
}

/**
 * DescribeCCThresholdList返回参数结构体
 * @class
 */
class DescribeCCThresholdListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 清洗阈值策略列表总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 清洗阈值策略列表详情
         * @type {Array.<CCThresholdPolicy> || null}
         */
        this.ThresholdList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ThresholdList) {
            this.ThresholdList = new Array();
            for (let z in params.ThresholdList) {
                let obj = new CCThresholdPolicy();
                obj.deserialize(params.ThresholdList[z]);
                this.ThresholdList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeL7RulesBySSLCertId请求参数结构体
 * @class
 */
class DescribeL7RulesBySSLCertIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名状态，可取bindable, binded, opened, closed, all，all表示全部状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 证书ID列表
         * @type {Array.<string> || null}
         */
        this.CertIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CertIds = 'CertIds' in params ? params.CertIds : null;

    }
}

/**
 * 标签类型
 * @class
 */
class TagFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签键值列表
         * @type {Array.<string> || null}
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
 * DescribeListPacketFilterConfig返回参数结构体
 * @class
 */
class DescribeListPacketFilterConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 特征过滤配置
         * @type {Array.<PacketFilterRelation> || null}
         */
        this.ConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new PacketFilterRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSchedulingDomain请求参数结构体
 * @class
 */
class CreateSchedulingDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代表是否混合云本地化的产品。
hybrid: 宙斯盾本地化
不填写：其他
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * ModifyPortAclConfig请求参数结构体
 * @class
 */
class ModifyPortAclConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 旧端口acl策略
         * @type {AclConfig || null}
         */
        this.OldAclConfig = null;

        /**
         * 新端口acl策略
         * @type {AclConfig || null}
         */
        this.NewAclConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.OldAclConfig) {
            let obj = new AclConfig();
            obj.deserialize(params.OldAclConfig)
            this.OldAclConfig = obj;
        }

        if (params.NewAclConfig) {
            let obj = new AclConfig();
            obj.deserialize(params.NewAclConfig)
            this.NewAclConfig = obj;
        }

    }
}

/**
 * 高防包绑定IP对象
 * @class
 */
class BoundIpInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 绑定的产品分类，绑定操作为必填项，解绑操作可不填。取值[public（CVM、CLB产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * IP所属的资源实例ID，绑定操作为必填项，解绑操作可不填。例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); 如果绑定的是托管IP没有对应的资源实例ID，请填写"none";
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 产品分类下的子类型，绑定操作为必填项，解绑操作可不填。取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（弹性公网常规IP）]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 运营商，绑定操作为必填项，解绑操作可不填。0：电信；1：联通；2：移动；5：BGP
         * @type {number || null}
         */
        this.IspCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.IspCode = 'IspCode' in params ? params.IspCode : null;

    }
}

/**
 * CreateDDoSBlackWhiteIpList请求参数结构体
 * @class
 */
class CreateDDoSBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP列表
         * @type {Array.<IpSegment> || null}
         */
        this.IpList = null;

        /**
         * IP类型，取值[black(黑名单IP), white(白名单IP)]
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.IpList) {
            this.IpList = new Array();
            for (let z in params.IpList) {
                let obj = new IpSegment();
                obj.deserialize(params.IpList[z]);
                this.IpList.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ModifyCCReqLimitPolicy请求参数结构体
 * @class
 */
class ModifyCCReqLimitPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 策略Id
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 策略项
         * @type {CCReqLimitPolicyRecord || null}
         */
        this.Policy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.Policy) {
            let obj = new CCReqLimitPolicyRecord();
            obj.deserialize(params.Policy)
            this.Policy = obj;
        }

    }
}

/**
 * DescribeOverviewDDoSTrend请求参数结构体
 * @class
 */
class DescribeOverviewDDoSTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp-multip表示高防包；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 资源实例的IP列表
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * 资源实例ID
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DisassociateDDoSEipAddress返回参数结构体
 * @class
 */
class DisassociateDDoSEipAddressResponse extends  AbstractModel {
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
 * DescribeBgpBizTrend请求参数结构体
 * @class
 */
class DescribeBgpBizTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp-multip表示高防包）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 统计开始时间。 例：“2020-09-22 00:00:00”
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间。 例：“2020-09-22 00:00:00”
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计纬度，可取值intraffic, outtraffic, inpkg, outpkg
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 0表示固定时间，1表示自定义时间
         * @type {number || null}
         */
        this.Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Flag = 'Flag' in params ? params.Flag : null;

    }
}

/**
 * DeleteCCThresholdPolicy返回参数结构体
 * @class
 */
class DeleteCCThresholdPolicyResponse extends  AbstractModel {
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
 * DescribeBizHttpStatus请求参数结构体
 * @class
 */
class DescribeBizHttpStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计方式，仅支持sum
         * @type {string || null}
         */
        this.Statistics = null;

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 统计周期，可取值60，300，1800，3600， 21600，86400，单位秒
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间。 如2020-02-01 12:04:12
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间。如2020-02-03 18:03:23
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 资源Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 特定域名查询
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效
         * @type {Array.<ProtocolPort> || null}
         */
        this.ProtoInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Statistics = 'Statistics' in params ? params.Statistics : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.ProtoInfo) {
            this.ProtoInfo = new Array();
            for (let z in params.ProtoInfo) {
                let obj = new ProtocolPort();
                obj.deserialize(params.ProtoInfo[z]);
                this.ProtoInfo.push(obj);
            }
        }

    }
}

/**
 * 源站信息
 * @class
 */
class SourceServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站的地址（IP或者域名）
         * @type {string || null}
         */
        this.RealServer = null;

        /**
         * 源站的地址类型，取值[
1(域名地址)
2(IP地址)
]
         * @type {number || null}
         */
        this.RsType = null;

        /**
         * 源站的回源权重，取值1~100
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 端口号：0~65535
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServer = 'RealServer' in params ? params.RealServer : null;
        this.RsType = 'RsType' in params ? params.RsType : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * CC分级策略
 * @class
 */
class CCLevelPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 防护等级，可取值default表示默认策略，loose表示宽松，strict表示严格
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeOverviewIndex返回参数结构体
 * @class
 */
class DescribeOverviewIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP总数
         * @type {number || null}
         */
        this.AllIpCount = null;

        /**
         * 高防IP总数（包含高防包+高防IP）
         * @type {number || null}
         */
        this.AntiddosIpCount = null;

        /**
         * 攻击IP总数
         * @type {number || null}
         */
        this.AttackIpCount = null;

        /**
         * 封堵IP总数
         * @type {number || null}
         */
        this.BlockIpCount = null;

        /**
         * 高防域名总数
         * @type {number || null}
         */
        this.AntiddosDomainCount = null;

        /**
         * 攻击域名总数
         * @type {number || null}
         */
        this.AttackDomainCount = null;

        /**
         * 攻击流量峰值
         * @type {number || null}
         */
        this.MaxAttackFlow = null;

        /**
         * 当前最近一条攻击中的起始时间
         * @type {string || null}
         */
        this.NewAttackTime = null;

        /**
         * 当前最近一条攻击中的IP
         * @type {string || null}
         */
        this.NewAttackIp = null;

        /**
         * 当前最近一条攻击中的攻击类型
         * @type {string || null}
         */
        this.NewAttackType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AllIpCount = 'AllIpCount' in params ? params.AllIpCount : null;
        this.AntiddosIpCount = 'AntiddosIpCount' in params ? params.AntiddosIpCount : null;
        this.AttackIpCount = 'AttackIpCount' in params ? params.AttackIpCount : null;
        this.BlockIpCount = 'BlockIpCount' in params ? params.BlockIpCount : null;
        this.AntiddosDomainCount = 'AntiddosDomainCount' in params ? params.AntiddosDomainCount : null;
        this.AttackDomainCount = 'AttackDomainCount' in params ? params.AttackDomainCount : null;
        this.MaxAttackFlow = 'MaxAttackFlow' in params ? params.MaxAttackFlow : null;
        this.NewAttackTime = 'NewAttackTime' in params ? params.NewAttackTime : null;
        this.NewAttackIp = 'NewAttackIp' in params ? params.NewAttackIp : null;
        this.NewAttackType = 'NewAttackType' in params ? params.NewAttackType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePortAclConfigList请求参数结构体
 * @class
 */
class CreatePortAclConfigListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID列表
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * 端口acl策略
         * @type {AclConfig || null}
         */
        this.AclConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;

        if (params.AclConfig) {
            let obj = new AclConfig();
            obj.deserialize(params.AclConfig)
            this.AclConfig = obj;
        }

    }
}

/**
 * 基于端口的acl策略
 * @class
 */
class AclConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议类型, 可取值tcp, udp, all
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * 目的端口起始，可取值范围0~65535
         * @type {number || null}
         */
        this.DPortStart = null;

        /**
         * 目的端口结束，可取值范围0~65535
         * @type {number || null}
         */
        this.DPortEnd = null;

        /**
         * 来源端口起始，可取值范围0~65535
         * @type {number || null}
         */
        this.SPortStart = null;

        /**
         * 来源端口结束，可取值范围0~65535
         * @type {number || null}
         */
        this.SPortEnd = null;

        /**
         * 动作，可取值：drop， transmit， forward
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 策略优先级，数字越小，级别越高，该规则越靠前匹配，取值1-1000
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.DPortStart = 'DPortStart' in params ? params.DPortStart : null;
        this.DPortEnd = 'DPortEnd' in params ? params.DPortEnd : null;
        this.SPortStart = 'SPortStart' in params ? params.SPortStart : null;
        this.SPortEnd = 'SPortEnd' in params ? params.SPortEnd : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Priority = 'Priority' in params ? params.Priority : null;

    }
}

/**
 * DisassociateDDoSEipAddress请求参数结构体
 * @class
 */
class DisassociateDDoSEipAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID，实例ID形如：bgpip-0000011x。只能填写高防IP实例。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资源实例ID对应的高防弹性公网IP。
         * @type {string || null}
         */
        this.Eip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Eip = 'Eip' in params ? params.Eip : null;

    }
}

/**
 * SwitchWaterPrintConfig返回参数结构体
 * @class
 */
class SwitchWaterPrintConfigResponse extends  AbstractModel {
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
 * 黑白名单IP
 * @class
 */
class BlackWhiteIpRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * IP类型，取值[black(黑IP)，white(白IP)]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 黑白IP所属的实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

        /**
         * ip掩码，0表示32位完整ip
         * @type {number || null}
         */
        this.Mask = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }
        this.Mask = 'Mask' in params ? params.Mask : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DeleteWaterPrintKey返回参数结构体
 * @class
 */
class DeleteWaterPrintKeyResponse extends  AbstractModel {
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
 * Anycast高防套餐详情
 * @class
 */
class EipAddressPackRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐IP数量
         * @type {number || null}
         */
        this.IpCount = null;

        /**
         * 自动续费标记
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 当前到期时间
         * @type {string || null}
         */
        this.CurDeadline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IpCount = 'IpCount' in params ? params.IpCount : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.CurDeadline = 'CurDeadline' in params ? params.CurDeadline : null;

    }
}

/**
 * CreateDDoSBlackWhiteIpList返回参数结构体
 * @class
 */
class CreateDDoSBlackWhiteIpListResponse extends  AbstractModel {
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
 * ModifyCcBlackWhiteIpList返回参数结构体
 * @class
 */
class ModifyCcBlackWhiteIpListResponse extends  AbstractModel {
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
 * DescribeNewL7Rules请求参数结构体
 * @class
 */
class DescribeNewL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
         * @type {Array.<number> || null}
         */
        this.StatusList = null;

        /**
         * 域名搜索，选填，当需要搜索域名请填写
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * IP搜索，选填，当需要搜索IP请填写
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 一页条数，填0表示不分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 转发协议搜索，选填，取值[http, https, http/https]
         * @type {Array.<string> || null}
         */
        this.ProtocolList = null;

        /**
         * 高防IP实例的Cname
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
        this.Business = 'Business' in params ? params.Business : null;
        this.StatusList = 'StatusList' in params ? params.StatusList : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ProtocolList = 'ProtocolList' in params ? params.ProtocolList : null;
        this.Cname = 'Cname' in params ? params.Cname : null;

    }
}

/**
 * 协议封禁相关信息
 * @class
 */
class ProtocolBlockRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议封禁配置
         * @type {ProtocolBlockConfig || null}
         */
        this.ProtocolBlockConfig = null;

        /**
         * 协议封禁配置所属的实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProtocolBlockConfig) {
            let obj = new ProtocolBlockConfig();
            obj.deserialize(params.ProtocolBlockConfig)
            this.ProtocolBlockConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DescribeListPacketFilterConfig请求参数结构体
 * @class
 */
class DescribeListPacketFilterConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * DescribeOverviewIndex请求参数结构体
 * @class
 */
class DescribeOverviewIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取指标起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 拉取指标结束时间
         * @type {string || null}
         */
        this.EndTime = null;

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

    }
}

/**
 * 高防IP资产实例的使用信息统计
 * @class
 */
class BGPIPInstanceUsages extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已使用的端口规则数，单位条
         * @type {number || null}
         */
        this.PortRulesUsage = null;

        /**
         * 已使用的域名规则数，单位条
         * @type {number || null}
         */
        this.DomainRulesUsage = null;

        /**
         * 最近7天的攻击次数，单位次
         * @type {number || null}
         */
        this.Last7DayAttackCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PortRulesUsage = 'PortRulesUsage' in params ? params.PortRulesUsage : null;
        this.DomainRulesUsage = 'DomainRulesUsage' in params ? params.DomainRulesUsage : null;
        this.Last7DayAttackCount = 'Last7DayAttackCount' in params ? params.Last7DayAttackCount : null;

    }
}

/**
 * ModifyDDoSBlackWhiteIpList请求参数结构体
 * @class
 */
class ModifyDDoSBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 当前配置的黑白名单类型，取值black时表示黑名单；取值white时表示白名单
         * @type {string || null}
         */
        this.OldIpType = null;

        /**
         * 当前配置的Ip段，包含ip与掩码
         * @type {IpSegment || null}
         */
        this.OldIp = null;

        /**
         * 修改后黑白名单类型，取值black时黑名单，取值white时白名单
         * @type {string || null}
         */
        this.NewIpType = null;

        /**
         * 当前配置的Ip段，包含ip与掩码
         * @type {IpSegment || null}
         */
        this.NewIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldIpType = 'OldIpType' in params ? params.OldIpType : null;

        if (params.OldIp) {
            let obj = new IpSegment();
            obj.deserialize(params.OldIp)
            this.OldIp = obj;
        }
        this.NewIpType = 'NewIpType' in params ? params.NewIpType : null;

        if (params.NewIp) {
            let obj = new IpSegment();
            obj.deserialize(params.NewIp)
            this.NewIp = obj;
        }

    }
}

/**
 * DescribeListDDoSGeoIPBlockConfig请求参数结构体
 * @class
 */
class DescribeListDDoSGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * DescribeOverviewDDoSEventList返回参数结构体
 * @class
 */
class DescribeOverviewDDoSEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 事件列表
         * @type {Array.<OverviewDDoSEvent> || null}
         */
        this.EventList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new OverviewDDoSEvent();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCcGeoIPBlockConfig返回参数结构体
 * @class
 */
class CreateCcGeoIPBlockConfigResponse extends  AbstractModel {
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
 * DescribeOverviewAttackTrend返回参数结构体
 * @class
 */
class DescribeOverviewAttackTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 防护概览攻击趋势起始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 防护概览攻击趋势结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 周期
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 每个周期点的攻击次数
         * @type {Array.<number> || null}
         */
        this.Data = null;

        /**
         * 包含的周期点数
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
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 业务流量的http状态码聚合数据
 * @class
 */
class HttpStatusMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * http2xx回源状态码
         * @type {Array.<number> || null}
         */
        this.SourceHttp2xx = null;

        /**
         * http5xx状态码
         * @type {Array.<number> || null}
         */
        this.Http5xx = null;

        /**
         * http5xx回源状态码
         * @type {Array.<number> || null}
         */
        this.SourceHttp5xx = null;

        /**
         * http404回源状态码
         * @type {Array.<number> || null}
         */
        this.SourceHttp404 = null;

        /**
         * http4xx状态码
         * @type {Array.<number> || null}
         */
        this.Http4xx = null;

        /**
         * http4xx回源状态码
         * @type {Array.<number> || null}
         */
        this.SourceHttp4xx = null;

        /**
         * http2xx状态码
         * @type {Array.<number> || null}
         */
        this.Http2xx = null;

        /**
         * http404状态码
         * @type {Array.<number> || null}
         */
        this.Http404 = null;

        /**
         * http3xx回源状态码
         * @type {Array.<number> || null}
         */
        this.SourceHttp3xx = null;

        /**
         * http3xx状态码
         * @type {Array.<number> || null}
         */
        this.Http3xx = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceHttp2xx = 'SourceHttp2xx' in params ? params.SourceHttp2xx : null;
        this.Http5xx = 'Http5xx' in params ? params.Http5xx : null;
        this.SourceHttp5xx = 'SourceHttp5xx' in params ? params.SourceHttp5xx : null;
        this.SourceHttp404 = 'SourceHttp404' in params ? params.SourceHttp404 : null;
        this.Http4xx = 'Http4xx' in params ? params.Http4xx : null;
        this.SourceHttp4xx = 'SourceHttp4xx' in params ? params.SourceHttp4xx : null;
        this.Http2xx = 'Http2xx' in params ? params.Http2xx : null;
        this.Http404 = 'Http404' in params ? params.Http404 : null;
        this.SourceHttp3xx = 'SourceHttp3xx' in params ? params.SourceHttp3xx : null;
        this.Http3xx = 'Http3xx' in params ? params.Http3xx : null;

    }
}

/**
 * 7层转发规则
 * @class
 */
class Layer7Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发类型列表
         * @type {Array.<ProxyTypeInfo> || null}
         */
        this.ProxyTypeList = null;

        /**
         * 源站列表
         * @type {Array.<SourceServer> || null}
         */
        this.RealServers = null;

        /**
         * 资源实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetails = null;

        /**
         * 规则所属的资源实例
         * @type {Array.<RuleInstanceRelation> || null}
         */
        this.InstanceDetailRule = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口号
         * @type {number || null}
         */
        this.Vport = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.ProxyTypeList) {
            this.ProxyTypeList = new Array();
            for (let z in params.ProxyTypeList) {
                let obj = new ProxyTypeInfo();
                obj.deserialize(params.ProxyTypeList[z]);
                this.ProxyTypeList.push(obj);
            }
        }

        if (params.RealServers) {
            this.RealServers = new Array();
            for (let z in params.RealServers) {
                let obj = new SourceServer();
                obj.deserialize(params.RealServers[z]);
                this.RealServers.push(obj);
            }
        }

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }

        if (params.InstanceDetailRule) {
            this.InstanceDetailRule = new Array();
            for (let z in params.InstanceDetailRule) {
                let obj = new RuleInstanceRelation();
                obj.deserialize(params.InstanceDetailRule[z]);
                this.InstanceDetailRule.push(obj);
            }
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * ModifyPortAclConfig返回参数结构体
 * @class
 */
class ModifyPortAclConfigResponse extends  AbstractModel {
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
 * DescribeBasicDeviceStatus请求参数结构体
 * @class
 */
class DescribeBasicDeviceStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP 资源列表
         * @type {Array.<string> || null}
         */
        this.IpList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * DeleteCcGeoIPBlockConfig请求参数结构体
 * @class
 */
class DeleteCcGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * CC区域封禁配置，填写参数时配置ID不能为空
         * @type {CcGeoIPBlockConfig || null}
         */
        this.CcGeoIPBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.CcGeoIPBlockConfig) {
            let obj = new CcGeoIPBlockConfig();
            obj.deserialize(params.CcGeoIPBlockConfig)
            this.CcGeoIPBlockConfig = obj;
        }

    }
}

/**
 * DescribeCCLevelList返回参数结构体
 * @class
 */
class DescribeCCLevelListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分级策略列表总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 分级策略列表总数
         * @type {Array.<CCLevelPolicy> || null}
         */
        this.LevelList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.LevelList) {
            this.LevelList = new Array();
            for (let z in params.LevelList) {
                let obj = new CCLevelPolicy();
                obj.deserialize(params.LevelList[z]);
                this.LevelList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDDoSSpeedLimitConfig请求参数结构体
 * @class
 */
class CreateDDoSSpeedLimitConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 访问限速配置，填写参数时配置ID请为空
         * @type {DDoSSpeedLimitConfig || null}
         */
        this.DDoSSpeedLimitConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSSpeedLimitConfig) {
            let obj = new DDoSSpeedLimitConfig();
            obj.deserialize(params.DDoSSpeedLimitConfig)
            this.DDoSSpeedLimitConfig = obj;
        }

    }
}

/**
 * CreateDDoSGeoIPBlockConfig请求参数结构体
 * @class
 */
class CreateDDoSGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * DDoS区域封禁配置，填写参数时配置ID请为空
         * @type {DDoSGeoIPBlockConfig || null}
         */
        this.DDoSGeoIPBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSGeoIPBlockConfig) {
            let obj = new DDoSGeoIPBlockConfig();
            obj.deserialize(params.DDoSGeoIPBlockConfig)
            this.DDoSGeoIPBlockConfig = obj;
        }

    }
}

/**
 * CreateProtocolBlockConfig请求参数结构体
 * @class
 */
class CreateProtocolBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 协议封禁配置
         * @type {ProtocolBlockConfig || null}
         */
        this.ProtocolBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ProtocolBlockConfig) {
            let obj = new ProtocolBlockConfig();
            obj.deserialize(params.ProtocolBlockConfig)
            this.ProtocolBlockConfig = obj;
        }

    }
}

/**
 * DeleteWaterPrintKey请求参数结构体
 * @class
 */
class DeleteWaterPrintKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 水印密钥ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * 操作返回码，只用于返回成功的情况
 * @class
 */
class SuccessCode extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 成功/错误码
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * AssociateDDoSEipAddress返回参数结构体
 * @class
 */
class AssociateDDoSEipAddressResponse extends  AbstractModel {
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
 * DDoS访问限速配置相关信息
 * @class
 */
class DDoSSpeedLimitConfigRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS访问限速配置
         * @type {DDoSSpeedLimitConfig || null}
         */
        this.SpeedLimitConfig = null;

        /**
         * 配置所属的资源实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpeedLimitConfig) {
            let obj = new DDoSSpeedLimitConfig();
            obj.deserialize(params.SpeedLimitConfig)
            this.SpeedLimitConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DeleteCCLevelPolicy返回参数结构体
 * @class
 */
class DeleteCCLevelPolicyResponse extends  AbstractModel {
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
 * ModifyPacketFilterConfig请求参数结构体
 * @class
 */
class ModifyPacketFilterConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 特征过滤配置
         * @type {PacketFilterConfig || null}
         */
        this.PacketFilterConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.PacketFilterConfig) {
            let obj = new PacketFilterConfig();
            obj.deserialize(params.PacketFilterConfig)
            this.PacketFilterConfig = obj;
        }

    }
}

/**
 * DescribeBlackWhiteIpList请求参数结构体
 * @class
 */
class DescribeBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateCcGeoIPBlockConfig请求参数结构体
 * @class
 */
class CreateCcGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ip地址
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议类型
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * CC区域封禁配置
         * @type {CcGeoIPBlockConfig || null}
         */
        this.CcGeoIPBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.CcGeoIPBlockConfig) {
            let obj = new CcGeoIPBlockConfig();
            obj.deserialize(params.CcGeoIPBlockConfig)
            this.CcGeoIPBlockConfig = obj;
        }

    }
}

/**
 * DeletePortAclConfig返回参数结构体
 * @class
 */
class DeletePortAclConfigResponse extends  AbstractModel {
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
 * CreateDDoSSpeedLimitConfig返回参数结构体
 * @class
 */
class CreateDDoSSpeedLimitConfigResponse extends  AbstractModel {
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
 * DescribeNewL7RulesErrHealth返回参数结构体
 * @class
 */
class DescribeNewL7RulesErrHealthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP及错误信息，多个IP用","分割
         * @type {Array.<KeyValue> || null}
         */
        this.ErrHealths = null;

        /**
         * 异常规则的总数
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

        if (params.ErrHealths) {
            this.ErrHealths = new Array();
            for (let z in params.ErrHealths) {
                let obj = new KeyValue();
                obj.deserialize(params.ErrHealths[z]);
                this.ErrHealths.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePacketFilterConfig请求参数结构体
 * @class
 */
class DeletePacketFilterConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 特征过滤配置
         * @type {PacketFilterConfig || null}
         */
        this.PacketFilterConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.PacketFilterConfig) {
            let obj = new PacketFilterConfig();
            obj.deserialize(params.PacketFilterConfig)
            this.PacketFilterConfig = obj;
        }

    }
}

/**
 * DescribeListDDoSGeoIPBlockConfig返回参数结构体
 * @class
 */
class DescribeListDDoSGeoIPBlockConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * DDoS区域封禁配置列表
         * @type {Array.<DDoSGeoIPBlockConfigRelation> || null}
         */
        this.ConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new DDoSGeoIPBlockConfigRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBasicDeviceStatus返回参数结构体
 * @class
 */
class DescribeBasicDeviceStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回资源及状态，状态码：
1 - 封堵状态
2 - 正常状态
3 - 攻击状态
         * @type {Array.<KeyValue> || null}
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
                let obj = new KeyValue();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBgpBizTrend返回参数结构体
 * @class
 */
class DescribeBgpBizTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 曲线图各个时间点的值
         * @type {Array.<number> || null}
         */
        this.DataList = null;

        /**
         * 曲线图取值个数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 统计纬度
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 返回数组最大值
         * @type {number || null}
         */
        this.MaxData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DataList = 'DataList' in params ? params.DataList : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.MaxData = 'MaxData' in params ? params.MaxData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * L4规则回源列表
 * @class
 */
class L4RuleSource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回源IP或域名
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 权重值，取值[0,100]
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 8000
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 备份源站，1: 备份源站，0: 普通源站
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Backup = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Backup = 'Backup' in params ? params.Backup : null;

    }
}

/**
 * DescribePendingRiskInfo返回参数结构体
 * @class
 */
class DescribePendingRiskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否为付费用户，true：付费用户， false：普通用户
         * @type {boolean || null}
         */
        this.IsPaidUsr = null;

        /**
         * 攻击中的资源数量
         * @type {number || null}
         */
        this.AttackingCount = null;

        /**
         * 封堵中的资源数量
         * @type {number || null}
         */
        this.BlockingCount = null;

        /**
         * 已过期的资源数量
         * @type {number || null}
         */
        this.ExpiredCount = null;

        /**
         * 所有待处理风险事件总数
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
        this.IsPaidUsr = 'IsPaidUsr' in params ? params.IsPaidUsr : null;
        this.AttackingCount = 'AttackingCount' in params ? params.AttackingCount : null;
        this.BlockingCount = 'BlockingCount' in params ? params.BlockingCount : null;
        this.ExpiredCount = 'ExpiredCount' in params ? params.ExpiredCount : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 协议封禁配置
 * @class
 */
class ProtocolBlockConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCP封禁，取值[0(封禁关)，1(封禁开)]
         * @type {number || null}
         */
        this.DropTcp = null;

        /**
         * UDP封禁，取值[0(封禁关)，1(封禁开)]
         * @type {number || null}
         */
        this.DropUdp = null;

        /**
         * ICMP封禁，取值[0(封禁关)，1(封禁开)]
         * @type {number || null}
         */
        this.DropIcmp = null;

        /**
         * 其他协议封禁，取值[0(封禁关)，1(封禁开)]
         * @type {number || null}
         */
        this.DropOther = null;

        /**
         * 异常空连接防护，取值[0(防护关)，1(防护开)]
         * @type {number || null}
         */
        this.CheckExceptNullConnect = null;

        /**
         * ping of death防护，取值[0(防护关)，1(防护开)]
         * @type {number || null}
         */
        this.PingOfDeath = null;

        /**
         * tear drop防护，取值[0(防护关)，1(防护开)]
         * @type {number || null}
         */
        this.TearDrop = null;

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
        this.CheckExceptNullConnect = 'CheckExceptNullConnect' in params ? params.CheckExceptNullConnect : null;
        this.PingOfDeath = 'PingOfDeath' in params ? params.PingOfDeath : null;
        this.TearDrop = 'TearDrop' in params ? params.TearDrop : null;

    }
}

/**
 * DeleteCCPrecisionPolicy请求参数结构体
 * @class
 */
class DeleteCCPrecisionPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 策略Id
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * 高防IP资产实例信息
 * @class
 */
class BGPIPInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产实例的详细信息
         * @type {InstanceRelation || null}
         */
        this.InstanceDetail = null;

        /**
         * 资产实例的规格信息
         * @type {BGPIPInstanceSpecification || null}
         */
        this.SpecificationLimit = null;

        /**
         * 资产实例的使用统计信息
         * @type {BGPIPInstanceUsages || null}
         */
        this.Usage = null;

        /**
         * 资产实例所在的地域
         * @type {RegionInfo || null}
         */
        this.Region = null;

        /**
         * 资产实例的防护状态，状态码如下：
"idle"：正常状态(无攻击)
"attacking"：攻击中
"blocking"：封堵中
"creating"：创建中
"deblocking"：解封中
"isolate"：回收隔离中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 购买时间
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 资产实例的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资产实例所属的套餐包信息，
注意：当资产实例不是套餐包的实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PackInfo || null}
         */
        this.PackInfo = null;

        /**
         * 资产实例所属的三网套餐包详情，
注意：当资产实例不是三网套餐包的实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {StaticPackRelation || null}
         */
        this.StaticPackRelation = null;

        /**
         * 区分高防IP境外线路
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 区分集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Tgw = null;

        /**
         * 高防弹性公网IP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)。只对高防弹性公网IP实例有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EipAddressStatus = null;

        /**
         * 是否高防弹性公网IP实例，是为1，否为0。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EipFlag = null;

        /**
         * 资产实例所属的高防弹性公网IP套餐包详情，
注意：当资产实例不是高防弹性公网IP套餐包的实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EipAddressPackRelation || null}
         */
        this.EipAddressPackRelation = null;

        /**
         * 高防弹性公网IP关联的实例信息。
注意：当资产实例不是高防弹性公网IP实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EipAddressRelation || null}
         */
        this.EipAddressInfo = null;

        /**
         * 建议客户接入的域名，客户可使用域名接入。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 是否开启安全加速，是为1，否为0。
         * @type {number || null}
         */
        this.DamDDoSStatus = null;

        /**
         * 是否Ipv6版本的IP, 是为1，否为0
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.V6Flag = null;

        /**
         * 是否渠道版高防IP，是为1，否为0
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BGPIPChannelFlag = null;

        /**
         * 资源关联标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInfo> || null}
         */
        this.TagInfoList = null;

        /**
         * 资产实例所属的全力防护套餐包详情，
注意：当资产实例不是全力防护套餐包的实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AnycastOutPackRelation || null}
         */
        this.AnycastOutPackRelation = null;

        /**
         * 资源实例版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceVersion = null;

        /**
         * 重保实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConvoyId = null;

        /**
         * 带宽后付费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ElasticBandwidth = null;

        /**
         * 是否为EO代播的ip: 1是，0不是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EOFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceDetail) {
            let obj = new InstanceRelation();
            obj.deserialize(params.InstanceDetail)
            this.InstanceDetail = obj;
        }

        if (params.SpecificationLimit) {
            let obj = new BGPIPInstanceSpecification();
            obj.deserialize(params.SpecificationLimit)
            this.SpecificationLimit = obj;
        }

        if (params.Usage) {
            let obj = new BGPIPInstanceUsages();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }

        if (params.Region) {
            let obj = new RegionInfo();
            obj.deserialize(params.Region)
            this.Region = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.PackInfo) {
            let obj = new PackInfo();
            obj.deserialize(params.PackInfo)
            this.PackInfo = obj;
        }

        if (params.StaticPackRelation) {
            let obj = new StaticPackRelation();
            obj.deserialize(params.StaticPackRelation)
            this.StaticPackRelation = obj;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Tgw = 'Tgw' in params ? params.Tgw : null;
        this.EipAddressStatus = 'EipAddressStatus' in params ? params.EipAddressStatus : null;
        this.EipFlag = 'EipFlag' in params ? params.EipFlag : null;

        if (params.EipAddressPackRelation) {
            let obj = new EipAddressPackRelation();
            obj.deserialize(params.EipAddressPackRelation)
            this.EipAddressPackRelation = obj;
        }

        if (params.EipAddressInfo) {
            let obj = new EipAddressRelation();
            obj.deserialize(params.EipAddressInfo)
            this.EipAddressInfo = obj;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.DamDDoSStatus = 'DamDDoSStatus' in params ? params.DamDDoSStatus : null;
        this.V6Flag = 'V6Flag' in params ? params.V6Flag : null;
        this.BGPIPChannelFlag = 'BGPIPChannelFlag' in params ? params.BGPIPChannelFlag : null;

        if (params.TagInfoList) {
            this.TagInfoList = new Array();
            for (let z in params.TagInfoList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagInfoList[z]);
                this.TagInfoList.push(obj);
            }
        }

        if (params.AnycastOutPackRelation) {
            let obj = new AnycastOutPackRelation();
            obj.deserialize(params.AnycastOutPackRelation)
            this.AnycastOutPackRelation = obj;
        }
        this.InstanceVersion = 'InstanceVersion' in params ? params.InstanceVersion : null;
        this.ConvoyId = 'ConvoyId' in params ? params.ConvoyId : null;
        this.ElasticBandwidth = 'ElasticBandwidth' in params ? params.ElasticBandwidth : null;
        this.EOFlag = 'EOFlag' in params ? params.EOFlag : null;

    }
}

/**
 * DeleteWaterPrintConfig返回参数结构体
 * @class
 */
class DeleteWaterPrintConfigResponse extends  AbstractModel {
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
 * 4层转发规则
 * @class
 */
class Layer4Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源站端口，取值1~65535
         * @type {number || null}
         */
        this.BackendPort = null;

        /**
         * 转发端口，取值1~65535
         * @type {number || null}
         */
        this.FrontendPort = null;

        /**
         * 转发协议，取值[
TCP(TCP协议)
UDP(UDP协议)
]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 源站列表
         * @type {Array.<SourceServer> || null}
         */
        this.RealServers = null;

        /**
         * 资源实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetails = null;

        /**
         * 规则所属的资源实例
         * @type {Array.<RuleInstanceRelation> || null}
         */
        this.InstanceDetailRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackendPort = 'BackendPort' in params ? params.BackendPort : null;
        this.FrontendPort = 'FrontendPort' in params ? params.FrontendPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.RealServers) {
            this.RealServers = new Array();
            for (let z in params.RealServers) {
                let obj = new SourceServer();
                obj.deserialize(params.RealServers[z]);
                this.RealServers.push(obj);
            }
        }

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }

        if (params.InstanceDetailRule) {
            this.InstanceDetailRule = new Array();
            for (let z in params.InstanceDetailRule) {
                let obj = new RuleInstanceRelation();
                obj.deserialize(params.InstanceDetailRule[z]);
                this.InstanceDetailRule.push(obj);
            }
        }

    }
}

/**
 * DeletePacketFilterConfig返回参数结构体
 * @class
 */
class DeletePacketFilterConfigResponse extends  AbstractModel {
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
 * CreateProtocolBlockConfig返回参数结构体
 * @class
 */
class CreateProtocolBlockConfigResponse extends  AbstractModel {
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
 * 高防IP资产实例的规格信息
 * @class
 */
class BGPIPInstanceSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保底防护峰值，单位Mbps
         * @type {number || null}
         */
        this.ProtectBandwidth = null;

        /**
         * CC防护峰值，单位qps
         * @type {number || null}
         */
        this.ProtectCCQPS = null;

        /**
         * 正常业务带宽，单位Mbps
         * @type {number || null}
         */
        this.NormalBandwidth = null;

        /**
         * 转发规则数，单位条
         * @type {number || null}
         */
        this.ForwardRulesLimit = null;

        /**
         * 自动续费状态，取值[
0：没有开启自动续费
1：开启了自动续费
]
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 高防IP线路，取值为[
1：BGP线路
2：电信
3：联通
4：移动
99：第三方合作线路
]
         * @type {number || null}
         */
        this.Line = null;

        /**
         * 弹性防护峰值，单位Mbps
         * @type {number || null}
         */
        this.ElasticBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectBandwidth = 'ProtectBandwidth' in params ? params.ProtectBandwidth : null;
        this.ProtectCCQPS = 'ProtectCCQPS' in params ? params.ProtectCCQPS : null;
        this.NormalBandwidth = 'NormalBandwidth' in params ? params.NormalBandwidth : null;
        this.ForwardRulesLimit = 'ForwardRulesLimit' in params ? params.ForwardRulesLimit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.Line = 'Line' in params ? params.Line : null;
        this.ElasticBandwidth = 'ElasticBandwidth' in params ? params.ElasticBandwidth : null;

    }
}

/**
 * CreateIPAlarmThresholdConfig返回参数结构体
 * @class
 */
class CreateIPAlarmThresholdConfigResponse extends  AbstractModel {
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
 * CreatePortAclConfigList返回参数结构体
 * @class
 */
class CreatePortAclConfigListResponse extends  AbstractModel {
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
 * DeleteWaterPrintConfig请求参数结构体
 * @class
 */
class DeleteWaterPrintConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeDDoSBlackWhiteIpList请求参数结构体
 * @class
 */
class DescribeDDoSBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 连接抑制列表
 * @class
 */
class ConnectLimitRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接抑制配置
         * @type {ConnectLimitConfig || null}
         */
        this.ConnectLimitConfig = null;

        /**
         * 连接抑制关联的实例信息
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ConnectLimitConfig) {
            let obj = new ConnectLimitConfig();
            obj.deserialize(params.ConnectLimitConfig)
            this.ConnectLimitConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DescribeListBlackWhiteIpList返回参数结构体
 * @class
 */
class DescribeListBlackWhiteIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 黑白IP列表
         * @type {Array.<BlackWhiteIpRelation> || null}
         */
        this.IpList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.IpList) {
            this.IpList = new Array();
            for (let z in params.IpList) {
                let obj = new BlackWhiteIpRelation();
                obj.deserialize(params.IpList[z]);
                this.IpList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DDoS防护的AI防护开关
 * @class
 */
class DDoSAIRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * AI防护开关，取值[
on(开启)
off(关闭)
]
         * @type {string || null}
         */
        this.DDoSAI = null;

        /**
         * AI防护开关所属的资源实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DescribeCCReqLimitPolicyList请求参数结构体
 * @class
 */
class DescribeCCReqLimitPolicyListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp-multip表示高防包，bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP地址，普通高防IP要传该字段
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名，普通高防IP要传该字段
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，普通高防IP要传该字段
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * 端口acl策略配置与高防资源关联
 * @class
 */
class AclConfigRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * acl策略
         * @type {AclConfig || null}
         */
        this.AclConfig = null;

        /**
         * 实例列表
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AclConfig) {
            let obj = new AclConfig();
            obj.deserialize(params.AclConfig)
            this.AclConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DescribeListDDoSSpeedLimitConfig返回参数结构体
 * @class
 */
class DescribeListDDoSSpeedLimitConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 访问限速配置列表
         * @type {Array.<DDoSSpeedLimitConfigRelation> || null}
         */
        this.ConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new DDoSSpeedLimitConfigRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSThreshold返回参数结构体
 * @class
 */
class ModifyDDoSThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功码
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDDoSGeoIPBlockConfig返回参数结构体
 * @class
 */
class CreateDDoSGeoIPBlockConfigResponse extends  AbstractModel {
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
 * CC精准防护策略信息
 * @class
 */
class CCPrecisionPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略Id
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Ip地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 策略方式（丢弃或验证码）
         * @type {string || null}
         */
        this.PolicyAction = null;

        /**
         * 策略列表
         * @type {Array.<CCPrecisionPlyRecord> || null}
         */
        this.PolicyList = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.PolicyAction = 'PolicyAction' in params ? params.PolicyAction : null;

        if (params.PolicyList) {
            this.PolicyList = new Array();
            for (let z in params.PolicyList) {
                let obj = new CCPrecisionPlyRecord();
                obj.deserialize(params.PolicyList[z]);
                this.PolicyList.push(obj);
            }
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeOverviewDDoSEventList请求参数结构体
 * @class
 */
class DescribeOverviewDDoSEventListRequest extends  AbstractModel {
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
         * 可选按攻击状态过滤，start：攻击中；end：攻击结束
         * @type {string || null}
         */
        this.AttackStatus = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 记录条数
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
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 域名与协议纬度的CC防护阈值
 * @class
 */
class ListenerCcThreholdConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议（可取值https）
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 开关状态（0：关闭，1：开启）
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * cc防护阈值
         * @type {number || null}
         */
        this.CCThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;

    }
}

/**
 * 高防弹性公网IP关联信息
 * @class
 */
class EipAddressRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 高防弹性公网IP绑定的实例地区，例如hk代表香港
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EipAddressRegion = null;

        /**
         * 绑定的资源实例ID。可能是一个CVM。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EipBoundRscIns = null;

        /**
         * 绑定的弹性网卡ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EipBoundRscEni = null;

        /**
         * 绑定的资源内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EipBoundRscVip = null;

        /**
         * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipAddressRegion = 'EipAddressRegion' in params ? params.EipAddressRegion : null;
        this.EipBoundRscIns = 'EipBoundRscIns' in params ? params.EipBoundRscIns : null;
        this.EipBoundRscEni = 'EipBoundRscEni' in params ? params.EipBoundRscEni : null;
        this.EipBoundRscVip = 'EipBoundRscVip' in params ? params.EipBoundRscVip : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DeleteDDoSBlackWhiteIpList请求参数结构体
 * @class
 */
class DeleteDDoSBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP列表
         * @type {Array.<IpSegment> || null}
         */
        this.IpList = null;

        /**
         * IP类型，取值[black(黑名单IP), white(白名单IP)]
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.IpList) {
            this.IpList = new Array();
            for (let z in params.IpList) {
                let obj = new IpSegment();
                obj.deserialize(params.IpList[z]);
                this.IpList.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 套餐包信息
 * @class
 */
class PackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐包的类型，取值[
staticpack：高防IP三网套餐包
insurance：保险套餐包
]
         * @type {string || null}
         */
        this.PackType = null;

        /**
         * 套餐包的ID
         * @type {string || null}
         */
        this.PackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackType = 'PackType' in params ? params.PackType : null;
        this.PackId = 'PackId' in params ? params.PackId : null;

    }
}

/**
 * CreateDDoSConnectLimit返回参数结构体
 * @class
 */
class CreateDDoSConnectLimitResponse extends  AbstractModel {
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
 * 水印配置相关信息
 * @class
 */
class WaterPrintRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印配置
         * @type {WaterPrintConfig || null}
         */
        this.WaterPrintConfig = null;

        /**
         * 水印配置所属的资源实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WaterPrintConfig) {
            let obj = new WaterPrintConfig();
            obj.deserialize(params.WaterPrintConfig)
            this.WaterPrintConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * IP线路信息
 * @class
 */
class IPLineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP线路类型，取值[
"bgp"：BGP线路IP
"ctcc"：电信线路IP
"cucc"：联通线路IP
"cmcc"：移动线路IP
"abroad"：境外线路IP
]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 线路IP
         * @type {string || null}
         */
        this.Eip = null;

        /**
         * 实例对应的cname
         * @type {string || null}
         */
        this.Cname = null;

        /**
         * 资源flag，0：高防包资源，1：高防IP资源，2：非高防资源IP
         * @type {number || null}
         */
        this.ResourceFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Eip = 'Eip' in params ? params.Eip : null;
        this.Cname = 'Cname' in params ? params.Cname : null;
        this.ResourceFlag = 'ResourceFlag' in params ? params.ResourceFlag : null;

    }
}

/**
 * DescribeCcBlackWhiteIpList请求参数结构体
 * @class
 */
class DescribeCcBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp-multip：表示高防包；bgpip：表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 指定特定实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * IP地址，普通高防IP要传该字段
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名，普通高防IP要传该字段
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，普通高防IP要传该字段
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 筛选IP，需要筛选黑白名单IP时传该字段
         * @type {string || null}
         */
        this.FilterIp = null;

        /**
         * 黑白名单筛选字段，需要筛选黑白名单列表时传该字段
         * @type {string || null}
         */
        this.FilterType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;
        this.FilterType = 'FilterType' in params ? params.FilterType : null;

    }
}

/**
 * DescribeListListener返回参数结构体
 * @class
 */
class DescribeListListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 4层转发监听器列表
         * @type {Array.<Layer4Rule> || null}
         */
        this.Layer4Listeners = null;

        /**
         * 7层转发监听器列表
         * @type {Array.<Layer7Rule> || null}
         */
        this.Layer7Listeners = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Layer4Listeners) {
            this.Layer4Listeners = new Array();
            for (let z in params.Layer4Listeners) {
                let obj = new Layer4Rule();
                obj.deserialize(params.Layer4Listeners[z]);
                this.Layer4Listeners.push(obj);
            }
        }

        if (params.Layer7Listeners) {
            this.Layer7Listeners = new Array();
            for (let z in params.Layer7Listeners) {
                let obj = new Layer7Rule();
                obj.deserialize(params.Layer7Listeners[z]);
                this.Layer7Listeners.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeletePortAclConfig请求参数结构体
 * @class
 */
class DeletePortAclConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 端口acl策略
         * @type {AclConfig || null}
         */
        this.AclConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.AclConfig) {
            let obj = new AclConfig();
            obj.deserialize(params.AclConfig)
            this.AclConfig = obj;
        }

    }
}

/**
 * DescribePendingRiskInfo请求参数结构体
 * @class
 */
class DescribePendingRiskInfoRequest extends  AbstractModel {
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
 * CreatePortAclConfig返回参数结构体
 * @class
 */
class CreatePortAclConfigResponse extends  AbstractModel {
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
 * ModifyDDoSLevel返回参数结构体
 * @class
 */
class ModifyDDoSLevelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防护等级，取值[low,middle,high]
         * @type {string || null}
         */
        this.DDoSLevel = null;

        /**
         * 资源ID
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
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL7RuleCerts返回参数结构体
 * @class
 */
class CreateL7RuleCertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功码
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCCPrecisionPolicy请求参数结构体
 * @class
 */
class CreateCCPrecisionPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP值
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 协议， 可取值HTTP，HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 策略方式，可取值alg表示验证码，drop表示丢弃
         * @type {string || null}
         */
        this.PolicyAction = null;

        /**
         * 策略记录
         * @type {Array.<CCPrecisionPlyRecord> || null}
         */
        this.PolicyList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.PolicyAction = 'PolicyAction' in params ? params.PolicyAction : null;

        if (params.PolicyList) {
            this.PolicyList = new Array();
            for (let z in params.PolicyList) {
                let obj = new CCPrecisionPlyRecord();
                obj.deserialize(params.PolicyList[z]);
                this.PolicyList.push(obj);
            }
        }

    }
}

/**
 * 连接抑制相关配置
 * @class
 */
class ConnectLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基于源IP+目的IP的每秒新建数限制
         * @type {number || null}
         */
        this.SdNewLimit = null;

        /**
         * 基于目的IP的每秒新建数限制
         * @type {number || null}
         */
        this.DstNewLimit = null;

        /**
         * 基于源IP+目的IP的并发连接控制
         * @type {number || null}
         */
        this.SdConnLimit = null;

        /**
         * 基于目的IP+目的端口的并发连接控制
         * @type {number || null}
         */
        this.DstConnLimit = null;

        /**
         * 基于连接抑制触发阈值，取值范围[0,4294967295]
         * @type {number || null}
         */
        this.BadConnThreshold = null;

        /**
         * 异常连接检测条件，空连接防护开关，，取值范围[0,1]
         * @type {number || null}
         */
        this.NullConnEnable = null;

        /**
         * 异常连接检测条件，连接超时，，取值范围[0,65535]
         * @type {number || null}
         */
        this.ConnTimeout = null;

        /**
         * 异常连接检测条件，syn占比ack百分比，，取值范围[0,100]
         * @type {number || null}
         */
        this.SynRate = null;

        /**
         * 异常连接检测条件，syn阈值，取值范围[0,100]
         * @type {number || null}
         */
        this.SynLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdNewLimit = 'SdNewLimit' in params ? params.SdNewLimit : null;
        this.DstNewLimit = 'DstNewLimit' in params ? params.DstNewLimit : null;
        this.SdConnLimit = 'SdConnLimit' in params ? params.SdConnLimit : null;
        this.DstConnLimit = 'DstConnLimit' in params ? params.DstConnLimit : null;
        this.BadConnThreshold = 'BadConnThreshold' in params ? params.BadConnThreshold : null;
        this.NullConnEnable = 'NullConnEnable' in params ? params.NullConnEnable : null;
        this.ConnTimeout = 'ConnTimeout' in params ? params.ConnTimeout : null;
        this.SynRate = 'SynRate' in params ? params.SynRate : null;
        this.SynLimit = 'SynLimit' in params ? params.SynLimit : null;

    }
}

/**
 * DDoS访问限速配置
 * @class
 */
class DDoSSpeedLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限速模式，取值[
1(基于源IP限速)
2(基于目的端口限速)
]
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * 限速值，每种类型的限速值最多支持1个；该字段数组至少有一种限速值
         * @type {Array.<SpeedValue> || null}
         */
        this.SpeedValues = null;

        /**
         * 此字段已弃用，请填写新字段DstPortList。
         * @type {Array.<PortSegment> || null}
         */
        this.DstPortScopes = null;

        /**
         * 配置ID，配置添加成功后生成；添加新限制配置时不用填写此字段，修改或删除限速配置时需要填写配置ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * IP protocol numbers, 取值[
ALL(所有协议)
TCP(tcp协议)
UDP(udp协议)
SMP(smp协议)
1;2-100(自定义协议号范围,最多8个)
]
注意：当自定义协议号范围时，只能填写协议号，多个范围;分隔；当填写ALL时不能再填写其他协议或协议号。
         * @type {string || null}
         */
        this.ProtocolList = null;

        /**
         * 端口范围列表，最多8个，多个;分隔，范围表示用-；此端口范围必须填写；填写样式1:0-65535，样式2:80;443;1000-2000
         * @type {string || null}
         */
        this.DstPortList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.SpeedValues) {
            this.SpeedValues = new Array();
            for (let z in params.SpeedValues) {
                let obj = new SpeedValue();
                obj.deserialize(params.SpeedValues[z]);
                this.SpeedValues.push(obj);
            }
        }

        if (params.DstPortScopes) {
            this.DstPortScopes = new Array();
            for (let z in params.DstPortScopes) {
                let obj = new PortSegment();
                obj.deserialize(params.DstPortScopes[z]);
                this.DstPortScopes.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ProtocolList = 'ProtocolList' in params ? params.ProtocolList : null;
        this.DstPortList = 'DstPortList' in params ? params.DstPortList : null;

    }
}

/**
 * Anycast转外套餐详情
 * @class
 */
class AnycastOutPackRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务带宽(单位M)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NormalBandwidth = null;

        /**
         * 转发规则数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ForwardRulesLimit = null;

        /**
         * 自动续费标记
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 到期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurDeadline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NormalBandwidth = 'NormalBandwidth' in params ? params.NormalBandwidth : null;
        this.ForwardRulesLimit = 'ForwardRulesLimit' in params ? params.ForwardRulesLimit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.CurDeadline = 'CurDeadline' in params ? params.CurDeadline : null;

    }
}

/**
 * 防护阈值配置相关信息
 * @class
 */
class ProtectThresholdRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS防护等级，取值[
low(宽松)
middle(适中)
high(严格)
]
         * @type {string || null}
         */
        this.DDoSLevel = null;

        /**
         * DDoS清洗阈值，单位Mbps
         * @type {number || null}
         */
        this.DDoSThreshold = null;

        /**
         * DDoS的AI防护开关，取值[
on(开启)
off(关闭)
]
         * @type {string || null}
         */
        this.DDoSAI = null;

        /**
         * CC清洗开关，取值[
0(关闭)
1(开启)
]
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * CC清洗阈值，单位QPS
         * @type {number || null}
         */
        this.CCThreshold = null;

        /**
         * 所属的资源实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

        /**
         * 域名与协议纬度的防护阈值
         * @type {Array.<ListenerCcThreholdConfig> || null}
         */
        this.ListenerCcThresholdList = null;

        /**
         * SYN FLOOD流量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SynFloodThreshold = null;

        /**
         * SYN FLOOD包量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SynFloodPktThreshold = null;

        /**
         * UDP FLOOD流量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UdpFloodThreshold = null;

        /**
         * UDP FLOOD包量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UdpFloodPktThreshold = null;

        /**
         * ACK FLOOD流量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AckFloodThreshold = null;

        /**
         * ACK FLOOD包量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AckFloodPktThreshold = null;

        /**
         * SYNACK FLOOD流量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SynAckFloodThreshold = null;

        /**
         * SYNACK FLOOD包量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SynAckFloodPktThreshold = null;

        /**
         * RST FLOOD流量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RstFloodThreshold = null;

        /**
         * RST FLOOD包量阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RstFloodPktThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;
        this.DDoSThreshold = 'DDoSThreshold' in params ? params.DDoSThreshold : null;
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

        if (params.ListenerCcThresholdList) {
            this.ListenerCcThresholdList = new Array();
            for (let z in params.ListenerCcThresholdList) {
                let obj = new ListenerCcThreholdConfig();
                obj.deserialize(params.ListenerCcThresholdList[z]);
                this.ListenerCcThresholdList.push(obj);
            }
        }
        this.SynFloodThreshold = 'SynFloodThreshold' in params ? params.SynFloodThreshold : null;
        this.SynFloodPktThreshold = 'SynFloodPktThreshold' in params ? params.SynFloodPktThreshold : null;
        this.UdpFloodThreshold = 'UdpFloodThreshold' in params ? params.UdpFloodThreshold : null;
        this.UdpFloodPktThreshold = 'UdpFloodPktThreshold' in params ? params.UdpFloodPktThreshold : null;
        this.AckFloodThreshold = 'AckFloodThreshold' in params ? params.AckFloodThreshold : null;
        this.AckFloodPktThreshold = 'AckFloodPktThreshold' in params ? params.AckFloodPktThreshold : null;
        this.SynAckFloodThreshold = 'SynAckFloodThreshold' in params ? params.SynAckFloodThreshold : null;
        this.SynAckFloodPktThreshold = 'SynAckFloodPktThreshold' in params ? params.SynAckFloodPktThreshold : null;
        this.RstFloodThreshold = 'RstFloodThreshold' in params ? params.RstFloodThreshold : null;
        this.RstFloodPktThreshold = 'RstFloodPktThreshold' in params ? params.RstFloodPktThreshold : null;

    }
}

/**
 * DescribeListProtectThresholdConfig返回参数结构体
 * @class
 */
class DescribeListProtectThresholdConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 防护阈值配置列表
         * @type {Array.<ProtectThresholdRelation> || null}
         */
        this.ConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new ProtectThresholdRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 使用证书的规则集合
 * @class
 */
class CertIdInsL7Rules extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用证书的规则列表
         * @type {Array.<InsL7Rules> || null}
         */
        this.L7Rules = null;

        /**
         * 证书ID
         * @type {string || null}
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

        if (params.L7Rules) {
            this.L7Rules = new Array();
            for (let z in params.L7Rules) {
                let obj = new InsL7Rules();
                obj.deserialize(params.L7Rules[z]);
                this.L7Rules.push(obj);
            }
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * ip段数据结构
 * @class
 */
class IpSegment extends  AbstractModel {
    constructor(){
        super();

        /**
         * ip地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * ip掩码，如果为32位ip，填0
         * @type {number || null}
         */
        this.Mask = null;

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

    }
}

/**
 * CreateDefaultAlarmThreshold返回参数结构体
 * @class
 */
class CreateDefaultAlarmThresholdResponse extends  AbstractModel {
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
 * ModifyDDoSThreshold请求参数结构体
 * @class
 */
class ModifyDDoSThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS清洗阈值，取值[0, 60, 80, 100, 150, 200, 250, 300, 400, 500, 700, 1000];
当设置值为0时，表示采用默认值；
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 配置其他阈值标志位，1表示配置其他阈值
         * @type {number || null}
         */
        this.OtherThresholdFlag = null;

        /**
         * SYN FLOOD流量阈值
         * @type {number || null}
         */
        this.SynFloodThreshold = null;

        /**
         * SYN FLOOD包量阈值
         * @type {number || null}
         */
        this.SynFloodPktThreshold = null;

        /**
         * UDP FLOOD流量阈值
         * @type {number || null}
         */
        this.UdpFloodThreshold = null;

        /**
         * UDP FLOOD包量阈值
         * @type {number || null}
         */
        this.UdpFloodPktThreshold = null;

        /**
         * ACK FLOOD流量阈值
         * @type {number || null}
         */
        this.AckFloodThreshold = null;

        /**
         * ACK FLOOD包量阈值
         * @type {number || null}
         */
        this.AckFloodPktThreshold = null;

        /**
         * SYNACK FLOOD流量阈值
         * @type {number || null}
         */
        this.SynAckFloodThreshold = null;

        /**
         * SYNACK FLOOD包量阈值
         * @type {number || null}
         */
        this.SynAckFloodPktThreshold = null;

        /**
         * RST FLOOD流量阈值
         * @type {number || null}
         */
        this.RstFloodThreshold = null;

        /**
         * RST FLOOD包量阈值
         * @type {number || null}
         */
        this.RstFloodPktThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.OtherThresholdFlag = 'OtherThresholdFlag' in params ? params.OtherThresholdFlag : null;
        this.SynFloodThreshold = 'SynFloodThreshold' in params ? params.SynFloodThreshold : null;
        this.SynFloodPktThreshold = 'SynFloodPktThreshold' in params ? params.SynFloodPktThreshold : null;
        this.UdpFloodThreshold = 'UdpFloodThreshold' in params ? params.UdpFloodThreshold : null;
        this.UdpFloodPktThreshold = 'UdpFloodPktThreshold' in params ? params.UdpFloodPktThreshold : null;
        this.AckFloodThreshold = 'AckFloodThreshold' in params ? params.AckFloodThreshold : null;
        this.AckFloodPktThreshold = 'AckFloodPktThreshold' in params ? params.AckFloodPktThreshold : null;
        this.SynAckFloodThreshold = 'SynAckFloodThreshold' in params ? params.SynAckFloodThreshold : null;
        this.SynAckFloodPktThreshold = 'SynAckFloodPktThreshold' in params ? params.SynAckFloodPktThreshold : null;
        this.RstFloodThreshold = 'RstFloodThreshold' in params ? params.RstFloodThreshold : null;
        this.RstFloodPktThreshold = 'RstFloodPktThreshold' in params ? params.RstFloodPktThreshold : null;

    }
}

/**
 * ModifyDDoSLevel请求参数结构体
 * @class
 */
class ModifyDDoSLevelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * =get表示读取防护等级；=set表示修改防护等级
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 防护等级，取值[low,middle,high]；当Method=set时必填
         * @type {string || null}
         */
        this.DDoSLevel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;

    }
}

/**
 * DescribeListSchedulingDomain返回参数结构体
 * @class
 */
class DescribeListSchedulingDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 调度域名信息列表
         * @type {Array.<SchedulingDomainInfo> || null}
         */
        this.DomainList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DomainList) {
            this.DomainList = new Array();
            for (let z in params.DomainList) {
                let obj = new SchedulingDomainInfo();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListIPAlarmConfig返回参数结构体
 * @class
 */
class DescribeListIPAlarmConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * IP告警阈值配置列表
         * @type {Array.<IPAlarmThresholdRelation> || null}
         */
        this.ConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new IPAlarmThresholdRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CC地域封禁列表详情
 * @class
 */
class CcGeoIpPolicyNew extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略Id
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，可取值HTTP，HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 用户动作，drop或alg
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 地域类型，分为china, oversea与customized
         * @type {string || null}
         */
        this.RegionType = null;

        /**
         * 用户选择封禁的地域ID列表
         * @type {Array.<number> || null}
         */
        this.AreaList = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.RegionType = 'RegionType' in params ? params.RegionType : null;
        this.AreaList = 'AreaList' in params ? params.AreaList : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * ModifyDDoSBlackWhiteIpList返回参数结构体
 * @class
 */
class ModifyDDoSBlackWhiteIpListResponse extends  AbstractModel {
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
 * CC频率限制策略
 * @class
 */
class CCReqLimitPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略Id
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Ip地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 协议，可取值HTTP，HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 策略项
         * @type {CCReqLimitPolicyRecord || null}
         */
        this.PolicyRecord = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.PolicyRecord) {
            let obj = new CCReqLimitPolicyRecord();
            obj.deserialize(params.PolicyRecord)
            this.PolicyRecord = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeCCPrecisionPlyList请求参数结构体
 * @class
 */
class DescribeCCPrecisionPlyListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip-multip：表示高防包；bgpip：表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定特定实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP地址，普通高防IP要传该字段
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名，普通高防IP要传该字段
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，普通高防IP要传该字段
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * Protocol、Port参数
 * @class
 */
class ProtocolPort extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议（tcp；udp）
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口
         * @type {number || null}
         */
        this.Port = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * DescribeCCLevelList请求参数结构体
 * @class
 */
class DescribeCCLevelListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp-multip表示高防包）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyCCThresholdPolicy请求参数结构体
 * @class
 */
class ModifyCCThresholdPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，可取值HTTP，HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 清洗阈值，-1表示开启“默认”模式
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

    }
}

/**
 * DeleteDDoSGeoIPBlockConfig返回参数结构体
 * @class
 */
class DeleteDDoSGeoIPBlockConfigResponse extends  AbstractModel {
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
 * DescribeListDDoSAI请求参数结构体
 * @class
 */
class DescribeListDDoSAIRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * DescribeListIPAlarmConfig请求参数结构体
 * @class
 */
class DescribeListIPAlarmConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * 告警阈值类型搜索，取值[
1(入流量告警阈值)
2(攻击清洗流量告警阈值)
]
         * @type {number || null}
         */
        this.FilterAlarmType = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

        /**
         * 高防IP实例资源的cname
         * @type {string || null}
         */
        this.FilterCname = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterAlarmType = 'FilterAlarmType' in params ? params.FilterAlarmType : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;
        this.FilterCname = 'FilterCname' in params ? params.FilterCname : null;

    }
}

/**
 * 端口段信息
 * @class
 */
class PortSegment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始端口，取值1~65535
         * @type {number || null}
         */
        this.BeginPort = null;

        /**
         * 结束端口，取值1~65535，必须不小于起始端口
         * @type {number || null}
         */
        this.EndPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginPort = 'BeginPort' in params ? params.BeginPort : null;
        this.EndPort = 'EndPort' in params ? params.EndPort : null;

    }
}

/**
 * CreateNewL7Rules请求参数结构体
 * @class
 */
class CreateNewL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则列表
         * @type {Array.<L7RuleEntry> || null}
         */
        this.Rules = null;

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID列表
         * @type {Array.<string> || null}
         */
        this.IdList = null;

        /**
         * 资源IP列表
         * @type {Array.<string> || null}
         */
        this.VipList = null;

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
                let obj = new L7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.IdList = 'IdList' in params ? params.IdList : null;
        this.VipList = 'VipList' in params ? params.VipList : null;

    }
}

/**
 * DescribeOverviewCCTrend返回参数结构体
 * @class
 */
class DescribeOverviewCCTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值个数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 值数组
         * @type {Array.<number> || null}
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
        this.Count = 'Count' in params ? params.Count : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCReqLimitPolicy返回参数结构体
 * @class
 */
class ModifyCCReqLimitPolicyResponse extends  AbstractModel {
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
 * 单IP默认告警阈值配置
 * @class
 */
class DefaultAlarmThreshold extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警阈值类型，取值[
1(入流量告警阈值)
2(攻击清洗流量告警阈值)
]
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * 告警阈值，单位Mbps，取值>=0；当作为输入参数时，设置0会删除告警阈值配置；
         * @type {number || null}
         */
        this.AlarmThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;

    }
}

/**
 * 转发监听器
 * @class
 */
class ForwardListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发监听端口下限，取值1~65535
         * @type {number || null}
         */
        this.FrontendPort = null;

        /**
         * 转发协议，取值[
TCP
UDP
]
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * 转发监听端口上限，取值1~65535
         * @type {number || null}
         */
        this.FrontendPortEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FrontendPort = 'FrontendPort' in params ? params.FrontendPort : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.FrontendPortEnd = 'FrontendPortEnd' in params ? params.FrontendPortEnd : null;

    }
}

/**
 * 高防包资产实例的规格信息
 * @class
 */
class BGPInstanceSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保底防护峰值，单位Gbps
         * @type {number || null}
         */
        this.ProtectBandwidth = null;

        /**
         * 防护次数，单位次
         * @type {number || null}
         */
        this.ProtectCountLimit = null;

        /**
         * 防护IP数，单位个
         * @type {number || null}
         */
        this.ProtectIPNumberLimit = null;

        /**
         * 自动续费状态，取值[
0：没有开启自动续费
1：开启了自动续费
]
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 联合产品标记，0代表普通高防包，1代表联合高防包
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnionPackFlag = null;

        /**
         * 业务带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ServiceBandWidth = null;

        /**
         * 战斗服版本标记，0表示普通高防包，1表示战斗服高防包
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BattleEditionFlag = null;

        /**
         * 渠道版标记，0表示普通高防包，1表示渠道版高防包
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChannelEditionFlag = null;

        /**
         * 高防包企业版标记，0表示普通高防包；1表示企业版高防包
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnterpriseFlag = null;

        /**
         * 高防包企业版弹性阈值，0表示未开启；大于0为弹性防护阈值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ElasticLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectBandwidth = 'ProtectBandwidth' in params ? params.ProtectBandwidth : null;
        this.ProtectCountLimit = 'ProtectCountLimit' in params ? params.ProtectCountLimit : null;
        this.ProtectIPNumberLimit = 'ProtectIPNumberLimit' in params ? params.ProtectIPNumberLimit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.UnionPackFlag = 'UnionPackFlag' in params ? params.UnionPackFlag : null;
        this.ServiceBandWidth = 'ServiceBandWidth' in params ? params.ServiceBandWidth : null;
        this.BattleEditionFlag = 'BattleEditionFlag' in params ? params.BattleEditionFlag : null;
        this.ChannelEditionFlag = 'ChannelEditionFlag' in params ? params.ChannelEditionFlag : null;
        this.EnterpriseFlag = 'EnterpriseFlag' in params ? params.EnterpriseFlag : null;
        this.ElasticLimit = 'ElasticLimit' in params ? params.ElasticLimit : null;

    }
}

/**
 * ModifyDomainUsrName请求参数结构体
 * @class
 */
class ModifyDomainUsrNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户CNAME
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 域名名称
         * @type {string || null}
         */
        this.DomainUserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DomainUserName = 'DomainUserName' in params ? params.DomainUserName : null;

    }
}

/**
 * CreateDDoSConnectLimit请求参数结构体
 * @class
 */
class CreateDDoSConnectLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 连接抑制配置
         * @type {ConnectLimitConfig || null}
         */
        this.ConnectLimitConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ConnectLimitConfig) {
            let obj = new ConnectLimitConfig();
            obj.deserialize(params.ConnectLimitConfig)
            this.ConnectLimitConfig = obj;
        }

    }
}

/**
 * CreateWaterPrintKey请求参数结构体
 * @class
 */
class CreateWaterPrintKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeBizHttpStatus返回参数结构体
 * @class
 */
class DescribeBizHttpStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务流量http状态码统计数据
         * @type {HttpStatusMap || null}
         */
        this.HttpStatusMap = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HttpStatusMap) {
            let obj = new HttpStatusMap();
            obj.deserialize(params.HttpStatusMap)
            this.HttpStatusMap = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例7层规则
 * @class
 */
class InsL7Rules extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则在中间状态态不可修改，只可在（0， 2， 8）状态可编辑。
规则状态，0: 正常运行中, 1: 配置规则中(配置生效中), 2: 配置规则失败（配置生效失败）, 3: 删除规则中(删除生效中), 5: 删除规则失败(删除失败), 6: 等待添加规则, 7: 等待删除规则, 8: 等待上传证书, 9: 规则对应的资源不存在，被隔离, 10:等待修改规则, 11:配置修改中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InsId = null;

        /**
         * 用户AppID
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 高防端口
         * @type {string || null}
         */
        this.VirtualPort = null;

        /**
         * 证书ID
         * @type {string || null}
         */
        this.SSLId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.InsId = 'InsId' in params ? params.InsId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;

    }
}

/**
 * DescribeCCReqLimitPolicyList返回参数结构体
 * @class
 */
class DescribeCCReqLimitPolicyListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频率限制列表总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 频率限制列表详情
         * @type {Array.<CCReqLimitPolicy> || null}
         */
        this.RequestLimitPolicyList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RequestLimitPolicyList) {
            this.RequestLimitPolicyList = new Array();
            for (let z in params.RequestLimitPolicyList) {
                let obj = new CCReqLimitPolicy();
                obj.deserialize(params.RequestLimitPolicyList[z]);
                this.RequestLimitPolicyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListDDoSAI返回参数结构体
 * @class
 */
class DescribeListDDoSAIResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * AI防护开关列表
         * @type {Array.<DDoSAIRelation> || null}
         */
        this.ConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new DDoSAIRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNewL7RulesErrHealth请求参数结构体
 * @class
 */
class DescribeNewL7RulesErrHealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号(bgpip表示高防IP)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 规则Id列表
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
        this.Business = 'Business' in params ? params.Business : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * ModifyCCPrecisionPolicy返回参数结构体
 * @class
 */
class ModifyCCPrecisionPolicyResponse extends  AbstractModel {
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
 * DDoS防护的区域封禁配置
 * @class
 */
class CcGeoIPBlockConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域类型，取值[
oversea(海外)
china(国内)
customized(自定义地区)
]
         * @type {string || null}
         */
        this.RegionType = null;

        /**
         * 封禁动作，取值[
drop(拦截)
alg(人机校验)
]
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 配置ID，配置添加成功后生成；添加新配置时不用填写此字段，修改或删除配置时需要填写配置ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 当RegionType为customized时，必须填写AreaList；当RegionType为china或oversea时，AreaList为空
         * @type {Array.<number> || null}
         */
        this.AreaList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionType = 'RegionType' in params ? params.RegionType : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.AreaList = 'AreaList' in params ? params.AreaList : null;

    }
}

/**
 * ModifyDDoSSpeedLimitConfig请求参数结构体
 * @class
 */
class ModifyDDoSSpeedLimitConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 访问限速配置，填写参数时配置ID不能为空
         * @type {DDoSSpeedLimitConfig || null}
         */
        this.DDoSSpeedLimitConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSSpeedLimitConfig) {
            let obj = new DDoSSpeedLimitConfig();
            obj.deserialize(params.DDoSSpeedLimitConfig)
            this.DDoSSpeedLimitConfig = obj;
        }

    }
}

/**
 * AssociateDDoSEipAddress请求参数结构体
 * @class
 */
class AssociateDDoSEipAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID，实例ID形如：bgpip-0000011x。只能填写高防IP实例。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资源实例ID对应的高防弹性公网IP。
         * @type {string || null}
         */
        this.Eip = null;

        /**
         * 要绑定的实例 ID。实例 ID 形如：ins-11112222。可通过登录控制台查询，也可通过 DescribeInstances 接口返回值中的InstanceId获取。
         * @type {string || null}
         */
        this.CvmInstanceID = null;

        /**
         * cvm实例所在地域，例如：ap-hongkong。
         * @type {string || null}
         */
        this.CvmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Eip = 'Eip' in params ? params.Eip : null;
        this.CvmInstanceID = 'CvmInstanceID' in params ? params.CvmInstanceID : null;
        this.CvmRegion = 'CvmRegion' in params ? params.CvmRegion : null;

    }
}

/**
 * AssociateDDoSEipLoadBalancer返回参数结构体
 * @class
 */
class AssociateDDoSEipLoadBalancerResponse extends  AbstractModel {
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
 * DescribeCCThresholdList请求参数结构体
 * @class
 */
class DescribeCCThresholdListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp-multip表示高防包）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateBlackWhiteIpList请求参数结构体
 * @class
 */
class CreateBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP列表
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * IP类型，取值[black(黑名单IP), white(白名单IP)]
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ModifyDDoSGeoIPBlockConfig请求参数结构体
 * @class
 */
class ModifyDDoSGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * DDoS区域封禁配置，填写参数时配置ID不能为空
         * @type {DDoSGeoIPBlockConfig || null}
         */
        this.DDoSGeoIPBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSGeoIPBlockConfig) {
            let obj = new DDoSGeoIPBlockConfig();
            obj.deserialize(params.DDoSGeoIPBlockConfig)
            this.DDoSGeoIPBlockConfig = obj;
        }

    }
}

/**
 * DescribeBizTrend返回参数结构体
 * @class
 */
class DescribeBizTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 曲线图各个时间点的值
         * @type {Array.<number> || null}
         */
        this.DataList = null;

        /**
         * 统计纬度
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
        this.DataList = 'DataList' in params ? params.DataList : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * L7规则
 * @class
 */
class NewL7RuleEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发协议，取值[http, https]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 转发域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 负载均衡方式，取值[1(加权轮询)]
         * @type {number || null}
         */
        this.LbType = null;

        /**
         * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]
         * @type {number || null}
         */
        this.KeepEnable = null;

        /**
         * 会话保持时间，单位秒
         * @type {number || null}
         */
        this.KeepTime = null;

        /**
         * 回源方式，取值[1(域名回源)，2(IP回源)]
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 回源列表
         * @type {Array.<L4RuleSource> || null}
         */
        this.SourceList = null;

        /**
         * 区域码
         * @type {number || null}
         */
        this.Region = null;

        /**
         * 资源Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源Ip
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段；
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID
         * @type {string || null}
         */
        this.SSLId = null;

        /**
         * 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * 规则状态，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
         * @type {number || null}
         */
        this.Status = null;

        /**
         * cc防护状态，取值[0(关闭), 1(开启)]
         * @type {number || null}
         */
        this.CCStatus = null;

        /**
         * HTTPS协议的CC防护状态，取值[0(关闭), 1(开启)]
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * HTTPS协议的CC防护阈值
         * @type {number || null}
         */
        this.CCThreshold = null;

        /**
         * HTTPS协议的CC防护等级
         * @type {string || null}
         */
        this.CCLevel = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭
         * @type {number || null}
         */
        this.HttpsToHttpEnable = null;

        /**
         * 接入端口值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VirtualPort = null;

        /**
         * http强制跳转https，1表示打开，0表示关闭
         * @type {number || null}
         */
        this.RewriteHttps = null;

        /**
         * 规则配置失败时的详细错误原因(仅当Status=2时有效)，1001证书不存在，1002证书获取失败，1003证书上传失败，1004证书已过期
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * 版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Version = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LbType = 'LbType' in params ? params.LbType : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;

        if (params.SourceList) {
            this.SourceList = new Array();
            for (let z in params.SourceList) {
                let obj = new L4RuleSource();
                obj.deserialize(params.SourceList[z]);
                this.SourceList.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CCStatus = 'CCStatus' in params ? params.CCStatus : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;
        this.CCLevel = 'CCLevel' in params ? params.CCLevel : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.HttpsToHttpEnable = 'HttpsToHttpEnable' in params ? params.HttpsToHttpEnable : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.RewriteHttps = 'RewriteHttps' in params ? params.RewriteHttps : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * DeleteCcBlackWhiteIpList返回参数结构体
 * @class
 */
class DeleteCcBlackWhiteIpListResponse extends  AbstractModel {
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
 * CreateBoundIP返回参数结构体
 * @class
 */
class CreateBoundIPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功码
         * @type {SuccessCode || null}
         */
        this.Success = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListDDoSSpeedLimitConfig请求参数结构体
 * @class
 */
class DescribeListDDoSSpeedLimitConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * 限速值类型，例如：包速率pps、带宽bps
 * @class
 */
class SpeedValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限速值类型，取值[
1(包速率pps)
2(带宽bps)
]
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 值大小
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * SwitchWaterPrintConfig请求参数结构体
 * @class
 */
class SwitchWaterPrintConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 水印开启/关闭状态，1表示开启；0表示关闭
         * @type {number || null}
         */
        this.OpenStatus = null;

        /**
         * 是否开启代理，1开启则忽略IP+端口校验；0关闭则需要IP+端口校验
         * @type {number || null}
         */
        this.CloudSdkProxy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OpenStatus = 'OpenStatus' in params ? params.OpenStatus : null;
        this.CloudSdkProxy = 'CloudSdkProxy' in params ? params.CloudSdkProxy : null;

    }
}

/**
 * AssociateDDoSEipLoadBalancer请求参数结构体
 * @class
 */
class AssociateDDoSEipLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID，实例ID形如：bgpip-0000011x。只能填写高防IP实例。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资源实例ID对应的高防弹性公网IP。
         * @type {string || null}
         */
        this.Eip = null;

        /**
         * 要绑定的负载均衡ID。负载均衡 ID 形如：lb-0000002i。可通过登录控制台查询，也可通过 DescribeLoadBalancers 接口返回值中的LoadBalancerId获取。
         * @type {string || null}
         */
        this.LoadBalancerID = null;

        /**
         * CLB所在地域，例如：ap-hongkong。
         * @type {string || null}
         */
        this.LoadBalancerRegion = null;

        /**
         * CLB内网IP
         * @type {string || null}
         */
        this.Vip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Eip = 'Eip' in params ? params.Eip : null;
        this.LoadBalancerID = 'LoadBalancerID' in params ? params.LoadBalancerID : null;
        this.LoadBalancerRegion = 'LoadBalancerRegion' in params ? params.LoadBalancerRegion : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * ModifyCCPrecisionPolicy请求参数结构体
 * @class
 */
class ModifyCCPrecisionPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 策略Id
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 策略方式。可取值：alg、drop。alg指返回验证码方式验证，drop表示该访问丢弃。
         * @type {string || null}
         */
        this.PolicyAction = null;

        /**
         * 策略记录
         * @type {Array.<CCPrecisionPlyRecord> || null}
         */
        this.PolicyList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyAction = 'PolicyAction' in params ? params.PolicyAction : null;

        if (params.PolicyList) {
            this.PolicyList = new Array();
            for (let z in params.PolicyList) {
                let obj = new CCPrecisionPlyRecord();
                obj.deserialize(params.PolicyList[z]);
                this.PolicyList.push(obj);
            }
        }

    }
}

/**
 * DeleteDDoSBlackWhiteIpList返回参数结构体
 * @class
 */
class DeleteDDoSBlackWhiteIpListResponse extends  AbstractModel {
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
 * CC清洗阈值策略
 * @class
 */
class CCThresholdPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Ip地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 清洗阈值
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * 水印防护配置
 * @class
 */
class WaterPrintConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印偏移量，取值范围[0, 100)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 是否开启，取值[
0（手动开启）
1（立即运行）
]
         * @type {number || null}
         */
        this.OpenStatus = null;

        /**
         * 水印所属的转发监听器列表
         * @type {Array.<ForwardListener> || null}
         */
        this.Listeners = null;

        /**
         * 水印添加成功后生成的水印密钥列表，一条水印最少1个密钥，最多2个密钥
         * @type {Array.<WaterPrintKey> || null}
         */
        this.Keys = null;

        /**
         * 水印检查模式, 取值[
checkall（普通模式）
shortfpcheckall（精简模式）
]
         * @type {string || null}
         */
        this.Verify = null;

        /**
         * 是否开启代理，1开启则忽略IP+端口校验；0关闭则需要IP+端口校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CloudSdkProxy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OpenStatus = 'OpenStatus' in params ? params.OpenStatus : null;

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ForwardListener();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }

        if (params.Keys) {
            this.Keys = new Array();
            for (let z in params.Keys) {
                let obj = new WaterPrintKey();
                obj.deserialize(params.Keys[z]);
                this.Keys.push(obj);
            }
        }
        this.Verify = 'Verify' in params ? params.Verify : null;
        this.CloudSdkProxy = 'CloudSdkProxy' in params ? params.CloudSdkProxy : null;

    }
}

/**
 * ModifyDomainUsrName返回参数结构体
 * @class
 */
class ModifyDomainUsrNameResponse extends  AbstractModel {
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
 * DescribeCCTrend返回参数结构体
 * @class
 */
class DescribeCCTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值个数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 值数组
         * @type {Array.<number> || null}
         */
        this.Data = null;

        /**
         * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))，incount(请求次数), dropcount(攻击次数)]
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
        this.Count = 'Count' in params ? params.Count : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSchedulingDomain返回参数结构体
 * @class
 */
class CreateSchedulingDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新创建的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EIP所属的云产品信息
 * @class
 */
class EipProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 云产品类型，取值[
public（CVM产品），
bm（黑石产品），
eni（弹性网卡），
vpngw（VPN网关），
 natgw（NAT网关），
waf（Web应用安全产品），
fpc（金融产品），
gaap（GAAP产品）, 
other(托管IP)
]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 云产品子类型，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * IP所属的云产品实例ID，例如是弹性网卡的IP，InstanceId为弹性网卡的ID(eni-*); 如果是托管IP没有对应的资源实例ID,InstanceId为""
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DeleteCcBlackWhiteIpList请求参数结构体
 * @class
 */
class DeleteCcBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 策略Id
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

/**
 * DescribeCcGeoIPBlockConfigList返回参数结构体
 * @class
 */
class DescribeCcGeoIPBlockConfigListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC地域封禁策略列表总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * CC地域封禁策略列表详情
         * @type {Array.<CcGeoIpPolicyNew> || null}
         */
        this.CcGeoIpPolicyList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.CcGeoIpPolicyList) {
            this.CcGeoIpPolicyList = new Array();
            for (let z in params.CcGeoIpPolicyList) {
                let obj = new CcGeoIpPolicyNew();
                obj.deserialize(params.CcGeoIpPolicyList[z]);
                this.CcGeoIpPolicyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDDoSAI返回参数结构体
 * @class
 */
class CreateDDoSAIResponse extends  AbstractModel {
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
 * DDoS区域封禁配置相关信息
 * @class
 */
class DDoSGeoIPBlockConfigRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS区域封禁配置
         * @type {DDoSGeoIPBlockConfig || null}
         */
        this.GeoIPBlockConfig = null;

        /**
         * 配置所属的资源实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GeoIPBlockConfig) {
            let obj = new DDoSGeoIPBlockConfig();
            obj.deserialize(params.GeoIPBlockConfig)
            this.GeoIPBlockConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DescribeListProtocolBlockConfig请求参数结构体
 * @class
 */
class DescribeListProtocolBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * DescribeListBGPInstances返回参数结构体
 * @class
 */
class DescribeListBGPInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 高防包资产实例列表
         * @type {Array.<BGPInstance> || null}
         */
        this.InstanceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new BGPInstance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签信息，用于资源列表返回关联的标签
 * @class
 */
class TagInfo extends  AbstractModel {
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
 * DescribeDDoSTrend请求参数结构体
 * @class
 */
class DescribeDDoSTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源实例的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例）
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteCCRequestLimitPolicy返回参数结构体
 * @class
 */
class DeleteCCRequestLimitPolicyResponse extends  AbstractModel {
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
 * CreateCcBlackWhiteIpList请求参数结构体
 * @class
 */
class CreateCcBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP列表
         * @type {Array.<IpSegment> || null}
         */
        this.IpList = null;

        /**
         * IP类型，取值[black(黑名单IP), white(白名单IP)]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Ip地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.IpList) {
            this.IpList = new Array();
            for (let z in params.IpList) {
                let obj = new IpSegment();
                obj.deserialize(params.IpList[z]);
                this.IpList.push(obj);
            }
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * 高防包资产实例信息
 * @class
 */
class BGPInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资产实例的详细信息
         * @type {InstanceRelation || null}
         */
        this.InstanceDetail = null;

        /**
         * 资产实例的规格信息
         * @type {BGPInstanceSpecification || null}
         */
        this.SpecificationLimit = null;

        /**
         * 资产实例的使用统计信息
         * @type {BGPInstanceUsages || null}
         */
        this.Usage = null;

        /**
         * 资产实例所在的地域
         * @type {RegionInfo || null}
         */
        this.Region = null;

        /**
         * 资产实例的防护状态，状态码如下：
"idle"：正常状态(无攻击)
"attacking"：攻击中
"blocking"：封堵中
"creating"：创建中
"deblocking"：解封中
"isolate"：回收隔离中
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 购买时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 到期时间
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 资产实例的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资产实例所属的套餐包信息，
注意：当资产实例不是套餐包的实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PackInfo || null}
         */
        this.PackInfo = null;

        /**
         * 高防包绑定的EIP属于的云产品信息
         * @type {Array.<EipProductInfo> || null}
         */
        this.EipProductInfos = null;

        /**
         * 高防包绑定状态，取值[
"idle"：绑定已完成
 "bounding"：正在绑定中
"failed"：绑定失败
]
         * @type {string || null}
         */
        this.BoundStatus = null;

        /**
         * 四层防护严格级别
         * @type {string || null}
         */
        this.DDoSLevel = null;

        /**
         * CC防护开关
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * 资源关联标签
         * @type {Array.<TagInfo> || null}
         */
        this.TagInfoList = null;

        /**
         * 新版本1ip高防包
         * @type {number || null}
         */
        this.IpCountNewFlag = null;

        /**
         * 攻击封堵套餐标记
         * @type {number || null}
         */
        this.VitalityVersion = null;

        /**
         * 网络线路
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Line = null;

        /**
         * 弹性业务带宽开关
         * @type {number || null}
         */
        this.ElasticServiceBandwidth = null;

        /**
         * 赠送的业务带宽
         * @type {number || null}
         */
        this.GiftServiceBandWidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceDetail) {
            let obj = new InstanceRelation();
            obj.deserialize(params.InstanceDetail)
            this.InstanceDetail = obj;
        }

        if (params.SpecificationLimit) {
            let obj = new BGPInstanceSpecification();
            obj.deserialize(params.SpecificationLimit)
            this.SpecificationLimit = obj;
        }

        if (params.Usage) {
            let obj = new BGPInstanceUsages();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }

        if (params.Region) {
            let obj = new RegionInfo();
            obj.deserialize(params.Region)
            this.Region = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.PackInfo) {
            let obj = new PackInfo();
            obj.deserialize(params.PackInfo)
            this.PackInfo = obj;
        }

        if (params.EipProductInfos) {
            this.EipProductInfos = new Array();
            for (let z in params.EipProductInfos) {
                let obj = new EipProductInfo();
                obj.deserialize(params.EipProductInfos[z]);
                this.EipProductInfos.push(obj);
            }
        }
        this.BoundStatus = 'BoundStatus' in params ? params.BoundStatus : null;
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;

        if (params.TagInfoList) {
            this.TagInfoList = new Array();
            for (let z in params.TagInfoList) {
                let obj = new TagInfo();
                obj.deserialize(params.TagInfoList[z]);
                this.TagInfoList.push(obj);
            }
        }
        this.IpCountNewFlag = 'IpCountNewFlag' in params ? params.IpCountNewFlag : null;
        this.VitalityVersion = 'VitalityVersion' in params ? params.VitalityVersion : null;
        this.Line = 'Line' in params ? params.Line : null;
        this.ElasticServiceBandwidth = 'ElasticServiceBandwidth' in params ? params.ElasticServiceBandwidth : null;
        this.GiftServiceBandWidth = 'GiftServiceBandWidth' in params ? params.GiftServiceBandWidth : null;

    }
}

/**
 * DescribeListPortAclList返回参数结构体
 * @class
 */
class DescribeListPortAclListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 端口acl策略
         * @type {Array.<AclConfigRelation> || null}
         */
        this.AclList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AclList) {
            this.AclList = new Array();
            for (let z in params.AclList) {
                let obj = new AclConfigRelation();
                obj.deserialize(params.AclList[z]);
                this.AclList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CC精准防护配置项
 * @class
 */
class CCPrecisionPlyRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置项类型，当前仅支持value
         * @type {string || null}
         */
        this.FieldType = null;

        /**
         * 配置字段，可取值cgi， ua， cookie， referer， accept,  srcip
         * @type {string || null}
         */
        this.FieldName = null;

        /**
         * 配置取值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 配置项值比对方式，可取值equal ，not_equal， include
         * @type {string || null}
         */
        this.ValueOperator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FieldType = 'FieldType' in params ? params.FieldType : null;
        this.FieldName = 'FieldName' in params ? params.FieldName : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.ValueOperator = 'ValueOperator' in params ? params.ValueOperator : null;

    }
}

/**
 * DescribeCCPrecisionPlyList返回参数结构体
 * @class
 */
class DescribeCCPrecisionPlyListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略列表总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 策略列表详情
         * @type {Array.<CCPrecisionPolicy> || null}
         */
        this.PrecisionPolicyList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.PrecisionPolicyList) {
            this.PrecisionPolicyList = new Array();
            for (let z in params.PrecisionPolicyList) {
                let obj = new CCPrecisionPolicy();
                obj.deserialize(params.PrecisionPolicyList[z]);
                this.PrecisionPolicyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBizTrend请求参数结构体
 * @class
 */
class DescribeBizTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计方式，可取值max, min, avg, sum, 如统计纬度是流量速率或包量速率，仅可取值max
         * @type {string || null}
         */
        this.Statistics = null;

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 统计周期，可取值60，300，1800，3600，21600，86400，单位秒
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间。 例：“2020-09-22 00:00:00”
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间。 例：“2020-09-22 00:00:00”
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 统计纬度，可取值connum, new_conn, inactive_conn, intraffic, outtraffic, inpkg, outpkg, qps
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 统计纬度为qps时，可选特定域名查询
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效
         * @type {Array.<ProtocolPort> || null}
         */
        this.ProtoInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Statistics = 'Statistics' in params ? params.Statistics : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.ProtoInfo) {
            this.ProtoInfo = new Array();
            for (let z in params.ProtoInfo) {
                let obj = new ProtocolPort();
                obj.deserialize(params.ProtoInfo[z]);
                this.ProtoInfo.push(obj);
            }
        }

    }
}

/**
 * DescribeListPortAclList请求参数结构体
 * @class
 */
class DescribeListPortAclListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * ip搜索
         * @type {string || null}
         */
        this.FilterIp = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * 防护概览DDoS攻击事件
 * @class
 */
class OverviewDDoSEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * ip
         * @type {string || null}
         */
        this.Vip = null;

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
         * 攻击类型
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 攻击状态，0：攻击中；1：攻击结束
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * 攻击流量，单位Mbps
         * @type {number || null}
         */
        this.Mbps = null;

        /**
         * 攻击包量，单位pps
         * @type {number || null}
         */
        this.Pps = null;

        /**
         * 业务类型，bgp-multip：高防包；bgpip：高防ip；basic：基础防护
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 高防实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 高防实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.Mbps = 'Mbps' in params ? params.Mbps : null;
        this.Pps = 'Pps' in params ? params.Pps : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DescribeCCLevelPolicy返回参数结构体
 * @class
 */
class DescribeCCLevelPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC防护等级，可取值loose表示宽松，strict表示严格，normal表示适中， emergency表示攻击紧急， sup_loose表示超级宽松，default表示默认策略（无频控配置下发），customized表示自定义策略
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Level = 'Level' in params ? params.Level : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListWaterPrintConfig返回参数结构体
 * @class
 */
class DescribeListWaterPrintConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 水印配置列表
         * @type {Array.<WaterPrintRelation> || null}
         */
        this.ConfigList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new WaterPrintRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOverviewDDoSTrend返回参数结构体
 * @class
 */
class DescribeOverviewDDoSTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值个数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 值数组，攻击流量带宽单位为Mbps，包速率单位为pps
         * @type {Array.<number> || null}
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
        this.Count = 'Count' in params ? params.Count : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 高防包资产实例的使用信息统计
 * @class
 */
class BGPInstanceUsages extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已使用的防护次数，单位次
         * @type {number || null}
         */
        this.ProtectCountUsage = null;

        /**
         * 已防护的IP数，单位个
         * @type {number || null}
         */
        this.ProtectIPNumberUsage = null;

        /**
         * 最近7天的攻击次数，单位次
         * @type {number || null}
         */
        this.Last7DayAttackCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectCountUsage = 'ProtectCountUsage' in params ? params.ProtectCountUsage : null;
        this.ProtectIPNumberUsage = 'ProtectIPNumberUsage' in params ? params.ProtectIPNumberUsage : null;
        this.Last7DayAttackCount = 'Last7DayAttackCount' in params ? params.Last7DayAttackCount : null;

    }
}

/**
 * DeleteDDoSSpeedLimitConfig返回参数结构体
 * @class
 */
class DeleteDDoSSpeedLimitConfigResponse extends  AbstractModel {
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
 * DeleteCCThresholdPolicy请求参数结构体
 * @class
 */
class DeleteCCThresholdPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 配置策略的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，可取值http
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeListListener请求参数结构体
 * @class
 */
class DescribeListListenerRequest extends  AbstractModel {
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
 * L7规则
 * @class
 */
class L7RuleEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 会话保持时间，单位秒
         * @type {number || null}
         */
        this.KeepTime = null;

        /**
         * 转发域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发协议，取值[http, https]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 回源方式，取值[1(域名回源)，2(IP回源)]
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 负载均衡方式，取值[1(加权轮询)]
         * @type {number || null}
         */
        this.LbType = null;

        /**
         * 回源列表
         * @type {Array.<L4RuleSource> || null}
         */
        this.SourceList = null;

        /**
         * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]
         * @type {number || null}
         */
        this.KeepEnable = null;

        /**
         * 规则状态，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段；
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * HTTPS协议的CC防护阈值
         * @type {number || null}
         */
        this.CCThreshold = null;

        /**
         * 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
         * @type {string || null}
         */
        this.PrivateKey = null;

        /**
         * HTTPS协议的CC防护状态，取值[0(关闭), 1(开启)]
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HttpsToHttpEnable = null;

        /**
         * 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0
         * @type {number || null}
         */
        this.CertType = null;

        /**
         * 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
         * @type {string || null}
         */
        this.Cert = null;

        /**
         * HTTPS协议的CC防护等级
         * @type {string || null}
         */
        this.CCLevel = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * cc防护状态，取值[0(关闭), 1(开启)]
         * @type {number || null}
         */
        this.CCStatus = null;

        /**
         * 接入端口值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VirtualPort = null;

        /**
         * 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID
         * @type {string || null}
         */
        this.SSLId = null;

        /**
         * 同ruleId
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 智能cc开关，取值[0(关闭), 1(开启)]
         * @type {number || null}
         */
        this.CCAIEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.LbType = 'LbType' in params ? params.LbType : null;

        if (params.SourceList) {
            this.SourceList = new Array();
            for (let z in params.SourceList) {
                let obj = new L4RuleSource();
                obj.deserialize(params.SourceList[z]);
                this.SourceList.push(obj);
            }
        }
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.HttpsToHttpEnable = 'HttpsToHttpEnable' in params ? params.HttpsToHttpEnable : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.CCLevel = 'CCLevel' in params ? params.CCLevel : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.CCStatus = 'CCStatus' in params ? params.CCStatus : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.CCAIEnable = 'CCAIEnable' in params ? params.CCAIEnable : null;

    }
}

/**
 * ModifyCCThresholdPolicy返回参数结构体
 * @class
 */
class ModifyCCThresholdPolicyResponse extends  AbstractModel {
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
 * CreateWaterPrintKey返回参数结构体
 * @class
 */
class CreateWaterPrintKeyResponse extends  AbstractModel {
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
 * DeleteCCPrecisionPolicy返回参数结构体
 * @class
 */
class DeleteCCPrecisionPolicyResponse extends  AbstractModel {
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
 * DescribeDDoSTrend返回参数结构体
 * @class
 */
class DescribeDDoSTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值个数
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 值数组，攻击流量带宽单位为Mbps，包速率单位为pps
         * @type {Array.<number> || null}
         */
        this.Data = null;

        /**
         * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
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
        this.Count = 'Count' in params ? params.Count : null;
        this.Business = 'Business' in params ? params.Business : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListBlackWhiteIpList请求参数结构体
 * @class
 */
class DescribeListBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP搜索
         * @type {string || null}
         */
        this.FilterIp = null;

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
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * CreateCCReqLimitPolicy请求参数结构体
 * @class
 */
class CreateCCReqLimitPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP值
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 协议，可取值HTTP，HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 策略项
         * @type {CCReqLimitPolicyRecord || null}
         */
        this.Policy = null;

        /**
         * 是否为兜底频控
         * @type {number || null}
         */
        this.IsGlobal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.Policy) {
            let obj = new CCReqLimitPolicyRecord();
            obj.deserialize(params.Policy)
            this.Policy = obj;
        }
        this.IsGlobal = 'IsGlobal' in params ? params.IsGlobal : null;

    }
}

/**
 * ModifyDDoSSpeedLimitConfig返回参数结构体
 * @class
 */
class ModifyDDoSSpeedLimitConfigResponse extends  AbstractModel {
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
 * 调度域名信息
 * @class
 */
class SchedulingDomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调度域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 线路IP列表
         * @type {Array.<IPLineInfo> || null}
         */
        this.LineIPList = null;

        /**
         * 调度方式，当前仅支持优先级的方式，取值[priority]
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 调度域名解析记录的TTL值
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 运行状态，取值[
0：未运行
1：运行中
2：运行异常
]
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 最后修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 域名名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UsrDomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.LineIPList) {
            this.LineIPList = new Array();
            for (let z in params.LineIPList) {
                let obj = new IPLineInfo();
                obj.deserialize(params.LineIPList[z]);
                this.LineIPList.push(obj);
            }
        }
        this.Method = 'Method' in params ? params.Method : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.UsrDomainName = 'UsrDomainName' in params ? params.UsrDomainName : null;

    }
}

/**
 * DescribeDefaultAlarmThreshold请求参数结构体
 * @class
 */
class DescribeDefaultAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品类型，取值[
bgp(表示高防包产品)
bgpip(表示高防IP产品)
]
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 告警阈值类型搜索，取值[
1(入流量告警阈值)
2(攻击清洗流量告警阈值)
]
         * @type {number || null}
         */
        this.FilterAlarmType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.FilterAlarmType = 'FilterAlarmType' in params ? params.FilterAlarmType : null;

    }
}

/**
 * 生成的水印密钥
 * @class
 */
class WaterPrintKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥版本号
         * @type {string || null}
         */
        this.KeyVersion = null;

        /**
         * 密钥内容
         * @type {string || null}
         */
        this.KeyContent = null;

        /**
         * 密钥ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 密钥启用状态，只有一个取值1(启用)
         * @type {number || null}
         */
        this.KeyOpenStatus = null;

        /**
         * 密钥生成时间
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
        this.KeyVersion = 'KeyVersion' in params ? params.KeyVersion : null;
        this.KeyContent = 'KeyContent' in params ? params.KeyContent : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyOpenStatus = 'KeyOpenStatus' in params ? params.KeyOpenStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * ModifyCCLevelPolicy请求参数结构体
 * @class
 */
class ModifyCCLevelPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，可取值HTTP，HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * CC防护等级，可取值loose表示宽松，strict表示严格，normal表示适中， emergency表示攻击紧急， sup_loose表示超级宽松，default表示默认策略（无频控配置下发），customized表示自定义策略
         * @type {string || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * DescribeCcGeoIPBlockConfigList请求参数结构体
 * @class
 */
class DescribeCcGeoIPBlockConfigListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip-multip：表示高防包；bgpip：表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 一页条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定特定实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * IP地址，普通高防IP要传该字段
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 域名，普通高防IP要传该字段
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 协议，普通高防IP要传该字段
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * 特征过滤相关信息
 * @class
 */
class PacketFilterRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 特征过滤配置
         * @type {PacketFilterConfig || null}
         */
        this.PacketFilterConfig = null;

        /**
         * 特征过滤配置所属的实例
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PacketFilterConfig) {
            let obj = new PacketFilterConfig();
            obj.deserialize(params.PacketFilterConfig)
            this.PacketFilterConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * 四七层规则的
 * @class
 */
class RuleInstanceRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例的IP
         * @type {Array.<string> || null}
         */
        this.EipList = null;

        /**
         * 资源实例的ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资源实例的Cname
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
        this.EipList = 'EipList' in params ? params.EipList : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Cname = 'Cname' in params ? params.Cname : null;

    }
}

/**
 * CreatePacketFilterConfig请求参数结构体
 * @class
 */
class CreatePacketFilterConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 特征过滤规则
         * @type {PacketFilterConfig || null}
         */
        this.PacketFilterConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.PacketFilterConfig) {
            let obj = new PacketFilterConfig();
            obj.deserialize(params.PacketFilterConfig)
            this.PacketFilterConfig = obj;
        }

    }
}

/**
 * DescribeCCTrend请求参数结构体
 * @class
 */
class DescribeCCTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))，incount(请求次数), dropcount(攻击次数)]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 域名，可选
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例）
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

module.exports = {
    CreateDefaultAlarmThresholdRequest: CreateDefaultAlarmThresholdRequest,
    DescribeDDoSConnectLimitListRequest: DescribeDDoSConnectLimitListRequest,
    DescribeListBGPIPInstancesResponse: DescribeListBGPIPInstancesResponse,
    DescribeBlackWhiteIpListResponse: DescribeBlackWhiteIpListResponse,
    PacketFilterConfig: PacketFilterConfig,
    DescribeOverviewCCTrendRequest: DescribeOverviewCCTrendRequest,
    DeleteCCLevelPolicyRequest: DeleteCCLevelPolicyRequest,
    ProxyTypeInfo: ProxyTypeInfo,
    CreateBoundIPRequest: CreateBoundIPRequest,
    CCReqLimitPolicyRecord: CCReqLimitPolicyRecord,
    DescribeListSchedulingDomainRequest: DescribeListSchedulingDomainRequest,
    CreateWaterPrintConfigRequest: CreateWaterPrintConfigRequest,
    DDoSGeoIPBlockConfig: DDoSGeoIPBlockConfig,
    CreateBlackWhiteIpListResponse: CreateBlackWhiteIpListResponse,
    IPAlarmThresholdRelation: IPAlarmThresholdRelation,
    DeleteCCRequestLimitPolicyRequest: DeleteCCRequestLimitPolicyRequest,
    DescribeL7RulesBySSLCertIdResponse: DescribeL7RulesBySSLCertIdResponse,
    DescribeDDoSBlackWhiteIpListResponse: DescribeDDoSBlackWhiteIpListResponse,
    InstanceRelation: InstanceRelation,
    ModifyNewDomainRulesRequest: ModifyNewDomainRulesRequest,
    RegionInfo: RegionInfo,
    DescribeListProtocolBlockConfigResponse: DescribeListProtocolBlockConfigResponse,
    DescribeListBGPInstancesRequest: DescribeListBGPInstancesRequest,
    KeyValue: KeyValue,
    ModifyCcBlackWhiteIpListRequest: ModifyCcBlackWhiteIpListRequest,
    DeleteDDoSSpeedLimitConfigRequest: DeleteDDoSSpeedLimitConfigRequest,
    CreatePacketFilterConfigResponse: CreatePacketFilterConfigResponse,
    CreateCCReqLimitPolicyResponse: CreateCCReqLimitPolicyResponse,
    DescribeListWaterPrintConfigRequest: DescribeListWaterPrintConfigRequest,
    CreateL7RuleCertsRequest: CreateL7RuleCertsRequest,
    CreateCCPrecisionPolicyResponse: CreateCCPrecisionPolicyResponse,
    DeleteCcGeoIPBlockConfigResponse: DeleteCcGeoIPBlockConfigResponse,
    DeleteDDoSGeoIPBlockConfigRequest: DeleteDDoSGeoIPBlockConfigRequest,
    ModifyDDoSGeoIPBlockConfigResponse: ModifyDDoSGeoIPBlockConfigResponse,
    DescribeCcBlackWhiteIpListResponse: DescribeCcBlackWhiteIpListResponse,
    ModifyCCLevelPolicyResponse: ModifyCCLevelPolicyResponse,
    CreateIPAlarmThresholdConfigRequest: CreateIPAlarmThresholdConfigRequest,
    CreateCcBlackWhiteIpListResponse: CreateCcBlackWhiteIpListResponse,
    DescribeDefaultAlarmThresholdResponse: DescribeDefaultAlarmThresholdResponse,
    CreateNewL7RulesResponse: CreateNewL7RulesResponse,
    CreateDDoSAIRequest: CreateDDoSAIRequest,
    DescribeListProtectThresholdConfigRequest: DescribeListProtectThresholdConfigRequest,
    ModifyNewDomainRulesResponse: ModifyNewDomainRulesResponse,
    CcBlackWhiteIpPolicy: CcBlackWhiteIpPolicy,
    DescribeDDoSConnectLimitListResponse: DescribeDDoSConnectLimitListResponse,
    L7RuleHealth: L7RuleHealth,
    ModifyPacketFilterConfigResponse: ModifyPacketFilterConfigResponse,
    DescribeCCLevelPolicyRequest: DescribeCCLevelPolicyRequest,
    CreateWaterPrintConfigResponse: CreateWaterPrintConfigResponse,
    DescribeOverviewAttackTrendRequest: DescribeOverviewAttackTrendRequest,
    DescribeListBGPIPInstancesRequest: DescribeListBGPIPInstancesRequest,
    DescribeNewL7RulesResponse: DescribeNewL7RulesResponse,
    StaticPackRelation: StaticPackRelation,
    CreatePortAclConfigRequest: CreatePortAclConfigRequest,
    DescribeCCThresholdListResponse: DescribeCCThresholdListResponse,
    DescribeL7RulesBySSLCertIdRequest: DescribeL7RulesBySSLCertIdRequest,
    TagFilter: TagFilter,
    DescribeListPacketFilterConfigResponse: DescribeListPacketFilterConfigResponse,
    CreateSchedulingDomainRequest: CreateSchedulingDomainRequest,
    ModifyPortAclConfigRequest: ModifyPortAclConfigRequest,
    BoundIpInfo: BoundIpInfo,
    CreateDDoSBlackWhiteIpListRequest: CreateDDoSBlackWhiteIpListRequest,
    ModifyCCReqLimitPolicyRequest: ModifyCCReqLimitPolicyRequest,
    DescribeOverviewDDoSTrendRequest: DescribeOverviewDDoSTrendRequest,
    DisassociateDDoSEipAddressResponse: DisassociateDDoSEipAddressResponse,
    DescribeBgpBizTrendRequest: DescribeBgpBizTrendRequest,
    DeleteCCThresholdPolicyResponse: DeleteCCThresholdPolicyResponse,
    DescribeBizHttpStatusRequest: DescribeBizHttpStatusRequest,
    SourceServer: SourceServer,
    CCLevelPolicy: CCLevelPolicy,
    DescribeOverviewIndexResponse: DescribeOverviewIndexResponse,
    CreatePortAclConfigListRequest: CreatePortAclConfigListRequest,
    AclConfig: AclConfig,
    DisassociateDDoSEipAddressRequest: DisassociateDDoSEipAddressRequest,
    SwitchWaterPrintConfigResponse: SwitchWaterPrintConfigResponse,
    BlackWhiteIpRelation: BlackWhiteIpRelation,
    DeleteWaterPrintKeyResponse: DeleteWaterPrintKeyResponse,
    EipAddressPackRelation: EipAddressPackRelation,
    CreateDDoSBlackWhiteIpListResponse: CreateDDoSBlackWhiteIpListResponse,
    ModifyCcBlackWhiteIpListResponse: ModifyCcBlackWhiteIpListResponse,
    DescribeNewL7RulesRequest: DescribeNewL7RulesRequest,
    ProtocolBlockRelation: ProtocolBlockRelation,
    DescribeListPacketFilterConfigRequest: DescribeListPacketFilterConfigRequest,
    DescribeOverviewIndexRequest: DescribeOverviewIndexRequest,
    BGPIPInstanceUsages: BGPIPInstanceUsages,
    ModifyDDoSBlackWhiteIpListRequest: ModifyDDoSBlackWhiteIpListRequest,
    DescribeListDDoSGeoIPBlockConfigRequest: DescribeListDDoSGeoIPBlockConfigRequest,
    DescribeOverviewDDoSEventListResponse: DescribeOverviewDDoSEventListResponse,
    CreateCcGeoIPBlockConfigResponse: CreateCcGeoIPBlockConfigResponse,
    DescribeOverviewAttackTrendResponse: DescribeOverviewAttackTrendResponse,
    HttpStatusMap: HttpStatusMap,
    Layer7Rule: Layer7Rule,
    ModifyPortAclConfigResponse: ModifyPortAclConfigResponse,
    DescribeBasicDeviceStatusRequest: DescribeBasicDeviceStatusRequest,
    DeleteCcGeoIPBlockConfigRequest: DeleteCcGeoIPBlockConfigRequest,
    DescribeCCLevelListResponse: DescribeCCLevelListResponse,
    CreateDDoSSpeedLimitConfigRequest: CreateDDoSSpeedLimitConfigRequest,
    CreateDDoSGeoIPBlockConfigRequest: CreateDDoSGeoIPBlockConfigRequest,
    CreateProtocolBlockConfigRequest: CreateProtocolBlockConfigRequest,
    DeleteWaterPrintKeyRequest: DeleteWaterPrintKeyRequest,
    SuccessCode: SuccessCode,
    AssociateDDoSEipAddressResponse: AssociateDDoSEipAddressResponse,
    DDoSSpeedLimitConfigRelation: DDoSSpeedLimitConfigRelation,
    DeleteCCLevelPolicyResponse: DeleteCCLevelPolicyResponse,
    ModifyPacketFilterConfigRequest: ModifyPacketFilterConfigRequest,
    DescribeBlackWhiteIpListRequest: DescribeBlackWhiteIpListRequest,
    CreateCcGeoIPBlockConfigRequest: CreateCcGeoIPBlockConfigRequest,
    DeletePortAclConfigResponse: DeletePortAclConfigResponse,
    CreateDDoSSpeedLimitConfigResponse: CreateDDoSSpeedLimitConfigResponse,
    DescribeNewL7RulesErrHealthResponse: DescribeNewL7RulesErrHealthResponse,
    DeletePacketFilterConfigRequest: DeletePacketFilterConfigRequest,
    DescribeListDDoSGeoIPBlockConfigResponse: DescribeListDDoSGeoIPBlockConfigResponse,
    DescribeBasicDeviceStatusResponse: DescribeBasicDeviceStatusResponse,
    DescribeBgpBizTrendResponse: DescribeBgpBizTrendResponse,
    L4RuleSource: L4RuleSource,
    DescribePendingRiskInfoResponse: DescribePendingRiskInfoResponse,
    ProtocolBlockConfig: ProtocolBlockConfig,
    DeleteCCPrecisionPolicyRequest: DeleteCCPrecisionPolicyRequest,
    BGPIPInstance: BGPIPInstance,
    DeleteWaterPrintConfigResponse: DeleteWaterPrintConfigResponse,
    Layer4Rule: Layer4Rule,
    DeletePacketFilterConfigResponse: DeletePacketFilterConfigResponse,
    CreateProtocolBlockConfigResponse: CreateProtocolBlockConfigResponse,
    BGPIPInstanceSpecification: BGPIPInstanceSpecification,
    CreateIPAlarmThresholdConfigResponse: CreateIPAlarmThresholdConfigResponse,
    CreatePortAclConfigListResponse: CreatePortAclConfigListResponse,
    DeleteWaterPrintConfigRequest: DeleteWaterPrintConfigRequest,
    DescribeDDoSBlackWhiteIpListRequest: DescribeDDoSBlackWhiteIpListRequest,
    ConnectLimitRelation: ConnectLimitRelation,
    DescribeListBlackWhiteIpListResponse: DescribeListBlackWhiteIpListResponse,
    DDoSAIRelation: DDoSAIRelation,
    DescribeCCReqLimitPolicyListRequest: DescribeCCReqLimitPolicyListRequest,
    AclConfigRelation: AclConfigRelation,
    DescribeListDDoSSpeedLimitConfigResponse: DescribeListDDoSSpeedLimitConfigResponse,
    ModifyDDoSThresholdResponse: ModifyDDoSThresholdResponse,
    CreateDDoSGeoIPBlockConfigResponse: CreateDDoSGeoIPBlockConfigResponse,
    CCPrecisionPolicy: CCPrecisionPolicy,
    DescribeOverviewDDoSEventListRequest: DescribeOverviewDDoSEventListRequest,
    ListenerCcThreholdConfig: ListenerCcThreholdConfig,
    EipAddressRelation: EipAddressRelation,
    DeleteDDoSBlackWhiteIpListRequest: DeleteDDoSBlackWhiteIpListRequest,
    PackInfo: PackInfo,
    CreateDDoSConnectLimitResponse: CreateDDoSConnectLimitResponse,
    WaterPrintRelation: WaterPrintRelation,
    IPLineInfo: IPLineInfo,
    DescribeCcBlackWhiteIpListRequest: DescribeCcBlackWhiteIpListRequest,
    DescribeListListenerResponse: DescribeListListenerResponse,
    DeletePortAclConfigRequest: DeletePortAclConfigRequest,
    DescribePendingRiskInfoRequest: DescribePendingRiskInfoRequest,
    CreatePortAclConfigResponse: CreatePortAclConfigResponse,
    ModifyDDoSLevelResponse: ModifyDDoSLevelResponse,
    CreateL7RuleCertsResponse: CreateL7RuleCertsResponse,
    CreateCCPrecisionPolicyRequest: CreateCCPrecisionPolicyRequest,
    ConnectLimitConfig: ConnectLimitConfig,
    DDoSSpeedLimitConfig: DDoSSpeedLimitConfig,
    AnycastOutPackRelation: AnycastOutPackRelation,
    ProtectThresholdRelation: ProtectThresholdRelation,
    DescribeListProtectThresholdConfigResponse: DescribeListProtectThresholdConfigResponse,
    CertIdInsL7Rules: CertIdInsL7Rules,
    IpSegment: IpSegment,
    CreateDefaultAlarmThresholdResponse: CreateDefaultAlarmThresholdResponse,
    ModifyDDoSThresholdRequest: ModifyDDoSThresholdRequest,
    ModifyDDoSLevelRequest: ModifyDDoSLevelRequest,
    DescribeListSchedulingDomainResponse: DescribeListSchedulingDomainResponse,
    DescribeListIPAlarmConfigResponse: DescribeListIPAlarmConfigResponse,
    CcGeoIpPolicyNew: CcGeoIpPolicyNew,
    ModifyDDoSBlackWhiteIpListResponse: ModifyDDoSBlackWhiteIpListResponse,
    CCReqLimitPolicy: CCReqLimitPolicy,
    DescribeCCPrecisionPlyListRequest: DescribeCCPrecisionPlyListRequest,
    ProtocolPort: ProtocolPort,
    DescribeCCLevelListRequest: DescribeCCLevelListRequest,
    ModifyCCThresholdPolicyRequest: ModifyCCThresholdPolicyRequest,
    DeleteDDoSGeoIPBlockConfigResponse: DeleteDDoSGeoIPBlockConfigResponse,
    DescribeListDDoSAIRequest: DescribeListDDoSAIRequest,
    DescribeListIPAlarmConfigRequest: DescribeListIPAlarmConfigRequest,
    PortSegment: PortSegment,
    CreateNewL7RulesRequest: CreateNewL7RulesRequest,
    DescribeOverviewCCTrendResponse: DescribeOverviewCCTrendResponse,
    ModifyCCReqLimitPolicyResponse: ModifyCCReqLimitPolicyResponse,
    DefaultAlarmThreshold: DefaultAlarmThreshold,
    ForwardListener: ForwardListener,
    BGPInstanceSpecification: BGPInstanceSpecification,
    ModifyDomainUsrNameRequest: ModifyDomainUsrNameRequest,
    CreateDDoSConnectLimitRequest: CreateDDoSConnectLimitRequest,
    CreateWaterPrintKeyRequest: CreateWaterPrintKeyRequest,
    DescribeBizHttpStatusResponse: DescribeBizHttpStatusResponse,
    InsL7Rules: InsL7Rules,
    DescribeCCReqLimitPolicyListResponse: DescribeCCReqLimitPolicyListResponse,
    DescribeListDDoSAIResponse: DescribeListDDoSAIResponse,
    DescribeNewL7RulesErrHealthRequest: DescribeNewL7RulesErrHealthRequest,
    ModifyCCPrecisionPolicyResponse: ModifyCCPrecisionPolicyResponse,
    CcGeoIPBlockConfig: CcGeoIPBlockConfig,
    ModifyDDoSSpeedLimitConfigRequest: ModifyDDoSSpeedLimitConfigRequest,
    AssociateDDoSEipAddressRequest: AssociateDDoSEipAddressRequest,
    AssociateDDoSEipLoadBalancerResponse: AssociateDDoSEipLoadBalancerResponse,
    DescribeCCThresholdListRequest: DescribeCCThresholdListRequest,
    CreateBlackWhiteIpListRequest: CreateBlackWhiteIpListRequest,
    ModifyDDoSGeoIPBlockConfigRequest: ModifyDDoSGeoIPBlockConfigRequest,
    DescribeBizTrendResponse: DescribeBizTrendResponse,
    NewL7RuleEntry: NewL7RuleEntry,
    DeleteCcBlackWhiteIpListResponse: DeleteCcBlackWhiteIpListResponse,
    CreateBoundIPResponse: CreateBoundIPResponse,
    DescribeListDDoSSpeedLimitConfigRequest: DescribeListDDoSSpeedLimitConfigRequest,
    SpeedValue: SpeedValue,
    SwitchWaterPrintConfigRequest: SwitchWaterPrintConfigRequest,
    AssociateDDoSEipLoadBalancerRequest: AssociateDDoSEipLoadBalancerRequest,
    ModifyCCPrecisionPolicyRequest: ModifyCCPrecisionPolicyRequest,
    DeleteDDoSBlackWhiteIpListResponse: DeleteDDoSBlackWhiteIpListResponse,
    CCThresholdPolicy: CCThresholdPolicy,
    WaterPrintConfig: WaterPrintConfig,
    ModifyDomainUsrNameResponse: ModifyDomainUsrNameResponse,
    DescribeCCTrendResponse: DescribeCCTrendResponse,
    CreateSchedulingDomainResponse: CreateSchedulingDomainResponse,
    EipProductInfo: EipProductInfo,
    DeleteCcBlackWhiteIpListRequest: DeleteCcBlackWhiteIpListRequest,
    DescribeCcGeoIPBlockConfigListResponse: DescribeCcGeoIPBlockConfigListResponse,
    CreateDDoSAIResponse: CreateDDoSAIResponse,
    DDoSGeoIPBlockConfigRelation: DDoSGeoIPBlockConfigRelation,
    DescribeListProtocolBlockConfigRequest: DescribeListProtocolBlockConfigRequest,
    DescribeListBGPInstancesResponse: DescribeListBGPInstancesResponse,
    TagInfo: TagInfo,
    DescribeDDoSTrendRequest: DescribeDDoSTrendRequest,
    DeleteCCRequestLimitPolicyResponse: DeleteCCRequestLimitPolicyResponse,
    CreateCcBlackWhiteIpListRequest: CreateCcBlackWhiteIpListRequest,
    BGPInstance: BGPInstance,
    DescribeListPortAclListResponse: DescribeListPortAclListResponse,
    CCPrecisionPlyRecord: CCPrecisionPlyRecord,
    DescribeCCPrecisionPlyListResponse: DescribeCCPrecisionPlyListResponse,
    DescribeBizTrendRequest: DescribeBizTrendRequest,
    DescribeListPortAclListRequest: DescribeListPortAclListRequest,
    OverviewDDoSEvent: OverviewDDoSEvent,
    DescribeCCLevelPolicyResponse: DescribeCCLevelPolicyResponse,
    DescribeListWaterPrintConfigResponse: DescribeListWaterPrintConfigResponse,
    DescribeOverviewDDoSTrendResponse: DescribeOverviewDDoSTrendResponse,
    BGPInstanceUsages: BGPInstanceUsages,
    DeleteDDoSSpeedLimitConfigResponse: DeleteDDoSSpeedLimitConfigResponse,
    DeleteCCThresholdPolicyRequest: DeleteCCThresholdPolicyRequest,
    DescribeListListenerRequest: DescribeListListenerRequest,
    L7RuleEntry: L7RuleEntry,
    ModifyCCThresholdPolicyResponse: ModifyCCThresholdPolicyResponse,
    CreateWaterPrintKeyResponse: CreateWaterPrintKeyResponse,
    DeleteCCPrecisionPolicyResponse: DeleteCCPrecisionPolicyResponse,
    DescribeDDoSTrendResponse: DescribeDDoSTrendResponse,
    DescribeListBlackWhiteIpListRequest: DescribeListBlackWhiteIpListRequest,
    CreateCCReqLimitPolicyRequest: CreateCCReqLimitPolicyRequest,
    ModifyDDoSSpeedLimitConfigResponse: ModifyDDoSSpeedLimitConfigResponse,
    SchedulingDomainInfo: SchedulingDomainInfo,
    DescribeDefaultAlarmThresholdRequest: DescribeDefaultAlarmThresholdRequest,
    WaterPrintKey: WaterPrintKey,
    ModifyCCLevelPolicyRequest: ModifyCCLevelPolicyRequest,
    DescribeCcGeoIPBlockConfigListRequest: DescribeCcGeoIPBlockConfigListRequest,
    PacketFilterRelation: PacketFilterRelation,
    RuleInstanceRelation: RuleInstanceRelation,
    CreatePacketFilterConfigRequest: CreatePacketFilterConfigRequest,
    DescribeCCTrendRequest: DescribeCCTrendRequest,

}

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
 * ModifyDDoSPolicyCase请求参数结构体
 * @class
 */
class ModifyDDoSPolicyCaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 策略场景ID
         * @type {string || null}
         */
        this.SceneId = null;

        /**
         * 开发平台，取值[PC（PC客户端）， MOBILE（移动端）， TV（电视端）， SERVER（主机）]
         * @type {Array.<string> || null}
         */
        this.PlatformTypes = null;

        /**
         * 细分品类，取值[WEB（网站）， GAME（游戏）， APP（应用）， OTHER（其他）]
         * @type {string || null}
         */
        this.AppType = null;

        /**
         * 应用协议，取值[tcp（TCP协议），udp（UDP协议），icmp（ICMP协议），all（其他协议）]
         * @type {Array.<string> || null}
         */
        this.AppProtocols = null;

        /**
         * TCP业务起始端口，取值(0, 65535]
         * @type {string || null}
         */
        this.TcpSportStart = null;

        /**
         * TCP业务结束端口，取值(0, 65535]，必须大于等于TCP业务起始端口
         * @type {string || null}
         */
        this.TcpSportEnd = null;

        /**
         * UDP业务起始端口，取值范围(0, 65535]
         * @type {string || null}
         */
        this.UdpSportStart = null;

        /**
         * UDP业务结束端口，取值范围(0, 65535)，必须大于等于UDP业务起始端口
         * @type {string || null}
         */
        this.UdpSportEnd = null;

        /**
         * 是否有海外客户，取值[no（没有）, yes（有）]
         * @type {string || null}
         */
        this.HasAbroad = null;

        /**
         * 是否会主动对外发起TCP请求，取值[no（不会）, yes（会）]
         * @type {string || null}
         */
        this.HasInitiateTcp = null;

        /**
         * 是否会主动对外发起UDP业务请求，取值[no（不会）, yes（会）]
         * @type {string || null}
         */
        this.HasInitiateUdp = null;

        /**
         * 主动发起TCP请求的端口，取值范围(0, 65535]
         * @type {string || null}
         */
        this.PeerTcpPort = null;

        /**
         * 主动发起UDP请求的端口，取值范围(0, 65535]
         * @type {string || null}
         */
        this.PeerUdpPort = null;

        /**
         * TCP载荷的固定特征码，字符串长度小于512
         * @type {string || null}
         */
        this.TcpFootprint = null;

        /**
         * UDP载荷的固定特征码，字符串长度小于512
         * @type {string || null}
         */
        this.UdpFootprint = null;

        /**
         * Web业务的API的URL
         * @type {Array.<string> || null}
         */
        this.WebApiUrl = null;

        /**
         * TCP业务报文长度最小值，取值范围(0, 1500)
         * @type {string || null}
         */
        this.MinTcpPackageLen = null;

        /**
         * TCP业务报文长度最大值，取值范围(0, 1500)，必须大于等于TCP业务报文长度最小值
         * @type {string || null}
         */
        this.MaxTcpPackageLen = null;

        /**
         * UDP业务报文长度最小值，取值范围(0, 1500)
         * @type {string || null}
         */
        this.MinUdpPackageLen = null;

        /**
         * UDP业务报文长度最大值，取值范围(0, 1500)，必须大于等于UDP业务报文长度最小值
         * @type {string || null}
         */
        this.MaxUdpPackageLen = null;

        /**
         * 是否有VPN业务，取值[no（没有）, yes（有）]
         * @type {string || null}
         */
        this.HasVPN = null;

        /**
         * TCP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000
         * @type {string || null}
         */
        this.TcpPortList = null;

        /**
         * UDP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000
         * @type {string || null}
         */
        this.UdpPortList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.PlatformTypes = 'PlatformTypes' in params ? params.PlatformTypes : null;
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.AppProtocols = 'AppProtocols' in params ? params.AppProtocols : null;
        this.TcpSportStart = 'TcpSportStart' in params ? params.TcpSportStart : null;
        this.TcpSportEnd = 'TcpSportEnd' in params ? params.TcpSportEnd : null;
        this.UdpSportStart = 'UdpSportStart' in params ? params.UdpSportStart : null;
        this.UdpSportEnd = 'UdpSportEnd' in params ? params.UdpSportEnd : null;
        this.HasAbroad = 'HasAbroad' in params ? params.HasAbroad : null;
        this.HasInitiateTcp = 'HasInitiateTcp' in params ? params.HasInitiateTcp : null;
        this.HasInitiateUdp = 'HasInitiateUdp' in params ? params.HasInitiateUdp : null;
        this.PeerTcpPort = 'PeerTcpPort' in params ? params.PeerTcpPort : null;
        this.PeerUdpPort = 'PeerUdpPort' in params ? params.PeerUdpPort : null;
        this.TcpFootprint = 'TcpFootprint' in params ? params.TcpFootprint : null;
        this.UdpFootprint = 'UdpFootprint' in params ? params.UdpFootprint : null;
        this.WebApiUrl = 'WebApiUrl' in params ? params.WebApiUrl : null;
        this.MinTcpPackageLen = 'MinTcpPackageLen' in params ? params.MinTcpPackageLen : null;
        this.MaxTcpPackageLen = 'MaxTcpPackageLen' in params ? params.MaxTcpPackageLen : null;
        this.MinUdpPackageLen = 'MinUdpPackageLen' in params ? params.MinUdpPackageLen : null;
        this.MaxUdpPackageLen = 'MaxUdpPackageLen' in params ? params.MaxUdpPackageLen : null;
        this.HasVPN = 'HasVPN' in params ? params.HasVPN : null;
        this.TcpPortList = 'TcpPortList' in params ? params.TcpPortList : null;
        this.UdpPortList = 'UdpPortList' in params ? params.UdpPortList : null;

    }
}

/**
 * DescribeIpUnBlockList请求参数结构体
 * @class
 */
class DescribeIpUnBlockListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * IP（不为空时，进行IP过滤）
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 分页参数（不为空时，进行分页查询），此字段后面会弃用，请用Limit和Offset字段代替；
         * @type {Paging || null}
         */
        this.Paging = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

        if (params.Paging) {
            let obj = new Paging();
            obj.deserialize(params.Paging)
            this.Paging = obj;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteDDoSPolicyCase请求参数结构体
 * @class
 */
class DeleteDDoSPolicyCaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 策略场景ID
         * @type {string || null}
         */
        this.SceneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;

    }
}

/**
 * CreateDDoSPolicy返回参数结构体
 * @class
 */
class CreateDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略ID
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
 * DeleteL7Rules请求参数结构体
 * @class
 */
class DeleteL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID列表
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
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

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
 * DescribeNewL4RulesErrHealth返回参数结构体
 * @class
 */
class DescribeNewL4RulesErrHealthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异常规则的总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP，多个IP用","分割
         * @type {Array.<KeyValue> || null}
         */
        this.ErrHealths = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ErrHealths) {
            this.ErrHealths = new Array();
            for (let z in params.ErrHealths) {
                let obj = new KeyValue();
                obj.deserialize(params.ErrHealths[z]);
                this.ErrHealths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCEvList请求参数结构体
 * @class
 */
class DescribeCCEvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

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
         * 资源实例ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源实例的IP，当business不为basic时，如果IpList不为空则Id也必须不能为空；
         * @type {Array.<string> || null}
         */
        this.IpList = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTransmitStatis返回参数结构体
 * @class
 */
class DescribeTransmitStatisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当MetricName=traffic时，表示入流量带宽，单位bps；
当MetricName=pkg时，表示入包速率，单位pps；
         * @type {Array.<number> || null}
         */
        this.InDataList = null;

        /**
         * 当MetricName=traffic时，表示出流量带宽，单位bps；
当MetricName=pkg时，表示出包速率，单位pps；
         * @type {Array.<number> || null}
         */
        this.OutDataList = null;

        /**
         * 指标名：
traffic表示流量带宽；
pkg表示包速率；
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
        this.InDataList = 'InDataList' in params ? params.InDataList : null;
        this.OutDataList = 'OutDataList' in params ? params.OutDataList : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DDoS高级策略
 * @class
 */
class DDosPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略绑定的资源
         * @type {Array.<ResourceIp> || null}
         */
        this.Resources = null;

        /**
         * 禁用协议
         * @type {DDoSPolicyDropOption || null}
         */
        this.DropOptions = null;

        /**
         * 禁用端口
         * @type {Array.<DDoSPolicyPortLimit> || null}
         */
        this.PortLimits = null;

        /**
         * 报文过滤
         * @type {Array.<DDoSPolicyPacketFilter> || null}
         */
        this.PacketFilters = null;

        /**
         * 黑白IP名单
         * @type {Array.<IpBlackWhite> || null}
         */
        this.IpBlackWhiteLists = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.PolicyName = null;

        /**
         * 策略创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 水印策略参数，最多只有一个，当没有水印策略时数组为空
         * @type {Array.<WaterPrintPolicy> || null}
         */
        this.WaterPrint = null;

        /**
         * 水印密钥，最多只有2个，当没有水印策略时数组为空
         * @type {Array.<WaterPrintKey> || null}
         */
        this.WaterKey = null;

        /**
         * 策略绑定的资源实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.BoundResources = null;

        /**
         * 策略所属的策略场景
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SceneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Resources) {
            this.Resources = new Array();
            for (let z in params.Resources) {
                let obj = new ResourceIp();
                obj.deserialize(params.Resources[z]);
                this.Resources.push(obj);
            }
        }

        if (params.DropOptions) {
            let obj = new DDoSPolicyDropOption();
            obj.deserialize(params.DropOptions)
            this.DropOptions = obj;
        }

        if (params.PortLimits) {
            this.PortLimits = new Array();
            for (let z in params.PortLimits) {
                let obj = new DDoSPolicyPortLimit();
                obj.deserialize(params.PortLimits[z]);
                this.PortLimits.push(obj);
            }
        }

        if (params.PacketFilters) {
            this.PacketFilters = new Array();
            for (let z in params.PacketFilters) {
                let obj = new DDoSPolicyPacketFilter();
                obj.deserialize(params.PacketFilters[z]);
                this.PacketFilters.push(obj);
            }
        }

        if (params.IpBlackWhiteLists) {
            this.IpBlackWhiteLists = new Array();
            for (let z in params.IpBlackWhiteLists) {
                let obj = new IpBlackWhite();
                obj.deserialize(params.IpBlackWhiteLists[z]);
                this.IpBlackWhiteLists.push(obj);
            }
        }
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.PolicyName = 'PolicyName' in params ? params.PolicyName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.WaterPrint) {
            this.WaterPrint = new Array();
            for (let z in params.WaterPrint) {
                let obj = new WaterPrintPolicy();
                obj.deserialize(params.WaterPrint[z]);
                this.WaterPrint.push(obj);
            }
        }

        if (params.WaterKey) {
            this.WaterKey = new Array();
            for (let z in params.WaterKey) {
                let obj = new WaterPrintKey();
                obj.deserialize(params.WaterKey[z]);
                this.WaterKey.push(obj);
            }
        }
        this.BoundResources = 'BoundResources' in params ? params.BoundResources : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;

    }
}

/**
 * DescribeDDoSNetTrend请求参数结构体
 * @class
 */
class DescribeDDoSNetTrendRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
         * @type {string || null}
         */
        this.MetricName = null;

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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribePolicyCase请求参数结构体
 * @class
 */
class DescribePolicyCaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 策略场景ID
         * @type {string || null}
         */
        this.SceneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;

    }
}

/**
 * DescribeUnBlockStatis请求参数结构体
 * @class
 */
class DescribeUnBlockStatisRequest extends  AbstractModel {
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
 * ModifyCCUrlAllow返回参数结构体
 * @class
 */
class ModifyCCUrlAllowResponse extends  AbstractModel {
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
 * DescribeBasicDeviceThreshold返回参数结构体
 * @class
 */
class DescribeBasicDeviceThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回黑洞封堵值
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCAlarmThreshold返回参数结构体
 * @class
 */
class DescribeCCAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC告警阈值
         * @type {CCAlarmThreshold || null}
         */
        this.CCAlarmThreshold = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CCAlarmThreshold) {
            let obj = new CCAlarmThreshold();
            obj.deserialize(params.CCAlarmThreshold)
            this.CCAlarmThreshold = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSNetEvList请求参数结构体
 * @class
 */
class DescribeDDoSNetEvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

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
         * 一页条数，填0表示不分页
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 页起始偏移，取值为(页码-1)*一页条数
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteNewL4Rules请求参数结构体
 * @class
 */
class DeleteNewL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 删除接口结构体
         * @type {Array.<L4DelRule> || null}
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

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new L4DelRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }

    }
}

/**
 * DDoS告警阈值
 * @class
 */
class DDoSAlarmThreshold extends  AbstractModel {
    constructor(){
        super();

        /**
         * 告警阈值类型，1-入流量，2-清洗流量
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * 告警阈值，大于0（目前排定的值）
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
 * DescribePolicyCase返回参数结构体
 * @class
 */
class DescribePolicyCaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略场景列表
         * @type {Array.<KeyValueRecord> || null}
         */
        this.CaseList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CaseList) {
            this.CaseList = new Array();
            for (let z in params.CaseList) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.CaseList[z]);
                this.CaseList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeResIpList请求参数结构体
 * @class
 */
class DescribeResIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID, 如果不填，则获取用户所有资源的IP
         * @type {Array.<string> || null}
         */
        this.IdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.IdList = 'IdList' in params ? params.IdList : null;

    }
}

/**
 * DescribeNewL4RulesErrHealth请求参数结构体
 * @class
 */
class DescribeNewL4RulesErrHealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 规则ID列表
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
 * ModifyCCLevel请求参数结构体
 * @class
 */
class ModifyCCLevelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CC防护等级，取值[default(正常), loose(宽松), strict(严格)];
         * @type {string || null}
         */
        this.Level = null;

        /**
         * 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写RuleId字段；
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 表示7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DeleteCCSelfDefinePolicy请求参数结构体
 * @class
 */
class DeleteCCSelfDefinePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.SetId = null;

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
        this.SetId = 'SetId' in params ? params.SetId : null;

    }
}

/**
 * DescribeCCUrlAllow请求参数结构体
 * @class
 */
class DescribeCCUrlAllowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 黑或白名单，取值[white(白名单)]，目前只支持白名单
注意：此数组只能有一个值，且只能为white
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 可选，代表HTTP协议或HTTPS协议的CC防护，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

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
 * 黑白IP
 * @class
 */
class IpBlackWhite extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 黑白类型，取值范围[black，white]
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ModifyDDoSAlarmThreshold请求参数结构体
 * @class
 */
class ModifyDDoSAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID,字符串类型
         * @type {string || null}
         */
        this.RsId = null;

        /**
         * 告警阈值类型，0-未设置，1-入流量，2-清洗流量
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * 告警阈值，大于0（目前暂定的值）
         * @type {number || null}
         */
        this.AlarmThreshold = null;

        /**
         * 资源关联的IP列表，高防包未绑定时，传空数组，高防IP专业版传多个IP的数据
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
        this.Business = 'Business' in params ? params.Business : null;
        this.RsId = 'RsId' in params ? params.RsId : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * DescribeNewL4Rules请求参数结构体
 * @class
 */
class DescribeNewL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 指定IP查询
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 指定高防IP端口查询
         * @type {number || null}
         */
        this.VirtualPort = null;

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
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateDDoSPolicy请求参数结构体
 * @class
 */
class CreateDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 协议禁用，必须填写且数组长度必须为1
         * @type {Array.<DDoSPolicyDropOption> || null}
         */
        this.DropOptions = null;

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 端口禁用，当没有禁用端口时填空数组
         * @type {Array.<DDoSPolicyPortLimit> || null}
         */
        this.PortLimits = null;

        /**
         * IP黑白名单，当没有IP黑白名单时填空数组
         * @type {Array.<IpBlackWhite> || null}
         */
        this.IpAllowDenys = null;

        /**
         * 报文过滤，当没有报文过滤时填空数组
         * @type {Array.<DDoSPolicyPacketFilter> || null}
         */
        this.PacketFilters = null;

        /**
         * 水印策略参数，当没有启用水印功能时填空数组，最多只能传一条水印策略（即数组大小不超过1）
         * @type {Array.<WaterPrintPolicy> || null}
         */
        this.WaterPrint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;

        if (params.DropOptions) {
            this.DropOptions = new Array();
            for (let z in params.DropOptions) {
                let obj = new DDoSPolicyDropOption();
                obj.deserialize(params.DropOptions[z]);
                this.DropOptions.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;

        if (params.PortLimits) {
            this.PortLimits = new Array();
            for (let z in params.PortLimits) {
                let obj = new DDoSPolicyPortLimit();
                obj.deserialize(params.PortLimits[z]);
                this.PortLimits.push(obj);
            }
        }

        if (params.IpAllowDenys) {
            this.IpAllowDenys = new Array();
            for (let z in params.IpAllowDenys) {
                let obj = new IpBlackWhite();
                obj.deserialize(params.IpAllowDenys[z]);
                this.IpAllowDenys.push(obj);
            }
        }

        if (params.PacketFilters) {
            this.PacketFilters = new Array();
            for (let z in params.PacketFilters) {
                let obj = new DDoSPolicyPacketFilter();
                obj.deserialize(params.PacketFilters[z]);
                this.PacketFilters.push(obj);
            }
        }

        if (params.WaterPrint) {
            this.WaterPrint = new Array();
            for (let z in params.WaterPrint) {
                let obj = new WaterPrintPolicy();
                obj.deserialize(params.WaterPrint[z]);
                this.WaterPrint.push(obj);
            }
        }

    }
}

/**
 * ModifyCCThreshold返回参数结构体
 * @class
 */
class ModifyCCThresholdResponse extends  AbstractModel {
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
 * ModifyNetReturnSwitch返回参数结构体
 * @class
 */
class ModifyNetReturnSwitchResponse extends  AbstractModel {
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
 * DescribeActionLog请求参数结构体
 * @class
 */
class DescribeActionLogRequest extends  AbstractModel {
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
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 搜索值，只支持资源ID或用户UIN
         * @type {string || null}
         */
        this.Filter = null;

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
        this.Business = 'Business' in params ? params.Business : null;
        this.Filter = 'Filter' in params ? params.Filter : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateL7RuleCert请求参数结构体
 * @class
 */
class CreateL7RuleCertRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源实例ID，比如高防IP实例的ID，高防IP专业版实例的ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 证书类型，当为协议为HTTPS协议时必须填，取值[2(腾讯云托管证书)]
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * DescribeBGPIPL7RuleMaxCnt返回参数结构体
 * @class
 */
class DescribeBGPIPL7RuleMaxCntResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 高防IP最多可添加的7层规则数量
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
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePcap返回参数结构体
 * @class
 */
class DescribePcapResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * pcap包的下载链接列表，无pcap包时为空数组；
         * @type {Array.<string> || null}
         */
        this.PcapUrlList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PcapUrlList = 'PcapUrlList' in params ? params.PcapUrlList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePackIndex返回参数结构体
 * @class
 */
class DescribePackIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段值，如下：
TotalPackCount：资源数
AttackPackCount：清洗中的资源数
BlockPackCount：封堵中的资源数
ExpiredPackCount：过期的资源数
ExpireingPackCount：即将过期的资源数
IsolatePackCount：隔离中的资源数
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
 * DescribeDDoSAttackSource请求参数结构体
 * @class
 */
class DescribeDDoSAttackSourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

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
         * 获取指定资源的特定ip的攻击源，可选
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * DescribeDDoSCount请求参数结构体
 * @class
 */
class DescribeDDoSCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

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
         * 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）]
         * @type {string || null}
         */
        this.MetricName = null;

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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * 地域资源实例数
 * @class
 */
class RegionInstanceCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域码
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域码（新规范）
         * @type {string || null}
         */
        this.RegionV3 = null;

        /**
         * 资源实例数
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
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionV3 = 'RegionV3' in params ? params.RegionV3 : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * 水印Key
 * @class
 */
class WaterPrintKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印KeyID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 水印Key值
         * @type {string || null}
         */
        this.KeyContent = null;

        /**
         * 水印Key的版本号
         * @type {string || null}
         */
        this.KeyVersion = null;

        /**
         * 是否开启，取值[0（没有开启），1（已开启）]
         * @type {number || null}
         */
        this.OpenStatus = null;

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
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyContent = 'KeyContent' in params ? params.KeyContent : null;
        this.KeyVersion = 'KeyVersion' in params ? params.KeyVersion : null;
        this.OpenStatus = 'OpenStatus' in params ? params.OpenStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

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
 * CreateNewL4Rules返回参数结构体
 * @class
 */
class CreateNewL4RulesResponse extends  AbstractModel {
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
 * DescribeDDoSUsedStatis返回参数结构体
 * @class
 */
class DescribeDDoSUsedStatisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段值，如下：
Days：高防资源使用天数
Attacks：DDoS防护次数
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
 * DescribeBasicCCThreshold请求参数结构体
 * @class
 */
class DescribeBasicCCThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的IP地址，取值如：1.1.1.1
         * @type {string || null}
         */
        this.BasicIp = null;

        /**
         * 查询IP所属地域，取值如：gz、bj、sh、hk等地域缩写
         * @type {string || null}
         */
        this.BasicRegion = null;

        /**
         * 专区类型，取值如：公有云专区：public，黑石专区：bm, NAT服务器专区：nat，互联网通道：channel。
         * @type {string || null}
         */
        this.BasicBizType = null;

        /**
         * 设备类型，取值如：服务器：cvm，公有云负载均衡：clb，黑石负载均衡：lb，NAT服务器：nat，互联网通道：channel.
         * @type {string || null}
         */
        this.BasicDeviceType = null;

        /**
         * 可选，IPInstance Nat 网关（如果查询的设备类型是NAT服务器，需要传此参数，通过nat资源查询接口获取）
         * @type {string || null}
         */
        this.BasicIpInstance = null;

        /**
         * 可选，运营商线路（如果查询的设备类型是NAT服务器，需要传此参数为5）
         * @type {number || null}
         */
        this.BasicIspCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BasicIp = 'BasicIp' in params ? params.BasicIp : null;
        this.BasicRegion = 'BasicRegion' in params ? params.BasicRegion : null;
        this.BasicBizType = 'BasicBizType' in params ? params.BasicBizType : null;
        this.BasicDeviceType = 'BasicDeviceType' in params ? params.BasicDeviceType : null;
        this.BasicIpInstance = 'BasicIpInstance' in params ? params.BasicIpInstance : null;
        this.BasicIspCode = 'BasicIspCode' in params ? params.BasicIspCode : null;

    }
}

/**
 * CreateDDoSPolicyCase返回参数结构体
 * @class
 */
class CreateDDoSPolicyCaseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略场景ID
         * @type {string || null}
         */
        this.SceneId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIPProductInfo返回参数结构体
 * @class
 */
class DescribeIPProductInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云产品信息列表，如果没有查询到则返回空数组，值说明如下：
Key为ProductName时，value表示云产品实例的名称；
Key为ProductInstanceId时，value表示云产品实例的ID；
Key为ProductType时，value表示的是云产品的类型（cvm表示云主机、clb表示负载均衡）;
Key为IP时，value表示云产品实例的IP；
         * @type {Array.<KeyValueRecord> || null}
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
                let obj = new KeyValueRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSSwitch返回参数结构体
 * @class
 */
class ModifyDDoSSwitchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前防护状态值，取值[0（关闭），1（开启）]
         * @type {number || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IP封堵记录
 * @class
 */
class IpBlockData extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 状态（Blocked：被封堵；UnBlocking：解封中；UnBlockFailed：解封失败）
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 封堵时间
         * @type {string || null}
         */
        this.BlockTime = null;

        /**
         * 解封时间（预计解封时间）
         * @type {string || null}
         */
        this.UnBlockTime = null;

        /**
         * 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封）
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BlockTime = 'BlockTime' in params ? params.BlockTime : null;
        this.UnBlockTime = 'UnBlockTime' in params ? params.UnBlockTime : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * DescribeCCSelfDefinePolicy请求参数结构体
 * @class
 */
class DescribeCCSelfDefinePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp高防包；bgp-multip共享包）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 拉取的条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * ModifyDDoSDefendStatus请求参数结构体
 * @class
 */
class ModifyDDoSDefendStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版；basic表示基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 防护状态值，取值[0（关闭），1（开启）]
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 关闭时长，单位小时，取值[0，1，2，3，4，5，6]；当Status=0表示关闭时，Hour必须大于0；
         * @type {number || null}
         */
        this.Hour = null;

        /**
         * 资源ID；当Business不是基础防护时必须填写此字段；
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 基础防护的IP，只有当Business为基础防护时才需要填写此字段；
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，IP所属的产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，IP所属的产品子类，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*);
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，表示IP所属的地域，取值：
"bj":     华北地区(北京)
"cd":     西南地区(成都)
"cq":     西南地区(重庆)
"gz":     华南地区(广州)
"gzopen": 华南地区(广州Open)
"hk":     中国香港
"kr":     东南亚地区(首尔)
"sh":     华东地区(上海)
"shjr":   华东地区(上海金融)
"szjr":   华南地区(深圳金融)
"sg":     东南亚地区(新加坡)
"th":     东南亚地区(泰国)
"de":     欧洲地区(德国)
"usw":    美国西部（硅谷）
"ca":     北美地区(多伦多)
"jp":     日本
"hzec":   杭州
"in":     印度
"use":    美东地区（弗吉尼亚）
"ru":     俄罗斯
"tpe":    中国台湾
"nj":     南京
         * @type {string || null}
         */
        this.IPRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Hour = 'Hour' in params ? params.Hour : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IPRegion = 'IPRegion' in params ? params.IPRegion : null;

    }
}

/**
 * DescribeRuleSets返回参数结构体
 * @class
 */
class DescribeRuleSetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则记录数数组，取值说明:
Key值为"Id"时，Value表示资源ID
Key值为"RuleIdList"时，Value值表示资源的规则ID，多个规则ID用","分割
Key值为"RuleNameList"时，Value值表示资源的规则名，多个规则名用","分割
Key值为"RuleNum"时，Value值表示资源的规则数
         * @type {Array.<KeyValueRecord> || null}
         */
        this.L4RuleSets = null;

        /**
         * 规则记录数数组，取值说明:
Key值为"Id"时，Value表示资源ID
Key值为"RuleIdList"时，Value值表示资源的规则ID，多个规则ID用","分割
Key值为"RuleNameList"时，Value值表示资源的规则名，多个规则名用","分割
Key值为"RuleNum"时，Value值表示资源的规则数
         * @type {Array.<KeyValueRecord> || null}
         */
        this.L7RuleSets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.L4RuleSets) {
            this.L4RuleSets = new Array();
            for (let z in params.L4RuleSets) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.L4RuleSets[z]);
                this.L4RuleSets.push(obj);
            }
        }

        if (params.L7RuleSets) {
            this.L7RuleSets = new Array();
            for (let z in params.L7RuleSets) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.L7RuleSets[z]);
                this.L7RuleSets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBaradData返回参数结构体
 * @class
 */
class DescribeBaradDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回指标的值
         * @type {Array.<BaradData> || null}
         */
        this.DataList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataList) {
            this.DataList = new Array();
            for (let z in params.DataList) {
                let obj = new BaradData();
                obj.deserialize(params.DataList[z]);
                this.DataList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSEvInfo请求参数结构体
 * @class
 */
class DescribeDDoSEvInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeDDoSAttackIPRegionMap返回参数结构体
 * @class
 */
class DescribeDDoSAttackIPRegionMapResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 全球地域分布数据
         * @type {Array.<KeyValueRecord> || null}
         */
        this.NationCount = null;

        /**
         * 国内省份地域分布数据
         * @type {Array.<KeyValueRecord> || null}
         */
        this.ProvinceCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NationCount) {
            this.NationCount = new Array();
            for (let z in params.NationCount) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.NationCount[z]);
                this.NationCount.push(obj);
            }
        }

        if (params.ProvinceCount) {
            this.ProvinceCount = new Array();
            for (let z in params.ProvinceCount) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.ProvinceCount[z]);
                this.ProvinceCount.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyL4KeepTime返回参数结构体
 * @class
 */
class ModifyL4KeepTimeResponse extends  AbstractModel {
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
 * ModifyL7Rules返回参数结构体
 * @class
 */
class ModifyL7RulesResponse extends  AbstractModel {
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
 * DescribeL7HealthConfig请求参数结构体
 * @class
 */
class DescribeL7HealthConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID数组，当导出所有规则的健康检查配置则不填或填空数组；
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
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

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
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 绑定的产品分类，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 产品分类下的子类型，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); 如果绑定的是托管IP没有对应的资源实例ID，请填写"none";
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
 * DescribePcap请求参数结构体
 * @class
 */
class DescribePcapRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 攻击事件的开始时间，格式为"2018-08-28 07:00:00"
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击事件的结束时间，格式为"2018-08-28 07:02:00"
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 资源的IP，只有当Business为net时才需要填写资源实例下的IP；
         * @type {string || null}
         */
        this.Ip = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * DescribeDDoSAlarmThreshold返回参数结构体
 * @class
 */
class DescribeDDoSAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS告警阈值
         * @type {DDoSAlarmThreshold || null}
         */
        this.DDoSAlarmThreshold = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DDoSAlarmThreshold) {
            let obj = new DDoSAlarmThreshold();
            obj.deserialize(params.DDoSAlarmThreshold)
            this.DDoSAlarmThreshold = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KeyValue记录
 * @class
 */
class KeyValueRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一条记录的Key-Value数组
         * @type {Array.<KeyValue> || null}
         */
        this.Record = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Record) {
            this.Record = new Array();
            for (let z in params.Record) {
                let obj = new KeyValue();
                obj.deserialize(params.Record[z]);
                this.Record.push(obj);
            }
        }

    }
}

/**
 * DescribeBasicDeviceThreshold请求参数结构体
 * @class
 */
class DescribeBasicDeviceThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的IP地址，取值如：1.1.1.1
         * @type {string || null}
         */
        this.BasicIp = null;

        /**
         * 查询IP所属地域，取值如：gz、bj、sh、hk等地域缩写
         * @type {string || null}
         */
        this.BasicRegion = null;

        /**
         * 专区类型，取值如：公有云专区：public，黑石专区：bm, NAT服务器专区：nat，互联网通道：channel。
         * @type {string || null}
         */
        this.BasicBizType = null;

        /**
         * 设备类型，取值如：服务器：cvm，公有云负载均衡：clb，黑石负载均衡：lb，NAT服务器：nat，互联网通道：channel.
         * @type {string || null}
         */
        this.BasicDeviceType = null;

        /**
         * 有效性检查，取值为1
         * @type {number || null}
         */
        this.BasicCheckFlag = null;

        /**
         * 可选，IPInstance Nat 网关（如果查询的设备类型是NAT服务器，需要传此参数，通过nat资源查询接口获取）
         * @type {string || null}
         */
        this.BasicIpInstance = null;

        /**
         * 可选，运营商线路（如果查询的设备类型是NAT服务器，需要传此参数为5）
         * @type {number || null}
         */
        this.BasicIspCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BasicIp = 'BasicIp' in params ? params.BasicIp : null;
        this.BasicRegion = 'BasicRegion' in params ? params.BasicRegion : null;
        this.BasicBizType = 'BasicBizType' in params ? params.BasicBizType : null;
        this.BasicDeviceType = 'BasicDeviceType' in params ? params.BasicDeviceType : null;
        this.BasicCheckFlag = 'BasicCheckFlag' in params ? params.BasicCheckFlag : null;
        this.BasicIpInstance = 'BasicIpInstance' in params ? params.BasicIpInstance : null;
        this.BasicIspCode = 'BasicIspCode' in params ? params.BasicIspCode : null;

    }
}

/**
 * DescribleNewL7Rules返回参数结构体
 * @class
 */
class DescribleNewL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则列表
         * @type {Array.<NewL7RuleEntry> || null}
         */
        this.Rules = null;

        /**
         * 总规则数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 健康检查配置列表
         * @type {Array.<L7RuleHealth> || null}
         */
        this.Healths = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Healths) {
            this.Healths = new Array();
            for (let z in params.Healths) {
                let obj = new L7RuleHealth();
                obj.deserialize(params.Healths[z]);
                this.Healths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResBindDDoSPolicy返回参数结构体
 * @class
 */
class ModifyResBindDDoSPolicyResponse extends  AbstractModel {
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
 * ModifyDDoSWaterKey请求参数结构体
 * @class
 */
class ModifyDDoSWaterKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 密钥操作，取值：[add（添加），delete（删除），open（开启），close（关闭），get（获取密钥）]
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 密钥ID，当添加密钥操作时可以不填或填0，其他操作时必须填写；
         * @type {number || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * ModifyCCLevel返回参数结构体
 * @class
 */
class ModifyCCLevelResponse extends  AbstractModel {
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
 * DescribeBaradData请求参数结构体
 * @class
 */
class DescribeBaradDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 指标名，取值：
connum表示TCP活跃连接数；
new_conn表示新建TCP连接数；
inactive_conn表示非活跃连接数;
intraffic表示入流量；
outtraffic表示出流量；
alltraffic表示出流量和入流量之和；
inpkg表示入包速率；
outpkg表示出包速率；
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 统计时间粒度，单位秒（300表示5分钟；3600表示小时；86400表示天）
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间，秒部分保持为0，分钟部分为5的倍数
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间，秒部分保持为0，分钟部分为5的倍数
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 统计方式，取值：
max表示最大值；
min表示最小值；
avg表示均值；
         * @type {string || null}
         */
        this.Statistics = null;

        /**
         * 协议端口数组
         * @type {Array.<ProtocolPort> || null}
         */
        this.ProtocolPort = null;

        /**
         * 资源实例下的IP，只有当Business=net(高防IP专业版)时才必须填写资源的一个IP（因为高防IP专业版资源实例有多个IP，才需要指定）；
         * @type {string || null}
         */
        this.Ip = null;

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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Statistics = 'Statistics' in params ? params.Statistics : null;

        if (params.ProtocolPort) {
            this.ProtocolPort = new Array();
            for (let z in params.ProtocolPort) {
                let obj = new ProtocolPort();
                obj.deserialize(params.ProtocolPort[z]);
                this.ProtocolPort.push(obj);
            }
        }
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * DescribeDDoSDefendStatus返回参数结构体
 * @class
 */
class DescribeDDoSDefendStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 防护状态，为0表示防护处于关闭状态，为1表示防护处于开启状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DefendStatus = null;

        /**
         * 防护临时关闭的过期时间，当防护状态为开启时此字段为空；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UndefendExpire = null;

        /**
         * 控制台功能展示字段，为1表示控制台功能展示，为0表示控制台功能隐藏
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ShowFlag = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DefendStatus = 'DefendStatus' in params ? params.DefendStatus : null;
        this.UndefendExpire = 'UndefendExpire' in params ? params.UndefendExpire : null;
        this.ShowFlag = 'ShowFlag' in params ? params.ShowFlag : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCSelfDefinePolicy返回参数结构体
 * @class
 */
class DescribeCCSelfDefinePolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义规则总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 策略列表
         * @type {Array.<CCPolicy> || null}
         */
        this.Policys = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Policys) {
            this.Policys = new Array();
            for (let z in params.Policys) {
                let obj = new CCPolicy();
                obj.deserialize(params.Policys[z]);
                this.Policys.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cc自定义规则
 * @class
 */
class CCPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 匹配模式，取值[matching(匹配模式), speedlimit(限速模式)]
         * @type {string || null}
         */
        this.Smode = null;

        /**
         * 策略id
         * @type {string || null}
         */
        this.SetId = null;

        /**
         * 每分钟限制的次数
         * @type {number || null}
         */
        this.Frequency = null;

        /**
         * 执行策略模式，拦截或者验证码，取值[alg（验证码）, drop（拦截）]
         * @type {string || null}
         */
        this.ExeMode = null;

        /**
         * 生效开关
         * @type {number || null}
         */
        this.Switch = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 规则列表
         * @type {Array.<CCRule> || null}
         */
        this.RuleList = null;

        /**
         * IP列表，如果不填时，请传空数组但不能为null；
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * cc防护类型，取值[http，https]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 可选字段，表示HTTPS的CC防护域名对应的转发规则ID;
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * HTTPS的CC防护域名
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
        this.Name = 'Name' in params ? params.Name : null;
        this.Smode = 'Smode' in params ? params.Smode : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.ExeMode = 'ExeMode' in params ? params.ExeMode : null;
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.RuleList) {
            this.RuleList = new Array();
            for (let z in params.RuleList) {
                let obj = new CCRule();
                obj.deserialize(params.RuleList[z]);
                this.RuleList.push(obj);
            }
        }
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * ModifyDDoSAIStatus返回参数结构体
 * @class
 */
class ModifyDDoSAIStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * AI防护状态，取值[on，off]
         * @type {string || null}
         */
        this.DDoSAI = null;

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
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSNetEvInfo请求参数结构体
 * @class
 */
class DescribeDDoSNetEvInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifyResourceRenewFlag请求参数结构体
 * @class
 */
class ModifyResourceRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版；shield表示棋牌盾；bgp表示独享包；bgp-multip表示共享包；insurance表示保险包；staticpack表示三网套餐包）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 自动续费标记（0手动续费；1自动续费；2到期不续费）
         * @type {number || null}
         */
        this.RenewFlag = null;

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
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * DescribeCCEvList返回参数结构体
 * @class
 */
class DescribeCCEvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（shield表示棋牌盾；bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源实例的IP列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.IpList = null;

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
         * CC攻击事件列表
         * @type {Array.<CCEventRecord> || null}
         */
        this.Data = null;

        /**
         * 总记录数
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CCEventRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCFrequencyRules请求参数结构体
 * @class
 */
class DescribeCCFrequencyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）；当填写时表示获取转发规则的访问频率控制规则；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * CreateL4HealthConfig请求参数结构体
 * @class
 */
class CreateL4HealthConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 四层健康检查配置数组
         * @type {Array.<L4HealthConfig> || null}
         */
        this.HealthConfig = null;

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

        if (params.HealthConfig) {
            this.HealthConfig = new Array();
            for (let z in params.HealthConfig) {
                let obj = new L4HealthConfig();
                obj.deserialize(params.HealthConfig[z]);
                this.HealthConfig.push(obj);
            }
        }

    }
}

/**
 * DescribeBGPIPL7RuleMaxCnt请求参数结构体
 * @class
 */
class DescribeBGPIPL7RuleMaxCntRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyDDoSPolicyName返回参数结构体
 * @class
 */
class ModifyDDoSPolicyNameResponse extends  AbstractModel {
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
 * DescribeCCAlarmThreshold请求参数结构体
 * @class
 */
class DescribeCCAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID,字符串类型
         * @type {string || null}
         */
        this.RsId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.RsId = 'RsId' in params ? params.RsId : null;

    }
}

/**
 * ModifyCCUrlAllow请求参数结构体
 * @class
 */
class ModifyCCUrlAllowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * =add表示添加，=delete表示删除
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 黑/白名单类型；取值[white(白名单)]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * URL数组，URL格式如下：
http://域名/cgi
https://域名/cgi
         * @type {Array.<string> || null}
         */
        this.UrlList = null;

        /**
         * 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写Domain和RuleId字段；
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 可选字段，表示HTTPS协议的7层转发规则域名（通过获取7层转发规则接口可以获取域名），只有当Protocol字段为https时才必须填写此字段；
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 可选字段，表示HTTPS协议的7层转发规则ID（通过获取7层转发规则接口可以获取规则ID），当添加并且Protocol=https时必须填写；
当Method为delete时，可以不用填写此字段；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.UrlList = 'UrlList' in params ? params.UrlList : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * ModifyDDoSAlarmThreshold返回参数结构体
 * @class
 */
class ModifyDDoSAlarmThresholdResponse extends  AbstractModel {
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
 * ModifyDDoSLevel返回参数结构体
 * @class
 */
class ModifyDDoSLevelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 防护等级，取值[low,middle,high]
         * @type {string || null}
         */
        this.DDoSLevel = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeIpBlockList返回参数结构体
 * @class
 */
class DescribeIpBlockListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP封堵列表
         * @type {Array.<IpBlockData> || null}
         */
        this.List = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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
                let obj = new IpBlockData();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCCIpAllowDeny返回参数结构体
 * @class
 */
class DescribeCCIpAllowDenyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段被RecordList字段替代了，请不要使用
         * @type {Array.<KeyValue> || null}
         */
        this.Data = null;

        /**
         * 记录数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 返回黑/白名单的记录，
"Key":"ip"时，"Value":值表示ip;
"Key":"domain"时， "Value":值表示域名;
"Key":"type"时，"Value":值表示黑白名单类型(white为白名单，block为黑名单);
"Key":"protocol"时，"Value":值表示CC防护的协议(http或https);
         * @type {Array.<KeyValueRecord> || null}
         */
        this.RecordList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSIpLog返回参数结构体
 * @class
 */
class DescribeDDoSIpLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * IP攻击日志，KeyValue数组，Key-Value取值说明：
Key为"LogTime"时，Value值为IP日志时间
Key为"LogMessage"时，Value值为Ip日志内容
         * @type {Array.<KeyValueRecord> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * cc自定义策略配置的规则
 * @class
 */
class CCRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则的key, 可以为host、cgi、ua、referer
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * 规则的条件，可以为include、not_include、equal
         * @type {string || null}
         */
        this.Operator = null;

        /**
         * 规则的值，长度小于31字节
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
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.Operator = 'Operator' in params ? params.Operator : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DescribeResIpList返回参数结构体
 * @class
 */
class DescribeResIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源的IP列表
         * @type {Array.<ResourceIp> || null}
         */
        this.Resource = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Resource) {
            this.Resource = new Array();
            for (let z in params.Resource) {
                let obj = new ResourceIp();
                obj.deserialize(params.Resource[z]);
                this.Resource.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCIpAllowDeny请求参数结构体
 * @class
 */
class ModifyCCIpAllowDenyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * add表示添加，delete表示删除
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 黑/白名单类型；取值[white(白名单)，black(黑名单)]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 黑/白名单的IP数组
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写Domain和RuleId字段；
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 可选字段，表示HTTPS协议的7层转发规则域名（通过获取7层转发规则接口可以获取域名），只有当Protocol字段为https时才必须填写此字段；
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 可选字段，表示HTTPS协议的7层转发规则ID（通过获取7层转发规则接口可以获取规则ID），
当Method为delete时，不用填写此字段；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * CreateInstanceName返回参数结构体
 * @class
 */
class CreateInstanceNameResponse extends  AbstractModel {
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
 * DescribeDDoSDefendStatus请求参数结构体
 * @class
 */
class DescribeDDoSDefendStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（basic表示基础防护；bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源实例ID，只有当Business不是基础防护时才需要填写此字段；
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 基础防护的IP，只有当Business为基础防护时才需要填写此字段；
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，IP所属的产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，IP所属的产品子类，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*);
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，表示IP所属的地域，取值：
"bj":     华北地区(北京)
"cd":     西南地区(成都)
"cq":     西南地区(重庆)
"gz":     华南地区(广州)
"gzopen": 华南地区(广州Open)
"hk":     中国香港
"kr":     东南亚地区(首尔)
"sh":     华东地区(上海)
"shjr":   华东地区(上海金融)
"szjr":   华南地区(深圳金融)
"sg":     东南亚地区(新加坡)
"th":     东南亚地区(泰国)
"de":     欧洲地区(德国)
"usw":    美国西部（硅谷）
"ca":     北美地区(多伦多)
"jp":     日本
"hzec":   杭州
"in":     印度
"use":    美东地区（弗吉尼亚）
"ru":     俄罗斯
"tpe":    中国台湾
"nj":     南京
         * @type {string || null}
         */
        this.IPRegion = null;

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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IPRegion = 'IPRegion' in params ? params.IPRegion : null;

    }
}

/**
 * ModifyDDoSWaterKey返回参数结构体
 * @class
 */
class ModifyDDoSWaterKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印密钥列表
         * @type {Array.<WaterPrintKey> || null}
         */
        this.KeyList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyList) {
            this.KeyList = new Array();
            for (let z in params.KeyList) {
                let obj = new WaterPrintKey();
                obj.deserialize(params.KeyList[z]);
                this.KeyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyL4Health请求参数结构体
 * @class
 */
class ModifyL4HealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 健康检查参数数组
         * @type {Array.<L4RuleHealth> || null}
         */
        this.Healths = null;

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

        if (params.Healths) {
            this.Healths = new Array();
            for (let z in params.Healths) {
                let obj = new L4RuleHealth();
                obj.deserialize(params.Healths[z]);
                this.Healths.push(obj);
            }
        }

    }
}

/**
 * ModifyCCHostProtection返回参数结构体
 * @class
 */
class ModifyCCHostProtectionResponse extends  AbstractModel {
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
 * CreateL4Rules返回参数结构体
 * @class
 */
class CreateL4RulesResponse extends  AbstractModel {
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
 * DescribeInsurePacks请求参数结构体
 * @class
 */
class DescribeInsurePacksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可选字段，保险包套餐ID，当要获取指定ID（例如insure-000000xe）的保险包套餐时请填写此字段；
         * @type {Array.<string> || null}
         */
        this.IdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IdList = 'IdList' in params ? params.IdList : null;

    }
}

/**
 * DescribeDDoSNetCount请求参数结构体
 * @class
 */
class DescribeDDoSNetCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

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
         * 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）]
         * @type {string || null}
         */
        this.MetricName = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

    }
}

/**
 * 分页索引
 * @class
 */
class Paging extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始位置
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyCCSelfDefinePolicy请求参数结构体
 * @class
 */
class ModifyCCSelfDefinePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.SetId = null;

        /**
         * CC策略描述
         * @type {CCPolicy || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SetId = 'SetId' in params ? params.SetId : null;

        if (params.Policy) {
            let obj = new CCPolicy();
            obj.deserialize(params.Policy)
            this.Policy = obj;
        }

    }
}

/**
 * 四层健康检查配置
 * @class
 */
class L4HealthConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发协议，取值[TCP, UDP]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 转发端口
         * @type {number || null}
         */
        this.VirtualPort = null;

        /**
         * =1表示开启；=0表示关闭
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 响应超时时间，单位秒
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 检测间隔时间，单位秒
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 不健康阈值，单位次
         * @type {number || null}
         */
        this.KickNum = null;

        /**
         * 健康阈值，单位次
         * @type {number || null}
         */
        this.AliveNum = null;

        /**
         * 会话保持时间，单位秒
         * @type {number || null}
         */
        this.KeepTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.KickNum = 'KickNum' in params ? params.KickNum : null;
        this.AliveNum = 'AliveNum' in params ? params.AliveNum : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

    }
}

/**
 * CreateCCSelfDefinePolicy请求参数结构体
 * @class
 */
class CreateCCSelfDefinePolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * CC策略描述
         * @type {CCPolicy || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Policy) {
            let obj = new CCPolicy();
            obj.deserialize(params.Policy)
            this.Policy = obj;
        }

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
         * 成功/错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 描述
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribleL4Rules请求参数结构体
 * @class
 */
class DescribleL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID，可选参数，填写后获取指定的规则
         * @type {Array.<string> || null}
         */
        this.RuleIdList = null;

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
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * L4规则
 * @class
 */
class L4RuleEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发协议，取值[TCP, UDP]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 转发端口
         * @type {number || null}
         */
        this.VirtualPort = null;

        /**
         * 源站端口
         * @type {number || null}
         */
        this.SourcePort = null;

        /**
         * 回源方式，取值[1(域名回源)，2(IP回源)]
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 会话保持时间，单位秒
         * @type {number || null}
         */
        this.KeepTime = null;

        /**
         * 回源列表
         * @type {Array.<L4RuleSource> || null}
         */
        this.SourceList = null;

        /**
         * 负载均衡方式，取值[1(加权轮询)，2(源IP hash)]
         * @type {number || null}
         */
        this.LbType = null;

        /**
         * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]；
         * @type {number || null}
         */
        this.KeepEnable = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 移除水印状态，取值[0(关闭)，1(开启)]
         * @type {number || null}
         */
        this.RemoveSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.SourcePort = 'SourcePort' in params ? params.SourcePort : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

        if (params.SourceList) {
            this.SourceList = new Array();
            for (let z in params.SourceList) {
                let obj = new L4RuleSource();
                obj.deserialize(params.SourceList[z]);
                this.SourceList.push(obj);
            }
        }
        this.LbType = 'LbType' in params ? params.LbType : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RemoveSwitch = 'RemoveSwitch' in params ? params.RemoveSwitch : null;

    }
}

/**
 * DescribeL4HealthConfig请求参数结构体
 * @class
 */
class DescribeL4HealthConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID数组，当导出所有规则的健康检查配置则不填或填空数组；
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
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * CreateL7CCRule返回参数结构体
 * @class
 */
class CreateL7CCRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 7层CC自定义规则参数，当没有开启CC自定义规则时，返回空数组
         * @type {Array.<CCRuleConfig> || null}
         */
        this.RuleConfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RuleConfig) {
            this.RuleConfig = new Array();
            for (let z in params.RuleConfig) {
                let obj = new CCRuleConfig();
                obj.deserialize(params.RuleConfig[z]);
                this.RuleConfig.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyNetReturnSwitch请求参数结构体
 * @class
 */
class ModifyNetReturnSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Status 表示回切开关，0: 关闭， 1:打开
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 回切时长，单位：小时，取值[0,1,2,3,4,5,6;]当status=1时必选填写Hour>0
         * @type {number || null}
         */
        this.Hour = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.Hour = 'Hour' in params ? params.Hour : null;

    }
}

/**
 * CreateL7CCRule请求参数结构体
 * @class
 */
class CreateL7CCRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 操作码，取值[query(表示查询)，add(表示添加)，del(表示删除)]
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 7层转发规则ID，例如：rule-0000001
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 7层CC自定义规则参数，当操作码为query时，可以不用填写；当操作码为add或del时，必须填写，且数组长度只能为1；
         * @type {Array.<CCRuleConfig> || null}
         */
        this.RuleConfig = null;

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
        this.Method = 'Method' in params ? params.Method : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.RuleConfig) {
            this.RuleConfig = new Array();
            for (let z in params.RuleConfig) {
                let obj = new CCRuleConfig();
                obj.deserialize(params.RuleConfig[z]);
                this.RuleConfig.push(obj);
            }
        }

    }
}

/**
 * CreateL7Rules请求参数结构体
 * @class
 */
class CreateL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则列表
         * @type {Array.<L7RuleEntry> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * CreateL4Rules请求参数结构体
 * @class
 */
class CreateL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则列表
         * @type {Array.<L4RuleEntry> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L4RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

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
         * 异常规则的总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP及错误信息，多个IP用","分割
         * @type {Array.<KeyValue> || null}
         */
        this.ErrHealths = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ErrHealths) {
            this.ErrHealths = new Array();
            for (let z in params.ErrHealths) {
                let obj = new KeyValue();
                obj.deserialize(params.ErrHealths[z]);
                this.ErrHealths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSNetEvList返回参数结构体
 * @class
 */
class DescribeDDoSNetEvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

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
         * DDoS攻击事件列表
         * @type {Array.<DDoSEventRecord> || null}
         */
        this.Data = null;

        /**
         * 总记录数
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DDoSEventRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCFrequencyRulesStatus返回参数结构体
 * @class
 */
class ModifyCCFrequencyRulesStatusResponse extends  AbstractModel {
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
 * DescribeL4RulesErrHealth请求参数结构体
 * @class
 */
class DescribeL4RulesErrHealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
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
        this.Id = 'Id' in params ? params.Id : null;

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

    }
}

/**
 * CreateBasicDDoSAlarmThreshold返回参数结构体
 * @class
 */
class CreateBasicDDoSAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当存在告警阈值配置时，返回告警阈值大于0，当不存在告警配置时，返回告警阈值为0；
         * @type {number || null}
         */
        this.AlarmThreshold = null;

        /**
         * 告警阈值类型，1-入流量，2-清洗流量；当AlarmThreshold大于0时有效；
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNetReturn返回参数结构体
 * @class
 */
class CreateNetReturnResponse extends  AbstractModel {
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
 * DeleteL4Rules请求参数结构体
 * @class
 */
class DeleteL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID列表
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
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * DescribeResourceList请求参数结构体
 * @class
 */
class DescribeResourceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 地域码搜索，可选，当不指定地域时空数组，当指定地域时，填地域码。例如：["gz", "sh"]
         * @type {Array.<string> || null}
         */
        this.RegionList = null;

        /**
         * 线路搜索，可选，只有当获取高防IP资源列表是可以选填，取值为[1（BGP线路），2（南京电信），3（南京联通），99（第三方合作线路）]，当获取其他产品时请填空数组；
         * @type {Array.<number> || null}
         */
        this.Line = null;

        /**
         * 资源ID搜索，可选，当不为空数组时表示获取指定资源的资源列表；
         * @type {Array.<string> || null}
         */
        this.IdList = null;

        /**
         * 资源名称搜索，可选，当不为空字符串时表示按名称搜索资源；
         * @type {string || null}
         */
        this.Name = null;

        /**
         * IP搜索列表，可选，当不为空时表示安装IP搜索资源；
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * 资源状态搜索列表，可选，取值为[0（运行中）, 1（清洗中）, 2（封堵中）]，当填空数组时不进行状态搜索；
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 即将到期搜索；可选，取值为[0（不搜索），1（搜索即将到期的资源）]
         * @type {number || null}
         */
        this.Expire = null;

        /**
         * 排序字段，可选
         * @type {Array.<OrderBy> || null}
         */
        this.OderBy = null;

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
         * 高防IP专业版资源的CNAME，可选，只对高防IP专业版资源列表有效；
         * @type {string || null}
         */
        this.CName = null;

        /**
         * 高防IP专业版资源的域名，可选，只对高防IP专业版资源列表有效；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.RegionList = 'RegionList' in params ? params.RegionList : null;
        this.Line = 'Line' in params ? params.Line : null;
        this.IdList = 'IdList' in params ? params.IdList : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Expire = 'Expire' in params ? params.Expire : null;

        if (params.OderBy) {
            this.OderBy = new Array();
            for (let z in params.OderBy) {
                let obj = new OrderBy();
                obj.deserialize(params.OderBy[z]);
                this.OderBy.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CName = 'CName' in params ? params.CName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DeleteL4Rules返回参数结构体
 * @class
 */
class DeleteL4RulesResponse extends  AbstractModel {
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
 * DescribleNewL7Rules请求参数结构体
 * @class
 */
class DescribleNewL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

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
         * 域名搜索，选填，当需要搜索域名请填写
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发协议搜索，选填，取值[http, https, http/https]
         * @type {Array.<string> || null}
         */
        this.ProtocolList = null;

        /**
         * 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
         * @type {Array.<number> || null}
         */
        this.StatusList = null;

        /**
         * IP搜索，选填，当需要搜索IP请填写
         * @type {string || null}
         */
        this.Ip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ProtocolList = 'ProtocolList' in params ? params.ProtocolList : null;
        this.StatusList = 'StatusList' in params ? params.StatusList : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * DescribeIPProductInfo请求参数结构体
 * @class
 */
class DescribeIPProductInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * IP列表
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
        this.Business = 'Business' in params ? params.Business : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * CreateL7HealthConfig请求参数结构体
 * @class
 */
class CreateL7HealthConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 七层健康检查配置数组
         * @type {Array.<L7HealthConfig> || null}
         */
        this.HealthConfig = null;

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

        if (params.HealthConfig) {
            this.HealthConfig = new Array();
            for (let z in params.HealthConfig) {
                let obj = new L7HealthConfig();
                obj.deserialize(params.HealthConfig[z]);
                this.HealthConfig.push(obj);
            }
        }

    }
}

/**
 * CreateL7RuleCert返回参数结构体
 * @class
 */
class CreateL7RuleCertResponse extends  AbstractModel {
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
 * DescribeDDoSAttackIPRegionMap请求参数结构体
 * @class
 */
class DescribeDDoSAttackIPRegionMapRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 统计开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间，最大可统计的时间范围是半年；
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 指定资源的特定IP的攻击源，可选
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

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
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 协议禁用，必须填写且数组长度必须为1
         * @type {Array.<DDoSPolicyDropOption> || null}
         */
        this.DropOptions = null;

        /**
         * 端口禁用，当没有禁用端口时填空数组
         * @type {Array.<DDoSPolicyPortLimit> || null}
         */
        this.PortLimits = null;

        /**
         * IP黑白名单，当没有IP黑白名单时填空数组
         * @type {Array.<IpBlackWhite> || null}
         */
        this.IpAllowDenys = null;

        /**
         * 报文过滤，当没有报文过滤时填空数组
         * @type {Array.<DDoSPolicyPacketFilter> || null}
         */
        this.PacketFilters = null;

        /**
         * 水印策略参数，当没有启用水印功能时填空数组，最多只能传一条水印策略（即数组大小不超过1）
         * @type {Array.<WaterPrintPolicy> || null}
         */
        this.WaterPrint = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

        if (params.DropOptions) {
            this.DropOptions = new Array();
            for (let z in params.DropOptions) {
                let obj = new DDoSPolicyDropOption();
                obj.deserialize(params.DropOptions[z]);
                this.DropOptions.push(obj);
            }
        }

        if (params.PortLimits) {
            this.PortLimits = new Array();
            for (let z in params.PortLimits) {
                let obj = new DDoSPolicyPortLimit();
                obj.deserialize(params.PortLimits[z]);
                this.PortLimits.push(obj);
            }
        }

        if (params.IpAllowDenys) {
            this.IpAllowDenys = new Array();
            for (let z in params.IpAllowDenys) {
                let obj = new IpBlackWhite();
                obj.deserialize(params.IpAllowDenys[z]);
                this.IpAllowDenys.push(obj);
            }
        }

        if (params.PacketFilters) {
            this.PacketFilters = new Array();
            for (let z in params.PacketFilters) {
                let obj = new DDoSPolicyPacketFilter();
                obj.deserialize(params.PacketFilters[z]);
                this.PacketFilters.push(obj);
            }
        }

        if (params.WaterPrint) {
            this.WaterPrint = new Array();
            for (let z in params.WaterPrint) {
                let obj = new WaterPrintPolicy();
                obj.deserialize(params.WaterPrint[z]);
                this.WaterPrint.push(obj);
            }
        }

    }
}

/**
 * DescribeSourceIpSegment请求参数结构体
 * @class
 */
class DescribeSourceIpSegmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeSourceIpSegment返回参数结构体
 * @class
 */
class DescribeSourceIpSegmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回源IP段，多个用"；"分隔
         * @type {string || null}
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
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyResBindDDoSPolicy请求参数结构体
 * @class
 */
class ModifyResBindDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 绑定或解绑，bind表示绑定策略，unbind表示解绑策略
         * @type {string || null}
         */
        this.Method = null;

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
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Method = 'Method' in params ? params.Method : null;

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
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * =1表示开启；=0表示关闭
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 检测间隔时间，单位秒
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 不健康阈值，单位次
         * @type {number || null}
         */
        this.KickNum = null;

        /**
         * 健康阈值，单位次
         * @type {number || null}
         */
        this.AliveNum = null;

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
         * 检查目录的URL，默认为/
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 配置状态，0： 正常，1：配置中，2：配置失败
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.KickNum = 'KickNum' in params ? params.KickNum : null;
        this.AliveNum = 'AliveNum' in params ? params.AliveNum : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateL7RulesUpload请求参数结构体
 * @class
 */
class CreateL7RulesUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则列表
         * @type {Array.<L7RuleEntry> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * 规则健康检查参数
 * @class
 */
class L4RuleHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * =1表示开启；=0表示关闭
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 响应超时时间，单位秒
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 检测间隔时间，单位秒，必须要大于响应超时时间
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 不健康阈值，单位次
         * @type {number || null}
         */
        this.KickNum = null;

        /**
         * 健康阈值，单位次
         * @type {number || null}
         */
        this.AliveNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.KickNum = 'KickNum' in params ? params.KickNum : null;
        this.AliveNum = 'AliveNum' in params ? params.AliveNum : null;

    }
}

/**
 * ModifyCCFrequencyRules请求参数结构体
 * @class
 */
class ModifyCCFrequencyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * CC的访问频率控制规则ID
         * @type {string || null}
         */
        this.CCFrequencyRuleId = null;

        /**
         * 匹配规则，取值["include"(前缀匹配)，"equal"(完全匹配)]
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 统计周期，单位秒，取值[10, 30, 60]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 访问次数，取值[1-10000]
         * @type {number || null}
         */
        this.ReqNumber = null;

        /**
         * 执行动作，取值["alg"（人机识别）, "drop"（拦截）]
         * @type {string || null}
         */
        this.Act = null;

        /**
         * 执行时间，单位秒，取值[1-900]
         * @type {number || null}
         */
        this.ExeDuration = null;

        /**
         * URI字符串，必须以/开头，例如/abc/a.php，长度不超过31；当URI=/时，匹配模式只能选择前缀匹配；
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * User-Agent字符串，长度不超过80
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Cookie字符串，长度不超过40
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
        this.Business = 'Business' in params ? params.Business : null;
        this.CCFrequencyRuleId = 'CCFrequencyRuleId' in params ? params.CCFrequencyRuleId : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ReqNumber = 'ReqNumber' in params ? params.ReqNumber : null;
        this.Act = 'Act' in params ? params.Act : null;
        this.ExeDuration = 'ExeDuration' in params ? params.ExeDuration : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;

    }
}

/**
 * ModifyCCPolicySwitch返回参数结构体
 * @class
 */
class ModifyCCPolicySwitchResponse extends  AbstractModel {
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
 * CreateDDoSPolicyCase请求参数结构体
 * @class
 */
class CreateDDoSPolicyCaseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 策略场景名，字符串长度小于64
         * @type {string || null}
         */
        this.CaseName = null;

        /**
         * 开发平台，取值[PC（PC客户端）， MOBILE（移动端）， TV（电视端）， SERVER（主机）]
         * @type {Array.<string> || null}
         */
        this.PlatformTypes = null;

        /**
         * 细分品类，取值[WEB（网站）， GAME（游戏）， APP（应用）， OTHER（其他）]
         * @type {string || null}
         */
        this.AppType = null;

        /**
         * 应用协议，取值[tcp（TCP协议），udp（UDP协议），icmp（ICMP协议），all（其他协议）]
         * @type {Array.<string> || null}
         */
        this.AppProtocols = null;

        /**
         * TCP业务起始端口，取值(0, 65535]
         * @type {string || null}
         */
        this.TcpSportStart = null;

        /**
         * TCP业务结束端口，取值(0, 65535]，必须大于等于TCP业务起始端口
         * @type {string || null}
         */
        this.TcpSportEnd = null;

        /**
         * UDP业务起始端口，取值范围(0, 65535]
         * @type {string || null}
         */
        this.UdpSportStart = null;

        /**
         * UDP业务结束端口，取值范围(0, 65535)，必须大于等于UDP业务起始端口
         * @type {string || null}
         */
        this.UdpSportEnd = null;

        /**
         * 是否有海外客户，取值[no（没有）, yes（有）]
         * @type {string || null}
         */
        this.HasAbroad = null;

        /**
         * 是否会主动对外发起TCP请求，取值[no（不会）, yes（会）]
         * @type {string || null}
         */
        this.HasInitiateTcp = null;

        /**
         * 是否会主动对外发起UDP业务请求，取值[no（不会）, yes（会）]
         * @type {string || null}
         */
        this.HasInitiateUdp = null;

        /**
         * 主动发起TCP请求的端口，取值范围(0, 65535]
         * @type {string || null}
         */
        this.PeerTcpPort = null;

        /**
         * 主动发起UDP请求的端口，取值范围(0, 65535]
         * @type {string || null}
         */
        this.PeerUdpPort = null;

        /**
         * TCP载荷的固定特征码，字符串长度小于512
         * @type {string || null}
         */
        this.TcpFootprint = null;

        /**
         * UDP载荷的固定特征码，字符串长度小于512
         * @type {string || null}
         */
        this.UdpFootprint = null;

        /**
         * Web业务的API的URL
         * @type {Array.<string> || null}
         */
        this.WebApiUrl = null;

        /**
         * TCP业务报文长度最小值，取值范围(0, 1500)
         * @type {string || null}
         */
        this.MinTcpPackageLen = null;

        /**
         * TCP业务报文长度最大值，取值范围(0, 1500)，必须大于等于TCP业务报文长度最小值
         * @type {string || null}
         */
        this.MaxTcpPackageLen = null;

        /**
         * UDP业务报文长度最小值，取值范围(0, 1500)
         * @type {string || null}
         */
        this.MinUdpPackageLen = null;

        /**
         * UDP业务报文长度最大值，取值范围(0, 1500)，必须大于等于UDP业务报文长度最小值
         * @type {string || null}
         */
        this.MaxUdpPackageLen = null;

        /**
         * 是否有VPN业务，取值[no（没有）, yes（有）]
         * @type {string || null}
         */
        this.HasVPN = null;

        /**
         * TCP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000
         * @type {string || null}
         */
        this.TcpPortList = null;

        /**
         * UDP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000
         * @type {string || null}
         */
        this.UdpPortList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.CaseName = 'CaseName' in params ? params.CaseName : null;
        this.PlatformTypes = 'PlatformTypes' in params ? params.PlatformTypes : null;
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.AppProtocols = 'AppProtocols' in params ? params.AppProtocols : null;
        this.TcpSportStart = 'TcpSportStart' in params ? params.TcpSportStart : null;
        this.TcpSportEnd = 'TcpSportEnd' in params ? params.TcpSportEnd : null;
        this.UdpSportStart = 'UdpSportStart' in params ? params.UdpSportStart : null;
        this.UdpSportEnd = 'UdpSportEnd' in params ? params.UdpSportEnd : null;
        this.HasAbroad = 'HasAbroad' in params ? params.HasAbroad : null;
        this.HasInitiateTcp = 'HasInitiateTcp' in params ? params.HasInitiateTcp : null;
        this.HasInitiateUdp = 'HasInitiateUdp' in params ? params.HasInitiateUdp : null;
        this.PeerTcpPort = 'PeerTcpPort' in params ? params.PeerTcpPort : null;
        this.PeerUdpPort = 'PeerUdpPort' in params ? params.PeerUdpPort : null;
        this.TcpFootprint = 'TcpFootprint' in params ? params.TcpFootprint : null;
        this.UdpFootprint = 'UdpFootprint' in params ? params.UdpFootprint : null;
        this.WebApiUrl = 'WebApiUrl' in params ? params.WebApiUrl : null;
        this.MinTcpPackageLen = 'MinTcpPackageLen' in params ? params.MinTcpPackageLen : null;
        this.MaxTcpPackageLen = 'MaxTcpPackageLen' in params ? params.MaxTcpPackageLen : null;
        this.MinUdpPackageLen = 'MinUdpPackageLen' in params ? params.MinUdpPackageLen : null;
        this.MaxUdpPackageLen = 'MaxUdpPackageLen' in params ? params.MaxUdpPackageLen : null;
        this.HasVPN = 'HasVPN' in params ? params.HasVPN : null;
        this.TcpPortList = 'TcpPortList' in params ? params.TcpPortList : null;
        this.UdpPortList = 'UdpPortList' in params ? params.UdpPortList : null;

    }
}

/**
 * ModifyCCIpAllowDeny返回参数结构体
 * @class
 */
class ModifyCCIpAllowDenyResponse extends  AbstractModel {
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
 * ModifyCCAlarmThreshold请求参数结构体
 * @class
 */
class ModifyCCAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID,字符串类型
         * @type {string || null}
         */
        this.RsId = null;

        /**
         * 告警阈值，大于0（目前排定的值），后台设置默认值为1000
         * @type {number || null}
         */
        this.AlarmThreshold = null;

        /**
         * 资源关联的IP列表，高防包未绑定时，传空数组，高防IP专业版传多个IP的数据
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
        this.Business = 'Business' in params ? params.Business : null;
        this.RsId = 'RsId' in params ? params.RsId : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * DescribeCCFrequencyRules返回参数结构体
 * @class
 */
class DescribeCCFrequencyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问频率控制规则列表
         * @type {Array.<CCFrequencyRule> || null}
         */
        this.CCFrequencyRuleList = null;

        /**
         * 访问频率控制规则开关状态，取值[on(开启)，off(关闭)]
         * @type {string || null}
         */
        this.CCFrequencyRuleStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CCFrequencyRuleList) {
            this.CCFrequencyRuleList = new Array();
            for (let z in params.CCFrequencyRuleList) {
                let obj = new CCFrequencyRule();
                obj.deserialize(params.CCFrequencyRuleList[z]);
                this.CCFrequencyRuleList.push(obj);
            }
        }
        this.CCFrequencyRuleStatus = 'CCFrequencyRuleStatus' in params ? params.CCFrequencyRuleStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSEvList请求参数结构体
 * @class
 */
class DescribeDDoSEvListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

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
         * 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例）
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * 是否超过弹性防护峰值，取值[yes(是)，no(否)]，填写空字符串时表示不进行过滤
         * @type {string || null}
         */
        this.OverLoad = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.OverLoad = 'OverLoad' in params ? params.OverLoad : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeBasicCCThreshold返回参数结构体
 * @class
 */
class DescribeBasicCCThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC启动开关（0:关闭；1:开启）
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * CC防护阈值
         * @type {number || null}
         */
        this.CCThreshold = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSPolicyName请求参数结构体
 * @class
 */
class ModifyDDoSPolicyNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.PolicyId = null;

        /**
         * 策略名称
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
        this.Business = 'Business' in params ? params.Business : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeIpUnBlockList返回参数结构体
 * @class
 */
class DescribeIpUnBlockListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * IP解封记录
         * @type {Array.<IpUnBlockData> || null}
         */
        this.List = null;

        /**
         * 总记录数
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
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new IpUnBlockData();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCPolicySwitch请求参数结构体
 * @class
 */
class ModifyCCPolicySwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 策略ID
         * @type {string || null}
         */
        this.SetId = null;

        /**
         * 开关状态
         * @type {number || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ModifyCCFrequencyRules返回参数结构体
 * @class
 */
class ModifyCCFrequencyRulesResponse extends  AbstractModel {
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
 * ModifyL4KeepTime请求参数结构体
 * @class
 */
class ModifyL4KeepTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

    }
}

/**
 * 调度域名信息
 * @class
 */
class SchedulingDomain extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调度域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * BGP线路IP列表
         * @type {Array.<string> || null}
         */
        this.BGPIpList = null;

        /**
         * 电信线路IP列表
         * @type {Array.<string> || null}
         */
        this.CTCCIpList = null;

        /**
         * 联通线路IP列表
         * @type {Array.<string> || null}
         */
        this.CUCCIpList = null;

        /**
         * 移动线路IP列表
         * @type {Array.<string> || null}
         */
        this.CMCCIpList = null;

        /**
         * 海外线路IP列表
         * @type {Array.<string> || null}
         */
        this.OverseaIpList = null;

        /**
         * 调度方式，当前仅支持优先级, 取值为priority
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * ttl
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.BGPIpList = 'BGPIpList' in params ? params.BGPIpList : null;
        this.CTCCIpList = 'CTCCIpList' in params ? params.CTCCIpList : null;
        this.CUCCIpList = 'CUCCIpList' in params ? params.CUCCIpList : null;
        this.CMCCIpList = 'CMCCIpList' in params ? params.CMCCIpList : null;
        this.OverseaIpList = 'OverseaIpList' in params ? params.OverseaIpList : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * ModifyCCHostProtection请求参数结构体
 * @class
 */
class ModifyCCHostProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 开启/关闭CC域名防护，取值[open(表示开启)，close(表示关闭)]
         * @type {string || null}
         */
        this.Method = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * DescribeIpBlockList请求参数结构体
 * @class
 */
class DescribeIpBlockListRequest extends  AbstractModel {
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
 * DescribeDDoSNetCount返回参数结构体
 * @class
 */
class DescribeDDoSNetCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

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
         * 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Key-Value值数组，Key说明如下，
当MetricName为traffic时：
key为"TcpKBSum"，表示TCP报文流量，单位KB
key为"UdpKBSum"，表示UDP报文流量，单位KB
key为"IcmpKBSum"，表示ICMP报文流量，单位KB
key为"OtherKBSum"，表示其他报文流量，单位KB

当MetricName为pkg时：
key为"TcpPacketSum"，表示TCP报文个数，单位个
key为"UdpPacketSum"，表示UDP报文个数，单位个
key为"IcmpPacketSum"，表示ICMP报文个数，单位个
key为"OtherPacketSum"，表示其他报文个数，单位个

当MetricName为classnum时：
key的值表示攻击事件类型，其中Key为"UNKNOWNFLOOD"，表示未知的攻击事件
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

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
 * CreateL7Rules返回参数结构体
 * @class
 */
class CreateL7RulesResponse extends  AbstractModel {
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
 * 巴拉多返回的数据
 * @class
 */
class BaradData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 指标名（connum表示TCP活跃连接数；
new_conn表示新建TCP连接数；
inactive_conn表示非活跃连接数;
intraffic表示入流量；
outtraffic表示出流量；
alltraffic表示出流量和入流量之和；
inpkg表示入包速率；
outpkg表示出包速率；）
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 值数组
         * @type {Array.<number> || null}
         */
        this.Data = null;

        /**
         * 值数组的大小
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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * ModifyDDoSSwitch请求参数结构体
 * @class
 */
class ModifyDDoSSwitchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（basic表示基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * =get表示读取DDoS防护状态；=set表示修改DDoS防护状态；
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 基础防护的IP，只有当Business为基础防护时才需要填写此字段；
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，IP所属的产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，IP所属的产品子类，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*);
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 只有当Business为基础防护时才需要填写此字段，表示IP所属的地域，取值：
"bj":     华北地区(北京)
"cd":     西南地区(成都)
"cq":     西南地区(重庆)
"gz":     华南地区(广州)
"gzopen": 华南地区(广州Open)
"hk":     中国香港
"kr":     东南亚地区(首尔)
"sh":     华东地区(上海)
"shjr":   华东地区(上海金融)
"szjr":   华南地区(深圳金融)
"sg":     东南亚地区(新加坡)
"th":     东南亚地区(泰国)
"de":     欧洲地区(德国)
"usw":    美国西部（硅谷）
"ca":     北美地区(多伦多)
"jp":     日本
"hzec":   杭州
"in":     印度
"use":    美东地区（弗吉尼亚）
"ru":     俄罗斯
"tpe":    中国台湾
"nj":     南京
         * @type {string || null}
         */
        this.IPRegion = null;

        /**
         * 可选字段，防护状态值，取值[0（关闭），1（开启）]；当Method为get时可以不填写此字段；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IPRegion = 'IPRegion' in params ? params.IPRegion : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateNetReturn请求参数结构体
 * @class
 */
class CreateNetReturnRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * ModifyDDoSAIStatus请求参数结构体
 * @class
 */
class ModifyDDoSAIStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * =get表示读取AI防护状态；=set表示修改AI防护状态；
         * @type {string || null}
         */
        this.Method = null;

        /**
         * AI防护状态，取值[on，off]；当Method=set时必填；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;

    }
}

/**
 * DescribeResourceList返回参数结构体
 * @class
 */
class DescribeResourceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 资源记录列表，返回Key值说明：
"Key": "CreateTime" 表示资源实例购买时间
"Key": "Region" 表示资源实例的地域
"Key": "BoundIP" 表示独享包实例绑定的IP
"Key": "Id" 表示资源实例的ID
"Key": "CCEnabled" 表示资源实例的CC防护开关状态
"Key": "DDoSThreshold" 表示资源实例的DDoS的清洗阈值	
"Key": "BoundStatus" 表示独享包或共享包实例的绑定IP操作状态(绑定中或绑定完成)
"Key": "Type" 此字段弃用
"Key": "ElasticLimit" 表示资源实例的弹性防护值
"Key": "DDoSAI" 表示资源实例的DDoS AI防护开关
"Key": "Bandwidth" 表示资源实例的保底防护值
"Key": "OverloadCount" 表示资源实例受到超过弹性防护值的次数
"Key": "Status" 表示资源实例的状态(idle:运行中, attacking:攻击中, blocking:封堵中, isolate:隔离中)
"Key": "Lbid" 此字段弃用
"Key": "ShowFlag" 此字段弃用
"Key": "Expire" 表示资源实例的过期时间
"Key": "CCThreshold" 表示资源实例的CC防护触发阈值
"Key": "AutoRenewFlag" 表示资源实例的自动续费是否开启
"Key": "IspCode" 表示独享包或共享包的线路(0-电信, 1-联通, 2-移动, 5-BGP)
"Key": "PackType" 表示套餐包类型
"Key": "PackId" 表示套餐包ID
"Key": "Name" 表示资源实例的名称
"Key": "Locked" 此字段弃用
"Key": "IpDDoSLevel" 表示资源实例的防护等级(low-宽松, middle-正常, high-严格)
"Key": "DefendStatus" 表示资源实例的DDoS防护状态(防护开启或临时关闭)
"Key": "UndefendExpire" 表示资源实例的DDoS防护临时关闭结束时间
"Key": "Tgw" 表示资源实例是否是新资源
         * @type {Array.<KeyValueRecord> || null}
         */
        this.ServicePacks = null;

        /**
         * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ServicePacks) {
            this.ServicePacks = new Array();
            for (let z in params.ServicePacks) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.ServicePacks[z]);
                this.ServicePacks.push(obj);
            }
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeNewL4Rules返回参数结构体
 * @class
 */
class DescribeNewL4RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则列表
         * @type {Array.<NewL4RuleEntry> || null}
         */
        this.Rules = null;

        /**
         * 总规则数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 四层健康检查配置列表
         * @type {Array.<L4RuleHealth> || null}
         */
        this.Healths = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new NewL4RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Healths) {
            this.Healths = new Array();
            for (let z in params.Healths) {
                let obj = new L4RuleHealth();
                obj.deserialize(params.Healths[z]);
                this.Healths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCThreshold请求参数结构体
 * @class
 */
class ModifyCCThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * CC防护阈值，取值(0 100 150 240 350 480 550 700 850 1000 1500 2000 3000 5000 10000 20000);
当Business为高防IP、高防IP专业版时，其CC防护最大阈值跟资源的保底防护带宽有关，对应关系如下：
  保底带宽: 最大C防护阈值
  10:  20000,
  20:  40000,
  30:  70000,
  40:  100000,
  50:  150000,
  60:  200000,
  80:  250000,
  100: 300000,
         * @type {number || null}
         */
        this.Threshold = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写RuleId字段；
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 可选字段，表示HTTPS协议的7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）；
当Protocol=https时必须填写；
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 查询的IP地址（仅基础防护提供），取值如：1.1.1.1
         * @type {string || null}
         */
        this.BasicIp = null;

        /**
         * 查询IP所属地域（仅基础防护提供），取值如：gz、bj、sh、hk等地域缩写
         * @type {string || null}
         */
        this.BasicRegion = null;

        /**
         * 专区类型（仅基础防护提供），取值如：公有云专区：public，黑石专区：bm, NAT服务器专区：nat，互联网通道：channel。
         * @type {string || null}
         */
        this.BasicBizType = null;

        /**
         * 设备类型（仅基础防护提供），取值如：服务器：cvm，公有云负载均衡：clb，黑石负载均衡：lb，NAT服务器：nat，互联网通道：channel.
         * @type {string || null}
         */
        this.BasicDeviceType = null;

        /**
         * 仅基础防护提供。可选，IPInstance Nat 网关（如果查询的设备类型是NAT服务器，需要传此参数，通过nat资源查询接口获取）
         * @type {string || null}
         */
        this.BasicIpInstance = null;

        /**
         * 仅基础防护提供。可选，运营商线路（如果查询的设备类型是NAT服务器，需要传此参数为5）
         * @type {number || null}
         */
        this.BasicIspCode = null;

        /**
         * 可选字段，当协议取值HTTPS时，必填
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.BasicIp = 'BasicIp' in params ? params.BasicIp : null;
        this.BasicRegion = 'BasicRegion' in params ? params.BasicRegion : null;
        this.BasicBizType = 'BasicBizType' in params ? params.BasicBizType : null;
        this.BasicDeviceType = 'BasicDeviceType' in params ? params.BasicDeviceType : null;
        this.BasicIpInstance = 'BasicIpInstance' in params ? params.BasicIpInstance : null;
        this.BasicIspCode = 'BasicIspCode' in params ? params.BasicIspCode : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * ModifyDDoSDefendStatus返回参数结构体
 * @class
 */
class ModifyDDoSDefendStatusResponse extends  AbstractModel {
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
 * CreateBasicDDoSAlarmThreshold请求参数结构体
 * @class
 */
class CreateBasicDDoSAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * =get表示读取告警阈值；=set表示设置告警阈值；
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 可选，告警阈值类型，1-入流量，2-清洗流量；当Method为set时必须填写；
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * 可选，告警阈值，当Method为set时必须填写；当设置阈值为0时表示清除告警阈值配置；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;

    }
}

/**
 * 7层CC自定义规则
 * @class
 */
class CCRuleConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计周期，单位秒，取值[10, 30, 60]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 访问次数，取值[1-10000]
         * @type {number || null}
         */
        this.ReqNumber = null;

        /**
         * 执行动作，取值["alg"（人机识别）, "drop"（拦截）]
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 执行时间，单位秒，取值[1-900]
         * @type {number || null}
         */
        this.ExeDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.ReqNumber = 'ReqNumber' in params ? params.ReqNumber : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.ExeDuration = 'ExeDuration' in params ? params.ExeDuration : null;

    }
}

/**
 * DescribeDDoSEvInfo返回参数结构体
 * @class
 */
class DescribeDDoSEvInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * TCP报文攻击包数
         * @type {number || null}
         */
        this.TcpPacketSum = null;

        /**
         * TCP报文攻击流量，单位KB
         * @type {number || null}
         */
        this.TcpKBSum = null;

        /**
         * UDP报文攻击包数
         * @type {number || null}
         */
        this.UdpPacketSum = null;

        /**
         * UDP报文攻击流量，单位KB
         * @type {number || null}
         */
        this.UdpKBSum = null;

        /**
         * ICMP报文攻击包数
         * @type {number || null}
         */
        this.IcmpPacketSum = null;

        /**
         * ICMP报文攻击流量，单位KB
         * @type {number || null}
         */
        this.IcmpKBSum = null;

        /**
         * 其他报文攻击包数
         * @type {number || null}
         */
        this.OtherPacketSum = null;

        /**
         * 其他报文攻击流量，单位KB
         * @type {number || null}
         */
        this.OtherKBSum = null;

        /**
         * 累计攻击流量，单位KB
         * @type {number || null}
         */
        this.TotalTraffic = null;

        /**
         * 攻击流量带宽峰值
         * @type {number || null}
         */
        this.Mbps = null;

        /**
         * 攻击包速率峰值
         * @type {number || null}
         */
        this.Pps = null;

        /**
         * PCAP文件下载链接
         * @type {Array.<string> || null}
         */
        this.PcapUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TcpPacketSum = 'TcpPacketSum' in params ? params.TcpPacketSum : null;
        this.TcpKBSum = 'TcpKBSum' in params ? params.TcpKBSum : null;
        this.UdpPacketSum = 'UdpPacketSum' in params ? params.UdpPacketSum : null;
        this.UdpKBSum = 'UdpKBSum' in params ? params.UdpKBSum : null;
        this.IcmpPacketSum = 'IcmpPacketSum' in params ? params.IcmpPacketSum : null;
        this.IcmpKBSum = 'IcmpKBSum' in params ? params.IcmpKBSum : null;
        this.OtherPacketSum = 'OtherPacketSum' in params ? params.OtherPacketSum : null;
        this.OtherKBSum = 'OtherKBSum' in params ? params.OtherKBSum : null;
        this.TotalTraffic = 'TotalTraffic' in params ? params.TotalTraffic : null;
        this.Mbps = 'Mbps' in params ? params.Mbps : null;
        this.Pps = 'Pps' in params ? params.Pps : null;
        this.PcapUrl = 'PcapUrl' in params ? params.PcapUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribleRegionCount请求参数结构体
 * @class
 */
class DescribleRegionCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 根据线路统计，取值为[1（BGP线路），2（南京电信），3（南京联通），99（第三方合作线路）]；只对高防IP产品有效，其他产品此字段忽略
         * @type {Array.<number> || null}
         */
        this.LineList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.LineList = 'LineList' in params ? params.LineList : null;

    }
}

/**
 * ModifyCCSelfDefinePolicy返回参数结构体
 * @class
 */
class ModifyCCSelfDefinePolicyResponse extends  AbstractModel {
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
 * DescribeDDoSIpLog请求参数结构体
 * @class
 */
class DescribeDDoSIpLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeDDoSAlarmThreshold请求参数结构体
 * @class
 */
class DescribeDDoSAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID,字符串类型
         * @type {string || null}
         */
        this.RsId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.RsId = 'RsId' in params ? params.RsId : null;

    }
}

/**
 * DeleteNewL4Rules返回参数结构体
 * @class
 */
class DeleteNewL4RulesResponse extends  AbstractModel {
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
 * 水印策略参数
 * @class
 */
class WaterPrintPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCP端口段，例如["2000-3000","3500-4000"]
         * @type {Array.<string> || null}
         */
        this.TcpPortList = null;

        /**
         * UDP端口段，例如["2000-3000","3500-4000"]
         * @type {Array.<string> || null}
         */
        this.UdpPortList = null;

        /**
         * 水印偏移量，取值范围[0, 100)
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 是否自动剥离，取值[0（不自动剥离），1（自动剥离）]
         * @type {number || null}
         */
        this.RemoveSwitch = null;

        /**
         * 是否开启，取值[0（没有开启），1（已开启）]
         * @type {number || null}
         */
        this.OpenStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TcpPortList = 'TcpPortList' in params ? params.TcpPortList : null;
        this.UdpPortList = 'UdpPortList' in params ? params.UdpPortList : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.RemoveSwitch = 'RemoveSwitch' in params ? params.RemoveSwitch : null;
        this.OpenStatus = 'OpenStatus' in params ? params.OpenStatus : null;

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
 * DeleteNewL7Rules返回参数结构体
 * @class
 */
class DeleteNewL7RulesResponse extends  AbstractModel {
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
 * DeleteCCSelfDefinePolicy返回参数结构体
 * @class
 */
class DeleteCCSelfDefinePolicyResponse extends  AbstractModel {
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
 * DescribeDDoSPolicy返回参数结构体
 * @class
 */
class DescribeDDoSPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS高级策略列表
         * @type {Array.<DDosPolicy> || null}
         */
        this.DDosPolicyList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DDosPolicyList) {
            this.DDosPolicyList = new Array();
            for (let z in params.DDosPolicyList) {
                let obj = new DDosPolicy();
                obj.deserialize(params.DDosPolicyList[z]);
                this.DDosPolicyList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteCCFrequencyRules返回参数结构体
 * @class
 */
class DeleteCCFrequencyRulesResponse extends  AbstractModel {
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
 * DeleteDDoSPolicyCase返回参数结构体
 * @class
 */
class DeleteDDoSPolicyCaseResponse extends  AbstractModel {
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
 * CreateL4HealthConfig返回参数结构体
 * @class
 */
class CreateL4HealthConfigResponse extends  AbstractModel {
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
 * CreateNewL7Rules请求参数结构体
 * @class
 */
class CreateNewL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

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

        /**
         * 规则列表
         * @type {Array.<L7RuleEntry> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.IdList = 'IdList' in params ? params.IdList : null;
        this.VipList = 'VipList' in params ? params.VipList : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * ModifyL7Rules请求参数结构体
 * @class
 */
class ModifyL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则
         * @type {L7RuleEntry || null}
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
            let obj = new L7RuleEntry();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * ModifyElasticLimit返回参数结构体
 * @class
 */
class ModifyElasticLimitResponse extends  AbstractModel {
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
 * 攻击源信息
 * @class
 */
class DDoSAttackSourceRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 攻击源ip
         * @type {string || null}
         */
        this.SrcIp = null;

        /**
         * 省份（国内有效，不包含港澳台）
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 国家
         * @type {string || null}
         */
        this.Nation = null;

        /**
         * 累计攻击包量
         * @type {number || null}
         */
        this.PacketSum = null;

        /**
         * 累计攻击流量
         * @type {number || null}
         */
        this.PacketLen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcIp = 'SrcIp' in params ? params.SrcIp : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.Nation = 'Nation' in params ? params.Nation : null;
        this.PacketSum = 'PacketSum' in params ? params.PacketSum : null;
        this.PacketLen = 'PacketLen' in params ? params.PacketLen : null;

    }
}

/**
 * CreateUnblockIp返回参数结构体
 * @class
 */
class CreateUnblockIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封）
         * @type {string || null}
         */
        this.ActionType = null;

        /**
         * 解封时间（预计解封时间）
         * @type {string || null}
         */
        this.UnblockTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;
        this.UnblockTime = 'UnblockTime' in params ? params.UnblockTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePackIndex请求参数结构体
 * @class
 */
class DescribePackIndexRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示高防包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;

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
         * 大禹子产品代号（bgpip表示高防IP)
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
 * ModifyL4Rules请求参数结构体
 * @class
 */
class ModifyL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则
         * @type {L4RuleEntry || null}
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
            let obj = new L4RuleEntry();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }

    }
}

/**
 * DescribeDDoSEvList返回参数结构体
 * @class
 */
class DescribeDDoSEvListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.IpList = null;

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
         * DDoS攻击事件列表
         * @type {Array.<DDoSEventRecord> || null}
         */
        this.Data = null;

        /**
         * 总记录数
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DDoSEventRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 可选字段，资源ID，如果填写则表示该资源绑定的DDoS高级策略
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
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * 四层规则结构体
 * @class
 */
class NewL4RuleEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发协议，取值[TCP, UDP]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 转发端口
         * @type {number || null}
         */
        this.VirtualPort = null;

        /**
         * 源站端口
         * @type {number || null}
         */
        this.SourcePort = null;

        /**
         * 会话保持时间，单位秒
         * @type {number || null}
         */
        this.KeepTime = null;

        /**
         * 回源列表
         * @type {Array.<L4RuleSource> || null}
         */
        this.SourceList = null;

        /**
         * 负载均衡方式，取值[1(加权轮询)，2(源IP hash)]
         * @type {number || null}
         */
        this.LbType = null;

        /**
         * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]；
         * @type {number || null}
         */
        this.KeepEnable = null;

        /**
         * 回源方式，取值[1(域名回源)，2(IP回源)]
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 移除水印状态，取值[0(关闭)，1(开启)]
         * @type {number || null}
         */
        this.RemoveSwitch = null;

        /**
         * 规则修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 对应地区信息
         * @type {number || null}
         */
        this.Region = null;

        /**
         * 绑定资源IP信息
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 绑定资源Id信息
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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.SourcePort = 'SourcePort' in params ? params.SourcePort : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

        if (params.SourceList) {
            this.SourceList = new Array();
            for (let z in params.SourceList) {
                let obj = new L4RuleSource();
                obj.deserialize(params.SourceList[z]);
                this.SourceList.push(obj);
            }
        }
        this.LbType = 'LbType' in params ? params.LbType : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.RemoveSwitch = 'RemoveSwitch' in params ? params.RemoveSwitch : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeL7HealthConfig返回参数结构体
 * @class
 */
class DescribeL7HealthConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 七层健康检查配置数组
         * @type {Array.<L7HealthConfig> || null}
         */
        this.HealthConfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HealthConfig) {
            this.HealthConfig = new Array();
            for (let z in params.HealthConfig) {
                let obj = new L7HealthConfig();
                obj.deserialize(params.HealthConfig[z]);
                this.HealthConfig.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CC的访问频率控制规则
 * @class
 */
class CCFrequencyRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC的访问频率控制规则ID
         * @type {string || null}
         */
        this.CCFrequencyRuleId = null;

        /**
         * URI字符串，必须以/开头，例如/abc/a.php，长度不超过31；当URI=/时，匹配模式只能选择前缀匹配；
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * User-Agent字符串，长度不超过80
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Cookie字符串，长度不超过40
         * @type {string || null}
         */
        this.Cookie = null;

        /**
         * 匹配规则，取值["include"(前缀匹配)，"equal"(完全匹配)]
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 统计周期，单位秒，取值[10, 30, 60]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 访问次数，取值[1-10000]
         * @type {number || null}
         */
        this.ReqNumber = null;

        /**
         * 执行动作，取值["alg"（人机识别）, "drop"（拦截）]
         * @type {string || null}
         */
        this.Act = null;

        /**
         * 执行时间，单位秒，取值[1-900]
         * @type {number || null}
         */
        this.ExeDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CCFrequencyRuleId = 'CCFrequencyRuleId' in params ? params.CCFrequencyRuleId : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ReqNumber = 'ReqNumber' in params ? params.ReqNumber : null;
        this.Act = 'Act' in params ? params.Act : null;
        this.ExeDuration = 'ExeDuration' in params ? params.ExeDuration : null;

    }
}

/**
 * CreateCCSelfDefinePolicy返回参数结构体
 * @class
 */
class CreateCCSelfDefinePolicyResponse extends  AbstractModel {
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
         * 回源方式，取值[1(域名回源)，2(IP回源)]
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 会话保持时间，单位秒
         * @type {number || null}
         */
        this.KeepTime = null;

        /**
         * 回源列表
         * @type {Array.<L4RuleSource> || null}
         */
        this.SourceList = null;

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
         * 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段；
         * @type {string || null}
         */
        this.RuleId = null;

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
         * 规则描述
         * @type {string || null}
         */
        this.RuleName = null;

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
         * 修改时间
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭
         * @type {number || null}
         */
        this.HttpsToHttpEnable = null;

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
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

        if (params.SourceList) {
            this.SourceList = new Array();
            for (let z in params.SourceList) {
                let obj = new L4RuleSource();
                obj.deserialize(params.SourceList[z]);
                this.SourceList.push(obj);
            }
        }
        this.LbType = 'LbType' in params ? params.LbType : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CCStatus = 'CCStatus' in params ? params.CCStatus : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;
        this.CCLevel = 'CCLevel' in params ? params.CCLevel : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.HttpsToHttpEnable = 'HttpsToHttpEnable' in params ? params.HttpsToHttpEnable : null;

    }
}

/**
 * 删除l4规则接口
 * @class
 */
class L4DelRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源Id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 规则Id
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;

    }
}

/**
 * DescribeDDoSAttackSource返回参数结构体
 * @class
 */
class DescribeDDoSAttackSourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总攻击源条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 攻击源列表
         * @type {Array.<DDoSAttackSourceRecord> || null}
         */
        this.AttackSourceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AttackSourceList) {
            this.AttackSourceList = new Array();
            for (let z in params.AttackSourceList) {
                let obj = new DDoSAttackSourceRecord();
                obj.deserialize(params.AttackSourceList[z]);
                this.AttackSourceList.push(obj);
            }
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
 * DescribeDDoSUsedStatis请求参数结构体
 * @class
 */
class DescribeDDoSUsedStatisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP）
         * @type {string || null}
         */
        this.Business = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;

    }
}

/**
 * DDoS高级策略的禁用协议选项
 * @class
 */
class DDoSPolicyDropOption extends  AbstractModel {
    constructor(){
        super();

        /**
         * 禁用TCP协议，取值范围[0,1]
         * @type {number || null}
         */
        this.DropTcp = null;

        /**
         * 禁用UDP协议，取值范围[0,1]
         * @type {number || null}
         */
        this.DropUdp = null;

        /**
         * 禁用ICMP协议，取值范围[0,1]
         * @type {number || null}
         */
        this.DropIcmp = null;

        /**
         * 禁用其他协议，取值范围[0,1]
         * @type {number || null}
         */
        this.DropOther = null;

        /**
         * 拒绝海外流量，取值范围[0,1]
         * @type {number || null}
         */
        this.DropAbroad = null;

        /**
         * 空连接防护，取值范围[0,1]
         * @type {number || null}
         */
        this.CheckSyncConn = null;

        /**
         * 基于来源IP及目的IP的新建连接抑制，取值范围[0,4294967295]
         * @type {number || null}
         */
        this.SdNewLimit = null;

        /**
         * 基于目的IP的新建连接抑制，取值范围[0,4294967295]
         * @type {number || null}
         */
        this.DstNewLimit = null;

        /**
         * 基于来源IP及目的IP的并发连接抑制，取值范围[0,4294967295]
         * @type {number || null}
         */
        this.SdConnLimit = null;

        /**
         * 基于目的IP的并发连接抑制，取值范围[0,4294967295]
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

        /**
         * tcp限速，取值范围[0,4294967295]
         * @type {number || null}
         */
        this.DTcpMbpsLimit = null;

        /**
         * udp限速，取值范围[0,4294967295]
         * @type {number || null}
         */
        this.DUdpMbpsLimit = null;

        /**
         * icmp限速，取值范围[0,4294967295]
         * @type {number || null}
         */
        this.DIcmpMbpsLimit = null;

        /**
         * other协议限速，取值范围[0,4294967295]
         * @type {number || null}
         */
        this.DOtherMbpsLimit = null;

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
        this.DropAbroad = 'DropAbroad' in params ? params.DropAbroad : null;
        this.CheckSyncConn = 'CheckSyncConn' in params ? params.CheckSyncConn : null;
        this.SdNewLimit = 'SdNewLimit' in params ? params.SdNewLimit : null;
        this.DstNewLimit = 'DstNewLimit' in params ? params.DstNewLimit : null;
        this.SdConnLimit = 'SdConnLimit' in params ? params.SdConnLimit : null;
        this.DstConnLimit = 'DstConnLimit' in params ? params.DstConnLimit : null;
        this.BadConnThreshold = 'BadConnThreshold' in params ? params.BadConnThreshold : null;
        this.NullConnEnable = 'NullConnEnable' in params ? params.NullConnEnable : null;
        this.ConnTimeout = 'ConnTimeout' in params ? params.ConnTimeout : null;
        this.SynRate = 'SynRate' in params ? params.SynRate : null;
        this.SynLimit = 'SynLimit' in params ? params.SynLimit : null;
        this.DTcpMbpsLimit = 'DTcpMbpsLimit' in params ? params.DTcpMbpsLimit : null;
        this.DUdpMbpsLimit = 'DUdpMbpsLimit' in params ? params.DUdpMbpsLimit : null;
        this.DIcmpMbpsLimit = 'DIcmpMbpsLimit' in params ? params.DIcmpMbpsLimit : null;
        this.DOtherMbpsLimit = 'DOtherMbpsLimit' in params ? params.DOtherMbpsLimit : null;

    }
}

/**
 * ModifyElasticLimit请求参数结构体
 * @class
 */
class ModifyElasticLimitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 弹性防护阈值，取值[0 10000 20000 30000 40000 50000 60000 70000 80000 90000 100000 120000 150000 200000 250000 300000 400000 600000 800000 220000 310000 110000 270000 610000]
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyL4Health返回参数结构体
 * @class
 */
class ModifyL4HealthResponse extends  AbstractModel {
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
 * CC攻击事件记录
 * @class
 */
class CCEventRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 总请求QPS峰值
         * @type {number || null}
         */
        this.ReqQps = null;

        /**
         * 攻击QPS峰值
         * @type {number || null}
         */
        this.DropQps = null;

        /**
         * 攻击状态，取值[0（攻击中）, 1（攻击结束）]
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 域名列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DomainList = null;

        /**
         * uri列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UriList = null;

        /**
         * 攻击源列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AttackipList = null;

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
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.ReqQps = 'ReqQps' in params ? params.ReqQps : null;
        this.DropQps = 'DropQps' in params ? params.DropQps : null;
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.DomainList = 'DomainList' in params ? params.DomainList : null;
        this.UriList = 'UriList' in params ? params.UriList : null;
        this.AttackipList = 'AttackipList' in params ? params.AttackipList : null;

    }
}

/**
 * DescribeTransmitStatis请求参数结构体
 * @class
 */
class DescribeTransmitStatisRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版；bgp表示独享包；bgp-multip表示共享包）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源实例ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 指标名，取值：
traffic表示流量带宽；
pkg表示包速率；
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * 统计时间粒度（300表示5分钟；3600表示小时；86400表示天）
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 统计开始时间，秒部分保持为0，分钟部分为5的倍数
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 统计结束时间，秒部分保持为0，分钟部分为5的倍数
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 资源的IP（当Business为bgp-multip时必填，且仅支持一个IP）；当不填写时，默认统计资源实例的所有IP；资源实例有多个IP（比如高防IP专业版）时，统计方式是求和；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * DescribeInsurePacks返回参数结构体
 * @class
 */
class DescribeInsurePacksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保险包套餐列表
         * @type {Array.<KeyValueRecord> || null}
         */
        this.InsurePacks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InsurePacks) {
            this.InsurePacks = new Array();
            for (let z in params.InsurePacks) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.InsurePacks[z]);
                this.InsurePacks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateUnblockIp请求参数结构体
 * @class
 */
class CreateUnblockIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封）
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * ModifyResourceRenewFlag返回参数结构体
 * @class
 */
class ModifyResourceRenewFlagResponse extends  AbstractModel {
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
 * 排序字段
 * @class
 */
class OrderBy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 排序字段名称，取值[
bandwidth（带宽），
overloadCount（超峰值次数）
]
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 升降序，取值为[asc（升序），（升序），desc（降序）， DESC（降序）]
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
        this.Field = 'Field' in params ? params.Field : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * DescribeActionLog返回参数结构体
 * @class
 */
class DescribeActionLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总记录数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 记录数组
         * @type {Array.<KeyValueRecord> || null}
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
                let obj = new KeyValueRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
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
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))]
         * @type {string || null}
         */
        this.MetricName = null;

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
         * 值个数
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSPolicyCase返回参数结构体
 * @class
 */
class ModifyDDoSPolicyCaseResponse extends  AbstractModel {
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
 * DescribeCCUrlAllow返回参数结构体
 * @class
 */
class DescribeCCUrlAllowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该字段被RecordList字段替代了，请不要使用
         * @type {Array.<KeyValue> || null}
         */
        this.Data = null;

        /**
         * 记录总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 返回黑/白名单的记录，
"Key":"url"时，"Value":值表示URL;
"Key":"domain"时， "Value":值表示域名;
"Key":"type"时，"Value":值表示黑白名单类型(white为白名单，block为黑名单);
"Key":"protocol"时，"Value":值表示CC的防护类型(HTTP防护或HTTPS域名防护);
         * @type {Array.<KeyValueRecord> || null}
         */
        this.RecordList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.RecordList) {
            this.RecordList = new Array();
            for (let z in params.RecordList) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.RecordList[z]);
                this.RecordList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecIndex请求参数结构体
 * @class
 */
class DescribeSecIndexRequest extends  AbstractModel {
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
 * ModifyCCFrequencyRulesStatus请求参数结构体
 * @class
 */
class ModifyCCFrequencyRulesStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 开启或关闭，取值["on"(开启)，"off"(关闭)]
         * @type {string || null}
         */
        this.Method = null;

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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * DescribeDDoSCount返回参数结构体
 * @class
 */
class DescribeDDoSCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

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
         * 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）]
         * @type {string || null}
         */
        this.MetricName = null;

        /**
         * Key-Value值数组，Key说明如下，
当MetricName为traffic时：
key为"TcpKBSum"，表示TCP报文流量，单位KB
key为"UdpKBSum"，表示UDP报文流量，单位KB
key为"IcmpKBSum"，表示ICMP报文流量，单位KB
key为"OtherKBSum"，表示其他报文流量，单位KB

当MetricName为pkg时：
key为"TcpPacketSum"，表示TCP报文个数，单位个
key为"UdpPacketSum"，表示UDP报文个数，单位个
key为"IcmpPacketSum"，表示ICMP报文个数，单位个
key为"OtherPacketSum"，表示其他报文个数，单位个

当MetricName为classnum时：
key的值表示攻击事件类型，其中Key为"UNKNOWNFLOOD"，表示未知的攻击事件
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;

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
 * DescribeL4RulesErrHealth返回参数结构体
 * @class
 */
class DescribeL4RulesErrHealthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异常规则的总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP，多个IP用","分割
         * @type {Array.<KeyValue> || null}
         */
        this.ErrHealths = null;

        /**
         * 异常规则列表(提供更多的错误相关信息)，返回值说明:
Key值为RuleId时，Value值为规则ID；
Key值为Protocol时，Value值为规则的转发协议；
Key值为VirtualPort时，Value值为规则的转发端口；
Key值为ErrMessage时，Value值为健康检查异常信息；
健康检查异常信息的格式为"SourceIp:1.1.1.1|SourcePort:1234|AbnormalStatTime:1570689065|AbnormalReason:connection time out|Interval:20|CheckNum:6|FailNum:6" 多个源IP的错误信息用，分割,
SourceIp表示源站IP，SourcePort表示源站端口，AbnormalStatTime表示异常时间，AbnormalReason表示异常原因，Interval表示检查周期，CheckNum表示检查次数，FailNum表示失败次数；
         * @type {Array.<KeyValueRecord> || null}
         */
        this.ExtErrHealths = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ErrHealths) {
            this.ErrHealths = new Array();
            for (let z in params.ErrHealths) {
                let obj = new KeyValue();
                obj.deserialize(params.ErrHealths[z]);
                this.ErrHealths.push(obj);
            }
        }

        if (params.ExtErrHealths) {
            this.ExtErrHealths = new Array();
            for (let z in params.ExtErrHealths) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.ExtErrHealths[z]);
                this.ExtErrHealths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteDDoSPolicy返回参数结构体
 * @class
 */
class DeleteDDoSPolicyResponse extends  AbstractModel {
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
         * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
         * @type {string || null}
         */
        this.MetricName = null;

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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Id = 'Id' in params ? params.Id : null;

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
 * 资源的IP数组
 * @class
 */
class ResourceIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP数组
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
        this.Id = 'Id' in params ? params.Id : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * CC告警阈值
 * @class
 */
class CCAlarmThreshold extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC告警阈值
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
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;

    }
}

/**
 * DescribeDDoSNetIpLog请求参数结构体
 * @class
 */
class DescribeDDoSNetIpLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 七层健康检查配置
 * @class
 */
class L7HealthConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发协议，取值[http, https, http/https]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 转发域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * =1表示开启；=0表示关闭
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 检测间隔时间，单位秒
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * 异常判定次数，单位次
         * @type {number || null}
         */
        this.KickNum = null;

        /**
         * 健康判定次数，单位次
         * @type {number || null}
         */
        this.AliveNum = null;

        /**
         * 健康检查探测方法，可选HEAD或GET，默认为HEAD
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 健康检查判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 检查目录的URL，默认为/
         * @type {string || null}
         */
        this.Url = null;

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
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Interval = 'Interval' in params ? params.Interval : null;
        this.KickNum = 'KickNum' in params ? params.KickNum : null;
        this.AliveNum = 'AliveNum' in params ? params.AliveNum : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeDDoSNetEvInfo返回参数结构体
 * @class
 */
class DescribeDDoSNetEvInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * TCP报文攻击包数
         * @type {number || null}
         */
        this.TcpPacketSum = null;

        /**
         * TCP报文攻击流量，单位KB
         * @type {number || null}
         */
        this.TcpKBSum = null;

        /**
         * UDP报文攻击包数
         * @type {number || null}
         */
        this.UdpPacketSum = null;

        /**
         * UDP报文攻击流量，单位KB
         * @type {number || null}
         */
        this.UdpKBSum = null;

        /**
         * ICMP报文攻击包数
         * @type {number || null}
         */
        this.IcmpPacketSum = null;

        /**
         * ICMP报文攻击流量，单位KB
         * @type {number || null}
         */
        this.IcmpKBSum = null;

        /**
         * 其他报文攻击包数
         * @type {number || null}
         */
        this.OtherPacketSum = null;

        /**
         * 其他报文攻击流量，单位KB
         * @type {number || null}
         */
        this.OtherKBSum = null;

        /**
         * 累计攻击流量，单位KB
         * @type {number || null}
         */
        this.TotalTraffic = null;

        /**
         * 攻击流量带宽峰值
         * @type {number || null}
         */
        this.Mbps = null;

        /**
         * 攻击包速率峰值
         * @type {number || null}
         */
        this.Pps = null;

        /**
         * PCAP文件下载链接
         * @type {Array.<string> || null}
         */
        this.PcapUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TcpPacketSum = 'TcpPacketSum' in params ? params.TcpPacketSum : null;
        this.TcpKBSum = 'TcpKBSum' in params ? params.TcpKBSum : null;
        this.UdpPacketSum = 'UdpPacketSum' in params ? params.UdpPacketSum : null;
        this.UdpKBSum = 'UdpKBSum' in params ? params.UdpKBSum : null;
        this.IcmpPacketSum = 'IcmpPacketSum' in params ? params.IcmpPacketSum : null;
        this.IcmpKBSum = 'IcmpKBSum' in params ? params.IcmpKBSum : null;
        this.OtherPacketSum = 'OtherPacketSum' in params ? params.OtherPacketSum : null;
        this.OtherKBSum = 'OtherKBSum' in params ? params.OtherKBSum : null;
        this.TotalTraffic = 'TotalTraffic' in params ? params.TotalTraffic : null;
        this.Mbps = 'Mbps' in params ? params.Mbps : null;
        this.Pps = 'Pps' in params ? params.Pps : null;
        this.PcapUrl = 'PcapUrl' in params ? params.PcapUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyCCAlarmThreshold返回参数结构体
 * @class
 */
class ModifyCCAlarmThresholdResponse extends  AbstractModel {
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
 * DescribeRuleSets请求参数结构体
 * @class
 */
class DescribeRuleSetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID列表
         * @type {Array.<string> || null}
         */
        this.IdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.IdList = 'IdList' in params ? params.IdList : null;

    }
}

/**
 * DescribeSchedulingDomainList请求参数结构体
 * @class
 */
class DescribeSchedulingDomainListRequest extends  AbstractModel {
    constructor(){
        super();

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
         * 可选，筛选特定的域名
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * DescribleL7Rules返回参数结构体
 * @class
 */
class DescribleL7RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则列表
         * @type {Array.<L7RuleEntry> || null}
         */
        this.Rules = null;

        /**
         * 总规则数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 健康检查配置列表
         * @type {Array.<L7RuleHealth> || null}
         */
        this.Healths = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new L7RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Healths) {
            this.Healths = new Array();
            for (let z in params.Healths) {
                let obj = new L7RuleHealth();
                obj.deserialize(params.Healths[z]);
                this.Healths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCCFrequencyRules返回参数结构体
 * @class
 */
class CreateCCFrequencyRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * CC防护的访问频率控制规则ID
         * @type {string || null}
         */
        this.CCFrequencyRuleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CCFrequencyRuleId = 'CCFrequencyRuleId' in params ? params.CCFrequencyRuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateNewL4Rules请求参数结构体
 * @class
 */
class CreateNewL4RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 高防产品代号：bgpip
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 添加规则资源列表
         * @type {Array.<string> || null}
         */
        this.IdList = null;

        /**
         * 添加规则IP列表
         * @type {Array.<string> || null}
         */
        this.VipList = null;

        /**
         * 规则列表
         * @type {Array.<L4RuleEntry> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.IdList = 'IdList' in params ? params.IdList : null;
        this.VipList = 'VipList' in params ? params.VipList : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new L4RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * DDoS高级策略的禁用端口
 * @class
 */
class DDoSPolicyPortLimit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议，取值范围[tcp,udp,all]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 开始目的端口，取值范围[0,65535]
         * @type {number || null}
         */
        this.DPortStart = null;

        /**
         * 结束目的端口，取值范围[0,65535]，要求大于等于开始目的端口
         * @type {number || null}
         */
        this.DPortEnd = null;

        /**
         * 开始源端口，取值范围[0,65535]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SPortStart = null;

        /**
         * 结束源端口，取值范围[0,65535]，要求大于等于开始源端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SPortEnd = null;

        /**
         * 执行动作，取值[drop(丢弃) ，transmit(转发)]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 禁用端口类型，取值[0（目的端口范围禁用）， 1（源端口范围禁用）， 2（目的和源端口范围同时禁用）]
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Kind = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.DPortStart = 'DPortStart' in params ? params.DPortStart : null;
        this.DPortEnd = 'DPortEnd' in params ? params.DPortEnd : null;
        this.SPortStart = 'SPortStart' in params ? params.SPortStart : null;
        this.SPortEnd = 'SPortEnd' in params ? params.SPortEnd : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Kind = 'Kind' in params ? params.Kind : null;

    }
}

/**
 * DescribeSchedulingDomainList返回参数结构体
 * @class
 */
class DescribeSchedulingDomainListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调度域名总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 调度域名列表信息
         * @type {Array.<SchedulingDomain> || null}
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
                let obj = new SchedulingDomain();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDDoSNetTrend返回参数结构体
 * @class
 */
class DescribeDDoSNetTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
         * @type {string || null}
         */
        this.MetricName = null;

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
         * 值个数
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUnBlockStatis返回参数结构体
 * @class
 */
class DescribeUnBlockStatisResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解封总配额数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 已使用次数
         * @type {number || null}
         */
        this.Used = null;

        /**
         * 统计起始时间
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 统计结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Used = 'Used' in params ? params.Used : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribleL7Rules请求参数结构体
 * @class
 */
class DescribleL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 规则ID，可选参数，填写后获取指定的规则
         * @type {Array.<string> || null}
         */
        this.RuleIdList = null;

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
         * 域名搜索，选填，当需要搜索域名请填写
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发协议搜索，选填，取值[http, https, http/https]
         * @type {Array.<string> || null}
         */
        this.ProtocolList = null;

        /**
         * 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
         * @type {Array.<number> || null}
         */
        this.StatusList = null;

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
        this.RuleIdList = 'RuleIdList' in params ? params.RuleIdList : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.ProtocolList = 'ProtocolList' in params ? params.ProtocolList : null;
        this.StatusList = 'StatusList' in params ? params.StatusList : null;

    }
}

/**
 * DescribeCCIpAllowDeny请求参数结构体
 * @class
 */
class DescribeCCIpAllowDenyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 黑或白名单，取值[white(白名单)，black(黑名单)]
注意：此数组只能有一个值，不能同时获取黑名单和白名单
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页参数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 可选，代表HTTP协议或HTTPS协议的CC防护，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

    }
}

/**
 * DescribeSecIndex返回参数结构体
 * @class
 */
class DescribeSecIndexResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段值，如下：
AttackIpCount：受攻击的IP数
AttackCount：攻击次数
BlockCount：封堵次数
MaxMbps：攻击峰值Mbps
IpNum：统计的IP数据
         * @type {Array.<KeyValue> || null}
         */
        this.Data = null;

        /**
         * 本月开始时间
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * 本月结束时间
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 回源方式，取值[1(域名回源)，2(IP回源)]
         * @type {number || null}
         */
        this.SourceType = null;

        /**
         * 会话保持时间，单位秒
         * @type {number || null}
         */
        this.KeepTime = null;

        /**
         * 回源列表
         * @type {Array.<L4RuleSource> || null}
         */
        this.SourceList = null;

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
         * 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段；
         * @type {string || null}
         */
        this.RuleId = null;

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
         * 规则描述
         * @type {string || null}
         */
        this.RuleName = null;

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
         * 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HttpsToHttpEnable = null;

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
        this.SourceType = 'SourceType' in params ? params.SourceType : null;
        this.KeepTime = 'KeepTime' in params ? params.KeepTime : null;

        if (params.SourceList) {
            this.SourceList = new Array();
            for (let z in params.SourceList) {
                let obj = new L4RuleSource();
                obj.deserialize(params.SourceList[z]);
                this.SourceList.push(obj);
            }
        }
        this.LbType = 'LbType' in params ? params.LbType : null;
        this.KeepEnable = 'KeepEnable' in params ? params.KeepEnable : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.CertType = 'CertType' in params ? params.CertType : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;
        this.Cert = 'Cert' in params ? params.Cert : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CCStatus = 'CCStatus' in params ? params.CCStatus : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;
        this.CCLevel = 'CCLevel' in params ? params.CCLevel : null;
        this.HttpsToHttpEnable = 'HttpsToHttpEnable' in params ? params.HttpsToHttpEnable : null;

    }
}

/**
 * IP解封记录
 * @class
 */
class IpUnBlockData extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 封堵时间
         * @type {string || null}
         */
        this.BlockTime = null;

        /**
         * 解封时间（实际解封时间）
         * @type {string || null}
         */
        this.UnBlockTime = null;

        /**
         * 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封）
         * @type {string || null}
         */
        this.ActionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BlockTime = 'BlockTime' in params ? params.BlockTime : null;
        this.UnBlockTime = 'UnBlockTime' in params ? params.UnBlockTime : null;
        this.ActionType = 'ActionType' in params ? params.ActionType : null;

    }
}

/**
 * DescribeL4HealthConfig返回参数结构体
 * @class
 */
class DescribeL4HealthConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 四层健康检查配置数组
         * @type {Array.<L4HealthConfig> || null}
         */
        this.HealthConfig = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HealthConfig) {
            this.HealthConfig = new Array();
            for (let z in params.HealthConfig) {
                let obj = new L4HealthConfig();
                obj.deserialize(params.HealthConfig[z]);
                this.HealthConfig.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;

    }
}

/**
 * DDoS高级策略的报文过滤项
 * @class
 */
class DDoSPolicyPacketFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议，取值范围[tcp,udp,icmp,all]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 开始源端口，取值范围[0,65535]
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * 结束源端口，取值范围[0,65535]
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * 开始目的端口，取值范围[0,65535]
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * 结束目的端口，取值范围[0,65535]
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * 最小包长，取值范围[0,1500]
         * @type {number || null}
         */
        this.PktlenMin = null;

        /**
         * 最大包长，取值范围[0,1500]
         * @type {number || null}
         */
        this.PktlenMax = null;

        /**
         * 是否检测载荷，取值范围[
begin_l3(IP头)
begin_l4(TCP头)
begin_l5(载荷)
no_match(不检测)
]
         * @type {string || null}
         */
        this.MatchBegin = null;

        /**
         * 是否是正则表达式，取值范围[sunday(表示关键字),pcre(表示正则表达式)]
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * 关键字或正则表达式
         * @type {string || null}
         */
        this.Str = null;

        /**
         * 检测深度，取值范围[0,1500]
         * @type {number || null}
         */
        this.Depth = null;

        /**
         * 检测偏移量，取值范围[0,1500]
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 是否包括，取值范围[0(表示不包含),1(表示包含)]
         * @type {number || null}
         */
        this.IsNot = null;

        /**
         * 策略动作，取值范围[drop，drop_black，drop_rst，drop_black_rst，transmit]
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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SportStart = 'SportStart' in params ? params.SportStart : null;
        this.SportEnd = 'SportEnd' in params ? params.SportEnd : null;
        this.DportStart = 'DportStart' in params ? params.DportStart : null;
        this.DportEnd = 'DportEnd' in params ? params.DportEnd : null;
        this.PktlenMin = 'PktlenMin' in params ? params.PktlenMin : null;
        this.PktlenMax = 'PktlenMax' in params ? params.PktlenMax : null;
        this.MatchBegin = 'MatchBegin' in params ? params.MatchBegin : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.Str = 'Str' in params ? params.Str : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.IsNot = 'IsNot' in params ? params.IsNot : null;
        this.Action = 'Action' in params ? params.Action : null;

    }
}

/**
 * DeleteCCFrequencyRules请求参数结构体
 * @class
 */
class DeleteCCFrequencyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * CC防护的访问频率控制规则ID
         * @type {string || null}
         */
        this.CCFrequencyRuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.CCFrequencyRuleId = 'CCFrequencyRuleId' in params ? params.CCFrequencyRuleId : null;

    }
}

/**
 * DescribeDDoSNetIpLog返回参数结构体
 * @class
 */
class DescribeDDoSNetIpLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * IP攻击日志，KeyValue数组，Key-Value取值说明：
Key为"LogTime"时，Value值为IP日志时间
Key为"LogMessage"时，Value值为Ip日志内容
         * @type {Array.<KeyValueRecord> || null}
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new KeyValueRecord();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateCCFrequencyRules请求参数结构体
 * @class
 */
class CreateCCFrequencyRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 匹配规则，取值["include"(前缀匹配)，"equal"(完全匹配)]
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 统计周期，单位秒，取值[10, 30, 60]
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 访问次数，取值[1-10000]
         * @type {number || null}
         */
        this.ReqNumber = null;

        /**
         * 执行动作，取值["alg"（人机识别）, "drop"（拦截）]
         * @type {string || null}
         */
        this.Act = null;

        /**
         * 执行时间，单位秒，取值[1-900]
         * @type {number || null}
         */
        this.ExeDuration = null;

        /**
         * URI字符串，必须以/开头，例如/abc/a.php，长度不超过31；当URI=/时，匹配模式只能选择前缀匹配；
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * User-Agent字符串，长度不超过80
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * Cookie字符串，长度不超过40
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.ReqNumber = 'ReqNumber' in params ? params.ReqNumber : null;
        this.Act = 'Act' in params ? params.Act : null;
        this.ExeDuration = 'ExeDuration' in params ? params.ExeDuration : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.Cookie = 'Cookie' in params ? params.Cookie : null;

    }
}

/**
 * DeleteL7Rules返回参数结构体
 * @class
 */
class DeleteL7RulesResponse extends  AbstractModel {
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
 * CreateL7HealthConfig返回参数结构体
 * @class
 */
class CreateL7HealthConfigResponse extends  AbstractModel {
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
 * DescribeDDoSTrend返回参数结构体
 * @class
 */
class DescribeDDoSTrendResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
         * @type {string || null}
         */
        this.MetricName = null;

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
         * 值个数
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateL7RulesUpload返回参数结构体
 * @class
 */
class CreateL7RulesUploadResponse extends  AbstractModel {
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
 * DescribleRegionCount返回参数结构体
 * @class
 */
class DescribleRegionCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域资源实例数
         * @type {Array.<RegionInstanceCount> || null}
         */
        this.RegionList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RegionList) {
            this.RegionList = new Array();
            for (let z in params.RegionList) {
                let obj = new RegionInstanceCount();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
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
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * DDoS清洗阈值，取值[0, 60, 80, 100, 150, 200, 250, 300, 400, 500, 700, 1000];
当设置值为0时，表示采用默认值；
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Threshold = 'Threshold' in params ? params.Threshold : null;

    }
}

/**
 * DDoS攻击事件记录
 * @class
 */
class DDoSEventRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源的IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 攻击开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 攻击结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 攻击最大带宽
         * @type {number || null}
         */
        this.Mbps = null;

        /**
         * 攻击最大包速率
         * @type {number || null}
         */
        this.Pps = null;

        /**
         * 攻击类型
         * @type {string || null}
         */
        this.AttackType = null;

        /**
         * 是否被封堵，取值[1（是），0（否），2（无效值）]
         * @type {number || null}
         */
        this.BlockFlag = null;

        /**
         * 是否超过弹性防护峰值，取值取值[yes(是)，no(否)，空字符串（未知值）]
         * @type {string || null}
         */
        this.OverLoad = null;

        /**
         * 攻击状态，取值[0（攻击中）, 1（攻击结束）]
         * @type {number || null}
         */
        this.AttackStatus = null;

        /**
         * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 攻击事件Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventId = null;

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
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Mbps = 'Mbps' in params ? params.Mbps : null;
        this.Pps = 'Pps' in params ? params.Pps : null;
        this.AttackType = 'AttackType' in params ? params.AttackType : null;
        this.BlockFlag = 'BlockFlag' in params ? params.BlockFlag : null;
        this.OverLoad = 'OverLoad' in params ? params.OverLoad : null;
        this.AttackStatus = 'AttackStatus' in params ? params.AttackStatus : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * DescribleL4Rules返回参数结构体
 * @class
 */
class DescribleL4RulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则列表
         * @type {Array.<L4RuleEntry> || null}
         */
        this.Rules = null;

        /**
         * 总规则数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 健康检查配置列表
         * @type {Array.<L4RuleHealth> || null}
         */
        this.Healths = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new L4RuleEntry();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Healths) {
            this.Healths = new Array();
            for (let z in params.Healths) {
                let obj = new L4RuleHealth();
                obj.deserialize(params.Healths[z]);
                this.Healths.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyL4Rules返回参数结构体
 * @class
 */
class ModifyL4RulesResponse extends  AbstractModel {
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
         * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))]
         * @type {string || null}
         */
        this.MetricName = null;

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
        this.MetricName = 'MetricName' in params ? params.MetricName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteNewL7Rules请求参数结构体
 * @class
 */
class DeleteNewL7RulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 删除规则列表
         * @type {Array.<L4DelRule> || null}
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

        if (params.Rule) {
            this.Rule = new Array();
            for (let z in params.Rule) {
                let obj = new L4DelRule();
                obj.deserialize(params.Rule[z]);
                this.Rule.push(obj);
            }
        }

    }
}

/**
 * CreateInstanceName请求参数结构体
 * @class
 */
class CreateInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

        /**
         * 资源ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 资源实例名称，长度不超过32个字符
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
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DeleteDDoSPolicy请求参数结构体
 * @class
 */
class DeleteDDoSPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
         * @type {string || null}
         */
        this.Business = null;

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
        this.Business = 'Business' in params ? params.Business : null;
        this.PolicyId = 'PolicyId' in params ? params.PolicyId : null;

    }
}

module.exports = {
    ModifyDDoSPolicyCaseRequest: ModifyDDoSPolicyCaseRequest,
    DescribeIpUnBlockListRequest: DescribeIpUnBlockListRequest,
    DeleteDDoSPolicyCaseRequest: DeleteDDoSPolicyCaseRequest,
    CreateDDoSPolicyResponse: CreateDDoSPolicyResponse,
    DeleteL7RulesRequest: DeleteL7RulesRequest,
    CreateBoundIPRequest: CreateBoundIPRequest,
    DescribeNewL4RulesErrHealthResponse: DescribeNewL4RulesErrHealthResponse,
    DescribeCCEvListRequest: DescribeCCEvListRequest,
    DescribeTransmitStatisResponse: DescribeTransmitStatisResponse,
    DDosPolicy: DDosPolicy,
    DescribeDDoSNetTrendRequest: DescribeDDoSNetTrendRequest,
    DescribePolicyCaseRequest: DescribePolicyCaseRequest,
    DescribeUnBlockStatisRequest: DescribeUnBlockStatisRequest,
    ModifyCCUrlAllowResponse: ModifyCCUrlAllowResponse,
    DescribeBasicDeviceThresholdResponse: DescribeBasicDeviceThresholdResponse,
    DescribeCCAlarmThresholdResponse: DescribeCCAlarmThresholdResponse,
    DescribeDDoSNetEvListRequest: DescribeDDoSNetEvListRequest,
    DeleteNewL4RulesRequest: DeleteNewL4RulesRequest,
    DDoSAlarmThreshold: DDoSAlarmThreshold,
    DescribePolicyCaseResponse: DescribePolicyCaseResponse,
    DescribeResIpListRequest: DescribeResIpListRequest,
    DescribeNewL4RulesErrHealthRequest: DescribeNewL4RulesErrHealthRequest,
    ModifyCCLevelRequest: ModifyCCLevelRequest,
    DeleteCCSelfDefinePolicyRequest: DeleteCCSelfDefinePolicyRequest,
    DescribeCCUrlAllowRequest: DescribeCCUrlAllowRequest,
    KeyValue: KeyValue,
    IpBlackWhite: IpBlackWhite,
    ModifyDDoSAlarmThresholdRequest: ModifyDDoSAlarmThresholdRequest,
    DescribeNewL4RulesRequest: DescribeNewL4RulesRequest,
    CreateDDoSPolicyRequest: CreateDDoSPolicyRequest,
    ModifyCCThresholdResponse: ModifyCCThresholdResponse,
    ModifyNetReturnSwitchResponse: ModifyNetReturnSwitchResponse,
    DescribeActionLogRequest: DescribeActionLogRequest,
    CreateL7RuleCertRequest: CreateL7RuleCertRequest,
    DescribeBGPIPL7RuleMaxCntResponse: DescribeBGPIPL7RuleMaxCntResponse,
    DescribePcapResponse: DescribePcapResponse,
    DescribePackIndexResponse: DescribePackIndexResponse,
    DescribeDDoSAttackSourceRequest: DescribeDDoSAttackSourceRequest,
    DescribeDDoSCountRequest: DescribeDDoSCountRequest,
    RegionInstanceCount: RegionInstanceCount,
    WaterPrintKey: WaterPrintKey,
    CreateNewL7RulesResponse: CreateNewL7RulesResponse,
    CreateNewL4RulesResponse: CreateNewL4RulesResponse,
    DescribeDDoSUsedStatisResponse: DescribeDDoSUsedStatisResponse,
    DescribeBasicCCThresholdRequest: DescribeBasicCCThresholdRequest,
    CreateDDoSPolicyCaseResponse: CreateDDoSPolicyCaseResponse,
    DescribeIPProductInfoResponse: DescribeIPProductInfoResponse,
    ModifyDDoSSwitchResponse: ModifyDDoSSwitchResponse,
    IpBlockData: IpBlockData,
    DescribeCCSelfDefinePolicyRequest: DescribeCCSelfDefinePolicyRequest,
    ModifyDDoSDefendStatusRequest: ModifyDDoSDefendStatusRequest,
    DescribeRuleSetsResponse: DescribeRuleSetsResponse,
    DescribeBaradDataResponse: DescribeBaradDataResponse,
    DescribeDDoSEvInfoRequest: DescribeDDoSEvInfoRequest,
    DescribeDDoSAttackIPRegionMapResponse: DescribeDDoSAttackIPRegionMapResponse,
    ModifyL4KeepTimeResponse: ModifyL4KeepTimeResponse,
    ModifyL7RulesResponse: ModifyL7RulesResponse,
    DescribeL7HealthConfigRequest: DescribeL7HealthConfigRequest,
    BoundIpInfo: BoundIpInfo,
    DescribePcapRequest: DescribePcapRequest,
    DescribeDDoSAlarmThresholdResponse: DescribeDDoSAlarmThresholdResponse,
    KeyValueRecord: KeyValueRecord,
    DescribeBasicDeviceThresholdRequest: DescribeBasicDeviceThresholdRequest,
    DescribleNewL7RulesResponse: DescribleNewL7RulesResponse,
    ModifyResBindDDoSPolicyResponse: ModifyResBindDDoSPolicyResponse,
    ModifyDDoSWaterKeyRequest: ModifyDDoSWaterKeyRequest,
    ModifyCCLevelResponse: ModifyCCLevelResponse,
    DescribeBaradDataRequest: DescribeBaradDataRequest,
    DescribeDDoSDefendStatusResponse: DescribeDDoSDefendStatusResponse,
    DescribeCCSelfDefinePolicyResponse: DescribeCCSelfDefinePolicyResponse,
    CCPolicy: CCPolicy,
    ModifyDDoSAIStatusResponse: ModifyDDoSAIStatusResponse,
    DescribeDDoSNetEvInfoRequest: DescribeDDoSNetEvInfoRequest,
    ModifyResourceRenewFlagRequest: ModifyResourceRenewFlagRequest,
    DescribeCCEvListResponse: DescribeCCEvListResponse,
    DescribeCCFrequencyRulesRequest: DescribeCCFrequencyRulesRequest,
    CreateL4HealthConfigRequest: CreateL4HealthConfigRequest,
    DescribeBGPIPL7RuleMaxCntRequest: DescribeBGPIPL7RuleMaxCntRequest,
    ModifyDDoSPolicyNameResponse: ModifyDDoSPolicyNameResponse,
    DescribeCCAlarmThresholdRequest: DescribeCCAlarmThresholdRequest,
    ModifyCCUrlAllowRequest: ModifyCCUrlAllowRequest,
    ModifyDDoSAlarmThresholdResponse: ModifyDDoSAlarmThresholdResponse,
    ModifyDDoSLevelResponse: ModifyDDoSLevelResponse,
    DescribeIpBlockListResponse: DescribeIpBlockListResponse,
    DescribeCCIpAllowDenyResponse: DescribeCCIpAllowDenyResponse,
    DescribeDDoSIpLogResponse: DescribeDDoSIpLogResponse,
    CCRule: CCRule,
    DescribeResIpListResponse: DescribeResIpListResponse,
    ModifyCCIpAllowDenyRequest: ModifyCCIpAllowDenyRequest,
    CreateInstanceNameResponse: CreateInstanceNameResponse,
    DescribeDDoSDefendStatusRequest: DescribeDDoSDefendStatusRequest,
    ModifyDDoSWaterKeyResponse: ModifyDDoSWaterKeyResponse,
    ModifyL4HealthRequest: ModifyL4HealthRequest,
    ModifyCCHostProtectionResponse: ModifyCCHostProtectionResponse,
    CreateL4RulesResponse: CreateL4RulesResponse,
    DescribeInsurePacksRequest: DescribeInsurePacksRequest,
    DescribeDDoSNetCountRequest: DescribeDDoSNetCountRequest,
    Paging: Paging,
    ModifyCCSelfDefinePolicyRequest: ModifyCCSelfDefinePolicyRequest,
    L4HealthConfig: L4HealthConfig,
    CreateCCSelfDefinePolicyRequest: CreateCCSelfDefinePolicyRequest,
    SuccessCode: SuccessCode,
    DescribleL4RulesRequest: DescribleL4RulesRequest,
    L4RuleEntry: L4RuleEntry,
    DescribeL4HealthConfigRequest: DescribeL4HealthConfigRequest,
    CreateL7CCRuleResponse: CreateL7CCRuleResponse,
    ModifyNetReturnSwitchRequest: ModifyNetReturnSwitchRequest,
    CreateL7CCRuleRequest: CreateL7CCRuleRequest,
    CreateL7RulesRequest: CreateL7RulesRequest,
    CreateL4RulesRequest: CreateL4RulesRequest,
    DescribeNewL7RulesErrHealthResponse: DescribeNewL7RulesErrHealthResponse,
    DescribeDDoSNetEvListResponse: DescribeDDoSNetEvListResponse,
    ModifyCCFrequencyRulesStatusResponse: ModifyCCFrequencyRulesStatusResponse,
    DescribeL4RulesErrHealthRequest: DescribeL4RulesErrHealthRequest,
    L4RuleSource: L4RuleSource,
    CreateBasicDDoSAlarmThresholdResponse: CreateBasicDDoSAlarmThresholdResponse,
    CreateNetReturnResponse: CreateNetReturnResponse,
    DeleteL4RulesRequest: DeleteL4RulesRequest,
    DescribeResourceListRequest: DescribeResourceListRequest,
    DeleteL4RulesResponse: DeleteL4RulesResponse,
    DescribleNewL7RulesRequest: DescribleNewL7RulesRequest,
    DescribeIPProductInfoRequest: DescribeIPProductInfoRequest,
    CreateL7HealthConfigRequest: CreateL7HealthConfigRequest,
    CreateL7RuleCertResponse: CreateL7RuleCertResponse,
    DescribeDDoSAttackIPRegionMapRequest: DescribeDDoSAttackIPRegionMapRequest,
    ModifyDDoSPolicyRequest: ModifyDDoSPolicyRequest,
    DescribeSourceIpSegmentRequest: DescribeSourceIpSegmentRequest,
    DescribeSourceIpSegmentResponse: DescribeSourceIpSegmentResponse,
    ModifyResBindDDoSPolicyRequest: ModifyResBindDDoSPolicyRequest,
    L7RuleHealth: L7RuleHealth,
    CreateL7RulesUploadRequest: CreateL7RulesUploadRequest,
    L4RuleHealth: L4RuleHealth,
    ModifyCCFrequencyRulesRequest: ModifyCCFrequencyRulesRequest,
    ModifyCCPolicySwitchResponse: ModifyCCPolicySwitchResponse,
    ModifyDDoSThresholdResponse: ModifyDDoSThresholdResponse,
    CreateDDoSPolicyCaseRequest: CreateDDoSPolicyCaseRequest,
    ModifyCCIpAllowDenyResponse: ModifyCCIpAllowDenyResponse,
    ModifyCCAlarmThresholdRequest: ModifyCCAlarmThresholdRequest,
    DescribeCCFrequencyRulesResponse: DescribeCCFrequencyRulesResponse,
    DescribeDDoSEvListRequest: DescribeDDoSEvListRequest,
    DescribeBasicCCThresholdResponse: DescribeBasicCCThresholdResponse,
    ModifyDDoSPolicyNameRequest: ModifyDDoSPolicyNameRequest,
    DescribeIpUnBlockListResponse: DescribeIpUnBlockListResponse,
    ModifyCCPolicySwitchRequest: ModifyCCPolicySwitchRequest,
    ModifyCCFrequencyRulesResponse: ModifyCCFrequencyRulesResponse,
    ModifyL4KeepTimeRequest: ModifyL4KeepTimeRequest,
    SchedulingDomain: SchedulingDomain,
    ModifyCCHostProtectionRequest: ModifyCCHostProtectionRequest,
    DescribeIpBlockListRequest: DescribeIpBlockListRequest,
    DescribeDDoSNetCountResponse: DescribeDDoSNetCountResponse,
    CreateL7RulesResponse: CreateL7RulesResponse,
    BaradData: BaradData,
    ModifyDDoSSwitchRequest: ModifyDDoSSwitchRequest,
    CreateNetReturnRequest: CreateNetReturnRequest,
    ModifyDDoSAIStatusRequest: ModifyDDoSAIStatusRequest,
    DescribeResourceListResponse: DescribeResourceListResponse,
    DescribeNewL4RulesResponse: DescribeNewL4RulesResponse,
    ModifyCCThresholdRequest: ModifyCCThresholdRequest,
    ModifyDDoSDefendStatusResponse: ModifyDDoSDefendStatusResponse,
    CreateBasicDDoSAlarmThresholdRequest: CreateBasicDDoSAlarmThresholdRequest,
    CCRuleConfig: CCRuleConfig,
    DescribeDDoSEvInfoResponse: DescribeDDoSEvInfoResponse,
    DescribleRegionCountRequest: DescribleRegionCountRequest,
    ModifyCCSelfDefinePolicyResponse: ModifyCCSelfDefinePolicyResponse,
    DescribeDDoSIpLogRequest: DescribeDDoSIpLogRequest,
    DescribeDDoSAlarmThresholdRequest: DescribeDDoSAlarmThresholdRequest,
    DeleteNewL4RulesResponse: DeleteNewL4RulesResponse,
    WaterPrintPolicy: WaterPrintPolicy,
    ProtocolPort: ProtocolPort,
    DeleteNewL7RulesResponse: DeleteNewL7RulesResponse,
    DeleteCCSelfDefinePolicyResponse: DeleteCCSelfDefinePolicyResponse,
    DescribeDDoSPolicyResponse: DescribeDDoSPolicyResponse,
    DeleteCCFrequencyRulesResponse: DeleteCCFrequencyRulesResponse,
    DeleteDDoSPolicyCaseResponse: DeleteDDoSPolicyCaseResponse,
    CreateL4HealthConfigResponse: CreateL4HealthConfigResponse,
    CreateNewL7RulesRequest: CreateNewL7RulesRequest,
    ModifyL7RulesRequest: ModifyL7RulesRequest,
    ModifyElasticLimitResponse: ModifyElasticLimitResponse,
    DDoSAttackSourceRecord: DDoSAttackSourceRecord,
    CreateUnblockIpResponse: CreateUnblockIpResponse,
    DescribePackIndexRequest: DescribePackIndexRequest,
    DescribeNewL7RulesErrHealthRequest: DescribeNewL7RulesErrHealthRequest,
    ModifyL4RulesRequest: ModifyL4RulesRequest,
    DescribeDDoSEvListResponse: DescribeDDoSEvListResponse,
    DescribeDDoSPolicyRequest: DescribeDDoSPolicyRequest,
    NewL4RuleEntry: NewL4RuleEntry,
    DescribeL7HealthConfigResponse: DescribeL7HealthConfigResponse,
    CCFrequencyRule: CCFrequencyRule,
    CreateCCSelfDefinePolicyResponse: CreateCCSelfDefinePolicyResponse,
    NewL7RuleEntry: NewL7RuleEntry,
    L4DelRule: L4DelRule,
    DescribeDDoSAttackSourceResponse: DescribeDDoSAttackSourceResponse,
    CreateBoundIPResponse: CreateBoundIPResponse,
    DescribeDDoSUsedStatisRequest: DescribeDDoSUsedStatisRequest,
    DDoSPolicyDropOption: DDoSPolicyDropOption,
    ModifyElasticLimitRequest: ModifyElasticLimitRequest,
    ModifyL4HealthResponse: ModifyL4HealthResponse,
    CCEventRecord: CCEventRecord,
    DescribeTransmitStatisRequest: DescribeTransmitStatisRequest,
    DescribeInsurePacksResponse: DescribeInsurePacksResponse,
    CreateUnblockIpRequest: CreateUnblockIpRequest,
    ModifyResourceRenewFlagResponse: ModifyResourceRenewFlagResponse,
    OrderBy: OrderBy,
    DescribeActionLogResponse: DescribeActionLogResponse,
    DescribeCCTrendResponse: DescribeCCTrendResponse,
    ModifyDDoSPolicyCaseResponse: ModifyDDoSPolicyCaseResponse,
    DescribeCCUrlAllowResponse: DescribeCCUrlAllowResponse,
    DescribeSecIndexRequest: DescribeSecIndexRequest,
    ModifyCCFrequencyRulesStatusRequest: ModifyCCFrequencyRulesStatusRequest,
    DescribeDDoSCountResponse: DescribeDDoSCountResponse,
    DescribeL4RulesErrHealthResponse: DescribeL4RulesErrHealthResponse,
    DeleteDDoSPolicyResponse: DeleteDDoSPolicyResponse,
    DescribeDDoSTrendRequest: DescribeDDoSTrendRequest,
    ModifyDDoSPolicyResponse: ModifyDDoSPolicyResponse,
    ResourceIp: ResourceIp,
    CCAlarmThreshold: CCAlarmThreshold,
    DescribeDDoSNetIpLogRequest: DescribeDDoSNetIpLogRequest,
    L7HealthConfig: L7HealthConfig,
    DescribeDDoSNetEvInfoResponse: DescribeDDoSNetEvInfoResponse,
    ModifyCCAlarmThresholdResponse: ModifyCCAlarmThresholdResponse,
    DescribeRuleSetsRequest: DescribeRuleSetsRequest,
    DescribeSchedulingDomainListRequest: DescribeSchedulingDomainListRequest,
    DescribleL7RulesResponse: DescribleL7RulesResponse,
    CreateCCFrequencyRulesResponse: CreateCCFrequencyRulesResponse,
    CreateNewL4RulesRequest: CreateNewL4RulesRequest,
    DDoSPolicyPortLimit: DDoSPolicyPortLimit,
    DescribeSchedulingDomainListResponse: DescribeSchedulingDomainListResponse,
    DescribeDDoSNetTrendResponse: DescribeDDoSNetTrendResponse,
    DescribeUnBlockStatisResponse: DescribeUnBlockStatisResponse,
    DescribleL7RulesRequest: DescribleL7RulesRequest,
    DescribeCCIpAllowDenyRequest: DescribeCCIpAllowDenyRequest,
    DescribeSecIndexResponse: DescribeSecIndexResponse,
    L7RuleEntry: L7RuleEntry,
    IpUnBlockData: IpUnBlockData,
    DescribeL4HealthConfigResponse: DescribeL4HealthConfigResponse,
    ModifyDDoSLevelRequest: ModifyDDoSLevelRequest,
    DDoSPolicyPacketFilter: DDoSPolicyPacketFilter,
    DeleteCCFrequencyRulesRequest: DeleteCCFrequencyRulesRequest,
    DescribeDDoSNetIpLogResponse: DescribeDDoSNetIpLogResponse,
    CreateCCFrequencyRulesRequest: CreateCCFrequencyRulesRequest,
    DeleteL7RulesResponse: DeleteL7RulesResponse,
    CreateL7HealthConfigResponse: CreateL7HealthConfigResponse,
    DescribeDDoSTrendResponse: DescribeDDoSTrendResponse,
    CreateL7RulesUploadResponse: CreateL7RulesUploadResponse,
    DescribleRegionCountResponse: DescribleRegionCountResponse,
    ModifyDDoSThresholdRequest: ModifyDDoSThresholdRequest,
    DDoSEventRecord: DDoSEventRecord,
    DescribleL4RulesResponse: DescribleL4RulesResponse,
    ModifyL4RulesResponse: ModifyL4RulesResponse,
    DescribeCCTrendRequest: DescribeCCTrendRequest,
    DeleteNewL7RulesRequest: DeleteNewL7RulesRequest,
    CreateInstanceNameRequest: CreateInstanceNameRequest,
    DeleteDDoSPolicyRequest: DeleteDDoSPolicyRequest,

}

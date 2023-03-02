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
 * DeleteRewrite请求参数结构体
 * @class
 */
class DeleteRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 源监听器ID。
         * @type {string || null}
         */
        this.SourceListenerId = null;

        /**
         * 目标监听器ID。
         * @type {string || null}
         */
        this.TargetListenerId = null;

        /**
         * 转发规则之间的重定向关系。
         * @type {Array.<RewriteLocationMap> || null}
         */
        this.RewriteInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SourceListenerId = 'SourceListenerId' in params ? params.SourceListenerId : null;
        this.TargetListenerId = 'TargetListenerId' in params ? params.TargetListenerId : null;

        if (params.RewriteInfos) {
            this.RewriteInfos = new Array();
            for (let z in params.RewriteInfos) {
                let obj = new RewriteLocationMap();
                obj.deserialize(params.RewriteInfos[z]);
                this.RewriteInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeTargetGroupList返回参数结构体
 * @class
 */
class DescribeTargetGroupListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 显示的结果数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 显示的目标组信息集合。
         * @type {Array.<TargetGroupInfo> || null}
         */
        this.TargetGroupSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.TargetGroupSet) {
            this.TargetGroupSet = new Array();
            for (let z in params.TargetGroupSet) {
                let obj = new TargetGroupInfo();
                obj.deserialize(params.TargetGroupSet[z]);
                this.TargetGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQuota请求参数结构体
 * @class
 */
class DescribeQuotaRequest extends  AbstractModel {
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
 * DescribeTargetGroupList请求参数结构体
 * @class
 */
class DescribeTargetGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID数组。
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

        /**
         * 过滤条件数组，支持TargetGroupVpcId和TargetGroupName。与TargetGroupIds互斥，优先使用目标组ID。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 显示的偏移起始量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 显示条数限制，默认为20。
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
        this.TargetGroupIds = 'TargetGroupIds' in params ? params.TargetGroupIds : null;

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
 * BatchDeregisterTargets返回参数结构体
 * @class
 */
class BatchDeregisterTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解绑失败的监听器ID。
         * @type {Array.<string> || null}
         */
        this.FailListenerIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailListenerIdSet = 'FailListenerIdSet' in params ? params.FailListenerIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetLoadBalancerSecurityGroups返回参数结构体
 * @class
 */
class SetLoadBalancerSecurityGroupsResponse extends  AbstractModel {
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
 * 七层规则对象
 * @class
 */
class RulesItems extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则id
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * uri
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 绑定的后端对象
         * @type {Array.<LbRsTargets> || null}
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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new LbRsTargets();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * 暂做保留，一般用户无需关注。
 * @class
 */
class ExtraInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开通VIP直通
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.ZhiTong = null;

        /**
         * TgwGroup名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TgwGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZhiTong = 'ZhiTong' in params ? params.ZhiTong : null;
        this.TgwGroupName = 'TgwGroupName' in params ? params.TgwGroupName : null;

    }
}

/**
 * BatchModifyTargetWeight返回参数结构体
 * @class
 */
class BatchModifyTargetWeightResponse extends  AbstractModel {
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
 * SetSecurityGroupForLoadbalancers请求参数结构体
 * @class
 */
class SetSecurityGroupForLoadbalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组ID，如 sg-12345678
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * ADD 绑定安全组；
DEL 解绑安全组
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * 负载均衡实例ID数组
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

    }
}

/**
 * CreateLoadBalancer请求参数结构体
 * @class
 */
class CreateLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例的网络类型：
OPEN：公网属性， INTERNAL：内网属性。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 负载均衡实例的类型。1：通用的负载均衡实例，目前只支持传入1。
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * 负载均衡实例的名称，只在创建一个实例的时候才会生效。规则：1-60 个英文、汉字、数字、连接线“-”或下划线“_”。
注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡后端目标设备所属的网络 ID，如vpc-12345678，可以通过 [DescribeVpcEx](https://cloud.tencent.com/document/product/215/1372) 接口获取。 不填此参数则默认为DefaultVPC。创建内网负载均衡实例时，此参数必填。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 在私有网络内购买内网负载均衡实例的情况下，必须指定子网 ID，内网负载均衡实例的 VIP 将从这个子网中产生。创建内网负载均衡实例时，此参数必填。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 负载均衡实例所属的项目 ID，可以通过 [DescribeProject](https://cloud.tencent.com/document/product/378/4400) 接口获取。不填此参数则视为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 仅适用于公网负载均衡。IP版本，可取值：IPV4、IPV6、IPv6FullChain，默认值 IPV4。说明：取值为IPV6表示为IPV6 NAT64版本；取值为IPv6FullChain，表示为IPv6版本。
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * 创建负载均衡的个数，默认值 1。
         * @type {number || null}
         */
        this.Number = null;

        /**
         * 仅适用于公网负载均衡。设置跨可用区容灾时的主可用区ID，例如 100001 或 ap-guangzhou-1
注：主可用区是需要承载流量的可用区，备可用区默认不承载流量，主可用区不可用时才使用备可用区，平台将为您自动选择最佳备可用区。可通过 [DescribeResources](https://cloud.tencent.com/document/api/214/70213) 接口查询一个地域的主可用区的列表。
         * @type {string || null}
         */
        this.MasterZoneId = null;

        /**
         * 仅适用于公网负载均衡。可用区ID，指定可用区以创建负载均衡实例。如：ap-guangzhou-1。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 仅适用于公网负载均衡。负载均衡的网络计费模式。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 仅适用于公网负载均衡。CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通，如果不指定本参数，则默认使用BGP。可通过 DescribeSingleIsp 接口查询一个地域所支持的Isp。如果指定运营商，则网络计费式只能使用按带宽包计费(BANDWIDTH_PACKAGE)。
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * 购买负载均衡的同时，给负载均衡打上标签，最大支持20个标签键值对。
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 指定VIP申请负载均衡。此参数选填，不填写此参数时自动分配VIP。IPv4和IPv6类型支持此参数，IPv6 NAT64类型不支持。
注意：当指定VIP创建内网实例、或公网IPv6 BGP实例时，若VIP不属于指定VPC子网的网段内时，会创建失败；若VIP已被占用，也会创建失败。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 带宽包ID，指定此参数时，网络计费方式（InternetAccessible.InternetChargeType）只支持按带宽包计费（BANDWIDTH_PACKAGE）。
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 独占型实例信息。若创建独占型的内网负载均衡实例，则此参数必填。
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * 创建性能容量型实例。
<ul><li>若需要创建性能容量型实例，则此参数必填，且取值为：SLA，表示创建按量计费模式下的默认规格的性能容量型实例。
<ul><li>当您开通了普通规格的性能容量型时，SLA对应超强型1规格。普通规格的性能容量型正在内测中，请提交 [内测申请](https://cloud.tencent.com/apply/p/hf45esx99lf)。</li>
<li>当您开通了超大型规格的性能容量型时，SLA对应超强型4规格。超大型规格的性能容量型正在内测中，请提交 [工单申请](https://console.cloud.tencent.com/workorder/category)。</li></ul></li><li>若需要创建共享型实例，则无需填写此参数。</li></ul>
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 是否支持绑定跨地域/跨Vpc绑定IP的功能。
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * 开启绑定跨地域/跨Vpc绑定IP的功能后，创建SnatIp。
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * Stgw独占集群的标签。
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * 仅适用于公网负载均衡。设置跨可用区容灾时的备可用区ID，例如 100001 或 ap-guangzhou-1
注：备可用区是主可用区故障后，需要承载流量的可用区。可通过 [DescribeResources](https://cloud.tencent.com/document/api/214/70213) 接口查询一个地域的主/备可用区的列表。
         * @type {string || null}
         */
        this.SlaveZoneId = null;

        /**
         * EIP 的唯一 ID，形如：eip-11112222，仅适用于内网负载均衡绑定EIP。
         * @type {string || null}
         */
        this.EipAddressId = null;

        /**
         * Target是否放通来自CLB的流量。开启放通（true）：只验证CLB上的安全组；不开启放通（false）：需同时验证CLB和后端实例上的安全组。
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Forward = 'Forward' in params ? params.Forward : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.Number = 'Number' in params ? params.Number : null;
        this.MasterZoneId = 'MasterZoneId' in params ? params.MasterZoneId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;

        if (params.ExclusiveCluster) {
            let obj = new ExclusiveCluster();
            obj.deserialize(params.ExclusiveCluster)
            this.ExclusiveCluster = obj;
        }
        this.SlaType = 'SlaType' in params ? params.SlaType : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.SnatPro = 'SnatPro' in params ? params.SnatPro : null;

        if (params.SnatIps) {
            this.SnatIps = new Array();
            for (let z in params.SnatIps) {
                let obj = new SnatIp();
                obj.deserialize(params.SnatIps[z]);
                this.SnatIps.push(obj);
            }
        }
        this.ClusterTag = 'ClusterTag' in params ? params.ClusterTag : null;
        this.SlaveZoneId = 'SlaveZoneId' in params ? params.SlaveZoneId : null;
        this.EipAddressId = 'EipAddressId' in params ? params.EipAddressId : null;
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;

    }
}

/**
 * DescribeLoadBalancerOverview返回参数结构体
 * @class
 */
class DescribeLoadBalancerOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 运行中的负载均衡数目
         * @type {number || null}
         */
        this.RunningCount = null;

        /**
         * 隔离中的负载均衡数目
         * @type {number || null}
         */
        this.IsolationCount = null;

        /**
         * 即将到期的负载均衡数目
         * @type {number || null}
         */
        this.WillExpireCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RunningCount = 'RunningCount' in params ? params.RunningCount : null;
        this.IsolationCount = 'IsolationCount' in params ? params.IsolationCount : null;
        this.WillExpireCount = 'WillExpireCount' in params ? params.WillExpireCount : null;
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
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要删除的转发规则的ID组成的数组。
         * @type {Array.<string> || null}
         */
        this.LocationIds = null;

        /**
         * 要删除的转发规则的域名，如果是多域名，可以指定多域名列表中的任意一个。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 要删除的转发规则的转发路径。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 监听器下必须配置一个默认域名，当需要删除默认域名时，可以指定另一个域名作为新的默认域名，如果新的默认域名是多域名，可以指定多域名列表中的任意一个。
         * @type {string || null}
         */
        this.NewDefaultServerDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LocationIds = 'LocationIds' in params ? params.LocationIds : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.NewDefaultServerDomain = 'NewDefaultServerDomain' in params ? params.NewDefaultServerDomain : null;

    }
}

/**
 * CloneLoadBalancer请求参数结构体
 * @class
 */
class CloneLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 克隆出负载均衡实例的名称，规则：1-60 个英文、汉字、数字、连接线“-”或下划线“_”。
注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡实例所属的项目 ID，可以通过 [DescribeProject](https://cloud.tencent.com/document/product/378/4400) 接口获取。不传此参数则视为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 仅适用于公网负载均衡。设置跨可用区容灾时的主可用区ID，例如 100001 或 ap-guangzhou-1
注：主可用区是需要承载流量的可用区，备可用区默认不承载流量，主可用区不可用时才使用备可用区，平台将为您自动选择最佳备可用区。可通过 [DescribeResources](https://cloud.tencent.com/document/api/214/70213) 接口查询一个地域的主可用区的列表。
         * @type {string || null}
         */
        this.MasterZoneId = null;

        /**
         * 仅适用于公网负载均衡。设置跨可用区容灾时的备可用区ID，例如 100001 或 ap-guangzhou-1
注：备可用区是主可用区故障后，需要承载流量的可用区。可通过 [DescribeResources](https://cloud.tencent.com/document/api/214/70213) 接口查询一个地域的主/备可用区的列表。
         * @type {string || null}
         */
        this.SlaveZoneId = null;

        /**
         * 仅适用于公网负载均衡。可用区ID，指定可用区以创建负载均衡实例。如：ap-guangzhou-1。
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 仅适用于公网负载均衡。负载均衡的网络计费模式。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 仅适用于公网负载均衡。CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通，如果不指定本参数，则默认使用BGP。可通过 DescribeSingleIsp 接口查询一个地域所支持的Isp。如果指定运营商，则网络计费式只能使用按带宽包计费(BANDWIDTH_PACKAGE)。
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * 指定Vip申请负载均衡。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 购买负载均衡同时，给负载均衡打上标签。
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 独占集群信息。
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * 带宽包ID，指定此参数时，网络计费方式（InternetAccessible.InternetChargeType）只支持按带宽包计费（BANDWIDTH_PACKAGE）。
         * @type {string || null}
         */
        this.BandwidthPackageId = null;

        /**
         * 是否支持绑定跨地域/跨Vpc绑定IP的功能。
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * 开启绑定跨地域/跨Vpc绑定IP的功能后，创建SnatIp。
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * 公网独占集群ID或者CDCId。
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 性能容量型规格。
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * Stgw独占集群的标签。
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * 仅适用于私有网络内网负载均衡。内网就近接入时，选择可用区下发。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * EIP 的唯一 ID，形如：eip-11112222，仅适用于内网负载均衡绑定EIP。
         * @type {string || null}
         */
        this.EipAddressId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.MasterZoneId = 'MasterZoneId' in params ? params.MasterZoneId : null;
        this.SlaveZoneId = 'SlaveZoneId' in params ? params.SlaveZoneId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

        if (params.ExclusiveCluster) {
            let obj = new ExclusiveCluster();
            obj.deserialize(params.ExclusiveCluster)
            this.ExclusiveCluster = obj;
        }
        this.BandwidthPackageId = 'BandwidthPackageId' in params ? params.BandwidthPackageId : null;
        this.SnatPro = 'SnatPro' in params ? params.SnatPro : null;

        if (params.SnatIps) {
            this.SnatIps = new Array();
            for (let z in params.SnatIps) {
                let obj = new SnatIp();
                obj.deserialize(params.SnatIps[z]);
                this.SnatIps.push(obj);
            }
        }
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.SlaType = 'SlaType' in params ? params.SlaType : null;
        this.ClusterTag = 'ClusterTag' in params ? params.ClusterTag : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.EipAddressId = 'EipAddressId' in params ? params.EipAddressId : null;

    }
}

/**
 * DisassociateTargetGroups返回参数结构体
 * @class
 */
class DisassociateTargetGroupsResponse extends  AbstractModel {
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
 * SetLoadBalancerClsLog返回参数结构体
 * @class
 */
class SetLoadBalancerClsLogResponse extends  AbstractModel {
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
 * DescribeLoadBalancerTraffic返回参数结构体
 * @class
 */
class DescribeLoadBalancerTrafficResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按出带宽从高到低排序后的负载均衡信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LoadBalancerTraffic> || null}
         */
        this.LoadBalancerTraffic = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadBalancerTraffic) {
            this.LoadBalancerTraffic = new Array();
            for (let z in params.LoadBalancerTraffic) {
                let obj = new LoadBalancerTraffic();
                obj.deserialize(params.LoadBalancerTraffic[z]);
                this.LoadBalancerTraffic.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CLB监听器或规则绑定的多证书信息
 * @class
 */
class MultiCertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证类型，UNIDIRECTIONAL：单向认证，MUTUAL：双向认证
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * 监听器或规则证书列表，单双向认证，多本服务端证书算法类型不能重复;若SSLMode为双向认证，证书列表必须包含一本ca证书。
         * @type {Array.<CertInfo> || null}
         */
        this.CertList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SSLMode = 'SSLMode' in params ? params.SSLMode : null;

        if (params.CertList) {
            this.CertList = new Array();
            for (let z in params.CertList) {
                let obj = new CertInfo();
                obj.deserialize(params.CertList[z]);
                this.CertList.push(obj);
            }
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
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要修改的转发规则的 ID。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 转发规则的新的转发路径，如不需修改Url，则不需提供此参数。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 健康检查信息。
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 规则的请求转发方式，可选值：WRR、LEAST_CONN、IP_HASH
分别表示按权重轮询、最小连接数、按IP哈希， 默认为 WRR。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 会话保持时间。
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 负载均衡实例与后端服务之间的转发协议，默认HTTP，可取值：HTTP、HTTPS、TRPC。
         * @type {string || null}
         */
        this.ForwardType = null;

        /**
         * TRPC被调服务器路由，ForwardType为TRPC时必填。
         * @type {string || null}
         */
        this.TrpcCallee = null;

        /**
         * TRPC调用服务接口，ForwardType为TRPC时必填。
         * @type {string || null}
         */
        this.TrpcFunc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.ForwardType = 'ForwardType' in params ? params.ForwardType : null;
        this.TrpcCallee = 'TrpcCallee' in params ? params.TrpcCallee : null;
        this.TrpcFunc = 'TrpcFunc' in params ? params.TrpcFunc : null;

    }
}

/**
 * DescribeCustomizedConfigList返回参数结构体
 * @class
 */
class DescribeCustomizedConfigListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置列表
         * @type {Array.<ConfigListItem> || null}
         */
        this.ConfigList = null;

        /**
         * 配置数目
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

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new ConfigListItem();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBlockIPList返回参数结构体
 * @class
 */
class DescribeBlockIPListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的IP的数量
         * @type {number || null}
         */
        this.BlockedIPCount = null;

        /**
         * 获取用户真实IP的字段
         * @type {string || null}
         */
        this.ClientIPField = null;

        /**
         * 加入了12360黑名单的IP列表
         * @type {Array.<BlockedIP> || null}
         */
        this.BlockedIPList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlockedIPCount = 'BlockedIPCount' in params ? params.BlockedIPCount : null;
        this.ClientIPField = 'ClientIPField' in params ? params.ClientIPField : null;

        if (params.BlockedIPList) {
            this.BlockedIPList = new Array();
            for (let z in params.BlockedIPList) {
                let obj = new BlockedIP();
                obj.deserialize(params.BlockedIPList[z]);
                this.BlockedIPList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRewrite请求参数结构体
 * @class
 */
class DescribeRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID数组。
         * @type {Array.<string> || null}
         */
        this.SourceListenerIds = null;

        /**
         * 负载均衡转发规则的ID数组。
         * @type {Array.<string> || null}
         */
        this.SourceLocationIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SourceListenerIds = 'SourceListenerIds' in params ? params.SourceListenerIds : null;
        this.SourceLocationIds = 'SourceLocationIds' in params ? params.SourceLocationIds : null;

    }
}

/**
 * ModifyLoadBalancerAttributes返回参数结构体
 * @class
 */
class ModifyLoadBalancerAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 切换负载均衡计费方式时，可用此参数查询切换任务是否成功。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTargetGroupInstances请求参数结构体
 * @class
 */
class DescribeTargetGroupInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，当前仅支持TargetGroupId，BindIP，InstanceId过滤。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 显示数量限制，默认20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 显示的偏移量，默认为0。
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

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeIdleLoadBalancers返回参数结构体
 * @class
 */
class DescribeIdleLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 闲置实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<IdleLoadBalancer> || null}
         */
        this.IdleLoadBalancers = null;

        /**
         * 所有闲置实例数目
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

        if (params.IdleLoadBalancers) {
            this.IdleLoadBalancers = new Array();
            for (let z in params.IdleLoadBalancers) {
                let obj = new IdleLoadBalancer();
                obj.deserialize(params.IdleLoadBalancers[z]);
                this.IdleLoadBalancers.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssociateTargetGroups请求参数结构体
 * @class
 */
class AssociateTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的关系数组。
         * @type {Array.<TargetGroupAssociation> || null}
         */
        this.Associations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Associations) {
            this.Associations = new Array();
            for (let z in params.Associations) {
                let obj = new TargetGroupAssociation();
                obj.deserialize(params.Associations[z]);
                this.Associations.push(obj);
            }
        }

    }
}

/**
 * DescribeLoadBalancers请求参数结构体
 * @class
 */
class DescribeLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。实例ID数量上限为20个。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 负载均衡实例的网络类型：
OPEN：公网属性， INTERNAL：内网属性。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 负载均衡实例的类型。1：通用的负载均衡实例，0：传统型负载均衡实例。如果不传此参数，则查询所有类型的负载均衡实例。
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * 负载均衡实例的名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 腾讯云为负载均衡实例分配的域名，本参数仅对传统型公网负载均衡才有意义。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 负载均衡实例的 VIP 地址，支持多个。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * 负载均衡绑定的后端服务的外网 IP，只支持查询云服务器的公网 IP。
         * @type {Array.<string> || null}
         */
        this.BackendPublicIps = null;

        /**
         * 负载均衡绑定的后端服务的内网 IP，只支持查询云服务器的内网 IP。
         * @type {Array.<string> || null}
         */
        this.BackendPrivateIps = null;

        /**
         * 数据偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回负载均衡实例的数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序参数，支持以下字段：LoadBalancerName，CreateTime，Domain，LoadBalancerType。
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 1：倒序，0：顺序，默认按照创建时间倒序。
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * 搜索字段，模糊匹配名称、域名、VIP。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 负载均衡实例所属的项目 ID，可以通过 DescribeProject 接口获取。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 负载均衡是否绑定后端服务，0：没有绑定后端服务，1：绑定后端服务，-1：查询全部。
         * @type {number || null}
         */
        this.WithRs = null;

        /**
         * 负载均衡实例所属私有网络唯一ID，如 vpc-bhqkbhdx，
基础网络可传入'0'。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 安全组ID，如 sg-m1cc****。
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * 主可用区ID，如 ："100001" （对应的是广州一区）。
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。<br/>`Filter.Name`和`Filter.Values`皆为必填项。详细的过滤条件如下：
<li> charge-type - String - 是否必填：否 - （过滤条件）按照 CLB 的实例计费模式过滤，包括"PREPAID","POSTPAID_BY_HOUR"。</li>
<li> internet-charge-type - String - 是否必填：否 - （过滤条件）按照 CLB 的网络计费模式过滤，包括"BANDWIDTH_PREPAID","TRAFFIC_POSTPAID_BY_HOUR","BANDWIDTH_POSTPAID_BY_HOUR","BANDWIDTH_PACKAGE"。</li>
<li> master-zone-id - String - 是否必填：否 - （过滤条件）按照 CLB 的主可用区ID过滤，如 ："100001" （对应的是广州一区）。</li>
<li> tag-key - String - 是否必填：否 - （过滤条件）按照 CLB 标签的键过滤。</li>
<li> tag:tag-key - String - 是否必填：否 - （过滤条件）按照CLB标签键值对进行过滤，tag-key使用具体的标签键进行替换。</li>
<li> function-name - String - 是否必填：否 - （过滤条件）按照 CLB 后端绑定的SCF云函数的函数名称过滤。</li>
<li> function-name - String - 是否必填：否 - （过滤条件）按照 CLB 后端绑定的SCF云函数的函数名称过滤。</li>
<li> vip-isp - String - 是否必填：否 - （过滤条件）按照 CLB VIP的运营商类型过滤，如："BGP","INTERNAL","CMCC","CTCC","CUCC"等。</li>
<li> sla-type - String - 是否必填：否 - （过滤条件）按照 CLB 的性能容量型规格过滤，包括"clb.c2.medium","clb.c3.small","clb.c3.medium","clb.c4.small","clb.c4.medium","clb.c4.large","clb.c4.xlarge"。</li>
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
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Forward = 'Forward' in params ? params.Forward : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.BackendPublicIps = 'BackendPublicIps' in params ? params.BackendPublicIps : null;
        this.BackendPrivateIps = 'BackendPrivateIps' in params ? params.BackendPrivateIps : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.WithRs = 'WithRs' in params ? params.WithRs : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;

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
 * 传统型负载均衡的后端服务相关信息
 * @class
 */
class ClassicalTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端服务的类型，可取值：CVM、ENI（即将支持）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 后端服务的唯一 ID，可通过 DescribeInstances 接口返回字段中的 unInstanceId 字段获取
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 后端服务的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 后端服务的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 后端服务的实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 后端服务的状态
1：故障，2：运行中，3：创建中，4：已关机，5：已退还，6：退还中， 7：重启中，8：开机中，9：关机中，10：密码重置中，11：格式化中，12：镜像制作中，13：带宽设置中，14：重装系统中，19：升级中，21：热迁移中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RunFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RunFlag = 'RunFlag' in params ? params.RunFlag : null;

    }
}

/**
 * 反查监听器类型
 * @class
 */
class ListenerItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 绑定规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RulesItems> || null}
         */
        this.Rules = null;

        /**
         * 四层绑定对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LbRsTargets> || null}
         */
        this.Targets = null;

        /**
         * 端口段监听器的结束端口
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RulesItems();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new LbRsTargets();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.EndPort = 'EndPort' in params ? params.EndPort : null;

    }
}

/**
 * 修改节点权重的数据类型
 * @class
 */
class RsWeightRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡监听器 ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要修改权重的后端机器列表。
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 转发规则的ID，七层规则时需要此参数，4层规则不需要。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标规则的域名，提供LocationId参数时本参数不生效。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标规则的URL，提供LocationId参数时本参数不生效。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 后端服务修改后的转发权重，取值范围：[0，100]。此参数的优先级低于前述[Target](https://cloud.tencent.com/document/api/214/30694#Target)中的Weight参数，即最终的权重值以Target中的Weight参数值为准，仅当Target中的Weight参数为空时，才以RsWeightRule中的Weight参数为准。
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * RegisterFunctionTargets请求参数结构体
 * @class
 */
class RegisterFunctionTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 待绑定的云函数列表。
         * @type {Array.<FunctionTarget> || null}
         */
        this.FunctionTargets = null;

        /**
         * 目标转发规则的 ID，当将云函数绑定到七层转发规则时，必须输入此参数或 Domain+Url 参数。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标转发规则的域名，若已经输入 LocationId 参数，则本参数不生效。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标转发规则的 URL，若已经输入 LocationId 参数，则本参数不生效。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.FunctionTargets) {
            this.FunctionTargets = new Array();
            for (let z in params.FunctionTargets) {
                let obj = new FunctionTarget();
                obj.deserialize(params.FunctionTargets[z]);
                this.FunctionTargets.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DeregisterTargetsFromClassicalLB请求参数结构体
 * @class
 */
class DeregisterTargetsFromClassicalLBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 后端服务的实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * SetSecurityGroupForLoadbalancers返回参数结构体
 * @class
 */
class SetSecurityGroupForLoadbalancersResponse extends  AbstractModel {
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
 * 监听器或者转发规则绑定的目标组基本信息
 * @class
 */
class BasicTargetGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 目标组名称
         * @type {string || null}
         */
        this.TargetGroupName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;

    }
}

/**
 * ModifyTargetWeight返回参数结构体
 * @class
 */
class ModifyTargetWeightResponse extends  AbstractModel {
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
 * 可用区资源列表
 * @class
 */
class ZoneResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主可用区，如"ap-guangzhou-1"。
         * @type {string || null}
         */
        this.MasterZone = null;

        /**
         * 资源列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Resource> || null}
         */
        this.ResourceSet = null;

        /**
         * 备可用区，如"ap-guangzhou-2"，单可用区时，备可用区为null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlaveZone = null;

        /**
         * IP版本，如IPv4，IPv6，IPv6_Nat。
         * @type {string || null}
         */
        this.IPVersion = null;

        /**
         * 可用区所属地域，如：ap-guangzhou
         * @type {string || null}
         */
        this.ZoneRegion = null;

        /**
         * 可用区是否是LocalZone可用区，如：false
         * @type {boolean || null}
         */
        this.LocalZone = null;

        /**
         * 可用区资源的类型，SHARED表示共享资源，EXCLUSIVE表示独占资源。
         * @type {string || null}
         */
        this.ZoneResourceType = null;

        /**
         * 可用区是否是EdgeZone可用区，如：false
         * @type {boolean || null}
         */
        this.EdgeZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;

        if (params.ResourceSet) {
            this.ResourceSet = new Array();
            for (let z in params.ResourceSet) {
                let obj = new Resource();
                obj.deserialize(params.ResourceSet[z]);
                this.ResourceSet.push(obj);
            }
        }
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.IPVersion = 'IPVersion' in params ? params.IPVersion : null;
        this.ZoneRegion = 'ZoneRegion' in params ? params.ZoneRegion : null;
        this.LocalZone = 'LocalZone' in params ? params.LocalZone : null;
        this.ZoneResourceType = 'ZoneResourceType' in params ? params.ZoneResourceType : null;
        this.EdgeZone = 'EdgeZone' in params ? params.EdgeZone : null;

    }
}

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求ID，即接口返回的 RequestId 参数。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 订单ID。
注意：参数TaskId和DealName必须传一个。
         * @type {string || null}
         */
        this.DealName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;

    }
}

/**
 * 目标组实例
 * @class
 */
class TargetGroupInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组实例的内网IP
         * @type {string || null}
         */
        this.BindIP = null;

        /**
         * 目标组实例的端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 目标组实例的权重
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 目标组实例的新端口
         * @type {number || null}
         */
        this.NewPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BindIP = 'BindIP' in params ? params.BindIP : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.NewPort = 'NewPort' in params ? params.NewPort : null;

    }
}

/**
 * DescribeClassicalLBByInstanceId返回参数结构体
 * @class
 */
class DescribeClassicalLBByInstanceIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡相关信息列表。
         * @type {Array.<ClassicalLoadBalancerInfo> || null}
         */
        this.LoadBalancerInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadBalancerInfoList) {
            this.LoadBalancerInfoList = new Array();
            for (let z in params.LoadBalancerInfoList) {
                let obj = new ClassicalLoadBalancerInfo();
                obj.deserialize(params.LoadBalancerInfoList[z]);
                this.LoadBalancerInfoList.push(obj);
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
         * 创建的转发规则的唯一标识数组。
         * @type {Array.<string> || null}
         */
        this.LocationIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocationIds = 'LocationIds' in params ? params.LocationIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 跨域2.0云联网下子机和网卡信息
 * @class
 */
class CrossTargets extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本地私有网络ID，即负载均衡的VpcId。
         * @type {string || null}
         */
        this.LocalVpcId = null;

        /**
         * 子机或网卡所属的私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子机或网卡的IP地址
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 子机或网卡所属的私有网络名称。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 子机的网卡ID。
         * @type {string || null}
         */
        this.EniId = null;

        /**
         * 子机实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 子机实例名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 子机或者网卡所属的地域。
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
        this.LocalVpcId = 'LocalVpcId' in params ? params.LocalVpcId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.IP = 'IP' in params ? params.IP : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.EniId = 'EniId' in params ? params.EniId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * 一条转发规则的健康检查状态
 * @class
 */
class RuleHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则ID
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 转发规则的域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发规则的Url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 本规则上绑定的后端服务的健康检查状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TargetHealth> || null}
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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new TargetHealth();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * DescribeExclusiveClusters返回参数结构体
 * @class
 */
class DescribeExclusiveClustersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群列表。
         * @type {Array.<Cluster> || null}
         */
        this.ClusterSet = null;

        /**
         * 集群总数量。
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

        if (params.ClusterSet) {
            this.ClusterSet = new Array();
            for (let z in params.ClusterSet) {
                let obj = new Cluster();
                obj.deserialize(params.ClusterSet[z]);
                this.ClusterSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
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
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器下的某个旧域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 新域名，	长度限制为：1-120。有三种使用格式：非正则表达式格式，通配符格式，正则表达式格式。非正则表达式格式只能使用字母、数字、‘-’、‘.’。通配符格式的使用 ‘*’ 只能在开头或者结尾。正则表达式以'~'开头。
         * @type {string || null}
         */
        this.NewDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.NewDomain = 'NewDomain' in params ? params.NewDomain : null;

    }
}

/**
 * 闲置实例。
 * @class
 */
class IdleLoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡名字
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 负载均衡的vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 闲置原因。NO_RULES：没有规则，NO_RS：有规则没有绑定子机。
         * @type {string || null}
         */
        this.IdleReason = null;

        /**
         * 负载均衡实例的状态，包括
0：创建中，1：正常运行。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 负载均衡类型标识，1：负载均衡，0：传统型负载均衡。
         * @type {number || null}
         */
        this.Forward = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.IdleReason = 'IdleReason' in params ? params.IdleReason : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Forward = 'Forward' in params ? params.Forward : null;

    }
}

/**
 * RegisterTargetGroupInstances返回参数结构体
 * @class
 */
class RegisterTargetGroupInstancesResponse extends  AbstractModel {
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
 * 传统型负载均衡的后端信息
 * @class
 */
class ClassicalTargetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 权重，取值范围 [0, 100]
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * DescribeTargets请求参数结构体
 * @class
 */
class DescribeTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 监听器 ID 列表。ID 数量上限为20个。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * 监听器协议类型。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 查询负载均衡绑定的后端服务列表，过滤条件如下：
<li> location-id - String - 是否必填：否 - （过滤条件）按照 规则ID 过滤，如："loc-12345678"。</li>
<li> private-ip-address - String - 是否必填：否 - （过滤条件）按照 后端服务内网IP 过滤，如："172.16.1.1"。</li>
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

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
 * 可用区相关信息
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区数值形式的唯一ID，如：100001
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区字符串形式的唯一ID，如：ap-guangzhou-1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区名称，如：广州一区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 可用区所属地域，如：ap-guangzhou
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneRegion = null;

        /**
         * 可用区是否是LocalZone可用区，如：false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.LocalZone = null;

        /**
         * 可用区是否是EdgeZone可用区，如：false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EdgeZone = null;

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
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneRegion = 'ZoneRegion' in params ? params.ZoneRegion : null;
        this.LocalZone = 'LocalZone' in params ? params.LocalZone : null;
        this.EdgeZone = 'EdgeZone' in params ? params.EdgeZone : null;

    }
}

/**
 * RegisterTargetsWithClassicalLB返回参数结构体
 * @class
 */
class RegisterTargetsWithClassicalLBResponse extends  AbstractModel {
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
 * DescribeTargetGroups返回参数结构体
 * @class
 */
class DescribeTargetGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 显示的结果数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 显示的目标组信息集合。
         * @type {Array.<TargetGroupInfo> || null}
         */
        this.TargetGroupSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.TargetGroupSet) {
            this.TargetGroupSet = new Array();
            for (let z in params.TargetGroupSet) {
                let obj = new TargetGroupInfo();
                obj.deserialize(params.TargetGroupSet[z]);
                this.TargetGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 负载均衡实例的健康检查状态
 * @class
 */
class LoadBalancerHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 监听器列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ListenerHealth> || null}
         */
        this.Listeners = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ListenerHealth();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }

    }
}

/**
 * ModifyLoadBalancerSla返回参数结构体
 * @class
 */
class ModifyLoadBalancerSlaResponse extends  AbstractModel {
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
 * DeleteLoadBalancerListeners请求参数结构体
 * @class
 */
class DeleteLoadBalancerListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 指定删除的监听器ID数组，最大为20个。若不填则删除负载均衡的所有监听器。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;

    }
}

/**
 * 加入了12306黑名单的IP
 * @class
 */
class BlockedIP extends  AbstractModel {
    constructor(){
        super();

        /**
         * 黑名单IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 加入黑名单的时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
 * DescribeClassicalLBTargets请求参数结构体
 * @class
 */
class DescribeClassicalLBTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

    }
}

/**
 * DeregisterFunctionTargets返回参数结构体
 * @class
 */
class DeregisterFunctionTargetsResponse extends  AbstractModel {
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
 * DescribeCustomizedConfigList请求参数结构体
 * @class
 */
class DescribeCustomizedConfigListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置类型:CLB 负载均衡维度。 SERVER 域名维度。 LOCATION 规则维度。
         * @type {string || null}
         */
        this.ConfigType = null;

        /**
         * 拉取页偏移，默认值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取数目，默认值20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 拉取指定配置名字，模糊匹配。
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置ID
         * @type {Array.<string> || null}
         */
        this.UconfigIds = null;

        /**
         * 过滤条件如下：
<li> loadbalancer-id - String - 是否必填：否 - （过滤条件）按照 负载均衡ID 过滤，如："lb-12345678"。</li>
<li> vip - String - 是否必填：否 - （过滤条件）按照 负载均衡Vip 过滤，如："1.1.1.1","2204::22:3"。</li>
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
        this.ConfigType = 'ConfigType' in params ? params.ConfigType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.UconfigIds = 'UconfigIds' in params ? params.UconfigIds : null;

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
 * AutoRewrite请求参数结构体
 * @class
 */
class AutoRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * HTTPS:443监听器的ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * HTTPS:443监听器下需要重定向的域名，若不填，则对HTTPS:443监听器下的所有域名都设置重定向。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 重定向状态码，可取值301,302,307。
         * @type {Array.<number> || null}
         */
        this.RewriteCodes = null;

        /**
         * 重定向是否携带匹配的URL。
         * @type {Array.<boolean> || null}
         */
        this.TakeUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.RewriteCodes = 'RewriteCodes' in params ? params.RewriteCodes : null;
        this.TakeUrls = 'TakeUrls' in params ? params.TakeUrls : null;

    }
}

/**
 * DescribeCrossTargets返回参数结构体
 * @class
 */
class DescribeCrossTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端服务列表总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 后端服务列表。
         * @type {Array.<CrossTargets> || null}
         */
        this.CrossTargetSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.CrossTargetSet) {
            this.CrossTargetSet = new Array();
            for (let z in params.CrossTargetSet) {
                let obj = new CrossTargets();
                obj.deserialize(params.CrossTargetSet[z]);
                this.CrossTargetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SCF云函数（Serverless Cloud Function）相关信息。
 * @class
 */
class FunctionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数命名空间
         * @type {string || null}
         */
        this.FunctionNamespace = null;

        /**
         * 函数名称
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 函数的版本名称或别名
         * @type {string || null}
         */
        this.FunctionQualifier = null;

        /**
         * 标识 FunctionQualifier 参数的类型，可取值： VERSION（版本）、ALIAS（别名）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FunctionQualifierType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionNamespace = 'FunctionNamespace' in params ? params.FunctionNamespace : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionQualifier = 'FunctionQualifier' in params ? params.FunctionQualifier : null;
        this.FunctionQualifierType = 'FunctionQualifierType' in params ? params.FunctionQualifierType : null;

    }
}

/**
 * ModifyFunctionTargets返回参数结构体
 * @class
 */
class ModifyFunctionTargetsResponse extends  AbstractModel {
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
 * DescribeLoadBalancerListByCertId返回参数结构体
 * @class
 */
class DescribeLoadBalancerListByCertIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID，以及与该证书ID关联的负载均衡实例列表
         * @type {Array.<CertIdRelatedWithLoadBalancers> || null}
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
                let obj = new CertIdRelatedWithLoadBalancers();
                obj.deserialize(params.CertSet[z]);
                this.CertSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTargetGroupInstancesWeight返回参数结构体
 * @class
 */
class ModifyTargetGroupInstancesWeightResponse extends  AbstractModel {
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
 * DescribeTargetGroups请求参数结构体
 * @class
 */
class DescribeTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID，与Filters互斥。
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

        /**
         * 显示条数限制，默认为20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 显示的偏移起始量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件数组，与TargetGroupIds互斥，支持TargetGroupVpcId和TargetGroupName。
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
        this.TargetGroupIds = 'TargetGroupIds' in params ? params.TargetGroupIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的当前状态。 0：成功，1：失败，2：进行中。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 由负载均衡实例唯一 ID 组成的数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchRegisterTargets返回参数结构体
 * @class
 */
class BatchRegisterTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定失败的监听器ID，如为空表示全部绑定成功。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FailListenerIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FailListenerIdSet = 'FailListenerIdSet' in params ? params.FailListenerIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLoadBalancerAttributes请求参数结构体
 * @class
 */
class ModifyLoadBalancerAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡的唯一ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡实例名称
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 设置负载均衡跨地域绑定1.0的后端服务信息
         * @type {TargetRegionInfo || null}
         */
        this.TargetRegionInfo = null;

        /**
         * 网络计费相关参数
         * @type {InternetAccessible || null}
         */
        this.InternetChargeInfo = null;

        /**
         * Target是否放通来自CLB的流量。开启放通（true）：只验证CLB上的安全组；不开启放通（false）：需同时验证CLB和后端实例上的安全组。
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * 是否开启跨地域绑定2.0功能
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * 是否开启删除保护
         * @type {boolean || null}
         */
        this.DeleteProtect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

        if (params.TargetRegionInfo) {
            let obj = new TargetRegionInfo();
            obj.deserialize(params.TargetRegionInfo)
            this.TargetRegionInfo = obj;
        }

        if (params.InternetChargeInfo) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetChargeInfo)
            this.InternetChargeInfo = obj;
        }
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;
        this.SnatPro = 'SnatPro' in params ? params.SnatPro : null;
        this.DeleteProtect = 'DeleteProtect' in params ? params.DeleteProtect : null;

    }
}

/**
 * DescribeLBListeners请求参数结构体
 * @class
 */
class DescribeLBListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查询的内网ip列表
         * @type {Array.<LbRsItem> || null}
         */
        this.Backends = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Backends) {
            this.Backends = new Array();
            for (let z in params.Backends) {
                let obj = new LbRsItem();
                obj.deserialize(params.Backends[z]);
                this.Backends.push(obj);
            }
        }

    }
}

/**
 * 升级为性能容量型参数
 * @class
 */
class SlaUpdateParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * lb的字符串ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 升级为性能容量型，固定取值为SLA。SLA表示升级为默认规格的性能容量型实例。
<ul><li>当您开通了普通规格的性能容量型时，SLA对应超强型1规格。普通规格的性能容量型正在内测中，请提交 [内测申请](https://cloud.tencent.com/apply/p/hf45esx99lf)。</li>
<li>当您开通了超大型规格的性能容量型时，SLA对应超强型4规格。超大型规格的性能容量型正在内测中，请提交 [工单申请](https://console.cloud.tencent.com/workorder/category)。</li></ul>
         * @type {string || null}
         */
        this.SlaType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SlaType = 'SlaType' in params ? params.SlaType : null;

    }
}

/**
 * 转发目标，即绑定在负载均衡上的后端服务
 * @class
 */
class Target extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端服务的监听端口。
注意：绑定CVM（云服务器）或ENI（弹性网卡）时必传此参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 后端服务的类型，可取：CVM（云服务器）、ENI（弹性网卡）；作为入参时，目前本参数暂不生效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 绑定CVM时需要传入此参数，代表CVM的唯一 ID，可通过 DescribeInstances 接口返回字段中的 InstanceId 字段获取。表示绑定主网卡主IP。
注意：参数 InstanceId、EniIp 有且只能传入其中一个参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端服务修改后的转发权重，取值范围：[0, 100]，默认为 10。此参数的优先级高于[RsWeightRule](https://cloud.tencent.com/document/api/214/30694#RsWeightRule)中的Weight参数，即最终的权重值以此Weight参数值为准，仅当此Weight参数为空时，才以RsWeightRule中的Weight参数为准。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 绑定IP时需要传入此参数，支持弹性网卡的IP和其他内网IP，如果是弹性网卡则必须先绑定至CVM，然后才能绑定到负载均衡实例。
注意：参数 InstanceId、EniIp 有且只能传入其中一个参数。如果绑定双栈IPV6子机，则必须传该参数。如果是跨地域绑定，则必须传该参数，不支持传InstanceId参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EniIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Port = 'Port' in params ? params.Port : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.EniIp = 'EniIp' in params ? params.EniIp : null;

    }
}

/**
 * DescribeLoadBalancerTraffic请求参数结构体
 * @class
 */
class DescribeLoadBalancerTrafficRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡所在地域，不传默认返回所有地域负载均衡。
         * @type {string || null}
         */
        this.LoadBalancerRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerRegion = 'LoadBalancerRegion' in params ? params.LoadBalancerRegion : null;

    }
}

/**
 * DescribeBlockIPList请求参数结构体
 * @class
 */
class DescribeBlockIPListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 数据偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回IP的最大个数，默认为 100000。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 证书ID，以及与该证书ID关联的负载均衡实例列表
 * @class
 */
class CertIdRelatedWithLoadBalancers extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 与证书关联的负载均衡实例列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LoadBalancer> || null}
         */
        this.LoadBalancers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

        if (params.LoadBalancers) {
            this.LoadBalancers = new Array();
            for (let z in params.LoadBalancers) {
                let obj = new LoadBalancer();
                obj.deserialize(params.LoadBalancers[z]);
                this.LoadBalancers.push(obj);
            }
        }

    }
}

/**
 * DescribeClassicalLBHealthStatus返回参数结构体
 * @class
 */
class DescribeClassicalLBHealthStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端健康状态列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClassicalHealth> || null}
         */
        this.HealthList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HealthList) {
            this.HealthList = new Array();
            for (let z in params.HealthList) {
                let obj = new ClassicalHealth();
                obj.deserialize(params.HealthList[z]);
                this.HealthList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClsLogSet请求参数结构体
 * @class
 */
class DescribeClsLogSetRequest extends  AbstractModel {
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
 * 监听器的信息
 * @class
 */
class Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 监听器绑定的证书信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CertificateOutput || null}
         */
        this.Certificate = null;

        /**
         * 监听器的健康检查信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 请求的调度方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 会话保持时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 是否开启SNI特性（本参数仅对于HTTPS监听器有意义）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * 监听器下的全部转发规则（本参数仅对于HTTP/HTTPS监听器有意义）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleOutput> || null}
         */
        this.Rules = null;

        /**
         * 监听器的名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 端口段结束端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EndPort = null;

        /**
         * 后端服务器类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 绑定的目标组基本信息；当监听器绑定目标组时，会返回该字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BasicTargetGroupInfo || null}
         */
        this.TargetGroup = null;

        /**
         * 会话保持类型。NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionType = null;

        /**
         * 是否开启长连接，1开启，0关闭，（本参数仅对于HTTP/HTTPS监听器有意义）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.KeepaliveEnable = null;

        /**
         * 仅支持Nat64 CLB TCP监听器
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Toa = null;

        /**
         * 解绑后端目标时，是否发RST给客户端，（此参数仅对于TCP监听器有意义）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.DeregisterTargetRst = null;

        /**
         * 监听器的属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AttrFlags = null;

        /**
         * 绑定的目标组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BasicTargetGroupInfo> || null}
         */
        this.TargetGroupList = null;

        /**
         * 监听器最大连接数，-1表示监听器维度不限速。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxConn = null;

        /**
         * 监听器最大新增连接数，-1表示监听器维度不限速。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxCps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.Certificate) {
            let obj = new CertificateOutput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleOutput();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.EndPort = 'EndPort' in params ? params.EndPort : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;

        if (params.TargetGroup) {
            let obj = new BasicTargetGroupInfo();
            obj.deserialize(params.TargetGroup)
            this.TargetGroup = obj;
        }
        this.SessionType = 'SessionType' in params ? params.SessionType : null;
        this.KeepaliveEnable = 'KeepaliveEnable' in params ? params.KeepaliveEnable : null;
        this.Toa = 'Toa' in params ? params.Toa : null;
        this.DeregisterTargetRst = 'DeregisterTargetRst' in params ? params.DeregisterTargetRst : null;
        this.AttrFlags = 'AttrFlags' in params ? params.AttrFlags : null;

        if (params.TargetGroupList) {
            this.TargetGroupList = new Array();
            for (let z in params.TargetGroupList) {
                let obj = new BasicTargetGroupInfo();
                obj.deserialize(params.TargetGroupList[z]);
                this.TargetGroupList.push(obj);
            }
        }
        this.MaxConn = 'MaxConn' in params ? params.MaxConn : null;
        this.MaxCps = 'MaxCps' in params ? params.MaxCps : null;

    }
}

/**
 * 负载均衡流量数据。
 * @class
 */
class LoadBalancerTraffic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡名字
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡所在地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 负载均衡的vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 最大出带宽，单位：Mbps
         * @type {number || null}
         */
        this.OutBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.OutBandwidth = 'OutBandwidth' in params ? params.OutBandwidth : null;

    }
}

/**
 * 配置内容
 * @class
 */
class ConfigListItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置ID
         * @type {string || null}
         */
        this.UconfigId = null;

        /**
         * 配置类型
         * @type {string || null}
         */
        this.ConfigType = null;

        /**
         * 配置名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 配置内容
         * @type {string || null}
         */
        this.ConfigContent = null;

        /**
         * 增加配置时间
         * @type {string || null}
         */
        this.CreateTimestamp = null;

        /**
         * 修改配置时间
         * @type {string || null}
         */
        this.UpdateTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UconfigId = 'UconfigId' in params ? params.UconfigId : null;
        this.ConfigType = 'ConfigType' in params ? params.ConfigType : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.ConfigContent = 'ConfigContent' in params ? params.ConfigContent : null;
        this.CreateTimestamp = 'CreateTimestamp' in params ? params.CreateTimestamp : null;
        this.UpdateTimestamp = 'UpdateTimestamp' in params ? params.UpdateTimestamp : null;

    }
}

/**
 * RegisterTargetsWithClassicalLB请求参数结构体
 * @class
 */
class RegisterTargetsWithClassicalLBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 后端服务信息。
         * @type {Array.<ClassicalTargetInfo> || null}
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new ClassicalTargetInfo();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * ModifyDomainAttributes返回参数结构体
 * @class
 */
class ModifyDomainAttributesResponse extends  AbstractModel {
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
 * ReplaceCertForLoadBalancers返回参数结构体
 * @class
 */
class ReplaceCertForLoadBalancersResponse extends  AbstractModel {
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
 * DescribeTargets返回参数结构体
 * @class
 */
class DescribeTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器后端绑定的机器信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ListenerBackend> || null}
         */
        this.Listeners = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ListenerBackend();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyListener请求参数结构体
 * @class
 */
class ModifyListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 新的监听器名称。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 健康检查相关参数，此参数仅适用于TCP/UDP/TCP_SSL监听器。
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 证书相关信息，此参数仅适用于HTTPS/TCP_SSL监听器；此参数和MultiCertInfo不能同时传入。
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

        /**
         * 监听器转发的方式。可选值：WRR、LEAST_CONN
分别表示按权重轮询、最小连接数， 默认为 WRR。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 是否开启SNI特性，此参数仅适用于HTTPS监听器。注意：未开启SNI的监听器可以开启SNI；已开启SNI的监听器不能关闭SNI。
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * 后端目标类型，NODE表示绑定普通节点，TARGETGROUP表示绑定目标组。
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 是否开启长连接，此参数仅适用于HTTP/HTTPS监听器。
         * @type {number || null}
         */
        this.KeepaliveEnable = null;

        /**
         * 解绑后端目标时，是否发RST给客户端，此参数仅适用于TCP监听器。
         * @type {boolean || null}
         */
        this.DeregisterTargetRst = null;

        /**
         * 会话保持类型。NORMAL表示默认会话保持类型。QUIC_CID表示根据Quic Connection ID做会话保持。QUIC_CID只支持UDP协议。
         * @type {string || null}
         */
        this.SessionType = null;

        /**
         * 证书信息，支持同时传入不同算法类型的多本服务端证书；此参数仅适用于未开启SNI特性的HTTPS监听器。此参数和Certificate不能同时传入。
         * @type {MultiCertInfo || null}
         */
        this.MultiCertInfo = null;

        /**
         * 监听器粒度并发连接数上限，当前仅性能容量型实例且仅TCP/UDP/TCP_SSL/QUIC监听器支持。取值范围：1-实例规格并发连接上限，其中-1表示关闭监听器粒度并发连接数限速。
         * @type {number || null}
         */
        this.MaxConn = null;

        /**
         * 监听器粒度新建连接数上限，当前仅性能容量型实例且仅TCP/UDP/TCP_SSL/QUIC监听器支持。取值范围：1-实例规格新建连接上限，其中-1表示关闭监听器粒度新建连接数限速。
         * @type {number || null}
         */
        this.MaxCps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.KeepaliveEnable = 'KeepaliveEnable' in params ? params.KeepaliveEnable : null;
        this.DeregisterTargetRst = 'DeregisterTargetRst' in params ? params.DeregisterTargetRst : null;
        this.SessionType = 'SessionType' in params ? params.SessionType : null;

        if (params.MultiCertInfo) {
            let obj = new MultiCertInfo();
            obj.deserialize(params.MultiCertInfo)
            this.MultiCertInfo = obj;
        }
        this.MaxConn = 'MaxConn' in params ? params.MaxConn : null;
        this.MaxCps = 'MaxCps' in params ? params.MaxCps : null;

    }
}

/**
 * DeregisterTargetGroupInstances返回参数结构体
 * @class
 */
class DeregisterTargetGroupInstancesResponse extends  AbstractModel {
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
 * RegisterTargets请求参数结构体
 * @class
 */
class RegisterTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 待绑定的后端服务列表，数组长度最大支持20。
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 转发规则的ID，当绑定后端服务到七层转发规则时，必须提供此参数或Domain+Url两者之一。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标转发规则的域名，提供LocationId参数时本参数不生效。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标转发规则的URL，提供LocationId参数时本参数不生效。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 健康检查信息。
注意，自定义探测相关参数 目前只有少量区域灰度支持。
 * @class
 */
class HealthCheck extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启健康检查：1（开启）、0（关闭）。
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 健康检查的响应超时时间（仅适用于四层监听器），可选值：2~60，默认值：2，单位：秒。响应超时时间要小于检查间隔时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 健康检查探测间隔时间，默认值：5，可选值：5~300，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2~10，单位：次。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发异常，可选值：2~10，单位：次。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UnHealthNum = null;

        /**
         * 健康检查状态码（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式）。可选值：1~31，默认 31。
1 表示探测后返回值 1xx 代表健康，2 表示返回 2xx 代表健康，4 表示返回 3xx 代表健康，8 表示返回 4xx 代表健康，16 表示返回 5xx 代表健康。若希望多种返回码都可代表健康，则将相应的值相加。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HttpCode = null;

        /**
         * 健康检查路径（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 健康检查域名（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式，当监听器是TCP类型时，该参数为必填项）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpCheckDomain = null;

        /**
         * 健康检查方法（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式），默认值：HEAD，可选值HEAD或GET。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpCheckMethod = null;

        /**
         * 自定义探测相关参数。健康检查端口，默认为后端服务的端口，除非您希望指定特定端口，否则建议留空。（仅适用于TCP/UDP监听器）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CheckPort = null;

        /**
         * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查的输入格式，可取值：HEX或TEXT；取值为HEX时，SendContext和RecvContext的字符只能在0123456789ABCDEF中选取且长度必须是偶数位。（仅适用于TCP/UDP监听器）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContextType = null;

        /**
         * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查发送的请求内容，只允许ASCII可见字符，最大长度限制500。（仅适用于TCP/UDP监听器）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SendContext = null;

        /**
         * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查返回的结果，只允许ASCII可见字符，最大长度限制500。（仅适用于TCP/UDP监听器）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecvContext = null;

        /**
         * 自定义探测相关参数。健康检查使用的协议：TCP | HTTP | CUSTOM（仅适用于TCP/UDP监听器，其中UDP监听器只支持CUSTOM；如果使用自定义健康检查功能，则必传）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckType = null;

        /**
         * 自定义探测相关参数。健康检查协议CheckType的值取HTTP时，必传此字段，代表后端服务的HTTP版本：HTTP/1.0、HTTP/1.1；（仅适用于TCP监听器）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpVersion = null;

        /**
         * 自定义探测相关参数。健康检查源IP类型：0（使用LB的VIP作为源IP），1（使用100.64网段IP作为源IP），默认值：0
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SourceIpType = null;

        /**
         * GRPC健康检查状态码（仅适用于后端转发协议为GRPC的规则）。默认值为 12，可输入值为数值、多个数值、或者范围，例如 20 或 20,25 或 0-99
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtendedCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnHealthNum = 'UnHealthNum' in params ? params.UnHealthNum : null;
        this.HttpCode = 'HttpCode' in params ? params.HttpCode : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.HttpCheckDomain = 'HttpCheckDomain' in params ? params.HttpCheckDomain : null;
        this.HttpCheckMethod = 'HttpCheckMethod' in params ? params.HttpCheckMethod : null;
        this.CheckPort = 'CheckPort' in params ? params.CheckPort : null;
        this.ContextType = 'ContextType' in params ? params.ContextType : null;
        this.SendContext = 'SendContext' in params ? params.SendContext : null;
        this.RecvContext = 'RecvContext' in params ? params.RecvContext : null;
        this.CheckType = 'CheckType' in params ? params.CheckType : null;
        this.HttpVersion = 'HttpVersion' in params ? params.HttpVersion : null;
        this.SourceIpType = 'SourceIpType' in params ? params.SourceIpType : null;
        this.ExtendedCode = 'ExtendedCode' in params ? params.ExtendedCode : null;

    }
}

/**
 * AssociateTargetGroups返回参数结构体
 * @class
 */
class AssociateTargetGroupsResponse extends  AbstractModel {
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
 * CreateTopic请求参数结构体
 * @class
 */
class CreateTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题的名称。
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 主题分区Partition的数量，不传参默认创建1个，最大创建允许10个，分裂/合并操作会改变分区数量，整体上限50个。
         * @type {number || null}
         */
        this.PartitionCount = null;

        /**
         * 日志类型，ACCESS：访问日志，HEALTH：健康检查日志，默认ACCESS。
         * @type {string || null}
         */
        this.TopicType = null;

        /**
         * 日志集的保存周期，单位：天，默认30天。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 日志主题的存储类型，可选值 HOT（标准存储），COLD（低频存储）；默认为HOT。
         * @type {string || null}
         */
        this.StorageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.PartitionCount = 'PartitionCount' in params ? params.PartitionCount : null;
        this.TopicType = 'TopicType' in params ? params.TopicType : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;

    }
}

/**
 * DeleteListener请求参数结构体
 * @class
 */
class DeleteListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 要删除的监听器ID。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

    }
}

/**
 * 传统型负载均衡后端服务的健康状态
 * @class
 */
class ClassicalHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端服务的内网 IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 后端服务的端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 负载均衡的监听端口
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * 转发协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 健康检查结果，1 表示健康，0 表示不健康
         * @type {number || null}
         */
        this.HealthStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;

    }
}

/**
 * DescribeCustomizedConfigAssociateList请求参数结构体
 * @class
 */
class DescribeCustomizedConfigAssociateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置ID
         * @type {string || null}
         */
        this.UconfigId = null;

        /**
         * 拉取绑定关系列表开始位置，默认值 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取绑定关系列表数目，默认值 20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索域名
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
        this.UconfigId = 'UconfigId' in params ? params.UconfigId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

    }
}

/**
 * ModifyTargetPort返回参数结构体
 * @class
 */
class ModifyTargetPortResponse extends  AbstractModel {
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
 * MigrateClassicalLoadBalancers请求参数结构体
 * @class
 */
class MigrateClassicalLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 传统型负载均衡ID数组
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 独占集群信息
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

        if (params.ExclusiveCluster) {
            let obj = new ExclusiveCluster();
            obj.deserialize(params.ExclusiveCluster)
            this.ExclusiveCluster = obj;
        }

    }
}

/**
 * DescribeLoadBalancersDetail请求参数结构体
 * @class
 */
class DescribeLoadBalancersDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回负载均衡列表数目，默认20，最大值100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回负载均衡列表起始偏移量，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 选择返回的Fields列表，系统仅会返回Fileds中填写的字段，可填写的字段详情请参见<a href="https://cloud.tencent.com/document/api/214/30694#LoadBalancerDetail">LoadBalancerDetail</a>。若未在Fileds填写相关字段，则此字段返回null。Fileds中默认添加LoadBalancerId和LoadBalancerName字段。
         * @type {Array.<string> || null}
         */
        this.Fields = null;

        /**
         * 当Fields包含TargetId、TargetAddress、TargetPort、TargetWeight等Fields时，必选选择导出目标组的Target或者非目标组Target，值范围NODE、GROUP。
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 查询负载均衡详细信息列表条件，详细的过滤条件如下：
<li> loadbalancer-id - String - 是否必填：否 - （过滤条件）按照 负载均衡ID 过滤，如："lb-12345678"。</li>
<li> project-id - String - 是否必填：否 - （过滤条件）按照 项目ID 过滤，如："0","123"。</li>
<li> network - String - 是否必填：否 - （过滤条件）按照 负载均衡网络类型 过滤，如："Public","Private"。</li>
<li> vip - String - 是否必填：否 - （过滤条件）按照 负载均衡Vip 过滤，如："1.1.1.1","2204::22:3"。</li>
<li> target-ip - String - 是否必填：否 - （过滤条件）按照 后端目标内网Ip 过滤，如："1.1.1.1","2203::214:4"。</li>
<li> vpcid - String - 是否必填：否 - （过滤条件）按照 负载均衡所属vpcId 过滤，如："vpc-12345678"。</li>
<li> zone - String - 是否必填：否 - （过滤条件）按照 负载均衡所属的可用区 过滤，如："ap-guangzhou-1"。</li>
<li> tag-key - String - 是否必填：否 - （过滤条件）按照 负载均衡标签的标签键 过滤，如："name"。</li>
<li> tag:* - String - 是否必填：否 - （过滤条件）按照 负载均衡的标签 过滤，':' 后面跟的是标签键。如：过滤标签键name，标签值zhangsan,lisi，{"Name": "tag:name","Values": ["zhangsan", "lisi"]}。</li>
<li> fuzzy-search - String - 是否必填：否 - （过滤条件）按照 负载均衡Vip，负载均衡名称 模糊搜索，如："1.1"。</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Fields = 'Fields' in params ? params.Fields : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;

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
 * 目标组绑定的后端服务器
 * @class
 */
class TargetGroupBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 后端服务的类型，可取：CVM、ENI（即将支持）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 后端服务的唯一 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端服务的监听端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 后端服务的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 后端服务的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 后端服务的实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 后端服务被绑定的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegisteredTime = null;

        /**
         * 弹性网卡唯一ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EniId = null;

        /**
         * 后端服务的可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegisteredTime = 'RegisteredTime' in params ? params.RegisteredTime : null;
        this.EniId = 'EniId' in params ? params.EniId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DeregisterFunctionTargets请求参数结构体
 * @class
 */
class DeregisterFunctionTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 待解绑的云函数列表。
         * @type {Array.<FunctionTarget> || null}
         */
        this.FunctionTargets = null;

        /**
         * 目标转发规则的 ID，当将云函数从七层转发规则上解绑时，必须输入此参数或 Domain+Url 参数。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标转发规则的域名，若已经输入 LocationId 参数，则本参数不生效。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标转发规则的 URL，若已经输入 LocationId 参数，则本参数不生效。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.FunctionTargets) {
            this.FunctionTargets = new Array();
            for (let z in params.FunctionTargets) {
                let obj = new FunctionTarget();
                obj.deserialize(params.FunctionTargets[z]);
                this.FunctionTargets.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeClassicalLBByInstanceId请求参数结构体
 * @class
 */
class DescribeClassicalLBByInstanceIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * SCF云函数（Serverless Cloud Function）作为后端服务
 * @class
 */
class FunctionTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云函数相关信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FunctionInfo || null}
         */
        this.Function = null;

        /**
         * 权重
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

        if (params.Function) {
            let obj = new FunctionInfo();
            obj.deserialize(params.Function)
            this.Function = obj;
        }
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * DescribeResources返回参数结构体
 * @class
 */
class DescribeResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区支持的资源列表。
         * @type {Array.<ZoneResource> || null}
         */
        this.ZoneResourceSet = null;

        /**
         * 可用区资源列表数目。
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

        if (params.ZoneResourceSet) {
            this.ZoneResourceSet = new Array();
            for (let z in params.ZoneResourceSet) {
                let obj = new ZoneResource();
                obj.deserialize(params.ZoneResourceSet[z]);
                this.ZoneResourceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTargetGroupInstancesWeight请求参数结构体
 * @class
 */
class ModifyTargetGroupInstancesWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID。
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 待修改权重的服务器数组。
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

    }
}

/**
 * ManualRewrite返回参数结构体
 * @class
 */
class ManualRewriteResponse extends  AbstractModel {
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
 * ModifyBlockIPList请求参数结构体
 * @class
 */
class ModifyBlockIPListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 操作类型，可取：
<li> add_customized_field（首次设置header，开启黑名单功能）</li>
<li> set_customized_field（修改header）</li>
<li> del_customized_field（删除header）</li>
<li> add_blocked（添加黑名单）</li>
<li> del_blocked（删除黑名单）</li>
<li> flush_blocked（清空黑名单）</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 客户端真实IP存放的header字段名
         * @type {string || null}
         */
        this.ClientIPField = null;

        /**
         * 封禁IP列表，单次操作数组最大长度支持200000
         * @type {Array.<string> || null}
         */
        this.BlockIPList = null;

        /**
         * 过期时间，单位秒，默认值3600
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 添加IP的策略，可取：fifo（如果黑名单容量已满，新加入黑名单的IP采用先进先出策略）
         * @type {string || null}
         */
        this.AddStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ClientIPField = 'ClientIPField' in params ? params.ClientIPField : null;
        this.BlockIPList = 'BlockIPList' in params ? params.BlockIPList : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.AddStrategy = 'AddStrategy' in params ? params.AddStrategy : null;

    }
}

/**
 * DescribeClusterResources返回参数结构体
 * @class
 */
class DescribeClusterResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群中资源列表。
         * @type {Array.<ClusterResource> || null}
         */
        this.ClusterResourceSet = null;

        /**
         * 集群中资源总数。
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

        if (params.ClusterResourceSet) {
            this.ClusterResourceSet = new Array();
            for (let z in params.ClusterResourceSet) {
                let obj = new ClusterResource();
                obj.deserialize(params.ClusterResourceSet[z]);
                this.ClusterResourceSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBlockIPList返回参数结构体
 * @class
 */
class ModifyBlockIPListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的ID
         * @type {string || null}
         */
        this.JodId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JodId = 'JodId' in params ? params.JodId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeClusterResources请求参数结构体
 * @class
 */
class DescribeClusterResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回集群中资源列表数目，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回集群中资源列表起始偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询集群中资源列表条件，详细的过滤条件如下：
<li> cluster-id - String - 是否必填：否 - （过滤条件）按照 集群 的唯一ID过滤，如 ："tgw-12345678","stgw-12345678","vpcgw-12345678"。</li>
<li> vip - String - 是否必填：否 - （过滤条件）按照vip过滤。</li>
<li> loadblancer-id - String - 是否必填：否 - （过滤条件）按照负载均衡唯一ID过滤。</li>
<li> idle - String 是否必填：否 - （过滤条件）按照是否闲置过滤，如"True","False"。</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * ModifyDomainAttributes请求参数结构体
 * @class
 */
class ModifyDomainAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 域名（必须是已经创建的转发规则下的域名），如果是多域名，可以指定多域名列表中的任意一个。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 要修改的新域名。NewDomain和NewDomains只能传一个。
         * @type {string || null}
         */
        this.NewDomain = null;

        /**
         * 域名相关的证书信息，注意，仅对启用SNI的监听器适用，不可和MultiCertInfo 同时传入。
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

        /**
         * 是否开启Http2，注意，只有HTTPS域名才能开启Http2。
         * @type {boolean || null}
         */
        this.Http2 = null;

        /**
         * 是否设为默认域名，注意，一个监听器下只能设置一个默认域名。
         * @type {boolean || null}
         */
        this.DefaultServer = null;

        /**
         * 监听器下必须配置一个默认域名，若要关闭原默认域名，必须同时指定另一个域名作为新的默认域名，如果新的默认域名是多域名，可以指定多域名列表中的任意一个。
         * @type {string || null}
         */
        this.NewDefaultServerDomain = null;

        /**
         * 要修改的新域名列表。NewDomain和NewDomains只能传一个。
         * @type {Array.<string> || null}
         */
        this.NewDomains = null;

        /**
         * 域名相关的证书信息，注意，仅对启用SNI的监听器适用；支持同时传入多本算法类型不同的服务器证书，不可和MultiCertInfo 同时传入。
         * @type {MultiCertInfo || null}
         */
        this.MultiCertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.NewDomain = 'NewDomain' in params ? params.NewDomain : null;

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.DefaultServer = 'DefaultServer' in params ? params.DefaultServer : null;
        this.NewDefaultServerDomain = 'NewDefaultServerDomain' in params ? params.NewDefaultServerDomain : null;
        this.NewDomains = 'NewDomains' in params ? params.NewDomains : null;

        if (params.MultiCertInfo) {
            let obj = new MultiCertInfo();
            obj.deserialize(params.MultiCertInfo)
            this.MultiCertInfo = obj;
        }

    }
}

/**
 * DescribeClassicalLBHealthStatus请求参数结构体
 * @class
 */
class DescribeClassicalLBHealthStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

    }
}

/**
 * DescribeListeners请求参数结构体
 * @class
 */
class DescribeListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 要查询的负载均衡监听器 ID 数组，最大为100个。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * 要查询的监听器协议类型，取值 TCP | UDP | HTTP | HTTPS | TCP_SSL。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 要查询的监听器的端口。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * CreateClsLogSet返回参数结构体
 * @class
 */
class CreateClsLogSetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集的 ID。
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCrossTargets请求参数结构体
 * @class
 */
class DescribeCrossTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回后端服务列表数目，默认20，最大值100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回后端服务列表起始偏移量，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询跨域2.0版本云联网后端子机和网卡服务列表条件，详细的过滤条件如下：
<li> vpc-id - String - 是否必填：否 - （过滤条件）按照 本地私有网络ID，即负载均衡的VpcId 过滤，如："vpc-12345678"。</li>
<li> ip - String - 是否必填：否 - （过滤条件）按照 后端服务ip 过滤，如："192.168.0.1"。</li>
<li> listener-id - String - 是否必填：否 - （过滤条件）按照 监听器ID 过滤，如："lbl-12345678"。</li>
<li> location-id - String - 是否必填：否 - （过滤条件）按照 七层监听器规则ID 过滤，如："loc-12345678"。</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * lb实例包年包月相关配置属性
 * @class
 */
class LBChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 续费类型：AUTO_RENEW 自动续费，  MANUAL_RENEW 手动续费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 购买时长，单位：月
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
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * 传统型负载均衡监听器信息
 * @class
 */
class ClassicalListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 负载均衡监听器端口
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * 监听器后端转发端口
         * @type {number || null}
         */
        this.InstancePort = null;

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器协议类型
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 会话保持时间
         * @type {number || null}
         */
        this.SessionExpire = null;

        /**
         * 是否开启了健康检查：1（开启）、0（关闭）
         * @type {number || null}
         */
        this.HealthSwitch = null;

        /**
         * 响应超时时间
         * @type {number || null}
         */
        this.TimeOut = null;

        /**
         * 检查间隔
         * @type {number || null}
         */
        this.IntervalTime = null;

        /**
         * 健康阈值
         * @type {number || null}
         */
        this.HealthNum = null;

        /**
         * 不健康阈值
         * @type {number || null}
         */
        this.UnhealthNum = null;

        /**
         * 传统型公网负载均衡的 HTTP、HTTPS 监听器的请求均衡方法。wrr 表示按权重轮询，ip_hash 表示根据访问的源 IP 进行一致性哈希方式来分发
         * @type {string || null}
         */
        this.HttpHash = null;

        /**
         * 传统型公网负载均衡的 HTTP、HTTPS 监听器的健康检查返回码。具体可参考创建监听器中对该字段的解释
         * @type {number || null}
         */
        this.HttpCode = null;

        /**
         * 传统型公网负载均衡的 HTTP、HTTPS 监听器的健康检查路径
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 传统型公网负载均衡的 HTTPS 监听器的认证方式
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * 传统型公网负载均衡的 HTTPS 监听器的服务端证书 ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 传统型公网负载均衡的 HTTPS 监听器的客户端证书 ID
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * 监听器的状态，0 表示创建中，1 表示运行中
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.InstancePort = 'InstancePort' in params ? params.InstancePort : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SessionExpire = 'SessionExpire' in params ? params.SessionExpire : null;
        this.HealthSwitch = 'HealthSwitch' in params ? params.HealthSwitch : null;
        this.TimeOut = 'TimeOut' in params ? params.TimeOut : null;
        this.IntervalTime = 'IntervalTime' in params ? params.IntervalTime : null;
        this.HealthNum = 'HealthNum' in params ? params.HealthNum : null;
        this.UnhealthNum = 'UnhealthNum' in params ? params.UnhealthNum : null;
        this.HttpHash = 'HttpHash' in params ? params.HttpHash : null;
        this.HttpCode = 'HttpCode' in params ? params.HttpCode : null;
        this.HttpCheckPath = 'HttpCheckPath' in params ? params.HttpCheckPath : null;
        this.SSLMode = 'SSLMode' in params ? params.SSLMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DeleteLoadBalancer请求参数结构体
 * @class
 */
class DeleteLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的负载均衡实例 ID数组，数组大小最大支持20。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

    }
}

/**
 * 证书信息
 * @class
 */
class CertificateInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证类型，UNIDIRECTIONAL：单向认证，MUTUAL：双向认证
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * 服务端证书的 ID，如果不填写此项则必须上传证书，包括 CertContent，CertKey，CertName。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 客户端证书的 ID，当监听器采用双向认证，即 SSLMode=MUTUAL 时，如果不填写此项则必须上传客户端证书，包括 CertCaContent，CertCaName。
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * 上传服务端证书的名称，如果没有 CertId，则此项必传。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 上传服务端证书的 key，如果没有 CertId，则此项必传。
         * @type {string || null}
         */
        this.CertKey = null;

        /**
         * 上传服务端证书的内容，如果没有 CertId，则此项必传。
         * @type {string || null}
         */
        this.CertContent = null;

        /**
         * 上传客户端 CA 证书的名称，如果 SSLMode=mutual，如果没有 CertCaId，则此项必传。
         * @type {string || null}
         */
        this.CertCaName = null;

        /**
         * 上传客户端证书的内容，如果 SSLMode=mutual，如果没有 CertCaId，则此项必传。
         * @type {string || null}
         */
        this.CertCaContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SSLMode = 'SSLMode' in params ? params.SSLMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.CertName = 'CertName' in params ? params.CertName : null;
        this.CertKey = 'CertKey' in params ? params.CertKey : null;
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertCaName = 'CertCaName' in params ? params.CertCaName : null;
        this.CertCaContent = 'CertCaContent' in params ? params.CertCaContent : null;

    }
}

/**
 * 资源可用性
 * @class
 */
class ResourceAvailability extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商内具体资源信息，如"CMCC", "CUCC", "CTCC", "BGP"。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 资源可用性，"Available"：可用，"Unavailable"：不可用
         * @type {string || null}
         */
        this.Availability = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Availability = 'Availability' in params ? params.Availability : null;

    }
}

/**
 * DescribeCustomizedConfigAssociateList返回参数结构体
 * @class
 */
class DescribeCustomizedConfigAssociateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定关系列表
         * @type {Array.<BindDetailItem> || null}
         */
        this.BindList = null;

        /**
         * 绑定关系总数目
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

        if (params.BindList) {
            this.BindList = new Array();
            for (let z in params.BindList) {
                let obj = new BindDetailItem();
                obj.deserialize(params.BindList[z]);
                this.BindList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetCustomizedConfigForLoadBalancer请求参数结构体
 * @class
 */
class SetCustomizedConfigForLoadBalancerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作类型：'ADD', 'DELETE', 'UPDATE', 'BIND', 'UNBIND'
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * 除了创建个性化配置外，必传此字段，如：pz-1234abcd
         * @type {string || null}
         */
        this.UconfigId = null;

        /**
         * 创建个性化配置或修改个性化配置的内容时，必传此字段
         * @type {string || null}
         */
        this.ConfigContent = null;

        /**
         * 创建个性化配置或修改个性化配置的名字时，必传此字段
         * @type {string || null}
         */
        this.ConfigName = null;

        /**
         * 绑定解绑时，必传此字段
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.UconfigId = 'UconfigId' in params ? params.UconfigId : null;
        this.ConfigContent = 'ConfigContent' in params ? params.ConfigContent : null;
        this.ConfigName = 'ConfigName' in params ? params.ConfigName : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

    }
}

/**
 * CreateListener返回参数结构体
 * @class
 */
class CreateListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的监听器的唯一标识数组。
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
 * CreateTargetGroup返回参数结构体
 * @class
 */
class CreateTargetGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建目标组后生成的id
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MigrateClassicalLoadBalancers返回参数结构体
 * @class
 */
class MigrateClassicalLoadBalancersResponse extends  AbstractModel {
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
 * CreateLoadBalancerSnatIps返回参数结构体
 * @class
 */
class CreateLoadBalancerSnatIpsResponse extends  AbstractModel {
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
 * 负载均衡信息
 * @class
 */
class ClassicalLoadBalancerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 负载均衡实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

    }
}

/**
 * DescribeListeners返回参数结构体
 * @class
 */
class DescribeListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器列表。
         * @type {Array.<Listener> || null}
         */
        this.Listeners = null;

        /**
         * 总的监听器个数（根据端口、协议、监听器ID过滤后）。
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new Listener();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * HTTP/HTTPS监听器的转发规则（输出）
 * @class
 */
class RuleOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则的 ID
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 转发规则的域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发规则的路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 会话保持时间
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 健康检查信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 证书信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CertificateOutput || null}
         */
        this.Certificate = null;

        /**
         * 规则的请求转发方式
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 转发规则所属的监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发规则的重定向目标信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RewriteTarget || null}
         */
        this.RewriteTarget = null;

        /**
         * 是否开启gzip
         * @type {boolean || null}
         */
        this.HttpGzip = null;

        /**
         * 转发规则是否为自动创建
         * @type {boolean || null}
         */
        this.BeAutoCreated = null;

        /**
         * 是否作为默认域名
         * @type {boolean || null}
         */
        this.DefaultServer = null;

        /**
         * 是否开启Http2
         * @type {boolean || null}
         */
        this.Http2 = null;

        /**
         * 负载均衡与后端服务之间的转发协议
         * @type {string || null}
         */
        this.ForwardType = null;

        /**
         * 转发规则的创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 后端服务器类型
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 绑定的目标组基本信息；当规则绑定目标组时，会返回该字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BasicTargetGroupInfo || null}
         */
        this.TargetGroup = null;

        /**
         * WAF实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WafDomainId = null;

        /**
         * TRPC被调服务器路由，ForwardType为TRPC时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrpcCallee = null;

        /**
         * TRPC调用服务接口，ForwardType为TRPC时有效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TrpcFunc = null;

        /**
         * QUIC状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.QuicStatus = null;

        /**
         * 转发规则的域名列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 绑定的目标组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BasicTargetGroupInfo> || null}
         */
        this.TargetGroupList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }

        if (params.Certificate) {
            let obj = new CertificateOutput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.RewriteTarget) {
            let obj = new RewriteTarget();
            obj.deserialize(params.RewriteTarget)
            this.RewriteTarget = obj;
        }
        this.HttpGzip = 'HttpGzip' in params ? params.HttpGzip : null;
        this.BeAutoCreated = 'BeAutoCreated' in params ? params.BeAutoCreated : null;
        this.DefaultServer = 'DefaultServer' in params ? params.DefaultServer : null;
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.ForwardType = 'ForwardType' in params ? params.ForwardType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;

        if (params.TargetGroup) {
            let obj = new BasicTargetGroupInfo();
            obj.deserialize(params.TargetGroup)
            this.TargetGroup = obj;
        }
        this.WafDomainId = 'WafDomainId' in params ? params.WafDomainId : null;
        this.TrpcCallee = 'TrpcCallee' in params ? params.TrpcCallee : null;
        this.TrpcFunc = 'TrpcFunc' in params ? params.TrpcFunc : null;
        this.QuicStatus = 'QuicStatus' in params ? params.QuicStatus : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.TargetGroupList) {
            this.TargetGroupList = new Array();
            for (let z in params.TargetGroupList) {
                let obj = new BasicTargetGroupInfo();
                obj.deserialize(params.TargetGroupList[z]);
                this.TargetGroupList.push(obj);
            }
        }

    }
}

/**
 * RegisterFunctionTargets返回参数结构体
 * @class
 */
class RegisterFunctionTargetsResponse extends  AbstractModel {
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
 * CreateTopic返回参数结构体
 * @class
 */
class CreateTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志主题的 ID。
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
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
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 监听器 ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 新建转发规则的信息。
         * @type {Array.<RuleInput> || null}
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleInput();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * ModifyTargetGroupInstancesPort返回参数结构体
 * @class
 */
class ModifyTargetGroupInstancesPortResponse extends  AbstractModel {
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
 * 查询类型
 * @class
 */
class LbRsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc的字符串id，只支持字符串id。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 需要查询后端的内网ip，可以是cvm和弹性网卡。
         * @type {string || null}
         */
        this.PrivateIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;

    }
}

/**
 * HTTP/HTTPS监听器下的转发规则绑定的后端服务信息
 * @class
 */
class RuleTargets extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则的 ID
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 转发规则的域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发规则的路径。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 后端服务的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Backend> || null}
         */
        this.Targets = null;

        /**
         * 后端云函数的信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FunctionTarget> || null}
         */
        this.FunctionTargets = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Backend();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

        if (params.FunctionTargets) {
            this.FunctionTargets = new Array();
            for (let z in params.FunctionTargets) {
                let obj = new FunctionTarget();
                obj.deserialize(params.FunctionTargets[z]);
                this.FunctionTargets.push(obj);
            }
        }

    }
}

/**
 * BatchDeregisterTargets请求参数结构体
 * @class
 */
class BatchDeregisterTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 解绑目标。
         * @type {Array.<BatchTarget> || null}
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new BatchTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * DeregisterTargetGroupInstances请求参数结构体
 * @class
 */
class DeregisterTargetGroupInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID。
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 待解绑的服务器信息。
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

    }
}

/**
 * ManualRewrite请求参数结构体
 * @class
 */
class ManualRewriteRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 源监听器 ID。
         * @type {string || null}
         */
        this.SourceListenerId = null;

        /**
         * 目标监听器 ID。
         * @type {string || null}
         */
        this.TargetListenerId = null;

        /**
         * 转发规则之间的重定向关系。
         * @type {Array.<RewriteLocationMap> || null}
         */
        this.RewriteInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SourceListenerId = 'SourceListenerId' in params ? params.SourceListenerId : null;
        this.TargetListenerId = 'TargetListenerId' in params ? params.TargetListenerId : null;

        if (params.RewriteInfos) {
            this.RewriteInfos = new Array();
            for (let z in params.RewriteInfos) {
                let obj = new RewriteLocationMap();
                obj.deserialize(params.RewriteInfos[z]);
                this.RewriteInfos.push(obj);
            }
        }

    }
}

/**
 * ModifyListener返回参数结构体
 * @class
 */
class ModifyListenerResponse extends  AbstractModel {
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
 * DescribeTargetHealth返回参数结构体
 * @class
 */
class DescribeTargetHealthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LoadBalancerHealth> || null}
         */
        this.LoadBalancers = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadBalancers) {
            this.LoadBalancers = new Array();
            for (let z in params.LoadBalancers) {
                let obj = new LoadBalancerHealth();
                obj.deserialize(params.LoadBalancers[z]);
                this.LoadBalancers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 证书信息
 * @class
 */
class CertInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 证书 ID，如果不填写此项则必须上传证书内容，包括CertName, CertContent，若为服务端证书必须包含CertKey。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 上传证书的名称，如果没有 CertId，则此项必传。
         * @type {string || null}
         */
        this.CertName = null;

        /**
         * 上传证书的公钥；如果没有 CertId，则此项必传。
         * @type {string || null}
         */
        this.CertContent = null;

        /**
         * 上传服务端证书的私钥；如果没有 CertId，则此项必传。
         * @type {string || null}
         */
        this.CertKey = null;

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
        this.CertContent = 'CertContent' in params ? params.CertContent : null;
        this.CertKey = 'CertKey' in params ? params.CertKey : null;

    }
}

/**
 * CreateTargetGroup请求参数结构体
 * @class
 */
class CreateTargetGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组名称，限定50个字符
         * @type {string || null}
         */
        this.TargetGroupName = null;

        /**
         * 目标组的vpcid属性，不填则使用默认vpc
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 目标组的默认端口， 后续添加服务器时可使用该默认端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 目标组绑定的后端服务器
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

    }
}

/**
 * 独占集群信息
 * @class
 */
class ClusterItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群唯一ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群所在可用区，如ap-guangzhou-1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * 绑定关系，包含监听器名字、协议、url、vport。
 * @class
 */
class BindDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置绑定的CLB ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 配置绑定的监听器ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 配置绑定的域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 配置绑定的规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 监听器名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * location的url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 配置ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UconfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.UconfigId = 'UconfigId' in params ? params.UconfigId : null;

    }
}

/**
 * CreateListener请求参数结构体
 * @class
 */
class CreateListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 要将监听器创建到哪些端口，每个端口对应一个新的监听器。
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * 监听器协议： TCP | UDP | HTTP | HTTPS | TCP_SSL | QUIC。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 要创建的监听器名称列表，名称与Ports数组按序一一对应，如不需立即命名，则无需提供此参数。
         * @type {Array.<string> || null}
         */
        this.ListenerNames = null;

        /**
         * 健康检查相关参数，此参数仅适用于TCP/UDP/TCP_SSL监听器。
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 证书相关信息，此参数仅适用于TCP_SSL监听器和未开启SNI特性的HTTPS监听器。此参数和MultiCertInfo不能同时传入。
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

        /**
         * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 监听器转发的方式。可选值：WRR、LEAST_CONN
分别表示按权重轮询、最小连接数， 默认为 WRR。此参数仅适用于TCP/UDP/TCP_SSL监听器。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 是否开启SNI特性，此参数仅适用于HTTPS监听器。
         * @type {number || null}
         */
        this.SniSwitch = null;

        /**
         * 后端目标类型，NODE表示绑定普通节点，TARGETGROUP表示绑定目标组。
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * 会话保持类型。不传或传NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。QUIC_CID只支持UDP协议。
         * @type {string || null}
         */
        this.SessionType = null;

        /**
         * 是否开启长连接，此参数仅适用于HTTP/HTTPS监听器，0:关闭；1:开启， 默认关闭。
         * @type {number || null}
         */
        this.KeepaliveEnable = null;

        /**
         * 创建端口段监听器时必须传入此参数，用以标识结束端口。同时，入参Ports只允许传入一个成员，用以标识开始端口。【如果您需要体验端口段功能，请通过 [工单申请](https://console.cloud.tencent.com/workorder/category)】。
         * @type {number || null}
         */
        this.EndPort = null;

        /**
         * 解绑后端目标时，是否发RST给客户端，此参数仅适用于TCP监听器。
         * @type {boolean || null}
         */
        this.DeregisterTargetRst = null;

        /**
         * 证书信息，支持同时传入不同算法类型的多本服务端证书；此参数仅适用于未开启SNI特性的HTTPS监听器。此参数和Certificate不能同时传入。
         * @type {MultiCertInfo || null}
         */
        this.MultiCertInfo = null;

        /**
         * 监听器最大连接数，只有TCP/UDP/TCP_SSL/QUIC监听器支持，不传或者传-1表示监听器维度不限速。
         * @type {number || null}
         */
        this.MaxConn = null;

        /**
         * 监听器最大新增连接数，只有TCP/UDP/TCP_SSL/QUIC监听器支持，不传或者传-1表示监听器维度不限速。
         * @type {number || null}
         */
        this.MaxCps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.Ports = 'Ports' in params ? params.Ports : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerNames = 'ListenerNames' in params ? params.ListenerNames : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.SessionType = 'SessionType' in params ? params.SessionType : null;
        this.KeepaliveEnable = 'KeepaliveEnable' in params ? params.KeepaliveEnable : null;
        this.EndPort = 'EndPort' in params ? params.EndPort : null;
        this.DeregisterTargetRst = 'DeregisterTargetRst' in params ? params.DeregisterTargetRst : null;

        if (params.MultiCertInfo) {
            let obj = new MultiCertInfo();
            obj.deserialize(params.MultiCertInfo)
            this.MultiCertInfo = obj;
        }
        this.MaxConn = 'MaxConn' in params ? params.MaxConn : null;
        this.MaxCps = 'MaxCps' in params ? params.MaxCps : null;

    }
}

/**
 * CreateClsLogSet请求参数结构体
 * @class
 */
class CreateClsLogSetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集的名字，不能和cls其他日志集重名。不填默认为clb_logset。
         * @type {string || null}
         */
        this.LogsetName = null;

        /**
         * 日志集的保存周期，单位：天。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 日志集类型，ACCESS：访问日志，HEALTH：健康检查日志，默认ACCESS。
         * @type {string || null}
         */
        this.LogsetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetName = 'LogsetName' in params ? params.LogsetName : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.LogsetType = 'LogsetType' in params ? params.LogsetType : null;

    }
}

/**
 * DisassociateTargetGroups请求参数结构体
 * @class
 */
class DisassociateTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待解绑的规则关系数组。
         * @type {Array.<TargetGroupAssociation> || null}
         */
        this.Associations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Associations) {
            this.Associations = new Array();
            for (let z in params.Associations) {
                let obj = new TargetGroupAssociation();
                obj.deserialize(params.Associations[z]);
                this.Associations.push(obj);
            }
        }

    }
}

/**
 * 过滤器条件
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤器的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤器的值数组
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
 * 集群内资源类型
 * @class
 */
class ClusterResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群唯一ID，如tgw-12345678。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * ip地址。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 负载均衡唯一ID，如lb-12345678。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 资源是否闲置。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Idle = null;

        /**
         * 集群名称。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群的Isp属性，如："BGP","CMCC","CUCC","CTCC","INTERNAL"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 集群所在的可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClustersZone || null}
         */
        this.ClustersZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.Idle = 'Idle' in params ? params.Idle : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.Isp = 'Isp' in params ? params.Isp : null;

        if (params.ClustersZone) {
            let obj = new ClustersZone();
            obj.deserialize(params.ClustersZone)
            this.ClustersZone = obj;
        }

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
 * RegisterTargets返回参数结构体
 * @class
 */
class RegisterTargetsResponse extends  AbstractModel {
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
 * DeregisterTargetsFromClassicalLB返回参数结构体
 * @class
 */
class DeregisterTargetsFromClassicalLBResponse extends  AbstractModel {
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
 * 集群所在的可用区。
 * @class
 */
class ClustersZone extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群所在的主可用区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.MasterZone = null;

        /**
         * 集群所在的备可用区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SlaveZone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MasterZone = 'MasterZone' in params ? params.MasterZone : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;

    }
}

/**
 * SetCustomizedConfigForLoadBalancer返回参数结构体
 * @class
 */
class SetCustomizedConfigForLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 个性化配置ID，如：pz-1234abcd
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLoadBalancer返回参数结构体
 * @class
 */
class DeleteLoadBalancerResponse extends  AbstractModel {
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
 * AutoRewrite返回参数结构体
 * @class
 */
class AutoRewriteResponse extends  AbstractModel {
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
 * DeregisterTargets返回参数结构体
 * @class
 */
class DeregisterTargetsResponse extends  AbstractModel {
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
 * DescribeLoadBalancerOverview请求参数结构体
 * @class
 */
class DescribeLoadBalancerOverviewRequest extends  AbstractModel {
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
 * 重定向目标的信息
 * @class
 */
class RewriteTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重定向目标的监听器ID
注意：此字段可能返回 null，表示无重定向。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetListenerId = null;

        /**
         * 重定向目标的转发规则ID
注意：此字段可能返回 null，表示无重定向。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetLocationId = null;

        /**
         * 重定向状态码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RewriteCode = null;

        /**
         * 重定向是否携带匹配的url
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.TakeUrl = null;

        /**
         * 重定向类型，Manual: 手动重定向，Auto:  自动重定向
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RewriteType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetListenerId = 'TargetListenerId' in params ? params.TargetListenerId : null;
        this.TargetLocationId = 'TargetLocationId' in params ? params.TargetLocationId : null;
        this.RewriteCode = 'RewriteCode' in params ? params.RewriteCode : null;
        this.TakeUrl = 'TakeUrl' in params ? params.TakeUrl : null;
        this.RewriteType = 'RewriteType' in params ? params.RewriteType : null;

    }
}

/**
 * 集群的详细信息，如集群ID，名称，类型，可用区，标签等
 * @class
 */
class Cluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群唯一ID
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群类型，如TGW，STGW，VPCGW
         * @type {string || null}
         */
        this.ClusterType = null;

        /**
         * 集群标签，只有STGW集群有标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * 集群所在可用区，如ap-guangzhou-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 集群网络类型，如Public，Private
         * @type {string || null}
         */
        this.Network = null;

        /**
         * 最大连接数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxConn = null;

        /**
         * 最大入带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxInFlow = null;

        /**
         * 最大入包量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxInPkg = null;

        /**
         * 最大出带宽
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxOutFlow = null;

        /**
         * 最大出包量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxOutPkg = null;

        /**
         * 最大新建连接数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MaxNewConn = null;

        /**
         * http最大新建连接数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HTTPMaxNewConn = null;

        /**
         * https最大新建连接数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HTTPSMaxNewConn = null;

        /**
         * http QPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HTTPQps = null;

        /**
         * https QPS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HTTPSQps = null;

        /**
         * 集群内资源总数目
         * @type {number || null}
         */
        this.ResourceCount = null;

        /**
         * 集群内空闲资源数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IdleResourceCount = null;

        /**
         * 集群内转发机的数目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LoadBalanceDirectorCount = null;

        /**
         * 集群的Isp属性，如："BGP","CMCC","CUCC","CTCC","INTERNAL"。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 集群所在的可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClustersZone || null}
         */
        this.ClustersZone = null;

        /**
         * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClustersVersion = null;

        /**
         * 集群容灾类型，如SINGLE-ZONE，DISASTER-RECOVERY，MUTUAL-DISASTER-RECOVERY
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DisasterRecoveryType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ClusterType = 'ClusterType' in params ? params.ClusterType : null;
        this.ClusterTag = 'ClusterTag' in params ? params.ClusterTag : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Network = 'Network' in params ? params.Network : null;
        this.MaxConn = 'MaxConn' in params ? params.MaxConn : null;
        this.MaxInFlow = 'MaxInFlow' in params ? params.MaxInFlow : null;
        this.MaxInPkg = 'MaxInPkg' in params ? params.MaxInPkg : null;
        this.MaxOutFlow = 'MaxOutFlow' in params ? params.MaxOutFlow : null;
        this.MaxOutPkg = 'MaxOutPkg' in params ? params.MaxOutPkg : null;
        this.MaxNewConn = 'MaxNewConn' in params ? params.MaxNewConn : null;
        this.HTTPMaxNewConn = 'HTTPMaxNewConn' in params ? params.HTTPMaxNewConn : null;
        this.HTTPSMaxNewConn = 'HTTPSMaxNewConn' in params ? params.HTTPSMaxNewConn : null;
        this.HTTPQps = 'HTTPQps' in params ? params.HTTPQps : null;
        this.HTTPSQps = 'HTTPSQps' in params ? params.HTTPSQps : null;
        this.ResourceCount = 'ResourceCount' in params ? params.ResourceCount : null;
        this.IdleResourceCount = 'IdleResourceCount' in params ? params.IdleResourceCount : null;
        this.LoadBalanceDirectorCount = 'LoadBalanceDirectorCount' in params ? params.LoadBalanceDirectorCount : null;
        this.Isp = 'Isp' in params ? params.Isp : null;

        if (params.ClustersZone) {
            let obj = new ClustersZone();
            obj.deserialize(params.ClustersZone)
            this.ClustersZone = obj;
        }
        this.ClustersVersion = 'ClustersVersion' in params ? params.ClustersVersion : null;
        this.DisasterRecoveryType = 'DisasterRecoveryType' in params ? params.DisasterRecoveryType : null;

    }
}

/**
 * ModifyTargetWeight请求参数结构体
 * @class
 */
class ModifyTargetWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发规则的ID，当绑定机器到七层转发规则时，必须提供此参数或Domain+Url两者之一。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标规则的域名，提供LocationId参数时本参数不生效。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标规则的URL，提供LocationId参数时本参数不生效。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 要修改权重的后端服务列表。
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 后端服务新的转发权重，取值范围：0~100，默认值10。如果设置了 Targets.Weight 参数，则此参数不生效。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * DescribeLoadBalancersDetail返回参数结构体
 * @class
 */
class DescribeLoadBalancersDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡详情列表总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 负载均衡详情列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LoadBalancerDetail> || null}
         */
        this.LoadBalancerDetailSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.LoadBalancerDetailSet) {
            this.LoadBalancerDetailSet = new Array();
            for (let z in params.LoadBalancerDetailSet) {
                let obj = new LoadBalancerDetail();
                obj.deserialize(params.LoadBalancerDetailSet[z]);
                this.LoadBalancerDetailSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 负载均衡详细信息
 * @class
 */
class LoadBalancerDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡实例的名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡实例的网络类型：
Public：公网属性， Private：内网属性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 负载均衡实例的状态，包括
0：创建中，1：正常运行。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 负载均衡实例的 VIP 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 负载均衡实例 VIP 的IPv6地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddressIPv6 = null;

        /**
         * 负载均衡实例IP版本，IPv4 | IPv6。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * 负载均衡实例IPv6地址类型，IPv6Nat64 | IPv6FullChain。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IPv6Mode = null;

        /**
         * 负载均衡实例所在可用区。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 负载均衡实例IP地址所属的ISP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddressIsp = null;

        /**
         * 负载均衡实例所属私有网络的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 负载均衡实例所属的项目 ID， 0 表示默认项目。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 负载均衡实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 负载均衡实例的计费类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 负载均衡实例的网络属性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InternetAccessible || null}
         */
        this.NetworkAttributes = null;

        /**
         * 负载均衡实例的预付费相关属性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LBChargePrepaid || null}
         */
        this.PrepaidAttributes = null;

        /**
         * 暂做保留，一般用户无需关注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExtraInfo || null}
         */
        this.ExtraInfo = null;

        /**
         * 负载均衡维度的个性化配置ID，多个配置用逗号隔开。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 负载均衡实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 负载均衡监听器 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器协议。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器端口。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 转发规则的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 转发规则的域名。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发规则的路径。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 后端目标ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 后端目标的IP地址。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetAddress = null;

        /**
         * 后端目标监听端口。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetPort = null;

        /**
         * 后端目标转发权重。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TargetWeight = null;

        /**
         * 0：表示未被隔离，1：表示被隔离。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Isolation = null;

        /**
         * 负载均衡绑定的安全组列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecurityGroup = null;

        /**
         * 负载均衡安全组上移特性是否开启标识。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * 后端目标健康状态。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetHealth = null;

        /**
         * 转发规则的域名列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domains = null;

        /**
         * 多可用区负载均衡实例所选备区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SlaveZone = null;

        /**
         * 内网负载均衡实例所在可用区，由白名单CLB_Internal_Zone控制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 是否开启SNI特性（本参数仅对于HTTPS监听器有意义）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SniSwitch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.AddressIPv6 = 'AddressIPv6' in params ? params.AddressIPv6 : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.IPv6Mode = 'IPv6Mode' in params ? params.IPv6Mode : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.AddressIsp = 'AddressIsp' in params ? params.AddressIsp : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

        if (params.NetworkAttributes) {
            let obj = new InternetAccessible();
            obj.deserialize(params.NetworkAttributes)
            this.NetworkAttributes = obj;
        }

        if (params.PrepaidAttributes) {
            let obj = new LBChargePrepaid();
            obj.deserialize(params.PrepaidAttributes)
            this.PrepaidAttributes = obj;
        }

        if (params.ExtraInfo) {
            let obj = new ExtraInfo();
            obj.deserialize(params.ExtraInfo)
            this.ExtraInfo = obj;
        }
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.TargetAddress = 'TargetAddress' in params ? params.TargetAddress : null;
        this.TargetPort = 'TargetPort' in params ? params.TargetPort : null;
        this.TargetWeight = 'TargetWeight' in params ? params.TargetWeight : null;
        this.Isolation = 'Isolation' in params ? params.Isolation : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;
        this.TargetHealth = 'TargetHealth' in params ? params.TargetHealth : null;
        this.Domains = 'Domains' in params ? params.Domains : null;
        this.SlaveZone = 'SlaveZone' in params ? params.SlaveZone : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.SniSwitch = 'SniSwitch' in params ? params.SniSwitch : null;

    }
}

/**
 * 反查结果数据类型。
 * @class
 */
class LbRsTargets extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网ip类型。“cvm”或“eni”
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 后端实例的内网ip。
         * @type {string || null}
         */
        this.PrivateIp = null;

        /**
         * 绑定后端实例的端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * rs的vpcId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * rs的权重
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Type = 'Type' in params ? params.Type : null;
        this.PrivateIp = 'PrivateIp' in params ? params.PrivateIp : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * BatchModifyTargetWeight请求参数结构体
 * @class
 */
class BatchModifyTargetWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 要批量修改权重的列表。
         * @type {Array.<RsWeightRule> || null}
         */
        this.ModifyList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.ModifyList) {
            this.ModifyList = new Array();
            for (let z in params.ModifyList) {
                let obj = new RsWeightRule();
                obj.deserialize(params.ModifyList[z]);
                this.ModifyList.push(obj);
            }
        }

    }
}

/**
 * DeleteRewrite返回参数结构体
 * @class
 */
class DeleteRewriteResponse extends  AbstractModel {
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
 * 批量绑定类型
 * @class
 */
class BatchTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器 ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 绑定端口。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 子机 ID。表示绑定主网卡主 IP。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 绑定 IP 时需要传入此参数，支持弹性网卡的 IP 和其他内网 IP，如果是弹性网卡则必须先绑定至CVM，然后才能绑定到负载均衡实例。
注意：参数 InstanceId、EniIp 只能传入一个且必须传入一个。如果绑定双栈IPV6子机，必须传该参数。
         * @type {string || null}
         */
        this.EniIp = null;

        /**
         * 子机权重，范围[0, 100]。绑定时如果不存在，则默认为10。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 七层规则 ID。
         * @type {string || null}
         */
        this.LocationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EniIp = 'EniIp' in params ? params.EniIp : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

    }
}

/**
 * DescribeLoadBalancerListByCertId请求参数结构体
 * @class
 */
class DescribeLoadBalancerListByCertIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务端证书的ID，或客户端证书的ID
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
        this.CertIds = 'CertIds' in params ? params.CertIds : null;

    }
}

/**
 * 负载均衡实例所绑定的后端服务的信息，包括所属地域、所属网络。
 * @class
 */
class TargetRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target所属地域，如 ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Target所属网络，私有网络格式如 vpc-abcd1234，如果是基础网络，则为"0"
         * @type {string || null}
         */
        this.VpcId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DescribeTargetHealth请求参数结构体
 * @class
 */
class DescribeTargetHealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的负载均衡实例ID列表。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;

    }
}

/**
 * ReplaceCertForLoadBalancers请求参数结构体
 * @class
 */
class ReplaceCertForLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要被替换的证书的ID，可以是服务端证书或客户端证书
         * @type {string || null}
         */
        this.OldCertificateId = null;

        /**
         * 新证书的内容等相关信息
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldCertificateId = 'OldCertificateId' in params ? params.OldCertificateId : null;

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }

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
 * CloneLoadBalancer返回参数结构体
 * @class
 */
class CloneLoadBalancerResponse extends  AbstractModel {
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
 * DescribeClsLogSet返回参数结构体
 * @class
 */
class DescribeClsLogSetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志集的 ID。
         * @type {string || null}
         */
        this.LogsetId = null;

        /**
         * 健康检查日志集的 ID。
         * @type {string || null}
         */
        this.HealthLogsetId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogsetId = 'LogsetId' in params ? params.LogsetId : null;
        this.HealthLogsetId = 'HealthLogsetId' in params ? params.HealthLogsetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyTargetGroupAttribute请求参数结构体
 * @class
 */
class ModifyTargetGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组的ID。
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 目标组的新名称。
         * @type {string || null}
         */
        this.TargetGroupName = null;

        /**
         * 目标组的新默认端口。
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
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;
        this.Port = 'Port' in params ? params.Port : null;

    }
}

/**
 * 独占集群
 * @class
 */
class ExclusiveCluster extends  AbstractModel {
    constructor(){
        super();

        /**
         * 4层独占集群列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClusterItem> || null}
         */
        this.L4Clusters = null;

        /**
         * 7层独占集群列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClusterItem> || null}
         */
        this.L7Clusters = null;

        /**
         * vpcgw集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ClusterItem || null}
         */
        this.ClassicalCluster = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.L4Clusters) {
            this.L4Clusters = new Array();
            for (let z in params.L4Clusters) {
                let obj = new ClusterItem();
                obj.deserialize(params.L4Clusters[z]);
                this.L4Clusters.push(obj);
            }
        }

        if (params.L7Clusters) {
            this.L7Clusters = new Array();
            for (let z in params.L7Clusters) {
                let obj = new ClusterItem();
                obj.deserialize(params.L7Clusters[z]);
                this.L7Clusters.push(obj);
            }
        }

        if (params.ClassicalCluster) {
            let obj = new ClusterItem();
            obj.deserialize(params.ClassicalCluster)
            this.ClassicalCluster = obj;
        }

    }
}

/**
 * DeregisterTargets请求参数结构体
 * @class
 */
class DeregisterTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID，格式如 lb-12345678。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 监听器 ID，格式如 lbl-12345678。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要解绑的后端服务列表，数组长度最大支持20。
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 转发规则的ID，格式如 loc-12345678，当从七层转发规则解绑机器时，必须提供此参数或Domain+URL两者之一。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标规则的域名，提供LocationId参数时本参数不生效。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标规则的URL，提供LocationId参数时本参数不生效。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * ModifyLoadBalancerMixIpTarget返回参数结构体
 * @class
 */
class ModifyLoadBalancerMixIpTargetResponse extends  AbstractModel {
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
 * 网络计费模式，最大出带宽
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRAFFIC_POSTPAID_BY_HOUR 按流量按小时后计费 ; BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;
BANDWIDTH_PACKAGE 按带宽包计费;
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 最大出带宽，单位Mbps，范围支持0到2048，仅对公网属性的LB生效，默认值 10
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 带宽包的类型，如SINGLEISP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BandwidthpkgSubType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.BandwidthpkgSubType = 'BandwidthpkgSubType' in params ? params.BandwidthpkgSubType : null;

    }
}

/**
 * CreateLoadBalancerSnatIps请求参数结构体
 * @class
 */
class CreateLoadBalancerSnatIpsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡唯一性ID，例如：lb-12345678。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 添加的SnatIp信息，可指定IP申请，或者指定子网自动申请。单个CLB实例可申请的默认上限为10个。
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * 添加的SnatIp的个数，可与SnatIps一起使用，但若指定IP时，则不能指定创建的SnatIp个数。默认值为1，数量上限与用户配置有关，默认上限为10。
         * @type {number || null}
         */
        this.Number = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.SnatIps) {
            this.SnatIps = new Array();
            for (let z in params.SnatIps) {
                let obj = new SnatIp();
                obj.deserialize(params.SnatIps[z]);
                this.SnatIps.push(obj);
            }
        }
        this.Number = 'Number' in params ? params.Number : null;

    }
}

/**
 * DescribeTargetGroupInstances返回参数结构体
 * @class
 */
class DescribeTargetGroupInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次查询的结果数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 绑定的服务器信息。
         * @type {Array.<TargetGroupBackend> || null}
         */
        this.TargetGroupInstanceSet = null;

        /**
         * 实际统计数量，不受Limit、Offset、CAM的影响。
         * @type {number || null}
         */
        this.RealCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.TargetGroupInstanceSet) {
            this.TargetGroupInstanceSet = new Array();
            for (let z in params.TargetGroupInstanceSet) {
                let obj = new TargetGroupBackend();
                obj.deserialize(params.TargetGroupInstanceSet[z]);
                this.TargetGroupInstanceSet.push(obj);
            }
        }
        this.RealCount = 'RealCount' in params ? params.RealCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeQuota返回参数结构体
 * @class
 */
class DescribeQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额列表
         * @type {Array.<Quota> || null}
         */
        this.QuotaSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.QuotaSet) {
            this.QuotaSet = new Array();
            for (let z in params.QuotaSet) {
                let obj = new Quota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTargetGroups返回参数结构体
 * @class
 */
class DeleteTargetGroupsResponse extends  AbstractModel {
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
 * ModifyTargetGroupInstancesPort请求参数结构体
 * @class
 */
class ModifyTargetGroupInstancesPortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID。
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 待修改端口的服务器数组。
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

    }
}

/**
 * BatchRegisterTargets请求参数结构体
 * @class
 */
class BatchRegisterTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 绑定目标。
         * @type {Array.<BatchTarget> || null}
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new BatchTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

    }
}

/**
 * 监听器上绑定的后端服务的信息
 * @class
 */
class ListenerBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器的协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器的端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 监听器下的规则信息（仅适用于HTTP/HTTPS监听器）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleTargets> || null}
         */
        this.Rules = null;

        /**
         * 监听器上绑定的后端服务列表（仅适用于TCP/UDP/TCP_SSL监听器）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Backend> || null}
         */
        this.Targets = null;

        /**
         * 若支持端口段，则为端口段结束端口；若不支持端口段，则为0
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleTargets();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Backend();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.EndPort = 'EndPort' in params ? params.EndPort : null;

    }
}

/**
 * HTTP/HTTPS转发规则（输入）
 * @class
 */
class RuleInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则的路径。长度限制为：1~200。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 转发规则的域名。长度限制为：1~80。Domain和Domains只需要传一个，单域名规则传Domain，多域名规则传Domains。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 会话保持时间。设置为0表示关闭会话保持，开启会话保持可取值30~3600，单位：秒。
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 健康检查信息。详情请参见：[健康检查](https://cloud.tencent.com/document/product/214/6097)
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 证书信息；此参数和MultiCertInfo不能同时传入。
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

        /**
         * 规则的请求转发方式，可选值：WRR、LEAST_CONN、IP_HASH
分别表示按权重轮询、最小连接数、按IP哈希， 默认为 WRR。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 负载均衡与后端服务之间的转发协议，目前支持 HTTP/HTTPS/TRPC
         * @type {string || null}
         */
        this.ForwardType = null;

        /**
         * 是否将该域名设为默认域名，注意，一个监听器下只能设置一个默认域名。
         * @type {boolean || null}
         */
        this.DefaultServer = null;

        /**
         * 是否开启Http2，注意，只有HTTPS域名才能开启Http2。
         * @type {boolean || null}
         */
        this.Http2 = null;

        /**
         * 后端目标类型，NODE表示绑定普通节点，TARGETGROUP表示绑定目标组
         * @type {string || null}
         */
        this.TargetType = null;

        /**
         * TRPC被调服务器路由，ForwardType为TRPC时必填
         * @type {string || null}
         */
        this.TrpcCallee = null;

        /**
         * TRPC调用服务接口，ForwardType为TRPC时必填
         * @type {string || null}
         */
        this.TrpcFunc = null;

        /**
         * 是否开启QUIC，注意，只有HTTPS域名才能开启QUIC
         * @type {boolean || null}
         */
        this.Quic = null;

        /**
         * 转发规则的域名列表。每个域名的长度限制为：1~80。Domain和Domains只需要传一个，单域名规则传Domain，多域名规则传Domains。
         * @type {Array.<string> || null}
         */
        this.Domains = null;

        /**
         * 证书信息，支持同时传入不同算法类型的多本服务端证书；此参数和Certificate不能同时传入。
         * @type {MultiCertInfo || null}
         */
        this.MultiCertInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }

        if (params.Certificate) {
            let obj = new CertificateInput();
            obj.deserialize(params.Certificate)
            this.Certificate = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.ForwardType = 'ForwardType' in params ? params.ForwardType : null;
        this.DefaultServer = 'DefaultServer' in params ? params.DefaultServer : null;
        this.Http2 = 'Http2' in params ? params.Http2 : null;
        this.TargetType = 'TargetType' in params ? params.TargetType : null;
        this.TrpcCallee = 'TrpcCallee' in params ? params.TrpcCallee : null;
        this.TrpcFunc = 'TrpcFunc' in params ? params.TrpcFunc : null;
        this.Quic = 'Quic' in params ? params.Quic : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

        if (params.MultiCertInfo) {
            let obj = new MultiCertInfo();
            obj.deserialize(params.MultiCertInfo)
            this.MultiCertInfo = obj;
        }

    }
}

/**
 * 负载均衡的标签信息
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的键
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签的值
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
 * SnatIp的信息结构
 * @class
 */
class SnatIp extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络子网的唯一性id，如subnet-12345678
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * IP地址，如192.168.0.1
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
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;

    }
}

/**
 * ModifyLoadBalancerMixIpTarget请求参数结构体
 * @class
 */
class ModifyLoadBalancerMixIpTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID数组。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 开启/关闭IPv6FullChain负载均衡7层监听器支持混绑IPv4/IPv6目标特性。
         * @type {boolean || null}
         */
        this.MixIpTarget = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.MixIpTarget = 'MixIpTarget' in params ? params.MixIpTarget : null;

    }
}

/**
 * DescribeBlockIPTask返回参数结构体
 * @class
 */
class DescribeBlockIPTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1 running，2 fail，6 succ
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
 * DescribeResources请求参数结构体
 * @class
 */
class DescribeResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回可用区资源列表数目，默认20，最大值100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回可用区资源列表起始偏移量，默认0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询可用区资源列表条件，详细的过滤条件如下：
<li> zone - String - 是否必填：否 - （过滤条件）按照 可用区 过滤，如："ap-guangzhou-1"（广州一区）。</li>
<li> isp -- String - 是否必填：否 - （过滤条件）按照 Isp 类型过滤，如："BGP","CMCC","CUCC","CTCC"。</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * DescribeClassicalLBListeners返回参数结构体
 * @class
 */
class DescribeClassicalLBListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClassicalListener> || null}
         */
        this.Listeners = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ClassicalListener();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeExclusiveClusters请求参数结构体
 * @class
 */
class DescribeExclusiveClustersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回集群列表数目，默认值为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回集群列表起始偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询集群列表条件，详细的过滤条件如下：
<li> cluster-type - String - 是否必填：否 - （过滤条件）按照 集群 的类型过滤，包括"TGW","STGW","VPCGW"。</li>
<li> cluster-id - String - 是否必填：否 - （过滤条件）按照 集群 的唯一ID过滤，如 ："tgw-12345678","stgw-12345678","vpcgw-12345678"。</li>
<li> cluster-name - String - 是否必填：否 - （过滤条件）按照 集群 的名称过滤。</li>
<li> cluster-tag - String - 是否必填：否 - （过滤条件）按照 集群 的标签过滤。（只有TGW/STGW集群有集群标签） </li>
<li> vip - String - 是否必填：否 - （过滤条件）按照 集群 内的vip过滤。</li>
<li> loadblancer-id - String - 是否必填：否 - （过滤条件）按照 集群 内的负载均衡唯一ID过滤。</li>
<li> network - String - 是否必填：否 - （过滤条件）按照 集群 的网络类型过滤，如："Public","Private"。</li>
<li> zone - String - 是否必填：否 - （过滤条件）按照 集群 所在可用区过滤，如："ap-guangzhou-1"（广州一区）。</li>
<li> isp -- String - 是否必填：否 - （过滤条件）按照TGW集群的 Isp 类型过滤，如："BGP","CMCC","CUCC","CTCC","INTERNAL"。</li>
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * ModifyLoadBalancerSla请求参数结构体
 * @class
 */
class ModifyLoadBalancerSlaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例信息。
         * @type {Array.<SlaUpdateParam> || null}
         */
        this.LoadBalancerSla = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadBalancerSla) {
            this.LoadBalancerSla = new Array();
            for (let z in params.LoadBalancerSla) {
                let obj = new SlaUpdateParam();
                obj.deserialize(params.LoadBalancerSla[z]);
                this.LoadBalancerSla.push(obj);
            }
        }

    }
}

/**
 * DescribeBlockIPTask请求参数结构体
 * @class
 */
class DescribeBlockIPTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ModifyBlockIPList 接口返回的异步任务的ID。
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 资源详细信息
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商内具体资源信息，如"CMCC", "CUCC", "CTCC", "BGP", "INTERNAL"。
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * 运营商信息，如"CMCC", "CUCC", "CTCC", "BGP", "INTERNAL"。
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 可用资源。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResourceAvailability> || null}
         */
        this.AvailabilitySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Isp = 'Isp' in params ? params.Isp : null;

        if (params.AvailabilitySet) {
            this.AvailabilitySet = new Array();
            for (let z in params.AvailabilitySet) {
                let obj = new ResourceAvailability();
                obj.deserialize(params.AvailabilitySet[z]);
                this.AvailabilitySet.push(obj);
            }
        }

    }
}

/**
 * CreateLoadBalancer返回参数结构体
 * @class
 */
class CreateLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 由负载均衡实例唯一 ID 组成的数组。
存在某些场景，如创建出现延迟时，此字段可能返回为空；此时可以根据接口返回的RequestId或DealName参数，通过DescribeTaskStatus接口查询创建的资源ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 订单号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyFunctionTargets请求参数结构体
 * @class
 */
class ModifyFunctionTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要修改的后端云函数服务列表。
         * @type {Array.<FunctionTarget> || null}
         */
        this.FunctionTargets = null;

        /**
         * 转发规则的ID，当绑定机器到七层转发规则时，必须提供此参数或Domain+Url两者之一。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标规则的域名，提供LocationId参数时本参数不生效。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标规则的URL，提供LocationId参数时本参数不生效。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.FunctionTargets) {
            this.FunctionTargets = new Array();
            for (let z in params.FunctionTargets) {
                let obj = new FunctionTarget();
                obj.deserialize(params.FunctionTargets[z]);
                this.FunctionTargets.push(obj);
            }
        }
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeRewrite返回参数结构体
 * @class
 */
class DescribeRewriteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重定向转发规则构成的数组，若无重定向规则，则返回空数组。
         * @type {Array.<RuleOutput> || null}
         */
        this.RewriteSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RewriteSet) {
            this.RewriteSet = new Array();
            for (let z in params.RewriteSet) {
                let obj = new RuleOutput();
                obj.deserialize(params.RewriteSet[z]);
                this.RewriteSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述配额信息，所有配额均指当前地域下的配额。
 * @class
 */
class Quota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额名称，取值范围：
<li> TOTAL_OPEN_CLB_QUOTA：用户当前地域下的公网CLB配额 </li>
<li> TOTAL_INTERNAL_CLB_QUOTA：用户当前地域下的内网CLB配额 </li>
<li> TOTAL_LISTENER_QUOTA：一个CLB下的监听器配额 </li>
<li> TOTAL_LISTENER_RULE_QUOTA：一个监听器下的转发规则配额 </li>
<li> TOTAL_TARGET_BIND_QUOTA：一条转发规则下可绑定设备的配额 </li>
<li> TOTAL_SNAP_IP_QUOTA： 一个CLB实例下跨地域2.0的SNAT IP配额 </li>
<li>TOTAL_ISP_CLB_QUOTA：用户当前地域下的三网CLB配额 </li>
         * @type {string || null}
         */
        this.QuotaId = null;

        /**
         * 当前使用数量，为 null 时表示无意义。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.QuotaCurrent = null;

        /**
         * 配额数量。
         * @type {number || null}
         */
        this.QuotaLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QuotaId = 'QuotaId' in params ? params.QuotaId : null;
        this.QuotaCurrent = 'QuotaCurrent' in params ? params.QuotaCurrent : null;
        this.QuotaLimit = 'QuotaLimit' in params ? params.QuotaLimit : null;

    }
}

/**
 * SetLoadBalancerClsLog请求参数结构体
 * @class
 */
class SetLoadBalancerClsLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 日志服务(CLS)的日志集 ID。
<li>增加和更新日志主题时可调用 [DescribeLogsets](https://cloud.tencent.com/document/product/614/56454) 接口获取日志集 ID。</li>
<li>删除日志主题时，此参数填写为null即可。</li>
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * 日志服务(CLS)的日志主题 ID。
<li>增加和更新日志主题时可调用 [DescribeTopics](https://cloud.tencent.com/document/product/614/58624) 接口获取日志主题 ID。</li>
<li>删除日志主题时，此参数填写为null即可。</li>
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * 日志类型：
<li>ACCESS：访问日志</li>
<li>HEALTH：健康检查日志</li>
默认为ACCESS。
         * @type {string || null}
         */
        this.LogType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;
        this.LogType = 'LogType' in params ? params.LogType : null;

    }
}

/**
 * 反查Lb绑定关系。
 * @class
 */
class LBItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * lb的字符串id
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * lb的vip
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 监听器规则
         * @type {Array.<ListenerItem> || null}
         */
        this.Listeners = null;

        /**
         * LB所在地域
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ListenerItem();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * ModifyTargetGroupAttribute返回参数结构体
 * @class
 */
class ModifyTargetGroupAttributeResponse extends  AbstractModel {
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
 * DeleteLoadBalancerListeners返回参数结构体
 * @class
 */
class DeleteLoadBalancerListenersResponse extends  AbstractModel {
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
 * DescribeIdleLoadBalancers请求参数结构体
 * @class
 */
class DescribeIdleLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回负载均衡实例的数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 负载均衡所在地域。
         * @type {string || null}
         */
        this.LoadBalancerRegion = null;

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
        this.LoadBalancerRegion = 'LoadBalancerRegion' in params ? params.LoadBalancerRegion : null;

    }
}

/**
 * DeleteLoadBalancerSnatIps请求参数结构体
 * @class
 */
class DeleteLoadBalancerSnatIpsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡唯一ID，例如：lb-12345678。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 删除SnatIp地址数组。
         * @type {Array.<string> || null}
         */
        this.Ips = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.Ips = 'Ips' in params ? params.Ips : null;

    }
}

/**
 * SetLoadBalancerSecurityGroups请求参数结构体
 * @class
 */
class SetLoadBalancerSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 安全组ID构成的数组，一个负载均衡实例最多可绑定50个安全组，如果要解绑所有安全组，可不传此参数，或传入空数组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;

    }
}

/**
 * DescribeClassicalLBTargets返回参数结构体
 * @class
 */
class DescribeClassicalLBTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端服务列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClassicalTarget> || null}
         */
        this.Targets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new ClassicalTarget();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 转发规则之间的重定向关系
 * @class
 */
class RewriteLocationMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源转发规则ID
         * @type {string || null}
         */
        this.SourceLocationId = null;

        /**
         * 重定向至的目标转发规则ID
         * @type {string || null}
         */
        this.TargetLocationId = null;

        /**
         * 重定向状态码，可取值301,302,307
         * @type {number || null}
         */
        this.RewriteCode = null;

        /**
         * 重定向是否携带匹配的url，配置RewriteCode时必填
         * @type {boolean || null}
         */
        this.TakeUrl = null;

        /**
         * 源转发的域名，必须是SourceLocationId对应的域名，配置RewriteCode时必填
         * @type {string || null}
         */
        this.SourceDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceLocationId = 'SourceLocationId' in params ? params.SourceLocationId : null;
        this.TargetLocationId = 'TargetLocationId' in params ? params.TargetLocationId : null;
        this.RewriteCode = 'RewriteCode' in params ? params.RewriteCode : null;
        this.TakeUrl = 'TakeUrl' in params ? params.TakeUrl : null;
        this.SourceDomain = 'SourceDomain' in params ? params.SourceDomain : null;

    }
}

/**
 * ModifyTargetPort请求参数结构体
 * @class
 */
class ModifyTargetPortRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要修改端口的后端服务列表。
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 后端服务绑定到监听器或转发规则的新端口。
         * @type {number || null}
         */
        this.NewPort = null;

        /**
         * 转发规则的ID，当后端服务绑定到七层转发规则时，必须提供此参数或Domain+Url两者之一。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标规则的域名，提供LocationId参数时本参数不生效。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标规则的URL，提供LocationId参数时本参数不生效。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.NewPort = 'NewPort' in params ? params.NewPort : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeLoadBalancers返回参数结构体
 * @class
 */
class DescribeLoadBalancersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 满足过滤条件的负载均衡实例总数。此数值与入参中的Limit无关。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的负载均衡实例数组。
         * @type {Array.<LoadBalancer> || null}
         */
        this.LoadBalancerSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.LoadBalancerSet) {
            this.LoadBalancerSet = new Array();
            for (let z in params.LoadBalancerSet) {
                let obj = new LoadBalancer();
                obj.deserialize(params.LoadBalancerSet[z]);
                this.LoadBalancerSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeLBListeners返回参数结构体
 * @class
 */
class DescribeLBListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的后端规则
         * @type {Array.<LBItem> || null}
         */
        this.LoadBalancers = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LoadBalancers) {
            this.LoadBalancers = new Array();
            for (let z in params.LoadBalancers) {
                let obj = new LBItem();
                obj.deserialize(params.LoadBalancers[z]);
                this.LoadBalancers.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 目标组信息
 * @class
 */
class TargetGroupInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 目标组的vpcid
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 目标组的名字
         * @type {string || null}
         */
        this.TargetGroupName = null;

        /**
         * 目标组的默认端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 目标组的创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 目标组的修改时间
         * @type {string || null}
         */
        this.UpdatedTime = null;

        /**
         * 关联到的规则数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssociationItem> || null}
         */
        this.AssociatedRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.TargetGroupName = 'TargetGroupName' in params ? params.TargetGroupName : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.UpdatedTime = 'UpdatedTime' in params ? params.UpdatedTime : null;

        if (params.AssociatedRule) {
            this.AssociatedRule = new Array();
            for (let z in params.AssociatedRule) {
                let obj = new AssociationItem();
                obj.deserialize(params.AssociatedRule[z]);
                this.AssociatedRule.push(obj);
            }
        }

    }
}

/**
 * DeleteListener返回参数结构体
 * @class
 */
class DeleteListenerResponse extends  AbstractModel {
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
 * DeleteLoadBalancerSnatIps返回参数结构体
 * @class
 */
class DeleteLoadBalancerSnatIpsResponse extends  AbstractModel {
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
 * 证书相关信息
 * @class
 */
class CertificateOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证类型，UNIDIRECTIONAL：单向认证，MUTUAL：双向认证
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * 服务端证书的ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 客户端证书的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertCaId = null;

        /**
         * 多本服务器证书场景扩展的服务器证书ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ExtCertIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SSLMode = 'SSLMode' in params ? params.SSLMode : null;
        this.CertId = 'CertId' in params ? params.CertId : null;
        this.CertCaId = 'CertCaId' in params ? params.CertCaId : null;
        this.ExtCertIds = 'ExtCertIds' in params ? params.ExtCertIds : null;

    }
}

/**
 * DeleteTargetGroups请求参数结构体
 * @class
 */
class DeleteTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组的ID数组。
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupIds = 'TargetGroupIds' in params ? params.TargetGroupIds : null;

    }
}

/**
 * DescribeClassicalLBListeners请求参数结构体
 * @class
 */
class DescribeClassicalLBListenersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID列表。
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * 负载均衡监听的协议：'TCP', 'UDP', 'HTTP', 'HTTPS'。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 负载均衡监听端口，范围为[1-65535]。
         * @type {number || null}
         */
        this.ListenerPort = null;

        /**
         * 监听器的状态，0：创建中，1：运行中。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerIds = 'ListenerIds' in params ? params.ListenerIds : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.ListenerPort = 'ListenerPort' in params ? params.ListenerPort : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * 描述一个Target的健康信息
 * @class
 */
class TargetHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target的内网IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Target绑定的端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 当前健康状态，true：健康，false：不健康（包括尚未开始探测、探测中、状态异常等几种状态）。只有处于健康状态（且权重大于0），负载均衡才会向其转发流量。
         * @type {boolean || null}
         */
        this.HealthStatus = null;

        /**
         * Target的实例ID，如 ins-12345678
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 当前健康状态的详细信息。如：Alive、Dead、Unknown。Alive状态为健康，Dead状态为异常，Unknown状态包括尚未开始探测、探测中、状态未知。
         * @type {string || null}
         */
        this.HealthStatusDetail = null;

        /**
         * 当前健康状态的详细信息。如：Alive、Dead、Unknown。Alive状态为健康，Dead状态为异常，Unknown状态包括尚未开始探测、探测中、状态未知。(该参数对象即将下线，不推荐使用，请使用HealthStatusDetail获取健康详情)
         * @type {string || null}
         */
        this.HealthStatusDetial = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.HealthStatus = 'HealthStatus' in params ? params.HealthStatus : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.HealthStatusDetail = 'HealthStatusDetail' in params ? params.HealthStatusDetail : null;
        this.HealthStatusDetial = 'HealthStatusDetial' in params ? params.HealthStatusDetial : null;

    }
}

/**
 * 规则与目标组的关联关系
 * @class
 */
class TargetGroupAssociation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 目标组ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 转发规则ID
         * @type {string || null}
         */
        this.LocationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

    }
}

/**
 * 监听器的健康检查信息
 * @class
 */
class ListenerHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器的协议
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器的端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 监听器的转发规则列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RuleHealth> || null}
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new RuleHealth();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * 目标组关联到的规则
 * @class
 */
class AssociationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 关联到的负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 关联到的监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 关联到的转发规则ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 关联到的监听器协议类型，如HTTP,TCP,
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 关联到的监听器端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 关联到的转发规则域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 关联到的转发规则URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 负载均衡名称
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.LocationId = 'LocationId' in params ? params.LocationId : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;

    }
}

/**
 * 监听器绑定的后端服务的详细信息
 * @class
 */
class Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端服务的类型，可取：CVM、ENI
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 后端服务的唯一 ID，如 ins-abcd1234
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端服务的监听端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 后端服务的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 后端服务的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 后端服务的实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 后端服务被绑定的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegisteredTime = null;

        /**
         * 弹性网卡唯一ID，如 eni-1234abcd
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EniId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegisteredTime = 'RegisteredTime' in params ? params.RegisteredTime : null;
        this.EniId = 'EniId' in params ? params.EniId : null;

    }
}

/**
 * RegisterTargetGroupInstances请求参数结构体
 * @class
 */
class RegisterTargetGroupInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 服务器实例数组
         * @type {Array.<TargetGroupInstance> || null}
         */
        this.TargetGroupInstances = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetGroupId = 'TargetGroupId' in params ? params.TargetGroupId : null;

        if (params.TargetGroupInstances) {
            this.TargetGroupInstances = new Array();
            for (let z in params.TargetGroupInstances) {
                let obj = new TargetGroupInstance();
                obj.deserialize(params.TargetGroupInstances[z]);
                this.TargetGroupInstances.push(obj);
            }
        }

    }
}

/**
 * 负载均衡实例的信息
 * @class
 */
class LoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡实例的名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡实例的网络类型：
OPEN：公网属性， INTERNAL：内网属性。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * 负载均衡类型标识，1：负载均衡，0：传统型负载均衡。
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * 负载均衡实例的域名，仅公网传统型负载均衡实例才提供该字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 负载均衡实例的 VIP 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * 负载均衡实例的状态，包括
0：创建中，1：正常运行。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 负载均衡实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 负载均衡实例的上次状态转换时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusTime = null;

        /**
         * 负载均衡实例所属的项目 ID， 0 表示默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 私有网络的 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 高防 LB 的标识，1：高防负载均衡 0：非高防负载均衡。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OpenBgp = null;

        /**
         * 在 2016 年 12 月份之前的传统型内网负载均衡都是开启了 snat 的。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Snat = null;

        /**
         * 0：表示未被隔离，1：表示被隔离。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Isolation = null;

        /**
         * 用户开启日志的信息，日志只有公网属性创建了 HTTP 、HTTPS 监听器的负载均衡才会有日志。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Log = null;

        /**
         * 负载均衡实例所在的子网（仅对内网VPC型LB有意义）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 负载均衡实例的标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 负载均衡实例的安全组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecureGroups = null;

        /**
         * 负载均衡实例绑定的后端设备的基本信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TargetRegionInfo || null}
         */
        this.TargetRegionInfo = null;

        /**
         * anycast负载均衡的发布域，对于非anycast的负载均衡，此字段返回为空字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnycastZone = null;

        /**
         * IP版本，ipv4 | ipv6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddressIPVersion = null;

        /**
         * 数值形式的私有网络 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NumericalVpcId = null;

        /**
         * 负载均衡IP地址所属的ISP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * 主可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ZoneInfo || null}
         */
        this.MasterZone = null;

        /**
         * 备可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ZoneInfo> || null}
         */
        this.BackupZoneSet = null;

        /**
         * 负载均衡实例被隔离的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 负载均衡实例的过期时间，仅对预付费负载均衡生效
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 负载均衡实例的计费类型，PREPAID：包年包月，POSTPAID_BY_HOUR：按量计费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChargeType = null;

        /**
         * 负载均衡实例的网络属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InternetAccessible || null}
         */
        this.NetworkAttributes = null;

        /**
         * 负载均衡实例的预付费相关属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LBChargePrepaid || null}
         */
        this.PrepaidAttributes = null;

        /**
         * 负载均衡日志服务(CLS)的日志集ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogSetId = null;

        /**
         * 负载均衡日志服务(CLS)的日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LogTopicId = null;

        /**
         * 负载均衡实例的IPv6地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddressIPv6 = null;

        /**
         * 暂做保留，一般用户无需关注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExtraInfo || null}
         */
        this.ExtraInfo = null;

        /**
         * 是否可绑定高防包
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDDos = null;

        /**
         * 负载均衡维度的个性化配置ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 后端服务是否放通来自LB的流量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.LoadBalancerPassToTarget = null;

        /**
         * 内网独占集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ExclusiveCluster || null}
         */
        this.ExclusiveCluster = null;

        /**
         * IP地址版本为ipv6时此字段有意义， IPv6Nat64 | IPv6FullChain
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IPv6Mode = null;

        /**
         * 是否开启SnatPro。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * 开启SnatPro负载均衡后，SnatIp列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

        /**
         * 性能容量型规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SlaType = null;

        /**
         * vip是否被封堵
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsBlock = null;

        /**
         * 封堵或解封时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsBlockTime = null;

        /**
         * IP类型是否是本地BGP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.LocalBgp = null;

        /**
         * 7层独占标签。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterTag = null;

        /**
         * 开启IPv6FullChain负载均衡7层监听器支持混绑IPv4/IPv6目标功能。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.MixIpTarget = null;

        /**
         * 私有网络内网负载均衡，就近接入模式下规则所落在的可用区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * CLB是否为NFV，空：不是，l7nfv：七层是NFV。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NfvInfo = null;

        /**
         * 负载均衡日志服务(CLS)的健康检查日志集ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HealthLogSetId = null;

        /**
         * 负载均衡日志服务(CLS)的健康检查日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HealthLogTopicId = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ClusterIds = null;

        /**
         * 负载均衡的属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AttributeFlags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Forward = 'Forward' in params ? params.Forward : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StatusTime = 'StatusTime' in params ? params.StatusTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.OpenBgp = 'OpenBgp' in params ? params.OpenBgp : null;
        this.Snat = 'Snat' in params ? params.Snat : null;
        this.Isolation = 'Isolation' in params ? params.Isolation : null;
        this.Log = 'Log' in params ? params.Log : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.SecureGroups = 'SecureGroups' in params ? params.SecureGroups : null;

        if (params.TargetRegionInfo) {
            let obj = new TargetRegionInfo();
            obj.deserialize(params.TargetRegionInfo)
            this.TargetRegionInfo = obj;
        }
        this.AnycastZone = 'AnycastZone' in params ? params.AnycastZone : null;
        this.AddressIPVersion = 'AddressIPVersion' in params ? params.AddressIPVersion : null;
        this.NumericalVpcId = 'NumericalVpcId' in params ? params.NumericalVpcId : null;
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;

        if (params.MasterZone) {
            let obj = new ZoneInfo();
            obj.deserialize(params.MasterZone)
            this.MasterZone = obj;
        }

        if (params.BackupZoneSet) {
            this.BackupZoneSet = new Array();
            for (let z in params.BackupZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.BackupZoneSet[z]);
                this.BackupZoneSet.push(obj);
            }
        }
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

        if (params.NetworkAttributes) {
            let obj = new InternetAccessible();
            obj.deserialize(params.NetworkAttributes)
            this.NetworkAttributes = obj;
        }

        if (params.PrepaidAttributes) {
            let obj = new LBChargePrepaid();
            obj.deserialize(params.PrepaidAttributes)
            this.PrepaidAttributes = obj;
        }
        this.LogSetId = 'LogSetId' in params ? params.LogSetId : null;
        this.LogTopicId = 'LogTopicId' in params ? params.LogTopicId : null;
        this.AddressIPv6 = 'AddressIPv6' in params ? params.AddressIPv6 : null;

        if (params.ExtraInfo) {
            let obj = new ExtraInfo();
            obj.deserialize(params.ExtraInfo)
            this.ExtraInfo = obj;
        }
        this.IsDDos = 'IsDDos' in params ? params.IsDDos : null;
        this.ConfigId = 'ConfigId' in params ? params.ConfigId : null;
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;

        if (params.ExclusiveCluster) {
            let obj = new ExclusiveCluster();
            obj.deserialize(params.ExclusiveCluster)
            this.ExclusiveCluster = obj;
        }
        this.IPv6Mode = 'IPv6Mode' in params ? params.IPv6Mode : null;
        this.SnatPro = 'SnatPro' in params ? params.SnatPro : null;

        if (params.SnatIps) {
            this.SnatIps = new Array();
            for (let z in params.SnatIps) {
                let obj = new SnatIp();
                obj.deserialize(params.SnatIps[z]);
                this.SnatIps.push(obj);
            }
        }
        this.SlaType = 'SlaType' in params ? params.SlaType : null;
        this.IsBlock = 'IsBlock' in params ? params.IsBlock : null;
        this.IsBlockTime = 'IsBlockTime' in params ? params.IsBlockTime : null;
        this.LocalBgp = 'LocalBgp' in params ? params.LocalBgp : null;
        this.ClusterTag = 'ClusterTag' in params ? params.ClusterTag : null;
        this.MixIpTarget = 'MixIpTarget' in params ? params.MixIpTarget : null;
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.NfvInfo = 'NfvInfo' in params ? params.NfvInfo : null;
        this.HealthLogSetId = 'HealthLogSetId' in params ? params.HealthLogSetId : null;
        this.HealthLogTopicId = 'HealthLogTopicId' in params ? params.HealthLogTopicId : null;
        this.ClusterIds = 'ClusterIds' in params ? params.ClusterIds : null;
        this.AttributeFlags = 'AttributeFlags' in params ? params.AttributeFlags : null;

    }
}

module.exports = {
    DeleteRewriteRequest: DeleteRewriteRequest,
    DescribeTargetGroupListResponse: DescribeTargetGroupListResponse,
    DescribeQuotaRequest: DescribeQuotaRequest,
    DescribeTargetGroupListRequest: DescribeTargetGroupListRequest,
    BatchDeregisterTargetsResponse: BatchDeregisterTargetsResponse,
    SetLoadBalancerSecurityGroupsResponse: SetLoadBalancerSecurityGroupsResponse,
    RulesItems: RulesItems,
    ExtraInfo: ExtraInfo,
    BatchModifyTargetWeightResponse: BatchModifyTargetWeightResponse,
    SetSecurityGroupForLoadbalancersRequest: SetSecurityGroupForLoadbalancersRequest,
    CreateLoadBalancerRequest: CreateLoadBalancerRequest,
    DescribeLoadBalancerOverviewResponse: DescribeLoadBalancerOverviewResponse,
    DeleteRuleRequest: DeleteRuleRequest,
    CloneLoadBalancerRequest: CloneLoadBalancerRequest,
    DisassociateTargetGroupsResponse: DisassociateTargetGroupsResponse,
    SetLoadBalancerClsLogResponse: SetLoadBalancerClsLogResponse,
    DescribeLoadBalancerTrafficResponse: DescribeLoadBalancerTrafficResponse,
    MultiCertInfo: MultiCertInfo,
    ModifyRuleRequest: ModifyRuleRequest,
    DescribeCustomizedConfigListResponse: DescribeCustomizedConfigListResponse,
    DescribeBlockIPListResponse: DescribeBlockIPListResponse,
    DescribeRewriteRequest: DescribeRewriteRequest,
    ModifyLoadBalancerAttributesResponse: ModifyLoadBalancerAttributesResponse,
    DescribeTargetGroupInstancesRequest: DescribeTargetGroupInstancesRequest,
    DescribeIdleLoadBalancersResponse: DescribeIdleLoadBalancersResponse,
    AssociateTargetGroupsRequest: AssociateTargetGroupsRequest,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    ClassicalTarget: ClassicalTarget,
    ListenerItem: ListenerItem,
    RsWeightRule: RsWeightRule,
    RegisterFunctionTargetsRequest: RegisterFunctionTargetsRequest,
    DeregisterTargetsFromClassicalLBRequest: DeregisterTargetsFromClassicalLBRequest,
    SetSecurityGroupForLoadbalancersResponse: SetSecurityGroupForLoadbalancersResponse,
    BasicTargetGroupInfo: BasicTargetGroupInfo,
    ModifyTargetWeightResponse: ModifyTargetWeightResponse,
    ZoneResource: ZoneResource,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    TargetGroupInstance: TargetGroupInstance,
    DescribeClassicalLBByInstanceIdResponse: DescribeClassicalLBByInstanceIdResponse,
    CreateRuleResponse: CreateRuleResponse,
    CrossTargets: CrossTargets,
    RuleHealth: RuleHealth,
    DescribeExclusiveClustersResponse: DescribeExclusiveClustersResponse,
    ModifyDomainRequest: ModifyDomainRequest,
    IdleLoadBalancer: IdleLoadBalancer,
    RegisterTargetGroupInstancesResponse: RegisterTargetGroupInstancesResponse,
    ClassicalTargetInfo: ClassicalTargetInfo,
    DescribeTargetsRequest: DescribeTargetsRequest,
    ZoneInfo: ZoneInfo,
    RegisterTargetsWithClassicalLBResponse: RegisterTargetsWithClassicalLBResponse,
    DescribeTargetGroupsResponse: DescribeTargetGroupsResponse,
    LoadBalancerHealth: LoadBalancerHealth,
    ModifyLoadBalancerSlaResponse: ModifyLoadBalancerSlaResponse,
    DeleteLoadBalancerListenersRequest: DeleteLoadBalancerListenersRequest,
    BlockedIP: BlockedIP,
    ModifyRuleResponse: ModifyRuleResponse,
    DescribeClassicalLBTargetsRequest: DescribeClassicalLBTargetsRequest,
    DeregisterFunctionTargetsResponse: DeregisterFunctionTargetsResponse,
    DescribeCustomizedConfigListRequest: DescribeCustomizedConfigListRequest,
    AutoRewriteRequest: AutoRewriteRequest,
    DescribeCrossTargetsResponse: DescribeCrossTargetsResponse,
    FunctionInfo: FunctionInfo,
    ModifyFunctionTargetsResponse: ModifyFunctionTargetsResponse,
    DescribeLoadBalancerListByCertIdResponse: DescribeLoadBalancerListByCertIdResponse,
    ModifyTargetGroupInstancesWeightResponse: ModifyTargetGroupInstancesWeightResponse,
    DescribeTargetGroupsRequest: DescribeTargetGroupsRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    BatchRegisterTargetsResponse: BatchRegisterTargetsResponse,
    ModifyLoadBalancerAttributesRequest: ModifyLoadBalancerAttributesRequest,
    DescribeLBListenersRequest: DescribeLBListenersRequest,
    SlaUpdateParam: SlaUpdateParam,
    Target: Target,
    DescribeLoadBalancerTrafficRequest: DescribeLoadBalancerTrafficRequest,
    DescribeBlockIPListRequest: DescribeBlockIPListRequest,
    CertIdRelatedWithLoadBalancers: CertIdRelatedWithLoadBalancers,
    DescribeClassicalLBHealthStatusResponse: DescribeClassicalLBHealthStatusResponse,
    DescribeClsLogSetRequest: DescribeClsLogSetRequest,
    Listener: Listener,
    LoadBalancerTraffic: LoadBalancerTraffic,
    ConfigListItem: ConfigListItem,
    RegisterTargetsWithClassicalLBRequest: RegisterTargetsWithClassicalLBRequest,
    ModifyDomainAttributesResponse: ModifyDomainAttributesResponse,
    ReplaceCertForLoadBalancersResponse: ReplaceCertForLoadBalancersResponse,
    DescribeTargetsResponse: DescribeTargetsResponse,
    ModifyListenerRequest: ModifyListenerRequest,
    DeregisterTargetGroupInstancesResponse: DeregisterTargetGroupInstancesResponse,
    RegisterTargetsRequest: RegisterTargetsRequest,
    HealthCheck: HealthCheck,
    AssociateTargetGroupsResponse: AssociateTargetGroupsResponse,
    CreateTopicRequest: CreateTopicRequest,
    DeleteListenerRequest: DeleteListenerRequest,
    ClassicalHealth: ClassicalHealth,
    DescribeCustomizedConfigAssociateListRequest: DescribeCustomizedConfigAssociateListRequest,
    ModifyTargetPortResponse: ModifyTargetPortResponse,
    MigrateClassicalLoadBalancersRequest: MigrateClassicalLoadBalancersRequest,
    DescribeLoadBalancersDetailRequest: DescribeLoadBalancersDetailRequest,
    TargetGroupBackend: TargetGroupBackend,
    DeregisterFunctionTargetsRequest: DeregisterFunctionTargetsRequest,
    DescribeClassicalLBByInstanceIdRequest: DescribeClassicalLBByInstanceIdRequest,
    FunctionTarget: FunctionTarget,
    DescribeResourcesResponse: DescribeResourcesResponse,
    ModifyTargetGroupInstancesWeightRequest: ModifyTargetGroupInstancesWeightRequest,
    ManualRewriteResponse: ManualRewriteResponse,
    ModifyBlockIPListRequest: ModifyBlockIPListRequest,
    DescribeClusterResourcesResponse: DescribeClusterResourcesResponse,
    ModifyBlockIPListResponse: ModifyBlockIPListResponse,
    DescribeClusterResourcesRequest: DescribeClusterResourcesRequest,
    ModifyDomainAttributesRequest: ModifyDomainAttributesRequest,
    DescribeClassicalLBHealthStatusRequest: DescribeClassicalLBHealthStatusRequest,
    DescribeListenersRequest: DescribeListenersRequest,
    CreateClsLogSetResponse: CreateClsLogSetResponse,
    DescribeCrossTargetsRequest: DescribeCrossTargetsRequest,
    LBChargePrepaid: LBChargePrepaid,
    ClassicalListener: ClassicalListener,
    DeleteLoadBalancerRequest: DeleteLoadBalancerRequest,
    CertificateInput: CertificateInput,
    ResourceAvailability: ResourceAvailability,
    DescribeCustomizedConfigAssociateListResponse: DescribeCustomizedConfigAssociateListResponse,
    SetCustomizedConfigForLoadBalancerRequest: SetCustomizedConfigForLoadBalancerRequest,
    CreateListenerResponse: CreateListenerResponse,
    CreateTargetGroupResponse: CreateTargetGroupResponse,
    MigrateClassicalLoadBalancersResponse: MigrateClassicalLoadBalancersResponse,
    CreateLoadBalancerSnatIpsResponse: CreateLoadBalancerSnatIpsResponse,
    ClassicalLoadBalancerInfo: ClassicalLoadBalancerInfo,
    DescribeListenersResponse: DescribeListenersResponse,
    RuleOutput: RuleOutput,
    RegisterFunctionTargetsResponse: RegisterFunctionTargetsResponse,
    CreateTopicResponse: CreateTopicResponse,
    CreateRuleRequest: CreateRuleRequest,
    ModifyTargetGroupInstancesPortResponse: ModifyTargetGroupInstancesPortResponse,
    LbRsItem: LbRsItem,
    RuleTargets: RuleTargets,
    BatchDeregisterTargetsRequest: BatchDeregisterTargetsRequest,
    DeregisterTargetGroupInstancesRequest: DeregisterTargetGroupInstancesRequest,
    ManualRewriteRequest: ManualRewriteRequest,
    ModifyListenerResponse: ModifyListenerResponse,
    DescribeTargetHealthResponse: DescribeTargetHealthResponse,
    CertInfo: CertInfo,
    CreateTargetGroupRequest: CreateTargetGroupRequest,
    ClusterItem: ClusterItem,
    BindDetailItem: BindDetailItem,
    CreateListenerRequest: CreateListenerRequest,
    CreateClsLogSetRequest: CreateClsLogSetRequest,
    DisassociateTargetGroupsRequest: DisassociateTargetGroupsRequest,
    Filter: Filter,
    ClusterResource: ClusterResource,
    ModifyDomainResponse: ModifyDomainResponse,
    RegisterTargetsResponse: RegisterTargetsResponse,
    DeregisterTargetsFromClassicalLBResponse: DeregisterTargetsFromClassicalLBResponse,
    ClustersZone: ClustersZone,
    SetCustomizedConfigForLoadBalancerResponse: SetCustomizedConfigForLoadBalancerResponse,
    DeleteLoadBalancerResponse: DeleteLoadBalancerResponse,
    AutoRewriteResponse: AutoRewriteResponse,
    DeregisterTargetsResponse: DeregisterTargetsResponse,
    DescribeLoadBalancerOverviewRequest: DescribeLoadBalancerOverviewRequest,
    RewriteTarget: RewriteTarget,
    Cluster: Cluster,
    ModifyTargetWeightRequest: ModifyTargetWeightRequest,
    DescribeLoadBalancersDetailResponse: DescribeLoadBalancersDetailResponse,
    LoadBalancerDetail: LoadBalancerDetail,
    LbRsTargets: LbRsTargets,
    BatchModifyTargetWeightRequest: BatchModifyTargetWeightRequest,
    DeleteRewriteResponse: DeleteRewriteResponse,
    BatchTarget: BatchTarget,
    DescribeLoadBalancerListByCertIdRequest: DescribeLoadBalancerListByCertIdRequest,
    TargetRegionInfo: TargetRegionInfo,
    DescribeTargetHealthRequest: DescribeTargetHealthRequest,
    ReplaceCertForLoadBalancersRequest: ReplaceCertForLoadBalancersRequest,
    DeleteRuleResponse: DeleteRuleResponse,
    CloneLoadBalancerResponse: CloneLoadBalancerResponse,
    DescribeClsLogSetResponse: DescribeClsLogSetResponse,
    ModifyTargetGroupAttributeRequest: ModifyTargetGroupAttributeRequest,
    ExclusiveCluster: ExclusiveCluster,
    DeregisterTargetsRequest: DeregisterTargetsRequest,
    ModifyLoadBalancerMixIpTargetResponse: ModifyLoadBalancerMixIpTargetResponse,
    InternetAccessible: InternetAccessible,
    CreateLoadBalancerSnatIpsRequest: CreateLoadBalancerSnatIpsRequest,
    DescribeTargetGroupInstancesResponse: DescribeTargetGroupInstancesResponse,
    DescribeQuotaResponse: DescribeQuotaResponse,
    DeleteTargetGroupsResponse: DeleteTargetGroupsResponse,
    ModifyTargetGroupInstancesPortRequest: ModifyTargetGroupInstancesPortRequest,
    BatchRegisterTargetsRequest: BatchRegisterTargetsRequest,
    ListenerBackend: ListenerBackend,
    RuleInput: RuleInput,
    TagInfo: TagInfo,
    SnatIp: SnatIp,
    ModifyLoadBalancerMixIpTargetRequest: ModifyLoadBalancerMixIpTargetRequest,
    DescribeBlockIPTaskResponse: DescribeBlockIPTaskResponse,
    DescribeResourcesRequest: DescribeResourcesRequest,
    DescribeClassicalLBListenersResponse: DescribeClassicalLBListenersResponse,
    DescribeExclusiveClustersRequest: DescribeExclusiveClustersRequest,
    ModifyLoadBalancerSlaRequest: ModifyLoadBalancerSlaRequest,
    DescribeBlockIPTaskRequest: DescribeBlockIPTaskRequest,
    Resource: Resource,
    CreateLoadBalancerResponse: CreateLoadBalancerResponse,
    ModifyFunctionTargetsRequest: ModifyFunctionTargetsRequest,
    DescribeRewriteResponse: DescribeRewriteResponse,
    Quota: Quota,
    SetLoadBalancerClsLogRequest: SetLoadBalancerClsLogRequest,
    LBItem: LBItem,
    ModifyTargetGroupAttributeResponse: ModifyTargetGroupAttributeResponse,
    DeleteLoadBalancerListenersResponse: DeleteLoadBalancerListenersResponse,
    DescribeIdleLoadBalancersRequest: DescribeIdleLoadBalancersRequest,
    DeleteLoadBalancerSnatIpsRequest: DeleteLoadBalancerSnatIpsRequest,
    SetLoadBalancerSecurityGroupsRequest: SetLoadBalancerSecurityGroupsRequest,
    DescribeClassicalLBTargetsResponse: DescribeClassicalLBTargetsResponse,
    RewriteLocationMap: RewriteLocationMap,
    ModifyTargetPortRequest: ModifyTargetPortRequest,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    DescribeLBListenersResponse: DescribeLBListenersResponse,
    TargetGroupInfo: TargetGroupInfo,
    DeleteListenerResponse: DeleteListenerResponse,
    DeleteLoadBalancerSnatIpsResponse: DeleteLoadBalancerSnatIpsResponse,
    CertificateOutput: CertificateOutput,
    DeleteTargetGroupsRequest: DeleteTargetGroupsRequest,
    DescribeClassicalLBListenersRequest: DescribeClassicalLBListenersRequest,
    TargetHealth: TargetHealth,
    TargetGroupAssociation: TargetGroupAssociation,
    ListenerHealth: ListenerHealth,
    AssociationItem: AssociationItem,
    Backend: Backend,
    RegisterTargetGroupInstancesRequest: RegisterTargetGroupInstancesRequest,
    LoadBalancer: LoadBalancer,

}

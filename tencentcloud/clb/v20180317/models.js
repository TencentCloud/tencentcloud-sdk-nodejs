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
         * 负载均衡实例ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 源监听器ID
         * @type {string || null}
         */
        this.SourceListenerId = null;

        /**
         * 目标监听器ID
         * @type {string || null}
         */
        this.TargetListenerId = null;

        /**
         * 转发规则之间的重定向关系
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
         * 显示的结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 显示的目标组信息集合
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
 * DescribeTargetGroupList请求参数结构体
 * @class
 */
class DescribeTargetGroupListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组ID数组
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

        /**
         * 过滤条件数组，支持TargetGroupVpcId和TargetGroupName。与TargetGroupIds互斥，优先使用目标组ID，
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 显示的偏移起始量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 显示条数限制，默认为20
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
         * 解绑失败的监听器ID
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
         * 负载均衡实例的类型。1：通用的负载均衡实例，目前只支持传入1
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * 负载均衡实例的名称，只在创建一个实例的时候才会生效。规则：1-50 个英文、汉字、数字、连接线“-”或下划线“_”。
注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡后端目标设备所属的网络 ID，如vpc-12345678，可以通过 DescribeVpcEx 接口获取。 不传此参数则默认为基础网络（"0"）。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 在私有网络内购买内网负载均衡实例的情况下，必须指定子网 ID，内网负载均衡实例的 VIP 将从这个子网中产生。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 负载均衡实例所属的项目 ID，可以通过 DescribeProject 接口获取。不传此参数则视为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 仅适用于公网负载均衡。IP版本，可取值：IPV4、IPV6、IPv6FullChain，默认值 IPV4。
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
注：主可用区是需要承载流量的可用区，备可用区默认不承载流量，主可用区不可用时才使用备可用区，平台将为您自动选择最佳备可用区。可通过 DescribeMasterZones 接口查询一个地域的主可用区的列表。
         * @type {string || null}
         */
        this.MasterZoneId = null;

        /**
         * 仅适用于公网负载均衡。可用区ID，指定可用区以创建负载均衡实例。如：ap-guangzhou-1
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 仅适用于公网负载均衡。负载均衡的网络计费方式，此参数仅对带宽上移用户生效。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 购买负载均衡同时，给负载均衡打上标签
         * @type {Array.<TagInfo> || null}
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

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

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
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要删除的转发规则的ID组成的数组
         * @type {Array.<string> || null}
         */
        this.LocationIds = null;

        /**
         * 要删除的转发规则的域名，已提供LocationIds参数时本参数不生效
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 要删除的转发规则的转发路径，已提供LocationIds参数时本参数不生效
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
        this.LocationIds = 'LocationIds' in params ? params.LocationIds : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;

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
         * 负载均衡绑定的后端服务的地域信息
         * @type {TargetRegionInfo || null}
         */
        this.TargetRegionInfo = null;

        /**
         * 网络计费相关参数
         * @type {InternetAccessible || null}
         */
        this.InternetChargeInfo = null;

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
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要修改的转发规则的 ID。
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 转发规则的新的转发路径，如不需修改Url，则不需提供此参数
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 健康检查信息
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
         * 会话保持时间
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 负载均衡实例与后端服务之间的转发协议，默认HTTP，可取值：HTTP、HTTPS
         * @type {string || null}
         */
        this.ForwardType = null;

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
         * 负载均衡相关信息列表
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
         * 负载均衡实例ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID数组
         * @type {Array.<string> || null}
         */
        this.SourceListenerIds = null;

        /**
         * 负载均衡转发规则的ID数组
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
 * CreateRule返回参数结构体
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的转发规则的唯一标识数组
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
 * AssociateTargetGroups请求参数结构体
 * @class
 */
class AssociateTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定的关系数组
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
 * 修改节点权重的数据类型
 * @class
 */
class RsWeightRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要修改权重的后端机器列表
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 转发规则的ID，七层规则时需要此参数，4层规则不需要
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标规则的域名，提供LocationId参数时本参数不生效
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标规则的URL，提供LocationId参数时本参数不生效
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 后端服务新的转发权重，取值范围：0~100。
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
 * DeregisterTargetsFromClassicalLB请求参数结构体
 * @class
 */
class DeregisterTargetsFromClassicalLBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 后端服务的实例ID列表
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
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求ID，即接口返回的 RequestId 参数
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
 * DescribeRewrite返回参数结构体
 * @class
 */
class DescribeRewriteResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重定向转发规则构成的数组，若无重定向规则，则返回空数组
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
 * DescribeTargetGroupInstances请求参数结构体
 * @class
 */
class DescribeTargetGroupInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，当前仅支持TargetGroupId，BindIP，InstanceId过滤
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 显示数量限制，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 显示的偏移量，默认为0
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
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 监听器 ID列表
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * 监听器协议类型
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器端口
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
         * 显示的结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 显示的目标组信息集合
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
         * 负载均衡实例 ID
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
 * DescribeListeners返回参数结构体
 * @class
 */
class DescribeListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器列表
         * @type {Array.<Listener> || null}
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
                let obj = new Listener();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 负载均衡实例ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * HTTPS:443监听器的ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * HTTPS:443监听器下需要重定向的域名
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Domains = 'Domains' in params ? params.Domains : null;

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
         * 目标组ID，与Filters互斥
         * @type {Array.<string> || null}
         */
        this.TargetGroupIds = null;

        /**
         * 显示条数限制，默认为20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 显示的偏移起始量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 过滤条件数组，与TargetGroupIds互斥，支持TargetGroupVpcId和TargetGroupName
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
 * DescribeTargetHealth请求参数结构体
 * @class
 */
class DescribeTargetHealthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询的负载均衡实例 ID列表
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
 * 转发目标，即绑定在负载均衡上的后端服务
 * @class
 */
class Target extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端服务的监听端口
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
         * 绑定CVM时需要传入此参数，代表CVM的唯一 ID，可通过 DescribeInstances 接口返回字段中的 InstanceId 字段获取。
注意：参数 InstanceId 和 EniIp 只能传入一个且必须传入一个。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 绑定弹性网卡时需要传入此参数，代表弹性网卡的IP，弹性网卡必须先绑定至CVM，然后才能绑定到负载均衡实例。注意：参数 InstanceId 和 EniIp 只能传入一个且必须传入一个。注意：绑定弹性网卡需要先提交工单开白名单使用。
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
 * DescribeClassicalLBHealthStatus返回参数结构体
 * @class
 */
class DescribeClassicalLBHealthStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端健康状态列表
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
         * 本规则上绑定的后端的健康检查状态
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
 * RegisterTargetsWithClassicalLB请求参数结构体
 * @class
 */
class RegisterTargetsWithClassicalLBRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 后端服务信息
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
 * ModifyListener请求参数结构体
 * @class
 */
class ModifyListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 新的监听器名称
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 健康检查相关参数，此参数仅适用于TCP/UDP/TCP_SSL监听器
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 证书相关信息，此参数仅适用于HTTPS/TCP_SSL监听器
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
         * 是否开启SNI特性，此参数仅适用于HTTPS监听器。注意：未开启SNI的监听器可以开启SNI；已开启SNI的监听器不能关闭SNI
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
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 待绑定的后端服务列表，数组长度最大支持20
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 转发规则的ID，当绑定后端服务到七层转发规则时，必须提供此参数或Domain+Url两者之一
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标转发规则的域名，提供LocationId参数时本参数不生效
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标转发规则的URL，提供LocationId参数时本参数不生效
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
1 表示探测后返回值 1xx 代表健康，2 表示返回 2xx 代表健康，4 表示返回 3xx 代表健康，8 表示返回 4xx 代表健康，16 表示返回 5xx 代表健康。若希望多种返回码都可代表健康，则将相应的值相加。注意：TCP监听器的HTTP健康检查方式，只支持指定一种健康检查状态码。
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
         * 健康检查域名（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式）。
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
 * DeleteListener请求参数结构体
 * @class
 */
class DeleteListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 要删除的监听器 ID
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
         * 后端实例ID列表
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
 * DescribeClassicalLBHealthStatus请求参数结构体
 * @class
 */
class DescribeClassicalLBHealthStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID
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
 * ModifyDomain请求参数结构体
 * @class
 */
class ModifyDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID
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
 * 监听器绑定的后端服务的详细信息
 * @class
 */
class Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端服务的类型，可取：CVM、ENI（即将支持）
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
 * CreateListener返回参数结构体
 * @class
 */
class CreateListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的监听器的唯一标识数组
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
         * 要删除的负载均衡实例 ID数组，数组大小最大支持20
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
 * CreateRule请求参数结构体
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 新建转发规则的信息
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
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 解绑目标
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
         * 目标组ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 待解绑的服务器信息
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
         * 负载均衡实例ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 源监听器ID
         * @type {string || null}
         */
        this.SourceListenerId = null;

        /**
         * 目标监听器ID
         * @type {string || null}
         */
        this.TargetListenerId = null;

        /**
         * 转发规则之间的重定向关系
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
         * 负载均衡实例列表
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
 * DescribeTargetGroupInstances返回参数结构体
 * @class
 */
class DescribeTargetGroupInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次查询的结果数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 绑定的服务器信息
         * @type {Array.<TargetGroupBackend> || null}
         */
        this.TargetGroupInstanceSet = null;

        /**
         * 实际统计数量，不受Limit，Offset，CAM的影响
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
 * CreateListener请求参数结构体
 * @class
 */
class CreateListenerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 要将监听器创建到哪些端口，每个端口对应一个新的监听器
         * @type {Array.<number> || null}
         */
        this.Ports = null;

        /**
         * 监听器协议： TCP | UDP | HTTP | HTTPS | TCP_SSL（TCP_SSL 正在内测中，如需使用请通过工单申请）
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 要创建的监听器名称列表，名称与Ports数组按序一一对应，如不需立即命名，则无需提供此参数
         * @type {Array.<string> || null}
         */
        this.ListenerNames = null;

        /**
         * 健康检查相关参数，此参数仅适用于TCP/UDP/TCP_SSL监听器
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 证书相关信息，此参数仅适用于HTTPS/TCP_SSL监听器
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
         * 待解绑的规则关系数组
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
 * DescribeLoadBalancers请求参数结构体
 * @class
 */
class DescribeLoadBalancersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID。
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
         * 负载均衡绑定的后端服务的外网 IP。
         * @type {Array.<string> || null}
         */
        this.BackendPublicIps = null;

        /**
         * 负载均衡绑定的后端服务的内网 IP。
         * @type {Array.<string> || null}
         */
        this.BackendPrivateIps = null;

        /**
         * 数据偏移量，默认为 0。
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
         * 安全组ID，如 sg-m1cc9123
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * 主可用区ID，如 ："100001" （对应的是广州一区）
         * @type {string || null}
         */
        this.MasterZone = null;

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
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 转发规则的ID，当绑定机器到七层转发规则时，必须提供此参数或Domain+Url两者之一
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标规则的域名，提供LocationId参数时本参数不生效
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标规则的URL，提供LocationId参数时本参数不生效
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 要修改权重的后端服务列表
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
 * DescribeTargets返回参数结构体
 * @class
 */
class DescribeTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器后端绑定的机器信息
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
 * BatchModifyTargetWeight请求参数结构体
 * @class
 */
class BatchModifyTargetWeightRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 要批量修改权重的列表
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
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 绑定端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 子机ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 弹性网卡ip
         * @type {string || null}
         */
        this.EniIp = null;

        /**
         * 子机权重，范围[0, 100]。绑定时如果不存在，则默认为10。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 七层规则ID
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
 * ModifyTargetGroupAttribute请求参数结构体
 * @class
 */
class ModifyTargetGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组的ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 目标组的新名称
         * @type {string || null}
         */
        this.TargetGroupName = null;

        /**
         * 目标组的新默认端口
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
 * ModifyDomainAttributes请求参数结构体
 * @class
 */
class ModifyDomainAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 域名（必须是已经创建的转发规则下的域名）
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 要修改的新域名
         * @type {string || null}
         */
        this.NewDomain = null;

        /**
         * 域名相关的证书信息，注意，仅对启用SNI的监听器适用。
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
         * 负载均衡实例 ID，格式如 lb-12345678
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 监听器 ID，格式如 lbl-12345678
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要解绑的后端服务列表，数组长度最大支持20
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 转发规则的ID，格式如 loc-12345678，当从七层转发规则解绑机器时，必须提供此参数或Domain+Url两者之一
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标规则的域名，提供LocationId参数时本参数不生效
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标规则的URL，提供LocationId参数时本参数不生效
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
         * 服务端证书的 ID。
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 客户端证书的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CertCaId = null;

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
         * 目标组ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 待修改权重的服务器数组
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
         * 目标组ID
         * @type {string || null}
         */
        this.TargetGroupId = null;

        /**
         * 待修改端口的服务器数组
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
         * 负载均衡ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 绑定目标
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
         * 转发规则的域名。长度限制为：1~80。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发规则的路径。长度限制为：1~200。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 会话保持时间。设置为0表示关闭会话保持，开启会话保持可取值30~3600，单位：秒。
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 健康检查信息
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 证书信息
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
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
 * DescribeClassicalLBListeners返回参数结构体
 * @class
 */
class DescribeClassicalLBListenersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器列表
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
 * CreateLoadBalancer返回参数结构体
 * @class
 */
class CreateLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 由负载均衡实例唯一 ID 组成的数组。
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
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 要查询的负载均衡监听器 ID数组
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * 要查询的监听器协议类型，取值 TCP | UDP | HTTP | HTTPS | TCP_SSL
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 要查询的监听器的端口
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
         * 后端服务列表
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
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要修改端口的后端服务列表
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 后端服务绑定到监听器或转发规则的新端口
         * @type {number || null}
         */
        this.NewPort = null;

        /**
         * 转发规则的ID，当后端服务绑定到七层转发规则时，必须提供此参数或Domain+Url两者之一
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 目标规则的域名，提供LocationId参数时本参数不生效
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 目标规则的URL，提供LocationId参数时本参数不生效
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
 * 网络计费方式，最大出带宽
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRAFFIC_POSTPAID_BY_HOUR 按流量按小时后计费 ; BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;
BANDWIDTH_PACKAGE 按带宽包计费（当前，只有指定运营商时才支持此种计费模式）
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
 * DeleteTargetGroups请求参数结构体
 * @class
 */
class DeleteTargetGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标组的ID数组
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
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡监听器ID列表
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * 负载均衡监听的协议, 'TCP', 'UDP', 'HTTP', 'HTTPS'
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 负载均衡监听端口， 范围[1-65535]
         * @type {number || null}
         */
        this.ListenerPort = null;

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
         * 负载均衡实例的计费类型
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
         * 是否开启SnatPro
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.SnatPro = null;

        /**
         * 开启SnatPro负载均衡后，SnatIp列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SnatIp> || null}
         */
        this.SnatIps = null;

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

    }
}

module.exports = {
    DeleteRewriteRequest: DeleteRewriteRequest,
    DescribeTargetGroupListResponse: DescribeTargetGroupListResponse,
    DisassociateTargetGroupsResponse: DisassociateTargetGroupsResponse,
    DescribeTargetGroupListRequest: DescribeTargetGroupListRequest,
    BatchDeregisterTargetsResponse: BatchDeregisterTargetsResponse,
    SetLoadBalancerSecurityGroupsResponse: SetLoadBalancerSecurityGroupsResponse,
    ExtraInfo: ExtraInfo,
    BatchModifyTargetWeightResponse: BatchModifyTargetWeightResponse,
    SetSecurityGroupForLoadbalancersRequest: SetSecurityGroupForLoadbalancersRequest,
    CreateLoadBalancerRequest: CreateLoadBalancerRequest,
    DeleteRuleRequest: DeleteRuleRequest,
    ModifyLoadBalancerAttributesRequest: ModifyLoadBalancerAttributesRequest,
    ModifyRuleRequest: ModifyRuleRequest,
    DescribeClassicalLBByInstanceIdResponse: DescribeClassicalLBByInstanceIdResponse,
    DescribeBlockIPListResponse: DescribeBlockIPListResponse,
    DescribeRewriteRequest: DescribeRewriteRequest,
    CreateRuleResponse: CreateRuleResponse,
    AssociateTargetGroupsRequest: AssociateTargetGroupsRequest,
    ClassicalTarget: ClassicalTarget,
    RsWeightRule: RsWeightRule,
    DeregisterTargetsFromClassicalLBRequest: DeregisterTargetsFromClassicalLBRequest,
    SetSecurityGroupForLoadbalancersResponse: SetSecurityGroupForLoadbalancersResponse,
    BasicTargetGroupInfo: BasicTargetGroupInfo,
    ModifyTargetWeightResponse: ModifyTargetWeightResponse,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    TargetGroupInstance: TargetGroupInstance,
    DescribeRewriteResponse: DescribeRewriteResponse,
    DescribeTargetGroupInstancesRequest: DescribeTargetGroupInstancesRequest,
    RegisterTargetGroupInstancesResponse: RegisterTargetGroupInstancesResponse,
    ClassicalTargetInfo: ClassicalTargetInfo,
    DescribeTargetsRequest: DescribeTargetsRequest,
    ZoneInfo: ZoneInfo,
    RegisterTargetsWithClassicalLBResponse: RegisterTargetsWithClassicalLBResponse,
    DescribeTargetGroupsResponse: DescribeTargetGroupsResponse,
    LoadBalancerHealth: LoadBalancerHealth,
    BlockedIP: BlockedIP,
    ModifyRuleResponse: ModifyRuleResponse,
    DescribeClassicalLBTargetsRequest: DescribeClassicalLBTargetsRequest,
    DescribeListenersResponse: DescribeListenersResponse,
    AutoRewriteRequest: AutoRewriteRequest,
    ModifyTargetGroupInstancesWeightResponse: ModifyTargetGroupInstancesWeightResponse,
    DescribeTargetGroupsRequest: DescribeTargetGroupsRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    DescribeTargetHealthRequest: DescribeTargetHealthRequest,
    Target: Target,
    DescribeBlockIPListRequest: DescribeBlockIPListRequest,
    DescribeClassicalLBHealthStatusResponse: DescribeClassicalLBHealthStatusResponse,
    RuleHealth: RuleHealth,
    Listener: Listener,
    ModifyLoadBalancerAttributesResponse: ModifyLoadBalancerAttributesResponse,
    RegisterTargetsWithClassicalLBRequest: RegisterTargetsWithClassicalLBRequest,
    ModifyDomainAttributesResponse: ModifyDomainAttributesResponse,
    ReplaceCertForLoadBalancersResponse: ReplaceCertForLoadBalancersResponse,
    ModifyListenerRequest: ModifyListenerRequest,
    DeregisterTargetGroupInstancesResponse: DeregisterTargetGroupInstancesResponse,
    RegisterTargetsRequest: RegisterTargetsRequest,
    HealthCheck: HealthCheck,
    AssociateTargetGroupsResponse: AssociateTargetGroupsResponse,
    DeleteListenerRequest: DeleteListenerRequest,
    ClassicalHealth: ClassicalHealth,
    ModifyTargetPortResponse: ModifyTargetPortResponse,
    TargetGroupBackend: TargetGroupBackend,
    DescribeClassicalLBByInstanceIdRequest: DescribeClassicalLBByInstanceIdRequest,
    ManualRewriteResponse: ManualRewriteResponse,
    ModifyBlockIPListRequest: ModifyBlockIPListRequest,
    ModifyBlockIPListResponse: ModifyBlockIPListResponse,
    ExclusiveCluster: ExclusiveCluster,
    DescribeClassicalLBHealthStatusRequest: DescribeClassicalLBHealthStatusRequest,
    ModifyDomainRequest: ModifyDomainRequest,
    Backend: Backend,
    LBChargePrepaid: LBChargePrepaid,
    ClassicalListener: ClassicalListener,
    CertificateInput: CertificateInput,
    CreateListenerResponse: CreateListenerResponse,
    CreateTargetGroupResponse: CreateTargetGroupResponse,
    ClassicalLoadBalancerInfo: ClassicalLoadBalancerInfo,
    RuleOutput: RuleOutput,
    DeleteLoadBalancerRequest: DeleteLoadBalancerRequest,
    CreateRuleRequest: CreateRuleRequest,
    ModifyTargetGroupInstancesPortResponse: ModifyTargetGroupInstancesPortResponse,
    RuleTargets: RuleTargets,
    BatchDeregisterTargetsRequest: BatchDeregisterTargetsRequest,
    DeregisterTargetGroupInstancesRequest: DeregisterTargetGroupInstancesRequest,
    ManualRewriteRequest: ManualRewriteRequest,
    ModifyListenerResponse: ModifyListenerResponse,
    DescribeTargetHealthResponse: DescribeTargetHealthResponse,
    DescribeTargetGroupInstancesResponse: DescribeTargetGroupInstancesResponse,
    CreateTargetGroupRequest: CreateTargetGroupRequest,
    ClusterItem: ClusterItem,
    CreateListenerRequest: CreateListenerRequest,
    DisassociateTargetGroupsRequest: DisassociateTargetGroupsRequest,
    Filter: Filter,
    ModifyDomainResponse: ModifyDomainResponse,
    RegisterTargetsResponse: RegisterTargetsResponse,
    DeregisterTargetsFromClassicalLBResponse: DeregisterTargetsFromClassicalLBResponse,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    DeleteLoadBalancerResponse: DeleteLoadBalancerResponse,
    AutoRewriteResponse: AutoRewriteResponse,
    DeregisterTargetsResponse: DeregisterTargetsResponse,
    RewriteTarget: RewriteTarget,
    ModifyTargetWeightRequest: ModifyTargetWeightRequest,
    DescribeTargetsResponse: DescribeTargetsResponse,
    BatchModifyTargetWeightRequest: BatchModifyTargetWeightRequest,
    DeleteRewriteResponse: DeleteRewriteResponse,
    BatchTarget: BatchTarget,
    TargetRegionInfo: TargetRegionInfo,
    BatchRegisterTargetsResponse: BatchRegisterTargetsResponse,
    ReplaceCertForLoadBalancersRequest: ReplaceCertForLoadBalancersRequest,
    DeleteRuleResponse: DeleteRuleResponse,
    ModifyTargetGroupAttributeRequest: ModifyTargetGroupAttributeRequest,
    ModifyDomainAttributesRequest: ModifyDomainAttributesRequest,
    DeregisterTargetsRequest: DeregisterTargetsRequest,
    CertificateOutput: CertificateOutput,
    ModifyTargetGroupInstancesWeightRequest: ModifyTargetGroupInstancesWeightRequest,
    DeleteTargetGroupsResponse: DeleteTargetGroupsResponse,
    ModifyTargetGroupInstancesPortRequest: ModifyTargetGroupInstancesPortRequest,
    BatchRegisterTargetsRequest: BatchRegisterTargetsRequest,
    ListenerBackend: ListenerBackend,
    RuleInput: RuleInput,
    TagInfo: TagInfo,
    SnatIp: SnatIp,
    DescribeBlockIPTaskResponse: DescribeBlockIPTaskResponse,
    DescribeClassicalLBListenersResponse: DescribeClassicalLBListenersResponse,
    ModifyTargetGroupAttributeResponse: ModifyTargetGroupAttributeResponse,
    DescribeBlockIPTaskRequest: DescribeBlockIPTaskRequest,
    CreateLoadBalancerResponse: CreateLoadBalancerResponse,
    DescribeListenersRequest: DescribeListenersRequest,
    SetLoadBalancerSecurityGroupsRequest: SetLoadBalancerSecurityGroupsRequest,
    DescribeClassicalLBTargetsResponse: DescribeClassicalLBTargetsResponse,
    RewriteLocationMap: RewriteLocationMap,
    ModifyTargetPortRequest: ModifyTargetPortRequest,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    DeleteListenerResponse: DeleteListenerResponse,
    InternetAccessible: InternetAccessible,
    DeleteTargetGroupsRequest: DeleteTargetGroupsRequest,
    DescribeClassicalLBListenersRequest: DescribeClassicalLBListenersRequest,
    TargetHealth: TargetHealth,
    TargetGroupAssociation: TargetGroupAssociation,
    ListenerHealth: ListenerHealth,
    AssociationItem: AssociationItem,
    TargetGroupInfo: TargetGroupInfo,
    RegisterTargetGroupInstancesRequest: RegisterTargetGroupInstancesRequest,
    LoadBalancer: LoadBalancer,

}

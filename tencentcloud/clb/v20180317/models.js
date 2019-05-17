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
         * 要修改端口的后端机器列表
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 后端机器绑定到监听器的新端口
         * @type {number || null}
         */
        this.NewPort = null;

        /**
         * 转发规则的ID
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
         * 转发规则的ID
         * @type {string || null}
         */
        this.LocationId = null;

        /**
         * 要修改权重的后端机器列表
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

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
         * 后端云服务器新的转发权重，取值范围：0~100。
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
        this.LocationId = 'LocationId' in params ? params.LocationId : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

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
         * 负载均衡实例。1：应用型，0：传统型，默认为应用型负载均衡实例。
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * 负载均衡实例的名称，只用来创建一个的时候生效。规则：1-50 个英文、汉字、数字、连接线“-”或下划线“_”。
注意：如果名称与系统中已有负载均衡实例的名称重复的话，则系统将会自动生成此次创建的负载均衡实例的名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡后端实例所属网络 ID，可以通过 DescribeVpcEx 接口获取。 不填则默认为基础网络。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 在私有网络内购买内网负载均衡实例的时候需要指定子网 ID，内网负载均衡实例的 VIP 将从这个子网中产生。其他情况不用填写该字段。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 负载均衡实例所属的项目 ID，可以通过 DescribeProject 接口获取。不填则属于默认项目。
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
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.Forward = 'Forward' in params ? params.Forward : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

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
         * 应用型负载均衡监听器 ID
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
         * 应用型负载均衡监听器 ID
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
         * 规则的请求转发方式
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 会话保持时间
         * @type {number || null}
         */
        this.SessionExpireTime = null;

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
 * 传统型负载均衡后端信息
 * @class
 */
class ClassicalTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发目标的类型，目前仅可取值为 CVM
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 云服务器的唯一 ID，可通过 DescribeInstances 接口返回字段中的 unInstanceId 字段获取
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端云服务器的转发权重，取值范围：0~100，默认为 10。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 云服务器的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 云服务器的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 云服务器实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 云服务器状态
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

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
         * 请求ID，即接口返回的RequestId
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
 * CreateRule返回参数结构体
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
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
 * 传统型后端信息
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
         * 权重 取值为0-100
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
         * 负载均衡监听器端口
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
         * 监听器ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 需要重定向的域名
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
         * 当前健康状态，true：健康，false：不健康。
         * @type {boolean || null}
         */
        this.HealthStatus = null;

        /**
         * Target的实例ID，如 ins-12345678
         * @type {string || null}
         */
        this.TargetId = null;

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
         * 应用型负载均衡监听器 ID
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

    }
}

/**
 * 转发目标，即绑定在负载均衡上的后端机器
 * @class
 */
class Target extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云服务器的唯一 ID，可通过 DescribeInstances 接口返回字段中的 unInstanceId 字段获取
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端云服务器监听端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 转发目标的类型，目前仅可取值为 CVM
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 后端云服务器的转发权重，取值范围：0~100，默认为 10。
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
        this.Port = 'Port' in params ? params.Port : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

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
         * 要注册的后端机器列表，数组长度最大支持20
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 转发规则的ID，当注册机器到七层转发规则时，必须提供此参数或Domain+Url两者之一
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
 * 健康检查信息
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
         * 健康检查的响应超时时间，可选值：2~60，默认值：2，单位：秒。响应超时时间要小于检查间隔时间。
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
         * 健康检查状态码（仅适用于HTTP/HTTPS转发规则）。可选值：1~31，默认 31。
1 表示探测后返回值 1xx 表示健康，2 表示返回 2xx 表示健康，4 表示返回 3xx 表示健康，8 表示返回 4xx 表示健康，16 表示返回 5xx 表示健康。若希望多种码都表示健康，则将相应的值相加。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.HttpCode = null;

        /**
         * 健康检查路径（仅适用于HTTP/HTTPS转发规则）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 健康检查域名（仅适用于HTTP/HTTPS转发规则）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpCheckDomain = null;

        /**
         * 健康检查方法（仅适用于HTTP/HTTPS转发规则），取值为HEAD或GET。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HttpCheckMethod = null;

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
         * 应用型负载均衡实例 ID
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
 * 传统型负载均衡健康状态信息
 * @class
 */
class ClassicalHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云服务器内网 IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * 云服务器端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 负载均衡监听端口
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
         * 后端云服务器新的转发权重，取值范围：0~100。
         * @type {number || null}
         */
        this.Weight = null;

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
         * 要修改权重的后端机器列表
         * @type {Array.<Target> || null}
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
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
         * 应用型负载均衡监听器 ID
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器下的某个旧域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 新域名，	长度限制为：1-80。有三种使用格式：非正则表达式格式，通配符格式，正则表达式格式。非正则表达式格式只能使用字母、数字、‘-’、‘.’。通配符格式的使用 ‘*’ 只能在开头或者结尾。正则表达式以'~'开头。
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
 * 监听器后端绑定机器的详细信息
 * @class
 */
class Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发目标的类型，目前仅可取值为 CVM
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 云服务器的唯一 ID，可通过 DescribeInstances 接口返回字段中的 unInstanceId 字段获取
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端云服务器监听端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 后端云服务器的转发权重，取值范围：0~100，默认为 10。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 云服务器的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 云服务器的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 云服务器实例名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 云服务器被绑定到监听器的时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegisteredTime = null;

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
         * 是否开启了检查：1（开启）、0（关闭）
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
         * 公网固定IP型的 HTTP、HTTPS 协议监听器的轮询方法。wrr 表示按权重轮询，ip_hash 表示根据访问的源 IP 进行一致性哈希方式来分发
         * @type {string || null}
         */
        this.HttpHash = null;

        /**
         * 公网固定IP型的 HTTP、HTTPS 协议监听器的健康检查返回码。具体可参考创建监听器中对该字段的解释
         * @type {number || null}
         */
        this.HttpCode = null;

        /**
         * 公网固定IP型的 HTTP、HTTPS 协议监听器的健康检查路径
         * @type {string || null}
         */
        this.HttpCheckPath = null;

        /**
         * 公网固定IP型的 HTTPS 协议监听器的认证方式
         * @type {string || null}
         */
        this.SSLMode = null;

        /**
         * 公网固定IP型的 HTTPS 协议监听器服务端证书 ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * 公网固定IP型的 HTTPS 协议监听器客户端证书 ID
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
         * 客户端证书的 ID，如果 SSLMode=mutual，监听器如果不填写此项则必须上传客户端证书，包括 CertCaContent，CertCaName。
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
         * 要删除的负载均衡实例 ID数组
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
 * HTTP/HTTPS监听器下的转发规则的机器绑定信息
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
         * 后端机器的信息
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
         * 1：应用型，0：传统型。
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * 负载均衡实例名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 腾讯云为负载均衡实例分配的域名，应用型负载均衡该字段无意义。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 负载均衡实例的 VIP 地址，支持多个。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

        /**
         * 后端云服务器的外网 IP。
         * @type {Array.<string> || null}
         */
        this.BackendPublicIps = null;

        /**
         * 后端云服务器的内网 IP。
         * @type {Array.<string> || null}
         */
        this.BackendPrivateIps = null;

        /**
         * 数据偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回负载均衡个数，默认为 20。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持以下字段：LoadBalancerName，CreateTime，Domain，LoadBalancerType。
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
         * 查询的负载均衡是否绑定后端服务器，0：没有绑定云服务器，1：绑定云服务器，-1：查询全部。
         * @type {number || null}
         */
        this.WithRs = null;

        /**
         * 负载均衡实例所属私有网络，如 vpc-bhqkbhdx，
基础网络不支持通过VpcId查询。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 安全组ID，如 sg-m1cc9123
         * @type {string || null}
         */
        this.SecurityGroup = null;

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
 * DescribeTargets返回参数结构体
 * @class
 */
class DescribeTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器后端绑定的机器信息
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
 * DeregisterTargets请求参数结构体
 * @class
 */
class DeregisterTargetsRequest extends  AbstractModel {
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
         * 要解绑的后端机器列表，数组长度最大支持20
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 转发规则的ID，当从七层转发规则解绑机器时，必须提供此参数或Domain+Url两者之一
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
 * 监听器上注册的后端机器的信息
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
         * 监听器上注册的机器列表（仅适用于TCP/UDP/TCP_SSL监听器）
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
 * CreateLoadBalancer返回参数结构体
 * @class
 */
class CreateLoadBalancerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 由负载均衡实例统一 ID 组成的数组。
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
         * 要查询的应用型负载均衡监听器 ID数组
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
         * 安全组ID构成的数组，一个负载均衡实例最多关联50个安全组，如果要解绑所有安全组，可不传此参数。
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
 * HTTP/HTTPS转发规则（输入）
 * @class
 */
class RuleInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发规则的域名。
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 转发规则的路径。
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
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 证书信息
         * @type {CertificateInput || null}
         */
        this.Certificate = null;

        /**
         * 规则的请求转发方式
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
         * 满足过滤条件的负载均衡实例总数。
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
 * 证书相关信息
 * @class
 */
class CertificateOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 认证类型，unidirectional：单向认证，mutual：双向认证
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
         * 负载均衡监听器ID列表， 范围[1-65535]
         * @type {Array.<string> || null}
         */
        this.ListenerIds = null;

        /**
         * 负载均衡监听的协议, 'TCP', 'UDP', 'HTTP', 'HTTPS'
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 负载均衡监听端口
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
         * 应用型负载均衡标识，1：应用型负载均衡，0：传统型的负载均衡。
         * @type {number || null}
         */
        this.Forward = null;

        /**
         * 负载均衡实例的域名，内网类型负载均衡以及应用型负载均衡实例不提供该字段
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

    }
}

module.exports = {
    DeleteRewriteRequest: DeleteRewriteRequest,
    ModifyTargetPortRequest: ModifyTargetPortRequest,
    SetLoadBalancerSecurityGroupsResponse: SetLoadBalancerSecurityGroupsResponse,
    RsWeightRule: RsWeightRule,
    BatchModifyTargetWeightResponse: BatchModifyTargetWeightResponse,
    CreateLoadBalancerRequest: CreateLoadBalancerRequest,
    DeleteRuleRequest: DeleteRuleRequest,
    ModifyLoadBalancerAttributesRequest: ModifyLoadBalancerAttributesRequest,
    ModifyRuleRequest: ModifyRuleRequest,
    DescribeClassicalLBByInstanceIdResponse: DescribeClassicalLBByInstanceIdResponse,
    DescribeRewriteRequest: DescribeRewriteRequest,
    ClassicalTarget: ClassicalTarget,
    DeregisterTargetsFromClassicalLBRequest: DeregisterTargetsFromClassicalLBRequest,
    ModifyTargetWeightResponse: ModifyTargetWeightResponse,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    DescribeRewriteResponse: DescribeRewriteResponse,
    CreateRuleResponse: CreateRuleResponse,
    ClassicalTargetInfo: ClassicalTargetInfo,
    DescribeTargetsRequest: DescribeTargetsRequest,
    RegisterTargetsWithClassicalLBResponse: RegisterTargetsWithClassicalLBResponse,
    LoadBalancerHealth: LoadBalancerHealth,
    ModifyRuleResponse: ModifyRuleResponse,
    DescribeClassicalLBTargetsRequest: DescribeClassicalLBTargetsRequest,
    DescribeListenersResponse: DescribeListenersResponse,
    AutoRewriteRequest: AutoRewriteRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    DescribeTargetHealthRequest: DescribeTargetHealthRequest,
    TargetHealth: TargetHealth,
    DescribeClassicalLBHealthStatusResponse: DescribeClassicalLBHealthStatusResponse,
    RuleHealth: RuleHealth,
    Listener: Listener,
    ModifyLoadBalancerAttributesResponse: ModifyLoadBalancerAttributesResponse,
    RegisterTargetsWithClassicalLBRequest: RegisterTargetsWithClassicalLBRequest,
    ModifyListenerRequest: ModifyListenerRequest,
    Target: Target,
    RegisterTargetsRequest: RegisterTargetsRequest,
    HealthCheck: HealthCheck,
    DeleteListenerRequest: DeleteListenerRequest,
    ClassicalHealth: ClassicalHealth,
    ModifyTargetPortResponse: ModifyTargetPortResponse,
    DescribeClassicalLBByInstanceIdRequest: DescribeClassicalLBByInstanceIdRequest,
    ManualRewriteResponse: ManualRewriteResponse,
    ModifyTargetWeightRequest: ModifyTargetWeightRequest,
    ModifyDomainRequest: ModifyDomainRequest,
    Backend: Backend,
    ClassicalListener: ClassicalListener,
    CertificateInput: CertificateInput,
    CreateListenerResponse: CreateListenerResponse,
    ClassicalLoadBalancerInfo: ClassicalLoadBalancerInfo,
    RuleOutput: RuleOutput,
    DeleteLoadBalancerRequest: DeleteLoadBalancerRequest,
    CreateRuleRequest: CreateRuleRequest,
    RuleTargets: RuleTargets,
    ManualRewriteRequest: ManualRewriteRequest,
    ModifyListenerResponse: ModifyListenerResponse,
    DescribeTargetHealthResponse: DescribeTargetHealthResponse,
    CreateListenerRequest: CreateListenerRequest,
    RewriteLocationMap: RewriteLocationMap,
    ModifyDomainResponse: ModifyDomainResponse,
    RegisterTargetsResponse: RegisterTargetsResponse,
    DeregisterTargetsFromClassicalLBResponse: DeregisterTargetsFromClassicalLBResponse,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    DeleteLoadBalancerResponse: DeleteLoadBalancerResponse,
    AutoRewriteResponse: AutoRewriteResponse,
    DeregisterTargetsResponse: DeregisterTargetsResponse,
    RewriteTarget: RewriteTarget,
    DescribeTargetsResponse: DescribeTargetsResponse,
    BatchModifyTargetWeightRequest: BatchModifyTargetWeightRequest,
    DeleteRewriteResponse: DeleteRewriteResponse,
    TargetRegionInfo: TargetRegionInfo,
    DeleteRuleResponse: DeleteRuleResponse,
    DeregisterTargetsRequest: DeregisterTargetsRequest,
    ListenerBackend: ListenerBackend,
    TagInfo: TagInfo,
    DescribeClassicalLBListenersResponse: DescribeClassicalLBListenersResponse,
    DescribeClassicalLBHealthStatusRequest: DescribeClassicalLBHealthStatusRequest,
    CreateLoadBalancerResponse: CreateLoadBalancerResponse,
    DescribeListenersRequest: DescribeListenersRequest,
    SetLoadBalancerSecurityGroupsRequest: SetLoadBalancerSecurityGroupsRequest,
    DescribeClassicalLBTargetsResponse: DescribeClassicalLBTargetsResponse,
    RuleInput: RuleInput,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    DeleteListenerResponse: DeleteListenerResponse,
    CertificateOutput: CertificateOutput,
    DescribeClassicalLBListenersRequest: DescribeClassicalLBListenersRequest,
    ListenerHealth: ListenerHealth,
    LoadBalancer: LoadBalancer,

}

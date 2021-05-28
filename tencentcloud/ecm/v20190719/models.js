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
 * IP直通相关的信息
 * @class
 */
class RunEIPDirectServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开通IP直通。取值范围：
TRUE：表示开通IP直通
FALSE：表示不开通IP直通
默认取值：TRUE。
windows镜像目前不支持IP直通。
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

    }
}

/**
 * DescribeTaskResult返回参数结构体
 * @class
 */
class DescribeTaskResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID。
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 执行结果，包括"SUCCESS", "FAILED", "RUNNING"
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IPv6地址信息。
 * @class
 */
class Ipv6Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * IPv6地址，形如：3402:4e00:20:100:0:8cd9:2a67:71f3
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 是否是主IP。
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * EIP实例ID，形如：eip-hxlqja90。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 公网IP是否被封堵。
         * @type {boolean || null}
         */
        this.IsWanIpBlocked = null;

        /**
         * IPv6地址状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Address = 'Address' in params ? params.Address : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

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
 * DescribePeakBaseOverview请求参数结构体
 * @class
 */
class DescribePeakBaseOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期，不应与当前日期间隔超过90天。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天，不应与当前日期间隔超过90天。当开始与结束间隔不超过30天时返回1小时粒度的数据，否则返回3小时粒度的数据。
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
 * 安全组关联的资源统计
 * @class
 */
class SecurityGroupAssociationStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * ECM实例数。
         * @type {number || null}
         */
        this.ECM = null;

        /**
         * ECM模块数。
         * @type {number || null}
         */
        this.Module = null;

        /**
         * 弹性网卡实例数。
         * @type {number || null}
         */
        this.ENI = null;

        /**
         * 被安全组引用数。
         * @type {number || null}
         */
        this.SG = null;

        /**
         * 负载均衡实例数。
         * @type {number || null}
         */
        this.CLB = null;

        /**
         * 全量实例的绑定统计。
         * @type {Array.<InstanceStatistic> || null}
         */
        this.InstanceStatistics = null;

        /**
         * 所有资源的总计数（不包含被安全组引用数）。
         * @type {number || null}
         */
        this.TotalCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.ECM = 'ECM' in params ? params.ECM : null;
        this.Module = 'Module' in params ? params.Module : null;
        this.ENI = 'ENI' in params ? params.ENI : null;
        this.SG = 'SG' in params ? params.SG : null;
        this.CLB = 'CLB' in params ? params.CLB : null;

        if (params.InstanceStatistics) {
            this.InstanceStatistics = new Array();
            for (let z in params.InstanceStatistics) {
                let obj = new InstanceStatistic();
                obj.deserialize(params.InstanceStatistics[z]);
                this.InstanceStatistics.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    }
}

/**
 * 用户安全组配额限制
 * @class
 */
class SecurityGroupLimitSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可创建安全组总数
         * @type {number || null}
         */
        this.SecurityGroupLimit = null;

        /**
         * 安全组下的最大规则数
         * @type {number || null}
         */
        this.SecurityGroupPolicyLimit = null;

        /**
         * 安全组下嵌套安全组规则数
         * @type {number || null}
         */
        this.ReferedSecurityGroupLimit = null;

        /**
         * 单安全组关联实例数
         * @type {number || null}
         */
        this.SecurityGroupInstanceLimit = null;

        /**
         * 实例关联安全组数
         * @type {number || null}
         */
        this.InstanceSecurityGroupLimit = null;

        /**
         * 单安全组关联的模块数
         * @type {number || null}
         */
        this.SecurityGroupModuleLimit = null;

        /**
         * 模块关联的安全组数
         * @type {number || null}
         */
        this.ModuleSecurityGroupLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupLimit = 'SecurityGroupLimit' in params ? params.SecurityGroupLimit : null;
        this.SecurityGroupPolicyLimit = 'SecurityGroupPolicyLimit' in params ? params.SecurityGroupPolicyLimit : null;
        this.ReferedSecurityGroupLimit = 'ReferedSecurityGroupLimit' in params ? params.ReferedSecurityGroupLimit : null;
        this.SecurityGroupInstanceLimit = 'SecurityGroupInstanceLimit' in params ? params.SecurityGroupInstanceLimit : null;
        this.InstanceSecurityGroupLimit = 'InstanceSecurityGroupLimit' in params ? params.InstanceSecurityGroupLimit : null;
        this.SecurityGroupModuleLimit = 'SecurityGroupModuleLimit' in params ? params.SecurityGroupModuleLimit : null;
        this.ModuleSecurityGroupLimit = 'ModuleSecurityGroupLimit' in params ? params.ModuleSecurityGroupLimit : null;

    }
}

/**
 * DisassociateAddress返回参数结构体
 * @class
 */
class DisassociateAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
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
 * 用于描述实例的统计信息
 * @class
 */
class InstanceStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的类型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 实例的个数
         * @type {number || null}
         */
        this.InstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

    }
}

/**
 * CreateRoutes请求参数结构体
 * @class
 */
class CreateRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 要创建的路由策略对象。
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

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
         * 负载均衡实例ID数组
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 安全组ID，如 esg-12345678
         * @type {string || null}
         */
        this.SecurityGroup = null;

        /**
         * ADD 绑定安全组；
DEL 解绑安全组
         * @type {string || null}
         */
        this.OperationType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;
        this.OperationType = 'OperationType' in params ? params.OperationType : null;

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
         * ECM区域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 负载均衡实例的网络类型。目前只支持传入OPEN，表示公网属性。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

        /**
         * CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通。
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * 负载均衡实例的名称，只在创建一个实例的时候才会生效。规则：1-50 个英文、汉字、数字、连接线“-”或下划线“_”。
注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡后端目标设备所属的网络 ID，如vpc-12345678。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 创建负载均衡的个数，默认值 1。
         * @type {number || null}
         */
        this.Number = null;

        /**
         * 负载均衡的带宽限制等信息。
         * @type {LoadBalancerInternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 标签。
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 安全组。
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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Number = 'Number' in params ? params.Number : null;

        if (params.InternetAccessible) {
            let obj = new LoadBalancerInternetAccessible();
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
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;

    }
}

/**
 * DescribeHaVips返回参数结构体
 * @class
 */
class DescribeHaVipsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * HAVIP对象数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<HaVip> || null}
         */
        this.HaVipSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.HaVipSet) {
            this.HaVipSet = new Array();
            for (let z in params.HaVipSet) {
                let obj = new HaVip();
                obj.deserialize(params.HaVipSet[z]);
                this.HaVipSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyModuleSecurityGroups请求参数结构体
 * @class
 */
class ModifyModuleSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组列表。不超过5个。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdSet = null;

        /**
         * 模块id。
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIdSet = 'SecurityGroupIdSet' in params ? params.SecurityGroupIdSet : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * 实例的网络相关信息。
 * @class
 */
class Internet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的内网相关信息列表。顺序为主网卡在前，辅助网卡按绑定先后顺序排列。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrivateIPAddressInfo> || null}
         */
        this.PrivateIPAddressSet = null;

        /**
         * 实例的公网相关信息列表。顺序为主网卡在前，辅助网卡按绑定先后顺序排列。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PublicIPAddressInfo> || null}
         */
        this.PublicIPAddressSet = null;

        /**
         * 实例网络相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceNetworkInfo> || null}
         */
        this.InstanceNetworkInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PrivateIPAddressSet) {
            this.PrivateIPAddressSet = new Array();
            for (let z in params.PrivateIPAddressSet) {
                let obj = new PrivateIPAddressInfo();
                obj.deserialize(params.PrivateIPAddressSet[z]);
                this.PrivateIPAddressSet.push(obj);
            }
        }

        if (params.PublicIPAddressSet) {
            this.PublicIPAddressSet = new Array();
            for (let z in params.PublicIPAddressSet) {
                let obj = new PublicIPAddressInfo();
                obj.deserialize(params.PublicIPAddressSet[z]);
                this.PublicIPAddressSet.push(obj);
            }
        }

        if (params.InstanceNetworkInfoSet) {
            this.InstanceNetworkInfoSet = new Array();
            for (let z in params.InstanceNetworkInfoSet) {
                let obj = new InstanceNetworkInfo();
                obj.deserialize(params.InstanceNetworkInfoSet[z]);
                this.InstanceNetworkInfoSet.push(obj);
            }
        }

    }
}

/**
 * DescribeModule返回参数结构体
 * @class
 */
class DescribeModuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的模块数量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 模块详情信息的列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ModuleItem> || null}
         */
        this.ModuleItemSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ModuleItemSet) {
            this.ModuleItemSet = new Array();
            for (let z in params.ModuleItemSet) {
                let obj = new ModuleItem();
                obj.deserialize(params.ModuleItemSet[z]);
                this.ModuleItemSet.push(obj);
            }
        }
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
         * 网络计费及带宽相关参数
         * @type {LoadBalancerInternetAccessible || null}
         */
        this.InternetChargeInfo = null;

        /**
         * Target是否放通来自ELB的流量。开启放通（true）：只验证ELB上的安全组；不开启放通（false）：需同时验证ELB和后端实例上的安全组。
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
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;

        if (params.InternetChargeInfo) {
            let obj = new LoadBalancerInternetAccessible();
            obj.deserialize(params.InternetChargeInfo)
            this.InternetChargeInfo = obj;
        }
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;

    }
}

/**
 * DeleteSecurityGroupPolicies请求参数结构体
 * @class
 */
class DeleteSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组规则集合。一个请求中只能删除单个方向的一条或多条规则。支持指定索引（PolicyIndex） 匹配删除和安全组规则匹配删除两种方式，一个请求中只能使用一种匹配方式。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * 镜像任务
 * @class
 */
class ImageTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像导入状态， PENDING, PROCESSING, SUCCESS, FAILED
         * @type {string || null}
         */
        this.State = null;

        /**
         * 导入失败(FAILED)时， 说明失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 创建时间
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
        this.State = 'State' in params ? params.State : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 省份信息
 * @class
 */
class Province extends  AbstractModel {
    constructor(){
        super();

        /**
         * 省份Id
         * @type {string || null}
         */
        this.ProvinceId = null;

        /**
         * 省份名称
         * @type {string || null}
         */
        this.ProvinceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProvinceId = 'ProvinceId' in params ? params.ProvinceId : null;
        this.ProvinceName = 'ProvinceName' in params ? params.ProvinceName : null;

    }
}

/**
 * DescribeMonthPeakNetwork返回参数结构体
 * @class
 */
class DescribeMonthPeakNetworkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MonthNetwork> || null}
         */
        this.MonthNetWorkData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MonthNetWorkData) {
            this.MonthNetWorkData = new Array();
            for (let z in params.MonthNetWorkData) {
                let obj = new MonthNetwork();
                obj.deserialize(params.MonthNetWorkData[z]);
                this.MonthNetWorkData.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyModuleConfig返回参数结构体
 * @class
 */
class ModifyModuleConfigResponse extends  AbstractModel {
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
 * 网络硬盘上下限数据
 * @class
 */
class NetworkStorageRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络带宽上限
         * @type {number || null}
         */
        this.MaxBandwidth = null;

        /**
         * 数据盘上限
         * @type {number || null}
         */
        this.MaxSystemDiskSize = null;

        /**
         * 网络带宽下限
         * @type {number || null}
         */
        this.MinBandwidth = null;

        /**
         * 数据盘下限
         * @type {number || null}
         */
        this.MinSystemDiskSize = null;

        /**
         * 最大数据盘大小
         * @type {number || null}
         */
        this.MaxDataDiskSize = null;

        /**
         * 最小数据盘大小
         * @type {number || null}
         */
        this.MinDataDiskSize = null;

        /**
         * 建议带宽
         * @type {number || null}
         */
        this.SuggestBandwidth = null;

        /**
         * 建议硬盘大小
         * @type {number || null}
         */
        this.SuggestDataDiskSize = null;

        /**
         * 建议系统盘大小
         * @type {number || null}
         */
        this.SuggestSystemDiskSize = null;

        /**
         * Cpu核数峰值
         * @type {number || null}
         */
        this.MaxVcpu = null;

        /**
         * Cpu核最小值
         * @type {number || null}
         */
        this.MinVcpu = null;

        /**
         * 单次请求最大cpu核数
         * @type {number || null}
         */
        this.MaxVcpuPerReq = null;

        /**
         * 带宽步长
         * @type {number || null}
         */
        this.PerBandwidth = null;

        /**
         * 数据盘步长
         * @type {number || null}
         */
        this.PerDataDisk = null;

        /**
         * 总模块数量
         * @type {number || null}
         */
        this.MaxModuleNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxBandwidth = 'MaxBandwidth' in params ? params.MaxBandwidth : null;
        this.MaxSystemDiskSize = 'MaxSystemDiskSize' in params ? params.MaxSystemDiskSize : null;
        this.MinBandwidth = 'MinBandwidth' in params ? params.MinBandwidth : null;
        this.MinSystemDiskSize = 'MinSystemDiskSize' in params ? params.MinSystemDiskSize : null;
        this.MaxDataDiskSize = 'MaxDataDiskSize' in params ? params.MaxDataDiskSize : null;
        this.MinDataDiskSize = 'MinDataDiskSize' in params ? params.MinDataDiskSize : null;
        this.SuggestBandwidth = 'SuggestBandwidth' in params ? params.SuggestBandwidth : null;
        this.SuggestDataDiskSize = 'SuggestDataDiskSize' in params ? params.SuggestDataDiskSize : null;
        this.SuggestSystemDiskSize = 'SuggestSystemDiskSize' in params ? params.SuggestSystemDiskSize : null;
        this.MaxVcpu = 'MaxVcpu' in params ? params.MaxVcpu : null;
        this.MinVcpu = 'MinVcpu' in params ? params.MinVcpu : null;
        this.MaxVcpuPerReq = 'MaxVcpuPerReq' in params ? params.MaxVcpuPerReq : null;
        this.PerBandwidth = 'PerBandwidth' in params ? params.PerBandwidth : null;
        this.PerDataDisk = 'PerDataDisk' in params ? params.PerDataDisk : null;
        this.MaxModuleNum = 'MaxModuleNum' in params ? params.MaxModuleNum : null;

    }
}

/**
 * ModifyModuleName返回参数结构体
 * @class
 */
class ModifyModuleNameResponse extends  AbstractModel {
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
 * DescribeNetworkInterfaces请求参数结构体
 * @class
 */
class DescribeNetworkInterfacesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。
         * @type {Array.<string> || null}
         */
        this.NetworkInterfaceIds = null;

        /**
         * 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。
network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。
attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ins-3nqpdn3i。
groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。
network-interface-name - String - （过滤条件）网卡实例名称。
network-interface-description - String - （过滤条件）网卡实例描述。
address-ip - String - （过滤条件）内网IPv4地址。
tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2
tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例3。
is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；次过滤参数为提供时，同时过滤主网卡和辅助网卡。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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
         * ECM 地域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceIds = 'NetworkInterfaceIds' in params ? params.NetworkInterfaceIds : null;

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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * DescribeSubnets请求参数结构体
 * @class
 */
class DescribeSubnetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * 过滤条件，参数不支持同时指定SubnetIds和Filters。
subnet-id - String - Subnet实例名称。
subnet-name - String - 子网名称。只支持单值的模糊查询。
cidr-block - String - 子网网段，形如: 192.168.1.0 。只支持单值的模糊查询。
vpc-id - String - VPC实例ID，形如：vpc-f49l6u0z。
vpc-cidr-block  - String - vpc网段，形如: 192.168.1.0 。只支持单值的模糊查询。
region - String - ECM地域
zone - String - 可用区。
tag-key - String -是否必填：否- 按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - 按照标签键值对进行过滤。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {string || null}
         */
        this.Limit = null;

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 排序方式：time时间倒序, default按照网络规划排序
         * @type {string || null}
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
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;

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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要绑定的安全组ID，类似esg-efil73jd，只支持绑定单个安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 被绑定的实例ID，类似ein-lesecurk，支持指定多个实例，每次请求批量实例的上限为100。
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * StartInstances请求参数结构体
 * @class
 */
class StartInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待开启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * 镜像限制配置
 * @class
 */
class ImageLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的最大镜像大小，包括可导入的自定义镜像大小，中心云镜像大小，单位为GB。
         * @type {number || null}
         */
        this.MaxImageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MaxImageSize = 'MaxImageSize' in params ? params.MaxImageSize : null;

    }
}

/**
 * HAVIP对象。
 * @class
 */
class HaVip extends  AbstractModel {
    constructor(){
        super();

        /**
         * HAVIP的ID，是HAVIP的唯一标识。
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * HAVIP名称。
         * @type {string || null}
         */
        this.HaVipName = null;

        /**
         * 虚拟IP地址。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * HAVIP所在私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * HAVIP所在子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * HAVIP关联弹性网卡ID。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 被绑定的实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 绑定EIP。
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * 状态：
AVAILABLE：运行中。
UNBIND：未绑定。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 使用havip的业务标识。
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
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.State = 'State' in params ? params.State : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Business = 'Business' in params ? params.Business : null;

    }
}

/**
 * 路由冲突对象
 * @class
 */
class RouteConflict extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 要检查的与之冲突的目的端
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 冲突的路由策略列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Route> || null}
         */
        this.ConflictSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;

        if (params.ConflictSet) {
            this.ConflictSet = new Array();
            for (let z in params.ConflictSet) {
                let obj = new Route();
                obj.deserialize(params.ConflictSet[z]);
                this.ConflictSet.push(obj);
            }
        }

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
 * 描述EIP配额信息
 * @class
 */
class EipQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配额名称，取值范围：
TOTAL_EIP_QUOTA：用户当前地域下EIP的配额数；
DAILY_EIP_APPLY：用户当前地域下今日申购次数；
DAILY_PUBLIC_IP_ASSIGN：用户当前地域下，重新分配公网 IP次数。
         * @type {string || null}
         */
        this.QuotaId = null;

        /**
         * 当前数量
         * @type {number || null}
         */
        this.QuotaCurrent = null;

        /**
         * 配额数量
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
 * DeleteSubnet返回参数结构体
 * @class
 */
class DeleteSubnetResponse extends  AbstractModel {
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
 * ModifyAddressesBandwidth返回参数结构体
 * @class
 */
class ModifyAddressesBandwidthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务TaskId。
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
 * DescribeSubnets返回参数结构体
 * @class
 */
class DescribeSubnetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 子网对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 标签信息。
 * @class
 */
class Tag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的键。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签的值。
注意：此字段可能返回 null，表示取不到有效值。
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
 * RunInstances请求参数结构体
 * @class
 */
class RunInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要创建实例的可用区及创建数目及运营商的列表。在单次请求的过程中，单个region下的请求创建实例数上限为100
         * @type {Array.<ZoneInstanceCountISP> || null}
         */
        this.ZoneInstanceCountISPSet = null;

        /**
         * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? / ]中的特殊符。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? /]中的特殊符号。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 公网出带宽上限，单位：Mbps。
1.如果未传该参数或者传的值为0，则使用模块下的默认值。
2.如果未传该参数或者传的值为0且未指定模块，则使用InternetMaxBandwidthIn的值
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 模块ID。如果未传该参数，则必须传ImageId，InstanceType，DataDiskSize，InternetMaxBandwidthOut参数
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 镜像ID。如果未传该参数或者传的值为空，则使用模块下的默认值
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 实例显示名称。
不指定实例显示名称则默认显示‘未命名’。
购买多台实例，如果指定模式串{R:x}，表示生成数字[x, x+n-1]，其中n表示购买实例的数量，例如server\_{R:3}，购买1台时，实例显示名称为server\_3；购买2台时，实例显示名称分别为server\_3，server\_4。
支持指定多个模式串{R:x}。
购买多台实例，如果不指定模式串，则在实例显示名称添加后缀1、2...n，其中n表示购买实例的数量，例如server_，购买2台时，实例显示名称分别为server\_1，server\_2。
如果购买的实例属于不同的地域或运营商，则上述规则在每个地域和运营商内独立计数。
最多支持60个字符（包含模式串）。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 主机名称
点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。
Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。
其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
         * @type {string || null}
         */
        this.HostName = null;

        /**
         * 用于保证请求幂等性的字符串。目前为保留参数，请勿使用。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 标签列表
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 机型。如果未传该参数或者传的值为空，则使用模块下的默认值
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 数据盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
         * @type {number || null}
         */
        this.DataDiskSize = null;

        /**
         * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 系统盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * 公网入带宽上限，单位：Mbps。
1.如果未传该参数或者传的值为0，则使用对应模块的默认值。
2.如果未传该参数或者传的值为0且未指定模块，则使用InternetMaxBandwidthOut
         * @type {number || null}
         */
        this.InternetMaxBandwidthIn = null;

        /**
         * 实例计费类型。其中：
0，按资源维度后付费，计算当日用量峰值，例如CPU，内存，硬盘等，仅适用于非GNR系列机型；
1，按小时后付费，单价：xx元/实例/小时，仅适用于GNR机型，如需开通该计费方式请提工单申请；
2，按月后付费，单价：xx元/实例/月，仅适用于GNR机型；
该字段不填时，非GNR机型会默认选择0；GNR机型默认选择2。
         * @type {number || null}
         */
        this.InstanceChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInstanceCountISPSet) {
            this.ZoneInstanceCountISPSet = new Array();
            for (let z in params.ZoneInstanceCountISPSet) {
                let obj = new ZoneInstanceCountISP();
                obj.deserialize(params.ZoneInstanceCountISPSet[z]);
                this.ZoneInstanceCountISPSet.push(obj);
            }
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.HostName = 'HostName' in params ? params.HostName : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DataDiskSize = 'DataDiskSize' in params ? params.DataDiskSize : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.InternetMaxBandwidthIn = 'InternetMaxBandwidthIn' in params ? params.InternetMaxBandwidthIn : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

    }
}

/**
 * ReleaseAddresses请求参数结构体
 * @class
 */
class ReleaseAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID 列表。
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

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
         * 区域。如果不传则默认查询所有区域。
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 负载均衡实例 ID。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerIds = null;

        /**
         * 负载均衡实例的名称。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡实例的 VIP 地址，支持多个。
         * @type {Array.<string> || null}
         */
        this.LoadBalancerVips = null;

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
         * 负载均衡是否绑定后端服务，0：没有绑定后端服务，1：绑定后端服务，-1：查询全部。 
如果不传则默认查询全部。
         * @type {number || null}
         */
        this.WithBackend = null;

        /**
         * 负载均衡实例所属私有网络唯一ID，如 vpc-bhqkbhdx。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。详细的过滤条件如下：
tag-key - String - 是否必填：否 - （过滤条件）按照标签的键过滤。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 安全组。
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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.BackendPrivateIps = 'BackendPrivateIps' in params ? params.BackendPrivateIps : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.WithBackend = 'WithBackend' in params ? params.WithBackend : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.SecurityGroup = 'SecurityGroup' in params ? params.SecurityGroup : null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的实例相关信息列表的长度。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的实例相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Instance> || null}
         */
        this.InstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new Instance();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMonthPeakNetwork请求参数结构体
 * @class
 */
class DescribeMonthPeakNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 月份时间(xxxx-xx) 如2021-03,默认取当前时间的上一个月份
         * @type {string || null}
         */
        this.Month = null;

        /**
         * 过滤条件
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
        this.Month = 'Month' in params ? params.Month : null;

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
 * ImportImage请求参数结构体
 * @class
 */
class ImportImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像的Id。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像的描述。
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 源地域
         * @type {string || null}
         */
        this.SourceRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.SourceRegion = 'SourceRegion' in params ? params.SourceRegion : null;

    }
}

/**
 * ModifyModuleSecurityGroups返回参数结构体
 * @class
 */
class ModifyModuleSecurityGroupsResponse extends  AbstractModel {
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
 * 镜像来源信息
 * @class
 */
class SrcImage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像id
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 系统名称
         * @type {string || null}
         */
        this.ImageOsName = null;

        /**
         * 镜像描述
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 区域ID
         * @type {number || null}
         */
        this.RegionID = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 来源实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 来源实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 来源镜像类型
         * @type {string || null}
         */
        this.ImageType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageOsName = 'ImageOsName' in params ? params.ImageOsName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionID = 'RegionID' in params ? params.RegionID : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;

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
 * 机型配置
 * @class
 */
class InstanceTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型族配置信息
         * @type {InstanceFamilyConfig || null}
         */
        this.InstanceFamilyConfig = null;

        /**
         * 机型
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.Vcpu = null;

        /**
         * 内存大小
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 主频
         * @type {string || null}
         */
        this.Frequency = null;

        /**
         * 处理器型号
         * @type {string || null}
         */
        this.CpuModelName = null;

        /**
         * 机型族类别配置信息
         * @type {InstanceFamilyTypeConfig || null}
         */
        this.InstanceFamilyTypeConfig = null;

        /**
         * 机型额外信息 是一个json字符串，如果存在则表示特殊机型，格式如下：{"dataDiskSize":3200,"systemDiskSize":60, "systemDiskSizeShow":"系统盘默认60G","dataDiskSizeShow":"本地NVMe SSD 硬盘3200 GB"}
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * GPU卡数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Vgpu = null;

        /**
         * GPU型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GpuModelName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceFamilyConfig) {
            let obj = new InstanceFamilyConfig();
            obj.deserialize(params.InstanceFamilyConfig)
            this.InstanceFamilyConfig = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.Vcpu = 'Vcpu' in params ? params.Vcpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Frequency = 'Frequency' in params ? params.Frequency : null;
        this.CpuModelName = 'CpuModelName' in params ? params.CpuModelName : null;

        if (params.InstanceFamilyTypeConfig) {
            let obj = new InstanceFamilyTypeConfig();
            obj.deserialize(params.InstanceFamilyTypeConfig)
            this.InstanceFamilyTypeConfig = obj;
        }
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;
        this.Vgpu = 'Vgpu' in params ? params.Vgpu : null;
        this.GpuModelName = 'GpuModelName' in params ? params.GpuModelName : null;

    }
}

/**
 * DescribeNode返回参数结构体
 * @class
 */
class DescribeNodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点详细信息的列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Node> || null}
         */
        this.NodeSet = null;

        /**
         * 所有的节点数量。
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

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new Node();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RemovePrivateIpAddresses返回参数结构体
 * @class
 */
class RemovePrivateIpAddressesResponse extends  AbstractModel {
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
 * DescribeDefaultSubnet返回参数结构体
 * @class
 */
class DescribeDefaultSubnetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认子网信息，若无子网，则为空数据。
         * @type {Subnet || null}
         */
        this.Subnet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Subnet) {
            let obj = new Subnet();
            obj.deserialize(params.Subnet)
            this.Subnet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReplaceRouteTableAssociation请求参数结构体
 * @class
 */
class ReplaceRouteTableAssociationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID，例如：subnet-3x5lf5q0。可通过DescribeSubnets接口查询。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * ReplaceSecurityGroupPolicy请求参数结构体
 * @class
 */
class ReplaceSecurityGroupPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组规则集合对象。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

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
 * 节点信息
 * @class
 */
class Node extends  AbstractModel {
    constructor(){
        super();

        /**
         * zone信息
         * @type {ZoneInfo || null}
         */
        this.ZoneInfo = null;

        /**
         * 国家信息
         * @type {Country || null}
         */
        this.Country = null;

        /**
         * 区域信息
         * @type {Area || null}
         */
        this.Area = null;

        /**
         * 省份信息
         * @type {Province || null}
         */
        this.Province = null;

        /**
         * 城市信息
         * @type {City || null}
         */
        this.City = null;

        /**
         * Region信息
         * @type {RegionInfo || null}
         */
        this.RegionInfo = null;

        /**
         * 运营商列表
         * @type {Array.<ISP> || null}
         */
        this.ISPSet = null;

        /**
         * 运营商数量
         * @type {number || null}
         */
        this.ISPNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }

        if (params.Country) {
            let obj = new Country();
            obj.deserialize(params.Country)
            this.Country = obj;
        }

        if (params.Area) {
            let obj = new Area();
            obj.deserialize(params.Area)
            this.Area = obj;
        }

        if (params.Province) {
            let obj = new Province();
            obj.deserialize(params.Province)
            this.Province = obj;
        }

        if (params.City) {
            let obj = new City();
            obj.deserialize(params.City)
            this.City = obj;
        }

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }

        if (params.ISPSet) {
            this.ISPSet = new Array();
            for (let z in params.ISPSet) {
                let obj = new ISP();
                obj.deserialize(params.ISPSet[z]);
                this.ISPSet.push(obj);
            }
        }
        this.ISPNum = 'ISPNum' in params ? params.ISPNum : null;

    }
}

/**
 * DescribeCustomImageTask返回参数结构体
 * @class
 */
class DescribeCustomImageTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 导入任务详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ImageTask> || null}
         */
        this.ImageTaskSet = null;

        /**
         * 总数
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

        if (params.ImageTaskSet) {
            this.ImageTaskSet = new Array();
            for (let z in params.ImageTaskSet) {
                let obj = new ImageTask();
                obj.deserialize(params.ImageTaskSet[z]);
                this.ImageTaskSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组对象
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如：esg-ohuuioma。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * 安全组备注，最多100个字符。
         * @type {string || null}
         */
        this.SecurityGroupDesc = null;

        /**
         * 是否是默认安全组，默认安全组不支持删除。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 安全组创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 标签键值对。
         * @type {Array.<Tag> || null}
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
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupDesc = 'SecurityGroupDesc' in params ? params.SecurityGroupDesc : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * DeleteSubnet请求参数结构体
 * @class
 */
class DeleteSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * DescribeModule请求参数结构体
 * @class
 */
class DescribeModuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
module-name - string - 是否必填：否 - （过滤条件）按照模块名称过滤。
module-id - string - 是否必填：否 - （过滤条件）按照模块ID过滤。
image-id      String      是否必填：否      （过滤条件）按照镜像ID过滤。
instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
security-group-id - string 是否必填：否 - （过滤条件）按照模块绑定的安全组id过滤。
每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定排序字段。目前支持的可选值如下
instance-num 按实例数量排序。
node-num 按节点数量排序。
timestamp 按实例创建时间排序。
如果不传，默认按实例创建时间排序
         * @type {string || null}
         */
        this.OrderByField = null;

        /**
         * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
         * @type {number || null}
         */
        this.OrderDirection = null;

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
        this.OrderByField = 'OrderByField' in params ? params.OrderByField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

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
         * 任务描述
         * @type {Array.<TaskInput> || null}
         */
        this.TaskSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskInput();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }

    }
}

/**
 * CreateNetworkInterface请求参数结构体
 * @class
 */
class CreateNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 弹性网卡名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ECM 地域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡描述，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * 新申请的内网IP地址个数，内网IP地址个数总和不能超过配额数。
         * @type {number || null}
         */
        this.SecondaryPrivateIpAddressCount = null;

        /**
         * 指定绑定的安全组，例如：['sg-1dd51d']。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 指定的内网IP信息，单次最多指定10个。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

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
 * CreateModule返回参数结构体
 * @class
 */
class CreateModuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID，创建模块成功后分配给该模块的ID。
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RebootInstances请求参数结构体
 * @class
 */
class RebootInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待重启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 是否在正常重启失败后选择强制重启实例。取值范围：
TRUE：表示在正常重启失败后进行强制重启；
FALSE：表示在正常重启失败后不进行强制重启；
默认取值：FALSE。
         * @type {boolean || null}
         */
        this.ForceReboot = null;

        /**
         * 关机类型。取值范围：
SOFT：表示软关机
HARD：表示硬关机
SOFT_FIRST：表示优先软关机，失败再执行硬关机

默认取值：SOFT。
         * @type {string || null}
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ForceReboot = 'ForceReboot' in params ? params.ForceReboot : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * 转发规则及健康状态列表
 * @class
 */
class RuleHealth extends  AbstractModel {
    constructor(){
        super();

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
 * AllocateAddresses请求参数结构体
 * @class
 */
class AllocateAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * EIP数量。默认值：1。
         * @type {number || null}
         */
        this.AddressCount = null;

        /**
         * CMCC：中国移动
CTCC：中国电信
CUCC：中国联通
         * @type {string || null}
         */
        this.InternetServiceProvider = null;

        /**
         * 1 Mbps 至 5000 Mbps，默认值：1 Mbps。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 需要关联的标签列表。
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 要绑定的实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 要绑定的内网 IP。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIpAddress ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIpAddress 是指定的 NetworkInterfaceId 上的一个内网 IP。指定弹性网卡的内网 IP 可通过DescribeNetworkInterfaces接口返回值中的privateIpAddress获取。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressCount = 'AddressCount' in params ? params.AddressCount : null;
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * 弹性网卡绑定关系
 * @class
 */
class NetworkInterfaceAttachment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云主机实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 网卡在云主机实例内的序号。
         * @type {number || null}
         */
        this.DeviceIndex = null;

        /**
         * 云主机所有者账户信息。
         * @type {string || null}
         */
        this.InstanceAccountId = null;

        /**
         * 绑定时间。
         * @type {string || null}
         */
        this.AttachTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DeviceIndex = 'DeviceIndex' in params ? params.DeviceIndex : null;
        this.InstanceAccountId = 'InstanceAccountId' in params ? params.InstanceAccountId : null;
        this.AttachTime = 'AttachTime' in params ? params.AttachTime : null;

    }
}

/**
 * 用于描述实例相关的信息。
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称，如ens-34241f3s。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例状态。取值范围：
PENDING：表示创建中
LAUNCH_FAILED：表示创建失败
RUNNING：表示运行中
STOPPED：表示关机
STARTING：表示开机中
STOPPING：表示关机中
REBOOTING：表示重启中
SHUTDOWN：表示停止待销毁
TERMINATING：表示销毁中。
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 实例当前使用的镜像的信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Image || null}
         */
        this.Image = null;

        /**
         * 实例当前所属的模块简要信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {SimpleModule || null}
         */
        this.SimpleModule = null;

        /**
         * 实例所在的位置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Position || null}
         */
        this.Position = null;

        /**
         * 实例的网络相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Internet || null}
         */
        this.Internet = null;

        /**
         * 实例的配置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {InstanceTypeConfig || null}
         */
        this.InstanceTypeConfig = null;

        /**
         * 实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 实例最后一次操作。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * 实例最后一次操作结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * 实例业务状态。取值范围：
NORMAL：表示正常状态的实例
EXPIRED：表示过期的实例
PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RestrictState = null;

        /**
         * 系统盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * 数据盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataDiskSize = null;

        /**
         * 实例UUID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UUID = null;

        /**
         * 付费方式。
    0为后付费。
    1为预付费。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 过期时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 隔离时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 是否自动续费。
      0为不自动续费。
      1为自动续费。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RenewFlag = null;

        /**
         * 过期状态。
    NORMAL 表示机器运行正常。
    WILL_EXPIRE 表示即将过期。
    EXPIRED 表示已过期。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireState = null;

        /**
         * 系统盘信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DiskInfo || null}
         */
        this.SystemDisk = null;

        /**
         * 数据盘信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DiskInfo> || null}
         */
        this.DataDisks = null;

        /**
         * 新实例标志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.NewFlag = null;

        /**
         * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * VPC属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {VirtualPrivateCloud || null}
         */
        this.VirtualPrivateCloud = null;

        /**
         * 实例运营商字段。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ISP = null;

        /**
         * 物理位置信息。注意该字段目前为保留字段，均为空值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PhysicalPosition || null}
         */
        this.PhysicalPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;

        if (params.Image) {
            let obj = new Image();
            obj.deserialize(params.Image)
            this.Image = obj;
        }

        if (params.SimpleModule) {
            let obj = new SimpleModule();
            obj.deserialize(params.SimpleModule)
            this.SimpleModule = obj;
        }

        if (params.Position) {
            let obj = new Position();
            obj.deserialize(params.Position)
            this.Position = obj;
        }

        if (params.Internet) {
            let obj = new Internet();
            obj.deserialize(params.Internet)
            this.Internet = obj;
        }

        if (params.InstanceTypeConfig) {
            let obj = new InstanceTypeConfig();
            obj.deserialize(params.InstanceTypeConfig)
            this.InstanceTypeConfig = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.RestrictState = 'RestrictState' in params ? params.RestrictState : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.DataDiskSize = 'DataDiskSize' in params ? params.DataDiskSize : null;
        this.UUID = 'UUID' in params ? params.UUID : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;
        this.ExpireState = 'ExpireState' in params ? params.ExpireState : null;

        if (params.SystemDisk) {
            let obj = new DiskInfo();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }

        if (params.DataDisks) {
            this.DataDisks = new Array();
            for (let z in params.DataDisks) {
                let obj = new DiskInfo();
                obj.deserialize(params.DataDisks[z]);
                this.DataDisks.push(obj);
            }
        }
        this.NewFlag = 'NewFlag' in params ? params.NewFlag : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

        if (params.VirtualPrivateCloud) {
            let obj = new VirtualPrivateCloud();
            obj.deserialize(params.VirtualPrivateCloud)
            this.VirtualPrivateCloud = obj;
        }
        this.ISP = 'ISP' in params ? params.ISP : null;

        if (params.PhysicalPosition) {
            let obj = new PhysicalPosition();
            obj.deserialize(params.PhysicalPosition)
            this.PhysicalPosition = obj;
        }

    }
}

/**
 * DeleteNetworkInterface请求参数结构体
 * @class
 */
class DeleteNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * ECM 地域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * RemovePrivateIpAddresses请求参数结构体
 * @class
 */
class RemovePrivateIpAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡实例ID，例如：eni-11112222。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的内网IP信息，单次最多指定10个。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }

    }
}

/**
 * 路由表
 * @class
 */
class RouteTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 路由表实例ID
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由表名称
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 路由表关联关系
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RouteTableAssociation> || null}
         */
        this.AssociationSet = null;

        /**
         * IPv4路由策略集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Route> || null}
         */
        this.RouteSet = null;

        /**
         * 是否默认路由表
         * @type {boolean || null}
         */
        this.Main = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

        if (params.AssociationSet) {
            this.AssociationSet = new Array();
            for (let z in params.AssociationSet) {
                let obj = new RouteTableAssociation();
                obj.deserialize(params.AssociationSet[z]);
                this.AssociationSet.push(obj);
            }
        }

        if (params.RouteSet) {
            this.RouteSet = new Array();
            for (let z in params.RouteSet) {
                let obj = new Route();
                obj.deserialize(params.RouteSet[z]);
                this.RouteSet.push(obj);
            }
        }
        this.Main = 'Main' in params ? params.Main : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * 实例可用区及对应的实例创建数目及运营商的组合；
 * @class
 */
class ZoneInstanceCountISP extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建实例的可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 在当前可用区欲创建的实例数目。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 运营商如下：
CTCC：中国电信
CUCC：中国联通
CMCC：中国移动
多个运营商用英文分号连接";"，例如："CMCC;CUCC;CTCC"。多运营商需要开通白名单，请直接联系腾讯云客服。
         * @type {string || null}
         */
        this.ISP = null;

        /**
         * 指定私有网络编号，SubnetId与VpcId必须同时指定或不指定
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 指定子网编号，SubnetId与VpcId必须同时指定或不指定
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 指定主网卡内网IP。条件：SubnetId与VpcId必须同时指定，并且IP数量与InstanceCount相同，多IP主机副网卡内网IP在相同子网内通过DHCP获取。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 为弹性网卡指定随机生成的IPv6地址数量，目前数量不能大于1。
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.ISP = 'ISP' in params ? params.ISP : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * 负载均衡器健康状态
 * @class
 */
class LoadBalancerHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡实例ID
注意：此字段可能返回 null，表示取不到有效值。
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
         * @type {number || null}
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
 * ModifyInstancesAttribute请求参数结构体
 * @class
 */
class ModifyInstancesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的实例ID列表。在单次请求的过程中，请求实例数上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 修改成功后显示的实例名称，不得超过60个字符，不传则名称显示为空。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 指定实例的安全组Id列表，子机将重新关联指定列表的安全组，原本关联的安全组会被解绑。限制不超过5个。
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
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;

    }
}

/**
 * 实例系列类型配置
 * @class
 */
class InstanceFamilyTypeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例机型系列类型Id
         * @type {string || null}
         */
        this.InstanceFamilyType = null;

        /**
         * 实例机型系列类型名称
         * @type {string || null}
         */
        this.InstanceFamilyTypeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceFamilyType = 'InstanceFamilyType' in params ? params.InstanceFamilyType : null;
        this.InstanceFamilyTypeName = 'InstanceFamilyTypeName' in params ? params.InstanceFamilyTypeName : null;

    }
}

/**
 * ResetInstances返回参数结构体
 * @class
 */
class ResetInstancesResponse extends  AbstractModel {
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
 * DeleteVpc请求参数结构体
 * @class
 */
class DeleteVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

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
         * 负载均衡实例 ID
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 指定删除的监听器ID数组，若不填则删除负载均衡的所有监听器
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
 * MigratePrivateIpAddress请求参数结构体
 * @class
 */
class MigratePrivateIpAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 当前内网IP绑定的弹性网卡实例ID，例如：eni-11112222。
         * @type {string || null}
         */
        this.SourceNetworkInterfaceId = null;

        /**
         * 待迁移的目的弹性网卡实例ID。
         * @type {string || null}
         */
        this.DestinationNetworkInterfaceId = null;

        /**
         * 迁移的内网IP地址，例如：10.0.0.6。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.SourceNetworkInterfaceId = 'SourceNetworkInterfaceId' in params ? params.SourceNetworkInterfaceId : null;
        this.DestinationNetworkInterfaceId = 'DestinationNetworkInterfaceId' in params ? params.DestinationNetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * ModifySubnetAttribute返回参数结构体
 * @class
 */
class ModifySubnetAttributeResponse extends  AbstractModel {
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
 * Zone信息
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ZoneId
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * ZoneName
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Zone
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
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * DescribeInstancesDeniedActions请求参数结构体
 * @class
 */
class DescribeInstancesDeniedActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;

    }
}

/**
 * DeleteRouteTable请求参数结构体
 * @class
 */
class DeleteRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * DescribeNode请求参数结构体
 * @class
 */
class DescribeNodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，name取值为： InstanceFamily-实例系列
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
 * CreateSubnet返回参数结构体
 * @class
 */
class CreateSubnetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网对象。
         * @type {Subnet || null}
         */
        this.Subnet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Subnet) {
            let obj = new Subnet();
            obj.deserialize(params.Subnet)
            this.Subnet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityGroupPolicies返回参数结构体
 * @class
 */
class DescribeSecurityGroupPoliciesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组规则集合。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Listener> || null}
         */
        this.Listeners = null;

        /**
         * 总的监听器个数
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
 * 区域信息
 * @class
 */
class Area extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域ID
         * @type {string || null}
         */
        this.AreaId = null;

        /**
         * 区域名称
         * @type {string || null}
         */
        this.AreaName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AreaId = 'AreaId' in params ? params.AreaId : null;
        this.AreaName = 'AreaName' in params ? params.AreaName : null;

    }
}

/**
 * ModifySecurityGroupPolicies请求参数结构体
 * @class
 */
class ModifySecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组规则集合。 SecurityGroupPolicySet对象必须同时指定新的出（Egress）入（Ingress）站规则。 SecurityGroupPolicy对象不支持自定义索引（PolicyIndex）。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

        /**
         * 排序安全组标识。值为True时，支持安全组排序；SortPolicys不存在或SortPolicys为False时，为修改安全组规则。
         * @type {boolean || null}
         */
        this.SortPolicys = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }
        this.SortPolicys = 'SortPolicys' in params ? params.SortPolicys : null;

    }
}

/**
 * DescribeConfig请求参数结构体
 * @class
 */
class DescribeConfigRequest extends  AbstractModel {
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
 * DescribeInstanceVncUrl请求参数结构体
 * @class
 */
class DescribeInstanceVncUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个操作的实例ID。可通过DescribeInstances API返回值中的InstanceId获取。
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
 * DescribeInstanceVncUrl返回参数结构体
 * @class
 */
class DescribeInstanceVncUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的管理终端地址。
         * @type {string || null}
         */
        this.InstanceVncUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceVncUrl = 'InstanceVncUrl' in params ? params.InstanceVncUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 目标和权重的描述信息
 * @class
 */
class TargetsWeightRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡监听器 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 要修改权重的后端机器列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 后端服务新的转发权重，取值范围：0~100。
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;

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
 * StopInstances返回参数结构体
 * @class
 */
class StopInstancesResponse extends  AbstractModel {
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
 * StartInstances返回参数结构体
 * @class
 */
class StartInstancesResponse extends  AbstractModel {
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
 * CreateVpc返回参数结构体
 * @class
 */
class CreateVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vpc对象。
         * @type {VpcInfo || null}
         */
        this.Vpc = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Vpc) {
            let obj = new VpcInfo();
            obj.deserialize(params.Vpc)
            this.Vpc = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * VPC辅助CIDR信息。
 * @class
 */
class AssistantCidr extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。形如：vpc-6v2ht8q5
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 辅助CIDR。形如：172.16.0.0/16
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。
         * @type {number || null}
         */
        this.AssistantType = null;

        /**
         * 辅助CIDR拆分的子网。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Subnet> || null}
         */
        this.SubnetSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.AssistantType = 'AssistantType' in params ? params.AssistantType : null;

        if (params.SubnetSet) {
            this.SubnetSet = new Array();
            for (let z in params.SubnetSet) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetSet[z]);
                this.SubnetSet.push(obj);
            }
        }

    }
}

/**
 * TerminateInstances请求参数结构体
 * @class
 */
class TerminateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待销毁的实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 是否定时销毁，默认为否。
         * @type {boolean || null}
         */
        this.TerminateDelay = null;

        /**
         * 定时销毁的时间，格式形如："2019-08-05 12:01:30"，若非定时销毁，则此参数被忽略。
         * @type {string || null}
         */
        this.TerminateTime = null;

        /**
         * 是否关联删除已绑定的弹性网卡和弹性IP，默认为true。
当为true时，一并删除弹性网卡和弹性IP；
当为false时，只销毁主机，保留弹性网卡和弹性IP。
         * @type {boolean || null}
         */
        this.AssociatedResourceDestroy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.TerminateDelay = 'TerminateDelay' in params ? params.TerminateDelay : null;
        this.TerminateTime = 'TerminateTime' in params ? params.TerminateTime : null;
        this.AssociatedResourceDestroy = 'AssociatedResourceDestroy' in params ? params.AssociatedResourceDestroy : null;

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
         * 任务描述
         * @type {Array.<TaskOutput> || null}
         */
        this.TaskSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskOutput();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
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
 * CreateModule请求参数结构体
 * @class
 */
class CreateModuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名称，如视频直播模块。限制：模块名称不得以空格开头，长度不得超过60个字符。
         * @type {string || null}
         */
        this.ModuleName = null;

        /**
         * 默认带宽，单位：M。范围不得超过带宽上下限，详看DescribeConfig。
         * @type {number || null}
         */
        this.DefaultBandWidth = null;

        /**
         * 默认镜像，如img-qsdf3ff2。
         * @type {string || null}
         */
        this.DefaultImageId = null;

        /**
         * 机型ID。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 默认系统盘大小，单位：G，默认大小为50G。范围不得超过系统盘上下限制，详看DescribeConfig。
         * @type {number || null}
         */
        this.DefaultSystemDiskSize = null;

        /**
         * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
         * @type {number || null}
         */
        this.DefaultDataDiskSize = null;

        /**
         * 是否关闭IP直通。取值范围：
true：表示关闭IP直通
false：表示开通IP直通
         * @type {boolean || null}
         */
        this.CloseIpDirect = null;

        /**
         * 标签列表。
         * @type {Array.<TagSpecification> || null}
         */
        this.TagSpecification = null;

        /**
         * 模块默认安全组列表
         * @type {Array.<string> || null}
         */
        this.SecurityGroups = null;

        /**
         * 默认入带宽，单位：M。范围不得超过带宽上下限，详看DescribeConfig。
         * @type {number || null}
         */
        this.DefaultBandWidthIn = null;

        /**
         * 是否禁止分配外网IP
         * @type {boolean || null}
         */
        this.DisableWanIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;
        this.DefaultBandWidth = 'DefaultBandWidth' in params ? params.DefaultBandWidth : null;
        this.DefaultImageId = 'DefaultImageId' in params ? params.DefaultImageId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DefaultSystemDiskSize = 'DefaultSystemDiskSize' in params ? params.DefaultSystemDiskSize : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;
        this.CloseIpDirect = 'CloseIpDirect' in params ? params.CloseIpDirect : null;

        if (params.TagSpecification) {
            this.TagSpecification = new Array();
            for (let z in params.TagSpecification) {
                let obj = new TagSpecification();
                obj.deserialize(params.TagSpecification[z]);
                this.TagSpecification.push(obj);
            }
        }
        this.SecurityGroups = 'SecurityGroups' in params ? params.SecurityGroups : null;
        this.DefaultBandWidthIn = 'DefaultBandWidthIn' in params ? params.DefaultBandWidthIn : null;
        this.DisableWanIp = 'DisableWanIp' in params ? params.DisableWanIp : null;

    }
}

/**
 * ReplaceRouteTableAssociation返回参数结构体
 * @class
 */
class ReplaceRouteTableAssociationResponse extends  AbstractModel {
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
 * 实例网卡ip网络信息数组
 * @class
 */
class InstanceNetworkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例内外网ip相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AddressInfo> || null}
         */
        this.AddressInfoSet = null;

        /**
         * 网卡ID。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 网卡名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * 主网卡属性。true为主网卡，false为辅助网卡。
         * @type {boolean || null}
         */
        this.Primary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddressInfoSet) {
            this.AddressInfoSet = new Array();
            for (let z in params.AddressInfoSet) {
                let obj = new AddressInfo();
                obj.deserialize(params.AddressInfoSet[z]);
                this.AddressInfoSet.push(obj);
            }
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.Primary = 'Primary' in params ? params.Primary : null;

    }
}

/**
 * ModifyInstancesAttribute返回参数结构体
 * @class
 */
class ModifyInstancesAttributeResponse extends  AbstractModel {
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
 * ReleaseAddresses返回参数结构体
 * @class
 */
class ReleaseAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
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
 * ModifyVpcAttribute请求参数结构体
 * @class
 */
class ModifyVpcAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。形如：vpc-f49l6u0z。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 私有网络名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * 标签
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 私有网络描述
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeInstancesDeniedActions返回参数结构体
 * @class
 */
class DescribeInstancesDeniedActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例对应的禁止操作
         * @type {Array.<InstanceOperator> || null}
         */
        this.InstanceOperatorSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceOperatorSet) {
            this.InstanceOperatorSet = new Array();
            for (let z in params.InstanceOperatorSet) {
                let obj = new InstanceOperator();
                obj.deserialize(params.InstanceOperatorSet[z]);
                this.InstanceOperatorSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteHaVip返回参数结构体
 * @class
 */
class DeleteHaVipResponse extends  AbstractModel {
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
 * ReleaseIpv6Addresses请求参数结构体
 * @class
 */
class ReleaseIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡实例ID，形如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的IPv6地址列表，单次最多指定10个。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }

    }
}

/**
 * 任务查询出参
 * @class
 */
class TaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 状态描述
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 状态值，SUCCESS/FAILED/OPERATING
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 任务提交时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 任务结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * 节点统计数据
 * @class
 */
class ModuleCounter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商统计信息列表
         * @type {Array.<ISPCounter> || null}
         */
        this.ISPCounterSet = null;

        /**
         * 省份数量
         * @type {number || null}
         */
        this.ProvinceNum = null;

        /**
         * 城市数量
         * @type {number || null}
         */
        this.CityNum = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ISPCounterSet) {
            this.ISPCounterSet = new Array();
            for (let z in params.ISPCounterSet) {
                let obj = new ISPCounter();
                obj.deserialize(params.ISPCounterSet[z]);
                this.ISPCounterSet.push(obj);
            }
        }
        this.ProvinceNum = 'ProvinceNum' in params ? params.ProvinceNum : null;
        this.CityNum = 'CityNum' in params ? params.CityNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * ReplaceSecurityGroupPolicy返回参数结构体
 * @class
 */
class ReplaceSecurityGroupPolicyResponse extends  AbstractModel {
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
 * ModifyPrivateIpAddressesAttribute返回参数结构体
 * @class
 */
class ModifyPrivateIpAddressesAttributeResponse extends  AbstractModel {
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
 * ReplaceRoutes返回参数结构体
 * @class
 */
class ReplaceRoutesResponse extends  AbstractModel {
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
 * 物理位置信息
 * @class
 */
class PhysicalPosition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PosId = null;

        /**
         * 机架
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RackId = null;

        /**
         * 交换机
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SwitchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PosId = 'PosId' in params ? params.PosId : null;
        this.RackId = 'RackId' in params ? params.RackId : null;
        this.SwitchId = 'SwitchId' in params ? params.SwitchId : null;

    }
}

/**
 * 负载均衡监听器
 * @class
 */
class Listener extends  AbstractModel {
    constructor(){
        super();

        /**
         * 负载均衡监听器 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerId = null;

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
        this.Port = null;

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
         * 监听器的名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerName = null;

        /**
         * 监听器的创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 监听器的会话类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionType = null;

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

        if (params.HealthCheck) {
            let obj = new HealthCheck();
            obj.deserialize(params.HealthCheck)
            this.HealthCheck = obj;
        }
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.ListenerName = 'ListenerName' in params ? params.ListenerName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SessionType = 'SessionType' in params ? params.SessionType : null;

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
         * 安全组ID构成的数组，一个负载均衡实例最多可绑定5个安全组，如果要解绑所有安全组，可不传此参数，或传入空数组
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
 * DescribeDefaultSubnet请求参数结构体
 * @class
 */
class DescribeDefaultSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ECM可用区
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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * ResetInstancesMaxBandwidth返回参数结构体
 * @class
 */
class ResetInstancesMaxBandwidthResponse extends  AbstractModel {
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
 * DeleteSecurityGroup返回参数结构体
 * @class
 */
class DeleteSecurityGroupResponse extends  AbstractModel {
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
 * 私有网络(VPC)对象。
 * @class
 */
class VpcInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC名称。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VPC实例ID，例如：vpc-azd4dt1c。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * VPC的IPv4 CIDR。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 是否默认VPC。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 是否开启组播。
         * @type {boolean || null}
         */
        this.EnableMulticast = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * DNS列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DnsServerSet = null;

        /**
         * DHCP域名选项值。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * DHCP选项集ID。
         * @type {string || null}
         */
        this.DhcpOptionsId = null;

        /**
         * 是否开启DHCP。
         * @type {boolean || null}
         */
        this.EnableDhcp = null;

        /**
         * VPC的IPv6 CIDR。
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 辅助CIDR
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<AssistantCidr> || null}
         */
        this.AssistantCidrSet = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 地域中文名
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 包含子网数量
         * @type {number || null}
         */
        this.SubnetCount = null;

        /**
         * 包含实例数量
         * @type {number || null}
         */
        this.InstanceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.DnsServerSet = 'DnsServerSet' in params ? params.DnsServerSet : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DhcpOptionsId = 'DhcpOptionsId' in params ? params.DhcpOptionsId : null;
        this.EnableDhcp = 'EnableDhcp' in params ? params.EnableDhcp : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

        if (params.AssistantCidrSet) {
            this.AssistantCidrSet = new Array();
            for (let z in params.AssistantCidrSet) {
                let obj = new AssistantCidr();
                obj.deserialize(params.AssistantCidrSet[z]);
                this.AssistantCidrSet.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.SubnetCount = 'SubnetCount' in params ? params.SubnetCount : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

    }
}

/**
 * 路由策略
 * @class
 */
class Route extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目的IPv4网段
         * @type {string || null}
         */
        this.DestinationCidrBlock = null;

        /**
         * 下一跳类型
NORMAL_CVM：普通云服务器；
         * @type {string || null}
         */
        this.GatewayType = null;

        /**
         * 下一跳地址
这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址
当 GatewayType 为 EIP 时，GatewayId 固定值 '0'
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 路由策略唯一ID
         * @type {string || null}
         */
        this.RouteItemId = null;

        /**
         * 路由策略描述
         * @type {string || null}
         */
        this.RouteDescription = null;

        /**
         * 是否启用
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 路由类型，目前我们支持的类型有：
USER：用户路由；
NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；
CCN：云联网路由，系统默认下发，不可编辑与删除。
用户只能添加和操作 USER 类型的路由。
         * @type {string || null}
         */
        this.RouteType = null;

        /**
         * 路由策略ID。IPv4路由策略ID是有意义的值，IPv6路由策略是无意义的值0。后续建议完全使用字符串唯一ID `RouteItemId`操作路由策略
         * @type {number || null}
         */
        this.RouteId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DestinationCidrBlock = 'DestinationCidrBlock' in params ? params.DestinationCidrBlock : null;
        this.GatewayType = 'GatewayType' in params ? params.GatewayType : null;
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.RouteItemId = 'RouteItemId' in params ? params.RouteItemId : null;
        this.RouteDescription = 'RouteDescription' in params ? params.RouteDescription : null;
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.RouteType = 'RouteType' in params ? params.RouteType : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;

    }
}

/**
 * DescribeImage请求参数结构体
 * @class
 */
class DescribeImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件，每次请求的Filters的上限为10，详细的过滤条件如下：
image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤
image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：
PRIVATE_IMAGE: 私有镜像 (本帐户创建的镜像) 
PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)
instance-type -String - 是否必填: 否 - (过滤条件) 按机型过滤支持的镜像
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
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
 * CreateNetworkInterface返回参数结构体
 * @class
 */
class CreateNetworkInterfaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例。
         * @type {NetworkInterface || null}
         */
        this.NetworkInterface = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NetworkInterface) {
            let obj = new NetworkInterface();
            obj.deserialize(params.NetworkInterface)
            this.NetworkInterface = obj;
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
         * 健康检查相关参数
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

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
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;

    }
}

/**
 * RunInstances返回参数结构体
 * @class
 */
class RunInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建中的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAddressQuota请求参数结构体
 * @class
 */
class DescribeAddressQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * ModifyModuleName请求参数结构体
 * @class
 */
class ModifyModuleNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID。
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 模块名称。
         * @type {string || null}
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

    }
}

/**
 * DescribeInstanceTypeConfig返回参数结构体
 * @class
 */
class DescribeInstanceTypeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 机型配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceTypeConfig> || null}
         */
        this.InstanceTypeConfigSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.InstanceTypeConfigSet) {
            this.InstanceTypeConfigSet = new Array();
            for (let z in params.InstanceTypeConfigSet) {
                let obj = new InstanceTypeConfig();
                obj.deserialize(params.InstanceTypeConfigSet[z]);
                this.InstanceTypeConfigSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 节点实例数量信息
 * @class
 */
class NodeInstanceNum extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点数量
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

    }
}

/**
 * 负载均衡健康检查
 * @class
 */
class HealthCheck extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启健康检查：1（开启）、0（关闭）
注意：此字段可能返回 null，表示取不到有效值。
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
        this.UnHealthyNum = null;

        /**
         * 自定义探测相关参数。健康检查端口，默认为后端服务的端口，除非您希望指定特定端口，否则建议留空。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CheckPort = null;

        /**
         * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查的输入格式，可取值：HEX或TEXT；取值为HEX时，SendContext和RecvContext的字符只能在0123456789ABCDEF中选取且长度必须是偶数位。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContextType = null;

        /**
         * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查发送的请求内容，只允许ASCII可见字符，最大长度限制500。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SendContext = null;

        /**
         * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查返回的结果，只允许ASCII可见字符，最大长度限制500。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RecvContext = null;

        /**
         * 自定义探测相关参数。健康检查使用的协议：TCP | CUSTOM（UDP监听器只支持CUSTOM；如果使用自定义健康检查功能，则必传）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CheckType = null;

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
        this.UnHealthyNum = 'UnHealthyNum' in params ? params.UnHealthyNum : null;
        this.CheckPort = 'CheckPort' in params ? params.CheckPort : null;
        this.ContextType = 'ContextType' in params ? params.ContextType : null;
        this.SendContext = 'SendContext' in params ? params.SendContext : null;
        this.RecvContext = 'RecvContext' in params ? params.RecvContext : null;
        this.CheckType = 'CheckType' in params ? params.CheckType : null;

    }
}

/**
 * DescribeSecurityGroupLimits返回参数结构体
 * @class
 */
class DescribeSecurityGroupLimitsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户安全组配额限制。
         * @type {SecurityGroupLimitSet || null}
         */
        this.SecurityGroupLimitSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityGroupLimitSet) {
            let obj = new SecurityGroupLimitSet();
            obj.deserialize(params.SecurityGroupLimitSet)
            this.SecurityGroupLimitSet = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAddresses返回参数结构体
 * @class
 */
class DescribeAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的 EIP 数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * EIP 详细信息列表。
         * @type {Array.<Address> || null}
         */
        this.AddressSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.AddressSet) {
            this.AddressSet = new Array();
            for (let z in params.AddressSet) {
                let obj = new Address();
                obj.deserialize(params.AddressSet[z]);
                this.AddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignIpv6Addresses返回参数结构体
 * @class
 */
class AssignIpv6AddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配给弹性网卡的IPv6地址列表。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6AddressSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRoutes返回参数结构体
 * @class
 */
class CreateRoutesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 新增的实例个数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 路由表对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RouteTable> || null}
         */
        this.RouteTableSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTable();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 弹性网卡
 * @class
 */
class NetworkInterface extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-f1xjkw1b。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 弹性网卡名称。
         * @type {string || null}
         */
        this.NetworkInterfaceName = null;

        /**
         * 弹性网卡描述。
         * @type {string || null}
         */
        this.NetworkInterfaceDescription = null;

        /**
         * 子网实例ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 绑定的安全组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.GroupSet = null;

        /**
         * 是否是主网卡。
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * MAC地址。
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 弹性网卡状态：
PENDING：创建中
AVAILABLE：可用的
ATTACHING：绑定中
DETACHING：解绑中
DELETING：删除中
         * @type {string || null}
         */
        this.State = null;

        /**
         * 内网IP信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddressSet = null;

        /**
         * 绑定的云服务器对象。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NetworkInterfaceAttachment || null}
         */
        this.Attachment = null;

        /**
         * 可用区。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * IPv6地址列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6AddressSet = null;

        /**
         * 标签键值对。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 网卡类型。0 - 弹性网卡；1 - evm弹性网卡。
         * @type {number || null}
         */
        this.EniType = null;

        /**
         * EcmRegion ecm区域
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.NetworkInterfaceName = 'NetworkInterfaceName' in params ? params.NetworkInterfaceName : null;
        this.NetworkInterfaceDescription = 'NetworkInterfaceDescription' in params ? params.NetworkInterfaceDescription : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.GroupSet = 'GroupSet' in params ? params.GroupSet : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.State = 'State' in params ? params.State : null;

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }

        if (params.Attachment) {
            let obj = new NetworkInterfaceAttachment();
            obj.deserialize(params.Attachment)
            this.Attachment = obj;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

        if (params.Ipv6AddressSet) {
            this.Ipv6AddressSet = new Array();
            for (let z in params.Ipv6AddressSet) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6AddressSet[z]);
                this.Ipv6AddressSet.push(obj);
            }
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.EniType = 'EniType' in params ? params.EniType : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

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
 * DescribeSecurityGroups返回参数结构体
 * @class
 */
class DescribeSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 安全组对象。
         * @type {Array.<SecurityGroup> || null}
         */
        this.SecurityGroupSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SecurityGroupSet) {
            this.SecurityGroupSet = new Array();
            for (let z in params.SecurityGroupSet) {
                let obj = new SecurityGroup();
                obj.deserialize(params.SecurityGroupSet[z]);
                this.SecurityGroupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ImportCustomImage返回参数结构体
 * @class
 */
class ImportCustomImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 异步任务ID，可根据DescribeCustomImageTask查询任务信息
         * @type {number || null}
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
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DetachNetworkInterface返回参数结构体
 * @class
 */
class DetachNetworkInterfaceResponse extends  AbstractModel {
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
 * 机型族配置
 * @class
 */
class InstanceFamilyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型名称
         * @type {string || null}
         */
        this.InstanceFamilyName = null;

        /**
         * 机型ID
         * @type {string || null}
         */
        this.InstanceFamily = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceFamilyName = 'InstanceFamilyName' in params ? params.InstanceFamilyName : null;
        this.InstanceFamily = 'InstanceFamily' in params ? params.InstanceFamily : null;

    }
}

/**
 * 客户对应月份的带宽信息
 * @class
 */
class MonthNetwork extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点zone信息
         * @type {ZoneInfo || null}
         */
        this.ZoneInfo = null;

        /**
         * 带宽月份 示例"202103"
         * @type {string || null}
         */
        this.Month = null;

        /**
         * 带宽包id 格式如"bwp-xxxxxxxx"
         * @type {string || null}
         */
        this.BandwidthPkgId = null;

        /**
         * 运营商简称 取值范围"CUCC;CTCC;CMCC"
         * @type {string || null}
         */
        this.Isp = null;

        /**
         * 入网带宽包峰值,取值范围0.0-xxx.xxx
         * @type {number || null}
         */
        this.TrafficMaxIn = null;

        /**
         * 出网带宽包峰值,取值范围0.0-xxx.xxx
         * @type {number || null}
         */
        this.TrafficMaxOut = null;

        /**
         * 计费带宽,取值范围0.0-xxx.xxx
         * @type {number || null}
         */
        this.FeeTraffic = null;

        /**
         * 月计费带宽起始时间 格式"yyyy-mm-dd HH:mm:ss"
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 月计费带宽结束时间 格式"yyyy-mm-dd HH:mm:ss"
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 月计费带宽实际有效天数 整形必须大于等于0
         * @type {number || null}
         */
        this.EffectiveDays = null;

        /**
         * 指定月份的实际天数 实例 30
         * @type {number || null}
         */
        this.MonthDays = null;

        /**
         * 有效天占比 保留小数点后四位0.2134
         * @type {number || null}
         */
        this.EffectiveDaysRate = null;

        /**
         * 计费带宽包类型 实例"Address","LoadBalance","AddressIpv6"
         * @type {string || null}
         */
        this.BandwidthPkgType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }
        this.Month = 'Month' in params ? params.Month : null;
        this.BandwidthPkgId = 'BandwidthPkgId' in params ? params.BandwidthPkgId : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.TrafficMaxIn = 'TrafficMaxIn' in params ? params.TrafficMaxIn : null;
        this.TrafficMaxOut = 'TrafficMaxOut' in params ? params.TrafficMaxOut : null;
        this.FeeTraffic = 'FeeTraffic' in params ? params.FeeTraffic : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.EffectiveDays = 'EffectiveDays' in params ? params.EffectiveDays : null;
        this.MonthDays = 'MonthDays' in params ? params.MonthDays : null;
        this.EffectiveDaysRate = 'EffectiveDaysRate' in params ? params.EffectiveDaysRate : null;
        this.BandwidthPkgType = 'BandwidthPkgType' in params ? params.BandwidthPkgType : null;

    }
}

/**
 * ResetRoutes返回参数结构体
 * @class
 */
class ResetRoutesResponse extends  AbstractModel {
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
 * DeleteModule请求参数结构体
 * @class
 */
class DeleteModuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID。如：em-qn46snq8
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * CreateImage返回参数结构体
 * @class
 */
class CreateImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务id
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
 * ModifySecurityGroupPolicies返回参数结构体
 * @class
 */
class ModifySecurityGroupPoliciesResponse extends  AbstractModel {
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
 * ResetInstancesMaxBandwidth请求参数结构体
 * @class
 */
class ResetInstancesMaxBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待重置带宽上限的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 修改后的最大出带宽上限。
         * @type {number || null}
         */
        this.MaxBandwidthOut = null;

        /**
         * 修改后的最大入带宽上限。
         * @type {number || null}
         */
        this.MaxBandwidthIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.MaxBandwidthOut = 'MaxBandwidthOut' in params ? params.MaxBandwidthOut : null;
        this.MaxBandwidthIn = 'MaxBandwidthIn' in params ? params.MaxBandwidthIn : null;

    }
}

/**
 * 负载均衡的带宽限制等信息。
 * @class
 */
class LoadBalancerInternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最大出带宽，单位Mbps。默认值10
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * 操作系统支持的类型。
 * @class
 */
class OsVersion extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作系统类型
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 支持的操作系统版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.OsVersions = null;

        /**
         * 支持的操作系统架构
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Architecture = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.OsVersions = 'OsVersions' in params ? params.OsVersions : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;

    }
}

/**
 * ResetRoutes请求参数结构体
 * @class
 */
class ResetRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由表名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * 路由策略。
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * DisableRoutes返回参数结构体
 * @class
 */
class DisableRoutesResponse extends  AbstractModel {
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
 * 峰值信息
 * @class
 */
class PeakBase extends  AbstractModel {
    constructor(){
        super();

        /**
         * CPU峰值
         * @type {number || null}
         */
        this.PeakCpuNum = null;

        /**
         * 内存峰值
         * @type {number || null}
         */
        this.PeakMemoryNum = null;

        /**
         * 硬盘峰值
         * @type {number || null}
         */
        this.PeakStorageNum = null;

        /**
         * 记录时间
         * @type {string || null}
         */
        this.RecordTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PeakCpuNum = 'PeakCpuNum' in params ? params.PeakCpuNum : null;
        this.PeakMemoryNum = 'PeakMemoryNum' in params ? params.PeakMemoryNum : null;
        this.PeakStorageNum = 'PeakStorageNum' in params ? params.PeakStorageNum : null;
        this.RecordTime = 'RecordTime' in params ? params.RecordTime : null;

    }
}

/**
 * ResetInstancesPassword返回参数结构体
 * @class
 */
class ResetInstancesPasswordResponse extends  AbstractModel {
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
 * ModifyModuleNetwork请求参数结构体
 * @class
 */
class ModifyModuleNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块Id
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 默认出带宽上限
         * @type {number || null}
         */
        this.DefaultBandwidth = null;

        /**
         * 默认入带宽上限
         * @type {number || null}
         */
        this.DefaultBandwidthIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.DefaultBandwidth = 'DefaultBandwidth' in params ? params.DefaultBandwidth : null;
        this.DefaultBandwidthIn = 'DefaultBandwidthIn' in params ? params.DefaultBandwidthIn : null;

    }
}

/**
 * 镜像信息
 * @class
 */
class Image extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 镜像状态
         * @type {string || null}
         */
        this.ImageState = null;

        /**
         * 镜像类型
         * @type {string || null}
         */
        this.ImageType = null;

        /**
         * 操作系统名称
         * @type {string || null}
         */
        this.ImageOsName = null;

        /**
         * 镜像描述
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 镜像导入时间
         * @type {string || null}
         */
        this.ImageCreateTime = null;

        /**
         * 操作系统位数
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * 操作系统类型
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 操作系统版本
         * @type {string || null}
         */
        this.OsVersion = null;

        /**
         * 操作系统平台
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 镜像所有者
         * @type {number || null}
         */
        this.ImageOwner = null;

        /**
         * 镜像大小。单位：GB
         * @type {number || null}
         */
        this.ImageSize = null;

        /**
         * 镜像来源信息
         * @type {SrcImage || null}
         */
        this.SrcImage = null;

        /**
         * 镜像来源类型
         * @type {string || null}
         */
        this.ImageSource = null;

        /**
         * 中间态和失败时候的任务ID
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
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageState = 'ImageState' in params ? params.ImageState : null;
        this.ImageType = 'ImageType' in params ? params.ImageType : null;
        this.ImageOsName = 'ImageOsName' in params ? params.ImageOsName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ImageCreateTime = 'ImageCreateTime' in params ? params.ImageCreateTime : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.ImageOwner = 'ImageOwner' in params ? params.ImageOwner : null;
        this.ImageSize = 'ImageSize' in params ? params.ImageSize : null;

        if (params.SrcImage) {
            let obj = new SrcImage();
            obj.deserialize(params.SrcImage)
            this.SrcImage = obj;
        }
        this.ImageSource = 'ImageSource' in params ? params.ImageSource : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 资源类型的Tag
 * @class
 */
class TagSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源类型，目前仅支持"instance"、"module"
         * @type {string || null}
         */
        this.ResourceType = null;

        /**
         * 标签列表
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
        this.ResourceType = 'ResourceType' in params ? params.ResourceType : null;

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
 * DetachNetworkInterface请求参数结构体
 * @class
 */
class DetachNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 实例ID。形如：ein-hcs7jkg4
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ECM 地域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * IP地址模版
 * @class
 */
class AddressTemplateSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP地址ID，例如：eipm-2uw6ujo6。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * IP地址组ID，例如：eipmg-2uw6ujo6。
         * @type {string || null}
         */
        this.AddressGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressGroupId = 'AddressGroupId' in params ? params.AddressGroupId : null;

    }
}

/**
 * DescribeConfig返回参数结构体
 * @class
 */
class DescribeConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络带宽硬盘大小的范围信息。
         * @type {NetworkStorageRange || null}
         */
        this.NetworkStorageRange = null;

        /**
         * 镜像操作系统白名单。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.ImageWhiteSet = null;

        /**
         * 网络限额信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<InstanceNetworkLimitConfig> || null}
         */
        this.InstanceNetworkLimitConfigs = null;

        /**
         * 镜像限额信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ImageLimitConfig || null}
         */
        this.ImageLimits = null;

        /**
         * 默认是否IP直通，用于模块创建，虚机购买等具有直通参数场景时的默认参数。
         * @type {boolean || null}
         */
        this.DefaultIPDirect = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NetworkStorageRange) {
            let obj = new NetworkStorageRange();
            obj.deserialize(params.NetworkStorageRange)
            this.NetworkStorageRange = obj;
        }
        this.ImageWhiteSet = 'ImageWhiteSet' in params ? params.ImageWhiteSet : null;

        if (params.InstanceNetworkLimitConfigs) {
            this.InstanceNetworkLimitConfigs = new Array();
            for (let z in params.InstanceNetworkLimitConfigs) {
                let obj = new InstanceNetworkLimitConfig();
                obj.deserialize(params.InstanceNetworkLimitConfigs[z]);
                this.InstanceNetworkLimitConfigs.push(obj);
            }
        }

        if (params.ImageLimits) {
            let obj = new ImageLimitConfig();
            obj.deserialize(params.ImageLimits)
            this.ImageLimits = obj;
        }
        this.DefaultIPDirect = 'DefaultIPDirect' in params ? params.DefaultIPDirect : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssignIpv6Addresses请求参数结构体
 * @class
 */
class AssignIpv6AddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡实例ID，形如：eni-1snva0vd。目前只支持主网卡上分配。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的IPv6地址列表，单次最多指定10个。与入参Ipv6AddressCount合并计算配额。与Ipv6AddressCount必填一个。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

        /**
         * 自动分配IPv6地址个数，内网IP地址个数总和不能超过配数。与入参Ipv6Addresses合并计算配额。与Ipv6Addresses必填一个。
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * ModifyModuleNetwork返回参数结构体
 * @class
 */
class ModifyModuleNetworkResponse extends  AbstractModel {
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
 * ModifyDefaultSubnet返回参数结构体
 * @class
 */
class ModifyDefaultSubnetResponse extends  AbstractModel {
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
 * CreateSubnet请求参数结构体
 * @class
 */
class CreateSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

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
 * DescribeModuleDetail返回参数结构体
 * @class
 */
class DescribeModuleDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块的详细信息，详细见数据结构中的ModuleInfo。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Module || null}
         */
        this.Module = null;

        /**
         * 模块的统计信息，详细见数据结构中的ModuleCounterInfo。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ModuleCounter || null}
         */
        this.ModuleCounter = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Module) {
            let obj = new Module();
            obj.deserialize(params.Module)
            this.Module = obj;
        }

        if (params.ModuleCounter) {
            let obj = new ModuleCounter();
            obj.deserialize(params.ModuleCounter)
            this.ModuleCounter = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 任务查询
 * @class
 */
class TaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作名，即API名称，比如：CreateImage
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 任务id
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
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * ModifyModuleDisableWanIp请求参数结构体
 * @class
 */
class ModifyModuleDisableWanIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 是否禁止分配外网ip,true：统一分配外网ip，false：禁止分配外网ip.
         * @type {boolean || null}
         */
        this.DisableWanIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.DisableWanIp = 'DisableWanIp' in params ? params.DisableWanIp : null;

    }
}

/**
 * 负责均衡后端信息
 * @class
 */
class Backend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 后端服务的唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端服务的监听端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 后端服务的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

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
         * 后端服务的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicIpAddresses = null;

        /**
         * 后端服务的实例名称
注意：此字段可能返回 null，表示取不到有效值。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.RegisteredTime = 'RegisteredTime' in params ? params.RegisteredTime : null;
        this.EniId = 'EniId' in params ? params.EniId : null;
        this.PublicIpAddresses = 'PublicIpAddresses' in params ? params.PublicIpAddresses : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * 子网对象
 * @class
 */
class Subnet extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例ID，例如：subnet-bthucmmy。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网名称。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网的 IPv4 CIDR。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 是否默认子网。
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * 是否开启广播。
         * @type {boolean || null}
         */
        this.EnableBroadcast = null;

        /**
         * 路由表实例ID，例如：rtb-l2h8d7c2。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 创建时间。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 可用IP数。
         * @type {number || null}
         */
        this.AvailableIpAddressCount = null;

        /**
         * 子网的 IPv6 CIDR。
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * 关联ACLID
         * @type {string || null}
         */
        this.NetworkAclId = null;

        /**
         * 是否为 SNAT 地址池子网。
         * @type {boolean || null}
         */
        this.IsRemoteVpcSnat = null;

        /**
         * 标签键值对。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 所在区域
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * VPC的 IPv4 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * VPC的 IPv6 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcIpv6CidrBlock = null;

        /**
         * 地域
注意：此字段可能返回 null，表示取不到有效值。
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.AvailableIpAddressCount = 'AvailableIpAddressCount' in params ? params.AvailableIpAddressCount : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.NetworkAclId = 'NetworkAclId' in params ? params.NetworkAclId : null;
        this.IsRemoteVpcSnat = 'IsRemoteVpcSnat' in params ? params.IsRemoteVpcSnat : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.VpcIpv6CidrBlock = 'VpcIpv6CidrBlock' in params ? params.VpcIpv6CidrBlock : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * ModifyVpcAttribute返回参数结构体
 * @class
 */
class ModifyVpcAttributeResponse extends  AbstractModel {
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
 * ModifyIpv6AddressesAttribute返回参数结构体
 * @class
 */
class ModifyIpv6AddressesAttributeResponse extends  AbstractModel {
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
 * DeleteVpc返回参数结构体
 * @class
 */
class DeleteVpcResponse extends  AbstractModel {
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
 * 负责均衡后端目标
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
         * 子机ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Weight = null;

        /**
         * 绑定弹性网卡时需要传入此参数，代表弹性网卡的IP，弹性网卡必须先绑定至子机，然后才能绑定到负载均衡实例。注意：参数 InstanceId 和 EniIp 只能传入一个且必须传入一个。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Weight = 'Weight' in params ? params.Weight : null;
        this.EniIp = 'EniIp' in params ? params.EniIp : null;

    }
}

/**
 * 路由表关联关系
 * @class
 */
class RouteTableAssociation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 路由表实例ID
         * @type {string || null}
         */
        this.RouteTableId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

    }
}

/**
 * 安全组规则集合
 * @class
 */
class SecurityGroupPolicySet extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组规则当前版本。用户每次更新安全规则版本会自动加1，防止更新的路由规则已过期，不填不考虑冲突。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 出站规则。其中出站规则和入站规则必须选一个。
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.Egress = null;

        /**
         * 入站规则。其中出站规则和入站规则必须选一个。
         * @type {Array.<SecurityGroupPolicy> || null}
         */
        this.Ingress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;

        if (params.Egress) {
            this.Egress = new Array();
            for (let z in params.Egress) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.Egress[z]);
                this.Egress.push(obj);
            }
        }

        if (params.Ingress) {
            this.Ingress = new Array();
            for (let z in params.Ingress) {
                let obj = new SecurityGroupPolicy();
                obj.deserialize(params.Ingress[z]);
                this.Ingress.push(obj);
            }
        }

    }
}

/**
 * DescribeVpcs返回参数结构体
 * @class
 */
class DescribeVpcsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的对象数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 私有网络对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<VpcInfo> || null}
         */
        this.VpcSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.VpcSet) {
            this.VpcSet = new Array();
            for (let z in params.VpcSet) {
                let obj = new VpcInfo();
                obj.deserialize(params.VpcSet[z]);
                this.VpcSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 镜像文件信息
 * @class
 */
class ImageUrl extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像文件COS链接，如设置私有读写，需授权腾讯云ECM运营账号访问权限。
         * @type {string || null}
         */
        this.ImageFile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageFile = 'ImageFile' in params ? params.ImageFile : null;

    }
}

/**
 * 运营商信息
 * @class
 */
class ISP extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商ID
         * @type {string || null}
         */
        this.ISPId = null;

        /**
         * 运营商名称
         * @type {string || null}
         */
        this.ISPName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ISPId = 'ISPId' in params ? params.ISPId : null;
        this.ISPName = 'ISPName' in params ? params.ISPName : null;

    }
}

/**
 * 内网IP信息
 * @class
 */
class PrivateIpAddressSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网IP地址。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

        /**
         * 是否是主IP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Primary = null;

        /**
         * 公网IP地址。
         * @type {string || null}
         */
        this.PublicIpAddress = null;

        /**
         * EIP实例ID，例如：eip-11112222。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 内网IP描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 公网IP是否被封堵。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsWanIpBlocked = null;

        /**
         * IP状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
         * @type {string || null}
         */
        this.State = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;
        this.Primary = 'Primary' in params ? params.Primary : null;
        this.PublicIpAddress = 'PublicIpAddress' in params ? params.PublicIpAddress : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.IsWanIpBlocked = 'IsWanIpBlocked' in params ? params.IsWanIpBlocked : null;
        this.State = 'State' in params ? params.State : null;

    }
}

/**
 * ModifySecurityGroupAttribute返回参数结构体
 * @class
 */
class ModifySecurityGroupAttributeResponse extends  AbstractModel {
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
 * 运行商统计信息
 * @class
 */
class ISPCounter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 运营商名称
         * @type {string || null}
         */
        this.ProviderName = null;

        /**
         * 节点数量
         * @type {number || null}
         */
        this.ProviderNodeNum = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.ProvederInstanceNum = null;

        /**
         * Zone实例信息结构体数组
         * @type {Array.<ZoneInstanceInfo> || null}
         */
        this.ZoneInstanceInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProviderName = 'ProviderName' in params ? params.ProviderName : null;
        this.ProviderNodeNum = 'ProviderNodeNum' in params ? params.ProviderNodeNum : null;
        this.ProvederInstanceNum = 'ProvederInstanceNum' in params ? params.ProvederInstanceNum : null;

        if (params.ZoneInstanceInfoSet) {
            this.ZoneInstanceInfoSet = new Array();
            for (let z in params.ZoneInstanceInfoSet) {
                let obj = new ZoneInstanceInfo();
                obj.deserialize(params.ZoneInstanceInfoSet[z]);
                this.ZoneInstanceInfoSet.push(obj);
            }
        }

    }
}

/**
 * MigratePrivateIpAddress返回参数结构体
 * @class
 */
class MigratePrivateIpAddressResponse extends  AbstractModel {
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
 * CreateImage请求参数结构体
 * @class
 */
class CreateImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像名称。
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 需要制作镜像的实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 镜像描述。
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 是否执行强制关机以制作镜像。取值范围：
TRUE：表示自动关机后制作镜像
FALSE：表示开机状态制作，目前不支持，需要先手动关机
默认取值：FALSE。
         * @type {string || null}
         */
        this.ForcePoweroff = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.ForcePoweroff = 'ForcePoweroff' in params ? params.ForcePoweroff : null;

    }
}

/**
 * DeleteRouteTable返回参数结构体
 * @class
 */
class DeleteRouteTableResponse extends  AbstractModel {
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
 * ModifyModuleDisableWanIp返回参数结构体
 * @class
 */
class ModifyModuleDisableWanIpResponse extends  AbstractModel {
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
 * 增强服务
 * @class
 */
class EnhancedService extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启云镜服务。
         * @type {RunSecurityServiceEnabled || null}
         */
        this.SecurityService = null;

        /**
         * 是否开启云监控服务。
         * @type {RunMonitorServiceEnabled || null}
         */
        this.MonitorService = null;

        /**
         * 是否开通IP直通。若不指定该参数，则Linux镜像默认开通，windows镜像暂不支持IP直通。
         * @type {RunEIPDirectServiceEnabled || null}
         */
        this.EIPDirectService = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityService) {
            let obj = new RunSecurityServiceEnabled();
            obj.deserialize(params.SecurityService)
            this.SecurityService = obj;
        }

        if (params.MonitorService) {
            let obj = new RunMonitorServiceEnabled();
            obj.deserialize(params.MonitorService)
            this.MonitorService = obj;
        }

        if (params.EIPDirectService) {
            let obj = new RunEIPDirectServiceEnabled();
            obj.deserialize(params.EIPDirectService)
            this.EIPDirectService = obj;
        }

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
注意：此字段可能返回 null，表示取不到有效值。
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
 * DeleteModule返回参数结构体
 * @class
 */
class DeleteModuleResponse extends  AbstractModel {
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
 * DescribeInstanceTypeConfig请求参数结构体
 * @class
 */
class DescribeInstanceTypeConfigRequest extends  AbstractModel {
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
 * DescribeLoadBalanceTaskStatus请求参数结构体
 * @class
 */
class DescribeLoadBalanceTaskStatusRequest extends  AbstractModel {
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
 * ImportCustomImage请求参数结构体
 * @class
 */
class ImportCustomImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像名称
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 导入镜像的操作系统架构，x86_64 或 i386
         * @type {string || null}
         */
        this.Architecture = null;

        /**
         * 导入镜像的操作系统类型，通过DescribeImportImageOs获取
         * @type {string || null}
         */
        this.OsType = null;

        /**
         * 导入镜像的操作系统版本，通过DescribeImportImageOs获取
         * @type {string || null}
         */
        this.OsVersion = null;

        /**
         * 镜像描述
         * @type {string || null}
         */
        this.ImageDescription = null;

        /**
         * 镜像启动方式，cloudinit或nbd， 默认cloudinit
         * @type {string || null}
         */
        this.InitFlag = null;

        /**
         * 镜像文件描述，多层镜像按顺序传入
         * @type {Array.<ImageUrl> || null}
         */
        this.ImageUrls = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.Architecture = 'Architecture' in params ? params.Architecture : null;
        this.OsType = 'OsType' in params ? params.OsType : null;
        this.OsVersion = 'OsVersion' in params ? params.OsVersion : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;
        this.InitFlag = 'InitFlag' in params ? params.InitFlag : null;

        if (params.ImageUrls) {
            this.ImageUrls = new Array();
            for (let z in params.ImageUrls) {
                let obj = new ImageUrl();
                obj.deserialize(params.ImageUrls[z]);
                this.ImageUrls.push(obj);
            }
        }

    }
}

/**
 * ModifyHaVipAttribute返回参数结构体
 * @class
 */
class ModifyHaVipAttributeResponse extends  AbstractModel {
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
 * ModifyIpv6AddressesAttribute请求参数结构体
 * @class
 */
class ModifyIpv6AddressesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡实例ID，形如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的IPv6地址信息。
         * @type {Array.<Ipv6Address> || null}
         */
        this.Ipv6Addresses = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.Ipv6Addresses) {
            this.Ipv6Addresses = new Array();
            for (let z in params.Ipv6Addresses) {
                let obj = new Ipv6Address();
                obj.deserialize(params.Ipv6Addresses[z]);
                this.Ipv6Addresses.push(obj);
            }
        }

    }
}

/**
 * DescribeModuleDetail请求参数结构体
 * @class
 */
class DescribeModuleDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID，如em-qn46snq8。
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * DeleteRoutes请求参数结构体
 * @class
 */
class DeleteRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表唯一ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略对象。
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * AssociateAddress请求参数结构体
 * @class
 */
class AssociateAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 要绑定的实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 要绑定的内网 IP。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIpAddress ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIpAddress 是指定的 NetworkInterfaceId 上的一个内网 IP。指定弹性网卡的内网 IP 可通过DescribeNetworkInterfaces接口返回值中的privateIpAddress获取。
         * @type {string || null}
         */
        this.PrivateIpAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateIpAddress = 'PrivateIpAddress' in params ? params.PrivateIpAddress : null;

    }
}

/**
 * ModifySecurityGroupAttribute请求参数结构体
 * @class
 */
class ModifySecurityGroupAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 安全组备注，最多100个字符。
         * @type {string || null}
         */
        this.GroupDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;

    }
}

/**
 * ModifyModuleConfig请求参数结构体
 * @class
 */
class ModifyModuleConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID。
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 机型ID。
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
         * @type {number || null}
         */
        this.DefaultDataDiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;

    }
}

/**
 * 描述实例的位置相关信息。
 * @class
 */
class Position extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所在的Zone的信息。
         * @type {ZoneInfo || null}
         */
        this.ZoneInfo = null;

        /**
         * 实例所在的国家的信息。
         * @type {Country || null}
         */
        this.Country = null;

        /**
         * 实例所在的Area的信息。
         * @type {Area || null}
         */
        this.Area = null;

        /**
         * 实例所在的省份的信息。
         * @type {Province || null}
         */
        this.Province = null;

        /**
         * 实例所在的城市的信息。
         * @type {City || null}
         */
        this.City = null;

        /**
         * 实例所在的Region的信息。
         * @type {RegionInfo || null}
         */
        this.RegionInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ZoneInfo) {
            let obj = new ZoneInfo();
            obj.deserialize(params.ZoneInfo)
            this.ZoneInfo = obj;
        }

        if (params.Country) {
            let obj = new Country();
            obj.deserialize(params.Country)
            this.Country = obj;
        }

        if (params.Area) {
            let obj = new Area();
            obj.deserialize(params.Area)
            this.Area = obj;
        }

        if (params.Province) {
            let obj = new Province();
            obj.deserialize(params.Province)
            this.Province = obj;
        }

        if (params.City) {
            let obj = new City();
            obj.deserialize(params.City)
            this.City = obj;
        }

        if (params.RegionInfo) {
            let obj = new RegionInfo();
            obj.deserialize(params.RegionInfo)
            this.RegionInfo = obj;
        }

    }
}

/**
 * DescribePeakNetworkOverview返回参数结构体
 * @class
 */
class DescribePeakNetworkOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络峰值数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PeakNetworkRegionInfo> || null}
         */
        this.PeakNetworkRegionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PeakNetworkRegionSet) {
            this.PeakNetworkRegionSet = new Array();
            for (let z in params.PeakNetworkRegionSet) {
                let obj = new PeakNetworkRegionInfo();
                obj.deserialize(params.PeakNetworkRegionSet[z]);
                this.PeakNetworkRegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AttachNetworkInterface返回参数结构体
 * @class
 */
class AttachNetworkInterfaceResponse extends  AbstractModel {
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
 * 安全组规则对象
 * @class
 */
class SecurityGroupPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组规则索引号
         * @type {number || null}
         */
        this.PolicyIndex = null;

        /**
         * 协议, 取值: TCP,UDP, ICMP。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口(all, 离散port, range)。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 协议端口ID或者协议端口组ID。ServiceTemplate和Protocol+Port互斥。
         * @type {ServiceTemplateSpecification || null}
         */
        this.ServiceTemplate = null;

        /**
         * 网段或IP(互斥)。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 安全组实例ID，例如：esg-ohuuioma。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * IP地址ID或者ID地址组ID。
         * @type {AddressTemplateSpecification || null}
         */
        this.AddressTemplate = null;

        /**
         * ACCEPT 或 DROP。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 安全组规则描述。
         * @type {string || null}
         */
        this.PolicyDescription = null;

        /**
         * 修改时间，例如 2020-07-22 19：27：23
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
        this.PolicyIndex = 'PolicyIndex' in params ? params.PolicyIndex : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;

        if (params.ServiceTemplate) {
            let obj = new ServiceTemplateSpecification();
            obj.deserialize(params.ServiceTemplate)
            this.ServiceTemplate = obj;
        }
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.AddressTemplate) {
            let obj = new AddressTemplateSpecification();
            obj.deserialize(params.AddressTemplate)
            this.AddressTemplate = obj;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.PolicyDescription = 'PolicyDescription' in params ? params.PolicyDescription : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeVpcs请求参数结构体
 * @class
 */
class DescribeVpcsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * 过滤条件，参数不支持同时指定VpcIds和Filters。
vpc-name - String - VPC实例名称，只支持单值的模糊查询。
vpc-id - String - VPC实例ID形如：vpc-f49l6u0z。
cidr-block - String - vpc的cidr，只支持单值的模糊查询。
region - String - vpc的region。
tag-key - String -是否必填：否- 按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - 按照标签键值对进行过滤。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 排序方式：time时间倒序, default按照网络规划排序
         * @type {string || null}
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
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;

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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Sort = 'Sort' in params ? params.Sort : null;

    }
}

/**
 * DescribeRouteConflicts返回参数结构体
 * @class
 */
class DescribeRouteConflictsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由策略冲突列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RouteConflict> || null}
         */
        this.RouteConflictSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RouteConflictSet) {
            this.RouteConflictSet = new Array();
            for (let z in params.RouteConflictSet) {
                let obj = new RouteConflict();
                obj.deserialize(params.RouteConflictSet[z]);
                this.RouteConflictSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRouteTables请求参数结构体
 * @class
 */
class DescribeRouteTablesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {Array.<string> || null}
         */
        this.RouteTableIds = null;

        /**
         * 过滤条件，参数不支持同时指定RouteTableIds和Filters。
route-table-id - String - （过滤条件）路由表实例ID。
route-table-name - String - （过滤条件）路由表名称。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
association.main - String - （过滤条件）是否主路由表。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * ECM 地域，传空或不传表示所有区域
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableIds = 'RouteTableIds' in params ? params.RouteTableIds : null;

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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * DescribeBaseOverview请求参数结构体
 * @class
 */
class DescribeBaseOverviewRequest extends  AbstractModel {
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
 * CreateHaVip返回参数结构体
 * @class
 */
class CreateHaVipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HAVIP对象。
         * @type {HaVip || null}
         */
        this.HaVip = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HaVip) {
            let obj = new HaVip();
            obj.deserialize(params.HaVip)
            this.HaVip = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
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
 * 磁盘信息
 * @class
 */
class DiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 磁盘类型：LOCAL_BASIC
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 磁盘ID
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 磁盘大小（GB）
         * @type {number || null}
         */
        this.DiskSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * ModifyRouteTableAttribute请求参数结构体
 * @class
 */
class ModifyRouteTableAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由表名称
         * @type {string || null}
         */
        this.RouteTableName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;

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
 * DescribeImportImageOs请求参数结构体
 * @class
 */
class DescribeImportImageOsRequest extends  AbstractModel {
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
 * DisableRoutes请求参数结构体
 * @class
 */
class DisableRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表唯一ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略ID。
         * @type {Array.<number> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

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
 * DescribeLoadBalanceTaskStatus返回参数结构体
 * @class
 */
class DescribeLoadBalanceTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务的当前状态。 0：成功，1：失败，2：进行中。
注意：此字段可能返回 null，表示取不到有效值。
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
 * EnableRoutes请求参数结构体
 * @class
 */
class EnableRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表唯一ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略ID。
         * @type {Array.<number> || null}
         */
        this.RouteIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.RouteIds = 'RouteIds' in params ? params.RouteIds : null;

    }
}

/**
 * ModifyDefaultSubnet请求参数结构体
 * @class
 */
class ModifyDefaultSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * ECM可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 私有网络ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤条件。
zone      String      是否必填：否     （过滤条件）按照可用区英文标识符过滤。
zone-name      String      是否必填：否     （过滤条件）按照可用区中文名过滤,支持模糊匹配。
module-id      String      是否必填：否     （过滤条件）按照模块ID过滤。
instance-id      String      是否必填：否      （过滤条件）按照实例ID过滤。
instance-name      String      是否必填：否      （过滤条件）按照实例名称过滤,支持模糊匹配。
ip-address      String      是否必填：否      （过滤条件）按照实例的内网/公网IP过滤。
instance-uuid   string 是否必填：否 （过滤条件）按照uuid过滤实例列表。
instance-state  string  是否必填：否 （过滤条件）按照实例状态更新实例列表。
internet-service-provider      String      是否必填：否      （过滤条件）按照实例公网IP所属的运营商进行过滤。
tag-key      String      是否必填：否      （过滤条件）按照标签键进行过滤。
tag:tag-key      String      是否必填：否      （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
module-name      String      是否必填：否      （过滤条件）按照模块名称过滤,支持模糊匹配。
image-id      String      是否必填：否      （过滤条件）按照实例的镜像ID过滤。
vpc-id String      是否必填：否      （过滤条件）按照实例的vpc id过滤。
subnet-id String      是否必填：否      （过滤条件）按照实例的subnet id过滤。

若不传Filters参数则表示查询所有相关的实例信息。
单次请求的Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为20(如果查询结果数目大于等于20)，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 指定排序字段。目前支持的可选值如下
timestamp 按实例创建时间排序。
注意：目前仅支持按创建时间排序，后续可能会有扩展。
如果不传，默认按实例创建时间排序
         * @type {string || null}
         */
        this.OrderByField = null;

        /**
         * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
         * @type {number || null}
         */
        this.OrderDirection = null;

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
        this.OrderByField = 'OrderByField' in params ? params.OrderByField : null;
        this.OrderDirection = 'OrderDirection' in params ? params.OrderDirection : null;

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
         * 监听器协议： TCP | UDP
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 要创建的监听器名称列表，名称与Ports数组按序一一对应，如不需立即命名，则无需提供此参数
         * @type {Array.<string> || null}
         */
        this.ListenerNames = null;

        /**
         * 健康检查相关参数
         * @type {HealthCheck || null}
         */
        this.HealthCheck = null;

        /**
         * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
         * @type {number || null}
         */
        this.SessionExpireTime = null;

        /**
         * 监听器转发的方式。可选值：WRR、LEAST_CONN
分别表示按权重轮询、最小连接数， 默认为 WRR。
         * @type {string || null}
         */
        this.Scheduler = null;

        /**
         * 会话保持类型。不传或传NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。QUIC_CID只支持UDP协议。
         * @type {string || null}
         */
        this.SessionType = null;

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
        this.SessionExpireTime = 'SessionExpireTime' in params ? params.SessionExpireTime : null;
        this.Scheduler = 'Scheduler' in params ? params.Scheduler : null;
        this.SessionType = 'SessionType' in params ? params.SessionType : null;

    }
}

/**
 * DescribeTaskResult请求参数结构体
 * @class
 */
class DescribeTaskResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 异步任务ID。
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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * 私有网络相关信息配置。
 * @class
 */
class VirtualPrivateCloud extends  AbstractModel {
    constructor(){
        super();

        /**
         * 私有网络ID，形如vpc-xxx。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络子网ID，形如subnet-xxx。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：
TRUE：表示用作公网网关
FALSE：表示不用作公网网关

默认取值：FALSE。
         * @type {boolean || null}
         */
        this.AsVpcGateway = null;

        /**
         * 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。
         * @type {Array.<string> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 为弹性网卡指定随机生成的 IPv6 地址数量。
         * @type {number || null}
         */
        this.Ipv6AddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.AsVpcGateway = 'AsVpcGateway' in params ? params.AsVpcGateway : null;
        this.PrivateIpAddresses = 'PrivateIpAddresses' in params ? params.PrivateIpAddresses : null;
        this.Ipv6AddressCount = 'Ipv6AddressCount' in params ? params.Ipv6AddressCount : null;

    }
}

/**
 * AssociateAddress返回参数结构体
 * @class
 */
class AssociateAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
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
 * 过滤器Filter;由Name和ValueSet组成，是string的key和字符串数组的value
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤字段名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 过滤字段内容数组
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
 * CreateRouteTable请求参数结构体
 * @class
 */
class CreateRouteTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 路由表名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.RouteTableName = null;

        /**
         * ecm地域
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RouteTableName = 'RouteTableName' in params ? params.RouteTableName : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * 实例的公网ip相关信息。
 * @class
 */
class PublicIPAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费模式。
         * @type {string || null}
         */
        this.ChargeMode = null;

        /**
         * 实例的公网ip。
         * @type {string || null}
         */
        this.PublicIPAddress = null;

        /**
         * 实例的公网ip所属的运营商。
         * @type {ISP || null}
         */
        this.ISP = null;

        /**
         * 实例的最大出带宽上限，单位为Mbps。
         * @type {number || null}
         */
        this.MaxBandwidthOut = null;

        /**
         * 实例的最大入带宽上限，单位为Mbps。
         * @type {number || null}
         */
        this.MaxBandwidthIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChargeMode = 'ChargeMode' in params ? params.ChargeMode : null;
        this.PublicIPAddress = 'PublicIPAddress' in params ? params.PublicIPAddress : null;

        if (params.ISP) {
            let obj = new ISP();
            obj.deserialize(params.ISP)
            this.ISP = obj;
        }
        this.MaxBandwidthOut = 'MaxBandwidthOut' in params ? params.MaxBandwidthOut : null;
        this.MaxBandwidthIn = 'MaxBandwidthIn' in params ? params.MaxBandwidthIn : null;

    }
}

/**
 * TerminateInstances返回参数结构体
 * @class
 */
class TerminateInstancesResponse extends  AbstractModel {
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
 * CreateHaVip请求参数结构体
 * @class
 */
class CreateHaVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HAVIP所在私有网络ID。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * HAVIP所在子网ID。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * HAVIP名称。
         * @type {string || null}
         */
        this.HaVipName = null;

        /**
         * 指定虚拟IP地址，必须在VPC网段内且未被占用。不指定则自动分配。
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;

    }
}

/**
 * DescribeAddresses请求参数结构体
 * @class
 */
class DescribeAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：eip-11112222。参数不支持同时指定AddressIds和Filters。
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * 每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定AddressIds和Filters。详细的过滤条件如下：
address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。
address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。
address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。
address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。取值范围：详见EIP状态列表。
instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。
private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。
network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。
is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常）
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;

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
 * DescribeSecurityGroupPolicies请求参数结构体
 * @class
 */
class DescribeSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如：esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * MigrateNetworkInterface请求参数结构体
 * @class
 */
class MigrateNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 弹性网卡当前绑定的ECM实例ID。形如：ein-r8hr2upy。
         * @type {string || null}
         */
        this.SourceInstanceId = null;

        /**
         * 待迁移的目的ECM实例ID。
         * @type {string || null}
         */
        this.DestinationInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.SourceInstanceId = 'SourceInstanceId' in params ? params.SourceInstanceId : null;
        this.DestinationInstanceId = 'DestinationInstanceId' in params ? params.DestinationInstanceId : null;

    }
}

/**
 * DescribeAddressQuota返回参数结构体
 * @class
 */
class DescribeAddressQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户 EIP 配额信息。
         * @type {Array.<EipQuota> || null}
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
                let obj = new EipQuota();
                obj.deserialize(params.QuotaSet[z]);
                this.QuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSecurityGroupPolicies返回参数结构体
 * @class
 */
class CreateSecurityGroupPoliciesResponse extends  AbstractModel {
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
 * CreateSecurityGroup返回参数结构体
 * @class
 */
class CreateSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组对象。
         * @type {SecurityGroup || null}
         */
        this.SecurityGroup = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityGroup) {
            let obj = new SecurityGroup();
            obj.deserialize(params.SecurityGroup)
            this.SecurityGroup = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Zone的实例信息
 * @class
 */
class ZoneInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Zone名称
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 实例数量
         * @type {number || null}
         */
        this.InstanceNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;

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
 * DeleteSecurityGroup请求参数结构体
 * @class
 */
class DeleteSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * ReplaceRoutes请求参数结构体
 * @class
 */
class ReplaceRoutesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 路由策略对象。
         * @type {Array.<Route> || null}
         */
        this.Routes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;

        if (params.Routes) {
            this.Routes = new Array();
            for (let z in params.Routes) {
                let obj = new Route();
                obj.deserialize(params.Routes[z]);
                this.Routes.push(obj);
            }
        }

    }
}

/**
 * CreateRouteTable返回参数结构体
 * @class
 */
class CreateRouteTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表对象
         * @type {RouteTable || null}
         */
        this.RouteTable = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RouteTable) {
            let obj = new RouteTable();
            obj.deserialize(params.RouteTable)
            this.RouteTable = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyModuleImage返回参数结构体
 * @class
 */
class ModifyModuleImageResponse extends  AbstractModel {
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
 * DeleteRoutes返回参数结构体
 * @class
 */
class DeleteRoutesResponse extends  AbstractModel {
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
 * ResetInstances请求参数结构体
 * @class
 */
class ResetInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待重装的实例ID列表。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 重装使用的镜像ID，若未指定，则使用各个实例当前的镜像进行重装。
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 密码设置，若未指定，则后续将以站内信的形式通知密码。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否开启云监控和云镜服务，未指定时默认开启。
         * @type {EnhancedService || null}
         */
        this.EnhancedService = null;

        /**
         * 是否保留数据盘数据，取值"true"/"false"。默认为"true"
         * @type {string || null}
         */
        this.KeepData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.Password = 'Password' in params ? params.Password : null;

        if (params.EnhancedService) {
            let obj = new EnhancedService();
            obj.deserialize(params.EnhancedService)
            this.EnhancedService = obj;
        }
        this.KeepData = 'KeepData' in params ? params.KeepData : null;

    }
}

/**
 * 峰值网络数据
 * @class
 */
class PeakNetwork extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录时间。
         * @type {string || null}
         */
        this.RecordTime = null;

        /**
         * 入带宽数据。
         * @type {string || null}
         */
        this.PeakInNetwork = null;

        /**
         * 出带宽数据。
         * @type {string || null}
         */
        this.PeakOutNetwork = null;

        /**
         * 计费带宽。单位bps
         * @type {string || null}
         */
        this.ChargeNetwork = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecordTime = 'RecordTime' in params ? params.RecordTime : null;
        this.PeakInNetwork = 'PeakInNetwork' in params ? params.PeakInNetwork : null;
        this.PeakOutNetwork = 'PeakOutNetwork' in params ? params.PeakOutNetwork : null;
        this.ChargeNetwork = 'ChargeNetwork' in params ? params.ChargeNetwork : null;

    }
}

/**
 * DescribeCustomImageTask请求参数结构体
 * @class
 */
class DescribeCustomImageTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持key,value查询
task-id: 异步任务ID
image-id: 镜像ID
image-name: 镜像名称
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
 * DescribeSecurityGroupAssociationStatistics返回参数结构体
 * @class
 */
class DescribeSecurityGroupAssociationStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组关联实例统计。
         * @type {Array.<SecurityGroupAssociationStatistics> || null}
         */
        this.SecurityGroupAssociationStatisticsSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SecurityGroupAssociationStatisticsSet) {
            this.SecurityGroupAssociationStatisticsSet = new Array();
            for (let z in params.SecurityGroupAssociationStatisticsSet) {
                let obj = new SecurityGroupAssociationStatistics();
                obj.deserialize(params.SecurityGroupAssociationStatisticsSet[z]);
                this.SecurityGroupAssociationStatisticsSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyPrivateIpAddressesAttribute请求参数结构体
 * @class
 */
class ModifyPrivateIpAddressesAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 指定的内网IP信息。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * ECM 节点Region信息，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

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
 * 支持的操作系统类型，根据windows和Linux分类。
 * @class
 */
class ImageOsList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的windows操作系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Windows = null;

        /**
         * 支持的linux操作系统
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Linux = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Windows = 'Windows' in params ? params.Windows : null;
        this.Linux = 'Linux' in params ? params.Linux : null;

    }
}

/**
 * 实例可执行操作
 * @class
 */
class InstanceOperator extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例禁止的操作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OperatorAction> || null}
         */
        this.DeniedActions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DeniedActions) {
            this.DeniedActions = new Array();
            for (let z in params.DeniedActions) {
                let obj = new OperatorAction();
                obj.deserialize(params.DeniedActions[z]);
                this.DeniedActions.push(obj);
            }
        }

    }
}

/**
 * ModifyAddressAttribute返回参数结构体
 * @class
 */
class ModifyAddressAttributeResponse extends  AbstractModel {
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
 * ImportImage返回参数结构体
 * @class
 */
class ImportImageResponse extends  AbstractModel {
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
         * @type {Array.<TargetsWeightRule> || null}
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
                let obj = new TargetsWeightRule();
                obj.deserialize(params.ModifyList[z]);
                this.ModifyList.push(obj);
            }
        }

    }
}

/**
 * CreateSecurityGroup请求参数结构体
 * @class
 */
class CreateSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 安全组备注，最多100个字符。
         * @type {string || null}
         */
        this.GroupDescription = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
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
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.GroupDescription = 'GroupDescription' in params ? params.GroupDescription : null;

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
 * DescribeSecurityGroupLimits请求参数结构体
 * @class
 */
class DescribeSecurityGroupLimitsRequest extends  AbstractModel {
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
 * 负责均衡批量目标项
 * @class
 */
class BatchTarget extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 绑定端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 子机ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 弹性网卡ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EniIp = null;

        /**
         * 子机权重，范围[0, 100]。绑定时如果不存在，则默认为10。
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
        this.ListenerId = 'ListenerId' in params ? params.ListenerId : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EniIp = 'EniIp' in params ? params.EniIp : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * 城市信息
 * @class
 */
class City extends  AbstractModel {
    constructor(){
        super();

        /**
         * 城市ID
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * 城市名称
         * @type {string || null}
         */
        this.CityName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.CityName = 'CityName' in params ? params.CityName : null;

    }
}

/**
 * 实例的内网ip相关信息。
 * @class
 */
class PrivateIPAddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的内网ip。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateIPAddress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PrivateIPAddress = 'PrivateIPAddress' in params ? params.PrivateIPAddress : null;

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
 * EnableRoutes返回参数结构体
 * @class
 */
class EnableRoutesResponse extends  AbstractModel {
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
 * DeleteNetworkInterface返回参数结构体
 * @class
 */
class DeleteNetworkInterfaceResponse extends  AbstractModel {
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
 * Module的简要信息
 * @class
 */
class SimpleModule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 模块名称
         * @type {string || null}
         */
        this.ModuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;

    }
}

/**
 * DescribePeakNetworkOverview请求参数结构体
 * @class
 */
class DescribePeakNetworkOverviewRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期，不应与当前日期间隔超过30天。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天，不应与当前日期间隔超过30天。当开始与结束间隔不超过1天时会返回1分钟粒度的数据，不超过7天时返回5分钟粒度的数据，否则返回1小时粒度的数据。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 过滤条件。

region    String      是否必填：否     （过滤条件）按照region过滤，不支持模糊匹配。注意 region 填上需要查询ecm region才能返回数据。
area       String      是否必填：否     （过滤条件）按照大区过滤，不支持模糊匹配。大区包括：china-central、china-east等等，可以通过DescribeNode获得所有大区；也可使用ALL_REGION表示所有地区。
isp         String      是否必填：否     （过滤条件）按照运营商过滤大区流量，运营商包括CTCC、CUCC和CMCC。只和area同时使用，且一次只能指定一种运营商。

region和area只应填写一个。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 统计周期，单位秒。取值60/300。
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
        this.Period = 'Period' in params ? params.Period : null;

    }
}

/**
 * ModifyModuleIpDirect返回参数结构体
 * @class
 */
class ModifyModuleIpDirectResponse extends  AbstractModel {
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
 * AssignPrivateIpAddresses返回参数结构体
 * @class
 */
class AssignPrivateIpAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内网IP详细信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddressSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PrivateIpAddressSet) {
            this.PrivateIpAddressSet = new Array();
            for (let z in params.PrivateIpAddressSet) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddressSet[z]);
                this.PrivateIpAddressSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSecurityGroups请求参数结构体
 * @class
 */
class DescribeSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如：esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。每次请求的实例的上限为100。参数不支持同时指定SecurityGroupIds和Filters。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 过滤条件，参数不支持同时指定SecurityGroupIds和Filters。
security-group-id - String - （过滤条件）安全组ID。
security-group-name - String - （过滤条件）安全组名称。
tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

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
 * region维度的网络峰值信息
 * @class
 */
class PeakNetworkRegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * region信息
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 网络峰值集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PeakNetwork> || null}
         */
        this.PeakNetworkSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;

        if (params.PeakNetworkSet) {
            this.PeakNetworkSet = new Array();
            for (let z in params.PeakNetworkSet) {
                let obj = new PeakNetwork();
                obj.deserialize(params.PeakNetworkSet[z]);
                this.PeakNetworkSet.push(obj);
            }
        }

    }
}

/**
 * ModifyHaVipAttribute请求参数结构体
 * @class
 */
class ModifyHaVipAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HAVIP唯一ID，形如：havip-9o233uri。
         * @type {string || null}
         */
        this.HaVipId = null;

        /**
         * HAVIP名称，可任意命名，但不得超过60个字符。
         * @type {string || null}
         */
        this.HaVipName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;
        this.HaVipName = 'HaVipName' in params ? params.HaVipName : null;

    }
}

/**
 * RebootInstances返回参数结构体
 * @class
 */
class RebootInstancesResponse extends  AbstractModel {
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
 * ModifyModuleIpDirect请求参数结构体
 * @class
 */
class ModifyModuleIpDirectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块ID。
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 是否关闭IP直通。取值范围：
true：表示关闭IP直通
false：表示开通IP直通
         * @type {boolean || null}
         */
        this.CloseIpDirect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.CloseIpDirect = 'CloseIpDirect' in params ? params.CloseIpDirect : null;

    }
}

/**
 * ModifyAddressesBandwidth请求参数结构体
 * @class
 */
class ModifyAddressesBandwidthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * EIP唯一标识ID，形如'eip-xxxxxxx'
         * @type {Array.<string> || null}
         */
        this.AddressIds = null;

        /**
         * 调整带宽目标值
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressIds = 'AddressIds' in params ? params.AddressIds : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;

    }
}

/**
 * DeleteSecurityGroupPolicies返回参数结构体
 * @class
 */
class DeleteSecurityGroupPoliciesResponse extends  AbstractModel {
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
 * ModifyAddressAttribute请求参数结构体
 * @class
 */
class ModifyAddressAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 修改后的 EIP 名称。长度上限为20个字符。
         * @type {string || null}
         */
        this.AddressName = null;

        /**
         * 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。
         * @type {string || null}
         */
        this.EipDirectConnection = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;
        this.EipDirectConnection = 'EipDirectConnection' in params ? params.EipDirectConnection : null;

    }
}

/**
 * PeakFamilyInfo 按机型类别分类的cpu等数据的峰值信息
 * @class
 */
class PeakFamilyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机型类别信息。
         * @type {InstanceFamilyTypeConfig || null}
         */
        this.InstanceFamily = null;

        /**
         * 基础数据峰值信息。
         * @type {Array.<PeakBase> || null}
         */
        this.PeakBaseSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceFamily) {
            let obj = new InstanceFamilyTypeConfig();
            obj.deserialize(params.InstanceFamily)
            this.InstanceFamily = obj;
        }

        if (params.PeakBaseSet) {
            this.PeakBaseSet = new Array();
            for (let z in params.PeakBaseSet) {
                let obj = new PeakBase();
                obj.deserialize(params.PeakBaseSet[z]);
                this.PeakBaseSet.push(obj);
            }
        }

    }
}

/**
 * DescribePeakBaseOverview返回参数结构体
 * @class
 */
class DescribePeakBaseOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 基础峰值列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PeakFamilyInfo> || null}
         */
        this.PeakFamilyInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PeakFamilyInfoSet) {
            this.PeakFamilyInfoSet = new Array();
            for (let z in params.PeakFamilyInfoSet) {
                let obj = new PeakFamilyInfo();
                obj.deserialize(params.PeakFamilyInfoSet[z]);
                this.PeakFamilyInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyImageAttribute返回参数结构体
 * @class
 */
class ModifyImageAttributeResponse extends  AbstractModel {
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
 * DescribeHaVips请求参数结构体
 * @class
 */
class DescribeHaVipsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HAVIP数组，HAVIP唯一ID，形如：havip-9o233uri。
         * @type {Array.<string> || null}
         */
        this.HaVipIds = null;

        /**
         * 过滤条件，参数不支持同时指定HaVipIds和Filters。
havip-id - String - HAVIP唯一ID，形如：havip-9o233uri。
havip-name - String - HAVIP名称。
vpc-id - String - HAVIP所在私有网络ID。
subnet-id - String - HAVIP所在子网ID。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认值是0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认值是20，最大是100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Ecm 区域，不填代表全部区域。
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipIds = 'HaVipIds' in params ? params.HaVipIds : null;

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
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

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
 * DescribeImage返回参数结构体
 * @class
 */
class DescribeImageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Image> || null}
         */
        this.ImageSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ImageSet) {
            this.ImageSet = new Array();
            for (let z in params.ImageSet) {
                let obj = new Image();
                obj.deserialize(params.ImageSet[z]);
                this.ImageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 监听器后端
 * @class
 */
class ListenerBackend extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ListenerId = null;

        /**
         * 监听器的协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器的端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 监听器上绑定的后端服务列表
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
 * Region和RegionName
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Region名称
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * RegionID
         * @type {number || null}
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
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;

    }
}

/**
 * 标签信息。
 * @class
 */
class TagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签的键。
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签的值。
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
 * DeleteImage返回参数结构体
 * @class
 */
class DeleteImageResponse extends  AbstractModel {
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
 * 描述 EIP 信息
 * @class
 */
class Address extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP的ID，是EIP的唯一标识。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * EIP名称。
         * @type {string || null}
         */
        this.AddressName = null;

        /**
         * EIP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)
         * @type {string || null}
         */
        this.AddressStatus = null;

        /**
         * 外网IP地址
         * @type {string || null}
         */
        this.AddressIp = null;

        /**
         * 绑定的资源实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 创建时间。ISO 8601 格式：YYYY-MM-DDTHH:mm:ss.sssZ
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 绑定的弹性网卡ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 绑定的资源内网ip
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateAddressIp = null;

        /**
         * 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态
         * @type {boolean || null}
         */
        this.IsArrears = null;

        /**
         * 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态
         * @type {boolean || null}
         */
        this.IsBlocked = null;

        /**
         * eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式
         * @type {boolean || null}
         */
        this.IsEipDirectConnection = null;

        /**
         * eip资源类型，包括"CalcIP","WanIP","EIP","AnycastEIP"。其中"CalcIP"表示设备ip，“WanIP”表示普通公网ip，“EIP”表示弹性公网ip，“AnycastEip”表示加速EIP
         * @type {string || null}
         */
        this.AddressType = null;

        /**
         * eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放
         * @type {boolean || null}
         */
        this.CascadeRelease = null;

        /**
         * 运营商，CTCC电信，CUCC联通，CMCC移动
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InternetServiceProvider = null;

        /**
         * 带宽上限
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 计费模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.AddressName = 'AddressName' in params ? params.AddressName : null;
        this.AddressStatus = 'AddressStatus' in params ? params.AddressStatus : null;
        this.AddressIp = 'AddressIp' in params ? params.AddressIp : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.PrivateAddressIp = 'PrivateAddressIp' in params ? params.PrivateAddressIp : null;
        this.IsArrears = 'IsArrears' in params ? params.IsArrears : null;
        this.IsBlocked = 'IsBlocked' in params ? params.IsBlocked : null;
        this.IsEipDirectConnection = 'IsEipDirectConnection' in params ? params.IsEipDirectConnection : null;
        this.AddressType = 'AddressType' in params ? params.AddressType : null;
        this.CascadeRelease = 'CascadeRelease' in params ? params.CascadeRelease : null;
        this.InternetServiceProvider = 'InternetServiceProvider' in params ? params.InternetServiceProvider : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * DescribeNetworkInterfaces返回参数结构体
 * @class
 */
class DescribeNetworkInterfacesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<NetworkInterface> || null}
         */
        this.NetworkInterfaceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NetworkInterfaceSet) {
            this.NetworkInterfaceSet = new Array();
            for (let z in params.NetworkInterfaceSet) {
                let obj = new NetworkInterface();
                obj.deserialize(params.NetworkInterfaceSet[z]);
                this.NetworkInterfaceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteHaVip请求参数结构体
 * @class
 */
class DeleteHaVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * HAVIP唯一ID，形如：havip-9o233uri。
         * @type {string || null}
         */
        this.HaVipId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HaVipId = 'HaVipId' in params ? params.HaVipId : null;

    }
}

/**
 * AssignPrivateIpAddresses请求参数结构体
 * @class
 */
class AssignPrivateIpAddressesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * ECM 地域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。
         * @type {Array.<PrivateIpAddressSpecification> || null}
         */
        this.PrivateIpAddresses = null;

        /**
         * 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数
         * @type {number || null}
         */
        this.SecondaryPrivateIpAddressCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

        if (params.PrivateIpAddresses) {
            this.PrivateIpAddresses = new Array();
            for (let z in params.PrivateIpAddresses) {
                let obj = new PrivateIpAddressSpecification();
                obj.deserialize(params.PrivateIpAddresses[z]);
                this.PrivateIpAddresses.push(obj);
            }
        }
        this.SecondaryPrivateIpAddressCount = 'SecondaryPrivateIpAddressCount' in params ? params.SecondaryPrivateIpAddressCount : null;

    }
}

/**
 * ResetInstancesPassword请求参数结构体
 * @class
 */
class ResetInstancesPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待重置密码的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 新密码，Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
如果实例即包含Linux实例又包含Windows实例，则密码复杂度限制按照Windows实例的限制。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否强制关机，默认为false。
         * @type {boolean || null}
         */
        this.ForceStop = null;

        /**
         * 待重置密码的实例的用户名，不得超过64个字符。若未指定用户名，则对于Linux而言，默认重置root用户的密码，对于Windows而言，默认重置administrator的密码。
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * ModifyImageAttribute请求参数结构体
 * @class
 */
class ModifyImageAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID，形如img-gvbnzy6f
         * @type {string || null}
         */
        this.ImageId = null;

        /**
         * 设置新的镜像名称；必须满足下列限制：
不得超过20个字符。
- 镜像名称不能与已有镜像重复。
         * @type {string || null}
         */
        this.ImageName = null;

        /**
         * 设置新的镜像描述；必须满足下列限制：
- 不得超过60个字符。
         * @type {string || null}
         */
        this.ImageDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageId = 'ImageId' in params ? params.ImageId : null;
        this.ImageName = 'ImageName' in params ? params.ImageName : null;
        this.ImageDescription = 'ImageDescription' in params ? params.ImageDescription : null;

    }
}

/**
 * 机器网络资源限制
 * @class
 */
class InstanceNetworkLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * cpu核数
         * @type {number || null}
         */
        this.CpuNum = null;

        /**
         * 网卡数量限制
         * @type {number || null}
         */
        this.NetworkInterfaceLimit = null;

        /**
         * 每张网卡内网ip数量限制
         * @type {number || null}
         */
        this.InnerIpPerNetworkInterface = null;

        /**
         * 每个实例的外网ip限制
         * @type {number || null}
         */
        this.PublicIpPerInstance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CpuNum = 'CpuNum' in params ? params.CpuNum : null;
        this.NetworkInterfaceLimit = 'NetworkInterfaceLimit' in params ? params.NetworkInterfaceLimit : null;
        this.InnerIpPerNetworkInterface = 'InnerIpPerNetworkInterface' in params ? params.InnerIpPerNetworkInterface : null;
        this.PublicIpPerInstance = 'PublicIpPerInstance' in params ? params.PublicIpPerInstance : null;

    }
}

/**
 * 操作Action
 * @class
 */
class OperatorAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可执行操作
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 编码Code
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 具体信息
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
        this.Action = 'Action' in params ? params.Action : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * CreateVpc请求参数结构体
 * @class
 */
class CreateVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * vpc名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * vpc的cidr，只能为10.*.0.0/16，172.[16-31].0.0/16，192.168.0.0/16这三个内网网段内。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 是否开启组播。true: 开启, false: 不开启。暂不支持
         * @type {string || null}
         */
        this.EnableMulticast = null;

        /**
         * DNS地址，最多支持4个，暂不支持
         * @type {Array.<string> || null}
         */
        this.DnsServers = null;

        /**
         * 域名，暂不支持
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
         * @type {Array.<Tag> || null}
         */
        this.Tags = null;

        /**
         * 描述信息
         * @type {string || null}
         */
        this.Description = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.EnableMulticast = 'EnableMulticast' in params ? params.EnableMulticast : null;
        this.DnsServers = 'DnsServers' in params ? params.DnsServers : null;
        this.DomainName = 'DomainName' in params ? params.DomainName : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new Tag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.Description = 'Description' in params ? params.Description : null;

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
         * 由负载均衡实例ID组成的数组
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
        this.LoadBalancerIds = 'LoadBalancerIds' in params ? params.LoadBalancerIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云镜服务；
 * @class
 */
class RunSecurityServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启。
         * @type {boolean || null}
         */
        this.Enabled = null;

        /**
         * 云镜版本：0 基础版，1 专业版。目前仅支持基础版
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
        this.Enabled = 'Enabled' in params ? params.Enabled : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * DescribeSecurityGroupAssociationStatistics请求参数结构体
 * @class
 */
class DescribeSecurityGroupAssociationStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全实例ID，例如esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * 国家信息
 * @class
 */
class Country extends  AbstractModel {
    constructor(){
        super();

        /**
         * 国家ID
         * @type {string || null}
         */
        this.CountryId = null;

        /**
         * 国家名称
         * @type {string || null}
         */
        this.CountryName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CountryId = 'CountryId' in params ? params.CountryId : null;
        this.CountryName = 'CountryName' in params ? params.CountryName : null;

    }
}

/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要解绑的安全组ID，类似esg-efil73jd，只支持解绑单个安全组。
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 被解绑的实例ID，类似ein-lesecurk，支持指定多个实例 。
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
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeRouteTables返回参数结构体
 * @class
 */
class DescribeRouteTablesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 路由表列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RouteTable> || null}
         */
        this.RouteTableSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RouteTableSet) {
            this.RouteTableSet = new Array();
            for (let z in params.RouteTableSet) {
                let obj = new RouteTable();
                obj.deserialize(params.RouteTableSet[z]);
                this.RouteTableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StopInstances请求参数结构体
 * @class
 */
class StopInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要关机的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIdSet = null;

        /**
         * 是否在正常关闭失败后选择强制关闭实例，默认为false，即否。
         * @type {boolean || null}
         */
        this.ForceStop = null;

        /**
         * 实例的关闭模式。取值范围：
SOFT_FIRST：表示在正常关闭失败后进行强制关闭;
HARD：直接强制关闭;
SOFT：仅软关机；
默认为SOFT。
         * @type {string || null}
         */
        this.StopType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdSet = 'InstanceIdSet' in params ? params.InstanceIdSet : null;
        this.ForceStop = 'ForceStop' in params ? params.ForceStop : null;
        this.StopType = 'StopType' in params ? params.StopType : null;

    }
}

/**
 * ModifySubnetAttribute请求参数结构体
 * @class
 */
class ModifySubnetAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子网实例ID。形如：subnet-pxir56ns。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 子网名称，最大长度不能超过60个字节。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网是否开启广播。
         * @type {string || null}
         */
        this.EnableBroadcast = null;

        /**
         * 子网的标签键值
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
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.EnableBroadcast = 'EnableBroadcast' in params ? params.EnableBroadcast : null;

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
 * AllocateAddresses返回参数结构体
 * @class
 */
class AllocateAddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请到的 EIP 的唯一 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AddressSet = null;

        /**
         * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
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
        this.AddressSet = 'AddressSet' in params ? params.AddressSet : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateAddress请求参数结构体
 * @class
 */
class DisassociateAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ECM 地域
         * @type {string || null}
         */
        this.EcmRegion = null;

        /**
         * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
         * @type {string || null}
         */
        this.AddressId = null;

        /**
         * 表示解绑 EIP 之后是否分配普通公网 IP。取值范围：
TRUE：表示解绑 EIP 之后分配普通公网 IP。
FALSE：表示解绑 EIP 之后不分配普通公网 IP。
默认取值：FALSE。

只有满足以下条件时才能指定该参数：
只有在解绑主网卡的主内网 IP 上的 EIP 时才能指定该参数。
解绑 EIP 后重新分配普通公网 IP 操作一个账号每天最多操作 10 次；详情可通过 DescribeAddressQuota 接口获取。
         * @type {boolean || null}
         */
        this.ReallocateNormalPublicIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;
        this.AddressId = 'AddressId' in params ? params.AddressId : null;
        this.ReallocateNormalPublicIp = 'ReallocateNormalPublicIp' in params ? params.ReallocateNormalPublicIp : null;

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
         * 要查询的监听器协议类型，取值 TCP | UDP
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
 * AttachNetworkInterface请求参数结构体
 * @class
 */
class AttachNetworkInterfaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 弹性网卡实例ID，例如：eni-m6dyj72l。
         * @type {string || null}
         */
        this.NetworkInterfaceId = null;

        /**
         * 实例ID。形如：ein-r8hr2upy。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * ECM 地域，形如ap-xian-ecm。
         * @type {string || null}
         */
        this.EcmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NetworkInterfaceId = 'NetworkInterfaceId' in params ? params.NetworkInterfaceId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EcmRegion = 'EcmRegion' in params ? params.EcmRegion : null;

    }
}

/**
 * 模块列表Item信息
 * @class
 */
class ModuleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点实例统计信息
         * @type {NodeInstanceNum || null}
         */
        this.NodeInstanceNum = null;

        /**
         * 模块信息
         * @type {Module || null}
         */
        this.Module = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.NodeInstanceNum) {
            let obj = new NodeInstanceNum();
            obj.deserialize(params.NodeInstanceNum)
            this.NodeInstanceNum = obj;
        }

        if (params.Module) {
            let obj = new Module();
            obj.deserialize(params.Module)
            this.Module = obj;
        }

    }
}

/**
 * ModifyModuleImage请求参数结构体
 * @class
 */
class ModifyModuleImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认镜像ID
         * @type {string || null}
         */
        this.DefaultImageId = null;

        /**
         * 模块ID
         * @type {string || null}
         */
        this.ModuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DefaultImageId = 'DefaultImageId' in params ? params.DefaultImageId : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;

    }
}

/**
 * CreateSecurityGroupPolicies请求参数结构体
 * @class
 */
class CreateSecurityGroupPoliciesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组规则集合。
         * @type {SecurityGroupPolicySet || null}
         */
        this.SecurityGroupPolicySet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

        if (params.SecurityGroupPolicySet) {
            let obj = new SecurityGroupPolicySet();
            obj.deserialize(params.SecurityGroupPolicySet)
            this.SecurityGroupPolicySet = obj;
        }

    }
}

/**
 * 云监控服务
 * @class
 */
class RunMonitorServiceEnabled extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否开启。
         * @type {boolean || null}
         */
        this.Enabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Enabled = 'Enabled' in params ? params.Enabled : null;

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

    }
}

/**
 * DescribeImportImageOs返回参数结构体
 * @class
 */
class DescribeImportImageOsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的导入镜像的操作系统类型
         * @type {ImageOsList || null}
         */
        this.ImportImageOsListSupported = null;

        /**
         * 支持的导入镜像的操作系统版本
         * @type {Array.<OsVersion> || null}
         */
        this.ImportImageOsVersionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImportImageOsListSupported) {
            let obj = new ImageOsList();
            obj.deserialize(params.ImportImageOsListSupported)
            this.ImportImageOsListSupported = obj;
        }

        if (params.ImportImageOsVersionSet) {
            this.ImportImageOsVersionSet = new Array();
            for (let z in params.ImportImageOsVersionSet) {
                let obj = new OsVersion();
                obj.deserialize(params.ImportImageOsVersionSet[z]);
                this.ImportImageOsVersionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的负载均衡实例数组。
注意：此字段可能返回 null，表示取不到有效值。
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
 * ModifyRouteTableAttribute返回参数结构体
 * @class
 */
class ModifyRouteTableAttributeResponse extends  AbstractModel {
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
 * MigrateNetworkInterface返回参数结构体
 * @class
 */
class MigrateNetworkInterfaceResponse extends  AbstractModel {
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
 * DeleteImage请求参数结构体
 * @class
 */
class DeleteImageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID列表。
         * @type {Array.<string> || null}
         */
        this.ImageIDSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageIDSet = 'ImageIDSet' in params ? params.ImageIDSet : null;

    }
}

/**
 * 模块信息
 * @class
 */
class Module extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块Id
         * @type {string || null}
         */
        this.ModuleId = null;

        /**
         * 模块名称
         * @type {string || null}
         */
        this.ModuleName = null;

        /**
         * 模块状态：
NORMAL：正常
DELETING：删除中 
DELETEFAILED：删除失败
         * @type {string || null}
         */
        this.ModuleState = null;

        /**
         * 默认系统盘大小
         * @type {number || null}
         */
        this.DefaultSystemDiskSize = null;

        /**
         * 默认数据盘大小
         * @type {number || null}
         */
        this.DefaultDataDiskSize = null;

        /**
         * 默认机型
         * @type {InstanceTypeConfig || null}
         */
        this.InstanceTypeConfig = null;

        /**
         * 默认镜像
         * @type {Image || null}
         */
        this.DefaultImage = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 默认出带宽
         * @type {number || null}
         */
        this.DefaultBandwidth = null;

        /**
         * 标签集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Tag> || null}
         */
        this.TagSet = null;

        /**
         * 是否关闭IP直通
         * @type {number || null}
         */
        this.CloseIpDirect = null;

        /**
         * 默认安全组id列表
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 默认入带宽
         * @type {number || null}
         */
        this.DefaultBandwidthIn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.ModuleName = 'ModuleName' in params ? params.ModuleName : null;
        this.ModuleState = 'ModuleState' in params ? params.ModuleState : null;
        this.DefaultSystemDiskSize = 'DefaultSystemDiskSize' in params ? params.DefaultSystemDiskSize : null;
        this.DefaultDataDiskSize = 'DefaultDataDiskSize' in params ? params.DefaultDataDiskSize : null;

        if (params.InstanceTypeConfig) {
            let obj = new InstanceTypeConfig();
            obj.deserialize(params.InstanceTypeConfig)
            this.InstanceTypeConfig = obj;
        }

        if (params.DefaultImage) {
            let obj = new Image();
            obj.deserialize(params.DefaultImage)
            this.DefaultImage = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DefaultBandwidth = 'DefaultBandwidth' in params ? params.DefaultBandwidth : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new Tag();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }
        this.CloseIpDirect = 'CloseIpDirect' in params ? params.CloseIpDirect : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.DefaultBandwidthIn = 'DefaultBandwidthIn' in params ? params.DefaultBandwidthIn : null;

    }
}

/**
 * DescribeBaseOverview返回参数结构体
 * @class
 */
class DescribeBaseOverviewResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块数量，单位：个
         * @type {number || null}
         */
        this.ModuleNum = null;

        /**
         * 节点数量，单位：个
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * cpu核数，单位：个
         * @type {number || null}
         */
        this.VcpuNum = null;

        /**
         * 内存大小，单位：G
         * @type {number || null}
         */
        this.MemoryNum = null;

        /**
         * 硬盘大小，单位：G
         * @type {number || null}
         */
        this.StorageNum = null;

        /**
         * 昨日网络峰值,单位：M
         * @type {number || null}
         */
        this.NetworkNum = null;

        /**
         * 实例数量，单位：台
         * @type {number || null}
         */
        this.InstanceNum = null;

        /**
         * 运行中数量，单位：台
         * @type {number || null}
         */
        this.RunningNum = null;

        /**
         * 安全隔离数量，单位：台
         * @type {number || null}
         */
        this.IsolationNum = null;

        /**
         * 过期实例数量，单位：台
         * @type {number || null}
         */
        this.ExpiredNum = null;

        /**
         * 即将过期实例数量，单位：台
         * @type {number || null}
         */
        this.WillExpireNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModuleNum = 'ModuleNum' in params ? params.ModuleNum : null;
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.VcpuNum = 'VcpuNum' in params ? params.VcpuNum : null;
        this.MemoryNum = 'MemoryNum' in params ? params.MemoryNum : null;
        this.StorageNum = 'StorageNum' in params ? params.StorageNum : null;
        this.NetworkNum = 'NetworkNum' in params ? params.NetworkNum : null;
        this.InstanceNum = 'InstanceNum' in params ? params.InstanceNum : null;
        this.RunningNum = 'RunningNum' in params ? params.RunningNum : null;
        this.IsolationNum = 'IsolationNum' in params ? params.IsolationNum : null;
        this.ExpiredNum = 'ExpiredNum' in params ? params.ExpiredNum : null;
        this.WillExpireNum = 'WillExpireNum' in params ? params.WillExpireNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 协议端口模版
 * @class
 */
class ServiceTemplateSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议端口ID，例如：eppm-f5n1f8da。
         * @type {string || null}
         */
        this.ServiceId = null;

        /**
         * 协议端口组ID，例如：eppmg-f5n1f8da。
         * @type {string || null}
         */
        this.ServiceGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ServiceId = 'ServiceId' in params ? params.ServiceId : null;
        this.ServiceGroupId = 'ServiceGroupId' in params ? params.ServiceGroupId : null;

    }
}

/**
 * 后端的健康检查状态
 * @class
 */
class TargetHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target的内网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Target绑定的端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 当前健康状态，true：健康，false：不健康（包括尚未开始探测、探测中、状态异常等几种状态）。只有处于健康状态（且权重大于0），负载均衡才会向其转发流量。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.HealthStatus = null;

        /**
         * Target的实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 当前健康状态的详细信息。如：Alive、Dead、Unknown、Close。Alive状态为健康，Dead状态为异常，Unknown状态包括尚未开始探测、探测中、状态未知，Close为未配置健康检查。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HealthStatusDetail = null;

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

    }
}

/**
 * 监听器健康状态
 * @class
 */
class ListenerHealth extends  AbstractModel {
    constructor(){
        super();

        /**
         * 监听器ID
注意：此字段可能返回 null，表示取不到有效值。
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
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 监听器的端口
注意：此字段可能返回 null，表示取不到有效值。
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
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
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
 * DescribeRouteConflicts请求参数结构体
 * @class
 */
class DescribeRouteConflictsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 路由表实例ID，例如：rtb-azd4dt1c。
         * @type {string || null}
         */
        this.RouteTableId = null;

        /**
         * 要检查的与之冲突的目的端列表
         * @type {Array.<string> || null}
         */
        this.DestinationCidrBlocks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RouteTableId = 'RouteTableId' in params ? params.RouteTableId : null;
        this.DestinationCidrBlocks = 'DestinationCidrBlocks' in params ? params.DestinationCidrBlocks : null;

    }
}

/**
 * ReleaseIpv6Addresses返回参数结构体
 * @class
 */
class ReleaseIpv6AddressesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID，可以通过DescribeTaskResult查询任务状态
         * @type {number || null}
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
 * 负载均衡实例信息
 * @class
 */
class LoadBalancer extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区域。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 位置信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Position || null}
         */
        this.Position = null;

        /**
         * 负载均衡实例 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerId = null;

        /**
         * 负载均衡实例的名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerName = null;

        /**
         * 负载均衡实例的网络类型：OPEN：公网属性
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoadBalancerType = null;

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
         * 私有网络的 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 负载均衡实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TagInfo> || null}
         */
        this.Tags = null;

        /**
         * 负载均衡IP地址所属的ISP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VipIsp = null;

        /**
         * 负载均衡实例的网络属性。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LoadBalancerInternetAccessible || null}
         */
        this.NetworkAttributes = null;

        /**
         * 安全组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SecureGroups = null;

        /**
         * 后端机器是否放通来自ELB的流量。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Region = 'Region' in params ? params.Region : null;

        if (params.Position) {
            let obj = new Position();
            obj.deserialize(params.Position)
            this.Position = obj;
        }
        this.LoadBalancerId = 'LoadBalancerId' in params ? params.LoadBalancerId : null;
        this.LoadBalancerName = 'LoadBalancerName' in params ? params.LoadBalancerName : null;
        this.LoadBalancerType = 'LoadBalancerType' in params ? params.LoadBalancerType : null;
        this.LoadBalancerVips = 'LoadBalancerVips' in params ? params.LoadBalancerVips : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StatusTime = 'StatusTime' in params ? params.StatusTime : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new TagInfo();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.VipIsp = 'VipIsp' in params ? params.VipIsp : null;

        if (params.NetworkAttributes) {
            let obj = new LoadBalancerInternetAccessible();
            obj.deserialize(params.NetworkAttributes)
            this.NetworkAttributes = obj;
        }
        this.SecureGroups = 'SecureGroups' in params ? params.SecureGroups : null;
        this.LoadBalancerPassToTarget = 'LoadBalancerPassToTarget' in params ? params.LoadBalancerPassToTarget : null;

    }
}

/**
 * ip地址相关信息结构体。
 * @class
 */
class AddressInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的外网ip相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PublicIPAddressInfo || null}
         */
        this.PublicIPAddressInfo = null;

        /**
         * 实例的内网ip相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PrivateIPAddressInfo || null}
         */
        this.PrivateIPAddressInfo = null;

        /**
         * 实例的外网ipv6相关信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PublicIPAddressInfo || null}
         */
        this.PublicIPv6AddressInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PublicIPAddressInfo) {
            let obj = new PublicIPAddressInfo();
            obj.deserialize(params.PublicIPAddressInfo)
            this.PublicIPAddressInfo = obj;
        }

        if (params.PrivateIPAddressInfo) {
            let obj = new PrivateIPAddressInfo();
            obj.deserialize(params.PrivateIPAddressInfo)
            this.PrivateIPAddressInfo = obj;
        }

        if (params.PublicIPv6AddressInfo) {
            let obj = new PublicIPAddressInfo();
            obj.deserialize(params.PublicIPv6AddressInfo)
            this.PublicIPv6AddressInfo = obj;
        }

    }
}

module.exports = {
    RunEIPDirectServiceEnabled: RunEIPDirectServiceEnabled,
    DescribeTaskResultResponse: DescribeTaskResultResponse,
    Ipv6Address: Ipv6Address,
    BatchDeregisterTargetsResponse: BatchDeregisterTargetsResponse,
    DescribePeakBaseOverviewRequest: DescribePeakBaseOverviewRequest,
    SecurityGroupAssociationStatistics: SecurityGroupAssociationStatistics,
    SecurityGroupLimitSet: SecurityGroupLimitSet,
    DisassociateAddressResponse: DisassociateAddressResponse,
    BatchModifyTargetWeightResponse: BatchModifyTargetWeightResponse,
    InstanceStatistic: InstanceStatistic,
    CreateRoutesRequest: CreateRoutesRequest,
    SetSecurityGroupForLoadbalancersRequest: SetSecurityGroupForLoadbalancersRequest,
    CreateLoadBalancerRequest: CreateLoadBalancerRequest,
    DescribeHaVipsResponse: DescribeHaVipsResponse,
    ModifyModuleSecurityGroupsRequest: ModifyModuleSecurityGroupsRequest,
    Internet: Internet,
    DescribeModuleResponse: DescribeModuleResponse,
    ModifyLoadBalancerAttributesRequest: ModifyLoadBalancerAttributesRequest,
    DeleteSecurityGroupPoliciesRequest: DeleteSecurityGroupPoliciesRequest,
    ImageTask: ImageTask,
    Province: Province,
    DescribeMonthPeakNetworkResponse: DescribeMonthPeakNetworkResponse,
    ModifyModuleConfigResponse: ModifyModuleConfigResponse,
    NetworkStorageRange: NetworkStorageRange,
    ModifyModuleNameResponse: ModifyModuleNameResponse,
    DescribeNetworkInterfacesRequest: DescribeNetworkInterfacesRequest,
    DescribeSubnetsRequest: DescribeSubnetsRequest,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    StartInstancesRequest: StartInstancesRequest,
    ImageLimitConfig: ImageLimitConfig,
    HaVip: HaVip,
    RouteConflict: RouteConflict,
    SetLoadBalancerSecurityGroupsResponse: SetLoadBalancerSecurityGroupsResponse,
    EipQuota: EipQuota,
    DeleteSubnetResponse: DeleteSubnetResponse,
    ModifyAddressesBandwidthResponse: ModifyAddressesBandwidthResponse,
    DescribeSubnetsResponse: DescribeSubnetsResponse,
    Tag: Tag,
    RunInstancesRequest: RunInstancesRequest,
    ReleaseAddressesRequest: ReleaseAddressesRequest,
    DescribeLoadBalancersRequest: DescribeLoadBalancersRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeMonthPeakNetworkRequest: DescribeMonthPeakNetworkRequest,
    ImportImageRequest: ImportImageRequest,
    ModifyModuleSecurityGroupsResponse: ModifyModuleSecurityGroupsResponse,
    SrcImage: SrcImage,
    SetSecurityGroupForLoadbalancersResponse: SetSecurityGroupForLoadbalancersResponse,
    InstanceTypeConfig: InstanceTypeConfig,
    DescribeNodeResponse: DescribeNodeResponse,
    RemovePrivateIpAddressesResponse: RemovePrivateIpAddressesResponse,
    DescribeDefaultSubnetResponse: DescribeDefaultSubnetResponse,
    ReplaceRouteTableAssociationRequest: ReplaceRouteTableAssociationRequest,
    ReplaceSecurityGroupPolicyRequest: ReplaceSecurityGroupPolicyRequest,
    ModifyTargetWeightResponse: ModifyTargetWeightResponse,
    Node: Node,
    DescribeCustomImageTaskResponse: DescribeCustomImageTaskResponse,
    SecurityGroup: SecurityGroup,
    DeleteSubnetRequest: DeleteSubnetRequest,
    DescribeModuleRequest: DescribeModuleRequest,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    CreateNetworkInterfaceRequest: CreateNetworkInterfaceRequest,
    CreateModuleResponse: CreateModuleResponse,
    RebootInstancesRequest: RebootInstancesRequest,
    RuleHealth: RuleHealth,
    AllocateAddressesRequest: AllocateAddressesRequest,
    NetworkInterfaceAttachment: NetworkInterfaceAttachment,
    Instance: Instance,
    DeleteNetworkInterfaceRequest: DeleteNetworkInterfaceRequest,
    RemovePrivateIpAddressesRequest: RemovePrivateIpAddressesRequest,
    RouteTable: RouteTable,
    ZoneInstanceCountISP: ZoneInstanceCountISP,
    LoadBalancerHealth: LoadBalancerHealth,
    DescribeTargetsRequest: DescribeTargetsRequest,
    ModifyInstancesAttributeRequest: ModifyInstancesAttributeRequest,
    InstanceFamilyTypeConfig: InstanceFamilyTypeConfig,
    ResetInstancesResponse: ResetInstancesResponse,
    DeleteVpcRequest: DeleteVpcRequest,
    DeleteLoadBalancerListenersRequest: DeleteLoadBalancerListenersRequest,
    MigratePrivateIpAddressRequest: MigratePrivateIpAddressRequest,
    ModifySubnetAttributeResponse: ModifySubnetAttributeResponse,
    ZoneInfo: ZoneInfo,
    DescribeInstancesDeniedActionsRequest: DescribeInstancesDeniedActionsRequest,
    DeleteRouteTableRequest: DeleteRouteTableRequest,
    DescribeNodeRequest: DescribeNodeRequest,
    CreateSubnetResponse: CreateSubnetResponse,
    DescribeSecurityGroupPoliciesResponse: DescribeSecurityGroupPoliciesResponse,
    DescribeListenersResponse: DescribeListenersResponse,
    Area: Area,
    ModifySecurityGroupPoliciesRequest: ModifySecurityGroupPoliciesRequest,
    DescribeConfigRequest: DescribeConfigRequest,
    DescribeInstanceVncUrlRequest: DescribeInstanceVncUrlRequest,
    DescribeInstanceVncUrlResponse: DescribeInstanceVncUrlResponse,
    TargetsWeightRule: TargetsWeightRule,
    StopInstancesResponse: StopInstancesResponse,
    StartInstancesResponse: StartInstancesResponse,
    CreateVpcResponse: CreateVpcResponse,
    ModifyTargetPortResponse: ModifyTargetPortResponse,
    AssistantCidr: AssistantCidr,
    TerminateInstancesRequest: TerminateInstancesRequest,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    BatchRegisterTargetsResponse: BatchRegisterTargetsResponse,
    CreateModuleRequest: CreateModuleRequest,
    ReplaceRouteTableAssociationResponse: ReplaceRouteTableAssociationResponse,
    InstanceNetworkInfo: InstanceNetworkInfo,
    ModifyInstancesAttributeResponse: ModifyInstancesAttributeResponse,
    ReleaseAddressesResponse: ReleaseAddressesResponse,
    ModifyVpcAttributeRequest: ModifyVpcAttributeRequest,
    DescribeInstancesDeniedActionsResponse: DescribeInstancesDeniedActionsResponse,
    DeleteHaVipResponse: DeleteHaVipResponse,
    ReleaseIpv6AddressesRequest: ReleaseIpv6AddressesRequest,
    TaskOutput: TaskOutput,
    ModuleCounter: ModuleCounter,
    ReplaceSecurityGroupPolicyResponse: ReplaceSecurityGroupPolicyResponse,
    ModifyPrivateIpAddressesAttributeResponse: ModifyPrivateIpAddressesAttributeResponse,
    ReplaceRoutesResponse: ReplaceRoutesResponse,
    PhysicalPosition: PhysicalPosition,
    Listener: Listener,
    ModifyLoadBalancerAttributesResponse: ModifyLoadBalancerAttributesResponse,
    SetLoadBalancerSecurityGroupsRequest: SetLoadBalancerSecurityGroupsRequest,
    DescribeDefaultSubnetRequest: DescribeDefaultSubnetRequest,
    ResetInstancesMaxBandwidthResponse: ResetInstancesMaxBandwidthResponse,
    DeleteSecurityGroupResponse: DeleteSecurityGroupResponse,
    VpcInfo: VpcInfo,
    Route: Route,
    DescribeImageRequest: DescribeImageRequest,
    CreateNetworkInterfaceResponse: CreateNetworkInterfaceResponse,
    ModifyListenerRequest: ModifyListenerRequest,
    RunInstancesResponse: RunInstancesResponse,
    DescribeAddressQuotaRequest: DescribeAddressQuotaRequest,
    ModifyModuleNameRequest: ModifyModuleNameRequest,
    DescribeInstanceTypeConfigResponse: DescribeInstanceTypeConfigResponse,
    NodeInstanceNum: NodeInstanceNum,
    HealthCheck: HealthCheck,
    DescribeSecurityGroupLimitsResponse: DescribeSecurityGroupLimitsResponse,
    DescribeAddressesResponse: DescribeAddressesResponse,
    AssignIpv6AddressesResponse: AssignIpv6AddressesResponse,
    CreateRoutesResponse: CreateRoutesResponse,
    NetworkInterface: NetworkInterface,
    DeleteListenerRequest: DeleteListenerRequest,
    DescribeSecurityGroupsResponse: DescribeSecurityGroupsResponse,
    ImportCustomImageResponse: ImportCustomImageResponse,
    DetachNetworkInterfaceResponse: DetachNetworkInterfaceResponse,
    InstanceFamilyConfig: InstanceFamilyConfig,
    MonthNetwork: MonthNetwork,
    ResetRoutesResponse: ResetRoutesResponse,
    DeleteModuleRequest: DeleteModuleRequest,
    CreateImageResponse: CreateImageResponse,
    ModifySecurityGroupPoliciesResponse: ModifySecurityGroupPoliciesResponse,
    ResetInstancesMaxBandwidthRequest: ResetInstancesMaxBandwidthRequest,
    LoadBalancerInternetAccessible: LoadBalancerInternetAccessible,
    OsVersion: OsVersion,
    ResetRoutesRequest: ResetRoutesRequest,
    DisableRoutesResponse: DisableRoutesResponse,
    PeakBase: PeakBase,
    ResetInstancesPasswordResponse: ResetInstancesPasswordResponse,
    ModifyModuleNetworkRequest: ModifyModuleNetworkRequest,
    Image: Image,
    TagSpecification: TagSpecification,
    DetachNetworkInterfaceRequest: DetachNetworkInterfaceRequest,
    AddressTemplateSpecification: AddressTemplateSpecification,
    DescribeConfigResponse: DescribeConfigResponse,
    AssignIpv6AddressesRequest: AssignIpv6AddressesRequest,
    ModifyModuleNetworkResponse: ModifyModuleNetworkResponse,
    ModifyDefaultSubnetResponse: ModifyDefaultSubnetResponse,
    ModifyTargetWeightRequest: ModifyTargetWeightRequest,
    CreateSubnetRequest: CreateSubnetRequest,
    DescribeModuleDetailResponse: DescribeModuleDetailResponse,
    TaskInput: TaskInput,
    ModifyModuleDisableWanIpRequest: ModifyModuleDisableWanIpRequest,
    Backend: Backend,
    Subnet: Subnet,
    ModifyVpcAttributeResponse: ModifyVpcAttributeResponse,
    DeleteLoadBalancerRequest: DeleteLoadBalancerRequest,
    ModifyIpv6AddressesAttributeResponse: ModifyIpv6AddressesAttributeResponse,
    DeleteVpcResponse: DeleteVpcResponse,
    Target: Target,
    RouteTableAssociation: RouteTableAssociation,
    SecurityGroupPolicySet: SecurityGroupPolicySet,
    DescribeVpcsResponse: DescribeVpcsResponse,
    ImageUrl: ImageUrl,
    ISP: ISP,
    PrivateIpAddressSpecification: PrivateIpAddressSpecification,
    ModifySecurityGroupAttributeResponse: ModifySecurityGroupAttributeResponse,
    ISPCounter: ISPCounter,
    MigratePrivateIpAddressResponse: MigratePrivateIpAddressResponse,
    CreateImageRequest: CreateImageRequest,
    DeleteRouteTableResponse: DeleteRouteTableResponse,
    ModifyModuleDisableWanIpResponse: ModifyModuleDisableWanIpResponse,
    EnhancedService: EnhancedService,
    CreateListenerResponse: CreateListenerResponse,
    DeleteModuleResponse: DeleteModuleResponse,
    DescribeInstanceTypeConfigRequest: DescribeInstanceTypeConfigRequest,
    DescribeLoadBalanceTaskStatusRequest: DescribeLoadBalanceTaskStatusRequest,
    ImportCustomImageRequest: ImportCustomImageRequest,
    ModifyHaVipAttributeResponse: ModifyHaVipAttributeResponse,
    ModifyIpv6AddressesAttributeRequest: ModifyIpv6AddressesAttributeRequest,
    DescribeModuleDetailRequest: DescribeModuleDetailRequest,
    DeleteRoutesRequest: DeleteRoutesRequest,
    AssociateAddressRequest: AssociateAddressRequest,
    ModifySecurityGroupAttributeRequest: ModifySecurityGroupAttributeRequest,
    ModifyModuleConfigRequest: ModifyModuleConfigRequest,
    Position: Position,
    DescribePeakNetworkOverviewResponse: DescribePeakNetworkOverviewResponse,
    AttachNetworkInterfaceResponse: AttachNetworkInterfaceResponse,
    SecurityGroupPolicy: SecurityGroupPolicy,
    DescribeVpcsRequest: DescribeVpcsRequest,
    DescribeRouteConflictsResponse: DescribeRouteConflictsResponse,
    DescribeRouteTablesRequest: DescribeRouteTablesRequest,
    DescribeBaseOverviewRequest: DescribeBaseOverviewRequest,
    CreateHaVipResponse: CreateHaVipResponse,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    DiskInfo: DiskInfo,
    ModifyRouteTableAttributeRequest: ModifyRouteTableAttributeRequest,
    BatchDeregisterTargetsRequest: BatchDeregisterTargetsRequest,
    DescribeImportImageOsRequest: DescribeImportImageOsRequest,
    DisableRoutesRequest: DisableRoutesRequest,
    ModifyListenerResponse: ModifyListenerResponse,
    DescribeTargetHealthResponse: DescribeTargetHealthResponse,
    DescribeLoadBalanceTaskStatusResponse: DescribeLoadBalanceTaskStatusResponse,
    EnableRoutesRequest: EnableRoutesRequest,
    ModifyDefaultSubnetRequest: ModifyDefaultSubnetRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    CreateListenerRequest: CreateListenerRequest,
    DescribeTaskResultRequest: DescribeTaskResultRequest,
    VirtualPrivateCloud: VirtualPrivateCloud,
    AssociateAddressResponse: AssociateAddressResponse,
    Filter: Filter,
    CreateRouteTableRequest: CreateRouteTableRequest,
    PublicIPAddressInfo: PublicIPAddressInfo,
    TerminateInstancesResponse: TerminateInstancesResponse,
    CreateHaVipRequest: CreateHaVipRequest,
    DescribeAddressesRequest: DescribeAddressesRequest,
    DescribeSecurityGroupPoliciesRequest: DescribeSecurityGroupPoliciesRequest,
    MigrateNetworkInterfaceRequest: MigrateNetworkInterfaceRequest,
    DescribeAddressQuotaResponse: DescribeAddressQuotaResponse,
    CreateSecurityGroupPoliciesResponse: CreateSecurityGroupPoliciesResponse,
    CreateSecurityGroupResponse: CreateSecurityGroupResponse,
    ZoneInstanceInfo: ZoneInstanceInfo,
    DeleteLoadBalancerResponse: DeleteLoadBalancerResponse,
    DeleteSecurityGroupRequest: DeleteSecurityGroupRequest,
    ReplaceRoutesRequest: ReplaceRoutesRequest,
    CreateRouteTableResponse: CreateRouteTableResponse,
    ModifyModuleImageResponse: ModifyModuleImageResponse,
    DeleteRoutesResponse: DeleteRoutesResponse,
    ResetInstancesRequest: ResetInstancesRequest,
    PeakNetwork: PeakNetwork,
    DescribeCustomImageTaskRequest: DescribeCustomImageTaskRequest,
    DescribeSecurityGroupAssociationStatisticsResponse: DescribeSecurityGroupAssociationStatisticsResponse,
    ModifyPrivateIpAddressesAttributeRequest: ModifyPrivateIpAddressesAttributeRequest,
    DescribeTargetsResponse: DescribeTargetsResponse,
    ImageOsList: ImageOsList,
    InstanceOperator: InstanceOperator,
    ModifyAddressAttributeResponse: ModifyAddressAttributeResponse,
    ImportImageResponse: ImportImageResponse,
    BatchModifyTargetWeightRequest: BatchModifyTargetWeightRequest,
    CreateSecurityGroupRequest: CreateSecurityGroupRequest,
    DescribeSecurityGroupLimitsRequest: DescribeSecurityGroupLimitsRequest,
    BatchTarget: BatchTarget,
    City: City,
    PrivateIPAddressInfo: PrivateIPAddressInfo,
    DescribeTargetHealthRequest: DescribeTargetHealthRequest,
    EnableRoutesResponse: EnableRoutesResponse,
    DeleteNetworkInterfaceResponse: DeleteNetworkInterfaceResponse,
    SimpleModule: SimpleModule,
    DescribePeakNetworkOverviewRequest: DescribePeakNetworkOverviewRequest,
    ModifyModuleIpDirectResponse: ModifyModuleIpDirectResponse,
    AssignPrivateIpAddressesResponse: AssignPrivateIpAddressesResponse,
    DescribeSecurityGroupsRequest: DescribeSecurityGroupsRequest,
    PeakNetworkRegionInfo: PeakNetworkRegionInfo,
    ModifyHaVipAttributeRequest: ModifyHaVipAttributeRequest,
    RebootInstancesResponse: RebootInstancesResponse,
    ModifyModuleIpDirectRequest: ModifyModuleIpDirectRequest,
    ModifyAddressesBandwidthRequest: ModifyAddressesBandwidthRequest,
    DeleteSecurityGroupPoliciesResponse: DeleteSecurityGroupPoliciesResponse,
    ModifyAddressAttributeRequest: ModifyAddressAttributeRequest,
    PeakFamilyInfo: PeakFamilyInfo,
    DescribePeakBaseOverviewResponse: DescribePeakBaseOverviewResponse,
    ModifyImageAttributeResponse: ModifyImageAttributeResponse,
    DescribeHaVipsRequest: DescribeHaVipsRequest,
    BatchRegisterTargetsRequest: BatchRegisterTargetsRequest,
    DescribeImageResponse: DescribeImageResponse,
    ListenerBackend: ListenerBackend,
    RegionInfo: RegionInfo,
    TagInfo: TagInfo,
    DeleteImageResponse: DeleteImageResponse,
    Address: Address,
    DescribeNetworkInterfacesResponse: DescribeNetworkInterfacesResponse,
    DeleteHaVipRequest: DeleteHaVipRequest,
    AssignPrivateIpAddressesRequest: AssignPrivateIpAddressesRequest,
    ResetInstancesPasswordRequest: ResetInstancesPasswordRequest,
    ModifyImageAttributeRequest: ModifyImageAttributeRequest,
    InstanceNetworkLimitConfig: InstanceNetworkLimitConfig,
    OperatorAction: OperatorAction,
    CreateVpcRequest: CreateVpcRequest,
    CreateLoadBalancerResponse: CreateLoadBalancerResponse,
    RunSecurityServiceEnabled: RunSecurityServiceEnabled,
    DescribeSecurityGroupAssociationStatisticsRequest: DescribeSecurityGroupAssociationStatisticsRequest,
    Country: Country,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    DescribeRouteTablesResponse: DescribeRouteTablesResponse,
    StopInstancesRequest: StopInstancesRequest,
    ModifySubnetAttributeRequest: ModifySubnetAttributeRequest,
    AllocateAddressesResponse: AllocateAddressesResponse,
    DisassociateAddressRequest: DisassociateAddressRequest,
    DeleteLoadBalancerListenersResponse: DeleteLoadBalancerListenersResponse,
    DescribeListenersRequest: DescribeListenersRequest,
    AttachNetworkInterfaceRequest: AttachNetworkInterfaceRequest,
    ModuleItem: ModuleItem,
    ModifyModuleImageRequest: ModifyModuleImageRequest,
    CreateSecurityGroupPoliciesRequest: CreateSecurityGroupPoliciesRequest,
    RunMonitorServiceEnabled: RunMonitorServiceEnabled,
    ModifyTargetPortRequest: ModifyTargetPortRequest,
    DescribeImportImageOsResponse: DescribeImportImageOsResponse,
    DescribeLoadBalancersResponse: DescribeLoadBalancersResponse,
    ModifyRouteTableAttributeResponse: ModifyRouteTableAttributeResponse,
    MigrateNetworkInterfaceResponse: MigrateNetworkInterfaceResponse,
    DeleteListenerResponse: DeleteListenerResponse,
    DeleteImageRequest: DeleteImageRequest,
    Module: Module,
    DescribeBaseOverviewResponse: DescribeBaseOverviewResponse,
    ServiceTemplateSpecification: ServiceTemplateSpecification,
    TargetHealth: TargetHealth,
    ListenerHealth: ListenerHealth,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    DescribeRouteConflictsRequest: DescribeRouteConflictsRequest,
    ReleaseIpv6AddressesResponse: ReleaseIpv6AddressesResponse,
    LoadBalancer: LoadBalancer,
    AddressInfo: AddressInfo,

}

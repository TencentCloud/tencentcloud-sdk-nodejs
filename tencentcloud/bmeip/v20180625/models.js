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
 * UnbindEipAcls请求参数结构体
 * @class
 */
class UnbindEipAclsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待解关联的 EIP 与 ACL列表
         * @type {Array.<EipAclMap> || null}
         */
        this.EipIdAclIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EipIdAclIdList) {
            this.EipIdAclIdList = new Array();
            for (let z in params.EipIdAclIdList) {
                let obj = new EipAclMap();
                obj.deserialize(params.EipIdAclIdList[z]);
                this.EipIdAclIdList.push(obj);
            }
        }

    }
}

/**
 * eipid与aclid关联关系
 * @class
 */
class EipAclMap extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP 实例 ID
         * @type {string || null}
         */
        this.EipId = null;

        /**
         * ACL 实例 ID
         * @type {string || null}
         */
        this.AclId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipId = 'EipId' in params ? params.EipId : null;
        this.AclId = 'AclId' in params ? params.AclId : null;

    }
}

/**
 * ModifyEipCharge返回参数结构体
 * @class
 */
class ModifyEipChargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改计费模式的异步任务ID，可以通过查询EIP任务状态查询任务状态
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
 * ModifyEipAcl返回参数结构体
 * @class
 */
class ModifyEipAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEips返回参数结构体
 * @class
 */
class DescribeEipsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回EIP信息数组
         * @type {Array.<EipInfo> || null}
         */
        this.EipSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EipSet) {
            this.EipSet = new Array();
            for (let z in params.EipSet) {
                let obj = new EipInfo();
                obj.deserialize(params.EipSet[z]);
                this.EipSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEipAcl请求参数结构体
 * @class
 */
class ModifyEipAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ACL 实例 ID
         * @type {string || null}
         */
        this.AclId = null;

        /**
         * ACL 名称
         * @type {string || null}
         */
        this.AclName = null;

        /**
         * ACL 状态。0：无状态 1：有状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 规则类型（in/out）。in：入站规则 out：出站规则
         * @type {string || null}
         */
        this.Type = null;

        /**
         * ACL规则列表
         * @type {Array.<EipAclRule> || null}
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
        this.AclId = 'AclId' in params ? params.AclId : null;
        this.AclName = 'AclName' in params ? params.AclName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new EipAclRule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }

    }
}

/**
 * UnbindVpcIp请求参数结构体
 * @class
 */
class UnbindVpcIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eip实例ID
         * @type {string || null}
         */
        this.EipId = null;

        /**
         * EIP归属VpcId，例如vpc-k7j1t2x1
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 绑定的VPC内IP地址
         * @type {string || null}
         */
        this.VpcIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipId = 'EipId' in params ? params.EipId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcIp = 'VpcIp' in params ? params.VpcIp : null;

    }
}

/**
 * BindRs返回参数结构体
 * @class
 */
class BindRsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定黑石物理机异步任务ID，可以通过DescribeEipTask查询任务状态
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
 * BindEipAcls返回参数结构体
 * @class
 */
class BindEipAclsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateEip请求参数结构体
 * @class
 */
class CreateEipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请数量，默认为1, 最大 20
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * EIP计费方式，flow-流量计费；bandwidth-带宽计费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 带宽设定值（只在带宽计费时生效）
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * EIP模式，目前支持tunnel和fullnat
         * @type {string || null}
         */
        this.SetType = null;

        /**
         * 是否使用独占集群，0：不使用，1：使用。默认为0
         * @type {number || null}
         */
        this.Exclusive = null;

        /**
         * EIP归属私有网络ID，例如vpc-k7j1t2x1
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 指定申请的IP列表
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
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.SetType = 'SetType' in params ? params.SetType : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.IpList = 'IpList' in params ? params.IpList : null;

    }
}

/**
 * eipacl规则
 * @class
 */
class EipAclRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源 IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 目标端口
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 协议(TCP/UDP/ICMP/ANY)
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 策略（accept/drop）
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 备注
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * UnbindHosted返回参数结构体
 * @class
 */
class UnbindHostedResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID，可以通过EipBmQueryTask查询任务状态
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
 * DeleteEipAcl请求参数结构体
 * @class
 */
class DeleteEipAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的 ACL 实例 ID
         * @type {string || null}
         */
        this.AclId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AclId = 'AclId' in params ? params.AclId : null;

    }
}

/**
 * Eip信息
 * @class
 */
class EipInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP实例ID
         * @type {string || null}
         */
        this.EipId = null;

        /**
         * EIP名称
         * @type {string || null}
         */
        this.EipName = null;

        /**
         * EIP地址
         * @type {string || null}
         */
        this.Eip = null;

        /**
         * 运营商ID 0：电信； 1：联通； 2：移动； 3：教育网； 4：盈科； 5：BGP； 6：中国香港
         * @type {number || null}
         */
        this.IspId = null;

        /**
         * 状态 0：创建中； 1：绑定中； 2：已绑定； 3：解绑中； 4：未绑定； 6：下线中； 9：创建失败
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 是否欠费隔离 1： 欠费隔离； 0： 正常。处在欠费隔离情况下的EIP不能进行任何管理操作。
         * @type {number || null}
         */
        this.Arrears = null;

        /**
         * EIP所绑定的服务器实例ID，未绑定则为空
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 服务器别名
         * @type {string || null}
         */
        this.InstanceAlias = null;

        /**
         * EIP解绑时间
         * @type {string || null}
         */
        this.FreeAt = null;

        /**
         * EIP创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * EIP更新时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * EIP未绑定服务器时长（单位：秒）
         * @type {number || null}
         */
        this.FreeSecond = null;

        /**
         * EIP所绑定的资源类型，-1：未绑定资源；0：黑石物理机，字段对应unInstanceId；1：Nat网关，字段对应natUid；2：云服务器字段对应vpcIp; 3: 托管机器，字段对应HInstanceId, HInstanceAlias
         * @type {number || null}
         */
        this.Type = null;

        /**
         * EIP计费模式，"flow"：流量计费； "bandwidth"：带宽计费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * EIP带宽计费模式下的带宽上限（单位：MB）
         * @type {number || null}
         */
        this.Bandwidth = null;

        /**
         * 最近一次操作变更的EIP计费模式，"flow"：流量计费； "bandwidth"：带宽计费
         * @type {string || null}
         */
        this.LatestPayMode = null;

        /**
         * 最近一次操作变更的EIP计费模式对应的带宽上限值，仅在带宽计费模式下有效（单位：MB）
         * @type {number || null}
         */
        this.LatestBandwidth = null;

        /**
         * 私有网络名称
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * EIP所绑定的NAT网关的数字ID，形如：1001,，未绑定则为空
         * @type {number || null}
         */
        this.NatId = null;

        /**
         * EIP所绑定的NAT网关实例ID，形如："nat-n47xxxxx"，未绑定则为空
         * @type {string || null}
         */
        this.NatUid = null;

        /**
         * EIP所绑定的云服务器IP(托管或者云服务器的IP），形如："10.1.1.3"。 注意：IP资源需要通过bmvpc模块注册或者申请后才可以绑定eip，接口使用申请子网IP和注册子网IP：,未绑定则为空
         * @type {string || null}
         */
        this.VpcIp = null;

        /**
         * 私有网络实例ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 是否为独占类型EIP
         * @type {number || null}
         */
        this.Exclusive = null;

        /**
         * 私有网络的cidr
         * @type {string || null}
         */
        this.VpcCidr = null;

        /**
         * EIP ACL实例ID
         * @type {string || null}
         */
        this.AclId = null;

        /**
         * EIP ACL名称
         * @type {string || null}
         */
        this.AclName = null;

        /**
         * 托管机器实例ID
         * @type {string || null}
         */
        this.HInstanceId = null;

        /**
         * 托管机器别名
         * @type {string || null}
         */
        this.HInstanceAlias = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipId = 'EipId' in params ? params.EipId : null;
        this.EipName = 'EipName' in params ? params.EipName : null;
        this.Eip = 'Eip' in params ? params.Eip : null;
        this.IspId = 'IspId' in params ? params.IspId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Arrears = 'Arrears' in params ? params.Arrears : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceAlias = 'InstanceAlias' in params ? params.InstanceAlias : null;
        this.FreeAt = 'FreeAt' in params ? params.FreeAt : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.FreeSecond = 'FreeSecond' in params ? params.FreeSecond : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;
        this.LatestPayMode = 'LatestPayMode' in params ? params.LatestPayMode : null;
        this.LatestBandwidth = 'LatestBandwidth' in params ? params.LatestBandwidth : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.NatId = 'NatId' in params ? params.NatId : null;
        this.NatUid = 'NatUid' in params ? params.NatUid : null;
        this.VpcIp = 'VpcIp' in params ? params.VpcIp : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Exclusive = 'Exclusive' in params ? params.Exclusive : null;
        this.VpcCidr = 'VpcCidr' in params ? params.VpcCidr : null;
        this.AclId = 'AclId' in params ? params.AclId : null;
        this.AclName = 'AclName' in params ? params.AclName : null;
        this.HInstanceId = 'HInstanceId' in params ? params.HInstanceId : null;
        this.HInstanceAlias = 'HInstanceAlias' in params ? params.HInstanceAlias : null;

    }
}

/**
 * UnbindEipAcls返回参数结构体
 * @class
 */
class UnbindEipAclsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEipAcls返回参数结构体
 * @class
 */
class DescribeEipAclsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回 EIPACL 列表总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * EIPACL列表
         * @type {Array.<EipAcl> || null}
         */
        this.EipAclList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.EipAclList) {
            this.EipAclList = new Array();
            for (let z in params.EipAclList) {
                let obj = new EipAcl();
                obj.deserialize(params.EipAclList[z]);
                this.EipAclList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyEipName返回参数结构体
 * @class
 */
class ModifyEipNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEipQuota返回参数结构体
 * @class
 */
class DescribeEipQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 能拥有的EIP个数的总配额，默认是100个
         * @type {number || null}
         */
        this.EipNumQuota = null;

        /**
         * 当前已使用的EIP个数，包括创建中、绑定中、已绑定、解绑中、未绑定几种状态的EIP个数总和
         * @type {number || null}
         */
        this.CurrentEipNum = null;

        /**
         * 当天申请EIP次数
         * @type {number || null}
         */
        this.DailyApplyCount = null;

        /**
         * 每日申请EIP的次数限制
         * @type {number || null}
         */
        this.DailyApplyQuota = null;

        /**
         * BatchApplyMax
         * @type {number || null}
         */
        this.BatchApplyMax = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipNumQuota = 'EipNumQuota' in params ? params.EipNumQuota : null;
        this.CurrentEipNum = 'CurrentEipNum' in params ? params.CurrentEipNum : null;
        this.DailyApplyCount = 'DailyApplyCount' in params ? params.DailyApplyCount : null;
        this.DailyApplyQuota = 'DailyApplyQuota' in params ? params.DailyApplyQuota : null;
        this.BatchApplyMax = 'BatchApplyMax' in params ? params.BatchApplyMax : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindRs返回参数结构体
 * @class
 */
class UnbindRsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解绑操作的异步任务ID，可以通过查询EIP任务状态查询任务状态
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
 * BindRs请求参数结构体
 * @class
 */
class BindRsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eip实例ID
         * @type {string || null}
         */
        this.EipId = null;

        /**
         * 物理服务器实例ID
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
        this.EipId = 'EipId' in params ? params.EipId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * UnbindHosted请求参数结构体
 * @class
 */
class UnbindHostedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 托管机器实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Eip实例ID，可通过DescribeBmEip 接口返回字段中的 eipId获取。Eip和EipId参数必须要填写一个。
         * @type {string || null}
         */
        this.EipId = null;

        /**
         * 弹性IP。Eip和EipId参数必须要填写一个。
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
        this.EipId = 'EipId' in params ? params.EipId : null;
        this.Eip = 'Eip' in params ? params.Eip : null;

    }
}

/**
 * BindVpcIp返回参数结构体
 * @class
 */
class BindVpcIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP绑定VPC网络IP异步任务ID，可以通过查询EIP任务状态查询任务状态
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
 * DescribeEips请求参数结构体
 * @class
 */
class DescribeEipsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP实例ID列表
         * @type {Array.<string> || null}
         */
        this.EipIds = null;

        /**
         * EIP IP 列表
         * @type {Array.<string> || null}
         */
        this.Eips = null;

        /**
         * 主机实例ID 列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * EIP名称,模糊匹配
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 状态列表, 默认所有
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 偏移量，默认为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回EIP数量，默认 20, 最大值 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 排序字段，支持： EipId,Eip,Status, InstanceId,CreatedAt
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方式 0:递增 1:递减(默认)
         * @type {number || null}
         */
        this.Order = null;

        /**
         * 计费模式,流量：flow，带宽：bandwidth
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * EIP归属VpcId，例如vpc-k7j1t2x1
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 绑定类型，-1：未绑定，0：物理机，1：nat网关，2：虚拟IP, 3:托管机器
         * @type {Array.<number> || null}
         */
        this.BindTypes = null;

        /**
         * 独占标志，0：共享，1：独占
         * @type {number || null}
         */
        this.ExclusiveTag = null;

        /**
         * EIP ACL实例ID
         * @type {string || null}
         */
        this.AclId = null;

        /**
         * 搜索条件，是否绑定了EIP ACL， 0：未绑定，1：绑定
         * @type {number || null}
         */
        this.BindAcl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipIds = 'EipIds' in params ? params.EipIds : null;
        this.Eips = 'Eips' in params ? params.Eips : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.BindTypes = 'BindTypes' in params ? params.BindTypes : null;
        this.ExclusiveTag = 'ExclusiveTag' in params ? params.ExclusiveTag : null;
        this.AclId = 'AclId' in params ? params.AclId : null;
        this.BindAcl = 'BindAcl' in params ? params.BindAcl : null;

    }
}

/**
 * ModifyEipName请求参数结构体
 * @class
 */
class ModifyEipNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eip实例ID，可通过/v2/DescribeEip 接口返回字段中的 eipId获取
         * @type {string || null}
         */
        this.EipId = null;

        /**
         * EIP 实例别名
         * @type {string || null}
         */
        this.EipName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipId = 'EipId' in params ? params.EipId : null;
        this.EipName = 'EipName' in params ? params.EipName : null;

    }
}

/**
 * DeleteEip返回参数结构体
 * @class
 */
class DeleteEipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务Id
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
 * BindHosted返回参数结构体
 * @class
 */
class BindHostedResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID，可以通过EipBmQueryTask查询任务状态
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
 * BindVpcIp请求参数结构体
 * @class
 */
class BindVpcIpRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eip实例ID
         * @type {string || null}
         */
        this.EipId = null;

        /**
         * EIP归属VpcId，例如vpc-k7j1t2x1
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 绑定的VPC内IP地址
         * @type {string || null}
         */
        this.VpcIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipId = 'EipId' in params ? params.EipId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.VpcIp = 'VpcIp' in params ? params.VpcIp : null;

    }
}

/**
 * CreateEipAcl请求参数结构体
 * @class
 */
class CreateEipAclRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ACL 名称
         * @type {string || null}
         */
        this.AclName = null;

        /**
         * ACL 状态 0：无状态，1：有状态
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
        this.AclName = 'AclName' in params ? params.AclName : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * EipAcl信息
 * @class
 */
class EipAcl extends  AbstractModel {
    constructor(){
        super();

        /**
         * ACL 实例 ID。
         * @type {string || null}
         */
        this.AclId = null;

        /**
         * ACL 实例名称
         * @type {string || null}
         */
        this.AclName = null;

        /**
         * ACL 状态。0：无状态，1：有状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * EIPACL 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * EIPACL 已关联的 eip 数目
         * @type {number || null}
         */
        this.EipNum = null;

        /**
         * 出站规则
         * @type {Array.<EipAclRule> || null}
         */
        this.OutRules = null;

        /**
         * 入站规则
         * @type {Array.<EipAclRule> || null}
         */
        this.InRules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AclId = 'AclId' in params ? params.AclId : null;
        this.AclName = 'AclName' in params ? params.AclName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.EipNum = 'EipNum' in params ? params.EipNum : null;

        if (params.OutRules) {
            this.OutRules = new Array();
            for (let z in params.OutRules) {
                let obj = new EipAclRule();
                obj.deserialize(params.OutRules[z]);
                this.OutRules.push(obj);
            }
        }

        if (params.InRules) {
            this.InRules = new Array();
            for (let z in params.InRules) {
                let obj = new EipAclRule();
                obj.deserialize(params.InRules[z]);
                this.InRules.push(obj);
            }
        }

    }
}

/**
 * CreateEip返回参数结构体
 * @class
 */
class CreateEipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP列表
         * @type {Array.<string> || null}
         */
        this.EipIds = null;

        /**
         * 任务ID
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
        this.EipIds = 'EipIds' in params ? params.EipIds : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindHosted请求参数结构体
 * @class
 */
class BindHostedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eip实例ID，可通过DescribeBmEip 接口返回字段中的 eipId获取。Eip和EipId参数必须要填写一个。
         * @type {string || null}
         */
        this.EipId = null;

        /**
         * 托管机器实例ID
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
        this.EipId = 'EipId' in params ? params.EipId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeEipTask返回参数结构体
 * @class
 */
class DescribeEipTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前任务状态码：0-成功，1-失败，2-进行中
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
 * ModifyEipCharge请求参数结构体
 * @class
 */
class ModifyEipChargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP计费方式，flow-流量计费；bandwidth-带宽计费
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Eip实例ID列表
         * @type {Array.<string> || null}
         */
        this.EipIds = null;

        /**
         * 带宽设定值（只在带宽计费时生效）
         * @type {number || null}
         */
        this.Bandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.EipIds = 'EipIds' in params ? params.EipIds : null;
        this.Bandwidth = 'Bandwidth' in params ? params.Bandwidth : null;

    }
}

/**
 * DescribeEipQuota请求参数结构体
 * @class
 */
class DescribeEipQuotaRequest extends  AbstractModel {
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
 * DeleteEip请求参数结构体
 * @class
 */
class DeleteEipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eip实例ID列表
         * @type {Array.<string> || null}
         */
        this.EipIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipIds = 'EipIds' in params ? params.EipIds : null;

    }
}

/**
 * DeleteEipAcl返回参数结构体
 * @class
 */
class DeleteEipAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEipAcls请求参数结构体
 * @class
 */
class DescribeEipAclsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ACL 名称，支持模糊查找
         * @type {string || null}
         */
        this.AclName = null;

        /**
         * ACL 实例 ID 列表，数组下标从 0 开始
         * @type {Array.<string> || null}
         */
        this.AclIds = null;

        /**
         * 分页参数。偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数。每一页的 EIPACL 列表数目
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
        this.AclName = 'AclName' in params ? params.AclName : null;
        this.AclIds = 'AclIds' in params ? params.AclIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * BindEipAcls请求参数结构体
 * @class
 */
class BindEipAclsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待关联的 EIP 与 ACL关系列表
         * @type {Array.<EipAclMap> || null}
         */
        this.EipIdAclIdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EipIdAclIdList) {
            this.EipIdAclIdList = new Array();
            for (let z in params.EipIdAclIdList) {
                let obj = new EipAclMap();
                obj.deserialize(params.EipIdAclIdList[z]);
                this.EipIdAclIdList.push(obj);
            }
        }

    }
}

/**
 * DescribeEipTask请求参数结构体
 * @class
 */
class DescribeEipTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * EIP查询任务ID
         * @type {number || null}
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
 * UnbindRs请求参数结构体
 * @class
 */
class UnbindRsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Eip实例ID
         * @type {string || null}
         */
        this.EipId = null;

        /**
         * 物理服务器实例ID
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
        this.EipId = 'EipId' in params ? params.EipId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * UnbindVpcIp返回参数结构体
 * @class
 */
class UnbindVpcIpResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定黑石物理机异步任务ID，可以通过查询EIP任务状态查询任务状态
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
 * CreateEipAcl返回参数结构体
 * @class
 */
class CreateEipAclResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * ACL 实例 ID
         * @type {string || null}
         */
        this.AclId = null;

        /**
         * ACL 实例状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * ACL 实例名称
         * @type {string || null}
         */
        this.AclName = null;

        /**
         * ACL 实例创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AclId = 'AclId' in params ? params.AclId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AclName = 'AclName' in params ? params.AclName : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    UnbindEipAclsRequest: UnbindEipAclsRequest,
    EipAclMap: EipAclMap,
    ModifyEipChargeResponse: ModifyEipChargeResponse,
    ModifyEipAclResponse: ModifyEipAclResponse,
    DescribeEipsResponse: DescribeEipsResponse,
    ModifyEipAclRequest: ModifyEipAclRequest,
    UnbindVpcIpRequest: UnbindVpcIpRequest,
    BindRsResponse: BindRsResponse,
    BindEipAclsResponse: BindEipAclsResponse,
    CreateEipRequest: CreateEipRequest,
    EipAclRule: EipAclRule,
    UnbindHostedResponse: UnbindHostedResponse,
    DeleteEipAclRequest: DeleteEipAclRequest,
    EipInfo: EipInfo,
    UnbindEipAclsResponse: UnbindEipAclsResponse,
    DescribeEipAclsResponse: DescribeEipAclsResponse,
    ModifyEipNameResponse: ModifyEipNameResponse,
    DescribeEipQuotaResponse: DescribeEipQuotaResponse,
    UnbindRsResponse: UnbindRsResponse,
    BindRsRequest: BindRsRequest,
    UnbindHostedRequest: UnbindHostedRequest,
    BindVpcIpResponse: BindVpcIpResponse,
    DescribeEipsRequest: DescribeEipsRequest,
    ModifyEipNameRequest: ModifyEipNameRequest,
    DeleteEipResponse: DeleteEipResponse,
    BindHostedResponse: BindHostedResponse,
    BindVpcIpRequest: BindVpcIpRequest,
    CreateEipAclRequest: CreateEipAclRequest,
    EipAcl: EipAcl,
    CreateEipResponse: CreateEipResponse,
    BindHostedRequest: BindHostedRequest,
    DescribeEipTaskResponse: DescribeEipTaskResponse,
    ModifyEipChargeRequest: ModifyEipChargeRequest,
    DescribeEipQuotaRequest: DescribeEipQuotaRequest,
    DeleteEipRequest: DeleteEipRequest,
    DeleteEipAclResponse: DeleteEipAclResponse,
    DescribeEipAclsRequest: DescribeEipAclsRequest,
    BindEipAclsRequest: BindEipAclsRequest,
    DescribeEipTaskRequest: DescribeEipTaskRequest,
    UnbindRsRequest: UnbindRsRequest,
    UnbindVpcIpResponse: UnbindVpcIpResponse,
    CreateEipAclResponse: CreateEipAclResponse,

}

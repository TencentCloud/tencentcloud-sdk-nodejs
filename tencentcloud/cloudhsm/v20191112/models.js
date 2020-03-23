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
 * Subnet对象
 * @class
 */
class Subnet extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC实例ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网实例ID，例如：subnet-bthucmmy。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 子网名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 子网的 IPv4 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 可用IP数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AvailableIpAddressCount = null;

        /**
         * 子网的 IPv6 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ipv6CidrBlock = null;

        /**
         * 总IP数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalIpAddressCount = null;

        /**
         * 是否为默认Subnet
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDefault = null;

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
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.AvailableIpAddressCount = 'AvailableIpAddressCount' in params ? params.AvailableIpAddressCount : null;
        this.Ipv6CidrBlock = 'Ipv6CidrBlock' in params ? params.Ipv6CidrBlock : null;
        this.TotalIpAddressCount = 'TotalIpAddressCount' in params ? params.TotalIpAddressCount : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * DescribeSubnet请求参数结构体
 * @class
 */
class DescribeSubnetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询指定VpcId下的子网信息。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 查找关键字
         * @type {string || null}
         */
        this.SearchWord = null;

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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * DescribeVsms返回参数结构体
 * @class
 */
class DescribeVsmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取实例的总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资源信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResourceInfo> || null}
         */
        this.VsmList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.VsmList) {
            this.VsmList = new Array();
            for (let z in params.VsmList) {
                let obj = new ResourceInfo();
                obj.deserialize(params.VsmList[z]);
                this.VsmList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceBuyVsm请求参数结构体
 * @class
 */
class InquiryPriceBuyVsmRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需购买实例的数量
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 付费模式：0表示按需计费/后付费，1表示预付费
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 商品的时间大小
         * @type {string || null}
         */
        this.TimeSpan = null;

        /**
         * 商品的时间单位
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 货币类型，默认为CNY
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 默认为CREATE，可选RENEW
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
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeVpc返回参数结构体
 * @class
 */
class DescribeVpcResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可查询到的所有Vpc实例总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Vpc对象列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Vpc> || null}
         */
        this.VpcList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.VpcList) {
            this.VpcList = new Array();
            for (let z in params.VpcList) {
                let obj = new Vpc();
                obj.deserialize(params.VpcList[z]);
                this.VpcList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyVsmAttributes请求参数结构体
 * @class
 */
class ModifyVsmAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源Id
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * UpdateResourceName-修改资源名称,
UpdateSgIds-修改安全组名称,
UpdateNetWork-修改网络,
Default-默认不修改
         * @type {Array.<string> || null}
         */
        this.Type = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 安全组Id
         * @type {Array.<string> || null}
         */
        this.SgIds = null;

        /**
         * VpcId
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网Id
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.SgIds = 'SgIds' in params ? params.SgIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeSubnet返回参数结构体
 * @class
 */
class DescribeSubnetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的子网数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 返回的子网实例列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Subnet> || null}
         */
        this.SubnetList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SubnetList) {
            this.SubnetList = new Array();
            for (let z in params.SubnetList) {
                let obj = new Subnet();
                obj.deserialize(params.SubnetList[z]);
                this.SubnetList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHSMByVpcId请求参数结构体
 * @class
 */
class DescribeHSMByVpcIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC标识符
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;

    }
}

/**
 * DescribeHSMByVpcId返回参数结构体
 * @class
 */
class DescribeHSMByVpcIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HSM数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 作为查询条件的VpcId
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUsgRule返回参数结构体
 * @class
 */
class DescribeUsgRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsgRuleDetail> || null}
         */
        this.SgRules = null;

        /**
         * 安全组详情数量
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

        if (params.SgRules) {
            this.SgRules = new Array();
            for (let z in params.SgRules) {
                let obj = new UsgRuleDetail();
                obj.deserialize(params.SgRules[z]);
                this.SgRules.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源信息
 * @class
 */
class ResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 资源状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 资源IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 资源所属Vpc
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 资源所属子网
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 资源所属HSM规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VsmType = null;

        /**
         * 地域Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 区域Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 地域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 区域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 实例的安全组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SgUnit> || null}
         */
        this.SgList = null;

        /**
         * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 当前实例是否已经过期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Expired = null;

        /**
         * 为正数表示实例距离过期时间还剩余多少秒，为负数表示已经过期多少秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RemainSeconds = null;

        /**
         * Vpc名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.VsmType = 'VsmType' in params ? params.VsmType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

        if (params.SgList) {
            this.SgList = new Array();
            for (let z in params.SgList) {
                let obj = new SgUnit();
                obj.deserialize(params.SgList[z]);
                this.SgList.push(obj);
            }
        }
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.Expired = 'Expired' in params ? params.Expired : null;
        this.RemainSeconds = 'RemainSeconds' in params ? params.RemainSeconds : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;

    }
}

/**
 * DescribeVpc请求参数结构体
 * @class
 */
class DescribeVpcRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.SearchWord = null;

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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * VPC对象
 * @class
 */
class Vpc extends  AbstractModel {
    constructor(){
        super();

        /**
         * Vpc名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VpcId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 是否为默认VPC
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsDefault = null;

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
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;

    }
}

/**
 * DescribeUsg请求参数结构体
 * @class
 */
class DescribeUsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，当Offset和Limit均为0时将一次性返回用户所有的安全组列表。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回量，当Offset和Limit均为0时将一次性返回用户所有的安全组列表。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 搜索关键字
         * @type {string || null}
         */
        this.SearchWord = null;

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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * DescribeVsmAttributes返回参数结构体
 * @class
 */
class DescribeVsmAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源Id
         * @type {string || null}
         */
        this.ResourceId = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 资源状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 资源IP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 资源所属Vpc
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 资源所属子网
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 资源所属HSM的规格
         * @type {string || null}
         */
        this.Model = null;

        /**
         * 资源类型
         * @type {number || null}
         */
        this.VsmType = null;

        /**
         * 地域Id
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 区域Id
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 过期时间
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 安全组详情信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsgRuleDetail> || null}
         */
        this.SgList = null;

        /**
         * 子网名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetName = null;

        /**
         * 地域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 区域名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 实例是否已经过期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Expired = null;

        /**
         * 为正数表示实例距离过期时间剩余秒数，为负数表示实例已经过期多少秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RemainSeconds = null;

        /**
         * 私有虚拟网络名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcName = null;

        /**
         * VPC的IPv4 CIDR
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VpcCidrBlock = null;

        /**
         * 子网的CIDR
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubnetCidrBlock = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Model = 'Model' in params ? params.Model : null;
        this.VsmType = 'VsmType' in params ? params.VsmType : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

        if (params.SgList) {
            this.SgList = new Array();
            for (let z in params.SgList) {
                let obj = new UsgRuleDetail();
                obj.deserialize(params.SgList[z]);
                this.SgList.push(obj);
            }
        }
        this.SubnetName = 'SubnetName' in params ? params.SubnetName : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.Expired = 'Expired' in params ? params.Expired : null;
        this.RemainSeconds = 'RemainSeconds' in params ? params.RemainSeconds : null;
        this.VpcName = 'VpcName' in params ? params.VpcName : null;
        this.VpcCidrBlock = 'VpcCidrBlock' in params ? params.VpcCidrBlock : null;
        this.SubnetCidrBlock = 'SubnetCidrBlock' in params ? params.SubnetCidrBlock : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 安全组基础信息
 * @class
 */
class SgUnit extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SgId = null;

        /**
         * 安全组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SgName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SgRemark = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.SgId = 'SgId' in params ? params.SgId : null;
        this.SgName = 'SgName' in params ? params.SgName : null;
        this.SgRemark = 'SgRemark' in params ? params.SgRemark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * 安全组规则详情
 * @class
 */
class UsgRuleDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 入站规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsgPolicy> || null}
         */
        this.InBound = null;

        /**
         * 出站规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<UsgPolicy> || null}
         */
        this.OutBound = null;

        /**
         * 安全组Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SgId = null;

        /**
         * 安全组名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SgName = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SgRemark = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

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

        if (params.InBound) {
            this.InBound = new Array();
            for (let z in params.InBound) {
                let obj = new UsgPolicy();
                obj.deserialize(params.InBound[z]);
                this.InBound.push(obj);
            }
        }

        if (params.OutBound) {
            this.OutBound = new Array();
            for (let z in params.OutBound) {
                let obj = new UsgPolicy();
                obj.deserialize(params.OutBound[z]);
                this.OutBound.push(obj);
            }
        }
        this.SgId = 'SgId' in params ? params.SgId : null;
        this.SgName = 'SgName' in params ? params.SgName : null;
        this.SgRemark = 'SgRemark' in params ? params.SgRemark : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Version = 'Version' in params ? params.Version : null;

    }
}

/**
 * InquiryPriceBuyVsm返回参数结构体
 * @class
 */
class InquiryPriceBuyVsmResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * 购买的实例数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 商品的时间大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeSpan = null;

        /**
         * 商品的时间单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 原始总金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHSMBySubnetId返回参数结构体
 * @class
 */
class DescribeHSMBySubnetIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * HSM数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 作为查询条件的SubnetId
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeUsg返回参数结构体
 * @class
 */
class DescribeUsgResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户的安全组列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SgUnit> || null}
         */
        this.SgList = null;

        /**
         * 返回的安全组数量
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

        if (params.SgList) {
            this.SgList = new Array();
            for (let z in params.SgList) {
                let obj = new SgUnit();
                obj.deserialize(params.SgList[z]);
                this.SgList.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeHSMBySubnetId请求参数结构体
 * @class
 */
class DescribeHSMBySubnetIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Subnet标识符
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
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * DescribeVsms请求参数结构体
 * @class
 */
class DescribeVsmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大数量
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询关键字
         * @type {string || null}
         */
        this.SearchWord = null;

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
        this.SearchWord = 'SearchWord' in params ? params.SearchWord : null;

    }
}

/**
 * DescribeUsgRule请求参数结构体
 * @class
 */
class DescribeUsgRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 根据安全组Id获取安全组详情
         * @type {Array.<string> || null}
         */
        this.SgIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SgIds = 'SgIds' in params ? params.SgIds : null;

    }
}

/**
 * ModifyVsmAttributes返回参数结构体
 * @class
 */
class ModifyVsmAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeVsmAttributes请求参数结构体
 * @class
 */
class DescribeVsmAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源Id
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
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * 安全组策略
 * @class
 */
class UsgPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * cidr格式地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 安全组id代表的地址集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 地址组id代表的地址集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * 协议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Proto = null;

        /**
         * 端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 服务组id代表的协议和端口集合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 匹配后行为:ACCEPT/DROP
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
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.Proto = 'Proto' in params ? params.Proto : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Action = 'Action' in params ? params.Action : null;

    }
}

module.exports = {
    Subnet: Subnet,
    DescribeSubnetRequest: DescribeSubnetRequest,
    DescribeVsmsResponse: DescribeVsmsResponse,
    InquiryPriceBuyVsmRequest: InquiryPriceBuyVsmRequest,
    DescribeVpcResponse: DescribeVpcResponse,
    ModifyVsmAttributesRequest: ModifyVsmAttributesRequest,
    DescribeSubnetResponse: DescribeSubnetResponse,
    DescribeHSMByVpcIdRequest: DescribeHSMByVpcIdRequest,
    DescribeHSMByVpcIdResponse: DescribeHSMByVpcIdResponse,
    DescribeUsgRuleResponse: DescribeUsgRuleResponse,
    ResourceInfo: ResourceInfo,
    DescribeVpcRequest: DescribeVpcRequest,
    Vpc: Vpc,
    DescribeUsgRequest: DescribeUsgRequest,
    DescribeVsmAttributesResponse: DescribeVsmAttributesResponse,
    SgUnit: SgUnit,
    UsgRuleDetail: UsgRuleDetail,
    InquiryPriceBuyVsmResponse: InquiryPriceBuyVsmResponse,
    DescribeHSMBySubnetIdResponse: DescribeHSMBySubnetIdResponse,
    DescribeUsgResponse: DescribeUsgResponse,
    DescribeHSMBySubnetIdRequest: DescribeHSMBySubnetIdRequest,
    DescribeVsmsRequest: DescribeVsmsRequest,
    DescribeUsgRuleRequest: DescribeUsgRuleRequest,
    ModifyVsmAttributesResponse: ModifyVsmAttributesResponse,
    DescribeVsmAttributesRequest: DescribeVsmAttributesRequest,
    UsgPolicy: UsgPolicy,

}

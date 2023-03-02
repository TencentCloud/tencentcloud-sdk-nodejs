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
 * IsolateHourDBInstance返回参数结构体
 * @class
 */
class IsolateHourDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解隔离成功的实例id列表
         * @type {Array.<string> || null}
         */
        this.SuccessInstanceIds = null;

        /**
         * 解隔离失败的实例id列表
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessInstanceIds = 'SuccessInstanceIds' in params ? params.SuccessInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDBInstance请求参数结构体
 * @class
 */
class CreateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例节点可用区分布，最多可填两个可用区。当分片规格为一主两从时，其中两个节点在第一个可用区。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 节点个数大小，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 欲购买的时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 欲购买的数量，默认查询购买1个实例的价格。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 虚拟私有网络 ID，不传表示创建为基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 虚拟私有网络子网 ID，VpcId 不为空时必填
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 项目 ID，可以通过查看项目列表获取，不传则关联到默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 数据库引擎版本，当前可选：8.0.18，10.1.9，5.7.17。如果不传的话，默认为 Percona 5.7.17。
         * @type {string || null}
         */
        this.DbVersionId = null;

        /**
         * 实例名称， 可以通过该字段自主的设置实例的名字
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 安全组ID列表
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 自动续费标志，1:自动续费，2:不自动续费
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 是否支持IPv6
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * 标签键值对数组
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。
         * @type {Array.<DBParamValue> || null}
         */
        this.InitParams = null;

        /**
         * DCN源地域
         * @type {string || null}
         */
        this.DcnRegion = null;

        /**
         * DCN源实例ID
         * @type {string || null}
         */
        this.DcnInstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }

        if (params.InitParams) {
            this.InitParams = new Array();
            for (let z in params.InitParams) {
                let obj = new DBParamValue();
                obj.deserialize(params.InitParams[z]);
                this.InitParams.push(obj);
            }
        }
        this.DcnRegion = 'DcnRegion' in params ? params.DcnRegion : null;
        this.DcnInstanceId = 'DcnInstanceId' in params ? params.DcnInstanceId : null;

    }
}

/**
 * 可用区信息
 * @class
 */
class ZonesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区英文ID
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区数字ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 可用区中文名
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 是否在售
         * @type {boolean || null}
         */
        this.OnSale = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.OnSale = 'OnSale' in params ? params.OnSale : null;

    }
}

/**
 * DescribeAccountPrivileges返回参数结构体
 * @class
 */
class DescribeAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 权限列表。
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * 数据库账号用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 数据库账号Host
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDatabases请求参数结构体
 * @class
 */
class DescribeDatabasesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
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
 * DB参数描述
 * @class
 */
class ParamDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名字
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 当前参数值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 设置过的值，参数生效后，该值和value一样。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SetValue = null;

        /**
         * 系统默认值
         * @type {string || null}
         */
        this.Default = null;

        /**
         * 参数限制
         * @type {ParamConstraint || null}
         */
        this.Constraint = null;

        /**
         * 是否有设置过值，false:没有设置过值，true:有设置过值。
         * @type {boolean || null}
         */
        this.HaveSetValue = null;

        /**
         * 是否需要重启生效，false:不需要重启，
true:需要重启
         * @type {boolean || null}
         */
        this.NeedRestart = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Param = 'Param' in params ? params.Param : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.SetValue = 'SetValue' in params ? params.SetValue : null;
        this.Default = 'Default' in params ? params.Default : null;

        if (params.Constraint) {
            let obj = new ParamConstraint();
            obj.deserialize(params.Constraint)
            this.Constraint = obj;
        }
        this.HaveSetValue = 'HaveSetValue' in params ? params.HaveSetValue : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;

    }
}

/**
 * DescribeDBParameters请求参数结构体
 * @class
 */
class DescribeDBParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
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
 * DescribeAccounts请求参数结构体
 * @class
 */
class DescribeAccountsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
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
 * DescribeRenewalPrice返回参数结构体
 * @class
 */
class DescribeRenewalPriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价  
* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
* 币种：国内站为人民币，国际站为美元
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，受折扣等影响，可能和原价不同
* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
* 币种：国内站人民币，国际站美元
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceNetwork返回参数结构体
 * @class
 */
class ModifyInstanceNetworkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID，根据此FlowId通过DescribeFlow接口查询任务进行状态
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDedicatedClusterDBInstance返回参数结构体
 * @class
 */
class CreateDedicatedClusterDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配资源ID数组
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceVport返回参数结构体
 * @class
 */
class ModifyInstanceVportResponse extends  AbstractModel {
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
 * DestroyHourDBInstance请求参数结构体
 * @class
 */
class DestroyHourDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：tdsql-avw0207d，与云数据库控制台页面中显示的实例 ID 相同。
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
 * ModifyInstanceVip返回参数结构体
 * @class
 */
class ModifyInstanceVipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 数据库引擎名称，本接口取值：mariadb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 要绑定的安全组ID，类似sg-efil73jd。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 被绑定的实例ID，类似tdsql-lesecurk，支持指定多个实例。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeUpgradePrice请求参数结构体
 * @class
 */
class DescribeUpgradePriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待升级的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 新节点数，传0表示节点数不变
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 价格金额单位，不传默认单位为分，取值：  
* pent：分
* microPent：微分
         * @type {string || null}
         */
        this.AmountUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.AmountUnit = 'AmountUnit' in params ? params.AmountUnit : null;

    }
}

/**
 * TerminateDedicatedDBInstance返回参数结构体
 * @class
 */
class TerminateDedicatedDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程Id
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * FlushBinlog返回参数结构体
 * @class
 */
class FlushBinlogResponse extends  AbstractModel {
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
 * DescribeDBSecurityGroups返回参数结构体
 * @class
 */
class DescribeDBSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情。
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * 实例VIP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VIP = null;

        /**
         * 实例端口。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.VPort = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.VIP = 'VIP' in params ? params.VIP : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CancelDcnJob返回参数结构体
 * @class
 */
class CancelDcnJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFileDownloadUrl请求参数结构体
 * @class
 */
class DescribeFileDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 不带签名的文件路径
         * @type {string || null}
         */
        this.FilePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;

    }
}

/**
 * DescribeDBInstanceSpecs返回参数结构体
 * @class
 */
class DescribeDBInstanceSpecsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按机型分类的可售卖规格列表
         * @type {Array.<InstanceSpec> || null}
         */
        this.Specs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Specs) {
            this.Specs = new Array();
            for (let z in params.Specs) {
                let obj = new InstanceSpec();
                obj.deserialize(params.Specs[z]);
                this.Specs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyHourDBInstance返回参数结构体
 * @class
 */
class DestroyHourDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/237/16177)。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 实例 ID，与入参InstanceId一致。
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库账号信息
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户的名称
         * @type {string || null}
         */
        this.User = null;

        /**
         * 账户的域名
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
        this.User = 'User' in params ? params.User : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * DescribeProjectSecurityGroups请求参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：mariadb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 项目ID。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * DescribeDBSlowLogs请求参数结构体
 * @class
 */
class DescribeDBSlowLogsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 从结果的第几条数据开始返回
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回的结果条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询的起始时间，形如2016-07-23 14:55:20
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询的结束时间，形如2016-08-22 14:55:20
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 要查询的具体数据库名称
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 排序指标，取值为query_time_sum或者query_count
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型，desc或者asc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 是否查询从机的慢查询，0-主机; 1-从机
         * @type {number || null}
         */
        this.Slave = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Db = 'Db' in params ? params.Db : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Slave = 'Slave' in params ? params.Slave : null;

    }
}

/**
 * CreateAccount请求参数结构体
 * @class
 */
class CreateAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名，由字母、数字、下划线和连字符组成，长度为1~32位。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 可以登录的主机，与mysql 账号的 host 格式一致，可以支持通配符，例如 %，10.%，10.20.%。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 账号密码，密码需要 8-32 个字符，不能以 '/' 开头，并且必须包含小写字母、大写字母、数字和符号()~!@#$%^&*-+=_|{}[]:<>,.?/。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 是否创建为只读账号，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 账号备注，可以包含中文、英文字符、常见符号和数字，长度为0~256字符
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 根据传入时间判断备机不可用
         * @type {number || null}
         */
        this.DelayThresh = null;

        /**
         * 针对只读账号，设置策略是否固定备机，0：不固定备机，即备机不满足条件与客户端不断开连接，Proxy选择其他可用备机，1：备机不满足条件断开连接，确保一个连接固定备机。
         * @type {number || null}
         */
        this.SlaveConst = null;

        /**
         * 用户最大连接数限制参数。不传或者传0表示为不限制，对应max_user_connections参数，目前10.1内核版本不支持设置。
         * @type {number || null}
         */
        this.MaxUserConnections = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.DelayThresh = 'DelayThresh' in params ? params.DelayThresh : null;
        this.SlaveConst = 'SlaveConst' in params ? params.SlaveConst : null;
        this.MaxUserConnections = 'MaxUserConnections' in params ? params.MaxUserConnections : null;

    }
}

/**
 * InitDBInstances返回参数结构体
 * @class
 */
class InitDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID，可通过 DescribeFlow 查询任务状态。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 透传入参。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBParameters返回参数结构体
 * @class
 */
class DescribeDBParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 请求DB的当前参数值
         * @type {Array.<ParamDesc> || null}
         */
        this.Params = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new ParamDesc();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateHourDBInstance请求参数结构体
 * @class
 */
class IsolateHourDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID列表
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
 * IsolateDBInstance返回参数结构体
 * @class
 */
class IsolateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 隔离成功实例ID列表。
         * @type {Array.<string> || null}
         */
        this.SuccessInstanceIds = null;

        /**
         * 隔离失败实例ID列表。
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessInstanceIds = 'SuccessInstanceIds' in params ? params.SuccessInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLogFileRetentionPeriod请求参数结构体
 * @class
 */
class ModifyLogFileRetentionPeriodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 保存的天数,不能超过30
         * @type {number || null}
         */
        this.Days = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Days = 'Days' in params ? params.Days : null;

    }
}

/**
 * DescribeLogFileRetentionPeriod请求参数结构体
 * @class
 */
class DescribeLogFileRetentionPeriodRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
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
 * DescribeFlow返回参数结构体
 * @class
 */
class DescribeFlowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流程状态，0：成功，1：失败，2：运行中
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
 * CloneAccount返回参数结构体
 * @class
 */
class CloneAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流程ID。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分片节点可用区选择
 * @class
 */
class ZoneChooseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主可用区
         * @type {ZonesInfo || null}
         */
        this.MasterZone = null;

        /**
         * 可选的从可用区
         * @type {Array.<ZonesInfo> || null}
         */
        this.SlaveZones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MasterZone) {
            let obj = new ZonesInfo();
            obj.deserialize(params.MasterZone)
            this.MasterZone = obj;
        }

        if (params.SlaveZones) {
            this.SlaveZones = new Array();
            for (let z in params.SlaveZones) {
                let obj = new ZonesInfo();
                obj.deserialize(params.SlaveZones[z]);
                this.SlaveZones.push(obj);
            }
        }

    }
}

/**
 * IsolateDedicatedDBInstance请求参数结构体
 * @class
 */
class IsolateDedicatedDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id，形如：tdsql-ow728lmc。
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
 * ModifyAccountDescription返回参数结构体
 * @class
 */
class ModifyAccountDescriptionResponse extends  AbstractModel {
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
 * 参数约束
 * @class
 */
class ParamConstraint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 约束类型,如枚举enum，区间section
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 约束类型为enum时的可选值列表
         * @type {string || null}
         */
        this.Enum = null;

        /**
         * 约束类型为section时的范围
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ConstraintRange || null}
         */
        this.Range = null;

        /**
         * 约束类型为string时的可选值列表
         * @type {string || null}
         */
        this.String = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Enum = 'Enum' in params ? params.Enum : null;

        if (params.Range) {
            let obj = new ConstraintRange();
            obj.deserialize(params.Range)
            this.Range = obj;
        }
        this.String = 'String' in params ? params.String : null;

    }
}

/**
 * ModifyDBInstancesProject返回参数结构体
 * @class
 */
class ModifyDBInstancesProjectResponse extends  AbstractModel {
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
 * 云数据库实例备份时间配置信息
 * @class
 */
class DBBackupTimeConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 每天备份执行的区间的开始时间，格式 mm:ss，形如 22:00
         * @type {string || null}
         */
        this.StartBackupTime = null;

        /**
         * 每天备份执行的区间的结束时间，格式 mm:ss，形如 23:00
         * @type {string || null}
         */
        this.EndBackupTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartBackupTime = 'StartBackupTime' in params ? params.StartBackupTime : null;
        this.EndBackupTime = 'EndBackupTime' in params ? params.EndBackupTime : null;

    }
}

/**
 * ModifyBackupTime请求参数结构体
 * @class
 */
class ModifyBackupTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 每天备份执行的区间的开始时间，格式 mm:ss，形如 22:00
         * @type {string || null}
         */
        this.StartBackupTime = null;

        /**
         * 每天备份执行的区间的结束时间，格式 mm:ss，形如 23:59
         * @type {string || null}
         */
        this.EndBackupTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartBackupTime = 'StartBackupTime' in params ? params.StartBackupTime : null;
        this.EndBackupTime = 'EndBackupTime' in params ? params.EndBackupTime : null;

    }
}

/**
 * 数据库视图信息
 * @class
 */
class DatabaseView extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视图名称
         * @type {string || null}
         */
        this.View = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.View = 'View' in params ? params.View : null;

    }
}

/**
 * DescribeDBLogFiles请求参数结构体
 * @class
 */
class DescribeDBLogFilesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。
         * @type {number || null}
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
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * 描述实例的各个DB节点信息
 * @class
 */
class NodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * DB节点ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * DB节点角色，取值为master或者slave
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DescribeOrders返回参数结构体
 * @class
 */
class DescribeOrdersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的订单数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 订单信息列表。
         * @type {Array.<Deal> || null}
         */
        this.Deals = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Deals) {
            this.Deals = new Array();
            for (let z in params.Deals) {
                let obj = new Deal();
                obj.deserialize(params.Deals[z]);
                this.Deals.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySyncTaskAttribute返回参数结构体
 * @class
 */
class ModifySyncTaskAttributeResponse extends  AbstractModel {
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
 * DCN详情条目
 * @class
 */
class DcnDetailItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例IP地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 实例IPv6地址
         * @type {string || null}
         */
        this.Vipv6 = null;

        /**
         * 实例端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 实例状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 实例状态描述
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 实例DCN标志，1-主，2-备
         * @type {number || null}
         */
        this.DcnFlag = null;

        /**
         * 实例DCN状态，0-无，1-创建中，2-同步中，3-已断开
         * @type {number || null}
         */
        this.DcnStatus = null;

        /**
         * 实例CPU核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例存储大小，单位 GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 付费模式
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例创建时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例到期时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型）
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * DCN复制的配置信息；对于主实例，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DCNReplicaConfig || null}
         */
        this.ReplicaConfig = null;

        /**
         * DCN复制的状态；对于主实例，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DCNReplicaStatus || null}
         */
        this.ReplicaStatus = null;

        /**
         * 是否开启了 kms
         * @type {number || null}
         */
        this.EncryptStatus = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vipv6 = 'Vipv6' in params ? params.Vipv6 : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.DcnStatus = 'DcnStatus' in params ? params.DcnStatus : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.ReplicaConfig) {
            let obj = new DCNReplicaConfig();
            obj.deserialize(params.ReplicaConfig)
            this.ReplicaConfig = obj;
        }

        if (params.ReplicaStatus) {
            let obj = new DCNReplicaStatus();
            obj.deserialize(params.ReplicaStatus)
            this.ReplicaStatus = obj;
        }
        this.EncryptStatus = 'EncryptStatus' in params ? params.EncryptStatus : null;

    }
}

/**
 * ResetAccountPassword请求参数结构体
 * @class
 */
class ResetAccountPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 新密码，由字母、数字或常见符号组成，不能包含分号、单引号和双引号，长度为6~32位。
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * CopyAccountPrivileges返回参数结构体
 * @class
 */
class CopyAccountPrivilegesResponse extends  AbstractModel {
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
 * DCN的状态信息
 * @class
 */
class DCNReplicaStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * DCN 的运行状态，START为正常运行，STOP为暂停，
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 当前延迟情况，取备实例的 master 节点的 delay 值
         * @type {number || null}
         */
        this.Delay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Delay = 'Delay' in params ? params.Delay : null;

    }
}

/**
 * CloneAccount请求参数结构体
 * @class
 */
class CloneAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 源用户账户名
         * @type {string || null}
         */
        this.SrcUser = null;

        /**
         * 源用户HOST
         * @type {string || null}
         */
        this.SrcHost = null;

        /**
         * 目的用户账户名
         * @type {string || null}
         */
        this.DstUser = null;

        /**
         * 目的用户HOST
         * @type {string || null}
         */
        this.DstHost = null;

        /**
         * 目的用户账户描述
         * @type {string || null}
         */
        this.DstDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SrcUser = 'SrcUser' in params ? params.SrcUser : null;
        this.SrcHost = 'SrcHost' in params ? params.SrcHost : null;
        this.DstUser = 'DstUser' in params ? params.DstUser : null;
        this.DstHost = 'DstHost' in params ? params.DstHost : null;
        this.DstDesc = 'DstDesc' in params ? params.DstDesc : null;

    }
}

/**
 * DescribeDatabaseObjects请求参数结构体
 * @class
 */
class DescribeDatabaseObjectsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名称，通过 DescribeDatabases 接口获取。
         * @type {string || null}
         */
        this.DbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;

    }
}

/**
 * 慢查询条目信息
 * @class
 */
class SlowLogData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语句校验和，用于查询详情
         * @type {string || null}
         */
        this.CheckSum = null;

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.Db = null;

        /**
         * 抽象的SQL语句
         * @type {string || null}
         */
        this.FingerPrint = null;

        /**
         * 平均的锁时间
         * @type {string || null}
         */
        this.LockTimeAvg = null;

        /**
         * 最大锁时间
         * @type {string || null}
         */
        this.LockTimeMax = null;

        /**
         * 最小锁时间
         * @type {string || null}
         */
        this.LockTimeMin = null;

        /**
         * 锁时间总和
         * @type {string || null}
         */
        this.LockTimeSum = null;

        /**
         * 查询次数
         * @type {string || null}
         */
        this.QueryCount = null;

        /**
         * 平均查询时间
         * @type {string || null}
         */
        this.QueryTimeAvg = null;

        /**
         * 最大查询时间
         * @type {string || null}
         */
        this.QueryTimeMax = null;

        /**
         * 最小查询时间
         * @type {string || null}
         */
        this.QueryTimeMin = null;

        /**
         * 查询时间总和
         * @type {string || null}
         */
        this.QueryTimeSum = null;

        /**
         * 扫描行数
         * @type {string || null}
         */
        this.RowsExaminedSum = null;

        /**
         * 发送行数
         * @type {string || null}
         */
        this.RowsSentSum = null;

        /**
         * 最后执行时间
         * @type {string || null}
         */
        this.TsMax = null;

        /**
         * 首次执行时间
         * @type {string || null}
         */
        this.TsMin = null;

        /**
         * 帐号
         * @type {string || null}
         */
        this.User = null;

        /**
         * 样例Sql
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExampleSql = null;

        /**
         * 账户的域名
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
        this.CheckSum = 'CheckSum' in params ? params.CheckSum : null;
        this.Db = 'Db' in params ? params.Db : null;
        this.FingerPrint = 'FingerPrint' in params ? params.FingerPrint : null;
        this.LockTimeAvg = 'LockTimeAvg' in params ? params.LockTimeAvg : null;
        this.LockTimeMax = 'LockTimeMax' in params ? params.LockTimeMax : null;
        this.LockTimeMin = 'LockTimeMin' in params ? params.LockTimeMin : null;
        this.LockTimeSum = 'LockTimeSum' in params ? params.LockTimeSum : null;
        this.QueryCount = 'QueryCount' in params ? params.QueryCount : null;
        this.QueryTimeAvg = 'QueryTimeAvg' in params ? params.QueryTimeAvg : null;
        this.QueryTimeMax = 'QueryTimeMax' in params ? params.QueryTimeMax : null;
        this.QueryTimeMin = 'QueryTimeMin' in params ? params.QueryTimeMin : null;
        this.QueryTimeSum = 'QueryTimeSum' in params ? params.QueryTimeSum : null;
        this.RowsExaminedSum = 'RowsExaminedSum' in params ? params.RowsExaminedSum : null;
        this.RowsSentSum = 'RowsSentSum' in params ? params.RowsSentSum : null;
        this.TsMax = 'TsMax' in params ? params.TsMax : null;
        this.TsMin = 'TsMin' in params ? params.TsMin : null;
        this.User = 'User' in params ? params.User : null;
        this.ExampleSql = 'ExampleSql' in params ? params.ExampleSql : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * 修改参数结果
 * @class
 */
class ParamModifyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改参数名字
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 参数修改结果。0表示修改成功；-1表示修改失败；-2表示该参数值非法
         * @type {number || null}
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
        this.Param = 'Param' in params ? params.Param : null;
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * DescribeDBInstances请求参数结构体
 * @class
 */
class DescribeDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按照一个或者多个实例 ID 查询。实例 ID 形如：tdsql-ow728lmc。每次请求的实例的上限为100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 搜索的字段名，当前支持的值有：instancename、vip、all。传 instancename 表示按实例名进行搜索；传 vip 表示按内网IP进行搜索；传 all 将会按实例ID、实例名和内网IP进行搜索。
         * @type {string || null}
         */
        this.SearchName = null;

        /**
         * 搜索的关键字，支持模糊搜索。多个关键字使用换行符（'\n'）分割。
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * 按项目 ID 查询
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * 是否根据 VPC 网络来搜索
         * @type {boolean || null}
         */
        this.IsFilterVpc = null;

        /**
         * 私有网络 ID， IsFilterVpc 为 1 时有效
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 私有网络的子网 ID， IsFilterVpc 为 1 时有效
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 排序字段， projectId， createtime， instancename 三者之一
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 排序类型， desc 或者 asc
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * 偏移量，默认为 0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 按 OriginSerialId 查询
         * @type {Array.<string> || null}
         */
        this.OriginSerialIds = null;

        /**
         * 标识是否使用ExclusterType字段, false不使用，true使用
         * @type {boolean || null}
         */
        this.IsFilterExcluster = null;

        /**
         * 实例所属独享集群类型。取值范围：1-非独享集群，2-独享集群， 0-全部
         * @type {number || null}
         */
        this.ExclusterType = null;

        /**
         * 按独享集群ID过滤实例，独享集群ID形如dbdc-4ih6uct9
         * @type {Array.<string> || null}
         */
        this.ExclusterIds = null;

        /**
         * 按标签key查询
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * 实例类型过滤，1-独享实例，2-主实例，3-灾备实例，多个按逗号分隔
         * @type {string || null}
         */
        this.FilterInstanceType = null;

        /**
         * 按照实例状态进行筛选
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * 排除实例状态
         * @type {Array.<number> || null}
         */
        this.ExcludeStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.SearchName = 'SearchName' in params ? params.SearchName : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.IsFilterVpc = 'IsFilterVpc' in params ? params.IsFilterVpc : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.OriginSerialIds = 'OriginSerialIds' in params ? params.OriginSerialIds : null;
        this.IsFilterExcluster = 'IsFilterExcluster' in params ? params.IsFilterExcluster : null;
        this.ExclusterType = 'ExclusterType' in params ? params.ExclusterType : null;
        this.ExclusterIds = 'ExclusterIds' in params ? params.ExclusterIds : null;
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.FilterInstanceType = 'FilterInstanceType' in params ? params.FilterInstanceType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ExcludeStatus = 'ExcludeStatus' in params ? params.ExcludeStatus : null;

    }
}

/**
 * DescribeDBSecurityGroups请求参数结构体
 * @class
 */
class DescribeDBSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：mariadb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 实例ID。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * SwitchDBInstanceHA返回参数结构体
 * @class
 */
class SwitchDBInstanceHAResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步流程Id
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSaleInfo请求参数结构体
 * @class
 */
class DescribeSaleInfoRequest extends  AbstractModel {
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
 * RenewDBInstance请求参数结构体
 * @class
 */
class RenewDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;

    }
}

/**
 * CreateTmpInstances请求参数结构体
 * @class
 */
class CreateTmpInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回档实例的ID列表，形如：tdsql-ow728lmc。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 回档时间点
         * @type {string || null}
         */
        this.RollbackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;

    }
}

/**
 * RestartDBInstances返回参数结构体
 * @class
 */
class RestartDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectSecurityGroups返回参数结构体
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 安全组详情。
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * 安全组总数。
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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库函数信息
 * @class
 */
class DatabaseFunction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 函数名称
         * @type {string || null}
         */
        this.Func = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Func = 'Func' in params ? params.Func : null;

    }
}

/**
 * ResetAccountPassword返回参数结构体
 * @class
 */
class ResetAccountPasswordResponse extends  AbstractModel {
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
 * DescribePrice请求参数结构体
 * @class
 */
class DescribePriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 欲新购实例的可用区ID。
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 实例节点个数，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 欲购买的时长，单位：月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 欲购买的数量，默认查询购买1个实例的价格。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 付费类型。postpaid：按量付费   prepaid：预付费
         * @type {string || null}
         */
        this.Paymode = null;

        /**
         * 价格金额单位，不传默认单位为分，取值：  
* pent：分
* microPent：微分
         * @type {string || null}
         */
        this.AmountUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;
        this.AmountUnit = 'AmountUnit' in params ? params.AmountUnit : null;

    }
}

/**
 * CreateDBInstance返回参数结构体
 * @class
 */
class CreateDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRealServerAccessStrategy请求参数结构体
 * @class
 */
class ModifyRealServerAccessStrategyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：tdsql-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * RS就近模式, 0-无策略, 1-可用区就近访问。
         * @type {number || null}
         */
        this.RsAccessStrategy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RsAccessStrategy = 'RsAccessStrategy' in params ? params.RsAccessStrategy : null;

    }
}

/**
 * DescribeBackupTime请求参数结构体
 * @class
 */
class DescribeBackupTimeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
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
 * DescribeSaleInfo返回参数结构体
 * @class
 */
class DescribeSaleInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可售卖地域信息列表
         * @type {Array.<RegionInfo> || null}
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
                let obj = new RegionInfo();
                obj.deserialize(params.RegionList[z]);
                this.RegionList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBEncryptAttributes返回参数结构体
 * @class
 */
class ModifyDBEncryptAttributesResponse extends  AbstractModel {
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
 * DescribeDBEncryptAttributes返回参数结构体
 * @class
 */
class DescribeDBEncryptAttributesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否启用加密，1-已开启；0-未开启。
         * @type {number || null}
         */
        this.EncryptStatus = null;

        /**
         * DEK密钥
         * @type {string || null}
         */
        this.CipherText = null;

        /**
         * DEK密钥过期日期。
         * @type {string || null}
         */
        this.ExpireDate = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EncryptStatus = 'EncryptStatus' in params ? params.EncryptStatus : null;
        this.CipherText = 'CipherText' in params ? params.CipherText : null;
        this.ExpireDate = 'ExpireDate' in params ? params.ExpireDate : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyDBInstance请求参数结构体
 * @class
 */
class DestroyDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：tdsqlshard-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
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
 * 数据库表信息
 * @class
 */
class DatabaseTable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表名
         * @type {string || null}
         */
        this.Table = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Table = 'Table' in params ? params.Table : null;

    }
}

/**
 * DescribeDBEncryptAttributes请求参数结构体
 * @class
 */
class DescribeDBEncryptAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id，形如：tdsql-ow728lmc。
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
 * 订单信息
 * @class
 */
class Deal extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 所属账号
         * @type {string || null}
         */
        this.OwnerUin = null;

        /**
         * 商品数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 关联的流程 Id，可用于查询流程执行状态
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 只有创建实例且已完成发货的订单会填充该字段，表示该订单创建的实例的 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 付费模式，0后付费/1预付费
         * @type {number || null}
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
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

    }
}

/**
 * GrantAccountPrivileges请求参数结构体
 * @class
 */
class GrantAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 数据库名。如果为 \*，表示设置全局权限（即 \*.\*），此时忽略 Type 和 Object 参数。当DbName不为\*时，需要传入参 Type。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 全局权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER，SHOW DATABASES，REPLICATION CLIENT，REPLICATION SLAVE 
库权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE TEMPORARY TABLES，LOCK TABLES，EXECUTE，CREATE VIEW，SHOW VIEW，CREATE ROUTINE，ALTER ROUTINE，EVENT，TRIGGER 
表/视图权限： SELECT，INSERT，UPDATE，DELETE，CREATE，DROP，REFERENCES，INDEX，ALTER，CREATE VIEW，SHOW VIEW，TRIGGER 
存储过程/函数权限： ALTER ROUTINE，EXECUTE 
字段权限： INSERT，REFERENCES，SELECT，UPDATE
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示设置该数据库权限（即db.\*），此时忽略 Object 参数
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空
         * @type {string || null}
         */
        this.Object = null;

        /**
         * 当 Type=table 时，ColName 为 \* 表示对表授权，如果为具体字段名，表示对字段授权
         * @type {string || null}
         */
        this.ColName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Object = 'Object' in params ? params.Object : null;
        this.ColName = 'ColName' in params ? params.ColName : null;

    }
}

/**
 * CreateDedicatedClusterDBInstance请求参数结构体
 * @class
 */
class CreateDedicatedClusterDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配实例个数
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * 內存大小，单位GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 磁盘大小，单位GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 独享集群集群uuid
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * （废弃）可用区
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * （废弃）Pid，可通过获取独享集群售卖配置接口得到
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * （废弃）机型
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 网络Id
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 子网Id
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * db类型，不传默认0
         * @type {string || null}
         */
        this.DbVersionId = null;

        /**
         * （废弃）是否手动指定一组服务器分配, 运维使用
         * @type {number || null}
         */
        this.Manual = null;

        /**
         * （废弃）DeviceNo参数
         * @type {string || null}
         */
        this.DeviceNo = null;

        /**
         * 安全组ID
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * DCN源实例ID
         * @type {string || null}
         */
        this.DcnInstanceId = null;

        /**
         * DCN源实例地域名
         * @type {string || null}
         */
        this.DcnRegion = null;

        /**
         * 自定义实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 标签
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * 支持IPv6标志：1 支持， 0 不支持
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步可退化）。
         * @type {Array.<DBParamValue> || null}
         */
        this.InitParams = null;

        /**
         * 实例节点数
         * @type {number || null}
         */
        this.NodeNum = null;

        /**
         * 指定主节点uuid，不填随机分配
         * @type {string || null}
         */
        this.MasterHostId = null;

        /**
         * 指定从节点uuid，不填随机分配
         * @type {Array.<string> || null}
         */
        this.SlaveHostIds = null;

        /**
         * 需要回档的源实例ID
         * @type {string || null}
         */
        this.RollbackInstanceId = null;

        /**
         * 回档时间
         * @type {string || null}
         */
        this.RollbackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;
        this.Manual = 'Manual' in params ? params.Manual : null;
        this.DeviceNo = 'DeviceNo' in params ? params.DeviceNo : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.DcnInstanceId = 'DcnInstanceId' in params ? params.DcnInstanceId : null;
        this.DcnRegion = 'DcnRegion' in params ? params.DcnRegion : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

        if (params.InitParams) {
            this.InitParams = new Array();
            for (let z in params.InitParams) {
                let obj = new DBParamValue();
                obj.deserialize(params.InitParams[z]);
                this.InitParams.push(obj);
            }
        }
        this.NodeNum = 'NodeNum' in params ? params.NodeNum : null;
        this.MasterHostId = 'MasterHostId' in params ? params.MasterHostId : null;
        this.SlaveHostIds = 'SlaveHostIds' in params ? params.SlaveHostIds : null;
        this.RollbackInstanceId = 'RollbackInstanceId' in params ? params.RollbackInstanceId : null;
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;

    }
}

/**
 * SwitchDBInstanceHA请求参数结构体
 * @class
 */
class SwitchDBInstanceHARequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id，形如 tdsql-ow728lmc
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 切换的目标区域，会自动选择该可用区中延迟最低的节点
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

    }
}

/**
 * 云数据库参数信息。
 * @class
 */
class DBParamValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参数名称
         * @type {string || null}
         */
        this.Param = null;

        /**
         * 参数值
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
        this.Param = 'Param' in params ? params.Param : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 实例可售卖规格详细信息，创建实例和扩容实例时 Pid+MemSize 唯一确定一种售卖规格，磁盘大小可用区间为[MinDataDisk,MaxDataDisk]
 * @class
 */
class SpecConfigInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备型号
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 数据盘规格最小值，单位 GB
         * @type {number || null}
         */
        this.MinStorage = null;

        /**
         * 数据盘规格最大值，单位 GB
         * @type {number || null}
         */
        this.MaxStorage = null;

        /**
         * 推荐的使用场景
         * @type {string || null}
         */
        this.SuitInfo = null;

        /**
         * 最大 Qps 值
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 产品类型 Id
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 节点个数，2 表示一主一从，3 表示一主二从
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * Cpu核数
         * @type {number || null}
         */
        this.Cpu = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.MinStorage = 'MinStorage' in params ? params.MinStorage : null;
        this.MaxStorage = 'MaxStorage' in params ? params.MaxStorage : null;
        this.SuitInfo = 'SuitInfo' in params ? params.SuitInfo : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;

    }
}

/**
 * ModifyDBParameters请求参数结构体
 * @class
 */
class ModifyDBParametersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 参数列表，每一个元素是Param和Value的组合
         * @type {Array.<DBParamValue> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new DBParamValue();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库引擎名称，本接口取值：mariadb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组
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
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;

    }
}

/**
 * DescribeDcnDetail请求参数结构体
 * @class
 */
class DescribeDcnDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
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
 * DescribeFileDownloadUrl返回参数结构体
 * @class
 */
class DescribeFileDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 带签名的下载连接
         * @type {string || null}
         */
        this.PreSignedUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PreSignedUrl = 'PreSignedUrl' in params ? params.PreSignedUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBParameters返回参数结构体
 * @class
 */
class ModifyDBParametersResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 参数修改结果
         * @type {Array.<ParamModifyResult> || null}
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new ParamModifyResult();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CopyAccountPrivileges请求参数结构体
 * @class
 */
class CopyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 源用户名
         * @type {string || null}
         */
        this.SrcUserName = null;

        /**
         * 源用户允许的访问 host
         * @type {string || null}
         */
        this.SrcHost = null;

        /**
         * 目的用户名
         * @type {string || null}
         */
        this.DstUserName = null;

        /**
         * 目的用户允许的访问 host
         * @type {string || null}
         */
        this.DstHost = null;

        /**
         * 源账号的 ReadOnly 属性
         * @type {string || null}
         */
        this.SrcReadOnly = null;

        /**
         * 目的账号的 ReadOnly 属性
         * @type {string || null}
         */
        this.DstReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SrcUserName = 'SrcUserName' in params ? params.SrcUserName : null;
        this.SrcHost = 'SrcHost' in params ? params.SrcHost : null;
        this.DstUserName = 'DstUserName' in params ? params.DstUserName : null;
        this.DstHost = 'DstHost' in params ? params.DstHost : null;
        this.SrcReadOnly = 'SrcReadOnly' in params ? params.SrcReadOnly : null;
        this.DstReadOnly = 'DstReadOnly' in params ? params.DstReadOnly : null;

    }
}

/**
 * 安全组详情
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 安全组ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 安全组名称
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * 安全组备注
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

        /**
         * 入站规则
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Inbound = null;

        /**
         * 出站规则
         * @type {Array.<SecurityGroupBound> || null}
         */
        this.Outbound = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new SecurityGroupBound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }

    }
}

/**
 * DescribeDatabaseTable请求参数结构体
 * @class
 */
class DescribeDatabaseTableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：dcdbt-ow7t8lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名称，通过 DescribeDatabases 接口获取。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 表名称，通过 DescribeDatabaseObjects 接口获取。
         * @type {string || null}
         */
        this.Table = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Table = 'Table' in params ? params.Table : null;

    }
}

/**
 * OpenDBExtranetAccess返回参数结构体
 * @class
 */
class OpenDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID，可通过 DescribeFlow 查询任务状态。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * KillSession请求参数结构体
 * @class
 */
class KillSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 会话ID列表
         * @type {Array.<number> || null}
         */
        this.SessionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;

    }
}

/**
 * TerminateDedicatedDBInstance请求参数结构体
 * @class
 */
class TerminateDedicatedDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 Id，形如：tdsql-ow728lmc。
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
 * DescribeDatabaseObjects返回参数结构体
 * @class
 */
class DescribeDatabaseObjectsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 透传入参。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名称。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 表列表。
         * @type {Array.<DatabaseTable> || null}
         */
        this.Tables = null;

        /**
         * 视图列表。
         * @type {Array.<DatabaseView> || null}
         */
        this.Views = null;

        /**
         * 存储过程列表。
         * @type {Array.<DatabaseProcedure> || null}
         */
        this.Procs = null;

        /**
         * 函数列表。
         * @type {Array.<DatabaseFunction> || null}
         */
        this.Funcs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.DbName = 'DbName' in params ? params.DbName : null;

        if (params.Tables) {
            this.Tables = new Array();
            for (let z in params.Tables) {
                let obj = new DatabaseTable();
                obj.deserialize(params.Tables[z]);
                this.Tables.push(obj);
            }
        }

        if (params.Views) {
            this.Views = new Array();
            for (let z in params.Views) {
                let obj = new DatabaseView();
                obj.deserialize(params.Views[z]);
                this.Views.push(obj);
            }
        }

        if (params.Procs) {
            this.Procs = new Array();
            for (let z in params.Procs) {
                let obj = new DatabaseProcedure();
                obj.deserialize(params.Procs[z]);
                this.Procs.push(obj);
            }
        }

        if (params.Funcs) {
            this.Funcs = new Array();
            for (let z in params.Funcs) {
                let obj = new DatabaseFunction();
                obj.deserialize(params.Funcs[z]);
                this.Funcs.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBInstanceName请求参数结构体
 * @class
 */
class ModifyDBInstanceNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的实例 ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 新的实例名称。允许的字符为字母、数字、下划线、连字符和中文。
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
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DeleteAccount请求参数结构体
 * @class
 */
class DeleteAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;

    }
}

/**
 * 数据库列信息
 * @class
 */
class TableColumn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 列名称
         * @type {string || null}
         */
        this.Col = null;

        /**
         * 列类型
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
        this.Col = 'Col' in params ? params.Col : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateTmpInstances返回参数结构体
 * @class
 */
class CreateTmpInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务流程ID。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeDBInstance请求参数结构体
 * @class
 */
class UpgradeDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待升级的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 内存大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 存储空间大小，单位：GB，可以通过 DescribeDBInstanceSpecs
 查询实例规格获得不同内存大小对应的磁盘规格下限和上限。
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 是否自动使用代金券进行支付，默认不使用。
         * @type {boolean || null}
         */
        this.AutoVoucher = null;

        /**
         * 代金券ID列表，目前仅支持指定一张代金券。
         * @type {Array.<string> || null}
         */
        this.VoucherIds = null;

        /**
         * 变更部署时指定的新可用区列表，第1个为主可用区，其余为从可用区
         * @type {Array.<string> || null}
         */
        this.Zones = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.AutoVoucher = 'AutoVoucher' in params ? params.AutoVoucher : null;
        this.VoucherIds = 'VoucherIds' in params ? params.VoucherIds : null;
        this.Zones = 'Zones' in params ? params.Zones : null;

    }
}

/**
 * 安全出入口规则
 * @class
 */
class SecurityGroupBound extends  AbstractModel {
    constructor(){
        super();

        /**
         * 策略，ACCEPT 或者 DROP
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 来源 IP 或 IP 段，例如192.168.0.0/16
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * 端口
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * 网络协议，支持 UDP、TCP 等
         * @type {string || null}
         */
        this.IpProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;

    }
}

/**
 * 列权限信息
 * @class
 */
class ColumnPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库表名
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 数据库列名
         * @type {string || null}
         */
        this.Column = null;

        /**
         * 权限信息
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Column = 'Column' in params ? params.Column : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * ModifySyncTaskAttribute请求参数结构体
 * @class
 */
class ModifySyncTaskAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或多个待操作的任务ID。可通过DescribeSyncTasks API返回值中的TaskId获取。每次请求允许操作的任务数量上限是100。
         * @type {Array.<string> || null}
         */
        this.TaskIds = null;

        /**
         * 任务名称。可任意命名，但不得超过100个字符。
         * @type {string || null}
         */
        this.TaskName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.TaskName = 'TaskName' in params ? params.TaskName : null;

    }
}

/**
 * DescribeUpgradePrice返回参数结构体
 * @class
 */
class DescribeUpgradePriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价  
* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
* 币种：国内站为人民币，国际站为美元
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，受折扣等影响，可能和原价不同
* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
* 币种：国内站人民币，国际站美元
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 变配明细计算公式
         * @type {string || null}
         */
        this.Formula = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Formula = 'Formula' in params ? params.Formula : null;
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
 * 描述云数据库实例的详细信息。
 * @class
 */
class DBInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，唯一标识一个 TDSQL 实例
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称，用户可修改
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例所属应用 ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 实例所属项目 ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例所在地域名称，如 ap-shanghai
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 实例所在可用区名称，如 ap-shanghai-1
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 私有网络 ID，基础网络时为 0
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 子网 ID，基础网络时为 0
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 实例状态：0 创建中，1 流程处理中， 2 运行中，3 实例未初始化，-1 实例已隔离，4 实例初始化中，5 实例删除中，6 实例重启中，7 数据迁移中
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 内网 IP 地址
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 内网端口
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * 外网访问的域名，公网可解析
         * @type {string || null}
         */
        this.WanDomain = null;

        /**
         * 外网 IP 地址，公网可访问
         * @type {string || null}
         */
        this.WanVip = null;

        /**
         * 外网端口
         * @type {number || null}
         */
        this.WanPort = null;

        /**
         * 实例创建时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 实例最后更新时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 自动续费标志：0 否，1 是
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * 实例到期时间，格式为 2006-01-02 15:04:05
         * @type {string || null}
         */
        this.PeriodEndTime = null;

        /**
         * 实例所属账号
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * TDSQL 版本信息
         * @type {string || null}
         */
        this.TdsqlVersion = null;

        /**
         * 实例内存大小，单位 GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例存储大小，单位 GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 字符串型的私有网络ID
         * @type {string || null}
         */
        this.UniqueVpcId = null;

        /**
         * 字符串型的私有网络子网ID
         * @type {string || null}
         */
        this.UniqueSubnetId = null;

        /**
         * 原始实例ID（过时字段，请勿依赖该值）
         * @type {string || null}
         */
        this.OriginSerialId = null;

        /**
         * 节点数，2为一主一从，3为一主二从
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 是否临时实例，0为否，非0为是
         * @type {number || null}
         */
        this.IsTmp = null;

        /**
         * 独享集群ID，为空表示为普通实例
         * @type {string || null}
         */
        this.ExclusterId = null;

        /**
         * 数字实例ID（过时字段，请勿依赖该值）
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 产品类型 ID
         * @type {number || null}
         */
        this.Pid = null;

        /**
         * 最大 Qps 值
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 付费模式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Paymode = null;

        /**
         * 实例处于异步任务时的异步任务流程ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Locker = null;

        /**
         * 实例目前运行状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 外网状态，0-未开通；1-已开通；2-关闭；3-开通中
         * @type {number || null}
         */
        this.WanStatus = null;

        /**
         * 该实例是否支持审计。1-支持；0-不支持
         * @type {number || null}
         */
        this.IsAuditSupported = null;

        /**
         * 机器型号
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 是否支持数据加密。1-支持；0-不支持
         * @type {number || null}
         */
        this.IsEncryptSupported = null;

        /**
         * 实例CPU核数
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 实例IPv6标志
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * 内网IPv6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Vipv6 = null;

        /**
         * 外网IPv6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WanVipv6 = null;

        /**
         * 外网IPv6端口
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WanPortIpv6 = null;

        /**
         * 外网IPv6状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.WanStatusIpv6 = null;

        /**
         * 数据库引擎
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbEngine = null;

        /**
         * 数据库版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbVersion = null;

        /**
         * DCN标志，0-无，1-主实例，2-灾备实例
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DcnFlag = null;

        /**
         * DCN状态，0-无，1-创建中，2-同步中，3-已断开
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DcnStatus = null;

        /**
         * DCN灾备实例数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DcnDstNum = null;

        /**
         * 1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * 实例标签信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * 数据库版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DbVersionId = null;

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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.WanDomain = 'WanDomain' in params ? params.WanDomain : null;
        this.WanVip = 'WanVip' in params ? params.WanVip : null;
        this.WanPort = 'WanPort' in params ? params.WanPort : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.PeriodEndTime = 'PeriodEndTime' in params ? params.PeriodEndTime : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.TdsqlVersion = 'TdsqlVersion' in params ? params.TdsqlVersion : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.UniqueVpcId = 'UniqueVpcId' in params ? params.UniqueVpcId : null;
        this.UniqueSubnetId = 'UniqueSubnetId' in params ? params.UniqueSubnetId : null;
        this.OriginSerialId = 'OriginSerialId' in params ? params.OriginSerialId : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.IsTmp = 'IsTmp' in params ? params.IsTmp : null;
        this.ExclusterId = 'ExclusterId' in params ? params.ExclusterId : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.Pid = 'Pid' in params ? params.Pid : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Paymode = 'Paymode' in params ? params.Paymode : null;
        this.Locker = 'Locker' in params ? params.Locker : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.IsAuditSupported = 'IsAuditSupported' in params ? params.IsAuditSupported : null;
        this.Machine = 'Machine' in params ? params.Machine : null;
        this.IsEncryptSupported = 'IsEncryptSupported' in params ? params.IsEncryptSupported : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;
        this.Vipv6 = 'Vipv6' in params ? params.Vipv6 : null;
        this.WanVipv6 = 'WanVipv6' in params ? params.WanVipv6 : null;
        this.WanPortIpv6 = 'WanPortIpv6' in params ? params.WanPortIpv6 : null;
        this.WanStatusIpv6 = 'WanStatusIpv6' in params ? params.WanStatusIpv6 : null;
        this.DbEngine = 'DbEngine' in params ? params.DbEngine : null;
        this.DbVersion = 'DbVersion' in params ? params.DbVersion : null;
        this.DcnFlag = 'DcnFlag' in params ? params.DcnFlag : null;
        this.DcnStatus = 'DcnStatus' in params ? params.DcnStatus : null;
        this.DcnDstNum = 'DcnDstNum' in params ? params.DcnDstNum : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;

    }
}

/**
 * DescribePrice返回参数结构体
 * @class
 */
class DescribePriceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原价  
* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
* 币种：国内站为人民币，国际站为美元
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 实际价格，受折扣等影响，可能和原价不同
* 单位：默认为分，若请求参数带有AmountUnit，参考AmountUnit描述
* 币种：国内站人民币，国际站美元
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InitDBInstances请求参数结构体
 * @class
 */
class InitDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待初始化的实例ID列表，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 参数列表。本接口的可选值为：character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化。默认为强同步）。
         * @type {Array.<DBParamValue> || null}
         */
        this.Params = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.Params) {
            this.Params = new Array();
            for (let z in params.Params) {
                let obj = new DBParamValue();
                obj.deserialize(params.Params[z]);
                this.Params.push(obj);
            }
        }

    }
}

/**
 * ModifyAccountPrivileges返回参数结构体
 * @class
 */
class ModifyAccountPrivilegesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/237/16177)。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBackupTime返回参数结构体
 * @class
 */
class ModifyBackupTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设置的状态，0 表示成功
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
 * 数据库信息
 * @class
 */
class Database extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名称
         * @type {string || null}
         */
        this.DbName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DbName = 'DbName' in params ? params.DbName : null;

    }
}

/**
 * GrantAccountPrivileges返回参数结构体
 * @class
 */
class GrantAccountPrivilegesResponse extends  AbstractModel {
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
 * CancelDcnJob请求参数结构体
 * @class
 */
class CancelDcnJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 灾备实例ID
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
 * ModifyInstanceVip请求参数结构体
 * @class
 */
class ModifyInstanceVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * IPv6标志
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * VIP保留时长，单位小时，取值范围（0~168），0表示立即释放，有一分钟释放延迟。不传此参数，默认24小时释放VIP。
         * @type {number || null}
         */
        this.VipReleaseDelay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;
        this.VipReleaseDelay = 'VipReleaseDelay' in params ? params.VipReleaseDelay : null;

    }
}

/**
 * OpenDBExtranetAccess请求参数结构体
 * @class
 */
class OpenDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待开放外网访问的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否IPv6，默认0
         * @type {number || null}
         */
        this.Ipv6Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

    }
}

/**
 * 数据库权限
 * @class
 */
class DatabasePrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 权限信息
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Privileges = 'Privileges' in params ? params.Privileges : null;
        this.Database = 'Database' in params ? params.Database : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
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
 * ModifyDBInstanceName返回参数结构体
 * @class
 */
class ModifyDBInstanceNameResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
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
 * CloseDBExtranetAccess返回参数结构体
 * @class
 */
class CloseDBExtranetAccessResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务ID，可通过 DescribeFlow 查询任务状态。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 函数权限信息
 * @class
 */
class FunctionPrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库函数名
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * 权限信息
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * ModifyAccountDescription请求参数结构体
 * @class
 */
class ModifyAccountDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 新的账号备注，长度 0~256。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * KillSession返回参数结构体
 * @class
 */
class KillSessionResponse extends  AbstractModel {
    constructor(){
        super();

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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBackupTime返回参数结构体
 * @class
 */
class DescribeBackupTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的配置数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例备份时间配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DBBackupTimeConfig> || null}
         */
        this.Items = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DBBackupTimeConfig();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ActivateHourDBInstance请求参数结构体
 * @class
 */
class ActivateHourDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID列表
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
 * RenewDBInstance返回参数结构体
 * @class
 */
class RenewDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
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
 * DescribeDatabases返回参数结构体
 * @class
 */
class DescribeDatabasesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该实例上的数据库列表。
         * @type {Array.<Database> || null}
         */
        this.Databases = null;

        /**
         * 透传入参。
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

        if (params.Databases) {
            this.Databases = new Array();
            for (let z in params.Databases) {
                let obj = new Database();
                obj.deserialize(params.Databases[z]);
                this.Databases.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 视图权限信息
 * @class
 */
class ViewPrivileges extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库视图名
         * @type {string || null}
         */
        this.View = null;

        /**
         * 权限信息
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.View = 'View' in params ? params.View : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * DescribeOrders请求参数结构体
 * @class
 */
class DescribeOrdersRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询的长订单号列表，创建实例、续费实例、扩容实例接口返回。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

    }
}

/**
 * DescribeDBLogFiles返回参数结构体
 * @class
 */
class DescribeDBLogFilesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 请求日志类型，取值只能为1、2、3或者4。1-binlog，2-冷备，3-errlog，4-slowlog。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 请求日志总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 包含uri、length、mtime（修改时间）等信息
         * @type {Array.<LogFileInfo> || null}
         */
        this.Files = null;

        /**
         * 如果是VPC网络的实例，做用本前缀加上URI为下载地址
         * @type {string || null}
         */
        this.VpcPrefix = null;

        /**
         * 如果是普通网络的实例，做用本前缀加上URI为下载地址
         * @type {string || null}
         */
        this.NormalPrefix = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Type = 'Type' in params ? params.Type : null;
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Files) {
            this.Files = new Array();
            for (let z in params.Files) {
                let obj = new LogFileInfo();
                obj.deserialize(params.Files[z]);
                this.Files.push(obj);
            }
        }
        this.VpcPrefix = 'VpcPrefix' in params ? params.VpcPrefix : null;
        this.NormalPrefix = 'NormalPrefix' in params ? params.NormalPrefix : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseDBExtranetAccess请求参数结构体
 * @class
 */
class CloseDBExtranetAccessRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待关闭外网访问的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否IPv6，默认0
         * @type {number || null}
         */
        this.Ipv6Flag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

    }
}

/**
 * 标签对象，包含tagKey & tagValue
 * @class
 */
class ResourceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签键key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * 标签值value
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
 * DescribeDcnDetail返回参数结构体
 * @class
 */
class DescribeDcnDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DCN同步详情
         * @type {Array.<DcnDetailItem> || null}
         */
        this.DcnDetails = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DcnDetails) {
            this.DcnDetails = new Array();
            for (let z in params.DcnDetails) {
                let obj = new DcnDetailItem();
                obj.deserialize(params.DcnDetails[z]);
                this.DcnDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateDBInstance请求参数结构体
 * @class
 */
class IsolateDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：tdsql-dasjkhd，与云数据库控制台页面中显示的实例 ID 相同，可使用 查询实例列表 接口获取，其值为输出参数中字段 InstanceId 的值。
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
 * 按机型归类的实例可售卖规格信息
 * @class
 */
class InstanceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备型号
         * @type {string || null}
         */
        this.Machine = null;

        /**
         * 该机型对应的可售卖规格列表
         * @type {Array.<SpecConfigInfo> || null}
         */
        this.SpecInfos = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Machine = 'Machine' in params ? params.Machine : null;

        if (params.SpecInfos) {
            this.SpecInfos = new Array();
            for (let z in params.SpecInfos) {
                let obj = new SpecConfigInfo();
                obj.deserialize(params.SpecInfos[z]);
                this.SpecInfos.push(obj);
            }
        }

    }
}

/**
 * DescribeFlow请求参数结构体
 * @class
 */
class DescribeFlowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步请求接口返回的任务流程号。
         * @type {number || null}
         */
        this.FlowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;

    }
}

/**
 * dcn 配置情况
 * @class
 */
class DCNReplicaConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * DCN 运行状态，START为正常运行，STOP为暂停
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoReplicationMode = null;

        /**
         * 延迟复制的类型，DEFAULT为正常，DUE_TIME为指定时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DelayReplicationType = null;

        /**
         * 延迟复制的指定时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DueTime = null;

        /**
         * 延迟复制时的延迟秒数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ReplicationDelay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoReplicationMode = 'RoReplicationMode' in params ? params.RoReplicationMode : null;
        this.DelayReplicationType = 'DelayReplicationType' in params ? params.DelayReplicationType : null;
        this.DueTime = 'DueTime' in params ? params.DueTime : null;
        this.ReplicationDelay = 'ReplicationDelay' in params ? params.ReplicationDelay : null;

    }
}

/**
 * ModifyAccountPrivileges请求参数结构体
 * @class
 */
class ModifyAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，格式如：tdsql-c1nl9rpv，与云数据库控制台页面中显示的实例 ID 相同。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库的账号，包括用户名和域名。
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * 全局权限。其中，GlobalPrivileges 中权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "PROCESS", "DROP","REFERENCES","INDEX","ALTER","SHOW DATABASES","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
注意，不传该参数表示保留现有权限，如需清除，该字段传空数组。
         * @type {Array.<string> || null}
         */
        this.GlobalPrivileges = null;

        /**
         * 数据库的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE TEMPORARY TABLES","LOCK TABLES","EXECUTE","CREATE VIEW","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EVENT","TRIGGER"。
注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
         * @type {Array.<DatabasePrivilege> || null}
         */
        this.DatabasePrivileges = null;

        /**
         * 数据库中表的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。
注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
         * @type {Array.<TablePrivilege> || null}
         */
        this.TablePrivileges = null;

        /**
         * 数据库表中列的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","REFERENCES"。
注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
         * @type {Array.<ColumnPrivilege> || null}
         */
        this.ColumnPrivileges = null;

        /**
         * 数据库视图的权限。Privileges 权限的可选值为："SELECT","INSERT","UPDATE","DELETE","CREATE", "DROP","REFERENCES","INDEX","ALTER","CREATE VIEW","SHOW VIEW", "TRIGGER"。
注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
         * @type {Array.<ViewPrivileges> || null}
         */
        this.ViewPrivileges = null;

        /**
         * 数据库函数的权限。Privileges 权限的可选值为："ALTER ROUTINE"，"EXECUTE"。
注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
         * @type {Array.<FunctionPrivilege> || null}
         */
        this.FunctionPrivileges = null;

        /**
         * 数据库存储过程的权限。Privileges 权限的可选值为："ALTER ROUTINE"，"EXECUTE"。
注意，不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组。
         * @type {Array.<ProcedurePrivilege> || null}
         */
        this.ProcedurePrivileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.GlobalPrivileges = 'GlobalPrivileges' in params ? params.GlobalPrivileges : null;

        if (params.DatabasePrivileges) {
            this.DatabasePrivileges = new Array();
            for (let z in params.DatabasePrivileges) {
                let obj = new DatabasePrivilege();
                obj.deserialize(params.DatabasePrivileges[z]);
                this.DatabasePrivileges.push(obj);
            }
        }

        if (params.TablePrivileges) {
            this.TablePrivileges = new Array();
            for (let z in params.TablePrivileges) {
                let obj = new TablePrivilege();
                obj.deserialize(params.TablePrivileges[z]);
                this.TablePrivileges.push(obj);
            }
        }

        if (params.ColumnPrivileges) {
            this.ColumnPrivileges = new Array();
            for (let z in params.ColumnPrivileges) {
                let obj = new ColumnPrivilege();
                obj.deserialize(params.ColumnPrivileges[z]);
                this.ColumnPrivileges.push(obj);
            }
        }

        if (params.ViewPrivileges) {
            this.ViewPrivileges = new Array();
            for (let z in params.ViewPrivileges) {
                let obj = new ViewPrivileges();
                obj.deserialize(params.ViewPrivileges[z]);
                this.ViewPrivileges.push(obj);
            }
        }

        if (params.FunctionPrivileges) {
            this.FunctionPrivileges = new Array();
            for (let z in params.FunctionPrivileges) {
                let obj = new FunctionPrivilege();
                obj.deserialize(params.FunctionPrivileges[z]);
                this.FunctionPrivileges.push(obj);
            }
        }

        if (params.ProcedurePrivileges) {
            this.ProcedurePrivileges = new Array();
            for (let z in params.ProcedurePrivileges) {
                let obj = new ProcedurePrivilege();
                obj.deserialize(params.ProcedurePrivileges[z]);
                this.ProcedurePrivileges.push(obj);
            }
        }

    }
}

/**
 * 数据库存储过程信息
 * @class
 */
class DatabaseProcedure extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储过程名称
         * @type {string || null}
         */
        this.Proc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Proc = 'Proc' in params ? params.Proc : null;

    }
}

/**
 * ModifyDBSyncMode请求参数结构体
 * @class
 */
class ModifyDBSyncModeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改同步模式的实例ID。形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 同步模式：0 异步，1 强同步， 2 强同步可退化
         * @type {number || null}
         */
        this.SyncMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SyncMode = 'SyncMode' in params ? params.SyncMode : null;

    }
}

/**
 * ActivateHourDBInstance返回参数结构体
 * @class
 */
class ActivateHourDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 隔离成功的实例id列表
         * @type {Array.<string> || null}
         */
        this.SuccessInstanceIds = null;

        /**
         * 隔离失败的实例id列表
         * @type {Array.<string> || null}
         */
        this.FailedInstanceIds = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessInstanceIds = 'SuccessInstanceIds' in params ? params.SuccessInstanceIds : null;
        this.FailedInstanceIds = 'FailedInstanceIds' in params ? params.FailedInstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceNodeInfo请求参数结构体
 * @class
 */
class DescribeInstanceNodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，形如tdsql-6ltok4u9
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 一次最多返回多少条数据。默认为无穷大，返回符合要求的所有数据
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 返回数据的偏移量，默认为0
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * CreateHourDBInstance返回参数结构体
 * @class
 */
class CreateHourDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * 订单对应的实例 ID 列表，如果此处没有返回实例 ID，可以通过订单查询接口获取。还可通过实例查询接口查询实例是否创建完成。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/237/16177)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBEncryptAttributes请求参数结构体
 * @class
 */
class ModifyDBEncryptAttributesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 是否启用数据加密，开启后暂不支持关闭。本接口的可选值为：1-开启数据加密。
         * @type {number || null}
         */
        this.EncryptEnabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.EncryptEnabled = 'EncryptEnabled' in params ? params.EncryptEnabled : null;

    }
}

/**
 * CreateAccount返回参数结构体
 * @class
 */
class CreateAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，透传入参。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 用户名，透传入参。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 允许访问的 host，透传入参。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 透传入参。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * IsolateDedicatedDBInstance返回参数结构体
 * @class
 */
class IsolateDedicatedDBInstanceResponse extends  AbstractModel {
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
 * DescribeLogFileRetentionPeriod返回参数结构体
 * @class
 */
class DescribeLogFileRetentionPeriodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 日志备份天数
         * @type {number || null}
         */
        this.Days = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Days = 'Days' in params ? params.Days : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 售卖可用区信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域英文ID
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域数字ID
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地域中文名
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 可用区列表
         * @type {Array.<ZonesInfo> || null}
         */
        this.ZoneList = null;

        /**
         * 可选择的主可用区和从可用区
         * @type {Array.<ZoneChooseInfo> || null}
         */
        this.AvailableChoice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;

        if (params.ZoneList) {
            this.ZoneList = new Array();
            for (let z in params.ZoneList) {
                let obj = new ZonesInfo();
                obj.deserialize(params.ZoneList[z]);
                this.ZoneList.push(obj);
            }
        }

        if (params.AvailableChoice) {
            this.AvailableChoice = new Array();
            for (let z in params.AvailableChoice) {
                let obj = new ZoneChooseInfo();
                obj.deserialize(params.AvailableChoice[z]);
                this.AvailableChoice.push(obj);
            }
        }

    }
}

/**
 * ModifyInstanceNetwork请求参数结构体
 * @class
 */
class ModifyInstanceNetworkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 希望转到的VPC网络的VpcId
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 希望转到的VPC网络的子网ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 如果需要指定VIP，填上该字段
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * 如果需要指定VIPv6，填上该字段
         * @type {string || null}
         */
        this.Vipv6 = null;

        /**
         * VIP保留时长，单位小时，取值范围（0~168），0表示立即释放，有一分钟释放延迟。不传此参数，默认24小时释放VIP。
         * @type {number || null}
         */
        this.VipReleaseDelay = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vipv6 = 'Vipv6' in params ? params.Vipv6 : null;
        this.VipReleaseDelay = 'VipReleaseDelay' in params ? params.VipReleaseDelay : null;

    }
}

/**
 * DescribeDBInstances返回参数结构体
 * @class
 */
class DescribeDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表
         * @type {Array.<DBInstance> || null}
         */
        this.Instances = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new DBInstance();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 约束类型值的范围
 * @class
 */
class ConstraintRange extends  AbstractModel {
    constructor(){
        super();

        /**
         * 约束类型为section时的最小值
         * @type {string || null}
         */
        this.Min = null;

        /**
         * 约束类型为section时的最大值
         * @type {string || null}
         */
        this.Max = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;

    }
}

/**
 * DescribeRenewalPrice请求参数结构体
 * @class
 */
class DescribeRenewalPriceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例ID。形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 续费时长，单位：月。不传则默认为1个月。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 价格金额单位，不传默认单位为分，取值：  
* pent：分
* microPent：微分
         * @type {string || null}
         */
        this.AmountUnit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.AmountUnit = 'AmountUnit' in params ? params.AmountUnit : null;

    }
}

/**
 * 拉取的日志信息
 * @class
 */
class LogFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Log最后修改时间
         * @type {number || null}
         */
        this.Mtime = null;

        /**
         * 文件长度
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 下载Log时用到的统一资源标识符
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mtime = 'Mtime' in params ? params.Mtime : null;
        this.Length = 'Length' in params ? params.Length : null;
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

    }
}

/**
 * ModifyRealServerAccessStrategy返回参数结构体
 * @class
 */
class ModifyRealServerAccessStrategyResponse extends  AbstractModel {
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
 * RestartDBInstances请求参数结构体
 * @class
 */
class RestartDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID的数组
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 重启时间
         * @type {string || null}
         */
        this.RestartTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RestartTime = 'RestartTime' in params ? params.RestartTime : null;

    }
}

/**
 * 存储过程权限信息
 * @class
 */
class ProcedurePrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库存储过程名
         * @type {string || null}
         */
        this.Procedure = null;

        /**
         * 权限信息
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Procedure = 'Procedure' in params ? params.Procedure : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

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
         * 数据库引擎名称，本接口取值：mariadb。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 安全组Id。
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * 实例ID列表，一个或者多个实例Id组成的数组。
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
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * 云数据库账号信息
 * @class
 */
class DBAccount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户可以从哪台主机登录（对应 MySQL 用户的 host 字段，UserName + Host 唯一标识一个用户，IP形式，IP段以%结尾；支持填入%；为空默认等于%）
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 用户备注信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 最后更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 只读标记，0：否， 1：该账号的sql请求优先选择备机执行，备机不可用时选择主机执行，2：优先选择备机执行，备机不可用时操作失败。
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * 该字段对只读帐号有意义，表示选择主备延迟小于该值的备机
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DelayThresh = null;

        /**
         * 针对只读账号，设置策略是否固定备机，0：不固定备机，即备机不满足条件与客户端不断开连接，Proxy选择其他可用备机，1：备机不满足条件断开连接，确保一个连接固定备机。
         * @type {number || null}
         */
        this.SlaveConst = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.DelayThresh = 'DelayThresh' in params ? params.DelayThresh : null;
        this.SlaveConst = 'SlaveConst' in params ? params.SlaveConst : null;

    }
}

/**
 * CreateHourDBInstance请求参数结构体
 * @class
 */
class CreateHourDBInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点可用区分布，最多可填两个可用区。
         * @type {Array.<string> || null}
         */
        this.Zones = null;

        /**
         * 节点个数
         * @type {number || null}
         */
        this.NodeCount = null;

        /**
         * 内存大小，单位：GB
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 储存大小，单位：GB
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * 购买实例数量
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 项目ID，不传表示默认项目
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 统一网络ID，不传表示基础网络
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * 统一子网ID，VpcId有值时需填写
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * 数据库引擎版本，当前可选：10.0.10，10.1.9，5.7.17。
如果不填的话，默认为10.1.9，表示Mariadb 10.1.9。
         * @type {string || null}
         */
        this.DbVersionId = null;

        /**
         * 自定义实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 安全组ID，不传表示不绑定安全组
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * 是否支持IPv6
         * @type {number || null}
         */
        this.Ipv6Flag = null;

        /**
         * 标签键值对数组
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * DCN源地域
         * @type {string || null}
         */
        this.DcnRegion = null;

        /**
         * DCN源实例ID
         * @type {string || null}
         */
        this.DcnInstanceId = null;

        /**
         * 参数列表。本接口的可选值为：
character_set_server（字符集，必传），lower_case_table_names（表名大小写敏感，必传，0 - 敏感；1-不敏感），
innodb_page_size（innodb数据页，默认16K），sync_mode（同步模式：0 - 异步； 1 - 强同步；2 - 强同步可退化，默认为强同步可退化）。
         * @type {Array.<DBParamValue> || null}
         */
        this.InitParams = null;

        /**
         * 回档源实例ID
         * @type {string || null}
         */
        this.RollbackInstanceId = null;

        /**
         * 回档时间
         * @type {string || null}
         */
        this.RollbackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zones = 'Zones' in params ? params.Zones : null;
        this.NodeCount = 'NodeCount' in params ? params.NodeCount : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.DbVersionId = 'DbVersionId' in params ? params.DbVersionId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.Ipv6Flag = 'Ipv6Flag' in params ? params.Ipv6Flag : null;

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.DcnRegion = 'DcnRegion' in params ? params.DcnRegion : null;
        this.DcnInstanceId = 'DcnInstanceId' in params ? params.DcnInstanceId : null;

        if (params.InitParams) {
            this.InitParams = new Array();
            for (let z in params.InitParams) {
                let obj = new DBParamValue();
                obj.deserialize(params.InitParams[z]);
                this.InitParams.push(obj);
            }
        }
        this.RollbackInstanceId = 'RollbackInstanceId' in params ? params.RollbackInstanceId : null;
        this.RollbackTime = 'RollbackTime' in params ? params.RollbackTime : null;

    }
}

/**
 * DescribeDatabaseTable返回参数结构体
 * @class
 */
class DescribeDatabaseTableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 数据库名称。
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 表名称。
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 列信息。
         * @type {Array.<TableColumn> || null}
         */
        this.Cols = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Table = 'Table' in params ? params.Table : null;

        if (params.Cols) {
            this.Cols = new Array();
            for (let z in params.Cols) {
                let obj = new TableColumn();
                obj.deserialize(params.Cols[z]);
                this.Cols.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAccountPrivileges请求参数结构体
 * @class
 */
class DescribeAccountPrivilegesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 登录用户名。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户允许的访问 host，用户名+host唯一确定一个账号。
         * @type {string || null}
         */
        this.Host = null;

        /**
         * 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数
         * @type {string || null}
         */
        this.DbName = null;

        /**
         * 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示查询该数据库权限（即db.\*），此时忽略 Object 参数
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空
         * @type {string || null}
         */
        this.Object = null;

        /**
         * 当 Type=table 时，ColName 为 \* 表示查询表的权限，如果为具体字段名，表示查询对应字段的权限
         * @type {string || null}
         */
        this.ColName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Host = 'Host' in params ? params.Host : null;
        this.DbName = 'DbName' in params ? params.DbName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Object = 'Object' in params ? params.Object : null;
        this.ColName = 'ColName' in params ? params.ColName : null;

    }
}

/**
 * DescribeAccounts返回参数结构体
 * @class
 */
class DescribeAccountsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID，透传入参。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例用户列表。
         * @type {Array.<DBAccount> || null}
         */
        this.Users = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Users) {
            this.Users = new Array();
            for (let z in params.Users) {
                let obj = new DBAccount();
                obj.deserialize(params.Users[z]);
                this.Users.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSlowLogs返回参数结构体
 * @class
 */
class DescribeDBSlowLogsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 慢查询日志数据
         * @type {Array.<SlowLogData> || null}
         */
        this.Data = null;

        /**
         * 所有语句锁时间总和
         * @type {number || null}
         */
        this.LockTimeSum = null;

        /**
         * 所有语句查询总次数
         * @type {number || null}
         */
        this.QueryCount = null;

        /**
         * 总记录数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 所有语句查询时间总和
         * @type {number || null}
         */
        this.QueryTimeSum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
                let obj = new SlowLogData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.LockTimeSum = 'LockTimeSum' in params ? params.LockTimeSum : null;
        this.QueryCount = 'QueryCount' in params ? params.QueryCount : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.QueryTimeSum = 'QueryTimeSum' in params ? params.QueryTimeSum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据库表权限
 * @class
 */
class TablePrivilege extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据库名
         * @type {string || null}
         */
        this.Database = null;

        /**
         * 数据库表名
         * @type {string || null}
         */
        this.Table = null;

        /**
         * 权限信息
         * @type {Array.<string> || null}
         */
        this.Privileges = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Database = 'Database' in params ? params.Database : null;
        this.Table = 'Table' in params ? params.Table : null;
        this.Privileges = 'Privileges' in params ? params.Privileges : null;

    }
}

/**
 * UpgradeDBInstance返回参数结构体
 * @class
 */
class UpgradeDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 长订单号。可以据此调用 DescribeOrders
 查询订单详细信息，或在支付失败时调用用户账号相关接口进行支付。
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
 * DescribeDBInstanceSpecs请求参数结构体
 * @class
 */
class DescribeDBInstanceSpecsRequest extends  AbstractModel {
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
 * ModifyDBInstancesProject请求参数结构体
 * @class
 */
class ModifyDBInstancesProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的实例ID列表。实例 ID 形如：tdsql-ow728lmc，可以通过 DescribeDBInstances 查询实例详情获得。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 要分配的项目 ID，可以通过 DescribeProjects 查询项目列表接口获取。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * FlushBinlog请求参数结构体
 * @class
 */
class FlushBinlogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
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
 * DestroyDBInstance返回参数结构体
 * @class
 */
class DestroyDBInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，与入参InstanceId一致。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 异步任务的请求 ID，可使用此 ID [查询异步任务的执行结果](https://cloud.tencent.com/document/product/237/16177)。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDBSyncMode返回参数结构体
 * @class
 */
class ModifyDBSyncModeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 异步任务Id，可通过 DescribeFlow 查询任务状态。
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceNodeInfo返回参数结构体
 * @class
 */
class DescribeInstanceNodeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 节点信息
         * @type {Array.<NodeInfo> || null}
         */
        this.NodesInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.NodesInfo) {
            this.NodesInfo = new Array();
            for (let z in params.NodesInfo) {
                let obj = new NodeInfo();
                obj.deserialize(params.NodesInfo[z]);
                this.NodesInfo.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLogFileRetentionPeriod返回参数结构体
 * @class
 */
class ModifyLogFileRetentionPeriodResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID，形如：tdsql-ow728lmc。
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
 * ModifyInstanceVport请求参数结构体
 * @class
 */
class ModifyInstanceVportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例VPORT
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Vport = 'Vport' in params ? params.Vport : null;

    }
}

/**
 * DeleteAccount返回参数结构体
 * @class
 */
class DeleteAccountResponse extends  AbstractModel {
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

module.exports = {
    IsolateHourDBInstanceResponse: IsolateHourDBInstanceResponse,
    CreateDBInstanceRequest: CreateDBInstanceRequest,
    ZonesInfo: ZonesInfo,
    DescribeAccountPrivilegesResponse: DescribeAccountPrivilegesResponse,
    DescribeDatabasesRequest: DescribeDatabasesRequest,
    ParamDesc: ParamDesc,
    DescribeDBParametersRequest: DescribeDBParametersRequest,
    DescribeAccountsRequest: DescribeAccountsRequest,
    DescribeRenewalPriceResponse: DescribeRenewalPriceResponse,
    ModifyInstanceNetworkResponse: ModifyInstanceNetworkResponse,
    CreateDedicatedClusterDBInstanceResponse: CreateDedicatedClusterDBInstanceResponse,
    ModifyInstanceVportResponse: ModifyInstanceVportResponse,
    DestroyHourDBInstanceRequest: DestroyHourDBInstanceRequest,
    ModifyInstanceVipResponse: ModifyInstanceVipResponse,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    DescribeUpgradePriceRequest: DescribeUpgradePriceRequest,
    TerminateDedicatedDBInstanceResponse: TerminateDedicatedDBInstanceResponse,
    FlushBinlogResponse: FlushBinlogResponse,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    CancelDcnJobResponse: CancelDcnJobResponse,
    DescribeFileDownloadUrlRequest: DescribeFileDownloadUrlRequest,
    DescribeDBInstanceSpecsResponse: DescribeDBInstanceSpecsResponse,
    DestroyHourDBInstanceResponse: DestroyHourDBInstanceResponse,
    Account: Account,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    DescribeDBSlowLogsRequest: DescribeDBSlowLogsRequest,
    CreateAccountRequest: CreateAccountRequest,
    InitDBInstancesResponse: InitDBInstancesResponse,
    DescribeDBParametersResponse: DescribeDBParametersResponse,
    IsolateHourDBInstanceRequest: IsolateHourDBInstanceRequest,
    IsolateDBInstanceResponse: IsolateDBInstanceResponse,
    ModifyLogFileRetentionPeriodRequest: ModifyLogFileRetentionPeriodRequest,
    DescribeLogFileRetentionPeriodRequest: DescribeLogFileRetentionPeriodRequest,
    DescribeFlowResponse: DescribeFlowResponse,
    CloneAccountResponse: CloneAccountResponse,
    ZoneChooseInfo: ZoneChooseInfo,
    IsolateDedicatedDBInstanceRequest: IsolateDedicatedDBInstanceRequest,
    ModifyAccountDescriptionResponse: ModifyAccountDescriptionResponse,
    ParamConstraint: ParamConstraint,
    ModifyDBInstancesProjectResponse: ModifyDBInstancesProjectResponse,
    DBBackupTimeConfig: DBBackupTimeConfig,
    ModifyBackupTimeRequest: ModifyBackupTimeRequest,
    DatabaseView: DatabaseView,
    DescribeDBLogFilesRequest: DescribeDBLogFilesRequest,
    NodeInfo: NodeInfo,
    DescribeOrdersResponse: DescribeOrdersResponse,
    ModifySyncTaskAttributeResponse: ModifySyncTaskAttributeResponse,
    DcnDetailItem: DcnDetailItem,
    ResetAccountPasswordRequest: ResetAccountPasswordRequest,
    CopyAccountPrivilegesResponse: CopyAccountPrivilegesResponse,
    DCNReplicaStatus: DCNReplicaStatus,
    CloneAccountRequest: CloneAccountRequest,
    DescribeDatabaseObjectsRequest: DescribeDatabaseObjectsRequest,
    SlowLogData: SlowLogData,
    ParamModifyResult: ParamModifyResult,
    DescribeDBInstancesRequest: DescribeDBInstancesRequest,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    SwitchDBInstanceHAResponse: SwitchDBInstanceHAResponse,
    DescribeSaleInfoRequest: DescribeSaleInfoRequest,
    RenewDBInstanceRequest: RenewDBInstanceRequest,
    CreateTmpInstancesRequest: CreateTmpInstancesRequest,
    RestartDBInstancesResponse: RestartDBInstancesResponse,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    DatabaseFunction: DatabaseFunction,
    ResetAccountPasswordResponse: ResetAccountPasswordResponse,
    DescribePriceRequest: DescribePriceRequest,
    CreateDBInstanceResponse: CreateDBInstanceResponse,
    ModifyRealServerAccessStrategyRequest: ModifyRealServerAccessStrategyRequest,
    DescribeBackupTimeRequest: DescribeBackupTimeRequest,
    DescribeSaleInfoResponse: DescribeSaleInfoResponse,
    ModifyDBEncryptAttributesResponse: ModifyDBEncryptAttributesResponse,
    DescribeDBEncryptAttributesResponse: DescribeDBEncryptAttributesResponse,
    DestroyDBInstanceRequest: DestroyDBInstanceRequest,
    DatabaseTable: DatabaseTable,
    DescribeDBEncryptAttributesRequest: DescribeDBEncryptAttributesRequest,
    Deal: Deal,
    GrantAccountPrivilegesRequest: GrantAccountPrivilegesRequest,
    CreateDedicatedClusterDBInstanceRequest: CreateDedicatedClusterDBInstanceRequest,
    SwitchDBInstanceHARequest: SwitchDBInstanceHARequest,
    DBParamValue: DBParamValue,
    SpecConfigInfo: SpecConfigInfo,
    ModifyDBParametersRequest: ModifyDBParametersRequest,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeDcnDetailRequest: DescribeDcnDetailRequest,
    DescribeFileDownloadUrlResponse: DescribeFileDownloadUrlResponse,
    ModifyDBParametersResponse: ModifyDBParametersResponse,
    CopyAccountPrivilegesRequest: CopyAccountPrivilegesRequest,
    SecurityGroup: SecurityGroup,
    DescribeDatabaseTableRequest: DescribeDatabaseTableRequest,
    OpenDBExtranetAccessResponse: OpenDBExtranetAccessResponse,
    KillSessionRequest: KillSessionRequest,
    TerminateDedicatedDBInstanceRequest: TerminateDedicatedDBInstanceRequest,
    DescribeDatabaseObjectsResponse: DescribeDatabaseObjectsResponse,
    ModifyDBInstanceNameRequest: ModifyDBInstanceNameRequest,
    DeleteAccountRequest: DeleteAccountRequest,
    TableColumn: TableColumn,
    CreateTmpInstancesResponse: CreateTmpInstancesResponse,
    UpgradeDBInstanceRequest: UpgradeDBInstanceRequest,
    SecurityGroupBound: SecurityGroupBound,
    ColumnPrivilege: ColumnPrivilege,
    ModifySyncTaskAttributeRequest: ModifySyncTaskAttributeRequest,
    DescribeUpgradePriceResponse: DescribeUpgradePriceResponse,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    DBInstance: DBInstance,
    DescribePriceResponse: DescribePriceResponse,
    InitDBInstancesRequest: InitDBInstancesRequest,
    ModifyAccountPrivilegesResponse: ModifyAccountPrivilegesResponse,
    ModifyBackupTimeResponse: ModifyBackupTimeResponse,
    Database: Database,
    GrantAccountPrivilegesResponse: GrantAccountPrivilegesResponse,
    CancelDcnJobRequest: CancelDcnJobRequest,
    ModifyInstanceVipRequest: ModifyInstanceVipRequest,
    OpenDBExtranetAccessRequest: OpenDBExtranetAccessRequest,
    DatabasePrivilege: DatabasePrivilege,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    ModifyDBInstanceNameResponse: ModifyDBInstanceNameResponse,
    CloseDBExtranetAccessResponse: CloseDBExtranetAccessResponse,
    FunctionPrivilege: FunctionPrivilege,
    ModifyAccountDescriptionRequest: ModifyAccountDescriptionRequest,
    KillSessionResponse: KillSessionResponse,
    DescribeBackupTimeResponse: DescribeBackupTimeResponse,
    ActivateHourDBInstanceRequest: ActivateHourDBInstanceRequest,
    RenewDBInstanceResponse: RenewDBInstanceResponse,
    DescribeDatabasesResponse: DescribeDatabasesResponse,
    ViewPrivileges: ViewPrivileges,
    DescribeOrdersRequest: DescribeOrdersRequest,
    DescribeDBLogFilesResponse: DescribeDBLogFilesResponse,
    CloseDBExtranetAccessRequest: CloseDBExtranetAccessRequest,
    ResourceTag: ResourceTag,
    DescribeDcnDetailResponse: DescribeDcnDetailResponse,
    IsolateDBInstanceRequest: IsolateDBInstanceRequest,
    InstanceSpec: InstanceSpec,
    DescribeFlowRequest: DescribeFlowRequest,
    DCNReplicaConfig: DCNReplicaConfig,
    ModifyAccountPrivilegesRequest: ModifyAccountPrivilegesRequest,
    DatabaseProcedure: DatabaseProcedure,
    ModifyDBSyncModeRequest: ModifyDBSyncModeRequest,
    ActivateHourDBInstanceResponse: ActivateHourDBInstanceResponse,
    DescribeInstanceNodeInfoRequest: DescribeInstanceNodeInfoRequest,
    CreateHourDBInstanceResponse: CreateHourDBInstanceResponse,
    ModifyDBEncryptAttributesRequest: ModifyDBEncryptAttributesRequest,
    CreateAccountResponse: CreateAccountResponse,
    IsolateDedicatedDBInstanceResponse: IsolateDedicatedDBInstanceResponse,
    DescribeLogFileRetentionPeriodResponse: DescribeLogFileRetentionPeriodResponse,
    RegionInfo: RegionInfo,
    ModifyInstanceNetworkRequest: ModifyInstanceNetworkRequest,
    DescribeDBInstancesResponse: DescribeDBInstancesResponse,
    ConstraintRange: ConstraintRange,
    DescribeRenewalPriceRequest: DescribeRenewalPriceRequest,
    LogFileInfo: LogFileInfo,
    ModifyRealServerAccessStrategyResponse: ModifyRealServerAccessStrategyResponse,
    RestartDBInstancesRequest: RestartDBInstancesRequest,
    ProcedurePrivilege: ProcedurePrivilege,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    DBAccount: DBAccount,
    CreateHourDBInstanceRequest: CreateHourDBInstanceRequest,
    DescribeDatabaseTableResponse: DescribeDatabaseTableResponse,
    DescribeAccountPrivilegesRequest: DescribeAccountPrivilegesRequest,
    DescribeAccountsResponse: DescribeAccountsResponse,
    DescribeDBSlowLogsResponse: DescribeDBSlowLogsResponse,
    TablePrivilege: TablePrivilege,
    UpgradeDBInstanceResponse: UpgradeDBInstanceResponse,
    DescribeDBInstanceSpecsRequest: DescribeDBInstanceSpecsRequest,
    ModifyDBInstancesProjectRequest: ModifyDBInstancesProjectRequest,
    FlushBinlogRequest: FlushBinlogRequest,
    DestroyDBInstanceResponse: DestroyDBInstanceResponse,
    ModifyDBSyncModeResponse: ModifyDBSyncModeResponse,
    DescribeInstanceNodeInfoResponse: DescribeInstanceNodeInfoResponse,
    ModifyLogFileRetentionPeriodResponse: ModifyLogFileRetentionPeriodResponse,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    ModifyInstanceVportRequest: ModifyInstanceVportRequest,
    DeleteAccountResponse: DeleteAccountResponse,

}

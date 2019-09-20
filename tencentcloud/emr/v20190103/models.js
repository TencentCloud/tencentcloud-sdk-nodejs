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
 * EMR产品配置
 * @class
 */
class EmrProductConfigOutter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 软件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SoftInfo = null;

        /**
         * Master节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MasterNodeSize = null;

        /**
         * Core节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CoreNodeSize = null;

        /**
         * Task节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskNodeSize = null;

        /**
         * Common节点个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ComNodeSize = null;

        /**
         * Master节点资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutterResource || null}
         */
        this.MasterResource = null;

        /**
         * Core节点资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutterResource || null}
         */
        this.CoreResource = null;

        /**
         * Task节点资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutterResource || null}
         */
        this.TaskResource = null;

        /**
         * Common节点资源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutterResource || null}
         */
        this.ComResource = null;

        /**
         * 是否使用COS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.OnCos = null;

        /**
         * 收费类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChargeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SoftInfo = 'SoftInfo' in params ? params.SoftInfo : null;
        this.MasterNodeSize = 'MasterNodeSize' in params ? params.MasterNodeSize : null;
        this.CoreNodeSize = 'CoreNodeSize' in params ? params.CoreNodeSize : null;
        this.TaskNodeSize = 'TaskNodeSize' in params ? params.TaskNodeSize : null;
        this.ComNodeSize = 'ComNodeSize' in params ? params.ComNodeSize : null;

        if (params.MasterResource) {
            let obj = new OutterResource();
            obj.deserialize(params.MasterResource)
            this.MasterResource = obj;
        }

        if (params.CoreResource) {
            let obj = new OutterResource();
            obj.deserialize(params.CoreResource)
            this.CoreResource = obj;
        }

        if (params.TaskResource) {
            let obj = new OutterResource();
            obj.deserialize(params.TaskResource)
            this.TaskResource = obj;
        }

        if (params.ComResource) {
            let obj = new OutterResource();
            obj.deserialize(params.ComResource)
            this.ComResource = obj;
        }
        this.OnCos = 'OnCos' in params ? params.OnCos : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

    }
}

/**
 * 登录设置
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * Password
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Public Key
         * @type {string || null}
         */
        this.PublicKeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Password = 'Password' in params ? params.Password : null;
        this.PublicKeyId = 'PublicKeyId' in params ? params.PublicKeyId : null;

    }
}

/**
 * VPC 参数
 * @class
 */
class VPCSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * VPC ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
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
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;

    }
}

/**
 * 询价资源
 * @class
 */
class PriceResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要的规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * 内存大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * 核心数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 云盘列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MultiDisk> || null}
         */
        this.MultiDisks = null;

        /**
         * 磁盘数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskCnt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

        if (params.MultiDisks) {
            this.MultiDisks = new Array();
            for (let z in params.MultiDisks) {
                let obj = new MultiDisk();
                obj.deserialize(params.MultiDisks[z]);
                this.MultiDisks.push(obj);
            }
        }
        this.DiskCnt = 'DiskCnt' in params ? params.DiskCnt : null;

    }
}

/**
 * ScaleOutInstance返回参数结构体
 * @class
 */
class ScaleOutInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.DealNames = null;

        /**
         * token
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.DealNames = 'DealNames' in params ? params.DealNames : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateInstance请求参数结构体
 * @class
 */
class InquiryPriceCreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间单位
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 时间长度
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 询价资源描述
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * 货币种类
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 计费类型
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 是否支持HA， 1 支持，0 不支持
         * @type {number || null}
         */
        this.SupportHA = null;

        /**
         * 软件列表
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * 位置信息
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * VPC信息
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

        if (params.ResourceSpec) {
            let obj = new NewResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.Software = 'Software' in params ? params.Software : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }

    }
}

/**
 * 资源详情
 * @class
 */
class Resource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 节点规格描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 存储类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * 磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 内存容量,单位为M
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * CPU核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 数据盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 系统盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * 云盘列表，当数据盘为一块云盘时，直接使用DiskType和DiskSize参数，超出部分使用MultiDisks
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MultiDisk> || null}
         */
        this.MultiDisks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;

        if (params.MultiDisks) {
            this.MultiDisks = new Array();
            for (let z in params.MultiDisks) {
                let obj = new MultiDisk();
                obj.deserialize(params.MultiDisks[z]);
                this.MultiDisks.push(obj);
            }
        }

    }
}

/**
 * CreateInstance返回参数结构体
 * @class
 */
class CreateInstanceResponse extends  AbstractModel {
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
 * InquiryPriceRenewInstance返回参数结构体
 * @class
 */
class InquiryPriceRenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刊例价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * 时间单位，"s","m"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 时间数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateTasks请求参数结构体
 * @class
 */
class TerminateTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 销毁节点所属实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 销毁节点ID
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

    }
}

/**
 * InquiryPriceCreateInstance返回参数结构体
 * @class
 */
class InquiryPriceCreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刊例价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * 时间单位，"s","m"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 时间数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 预执行脚本配置
 * @class
 */
class PreExecuteFileSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 脚本在COS上路径，已废弃
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 执行脚本参数
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * COS的Bucket名称，已废弃
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * COS的Region名称，已废弃
         * @type {string || null}
         */
        this.Region = null;

        /**
         * COS的Domain数据，已废弃
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 执行顺序
         * @type {number || null}
         */
        this.RunOrder = null;

        /**
         * resourceAfter 或 clusterAfter
         * @type {string || null}
         */
        this.WhenRun = null;

        /**
         * 脚本文件名，已废弃
         * @type {string || null}
         */
        this.CosFileName = null;

        /**
         * 脚本的cos地址
         * @type {string || null}
         */
        this.CosFileURI = null;

        /**
         * cos的SecretId
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * Cos的SecretKey
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * cos的appid，已废弃
         * @type {string || null}
         */
        this.AppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RunOrder = 'RunOrder' in params ? params.RunOrder : null;
        this.WhenRun = 'WhenRun' in params ? params.WhenRun : null;
        this.CosFileName = 'CosFileName' in params ? params.CosFileName : null;
        this.CosFileURI = 'CosFileURI' in params ? params.CosFileURI : null;
        this.CosSecretId = 'CosSecretId' in params ? params.CosSecretId : null;
        this.CosSecretKey = 'CosSecretKey' in params ? params.CosSecretKey : null;
        this.AppId = 'AppId' in params ? params.AppId : null;

    }
}

/**
 * CreateInstance请求参数结构体
 * @class
 */
class CreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {number || null}
         */
        this.ProductId = null;

        /**
         * VPC设置参数
         * @type {VPCSettings || null}
         */
        this.VPCSettings = null;

        /**
         * 软件列表
         * @type {Array.<string> || null}
         */
        this.Software = null;

        /**
         * 资源描述
         * @type {NewResourceSpec || null}
         */
        this.ResourceSpec = null;

        /**
         * 支持HA
         * @type {number || null}
         */
        this.SupportHA = null;

        /**
         * 实例名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 计费类型
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 集群位置信息
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 时间长度
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 时间单位
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 登录配置
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * COS设置参数
         * @type {COSSettings || null}
         */
        this.COSSettings = null;

        /**
         * 安全组ID
         * @type {string || null}
         */
        this.SgId = null;

        /**
         * 预执行脚本设置
         * @type {Array.<PreExecuteFileSettings> || null}
         */
        this.PreExecutedFileSettings = null;

        /**
         * 自动续费
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 客户端Token
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 是否需要外网Ip。支持填NEED_MASTER_WAN，不支持使用NOT_NEED_MASTER_WAN，默认使用NEED_MASTER_WAN
         * @type {string || null}
         */
        this.NeedMasterWan = null;

        /**
         * 是否需要开启外网远程登录，即22号端口，在SgId不为空时，该选项无效
         * @type {number || null}
         */
        this.RemoteLoginAtCreate = null;

        /**
         * 是否开启安全集群，0表示不开启，非0表示开启
         * @type {number || null}
         */
        this.CheckSecurity = null;

        /**
         * 访问外部文件系统
         * @type {string || null}
         */
        this.ExtendFsField = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

        if (params.VPCSettings) {
            let obj = new VPCSettings();
            obj.deserialize(params.VPCSettings)
            this.VPCSettings = obj;
        }
        this.Software = 'Software' in params ? params.Software : null;

        if (params.ResourceSpec) {
            let obj = new NewResourceSpec();
            obj.deserialize(params.ResourceSpec)
            this.ResourceSpec = obj;
        }
        this.SupportHA = 'SupportHA' in params ? params.SupportHA : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }

        if (params.COSSettings) {
            let obj = new COSSettings();
            obj.deserialize(params.COSSettings)
            this.COSSettings = obj;
        }
        this.SgId = 'SgId' in params ? params.SgId : null;

        if (params.PreExecutedFileSettings) {
            this.PreExecutedFileSettings = new Array();
            for (let z in params.PreExecutedFileSettings) {
                let obj = new PreExecuteFileSettings();
                obj.deserialize(params.PreExecutedFileSettings[z]);
                this.PreExecutedFileSettings.push(obj);
            }
        }
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.NeedMasterWan = 'NeedMasterWan' in params ? params.NeedMasterWan : null;
        this.RemoteLoginAtCreate = 'RemoteLoginAtCreate' in params ? params.RemoteLoginAtCreate : null;
        this.CheckSecurity = 'CheckSecurity' in params ? params.CheckSecurity : null;
        this.ExtendFsField = 'ExtendFsField' in params ? params.ExtendFsField : null;

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
         * 实例数量
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 集群实例信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClusterInstancesInfo> || null}
         */
        this.ClusterList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;

        if (params.ClusterList) {
            this.ClusterList = new Array();
            for (let z in params.ClusterList) {
                let obj = new ClusterInstancesInfo();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceScaleOutInstance请求参数结构体
 * @class
 */
class InquiryPriceScaleOutInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间单位。s:按量用例单位。m:包年包月用例单位
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 时间长度。按量用例长度为3600。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * Zone ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 计费类型
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 扩容Core节点个数
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * 扩容Task节点个数
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * 货币种类
         * @type {string || null}
         */
        this.Currency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.Currency = 'Currency' in params ? params.Currency : null;

    }
}

/**
 * 描述集实例位置信息
 * @class
 */
class Placement extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例所属项目ID。该参数可以通过调用 DescribeProject 的返回值中的 projectId 字段来获取。不填为默认项目。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 实例所属的可用区，例如ap-guangzhou-1。该参数也可以通过调用 DescribeZones 的返回值中的Zone字段来获取。
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Zone = 'Zone' in params ? params.Zone : null;

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
         * 集群展示策略，该字段取值根据所选页面不同输入不同，集群列表页：clusterList，集群监控：monitorManage，云硬件管理：cloudHardwareManage，组件管理页：componentManage
         * @type {string || null}
         */
        this.DisplayStrategy = null;

        /**
         * 查询列表,  如果不填写，返回该AppId下所有实例列表
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 查询偏移量，默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询结果限制，默认值10
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 项目列表，默认值-1
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 排序字段，当前支持以下排序字段：clusterId、addTime、status
         * @type {string || null}
         */
        this.OrderField = null;

        /**
         * 排序方法，0降序，1升序
         * @type {number || null}
         */
        this.Asc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisplayStrategy = 'DisplayStrategy' in params ? params.DisplayStrategy : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.OrderField = 'OrderField' in params ? params.OrderField : null;
        this.Asc = 'Asc' in params ? params.Asc : null;

    }
}

/**
 * InquiryPriceUpdateInstance请求参数结构体
 * @class
 */
class InquiryPriceUpdateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间单位。s:按量用例单位。m:包年包月用例单位
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 时间长度。按量用例长度为3600。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 变配参数
         * @type {UpdateInstanceSettings || null}
         */
        this.UpdateSpec = null;

        /**
         * 计费类型
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 位置信息
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 货币种类
         * @type {string || null}
         */
        this.Currency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;

        if (params.UpdateSpec) {
            let obj = new UpdateInstanceSettings();
            obj.deserialize(params.UpdateSpec)
            this.UpdateSpec = obj;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;

    }
}

/**
 * COS 相关配置
 * @class
 */
class COSSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * COS SecretId
         * @type {string || null}
         */
        this.CosSecretId = null;

        /**
         * COS SecrectKey
         * @type {string || null}
         */
        this.CosSecretKey = null;

        /**
         * 日志存储在COS上的路径
         * @type {string || null}
         */
        this.LogOnCosPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosSecretId = 'CosSecretId' in params ? params.CosSecretId : null;
        this.CosSecretKey = 'CosSecretKey' in params ? params.CosSecretKey : null;
        this.LogOnCosPath = 'LogOnCosPath' in params ? params.LogOnCosPath : null;

    }
}

/**
 * 集群实例信息
 * @class
 */
class ClusterInstancesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 标题
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ftitle = null;

        /**
         * 集群名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * 地区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 用户APPID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 用户UIN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uin = null;

        /**
         * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * 集群VPCID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 添加时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 已经运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RunTime = null;

        /**
         * 集群产品配置信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EmrProductConfigOutter || null}
         */
        this.Config = null;

        /**
         * 主节点外网IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MasterIp = null;

        /**
         * EMR版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EmrVersion = null;

        /**
         * 收费类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ChargeType = null;

        /**
         * 交易版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TradeVersion = null;

        /**
         * 资源订单ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResourceOrderId = null;

        /**
         * 是否计费集群
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.IsTradeCluster = null;

        /**
         * 集群错误状态告警信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AlarmInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.Ftitle = 'Ftitle' in params ? params.Ftitle : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Uin = 'Uin' in params ? params.Uin : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.RunTime = 'RunTime' in params ? params.RunTime : null;

        if (params.Config) {
            let obj = new EmrProductConfigOutter();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.MasterIp = 'MasterIp' in params ? params.MasterIp : null;
        this.EmrVersion = 'EmrVersion' in params ? params.EmrVersion : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;
        this.TradeVersion = 'TradeVersion' in params ? params.TradeVersion : null;
        this.ResourceOrderId = 'ResourceOrderId' in params ? params.ResourceOrderId : null;
        this.IsTradeCluster = 'IsTradeCluster' in params ? params.IsTradeCluster : null;
        this.AlarmInfo = 'AlarmInfo' in params ? params.AlarmInfo : null;

    }
}

/**
 * 多云盘参数
 * @class
 */
class MultiDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云盘类型("CLOUD_PREMIUM","CLOUD_SSD","CLOUD_BASIC")的一种
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 云盘大小
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 该类型云盘个数
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
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * InquiryPriceScaleOutInstance返回参数结构体
 * @class
 */
class InquiryPriceScaleOutInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刊例价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiscountCost = null;

        /**
         * 单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 询价配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PriceResource || null}
         */
        this.PriceSpec = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

        if (params.PriceSpec) {
            let obj = new PriceResource();
            obj.deserialize(params.PriceSpec)
            this.PriceSpec = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源详情
 * @class
 */
class OutterResource extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 规格名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 硬盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * 盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootSize = null;

        /**
         * 内存大小
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * CPU个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Cpu = null;

        /**
         * 硬盘大小
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.RootSize = 'RootSize' in params ? params.RootSize : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.Cpu = 'Cpu' in params ? params.Cpu : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;

    }
}

/**
 * 变配资源规格
 * @class
 */
class UpdateInstanceSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内存容量，单位为G
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CPU核数
         * @type {number || null}
         */
        this.CPUCores = null;

        /**
         * 机器资源ID（EMR测资源标识）
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
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.CPUCores = 'CPUCores' in params ? params.CPUCores : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * TerminateTasks返回参数结构体
 * @class
 */
class TerminateTasksResponse extends  AbstractModel {
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
 * TerminateInstance请求参数结构体
 * @class
 */
class TerminateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 被销毁的实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 销毁节点ID
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

    }
}

/**
 * TerminateInstance返回参数结构体
 * @class
 */
class TerminateInstanceResponse extends  AbstractModel {
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
 * InquiryPriceUpdateInstance返回参数结构体
 * @class
 */
class InquiryPriceUpdateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 刊例价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣价格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DiscountCost = null;

        /**
         * 时间单位，"s","m"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 时间数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalCost = 'OriginalCost' in params ? params.OriginalCost : null;
        this.DiscountCost = 'DiscountCost' in params ? params.DiscountCost : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 资源描述
 * @class
 */
class NewResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述Master节点资源
         * @type {Resource || null}
         */
        this.MasterResourceSpec = null;

        /**
         * 描述Core节点资源
         * @type {Resource || null}
         */
        this.CoreResourceSpec = null;

        /**
         * 描述Task节点资源
         * @type {Resource || null}
         */
        this.TaskResourceSpec = null;

        /**
         * Master节点数量
         * @type {number || null}
         */
        this.MasterCount = null;

        /**
         * Core节点数量
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * Task节点数量
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * 描述Common节点资源
         * @type {Resource || null}
         */
        this.CommonResourceSpec = null;

        /**
         * Common节点数量
         * @type {number || null}
         */
        this.CommonCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.MasterResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.MasterResourceSpec)
            this.MasterResourceSpec = obj;
        }

        if (params.CoreResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.CoreResourceSpec)
            this.CoreResourceSpec = obj;
        }

        if (params.TaskResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.TaskResourceSpec)
            this.TaskResourceSpec = obj;
        }
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;

        if (params.CommonResourceSpec) {
            let obj = new Resource();
            obj.deserialize(params.CommonResourceSpec)
            this.CommonResourceSpec = obj;
        }
        this.CommonCount = 'CommonCount' in params ? params.CommonCount : null;

    }
}

/**
 * InquiryPriceRenewInstance请求参数结构体
 * @class
 */
class InquiryPriceRenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间长度
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 资源ID列表
         * @type {Array.<string> || null}
         */
        this.ResourceIds = null;

        /**
         * 位置信息
         * @type {Placement || null}
         */
        this.Placement = null;

        /**
         * 计费模式，0表示按量，1表示包年报月，此处只能为包年包月
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * 时间单位，默认为m
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 货币种类
         * @type {string || null}
         */
        this.Currency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.ResourceIds = 'ResourceIds' in params ? params.ResourceIds : null;

        if (params.Placement) {
            let obj = new Placement();
            obj.deserialize(params.Placement)
            this.Placement = obj;
        }
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.Currency = 'Currency' in params ? params.Currency : null;

    }
}

/**
 * ScaleOutInstance请求参数结构体
 * @class
 */
class ScaleOutInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间单位
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 时间长度
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 扩容实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 付费类型
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Token
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 预执行脚本设置
         * @type {Array.<PreExecuteFileSettings> || null}
         */
        this.PreExecutedFileSettings = null;

        /**
         * 扩容Task节点数量
         * @type {number || null}
         */
        this.TaskCount = null;

        /**
         * 扩容Core节点数量
         * @type {number || null}
         */
        this.CoreCount = null;

        /**
         * 扩容时不需要安装的进程
         * @type {Array.<number> || null}
         */
        this.UnNecessaryNodeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.PreExecutedFileSettings) {
            this.PreExecutedFileSettings = new Array();
            for (let z in params.PreExecutedFileSettings) {
                let obj = new PreExecuteFileSettings();
                obj.deserialize(params.PreExecutedFileSettings[z]);
                this.PreExecutedFileSettings.push(obj);
            }
        }
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.UnNecessaryNodeList = 'UnNecessaryNodeList' in params ? params.UnNecessaryNodeList : null;

    }
}

module.exports = {
    EmrProductConfigOutter: EmrProductConfigOutter,
    LoginSettings: LoginSettings,
    VPCSettings: VPCSettings,
    PriceResource: PriceResource,
    ScaleOutInstanceResponse: ScaleOutInstanceResponse,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    Resource: Resource,
    CreateInstanceResponse: CreateInstanceResponse,
    InquiryPriceRenewInstanceResponse: InquiryPriceRenewInstanceResponse,
    TerminateTasksRequest: TerminateTasksRequest,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    PreExecuteFileSettings: PreExecuteFileSettings,
    CreateInstanceRequest: CreateInstanceRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    InquiryPriceScaleOutInstanceRequest: InquiryPriceScaleOutInstanceRequest,
    Placement: Placement,
    DescribeInstancesRequest: DescribeInstancesRequest,
    InquiryPriceUpdateInstanceRequest: InquiryPriceUpdateInstanceRequest,
    COSSettings: COSSettings,
    ClusterInstancesInfo: ClusterInstancesInfo,
    MultiDisk: MultiDisk,
    InquiryPriceScaleOutInstanceResponse: InquiryPriceScaleOutInstanceResponse,
    OutterResource: OutterResource,
    UpdateInstanceSettings: UpdateInstanceSettings,
    TerminateTasksResponse: TerminateTasksResponse,
    TerminateInstanceRequest: TerminateInstanceRequest,
    TerminateInstanceResponse: TerminateInstanceResponse,
    InquiryPriceUpdateInstanceResponse: InquiryPriceUpdateInstanceResponse,
    NewResourceSpec: NewResourceSpec,
    InquiryPriceRenewInstanceRequest: InquiryPriceRenewInstanceRequest,
    ScaleOutInstanceRequest: ScaleOutInstanceRequest,

}

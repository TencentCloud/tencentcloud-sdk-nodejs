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
 * 创建接口返回值
 * @class
 */
class CreateInstanceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端TOKEN
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 集群名称
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 订单列表
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
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

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
 * TerminateTasks返回参数结构体
 * @class
 */
class TerminateTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 退单结果
         * @type {TerminateResult || null}
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

        if (params.Result) {
            let obj = new TerminateResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 扩容结果
         * @type {ScaleOutInstanceResult || null}
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

        if (params.Result) {
            let obj = new ScaleOutInstanceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
         * @type {ResourceSpec || null}
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
            let obj = new ResourceSpec();
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
 * 实例信息
 * @class
 */
class ClusterInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * clusterId
         * @type {string || null}
         */
        this.ClusterId = null;

        /**
         * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 集群名字
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClusterName = null;

        /**
         * 集群地域
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * 用户APPID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Addtime = null;

        /**
         * 运行时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Runtime = null;

        /**
         * 集群配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EMRProductConfigSettings || null}
         */
        this.Config = null;

        /**
         * 集群IP
         * @type {string || null}
         */
        this.MasterIp = null;

        /**
         * 集群版本
         * @type {string || null}
         */
        this.EmrVersion = null;

        /**
         * 集群计费类型
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
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.ClusterName = 'ClusterName' in params ? params.ClusterName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Addtime = 'Addtime' in params ? params.Addtime : null;
        this.Runtime = 'Runtime' in params ? params.Runtime : null;

        if (params.Config) {
            let obj = new EMRProductConfigSettings();
            obj.deserialize(params.Config)
            this.Config = obj;
        }
        this.MasterIp = 'MasterIp' in params ? params.MasterIp : null;
        this.EmrVersion = 'EmrVersion' in params ? params.EmrVersion : null;
        this.ChargeType = 'ChargeType' in params ? params.ChargeType : null;

    }
}

/**
 * 查询结果
 * @class
 */
class ClusterInfoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 集群信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClusterInstanceInfo> || null}
         */
        this.ClusterList = null;

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
                let obj = new ClusterInstanceInfo();
                obj.deserialize(params.ClusterList[z]);
                this.ClusterList.push(obj);
            }
        }

    }
}

/**
 * 资源描述
 * @class
 */
class ResourceSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * Common节点数量
         * @type {number || null}
         */
        this.CommonCount = null;

        /**
         * 描述Master节点资源
         * @type {NodeSpec || null}
         */
        this.MasterResourceSpec = null;

        /**
         * 描述Core节点资源
         * @type {NodeSpec || null}
         */
        this.CoreResourceSpec = null;

        /**
         * 描述Task节点资源
         * @type {NodeSpec || null}
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
         * @type {NodeSpec || null}
         */
        this.CommonResourceSpec = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CommonCount = 'CommonCount' in params ? params.CommonCount : null;

        if (params.MasterResourceSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.MasterResourceSpec)
            this.MasterResourceSpec = obj;
        }

        if (params.CoreResourceSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.CoreResourceSpec)
            this.CoreResourceSpec = obj;
        }

        if (params.TaskResourceSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.TaskResourceSpec)
            this.TaskResourceSpec = obj;
        }
        this.MasterCount = 'MasterCount' in params ? params.MasterCount : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;

        if (params.CommonResourceSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.CommonResourceSpec)
            this.CommonResourceSpec = obj;
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
         * 创建实例结果信息
         * @type {CreateInstanceResult || null}
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

        if (params.Result) {
            let obj = new CreateInstanceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 扩容实例结果描述
 * @class
 */
class ScaleOutInstanceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户端调用时传入的TOKEN
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 扩容实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 订单名称
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
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DealNames = 'DealNames' in params ? params.DealNames : null;

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
         * 询价结果
         * @type {InquiryPriceResult || null}
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

        if (params.Result) {
            let obj = new InquiryPriceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
         * 脚本在COS上路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 执行脚本参数
         * @type {Array.<string> || null}
         */
        this.Args = null;

        /**
         * COS的Bucket名称
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * COS的Region名称
         * @type {string || null}
         */
        this.Region = null;

        /**
         * COS的Domain数据
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
        this.Path = 'Path' in params ? params.Path : null;
        this.Args = 'Args' in params ? params.Args : null;
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Domain = 'Domain' in params ? params.Domain : null;

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
         * @type {ResourceSpec || null}
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
         * 客户端Token
         * @type {string || null}
         */
        this.ClientToken = null;

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
         * @type {PreExecuteFileSettings || null}
         */
        this.PreExecutedFileSettings = null;

        /**
         * 自动续费
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * 是否需要外网Ip。支持填NEED_MASTER_WAN，不支持使用NOT_NEED_MASTER_WAN，默认使用NEED_MASTER_WAN
         * @type {string || null}
         */
        this.NeedMasterWan = null;

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
            let obj = new ResourceSpec();
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
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;

        if (params.COSSettings) {
            let obj = new COSSettings();
            obj.deserialize(params.COSSettings)
            this.COSSettings = obj;
        }
        this.SgId = 'SgId' in params ? params.SgId : null;

        if (params.PreExecutedFileSettings) {
            let obj = new PreExecuteFileSettings();
            obj.deserialize(params.PreExecutedFileSettings)
            this.PreExecutedFileSettings = obj;
        }
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.NeedMasterWan = 'NeedMasterWan' in params ? params.NeedMasterWan : null;

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
         * @type {ClusterInfoResult || null}
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

        if (params.Result) {
            let obj = new ClusterInfoResult();
            obj.deserialize(params.Result)
            this.Result = obj;
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
         * 实例所属的可用区ID。该参数也可以通过调用 DescribeZones 的返回值中的Zone字段来获取。
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
         * 日志存储在COS上的路径
         * @type {string || null}
         */
        this.LogOnCosPath = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogOnCosPath = 'LogOnCosPath' in params ? params.LogOnCosPath : null;
        this.CosSecretId = 'CosSecretId' in params ? params.CosSecretId : null;
        this.CosSecretKey = 'CosSecretKey' in params ? params.CosSecretKey : null;

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
         * Token
         * @type {string || null}
         */
        this.ClientToken = null;

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
         * 预执行脚本设置
         * @type {PreExecuteFileSettings || null}
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;

        if (params.PreExecutedFileSettings) {
            let obj = new PreExecuteFileSettings();
            obj.deserialize(params.PreExecutedFileSettings)
            this.PreExecutedFileSettings = obj;
        }
        this.TaskCount = 'TaskCount' in params ? params.TaskCount : null;
        this.CoreCount = 'CoreCount' in params ? params.CoreCount : null;

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
         * 扩容价格
         * @type {InquiryPriceResult || null}
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

        if (params.Result) {
            let obj = new InquiryPriceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * 集群的config信息
 * @class
 */
class EMRProductConfigSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 集群软件信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.SoftInfo = null;

        /**
         * master节点数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MasterNodeSize = null;

        /**
         * core节点数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CoreNodeSize = null;

        /**
         * task节点数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskNodeSize = null;

        /**
         * common节点数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ComNodeSize = null;

        /**
         * master规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NodeSpec || null}
         */
        this.MasterResourceSpec = null;

        /**
         * core规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NodeSpec || null}
         */
        this.CoreResourceSpec = null;

        /**
         * task规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NodeSpec || null}
         */
        this.TaskResourceSpec = null;

        /**
         * common规格
注意：此字段可能返回 null，表示取不到有效值。
         * @type {NodeSpec || null}
         */
        this.CommonResourceSpec = null;

        /**
         * 是否使用COS
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Oncos = null;

        /**
         * COS配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {COSSettings || null}
         */
        this.COSSettings = null;

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

        if (params.MasterResourceSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.MasterResourceSpec)
            this.MasterResourceSpec = obj;
        }

        if (params.CoreResourceSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.CoreResourceSpec)
            this.CoreResourceSpec = obj;
        }

        if (params.TaskResourceSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.TaskResourceSpec)
            this.TaskResourceSpec = obj;
        }

        if (params.CommonResourceSpec) {
            let obj = new NodeSpec();
            obj.deserialize(params.CommonResourceSpec)
            this.CommonResourceSpec = obj;
        }
        this.Oncos = 'Oncos' in params ? params.Oncos : null;

        if (params.COSSettings) {
            let obj = new COSSettings();
            obj.deserialize(params.COSSettings)
            this.COSSettings = obj;
        }

    }
}

/**
 * 节点描述
 * @class
 */
class NodeSpec extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内存容量,单位为M
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * CPU核数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CPUCores = null;

        /**
         * 数据盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Volume = null;

        /**
         * 磁盘类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 节点规格描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Spec = null;

        /**
         * 系统盘容量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RootDiskVolume = null;

        /**
         * 存储类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StorageType = null;

        /**
         * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpecName = null;

        /**
         * 多云盘参数
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
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.CPUCores = 'CPUCores' in params ? params.CPUCores : null;
        this.Volume = 'Volume' in params ? params.Volume : null;
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.Spec = 'Spec' in params ? params.Spec : null;
        this.RootDiskVolume = 'RootDiskVolume' in params ? params.RootDiskVolume : null;
        this.StorageType = 'StorageType' in params ? params.StorageType : null;
        this.SpecName = 'SpecName' in params ? params.SpecName : null;

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
 * TerminateInstance返回参数结构体
 * @class
 */
class TerminateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 退单描述
         * @type {TerminateResult || null}
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

        if (params.Result) {
            let obj = new TerminateResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用于询价输出
 * @class
 */
class InquiryPriceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原始价格
         * @type {number || null}
         */
        this.OriginalCost = null;

        /**
         * 折扣后价格
         * @type {number || null}
         */
        this.DiscountCost = null;

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

    }
}

/**
 * 退单请求描述描述
 * @class
 */
class TerminateResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 退单集群ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 资源资源ID
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

    }
}

module.exports = {
    CreateInstanceResult: CreateInstanceResult,
    LoginSettings: LoginSettings,
    VPCSettings: VPCSettings,
    TerminateTasksResponse: TerminateTasksResponse,
    ScaleOutInstanceResponse: ScaleOutInstanceResponse,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    ClusterInstanceInfo: ClusterInstanceInfo,
    ClusterInfoResult: ClusterInfoResult,
    ResourceSpec: ResourceSpec,
    CreateInstanceResponse: CreateInstanceResponse,
    ScaleOutInstanceResult: ScaleOutInstanceResult,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    PreExecuteFileSettings: PreExecuteFileSettings,
    CreateInstanceRequest: CreateInstanceRequest,
    DescribeInstancesResponse: DescribeInstancesResponse,
    InquiryPriceScaleOutInstanceRequest: InquiryPriceScaleOutInstanceRequest,
    Placement: Placement,
    DescribeInstancesRequest: DescribeInstancesRequest,
    COSSettings: COSSettings,
    ScaleOutInstanceRequest: ScaleOutInstanceRequest,
    InquiryPriceScaleOutInstanceResponse: InquiryPriceScaleOutInstanceResponse,
    TerminateTasksRequest: TerminateTasksRequest,
    EMRProductConfigSettings: EMRProductConfigSettings,
    NodeSpec: NodeSpec,
    TerminateInstanceRequest: TerminateInstanceRequest,
    TerminateInstanceResponse: TerminateInstanceResponse,
    InquiryPriceResult: InquiryPriceResult,
    TerminateResult: TerminateResult,
    MultiDisk: MultiDisk,

}

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

module.exports = {
    ResourceSpec: ResourceSpec,
    Placement: Placement,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    NodeSpec: NodeSpec,
    VPCSettings: VPCSettings,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    InquiryPriceResult: InquiryPriceResult,

}
